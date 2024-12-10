import { ORDER_FILTER_HEIGHT } from "@/features/main/components/Filter/style.css";
import { NavigationBar } from "@/shared/components/NavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/shared/components/NavigationBar/style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationBar />
      <div style={{ paddingTop: NAVIGATION_BAR_HEIGHT + ORDER_FILTER_HEIGHT }}>
        {children}
      </div>
    </div>
  );
}
