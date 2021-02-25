package io.peppermint100.server.constant;

import org.springframework.beans.factory.annotation.Value;

public class Util {
    public static final String AUTHORIZATION = "Authorization";
    public static final String BEARER = "Bearer ";

    @Value("${util.client}")
    public String CLIENT;
}
