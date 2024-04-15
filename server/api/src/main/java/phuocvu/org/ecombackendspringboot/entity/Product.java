package phuocvu.org.ecombackendspringboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "discount", nullable = false)
    private float discount;

    @Column(name = "total", nullable = false)
    private int total;

    @Column(name = "remain", nullable = false)
    private int remain;

    @Column(name = "price", nullable = false)
    private float price;

    @Column(name = "cpu", nullable = false)
    private String cpu;

    @Column(name = "ram", nullable = false)
    private String ram;

    @Column(name = "battery", nullable = false)
    private String battery;

    @Column(name = "imageUrl", nullable = false)
    private String imageUrl;

    @Column(name = "monitor", nullable = false)
    private String monitor;

    @Column(name = "disk", nullable = false)
    private String disk;

    @Column(name = "vga", nullable = false)
    private String vga;

    @Column(name = "port", nullable = false)
    private String port;

    @Column(name = "audio", nullable = false)
    private String audio;

    @Column(name = "keyboard", nullable = false)
    private String keyboard;

    @Column(name = "os", nullable = false)
    private String os;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "weight", nullable = false)
    private String weight;

    @Column(name = "bluetooth", nullable = false)
    private String bluetooth;

    @Column(name = "webcam", nullable = false)
    private String webcam;

    @Column(name = "size", nullable = false)
    private String size;

    // quan he toi category
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;
}
