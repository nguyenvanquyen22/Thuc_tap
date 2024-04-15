package phuocvu.org.ecombackendspringboot.payload.user;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserDto {
    private String username;
    private String email;
    private String password;
    private String address;
}
