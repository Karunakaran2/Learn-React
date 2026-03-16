import { FileText, Download } from 'lucide-react';

export function ActsRules() {
  const documents = [
    { id: 1, title: 'The Seamen\'s Provident Fund Act, 1966', category: 'Acts', date: '1966-03-26', size: '1.2 MB' },
    { id: 2, title: 'The Seamen\'s Provident Fund (Amendment) Act, 1997', category: 'Amendments', date: '1997-08-14', size: '540 KB' },
    { id: 3, title: 'The Seamen\'s Provident Fund Rules, 1966', category: 'Rules', date: '1966-06-01', size: '2.5 MB' },
    { id: 4, title: 'SPFO Investment Policy Guidelines (2025 Revised)', category: 'Policies', date: '2025-04-01', size: '890 KB' },
    { id: 5, title: 'Information Technology Security Policy', category: 'Policies', date: '2024-01-10', size: '1.1 MB' }
  ];

  return (
    <div className="acts-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Acts, Rules, and Policies</h2>

      <div className="glass-panel p-6 mb-8 bg-secondary/10">
        <p className="text-lg font-medium">
          The operations of SPFO are strictly governed by statutory provisions to safeguard the interests of seafarers. Access complete digital copies of our governing acts below.
        </p>
      </div>

      <div className="filter-bar flex gap-4 mb-6">
        <select className="px-4 py-2 rounded border border-border-color bg-white w-full md:w-auto">
           <option>All Categories</option>
           <option>Acts</option>
           <option>Amendments</option>
           <option>Rules</option>
           <option>Policies</option>
        </select>
        <input type="text" placeholder="Search by document name..." className="px-4 py-2 rounded border border-border-color flex-grow max-w-md hidden md:block" />
      </div>

      <div className="glass-panel overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-4 border-b border-border-color">Document Name</th>
              <th className="p-4 border-b border-border-color">Category</th>
              <th className="p-4 border-b border-border-color">Date</th>
              <th className="p-4 border-b border-border-color text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => (
              <tr key={doc.id} className="hover:bg-gray-100 transition border-b border-border-color last:border-0">
                <td className="p-4 flex items-center gap-3">
                  <FileText className="text-secondary flex-shrink-0"/>
                  <span className="font-medium text-gray-800">{doc.title}</span>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-700 font-bold">{doc.category}</span>
                </td>
                <td className="p-4 text-sm text-gray-600">{doc.date}</td>
                <td className="p-4 text-center">
                  <button className="btn btn-secondary text-sm py-1 px-3 flex items-center justify-center gap-1 mx-auto" aria-label={`Download ${doc.title}`}>
                    <Download size={14}/> {doc.size}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
