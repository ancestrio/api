import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AgentDocument = HydratedDocument<Agent>;

@Schema()
export class Agent {
  @Prop()
  name: string;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
