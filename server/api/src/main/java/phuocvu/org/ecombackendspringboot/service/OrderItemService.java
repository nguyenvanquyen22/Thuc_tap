package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.entity.OrderItem;

import java.util.List;

public interface OrderItemService {
    List<OrderItem> getAllOrderItem();

//    List<OrderItem> getAllOrderItemByOrder(Long orderId);

    OrderItem getOrderItemById(Long orderItemId);

    OrderItem addOrderItem(OrderItem orderItem);

    OrderItem updateOrderItemQuantity(Long orderItemId, int newQuantity);

    void deleteOrderItem(Long orderItemId);
}
