import { WebConfig, WebConfigDocument } from '../schemas/web-config.schema';

export interface IWebConfigRepository {
  create(data: Partial<WebConfig>): Promise<WebConfigDocument>;
  findAll(): Promise<WebConfigDocument[]>;
  findById(id: string): Promise<WebConfigDocument | null>;
  findOne(filter: Partial<WebConfig>): Promise<WebConfigDocument | null>;
  update(
    id: string,
    data: Partial<WebConfig>,
  ): Promise<WebConfigDocument | null>;
  delete(id: string): Promise<WebConfigDocument | null>;
  exists(id: string): Promise<boolean>;
}
