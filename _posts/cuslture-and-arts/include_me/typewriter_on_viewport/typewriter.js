var opts = {
  root: null,
  threshold: 0.25,
};

const myObserver = new IntersectionObserver(handleIntersection, opts);
const myIds = new Array("#song-1", "#song-2", "#song-3", "#song-4");
const myClass = "#typewriter";

function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

function getLines(text) {
  var lines = text.split("<br>");

  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i] + "\n";
  }

  return lines.join("");
}

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log("intersected");
      const element = entry.target;
      /* element.style.lineHeight = "0.5"; */
      const text = getLines(element.dataset.value);
      element.textContent = "";
      textTypingEffect(element, text, 0);
    }
  });
}

function addObservers(elements) {
  elements.forEach((element) => {
    myObserver.observe(document.querySelector(element));
  });
}

addObservers(myIds);
