package phuocvu.org.ecombackendspringboot.repository.collection;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.Collection.CollectionItem;

public interface CollectionDetailRepository extends JpaRepository<CollectionItem, Long> {
}
