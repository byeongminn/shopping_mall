import { LogoutButton } from "@/features/auth/components/Logout/LogoutButton";
import { usePostLogout } from "@/features/auth/hooks/usePostLogout";

export const Logout = () => {
  const { mutate: logout } = usePostLogout();

  return <LogoutButton onLogout={logout} />;
};
