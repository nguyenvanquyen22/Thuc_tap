package phuocvu.org.ecombackendspringboot.payload;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class CategoryDto {
    private String categoryName;
    private String type;
    private String des;
}
