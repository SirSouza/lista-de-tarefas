


# 📋 Lista de Tarefas - Full Stack

> Aplicação completa de gerenciamento de tarefas com backend em PostgreSQL, desenvolvida com Next.js 15 e TypeScript.

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.9-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=flat&logo=postgresql)](https://www.postgresql.org/)
### Projeto de estudo Professor Odair Michael
## 🎯 Sobre o Projeto

Sistema completo de lista de tarefas (To-Do List) que permite criar, editar, deletar e marcar tarefas como concluídas. A aplicação conta com filtros inteligentes, indicadores visuais de progresso e suporte a temas claro/escuro.

### ✨ Features Principais

- ✅ **CRUD Completo**: Criar, ler, atualizar e deletar tarefas
- 🎨 **Temas**: Light, Dark, Pink, Green, Stone, Violet, Yellow (todos também na versão dark)
- 🔍 **Filtros**: Visualizar todas, pendentes ou concluídas
- 📊 **Progresso Visual**: Barra de progresso e contador de tarefas
- ⚡ **Optimistic Updates**: Atualização instantânea da UI
- 🗑️ **Limpeza em Massa**: Deletar todas as tarefas concluídas de uma vez
- ✏️ **Edição Inline**: Modal de edição com validação
- 🎯 **Feedback Visual**: Toasts para ações do usuário
- ⌨️ **Atalho de Teclado**: Pressione `Enter` para adicionar tarefa rapidamente

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15.3](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Estilização utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas


### Backend
- **[Prisma ORM](https://www.prisma.io/)** - ORM type-safe para TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)** - API serverless

---

## 📁 Estrutura do Projeto

```
lista-de-tarefas/
├── prisma/
│   └── schema.prisma           # Schema do banco de dados
├── src/
│   ├── actions/                # Server Actions (backend)
│   │   ├── add-task.ts         # Criar tarefa
│   │   ├── editTask.ts         # Editar tarefa
│   │   ├── deleteTask.ts       # Deletar tarefa única
│   │   ├── clearCompletedTasks.ts  # Deletar concluídas
│   │   ├── toggle-done.ts      # Marcar como concluída
│   │   └── get-task-from-db.ts # Buscar todas as tarefas
│   ├── app/
│   │   ├── page.tsx            # Página principal
│   │   ├── layout.tsx          # Layout global + providers
│   │   └── globals.css         # Estilos globais
│   ├── components/
│   │   ├── Edit-task.tsx       # Modal de edição
│   │   ├── filter.tsx          # Filtros de tarefas
│   │   ├── ModeToggle.tsx      # Toggle de tema
│   │   ├── theme-provider.tsx  # Provider de tema
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── generated/
│   │   └── prisma/             # Cliente Prisma gerado
│   ├── lib/
│   │   └── utils.ts            # Funções auxiliares
│   └── utils/
│       └── prisma.ts           # Instância do Prisma Client
├── package.json
└── tsconfig.json
```

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 22.x ou superior
- PostgreSQL instalado e rodando
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/SirSouza/lista-de-tarefas.git
cd lista-de-tarefas
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

4. **Execute as migrations do Prisma**
```bash
npx prisma migrate dev --name init
```

5. **Gere o Prisma Client**
```bash
npx prisma generate
```

6. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

7. **Acesse a aplicação**

Abra [http://localhost:3000](http://localhost:3000) no navegador

---

## 📊 Schema do Banco de Dados

```prisma
model Tasks {
  id   String  @id @default(cuid())
  task String
  done Boolean
}
```

**Campos:**
- `id`: Identificador único (CUID)
- `task`: Texto da tarefa
- `done`: Status de conclusão (true/false)

---

## 🎨 Funcionalidades Detalhadas

### 1. Adicionar Tarefa
- Input com placeholder intuitivo
- Botão com loading state (animação de spinner)
- Validação: não permite tarefas vazias
- Atalho: pressione `Enter` para adicionar
- Feedback: toast de sucesso/erro

### 2. Editar Tarefa
- Ícone de edição (✏️) ao lado de cada tarefa
- Modal com input pré-preenchido
- Valida se houve alteração antes de salvar
- Atualização automática da lista

### 3. Marcar como Concluída
- Clique no texto da tarefa para alternar status
- **Optimistic Update**: UI atualiza instantaneamente
- Indicador visual:
  - Barra verde (concluída) ou vermelha (pendente)
  - Texto riscado (line-through) quando concluída

### 4. Deletar Tarefa
- Ícone de lixeira (🗑️) para deletar individualmente
- Confirmação via AlertDialog
- Remoção imediata da lista após confirmação

### 5. Filtros
- **Todas**: Exibe todas as tarefas
- **Não Finalizadas**: Apenas pendentes
- **Concluídas**: Apenas finalizadas
- Badges interativos com ícones

### 6. Estatísticas
- Contador: "X de Y tarefas concluídas"
- Barra de progresso visual (%)
- Total de tarefas cadastradas

### 7. Limpeza em Massa
- Botão para deletar todas as tarefas concluídas
- Confirmação antes de executar
- Útil para manutenção periódica

### 8. Temas
- **Multiplos Temas**: Opções disponíveis tanto em light como em dark 

---

## 🧠 Decisões Técnicas


### Optimistic Updates

A função `handleToggleTask` implementa **optimistic updates**:
```typescript
const handleToggleTask = async (taskId: string) => {
  const prevousTaks = [...taskList]; // Backup
  try {
    // Atualiza UI imediatamente
    setTaskList((prev) => {
      return prev.map((task) => 
        task.id === taskId ? { ...task, done: !task.done } : task
      );
    });
    // Sincroniza com o banco
    await updateTaskStatus(taskId);
  } catch (error) {
    setTaskList(prevousTaks); // Reverte em caso de erro
    throw error;
  }
};
```

**Benefício**: A interface responde instantaneamente, melhorando a UX.

### Gerenciamento de Estado

- **Estado Local (useState)**: Gerencia lista de tarefas no cliente
- **Sincronização**: `handleGetTasks` busca dados atualizados após cada mutação
- **Filtros**: Implementados com `useEffect` que reage às mudanças de `currentFilter`

---

## 🎯 Fluxo de Dados

```
┌─────────────┐
│   Cliente   │
│  (React)    │
└──────┬──────┘
       │
       │ 1. Ação do usuário (ex: adicionar tarefa)
       ↓
┌──────────────┐
│ Server Action│  2. Valida e processa
│  (Next.js)   │
└──────┬───────┘
       │
       │ 3. Executa query
       ↓
┌──────────────┐
│    Prisma    │  4. Comunica com PostgreSQL
│     ORM      │
└──────┬───────┘
       │
       │ 5. Retorna dados
       ↓
┌──────────────┐
│  PostgreSQL  │
│   Database   │
└──────────────┘
       │
       │ 6. Atualiza estado
       ↓
┌──────────────┐
│   Cliente    │  7. Re-renderiza UI
│  (React)     │
└──────────────┘
```

---

## 📸 Screenshots

> **Nota**: Adicione prints do seu projeto aqui após o deploy!

### Light Mode
![Light Mode](./screenshots/lightmode.png)

### Dark Mode
![Dark Mode](./screenshots/darkmode.png)


---
