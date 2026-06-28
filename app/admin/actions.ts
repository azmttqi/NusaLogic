"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- SERVICES ACTIONS ---

export async function createService(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const icon = formData.get("icon") as string;

  await prisma.service.create({
    data: { title, description, icon },
  });

  revalidatePath("/admin/services");
  revalidatePath("/");
}

export async function deleteService(id: string) {
  await prisma.service.delete({
    where: { id },
  });

  revalidatePath("/admin/services");
  revalidatePath("/");
}

// --- PORTFOLIOS ACTIONS ---

export async function createPortfolio(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const link = formData.get("link") as string;
  const imageUrl = formData.get("imageUrl") as string;

  await prisma.portfolio.create({
    data: { title, description, link, imageUrl },
  });

  revalidatePath("/admin/portfolios");
  revalidatePath("/");
}

export async function deletePortfolio(id: string) {
  await prisma.portfolio.delete({
    where: { id },
  });

  revalidatePath("/admin/portfolios");
  revalidatePath("/");
}

// --- TEAM ACTIONS ---

export async function createTeamMember(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const linkedinUrl = formData.get("linkedinUrl") as string;
  const githubUrl = formData.get("githubUrl") as string;

  await prisma.teamMember.create({
    data: { name, role, imageUrl, linkedinUrl, githubUrl },
  });

  revalidatePath("/admin/team");
  revalidatePath("/");
}

export async function deleteTeamMember(id: string) {
  await prisma.teamMember.delete({
    where: { id },
  });

  revalidatePath("/admin/team");
  revalidatePath("/");
}

export async function updateTeamMember(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const linkedinUrl = formData.get("linkedinUrl") as string;
  const githubUrl = formData.get("githubUrl") as string;

  await prisma.teamMember.update({
    where: { id },
    data: { name, role, imageUrl, linkedinUrl, githubUrl },
  });

  revalidatePath("/admin/team");
  revalidatePath("/");
}
