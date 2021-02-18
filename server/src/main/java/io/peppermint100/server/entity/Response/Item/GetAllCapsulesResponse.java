package io.peppermint100.server.entity.Response.Item;

import io.peppermint100.server.entity.Capsule;
import io.peppermint100.server.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import java.util.List;

@Data
@AllArgsConstructor
public class GetAllCapsulesResponse {
    private HttpStatus httpStatus;
    private String message;
    private List<Capsule> capsules;
}
