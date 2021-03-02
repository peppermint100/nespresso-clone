package io.peppermint100.server.service;

import io.peppermint100.server.entity.CartItem;
import io.peppermint100.server.entity.CustomUserDetails;
import io.peppermint100.server.entity.Item;
import io.peppermint100.server.entity.Request.CartItem.AddToCartRequest;
import io.peppermint100.server.entity.Request.CartItem.UpdateCartItemRequest;
import io.peppermint100.server.entity.User;
import io.peppermint100.server.exception.EmptyValueExistException;
import io.peppermint100.server.exception.Item.ItemNotExistException;
import io.peppermint100.server.exception.UnexceptableValueException;
import io.peppermint100.server.exception.User.UserNotExistException;
import io.peppermint100.server.repository.CartItemRepository;
import io.peppermint100.server.repository.ItemRepository;
import io.peppermint100.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CartItemService {

    private UserRepository userRepository;
    private CartItemRepository cartItemRepository;
    private ItemRepository itemRepository;

    public void addToCart(AddToCartRequest addToCartRequest){
        // authentication to get user id

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        Long userId = userDetails.getUserId();

        Long itemId = addToCartRequest.getItemId();
        Integer amount = addToCartRequest.getAmount();

        if (amount <= 0){
            throw new UnexceptableValueException();
        }

        // find user
        User user = userRepository.findById(userId).orElseThrow(UserNotExistException::new);

        Optional<Item> item = itemRepository.findById(itemId);
        if(item.isEmpty()){
            throw new ItemNotExistException();
        }

        // if cartItem already have item
        Optional<CartItem> cartItemMaybe = cartItemRepository.existingCartItemByItemId(itemId);

        if(cartItemMaybe.isPresent()){
            CartItem cartItem = cartItemMaybe.get();

            Integer prevAmount = cartItem.getAmount();

            cartItem.setAmount(prevAmount + amount);

            cartItemRepository.save(cartItem);
        }else{
            // create cart item
            CartItem newCartItem = new CartItem(user, amount, item.get());

            cartItemRepository.save(newCartItem);
        }
    }

    public List<CartItem> getAllCartItemsByUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        Long userId = userDetails.getUserId();


        List<CartItem> cartItems = cartItemRepository.getCartItemsByUserId(userId);

        return cartItems;
    }

    public void deleteCartItem(Long itemId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        Long userId = userDetails.getUserId();

        // if cartItem already have item
        Optional<CartItem> cartItemMaybe = cartItemRepository.existingCartItemByItemId(itemId);

        if(!cartItemMaybe.isPresent()){
            throw new UnexceptableValueException();
        }

        cartItemRepository.delete(cartItemMaybe.get());
    }

    public void updateCartItem(UpdateCartItemRequest updateCartItemRequest) {

        Long cartItemId = updateCartItemRequest.getCartItemId();
        Integer amount = updateCartItemRequest.getAmount();

        if (amount <= 0){
            throw new UnexceptableValueException();
        }

        // if cartItem already have item
        Optional<CartItem> cartItemMaybe = cartItemRepository.findById(cartItemId);

        if(cartItemMaybe.isEmpty()){
            throw new ItemNotExistException();
        }

        CartItem cartItem = cartItemMaybe.get();

        cartItem.setAmount(amount);

        cartItemRepository.save(cartItem);
    }
}
