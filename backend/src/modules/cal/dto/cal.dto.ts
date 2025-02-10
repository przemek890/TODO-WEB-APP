import {User} from "@prisma/client";
import {Exclude} from "class-transformer";

export class CalDto  {

    @Exclude()
    id: number;

    history: String;

    @Exclude()
    Userid
}
