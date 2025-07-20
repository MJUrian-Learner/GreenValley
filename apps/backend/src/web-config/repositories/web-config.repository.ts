import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebConfig, WebConfigDocument } from '../schemas/web-config.schema';
import { IWebConfigRepository } from './web-config.repository.interface';

@Injectable()
export class WebConfigRepository implements IWebConfigRepository {
  constructor(
    @InjectModel(WebConfig.name)
    private readonly webConfigModel: Model<WebConfigDocument>,
  ) {}

  async create(data: Partial<WebConfig>): Promise<WebConfigDocument> {
    const created = new this.webConfigModel(data);
    return created.save();
  }

  async findAll(): Promise<WebConfigDocument[]> {
    return this.webConfigModel.find().exec();
  }

  async findById(id: string): Promise<WebConfigDocument | null> {
    return this.webConfigModel.findById(id).exec();
  }

  async findOne(filter: Partial<WebConfig>): Promise<WebConfigDocument | null> {
    return this.webConfigModel.findOne(filter).exec();
  }

  async update(
    id: string,
    data: Partial<WebConfig>,
  ): Promise<WebConfigDocument | null> {
    return this.webConfigModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async delete(id: string): Promise<WebConfigDocument | null> {
    return this.webConfigModel.findByIdAndDelete(id).exec();
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.webConfigModel.countDocuments({ _id: id }).exec();
    return count > 0;
  }
}
