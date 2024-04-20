---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: how-long-is-a-day
title: How Long Is A Day?

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Technology and applied sciences
# multiple tag entries are possible
tags: [computing, real-time computing, astronomy]
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
  <p style="text-align:center">How long is a day on Earth?</P>

<div style="display:block">
    <blockquote>
    If you ask anyone, how long is a day, you'll get a reply of 24 hours.<br>
    Or if you really want to be a smart-arse, 86 400 seconds.<br>
    This is what we all are taught at school...<br>
    The truth is, we don't really know...<br>
    <p>¯\_(ツ)_/¯</p>
    </blockquote>
</div>
<div style="display:block">
<details>
      <summary>
      <p style="margin: 0.5em 0 0.5em 0"><div class="my-p">Click or tap here to set your clock, before you carry on</div><br></p>
      </summary>
            <div style="position:relative;width:100px;height:100px;margin-left:50%;padding: 5px;">
                <div class="clock" ></div>
            </div>
            <image-container>
            <img src="https://i.stack.imgur.com/YIcbV.png" alt="menus">
            </image-container>
            <p style="margin-top:1em">
            <span style="color:#5ba487">Text in this color has will display a hidden section with more information</span><br>
            <span style="color:#3389de">Note that you can click on text of in this colour to route you to the references</span><br>
            You can also toggle the colour scheme on the bottom left.<br>
            💡= light theme<br>
            ☾ = dark theme<br>
            Depending on you screen size you may need to activate the  "Hamburger menu" for option to apear.<br>
            On this site you can also opt to read this blog in portuguese, select Pt [En <strong>Pt</strong>]<br>
            Now if you want to read this blog, or a link you've opened in another language, just select translate from your browsers menu.<br>
            In Chrome it's a "Kebab" menu.<br>
            </p>           
            <blockquote style="margin-top:1em; margin-bottom:1em">
            <p>
            Ok, so let's get going...<br>
            ¯\_(ツ)_/¯<br>
            </p>
            </blockquote>          
      </details>
</div>
<div style="display:block">
  <h4>How long is a day? </h4>
  <p>
    It’s a deceptively complicated question.<br>
    Because the Earth isn’t a solid mass but a rolling ball of various solids and liquids.<br>
    The planet’s rotation actually accelerates and decelerates depending on these shifting dynamics.<br>
  </p>
  <p>
  Fluctuations in rotation are not only important for astronomy, we also urgently need them to create accurate climate models and to better understand weather phenomena like El Niño.<br>
  The more precise the data, the more accurate the predictions.<br>
  </p>
  <p>
  Scientists at the Technical University of Munich (TUM) can measure an Earth day all the way to nine decimal places, which works out to about a fraction of a millisecond per day.<br>
  It turns out that the Earth’s rotation fluctuates by about 6 milliseconds every two weeks.<br>
  </p>
  <p>
  Over the course of the Earth’s life, the length of the day has only grown longer and longer.<br>
  When the dinosaurs roamed the Earth, for example, a day was only 23 hours. 1.4 billion years ago, it was only 18 hours and 41 minutes.<br>
  And in 200 million years, it’ll be 25 hours long. Of course, who knows who (or what) will be around to make those hyper-accurate rotational measurements.<br>
  </p> 
  <blockquote>
  Did you know that not only do we get leap years, but also leap seconds? <br>
  <details><summary>Who knows, maybe, one day we'll have a <span class= "my-p">leap minute</span>
  <p>¯\_(ツ)_/¯<br></p>
  </summary>  
  <framed-text>
  Levine has written a paper that proposes a new solution: the leap minute.<br>
  The idea is to sync the clocks less frequently, perhaps every half-century, essentially letting atomic time diverge from cosmos-based time for 60 seconds or even a tad longer, and basically forgetting about it in the meantime.<br>
  <a href="https://www.nytimes.com/2023/11/03/science/time-leap-second.html">A Giant Leap for the Leap Second. Is Humankind Ready?</a>   
  </framed-text>
  </details>  
  </blockquote>
  <h4>The Leap Second</h4>
    <details>
    <summary>
    A leap second is a one-second adjustment that is occasionally applied to Coordinated Universal Time (UTC), to accommodate the difference between precise time (International Atomic Time (TAI), measured by <span class="my-p">clocks atomics</span>) and the observed imprecise solar time (UT1), which varies due to irregularities and long-term slowdown in the Earth's rotation.
    </summary>
    <framed-text>
    An atomic clock is a type of clock that uses an atomic transition as a way to stabilize an oscillator always at the same frequency.<br>
    <div style="margin:5px 0.5px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rel%C3%B3gio_at%C3%B4mico_-_oscilador.svg/1280px-Rel%C3%B3gio_at%C3%B4mico_ -_oscilador.svg.png">
    <p style="margin:5px;padding: 3px;border:solid 1px;">
     Scheme of how an atomic clock works: 1-atoms; 2-Correction sign; 3 local oscillators; 4-interrogatory signal; 5-stabilized signal
    </p>
    </div>
     Like a pendulum clock, the atom can be stimulated externally (in this case, by electromagnetic waves) so that its energy oscillates regularly.<br>
     <a href="https://en.wikipedia.org/wiki/Atomic_clock">Atomic clock</a>
    </framed-text>
    </details>
    <p>
     <h4>Key points</h4>
  <ul>
    <li>The Earth’s rotation isn’t exactly 24 hours long. The planet instead experiences slight daily differences due to its heterogenous composition.</li>
    <li>Scientists at the Technical University of Munich (TUM) improved a ring laser designed to measure the Earth’s rotation with hyper-accuracy.</li>
    <li>With the addition of a corrective algorithm, TUM can now measure Earth’s rotation down to nine decimal points—about a fraction of a millisecond.</li>
  </ul>
    </p>
  </div>
  <div style="display:block">
  <details>
        <summary>
        <p>
        <div class="my-p">
         <strong>If you can, I'd love to read your comments on this!!!</strong><br>
        ¯\_(ツ)_/¯<br>
        </div>        
        </p>
        </summary>
        <framed-text>
        Please use <strong>DISQUS</strong> at bottom of each blog to post comments.<br>
        This way I'll be notified when you add a comment etc.<br>
        It's free and easy to use, just create an account if you're a new user.<br>
        </framed-text>
</details>
  </div>
<div style="display:block">
<p>
<i>References:</i>
</p>
<p>
<a href="https://finance.yahoo.com/news/study-says-one-earth-day-150000129.html">A New Study Says One Earth Day Is Going to Be 25 Hours Long</a><br>
<a href="https://en.wikipedia.org/wiki/Leap_second">Leap second</a>
</p>
<div>
