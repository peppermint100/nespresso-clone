package io.peppermint100.server.repository;

import io.peppermint100.server.entity.Item;
import org.dom4j.tree.AbstractEntity;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

@NoRepositoryBean
public interface ItemRepository<Entity extends AbstractEntity> extends JpaRepository<Item, Long> {
}
