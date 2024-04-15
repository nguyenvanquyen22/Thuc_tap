package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.CategoryDto;
import phuocvu.org.ecombackendspringboot.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // add category
    @PostMapping
    public ResponseEntity<CategoryDto> addCategory(@RequestBody CategoryDto categoryDto) {
        CategoryDto saveCategory = categoryService.addCategory(categoryDto);
        return new ResponseEntity<>(saveCategory, HttpStatus.CREATED);
    }

    // update category
    @PutMapping("/{id}")
    public ResponseEntity<CategoryDto> updateCategory(@RequestBody CategoryDto categoryDto, @PathVariable(name = "id") Long id) {
        CategoryDto saveCategory = categoryService.updateCategory(categoryDto, id);
        return ResponseEntity.ok(saveCategory);
    }

    // delete category
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable(name = "id") Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("category deleted successfully");
    }

    // get category by id
    @GetMapping("/{id}")
    public ResponseEntity<CategoryDto> getCategoryById(@PathVariable(name = "id") Long id) {
        CategoryDto categoryDto = categoryService.getCategoryByID(id);
        return ResponseEntity.ok(categoryDto);
    }

    // get all category
    @GetMapping
    public List<CategoryDto> getAllCategory() {
        return categoryService.getAllCategory();
    }
}
