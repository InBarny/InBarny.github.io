const ctx = document.querySelector(".activity-chart");
const ctx2 = document.querySelector(".prog-chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    datasets: [
      {
        label: "выполнено заданий",
        data: [4, 6, 7, 6, 7, 8, 4, 5, 1, 4, 4, 6, 7, 6, 2, 8, 4, 5, 1, 9],
        backgroundColor: "#1e293b",
        borderWidth: 0,
        borderRadius: 6,
        hoverBackgroundColor: "#60a5fa",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: true,
        },
        grid: {
          display: true,
          color: "#1e293b",
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  },
});
