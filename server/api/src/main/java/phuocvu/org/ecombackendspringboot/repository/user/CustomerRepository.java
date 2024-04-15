package phuocvu.org.ecombackendspringboot.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
