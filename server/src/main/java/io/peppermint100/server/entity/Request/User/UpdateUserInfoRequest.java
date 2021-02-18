package io.peppermint100.server.entity.Request.User;

import lombok.Data;

@Data
public class UpdateUserInfoRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String confirmEmail;
}
