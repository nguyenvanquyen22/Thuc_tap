package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.CategoryDto;

import java.util.List;

public interface CategoryService {
    CategoryDto addCategory(CategoryDto categoryDto);

    CategoryDto updateCategory(CategoryDto categoryDto, Long id);

    void deleteCategory(Long id);

    List<CategoryDto> getAllCategory();

    CategoryDto getCategoryByID(Long id);
}
