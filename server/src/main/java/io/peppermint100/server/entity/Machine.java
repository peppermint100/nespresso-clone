package io.peppermint100.server.entity;

import io.peppermint100.server.entity.item.MachineType;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@NoArgsConstructor
@DiscriminatorValue("machine")
@Entity(name ="MACHINE_TABLE")
public class Machine extends Item {
    @Enumerated(EnumType.STRING)
    private MachineType machineType;
}
