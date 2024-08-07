package phuocvu.org.ecombackendspringboot.payload.user;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustomerInfoDto {
    private String address;
    private String fullName;
    private String phoneNumber;
}
