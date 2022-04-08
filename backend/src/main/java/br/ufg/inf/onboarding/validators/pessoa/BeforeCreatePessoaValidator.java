package br.ufg.inf.onboarding.validators.pessoa;

import br.ufg.inf.onboarding.model.Pessoa;
import br.ufg.inf.onboarding.validators.ValidationUtils;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class BeforeCreatePessoaValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return Pessoa.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

        // Validacoes comuns
        ValidationUtils.invokeValidator(new PessoaValidator(), target, errors);

        // Validacoes especificas
        ValidationUtils.rejectIfIsNotEmpty(errors);
    }
}
