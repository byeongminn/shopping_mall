"use client";

import { CartListContainer } from "@/features/cart/components/CartList/CartListContainer";
import { withAuth } from "@/shared/hocs/withAuth";
import * as s from "@/app/(house)/cart/style.css";

function CartPage() {
  return (
    <main>
      <section className={s.cartSection}>
        <CartListContainer />
      </section>
    </main>
  );
}

export default withAuth(CartPage, "protected");
