import { Filters } from "@/features/main/components/Filters";
import { Goods } from "@/features/main/components/Goods";

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
      <Goods />
    </main>
  );
}
