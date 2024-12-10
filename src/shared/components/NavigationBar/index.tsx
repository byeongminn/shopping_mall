import Link from "next/link";
import Logo from "./logo.svg";
import * as s from "./style.css";
import { SearchForm } from "./SearchForm";

export const NavigationBar = () => {
  return (
    <nav className={s.container}>
      <div className={s.wrapper}>
        <div className={s.startWrapper}>
          <Link href="/">
            <div className={s.logo}>
              <Logo />
            </div>
          </Link>
        </div>
        <div className={s.centerWrapper}>
          <SearchForm />
        </div>
        <div className={s.endWrapper}></div>
      </div>
    </nav>
  );
};
