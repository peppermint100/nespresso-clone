package io.peppermint100.server.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity(name = "ORDER_TABLE")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Date orderDate;
//
//    @OneToOne(
//            cascade = CascadeType.ALL,
//            mappedBy = "order",
//            fetch = FetchType.LAZY
//    )
//    private Cart cart;
}
