package io.peppermint100.server.entity;

import lombok.Builder;
import lombok.Data;
import javax.persistence.*;

@Data
@Builder
@Entity(name = "USER_TABLE")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String address;

    @OneToOne(
            cascade = CascadeType.ALL,
            mappedBy = "user",
            fetch = FetchType.LAZY
    )
    private Cart cart;
}
