<template>
  <button v-on:click="count++">You clicked {{count}} times</button>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  }
};
</script>