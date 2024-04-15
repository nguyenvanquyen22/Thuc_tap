package phuocvu.org.ecombackendspringboot.repository.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findCartByUserId(Long userId);
}
