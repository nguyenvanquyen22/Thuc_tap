package phuocvu.org.ecombackendspringboot.repository.order;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;
import phuocvu.org.ecombackendspringboot.payload.order.OrderItemDto;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    List<OrderItem> findOrderItemByOrder(Long orderId);
}
