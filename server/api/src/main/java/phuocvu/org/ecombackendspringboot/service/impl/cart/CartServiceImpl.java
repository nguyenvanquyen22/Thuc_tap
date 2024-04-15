package phuocvu.org.ecombackendspringboot.service.impl.cart;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.repository.ProductRepository;
import phuocvu.org.ecombackendspringboot.repository.cart.CartItemRepository;
import phuocvu.org.ecombackendspringboot.repository.cart.CartRepository;
import phuocvu.org.ecombackendspringboot.service.CartService;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    CartRepository cartRepository;

    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public List<Cart> getAllCart() {
        List<Cart> cartList = cartRepository.findAll();
        return cartList;
    }

    @Override
    public Cart getCartbyId(Long id) {
        Cart cart = cartRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("cart", "id", id));
        return cart;
    }

    @Override
    public Cart getCartByUserId(Long userId) {
        Cart cart = cartRepository.findCartByUserId(userId);
        return cart;
    }
}
