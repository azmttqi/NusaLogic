"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminSidebar({ user }: { user: string }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Services", path: "/admin/services" },
    { name: "Portfolios", path: "/admin/portfolios" },
    { name: "Team", path: "/admin/team" },
  ];

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <h2 className="text-xl font-bold text-blue-500">NusaLogic Admin</h2>
        <p className="text-sm text-zinc-400 mt-1">Welcome, {user}</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600/10 text-blue-500 font-medium"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
