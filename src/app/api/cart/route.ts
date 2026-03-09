import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, saveDatabase } from '@/lib/db';

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
    const cart = db.carts[userId] || [];

    return NextResponse.json({
      success: true,
      data: cart
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, productId, size, quantity } = body;

    if (!userId || !productId || !size) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    
    if (!db.carts[userId]) {
      db.carts[userId] = [];
    }

    const existingItemIndex = db.carts[userId].findIndex(
      item => item.productId === productId && item.size === size
    );

    if (existingItemIndex !== -1) {
      db.carts[userId][existingItemIndex].quantity += quantity || 1;
    } else {
      db.carts[userId].push({
        productId,
        size,
        quantity: quantity || 1
      });
    }

    saveDatabase(db);

    return NextResponse.json({
      success: true,
      data: db.carts[userId]
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to add to cart' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const productId = searchParams.get('productId');

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    const db = getDatabase();

    if (!db.carts[userId]) {
      return NextResponse.json({
        success: true,
        data: []
      });
    }

    if (productId) {
      db.carts[userId] = db.carts[userId].filter(
        item => item.productId !== parseInt(productId)
      );
    } else {
      db.carts[userId] = [];
    }

    saveDatabase(db);

    return NextResponse.json({
      success: true,
      data: db.carts[userId]
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update cart' },
      { status: 500 }
    );
  }
}
