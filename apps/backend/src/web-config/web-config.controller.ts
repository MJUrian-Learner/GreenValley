import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WebConfigService } from './web-config.service';
import { CreateWebConfigDto } from './dto/create-web-config.dto';
import { UpdateWebConfigDto } from './dto/update-web-config.dto';

@Controller('web-config')
export class WebConfigController {
  constructor(private readonly webConfigService: WebConfigService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: CreateWebConfigDto) {
    return this.webConfigService.create(createDto);
  }

  @Get()
  findAll() {
    return this.webConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webConfigService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateWebConfigDto) {
    return this.webConfigService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.webConfigService.remove(id);
  }
}
