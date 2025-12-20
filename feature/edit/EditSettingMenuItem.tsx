"use client";

import { useRouter, usePathname } from "next/navigation";
import MenuItem from "@/shared/ui/menu-item";

function EditSettingMenuItem() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    const id = pathname.replace("/", "");
    router.push(`/edit?id=${id}`);
  };

  return <MenuItem onClick={handleClick}>수정</MenuItem>;
}

export default EditSettingMenuItem;
