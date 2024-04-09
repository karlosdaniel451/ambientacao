package br.ufg.inf.onboarding.services;

import br.ufg.inf.onboarding.dtos.PessoaCreateRequest;
import br.ufg.inf.onboarding.dtos.PessoaResponse;
import br.ufg.inf.onboarding.dtos.PessoaUpdateRequest;
import br.ufg.inf.onboarding.exceptions.PessoaAlreadyExistsException;
import br.ufg.inf.onboarding.model.Pessoa;
import br.ufg.inf.onboarding.repository.PessoaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Page<Pessoa> findAll(Pageable pageable) {
        return pessoaRepository.findAll(pageable);
    }

    public Page<Pessoa> findAllByNome(String nome, Pageable pageable) {
        return pessoaRepository.findAllByNomeContainsIgnoreCase(nome, pageable);
    }

    public Optional<PessoaResponse> findById(Integer id) {
        Optional<PessoaResponse> pessoaResponseOptional = Optional.empty();
        Optional<Pessoa> pessoaModelOptional = pessoaRepository.findById(id);
        if (pessoaModelOptional.isEmpty()) {
            return pessoaResponseOptional;
        }

        Pessoa pessoaModel = pessoaModelOptional.get();
        pessoaResponseOptional = Optional.of(new PessoaResponse(
                pessoaModel.getId(),
                pessoaModel.getNome(),
                pessoaModel.getCpf()
        ));

        return pessoaResponseOptional;
    }

    public PessoaResponse create(PessoaCreateRequest pessoa) {
        Pessoa pessoaModel = new Pessoa();
        BeanUtils.copyProperties(pessoa, pessoaModel);
        pessoaModel.setCpf(
                pessoaModel.getCpf()
                        .replace(".", "")
                        .replace("-", "")
        );

        if (pessoaRepository.findPessoaByCpfEquals(pessoaModel.getCpf()) != null) {
            throw new PessoaAlreadyExistsException("Ja existe uma pessoa com o CPF " +pessoaModel.getCpf());
        }

        Pessoa pessoaModelUpdated = pessoaRepository.save(pessoaModel);

        return new PessoaResponse(
                pessoaModelUpdated.getId(),
                pessoaModelUpdated.getNome(),
                pessoaModelUpdated.getCpf()
        );
    }

    public PessoaResponse update(Integer id, PessoaUpdateRequest pessoa) {
//        if (pessoaRepository.existsById(id) == false) {
//
//        }

        Pessoa pessoaModel = new Pessoa();
        BeanUtils.copyProperties(pessoa, pessoaModel);

        pessoaModel.setCpf(
                pessoaModel.getCpf()
                        .replace(".", "")
                        .replace("-", "")
        );

        Pessoa pessoaFoundByCpf = pessoaRepository.findPessoaByCpfEquals(pessoaModel.getCpf());
        if (pessoaFoundByCpf != null && !pessoaFoundByCpf.getId().equals(id)) {
            throw new PessoaAlreadyExistsException("Ja existe uma pessoa com o CPF " + pessoaModel.getCpf());
        }

        pessoaModel.setId(id);

        Pessoa pessoaModelUpdated = pessoaRepository.save(pessoaModel);

        return new PessoaResponse(
                pessoaModelUpdated.getId(),
                pessoaModelUpdated.getNome(),
                pessoaModelUpdated.getCpf()
        );
    }

    public void deleteById(Integer id) {
//        if (pessoaRepository.existsById(id) = false) {
//
//            throw new
//        }
        pessoaRepository.deleteById(id);
    }
}
