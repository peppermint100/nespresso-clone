package io.peppermint100.server.repository;

import io.peppermint100.server.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    @Query("SELECT c FROM CART_ITEM_TABLE c WHERE user_id=" + ":userId")
    List<CartItem> getCartItemsByUserId(@Param("userId") Long userId);

    @Query("SELECT c FROM CART_ITEM_TABLE c WHERE item_id=" + ":itemId")
    Optional<CartItem> existingCartItemByItemId(@Param("itemId") Long itemId);
}
