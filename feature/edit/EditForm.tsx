import { SolidButton } from "@/shared/ui/button";
import Input from "@/shared/ui/field";
import Typography from "@/shared/ui/typography";

function EditForm() {
  return (
    <div className="px-[20px] pt-[36px] pb-[34px] flex flex-col gap-[24px]">
      <Input label="대회명*" placeholder="대회명" fullWidth />
      <div className="flex flex-col gap-[8px]">
        <Typography variant="subHead2">대회 일자*</Typography>
        <div className="grid grid-cols-[1fr_1fr] gap-[15px]">
          <Input fullWidth placeholder="시작 일자" />
          <Input fullWidth placeholder="종료 일자" />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <Typography variant="subHead2">신청 일자</Typography>
        <div className="grid grid-cols-[1fr_1fr] gap-[15px]">
          <Input fullWidth placeholder="시작 일자" />
          <Input fullWidth placeholder="종료 일자" />
        </div>
      </div>
      <Input label="지역" placeholder="장소" fullWidth />
      <Input label="대회 위치" placeholder="장소" fullWidth />
      <Input label="참가팀 수" placeholder="참가팀 수" fullWidth />
      <Input label="주최" placeholder="주최" fullWidth />
      <Input label="주관" placeholder="주관" fullWidth />
      <Input label="후원" placeholder="후원" fullWidth />

      <div className="flex items-center justify-center pt-[12px]">
        <SolidButton className="w-[315px]">만들기</SolidButton>
      </div>
    </div>
  );
}

export default EditForm;
