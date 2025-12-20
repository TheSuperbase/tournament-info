"use client";

import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import Input from "@/shared/ui/field";
import Typography from "@/shared/ui/typography";

type Props = {
  label?: string;
  value: string;
  onChange: (address: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
  error?: string;
};

function AddressSearch({
  label,
  value,
  onChange,
  placeholder = "주소를 검색해주세요",
  fullWidth,
  error,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleComplete = (data: {
    address: string;
    roadAddress: string;
    jibunAddress: string;
    sido: string;
    sigungu: string;
    bname: string;
  }) => {
    // 도로명 주소가 있으면 도로명 주소, 없으면 지번 주소 사용
    const fullAddress = data.roadAddress || data.jibunAddress || data.address;
    onChange(fullAddress);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className="flex flex-col gap-[0.375rem]">
        {label && (
          <Typography variant="caption1" className="text-[#222]">
            {label}
          </Typography>
        )}
        <DrawerTrigger asChild>
          <div className="cursor-pointer">
            <Input
              placeholder={placeholder}
              fullWidth={fullWidth}
              value={value}
              readOnly
              isError={!!error}
              className="cursor-pointer"
            />
          </div>
        </DrawerTrigger>
        {error && (
          <Typography variant="caption1" className="text-red-500">
            {error}
          </Typography>
        )}
      </div>
      <DrawerContent className="h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>
            <Typography variant="headline5" className="text-semantic-text-primary">
              주소 검색
            </Typography>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-auto px-[20px] pb-[20px]">
          <DaumPostcodeEmbed
            onComplete={handleComplete}
            style={{ height: "100%" }}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default AddressSearch;
