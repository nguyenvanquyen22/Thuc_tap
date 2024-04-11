package phuocvu.org.ecombackendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.cart.CartDetail;

public interface CartDetailRepository extends JpaRepository<CartDetail, Long> {
}
