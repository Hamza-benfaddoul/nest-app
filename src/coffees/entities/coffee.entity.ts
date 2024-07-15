import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Flavor } from "./flavor.entity"

@Entity() // 👈 SQL table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  brand: string

  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees,
    {
      cascade: true, // 👈 if you insert a new coffee, insert
    }
  )
  flavors: Flavor[]
}
