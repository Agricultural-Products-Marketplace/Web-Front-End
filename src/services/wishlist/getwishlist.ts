import { WishlistData } from './../../redux/types';
// src/services/wishlistService.ts
import axios from 'axios';
import { url } from '../../api/apiUrl';


export async function getWishlistById(userId: number): Promise<WishlistData[]> {
  try {
    const response = await axios.get<WishlistData[]>(`${url}v1/customer/customer/wishlist/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching wishlist for user ID ${userId}:`, error);
    throw error;
  }
}

export async function addWishlistItem(userId: number, productId: number): Promise<void> {
  try {
    const data = [
      {
        user: userId,
        product: productId,
      },
    ];

    await axios.post(`${url}v1/customer/customer/wishlist/create`, data);
  } catch (error) {
    console.error(`Error adding item to wishlist for user ID ${userId}:`, error);
    throw error;
  }
}

export async function deleteWishlistItem(userId: number, itemId: number): Promise<void> {
  try {
    await axios.delete(`${url}v1/customer/customer/wishlist/${userId}/${itemId}`);
  } catch (error) {
    console.error(`Error deleting item from wishlist for user ID ${userId}:`, error);
    throw error;
  }
}
