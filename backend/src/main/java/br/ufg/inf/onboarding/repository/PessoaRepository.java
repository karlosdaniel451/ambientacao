package br.ufg.inf.onboarding.repository;

import br.ufg.inf.onboarding.model.Pessoa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(path = "pessoa", collectionResourceRel = "pessoas")
@Description("Manutenção de pessoas")
public interface PessoaRepository extends PagingAndSortingRepository<Pessoa,Integer> {

    @RestResource(path = "byCpf", rel = "searchByCpf")
    @Description("Retorna a pessoa com o CPF fornecido")
    Pessoa findPessoaByCpfEquals(String cpf);

    @RestResource(path = "byNome", rel="searchByNome")
    @Description("Retorna as pessoas cujo nome contêm a string passada ignorando caso")
    Page findAllByNomeContainsIgnoreCase(String nome, Pageable p);
}
