package phuocvu.org.ecombackendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
