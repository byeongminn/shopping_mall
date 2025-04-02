import { Filters } from "@/features/main/components/Filters";
import { MainGoods } from "@/features/main/components/MainGoods";
import * as s from "@/app/(house)/style.css";

export default function Home() {
  return (
    <main>
      <div
        style={{
          position: "fixed",
          top: 81,
          left: 0,
          zIndex: 8000,
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <Filters />
      </div>
      <section className={s.mainGoodsSection}>
        <MainGoods />
      </section>
    </main>
  );
}
