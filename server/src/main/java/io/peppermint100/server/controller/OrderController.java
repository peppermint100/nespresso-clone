package io.peppermint100.server.controller;

import io.peppermint100.server.constant.Controller;
import io.peppermint100.server.entity.OrderItem;
import io.peppermint100.server.entity.Response.BasicResponse;
import io.peppermint100.server.entity.Response.Order.GetOrderByUserIdResponse;
import io.peppermint100.server.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

    private OrderService orderService;

    // get orders by userid
    @GetMapping("")
    public ResponseEntity<GetOrderByUserIdResponse> getOrderByUserId(){
        List<OrderItem> orderList = orderService.getOrderByUserId();

        GetOrderByUserIdResponse response = new GetOrderByUserIdResponse(HttpStatus.OK, Controller.GET_ORDER_SUCCESS_MESSAGE, orderList);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // make order
    @PostMapping("")
    public ResponseEntity<BasicResponse> makeOrder(){
        orderService.makeOrder();

        BasicResponse response = new BasicResponse(HttpStatus.OK, Controller.MAKE_ORDER_SUCCESS_MESSAGE);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
