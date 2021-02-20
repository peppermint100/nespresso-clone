package io.peppermint100.server.entity.Request.CartItem;

import lombok.Data;

@Data
public class AddToCartRequest {
    private Long itemId;
    private Integer amount;
}
