import { Inbox, Calendar, CalendarDays } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[var(--sidebar-background)] border-r border-border flex flex-col px-4 py-6 hidden md:flex">
      
      {/* The Todoist Logo & Branding */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
          {/* Custom White Checkmark SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-xl font-bold text-foreground tracking-tight">Todoist</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        <button className="w-full flex items-center gap-3 px-2 py-2 rounded-md bg-muted text-primary font-medium transition-colors">
          <Inbox size={18} />
          <span>Inbox</span>
        </button>
        
      </nav>
    </div>
  );
}