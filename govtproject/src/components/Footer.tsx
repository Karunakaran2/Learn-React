import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer bg-primary text-white mt-12 py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-border-color pb-2 inline-block">SPFO</h3>
          <p className="text-sm text-gray-300">
            Seamen's Provident Fund Organisation<br/>
            Directorate General of Shipping<br/>
            Ministry of Ports, Shipping and Waterways<br/>
            Government of India
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-border-color pb-2 inline-block">Important Links</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-300">
            <li><a href="https://www.dgshipping.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">Directorate General of Shipping</a></li>
            <li><a href="https://shipmin.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">Ministry of Ports, Shipping and Waterways</a></li>
            <li><a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">National Portal of India</a></li>
            <li><Link to="/grievance" className="hover:text-secondary transition">Grievance Redressal</Link></li>
            <li><Link to="/rti" className="hover:text-secondary transition">RTI Information</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-border-color pb-2 inline-block">Policies</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-300">
            <li><Link to="/policy/privacy" className="hover:text-secondary transition">Privacy Policy</Link></li>
            <li><Link to="/policy/terms" className="hover:text-secondary transition">Terms of Use</Link></li>
            <li><Link to="/policy/disclaimer" className="hover:text-secondary transition">Disclaimer</Link></li>
            <li><Link to="/policy/hyperlink" className="hover:text-secondary transition">Hyperlink Policy</Link></li>
            <li><Link to="/policy/accessibility" className="hover:text-secondary transition">Accessibility Statement</Link></li>
          </ul>
        </div>
      </div>
      <div className="container border-t border-gray-600 pt-6 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Seamen's Provident Fund Organisation. All Rights Reserved.</p>
        <p className="mt-2 text-gray-500">Website hosted and maintained by NIC.</p>
      </div>
    </footer>
  );
}
