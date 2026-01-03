"use client";

import Icon from "@/shared/ui/icon";

type Props = {
  onPrevClick: () => void;
  onNextClick: () => void;
  className?: string;
};

function MonthNavigation({ onPrevClick, onNextClick, className = "" }: Props) {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-3 ${className}`}
    >
      <button
        onClick={onPrevClick}
        className="flex flex-row items-center rounded-[8px] border-[1px] border-[#222] px-[16px] py-[12px] gap-[10px]"
      >
        <Icon
          name="ArrowLeftOutlined"
          width={16}
          height={16}
          className="mb-[2px] text-[#222]"
        />
        <span className="text-[14px] font-bold text-[#333]">이전 월</span>
      </button>
      <button
        onClick={onNextClick}
        className="flex flex-row items-center bg-[#222] rounded-[8px] border-[1px] border-[#222] px-[16px] py-[12px] gap-[10px]"
      >
        <span className="text-[14px] font-bold text-white">다음 월</span>
        <Icon
          name="ArrowLeftOutlined"
          width={16}
          height={16}
          className="mb-[2px] rotate-180"
          style={{ color: "white" }}
        />
      </button>
    </div>
  );
}

export default MonthNavigation;
