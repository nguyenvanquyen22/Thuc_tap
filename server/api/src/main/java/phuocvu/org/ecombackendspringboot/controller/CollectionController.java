package phuocvu.org.ecombackendspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import phuocvu.org.ecombackendspringboot.payload.collection.CollectionDto;
import phuocvu.org.ecombackendspringboot.service.CollectionService;

import java.util.List;

@RequestMapping("/api/collection")
@RestController
public class CollectionController {
    private final CollectionService collectionService;

    public CollectionController(CollectionService collectionService) {
        this.collectionService = collectionService;
    }

    // add collection
    @PostMapping
    public ResponseEntity<CollectionDto> addCollection(@RequestBody CollectionDto collectionDto) {
        CollectionDto saveCollection = collectionService.addCollection(collectionDto);
        return new ResponseEntity<>(saveCollection, HttpStatus.CREATED);
    }

    // update collection
    @PutMapping("/{id}")
    public ResponseEntity<CollectionDto> updateCollection(@RequestBody CollectionDto collectionDto, @PathVariable(name = "id") Long id) {
        CollectionDto updatedCollection = collectionService.updateCollection(collectionDto, id);
        return ResponseEntity.ok(updatedCollection);
    }

    // delete collection
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCollection(@PathVariable(name = "id") Long id) {
        collectionService.deleteCollection(id);
        return ResponseEntity.ok("collection deleted successfully");
    }

    // get collection by id
    @GetMapping("/{id}")
    public ResponseEntity<CollectionDto> getCollectionById(@PathVariable(name = "id") Long id) {
        CollectionDto collectionDto = collectionService.getCollectionById(id);
        return ResponseEntity.ok(collectionDto);
    }

    // get all collection
    @GetMapping
    public List<CollectionDto> getAllCollection() {
        return collectionService.getAllCollection();
    }
}
