package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String categoryName;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "des", nullable = false)
    private String des;
}
