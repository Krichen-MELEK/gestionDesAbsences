import {Seance} from "./seance";
import {Student} from "./student";

export interface Absence {
    id: number;
    student: Student;
    seance: Seance;
}
