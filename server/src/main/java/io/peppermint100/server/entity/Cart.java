package io.peppermint100.server.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity(name = "CART_TABLE")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    @OneToOne(
            fetch = FetchType.LAZY,
            optional = false // must have at least one cart
    )
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne(
            fetch = FetchType.LAZY
    )
    @JoinColumn(name = "order_id")
    private Order order;

    @OneToMany(
            cascade = CascadeType.ALL,
            mappedBy = "cart",
            fetch = FetchType.LAZY
    )
    private List<CartItem> cartItem = new ArrayList<>();

    private Integer totalPrice;

    @PostLoad()
    public void setTotal(){
        final Integer[] total = {0};
        this.cartItem.stream().forEach(cartItem -> {
            Integer price = cartItem.getItem().getPrice();
            Integer amount = cartItem.getAmount();

            total[0] += price * amount;
        });

        this.setTotalPrice(total[0]);
    }
}
