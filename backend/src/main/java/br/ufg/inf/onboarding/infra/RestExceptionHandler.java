package br.ufg.inf.onboarding.infra;

import br.ufg.inf.onboarding.exceptions.PessoaAlreadyExistsException;
import br.ufg.inf.onboarding.exceptions.PessoaNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;
import java.util.Map;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(PessoaAlreadyExistsException.class)
    private ResponseEntity<Map<String, List<String>>> cpfAlreadyExistsExceptionHandler(PessoaAlreadyExistsException e) {
        RestError restError = new RestError(
                HttpStatus.NOT_FOUND,
                List.of(e.getMessage())
        );

        return ResponseEntity
                .status(restError.httpStatus())
                .body(Map.of(
                        "errors", restError.messages()
                ));
    }

    @ExceptionHandler(PessoaNotFoundException.class)
    private ResponseEntity<Map<String, List<String>>> pessoaNotFoundExceptionHandler(PessoaNotFoundException e) {
        RestError restError = new RestError(
                HttpStatus.NOT_FOUND,
                List.of(e.getMessage())
        );

        return ResponseEntity
                .status(restError.httpStatus())
                .body(Map.of(
                        "errors", restError.messages()
                ));
    }
}
