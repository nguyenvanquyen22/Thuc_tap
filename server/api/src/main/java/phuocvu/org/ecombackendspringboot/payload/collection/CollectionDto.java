package phuocvu.org.ecombackendspringboot.payload.collection;


import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CollectionDto {
    private String title;
    private String des;
    private String type;
}
