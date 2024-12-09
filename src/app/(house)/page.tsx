import { Goods } from "@/features/main/components/Goods";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Goods />
      </Suspense>
    </main>
  );
}
