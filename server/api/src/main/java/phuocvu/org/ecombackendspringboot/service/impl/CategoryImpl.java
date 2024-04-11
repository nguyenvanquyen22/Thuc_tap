package phuocvu.org.ecombackendspringboot.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.model.Category;
import phuocvu.org.ecombackendspringboot.payload.CategoryDto;
import phuocvu.org.ecombackendspringboot.repository.CategoryRepository;
import phuocvu.org.ecombackendspringboot.service.CategoryService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryImpl implements CategoryService {
    private CategoryRepository categoryRepository;
    private ModelMapper mapper;

    public CategoryImpl(CategoryRepository categoryRepository, ModelMapper mapper) {
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    @Override
    public CategoryDto addCategory(CategoryDto categoryDto) {
        Category category = mapper.map(categoryDto, Category.class);
        Category saveCategory = categoryRepository.save(category);
        return mapper.map(saveCategory,CategoryDto.class);
    }

    @Override
    public CategoryDto updateCategory(CategoryDto categoryDto, Long categoryId) {
        Category existCategory = categoryRepository.findById(categoryId)
                .orElseThrow(()-> new ResourceNotFoundException("category","id",categoryId));
        mapper.map(categoryDto,existCategory);
        Category saveCategory = categoryRepository.save(existCategory);
        return mapper.map(saveCategory,CategoryDto.class);
    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category existCategory = categoryRepository.findById(categoryId)
                .orElseThrow(()-> new ResourceNotFoundException("category","id",categoryId));
        categoryRepository.delete(existCategory);
    }

    @Override
    public List<CategoryDto> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map((category) -> mapper.map(category, CategoryDto.class)).collect(Collectors.toList());
    }

    @Override
    public CategoryDto getCategoryByID(Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(()-> new ResourceNotFoundException("category","id",categoryId));
        return mapper.map(category,CategoryDto.class);
    }
}
