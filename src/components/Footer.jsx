export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-primary-100 opacity-80">
          &copy; {new Date().getFullYear()} Estate Corporate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}