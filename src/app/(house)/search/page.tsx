import { Suspense } from "react";
import { Filters } from "@/features/main/components/Filters";
import { SearchResultList } from "@/features/search/components/SearchResultList";
import * as s from "@/app/(house)/search/style.css";

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
        <section className={s.searchResultListSection}>
          <SearchResultList />
        </section>
      </Suspense>
    </main>
  );
}
