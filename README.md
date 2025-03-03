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
cd FoodExplorerFrontend
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

- **Login**: Acesse a página inicial e informe e-mail e senha para entrar no sistema</br>
<img width="233" alt="Login-screen" src="https://github.com/user-attachments/assets/dd5193a8-3376-47cc-ad33-e6b21ce1b887" /></br>
    <p></p>

- **Criação de conta**: Na tela de login, clique em "Criar uma conta" para registrar-se como cliente </br>
<img width="225" alt="create_account" src="https://github.com/user-attachments/assets/a9855d7d-2e1e-4634-af59-2cd40184b2a4" /></br>
    <p></p>

#### Interface

- **Mudança de tema**: Clique no ícone de sol/lua no cabeçalho para alternar entre os modos claro e escuro. </br>
  <img width="124" alt="theme_moon" src="https://github.com/user-attachments/assets/f4fbb20e-8e5c-4f7f-82fe-3fe20bacf5d4" />
  <img width="124" alt="theme_sun" src="https://github.com/user-attachments/assets/8047db42-9e60-494b-87b1-32df664a13a5" />

### Funcionalidades para Administradores

Após fazer login como administrador:

- **Adicionar pratos**: Clique em "Novo prato" para acessar o formulário de criação, onde você pode:</br>
  <img width="780" alt="Formulario_newdish" src="https://github.com/user-attachments/assets/bc8d77a2-877d-4e7d-bc34-07897730b277" /></br>

          - Fazer upload de imagens
          - Preencher nome, categoria, preço e descrição
          - Adicionar ingredientes
          - Aplicar descontos

- **Editar pratos**: Clique no lápis localizado no canto superior esquerdo para ter acesso às opções de edição: </br>
  <img width="780" alt="Formulario_editdish" src="https://github.com/user-attachments/assets/aee48fc5-faaa-42da-84a0-1b78f480495b" /></br>

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

O deploy foi realizado no link abaixo:
[Food Explorer App](https://foodexplorer-seven.vercel.app/)

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/csrprojects/FoodExplorerBackend/blob/main/LICENSE.md) para mais detalhes.) para mais detalhes.
