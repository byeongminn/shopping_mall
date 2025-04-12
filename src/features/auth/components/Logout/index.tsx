import { LogoutButton } from "@/features/auth/components/Logout/LogoutButton";
import { usePostLogout } from "@/features/auth/hooks/usePostLogout";
import { useLoginStore } from "@/shared/store/login";

export const Logout = () => {
  const { setIsLoggedIn } = useLoginStore();

  const { mutate: logout } = usePostLogout({
    onSuccess: () => setIsLoggedIn(false),
  });

  return <LogoutButton onLogout={logout} />;
};
