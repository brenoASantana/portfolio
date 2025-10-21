#!/bin/bash

# 🎨 Script de Verificação Pré-Commit
# Este script verifica se o código está pronto para commit

set -e

echo "🔍 Iniciando verificações pré-commit..."
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para imprimir com cor
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo "ℹ️  $1"
}

# 1. Verificar se há arquivos staged
print_info "Verificando arquivos staged..."
if ! git diff --cached --quiet; then
    print_success "Arquivos staged encontrados"
else
    print_error "Nenhum arquivo staged para commit"
    exit 1
fi
echo ""

# 2. Biome Lint
print_info "Executando Biome lint..."
if npm run lint > /dev/null 2>&1; then
    print_success "Biome lint passou"
else
    print_error "Biome lint falhou"
    echo "Execute: npm run lint para ver os erros"
    exit 1
fi
echo ""

# 3. Biome Format Check
print_info "Verificando formatação..."
if npm run format -- --write=false > /dev/null 2>&1; then
    print_success "Formatação correta"
else
    print_warning "Formatação incorreta. Aplicando correções..."
    npm run format
    print_success "Formatação aplicada"
fi
echo ""

# 4. Biome Check Completo
print_info "Executando Biome check completo..."
if npm run check > /dev/null 2>&1; then
    print_success "Biome check passou"
else
    print_error "Biome check falhou"
    echo "Execute: npm run check para ver os erros"
    exit 1
fi
echo ""

# 5. Testes
print_info "Executando testes..."
if CI=true npm test -- --watchAll=false --coverage > /dev/null 2>&1; then
    print_success "Testes passaram"
else
    print_error "Testes falharam"
    echo "Execute: npm test para ver os erros"
    exit 1
fi
echo ""

# 6. Build
print_info "Testando build..."
if CI=false npm run build > /dev/null 2>&1; then
    print_success "Build bem-sucedido"
else
    print_error "Build falhou"
    echo "Execute: npm run build para ver os erros"
    exit 1
fi
echo ""

# 7. Verificar tamanho do bundle
print_info "Analisando tamanho do bundle..."
BUILD_SIZE=$(du -sh build | cut -f1)
print_success "Tamanho do build: $BUILD_SIZE"
echo ""

# Resumo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_success "Todas as verificações passaram! ✨"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Você pode fazer o commit com segurança:"
echo "  git commit -m \"sua mensagem\""
echo ""
