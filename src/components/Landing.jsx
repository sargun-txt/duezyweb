import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#191d24] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-1/4 opacity-20 animate-float">
        <span className="material-symbols-outlined text-primary text-[80px]">auto_awesome</span>
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-10 animate-float" style={{animationDelay: '2s'}}>
        <span className="material-symbols-outlined text-white text-[120px]">calendar_today</span>
      </div>
      <div className="absolute top-1/2 right-10 opacity-10 animate-float" style={{animationDelay: '4s'}}>
        <span className="material-symbols-outlined text-primary text-[60px]">school</span>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(0,190,204,0.4)]">
            <span className="material-symbols-outlined text-[#191d24] font-bold">dynamic_form</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">Duezy</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a className="hover:text-primary transition-colors" href="#features">Features</a>
            <a className="hover:text-primary transition-colors" href="#ta">TA Portal</a>
            <a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
          </nav>
          <div className="h-6 w-px bg-white/10 hidden md:block"></div>
          <Link to="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Sign in</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Welcome to Duezy
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            <span className="material-symbols-outlined text-sm">bolt</span>
            AI-Powered Scheduling for Modern Students
          </div>
        </div>

        {/* Glassmorphism Hero Card */}
        <div className="bg-[rgba(43,48,58,0.4)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] w-full max-w-2xl rounded-xl p-8 md:p-12 flex flex-col items-center text-center">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Your semester, automated.</h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg mx-auto">
              Experience the future of productivity. Upload your syllabus and let our AI parse every deadline, exam, and reading into a personalized study plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link to="/onboarding" className="shadow-[0_0_20px_rgba(0,190,204,0.4)] flex items-center justify-center gap-2 min-w-[240px] h-14 bg-primary hover:bg-primary/90 text-[#191d24] font-extrabold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <span className="material-symbols-outlined">add_circle</span>
              Create Study Session
            </Link>
            <button className="flex items-center justify-center gap-2 min-w-[140px] h-14 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-lg transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </button>
          </div>

          {/* Feature Pills */}
          <div className="mt-12 pt-8 border-t border-white/5 w-full grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary/60">description</span>
              <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Syllabus Parsing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary/60">event_repeat</span>
              <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Smart Blocks</span>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
              <span className="material-symbols-outlined text-primary/60">psychology</span>
              <span className="text-xs font-medium text-white/40 uppercase tracking-widest">Adaptive AI</span>
            </div>
          </div>
        </div>

        {/* Secondary Sign In */}
        <div className="mt-8 text-white/50 text-sm">
          Already have an account? 
          <Link to="/login" className="text-primary hover:underline font-bold ml-1">Sign in here</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 bg-[#191d24]/50 backdrop-blur-md">
        <p className="text-white/30 text-sm">© 2024 Duezy AI. Designed for higher education.</p>
        <div className="flex gap-6">
          <a className="text-white/30 hover:text-primary transition-colors" href="#lang">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a className="text-white/30 hover:text-primary transition-colors" href="#dev">
            <span className="material-symbols-outlined">terminal</span>
          </a>
          <a className="text-white/30 hover:text-primary transition-colors" href="#help">
            <span className="material-symbols-outlined">help_outline</span>
          </a>
        </div>
      </footer>

      {/* Bottom Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
    </div>
  );
}
