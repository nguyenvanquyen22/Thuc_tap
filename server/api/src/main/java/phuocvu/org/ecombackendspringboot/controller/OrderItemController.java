package phuocvu.org.ecombackendspringboot.controller;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;
import phuocvu.org.ecombackendspringboot.model.cart.CartItem;
import phuocvu.org.ecombackendspringboot.service.OrderItemService;

import java.util.List;

@RestController
@RequestMapping("api/order_item")
public class OrderItemController {
    OrderItemService orderItemService;

    public OrderItemController(OrderItemService orderItemService) {
        this.orderItemService = orderItemService;
    }
    @GetMapping
    public List<OrderItem> getAllOrderItem() {
        return orderItemService.getAllOrderItem();
    }

    @GetMapping("/{id}")
    public OrderItem getOrderItemById(@PathVariable(name = "id") Long id) {
        return orderItemService.getOrderItemById(id);
    }

    @GetMapping("/order/{id}")
    public List<OrderItem> getAllOrderItemByOrder(@PathVariable(name = "id" )Long id) {
        return orderItemService.getAllOrderItemByOrder(id);
    }

    @PostMapping
    public ResponseEntity<OrderItem> addOrderItem(@RequestBody OrderItem orderItem) {
        OrderItem saveCartItem = orderItemService.addOrderItem(orderItem);
        return new ResponseEntity<>(saveCartItem, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/{quantity}")
    public ResponseEntity<OrderItem> updateCartItemQuantity(@PathVariable(name = "id") Long id,
                                                           @PathVariable(name = "quantity") int newQuantity) {
        OrderItem saveOrderItem = orderItemService.updateOrderItemQuantity(id, newQuantity);
        return ResponseEntity.ok(saveOrderItem);
    }

    @DeleteMapping("/{id")
    public ResponseEntity<String> deleteCartitem(@PathVariable(name = "id") Long id){
        orderItemService.deleteOrderItem(id);
        return ResponseEntity.ok("OrderItem deleted successfully!");
    }
}
