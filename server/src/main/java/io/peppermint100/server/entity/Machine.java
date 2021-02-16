package io.peppermint100.server.entity;

import lombok.Data;
import javax.persistence.Entity;
import java.util.ArrayList;

@Data
@Entity(name ="MACHINE_TABLE")
public class Machine extends Item {
    private ArrayList<String> colors;
}
