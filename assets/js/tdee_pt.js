document.addEventListener("DOMContentLoaded", function () {
  let chart;

  const btn1 = document.getElementById("calculateplan");

  if (btn1) {
    btn1.addEventListener("click", () => {
      console.log("button 1 clicked()");

      const weight = parseFloat(document.getElementById("weight").value);
      let tdee = parseFloat(document.getElementById("tdee").value);
      const goal = document.getElementById("goal").value;

      let adjustedCalories = tdee;
      let proteinPerKg = 1.6;

      if (goal === "gain") {
        adjustedCalories += 300;
        proteinPerKg = 1.6;
      } else if (goal === "loss") {
        adjustedCalories -= 400;
        proteinPerKg = 1.8;
      }

      const proteinGrams = Math.round(weight * proteinPerKg);
      const proteinCalories = proteinGrams * 4;
      const remainingCalories = adjustedCalories - proteinCalories;

      const carbCalories = remainingCalories * 0.55;
      const fatCalories = remainingCalories * 0.45;

      const carbGrams = Math.round(carbCalories / 4);
      const fatGrams = Math.round(fatCalories / 9);

      document.getElementById("results").innerHTML = `
            <p><strong>Calorias ajustadas:</strong> ${adjustedCalories} kcal/day</p>
            <p><strong>Alvo de proteína:</strong> ${proteinGrams} g/day</p>
            <p><strong>Carboidratos:</strong> ${carbGrams} g/day</p>
            <p><strong>Gorduras:</strong> ${fatGrams} g/day</p>
            <p style="margin-top:10px;">
             Monte suas refeições priorizando a proteína (30 a 50 g por refeição) e, em seguida,
distribua os carboidratos e as gorduras de acordo com seu objetivo.
            </p>
          `;

      const ctx = document.getElementById("macroChart").getContext("2d");

      if (chart) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Proteína", "Carboidratos", "Gorduras"],
          datasets: [
            {
              data: [proteinCalories, carbCalories, fatCalories],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    });
  }

  const btn2 = document.getElementById("calcenergy");

  if (btn2) {
    btn2.addEventListener("click", () => {
      console.log("calcenergy clicked");
      const sex = document.getElementById("sex").value;
      const age = parseFloat(document.getElementById("age").value);
      const weight = parseFloat(document.getElementById("weightTDEE").value);
      const height = parseFloat(document.getElementById("height").value);
      const activity = parseFloat(document.getElementById("activity").value);

      let bmr;

      // Mifflin-St Jeor Equation
      if (sex === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const tdee = Math.round(bmr * activity);

      document.getElementById("tdeeResult").innerHTML = `
            <p><strong>Taxa metabólica basal estimada:</strong> ${Math.round(bmr)} kcal/day</p>
            <p><strong>Gasto Energético Total Diário Estimado:</strong> ${tdee} kcal/day</p>
            <p style="margin-top:10px;">
             Use esse número como base:
              <br />• Coma aproximadamente isso para manter o peso.
              <br />• Adicione 250–300 kcal para ganho de massa muscular.
              <br />• Subtraia 300–400 kcal para perda de gordura magra.
            </p>
          `;
    });
  }
}); // end of "DOMContentLoaded"

console.log("tdee_pt.js loaded 1  ");
