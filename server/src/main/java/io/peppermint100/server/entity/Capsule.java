package io.peppermint100.server.entity;

import io.peppermint100.server.entity.item.CupSize;
import lombok.Data;
import javax.persistence.Entity;

@Data
@Entity(name = "CAPSULE_TABLE")
public class Capsule extends Item{
    private Integer intensity;
    private CupSize cupSize;
    private String profile;
    private String note;
    private String origin;
}
