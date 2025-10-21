#!/bin/bash

# Script para baixar todas as imagens do portfolio
# Execute: chmod +x download-images.sh && ./download-images.sh

set -e

echo "🚀 Iniciando download das imagens do portfolio..."

# Cores para o terminal
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Criar diretórios se não existirem
mkdir -p src/assets/images/profile
mkdir -p src/assets/images/projects/historias-mal-contadas
mkdir -p src/assets/images/projects/kaching
mkdir -p src/assets/images/participations

echo ""
echo "${YELLOW}📥 Baixando imagens do projeto Histórias Mal Contadas...${NC}"
cd src/assets/images/projects/historias-mal-contadas

curl -L -o "tela-inicial.png" "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/tela_inicial.png"
curl -L -o "tela-unknow.png" "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/tela_unknow.png"
curl -L -o "level-two.png" "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/level_two.png"
curl -L -o "game-over.png" "https://github.com/brenoASantana/Historias_Mal_Contadas_DEMO/raw/main/assets/images/game_over.png"

echo "${GREEN}✅ Histórias Mal Contadas - OK${NC}"
cd ../../../../../..

echo ""
echo "${YELLOW}📥 Baixando imagens do projeto Kaching...${NC}"
cd src/assets/images/projects/kaching

curl -L -o "tela-inicial.png" "https://github.com/brenoASantana/kaching/raw/main/view/css/img/telaInicial.png"
curl -L -o "cadastro-user.png" "https://github.com/brenoASantana/kaching/raw/main/view/css/img/cadastroUser.png"
curl -L -o "apagar-user.png" "https://github.com/brenoASantana/kaching/raw/main/view/css/img/apagarUser.png"
curl -L -o "atualizar-user.png" "https://github.com/brenoASantana/kaching/raw/main/view/css/img/atualizarUser.png"

echo "${GREEN}✅ Kaching - OK${NC}"
cd ../../../../../..

echo ""
echo "${YELLOW}⚠️  ATENÇÃO: As imagens de participações do LinkedIn precisam ser baixadas manualmente!${NC}"
echo ""
echo "Por favor, baixe manualmente do seu LinkedIn e salve em src/assets/images/participations/:"
echo "  - hack-na-ilha.jpg"
echo "  - programacao-0.jpg"
echo "  - bate-papo-bd.jpg"
echo "  - desafio-kraft.jpg"
echo ""
echo "Instruções detalhadas em: src/assets/IMAGES_README.md"
echo ""
echo "${GREEN}✅ Download das imagens de projetos concluído!${NC}"
echo ""
echo "Próximos passos:"
echo "1. Baixe as imagens do LinkedIn manualmente"
echo "2. Adicione sua foto de perfil em src/assets/images/profile/perfil.jpg"
echo "3. Execute 'npm start' para ver as mudanças"
