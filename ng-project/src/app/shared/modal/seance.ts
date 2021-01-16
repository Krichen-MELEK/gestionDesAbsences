import {Subject} from "./subject";

export interface Seance {
    id: number;
    dateDebut: Date;
    dateFin: Date;
    room: string;
    subject: Subject;
}
