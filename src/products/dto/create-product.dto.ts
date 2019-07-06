import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional, IsDate } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiModelProperty({
        description: "Holds the name of the product.",
        required: true,
        example: "Milk",
    })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiModelProperty({
        description: "Holds the price of the product in EUR.",
        required: true,
        example: 12.5,
    })
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @ApiModelProperty({
        description: "Holds the information if the product is available.",
        required: true,
        example: true,
    })
    @IsNotEmpty()
    @IsBoolean()
    readonly available: boolean;

    @ApiModelProperty({
        description: "Holds the date the product was created.",
        type: Date,
        required: false,
        default: Date.now.toString(),
        example: "Sat Jul 06 2019 12:20:01 GMT+0200 (Central European Summer Time)",
    })
    @IsOptional()
    @IsDate()
    readonly dateCreated: Date;
}