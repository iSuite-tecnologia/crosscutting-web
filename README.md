# iSuite Utilities Functions

Essa biblioteca contém funções utilitárias para formatação de dados e outras funcionalidades. Ela pode ser utilizada em projetos que necessitam de formatação de dados, como aplicações web, mobile, desktop, entre outras.

## Padronização de commit com (Commitlint, Husky e Commitizen)

Essa biblioteca contém configurações de padronização de commit. Para enviar suas alterações para o repositório, digite apenas "npm run commit". Esse comando irá rodar os testes unitários e o lint para verificar todo código, evitando erros fora da padronização que foi estabelecida. Após digitar esse comando de commit, será apresentando no console algumas perguntas, como por exemplo:

- Selecione o tipo de alteração que você está fazendo
- Qual é o escopo desta alteração (por exemplo, componente ou nome do arquivo): (pressione Enter para pular)
- Escreva uma descrição curta e imperativa da mudança (máximo de 96 caracteres)
- Forneça uma descrição mais longa da alteração (pressione Enter para pular)
- Há alguma alteração significativa?
- Essa mudança afeta algum problema em aberto?

> Essas configurações você pode encontrar nesse [artigo](https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n).
