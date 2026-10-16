# 🎮 Arquivo Gamer

O **Arquivo Gamer** é uma aplicação web interativa desenvolvida em React.js + Vite, criada como uma central definitiva para a cultura gamer. O projeto combina a preservação e navegação histórica pela evolução dos consoles e personagens marcantes com recursos sociais modernos, como fórum com salas públicas e privadas, chat direto entre usuários, vitrine de produtos e feed de notícias de games em tempo real.

---

## 🚀 Tecnologias Utilizadas

- **React.js**: Biblioteca principal para a construção da interface do usuário baseada em componentes.
- **Vite**: Ferramenta de build rápida para desenvolvimento web moderno.
- **JavaScript (ES6+)**: Lógica da aplicação e manipulação de estado.
- **CSS3 Puro (Vanilla CSS)**: Estilização 100% personalizada com tema *cyberpunk/néon*, sem dependência de bibliotecas externas (Flexbox, CSS Grid, variáveis CSS e `@keyframes`).
- **Hooks do React (`useState`, `useEffect`, `useRef`)**: Gerenciamento de estado local, navegação dinâmica, consumo de APIs e listeners globais.
- **RSS to JSON API**: Integração para obtenção e parsing do feed de notícias de portais parceiros em tempo real.
- **Vercel**: Plataforma para hospedagem contínua e deploy na nuvem.

---

## 🌟 Principais Funcionalidades

### 🏠 1. Home & História dos Games
- **Linha do Tempo de Plataformas:** Navegação detalhada por **PlayStation**, **Xbox**, **Nintendo**, **PC Gaming** e **Mobile**.
- **Acordeão de Consoles:** Exibição interativa das gerações de consoles com fotos, fatos históricos e lista de jogos emblemáticos.
- **Galeria de Personagens Lendários:** Cards interativos detalhando a trajetória e o impacto cultural de ícones como Mario, Sonic, Kratos, Master Chief e Lara Croft.

### 💬 2. Fórum de Comunidades & Sistema Social
- **Salas Públicas e Privadas:** Suporte a comunidades abertas e comunidades restritas que exigem solicitação de acesso.
- **Painel do Administrador:** Interface simulada para aprovação ou rejeição de solicitações de entrada em comunidades privadas.
- **Criação de Comunidades:** Formulário integrado para usuários criarem suas próprias salas personalizadas.
- **Discussões e Respostas:** Suporte completo para criar publicações, responder a comentários e excluir conteúdos próprios.

### ✉️ 3. Chat Privado (Mensagens Diretas) & Amizades
- **Rede de Amigos:** Possibilidade de adicionar outros usuários da comunidade ao clicar diretamente nos seus nomes dentro do fórum.
- **Mensagens Privadas em Tempo Real:** Aba de bate-papo exclusivo para troca de mensagens diretas entre amigos adicionados.

### 📰 4. Feed de Notícias de Games
- Consumo automático de fontes RSS atualizadas sobre a indústria dos videogames, eSports e lançamentos (Voxel, IGN, Eurogamer, Adrenaline).

### 🛒 5. Vitrine de Produtos Gamer
- Guia visual de produtos como *Collectibles*, *Celulares Gamer*, *Peças de PC* e *Periféricos*.
- **Filtros por Categoria**, links diretos para compras e sistema interativo de **Lista de Desejos (Wishlist)**.

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes padrão do Node) ou **yarn**

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/igleallf/Arquivo-Gamer.git](https://github.com/igleallf/Arquivo-Gamer.git)

```

2. **Acessar a pasta do projeto:**
```bash
cd Arquivo-Gamer

```


3. **Instalar as dependências:**
```bash
npm install

```


4. **Iniciar o servidor de desenvolvimento:**
```bash
npm run dev

```


5. **Acessar no navegador:**
Abra o endereço exibido no seu terminal (geralmente `http://localhost:5173`).

---

## 📁 Estrutura do Projeto

```text
Arquivo-Gamer/
├── public/              # Arquivos públicos e ícones
├── src/
│   ├── App.jsx          # Componente principal contendo as rotas e regras de negócio
│   ├── App.css          # Estilização completa do projeto em CSS3
│   ├── data.js          # Base de dados em JS (plataformas, jogos, produtos e posts)
│   └── main.jsx         # Ponto de entrada do React/Vite
├── index.html           # Documento HTML principal
├── package.json         # Dependências e scripts do projeto
└── vite.config.js       # Configurações do Vite

