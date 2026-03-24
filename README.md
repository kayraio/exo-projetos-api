# Exo.WebApi - Sistema de Projetos

Este projeto foi desenvolvido com o objetivo de praticar API REST com .NET.  
A aplicacao faz cadastro de projetos e usuarios, e tem uma tela web para consumir a API.

## Funcionalidades

- Cadastro de projetos
- Listagem de projetos
- Busca, edicao e exclusao de projetos
- Login de usuario com token JWT
- Tela web para testar a API sem depender so de Swagger

## Regras de negocio (versao atual)

- Projeto possui `NomeDoProjeto`, `Area` e `Status`
- `Status = true` significa ativo
- Endpoints de atualizar/deletar usuario usam autorizacao

## Tecnologias utilizadas

Back-end:

- C#
- .NET 6
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server

Front-end:

- HTML
- CSS
- JavaScript

Ferramenta de apoio:

- Swagger

## Estrutura do projeto

- `Program.cs`: configuracao da aplicacao e middlewares
- `Controllers/`: endpoints da API
- `Repositories/`: regras de acesso a dados
- `Models/`: classes de entidade
- `Contexts/ExoContext.cs`: contexto do Entity Framework
- `wwwroot/index.html`: interface web
- `wwwroot/style.css`: estilos da tela web
- `wwwroot/app.js`: logica da tela web

## Como executar

1. Abra o projeto no editor
2. Ajuste a conexao com banco em `appsettings.json` (e/ou `ExoContext`)
3. Execute:

```bash
dotnet restore
dotnet run
```

Depois, acesse:

- Swagger: `https://localhost:porta/swagger`
- Front da aplicacao: `https://localhost:porta/`

## Objetivo do projeto

Esse projeto foi criado para consolidar conceitos de API, organizacao de camadas e integracao simples com front-end.

## Autora

Kayra Oliveira  
https://github.com/kayraio
