import Navbar from './Navbar';
import Footer from './Footer';



export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-blue-950">
      <Navbar />
      
      {/* 
        Removed 'pt-24' so the page content starts at the very top edge of the browser, 
        allowing the transparent Navbar to sit directly over the Hero image.
      */}
      <main className="grow w-full">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}