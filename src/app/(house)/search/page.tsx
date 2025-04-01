import { Filters } from "@/features/main/components/Filters";
import { SearchResultList } from "@/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <Suspense fallback={<></>}>
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
        <SearchResultList />
      </Suspense>
    </main>
  );
}
