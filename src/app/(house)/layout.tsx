import { NavigationBar } from "@/shared/components/NavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/shared/components/NavigationBar/style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationBar />
      <div style={{ paddingTop: NAVIGATION_BAR_HEIGHT + 1 }}>{children}</div>
    </div>
  );
}
