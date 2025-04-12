import * as s from "@/features/auth/components/Logout/LogoutButton/style.css";

type Props = {
  onLogout: () => void;
};

export const LogoutButton = ({ onLogout }: Props) => {
  return (
    <button className={s.button} onClick={onLogout}>
      로그아웃
    </button>
  );
};
