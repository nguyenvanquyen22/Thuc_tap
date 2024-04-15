package phuocvu.org.ecombackendspringboot.model;

import jakarta.persistence.*;
import lombok.*;
import phuocvu.org.ecombackendspringboot.model.Order.Order;

import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "voucher")
public class Voucher {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "discount", nullable = false)
    private float discount;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "status", nullable = false)
    private String status;

//    // quan he toi Order
//    @OneToMany(mappedBy = "voucher", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Order> orderList;
}
