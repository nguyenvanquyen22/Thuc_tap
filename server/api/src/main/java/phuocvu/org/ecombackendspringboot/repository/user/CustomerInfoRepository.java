package phuocvu.org.ecombackendspringboot.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.user.CustomerInfo;

public interface CustomerInfoRepository extends JpaRepository<CustomerInfo, Long> {
}
