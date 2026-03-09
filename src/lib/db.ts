import fs from 'fs';
import path from 'path';
import { Product } from './products';

const DB_PATH = path.join(process.cwd(), 'src/data/database.json');

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: string;
}

export interface CartItem {
  productId: number;
  size: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
  };
  createdAt: string;
}

export interface Database {
  products: Product[];
  users: User[];
  orders: Order[];
  carts: Record<string, CartItem[]>;
  wishlists: Record<string, number[]>;
}

let dbCache: Database | null = null;

export function getDatabase(): Database {
  if (dbCache) {
    return dbCache;
  }

  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    dbCache = JSON.parse(data);
    return dbCache;
  } catch (error) {
    return {
      products: [],
      users: [],
      orders: [],
      carts: {},
      wishlists: {}
    };
  }
}

export function saveDatabase(db: Database): void {
  dbCache = db;
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function initializeDatabase(products: Product[]): void {
  const db = getDatabase();
  
  if (db.products.length === 0) {
    db.products = products;
    saveDatabase(db);
    console.log('Database initialized with products');
  }
}
