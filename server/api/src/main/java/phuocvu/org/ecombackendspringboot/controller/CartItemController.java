package phuocvu.org.ecombackendspringboot.controller;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.service.CartItemService;

import java.util.List;

@RestController
@RequestMapping("api/cart_item")
public class CartItemController {
    CartItemService cartItemService;

    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @GetMapping
    public List<CartItem> getAllCartItem() {
        return cartItemService.getAllCartItem();
    }

    @GetMapping("/{id}")
    public CartItem getCartItemById(@PathVariable(name = "id") Long id) {
        return cartItemService.getCartItemById(id);
    }

    @GetMapping("/cart/{id}")
    public List<CartItem> getAllCartItemByCart(@PathVariable(name = "id" )Long id) {
        return cartItemService.getAllCartItemByCart(id);
    }

    @PostMapping
    public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem) {
        CartItem saveCartItem = cartItemService.addCartItem(cartItem);
        return new ResponseEntity<>(saveCartItem, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/{quantity}")
    public ResponseEntity<CartItem> updateCartItemQuantity(@PathVariable(name = "id") Long id,
                                                           @PathVariable(name = "quantity") int newQuantity) {
        CartItem saveCartItem = cartItemService.updateCartItemQuantity(id, newQuantity);
        return ResponseEntity.ok(saveCartItem);
    }

    @DeleteMapping("/{id")
    public ResponseEntity<String> deleteCartitem(@PathVariable(name = "id") Long id){
        cartItemService.deleteCartItem(id);
        return ResponseEntity.ok("CartItem deleted successfully!");
    }
}

