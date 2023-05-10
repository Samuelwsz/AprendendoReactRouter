<h1>Como iniciar o projeto</h1>
<p>Após baixar o projeto, abra o terminal e digite npm i para instalar as dependências do projeto. Após a instalação, digite npm run dev no terminal para iniciar o servidor de desenvolvimento. Neste projeto foi utilizado o Vite como ferramenta de build, tornando a inicialização do servidor mais rápida e eficiente do que o método tradicional utilizando o npm start.
</p>
<p></p>



<h1>O que aprendi</h1>
<p>Nesse curso de React da Alura, tive a oportunidade de aprender sobre o uso do React Router, uma biblioteca que permite criar rotas para uma aplicação em React. Para utilizar o React Router, é necessário importar os componentes BrowserRouter, Routes e Route. O BrowserRouter é um componente que deve ser colocado em volta de toda a aplicação para que o React Router possa controlar as rotas da mesma. O Routes é o componente que permite alternar entre diferentes rotas e o Route é utilizado para renderizar um determinado componente (através do atributo element) em um caminho específico (através do atributo path). Além de aprender a configurar uma rota para uma página de erro 404 caso a URL não direcione para a página “Inicial” ou para a página "Sobre mim". Essa página de erro pode ser criada como um componente e configurada através do Route com o atributo path="*", que significa que essa rota será acionada caso nenhuma outra rota seja encontrada.
</p>

```
npm install react-router-dom
```

```
function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />  
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}
```



<p>Aprendi sobre as Single Page Applications (SPAs), que consistem em uma única página HTML que é atualizada dinamicamente pelo JavaScript. Com a utilização do React Router, é possível criar rotas para as diferentes partes da aplicação sem que haja a necessidade de carregar uma nova página. Para manter o comportamento de uma SPA e evitar o carregamento desnecessário de páginas, o React Router disponibiliza o componente Link. Onde é possível criar links que navegam entre as diferentes rotas da aplicação sem que haja a necessidade de recarregar a página. Outro recurso importante é o hook useLocation, que permite obter informações sobre a rota atual da aplicação, como o caminho da URL e os parâmetros da rota. Além disso, o React Router também disponibiliza o componente NavLink, que é uma variação do Link e fornece acesso direto à informação de se o link está ativo ou não. Esse componente é útil para estilizar os links de acordo com o estado ativo ou inativo da rota.
</p>

```
<Route path="/" element={<PaginaPadrao />}>
    <Route path="/" element={<Inicio />} />
    <Route path="/sobremim" element={<SobreMim />} />
</Route>
```


<p>Aprendi sobre o conceito de rotas aninhadas, que consiste em organizar as páginas em uma hierarquia de rotas. Nesse modelo, as rotas filhas herdam a estrutura de uma rota pai e aproveitam a mesma estrutura para renderizar seus componentes. Nesse projeto a rota pai, chamada de PaginaPadrao, possui uma estrutura comum que é compartilhada entre suas rotas filhas Início e SobreMim. Para que as rotas filhas sejam renderizadas dentro da estrutura da rota pai, é utilizado o componente Outlet do React Router. Com esse conceito, é possível simplificar a estrutura das rotas e tornar a navegação da aplicação mais intuitiva para o usuário.
</p>

```
//routes.jsx
<Route path="/" element={<PaginaPadrao />}>
    <Route path="/" element={<Inicio />} />
    <Route path="/sobremim" element={<SobreMim />} />
</Route>

//PaginaPadrao/index.jsx
import { Outlet } from "react-router-dom"
import Banner from "../Banner"

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}

```
<p>As rotas dinâmicas são usadas quando queremos mudar o conteúdo de uma página de acordo com informações passadas na URL, como no caso de passar o id de um post. Para criar uma rota dinâmica, usamos a sintaxe /caminho/:nomedoparametro no atributo path da Route. Já o hook useParams é usado para obter os parâmetros passados para uma rota dinâmica. E por fim utilizar o hook useNavigate, onde é possível utilizá-lo para fazer navegações mais complexas, como voltar para a página anterior no navegador.
</p>

```
//Volta para o inicio
<div className={styles.botaoContainer} onClick={() => navegar("/")}>
     <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
</div>
```
