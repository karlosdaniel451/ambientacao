package br.ufg.inf.onboarding.builders;

import br.ufg.inf.onboarding.model.Pessoa;

public class PessoaBuilder extends BaseBuilder<Pessoa> {
    private Pessoa pessoa;

    private PessoaBuilder(){
        this.pessoa = new Pessoa();
    }

    public PessoaBuilder comId() {
        this.pessoa.setId(this.faker.number().numberBetween(1, 1000000));
        return this;
    }

    public PessoaBuilder comCpf() {
        this.pessoa.setCpf(this.faker.cpf());
        return this;
    }

    public PessoaBuilder comNome(){
        this.pessoa.setNome(this.faker.name().fullName());
        return  this;
    }

    @Override
    public Pessoa build() {
        return this.pessoa;
    }

    public static PessoaBuilder init() {
        return new PessoaBuilder();
    }
}
