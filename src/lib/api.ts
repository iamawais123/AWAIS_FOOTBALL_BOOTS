const API_BASE = '/api';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  count?: number;
}

export interface User {
  id: string;
  email: string;
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

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();
  return data;
}

export const api = {
  products: {
    getAll: (params?: { category?: string; brand?: string; search?: string; limit?: string; offset?: string }) =>
      request('/products' + (params ? `?${new URLSearchParams(params as any).toString()}` : '')),
    
    getById: (id: number) =>
      request(`/products/${id}`),
    
    create: (product: any) =>
      request('/products', { method: 'POST', body: JSON.stringify(product) }),
    
    update: (id: number, product: any) =>
      request(`/products/${id}`, { method: 'PUT', body: JSON.stringify(product) }),
    
    delete: (id: number) =>
      request(`/products/${id}`, { method: 'DELETE' }),
  },

  cart: {
    get: (userId: string) =>
      request(`/cart?userId=${userId}`),
    
    add: (userId: string, productId: number, size: string, quantity: number = 1) =>
      request('/cart', { 
        method: 'POST', 
        body: JSON.stringify({ userId, productId, size, quantity }) 
      }),
    
    remove: (userId: string, productId?: number) =>
      request(`/cart?userId=${userId}${productId ? `&productId=${productId}` : ''}`, { 
        method: 'DELETE' 
      }),
  },

  wishlist: {
    get: (userId: string) =>
      request(`/wishlist?userId=${userId}`),
    
    add: (userId: string, productId: number) =>
      request('/wishlist', { 
        method: 'POST', 
        body: JSON.stringify({ userId, productId }) 
      }),
    
    remove: (userId: string, productId?: number) =>
      request(`/wishlist?userId=${userId}${productId ? `&productId=${productId}` : ''}`, { 
        method: 'DELETE' 
      }),
  },

  auth: {
    register: (email: string, password: string, name: string) =>
      request('/auth/register', { 
        method: 'POST', 
        body: JSON.stringify({ email, password, name }) 
      }),
    
    login: (email: string, password: string) =>
      request('/auth/login', { 
        method: 'POST', 
        body: JSON.stringify({ email, password }) 
      }),
  },

  orders: {
    get: (userId: string) =>
      request(`/orders?userId=${userId}`),
    
    create: (userId: string, items: CartItem[], total: number, shippingAddress: Order['shippingAddress']) =>
      request('/orders', { 
        method: 'POST', 
        body: JSON.stringify({ userId, items, total, shippingAddress }) 
      }),
  },
};
