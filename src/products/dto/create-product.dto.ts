import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly available: boolean;

    @IsOptional()
    @IsDate()
    readonly dateCreated: Date;
}