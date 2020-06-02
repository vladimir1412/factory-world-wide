<template>
  <div class="statistics">
    <router-link class="redirection-button" :to="{ name: 'Home' }"
      >Go to Home page</router-link
    >
    <div class="chart">
      <span class="chart-note"> Click on color bellow to hide an item</span>
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </div>
  </div>
</template>
<script>
import LineChart from "../components/LineChart";
export default {
  data: () => ({
    chartData: [],
    datacollection: {},
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    this.fillData();
  },
  created() {
    this.setChartData();
  },
  methods: {
    setChartData: function() {
      const data = this.$store.getters.getItems;
      if (data.length) {
        this.chartData = data[0];
      }
    },
    fillData() {
      this.datacollection = {
        labels: [],
        datasets: [
          {
            label: "A",
            backgroundColor: "#ffe8df",
            data: []
          },
          {
            label: "B",
            backgroundColor: "#EB984E",
            data: []
          },
          {
            label: "C",
            backgroundColor: "#82E0AA",
            data: []
          },
          {
            label: "D",
            backgroundColor: "#5DADE2",
            data: []
          },
          {
            label: "E",
            backgroundColor: "#AF7AC5",
            data: []
          },
          {
            label: "F",
            backgroundColor: "#EC7063",
            data: []
          },
          {
            label: "G",
            backgroundColor: "#F4D03F",
            data: []
          },
          {
            label: "I",
            backgroundColor: "#5F6A6A",
            data: []
          },
          {
            label: "J",
            backgroundColor: "#888888",
            data: []
          },
          {
            label: "K",
            backgroundColor: "#feceab",
            data: []
          }
        ]
      };

      this.chartData.map((item, index) => {
        const labelName = this.datacollection.datasets[index].label;
        if (item.name === labelName) {
          item.data.map(item => {
            if (!this.datacollection.labels.includes(item.time)) {
              this.datacollection.labels.push(item.time);
            }
            this.datacollection.datasets[index].data.push(item.value);
          });
        }
      });
    }
  },
  components: {
    LineChart
  }
};
</script>
