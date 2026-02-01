# Previsão do Tempo --- React + OpenWeather

Aplicação web desenvolvida em React.js que permite consultar a previsão
do tempo de qualquer cidade do mundo, utilizando a API do OpenWeather.\
A aplicação também exibe automaticamente o clima da localização atual do
utilizador, oferecendo uma experiência mais prática e intuitiva.

------------------------------------------------------------------------

## Funcionalidades

-   Pesquisa de clima por nome da cidade\
-   Detecção automática da localização do utilizador\
-   Exibição da temperatura atual em graus Celsius\
-   Estado do tempo (nublado, sol, chuva, etc.)\
-   Umidade, sensação térmica e pressão atmosférica\
-   Previsão dos próximos 5 dias\
-   Interface simples, moderna e responsiva

------------------------------------------------------------------------

## Como funciona

-   Ao abrir a aplicação:
    -   O sistema tenta obter a localização do utilizador
    -   Caso permitido, o clima local é exibido automaticamente
-   O utilizador também pode:
    -   Pesquisar qualquer cidade manualmente
    -   Visualizar a previsão detalhada e estendida

Se a localização não for permitida, a aplicação continua funcional
normalmente.

------------------------------------------------------------------------

## Tecnologias utilizadas

-   React.js
-   Axios (requisições HTTP)
-   OpenWeather API
-   CSS puro
-   Geolocation API (Browser)

------------------------------------------------------------------------

## Estrutura do projeto

    src/
    ├── components/
    │   ├── WeatherInformations/
    │   ├── WeatherInformations5Days/
    │   └── WeatherInformationsNone/
    ├── App.jsx
    ├── App.css
    └── main.jsx

------------------------------------------------------------------------

## Configuração da API

Este projeto utiliza a OpenWeather API.

1.  Crie uma conta em: https://openweathermap.org/

2.  Gere sua API Key

3.  Substitua a chave no código:

``` js
const key = "SUA_API_KEY_AQUI";
```

------------------------------------------------------------------------

## Como executar o projeto

### 1. Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/previsao-do-tempo-react.git
```

### 2. Acessar a pasta do projeto

``` bash
cd previsao-do-tempo-react
```

### 3. Instalar as dependências

``` bash
npm install
```

### 4. Executar a aplicação

``` bash
npm run dev
```

A aplicação estará disponível em:

    http://localhost:5173

------------------------------------------------------------------------

## Observações importantes

-   Para melhor experiência, permita o acesso à localização
-   A aplicação funciona mesmo sem permissão de localização
-   Ideal para estudos, portfólio ou projetos iniciais em React

------------------------------------------------------------------------

## Melhorias futuras

-   Cache de dados com localStorage
-   Alternar entre graus Celsius e Fahrenheit
-   Tema dinâmico baseado no clima
-   Lista de cidades favoritas
-   Deploy público (Vercel ou Netlify)

------------------------------------------------------------------------

## Contato

-   **WhatsApp:** +244 932 138 572\
-   **Email:** agostinholborges24@gmail.com\
-   **LinkedIn:** https://www.linkedin.com/in/agostinho-l-borges/\
-   **GitHub:** https://github.com/agostinho-borges24

------------------------------------------------------------------------

## Licença

Este projeto é de uso pessoal.\
Sinta-se à vontade para se inspirar, mas não copiar integralmente sem
autorização.

------------------------------------------------------------------------

© 2026 Agostinho Borges. Todos os direitos reservados.

------------------------------------------------------------------------

Se gostaste do projeto, deixa uma estrela.
