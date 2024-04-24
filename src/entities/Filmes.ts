import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('filmes')

export class Filmes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text'})
    nome: string

    @Column({ type: 'text'})
    sinopse: string

}