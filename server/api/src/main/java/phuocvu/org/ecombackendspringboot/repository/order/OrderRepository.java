package phuocvu.org.ecombackendspringboot.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.Order.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findOrderByCustomerInfo(Long customerInfoId);
}
