package se.hjulverkstan.main.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("not null")
public class Vehicle  {
    @Id
    private Long id;
    private String imageURL;
    private String comment;
    private boolean isCustomerOwned;
}