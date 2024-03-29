!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("leaflet")) : "function" == typeof define && define.amd ? define(["exports", "leaflet"], e) : e((t.L = t.L || {},
    t.L.esri = {}), t.L)
}(this, function (t, p) {
  "use strict";
  var e = window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest,
    i = "" === document.documentElement.style.pointerEvents,
    a = {
      cors: e,
      pointerEvents: i
    },
    s = {
      attributionWidthOffset: 55
    },
    o = 0;

  function l(t) {
    var e = "";
    for (var i in t.f = t.f || "json",
        t)
      if (t.hasOwnProperty(i)) {
        var s, r = t[i],
          n = Object.prototype.toString.call(r);
        e.length && (e += "&"),
          s = "[object Array]" === n ? "[object Object]" === Object.prototype.toString.call(r[0]) ? JSON.stringify(r) : r.join(",") : "[object Object]" === n ? JSON.stringify(r) : "[object Date]" === n ? r.valueOf() : r,
          e += encodeURIComponent(i) + "=" + encodeURIComponent(s)
      }
    return e
  }

  function u(s, r) {
    var n = new window.XMLHttpRequest;
    return n.onerror = function (t) {
        n.onreadystatechange = p.Util.falseFn,
          s.call(r, {
            error: {
              code: 500,
              message: "XMLHttpRequest error"
            }
          }, null)
      },
      n.onreadystatechange = function () {
        var e, i;
        if (4 === n.readyState) {
          try {
            e = JSON.parse(n.responseText)
          } catch (t) {
            e = null,
              i = {
                code: 500,
                message: "Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error."
              }
          }!i && e.error && (i = e.error,
              e = null),
            n.onerror = p.Util.falseFn,
            s.call(r, i, e)
        }
      },
      n.ontimeout = function () {
        this.onerror()
      },
      n
  }

  function r(t, e, i, s) {
    var r = u(i, s);
    return r.open("POST", t),
      null != s && void 0 !== s.options && (r.timeout = s.options.timeout),
      r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
      r.send(l(e)),
      r
  }

  function n(t, e, i, s) {
    var r = u(i, s);
    return r.open("GET", t + "?" + l(e), !0),
      null != s && void 0 !== s.options && (r.timeout = s.options.timeout),
      r.send(null),
      r
  }

  function h(t, e, i, s) {
    var r = l(e),
      n = u(i, s),
      o = (t + "?" + r).length;
    if (o <= 2e3 && a.cors ? n.open("GET", t + "?" + r) : 2e3 < o && a.cors && (n.open("POST", t),
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")),
      null != s && void 0 !== s.options && (n.timeout = s.options.timeout),
      o <= 2e3 && a.cors)
      n.send(null);
    else {
      if (!(2e3 < o && a.cors))
        return o <= 2e3 && !a.cors ? c(t, e, i, s) : void U("a request to " + t + " was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html");
      n.send(r)
    }
    return n
  }

  function c(t, e, s, r) {
    window._EsriLeafletCallbacks = window._EsriLeafletCallbacks || {};
    var n = "c" + o;
    e.callback = "window._EsriLeafletCallbacks." + n,
      window._EsriLeafletCallbacks[n] = function (t) {
        if (!0 !== window._EsriLeafletCallbacks[n]) {
          var e, i = Object.prototype.toString.call(t);
          "[object Object]" !== i && "[object Array]" !== i && (e = {
                error: {
                  code: 500,
                  message: "Expected array or object as JSONP response"
                }
              },
              t = null),
            !e && t.error && (e = t,
              t = null),
            s.call(r, e, t),
            window._EsriLeafletCallbacks[n] = !0
        }
      };
    var i = p.DomUtil.create("script", null, document.body);
    return i.type = "text/javascript",
      i.src = t + "?" + l(e),
      i.id = n,
      p.DomUtil.addClass(i, "esri-leaflet-jsonp"),
      o++, {
        id: n,
        url: i.src,
        abort: function () {
          window._EsriLeafletCallbacks._callback[n]({
            code: 0,
            message: "Request aborted."
          })
        }
      }
  }
  var d = a.cors ? n : c;
  d.CORS = n,
    d.JSONP = c;
  var m = {
    request: h,
    get: d,
    post: r
  };

  function f(t) {
    return function (t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] !== e[i])
            return !1;
        return !0
      }(t[0], t[t.length - 1]) || t.push(t[0]),
      t
  }

  function y(t) {
    for (var e, i = 0, s = 0, r = t.length, n = t[s]; s < r - 1; s++)
      i += ((e = t[s + 1])[0] - n[0]) * (e[1] + n[1]),
      n = e;
    return 0 <= i
  }

  function g(t, e, i, s) {
    var r = (s[0] - i[0]) * (t[1] - i[1]) - (s[1] - i[1]) * (t[0] - i[0]),
      n = (e[0] - t[0]) * (t[1] - i[1]) - (e[1] - t[1]) * (t[0] - i[0]),
      o = (s[1] - i[1]) * (e[0] - t[0]) - (s[0] - i[0]) * (e[1] - t[1]);
    if (0 !== o) {
      var a = r / o,
        l = n / o;
      if (0 <= a && a <= 1 && 0 <= l && l <= 1)
        return !0
    }
    return !1
  }

  function _(t, e) {
    for (var i = 0; i < t.length - 1; i++)
      for (var s = 0; s < e.length - 1; s++)
        if (g(t[i], t[i + 1], e[s], e[s + 1]))
          return !0;
    return !1
  }

  function v(t) {
    var e = [],
      i = t.slice(0),
      s = f(i.shift().slice(0));
    if (4 <= s.length) {
      y(s) || s.reverse(),
        e.push(s);
      for (var r = 0; r < i.length; r++) {
        var n = f(i[r].slice(0));
        4 <= n.length && (y(n) && n.reverse(),
          e.push(n))
      }
    }
    return e
  }

  function b(t) {
    var e = {};
    for (var i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
    return e
  }

  function x(t, e) {
    return function t(e, i) {
      i = i || "OBJECTID";
      var s, r = {
          wkid: 4326
        },
        n = {};
      switch (e.type) {
        case "Point":
          n.x = e.coordinates[0],
            n.y = e.coordinates[1],
            n.spatialReference = r;
          break;
        case "MultiPoint":
          n.points = e.coordinates.slice(0),
            n.spatialReference = r;
          break;
        case "LineString":
          n.paths = [e.coordinates.slice(0)],
            n.spatialReference = r;
          break;
        case "MultiLineString":
          n.paths = e.coordinates.slice(0),
            n.spatialReference = r;
          break;
        case "Polygon":
          n.rings = v(e.coordinates.slice(0)),
            n.spatialReference = r;
          break;
        case "MultiPolygon":
          n.rings = function (t) {
              for (var e = [], i = 0; i < t.length; i++)
                for (var s = v(t[i]), r = s.length - 1; 0 <= r; r--) {
                  var n = s[r].slice(0);
                  e.push(n)
                }
              return e
            }(e.coordinates.slice(0)),
            n.spatialReference = r;
          break;
        case "Feature":
          e.geometry && (n.geometry = t(e.geometry, i)),
            n.attributes = e.properties ? b(e.properties) : {},
            e.id && (n.attributes[i] = e.id);
          break;
        case "FeatureCollection":
          for (n = [],
            s = 0; s < e.features.length; s++)
            n.push(t(e.features[s], i));
          break;
        case "GeometryCollection":
          for (n = [],
            s = 0; s < e.geometries.length; s++)
            n.push(t(e.geometries[s], i))
      }
      return n
    }(t, e)
  }

  function L(t, e) {
    return function t(e, n) {
      var i = {};
      if ("number" == typeof e.x && "number" == typeof e.y && (i.type = "Point",
          i.coordinates = [e.x, e.y],
          "number" == typeof e.z && i.coordinates.push(e.z)),
        e.points && (i.type = "MultiPoint",
          i.coordinates = e.points.slice(0)),
        e.paths && (1 === e.paths.length ? (i.type = "LineString",
          i.coordinates = e.paths[0].slice(0)) : (i.type = "MultiLineString",
          i.coordinates = e.paths.slice(0))),
        e.rings && (i = function (t) {
          for (var e, i, s = [], r = [], n = 0; n < t.length; n++) {
            var o = f(t[n].slice(0));
            if (!(o.length < 4))
              if (y(o)) {
                var a = [o.slice().reverse()];
                s.push(a)
              } else
                r.push(o.slice().reverse())
          }
          for (var l = []; r.length;) {
            i = r.pop();
            var u = !1;
            for (e = s.length - 1; 0 <= e; e--)
              if (h = s[e][0],
                p = _(h, c = i),
                d = function (t, e) {
                  for (var i = !1, s = -1, r = t.length, n = r - 1; ++s < r; n = s)
                    (t[s][1] <= e[1] && e[1] < t[n][1] || t[n][1] <= e[1] && e[1] < t[s][1]) && e[0] < (t[n][0] - t[s][0]) * (e[1] - t[s][1]) / (t[n][1] - t[s][1]) + t[s][0] && (i = !i);
                  return i
                }(h, c[0]),
                !p && d) {
                s[e].push(i),
                  u = !0;
                break
              }
            u || l.push(i)
          }
          for (var h, c, p, d; l.length;) {
            i = l.pop();
            var m = !1;
            for (e = s.length - 1; 0 <= e; e--)
              if (_(s[e][0], i)) {
                s[e].push(i),
                  m = !0;
                break
              }
            m || s.push([i.reverse()])
          }
          return 1 === s.length ? {
            type: "Polygon",
            coordinates: s[0]
          } : {
            type: "MultiPolygon",
            coordinates: s
          }
        }(e.rings.slice(0))),
        (e.geometry || e.attributes) && (i.type = "Feature",
          i.geometry = e.geometry ? t(e.geometry) : null,
          i.properties = e.attributes ? b(e.attributes) : null,
          e.attributes))
        try {
          i.id = function (t, e) {
            for (var i = n ? [n, "OBJECTID", "FID"] : ["OBJECTID", "FID"], s = 0; s < i.length; s++) {
              var r = i[s];
              if (r in t && ("string" == typeof t[r] || "number" == typeof t[r]))
                return t[r]
            }
            throw Error("No valid id attribute found")
          }(e.attributes)
        } catch (e) {}
      return JSON.stringify(i.geometry) === JSON.stringify({}) && (i.geometry = null),
        e.spatialReference && e.spatialReference.wkid && 4326 !== e.spatialReference.wkid && console.warn("Object converted in non-standard crs - " + JSON.stringify(e.spatialReference)),
        i
    }(t, e)
  }

  function S(t) {
    if ("NaN" === t.xmin || "NaN" === t.ymin || "NaN" === t.xmax || "NaN" === t.ymax)
      return null;
    var e = p.latLng(t.ymin, t.xmin),
      i = p.latLng(t.ymax, t.xmax);
    return p.latLngBounds(e, i)
  }

  function A(t) {
    return {
      xmin: (t = p.latLngBounds(t)).getSouthWest().lng,
      ymin: t.getSouthWest().lat,
      xmax: t.getNorthEast().lng,
      ymax: t.getNorthEast().lat,
      spatialReference: {
        wkid: 4326
      }
    }
  }
  var I = /^(OBJECTID|FID|OID|ID)$/i;

  function T(t) {
    var e;
    if (t.objectIdFieldName)
      e = t.objectIdFieldName;
    else if (t.fields) {
      for (var i = 0; i <= t.fields.length - 1; i++)
        if ("esriFieldTypeOID" === t.fields[i].type) {
          e = t.fields[i].name;
          break
        }
      if (!e)
        for (i = 0; i <= t.fields.length - 1; i++)
          if (t.fields[i].name.match(I)) {
            e = t.fields[i].name;
            break
          }
    }
    return e
  }

  function w(t) {
    for (var e in t.attributes)
      if (e.match(I))
        return e
  }

  function R(t, e) {
    var i, s = t.features || t.results,
      r = s.length;
    i = e || T(t);
    var n = {
      type: "FeatureCollection",
      features: []
    };
    if (r)
      for (var o = s.length - 1; 0 <= o; o--) {
        var a = L(s[o], i || w(s[o]));
        n.features.push(a)
      }
    return n
  }

  function O(t) {
    return "/" !== (t = p.Util.trim(t))[t.length - 1] && (t += "/"),
      t
  }

  function C(t) {
    if (-1 !== t.url.indexOf("?")) {
      t.requestParams = t.requestParams || {};
      var e = t.url.substring(t.url.indexOf("?") + 1);
      t.url = t.url.split("?")[0],
        t.requestParams = JSON.parse('{"' + decodeURI(e).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }
    return t.url = O(t.url.split("?")[0]),
      t
  }

  function P(t) {
    return /^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(t)
  }

  function F(t) {
    var e;
    switch (t) {
      case "Point":
        e = "esriGeometryPoint";
        break;
      case "MultiPoint":
        e = "esriGeometryMultipoint";
        break;
      case "LineString":
      case "MultiLineString":
        e = "esriGeometryPolyline";
        break;
      case "Polygon":
      case "MultiPolygon":
        e = "esriGeometryPolygon"
    }
    return e
  }

  function U() {
    console && console.warn && console.warn.apply(console, arguments)
  }

  function k(t) {
    return t.getSize().x - s.attributionWidthOffset + "px"
  }

  function q(e) {
    if (e.attributionControl && !e.attributionControl._esriAttributionAdded) {
      e.attributionControl.setPrefix('<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Powered by <a href="https://www.esri.com">Esri</a>');
      var i = document.createElement("style");
      i.type = "text/css",
        i.innerHTML = ".esri-truncated-attribution:hover {white-space: normal;}",
        document.getElementsByTagName("head")[0].appendChild(i),
        p.DomUtil.addClass(e.attributionControl._container, "esri-truncated-attribution:hover");
      var s = document.createElement("style");
      s.type = "text/css",
        s.innerHTML = ".esri-truncated-attribution {vertical-align: -3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: inline-block;transition: 0s white-space;transition-delay: 1s;max-width: " + k(e) + ";}",
        document.getElementsByTagName("head")[0].appendChild(s),
        p.DomUtil.addClass(e.attributionControl._container, "esri-truncated-attribution"),
        e.on("resize", function (t) {
          e.attributionControl._container.style.maxWidth = k(t.target)
        }),
        e.on("unload", function () {
          i.parentNode.removeChild(i),
            s.parentNode.removeChild(s);
          for (var t = document.querySelectorAll(".esri-leaflet-jsonp"), e = 0; e < t.length; e++)
            t.item(e).parentNode.removeChild(t.item(e))
        }),
        e.attributionControl._esriAttributionAdded = !0
    }
  }

  function M(t) {
    var e = {
      geometry: null,
      geometryType: null
    };
    return t instanceof p.LatLngBounds ? (e.geometry = A(t),
      e.geometryType = "esriGeometryEnvelope",
      e) : (t.getLatLng && (t = t.getLatLng()),
      t instanceof p.LatLng && (t = {
        type: "Point",
        coordinates: [t.lng, t.lat]
      }),
      t instanceof p.GeoJSON && (t = t.getLayers()[0].feature.geometry,
        e.geometry = x(t),
        e.geometryType = F(t.type)),
      t.toGeoJSON && (t = t.toGeoJSON()),
      "Feature" === t.type && (t = t.geometry),
      "Point" === t.type || "LineString" === t.type || "Polygon" === t.type || "MultiPolygon" === t.type ? (e.geometry = x(t),
        e.geometryType = F(t.type),
        e) : void U("invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object"))
  }

  function G(t, l) {
    c(t, {}, p.Util.bind(function (t, e) {
      if (!t) {
        l._esriAttributions = [];
        for (var i = 0; i < e.contributors.length; i++)
          for (var s = e.contributors[i], r = 0; r < s.coverageAreas.length; r++) {
            var n = s.coverageAreas[r],
              o = p.latLng(n.bbox[0], n.bbox[1]),
              a = p.latLng(n.bbox[2], n.bbox[3]);
            l._esriAttributions.push({
              attribution: s.attribution,
              score: n.score,
              bounds: p.latLngBounds(o, a),
              minZoom: n.zoomMin,
              maxZoom: n.zoomMax
            })
          }
        l._esriAttributions.sort(function (t, e) {
            return e.score - t.score
          }),
          D({
            target: l
          })
      }
    }, this))
  }

  function D(t) {
    var e = t.target,
      i = e._esriAttributions;
    if (e && e.attributionControl && i) {
      for (var s = "", r = e.getBounds(), n = p.latLngBounds(r.getSouthWest().wrap(), r.getNorthEast().wrap()), o = e.getZoom(), a = 0; a < i.length; a++) {
        var l = i[a],
          u = l.attribution;
        !s.match(u) && l.bounds.intersects(n) && o >= l.minZoom && o <= l.maxZoom && (s += ", " + u)
      }
      s = s.substr(2);
      var h = e.attributionControl._container.querySelector(".esri-dynamic-attribution");
      h.innerHTML = s,
        h.style.maxWidth = k(e),
        e.fire("attributionupdated", {
          attribution: s
        })
    }
  }
  var E = {
      warn: U,
      cleanUrl: O,
      getUrlParams: C,
      isArcgisOnline: P,
      geojsonTypeToArcGIS: F,
      responseToFeatureCollection: R,
      geojsonToArcGIS: x,
      arcgisToGeoJSON: L,
      boundsToExtent: A,
      extentToBounds: S,
      calcAttributionWidth: k,
      setEsriAttribution: q,
      _setGeometry: M,
      _getAttributionData: G,
      _updateMapAttribution: D,
      _findIdAttributeFromFeature: w,
      _findIdAttributeFromResponse: T
    },
    B = p.Class.extend({
      options: {
        proxy: !1,
        useCors: e
      },
      generateSetter: function (e, t) {
        return p.Util.bind(function (t) {
          return this.params[e] = t,
            this
        }, t)
      },
      initialize: function (t) {
        if (t.request && t.options ? (this._service = t,
            p.Util.setOptions(this, t.options)) : (p.Util.setOptions(this, t),
            this.options.url = O(t.url)),
          this.params = p.Util.extend({}, this.params || {}),
          this.setters)
          for (var e in this.setters) {
            var i = this.setters[e];
            this[e] = this.generateSetter(i, this)
          }
      },
      token: function (t) {
        return this._service ? this._service.authenticate(t) : this.params.token = t,
          this
      },
      format: function (t) {
        return this.params.returnUnformattedValues = !t,
          this
      },
      request: function (t, e) {
        return this.options.requestParams && p.Util.extend(this.params, this.options.requestParams),
          this._service ? this._service.request(this.path, this.params, t, e) : this._request("request", this.path, this.params, t, e)
      },
      _request: function (t, e, i, s, r) {
        var n = this.options.proxy ? this.options.proxy + "?" + this.options.url + e : this.options.url + e;
        return "get" !== t && "request" !== t || this.options.useCors ? m[t](n, i, s, r) : m.get.JSONP(n, i, s, r)
      }
    }),
    z = B.extend({
      setters: {
        offset: "resultOffset",
        limit: "resultRecordCount",
        fields: "outFields",
        precision: "geometryPrecision",
        featureIds: "objectIds",
        returnGeometry: "returnGeometry",
        returnM: "returnM",
        transform: "datumTransformation",
        token: "token"
      },
      path: "query",
      params: {
        returnGeometry: !0,
        where: "1=1",
        outSr: 4326,
        outFields: "*"
      },
      within: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelContains",
          this
      },
      intersects: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelIntersects",
          this
      },
      contains: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelWithin",
          this
      },
      crosses: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelCrosses",
          this
      },
      touches: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelTouches",
          this
      },
      overlaps: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelOverlaps",
          this
      },
      bboxIntersects: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelEnvelopeIntersects",
          this
      },
      indexIntersects: function (t) {
        return this._setGeometryParams(t),
          this.params.spatialRel = "esriSpatialRelIndexIntersects",
          this
      },
      nearby: function (t, e) {
        return t = p.latLng(t),
          this.params.geometry = [t.lng, t.lat],
          this.params.geometryType = "esriGeometryPoint",
          this.params.spatialRel = "esriSpatialRelIntersects",
          this.params.units = "esriSRUnit_Meter",
          this.params.distance = e,
          this.params.inSr = 4326,
          this
      },
      where: function (t) {
        return this.params.where = t,
          this
      },
      between: function (t, e) {
        return this.params.time = [t.valueOf(), e.valueOf()],
          this
      },
      simplify: function (t, e) {
        var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
        return this.params.maxAllowableOffset = i / t.getSize().y * e,
          this
      },
      orderBy: function (t, e) {
        return e = e || "ASC",
          this.params.orderByFields = this.params.orderByFields ? this.params.orderByFields + "," : "",
          this.params.orderByFields += [t, e].join(" "),
          this
      },
      run: function (i, s) {
        return this._cleanParams(),
          this.options.isModern || P(this.options.url) ? (this.params.f = "geojson",
            this.request(function (t, e) {
              this._trapSQLerrors(t),
                i.call(s, t, e, e)
            }, this)) : this.request(function (t, e) {
            this._trapSQLerrors(t),
              i.call(s, t, e && R(e), e)
          }, this)
      },
      count: function (i, t) {
        return this._cleanParams(),
          this.params.returnCountOnly = !0,
          this.request(function (t, e) {
            i.call(this, t, e && e.count, e)
          }, t)
      },
      ids: function (i, t) {
        return this._cleanParams(),
          this.params.returnIdsOnly = !0,
          this.request(function (t, e) {
            i.call(this, t, e && e.objectIds, e)
          }, t)
      },
      bounds: function (i, s) {
        return this._cleanParams(),
          this.params.returnExtentOnly = !0,
          this.request(function (t, e) {
            e && e.extent && S(e.extent) ? i.call(s, t, S(e.extent), e) : (t = {
                message: "Invalid Bounds"
              },
              i.call(s, t, null, e))
          }, s)
      },
      distinct: function () {
        return this.params.returnGeometry = !1,
          this.params.returnDistinctValues = !0,
          this
      },
      pixelSize: function (t) {
        var e = p.point(t);
        return this.params.pixelSize = [e.x, e.y],
          this
      },
      layer: function (t) {
        return this.path = t + "/query",
          this
      },
      _trapSQLerrors: function (t) {
        t && "400" === t.code && U("one common syntax error in query requests is encasing string values in double quotes instead of single quotes")
      },
      _cleanParams: function () {
        delete this.params.returnIdsOnly,
          delete this.params.returnExtentOnly,
          delete this.params.returnCountOnly
      },
      _setGeometryParams: function (t) {
        this.params.inSr = 4326;
        var e = M(t);
        this.params.geometry = e.geometry,
          this.params.geometryType = e.geometryType
      }
    });

  function N(t) {
    return new z(t)
  }
  var j = B.extend({
    setters: {
      contains: "contains",
      text: "searchText",
      fields: "searchFields",
      spatialReference: "sr",
      sr: "sr",
      layers: "layers",
      returnGeometry: "returnGeometry",
      maxAllowableOffset: "maxAllowableOffset",
      precision: "geometryPrecision",
      dynamicLayers: "dynamicLayers",
      returnZ: "returnZ",
      returnM: "returnM",
      gdbVersion: "gdbVersion",
      token: "token"
    },
    path: "find",
    params: {
      sr: 4326,
      contains: !0,
      returnGeometry: !0,
      returnZ: !0,
      returnM: !1
    },
    layerDefs: function (t, e) {
      return this.params.layerDefs = this.params.layerDefs ? this.params.layerDefs + ";" : "",
        this.params.layerDefs += [t, e].join(":"),
        this
    },
    simplify: function (t, e) {
      var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
      return this.params.maxAllowableOffset = i / t.getSize().y * e,
        this
    },
    run: function (i, s) {
      return this.request(function (t, e) {
        i.call(s, t, e && R(e), e)
      }, s)
    }
  });

  function Z(t) {
    return new j(t)
  }
  var J = B.extend({
      path: "identify",
      between: function (t, e) {
        return this.params.time = [t.valueOf(), e.valueOf()],
          this
      }
    }),
    W = J.extend({
      setters: {
        layers: "layers",
        precision: "geometryPrecision",
        tolerance: "tolerance",
        returnGeometry: "returnGeometry"
      },
      params: {
        sr: 4326,
        layers: "all",
        tolerance: 3,
        returnGeometry: !0
      },
      on: function (t) {
        var e = A(t.getBounds()),
          i = t.getSize();
        return this.params.imageDisplay = [i.x, i.y, 96],
          this.params.mapExtent = [e.xmin, e.ymin, e.xmax, e.ymax],
          this
      },
      at: function (t) {
        return 2 === t.length && (t = p.latLng(t)),
          this._setGeometryParams(t),
          this
      },
      layerDef: function (t, e) {
        return this.params.layerDefs = this.params.layerDefs ? this.params.layerDefs + ";" : "",
          this.params.layerDefs += [t, e].join(":"),
          this
      },
      simplify: function (t, e) {
        var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
        return this.params.maxAllowableOffset = i / t.getSize().y * e,
          this
      },
      run: function (r, n) {
        return this.request(function (t, e) {
          if (t)
            r.call(n, t, void 0, e);
          else {
            var i = R(e);
            e.results = e.results.reverse();
            for (var s = 0; s < i.features.length; s++)
              i.features[s].layerId = e.results[s].layerId;
            r.call(n, void 0, i, e)
          }
        })
      },
      _setGeometryParams: function (t) {
        var e = M(t);
        this.params.geometry = e.geometry,
          this.params.geometryType = e.geometryType
      }
    });

  function Q(t) {
    return new W(t)
  }
  var V = J.extend({
    setters: {
      setMosaicRule: "mosaicRule",
      setRenderingRule: "renderingRule",
      setPixelSize: "pixelSize",
      returnCatalogItems: "returnCatalogItems",
      returnGeometry: "returnGeometry"
    },
    params: {
      returnGeometry: !1
    },
    at: function (t) {
      return t = p.latLng(t),
        this.params.geometry = JSON.stringify({
          x: t.lng,
          y: t.lat,
          spatialReference: {
            wkid: 4326
          }
        }),
        this.params.geometryType = "esriGeometryPoint",
        this
    },
    getMosaicRule: function () {
      return this.params.mosaicRule
    },
    getRenderingRule: function () {
      return this.params.renderingRule
    },
    getPixelSize: function () {
      return this.params.pixelSize
    },
    run: function (i, s) {
      return this.request(function (t, e) {
        i.call(s, t, e && this._responseToGeoJSON(e), e)
      }, this)
    },
    _responseToGeoJSON: function (t) {
      var e = t.location,
        i = t.catalogItems,
        s = t.catalogItemVisibilities,
        r = {
          pixel: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [e.x, e.y]
            },
            crs: {
              type: "EPSG",
              properties: {
                code: e.spatialReference.wkid
              }
            },
            properties: {
              OBJECTID: t.objectId,
              name: t.name,
              value: t.value
            },
            id: t.objectId
          }
        };
      if (t.properties && t.properties.Values && (r.pixel.properties.values = t.properties.Values),
        i && i.features && (r.catalogItems = R(i),
          s && s.length === r.catalogItems.features.length))
        for (var n = s.length - 1; 0 <= n; n--)
          r.catalogItems.features[n].properties.catalogItemVisibility = s[n];
      return r
    }
  });

  function H(t) {
    return new V(t)
  }
  var K = p.Evented.extend({
      options: {
        proxy: !1,
        useCors: e,
        timeout: 0
      },
      initialize: function (t) {
        t = t || {},
          this._requestQueue = [],
          this._authenticating = !1,
          p.Util.setOptions(this, t),
          this.options.url = O(this.options.url)
      },
      get: function (t, e, i, s) {
        return this._request("get", t, e, i, s)
      },
      post: function (t, e, i, s) {
        return this._request("post", t, e, i, s)
      },
      request: function (t, e, i, s) {
        return this._request("request", t, e, i, s)
      },
      metadata: function (t, e) {
        return this._request("get", "", {}, t, e)
      },
      authenticate: function (t) {
        return this._authenticating = !1,
          this.options.token = t,
          this._runQueue(),
          this
      },
      getTimeout: function () {
        return this.options.timeout
      },
      setTimeout: function (t) {
        this.options.timeout = t
      },
      _request: function (t, e, i, s, r) {
        this.fire("requeststart", {
          url: this.options.url + e,
          params: i,
          method: t
        }, !0);
        var n = this._createServiceCallback(t, e, i, s, r);
        if (this.options.token && (i.token = this.options.token),
          this.options.requestParams && p.Util.extend(i, this.options.requestParams),
          !this._authenticating) {
          var o = this.options.proxy ? this.options.proxy + "?" + this.options.url + e : this.options.url + e;
          return "get" !== t && "request" !== t || this.options.useCors ? m[t](o, i, n, r) : m.get.JSONP(o, i, n, r)
        }
        this._requestQueue.push([t, e, i, s, r])
      },
      _createServiceCallback: function (i, s, r, n, o) {
        return p.Util.bind(function (t, e) {
          !t || 499 !== t.code && 498 !== t.code || (this._authenticating = !0,
              this._requestQueue.push([i, s, r, n, o]),
              this.fire("authenticationrequired", {
                authenticate: p.Util.bind(this.authenticate, this)
              }, !0),
              t.authenticate = p.Util.bind(this.authenticate, this)),
            n.call(o, t, e),
            t ? this.fire("requesterror", {
              url: this.options.url + s,
              params: r,
              message: t.message,
              code: t.code,
              method: i
            }, !0) : this.fire("requestsuccess", {
              url: this.options.url + s,
              params: r,
              response: e,
              method: i
            }, !0),
            this.fire("requestend", {
              url: this.options.url + s,
              params: r,
              method: i
            }, !0)
        }, this)
      },
      _runQueue: function () {
        for (var t = this._requestQueue.length - 1; 0 <= t; t--) {
          var e = this._requestQueue[t];
          this[e.shift()].apply(this, e)
        }
        this._requestQueue = []
      }
    }),
    X = K.extend({
      identify: function () {
        return Q(this)
      },
      find: function () {
        return Z(this)
      },
      query: function () {
        return N(this)
      }
    });

  function $(t) {
    return new X(t)
  }
  var Y = K.extend({
    query: function () {
      return N(this)
    },
    identify: function () {
      return H(this)
    }
  });

  function tt(t) {
    return new Y(t)
  }
  var et = K.extend({
    options: {
      idAttribute: "OBJECTID"
    },
    query: function () {
      return N(this)
    },
    addFeature: function (t, s, r) {
      return delete t.id,
        t = x(t),
        this.post("addFeatures", {
          features: [t]
        }, function (t, e) {
          var i = e && e.addResults ? e.addResults[0] : void 0;
          s && s.call(r, t || e.addResults[0].error, i)
        }, r)
    },
    updateFeature: function (t, s, r) {
      return t = x(t, this.options.idAttribute),
        this.post("updateFeatures", {
          features: [t]
        }, function (t, e) {
          var i = e && e.updateResults ? e.updateResults[0] : void 0;
          s && s.call(r, t || e.updateResults[0].error, i)
        }, r)
    },
    deleteFeature: function (t, s, r) {
      return this.post("deleteFeatures", {
        objectIds: t
      }, function (t, e) {
        var i = e && e.deleteResults ? e.deleteResults[0] : void 0;
        s && s.call(r, t || e.deleteResults[0].error, i)
      }, r)
    },
    deleteFeatures: function (t, s, r) {
      return this.post("deleteFeatures", {
        objectIds: t
      }, function (t, e) {
        var i = e && e.deleteResults ? e.deleteResults : void 0;
        s && s.call(r, t || e.deleteResults[0].error, i)
      }, r)
    }
  });

  function it(t) {
    return new et(t)
  }
  var st = "https:" !== window.location.protocol ? "http:" : "https:",
    rt = p.TileLayer.extend({
      statics: {
        TILES: {
          Streets: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ["server", "services"],
              attribution: "USGS, NOAA",
              attributionUrl: "https://static.arcgis.com/attribution/World_Street_Map"
            }
          },
          Topographic: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ["server", "services"],
              attribution: "USGS, NOAA",
              attributionUrl: "https://static.arcgis.com/attribution/World_Topo_Map"
            }
          },
          Oceans: {
            urlTemplate: st + "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              attribution: "USGS, NOAA",
              attributionUrl: "https://static.arcgis.com/attribution/Ocean_Basemap"
            }
          },
          OceansLabels: {
            urlTemplate: st + "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane"
            }
          },
          NationalGeographic: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              attribution: "National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."
            }
          },
          DarkGray: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              attribution: "HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"
            }
          },
          DarkGrayLabels: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane",
              attribution: ""
            }
          },
          Gray: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              attribution: "HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"
            }
          },
          GrayLabels: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 16,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane",
              attribution: ""
            }
          },
          Imagery: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ["server", "services"],
              attribution: "DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
              attributionUrl: "https://static.arcgis.com/attribution/World_Imagery"
            }
          },
          ImageryLabels: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane",
              attribution: ""
            }
          },
          ImageryTransportation: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 19,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane"
            }
          },
          ShadedRelief: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 13,
              subdomains: ["server", "services"],
              attribution: "USGS"
            }
          },
          ShadedReliefLabels: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 12,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane",
              attribution: ""
            }
          },
          Terrain: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 13,
              subdomains: ["server", "services"],
              attribution: "USGS, NOAA"
            }
          },
          TerrainLabels: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 13,
              subdomains: ["server", "services"],
              pane: i ? "esri-labels" : "tilePane",
              attribution: ""
            }
          },
          USATopo: {
            urlTemplate: st + "//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 15,
              subdomains: ["server", "services"],
              attribution: "USGS, National Geographic Society, i-cubed"
            }
          },
          ImageryClarity: {
            urlTemplate: st + "//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            options: {
              minZoom: 1,
              maxZoom: 19,
              attribution: "Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
            }
          }
        }
      },
      initialize: function (t, e) {
        var i;
        if ("object" == typeof t && t.urlTemplate && t.options)
          i = t;
        else {
          if ("string" != typeof t || !rt.TILES[t])
            throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"');
          i = rt.TILES[t]
        }
        var s = p.Util.extend(i.options, e);
        p.Util.setOptions(this, s),
          this.options.token && (i.urlTemplate += "?token=" + this.options.token),
          p.TileLayer.prototype.initialize.call(this, i.urlTemplate, s)
      },
      onAdd: function (t) {
        q(t),
          "esri-labels" === this.options.pane && this._initPane(),
          this.options.attributionUrl && G(this.options.attributionUrl, t),
          t.on("moveend", D),
          p.TileLayer.prototype.onAdd.call(this, t)
      },
      onRemove: function (t) {
        t.off("moveend", D),
          p.TileLayer.prototype.onRemove.call(this, t)
      },
      _initPane: function () {
        if (!this._map.getPane(this.options.pane)) {
          var t = this._map.createPane(this.options.pane);
          t.style.pointerEvents = "none",
            t.style.zIndex = 500
        }
      },
      getAttribution: function () {
        if (this.options.attribution)
          var t = '<span class="esri-dynamic-attribution">' + this.options.attribution + "</span>";
        return t
      }
    }),
    nt = p.TileLayer.extend({
      options: {
        zoomOffsetAllowance: .1,
        errorTileUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg=="
      },
      statics: {
        MercatorZoomLevels: {
          0: 156543.033928,
          1: 78271.5169639999,
          2: 39135.7584820001,
          3: 19567.8792409999,
          4: 9783.93962049996,
          5: 4891.96981024998,
          6: 2445.98490512499,
          7: 1222.99245256249,
          8: 611.49622628138,
          9: 305.748113140558,
          10: 152.874056570411,
          11: 76.4370282850732,
          12: 38.2185141425366,
          13: 19.1092570712683,
          14: 9.55462853563415,
          15: 4.77731426794937,
          16: 2.38865713397468,
          17: 1.19432856685505,
          18: .597164283559817,
          19: .298582141647617,
          20: .14929107082381,
          21: .07464553541191,
          22: .0373227677059525,
          23: .0186613838529763
        }
      },
      initialize: function (t) {
        t = C(t = p.Util.setOptions(this, t)),
          this.tileUrl = (t.proxy ? t.proxy + "?" : "") + t.url + "tile/{z}/{y}/{x}" + (t.requestParams && 0 < Object.keys(t.requestParams).length ? p.Util.getParamString(t.requestParams) : ""),
          -1 !== t.url.indexOf("{s}") && t.subdomains && (t.url = t.url.replace("{s}", t.subdomains[0])),
          this.service = $(t),
          this.service.addEventParent(this),
          new RegExp(/tiles.arcgis(online)?\.com/g).test(t.url) && (this.tileUrl = this.tileUrl.replace("://tiles", "://tiles{s}"),
            t.subdomains = ["1", "2", "3", "4"]),
          this.options.token && (this.tileUrl += "?token=" + this.options.token),
          p.TileLayer.prototype.initialize.call(this, this.tileUrl, t)
      },
      getTileUrl: function (t) {
        var e = this._getZoomForUrl();
        return p.Util.template(this.tileUrl, p.Util.extend({
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._lodMap && this._lodMap[e] ? this._lodMap[e] : e
        }, this.options))
      },
      createTile: function (t, e) {
        var i = document.createElement("img");
        return p.DomEvent.on(i, "load", p.Util.bind(this._tileOnLoad, this, e, i)),
          p.DomEvent.on(i, "error", p.Util.bind(this._tileOnError, this, e, i)),
          this.options.crossOrigin && (i.crossOrigin = ""),
          i.alt = "",
          !this._lodMap || this._lodMap && this._lodMap[this._getZoomForUrl()] ? i.src = this.getTileUrl(t) : this.once("lodmap", function () {
            i.src = this.getTileUrl(t)
          }, this),
          i
      },
      onAdd: function (u) {
        q(u),
          this._lodMap || this.metadata(function (t, e) {
            if (!t && e.spatialReference) {
              var i = e.spatialReference.latestWkid || e.spatialReference.wkid;
              if (!this.options.attribution && u.attributionControl && e.copyrightText && (this.options.attribution = e.copyrightText,
                  u.attributionControl.addAttribution(this.getAttribution())),
                u.options.crs !== p.CRS.EPSG3857 || 102100 !== i && 3857 !== i)
                u.options.crs && u.options.crs.code && -1 < u.options.crs.code.indexOf(i) || U("L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html");
              else {
                this._lodMap = {};
                for (var s = e.tileInfo.lods, r = nt.MercatorZoomLevels, n = 0; n < s.length; n++) {
                  var o = s[n];
                  for (var a in r) {
                    var l = r[a];
                    if (this._withinPercentage(o.resolution, l, this.options.zoomOffsetAllowance)) {
                      this._lodMap[a] = o.level;
                      break
                    }
                  }
                }
                this.fire("lodmap")
              }
            }
          }, this),
          p.TileLayer.prototype.onAdd.call(this, u)
      },
      metadata: function (t, e) {
        return this.service.metadata(t, e),
          this
      },
      identify: function () {
        return this.service.identify()
      },
      find: function () {
        return this.service.find()
      },
      query: function () {
        return this.service.query()
      },
      authenticate: function (t) {
        var e = "?token=" + t;
        return this.tileUrl = this.options.token ? this.tileUrl.replace(/\?token=(.+)/g, e) : this.tileUrl + e,
          this.options.token = t,
          this.service.authenticate(t),
          this
      },
      _withinPercentage: function (t, e, i) {
        return Math.abs(t / e - 1) < i
      }
    }),
    ot = p.ImageOverlay.extend({
      onAdd: function (t) {
        this._topLeft = t.getPixelBounds().min,
          p.ImageOverlay.prototype.onAdd.call(this, t)
      },
      _reset: function () {
        this._map.options.crs === p.CRS.EPSG3857 ? p.ImageOverlay.prototype._reset.call(this) : p.DomUtil.setPosition(this._image, this._topLeft.subtract(this._map.getPixelOrigin()))
      }
    }),
    at = p.Layer.extend({
      options: {
        opacity: 1,
        position: "front",
        f: "image",
        useCors: e,
        attribution: null,
        interactive: !1,
        alt: ""
      },
      onAdd: function (i) {
        q(i),
          this._update = p.Util.throttle(this._update, this.options.updateInterval, this),
          i.on("moveend", this._update, this),
          this._currentImage && this._currentImage._bounds.equals(this._map.getBounds()) ? i.addLayer(this._currentImage) : this._currentImage && (this._map.removeLayer(this._currentImage),
            this._currentImage = null),
          this._update(),
          this._popup && (this._map.on("click", this._getPopupData, this),
            this._map.on("dblclick", this._resetPopupState, this)),
          this.metadata(function (t, e) {
            !t && !this.options.attribution && i.attributionControl && e.copyrightText && (this.options.attribution = e.copyrightText,
              i.attributionControl.addAttribution(this.getAttribution()))
          }, this)
      },
      onRemove: function (t) {
        this._currentImage && this._map.removeLayer(this._currentImage),
          this._popup && (this._map.off("click", this._getPopupData, this),
            this._map.off("dblclick", this._resetPopupState, this)),
          this._map.off("moveend", this._update, this)
      },
      bindPopup: function (t, e) {
        return this._shouldRenderPopup = !1,
          this._lastClick = !1,
          this._popup = p.popup(e),
          this._popupFunction = t,
          this._map && (this._map.on("click", this._getPopupData, this),
            this._map.on("dblclick", this._resetPopupState, this)),
          this
      },
      unbindPopup: function () {
        return this._map && (this._map.closePopup(this._popup),
            this._map.off("click", this._getPopupData, this),
            this._map.off("dblclick", this._resetPopupState, this)),
          this._popup = !1,
          this
      },
      bringToFront: function () {
        return this.options.position = "front",
          this._currentImage && this._currentImage.bringToFront(),
          this
      },
      bringToBack: function () {
        return this.options.position = "back",
          this._currentImage && this._currentImage.bringToBack(),
          this
      },
      getAttribution: function () {
        return this.options.attribution
      },
      getOpacity: function () {
        return this.options.opacity
      },
      setOpacity: function (t) {
        return this.options.opacity = t,
          this._currentImage && this._currentImage.setOpacity(t),
          this
      },
      getTimeRange: function () {
        return [this.options.from, this.options.to]
      },
      setTimeRange: function (t, e) {
        return this.options.from = t,
          this.options.to = e,
          this._update(),
          this
      },
      metadata: function (t, e) {
        return this.service.metadata(t, e),
          this
      },
      authenticate: function (t) {
        return this.service.authenticate(t),
          this
      },
      redraw: function () {
        this._update()
      },
      _renderImage: function (t, s, e) {
        if (this._map) {
          e && (t = "data:" + e + ";base64," + t);
          var r = new ot(t, s, {
              opacity: 0,
              crossOrigin: this.options.useCors,
              alt: this.options.alt,
              pane: this.options.pane || this.getPane(),
              interactive: this.options.interactive
            }).addTo(this._map),
            n = function (t) {
              if (r.off("error", n, this),
                this._map) {
                var e = t.target,
                  i = this._currentImage;
                e._bounds.equals(s) && e._bounds.equals(this._map.getBounds()) ? (this._currentImage = e,
                  "front" === this.options.position ? this.bringToFront() : this.bringToBack(),
                  this._map && this._currentImage._map ? this._currentImage.setOpacity(this.options.opacity) : this._currentImage._map.removeLayer(this._currentImage),
                  i && this._map && this._map.removeLayer(i),
                  i && i._map && i._map.removeLayer(i)) : this._map.removeLayer(e)
              }
              this.fire("load", {
                bounds: s
              })
            };
          r.once("error", function () {
              this._map.removeLayer(r),
                this.fire("error"),
                r.off("load", n, this)
            }, this),
            r.once("load", n, this),
            this.fire("loading", {
              bounds: s
            })
        }
      },
      _update: function () {
        if (this._map) {
          var t = this._map.getZoom(),
            e = this._map.getBounds();
          if (!(this._animatingZoom || this._map._panTransition && this._map._panTransition._inProgress))
            if (t > this.options.maxZoom || t < this.options.minZoom)
              this._currentImage && (this._currentImage._map.removeLayer(this._currentImage),
                this._currentImage = null);
            else {
              var i = this._buildExportParams();
              p.Util.extend(i, this.options.requestParams),
                i ? this._requestExport(i, e) : this._currentImage && (this._currentImage._map.removeLayer(this._currentImage),
                  this._currentImage = null)
            }
        }
      },
      _renderPopup: function (t, e, i, s) {
        if (t = p.latLng(t),
          this._shouldRenderPopup && this._lastClick.equals(t)) {
          var r = this._popupFunction(e, i, s);
          r && this._popup.setLatLng(t).setContent(r).openOn(this._map)
        }
      },
      _resetPopupState: function (t) {
        this._shouldRenderPopup = !1,
          this._lastClick = t.latlng
      },
      _calculateBbox: function () {
        var t = this._map.getPixelBounds(),
          e = this._map.unproject(t.getBottomLeft()),
          i = this._map.unproject(t.getTopRight()),
          s = this._map.options.crs.project(i),
          r = this._map.options.crs.project(e),
          n = p.bounds(s, r);
        return [n.getBottomLeft().x, n.getBottomLeft().y, n.getTopRight().x, n.getTopRight().y].join(",")
      },
      _calculateImageSize: function () {
        var t = this._map.getPixelBounds(),
          e = this._map.getSize(),
          i = this._map.unproject(t.getBottomLeft()),
          s = this._map.unproject(t.getTopRight()),
          r = this._map.latLngToLayerPoint(s).y,
          n = this._map.latLngToLayerPoint(i).y;
        return (0 < r || n < e.y) && (e.y = n - r),
          e.x + "," + e.y
      }
    }),
    lt = at.extend({
      options: {
        updateInterval: 150,
        format: "jpgpng",
        transparent: !0,
        f: "image"
      },
      query: function () {
        return this.service.query()
      },
      identify: function () {
        return this.service.identify()
      },
      initialize: function (t) {
        t = C(t),
          this.service = tt(t),
          this.service.addEventParent(this),
          p.Util.setOptions(this, t)
      },
      setPixelType: function (t) {
        return this.options.pixelType = t,
          this._update(),
          this
      },
      getPixelType: function () {
        return this.options.pixelType
      },
      setBandIds: function (t) {
        return p.Util.isArray(t) ? this.options.bandIds = t.join(",") : this.options.bandIds = t.toString(),
          this._update(),
          this
      },
      getBandIds: function () {
        return this.options.bandIds
      },
      setNoData: function (t, e) {
        return p.Util.isArray(t) ? this.options.noData = t.join(",") : this.options.noData = t.toString(),
          e && (this.options.noDataInterpretation = e),
          this._update(),
          this
      },
      getNoData: function () {
        return this.options.noData
      },
      getNoDataInterpretation: function () {
        return this.options.noDataInterpretation
      },
      setRenderingRule: function (t) {
        this.options.renderingRule = t,
          this._update()
      },
      getRenderingRule: function () {
        return this.options.renderingRule
      },
      setMosaicRule: function (t) {
        this.options.mosaicRule = t,
          this._update()
      },
      getMosaicRule: function () {
        return this.options.mosaicRule
      },
      _getPopupData: function (s) {
        var t = p.Util.bind(function (t, e, i) {
            t || setTimeout(p.Util.bind(function () {
              this._renderPopup(s.latlng, t, e, i)
            }, this), 300)
          }, this),
          e = this.identify().at(s.latlng);
        this.options.mosaicRule && e.setMosaicRule(this.options.mosaicRule),
          e.run(t),
          this._shouldRenderPopup = !0,
          this._lastClick = s.latlng
      },
      _buildExportParams: function () {
        var t = parseInt(this._map.options.crs.code.split(":")[1], 10),
          e = {
            bbox: this._calculateBbox(),
            size: this._calculateImageSize(),
            format: this.options.format,
            transparent: this.options.transparent,
            bboxSR: t,
            imageSR: t
          };
        return this.options.from && this.options.to && (e.time = this.options.from.valueOf() + "," + this.options.to.valueOf()),
          this.options.pixelType && (e.pixelType = this.options.pixelType),
          this.options.interpolation && (e.interpolation = this.options.interpolation),
          this.options.compressionQuality && (e.compressionQuality = this.options.compressionQuality),
          this.options.bandIds && (e.bandIds = this.options.bandIds),
          (0 === this.options.noData || this.options.noData) && (e.noData = this.options.noData),
          this.options.noDataInterpretation && (e.noDataInterpretation = this.options.noDataInterpretation),
          this.service.options.token && (e.token = this.service.options.token),
          this.options.renderingRule && (e.renderingRule = JSON.stringify(this.options.renderingRule)),
          this.options.mosaicRule && (e.mosaicRule = JSON.stringify(this.options.mosaicRule)),
          e
      },
      _requestExport: function (t, i) {
        "json" === this.options.f ? this.service.request("exportImage", t, function (t, e) {
          t || (this.options.token && (e.href += "?token=" + this.options.token),
            this._renderImage(e.href, i))
        }, this) : (t.f = "image",
          this._renderImage(this.options.url + "exportImage" + p.Util.getParamString(t), i))
      }
    }),
    ut = at.extend({
      options: {
        updateInterval: 150,
        layers: !1,
        layerDefs: !1,
        timeOptions: !1,
        format: "png24",
        transparent: !0,
        f: "json"
      },
      initialize: function (t) {
        t = C(t),
          this.service = $(t),
          this.service.addEventParent(this),
          (t.proxy || t.token) && "json" !== t.f && (t.f = "json"),
          p.Util.setOptions(this, t)
      },
      getDynamicLayers: function () {
        return this.options.dynamicLayers
      },
      setDynamicLayers: function (t) {
        return this.options.dynamicLayers = t,
          this._update(),
          this
      },
      getLayers: function () {
        return this.options.layers
      },
      setLayers: function (t) {
        return this.options.layers = t,
          this._update(),
          this
      },
      getLayerDefs: function () {
        return this.options.layerDefs
      },
      setLayerDefs: function (t) {
        return this.options.layerDefs = t,
          this._update(),
          this
      },
      getTimeOptions: function () {
        return this.options.timeOptions
      },
      setTimeOptions: function (t) {
        return this.options.timeOptions = t,
          this._update(),
          this
      },
      query: function () {
        return this.service.query()
      },
      identify: function () {
        return this.service.identify()
      },
      find: function () {
        return this.service.find()
      },
      _getPopupData: function (s) {
        var t, e = p.Util.bind(function (t, e, i) {
          t || setTimeout(p.Util.bind(function () {
            this._renderPopup(s.latlng, t, e, i)
          }, this), 300)
        }, this);
        if ((t = this.options.popup ? this.options.popup.on(this._map).at(s.latlng) : this.identify().on(this._map).at(s.latlng)).params.maxAllowableOffset || t.simplify(this._map, .5),
          this.options.popup && this.options.popup.params && this.options.popup.params.layers || (this.options.layers ? t.layers("visible:" + this.options.layers.join(",")) : t.layers("visible")),
          this.options.layerDefs && "string" != typeof this.options.layerDefs && !t.params.layerDefs)
          for (var i in this.options.layerDefs)
            this.options.layerDefs.hasOwnProperty(i) && t.layerDef(i, this.options.layerDefs[i]);
        t.run(e),
          this._shouldRenderPopup = !0,
          this._lastClick = s.latlng
      },
      _buildExportParams: function () {
        var t = parseInt(this._map.options.crs.code.split(":")[1], 10),
          e = {
            bbox: this._calculateBbox(),
            size: this._calculateImageSize(),
            dpi: 96,
            format: this.options.format,
            transparent: this.options.transparent,
            bboxSR: t,
            imageSR: t
          };
        if (this.options.dynamicLayers && (e.dynamicLayers = this.options.dynamicLayers),
          this.options.layers) {
          if (0 === this.options.layers.length)
            return;
          e.layers = "show:" + this.options.layers.join(",")
        }
        return this.options.layerDefs && (e.layerDefs = "string" == typeof this.options.layerDefs ? this.options.layerDefs : JSON.stringify(this.options.layerDefs)),
          this.options.timeOptions && (e.timeOptions = JSON.stringify(this.options.timeOptions)),
          this.options.from && this.options.to && (e.time = this.options.from.valueOf() + "," + this.options.to.valueOf()),
          this.service.options.token && (e.token = this.service.options.token),
          this.options.proxy && (e.proxy = this.options.proxy),
          this.options.disableCache && (e._ts = Date.now()),
          e
      },
      _requestExport: function (t, i) {
        "json" === this.options.f ? this.service.request("export", t, function (t, e) {
          t || (this.options.token && (e.href += "?token=" + this.options.token),
            this.options.proxy && (e.href = this.options.proxy + "?" + e.href),
            e.href ? this._renderImage(e.href, i) : this._renderImage(e.imageData, i, e.contentType))
        }, this) : (t.f = "image",
          this._renderImage(this.options.url + "export" + p.Util.getParamString(t), i))
      }
    }),
    ht = p.Layer.extend({
      options: {
        cellSize: 512,
        updateInterval: 150
      },
      initialize: function (t) {
        t = p.setOptions(this, t),
          this._zooming = !1
      },
      onAdd: function (t) {
        this._map = t,
          this._update = p.Util.throttle(this._update, this.options.updateInterval, this),
          this._reset(),
          this._update()
      },
      onRemove: function () {
        this._map.removeEventListener(this.getEvents(), this),
          this._removeCells()
      },
      getEvents: function () {
        return {
          moveend: this._update,
          zoomstart: this._zoomstart,
          zoomend: this._reset
        }
      },
      addTo: function (t) {
        return t.addLayer(this),
          this
      },
      removeFrom: function (t) {
        return t.removeLayer(this),
          this
      },
      _zoomstart: function () {
        this._zooming = !0
      },
      _reset: function () {
        this._removeCells(),
          this._cells = {},
          this._activeCells = {},
          this._cellsToLoad = 0,
          this._cellsTotal = 0,
          this._cellNumBounds = this._getCellNumBounds(),
          this._resetWrap(),
          this._zooming = !1
      },
      _resetWrap: function () {
        var t = this._map,
          e = t.options.crs;
        if (!e.infinite) {
          var i = this._getCellSize();
          e.wrapLng && (this._wrapLng = [Math.floor(t.project([0, e.wrapLng[0]]).x / i), Math.ceil(t.project([0, e.wrapLng[1]]).x / i)]),
            e.wrapLat && (this._wrapLat = [Math.floor(t.project([e.wrapLat[0], 0]).y / i), Math.ceil(t.project([e.wrapLat[1], 0]).y / i)])
        }
      },
      _getCellSize: function () {
        return this.options.cellSize
      },
      _update: function () {
        if (this._map) {
          var t = this._map.getPixelBounds(),
            e = this._getCellSize(),
            i = p.bounds(t.min.divideBy(e).floor(), t.max.divideBy(e).floor());
          this._removeOtherCells(i),
            this._addCells(i),
            this.fire("cellsupdated")
        }
      },
      _addCells: function (t) {
        var e, i, s, r = [],
          n = t.getCenter(),
          o = this._map.getZoom();
        for (e = t.min.y; e <= t.max.y; e++)
          for (i = t.min.x; i <= t.max.x; i++)
            (s = p.point(i, e)).z = o,
            this._isValidCell(s) && r.push(s);
        var a = r.length;
        if (0 !== a)
          for (this._cellsToLoad += a,
            this._cellsTotal += a,
            r.sort(function (t, e) {
              return t.distanceTo(n) - e.distanceTo(n)
            }),
            i = 0; i < a; i++)
            this._addCell(r[i])
      },
      _isValidCell: function (t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._cellNumBounds;
          if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
            return !1
        }
        if (!this.options.bounds)
          return !0;
        var s = this._cellCoordsToBounds(t);
        return p.latLngBounds(this.options.bounds).intersects(s)
      },
      _cellCoordsToBounds: function (t) {
        var e = this._map,
          i = this.options.cellSize,
          s = t.multiplyBy(i),
          r = s.add([i, i]),
          n = e.wrapLatLng(e.unproject(s, t.z)),
          o = e.wrapLatLng(e.unproject(r, t.z));
        return p.latLngBounds(n, o)
      },
      _cellCoordsToKey: function (t) {
        return t.x + ":" + t.y
      },
      _keyToCellCoords: function (t) {
        var e = t.split(":"),
          i = parseInt(e[0], 10),
          s = parseInt(e[1], 10);
        return p.point(i, s)
      },
      _removeOtherCells: function (t) {
        for (var e in this._cells)
          t.contains(this._keyToCellCoords(e)) || this._removeCell(e)
      },
      _removeCell: function (t) {
        var e = this._activeCells[t];
        e && (delete this._activeCells[t],
          this.cellLeave && this.cellLeave(e.bounds, e.coords),
          this.fire("cellleave", {
            bounds: e.bounds,
            coords: e.coords
          }))
      },
      _removeCells: function () {
        for (var t in this._cells) {
          var e = this._cells[t].bounds,
            i = this._cells[t].coords;
          this.cellLeave && this.cellLeave(e, i),
            this.fire("cellleave", {
              bounds: e,
              coords: i
            })
        }
      },
      _addCell: function (t) {
        this._wrapCoords(t);
        var e = this._cellCoordsToKey(t),
          i = this._cells[e];
        i && !this._activeCells[e] && (this.cellEnter && this.cellEnter(i.bounds, t),
            this.fire("cellenter", {
              bounds: i.bounds,
              coords: t
            }),
            this._activeCells[e] = i),
          i || (i = {
              coords: t,
              bounds: this._cellCoordsToBounds(t)
            },
            this._cells[e] = i,
            this._activeCells[e] = i,
            this.createCell && this.createCell(i.bounds, t),
            this.fire("cellcreate", {
              bounds: i.bounds,
              coords: t
            }))
      },
      _wrapCoords: function (t) {
        t.x = this._wrapLng ? p.Util.wrapNum(t.x, this._wrapLng) : t.x,
          t.y = this._wrapLat ? p.Util.wrapNum(t.y, this._wrapLat) : t.y
      },
      _getCellNumBounds: function () {
        var t = this._map.getPixelWorldBounds(),
          e = this._getCellSize();
        return t ? p.bounds(t.min.divideBy(e).floor(), t.max.divideBy(e).ceil().subtract([1, 1])) : null
      }
    });

  function ct(t) {
    this.values = [].concat(t || [])
  }
  ct.prototype.query = function (t) {
      var e = this.getIndex(t);
      return this.values[e]
    },
    ct.prototype.getIndex = function (t) {
      this.dirty && this.sort();
      for (var e, i, s = 0, r = this.values.length - 1; s <= r;)
        if (e = (s + r) / 2 | 0,
          +(i = this.values[Math.round(e)]).value < +t)
          s = e + 1;
        else {
          if (!(+i.value > +t))
            return e;
          r = e - 1
        }
      return Math.abs(~r)
    },
    ct.prototype.between = function (t, e) {
      var i = this.getIndex(t),
        s = this.getIndex(e);
      if (0 === i && 0 === s)
        return [];
      for (; this.values[i - 1] && this.values[i - 1].value === t;)
        i--;
      for (; this.values[s + 1] && this.values[s + 1].value === e;)
        s++;
      return this.values[s] && this.values[s].value === e && this.values[s + 1] && s++,
        this.values.slice(i, s)
    },
    ct.prototype.insert = function (t) {
      return this.values.splice(this.getIndex(t.value), 0, t),
        this
    },
    ct.prototype.bulkAdd = function (t, e) {
      return this.values = this.values.concat([].concat(t || [])),
        e ? this.sort() : this.dirty = !0,
        this
    },
    ct.prototype.sort = function () {
      return this.values.sort(function (t, e) {
          return +e.value - +t.value
        }).reverse(),
        this.dirty = !1,
        this
    };
  var pt = ht.extend({
      options: {
        attribution: null,
        where: "1=1",
        fields: ["*"],
        from: !1,
        to: !1,
        timeField: !1,
        timeFilterMode: "server",
        simplifyFactor: 0,
        precision: 6
      },
      initialize: function (t) {
        if (ht.prototype.initialize.call(this, t),
          t = C(t),
          t = p.Util.setOptions(this, t),
          this.service = it(t),
          this.service.addEventParent(this),
          "*" !== this.options.fields[0]) {
          for (var e = !1, i = 0; i < this.options.fields.length; i++)
            this.options.fields[i].match(/^(OBJECTID|FID|OID|ID)$/i) && (e = !0);
          !1 === e && U("no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.")
        }
        this.options.timeField.start && this.options.timeField.end ? (this._startTimeIndex = new ct,
            this._endTimeIndex = new ct) : this.options.timeField && (this._timeIndex = new ct),
          this._cache = {},
          this._currentSnapshot = [],
          this._activeRequests = 0
      },
      onAdd: function (r) {
        return q(r),
          this.service.metadata(function (t, e) {
            if (!t) {
              var i = e.supportedQueryFormats,
                s = !1;
              !1 === this.service.options.isModern && (s = !0),
                !s && i && -1 !== i.indexOf("geoJSON") && (this.service.options.isModern = !0),
                !this.options.attribution && r.attributionControl && e.copyrightText && (this.options.attribution = e.copyrightText,
                  r.attributionControl.addAttribution(this.getAttribution()))
            }
          }, this),
          r.on("zoomend", this._handleZoomChange, this),
          ht.prototype.onAdd.call(this, r)
      },
      onRemove: function (t) {
        return t.off("zoomend", this._handleZoomChange, this),
          ht.prototype.onRemove.call(this, t)
      },
      getAttribution: function () {
        return this.options.attribution
      },
      createCell: function (t, e) {
        this._visibleZoom() && this._requestFeatures(t, e)
      },
      _requestFeatures: function (s, r, n) {
        return this._activeRequests++,
          1 === this._activeRequests && this.fire("loading", {
            bounds: s
          }, !0),
          this._buildQuery(s).run(function (t, e, i) {
            i && i.exceededTransferLimit && this.fire("drawlimitexceeded"),
              !t && e && e.features.length && p.Util.requestAnimFrame(p.Util.bind(function () {
                this._addFeatures(e.features, r),
                  this._postProcessFeatures(s)
              }, this)),
              t || !e || e.features.length || this._postProcessFeatures(s),
              t && this._postProcessFeatures(s),
              n && n.call(this, t, e)
          }, this)
      },
      _postProcessFeatures: function (t) {
        this._activeRequests--,
          this._activeRequests <= 0 && this.fire("load", {
            bounds: t
          })
      },
      _cacheKey: function (t) {
        return t.z + ":" + t.x + ":" + t.y
      },
      _addFeatures: function (t, e) {
        var i = this._cacheKey(e);
        this._cache[i] = this._cache[i] || [];
        for (var s = t.length - 1; 0 <= s; s--) {
          var r = t[s].id; -
          1 === this._currentSnapshot.indexOf(r) && this._currentSnapshot.push(r),
            -1 === this._cache[i].indexOf(r) && this._cache[i].push(r)
        }
        this.options.timeField && this._buildTimeIndexes(t),
          this.createLayers(t)
      },
      _buildQuery: function (t) {
        var e = this.service.query().intersects(t).where(this.options.where).fields(this.options.fields).precision(this.options.precision);
        return this.options.requestParams && p.Util.extend(e.params, this.options.requestParams),
          this.options.simplifyFactor && e.simplify(this._map, this.options.simplifyFactor),
          "server" === this.options.timeFilterMode && this.options.from && this.options.to && e.between(this.options.from, this.options.to),
          e
      },
      setWhere: function (t, s, r) {
        this.options.where = t && t.length ? t : "1=1";
        for (var n = [], o = [], a = 0, l = null, e = p.Util.bind(function (t, e) {
            if (t && (l = t),
              e)
              for (var i = e.features.length - 1; 0 <= i; i--)
                o.push(e.features[i].id);
            --a <= 0 && this._visibleZoom() && (this._currentSnapshot = o,
              p.Util.requestAnimFrame(p.Util.bind(function () {
                this.removeLayers(n),
                  this.addLayers(o),
                  s && s.call(r, l)
              }, this)))
          }, this), i = this._currentSnapshot.length - 1; 0 <= i; i--)
          n.push(this._currentSnapshot[i]);
        for (var u in this._activeCells) {
          a++;
          var h = this._keyToCellCoords(u),
            c = this._cellCoordsToBounds(h);
          this._requestFeatures(c, u, e)
        }
        return this
      },
      getWhere: function () {
        return this.options.where
      },
      getTimeRange: function () {
        return [this.options.from, this.options.to]
      },
      setTimeRange: function (e, i, s, r) {
        var n = this.options.from,
          o = this.options.to,
          a = 0,
          l = null,
          t = p.Util.bind(function (t) {
            t && (l = t),
              this._filterExistingFeatures(n, o, e, i),
              a--,
              s && a <= 0 && s.call(r, l)
          }, this);
        if (this.options.from = e,
          this.options.to = i,
          this._filterExistingFeatures(n, o, e, i),
          "server" === this.options.timeFilterMode)
          for (var u in this._activeCells) {
            a++;
            var h = this._keyToCellCoords(u),
              c = this._cellCoordsToBounds(h);
            this._requestFeatures(c, u, t)
          }
        return this
      },
      refresh: function () {
        for (var t in this._activeCells) {
          var e = this._keyToCellCoords(t),
            i = this._cellCoordsToBounds(e);
          this._requestFeatures(i, t)
        }
        this.redraw && this.once("load", function () {
          this.eachFeature(function (t) {
            this._redraw(t.feature.id)
          }, this)
        }, this)
      },
      _filterExistingFeatures: function (t, e, i, s) {
        var r = t && e ? this._getFeaturesInTimeRange(t, e) : this._currentSnapshot,
          n = this._getFeaturesInTimeRange(i, s);
        if (n.indexOf)
          for (var o = 0; o < n.length; o++) {
            var a = r.indexOf(n[o]);
            0 <= a && r.splice(a, 1)
          }
        p.Util.requestAnimFrame(p.Util.bind(function () {
          this.removeLayers(r),
            this.addLayers(n)
        }, this))
      },
      _getFeaturesInTimeRange: function (t, e) {
        var i, s = [];
        if (this.options.timeField.start && this.options.timeField.end) {
          var r = this._startTimeIndex.between(t, e),
            n = this._endTimeIndex.between(t, e);
          i = r.concat(n)
        } else
          i = this._timeIndex.between(t, e);
        for (var o = i.length - 1; 0 <= o; o--)
          s.push(i[o].id);
        return s
      },
      _buildTimeIndexes: function (t) {
        var e, i;
        if (this.options.timeField.start && this.options.timeField.end) {
          var s = [],
            r = [];
          for (e = t.length - 1; 0 <= e; e--)
            i = t[e],
            s.push({
              id: i.id,
              value: new Date(i.properties[this.options.timeField.start])
            }),
            r.push({
              id: i.id,
              value: new Date(i.properties[this.options.timeField.end])
            });
          this._startTimeIndex.bulkAdd(s),
            this._endTimeIndex.bulkAdd(r)
        } else {
          var n = [];
          for (e = t.length - 1; 0 <= e; e--)
            i = t[e],
            n.push({
              id: i.id,
              value: new Date(i.properties[this.options.timeField])
            });
          this._timeIndex.bulkAdd(n)
        }
      },
      _featureWithinTimeRange: function (t) {
        if (!this.options.from || !this.options.to)
          return !0;
        var e = +this.options.from.valueOf(),
          i = +this.options.to.valueOf();
        if ("string" == typeof this.options.timeField) {
          var s = +t.properties[this.options.timeField];
          return e <= s && s <= i
        }
        if (this.options.timeField.start && this.options.timeField.end) {
          var r = +t.properties[this.options.timeField.start],
            n = +t.properties[this.options.timeField.end];
          return e <= r && r <= i || e <= n && n <= i
        }
      },
      _visibleZoom: function () {
        if (!this._map)
          return !1;
        var t = this._map.getZoom();
        return !(t > this.options.maxZoom || t < this.options.minZoom)
      },
      _handleZoomChange: function () {
        if (this._visibleZoom())
          for (var t in this._activeCells) {
            var e = this._activeCells[t].coords,
              i = this._cacheKey(e);
            this._cache[i] && this.addLayers(this._cache[i])
          }
        else
          this.removeLayers(this._currentSnapshot),
          this._currentSnapshot = []
      },
      authenticate: function (t) {
        return this.service.authenticate(t),
          this
      },
      metadata: function (t, e) {
        return this.service.metadata(t, e),
          this
      },
      query: function () {
        return this.service.query()
      },
      _getMetadata: function (i) {
        this._metadata ? i(void 0, this._metadata) : this.metadata(p.Util.bind(function (t, e) {
          this._metadata = e,
            i(t, this._metadata)
        }, this))
      },
      addFeature: function (s, r, n) {
        this._getMetadata(p.Util.bind(function (t, i) {
          t ? r && r.call(this, t, null) : this.service.addFeature(s, p.Util.bind(function (t, e) {
            t || (s.properties[i.objectIdField] = e.objectId,
                s.id = e.objectId,
                this.createLayers([s])),
              r && r.call(n, t, e)
          }, this))
        }, this))
      },
      updateFeature: function (i, s, r) {
        this.service.updateFeature(i, function (t, e) {
          t || (this.removeLayers([i.id], !0),
              this.createLayers([i])),
            s && s.call(r, t, e)
        }, this)
      },
      deleteFeature: function (t, i, s) {
        this.service.deleteFeature(t, function (t, e) {
          !t && e.objectId && this.removeLayers([e.objectId], !0),
            i && i.call(s, t, e)
        }, this)
      },
      deleteFeatures: function (t, s, r) {
        return this.service.deleteFeatures(t, function (t, e) {
          if (!t && 0 < e.length)
            for (var i = 0; i < e.length; i++)
              this.removeLayers([e[i].objectId], !0);
          s && s.call(r, t, e)
        }, this)
      }
    }),
    dt = pt.extend({
      options: {
        cacheLayers: !0
      },
      initialize: function (t) {
        pt.prototype.initialize.call(this, t),
          this._originalStyle = this.options.style,
          this._layers = {}
      },
      onRemove: function (t) {
        for (var e in this._layers)
          t.removeLayer(this._layers[e]),
          this.fire("removefeature", {
            feature: this._layers[e].feature,
            permanent: !1
          }, !0);
        return pt.prototype.onRemove.call(this, t)
      },
      createNewLayer: function (t) {
        var e = p.GeoJSON.geometryToLayer(t, this.options);
        return e.defaultOptions = e.options,
          e
      },
      _updateLayer: function (t, e) {
        var i = [],
          s = this.options.coordsToLatLng || p.GeoJSON.coordsToLatLng;
        switch (e.properties && (t.feature.properties = e.properties),
          e.geometry.type) {
          case "Point":
            i = p.GeoJSON.coordsToLatLng(e.geometry.coordinates),
              t.setLatLng(i);
            break;
          case "LineString":
            i = p.GeoJSON.coordsToLatLngs(e.geometry.coordinates, 0, s),
              t.setLatLngs(i);
            break;
          case "MultiLineString":
          case "Polygon":
            i = p.GeoJSON.coordsToLatLngs(e.geometry.coordinates, 1, s),
              t.setLatLngs(i);
            break;
          case "MultiPolygon":
            i = p.GeoJSON.coordsToLatLngs(e.geometry.coordinates, 2, s),
              t.setLatLngs(i)
        }
      },
      createLayers: function (t) {
        for (var e = t.length - 1; 0 <= e; e--) {
          var i, s = t[e],
            r = this._layers[s.id];
          this._visibleZoom() && r && !this._map.hasLayer(r) && (this._map.addLayer(r),
              this.fire("addfeature", {
                feature: r.feature
              }, !0)),
            r && 0 < this.options.simplifyFactor && (r.setLatLngs || r.setLatLng) && this._updateLayer(r, s),
            r || ((i = this.createNewLayer(s)).feature = s,
              i.addEventParent(this),
              this.options.onEachFeature && this.options.onEachFeature(i.feature, i),
              this._layers[i.feature.id] = i,
              this.setFeatureStyle(i.feature.id, this.options.style),
              this.fire("createfeature", {
                feature: i.feature
              }, !0),
              this._visibleZoom() && (!this.options.timeField || this.options.timeField && this._featureWithinTimeRange(s)) && this._map.addLayer(i))
        }
      },
      addLayers: function (t) {
        for (var e = t.length - 1; 0 <= e; e--) {
          var i = this._layers[t[e]];
          i && this._map.addLayer(i)
        }
      },
      removeLayers: function (t, e) {
        for (var i = t.length - 1; 0 <= i; i--) {
          var s = t[i],
            r = this._layers[s];
          r && (this.fire("removefeature", {
                feature: r.feature,
                permanent: e
              }, !0),
              this._map.removeLayer(r)),
            r && e && delete this._layers[s]
        }
      },
      cellEnter: function (t, s) {
        this._visibleZoom() && !this._zooming && this._map && p.Util.requestAnimFrame(p.Util.bind(function () {
          var t = this._cacheKey(s),
            e = this._cellCoordsToKey(s),
            i = this._cache[t];
          this._activeCells[e] && i && this.addLayers(i)
        }, this))
      },
      cellLeave: function (t, a) {
        this._zooming || p.Util.requestAnimFrame(p.Util.bind(function () {
          if (this._map) {
            var t = this._cacheKey(a),
              e = this._cellCoordsToKey(a),
              i = this._cache[t],
              s = this._map.getBounds();
            if (!this._activeCells[e] && i) {
              for (var r = !0, n = 0; n < i.length; n++) {
                var o = this._layers[i[n]];
                o && o.getBounds && s.intersects(o.getBounds()) && (r = !1)
              }
              r && this.removeLayers(i, !this.options.cacheLayers),
                !this.options.cacheLayers && r && (delete this._cache[t],
                  delete this._cells[e],
                  delete this._activeCells[e])
            }
          }
        }, this))
      },
      resetStyle: function () {
        return this.options.style = this._originalStyle,
          this.eachFeature(function (t) {
            this.resetFeatureStyle(t.feature.id)
          }, this),
          this
      },
      setStyle: function (e) {
        return this.options.style = e,
          this.eachFeature(function (t) {
            this.setFeatureStyle(t.feature.id, e)
          }, this),
          this
      },
      resetFeatureStyle: function (t) {
        var e = this._layers[t],
          i = this._originalStyle || p.Path.prototype.options;
        return e && (p.Util.extend(e.options, e.defaultOptions),
            this.setFeatureStyle(t, i)),
          this
      },
      setFeatureStyle: function (t, e) {
        var i = this._layers[t];
        return "function" == typeof e && (e = e(i.feature)),
          i.setStyle && i.setStyle(e),
          this
      },
      eachActiveFeature: function (t, e) {
        if (this._map) {
          var i = this._map.getBounds();
          for (var s in this._layers)
            -
            1 !== this._currentSnapshot.indexOf(this._layers[s].feature.id) && ("function" == typeof this._layers[s].getLatLng && i.contains(this._layers[s].getLatLng()) ? t.call(e, this._layers[s]) : "function" == typeof this._layers[s].getBounds && i.intersects(this._layers[s].getBounds()) && t.call(e, this._layers[s]))
        }
        return this
      },
      eachFeature: function (t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this
      },
      getFeature: function (t) {
        return this._layers[t]
      },
      bringToBack: function () {
        this.eachFeature(function (t) {
          t.bringToBack && t.bringToBack()
        })
      },
      bringToFront: function () {
        this.eachFeature(function (t) {
          t.bringToFront && t.bringToFront()
        })
      },
      redraw: function (t) {
        return t && this._redraw(t),
          this
      },
      _redraw: function (t) {
        var e = this._layers[t],
          i = e.feature;
        if (e && e.setIcon && this.options.pointToLayer && this.options.pointToLayer) {
          var s = this.options.pointToLayer(i, p.latLng(i.geometry.coordinates[1], i.geometry.coordinates[0])).options.icon;
          e.setIcon(s)
        }
        if (e && e.setStyle && this.options.pointToLayer) {
          var r = this.options.pointToLayer(i, p.latLng(i.geometry.coordinates[1], i.geometry.coordinates[0])).options;
          this.setFeatureStyle(i.id, r)
        }
        e && e.setStyle && this.options.style && this.resetStyle(i.id)
      }
    });
  t.VERSION = "2.1.4",
    t.Support = a,
    t.options = s,
    t.Util = E,
    t.get = d,
    t.post = r,
    t.request = h,
    t.Task = B,
    t.task = function (t) {
      return t = C(t),
        new B(t)
    },
    t.Query = z,
    t.query = N,
    t.Find = j,
    t.find = Z,
    t.Identify = J,
    t.identify = function (t) {
      return new J(t)
    },
    t.IdentifyFeatures = W,
    t.identifyFeatures = Q,
    t.IdentifyImage = V,
    t.identifyImage = H,
    t.Service = K,
    t.service = function (t) {
      return t = C(t),
        new K(t)
    },
    t.MapService = X,
    t.mapService = $,
    t.ImageService = Y,
    t.imageService = tt,
    t.FeatureLayerService = et,
    t.featureLayerService = it,
    t.BasemapLayer = rt,
    t.basemapLayer = function (t, e) {
      return new rt(t, e)
    },
    t.TiledMapLayer = nt,
    t.tiledMapLayer = function (t, e) {
      return new nt(t, e)
    },
    t.RasterLayer = at,
    t.ImageMapLayer = lt,
    t.imageMapLayer = function (t, e) {
      return new lt(t, e)
    },
    t.DynamicMapLayer = ut,
    t.dynamicMapLayer = function (t, e) {
      return new ut(t, e)
    },
    t.FeatureManager = pt,
    t.FeatureLayer = dt,
    t.featureLayer = function (t) {
      return new dt(t)
    },
    Object.defineProperty(t, "__esModule", {
      value: !0
    })
});
