import { prisma } from "@/lib/prisma";
import { createTeamMember, deleteTeamMember, updateTeamMember } from "../../actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TeamAdminPage({
  searchParams,
}: {
  searchParams: { editId?: string };
}) {
  const team = await prisma.teamMember.findMany({
    orderBy: { createdAt: "asc" },
  });

  const editId = searchParams.editId;
  const editMember = editId ? team.find((t) => t.id === editId) : null;

  // Function to handle the edit form submission
  async function editAction(formData: FormData) {
    "use server";
    if (editId) {
      await updateTeamMember(editId, formData);
      redirect("/admin/team");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Team</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Add / Edit Team Member */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              {editMember ? "Edit Team Member" : "Add Team Member"}
            </h2>
            <form action={editMember ? editAction : createTeamMember} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  defaultValue={editMember?.name || ""}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="e.g. John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Role</label>
                <input
                  type="text"
                  name="role"
                  required
                  defaultValue={editMember?.role || ""}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="e.g. CEO & Founder"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Photo URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  defaultValue={editMember?.imageUrl || ""}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">LinkedIn URL (Optional)</label>
                <input
                  type="url"
                  name="linkedinUrl"
                  defaultValue={editMember?.linkedinUrl || ""}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">GitHub URL (Optional)</label>
                <input
                  type="url"
                  name="githubUrl"
                  defaultValue={editMember?.githubUrl || ""}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  {editMember ? "Update" : "Save"}
                </button>
                {editMember && (
                  <Link
                    href="/admin/team"
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-center text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* List Team Members */}
        <div className="lg:col-span-2 space-y-4">
          {team.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center text-zinc-500">
              No team members found. Add one from the form.
            </div>
          ) : (
            team.map((item: any) => (
              <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex gap-4 items-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full overflow-hidden shrink-0 border border-zinc-700">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600">No Pic</div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.name}</h3>
                      <p className="text-blue-400 text-sm font-medium">{item.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/team?editId=${item.id}`}
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-3 py-1 rounded transition-colors text-sm"
                      >
                        Edit
                      </Link>
                      <form action={async () => {
                        "use server";
                        await deleteTeamMember(item.id);
                      }}>
                        <button
                          type="submit"
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded transition-colors text-sm"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-2 text-sm">
                    {item.linkedinUrl && (
                      <a href={item.linkedinUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">LinkedIn</a>
                    )}
                    {item.githubUrl && (
                      <a href={item.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">GitHub</a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
