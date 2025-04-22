import { Login } from "@/features/auth/components/Login";
import * as s from "@/app/(house)/login/style.css";

export default function LoginPage() {
  return (
    <main>
      <section className={s.loginSection}>
        <Login />
      </section>
    </main>
  );
}
