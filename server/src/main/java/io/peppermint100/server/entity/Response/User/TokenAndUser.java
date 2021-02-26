package io.peppermint100.server.entity.Response.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TokenAndUser {
    private String token;
    private UserInfo user;
}
