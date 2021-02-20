package io.peppermint100.server.repository;

import io.peppermint100.server.entity.Item;
import org.dom4j.tree.AbstractEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository<Entity extends AbstractEntity> extends JpaRepository<Item, Long> {
}
