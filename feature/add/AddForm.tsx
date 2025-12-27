"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateTournament } from "@/shared/api/tournaments";
import {
  validateTournamentForm,
  hasErrors,
  type TournamentFormData,
} from "@/shared/lib/validation";
import { useAlert } from "@/shared/hooks/useAlert";
import { SolidButton } from "@/shared/ui/button";
import Input from "@/shared/ui/field";
import Typography from "@/shared/ui/typography";

function AddForm() {
  const router = useRouter();
  const { showAlert } = useAlert();
  const { mutate: createTournament, isPending } = useCreateTournament();

  const [formData, setFormData] = useState<TournamentFormData>({
    name: "",
    tournamentStartDate: "",
    tournamentEndDate: "",
    applyStartDate: "",
    applyEndDate: "",
    region: "",
    location: "",
    participantTeams: "",
    host: "",
    organizer: "",
    sponsor: "",
    sponsorship: "",
    platform: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormData = { ...formData, [field]: e.target.value };
      setFormData(newFormData);

      // 실시간 유효성 검사
      if (touched[field]) {
        const validationErrors = validateTournamentForm(newFormData);
        setErrors(validationErrors);
      }
    };

  const handleBlur = (field: string) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateTournamentForm(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = () => {
    // 모든 필드 touched 처리
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    const validationErrors = validateTournamentForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    createTournament(
      {
        name: formData.name,
        startDate: formData.tournamentStartDate,
        endDate: formData.tournamentEndDate,
        applyStartDate: formData.applyStartDate,
        applyEndDate: formData.applyEndDate,
        region: formData.region,
        location: formData.location,
        participantTeams: formData.participantTeams
          ? parseInt(formData.participantTeams, 10)
          : 0,
        host: formData.host,
        organizer: formData.organizer,
        sponsor: formData.sponsor,
        sponsorship: formData.sponsorship,
        platform: formData.platform,
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (error) => {
          showAlert({
            title: "안내메시지",
            description:
              error instanceof Error
                ? error.message
                : "대회 등록에 실패했습니다.",
          });
        },
      }
    );
  };

  const getError = (field: string) =>
    touched[field] ? errors[field] : undefined;

  // 폼 유효성 검사
  const isFormValid = !hasErrors(validateTournamentForm(formData));

  return (
    <div className="px-[20px] pt-[36px] pb-[34px] flex flex-col gap-[24px]">
      <Input
        label="대회명*"
        placeholder="대회명"
        fullWidth
        value={formData.name}
        onChange={handleChange("name")}
        onBlur={handleBlur("name")}
        error={getError("name")}
      />
      <div className="flex flex-col gap-[8px]">
        <Typography variant="subHead2">대회 일자*</Typography>
        <div className="grid grid-cols-[1fr_1fr] gap-[15px]">
          <Input
            fullWidth
            placeholder="시작 일자"
            type="date"
            value={formData.tournamentStartDate}
            onChange={handleChange("tournamentStartDate")}
            onBlur={handleBlur("tournamentStartDate")}
            isError={!!getError("tournamentStartDate")}
          />
          <Input
            fullWidth
            placeholder="종료 일자"
            type="date"
            value={formData.tournamentEndDate}
            onChange={handleChange("tournamentEndDate")}
            onBlur={handleBlur("tournamentEndDate")}
            isError={!!getError("tournamentEndDate")}
          />
        </div>
        {(getError("tournamentStartDate") || getError("tournamentEndDate")) && (
          <Typography variant="caption1" className="text-red-500">
            {getError("tournamentStartDate") || getError("tournamentEndDate")}
          </Typography>
        )}
      </div>
      <div className="flex flex-col gap-[8px]">
        <Typography variant="subHead2">신청 일자</Typography>
        <div className="grid grid-cols-[1fr_1fr] gap-[15px]">
          <Input
            fullWidth
            placeholder="시작 일자"
            type="date"
            value={formData.applyStartDate}
            onChange={handleChange("applyStartDate")}
            onBlur={handleBlur("applyStartDate")}
            isError={!!getError("applyStartDate")}
          />
          <Input
            fullWidth
            placeholder="종료 일자"
            type="date"
            value={formData.applyEndDate}
            onChange={handleChange("applyEndDate")}
            onBlur={handleBlur("applyEndDate")}
            isError={!!getError("applyEndDate")}
          />
        </div>
        {(getError("applyStartDate") || getError("applyEndDate")) && (
          <Typography variant="caption1" className="text-red-500">
            {getError("applyStartDate") || getError("applyEndDate")}
          </Typography>
        )}
      </div>
      <Input
        label="지역"
        placeholder="지역을 입력해주세요"
        fullWidth
        value={formData.region}
        onChange={handleChange("region")}
      />
      <Input
        label="대회 위치"
        placeholder="상세 장소"
        fullWidth
        value={formData.location}
        onChange={handleChange("location")}
      />
      <Input
        label="참가팀 수"
        placeholder="참가팀 수"
        fullWidth
        value={formData.participantTeams}
        onChange={handleChange("participantTeams")}
      />
      <Input
        label="주최"
        placeholder="주최"
        fullWidth
        value={formData.host}
        onChange={handleChange("host")}
      />
      <Input
        label="주관"
        placeholder="주관"
        fullWidth
        value={formData.organizer}
        onChange={handleChange("organizer")}
      />
      <Input
        label="후원"
        placeholder="후원"
        fullWidth
        value={formData.sponsor}
        onChange={handleChange("sponsor")}
      />
      <Input
        label="협찬"
        placeholder="협찬"
        fullWidth
        value={formData.sponsorship}
        onChange={handleChange("sponsorship")}
      />
      <Input
        label="플랫폼"
        placeholder="플랫폼"
        fullWidth
        value={formData.platform}
        onChange={handleChange("platform")}
      />

      <div className="flex items-center justify-center pt-[12px]">
        <SolidButton
          className="w-[315px]"
          onClick={handleSubmit}
          disabled={isPending || !isFormValid}
        >
          {isPending ? "등록 중..." : "만들기"}
        </SolidButton>
      </div>
    </div>
  );
}

export default AddForm;
