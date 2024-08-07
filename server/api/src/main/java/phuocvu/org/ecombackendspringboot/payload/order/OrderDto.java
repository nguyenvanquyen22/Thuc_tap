package phuocvu.org.ecombackendspringboot.payload.order;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class OrderDto {
    private String status;
    private float amount;
    private String createdAt;
    private String updateAt;
    // to cart
}
