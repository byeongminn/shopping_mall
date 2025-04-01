import * as s from "./style.css";

type Props = {
  text: string;
  isActive: boolean;
  onFilterClick: () => void;
};

export const FilterItem = ({ text, isActive, onFilterClick }: Props) => {
  return (
    <div className={s.chip({ active: isActive })} onClick={onFilterClick}>
      {text}
    </div>
  );
};
