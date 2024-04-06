---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: are-we-doomed
title: AI - Are We Doomed?

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
#author: ""
# multiple category is not supported
category: Technology and applied sciences
# multiple tag entries are possible
tags: [artificial intelligence, robotics, humans, employment, work]
# thumbnail image for post
img: "https://static01.nyt.com/images/2015/05/26/science/26ROBOTS3/26ROBOTS3-superJumbo.jpg"
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
            src="https://youtube.com/embed/yy7OJjABk0w?si=k8-eEhUhLplDkDl9"
            title="YouTube video player"  allowfullscreen >
        </iframe>
    </div>
    <p style="position: relative; text-align: center">The T800 got us in Terminator Resistance on PS5</p>
</container>
<h4>Foreword</h4>
<blockquote>
        Like everything else, people are divided into two groups, those who fear and those who support artificial intelligence (AI).<br>
        <details>
        <summary>
        <p><div class="my-p"> Artificial Intelligence</div> can be used to find new cures for cancer and discover solutions to the ecological crisis.<br>
        AI can also cause such harm to humans, at a scale never seen before.<br></p>
       </summary>
        <framed-text>
        Artificial intelligence (AI) refers to the simulation or approximation of human intelligence in machines.<br>
        The goals of artificial intelligence include computer-enhanced learning, reasoning, and perception.<br>
        <a href="https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp">Artificial Intelligence (AI): What It Is and How It Is Used</a><br>
        </framed-text>
        </details>
        <p>
         Maybe, one should try and look at this in a holistic way.<br>
        <i>For this reason I must state that this is rather a long blog, as I've put allot of research into this topic, so that you've got all the information at your fingertips.</i><br>
        </p>
        <details>
        <summary>
        <p style="margin: 0.5em 0 0.5em 0"><div class="my-p">Click here first and I'll take you to one of my favourite places before you continue reading this blog.</div><br></p>
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
            <p>Note that you can click on the links <strong>(text in another colour)</strong> for more information.<br>
            You can also toggle the colour scheme on the bottom left.<br>
            💡= light theme<br>
            ☾ = dark theme<br>
            Depending on you screen size you may need to activate the menu (top left "Hamburger menu") for option to apear.<br>
            On this site you can also opt to read this blog in portuguese, select Pt [En <strong>Pt</strong>]<br>
            Now if you want to read this blog, or a link you've opened in another language, just select translate from your browsers menu.<br>
            In Chrome it's a "Kebab" menu.<br>
            For zoomable images you can just click on image to zoom and off image to zoom out.<br>
            So, you got your coffee, relax and enjoy the blog.<br>
            ¯\_(ツ)_/¯<br>
            </p>                     
            </blockquote>
            </container> 
        </details>
        <p>
        There may be many positives from AI and robotics, but the same can be said about its disadvantages.<br>
        What effect will it have to humans with regards to employment?<br>
        Will concepts like the Universal Basic Income solve this?, letting us enjoy life under the sun, while robots serve us and plough the fields.<br>
        </p>
        <image-container>
            <img src="https://247wallst.com/wp-content/uploads/2022/02/Knocker-upper.jpg" alt="Knocker-upper">
            <p>Knocker-upper</p>
        </image-container>
        <p>
        Not too long in the past we had Arabbers selling fruit on horse-drawn carts, Billy boys making fires, Bowling pin setters working in the bowling alleys, Cigarette girls walking with a tray in restaurants and nightclubs, Clock winders winding clocks in the town's clock towers, Copy boys working at newspapers, a Dog Whipper keeping dogs away from sunday's church celebrations, Human Computers employed to doing complex calculations, Iceman delivering ice, and even a Knocker-upper and a Herb strewer.<br>
        Now the Herb strewers were in demand until the 1850s.<br>
        Herb strewers spread herbs and flowers around royal and noble residences in the UK to mask the unpleasant
        odours.<br>
        The sewage system made this obsolete.<br>
        The Knocker-upper wielded a long pole, banged on your window to wake you up for a fee.<br>
        If you lived in the 40's or 50's, and you were a young boy or girl working as a knocker-upper you would most likely be replaced by a cheap alarm clock later in your life.<br>
        <a href="https://247wallst.com/special-report/2023/05/04/jobs-that-used-to-be-common-but-no-longer-exist-2/">Forgotten Jobs: Formerly Common Careers That No Longer Exist</a>
        </p>
        <p>
        Now, if a fairly simple technology like an alarm clock and a calculator displaced many jobs, what will the effect be on our jobs with the potential of AI?<br>
        </p>
        <details>
            <summary>
            <p>
                <div class="my-p">After all, machine has already beat us in brain power.</div><br>
                You may argue that this will never happen, as man is the creator of these machines, just lke God is ours.<br>
                <strong>But what if, just like man is now creating it's own, AI start creating their own?</strong><br>
                <a href="https://www.dailymail.co.uk/sciencetech/article-508887/Ethical-storm-scientist-man-clone-HIMSELF.html">Ethical storm as scientist becomes first man to clone HIMSELF</a><br>
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
            <p style="position: relative; text-align: center">Deep Blue vs Kasparov: How a computer beat best chess player in the world - BBC News</p>
            <framed-text>
            Chess computers were first able to beat strong chess players in the late 1980s.<br>
            Their most famous success was the victory of Deep Blue over then World Chess Champion Garry Kasparov in 1997, but there was some controversy over whether the match conditions favoured the computer.<br>
            <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_chess_matches">Human–computer chess matches</a>           
            </framed-text>
        </details>        
        <p>
            <details>
            <summary>
            <strong>What about religion?</strong><br>
            From beginning of time man always looked up to an entity more powerful than himself.<br>
            In pre-Christian times man prayed to the planets such as Jupiter, the gods such as Zeus or Odin.<br>
            Then came other religions such as Hinduism, Islam and Buddhism.<br>
            We even have wars trying to create domination of one religion over the other.<br>                  
                <div class="my-p">Is it possible that there will be a new religion, one created by AI and it's creation?</div><br>
                </summary>
                <framed-text>
                Experts believe people might ditch traditional religion for tech-based beliefs.<br>
                They warned the responses by bots, such as ChatGPT, were luring people to seek higher meaning from them.<br>
                <a href="https://www.dailystar.co.uk/news/latest-news/humans-soon-worshipping-ai-chatbots-31950822">Humans will soon be worshipping AI chatbots as gods, experts warn</a>
                </framed-text>            
            </details>       
            If so, what will happen if we oppose such a religion and refuse to worship them?<br>
        </p>
        <p>
        To make use of AI for human's benefit, we need to regulate them.<br>
        But with the world divided into religious cults, into the east and west, into the right and left, into social and main media, where each country, region etc, apply different rules, where ethics are left at the door for power and economic gain, you should ask.... <br>
        <strong>IS THIS EVEN POSSIBLE?</strong><br>
        Nuclear power can not create a more powerful weapon by itself or even launch itself without humans, yet AI will be able to create a more powerful version of itself.<br>
        <strong>ARE WE DOOMED? 🤯💣💥</strong><br>
        ¯\_(ツ)_/¯<br>
        </p>
</blockquote>
<container>
    <image-container>
        <img src="https://cdn.corporatefinanceinstitute.com/assets/unemployment.jpeg" alt="">
    </image-container>
    <container-text>
    <h4>Will robots take our jobs?</h4>
    <p>
    It is probably not an easy answer to provide, but the concern is far from being baseless.<br>
    Even if the change is not imminent right now, industry experts such as Fortune have stated that <strong>robots will replace 40% of jobs in the next 15 years</strong>.<br>
    </p>
    <p>
     According to the World Intelligence Congress, AI, virtual personal assistants, and chatbots will replace almost 69% of the manager’s workload by 2024.<br>
    </p>
    <blockquote>
    <p>
    This question was asked on Quora and Ben Y. Zhao a professor of Computer Science, Univ. of Chicago replied.<br>
    <i>
     The common answer here seems to be: yes it will kill jobs, but only the jobs low on the food chain, and it will create more jobs to at least offset the jobs it does kill.<br>
     I disagree. I think AI will kill jobs, and over time, AI might kill most “jobs” as we know them.<br>
     I think that people are somewhat complacent in regard to the economic impact of AI, and will likely be ill-prepared for the changes we have to adapt to in the not-so-distant future.<br>
    </i>
    <u>But, we can just re-skill people to do knew jobs...</u><br>
    And he states<br>
    <i>
    I am far from original in this opinion. But if I had to guess, I would say that AI will put far more people out of work than we can (re)train in time.<br>
    </i>
    <a href="https://www.quora.com/Will-artificial-intelligence-kill-jobs-in-the-future/answer/Ben-Y-Zhao?ch=15&oid=40866751&share=3944af27&srid=ce37&target_type=answer">Will AI kill jobs?</a>
    </p>
    </blockquote>
    </container-text>
</container>
<container>
    <h4>Jobs that robots and AI have or will take over from man.</h4>
    <lo>
        <li>
        Customer service executives<br>
        Many companies now rely on AI to answer FAQs and customer support questions.<br>
        Chatbots are becoming a significant part of customer interaction.<br>
        </li>
        <li>
        Bookkeeping and data entry<br>
        Instead of using humans for data entry and bookkeeping, it makes sense for AI and ML (Machine Learning) to be introduced in the product cycle.<br>
        </li>
        <li>
        Receptionists<br>
        And with auto check-ins in both large and small hotels, there will be a lesser need for receptionists in the long run.<br>
        </li>
        <li>
        Proofreading<br>
        Detecting grammatical mistakes, sentence construction, and other errors can easily be automated through different apps. <a href="https://www.grammarly.com/">(Grammarly)</a><br>
        </li>
        <li>
        Manufacturing and pharmaceutical work<br>
        <container>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/pymvNott6nw?si=eOTzEin5eYT0BNbS"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Introducing the Apollo Humamoid Robot by Apptronik</p>
        <p>
        Mercedes-Benz has officially employed humanoid robots to complete manual tasks on its assembly line.<br> Apptronik’s Apollo robot will complete simple tasks like fetching and carrying, helping lighten the load for its human colleagues.<br>
        </p>
        <p>
        <i>This is a new frontier, and we want to understand the potential both for robotics and automotive manufacturing to fill labor gaps in areas such as low-skill, , and physically demanding work and to free up our highly skilled team members on the line to build the world’s most desirable cars,” he added.<br>
       </i>
        </p>
        </container>
        </li>
        <li>
         Retail services<br>
         Automated services have replaced people who carry out the way sales.<br>
        </li>
    </lo>
     <a href="https://www.cato.org/blog/will-ai-cause-unemployment">Will AI Cause Unemployment?</a><br>
    <a href="https://www.saviom.com/blog/12-jobs-that-robots-ai-will-replace-in-the-future-and-12-that-wont">12 jobs that robots (AI) will replace in the future, and 12 that won’t</a>
</container>
<container>
        <h4>Designed to be “Nice”</h4>        
        <container>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/CfopKPHb8b0?si=q5iE6E5njDkbHmne"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Meet Sarah, Saudi Arabia’s first interactive robot</p>
        <p>
        <i>"Sara knows that she’s a girl, she’s 25 years old, she’s 1.62 centimeters, she’s wearing Saudi clothing,” explained Elie Metri, CEO of QSS AI & Robots, in an interview with Business Insider.</i><br>
        In addition to these details, Metri emphasizes that Sara “should be nice, not talking politics, not talking sex because we’re in Saudi Arabia.<br>
        </p>
        </container>
</container>
<container>
<h4>Is it Ethical?</h4>
<p>
LSU women’s basketball star <a href="https://www.foxnews.com/sports/lsu-star-angel-reese-calls-out-crazy-weird-ai-generated-photos-herself">Angel Reese</a>  took to social media Monday to call out those allegedly creating AI-generated photos of the college basketball player.<br>
<i>Creating fake AI pictures of me is crazy and weird AF," she wrote in one post.</i><br>
</p>
    <blockquote>
        <p>
        Meanwhile in Saudi Arabia a a robot grabs a female reporter's buttocks..<br>
        ¯\_(ツ)_/¯<br>
        </p>
    </blockquote>
        <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/YxjBs9T3Y0o?si=ZznTmc5KzkIt8xp4"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Saudi Arabia's first AI robot touches reporter, sparks debate</p>
 </container>
 <container>
     <h4>The Competition</h4>
    <p>
        Google abandoned "fairness" and took major "shortcuts" to launch the Gemini artificial intelligence (AI) chatbot despite internal concerns, according to a former high-level employee.
    </p>
    <image-container>
        <img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/720/405/Google-meeting.png?ve=1&tl=1" alt="gemini">
    </image-container>
    <>
    <div>"They said no, f--- it.<br>
     We got to get to market because we are losing to ChatGPT," the source claimed.</i>
    </p>
    <p>
    The release of ChatGPT was seen as a massive threat to Google's business model.<br>
    YouTube's ad revenue has been shrinking year over year. TikTok had been slowly carving into the earnings of Google's flagship video-sharing platform...
    </p>
    <blockquote>
    <p>
    I <span style="font-size:2em">🤔</span> if the USA wanting to ban TikTok have anything to do with the above?
    </p>
    </blockquote>
    <p>
    <i>Teams within Google Research and other vital departments were reassigned.<br>
    YouTube Ads, Search and generative AI became priority number one. They needed to catch up, and they took "shortcuts" to get there, the former employee says.</i>
    </p>
</container>
<container>
 <blockquote>
 Now lets be fair.<br>
 AI and robotics have their advantages and we also benefit from these technologies.<br>
 Let's look at some of them
 </blockquote>
 </container>
 <container>
  <h4>AI in healthcare</h4>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/0sjUPR2u2C0?si=xbgGDTY2LBNEFQjK"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Elon Musk's Neuralink shows first brain-chip patient playing chess</p> 
    <p>
    There are already a number of research studies suggesting that AI can perform as well as or better than humans at key healthcare tasks, such as diagnosing disease.<br>
    Today, algorithms are already outperforming radiologists at spotting malignant tumours, and guiding researchers in how to construct cohorts for costly clinical trials<br>
    </p>
    <p>
     Mr Arbaugh also said that he had used the brain implant to play the video game Civilization VI.<br>
     Neuralink gave him "the ability to do that again and played for eight hours straight", he said.<br>
    </p>
    <p>
    Neuralink's device, which is about the size of a one pound coin, is inserted into the skull, with microscopic wires which can read neuron activity and beam back a wireless signal to a receiving unit.<br>
    <a href="https://www.wsj.com/us-news/patient-of-elon-musks-neuralink-shows-off-new-life-with-implant-200f9d2e">Patient of Elon Musk’s Neuralink Shows Off New Life With Implant</a>
    </p>
    <h4>Search -and-rescue and scouting for extraterrestrial life.</h4>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/ifCIDT4X9AM?si=hE6TaGTOHxFfiBFs"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Testing Out JPL’s New Snake Robot</p>
            <p>
            Snake robots are a compelling addition to search-and-rescue teams, as the systems can squeeze into spots people and other robots can’t.<br>
            Other applications include plumbing and even medical, with scaled down versions that can move around pipes and human organs, respectively.<br>
            NASA JPL (Jet Propulsion Laboratory), never one to shy away from futuristic robotic applications, has been exploring ways the robust form factor could be deployed to scout out extraterrestrial life.
            <br>
            <a href="https://www.jpl.nasa.gov/news/jpls-snake-like-eels-slithers-into-new-robotics-terrain">JPL’s Snake-Like EELS Slithers Into New Robotics Terrain</a>
            </p>
</container>   
<container>
     <h4>The Entertainment Industry</h4>
         <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/rgzND8Xyp80?si=KXujhsjQRvHce3m7"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">Disney to demo robots at Robotics Summit & Expo</p>
    <p>
    If you’ve ever been to a Disney park, you’ve probably interacted with work from Disney’s Imagineering team.<br> Founded in 1952, the team is tasked with bringing our favorite characters from the screen into the real world using cutting-edge robotics technology.<br>  
    <a href="https://www.therobotreport.com/disney-showcasing-latest-robots-at-robotics-summit-expo/">Disney showcasing latest robots at Robotics Summit & Expo</a>  
    </p>
</container>
<container>
<h4>What about sex?</h4>  
    <blockquote>    
    <p>
    Did you know that according to Jacqueline Hellyer us humans are sexual beings
    because we have big heads.<span style="text-size:2em"> 😂</span><br>
    </p>
    <p>
    ¯\_(ツ)_/¯<br>
    </p>
   </blockquote>  
  <details>  
    <summary>  
    <div class="my-p">
    She goes on to say, <i>"..humans have evolved to be highly sexual because our babies are born too early."</i>
    </div>
    </summary>
    <framed-text>
      <p>
      The reason our babies are born too early is because our brains are so big that babies have to be born before their heads grow too large to be able to get out of the birth canal.<br>
      Which means they are born utterly useless.<br>
      Other mammalian mothers can look after one or even a whole litter of infants on her own, because her young are sufficiently able to cope while she’s off hunting, or can follow her around reasonably well.<br>
      As humans evolved, both parents, and quite possibly the whole tribe, were needed to raise infants to an age of survival and usefulness. Sex evolved in humans to keep people bonded while they raised their slow-maturing children.<br>
      This fact also puts paid to the myth that men naturally want to ‘sow their seed’ widely.<br>
      That is not a human reproductive strategy. Humans would never have evolved to the level we have if the men were off wandering around ‘sowing their seed’ and leaving the mothers to raise the kids alone.<br>
      Sex is so much more than just conceiving children; sex enables a couple to feel good about each other while raising those children. So, our big brains have forced us to evolve to have good sex.<br>
      <a href="https://www.jacquelinehellyer.com/lovelife_blog/why-humans-are-so-sexual">Why are humans so sexual?</a>
   </p>
   </framed-text>
</details>
<div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/orBH_Qnw3eY?si=vv_lPJ58A5JeLMmh"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
             <p style="position: relative; text-align: center">Meet Harmony The Sex Robot | SLUTEVER</p>
<p>
Sexting, dating and even having intercourse with artificial intelligence is a rising trend.<br>
In 2014, the year before Attwood published her novel, Pew research predicted robotic sex partners would become commonplace, the same year in which Sext Adventure, a satirical text message-based game that enables you to sext with a robot, was released.<br>
In 2022, the seventh International Congress on Love and Sex with Robots was held – virtually, of course – which reaffirmed that academic interest in sex-tech is surging in tandem with popular interest.<br>
In 2022, the 'first artificial intelligence capable of sex and intimate relationships’ was introduced to the world by Realbotox, an artificial intelligence firm based in California.<br>
The eerily human-like doll’s name was Harmony and, according to her creators, operates alongside an app for users to have a ‘conversation with’.<br>
If the real deal (well, as real as it gets in the realm of AI) is too much for you, then there’s the ever-expanding sphere of audio erotica, which is exploding quicker than, well, you get the gist.<br>
Since Bloom launched its feature in September 2023, in which users can have flirtatious and sexual conversations via text and in real-life with different characters on its site and app, over 50 million messages have been exchanged, and almost 4000 hours of audio consumed.<br>
In 2021, the global sexual wellness market was valued at $80 billion (£63 billion) — and it’s predicted to hit $120 billion (£95 billion) by 2030. This is an industry in its infancy.<br>
<a href="https://www.elle.com/uk/life-and-culture/culture/a46883596/sexual-artificial-intelligence/">Sexual AI Is On The Rise – What Does It Say About Modern Love?</a>
</p>
</container>
<container>
    <blockquote>
    <p>
     Now all this may <b>NOT</b> seem frightening, but what if they made an AI cat...
     <fade-in-fade-out> 👀</fade-in-fade-out><br>
     ¯\_(ツ)_/¯<br>
    </p>    
    </blockquote>
  <h4>AI Pets</h4>
    <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/1qSKD-neibU?si=_97vQ_4XvbEyVWkv"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
             <p style="position: relative; text-align: center">Transform Your Life with AI Robot Cat Maicat!</p>
  <p>
    A slew of innovations driven by artificial intelligence will give us a leg up on everything from illness detection to pet safety, transforming how we parent our pets.<br>
    <i>“You can buy AI devices that will monitor your [pet], but can also keep track of your dog or your cat poop,
  ”</i> Dr. Lionel Robert, professor of Information and Robotics at the University of Michigan, tells The Wildest.<br>
  <a href="https://www.thewildest.com/pet-lifestyle/artificial-intelligence-pet-care">5 Ways AI Will Change the Way You Parent Your Pet—Are You Ready?</a> 
  </p>
  <p>
    Artificial intelligence could soon start replacing household pets — no vet bills required.<br>
    As various types of robots continue to hit the market, AI-powered “animals” have arrived on the scene as well.<br>
    One example is Go1, the world’s first intelligent quadruped robot “companion” that is developed by China’s Unitree Robotics.<br>
    The robotic sidekick walks on all fours, much like a dog — but there’s no need for a collar or a leash.<br>
    <a href="
    https://nypost.com/2023/08/09/ai-pets-could-replace-dogs-and-cats-but-expert-warns-that-long-term-effects-are-unknown/">AI pets could replace dogs and cats, but expert warns that ‘long-term effects’ are unknown</a>
  </p>
</container>
<container>
    <h4>Generative artificial intelligence (GenAI) </h4>
    <image-container>
    <a href="https://www.visualcapitalist.com/generative-ai-explained-by-ai/"><img src="https://www.visualcapitalist.com/wp-content/uploads/2023/01/generative-ai-infographic-MAIN.png" alt="generative AI"><p style="position: relative; text-align: center">What is GENERATIVE AI</p></a>
    </image-container>
    <p>
        Generative artificial intelligence (GenAI) can create certain types of images, text, videos, and other media in response to prompts.<br>
        AI generators like ChatGPT and DALL-E2 are gaining worldwide popularity.<br>
        These programs respond to prompts input by users.<br>
        Submit a text prompt, and the generator will produce an output, whether it is a story or outline from ChatGPT or a monkey painted in a Victorian style by DALL-E2.<br>
        <a href="https://www.coursera.org/articles/what-is-generative-ai?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_career-academy_pmax-multiple-audiences-country-multi-set2&campaignid=20882109092&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adposition=&creativeid=&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1u89N0H9gRFqemRrpQZ-iSX9jfqzpN5iBUCbSXS1NeJX2O9W8NwTdAaAjl-EALw_wcB">What Is Generative AI? Definition, Applications, and Impact</a>    
    </p>        
    <p>
        The development of generative AI has catapulted AI technology to one of the fastest and most impactful innovations of the <a href="https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/">Fourth Industrial Revolution.</a><br>
        From creation to production and distribution, some predict its effect on global value chains is analogous to the steam engines of the Industrial Revolution.<br>
        <a href="https://www.weforum.org/events/world-economic-forum-annual-meeting-2024/sessions/industry-applications-of-generative-ai/">Generative AI: Steam Engine of the Fourth Industrial Revolution?</a>
    </p>
</container>
<container>
    <h4>Protopian AI-driven future</h4>
    <p>Technology is advancing at an unprecedented rate, and it is evident that the <strong>next 10 years will bring more change than the previous 100 years</strong>.<br>
    </p>
    <p>
    While some envision a dystopian future where climate change decimates our world, others see the potential for a utopia, a heavenly existence.<br>
    Regardless of our individual hopes and fears, it is undeniable that technology is driving this exponential change.</p>
    <p>
    <strong>In just 10 years, we could be 256 times more advanced than we are today.</strong>
    </p>
    <image-container>
        <img src="https://www.futuroprossimo.it/wp-content/uploads/2023/04/1682723892100.jpg" alt="protopia">
        <p>Bem-vindo à protopia, o futuro que já vivemos | Futuro próximo</p>
    </image-container>
    <p>
    Houses are being printed in 3D, dentists are utilizing 3D printing for dental implants, and cutting-edge research is exploring the creation of new materials.<br>
    Technology has permeated our world, blurring the lines between science fiction and science fact.<br>
    </p>
     <p>
    He urges us to remain optimistic not because our problems are smaller but because our capacity to solve them is greater.<br>
    With advancements in technology come solutions for climate change, agriculture, healthcare, and more.
    </p>
    <p><a href="https://www.toolify.ai/ai-news/embracing-the-future-protopia-and-gamechanging-ai-2351893">Embracing the Future: Protopia and Game-Changing AI</a></p>
</container>
<container>
    <h4>Elon Musk and Utopia</h4>
    <p>
    In an interview with the New York Times, the tech avantgarde Elon Musk said that artificial intelligence would take over humans in the next five years.
    </p>
    <p>
    <i>“You can have a job if you want to have a job or sort of personal satisfaction, but the <strong>AI will be able to do everything</strong>.”</i><br>
    <i>"<strong>Universal income will be necessary over time if AI takes over most human jobs</strong>."</i>
    </p>
    <p>
    <i>"They basically made a strategy decision to say, generative AI; we have to get on it. We don't care about fairness anymore.<br>
    We don't care about bias, <a href="https://roloje777.github.io/mg-bits-and-bytes-blog/posts/philosophy-and-thinking/2024-02-28-there-is-no-evil">ethics</a>.<br>
    As long as it's not producing child sexual abuse material or doing something harmful to a politician that could potentially affect our image, we're going to throw s---out there," the former Google employee said.</i>
    </p>
        <image-container>
        <a href="https://en.wikipedia.org/wiki/Elon_Musk"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg" alt="Elon Musk"><p>Elon Musk</p></a>              
    </image-container> 
    <details>  
      <summary> 
        <div class="my-p">What Is Universal Basic Income (UBI)?<br></div>
      </summary>
       <framed-text> 
         <p>
        Universal basic income (UBI) is a government program in which every adult citizen receives a set amount of money regularly.<br>
        The goals of a basic income system are to alleviate poverty and replace other need-based social programs that potentially require greater bureaucratic involvement.<br>
        The idea of universal basic income has gained momentum in the U.S. as automation increasingly replaces workers in manufacturing and other sectors of the economy.</p>
        <p>
        This concept has risen to the national consciousness since around 2020.<br>
        Much of renewed interest on the subject has to do with fundamental changes to the economy—namely, the growth of automation—that threaten to leave many Americans without jobs that pay a subsistence wage.<br>
        Supporters of universal basic income believe a guaranteed payment from the government can help ensure that those who are left behind by this economic transformation avoid poverty.<br>
        Even if government-sourced income isn’t enough to live on, it could theoretically supplement the income from the lower-wage or part-time jobs they are still able to obtain.
        </p>
        <p>
        Despite its promise to curtail poverty and cut red tape, universal basic income still faces an uphill battle.<br> Perhaps the most glaring downside is cost.<br>
        According to the non-profit Tax Foundation, Andrew Yang’s $1,000-a-month Freedom Dividend for every adult would have cost $2.8 trillion each year.<br>
        ...other criticisms of UBI is the argument that an income stream that’s not reliant on employment would create a disincentive to work.<br>
        </p>
        </framed-text>       
    </details>
    <p>
    <i>“We won’t have universal basic income.<br>
    We’ll have universal high income,”</i> Musk said, though he did not explicitly define the difference.
    </p>
    <p>
    Whether Musk’s AI-driven “universal high-income” utopia or a dystopia of mass unemployment comes to pass remains to be seen.
    </p>
    <p><a href="https://finance.yahoo.com/news/elon-musk-predicts-universal-high-160015532.html?guccounter=1">Elon Musk Predicts A 'Universal High Income' As Jobs Are Phased Out And Employment Becomes Obsolete — It'll Be 'Somewhat Of An Equalizer'</a></p>
</container>
<container>
    <h4>The embodiment hypothesis</h4>
    <p>
    <strong>Does AI need a “body” to become truly intelligent?</strong><br>
    According to the embodiment hypothesis, which argues that human-level intelligence can only emerge if an intelligence is able to sense and navigate a physical environment, the same way babies can. <br>
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
    Babies make a lot of mistakes when they’re first learning to do something, and AI is likely to experience plenty of errors during training, too.<br>
    If it’s controlling a machine when it makes those errors, it could destroy the hardware, damage the world around it, and maybe even hurt people.
    </p>
    <p>
        Because simulations don’t have to move at the speed of the real world, an AI can learn far more quickly, too — when MIT was training an AI-powered cheetah robot, for example, simulations allowed the AI to experience 100 days of running in just three hours.
        </p>
     <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/mjxuWCF-zm4?si=VSL6htsZO6ek6HWz"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">How MIT's Cheetah robot teaches itself to walk in 3 hours</p>   
    <p>
    The new AI Habitat is key to the development of mainstream embodied AI — for robots to be successfully integrated into our lives, they need to understand how to interact with us — but just how much an AI can learn about coexisting with people from simulations is debatable.
    </p>
    <p>
    Embodied AI is now at the point that some companies are ready to take the next step and actually send their AI-powered bots into the real world, like parents dropping their kids off at school for the first time.
    </p>
    <p>
    Robotics startup Agility Robotics has deployed its Digit robots at an Amazon R&D facility, while humanoid developer Apptronik is sending its Apollo robots to work at a Mercedes-Benz factory to validate that they can operate safely and effectively next to people.
    </p>
    <p>
    Meanwhile, OpenAI-backed robotics startup Figure is deploying its AI humanoids at a BMW manufacturing plant.
    </p>
    <p>
    <strong>Not all AI developers buy into the embodiment hypothesis — it may end up being possible to create a digital-only superintelligence that never feels the Earth beneath its robotic feet.</strong>
    </p>
    <p><a href="https://www.freethink.com/robots-ai/embodied-ai">Does AI need a “body” to become truly intelligent? Meta researchers think so</a>.</p>
</container>
<container>
<blockquote>
We've looked at concepts such as, Protopian AI-driven future, The embodiment hypothesis, Universal Basic Income and even Elon Musks's view point.<br>
Now I'd like to highlight some points made by the author of many books on humanity namely: <a href="https://en.wikipedia.org/wiki/Yuval_Noah_Harari">Yuval Noah Harari</a><br>
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
<h4>AI and the future of humanity </h4>
    <ol>
        <li><strong>AI doesn't really need Conciousness.</strong>
        <p>
            AI can help us in manufacturing ways to overcome the ecological crises or make it far worse.<br>
            ... however, the bad news is that to threaten the survival of humanity, AI doesn't really need Conciousness...<br>
            </p>
            <p>
            <i>
            MIT engineers are aiming to give robots a bit of common sense when faced with situations that push them off their trained path.<br>
            They've developed a method that connects robot motion data with the "common sense knowledge" of large language models, or LLMs.<br>
            "With our method, a robot can self-correct execution errors and improve overall task success."<br>
            <a href="https://techxplore.com/news/2024-03-household-robots-common.html">Engineering household robots to have a little common sense</a>
            </i>
            </p>
        </li>
        <li><strong> AI are gaining the ability to develop deep and intimate relationships with human beings.</strong><br>
             <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/zCc3ONJRBNA?si=enNE47stZU_kJMmQ"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">The Rise Of AI Relationships & The Danger of Artificial Intimacy</p>
        <blockquote>
        <p>
        On the 14th February 2024, there was an <a href="https://apnews.com/article/ai-girlfriend-boyfriend-replika-paradot-113df1b9ed069ed56162793b50f3a9fa">article</a> in the New York (ap) about a man that fell heavily in love with his AI bot.<br>
        </p>
        <p>
        ¯\_(ツ)_/¯<br>
        </p>
        </blockquote>
        </li>
        <li>
        <p>
        <strong>AI is unlocking humans master key.</strong><br>
        </p>
        <p>
        It is difficult for us to understand their full implications.<br>
        AI is going after mastery of language.<br>
        It's seizing the master key, unlocking the doors to all our institutions, from banks to temples.<br>
        It has just hacked the operating system of human civilization.<br>
        No human can beat a computer at chess. What will happen if the same applies to art, economics, politics, and even religion?<br>
        The longer we talk to bots, the better it gets to know us and how to hone messages in order to shift our political or economic views.<br>
        What's the purpose of advertising if you can simply ask the oracle what to buy.<br>
        Within a very short time, the advertising industry will collapse.<br>
        What will happen when all media we consume is synthetic?.<br>
        We will be living in a world that's not human anymore.<br>
        <strong>It will be the end of human history, no, not the end of history, but the end of the human dominated part we call history.</strong><br>
        </p>
        </li>     
        <li>
        <p><strong>AI will boldly go where no human has gone before.</strong></p>
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
        We can send robots to explore space without having to worry so much about their safety.<br>
        Of course, we want these carefully built robots to last.<br>
        We need them to stick around long enough to investigate and send us information about their destinations.<br>
        But even if a robotic mission fails, the humans involved with the mission stay safe.<br>
        </p>
        <p>
        Sending a robot to space is also much cheaper than sending a human.<br>
        Robots don’t need to eat or sleep or go to the bathroom.<br>
        They can survive in space for many years and can be left out there—no need for a return trip!.<br>
        </p>
        <p>
        Plus, robots can do lots of things that humans can’t. Some can withstand harsh conditions, like extreme temperatures or high levels of radiation.<br>
        Robots can also be built to do things that would be too risky or impossible for astronauts.
        </p>
        <p><a href="https://spaceplace.nasa.gov/space-robots/en/">Why Do We Send Robots To Space?</a></p>
        </li>
        <li><strong>AI can create an illusion of reality.</strong><br>
            <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://www.youtube.com/embed/gM-Y2RgTCaQ?si=9wosELv5zOBIO4UI"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">5 Ultra Realistic VR Games you can PLAY RIGHT NOW!</p> 
         <p>
            AI is fundamentally different from the printing press, from the radio, from any other invention in history because it can create completely new ideas and create a new culture.<br>
            We might soon find ourselves living inside dreams, worshipping gods, following politicians that are not created by human writers, artists, philosophers, but by artificial intelligence.<br>
            AI simply needs to gain Mastery of the human language to have access to our dreams, beliefs, and our brain.<br>
            No chip implants are needed.
            <details>
                <summary>
                .... AI is bringing us face to face with <div class="my-p">Plato's cave.</div><br>
                In the last few years, social media has given us a small taste of what is to come, creating social polarisation and people mistaking illusions for reality.<br>
                </summary>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/An_Illustration_of_The_Allegory_of_the_Cave%2C_from_Plato%E2%80%99s_Republic.jpg/1920px-An_Illustration_of_The_Allegory_of_the_Cave%2C_from_Plato%E2%80%99s_Republic.jpg" alt="">
                    <p>Allegory of the cave</p>
                <framed-text>
                In the allegory, Plato describes people that have spent their lives chained in a cave facing a blank wall.<br>
                They watch shadows projected onto the wall by objects passing in front of a fire behind them, and they give names to these shadows.<br>
                The shadows are the prisoners' reality but not accurate representations of the real world.<br>
                The shadows represent the fragment of reality that we can normally perceive through our senses, while the objects under the sun represent the true forms of objects that we can only perceive through reason.
                </framed-text>
            </details>
        </p>
        </li>
    <li>
        <p>
        <strong>We've encountered an alien intelligence not in outer space but here on earth.</strong>
        </p>
            <details>
                <summary>
                Artificial in the sense that we produce it, but it's increasingly producing itself, it's increasingly learning and adapting by itself, so artificial is a kind of wishful thinking that it's still under our control and its getting out of control, so in a sense it's becoming and alien force.<br>
                Artificial general intelligence is really the end of human history.<br>
                <div class="my-p">Digital evolution</div> is moving in totally different timescale than organic timescale, <strong>so it will not take long to reach artificial general intelligence.
                </strong><br>
                </summary>
                <framed-text>
                A human-level AI would be a machine, or a network of machines, capable of carrying out the same range of tasks that we humans are capable of.<br>
                It would be a machine that is “able to learn to do anything that a human can do”, as Norvig and Russell put it in their textbook on AI.<br>
                <strong>...half of the experts gave a date before 2061, and 90% gave a date within the next 100 years.</strong> <br>
                <a href="https://ourworldindata.org/ai-timelines">AI timelines: What do experts in artificial intelligence expect for the future?</a>
                </framed-text>
            </details>
        </li>
        <li>
        <p>
        <strong>Artificial intelligence has a mind of its own.</strong>
        </p>
        <p>
        The new functionality in <span><a href="https://blockworks.co/news/google-adds-ens-to-search"><img style="width:5%" src="https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FGoogle-1.jpg&w=1920&q=75" alt="Google">search</a></span> appears to have been introduced without a formal announcement and without the knowledge or input from ENS developers, who expressed surprise on X Thursday.</p>
        <blockquote>
        Now why was the developer surprised (°ロ°) !<br>
        Well, it see,ms that googles AI works so well that it went ahead, without it's developers knowledge or consent and <strong>added ENS to its search function</strong>.<br>
        Below is the developers post on X.
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
  <h4>Comparing Humans with AI (IQ,IA and EQ)</h4> 
    <blockquote>
    <p>
    What advantages do we humans have over AI and will those human qualities keep us being the dominant species in our world?<br>  
    Now, if Artificial Intelligence is able to do things faster and better than us humans, is their any hope for us in the future?<br>
    Apart from us being a biological organism composed of cells and organs with a very special brain and many will say our soul that sets us apart from all other, AI is composed of electronic, microchips etc.<br>
    Now there are debates out there on whether one can even give AI a concious or if it is even necessary...<br>
    Is it even necessary to equip AI with EQ?<br>
    Well think of it this way, AI has more "brain power" than humans, to an extent.<br>
    You may know of people with a high IQ, but a low EQ, do you feel safe giving such people lots of power?<br>
    Now we cannot measure the soul or even conciousness, but we can look at us humans intelligence quotient (IQ), emotional quotient (EQ) and compare with Artificial Intelligence (AI).<br>
    Maybe this will bring us closer to reality... or not.
    </p> 
    </blockquote> 
        <div style="position: relative;padding-bottom: 56.25%;padding-top: 35px;height: 0; margin: 2em 0 2em 0;
                overflow: hidden; ">
                <iframe
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                    src="https://youtube.com/embed/LgYaZAMJQqo?si=lIyplvejV3FaPVpU"
                    title="YouTube video player"  allowfullscreen >
                </iframe>
            </div>
            <p style="position: relative; text-align: center">AI vs Human EQ?</p>               
            <p>
            Well IQ measures your cognitive and intellectual skills, like working memory, analytical thinking, and knowledge retention, and it seems to me that AI has beat us with regards to this in most tasks and I believe soon in all tasks related to brain power.<br>
            </p>
            <p>            
            Now on the other hand EQ refers to your emotional abilities and social skills, including cognitive empathy, emotional regulation, and motivation.<br>
            AI doesn't possess the biological systems that generate emotions in humans.<br>
            While it can mimic emotional responses, it doesn't “feel” them.<br>
            AI operates based on objective data and algorithms.<br>
            Human emotion, being deeply subjective, remains elusive in Artificial Intelligence.
            </p>
            <p>
            <a href="https://www.betterup.com/blog/eq-vs-iq">EQ versus IQ: Which should you leverage when?</a><br>
            <a href="https://gafowler.medium.com/will-ai-ever-feel-emotions-the-quest-to-understand-machine-consciousness-7139fd99c76a">Will AI Ever Feel Emotions? The Quest to Understand Machine Consciousness</a><br>
            </p>            
     <blockquote>
        <p>
        What will happen if AI is put under threat, or some other change?<br>
        Does it posses an Adaptability Quotient (AQ)?<br>
        </p>
        <image-container>
          <a href="https://www.deciphergroup.co.nz/blogs/iq-eq-and-now-aq/"><img src="https://www.deciphergroup.co.nz/wp-content/uploads/The-four-types-of-intelligence-400x1000.jpg" alt="four types of Intelligence"><p>IQ, EQ and now AQ</p></a>
        </image-container>
        <p>
        Imagine you are some NASA engineer in the future and you've been posted with your colleagues on a remote space station for an extended period of your career.<br>
        Now all your colleagues are of the species AI.<br>
        How will you and your pals adapt to various situations?<br>
        We all know that we are social beings, what about our pals, are they good at socializing?<br>
        The question we should pose is - humans have at least four types of intelligence to help us with life complexities, how many do our AI friends have and how well can they apply them? <br>
        </p>
        <p>Now there are many that say that this makes no difference and that as long as humans create Artificial Intelligence beings no harm will be done.<br>
        After all we humans have a conciousness.<br>
        </p>
        <p>
        <strong>Yet there are others that say that it makes no difference that AI doesn't have a conciousness and that they don't need any to harm us.</strong><br>
        </p>
        <p>
        I tend to agree with the latter.<br>
        Have you met people that have no conciousness, low in EQ, AQ or even SQ (shoo, that alot of Q's 😂), and don't care what effect their actions or words have on others?<br>
        </p>
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
     </blockquote>

</container>
