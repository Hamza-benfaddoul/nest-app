import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) { }

  @Get()
  findAll() {
    return this.coffeesService.findAll()
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.coffeesService.findOne(params.id)
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffee: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffee)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id)
  }
}
