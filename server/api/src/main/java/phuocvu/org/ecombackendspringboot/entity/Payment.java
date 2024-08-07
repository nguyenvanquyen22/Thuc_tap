package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import phuocvu.org.ecombackendspringboot.model.Order.Order;
import phuocvu.org.ecombackendspringboot.model.Order.OrderItem;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "total", nullable = false)
    private float total;

    @Column(name = "type", nullable = false)
    private String type;

//    // quan he toi Order
//    @OneToMany(mappedBy = "payment", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Order> orderList;

}
