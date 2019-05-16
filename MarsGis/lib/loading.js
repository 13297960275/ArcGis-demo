haoutil.loading = function () {
  var n = "muyao-loading";

  function t() {
    $("#" + n).remove()
  }
  return {
    show: function (t) {
      null == t && (t = {}), "string" == typeof t && (t = {
        text: t
      }), null == t.type && (t.type = "loader-default");
      var e = "";
      null != t.text && (e = ' data-text="' + t.text + '" ');
      var a = '<div id="' + n + '" class="loader ' + t.type + ' is-active"  ' + e + " ></div>";
      t.parent ? $(t.parent).append(a) : $("body").append(a)
    },
    hide: t,
    close: t
  }
}();