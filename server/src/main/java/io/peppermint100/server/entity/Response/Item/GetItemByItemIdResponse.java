package io.peppermint100.server.entity.Response.Item;

import io.peppermint100.server.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class GetItemByItemIdResponse {
    private HttpStatus httpStatus;
    private String message;
    private Item item;
}
