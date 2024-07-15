import {  IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
  @IsPositive()
  @IsOptional()
  offset: number;

  @IsOptional()
  @IsPositive()
  limit: number;
}
