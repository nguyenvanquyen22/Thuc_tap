package phuocvu.org.ecombackendspringboot.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
