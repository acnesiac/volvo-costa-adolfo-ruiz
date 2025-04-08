package se.hjulverkstan.main.model;

import jakarta.persistence.*;
import lombok.*;
import se.hjulverkstan.main.model.base.Auditable;
import se.hjulverkstan.main.model.webedit.Shop;

import java.util.List;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = true)
public class Location extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.PRIVATE)
    private Long id;
    private String address;
    private String name;
    @Enumerated(EnumType.STRING)
    private LocationType locationType;
    private String comment;

}