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

</style>
<!-- Use <blockquote></blockquote> instead of this -->
<!-- adding blockqoutes -->
<p class="vertical">
 <vertical-text>
  add text here <br>
  text here
  </vertical-text>
</p>

<!-- adding floating image on left with text -->
<container>
  <image-container>
        	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Madrazo_Viriatus_HighRes.jpg/300px-Madrazo_Viriatus_HighRes.jpg" alt="">
	      <p>Title here</p>
	 
   </image-container>
   
   <container-text>
   Text here
</container-text>

<!-- add roman number ordered list -->
<container>
<ol> 
  <li>add text</li>
  <li>add text</li>
</lo>
</container>
