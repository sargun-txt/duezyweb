import { Link } from 'react-router-dom';

export default function Courses() {
  const courses = [
    { code: 'PSYCH 101', title: 'Intro to Behavioral Psychology', prof: 'Dr. Sarah Jenkins', progress: 65, next: 'Quiz tomorrow', color: 'primary' },
    { code: 'CS 50', title: 'Computer Science & Algorithms', prof: 'Prof. David Malan', progress: 42, next: 'PSet 4 due in 5 days', color: 'blue' },
    { code: 'MATH 202', title: 'Calculus II: Theoretical', prof: 'Dr. Robert Chen', progress: 90, next: 'All tasks complete', color: 'green' },
    { code: 'ENG 105', title: 'Modern Literature & Poetry', prof: 'Prof. Alice Walker', progress: 28, next: 'Essay due tonight', color: 'orange' },
    { code: 'BIO 310', title: 'Molecular Biology Lab', prof: 'Dr. Linda Zhang', progress: 55, next: 'Lab report in 2 days', color: 'purple' }
  ];

  return (
    <div className="bg-[#191d24] min-h-screen font-display text-white">
      <nav className="sticky top-0 z-50 bg-[rgba(25,29,36,0.8)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.05)] px-6 lg:px-20 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-[#191d24]">
            <span className="material-symbols-outlined font-bold">diamond</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">Duezy</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/dashboard" className="text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity">Dashboard</Link>
          <Link to="/courses" className="text-sm font-bold text-primary">Courses</Link>
          <a className="text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity" href="#deadlines">Deadlines</a>
          <a className="text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity" href="#grades">Grades</a>
        </div>
        <div className="size-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">JD</div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">My Courses</h2>
            <p className="text-slate-400 font-medium">Spring Semester 2024 • 5 Active Courses</p>
          </div>
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full bg-[rgba(43,48,58,0.6)] border-none rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400 backdrop-blur-md text-white transition-all" placeholder="Search courses, instructors, or tags..." type="text"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Link key={i} to="/course-hub" className="bg-[rgba(43,48,58,0.6)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.05)] rounded-xl p-6 flex flex-col group cursor-pointer hover:border-primary/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  {course.code}
                </div>
                <span className="material-symbols-outlined opacity-30 group-hover:opacity-100 transition-opacity">more_vert</span>
              </div>
              <h3 className="text-xl font-bold mb-1 leading-snug">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-8">{course.prof}</p>
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-orange-400">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Next: {course.next}
                  </span>
                  <span className="opacity-60 uppercase">Progress: {course.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary shadow-[0_0_8px_rgba(0,190,204,0.3)] rounded-full" style={{width: `${course.progress}%`}}></div>
                </div>
              </div>
            </Link>
          ))}

          <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 hover:border-primary transition-all group cursor-pointer bg-slate-800/20">
            <div className="w-12 h-12 rounded-full border-2 border-slate-600 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">add</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Add New Course</h3>
            <p className="text-sm text-slate-400 max-w-[200px]">Expand your semester by adding a new module.</p>
          </div>
        </div>
      </main>

      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-[#191d24] shadow-[0_0_20px_rgba(0,190,204,0.4)] hover:scale-110 active:scale-95 transition-all z-[60]">
        <span className="material-symbols-outlined text-4xl font-bold">add</span>
      </button>
    </div>
  );
}
