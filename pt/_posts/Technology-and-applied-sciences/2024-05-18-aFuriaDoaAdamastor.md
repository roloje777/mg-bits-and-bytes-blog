---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: a-furia-do-adamastor
title: A Fúria de Adamastor
# post specificc
# if not specified, .name will be used from \_data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Tecnologia e ciências aplicadas
# multiple tag entries are possible
tags: [engineering, transporte]
# thumbnail image for post
img: "https://www.razaoautomovel.com/wp-content/uploads/2024/05/Adamastor-Furia-925x520.webp"
# disable comments on this page
# comments_disable: true
# publish date
date: 2024-05-18 21:52 +00.00
# seo
# if not specified, date will be used.
#meta_modify_date: 2021-08-10 11:32:53 +0900
# check the meta_common_description in \_data/owner/[language].yml
#meta_description: ""
# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (\_posts/ or [language]/\_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in \_data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (\_posts/ or [language]/\_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in \_data/conf/main.yml.
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
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    margin-bottom: 2em;
    overflow: hidden;
    border: solid 1px;
    }

    iframe{
       position: relative; 
       top: 0; 
       left: 0; 
       width: 100%;
        height: 100%
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
... João, um menino, sonha acordado enquanto um professor recita um poema de <details style="display:inline"><summary><span class="my-p">Fernando Pessoa...</span></summary>
<framed-text>
Fernando António Nogueira Pessoa (13 de junho de 1888 - 30 de novembro de 1935) foi um poeta, escritor, crítico literário, tradutor, editor e filósofo português, descrito como uma das figuras literárias mais significativas do século XX e um dos maiores poetas do século XX. os portugueses.<br>
Ele também escreveu e traduziu do inglês e do francês.<br>
<a href="https://pt.wikipedia.org/wiki/Fernando_Pessoa">Fernando Pessoa</a>
</framed-text>
</details>
<br><br>
... olhando pela janela fora, as montanhas nos limites  de Alfândega da Fé...<br><br>
</blockquote>
<div class="add-right-shadow"
  style="position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    margin-bottom: 2em;
    margin-top:2em;
    overflow: hidden;
  "
>
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.youtube.com/embed/L5Ihd-ECpYM?si=1JYg0HVwtwoilo5K"
    title="YouTube video player"
    allowfullscreen
  >
  </iframe>
</div>
<p style="position: relative; text-align: center">João Villaret - O Mostrengo de Fernando Pessoa</p>
<details>
    <summary>    
    <unframed-text class="add-right-shadow">
    «Quem vem poder o que só eu posso,<br>
  Que moro onde nunca ninguém me visse<br>
  E escorro os medos do mar sem fundo?»<br>
  E o homem do leme tremeu, e disse:<br>
  «El-Rei D. João Segundo!»<br>
    <span class="my-p">leia o poema aqui</span>
    </unframed-text>     
    </summary>
    <framed-text>
    <p class="center">
    O MOSTRENGO<br>
<br>
O mostrengo que está no fim do mar<br>
Na noite de breu ergueu-se a voar;<br>
À roda da nau voou três vezes,<br>
Voou três vezes a chiar,<br>
E disse: «Quem é que ousou entrar<br>
Nas minhas cavernas que não desvendo,<br>
Meus tetos negros do fim do mundo?»<br>
E o homem do leme disse, tremendo:<br>
«El-Rei D. João Segundo!»<br>
<br>
«De quem são as velas onde me roço?<br>
De quem as quilhas que vejo e ouço?»<br>
Disse o mostrengo, e rodou três vezes,<br>
Três vezes rodou imundo e grosso,<br>
<br>
«Quem vem poder o que só eu posso,<br>
Que moro onde nunca ninguém me visse<br>
E escorro os medos do mar sem fundo?»<br>
E o homem do leme tremeu, e disse:<br>
«El-Rei D. João Segundo!»<br>
<br>
Três vezes do leme as mãos ergueu,<br>
Três vezes ao leme as reprendeu,<br>
E disse no fim de tremer três vezes:<br>
«Aqui ao leme sou mais do que eu:<br>
Sou um Povo que quer o mar que é teu;<br>
E mais que o mostrengo, que me a alma teme<br>
E roda nas trevas do fim do mundo;<br>
Manda a vontade, que me ata ao leme,<br>
De El-Rei D. João Segundo!»<br>
    <br>
    <a href = "https://ensina.rtp.pt/artigo/fernando-pessoa-o-mostrengo/">Fernando Pessoa</a>
    </p>
</framed-text>
</details>
<blockquote>
<br>
.. as palavras do professor se misturam em seus pensamentos,<br>
<img style="margin:2em" class="center" src="https://i1.sndcdn.com/artworks-1BOW0ZOkBHCP9N7R-BkH7qA-t500x500.jpg" alt="">
... ele de repente é um capitão, no comando de uma <details style="display:inline"><summary class="my-p">caravela portuguesa</summary>
<framed-text>
A caravela é um pequeno veleiro manobrável usado no século XV pelos portugueses para explorar ao longo da costa oeste africana e no Oceano Atlântico e por Colombo nas suas expedições de exploração das Américas.<br> Eles usaram tanto as velas latinas como as quadradas e eram conhecidas pela sua agilidade e velocidade e pela capacidade de navegar a barlavento (bater) com as suas velas latinas.<br> As caravelas foram utilizadas pelos portugueses e espanhóis nas viagens de exploração durante os séculos XV e XVI, na Era dos Descobrimentos.<br>
<a href="https://pt.wikipedia.org/wiki/Caravela">Caravela</a>
</framed-text>
</details>, circulando o cabo das tempestades, quando se depara com um deus gigante vindo do mar.<br>
..ele está prestes a,...<br>
...quando ele sente um puxão no ombro,<br>
João... <br>
a aula acabou...<br>
... vamos para a casa do Pedro,<br>
<details style="display:inline"><summary class="my-p">... queres juntar a nos?</summary>
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
              <img src="https://i.stack.imgur.com/YIcbV.png" alt="https://i.stack.imgur.com/YIcbV.png">
            </div>
            <p style="margin-top:1em">
              <span style="color:#5ba487">Clique/toque no texto nesta cor para exibir uma seção oculta com mais informações</span><br>
              <span style="color:#3389de">Observe que você pode clicar/tocar no texto desta cor para direcioná-lo às referências</span><br>
              Você também pode alternar o esquema de cores no canto inferior esquerdo.<br>
              💡=tema claro<br>
              ☾ = tema escuro<br>
              Dependendo do tamanho da tela, pode ser necessário ativar o "menu Hambúrguer" para opção de parar.<br>
              Neste site você também pode optar por ler este blog em Ingles, selecione En [<strong>En</strong> Pt]<br>
              Agora, se você quiser ler este blog, ou um link que você abriu em outro idioma, basta selecionar traduzir no menu do seu navegador.<br>
              No Chrome é um menu "Kebab".<br>
            </p>
            <p>
            Então, você tomou seu café, relaxe e aproveite o blog.<br>
            ¯\_(ツ)_/¯<br>
            </p>
</framed-text>
</details>
<br>
... ele tem uma revista legal sobre supercarros<br>
... até um que é feito aqui no Porto...<br>
<hr>
Agora o Adamastor é um gigante mítico, filho de Gaia.<br>
Ele se rebelou contra o poderoso deus Zeus e foi derrubado, disperso e reduzido a promontórios, ilhas e penhascos, de onde atormenta o homem.<br>
Este é o gigante mencionado no poema, simbolizando o medo e a coragem dos marinheiros portugueses ao saírem à descoberta do mundo e enfrentarem perigos, como o <details style="display:inline"><summary><span class="my-p">Cape of storms.</span></summary>
<framed-text>
Em 1486, Bartolomeu Diaz, um explorador português, descobriu o Cabo (o Cabo das Tempestades - assim chamado devido às condições do mar agitado e aos muitos naufrágios de navios na costa) durante as suas viagens. Vasco da Gama, de Portugal, contornou a Península em 1497.<br>
<a href="https://pt.wikipedia.org/wiki/Cabo_da_Boa_Esperan%C3%A7a">Cabo da Boa Esperança</a>
</framed-text>
</details>
<p>
No mesmo espírito uma pequena equipa de portugueses, enfrenta os poderosos fabricantes de automóveis, nomes como Ferrari, Corvette e Mercedes etc. e traz um novo miúdo ao quarteirão...<br>
<strong></strong>O impossível se torna possível quando pessoas com objetivos e sonhos comuns se unem e trabalham em equipe.<br>
Fizemos isso há 500 anos e agora fizemos mais uma vez.<br>
</p>
</blockquote>
<h3>ADAMASTOR FURIA – O PRIMEIRO SUPERCARRO 100% PORTUGUÊS QUE VEIO CONQUISTAR O MUNDO</h3>
<div
  style="position: relative;padding-bottom: 56.25%; padding-top: 35px;
    height: 0; margin-bottom: 2em;
    margin-top:2em;
    overflow: hidden;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.dailymotion.com/embed/video/x8ykiu8?autoplay=1&loop=1&autopause=1muted=1"
    title="YouTube video player"
    allowfullscreen>
  </iframe>    
</div>
<blockquote>
O Adamastor Furia tem mais de 650 cv de potência,<br>
atinge 100 km/h em menos de quatro segundos<br>
e pode exceder 300 km/h.<br>
Este supercarro foi desenhado e produzido em Matosinhos Portugal.<br>
O projeto demorou cerca de cinco anos a ser concluído e 60 unidades serão produzidas em Matosinhos Portugal.<br>
O Furia possui chassi monocoque, inteiramente feito de fibra de carbono.<br>
Tudo isto tem um preço que ronda os 1,6 milhões de euros.<br>
</blockquote>
<div
  style="position: relative;padding-bottom: 56.25%; padding-top: 35px;
    height: 0; margin-bottom: 2em;
    margin-top:2em;
    overflow: hidden;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.youtube.com/embed/lo9tpHNdM0k?si=hAVGHKafQJglfFeS"
    title="YouTube video player"
    allowfullscreen>
  </iframe>
  <p style="text-align=center">ADAMASTOR FURIA – O PRIMEIRO SUPERCARRO 100% PORTUGUÊS QUE VEIO CONQUISTAR O MUNDO</p>
</div>
<details>
        <summary>
        <p>
        <div class="my-p">
         <strong>Se você puder, adoraria ler seus comentários sobre isso!!!</strong><br>
        ¯\_(ツ)_/¯<br>
        </div>        
        </p>
        </summary>
        <p>
        Use <strong>DISQUS</strong> na parte inferior de cada blog para postar comentários.<br>
        Dessa forma, serei notificado quando você adicionar um comentário, etc.<br>
        É gratuito e fácil de usar, basta criar uma conta se for um novo usuário.<br>
        </p>
</details>
<p>
<i>References:</i><br>
<a href="https://www.adamastor.com.pt/home">Adamastor</a><br>
<a href="https://www.razaoautomovel.com/noticias/apresentacao-adamastor-furia-primeiro-superdesportivo-portugues/">Adamastor Furia revelado. Tudo sobre o primeiro superdesportivo português</a><br>
</p>
