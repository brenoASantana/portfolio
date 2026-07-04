# Configuração de Cores para o Terminal
CYAN := \033[36m
GREEN := \033[32m
YELLOW := \033[33m
RESET := \033[0m

# Comandos base
NPM := npm
NPX := npx

.PHONY: all help install setup dev start build lint format check test analyze clean deploy deploy-prod spotify-token

all: help

help:
	@echo "$(CYAN)==========================================$(RESET)"
	@echo "$(YELLOW)   🎮 Terminal de Controle do Portfólio   $(RESET)"
	@echo "$(CYAN)==========================================$(RESET)"
	@echo ""
	@echo "$(GREEN)📦 Instalação & Setup:$(RESET)"
	@echo "  make install      Instala todas as dependências (com legacy-peer-deps)"
	@echo "  make setup        Alias para install"
	@echo ""
	@echo "$(GREEN)🚀 Desenvolvimento:$(RESET)"
	@echo "  make dev          Inicia o servidor local (localhost:3000)"
	@echo "  make build        Gera o build de produção"
	@echo "  make analyze      Analisa o peso do bundle com source-map-explorer"
	@echo ""
	@echo "$(GREEN)🎵 APIs (Spotify):$(RESET)"
	@echo "  make spotify      Roda o script local para gerar um novo Refresh Token"
	@echo ""
	@echo "$(GREEN)✨ Qualidade de Código (Biome):$(RESET)"
	@echo "  make lint         Verifica problemas no código"
	@echo "  make format       Formata o código automaticamente"
	@echo "  make check        Executa verificação completa (Lint + Format)"
	@echo "  make test         Roda os testes unitários (CI mode)"
	@echo ""
	@echo "$(GREEN)☁️  Deploy (Vercel):$(RESET)"
	@echo "  make deploy       Faz o deploy de Preview na Vercel"
	@echo "  make deploy-prod  Faz o deploy direto para Produção na Vercel"
	@echo ""
	@echo "$(GREEN)🧹 Utilidades:$(RESET)"
	@echo "  make clean        Limpa pastas de build e node_modules"
	@echo ""

install:
	@echo "$(CYAN)[>_] Baixando pacotes...$(RESET)"
	@$(NPM) install --legacy-peer-deps
	@echo "$(GREEN)[+] Arsenal pronto!$(RESET)"

setup: install

dev: start

start:
	@echo "$(CYAN)[>_] Iniciando o reator...$(RESET)"
	@$(NPM) start

build:
	@echo "$(CYAN)[>_] Forjando versão de produção...$(RESET)"
	@$(NPM) run build
	@echo "$(GREEN)[+] Build gerado com sucesso em ./build!$(RESET)"

lint:
	@echo "$(CYAN)[>_] Inspecionando código com Biome...$(RESET)"
	@$(NPM) run lint

format:
	@echo "$(CYAN)[>_] Alinhando os pixels (Format)...$(RESET)"
	@$(NPM) run format

check:
	@echo "$(YELLOW)[>_] Executando scanner completo...$(RESET)"
	@$(NPM) run check

test:
	@echo "$(CYAN)[>_] Testando os sistemas...$(RESET)"
	@CI=true $(NPM) test -- --runInBand --watch=false

analyze: build
	@echo "$(YELLOW)[>_] Analisando o peso da carga (Bundle)...$(RESET)"
	@$(NPM) run analyze

spotify:
	@echo "$(CYAN)[🎵] Iniciando autenticação do Spotify...$(RESET)"
	@node get-refresh-token.js

deploy:
	@echo "$(CYAN)[☁️] Lançando Preview na Vercel...$(RESET)"
	@$(NPX) vercel

deploy-prod:
	@echo "$(GREEN)[🚀] Lançando para PRODUÇÃO na Vercel...$(RESET)"
	@$(NPX) vercel --prod

clean:
	@echo "$(YELLOW)[🧹] Passando a vassoura no cache e dependências...$(RESET)"
	@rm -rf build node_modules package-lock.json
	@echo "$(GREEN)[+] Área limpa!$(RESET)"