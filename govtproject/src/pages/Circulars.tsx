import { useState } from 'react';
import { Search, Download, Calendar } from 'lucide-react';

export function Circulars() {
  const [activeTab, setActiveTab] = useState('circulars');

  const tabs = [
    { id: 'circulars', label: 'Circulars' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'reports', label: 'Annual Reports' },
    { id: 'minutes', label: 'BoT Minutes' }
  ];

  const dummyData = [
    { id: '1', type: 'circulars', ref: 'CIR/12/2026', title: 'Extension of deadline for life certificate submission', date: '2026-02-15' },
    { id: '2', type: 'circulars', ref: 'CIR/11/2026', title: 'Implementation of localized help desks at Major Ports', date: '2026-01-22' },
    { id: '3', type: 'notifications', ref: 'NOT/08/2026', title: 'Revision of PF Interest Rate for FY 2025-26', date: '2026-03-01' },
    { id: '4', type: 'reports', ref: 'AR-24-25', title: 'Annual Report for Financial Year 2024-2025', date: '2025-10-15' },
    { id: '5', type: 'minutes', ref: 'BOT-108', title: 'Minutes of 108th Board of Trustees Meeting', date: '2025-12-05' }
  ];

  const filteredData = dummyData.filter(d => d.type === activeTab);

  return (
    <div className="circulars-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Official Publications</h2>
      
      <div className="glass-panel overflow-hidden mb-8 flex flex-col md:flex-row">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-6 text-center font-bold text-lg transition ${
              activeTab === tab.id ? 'bg-primary text-secondary border-b-4 border-secondary' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6 gap-4">
        <div className="flex items-center bg-white border border-border-color rounded px-3 py-2 flex-grow max-w-md">
           <Search size={18} className="text-gray-400 mr-2" />
           <input type="text" placeholder="Search by title or Reference No..." className="border-none outline-none flex-grow" />
        </div>
        <div className="flex gap-2 items-center">
           <span className="text-sm font-medium text-gray-600">Filter Year:</span>
           <select className="border border-border-color rounded px-3 py-2 bg-white">
             <option>2026</option>
             <option>2025</option>
             <option>2024</option>
           </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.id} className="glass-panel p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:-translate-y-1 transition">
              <div className="flex-grow">
                <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded mb-2 inline-block">Ref: {item.ref}</span>
                <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <Calendar size={14} /> Published on: {item.date}
                </div>
              </div>
              <div>
                 <button className="btn btn-primary flex gap-2"><Download size={16}/> View / Download</button>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-panel p-12 text-center text-gray-500">
             <p>No documents found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
