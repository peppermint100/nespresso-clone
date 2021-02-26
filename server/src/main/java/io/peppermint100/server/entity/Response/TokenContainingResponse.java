package io.peppermint100.server.entity.Response;

import io.peppermint100.server.entity.Response.User.UserInfo;
import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TokenContainingResponse {
    private HttpStatus httpStatus;
    private String message;
    private String token;
    private UserInfo user;
}
