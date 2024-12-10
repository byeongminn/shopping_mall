import { Filter } from "@/features/main/components/Filter";
import { Goods } from "@/features/main/components/Goods";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Filter />
      <Suspense fallback={<></>}>
        <Goods />
      </Suspense>
    </main>
  );
}
