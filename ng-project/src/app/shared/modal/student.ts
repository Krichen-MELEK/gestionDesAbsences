import {Subject} from "./subject";

export interface Student {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    dispensedSubjects: Subject[]
}
