---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: how-long-is-a-day
title: Quanto Tempo Dura Um Dia?

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Tecnologia e ciências aplicadas
# multiple tag entries are possible
tags: [informática, Computação em tempo real, astronomia]
# thumbnail image for post
img: "https://scx2.b-cdn.net/gfx/news/hires/2015/howlongisada.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2024-04-20 05:56:00 +0100
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
 /*clock */
/**LINK - from https://youtu.be/omDaYhUEU1A?si=DQnUg0oW7CrdJefI **/
div .clock{
margin:0;
padding:0;
}
.clock{
position: absolute;
width:100px;
height:100px;
border:5px solid #b06a26;
border-radius: 50%;
left: 55px;
top: 55px;
background: #fefbf2;
transform: translate(-50%, -50%);
box-shadow: inset 0px 0px 10px black;
}
/* style the hour hand  */
.clock::before {
position: absolute;
content:'';
height: 42px;
width:10px;
background: black;
top: 50%;
left: calc(50% - 5px);
border-radius: 5px;
animation: spin 6s linear infinite;
transform-origin: top;

}
/* style the minute hand */
.clock::after {
position: absolute;
content:'';
height: 30px;
width:10px;
background: black;
top: 50%;
left: calc(50% - 5px);
border-radius: 5px;
animation: spin 72s linear infinite;
transform-origin: top;
}

/* define the spin animation for the hands */
@keyframes spin {
0% {
transform: rotate(-180deg)
}
100%{
transform: rotate(180deg)
}
}


/* container formatting */
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

</style>

  <img style="margin: 5px" src="https://scx2.b-cdn.net/gfx/news/hires/2015/howlongisada.jpg" alt="How long is a day on Earth?">
  <p style="text-align:center">Quanto tempo dura um dia na Terra?</P>

<div style="display:block">
    <blockquote>
    Se você perguntar a alguém quanto tempo dura um dia, receberá uma resposta de 24 horas.<br>
    Ou se você realmente quer ser um espertinho, 86.400 segundos.<br>
    Isto é o que todos nós aprendemos na escola...<br>
    A verdade é que realmente não sabemos...<br>
    <p>¯\_(ツ)_/¯</p>
    </blockquote>
</div>
<div style="display:block">
<details>
      <summary>
      <p style="margin: 0.5em 0 0.5em 0"><div class="my-p">Clique ou toque aqui para acertar seu relógio antes de continuar</div><br></p>
      </summary>
            <div style="position:relative;width:100px;height:100px;margin-left:50%;padding: 5px;">
                <div class="clock" ></div>
            </div>
            <image-container>
            <img src="https://i.stack.imgur.com/YIcbV.png" alt="menus">
            </image-container>
            <p style="margin-top:1em">
            <span style="color:#5ba487">O texto nesta cor exibirá uma seção com mais informações</span><br>
            <span style="color:#3389de">Observe que você pode clicar no texto nesta cor para direcioná-lo às referências</span><br>
            Você também pode alternar o esquema de cores no canto inferior esquerdo.<br>
            💡= tema claro<br>
            ☾ = tema escuro<br>
            Dependendo do tamanho da tela, pode ser necessário ativar o "menu Hambúrguer" para que a opção apareça.<br>
            Neste site você também pode optar por ler este blog em ingles, selecione En [<strong>En </strong> Pt]<br>
            Agora, se você quiser ler este blog, ou um link que você abriu em outro idioma, basta selecionar traduzir no menu do seu navegador.<br>
            No Chrome é um menu "Kebab".<br>
            </p>           
            <blockquote style="margin-top:1em; margin-bottom:1em">
            <p>
            Ok, então vamos a isso..<br>
            ¯\_(ツ)_/¯<br>
            </p>
            </blockquote>          
      </details>
</div>
<div style="display:block">
 <h4>Quanto tempo dura um dia? </h4>
  <p>
    É uma pergunta aparentemente complicada.<br>
    Porque a Terra não é uma massa sólida, mas uma bola rolante de vários sólidos e líquidos.<br>
    A rotação do planeta na verdade acelera e desacelera dependendo dessas dinâmicas mutáveis.<br>
  </p>
  <p>
  As flutuações na rotação não são importantes apenas para a astronomia, mas também precisamos delas urgentemente para criar modelos climáticos precisos e para compreender melhor fenómenos meteorológicos como o El Niño.<br>
  Quanto mais precisos os dados, mais precisas serão as previsões.<br>
  </p>
  <p>
  Cientistas da Universidade Técnica de Munique (TUM) podem medir um dia terrestre até nove casas decimais, o que equivale a cerca de uma fração de milissegundo por dia.<br>
  Acontece que a rotação da Terra flutua cerca de 6 milissegundos a cada duas semanas.<br>
  </p>
  <p>
  Ao longo da vida da Terra, a duração do dia só tem crescido cada vez mais.<br>
  Quando os dinossauros vagavam pela Terra, por exemplo, um dia tinha apenas 23 horas.<br>
  Há 1,4 bilhão de anos, eram apenas 18 horas e 41 minutos.<br>
  E em 200 milhões de anos, terá 25 horas de duração.<br>
  Claro, quem sabe quem (ou o quê) estará por perto para fazer essas medições rotacionais hiperprecisas.<br>
  </p>
  <blockquote>
  Você sabia que não só temos anos bissextos, mas também segundos bissextos? <br>
  <details><summary>Quem sabe um dia teremos um <span class= "my-p">minuto bissexto</span>
  <p>¯\_(ツ)_/¯<br></p>
  </summary>  
  <framed-text>
 Levine escreveu um artigo que propõe uma nova solução: o minuto bissexto.<br>
  A ideia é sincronizar os relógios com menos frequência, talvez a cada meio século, essencialmente deixando o tempo atômico divergir do tempo baseado no cosmos por 60 segundos ou até um pouco mais, e basicamente esquecendo-se disso enquanto isso.<br>
  <a href="https://www.nytimes.com/2023/11/03/science/time-leap-second.html">Um salto gigante para o segundo bissexto. A humanidade está pronta?</a>  
  </framed-text>
  </details>  
  </blockquote>
  <h4>O segundo bissexto</h4>
    <details>
    <summary>
    Um segundo bissexto é um ajuste de um segundo que é ocasionalmente aplicado ao Tempo Universal Coordenado (UTC), para acomodar a diferença entre o tempo preciso (Tempo Atômico Internacional (TAI), medido por <span class="my-p">relógios atômicos</span>) e o tempo solar impreciso observado (UT1) , que varia devido a irregularidades e desaceleração de longo prazo na rotação da Terra.
    </summary>
    <framed-text>
    Um relógio atómico é um tipo de relógio que usa uma transição atômica como forma de estabilizar um oscilador sempre em uma mesma frequência.<br>
    <div style="margin:5px 0, 5px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rel%C3%B3gio_at%C3%B4mico_-_oscilador.svg/1280px-Rel%C3%B3gio_at%C3%B4mico_-_oscilador.svg.png">
    <p style="margin:5px;padding: 3px;border:solid 1px;">
     Esquema do funcionamento de um relógio atômico:1-átomos; 2-sinal de correção; 3-oscilador local; 4-sinal de interrogação; 5-sinal estabilizado
    </p>
    </div>
     Como um relógio de pêndulo, o átomo pode ser estimulado externamente (neste caso, por ondas eletromagnéticas) para que sua energia oscile de forma regular.<br>
     <a href="https://pt.wikipedia.org/wiki/Rel%C3%B3gio_at%C3%B4mico">relógio atómico</a>
    </framed-text>
    </details>
    <p>
     <h4>Pontos-chave</h4>

  <ul>
    <li>A rotação da Terra não dura exatamente 24 horas. Em vez disso, o planeta experimenta pequenas diferenças diárias devido à sua composição heterogênea.</li>
    <li>Cientistas da Universidade Técnica de Munique (TUM) aprimoraram um laser de anel projetado para medir a rotação da Terra com hiperprecisão.</li>
    <li>Com a adição de um algoritmo corretivo, o TUM agora pode medir a rotação da Terra até nove casas decimais – cerca de uma fração de milissegundo.</li>
  </ul>
    </p>
  </div>
  <div style="display:block">
  <details>
        <summary>
        <p>
        <div class="my-p">
         <strong>Se você puder, adoraria ler seus comentários sobre isso!!!</strong><br>
        ¯\_(ツ)_/¯<br>
        </div>        
        </p>
        </summary>
        <framed-text>
        Use <strong>DISQUS</strong> na parte inferior de cada blog para postar comentários.<br>
        Dessa forma, serei notificado quando você adicionar um comentário, etc.<br>
        É gratuito e fácil de usar, basta criar uma conta se for um novo usuário.<br>
        </framed-text>
</details>
  </div>
<div style="display:block">
<p>
<i>References:</i>
</p>
<p>
<a href="https://finance.yahoo.com/news/study-says-one-earth-day-150000129.html">Um novo estudo afirma que um Dia da Terra terá 25 horas de duração</a><br>
<a href="https://en.wikipedia.org/wiki/Leap_second">Segundo bissexto</a>
</p>
<div>
