package phuocvu.org.ecombackendspringboot.service.impl.order;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.Order.Order;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;
import phuocvu.org.ecombackendspringboot.model.Payment;
import phuocvu.org.ecombackendspringboot.model.Voucher;
import phuocvu.org.ecombackendspringboot.repository.PaymentRepository;
import phuocvu.org.ecombackendspringboot.repository.VoucherRepository;
import phuocvu.org.ecombackendspringboot.repository.order.OrderItemRepository;
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
        List<Order> orderList = orderRepository.findAll();
        return orderList;
    }

    @Override
    public Order getOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", "id", id));
        return order;
    }

    @Override
    public Order getOrderByCustomerInfoId(Long customerInfoId) {
        Order order = orderRepository.findOrderByCustomerInfo(customerInfoId);
        return order;
    }
}
