package se.hjulverkstan.main.dto.vehicles;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import se.hjulverkstan.main.model.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehicleDto  {
    private Long id;

    private String regTag;
    @NotNull(message = "Vehicle type is required")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private VehicleType vehicleType;
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private VehicleStatus vehicleStatus;
    private String imageURL;
    private String comment;
    private List<Long> ticketIds;
    @NotNull(message = "LocationId is required")
    private Long locationId;
    private Boolean isCustomerOwned;


    // Meta data
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long createdBy;
    private Long updatedBy;

    public VehicleDto(Vehicle vehicle) {
        this.id = vehicle.getId();
        this.imageURL = vehicle.getImageURL();
        this.comment = vehicle.getComment();
        this.isCustomerOwned = vehicle.isCustomerOwned();
    }


}