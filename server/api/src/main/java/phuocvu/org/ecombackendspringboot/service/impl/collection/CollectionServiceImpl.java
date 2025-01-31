package phuocvu.org.ecombackendspringboot.service.impl.collection;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import phuocvu.org.ecombackendspringboot.exception.ResourceNotFoundException;
import phuocvu.org.ecombackendspringboot.entity.Collection;
import phuocvu.org.ecombackendspringboot.payload.collection.CollectionDto;
import phuocvu.org.ecombackendspringboot.repository.collection.CollectionRepository;
import phuocvu.org.ecombackendspringboot.service.CollectionService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CollectionServiceImpl implements CollectionService {
    private final CollectionRepository collectionRepository;
    private final ModelMapper mapper;

    public CollectionServiceImpl(CollectionRepository collectionRepository, ModelMapper mapper) {
        this.collectionRepository = collectionRepository;
        this.mapper = mapper;
    }

    @Override
    public CollectionDto addCollection(CollectionDto collectionDto) {
        Collection collection = mapper.map(collectionDto, Collection.class);
        Collection saveCollection = collectionRepository.save(collection);
        return mapper.map(saveCollection, CollectionDto.class);
    }

    @Override
    public CollectionDto updateCollection(CollectionDto collectionDto, Long collectionId) {
        Collection existCollection = collectionRepository.findById(collectionId)
                .orElseThrow(()-> new ResourceNotFoundException("collection","id",collectionId));
        mapper.map(collectionDto,existCollection);
        Collection saveColection = collectionRepository.save(existCollection);
        return mapper.map(saveColection, CollectionDto.class);
    }

    @Override
    public void deleteCollection(Long collectionId) {
        Collection existCollection = collectionRepository.findById(collectionId)
                .orElseThrow(()-> new ResourceNotFoundException("collection","id",collectionId));
        collectionRepository.delete(existCollection);
    }

    @Override
    public CollectionDto getCollectionById(Long collectionId) {
        Collection collection = collectionRepository.findById(collectionId)
                .orElseThrow(()-> new ResourceNotFoundException("collection","id",collectionId));
        return mapper.map(collection,CollectionDto.class);
    }

    @Override
    public List<CollectionDto> getAllCollection() {
        List<Collection> collections = collectionRepository.findAll();
        return collections.stream().map((collection) -> mapper.map(collection, CollectionDto.class)).collect(Collectors.toList());
    }
}
