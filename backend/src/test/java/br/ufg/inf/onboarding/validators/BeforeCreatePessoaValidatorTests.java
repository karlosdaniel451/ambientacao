package br.ufg.inf.onboarding.validators;

import br.ufg.inf.onboarding.builders.PessoaBuilder;
import br.ufg.inf.onboarding.model.Pessoa;
import br.ufg.inf.onboarding.validators.pessoa.BeforeCreatePessoaValidator;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;

@SpringBootTest
public class BeforeCreatePessoaValidatorTests {
    @Autowired
    private BeforeCreatePessoaValidator beforeCreatePessoaValidator;

    @Test
    public void testCriarPessoaCPFNomeNaoInformado(){
        Pessoa pessoa = PessoaBuilder.init().build();

        Errors errors = new BeanPropertyBindingResult(pessoa, "pessoa" );
        this.beforeCreatePessoaValidator.validate(pessoa,errors);

        Assertions.assertEquals( 2, errors.getFieldErrorCount("cpf"));
        Assertions.assertEquals( 2, errors.getFieldErrorCount("nome"));
    }

    @Test
    public void testCriarPessoaIdInformado(){
        Pessoa pessoa = PessoaBuilder.init().comId().build();

        Errors errors = new BeanPropertyBindingResult(pessoa, "pessoa" );
        this.beforeCreatePessoaValidator.validate(pessoa,errors);

        Assertions.assertEquals( 1, errors.getFieldErrorCount("id"));
        Assertions.assertEquals( "validator.error.id.not-empty", errors.getFieldError("id").getCode());
    }

    @Test
    public void testCriarPessoaOk(){
        Pessoa pessoa = PessoaBuilder.init().comCpf().comNome().build();
        Errors errors = new BeanPropertyBindingResult(pessoa, "pessoa" );

        this.beforeCreatePessoaValidator.validate(pessoa,errors);

        Assertions.assertEquals( 0, errors.getErrorCount());
    }
}
