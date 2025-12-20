"use client";

import { usePathname } from "next/navigation";
import { useDeleteTournament } from "@/shared/api/tournaments";
import { useAlert } from "@/shared/hooks/useAlert";
import MenuItem from "@/shared/ui/menu-item";

type Props = {
  onClose: () => void;
};

function DeleteSettingMenuItem({ onClose }: Props) {
  const pathname = usePathname();
  const { showAlert, hideAlert } = useAlert();
  const { mutate: deleteTournament } = useDeleteTournament({
    onSuccess: () => {
      hideAlert();
      window.location.href = "/";
    },
    onError: (error) => {
      showAlert({
        title: "안내메시지",
        description:
          error instanceof Error ? error.message : "대회 삭제에 실패했습니다.",
      });
    },
  });

  const handleClick = () => {
    const id = pathname.replace("/", "");
    onClose();

    showAlert({
      mode: "twoButton",
      title: "대회를 삭제하시겠어요?",
      description: "취소가 불가능한 작업이에요.",
      submitButtonLabel: "삭제하기",
      cancelButtonLabel: "취소",
      isNegativeSubmit: true,
      autoHideOnSubmit: false,
      onSubmitButtonPress: () => {
        deleteTournament(id);
      },
    });
  };

  return (
    <MenuItem className="text-semantic-text-danger" onClick={handleClick}>
      삭제
    </MenuItem>
  );
}

export default DeleteSettingMenuItem;
