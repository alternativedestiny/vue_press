<template>
  <p id="app">访问来自： + {{ machine }}</p>
</template>

<script>
export default {
  data: function() {
    return {
      machine: "pc"
    };
  }
};
</script>
