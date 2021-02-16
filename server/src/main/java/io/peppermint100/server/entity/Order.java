package io.peppermint100.server.entity;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@Entity(name = "ORDER_TABLE")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Date orderDate;

    @OneToOne(
            cascade = CascadeType.ALL,
            mappedBy = "order",
            fetch = FetchType.LAZY
    )
    private Cart cart;
}
