import { Link } from 'react-router-dom';

export default function TADashboard() {
  return (
    <div className="min-h-screen bg-[#191d24] font-display text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="flex items-center justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#191d24] font-bold text-2xl">auto_awesome</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">Duezy</h1>
          </Link>
        </div>
        <h2 className="text-5xl font-extrabold">TADashboard</h2>
        <p className="text-white/60 text-lg">This screen is currently under development.</p>
        <div className="flex gap-4 justify-center pt-8">
          <Link to="/dashboard" className="bg-primary text-[#191d24] px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
            Go to Dashboard
          </Link>
          <Link to="/" className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
