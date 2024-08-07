package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();

    Order getOrderById(Long id);

}
