package io.peppermint100.server.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity(name = "ITEM_TABLE")
@DiscriminatorColumn(name = "item_type")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itemId;

    private String itemName;
    private Integer price;
    private String description;
    private String itemImage;
    private String itemDetailImage;

//    @OneToMany(
//            mappedBy = "item",
//            cascade = CascadeType.ALL,
//            orphanRemoval = true
//    )
//    private List<CartItem> cartItem = new ArrayList<>();
}
