# Relatório de Teste de Integração - HU 03

## 1 - Cenários testados

HU03 - CRUD administrador de sistema

## 2 - Componentes testados

Endpoint do CRUD de criação dos administradores de sistema. Atualmente implementado os modelos e validações dos campos dos modelos.

## 3 - Tabela de casos de teste

|   ID   |                               Descrição                               |                               Entradas                                |                           Resultado esperado                           | Status  |
|:------:|:---------------------------------------------------------------------:|:---------------------------------------------------------------------:|:----------------------------------------------------------------------:|:-------:|
| HU3_01 |                 Cadastrar administrador corretamente                  |                Administrador com todos dados corretos                 |                  Administrador cadastrado com sucesso                  | Sucesso |
| HU3_02 |         Verificar se o administrador cadastrado será listado          |                Administrador com todos dados corretos                 |                   Administrador listado com sucesso                    | Sucesso |
| HU3_03 |            Cadastrar vários administradores e listar todos            |              3 administradores com todos dados corretos               |              100 administradores são listados com sucesso              | Sucesso |
| HU3_04 |                    Cadastrar administrador sem CPF                    |           Administrador com todos dados válidos e CPF vazio           |                           Mensagem: “[null]”                           | Sucesso |
| HU3_05 |                   Cadastrar administrador sem nome                    |          Administrador com todos dados válidos e nome vazio           |                           Mensagem: “[null]”                           | Sucesso |
| HU3_06 |                   Cadastrar administrador sem email                   |          Administrador com todos dados válidos e email vazio          |                           Mensagem: “[null]”                           | Sucesso |
| HU3_07 |               Cadastrar administrador com CPF inválido                |   Administrador com todos dados válidos e CPF igual a "12345678910"   |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_08 |      Cadastrar administrador com CPF com menos de 11 caracteres       |        Administrador com todos dados válidos e CPF igual a "1"        |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_09 |           Cadastrar administrador com CPF com pontuação e -           | Administrador com todos dados válidos e CPF igual a "701.157.160-41"  |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_10 |       Cadastrar administrador com CPF com mais de 11 caracteres       | Administrador com todos dados válidos e CPF igual a "123456789101112" |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_11 |               Cadastrar administrador com nome inválido               |       Administrador com todos dados válidos e nome igual a "1"        | Mensagem: "[Administrador de sistema deve ter no mínimo 2 caracteres]" | Sucesso |
| HU3_12 |              Cadastrar administrador com email inválido               |       Administrador com todos dados válidos e email igual a “1”       |                      Mensagem: "[Email inválido]"                      | Sucesso |
| HU3_13 |              Cadastrar administrador com email duplicado              |              Dois administradores que tenham mesmo email              |  Mensagem: "[Email já utilizado por outro Administrador de Sistema]"   | Sucesso |
| HU3_14 |               Cadastrar administrador com CPF duplicado               |               Dois administradores que tenham mesmo CPF               |   Mensagem: ["Cpf já utilizado por outro Administrador de Sistema]"    | Sucesso |
| HU3_15 |             Remover administrador previamente cadastrado              |                       Administrador cadastrado                        |                   Administrador removido com sucesso                   | Sucesso |
| HU3_16 |                 Atualizar o nome de um administrador                  |          Alterar o nome de um administrador para "Novo Nome"          |                  Administrador atualizado com sucesso                  | Sucesso |
| HU3_17 |                  Atualizar o CPF de um administrador                  |         Alterar o CPF de um administrador para "74131037025"          |                  Administrador atualizado com sucesso                  | Sucesso |
| HU3_18 |                 Atualizar o email de um administrador                 |       Alterar o email de um administrador para "aaa@gmail.com"        |                  Administrador atualizado com sucesso                  | Sucesso |
| HU3_19 |    Atualizar o nome de um administrador com menos de 2 caracteres     |              Alterar o nome de um administrador para “N”              | Mensagem: "[Administrador de sistema deve ter no mínimo 2 caracteres]" | Sucesso |
| HU3_20 |          Atualizar nome do administrador para um nome vazio           |             Alterar o nome de um administrador para vazio             |                           Mensagem: "[null]"                           | Sucesso |
| HU3_21 | Atualizar CPF do administrador para um CPF com mais de 11 caracteres  |          Altera CPF de administrador para "701157160411123"           |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_22 | Atualizar cpf do administrador para um cpf com menos de 11 caracteres |                Altera CPF de administrador para "7011"                |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_23 |          Atualizar cpf do administrador para um cpf invalido          |            Altera CPF de administrador para "12345678910"             |                       Mensagem: "[Cpf inválido]"                       | Sucesso |
| HU3_24 |        Atualizar email do administrador para um email invalido        |               Altera email de administrador para "aaaa"               |                      Mensagem: "[Email inválido]"                      | Sucesso |
| HU3_25 |         Atualizar email do administrador para um email vazio          |               Altera email de administrador para vazio                |                           Mensagem: "[null]"                           | Sucesso |
| HU3_26 |                Atualizar CPF para um CPF já existente                 |    Atualizar o CPF de um administrador para ser igual ao do outro     |   Mensagem: ["Cpf já utilizado por outro Administrador do Sistema]"    | Sucesso |
| HU3_27 |              Atualizar email para um email já existente               |   Atualizar o email de um administrador para ser igual ao do outro    |  Mensagem: "[Email já utilizado por outro Administrador do Sistema]"   | Sucesso |

## 4 - Baterias de teste

###  4.1 - Primeira Iteração
Autor do teste: Felipe Schloegl

Data: 23/05/2023

#### Resultados 
Testes Totais: 27 - Testes que passaram: 16 - Testes que falharam: 11

#### Falhas identificadas

##### F1
- Endpoint: criação/atualização
- Entrada para falha: campos com valores repetido. 
- Ao realizar algum update ele não chega a realizar nenhuma validação nos campos atualizados, dessa forma permitindo burlar as limitações impostas pelos validators. Permitindo duplicar CPFs e Emails, cadastrar campos vazios, entre outros.

##### F2
- Endpoint: criação/atualização
- Entrada para falha: CPF de tamanho inválido.
- Ao cadastrar um CPF menor de 11 caracteres ele gerou uma exceção no cpfValido e não retornava uma mensagem de erro, já que quando ocorre sucesso ele não retorna nada, esse erro confundia com uma mensagem de sucesso. Outras exceções que forem disparadas também não retornavam uma mensagem.

##### F3
- Endpoint: criação/atualização
- Entrada para falha: CPF em formato inválido.
- Ao tentar cadastrar um CPF válido no formato DDD.DDD.DDD-DD ele era considerado como válido pelo validator mas ao tentar persistir no banco ele era barrado pela limitação de 11 caracteres do banco. Também não retornava uma mensagem de erro.

### 4.2 - Segunda Iteração
Autor do teste: Felipe Schloegl

Data: 25/05/2023

- Ainda permanecem as mesmas falhas elencadas no dia 23/05/2023.
obs: Seria interessante que os erros relacionados aos campos vazios enviassem uma mensagem de erro significativo, como "Nome obrigatório", ao invés de uma mensagem vazia.

### 4.3 - Terceira Iteração

Autor do teste: Felipe Schloegl

Data: 30/05/2023

- Todos erros do HU3 foram corrigidos
