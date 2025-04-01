import { Filters } from "@/features/main/components/Filters";
import { SearchResultList } from "@/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Filters />
        <SearchResultList />
      </Suspense>
    </main>
  );
}
