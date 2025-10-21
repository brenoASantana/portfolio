SHELL := /bin/bash
NPM := source ~/.nvm/nvm.sh && npm

.PHONY: all help install setup dev build test lint format check clean deploy

all: help

help:
	@echo "💼 Makefile do Portfolio React"
	@echo ""
	@echo "Comandos disponíveis:"
	@echo "  install  - Instala todas as dependências do projeto"
	@echo "  setup    - Configura o projeto (alias para install)"
	@echo "  dev      - Inicia o servidor de desenvolvimento (alias para start)"
	@echo "  start    - Inicia o servidor React em modo desenvolvimento"
	@echo "  build    - Compila o projeto para produção"
	@echo "  test     - Executa os testes do projeto"
	@echo "  lint     - Executa verificação de código com Biome"
	@echo "  format   - Formata o código usando Biome"
	@echo "  check    - Executa verificação completa com Biome"
	@echo "  deploy   - Faz deploy para GitHub Pages"
	@echo "  clean    - Remove arquivos de build e dependências"

install:
	@echo "📦 Instalando dependências..."
	@$(NPM) install
	@echo "✅ Dependências instaladas com sucesso!"

setup: install
	@echo "✅ Projeto configurado com sucesso!"

dev: start

start:
	@echo "🚀 Iniciando servidor de desenvolvimento..."
	@$(NPM) start

build:
	@echo "🔨 Compilando projeto para produção..."
	@$(NPM) run build
	@echo "✅ Build concluído! Arquivos em ./build"

test:
	@echo "🧪 Executando testes..."
	@$(NPM) test

lint:
	@echo "🔍 Verificando código com Biome..."
	@$(NPM) run lint

format:
	@echo "✨ Formatando código com Biome..."
	@$(NPM) run format --write

check:
	@echo "🔎 Executando verificação completa..."
	@$(NPM) run check

deploy: build
	@echo "🚀 Fazendo deploy para GitHub Pages..."
	@$(NPM) run deploy
	@echo "✅ Deploy concluído!"

clean:
	@echo "🧹 Limpando arquivos de build e dependências..."
	@rm -rf build node_modules package-lock.json
	@echo "✅ Limpeza concluída!"