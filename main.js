let canvas = document.getElementById("canvas").getContext("2d");
let container = document.querySelector(".graph-container");
let stylesheet = document.querySelector(".stylesheet");
let button = document.querySelector("button");

let chart = new Chart(canvas, {
    type: "bar",
    data : {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: ["hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)", 
                "hsl(10, 79%, 65%)"
            ],
            borderRadius: 3
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true
    }
});


button.addEventListener("click", () => {
    if (stylesheet.getAttribute("href") === "style.css") {
        stylesheet.setAttribute("href", "dark.css");
        button.textContent = "Light-theme"
    }
    else {
        stylesheet.setAttribute("href", "style.css");
        button.textContent = "Dark-theme"
    }
});
