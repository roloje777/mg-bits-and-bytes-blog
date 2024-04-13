---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: a-cheesy-bank
title: Banco de queijo

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Society and social sciences
# multiple tag entries are possible
tags: [finança]
# thumbnail image for post
img: "https://hbswk.hbs.edu/images/site/parmesean.cheese.png"
# disable comments on this page
# comments_disable: true

# publish date
date: 1970-01-01 08:00:00
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

<div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
    <img class="center" src="https://hbswk.hbs.edu/images/site/parmesean.cheese.png" alt="cheese bank">
    <p style="text-align:center;margin-top:5px;margin-bottom:5px">O banco regional Crédito Emiliano</p>
<container>
    <blockquote>
    <p>
    Ja sabia que o queijo é uma boa fonte de proteína, fornecendo aproximadamente 25 gramas de proteína por 100 gramas de queijo?<br>
.   ..agora isso promove o crescimento muscular.<br>
    Provavelmente sim.<br>
    </p>
    <p>
    Agora você sabia que o queijo também pode fazer sua conta bancária crescer?<br>
    Você pode até conseguir um empréstimo para sua nova casa usando queijo....<br>
    </p>
    <p>¯\_(ツ)_/¯</p>
    </blockquote>
</container>
<container>
<details>
      <summary>       
      <p style="margin: 0.5em 0 0.5em 0"><div class="my-p">Antes de chegarmos a este clique (toque) aqui.</div><br></p>
      </summary>
       <div  style="margin:0.5em auto 0.5em auto;width:300px;height:280px;">
        <!-- Coffee machine -->
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
            <image-container>
            <img src="https://i.stack.imgur.com/YIcbV.png" alt="menus">
            </image-container>
            <p style="margin-top:1em">
            <span style="color:#5ba487">O texto nesta cor exibirá uma seção oculta com mais informações</span><br>
             <span style="color:#3389de">Observe que pode clicar (tocar) no texto nesta cor para direcioná-lo às referências</span><br>
             Você também pode alternar o esquema de cores no canto inferior esquerdo.<br>
             💡= tema claro<br>
             ☾ = tema escuro<br>
             Dependendo do tamanho da tela, pode ser necessário ativar o "Menu Hambúrguer" para que a opção apareça.<br>
             Neste site você também pode optar por ler este blog em ingles, selecione En [<strong>En</strong> Pt]<br>
             Agora, se você quiser ler este blog, ou um link que você abriu em outro idioma, basta selecionar traduzir no menu do seu navegador.<br>
             No Chrome é um menu “Kebab”.<br>
            </p>
            <container>
            <blockquote style="margin-top:1em; margin-bottom:1em">
            <p>            
            Então, você tomou seu café, relaxe e aproveite o blog.<br>
            ¯\_(ツ)_/¯<br>
            </p>  
            </blockquote>
            </container>        
      </details>
</container>
<container>
    <h4>Um banco que aceita parmesão como garantia</h4>
            <div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
            <img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Parmigiano_Reggiano%2C_Italien%2C_Europ%C3%A4ische_Union.jpg/220px-Parmigiano_Reggiano%2C_Italien%2C_Europ%C3%A4ische_Union.jpg" alt="Parmesan">
            <p style="text-align:center;margin-top:5px;margin-bottom:5px">Parmesão</p>
            </div>
     <details>
        <summary>
          Desde 1953, o banco regional Crédito Emiliano aceita garantias curiosas para empréstimos a pequenas empresas:
            rodas gigantes de <span class="my-p">queijo Parmigiano-Reggiano.</span>
        </summary>
        <framed-text>
        <p>
        O parmesão é um queijo italiano duro e granular produzido a partir de leite de vaca e envelhecido por pelo menos 12 meses ou, fora da União Europeia, uma imitação produzida localmente.<br>
         </p>
         <p>
         O nome completo e legalmente protegido do queijo italiano é Parmigiano Reggiano.<br>
         Tem o nome de duas das áreas que o produzem, as províncias italianas de Parma e Reggio Emilia (Parmigiano é o adjetivo italiano para Parma e Reggiano é o adjetivo de Reggio Emilia); além de Reggio Emilia e Parma, também é produzido na parte de Bolonha a oeste do rio Reno e em Modena (todas as anteriores localizadas na região de Emilia-Romagna), bem como na parte de Mântua (Lombardia ) que fica na margem sul do rio Pó.<br>
         <a href="https://en.wikipedia.org/wiki/Parmesan">Parmesan</a>
         </p>      
        </framed-text>
        </details>
    </p>
    <p>
   Além de manter o queijo como seguro, a Credem armazena e envelhece as rodas em cofres climatizados durante o período do empréstimo.<br>
    </p>
    <p>
    A Credem aceita como garantia o queijo jovem, valorizando-o ao preço atual de mercado do queijo curado.<br>
    O caso explica que o rácio entre o empréstimo e o valor típico é de 70 a 80 por cento, o que protege o banco contra as flutuações dos preços de mercado e a degradação do produto.<br>
    </p>
                <div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
                    <img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Region_Parmigiano-Reggiano.png/220px-Region_Parmigiano-Reggiano.png" alt="Parmesan">
                <p style="text-align:center;margin-top:5px;margin-bottom:5px">A área em que o Parmigiano Reggiano pode ser produzido, de acordo com a legislação DOP da UE e da Itália</p>
                </div>
    <p>
   Uma subsidiária da Credem, Magazziini Generali delle Tagliate, mantém a garantia pungente em dois armazéns de propriedade do banco que oferecem capacidade de armazenamento para 440.000 rodas de queijo de 80 libras.<br>
    Os armazéns da MGT possuem controles climáticos de última geração e uma equipe de inspetores treinados.<br>
    </p>
</container>
<container>
           <div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
            <img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Parmigiano-Reggiano.png/220px-Parmigiano-Reggiano.png">
                <p style="text-align:center;margin-top:5px;margin-bottom:5px">Processo de produto de queijo parmesão</p>
            </div>
    <h4>É um empréstimo</h4>
    <p>
    Se os produtores não pagarem seus empréstimos, o banco venderá suas garantias no vencimento.<br>
    </p>
    <p>
    Quanto mais envelhece, mais delicioso e valioso se torna – como dinheiro numa conta que rende juros.<br>
    </p>
    <p>
    “Isso permite que o Credem seja percebido como um banco que se preocupa com a comunidade, se preocupa com a região e se preocupa com os produtores”, afirma.<br>
    “Empréstimos são algo que as pessoas realmente não gostam na Itália.<br>
    Eles pensam na usura, voltando a Shylock em O Mercador de Veneza.<br>
    Muitas pessoas ainda veem os credores e os bancos dessa forma.<br>
    Portanto, para um banco ser capaz de criar esta infraestrutura e mostrar o seu valor à comunidade, é significativo.”<br>
    </p>
</container>
<container>
        <div  style="position: relative; padding-bottom: 56.25%; padding-top: 35px;height: 0; margin-bottom: 2em;
            overflow: hidden;">
            <iframe
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                src="https://www.youtube.com/embed/s_bW98C5Iuk?si=bKH8ogW-n-sMbSpa"
                title="YouTube video player"
                allowfullscreen >
            </iframe>
        </div>
        <p style="position: relative; text-align: center">El banco italiano que permite queso como garantía de un préstamo</p>
</container>
<container>
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
</container>
<container>
    <p><i>References:</i>
    <a href="https://www.forbes.com/sites/hbsworkingknowledge/2015/07/01/a-bank-that-accepts-parmesan-as-collateral-the-cheese-stands-a-loan/">Um banco que aceita parmesão como garantia: o queijo vale um empréstimo</a><br>
    </p>
</container>
