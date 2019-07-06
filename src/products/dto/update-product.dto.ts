import { IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateProductDto {
    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsOptional()
    @IsNumber()
    readonly price: number;

    @ApiModelProperty()
    @IsOptional()
    @IsBoolean()
    readonly available: boolean;

    @ApiModelProperty()
    @IsOptional()
    @IsDate()
    readonly dateCreated: Date;
}