- Iniciando projeto
yarn init -y

- code .

- Instalando framework express
yarn add express

- Instalando o Typescript
yarn add typescript -D

- Cria o arquivo tsconfig.json (arquivo que armazena como as configurações de como
o typescript será executado)
yarn tsc --init

- Criar a pasta src (Nota: Os arquivos de código sempre ficam na pasta src)
- Dentro da pasta src, crie o arquivo server.ts
- No arquivo tsconfig.json setar o rootDir para "./src"
Ex: "rootDir": "./src",

- Setar o diretório de distribuição que armazena o build, o outDir para "./dist"
Ex: "outDir": "./dist",

Você verifica quando executa:
yarn tsc

Em dist será criado o server.js oriundo de server.ts

Comece a codar no server.ts em que você já terá a última versão disponível do javascript
com as features mais recentes da linguagem

por exemplo, ao codar:
import express from 'express';

Você percebe que o express provavelmente vai estar em vermelho indicando que não está instalado, daí:
yarn add @types/express -D

Faça isso com toda lib que você tiver esse problema

ATENÇÂO: Você só faz esse tipo de procedimento em desenvolvimento, já que em produção só existirá código em javascript (dist)

Sempre que terminar de codar ou fazer um bloco, execute yarn tsc, pois o node não entende typescript, somente javascript

Depois de tudo, execute:
node dist/server.js

Para agilizar, vá em package.json e crie um script para evitar escrever "yarn tsc" e executar logo:
"scripts": {
    "build": "tsc"
},

daí, basta aplicar:
yarn build

Somente em desenvolvimento:
yarn add ts-node-dev -D

Com esse módulo, ele permite uma agilidade tirando a criação do diretório dist em dev e restart no  servidor quando houver alteração de código (semelhante ao nodemon):
yarn dev:server

Algumas modificações para tornar o servidor mais rápido em dev:
--transpile-only no package.json (não verifica se o código está certo ou errado, só converte desabilitando a checagem, pois já basta o vscode para isso)
--ignore-watch node_modules no package.json (evita compilação dos módulos em node_modules, pois normalmente nunca alteramos código dos node_modules)
Obs: A percepção fica conforme aumento do projeto

----------------------------
Próximo avanço:
Dividir o arquivo de rotas de acordo com cada entidade da aplicação

----------------------
Padrão Repositório
// Persistência <-> Repositório <-> Rota

// find
// create
// Normalmente um repositório por model

Padrão DTO - Data Transfer Object

Para iniciar o servidor:

instalando o uuid
yarn add uuidv4

yarn dev:server
















