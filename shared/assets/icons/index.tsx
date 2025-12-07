import ChevronDownIcon from "./chevron-down.svg";
import ArrowLeftOutlinedIcon from "./arrow-left-outlined.svg";
import TrophyIcon from "./trophy.svg";
import HeartIcon from "./heart.svg";

export const IconsMap = {
  ChevronDown: ChevronDownIcon,
  ArrowLeftOutlined: ArrowLeftOutlinedIcon,
  Trophy: TrophyIcon,
  Heart: HeartIcon,
};

export type IconName = keyof typeof IconsMap;
export default IconsMap;
