package br.ufg.inf.onboarding.controllers;

import br.ufg.inf.onboarding.dtos.PessoaCreateRequest;
import br.ufg.inf.onboarding.dtos.PessoaResponse;
import br.ufg.inf.onboarding.dtos.PessoaUpdateRequest;
import br.ufg.inf.onboarding.model.Pessoa;
import br.ufg.inf.onboarding.services.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping(value = "/pessoas")
    public Page<Pessoa> findAll(
            @RequestParam(defaultValue = "") String nome,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<Pessoa> pessoas = pessoaService.findAllByNome(
                nome,
                PageRequest.of(page, size, Sort.by("nome"))
        );
        return pessoas;
    }

    @GetMapping(value = "/search/pessoas/byCpf/{cpf}")
    public PessoaResponse findByCpf(@PathVariable String cpf) {
        return pessoaService.findByCpf(cpf);
    }

    @GetMapping(value = "/pessoas/{id}")
    public ResponseEntity<PessoaResponse> findById(@PathVariable Integer id) {
        PessoaResponse pessoaResponse = pessoaService.findById(id);

        return ResponseEntity.ok(pessoaResponse);
    }

    @PostMapping(value = "/pessoas")
    public PessoaResponse create(@RequestBody PessoaCreateRequest pessoa) {
        PessoaResponse pessoaCreatedResponse = pessoaService.create(pessoa);

        return pessoaCreatedResponse;
    }

    @PutMapping(value = "/pessoas/{id}")
    public PessoaResponse update(
            @PathVariable Integer id,
            @RequestBody PessoaUpdateRequest pessoa
    ) {
        PessoaResponse pessoaUpdatedResponse = pessoaService.update(id, pessoa);

        return pessoaUpdatedResponse;
    }

    @DeleteMapping(value = "/pessoas/{id}")
    public void delete(@PathVariable Integer id) {
        pessoaService.deleteById(id);
    }
}
