import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { BaseQueryCriteriaDTO } from '@src/core/dtos';
export class SocialMessagingQueryDTO extends BaseQueryCriteriaDTO {
  @ApiPropertyOptional({
    description: 'Type of social messaging contact no.',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  type?: string = undefined;

  @ApiPropertyOptional({
    description: 'Social messaging contact no.',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  contactNo?: string = undefined;
}
