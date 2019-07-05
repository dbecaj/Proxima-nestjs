import { IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator'

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsBoolean()
    readonly available: boolean;

    @IsOptional()
    @IsDate()
    readonly dateCreated: Date;
}