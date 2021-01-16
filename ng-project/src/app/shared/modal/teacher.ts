import {Subject} from "./subject";

export interface Teacher {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    teacherSubjects: Subject[];
}
