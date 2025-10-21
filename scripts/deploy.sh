#!/bin/bash

# 🚀 Script de Deploy Local
# Este script faz o deploy para GitHub Pages

set -e

echo "🚀 Iniciando processo de deploy..."
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo "ℹ️  $1"
}

# 1. Verificar branch
print_info "Verificando branch atual..."
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "master" ] && [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}⚠️  Você está na branch '$CURRENT_BRANCH'${NC}"
    read -p "Continuar mesmo assim? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi
print_success "Branch: $CURRENT_BRANCH"
echo ""

# 2. Verificar se há mudanças não commitadas
print_info "Verificando mudanças não commitadas..."
if ! git diff-index --quiet HEAD --; then
    echo "❌ Existem mudanças não commitadas"
    echo "Execute: git status"
    exit 1
fi
print_success "Nenhuma mudança não commitada"
echo ""

# 3. Atualizar branch
print_info "Atualizando branch..."
git pull origin $CURRENT_BRANCH
print_success "Branch atualizada"
echo ""

# 4. Limpar build anterior
print_info "Limpando build anterior..."
rm -rf build
print_success "Build anterior removido"
echo ""

# 5. Instalar dependências
print_info "Verificando dependências..."
npm install --legacy-peer-deps
print_success "Dependências atualizadas"
echo ""

# 6. Executar testes
print_info "Executando testes..."
CI=true npm test -- --watchAll=false --coverage
print_success "Testes passaram"
echo ""

# 7. Build de produção
print_info "Criando build de produção..."
CI=false GENERATE_SOURCEMAP=false npm run build
print_success "Build criado"
echo ""

# 8. Analisar tamanho
print_info "Analisando bundle..."
BUILD_SIZE=$(du -sh build | cut -f1)
print_success "Tamanho: $BUILD_SIZE"
echo ""

# 9. Deploy
print_info "Fazendo deploy para GitHub Pages..."
npm run deploy
print_success "Deploy concluído"
echo ""

# Resumo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_success "Deploy bem-sucedido! 🎉"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Seu portfolio estará disponível em:"
echo "  https://brenoASantana.github.io/portfolio"
echo ""
echo "Pode levar alguns minutos para atualizar."
echo ""
