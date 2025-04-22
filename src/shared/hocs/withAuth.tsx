"use client";

import { useRouter } from "next/navigation";
import { useGetMe } from "@/shared/hooks/useGetMe";
import { JSX, useEffect } from "react";

type AuthType = "public" | "guest-only" | "protected";

export function withAuth<P>(
  Component: React.ComponentType<P>,
  type: AuthType = "public"
) {
  return function AuthWrapper(props: P) {
    const router = useRouter();
    const { data: session, isLoading } = useGetMe();

    useEffect(() => {
      if (isLoading) return;

      if (type === "protected" && !session.isLoggedIn) {
        router.replace("/login");
      }

      if (type === "guest-only" && session.isLoggedIn) {
        router.replace("/");
      }
    }, [session.isLoggedIn, isLoading, router]);

    if (isLoading) return null;
    if (type === "protected" && !session.isLoggedIn) return null;
    if (type === "guest-only" && session.isLoggedIn) return null;

    return <Component {...(props as P & JSX.IntrinsicAttributes)} />;
  };
}
