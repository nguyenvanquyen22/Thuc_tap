package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.payload.CategoryDto;
import phuocvu.org.ecombackendspringboot.payload.cart.CartItemDto;

import java.util.List;

public interface CartService {
    List<Cart> getAllCart();
    Cart getCartbyId(Long id);
    Cart getCartByUserId(Long userId);
}
