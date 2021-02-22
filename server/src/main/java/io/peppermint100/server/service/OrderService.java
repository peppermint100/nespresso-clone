package io.peppermint100.server.service;

import io.peppermint100.server.entity.CartItem;
import io.peppermint100.server.entity.OrderItem;
import io.peppermint100.server.entity.User;
import io.peppermint100.server.exception.Order.EmptyCartException;
import io.peppermint100.server.exception.Order.FailToGetOrderException;
import io.peppermint100.server.exception.User.UserNotExistException;
import io.peppermint100.server.repository.CartItemRepository;
import io.peppermint100.server.repository.OrderItemRepository;
import io.peppermint100.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderService {

    private OrderItemRepository orderItemRepository;
    private CartItemRepository cartItemRepository;
    private UserRepository userRepository;

    public List<OrderItem> getOrderByUserId() {

        Long userId = 1L;

        Optional<List<OrderItem>> orderList = orderItemRepository.getOrderByUserId(userId);

        if (orderList.isEmpty()){
            throw new FailToGetOrderException();
        }

        return orderList.get();
    }

    public void makeOrder() {

        Long userId = 1L;

        List<CartItem> cartItems = cartItemRepository.getCartItemsByUserId(userId);

        User user = userRepository.findById(userId).orElseThrow(UserNotExistException::new);

        if (cartItems.size() <= 0 || cartItems.isEmpty()) {
            throw new EmptyCartException();
        }

        List<OrderItem> orderItems = new ArrayList<>();

        // order_id, oc_fid는 null로 지정되어 있는데 그 부분을 또 manytoone으로 생성하려 하므로 생기는 오류 @order post
        for(CartItem item : cartItems){
            OrderItem orderItem = new OrderItem(user, item.getItem(), item.getAmount());
            orderItems.add(orderItem);
        }

        orderItemRepository.saveAll(orderItems);
        cartItemRepository.deleteAll();
    }
}
