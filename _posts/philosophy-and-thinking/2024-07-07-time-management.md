---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: time-management-1
title: Time Management For Successful People.

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Philosophy and thinking
# multiple tag entries are possible
tags: [time management, strategic planning, people management, self management]
# thumbnail image for post
img: "https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png"
# disable comments on this page
# comments_disable: true

# publish date
date: 2024-07-14 06:00:00
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

<blockquote>
<h2>Introduction</h2> 
<p>
It's Sunday morning.<br>
Having fed the cats early this morning, dealt with their litter and made two cups of coffee.<br>
One for my wife and the other for myself.<br>
The tv is on <a href="https://www.youtube.com/@WildEarth">WildEarth.</a><br>
My thoughts go back to the day before.<br>
I had gone out early in the morning on my bicycle.<br>
 I took my water-bottle full of fresh water that we get from a spring near us and <a href="https://youtu.be/g2wZQcXPE7c?si=vG9WBtKiHSHcuZbh"> cycled to the top of the mountain.</a>
 in my area.<br>
 I took out the one of the book's by Arthor Conan Doyle, given to me as a gift by my  beautiful daughter.<br>
I read the next story in the book, <a href="https://en.wikipedia.org/wiki/The_Adventure_of_Charles_Augustus_Milverton">The Adventure of Charles Augustus Milverton</a><br>
I love reading these stories, as they are short, one can read one in an hour or less.<br>
Now you my ask, what's this got to do with time management?<br>
Well, the story, maybe not so much, but if you keep on reading further you may see my point.<br>
</p>
<p>
Later on, that same day, looking through my social media, I noticed I had a message in linkedin.<br>
It was from The Linkedin Team, inviting me to collaborate on articles.<br>
Here is part of the message I received. <br>
</p>
<p>
<i>
Hi Joao, we’re bringing together top experts to share their knowledge in an exciting new way: collaborative articles. Because of your expertise, we’ve selected you to be one of the early contributors.
</i>
</p>
Now, by no means am I an expert on the matter, but I must tell you, it did inflate my "ego"  a bit.<br>
Well, I did 20 plus year in a management position in a telecommunications company, so I decided to give my five cents worth.<br>
Looking through the list of articles they want me to chose from, I came across this one - <i>Here's how you can effectively manage tasks and deadlines in your career.</i><br>
Now this is one that I'm going to write about in this blog.<br>
I'll then share my thoughts on this subject matter with the Linkedin team, or better yet, share a link to this post of mine, <strong>a Q2 activity</strong> <br>
Before I carry one, I'm going to leave you, (my trusted readers), for a while as I've an appointment with my gym partner, (Pipoca) <a href="https://youtu.be/TgIu8DcYLFI?si=gSftqWQyQDIlXqhz">at the gym</a>.
 <details>
        <summary style="margin-bottom:1em">So take a break, go exercise, or just have a fresh cup of coffee, and when you ready I'll be here with the rest of this article.<br>
        <span class="my-p">Click/tap</span> here to join me</summary>
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
<h2>Putting First Things First</h2>
<p>
I'm sure that you've heard this say before, but have you actually given it a bit of thought?<br>
When you put "first things first" the <strong>things</strong> you put fist is of the utmost importance.<br>
Let me share something with you.<br>
</p>
</blockquote>
<framed-text>
<h3>Preparing for my yearly audits</h3>
<div class="center" style="width:80%">
  <img src="https://www.indiafilings.com/learn/wp-content/uploads/2023/01/shutterstock_1479487709-1.jpg" alt="What are the Types of Audits?" style="display:block;width:100%">
  <p style="text-align:center">What are the Types of Audits?</p>
</div>
When I worked as a manager at a Telecom company in South Africa, we had two ladies that visited our offices once a year to do that <strong>dreaded</strong> audit.<br>
It was a comprehensive audit that covered all our (management) responsibilities, ranging from Health and Safety, Finance, Company Policies, Personnel development and many more.<br>
You name it and it was in the audit.<br>
Theses audits were critical to us managers, as it was part of our KPI's (Key Performance Indicators) and had a personal weight in our final assessments with our supervisor.<br>
Now, you know, that feeling that one gets deep in ones stomach, well I promised myself that I would not get that feeling the following year when they visited my section again. <br>
So what did I do?<br>
I spoke to Theo, my fellow colleague.<br>
The two of us occupied the first floor of the telecom exchange and both were managers.<br>
Theo, Grace (our admin support), and I reserved a few hours on Friday morning's to work on all the requirements needed for preparing for our audits.<br>
We made it fun, one of us alternatively bringing the blue-berry muffins for those Friday sessions. <br>
We Planned, and prioritized our work, making sure to put into place all those items that needed attention first, working through each item until all was in place.<br>
I used my skills as a programmer and designed a Web page, posting all the policies, work instructions, H@S briefings, etc, that were relevant to my personnel on this web.<br>
This gave my personnel quick and easy access to all the relevant documentation they needed.<br>
When we looked again, a year had gone past, and the two ladies (Kelly and Mandy) were back like clockwork, with their audit tick-sheets.<br>
You know what?<br>
The three of us were all smiles, as they ticked away.<br>
I could see that they were impressed. <br>
</framed-text>

<blockquote>
<p>
Now, you may say, how is it possible, my work schedule is so full?<br>
I don't have time for all this crap.<br>
Well the first thing you need to do is<strong> prioritize</strong><br>
If you don't, all you'll be doing is "blowing out fires."
</p>
</blockquote>
<blockquote>
<h2>Prioritizing</h2>

<p>
On the one hand, being an IT engineer and having passion in coding, one skill that has been drilled into us, is DRY (Don't repeat yourself).
</p>
<p>
Now , you may say.<br>
How does he even have <strong>TIME</strong> to sit in a Friday morning, have coffee and muffins, and prepare for his yearly audit.<br>
Fridays, are worse than Mondays for me at work.<br>
<i>Wait a bit, didn't I just repeat myself?</i><br>
This reminds me of a story I heard many years ago in one of my postgraduate courses.<br>
</p>
</blockquote>
<framed-text>
<h3>Why Firefighters spend so little time fighting fires</h3>
<div class="center" style="width:80%">
  <img src="https://static01.nyt.com/images/2020/01/31/world/00oz-firefighters-1sub/merlin_168105237_3f8eeb90-0b8a-4dcb-9e6f-4072cc8b451c-superJumbo.jpg?quality=75&auto=webp" alt="Australia’s Volunteer Firefighters Are Heroes. But Are They Enough?" style="display:block;width:100%">
  <p style="text-align:center">Australia’s Volunteer Firefighters Are Heroes. But Are They Enough?</p>
</div>
<p>
It's about a firefighting unit that time and time again won the prestigious prize in the US as the best firefighting unit.<br>
This was not because they were the busiest and had the most fires.<br>
In actual fact, this unit spend the least of their available time responding to emergencies in the whole country.<br>
It's also not because they were in operating in a semi or rural area.<br>
In actual fact, they were in the middle of one of the busiest metropolitan areas.<br>
So, how did they achieve this?<br>
</p>
<ul>
<u>Well, this unit, spend most of their time preventing fires by doing the following:</u><br>
  <li><strong>developing their firefighters</strong></li>
  <li><strong>training daily</strong></li>
  <li><strong>inspecting their equipment daily.</strong></li>
  <li><strong>having programs with the community, such as:</strong>
    <ul>
      <li>visiting schools and training the students on fire prevention and what to do in case of a fire.</li>
      <li>being in other community programs, as consultants and giving training where required.</li>
      <li>actively doing inspection and assisting the installation of fire preventing equipment in , schools, office building, malls and even homes.</li>
    </ul>
  </li>
</ul>
<p>
The same concept is actively used in the <strong>DRY</strong> principle when developing software.<br>
By writing code, testing it thoroughly (Unit tests, Functional tests and integration tests) and have this code in one place, makes your code less prone to errors and more maintainable.<br>
</p>
<p>
In the firefighting scenario, one could see the testing of equipment etc as unit testing, daily preparation of fire fighters ans functional testing and  community programs as integration testing etc.<br>
</p>
<p>
<i>
Note that the "prize" was not given to the unit that blue out the most fires, but those that prevented the most fires.<br>
Their is a fundamental shift in mindset here, in the way productivity is measured.<br>
I'll touch on this later on, but its a fundamental problem with most companies, when measuring performance on divisions and individuals.<br>
I'll touch more on this later on in the blog...<br>
</i>
</p>
</framed-text>
<blockquote>
<h3>Determining what's important</h3>
<p>
So it's clear from the firefighters example above that one needs to prioritize our available time, so that the most important tasks - in the case of the business environment - has the greatest positive impact on the organizations goals.<br>
So how do we determine this ?<br>
How do we prioritize out work ?<br>
</p>
<div class="center" style="width:80%">
  <img src="https://www.franklincovey.com/wp-content/uploads/2023/06/Screenshot-2023-06-30-at-12.31.24-PM-700x585.png" alt="The FranklinCovey Time Matrix" style="display:block;width:100%">
  <p style="text-align:center">The FranklinCovey Time Matrix</p>
</div>
<p>
Franklin Covey's Time Matrix is a great tool to help one organize ones tasks and time.<br>
Its consists of four quadrants and we can visualize and place the tasks (activities) into the quadrant they belong to.
</p>
<ol>
  These Quadrants are defined as:<br>
  <li><strong>Q1 - Urgent and Important.</strong><br>
  These are things that must be attended to, at that moment.<br>
  <framed-text> 
  <h3>Living in Q1</h3>
  You may say : 
  <i>
  That's my problem.<br>
  My day is full of urgent and important issues that I've no time for things like preparing for an audit.<br>
  That's exactly the problem.<br>
  <strong> You are living in Q1.</strong><br>
  <br>
  </i>
  It's a Saturday morning, the year 1972 - dad is playing catch with young junior, when the phone starts ringing.<br>
  ring...ring... ring...<br>
  Wife - <i>Honey answer the phone</i><br>
  ring...ring... ring...<br>
  ring...ring... ring...<br>
  Wife - <i>honey, did you not hear me, please answer the phone</i>
  ring...ring... ring...<br>
  ring...ring... ring...<br>
  Wife - <i>Answer the phone, it could be urgent</i>
   </framed-text>
   Did you pick up the problem here?<br>
  <details>
  <summary> 
  Note the word <span class="my-p"><strong>COULD</strong></span>
  </summary>
  <framed-text>
  Definition of could:<br>
  1. used to indicate possibility.<br>
  2. used in making suggestions or polite requests.<br>
  </framed-text>
  </details>
  <p>
  Now you cannot handle anything and everything as urgent and important.<br>
  These should really be things out of your control such as your wife phones and says that the baby is due and you need to take her to the hospital.<br>
  In the case of work, your boss has scheduled a last minute meeting.<br>
  Now, if your boss makes it a habit to schedule last minute meeting, then you should speak to him/her and explain - in a polite way - that he must schedule your meeting before hand , as you are living in Q2.(more on this further on)<br>
  You are the manager, you need to manage your section, your time is of utmost importance. <br>
  You need to determine want activities in this quadrant really need your attention, and deal with those.<br>
  Like driving your wife and baby to the hospital.<br>
  What in this quadrant that you can delegate?<br><br>
  Just a note on dad playing with Junior.<br>
  What quadrant would you put that in ?<br>
  If you said Q2 (Important but not Urgent), you are spot on.<br>
  That is where each and every one of us should live in, most of the time.<br>
  Relationship building is of <Strong>BIG</strong> importance, at a personal and business level.<br>
  If you're in the software development industry and find that you spending a large part of your time fixing software bugs after production launch, then you're living in Q1.<br>
  You need to revisit the quality assurance practices, especially best practices such as DRY, OOP, Unit Testing, Functional Testing and Integration Testing.<br>
  You should aim for around 70% of code coverage for unit testing.<br><br>
  </p> 
  </li> 
  <li>
  <strong>Q3 - Not Important but Urgent.</strong><br>
  <p>
  Now these activities tend to irritate me.<br>
  You know, your boss asks you to attend a meeting.<br>
  You reschedule a face to face meeting with one of your subordinates to discuss his/her progress on his personal development plan (Q2 activity), just to find that when you arrive at the meeting the people are having coffee and talking about the game that was on last night.<br>
  You sit down and wait for a whole 30 minutes, before the chit-chat stops and the building meeting starts.<br>
  Now, I'm not saying that socializing is not important, but one need to put <strong>First Things First</strong>.<br>
  Now the meeting itself is of importance, as relevant issues regarding safety, parking etc. are discussed once every month in this case.<br>
  </p>
  <framed-text>
  <h3>When I walked out of a meeting</h3>
  <div class="center" style="width:80%">
  <img src="https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd647130-2b28-4b53-9672-5f285ae2dc61_548x650.png" alt="Why are Union Meetings so… Boring?" style="display:block;width:100%">
  <p style="text-align:center">Why are Union Meetings so… Boring?</p>
</div>
  <p>
  This makes me recall when I got up and walked out of a meeting.<br>
  This event happened around the upper part  of The Tens (2007 -2010)<br>
  It was close to year end and as usual, time was allocated for a special union meeting.<br>
  My colleague and I were eager to attend.<br>
  We had an important (Q2) item to discuss.<br>
  Our retirement fund had seen significant dips, and we wanted to know what the issues were and what one could do about it.<br>
  Little did we know that this was caused by the US, the so called housing bubble.<br>
  As It was year end, the union would provide some refreshments and meat for the barbecue, which was scheduled for after the official union meeting.<br>
  My colleague and I sat down, there was a buz in the air.<br>
  As it was financial year end, management gave  an extra hour for this meeting.<br>
  Eventually everyone settled down and the meeting started.<br>
  It came to my turn and I asked about the dip in our retirement fund.<br>
  One of the guys came in and interrupted us, (Q3 activity), stating that the meat was ready.<br>
  I knew him from work, so he did not attend "hy braai die vleis"<br>
  The union representative did not give a plausible answer, stating that it was just a temporary drop and we'd recover our losses the next quarter.<br>
  <strong>We never did</strong><br>
  I had come prepared, with stats of over the past decade or so, but he was not interested.<br>
  It must have been 30 minutes into the two hour meeting when I was told that my questions would be dealt with on another occasion, as the guys wanted to "braai".<br>
  15 minutes later Willie and I walked into my office.<br>
  Grace, get me two sets of XYZ-union cancellation form please<br>
  </p>
  </framed-text>
  <p>
  Now the above event, happened to my friend and I, and is a good example of Q3, an urgent event, as the guys wanted their beer and warm meat, but was rather unimportant compared to our retirement fund.<br>
  </p>
  </li>
</ol>
</blockquote>
<blockquote>
It's just after four in the morning on this Sunday the 14th June 2024.<br>
I try and fall back asleep, but I know that as soon as my blinkers are open, it'll be a feeble attempt.<br>
I reflect on this post, deciding if I should carry on with it, moving onto the next Quarter or break it into multiple blogs<br>
As it's becoming more like a small book than a blog post, I decide I'll spend a good part of this morning, reading through what I have, editing it, fixing syntax and spelling errors and commit the fixes to my local <strong>Git</strong><br>
A great tool, that can be used for more that just software developing.<br>
Well, this should fulfil at least more tha 70% of my coverage of this article's quality assurance, making some of my readers happy. <br>
Java developers would be proud ....😂😂😂<br>
At the least, others will be grateful, that I've decided to post it, as no one wants to read a book, when they where promised a blog.<br>
<br>
To be continued...<br>
</blockquote>
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
<a href="https://www.franklincovey.com/blog/manage-your-time-and-energy-effectively/">Manage Your Time and Energy Effectively</a><br>
<a href="https://www.cambsfire.gov.uk/careers/wholetime-firefighter/the-role-of-a-firefighter/">The role of a firefighter</a><br>
<a href="https://www.nytimes.com/2020/02/02/world/australia/volunteer-firefighters.html">Australia’s Volunteer Firefighters Are Heroes. But Are They Enough?</a><br>
<a href="https://www.investopedia.com/terms/g/great-recession.asp">Great Recession: What It Was and What Caused It</a><br>
<a href="https://www.codium.ai/question/what-is-a-reasonable-code-coverage-for-unit-tests-and-why/">What is a reasonable code coverage % for unit tests (and why)?</a>
<a href="https://kinsta.com/knowledgebase/what-is-github/">What Is GitHub? A Beginner’s Introduction to GitHub</a><br>
</p>
</div>
