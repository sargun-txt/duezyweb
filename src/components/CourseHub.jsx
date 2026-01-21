import { Link } from 'react-router-dom';

export default function CourseHub() {
  return (
    <div className="min-h-screen bg-[#191d24] font-display text-white">
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(25,29,36,0.8)] backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight">Duezy</h1>
            </Link>
          </div>
          <Link to="/courses" className="bg-primary px-4 py-2 rounded-xl text-[#191d24] text-sm font-bold">Back to Courses</Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded">Active Course</span>
              <span className="text-slate-400 text-sm">Fall 2023 • CS402</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">Advanced Human-Computer Interaction</h2>
          </div>
        </div>

        <div className="flex border-b border-[rgba(255,255,255,0.05)] mb-8 gap-8">
          <a className="border-b-2 border-primary pb-4 flex items-center gap-2 text-primary" href="#overview">
            <span className="material-symbols-outlined text-sm">dashboard</span>
            <span className="text-sm font-bold">Overview</span>
          </a>
          <a className="border-b-2 border-transparent pb-4 flex items-center gap-2 text-slate-400 hover:text-white transition-colors" href="#deadlines">
            <span className="material-symbols-outlined text-sm">event_note</span>
            <span className="text-sm font-bold">Deadlines</span>
          </a>
          <Link to="/grade-calculator" className="border-b-2 border-transparent pb-4 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm">grade</span>
            <span className="text-sm font-bold">Grades</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[rgba(43,48,58,0.6)] backdrop-blur-[16px] border border-primary/20 shadow-[0_0_15px_rgba(0,190,204,0.3)] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary animate-pulse">psychology</span>
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">AI Syllabus Analyzer</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Syllabus_HCI_2023.pdf</h3>
                <p className="text-slate-400 text-sm mb-4">Modified 2 days ago • 14 pages total</p>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 w-fit px-3 py-1 rounded-full mb-4">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                <span className="text-primary text-xs font-bold">Parsing Complete • 100% Accurate</span>
              </div>
              <button className="bg-primary text-[#191d24] px-5 py-2.5 rounded-xl font-bold text-sm">Open Full View</button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[rgba(43,48,58,0.6)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</h3>
              <div className="grid gap-3">
                <a className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-[rgba(255,255,255,0.05)] hover:bg-white/10 transition-all" href="#canvas">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500">grid_view</span>
                    </div>
                    <span className="font-bold">Canvas Portal</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
