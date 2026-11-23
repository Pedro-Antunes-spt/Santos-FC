# Titulo do documento

## 1. Contexto

No cenário atual a empresa Aquatech opera aquários com diferentes características, podendo ser de água doce ou salgada. Atualmente as informações das espécies estão sendo armazenadas em planilhas conversas informais, assim dificultando o controle dos dados.

Diante dessa situação, alguns problemas são ocasionados, como:
- cadastros duplicados de espécies
- áquarios com tipos de água incompatíveis
- dificuldade para consultar e filtrar as espécies cadastradas.

Diante dos problemas apresentados, surgiu uma necessidade de desenvolver uma funcionalidade no sistema web, permitindo centralizar o cadastro, a consulta e a associação de espécies aos aquários, afim de garantir maior segurança e organização.

## 2. Objetivo

Desenvolver uma funcionalidade que permita cadastrar, editar, consultar e excluir espécies, além de associá-las aos aquários existentes.

O sistema deverá garantir que as espécies sejam associadas somente a aquários compatíveis com suas características, desta forma, evitando erros operacionais e contribuindo para o bem-estar dos peixes.

### 3. Escopo

**Dentro do escopo:** - Cadastro, edição, consulta e exclusão de
espécies. - Associação e desassociação de espécies aos aquários. -
Pesquisa e filtros por características. - Validação de compatibilidade e
duplicidade.

**Fora do escopo:** - Monitoramento da qualidade da água. - Controle de
quantidade de peixes. - Monitoramento de mortalidade e reprodução. -
Integração com sensores. - Gerenciamento financeiro.

### 4. Funcionalidades

1.  Cadastrar espécies.
2.  Listar e consultar espécies.
3.  Editar e excluir espécies.
4.  Associar e desassociar espécies aos aquários.
5.  Pesquisar e filtrar espécies.
6.  Visualizar espécies por aquário.

### 5. Regras de negócio

1.  O nome da espécie é obrigatório e não pode ser duplicado.
2.  Toda espécie deve possuir um tipo de água.
3.  A espécie deve ser compatível com o aquário.
4.  Não é permitido associar espécies a aquários inexistentes.
5.  Espécies associadas não podem ser excluídas.
6.  Apenas usuários autorizados podem realizar alterações.

### 6. Interface

A interface será integrada ao sistema existente, contendo: - Listagem de
espécies. - Formulário de cadastro e edição. - Campo de pesquisa e
filtros. - Opções de visualizar, editar e excluir. - Área de associação
com aquários. - Mensagens de sucesso e erro.

### 7. Critérios de aceitação

1.  Permitir cadastrar, editar e consultar espécies.
2.  Impedir cadastros duplicados.
3.  Permitir pesquisar e filtrar espécies.
4.  Validar a compatibilidade entre espécies e aquários.
5.  Impedir exclusões com associações ativas.
6.  Exibir corretamente as espécies associadas a cada aquário.
