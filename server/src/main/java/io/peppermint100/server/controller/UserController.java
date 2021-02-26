package io.peppermint100.server.controller;

import io.peppermint100.server.constant.Controller;
import io.peppermint100.server.constant.Util;
import io.peppermint100.server.entity.Request.User.LoginRequest;
import io.peppermint100.server.entity.Request.User.SignUpRequest;
import io.peppermint100.server.entity.Request.User.UpdateAddressRequest;
import io.peppermint100.server.entity.Request.User.UpdateUserInfoRequest;
import io.peppermint100.server.entity.Response.BasicResponse;
import io.peppermint100.server.entity.Response.TokenContainingResponse;
import io.peppermint100.server.entity.Response.User.MeResponse;
import io.peppermint100.server.entity.Response.User.TokenAndUser;
import io.peppermint100.server.entity.Response.User.UserInfo;
import io.peppermint100.server.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Basic;
import javax.persistence.Column;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<TokenContainingResponse> login(@RequestBody LoginRequest loginRequest) throws Exception {
        TokenAndUser tokenAndUser = userService.loginAndGenerateToken(loginRequest);

        TokenContainingResponse response = new TokenContainingResponse(HttpStatus.OK, Controller.LOG_IN_SUCCESS_MESSAGE, tokenAndUser.getToken(), tokenAndUser.getUser());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<BasicResponse> signUp(@RequestBody SignUpRequest signUpRequest) {
        userService.signUp(signUpRequest);

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.SIGN_UP_SUCCESS_MESSAGE);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/me")
    public ResponseEntity<MeResponse> me(){
        UserInfo user = userService.me();
        MeResponse response = new MeResponse(HttpStatus.OK, Controller.LOG_IN_SUCCESS_MESSAGE, user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/{userId}/update-info")
    public ResponseEntity<BasicResponse> updateUserInfo(
            @PathVariable("userId") Long userId,
            @RequestBody UpdateUserInfoRequest updateUserInfoRequest
            ){

        userService.updateUserInfo(userId, updateUserInfoRequest);

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.UPDATE_USER_INFO_SUCCESS_MESSAGE);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/update-address")
    public ResponseEntity<BasicResponse> updateAddress(
            @RequestBody UpdateAddressRequest updateAddressRequest
    ){

        userService.updateAddress(updateAddressRequest);

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.UPDATE_ADDRESS_SUCCESS_MESSAGE);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
