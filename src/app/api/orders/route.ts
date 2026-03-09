import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, saveDatabase, Order } from '@/lib/db';
import crypto from 'crypto';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    const orders = db.orders.filter(o => o.userId === userId);

    return NextResponse.json({
      success: true,
      data: orders
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, items, total, shippingAddress } = body;

    if (!userId || !items || !total || !shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const db = getDatabase();

    const newOrder: Order = {
      id: crypto.randomUUID(),
      userId,
      items,
      total,
      status: 'pending',
      shippingAddress,
      createdAt: new Date().toISOString()
    };

    db.orders.push(newOrder);

    if (db.carts[userId]) {
      db.carts[userId] = [];
    }

    saveDatabase(db);

    return NextResponse.json({
      success: true,
      data: newOrder
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
