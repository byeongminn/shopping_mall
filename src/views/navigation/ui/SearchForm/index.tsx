"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getPageLink } from "@/shared/lib/query-string/router";
import { SearchIcon } from "@/shared/ui/Icon";
import * as s from "./style.css";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams?.get("q") ?? "";

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const queryValue = queryInput?.value ?? "";

    if (queryValue !== "") {
      router.push(getPageLink({ seg: "/search", q: queryValue }));
    }
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <span className={s.search}>
        <SearchIcon />
      </span>
      <input
        className={s.input}
        name="query"
        type="text"
        defaultValue={initialSearchValue}
        placeholder="쇼핑 검색"
      />
    </form>
  );
};
