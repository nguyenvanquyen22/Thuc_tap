package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import phuocvu.org.ecombackendspringboot.model.Order.Order;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping
    public List<Order> getAlOrder() {
        return  orderService.getAllOrder();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable(name = "id") Long id) {
        Order order = orderService.getOrderById(id);
        return  ResponseEntity.ok(order);
    }

    @GetMapping("/customerInfo/{id}")
    public ResponseEntity<Order> getCartByUserId(@PathVariable(name = "id") Long id) {
        Order order = orderService.getOrderByCustomerInfoId(id);
        return  ResponseEntity.ok(order);
    }
}
