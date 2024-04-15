package phuocvu.org.ecombackendspringboot.payload.cart;

import jakarta.persistence.Column;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartDto {
    private Long id;
    private String created_at;
    private String update_at;
}
