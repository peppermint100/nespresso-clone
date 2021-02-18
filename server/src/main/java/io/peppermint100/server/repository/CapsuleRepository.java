package io.peppermint100.server.repository;

import io.peppermint100.server.entity.Capsule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CapsuleRepository extends ItemRepository{

    @Query("select c from CAPSULE_TABLE c")
    List<Capsule> findCapsules();
}
