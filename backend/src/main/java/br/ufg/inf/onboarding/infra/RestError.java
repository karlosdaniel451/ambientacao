package br.ufg.inf.onboarding.infra;

import org.springframework.http.HttpStatus;

import java.util.List;

public record RestError(HttpStatus httpStatus, List<String> messages) {
}
