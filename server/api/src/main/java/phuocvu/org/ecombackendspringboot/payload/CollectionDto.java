package phuocvu.org.ecombackendspringboot.payload;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CollectionDto {
    private Long id;
    private String title;
    private String des;
    private String type;
}
