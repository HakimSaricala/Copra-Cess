import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export const currentUser = async () => {
  const session = await auth();

  revalidatePath("/profile"); //TODO: revalidate only on settings page
  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
