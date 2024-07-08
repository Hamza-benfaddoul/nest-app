import { Injectable } from '@nestjs/common'
import { Coffee } from './entities/coffee.entity'

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanila'],
    },
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    return this.coffees.find(item => item.id === +id)
  }

  create(createCoffeeDto: any){
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any)
  {
    const coffee = this.coffees.find(item => item.id === +id)
  }

  remove(id: string)
  {
    const coffee = this.coffees.find(item => item.id === +id)
  }
}