import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PageLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-gray-100">
      <Header onToggleSidebar={() => setOpen(!open)} />
      <div className="grid grid-cols-1 md:grid-cols-[16rem,1fr]">
        <Sidebar isOpen={open} onClose={() => setOpen(false)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
