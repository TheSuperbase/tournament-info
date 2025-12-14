import { ArrowLeftOutlined, MoreOutlined } from "@ant-design/icons";
import ChevronDownIcon from "./chevron-down.svg";
import TrophyIcon from "./trophy.svg";
import HeartIcon from "./heart.svg";

export const IconsMap = {
  ChevronDown: ChevronDownIcon,
  ArrowLeftOutlined: ArrowLeftOutlined,
  MoreOutlined: MoreOutlined,
  Trophy: TrophyIcon,
  Heart: HeartIcon,
};

export type IconName = keyof typeof IconsMap;
export default IconsMap;
