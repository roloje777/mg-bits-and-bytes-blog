<script>
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        console.log("interesected");
        // console.log(target1);
        // console.log(target2);
        // console.log(entry);
        // console.log(entry.target);
        let element = entry.target;
        element.textContent = element.dataset.value;
      }
    });
  }

  let opts = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersection, opts);
  function addObservers(elements) {
    elements.forEach((element) => {
      observer.observe(document.querySelector(element));
    });
  }

  addObservers(new Array("#song-1", "#song-2", "#song-3"));
</script>
