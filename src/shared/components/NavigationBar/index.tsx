import Link from "next/link";
import Logo from "./logo.svg";
import * as s from "./style.css";
import { SearchForm } from "./SearchForm";

export const NavigationBar = () => {
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
          <Link
            href="/login"
            className={s.pageLink}
            aria-label="로그인 페이지로 이동"
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
};
