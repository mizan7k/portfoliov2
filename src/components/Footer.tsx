export default function Footer() {
  return (
    <footer className="py-12 bg-brand-black border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-black tracking-tighter">
          MIZANUR<span className="text-brand-orange">RAHMAN</span>
        </div>
        
        <div className="text-gray-500 text-sm font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Mizanur Rahman. All rights reserved.
        </div>

        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
