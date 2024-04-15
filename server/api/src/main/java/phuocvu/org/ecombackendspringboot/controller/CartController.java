package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.payload.CategoryDto;
import phuocvu.org.ecombackendspringboot.service.CartService;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public List<Cart> getAllCart() {
        return  cartService.getAllCart();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable(name = "id") Long id) {
        Cart cart = cartService.getCartbyId(id);
        return  ResponseEntity.ok(cart);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Cart> getCartByUserId(@PathVariable(name = "id") Long id) {
        Cart cart = cartService.getCartbyId(id);
        return  ResponseEntity.ok(cart);
    }

}
