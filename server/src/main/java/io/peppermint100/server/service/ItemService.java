package io.peppermint100.server.service;

import io.peppermint100.server.entity.Capsule;
import io.peppermint100.server.entity.Item;
import io.peppermint100.server.entity.Machine;
import io.peppermint100.server.exception.Item.FailToGetItemException;
import io.peppermint100.server.repository.CapsuleRepository;
import io.peppermint100.server.repository.ItemRepository;
import io.peppermint100.server.repository.MachineRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ItemService {

    private ItemRepository itemRepository;
    private CapsuleRepository capsuleRepository;
    private MachineRepository machineRepository;

    public List<Capsule> getAllCapsules() {
        List<Capsule> capsuleList = capsuleRepository.findCapsules();
        System.out.println(capsuleList.toString());

        return capsuleList;
    }

    public List<Machine> getAllMachines() {
        List<Machine> machineList = machineRepository.findMachines();

        return machineList;
    }

    public Item getItemByItemId(Long itemId) {
            Optional<Item> item = itemRepository.findById(itemId);

            if(item.isEmpty()){
                throw new FailToGetItemException();
            }

            return item.get();
    }
}
