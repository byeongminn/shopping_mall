import { Filters } from "@/features/main/components/Filters";
import { Goods } from "@/features/main/components/Goods";

export default function Home() {
  return (
    <main>
      <Filters />
      <Goods />
    </main>
  );
}
