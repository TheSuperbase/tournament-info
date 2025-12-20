"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateTournament } from "@/shared/api/tournaments";
import {
  validateTournamentForm,
  hasErrors,
  type TournamentFormData,
} from "@/shared/lib/validation";
import { SolidButton } from "@/shared/ui/button";
import Input from "@/shared/ui/field";
import AddressSearch from "@/shared/ui/address-search";
import Typography from "@/shared/ui/typography";

function AddForm() {
  const router = useRouter();
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

  const handleAddressChange = (address: string) => {
    setFormData((prev) => ({ ...prev, region: address }));
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
      },
      {
        onSuccess: () => {
          router.push("/");
        },
      }
    );
  };

  const getError = (field: string) =>
    touched[field] ? errors[field] : undefined;

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
            error={getError("tournamentStartDate")}
          />
          <Input
            fullWidth
            placeholder="종료 일자"
            type="date"
            value={formData.tournamentEndDate}
            onChange={handleChange("tournamentEndDate")}
            onBlur={handleBlur("tournamentEndDate")}
            error={getError("tournamentEndDate")}
          />
        </div>
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
            error={getError("applyStartDate")}
          />
          <Input
            fullWidth
            placeholder="종료 일자"
            type="date"
            value={formData.applyEndDate}
            onChange={handleChange("applyEndDate")}
            onBlur={handleBlur("applyEndDate")}
            error={getError("applyEndDate")}
          />
        </div>
      </div>
      <AddressSearch
        label="지역"
        placeholder="지역을 검색해주세요"
        fullWidth
        value={formData.region}
        onChange={handleAddressChange}
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

      <div className="flex items-center justify-center pt-[12px]">
        <SolidButton
          className="w-[315px]"
          onClick={handleSubmit}
          disabled={isPending}
        >
          {isPending ? "등록 중..." : "만들기"}
        </SolidButton>
      </div>
    </div>
  );
}

export default AddForm;
