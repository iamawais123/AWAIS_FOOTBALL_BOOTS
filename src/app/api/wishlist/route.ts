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
    const wishlist = db.wishlists[userId] || [];

    return NextResponse.json({
      success: true,
      data: wishlist
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch wishlist' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, productId } = body;

    if (!userId || !productId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    
    if (!db.wishlists[userId]) {
      db.wishlists[userId] = [];
    }

    if (!db.wishlists[userId].includes(productId)) {
      db.wishlists[userId].push(productId);
    }

    saveDatabase(db);

    return NextResponse.json({
      success: true,
      data: db.wishlists[userId]
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to add to wishlist' },
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

    if (!db.wishlists[userId]) {
      return NextResponse.json({
        success: true,
        data: []
      });
    }

    if (productId) {
      db.wishlists[userId] = db.wishlists[userId].filter(
        id => id !== parseInt(productId)
      );
    } else {
      db.wishlists[userId] = [];
    }

    saveDatabase(db);

    return NextResponse.json({
      success: true,
      data: db.wishlists[userId]
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update wishlist' },
      { status: 500 }
    );
  }
}
