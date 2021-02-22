package io.peppermint100.server.entity.Response.Order;

import io.peppermint100.server.entity.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.util.List;

@Data
@AllArgsConstructor
public class GetOrderByUserIdResponse {
    private HttpStatus httpStatus;
    private String message;
    private List<OrderItem> orderList;
}
