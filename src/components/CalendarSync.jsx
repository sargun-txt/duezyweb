import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CalendarSync() {
  const [readEvents, setReadEvents] = useState(true);
  const [writeBlocks, setWriteBlocks] = useState(true);

  return (
    <div className="min-h-screen bg-[#191d24] font-display text-white">
      {/* Onboarding Progress */}
      <div className="w-full max-w-[960px] mx-auto px-6 py-8">
        <div className="flex flex-col gap-3">
          <div className="flex gap-6 justify-between items-center">
            <p className="text-white/60 text-sm font-medium leading-normal tracking-wide uppercase">Onboarding Progress</p>
            <p className="text-primary text-sm font-bold leading-normal">60%</p>
          </div>
          <div className="rounded-full bg-white/5 h-1.5 overflow-hidden">
            <div className="h-full rounded-full bg-primary shadow-[0_0_20px_rgba(0,190,204,0.2)]" style={{width: '60%'}}></div>
          </div>
          <p className="text-white/40 text-xs font-normal leading-normal">Step 3 of 5: Connect Calendar</p>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Headline Section */}
        <div className="max-w-[800px] w-full text-center mb-12">
          <h1 className="text-white tracking-tight text-[48px] font-extrabold leading-tight mb-4">
            Sync Your Schedule
          </h1>
          <p className="text-white/60 text-lg font-normal max-w-xl mx-auto">
            Let our AI organize your study life by connecting your Google Calendar to find the perfect windows for focus.
          </p>
        </div>

        {/* Central Liquid Glass Card */}
        <div className="bg-[rgba(43,48,58,0.4)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl max-w-[960px] w-full overflow-hidden flex flex-col">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Illustration & Info */}
            <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-transparent mb-8 relative group flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/40">calendar_month</span>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay rounded-lg"></div>
              </div>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                AI Scheduling Logic
              </h3>
              <p className="text-white/60 leading-relaxed">
                We use AI to parse your syllabus and intelligently schedule study blocks around your existing commitments, classes, and social events.
              </p>
            </div>

            {/* Right Column: Settings & CTA */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between bg-white/[0.02]">
              <div className="space-y-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white text-base font-semibold">Read events</p>
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">Required</span>
                    </div>
                    <p className="text-white/40 text-sm">Allow AI to see your current classes and commitments.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-not-allowed">
                    <div className={`w-11 h-6 rounded-full ${readEvents ? 'bg-primary' : 'bg-primary/40'}`}></div>
                    <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${readEvents ? 'translate-x-5' : ''}`}></div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white text-base font-semibold">Write study blocks</p>
                      <span className="material-symbols-outlined text-white/30 text-sm cursor-help">info</span>
                    </div>
                    <p className="text-white/40 text-sm">Automatically insert optimized study sessions into your calendar.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      checked={writeBlocks} 
                      onChange={(e) => setWriteBlocks(e.target.checked)}
                      className="sr-only peer" 
                      type="checkbox"
                    />
                    <div className={`w-11 h-6 rounded-full ${writeBlocks ? 'bg-primary shadow-[0_0_20px_rgba(0,190,204,0.3)]' : 'bg-white/10'} transition-all`}>
                      <div className={`absolute top-[4px] left-[4px] bg-white rounded-full h-4 w-4 transition-transform ${writeBlocks ? 'translate-x-5' : ''}`}></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <Link to="/dashboard" className="w-full flex items-center justify-center gap-3 bg-white text-[#101818] py-4 px-6 rounded-lg font-bold text-base transition-all hover:scale-[1.02] active:scale-95 shadow-xl">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  Connect Google Calendar
                </Link>
                <p className="text-center text-white/30 text-[12px]">
                  Your data stays private. We only see what you allow. <br/>
                  <a className="underline hover:text-white/50" href="#privacy">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quick Info */}
        <div className="mt-8 flex gap-8 text-white/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary/50 text-sm">lock</span>
            <span className="text-xs">End-to-end Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary/50 text-sm">bolt</span>
            <span className="text-xs">Zero-latency Sync</span>
          </div>
        </div>
      </main>
    </div>
  );
}
