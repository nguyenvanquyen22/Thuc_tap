package phuocvu.org.ecombackendspringboot.payload.order;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class OrderItemDto {
    private int quantity;
}
