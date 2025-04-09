"use client";

import { Suspense } from "react";
import { NavigationBar } from "@/shared/components/NavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/shared/components/NavigationBar/style.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isNavRequired = pathname !== "/login";

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
