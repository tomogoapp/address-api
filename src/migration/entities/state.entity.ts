import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

@Schema()
export class State extends Document{
    @Prop({ require: true })
    name: string
}

export const StateSchema = SchemaFactory.createForClass(State)