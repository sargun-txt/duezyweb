import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Onboarding() {
  const [sessionName, setSessionName] = useState('');
  const [workTimes, setWorkTimes] = useState(['afternoons']);

  const toggleWorkTime = (time) => {
    setWorkTimes(prev => 
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  return (
    <div className="min-h-screen bg-[#121418] font-display">
      {/* Progress Header */}
      <header className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Onboarding</span>
          <span className="text-sm font-medium text-slate-500">Step 2 of 5</span>
        </div>
        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[40%] rounded-full shadow-[0_0_8px_rgba(0,190,204,0.6)]"></div>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-12 flex flex-col items-center">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl font-extrabold tracking-tight mb-4">
            Name your session
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Give this study block a distinct name to help our AI organize your schedule.
          </p>
        </div>

        {/* Session Name Input */}
        <div className="w-full mb-16">
          <div className="relative group">
            <input 
              className="w-full bg-[rgba(25,29,36,0.65)] border border-[rgba(255,255,255,0.08)] rounded-xl px-8 py-6 text-2xl font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 placeholder:text-slate-600 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
              placeholder="e.g., Winter 2026" 
              type="text"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-3xl">edit_note</span>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="w-full backdrop-blur-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary">schedule</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">Sleep & Preferences</h2>
          </div>

          {/* Sleep Window Slider */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <p className="text-slate-300 font-medium">When do you usually sleep?</p>
              <div className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                <span className="text-sm font-bold">12:30 AM — 08:00 AM</span>
              </div>
            </div>
            <div className="relative h-12 flex items-center">
              {/* Track */}
              <div className="absolute w-full h-1.5 bg-slate-800 rounded-full"></div>
              {/* Selection Area */}
              <div className="absolute left-[52%] right-[15%] h-1.5 bg-primary rounded-full shadow-[0_0_12px_rgba(0,190,204,0.4)]"></div>
              {/* Handles */}
              <div className="absolute left-[52%] -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg border-4 border-[#121418] cursor-pointer hover:scale-110 transition-transform"></div>
                <span className="text-[10px] mt-2 font-bold text-slate-500 uppercase">Start</span>
              </div>
              <div className="absolute right-[15%] translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg border-4 border-[#121418] cursor-pointer hover:scale-110 transition-transform"></div>
                <span className="text-[10px] mt-2 font-bold text-slate-500 uppercase">Wake</span>
              </div>
            </div>
          </div>

          {/* Work Block Chips */}
          <div>
            <p className="text-slate-300 font-medium mb-4">Preferred work times</p>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => toggleWorkTime('mornings')}
                className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all ${
                  workTimes.includes('mornings') 
                    ? 'bg-primary/15 border border-primary/40 text-primary' 
                    : 'border border-[rgba(255,255,255,0.08)] bg-white/5 text-slate-300 hover:bg-white/10 hover:border-slate-500'
                }`}
              >
                <span className="material-symbols-outlined text-sm">wb_sunny</span>
                Mornings
              </button>
              <button 
                onClick={() => toggleWorkTime('afternoons')}
                className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all ${
                  workTimes.includes('afternoons') 
                    ? 'bg-primary/15 border border-primary/40 text-primary' 
                    : 'border border-[rgba(255,255,255,0.08)] bg-white/5 text-slate-300 hover:bg-white/10 hover:border-slate-500'
                }`}
              >
                <span className="material-symbols-outlined text-sm">light_mode</span>
                Afternoons
              </button>
              <button 
                onClick={() => toggleWorkTime('evenings')}
                className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all ${
                  workTimes.includes('evenings') 
                    ? 'bg-primary/15 border border-primary/40 text-primary' 
                    : 'border border-[rgba(255,255,255,0.08)] bg-white/5 text-slate-300 hover:bg-white/10 hover:border-slate-500'
                }`}
              >
                <span className="material-symbols-outlined text-sm">dark_mode</span>
                Evenings
              </button>
              <button 
                onClick={() => toggleWorkTime('weekends')}
                className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all ${
                  workTimes.includes('weekends') 
                    ? 'bg-primary/15 border border-primary/40 text-primary' 
                    : 'border border-[rgba(255,255,255,0.08)] bg-white/5 text-slate-300 hover:bg-white/10 hover:border-slate-500'
                }`}
              >
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                Weekends
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full flex justify-between items-center pt-8">
          <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-medium">
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </Link>
          <Link to="/calendar-sync" className="group relative px-10 py-4 bg-primary rounded-xl font-bold text-[#121418] hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-2">
              Next Step
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 left-0 w-full h-1/3 pointer-events-none -z-10 opacity-30 overflow-hidden">
          <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>
      </main>
    </div>
  );
}
