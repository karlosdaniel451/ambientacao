package br.ufg.inf.onboarding.builders;

public abstract class BaseBuilder<T>  {

    protected DataFaker faker = new DataFaker();
    public abstract T build();
}
