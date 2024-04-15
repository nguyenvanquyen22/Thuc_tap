package phuocvu.org.ecombackendspringboot.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import phuocvu.org.ecombackendspringboot.model.user.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
