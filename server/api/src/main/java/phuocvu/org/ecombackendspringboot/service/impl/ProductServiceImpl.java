package phuocvu.org.ecombackendspringboot.service.impl;

import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.model.Category;
import phuocvu.org.ecombackendspringboot.repository.CategoryRepository;
import phuocvu.org.ecombackendspringboot.repository.ProductRepository;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.payload.ProductDto;
import phuocvu.org.ecombackendspringboot.service.ProductService;
import org.modelmapper.ModelMapper;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;
    private CategoryRepository categoryRepository;
    private ModelMapper mapper;

    public ProductServiceImpl(ProductRepository productRepository, CategoryRepository categoryRepository, ModelMapper mapper) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    // create a Product
    // product <- productDTO --> save product -> return DTO
    @Override
    public ProductDto addProduct(ProductDto productDto) {
        Product product = mapper.map(productDto, Product.class);
        Product savedProduct = productRepository.save(product);
        return mapper.map(savedProduct, ProductDto.class);
    }

    // get all product
    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map((product) -> mapper.map(product, ProductDto.class)).collect(Collectors.toList());
    }

    // Find by id: find -> existence check -> response
    @Override
    public ProductDto getProductById(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product", "id", productId));
        return mapper.map(product, ProductDto.class);
    }

    // update a exist product
    @Override
    public ProductDto updateProduct(ProductDto productDto, long productId) {
        Product existProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product", "id", productId));
        mapper.map(productDto, existProduct);
        Product updateProduct = productRepository.save(existProduct);
        return mapper.map(updateProduct, ProductDto.class);
    }

    // delete product
    // search -> delete
    @Override
    public void deleteProductById(long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product", "id", productId));
        productRepository.delete(product);
    }

    @Override
    public List<ProductDto> getProductsByCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("category", "id", categoryId));
        List<Product> products = productRepository.findByCategoryId(categoryId);

        return products.stream()
                .map(product -> mapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }
}
