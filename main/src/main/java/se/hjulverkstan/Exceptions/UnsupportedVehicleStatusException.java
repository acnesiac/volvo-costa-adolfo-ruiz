package se.hjulverkstan.Exceptions;

import org.springframework.http.HttpStatus;

public class UnsupportedVehicleStatusException extends ApiException{
    public UnsupportedVehicleStatusException(String message) {
        super("unsupported_vehicle_status", message, HttpStatus.BAD_REQUEST.value());
    }
}
