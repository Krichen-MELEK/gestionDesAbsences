import {Seance} from "./seance";
import {Student} from "./student";
import {Teacher} from "./teacher";

export interface Classe {
    id: number;
    nom: string;
    students: Student[];
    seances: Seance[];
    teacherClasse: Teacher[];
}
