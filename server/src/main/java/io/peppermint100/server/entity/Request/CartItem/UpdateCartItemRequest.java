package io.peppermint100.server.entity.Request.CartItem;

import lombok.Data;

@Data
public class UpdateCartItemRequest {
    private Integer amount;
    private Long cartItemId;
}
