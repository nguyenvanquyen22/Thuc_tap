package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.model.Order.Order;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;
import phuocvu.org.ecombackendspringboot.model.Payment;
import phuocvu.org.ecombackendspringboot.model.Voucher;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.payload.order.OrderDto;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();
    Order getOrderById(Long id);
    Order getOrderByCustomerInfoId(Long customerInfoId);
}
