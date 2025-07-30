import { NavigationBar } from "@/views/navigation/ui/NavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/views/navigation/ui/NavigationBar/style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      <div style={{ paddingTop: NAVIGATION_BAR_HEIGHT + 1 }}>{children}</div>
    </>
  );
}
