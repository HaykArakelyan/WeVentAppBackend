import { IsString } from "class-validator";

export class UpdateUserDto {
    @IsString()
    readonly login?: string;

    @IsString()
    readonly password?: string;
}
