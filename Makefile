SHELL := /bin/bash
NPM := source ~/.nvm/nvm.sh && npm

.PHONY: all help install setup dev build lint format check analyze clean deploy

all: help

help:
	@echo "💼 Makefile do Portfolio React"
	@echo ""
	@echo "Targets disponíveis:"; \
	printf "\nInstalação/Setup:\n  install       Instala dependências\n  setup         Alias para install\n"; \
	printf "\nDesenvolvimento:\n  dev|start     Inicia servidor de desenvolvimento\n  build         Gera build de produção (./build)\n  analyze       Analisa bundle com source-map-explorer\n"; \
	printf "\nQualidade:\n  lint          Lint via Biome\n  format        Formata código (Biome)\n  check         Lint + format + outras checks Biome\n"; \
	printf "\nOutros:\n  deploy        Build + deploy para GitHub Pages\n  clean         Remove build e dependências\n  help          Exibe esta ajuda\n"; \
	printf "\nVariáveis:\n  NPM='$(NPM)'\n";

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

lint:
	@echo "🔍 Verificando código com Biome..."
	@$(NPM) run lint

format:
	@echo "✨ Formatando código com Biome..."
	@$(NPM) run format

check:
	@echo "🔎 Executando verificação completa..."
	@$(NPM) run check

analyze: build
	@echo "📊 Analisando bundle..."
	@$(NPM) run analyze

deploy: build
	@echo "🚀 Fazendo deploy para GitHub Pages..."
	@$(NPM) run deploy
	@echo "✅ Deploy concluído!"

clean:
	@echo "🧹 Limpando arquivos de build e dependências..."
	@rm -rf build node_modules package-lock.json
	@echo "✅ Limpeza concluída!"