#!/bin/bash

# 🧹 Script de Limpeza
# Remove arquivos temporários e caches

echo "🧹 Limpando projeto..."
echo ""

# Cores
GREEN='\033[0;32m'
NC='\033[0m'

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Remover node_modules
if [ -d "node_modules" ]; then
    echo "Removendo node_modules..."
    rm -rf node_modules
    print_success "node_modules removido"
fi

# Remover build
if [ -d "build" ]; then
    echo "Removendo build..."
    rm -rf build
    print_success "build removido"
fi

# Remover coverage
if [ -d "coverage" ]; then
    echo "Removendo coverage..."
    rm -rf coverage
    print_success "coverage removido"
fi

# Remover package-lock.json
if [ -f "package-lock.json" ]; then
    echo "Removendo package-lock.json..."
    rm package-lock.json
    print_success "package-lock.json removido"
fi

# Remover .cache
if [ -d ".cache" ]; then
    echo "Removendo .cache..."
    rm -rf .cache
    print_success ".cache removido"
fi

# Remover lighthouse cache
if [ -d ".lighthouseci" ]; then
    echo "Removendo .lighthouseci..."
    rm -rf .lighthouseci
    print_success ".lighthouseci removido"
fi

# Remover biome cache
if [ -d ".biome-cache" ]; then
    echo "Removendo .biome-cache..."
    rm -rf .biome-cache
    print_success ".biome-cache removido"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_success "Limpeza concluída! ✨"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Para reinstalar as dependências:"
echo "  npm install --legacy-peer-deps"
echo ""
