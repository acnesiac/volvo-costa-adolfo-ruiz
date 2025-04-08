package se.hjulverkstan.Exceptions;

import org.springframework.http.HttpStatus;

public class AlreadyUsedException extends ApiException{

    public AlreadyUsedException(String message) {
        super(HttpStatus.IM_USED.name(),message, HttpStatus.IM_USED.value());
    }
}
