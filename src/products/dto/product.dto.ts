import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator'

export class ProductDto {
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