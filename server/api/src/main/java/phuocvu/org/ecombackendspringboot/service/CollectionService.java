package phuocvu.org.ecombackendspringboot.service;

import phuocvu.org.ecombackendspringboot.payload.collection.CollectionDto;

import java.util.List;

public interface CollectionService {
    CollectionDto addCollection(CollectionDto collectionDto);

    CollectionDto updateCollection(CollectionDto collectionDto, Long id);

    void deleteCollection(Long id);

    CollectionDto getCollectionById(Long id);

    List<CollectionDto> getAllCollection();
}
