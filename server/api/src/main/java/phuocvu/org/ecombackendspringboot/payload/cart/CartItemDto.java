package phuocvu.org.ecombackendspringboot.payload.cart;

import jakarta.persistence.*;
import lombok.*;
import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.model.cart.Cart;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartItemDto {
    private int quantity;
    private Product product;
    private Cart cart;
}
