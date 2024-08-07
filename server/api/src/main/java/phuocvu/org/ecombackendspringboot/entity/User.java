<<<<<<<< HEAD:server/api/src/main/java/phuocvu/org/ecombackendspringboot/model/user/User.java
package phuocvu.org.ecombackendspringboot.model.user;
========
package phuocvu.org.ecombackendspringboot.entity;
>>>>>>>> quan:server/api/src/main/java/phuocvu/org/ecombackendspringboot/entity/User.java

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
<<<<<<<< HEAD:server/api/src/main/java/phuocvu/org/ecombackendspringboot/model/User.java

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "address", nullable = false)
    private String address;
<<<<<<<< HEAD:server/api/src/main/java/phuocvu/org/ecombackendspringboot/model/user/User.java
========
>>>>>>>> phuoc:server/api/src/main/java/phuocvu/org/ecombackendspringboot/model/user/User.java

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "address", nullable = false)
    private String address;
========
>>>>>>>> quan:server/api/src/main/java/phuocvu/org/ecombackendspringboot/entity/User.java
}
