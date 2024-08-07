package phuocvu.org.ecombackendspringboot.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
