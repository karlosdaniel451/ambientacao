package br.ufg.inf.onboarding.repository;

import br.ufg.inf.onboarding.model.Pessoa;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "pessoa")
public interface PessoaRepository extends PagingAndSortingRepository<Pessoa,Integer> {

    @RestResource(path = "cpf")
    Pessoa findPessoaByCpfEquals(String cpf);
}
