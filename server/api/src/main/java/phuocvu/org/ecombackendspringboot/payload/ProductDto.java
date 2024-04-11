package phuocvu.org.ecombackendspringboot.payload;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDto {
    // tien hanh validation sau
    private Long id;
    private String type;
    private String title;
    private float discount;
    private int total;
    private int remain;
    private float price;
    private String cpu;
    private String ram;
    private String battery;
    private String imageUrl;
    private String monitor;
    private String disk;
    private String vga;
    private String port;
    private String audio;
    private String keyboard;
    private String os;
    private String color;
    private String weight;
    private String bluetooth;
    private String webcam;
    private String size;
}
