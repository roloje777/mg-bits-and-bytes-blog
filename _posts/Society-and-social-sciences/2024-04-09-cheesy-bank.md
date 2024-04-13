---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: a-cheesy-bank
title: A Cheesy Bank

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Society and social sciences
# multiple tag entries are possible
tags: [finance]
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
    <p style="text-align:center;margin-top:5px;margin-bottom:5px">The regional bank Credito Emiliano </p>
</div>
<container>
    <blockquote>
    <p>
    Did you know that cheese is a good source of protein, giving you approximately 25 grams of protein per 100 grams of cheese?<br>
    ... now this promotes muscle growth.<br>
    You probably did.<br>
    </p>
    <p>
    Now did you know that cheese could make you bank account grow as well?<br>
    You could even get a loan for you new house using  cheese .... <br>
    </p>
    <p>¯\_(ツ)_/¯</p>
    </blockquote>
</container>
<container>
 <details>
      <summary>       
      <p style="margin: 0.5em 0 0.5em 0"><div class="my-p">Before we stick a piece of cheese, click or tap here.</div><br></p>
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
            <container>
            <blockquote style="margin-top:1em; margin-bottom:1em">
            <p>            
            So, you got your coffee, relax and enjoy the blog.<br>
            ¯\_(ツ)_/¯<br>
            </p>  
            </blockquote>
            </container>        
      </details>
</container>
<container>
    <h4>A Bank That Accepts Parmesan As Collateral</h4>
            <div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
            <img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Parmigiano_Reggiano%2C_Italien%2C_Europ%C3%A4ische_Union.jpg/220px-Parmigiano_Reggiano%2C_Italien%2C_Europ%C3%A4ische_Union.jpg" alt="Parmesan">
            <p style="text-align:center;margin-top:5px;margin-bottom:5px">Parmesan </p>
            </div>
     <details>
        <summary>
           Since 1953, the regional bank Credito Emiliano has accepted curious collateral for small-business loans:
            giant wheels of  <span class="my-p">Parmigiano-Reggiano cheese.</span>
        </summary>
        <framed-text>
        <p>
         Parmesan is an Italian hard, granular cheese produced from cow's milk and aged at least 12 months or, outside the European Union, a locally produced imitation.<br>
         </p>
         <p>
         The full, legally protected, name of the Italian cheese is Parmigiano Reggiano.<br>
         It is named after two of the areas which produce it, the Italian provinces of Parma and Reggio Emilia (Parmigiano is the Italian adjective for Parma and Reggiano that for Reggio Emilia); in addition to Reggio Emilia and Parma, it is also produced in the part of Bologna west of the River Reno and in Modena (all of the above being located in the Emilia-Romagna region), as well as in the part of Mantua (Lombardy) which is on the south bank of the River Po.<br>
         <a href="https://en.wikipedia.org/wiki/Parmesan">Parmesan</a>
         </p>      
     </framed-text>
        </details>
    <p>
    Besides holding the cheese as insurance, Credem stores and ages the wheels in climate-controlled vaults for the duration of the loan.<br>
    </p>
    <p>
    Credem accepts young cheese as collateral, valuing it at the current market price of mature cheese.<br>
    The case explains that the typical loan-to-value ratio is 70 to 80 percent, which cushions the bank against market price fluctuations and product degradation.<br>
    </p>
                <div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
                    <img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Region_Parmigiano-Reggiano.png/220px-Region_Parmigiano-Reggiano.png" alt="Parmesan">
                <p style="text-align:center;margin-top:5px;margin-bottom:5px">The area in which Parmigiano Reggiano can be produced, according to EU and Italian PDO legislation</p>
                </div>
    <p>
    A Credem subsidiary, Magazziini Generali delle Tagliate, keeps the pungent collateral in two bank-owned warehouses that offer storage capacity for 440,000 80-pound wheels of cheese.<br>
    MGT’s warehouses sport state-of-the-art climate controls and a staff of trained inspectors.<br>
    </p>
</container>
<container>
           <div class="center" style="width:60%;margin-top:1em;margin-bottom:1em">
            <img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Parmigiano-Reggiano.png/220px-Parmigiano-Reggiano.png">
                <p style="text-align:center;margin-top:5px;margin-bottom:5px">Product process of Parmesan cheese</p>
            </div>
    <h4>It Stands A Loan</h4>
    <p>
    If producers default on their loans, the bank sells their collateral upon maturation.<br>
    </p>
    <p>
    The more it ages, the more delicious and valuable it becomes—like cash in an interest-bearing account.<br>
    </p>
    <p>
    “It allows Credem to be perceived as a bank that cares about the community, cares for the region, and cares for the producers,” he says.<br>
    “Lending is something that people don’t really like in Italy.<br>
    They think of usury, going back to Shylock in The Merchant of Venice.<br>
    Many people still perceive lenders and banks that way.<br>
    So for a bank to be able to set up this infrastructure, and to showcase their value to the community, it’s significant.”<br>
    </p>
</container>
<container>
        <div  style="position: relative; padding-bottom: 56.25%; padding-top: 35px;height: 0; margin-bottom: 2em;
            overflow: hidden;">
            <iframe
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                src="https://www.youtube.com/embed/02hBmv0G8WU?si=FqGgBLwHR8Xf_Q9o"
                title="YouTube video player"
                allowfullscreen >
            </iframe>
        </div>
        <p style="position: relative; text-align: center">The Cheese Bank of Italy</p>
</container>
<container>
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
</container>
<container>
    <p><i>References:</i>
    <a href="https://www.forbes.com/sites/hbsworkingknowledge/2015/07/01/a-bank-that-accepts-parmesan-as-collateral-the-cheese-stands-a-loan/">A Bank That Accepts Parmesan As Collateral: The Cheese Stands A Loan</a><br>
    </p>
</container>
