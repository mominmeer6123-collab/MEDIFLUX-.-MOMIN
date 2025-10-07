require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/mediedu'
mongoose.connect(MONGO).then(()=>console.log('Mongo connected')).catch(e=>console.error(e))

const UserSchema = new mongoose.Schema({email:String,password:String})
const PatientSchema = new mongoose.Schema({name:String,age:Number,phone:String})
const AppointmentSchema = new mongoose.Schema({patientId:Number,datetime:Date,notes:String})

const User = mongoose.model('User', UserSchema)
const Patient = mongoose.model('Patient', PatientSchema)
const Appointment = mongoose.model('Appointment', AppointmentSchema)

app.get('/api/patients', async (req,res)=> {
  const patients = await Patient.find().limit(50)
  res.json(patients)
})
app.post('/api/patients', async (req,res)=> {
  const p = new Patient(req.body)
  await p.save()
  res.json(p)
})

app.get('/api/appointments', async(req,res)=> {
  const a = await Appointment.find().limit(50)
  res.json(a)
})

// seed route (educational only)
app.post('/api/seed', async(req,res)=>{
  await Patient.deleteMany({})
  await Appointment.deleteMany({})
  await Patient.create([{name:'Alice',age:34,phone:'111111'},{name:'Bob',age:45,phone:'222222'}])
  await Appointment.create([{patientId:1,datetime:new Date(),notes:'Checkup'}])
  res.json({ok:true})
})

const port = process.env.PORT || 4000
app.listen(port, ()=>console.log('Server running on', port))
