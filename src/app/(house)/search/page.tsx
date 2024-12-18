import { Filter } from "@/features/main/components/Filter";
import { SearchResultList } from "@/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Filter />
        <SearchResultList />
      </Suspense>
    </main>
  );
}
