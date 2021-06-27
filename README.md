# Letmeask - NLW-6 TOGETHER

Este é o projeto que foi criado durante a NLW 6 Together evento oferecido pela [rockeseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg).

Para acessar o aplicativo desenvolvido [**clique aqui**](https://letmeask-e3649.web.app/).

## Sobre

Letmeask é uma aplicação ReactJS integrado com o firebase, para criar salas de bate-papo aonde produtores de conteudos poderam criar salas e convidar seus views para responder suas perguntas pela plataforma.

+ **Funcionalidades da aplicação**
  
  + Para criar ou entrar nas salas precisa esta autenticado;
  + Qualquer pessoa poderá criar salas desde que estejam autenticadas;
  + A pessoa que criou a sala poderá visualizar o código da sala para convida outra pessoas;
  + Os views poderam enviar perguntas e dar like em outras pergunta;
  + Apenas a pessoa que criou a sala poderá excluir a sala;
  + A pessoa que criou a sala poderá marcar as perguntas como: destacada, respondida ou exclui-la.

## Tecnologias

+ ReactJS
+ Typescrypt
+ Firebase

## Como instalar e rodar no seu computador?

1. baixe e entre no diretorio do projeto pelos seguintes comandos comando:
```bash
  # baixe o projeto pelo github
  git clone https://github.com/MarKus-del/nlw-together-Letmeask

  # entre no diretorio do projeto
  cd nlw-together-Letmeask
```

2. baixe as dependencias do projeto de acordo com seu gerenciador de pacotes:
```bash
  # Usando NPM
  npm install

  # Usando YARN
  yarn install
```

3. crie sua conta no firebase seguindo a documentação do [firebase](https://firebase.google.com/docs/web/setup?hl=pt-br). depois crie um arquivo .env.local na raiz do projeto contendo as seguinte variaveis do seu projeto firebase:

```env
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

4. Va em autenticação no [console do firebase](https://console.firebase.google.com/u/0/?hl=pt-br) e ative a autenticação pelo google.

5. Va até o [console do firebase](https://console.firebase.google.com/u/0/?hl=pt-br) e crie um database realtime seguindo o fluxo que o site demonstra, depois va em regras e troque pelo conteudo que esta no arquivo databases.rules.json.

5. Depois disso seu projeto no firebase estará configurado rode o seguinte comando para iniciar sua aplicação ReactJS.

```bash
  # Usando NPM 
  npm start

  # Usando YARN
  yarn start
```

