import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateWebConfigDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  website_name: string;
}
