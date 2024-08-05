import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Location extends Document {
  @Prop({ required: true })
  d_codigo: string

  @Prop({ required: true })
  D_mnpio: string

  @Prop({ required: true })
  d_estado: string

  @Prop({ required: true })
  id_asenta_cpcons: string
  
  @Prop({ required: true })
  d_asenta: string
}

export const LocationSchema = SchemaFactory.createForClass(Location);