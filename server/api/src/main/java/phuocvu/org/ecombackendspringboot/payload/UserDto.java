package phuocvu.org.ecombackendspringboot.payload;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String password;
    private String address;
}
