import { redirect } from "next/navigation";
import { CartPage } from "@/views/cart/ui/CartPage";
import { getSession } from "@/shared/server/session";

export default async function Page() {
  const session = await getSession();

  if (!session?.user) {
    const redirectPath = encodeURIComponent("/cart");
    redirect(`/login?redirect=${redirectPath}`);
  }

  return <CartPage />;
}
