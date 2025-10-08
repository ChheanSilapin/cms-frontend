import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PageLayout({ children, menu }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-gray-100">
      <Header onToggleSidebar={() => setOpen((v) => !v)} />
      <div className="grid grid-cols-1 md:grid-cols-[16rem,1fr]">
        <Sidebar menu={menu} isOpen={open} onClose={() => setOpen(false)} />
        <main className="p-6 md:ml-0 md:static ml-0">{children}</main>
      </div>
    </div>
  );
}
