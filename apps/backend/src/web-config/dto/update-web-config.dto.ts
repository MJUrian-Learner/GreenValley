import { PartialType } from '@nestjs/mapped-types';
import { CreateWebConfigDto } from './create-web-config.dto';

export class UpdateWebConfigDto extends PartialType(CreateWebConfigDto) {}
