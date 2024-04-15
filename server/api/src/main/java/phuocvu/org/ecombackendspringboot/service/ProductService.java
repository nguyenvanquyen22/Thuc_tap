package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto addProduct(ProductDto productDto);

    List<ProductDto> getAllProducts();

    ProductDto getProductById(Long id);

    ProductDto updateProduct(ProductDto productDto, long id);

    void deleteProductById(long id);

    List<ProductDto> getProductsByCategory(Long categoryId);
}
