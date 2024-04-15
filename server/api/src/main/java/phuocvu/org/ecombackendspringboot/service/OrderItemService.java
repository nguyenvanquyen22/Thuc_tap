package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.model.Order.Order;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;
import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;

import java.util.List;

public interface OrderItemService {
    List<OrderItem> getAllOrderItem();
    List<OrderItem> getAllOrderItemByOrder(Long orderId);
    OrderItem getOrderItemById(Long orderItemId);
    OrderItem addOrderItem(OrderItem orderItem);
    OrderItem updateOrderItemQuantity(Long orderItemId, int newQuantity);
    void deleteOrderItem(Long orderItemId);
}
