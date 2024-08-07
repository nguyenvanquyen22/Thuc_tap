package phuocvu.org.ecombackendspringboot.model.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import phuocvu.org.ecombackendspringboot.model.Order.Order;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customer_info")
public class CustomerInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "fullname", nullable = false)
    private String fullName;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    // quan he toi user
    @OneToOne(mappedBy = "customer_info")
    private User user;

    // quan he toi order
    @OneToMany(mappedBy = "customer_info", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orderList;
}
