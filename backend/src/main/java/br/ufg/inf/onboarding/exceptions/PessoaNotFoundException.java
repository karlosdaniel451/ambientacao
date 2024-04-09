package br.ufg.inf.onboarding.exceptions;

public class PessoaNotFoundException extends RuntimeException{
    public static final String DEFAULT_MESSAGE = "Pessoa nao encontrada";

    public PessoaNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public PessoaNotFoundException(String message) {
        super(message);
    }

    public PessoaNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}