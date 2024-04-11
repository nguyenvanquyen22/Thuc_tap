package phuocvu.org.ecombackendspringboot.payload;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerInfoDto {
    private Long id;
    private String address;
    private String fullName;
    private String phoneNumber;
}
