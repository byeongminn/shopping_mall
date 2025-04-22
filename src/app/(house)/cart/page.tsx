"use client";

import { withAuth } from "@/shared/hocs/withAuth";

function CartPage() {
  return (
    <main>
      <section>Cart Page</section>
    </main>
  );
}

export default withAuth(CartPage, "protected");
