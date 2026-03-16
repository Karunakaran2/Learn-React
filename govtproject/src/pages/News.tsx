import { Search, ChevronRight } from 'lucide-react';

export function News() {
  const newsItems = [
    { id: 1, title: 'SPFO announces simplified KYC update process for retired seafarers.', date: '10th Mar 2026', tags: ['KYC', 'Seniors'] },
    { id: 2, title: 'Annual statement for FY 2024-25 is now available for download.', date: '05th Mar 2026', tags: ['Statements', 'Finance'] },
    { id: 3, title: 'Grievance resolution workshop organized successfully at Mumbai office.', date: '28th Feb 2026', tags: ['Events', 'Grievance'] },
    { id: 4, title: 'Integration with DigiLocker completed for e-Passbooks.', date: '15th Feb 2026', tags: ['Digital', 'IT'] },
    { id: 5, title: 'Notice to shipowners regarding delay penalty rates revision.', date: '02nd Feb 2026', tags: ['Compliance'] },
    { id: 6, title: 'New helpline number activated for international seafarers.', date: '20th Jan 2026', tags: ['Support'] },
  ];

  return (
    <div className="news-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">News & Announcements</h2>
      
      <div className="flex justify-between items-center mb-8">
        <p className="text-lg text-gray-600">Stay updated with the latest events and policy changes.</p>
        <div className="flex items-center bg-white border border-border-color rounded px-3 py-2 w-full md:w-64 max-w-sm">
           <Search size={18} className="text-gray-400 mr-2" />
           <input type="text" placeholder="Search news..." className="border-none outline-none flex-grow" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {newsItems.map(item => (
          <div key={item.id} className="glass-panel p-6 flex flex-col justify-between hover:shadow-lg transition cursor-pointer h-full border-l-4 border-l-secondary border-t border-b border-r border-[#e2e8f0]">
             <div>
               <div className="flex justify-between items-start mb-3">
                 <span className="text-xs font-bold bg-primary text-white px-2 py-1 rounded">{item.date}</span>
                 <div className="flex gap-1">
                   {item.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-1 py-0.5 rounded">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
               <h3 className="text-lg font-bold text-primary mb-4 leading-tight">{item.title}</h3>
             </div>
             <a href="#" className="flex items-center text-sm font-bold text-secondary group mt-auto">
               Read Full Story <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1"/>
             </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex gap-2">
          <button className="btn bg-gray-200 text-gray-500 cursor-not-allowed">Previous</button>
          <button className="btn btn-primary">1</button>
          <button className="btn bg-gray-100 hover:bg-gray-200 text-primary">2</button>
          <button className="btn bg-gray-100 hover:bg-gray-200 text-primary">3</button>
          <button className="btn bg-gray-200 hover:bg-gray-300 text-primary">Next</button>
        </div>
      </div>
    </div>
  );
}
