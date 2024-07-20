---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: time-management-2
title: Gerenciamento de tempo para pessoas de sucesso - desperdício de tempo.

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
img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC0CzjgGBKhOhFZsMEjf_e0iBs5rARrEsrGJe8AUrNWpAtGQYXk_2iAyuduYCloTbi86qN31QFRDsz7FJZD7Ecqxogc-TyV8mebYy-YKUcYtlxc-VXppHMv_9CQ6R-dNHS68jOPu1Igx4/s400/CellPhoneaddiction.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2024-07-20 08:00:00
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
#published: false
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
<h2>Prefácio</h2>
<p>
Neste blog continuo explorando o tema sobre como usamos nosso tempo para ter sucesso.<br>
Utilizo a Matriz Temporal da FranklinCovey como ferramenta de orientação.<br>
Encontrei a Matriz da FranklinCovey em <a href="https://www.dropbox.com/scl/fi/5cgo0bw4v4m9r03946hk1/7HabitsStevenCovetCert.jpg?rlkey=hm86jzsh0sfpo9ahqhvpzw7sa&st=rfpc5al2&dl=0" >um curso de pós-graduação que participei.</a> <br>
 Mostrarei, principalmente por meio de (minhas) experiências de vida real, como esse conceito pode ajudar alguém a se concentrar no que precisa ser feito para obter os resultados desejados.<br>
 Para fazer isso é preciso estar atento aos chamados "desperdiçadores de tempo".<br>
 Neste blog vou me concentrar no quadrante 3, que ele (Steven R. Covey) considera uma perda de tempo.<br>
 </p>
 <p>
  Esta é uma continuação do blog anterior que postei no dia 14 de julho. (<a href="https://roloje777.github.io/mg-bits-and-bytes-blog/posts/philosophy-and-thinking/2024-07-07-time-management">Gerenciamento de tempo para pessoas de sucesso .</a>)<br>
Se você ainda não leu, sugiro que leia primeiro.
 </p>
</blockquote>
<blockquote>
<h2>Introdução</h2>
<p>
É de manhã cedo.<br>
Eu simplesmente não consigo tirar esses pensamentos da minha cabeça.<br>
Você sabe, aquela adrenalina está bombeando em suas veias, a excitação, as ideias fluindo na velocidade da luz.<br>
Tenho medo de esquecer alguns, antes de poder compartilhar com vocês neste meu blog.<br>
Eu me pergunto quantas grandes ideias foram perdidas ao longo do tempo, porque não foram escritas, esquecidas para sempre.<br>
No início desta semana eu tinha poucas ideias sobre esse tema, agora as ideias continuam surgindo e preciso <strong>Priorizar</strong> e <strong>Planear</strong> o que vou incluir neste tema .(Q2)<br>
Agora preciso pesquisar um pouco mais sobre o quarto trimestre (não importante e não urgente).<br>
Pego o meu Android na mesa de cabeceira ao meu lado.<br>
Meus pensamentos vão para um período anterior da minha vida.<br>
</p>
<framed-text>
<p>
Rian - "Sabe João, esses celulares vão deixar as pessoas pobres."<br>
Eu - "Por que você diz isso?"<br>
Fui até o escritório de Rian.<br>
Ele é o representante de vendas de uma empresa de telecomunicações para a qual ambos trabalhamos.<br>
Rian - "Bem, pense nisso.<br>
Pessoas como meu pai e o seu costumam economizar dinheiro.<br>
Agora não consigo acompanhar a demanda por celulares.<br>
Não estou reclamando, mas agora, em vez de economizar, estamos todos ansiosos pelo próximo melhor dispositivo.”<br>
</p>
</framed-text>
<p>
Isso aconteceu há algum tempo, provavelmente entre 2007 e 2014, época em que dinheiro e crédito eram tão fáceis de obter.<br>
Os bancos estavam a procura de pessoas para-lhes dar dinheiro.<br>
</p>
</blockquote>
<blockquote>
<h2>Q4 - Não Importante e Não Urgente</h2>
<div class="center" style="width:80%">
  <img src="https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png" alt="The FranklinCovey Time Matrix" style="display:block;width:100%">
  <p style="text-align:center">A Matriz Temporal FranklinCovey</p>
</div>
<p>
Agora, se você olhar para este quadrante, ele será rotulado como <strong>Desperdício</strong>.<br>
Estas são atividades que também devemos limitar.<br>
Olhando mais detalhadamente para este diagrama, Covey inclui atividades como televisão, jogos, internet, etc.<br>
Eu sei, eu sei, o que você vai dizer...<br>
"Por favor, não atire no mensageiro" 😂<br>
</p>
 <details>
        <summary style="margin-bottom:1em">Antes, continue lendo este blog<br>
        <span class="my-p">Clique/toque</span> aqui e reflita sobre essas chamadas Desperdiçadoras de Tempo que acabei de mencionar acima.<br>
        O que você considera uma perda de tempo?<br>
        Você vê o seu telemóvel e a internet como uma ferramenta útil ou como uma perda de tempo?<br> 
        </summary>
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
</blockquote>
<blockquote>
<h3> Desperdiçadores de tempo</h3>
<div class="center" style="width:80%">
  <img src="https://cdn.slidesharecdn.com/ss_thumbnails/mobileaddiction-230701064402-df2cc53a-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Mobile Phone Addiction" style="display:block;width:100%">
  <p style="text-align:center">Vício em telefone celular</p>
</div>
<p>
Como mencionei na minha introdução, peguei meu telefone esta manhã para fazer algumas pesquisas sobre ideias que tive para este tópico.<br>
Estou impressionado com a quantidade de informações que tenho na ponta dos dedos.<br>
Que ferramenta maravilhosa, mas também perigosa.<br>
Esta manhã eu estava no modo Q2. <br>
Tive ideias e usei esse aparelho maravilhoso e a internet para fazer pesquisas.<br>
Nem sempre é esse o caso.<br>
Sou um verme madrugador, então na maioria das manhãs acordo antes das 05:00.<br>
Pego meu telefone, provavelmente ignorando meus amigos peludos que acreditam que suas guloseimas matinais são atividades do primeiro trimestre (urgente e importante), e começo a navegar em minhas redes sociais, como Facebook, Whatsapp etc.<br>
Vejo que recebo muitas notificações de aplicativos sociais e do Google sobre tópicos que já demonstrei interesse. (Distrações do terceiro trimestre)<br>
<i><a href="https://roloje777.github.io/mg-bits-and-bytes-blog/posts/Technology-and-applied-sciences/2024-04-01-are-we-doomed">O que é IA em jogo aqui</a>.</i><br>
</p>
<p>
Antes que eu perceba, minha esposa está acordada e preciso me levantar para alimentar os gatos e fazer duas xícaras de café.<br>
Fiquei surpreso com a forma como duas horas se passaram, pois eu estava acordado às 5h, apenas fazendo "nada", navegando e olhando fotos no Facebook postadas por pessoas, algumas eu conheço, mas a maioria não.<br>
Principalmente em suas atividades diárias, selfies, em algum restaurante, na praia, fazendo compras, ou apenas exibindo seus novos brinquedos "motos e carros" etc, etc, etc.. <br>
<i>Eu me pergunto como Covey classificaria isso... <span style="font-size:2em">💭</span></i>
</p>
Agora que fiz algumas pesquisas sobre isso, penso comigo mesmo.<br>
<ol>
  <li>
"Bem, senhor, não seja tão duro consigo mesmo,<strong> na média uma pessoa passa 3 horas e 15 minutos em seus telefones diariamente.</strong> "<br>
Bem, eu já queimei quase 50% disso e são apenas 7 da manhã. (˚0˚)!!<br>
</li>
<li>
Outro hábito que adquiri, e não tenho ideia de quando isso aconteceu, é que onde quer que eu vá, devo levar meu telefone comigo e, sem motivo aparente, vou buscá-lo passando pelas notificações etc. <br>
Não que eu esteja esperando alguma mensagem ou telefonema.<br>
<strong>Uma pessoa média verifica o telefone 58 vezes por dia.</strong>
</li>
</ol>
<p>
Agora, olhando as estatísticas, parece normal, ou não?<br>
Não é uma atividade do quarto trimestre?<br>
Não é um vício limítrofe?<br>
Não estou ficando viciado, tendo que saber o que está acontecendo no noticiário a cada hora ou mais, ou o que Peter ou Jane fizeram hoje, etc, etc, etc?<br>
</p>
<details>
<summary style="margin-bottom:1em">Aqui está um artigo interessante que fala sobre uma senhora e sua luta contra esse vício.<br>
<strong>Um problema que está realmente afetando a Geração Z, já que 3 em cada 4 pessoas passam muito tempo em seus telefones.</strong><br>
        <span class="my-p">clique/toque aqui para ler o artigo</span>
</summary>
<p>
<embed type="text/html" style="width:100%;height:400px" src="http://www.storiesofahappymom.com/2013/05/surviving-cell-phone-addiction.html"><br>
<a href="http://www.storiesofahappymom.com/2013/05/surviving-cell-phone-addiction.html">Sobrevivendo ao vício do celular</a>
</p>
</details>
</blockquote>
<blockquote>
<h2>O açúcar faz mal para você?</h2>
<framed-text>
<h3>É 1980 e estamos na academia. (Atividade do segundo trimestre)</h3>
<div class="center" style="width:80%">
  <img src="https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/sugar-g963832288_1280.jpg" alt="tablespoon of sugar" style="display:block;width:100%">
  </div>
<p>
É o ano de 1980, 9h30 da manhã de sábado.<br>
Rui, um amigo meu e eu estamos no ginasio "Tait's Gym", localizado no "Hoefie", numa cidade mineira chamada Welkom, situada no Estado Livre do Norte da África do Sul.<br>
Estamos a mudar de roupa.<br>
Típico rapaz querendo bombar os músculos, para impressionar as garotas nas tardes de domingo e nas piscinas do município.<br>
Dois caras mais velhos, um ruivo com sardas, e seu parceiro  bronzeado e de cabelos mais escuros, entram nos vestiários enquanto estamos ocupados vestindo nossas roupas de ginástica.<br>
Já os vi antes, eles levam seus treinos a sério e ao limite.<br>
São dois jovens engenheiros que trabalham em uma mina de ouro, não muito longe da cidade.<br>
Eles são fortes e só podemos sonhar em atingir seu nível de musculatura.<br>
Encharcado de suor, o ruivo abre seu armário e pega um pacote de açúcar.<br>
Ele coloca um pouco de açúcar na boca e toma um grande gole de água do frasco que tem na outra mão.<br>
Ele passa o açúcar para seu amigo que faz o mesmo.<br>
Ele enxuga o suor da testa com uma toalha de rosto do armário, guarda-a junto com o açúcar, tranca a porta e sai do vestiário caminhando rapidamente de volta para a academia.<br>
O ruivo comenta - "Venham, os pesos estão esperando", e segue o amigo....
</p>
</framed-text>
</blockquote>
<blockquote>
<h3>Uma lição sobre biologia humana</h3>
<div class="center" style="width:80%">
  <img src="https://pressbooks.calstate.edu/app/uploads/sites/3/2022/05/Carbohydrate-Digestion-768x1024.jpg" alt="Mobile Phone Addiction" style="display:block;width:100%">
  <p style="text-align:center">Digestão e Absorção de Carboidratos</p>
</div>
<p>
Quando você ingere açúcar (sacarose), seu corpo quebra esses dissacarídeos em 
moléculas individuais de sacarose e frutose. (monossacarídeos)<br>
Essas moléculas são então absorvidas pelo fígado.<br>
Aqui eles são convertidos em glicose.<br>
Agora, observe não importa qual carboidrato você ingere, seja frutose de 
carboidratos complexos, como frutas, sacarose do açúcar ou lactose de produtos lácteos, todos são convertidos em <strong>glicose</strong> no fígado.<br>
Esse é o único açúcar que nosso corpo utiliza, portanto, quando alguém testa seu
níveis de açúcar, eles fazem um teste de glicose, não um teste de frutose ou sacarose...<span style="font-size:2em">💭</span><br>
Agora o açúcar tem um alto índice glicêmico, o que significa que será absorvido 
rapidamente no sangue, o que faz com que o pâncreas libere insulina.<br>
Esta insulina então medeia o fluxo de glicose da corrente sanguínea 
nas várias células do corpo.<br>
<strong>
Esses caras da academia do Tait deviam saber que, à medida que as fibras musculares estavam sendo treinadas, elas consumiriam essa glicose rapidamente, pois ela seria quebrada para formar ATP.
</strong>
(O trifosfato de adenosina (ATP) é a fonte de energia para uso e
 armazenamento no nível celular)<span style="font-size:2em">💭</span><br>
O que é importante aqui é que a glicose que não é usada imediatamente
como ATP, será armazenado nos músculos esqueléticos como glicogênio.<br>
Agora, somente se você ingerir muitos carboidratos, <strong>(uma quantidade excessiva)</strong> essa glicose será convertida e armazenada como gordura.<br>
Outro ponto a ser observado é que quanto mais apto você estiver, 
e quanto mais você se exercita, mais seu corpo é capaz de armazenar glicogênio, que
abastece seus músculos, portanto, o potencial de armazenamento de carboidratos como gordura é altamente reduzido. <br>
Outro ponto positivo do exercício regular é que o corpo precisará
menos insulina a ser produzida para transportar a glicose do sangue para as células do seu corpo.<br>
<strong>A esta altura você já deve ter percebido que o exercício é uma atividade do segundo trimestre.<br>
Observe que, ao não se exercitar regularmente, você pode entrar no primeiro trimestre.</strong><br>
Portanto, o exercício tem o efeito de processar açúcares de forma mais eficiente e eficaz no corpo.<br>
<p>
Obviamente, esses caras sabiam que seus estoques de glicogênio estavam no ponto de esgotamento, então eles rapidamente fizeram uma pausa e reabasteceram a glicose.<br>
E o que é mais fácil do que uma colher de sopa de açúcar... que tem um alto índice GI...<span style="font-size:2em">💭</span><br>
<a href="https://www.youtube.com/watch?v=PHkFoiqTe9o">Exercício e açúcar: quando o açúcar pode ser uma coisa boa</a>
</p>

</p>
</blockquote>
<blockquote>
<h2>Não rotule as coisas como boas ou ruins</h2>
<div class="center" style="width:80%">
  <img src="https://media.gettyimages.com/id/914884690/vector/man-between-an-angel-and-devil.jpg?s=612x612&w=gi&k=20&c=L4NToO7GAVlBOslLmnWNGMgHlu1zVnt0cIyN1jvPkGY=" alt="Mobile Phone Addiction" style="display:block;width:100%">
  <p style="text-align:center">Good or Bad - gettyimages</p>
</div>
<framed-text>
Joana – “Mas espere um pouco.<br>
Sempre ouvi dizer que o açúcar faz mal."<br>
Carla – “Não, não é a gordura que faz mal.”<br>
Pipo - "Não faço ideia meninas, o que  acha, Rafa ?"<br>
Rafa - "Depende de como os rotula..."<br>
Joana,Carla e Pipo - "hu"<br>
Rafa – “Ambos são bons ou ruins.<br>
 "Experimente fazer um bolo com banha ou adicionar açúcar ao arroz..."<br>
todos - "hahahaha"<br>
</framed-text>
<p>
<div class="center" style="width:80%">
  <img src="https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png" alt="The FranklinCovey Time Matrix" style="display:block;width:100%">
  <p style="text-align:center">A Matriz do Tempo FranklinCoveyx</p>
</div>
Dê uma olhada na imagem da matriz de Covey novamente.<br>
Existem atividades como jogos, televisão, relaxamento etc.<br>
Isso pode levá-lo erroneamente a acreditar que eles são inerentemente desperdiçadores de tempo e, portanto, maus.<br>
Assim como o caso do açúcar.<br>
Não é assim, quero que você olhe especificamente para uma palavra específica,<br>
<strong><span style="display:inline-block;font-size:3em">EXCESSIVO</span></strong>
</p>
<blockquote>
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
<div>
<p>
References:<br>
<a href="https://www.amazon.es/Habits-Highly-Effective-People-Anniversary/dp/1471195201/ref=sr_1_1?adgrpid=164509666553&dib=eyJ2IjoiMSJ9.4Kvg1JAsqNDSCP3x6WQGTwBSkJH0jfwgx1t58_aRZiNLrLpkca-mgalkO73wKAYj5ipbPhYGV4ghgUqn4h8k0JI15WPEYDo7IAVFfm22WVj-P_7soYBTubjGkxVy0REzZO9aLp9Im1JnvY0KhXny0iL8qYpV9aii79P0gM71-Qx-qoOT-ZWGrP05BnlAlQx-IOk-tiYa0TLjOLMJPFrA0llzAEXEl1frHvxB-y-m8MYMwEWGHY3bib_JWmWsKONdDrXXDd8kws591c-CeoQVT5_YNLO_O-6KG02YEY7tpII.4LU8cD_DCfol51SXUCrHICsGR4Fw4KsEQTxmvfLkKRE&dib_tag=se&hvadid=701115443910&hvdev=c&hvlocphy=1011776&hvnetw=g&hvqmt=e&hvrand=14629492212094666268&hvtargid=kwd-48202088&hydadcr=17805_2371875&keywords=7+habits+of+highly+effective+people&qid=1721462191&sr=8-1">Seven habits of highly effective people</a><br>
<a href="https://www.franklincovey.com/blog/manage-your-time-and-energy-effectively/">Manage Your Time and Energy Effectively</a><br>
<a href="https://explodingtopics.com/blog/smartphone-usage-stats#top-smartphone-stats">Time Spent Using Smartphones (2024 Statistics)</a><br>
<a href="https://pressbooks.calstate.edu/nutritionandfitness/chapter/carbohydrate-digestion-and-absorption/">Carbohydrate Digestion and Absorption</a><br>
</p>
</div>
