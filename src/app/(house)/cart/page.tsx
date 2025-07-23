"use client";

import { withAuth } from "@/shared/hocs/withAuth";
import { CartPage } from "@/pages/cart/ui/CartPage";
import * as s from "@/app/(house)/cart/style.css";

function Page() {
  return (
    <main>
      <section className={s.cartSection}>
        <CartPage />
      </section>
    </main>
  );
}

export default withAuth(Page, "protected");
