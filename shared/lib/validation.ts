import { parse, isBefore, startOfDay } from "date-fns";

export type ValidationError = {
  field: string;
  message: string;
};

export type TournamentFormData = {
  name: string;
  tournamentStartDate: string;
  tournamentEndDate: string;
  applyStartDate: string;
  applyEndDate: string;
  region: string;
  location: string;
  participantTeams: string;
  host: string;
  organizer: string;
  sponsor: string;
  sponsorship: string;
};

export function validateTournamentForm(
  formData: TournamentFormData
): Record<string, string> {
  const errors: Record<string, string> = {};
  const today = startOfDay(new Date());

  // 필수값 검사
  if (!formData.name.trim()) {
    errors.name = "대회명을 입력해주세요.";
  }

  if (!formData.tournamentStartDate) {
    errors.tournamentStartDate = "대회 시작일을 선택해주세요.";
  }

  if (!formData.tournamentEndDate) {
    errors.tournamentEndDate = "대회 종료일을 선택해주세요.";
  }

  // 날짜 유효성 검사
  if (formData.tournamentStartDate) {
    const startDate = parse(
      formData.tournamentStartDate,
      "yyyy-MM-dd",
      new Date()
    );

    // 과거 날짜 체크
    if (isBefore(startDate, today)) {
      errors.tournamentStartDate = "대회 시작일은 오늘 이후여야 합니다.";
    }

    // 종료일과 비교
    if (formData.tournamentEndDate) {
      const endDate = parse(
        formData.tournamentEndDate,
        "yyyy-MM-dd",
        new Date()
      );

      if (isBefore(endDate, startDate)) {
        errors.tournamentEndDate = "종료일은 시작일 이후여야 합니다.";
      }
    }
  }

  // 신청 기간 유효성 검사
  if (formData.applyStartDate && formData.applyEndDate) {
    const applyStart = parse(formData.applyStartDate, "yyyy-MM-dd", new Date());
    const applyEnd = parse(formData.applyEndDate, "yyyy-MM-dd", new Date());

    if (isBefore(applyEnd, applyStart)) {
      errors.applyEndDate = "신청 종료일은 시작일 이후여야 합니다.";
    }

    // 신청 기간이 대회 시작일 이전인지 체크
    if (formData.tournamentStartDate) {
      const tournamentStart = parse(
        formData.tournamentStartDate,
        "yyyy-MM-dd",
        new Date()
      );

      if (!isBefore(applyEnd, tournamentStart)) {
        errors.applyEndDate = "신청 종료일은 대회 시작일 이전이어야 합니다.";
      }
    }
  }

  return errors;
}

export function hasErrors(errors: Record<string, string>): boolean {
  return Object.keys(errors).length > 0;
}
