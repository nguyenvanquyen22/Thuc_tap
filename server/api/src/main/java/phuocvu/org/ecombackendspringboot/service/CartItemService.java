package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;

import java.util.List;

public interface CartItemService {
    List<CartItem> getAllCartItem();
    List<CartItem> getAllCartItemByCart(Long cartId);
    CartItem getCartItemById(Long cartItemId);
    CartItem addCartItem(CartItem cartItem);
    CartItem updateCartItemQuantity(Long cartItemId, int newQuantity);
    void deleteCartItem(Long cartItemId);
}
