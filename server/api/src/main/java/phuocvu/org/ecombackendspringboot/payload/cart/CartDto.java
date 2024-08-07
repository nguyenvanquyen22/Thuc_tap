package phuocvu.org.ecombackendspringboot.payload.cart;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartDto {
    private Long id;
    private String createdAt;
    private String updatedAt;
}
