import { Injectable, NotFoundException } from '@nestjs/common';
import { WebConfigDocument } from './schemas/web-config.schema';
import { WebConfigRepository } from './repositories/web-config.repository';
import { CreateWebConfigDto } from './dto/create-web-config.dto';
import { UpdateWebConfigDto } from './dto/update-web-config.dto';

@Injectable()
export class WebConfigService {
  constructor(private readonly webConfigRepository: WebConfigRepository) {}

  async create(createDto: CreateWebConfigDto): Promise<WebConfigDocument> {
    return this.webConfigRepository.create(createDto);
  }

  async findAll(): Promise<WebConfigDocument[]> {
    return this.webConfigRepository.findAll();
  }

  async findOne(id: string): Promise<WebConfigDocument> {
    const webConfig = await this.webConfigRepository.findById(id);
    if (!webConfig) {
      throw new NotFoundException(`Web config with ID ${id} not found`);
    }
    return webConfig;
  }

  async update(
    id: string,
    updateDto: UpdateWebConfigDto,
  ): Promise<WebConfigDocument> {
    const exists = await this.webConfigRepository.exists(id);
    if (!exists) {
      throw new NotFoundException(`Web config with ID ${id} not found`);
    }

    const updated = await this.webConfigRepository.update(id, updateDto);
    if (!updated) {
      throw new NotFoundException(`Web config with ID ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<WebConfigDocument> {
    const exists = await this.webConfigRepository.exists(id);
    if (!exists) {
      throw new NotFoundException(`Web config with ID ${id} not found`);
    }

    const deleted = await this.webConfigRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Web config with ID ${id} not found`);
    }
    return deleted;
  }
}
