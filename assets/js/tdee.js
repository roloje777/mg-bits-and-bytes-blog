

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
            <p><strong>Adjusted Calories:</strong> ${adjustedCalories} kcal/day</p>
            <p><strong>Protein Target:</strong> ${proteinGrams} g/day</p>
            <p><strong>Carbohydrates:</strong> ${carbGrams} g/day</p>
            <p><strong>Fats:</strong> ${fatGrams} g/day</p>
            <p style="margin-top:10px;">
              Build your meals by anchoring protein first (30–50g per meal), then
              distribute carbohydrates and fats based on your goal.
            </p>
          `;

        const ctx = document.getElementById("macroChart").getContext("2d");

        if (chart) {
          chart.destroy();
        }

        chart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Protein", "Carbohydrates", "Fats"],
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
        const weight = parseFloat(
          document.getElementById("weightTDEE").value,
        );
        const height = parseFloat(document.getElementById("height").value);
        const activity = parseFloat(
          document.getElementById("activity").value,
        );

        let bmr;

        // Mifflin-St Jeor Equation
        if (sex === "male") {
          bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
          bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const tdee = Math.round(bmr * activity);

        document.getElementById("tdeeResult").innerHTML = `
            <p><strong>Estimated BMR:</strong> ${Math.round(bmr)} kcal/day</p>
            <p><strong>Estimated TDEE:</strong> ${tdee} kcal/day</p>
            <p style="margin-top:10px;">
              Use this number as your baseline:
              <br />• Eat around this to maintain weight
              <br />• Add 250–300 kcal for muscle gain
              <br />• Subtract 300–400 kcal for lean fat loss
            </p>
          `;
      });
    }
  }); // end of "DOMContentLoaded"

  console.log("tdee.js loaded 1  ");

