package se.hjulverkstan.Exceptions;

import org.springframework.http.HttpStatus;

public class InternalServerErrorException extends ApiException {
	private static final String INTERNAL_ERROR_CODE = "internal_error";

	public InternalServerErrorException(Throwable e) {
		super(INTERNAL_ERROR_CODE, HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), HttpStatus.INTERNAL_SERVER_ERROR.value(), e);
	}

	public InternalServerErrorException(String message, Throwable e) {
		super(INTERNAL_ERROR_CODE, message, HttpStatus.INTERNAL_SERVER_ERROR.value(), e);
	}
}
