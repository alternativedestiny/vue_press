<template>
  <p id="app">访问来自： + {{ machine }}</p>
</template>

<script>
export default {
  data: function() {
    let m = "phone";
    if (navigator.userAgent.match(/Windows/i)) {
      m = "pc";
    } else if (navigator.userAgent.match(/Android/i)) {
      m = "Android";
    } else if (navigator.userAgent.match(/iPhone/i)) {
      m = "iPhone";
    } else {
      m = "其他设备";
    }
    return {
      machine: m
    };
  }
};
</script>
