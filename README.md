Collecting workspace information# Food Explorer - Frontend

## Apresentação

Este projeto é o frontend da aplicação Food Explorer, uma plataforma digital para um restaurante fictício. A aplicação permite a interação do cliente com o cardápio digital, além de fornecer uma interface administrativa para o gerenciamento de pratos. O frontend foi desenvolvido para consumir a API do Food Explorer, proporcionando uma experiência de usuário intuitiva e responsiva.

## Tecnologias Utilizadas

- React 18
- Vite

## Instalação/Deploy

### Requisitos Mínimos

- Node.js (versão 18.x ou superior)
- NPM (versão 9.x ou superior)
- Conexão com a API Food Explorer

### Procedimento de Instalação

1. Clone o repositório:

```sh
git clone https://github.com/csrprojects/FoodExplorerFrontend.git
```

2. Acesse o diretório do projeto:

```sh
cd food-explorer-frontend
```

3. Instale as dependências:

```sh
npm install
```

4. Configure as variáveis de ambiente:
    - Crie um arquivo .env na raiz do projeto
    - Adicione as configurações baseando-se no arquivo .env.example:

```
VITE_API_URL=http://URL:PORT
VITE_PORT=PORT
```

5. Inicie a aplicação em modo de desenvolvimento:

```sh
npm run dev
```

### Deploy

Para realizar o deploy da aplicação:

1. Construa a versão de produção:

```sh
npm run build
```

2. O diretório `dist` será gerado com os arquivos otimizados para produção
3. Utilize um serviço de hospedagem como Netlify, Vercel ou outro de sua preferência para servir os arquivos estáticos

## Uso

### Funcionalidades Gerais

#### Autenticação

- **Login**: Acesse a página inicial e informe e-mail e senha para entrar no sistema
- **Criação de conta**: Na tela de login, clique em "Criar uma conta" para registrar-se como cliente

#### Interface

- **Mudança de tema**: Clique no ícone de sol/lua no cabeçalho para alternar entre os modos claro e escuro

### Funcionalidades para Administradores

Após fazer login como administrador:

- **Adicionar pratos**: Clique em "Novo prato" para acessar o formulário de criação, onde você pode:

    - Fazer upload de imagens
    - Preencher nome, categoria, preço e descrição
    - Adicionar ingredientes
    - Aplicar descontos

- **Editar pratos**: Ao clicar em um prato existente, você terá acesso às opções de edição:
    - Modificar todas as informações do prato
    - Excluir o prato do menu

### Funcionalidades para Clientes

Após fazer login como cliente:

- **Navegação pelo cardápio**: A página inicial exibe os pratos organizados por categorias
- **Busca**: Utilize a barra de pesquisa para encontrar pratos por nome ou ingredientes
- **Favoritos**: Marque seus pratos preferidos clicando no ícone de coração
- **Visualização detalhada**: Clique em um prato para ver mais informações

- **Pedidos**:

    - **Seleção de pratos**: Use os botões de + e - para ajustar a quantidade desejada
    - **Carrinho**: Adicione itens ao pedido clicando em "Adicionar"
    - **Gerenciamento de pedido**: Acesse o ícone do pedido no cabeçalho para:
        - Visualizar itens selecionados
        - Ajustar quantidades
        - Remover itens
        - Ver valor total

- **Pagamento**:
    - Selecione o método de pagamento (crédito, débito ou PIX)
    - Confirme o pedido clicando em "Pagar"
    - Acompanhe a confirmação do pagamento
    - Opção para cancelar o pedido antes da finalização

A aplicação é responsiva e se adapta a diferentes tamanhos de tela, proporcionando uma experiência consistente em desktops, tablets e smartphones.

# Deploy

O deploy da aplicação esta disponível no endereço:

### Credenciais para teste

Para testar a aplicação, você pode utilizar as seguintes credenciais:

**Admin:**

- Email: admin@foodexplorer.com
- Senha: fplxAdmin001

**Cliente:**

- Email: cliente@email.com
- Senha: fplxClient002

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/csrprojects/FoodExplorerBackend/blob/main/LICENSE.md) para mais detalhes.) para mais detalhes.
