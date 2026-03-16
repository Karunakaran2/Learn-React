import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Bell, Anchor, Info, Megaphone } from 'lucide-react';

export function Home() {
  return (
    <div className="home-page page-enter">
      {/* Search / Alerts Marquee */}
      <div className="bg-secondary text-white py-2 px-4 flex items-center gap-4 rounded-md mb-6 relative overflow-hidden">
        <span className="font-bold flex-shrink-0 flex items-center gap-2 z-10 bg-secondary pr-4"><Megaphone size={16}/> Latest Alert:</span>
        <div className="marquee-container flex-grow">
          <div className="marquee-content text-sm">Important Notice: Revision of PF Interest Rate for FY 2025-26. | New Registration Portal for Seafarers is now live.</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero mb-12 glass-panel overflow-hidden relative">
        <div className="bg-primary text-white p-8 md:p-12 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Empowering Seafarers’ Future</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-300">
            Secure your retirement and future with SPFO’s transparent and efficient provident fund services. 
            Dedicated to the welfare of maritime professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <Link to="/services" className="btn btn-secondary font-bold">Access Online Services <ArrowRight size={18} className="ml-2"/></Link>
             <Link to="/about" className="btn bg-white text-primary font-bold hover:bg-gray-100">Know More About SPFO</Link>
          </div>
        </div>
      </section>

      {/* Quick Links & Services */}
      <section className="quick-links mb-12">
        <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-border-color">Major Services & Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/services" className="glass-panel p-6 hover:-translate-y-1 transition text-center flex flex-col items-center gap-4 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Anchor size={32}/></div>
            <span className="font-bold text-lg">Seafarer Login</span>
            <p className="text-sm text-light">Access your PF account, check balance and update KYC.</p>
          </Link>
          <Link to="/acts-rules" className="glass-panel p-6 hover:-translate-y-1 transition text-center flex flex-col items-center gap-4 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><FileText size={32}/></div>
            <span className="font-bold text-lg">Acts & Rules</span>
            <p className="text-sm text-light">Read the Seamen's Provident Fund Act and latest amendments.</p>
          </Link>
          <Link to="/circulars" className="glass-panel p-6 hover:-translate-y-1 transition text-center flex flex-col items-center gap-4 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Bell size={32}/></div>
            <span className="font-bold text-lg">Circulars</span>
            <p className="text-sm text-light">Download latest official notifications and circulars.</p>
          </Link>
          <Link to="/grievance" className="glass-panel p-6 hover:-translate-y-1 transition text-center flex flex-col items-center gap-4 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"><Info size={32}/></div>
            <span className="font-bold text-lg">Grievance Registration</span>
            <p className="text-sm text-light">Register a complaint through the DGS portal.</p>
          </Link>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="news grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-4 border-b pb-2 border-border-color">
            <h3 className="text-xl font-bold">Latest News</h3>
            <Link to="/news" className="text-sm text-secondary font-bold hover:underline">View All</Link>
          </div>
          <ul className="flex flex-col gap-4">
             <li className="flex gap-4 items-start">
               <div className="bg-gray-100 text-center p-2 rounded min-w-[60px]">
                 <span className="block font-bold text-lg text-primary">10</span>
                 <span className="block text-xs uppercase text-light">Mar</span>
               </div>
               <div>
                  <Link to="/news/1" className="font-medium hover:text-secondary">SPFO announces simplified KYC update process for retired seafarers.</Link>
               </div>
             </li>
             <li className="flex gap-4 items-start">
               <div className="bg-gray-100 text-center p-2 rounded min-w-[60px]">
                 <span className="block font-bold text-lg text-primary">05</span>
                 <span className="block text-xs uppercase text-light">Mar</span>
               </div>
               <div>
                  <Link to="/news/2" className="font-medium hover:text-secondary">Annual statement for FY 2024-25 is now available for download.</Link>
               </div>
             </li>
          </ul>
        </div>

        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-4 border-b pb-2 border-border-color">
            <h3 className="text-xl font-bold">Recent Circulars</h3>
            <Link to="/circulars" className="text-sm text-secondary font-bold hover:underline">View All</Link>
          </div>
          <ul className="flex flex-col gap-4">
             <li className="flex gap-3 items-center">
                <FileText size={18} className="text-light flex-shrink-0" />
                <a href="#" className="font-medium hover:text-secondary text-sm">Circular No. 12/2026: Extension of deadline for life certificate submission.</a>
             </li>
             <li className="flex gap-3 items-center">
                <FileText size={18} className="text-light flex-shrink-0" />
                <a href="#" className="font-medium hover:text-secondary text-sm">Notification: Board of Trustees Meeting Minutes - Q1 2026.</a>
             </li>
             <li className="flex gap-3 items-center">
                <FileText size={18} className="text-light flex-shrink-0" />
                <a href="#" className="font-medium hover:text-secondary text-sm">Advisory on fraudulent calls regarding PF withdrawal.</a>
             </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
