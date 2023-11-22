import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Tree('materialized-path')
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  parentId?: number;

  @TreeParent()
  parent?: User;

  @TreeChildren()
  children?: User[];

  @CreateDateColumn()
  createdAt!: Date;
}
