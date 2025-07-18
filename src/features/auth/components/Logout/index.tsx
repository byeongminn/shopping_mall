import { LogoutButton } from "@/features/auth/components/Logout/LogoutButton";
import { usePostLogout } from "@/features/auth/model/usePostLogout";

export const Logout = () => {
  const { mutate: logout } = usePostLogout();

  return <LogoutButton onLogout={logout} />;
};
