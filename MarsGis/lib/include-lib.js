/* 2019-1-11 21:24:51 | 版权所有 火星科技 http://marsgis.cn  【联系我们QQ：516584683，微信：marsgis】 */ ! function () {
  for (var o, s = new RegExp("(^|(.*?\\/))(include-lib.js)(\\?|$)"), e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
    var a = e[t].getAttribute("src");
    if (a)
      if (a.match(s)) {
        o = e[t];
        break
      }
  }
  var l = "20190112",
    i = new RegExp("\\.css");

  function n(s) {
    if (null != s && 0 != s.length)
      for (var e = 0, t = s.length; e < t; e++) {
        var a = s[e];
        if (i.test(a)) {
          var r = '<link rel="stylesheet" href="' + a + "?time=" + l + '">';
          document.writeln(r)
        } else {
          var o = '<script type="text/javascript" src="' + a + "?time=" + l + '"><\/script>';
          document.writeln(o)
        }
      }
  }! function () {
    var s = (o.getAttribute("include") || "").split(","),
      e = o.getAttribute("libpath") || "";
    e.lastIndexOf("/") != e.length - 1 && (e += "/");
    var t = {
        jquery: [e + "jquery/jquery-2.1.4.min.js"],
        "jquery.scrollTo": [e + "jquery/scrollTo/jquery.scrollTo.min.js"],
        "jquery.minicolors": [e + "jquery/minicolors/jquery.minicolors.css", e + "jquery/minicolors/jquery.minicolors.min.js"],
        "jquery.range": [e + "jquery/range/range.css", e + "jquery/range/range.js"],
        ztree: [e + "jquery/ztree/css/zTreeStyle/zTreeStyle.css", e + "jquery/ztree/js/jquery.ztree.all.min.js"],
        "jquery.mCustomScrollbar": [e + "jquery/mCustomScrollbar/jquery.mCustomScrollbar.css", e + "jquery/mCustomScrollbar/jquery.mCustomScrollbar.js"],
        jedate: [e + "jquery/jedate/skin/jedate.css", e + "jquery/jedate/jedate.js"],
        lazyload: [e + "jquery/lazyload/jquery.lazyload.min.js"],
        "font-awesome": [e + "fonts/font-awesome/css/font-awesome.min.css"],
        "web-icons": [e + "fonts/web-icons/web-icons.css"],
        animate: [e + "animate/animate.css"],
        admui: [e + "admui/css/index.css", e + "admui/js/global/core.js", e + "admui/js/global/configs/site-configs.js", e + "admui/js/global/components.js"],
        "admui-frame": [e + "admui/css/site.css", e + "admui/js/app.js"],
        bootstrap: [e + "bootstrap/bootstrap.css", e + "bootstrap/bootstrap.min.js"],
        "bootstrap-table": [e + "bootstrap/bootstrap-table/bootstrap-table.css", e + "bootstrap/bootstrap-table/bootstrap-table.min.js", e + "bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"],
        "bootstrap-select": [e + "bootstrap/bootstrap-select/bootstrap-select.css", e + "bootstrap/bootstrap-select/bootstrap-select.min.js"],
        "bootstrap-checkbox": [e + "bootstrap/bootstrap-checkbox/awesome-bootstrap-checkbox.css"],
        nprogress: [e + "nprogress/nprogress.css", e + "nprogress/nprogress.min.js"],
        toastr: [e + "toastr/toastr.css", e + "toastr/toastr.js"],
        "admin-lte": [e + "fonts/font-awesome/css/font-awesome.min.css", e + "admin-lte/css/AdminLTE.min.css", e + "admin-lte/css/skins/skin-blue.min.css", e + "admin-lte/js/adminlte.min.js"],
        ace: [e + "ace/ace.js"],
        layer: [e + "layer/theme/default/layer.css", e + "layer/theme/retina/retina.css", e + "layer/layer.js"],
        haoutil: [e + "hao/haoutil.js", e + "hao/loading/loading.css", e + "hao/loading/loading.js"],
        echarts: [e + "echarts/echarts.min.js", e + "echarts/dark.js"],
        "echarts-gl": [e + "echarts/echarts.min.js", e + "echarts/echarts-gl.min.js"],
        "echarts-forleaflet": [e + "echarts/forleaflet/echarts-3.4.min.js"],
        mapV: [e + "mapV/mapv.min.js"],
        highlight: [e + "highlight/styles/foundation.css", e + "highlight/highlight.pack.js"],
        turf: [e + "turf/turf.min.js"],
        "esri-leaflet": [e + "leafletPlugins/esri/esri-leaflet.js"],
        "leaflet-wfs": [e + "leafletPlugins/wfs/leaflet-wfs.js"],
        "leaflet-mars": [e + "leaflet-mars/leaflet.css", e + "leaflet-mars/leaflet.js"]
      },
      a = -1 != window.location.hostname.indexOf("marsgis");
    for (var r in a && n(["http://leaflet.marsgis.cn/lib/hao/noCopy.js"]),
        s)
      n(t[s[r]])
  }()
}();