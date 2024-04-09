package br.ufg.inf.onboarding.exceptions;

public class PessoaAlreadyExistsException extends RuntimeException{
    public static final String DEFAULT_MESSAGE = "Pessoa ja existente";

    public PessoaAlreadyExistsException() {
        super(DEFAULT_MESSAGE);
    }

    public PessoaAlreadyExistsException(String message) {
        super(message);
    }

    public PessoaAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }
}
