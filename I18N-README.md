# 🌍 Sistema de Internacionalização (i18n)

## ✅ Implementação Completa

Seu portfolio agora suporta **Português (BR)** e **Inglês (US)** com alternância fácil através de um botão flutuante!

## 🎯 Funcionalidades

### 1. **Botão de Alternância de Idioma**
- 🇧🇷 Mostra bandeira do Brasil quando está em Português
- 🇺🇸 Mostra bandeira dos EUA quando está em Inglês
- **Localização:** Canto superior direito (fixed)
- **Responsivo:** Adapta tamanho em mobile

### 2. **Detecção Automática**
- Detecta o idioma do navegador na primeira visita
- Salva a preferência no `localStorage`
- Mantém o idioma escolhido entre sessões

### 3. **Traduções Completas**
Todos os componentes foram traduzidos:
- ✅ Navegação
- ✅ Profile (Hero)
- ✅ Sobre Mim
- ✅ Habilidades
- ✅ Experiência Profissional
- ✅ Projetos Realizados
- ✅ Projetos em Andamento
- ✅ Participações
- ✅ Footer/Contato

## 📁 Estrutura de Arquivos

```
src/
├── i18n/
│   ├── config.js           # Configuração do i18next
│   └── locales/
│       ├── pt-BR.json      # Traduções em Português
│       └── en-US.json      # Traduções em Inglês
│
└── components/
    ├── LanguageToggle.jsx        # Botão de idioma
    └── LanguageToggle.module.css # Estilos do botão
```

## 🔧 Como Adicionar Novas Traduções

### 1. Adicionar no arquivo JSON

**`src/i18n/locales/pt-BR.json`:**
```json
{
  "newSection": {
    "title": "Novo Título",
    "description": "Nova descrição"
  }
}
```

**`src/i18n/locales/en-US.json`:**
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New description"
  }
}
```

### 2. Usar no componente

```javascript
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
}
```

## 🎨 Personalização do Botão

O botão está em `src/components/LanguageToggle.module.css`:

```css
.toggleButton {
  position: fixed;
  top: 100px;
  right: 2rem;
  /* Customize aqui */
}
```

## 📱 Responsividade

O botão se ajusta automaticamente:
- **Desktop:** `top: 100px, right: 2rem`
- **Tablet (≤768px):** `top: 80px, right: 1rem`
- **Mobile (≤480px):** `top: 70px, right: 0.75rem`

## 🔄 Como Funciona

1. **Primeira visita:** Detecta idioma do navegador
2. **Clique no botão:** Alterna entre PT-BR ↔ EN-US
3. **Salvamento:** Armazena preferência no localStorage
4. **Próximas visitas:** Carrega o idioma salvo

## 🚀 Bibliotecas Usadas

- **`i18next`** - Core do sistema de i18n
- **`react-i18next`** - Integração com React

## 📋 Checklist de Tradução

- [x] Navegação
- [x] Hero/Profile
- [x] Sobre
- [x] Habilidades
- [x] Experiência
- [x] Projetos
- [x] Projetos em Andamento
- [x] Participações
- [x] Footer

## 🎯 Dicas

### Testar Idiomas

```javascript
// No console do navegador:
localStorage.setItem('language', 'en-US'); // Forçar inglês
localStorage.setItem('language', 'pt-BR'); // Forçar português
window.location.reload(); // Recarregar
```

### Adicionar Novo Idioma (Espanhol, por exemplo)

1. Criar `src/i18n/locales/es-ES.json`
2. Adicionar em `src/i18n/config.js`:
```javascript
import esES from './locales/es-ES.json';

i18n.init({
  resources: {
    'pt-BR': { translation: ptBR },
    'en-US': { translation: enUS },
    'es-ES': { translation: esES }, // ← Novo
  },
  // ...
});
```
3. Atualizar o botão para incluir a nova opção

## 🐛 Troubleshooting

### Tradução não aparece?
- Verifique se a chave existe em **ambos** os arquivos JSON
- Use o console: `console.log(t('sua.chave'))`

### Idioma não persiste?
- Verifique se o localStorage está habilitado
- Limpe o cache do navegador

### Botão não aparece?
- Verifique se o `LanguageToggle` está importado no `App.jsx`
- Confirme que o z-index está correto

---

✅ **Portfolio agora é totalmente multilíngue!** 🌍
