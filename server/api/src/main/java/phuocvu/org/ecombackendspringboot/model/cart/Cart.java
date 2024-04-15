package phuocvu.org.ecombackendspringboot.model.cart;

import jakarta.persistence.*;
import lombok.*;
import phuocvu.org.ecombackendspringboot.model.user.User;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at", nullable = false)
    private String created_at;

    @Column(name = "update_at", nullable = false)
    private String update_at;

    // quan he toi cartItem
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> cartItemList;

    // quan he toi User
    @OneToOne(mappedBy = "cart")
    private User user;
}
