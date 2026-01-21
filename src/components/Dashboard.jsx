import { Link } from 'react-router-dom';

export default function Dashboard() {
  const deadlines = [
    { title: 'CS101 Quiz (10%)', course: 'Foundational Algorithms', dueIn: '2 days', progress: 33, color: 'primary', weight: 'High Weight' },
    { title: 'History Essay (20%)', course: 'The Renaissance Impact', dueIn: 'tomorrow', progress: 75, color: 'amber-400', weight: 'Critical' },
    { title: 'Math Problem Set', course: 'Calculus III: Integration', dueIn: 'tonight', progress: 90, color: 'purple-500', weight: 'Exercise' }
  ];

  return (
    <div className="bg-[#191d24] min-h-screen font-display text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#191d24]/80 backdrop-blur-md px-6 lg:px-20 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="size-9 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined font-bold">auto_stories</span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">Duezy</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-primary font-bold text-sm">Dashboard</Link>
              <Link to="/courses" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Courses</Link>
              <a className="text-white/60 hover:text-white transition-colors text-sm font-medium" href="#calendar">Calendar</a>
              <a className="text-white/60 hover:text-white transition-colors text-sm font-medium" href="#resources">Resources</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
              Student Mode
            </button>
            <div className="size-10 rounded-full border-2 border-primary/30 bg-gray-700 flex items-center justify-center font-bold">JD</div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-10">
        <div className="mb-12 relative">
          <div className="absolute -top-20 -left-20 size-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">Today, Oct 12</h1>
          <p className="text-white/40 font-medium">You have 3 tasks prioritized by AI for today's goals.</p>
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6 px-1">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">event_upcoming</span>
              Upcoming Deadlines
            </h2>
            <a className="text-sm text-primary/60 hover:text-primary transition-colors font-bold" href="#all">View All</a>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
            {deadlines.map((deadline, i) => (
              <div key={i} className={`min-w-[280px] bg-[rgba(43,48,58,0.6)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.05)] p-6 rounded-xl border-l-4 border-l-${deadline.color} group hover:scale-[1.02] transition-all cursor-pointer`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`bg-${deadline.color}/20 text-${deadline.color} text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>{deadline.weight}</span>
                  <span className="text-white/30 text-xs font-medium">Due in {deadline.dueIn}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{deadline.title}</h3>
                <p className="text-white/50 text-sm mb-6">{deadline.course}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-${deadline.color} shadow-[0_0_8px_rgba(0,190,204,0.5)]`} style={{width: `${deadline.progress}%`}}></div>
                  </div>
                  <span className="text-[10px] font-bold text-white/40">{deadline.progress}% Ready</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
              Today's Plan
            </h2>
            <div className="bg-[rgba(43,48,58,0.6)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6">
              <div className="space-y-6">
                <div className="p-6 hover:bg-white/5 rounded-xl transition-all">
                  <h4 className="font-bold text-lg mb-2">Review CS101 Lecture Notes</h4>
                  <p className="text-white/50 text-sm mb-4">Focus on "Graph Traversals" (Slides 24-40)</p>
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-bold text-white/40 hover:text-white flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">play_circle</span> Start Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="grid gap-4">
              <button className="bg-[rgba(43,48,58,0.6)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.05)] p-5 rounded-xl flex items-center gap-4 hover:bg-primary/10 transition-all">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">upload_file</span>
                </div>
                <div className="text-left">
                  <p className="font-bold">Upload Syllabus</p>
                  <p className="text-xs text-white/40">PDF, Word, or Photo</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
