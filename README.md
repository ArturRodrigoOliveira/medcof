# **Projeto de Automação MedCof** 

Este projeto utiliza o Cypress para realizar automações de testes na aplicação WEB da MedCof, utilizando o padrão Page Objects para aumentar a legibilidade e manutenção dos testes.

*Todos os dados utilizados neste projeto são dados ficticios criados com biblioteca faker

## Requisitos

Node.js na versão 14 ou superior (https://nodejs.org/en/download)

IDE VSCode (https://code.visualstudio.com/download)

GIT para versionamento (https://gitforwindows.org/)

## Primeiros passos

Clonar o repositório para seu ambiente local via ssh ou http

Abrir o projeto no VSCode

Instalar as dependências do projeto abrindo o terminal e digitando o comando: npm install

## Executado os testes

### Modo gráfico
    npx cypress open
        selecionar o navegador (preferencialmente o Electron)

        selecionar a spec medcof.cy.js para a execução

### Modo headless (linha de comando)
    No terminal digitar npm run e2e

        esse modo executa todos os testes existentes no projeto e gera um report em html

## Estrutura do projeto
____________________________________________________________________________________________________
#### **cypress/:** pasta principal do Cypress

#### **.github\workflows:** pasta que contem o arquivo de configuração do github actions

#### **e2e/:** pasta que armazena os arquivos de teste

#### **fixtures/:** pasta para armazenar arquivos com dados para os testes

#### **support/:** pasta que armazena as configurações de apoio

#### **commands/:** pasta que armazena os Custom Commands

#### **pages/:** pasta que armazena os elementos das páginas acessadas em classes e métodos

#### **commands.js:** arquivo que contém comandos personalizados do Cypress

####  **e2e.js:** arquivo que importa todos os arquivos de suporte

#### **node_modules/:** pasta contendo todas as dependências do projeto

#### **mochawesome-report:** armazena os resultados da execução de testes

#### **.env:** arquivo que armazena a URL base do site

#### **.gitignore:** arquivo para configurar os arquivos e pastas que devem ser ignorados pelo Git

#### **cypress.config.js:** arquivo de configuração do Cypress

#### **package.json:** arquivo de configuração do Node.js

#### **README.md:** arquivo com informações e instruções sobre o projeto

#### **reporter-config:** arquivo Json com as configurações para gerar o relatório de execução dos testes
 
