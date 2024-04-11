package phuocvu.org.ecombackendspringboot.mapper;

import phuocvu.org.ecombackendspringboot.model.Product;
import phuocvu.org.ecombackendspringboot.payload.ProductDto;

// phát triển tiếp sau
public class ProductMappper {
    public static Product mapToProduct(ProductDto productDto) {
        return Product.builder()
                .id(productDto.getId())
                .discount(productDto.getDiscount())
                .type(productDto.getType())
                .cpu(productDto.getCpu())
                .os(productDto.getOs())
                .title(productDto.getTitle())
                .audio(productDto.getAudio())
                .color(productDto.getColor())
                .disk(productDto.getDisk())
                .port(productDto.getPort())
                .ram(productDto.getRam())
                .price(productDto.getPrice())
                .vga(productDto.getVga())
                .size(productDto.getSize())
                .battery(productDto.getBattery())
                .total(productDto.getTotal())
                .remain(productDto.getRemain())
                .monitor(productDto.getMonitor())
                .webcam(productDto.getWebcam())
                .weight(productDto.getWeight())
                .imageUrl(productDto.getImageUrl())
                .keyboard(productDto.getKeyboard())
                .bluetooth(productDto.getBluetooth())
                .build();
    }

    public static ProductDto mapToProductDto(Product product) {
        return ProductDto.builder()
                .id(product.getId())
                .discount(product.getDiscount())
                .type(product.getType())
                .cpu(product.getCpu())
                .os(product.getOs())
                .title(product.getTitle())
                .audio(product.getAudio())
                .color(product.getColor())
                .disk(product.getDisk())
                .port(product.getPort())
                .ram(product.getRam())
                .price(product.getPrice())
                .vga(product.getVga())
                .size(product.getSize())
                .battery(product.getBattery())
                .total(product.getTotal())
                .remain(product.getRemain())
                .monitor(product.getMonitor())
                .webcam(product.getWebcam())
                .weight(product.getWeight())
                .imageUrl(product.getImageUrl())
                .keyboard(product.getKeyboard())
                .bluetooth(product.getBluetooth())
                .build();
    }
}
