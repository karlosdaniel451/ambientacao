# Critérios de aceitação de Pull Requests

## 1 - Configuração de ambiente

 - Não escrever valores de informações sensíveis em arquivos de configuração (ex.: application.properties). No lugar de seus valores, colocar uma breve descrição.
 - Fornecer valores sensíveis em tempo de execução (ex.: argumento de execução, variáveis de ambiente etc)
 - Considerar sensíveis os seguintes dados: 
   - usuários
   - senhas
   - url de serviços

<span>Exemplo:

>\# Configure Mysql datasource</br>
spring.datasource.username=usuário de conexão ao banco de dados</br>
spring datasource.password=senha do usuário</br>
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver</br>
spring.datasource.url=jdbc:mariadb://\<host\>:\<porta\>/\<banco\></br>
spring.jpa.hibernate.ddl-auto=none</span>

</br>

## 2 - Standards para código fonte

### 2.1 - Java

#### 2.1.1 - Comentários
##### Copyright
Declarar o trecho de Copyright, exatamente como descrito abaixo, no início de cada classe. </br>
> /*</br>
  Projeto \<nome-do-projeto\></br>
  Copyright (c) \<ano\></br>
  Fábrica de Software - Instituto de Informática - UFG</br>
 */

Exemplo:
> /*</br>
  Projeto TCEduca</br>
  Copyright (c) 2021</br>
  Fábrica de Software - Instituto de Informática - UFG</br>
 */

##### Classe
Declarar no comentário a responsabilidade da classe, com exceção das classes dos tipos documentados abaixo:
 </br>

- Repository - Classes de acesso aos dados
- Controller - Classes de declaração da api
- Model - Classes que representam entidades de banco


> /* </br>
> \* Guardar as regras de negócio para cadastro de novos colaboradores, assim como seu desligamento. </br>
> */ </br>
> public class GestorColaborador {...}

##### Método
Equipe decide se método precisa ser comentado. </br>

##### Package

- Não comentar o package dentro da classe
- Criar, para cada package, o arquivo package-info.java, contendo a responsabilidade do package declarado.

> \#começo do arquivo "package-info.java" no package br.ufg.inf.fabrica.tceduca.gestao.model; </br>
>/* </br>
 > \* Classes que representam principais conceitos e/ou dados </br>
 > \* empregados pela aplicação. </br>
 > */ </br>
> package br.ufg.inf.fabrica.tceduca.gestao.model;</br>
> #fim do arquivo</sub>

### 2.2 - Angular

#### 2.2.1 - Comentários </br> 
##### Copyright
Declarar o trecho de Copyright, exatamente como descrito abaixo, no início de cada classe. </br>
> /*</br>
  Projeto \<nome-do-projeto\></br>
  Copyright (c) \<ano\></br>
  Fábrica de Software - Instituto de Informática - UFG</br>
 */

Exemplo:
> /*</br>
  Projeto TCEduca</br>
  Copyright (c) 2021</br>
  Fábrica de Software - Instituto de Informática - UFG</br>
 */

