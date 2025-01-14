import { User } from "src/app/user-module/User";
import { Adoption } from "../adoption/Adoption";

export class AdoptionRequest {
    id : number;
    status : string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string = '';
    updatedBy: string = '';
    user : User;
    adoption : Adoption
}