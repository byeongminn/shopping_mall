import { Filters } from "@/features/main/components/Filters";
import { MainGoods } from "@/features/main/components/MainGoods";

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
      <MainGoods />
    </main>
  );
}
