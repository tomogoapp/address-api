import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Location extends Document {
  @Prop({ required: false })
  d_codigo: string;

  @Prop({ required: false })
  d_asenta: string;

  @Prop({ required: false })
  d_tipo_asenta: string;

  @Prop({ required: false })
  D_mnpio: string;

  @Prop({ required: false })
  d_estado: string;

  @Prop({ required: false })
  d_ciudad: string;

  @Prop({ required: false })
  d_CP: string;

  @Prop({ required: false })
  c_estado: string;

  @Prop({ required: false })
  c_oficina: string;

  @Prop({ required: false })
  c_CP: string;

  @Prop({ required: false })
  c_tipo_asenta: string;

  @Prop({ required: false })
  c_mnpio: string;

  @Prop({ required: false })
  id_asenta_cpcons: string;

  @Prop({ required: false })
  d_zona: string;

  @Prop({ required: false })
  c_cve_ciudad: string;

  @Prop({ type: Types.ObjectId, ref: 'State', required: false })
  state: Types.ObjectId;
}

export const LocationSchema = SchemaFactory.createForClass(Location)

LocationSchema.index({d_codigo:1})