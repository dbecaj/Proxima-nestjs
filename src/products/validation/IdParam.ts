import { IsNumberString, IsNotEmpty, IsString } from "class-validator";

export class IdParam {

    @IsString()
    readonly id: string;
}