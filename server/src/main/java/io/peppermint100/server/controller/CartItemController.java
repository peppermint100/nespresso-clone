package io.peppermint100.server.controller;

import io.peppermint100.server.constant.Controller;
import io.peppermint100.server.entity.CartItem;
import io.peppermint100.server.entity.Request.CartItem.AddToCartRequest;
import io.peppermint100.server.entity.Request.CartItem.UpdateCartItemRequest;
import io.peppermint100.server.entity.Response.BasicResponse;
import io.peppermint100.server.entity.Response.CartItem.GetAllCartItemResponse;
import io.peppermint100.server.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@AllArgsConstructor
public class CartItemController {

    private CartItemService cartItemService;

    @GetMapping("")
    public ResponseEntity<GetAllCartItemResponse> getAllCart(){

       List<CartItem> cartItems = cartItemService.getAllCartItemsByUserId();

       GetAllCartItemResponse response = new GetAllCartItemResponse(HttpStatus.OK, Controller.GET_CART_SUCCESS_MESSAGE, cartItems);

       return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<BasicResponse> addToCart(@RequestBody AddToCartRequest addToCartRequest){
        cartItemService.addToCart(addToCartRequest);

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.UPDATE_CART_SUCCESS_MESSAGE);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<BasicResponse> deleteCartItem(@PathVariable("itemId") Long itemId){
        cartItemService.deleteCartItem(itemId);

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.UPDATE_CART_SUCCESS_MESSAGE);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<BasicResponse> updateCartItem(@RequestBody UpdateCartItemRequest updateCartItemRequest){
        cartItemService.updateCartItem(updateCartItemRequest);

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.UPDATE_CART_SUCCESS_MESSAGE);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
