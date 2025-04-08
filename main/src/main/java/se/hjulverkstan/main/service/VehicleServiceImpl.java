package se.hjulverkstan.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import se.hjulverkstan.main.dto.vehicles.*;
import se.hjulverkstan.main.dto.responses.*;
import se.hjulverkstan.main.model.*;
import se.hjulverkstan.main.repository.VehicleRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    private final VehicleRepository vehicleRepository;
    public static String ELEMENT_VEHICLE = "Vehicle";
    public static String ELEMENT_LOCATION = "Location";

    @Autowired
    public VehicleServiceImpl(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }



    @Override
    public GetAllVehicleDto getAllVehicles() {

        List<Vehicle> listOfVehicles = vehicleRepository.findAll();

        List<VehicleDto> responseList = new ArrayList<>();

        for (Vehicle vehicle : listOfVehicles) {
            responseList.add(convertToDto(vehicle));
        }
        return new GetAllVehicleDto(responseList);
    }


    //Private methods below
    private VehicleDto convertToDto(Vehicle vehicle) {

            return new VehicleDto(vehicle);

    }





}