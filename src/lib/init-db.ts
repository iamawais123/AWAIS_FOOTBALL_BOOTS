import { initializeDatabase } from '@/lib/db';
import { products } from '@/data/products';

initializeDatabase(products);
