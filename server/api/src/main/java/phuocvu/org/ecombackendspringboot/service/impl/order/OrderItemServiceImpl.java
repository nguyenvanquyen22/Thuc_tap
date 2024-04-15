package phuocvu.org.ecombackendspringboot.service.impl.order;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.Order.Order;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;
import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.repository.order.OrderItemRepository;
import phuocvu.org.ecombackendspringboot.service.OrderItemService;

import java.util.List;

@Service
public class OrderItemServiceImpl implements OrderItemService {
    OrderItemRepository orderItemRepository;

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public List<OrderItem> getAllOrderItem() {
        List<OrderItem > orderItemList = orderItemRepository.findAll();
        return orderItemList;
    }

    @Override
    public List<OrderItem> getAllOrderItemByOrder(Long orderId) {
        List<OrderItem > orderItemList = orderItemRepository.findOrderItemByOrder(orderId);
        return orderItemList;
    }

    @Override
    public OrderItem getOrderItemById(Long orderItemId) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new ResourceNotFoundException("orderItem", "orderItemId", orderItemId));
        return orderItem;
    }

    @Override
    public OrderItem addOrderItem(OrderItem orderItem) {
        orderItemRepository.save(orderItem);
        return orderItem;
    }

    @Override
    public OrderItem updateOrderItemQuantity(Long orderItemId, int newQuantity) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new ResourceNotFoundException("orderItem", "orderItemId", orderItemId));
        orderItem.setQuantity(newQuantity);
        return null;
    }

    @Override
    public void deleteOrderItem(Long orderItemId) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new ResourceNotFoundException("orderItem", "orderItemId", orderItemId));
        orderItemRepository.delete(orderItem);
    }
}
