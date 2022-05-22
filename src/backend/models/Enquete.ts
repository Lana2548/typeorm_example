import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export default class Enquete extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number = 0

  @Column()
  public point: number = 0

  @Column()
  public message: string = ""

  @Column()
  public mail: string = ""
}