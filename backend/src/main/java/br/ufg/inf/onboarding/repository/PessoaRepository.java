package br.ufg.inf.onboarding.repository;

import br.ufg.inf.onboarding.model.Pessoa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends PagingAndSortingRepository<Pessoa, Integer> {

    Pessoa findPessoaByCpfEquals(String cpf);

    Page<Pessoa> findAllByNomeContainsIgnoreCase(String nome, Pageable p);
}
