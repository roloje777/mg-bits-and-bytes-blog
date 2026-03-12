console.log("losing-winter-weight.js loaded");
  const ctx = document.getElementById("energyChart");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "BMR (Basal Metabolic Rate)",
        "NEAT (Daily Movement)",
        "Exercise (EAT)",
        "Thermic Effect of Food (TEF)",
      ],
      datasets: [
        {
          data: [65, 15, 10, 10],
          backgroundColor: ["#2c3e50", "#27ae60", "#2980b9", "#e67e22"],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });

  function downloadPDF() {
    var content = document.getElementById("printSection").innerHTML;

    var printWindow = window.open("", "", "height=600,width=800");

    printWindow.document.write("<html><head><title>Fat Loss Model</title>");
    printWindow.document.write("<style>");
    printWindow.document.write("body{font-family:Arial; padding:40px;}");
    printWindow.document.write("h2,h3{color:#2c3e50;}");
    printWindow.document.write("</style>");
    printWindow.document.write("</head><body>");
    printWindow.document.write(content);
    printWindow.document.write("</body></html>");

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

