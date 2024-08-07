package phuocvu.org.ecombackendspringboot.model.Order;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import phuocvu.org.ecombackendspringboot.model.Payment;
import phuocvu.org.ecombackendspringboot.model.Voucher;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;
import phuocvu.org.ecombackendspringboot.model.user.CustomerInfo;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "amount", nullable = false)
    private float amount;

    @Column(name = "createdAt", nullable = false)
    private String createdAt;

    @Column(name = "updateAt", nullable = false)
    private String updateAt;

    // quan he toi OrderItem
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItemList;

    // quan hệ toi CustomerInfo
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_info_id")
    private CustomerInfo customerInfo;

//    // quan he toi voucher
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "payment_id")
//    private Payment payment;
//
//    // quan he toi payment
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "Voucher_id")
//    private Voucher voucher;
}
