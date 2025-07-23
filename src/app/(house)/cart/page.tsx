"use client";

import { withAuth } from "@/shared/hocs/withAuth";
import { CartPage } from "@/views/cart/ui/CartPage";

function Page() {
  return <CartPage />;
}

export default withAuth(Page, "protected");
