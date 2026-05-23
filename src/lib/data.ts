export type Specialty = "Clínico Geral" | "Pediatria" | "Ginecologia";

export interface Vaga {
  date: string;
  dayLong: string;
  day: string;
  time: string;
  specialty: Specialty;
  doctor: string;
  ubs: string;
  room: string;
  dist: string;
}

export const VAGAS: Vaga[] = [
  { date: "26/05", dayLong: "Terça-feira, 26 de maio",  day: "Ter", time: "08:00", specialty: "Clínico Geral",  doctor: "Dr. Paulo Mendonça",     ubs: "UBS Vila Esperança", room: "Consultório 3", dist: "0,8 km" },
  { date: "26/05", dayLong: "Terça-feira, 26 de maio",  day: "Ter", time: "09:30", specialty: "Clínico Geral",  doctor: "Dra. Renata Lima",       ubs: "UBS Vila Esperança", room: "Consultório 1", dist: "0,8 km" },
  { date: "26/05", dayLong: "Terça-feira, 26 de maio",  day: "Ter", time: "14:00", specialty: "Pediatria",      doctor: "Dr. Henrique Salles",    ubs: "UBS Vila Esperança", room: "Consultório 2", dist: "0,8 km" },
  { date: "27/05", dayLong: "Quarta-feira, 27 de maio", day: "Qua", time: "07:30", specialty: "Pediatria",      doctor: "Dr. Henrique Salles",    ubs: "UBS Vila Esperança", room: "Consultório 2", dist: "0,8 km" },
  { date: "27/05", dayLong: "Quarta-feira, 27 de maio", day: "Qua", time: "10:00", specialty: "Clínico Geral",  doctor: "Dra. Renata Lima",       ubs: "UBS Vila Esperança", room: "Consultório 1", dist: "0,8 km" },
  { date: "27/05", dayLong: "Quarta-feira, 27 de maio", day: "Qua", time: "15:30", specialty: "Ginecologia",    doctor: "Dra. Aparecida Tavares", ubs: "UBS Centro",         room: "Consultório 5", dist: "2,3 km" },
  { date: "28/05", dayLong: "Quinta-feira, 28 de maio", day: "Qui", time: "08:00", specialty: "Ginecologia",    doctor: "Dra. Aparecida Tavares", ubs: "UBS Centro",         room: "Consultório 5", dist: "2,3 km" },
  { date: "28/05", dayLong: "Quinta-feira, 28 de maio", day: "Qui", time: "10:00", specialty: "Clínico Geral",  doctor: "Dr. Paulo Mendonça",     ubs: "UBS Vila Esperança", room: "Consultório 3", dist: "0,8 km" },
  { date: "29/05", dayLong: "Sexta-feira, 29 de maio",  day: "Sex", time: "09:00", specialty: "Clínico Geral",  doctor: "Dra. Renata Lima",       ubs: "UBS Vila Esperança", room: "Consultório 1", dist: "0,8 km" },
  { date: "29/05", dayLong: "Sexta-feira, 29 de maio",  day: "Sex", time: "15:30", specialty: "Pediatria",      doctor: "Dr. Henrique Salles",    ubs: "UBS Vila Esperança", room: "Consultório 2", dist: "0,8 km" },
];

export function groupByDay(list: Vaga[]) {
  const m = new Map<string, { dayLong: string; day: string; date: string; items: Vaga[] }>();
  for (const v of list) {
    if (!m.has(v.date)) m.set(v.date, { dayLong: v.dayLong, day: v.day, date: v.date, items: [] });
    m.get(v.date)!.items.push(v);
  }
  return [...m.values()];
}

export const MOCK_USER = {
  name: "Maria S. dos Santos",
  cns: "706 4082 1399 0008",
  initials: "MS",
  cep: "05426-010",
  ubs: "UBS Vila Esperança",
  ubsAddress: "R. das Acácias, 142",
};

export type MockUser = typeof MOCK_USER;
