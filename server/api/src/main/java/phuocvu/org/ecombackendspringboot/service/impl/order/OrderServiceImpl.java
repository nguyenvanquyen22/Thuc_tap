package phuocvu.org.ecombackendspringboot.service.impl.order;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Order;
import phuocvu.org.ecombackendspringboot.repository.order.OrderRepository;
import phuocvu.org.ecombackendspringboot.service.OrderService;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", "id", id));
    }

}
