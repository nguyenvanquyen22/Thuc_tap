package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "\"order\"")
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

    @Column(name = "updateAt")
    private String updateAt;


    // quan he toi OrderItem
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<OrderItem> orderItems = new HashSet<>();

    // quan hệ toi CustomerInfo
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    // quan he toi voucher
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_id")
    private Payment payment;

    // quan he toi payment
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Voucher_id")
    private Voucher voucher;
}
