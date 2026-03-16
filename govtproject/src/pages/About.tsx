export function About() {
  return (
    <div className="about-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">About SPFO</h2>
      
      <div className="glass-panel p-6 md:p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-primary">Overview</h3>
        <p className="mb-4">
          The Seamen's Provident Fund Organisation (SPFO) functions under the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Government of India. It was established under the Seamen's Provident Fund Act, 1966.
        </p>
        <p>
          The primary objective of SPFO is to institute a provident fund for seamen, providing social security and financial stability post-retirement or in the event of unforeseen circumstances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold mb-4 text-secondary">Our Mission</h3>
          <p className="text-gray-600">
            To administer the Seamen's Provident Fund efficiently, transparently, and robustly, ensuring that every registered seafarer's financial future is secure. We strive to provide seamless digital services and timely settlements.
          </p>
        </div>
        <div className="glass-panel p-6">
          <h3 className="text-xl font-bold mb-4 text-secondary">Our Vision</h3>
          <p className="text-gray-600">
            To be a globally recognized benchmark in maritime social security administration, driving 100% digitalization of services and achieving the highest levels of stakeholder satisfaction.
          </p>
        </div>
      </div>

      <div className="glass-panel p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-primary">Organizational Structure & Governance</h3>
        <p className="mb-4">
          SPFO is governed by a Board of Trustees (BoT) constituted by the Government of India. The Board comprises representatives from:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 flex flex-col gap-2">
          <li>The Central Government</li>
          <li>Employers of Seamen (Shipowners' Associations)</li>
          <li>Seamen (Seafarers' Unions)</li>
        </ul>
        <p>
          The Director General of Shipping acts as the Ex-officio Chairman of the Board. The day-to-day administration is managed by the Commissioner, SPFO.
        </p>
      </div>
    </div>
  );
}
