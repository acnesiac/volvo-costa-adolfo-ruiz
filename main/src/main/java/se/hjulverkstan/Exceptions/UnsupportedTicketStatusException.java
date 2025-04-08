package se.hjulverkstan.Exceptions;

import org.springframework.http.HttpStatus;

public class UnsupportedTicketStatusException extends ApiException {
  public UnsupportedTicketStatusException(String message) {
    super("unsupported_ticket_status", message, HttpStatus.BAD_REQUEST.value());
  }
}
