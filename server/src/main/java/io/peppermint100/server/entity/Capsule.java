package io.peppermint100.server.entity;

import io.peppermint100.server.entity.item.CupSize;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@NoArgsConstructor
@Entity(name = "CAPSULE_TABLE")
public class Capsule extends Item{
    private Integer intensity;

    @Enumerated(value = EnumType.STRING)
    private CupSize cupSize;
    private String profile;
    private String note;
    private String origin;
}
