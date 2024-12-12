import { Filter } from "@/features/main/components/Filter";
import { SearchResultList } from "@/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <Filter />
      <Suspense fallback={<></>}>
        <SearchResultList />
      </Suspense>
    </main>
  );
}
