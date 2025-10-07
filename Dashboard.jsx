import React from 'react'
export default function Dashboard({onLogout}) {
  const [patients] = React.useState([{id:1,name:'Alice',age:34},{id:2,name:'Bob',age:45}])
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">MediEdu — Dashboard</h2>
        <div>
          <button onClick={onLogout} className="px-3 py-1 rounded border">Logout</button>
        </div>
      </header>
      <section className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow"><div className="text-sm text-gray-500">Active Patients</div><div className="text-2xl font-bold">{patients.length}</div></div>
        <div className="p-4 bg-white rounded shadow"><div className="text-sm text-gray-500">Appointments Today</div><div className="text-2xl font-bold">4</div></div>
        <div className="p-4 bg-white rounded shadow"><div className="text-sm text-gray-500">Pending Reports</div><div className="text-2xl font-bold">2</div></div>
      </section>
      <section>
        <h3 className="font-semibold mb-2">Patient list</h3>
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50"><tr><th className="p-3 text-left">ID</th><th>Name</th><th>Age</th></tr></thead>
            <tbody>{patients.map(p=>(<tr key={p.id} className="border-t"><td className="p-3">{p.id}</td><td>{p.name}</td><td>{p.age}</td></tr>))}</tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
