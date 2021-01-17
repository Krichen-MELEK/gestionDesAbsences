export interface ResponseSeance {
    id: number;
    dateDebut: Date;
    dateFin: Date;
    room: string;
    subject: string;
    numberOfPresent: number;
    numberOfAbsence: number;
    numberOfRetard: number;
    numberOfAppelNonFaite: number;
}
