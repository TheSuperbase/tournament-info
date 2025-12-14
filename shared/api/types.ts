export interface Tournament {
  id: number;
  name: string;
  tournamentPeriod: string;
  applyPeriod: string;
  region: string;
  location: string;
  participantTeams: string;
  host: string;
  organizer: string;
  sponsor: string;
  sponsorship: string;
  dDay: number;
  createdAt: string;
  updatedAt: string;
}

export type CreateTournamentRequest = Omit<Tournament, "id"> & { id?: never };
export type UpdateTournamentRequest = Partial<CreateTournamentRequest>;

export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token?: string;
}
