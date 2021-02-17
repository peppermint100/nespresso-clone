package io.peppermint100.server;

import io.peppermint100.server.constant.CapsuleItem;
import io.peppermint100.server.constant.MachineItem;
import io.peppermint100.server.entity.Capsule;
import io.peppermint100.server.entity.Machine;
import io.peppermint100.server.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class ServerApplication {

	@Autowired
	private ItemRepository<Capsule> capsuleItemRepository;

	@Autowired
	private ItemRepository<Machine> machineItemRepository;

	@PostConstruct
	public void initializeItem(){
		Capsule indonesiaCapsule = new Capsule();
		indonesiaCapsule.setItemName(CapsuleItem.INDIA_ITEM_NAME);
		indonesiaCapsule.setPrice(CapsuleItem.INDIA_PRICE);
		indonesiaCapsule.setDescription(CapsuleItem.INDIA_DESCRIPTION);
		indonesiaCapsule.setItemImage(CapsuleItem.INDIA_ITEM_IMAGE);
		indonesiaCapsule.setItemDetailImage(CapsuleItem.INDIA_ITEM_DETAIL_IMAGE);
		indonesiaCapsule.setIntensity(CapsuleItem.INDIA_INTENSITY);
		indonesiaCapsule.setCupSize(CapsuleItem.INDIA_CUP_SIZE);
		indonesiaCapsule.setProfile(CapsuleItem.INDIA_PROFILE);
		indonesiaCapsule.setNote(CapsuleItem.INDIA_NOTE);
		indonesiaCapsule.setOrigin(CapsuleItem.INDIA_ORIGIN);

		Capsule ristrettoCapsule = new Capsule();
		ristrettoCapsule.setItemName(CapsuleItem.RISTRETTO_ITEM_NAME);
		ristrettoCapsule.setPrice(CapsuleItem.RISTRETTO_PRICE);
		ristrettoCapsule.setDescription(CapsuleItem.RISTRETTO_DESCRIPTION);
		ristrettoCapsule.setItemImage(CapsuleItem.RISTRETTO_ITEM_IMAGE);
		ristrettoCapsule.setItemDetailImage(CapsuleItem.RISTRETTO_ITEM_DETAIL_IMAGE);
		ristrettoCapsule.setIntensity(CapsuleItem.RISTRETTO_INTENSITY);
		ristrettoCapsule.setCupSize(CapsuleItem.RISTRETTO_CUP_SIZE);
		ristrettoCapsule.setProfile(CapsuleItem.RISTRETTO_PROFILE);
		ristrettoCapsule.setNote(CapsuleItem.RISTRETTO_NOTE);
		ristrettoCapsule.setOrigin(CapsuleItem.RISTRETTO_ORIGIN);

		Capsule romaCapsule = new Capsule();
		romaCapsule.setItemName(CapsuleItem.ROMA_ITEM_NAME);
		romaCapsule.setPrice(CapsuleItem.ROMA_PRICE);
		romaCapsule.setDescription(CapsuleItem.ROMA_DESCRIPTION);
		romaCapsule.setItemImage(CapsuleItem.ROMA_ITEM_IMAGE);
		romaCapsule.setItemDetailImage(CapsuleItem.ROMA_ITEM_DETAIL_IMAGE);
		romaCapsule.setIntensity(CapsuleItem.ROMA_INTENSITY);
		romaCapsule.setCupSize(CapsuleItem.ROMA_CUP_SIZE);
		romaCapsule.setProfile(CapsuleItem.ROMA_PROFILE);
		romaCapsule.setNote(CapsuleItem.ROMA_NOTE);
		romaCapsule.setOrigin(CapsuleItem.ROMA_ORIGIN);

		Capsule indiaCapsule = new Capsule();
		indiaCapsule.setItemName(CapsuleItem.INDIA_ITEM_NAME);
		indiaCapsule.setPrice(CapsuleItem.INDIA_PRICE);
		indiaCapsule.setDescription(CapsuleItem.INDIA_DESCRIPTION);
		indiaCapsule.setItemImage(CapsuleItem.INDIA_ITEM_IMAGE);
		indiaCapsule.setItemDetailImage(CapsuleItem.INDIA_ITEM_DETAIL_IMAGE);
		indiaCapsule.setIntensity(CapsuleItem.INDIA_INTENSITY);
		indiaCapsule.setCupSize(CapsuleItem.INDIA_CUP_SIZE);
		indiaCapsule.setProfile(CapsuleItem.INDIA_PROFILE);
		indiaCapsule.setNote(CapsuleItem.INDIA_NOTE);
		indiaCapsule.setOrigin(CapsuleItem.INDIA_ORIGIN);

		Capsule naplesCapsule = new Capsule();
		naplesCapsule.setItemName(CapsuleItem.NAPLES_ITEM_NAME);
		naplesCapsule.setPrice(CapsuleItem.NAPLES_PRICE);
		naplesCapsule.setDescription(CapsuleItem.NAPLES_DESCRIPTION);
		naplesCapsule.setItemImage(CapsuleItem.NAPLES_ITEM_IMAGE);
		naplesCapsule.setItemDetailImage(CapsuleItem.NAPLES_ITEM_DETAIL_IMAGE);
		naplesCapsule.setIntensity(CapsuleItem.NAPLES_INTENSITY);
		naplesCapsule.setCupSize(CapsuleItem.NAPLES_CUP_SIZE);
		naplesCapsule.setProfile(CapsuleItem.NAPLES_PROFILE);
		naplesCapsule.setNote(CapsuleItem.NAPLES_NOTE);
		naplesCapsule.setOrigin(CapsuleItem.NAPLES_ORIGIN);

		Machine essenzaMiniMachine = new Machine();
		essenzaMiniMachine.setItemName(MachineItem.ESSENZA_MINI_ITEM_NAME);
		essenzaMiniMachine.setPrice(MachineItem.ESSENZA_MINI_PRICE);
		essenzaMiniMachine.setDescription(MachineItem.ESSENZA_MINI_DESCRIPTION);
		essenzaMiniMachine.setItemImage(MachineItem.ESSENZA_MINI_ITEM_IMAGE);
		essenzaMiniMachine.setItemDetailImage(MachineItem.ESSENZA_MINI_ITEM_DETAIL_IMAGE);
		essenzaMiniMachine.setMachineType(MachineItem.ESSENZA_MINI_TYPE);

		Machine pixieMachine = new Machine();
		pixieMachine.setItemName(MachineItem.PIXIE_ITEM_NAME);
		pixieMachine.setPrice(MachineItem.PIXIE_PRICE);
		pixieMachine.setDescription(MachineItem.PIXIE_DESCRIPTION);
		pixieMachine.setItemImage(MachineItem.PIXIE_ITEM_IMAGE);
		pixieMachine.setItemDetailImage(MachineItem.PIXIE_ITEM_DETAIL_IMAGE);
		pixieMachine.setMachineType(MachineItem.PIXIE__TYPE);

		Machine citizMachine = new Machine();
		citizMachine.setItemName(MachineItem.CITIZ_ITEM_NAME);
		citizMachine.setPrice(MachineItem.CITIZ_PRICE);
		citizMachine.setDescription(MachineItem.CITIZ_DESCRIPTION);
		citizMachine.setItemImage(MachineItem.CITIZ_ITEM_IMAGE);
		citizMachine.setItemDetailImage(MachineItem.CITIZ_ITEM_DETAIL_IMAGE);
		citizMachine.setMachineType(MachineItem.CITIZ_TYPE);

		Machine vertuoPlusMachine = new Machine();
		vertuoPlusMachine.setItemName(MachineItem.VERTUO_PLUS_ITEM_NAME);
		vertuoPlusMachine.setPrice(MachineItem.VERTUO_PLUS_PRICE);
		vertuoPlusMachine.setDescription(MachineItem.VERTUO_PLUS_DESCRIPTION);
		vertuoPlusMachine.setItemImage(MachineItem.VERTUO_PLUS_ITEM_IMAGE);
		vertuoPlusMachine.setItemDetailImage(MachineItem.VERTUO_PLUS_ITEM_DETAIL_IMAGE);
		vertuoPlusMachine.setMachineType(MachineItem.VERTUO_PLUS_TYPE);

		List<Capsule> capsuleList = Stream.of(
				indiaCapsule, indonesiaCapsule, romaCapsule, ristrettoCapsule, naplesCapsule
		).collect(Collectors.toList());

		List<Machine> machineList = Stream.of(
				essenzaMiniMachine, pixieMachine, citizMachine, vertuoPlusMachine
		).collect(Collectors.toList());

		capsuleItemRepository.saveAll(capsuleList);
		machineItemRepository.saveAll(machineList);
	}

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
}
