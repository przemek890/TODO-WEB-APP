import {Exclude} from "class-transformer";

export class CatDto  {

    @Exclude()
    id: number;

    name: String;

    @Exclude()
    Userid
}
