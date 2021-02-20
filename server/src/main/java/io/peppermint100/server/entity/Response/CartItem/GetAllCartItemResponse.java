package io.peppermint100.server.entity.Response.CartItem;

import io.peppermint100.server.entity.CartItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.util.List;

@Data
@AllArgsConstructor
public class GetAllCartItemResponse {
    private HttpStatus httpStatus;
    private String message;
    private List<CartItem> cartItems;
}
