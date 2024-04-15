package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.ProductDto;
import phuocvu.org.ecombackendspringboot.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // sẽ bổ sung http
    // get all product
    @GetMapping
    public List<ProductDto> getAllProducts() {
        return productService.getAllProducts();
    }

    // get product by id
    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable(name = "id") Long id) {
        ProductDto productDto = productService.getProductById(id);
        return ResponseEntity.ok(productDto);
    }

    // get product by category_id
    @GetMapping("/category/{id}")
    public ResponseEntity<List<ProductDto>> getProductByCategoryId(@PathVariable("id") Long categoryId) {
        List<ProductDto> productDTOs = productService.getProductsByCategory(categoryId);
        return ResponseEntity.ok(productDTOs);
    }

    // add a product
    @PostMapping 
    public ResponseEntity<ProductDto> addProduct (@RequestBody ProductDto productDto) {
        ProductDto savedProduct = productService.addProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
    // update product
    @PutMapping("/{id}")
    public ResponseEntity<ProductDto> updateProduct(@RequestBody ProductDto productDto,
                                                    @PathVariable(name = "id") Long id) {
        ProductDto savedProduct = productService.updateProduct(productDto, id);
        return ResponseEntity.ok(savedProduct);
    }
    // delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable(name = "id") Long id) {
        productService.deleteProductById(id);
        return ResponseEntity.ok("Product deleted successfully!");
    }
}
