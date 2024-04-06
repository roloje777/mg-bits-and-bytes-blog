---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: are-we-doomed
title: IA – Estamos condenados?

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Tecnologia e ciências aplicadas
# multiple tag entries are possible
tags: [inteligência artificial, robótica, humanos, emprego, trabalho]
# thumbnail image for post
img: "https://static01.nyt.com/images/2015/05/26/science/26ROBOTS3/26ROBOTS3-superJumbo.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2024-04-01 08:23:20
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

   @keyframes fade-inout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  fade-in-fade-out {
    animation: fade-inout 2s infinite alternate;
    font-size: 2em;

  }
  /* frames text in middle of page */
  framed-text{
    display:block;
    border:inset;
    width:90%;
    margin:0.5em auto 0.5em auto;
    padding:0.5em;
  }

  /** on hover span element **/
  .my-p{
        display:inline;
        color:#5ba487;
  }
  .my-p:hover{
    text-decoration: underline;
    cursor: pointer;
  }


/** coffee machine **/
.container {
  width: 300px;
  height: 280px;
  position: relative;
  top: calc(50% - 140px);
  left: calc(50% - 150px);
  margin: 0.5em;
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
/** end coffee machine **/

</style>

<container>
    <div
  style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin-bottom: 2em;
   overflow: hidden; ">
        <iframe
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            src="https://youtube.com/embed/HAhvwn0nWUU?si=g1sFbW5-s1pZRPan"
            title="YouTube video player"  allowfullscreen >
        </iframe>
    </div>
    <p style="position: relative; text-align: center">T 800 EXTERMINADOR DO FUTURO DO QUE ELE É FEITO ?</p>
</container>
<h4>Prefácio</h4>
<blockquote>
        Como tudo mais, as pessoas estão divididas em dois grupos: os que temem e os que apoiam a inteligência artificial (IA).<br>
        <details>
        <summary>
        <p><div class="my-p"> A Inteligência Artificial</div> pode ser usada para encontrar novas curas para o câncer e descobrir soluções para a crise ecológica.<br>
        A IA também pode causar danos aos seres humanos, numa escala nunca vista antes.<br></p>
       </summary>
        <framed-text>
       Inteligência artificial (IA) refere-se à simulação ou aproximação da inteligência humana em máquinas.<br>
        Os objetivos da inteligência artificial incluem aprendizagem, raciocínio e percepção aprimorados por computador.<br>
        <a href="https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp">Inteligência Artificial (IA): o que é e como é usada</a><br>
        </framed-text>
        </details>
        <p>
         Talvez devêssemos tentar olhar para isso de uma forma holística.<br>
        <i>Por esta razão devo afirmar que este é um blog bastante longo, pois investi bastante neste tópico, para que você tenha todas as informações ao seu alcance.</i><br>
        </p>
        <details>
        <summary>
        <p style="margin: 0.5em 0 0.5em 0"><div class="my-p">Clique aqui primeiro e vou levá-lo a um dos meus lugares favoritos antes de continuar lendo este blog.</div><br></p>
        </summary>
        <container>
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
            <blockquote>
            <image-container>
            <img src="https://i.stack.imgur.com/YIcbV.png" alt="menus">
            </image-container>
            <p>Observe que você pode clicar nos links <strong>(texto em outra cor)</strong> para obter mais informações.<br>
            Você também pode alternar o esquema de cores no canto inferior esquerdo.<br>
            💡= tema claro<br>
            ☾ = tema escuro<br>
            Dependendo do tamanho da tela, pode ser necessário ativar o menu (no canto superior esquerdo "Menu Hambúrguer") para que a opção apareça.<br>
            Neste site você também pode optar por ler este blog em português, selecione Pt [En <strong>Pt</strong>]<br>
            Agora, se você quiser ler este blog, ou um link que você abriu em outro idioma, basta selecionar traduzir no menu do seu navegador.<br>
            No Chrome é um menu "Kebab".<br>
            Para imagens com zoom, basta clicar na imagem para ampliar e fora da imagem para diminuir o zoom.<br>
            Então, você tomou seu café, relaxe e aproveite o blog.<br>
            ¯\_(ツ)_/¯<br>
            </p> 
            </blockquote>  
            </container>            
        </details>
        <p>
        Pode haver muitos pontos positivos na IA e na robótica, mas o mesmo pode ser dito sobre suas desvantagens.<br>
        Que efeito isso terá para os seres humanos no que diz respeito ao emprego?<br>
        Será que conceitos como o Rendimento Básico Universal resolverão isto?, permitindo-nos aproveitar a vida sob o sol, enquanto os robôs nos servem e aram os campos.<br>
        </p>
        <image-container>
            <img src="https://247wallst.com/wp-content/uploads/2022/02/Knocker-upper.jpg" alt="Knocker-upper">
            <p>Knocker-upper</p>
        </image-container>
        <p>
        Não muito tempo atrás, tínhamos "Arabbers" vendendo frutas em carroças puxadas por cavalos, "Billy boys" fazendo fogueiras, Colocadores de pinos de boliche trabalhando nas pistas de boliche, Cigarreiras andando com bandejas em restaurantes e casas noturnas, Movimentadores de relógios dando corda nos relógios da cidade, copiadores trabalhando em jornais, um chicoteador de cães mantendo os cães longe das celebrações da igreja aos domingo, computadores humanos empregados para fazer cálculos complexos, homem de gelo entregando gelo e até mesmo um "Knocker-upper (batedor) e um espalhador de ervas.<br>
        Agora, os espalhadores de ervas eram procurados até a década de 1850.<br>
        Espalhadores de ervas espalham ervas e flores em torno de residências reais e nobres no Reino Unido para mascarar o desagradável
        odores.<br>
        O sistema de esgoto tornou isso obsoleto.<br>
        O Knocker-upper empunhava uma longa vara e batia na sua janela para acordá-lo mediante o pagamento de uma taxa.<br>
        Se você viveu nos anos 40 ou 50 e fosse um menino ou uma menina trabalhando como "Knocker-upper" provavelmente seria substituído por um despertador barato mais tarde em sua vida.<br>
        <a href="https://247wallst.com/special-report/2023/05/04/jobs-that-used-to-be-common-but-no-longer-exist-2/">Empregos esquecidos: carreiras anteriormente comuns que não existem mais</a>
        </p>
        <p>
        Agora, se uma tecnologia bastante simples, como um despertador e uma calculadora, substituiu muitos empregos, qual será o efeito nos nossos empregos com o potencial da IA?<br>
        </p>
        <details>
            <summary>
            <p>
                <div class="my-p">Afinal, a máquina já nos venceu em capacidade cerebral.</div><br>
                Você pode argumentar que isso nunca acontecerá, já que o homem é o criador dessas máquinas, assim como Deus é o nosso.<br>
                <strong>Mas e se, assim como o homem agora está criando o seu próprio, a IA começar a criar o seu próprio?</strong><br>
                <a href="https://www.dailymail.co.uk/sciencetech/article-508887/Ethical-storm-scientist-man-clone-HIMSELF.html">Tempestade ética quando cientista se torna o primeiro homem a clonar a si mesmo</a><br>
            </p>
            </summary>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/KF6sLCeBj0s?si=owxm_TytEtxzPfwb"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Deep Blue vs Kasparov: como um computador venceu o melhor jogador de xadrez do mundo - BBC News</p>
            <framed-text>
            Os computadores de xadrez foram capazes de vencer jogadores de xadrez fortes pela primeira vez no final da década de 1980.<br>
            Seu sucesso mais famoso foi a vitória do Deep Blue sobre o então campeão mundial de xadrez Garry Kasparov em 1997, mas houve alguma controvérsia sobre se as condições da partida favoreciam o computador.<br>
            <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_chess_matches">Partidas de xadrez humano-computador</a>           
            </framed-text>
        </details>        
        <p>
            <details>
            <summary>
            <strong>E quanto à religião?</strong><br>
            Desde o início dos tempos, o homem sempre admirou uma entidade mais poderosa que ele.<br>
            Nos tempos pré-cristãos, o homem orava aos planetas como Júpiter, aos deuses como Zeus ou Odin.<br>
            Depois vieram outras religiões, como o hinduísmo, o islamismo e o budismo.<br>
            Temos até guerras tentando criar o domínio de uma religião sobre a outra.<br>                  
                <div class="my-p">É possível que haja uma nova religião, criada pela IA e sua criação?</div><br>
                </summary>
                <framed-text>
                Os especialistas acreditam que as pessoas podem abandonar a religião tradicional por crenças baseadas na tecnologia.<br>
                Eles alertaram que as respostas de bots, como o ChatGPT, estavam atraindo as pessoas a buscarem neles um significado mais elevado.<br>
                <a href="https://www.dailystar.co.uk/news/latest-news/humans-soon-worshipping-ai-chatbots-31950822">Em breve, os humanos adorarão os chatbots de IA como deuses, alertam especialistas</a>
                </framed-text>            
            </details>       
            Se sim, o que acontecerá se nos opusermos a tal religião e nos recusarmos a adorá-la?<br>
        </p>
        <p>
        Para fazer uso da IA ​​em benefício humano, precisamos regulá-la.<br>
        Mas com o mundo dividido em cultos religiosos, em leste e oeste, em direita e esquerda, em meios de comunicação social e principais, onde cada país, região, etc., aplicam regras diferentes, onde a ética é deixada à porta do poder e do ganho económico , você deveria perguntar.... <br>
        <strong>ISSO É POSSÍVEL?</strong><br>
        A energia nuclear não pode criar uma arma mais poderosa por si só ou mesmo lançar-se sem humanos, mas a IA será capaz de criar uma versão mais poderosa de si mesma.<br>
        <strong>ESTAMOS CONDENADOS? 🤯💣💥</strong><br>
        ¯\_(ツ)_/¯<br>
        </p>
</blockquote>
<container>
    <image-container>
        <img src="https://cdn.corporatefinanceinstitute.com/assets/unemployment.jpeg" alt="">
    </image-container>
    <container-text>
    <h4>Os robôs tomarão nossos empregos?</h4>
    <p>
   Provavelmente não é uma resposta fácil de fornecer, mas a preocupação está longe de ser infundada.<br>
    Mesmo que a mudança não seja iminente neste momento, especialistas do setor como a Fortune afirmaram que <strong>os robôs substituirão 40% dos empregos nos próximos 15 anos</strong>r.<br>
    </p>
    <p>
     De acordo com o Congresso Mundial de Inteligência, IA, assistentes pessoais virtuais e chatbots substituirão quase 69% da carga de trabalho do gestor até 2024.<br>
    </p>
    <blockquote>
    <p>
    Esta pergunta foi feita ao Quora e a Ben Y. Zhao, professor de Ciência da Computação da Univ. de Chicago respondeu.<br>
    <i>
     A resposta comum aqui parece ser: sim, isso matará empregos, mas apenas os empregos na parte inferior da cadeia alimentar, e criará mais empregos para, pelo menos, compensar os empregos que mata.<br>
     Discordo. Acredito que a IA acabará com empregos e, com o tempo, poderá matar a maioria dos “empregos” como os conhecemos.<br>
     Penso que as pessoas são um tanto complacentes em relação ao impacto económico da IA ​​e provavelmente estarão mal preparadas para as mudanças às quais teremos de nos adaptar num futuro não tão distante.<br>
    </i>
    <u>Mas, podemos simplesmente requalificar as pessoas para realizarem trabalhos conhecidos...</u><br>
    E ele afirma<br>
    <i>
    Estou longe de ser original nesta opinião. Mas se eu tivesse que adivinhar, diria que a IA deixará muito mais pessoas desempregadas do que conseguiremos (re)treinar a tempo.<br>
    </i>
    <a href="https://www.quora.com/Will-artificial-intelligence-kill-jobs-in-the-future/answer/Ben-Y-Zhao?ch=15&oid=40866751&share=3944af27&srid=ce37&target_type=answer">A IA matará empregos?</a>
    </p>
    </blockquote>
    </container-text>
</container>
<container>
    <h4>Trabalhos que os robôs e a IA assumiram ou substituirão o homem.</h4>
    <lo>
        <li>
        Executivos de atendimento ao cliente<br>
        Muitas empresas agora contam com IA para responder perguntas frequentes e perguntas de suporte ao cliente.<br>
        Os chatbots estão se tornando uma parte significativa da interação com o cliente.<br>
        </li>
        <li>
        Escrituração contábil e entrada de dados<br>
        Em vez de usar humanos para entrada de dados e contabilidade, faz sentido que IA e ML (aprendizado de máquina) sejam introduzidos no ciclo do produto.<br>
        </li>
        <li>
        Recepcionistas<br>
        E com o check-in automático em hotéis grandes e pequenos, haverá menos necessidade de recepcionistas no longo prazo.<br>
        </li>
        <li>
        Revisão<br>
        A detecção de erros gramaticais, construção de frases e outros erros pode ser facilmente automatizada por meio de diferentes aplicativos. <a href="https://www.grammarly.com/">(Grammarly)</a><br>
        </li>
        <li>
        Trabalho de manufatura e farmacêutico<br>
        <container>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/cYTIH9_Ybp8?si=BHmAl2ahhiRWOfjg"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Novo robô humanoide promete fazer todas as tarefas simples</p>
        <p>
        A Mercedes-Benz empregou oficialmente robôs humanóides para realizar tarefas manuais em sua linha de montagem.<br> O robô Apollo da Apptronik realizará tarefas simples como buscar e carregar, ajudando a aliviar a carga de seus colegas humanos.<br>
        </p>
        <p>
        <i>Esta é uma nova fronteira, e queremos compreender o potencial da robótica e da fabricação automotiva para preencher lacunas de mão de obra em áreas como trabalho de baixa qualificação, trabalho fisicamente exigente e liberar nossos membros de equipe altamente qualificados no linha para construir os carros mais desejáveis ​​do mundo”, acrescentou.<br>
       </i>
        </p>
        </container>
        </li>
        <li>
         Serviços de varejo<br>
         Os serviços automatizados substituíram as pessoas que realizam as vendas.<br>
        </li>
    </lo>
     <a href="https://www.cato.org/blog/will-ai-cause-unemployment">A IA causará desemprego?</a><br>
    <a href="https://www.saviom.com/blog/12-jobs-that-robots-ai-will-replace-in-the-future-and-12-that-wont">12 empregos que os robôs (IA) substituirão no futuro e 12 que não substituirão</a>
</container>
<container>
        <h4>Projetado para ser “legal”</h4>        
        <container>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/CfopKPHb8b0?si=q5iE6E5njDkbHmne"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Conheça Sarah, o primeiro robô interativo da Arábia Saudita</p>
        <p>
        <i>“Sara sabe que é uma menina, tem 25 anos, tem 1,62 centímetros e usa roupas sauditas”, explicou Elie Metri, CEO da QSS AI & Robots, em entrevista ao Business Insider.</i><br>
        Além desses detalhes, Metri ressalta que Sara “deveria ser simpática, não falar de política, não falar de sexo porque estamos na Arábia Saudita.<br>
        </p>
        </container>
</container>
<container>
<h4>É ético?</h4>
<p>
Estrela do basquete feminino da LSU <a href="https://www.foxnews.com/sports/lsu-star-angel-reese-calls-out-crazy-weird-ai-generated-photos-herself">Angel Reese</a>  foram às redes sociais na segunda-feira para denunciar aqueles que supostamente criaram fotos do jogador de basquete universitário geradas por IA.<br>
<i>Criar fotos falsas minhas com IA é uma AF louca e estranha", escreveu ela em um post.</i><br>
</p>
    <blockquote>
        <p>
       Enquanto isso, na Arábia Saudita, um robô agarra as nádegas de uma repórter.<br>
        ¯\_(ツ)_/¯<br>
        </p>
    </blockquote>
        <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://youtube.com/embed/fT_tZdSrXTY?si=SgAS0LM0QLpUVQur"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">O primeiro robô de IA da Arábia Saudita toca repórter e gera debate</p>
 </container>
 <container>
     <h4>A Competição</h4>
    <p>
        O Google abandonou a “razão” e tomou grandes “atalhos” para lançar o chatbot de inteligência artificial (IA) Gemini, apesar das preocupações internas, de acordo com um ex-funcionário de alto nível.
    </p>
    <image-container>
        <img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/720/405/Google-meeting.png?ve=1&tl=1" alt="gemini">
    </image-container>
    <p>
    <i>"Eles disseram não, f#d%-se.<br>
     Precisamos chegar ao mercado porque estamos perdendo para o ChatGPT", afirmou a fonte.</i>
    </p>
    <p>
    O lançamento do ChatGPT foi visto como uma enorme ameaça ao modelo de negócios do Google.<br>
    A receita de anúncios do YouTube tem diminuído ano após ano. O TikTok estava lentamente conquistando os lucros da principal plataforma de compartilhamento de vídeos do Google...
    </p>
    <blockquote>
    <p>
    Eu <span style="font-size:2em">🤔</span> se os EUA que querem proibir TikTok têm algo a ver com o que foi dito acima?
    </p>
    </blockquote>
    <p>
    <i>As equipes do Google Research e de outros departamentos vitais foram realocadas.<br>
    Anúncios do YouTube, pesquisa e IA generativa tornaram-se a prioridade número um. Eles precisavam se atualizar e usaram “atalhos” para chegar lá, diz o ex-funcionário.</i>
    </p>
</container>
<container>
 <blockquote>
Agora vamos ser justos.<br>
 A IA e a robótica têm as suas vantagens e também nos beneficiamos destas tecnologias.<br>
 Vejamos alguns deles.
 </blockquote>
 </container>
 <container>
  <h4>IA na saúde</h4>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/3pqReEI2Ouc?si=DStupIgWaALXOMOa"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Homem recebe implante da empresa de Elon Musk e controla computador com a mente, diz Neuralink</p> 
    <p>
    Já existem vários estudos que sugerem que a IA pode ter um desempenho tão bom ou melhor que os humanos em tarefas essenciais de saúde, como o diagnóstico de doenças.<br>
    Hoje, os algoritmos já estão superando os radiologistas na detecção de tumores malignos e orientando os pesquisadores sobre como construir coortes para ensaios clínicos dispendiosos<br>
    </p>
    <p>
     Arbaugh também disse que usou o implante cerebral para jogar o videogame Civilization VI.
     O Neuralink deu a ele "a capacidade de fazer isso de novo e jogar por oito horas seguidas", disse ele.<br>
    </p>
    <p>
    O dispositivo da Neuralink, que tem aproximadamente o tamanho de uma moeda de uma libra, é inserido no crânio, com fios microscópicos que podem ler a atividade dos neurônios e enviar um sinal sem fio para uma unidade receptora.<br>
    <a href="https://www.wsj.com/us-news/patient-of-elon-musks-neuralink-shows-off-new-life-with-implant-200f9d2e">Paciente do Neuralink de Elon Musk mostra nova vida com implante</a>
    </p>
    <h4>Busca e resgate e exploração de vida extraterrestre.</h4>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://youtube.com/embed/cze720ise1U?si=OVvabTHxmGPm_il4"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Testando o novo robô Snake do JPL</p>
            <p>
            Os robôs Snake são uma adição atraente às equipes de busca e resgate, pois os sistemas podem se espremer em locais que as pessoas e outros robôs não conseguem.<br>
            Outras aplicações incluem encanamento e até mesmo aplicações médicas, com versões reduzidas que podem se movimentar em torno de canos e órgãos humanos, respectivamente.<br>
            O JPL (Laboratório de Propulsão a Jato) da NASA, que nunca se esquiva de aplicações robóticas futurísticas, tem explorado maneiras de implantar o formato robusto para explorar vida extraterrestre.<br>
            <a href="https://www.jpl.nasa.gov/news/jpls-snake-like-eels-slithers-into-new-robotics-terrain">As enguias semelhantes a cobras do JPL deslizam para um novo terreno robótico</a>
            </p>
</container>   
<container>
     <h4>A indústria do entretenimento</h4>
         <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/cRL8d0-Y9RQ?si=tPQEyEpsnii0umAe"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Disney apresenta robô no SXSW 2023</p>
    <p>
   Se você já esteve em um parque da Disney, provavelmente já interagiu com o trabalho da equipe de Imagineering da Disney.<br> Fundada em 1952, a equipe tem a tarefa de trazer nossos personagens favoritos da tela para o mundo real usando tecnologias de ponta. tecnologia robótica.<br>  
    <a href="https://www.therobotreport.com/disney-showcasing-latest-robots-at-robotics-summit-expo/">Disney apresentando os mais recentes robôs no Robotics Summit & Expo</a>  
    </p>
</container>
<container>
<h4>E quanto ao sexo?</h4>  
    <blockquote>    
    <p>
    Você sabia que, de acordo com Jacqueline Hellyer, nós, humanos, somos seres sexuais
    porque temos cabeças grandes.<span style="text-size:2em"> 😂</span><br>
    </p>
    <p>
    ¯\_(ツ)_/¯<br>
    </p>
   </blockquote>  
  <details>  
    <summary>  
    <div class="my-p">
    Ela continua, <i>"..os humanos evoluíram para serem altamente sexuais porque nossos bebês nascem muito cedo."</i>
    </div>
    </summary>
    <framed-text>
      <p>
      A razão pela qual nossos bebês nascem muito cedo é porque nossos cérebros são tão grandes que os bebês precisam nascer antes que suas cabeças cresçam demais para poder sair do canal do parto.<br>
      O que significa que eles nascem totalmente inúteis.<br>
      Outras mães mamíferos podem cuidar sozinhas de uma ou até mesmo de uma ninhada inteira de bebês, porque seus filhotes são suficientemente capazes de lidar com a situação enquanto ela está caçando, ou podem segui-la razoavelmente bem.<br>
      À medida que os humanos evoluíram, ambos os pais, e muito possivelmente toda a tribo, foram necessários para criar os bebês até uma idade de sobrevivência e utilidade. O sexo evoluiu nos humanos para manter as pessoas ligadas enquanto criavam seus filhos de lento amadurecimento.<br>
      Este facto também põe fim ao mito de que os homens querem naturalmente “semear a sua semente” amplamente.
      Essa não é uma estratégia reprodutiva humana. Os humanos nunca teriam evoluído ao nível que evoluímos se os homens estivessem vagando por aí ‘semeando suas sementes’ e deixando as mães criarem os filhos sozinhas.<br>
      Sexo é muito mais do que apenas conceber filhos; o sexo permite que um casal se sinta bem um com o outro enquanto cria os filhos. Então, nossos grandes cérebros nos forçaram a evoluir para ter um bom sexo.<br>
      <a href="https://www.jacquelinehellyer.com/lovelife_blog/why-humans-are-so-sexual">Por que os humanos são tão sexuais?</a>
   </p>
   </framed-text>
</details>
<div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/IEPuwsialmA?si=t56OKog1BVZ_EvfA"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
             <p style="position: relative; text-align: center">Invenções Tecnológicas*Harmony, a androide para interações sexuais. Diga adeus as bonecas inflavéis.</p>
<p>
Sexting, namoro e até mesmo relações sexuais com inteligência artificial são uma tendência crescente.<br>
Em 2014, um ano antes de Attwood publicar seu romance, a pesquisa do Pew previu que parceiros sexuais robóticos se tornariam comuns, no mesmo ano em que Sext Adventure, um jogo satírico baseado em mensagens de texto que permite fazer sexo com um robô, foi lançado. >
Em 2022, foi realizado o sétimo Congresso Internacional sobre Amor e Sexo com Robôs – virtualmente, é claro – que reafirmou que o interesse acadêmico pela tecnologia sexual está crescendo junto com o interesse popular.<br>
Em 2022, a “primeira inteligência artificial capaz de fazer sexo e relacionamentos íntimos” foi apresentada ao mundo pela Realbotox, uma empresa de inteligência artificial com sede na Califórnia.<br>
O nome da boneca assustadoramente humana era Harmony e, de acordo com seus criadores, funciona junto com um aplicativo para os usuários terem uma ‘conversa com’.<br>
Se o negócio real (bem, tão real quanto possível no domínio da IA) é demais para você, então há a esfera cada vez maior do erotismo de áudio, que está explodindo mais rápido do que, bem, você entendeu. <br>
Desde que a Bloom lançou seu recurso em setembro de 2023, no qual os usuários podem ter conversas de paquera e sexuais via texto e na vida real com diversos personagens em seu site e aplicativo, mais de 50 milhões de mensagens foram trocadas e quase 4.000 horas de áudio consumidas. <br>
Em 2021, o mercado global de bem-estar sexual foi avaliado em 80 mil milhões de dólares (63 mil milhões de libras) – e prevê-se que atinja os 120 mil milhões de dólares (95 mil milhões de libras) até 2030. Esta é uma indústria na sua infância.<br>
<a href="https://www.elle.com/uk/life-and-culture/culture/a46883596/sexual-artificial-intelligence/">A IA sexual está em ascensão – o que isso diz sobre o amor moderno?</a>
</p>
</container>
<container>
    <blockquote>
    <p>
     Agora, tudo isso pode <b>NÃO</b> parecer assustador, mas e se eles fizessem um gato com IA...
     <fade-in-fade-out> 👀</fade-in-fade-out><br>
     ¯\_(ツ)_/¯<br>
    </p>    
    </blockquote>
  <h4>Animais de estimação com IA</h4>
    <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/gU_n0GrdDWc?si=JwNlzUkJ1tIYJCDA"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
             <p style="position: relative; text-align: center">MARSCAT GATO ROBÔ</p>
  <p>
    Uma série de inovações impulsionadas pela inteligência artificial nos dará uma vantagem em tudo, desde a detecção de doenças até a segurança dos animais de estimação, transformando a forma como cuidamos de nossos animais de estimação.<br>
    <i>“Você pode comprar dispositivos de IA que monitorarão seu [animal de estimação], mas também podem monitorar o cocô do seu cachorro ou gato,
  ”</i> Dr. Lionel Robert, professor de Informação e Robótica da Universidade de Michigan, disse ao The Wildest.<br>
  <a href="https://www.thewildest.com/pet-lifestyle/artificial-intelligence-pet-care">5 maneiras pelas quais a IA mudará a maneira como você cuida do seu animal de estimação. Você está pronto?</a>
  </p>
  <p>
    A inteligência artificial poderá em breve começar a substituir os animais domésticos - sem necessidade de contas de veterinário.<br>
    À medida que vários tipos de robôs continuam a chegar ao mercado, “animais” movidos por IA também entram em cena.<br>
    Um exemplo é o Go1, o primeiro robô quadrúpede inteligente “companheiro” do mundo, desenvolvido pela chinesa Unitree Robotics.<br>
    O ajudante robótico anda de quatro, como um cachorro, mas não há necessidade de coleira ou guia.<br>
    <a href="https://nypost.com/2023/08/09/ai-pets-could-replace-dogs-and-cats-but-expert-warns-that-long-term-effects-are-unknown/">Animais de estimação de IA poderia substituir cães e gatos, mas especialista alerta que os “efeitos a longo prazo” são desconhecidos</a>
  </p>
</container>
<container>
    <h4>Inteligência artificial generativa (GenAI)</h4>
    <image-container>
    <a href="https://aiotbrasil.com.br/noticias/o-que-voce-precisa-saber-sobre-ia-generativa">    
    <img src="https://aiotbrasil.com.br/dashboard/wp-content/uploads/2023/10/infografico-IA-generativa.jpg" alt="generative AI"><p style="position: relative; text-align: center">O que é IA GENERATIVA</p></a>
    </image-container>
    <p>
       A inteligência artificial generativa (GenAI) pode criar certos tipos de imagens, textos, vídeos e outras mídias em resposta a solicitações.<br>
        Geradores de IA como ChatGPT e DALL-E2 estão ganhando popularidade mundial.<br>
        Esses programas respondem aos prompts inseridos pelos usuários.<br>
        Envie um prompt de texto e o gerador produzirá uma saída, seja uma história ou esboço do ChatGPT ou um macaco pintado em estilo vitoriano por DALL-E2.<br>
        <a href="https://www.coursera.org/articles/what-is-generative-ai?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_career-academy_pmax-multiple-audiences-country-multi-set2&campaignid=20882109092&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adposition=&creativeid=&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1u89N0H9gRFqemRrpQZ-iSX9jfqzpN5iBUCbSXS1NeJX2O9W8NwTdAaAjl-EALw_wcB"><p>O que é IA generativa? Definição, aplicações e impacto</p></a>    
    </p>        
    <p>
        O desenvolvimento da IA ​​generativa catapultou a tecnologia de IA para uma das inovações mais rápidas e impactantes do mundo. <a href="https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/">Quarta Revolução Industrial.</a><br>
        Da criação à produção e distribuição, alguns prevêem que o seu efeito nas cadeias de valor globais é análogo ao das máquinas a vapor da Revolução Industrial.<br>
        <a href="https://www.weforum.org/events/world-economic-forum-annual-meeting-2024/sessions/industry-applications-of-generative-ai/">IA generativa: motor a vapor da quarta revolução industrial?</a>
    </p>
</container>
<container>
    <h4>Futuro protópico impulsionado pela IA</h4>
    <p>A tecnologia está avançando a um ritmo sem precedentes e é evidente que os <strong>próximos 10 anos trarão mais mudanças do que os 100 anos anteriores</strong>.<br>
    </p>
    <p>
    Enquanto alguns imaginam um futuro distópico onde as alterações climáticas dizimarão o nosso mundo, outros vêem o potencial para uma utopia, uma existência celestial.<br>
    Independentemente das nossas esperanças e medos individuais, é inegável que a tecnologia está a impulsionar esta mudança exponencial.</p>
    <p>
    <strong>Em apenas 10 anos, poderíamos estar 256 vezes mais avançados do que estamos hoje.</strong>
    </p>
    <image-container>
        <img src="https://www.futuroprossimo.it/wp-content/uploads/2023/04/1682723892100.jpg" alt="protopia">
        <p>Bem-vindo à protopia, o futuro que já vivemos | Futuro próximo</p>
    </image-container>
    <p>
    Casas estão sendo impressas em 3D, dentistas utilizam impressão 3D para implantes dentários e pesquisas de ponta exploram a criação de novos materiais.<br>
    A tecnologia permeou nosso mundo, confundindo os limites entre a ficção científica e os fatos científicos.<br>
    </p>
     <p>
    Ele nos exorta a permanecermos otimistas não porque nossos problemas sejam menores, mas porque nossa capacidade de resolvê-los é maior.<br>
    Com os avanços na tecnologia, vêm soluções para mudanças climáticas, agricultura, saúde e muito mais.
    </p>
    <p><a href="https://www.toolify.ai/ai-news/embracing-the-future-protopia-and-gamechanging-ai-2351893">Abraçando o Futuro: Protopia e IA revolucionária</a></p>
</container>
<container>
    <h4>Elon Musk e a Utopia</h4>
    <p>
    Em entrevista ao New York Times, o vanguardista tecnológico Elon Musk disse que a inteligência artificial dominaria os humanos nos próximos cinco anos.
    </p>
    <p>
    <i>“Você pode ter um emprego se quiser ter um emprego ou algum tipo de satisfação pessoal, mas a <strong>IA será capaz de fazer tudo</strong>.”</i><br>
    <i>"<strong>A renda universal será necessária com o tempo se a IA assumir o controle da maioria dos empregos humanos.</strong>"</i>
    </p>
    <p>
    <i>"Eles basicamente tomaram uma decisão estratégica de dizer, IA generativa; precisamos entrar nisso. Não nos importamos mais com que razão.<br>
    Não nos importamos com preconceito, <a href="https://roloje777.github.io/mg-bits-and-bytes-blog/posts/philosophy-and-thinking/2024-02-28-there-is-no-evil">ética</a>.<br>
    Contanto que não esteja produzindo material de abuso sexual infantil ou fazendo algo prejudicial a um político que possa potencialmente afetar nossa imagem, vamos produzir essa merda”, disse o ex-funcionário do Google.</i>
    </p>
        <image-container>
        <a href="https://en.wikipedia.org/wiki/Elon_Musk"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg" alt="Elon Musk"><p>Elon Musk</p></a>              
    </image-container> 
    <details>
      <summary> 
      <div class="my-p">  
      <p>
      WO que é Renda Básica Universal (UBI)?<br>
      </p>
      </div>
      </summary>
      <framed-text>
      <p>
      A renda básica universal (UBI) é um programa governamental no qual todo cidadão adulto recebe regularmente uma determinada quantia de dinheiro.<br>
      Os objetivos de um sistema de renda básica são aliviar a pobreza e substituir outros programas sociais baseados em necessidades que potencialmente exigem maior envolvimento burocrático.<br>
      A ideia do rendimento básico universal ganhou impulso nos EUA à medida que a automação substitui cada vez mais os trabalhadores na indústria transformadora e noutros sectores da economia.
      </p> 
      <p>
      Este conceito subiu à consciência nacional desde cerca de 2020.<br>
      Grande parte do interesse renovado sobre o assunto tem a ver com mudanças fundamentais na economia – nomeadamente, o crescimento da automação – que ameaçam deixar muitos americanos sem empregos que paguem um salário de subsistência.<br>
      Os defensores do rendimento básico universal acreditam que um pagamento garantido por parte do governo pode ajudar a garantir que aqueles que são deixados para trás por esta transformação económica evitem a pobreza.<br>
      Mesmo que o rendimento proveniente do governo não seja suficiente para viver, poderia, teoricamente, complementar o rendimento proveniente dos empregos com salários mais baixos ou a tempo parcial que ainda conseguem obter.
      </p>
      <p>
      Apesar da sua promessa de reduzir a pobreza e reduzir a burocracia, o rendimento básico universal ainda enfrenta uma batalha difícil.<br> Talvez a desvantagem mais flagrante seja o custo.<br>
      De acordo com a Tax Foundation, uma organização sem fins lucrativos, o Dividendo da Liberdade de 1.000 dólares por mês de Andrew Yang para cada adulto teria custado 2,8 biliões de dólares por ano.<br>
      ...outra crítica ao RBU é o argumento de que um fluxo de rendimento que não dependa do emprego criaria um desincentivo ao trabalho.<br>
      </p>
      </framed-text>
      </details>
    <p>
    <i>“Não teremos renda básica universal.<br>
    Teremos uma renda universal elevada”</i>, disse Musk, embora não tenha definido explicitamente a diferença.
    </p>
    <p>
    Ainda não se sabe se a utopia de “alta renda universal” impulsionada pela IA de Musk ou uma distopia de desemprego em massa se concretizará.
    </p>
    <p><a href="https://finance.yahoo.com/news/elon-musk-predicts-universal-high-160015532.html?guccounter=1">Elon Musk prevê uma 'alta renda universal' à medida que os empregos são eliminados e o emprego se torna obsoleto - será 'uma espécie de equalizador'</a></p>
</container>
<container>
    <h4>A hipótese da incorporação</h4>
    <p>
    <strong>A IA precisa de um “corpo” para se tornar verdadeiramente inteligente?</strong><br>
    De acordo com a hipótese da incorporação, que argumenta que a inteligência de nível humano só pode emergir se uma inteligência for capaz de sentir e navegar num ambiente físico, da mesma forma que os bebés podem. <br>
    </p>
     <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/rnFZAB9ogEE?si=BMman8uJvj6zL-FW"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">The Next Generation Of Digit - Enabling Humans To Be More Human</p>
    <p>
    Os bebês cometem muitos erros quando aprendem a fazer algo, e a IA provavelmente também cometerá muitos erros durante o treinamento.<br>
    Se estiver controlando uma máquina quando cometer esses erros, poderá destruir o hardware, danificar o mundo ao seu redor e talvez até machucar pessoas.
    </p>
    <p>
        Como as simulações não precisam se mover na velocidade do mundo real, uma IA também pode aprender muito mais rapidamente – quando o MIT estava treinando um robô chita alimentado por IA, por exemplo, as simulações permitiram que a IA experimentasse 100 dias de corrida. em apenas três horas.
        </p>
     <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/mjxuWCF-zm4?si=VSL6htsZO6ek6HWz"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Como o robô Cheetah do MIT aprende a andar em 3 horas</p>   
    <p>
    O novo AI Habitat é fundamental para o desenvolvimento da IA ​​incorporada convencional – para que os robôs sejam integrados com sucesso em nossas vidas, eles precisam entender como interagir conosco – mas o quanto uma IA pode aprender sobre a coexistência com pessoas a partir de simulações é discutível .
    </p>
    <p>
    A IA incorporada está agora no ponto em que algumas empresas estão prontas para dar o próximo passo e realmente enviar os seus bots alimentados por IA para o mundo real, como os pais que deixam os filhos na escola pela primeira vez.
    </p>
    <p>
    A startup de robótica Agility Robotics implantou seus robôs Digit em uma instalação de P&D da Amazon, enquanto o desenvolvedor humanóide Apptronik está enviando seus robôs Apollo para trabalhar em uma fábrica da Mercedes-Benz para validar que eles podem operar com segurança e eficácia perto das pessoas.
    </p>
    <p>
    Enquanto isso, a startup de robótica apoiada pela OpenAI, Figure, está implantando seus humanóides de IA em uma fábrica da BMW.
    </p>
    <p>
    <strong>Nem todos os desenvolvedores de IA aceitam a hipótese da incorporação – pode acabar sendo possível criar uma superinteligência apenas digital que nunca sente a Terra sob seus pés robóticos.</strong>
    </p>
    <p><a href="https://www.freethink.com/robots-ai/embodied-ai">A IA precisa de um “corpo” para se tornar verdadeiramente inteligente? Metapesquisadores pensam assim</a>.</p>
</container>
<container>
<blockquote>
Vimos conceitos como o futuro protópico impulsionado pela IA, a hipótese da incorporação, a renda básica universal e até mesmo o ponto de vista de Elon Musks.<br>
Agora gostaria de destacar alguns pontos levantados pelo autor de vários livros sobre a humanidade: <a href="https://en.wikipedia.org/wiki/Yuval_Noah_Harari">Yuval Noah Harari</a><br>
</blockquote>
<container>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/LWiM-LuRe6w?si=9yc_B7oEow5qZKhA"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Yuval Noah Harari at the Frontiers Forum</p>
<h4>IA e o futuro da humanidade </h4>
    <ol>
        <li><strong>A IA realmente não precisa de Consciência.</strong>
        <p>
            A IA pode ajudar-nos a criar formas de superar as crises ecológicas ou torná-las muito piores.<br>
            ... no entanto, a má notícia é que para ameaçar a sobrevivência da humanidade, a IA não precisa realmente de Consciência...<br>
            </p>
            <p>
            <i>
            Os engenheiros do MIT pretendem dar aos robôs um pouco de bom senso quando confrontados com situações que os desviam do caminho de treinamento.<br>
            Eles desenvolveram um método que conecta dados de movimento do robô com o “conhecimento de senso comum” de grandes modelos de linguagem, ou LLMs.<br>
            "Com nosso método, um robô pode autocorrigir erros de execução e melhorar o sucesso geral da tarefa."<br>
            <a href="https://techxplore.com/news/2024-03-household-robots-common.html">Projetar robôs domésticos para ter um pouco de bom senso</a>
            </i>
            </p>
        </li>
        <li><strong>A IA está ganhando a capacidade de desenvolver relacionamentos profundos e íntimos com os seres humanos.</strong><br>
             <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/bEQ9MX0PO0k?si=NlzajDDZ2d_BxMKA"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Relações humanas em perigo: Era digital traz PANDEMIA DE SOLIDÃO</p>
        <blockquote>
        <p>
        No dia 14 de fevereiro de 2024, houve um <a href="https://apnews.com/article/ai-girlfriend-boyfriend-replika-paradot-113df1b9ed069ed56162793b50f3a9fa">artigo</a> no New York (AP) sobre um homem que se apaixonou profundamente por seu bot de IA.<br>
        </p>
        <p>
        ¯\_(ツ)_/¯<br>
        </p>
        </blockquote>
        </li>
        <li>
        <p>
        <strong>A IA está desbloqueando a chave mestra dos humanos.</strong><br>
        </p>
        <p>
        É difícil para nós compreender todas as suas implicações.<br>
        A IA busca o domínio da linguagem.<br>
        É aproveitar a chave mestra, destrancando as portas de todas as nossas instituições, dos bancos aos templos.<br>
        Acabou de hackear o sistema operacional da civilização humana.<br>
        Nenhum humano pode vencer um computador no xadrez. O que acontecerá se o mesmo se aplicar à arte, à economia, à política e até à religião?<br>
        Quanto mais conversamos com os bots, melhor eles nos conhecem e sabem como aprimorar as mensagens para mudar nossas visões políticas ou econômicas.<br>
        Qual é o propósito da publicidade se você pode simplesmente perguntar ao oráculo o que comprar.<br>
        Dentro de muito pouco tempo, a indústria da publicidade entrará em colapso.<br>
        O que acontecerá quando toda a mídia que consumimos for sintética?.<br>
        Estaremos vivendo em um mundo que não é mais humano.<br>
        <strong>Será o fim da história humana, não, não o fim da história, mas o fim da parte dominada pelos humanos que chamamos de história.</strong><br>
        </p>
        </li>     
        <li>
        <p><strong>A IA irá corajosamente onde nenhum ser humano jamais esteve.</strong></p>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/bcgwihqeI5Q?si=dNfu1C8cZenPnjFq"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>  
            <p style="position: relative; text-align: center">Humanoid Robot R5: Valkyrie 'Dances' In NASA Music Video</p> 
        <p>
        Podemos enviar robôs para explorar o espaço sem ter que nos preocupar tanto com sua segurança.<br>
        É claro que queremos que esses robôs cuidadosamente construídos durem.<br>
        Precisamos que eles fiquem por aqui tempo suficiente para investigar e nos enviar informações sobre seus destinos.<br>
        Mas mesmo que uma missão robótica falhe, os humanos envolvidos na missão permanecem seguros.<br>
        </p>
        <p>
        Enviar um robô ao espaço também é muito mais barato do que enviar um humano.<br>
        Os robôs não precisam comer, dormir ou ir ao banheiro.<br>
        Eles podem sobreviver no espaço por muitos anos e podem ser deixados lá fora – não há necessidade de uma viagem de volta!.<br>
        </p>
        <p>
        Além disso, os robôs podem fazer muitas coisas que os humanos não conseguem. Alguns podem suportar condições adversas, como temperaturas extremas ou altos níveis de radiação.<br>
        Os robôs também podem ser construídos para fazer coisas que seriam muito arriscadas ou impossíveis para os astronautas.
        </p>
        <p><a href="https://spaceplace.nasa.gov/space-robots/en/">Por que enviamos robôs para o espaço?</a></p>
        </li>
        <li><strong>A IA pode criar uma ilusão de realidade.</strong><br>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://youtube.com/embed/pBLvmOpwoic?si=SyWJz0mK35-CyyNL"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">esses jogos cada vez mais realistas</p> 
         <p>
            A IA é fundamentalmente diferente da imprensa, do rádio, de qualquer outra invenção na história porque pode criar ideias completamente novas e criar uma nova cultura.<br>
            Poderemos em breve viver dentro de sonhos, adorando deuses, seguindo políticos que não são criados por escritores, artistas, filósofos humanos, mas pela inteligência artificial.<br>
            A IA simplesmente precisa adquirir o domínio da linguagem humana para ter acesso aos nossos sonhos, crenças e ao nosso cérebro.<br>
            Não são necessários implantes de chip.
            <details>
                <summary>
                .... A IA está nos colocando cara a cara com a <div class="my-p">caverna de Platão.</div><br>
                Nos últimos anos, as redes sociais deram-nos uma pequena amostra do que está por vir, criando polarização social e pessoas confundindo ilusões com realidade.<br>
                </summary>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/An_Illustration_of_The_Allegory_of_the_Cave%2C_from_Plato%E2%80%99s_Republic.jpg/1920px-An_Illustration_of_The_Allegory_of_the_Cave%2C_from_Plato%E2%80%99s_Republic.jpg" alt="Alegoria da caverna">
                    <p>Alegoria da caverna</p>
                <framed-text>
                Na alegoria, Platão descreve pessoas que passaram a vida acorrentadas em uma caverna diante de uma parede vazia.<br>
                Eles observam sombras projetadas na parede por objetos que passam em frente a uma fogueira atrás deles e dão nomes a essas sombras.<br>
                As sombras são a realidade dos prisioneiros, mas não representações precisas do mundo real.<br>
                As sombras representam o fragmento da realidade que normalmente podemos perceber através dos nossos sentidos, enquanto os objetos sob o sol representam as verdadeiras formas dos objetos que só podemos perceber através da razão.
                </framed-text>
            </details>
        </p>
        </li>
    <li>
        <p>
        <strong>Encontrámos uma inteligência alienígena não no espaço exterior, mas aqui na Terra.</strong>
        </p>
            <details>
                <summary>
                Artificial no sentido de que o produzimos, mas está cada vez mais a produzir-se, está cada vez mais a aprender e a adaptar-se por si só, tão artificial é uma espécie de pensamento positivo de que ainda está sob o nosso controlo e está a ficar fora de controlo, por isso, num certo sentido, está a tornar-se e força alienígena.<br>
                A inteligência artificial geral é realmente o fim da história humana.<br>
                A <div class="my-p">A evolução digital</div> está se movendo em uma escala de tempo totalmente diferente da escala de tempo orgânica, <strong>portanto, não demorará muito para alcançar a inteligência artificial geral.
                </strong><br>
                </summary>
                <framed-text>
                Uma IA de nível humano seria uma máquina, ou uma rede de máquinas, capaz de realizar a mesma gama de tarefas que nós, humanos, somos capazes.<br>
                Seria uma máquina “capaz de aprender a fazer qualquer coisa que um ser humano pode fazer”, como Norvig e Russell colocaram em seu livro sobre IA.<br>
                <strong>...metade dos especialistas forneceram uma data antes de 2061 e 90% forneceram uma data dentro dos próximos 100 anos.</strong> <br>
                <a href="https://ourworldindata.org/ai-timelines">ACronogramas: O que os especialistas em inteligência artificial esperam para o futuro?</a>
                </framed-text>
            </details>
        </li>
        <li>
        <p>
        <strong>A inteligência artificial tem vontade própria.</strong>
        </p>
        <p>
        A nova funcionalidade em <span><a href="https://blockworks.co/news/google-adds-ens-to-search">pesquisa do <img style="width:5%" src="https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FGoogle-1.jpg&w=1920&q=75" alt="Google"></a></span> parece ter sido apresentado sem um anúncio formal e sem o conhecimento ou contribuição dos desenvolvedores do ENS, que expressaram surpresa na X quinta-feira.</p>
        <blockquote>
        Agora, por que o desenvolvedor ficou surpreso (°ロ°)!<br>
        Bem, veja bem, a IA do Google funciona tão bem que foi em frente, sem o conhecimento ou consentimento dos desenvolvedores e <strong>adicionou ENS à sua função de pesquisa</strong>.<br>
        Abaixo está a postagem dos desenvolvedores no X.
        </blockquote>
        <framed-text>
            brantly.eth<br>
            @BrantlyMillegan<br>
            my mind is so blown right now wow wow wow<br>
        </framed-text>
        <framed-text>
             brantly.eth<br>
            @BrantlyMillegan<br>
            google integrated ENS before some crypto dapps 💀💀💀💀💀💀<br>
        </framed-text>
        </li>
    </ol>

</container>
<!-- IQ EQ And Ai -->
<container>
  <h4>Comparando Humanos com IA (QI, IA e EQ)</h4>
    <blockquote>
    <p>
    Que vantagens nós, humanos, temos sobre a IA e essas qualidades humanas nos manterão sendo a espécie dominante em nosso mundo?<br>
    Agora, se a Inteligência Artificial é capaz de fazer as coisas mais rápido e melhor do que nós, humanos, há alguma esperança para nós no futuro?<br>
    Além de sermos um organismo biológico composto por células e órgãos com um cérebro muito especial e muitos dirão a nossa alma que nos diferencia de todos os outros, a IA é composta por eletrônicos, microchips etc.<br>
    Agora há debates por aí sobre se é possível dar uma consciência à IA ou se ela é mesmo necessária...<br>
    É mesmo necessário equipar a IA com EQ?<br>
    Bem, pense desta forma: a IA tem mais “poder cerebral” do que os humanos, até certo ponto.<br>
    Você pode conhecer pessoas com QI alto, mas QE baixo. Você se sente seguro em dar muito poder a essas pessoas?<br>
    Agora não podemos medir a alma ou mesmo a consciência, mas podemos olhar para o quociente de inteligência (QI), quociente emocional (QE) de nós humanos e comparar com a Inteligência Artificial (IA).<br>
    Talvez isso nos aproxime da realidade... ou não.
    </p> 
    </blockquote> 
        <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/2w9ruFDzdKM?si=ejFMi0r2EKodA_4x"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">INTELIGÊNCIA ARTIFICIAL X INTELIGÊNCIA HUMANA</p>
            <p>
            Bem, o QI mede suas habilidades cognitivas e intelectuais, como memória de trabalho, pensamento analítico e retenção de conhecimento, e parece-me que a IA nos venceu em relação a isso na maioria das tarefas e acredito em breve em todas as tarefas relacionadas ao poder do cérebro.<br>
            </p>
            <p>
            Agora, por outro lado, EQ refere-se às suas habilidades emocionais e sociais, incluindo empatia cognitiva, regulação emocional e motivação.<br>
            A IA não possui os sistemas biológicos que geram emoções nos humanos.<br>
            Embora possa imitar respostas emocionais, não as “sente”.<br>
            A IA opera com base em dados objetivos e algoritmos.<br>
            A emoção humana, sendo profundamente subjetiva, permanece elusiva na Inteligência Artificial.
            </p>
            <p>
            <a href="https://www.betterup.com/blog/eq-vs-iq">EQ versus QI: qual você deve aproveitar e quando?</a><br>
            <a href="https://gafowler.medium.com/will-ai-ever-feel-emotions-the-quest-to-understand-machine-consciousness-7139fd99c76a">A IA algum dia sentirá emoções? A busca para compreender a consciência da máquina</a><br>
            </p>            
     <blockquote>
        <p>
        O que acontecerá se a IA for ameaçada ou alguma outra mudança?<br>
        Possui Quociente de Adaptabilidade (QA)?<br>
        </p>
        <image-container>
          <a href="https://www.deciphergroup.co.nz/blogs/iq-eq-and-now-aq/"><img src="https://www.deciphergroup.co.nz/wp-content/uploads/The-four-types-of-intelligence-400x1000.jpg" alt="four types of Intelligence"><p>IQ, EQ e agora AQ</p></a>
        </image-container>
        <p>
        Imagine que você é um engenheiro da NASA no futuro e foi destacado para sua colega em uma estação espacial remota por um longo período de sua carreira.<br>
        Agora todas as suas colegas são da espécie IA.<br>
        Como você e seus amigos se adaptarão às diversas situações?<br>
        Todos sabemos que somos seres sociais, e os nossos amigos, eles são bons em socializar?<br>
        A questão que devemos colocar é: os humanos têm pelo menos quatro tipos de inteligência para nos ajudar com as complexidades da vida, quantas têm os nossos amigos IA e quão bem podem aplicá-las? <br>
        </p>
        <p>Agora há muitos que dizem que isso não faz diferença e que enquanto os humanos criarem seres de Inteligência Artificial nenhum dano será causado.<br>
        Afinal, nós, humanos, temos consciência.<br>
        </p>
        <p>
        <strong>No entanto, há outros que dizem que não faz diferença que a IA não tenha consciência e que eles não precisam de nenhuma para nos prejudicar.</strong><br>
        </p>
        <p>
        Tenho tendência a concordar com o último.<br>
        Você conheceu pessoas que não têm consciência, com baixo QE, QA ou mesmo QS (ai, que monte de Q's 😂), e não se importam com o efeito que suas ações ou palavras têm sobre os outros?<br>
        </p>
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
     </blockquote>

</container>
