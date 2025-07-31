import { redirect } from "next/navigation";
import { LoginPage } from "@/views/auth/ui/LoginPage";
import { getSession } from "@/shared/server/session";

export default async function Page() {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return <LoginPage />;
}
