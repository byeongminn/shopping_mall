"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavigationBar } from "@/shared/components/NavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/shared/components/NavigationBar/style.css";
import { getMe } from "@/entities/auth/auth.api";
import { useLoginStore } from "@/features/auth/model/useLoginStore";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const { setIsLoggedIn } = useLoginStore();

  const isNavRequired = pathname !== "/login";

  useEffect(() => {
    const checkLoginStatus = async () => {
      const data = await getMe();
      setIsLoggedIn(data.isLoggedIn);
    };
    checkLoginStatus();
  }, [setIsLoggedIn]);

  return (
    <Suspense fallback={<></>}>
      {isNavRequired ? (
        <>
          <NavigationBar />
          <div style={{ paddingTop: NAVIGATION_BAR_HEIGHT + 1 }}>
            {children}
          </div>
        </>
      ) : (
        <div>{children}</div>
      )}
    </Suspense>
  );
}
