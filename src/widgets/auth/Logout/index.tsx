"use client";

import { usePostLogout } from "@/features/auth/model/usePostLogout";
import { LogoutButton } from "@/features/auth/ui/LogoutButton";

export const Logout = () => {
  const { mutate: logout } = usePostLogout();

  return <LogoutButton onLogout={logout} />;
};
