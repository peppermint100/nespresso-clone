package io.peppermint100.server.controller;

import io.peppermint100.server.exception.User.UserNotExistException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exception")
public class ExceptionHandleController {

    @GetMapping("/jwt")
    public void JwtException(){
        System.out.println("caught by exception controller");
        throw new UserNotExistException();
    }

    @PutMapping("/jwt")
    public void JwtExceptionPut(){
        System.out.println("caught by exception controller");
        throw new UserNotExistException();
    }
}
