# 🤝 Contributing Guide - Portfolio React

Guia para contribuir com código, melhorias e bugfixes para o portfolio.

## 📋 Sumário

- [Setup Inicial](#setup-inicial)
- [Workflow de Desenvolvimento](#workflow-de-desenvolvimento)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Código](#padrões-de-código)
- [Testes](#testes)
- [Commit & PR](#commit--pr)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Setup Inicial

### 1. Clone o repositório

```bash
git clone https://github.com/brenoASantana/portfolio.git
cd portfolio
```

### 2. Instale as dependências

```bash
npm install --legacy-peer-deps
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
# Edite .env com suas credenciais Spotify
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
# Acesse http://localhost:3000
```

---

## 🔄 Workflow de Desenvolvimento

### 1. Crie uma Feature Branch

```bash
git checkout -b feature/sua-feature-aqui
# ou
git checkout -b fix/seu-bugfix-aqui
```

**Naming conventions:**

- `feature/` - Nova funcionalidade
- `fix/` - Bugfix
- `refactor/` - Refatoração
- `docs/` - Documentação
- `chore/` - Tarefas (deps, config)

### 2. Desenvolva Localmente

```bash
# Servidor de dev com hot reload
npm start

# Em outro terminal, rode testes em watch mode
npm test
```

### 3. Verifique Qualidade

```bash
# Lint
npm run lint

# Format (auto-fix)
npm run format

# Type checking
npx tsc --noEmit

# Testes
npm test -- --watchAll=false

# Pre-commit checks (simulação)
npm run pre-commit
```

### 4. Commit & Push

```bash
git add .
git commit -m "feat: adicione sua feature"
# Pre-commit hook roda automaticamente

git push origin feature/sua-feature-aqui
```

### 5. Crie um Pull Request

1. GitHub → **New Pull Request**
2. Compare: `master` ← `feature/sua-feature-aqui`
3. Descreva mudanças
4. CI/CD roda automaticamente
5. Aguarde code review

### 6. Merge

Após aprovação:

- GitHub Actions: Lint ✅ → Test ✅ → Build ✅
- Alguém aprova
- Merge para `master`
- Deploy automático 🚀

---

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/         # Componentes React
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── ui/             # Componentes reutilizáveis
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Badge/
│   │   │   ├── Modal/
│   │   │   └── index.ts
│   │   ├── layout/         # Layout components
│   │   └── widgets/        # Widgets especiais
│   ├── context/            # React Context
│   │   ├── ToastContext.ts
│   │   └── ToastProvider.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── useAsync.ts
│   │   └── useRetry.ts
│   ├── services/           # API services
│   │   ├── spotify.ts
│   │   └── github.ts
│   ├── data/               # Static data
│   │   └── profileData.ts
│   ├── i18n/               # Internacionalização
│   │   └── locales/
│   ├── __tests__/          # Testes
│   │   ├── components/
│   │   └── hooks/
│   ├── App.tsx
│   └── index.tsx
├── public/                 # Static files
├── scripts/                # Utility scripts
│   ├── pre-commit-check.sh
│   ├── deploy.sh
│   └── clean.sh
├── .github/
│   └── workflows/          # CI/CD
│       ├── ci.yml
│       └── deploy.yml
├── .husky/                 # Git hooks
├── package.json
├── tsconfig.json
├── biome.json
└── vercel.json
```

---

## 🎨 Padrões de Código

### TypeScript

- **Strict Mode:** Sempre ativado
- **Type Annotations:** Sempre adicione tipos
- **Interfaces:** Para structures complexas
- **Generics:** Use quando apropriado

```tsx
// ✅ Bom
interface UserProfile {
  name: string;
  email: string;
  age?: number;
}

const getUserProfile = async (id: string): Promise<UserProfile> => {
  // ...
};

// ❌ Ruim
const getUserProfile = async (id) => {
  // ...
};
```

### React

- **Function Components:** Sempre
- **Hooks:** Use custom hooks para lógica reutilizável
- **Props Interface:** Sempre tipadas
- **CSS Modules:** Para estilos

```tsx
// ✅ Bom
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

// ❌ Ruim
export const Button = ({ variant, children }) => {
  return <button>{children}</button>;
};
```

### Naming Conventions

```
- Componentes: PascalCase (Button.tsx)
- Funções: camelCase (getUserData)
- Constantes: UPPER_SNAKE_CASE (MAX_RETRIES)
- Arquivos CSS: Component.module.css
- Test files: Component.test.tsx
```

### CSS Modules

```tsx
import styles from "./Button.module.css";

export const Button: React.FC = () => (
  <button className={styles.button}>
    Clique aqui
  </button>
);
```

```css
/* Button.module.css */
.button {
  background: var(--accent-primary);
  color: var(--text-primary);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.button:hover {
  box-shadow: 0 0 10px var(--accent-primary);
}
```

---

## 🧪 Testes

### Criando Testes

```tsx
// src/__tests__/components/Button.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../components/ui/Button";

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Rodando Testes

```bash
# Watch mode (recomendado durante desenvolvimento)
npm test

# Single run
npm test -- --watchAll=false

# Com coverage
npm run test:coverage

# Específico
npm test -- Button.test
```

### Coverage Targets

- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+

---

## 📝 Commit & PR

### Commit Messages

Siga [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adicione suporte a tema escuro
fix: corrija bug de scroll
docs: atualize README
style: formate código com Biome
refactor: reorganize estrutura de hooks
test: adicione testes para Button
chore: atualize dependências
```

### Pull Request Template

```markdown
## 📝 Descrição
Breve descrição do que foi feito

## 🎯 Tipo de Mudança
- [ ] Feature nova
- [ ] Bugfix
- [ ] Refatoração
- [ ] Documentação

## 🧪 Como Testar
Passos para testar a mudança

## ✅ Checklist
- [ ] Código segue padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Lint passa (`npm run lint`)
- [ ] Testes passam (`npm test`)
- [ ] Build funciona (`npm run build`)
- [ ] Documentação foi atualizada
```

---

## 🐛 Troubleshooting

### Erro: "npm install fails"

```bash
rm package-lock.json node_modules
npm install --legacy-peer-deps
```

### Erro: "Hot reload não funciona"

```bash
# Reinicie o servidor
npm start

# Limpe cache do navegador
# Ctrl+Shift+Delete
```

### Erro: "Pre-commit hook falha"

```bash
# Execute manualmente para ver erro
npm run pre-commit

# Fix automático
npm run format

# Se ainda falhar, verifique testes
npm test -- --watchAll=false
```

### Erro: "Testes falham localmente mas passam em CI"

```bash
# Rodar testes como CI faria
npm test -- --runInBand --watch=false

# Limpar e reinstalar
npm run clean
npm install --legacy-peer-deps
```

---

## 📚 Recursos

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Jest Docs](https://jestjs.io)
- [React Testing Library](https://testing-library.com/react)
- [Biome Docs](https://biomejs.dev)

---

## ✨ Dicas

1. **Não commite sem testes** - Novo código deve ter testes
2. **Keep commits small** - Commits pequenos e focados são mais fáceis de revisar
3. **Rebase before PR** - `git rebase master` para evitar merge commits
4. **Ask questions** - Dúvidas? Abra um issue!

---

**Obrigado por contribuir!** 🎉
