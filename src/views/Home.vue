<template>
  <div class="home">
    <div>
      <router-link class="redirection-button" :to="{ name: 'Statistics' }"
        >Go to Statistics</router-link
      >
    </div>
    <div class="container">
      <div v-for="(item, index) in items" :key="index" class="row">
        <div
          v-for="(itemValue, index) in lastElement(item)"
          :key="index"
          class="item"
        >
          <span>{{ item.name }}: {{ itemValue.value }}</span>
          <i
            :class="
              itemValue.sign === '-' ? 'fa fa-arrow-down' : 'fa fa-arrow-up'
            "
          ></i>
        </div>
        <button
          class="toggle-button"
          @click="toggleField(index)"
          :class="
            item.disabled ? 'toggle-button--disabled' : 'toggle-button--enabled'
          "
        >
          {{ item.disabled ? "Disabled" : "Enabled" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "A",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "B",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "C",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "D",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "E",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "F",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "G",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "I",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "J",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      },
      {
        name: "K",
        disabled: false,
        data: [{ value: 3, sign: "", time: new Date().toLocaleTimeString() }]
      }
    ]
  }),
  mounted() {
    this.setItemsFromLocalStorage();
    setInterval(() => this.setRandomValues(), 2000);
  },
  methods: {
    setRandomValues: function() {
      this.items.map(item => {
        if (!item.disabled) {
          this.storeNewItem(item);
        }
      });
    },
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    setSign(item) {
      item.value === 1 ? (item.sign = "-") : (item.sign = "+");
    },
    setTime(item) {
      item.time = new Date().toLocaleTimeString();
    },
    toggleField(id) {
      this.items[id].disabled = !this.items[id].disabled;
    },
    storeNewItem(items) {
      let newItem = {};
      newItem.value = this.getRandomInt(1, 3);
      this.setSign(newItem);
      this.setTime(newItem);
      items.data.push(newItem);
    },
    lastElement(item) {
      return item.data.slice(item.data.length - 1, item.data.length);
    },
    setItemsFromLocalStorage() {
      const data = this.$store.getters.getItems;
      if (data.length) {
        this.items = data[0];
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("addItems", this.items);
    next();
  }
};
</script>
