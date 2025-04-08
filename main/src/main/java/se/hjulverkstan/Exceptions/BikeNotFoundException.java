package se.hjulverkstan.Exceptions;

import org.springframework.http.HttpStatus;

public class BikeNotFoundException extends ApiException {
    public BikeNotFoundException(String message) {
        super(HttpStatus.NOT_FOUND.name(),message, HttpStatus.NOT_FOUND.value());
    }
}
