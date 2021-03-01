package io.peppermint100.server.repository;

import io.peppermint100.server.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {


   @Query("SELECT o FROM ORDER_TABLE o WHERE user_id=" + ":userId")
   List<Order> getOrdersByUserId(@Param("userId") Long userId);
}
