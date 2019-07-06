import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsBoolean()
    readonly available: boolean;

    @ApiModelProperty()
    @IsOptional()
    @IsDate()
    readonly dateCreated: Date;
}