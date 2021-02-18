package io.peppermint100.server.repository;

import io.peppermint100.server.entity.Machine;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MachineRepository extends ItemRepository{

    @Query("select m from MACHINE_TABLE m")
    List<Machine> findMachines();
}
