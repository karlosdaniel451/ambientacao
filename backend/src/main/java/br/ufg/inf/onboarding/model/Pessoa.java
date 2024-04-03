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

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String cpf;
}
