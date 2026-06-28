import { getServerSession } from "next-auth";
import AdminSidebar from "../components/AdminSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      <AdminSidebar user={session?.user?.name || "Admin"} />
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950">
        {children}
      </main>
    </div>
  );
}
