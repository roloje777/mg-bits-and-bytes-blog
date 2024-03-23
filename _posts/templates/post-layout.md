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
        width: 40%;
        margin-left: 5px;
		margin-top: 20px;
	}

    ol{
        list-style-type: upper-roman;
        
    }

   /* used as <p class="vertical"></p> instead I can also use <blockquote> 
     or > in md
      */
    video-container{        
        style="position: relative;
        padding-bottom: 56.25%;
        padding-top: 35px;
        height: 0;
        margin-bottom: 2em;
        margin-top: 2em;
        overflow: hidden; 
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
