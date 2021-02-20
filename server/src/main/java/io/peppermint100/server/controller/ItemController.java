package io.peppermint100.server.controller;


import io.peppermint100.server.constant.Controller;
import io.peppermint100.server.entity.Capsule;
import io.peppermint100.server.entity.Item;
import io.peppermint100.server.entity.Machine;
import io.peppermint100.server.entity.Response.Item.GetAllCapsulesResponse;
import io.peppermint100.server.entity.Response.Item.GetAllMachinesResponse;
import io.peppermint100.server.entity.Response.Item.GetItemByItemIdResponse;
import io.peppermint100.server.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/item")
public class ItemController {

    private ItemService itemService;

    // get all capsule
    @GetMapping("/capsules")
    public ResponseEntity getAllCapsules(){
        List<Capsule> capsuleList = itemService.getAllCapsules();

        GetAllCapsulesResponse response = new GetAllCapsulesResponse(HttpStatus.OK, Controller.GET_ALL_CAPSULES_SUCCESS_MESSAGE, capsuleList);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // get all machine
    @GetMapping("/machines")
    public ResponseEntity<GetAllMachinesResponse> getAllMachines(){
        List<Machine> machineList = itemService.getAllMachines();

        GetAllMachinesResponse response = new GetAllMachinesResponse(HttpStatus.OK, Controller.GET_ALL_MACHINE_SUCCESS_MESSAGE, machineList);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // get item by item id
    @GetMapping("/{itemId}")
    public ResponseEntity<GetItemByItemIdResponse> getItemByItemId(@PathVariable("itemId") Long itemId){
        Item item = itemService.getItemByItemId(itemId);

        GetItemByItemIdResponse response = new GetItemByItemIdResponse(HttpStatus.OK, Controller.GET_ITEM_BY_ITEM_ID_SUCCESS_MESSAGE, item);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
