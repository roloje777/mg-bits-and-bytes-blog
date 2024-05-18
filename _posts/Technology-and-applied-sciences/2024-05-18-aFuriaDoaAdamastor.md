---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: a-furia-do-adamastor
title: Adamastor's Fury
# post specific
# if not specified, .name will be used from \_data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Technology and applied sciences
# multiple tag entries are possible
tags: [engineering]
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
... João a young boy, is daydreaming as a male teacher is reciting a poem by <details style="display:inline"><summary><span class="my-p">Fernando Pessoa...</span></summary>
<framed-text>
Fernando António Nogueira Pessoa (13 June 1888 – 30 November 1935) was a Portuguese poet, writer, literary critic, translator, publisher, and philosopher, described as one of the most significant literary figures of the 20th century and one of the greatest poets in the Portuguese.<br>
He also wrote in and translated from English and French.<br>
<a href="https://en.wikipedia.org/wiki/Fernando_Pessoa">Fernando Pessoa</a>
</framed-text>
</details>
<br><br>
... staring out of the window into the mountain tops just outside Alfândega da Fé...<br><br>
</blockquote>
<div
  style="position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    margin-bottom: 2em;
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
    <summary class="center" style="width:50%">    
    <p class="center" style="width:100%;border-style:groove;border-width:5px;text-align:left;padding:20px; margin:2em;color: #000;color: rgba(0, 0, 0, 0.65);
    font-size: 16pt;
    font-family: Arial, sans-serif;">    
    Who comes to power what only I can,<br>
    That I live where no one would ever see me<br>
    And I drain the fears of the bottomless sea?»<br>
    And the man at the helm trembled, and said:<br>
    «El-Rei D. João Segundo<br>
    <span class="my-p">read poem here</span>
    </p>
    </summary>
    <framed-text>
    <p class="center" style="width:50%">
    THE MOSTRENGO
    <br>
    The monster at the end of the sea<br>
    In the pitch-black night he rose to fly;<br>
    Around the ship he flew three times,<br>
    It flew three times, screeching,<br>
    And he said: “Who dared to enter<br>
    In my caves that I cannot discover,<br>
    My black ceilings at the end of the world?”<br>
    And the man at the helm said, trembling:<br>
    «El-Rei D. João Segundo!»<br>
    <br>
    «Whose candles are I rubbing against?<br>
    Whose keels do I see and hear?”<br>
    Said the monster, and spun three times,<br>
    Three times it swirled filthy and thick,<br>
    <br>
    «Who comes to power what only I can,<br>
    That I live where no one would ever see me<br>
    And drain the fears of the bottomless sea?”<br>
    And the man at the helm trembled, and said:<br>
    «El-Rei D. João Segundo!»<br>
    <br>
    Three times from the helm he raised his hands,<br>
    Three times at the helm he reprimanded them,<br>
    And he said at the end of shaking three times:<br>
    «Here at the helm I am more than myself:<br>
    I am a People who want the sea that is yours;<br>
    And more than the monster, which my soul fears<br>
    And swirls in the darkness at the end of the world;
    Send the will, which ties me to the helm,<br>
    From El-Rei D. João Segundo!”<br>
    <br>
    <a href = "https://ensina.rtp.pt/artigo/fernando-pessoa-o-mostrengo/">Fernando Pessoa</a>
    </p>
</framed-text>
</details>
<blockquote>
<br>
.. the teaches words mingle in his thoughts,<br>
<img style="margin:2em" class="center" src="https://i1.sndcdn.com/artworks-1BOW0ZOkBHCP9N7R-BkH7qA-t500x500.jpg" alt="">
... he is suddenly a captain, in command of a <details style="display:inline"><summary class="my-p">portuguese caravel</summary>
<framed-text>
The caravel (Portuguese: caravela) is a small maneuverable sailing ship used in the 15th century by the Portuguese to explore along the West African coast and into the Atlantic Ocean and by Columbus on his expeditions of exploration of the Americas.<br> They used both lateen and square sails and were known for their agility and speed and their capacity for sailing windward (beating) with their lateen sails.<br> Caravels were used by the Portuguese and Spanish for the voyages of exploration during the 15th and 16th centuries, in the Age of Discovery.<br>
<a href="https://en.wikipedia.org/wiki/Caravel">Caravel</a>
</framed-text>
</details>, circling the cape of storms, when he is confronted with a giant god from the sea.<br>
..he is about to,...<br>
...when he feels a tug on his shoulder,<br>
João... <br>
class is over ...<br>
... we're going to Pedro's place,<br>
<details style="display:inline"><summary class="my-p">... do you want to join us?</summary>
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
              <span style="color:#5ba487">Click/tap text in this color to display a hidden section with more information</span><br>
              <span style="color:#3389de">Note that you can click/tap on text of in this colour to route you to the references</span><br>
              You can also toggle the colour scheme on the bottom left.<br>
              💡= light theme<br>
              ☾ = dark theme<br>
              Depending on you screen size you may need to activate the  "Hamburger menu" for option to apear.<br>
              On this site you can also opt to read this blog in portuguese, select Pt [En <strong>Pt</strong>]<br>
              Now if you want to read this blog, or a link you've opened in another language, just select translate from your browsers menu.<br>
              In Chrome it's a "Kebab" menu.<br>
            </p>
            <p>
            So, you got your coffee, relax and enjoy the blog.<br>
            ¯\_(ツ)_/¯<br>
            </p>
</framed-text>
</details>
<br>
... he has a cool magazine on super cars<br>
... even one which is made here in Porto...<br>
<hr>
Now the Adamastor is a mythical giant, a child of Gaia.<br>
He rebelled against the might god Zeus and was truck down, dispersed and reduced to promontories , islands and cliffs, from where he torments man.<br>
This is the giant that is mentioned in the poem, symbolising the fear and bravery of the portuguese sailors as they went forth to discover the world and confront dangers, such as the <details style="display:inline"><summary><span class="my-p">Cape of storms.</span></summary>
<framed-text>
In 1486 Bartholomew Diaz, a Portuguese explorer, discovered the Cape (the Cape of storms - named this due to rough sea conditions and many ship wrecks on the coast) during the course of his travels. Vasco da Gama from Portugal rounded the Peninsula in 1497.<br>
<a href="https://capepoint.co.za/cape-of-storms/">Cape Of Storms: The Shipwrecks Of Cape Point</a>
</framed-text>
</details>
<p>
In the same spirit a small team of portuguese, face the mighty car manufacturers, names such as Ferrari, Corvette and Mercedes etc. and bring a new kid on the block ...<br>
<strong></strong>The imposable becomes possible when people with common goals and dreams come together and work as a team.<br>
We did it 500 years ago, and have now we've done it once again.<br>
</p>
</blockquote>
<h3>ADAMASTOR FURIA - THE FIRST 100% PORTUGUESE SUPERCAR THAT CAME TO CONQUER THE WORLD</h3>
<div
  style="position: relative;padding-bottom: 56.25%; padding-top: 35px;
    height: 0; margin-bottom: 2em;
    overflow: hidden;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.dailymotion.com/embed/video/x8ykiu8?autoplay=1&loop=1&autopause=1muted=1"
    title="YouTube video player"
    allowfullscreen>
  </iframe>    
</div>
<blockquote>
The Adamastor Furia has more than 650 hp of power,<br>
reaches 100 km/h in less than four seconds<br>
and can exceed 300 km/h.<br>
This supercar was designed and produced in Matosinhos Portugal.<br>
The project took about five years to complete and 60 units will be produced in Matosinhos Portugal.<br>
The Furia has a monocoque chassis, entirely made of carbon fibre.<br>
All this comes at a price of around 1.6 million euros.<br>
</blockquote>
<div
  style="position: relative;padding-bottom: 56.25%; padding-top: 35px;
    height: 0; margin-bottom: 2em;
    overflow: hidden;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.youtube.com/embed/lo9tpHNdM0k?si=hAVGHKafQJglfFeS"
    title="YouTube video player"
    allowfullscreen>
  </iframe>
  <p style="text-align=center">ADAMASTOR FURIA - THE FIRST 100% PORTUGUESE SUPERCAR THAT CAME TO CONQUER THE WORLD</p>
</div>
<details>
        <summary>
        <p>
        <div class="my-p">
         <strong>If you can, I'd love to read your comments on this!!!</strong><br>
        ¯\_(ツ)_/¯<br>
        </div>        
        </p>
        </summary>
        <p>
        Please use <strong>DISQUS</strong> at bottom of each blog to post comments.<br>
        This way I'll be notified when you add a comment etc.<br>
        It's free and easy to use, just create an account if you're a new user.<br>
        </p>
</details>
<p>
<i>References:</i><br>
<a href="https://www.adamastor.com.pt/home">Adamastor</a><br>
<a href="https://www.razaoautomovel.com/noticias/apresentacao-adamastor-furia-primeiro-superdesportivo-portugues/">Adamastor Furia revelado. Tudo sobre o primeiro superdesportivo português</a><br>
</p>
