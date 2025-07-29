import { Button } from "@/shared/ui/Button";
import * as s from "./style.css";

type Props = {
  onCartClick: () => void;
  onBuyClick: () => void;
};

export const ActionPanel = ({ onCartClick, onBuyClick }: Props) => {
  return (
    <div className={s.buttonWrapper}>
      <Button type="outlined" onClick={onCartClick}>
        장바구니
      </Button>
      <Button type="filled" onClick={onBuyClick}>
        바로구매
      </Button>
    </div>
  );
};
