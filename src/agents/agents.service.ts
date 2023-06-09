import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agent } from './schemas/agent.schema';
import { Model } from 'mongoose';

@Injectable()
export class AgentsService {
  constructor(@InjectModel(Agent.name) private agentModel: Model<Agent>) {}

  async create(): Promise<Agent> {
    const createdAgent = new this.agentModel({ name: 'test' });
    return createdAgent.save();
  }
}
