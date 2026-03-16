import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="app-wrapper flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow container py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
