package phuocvu.org.ecombackendspringboot.model.cart;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    // total
    // customerInfo

    // thể hiện mối quan hệ 1-n cart - cartDetail, có tác động tới bảng trong Database
    // Tai sao lai su dung set chu khong phai list ?
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true) 
    private List<CartDetail> CartDetails;
}
