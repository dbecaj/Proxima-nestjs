import { Document } from 'mongoose';

export interface Cat extends Document {
    readonly name: string;
    readonly price: number;
    readonly available: boolean;
    readonly date: Date;
}