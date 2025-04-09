import { PostLoginRequest } from "@/features/auth/api/postLogin";
import * as s from "@/features/auth/components/Login/LoginForm/style.css";

type Props = PostLoginRequest & {
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onLogin,
}: Props) => {
  return (
    <form onSubmit={onLogin} className={s.form}>
      <input
        className={s.emailInput}
        type="email"
        placeholder="이메일"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        className={s.passwordInput}
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
      />
      <button className={s.button} type="submit">
        로그인
      </button>
    </form>
  );
};
