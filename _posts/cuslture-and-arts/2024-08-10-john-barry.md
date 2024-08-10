---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: john_barry
title: John Barry, A Music Genius Of Our Times

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Culture and the arts
# multiple tag entries are possible
tags: [music, movies]
# thumbnail image for post
img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/John-barry-2006.jpg"
# disable comments on this page
# comments_disable: true

# publish date
date: 2024-08-10  06:00:00
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
<h2>Introduction</h2>
<blockquote>
<p>
I woke up around 4:30, put on my mobile headphones and opened my radio app on <a href="https://www.tsf.pt/emdireto/">TSF.</a><br>
They were playing John Barry's music....<br>
I recall one of the many conversations around the table.<br>
My daughter, wife and I were enjoying lunch and 
on such an occasion and the topic of movies came up.<br>
Nicole commented that she watched some horror movie ( I don't recall the title) without sound, and that she wasn't frightened at all.<br>
<i>"Now if you watch the same movie with the sound on, it becomes scary." she said.</i><br>
It's amazing how sound influences the overall effect of a movie.<br>
John Barry knew this, he was a genius at enhancing our experiences of movies with music.<br>
</p>
</blockquote>
<blockquote>
<details>
        <summary style="margin-bottom:1em">Now, before I carry on with this blog. I'll just get a fresh cup of
        <span class="my-p">Click/tap</span> BICA<br>
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
</blockquote>
<div
  style="
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    margin-bottom: 2em;
    overflow: hidden;
  "
>
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.youtube.com/embed/IK2a6CkU3L8?si=0SZ1Yga2KIC1pHua"
    title="YouTube video player"
    allowfullscreen
  >
  </iframe>
  <p style="position: relative; text-align: center">This Never Happened To The Other Fella» (John Barry) — Fender Bass VI Cover</p>
</div>
<h2>At The Movies</h2>
<blockquote>
<p>
He is well known for eleven of the James Bond movies, stretching from 1963 with "From Russia With Love to 1987 with The Living Daylights.<br>
As well as the 1976 block buster "King Kong" and many others...<br>
</p>
</blockquote>
<div
  style="
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    margin-bottom: 2em;
    overflow: hidden;
  "
>
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    src="https://www.youtube.com/embed/SMa7ymgHkpE?si=BHFxBhke5V6YOut Of Africa • Main Theme • John BarrykN2F"
    title="YouTube video player"
    allowfullscreen
  >
  </iframe>
  <p style="position: relative; text-align: center">This Never Happened To The Other Fella» (John Barry) — Fender Bass VI Cover</p>
</div>
<blockquote>
<p>
This talented british maestro and composer won oscars for:<br>
<ul>
<li>Born Free</li>
<li>The Lion In Winter</li>
<li>Between Two Loves</li>
<li>Dance With Wolves</li>
</ul>
</p>
<p>
He won a British Academy Music Awards (BAFTA) for The Lion In Winter
 and a Golden Globe for Out Of Africa.<br>
</p>
<p>
He was born in North Yorkshire, England on Friday, 3rd November 1933 and passed in New York on Sunday, 30th January 2011.
</p>
</blockquote>
<blockquote>
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
<div>
<p>
References:<br>
<a href="https://en.wikipedia.org/wiki/John_Barry_(composer)">John Barry</a>
</p>
</div>
