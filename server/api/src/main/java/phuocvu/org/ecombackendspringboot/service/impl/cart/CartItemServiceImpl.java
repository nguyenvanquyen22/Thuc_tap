package phuocvu.org.ecombackendspringboot.service.impl.cart;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.repository.cart.CartItemRepository;
import phuocvu.org.ecombackendspringboot.service.CartItemService;

import java.util.List;
@Service
public class CartItemServiceImpl implements CartItemService {
    CartItemRepository cartItemRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public List<CartItem> getAllCartItem() {
        List<CartItem> cartItemList = cartItemRepository.findAll();
        return cartItemList;
    }

    @Override
    public List<CartItem> getAllCartItemByCart(Long cartId) {
        List<CartItem> cartItemList = cartItemRepository.findCartItemByCartId(cartId);
        return cartItemList;
    }

    @Override
    public CartItem getCartItemById(Long cartItemId) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("cartItem", "cartItemId", cartItemId));
        return cartItem;
    }

    @Override
    public CartItem addCartItem(CartItem cartItem) {
        cartItemRepository.save(cartItem);
        return null;
    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, int newQuantity) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("cartItem", "cartItemId", cartItemId));
        cartItem.setQuantity(newQuantity);
        return null;
    }

    @Override
    public void deleteCartItem(Long cartItemId) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("cartItem", "cartItemId", cartItemId));
        cartItemRepository.delete(cartItem);
    }
}
