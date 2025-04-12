import { NavigationBar } from "@/shared/components/NavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/shared/components/NavigationBar/style.css";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<></>}>
        <NavigationBar />
        <div style={{ paddingTop: NAVIGATION_BAR_HEIGHT + 1 }}>{children}</div>
      </Suspense>
    </div>
  );
}
