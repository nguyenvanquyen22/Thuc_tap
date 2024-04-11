package phuocvu.org.ecombackendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.Collection.CollectionDetail;

public interface CollectionDetailRepository extends JpaRepository<CollectionDetail, Long> {
}
