import Link from "next/link";
import { Logout } from "@/widgets/auth/Logout";
import { SearchForm } from "@/views/navigation/ui/SearchForm";
import { getSession } from "@/shared/server/session";
import Logo from "@/shared/assets/logo.svg";
import * as s from "./style.css";

export const NavigationBar = async () => {
  const session = await getSession();
  const isLoggedIn = !!session?.user;

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
