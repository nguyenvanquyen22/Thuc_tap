package phuocvu.org.ecombackendspringboot.payload;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class VoucherDto {
    private String type;
    private float discount;
    private int quantity;
    private String status;

}
