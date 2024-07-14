---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: time-management-1
title: Gerenciamento De Tempo Para Pessoas De Sucesso.

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Filosofia e pensamento
# multiple tag entries are possible
tags:
  [
    gerenciamento de tempo,
    planeamento estratégico,
    gestão de Pessoas,
    auto gerenciamento,
  ]
# thumbnail image for post
img: "https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png"
# disable comments on this page
# comments_disable: true

# publish date
date: 2024-07-14 06:00:00
# seo
# if not specified, date will be used.
#meta_modify_date: 2021-08-10 11:32:53 +0900
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
# published: false
---

<style>
    container{
              float:left;
			  width:100%;
			  margin-bottom: 10px;			                
             }
	image-container{
		width: 30%;
		float:left;
		border: hidden; 
		margin: 20px;
	}
	img{
		object-fit:contain;	  	
	}
    container-text{	
       /* width: 40%; 
        margin-left: 5px;*/
        display: block;
        margin-top: 20px; 
        padding-top: 1 px;
        /* border: solid 1px; */
	}

    ol{
        list-style-type: upper-roman;
        
    }

   /* used as <p class="vertical"></p> instead I can also use <blockquote> 
     or > in md
      */
    video-container{   
		width: 60%;
		float:left;
		border: hidden; 
		margin: 20px;
    }

    iframe{
       position: relative; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        object-fit-contain;
    }


	.vertical{
    border-left: 4px solid;
    border-right: 4px solid;
    border-radius: 25px;
    color: blue;
    background-color: #111111;
	margin;0 0 0 -3;
    padding:0 0 0 1em

  }
  vertical-text{
	color: #bbbbbb;
  
  font-family: cursive;
  }
    /* frames text in middle of page */
  framed-text{
    display:block;
    border:inset;
    width:90%;
    margin:0.5em auto 0.5em auto;
    padding:0.5em;
  }
    unframed-text{
    display:block;
    width:90%;
    margin:0.5em auto 0.5em auto;
    padding:0.5em;

  }
   .add-right-shadow {
    border-bottom:solid 2px;
    border-right:solid 2px;
    box-shadow:5px 10px 18px;
    margin-bottom:2em;
  }
/** on hover paragraph **/
  .my-p{
        display:inline;
        color:#5ba487;
  }
  .my-p:hover{
    text-decoration: underline;
    cursor:pointer;
  }

  /** Center an element **/
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
 /** align element to the left **/
  .left{
  display: block;
  align:left
  margin: 1em;
  /*border:solid 1px; */
  }

  /** coffee **/
  .container {
  width: 300px;
  height: 280px;
  position: relative;
  top: calc(50% - 140px);
  left: calc(50% - 150px);
}
.coffee-header {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ddcfcc;
  border-radius: 10px;
}
.coffee-header__buttons {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  background-color: #282323;
  border-radius: 50%;
}
.coffee-header__buttons::after {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -8px;
  left: calc(50% - 4px);
  background-color: #615e5e;
}
.coffee-header__button-one {
  left: 15px;
}
.coffee-header__button-two {
  left: 50px;
}
.coffee-header__display {
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: #9acfc5;
  border: 5px solid #43beae;
  box-sizing: border-box;
}
.coffee-header__details {
  width: 8px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9b9091;
  box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
}
.coffee-medium {
  width: 90%;
  height: 160px;
  position: absolute;
  top: 80px;
  left: calc(50% - 45%);
  background-color: #bcb0af;
}
.coffee-medium:before {
  content: "";
  width: 90%;
  height: 100px;
  background-color: #776f6e;
  position: absolute;
  bottom: 0;
  left: calc(50% - 45%);
  border-radius: 20px 20px 0 0;
}
.coffe-medium__exit {
  width: 60px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 30px);
  background-color: #231f20;
}
.coffe-medium__exit::before {
  content: "";
  width: 50px;
  height: 20px;
  border-radius: 0 0 50% 50%;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 25px);
  background-color: #231f20;
}
.coffe-medium__exit::after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: -30px;
  left: calc(50% - 5px);
  background-color: #231f20;
}
.coffee-medium__arm {
  width: 70px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: #231f20;
}
.coffee-medium__arm::before {
  content: "";
  width: 15px;
  height: 5px;
  position: absolute;
  top: 7px;
  left: -15px;
  background-color: #9e9495;
}
.coffee-medium__cup {
  width: 80px;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  background-color: #FFF;
  border-radius: 0 0 70px 70px / 0 0 110px 110px;
}
.coffee-medium__cup::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: -13px;
  border: 5px solid #FFF;
  border-radius: 50%;
}
@keyframes liquid {
  0% {
    height: 0px;  
    opacity: 1;
  }
  5% {
    height: 0px;  
    opacity: 1;
  }
  20% {
    height: 62px;  
    opacity: 1;
  }
  95% {
    height: 62px;
    opacity: 1;
  }
  100% {
    height: 62px;
    opacity: 0;
  }
}
.coffee-medium__liquid {
  width: 6px;
  height: 63px;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: calc(50% - 3px);
  background-color: #74372b;
  animation: liquid 4s 4s linear infinite;
}
.coffee-medium__smoke {
  width: 8px;
  height: 20px;
  position: absolute;  
  border-radius: 5px;
  background-color: #b3aeae;
}
@keyframes smokeOne {
  0% {
    bottom: 20px;
    opacity: 0;
  }
  40% {
    bottom: 50px;
    opacity: .5;
  }
  80% {
    bottom: 80px;
    opacity: .3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
}
@keyframes smokeTwo {
  0% {
    bottom: 40px;
    opacity: 0;
  }
  40% {
    bottom: 70px;
    opacity: .5;
  }
  80% {
    bottom: 80px;
    opacity: .3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
}
.coffee-medium__smoke-one {
  opacity: 0;
  bottom: 50px;
  left: 102px;
  animation: smokeOne 3s 4s linear infinite;
}
.coffee-medium__smoke-two {
  opacity: 0;
  bottom: 70px;
  left: 118px;
  animation: smokeTwo 3s 5s linear infinite;
}
.coffee-medium__smoke-three {
  opacity: 0;
  bottom: 65px;
  right: 118px;
  animation: smokeTwo 3s 6s linear infinite;
}
.coffee-medium__smoke-for {
  opacity: 0;
  bottom: 50px;
  right: 102px;
  animation: smokeOne 3s 5s linear infinite;
}
.coffee-footer {
  width: 95%;
  height: 15px;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 47.5%);
  background-color: #41bdad;
  border-radius: 10px;
}
.coffee-footer::after {
  content: "";
  width: 106%;
  height: 26px;
  position: absolute;
  bottom: -25px;
  left: -8px;
  background-color: #000;
}

</style>

<blockquote>
<h2>Introdução</h2> 
<p>
É domingo de manhã.<br>
Depois de alimentar os gatos esta manhã, cuidei da ninhada e fiz duas xícaras de café.<br>
Um para minha esposa e outro para mim.<br>
A TV está no <a href="https://www.youtube.com/@WildEarth">WildEarth.</a><br>
Meus pensamentos voltam ao dia anterior.<br>
Eu tinha saído de bicicleta de manhã cedo.<br>
 Peguei minha garrafa cheia de água fresca que obtemos em uma nascente perto de nós e <a href="https://youtu.be/g2wZQcXPE7c?si=vG9WBtKiHSHcuZbh"> pedalei até o topo da montanha.</a >
 na minha área.<br>
 Peguei o livro de Arthor Conan Doyle, que me foi dado de presente pela minha linda filha.<br>
Li a próxima história do livro, <a href="https://en.wikipedia.org/wiki/The_Adventure_of_Charles_Augustus_Milverton">A aventura de Charles Augustus Milverton</a><br>
Adoro ler essas histórias, pois são curtas, dá para ler uma em uma hora ou menos.<br>
Agora você pode perguntar: o que isso tem a ver com gerenciamento de tempo?<br>
Bem, a história, talvez nem tanto, mas se você continuar lendo, poderá entender o que quero dizer.<br>
</p>
<p>
Mais tarde, naquele mesmo dia, olhando minhas redes sociais, percebi que tinha uma mensagem no LinkedIn.<br>
Era da equipe do Linkedin, me convidando para colaborar em artigos.<br>
Aqui está parte da mensagem que recebi. <br>
</p>
<p>
<i>
Olá João, estamos reunindo os principais especialistas para compartilhar seus conhecimentos de uma maneira nova e empolgante: artigos colaborativos. Devido à sua experiência, selecionamos você para ser um dos primeiros colaboradores.
</i>
</p>
Bem, não sou de forma alguma um especialista no assunto, mas devo dizer que isso inflou um pouco meu "ego".<br>
Bem, passei mais de 20 anos em um cargo de gestão em uma empresa de telecomunicações, então decidi dar meus cinco centavos.<br>
Olhando a lista de artigos que eles querem que eu escolha, me deparei com este - <i>Veja como você pode gerenciar tarefas e prazos de maneira eficaz em sua carreira.</i><br>
Agora é sobre isso que vou escrever neste blog.<br>
Em seguida, compartilharei minhas idéias sobre esse assunto com a equipe do Linkedin ou, melhor ainda, compartilharei um link para esta minha "blog", <strong>uma atividade do segundo trimestre</strong> <br>
Antes de carregar um, vou deixar vocês, (meus leitores de confiança), por um tempo, pois tenho um encontro marcado com minha parceira de "gym", (Pipoca) <a href="https://youtu.be/TgIu8DcYLFI ?si=gSftqWQyQDIlXqhz">na academia</a>.
 <details>
        <summary style="margin-bottom:1em">Faça uma pausa, faça exercícios ou apenas tome uma xícara de café fresco e, quando estiver pronto, estarei aqui com o restante deste artigo.<br>
        <span class="my-p">Clique/toque</span> aqui para se juntar a mim</summary>
        <framed-text>
        <div  style="margin:0.5em auto 0.5em auto;width:300px;height:280px;">
            <div class="container">
              <div class="coffee-header">
                <div class="coffee-header__buttons coffee-header__button-one"></div>
                <div class="coffee-header__buttons coffee-header__button-two"></div>
                <div class="coffee-header__display"></div>
                <div class="coffee-header__details"></div>
              </div>
              <div class="coffee-medium">
                <div class="coffe-medium__exit"></div>
                <div class="coffee-medium__arm"></div>
                <div class="coffee-medium__liquid"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                <div class="coffee-medium__cup"></div>
              </div>
                <div class="coffee-footer"></div>
            </div>
        </div>
            <div class="image-container">
              <img src="https://i.stack.imgur.com/YIcbV.png" alt="menus">
            </div>
            <p style="margin-top:1em">
              <span style="color:#5ba487">Clique/toque no texto nesta cor para exibir uma seção oculta com mais informações</span><br>
              <span style="color:#3389de">Observe que você pode clicar/tocar no texto desta cor para direcioná-lo às referências</span><br>
              Você também pode alternar o esquema de cores no canto inferior esquerdo.<br>
              💡= tema claro<br>
              ☾ = tema escuro<br>
              Dependendo do tamanho da tela, pode ser necessário ativar o "Menu Hambúrguer" para que a opção apareça.<br>
              Neste site você também pode optar por ler este blog em português, selecione Pt [En <strong>Pt</strong>]<br>
              Agora, se você quiser ler este blog, ou um link que você abriu em outro idioma, basta selecionar traduzir no menu do seu navegador.<br>
              No Chrome é um menu "Kebab".<br>
            </p>
            <p>
            Então, você tomou seu café, relaxe e aproveite o blog.<br>
            ¯\_(ツ)_/¯<br>
            </p>        
        </framed-text>        
    </details>
</blockquote>
<blockquote>
<h2>Colocar as coisas mais importantes em primeiro lugar</h2>
<p>
Tenho certeza de que você já ouviu isso antes, mas você realmente pensou um pouco sobre isso?<br>
Quando você coloca "as primeiras coisas em primeiro lugar", as <strong>coisas</strong> que você coloca em prática são de extrema importância.<br>
Deixe-me compartilhar algo com você.<br>
</p>
</blockquote>
<framed-text>
<h3>Preparando-me para minhas auditorias anuais</h3>
<div class="center" style="width:80%">
  <img src="https://www.indiafilings.com/learn/wp-content/uploads/2023/01/shutterstock_1479487709-1.jpg" alt="What are the Types of Audits?" style="display:block;width:100%">
  <p style="text-align:center">Quais são os tipos de auditorias?</p>
</div>
Quando eu trabalhava como gerente em uma empresa de telecomunicações na África do Sul, duas senhoras visitavam nossos escritórios uma vez por ano para fazer aquela <strong>temida</strong> auditoria.<br>
Foi uma auditoria abrangente que cobriu todas as nossas responsabilidades (de gestão), desde Saúde e Segurança, Finanças, Políticas da Empresa, Desenvolvimento de Pessoal e muito mais.<br>
Você escolhe e ele estará na auditoria.<br>
Estas auditorias foram fundamentais para nós, gestores, pois faziam parte dos nossos "KPI's" (Indicadores Chave de Performance) e tinham um peso pessoal nas nossas avaliações finais com o nosso supervisor.<br>
Agora, você sabe, aquela sensação que fica no fundo do estômago, bem, eu prometi a mim mesmo que não teria essa sensação no ano seguinte, quando eles visitassem minha seção novamente. <br>
Então, o que eu fiz?<br>
Falei com Theo, meu colega.<br>
Nós dois ocupávamos o primeiro andar da central de telecomunicações e ambos éramos gerentes.<br>
Theo, Grace (nosso suporte administrativo) e eu reservamos algumas horas nas manhãs de sexta-feira para trabalhar em todos os requisitos necessários para a preparação para nossas auditorias.<br>
Tornamos tudo divertido, um de nós, alternativamente, trazendo muffins de mirtilo para as sessões de sexta-feira. <br>
Planeamos e priorizamos nosso trabalho, certificando-nos de colocar em prática todos os itens que precisavam de atenção primeiro, trabalhando em cada item até que tudo estivesse no lugar.<br>
Usei minhas habilidades como programador e projetei uma página da Web, postando todas as políticas, instruções de trabalho, briefings de H@S, etc., que eram relevantes para o meu pessoal nesta web.<br>
Isso proporcionou ao meu pessoal acesso rápido e fácil a toda a documentação relevante necessária.<br>
Quando olhamos novamente, um ano havia se passado e as duas senhoras (Kelly e Mandy) estavam de volta como um relógio, com suas planilhas de auditoria.<br>
Quer saber?<br>
Nós três éramos todos sorrisos enquanto eles tiquetaqueavam.<br>
Pude ver que eles ficaram impressionados. <br>
</framed-text>
<blockquote>
<p>
Agora, você pode perguntar, como é possível que minha agenda de trabalho esteja tão lotada?<br>
Não tenho tempo para toda essa porcaria.<br>
Bem, a primeira coisa que você precisa fazer é<strong> priorizar</strong><br>
Do contrário, tudo o que você estará fazendo é “apagar incêndios”.
</p>
</blockquote>
<blockquote>
<h2>Priorizando</h2>
<p>
Por um lado, ser engenheiro de TI e ter paixão por codificação, uma habilidade que nos foi ensinada é DRY (não se repita).
</p>
<p>
Agora, você pode dizer.<br>
Como ele tem <strong>TEMPO</strong> para sentar-se numa manhã de sexta-feira, tomar café e comer muffins e se preparar para sua auditoria anual.<br>
Sextas-feiras são piores que segundas-feiras para mim no trabalho.<br>
<i>Espere um pouco, não acabei de repetir?</i><br>
Isso me lembra uma história que ouvi há muitos anos em um de meus cursos de pós-graduação.<br>
</p>
</blockquote>
<framed-text>
<h3>Por que os bombeiros gastam tão pouco tempo combatendo incêndios</h3>
<div class="center" style="width:80%">
  <img src="https://static01.nyt.com/images/2020/01/31/world/00oz-firefighters-1sub/merlin_168105237_3f8eeb90-0b8a-4dcb-9e6f-4072cc8b451c-superJumbo.jpg?quality=75&auto=webp" alt="Australia’s Volunteer Firefighters Are Heroes. But Are They Enough?" style="display:block;width:100%">
  <p style="text-align:center">Os bombeiros voluntários da Austrália são heróis. Mas eles são suficientes?</p>
</div>
<p>
É sobre uma unidade de combate a incêndios que ganhou repetidamente o prestigiado prêmio nos EUA como a melhor unidade de combate a incêndios.<br>
Isso não aconteceu porque eles eram os mais ocupados e tinham mais incêndios.<br>
Na verdade, esta unidade gasta menos do seu tempo disponível respondendo a emergências em todo o país.<br>
Também não é porque eles estavam operando em uma área semi ou rural.<br>
Na verdade, eles estavam no meio de uma das áreas metropolitanas mais movimentadas.<br>
Então, como eles conseguiram isso?<br>
</p>
<ul>
<u>Bem, esta unidade passa a maior parte do tempo prevenindo incêndios fazendo o seguinte:</u><br>
  <li><strong>desenvolvendo seus bombeiros</strong></li>
  <li><strong>treinando diariamente</strong></li>
  <li><strong>inspecionando seus equipamentos diariamente.</strong></li>
  <li><strong>ter programas com a comunidade, como:</strong>
    <ul>
      <li>visitando escolas e treinando os alunos sobre prevenção de incêndios e o que fazer em caso de incêndio.</li>
      <li>participar de outros programas comunitários, como consultores e ministrar treinamento quando necessário.</li>
      <li>fazendo ativamente inspeção e auxiliando na instalação de equipamentos de prevenção de incêndio em escolas, prédios de escritórios, shoppings e até residências.</li>
    </ul>
  </li>
</ul>
<p>
O mesmo conceito é usado ativamente no <strong>DRY</strong> princípio ao desenvolver software.<br>
Escrever código, testá-lo minuciosamente (testes unitários, testes funcionais e testes de integração) e ter esse código em um só lugar torna seu código menos sujeito a erros e mais fácil de manter.<br>
</p>
<p>
No cenário de combate a incêndios, pode-se ver o teste de equipamentos, etc., como testes unitários, a preparação diária dos bombeiros e testes funcionais e programas comunitários como testes de integração, etc.<br>
</p>
<p>
<i>
Observe que o “prêmio” não foi dado à unidade que apagou mais incêndios, mas sim àquela que evitou o maior número de incêndios.<br>
Há uma mudança fundamental de mentalidade aqui, na forma como a produtividade é medida.<br>
Abordarei isso mais tarde, mas é um problema fundamental para a maioria das empresas, ao medir o desempenho de divisões e indivíduos.<br>
Falarei mais sobre isso mais tarde no blog...<br>
</i>
</p>
</framed-text>
<blockquote>
<h3>Determinando o que é importante</h3>
<p>
Portanto, fica claro no exemplo dos bombeiros acima que é preciso priorizar o tempo disponível, para que as tarefas mais importantes - no caso do ambiente de negócios - tenham o maior impacto positivo nos objetivos da organização.<br>
Então, como determinamos isso?<br>
Como priorizamos nosso trabalho?<br>
</p>
<div class="center" style="width:80%">
  <img src="https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png" alt="The FranklinCovey Time Matrix" style="display:block;width:100%">
  <p style="text-align:center">A Matriz Temporal FranklinCovey</p>
</div>
<p>
A Matriz de Tempo de Franklin Covey é uma ótima ferramenta para ajudar a organizar as tarefas e o tempo.<br>
É composto por quatro quadrantes e podemos visualizar e colocar as tarefas (atividades) no quadrante a que pertencem.
</p>
<ol>
  Esses quadrantes são definidos como:<br>
  <li><strong>Q1 - Urgente e Importante.</strong><br>
  São coisas que devem ser atendidas naquele momento.<br>
  <framed-text> 
  <h3>Vivendo no primeiro trimestre</h3>
  Você pode dizer : 
  <i>
  Esse é o meu problema.<br>
  Meu dia é cheio de questões urgentes e importantes para as quais não tenho tempo para coisas como me preparar para uma auditoria.<br>
  Esse é exatamente o problema.<br>
  <strong> Você está morando no primeiro trimestre.</strong><br>
  <br>
  </i>
  É uma manhã de sábado, no ano de 1972 - papai está jogando bola com o jovem júnior, quando o telefone começa a tocar.<br>
  ring... ring... ring..<br>
  Esposa - <i>Querido, atende o telefone</i><br>
  ring... ring... ring..<br>
 ring... ring... ring..<br>
  Esposa - <i>querido, você não me ouviu, por favor atende o telefone</i>
  ring... ring... ring..<br>
  ring... ring... ring..<br>
  Esposa - <i>Atendo o telefone, pode ser urgente</i>
   </framed-text>
   Você percebeu o problema aqui?<br>
  <details>
  <summary> 
  Observe a palavra <span class="my-p"><strong>PODERIA</strong></span>
  </summary>
  <framed-text>
  Definição de poderia:<br>
  1. usado para indicar possibilidade.<br>
  2. usado para fazer sugestões ou pedidos educados.<br>
  </framed-text>
  </details>
  <p>
  Agora você não pode lidar com tudo e qualquer coisa como urgente e importante.<br>
  Essas coisas deveriam realmente estar fora de seu controle, como sua esposa telefonar e dizer que o bebê está para nascer e que você precisa levá-la ao hospital.<br>
  No caso de trabalho, seu chefe marcou uma reunião de última hora.<br>
  Agora, se o seu chefe tem o hábito de agendar reuniões de última hora, então você deve falar com ele e explicar - de forma educada - que ele deve agendar sua reunião com antecedência, já que você está morando no segundo trimestre. isso mais adiante)<br>
  Você é o gestor, precisa administrar sua seção, seu tempo é de extrema importância. <br>
  Você precisa determinar que as atividades desejadas neste quadrante realmente precisam de sua atenção e lidar com elas.<br>
  Como levar sua esposa e seu bebê ao hospital.<br>
  O que neste quadrante você pode delegar?<br><br>
  Apenas uma observação sobre o papai brincando com o Junior.<br>
  Em que quadrante você colocaria isso?<br>
  Se você disse Q2 (Importante, mas não Urgente), acertou em cheio.<br>
  É onde cada um de nós deveria viver, na maior parte do tempo.<br>
  A construção de relacionamento é de <Strong>GRANDE</strong> importância, a nível pessoal e empresarial.<br>
  Se você está no setor de desenvolvimento de software e descobre que gasta grande parte do seu tempo corrigindo bugs de software após o lançamento da produção, então você está vivendo no primeiro trimestre.<br>
  Você precisa revisitar as práticas de garantia de qualidade, especialmente as melhores práticas como DRY, OOP, testes unitários, testes funcionais e testes de integração.<br>
  Você deve buscar cerca de 70% de cobertura de código para testes unitários.<br><br>
  </p> 
  </li> 
  <li>
  <strong>Q3 - Não é importante, mas urgente.</strong><br>
  <p>
  Agora, essas atividades tendem a me irritar.<br>
  Você sabe, seu chefe pede que você participe de uma reunião.<br>
  Você remarca uma reunião presencial com um de seus subordinados para discutir seu progresso em seu plano de desenvolvimento pessoal (atividade Q2), apenas para descobrir que quando você chega na reunião as pessoas estão tomando café e conversando sobre o jogo que foi ontem à noite.<br>
  Você se senta e espera 30 minutos inteiros, antes que o bate-papo pare e a reunião do prédio comece.<br>
  Agora, não estou a dizer que socializar não seja importante, mas é preciso colocar <strong>Primeiras coisas primeiro</strong>.<br>
  Agora a reunião em si é importante, uma vez que questões relevantes relativas à segurança, estacionamento, etc. são discutidas uma vez por mês neste caso.<br>
  </p>
  <framed-text>
  <h3>Quando saí de uma reunião</h3>
  <div class="center" style="width:80%">
  <img src="https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd647130-2b28-4b53-9672-5f285ae2dc61_548x650.png" alt="Why are Union Meetings so… Boring?" style="display:block;width:100%">
  <p style="text-align:center">Por que as reuniões sindicais são tão… chatas?</p>
</div>
  <p>
  Isso me faz lembrar de quando me levantei e saí de uma reunião.<br>
  Este evento aconteceu na parte superior de "The Tens" (2007 -2010)<br>
  Estava perto do final do ano e, como sempre, foi reservado tempo para uma reunião sindical especial.<br>
  Meu colega e eu estávamos ansiosos para participar.<br>
  Tínhamos um item importante (Q2) para discutir.<br>
  Nosso fundo de aposentadoria sofreu quedas significativas e queríamos saber quais eram os problemas e o que poderíamos fazer a respeito.<br>
  Mal sabíamos que isso foi causado pelos EUA, a chamada bolha imobiliária.<br>
  Como era final de ano, o sindicato forneceria alguns refrescos e carnes para o churrasco, o que estava marcado para depois da reunião oficial do sindicato.<br>
  Meu colega e eu nos sentamos, havia um burburinho no ar.<br>
  Como era final do anu financeiro, a administração cedeu uma hora extra para esta reunião.<br>
  Eventualmente todos se acalmaram e a reunião começou.<br>
  Chegou a minha vez e perguntei sobre a queda em nosso fundo de aposentadoria.<br>
  Um dos rapazes entrou e nos interrompeu, (atividade Q3), informando que a carne estava pronta.<br>
  Eu o conhecia do trabalho, então ele não compareceu ao "hy braai die vleis"<br>
  O representante sindical não deu uma resposta plausível, afirmando que era apenas uma queda temporária e que recuperaríamos as perdas no próximo trimestre.<br>
  <strong>Nunca fizemos</strong><br>
  Eu vim preparado, com estatísticas da última década, mas ele não estava interessado.<br>
  Já deviam ter passado 30 minutos da reunião de duas horas quando me disseram que minhas dúvidas seriam tratadas em outra ocasião, pois os caras queriam fazer um "braai".<br>
  15 minutos depois, Willie e eu entramos em meu escritório.<br>
  Grace, me dê dois conjuntos de formulários de cancelamento da união XYZ, por favor<br>
  </p>
  </framed-text>
  <p>
  Agora, o evento acima, aconteceu comigo e com meu amigo, e é um bom exemplo do terceiro trimestre, um evento urgente, pois os caras queriam cerveja e carne quente, mas não era importante em comparação ao nosso fundo de aposentadoria.<br>
  </p>
  </li>
</ol>
</blockquote>
<blockquote>
Passa pouco das quatro da manhã deste domingo, 14 de junho de 2024.<br>
Tento voltar a dormir, mas sei que assim que meus antolhos forem abertos, será uma tentativa débil.<br>
Reflito sobre esta postagem, decidindo se devo continuar com ela, passar para o próximo trimestre ou dividi-la em vários blogs<br>
Como está se tornando mais um pequeno livro do que uma postagem de blog, decido que passarei boa parte desta manhã lendo o que tenho, editando, corrigindo erros de sintaxe e ortografia e enviando as correções para meu<strong>Git</strong><br>
Uma ótima ferramenta, que pode ser usada para mais do que apenas desenvolvimento de software.<br>
Bem, isso deve cumprir pelo menos mais de 70% da minha cobertura da garantia de qualidade deste artigo, deixando alguns dos meus leitores felizes. <br>
Os desenvolvedores Java ficariam orgulhosos....😂😂😂<br>
No mínimo, outros ficarão gratos por eu ter decidido postá-lo, pois ninguém quer ler um livro, quando prometeram um blog.<br>
<br>
Continua...<br>
</blockquote>
<details>
        <summary>
        <p>
        <div class="my-p">
         <strong>Se você puder, eu adoraria ler seus comentários sobre isso!!!</strong><br>
        ¯\_(ツ)_/¯<br>
        </div>        
        </p>
        </summary>
        <p>
        Por favor, use <strong>DISQUS</strong> na parte inferior de cada blog para postar comentários.<br>
        Dessa forma, serei notificado quando você adicionar um comentário, etc.<br>
        É gratuito e fácil de usar, basta criar uma conta se for um novo usuário.<br>
        </p>
</details>

<div>
<p>
References:<br>
<a href="https://www.franklincovey.com/blog/manage-your-time-and-energy-effectively/">Manage Your Time and Energy Effectively</a><br>
<a href="https://www.cambsfire.gov.uk/careers/wholetime-firefighter/the-role-of-a-firefighter/">The role of a firefighter</a><br>
<a href="https://www.nytimes.com/2020/02/02/world/australia/volunteer-firefighters.html">Australia’s Volunteer Firefighters Are Heroes. But Are They Enough?</a><br>
<a href="https://www.investopedia.com/terms/g/great-recession.asp">Great Recession: What It Was and What Caused It</a><br>
<a href="https://www.codium.ai/question/what-is-a-reasonable-code-coverage-for-unit-tests-and-why/">What is a reasonable code coverage % for unit tests (and why)?</a>
<a href="https://kinsta.com/knowledgebase/what-is-github/">What Is GitHub? A Beginner’s Introduction to GitHub</a><br>
</p>
</div>
