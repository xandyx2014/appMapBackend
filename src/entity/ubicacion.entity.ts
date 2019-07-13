import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  @Index()
  id?: number;

  @Column()
  descripcion?: string;

  @Column('text')
  longitud: string;

  @Column('text')
  latitud: string;
}
