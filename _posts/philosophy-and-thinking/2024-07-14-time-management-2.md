---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: time-management-2
title: Time Management For Successful People - Time-Wasters.

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Philosophy and thinking
# multiple tag entries are possible
tags: [time management, strategic planning, people management, self management]
# thumbnail image for post
img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC0CzjgGBKhOhFZsMEjf_e0iBs5rARrEsrGJe8AUrNWpAtGQYXk_2iAyuduYCloTbi86qN31QFRDsz7FJZD7Ecqxogc-TyV8mebYy-YKUcYtlxc-VXppHMv_9CQ6R-dNHS68jOPu1Igx4/s400/CellPhoneaddiction.jpg"
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
<h2>Foreword</h2>
<p>
In this blog I continue exploring the topic on how do we use our time to be successful.<br>
I make use of FranklinCovey's Time Matrix as a guiding tool.<br>
I came across FranklinCoveys's Matrix in <a href="https://www.dropbox.com/scl/fi/5cgo0bw4v4m9r03946hk1/7HabitsStevenCovetCert.jpg?rlkey=hm86jzsh0sfpo9ahqhvpzw7sa&st=rfpc5al2&dl=0" >a post graduate course I attended.</a></br>
 I'll show , mostly by (my) real life experiences, how this concept can help one focus on what one needs to be done to get the required results.<br>
 To do that one needs to be aware of the so called "time-wasters" ..<br>
 In this blog I'll focus on quadrant 3, which he (Steven R. Covey) regards as time-wasters.<br>
 </p>
 <p>
  This is a continuance of the previous blog I posted on the 14th July. (<a href="https://roloje777.github.io/mg-bits-and-bytes-blog/posts/philosophy-and-thinking/2024-07-07-time-management">Time Management For Successful People.</a>)<br>
If you have not read that, I suggest you read it first.
 </p>
</blockquote>
<blockquote>
<h2>Introduction</h2>
<p>
It's early morning.<br>
I just cannot get these thoughts out of my head.<br>
You know, that adrenalin is pumping through your veins, the excitement, the ideas flowing at the speed of light.<br>
I'm afraid that I might forget some, before I can share with you in this blog of mine.<br>
I wonder how many great ideas were lost over time, because they were not written down, forgotten for internity.<br>
Earlier this week, I had little ideas about this topic, now the ideas just keep on coming and I need to <strong>Prioritize</strong> and <strong>Plan</strong> what I'm going to include on this topic.(Q2)<br>
Now I need to research a bit more on Q4 (Not Important and Not Urgent).<br>
I grab may android device on the bedside table next to me.<br>
My thoughts go to an an earlier period in my life.<br>
</p>
<framed-text>
<p>
Rian - "You know João, these cellphones are going to make people poor."<br>
Me - "Why do you say that?"<br>
I've walked over to Rian's office.<br>
He is the sales representative the a Telecom company, we both work for.<br>
Rian - "Well think about it.<br>
People like my dad and yours, use to save their money.<br>
Now I cannot keep-up with the demand for cell phones.<br>
I'm not complaining, but now instead of saving, we're all looking forward for the next best device."<br>
</p>
</framed-text>
<p>
This took place a while back probably between 2007 - 2014, the time when money and credit was so easy to get.<br>
The banks were just looking for people to give money to.<br>
</p>
</blockquote>
<blockquote>
<h2>Q4 - Not Important and Not Urgent</h2>
<div class="center" style="width:80%">
  <img src="https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png" alt="The FranklinCovey Time Matrix" style="display:block;width:100%">
  <p style="text-align:center">The FranklinCovey Time Matrix</p>
</div>
<p>
Now if you look at this quadrant , it's labelled as <strong>Waste</strong>.<br>
These are activities we should limit ourselves too.<br>
Looking further at this diagram, Covey includes activities such as, Television, gaming, the internet etc. <br>
I know, I know, what you're going to say ...<br>
"Please don't shoot the messenger" 😂<br>
</p>
 <details>
        <summary style="margin-bottom:1em">Before, you keep on reading this blog<br>
        <span class="my-p">Click/tap</span> here and reflect on these so called Time-Wasters I just mentioned above.<br>
        What do you see as Time-Wasters?<br>
        Do you see your mobile device and the internet as a useful tool, or as a Time-Waster?<br> 
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
<blockquote>
<h3> Time Wasters</h3>
<div class="center" style="width:80%">
  <img src="https://cdn.slidesharecdn.com/ss_thumbnails/mobileaddiction-230701064402-df2cc53a-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Mobile Phone Addiction" style="display:block;width:100%">
  <p style="text-align:center">Mobile Phone Addiction</p>
</div>
<p>
As I mentioned in my introduction, I grabbed my phone early this morning to do some research on ideas I had for this topic.<br>
I'm amazed how much information is at my finger tip.<br>
What a marvellous tool, yet a dangerous one as well.<br>
This morning I was in Q2 mode. <br>
I had ideas and used this wonderful device and the internet to do research.<br>
This is not always the case.<br>
I'm an early worm you see, so most morning I'm up before 05:00.<br>
I'll grab my phone, probably ignoring my furry friends that believe their morning treats are Q1 (Urgent and Important) activities, and start browsing my social media such as FaceBook, Whatsapp etc.<br>
I see that I've plenty of notifications from social applications, and from google on topics that I've shown interest before.(Q3 Distractions)<br>
<i><a href="https://roloje777.github.io/mg-bits-and-bytes-blog/posts/Technology-and-applied-sciences/2024-04-01-are-we-doomed">That's AI at play here</a>.</i><br>
</p>
<p>
Before I notice, my wife is awake and I need to get up to feed the cats and make two cups of coffee.<br>
I was startled at how two hours passed by, as I was awake at 5:00, just doing "nothingness", browsing and looking at pictures on Facebook posted by people, some I know, but mostly not.<br>
Mostly on their daily activities, selfies, at some restaurant, at the beach, shopping, or just displaying their new toys "bikes and cars" etc, etc, etc.. <br>
<i>I wonder what Covey would classify these as .... <span style="font-size:2em">💭</span></i>
</p>
Now that I've done some research on this, I think to myself.<br>
<ol>
  <li>
"Well Mister, don't be to hard on yourself,<strong> the average person spends 3 hours and 15 minutes on their phones daily.</strong> "<br>
Well, I've already burnt almost 50% of that and it's only 7 am. (˚0˚)!! <br>
</li>
<li>
Another habit I've picked up, and I've no idea when it happened, is that wherever I go, I must take my phone with me, and for no apparent reason, I'll pick it up going through the notifications etc.<br>
Not that I'm expecting some message or a phone call.<br>
<strong>The average person checks their phone 58 times per day.</strong>
</li>
</ol>
<p>
Now, looking at the stats, it seems normal, or is it?<br>
Is it not a Q4 activity?<br>
Is it not borderline addiction ?<br>
Am I not becoming addicted, having to know what's on the news every hour or so, or what Peter or Jane did today etc, etc, etc?<br>
</p>
<details>
<summary style="margin-bottom:1em">Here's an interesting this article that speaks about a lady and her struggles with this addiction.<br>
<strong>An issue that is really affecting Gen Zers as 3 out of 4 spending are too much time on their phones.</strong><br>
        <span class="my-p">click/tap here to read article</span>
</summary>
<p>
<embed type="text/html" style="width:100%;height:400px" src="http://www.storiesofahappymom.com/2013/05/surviving-cell-phone-addiction.html"><br>
<a href="http://www.storiesofahappymom.com/2013/05/surviving-cell-phone-addiction.html">Surviving the cell phone addiction</a>
</p>
</details>
</blockquote>
<blockquote>
<h2>Is Sugar Bad for You ?</h2>
<framed-text>
<h3>It's 1980 and we're at the gym. (Q2 activity)</h3>
<div class="center" style="width:80%">
  <img src="https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/sugar-g963832288_1280.jpg" alt="tablespoon of sugar" style="display:block;width:100%">
  </div>
<p>
It's the year 1980, 9:30 Saturday morning.<br>
Rui, a pal of mine and I are a Tait's Gym, located at the "Hoefie" in a Mining city called Welkom, situated in the Northern Free State of South Africa.<br>
We're busy getting ready for our session.<br>
Typical young lad's, wanting to pump our muscles, so that we can impress the chicks on Sunday afternoon and the municipality pools.<br>
Two older guys, a red head with freckles, and his tanned darker haired gym partner, walk into the change rooms as we're busy changing into our gym clothes.<br>
I've seen them before, they take their workouts serious and to the limit.<br>
They are two young engineers working at a gold mine, not too far out of town.<br>
They're are buff, and we can only dream to attain their level of muscularity.<br>
Drenched in sweat, the red head opens his locker and grabs a packet of sugar.<br>
He pours some sugar into his mouth and takes a large gulp of water from the flask he has in his other hand.<br>
He passes the sugar to his pal that procedes to do they same.<br>
He wipes the sweat of his forehead with a face towel from his locker, puts it back with the sugar, locks the door and exits the changing room quickly walking back into the gym.<br>
The red head red comments - "Come guys, the weights are waiting", and follows his friend....
</p>
</framed-text>
</blockquote>
<blockquote>
<h3>A Lesson on Human Biology</h3>
<div class="center" style="width:80%">
  <img src="https://pressbooks.calstate.edu/app/uploads/sites/3/2022/05/Carbohydrate-Digestion-768x1024.jpg" alt="Mobile Phone Addiction" style="display:block;width:100%">
  <p style="text-align:center">Carbohydrate Digestion and Absorption</p>
</div>
<p>
When you ingest sugar (sucrose) your body breaks these disaccharides to 
individual sucrose and fructose molecules.(monosaccharides)<br>
These molecules are then absorbed by your liver.<br>
Here they are converted to Glucose.<br>
Now , note no mater what carbohydrate you ingest, be it fructose from 
complex carbs such as fruits, sucrose from sugar, or lactose from milk products, they are all converted to <strong>glucose</strong> in the liver.<br>
That is the only sugar our body utilizes, thus when someone tests his/her
sugar levels, they do a glucose test, not a fructose or sucrose test...<span style="font-size:2em">💭</span><br>
Now sugar has a high glycaemic index, meaning that it will be absorbed 
quickly in one's blood, which causes the pancreas to release insulin.<br>
This insulin then mediates the flow of glucose from the blood stream 
into the various cells in the body.<br>
<strong>
These guys at Tait's gym, must have known that as the muscle fibers were being trained, they would use up this glucose quite quickly as it was broken down to form ATP.
(Adenosine triphosphate (ATP) is the source of energy for use and
 storage at the cellular level)<span style="font-size:2em">💭</span><br>
</strong>
What's important here is that the glucose that is not used immediately
as ATP, will be stored in the skeletal muscles as glycogen.<br>
Now only if you have too much carbohydrates, <strong>(an excessive amount)</strong> will this glucose be converted and stored as fat.<br>
Another point to note is that the fitter you are, 
and the more you exercise, the more your body is able to store glycogen, that
fuels your muscles, thus the potential of storing carbohydrates as fat are highly reduced. <br>
Another positive with regular exercise is that the body will need
less insulin to be produced to transport the glucose from the blood to the cells in your body.<br>
<strong>By now you must see that exercise is a Q2 activity.<br>
Note that by not exercising regularly you could be moving YOURSELF into Q1.</strong><br>
So exercise has the effect of processing sugars more efficiently and effectively in the body.<br>
<p>
Obviously these guys knew that their glycogen stores were at the point of depletion, so they quickly took a break and replenished the glucose.<br>
And what's easier that a tablespoon of sugar... that has a high GI index...<span style="font-size:2em">💭</span><br>
<a href="https://www.youtube.com/watch?v=PHkFoiqTe9o">Exercise & Sugar: When Sugar Can Be a Good Thing</a>
</p>

</p>
</blockquote>
<blockquote>
<h2>Don't Label things as Good Or Bad</h2>
<div class="center" style="width:80%">
  <img src="https://media.gettyimages.com/id/914884690/vector/man-between-an-angel-and-devil.jpg?s=612x612&w=gi&k=20&c=L4NToO7GAVlBOslLmnWNGMgHlu1zVnt0cIyN1jvPkGY=" alt="Mobile Phone Addiction" style="display:block;width:100%">
  <p style="text-align:center">Good or Bad - gettyimages</p>
</div>
<framed-text>
Joana - "But wait a bit.<br>
I always heard that sugar is bad for you."<br>
Carla - "No, is it not fat that's bad for you."<br>
Pipo - "I've no idea girls, what do you think Rafa ?"<br>
Rafa - "Depends on how you label them ... "<br>
Joana,Carla and Pipo - "hu"<br>
Rafa - "They are both good or bad.<br>
 "Try making a cake with lard or adding sugar to your rice ..."<br>
all - "hahahaha"<br>
</framed-text>
<p>
<div class="center" style="width:80%">
  <img src="https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png" alt="The FranklinCovey Time Matrix" style="display:block;width:100%">
  <p style="text-align:center">The FranklinCovey Time Matrix</p>
</div>
Take a look at the image of Covey's matrix again.<br>
There are activities such as gaming, television, relaxation etc.<br>
This may mistakenly led you to believe that they are inherently time-wasters and thus evil.<br>
Just like the case of sugar.<br>
This is not so, I want you specifically look at one specific word, namely:<br>
<strong><span style="display:inline-block;font-size:3em">EXCESSIVE</span></strong>
</p>
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
<a href="https://www.amazon.es/Habits-Highly-Effective-People-Anniversary/dp/1471195201/ref=sr_1_1?adgrpid=164509666553&dib=eyJ2IjoiMSJ9.4Kvg1JAsqNDSCP3x6WQGTwBSkJH0jfwgx1t58_aRZiNLrLpkca-mgalkO73wKAYj5ipbPhYGV4ghgUqn4h8k0JI15WPEYDo7IAVFfm22WVj-P_7soYBTubjGkxVy0REzZO9aLp9Im1JnvY0KhXny0iL8qYpV9aii79P0gM71-Qx-qoOT-ZWGrP05BnlAlQx-IOk-tiYa0TLjOLMJPFrA0llzAEXEl1frHvxB-y-m8MYMwEWGHY3bib_JWmWsKONdDrXXDd8kws591c-CeoQVT5_YNLO_O-6KG02YEY7tpII.4LU8cD_DCfol51SXUCrHICsGR4Fw4KsEQTxmvfLkKRE&dib_tag=se&hvadid=701115443910&hvdev=c&hvlocphy=1011776&hvnetw=g&hvqmt=e&hvrand=14629492212094666268&hvtargid=kwd-48202088&hydadcr=17805_2371875&keywords=7+habits+of+highly+effective+people&qid=1721462191&sr=8-1">Seven habits of highly effective people</a><br>
<a href="https://www.franklincovey.com/blog/manage-your-time-and-energy-effectively/">Manage Your Time and Energy Effectively</a><br>
<a href="https://explodingtopics.com/blog/smartphone-usage-stats#top-smartphone-stats">Time Spent Using Smartphones (2024 Statistics)</a><br>
<a href="https://pressbooks.calstate.edu/nutritionandfitness/chapter/carbohydrate-digestion-and-absorption/">Carbohydrate Digestion and Absorption</a><br>
</p>
</div>
