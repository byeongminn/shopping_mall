"use client";

import Link from "next/link";
import Logo from "@/shared/components/NavigationBar/logo.svg";
import { SearchForm } from "@/shared/components/NavigationBar/SearchForm";
import { useLoginStore } from "@/features/auth/model/useLoginStore";
import { Logout } from "@/features/auth/components/Logout";
import * as s from "./style.css";

export const NavigationBar = () => {
  const { isLoggedIn } = useLoginStore();

  return (
    <nav className={s.container}>
      <div className={s.wrapper}>
        <div className={s.startWrapper}>
          <Link href="/" className={s.link} aria-label="홈으로 이동">
            <div className={s.logo}>
              <Logo />
            </div>
          </Link>
        </div>
        <div className={s.centerWrapper}>
          <SearchForm />
        </div>
        <div className={s.endWrapper}>
          <Link
            href="/cart"
            className={s.pageLink}
            aria-label="장바구니 페이지로 이동"
          >
            장바구니
          </Link>
          {isLoggedIn ? (
            <Logout />
          ) : (
            <Link
              href="/login"
              className={s.pageLink}
              aria-label="로그인 페이지로 이동"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
