package io.peppermint100.server.entity.Response.Item;

import io.peppermint100.server.entity.Machine;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import java.util.List;

@Data
@AllArgsConstructor
public class GetAllMachinesResponse {
    private HttpStatus httpStatus;
    private String message;
    private List<Machine> machines;
}
