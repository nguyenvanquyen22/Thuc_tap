package phuocvu.org.ecombackendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.CustomerInfo;

public interface CustomerInfoRepository extends JpaRepository<CustomerInfo, Long> {
}
