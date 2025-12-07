"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Picker from "react-mobile-picker";
import Icon from "@/shared/ui/icon";
import Typography from "@/shared/ui/typography";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import SolidButton from "@/shared/ui/button/SolidButton";
import TextButton from "@/shared/ui/button/TextButton";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => `${currentYear - 5 + i}년`);
const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

function PickerItemContent({
  value,
  isSelected,
}: {
  value: string;
  isSelected: boolean;
}) {
  return (
    <span
      className={
        isSelected
          ? "typography-headline-5 text-semantic-text-primary bg-[#F9F9FB] rounded-[8px] px-[12px] py-[8px]"
          : "typography-body-1 text-semantic-text-tertiary"
      }
    >
      {value}
    </span>
  );
}

function DateSelector() {
  const router = useRouter();
  const now = new Date();
  const [selectedYear, setSelectedYear] = useState(`${now.getFullYear()}년`);
  const [selectedMonth, setSelectedMonth] = useState(`${now.getMonth() + 1}월`);
  const [pickerValue, setPickerValue] = useState({
    year: `${now.getFullYear()}년`,
    month: `${now.getMonth() + 1}월`,
  });
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setSelectedYear(pickerValue.year);
    setSelectedMonth(pickerValue.month);
    setOpen(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setPickerValue({ year: selectedYear, month: selectedMonth });
    }
    setOpen(isOpen);
  };

  return (
    <div className="pt-[32px] pb-[20px] mx-[20px] border-b border-[#EEE] flex flex-row items-center justify-between">
      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>
          <button className="flex flex-row items-center gap-[4px] cursor-pointer">
            <Typography variant="body1" className="leading-none">
              {`${selectedYear} ${selectedMonth}`}
            </Typography>
            <Icon
              name="ChevronDown"
              width={20}
              height={20}
              className="mb-[2px]"
            />
          </button>
        </DrawerTrigger>
        <DrawerContent className="pt-[32px] px-[20px] pb-[48px]">
          <DrawerHeader className="flex items-start">
            <DrawerTitle>
              <Typography
                variant="headline5"
                className="text-semantic-text-primary"
              >
                날짜 선택
              </Typography>
            </DrawerTitle>
          </DrawerHeader>
          <div className="date-picker-wrapper">
            <Picker
              value={pickerValue}
              onChange={setPickerValue}
              wheelMode="natural"
              height={116}
              itemHeight={38}
            >
              <Picker.Column name="year">
                {years.map((year) => (
                  <Picker.Item key={year} value={year}>
                    {({ selected }) => (
                      <PickerItemContent value={year} isSelected={selected} />
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <Picker.Column name="month">
                {months.map((month) => (
                  <Picker.Item key={month} value={month}>
                    {({ selected }) => (
                      <PickerItemContent value={month} isSelected={selected} />
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
          <DrawerFooter className="flex flex-row gap-[8px] p-0 mt-[24px]">
            <DrawerClose asChild>
              <SolidButton fullWidth size="large" variant="secondary">
                취소
              </SolidButton>
            </DrawerClose>
            <SolidButton
              fullWidth
              size="large"
              variant="primary"
              onClick={handleConfirm}
            >
              확인
            </SolidButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <TextButton
        className="text-semantic-text-info-bold"
        onClick={() => router.push("/add")}
      >
        대회 추가
      </TextButton>
    </div>
  );
}

export default DateSelector;
