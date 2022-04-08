package br.ufg.inf.onboarding.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="PESSOA")
public class Pessoa {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private Integer id;

    private String nome;

    private String cpf;
}
