import Vue from "vue";

Vue.filter("toLocaleString", function (date) {
  if (!date) {
    return "";
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const d = new Date(date);

  return d.toLocaleString("en", options);
});

Vue.filter("toLocaleStringDateTime", function (date) {
  if (!date) {
    return "";
  }
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const d = new Date(date);

  return d.toLocaleString("en", options);
});


Vue.filter("toLocaleTime", function (date) {
  if (!date) {
    return "";
  }
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const d = new Date(date);

  return d.toLocaleString("en", options);
});


Vue.filter("timeFormat12", function (time) {
  if (!time) {
    return "";
  }

  var H = +time.substr(0, 2);
  var h = H % 12 || 12;
  var ampm = (H < 12 || H === 24) ? "AM" : "PM";
  return h + time.substr(2, 3) + ' ' + ampm;
});


