<script>
{/* see https://youtu.be/MiTJnYHX3iA?si=h6jEAr6ulrbXS2Y3 */}
    {/* const element  = document.querySelector(".text");   */}
    {/* const text = getLines(element.getAttribute("data-value")); */}
    var opts = {
      root:null,
    threshold: 0.25
  };

    const observer = new IntersectionObserver(handleIntersection, opts);
    const myIds = new Array("#song-1", "#song-2", "#song-3","#song-4");
     
        {/* let text = ""; */}
      

    addObservers(myIds);

    function textTypingEffect(element, text,i=0) {
      //  console.log(text);
      // console.log("i=", i);  
      // console.log("text length = ", text.length);
      if (i === 0) {
        element.textContent = "";
      }
      element.textContent += text[i];
      //  console.log(text[i]);
      //if we reach the end of the string
      if (i === text.length - 1) {
        return;
      }

      setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }

  function getLines(text){
    var lines = text.split("<br>");// here I'm using the same as html tag </br>
        
    for (var i = 0; i < lines.length; i++) {
      lines[i] = lines[i] + "\n";
    }
    
    return lines.join("");    
   
  }

  //  textTypingEffect();
  function handleIntersection(entries) {
    
    entries.map((entry) => {
      if (entry.isIntersecting) {
        console.log("interesected");
        const element = entry.target;
       const text = getLines(element.dataset.value);
        // console.log(text);
        element.textContent = "";
        textTypingEffect(element, text,0);
      }else{
        myIds.forEach(id => {
             document.getElementById(id).textContent ="";

        })
      }
    });
  }

 
  function addObservers(elements) {
    elements.forEach((element) => {
      observer.observe(document.querySelector(element));
    });
  }

 
</script>
