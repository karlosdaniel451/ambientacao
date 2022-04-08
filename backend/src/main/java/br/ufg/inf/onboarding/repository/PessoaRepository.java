package br.ufg.inf.onboarding.repository;

import br.ufg.inf.onboarding.model.Pessoa;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.PathVariable;

@RepositoryRestResource(path = "pessoa", collectionResourceRel = "pessoas")
@Description("Manutenção de pessoas")
public interface PessoaRepository extends PagingAndSortingRepository<Pessoa,Integer> {

    @RestResource(path = "byCpf", rel = "searchByCpf")
    @Description("Retorna a pessoa com o CPF fornecido")
    Pessoa findPessoaByCpfEquals(String cpf);
}
