import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column('timestamp with local time zone')
  created_at: Date;

  @Column('timestamp with local time zone')
  updated_at: Date;
}

export default Product;
