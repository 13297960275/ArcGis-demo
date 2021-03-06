!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.turf = {})
}(this, function (t) {
  "use strict";

  function B(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.bbox,
      i = n.id;
    if (void 0 === t)
      throw new Error("geometry is required");
    if (e && e.constructor !== Object)
      throw new Error("properties must be an Object");
    r && l(r),
      i && y(i);
    var o = {
      type: "Feature"
    };
    return i && (o.id = i),
      r && (o.bbox = r),
      o.properties = e || {},
      o.geometry = t,
      o
  }

  function e(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r, i = n.bbox;
    if (!t)
      throw new Error("type is required");
    if (!e)
      throw new Error("coordinates is required");
    if (!Array.isArray(e))
      throw new Error("coordinates must be an Array");
    switch (i && l(i),
      t) {
      case "Point":
        r = k(e).geometry;
        break;
      case "LineString":
        r = j(e).geometry;
        break;
      case "Polygon":
        r = z(e).geometry;
        break;
      case "MultiPoint":
        r = o(e).geometry;
        break;
      case "MultiLineString":
        r = v(e).geometry;
        break;
      case "MultiPolygon":
        r = x(e).geometry;
        break;
      default:
        throw new Error(t + " is invalid")
    }
    return i && (r.bbox = i),
      r
  }

  function k(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    if (!Array.isArray(t))
      throw new Error("coordinates must be an Array");
    if (t.length < 2)
      throw new Error("coordinates must be at least 2 numbers long");
    if (!U(t[0]) || !U(t[1]))
      throw new Error("coordinates must contain numbers");
    return B({
      type: "Point",
      coordinates: t
    }, e, n)
  }

  function n(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    if (!Array.isArray(t))
      throw new Error("coordinates must be an Array");
    return X(t.map(function (t) {
      return k(t, e)
    }), n)
  }

  function z(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      if (i.length < 4)
        throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
      for (var o = 0; o < i[i.length - 1].length; o++) {
        if (0 === r && 0 === o && !U(i[0][0]) || !U(i[0][1]))
          throw new Error("coordinates must contain numbers");
        if (i[i.length - 1][o] !== i[0][o])
          throw new Error("First and last Position are not equivalent.")
      }
    }
    return B({
      type: "Polygon",
      coordinates: t
    }, e, n)
  }

  function r(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    if (!Array.isArray(t))
      throw new Error("coordinates must be an Array");
    return X(t.map(function (t) {
      return z(t, e)
    }), n)
  }

  function j(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    if (t.length < 2)
      throw new Error("coordinates must be an array of two or more positions");
    if (!U(t[0][1]) || !U(t[0][1]))
      throw new Error("coordinates must contain numbers");
    return B({
      type: "LineString",
      coordinates: t
    }, e, n)
  }

  function i(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    if (!Array.isArray(t))
      throw new Error("coordinates must be an Array");
    return X(t.map(function (t) {
      return j(t, e)
    }), n)
  }

  function X(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.bbox,
      r = e.id;
    if (!t)
      throw new Error("No features passed");
    if (!Array.isArray(t))
      throw new Error("features must be an Array");
    n && l(n),
      r && y(r);
    var i = {
      type: "FeatureCollection"
    };
    return r && (i.id = r),
      n && (i.bbox = n),
      i.features = t,
      i
  }

  function v(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    return B({
      type: "MultiLineString",
      coordinates: t
    }, e, n)
  }

  function o(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    return B({
      type: "MultiPoint",
      coordinates: t
    }, e, n)
  }

  function x(t, e, n) {
    if (!t)
      throw new Error("coordinates is required");
    return B({
      type: "MultiPolygon",
      coordinates: t
    }, e, n)
  }

  function s(t, e, n) {
    if (!t)
      throw new Error("geometries is required");
    if (!Array.isArray(t))
      throw new Error("geometries must be an Array");
    return B({
      type: "GeometryCollection",
      geometries: t
    }, e, n)
  }

  function a(t, e) {
    if (null == t || isNaN(t))
      throw new Error("num is required");
    if (e && !(0 <= e))
      throw new Error("precision must be a positive number");
    var n = Math.pow(10, e || 0);
    return Math.round(t * n) / n
  }

  function g(t, e) {
    if (null == t)
      throw new Error("radians is required");
    if (e && "string" != typeof e)
      throw new Error("units must be a string");
    var n = po[e || "kilometers"];
    if (!n)
      throw new Error(e + " units is invalid");
    return t * n
  }

  function d(t, e) {
    if (null == t)
      throw new Error("distance is required");
    if (e && "string" != typeof e)
      throw new Error("units must be a string");
    var n = po[e || "kilometers"];
    if (!n)
      throw new Error(e + " units is invalid");
    return t / n
  }

  function u(t, e) {
    return f(d(t, e))
  }

  function p(t) {
    if (null == t)
      throw new Error("bearing is required");
    var e = t % 360;
    return e < 0 && (e += 360),
      e
  }

  function f(t) {
    if (null == t)
      throw new Error("radians is required");
    return t % (2 * Math.PI) * 180 / Math.PI
  }

  function m(t) {
    if (null == t)
      throw new Error("degrees is required");
    return t % 360 * Math.PI / 180
  }

  function c(t, e, n) {
    if (null == t)
      throw new Error("length is required");
    if (!(0 <= t))
      throw new Error("length must be a positive number");
    return g(d(t, e), n || "kilometers")
  }

  function h(t, e, n) {
    if (null == t)
      throw new Error("area is required");
    if (!(0 <= t))
      throw new Error("area must be a positive number");
    var r = go[e || "meters"];
    if (!r)
      throw new Error("invalid original units");
    var i = go[n || "kilometers"];
    if (!i)
      throw new Error("invalid final units");
    return t / r * i
  }

  function U(t) {
    return !isNaN(t) && null !== t && !Array.isArray(t)
  }

  function Y(t) {
    return !!t && t.constructor === Object
  }

  function l(t) {
    if (!t)
      throw new Error("bbox is required");
    if (!Array.isArray(t))
      throw new Error("bbox must be an Array");
    if (4 !== t.length && 6 !== t.length)
      throw new Error("bbox must be an Array of 4 or 6 numbers");
    t.forEach(function (t) {
      if (!U(t))
        throw new Error("bbox must only contain numbers")
    })
  }

  function y(t) {
    if (!t)
      throw new Error("id is required");
    if (-1 === ["string", "number"].indexOf(typeof t))
      throw new Error("id must be a number or a string")
  }

  function w(t, e, n) {
    if (null !== t)
      for (var r, i, o, s, a, u, c, h, l = 0, p = 0, f = t.type, g = "FeatureCollection" === f, d = "Feature" === f, y = g ? t.features.length : 1, _ = 0; _ < y; _++) {
        a = (h = !!(c = g ? t.features[_].geometry : d ? t.geometry : t) && "GeometryCollection" === c.type) ? c.geometries.length : 1;
        for (var m = 0; m < a; m++) {
          var v = 0,
            x = 0;
          if (null !== (s = h ? c.geometries[m] : c)) {
            u = s.coordinates;
            var E = s.type;
            switch (l = !n || "Polygon" !== E && "MultiPolygon" !== E ? 0 : 1,
              E) {
              case null:
                break;
              case "Point":
                e(u, p, _, v, x),
                  p++,
                  v++;
                break;
              case "LineString":
              case "MultiPoint":
                for (r = 0; r < u.length; r++)
                  e(u[r], p, _, v, x),
                  p++,
                  "MultiPoint" === E && v++;
                "LineString" === E && v++;
                break;
              case "Polygon":
              case "MultiLineString":
                for (r = 0; r < u.length; r++) {
                  for (i = 0; i < u[r].length - l; i++)
                    e(u[r][i], p, _, v, x),
                    p++;
                  "MultiLineString" === E && v++,
                    "Polygon" === E && x++
                }
                "Polygon" === E && v++;
                break;
              case "MultiPolygon":
                for (r = 0; r < u.length; r++) {
                  for ("MultiPolygon" === E && (x = 0),
                    i = 0; i < u[r].length; i++) {
                    for (o = 0; o < u[r][i].length - l; o++)
                      e(u[r][i][o], p, _, v, x),
                      p++;
                    x++
                  }
                  v++
                }
                break;
              case "GeometryCollection":
                for (r = 0; r < s.geometries.length; r++)
                  w(s.geometries[r], e, n);
                break;
              default:
                throw new Error("Unknown Geometry Type")
            }
          }
        }
      }
  }

  function _(t, o, s, e) {
    var a = s;
    return w(t, function (t, e, n, r, i) {
        a = 0 === e && void 0 === s ? t : o(a, t, e, n, r, i)
      }, e),
      a
  }

  function E(t, e) {
    var n;
    switch (t.type) {
      case "FeatureCollection":
        for (n = 0; n < t.features.length; n++)
          e(t.features[n].properties, n);
        break;
      case "Feature":
        e(t.properties, 0)
    }
  }

  function b(t, n, r) {
    var i = r;
    return E(t, function (t, e) {
        i = 0 === e && void 0 === r ? t : n(i, t, e)
      }),
      i
  }

  function I(t, e) {
    if ("Feature" === t.type)
      e(t, 0);
    else if ("FeatureCollection" === t.type)
      for (var n = 0; n < t.features.length; n++)
        e(t.features[n], n)
  }

  function N(t, n, r) {
    var i = r;
    return I(t, function (t, e) {
        i = 0 === e && void 0 === r ? t : n(i, t, e)
      }),
      i
  }

  function C(t) {
    var e = [];
    return w(t, function (t) {
        e.push(t)
      }),
      e
  }

  function S(t, e) {
    var n, r, i, o, s, a, u, c, h, l, p = 0,
      f = "FeatureCollection" === t.type,
      g = "Feature" === t.type,
      d = f ? t.features.length : 1;
    for (n = 0; n < d; n++) {
      for (a = f ? t.features[n].geometry : g ? t.geometry : t,
        c = f ? t.features[n].properties : g ? t.properties : {},
        h = f ? t.features[n].bbox : g ? t.bbox : void 0,
        l = f ? t.features[n].id : g ? t.id : void 0,
        s = (u = !!a && "GeometryCollection" === a.type) ? a.geometries.length : 1,
        i = 0; i < s; i++)
        if (null !== (o = u ? a.geometries[i] : a))
          switch (o.type) {
            case "Point":
            case "LineString":
            case "MultiPoint":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
              e(o, p, c, h, l);
              break;
            case "GeometryCollection":
              for (r = 0; r < o.geometries.length; r++)
                e(o.geometries[r], p, c, h, l);
              break;
            default:
              throw new Error("Unknown Geometry Type")
          }
      else
        e(null, p, c, h, l);
      p++
    }
  }

  function M(t, o, s) {
    var a = s;
    return S(t, function (t, e, n, r, i) {
        a = 0 === e && void 0 === s ? t : o(a, t, e, n, r, i)
      }),
      a
  }

  function L(t, a) {
    S(t, function (t, n, r, e, i) {
      var o, s = null === t ? null : t.type;
      switch (s) {
        case null:
        case "Point":
        case "LineString":
        case "Polygon":
          return void a(B(t, r, {
            bbox: e,
            id: i
          }), n, 0)
      }
      switch (s) {
        case "MultiPoint":
          o = "Point";
          break;
        case "MultiLineString":
          o = "LineString";
          break;
        case "MultiPolygon":
          o = "Polygon"
      }
      t.coordinates.forEach(function (t, e) {
        a(B({
          type: o,
          coordinates: t
        }, r), n, e)
      })
    })
  }

  function P(t, r, i) {
    var o = i;
    return L(t, function (t, e, n) {
        o = 0 === e && 0 === n && void 0 === i ? t : r(o, t, e, n)
      }),
      o
  }

  function O(t, l) {
    L(t, function (a, u, c) {
      var h = 0;
      if (a.geometry) {
        var t = a.geometry.type;
        "Point" !== t && "MultiPoint" !== t && _(a, function (t, e, n, r, i, o) {
          var s = j([t, e], a.properties);
          return l(s, u, c, o, h),
            h++,
            e
        })
      }
    })
  }

  function R(t, o, s) {
    var a = s,
      u = !1;
    return O(t, function (t, e, n, r, i) {
        a = !1 === u && void 0 === s ? t : o(a, t, e, n, r, i),
          u = !0
      }),
      a
  }

  function T(t, s) {
    if (!t)
      throw new Error("geojson is required");
    L(t, function (t, e, n) {
      if (null !== t.geometry) {
        var r = t.geometry.type,
          i = t.geometry.coordinates;
        switch (r) {
          case "LineString":
            s(t, e, n, 0, 0);
            break;
          case "Polygon":
            for (var o = 0; o < i.length; o++)
              s(j(i[o], t.properties), e, n, o)
        }
      }
    })
  }

  function A(t, i, o) {
    var s = o;
    return T(t, function (t, e, n, r) {
        s = 0 === e && void 0 === o ? t : i(s, t, e, n, r)
      }),
      s
  }

  function V(t) {
    var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return w(t, function (t) {
        e[0] > t[0] && (e[0] = t[0]),
          e[1] > t[1] && (e[1] = t[1]),
          e[2] < t[0] && (e[2] = t[0]),
          e[3] < t[1] && (e[3] = t[1])
      }),
      e
  }

  function H(t) {
    if (!t)
      throw new Error("obj is required");
    var e = D(t);
    if (1 < e.length && U(e[0]) && U(e[1]))
      return e;
    throw new Error("Coordinate is not a valid Point")
  }

  function D(t) {
    if (!t)
      throw new Error("obj is required");
    var e;
    if (t.length ? e = t : t.coordinates ? e = t.coordinates : t.geometry && t.geometry.coordinates && (e = t.geometry.coordinates),
      e)
      return F(e),
        e;
    throw new Error("No valid coordinates")
  }

  function F(t) {
    if (1 < t.length && U(t[0]) && U(t[1]))
      return !0;
    if (Array.isArray(t[0]) && t[0].length)
      return F(t[0]);
    throw new Error("coordinates must only contain numbers")
  }

  function q(t, e, n) {
    if (!e || !n)
      throw new Error("type and name required");
    if (!t || t.type !== e)
      throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + t.type)
  }

  function G(t, e, n) {
    if (!t)
      throw new Error("No feature passed");
    if (!n)
      throw new Error(".featureOf() requires a name");
    if (!t || "Feature" !== t.type || !t.geometry)
      throw new Error("Invalid input to " + n + ", Feature with geometry required");
    if (!t.geometry || t.geometry.type !== e)
      throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + t.geometry.type)
  }

  function W(t, e, n) {
    if (!t)
      throw new Error("No featureCollection passed");
    if (!n)
      throw new Error(".collectionOf() requires a name");
    if (!t || "FeatureCollection" !== t.type)
      throw new Error("Invalid input to " + n + ", FeatureCollection required");
    for (var r = 0; r < t.features.length; r++) {
      var i = t.features[r];
      if (!i || "Feature" !== i.type || !i.geometry)
        throw new Error("Invalid input to " + n + ", Feature with geometry required");
      if (!i.geometry || i.geometry.type !== e)
        throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + i.geometry.type)
    }
  }

  function J(t) {
    if (!t)
      throw new Error("geojson is required");
    if (void 0 !== t.geometry)
      return t.geometry;
    if (t.coordinates || t.geometries)
      return t;
    throw new Error("geojson must be a valid Feature or Geometry Object")
  }

  function Z() {
    throw new Error("invariant.getGeomType has been deprecated in v5.0 in favor of invariant.getType")
  }

  function K(t, e) {
    if (!t)
      throw new Error((e || "geojson") + " is required");
    if (t.geometry && t.geometry.type)
      return t.geometry.type;
    if (t.type)
      return t.type;
    throw new Error((e || "geojson") + " is invalid")
  }

  function Q(t, e, n) {
    n = n || {};
    for (var r = Object.keys(vo), i = 0; i < r.length; i++) {
      var o = r[i],
        s = n[o];
      s = null != s ? s : vo[o],
        xo[o] = s
    }
    xo.verbose && console.log("MarchingSquaresJS-isoContours: computing isocontour for " + e);
    var h, l, p, a = (h = function (t, e) {
        for (var n = t.length - 1, r = t[0].length - 1, i = {
            rows: n,
            cols: r,
            cells: []
          }, o = 0; o < n; ++o) {
          i.cells[o] = [];
          for (var s = 0; s < r; ++s) {
            var a = 0,
              u = t[o + 1][s],
              c = t[o + 1][s + 1],
              h = t[o][s + 1],
              l = t[o][s];
            if (!(isNaN(u) || isNaN(c) || isNaN(h) || isNaN(l))) {
              a |= e <= u ? 8 : 0,
                a |= e <= c ? 4 : 0,
                a |= e <= h ? 2 : 0;
              var p, f, g, d, y = !1;
              if (5 == (a |= e <= l ? 1 : 0) || 10 === a) {
                var _ = (u + c + h + l) / 4;
                5 === a && _ < e ? (a = 10,
                  y = !0) : 10 === a && _ < e && (a = 5,
                  y = !0)
              }
              if (0 !== a && 15 !== a)
                p = f = g = d = .5,
                1 === a ? (g = 1 - $(e, u, l),
                  f = 1 - $(e, h, l)) : 2 === a ? (f = $(e, l, h),
                  d = 1 - $(e, c, h)) : 3 === a ? (g = 1 - $(e, u, l),
                  d = 1 - $(e, c, h)) : 4 === a ? (p = $(e, u, c),
                  d = $(e, h, c)) : 5 === a ? (p = $(e, u, c),
                  d = $(e, h, c),
                  f = 1 - $(e, h, l),
                  g = 1 - $(e, u, l)) : 6 === a ? (f = $(e, l, h),
                  p = $(e, u, c)) : 7 === a ? (g = 1 - $(e, u, l),
                  p = $(e, u, c)) : 8 === a ? (g = $(e, l, u),
                  p = 1 - $(e, c, u)) : 9 === a ? (f = 1 - $(e, h, l),
                  p = 1 - $(e, c, u)) : 10 === a ? (p = 1 - $(e, c, u),
                  d = 1 - $(e, c, h),
                  f = $(e, l, h),
                  g = $(e, l, u)) : 11 === a ? (p = 1 - $(e, c, u),
                  d = 1 - $(e, c, h)) : 12 === a ? (g = $(e, l, u),
                  d = $(e, h, c)) : 13 === a ? (f = 1 - $(e, h, l),
                  d = $(e, h, c)) : 14 === a ? (g = $(e, l, u),
                  f = $(e, l, h)) : console.log("MarchingSquaresJS-isoContours: Illegal cval detected: " + a),
                i.cells[o][s] = {
                  cval: a,
                  flipped: y,
                  top: p,
                  right: d,
                  bottom: f,
                  left: g
                }
            }
          }
        }
        return i
      }(t, e),
      l = [],
      p = 0,
      h.rows,
      h.cols,
      h.cells.forEach(function (t, c) {
        t.forEach(function (t, e) {
          if (void 0 !== t && 5 !== (u = t).cval && 10 !== u.cval && !tt(t)) {
            var n = function (t, e, n) {
                var r, i, o, s = t.length,
                  a = [],
                  u = [0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 1, 1, -1, 0, -1, 0],
                  c = [0, -1, 0, 0, 1, 1, 1, 1, 0, -1, 0, 0, 0, -1, 0, 0],
                  h = ["none", "bottom", "right", "right", "top", "top", "top", "top", "left", "bottom", "right", "right", "left", "bottom", "left", "none"],
                  l = (t[e][n],
                    t[e][n]),
                  p = l.cval,
                  f = nt(l, o = ["none", "left", "bottom", "left", "right", "none", "bottom", "left", "top", "top", "none", "top", "right", "right", "bottom", "none"][p]);
                a.push([n + f[0], e + f[1]]),
                  f = nt(l, o = h[p]),
                  a.push([n + f[0], e + f[1]]),
                  et(l);
                for (var g = n + u[p], d = e + c[p], y = p; 0 <= g && 0 <= d && d < s && (g != n || d != e) && void 0 !== (l = t[d][g]);) {
                  if (0 === (p = l.cval) || 15 === p)
                    return {
                      path: a,
                      info: "mergeable"
                    };
                  o = h[p],
                    r = u[p],
                    i = c[p],
                    5 !== p && 10 !== p || (5 === p ? l.flipped ? (r = -1 === c[y] ? (o = "left",
                        -1) : (o = "right",
                        1),
                      i = 0) : -1 === u[y] && (o = "bottom",
                      r = 0,
                      i = -1) : 10 === p && (l.flipped ? i = -1 === u[y] ? (o = "top",
                      r = 0,
                      1) : (o = "bottom",
                      r = 0,
                      -1) : 1 === c[y] && (o = "left",
                      r = -1,
                      i = 0))),
                    f = nt(l, o),
                    a.push([g + f[0], d + f[1]]),
                    et(l),
                    g += r,
                    d += i,
                    y = p
                }
                return {
                  path: a,
                  info: "closed"
                }
              }(h.cells, c, e),
              r = !1;
            if ("mergeable" === n.info)
              for (var i = n.path[n.path.length - 1][0], o = n.path[n.path.length - 1][1], s = p - 1; 0 <= s; s--)
                if (Math.abs(l[s][0][0] - i) <= 1e-7 && Math.abs(l[s][0][1] - o) <= 1e-7) {
                  for (var a = n.path.length - 2; 0 <= a; --a)
                    l[s].unshift(n.path[a]);
                  r = !0;
                  break
                }
            r || (l[p++] = n.path)
          }
          var u
        })
      }),
      l);
    return "function" == typeof xo.successCallback && xo.successCallback(a),
      a
  }

  function $(t, e, n) {
    return (t - e) / (n - e)
  }

  function tt(t) {
    return 0 === t.cval || 15 === t.cval
  }

  function et(t) {
    tt(t) || 5 === t.cval || 10 === t.cval || (t.cval = 15)
  }

  function nt(t, e) {
    return "top" === e ? [t.top, 1] : "bottom" === e ? [t.bottom, 0] : "right" === e ? [1, t.right] : "left" === e ? [0, t.left] : void 0
  }

  function rt(t, e, n) {
    var r = t[e];
    t[e] = t[n],
      t[n] = r
  }

  function it(t, e) {
    if (!(this instanceof it))
      return new it(t, e);
    this._maxEntries = Math.max(4, t || 9),
      this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)),
      e && this._initFormat(e),
      this.clear()
  }

  function ot(t, e) {
    st(t, 0, t.children.length, e, t)
  }

  function st(t, e, n, r, i) {
    i || (i = gt(null)),
      i.minX = 1 / 0,
      i.minY = 1 / 0,
      i.maxX = -1 / 0,
      i.maxY = -1 / 0;
    for (var o, s = e; s < n; s++)
      o = t.children[s],
      at(i, t.leaf ? r(o) : o);
    return i
  }

  function at(t, e) {
    return t.minX = Math.min(t.minX, e.minX),
      t.minY = Math.min(t.minY, e.minY),
      t.maxX = Math.max(t.maxX, e.maxX),
      t.maxY = Math.max(t.maxY, e.maxY),
      t
  }

  function ut(t, e) {
    return t.minX - e.minX
  }

  function ct(t, e) {
    return t.minY - e.minY
  }

  function ht(t) {
    return (t.maxX - t.minX) * (t.maxY - t.minY)
  }

  function lt(t) {
    return t.maxX - t.minX + (t.maxY - t.minY)
  }

  function pt(t, e) {
    return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
  }

  function ft(t, e) {
    return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
  }

  function gt(t) {
    return {
      children: t,
      height: 1,
      leaf: !0,
      minX: 1 / 0,
      minY: 1 / 0,
      maxX: -1 / 0,
      maxY: -1 / 0
    }
  }

  function dt(t, e, n, r, i) {
    for (var o, s = [e, n]; s.length;)
      (n = s.pop()) - (e = s.pop()) <= r || (o = e + Math.ceil((n - e) / r / 2) * r,
        Eo(t, o, e, n, i),
        s.push(e, o, o, n))
  }

  function yt(t, e) {
    return t(e = {
        exports: {}
      }, e.exports),
      e.exports
  }

  function _t(t, e) {
    if (!(this instanceof _t))
      return new _t(t, e);
    if (this.data = t || [],
      this.length = this.data.length,
      this.compare = e || function (t, e) {
        return t < e ? -1 : e < t ? 1 : 0
      },
      0 < this.length)
      for (var n = (this.length >> 1) - 1; 0 <= n; n--)
        this._down(n)
  }

  function mt(t, e, n) {
    e = Math.max(0, void 0 === e ? 2 : e),
      n = n || 0;
    for (var r, i = function (t) {
        for (var e = t[0], n = t[0], r = t[0], i = t[0], o = 0; o < t.length; o++) {
          var s = t[o];
          s[0] < e[0] && (e = s),
            s[0] > r[0] && (r = s),
            s[1] < n[1] && (n = s),
            s[1] > i[1] && (i = s)
        }
        var a = [e, n, r, i],
          u = a.slice();
        for (o = 0; o < t.length; o++)
          Ro(t[o], a) || u.push(t[o]);
        var c = function (r) {
            var t = r.length;
            if (t < 3) {
              for (var e = new Array(t), n = 0; n < t; ++n)
                e[n] = n;
              return 2 === t && r[0][0] === r[1][0] && r[0][1] === r[1][1] ? [0] : e
            }
            var i = new Array(t);
            for (n = 0; n < t; ++n)
              i[n] = n;
            i.sort(function (t, e) {
              var n = r[t][0] - r[e][0];
              return n || r[t][1] - r[e][1]
            });
            var o = [i[0], i[1]],
              s = [i[0], i[1]];
            for (n = 2; n < t; ++n) {
              for (var a = i[n], u = r[a], c = o.length; 1 < c && Lo(r[o[c - 2]], r[o[c - 1]], u) <= 0;)
                c -= 1,
                o.pop();
              for (o.push(a),
                c = s.length; 1 < c && 0 <= Lo(r[s[c - 2]], r[s[c - 1]], u);)
                c -= 1,
                s.pop();
              s.push(a)
            }
            e = new Array(s.length + o.length - 2);
            for (var h = 0, l = (n = 0,
                o.length); n < l; ++n)
              e[h++] = o[n];
            for (var p = s.length - 2; 0 < p; --p)
              e[h++] = s[p];
            return e
          }(u),
          h = [];
        for (o = 0; o < c.length; o++)
          h.push(u[c[o]]);
        return h
      }(t), o = wo(16, ["[0]", "[1]", "[0]", "[1]"]).load(t), s = [], a = 0; a < i.length; a++) {
      var u = i[a];
      o.remove(u),
        r = bt(u, r),
        s.push(r)
    }
    var c = wo(16);
    for (a = 0; a < s.length; a++)
      c.insert(wt(s[a]));
    for (var h = e * e, l = n * n; s.length;) {
      var p = s.shift(),
        f = p.p,
        g = p.next.p,
        d = It(f, g);
      if (!(d < l)) {
        var y = d / h;
        (u = function (t, e, n, r, i, o, s) {
          for (var a = new Po(null, vt), u = t.data; u;) {
            for (var c = 0; c < u.children.length; c++) {
              var h = u.children[c],
                l = u.leaf ? Nt(h, n, r) : function (t, e, n) {
                  if (xt(t, n) || xt(e, n))
                    return 0;
                  var r = Ct(t[0], t[1], e[0], e[1], n.minX, n.minY, n.maxX, n.minY);
                  if (0 === r)
                    return 0;
                  var i = Ct(t[0], t[1], e[0], e[1], n.minX, n.minY, n.minX, n.maxY);
                  if (0 === i)
                    return 0;
                  var o = Ct(t[0], t[1], e[0], e[1], n.maxX, n.minY, n.maxX, n.maxY);
                  if (0 === o)
                    return 0;
                  var s = Ct(t[0], t[1], e[0], e[1], n.minX, n.maxY, n.maxX, n.maxY);
                  return 0 === s ? 0 : Math.min(r, i, o, s)
                }(n, r, h);
              o < l || a.push({
                node: h,
                dist: l
              })
            }
            for (; a.length && !a.peek().node.children;) {
              var p = a.pop(),
                f = p.node,
                g = Nt(f, e, n),
                d = Nt(f, r, i);
              if (p.dist < g && p.dist < d && Et(n, f, s) && Et(r, f, s))
                return f
            }
            (u = a.pop()) && (u = u.node)
          }
          return null
        }(o, p.prev.p, f, g, p.next.next.p, y, c)) && Math.min(It(u, f), It(u, g)) <= y && (s.push(p),
          s.push(bt(u, p)),
          o.remove(u),
          c.remove(p),
          c.insert(wt(p)),
          c.insert(wt(p.next)))
      }
    }
    p = r;
    for (var _ = []; _.push(p.p),
      (p = p.next) !== r;)
    ;
    return _.push(p.p),
      _
  }

  function vt(t, e) {
    return t.dist - e.dist
  }

  function xt(t, e) {
    return t[0] >= e.minX && t[0] <= e.maxX && t[1] >= e.minY && t[1] <= e.maxY
  }

  function Et(t, e, n) {
    for (var r = Math.min(t[0], e[0]), i = Math.min(t[1], e[1]), o = Math.max(t[0], e[0]), s = Math.max(t[1], e[1]), a = n.search({
        minX: r,
        minY: i,
        maxX: o,
        maxY: s
      }), u = 0; u < a.length; u++)
      if (c = a[u].p,
        h = a[u].next.p,
        l = t,
        c !== (p = e) && h !== l && 0 < To(c, h, l) != 0 < To(c, h, p) && 0 < To(l, p, c) != 0 < To(l, p, h))
        return !1;
    var c, h, l, p;
    return !0
  }

  function wt(t) {
    var e = t.p,
      n = t.next.p;
    return t.minX = Math.min(e[0], n[0]),
      t.minY = Math.min(e[1], n[1]),
      t.maxX = Math.max(e[0], n[0]),
      t.maxY = Math.max(e[1], n[1]),
      t
  }

  function bt(t, e) {
    var n = {
      p: t,
      prev: null,
      next: null,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0
    };
    return e ? (n.next = e.next,
        (n.prev = e).next.prev = n,
        e.next = n) : (n.prev = n).next = n,
      n
  }

  function It(t, e) {
    var n = t[0] - e[0],
      r = t[1] - e[1];
    return n * n + r * r
  }

  function Nt(t, e, n) {
    var r = e[0],
      i = e[1],
      o = n[0] - r,
      s = n[1] - i;
    if (0 !== o || 0 !== s) {
      var a = ((t[0] - r) * o + (t[1] - i) * s) / (o * o + s * s);
      1 < a ? (r = n[0],
        i = n[1]) : 0 < a && (r += o * a,
        i += s * a)
    }
    return (o = t[0] - r) * o + (s = t[1] - i) * s
  }

  function Ct(t, e, n, r, i, o, s, a) {
    var u, c, h, l, p = n - t,
      f = r - e,
      g = s - i,
      d = a - o,
      y = t - i,
      _ = e - o,
      m = p * p + f * f,
      v = p * g + f * d,
      x = g * g + d * d,
      E = p * y + f * _,
      w = g * y + d * _,
      b = m * x - v * v,
      I = b,
      N = b;
    0 === b ? (c = 0,
        I = 1,
        l = w,
        N = x) : (l = m * w - v * E,
        (c = v * w - x * E) < 0 ? (c = 0,
          l = w,
          N = x) : I < c && (c = I,
          l = w + v,
          N = x)),
      l < 0 ? -E < (l = 0) ? c = 0 : m < -E ? c = I : (c = -E,
        I = m) : N < l && (l = N,
        -E + v < 0 ? c = 0 : m < -E + v ? c = I : (c = -E + v,
          I = m));
    var C = (1 - (h = 0 === l ? 0 : l / N)) * i + h * s - ((1 - (u = 0 === c ? 0 : c / I)) * t + u * n),
      S = (1 - h) * o + h * a - ((1 - u) * e + u * r);
    return C * C + S * S
  }

  function St(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.concavity || 1 / 0,
      r = [];
    if (w(t, function (t) {
        r.push([t[0], t[1]])
      }),
      !r.length)
      return null;
    var i = Ao(r, n);
    return 3 < i.length ? z([i]) : null
  }

  function Mt(t, e, n) {
    if ("object" != typeof (n = n || {}))
      throw new Error("options is invalid");
    var r = n.ignoreBoundary;
    if (!t)
      throw new Error("point is required");
    if (!e)
      throw new Error("polygon is required");
    var i, o, s = H(t),
      a = D(e),
      u = e.geometry ? e.geometry.type : e.type,
      c = e.bbox;
    if (c && !1 == (i = s,
        (o = c)[0] <= i[0] && o[1] <= i[1] && o[2] >= i[0] && o[3] >= i[1]))
      return !1;
    "Polygon" === u && (a = [a]);
    for (var h = 0, l = !1; h < a.length && !l; h++)
      if (Lt(s, a[h][0], r)) {
        for (var p = !1, f = 1; f < a[h].length && !p;)
          Lt(s, a[h][f], !r) && (p = !0),
          f++;
        p || (l = !0)
      }
    return l
  }

  function Lt(t, e, n) {
    var r = !1;
    e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] && (e = e.slice(0, e.length - 1));
    for (var i = 0, o = e.length - 1; i < e.length; o = i++) {
      var s = e[i][0],
        a = e[i][1],
        u = e[o][0],
        c = e[o][1];
      if (t[1] * (s - u) + a * (u - t[0]) + c * (t[0] - s) == 0 && (s - t[0]) * (u - t[0]) <= 0 && (a - t[1]) * (c - t[1]) <= 0)
        return !n;
      a > t[1] != c > t[1] && t[0] < (u - s) * (t[1] - a) / (c - a) + s && (r = !r)
    }
    return r
  }

  function Pt(t, e) {
    var n = [];
    return S(e, function (e) {
        I(t, function (t) {
          Mt(t, e) && n.push(t)
        })
      }),
      X(n)
  }

  function Ot(t, n) {
    if ("FeatureCollection" !== t.type)
      throw new Error("points must be a FeatureCollection");
    var o = !1;
    return X(function (t) {
      if (t.length < 3)
        return [];
      t.sort(Tt);
      for (var e, n, r, i, o, s, a = t.length - 1, u = t[a].x, c = t[0].x, h = t[a].y, l = h; a--;)
        t[a].y < h && (h = t[a].y),
        t[a].y > l && (l = t[a].y);
      var p, f = c - u,
        g = l - h,
        d = g < f ? f : g,
        y = .5 * (c + u),
        _ = .5 * (l + h),
        m = [new Rt({
          x: y - 20 * d,
          y: _ - d,
          __sentinel: !0
        }, {
          x: y,
          y: _ + 20 * d,
          __sentinel: !0
        }, {
          x: y + 20 * d,
          y: _ - d,
          __sentinel: !0
        })],
        v = [],
        x = [];
      for (a = t.length; a--;) {
        for (x.length = 0,
          p = m.length; p--;)
          0 < (f = t[a].x - m[p].x) && f * f > m[p].r ? (v.push(m[p]),
            m.splice(p, 1)) : f * f + (g = t[a].y - m[p].y) * g > m[p].r || (x.push(m[p].a, m[p].b, m[p].b, m[p].c, m[p].c, m[p].a),
            m.splice(p, 1));
        for (At(x),
          p = x.length; p;)
          n = x[--p],
          e = x[--p],
          r = t[a],
          i = n.x - e.x,
          o = n.y - e.y,
          s = 2 * (i * (r.y - n.y) - o * (r.x - n.x)),
          1e-12 < Math.abs(s) && m.push(new Rt(e, n, r))
      }
      for (Array.prototype.push.apply(v, m),
        a = v.length; a--;)
        (v[a].a.__sentinel || v[a].b.__sentinel || v[a].c.__sentinel) && v.splice(a, 1);
      return v
    }(t.features.map(function (t) {
      var e = {
        x: t.geometry.coordinates[0],
        y: t.geometry.coordinates[1]
      };
      return n ? e.z = t.properties[n] : 3 === t.geometry.coordinates.length && (o = !0,
          e.z = t.geometry.coordinates[2]),
        e
    })).map(function (t) {
      var e = [t.a.x, t.a.y],
        n = [t.b.x, t.b.y],
        r = [t.c.x, t.c.y],
        i = {};
      return o ? (e.push(t.a.z),
          n.push(t.b.z),
          r.push(t.c.z)) : i = {
          a: t.a.z,
          b: t.b.z,
          c: t.c.z
        },
        z([
          [e, n, r, e]
        ], i)
    }))
  }

  function Rt(t, e, n) {
    this.a = t,
      this.b = e,
      this.c = n;
    var r, i, o = e.x - t.x,
      s = e.y - t.y,
      a = n.x - t.x,
      u = n.y - t.y,
      c = o * (t.x + e.x) + s * (t.y + e.y),
      h = a * (t.x + n.x) + u * (t.y + n.y),
      l = 2 * (o * (n.y - e.y) - s * (n.x - e.x));
    this.x = (u * c - s * h) / l,
      this.y = (o * h - a * c) / l,
      r = this.x - t.x,
      i = this.y - t.y,
      this.r = r * r + i * i
  }

  function Tt(t, e) {
    return e.x - t.x
  }

  function At(t) {
    var e, n, r, i, o, s = t.length;
    t: for (; s;)
      for (n = t[--s],
        e = t[--s],
        r = s; r;)
        if (o = t[--r],
          i = t[--r],
          e === i && n === o || e === o && n === i) {
          t.splice(s, 2),
            t.splice(r, 2),
            s -= 2;
          continue t
        }
  }

  function Dt(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.units,
      i = H(t),
      o = H(e),
      s = m(o[1] - i[1]),
      a = m(o[0] - i[0]),
      u = m(i[1]),
      c = m(o[1]),
      h = Math.pow(Math.sin(s / 2), 2) + Math.pow(Math.sin(a / 2), 2) * Math.cos(u) * Math.cos(c);
    return g(2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)), r)
  }

  function Ft(t) {
    if (!t)
      throw new Error("geojson is required");
    switch (t.type) {
      case "Feature":
        return qt(t);
      case "FeatureCollection":
        return e = t,
          n = {
            type: "FeatureCollection"
          },
          Object.keys(e).forEach(function (t) {
            switch (t) {
              case "type":
              case "features":
                return;
              default:
                n[t] = e[t]
            }
          }),
          n.features = e.features.map(function (t) {
            return qt(t)
          }),
          n;
      case "Point":
      case "LineString":
      case "Polygon":
      case "MultiPoint":
      case "MultiLineString":
      case "MultiPolygon":
      case "GeometryCollection":
        return Gt(t);
      default:
        throw new Error("unknown GeoJSON type")
    }
    var e, n
  }

  function qt(e) {
    var n = {
      type: "Feature"
    };
    return Object.keys(e).forEach(function (t) {
        switch (t) {
          case "type":
          case "properties":
          case "geometry":
            return;
          default:
            n[t] = e[t]
        }
      }),
      n.properties = function n(r) {
        var i = {};
        return r && Object.keys(r).forEach(function (t) {
            var e = r[t];
            "object" == typeof e ? null === e ? i[t] = null : e.length ? i[t] = e.map(function (t) {
              return t
            }) : i[t] = n(e) : i[t] = e
          }),
          i
      }(e.properties),
      n.geometry = Gt(e.geometry),
      n
  }

  function Gt(t) {
    var e = {
      type: t.type
    };
    return t.bbox && (e.bbox = t.bbox),
      "GeometryCollection" === t.type ? e.geometries = t.geometries.map(function (t) {
        return Gt(t)
      }) : e.coordinates = function e(t) {
        return "object" != typeof t[0] ? t.slice() : t.map(function (t) {
          return e(t)
        })
      }(t.coordinates),
      e
  }

  function Bt(t, e) {
    function i(t, e) {
      e.length && e.pop();
      for (var n = c[t < 0 ? ~t : t], r = 0, i = n.length; r < i; ++r)
        e.push(u(n[r], r));
      t < 0 && Go(e, i)
    }

    function o(t) {
      return u(t)
    }

    function s(t) {
      for (var e = [], n = 0, r = t.length; n < r; ++n)
        i(t[n], e);
      return e.length < 2 && e.push(e[0]),
        e
    }

    function n(t) {
      for (var e = s(t); e.length < 4;)
        e.push(e[0]);
      return e
    }

    function a(t) {
      return t.map(n)
    }
    var u = qo(t.transform),
      c = t.arcs;
    return function t(e) {
      var n, r = e.type;
      switch (r) {
        case "GeometryCollection":
          return {
            type: r,
            geometries: e.geometries.map(t)
          };
        case "Point":
          n = o(e.coordinates);
          break;
        case "MultiPoint":
          n = e.coordinates.map(o);
          break;
        case "LineString":
          n = s(e.arcs);
          break;
        case "MultiLineString":
          n = e.arcs.map(s);
          break;
        case "Polygon":
          n = a(e.arcs);
          break;
        case "MultiPolygon":
          n = e.arcs.map(a);
          break;
        default:
          return null
      }
      return {
        type: r,
        coordinates: n
      }
    }(e)
  }

  function kt(t, e, n) {
    for (var r, i = e + (n-- - e >> 1); e < i; ++e,
      --n)
      r = t[e],
      t[e] = t[n],
      t[n] = r
  }

  function zt(t) {
    var e, n = jt(t.geometry);
    for (e in null != t.id && (n.id = t.id),
      null != t.bbox && (n.bbox = t.bbox),
      t.properties) {
      n.properties = t.properties;
      break
    }
    return n
  }

  function jt(t) {
    if (null == t)
      return {
        type: null
      };
    var e = "GeometryCollection" === t.type ? {
      type: "GeometryCollection",
      geometries: t.geometries.map(jt)
    } : "Point" === t.type || "MultiPoint" === t.type ? {
      type: t.type,
      coordinates: t.coordinates
    } : {
      type: t.type,
      arcs: t.coordinates
    };
    return null != t.bbox && (e.bbox = t.bbox),
      e
  }

  function Xt(t) {
    var e, n = t[0],
      r = t[1];
    return r < n && (e = n,
        n = r,
        r = e),
      n + 31 * r
  }

  function Ut(t, e) {
    var n, r = t[0],
      i = t[1],
      o = e[0],
      s = e[1];
    return i < r && (n = r,
        r = i,
        i = n),
      s < o && (n = o,
        o = s,
        s = n),
      r === o && i === s
  }

  function Yt(t) {
    return t[0].toString() + "," + t[1].toString()
  }

  function Vt(r, t) {
    if (!Y(t = t || {}))
      throw new Error("options is invalid");
    var e = t.mutate;
    if ("FeatureCollection" !== K(r))
      throw new Error("geojson must be a FeatureCollection");
    if (!r.features.length)
      throw new Error("geojson is empty");
    !1 !== e && void 0 !== e || (r = Ft(r));
    var n = function (t) {
      var e = {};
      L(r, function (t) {
        e[t.geometry.type] = !0
      });
      var n = Object.keys(e);
      return 1 === n.length ? n[0] : null
    }();
    if (!n)
      throw new Error("geojson must be homogenous");
    switch (n) {
      case "LineString":
        return function (t, e) {
          if (!Y(e = e || {}))
            throw new Error("options is invalid");
          var n = e.mutate;
          if ("FeatureCollection" !== K(t))
            throw new Error("geojson must be a FeatureCollection");
          if (!t.features.length)
            throw new Error("geojson is empty");
          !1 !== n && void 0 !== n || (t = Ft(t));
          var r = [],
            i = A(t, function (c, t) {
              return function (t, e) {
                var n, r = c.geometry.coordinates,
                  i = e.geometry.coordinates,
                  o = Yt(r[0]),
                  s = Yt(r[r.length - 1]),
                  a = Yt(i[0]),
                  u = Yt(i[i.length - 1]);
                if (o === u)
                  n = i.concat(r.slice(1));
                else if (a === s)
                  n = r.concat(i.slice(1));
                else if (o === a)
                  n = r.slice(1).reverse().concat(i);
                else {
                  if (s !== u)
                    return null;
                  n = r.concat(i.reverse().slice(1))
                }
                return j(n)
              }(0, t) || (r.push(c),
                t)
            });
          return i && r.push(i),
            r.length ? 1 === r.length ? r[0] : v(r.map(function (t) {
              return t.coordinates
            })) : null
        }(r, t);
      case "Polygon":
        return function (t, e) {
          if (!Y(e = e || {}))
            throw new Error("options is invalid");
          var n = e.mutate;
          if ("FeatureCollection" !== K(t))
            throw new Error("geojson must be a FeatureCollection");
          if (!t.features.length)
            throw new Error("geojson is empty");
          !1 !== n && void 0 !== n || (t = Ft(t));
          var r = [];
          L(t, function (t) {
            r.push(t.geometry)
          });
          var i = function (t, e) {
            function n(t) {
              t && h.hasOwnProperty(t.type) && h[t.type](t)
            }

            function r(t) {
              var e = [];
              do {
                var n = c.get(t);
                e.push(t[0] < t[1] ? n : ~n)
              } while (t = t.next);
              return e
            }

            function i(t) {
              return t.map(r)
            }
            var o = function (t) {
                function e(t) {
                  null != t && c.hasOwnProperty(t.type) && c[t.type](t)
                }

                function n(t) {
                  var e = t[0],
                    n = t[1];
                  e < o && (o = e),
                    a < e && (a = e),
                    n < s && (s = n),
                    u < n && (u = n)
                }

                function r(t) {
                  t.forEach(n)
                }

                function i(t) {
                  t.forEach(r)
                }
                var o = 1 / 0,
                  s = 1 / 0,
                  a = -1 / 0,
                  u = -1 / 0,
                  c = {
                    GeometryCollection: function (t) {
                      t.geometries.forEach(e)
                    },
                    Point: function (t) {
                      n(t.coordinates)
                    },
                    MultiPoint: function (t) {
                      t.coordinates.forEach(n)
                    },
                    LineString: function (t) {
                      r(t.arcs)
                    },
                    MultiLineString: function (t) {
                      t.arcs.forEach(r)
                    },
                    Polygon: function (t) {
                      t.arcs.forEach(r)
                    },
                    MultiPolygon: function (t) {
                      t.arcs.forEach(i)
                    }
                  };
                for (var h in t)
                  e(t[h]);
                return o <= a && s <= u ? [o, s, a, u] : void 0
              }(t = function (t) {
                var e, n, r = {};
                for (e in t)
                  r[e] = null == (n = t[e]) ? {
                    type: null
                  } : ("FeatureCollection" === n.type ? function (t) {
                      var e = {
                        type: "GeometryCollection",
                        geometries: t.features.map(zt)
                      };
                      return null != t.bbox && (e.bbox = t.bbox),
                        e
                    } :
                    "Feature" === n.type ? zt : jt)(n);
                return r
              }(t)),
              s = 0 < e && o && function (t, e, n) {
                function r(t) {
                  return [Math.round((t[0] - l) * f), Math.round((t[1] - p) * g)]
                }

                function i(t, e) {
                  for (var n, r, i, o, s, a = -1, u = 0, c = t.length, h = new Array(c); ++a < c;)
                    n = t[a],
                    o = Math.round((n[0] - l) * f),
                    s = Math.round((n[1] - p) * g),
                    o === r && s === i || (h[u++] = [r = o, i = s]);
                  for (h.length = u; u < e;)
                    u = h.push([h[0][0], h[0][1]]);
                  return h
                }

                function o(t) {
                  return i(t, 2)
                }

                function s(t) {
                  return i(t, 4)
                }

                function a(t) {
                  return t.map(s)
                }

                function u(t) {
                  null != t && d.hasOwnProperty(t.type) && d[t.type](t)
                }
                var l = e[0],
                  p = e[1],
                  c = e[2],
                  h = e[3],
                  f = c - l ? (n - 1) / (c - l) : 1,
                  g = h - p ? (n - 1) / (h - p) : 1,
                  d = {
                    GeometryCollection: function (t) {
                      t.geometries.forEach(u)
                    },
                    Point: function (t) {
                      t.coordinates = r(t.coordinates)
                    },
                    MultiPoint: function (t) {
                      t.coordinates = t.coordinates.map(r)
                    },
                    LineString: function (t) {
                      t.arcs = o(t.arcs)
                    },
                    MultiLineString: function (t) {
                      t.arcs = t.arcs.map(o)
                    },
                    Polygon: function (t) {
                      t.arcs = a(t.arcs)
                    },
                    MultiPolygon: function (t) {
                      t.arcs = t.arcs.map(a)
                    }
                  };
                for (var y in t)
                  u(t[y]);
                return {
                  scale: [1 / f, 1 / g],
                  translate: [l, p]
                }
              }(t, o, e),
              a = function (t) {
                function e(t) {
                  var e, n, r, i, o, s, a, u;
                  if (r = f.get(e = l[t[0]]))
                    for (a = 0,
                      u = r.length; a < u; ++a)
                      if (function (t, e) {
                          var n = t[0],
                            r = e[0],
                            i = t[1],
                            o = e[1];
                          if (n - i != r - o)
                            return !1;
                          for (; n <= i; ++n,
                            ++r)
                            if (!ko(l[n], l[r]))
                              return !1;
                          return !0
                        }(i = r[a], t))
                        return t[0] = i[0],
                          void(t[1] = i[1]);
                  if (o = f.get(n = l[t[1]]))
                    for (a = 0,
                      u = o.length; a < u; ++a)
                      if (function (t, e) {
                          var n = t[0],
                            r = e[0],
                            i = t[1],
                            o = e[1];
                          if (n - i != r - o)
                            return !1;
                          for (; n <= i; ++n,
                            --o)
                            if (!ko(l[n], l[o]))
                              return !1;
                          return !0
                        }(s = o[a], t))
                        return t[1] = s[0],
                          void(t[0] = s[1]);
                  r ? r.push(t) : f.set(e, [t]),
                    o ? o.push(t) : f.set(n, [t]),
                    g.push(t)
                }

                function s(t, e) {
                  var n = t[0],
                    r = e[0],
                    i = t[1] - n;
                  if (i !== e[1] - r)
                    return !1;
                  for (var o = h(t), s = h(e), a = 0; a < i; ++a)
                    if (!ko(l[n + (a + o) % i], l[r + (a + s) % i]))
                      return !1;
                  return !0
                }

                function a(t, e) {
                  var n = t[0],
                    r = e[0],
                    i = t[1],
                    o = e[1],
                    s = i - n;
                  if (s !== o - r)
                    return !1;
                  for (var a = h(t), u = s - h(e), c = 0; c < s; ++c)
                    if (!ko(l[n + (c + a) % s], l[o - (c + u) % s]))
                      return !1;
                  return !0
                }

                function h(t) {
                  for (var e = t[0], n = t[1], r = e, i = r, o = l[r]; ++r < n;) {
                    var s = l[r];
                    (s[0] < o[0] || s[0] === o[0] && s[1] < o[1]) && (i = r,
                      o = s)
                  }
                  return i - e
                }
                var n, r, i, o, l = t.coordinates,
                  u = t.lines,
                  c = t.rings,
                  p = u.length + c.length;
                for (delete t.lines,
                  delete t.rings,
                  i = 0,
                  o = u.length; i < o; ++i)
                  for (n = u[i]; n = n.next;)
                    ++p;
                for (i = 0,
                  o = c.length; i < o; ++i)
                  for (r = c[i]; r = r.next;)
                    ++p;
                var f = Bo(2 * p * 1.4, Uo, ko),
                  g = t.arcs = [];
                for (i = 0,
                  o = u.length; i < o; ++i)
                  for (n = u[i]; e(n),
                    n = n.next;)
                ;
                for (i = 0,
                  o = c.length; i < o; ++i)
                  if ((r = c[i]).next)
                    for (; e(r),
                      r = r.next;)
                  ;
                  else
                    ! function (t) {
                      var e, n, r, i, o;
                      if (n = f.get(e = l[t[0]]))
                        for (i = 0,
                          o = n.length; i < o; ++i) {
                          if (s(r = n[i], t))
                            return t[0] = r[0],
                              t[1] = r[1];
                          if (a(r, t))
                            return t[0] = r[1],
                              t[1] = r[0]
                        }
                      if (n = f.get(e = l[t[0] + h(t)]))
                        for (i = 0,
                          o = n.length; i < o; ++i) {
                          if (s(r = n[i], t))
                            return t[0] = r[0],
                              t[1] = r[1];
                          if (a(r, t))
                            return t[0] = r[1],
                              t[1] = r[0]
                        }
                      n ? n.push(t) : f.set(e, [t]),
                        g.push(t)
                    }(r);
                return t
              }(function (t) {
                var e, n, r, i = function (t) {
                    function e(t, e, n, r) {
                      if (p[n] !== t) {
                        p[n] = t;
                        var i = f[n];
                        if (0 <= i) {
                          var o = g[n];
                          i === e && o === r || i === r && o === e || (++y,
                            d[n] = 1)
                        } else
                          f[n] = e,
                          g[n] = r
                      }
                    }

                    function i(t) {
                      return Uo(u[t])
                    }

                    function o(t, e) {
                      return ko(u[t], u[e])
                    }
                    var n, r, s, a, u = t.coordinates,
                      c = t.lines,
                      h = t.rings,
                      l = function () {
                        for (var t = Bo(1.4 * u.length, i, o, Int32Array, -1, Int32Array), e = new Int32Array(u.length), n = 0, r = u.length; n < r; ++n)
                          e[n] = t.maybeSet(n, n);
                        return e
                      }(),
                      p = new Int32Array(u.length),
                      f = new Int32Array(u.length),
                      g = new Int32Array(u.length),
                      d = new Int8Array(u.length),
                      y = 0;
                    for (n = 0,
                      r = u.length; n < r; ++n)
                      p[n] = f[n] = g[n] = -1;
                    for (n = 0,
                      r = c.length; n < r; ++n) {
                      var _ = c[n],
                        m = _[0],
                        v = _[1];
                      for (s = l[m],
                        a = l[++m],
                        ++y,
                        d[s] = 1; ++m <= v;)
                        e(n, s, s = a, a = l[m]);
                      ++y,
                      d[a] = 1
                    }
                    for (n = 0,
                      r = u.length; n < r; ++n)
                      p[n] = -1;
                    for (n = 0,
                      r = h.length; n < r; ++n) {
                      var x = h[n],
                        E = x[0] + 1,
                        w = x[1];
                      for (e(n, l[w - 1], s = l[E - 1], a = l[E]); ++E <= w;)
                        e(n, s, s = a, a = l[E])
                    }
                    p = f = g = null;
                    var b, I = function (i, o, s, t, a) {
                      3 === arguments.length && (t = Array,
                        a = null);
                      for (var u = new t(i = 1 << Math.max(4, Math.ceil(Math.log(i) / Math.LN2))), c = i - 1, e = 0; e < i; ++e)
                        u[e] = a;
                      return {
                        add: function (t) {
                          for (var e = o(t) & c, n = u[e], r = 0; n != a;) {
                            if (s(n, t))
                              return !0;
                            if (++r >= i)
                              throw new Error("full hashset");
                            n = u[e = e + 1 & c]
                          }
                          return u[e] = t,
                            !0
                        },
                        has: function (t) {
                          for (var e = o(t) & c, n = u[e], r = 0; n != a;) {
                            if (s(n, t))
                              return !0;
                            if (++r >= i)
                              break;
                            n = u[e = e + 1 & c]
                          }
                          return !1
                        },
                        values: function () {
                          for (var t = [], e = 0, n = u.length; e < n; ++e) {
                            var r = u[e];
                            r != a && t.push(r)
                          }
                          return t
                        }
                      }
                    }(1.4 * y, Uo, ko);
                    for (n = 0,
                      r = u.length; n < r; ++n)
                      d[b = l[n]] && I.add(u[b]);
                    return I
                  }(t),
                  o = t.coordinates,
                  s = t.lines,
                  a = t.rings;
                for (n = 0,
                  r = s.length; n < r; ++n)
                  for (var u = s[n], c = u[0], h = u[1]; ++c < h;)
                    i.has(o[c]) && (e = {
                        0: c,
                        1: u[1]
                      },
                      u[1] = c,
                      u = u.next = e);
                for (n = 0,
                  r = a.length; n < r; ++n)
                  for (var l = a[n], p = l[0], f = p, g = l[1], d = i.has(o[p]); ++f < g;)
                    i.has(o[f]) && (d ? (e = {
                        0: f,
                        1: l[1]
                      },
                      l[1] = f,
                      l = l.next = e) : (y = o,
                      _ = p,
                      m = g,
                      v = g - f,
                      kt(y, _, m),
                      kt(y, _, _ + v),
                      kt(y, _ + v, m),
                      o[g] = o[p],
                      d = !0,
                      f = p));
                var y, _, m, v;
                return t
              }(function (t) {
                function e(t) {
                  t && c.hasOwnProperty(t.type) && c[t.type](t)
                }

                function n(t) {
                  for (var e = 0, n = t.length; e < n; ++e)
                    u[++o] = t[e];
                  var r = {
                    0: o - n + 1,
                    1: o
                  };
                  return s.push(r),
                    r
                }

                function r(t) {
                  for (var e = 0, n = t.length; e < n; ++e)
                    u[++o] = t[e];
                  var r = {
                    0: o - n + 1,
                    1: o
                  };
                  return a.push(r),
                    r
                }

                function i(t) {
                  return t.map(r)
                }
                var o = -1,
                  s = [],
                  a = [],
                  u = [],
                  c = {
                    GeometryCollection: function (t) {
                      t.geometries.forEach(e)
                    },
                    LineString: function (t) {
                      t.arcs = n(t.arcs)
                    },
                    MultiLineString: function (t) {
                      t.arcs = t.arcs.map(n)
                    },
                    Polygon: function (t) {
                      t.arcs = t.arcs.map(r)
                    },
                    MultiPolygon: function (t) {
                      t.arcs = t.arcs.map(i)
                    }
                  };
                for (var h in t)
                  e(t[h]);
                return {
                  type: "Topology",
                  coordinates: u,
                  lines: s,
                  rings: a,
                  objects: t
                }
              }(t))),
              u = a.coordinates,
              c = Bo(1.4 * a.arcs.length, Xt, Ut);
            t = a.objects,
              a.bbox = o,
              a.arcs = a.arcs.map(function (t, e) {
                return c.set(t, e),
                  u.slice(t[0], t[1] + 1)
              }),
              delete a.coordinates,
              u = null;
            var h = {
              GeometryCollection: function (t) {
                t.geometries.forEach(n)
              },
              LineString: function (t) {
                t.arcs = r(t.arcs)
              },
              MultiLineString: function (t) {
                t.arcs = t.arcs.map(r)
              },
              Polygon: function (t) {
                t.arcs = t.arcs.map(r)
              },
              MultiPolygon: function (t) {
                t.arcs = t.arcs.map(i)
              }
            };
            for (var l in t)
              n(t[l]);
            return s && (a.transform = s,
                a.arcs = function (t) {
                  for (var e = -1, n = t.length; ++e < n;) {
                    for (var r, i, o = t[e], s = 0, a = 1, u = o.length, c = o[0], h = c[0], l = c[1]; ++s < u;)
                      r = (c = o[s])[0],
                      i = c[1],
                      r === h && i === l || (o[a++] = [r - h, i - l],
                        h = r,
                        l = i);
                    1 === a && (o[a++] = [0, 0]),
                      o.length = a
                  }
                  return t
                }(a.arcs)),
              a
          }({
            geoms: s(r).geometry
          });
          return function (t) {
            return Bt(t, function (a, t) {
                function n(e) {
                  e.forEach(function (t) {
                      t.forEach(function (t) {
                        (c[t = t < 0 ? ~t : t] || (c[t] = [])).push(e)
                      })
                    }),
                    r.push(e)
                }

                function u(t) {
                  return function (t) {
                    for (var e, n = -1, r = t.length, i = t[r - 1], o = 0; ++n < r;)
                      e = i,
                      i = t[n],
                      o += e[0] * i[1] - e[1] * i[0];
                    return Math.abs(o)
                  }(Bt(a, {
                    type: "Polygon",
                    arcs: [t]
                  }).coordinates[0])
                }
                var c = {},
                  r = [],
                  i = [];
                return t.forEach(function t(e) {
                    switch (e.type) {
                      case "GeometryCollection":
                        e.geometries.forEach(t);
                        break;
                      case "Polygon":
                        n(e.arcs);
                        break;
                      case "MultiPolygon":
                        e.arcs.forEach(n)
                    }
                  }),
                  r.forEach(function (t) {
                    if (!t._) {
                      var e = [],
                        n = [t];
                      for (t._ = 1,
                        i.push(e); t = n.pop();)
                        e.push(t),
                        t.forEach(function (t) {
                          t.forEach(function (t) {
                            c[t < 0 ? ~t : t].forEach(function (t) {
                              t._ || (t._ = 1,
                                n.push(t))
                            })
                          })
                        })
                    }
                  }),
                  r.forEach(function (t) {
                    delete t._
                  }), {
                    type: "MultiPolygon",
                    arcs: i.map(function (t) {
                      var e, n = [];
                      if (t.forEach(function (t) {
                          t.forEach(function (t) {
                            t.forEach(function (t) {
                              c[t < 0 ? ~t : t].length < 2 && n.push(t)
                            })
                          })
                        }),
                        1 < (e = (n = function (p, i) {
                          function t(t, e) {
                            for (var n in t) {
                              var r = t[n];
                              delete e[r.start],
                                delete r.start,
                                delete r.end,
                                r.forEach(function (t) {
                                  o[t < 0 ? ~t : t] = 1
                                }),
                                s.push(r)
                            }
                          }
                          var o = {},
                            f = {},
                            g = {},
                            s = [],
                            a = -1;
                          return i.forEach(function (t, e) {
                              var n, r = p.arcs[t < 0 ? ~t : t];
                              r.length < 3 && !r[1][0] && !r[1][1] && (n = i[++a],
                                i[a] = t,
                                i[e] = n)
                            }),
                            i.forEach(function (t) {
                              var e, n, r, i, o, s, a = (r = t,
                                  o = p.arcs[r < 0 ? ~r : r],
                                  s = o[0],
                                  p.transform ? (i = [0, 0],
                                    o.forEach(function (t) {
                                      i[0] += t[0],
                                        i[1] += t[1]
                                    })) : i = o[o.length - 1],
                                  r < 0 ? [i, s] : [s, i]),
                                u = a[0],
                                c = a[1];
                              if (e = g[u])
                                if (delete g[e.end],
                                  e.push(t),
                                  e.end = c,
                                  n = f[c]) {
                                  delete f[n.start];
                                  var h = n === e ? e : e.concat(n);
                                  f[h.start = e.start] = g[h.end = n.end] = h
                                } else
                                  f[e.start] = g[e.end] = e;
                              else if (e = f[c])
                                if (delete f[e.start],
                                  e.unshift(t),
                                  e.start = u,
                                  n = g[u]) {
                                  delete g[n.end];
                                  var l = n === e ? e : n.concat(e);
                                  f[l.start = n.start] = g[l.end = e.end] = l
                                } else
                                  f[e.start] = g[e.end] = e;
                              else
                                f[(e = [t]).start = u] = g[e.end = c] = e
                            }),
                            t(g, f),
                            t(f, g),
                            i.forEach(function (t) {
                              o[t < 0 ? ~t : t] || s.push([t])
                            }),
                            s
                        }(a, n)).length))
                        for (var r, i, o = 1, s = u(n[0]); o < e; ++o)
                          (r = u(n[o])) > s && (i = n[0],
                            n[0] = n[o],
                            n[o] = i,
                            s = r);
                      return n
                    })
                  }
              }
              .apply(this, arguments))
          }(i, i.objects.geoms.geometries)
        }(r, t);
      default:
        throw new Error(n + " is not supported")
    }
  }

  function Ht(t, e) {
    var n = "object" == typeof e ? e.mutate : e;
    if (!t)
      throw new Error("geojson is required");
    var r = K(t),
      i = [];
    switch (r) {
      case "LineString":
        i = Wt(t);
        break;
      case "MultiLineString":
      case "Polygon":
        D(t).forEach(function (t) {
          i.push(Wt(t))
        });
        break;
      case "MultiPolygon":
        D(t).forEach(function (t) {
          var e = [];
          t.forEach(function (t) {
              e.push(Wt(t))
            }),
            i.push(e)
        });
        break;
      case "Point":
        return t;
      case "MultiPoint":
        var o = {};
        D(t).forEach(function (t) {
          var e = t.join("-");
          o.hasOwnProperty(e) || (i.push(t),
            o[e] = !0)
        });
        break;
      default:
        throw new Error(r + " geometry not supported")
    }
    return t.coordinates ? !0 === n ? (t.coordinates = i,
      t) : {
      type: r,
      coordinates: i
    } : !0 === n ? (t.geometry.coordinates = i,
      t) : B({
      type: r,
      coordinates: i
    }, t.properties, t.bbox, t.id)
  }

  function Wt(t) {
    var e, n, r = D(t);
    if (2 === r.length && (e = r[0],
        n = r[1],
        e[0] !== n[0] || e[1] !== n[1]))
      return r;
    var i, o, s, a, u, c, h, l, p, f, g, d, y, _, m = [],
      v = r.length - 1;
    m.push(r[0]);
    for (var x = 1; x < v; x++)
      i = r[x - 1],
      o = r[x],
      a = i,
      u = s = r[x + 1],
      void 0,
      h = (c = o)[0],
      l = c[1],
      p = a[0],
      f = a[1],
      g = u[0],
      d = u[1],
      (h - p) * (_ = d - f) - (l - f) * (y = g - p) == 0 && (Math.abs(y) >= Math.abs(_) ? 0 < y ? p <= h && h <= g : g <= h && h <= p : 0 < _ ? f <= l && l <= d : d <= l && l <= f) || m.push(o);
    return m.push(s),
      m
  }

  function Jt(t, e, n) {
    var r = e.x,
      i = e.y,
      o = n.x - r,
      s = n.y - i;
    if (0 !== o || 0 !== s) {
      var a = ((t.x - r) * o + (t.y - i) * s) / (o * o + s * s);
      1 < a ? (r = n.x,
        i = n.y) : 0 < a && (r += o * a,
        i += s * a)
    }
    return (o = t.x - r) * o + (s = t.y - i) * s
  }

  function Zt(t, e, n) {
    if (t.length <= 2)
      return t;
    var r, i, o, s, a = void 0 !== e ? e * e : 1;
    return t = n ? t : function (t, e) {
        for (var n, r = t[0], i = [r], o = 1, s = t.length; o < s; o++)
          a = n = t[o],
          u = r,
          void 0,
          c = a.x - u.x,
          h = a.y - u.y,
          e < c * c + h * h && (i.push(n),
            r = n);
        var a, u, c, h;
        return r !== n && i.push(n),
          i
      }(t, a),
      i = a,
      o = (r = t).length - 1,
      s = [r[0]],
      function t(e, n, r, i, o) {
        for (var s, a = i, u = n + 1; u < r; u++) {
          var c = Jt(e[u], e[n], e[r]);
          a < c && (s = u,
            a = c)
        }
        i < a && (1 < s - n && t(e, n, s, i, o),
          o.push(e[s]),
          1 < r - s && t(e, s, r, i, o))
      }(r, 0, o, i, s),
      s.push(r[o]),
      s
  }

  function Kt(t, e, n) {
    return Zt(t.map(function (t) {
      return {
        x: t[0],
        y: t[1],
        z: t[2]
      }
    }), e, n).map(function (t) {
      return t.z ? [t.x, t.y, t.z] : [t.x, t.y]
    })
  }

  function Qt(t, i, o) {
    return t.map(function (t) {
      var e, n = t.map(function (t) {
        return {
          x: t[0],
          y: t[1]
        }
      });
      if (n.length < 4)
        throw new Error("invalid polygon");
      for (var r = Zt(n, i, o).map(function (t) {
          return [t.x, t.y]
        });
        (e = r).length < 3 || 3 === e.length && e[2][0] === e[0][0] && e[2][1] === e[0][1];)
        r = Zt(n, i -= .01 * i, o).map(function (t) {
          return [t.x, t.y]
        });
      return r[r.length - 1][0] === r[0][0] && r[r.length - 1][1] === r[0][1] || r.push(r[0]),
        r
    })
  }

  function $t(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.resolution || 1e4,
      r = e.sharpness || .85;
    if (!t)
      throw new Error("line is required");
    if (!U(n))
      throw new Error("resolution must be an number");
    if (!U(r))
      throw new Error("sharpness must be an number");
    for (var i = [], o = new Yo({
        points: J(t).coordinates.map(function (t) {
          return {
            x: t[0],
            y: t[1]
          }
        }),
        duration: n,
        sharpness: r
      }), s = 0; s < o.duration; s += 10) {
      var a = o.pos(s);
      Math.floor(s / 100) % 2 == 0 && i.push([a.x, a.y])
    }
    return j(i, t.properties)
  }

  function te(t) {
    l(t);
    var e = Number(t[0]),
      n = Number(t[1]),
      r = Number(t[2]),
      i = Number(t[3]);
    if (6 === t.length)
      throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");
    var o = [e, n];
    return z([
      [o, [r, n],
        [r, i],
        [e, i], o
      ]
    ])
  }

  function ee(t) {
    return te(V(t))
  }

  function ne(t) {
    var e = t[0],
      n = t[1],
      r = t[2],
      i = t[3];
    if (Dt(t.slice(0, 2), [r, n]) >= Dt(t.slice(0, 2), [e, i])) {
      var o = (n + i) / 2;
      return [e, o - (r - e) / 2, r, o + (r - e) / 2]
    }
    var s = (e + r) / 2;
    return [s - (i - n) / 2, n, s + (i - n) / 2, i]
  }

  function re(t, e, n, r) {
    if (!Y(r = r || {}))
      throw new Error("options is invalid");
    var i = r.units,
      o = r.properties,
      s = H(t),
      a = m(s[0]),
      u = m(s[1]),
      c = m(n),
      h = d(e, i),
      l = Math.asin(Math.sin(u) * Math.cos(h) + Math.cos(u) * Math.sin(h) * Math.cos(c));
    return k([f(a + Math.atan2(Math.sin(c) * Math.sin(h) * Math.cos(u), Math.cos(h) - Math.sin(u) * Math.sin(l))), f(l)], o)
  }

  function ie(t, e, n) {
    var r = (n = n || {}).steps || 64,
      i = n.properties;
    if (!t)
      throw new Error("center is required");
    if (!e)
      throw new Error("radius is required");
    if ("object" != typeof n)
      throw new Error("options must be an object");
    if ("number" != typeof r)
      throw new Error("steps must be a number");
    r = r || 64,
      i = i || t.properties || {};
    for (var o = [], s = 0; s < r; s++)
      o.push(re(t, e, -360 * s / r, n).geometry.coordinates);
    return o.push(o[0]),
      z([o], i)
  }

  function oe(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    if (!0 === n.final)
      return (oe(e, t) + 180) % 360;
    var r = H(t),
      i = H(e),
      o = m(r[0]),
      s = m(i[0]),
      a = m(r[1]),
      u = m(i[1]),
      c = Math.sin(s - o) * Math.cos(u),
      h = Math.cos(a) * Math.sin(u) - Math.sin(a) * Math.cos(u) * Math.cos(s - o);
    return f(Math.atan2(c, h))
  }

  function se(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.properties;
    if (!t)
      throw new Error("geojson is required");
    var r = V(t);
    return k([(r[0] + r[2]) / 2, (r[1] + r[3]) / 2], n)
  }

  function ae(t, e) {
    var n = 0,
      r = 0,
      i = 0;
    return w(t, function (t) {
        n += t[0],
          r += t[1],
          i++
      }, !0),
      k([n / i, r / i], e)
  }

  function ue(e) {
    var n = [];
    return "FeatureCollection" === e.type ? I(e, function (e) {
        w(e, function (t) {
          n.push(k(t, e.properties))
        })
      }) : w(e, function (t) {
        n.push(k(t, e.properties))
      }),
      X(n)
  }

  function ce(t, e, n) {
    n = n || 2;
    var r, i, o, s, a, u, c, h = e && e.length,
      l = h ? e[0] * n : t.length,
      p = he(t, 0, l, n, !0),
      f = [];
    if (!p)
      return f;
    if (h && (p = function (t, e, n, r) {
        var i, o, s, a = [];
        for (i = 0,
          o = e.length; i < o; i++)
          (s = he(t, e[i] * r, i < o - 1 ? e[i + 1] * r : t.length, r, !1)) === s.next && (s.steiner = !0),
          a.push(function (t) {
            for (var e = t, n = t; e.x < n.x && (n = e),
              (e = e.next) !== t;)
            ;
            return n
          }(s));
        for (a.sort(pe),
          i = 0; i < a.length; i++)
          ! function (t, e) {
            if (e = function (t, e) {
                var n, r = e,
                  i = t.x,
                  o = t.y,
                  s = -1 / 0;
                do {
                  if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                    var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                    if (a <= i && s < a) {
                      if ((s = a) === i) {
                        if (o === r.y)
                          return r;
                        if (o === r.next.y)
                          return r.next
                      }
                      n = r.x < r.next.x ? r : r.next
                    }
                  }
                  r = r.next
                } while (r !== e);
                if (!n)
                  return null;
                if (i === s)
                  return n.prev;
                var u, c = n,
                  h = n.x,
                  l = n.y,
                  p = 1 / 0;
                for (r = n.next; r !== c;)
                  i >= r.x && r.x >= h && i !== r.x && ge(o < l ? i : s, o, h, l, o < l ? s : i, o, r.x, r.y) && ((u = Math.abs(o - r.y) / (i - r.x)) < p || u === p && r.x > n.x) && me(r, t) && (n = r,
                    p = u),
                  r = r.next;
                return n
              }(t, e)) {
              var n = ve(e, t);
              le(n, n.next)
            }
          }(a[i], n),
          n = le(n, n.next);
        return n
      }(t, e, p, n)),
      t.length > 80 * n) {
      r = o = t[0],
        i = s = t[1];
      for (var g = n; g < l; g += n)
        (a = t[g]) < r && (r = a),
        (u = t[g + 1]) < i && (i = u),
        o < a && (o = a),
        s < u && (s = u);
      c = 0 !== (c = Math.max(o - r, s - i)) ? 1 / c : 0
    }
    return function l(t, e, n, r, i, o, s) {
        if (t) {
          !s && o && function (t, e, n, r) {
            for (var i = t; null === i.z && (i.z = fe(i.x, i.y, e, n, r)),
              i.prevZ = i.prev,
              i.nextZ = i.next,
              (i = i.next) !== t;)
            ;
            i.prevZ.nextZ = null,
              i.prevZ = null,
              function (t) {
                var e, n, r, i, o, s, a, u, c = 1;
                do {
                  for (n = t,
                    o = t = null,
                    s = 0; n;) {
                    for (s++,
                      r = n,
                      e = a = 0; e < c && (a++,
                        r = r.nextZ); e++)
                    ;
                    for (u = c; 0 < a || 0 < u && r;)
                      0 !== a && (0 === u || !r || n.z <= r.z) ? (n = (i = n).nextZ,
                        a--) : (r = (i = r).nextZ,
                        u--),
                      o ? o.nextZ = i : t = i,
                      i.prevZ = o,
                      o = i;
                    n = r
                  }
                  o.nextZ = null,
                    c *= 2
                } while (1 < s)
              }(i)
          }(t, r, i, o);
          for (var a, u, c = t; t.prev !== t.next;)
            if (a = t.prev,
              u = t.next,
              o ? function (t, e, n, r) {
                var i = t.prev,
                  o = t,
                  s = t.next;
                if (0 <= de(i, o, s))
                  return !1;
                for (var a = i.x < o.x ? i.x < s.x ? i.x : s.x : o.x < s.x ? o.x : s.x, u = i.y < o.y ? i.y < s.y ? i.y : s.y : o.y < s.y ? o.y : s.y, c = i.x > o.x ? i.x > s.x ? i.x : s.x : o.x > s.x ? o.x : s.x, h = i.y > o.y ? i.y > s.y ? i.y : s.y : o.y > s.y ? o.y : s.y, l = fe(a, u, e, n, r), p = fe(c, h, e, n, r), f = t.nextZ; f && f.z <= p;) {
                  if (f !== t.prev && f !== t.next && ge(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) && 0 <= de(f.prev, f, f.next))
                    return !1;
                  f = f.nextZ
                }
                for (f = t.prevZ; f && f.z >= l;) {
                  if (f !== t.prev && f !== t.next && ge(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) && 0 <= de(f.prev, f, f.next))
                    return !1;
                  f = f.prevZ
                }
                return !0
              }(t, r, i, o) : function (t) {
                var e = t.prev,
                  n = t,
                  r = t.next;
                if (0 <= de(e, n, r))
                  return !1;
                for (var i = t.next.next; i !== t.prev;) {
                  if (ge(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && 0 <= de(i.prev, i, i.next))
                    return !1;
                  i = i.next
                }
                return !0
              }(t))
              e.push(a.i / n),
              e.push(t.i / n),
              e.push(u.i / n),
              Ee(t),
              t = u.next,
              c = u.next;
            else if ((t = u) === c) {
            s ? 1 === s ? l(t = function (t, e, n) {
              var r = t;
              do {
                var i = r.prev,
                  o = r.next.next;
                !ye(i, o) && _e(i, r, r.next, o) && me(i, o) && me(o, i) && (e.push(i.i / n),
                    e.push(r.i / n),
                    e.push(o.i / n),
                    Ee(r),
                    Ee(r.next),
                    r = t = o),
                  r = r.next
              } while (r !== t);
              return r
            }(t, e, n), e, n, r, i, o, 2) : 2 === s && function (t, e, n, r, i, o) {
              var s, a, u = t;
              do {
                for (var c = u.next.next; c !== u.prev;) {
                  if (u.i !== c.i && (a = c,
                      (s = u).next.i !== a.i && s.prev.i !== a.i && ! function (t, e) {
                        var n = t;
                        do {
                          if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && _e(n, n.next, t, e))
                            return !0;
                          n = n.next
                        } while (n !== t);
                        return !1
                      }(s, a) && me(s, a) && me(a, s) && function (t, e) {
                        for (var n = t, r = !1, i = (t.x + e.x) / 2, o = (t.y + e.y) / 2; n.y > o != n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r),
                          (n = n.next) !== t;)
                        ;
                        return r
                      }(s, a))) {
                    var h = ve(u, c);
                    return u = le(u, u.next),
                      h = le(h, h.next),
                      l(u, e, n, r, i, o),
                      l(h, e, n, r, i, o)
                  }
                  c = c.next
                }
                u = u.next
              } while (u !== t)
            }(t, e, n, r, i, o) : l(le(t), e, n, r, i, o, 1);
            break
          }
        }
      }(p, f, n, r, i, c),
      f
  }

  function he(t, e, n, r, i) {
    var o, s;
    if (i === 0 < be(t, e, n, r))
      for (o = e; o < n; o += r)
        s = xe(o, t[o], t[o + 1], s);
    else
      for (o = n - r; e <= o; o -= r)
        s = xe(o, t[o], t[o + 1], s);
    return s && ye(s, s.next) && (Ee(s),
        s = s.next),
      s
  }

  function le(t, e) {
    if (!t)
      return t;
    e || (e = t);
    var n, r = t;
    do {
      if (n = !1,
        r.steiner || !ye(r, r.next) && 0 !== de(r.prev, r, r.next))
        r = r.next;
      else {
        if (Ee(r),
          (r = e = r.prev) === r.next)
          break;
        n = !0
      }
    } while (n || r !== e);
    return e
  }

  function pe(t, e) {
    return t.x - e.x
  }

  function fe(t, e, n, r, i) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
  }

  function ge(t, e, n, r, i, o, s, a) {
    return 0 <= (i - s) * (e - a) - (t - s) * (o - a) && 0 <= (t - s) * (r - a) - (n - s) * (e - a) && 0 <= (n - s) * (o - a) - (i - s) * (r - a)
  }

  function de(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
  }

  function ye(t, e) {
    return t.x === e.x && t.y === e.y
  }

  function _e(t, e, n, r) {
    return !!(ye(t, e) && ye(n, r) || ye(t, r) && ye(n, e)) || 0 < de(t, e, n) != 0 < de(t, e, r) && 0 < de(n, r, t) != 0 < de(n, r, e)
  }

  function me(t, e) {
    return de(t.prev, t, t.next) < 0 ? 0 <= de(t, e, t.next) && 0 <= de(t, t.prev, e) : de(t, e, t.prev) < 0 || de(t, t.next, e) < 0
  }

  function ve(t, e) {
    var n = new we(t.i, t.x, t.y),
      r = new we(e.i, e.x, e.y),
      i = t.next,
      o = e.prev;
    return (t.next = e).prev = t,
      (n.next = i).prev = n,
      (r.next = n).prev = r,
      (o.next = r).prev = o,
      r
  }

  function xe(t, e, n, r) {
    var i = new we(t, e, n);
    return r ? (i.next = r.next,
        (i.prev = r).next.prev = i,
        r.next = i) : (i.prev = i).next = i,
      i
  }

  function Ee(t) {
    t.next.prev = t.prev,
      t.prev.next = t.next,
      t.prevZ && (t.prevZ.nextZ = t.nextZ),
      t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function we(t, e, n) {
    this.i = t,
      this.x = e,
      this.y = n,
      this.prev = null,
      this.next = null,
      this.z = null,
      this.prevZ = null,
      this.nextZ = null,
      this.steiner = !1
  }

  function be(t, e, n, r) {
    for (var i = 0, o = e, s = n - r; o < n; o += r)
      i += (t[s] - t[o]) * (t[o + 1] + t[s + 1]),
      s = o;
    return i
  }

  function Ie(t) {
    var r = function (t) {
        for (var e = t[0][0].length, n = {
            vertices: [],
            holes: [],
            dimensions: e
          }, r = 0, i = 0; i < t.length; i++) {
          for (var o = 0; o < t[i].length; o++)
            for (var s = 0; s < e; s++)
              n.vertices.push(t[i][o][s]);
          0 < i && (r += t[i - 1].length,
            n.holes.push(r))
        }
        return n
      }(t),
      i = Vo(r.vertices, r.holes, 2),
      e = [],
      o = [];
    i.forEach(function (t, e) {
      var n = i[e];
      o.push([r.vertices[2 * n], r.vertices[2 * n + 1]])
    });
    for (var n = 0; n < o.length; n += 3) {
      var s = o.slice(n, n + 3);
      s.push(o[n]),
        e.push(z([s]))
    }
    return e
  }

  function Ne(r, t) {
    if (!r)
      throw new Error("targetPoint is required");
    if (!t)
      throw new Error("points is required");
    var i, o = 1 / 0;
    return I(t, function (t, e) {
        var n = Dt(r, t);
        n < o && ((i = Ft(t)).properties.featureIndex = e,
          i.properties.distanceToPoint = n,
          o = n)
      }),
      i
  }

  function Ce(t, e, n, r, i) {
    ! function t(e, n, r, i, o) {
      for (; r < i;) {
        if (600 < i - r) {
          var s = i - r + 1,
            a = n - r + 1,
            u = Math.log(s),
            c = .5 * Math.exp(2 * u / 3),
            h = .5 * Math.sqrt(u * c * (s - c) / s) * (a - s / 2 < 0 ? -1 : 1);
          t(e, n, Math.max(r, Math.floor(n - a * c / s + h)), Math.min(i, Math.floor(n + (s - a) * c / s + h)), o)
        }
        var l = e[n],
          p = r,
          f = i;
        for (Se(e, r, n),
          0 < o(e[i], l) && Se(e, r, i); p < f;) {
          for (Se(e, p, f),
            p++,
            f--; o(e[p], l) < 0;)
            p++;
          for (; 0 < o(e[f], l);)
            f--
        }
        0 === o(e[r], l) ? Se(e, r, f) : Se(e, ++f, i),
          f <= n && (r = f + 1),
          n <= f && (i = f - 1)
      }
    }(t, e, n || 0, r || t.length - 1, i || function (t, e) {
      return t < e ? -1 : e < t ? 1 : 0
    })
  }

  function Se(t, e, n) {
    var r = t[e];
    t[e] = t[n],
      t[n] = r
  }

  function Me(t, e) {
    if (!(this instanceof Me))
      return new Me(t, e);
    this._maxEntries = Math.max(4, t || 9),
      this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)),
      e && this._initFormat(e),
      this.clear()
  }

  function Le(t, e) {
    Pe(t, 0, t.children.length, e, t)
  }

  function Pe(t, e, n, r, i) {
    i || (i = Ge(null)),
      i.minX = 1 / 0,
      i.minY = 1 / 0,
      i.maxX = -1 / 0,
      i.maxY = -1 / 0;
    for (var o, s = e; s < n; s++)
      o = t.children[s],
      Oe(i, t.leaf ? r(o) : o);
    return i
  }

  function Oe(t, e) {
    return t.minX = Math.min(t.minX, e.minX),
      t.minY = Math.min(t.minY, e.minY),
      t.maxX = Math.max(t.maxX, e.maxX),
      t.maxY = Math.max(t.maxY, e.maxY),
      t
  }

  function Re(t, e) {
    return t.minX - e.minX
  }

  function Te(t, e) {
    return t.minY - e.minY
  }

  function Ae(t) {
    return (t.maxX - t.minX) * (t.maxY - t.minY)
  }

  function De(t) {
    return t.maxX - t.minX + (t.maxY - t.minY)
  }

  function Fe(t, e) {
    return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
  }

  function qe(t, e) {
    return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
  }

  function Ge(t) {
    return {
      children: t,
      height: 1,
      leaf: !0,
      minX: 1 / 0,
      minY: 1 / 0,
      maxX: -1 / 0,
      maxY: -1 / 0
    }
  }

  function Be(t, e, n, r, i) {
    for (var o, s = [e, n]; s.length;)
      (n = s.pop()) - (e = s.pop()) <= r || (Ce(t, o = e + Math.ceil((n - e) / r / 2) * r, e, n, i),
        s.push(e, o, o, n))
  }

  function ke(t) {
    var e = Me(t);
    return e.insert = function (t) {
        if (Array.isArray(t)) {
          var e = t;
          (t = ze(e)).bbox = e
        } else
          t.bbox = t.bbox ? t.bbox : je(t);
        return Me.prototype.insert.call(this, t)
      },
      e.load = function (t) {
        var n = [];
        return Array.isArray(t) ? t.forEach(function (t) {
            var e = ze(t);
            e.bbox = t,
              n.push(e)
          }) : I(t, function (t) {
            t.bbox = t.bbox ? t.bbox : je(t),
              n.push(t)
          }),
          Me.prototype.load.call(this, n)
      },
      e.remove = function (t) {
        if (Array.isArray(t)) {
          var e = t;
          (t = ze(e)).bbox = e
        }
        return Me.prototype.remove.call(this, t)
      },
      e.clear = function () {
        return Me.prototype.clear.call(this)
      },
      e.search = function (t) {
        return {
          type: "FeatureCollection",
          features: Me.prototype.search.call(this, this.toBBox(t))
        }
      },
      e.collides = function (t) {
        return Me.prototype.collides.call(this, this.toBBox(t))
      },
      e.all = function () {
        return {
          type: "FeatureCollection",
          features: Me.prototype.all.call(this)
        }
      },
      e.toJSON = function () {
        return Me.prototype.toJSON.call(this)
      },
      e.fromJSON = function (t) {
        return Me.prototype.fromJSON.call(this, t)
      },
      e.toBBox = function (t) {
        var e;
        return {
          minX: (e = t.bbox ? t.bbox : Array.isArray(t) && 4 === t.length ? t : je(t))[0],
          minY: e[1],
          maxX: e[2],
          maxY: e[3]
        }
      },
      e
  }

  function ze(t) {
    var e = [t[0], t[1]],
      n = [t[0], t[3]],
      r = [t[2], t[3]];
    return {
      type: "Feature",
      bbox: t,
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [e, [t[2], t[1]], r, n, e]
        ]
      }
    }
  }

  function je(t) {
    var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return w(t, function (t) {
        e[0] > t[0] && (e[0] = t[0]),
          e[1] > t[1] && (e[1] = t[1]),
          e[2] < t[0] && (e[2] = t[0]),
          e[3] < t[1] && (e[3] = t[1])
      }),
      e
  }

  function Xe(t) {
    if (!t)
      throw new Error("geojson is required");
    var e = [];
    return L(t, function (t) {
        ! function (n, r) {
          var t = [],
            e = n.geometry;
          switch (e.type) {
            case "Polygon":
              t = D(e);
              break;
            case "LineString":
              t = [D(e)]
          }
          t.forEach(function (t) {
            var e, c, h;
            (e = t,
              c = n.properties,
              h = [],
              e.reduce(function (t, e) {
                var n, r, i, o, s, a, u = j([t, e], c);
                return u.bbox = (r = e,
                    i = (n = t)[0],
                    o = n[1],
                    s = r[0],
                    a = r[1],
                    [i < s ? i : s, o < a ? o : a, s < i ? i : s, a < o ? o : a]),
                  h.push(u),
                  e
              }),
              h).forEach(function (t) {
              t.id = r.length,
                r.push(t)
            })
          })
        }(t, e)
      }),
      X(e)
  }

  function Ue(t, e) {
    var i = {},
      o = [];
    if ("LineString" === t.type && (t = B(t)),
      "LineString" === e.type && (e = B(e)),
      "Feature" === t.type && "Feature" === e.type && "LineString" === t.geometry.type && "LineString" === e.geometry.type && 2 === t.geometry.coordinates.length && 2 === e.geometry.coordinates.length) {
      var n = Ye(t, e);
      return n && o.push(n),
        X(o)
    }
    var s = ke();
    return s.load(Xe(e)),
      I(Xe(t), function (r) {
        I(s.search(r), function (t) {
          var e = Ye(r, t);
          if (e) {
            var n = D(e).join(",");
            i[n] || (i[n] = !0,
              o.push(e))
          }
        })
      }),
      X(o)
  }

  function Ye(t, e) {
    var n = D(t),
      r = D(e);
    if (2 !== n.length)
      throw new Error("<intersects> line1 must only contain 2 coordinates");
    if (2 !== r.length)
      throw new Error("<intersects> line2 must only contain 2 coordinates");
    var i = n[0][0],
      o = n[0][1],
      s = n[1][0],
      a = n[1][1],
      u = r[0][0],
      c = r[0][1],
      h = r[1][0],
      l = r[1][1],
      p = (l - c) * (s - i) - (h - u) * (a - o);
    if (0 === p)
      return null;
    var f = ((h - u) * (o - c) - (l - c) * (i - u)) / p,
      g = ((s - i) * (o - c) - (a - o) * (i - u)) / p;
    return 0 <= f && f <= 1 && 0 <= g && g <= 1 ? k([i + f * (s - i), o + f * (a - o)]) : null
  }

  function Ve(t, p, f) {
    if (!Y(f = f || {}))
      throw new Error("options is invalid");
    var e = t.geometry ? t.geometry.type : t.type;
    if ("LineString" !== e && "MultiLineString" !== e)
      throw new Error("lines must be LineString or MultiLineString");
    var g = k([1 / 0, 1 / 0], {
        dist: 1 / 0
      }),
      d = 0;
    return L(t, function (t) {
        for (var e = D(t), n = 0; n < e.length - 1; n++) {
          var r = k(e[n]);
          r.properties.dist = Dt(p, r, f);
          var i = k(e[n + 1]);
          i.properties.dist = Dt(p, i, f);
          var o = Dt(r, i, f),
            s = Math.max(r.properties.dist, i.properties.dist),
            a = oe(r, i),
            u = re(p, s, a + 90, f),
            c = re(p, s, a - 90, f),
            h = Ue(j([u.geometry.coordinates, c.geometry.coordinates]), j([r.geometry.coordinates, i.geometry.coordinates])),
            l = null;
          0 < h.features.length && ((l = h.features[0]).properties.dist = Dt(p, l, f),
              l.properties.location = d + Dt(r, l, f)),
            r.properties.dist < g.properties.dist && ((g = r).properties.index = n,
              g.properties.location = d),
            i.properties.dist < g.properties.dist && ((g = i).properties.index = n + 1,
              g.properties.location = d + o),
            l && l.properties.dist < g.properties.dist && ((g = l).properties.index = n),
            d += o
        }
      }),
      g
  }

  function He(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r, i = n.final;
    if (!t)
      throw new Error("start point is required");
    if (!e)
      throw new Error("end point is required");
    return 180 < (r = i ? We(H(e), H(t)) : We(H(t), H(e))) ? -(360 - r) : r
  }

  function We(t, e) {
    var n = m(t[1]),
      r = m(e[1]),
      i = m(e[0] - t[0]);
    i > Math.PI && (i -= 2 * Math.PI),
      i < -Math.PI && (i += 2 * Math.PI);
    var o = Math.log(Math.tan(r / 2 + Math.PI / 4) / Math.tan(n / 2 + Math.PI / 4));
    return (f(Math.atan2(i, o)) + 360) % 360
  }

  function Je(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.units;
    if (!t)
      throw new Error("from point is required");
    if (!e)
      throw new Error("to point is required");
    var i = H(t),
      o = H(e);
    return o[0] += 180 < o[0] - i[0] ? -360 : 180 < i[0] - o[0] ? 360 : 0,
      c(function (t, e, n) {
        var r = n = void 0 === n ? lo : Number(n),
          i = t[1] * Math.PI / 180,
          o = e[1] * Math.PI / 180,
          s = o - i,
          a = Math.abs(e[0] - t[0]) * Math.PI / 180;
        a > Math.PI && (a -= 2 * Math.PI);
        var u = Math.log(Math.tan(o / 2 + Math.PI / 4) / Math.tan(i / 2 + Math.PI / 4)),
          c = 1e-11 < Math.abs(u) ? s / u : Math.cos(i);
        return Math.sqrt(s * s + c * c * a * a) * r
      }(i, o), "meters", r)
  }

  function Ze(t, e) {
    return Qe(t, "mercator", e)
  }

  function Ke(t, e) {
    return Qe(t, "wgs84", e)
  }

  function Qe(t, n, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var r = e.mutate;
    if (!t)
      throw new Error("geojson is required");
    return Array.isArray(t) && U(t[0]) ? t = "mercator" === n ? $e(t) : tn(t) : (!0 !== r && (t = Ft(t)),
        w(t, function (t) {
          var e = "mercator" === n ? $e(t) : tn(t);
          t[0] = e[0],
            t[1] = e[1]
        })),
      t
  }

  function $e(t) {
    var e, n = Math.PI / 180,
      r = 20037508.342789244,
      i = [6378137 * (Math.abs(t[0]) <= 180 ? t[0] : t[0] - 360 * (e = t[0],
        e < 0 ? -1 : 0 < e ? 1 : 0)) * n, 6378137 * Math.log(Math.tan(.25 * Math.PI + .5 * t[1] * n))];
    return i[0] > r && (i[0] = r),
      i[0] < -r && (i[0] = -r),
      i[1] > r && (i[1] = r),
      i[1] < -r && (i[1] = -r),
      i
  }

  function tn(t) {
    var e = 180 / Math.PI;
    return [t[0] * e / 6378137, (.5 * Math.PI - 2 * Math.atan(Math.exp(-t[1] / 6378137))) * e]
  }

  function en(t, e, i) {
    if (!Y(i = i || {}))
      throw new Error("options is invalid");
    if (!t)
      throw new Error("pt is required");
    if (Array.isArray(t) ? t = k(t) : "Point" === t.type ? t = B(t) : G(t, "Point", "point"),
      !e)
      throw new Error("line is required");
    Array.isArray(e) ? e = j(e) : "LineString" === e.type ? e = B(e) : G(e, "LineString", "line");
    var o = 1 / 0,
      s = t.geometry.coordinates;
    return O(e, function (t) {
        var e = t.geometry.coordinates[0],
          n = t.geometry.coordinates[1],
          r = function (t, e, n, r) {
            var i = r.mercator,
              o = !0 !== i ? Dt(e, t, r) : nn(e, t, r),
              s = p(!0 !== i ? oe(e, t) : He(e, t)),
              a = p(!0 !== i ? oe(e, n) : He(e, n)),
              u = Math.abs(s - a);
            if (90 < u)
              return o;
            var c = (a + 180) % 360,
              h = p(!0 !== i ? oe(n, t) : He(n, t)),
              l = Math.abs(h - c);
            return 180 < l && (l = Math.abs(l - 360)),
              90 < l ? !0 !== i ? Dt(t, n, r) : nn(t, n, r) : !0 !== i ? o * Math.sin(m(u)) : function (t, e, n, r) {
                var i = 0;
                (180 <= Math.abs(t[0]) || 180 <= Math.abs(e[0]) || 180 <= Math.abs(n[0])) && (i = 0 < t[0] || 0 < e[0] || 0 < n[0] ? -180 : 180);
                var o, s, a, u, c, h, l, p, f = k(n),
                  g = Ze([t[0] + i, t[1]]),
                  d = Ze([e[0] + i, e[1]]),
                  y = Ze([n[0] + i, n[1]]),
                  _ = Ke((s = d,
                    a = y,
                    u = (o = g)[0],
                    c = o[1],
                    h = s[0] - u,
                    l = s[1] - c,
                    p = ((a[0] - u) * h + (a[1] - c) * l) / (h * h + l * l),
                    [u + p * h, c + p * l]));
                return 0 !== i && (_[0] -= i),
                  Je(f, _, r)
              }(e, n, t, r)
          }(s, e, n, i);
        r < o && (o = r)
      }),
      o
  }

  function nn(t, e, n) {
    var r = n.units,
      i = 0;
    180 <= Math.abs(t[0]) && (i = 0 < t[0] ? -180 : 180),
      180 <= Math.abs(e[0]) && (i = 0 < e[0] ? -180 : 180);
    var o = Ze([t[0] + i, t[1]]),
      s = Ze([e[0] + i, e[1]]),
      a = function (t) {
        return t * t
      },
      u = a(o[0] - s[0]) + a(o[1] - s[1]);
    return c(Math.sqrt(u), "meters", r)
  }

  function rn(t) {
    for (var e = "FeatureCollection" !== (l = t).type ? "Feature" !== l.type ? X([B(l)]) : X([l]) : l, n = se(e), r = !1, i = 0; !r && i < e.features.length;) {
      var o, s = e.features[i].geometry,
        a = !1;
      if ("Point" === s.type)
        n.geometry.coordinates[0] === s.coordinates[0] && n.geometry.coordinates[1] === s.coordinates[1] && (r = !0);
      else if ("MultiPoint" === s.type) {
        var u = !1;
        for (o = 0; !u && o < s.coordinates.length;)
          n.geometry.coordinates[0] === s.coordinates[o][0] && n.geometry.coordinates[1] === s.coordinates[o][1] && (u = r = !0),
          o++
      } else if ("LineString" === s.type)
        for (o = 0; !a && o < s.coordinates.length - 1;)
          on(n.geometry.coordinates[0], n.geometry.coordinates[1], s.coordinates[o][0], s.coordinates[o][1], s.coordinates[o + 1][0], s.coordinates[o + 1][1]) && (r = a = !0),
          o++;
      else if ("MultiLineString" === s.type)
        for (var c = 0; c < s.coordinates.length;) {
          a = !1,
            o = 0;
          for (var h = s.coordinates[c]; !a && o < h.length - 1;)
            on(n.geometry.coordinates[0], n.geometry.coordinates[1], h[o][0], h[o][1], h[o + 1][0], h[o + 1][1]) && (r = a = !0),
            o++;
          c++
        }
      else
        "Polygon" !== s.type && "MultiPolygon" !== s.type || Mt(n, s) && (r = !0);
      i++
    }
    var l;
    if (r)
      return n;
    var p = X([]);
    for (i = 0; i < e.features.length; i++)
      p.features = p.features.concat(ue(e.features[i]).features);
    return k(Ne(n, p).geometry.coordinates)
  }

  function on(t, e, n, r, i, o) {
    return Math.sqrt((i - n) * (i - n) + (o - r) * (o - r)) === Math.sqrt((t - n) * (t - n) + (e - r) * (e - r)) + Math.sqrt((i - t) * (i - t) + (o - e) * (o - e))
  }

  function sn(t) {
    return M(t, function (t, e) {
      return t + function t(e) {
        var n, r = 0;
        switch (e.type) {
          case "Polygon":
            return an(e.coordinates);
          case "MultiPolygon":
            for (n = 0; n < e.coordinates.length; n++)
              r += an(e.coordinates[n]);
            return r;
          case "Point":
          case "MultiPoint":
          case "LineString":
          case "MultiLineString":
            return 0;
          case "GeometryCollection":
            for (n = 0; n < e.geometries.length; n++)
              r += t(e.geometries[n]);
            return r
        }
      }(e)
    }, 0)
  }

  function an(t) {
    var e = 0;
    if (t && 0 < t.length) {
      e += Math.abs(un(t[0]));
      for (var n = 1; n < t.length; n++)
        e -= Math.abs(un(t[n]))
    }
    return e
  }

  function un(t) {
    var e, n, r, i, o, s, a = 0,
      u = t.length;
    if (2 < u) {
      for (s = 0; s < u; s++)
        o = s === u - 2 ? (r = u - 2,
          i = u - 1,
          0) : s === u - 1 ? (r = u - 1,
          i = 0,
          1) : (i = (r = s) + 1,
          s + 2),
        e = t[r],
        n = t[i],
        a += (cn(t[o][0]) - cn(e[0])) * Math.sin(cn(n[1]));
      a = a * Jo * Jo / 2
    }
    return a
  }

  function cn(t) {
    return t * Math.PI / 180
  }

  function hn(t, r) {
    if (!Y(r = r || {}))
      throw new Error("options is invalid");
    if (!t)
      throw new Error("geojson is required");
    return R(t, function (t, e) {
      var n = e.geometry.coordinates;
      return t + Dt(n[0], n[1], r)
    }, 0)
  }

  function ln(t, e, n, r) {
    if (!Y(r = r || {}))
      throw new Error("options is invalid");
    var i, o = [];
    if ("Feature" === t.type)
      i = t.geometry.coordinates;
    else {
      if ("LineString" !== t.type)
        throw new Error("input must be a LineString Feature or Geometry");
      i = t.coordinates
    }
    for (var s, a, u, c = 0, h = 0; h < i.length && !(c <= e && h === i.length - 1); h++) {
      if (e < c && 0 === o.length) {
        if (!(s = e - c))
          return o.push(i[h]),
            j(o);
        a = oe(i[h], i[h - 1]) - 180,
          u = re(i[h], s, a, r),
          o.push(u.geometry.coordinates)
      }
      if (n <= c)
        return (s = n - c) ? (a = oe(i[h], i[h - 1]) - 180,
            u = re(i[h], s, a, r),
            o.push(u.geometry.coordinates)) : o.push(i[h]),
          j(o);
      if (e <= c && o.push(i[h]),
        h === i.length - 1)
        return j(o);
      c += Dt(i[h], i[h + 1], r)
    }
    return j(i[i.length - 1])
  }

  function pn(t, e, n) {
    var r, i, o, s, a, u, c, h, l, p, f, g, d = (n = n || {}).ignoreEndVertices;
    if (!Y(n))
      throw new Error("invalid options");
    if (!t)
      throw new Error("pt is required");
    if (!e)
      throw new Error("line is required");
    for (var y = H(t), _ = D(e), m = 0; m < _.length - 1; m++) {
      var v = !1;
      if (d && (0 === m && (v = "start"),
          m === _.length - 2 && (v = "end"),
          0 === m && m + 1 === _.length - 1 && (v = "both")),
        r = _[m],
        i = _[m + 1],
        s = v,
        void 0,
        a = (o = y)[0],
        u = o[1],
        c = r[0],
        h = r[1],
        l = i[0],
        p = i[1],
        f = l - c,
        g = p - h,
        (o[0] - c) * g - (o[1] - h) * f == 0 && (s ? "start" === s ? Math.abs(f) >= Math.abs(g) ? 0 < f ? c < a && a <= l : l <= a && a < c : 0 < g ? h < u && u <= p : p <= u && u < h : "end" === s ? Math.abs(f) >= Math.abs(g) ? 0 < f ? c <= a && a < l : l < a && a <= c : 0 < g ? h <= u && u < p : p < u && u <= h : "both" === s ? Math.abs(f) >= Math.abs(g) ? 0 < f ? c < a && a < l : l < a && a < c : 0 < g ? h < u && u < p : p < u && u < h : void 0 : Math.abs(f) >= Math.abs(g) ? 0 < f ? c <= a && a <= l : l <= a && a <= c : 0 < g ? h <= u && u <= p : p <= u && u <= h))
        return !0
    }
    return !1
  }

  function fn(t, e) {
    var n = K(t),
      r = K(e),
      i = J(t),
      o = J(e);
    switch (n) {
      case "Point":
        switch (r) {
          case "MultiPoint":
            return function (t, e) {
              var n, r = !1;
              for (n = 0; n < e.coordinates.length; n++)
                if (dn(e.coordinates[n], t.coordinates)) {
                  r = !0;
                  break
                }
              return r
            }(i, o);
          case "LineString":
            return pn(i, o, {
              ignoreEndVertices: !0
            });
          case "Polygon":
            return Mt(i, o, {
              ignoreBoundary: !0
            });
          default:
            throw new Error("feature2 " + r + " geometry not supported")
        }
      case "MultiPoint":
        switch (r) {
          case "MultiPoint":
            return function (t, e) {
              for (var n = 0; n < t.coordinates.length; n++) {
                for (var r = !1, i = 0; i < e.coordinates.length; i++)
                  dn(t.coordinates[n], e.coordinates[i]) && (r = !0);
                if (!r)
                  return !1
              }
              return !0
            }(i, o);
          case "LineString":
            return function (t, e) {
              for (var n = !1, r = 0; r < t.coordinates.length; r++) {
                if (!pn(t.coordinates[r], e))
                  return !1;
                n || (n = pn(t.coordinates[r], e, {
                  ignoreEndVertices: !0
                }))
              }
              return n
            }(i, o);
          case "Polygon":
            return function (t, e) {
              for (var n = !0, r = 0; r < t.coordinates.length; r++) {
                var i = Mt(t.coordinates[1], e);
                if (!i) {
                  n = !1;
                  break
                }
                i = Mt(t.coordinates[1], e, {
                  ignoreBoundary: !0
                })
              }
              return n && i
            }(i, o);
          default:
            throw new Error("feature2 " + r + " geometry not supported")
        }
      case "LineString":
        switch (r) {
          case "LineString":
            return function (t, e) {
              for (var n = 0; n < t.coordinates.length; n++)
                if (!pn(t.coordinates[n], e))
                  return !1;
              return !0
            }(i, o);
          case "Polygon":
            return function (t, e) {
              var n, r;
              if (!gn(V(e), V(t)))
                return !1;
              for (var i = !1, o = 0; o < t.coordinates.length - 1; o++) {
                if (!Mt(t.coordinates[o], e))
                  return !1;
                if (i || (i = Mt(t.coordinates[o], e, {
                    ignoreBoundary: !0
                  })),
                  !i)
                  i = Mt((n = t.coordinates[o],
                    r = t.coordinates[o + 1],
                    [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2]), e, {
                    ignoreBoundary: !0
                  })
              }
              return i
            }(i, o);
          default:
            throw new Error("feature2 " + r + " geometry not supported")
        }
      case "Polygon":
        switch (r) {
          case "Polygon":
            return function (t, e) {
              var n = V(t);
              if (!gn(V(e), n))
                return !1;
              for (var r = 0; r < t.coordinates[0].length; r++)
                if (!Mt(t.coordinates[0][r], e))
                  return !1;
              return !0
            }(i, o);
          default:
            throw new Error("feature2 " + r + " geometry not supported")
        }
      default:
        throw new Error("feature1 " + n + " geometry not supported")
    }
  }

  function gn(t, e) {
    return !(t[0] > e[0] || t[2] < e[2] || t[1] > e[1] || t[3] < e[3])
  }

  function dn(t, e) {
    return t[0] === e[0] && t[1] === e[1]
  }

  function yn(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.mask,
      i = n.properties,
      o = [];
    if (null == e)
      throw new Error("cellSide is required");
    if (!U(e))
      throw new Error("cellSide is invalid");
    if (!t)
      throw new Error("bbox is required");
    if (!Array.isArray(t))
      throw new Error("bbox must be array");
    if (4 !== t.length)
      throw new Error("bbox must contain 4 numbers");
    if (r && -1 === ["Polygon", "MultiPolygon"].indexOf(K(r)))
      throw new Error("options.mask must be a (Multi)Polygon");
    for (var s = t[0], a = t[1], u = t[2], c = t[3], h = e / Dt([s, a], [u, a], n) * (u - s), l = e / Dt([s, a], [s, c], n) * (c - a), p = u - s, f = c - a, g = Math.floor(p / h), d = (f - Math.floor(f / l) * l) / 2, y = s + (p - g * h) / 2; y <= u;) {
      for (var _ = a + d; _ <= c;) {
        var m = k([y, _], i);
        r ? fn(m, r) && o.push(m) : o.push(m),
          _ += l
      }
      y += h
    }
    return X(o)
  }

  function _n(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.precision,
      r = e.coordinates,
      i = e.mutate;
    if (n = null == n || isNaN(n) ? 6 : n,
      r = null == r || isNaN(r) ? 3 : r,
      !t)
      throw new Error("<geojson> is required");
    if ("number" != typeof n)
      throw new Error("<precision> must be a number");
    if ("number" != typeof r)
      throw new Error("<coordinates> must be a number");
    !1 !== i && void 0 !== i || (t = JSON.parse(JSON.stringify(t)));
    var o = Math.pow(10, n);
    return w(t, function (t) {
        ! function (t, e, n) {
          t.length > n && t.splice(n, t.length);
          for (var r = 0; r < t.length; r++)
            t[r] = Math.round(t[r] * e) / e
        }(t, o, r)
      }),
      t
  }

  function mn(t, e) {
    if (!t || !e)
      return !1;
    if (t.length !== e.length)
      return !1;
    for (var n = 0, r = t.length; n < r; n++)
      if (t[n] instanceof Array && e[n] instanceof Array) {
        if (!mn(t[n], e[n]))
          return !1
      } else if (t[n] !== e[n])
      return !1;
    return !0
  }

  function vn(t, e) {
    if (void 0 === e && (e = !0),
      3 != t.length)
      throw new Error("This function requires an array of three points [x,y]");
    return 0 <= (t[1][0] - t[0][0]) * (t[2][1] - t[0][1]) - (t[1][1] - t[0][1]) * (t[2][0] - t[0][0]) == e
  }

  function xn(t, e) {
    if (!t || !e)
      return !1;
    if (t.length != e.length)
      return !1;
    for (var n = 0, r = t.length; n < r; n++)
      if (t[n] instanceof Array && e[n] instanceof Array) {
        if (!xn(t[n], e[n]))
          return !1
      } else if (t[n] != e[n])
      return !1;
    return !0
  }

  function En(r, t) {
    var i = [],
      o = ke();
    return L(t, function (t) {
        if (i.forEach(function (t, e) {
            t.id = e
          }),
          i.length) {
          var e = o.search(t);
          if (e.features.length) {
            var n = bn(t, e);
            i = i.filter(function (t) {
                return t.id !== n.id
              }),
              o.remove(n),
              I(wn(n, t), function (t) {
                i.push(t),
                  o.insert(t)
              })
          }
        } else
          (i = wn(r, t).features).forEach(function (t) {
            t.bbox || (t.bbox = ne(V(t)))
          }),
          o.load(X(i))
      }),
      X(i)
  }

  function wn(t, o) {
    var s = [],
      e = D(t)[0],
      n = D(t)[t.geometry.coordinates.length - 1];
    if (In(e, H(o)) || In(n, H(o)))
      return X([t]);
    var r = ke(),
      i = Xe(t);
    r.load(i);
    var a = r.search(o);
    if (!a.features.length)
      return X([t]);
    var u = bn(o, a),
      c = N(i, function (t, e, n) {
        var r = D(e)[1],
          i = H(o);
        return n === u.id ? (t.push(i),
          s.push(j(t)),
          In(i, r) ? [i] : [i, r]) : (t.push(r),
          t)
      }, [e]);
    return 1 < c.length && s.push(j(c)),
      X(s)
  }

  function bn(n, t) {
    if (!t.features.length)
      throw new Error("lines must contain features");
    if (1 === t.features.length)
      return t.features[0];
    var r, i = 1 / 0;
    return I(t, function (t) {
        var e = Ve(t, n).properties.dist;
        e < i && (r = t,
          i = e)
      }),
      r
  }

  function In(t, e) {
    return t[0] === e[0] && t[1] === e[1]
  }

  function Nn(t, e, n, r, i) {
    if (!Y(i = i || {}))
      throw new Error("options is invalid");
    var o = i.steps,
      s = i.units;
    if (!t)
      throw new Error("center is required");
    if (!e)
      throw new Error("radius is required");
    if (null == n)
      throw new Error("bearing1 is required");
    if (null == r)
      throw new Error("bearing2 is required");
    if ("object" != typeof i)
      throw new Error("options must be an object");
    o = o || 64;
    var a = Cn(n),
      u = Cn(r),
      c = t.properties;
    if (a === u)
      return j(ie(t, e, i).geometry.coordinates[0], c);
    for (var h = a, l = a < u ? u : u + 360, p = h, f = [], g = 0; p < l;)
      f.push(re(t, e, p, s).geometry.coordinates),
      p = h + 360 * ++g / o;
    return l < p && f.push(re(t, e, l, s).geometry.coordinates),
      j(f, c)
  }

  function Cn(t) {
    var e = t % 360;
    return e < 0 && (e += 360),
      e
  }

  function Sn(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.properties,
      r = K(t),
      i = D(t);
    if (n = n || t.properties || {},
      !i.length)
      throw new Error("polygon must contain coordinates");
    switch (r) {
      case "Polygon":
        return Mn(i, n);
      case "MultiPolygon":
        var o = [];
        return i.forEach(function (t) {
            o.push(Mn(t, n))
          }),
          X(o);
      default:
        throw new Error("geom " + r + " not supported")
    }
  }

  function Mn(t, e) {
    return 1 < t.length ? v(t, e) : j(t[0], e)
  }

  function Ln(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.properties,
      r = e.autoComplete,
      i = e.orderCoords;
    if (!t)
      throw new Error("lines is required");
    switch (r = void 0 === r || r,
      i = void 0 === i || i,
      K(t)) {
      case "FeatureCollection":
      case "GeometryCollection":
        var o = [];
        return (t.features ? t.features : t.geometries).forEach(function (t) {
            o.push(D(Pn(t, {}, r, i)))
          }),
          x(o, n)
    }
    return Pn(t, n, r, i)
  }

  function Pn(t, e, a, u) {
    e = e || t.properties || {};
    var n = D(t),
      r = K(t);
    if (!n.length)
      throw new Error("line must contain coordinates");
    switch (r) {
      case "LineString":
        return a && (n = On(n)),
          z([n], e);
      case "MultiLineString":
        var c = [],
          h = 0;
        return n.forEach(function (t) {
            if (a && (t = On(t)),
              u) {
              var e = (n = V(j(t)),
                r = n[0],
                i = n[1],
                o = n[2],
                s = n[3],
                Math.abs(r - o) * Math.abs(i - s));
              h < e ? (c.unshift(t),
                h = e) : c.push(t)
            } else
              c.push(t);
            var n, r, i, o, s
          }),
          z(c, e);
      default:
        throw new Error("geometry type " + r + " is not supported")
    }
  }

  function On(t) {
    var e = t[0],
      n = e[0],
      r = e[1],
      i = t[t.length - 1],
      o = i[0],
      s = i[1];
    return n === o && r === s || t.push(e),
      t
  }

  function Rn(t, e, n) {
    var r, i, o, s, a, u = t.length,
      c = An(t[0], e),
      h = [];
    for (n || (n = []),
      r = 1; r < u; r++) {
      for (i = t[r - 1],
        s = a = An(o = t[r], e);;) {
        if (!(c | s)) {
          h.push(i),
            s !== a ? (h.push(o),
              r < u - 1 && (n.push(h),
                h = [])) : r === u - 1 && h.push(o);
          break
        }
        if (c & s)
          break;
        c ? c = An(i = Tn(i, o, c, e), e) : s = An(o = Tn(i, o, s, e), e)
      }
      c = a
    }
    return h.length && n.push(h),
      n
  }

  function Tn(t, e, n, r) {
    return 8 & n ? [t[0] + (e[0] - t[0]) * (r[3] - t[1]) / (e[1] - t[1]), r[3]] : 4 & n ? [t[0] + (e[0] - t[0]) * (r[1] - t[1]) / (e[1] - t[1]), r[1]] : 2 & n ? [r[2], t[1] + (e[1] - t[1]) * (r[2] - t[0]) / (e[0] - t[0])] : 1 & n ? [r[0], t[1] + (e[1] - t[1]) * (r[0] - t[0]) / (e[0] - t[0])] : null
  }

  function An(t, e) {
    var n = 0;
    return t[0] < e[0] ? n |= 1 : t[0] > e[2] && (n |= 2),
      t[1] < e[1] ? n |= 4 : t[1] > e[3] && (n |= 8),
      n
  }

  function Dn(t, e) {
    for (var n = [], r = 0; r < t.length; r++) {
      var i = os.polygon(t[r], e);
      0 < i.length && (i[0][0] === i[i.length - 1][0] && i[0][1] === i[i.length - 1][1] || i.push(i[0]),
        4 <= i.length && n.push(i))
    }
    return n
  }

  function Fn(t) {
    return "[object Arguments]" === Object.prototype.toString.call(t)
  }

  function qn(t, e, n) {
    return n || (n = {}),
      t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? (n.strict,
        t === e) : function (t, e, n) {
        var r, i;
        if (Gn(t) || Gn(e))
          return !1;
        if (t.prototype !== e.prototype)
          return !1;
        if (Fn(t))
          return !!Fn(e) && qn(t = ss.call(t), e = ss.call(e), n);
        if (Bn(t)) {
          if (!Bn(e))
            return !1;
          if (t.length !== e.length)
            return !1;
          for (r = 0; r < t.length; r++)
            if (t[r] !== e[r])
              return !1;
          return !0
        }
        try {
          var o = Object.keys(t),
            s = Object.keys(e)
        } catch (t) {
          return !1
        }
        if (o.length !== s.length)
          return !1;
        for (o.sort(),
          s.sort(),
          r = o.length - 1; 0 <= r; r--)
          if (o[r] !== s[r])
            return !1;
        for (r = o.length - 1; 0 <= r; r--)
          if (!qn(t[i = o[r]], e[i], n))
            return !1;
        return typeof t == typeof e
      }(t, e, n))
  }

  function Gn(t) {
    return null == t
  }

  function Bn(t) {
    return !(!t || "object" != typeof t || "number" != typeof t.length || "function" != typeof t.copy || "function" != typeof t.slice || 0 < t.length && "number" != typeof t[0])
  }

  function kn(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var o, s = n.tolerance || 0,
      a = [],
      u = ke();
    return u.load(Xe(t)),
      O(e, function (r) {
        var i = !1;
        I(u.search(r), function (t) {
            if (!1 === i) {
              var e = D(r).sort(),
                n = D(t).sort();
              qn(e, n) ? (i = !0,
                o = o ? zn(o, r) : r) : (0 === s ? pn(e[0], t) && pn(e[1], t) : Ve(t, e[0]).properties.dist <= s && Ve(t, e[1]).properties.dist <= s) ? (i = !0,
                o = o ? zn(o, r) : r) : (0 === s ? pn(n[0], r) && pn(n[1], r) : Ve(r, n[0]).properties.dist <= s && Ve(r, n[1]).properties.dist <= s) && (o = o ? zn(o, t) : t)
            }
          }),
          !1 === i && o && (a.push(o),
            o = void 0)
      }),
      o && a.push(o),
      X(a)
  }

  function zn(t, e) {
    var n = D(e),
      r = D(t),
      i = r[0],
      o = r[r.length - 1],
      s = t.geometry.coordinates;
    return qn(n[0], i) ? s.unshift(n[1]) : qn(n[0], o) ? s.push(n[1]) : qn(n[1], i) ? s.unshift(n[0]) : qn(n[1], o) && s.push(n[0]),
      t
  }

  function jn(t) {
    var e = t % 360;
    return e < 0 && (e += 360),
      e
  }

  function Xn(t, e, n, r) {
    if (!Y(r = r || {}))
      throw new Error("options is invalid");
    var i = r.units,
      o = r.properties;
    if (!t)
      throw new Error("origin is required");
    if (null == e)
      throw new Error("distance is required");
    if (null == n)
      throw new Error("bearing is required");
    if (!(0 <= e))
      throw new Error("distance must be greater than 0");
    var p = c(e, i, "meters"),
      s = H(t),
      a = function (t, e, n, r) {
        var i = p / (r = void 0 === r ? lo : Number(r)),
          o = t[0] * Math.PI / 180,
          s = m(t[1]),
          a = m(n),
          u = i * Math.cos(a),
          c = s + u;
        Math.abs(c) > Math.PI / 2 && (c = 0 < c ? Math.PI - c : -Math.PI - c);
        var h = Math.log(Math.tan(c / 2 + Math.PI / 4) / Math.tan(s / 2 + Math.PI / 4)),
          l = 1e-11 < Math.abs(h) ? u / h : Math.cos(s);
        return [(180 * (o + i * Math.sin(a) / l) / Math.PI + 540) % 360 - 180, 180 * c / Math.PI]
      }(s, 0, n);
    return a[0] += 180 < a[0] - s[0] ? -360 : 180 < s[0] - a[0] ? 360 : 0,
      k(a, o)
  }

  function Un(t, e, n, r, i, o) {
    for (var s = 0; s < t.length; s++) {
      var a = t[s],
        u = t[s + 1];
      s === t.length - 1 && (u = t[0]),
        r = Yn(a, u, e),
        n <= 0 && 0 < r ? Yn(e, a, i) < 0 || (i = a) : 0 < n && r <= 0 && (0 < Yn(e, a, o) || (o = a)),
        n = r
    }
    return [i, o]
  }

  function Yn(t, e, n) {
    return (e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1])
  }

  function Vn(t) {
    if (!t)
      throw new Error("line is required");
    var e = t.geometry ? t.geometry.type : t.type;
    if (!Array.isArray(t) && "LineString" !== e)
      throw new Error("geometry must be a LineString");
    for (var n, r, i = D(t), o = 0, s = 1; s < i.length;)
      n = r || i[0],
      o += ((r = i[s])[0] - n[0]) * (r[1] + n[1]),
      s++;
    return 0 < o
  }

  function Hn(t, e) {
    switch ("Feature" === t.type ? t.geometry.type : t.type) {
      case "GeometryCollection":
        return S(t, function (t) {
            Hn(t, e)
          }),
          t;
      case "LineString":
        return Wn(D(t), e),
          t;
      case "Polygon":
        return Jn(D(t), e),
          t;
      case "MultiLineString":
        return D(t).forEach(function (t) {
            Wn(t, e)
          }),
          t;
      case "MultiPolygon":
        return D(t).forEach(function (t) {
            Jn(t, e)
          }),
          t;
      case "Point":
      case "MultiPoint":
        return t
    }
  }

  function Wn(t, e) {
    Vn(t) === e && t.reverse()
  }

  function Jn(t, e) {
    Vn(t[0]) !== e && t[0].reverse();
    for (var n = 1; n < t.length; n++)
      Vn(t[n]) === e && t[n].reverse()
  }

  function Zn(t, e, n, r) {
    r = r || {};
    for (var i = Object.keys(as), o = 0; o < i.length; o++) {
      var s = i[o],
        a = r[s];
      a = null != a ? a : as[s],
        us[s] = a
    }
    us.verbose && console.log("MarchingSquaresJS-isoBands: computing isobands for [" + e + ":" + (e + n) + "]");
    var u, c, h, l = function (t, e, n) {
      for (var r = t.length - 1, i = t[0].length - 1, o = {
          rows: r,
          cols: i,
          cells: []
        }, s = e + Math.abs(n), a = 0; a < r; ++a) {
        o.cells[a] = [];
        for (var u = 0; u < i; ++u) {
          var c = 0,
            h = t[a + 1][u],
            l = t[a + 1][u + 1],
            p = t[a][u + 1],
            f = t[a][u];
          if (!(isNaN(h) || isNaN(l) || isNaN(p) || isNaN(f))) {
            c |= h < e ? 0 : s < h ? 128 : 64,
              c |= l < e ? 0 : s < l ? 32 : 16,
              c |= p < e ? 0 : s < p ? 8 : 4;
            var g = +(c |= f < e ? 0 : s < f ? 2 : 1),
              d = 0;
            if (17 === c || 18 === c || 33 === c || 34 === c || 38 === c || 68 === c || 72 === c || 98 === c || 102 === c || 132 === c || 136 === c || 137 === c || 152 === c || 153 === c) {
              var y = (h + l + p + f) / 4;
              d = s < y ? 2 : y < e ? 0 : 1,
                34 === c ? 1 === d ? c = 35 : 0 === d && (c = 136) : 136 === c ? 1 === d ? (c = 35,
                  d = 4) : 0 === d && (c = 34) : 17 === c ? 1 === d ? (c = 155,
                  d = 4) : 0 === d && (c = 153) : 68 === c ? 1 === d ? (c = 103,
                  d = 4) : 0 === d && (c = 102) : 153 === c ? 1 === d && (c = 155) : 102 === c ? 1 === d && (c = 103) : 152 === c ? d < 2 && (c = 156,
                  d = 1) : 137 === c ? d < 2 && (c = 139,
                  d = 1) : 98 === c ? d < 2 && (c = 99,
                  d = 1) : 38 === c ? d < 2 && (c = 39,
                  d = 1) : 18 === c ? 0 < d ? (c = 156,
                  d = 4) : c = 152 : 33 === c ? 0 < d ? (c = 139,
                  d = 4) : c = 137 : 72 === c ? 0 < d ? (c = 99,
                  d = 4) : c = 98 : 132 === c && (0 < d ? (c = 39,
                  d = 4) : c = 38)
            }
            if (0 != c && 170 != c) {
              var _, m, v, x, E, w, b, I;
              _ = m = v = x = E = w = b = I = .5;
              var N = [];
              1 === c ? (v = 1 - Kn(e, p, f),
                  I = 1 - Kn(e, h, f),
                  N.push(Ws[c])) : 169 === c ? (v = Kn(s, f, p),
                  I = Kn(s, f, h),
                  N.push(Ws[c])) : 4 === c ? (w = 1 - Kn(e, l, p),
                  x = Kn(e, f, p),
                  N.push(Vs[c])) : 166 === c ? (w = Kn(s, p, l),
                  x = 1 - Kn(s, p, f),
                  N.push(Vs[c])) : 16 === c ? (E = Kn(e, p, l),
                  m = Kn(e, h, l),
                  N.push(Ys[c])) : 154 === c ? (E = 1 - Kn(s, l, p),
                  m = 1 - Kn(s, l, h),
                  N.push(Ys[c])) : 64 === c ? (b = Kn(e, f, h),
                  _ = 1 - Kn(e, l, h),
                  N.push(Zs[c])) : 106 === c ? (b = 1 - Kn(s, h, f),
                  _ = Kn(s, h, l),
                  N.push(Zs[c])) : 168 === c ? (x = Kn(s, f, p),
                  v = Kn(e, f, p),
                  I = Kn(e, f, h),
                  b = Kn(s, f, h),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 2 === c ? (x = 1 - Kn(e, p, f),
                  v = 1 - Kn(s, p, f),
                  I = 1 - Kn(s, h, f),
                  b = 1 - Kn(e, h, f),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 162 === c ? (E = Kn(s, p, l),
                  w = Kn(e, p, l),
                  x = 1 - Kn(e, p, f),
                  v = 1 - Kn(s, p, f),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 8 === c ? (E = 1 - Kn(e, l, p),
                  w = 1 - Kn(s, l, p),
                  x = Kn(s, f, p),
                  v = Kn(e, f, p),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 138 === c ? (E = 1 - Kn(e, l, p),
                  w = 1 - Kn(s, l, p),
                  _ = 1 - Kn(s, l, h),
                  m = 1 - Kn(e, l, h),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 32 === c ? (E = Kn(s, p, l),
                  w = Kn(e, p, l),
                  _ = Kn(e, h, l),
                  m = Kn(s, h, l),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 42 === c ? (I = 1 - Kn(s, h, f),
                  b = 1 - Kn(e, h, f),
                  _ = Kn(e, h, l),
                  m = Kn(s, h, l),
                  N.push(Js[c]),
                  N.push(Zs[c])) : 128 === c && (I = Kn(e, f, h),
                  b = Kn(s, f, h),
                  _ = 1 - Kn(s, l, h),
                  m = 1 - Kn(e, l, h),
                  N.push(Js[c]),
                  N.push(Zs[c])),
                5 === c ? (w = 1 - Kn(e, l, p),
                  I = 1 - Kn(e, h, f),
                  N.push(Vs[c])) : 165 === c ? (w = Kn(s, p, l),
                  I = Kn(s, f, h),
                  N.push(Vs[c])) : 20 === c ? (x = Kn(e, f, p),
                  m = Kn(e, h, l),
                  N.push(Hs[c])) : 150 === c ? (x = 1 - Kn(s, p, f),
                  m = 1 - Kn(s, l, h),
                  N.push(Hs[c])) : 80 === c ? (E = Kn(e, p, l),
                  b = Kn(e, f, h),
                  N.push(Ys[c])) : 90 === c ? (E = 1 - Kn(s, l, p),
                  b = 1 - Kn(s, h, f),
                  N.push(Ys[c])) : 65 === c ? (v = 1 - Kn(e, p, f),
                  _ = 1 - Kn(e, l, h),
                  N.push(Ws[c])) : 105 === c ? (v = Kn(s, f, p),
                  _ = Kn(s, h, l),
                  N.push(Ws[c])) : 160 === c ? (E = Kn(s, p, l),
                  w = Kn(e, p, l),
                  I = Kn(e, f, h),
                  b = Kn(s, f, h),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 10 === c ? (E = 1 - Kn(e, l, p),
                  w = 1 - Kn(s, l, p),
                  I = 1 - Kn(s, h, f),
                  b = 1 - Kn(e, h, f),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 130 === c ? (x = 1 - Kn(e, p, f),
                  v = 1 - Kn(s, p, f),
                  _ = 1 - Kn(s, l, h),
                  m = 1 - Kn(e, l, h),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 40 === c ? (x = Kn(s, f, p),
                  v = Kn(e, f, p),
                  _ = Kn(e, h, l),
                  m = Kn(s, h, l),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 101 === c ? (w = Kn(s, p, l),
                  _ = Kn(s, h, l),
                  N.push(Vs[c])) : 69 === c ? (w = 1 - Kn(e, l, p),
                  _ = 1 - Kn(e, l, h),
                  N.push(Vs[c])) : 149 === c ? (I = Kn(s, f, h),
                  m = 1 - Kn(s, l, h),
                  N.push(Js[c])) : 21 === c ? (I = 1 - Kn(e, h, f),
                  m = Kn(e, h, l),
                  N.push(Js[c])) : 86 === c ? (x = 1 - Kn(s, p, f),
                  b = 1 - Kn(s, h, f),
                  N.push(Hs[c])) : 84 === c ? (x = Kn(e, f, p),
                  b = Kn(e, f, h),
                  N.push(Hs[c])) : 89 === c ? (E = 1 - Kn(s, l, p),
                  v = Kn(s, f, p),
                  N.push(Ws[c])) : 81 === c ? (E = Kn(e, p, l),
                  v = 1 - Kn(e, p, f),
                  N.push(Ws[c])) : 96 === c ? (E = Kn(s, p, l),
                  w = Kn(e, p, l),
                  b = Kn(e, f, h),
                  _ = Kn(s, h, l),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 74 === c ? (E = 1 - Kn(e, l, p),
                  w = 1 - Kn(s, l, p),
                  b = 1 - Kn(s, h, f),
                  _ = 1 - Kn(e, l, h),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 24 === c ? (E = 1 - Kn(s, l, p),
                  x = Kn(s, f, p),
                  v = Kn(e, f, p),
                  m = Kn(e, h, l),
                  N.push(Ys[c]),
                  N.push(Ws[c])) : 146 === c ? (E = Kn(e, p, l),
                  x = 1 - Kn(e, p, f),
                  v = 1 - Kn(s, p, f),
                  m = 1 - Kn(s, l, h),
                  N.push(Ys[c]),
                  N.push(Ws[c])) : 6 === c ? (w = 1 - Kn(e, l, p),
                  x = 1 - Kn(s, p, f),
                  I = 1 - Kn(s, h, f),
                  b = 1 - Kn(e, h, f),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 164 === c ? (w = Kn(s, p, l),
                  x = Kn(e, f, p),
                  I = Kn(e, f, h),
                  b = Kn(s, f, h),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 129 === c ? (v = 1 - Kn(e, p, f),
                  I = Kn(s, f, h),
                  _ = 1 - Kn(s, l, h),
                  m = 1 - Kn(e, l, h),
                  N.push(Ws[c]),
                  N.push(Js[c])) : 41 === c ? (v = Kn(s, f, p),
                  I = 1 - Kn(e, h, f),
                  _ = Kn(e, h, l),
                  m = Kn(s, h, l),
                  N.push(Ws[c]),
                  N.push(Js[c])) : 66 === c ? (x = 1 - Kn(e, p, f),
                  v = 1 - Kn(s, p, f),
                  b = 1 - Kn(s, h, f),
                  _ = 1 - Kn(e, l, h),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 104 === c ? (x = Kn(s, f, p),
                  v = Kn(e, f, p),
                  b = Kn(e, f, h),
                  _ = Kn(s, h, l),
                  N.push(Ws[c]),
                  N.push(Ks[c])) : 144 === c ? (E = Kn(e, p, l),
                  I = Kn(e, f, h),
                  b = Kn(s, f, h),
                  m = 1 - Kn(s, l, h),
                  N.push(Ys[c]),
                  N.push(Zs[c])) : 26 === c ? (E = 1 - Kn(s, l, p),
                  I = 1 - Kn(s, h, f),
                  b = 1 - Kn(e, h, f),
                  m = Kn(e, h, l),
                  N.push(Ys[c]),
                  N.push(Zs[c])) : 36 === c ? (w = Kn(s, p, l),
                  x = Kn(e, f, p),
                  _ = Kn(e, h, l),
                  m = Kn(s, h, l),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 134 === c ? (w = 1 - Kn(e, l, p),
                  x = 1 - Kn(s, p, f),
                  _ = 1 - Kn(s, l, h),
                  m = 1 - Kn(e, l, h),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 9 === c ? (E = 1 - Kn(e, l, p),
                  w = 1 - Kn(s, l, p),
                  v = Kn(s, f, p),
                  I = 1 - Kn(e, h, f),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 161 === c ? (E = Kn(s, p, l),
                  w = Kn(e, p, l),
                  v = 1 - Kn(e, p, f),
                  I = Kn(s, f, h),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 37 === c ? (w = Kn(s, p, l),
                  I = 1 - Kn(e, h, f),
                  _ = Kn(e, h, l),
                  m = Kn(s, h, l),
                  N.push(Vs[c]),
                  N.push(Js[c])) : 133 === c ? (w = 1 - Kn(e, l, p),
                  I = Kn(s, f, h),
                  _ = 1 - Kn(s, l, h),
                  m = 1 - Kn(e, l, h),
                  N.push(Vs[c]),
                  N.push(Js[c])) : 148 === c ? (x = Kn(e, f, p),
                  I = Kn(e, f, h),
                  b = Kn(s, f, h),
                  m = 1 - Kn(s, l, h),
                  N.push(Hs[c]),
                  N.push(Zs[c])) : 22 === c ? (x = 1 - Kn(s, p, f),
                  I = 1 - Kn(s, h, f),
                  b = 1 - Kn(e, h, f),
                  m = Kn(e, h, l),
                  N.push(Hs[c]),
                  N.push(Zs[c])) : 82 === c ? (E = Kn(e, p, l),
                  x = 1 - Kn(e, p, f),
                  v = 1 - Kn(s, p, f),
                  b = 1 - Kn(s, h, f),
                  N.push(Ys[c]),
                  N.push(Ws[c])) : 88 === c ? (E = 1 - Kn(s, l, p),
                  x = Kn(s, f, p),
                  v = Kn(e, f, p),
                  b = Kn(e, f, h),
                  N.push(Ys[c]),
                  N.push(Ws[c])) : 73 === c ? (E = 1 - Kn(e, l, p),
                  w = 1 - Kn(s, l, p),
                  v = Kn(s, f, p),
                  _ = 1 - Kn(e, l, h),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 97 === c ? (E = Kn(s, p, l),
                  w = Kn(e, p, l),
                  v = 1 - Kn(e, p, f),
                  _ = Kn(s, h, l),
                  N.push(Ys[c]),
                  N.push(Vs[c])) : 145 === c ? (E = Kn(e, p, l),
                  v = 1 - Kn(e, p, f),
                  I = Kn(s, f, h),
                  m = 1 - Kn(s, l, h),
                  N.push(Ys[c]),
                  N.push(Js[c])) : 25 === c ? (E = 1 - Kn(s, l, p),
                  v = Kn(s, f, p),
                  I = 1 - Kn(e, h, f),
                  m = Kn(e, h, l),
                  N.push(Ys[c]),
                  N.push(Js[c])) : 70 === c ? (w = 1 - Kn(e, l, p),
                  x = 1 - Kn(s, p, f),
                  b = 1 - Kn(s, h, f),
                  _ = 1 - Kn(e, l, h),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 100 === c ? (w = Kn(s, p, l),
                  x = Kn(e, f, p),
                  b = Kn(e, f, h),
                  _ = Kn(s, h, l),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 34 === c ? (m = 0 === d ? (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)) : (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Js[c]),
                  N.push(Zs[c])) : 35 === c ? (m = 4 === d ? (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)) : (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Ws[c]),
                  N.push(Zs[c])) : 136 === c ? (m = 0 === d ? (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)) : (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Js[c]),
                  N.push(Zs[c])) : 153 === c ? (m = 0 === d ? (E = Kn(e, p, l),
                    v = 1 - Kn(e, p, f),
                    I = 1 - Kn(e, h, f),
                    Kn(e, h, l)) : (E = 1 - Kn(s, l, p),
                    v = Kn(s, f, p),
                    I = Kn(s, f, h),
                    1 - Kn(s, l, h)),
                  N.push(Ys[c]),
                  N.push(Ws[c])) : 102 === c ? (_ = 0 === d ? (w = 1 - Kn(e, l, p),
                    x = Kn(e, f, p),
                    b = Kn(e, f, h),
                    1 - Kn(e, l, h)) : (w = Kn(s, p, l),
                    x = 1 - Kn(s, p, f),
                    b = 1 - Kn(s, h, f),
                    Kn(s, h, l)),
                  N.push(Vs[c]),
                  N.push(Zs[c])) : 155 === c ? (m = 4 === d ? (E = Kn(e, p, l),
                    v = 1 - Kn(e, p, f),
                    I = 1 - Kn(e, h, f),
                    Kn(e, h, l)) : (E = 1 - Kn(s, l, p),
                    v = Kn(s, f, p),
                    I = Kn(s, f, h),
                    1 - Kn(s, l, h)),
                  N.push(Ys[c]),
                  N.push(Js[c])) : 103 === c ? (_ = 4 === d ? (w = 1 - Kn(e, l, p),
                    x = Kn(e, f, p),
                    b = Kn(e, f, h),
                    1 - Kn(e, l, h)) : (w = Kn(s, p, l),
                    x = 1 - Kn(s, p, f),
                    b = 1 - Kn(s, h, f),
                    Kn(s, h, l)),
                  N.push(Vs[c]),
                  N.push(Hs[c])) : 152 === c ? (m = 0 === d ? (E = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    Kn(e, h, l)) : (E = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    1 - Kn(s, l, h)),
                  N.push(Ys[c]),
                  N.push(Hs[c]),
                  N.push(Ws[c])) : 156 === c ? (m = 4 === d ? (E = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    Kn(e, h, l)) : (E = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    1 - Kn(s, l, h)),
                  N.push(Ys[c]),
                  N.push(Ws[c]),
                  N.push(Zs[c])) : 137 === c ? (m = 0 === d ? (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    v = 1 - Kn(e, p, f),
                    I = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)) : (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    v = Kn(s, f, p),
                    I = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Ws[c])) : 139 === c ? (m = 4 === d ? (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    v = 1 - Kn(e, p, f),
                    I = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)) : (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    v = Kn(s, f, p),
                    I = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Js[c])) : 98 === c ? (_ = 0 === d ? (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    b = Kn(e, f, h),
                    1 - Kn(e, l, h)) : (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    b = 1 - Kn(s, h, f),
                    Kn(s, h, l)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Zs[c])) : 99 === c ? (_ = 4 === d ? (E = 1 - Kn(e, l, p),
                    w = 1 - Kn(s, l, p),
                    x = Kn(s, f, p),
                    v = Kn(e, f, p),
                    b = Kn(e, f, h),
                    1 - Kn(e, l, h)) : (E = Kn(s, p, l),
                    w = Kn(e, p, l),
                    x = 1 - Kn(e, p, f),
                    v = 1 - Kn(s, p, f),
                    b = 1 - Kn(s, h, f),
                    Kn(s, h, l)),
                  N.push(Ys[c]),
                  N.push(Vs[c]),
                  N.push(Ws[c])) : 38 === c ? (m = 0 === d ? (w = 1 - Kn(e, l, p),
                    x = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)) : (w = Kn(s, p, l),
                    x = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)),
                  N.push(Vs[c]),
                  N.push(Js[c]),
                  N.push(Zs[c])) : 39 === c ? (m = 4 === d ? (w = 1 - Kn(e, l, p),
                    x = Kn(e, f, p),
                    I = Kn(e, f, h),
                    b = Kn(s, f, h),
                    _ = 1 - Kn(s, l, h),
                    1 - Kn(e, l, h)) : (w = Kn(s, p, l),
                    x = 1 - Kn(s, p, f),
                    I = 1 - Kn(s, h, f),
                    b = 1 - Kn(e, h, f),
                    _ = Kn(e, h, l),
                    Kn(s, h, l)),
                  N.push(Vs[c]),
                  N.push(Hs[c]),
                  N.push(Zs[c])) : 85 === c && (_ = I = v = w = 0,
                  m = b = x = E = 1),
                (_ < 0 || 1 < _ || m < 0 || 1 < m || E < 0 || 1 < E || x < 0 || 1 < x || I < 0 || 1 < I || b < 0 || 1 < b) && console.log("MarchingSquaresJS-isoBands: " + c + " " + g + " " + h + "," + l + "," + p + "," + f + " " + d + " " + _ + " " + m + " " + E + " " + w + " " + x + " " + v + " " + I + " " + b),
                o.cells[a][u] = {
                  cval: c,
                  cval_real: g,
                  flipped: d,
                  topleft: _,
                  topright: m,
                  righttop: E,
                  rightbottom: w,
                  bottomright: x,
                  bottomleft: v,
                  leftbottom: I,
                  lefttop: b,
                  edges: N
                }
            }
          }
        }
      }
      return o
    }(t, e, n);
    return u = us.polygons ? (us.verbose && console.log("MarchingSquaresJS-isoBands: returning single polygons for each grid cell"),
        c = [],
        h = 0,
        l.cells.forEach(function (t, r) {
          t.forEach(function (t, e) {
            if (void 0 !== t) {
              var n = $s[t.cval](t);
              "object" == typeof n && Qn(n) ? "object" == typeof n[0] && Qn(n[0]) ? "object" == typeof n[0][0] && Qn(n[0][0]) ? n.forEach(function (t) {
                t.forEach(function (t) {
                    t[0] += e,
                      t[1] += r
                  }),
                  c[h++] = t
              }) : (n.forEach(function (t) {
                  t[0] += e,
                    t[1] += r
                }),
                c[h++] = n) : console.log("MarchingSquaresJS-isoBands: bandcell polygon with malformed coordinates") : console.log("MarchingSquaresJS-isoBands: bandcell polygon with null coordinates")
            }
          })
        }),
        c) : (us.verbose && console.log("MarchingSquaresJS-isoBands: returning polygon paths for entire data grid"),
        function (t) {
          for (var e = [], n = t.rows, r = t.cols, i = [], o = 0; o < n; o++)
            for (var s = 0; s < r; s++)
              if (void 0 !== t.cells[o][s] && 0 < t.cells[o][s].edges.length) {
                var a = function (t) {
                    if (0 < t.edges.length) {
                      var e = t.edges[t.edges.length - 1],
                        n = t.cval_real;
                      switch (e) {
                        case 0:
                          return n & hs ? {
                            p: [1, t.righttop],
                            x: -1,
                            y: 0,
                            o: 1
                          } : {
                            p: [t.topleft, 1],
                            x: 0,
                            y: -1,
                            o: 0
                          };
                        case 1:
                          return n & ls ? {
                            p: [t.topleft, 1],
                            x: 0,
                            y: -1,
                            o: 0
                          } : {
                            p: [1, t.rightbottom],
                            x: -1,
                            y: 0,
                            o: 0
                          };
                        case 2:
                          return n & ls ? {
                            p: [t.bottomright, 0],
                            x: 0,
                            y: 1,
                            o: 1
                          } : {
                            p: [t.topleft, 1],
                            x: 0,
                            y: -1,
                            o: 0
                          };
                        case 3:
                          return n & ps ? {
                            p: [t.topleft, 1],
                            x: 0,
                            y: -1,
                            o: 0
                          } : {
                            p: [t.bottomleft, 0],
                            x: 0,
                            y: 1,
                            o: 0
                          };
                        case 4:
                          return n & hs ? {
                            p: [1, t.righttop],
                            x: -1,
                            y: 0,
                            o: 1
                          } : {
                            p: [t.topright, 1],
                            x: 0,
                            y: -1,
                            o: 1
                          };
                        case 5:
                          return n & ls ? {
                            p: [t.topright, 1],
                            x: 0,
                            y: -1,
                            o: 1
                          } : {
                            p: [1, t.rightbottom],
                            x: -1,
                            y: 0,
                            o: 0
                          };
                        case 6:
                          return n & ls ? {
                            p: [t.bottomright, 0],
                            x: 0,
                            y: 1,
                            o: 1
                          } : {
                            p: [t.topright, 1],
                            x: 0,
                            y: -1,
                            o: 1
                          };
                        case 7:
                          return n & ps ? {
                            p: [t.topright, 1],
                            x: 0,
                            y: -1,
                            o: 1
                          } : {
                            p: [t.bottomleft, 0],
                            x: 0,
                            y: 1,
                            o: 0
                          };
                        case 8:
                          return n & ls ? {
                            p: [t.bottomright, 0],
                            x: 0,
                            y: 1,
                            o: 1
                          } : {
                            p: [1, t.righttop],
                            x: -1,
                            y: 0,
                            o: 1
                          };
                        case 9:
                          return n & ps ? {
                            p: [1, t.righttop],
                            x: -1,
                            y: 0,
                            o: 1
                          } : {
                            p: [t.bottomleft, 0],
                            x: 0,
                            y: 1,
                            o: 0
                          };
                        case 10:
                          return n & ps ? {
                            p: [0, t.leftbottom],
                            x: 1,
                            y: 0,
                            o: 0
                          } : {
                            p: [1, t.righttop],
                            x: -1,
                            y: 0,
                            o: 1
                          };
                        case 11:
                          return n & cs ? {
                            p: [1, t.righttop],
                            x: -1,
                            y: 0,
                            o: 1
                          } : {
                            p: [0, t.lefttop],
                            x: 1,
                            y: 0,
                            o: 1
                          };
                        case 12:
                          return n & ls ? {
                            p: [t.bottomright, 0],
                            x: 0,
                            y: 1,
                            o: 1
                          } : {
                            p: [1, t.rightbottom],
                            x: -1,
                            y: 0,
                            o: 0
                          };
                        case 13:
                          return n & ps ? {
                            p: [1, t.rightbottom],
                            x: -1,
                            y: 0,
                            o: 0
                          } : {
                            p: [t.bottomleft, 0],
                            x: 0,
                            y: 1,
                            o: 0
                          };
                        case 14:
                          return n & ps ? {
                            p: [0, t.leftbottom],
                            x: 1,
                            y: 0,
                            o: 0
                          } : {
                            p: [1, t.rightbottom],
                            x: -1,
                            y: 0,
                            o: 0
                          };
                        case 15:
                          return n & cs ? {
                            p: [1, t.rightbottom],
                            x: -1,
                            y: 0,
                            o: 0
                          } : {
                            p: [0, t.lefttop],
                            x: 1,
                            y: 0,
                            o: 1
                          };
                        case 16:
                          return n & ls ? {
                            p: [t.bottomright, 0],
                            x: 0,
                            y: 1,
                            o: 1
                          } : {
                            p: [0, t.leftbottom],
                            x: 1,
                            y: 0,
                            o: 0
                          };
                        case 17:
                          return n & cs ? {
                            p: [t.bottomright, 0],
                            x: 0,
                            y: 1,
                            o: 1
                          } : {
                            p: [0, t.lefttop],
                            x: 1,
                            y: 0,
                            o: 1
                          };
                        case 18:
                          return n & ps ? {
                            p: [0, t.leftbottom],
                            x: 1,
                            y: 0,
                            o: 0
                          } : {
                            p: [t.bottomleft, 0],
                            x: 0,
                            y: 1,
                            o: 0
                          };
                        case 19:
                          return n & cs ? {
                            p: [t.bottomleft, 0],
                            x: 0,
                            y: 1,
                            o: 0
                          } : {
                            p: [0, t.lefttop],
                            x: 1,
                            y: 0,
                            o: 1
                          };
                        case 20:
                          return n & cs ? {
                            p: [t.topleft, 1],
                            x: 0,
                            y: -1,
                            o: 0
                          } : {
                            p: [0, t.leftbottom],
                            x: 1,
                            y: 0,
                            o: 0
                          };
                        case 21:
                          return n & hs ? {
                            p: [0, t.leftbottom],
                            x: 1,
                            y: 0,
                            o: 0
                          } : {
                            p: [t.topright, 1],
                            x: 0,
                            y: -1,
                            o: 1
                          };
                        case 22:
                          return n & cs ? {
                            p: [t.topleft, 1],
                            x: 0,
                            y: -1,
                            o: 0
                          } : {
                            p: [0, t.lefttop],
                            x: 1,
                            y: 0,
                            o: 1
                          };
                        case 23:
                          return n & hs ? {
                            p: [0, t.lefttop],
                            x: 1,
                            y: 0,
                            o: 1
                          } : {
                            p: [t.topright, 1],
                            x: 0,
                            y: -1,
                            o: 1
                          };
                        default:
                          console.log("MarchingSquaresJS-isoBands: edge index out of range!"),
                            console.log(t)
                      }
                    }
                    return null
                  }(t.cells[o][s]),
                  u = null,
                  c = s,
                  h = o;
                null !== a && i.push([a.p[0] + c, a.p[1] + h]);
                do {
                  if (null === (u = function (t, e, n, r) {
                      var i, o, s, a, u, c = t.cval;
                      switch (e) {
                        case -1:
                          switch (r) {
                            case 0:
                              i = Vs[c],
                                s = ws[c],
                                a = bs[c],
                                u = Is[c];
                              break;
                            default:
                              i = Ys[c],
                                s = vs[c],
                                a = xs[c],
                                u = Es[c]
                          }
                          break;
                        case 1:
                          switch (r) {
                            case 0:
                              i = Js[c],
                                s = As[c],
                                a = Ds[c],
                                u = Fs[c];
                              break;
                            default:
                              i = Zs[c],
                                s = Os[c],
                                a = Rs[c],
                                u = Ts[c]
                          }
                          break;
                        default:
                          switch (n) {
                            case -1:
                              switch (r) {
                                case 0:
                                  i = Ks[c],
                                    s = fs[c],
                                    a = gs[c],
                                    u = ds[c];
                                  break;
                                default:
                                  i = Qs[c],
                                    s = ys[c],
                                    a = _s[c],
                                    u = ms[c]
                              }
                              break;
                            case 1:
                              switch (r) {
                                case 0:
                                  i = Ws[c],
                                    s = Ns[c],
                                    a = Cs[c],
                                    u = Ss[c];
                                  break;
                                default:
                                  i = Hs[c],
                                    s = Ms[c],
                                    a = Ls[c],
                                    u = Ps[c]
                              }
                          }
                      }
                      if (o = t.edges.indexOf(i),
                        void 0 === t.edges[o])
                        return null;
                      switch (function (t, e) {
                          delete t.edges[e];
                          for (var n = e + 1; n < t.edges.length; n++)
                            t.edges[n - 1] = t.edges[n];
                          t.edges.pop()
                        }(t, o),
                        c = t.cval_real,
                        i) {
                        case 0:
                          n = c & hs ? (e = t.topleft,
                            1) : (e = 1,
                            t.righttop);
                          break;
                        case 1:
                          n = c & ls ? (e = 1,
                            t.rightbottom) : (e = t.topleft,
                            1);
                          break;
                        case 2:
                          n = c & ls ? (e = t.topleft,
                            1) : (e = t.bottomright,
                            0);
                          break;
                        case 3:
                          n = c & ps ? (e = t.bottomleft,
                            0) : (e = t.topleft,
                            1);
                          break;
                        case 4:
                          n = c & hs ? (e = t.topright,
                            1) : (e = 1,
                            t.righttop);
                          break;
                        case 5:
                          n = c & ls ? (e = 1,
                            t.rightbottom) : (e = t.topright,
                            1);
                          break;
                        case 6:
                          n = c & ls ? (e = t.topright,
                            1) : (e = t.bottomright,
                            0);
                          break;
                        case 7:
                          n = c & ps ? (e = t.bottomleft,
                            0) : (e = t.topright,
                            1);
                          break;
                        case 8:
                          n = c & ls ? (e = 1,
                            t.righttop) : (e = t.bottomright,
                            0);
                          break;
                        case 9:
                          n = c & ps ? (e = t.bottomleft,
                            0) : (e = 1,
                            t.righttop);
                          break;
                        case 10:
                          n = c & ps ? (e = 1,
                            t.righttop) : (e = 0,
                            t.leftbottom);
                          break;
                        case 11:
                          n = c & cs ? (e = 0,
                            t.lefttop) : (e = 1,
                            t.righttop);
                          break;
                        case 12:
                          n = c & ls ? (e = 1,
                            t.rightbottom) : (e = t.bottomright,
                            0);
                          break;
                        case 13:
                          n = c & ps ? (e = t.bottomleft,
                            0) : (e = 1,
                            t.rightbottom);
                          break;
                        case 14:
                          n = c & ps ? (e = 1,
                            t.rightbottom) : (e = 0,
                            t.leftbottom);
                          break;
                        case 15:
                          n = c & cs ? (e = 0,
                            t.lefttop) : (e = 1,
                            t.rightbottom);
                          break;
                        case 16:
                          n = c & ls ? (e = 0,
                            t.leftbottom) : (e = t.bottomright,
                            0);
                          break;
                        case 17:
                          n = c & cs ? (e = 0,
                            t.lefttop) : (e = t.bottomright,
                            0);
                          break;
                        case 18:
                          n = c & ps ? (e = t.bottomleft,
                            0) : (e = 0,
                            t.leftbottom);
                          break;
                        case 19:
                          n = c & cs ? (e = 0,
                            t.lefttop) : (e = t.bottomleft,
                            0);
                          break;
                        case 20:
                          n = c & cs ? (e = 0,
                            t.leftbottom) : (e = t.topleft,
                            1);
                          break;
                        case 21:
                          n = c & hs ? (e = t.topright,
                            1) : (e = 0,
                            t.leftbottom);
                          break;
                        case 22:
                          n = c & cs ? (e = 0,
                            t.lefttop) : (e = t.topleft,
                            1);
                          break;
                        case 23:
                          n = c & hs ? (e = t.topright,
                            1) : (e = 0,
                            t.lefttop);
                          break;
                        default:
                          return console.log("MarchingSquaresJS-isoBands: edge index out of range!"),
                            console.log(t),
                            null
                      }
                      return void 0 !== e && void 0 !== n && void 0 !== s && void 0 !== a && void 0 !== u || (console.log("MarchingSquaresJS-isoBands: undefined value!"),
                        console.log(t),
                        console.log(e + " " + n + " " + s + " " + a + " " + u)), {
                        p: [e, n],
                        x: s,
                        y: a,
                        o: u
                      }
                    }(t.cells[h][c], a.x, a.y, a.o)))
                    break;
                  if (i.push([u.p[0] + c, u.p[1] + h]),
                    c += u.x,
                    (h += (a = u).y) < 0 || n <= h || c < 0 || r <= c || void 0 === t.cells[h][c]) {
                    var l = function (t, e, n, r, i, o) {
                      for (var s = t.cells[n][e], a = s.cval_real, u = e + r, c = n + i, h = [], l = !1; !l;) {
                        if (void 0 === t.cells[c] || void 0 === t.cells[c][u])
                          if (c -= i,
                            u -= r,
                            a = (s = t.cells[c][u]).cval_real,
                            -1 === i)
                            if (0 === o)
                              if (a & ps)
                                h.push([u, c]),
                                r = -1,
                                o = i = 0;
                              else {
                                if (!(a & ls)) {
                                  h.push([u + s.bottomright, c]),
                                    o = i = 1,
                                    l = !(r = 0);
                                  break
                                }
                                h.push([u + 1, c]),
                                  r = 1,
                                  o = i = 0
                              }
                        else {
                          if (!(a & ps)) {
                            if (a & ls) {
                              h.push([u + s.bottomright, c]),
                                o = i = 1,
                                l = !(r = 0);
                              break
                            }
                            h.push([u + s.bottomleft, c]),
                              i = 1,
                              l = !(o = r = 0);
                            break
                          }
                          h.push([u, c]),
                            r = -1,
                            o = i = 0
                        } else if (1 === i)
                          if (0 === o) {
                            if (!(a & hs)) {
                              if (a & cs) {
                                h.push([u + s.topleft, c + 1]),
                                  i = -1,
                                  l = !(o = r = 0);
                                break
                              }
                              h.push([u + s.topright, c + 1]),
                                i = -1,
                                o = 1,
                                l = !(r = 0);
                              break
                            }
                            h.push([u + 1, c + 1]),
                              i = 0,
                              o = r = 1
                          } else
                            h.push([u + 1, c + 1]),
                            i = 0,
                            o = r = 1;
                        else if (-1 === r)
                          if (0 === o) {
                            if (!(a & cs)) {
                              if (a & ps) {
                                h.push([u, c + s.leftbottom]),
                                  r = 1,
                                  l = !(o = i = 0);
                                break
                              }
                              h.push([u, c + s.lefttop]),
                                o = r = 1,
                                l = !(i = 0);
                              break
                            }
                            h.push([u, c + 1]),
                              i = 1,
                              o = r = 0
                          } else {
                            if (!(a & cs)) {
                              console.log("MarchingSquaresJS-isoBands: wtf");
                              break
                            }
                            h.push([u, c + 1]),
                              i = 1,
                              o = r = 0
                          }
                        else {
                          if (1 !== r) {
                            console.log("MarchingSquaresJS-isoBands: we came from nowhere!");
                            break
                          }
                          if (0 === o) {
                            if (!(a & ls)) {
                              h.push([u + 1, c + s.rightbottom]),
                                r = -1,
                                l = !(o = i = 0);
                              break
                            }
                            h.push([u + 1, c]),
                              r = 0,
                              i = -1,
                              o = 1
                          } else {
                            if (!(a & ls)) {
                              if (a & hs) {
                                h.push([u + 1, c + s.righttop]),
                                  r = -1,
                                  i = 0,
                                  o = 1;
                                break
                              }
                              h.push([u + 1, c + s.rightbottom]),
                                r = -1,
                                l = !(o = i = 0);
                              break
                            }
                            h.push([u + 1, c]),
                              r = 0,
                              i = -1,
                              o = 1
                          }
                        } else if (a = (s = t.cells[c][u]).cval_real,
                          -1 === r)
                          if (0 === o)
                            if (void 0 !== t.cells[c - 1] && void 0 !== t.cells[c - 1][u])
                              r = 0,
                              i = -1,
                              o = 1;
                            else {
                              if (!(a & ps)) {
                                h.push([u + s.bottomright, c]),
                                  o = i = 1,
                                  l = !(r = 0);
                                break
                              }
                              h.push([u, c])
                            }
                        else {
                          if (!(a & cs)) {
                            console.log("MarchingSquaresJS-isoBands: found entry from top at " + u + "," + c);
                            break
                          }
                          console.log("MarchingSquaresJS-isoBands: proceeding in x-direction!")
                        } else if (1 === r) {
                          if (0 === o) {
                            console.log("MarchingSquaresJS-isoBands: wtf");
                            break
                          }
                          if (void 0 !== t.cells[c + 1] && void 0 !== t.cells[c + 1][u])
                            i = 1,
                            o = r = 0;
                          else {
                            if (!(a & hs)) {
                              h.push([u + s.topleft, c + 1]),
                                i = -1,
                                l = !(o = r = 0);
                              break
                            }
                            h.push([u + 1, c + 1]),
                              i = 0,
                              o = r = 1
                          }
                        } else if (-1 === i) {
                          if (1 !== o) {
                            console.log("MarchingSquaresJS-isoBands: wtf");
                            break
                          }
                          if (void 0 !== t.cells[c][u + 1])
                            i = 0,
                            o = r = 1;
                          else {
                            if (!(a & ls)) {
                              h.push([u + 1, c + s.righttop]),
                                r = -1,
                                o = 1,
                                l = !(i = 0);
                              break
                            }
                            h.push([u + 1, c]),
                              r = 0,
                              i = -1,
                              o = 1
                          }
                        } else {
                          if (1 !== i) {
                            console.log("MarchingSquaresJS-isoBands: where did we came from???");
                            break
                          }
                          if (0 !== o) {
                            console.log("MarchingSquaresJS-isoBands: wtf");
                            break
                          }
                          if (void 0 !== t.cells[c][u - 1])
                            r = -1,
                            o = i = 0;
                          else {
                            if (!(a & cs)) {
                              h.push([u, c + s.leftbottom]),
                                r = 1,
                                l = !(o = i = 0);
                              break
                            }
                            h.push([u, c + 1]),
                              i = 1,
                              o = r = 0
                          }
                        }
                        if (c += i,
                          (u += r) === e && c === n)
                          break
                      }
                      return {
                        path: h,
                        i: u,
                        j: c,
                        x: r,
                        y: i,
                        o: o
                      }
                    }(t, c -= u.x, h -= u.y, u.x, u.y, u.o);
                    if (null === l)
                      break;
                    l.path.forEach(function (t) {
                        i.push(t)
                      }),
                      c = l.i,
                      h = l.j,
                      a = l
                  }
                } while (void 0 !== t.cells[h][c] && 0 < t.cells[h][c].edges.length);
                e.push(i),
                  i = [],
                  0 < t.cells[o][s].edges.length && s--
              }
          return e
        }(l)),
      "function" == typeof us.successCallback && us.successCallback(u),
      u
  }

  function Kn(t, e, n) {
    return (t - e) / (n - e)
  }

  function Qn(t) {
    return -1 < t.constructor.toString().indexOf("Array")
  }

  function $n(t, i, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var o = e.pivot,
      n = e.mutate;
    if (!t)
      throw new Error("geojson is required");
    if (null == i || isNaN(i))
      throw new Error("angle is required");
    return 0 === i || (o || (o = ae(t)),
        !1 !== n && void 0 !== n || (t = Ft(t)),
        w(t, function (t) {
          var e = He(o, t) + i,
            n = Je(o, t),
            r = D(Xn(o, n, e));
          t[0] = r[0],
            t[1] = r[1]
        })),
      t
  }

  function tr(n, r, t) {
    if (!Y(t = t || {}))
      throw new Error("options is invalid");
    var i = t.origin,
      e = t.mutate;
    if (!n)
      throw new Error("geojson required");
    if ("number" != typeof r || 0 === r)
      throw new Error("invalid factor");
    var o = Array.isArray(i) || "object" == typeof i;
    return !0 !== e && (n = Ft(n)),
      "FeatureCollection" !== n.type || o ? er(n, r, i) : (I(n, function (t, e) {
          n.features[e] = er(t, r, i)
        }),
        n)
  }

  function er(t, i, o) {
    var e = "Point" === K(t);
    return o = function (t, e) {
        if (null != e || (e = "centroid"),
          Array.isArray(e) || "object" == typeof e)
          return H(e);
        var n = t.bbox ? t.bbox : V(t),
          r = n[0],
          i = n[1],
          o = n[2],
          s = n[3];
        switch (e) {
          case "sw":
          case "southwest":
          case "westsouth":
          case "bottomleft":
            return k([r, i]);
          case "se":
          case "southeast":
          case "eastsouth":
          case "bottomright":
            return k([o, i]);
          case "nw":
          case "northwest":
          case "westnorth":
          case "topleft":
            return k([r, s]);
          case "ne":
          case "northeast":
          case "eastnorth":
          case "topright":
            return k([o, s]);
          case "center":
            return se(t);
          case void 0:
          case null:
          case "centroid":
            return ae(t);
          default:
            throw new Error("invalid origin")
        }
      }(t, o),
      1 === i || e || w(t, function (t) {
        var e = Je(o, t),
          n = He(o, t),
          r = D(Xn(o, e * i, n));
        t[0] = r[0],
          t[1] = r[1],
          3 === t.length && (t[2] *= i)
      }),
      t
  }

  function nr(t) {
    var e = t[0],
      n = t[1];
    return [n[0] - e[0], n[1] - e[1]]
  }

  function rr(t, e) {
    return t[0] * e[1] - e[0] * t[1]
  }

  function ir(t, e, n) {
    var S = [],
      M = u(e, n),
      L = D(t),
      P = [];
    return L.forEach(function (t, e) {
        if (e !== L.length - 1) {
          var n = (E = t,
            w = L[e + 1],
            b = M,
            I = Math.sqrt((E[0] - w[0]) * (E[0] - w[0]) + (E[1] - w[1]) * (E[1] - w[1])),
            N = E[0] + b * (w[1] - E[1]) / I,
            C = w[0] + b * (w[1] - E[1]) / I,
            [
              [N, E[1] + b * (E[0] - w[0]) / I],
              [C, w[1] + b * (E[0] - w[0]) / I]
            ]);
          if (S.push(n),
            0 < e) {
            var r = S[e - 1],
              i = (x = s = r,
                !(0 === rr(nr(o = n), nr(x))) && (u = s,
                  d = (a = o)[0],
                  y = nr(a),
                  _ = u[0],
                  m = nr(u),
                  v = rr(y, m),
                  l = rr((g = c = d,
                    [(f = _)[0] - g[0], f[1] - g[1]]), m) / v,
                  h = [l * (p = y)[0], l * p[1]],
                  [c[0] + h[0], c[1] + h[1]]));
            !1 !== i && (r[1] = i,
                n[0] = i),
              P.push(r[0]),
              e === L.length - 2 && (P.push(n[0]),
                P.push(n[1]))
          }
          2 === L.length && (P.push(n[0]),
            P.push(n[1]))
        }
        var o, s, a, u, c, h, l, p, f, g, d, y, _, m, v, x, E, w, b, I, N, C
      }),
      j(P, t.properties)
  }

  function or(t, e, n) {
    var r = e[0] - t[0],
      i = e[1] - t[1],
      o = n[0] - e[0],
      s = n[1] - e[1];
    return Math.sign(r * s - o * i)
  }

  function sr(e, t) {
    return t.geometry.coordinates[0].every(function (t) {
      return Mt(k(t), e)
    })
  }

  function ar(t, e) {
    for (var n = 0; n < t.coordinates.length - 1; n++)
      if (r = t.coordinates[n],
        i = t.coordinates[n + 1],
        o = e.coordinates,
        void 0,
        s = o[0] - r[0],
        a = o[1] - r[1],
        u = i[0] - r[0],
        c = i[1] - r[1],
        s * c - a * u == 0 && (Math.abs(u) >= Math.abs(c) ? 0 < u ? r[0] <= o[0] && o[0] <= i[0] : i[0] <= o[0] && o[0] <= r[0] : 0 < c ? r[1] <= o[1] && o[1] <= i[1] : i[1] <= o[1] && o[1] <= r[1]))
        return !0;
    var r, i, o, s, a, u, c;
    return !1
  }

  function ur(t, e) {
    return 0 < Ue(e, Sn(t)).features.length
  }

  function cr(t, e) {
    return !(t[0] > e[0] || t[2] < e[2] || t[1] > e[1] || t[3] < e[3])
  }

  function hr(t, e) {
    return t[0] === e[0] && t[1] === e[1]
  }

  function lr(t, e) {
    for (var n = !1, r = !1, i = t.coordinates.length, o = 0; o < i && !n && !r;) {
      for (var s = 0; s < e.coordinates.length - 1; s++) {
        var a = !0;
        0 !== s && s !== e.coordinates.length - 2 || (a = !1),
          gr(e.coordinates[s], e.coordinates[s + 1], t.coordinates[o], a) ? n = !0 : r = !0
      }
      o++
    }
    return n && r
  }

  function pr(t, e) {
    return 0 < Ue(t, Sn(e)).features.length
  }

  function fr(t, e) {
    for (var n = !1, r = !1, i = t.coordinates[0].length, o = 0; o < i && n && r;)
      Mt(k(t.coordinates[0][o]), e) ? n = !0 : r = !0,
      o++;
    return r && r
  }

  function gr(t, e, n, r) {
    var i = n[0] - t[0],
      o = n[1] - t[1],
      s = e[0] - t[0],
      a = e[1] - t[1];
    return 0 == i * a - o * s && (r ? Math.abs(s) >= Math.abs(a) ? 0 < s ? t[0] <= n[0] && n[0] <= e[0] : e[0] <= n[0] && n[0] <= t[0] : 0 < a ? t[1] <= n[1] && n[1] <= e[1] : e[1] <= n[1] && n[1] <= t[1] : Math.abs(s) >= Math.abs(a) ? 0 < s ? t[0] < n[0] && n[0] < e[0] : e[0] < n[0] && n[0] < t[0] : 0 < a ? t[1] < n[1] && n[1] < e[1] : e[1] < n[1] && n[1] < t[1])
  }

  function dr(e) {
    return e.coordinates.map(function (t) {
      return {
        type: e.type.replace("Multi", ""),
        coordinates: t
      }
    })
  }

  function yr(t, e) {
    return t.hasOwnProperty("coordinates") ? t.coordinates.length === e.coordinates.length : t.length === e.length
  }

  function _r(t, e) {
    return aa(t, e, {
      strict: !0
    })
  }

  function mr(t, n) {
    if (!t)
      throw new Error("feature1 is required");
    if (!n)
      throw new Error("feature2 is required");
    var e = K(t);
    if (e !== K(n))
      throw new Error("features must be of the same type");
    if ("Point" === e)
      throw new Error("Point geometry not supported");
    if (new ca({
        precision: 6
      }).compare(t, n))
      return !1;
    var r = 0;
    switch (e) {
      case "MultiPoint":
        var i = C(t),
          o = C(n);
        i.forEach(function (e) {
          o.forEach(function (t) {
            e[0] === t[0] && e[1] === t[1] && r++
          })
        });
        break;
      case "LineString":
      case "MultiLineString":
        O(t, function (e) {
          O(n, function (t) {
            kn(e, t).features.length && r++
          })
        });
        break;
      case "Polygon":
      case "MultiPolygon":
        O(t, function (e) {
          O(n, function (t) {
            Ue(e, t).features.length && r++
          })
        })
    }
    return 0 < r
  }

  function vr(t, e, n) {
    n = n || [];
    for (var r = 0; r < t; r++)
      n[r] = e;
    return n
  }

  function xr(t, e) {
    if (t.geometry && t.geometry.type)
      return t.geometry.type;
    if (t.type)
      return t.type;
    throw new Error("Invalid GeoJSON object for " + e)
  }

  function Er(t) {
    for (var e = t, n = []; e.parent;)
      n.unshift(e),
      e = e.parent;
    return n
  }

  function wr(t, e) {
    e = e || {},
      this.nodes = [],
      this.diagonal = !!e.diagonal,
      this.grid = [];
    for (var n = 0; n < t.length; n++) {
      this.grid[n] = [];
      for (var r = 0, i = t[n]; r < i.length; r++) {
        var o = new br(n, r, i[r]);
        this.grid[n][r] = o,
          this.nodes.push(o)
      }
    }
    this.init()
  }

  function br(t, e, n) {
    this.x = t,
      this.y = e,
      this.weight = n
  }

  function Ir(t) {
    this.content = [],
      this.scoreFunction = t
  }

  function Nr(t) {
    return t[0]
  }

  function Cr(t) {
    return t[1]
  }

  function Sr() {
    this._ = null
  }

  function Mr(t) {
    t.U = t.C = t.L = t.R = t.P = t.N = null
  }

  function Lr(t, e) {
    var n = e,
      r = e.R,
      i = n.U;
    i ? i.L === n ? i.L = r : i.R = r : t._ = r,
      r.U = i,
      n.U = r,
      n.R = r.L,
      n.R && (n.R.U = n),
      r.L = n
  }

  function Pr(t, e) {
    var n = e,
      r = e.L,
      i = n.U;
    i ? i.L === n ? i.L = r : i.R = r : t._ = r,
      r.U = i,
      n.U = r,
      n.L = r.R,
      n.L && (n.L.U = n),
      r.R = n
  }

  function Or(t) {
    for (; t.L;)
      t = t.L;
    return t
  }

  function Rr(t, e, n, r) {
    var i = [null, null],
      o = Ca.push(i) - 1;
    return i.left = t,
      i.right = e,
      n && Ar(i, t, e, n),
      r && Ar(i, e, t, r),
      Ia[t.index].halfedges.push(o),
      Ia[e.index].halfedges.push(o),
      i
  }

  function Tr(t, e, n) {
    var r = [e, n];
    return r.left = t,
      r
  }

  function Ar(t, e, n, r) {
    t[0] || t[1] ? t.left === n ? t[1] = r : t[0] = r : (t[0] = r,
      t.left = e,
      t.right = n)
  }

  function Dr(t, e, n, r, i) {
    var o, s = t[0],
      a = t[1],
      u = s[0],
      c = s[1],
      h = 0,
      l = 1,
      p = a[0] - u,
      f = a[1] - c;
    if (o = e - u,
      p || !(0 < o)) {
      if (o /= p,
        p < 0) {
        if (o < h)
          return;
        o < l && (l = o)
      } else if (0 < p) {
        if (l < o)
          return;
        h < o && (h = o)
      }
      if (o = r - u,
        p || !(o < 0)) {
        if (o /= p,
          p < 0) {
          if (l < o)
            return;
          h < o && (h = o)
        } else if (0 < p) {
          if (o < h)
            return;
          o < l && (l = o)
        }
        if (o = n - c,
          f || !(0 < o)) {
          if (o /= f,
            f < 0) {
            if (o < h)
              return;
            o < l && (l = o)
          } else if (0 < f) {
            if (l < o)
              return;
            h < o && (h = o)
          }
          if (o = i - c,
            f || !(o < 0)) {
            if (o /= f,
              f < 0) {
              if (l < o)
                return;
              h < o && (h = o)
            } else if (0 < f) {
              if (o < h)
                return;
              o < l && (l = o)
            }
            return !(0 < h || l < 1) || (0 < h && (t[0] = [u + h * p, c + h * f]),
              l < 1 && (t[1] = [u + l * p, c + l * f]),
              !0)
          }
        }
      }
    }
  }

  function Fr(t, e, n, r, i) {
    var o = t[1];
    if (o)
      return !0;
    var s, a, u = t[0],
      c = t.left,
      h = t.right,
      l = c[0],
      p = c[1],
      f = h[0],
      g = h[1],
      d = (l + f) / 2,
      y = (p + g) / 2;
    if (g === p) {
      if (d < e || r <= d)
        return;
      if (f < l) {
        if (u) {
          if (u[1] >= i)
            return
        } else
          u = [d, n];
        o = [d, i]
      } else {
        if (u) {
          if (u[1] < n)
            return
        } else
          u = [d, i];
        o = [d, n]
      }
    } else if (a = y - (s = (l - f) / (g - p)) * d,
      s < -1 || 1 < s)
      if (f < l) {
        if (u) {
          if (u[1] >= i)
            return
        } else
          u = [(n - a) / s, n];
        o = [(i - a) / s, i]
      } else {
        if (u) {
          if (u[1] < n)
            return
        } else
          u = [(i - a) / s, i];
        o = [(n - a) / s, n]
      }
    else if (p < g) {
      if (u) {
        if (u[0] >= r)
          return
      } else
        u = [e, s * e + a];
      o = [r, s * r + a]
    } else {
      if (u) {
        if (u[0] < e)
          return
      } else
        u = [r, s * r + a];
      o = [e, s * e + a]
    }
    return t[0] = u,
      t[1] = o,
      !0
  }

  function qr(t, e) {
    return e[+(e.left !== t.site)]
  }

  function Gr(t) {
    var e = t.P,
      n = t.N;
    if (e && n) {
      var r = e.site,
        i = t.site,
        o = n.site;
      if (r !== o) {
        var s = i[0],
          a = i[1],
          u = r[0] - s,
          c = r[1] - a,
          h = o[0] - s,
          l = o[1] - a,
          p = 2 * (u * l - c * h);
        if (!(-Pa <= p)) {
          var f = u * u + c * c,
            g = h * h + l * l,
            d = (l * f - c * g) / p,
            y = (u * g - h * f) / p,
            _ = Sa.pop() || new function () {
              Mr(this),
                this.x = this.y = this.arc = this.site = this.cy = null
            };
          _.arc = t,
            _.site = i,
            _.x = d + s,
            _.y = (_.cy = y + a) + Math.sqrt(d * d + y * y),
            t.circle = _;
          for (var m = null, v = Na._; v;)
            if (_.y < v.y || _.y === v.y && _.x <= v.x) {
              if (!v.L) {
                m = v.P;
                break
              }
              v = v.L
            } else {
              if (!v.R) {
                m = v;
                break
              }
              v = v.R
            }
          Na.insert(m, _),
            m || (wa = _)
        }
      }
    }
  }

  function Br(t) {
    var e = t.circle;
    e && (e.P || (wa = e.N),
      Na.remove(e),
      Sa.push(e),
      Mr(e),
      t.circle = null)
  }

  function kr(t) {
    var e = Ma.pop() || new function () {
      Mr(this),
        this.edge = this.site = this.circle = null
    };
    return e.site = t,
      e
  }

  function zr(t) {
    Br(t),
      ba.remove(t),
      Ma.push(t),
      Mr(t)
  }

  function jr(t) {
    var e = t.circle,
      n = e.x,
      r = e.cy,
      i = [n, r],
      o = t.P,
      s = t.N,
      a = [t];
    zr(t);
    for (var u = o; u.circle && Math.abs(n - u.circle.x) < La && Math.abs(r - u.circle.cy) < La;)
      o = u.P,
      a.unshift(u),
      zr(u),
      u = o;
    a.unshift(u),
      Br(u);
    for (var c = s; c.circle && Math.abs(n - c.circle.x) < La && Math.abs(r - c.circle.cy) < La;)
      s = c.N,
      a.push(c),
      zr(c),
      c = s;
    a.push(c),
      Br(c);
    var h, l = a.length;
    for (h = 1; h < l; ++h)
      c = a[h],
      u = a[h - 1],
      Ar(c.edge, u.site, c.site, i);
    u = a[0],
      (c = a[l - 1]).edge = Rr(u.site, c.site, null, i),
      Gr(u),
      Gr(c)
  }

  function Xr(t) {
    for (var e, n, r, i, o = t[0], s = t[1], a = ba._; a;)
      if ((r = Ur(a, s) - o) > La)
        a = a.L;
      else {
        if (!((i = o - function (t, e) {
            var n = t.N;
            if (n)
              return Ur(n, e);
            var r = t.site;
            return r[1] === e ? r[0] : 1 / 0
          }(a, s)) > La)) {
          -La < r ? (e = a.P,
            n = a) : -La < i ? n = (e = a).N : e = n = a;
          break
        }
        if (!a.R) {
          e = a;
          break
        }
        a = a.R
      }
    var u;
    Ia[(u = t).index] = {
      site: u,
      halfedges: []
    };
    var c = kr(t);
    if (ba.insert(e, c),
      e || n) {
      if (e === n)
        return Br(e),
          n = kr(e.site),
          ba.insert(c, n),
          c.edge = n.edge = Rr(e.site, c.site),
          Gr(e),
          void Gr(n);
      if (n) {
        Br(e),
          Br(n);
        var h = e.site,
          l = h[0],
          p = h[1],
          f = t[0] - l,
          g = t[1] - p,
          d = n.site,
          y = d[0] - l,
          _ = d[1] - p,
          m = 2 * (f * _ - g * y),
          v = f * f + g * g,
          x = y * y + _ * _,
          E = [(_ * v - g * x) / m + l, (f * x - y * v) / m + p];
        Ar(n.edge, h, d, E),
          c.edge = Rr(h, t, null, E),
          n.edge = Rr(t, d, null, E),
          Gr(e),
          Gr(n)
      } else
        c.edge = Rr(e.site, c.site)
    }
  }

  function Ur(t, e) {
    var n = t.site,
      r = n[0],
      i = n[1],
      o = i - e;
    if (!o)
      return r;
    var s = t.P;
    if (!s)
      return -1 / 0;
    var a = (n = s.site)[0],
      u = n[1],
      c = u - e;
    if (!c)
      return a;
    var h = a - r,
      l = 1 / o - 1 / c,
      p = h / c;
    return l ? (-p + Math.sqrt(p * p - 2 * l * (h * h / (-2 * c) - u + c / 2 + i - o / 2))) / l + r : (r + a) / 2
  }

  function Yr(t, e) {
    return e[1] - t[1] || e[0] - t[0]
  }

  function Vr(t, e) {
    var n, r, i, o = t.sort(Yr).pop();
    for (Ca = [],
      Ia = new Array(t.length),
      ba = new Sr,
      Na = new Sr;;)
      if (i = wa,
        o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x))
        o[0] === n && o[1] === r || (Xr(o),
          n = o[0],
          r = o[1]),
        o = t.pop();
      else {
        if (!i)
          break;
        jr(i.arc)
      }
    if (function () {
        for (var t, e, n, r, i = 0, o = Ia.length; i < o; ++i)
          if ((t = Ia[i]) && (r = (e = t.halfedges).length)) {
            var s = new Array(r),
              a = new Array(r);
            for (n = 0; n < r; ++n)
              s[n] = n,
              a[n] = (u = t,
                c = Ca[e[n]],
                p = l = void 0,
                h = u.site,
                l = c.left,
                p = c.right,
                h === p && (p = l,
                  l = h),
                p ? Math.atan2(p[1] - l[1], p[0] - l[0]) : (p = h === l ? (l = c[1],
                    c[0]) : (l = c[0],
                    c[1]),
                  Math.atan2(l[0] - p[0], p[1] - l[1])));
            for (s.sort(function (t, e) {
                return a[e] - a[t]
              }),
              n = 0; n < r; ++n)
              a[n] = e[s[n]];
            for (n = 0; n < r; ++n)
              e[n] = a[n]
          }
        var u, c, h, l, p
      }(),
      e) {
      var s = +e[0][0],
        a = +e[0][1],
        u = +e[1][0],
        c = +e[1][1];
      ! function (t, e, n, r) {
        for (var i, o = Ca.length; o--;)
          Fr(i = Ca[o], t, e, n, r) && Dr(i, t, e, n, r) && (Math.abs(i[0][0] - i[1][0]) > La || Math.abs(i[0][1] - i[1][1]) > La) || delete Ca[o]
      }(s, a, u, c),
      function (t, e, n, r) {
        var i, o, s, a, u, c, h, l, p, f, g, d, y, _, m = Ia.length,
          v = !0;
        for (i = 0; i < m; ++i)
          if (o = Ia[i]) {
            for (s = o.site,
              a = (u = o.halfedges).length; a--;)
              Ca[u[a]] || u.splice(a, 1);
            for (a = 0,
              c = u.length; a < c;)
              g = (y = o,
                _ = Ca[u[a]],
                f = _[+(_.left === y.site)])[0],
              d = f[1],
              l = (h = qr(o, Ca[u[++a % c]]))[0],
              p = h[1],
              (Math.abs(g - l) > La || Math.abs(d - p) > La) && (u.splice(a, 0, Ca.push(Tr(s, f, Math.abs(g - t) < La && La < r - d ? [t, Math.abs(l - t) < La ? p : r] : Math.abs(d - r) < La && La < n - g ? [Math.abs(p - r) < La ? l : n, r] : Math.abs(g - n) < La && La < d - e ? [n, Math.abs(l - n) < La ? p : e] : Math.abs(d - e) < La && La < g - t ? [Math.abs(p - e) < La ? l : t, e] : null)) - 1),
                ++c);
            c && (v = !1)
          }
        if (v) {
          var x, E, w, b = 1 / 0;
          for (i = 0,
            v = null; i < m; ++i)
            (o = Ia[i]) && (w = (x = (s = o.site)[0] - t) * x + (E = s[1] - e) * E) < b && (b = w,
              v = o);
          if (v) {
            var I = [t, e],
              N = [t, r],
              C = [n, r],
              S = [n, e];
            v.halfedges.push(Ca.push(Tr(s = v.site, I, N)) - 1, Ca.push(Tr(s, N, C)) - 1, Ca.push(Tr(s, C, S)) - 1, Ca.push(Tr(s, S, I)) - 1)
          }
        }
        for (i = 0; i < m; ++i)
          (o = Ia[i]) && (o.halfedges.length || delete Ia[i])
      }(s, a, u, c)
    }
    this.edges = Ca,
      this.cells = Ia,
      ba = Na = Ca = Ia = null
  }

  function Hr(t) {
    return (t = t.slice()).push(t[0]),
      z([t])
  }

  function Wr(t, e, n, r) {
    var i = (r = r || {}).steps || 64,
      o = r.units || "kilometers",
      s = r.angle || 0,
      a = r.pivot || t,
      u = r.properties || t.properties || {};
    if (!t)
      throw new Error("center is required");
    if (!e)
      throw new Error("xSemiAxis is required");
    if (!n)
      throw new Error("ySemiAxis is required");
    if (!Y(r))
      throw new Error("options must be an object");
    if (!U(i))
      throw new Error("steps must be a number");
    if (!U(s))
      throw new Error("angle must be a number");
    var c = H(t);
    if ("degrees" === o)
      var h = m(s);
    else
      e = Xn(t, e, 90, {
        units: o
      }),
      n = Xn(t, n, 0, {
        units: o
      }),
      e = H(e)[0] - c[0],
      n = H(n)[1] - c[1];
    for (var l = [], p = 0; p < i; p += 1) {
      var f = -360 * p / i,
        g = e * n / Math.sqrt(Math.pow(n, 2) + Math.pow(e, 2) * Math.pow(Jr(f), 2)),
        d = e * n / Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2) / Math.pow(Jr(f), 2));
      if (f < -90 && -270 <= f && (g = -g),
        f < -180 && -360 <= f && (d = -d),
        "degrees" === o) {
        var y = g * Math.cos(h) + d * Math.sin(h),
          _ = d * Math.cos(h) - g * Math.sin(h);
        g = y,
          d = _
      }
      l.push([g + c[0], d + c[1]])
    }
    return l.push(l[0]),
      "degrees" === o ? z([l], u) : $n(z([l], u), s, {
        pivot: a
      })
  }

  function Jr(t) {
    var e = t * Math.PI / 180;
    return Math.tan(e)
  }

  function Zr(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.properties,
      i = e.weight;
    if (!t)
      throw new Error("geojson is required");
    var o = 0,
      s = 0,
      a = 0;
    return S(t, function (t, e, n) {
        var r = n[i];
        if (!U(r = null == r ? 1 : r))
          throw new Error("weight value must be a number for feature index " + e);
        0 < (r = Number(r)) && w(t, function (t) {
          o += t[0] * r,
            s += t[1] * r,
            a += r
        })
      }),
      k([o / a, s / a], n)
  }

  function Kr(t, e) {
    return {
      x: t[0] - e[0],
      y: t[1] - e[1]
    }
  }

  function Qr(t) {
    if (Y(t) && (t = t.bbox),
      t && !Array.isArray(t))
      throw new Error("bbox is invalid");
    return t ? (e = t,
      [Math.random() * (e[2] - e[0]) + e[0], Math.random() * (e[3] - e[1]) + e[1]]) : [360 * ni(), 180 * ni()];
    var e
  }

  function $r(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.bbox;
    null != t || (t = 1);
    for (var r = [], i = 0; i < t; i++)
      r.push(k(Qr(n)));
    return X(r)
  }

  function ti(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.bbox,
      r = e.num_vertices,
      i = e.max_radial_length;
    null != t || (t = 1),
      U(r) || (r = 10),
      U(i) || (i = 10);
    for (var o = [], s = 0; s < t; s++) {
      var a = [],
        u = Array.apply(null, new Array(r + 1)).map(Math.random);
      u.forEach(function (t, e, n) {
          n[e] = 0 < e ? t + n[e - 1] : t
        }),
        u.forEach(function (t) {
          t = 2 * t * Math.PI / u[u.length - 1];
          var e = Math.random();
          a.push([e * i * Math.sin(t), e * i * Math.cos(t)])
        }),
        a[a.length - 1] = a[0],
        a = a.map(function (e) {
          return function (t) {
            return [t[0] + e[0], t[1] + e[1]]
          }
        }(Qr(n))),
        o.push(z([a]))
    }
    return X(o)
  }

  function ei(t, e) {
    if (!Y(e = e || {}))
      throw new Error("options is invalid");
    var n = e.bbox,
      r = e.num_vertices,
      i = e.max_length,
      o = e.max_rotation;
    null != t || (t = 1),
      (!U(r) || r < 2) && (r = 10),
      U(i) || (i = 1e-4),
      U(o) || (o = Math.PI / 8);
    for (var s = [], a = 0; a < t; a++) {
      for (var u = [Qr(n)], c = 0; c < r - 1; c++) {
        var h = (0 === c ? 2 * Math.random() * Math.PI : Math.tan((u[c][1] - u[c - 1][1]) / (u[c][0] - u[c - 1][0]))) + (Math.random() - .5) * o * 2,
          l = Math.random() * i;
        u.push([u[c][0] + l * Math.cos(h), u[c][1] + l * Math.sin(h)])
      }
      s.push(j(u))
    }
    return X(s)
  }

  function ni() {
    return Math.random() - .5
  }

  function ri(t, e) {
    if (!t)
      throw new Error("geojson is required");
    if ("FeatureCollection" !== t.type)
      throw new Error("geojson must be a FeatureCollection");
    if (null == e)
      throw new Error("filter is required");
    var n = [];
    return I(t, function (t) {
        ai(t.properties, e) && n.push(t)
      }),
      X(n)
  }

  function ii(t, e, n) {
    if (!t)
      throw new Error("geojson is required");
    if ("FeatureCollection" !== t.type)
      throw new Error("geojson must be a FeatureCollection");
    if (null == e)
      throw new Error("property is required");
    for (var r = si(t, e), i = Object.keys(r), o = 0; o < i.length; o++) {
      for (var s = i[o], a = r[s], u = [], c = 0; c < a.length; c++)
        u.push(t.features[a[c]]);
      n(X(u), s, o)
    }
  }

  function oi(t, e, r, i) {
    var o = i;
    return ii(t, e, function (t, e, n) {
        o = 0 === n && void 0 === i ? t : r(o, t, e, n)
      }),
      o
  }

  function si(t, i) {
    var o = {};
    return I(t, function (t, e) {
        var n = t.properties || {};
        if (n.hasOwnProperty(i)) {
          var r = n[i];
          o.hasOwnProperty(r) ? o[r].push(e) : o[r] = [e]
        }
      }),
      o
  }

  function ai(t, e) {
    if (void 0 === t)
      return !1;
    var n = typeof e;
    if ("number" === n || "string" === n)
      return t.hasOwnProperty(e);
    if (Array.isArray(e)) {
      for (var r = 0; r < e.length; r++)
        if (!ai(t, e[r]))
          return !1;
      return !0
    }
    return ui(t, e)
  }

  function ui(t, e) {
    for (var n = Object.keys(e), r = 0; r < n.length; r++) {
      var i = n[r];
      if (t[i] !== e[i])
        return !1
    }
    return !0
  }

  function ci(t, e) {
    if (!e)
      return {};
    if (!e.length)
      return {};
    for (var n = {}, r = 0; r < e.length; r++) {
      var i = e[r];
      t.hasOwnProperty(i) && (n[i] = t[i])
    }
    return n
  }

  function hi() {}

  function li(t) {
    this.message = t || ""
  }

  function pi(t) {
    this.message = t || ""
  }

  function fi() {}

  function gi(t) {
    return null === t ? Ku : t.color
  }

  function di(t) {
    return null === t ? null : t.parent
  }

  function yi(t, e) {
    null !== t && (t.color = e)
  }

  function _i(t) {
    return null === t ? null : t.left
  }

  function mi(t) {
    return null === t ? null : t.right
  }

  function vi() {
    this.root_ = null,
      this.size_ = 0
  }

  function xi() {}

  function Ei() {
    this.array_ = [],
      arguments[0] instanceof Fu && this.addAll(arguments[0])
  }

  function wi() {}

  function bi(t) {
    this.message = t || ""
  }

  function Ii() {
    this.array_ = []
  }

  function Ni(t) {
    switch (t.type) {
      case "Polygon":
        return 1 < sn(t) ? t : null;
      case "MultiPolygon":
        var e = [];
        if (L(t, function (t) {
            1 < sn(t) && e.push(t.geometry.coordinates)
          }),
          e.length)
          return {
            type: "MultiPolygon",
            coordinates: e
          }
    }
  }

  function Ci() {
    this.reset()
  }

  function Si(t, e, n) {
    var r = t.s = e + n,
      i = r - e,
      o = r - i;
    t.t = e - o + (n - i)
  }

  function Mi(t) {
    return 1 < t ? nf : t < -1 ? -nf : Math.asin(t)
  }

  function Li() {}

  function Pi(t, e) {
    t && mf.hasOwnProperty(t.type) && mf[t.type](t, e)
  }

  function Oi(t, e, n) {
    var r, i = -1,
      o = t.length - n;
    for (e.lineStart(); ++i < o;)
      r = t[i],
      e.point(r[0], r[1], r[2]);
    e.lineEnd()
  }

  function Ri(t, e) {
    var n = -1,
      r = t.length;
    for (e.polygonStart(); ++n < r;)
      Oi(t[n], e, 1);
    e.polygonEnd()
  }

  function Ti(t) {
    return [hf(t[1], t[0]), Mi(t[2])]
  }

  function Ai(t) {
    var e = t[0],
      n = t[1],
      r = lf(n);
    return [r * lf(e), r * gf(e), gf(n)]
  }

  function Di(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
  }

  function Fi(t, e) {
    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
  }

  function qi(t, e) {
    t[0] += e[0],
      t[1] += e[1],
      t[2] += e[2]
  }

  function Gi(t, e) {
    return [t[0] * e, t[1] * e, t[2] * e]
  }

  function Bi(t) {
    var e = df(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] /= e,
      t[1] /= e,
      t[2] /= e
  }

  function ki(t, e) {
    return [ef < t ? t - of : t < -ef ? t + of : t, e]
  }

  function zi(t, e, n) {
    return (t %= of ) ? e || n ? xf(Xi(t), Ui(e, n)) : Xi(t) : e || n ? Ui(e, n) : ki
  }

  function ji(n) {
    return function (t, e) {
      return [ef < (t += n) ? t - of : t < -ef ? t + of : t, e]
    }
  }

  function Xi(t) {
    var e = ji(t);
    return e.invert = ji(-t),
      e
  }

  function Ui(t, e) {
    function n(t, e) {
      var n = lf(e),
        r = lf(t) * n,
        i = gf(t) * n,
        o = gf(e),
        s = o * a + r * u;
      return [hf(i * c - s * h, r * a - o * u), Mi(s * c + i * h)]
    }
    var a = lf(t),
      u = gf(t),
      c = lf(e),
      h = gf(e);
    return n.invert = function (t, e) {
        var n = lf(e),
          r = lf(t) * n,
          i = gf(t) * n,
          o = gf(e),
          s = o * c - i * h;
        return [hf(i * c + o * h, r * a + s * u), Mi(s * a - r * u)]
      },
      n
  }

  function Yi(t, e) {
    (e = Ai(e))[0] -= t,
    Bi(e);
    var n, r = 1 < (n = -e[1]) ? 0 : n < -1 ? ef : Math.acos(n);
    return ((-e[2] < 0 ? -r : r) + of -tf) % of
  }

  function Vi(t, e, n, r) {
    this.x = t,
      this.z = e,
      this.o = n,
      this.e = r,
      this.v = !1,
      this.n = this.p = null
  }

  function Hi(t) {
    if (e = t.length) {
      for (var e, n, r = 0, i = t[0]; ++r < e;)
        i.n = n = t[r],
        n.p = i,
        i = n;
      i.n = n = t[0],
        n.p = i
    }
  }

  function Wi(t) {
    return 1 < t.length
  }

  function Ji(t, e) {
    return ((t = t.x)[0] < 0 ? t[1] - nf - tf : nf - t[1]) - ((e = e.x)[0] < 0 ? e[1] - nf - tf : nf - e[1])
  }

  function Zi(r) {
    return function (t) {
      var e = new Ki;
      for (var n in r)
        e[n] = r[n];
      return e.stream = t,
        e
    }
  }

  function Ki() {}

  function Qi(t, e, n) {
    var r = e[1][0] - e[0][0],
      i = e[1][1] - e[0][1],
      o = t.clipExtent && t.clipExtent();
    t.scale(150).translate([0, 0]),
      null != o && t.clipExtent(null),
      vf(n, t.stream(qf));
    var s = qf.result(),
      a = Math.min(r / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])),
      u = +e[0][0] + (r - a * (s[1][0] + s[0][0])) / 2,
      c = +e[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
    return null != o && t.clipExtent(o),
      t.scale(150 * a).translate([u, c])
  }

  function $i(L) {
    return function (t) {
      function n(t) {
        return [(t = c(t[0] * af, t[1] * af))[0] * d + s, a - t[1] * d]
      }

      function e(t, e) {
        return [(t = o(t, e))[0] * d + s, a - t[1] * d]
      }

      function r() {
        c = xf(u = zi(x, E, w), o);
        var t = o(m, v);
        return s = y - t[0] * d,
          a = _ + t[1] * d,
          i()
      }

      function i() {
        return f = g = null,
          n
      }
      var o, s, a, u, c, h, l, p, f, g, d = 150,
        y = 480,
        _ = 250,
        m = 0,
        v = 0,
        x = 0,
        E = 0,
        w = 0,
        b = null,
        I = Bf,
        N = null,
        C = Rf,
        S = .5,
        M = zf(e, S);
      return n.stream = function (t) {
          return f && g === t ? f : f = jf(I(u, M(C(g = t))))
        },
        n.clipAngle = function (t) {
          return arguments.length ? (I = +t ? function (i, o) {
              function f(t, e) {
                return lf(t) * lf(e) > C
              }

              function g(t, e, n) {
                var r = [1, 0, 0],
                  i = Fi(Ai(t), Ai(e)),
                  o = Di(i, i),
                  s = i[0],
                  a = o - s * s;
                if (!a)
                  return !n && t;
                var u = C * o / a,
                  c = -C * s / a,
                  h = Fi(r, i),
                  l = Gi(r, u);
                qi(l, Gi(i, c));
                var p = h,
                  f = Di(l, p),
                  g = Di(p, p),
                  d = f * f - g * (Di(l, l) - 1);
                if (!(d < 0)) {
                  var y = df(d),
                    _ = Gi(p, (-f - y) / g);
                  if (qi(_, l),
                    _ = Ti(_),
                    !n)
                    return _;
                  var m, v = t[0],
                    x = e[0],
                    E = t[1],
                    w = e[1];
                  x < v && (m = v,
                    v = x,
                    x = m);
                  var b = x - v,
                    I = uf(b - ef) < tf;
                  if (!I && w < E && (m = E,
                      E = w,
                      w = m),
                    I || b < tf ? I ? 0 < E + w ^ _[1] < (uf(_[0] - v) < tf ? E : w) : E <= _[1] && _[1] <= w : ef < b ^ (v <= _[0] && _[0] <= x)) {
                    var N = Gi(p, (-f + y) / g);
                    return qi(N, l),
                      [_, Ti(N)]
                  }
                }
              }

              function d(t, e) {
                var n = y ? i : ef - i,
                  r = 0;
                return t < -n ? r |= 1 : n < t && (r |= 2),
                  e < -n ? r |= 4 : n < e && (r |= 8),
                  r
              }
              var C = lf(i),
                y = 0 < C,
                _ = uf(C) > tf;
              return Gf(f, function (a) {
                var u, c, h, l, p;
                return {
                  lineStart: function () {
                    l = h = !1,
                      p = 1
                  },
                  point: function (t, e) {
                    var n, r = [t, e],
                      i = f(t, e),
                      o = y ? i ? 0 : d(t, e) : i ? d(t + (t < 0 ? ef : -ef), e) : 0;
                    if (!u && (l = h = i) && a.lineStart(),
                      i !== h && (!(n = g(u, r)) || Nf(u, n) || Nf(r, n)) && (r[0] += tf,
                        r[1] += tf,
                        i = f(r[0], r[1])),
                      i !== h)
                      p = 0,
                      i ? (a.lineStart(),
                        n = g(r, u),
                        a.point(n[0], n[1])) : (n = g(u, r),
                        a.point(n[0], n[1]),
                        a.lineEnd()),
                      u = n;
                    else if (_ && u && y ^ i) {
                      var s;
                      o & c || !(s = g(r, u, !0)) || (p = 0,
                        y ? (a.lineStart(),
                          a.point(s[0][0], s[0][1]),
                          a.point(s[1][0], s[1][1]),
                          a.lineEnd()) : (a.point(s[1][0], s[1][1]),
                          a.lineEnd(),
                          a.lineStart(),
                          a.point(s[0][0], s[0][1])))
                    }!i || u && Nf(u, r) || a.point(r[0], r[1]),
                      u = r,
                      h = i,
                      c = o
                  },
                  lineEnd: function () {
                    h && a.lineEnd(),
                      u = null
                  },
                  clean: function () {
                    return p | (l && h) << 1
                  }
                }
              }, function (t, e, n, r) {
                ! function (t, e, n, r, i, o) {
                  if (n) {
                    var s = lf(e),
                      a = gf(e),
                      u = r * n;
                    null == i ? (i = e + r * of ,
                      o = e - u / 2) : (i = Yi(s, i),
                      o = Yi(s, o),
                      (0 < r ? i < o : o < i) && (i += r * of ));
                    for (var c, h = i; 0 < r ? o < h : h < o; h -= u)
                      c = Ti([s, -a * lf(h), -a * gf(h)]),
                      t.point(c[0], c[1])
                  }
                }(r, i, o, n, t, e)
              }, y ? [0, -i] : [-ef, i - ef])
            }(b = t * af, 6 * af) : (b = null,
              Bf),
            i()) : b * sf
        },
        n.clipExtent = function (t) {
          return arguments.length ? (C = null == t ? (N = h = l = p = null,
              Rf) : function (_, m, v, x) {
              function E(t, e) {
                return _ <= t && t <= v && m <= e && e <= x
              }

              function w(t, e, n, r) {
                var i = 0,
                  o = 0;
                if (null == t || (i = s(t, n)) !== (o = s(e, n)) || a(t, e) < 0 ^ 0 < n)
                  for (; r.point(0 === i || 3 === i ? _ : v, 1 < i ? x : m),
                    (i = (i + n + 4) % 4) !== o;)
                ;
                else
                  r.point(e[0], e[1])
              }

              function s(t, e) {
                return uf(t[0] - _) < tf ? 0 < e ? 0 : 3 : uf(t[0] - v) < tf ? 0 < e ? 2 : 1 : uf(t[1] - m) < tf ? 0 < e ? 1 : 0 : 0 < e ? 3 : 2
              }

              function b(t, e) {
                return a(t.x, e.x)
              }

              function a(t, e) {
                var n = s(t, 1),
                  r = s(e, 1);
                return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
              }
              return function (r) {
                function t(t, e) {
                  E(t, e) && d.point(t, e)
                }

                function e(t, e) {
                  var n = E(t, e);
                  if (l && o.push([t, e]),
                    f)
                    s = t,
                    a = e,
                    f = !1,
                    (u = n) && (d.lineStart(),
                      d.point(t, e));
                  else if (n && p)
                    d.point(t, e);
                  else {
                    var r = [c = Math.max(Pf, Math.min(Lf, c)), h = Math.max(Pf, Math.min(Lf, h))],
                      i = [t = Math.max(Pf, Math.min(Lf, t)), e = Math.max(Pf, Math.min(Lf, e))];
                    If(r, i, _, m, v, x) ? (p || (d.lineStart(),
                        d.point(r[0], r[1])),
                      d.point(i[0], i[1]),
                      n || d.lineEnd(),
                      g = !1) : n && (d.lineStart(),
                      d.point(t, e),
                      g = !1)
                  }
                  c = t,
                    h = e,
                    p = n
                }
                var i, l, o, s, a, u, c, h, p, f, g, d = r,
                  n = bf(),
                  y = {
                    point: t,
                    lineStart: function () {
                      y.point = e,
                        l && l.push(o = []),
                        p = !(f = !0),
                        c = h = NaN
                    },
                    lineEnd: function () {
                      i && (e(s, a),
                          u && p && n.rejoin(),
                          i.push(n.result())),
                        y.point = t,
                        p && d.lineEnd()
                    },
                    polygonStart: function () {
                      d = n,
                        i = [],
                        l = [],
                        g = !0
                    },
                    polygonEnd: function () {
                      var t = function () {
                          for (var t = 0, e = 0, n = l.length; e < n; ++e)
                            for (var r, i, o = l[e], s = 1, a = o.length, u = o[0], c = u[0], h = u[1]; s < a; ++s)
                              r = c,
                              i = h,
                              c = (u = o[s])[0],
                              h = u[1],
                              i <= x ? x < h && (h - i) * (_ - r) < (c - r) * (x - i) && ++t : h <= x && (c - r) * (x - i) < (h - i) * (_ - r) && --t;
                          return t
                        }(),
                        e = g && t,
                        n = (i = Mf(i)).length;
                      (e || n) && (r.polygonStart(),
                        e && (r.lineStart(),
                          w(null, null, 1, r),
                          r.lineEnd()),
                        n && Cf(i, b, t, w, r),
                        r.polygonEnd()),
                      d = r,
                        i = l = o = null
                    }
                  };
                return y
              }
            }(N = +t[0][0], h = +t[0][1], l = +t[1][0], p = +t[1][1]),
            i()) : null == N ? null : [
            [N, h],
            [l, p]
          ]
        },
        n.scale = function (t) {
          return arguments.length ? (d = +t,
            r()) : d
        },
        n.translate = function (t) {
          return arguments.length ? (y = +t[0],
            _ = +t[1],
            r()) : [y, _]
        },
        n.center = function (t) {
          return arguments.length ? (m = t[0] % 360 * af,
            v = t[1] % 360 * af,
            r()) : [m * sf, v * sf]
        },
        n.rotate = function (t) {
          return arguments.length ? (x = t[0] % 360 * af,
            E = t[1] % 360 * af,
            w = 2 < t.length ? t[2] % 360 * af : 0,
            r()) : [x * sf, E * sf, w * sf]
        },
        n.precision = function (t) {
          return arguments.length ? (M = zf(e, S = t * t),
            i()) : df(S)
        },
        n.fitExtent = function (t, e) {
          return Qi(n, t, e)
        },
        n.fitSize = function (t, e) {
          return Qi(n, [
            [0, 0], t
          ], e)
        },
        function () {
          return o = function () {
              return L
            }
            .apply(this, arguments),
            n.invert = o.invert && function (t) {
              return (t = c.invert((t[0] - s) / d, (a - t[1]) / d)) && [t[0] * sf, t[1] * sf]
            },
            r()
        }
    }()()
  }

  function to(t, e) {
    return [t, ff(yf((nf + e) / 2))]
  }

  function eo(t, e) {
    return [ff(yf((nf + e) / 2)), -t]
  }

  function no(t, n, r, i) {
    var e = t.properties || {},
      o = "Feature" === t.type ? t.geometry : t;
    if ("GeometryCollection" === o.type) {
      var s = [];
      return S(t, function (t) {
          var e = no(t, n, r, i);
          e && s.push(e)
        }),
        X(s)
    }
    var a, u = V(t),
      c = 50 < u[1] && 50 < u[3];
    a = c ? {
      type: o.type,
      coordinates: function e(t, n) {
        return "object" != typeof t[0] ? n(t) : t.map(function (t) {
          return e(t, n)
        })
      }(o.coordinates, ro(o))
    } : Ze(o);
    var h, l = (new kc).read(a),
      p = g(d(n, r), "meters"),
      f = Ol.bufferOp(l, p);
    if (! function t(e) {
        return Array.isArray(e[0]) ? t(e[0]) : isNaN(e[0])
      }((f = (new zc).write(f)).coordinates))
      return (h = c ? {
        type: f.type,
        coordinates: function e(t, n) {
          return "object" != typeof t[0] ? n.invert(t) : t.map(function (t) {
            return e(t, n)
          })
        }(f.coordinates, ro(o))
      } : Ke(f)).geometry ? h : B(h, e)
  }

  function ro(t) {
    var e = se(t).geometry.coordinates.reverse(),
      n = e.map(function (t) {
        return -t
      });
    return Xf().center(e).rotate(n).scale(lo)
  }

  function io() {
    for (var t = new kc, e = t.read(JSON.stringify(arguments[0].geometry)), n = 1; n < arguments.length; n++)
      e = Kp.union(e, t.read(JSON.stringify(arguments[n].geometry)));
    return {
      type: "Feature",
      geometry: e = (new zc).write(e),
      properties: arguments[0].properties
    }
  }

  function oo(t, e) {
    var n = J(t),
      r = J(e);
    if (Ht(_n(r, {
        precision: 4
      })).coordinates[0].length < 4)
      return null;
    if (Ht(_n(n, {
        precision: 4
      })).coordinates[0].length < 4)
      return null;
    var i = new kc,
      o = i.read(_n(n)),
      s = i.read(_n(r)),
      a = jp.intersection(o, s);
    return a.isEmpty() ? null : B((new zc).write(a))
  }

  function so(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.properties || {},
      i = n.triangles,
      o = n.mask;
    if (null == e)
      throw new Error("cellSide is required");
    if (!U(e))
      throw new Error("cellSide is invalid");
    if (!t)
      throw new Error("bbox is required");
    if (!Array.isArray(t))
      throw new Error("bbox must be array");
    if (4 !== t.length)
      throw new Error("bbox must contain 4 numbers");
    if (o && -1 === ["Polygon", "MultiPolygon"].indexOf(K(o)))
      throw new Error("options.mask must be a (Multi)Polygon");
    var s = t[0],
      a = t[1],
      u = t[2],
      c = t[3],
      h = (a + c) / 2,
      l = (s + u) / 2,
      p = 2 * e / Dt([s, h], [u, h], n) * (u - s),
      f = 2 * e / Dt([l, a], [l, c], n) * (c - a),
      g = p / 2,
      d = 2 * g,
      y = Math.sqrt(3) / 2 * f,
      _ = u - s,
      m = c - a,
      v = .75 * d,
      x = y,
      E = (_ - d) / (d - g / 2),
      w = Math.floor(E),
      b = (w * v - g / 2 - _) / 2 - g / 2 + v / 2,
      I = Math.floor((m - y) / y),
      N = (m - I * y) / 2,
      C = y / 2 < I * y - m;
    C && (N -= y / 4);
    for (var S = [], M = [], L = 0; L < 6; L++) {
      var P = 2 * Math.PI / 6 * L;
      S.push(Math.cos(P)),
        M.push(Math.sin(P))
    }
    for (var O = [], R = 0; R <= w; R++)
      for (var T = 0; T <= I; T++) {
        var A = R % 2 == 1;
        if (!(0 === T && A || 0 === T && C)) {
          var D = R * v + s - b,
            F = T * x + a + N;
          if (A && (F -= y / 2),
            !0 === i)
            (function (t, e, n, r, i, o) {
              for (var s = [], a = 0; a < 6; a++) {
                var u = [];
                u.push(t),
                  u.push([t[0] + e * i[a], t[1] + n * o[a]]),
                  u.push([t[0] + e * i[(a + 1) % 6], t[1] + n * o[(a + 1) % 6]]),
                  u.push(t),
                  s.push(z([u], r))
              }
              return s
            })([D, F], p / 2, f / 2, r, S, M).forEach(function (t) {
              o ? oo(o, t) && O.push(t) : O.push(t)
            });
          else {
            var q = function (t, e, n, r, i, o) {
              for (var s = [], a = 0; a < 6; a++) {
                var u = t[0] + e * i[a],
                  c = t[1] + n * o[a];
                s.push([u, c])
              }
              return s.push(s[0].slice()),
                z([s], r)
            }([D, F], p / 2, f / 2, r, S, M);
            o ? oo(o, q) && O.push(q) : O.push(q)
          }
        }
      }
    return X(O)
  }

  function ao(t) {
    if (t.features.length <= 1)
      return t;
    var e, n, r, o = (e = t,
        n = wo(),
        r = [],
        L(e, function (t, e) {
          var n = V(t);
          r.push({
            minX: n[0],
            minY: n[1],
            maxX: n[2],
            maxY: n[3],
            geojson: t,
            index: e
          })
        }),
        n.load(r),
        n),
      s = [],
      a = {};
    return L(t, function (t, e) {
        if (a[e])
          return !0;
        for (o.remove({
            index: e
          }, uo),
          a[e] = !0;;) {
          var n = V(t),
            r = o.search({
              minX: n[0],
              minY: n[1],
              maxX: n[2],
              maxY: n[3]
            });
          if (0 < r.length) {
            var i = r.map(function (t) {
              return a[t.index] = !0,
                o.remove({
                  index: t.index
                }, uo),
                t.geojson
            });
            i.push(t),
              t = io.apply(this, i)
          }
          if (0 === r.length)
            break
        }
        s.push(t)
      }),
      X(s)
  }

  function uo(t, e) {
    return t.index === e.index
  }

  function co(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.properties,
      i = n.mask,
      o = [];
    if (null == e)
      throw new Error("cellSide is required");
    if (!U(e))
      throw new Error("cellSide is invalid");
    if (!t)
      throw new Error("bbox is required");
    if (!Array.isArray(t))
      throw new Error("bbox must be array");
    if (4 !== t.length)
      throw new Error("bbox must contain 4 numbers");
    if (i && -1 === ["Polygon", "MultiPolygon"].indexOf(K(i)))
      throw new Error("options.mask must be a (Multi)Polygon");
    for (var s = t[0], a = t[1], u = t[2], c = t[3], h = e / Dt([s, a], [u, a], n) * (u - s), l = e / Dt([s, a], [s, c], n) * (c - a), p = u - s, f = c - a, g = Math.floor(p / h), d = Math.floor(f / l), y = (f - d * l) / 2, _ = s + (p - g * h) / 2, m = 0; m < g; m++) {
      for (var v = a + y, x = 0; x < d; x++) {
        var E = z([
          [
            [_, v],
            [_, v + l],
            [_ + h, v + l],
            [_ + h, v],
            [_, v]
          ]
        ], r);
        i ? oo(i, E) && o.push(E) : o.push(E),
          v += l
      }
      _ += h
    }
    return X(o)
  }

  function ho(t, e, n) {
    if (!Y(n = n || {}))
      throw new Error("options is invalid");
    var r = n.properties,
      i = n.mask,
      o = [];
    if (null == e)
      throw new Error("cellSide is required");
    if (!U(e))
      throw new Error("cellSide is invalid");
    if (!t)
      throw new Error("bbox is required");
    if (!Array.isArray(t))
      throw new Error("bbox must be array");
    if (4 !== t.length)
      throw new Error("bbox must contain 4 numbers");
    if (i && -1 === ["Polygon", "MultiPolygon"].indexOf(K(i)))
      throw new Error("options.mask must be a (Multi)Polygon");
    for (var s = e / Dt([t[0], t[1]], [t[2], t[1]], n) * (t[2] - t[0]), a = e / Dt([t[0], t[1]], [t[0], t[3]], n) * (t[3] - t[1]), u = 0, c = t[0]; c <= t[2];) {
      for (var h = 0, l = t[1]; l <= t[3];) {
        var p = null,
          f = null;
        u % 2 == 0 && h % 2 == 0 ? (p = z([
              [
                [c, l],
                [c, l + a],
                [c + s, l],
                [c, l]
              ]
            ], r),
            f = z([
              [
                [c, l + a],
                [c + s, l + a],
                [c + s, l],
                [c, l + a]
              ]
            ], r)) : u % 2 == 0 && h % 2 == 1 ? (p = z([
              [
                [c, l],
                [c + s, l + a],
                [c + s, l],
                [c, l]
              ]
            ], r),
            f = z([
              [
                [c, l],
                [c, l + a],
                [c + s, l + a],
                [c, l]
              ]
            ], r)) : h % 2 == 0 && u % 2 == 1 ? (p = z([
              [
                [c, l],
                [c, l + a],
                [c + s, l + a],
                [c, l]
              ]
            ], r),
            f = z([
              [
                [c, l],
                [c + s, l + a],
                [c + s, l],
                [c, l]
              ]
            ], r)) : h % 2 == 1 && u % 2 == 1 && (p = z([
              [
                [c, l],
                [c, l + a],
                [c + s, l],
                [c, l]
              ]
            ], r),
            f = z([
              [
                [c, l + a],
                [c + s, l + a],
                [c + s, l],
                [c, l + a]
              ]
            ], r)),
          i ? (oo(i, p) && o.push(p),
            oo(i, f) && o.push(f)) : (o.push(p),
            o.push(f)),
          l += a,
          h++
      }
      u++,
      c += s
    }
    return X(o)
  }
  var lo = 6371008.8,
    po = {
      meters: lo,
      metres: lo,
      millimeters: 1e3 * lo,
      millimetres: 1e3 * lo,
      centimeters: 100 * lo,
      centimetres: 100 * lo,
      kilometers: lo / 1e3,
      kilometres: lo / 1e3,
      miles: lo / 1609.344,
      nauticalmiles: lo / 1852,
      inches: 39.37 * lo,
      yards: lo / 1.0936,
      feet: 3.28084 * lo,
      radians: 1,
      degrees: lo / 111325
    },
    fo = {
      meters: 1,
      metres: 1,
      millimeters: 1e3,
      millimetres: 1e3,
      centimeters: 100,
      centimetres: 100,
      kilometers: .001,
      kilometres: .001,
      miles: 1 / 1609.344,
      nauticalmiles: 1 / 1852,
      inches: 39.37,
      yards: 1 / 1.0936,
      feet: 3.28084,
      radians: 1 / lo,
      degrees: 1 / 111325
    },
    go = {
      meters: 1,
      metres: 1,
      millimeters: 1e6,
      millimetres: 1e6,
      centimeters: 1e4,
      centimetres: 1e4,
      kilometers: 1e-6,
      kilometres: 1e-6,
      acres: 247105e-9,
      miles: 386e-9,
      yards: 1.195990046,
      feet: 10.763910417,
      inches: 1550.003100006
    },
    yo = Object.freeze({
      earthRadius: lo,
      factors: po,
      unitsFactors: fo,
      areaFactors: go,
      feature: B,
      geometry: e,
      point: k,
      points: n,
      polygon: z,
      polygons: r,
      lineString: j,
      lineStrings: i,
      featureCollection: X,
      multiLineString: v,
      multiPoint: o,
      multiPolygon: x,
      geometryCollection: s,
      round: a,
      radiansToLength: g,
      lengthToRadians: d,
      lengthToDegrees: u,
      bearingToAzimuth: p,
      radiansToDegrees: f,
      degreesToRadians: m,
      convertLength: c,
      convertArea: h,
      isNumber: U,
      isObject: Y,
      validateBBox: l,
      validateId: y,
      radians2degrees: function () {
        throw new Error("method has been renamed to `radiansToDegrees`")
      },
      degrees2radians: function () {
        throw new Error("method has been renamed to `degreesToRadians`")
      },
      distanceToDegrees: function () {
        throw new Error("method has been renamed to `lengthToDegrees`")
      },
      distanceToRadians: function () {
        throw new Error("method has been renamed to `lengthToRadians`")
      },
      radiansToDistance: function () {
        throw new Error("method has been renamed to `radiansToLength`")
      },
      bearingToAngle: function () {
        throw new Error("method has been renamed to `bearingToAzimuth`")
      },
      convertDistance: function () {
        throw new Error("method has been renamed to `convertLength`")
      }
    }),
    _o = Object.freeze({
      coordEach: w,
      coordReduce: _,
      propEach: E,
      propReduce: b,
      featureEach: I,
      featureReduce: N,
      coordAll: C,
      geomEach: S,
      geomReduce: M,
      flattenEach: L,
      flattenReduce: P,
      segmentEach: O,
      segmentReduce: R,
      lineEach: T,
      lineReduce: A
    }),
    mo = Object.freeze({
      getCoord: H,
      getCoords: D,
      containsNumber: F,
      geojsonType: q,
      featureOf: G,
      collectionOf: W,
      getGeom: J,
      getGeomType: Z,
      getType: K
    }),
    vo = {
      successCallback: null,
      verbose: !1
    },
    xo = {},
    Eo = function t(e, n, r, i, o) {
      for (r = r || 0,
        i = i || e.length - 1,
        o = o || function (t, e) {
          return t < e ? -1 : e < t ? 1 : 0
        }; r < i;) {
        if (600 < i - r) {
          var s = i - r + 1,
            a = n - r + 1,
            u = Math.log(s),
            c = .5 * Math.exp(2 * u / 3),
            h = .5 * Math.sqrt(u * c * (s - c) / s) * (a - s / 2 < 0 ? -1 : 1);
          t(e, n, Math.max(r, Math.floor(n - a * c / s + h)), Math.min(i, Math.floor(n + (s - a) * c / s + h)), o)
        }
        var l = e[n],
          p = r,
          f = i;
        for (rt(e, r, n),
          0 < o(e[i], l) && rt(e, r, i); p < f;) {
          for (rt(e, p, f),
            p++,
            f--; o(e[p], l) < 0;)
            p++;
          for (; 0 < o(e[f], l);)
            f--
        }
        0 === o(e[r], l) ? rt(e, r, f) : rt(e, ++f, i),
          f <= n && (r = f + 1),
          n <= f && (i = f - 1)
      }
    },
    wo = it;
  it.prototype = {
    all: function () {
      return this._all(this.data, [])
    },
    search: function (t) {
      var e = this.data,
        n = [],
        r = this.toBBox;
      if (!ft(t, e))
        return n;
      for (var i, o, s, a, u = []; e;) {
        for (i = 0,
          o = e.children.length; i < o; i++)
          s = e.children[i],
          ft(t, a = e.leaf ? r(s) : s) && (e.leaf ? n.push(s) : pt(t, a) ? this._all(s, n) : u.push(s));
        e = u.pop()
      }
      return n
    },
    collides: function (t) {
      var e = this.data,
        n = this.toBBox;
      if (!ft(t, e))
        return !1;
      for (var r, i, o, s, a = []; e;) {
        for (r = 0,
          i = e.children.length; r < i; r++)
          if (o = e.children[r],
            ft(t, s = e.leaf ? n(o) : o)) {
            if (e.leaf || pt(t, s))
              return !0;
            a.push(o)
          }
        e = a.pop()
      }
      return !1
    },
    load: function (t) {
      if (!t || !t.length)
        return this;
      if (t.length < this._minEntries) {
        for (var e = 0, n = t.length; e < n; e++)
          this.insert(t[e]);
        return this
      }
      var r = this._build(t.slice(), 0, t.length - 1, 0);
      if (this.data.children.length)
        if (this.data.height === r.height)
          this._splitRoot(this.data, r);
        else {
          if (this.data.height < r.height) {
            var i = this.data;
            this.data = r,
              r = i
          }
          this._insert(r, this.data.height - r.height - 1, !0)
        }
      else
        this.data = r;
      return this
    },
    insert: function (t) {
      return t && this._insert(t, this.data.height - 1),
        this
    },
    clear: function () {
      return this.data = gt([]),
        this
    },
    remove: function (t, e) {
      if (!t)
        return this;
      for (var n, r, i, o, s = this.data, a = this.toBBox(t), u = [], c = []; s || u.length;) {
        if (s || (s = u.pop(),
            r = u[u.length - 1],
            n = c.pop(),
            o = !0),
          s.leaf && -1 !== (i = function (t, e, n) {
            if (!n)
              return e.indexOf(t);
            for (var r = 0; r < e.length; r++)
              if (n(t, e[r]))
                return r;
            return -1
          }(t, s.children, e)))
          return s.children.splice(i, 1),
            u.push(s),
            this._condense(u),
            this;
        o || s.leaf || !pt(s, a) ? r ? (n++,
          s = r.children[n],
          o = !1) : s = null : (u.push(s),
          c.push(n),
          n = 0,
          s = (r = s).children[0])
      }
      return this
    },
    toBBox: function (t) {
      return t
    },
    compareMinX: ut,
    compareMinY: ct,
    toJSON: function () {
      return this.data
    },
    fromJSON: function (t) {
      return this.data = t,
        this
    },
    _all: function (t, e) {
      for (var n = []; t;)
        t.leaf ? e.push.apply(e, t.children) : n.push.apply(n, t.children),
        t = n.pop();
      return e
    },
    _build: function (t, e, n, r) {
      var i, o = n - e + 1,
        s = this._maxEntries;
      if (o <= s)
        return ot(i = gt(t.slice(e, n + 1)), this.toBBox),
          i;
      r || (r = Math.ceil(Math.log(o) / Math.log(s)),
          s = Math.ceil(o / Math.pow(s, r - 1))),
        (i = gt([])).leaf = !1,
        i.height = r;
      var a, u, c, h, l = Math.ceil(o / s),
        p = l * Math.ceil(Math.sqrt(s));
      for (dt(t, e, n, p, this.compareMinX),
        a = e; a <= n; a += p)
        for (dt(t, a, c = Math.min(a + p - 1, n), l, this.compareMinY),
          u = a; u <= c; u += l)
          h = Math.min(u + l - 1, c),
          i.children.push(this._build(t, u, h, r - 1));
      return ot(i, this.toBBox),
        i
    },
    _chooseSubtree: function (t, e, n, r) {
      for (var i, o, s, a, u, c, h, l; r.push(e),
        !e.leaf && r.length - 1 !== n;) {
        for (h = l = 1 / 0,
          i = 0,
          o = e.children.length; i < o; i++)
          u = ht(s = e.children[i]),
          p = t,
          f = s,
          (c = (Math.max(f.maxX, p.maxX) - Math.min(f.minX, p.minX)) * (Math.max(f.maxY, p.maxY) - Math.min(f.minY, p.minY)) - u) < l ? (l = c,
            h = u < h ? u : h,
            a = s) : c === l && u < h && (h = u,
            a = s);
        e = a || e.children[0]
      }
      var p, f;
      return e
    },
    _insert: function (t, e, n) {
      var r = this.toBBox,
        i = n ? t : r(t),
        o = [],
        s = this._chooseSubtree(i, this.data, e, o);
      for (s.children.push(t),
        at(s, i); 0 <= e && o[e].children.length > this._maxEntries;)
        this._split(o, e),
        e--;
      this._adjustParentBBoxes(i, o, e)
    },
    _split: function (t, e) {
      var n = t[e],
        r = n.children.length,
        i = this._minEntries;
      this._chooseSplitAxis(n, i, r);
      var o = this._chooseSplitIndex(n, i, r),
        s = gt(n.children.splice(o, n.children.length - o));
      s.height = n.height,
        s.leaf = n.leaf,
        ot(n, this.toBBox),
        ot(s, this.toBBox),
        e ? t[e - 1].children.push(s) : this._splitRoot(n, s)
    },
    _splitRoot: function (t, e) {
      this.data = gt([t, e]),
        this.data.height = t.height + 1,
        this.data.leaf = !1,
        ot(this.data, this.toBBox)
    },
    _chooseSplitIndex: function (t, e, n) {
      var r, i, o, s, a, u, c, h, l, p, f, g, d, y;
      for (u = c = 1 / 0,
        r = e; r <= n - e; r++)
        l = i = st(t, 0, r, this.toBBox),
        p = o = st(t, r, n, this.toBBox),
        void 0,
        f = Math.max(l.minX, p.minX),
        g = Math.max(l.minY, p.minY),
        d = Math.min(l.maxX, p.maxX),
        y = Math.min(l.maxY, p.maxY),
        s = Math.max(0, d - f) * Math.max(0, y - g),
        a = ht(i) + ht(o),
        s < u ? (u = s,
          h = r,
          c = a < c ? a : c) : s === u && a < c && (c = a,
          h = r);
      return h
    },
    _chooseSplitAxis: function (t, e, n) {
      var r = t.leaf ? this.compareMinX : ut,
        i = t.leaf ? this.compareMinY : ct;
      this._allDistMargin(t, e, n, r) < this._allDistMargin(t, e, n, i) && t.children.sort(r)
    },
    _allDistMargin: function (t, e, n, r) {
      t.children.sort(r);
      var i, o, s = this.toBBox,
        a = st(t, 0, e, s),
        u = st(t, n - e, n, s),
        c = lt(a) + lt(u);
      for (i = e; i < n - e; i++)
        o = t.children[i],
        at(a, t.leaf ? s(o) : o),
        c += lt(a);
      for (i = n - e - 1; e <= i; i--)
        o = t.children[i],
        at(u, t.leaf ? s(o) : o),
        c += lt(u);
      return c
    },
    _adjustParentBBoxes: function (t, e, n) {
      for (var r = n; 0 <= r; r--)
        at(e[r], t)
    },
    _condense: function (t) {
      for (var e, n = t.length - 1; 0 <= n; n--)
        0 === t[n].children.length ? 0 < n ? (e = t[n - 1].children).splice(e.indexOf(t[n]), 1) : this.clear() : ot(t[n], this.toBBox)
    },
    _initFormat: function (t) {
      var e = ["return a", " - b", ";"];
      this.compareMinX = new Function("a", "b", e.join(t[0])),
        this.compareMinY = new Function("a", "b", e.join(t[1])),
        this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};")
    }
  };
  var bo = function (t, e, n) {
      var r = t * e,
        i = Io * t,
        o = i - (i - t),
        s = t - o,
        a = Io * e,
        u = a - (a - e),
        c = e - u,
        h = s * c - (r - o * u - s * u - o * c);
      return n ? (n[0] = h,
        n[1] = r,
        n) : [h, r]
    },
    Io = +(Math.pow(2, 27) + 1),
    No = function (t, e) {
      var n, r, i, o, s, a = 0 | t.length,
        u = 0 | e.length;
      if (1 === a && 1 === u)
        return n = t[0],
          r = e[0],
          (s = n - ((i = n + r) - (o = i - n)) + (r - o)) ? [s, i] : [i];
      var c, h, l = new Array(a + u),
        p = 0,
        f = 0,
        g = 0,
        d = Math.abs,
        y = t[f],
        _ = d(y),
        m = e[g],
        v = d(m);
      _ < v ? (h = y,
          (f += 1) < a && (_ = d(y = t[f]))) : (h = m,
          (g += 1) < u && (v = d(m = e[g]))),
        f < a && _ < v || u <= g ? (c = y,
          (f += 1) < a && (_ = d(y = t[f]))) : (c = m,
          (g += 1) < u && (v = d(m = e[g])));
      for (var x, E, w = c + h, b = w - c, I = h - b, N = I, C = w; f < a && g < u;)
        _ < v ? (c = y,
          (f += 1) < a && (_ = d(y = t[f]))) : (c = m,
          (g += 1) < u && (v = d(m = e[g]))),
        (I = (h = N) - (b = (w = c + h) - c)) && (l[p++] = I),
        N = C - ((x = C + w) - (E = x - C)) + (w - E),
        C = x;
      for (; f < a;)
        (I = (h = N) - (b = (w = (c = y) + h) - c)) && (l[p++] = I),
        N = C - ((x = C + w) - (E = x - C)) + (w - E),
        C = x,
        (f += 1) < a && (y = t[f]);
      for (; g < u;)
        (I = (h = N) - (b = (w = (c = m) + h) - c)) && (l[p++] = I),
        N = C - ((x = C + w) - (E = x - C)) + (w - E),
        C = x,
        (g += 1) < u && (m = e[g]);
      return N && (l[p++] = N),
        C && (l[p++] = C),
        p || (l[p++] = 0),
        l.length = p,
        l
    },
    Co = function (t, e) {
      var n = t.length;
      if (1 === n) {
        var r = bo(t[0], e);
        return r[0] ? r : [r[1]]
      }
      var i, o, s, a, u, c, h, l = new Array(2 * n),
        p = [.1, .1],
        f = [.1, .1],
        g = 0;
      bo(t[0], e, p),
        p[0] && (l[g++] = p[0]);
      for (var d = 1; d < n; ++d) {
        bo(t[d], e, f);
        var y = p[1];
        void 0,
        c = (o = f[0]) - (u = (a = (i = y) + o) - i),
          h = i - (a - u),
          (s = p) && (s[0] = h + c,
            s[1] = a),
          p[0] && (l[g++] = p[0]);
        var _ = f[1],
          m = p[1],
          v = _ + m,
          x = m - (v - _);
        p[1] = v,
          x && (l[g++] = x)
      }
      return p[1] && (l[g++] = p[1]),
        0 === g && (l[g++] = 0),
        l.length = g,
        l
    },
    So = function (t, e) {
      var n, r, i, o, s, a = 0 | t.length,
        u = 0 | e.length;
      if (1 === a && 1 === u)
        return n = t[0],
          r = -e[0],
          (s = n - ((i = n + r) - (o = i - n)) + (r - o)) ? [s, i] : [i];
      var c, h, l = new Array(a + u),
        p = 0,
        f = 0,
        g = 0,
        d = Math.abs,
        y = t[f],
        _ = d(y),
        m = -e[g],
        v = d(m);
      _ < v ? (h = y,
          (f += 1) < a && (_ = d(y = t[f]))) : (h = m,
          (g += 1) < u && (v = d(m = -e[g]))),
        f < a && _ < v || u <= g ? (c = y,
          (f += 1) < a && (_ = d(y = t[f]))) : (c = m,
          (g += 1) < u && (v = d(m = -e[g])));
      for (var x, E, w = c + h, b = w - c, I = h - b, N = I, C = w; f < a && g < u;)
        _ < v ? (c = y,
          (f += 1) < a && (_ = d(y = t[f]))) : (c = m,
          (g += 1) < u && (v = d(m = -e[g]))),
        (I = (h = N) - (b = (w = c + h) - c)) && (l[p++] = I),
        N = C - ((x = C + w) - (E = x - C)) + (w - E),
        C = x;
      for (; f < a;)
        (I = (h = N) - (b = (w = (c = y) + h) - c)) && (l[p++] = I),
        N = C - ((x = C + w) - (E = x - C)) + (w - E),
        C = x,
        (f += 1) < a && (y = t[f]);
      for (; g < u;)
        (I = (h = N) - (b = (w = (c = m) + h) - c)) && (l[p++] = I),
        N = C - ((x = C + w) - (E = x - C)) + (w - E),
        C = x,
        (g += 1) < u && (m = -e[g]);
      return N && (l[p++] = N),
        C && (l[p++] = C),
        p || (l[p++] = 0),
        l.length = p,
        l
    },
    Mo = yt(function (o) {
      function h(t, e) {
        for (var n = new Array(t.length - 1), r = 1; r < t.length; ++r)
          for (var i = n[r - 1] = new Array(t.length - 1), o = 0, s = 0; o < t.length; ++o)
            o !== e && (i[s++] = t[r][o]);
        return n
      }

      function l(t) {
        if (1 === t.length)
          return t[0];
        if (2 === t.length)
          return ["sum(", t[0], ",", t[1], ")"].join("");
        var e = t.length >> 1;
        return ["sum(", l(t.slice(0, e)), ",", l(t.slice(e)), ")"].join("")
      }

      function p(t) {
        if (2 === t.length)
          return [
            ["sum(prod(", t[0][0], ",", t[1][1], "),prod(-", t[0][1], ",", t[1][0], "))"].join("")
          ];
        for (var e = [], n = 0; n < t.length; ++n)
          e.push(["scale(", l(p(h(t, n))), ",", (r = n,
            1 & r ? "-" : ""), t[0][n], ")"].join(""));
        var r;
        return e
      }

      function s(t) {
        for (var e = [], n = [], r = function (t) {
            for (var e = new Array(t), n = 0; n < t; ++n) {
              e[n] = new Array(t);
              for (var r = 0; r < t; ++r)
                e[n][r] = ["m", r, "[", t - n - 1, "]"].join("")
            }
            return e
          }(t), i = [], o = 0; o < t; ++o)
          0 == (1 & o) ? e.push.apply(e, p(h(r, o))) : n.push.apply(n, p(h(r, o))),
          i.push("m" + o);
        var s = l(e),
          a = l(n),
          u = "orientation" + t + "Exact",
          c = ["function ", u, "(", i.join(), "){var p=", s, ",n=", a, ",d=sub(p,n);return d[d.length-1];};return ", u].join("");
        return new Function("sum", "prod", "scale", "sub", c)(No, bo, Co, So)
      }
      var u = s(3),
        E = s(4),
        a = [function () {
          return 0
        }, function () {
          return 0
        }, function (t, e) {
          return e[0] - t[0]
        }, function (t, e, n) {
          var r, i = (t[1] - n[1]) * (e[0] - n[0]),
            o = (t[0] - n[0]) * (e[1] - n[1]),
            s = i - o;
          if (0 < i) {
            if (o <= 0)
              return s;
            r = i + o
          } else {
            if (!(i < 0))
              return s;
            if (0 <= o)
              return s;
            r = -(i + o)
          }
          var a = 33306690738754716e-32 * r;
          return a <= s || s <= -a ? s : u(t, e, n)
        }, function (t, e, n, r) {
          var i = t[0] - r[0],
            o = e[0] - r[0],
            s = n[0] - r[0],
            a = t[1] - r[1],
            u = e[1] - r[1],
            c = n[1] - r[1],
            h = t[2] - r[2],
            l = e[2] - r[2],
            p = n[2] - r[2],
            f = o * c,
            g = s * u,
            d = s * a,
            y = i * c,
            _ = i * u,
            m = o * a,
            v = h * (f - g) + l * (d - y) + p * (_ - m),
            x = 7771561172376103e-31 * ((Math.abs(f) + Math.abs(g)) * Math.abs(h) + (Math.abs(d) + Math.abs(y)) * Math.abs(l) + (Math.abs(_) + Math.abs(m)) * Math.abs(p));
          return x < v || x < -v ? v : E(t, e, n, r)
        }];
      ! function () {
        for (; a.length <= 5;)
          a.push(s(a.length));
        for (var t = [], e = ["slow"], n = 0; n <= 5; ++n)
          t.push("a" + n),
          e.push("o" + n);
        var r = ["function getOrientation(", t.join(), "){switch(arguments.length){case 0:case 1:return 0;"];
        for (n = 2; n <= 5; ++n)
          r.push("case ", n, ":return o", n, "(", t.slice(0, n).join(), ");");
        r.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"),
          e.push(r.join(""));
        var i = Function.apply(void 0, e);
        for (o.exports = i.apply(void 0, [function (t) {
            var e = a[t.length];
            return e || (e = a[t.length] = s(t.length)),
              e.apply(void 0, t)
          }].concat(a)),
          n = 0; n <= 5; ++n)
          o.exports[n] = a[n]
      }()
    }),
    Lo = Mo[3],
    Po = _t,
    Oo = _t;
  _t.prototype = {
      push: function (t) {
        this.data.push(t),
          this.length++,
          this._up(this.length - 1)
      },
      pop: function () {
        if (0 !== this.length) {
          var t = this.data[0];
          return this.length--,
            0 < this.length && (this.data[0] = this.data[this.length],
              this._down(0)),
            this.data.pop(),
            t
        }
      },
      peek: function () {
        return this.data[0]
      },
      _up: function (t) {
        for (var e = this.data, n = this.compare, r = e[t]; 0 < t;) {
          var i = t - 1 >> 1,
            o = e[i];
          if (0 <= n(r, o))
            break;
          e[t] = o,
            t = i
        }
        e[t] = r
      },
      _down: function (t) {
        for (var e = this.data, n = this.compare, r = this.length >> 1, i = e[t]; t < r;) {
          var o = 1 + (t << 1),
            s = o + 1,
            a = e[o];
          if (s < this.length && n(e[s], a) < 0 && (a = e[o = s]),
            0 <= n(a, i))
            break;
          e[t] = a,
            t = o
        }
        e[t] = i
      }
    },
    Po.default = Oo;
  var Ro = function (t, e) {
      for (var n = t[0], r = t[1], i = !1, o = 0, s = e.length - 1; o < e.length; s = o++) {
        var a = e[o][0],
          u = e[o][1],
          c = e[s][0],
          h = e[s][1];
        r < u != r < h && n < (c - a) * (r - u) / (h - u) + a && (i = !i)
      }
      return i
    },
    To = Mo[3],
    Ao = mt,
    Do = mt;
  Ao.default = Do;
  var Fo = function (t) {
      return t
    },
    qo = function (t) {
      if (null == t)
        return Fo;
      var o, s, a = t.scale[0],
        u = t.scale[1],
        c = t.translate[0],
        h = t.translate[1];
      return function (t, e) {
        e || (o = s = 0);
        var n = 2,
          r = t.length,
          i = new Array(r);
        for (i[0] = (o += t[0]) * a + c,
          i[1] = (s += t[1]) * u + h; n < r;)
          i[n] = t[n],
          ++n;
        return i
      }
    },
    Go = function (t, e) {
      for (var n, r = t.length, i = r - e; i < --r;)
        n = t[i],
        t[i++] = t[r],
        t[r] = n
    },
    Bo = function (o, s, a, t, u, e) {
      3 === arguments.length && (t = e = Array,
        u = null);
      for (var c = new t(o = 1 << Math.max(4, Math.ceil(Math.log(o) / Math.LN2))), h = new e(o), l = o - 1, n = 0; n < o; ++n)
        c[n] = u;
      return {
        set: function (t, e) {
          for (var n = s(t) & l, r = c[n], i = 0; r != u;) {
            if (a(r, t))
              return h[n] = e;
            if (++i >= o)
              throw new Error("full hashmap");
            r = c[n = n + 1 & l]
          }
          return c[n] = t,
            h[n] = e
        },
        maybeSet: function (t, e) {
          for (var n = s(t) & l, r = c[n], i = 0; r != u;) {
            if (a(r, t))
              return h[n];
            if (++i >= o)
              throw new Error("full hashmap");
            r = c[n = n + 1 & l]
          }
          return c[n] = t,
            h[n] = e
        },
        get: function (t, e) {
          for (var n = s(t) & l, r = c[n], i = 0; r != u;) {
            if (a(r, t))
              return h[n];
            if (++i >= o)
              break;
            r = c[n = n + 1 & l]
          }
          return e
        },
        keys: function () {
          for (var t = [], e = 0, n = c.length; e < n; ++e) {
            var r = c[e];
            r != u && t.push(r)
          }
          return t
        }
      }
    },
    ko = function (t, e) {
      return t[0] === e[0] && t[1] === e[1]
    },
    zo = new ArrayBuffer(16),
    jo = new Float64Array(zo),
    Xo = new Uint32Array(zo),
    Uo = function (t) {
      jo[0] = t[0],
        jo[1] = t[1];
      var e = Xo[0] ^ Xo[1];
      return 2147483647 & (e << 5 ^ e >> 7 ^ Xo[2] ^ Xo[3])
    },
    Yo = function (t) {
      this.points = t.points || [],
        this.duration = t.duration || 1e4,
        this.sharpness = t.sharpness || .85,
        this.centers = [],
        this.controls = [],
        this.stepLength = t.stepLength || 60,
        this.length = this.points.length;
      for (var e = this.delay = 0; e < this.length; e++)
        this.points[e].z = this.points[e].z || 0;
      for (e = 0; e < this.length - 1; e++) {
        var n = this.points[e],
          r = this.points[e + 1];
        this.centers.push({
          x: (n.x + r.x) / 2,
          y: (n.y + r.y) / 2,
          z: (n.z + r.z) / 2
        })
      }
      for (this.controls.push([this.points[0], this.points[0]]),
        e = 0; e < this.centers.length - 1; e++) {
        n = this.centers[e],
          r = this.centers[e + 1];
        var i = this.points[e + 1].x - (this.centers[e].x + this.centers[e + 1].x) / 2,
          o = this.points[e + 1].y - (this.centers[e].y + this.centers[e + 1].y) / 2,
          s = this.points[e + 1].z - (this.centers[e].y + this.centers[e + 1].z) / 2;
        this.controls.push([{
          x: (1 - this.sharpness) * this.points[e + 1].x + this.sharpness * (this.centers[e].x + i),
          y: (1 - this.sharpness) * this.points[e + 1].y + this.sharpness * (this.centers[e].y + o),
          z: (1 - this.sharpness) * this.points[e + 1].z + this.sharpness * (this.centers[e].z + s)
        }, {
          x: (1 - this.sharpness) * this.points[e + 1].x + this.sharpness * (this.centers[e + 1].x + i),
          y: (1 - this.sharpness) * this.points[e + 1].y + this.sharpness * (this.centers[e + 1].y + o),
          z: (1 - this.sharpness) * this.points[e + 1].z + this.sharpness * (this.centers[e + 1].z + s)
        }])
      }
      return this.controls.push([this.points[this.length - 1], this.points[this.length - 1]]),
        this.steps = this.cacheSteps(this.stepLength),
        this
    };
  Yo.prototype.cacheSteps = function (t) {
      var e = [],
        n = this.pos(0);
      e.push(0);
      for (var r = 0; r < this.duration; r += 10) {
        var i = this.pos(r);
        Math.sqrt((i.x - n.x) * (i.x - n.x) + (i.y - n.y) * (i.y - n.y) + (i.z - n.z) * (i.z - n.z)) > t && (e.push(r),
          n = i)
      }
      return e
    },
    Yo.prototype.vector = function (t) {
      var e = this.pos(t + 10),
        n = this.pos(t - 10);
      return {
        angle: 180 * Math.atan2(e.y - n.y, e.x - n.x) / 3.14,
        speed: Math.sqrt((n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y) + (n.z - e.z) * (n.z - e.z))
      }
    },
    Yo.prototype.pos = function (t) {
      var e = t - this.delay;
      e < 0 && (e = 0),
        e > this.duration && (e = this.duration - 1);
      var n = e / this.duration;
      if (1 <= n)
        return this.points[this.length - 1];
      var r, i, o, s, a, u, c, h = Math.floor((this.points.length - 1) * n);
      return r = (this.length - 1) * n - h,
        i = this.points[h],
        o = this.controls[h][1],
        s = this.controls[h + 1][0],
        a = this.points[h + 1],
        c = [(u = r * r) * r, 3 * u * (1 - r), 3 * r * (1 - r) * (1 - r), (1 - r) * (1 - r) * (1 - r)], {
          x: a.x * c[0] + s.x * c[1] + o.x * c[2] + i.x * c[3],
          y: a.y * c[0] + s.y * c[1] + o.y * c[2] + i.y * c[3],
          z: a.z * c[0] + s.z * c[1] + o.z * c[2] + i.z * c[3]
        }
    };
  var Vo = ce,
    Ho = ce;
  ce.deviation = function (t, e, n, r) {
      var i = e && e.length,
        o = i ? e[0] * n : t.length,
        s = Math.abs(be(t, 0, o, n));
      if (i)
        for (var a = 0, u = e.length; a < u; a++) {
          var c = e[a] * n,
            h = a < u - 1 ? e[a + 1] * n : t.length;
          s -= Math.abs(be(t, c, h, n))
        }
      var l = 0;
      for (a = 0; a < r.length; a += 3) {
        var p = r[a] * n,
          f = r[a + 1] * n,
          g = r[a + 2] * n;
        l += Math.abs((t[p] - t[g]) * (t[f + 1] - t[p + 1]) - (t[p] - t[f]) * (t[g + 1] - t[p + 1]))
      }
      return 0 === s && 0 === l ? 0 : Math.abs((l - s) / s)
    },
    ce.flatten = function (t) {
      for (var e = t[0][0].length, n = {
          vertices: [],
          holes: [],
          dimensions: e
        }, r = 0, i = 0; i < t.length; i++) {
        for (var o = 0; o < t[i].length; o++)
          for (var s = 0; s < e; s++)
            n.vertices.push(t[i][o][s]);
        0 < i && (r += t[i - 1].length,
          n.holes.push(r))
      }
      return n
    },
    Vo.default = Ho,
    Me.prototype = {
      all: function () {
        return this._all(this.data, [])
      },
      search: function (t) {
        var e = this.data,
          n = [],
          r = this.toBBox;
        if (!qe(t, e))
          return n;
        for (var i, o, s, a, u = []; e;) {
          for (i = 0,
            o = e.children.length; i < o; i++)
            s = e.children[i],
            qe(t, a = e.leaf ? r(s) : s) && (e.leaf ? n.push(s) : Fe(t, a) ? this._all(s, n) : u.push(s));
          e = u.pop()
        }
        return n
      },
      collides: function (t) {
        var e = this.data,
          n = this.toBBox;
        if (!qe(t, e))
          return !1;
        for (var r, i, o, s, a = []; e;) {
          for (r = 0,
            i = e.children.length; r < i; r++)
            if (o = e.children[r],
              qe(t, s = e.leaf ? n(o) : o)) {
              if (e.leaf || Fe(t, s))
                return !0;
              a.push(o)
            }
          e = a.pop()
        }
        return !1
      },
      load: function (t) {
        if (!t || !t.length)
          return this;
        if (t.length < this._minEntries) {
          for (var e = 0, n = t.length; e < n; e++)
            this.insert(t[e]);
          return this
        }
        var r = this._build(t.slice(), 0, t.length - 1, 0);
        if (this.data.children.length)
          if (this.data.height === r.height)
            this._splitRoot(this.data, r);
          else {
            if (this.data.height < r.height) {
              var i = this.data;
              this.data = r,
                r = i
            }
            this._insert(r, this.data.height - r.height - 1, !0)
          }
        else
          this.data = r;
        return this
      },
      insert: function (t) {
        return t && this._insert(t, this.data.height - 1),
          this
      },
      clear: function () {
        return this.data = Ge([]),
          this
      },
      remove: function (t, e) {
        if (!t)
          return this;
        for (var n, r, i, o, s = this.data, a = this.toBBox(t), u = [], c = []; s || u.length;) {
          if (s || (s = u.pop(),
              r = u[u.length - 1],
              n = c.pop(),
              o = !0),
            s.leaf && -1 !== (i = function (t, e, n) {
              if (!n)
                return e.indexOf(t);
              for (var r = 0; r < e.length; r++)
                if (n(t, e[r]))
                  return r;
              return -1
            }(t, s.children, e)))
            return s.children.splice(i, 1),
              u.push(s),
              this._condense(u),
              this;
          o || s.leaf || !Fe(s, a) ? r ? (n++,
            s = r.children[n],
            o = !1) : s = null : (u.push(s),
            c.push(n),
            n = 0,
            s = (r = s).children[0])
        }
        return this
      },
      toBBox: function (t) {
        return t
      },
      compareMinX: Re,
      compareMinY: Te,
      toJSON: function () {
        return this.data
      },
      fromJSON: function (t) {
        return this.data = t,
          this
      },
      _all: function (t, e) {
        for (var n = []; t;)
          t.leaf ? e.push.apply(e, t.children) : n.push.apply(n, t.children),
          t = n.pop();
        return e
      },
      _build: function (t, e, n, r) {
        var i, o = n - e + 1,
          s = this._maxEntries;
        if (o <= s)
          return Le(i = Ge(t.slice(e, n + 1)), this.toBBox),
            i;
        r || (r = Math.ceil(Math.log(o) / Math.log(s)),
            s = Math.ceil(o / Math.pow(s, r - 1))),
          (i = Ge([])).leaf = !1,
          i.height = r;
        var a, u, c, h, l = Math.ceil(o / s),
          p = l * Math.ceil(Math.sqrt(s));
        for (Be(t, e, n, p, this.compareMinX),
          a = e; a <= n; a += p)
          for (Be(t, a, c = Math.min(a + p - 1, n), l, this.compareMinY),
            u = a; u <= c; u += l)
            h = Math.min(u + l - 1, c),
            i.children.push(this._build(t, u, h, r - 1));
        return Le(i, this.toBBox),
          i
      },
      _chooseSubtree: function (t, e, n, r) {
        for (var i, o, s, a, u, c, h, l; r.push(e),
          !e.leaf && r.length - 1 !== n;) {
          for (h = l = 1 / 0,
            i = 0,
            o = e.children.length; i < o; i++)
            u = Ae(s = e.children[i]),
            p = t,
            f = s,
            (c = (Math.max(f.maxX, p.maxX) - Math.min(f.minX, p.minX)) * (Math.max(f.maxY, p.maxY) - Math.min(f.minY, p.minY)) - u) < l ? (l = c,
              h = u < h ? u : h,
              a = s) : c === l && u < h && (h = u,
              a = s);
          e = a || e.children[0]
        }
        var p, f;
        return e
      },
      _insert: function (t, e, n) {
        var r = this.toBBox,
          i = n ? t : r(t),
          o = [],
          s = this._chooseSubtree(i, this.data, e, o);
        for (s.children.push(t),
          Oe(s, i); 0 <= e && o[e].children.length > this._maxEntries;)
          this._split(o, e),
          e--;
        this._adjustParentBBoxes(i, o, e)
      },
      _split: function (t, e) {
        var n = t[e],
          r = n.children.length,
          i = this._minEntries;
        this._chooseSplitAxis(n, i, r);
        var o = this._chooseSplitIndex(n, i, r),
          s = Ge(n.children.splice(o, n.children.length - o));
        s.height = n.height,
          s.leaf = n.leaf,
          Le(n, this.toBBox),
          Le(s, this.toBBox),
          e ? t[e - 1].children.push(s) : this._splitRoot(n, s)
      },
      _splitRoot: function (t, e) {
        this.data = Ge([t, e]),
          this.data.height = t.height + 1,
          this.data.leaf = !1,
          Le(this.data, this.toBBox)
      },
      _chooseSplitIndex: function (t, e, n) {
        var r, i, o, s, a, u, c, h, l, p, f, g, d, y;
        for (u = c = 1 / 0,
          r = e; r <= n - e; r++)
          l = i = Pe(t, 0, r, this.toBBox),
          p = o = Pe(t, r, n, this.toBBox),
          void 0,
          f = Math.max(l.minX, p.minX),
          g = Math.max(l.minY, p.minY),
          d = Math.min(l.maxX, p.maxX),
          y = Math.min(l.maxY, p.maxY),
          s = Math.max(0, d - f) * Math.max(0, y - g),
          a = Ae(i) + Ae(o),
          s < u ? (u = s,
            h = r,
            c = a < c ? a : c) : s === u && a < c && (c = a,
            h = r);
        return h
      },
      _chooseSplitAxis: function (t, e, n) {
        var r = t.leaf ? this.compareMinX : Re,
          i = t.leaf ? this.compareMinY : Te;
        this._allDistMargin(t, e, n, r) < this._allDistMargin(t, e, n, i) && t.children.sort(r)
      },
      _allDistMargin: function (t, e, n, r) {
        t.children.sort(r);
        var i, o, s = this.toBBox,
          a = Pe(t, 0, e, s),
          u = Pe(t, n - e, n, s),
          c = De(a) + De(u);
        for (i = e; i < n - e; i++)
          o = t.children[i],
          Oe(a, t.leaf ? s(o) : o),
          c += De(a);
        for (i = n - e - 1; e <= i; i--)
          o = t.children[i],
          Oe(u, t.leaf ? s(o) : o),
          c += De(u);
        return c
      },
      _adjustParentBBoxes: function (t, e, n) {
        for (var r = n; 0 <= r; r--)
          Oe(e[r], t)
      },
      _condense: function (t) {
        for (var e, n = t.length - 1; 0 <= n; n--)
          0 === t[n].children.length ? 0 < n ? (e = t[n - 1].children).splice(e.indexOf(t[n]), 1) : this.clear() : Le(t[n], this.toBBox)
      },
      _initFormat: function (t) {
        var e = ["return a", " - b", ";"];
        this.compareMinX = new Function("a", "b", e.join(t[0])),
          this.compareMinY = new Function("a", "b", e.join(t[1])),
          this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};")
      }
    };
  var Wo = Object.freeze({
      toMercator: Ze,
      toWgs84: Ke
    }),
    Jo = 6378137,
    Zo = function (t) {
      function e() {
        for (var t = [], e = 0; e < p.features.length; e++)
          -
          1 == p.features[e].properties.parent && t.push(e);
        if (1 < t.length)
          for (e = 0; e < t.length; e++) {
            for (var n = -1, r = 0; r < p.features.length; r++)
              t[e] != r && Mt(p.features[t[e]].geometry.coordinates[0][0], p.features[r], {
                ignoreBoundary: !0
              }) && sn(p.features[r]) < 1 / 0 && (n = r);
            p.features[t[e]].properties.parent = n
          }
      }

      function n() {
        for (var t = 0; t < p.features.length; t++)
          if (-1 == p.features[t].properties.parent) {
            var e = p.features[t].properties.winding;
            i(t, p.features[t].properties.netWinding = e)
          }
      }

      function i(t, e) {
        for (var n = 0; n < p.features.length; n++)
          if (p.features[n].properties.parent == t) {
            var r = e + p.features[n].properties.winding;
            i(n, p.features[n].properties.netWinding = r)
          }
      }
      if ("Feature" != t.type)
        throw new Error("The input must a geojson object of type Feature");
      if (void 0 === t.geometry || null == t.geometry)
        throw new Error("The input must a geojson object with a non-empty geometry");
      if ("Polygon" != t.geometry.type)
        throw new Error("The input must be a geojson Polygon");
      for (var r = t.geometry.coordinates.length, o = [], s = 0; s < r; s++) {
        var a = t.geometry.coordinates[s];
        xn(a[0], a[a.length - 1]) || a.push(a[0]),
          o.push.apply(o, a.slice(0, a.length - 1))
      }
      if (! function (t) {
          for (var e = {}, n = 1, r = 0, i = t.length; r < i; ++r) {
            if (e.hasOwnProperty(t[r])) {
              n = 0;
              break
            }
            e[t[r]] = 1
          }
          return n
        }(o))
        throw new Error("The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)");
      var u = o.length,
        c = function (t, f, e) {
          function r(t, e, n, r) {
            var i, o, s = g[t][e],
              a = g[t][e + 1],
              u = g[n][r],
              c = g[n][r + 1],
              h = function (t, e, n, r) {
                if (mn(t, n) || mn(t, r) || mn(e, n) || mn(r, n))
                  return null;
                var i = t[0],
                  o = t[1],
                  s = e[0],
                  a = e[1],
                  u = n[0],
                  c = n[1],
                  h = r[0],
                  l = r[1],
                  p = (i - s) * (c - l) - (o - a) * (u - h);
                return 0 === p ? null : [((i * a - o * s) * (u - h) - (i - s) * (u * l - c * h)) / p, ((i * a - o * s) * (c - l) - (o - a) * (u * l - c * h)) / p]
              }(s, a, u, c);
            if (null !== h && (i = a[0] !== s[0] ? (h[0] - s[0]) / (a[0] - s[0]) : (h[1] - s[1]) / (a[1] - s[1]),
                o = c[0] !== u[0] ? (h[0] - u[0]) / (c[0] - u[0]) : (h[1] - u[1]) / (c[1] - u[1]),
                !(1 <= i || i <= 0 || 1 <= o || o <= 0))) {
              var l = h,
                p = !y[l];
              p && (y[l] = !0),
                f ? d.push(f(h, t, e, s, a, i, n, r, u, c, o, p)) : d.push(h)
            }
          }

          function n(t, e) {
            var n, r, i, o, s = g[t][e],
              a = g[t][e + 1];
            return r = s[0] < a[0] ? (n = s[0],
                a[0]) : (n = a[0],
                s[0]),
              o = s[1] < a[1] ? (i = s[1],
                a[1]) : (i = a[1],
                s[1]), {
                minX: n,
                minY: i,
                maxX: r,
                maxY: o,
                ring: t,
                edge: e
              }
          }
          if ("Polygon" !== t.geometry.type)
            throw new Error("The input feature must be a Polygon");
          void 0 === e && (e = 1);
          var g = t.geometry.coordinates,
            d = [],
            y = {};
          if (e) {
            for (var i = [], o = 0; o < g.length; o++)
              for (var s = 0; s < g[o].length - 1; s++)
                i.push(n(o, s));
            var a = wo();
            a.load(i)
          }
          for (var u = 0; u < g.length; u++)
            for (var c = 0; c < g[u].length - 1; c++)
              if (e)
                a.search(n(u, c)).forEach(function (t) {
                  var e = t.ring,
                    n = t.edge;
                  r(u, c, e, n)
                });
              else
                for (var h = 0; h < g.length; h++)
                  for (var l = 0; l < g[h].length - 1; l++)
                    r(u, c, h, l);
          return f || (d = {
              type: "Feature",
              geometry: {
                type: "MultiPoint",
                coordinates: d
              }
            }),
            d
        }(t, function (t, e, n, r, i, o, s, a, u, c, h, l) {
          return [t, e, n, r, i, o, s, a, u, c, h, l]
        }),
        h = c.length;
      if (0 == h) {
        var l = [];
        for (s = 0; s < r; s++)
          l.push(z([t.geometry.coordinates[s]], {
            parent: -1,
            winding: function (t) {
              for (var e = 0, n = 0; n < t.length - 1; n++)
                t[n][0] < t[e][0] && (e = n);
              if (vn([t[(e - 1).modulo(t.length - 1)], t[e], t[(e + 1).modulo(t.length - 1)]], !0))
                var r = 1;
              else
                r = -1;
              return r
            }(t.geometry.coordinates[s])
          }));
        var p = X(l);
        return e(),
          n(),
          p
      }
      var f = [],
        g = [];
      for (s = 0; s < r; s++) {
        f.push([]);
        for (var d = 0; d < t.geometry.coordinates[s].length - 1; d++)
          f[s].push([new Ko(t.geometry.coordinates[s][(d + 1).modulo(t.geometry.coordinates[s].length - 1)], 1, [s, d], [s, (d + 1).modulo(t.geometry.coordinates[s].length - 1)], void 0)]),
          g.push(new Qo(t.geometry.coordinates[s][d], [s, (d - 1).modulo(t.geometry.coordinates[s].length - 1)], [s, d], void 0, void 0, !1, !0))
      }
      for (s = 0; s < h; s++)
        f[c[s][1]][c[s][2]].push(new Ko(c[s][0], c[s][5], [c[s][1], c[s][2]], [c[s][6], c[s][7]], void 0)),
        c[s][11] && g.push(new Qo(c[s][0], [c[s][1], c[s][2]], [c[s][6], c[s][7]], void 0, void 0, !0, !0));
      var y = g.length;
      for (s = 0; s < f.length; s++)
        for (d = 0; d < f[s].length; d++)
          f[s][d].sort(function (t, e) {
            return t.param < e.param ? -1 : 1
          });
      var _ = [];
      for (s = 0; s < y; s++)
        _.push({
          minX: g[s].coord[0],
          minY: g[s].coord[1],
          maxX: g[s].coord[0],
          maxY: g[s].coord[1],
          index: s
        });
      var m = wo();
      for (m.load(_),
        s = 0; s < f.length; s++)
        for (d = 0; d < f[s].length; d++)
          for (var v = 0; v < f[s][d].length; v++) {
            E = v == f[s][d].length - 1 ? f[s][(d + 1).modulo(t.geometry.coordinates[s].length - 1)][0].coord : f[s][d][v + 1].coord;
            var x = m.search({
              minX: E[0],
              minY: E[1],
              maxX: E[0],
              maxY: E[1]
            })[0];
            f[s][d][v].nxtIsectAlongEdgeIn = x.index
          }
      for (s = 0; s < f.length; s++)
        for (d = 0; d < f[s].length; d++)
          for (v = 0; v < f[s][d].length; v++) {
            var E = f[s][d][v].coord,
              w = (x = m.search({
                minX: E[0],
                minY: E[1],
                maxX: E[0],
                maxY: E[1]
              })[0]).index;
            w < u ? g[w].nxtIsectAlongRingAndEdge2 = f[s][d][v].nxtIsectAlongEdgeIn : xn(g[w].ringAndEdge1, f[s][d][v].ringAndEdgeIn) ? g[w].nxtIsectAlongRingAndEdge1 = f[s][d][v].nxtIsectAlongEdgeIn : g[w].nxtIsectAlongRingAndEdge2 = f[s][d][v].nxtIsectAlongEdgeIn
          }
      var b = [];
      for (d = s = 0; d < r; d++) {
        var I = s;
        for (v = 0; v < t.geometry.coordinates[d].length - 1; v++)
          g[s].coord[0] < g[I].coord[0] && (I = s),
          s++;
        var N = g[I].nxtIsectAlongRingAndEdge2;
        for (v = 0; v < g.length; v++)
          if (g[v].nxtIsectAlongRingAndEdge1 == I || g[v].nxtIsectAlongRingAndEdge2 == I) {
            var C = v;
            break
          }
        var S = vn([g[C].coord, g[I].coord, g[N].coord], !0) ? 1 : -1;
        b.push({
          isect: I,
          parent: -1,
          winding: S
        })
      }
      for (b.sort(function (t, e) {
          return g[t.isect].coord > g[e.isect].coord ? -1 : 1
        }),
        l = []; 0 < b.length;) {
        var M = b.pop(),
          L = M.isect,
          P = M.parent,
          O = M.winding,
          R = l.length,
          T = [g[L].coord],
          A = L;
        if (g[L].ringAndEdge1Walkable)
          var D = g[L].ringAndEdge1,
            F = g[L].nxtIsectAlongRingAndEdge1;
        else
          D = g[L].ringAndEdge2,
          F = g[L].nxtIsectAlongRingAndEdge2;
        for (; !xn(g[L].coord, g[F].coord);) {
          T.push(g[F].coord);
          var q = void 0;
          for (s = 0; s < b.length; s++)
            if (b[s].isect == F) {
              q = s;
              break
            }
          if (null != q && b.splice(q, 1),
            xn(D, g[F].ringAndEdge1)) {
            if (D = g[F].ringAndEdge2,
              g[F].ringAndEdge2Walkable = !1,
              g[F].ringAndEdge1Walkable) {
              var G = {
                isect: F
              };
              vn([g[A].coord, g[F].coord, g[g[F].nxtIsectAlongRingAndEdge2].coord], 1 == O) ? (G.parent = P,
                  G.winding = -O) : (G.parent = R,
                  G.winding = O),
                b.push(G)
            }
            F = g[A = F].nxtIsectAlongRingAndEdge2
          } else
            D = g[F].ringAndEdge1,
            g[F].ringAndEdge1Walkable = !1,
            g[F].ringAndEdge2Walkable && (G = {
                isect: F
              },
              vn([g[A].coord, g[F].coord, g[g[F].nxtIsectAlongRingAndEdge1].coord], 1 == O) ? (G.parent = P,
                G.winding = -O) : (G.parent = R,
                G.winding = O),
              b.push(G)),
            F = g[A = F].nxtIsectAlongRingAndEdge1
        }
        T.push(g[F].coord),
          l.push(z([T], {
            index: R,
            parent: P,
            winding: O,
            netWinding: void 0
          }))
      }
      return p = X(l),
        e(),
        n(),
        p
    },
    Ko = function (t, e, n, r, i) {
      this.coord = t,
        this.param = e,
        this.ringAndEdgeIn = n,
        this.ringAndEdgeOut = r,
        this.nxtIsectAlongEdgeIn = i
    },
    Qo = function (t, e, n, r, i, o, s) {
      this.coord = t,
        this.ringAndEdge1 = e,
        this.ringAndEdge2 = n,
        this.nxtIsectAlongRingAndEdge1 = r,
        this.nxtIsectAlongRingAndEdge2 = i,
        this.ringAndEdge1Walkable = o,
        this.ringAndEdge2Walkable = s
    };
  Number.prototype.modulo = function (t) {
    return (this % t + t) % t
  };
  var $o = Math.PI / 180,
    ts = 180 / Math.PI,
    es = function (t, e) {
      this.lon = t,
        this.lat = e,
        this.x = $o * t,
        this.y = $o * e
    };
  es.prototype.view = function () {
      return String(this.lon).slice(0, 4) + "," + String(this.lat).slice(0, 4)
    },
    es.prototype.antipode = function () {
      var t = -1 * this.lat,
        e = this.lon < 0 ? 180 + this.lon : -1 * (180 - this.lon);
      return new es(e, t)
    };
  var ns = function () {
    this.coords = [],
      this.length = 0
  };
  ns.prototype.move_to = function (t) {
    this.length++,
      this.coords.push(t)
  };
  var rs = function (t) {
    this.properties = t || {},
      this.geometries = []
  };
  rs.prototype.json = function () {
      if (this.geometries.length <= 0)
        return {
          geometry: {
            type: "LineString",
            coordinates: null
          },
          type: "Feature",
          properties: this.properties
        };
      if (1 === this.geometries.length)
        return {
          geometry: {
            type: "LineString",
            coordinates: this.geometries[0].coords
          },
          type: "Feature",
          properties: this.properties
        };
      for (var t = [], e = 0; e < this.geometries.length; e++)
        t.push(this.geometries[e].coords);
      return {
        geometry: {
          type: "MultiLineString",
          coordinates: t
        },
        type: "Feature",
        properties: this.properties
      }
    },
    rs.prototype.wkt = function () {
      for (var t = "", e = "LINESTRING(", n = function (t) {
          e += t[0] + " " + t[1] + ","
        }, r = 0; r < this.geometries.length; r++) {
        if (0 === this.geometries[r].coords.length)
          return "LINESTRING(empty)";
        this.geometries[r].coords.forEach(n),
          t += e.substring(0, e.length - 1) + ")"
      }
      return t
    };
  var is = function (t, e, n) {
    if (!t || void 0 === t.x || void 0 === t.y)
      throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
    if (!e || void 0 === e.x || void 0 === e.y)
      throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
    this.start = new es(t.x, t.y),
      this.end = new es(e.x, e.y),
      this.properties = n || {};
    var r = this.start.x - this.end.x,
      i = this.start.y - this.end.y,
      o = Math.pow(Math.sin(i / 2), 2) + Math.cos(this.start.y) * Math.cos(this.end.y) * Math.pow(Math.sin(r / 2), 2);
    if (this.g = 2 * Math.asin(Math.sqrt(o)),
      this.g === Math.PI)
      throw new Error("it appears " + t.view() + " and " + e.view() + " are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");
    if (isNaN(this.g))
      throw new Error("could not calculate great circle between " + t + " and " + e)
  };
  is.prototype.interpolate = function (t) {
      var e = Math.sin((1 - t) * this.g) / Math.sin(this.g),
        n = Math.sin(t * this.g) / Math.sin(this.g),
        r = e * Math.cos(this.start.y) * Math.cos(this.start.x) + n * Math.cos(this.end.y) * Math.cos(this.end.x),
        i = e * Math.cos(this.start.y) * Math.sin(this.start.x) + n * Math.cos(this.end.y) * Math.sin(this.end.x),
        o = e * Math.sin(this.start.y) + n * Math.sin(this.end.y),
        s = ts * Math.atan2(o, Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)));
      return [ts * Math.atan2(i, r), s]
    },
    is.prototype.Arc = function (t, e) {
      var n = [];
      if (!t || t <= 2)
        n.push([this.start.lon, this.start.lat]),
        n.push([this.end.lon, this.end.lat]);
      else
        for (var r = 1 / (t - 1), i = 0; i < t; ++i) {
          var o = r * i,
            s = this.interpolate(o);
          n.push(s)
        }
      for (var a = !1, u = 0, c = e && e.offset ? e.offset : 10, h = 180 - c, l = -180 + c, p = 360 - c, f = 1; f < n.length; ++f) {
        var g = n[f - 1][0],
          d = n[f][0],
          y = Math.abs(d - g);
        p < y && (h < d && g < l || h < g && d < l) ? a = !0 : u < y && (u = y)
      }
      var _ = [];
      if (a && u < c) {
        var m = [];
        _.push(m);
        for (var v = 0; v < n.length; ++v) {
          var x = parseFloat(n[v][0]);
          if (0 < v && Math.abs(x - n[v - 1][0]) > p) {
            var E = parseFloat(n[v - 1][0]),
              w = parseFloat(n[v - 1][1]),
              b = parseFloat(n[v][0]),
              I = parseFloat(n[v][1]);
            if (-180 < E && E < l && 180 === b && v + 1 < n.length && -180 < n[v - 1][0] && n[v - 1][0] < l) {
              m.push([-180, n[v][1]]),
                v++,
                m.push([n[v][0], n[v][1]]);
              continue
            }
            if (h < E && E < 180 && -180 === b && v + 1 < n.length && n[v - 1][0] > h && n[v - 1][0] < 180) {
              m.push([180, n[v][1]]),
                v++,
                m.push([n[v][0], n[v][1]]);
              continue
            }
            if (E < l && h < b) {
              var N = E;
              E = b,
                b = N;
              var C = w;
              w = I,
                I = C
            }
            if (h < E && b < l && (b += 360),
              E <= 180 && 180 <= b && E < b) {
              var S = (180 - E) / (b - E),
                M = S * I + (1 - S) * w;
              m.push([n[v - 1][0] > h ? 180 : -180, M]),
                (m = []).push([n[v - 1][0] > h ? -180 : 180, M]),
                _.push(m)
            } else
              m = [],
              _.push(m);
            m.push([x, n[v][1]])
          } else
            m.push([n[v][0], n[v][1]])
        }
      } else {
        var L = [];
        _.push(L);
        for (var P = 0; P < n.length; ++P)
          L.push([n[P][0], n[P][1]])
      }
      for (var O = new rs(this.properties), R = 0; R < _.length; ++R) {
        var T = new ns;
        O.geometries.push(T);
        for (var A = _[R], D = 0; D < A.length; ++D)
          T.move_to(A[D])
      }
      return O
    };
  var os = Rn;
  (Rn.polyline = Rn).polygon = function (t, e) {
    var n, r, i, o, s, a, u;
    for (r = 1; r <= 8; r *= 2) {
      for (n = [],
        o = !(An(i = t[t.length - 1], e) & r),
        s = 0; s < t.length; s++)
        (u = !(An(a = t[s], e) & r)) !== o && n.push(Tn(i, a, r, e)),
        u && n.push(a),
        i = a,
        o = u;
      if (!(t = n).length)
        break
    }
    return n
  };
  var ss = Array.prototype.slice,
    as = {
      successCallback: null,
      verbose: !1,
      polygons: !1
    },
    us = {},
    cs = 64,
    hs = 16,
    ls = 4,
    ps = 1,
    fs = [],
    gs = [],
    ds = [],
    ys = [],
    _s = [],
    ms = [],
    vs = [],
    xs = [],
    Es = [],
    ws = [],
    bs = [],
    Is = [],
    Ns = [],
    Cs = [],
    Ss = [],
    Ms = [],
    Ls = [],
    Ps = [],
    Os = [],
    Rs = [],
    Ts = [],
    As = [],
    Ds = [],
    Fs = [];
  vs[85] = ws[85] = -1,
    xs[85] = bs[85] = 0,
    Es[85] = Is[85] = 1,
    Os[85] = As[85] = 1,
    Rs[85] = Ds[85] = 0,
    Ts[85] = Fs[85] = 1,
    fs[85] = ys[85] = 0,
    gs[85] = _s[85] = -1,
    ds[85] = Ss[85] = 0,
    Ms[85] = Ns[85] = 0,
    Ls[85] = Cs[85] = 1,
    ms[85] = Ps[85] = 1,
    As[1] = As[169] = 0,
    Ds[1] = Ds[169] = -1,
    Fs[1] = Fs[169] = 0,
    Ns[1] = Ns[169] = -1,
    Cs[1] = Cs[169] = 0,
    Ss[1] = Ss[169] = 0,
    ws[4] = ws[166] = 0,
    bs[4] = bs[166] = -1,
    Is[4] = Is[166] = 1,
    Ms[4] = Ms[166] = 1,
    Ls[4] = Ls[166] = 0,
    Ps[4] = Ps[166] = 0,
    vs[16] = vs[154] = 0,
    xs[16] = xs[154] = 1,
    Es[16] = Es[154] = 1,
    ys[16] = ys[154] = 1,
    _s[16] = _s[154] = 0,
    ms[16] = ms[154] = 1,
    Os[64] = Os[106] = 0,
    Rs[64] = Rs[106] = 1,
    Ts[64] = Ts[106] = 0,
    fs[64] = fs[106] = -1,
    gs[64] = gs[106] = 0,
    ds[64] = ds[106] = 1,
    Os[2] = Os[168] = 0,
    Rs[2] = Rs[168] = -1,
    Ts[2] = Ts[168] = 1,
    As[2] = As[168] = 0,
    Ds[2] = Ds[168] = -1,
    Fs[2] = Fs[168] = 0,
    Ns[2] = Ns[168] = -1,
    Cs[2] = Cs[168] = 0,
    Ss[2] = Ss[168] = 0,
    Ms[2] = Ms[168] = -1,
    Ls[2] = Ls[168] = 0,
    Ps[2] = Ps[168] = 1,
    vs[8] = vs[162] = 0,
    xs[8] = xs[162] = -1,
    Es[8] = Es[162] = 0,
    ws[8] = ws[162] = 0,
    bs[8] = bs[162] = -1,
    Is[8] = Is[162] = 1,
    Ns[8] = Ns[162] = 1,
    Cs[8] = Cs[162] = 0,
    Ss[8] = Ss[162] = 1,
    Ms[8] = Ms[162] = 1,
    Ls[8] = Ls[162] = 0,
    Ps[8] = Ps[162] = 0,
    vs[32] = vs[138] = 0,
    xs[32] = xs[138] = 1,
    Es[32] = Es[138] = 1,
    ws[32] = ws[138] = 0,
    bs[32] = bs[138] = 1,
    Is[32] = Is[138] = 0,
    fs[32] = fs[138] = 1,
    gs[32] = gs[138] = 0,
    ds[32] = ds[138] = 0,
    ys[32] = ys[138] = 1,
    _s[32] = _s[138] = 0,
    ms[32] = ms[138] = 1,
    As[128] = As[42] = 0,
    Ds[128] = Ds[42] = 1,
    Fs[128] = Fs[42] = 1,
    Os[128] = Os[42] = 0,
    Rs[128] = Rs[42] = 1,
    Ts[128] = Ts[42] = 0,
    fs[128] = fs[42] = -1,
    gs[128] = gs[42] = 0,
    ds[128] = ds[42] = 1,
    ys[128] = ys[42] = -1,
    _s[128] = _s[42] = 0,
    ms[128] = ms[42] = 0,
    ws[5] = ws[165] = -1,
    bs[5] = bs[165] = 0,
    Is[5] = Is[165] = 0,
    As[5] = As[165] = 1,
    Ds[5] = Ds[165] = 0,
    Fs[5] = Fs[165] = 0,
    Ms[20] = Ms[150] = 0,
    Ls[20] = Ls[150] = 1,
    Ps[20] = Ps[150] = 1,
    ys[20] = ys[150] = 0,
    _s[20] = _s[150] = -1,
    ms[20] = ms[150] = 1,
    vs[80] = vs[90] = -1,
    xs[80] = xs[90] = 0,
    Es[80] = Es[90] = 1,
    Os[80] = Os[90] = 1,
    Rs[80] = Rs[90] = 0,
    Ts[80] = Ts[90] = 1,
    Ns[65] = Ns[105] = 0,
    Cs[65] = Cs[105] = 1,
    Ss[65] = Ss[105] = 0,
    fs[65] = fs[105] = 0,
    gs[65] = gs[105] = -1,
    ds[65] = ds[105] = 0,
    vs[160] = vs[10] = -1,
    xs[160] = xs[10] = 0,
    Es[160] = Es[10] = 1,
    ws[160] = ws[10] = -1,
    bs[160] = bs[10] = 0,
    Is[160] = Is[10] = 0,
    As[160] = As[10] = 1,
    Ds[160] = Ds[10] = 0,
    Fs[160] = Fs[10] = 0,
    Os[160] = Os[10] = 1,
    Rs[160] = Rs[10] = 0,
    Ts[160] = Ts[10] = 1,
    Ms[130] = Ms[40] = 0,
    Ls[130] = Ls[40] = 1,
    Ps[130] = Ps[40] = 1,
    Ns[130] = Ns[40] = 0,
    Cs[130] = Cs[40] = 1,
    Ss[130] = Ss[40] = 0,
    fs[130] = fs[40] = 0,
    gs[130] = gs[40] = -1,
    ds[130] = ds[40] = 0,
    ys[130] = ys[40] = 0,
    _s[130] = _s[40] = -1,
    ms[130] = ms[40] = 1,
    ws[37] = ws[133] = 0,
    bs[37] = bs[133] = 1,
    Is[37] = Is[133] = 1,
    As[37] = As[133] = 0,
    Ds[37] = Ds[133] = 1,
    Fs[37] = Fs[133] = 0,
    fs[37] = fs[133] = -1,
    gs[37] = gs[133] = 0,
    ds[37] = ds[133] = 0,
    ys[37] = ys[133] = 1,
    _s[37] = _s[133] = 0,
    ms[37] = ms[133] = 0,
    Ms[148] = Ms[22] = -1,
    Ls[148] = Ls[22] = 0,
    Ps[148] = Ps[22] = 0,
    As[148] = As[22] = 0,
    Ds[148] = Ds[22] = -1,
    Fs[148] = Fs[22] = 1,
    Os[148] = Os[22] = 0,
    Rs[148] = Rs[22] = 1,
    Ts[148] = Ts[22] = 1,
    ys[148] = ys[22] = -1,
    _s[148] = _s[22] = 0,
    ms[148] = ms[22] = 1,
    vs[82] = vs[88] = 0,
    xs[82] = xs[88] = -1,
    Es[82] = Es[88] = 1,
    Ms[82] = Ms[88] = 1,
    Ls[82] = Ls[88] = 0,
    Ps[82] = Ps[88] = 1,
    Ns[82] = Ns[88] = -1,
    Cs[82] = Cs[88] = 0,
    Ss[82] = Ss[88] = 1,
    Os[82] = Os[88] = 0,
    Rs[82] = Rs[88] = -1,
    Ts[82] = Ts[88] = 0,
    vs[73] = vs[97] = 0,
    xs[73] = xs[97] = 1,
    Es[73] = Es[97] = 0,
    ws[73] = ws[97] = 0,
    bs[73] = bs[97] = -1,
    Is[73] = Is[97] = 0,
    Ns[73] = Ns[97] = 1,
    Cs[73] = Cs[97] = 0,
    Ss[73] = Ss[97] = 0,
    fs[73] = fs[97] = 1,
    gs[73] = gs[97] = 0,
    ds[73] = ds[97] = 1,
    vs[145] = vs[25] = 0,
    xs[145] = xs[25] = -1,
    Es[145] = Es[25] = 0,
    Ns[145] = Ns[25] = 1,
    Cs[145] = Cs[25] = 0,
    Ss[145] = Ss[25] = 1,
    As[145] = As[25] = 0,
    Ds[145] = Ds[25] = 1,
    Fs[145] = Fs[25] = 1,
    ys[145] = ys[25] = -1,
    _s[145] = _s[25] = 0,
    ms[145] = ms[25] = 0,
    ws[70] = ws[100] = 0,
    bs[70] = bs[100] = 1,
    Is[70] = Is[100] = 0,
    Ms[70] = Ms[100] = -1,
    Ls[70] = Ls[100] = 0,
    Ps[70] = Ps[100] = 1,
    Os[70] = Os[100] = 0,
    Rs[70] = Rs[100] = -1,
    Ts[70] = Ts[100] = 1,
    fs[70] = fs[100] = 1,
    gs[70] = gs[100] = 0,
    ds[70] = ds[100] = 0,
    ws[101] = ws[69] = 0,
    bs[101] = bs[69] = 1,
    Is[101] = Is[69] = 0,
    fs[101] = fs[69] = 1,
    gs[101] = gs[69] = 0,
    ds[101] = ds[69] = 0,
    As[149] = As[21] = 0,
    Ds[149] = Ds[21] = 1,
    Fs[149] = Fs[21] = 1,
    ys[149] = ys[21] = -1,
    _s[149] = _s[21] = 0,
    ms[149] = ms[21] = 0,
    Ms[86] = Ms[84] = -1,
    Ls[86] = Ls[84] = 0,
    Ps[86] = Ps[84] = 1,
    Os[86] = Os[84] = 0,
    Rs[86] = Rs[84] = -1,
    Ts[86] = Ts[84] = 1,
    vs[89] = vs[81] = 0,
    xs[89] = xs[81] = -1,
    Es[89] = Es[81] = 0,
    Ns[89] = Ns[81] = 1,
    Cs[89] = Cs[81] = 0,
    Ss[89] = Ss[81] = 1,
    vs[96] = vs[74] = 0,
    xs[96] = xs[74] = 1,
    Es[96] = Es[74] = 0,
    ws[96] = ws[74] = -1,
    bs[96] = bs[74] = 0,
    Is[96] = Is[74] = 1,
    Os[96] = Os[74] = 1,
    Rs[96] = Rs[74] = 0,
    Ts[96] = Ts[74] = 0,
    fs[96] = fs[74] = 1,
    gs[96] = gs[74] = 0,
    ds[96] = ds[74] = 1,
    vs[24] = vs[146] = 0,
    xs[24] = xs[146] = -1,
    Es[24] = Es[146] = 1,
    Ms[24] = Ms[146] = 1,
    Ls[24] = Ls[146] = 0,
    Ps[24] = Ps[146] = 1,
    Ns[24] = Ns[146] = 0,
    Cs[24] = Cs[146] = 1,
    Ss[24] = Ss[146] = 1,
    ys[24] = ys[146] = 0,
    _s[24] = _s[146] = -1,
    ms[24] = ms[146] = 0,
    ws[6] = ws[164] = -1,
    bs[6] = bs[164] = 0,
    Is[6] = Is[164] = 1,
    Ms[6] = Ms[164] = -1,
    Ls[6] = Ls[164] = 0,
    Ps[6] = Ps[164] = 0,
    As[6] = As[164] = 0,
    Ds[6] = Ds[164] = -1,
    Fs[6] = Fs[164] = 1,
    Os[6] = Os[164] = 1,
    Rs[6] = Rs[164] = 0,
    Ts[6] = Ts[164] = 0,
    Ns[129] = Ns[41] = 0,
    Cs[129] = Cs[41] = 1,
    Ss[129] = Ss[41] = 1,
    As[129] = As[41] = 0,
    Ds[129] = Ds[41] = 1,
    Fs[129] = Fs[41] = 0,
    fs[129] = fs[41] = -1,
    gs[129] = gs[41] = 0,
    ds[129] = ds[41] = 0,
    ys[129] = ys[41] = 0,
    _s[129] = _s[41] = -1,
    ms[129] = ms[41] = 0,
    Ms[66] = Ms[104] = 0,
    Ls[66] = Ls[104] = 1,
    Ps[66] = Ps[104] = 0,
    Ns[66] = Ns[104] = -1,
    Cs[66] = Cs[104] = 0,
    Ss[66] = Ss[104] = 1,
    Os[66] = Os[104] = 0,
    Rs[66] = Rs[104] = -1,
    Ts[66] = Ts[104] = 0,
    fs[66] = fs[104] = 0,
    gs[66] = gs[104] = -1,
    ds[66] = ds[104] = 1,
    vs[144] = vs[26] = -1,
    xs[144] = xs[26] = 0,
    Es[144] = Es[26] = 0,
    As[144] = As[26] = 1,
    Ds[144] = Ds[26] = 0,
    Fs[144] = Fs[26] = 1,
    Os[144] = Os[26] = 0,
    Rs[144] = Rs[26] = 1,
    Ts[144] = Ts[26] = 1,
    ys[144] = ys[26] = -1,
    _s[144] = _s[26] = 0,
    ms[144] = ms[26] = 1,
    ws[36] = ws[134] = 0,
    bs[36] = bs[134] = 1,
    Is[36] = Is[134] = 1,
    Ms[36] = Ms[134] = 0,
    Ls[36] = Ls[134] = 1,
    Ps[36] = Ps[134] = 0,
    fs[36] = fs[134] = 0,
    gs[36] = gs[134] = -1,
    ds[36] = ds[134] = 1,
    ys[36] = ys[134] = 1,
    _s[36] = _s[134] = 0,
    ms[36] = ms[134] = 0,
    vs[9] = vs[161] = -1,
    xs[9] = xs[161] = 0,
    Es[9] = Es[161] = 0,
    ws[9] = ws[161] = 0,
    bs[9] = bs[161] = -1,
    Is[9] = Is[161] = 0,
    Ns[9] = Ns[161] = 1,
    Cs[9] = Cs[161] = 0,
    Ss[9] = Ss[161] = 0,
    As[9] = As[161] = 1,
    Ds[9] = Ds[161] = 0,
    Fs[9] = Fs[161] = 1,
    vs[136] = 0,
    xs[136] = 1,
    Es[136] = 1,
    ws[136] = 0,
    bs[136] = 1,
    Is[136] = 0,
    Ms[136] = -1,
    Ls[136] = 0,
    Ps[136] = 1,
    Ns[136] = -1,
    Cs[136] = 0,
    Ss[136] = 0,
    As[136] = 0,
    Ds[136] = -1,
    Fs[136] = 0,
    Os[136] = 0,
    Rs[136] = -1,
    Ts[136] = 1,
    fs[136] = 1,
    gs[136] = 0,
    ds[136] = 0,
    ys[136] = 1,
    _s[136] = 0,
    ms[136] = 1,
    vs[34] = 0,
    xs[34] = -1,
    Es[34] = 0,
    ws[34] = 0,
    bs[34] = -1,
    Is[34] = 1,
    Ms[34] = 1,
    Ls[34] = 0,
    Ps[34] = 0,
    Ns[34] = 1,
    Cs[34] = 0,
    Ss[34] = 1,
    As[34] = 0,
    Ds[34] = 1,
    Fs[34] = 1,
    Os[34] = 0,
    Rs[34] = 1,
    Ts[34] = 0,
    fs[34] = -1,
    gs[34] = 0,
    ds[34] = 1,
    ys[34] = -1,
    _s[34] = 0,
    ms[34] = 0,
    vs[35] = 0,
    xs[35] = 1,
    Es[35] = 1,
    ws[35] = 0,
    bs[35] = -1,
    Is[35] = 1,
    Ms[35] = 1,
    Ls[35] = 0,
    Ps[35] = 0,
    Ns[35] = -1,
    Cs[35] = 0,
    Ss[35] = 0,
    As[35] = 0,
    Ds[35] = -1,
    Fs[35] = 0,
    Os[35] = 0,
    Rs[35] = 1,
    Ts[35] = 0,
    fs[35] = -1,
    gs[35] = 0,
    ds[35] = 1,
    ys[35] = 1,
    _s[35] = 0,
    ms[35] = 1,
    vs[153] = 0,
    xs[153] = 1,
    Es[153] = 1,
    Ns[153] = -1,
    Cs[153] = 0,
    Ss[153] = 0,
    As[153] = 0,
    Ds[153] = -1,
    Fs[153] = 0,
    ys[153] = 1,
    _s[153] = 0,
    ms[153] = 1,
    ws[102] = 0,
    bs[102] = -1,
    Is[102] = 1,
    Ms[102] = 1,
    Ls[102] = 0,
    Ps[102] = 0,
    Os[102] = 0,
    Rs[102] = 1,
    Ts[102] = 0,
    fs[102] = -1,
    gs[102] = 0,
    ds[102] = 1,
    vs[155] = 0,
    xs[155] = -1,
    Es[155] = 0,
    Ns[155] = 1,
    Cs[155] = 0,
    Ss[155] = 1,
    As[155] = 0,
    Ds[155] = 1,
    Fs[155] = 1,
    ys[155] = -1,
    _s[155] = 0,
    ms[155] = 0,
    ws[103] = 0,
    bs[103] = 1,
    Is[103] = 0,
    Ms[103] = -1,
    Ls[103] = 0,
    Ps[103] = 1,
    Os[103] = 0,
    Rs[103] = -1,
    Ts[103] = 1,
    fs[103] = 1,
    gs[103] = 0,
    ds[103] = 0,
    vs[152] = 0,
    xs[152] = 1,
    Es[152] = 1,
    Ms[152] = -1,
    Ls[152] = 0,
    Ps[152] = 1,
    Ns[152] = -1,
    Cs[152] = 0,
    Ss[152] = 0,
    As[152] = 0,
    Ds[152] = -1,
    Fs[152] = 0,
    Os[152] = 0,
    Rs[152] = -1,
    Ts[152] = 1,
    ys[152] = 1,
    _s[152] = 0,
    ms[152] = 1,
    vs[156] = 0,
    xs[156] = -1,
    Es[156] = 1,
    Ms[156] = 1,
    Ls[156] = 0,
    Ps[156] = 1,
    Ns[156] = -1,
    Cs[156] = 0,
    Ss[156] = 0,
    As[156] = 0,
    Ds[156] = -1,
    Fs[156] = 0,
    Os[156] = 0,
    Rs[156] = 1,
    Ts[156] = 1,
    ys[156] = -1,
    _s[156] = 0,
    ms[156] = 1,
    vs[137] = 0,
    xs[137] = 1,
    Es[137] = 1,
    ws[137] = 0,
    bs[137] = 1,
    Is[137] = 0,
    Ns[137] = -1,
    Cs[137] = 0,
    Ss[137] = 0,
    As[137] = 0,
    Ds[137] = -1,
    Fs[137] = 0,
    fs[137] = 1,
    gs[137] = 0,
    ds[137] = 0,
    ys[137] = 1,
    _s[137] = 0,
    ms[137] = 1,
    vs[139] = 0,
    xs[139] = 1,
    Es[139] = 1,
    ws[139] = 0,
    bs[139] = -1,
    Is[139] = 0,
    Ns[139] = 1,
    Cs[139] = 0,
    Ss[139] = 0,
    As[139] = 0,
    Ds[139] = 1,
    Fs[139] = 0,
    fs[139] = -1,
    gs[139] = 0,
    ds[139] = 0,
    ys[139] = 1,
    _s[139] = 0,
    ms[139] = 1,
    vs[98] = 0,
    xs[98] = -1,
    Es[98] = 0,
    ws[98] = 0,
    bs[98] = -1,
    Is[98] = 1,
    Ms[98] = 1,
    Ls[98] = 0,
    Ps[98] = 0,
    Ns[98] = 1,
    Cs[98] = 0,
    Ss[98] = 1,
    Os[98] = 0,
    Rs[98] = 1,
    Ts[98] = 0,
    fs[98] = -1,
    gs[98] = 0,
    ds[98] = 1,
    vs[99] = 0,
    xs[99] = 1,
    Es[99] = 0,
    ws[99] = 0,
    bs[99] = -1,
    Is[99] = 1,
    Ms[99] = 1,
    Ls[99] = 0,
    Ps[99] = 0,
    Ns[99] = -1,
    Cs[99] = 0,
    Ss[99] = 1,
    Os[99] = 0,
    Rs[99] = -1,
    Ts[99] = 0,
    fs[99] = 1,
    gs[99] = 0,
    ds[99] = 1,
    ws[38] = 0,
    bs[38] = -1,
    Is[38] = 1,
    Ms[38] = 1,
    Ls[38] = 0,
    Ps[38] = 0,
    As[38] = 0,
    Ds[38] = 1,
    Fs[38] = 1,
    Os[38] = 0,
    Rs[38] = 1,
    Ts[38] = 0,
    fs[38] = -1,
    gs[38] = 0,
    ds[38] = 1,
    ys[38] = -1,
    _s[38] = 0,
    ms[38] = 0,
    ws[39] = 0,
    bs[39] = 1,
    Is[39] = 1,
    Ms[39] = -1,
    Ls[39] = 0,
    Ps[39] = 0,
    As[39] = 0,
    Ds[39] = -1,
    Fs[39] = 1,
    Os[39] = 0,
    Rs[39] = 1,
    Ts[39] = 0,
    fs[39] = -1,
    gs[39] = 0,
    ds[39] = 1,
    ys[39] = 1,
    _s[39] = 0,
    ms[39] = 0;
  var qs = function (t) {
      return [
        [t.bottomleft, 0],
        [0, 0],
        [0, t.leftbottom]
      ]
    },
    Gs = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [t.bottomright, 0]
      ]
    },
    Bs = function (t) {
      return [
        [t.topright, 1],
        [1, 1],
        [1, t.righttop]
      ]
    },
    ks = function (t) {
      return [
        [0, t.lefttop],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    zs = function (t) {
      return [
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [0, t.leftbottom],
        [0, t.lefttop]
      ]
    },
    js = function (t) {
      return [
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [1, t.righttop],
        [1, t.rightbottom]
      ]
    },
    Xs = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    },
    Us = function (t) {
      return [
        [0, t.leftbottom],
        [0, t.lefttop],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    },
    Ys = [],
    Vs = [],
    Hs = [],
    Ws = [],
    Js = [],
    Zs = [],
    Ks = [],
    Qs = [];
  Ws[1] = Js[1] = 18,
    Ws[169] = Js[169] = 18,
    Hs[4] = Vs[4] = 12,
    Hs[166] = Vs[166] = 12,
    Ys[16] = Qs[16] = 4,
    Ys[154] = Qs[154] = 4,
    Zs[64] = Ks[64] = 22,
    Zs[106] = Ks[106] = 22,
    Hs[2] = Zs[2] = 17,
    Ws[2] = Js[2] = 18,
    Hs[168] = Zs[168] = 17,
    Ws[168] = Js[168] = 18,
    Ys[8] = Ws[8] = 9,
    Vs[8] = Hs[8] = 12,
    Ys[162] = Ws[162] = 9,
    Vs[162] = Hs[162] = 12,
    Ys[32] = Qs[32] = 4,
    Vs[32] = Ks[32] = 1,
    Ys[138] = Qs[138] = 4,
    Vs[138] = Ks[138] = 1,
    Js[128] = Qs[128] = 21,
    Zs[128] = Ks[128] = 22,
    Js[42] = Qs[42] = 21,
    Zs[42] = Ks[42] = 22,
    Vs[5] = Js[5] = 14,
    Vs[165] = Js[165] = 14,
    Hs[20] = Qs[20] = 6,
    Hs[150] = Qs[150] = 6,
    Ys[80] = Zs[80] = 11,
    Ys[90] = Zs[90] = 11,
    Ws[65] = Ks[65] = 3,
    Ws[105] = Ks[105] = 3,
    Ys[160] = Zs[160] = 11,
    Vs[160] = Js[160] = 14,
    Ys[10] = Zs[10] = 11,
    Vs[10] = Js[10] = 14,
    Hs[130] = Qs[130] = 6,
    Ws[130] = Ks[130] = 3,
    Hs[40] = Qs[40] = 6,
    Ws[40] = Ks[40] = 3,
    Vs[101] = Ks[101] = 1,
    Vs[69] = Ks[69] = 1,
    Js[149] = Qs[149] = 21,
    Js[21] = Qs[21] = 21,
    Hs[86] = Zs[86] = 17,
    Hs[84] = Zs[84] = 17,
    Ys[89] = Ws[89] = 9,
    Ys[81] = Ws[81] = 9,
    Ys[96] = Ks[96] = 0,
    Vs[96] = Zs[96] = 15,
    Ys[74] = Ks[74] = 0,
    Vs[74] = Zs[74] = 15,
    Ys[24] = Hs[24] = 8,
    Ws[24] = Qs[24] = 7,
    Ys[146] = Hs[146] = 8,
    Ws[146] = Qs[146] = 7,
    Vs[6] = Zs[6] = 15,
    Hs[6] = Js[6] = 16,
    Vs[164] = Zs[164] = 15,
    Hs[164] = Js[164] = 16,
    Ws[129] = Qs[129] = 7,
    Js[129] = Ks[129] = 20,
    Ws[41] = Qs[41] = 7,
    Js[41] = Ks[41] = 20,
    Hs[66] = Ks[66] = 2,
    Ws[66] = Zs[66] = 19,
    Hs[104] = Ks[104] = 2,
    Ws[104] = Zs[104] = 19,
    Ys[144] = Js[144] = 10,
    Zs[144] = Qs[144] = 23,
    Ys[26] = Js[26] = 10,
    Zs[26] = Qs[26] = 23,
    Vs[36] = Qs[36] = 5,
    Hs[36] = Ks[36] = 2,
    Vs[134] = Qs[134] = 5,
    Hs[134] = Ks[134] = 2,
    Ys[9] = Js[9] = 10,
    Vs[9] = Ws[9] = 13,
    Ys[161] = Js[161] = 10,
    Vs[161] = Ws[161] = 13,
    Vs[37] = Qs[37] = 5,
    Js[37] = Ks[37] = 20,
    Vs[133] = Qs[133] = 5,
    Js[133] = Ks[133] = 20,
    Hs[148] = Js[148] = 16,
    Zs[148] = Qs[148] = 23,
    Hs[22] = Js[22] = 16,
    Zs[22] = Qs[22] = 23,
    Ys[82] = Hs[82] = 8,
    Ws[82] = Zs[82] = 19,
    Ys[88] = Hs[88] = 8,
    Ws[88] = Zs[88] = 19,
    Ys[73] = Ks[73] = 0,
    Vs[73] = Ws[73] = 13,
    Ys[97] = Ks[97] = 0,
    Vs[97] = Ws[97] = 13,
    Ys[145] = Ws[145] = 9,
    Js[145] = Qs[145] = 21,
    Ys[25] = Ws[25] = 9,
    Js[25] = Qs[25] = 21,
    Vs[70] = Ks[70] = 1,
    Hs[70] = Zs[70] = 17,
    Vs[100] = Ks[100] = 1,
    Hs[100] = Zs[100] = 17,
    Ys[34] = Ws[34] = 9,
    Vs[34] = Hs[34] = 12,
    Js[34] = Qs[34] = 21,
    Zs[34] = Ks[34] = 22,
    Ys[136] = Qs[136] = 4,
    Vs[136] = Ks[136] = 1,
    Hs[136] = Zs[136] = 17,
    Ws[136] = Js[136] = 18,
    Ys[35] = Qs[35] = 4,
    Vs[35] = Hs[35] = 12,
    Ws[35] = Js[35] = 18,
    Zs[35] = Ks[35] = 22,
    Ys[153] = Qs[153] = 4,
    Ws[153] = Js[153] = 18,
    Vs[102] = Hs[102] = 12,
    Zs[102] = Ks[102] = 22,
    Ys[155] = Ws[155] = 9,
    Js[155] = Qs[155] = 23,
    Vs[103] = Ks[103] = 1,
    Hs[103] = Zs[103] = 17,
    Ys[152] = Qs[152] = 4,
    Hs[152] = Zs[152] = 17,
    Ws[152] = Js[152] = 18,
    Ys[156] = Hs[156] = 8,
    Ws[156] = Js[156] = 18,
    Zs[156] = Qs[156] = 23,
    Ys[137] = Qs[137] = 4,
    Vs[137] = Ks[137] = 1,
    Ws[137] = Js[137] = 18,
    Ys[139] = Qs[139] = 4,
    Vs[139] = Ws[139] = 13,
    Js[139] = Ks[139] = 20,
    Ys[98] = Ws[98] = 9,
    Vs[98] = Hs[98] = 12,
    Zs[98] = Ks[98] = 22,
    Ys[99] = Ks[99] = 0,
    Vs[99] = Hs[99] = 12,
    Ws[99] = Zs[99] = 19,
    Vs[38] = Hs[38] = 12,
    Js[38] = Qs[38] = 21,
    Zs[38] = Ks[38] = 22,
    Vs[39] = Qs[39] = 5,
    Hs[39] = Js[39] = 16,
    Zs[39] = Ks[39] = 22;
  var $s = [];
  $s[1] = $s[169] = qs,
    $s[4] = $s[166] = Gs,
    $s[16] = $s[154] = Bs,
    $s[64] = $s[106] = ks,
    $s[168] = $s[2] = zs,
    $s[162] = $s[8] = js,
    $s[138] = $s[32] = Xs,
    $s[42] = $s[128] = Us,
    $s[5] = $s[165] = function (t) {
      return [
        [0, 0],
        [0, t.leftbottom],
        [1, t.rightbottom],
        [1, 0]
      ]
    },
    $s[20] = $s[150] = function (t) {
      return [
        [1, 0],
        [t.bottomright, 0],
        [t.topright, 1],
        [1, 1]
      ]
    },
    $s[80] = $s[90] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [0, t.lefttop],
        [0, 1]
      ]
    },
    $s[65] = $s[105] = function (t) {
      return [
        [t.bottomleft, 0],
        [0, 0],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[160] = $s[10] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [0, t.leftbottom],
        [0, t.lefttop]
      ]
    },
    $s[130] = $s[40] = function (t) {
      return [
        [t.topleft, 1],
        [t.topright, 1],
        [t.bottomright, 0],
        [t.bottomleft, 0]
      ]
    },
    $s[85] = function () {
      return [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0]
      ]
    },
    $s[101] = $s[69] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [0, 0],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[149] = $s[21] = function (t) {
      return [
        [t.topright, 1],
        [1, 1],
        [1, 0],
        [0, 0],
        [0, t.leftbottom]
      ]
    },
    $s[86] = $s[84] = function (t) {
      return [
        [1, 0],
        [t.bottomright, 0],
        [0, t.lefttop],
        [0, 1],
        [1, 1]
      ]
    },
    $s[89] = $s[81] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [t.bottomleft, 0],
        [0, 0],
        [0, 1]
      ]
    },
    $s[96] = $s[74] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [0, t.lefttop],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[24] = $s[146] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [t.topright, 1]
      ]
    },
    $s[6] = $s[164] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [t.bottomright, 0],
        [0, t.leftbottom],
        [0, t.lefttop]
      ]
    },
    $s[129] = $s[41] = function (t) {
      return [
        [t.topright, 1],
        [t.bottomleft, 0],
        [0, 0],
        [0, t.leftbottom],
        [t.topleft, 1]
      ]
    },
    $s[66] = $s[104] = function (t) {
      return [
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [0, t.lefttop],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[144] = $s[26] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [0, t.leftbottom],
        [0, t.lefttop],
        [t.topright, 1]
      ]
    },
    $s[36] = $s[134] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [t.bottomright, 0],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    },
    $s[9] = $s[161] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [t.bottomleft, 0],
        [0, 0],
        [0, t.leftbottom]
      ]
    },
    $s[37] = $s[133] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [0, 0],
        [0, t.leftbottom],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    },
    $s[148] = $s[22] = function (t) {
      return [
        [1, 1],
        [1, 0],
        [t.bottomright, 0],
        [0, t.leftbottom],
        [0, t.lefttop],
        [t.topright, 1]
      ]
    },
    $s[82] = $s[88] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [0, t.lefttop],
        [0, 1]
      ]
    },
    $s[73] = $s[97] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [t.bottomleft, 0],
        [0, 0],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[145] = $s[25] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [t.bottomleft, 0],
        [0, 0],
        [0, t.leftbottom],
        [t.topright, 1]
      ]
    },
    $s[70] = $s[100] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [t.bottomright, 0],
        [0, t.lefttop],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[34] = function (t) {
      return [Us(t), js(t)]
    },
    $s[35] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [0, t.leftbottom],
        [0, t.lefttop],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    },
    $s[136] = function (t) {
      return [Xs(t), zs(t)]
    },
    $s[153] = function (t) {
      return [Bs(t), qs(t)]
    },
    $s[102] = function (t) {
      return [Gs(t), ks(t)]
    },
    $s[155] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [t.bottomleft, 0],
        [0, 0],
        [0, t.leftbottom],
        [t.topright, 1]
      ]
    },
    $s[103] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [t.bottomright, 0],
        [0, t.lefttop],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[152] = function (t) {
      return [Bs(t), zs(t)]
    },
    $s[156] = function (t) {
      return [
        [1, 1],
        [1, t.righttop],
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [0, t.leftbottom],
        [0, t.lefttop],
        [t.topright, 1]
      ]
    },
    $s[137] = function (t) {
      return [Xs(t), qs(t)]
    },
    $s[139] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [t.bottomleft, 0],
        [0, 0],
        [0, t.leftbottom],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    },
    $s[98] = function (t) {
      return [js(t), ks(t)]
    },
    $s[99] = function (t) {
      return [
        [1, t.righttop],
        [1, t.rightbottom],
        [t.bottomright, 0],
        [t.bottomleft, 0],
        [0, t.lefttop],
        [0, 1],
        [t.topleft, 1]
      ]
    },
    $s[38] = function (t) {
      return [Gs(t), Us(t)]
    },
    $s[39] = function (t) {
      return [
        [1, t.rightbottom],
        [1, 0],
        [t.bottomright, 0],
        [0, t.leftbottom],
        [0, t.lefttop],
        [t.topleft, 1],
        [t.topright, 1]
      ]
    };
  var ta = function t(e) {
    this.id = t.buildId(e),
      this.coordinates = e,
      this.innerEdges = [],
      this.outerEdges = [],
      this.outerEdgesSorted = !1
  };
  ta.buildId = function (t) {
      return t.join(",")
    },
    ta.prototype.removeInnerEdge = function (e) {
      this.innerEdges = this.innerEdges.filter(function (t) {
        return t.from.id !== e.from.id
      })
    },
    ta.prototype.removeOuterEdge = function (e) {
      this.outerEdges = this.outerEdges.filter(function (t) {
        return t.to.id !== e.to.id
      })
    },
    ta.prototype.addOuterEdge = function (t) {
      this.outerEdges.push(t),
        this.outerEdgesSorted = !1
    },
    ta.prototype.sortOuterEdges = function () {
      var o = this;
      this.outerEdgesSorted || (this.outerEdges.sort(function (t, e) {
          var n = t.to,
            r = e.to;
          if (0 <= n.coordinates[0] - o.coordinates[0] && r.coordinates[0] - o.coordinates[0] < 0)
            return 1;
          if (n.coordinates[0] - o.coordinates[0] < 0 && 0 <= r.coordinates[0] - o.coordinates[0])
            return -1;
          if (n.coordinates[0] - o.coordinates[0] == 0 && r.coordinates[0] - o.coordinates[0] == 0)
            return 0 <= n.coordinates[1] - o.coordinates[1] || 0 <= r.coordinates[1] - o.coordinates[1] ? n.coordinates[1] - r.coordinates[1] : r.coordinates[1] - n.coordinates[1];
          var i = or(o.coordinates, n.coordinates, r.coordinates);
          return i < 0 ? 1 : 0 < i ? -1 : Math.pow(n.coordinates[0] - o.coordinates[0], 2) + Math.pow(n.coordinates[1] - o.coordinates[1], 2) - (Math.pow(r.coordinates[0] - o.coordinates[0], 2) + Math.pow(r.coordinates[1] - o.coordinates[1], 2))
        }),
        this.outerEdgesSorted = !0)
    },
    ta.prototype.getOuterEdges = function () {
      return this.sortOuterEdges(),
        this.outerEdges
    },
    ta.prototype.getOuterEdge = function (t) {
      return this.sortOuterEdges(),
        this.outerEdges[t]
    },
    ta.prototype.addInnerEdge = function (t) {
      this.innerEdges.push(t)
    };
  var ea = function (t, e) {
    this.from = t,
      this.to = e,
      this.next = void 0,
      this.label = void 0,
      this.symetric = void 0,
      this.ring = void 0,
      this.from.addOuterEdge(this),
      this.to.addInnerEdge(this)
  };
  ea.prototype.getSymetric = function () {
      return this.symetric || (this.symetric = new ea(this.to, this.from),
          this.symetric.symetric = this),
        this.symetric
    },
    ea.prototype.deleteEdge = function () {
      this.from.removeOuterEdge(this),
        this.to.removeInnerEdge(this)
    },
    ea.prototype.isEqual = function (t) {
      return this.from.id === t.from.id && this.to.id === t.to.id
    },
    ea.prototype.toString = function () {
      return "Edge { " + this.from.id + " -> " + this.to.id + " }"
    },
    ea.prototype.toLineString = function () {
      return j([this.from.coordinates, this.to.coordinates])
    },
    ea.prototype.compareTo = function (t) {
      return or(t.from.coordinates, t.to.coordinates, this.to.coordinates)
    };
  var na = function () {
      this.edges = [],
        this.polygon = void 0,
        this.envelope = void 0
    },
    ra = {
      length: {
        configurable: !0
      }
    };
  na.prototype.push = function (t) {
      this[this.edges.length] = t,
        this.edges.push(t),
        this.polygon = this.envelope = void 0
    },
    na.prototype.get = function (t) {
      return this.edges[t]
    },
    ra.length.get = function () {
      return this.edges.length
    },
    na.prototype.forEach = function (t) {
      this.edges.forEach(t)
    },
    na.prototype.map = function (t) {
      return this.edges.map(t)
    },
    na.prototype.some = function (t) {
      return this.edges.some(t)
    },
    na.prototype.isValid = function () {
      return !0
    },
    na.prototype.isHole = function () {
      var r = this,
        t = this.edges.reduce(function (t, e, n) {
          return e.from.coordinates[1] > r.edges[t].from.coordinates[1] && (t = n),
            t
        }, 0),
        e = (0 === t ? this.length : t) - 1,
        n = (t + 1) % this.length,
        i = or(this.edges[e].from.coordinates, this.edges[t].from.coordinates, this.edges[n].from.coordinates);
      return 0 === i ? this.edges[e].from.coordinates[0] > this.edges[n].from.coordinates[0] : 0 < i
    },
    na.prototype.toMultiPoint = function () {
      return o(this.edges.map(function (t) {
        return t.from.coordinates
      }))
    },
    na.prototype.toPolygon = function () {
      if (this.polygon)
        return this.polygon;
      var t = this.edges.map(function (t) {
        return t.from.coordinates
      });
      return t.push(this.edges[0].from.coordinates),
        this.polygon = z([t])
    },
    na.prototype.getEnvelope = function () {
      return this.envelope ? this.envelope : this.envelope = ee(this.toPolygon())
    },
    na.findEdgeRingContaining = function (c, t) {
      var h, l, p = c.getEnvelope();
      return t.forEach(function (t) {
          var e, n, r, i, o, s, a = t.getEnvelope();
          if (l && (h = l.getEnvelope()),
            n = p,
            r = (e = a).geometry.coordinates.map(function (t) {
              return t[0]
            }),
            i = e.geometry.coordinates.map(function (t) {
              return t[1]
            }),
            o = n.geometry.coordinates.map(function (t) {
              return t[0]
            }),
            s = n.geometry.coordinates.map(function (t) {
              return t[1]
            }),
            (Math.max(null, r) !== Math.max(null, o) || Math.max(null, i) !== Math.max(null, s) || Math.min(null, r) !== Math.min(null, o) || Math.min(null, i) !== Math.min(null, s)) && sr(a, p)) {
            var u = c.map(function (t) {
              return t.from.coordinates
            }).find(function (r) {
              return !t.some(function (t) {
                return e = r,
                  n = t.from.coordinates,
                  e[0] === n[0] && e[1] === n[1];
                var e, n
              })
            });
            u && t.inside(k(u)) && (l && !sr(h, a) || (l = t))
          }
        }),
        l
    },
    na.prototype.inside = function (t) {
      return Mt(t, this.toPolygon())
    },
    Object.defineProperties(na.prototype, ra);
  var ia = function () {
    this.edges = [],
      this.nodes = {}
  };
  ia.fromGeoJson = function (t) {
      ! function (t) {
        if (!t)
          throw new Error("No geojson passed");
        if ("FeatureCollection" !== t.type && "GeometryCollection" !== t.type && "MultiLineString" !== t.type && "LineString" !== t.type && "Feature" !== t.type)
          throw new Error("Invalid input type '" + t.type + "'. Geojson must be FeatureCollection, GeometryCollection, LineString, MultiLineString or Feature")
      }(t);
      var i = new ia;
      return L(t, function (t) {
          G(t, "LineString", "Graph::fromGeoJson"),
            _(t, function (t, e) {
              if (t) {
                var n = i.getNode(t),
                  r = i.getNode(e);
                i.addEdge(n, r)
              }
              return e
            })
        }),
        i
    },
    ia.prototype.getNode = function (t) {
      var e = ta.buildId(t),
        n = this.nodes[e];
      return n || (n = this.nodes[e] = new ta(t)),
        n
    },
    ia.prototype.addEdge = function (t, e) {
      var n = new ea(t, e),
        r = n.getSymetric();
      this.edges.push(n),
        this.edges.push(r)
    },
    ia.prototype.deleteDangles = function () {
      var e = this;
      Object.keys(this.nodes).map(function (t) {
        return e.nodes[t]
      }).forEach(function (t) {
        return e._removeIfDangle(t)
      })
    },
    ia.prototype._removeIfDangle = function (t) {
      var e = this;
      if (t.innerEdges.length <= 1) {
        var n = t.getOuterEdges().map(function (t) {
          return t.to
        });
        this.removeNode(t),
          n.forEach(function (t) {
            return e._removeIfDangle(t)
          })
      }
    },
    ia.prototype.deleteCutEdges = function () {
      var e = this;
      this._computeNextCWEdges(),
        this._findLabeledEdgeRings(),
        this.edges.forEach(function (t) {
          t.label === t.symetric.label && (e.removeEdge(t.symetric),
            e.removeEdge(t))
        })
    },
    ia.prototype._computeNextCWEdges = function (n) {
      var e = this;
      void 0 === n ? Object.keys(this.nodes).forEach(function (t) {
        return e._computeNextCWEdges(e.nodes[t])
      }) : n.getOuterEdges().forEach(function (t, e) {
        n.getOuterEdge((0 === e ? n.getOuterEdges().length : e) - 1).symetric.next = t
      })
    },
    ia.prototype._computeNextCCWEdges = function (t, e) {
      for (var n, r, i = t.getOuterEdges(), o = i.length - 1; 0 <= o; --o) {
        var s = i[o],
          a = s.symetric,
          u = void 0,
          c = void 0;
        s.label === e && (u = s),
          a.label === e && (c = a),
          u && c && (c && (r = c),
            u && (r && (r.next = u,
                r = void 0),
              n || (n = u)))
      }
      r && (r.next = n)
    },
    ia.prototype._findLabeledEdgeRings = function () {
      var n = [],
        r = 0;
      return this.edges.forEach(function (t) {
          if (!(0 <= t.label)) {
            n.push(t);
            for (var e = t; e.label = r,
              e = e.next,
              !t.isEqual(e);)
            ;
            r++
          }
        }),
        n
    },
    ia.prototype.getEdgeRings = function () {
      var n = this;
      this._computeNextCWEdges(),
        this.edges.forEach(function (t) {
          t.label = void 0
        }),
        this._findLabeledEdgeRings().forEach(function (e) {
          n._findIntersectionNodes(e).forEach(function (t) {
            n._computeNextCCWEdges(t, e.label)
          })
        });
      var e = [];
      return this.edges.forEach(function (t) {
          t.ring || e.push(n._findEdgeRing(t))
        }),
        e
    },
    ia.prototype._findIntersectionNodes = function (n) {
      for (var t = [], r = n, e = function () {
          var e = 0;
          r.from.getOuterEdges().forEach(function (t) {
              t.label === n.label && ++e
            }),
            1 < e && t.push(r.from),
            r = r.next
        }; e(),
        !n.isEqual(r);)
      ;
      return t
    },
    ia.prototype._findEdgeRing = function (t) {
      for (var e = t, n = new na; n.push(e),
        e.ring = n,
        e = e.next,
        !t.isEqual(e);)
      ;
      return n
    },
    ia.prototype.removeNode = function (t) {
      var e = this;
      t.getOuterEdges().forEach(function (t) {
          return e.removeEdge(t)
        }),
        t.innerEdges.forEach(function (t) {
          return e.removeEdge(t)
        }),
        delete this.nodes[t.id]
    },
    ia.prototype.removeEdge = function (e) {
      this.edges = this.edges.filter(function (t) {
          return !t.isEqual(e)
        }),
        e.deleteEdge()
    };
  var oa = yt(function (t, e) {
      function n(t) {
        var e = [];
        for (var n in t)
          e.push(n);
        return e
      }
      (t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
    }),
    sa = (oa.shim,
      yt(function (t, e) {
        function n(t) {
          return "[object Arguments]" == Object.prototype.toString.call(t)
        }

        function r(t) {
          return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
        }
        var i = "[object Arguments]" == function () {
          return Object.prototype.toString.call(arguments)
        }();
        (e = t.exports = i ? n : r).supported = n,
          e.unsupported = r
      })),
    aa = (sa.supported,
      sa.unsupported,
      yt(function (t) {
        function a(t) {
          return null == t
        }

        function u(t) {
          return !(!t || "object" != typeof t || "number" != typeof t.length || "function" != typeof t.copy || "function" != typeof t.slice || 0 < t.length && "number" != typeof t[0])
        }
        var c = Array.prototype.slice,
          h = t.exports = function (t, e, n) {
            return n || (n = {}),
              t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : function (t, e, n) {
                var r, i;
                if (a(t) || a(e))
                  return !1;
                if (t.prototype !== e.prototype)
                  return !1;
                if (sa(t))
                  return !!sa(e) && (t = c.call(t),
                    e = c.call(e),
                    h(t, e, n));
                if (u(t)) {
                  if (!u(e))
                    return !1;
                  if (t.length !== e.length)
                    return !1;
                  for (r = 0; r < t.length; r++)
                    if (t[r] !== e[r])
                      return !1;
                  return !0
                }
                try {
                  var o = oa(t),
                    s = oa(e)
                } catch (t) {
                  return !1
                }
                if (o.length != s.length)
                  return !1;
                for (o.sort(),
                  s.sort(),
                  r = o.length - 1; 0 <= r; r--)
                  if (o[r] != s[r])
                    return !1;
                for (r = o.length - 1; 0 <= r; r--)
                  if (i = o[r],
                    !h(t[i], e[i], n))
                    return !1;
                return typeof t == typeof e
              }(t, e, n))
          }
      })),
    ua = function (t) {
      this.precision = t && t.precision ? t.precision : 17,
        this.direction = !(!t || !t.direction) && t.direction,
        this.pseudoNode = !(!t || !t.pseudoNode) && t.pseudoNode,
        this.objectComparator = t && t.objectComparator ? t.objectComparator : _r
    };
  ua.prototype.compare = function (t, e) {
      if (t.type !== e.type || !yr(t, e))
        return !1;
      switch (t.type) {
        case "Point":
          return this.compareCoord(t.coordinates, e.coordinates);
        case "LineString":
          return this.compareLine(t.coordinates, e.coordinates, 0, !1);
        case "Polygon":
          return this.comparePolygon(t, e);
        case "Feature":
          return this.compareFeature(t, e);
        default:
          if (0 === t.type.indexOf("Multi")) {
            var n = this,
              r = dr(t),
              i = dr(e);
            return r.every(function (e) {
              return this.some(function (t) {
                return n.compare(e, t)
              })
            }, i)
          }
      }
      return !1
    },
    ua.prototype.compareCoord = function (t, e) {
      if (t.length !== e.length)
        return !1;
      for (var n = 0; n < t.length; n++)
        if (t[n].toFixed(this.precision) !== e[n].toFixed(this.precision))
          return !1;
      return !0
    },
    ua.prototype.compareLine = function (t, e, n, r) {
      if (!yr(t, e))
        return !1;
      var i = this.pseudoNode ? t : this.removePseudo(t),
        o = this.pseudoNode ? e : this.removePseudo(e);
      if (!r || this.compareCoord(i[0], o[0]) || (o = this.fixStartIndex(o, i))) {
        var s = this.compareCoord(i[n], o[n]);
        return this.direction || s ? this.comparePath(i, o) : !!this.compareCoord(i[n], o[o.length - (1 + n)]) && this.comparePath(i.slice().reverse(), o)
      }
    },
    ua.prototype.fixStartIndex = function (t, e) {
      for (var n, r = -1, i = 0; i < t.length; i++)
        if (this.compareCoord(t[i], e[0])) {
          r = i;
          break
        }
      return 0 <= r && (n = [].concat(t.slice(r, t.length), t.slice(1, r + 1))),
        n
    },
    ua.prototype.comparePath = function (t, e) {
      var n = this;
      return t.every(function (t, e) {
        return n.compareCoord(t, this[e])
      }, e)
    },
    ua.prototype.comparePolygon = function (t, e) {
      if (this.compareLine(t.coordinates[0], e.coordinates[0], 1, !0)) {
        var n = t.coordinates.slice(1, t.coordinates.length),
          r = e.coordinates.slice(1, e.coordinates.length),
          i = this;
        return n.every(function (e) {
          return this.some(function (t) {
            return i.compareLine(e, t, 1, !0)
          })
        }, r)
      }
      return !1
    },
    ua.prototype.compareFeature = function (t, e) {
      return !(t.id !== e.id || !this.objectComparator(t.properties, e.properties) || !this.compareBBox(t, e)) && this.compare(t.geometry, e.geometry)
    },
    ua.prototype.compareBBox = function (t, e) {
      return !!(!t.bbox && !e.bbox || t.bbox && e.bbox && this.compareCoord(t.bbox, e.bbox))
    },
    ua.prototype.removePseudo = function (t) {
      return t
    };
  var ca = ua,
    ha = yt(function (t) {
      function e(t, e, n, r) {
        this.dataset = [],
          this.epsilon = 1,
          this.minPts = 2,
          this.distance = this._euclideanDistance,
          this.clusters = [],
          this.noise = [],
          this._visited = [],
          this._assigned = [],
          this._datasetLength = 0,
          this._init(t, e, n, r)
      }
      e.prototype.run = function (t, e, n, r) {
          this._init(t, e, n, r);
          for (var i = 0; i < this._datasetLength; i++)
            if (1 !== this._visited[i]) {
              this._visited[i] = 1;
              var o = this._regionQuery(i);
              if (o.length < this.minPts)
                this.noise.push(i);
              else {
                var s = this.clusters.length;
                this.clusters.push([]),
                  this._addToCluster(i, s),
                  this._expandCluster(s, o)
              }
            }
          return this.clusters
        },
        e.prototype._init = function (t, e, n, r) {
          if (t) {
            if (!(t instanceof Array))
              throw Error("Dataset must be of type array, " + typeof t + " given");
            this.dataset = t,
              this.clusters = [],
              this.noise = [],
              this._datasetLength = t.length,
              this._visited = new Array(this._datasetLength),
              this._assigned = new Array(this._datasetLength)
          }
          e && (this.epsilon = e),
            n && (this.minPts = n),
            r && (this.distance = r)
        },
        e.prototype._expandCluster = function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (1 !== this._visited[r]) {
              this._visited[r] = 1;
              var i = this._regionQuery(r);
              i.length >= this.minPts && (e = this._mergeArrays(e, i))
            }
            1 !== this._assigned[r] && this._addToCluster(r, t)
          }
        },
        e.prototype._addToCluster = function (t, e) {
          this.clusters[e].push(t),
            this._assigned[t] = 1
        },
        e.prototype._regionQuery = function (t) {
          for (var e = [], n = 0; n < this._datasetLength; n++)
            this.distance(this.dataset[t], this.dataset[n]) < this.epsilon && e.push(n);
          return e
        },
        e.prototype._mergeArrays = function (t, e) {
          for (var n = e.length, r = 0; r < n; r++) {
            var i = e[r];
            t.indexOf(i) < 0 && t.push(i)
          }
          return t
        },
        e.prototype._euclideanDistance = function (t, e) {
          for (var n = 0, r = Math.min(t.length, e.length); r--;)
            n += (t[r] - e[r]) * (t[r] - e[r]);
          return Math.sqrt(n)
        },
        t.exports && (t.exports = e)
    }),
    la = yt(function (t) {
      function e(t, e, n) {
        this.k = 3,
          this.dataset = [],
          this.assignments = [],
          this.centroids = [],
          this.init(t, e, n)
      }
      e.prototype.init = function (t, e, n) {
          this.assignments = [],
            this.centroids = [],
            void 0 !== t && (this.dataset = t),
            void 0 !== e && (this.k = e),
            void 0 !== n && (this.distance = n)
        },
        e.prototype.run = function (t, e) {
          this.init(t, e);
          for (var n = this.dataset.length, r = 0; r < this.k; r++)
            this.centroids[r] = this.randomCentroid();
          for (var i = !0; i;) {
            i = this.assign();
            for (var o = 0; o < this.k; o++) {
              for (var s = new Array(h), a = 0, u = 0; u < h; u++)
                s[u] = 0;
              for (var c = 0; c < n; c++) {
                var h = this.dataset[c].length;
                if (o === this.assignments[c]) {
                  for (u = 0; u < h; u++)
                    s[u] += this.dataset[c][u];
                  a++
                }
              }
              if (0 < a) {
                for (u = 0; u < h; u++)
                  s[u] /= a;
                this.centroids[o] = s
              } else
                this.centroids[o] = this.randomCentroid(),
                i = !0
            }
          }
          return this.getClusters()
        },
        e.prototype.randomCentroid = function () {
          for (var t, e, n = this.dataset.length - 1; e = Math.round(Math.random() * n),
            t = this.dataset[e],
            0 <= this.centroids.indexOf(t);)
          ;
          return t
        },
        e.prototype.assign = function () {
          for (var t, e = !1, n = this.dataset.length, r = 0; r < n; r++)
            (t = this.argmin(this.dataset[r], this.centroids, this.distance)) != this.assignments[r] && (this.assignments[r] = t,
              e = !0);
          return e
        },
        e.prototype.getClusters = function () {
          for (var t, e = new Array(this.k), n = 0; n < this.assignments.length; n++)
            void 0 === e[t = this.assignments[n]] && (e[t] = []),
            e[t].push(n);
          return e
        },
        e.prototype.argmin = function (t, e, n) {
          for (var r, i = Number.MAX_VALUE, o = 0, s = e.length, a = 0; a < s; a++)
            (r = n(t, e[a])) < i && (i = r,
              o = a);
          return o
        },
        e.prototype.distance = function (t, e) {
          for (var n = 0, r = Math.min(t.length, e.length); r--;) {
            var i = t[r] - e[r];
            n += i * i
          }
          return Math.sqrt(n)
        },
        t.exports && (t.exports = e)
    }),
    pa = yt(function (t) {
      function e(t, e, n) {
        this._queue = [],
          this._priorities = [],
          this._sorting = "desc",
          this._init(t, e, n)
      }
      e.prototype.insert = function (t, e) {
          for (var n = this._queue.length, r = n; r--;) {
            var i = this._priorities[r];
            "desc" === this._sorting ? i < e && (n = r) : e < i && (n = r)
          }
          this._insertAt(t, e, n)
        },
        e.prototype.remove = function (t) {
          for (var e = this._queue.length; e--;)
            if (t === this._queue[e]) {
              this._queue.splice(e, 1),
                this._priorities.splice(e, 1);
              break
            }
        },
        e.prototype.forEach = function (t) {
          this._queue.forEach(t)
        },
        e.prototype.getElements = function () {
          return this._queue
        },
        e.prototype.getElementPriority = function (t) {
          return this._priorities[t]
        },
        e.prototype.getPriorities = function () {
          return this._priorities
        },
        e.prototype.getElementsWithPriorities = function () {
          for (var t = [], e = 0, n = this._queue.length; e < n; e++)
            t.push([this._queue[e], this._priorities[e]]);
          return t
        },
        e.prototype._init = function (t, e, n) {
          if (t && e) {
            if (this._queue = [],
              this._priorities = [],
              t.length !== e.length)
              throw new Error("Arrays must have the same length");
            for (var r = 0; r < t.length; r++)
              this.insert(t[r], e[r])
          }
          n && (this._sorting = n)
        },
        e.prototype._insertAt = function (t, e, n) {
          this._queue.length === n ? (this._queue.push(t),
            this._priorities.push(e)) : (this._queue.splice(n, 0, t),
            this._priorities.splice(n, 0, e))
        },
        t.exports && (t.exports = e)
    }),
    fa = yt(function (t) {
      function e(t, e, n, r) {
        this.epsilon = 1,
          this.minPts = 1,
          this.distance = this._euclideanDistance,
          this._reachability = [],
          this._processed = [],
          this._coreDistance = 0,
          this._orderedList = [],
          this._init(t, e, n, r)
      }
      if (t.exports)
        var c = pa;
      e.prototype.run = function (t, e, n, r) {
          this._init(t, e, n, r);
          for (var i = 0, o = this.dataset.length; i < o; i++)
            if (1 !== this._processed[i]) {
              this._processed[i] = 1,
                this.clusters.push([i]);
              var s = this.clusters.length - 1;
              this._orderedList.push(i);
              var a = new c(null, null, "asc"),
                u = this._regionQuery(i);
              void 0 !== this._distanceToCore(i) && (this._updateQueue(i, u, a),
                this._expandCluster(s, a))
            }
          return this.clusters
        },
        e.prototype.getReachabilityPlot = function () {
          for (var t = [], e = 0, n = this._orderedList.length; e < n; e++) {
            var r = this._orderedList[e],
              i = this._reachability[r];
            t.push([r, i])
          }
          return t
        },
        e.prototype._init = function (t, e, n, r) {
          if (t) {
            if (!(t instanceof Array))
              throw Error("Dataset must be of type array, " + typeof t + " given");
            this.dataset = t,
              this.clusters = [],
              this._reachability = new Array(this.dataset.length),
              this._processed = new Array(this.dataset.length),
              this._coreDistance = 0,
              this._orderedList = []
          }
          e && (this.epsilon = e),
            n && (this.minPts = n),
            r && (this.distance = r)
        },
        e.prototype._updateQueue = function (r, t, i) {
          var o = this;
          this._coreDistance = this._distanceToCore(r),
            t.forEach(function (t) {
              if (void 0 === o._processed[t]) {
                var e = o.distance(o.dataset[r], o.dataset[t]),
                  n = Math.max(o._coreDistance, e);
                void 0 === o._reachability[t] ? (o._reachability[t] = n,
                  i.insert(t, n)) : n < o._reachability[t] && (o._reachability[t] = n,
                  i.remove(t),
                  i.insert(t, n))
              }
            })
        },
        e.prototype._expandCluster = function (t, e) {
          for (var n = e.getElements(), r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            if (void 0 === this._processed[o]) {
              var s = this._regionQuery(o);
              this._processed[o] = 1,
                this.clusters[t].push(o),
                this._orderedList.push(o),
                void 0 !== this._distanceToCore(o) && (this._updateQueue(o, s, e),
                  this._expandCluster(t, e))
            }
          }
        },
        e.prototype._distanceToCore = function (t) {
          for (var e = this.epsilon, n = 0; n < e; n++)
            if (this._regionQuery(t, n).length >= this.minPts)
              return n
        },
        e.prototype._regionQuery = function (t, e) {
          e = e || this.epsilon;
          for (var n = [], r = 0, i = this.dataset.length; r < i; r++)
            this.distance(this.dataset[t], this.dataset[r]) < e && n.push(r);
          return n
        },
        e.prototype._euclideanDistance = function (t, e) {
          for (var n = 0, r = Math.min(t.length, e.length); r--;)
            n += (t[r] - e[r]) * (t[r] - e[r]);
          return Math.sqrt(n)
        },
        t.exports && (t.exports = e)
    }),
    ga = yt(function (t) {
      t.exports && (t.exports = {
        DBSCAN: ha,
        KMEANS: la,
        OPTICS: fa,
        PriorityQueue: pa
      })
    }),
    da = (ga.DBSCAN,
      ga.KMEANS,
      ga.OPTICS,
      ga.PriorityQueue,
      function (t, e, n) {
        for (var r = t.length, i = 0, o = 0; o < r; o++) {
          var s = (t[o] || 0) - (e[o] || 0);
          i += s * s
        }
        return n ? Math.sqrt(i) : i
      }
    ),
    ya = da,
    _a = function (t, e, n) {
      var r = Math.abs(t - e);
      return n ? r : r * r
    },
    ma = da,
    va = function (t, e, n, r) {
      var i = [],
        o = [],
        s = [],
        a = [],
        u = !1,
        c = r || 1e4,
        h = t.length,
        l = t[0].length,
        p = 0 < l,
        f = [];
      if (n)
        i = "kmrand" == n ? function (t, e) {
          for (var n = {}, r = [], i = e << 2, o = t.length, s = 0 < t[0].length; r.length < e && 0 < i--;) {
            var a = t[Math.floor(Math.random() * o)],
              u = s ? a.join("_") : "" + a;
            n[u] || (n[u] = !0,
              r.push(a))
          }
          if (r.length < e)
            throw new Error("Error initializating clusters");
          return r
        }(t, e) : "kmpp" == n ? function (t, e) {
          var n = t[0].length ? ya : _a,
            r = [],
            i = t.length,
            o = 0 < t[0].length,
            s = t[Math.floor(Math.random() * i)];
          for (o && s.join("_"),
            r.push(s); r.length < e;) {
            for (var a = [], u = r.length, c = 0, h = [], l = 0; l < i; l++) {
              for (var p = 1 / 0, f = 0; f < u; f++) {
                var g = n(t[l], r[f]);
                g <= p && (p = g)
              }
              a[l] = p
            }
            for (var d = 0; d < i; d++)
              c += a[d];
            for (var y = 0; y < i; y++)
              h[y] = {
                i: y,
                v: t[y],
                pr: a[y] / c,
                cs: 0
              };
            h.sort(function (t, e) {
                return t.pr - e.pr
              }),
              h[0].cs = h[0].pr;
            for (var _ = 1; _ < i; _++)
              h[_].cs = h[_ - 1].cs + h[_].pr;
            for (var m = Math.random(), v = 0; v < i - 1 && h[v++].cs < m;)
            ;
            r.push(h[v - 1].v)
          }
          return r
        }(t, e) : n;
      else
        for (var g = {}; i.length < e;) {
          var d = Math.floor(Math.random() * h);
          g[d] || (g[d] = !0,
            i.push(t[d]))
        }
      do {
        vr(e, 0, f);
        for (var y = 0; y < h; y++) {
          for (var _ = 1 / 0, m = 0, v = 0; v < e; v++)
            (a = p ? ma(t[y], i[v]) : Math.abs(t[y] - i[v])) <= _ && (_ = a,
              m = v);
          f[s[y] = m]++
        }
        for (var x = [], E = (o = [],
            0); E < e; E++)
          x[E] = p ? vr(l, 0, x[E]) : 0,
          o[E] = i[E];
        if (p) {
          for (var w = 0; w < e; w++)
            i[w] = [];
          for (var b = 0; b < h; b++)
            for (var I = x[s[b]], N = t[b], C = 0; C < l; C++)
              I[C] += N[C];
          u = !0;
          for (var S = 0; S < e; S++) {
            for (var M = i[S], L = x[S], P = o[S], O = f[S], R = 0; R < l; R++)
              M[R] = L[R] / O || 0;
            if (u)
              for (var T = 0; T < l; T++)
                if (P[T] != M[T]) {
                  u = !1;
                  break
                }
          }
        } else {
          for (var A = 0; A < h; A++)
            x[s[A]] += t[A];
          for (var D = 0; D < e; D++)
            i[D] = x[D] / f[D] || 0;
          u = !0;
          for (var F = 0; F < e; F++)
            if (o[F] != i[F]) {
              u = !1;
              break
            }
        }
        u = u || --c <= 0
      } while (!u);
      return {
        it: 1e4 - c,
        k: e,
        idxs: s,
        centroids: i
      }
    },
    xa = {
      search: function (t, e, n, r) {
        t.cleanDirty();
        var i = (r = r || {}).heuristic || xa.heuristics.manhattan,
          o = r.closest || !1,
          s = new Ir(function (t) {
            return t.f
          }),
          a = e;
        for (e.h = i(e, n),
          s.push(e); 0 < s.size();) {
          var u = s.pop();
          if (u === n)
            return Er(u);
          u.closed = !0;
          for (var c = t.neighbors(u), h = 0, l = c.length; h < l; ++h) {
            var p = c[h];
            if (!p.closed && !p.isWall()) {
              var f = u.g + p.getCost(u),
                g = p.visited;
              (!g || f < p.g) && (p.visited = !0,
                p.parent = u,
                p.h = p.h || i(p, n),
                p.g = f,
                p.f = p.g + p.h,
                t.markDirty(p),
                o && (p.h < a.h || p.h === a.h && p.g < a.g) && (a = p),
                g ? s.rescoreElement(p) : s.push(p))
            }
          }
        }
        return o ? Er(a) : []
      },
      heuristics: {
        manhattan: function (t, e) {
          return Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
        },
        diagonal: function (t, e) {
          var n = Math.sqrt(2),
            r = Math.abs(e.x - t.x),
            i = Math.abs(e.y - t.y);
          return 1 * (r + i) + (n - 2) * Math.min(r, i)
        }
      },
      cleanNode: function (t) {
        t.f = 0,
          t.g = 0,
          t.h = 0,
          t.visited = !1,
          t.closed = !1,
          t.parent = null
      }
    };
  wr.prototype.init = function () {
      this.dirtyNodes = [];
      for (var t = 0; t < this.nodes.length; t++)
        xa.cleanNode(this.nodes[t])
    },
    wr.prototype.cleanDirty = function () {
      for (var t = 0; t < this.dirtyNodes.length; t++)
        xa.cleanNode(this.dirtyNodes[t]);
      this.dirtyNodes = []
    },
    wr.prototype.markDirty = function (t) {
      this.dirtyNodes.push(t)
    },
    wr.prototype.neighbors = function (t) {
      var e = [],
        n = t.x,
        r = t.y,
        i = this.grid;
      return i[n - 1] && i[n - 1][r] && e.push(i[n - 1][r]),
        i[n + 1] && i[n + 1][r] && e.push(i[n + 1][r]),
        i[n] && i[n][r - 1] && e.push(i[n][r - 1]),
        i[n] && i[n][r + 1] && e.push(i[n][r + 1]),
        this.diagonal && (i[n - 1] && i[n - 1][r - 1] && e.push(i[n - 1][r - 1]),
          i[n + 1] && i[n + 1][r - 1] && e.push(i[n + 1][r - 1]),
          i[n - 1] && i[n - 1][r + 1] && e.push(i[n - 1][r + 1]),
          i[n + 1] && i[n + 1][r + 1] && e.push(i[n + 1][r + 1])),
        e
    },
    wr.prototype.toString = function () {
      for (var t, e, n, r, i = [], o = this.grid, s = 0, a = o.length; s < a; s++) {
        for (t = [],
          n = 0,
          r = (e = o[s]).length; n < r; n++)
          t.push(e[n].weight);
        i.push(t.join(" "))
      }
      return i.join("\n")
    },
    br.prototype.toString = function () {
      return "[" + this.x + " " + this.y + "]"
    },
    br.prototype.getCost = function (t) {
      return t && t.x !== this.x && t.y !== this.y ? 1.41421 * this.weight : this.weight
    },
    br.prototype.isWall = function () {
      return 0 === this.weight
    },
    Ir.prototype = {
      push: function (t) {
        this.content.push(t),
          this.sinkDown(this.content.length - 1)
      },
      pop: function () {
        var t = this.content[0],
          e = this.content.pop();
        return 0 < this.content.length && (this.content[0] = e,
            this.bubbleUp(0)),
          t
      },
      remove: function (t) {
        var e = this.content.indexOf(t),
          n = this.content.pop();
        e !== this.content.length - 1 && (this.content[e] = n,
          this.scoreFunction(n) < this.scoreFunction(t) ? this.sinkDown(e) : this.bubbleUp(e))
      },
      size: function () {
        return this.content.length
      },
      rescoreElement: function (t) {
        this.sinkDown(this.content.indexOf(t))
      },
      sinkDown: function (t) {
        for (var e = this.content[t]; 0 < t;) {
          var n = (t + 1 >> 1) - 1,
            r = this.content[n];
          if (!(this.scoreFunction(e) < this.scoreFunction(r)))
            break;
          this.content[n] = e,
            this.content[t] = r,
            t = n
        }
      },
      bubbleUp: function (t) {
        for (var e = this.content.length, n = this.content[t], r = this.scoreFunction(n);;) {
          var i, o = t + 1 << 1,
            s = o - 1,
            a = null;
          if (s < e) {
            var u = this.content[s];
            (i = this.scoreFunction(u)) < r && (a = s)
          }
          if (o < e) {
            var c = this.content[o];
            this.scoreFunction(c) < (null === a ? r : i) && (a = o)
          }
          if (null === a)
            break;
          this.content[t] = this.content[a],
            this.content[a] = n,
            t = a
        }
      }
    };
  var Ea = function (t) {
    return function () {
      return t
    }
  };
  Sr.prototype = {
    constructor: Sr,
    insert: function (t, e) {
      var n, r, i;
      if (t) {
        if (e.P = t,
          e.N = t.N,
          t.N && (t.N.P = e),
          t.N = e,
          t.R) {
          for (t = t.R; t.L;)
            t = t.L;
          t.L = e
        } else
          t.R = e;
        n = t
      } else
        n = this._ ? (t = Or(this._),
          e.P = null,
          (e.N = t).P = t.L = e,
          t) : (e.P = e.N = null,
          this._ = e,
          null);
      for (e.L = e.R = null,
        e.U = n,
        e.C = !0,
        t = e; n && n.C;)
        n === (r = n.U).L ? (i = r.R) && i.C ? (n.C = i.C = !1,
          r.C = !0,
          t = r) : (t === n.R && (Lr(this, n),
            n = (t = n).U),
          n.C = !1,
          r.C = !0,
          Pr(this, r)) : (i = r.L) && i.C ? (n.C = i.C = !1,
          r.C = !0,
          t = r) : (t === n.L && (Pr(this, n),
            n = (t = n).U),
          n.C = !1,
          r.C = !0,
          Lr(this, r)),
        n = t.U;
      this._.C = !1
    },
    remove: function (t) {
      t.N && (t.N.P = t.P),
        t.P && (t.P.N = t.N),
        t.N = t.P = null;
      var e, n, r, i = t.U,
        o = t.L,
        s = t.R;
      if (n = o ? s ? Or(s) : o : s,
        i ? i.L === t ? i.L = n : i.R = n : this._ = n,
        o && s ? (r = n.C,
          n.C = t.C,
          ((n.L = o).U = n) !== s ? (i = n.U,
            n.U = t.U,
            t = n.R,
            i.L = t,
            (n.R = s).U = n) : (n.U = i,
            t = (i = n).R)) : (r = t.C,
          t = n),
        t && (t.U = i),
        !r)
        if (t && t.C)
          t.C = !1;
        else {
          do {
            if (t === this._)
              break;
            if (t === i.L) {
              if ((e = i.R).C && (e.C = !1,
                  i.C = !0,
                  Lr(this, i),
                  e = i.R),
                e.L && e.L.C || e.R && e.R.C) {
                e.R && e.R.C || (e.L.C = !1,
                    e.C = !0,
                    Pr(this, e),
                    e = i.R),
                  e.C = i.C,
                  i.C = e.R.C = !1,
                  Lr(this, i),
                  t = this._;
                break
              }
            } else if ((e = i.L).C && (e.C = !1,
                i.C = !0,
                Pr(this, i),
                e = i.L),
              e.L && e.L.C || e.R && e.R.C) {
              e.L && e.L.C || (e.R.C = !1,
                  e.C = !0,
                  Lr(this, e),
                  e = i.L),
                e.C = i.C,
                i.C = e.L.C = !1,
                Pr(this, i),
                t = this._;
              break
            }
            e.C = !0,
              i = (t = i).U
          } while (!t.C);
          t && (t.C = !1)
        }
    }
  };
  var wa, ba, Ia, Na, Ca, Sa = [],
    Ma = [],
    La = 1e-6,
    Pa = 1e-12;
  Vr.prototype = {
    constructor: Vr,
    polygons: function () {
      var n = this.edges;
      return this.cells.map(function (e) {
        var t = e.halfedges.map(function (t) {
          return qr(e, n[t])
        });
        return t.data = e.site.data,
          t
      })
    },
    triangles: function () {
      var p = [],
        f = this.edges;
      return this.cells.forEach(function (t, e) {
          if (r = (n = t.halfedges).length)
            for (var n, r, i, o = t.site, s = -1, a = f[n[r - 1]], u = a.left === o ? a.right : a.left; ++s < r;)
              i = u,
              u = (a = f[n[s]]).left === o ? a.right : a.left,
              i && u && e < i.index && e < u.index && (h = i,
                l = u,
                ((c = o)[0] - l[0]) * (h[1] - c[1]) - (c[0] - h[0]) * (l[1] - c[1]) < 0) && p.push([o.data, i.data, u.data]);
          var c, h, l
        }),
        p
    },
    links: function () {
      return this.edges.filter(function (t) {
        return t.right
      }).map(function (t) {
        return {
          source: t.left.data,
          target: t.right.data
        }
      })
    },
    find: function (s, a, t) {
      for (var e, u, c = this, h = c._found || 0, n = c.cells.length; !(u = c.cells[h]);)
        if (++h >= n)
          return null;
      for (var r = s - u.site[0], i = a - u.site[1], l = r * r + i * i; u = c.cells[e = h],
        h = null,
        u.halfedges.forEach(function (t) {
          var e = c.edges[t],
            n = e.left;
          if (n !== u.site && n || (n = e.right)) {
            var r = s - n[0],
              i = a - n[1],
              o = r * r + i * i;
            o < l && (l = o,
              h = n.index)
          }
        }),
        null !== h;)
      ;
      return c._found = e,
        null == t || l <= t * t ? u.site : null
    }
  };
  var Oa = Object.freeze({
      randomPosition: Qr,
      randomPoint: $r,
      randomPolygon: ti,
      randomLineString: ei
    }),
    Ra = Object.freeze({
      getCluster: ri,
      clusterEach: ii,
      clusterReduce: oi,
      createBins: si,
      applyFilter: ai,
      propertiesContainsFilter: ui,
      filterProperties: ci
    });
  "fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
      configurable: !0,
      value: function (t) {
        if (null == this)
          throw new TypeError(this + " is not an object");
        var e = Object(this),
          n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0,
          r = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
        r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
        var i = 2 in arguments && void 0 !== arguments[2] ? parseInt(Number(arguments[2]), 10) || 0 : n;
        for (i = i < 0 ? Math.max(n + arguments[2], 0) : Math.min(i, n); r < i;)
          e[r] = t,
          ++r;
        return e
      },
      writable: !0
    }),
    Number.isFinite = Number.isFinite || function (t) {
      return "number" == typeof t && isFinite(t)
    },
    Number.isInteger = Number.isInteger || function (t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    },
    Number.parseFloat = Number.parseFloat || parseFloat,
    Number.isNaN = Number.isNaN || function (t) {
      return t != t
    },
    Math.trunc = Math.trunc || function (t) {
      return t < 0 ? Math.ceil(t) : Math.floor(t)
    };
  var Ta = function () {};
  Ta.prototype.interfaces_ = function () {
      return []
    },
    Ta.prototype.getClass = function () {
      return Ta
    },
    Ta.prototype.equalsWithTolerance = function (t, e, n) {
      return Math.abs(t - e) <= n
    };
  var Aa = function () {},
    Da = function () {},
    Fa = {
      MAX_VALUE: {
        configurable: !0
      }
    };
  Da.isNaN = function (t) {
      return Number.isNaN(t)
    },
    Da.doubleToLongBits = function (t) {
      return t
    },
    Da.longBitsToDouble = function (t) {
      return t
    },
    Da.isInfinite = function (t) {
      return !Number.isFinite(t)
    },
    Fa.MAX_VALUE.get = function () {
      return Number.MAX_VALUE
    },
    Object.defineProperties(Da, Fa);
  var qa = function () {},
    Ga = function () {},
    Ba = function () {},
    ka = function t() {
      if (this.x = null,
        this.y = null,
        this.z = null,
        0 === arguments.length)
        this.x = 0,
        this.y = 0,
        this.z = t.NULL_ORDINATE;
      else if (1 === arguments.length) {
        var e = arguments[0];
        this.x = e.x,
          this.y = e.y,
          this.z = e.z
      } else
        2 === arguments.length ? (this.x = arguments[0],
          this.y = arguments[1],
          this.z = t.NULL_ORDINATE) : 3 === arguments.length && (this.x = arguments[0],
          this.y = arguments[1],
          this.z = arguments[2])
    },
    za = {
      DimensionalComparator: {
        configurable: !0
      },
      serialVersionUID: {
        configurable: !0
      },
      NULL_ORDINATE: {
        configurable: !0
      },
      X: {
        configurable: !0
      },
      Y: {
        configurable: !0
      },
      Z: {
        configurable: !0
      }
    };
  ka.prototype.setOrdinate = function (t, e) {
      switch (t) {
        case ka.X:
          this.x = e;
          break;
        case ka.Y:
          this.y = e;
          break;
        case ka.Z:
          this.z = e;
          break;
        default:
          throw new Aa("Invalid ordinate index: " + t)
      }
    },
    ka.prototype.equals2D = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.x === t.x && this.y === t.y
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return !!Ta.equalsWithTolerance(this.x, e.x, n) && !!Ta.equalsWithTolerance(this.y, e.y, n)
      }
    },
    ka.prototype.getOrdinate = function (t) {
      switch (t) {
        case ka.X:
          return this.x;
        case ka.Y:
          return this.y;
        case ka.Z:
          return this.z
      }
      throw new Aa("Invalid ordinate index: " + t)
    },
    ka.prototype.equals3D = function (t) {
      return this.x === t.x && this.y === t.y && (this.z === t.z || Da.isNaN(this.z)) && Da.isNaN(t.z)
    },
    ka.prototype.equals = function (t) {
      return t instanceof ka && this.equals2D(t)
    },
    ka.prototype.equalInZ = function (t, e) {
      return Ta.equalsWithTolerance(this.z, t.z, e)
    },
    ka.prototype.compareTo = function (t) {
      var e = t;
      return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0
    },
    ka.prototype.clone = function () {},
    ka.prototype.copy = function () {
      return new ka(this)
    },
    ka.prototype.toString = function () {
      return "(" + this.x + ", " + this.y + ", " + this.z + ")"
    },
    ka.prototype.distance3D = function (t) {
      var e = this.x - t.x,
        n = this.y - t.y,
        r = this.z - t.z;
      return Math.sqrt(e * e + n * n + r * r)
    },
    ka.prototype.distance = function (t) {
      var e = this.x - t.x,
        n = this.y - t.y;
      return Math.sqrt(e * e + n * n)
    },
    ka.prototype.hashCode = function () {
      var t = 17;
      return 37 * (t = 37 * t + ka.hashCode(this.x)) + ka.hashCode(this.y)
    },
    ka.prototype.setCoordinate = function (t) {
      this.x = t.x,
        this.y = t.y,
        this.z = t.z
    },
    ka.prototype.interfaces_ = function () {
      return [qa, Ga, hi]
    },
    ka.prototype.getClass = function () {
      return ka
    },
    ka.hashCode = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = Da.doubleToLongBits(t);
        return Math.trunc((e ^ e) >>> 32)
      }
    },
    za.DimensionalComparator.get = function () {
      return ja
    },
    za.serialVersionUID.get = function () {
      return 0x5cbf2c235c7e5800
    },
    za.NULL_ORDINATE.get = function () {
      return Da.NaN
    },
    za.X.get = function () {
      return 0
    },
    za.Y.get = function () {
      return 1
    },
    za.Z.get = function () {
      return 2
    },
    Object.defineProperties(ka, za);
  var ja = function (t) {
    if (this._dimensionsToTest = 2,
      0 === arguments.length)
    ;
    else if (1 === arguments.length) {
      var e = t;
      if (2 !== e && 3 !== e)
        throw new Aa("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e
    }
  };
  ja.prototype.compare = function (t, e) {
      var n = t,
        r = e,
        i = ja.compare(n.x, r.x);
      if (0 !== i)
        return i;
      var o = ja.compare(n.y, r.y);
      return 0 !== o ? o : this._dimensionsToTest <= 2 ? 0 : ja.compare(n.z, r.z)
    },
    ja.prototype.interfaces_ = function () {
      return [Ba]
    },
    ja.prototype.getClass = function () {
      return ja
    },
    ja.compare = function (t, e) {
      return t < e ? -1 : e < t ? 1 : Da.isNaN(t) ? Da.isNaN(e) ? 0 : -1 : Da.isNaN(e) ? 1 : 0
    };
  var Xa = function () {};
  Xa.prototype.create = function () {},
    Xa.prototype.interfaces_ = function () {
      return []
    },
    Xa.prototype.getClass = function () {
      return Xa
    };
  var Ua = function () {},
    Ya = {
      INTERIOR: {
        configurable: !0
      },
      BOUNDARY: {
        configurable: !0
      },
      EXTERIOR: {
        configurable: !0
      },
      NONE: {
        configurable: !0
      }
    };
  Ua.prototype.interfaces_ = function () {
      return []
    },
    Ua.prototype.getClass = function () {
      return Ua
    },
    Ua.toLocationSymbol = function (t) {
      switch (t) {
        case Ua.EXTERIOR:
          return "e";
        case Ua.BOUNDARY:
          return "b";
        case Ua.INTERIOR:
          return "i";
        case Ua.NONE:
          return "-"
      }
      throw new Aa("Unknown location value: " + t)
    },
    Ya.INTERIOR.get = function () {
      return 0
    },
    Ya.BOUNDARY.get = function () {
      return 1
    },
    Ya.EXTERIOR.get = function () {
      return 2
    },
    Ya.NONE.get = function () {
      return -1
    },
    Object.defineProperties(Ua, Ya);
  var Va = function (t, e) {
      return t.interfaces_ && -1 < t.interfaces_().indexOf(e)
    },
    Ha = function () {},
    Wa = {
      LOG_10: {
        configurable: !0
      }
    };
  Ha.prototype.interfaces_ = function () {
      return []
    },
    Ha.prototype.getClass = function () {
      return Ha
    },
    Ha.log10 = function (t) {
      var e = Math.log(t);
      return Da.isInfinite(e) ? e : Da.isNaN(e) ? e : e / Ha.LOG_10
    },
    Ha.min = function (t, e, n, r) {
      var i = t;
      return e < i && (i = e),
        n < i && (i = n),
        r < i && (i = r),
        i
    },
    Ha.clamp = function () {
      if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        return t < e ? e : n < t ? n : t
      }
      if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2];
        return r < i ? i : o < r ? o : r
      }
    },
    Ha.wrap = function (t, e) {
      return t < 0 ? e - -t % e : t % e
    },
    Ha.max = function () {
      if (3 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          r = t;
        return r < e && (r = e),
          r < n && (r = n),
          r
      }
      if (4 === arguments.length) {
        var i = arguments[0],
          o = arguments[1],
          s = arguments[2],
          a = arguments[3],
          u = i;
        return u < o && (u = o),
          u < s && (u = s),
          u < a && (u = a),
          u
      }
    },
    Ha.average = function (t, e) {
      return (t + e) / 2
    },
    Wa.LOG_10.get = function () {
      return Math.log(10)
    },
    Object.defineProperties(Ha, Wa);
  var Ja = function (t) {
    this.str = t
  };
  Ja.prototype.append = function (t) {
      this.str += t
    },
    Ja.prototype.setCharAt = function (t, e) {
      this.str = this.str.substr(0, t) + e + this.str.substr(t + 1)
    },
    Ja.prototype.toString = function (t) {
      return this.str
    };
  var Za = function (t) {
    this.value = t
  };
  Za.prototype.intValue = function () {
      return this.value
    },
    Za.prototype.compareTo = function (t) {
      return this.value < t ? -1 : this.value > t ? 1 : 0
    },
    Za.isNaN = function (t) {
      return Number.isNaN(t)
    };
  var Ka = function () {};
  Ka.isWhitespace = function (t) {
      return t <= 32 && 0 <= t || 127 === t
    },
    Ka.toUpperCase = function (t) {
      return t.toUpperCase()
    };
  var Qa = function t() {
      if (this._hi = 0,
        (this._lo = 0) === arguments.length)
        this.init(0);
      else if (1 === arguments.length) {
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          this.init(e)
        } else if (arguments[0] instanceof t) {
          var n = arguments[0];
          this.init(n)
        } else if ("string" == typeof arguments[0]) {
          var r = arguments[0];
          t.call(this, t.parse(r))
        }
      } else if (2 === arguments.length) {
        var i = arguments[0],
          o = arguments[1];
        this.init(i, o)
      }
    },
    $a = {
      PI: {
        configurable: !0
      },
      TWO_PI: {
        configurable: !0
      },
      PI_2: {
        configurable: !0
      },
      E: {
        configurable: !0
      },
      NaN: {
        configurable: !0
      },
      EPS: {
        configurable: !0
      },
      SPLIT: {
        configurable: !0
      },
      MAX_PRINT_DIGITS: {
        configurable: !0
      },
      TEN: {
        configurable: !0
      },
      ONE: {
        configurable: !0
      },
      SCI_NOT_EXPONENT_CHAR: {
        configurable: !0
      },
      SCI_NOT_ZERO: {
        configurable: !0
      }
    };
  Qa.prototype.le = function (t) {
      return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo
    },
    Qa.prototype.extractSignificantDigits = function (t, e) {
      var n = this.abs(),
        r = Qa.magnitude(n._hi),
        i = Qa.TEN.pow(r);
      (n = n.divide(i)).gt(Qa.TEN) ? (n = n.divide(Qa.TEN),
        r += 1) : n.lt(Qa.ONE) && (n = n.multiply(Qa.TEN),
        r -= 1);
      for (var o = r + 1, s = new Ja, a = Qa.MAX_PRINT_DIGITS - 1, u = 0; u <= a; u++) {
        t && u === o && s.append(".");
        var c = Math.trunc(n._hi);
        if (c < 0)
          break;
        var h = !1,
          l = 0;
        l = 9 < c ? (h = !0,
            "9") : "0" + c,
          s.append(l),
          n = n.subtract(Qa.valueOf(c)).multiply(Qa.TEN),
          h && n.selfAdd(Qa.TEN);
        var p = !0,
          f = Qa.magnitude(n._hi);
        if (f < 0 && Math.abs(f) >= a - u && (p = !1),
          !p)
          break
      }
      return e[0] = r,
        s.toString()
    },
    Qa.prototype.sqr = function () {
      return this.multiply(this)
    },
    Qa.prototype.doubleValue = function () {
      return this._hi + this._lo
    },
    Qa.prototype.subtract = function () {
      if (arguments[0] instanceof Qa) {
        var t = arguments[0];
        return this.add(t.negate())
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return this.add(-e)
      }
    },
    Qa.prototype.equals = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this._hi === t._hi && this._lo === t._lo
      }
    },
    Qa.prototype.isZero = function () {
      return 0 === this._hi && 0 === this._lo
    },
    Qa.prototype.selfSubtract = function () {
      if (arguments[0] instanceof Qa) {
        var t = arguments[0];
        return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo)
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return this.isNaN() ? this : this.selfAdd(-e, 0)
      }
    },
    Qa.prototype.getSpecialNumberString = function () {
      return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null
    },
    Qa.prototype.min = function (t) {
      return this.le(t) ? this : t
    },
    Qa.prototype.selfDivide = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Qa) {
          var t = arguments[0];
          return this.selfDivide(t._hi, t._lo)
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.selfDivide(e, 0)
        }
      } else if (2 === arguments.length) {
        var n, r, i, o, s = arguments[0],
          a = arguments[1],
          u = null,
          c = null,
          h = null,
          l = null;
        return i = this._hi / s,
          l = (u = (h = Qa.SPLIT * i) - (u = h - i)) * (c = (l = Qa.SPLIT * s) - (c = l - s)) - (o = i * s) + u * (r = s - c) + (n = i - u) * c + n * r,
          l = i + (h = (this._hi - o - l + this._lo - i * a) / s),
          this._hi = l,
          this._lo = i - l + h,
          this
      }
    },
    Qa.prototype.dump = function () {
      return "DD<" + this._hi + ", " + this._lo + ">"
    },
    Qa.prototype.divide = function () {
      if (arguments[0] instanceof Qa) {
        var t, e, n, r, i = arguments[0],
          o = null,
          s = null,
          a = null,
          u = null;
        return t = (n = this._hi / i._hi) - (o = (a = Qa.SPLIT * n) - (o = a - n)),
          u = o * (s = (u = Qa.SPLIT * i._hi) - (s = u - i._hi)) - (r = n * i._hi) + o * (e = i._hi - s) + t * s + t * e,
          a = (this._hi - r - u + this._lo - n * i._lo) / i._hi,
          new Qa(u = n + a, n - u + a)
      }
      if ("number" == typeof arguments[0]) {
        var c = arguments[0];
        return Da.isNaN(c) ? Qa.createNaN() : Qa.copy(this).selfDivide(c, 0)
      }
    },
    Qa.prototype.ge = function (t) {
      return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo
    },
    Qa.prototype.pow = function (t) {
      if (0 === t)
        return Qa.valueOf(1);
      var e = new Qa(this),
        n = Qa.valueOf(1),
        r = Math.abs(t);
      if (1 < r)
        for (; 0 < r;)
          r % 2 == 1 && n.selfMultiply(e),
          0 < (r /= 2) && (e = e.sqr());
      else
        n = e;
      return t < 0 ? n.reciprocal() : n
    },
    Qa.prototype.ceil = function () {
      if (this.isNaN())
        return Qa.NaN;
      var t = Math.ceil(this._hi),
        e = 0;
      return t === this._hi && (e = Math.ceil(this._lo)),
        new Qa(t, e)
    },
    Qa.prototype.compareTo = function (t) {
      var e = t;
      return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0
    },
    Qa.prototype.rint = function () {
      return this.isNaN() ? this : this.add(.5).floor()
    },
    Qa.prototype.setValue = function () {
      if (arguments[0] instanceof Qa) {
        var t = arguments[0];
        return this.init(t),
          this
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return this.init(e),
          this
      }
    },
    Qa.prototype.max = function (t) {
      return this.ge(t) ? this : t
    },
    Qa.prototype.sqrt = function () {
      if (this.isZero())
        return Qa.valueOf(0);
      if (this.isNegative())
        return Qa.NaN;
      var t = 1 / Math.sqrt(this._hi),
        e = this._hi * t,
        n = Qa.valueOf(e),
        r = this.subtract(n.sqr())._hi * (.5 * t);
      return n.add(r)
    },
    Qa.prototype.selfAdd = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Qa) {
          var t = arguments[0];
          return this.selfAdd(t._hi, t._lo)
        }
        if ("number" == typeof arguments[0]) {
          var e, n, r, i, o, s = arguments[0],
            a = null;
          return a = (r = this._hi + s) - (i = r - this._hi),
            n = (o = (a = s - i + (this._hi - a)) + this._lo) + (r - (e = r + o)),
            this._hi = e + n,
            this._lo = n + (e - this._hi),
            this
        }
      } else if (2 === arguments.length) {
        var u, c, h, l, p = arguments[0],
          f = arguments[1],
          g = null,
          d = null,
          y = null;
        h = this._hi + p,
          c = this._lo + f,
          d = h - (y = h - this._hi),
          g = c - (l = c - this._lo);
        var _ = (u = h + (y = (d = p - y + (this._hi - d)) + c)) + (y = (g = f - l + (this._lo - g)) + (y + (h - u))),
          m = y + (u - _);
        return this._hi = _,
          this._lo = m,
          this
      }
    },
    Qa.prototype.selfMultiply = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Qa) {
          var t = arguments[0];
          return this.selfMultiply(t._hi, t._lo)
        }
        if ("number" == typeof arguments[0]) {
          var e = arguments[0];
          return this.selfMultiply(e, 0)
        }
      } else if (2 === arguments.length) {
        var n, r, i = arguments[0],
          o = arguments[1],
          s = null,
          a = null,
          u = null,
          c = null;
        s = (u = Qa.SPLIT * this._hi) - this._hi,
          c = Qa.SPLIT * i,
          s = u - s,
          n = this._hi - s,
          a = c - i;
        var h = (u = this._hi * i) + (c = s * (a = c - a) - u + s * (r = i - a) + n * a + n * r + (this._hi * o + this._lo * i)),
          l = c + (s = u - h);
        return this._hi = h,
          this._lo = l,
          this
      }
    },
    Qa.prototype.selfSqr = function () {
      return this.selfMultiply(this)
    },
    Qa.prototype.floor = function () {
      if (this.isNaN())
        return Qa.NaN;
      var t = Math.floor(this._hi),
        e = 0;
      return t === this._hi && (e = Math.floor(this._lo)),
        new Qa(t, e)
    },
    Qa.prototype.negate = function () {
      return this.isNaN() ? this : new Qa(-this._hi, -this._lo)
    },
    Qa.prototype.clone = function () {},
    Qa.prototype.multiply = function () {
      if (arguments[0] instanceof Qa) {
        var t = arguments[0];
        return t.isNaN() ? Qa.createNaN() : Qa.copy(this).selfMultiply(t)
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return Da.isNaN(e) ? Qa.createNaN() : Qa.copy(this).selfMultiply(e, 0)
      }
    },
    Qa.prototype.isNaN = function () {
      return Da.isNaN(this._hi)
    },
    Qa.prototype.intValue = function () {
      return Math.trunc(this._hi)
    },
    Qa.prototype.toString = function () {
      var t = Qa.magnitude(this._hi);
      return -3 <= t && t <= 20 ? this.toStandardNotation() : this.toSciNotation()
    },
    Qa.prototype.toStandardNotation = function () {
      var t = this.getSpecialNumberString();
      if (null !== t)
        return t;
      var e = new Array(1).fill(null),
        n = this.extractSignificantDigits(!0, e),
        r = e[0] + 1,
        i = n;
      if ("." === n.charAt(0))
        i = "0" + n;
      else if (r < 0)
        i = "0." + Qa.stringOfChar("0", -r) + n;
      else if (-1 === n.indexOf(".")) {
        var o = r - n.length;
        i = n + Qa.stringOfChar("0", o) + ".0"
      }
      return this.isNegative() ? "-" + i : i
    },
    Qa.prototype.reciprocal = function () {
      var t, e, n, r, i = null,
        o = null,
        s = null,
        a = null;
      t = (n = 1 / this._hi) - (i = (s = Qa.SPLIT * n) - (i = s - n)),
        o = (a = Qa.SPLIT * this._hi) - this._hi;
      var u = n + (s = (1 - (r = n * this._hi) - (a = i * (o = a - o) - r + i * (e = this._hi - o) + t * o + t * e) - n * this._lo) / this._hi);
      return new Qa(u, n - u + s)
    },
    Qa.prototype.toSciNotation = function () {
      if (this.isZero())
        return Qa.SCI_NOT_ZERO;
      var t = this.getSpecialNumberString();
      if (null !== t)
        return t;
      var e = new Array(1).fill(null),
        n = this.extractSignificantDigits(!1, e),
        r = Qa.SCI_NOT_EXPONENT_CHAR + e[0];
      if ("0" === n.charAt(0))
        throw new Error("Found leading zero: " + n);
      var i = "";
      1 < n.length && (i = n.substring(1));
      var o = n.charAt(0) + "." + i;
      return this.isNegative() ? "-" + o + r : o + r
    },
    Qa.prototype.abs = function () {
      return this.isNaN() ? Qa.NaN : this.isNegative() ? this.negate() : new Qa(this)
    },
    Qa.prototype.isPositive = function () {
      return (0 < this._hi || 0 === this._hi) && 0 < this._lo
    },
    Qa.prototype.lt = function (t) {
      return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo
    },
    Qa.prototype.add = function () {
      if (arguments[0] instanceof Qa) {
        var t = arguments[0];
        return Qa.copy(this).selfAdd(t)
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return Qa.copy(this).selfAdd(e)
      }
    },
    Qa.prototype.init = function () {
      if (1 === arguments.length) {
        if ("number" == typeof arguments[0]) {
          var t = arguments[0];
          this._hi = t,
            this._lo = 0
        } else if (arguments[0] instanceof Qa) {
          var e = arguments[0];
          this._hi = e._hi,
            this._lo = e._lo
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        this._hi = n,
          this._lo = r
      }
    },
    Qa.prototype.gt = function (t) {
      return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo
    },
    Qa.prototype.isNegative = function () {
      return (this._hi < 0 || 0 === this._hi) && this._lo < 0
    },
    Qa.prototype.trunc = function () {
      return this.isNaN() ? Qa.NaN : this.isPositive() ? this.floor() : this.ceil()
    },
    Qa.prototype.signum = function () {
      return 0 < this._hi ? 1 : this._hi < 0 ? -1 : 0 < this._lo ? 1 : this._lo < 0 ? -1 : 0
    },
    Qa.prototype.interfaces_ = function () {
      return [hi, qa, Ga]
    },
    Qa.prototype.getClass = function () {
      return Qa
    },
    Qa.sqr = function (t) {
      return Qa.valueOf(t).selfMultiply(t)
    },
    Qa.valueOf = function () {
      if ("string" == typeof arguments[0]) {
        var t = arguments[0];
        return Qa.parse(t)
      }
      if ("number" == typeof arguments[0]) {
        var e = arguments[0];
        return new Qa(e)
      }
    },
    Qa.sqrt = function (t) {
      return Qa.valueOf(t).sqrt()
    },
    Qa.parse = function (t) {
      for (var e = 0, n = t.length; Ka.isWhitespace(t.charAt(e));)
        e++;
      var r = !1;
      if (e < n) {
        var i = t.charAt(e);
        "-" !== i && "+" !== i || (e++,
          "-" === i && (r = !0))
      }
      for (var o = new Qa, s = 0, a = 0, u = 0; !(n <= e);) {
        var c = t.charAt(e);
        if (e++,
          Ka.isDigit(c)) {
          var h = c - "0";
          o.selfMultiply(Qa.TEN),
            o.selfAdd(h),
            s++
        } else {
          if ("." !== c) {
            if ("e" !== c && "E" !== c)
              throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
            var l = t.substring(e);
            try {
              u = Za.parseInt(l)
            } catch (e) {
              throw e instanceof Error ? new Error("Invalid exponent " + l + " in string " + t) : e
            }
            break
          }
          a = s
        }
      }
      var p = o,
        f = s - a - u;
      if (0 === f)
        p = o;
      else if (0 < f) {
        var g = Qa.TEN.pow(f);
        p = o.divide(g)
      } else if (f < 0) {
        var d = Qa.TEN.pow(-f);
        p = o.multiply(d)
      }
      return r ? p.negate() : p
    },
    Qa.createNaN = function () {
      return new Qa(Da.NaN, Da.NaN)
    },
    Qa.copy = function (t) {
      return new Qa(t)
    },
    Qa.magnitude = function (t) {
      var e = Math.abs(t),
        n = Math.log(e) / Math.log(10),
        r = Math.trunc(Math.floor(n));
      return 10 * Math.pow(10, r) <= e && (r += 1),
        r
    },
    Qa.stringOfChar = function (t, e) {
      for (var n = new Ja, r = 0; r < e; r++)
        n.append(t);
      return n.toString()
    },
    $a.PI.get = function () {
      return new Qa(3.141592653589793, 12246467991473532e-32)
    },
    $a.TWO_PI.get = function () {
      return new Qa(6.283185307179586, 24492935982947064e-32)
    },
    $a.PI_2.get = function () {
      return new Qa(1.5707963267948966, 6123233995736766e-32)
    },
    $a.E.get = function () {
      return new Qa(2.718281828459045, 14456468917292502e-32)
    },
    $a.NaN.get = function () {
      return new Qa(Da.NaN, Da.NaN)
    },
    $a.EPS.get = function () {
      return 123259516440783e-46
    },
    $a.SPLIT.get = function () {
      return 134217729
    },
    $a.MAX_PRINT_DIGITS.get = function () {
      return 32
    },
    $a.TEN.get = function () {
      return Qa.valueOf(10)
    },
    $a.ONE.get = function () {
      return Qa.valueOf(1)
    },
    $a.SCI_NOT_EXPONENT_CHAR.get = function () {
      return "E"
    },
    $a.SCI_NOT_ZERO.get = function () {
      return "0.0E0"
    },
    Object.defineProperties(Qa, $a);
  var tu = function () {},
    eu = {
      DP_SAFE_EPSILON: {
        configurable: !0
      }
    };
  tu.prototype.interfaces_ = function () {
      return []
    },
    tu.prototype.getClass = function () {
      return tu
    },
    tu.orientationIndex = function (t, e, n) {
      var r = tu.orientationIndexFilter(t, e, n);
      if (r <= 1)
        return r;
      var i = Qa.valueOf(e.x).selfAdd(-t.x),
        o = Qa.valueOf(e.y).selfAdd(-t.y),
        s = Qa.valueOf(n.x).selfAdd(-e.x),
        a = Qa.valueOf(n.y).selfAdd(-e.y);
      return i.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum()
    },
    tu.signOfDet2x2 = function (t, e, n, r) {
      return t.multiply(r).selfSubtract(e.multiply(n)).signum()
    },
    tu.intersection = function (t, e, n, r) {
      var i = Qa.valueOf(r.y).selfSubtract(n.y).selfMultiply(Qa.valueOf(e.x).selfSubtract(t.x)),
        o = Qa.valueOf(r.x).selfSubtract(n.x).selfMultiply(Qa.valueOf(e.y).selfSubtract(t.y)),
        s = i.subtract(o),
        a = Qa.valueOf(r.x).selfSubtract(n.x).selfMultiply(Qa.valueOf(t.y).selfSubtract(n.y)),
        u = Qa.valueOf(r.y).selfSubtract(n.y).selfMultiply(Qa.valueOf(t.x).selfSubtract(n.x)),
        c = a.subtract(u).selfDivide(s).doubleValue(),
        h = Qa.valueOf(t.x).selfAdd(Qa.valueOf(e.x).selfSubtract(t.x).selfMultiply(c)).doubleValue(),
        l = Qa.valueOf(e.x).selfSubtract(t.x).selfMultiply(Qa.valueOf(t.y).selfSubtract(n.y)),
        p = Qa.valueOf(e.y).selfSubtract(t.y).selfMultiply(Qa.valueOf(t.x).selfSubtract(n.x)),
        f = l.subtract(p).selfDivide(s).doubleValue(),
        g = Qa.valueOf(n.y).selfAdd(Qa.valueOf(r.y).selfSubtract(n.y).selfMultiply(f)).doubleValue();
      return new ka(h, g)
    },
    tu.orientationIndexFilter = function (t, e, n) {
      var r = null,
        i = (t.x - n.x) * (e.y - n.y),
        o = (t.y - n.y) * (e.x - n.x),
        s = i - o;
      if (0 < i) {
        if (o <= 0)
          return tu.signum(s);
        r = i + o
      } else {
        if (!(i < 0))
          return tu.signum(s);
        if (0 <= o)
          return tu.signum(s);
        r = -i - o
      }
      var a = tu.DP_SAFE_EPSILON * r;
      return a <= s || a <= -s ? tu.signum(s) : 2
    },
    tu.signum = function (t) {
      return 0 < t ? 1 : t < 0 ? -1 : 0
    },
    eu.DP_SAFE_EPSILON.get = function () {
      return 1e-15
    },
    Object.defineProperties(tu, eu);
  var nu = function () {},
    ru = {
      X: {
        configurable: !0
      },
      Y: {
        configurable: !0
      },
      Z: {
        configurable: !0
      },
      M: {
        configurable: !0
      }
    };
  ru.X.get = function () {
      return 0
    },
    ru.Y.get = function () {
      return 1
    },
    ru.Z.get = function () {
      return 2
    },
    ru.M.get = function () {
      return 3
    },
    nu.prototype.setOrdinate = function (t, e, n) {},
    nu.prototype.size = function () {},
    nu.prototype.getOrdinate = function (t, e) {},
    nu.prototype.getCoordinate = function () {},
    nu.prototype.getCoordinateCopy = function (t) {},
    nu.prototype.getDimension = function () {},
    nu.prototype.getX = function (t) {},
    nu.prototype.clone = function () {},
    nu.prototype.expandEnvelope = function (t) {},
    nu.prototype.copy = function () {},
    nu.prototype.getY = function (t) {},
    nu.prototype.toCoordinateArray = function () {},
    nu.prototype.interfaces_ = function () {
      return [Ga]
    },
    nu.prototype.getClass = function () {
      return nu
    },
    Object.defineProperties(nu, ru);
  var iu = function () {},
    ou = function (t) {
      function e() {
        t.call(this, "Projective point not representable on the Cartesian plane.")
      }
      return t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.interfaces_ = function () {
          return []
        },
        e.prototype.getClass = function () {
          return e
        },
        e
    }(iu),
    su = function () {};
  su.arraycopy = function (t, e, n, r, i) {
      for (var o = 0, s = e; s < e + i; s++)
        n[r + o] = t[s],
        o++
    },
    su.getProperty = function (t) {
      return {
        "line.separator": "\n"
      } [t]
    };
  var au = function t() {
    if (this.x = null,
      this.y = null,
      this.w = null,
      0 === arguments.length)
      this.x = 0,
      this.y = 0,
      this.w = 1;
    else if (1 === arguments.length) {
      var e = arguments[0];
      this.x = e.x,
        this.y = e.y,
        this.w = 1
    } else if (2 === arguments.length) {
      if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var n = arguments[0],
          r = arguments[1];
        this.x = n,
          this.y = r,
          this.w = 1
      } else if (arguments[0] instanceof t && arguments[1] instanceof t) {
        var i = arguments[0],
          o = arguments[1];
        this.x = i.y * o.w - o.y * i.w,
          this.y = o.x * i.w - i.x * o.w,
          this.w = i.x * o.y - o.x * i.y
      } else if (arguments[0] instanceof ka && arguments[1] instanceof ka) {
        var s = arguments[0],
          a = arguments[1];
        this.x = s.y - a.y,
          this.y = a.x - s.x,
          this.w = s.x * a.y - a.x * s.y
      }
    } else if (3 === arguments.length) {
      var u = arguments[0],
        c = arguments[1],
        h = arguments[2];
      this.x = u,
        this.y = c,
        this.w = h
    } else if (4 === arguments.length) {
      var l = arguments[0],
        p = arguments[1],
        f = arguments[2],
        g = arguments[3],
        d = l.y - p.y,
        y = p.x - l.x,
        _ = l.x * p.y - p.x * l.y,
        m = f.y - g.y,
        v = g.x - f.x,
        x = f.x * g.y - g.x * f.y;
      this.x = y * x - v * _,
        this.y = m * _ - d * x,
        this.w = d * v - m * y
    }
  };
  au.prototype.getY = function () {
      var t = this.y / this.w;
      if (Da.isNaN(t) || Da.isInfinite(t))
        throw new ou;
      return t
    },
    au.prototype.getX = function () {
      var t = this.x / this.w;
      if (Da.isNaN(t) || Da.isInfinite(t))
        throw new ou;
      return t
    },
    au.prototype.getCoordinate = function () {
      var t = new ka;
      return t.x = this.getX(),
        t.y = this.getY(),
        t
    },
    au.prototype.interfaces_ = function () {
      return []
    },
    au.prototype.getClass = function () {
      return au
    },
    au.intersection = function (t, e, n, r) {
      var i = t.y - e.y,
        o = e.x - t.x,
        s = t.x * e.y - e.x * t.y,
        a = n.y - r.y,
        u = r.x - n.x,
        c = n.x * r.y - r.x * n.y,
        h = i * u - a * o,
        l = (o * c - u * s) / h,
        p = (a * s - i * c) / h;
      if (Da.isNaN(l) || Da.isInfinite(l) || Da.isNaN(p) || Da.isInfinite(p))
        throw new ou;
      return new ka(l, p)
    };
  var uu = function t() {
      if (this._minx = null,
        this._maxx = null,
        this._miny = null,
        this._maxy = null,
        0 === arguments.length)
        this.init();
      else if (1 === arguments.length) {
        if (arguments[0] instanceof ka) {
          var e = arguments[0];
          this.init(e.x, e.x, e.y, e.y)
        } else if (arguments[0] instanceof t) {
          var n = arguments[0];
          this.init(n)
        }
      } else if (2 === arguments.length) {
        var r = arguments[0],
          i = arguments[1];
        this.init(r.x, i.x, r.y, i.y)
      } else if (4 === arguments.length) {
        var o = arguments[0],
          s = arguments[1],
          a = arguments[2],
          u = arguments[3];
        this.init(o, s, a, u)
      }
    },
    cu = {
      serialVersionUID: {
        configurable: !0
      }
    };
  uu.prototype.getArea = function () {
      return this.getWidth() * this.getHeight()
    },
    uu.prototype.equals = function (t) {
      if (!(t instanceof uu))
        return !1;
      var e = t;
      return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY()
    },
    uu.prototype.intersection = function (t) {
      if (this.isNull() || t.isNull() || !this.intersects(t))
        return new uu;
      var e = this._minx > t._minx ? this._minx : t._minx,
        n = this._miny > t._miny ? this._miny : t._miny,
        r = this._maxx < t._maxx ? this._maxx : t._maxx,
        i = this._maxy < t._maxy ? this._maxy : t._maxy;
      return new uu(e, r, n, i)
    },
    uu.prototype.isNull = function () {
      return this._maxx < this._minx
    },
    uu.prototype.getMaxX = function () {
      return this._maxx
    },
    uu.prototype.covers = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof ka) {
          var t = arguments[0];
          return this.covers(t.x, t.y)
        }
        if (arguments[0] instanceof uu) {
          var e = arguments[0];
          return !this.isNull() && !e.isNull() && e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        return !this.isNull() && n >= this._minx && n <= this._maxx && r >= this._miny && r <= this._maxy
      }
    },
    uu.prototype.intersects = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof uu) {
          var t = arguments[0];
          return !this.isNull() && !t.isNull() && !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny)
        }
        if (arguments[0] instanceof ka) {
          var e = arguments[0];
          return this.intersects(e.x, e.y)
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        return !this.isNull() && !(n > this._maxx || n < this._minx || r > this._maxy || r < this._miny)
      }
    },
    uu.prototype.getMinY = function () {
      return this._miny
    },
    uu.prototype.getMinX = function () {
      return this._minx
    },
    uu.prototype.expandToInclude = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof ka) {
          var t = arguments[0];
          this.expandToInclude(t.x, t.y)
        } else if (arguments[0] instanceof uu) {
          var e = arguments[0];
          if (e.isNull())
            return null;
          this.isNull() ? (this._minx = e.getMinX(),
            this._maxx = e.getMaxX(),
            this._miny = e.getMinY(),
            this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx),
            e._maxx > this._maxx && (this._maxx = e._maxx),
            e._miny < this._miny && (this._miny = e._miny),
            e._maxy > this._maxy && (this._maxy = e._maxy))
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        this.isNull() ? (this._minx = n,
          this._maxx = n,
          this._miny = r,
          this._maxy = r) : (n < this._minx && (this._minx = n),
          n > this._maxx && (this._maxx = n),
          r < this._miny && (this._miny = r),
          r > this._maxy && (this._maxy = r))
      }
    },
    uu.prototype.minExtent = function () {
      if (this.isNull())
        return 0;
      var t = this.getWidth(),
        e = this.getHeight();
      return t < e ? t : e
    },
    uu.prototype.getWidth = function () {
      return this.isNull() ? 0 : this._maxx - this._minx
    },
    uu.prototype.compareTo = function (t) {
      var e = t;
      return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0
    },
    uu.prototype.translate = function (t, e) {
      if (this.isNull())
        return null;
      this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e)
    },
    uu.prototype.toString = function () {
      return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]"
    },
    uu.prototype.setToNull = function () {
      this._minx = 0,
        this._maxx = -1,
        this._miny = 0,
        this._maxy = -1
    },
    uu.prototype.getHeight = function () {
      return this.isNull() ? 0 : this._maxy - this._miny
    },
    uu.prototype.maxExtent = function () {
      if (this.isNull())
        return 0;
      var t = this.getWidth(),
        e = this.getHeight();
      return e < t ? t : e
    },
    uu.prototype.expandBy = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.expandBy(t, t)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        if (this.isNull())
          return null;
        this._minx -= e,
          this._maxx += e,
          this._miny -= n,
          this._maxy += n,
          (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull()
      }
    },
    uu.prototype.contains = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof uu) {
          var t = arguments[0];
          return this.covers(t)
        }
        if (arguments[0] instanceof ka) {
          var e = arguments[0];
          return this.covers(e)
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        return this.covers(n, r)
      }
    },
    uu.prototype.centre = function () {
      return this.isNull() ? null : new ka((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2)
    },
    uu.prototype.init = function () {
      if (0 === arguments.length)
        this.setToNull();
      else if (1 === arguments.length) {
        if (arguments[0] instanceof ka) {
          var t = arguments[0];
          this.init(t.x, t.x, t.y, t.y)
        } else if (arguments[0] instanceof uu) {
          var e = arguments[0];
          this._minx = e._minx,
            this._maxx = e._maxx,
            this._miny = e._miny,
            this._maxy = e._maxy
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        this.init(n.x, r.x, n.y, r.y)
      } else if (4 === arguments.length) {
        var i = arguments[0],
          o = arguments[1],
          s = arguments[2],
          a = arguments[3];
        this._maxx = i < o ? (this._minx = i,
            o) : (this._minx = o,
            i),
          this._maxy = s < a ? (this._miny = s,
            a) : (this._miny = a,
            s)
      }
    },
    uu.prototype.getMaxY = function () {
      return this._maxy
    },
    uu.prototype.distance = function (t) {
      if (this.intersects(t))
        return 0;
      var e = 0;
      this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
      var n = 0;
      return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy),
        0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n)
    },
    uu.prototype.hashCode = function () {
      var t = 17;
      return 37 * (t = 37 * (t = 37 * (t = 37 * t + ka.hashCode(this._minx)) + ka.hashCode(this._maxx)) + ka.hashCode(this._miny)) + ka.hashCode(this._maxy)
    },
    uu.prototype.interfaces_ = function () {
      return [qa, hi]
    },
    uu.prototype.getClass = function () {
      return uu
    },
    uu.intersects = function () {
      if (3 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y)
      }
      if (4 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2],
          s = arguments[3],
          a = Math.min(o.x, s.x),
          u = Math.max(o.x, s.x),
          c = Math.min(r.x, i.x),
          h = Math.max(r.x, i.x);
        return !(u < c || h < a || (a = Math.min(o.y, s.y),
          u = Math.max(o.y, s.y),
          c = Math.min(r.y, i.y),
          h = Math.max(r.y, i.y),
          u < c || h < a))
      }
    },
    cu.serialVersionUID.get = function () {
      return 0x51845cd552189800
    },
    Object.defineProperties(uu, cu);
  var hu = {
      typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
      emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
      spaces: /\s+/,
      parenComma: /\)\s*,\s*\(/,
      doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
      trimParens: /^\s*\(?(.*?)\)?\s*$/
    },
    lu = function (t) {
      this.geometryFactory = t || new Ac
    };
  lu.prototype.read = function (t) {
      var e, n, r;
      t = t.replace(/[\n\r]/g, " ");
      var i = hu.typeStr.exec(t);
      if (-1 !== t.search("EMPTY") && ((i = hu.emptyTypeStr.exec(t))[2] = void 0),
        i && (n = i[1].toLowerCase(),
          r = i[2],
          fu[n] && (e = fu[n].apply(this, [r]))),
        void 0 === e)
        throw new Error("Could not parse WKT " + t);
      return e
    },
    lu.prototype.write = function (t) {
      return this.extractGeometry(t)
    },
    lu.prototype.extractGeometry = function (t) {
      var e = t.getGeometryType().toLowerCase();
      if (!pu[e])
        return null;
      var n = e.toUpperCase();
      return t.isEmpty() ? n + " EMPTY" : n + "(" + pu[e].apply(this, [t]) + ")"
    };
  var pu = {
      coordinate: function (t) {
        return t.x + " " + t.y
      },
      point: function (t) {
        return pu.coordinate.call(this, t._coordinates._coordinates[0])
      },
      multipoint: function (t) {
        for (var e = [], n = 0, r = t._geometries.length; n < r; ++n)
          e.push("(" + pu.point.apply(this, [t._geometries[n]]) + ")");
        return e.join(",")
      },
      linestring: function (t) {
        for (var e = [], n = 0, r = t._points._coordinates.length; n < r; ++n)
          e.push(pu.coordinate.apply(this, [t._points._coordinates[n]]));
        return e.join(",")
      },
      linearring: function (t) {
        for (var e = [], n = 0, r = t._points._coordinates.length; n < r; ++n)
          e.push(pu.coordinate.apply(this, [t._points._coordinates[n]]));
        return e.join(",")
      },
      multilinestring: function (t) {
        for (var e = [], n = 0, r = t._geometries.length; n < r; ++n)
          e.push("(" + pu.linestring.apply(this, [t._geometries[n]]) + ")");
        return e.join(",")
      },
      polygon: function (t) {
        var e = [];
        e.push("(" + pu.linestring.apply(this, [t._shell]) + ")");
        for (var n = 0, r = t._holes.length; n < r; ++n)
          e.push("(" + pu.linestring.apply(this, [t._holes[n]]) + ")");
        return e.join(",")
      },
      multipolygon: function (t) {
        for (var e = [], n = 0, r = t._geometries.length; n < r; ++n)
          e.push("(" + pu.polygon.apply(this, [t._geometries[n]]) + ")");
        return e.join(",")
      },
      geometrycollection: function (t) {
        for (var e = [], n = 0, r = t._geometries.length; n < r; ++n)
          e.push(this.extractGeometry(t._geometries[n]));
        return e.join(",")
      }
    },
    fu = {
      point: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createPoint();
        var e = t.trim().split(hu.spaces);
        return this.geometryFactory.createPoint(new ka(Number.parseFloat(e[0]), Number.parseFloat(e[1])))
      },
      multipoint: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createMultiPoint();
        for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i)
          e = n[i].replace(hu.trimParens, "$1"),
          r.push(fu.point.apply(this, [e]));
        return this.geometryFactory.createMultiPoint(r)
      },
      linestring: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createLineString();
        for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i)
          e = n[i].trim().split(hu.spaces),
          r.push(new ka(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
        return this.geometryFactory.createLineString(r)
      },
      linearring: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createLinearRing();
        for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i)
          e = n[i].trim().split(hu.spaces),
          r.push(new ka(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
        return this.geometryFactory.createLinearRing(r)
      },
      multilinestring: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createMultiLineString();
        for (var e, n = t.trim().split(hu.parenComma), r = [], i = 0, o = n.length; i < o; ++i)
          e = n[i].replace(hu.trimParens, "$1"),
          r.push(fu.linestring.apply(this, [e]));
        return this.geometryFactory.createMultiLineString(r)
      },
      polygon: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createPolygon();
        for (var e, n, r, i, o = t.trim().split(hu.parenComma), s = [], a = 0, u = o.length; a < u; ++a)
          e = o[a].replace(hu.trimParens, "$1"),
          n = fu.linestring.apply(this, [e]),
          r = this.geometryFactory.createLinearRing(n._points),
          0 === a ? i = r : s.push(r);
        return this.geometryFactory.createPolygon(i, s)
      },
      multipolygon: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createMultiPolygon();
        for (var e, n = t.trim().split(hu.doubleParenComma), r = [], i = 0, o = n.length; i < o; ++i)
          e = n[i].replace(hu.trimParens, "$1"),
          r.push(fu.polygon.apply(this, [e]));
        return this.geometryFactory.createMultiPolygon(r)
      },
      geometrycollection: function (t) {
        if (void 0 === t)
          return this.geometryFactory.createGeometryCollection();
        for (var e = (t = t.replace(/,\s*([A-Za-z])/g, "|$1")).trim().split("|"), n = [], r = 0, i = e.length; r < i; ++r)
          n.push(this.read(e[r]));
        return this.geometryFactory.createGeometryCollection(n)
      }
    },
    gu = function (t) {
      this.parser = new lu(t)
    };
  gu.prototype.write = function (t) {
      return this.parser.write(t)
    },
    gu.toLineString = function (t, e) {
      if (2 !== arguments.length)
        throw new Error("Not implemented");
      return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )"
    };
  var du = function (e) {
      function t(t) {
        e.call(this, t),
          this.name = "RuntimeException",
          this.message = t,
          this.stack = (new e).stack
      }
      return e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)).constructor = t
    }(Error),
    yu = function (e) {
      function t() {
        if (e.call(this),
          0 === arguments.length)
          e.call(this);
        else if (1 === arguments.length) {
          var t = arguments[0];
          e.call(this, t)
        }
      }
      return e && (t.__proto__ = e),
        ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(du),
    _u = function () {};
  _u.prototype.interfaces_ = function () {
      return []
    },
    _u.prototype.getClass = function () {
      return _u
    },
    _u.shouldNeverReachHere = function () {
      if (0 === arguments.length)
        _u.shouldNeverReachHere(null);
      else if (1 === arguments.length) {
        var t = arguments[0];
        throw new yu("Should never reach here" + (null !== t ? ": " + t : ""))
      }
    },
    _u.isTrue = function () {
      var t, e;
      if (1 === arguments.length)
        t = arguments[0],
        _u.isTrue(t, null);
      else if (2 === arguments.length && (t = arguments[0],
          e = arguments[1],
          !t))
        throw null === e ? new yu : new yu(e)
    },
    _u.equals = function () {
      var t, e, n;
      if (2 === arguments.length)
        t = arguments[0],
        e = arguments[1],
        _u.equals(t, e, null);
      else if (3 === arguments.length && (t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          !e.equals(t)))
        throw new yu("Expected " + t + " but encountered " + e + (null !== n ? ": " + n : ""))
    };
  var mu = function () {
      this._result = null,
        this._inputLines = Array(2).fill().map(function () {
          return Array(2)
        }),
        this._intPt = new Array(2).fill(null),
        this._intLineIndex = null,
        this._isProper = null,
        this._pa = null,
        this._pb = null,
        this._precisionModel = null,
        this._intPt[0] = new ka,
        this._intPt[1] = new ka,
        this._pa = this._intPt[0],
        this._pb = this._intPt[1],
        this._result = 0
    },
    vu = {
      DONT_INTERSECT: {
        configurable: !0
      },
      DO_INTERSECT: {
        configurable: !0
      },
      COLLINEAR: {
        configurable: !0
      },
      NO_INTERSECTION: {
        configurable: !0
      },
      POINT_INTERSECTION: {
        configurable: !0
      },
      COLLINEAR_INTERSECTION: {
        configurable: !0
      }
    };
  mu.prototype.getIndexAlongSegment = function (t, e) {
      return this.computeIntLineIndex(),
        this._intLineIndex[t][e]
    },
    mu.prototype.getTopologySummary = function () {
      var t = new Ja;
      return this.isEndPoint() && t.append(" endpoint"),
        this._isProper && t.append(" proper"),
        this.isCollinear() && t.append(" collinear"),
        t.toString()
    },
    mu.prototype.computeIntersection = function (t, e, n, r) {
      this._inputLines[0][0] = t,
        this._inputLines[0][1] = e,
        this._inputLines[1][0] = n,
        this._inputLines[1][1] = r,
        this._result = this.computeIntersect(t, e, n, r)
    },
    mu.prototype.getIntersectionNum = function () {
      return this._result
    },
    mu.prototype.computeIntLineIndex = function () {
      if (0 === arguments.length)
        null === this._intLineIndex && (this._intLineIndex = Array(2).fill().map(function () {
            return Array(2)
          }),
          this.computeIntLineIndex(0),
          this.computeIntLineIndex(1));
      else if (1 === arguments.length) {
        var t = arguments[0];
        this.getEdgeDistance(t, 0) > this.getEdgeDistance(t, 1) ? (this._intLineIndex[t][0] = 0,
          this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1,
          this._intLineIndex[t][1] = 0)
      }
    },
    mu.prototype.isProper = function () {
      return this.hasIntersection() && this._isProper
    },
    mu.prototype.setPrecisionModel = function (t) {
      this._precisionModel = t
    },
    mu.prototype.isInteriorIntersection = function () {
      if (0 === arguments.length)
        return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
      if (1 === arguments.length) {
        for (var t = arguments[0], e = 0; e < this._result; e++)
          if (!this._intPt[e].equals2D(this._inputLines[t][0]) && !this._intPt[e].equals2D(this._inputLines[t][1]))
            return !0;
        return !1
      }
    },
    mu.prototype.getIntersection = function (t) {
      return this._intPt[t]
    },
    mu.prototype.isEndPoint = function () {
      return this.hasIntersection() && !this._isProper
    },
    mu.prototype.hasIntersection = function () {
      return this._result !== mu.NO_INTERSECTION
    },
    mu.prototype.getEdgeDistance = function (t, e) {
      return mu.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1])
    },
    mu.prototype.isCollinear = function () {
      return this._result === mu.COLLINEAR_INTERSECTION
    },
    mu.prototype.toString = function () {
      return gu.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + gu.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary()
    },
    mu.prototype.getEndpoint = function (t, e) {
      return this._inputLines[t][e]
    },
    mu.prototype.isIntersection = function (t) {
      for (var e = 0; e < this._result; e++)
        if (this._intPt[e].equals2D(t))
          return !0;
      return !1
    },
    mu.prototype.getIntersectionAlongSegment = function (t, e) {
      return this.computeIntLineIndex(),
        this._intPt[this._intLineIndex[t][e]]
    },
    mu.prototype.interfaces_ = function () {
      return []
    },
    mu.prototype.getClass = function () {
      return mu
    },
    mu.computeEdgeDistance = function (t, e, n) {
      var r = Math.abs(n.x - e.x),
        i = Math.abs(n.y - e.y),
        o = -1;
      if (t.equals(e))
        o = 0;
      else if (t.equals(n))
        o = i < r ? r : i;
      else {
        var s = Math.abs(t.x - e.x),
          a = Math.abs(t.y - e.y);
        0 !== (o = i < r ? s : a) || t.equals(e) || (o = Math.max(s, a))
      }
      return _u.isTrue(!(0 === o && !t.equals(e)), "Bad distance calculation"),
        o
    },
    mu.nonRobustComputeEdgeDistance = function (t, e, n) {
      var r = t.x - e.x,
        i = t.y - e.y,
        o = Math.sqrt(r * r + i * i);
      return _u.isTrue(!(0 === o && !t.equals(e)), "Invalid distance calculation"),
        o
    },
    vu.DONT_INTERSECT.get = function () {
      return 0
    },
    vu.DO_INTERSECT.get = function () {
      return 1
    },
    vu.COLLINEAR.get = function () {
      return 2
    },
    vu.NO_INTERSECTION.get = function () {
      return 0
    },
    vu.POINT_INTERSECTION.get = function () {
      return 1
    },
    vu.COLLINEAR_INTERSECTION.get = function () {
      return 2
    },
    Object.defineProperties(mu, vu);
  var xu = function (u) {
      function s() {
        u.apply(this, arguments)
      }
      return u && (s.__proto__ = u),
        ((s.prototype = Object.create(u && u.prototype)).constructor = s).prototype.isInSegmentEnvelopes = function (t) {
          var e = new uu(this._inputLines[0][0], this._inputLines[0][1]),
            n = new uu(this._inputLines[1][0], this._inputLines[1][1]);
          return e.contains(t) && n.contains(t)
        },
        s.prototype.computeIntersection = function () {
          if (3 !== arguments.length)
            return u.prototype.computeIntersection.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          if (this._isProper = !1,
            uu.intersects(e, n, t) && 0 === bu.orientationIndex(e, n, t) && 0 === bu.orientationIndex(n, e, t))
            return this._isProper = !0,
              (t.equals(e) || t.equals(n)) && (this._isProper = !1),
              this._result = u.POINT_INTERSECTION,
              null;
          this._result = u.NO_INTERSECTION
        },
        s.prototype.normalizeToMinimum = function (t, e, n, r, i) {
          i.x = this.smallestInAbsValue(t.x, e.x, n.x, r.x),
            i.y = this.smallestInAbsValue(t.y, e.y, n.y, r.y),
            t.x -= i.x,
            t.y -= i.y,
            e.x -= i.x,
            e.y -= i.y,
            n.x -= i.x,
            n.y -= i.y,
            r.x -= i.x,
            r.y -= i.y
        },
        s.prototype.safeHCoordinateIntersection = function (e, n, r, i) {
          var o = null;
          try {
            o = au.intersection(e, n, r, i)
          } catch (t) {
            if (!(t instanceof ou))
              throw t;
            o = s.nearestEndpoint(e, n, r, i)
          }
          return o
        },
        s.prototype.intersection = function (t, e, n, r) {
          var i = this.intersectionWithNormalization(t, e, n, r);
          return this.isInSegmentEnvelopes(i) || (i = new ka(s.nearestEndpoint(t, e, n, r))),
            null !== this._precisionModel && this._precisionModel.makePrecise(i),
            i
        },
        s.prototype.smallestInAbsValue = function (t, e, n, r) {
          var i = t,
            o = Math.abs(i);
          return Math.abs(e) < o && (i = e,
              o = Math.abs(e)),
            Math.abs(n) < o && (i = n,
              o = Math.abs(n)),
            Math.abs(r) < o && (i = r),
            i
        },
        s.prototype.checkDD = function (t, e, n, r, i) {
          var o = tu.intersection(t, e, n, r),
            s = this.isInSegmentEnvelopes(o);
          su.out.println("DD in env = " + s + "  --------------------- " + o),
            1e-4 < i.distance(o) && su.out.println("Distance = " + i.distance(o))
        },
        s.prototype.intersectionWithNormalization = function (t, e, n, r) {
          var i = new ka(t),
            o = new ka(e),
            s = new ka(n),
            a = new ka(r),
            u = new ka;
          this.normalizeToEnvCentre(i, o, s, a, u);
          var c = this.safeHCoordinateIntersection(i, o, s, a);
          return c.x += u.x,
            c.y += u.y,
            c
        },
        s.prototype.computeCollinearIntersection = function (t, e, n, r) {
          var i = uu.intersects(t, e, n),
            o = uu.intersects(t, e, r),
            s = uu.intersects(n, r, t),
            a = uu.intersects(n, r, e);
          return i && o ? (this._intPt[0] = n,
            this._intPt[1] = r,
            u.COLLINEAR_INTERSECTION) : s && a ? (this._intPt[0] = t,
            this._intPt[1] = e,
            u.COLLINEAR_INTERSECTION) : i && s ? (this._intPt[0] = n,
            this._intPt[1] = t,
            !n.equals(t) || o || a ? u.COLLINEAR_INTERSECTION : u.POINT_INTERSECTION) : i && a ? (this._intPt[0] = n,
            this._intPt[1] = e,
            !n.equals(e) || o || s ? u.COLLINEAR_INTERSECTION : u.POINT_INTERSECTION) : o && s ? (this._intPt[0] = r,
            this._intPt[1] = t,
            !r.equals(t) || i || a ? u.COLLINEAR_INTERSECTION : u.POINT_INTERSECTION) : o && a ? (this._intPt[0] = r,
            this._intPt[1] = e,
            !r.equals(e) || i || s ? u.COLLINEAR_INTERSECTION : u.POINT_INTERSECTION) : u.NO_INTERSECTION
        },
        s.prototype.normalizeToEnvCentre = function (t, e, n, r, i) {
          var o = t.x < e.x ? t.x : e.x,
            s = t.y < e.y ? t.y : e.y,
            a = t.x > e.x ? t.x : e.x,
            u = t.y > e.y ? t.y : e.y,
            c = n.x < r.x ? n.x : r.x,
            h = n.y < r.y ? n.y : r.y,
            l = n.x > r.x ? n.x : r.x,
            p = n.y > r.y ? n.y : r.y,
            f = ((c < o ? o : c) + (a < l ? a : l)) / 2,
            g = ((h < s ? s : h) + (u < p ? u : p)) / 2;
          i.x = f,
            i.y = g,
            t.x -= i.x,
            t.y -= i.y,
            e.x -= i.x,
            e.y -= i.y,
            n.x -= i.x,
            n.y -= i.y,
            r.x -= i.x,
            r.y -= i.y
        },
        s.prototype.computeIntersect = function (t, e, n, r) {
          if (this._isProper = !1,
            !uu.intersects(t, e, n, r))
            return u.NO_INTERSECTION;
          var i = bu.orientationIndex(t, e, n),
            o = bu.orientationIndex(t, e, r);
          if (0 < i && 0 < o || i < 0 && o < 0)
            return u.NO_INTERSECTION;
          var s = bu.orientationIndex(n, r, t),
            a = bu.orientationIndex(n, r, e);
          return 0 < s && 0 < a || s < 0 && a < 0 ? u.NO_INTERSECTION : 0 === i && 0 === o && 0 === s && 0 === a ? this.computeCollinearIntersection(t, e, n, r) : (0 === i || 0 === o || 0 === s || 0 === a ? (this._isProper = !1,
              t.equals2D(n) || t.equals2D(r) ? this._intPt[0] = t : e.equals2D(n) || e.equals2D(r) ? this._intPt[0] = e : 0 === i ? this._intPt[0] = new ka(n) : 0 === o ? this._intPt[0] = new ka(r) : 0 === s ? this._intPt[0] = new ka(t) : 0 === a && (this._intPt[0] = new ka(e))) : (this._isProper = !0,
              this._intPt[0] = this.intersection(t, e, n, r)),
            u.POINT_INTERSECTION)
        },
        s.prototype.interfaces_ = function () {
          return []
        },
        s.prototype.getClass = function () {
          return s
        },
        s.nearestEndpoint = function (t, e, n, r) {
          var i = t,
            o = bu.distancePointLine(t, n, r),
            s = bu.distancePointLine(e, n, r);
          return s < o && (o = s,
              i = e),
            (s = bu.distancePointLine(n, t, e)) < o && (o = s,
              i = n),
            (s = bu.distancePointLine(r, t, e)) < o && (o = s,
              i = r),
            i
        },
        s
    }(mu),
    Eu = function () {};
  Eu.prototype.interfaces_ = function () {
      return []
    },
    Eu.prototype.getClass = function () {
      return Eu
    },
    Eu.orientationIndex = function (t, e, n) {
      var r = e.x - t.x,
        i = e.y - t.y,
        o = n.x - e.x,
        s = n.y - e.y;
      return Eu.signOfDet2x2(r, i, o, s)
    },
    Eu.signOfDet2x2 = function (t, e, n, r) {
      var i = null,
        o = null,
        s = null;
      if (i = 1,
        0 === t || 0 === r)
        return 0 === e || 0 === n ? 0 : 0 < e ? 0 < n ? -i : i : 0 < n ? i : -i;
      if (0 === e || 0 === n)
        return 0 < r ? 0 < t ? i : -i : 0 < t ? -i : i;
      if (0 < e ? 0 < r ? e <= r || (i = -i,
          o = t,
          t = n,
          n = o,
          o = e,
          e = r,
          r = o) : r = e <= -r ? (i = -i,
          n = -n,
          -r) : (o = t,
          t = -n,
          n = o,
          o = e,
          e = -r,
          o) : 0 < r ? -e <= r ? (i = -i,
          t = -t,
          e = -e) : (o = -t,
          t = n,
          n = o,
          o = -e,
          e = r,
          r = o) : r = r <= e ? (t = -t,
          e = -e,
          n = -n,
          -r) : (i = -i,
          o = -t,
          t = -n,
          n = o,
          o = -e,
          e = -r,
          o),
        0 < t) {
        if (!(0 < n))
          return i;
        if (!(t <= n))
          return i
      } else {
        if (0 < n)
          return -i;
        if (!(n <= t))
          return -i;
        i = -i,
          t = -t,
          n = -n
      }
      for (;;) {
        if ((r -= (s = Math.floor(n / t)) * e) < 0)
          return -i;
        if (e < r)
          return i;
        if ((n -= s * t) + n < t) {
          if (e < r + r)
            return i
        } else {
          if (r + r < e)
            return -i;
          n = t - n,
            r = e - r,
            i = -i
        }
        if (0 === r)
          return 0 === n ? 0 : -i;
        if (0 === n)
          return i;
        if ((e -= (s = Math.floor(t / n)) * r) < 0)
          return i;
        if (r < e)
          return -i;
        if ((t -= s * n) + t < n) {
          if (r < e + e)
            return -i
        } else {
          if (e + e < r)
            return i;
          t = n - t,
            e = r - e,
            i = -i
        }
        if (0 === e)
          return 0 === t ? 0 : i;
        if (0 === t)
          return -i
      }
    };
  var wu = function () {
    this._p = null,
      this._crossingCount = 0,
      this._isPointOnSegment = !1;
    var t = arguments[0];
    this._p = t
  };
  wu.prototype.countSegment = function (t, e) {
      if (t.x < this._p.x && e.x < this._p.x)
        return null;
      if (this._p.x === e.x && this._p.y === e.y)
        return this._isPointOnSegment = !0,
          null;
      if (t.y === this._p.y && e.y === this._p.y) {
        var n = t.x,
          r = e.x;
        return r < n && (n = e.x,
            r = t.x),
          this._p.x >= n && this._p.x <= r && (this._isPointOnSegment = !0),
          null
      }
      if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
        var i = t.x - this._p.x,
          o = t.y - this._p.y,
          s = e.x - this._p.x,
          a = e.y - this._p.y,
          u = Eu.signOfDet2x2(i, o, s, a);
        if (0 === u)
          return this._isPointOnSegment = !0,
            null;
        a < o && (u = -u),
          0 < u && this._crossingCount++
      }
    },
    wu.prototype.isPointInPolygon = function () {
      return this.getLocation() !== Ua.EXTERIOR
    },
    wu.prototype.getLocation = function () {
      return this._isPointOnSegment ? Ua.BOUNDARY : this._crossingCount % 2 == 1 ? Ua.INTERIOR : Ua.EXTERIOR
    },
    wu.prototype.isOnSegment = function () {
      return this._isPointOnSegment
    },
    wu.prototype.interfaces_ = function () {
      return []
    },
    wu.prototype.getClass = function () {
      return wu
    },
    wu.locatePointInRing = function () {
      if (arguments[0] instanceof ka && Va(arguments[1], nu)) {
        for (var t = arguments[0], e = arguments[1], n = new wu(t), r = new ka, i = new ka, o = 1; o < e.size(); o++)
          if (e.getCoordinate(o, r),
            e.getCoordinate(o - 1, i),
            n.countSegment(r, i),
            n.isOnSegment())
            return n.getLocation();
        return n.getLocation()
      }
      if (arguments[0] instanceof ka && arguments[1] instanceof Array) {
        for (var s = arguments[0], a = arguments[1], u = new wu(s), c = 1; c < a.length; c++) {
          var h = a[c],
            l = a[c - 1];
          if (u.countSegment(h, l),
            u.isOnSegment())
            return u.getLocation()
        }
        return u.getLocation()
      }
    };
  var bu = function () {},
    Iu = {
      CLOCKWISE: {
        configurable: !0
      },
      RIGHT: {
        configurable: !0
      },
      COUNTERCLOCKWISE: {
        configurable: !0
      },
      LEFT: {
        configurable: !0
      },
      COLLINEAR: {
        configurable: !0
      },
      STRAIGHT: {
        configurable: !0
      }
    };
  bu.prototype.interfaces_ = function () {
      return []
    },
    bu.prototype.getClass = function () {
      return bu
    },
    bu.orientationIndex = function (t, e, n) {
      return tu.orientationIndex(t, e, n)
    },
    bu.signedArea = function () {
      if (arguments[0] instanceof Array) {
        var t = arguments[0];
        if (t.length < 3)
          return 0;
        for (var e = 0, n = t[0].x, r = 1; r < t.length - 1; r++) {
          var i = t[r].x - n,
            o = t[r + 1].y;
          e += i * (t[r - 1].y - o)
        }
        return e / 2
      }
      if (Va(arguments[0], nu)) {
        var s = arguments[0],
          a = s.size();
        if (a < 3)
          return 0;
        var u = new ka,
          c = new ka,
          h = new ka;
        s.getCoordinate(0, c),
          s.getCoordinate(1, h);
        var l = c.x;
        h.x -= l;
        for (var p = 0, f = 1; f < a - 1; f++)
          u.y = c.y,
          c.x = h.x,
          c.y = h.y,
          s.getCoordinate(f + 1, h),
          h.x -= l,
          p += c.x * (u.y - h.y);
        return p / 2
      }
    },
    bu.distanceLineLine = function (t, e, n, r) {
      if (t.equals(e))
        return bu.distancePointLine(t, n, r);
      if (n.equals(r))
        return bu.distancePointLine(r, t, e);
      var i = !1;
      if (uu.intersects(t, e, n, r)) {
        var o = (e.x - t.x) * (r.y - n.y) - (e.y - t.y) * (r.x - n.x);
        if (0 === o)
          i = !0;
        else {
          var s = (t.y - n.y) * (r.x - n.x) - (t.x - n.x) * (r.y - n.y),
            a = ((t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)) / o,
            u = s / o;
          (u < 0 || 1 < u || a < 0 || 1 < a) && (i = !0)
        }
      } else
        i = !0;
      return i ? Ha.min(bu.distancePointLine(t, n, r), bu.distancePointLine(e, n, r), bu.distancePointLine(n, t, e), bu.distancePointLine(r, t, e)) : 0
    },
    bu.isPointInRing = function (t, e) {
      return bu.locatePointInRing(t, e) !== Ua.EXTERIOR
    },
    bu.computeLength = function (t) {
      var e = t.size();
      if (e <= 1)
        return 0;
      var n = 0,
        r = new ka;
      t.getCoordinate(0, r);
      for (var i = r.x, o = r.y, s = 1; s < e; s++) {
        t.getCoordinate(s, r);
        var a = r.x,
          u = r.y,
          c = a - i,
          h = u - o;
        n += Math.sqrt(c * c + h * h),
          i = a,
          o = u
      }
      return n
    },
    bu.isCCW = function (t) {
      var e = t.length - 1;
      if (e < 3)
        throw new Aa("Ring has fewer than 4 points, so orientation cannot be determined");
      for (var n = t[0], r = 0, i = 1; i <= e; i++) {
        var o = t[i];
        o.y > n.y && (n = o,
          r = i)
      }
      for (var s = r;
        (s -= 1) < 0 && (s = e),
        t[s].equals2D(n) && s !== r;)
      ;
      for (var a = r; t[a = (a + 1) % e].equals2D(n) && a !== r;)
      ;
      var u = t[s],
        c = t[a];
      if (u.equals2D(n) || c.equals2D(n) || u.equals2D(c))
        return !1;
      var h = bu.computeOrientation(u, n, c);
      return 0 === h ? u.x > c.x : 0 < h
    },
    bu.locatePointInRing = function (t, e) {
      return wu.locatePointInRing(t, e)
    },
    bu.distancePointLinePerpendicular = function (t, e, n) {
      var r = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
        i = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / r;
      return Math.abs(i) * Math.sqrt(r)
    },
    bu.computeOrientation = function (t, e, n) {
      return bu.orientationIndex(t, e, n)
    },
    bu.distancePointLine = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        if (0 === e.length)
          throw new Aa("Line array must contain at least one vertex");
        for (var n = t.distance(e[0]), r = 0; r < e.length - 1; r++) {
          var i = bu.distancePointLine(t, e[r], e[r + 1]);
          i < n && (n = i)
        }
        return n
      }
      if (3 === arguments.length) {
        var o = arguments[0],
          s = arguments[1],
          a = arguments[2];
        if (s.x === a.x && s.y === a.y)
          return o.distance(s);
        var u = (a.x - s.x) * (a.x - s.x) + (a.y - s.y) * (a.y - s.y),
          c = ((o.x - s.x) * (a.x - s.x) + (o.y - s.y) * (a.y - s.y)) / u;
        if (c <= 0)
          return o.distance(s);
        if (1 <= c)
          return o.distance(a);
        var h = ((s.y - o.y) * (a.x - s.x) - (s.x - o.x) * (a.y - s.y)) / u;
        return Math.abs(h) * Math.sqrt(u)
      }
    },
    bu.isOnLine = function (t, e) {
      for (var n = new xu, r = 1; r < e.length; r++) {
        var i = e[r - 1],
          o = e[r];
        if (n.computeIntersection(t, i, o),
          n.hasIntersection())
          return !0
      }
      return !1
    },
    Iu.CLOCKWISE.get = function () {
      return -1
    },
    Iu.RIGHT.get = function () {
      return bu.CLOCKWISE
    },
    Iu.COUNTERCLOCKWISE.get = function () {
      return 1
    },
    Iu.LEFT.get = function () {
      return bu.COUNTERCLOCKWISE
    },
    Iu.COLLINEAR.get = function () {
      return 0
    },
    Iu.STRAIGHT.get = function () {
      return bu.COLLINEAR
    },
    Object.defineProperties(bu, Iu);
  var Nu = function () {};
  Nu.prototype.filter = function (t) {},
    Nu.prototype.interfaces_ = function () {
      return []
    },
    Nu.prototype.getClass = function () {
      return Nu
    };
  var Cu = function () {
      var t = arguments[0];
      this._envelope = null,
        this._factory = null,
        this._SRID = null,
        this._userData = null,
        this._factory = t,
        this._SRID = t.getSRID()
    },
    Su = {
      serialVersionUID: {
        configurable: !0
      },
      SORTINDEX_POINT: {
        configurable: !0
      },
      SORTINDEX_MULTIPOINT: {
        configurable: !0
      },
      SORTINDEX_LINESTRING: {
        configurable: !0
      },
      SORTINDEX_LINEARRING: {
        configurable: !0
      },
      SORTINDEX_MULTILINESTRING: {
        configurable: !0
      },
      SORTINDEX_POLYGON: {
        configurable: !0
      },
      SORTINDEX_MULTIPOLYGON: {
        configurable: !0
      },
      SORTINDEX_GEOMETRYCOLLECTION: {
        configurable: !0
      },
      geometryChangedFilter: {
        configurable: !0
      }
    };
  Cu.prototype.isGeometryCollection = function () {
      return this.getSortIndex() === Cu.SORTINDEX_GEOMETRYCOLLECTION
    },
    Cu.prototype.getFactory = function () {
      return this._factory
    },
    Cu.prototype.getGeometryN = function (t) {
      return this
    },
    Cu.prototype.getArea = function () {
      return 0
    },
    Cu.prototype.isRectangle = function () {
      return !1
    },
    Cu.prototype.equals = function () {
      if (arguments[0] instanceof Cu) {
        var t = arguments[0];
        return null !== t && this.equalsTopo(t)
      }
      if (arguments[0] instanceof Object) {
        var e = arguments[0];
        if (!(e instanceof Cu))
          return !1;
        var n = e;
        return this.equalsExact(n)
      }
    },
    Cu.prototype.equalsExact = function (t) {
      return this === t || this.equalsExact(t, 0)
    },
    Cu.prototype.geometryChanged = function () {
      this.apply(Cu.geometryChangedFilter)
    },
    Cu.prototype.geometryChangedAction = function () {
      this._envelope = null
    },
    Cu.prototype.equalsNorm = function (t) {
      return null !== t && this.norm().equalsExact(t.norm())
    },
    Cu.prototype.getLength = function () {
      return 0
    },
    Cu.prototype.getNumGeometries = function () {
      return 1
    },
    Cu.prototype.compareTo = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = t;
        return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t)
      }
      if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, r)
      }
    },
    Cu.prototype.getUserData = function () {
      return this._userData
    },
    Cu.prototype.getSRID = function () {
      return this._SRID
    },
    Cu.prototype.getEnvelope = function () {
      return this.getFactory().toGeometry(this.getEnvelopeInternal())
    },
    Cu.prototype.checkNotGeometryCollection = function (t) {
      if (t.getSortIndex() === Cu.SORTINDEX_GEOMETRYCOLLECTION)
        throw new Aa("This method does not support GeometryCollection arguments")
    },
    Cu.prototype.equal = function (t, e, n) {
      return 0 === n ? t.equals(e) : t.distance(e) <= n
    },
    Cu.prototype.norm = function () {
      var t = this.copy();
      return t.normalize(),
        t
    },
    Cu.prototype.getPrecisionModel = function () {
      return this._factory.getPrecisionModel()
    },
    Cu.prototype.getEnvelopeInternal = function () {
      return null === this._envelope && (this._envelope = this.computeEnvelopeInternal()),
        new uu(this._envelope)
    },
    Cu.prototype.setSRID = function (t) {
      this._SRID = t
    },
    Cu.prototype.setUserData = function (t) {
      this._userData = t
    },
    Cu.prototype.compare = function (t, e) {
      for (var n = t.iterator(), r = e.iterator(); n.hasNext() && r.hasNext();) {
        var i = n.next(),
          o = r.next(),
          s = i.compareTo(o);
        if (0 !== s)
          return s
      }
      return n.hasNext() ? 1 : r.hasNext() ? -1 : 0
    },
    Cu.prototype.hashCode = function () {
      return this.getEnvelopeInternal().hashCode()
    },
    Cu.prototype.isGeometryCollectionOrDerived = function () {
      return this.getSortIndex() === Cu.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === Cu.SORTINDEX_MULTIPOINT || this.getSortIndex() === Cu.SORTINDEX_MULTILINESTRING || this.getSortIndex() === Cu.SORTINDEX_MULTIPOLYGON
    },
    Cu.prototype.interfaces_ = function () {
      return [Ga, qa, hi]
    },
    Cu.prototype.getClass = function () {
      return Cu
    },
    Cu.hasNonEmptyElements = function (t) {
      for (var e = 0; e < t.length; e++)
        if (!t[e].isEmpty())
          return !0;
      return !1
    },
    Cu.hasNullElements = function (t) {
      for (var e = 0; e < t.length; e++)
        if (null === t[e])
          return !0;
      return !1
    },
    Su.serialVersionUID.get = function () {
      return 0x799ea46522854c00
    },
    Su.SORTINDEX_POINT.get = function () {
      return 0
    },
    Su.SORTINDEX_MULTIPOINT.get = function () {
      return 1
    },
    Su.SORTINDEX_LINESTRING.get = function () {
      return 2
    },
    Su.SORTINDEX_LINEARRING.get = function () {
      return 3
    },
    Su.SORTINDEX_MULTILINESTRING.get = function () {
      return 4
    },
    Su.SORTINDEX_POLYGON.get = function () {
      return 5
    },
    Su.SORTINDEX_MULTIPOLYGON.get = function () {
      return 6
    },
    Su.SORTINDEX_GEOMETRYCOLLECTION.get = function () {
      return 7
    },
    Su.geometryChangedFilter.get = function () {
      return Mu
    },
    Object.defineProperties(Cu, Su);
  var Mu = function () {};
  Mu.interfaces_ = function () {
      return [Nu]
    },
    Mu.filter = function (t) {
      t.geometryChangedAction()
    };
  var Lu = function () {};
  Lu.prototype.filter = function (t) {},
    Lu.prototype.interfaces_ = function () {
      return []
    },
    Lu.prototype.getClass = function () {
      return Lu
    };
  var Pu = function () {},
    Ou = {
      Mod2BoundaryNodeRule: {
        configurable: !0
      },
      EndPointBoundaryNodeRule: {
        configurable: !0
      },
      MultiValentEndPointBoundaryNodeRule: {
        configurable: !0
      },
      MonoValentEndPointBoundaryNodeRule: {
        configurable: !0
      },
      MOD2_BOUNDARY_RULE: {
        configurable: !0
      },
      ENDPOINT_BOUNDARY_RULE: {
        configurable: !0
      },
      MULTIVALENT_ENDPOINT_BOUNDARY_RULE: {
        configurable: !0
      },
      MONOVALENT_ENDPOINT_BOUNDARY_RULE: {
        configurable: !0
      },
      OGC_SFS_BOUNDARY_RULE: {
        configurable: !0
      }
    };
  Pu.prototype.isInBoundary = function (t) {},
    Pu.prototype.interfaces_ = function () {
      return []
    },
    Pu.prototype.getClass = function () {
      return Pu
    },
    Ou.Mod2BoundaryNodeRule.get = function () {
      return Ru
    },
    Ou.EndPointBoundaryNodeRule.get = function () {
      return Tu
    },
    Ou.MultiValentEndPointBoundaryNodeRule.get = function () {
      return Au
    },
    Ou.MonoValentEndPointBoundaryNodeRule.get = function () {
      return Du
    },
    Ou.MOD2_BOUNDARY_RULE.get = function () {
      return new Ru
    },
    Ou.ENDPOINT_BOUNDARY_RULE.get = function () {
      return new Tu
    },
    Ou.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function () {
      return new Au
    },
    Ou.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function () {
      return new Du
    },
    Ou.OGC_SFS_BOUNDARY_RULE.get = function () {
      return Pu.MOD2_BOUNDARY_RULE
    },
    Object.defineProperties(Pu, Ou);
  var Ru = function () {};
  Ru.prototype.isInBoundary = function (t) {
      return t % 2 == 1
    },
    Ru.prototype.interfaces_ = function () {
      return [Pu]
    },
    Ru.prototype.getClass = function () {
      return Ru
    };
  var Tu = function () {};
  Tu.prototype.isInBoundary = function (t) {
      return 0 < t
    },
    Tu.prototype.interfaces_ = function () {
      return [Pu]
    },
    Tu.prototype.getClass = function () {
      return Tu
    };
  var Au = function () {};
  Au.prototype.isInBoundary = function (t) {
      return 1 < t
    },
    Au.prototype.interfaces_ = function () {
      return [Pu]
    },
    Au.prototype.getClass = function () {
      return Au
    };
  var Du = function () {};
  Du.prototype.isInBoundary = function (t) {
      return 1 === t
    },
    Du.prototype.interfaces_ = function () {
      return [Pu]
    },
    Du.prototype.getClass = function () {
      return Du
    };
  var Fu = function () {};
  Fu.prototype.add = function () {},
    Fu.prototype.addAll = function () {},
    Fu.prototype.isEmpty = function () {},
    Fu.prototype.iterator = function () {},
    Fu.prototype.size = function () {},
    Fu.prototype.toArray = function () {},
    Fu.prototype.remove = function () {};
  var qu = function (e) {
      function t(t) {
        e.call(this),
          this.message = t || ""
      }
      e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)).constructor = t;
      var n = {
        name: {
          configurable: !0
        }
      };
      return n.name.get = function () {
          return "IndexOutOfBoundsException"
        },
        Object.defineProperties(t, n),
        t
    }(Error),
    Gu = function () {};
  Gu.prototype.hasNext = function () {},
    Gu.prototype.next = function () {},
    Gu.prototype.remove = function () {};
  var Bu = function (t) {
    function e() {
      t.apply(this, arguments)
    }
    return t && (e.__proto__ = t),
      ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.get = function () {},
      e.prototype.set = function () {},
      e.prototype.isEmpty = function () {},
      e
  }(Fu);
  (li.prototype = new Error).name = "NoSuchElementException";
  var ku = function (t) {
      function e() {
        t.call(this),
          this.array_ = [],
          arguments[0] instanceof Fu && this.addAll(arguments[0])
      }
      return t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.ensureCapacity = function () {},
        e.prototype.interfaces_ = function () {
          return [t, Fu]
        },
        e.prototype.add = function (t) {
          return 1 === arguments.length ? this.array_.push(t) : this.array_.splice(t, arguments[1]),
            !0
        },
        e.prototype.clear = function () {
          this.array_ = []
        },
        e.prototype.addAll = function (t) {
          for (var e = t.iterator(); e.hasNext();)
            this.add(e.next());
          return !0
        },
        e.prototype.set = function (t, e) {
          var n = this.array_[t];
          return this.array_[t] = e,
            n
        },
        e.prototype.iterator = function () {
          return new zu(this)
        },
        e.prototype.get = function (t) {
          if (t < 0 || t >= this.size())
            throw new qu;
          return this.array_[t]
        },
        e.prototype.isEmpty = function () {
          return 0 === this.array_.length
        },
        e.prototype.size = function () {
          return this.array_.length
        },
        e.prototype.toArray = function () {
          for (var t = [], e = 0, n = this.array_.length; e < n; e++)
            t.push(this.array_[e]);
          return t
        },
        e.prototype.remove = function (t) {
          for (var e = !1, n = 0, r = this.array_.length; n < r; n++)
            if (this.array_[n] === t) {
              this.array_.splice(n, 1),
                e = !0;
              break
            }
          return e
        },
        e
    }(Bu),
    zu = function (e) {
      function t(t) {
        e.call(this),
          this.arrayList_ = t,
          this.position_ = 0
      }
      return e && (t.__proto__ = e),
        ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.next = function () {
          if (this.position_ === this.arrayList_.size())
            throw new li;
          return this.arrayList_.get(this.position_++)
        },
        t.prototype.hasNext = function () {
          return this.position_ < this.arrayList_.size()
        },
        t.prototype.set = function (t) {
          return this.arrayList_.set(this.position_ - 1, t)
        },
        t.prototype.remove = function () {
          this.arrayList_.remove(this.arrayList_.get(this.position_))
        },
        t
    }(Gu),
    ju = function (v) {
      function t() {
        if (v.call(this),
          0 === arguments.length)
        ;
        else if (1 === arguments.length) {
          var t = arguments[0];
          this.ensureCapacity(t.length),
            this.add(t, !0)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          this.ensureCapacity(e.length),
            this.add(e, n)
        }
      }
      v && (t.__proto__ = v),
        (t.prototype = Object.create(v && v.prototype)).constructor = t;
      var e = {
        coordArrayType: {
          configurable: !0
        }
      };
      return e.coordArrayType.get = function () {
          return new Array(0).fill(null)
        },
        t.prototype.getCoordinate = function (t) {
          return this.get(t)
        },
        t.prototype.addAll = function () {
          if (2 !== arguments.length)
            return v.prototype.addAll.apply(this, arguments);
          for (var t = arguments[0], e = arguments[1], n = !1, r = t.iterator(); r.hasNext();)
            this.add(r.next(), e),
            n = !0;
          return n
        },
        t.prototype.clone = function () {
          for (var t = v.prototype.clone.call(this), e = 0; e < this.size(); e++)
            t.add(e, this.get(e).copy());
          return t
        },
        t.prototype.toCoordinateArray = function () {
          return this.toArray(t.coordArrayType)
        },
        t.prototype.add = function () {
          if (1 === arguments.length) {
            var t = arguments[0];
            v.prototype.add.call(this, t)
          } else if (2 === arguments.length) {
            if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
              var e = arguments[0],
                n = arguments[1];
              return this.add(e, n, !0),
                !0
            }
            if (arguments[0] instanceof ka && "boolean" == typeof arguments[1]) {
              var r = arguments[0];
              if (!arguments[1] && 1 <= this.size() && this.get(this.size() - 1).equals2D(r))
                return null;
              v.prototype.add.call(this, r)
            } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
              var i = arguments[0],
                o = arguments[1];
              return this.add(i, o),
                !0
            }
          } else if (3 === arguments.length) {
            if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
              var s = arguments[0],
                a = arguments[1];
              if (arguments[2])
                for (var u = 0; u < s.length; u++)
                  this.add(s[u], a);
              else
                for (var c = s.length - 1; 0 <= c; c--)
                  this.add(s[c], a);
              return !0
            }
            if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof ka) {
              var h = arguments[0],
                l = arguments[1];
              if (!arguments[2]) {
                var p = this.size();
                if (0 < p) {
                  if (0 < h && this.get(h - 1).equals2D(l))
                    return null;
                  if (h < p && this.get(h).equals2D(l))
                    return null
                }
              }
              v.prototype.add.call(this, h, l)
            }
          } else if (4 === arguments.length) {
            var f = arguments[0],
              g = arguments[1],
              d = arguments[2],
              y = arguments[3],
              _ = 1;
            y < d && (_ = -1);
            for (var m = d; m !== y; m += _)
              this.add(f[m], g);
            return !0
          }
        },
        t.prototype.closeRing = function () {
          0 < this.size() && this.add(new ka(this.get(0)), !1)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        Object.defineProperties(t, e),
        t
    }(ku),
    Xu = function () {},
    Uu = {
      ForwardComparator: {
        configurable: !0
      },
      BidirectionalComparator: {
        configurable: !0
      },
      coordArrayType: {
        configurable: !0
      }
    };
  Uu.ForwardComparator.get = function () {
      return Yu
    },
    Uu.BidirectionalComparator.get = function () {
      return Vu
    },
    Uu.coordArrayType.get = function () {
      return new Array(0).fill(null)
    },
    Xu.prototype.interfaces_ = function () {
      return []
    },
    Xu.prototype.getClass = function () {
      return Xu
    },
    Xu.isRing = function (t) {
      return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]))
    },
    Xu.ptNotInList = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if (Xu.indexOf(r, e) < 0)
          return r
      }
      return null
    },
    Xu.scroll = function (t, e) {
      var n = Xu.indexOf(e, t);
      if (n < 0)
        return null;
      var r = new Array(t.length).fill(null);
      su.arraycopy(t, n, r, 0, t.length - n),
        su.arraycopy(t, 0, r, t.length - n, n),
        su.arraycopy(r, 0, t, 0, t.length)
    },
    Xu.equals = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        if (t === e)
          return !0;
        if (null === t || null === e)
          return !1;
        if (t.length !== e.length)
          return !1;
        for (var n = 0; n < t.length; n++)
          if (!t[n].equals(e[n]))
            return !1;
        return !0
      }
      if (3 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2];
        if (r === i)
          return !0;
        if (null === r || null === i)
          return !1;
        if (r.length !== i.length)
          return !1;
        for (var s = 0; s < r.length; s++)
          if (0 !== o.compare(r[s], i[s]))
            return !1;
        return !0
      }
    },
    Xu.intersection = function (t, e) {
      for (var n = new ju, r = 0; r < t.length; r++)
        e.intersects(t[r]) && n.add(t[r], !0);
      return n.toCoordinateArray()
    },
    Xu.hasRepeatedPoints = function (t) {
      for (var e = 1; e < t.length; e++)
        if (t[e - 1].equals(t[e]))
          return !0;
      return !1
    },
    Xu.removeRepeatedPoints = function (t) {
      return Xu.hasRepeatedPoints(t) ? new ju(t, !1).toCoordinateArray() : t
    },
    Xu.reverse = function (t) {
      for (var e = t.length - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) {
        var i = t[r];
        t[r] = t[e - r],
          t[e - r] = i
      }
    },
    Xu.removeNull = function (t) {
      for (var e = 0, n = 0; n < t.length; n++)
        null !== t[n] && e++;
      var r = new Array(e).fill(null);
      if (0 === e)
        return r;
      for (var i = 0, o = 0; o < t.length; o++)
        null !== t[o] && (r[i++] = t[o]);
      return r
    },
    Xu.copyDeep = function () {
      if (1 === arguments.length) {
        for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
          e[n] = new ka(t[n]);
        return e
      }
      if (5 === arguments.length)
        for (var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = arguments[4], u = 0; u < a; u++)
          o[s + u] = new ka(r[i + u])
    },
    Xu.isEqualReversed = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = e[t.length - n - 1];
        if (0 !== r.compareTo(i))
          return !1
      }
      return !0
    },
    Xu.envelope = function (t) {
      for (var e = new uu, n = 0; n < t.length; n++)
        e.expandToInclude(t[n]);
      return e
    },
    Xu.toCoordinateArray = function (t) {
      return t.toArray(Xu.coordArrayType)
    },
    Xu.atLeastNCoordinatesOrNothing = function (t, e) {
      return e.length >= t ? e : []
    },
    Xu.indexOf = function (t, e) {
      for (var n = 0; n < e.length; n++)
        if (t.equals(e[n]))
          return n;
      return -1
    },
    Xu.increasingDirection = function (t) {
      for (var e = 0; e < Math.trunc(t.length / 2); e++) {
        var n = t.length - 1 - e,
          r = t[e].compareTo(t[n]);
        if (0 !== r)
          return r
      }
      return 1
    },
    Xu.compare = function (t, e) {
      for (var n = 0; n < t.length && n < e.length;) {
        var r = t[n].compareTo(e[n]);
        if (0 !== r)
          return r;
        n++
      }
      return n < e.length ? -1 : n < t.length ? 1 : 0
    },
    Xu.minCoordinate = function (t) {
      for (var e = null, n = 0; n < t.length; n++)
        (null === e || 0 < e.compareTo(t[n])) && (e = t[n]);
      return e
    },
    Xu.extract = function (t, e, n) {
      e = Ha.clamp(e, 0, t.length);
      var r = (n = Ha.clamp(n, -1, t.length)) - e + 1;
      n < 0 && (r = 0),
        e >= t.length && (r = 0),
        n < e && (r = 0);
      var i = new Array(r).fill(null);
      if (0 === r)
        return i;
      for (var o = 0, s = e; s <= n; s++)
        i[o++] = t[s];
      return i
    },
    Object.defineProperties(Xu, Uu);
  var Yu = function () {};
  Yu.prototype.compare = function (t, e) {
      return Xu.compare(t, e)
    },
    Yu.prototype.interfaces_ = function () {
      return [Ba]
    },
    Yu.prototype.getClass = function () {
      return Yu
    };
  var Vu = function () {};
  Vu.prototype.compare = function (t, e) {
      var n = t,
        r = e;
      if (n.length < r.length)
        return -1;
      if (n.length > r.length)
        return 1;
      if (0 === n.length)
        return 0;
      var i = Xu.compare(n, r);
      return Xu.isEqualReversed(n, r) ? 0 : i
    },
    Vu.prototype.OLDcompare = function (t, e) {
      var n = t,
        r = e;
      if (n.length < r.length)
        return -1;
      if (n.length > r.length)
        return 1;
      if (0 === n.length)
        return 0;
      for (var i = Xu.increasingDirection(n), o = Xu.increasingDirection(r), s = 0 < i ? 0 : n.length - 1, a = 0 < o ? 0 : n.length - 1, u = 0; u < n.length; u++) {
        var c = n[s].compareTo(r[a]);
        if (0 !== c)
          return c;
        s += i,
          a += o
      }
      return 0
    },
    Vu.prototype.interfaces_ = function () {
      return [Ba]
    },
    Vu.prototype.getClass = function () {
      return Vu
    };
  var Hu = function () {};
  Hu.prototype.get = function () {},
    Hu.prototype.put = function () {},
    Hu.prototype.size = function () {},
    Hu.prototype.values = function () {},
    Hu.prototype.entrySet = function () {};
  var Wu = function (t) {
    function e() {
      t.apply(this, arguments)
    }
    return t && (e.__proto__ = t),
      (e.prototype = Object.create(t && t.prototype)).constructor = e
  }(Hu);
  (pi.prototype = new Error).name = "OperationNotSupported",
    (fi.prototype = new Fu).contains = function () {};
  var Ju = function (t) {
      function e() {
        t.call(this),
          this.array_ = [],
          arguments[0] instanceof Fu && this.addAll(arguments[0])
      }
      return t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.contains = function (t) {
          for (var e = 0, n = this.array_.length; e < n; e++)
            if (this.array_[e] === t)
              return !0;
          return !1
        },
        e.prototype.add = function (t) {
          return !this.contains(t) && (this.array_.push(t),
            !0)
        },
        e.prototype.addAll = function (t) {
          for (var e = t.iterator(); e.hasNext();)
            this.add(e.next());
          return !0
        },
        e.prototype.remove = function (t) {
          throw new Error
        },
        e.prototype.size = function () {
          return this.array_.length
        },
        e.prototype.isEmpty = function () {
          return 0 === this.array_.length
        },
        e.prototype.toArray = function () {
          for (var t = [], e = 0, n = this.array_.length; e < n; e++)
            t.push(this.array_[e]);
          return t
        },
        e.prototype.iterator = function () {
          return new Zu(this)
        },
        e
    }(fi),
    Zu = function (e) {
      function t(t) {
        e.call(this),
          this.hashSet_ = t,
          this.position_ = 0
      }
      return e && (t.__proto__ = e),
        ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.next = function () {
          if (this.position_ === this.hashSet_.size())
            throw new li;
          return this.hashSet_.array_[this.position_++]
        },
        t.prototype.hasNext = function () {
          return this.position_ < this.hashSet_.size()
        },
        t.prototype.remove = function () {
          throw new pi
        },
        t
    }(Gu),
    Ku = 0;
  (vi.prototype = new Wu).get = function (t) {
      for (var e = this.root_; null !== e;) {
        var n = t.compareTo(e.key);
        if (n < 0)
          e = e.left;
        else {
          if (!(0 < n))
            return e.value;
          e = e.right
        }
      }
      return null
    },
    vi.prototype.put = function (t, e) {
      if (null === this.root_)
        return this.root_ = {
            key: t,
            value: e,
            left: null,
            right: null,
            parent: null,
            color: Ku,
            getValue: function () {
              return this.value
            },
            getKey: function () {
              return this.key
            }
          },
          this.size_ = 1,
          null;
      var n, r, i = this.root_;
      do {
        if (n = i,
          (r = t.compareTo(i.key)) < 0)
          i = i.left;
        else {
          if (!(0 < r)) {
            var o = i.value;
            return i.value = e,
              o
          }
          i = i.right
        }
      } while (null !== i);
      var s = {
        key: t,
        left: null,
        right: null,
        value: e,
        parent: n,
        color: Ku,
        getValue: function () {
          return this.value
        },
        getKey: function () {
          return this.key
        }
      };
      return r < 0 ? n.left = s : n.right = s,
        this.fixAfterInsertion(s),
        this.size_++,
        null
    },
    vi.prototype.fixAfterInsertion = function (t) {
      for (t.color = 1; null != t && t !== this.root_ && 1 === t.parent.color;)
        if (di(t) === _i(di(di(t)))) {
          var e = mi(di(di(t)));
          1 === gi(e) ? (yi(di(t), Ku),
            yi(e, Ku),
            yi(di(di(t)), 1),
            t = di(di(t))) : (t === mi(di(t)) && (t = di(t),
              this.rotateLeft(t)),
            yi(di(t), Ku),
            yi(di(di(t)), 1),
            this.rotateRight(di(di(t))))
        } else {
          var n = _i(di(di(t)));
          1 === gi(n) ? (yi(di(t), Ku),
            yi(n, Ku),
            yi(di(di(t)), 1),
            t = di(di(t))) : (t === _i(di(t)) && (t = di(t),
              this.rotateRight(t)),
            yi(di(t), Ku),
            yi(di(di(t)), 1),
            this.rotateLeft(di(di(t))))
        }
      this.root_.color = Ku
    },
    vi.prototype.values = function () {
      var t = new ku,
        e = this.getFirstEntry();
      if (null !== e)
        for (t.add(e.value); null !== (e = vi.successor(e));)
          t.add(e.value);
      return t
    },
    vi.prototype.entrySet = function () {
      var t = new Ju,
        e = this.getFirstEntry();
      if (null !== e)
        for (t.add(e); null !== (e = vi.successor(e));)
          t.add(e);
      return t
    },
    vi.prototype.rotateLeft = function (t) {
      if (null != t) {
        var e = t.right;
        t.right = e.left,
          null != e.left && (e.left.parent = t),
          e.parent = t.parent,
          null === t.parent ? this.root_ = e : t.parent.left === t ? t.parent.left = e : t.parent.right = e,
          (e.left = t).parent = e
      }
    },
    vi.prototype.rotateRight = function (t) {
      if (null != t) {
        var e = t.left;
        t.left = e.right,
          null != e.right && (e.right.parent = t),
          e.parent = t.parent,
          null === t.parent ? this.root_ = e : t.parent.right === t ? t.parent.right = e : t.parent.left = e,
          (e.right = t).parent = e
      }
    },
    vi.prototype.getFirstEntry = function () {
      var t = this.root_;
      if (null != t)
        for (; null != t.left;)
          t = t.left;
      return t
    },
    vi.successor = function (t) {
      if (null === t)
        return null;
      if (null !== t.right) {
        for (var e = t.right; null !== e.left;)
          e = e.left;
        return e
      }
      for (var n = t.parent, r = t; null !== n && r === n.right;)
        n = (r = n).parent;
      return n
    },
    vi.prototype.size = function () {
      return this.size_
    };
  var Qu = function () {};
  Qu.prototype.interfaces_ = function () {
      return []
    },
    Qu.prototype.getClass = function () {
      return Qu
    },
    xi.prototype = new fi,
    (Ei.prototype = new xi).contains = function (t) {
      for (var e = 0, n = this.array_.length; e < n; e++)
        if (0 === this.array_[e].compareTo(t))
          return !0;
      return !1
    },
    Ei.prototype.add = function (t) {
      if (this.contains(t))
        return !1;
      for (var e = 0, n = this.array_.length; e < n; e++)
        if (1 === this.array_[e].compareTo(t))
          return this.array_.splice(e, 0, t),
            !0;
      return this.array_.push(t),
        !0
    },
    Ei.prototype.addAll = function (t) {
      for (var e = t.iterator(); e.hasNext();)
        this.add(e.next());
      return !0
    },
    Ei.prototype.remove = function (t) {
      throw new pi
    },
    Ei.prototype.size = function () {
      return this.array_.length
    },
    Ei.prototype.isEmpty = function () {
      return 0 === this.array_.length
    },
    Ei.prototype.toArray = function () {
      for (var t = [], e = 0, n = this.array_.length; e < n; e++)
        t.push(this.array_[e]);
      return t
    },
    Ei.prototype.iterator = function () {
      return new $u(this)
    };
  var $u = function (t) {
    this.treeSet_ = t,
      this.position_ = 0
  };
  $u.prototype.next = function () {
      if (this.position_ === this.treeSet_.size())
        throw new li;
      return this.treeSet_.array_[this.position_++]
    },
    $u.prototype.hasNext = function () {
      return this.position_ < this.treeSet_.size()
    },
    $u.prototype.remove = function () {
      throw new pi
    };
  var tc = function () {};
  tc.sort = function () {
      var t, e, n, r, i = arguments[0];
      if (1 === arguments.length)
        r = function (t, e) {
          return t.compareTo(e)
        },
        i.sort(r);
      else if (2 === arguments.length)
        n = arguments[1],
        r = function (t, e) {
          return n.compare(t, e)
        },
        i.sort(r);
      else if (3 === arguments.length) {
        (e = i.slice(arguments[1], arguments[2])).sort();
        var o = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length));
        for (i.splice(0, i.length),
          t = 0; t < o.length; t++)
          i.push(o[t])
      } else if (4 === arguments.length)
        for (e = i.slice(arguments[1], arguments[2]),
          n = arguments[3],
          r = function (t, e) {
            return n.compare(t, e)
          },
          e.sort(r),
          o = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length)),
          i.splice(0, i.length),
          t = 0; t < o.length; t++)
          i.push(o[t])
    },
    tc.asList = function (t) {
      for (var e = new ku, n = 0, r = t.length; n < r; n++)
        e.add(t[n]);
      return e
    };
  var ec = function () {},
    nc = {
      P: {
        configurable: !0
      },
      L: {
        configurable: !0
      },
      A: {
        configurable: !0
      },
      FALSE: {
        configurable: !0
      },
      TRUE: {
        configurable: !0
      },
      DONTCARE: {
        configurable: !0
      },
      SYM_FALSE: {
        configurable: !0
      },
      SYM_TRUE: {
        configurable: !0
      },
      SYM_DONTCARE: {
        configurable: !0
      },
      SYM_P: {
        configurable: !0
      },
      SYM_L: {
        configurable: !0
      },
      SYM_A: {
        configurable: !0
      }
    };
  nc.P.get = function () {
      return 0
    },
    nc.L.get = function () {
      return 1
    },
    nc.A.get = function () {
      return 2
    },
    nc.FALSE.get = function () {
      return -1
    },
    nc.TRUE.get = function () {
      return -2
    },
    nc.DONTCARE.get = function () {
      return -3
    },
    nc.SYM_FALSE.get = function () {
      return "F"
    },
    nc.SYM_TRUE.get = function () {
      return "T"
    },
    nc.SYM_DONTCARE.get = function () {
      return "*"
    },
    nc.SYM_P.get = function () {
      return "0"
    },
    nc.SYM_L.get = function () {
      return "1"
    },
    nc.SYM_A.get = function () {
      return "2"
    },
    ec.prototype.interfaces_ = function () {
      return []
    },
    ec.prototype.getClass = function () {
      return ec
    },
    ec.toDimensionSymbol = function (t) {
      switch (t) {
        case ec.FALSE:
          return ec.SYM_FALSE;
        case ec.TRUE:
          return ec.SYM_TRUE;
        case ec.DONTCARE:
          return ec.SYM_DONTCARE;
        case ec.P:
          return ec.SYM_P;
        case ec.L:
          return ec.SYM_L;
        case ec.A:
          return ec.SYM_A
      }
      throw new Aa("Unknown dimension value: " + t)
    },
    ec.toDimensionValue = function (t) {
      switch (Ka.toUpperCase(t)) {
        case ec.SYM_FALSE:
          return ec.FALSE;
        case ec.SYM_TRUE:
          return ec.TRUE;
        case ec.SYM_DONTCARE:
          return ec.DONTCARE;
        case ec.SYM_P:
          return ec.P;
        case ec.SYM_L:
          return ec.L;
        case ec.SYM_A:
          return ec.A
      }
      throw new Aa("Unknown dimension symbol: " + t)
    },
    Object.defineProperties(ec, nc);
  var rc = function () {};
  rc.prototype.filter = function (t) {},
    rc.prototype.interfaces_ = function () {
      return []
    },
    rc.prototype.getClass = function () {
      return rc
    };
  var ic = function () {};
  ic.prototype.filter = function (t, e) {},
    ic.prototype.isDone = function () {},
    ic.prototype.isGeometryChanged = function () {},
    ic.prototype.interfaces_ = function () {
      return []
    },
    ic.prototype.getClass = function () {
      return ic
    };
  var oc = function (i) {
      function n(t, e) {
        if (i.call(this, e),
          this._geometries = t || [],
          i.hasNullElements(this._geometries))
          throw new Aa("geometries must not contain null elements")
      }
      i && (n.__proto__ = i);
      var t = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((n.prototype = Object.create(i && i.prototype)).constructor = n).prototype.computeEnvelopeInternal = function () {
          for (var t = new uu, e = 0; e < this._geometries.length; e++)
            t.expandToInclude(this._geometries[e].getEnvelopeInternal());
          return t
        },
        n.prototype.getGeometryN = function (t) {
          return this._geometries[t]
        },
        n.prototype.getSortIndex = function () {
          return i.SORTINDEX_GEOMETRYCOLLECTION
        },
        n.prototype.getCoordinates = function () {
          for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = 0; n < this._geometries.length; n++)
            for (var r = this._geometries[n].getCoordinates(), i = 0; i < r.length; i++)
              t[++e] = r[i];
          return t
        },
        n.prototype.getArea = function () {
          for (var t = 0, e = 0; e < this._geometries.length; e++)
            t += this._geometries[e].getArea();
          return t
        },
        n.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return i.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          if (!this.isEquivalentClass(t))
            return !1;
          var n = t;
          if (this._geometries.length !== n._geometries.length)
            return !1;
          for (var r = 0; r < this._geometries.length; r++)
            if (!this._geometries[r].equalsExact(n._geometries[r], e))
              return !1;
          return !0
        },
        n.prototype.normalize = function () {
          for (var t = 0; t < this._geometries.length; t++)
            this._geometries[t].normalize();
          tc.sort(this._geometries)
        },
        n.prototype.getCoordinate = function () {
          return this.isEmpty() ? null : this._geometries[0].getCoordinate()
        },
        n.prototype.getBoundaryDimension = function () {
          for (var t = ec.FALSE, e = 0; e < this._geometries.length; e++)
            t = Math.max(t, this._geometries[e].getBoundaryDimension());
          return t
        },
        n.prototype.getDimension = function () {
          for (var t = ec.FALSE, e = 0; e < this._geometries.length; e++)
            t = Math.max(t, this._geometries[e].getDimension());
          return t
        },
        n.prototype.getLength = function () {
          for (var t = 0, e = 0; e < this._geometries.length; e++)
            t += this._geometries[e].getLength();
          return t
        },
        n.prototype.getNumPoints = function () {
          for (var t = 0, e = 0; e < this._geometries.length; e++)
            t += this._geometries[e].getNumPoints();
          return t
        },
        n.prototype.getNumGeometries = function () {
          return this._geometries.length
        },
        n.prototype.reverse = function () {
          for (var t = this._geometries.length, e = new Array(t).fill(null), n = 0; n < this._geometries.length; n++)
            e[n] = this._geometries[n].reverse();
          return this.getFactory().createGeometryCollection(e)
        },
        n.prototype.compareToSameClass = function () {
          if (1 === arguments.length) {
            var t = arguments[0],
              e = new Ei(tc.asList(this._geometries)),
              n = new Ei(tc.asList(t._geometries));
            return this.compare(e, n)
          }
          if (2 === arguments.length) {
            for (var r = arguments[0], i = arguments[1], o = r, s = this.getNumGeometries(), a = o.getNumGeometries(), u = 0; u < s && u < a;) {
              var c = this.getGeometryN(u),
                h = o.getGeometryN(u),
                l = c.compareToSameClass(h, i);
              if (0 !== l)
                return l;
              u++
            }
            return u < s ? 1 : u < a ? -1 : 0
          }
        },
        n.prototype.apply = function () {
          if (Va(arguments[0], Lu))
            for (var t = arguments[0], e = 0; e < this._geometries.length; e++)
              this._geometries[e].apply(t);
          else if (Va(arguments[0], ic)) {
            var n = arguments[0];
            if (0 === this._geometries.length)
              return null;
            for (var r = 0; r < this._geometries.length && (this._geometries[r].apply(n),
                !n.isDone()); r++)
            ;
            n.isGeometryChanged() && this.geometryChanged()
          } else if (Va(arguments[0], rc)) {
            var i = arguments[0];
            i.filter(this);
            for (var o = 0; o < this._geometries.length; o++)
              this._geometries[o].apply(i)
          } else if (Va(arguments[0], Nu)) {
            var s = arguments[0];
            s.filter(this);
            for (var a = 0; a < this._geometries.length; a++)
              this._geometries[a].apply(s)
          }
        },
        n.prototype.getBoundary = function () {
          return this.checkNotGeometryCollection(this),
            _u.shouldNeverReachHere(),
            null
        },
        n.prototype.clone = function () {
          var t = i.prototype.clone.call(this);
          t._geometries = new Array(this._geometries.length).fill(null);
          for (var e = 0; e < this._geometries.length; e++)
            t._geometries[e] = this._geometries[e].clone();
          return t
        },
        n.prototype.getGeometryType = function () {
          return "GeometryCollection"
        },
        n.prototype.copy = function () {
          for (var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)
            t[e] = this._geometries[e].copy();
          return new n(t, this._factory)
        },
        n.prototype.isEmpty = function () {
          for (var t = 0; t < this._geometries.length; t++)
            if (!this._geometries[t].isEmpty())
              return !1;
          return !0
        },
        n.prototype.interfaces_ = function () {
          return []
        },
        n.prototype.getClass = function () {
          return n
        },
        t.serialVersionUID.get = function () {
          return -0x4f07bcb1f857d800
        },
        Object.defineProperties(n, t),
        n
    }(Cu),
    sc = function (n) {
      function r() {
        n.apply(this, arguments)
      }
      n && (r.__proto__ = n);
      var t = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((r.prototype = Object.create(n && n.prototype)).constructor = r).prototype.getSortIndex = function () {
          return Cu.SORTINDEX_MULTILINESTRING
        },
        r.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return n.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          return !!this.isEquivalentClass(t) && n.prototype.equalsExact.call(this, t, e)
        },
        r.prototype.getBoundaryDimension = function () {
          return this.isClosed() ? ec.FALSE : 0
        },
        r.prototype.isClosed = function () {
          if (this.isEmpty())
            return !1;
          for (var t = 0; t < this._geometries.length; t++)
            if (!this._geometries[t].isClosed())
              return !1;
          return !0
        },
        r.prototype.getDimension = function () {
          return 1
        },
        r.prototype.reverse = function () {
          for (var t = this._geometries.length, e = new Array(t).fill(null), n = 0; n < this._geometries.length; n++)
            e[t - 1 - n] = this._geometries[n].reverse();
          return this.getFactory().createMultiLineString(e)
        },
        r.prototype.getBoundary = function () {
          return new ac(this).getBoundary()
        },
        r.prototype.getGeometryType = function () {
          return "MultiLineString"
        },
        r.prototype.copy = function () {
          for (var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)
            t[e] = this._geometries[e].copy();
          return new r(t, this._factory)
        },
        r.prototype.interfaces_ = function () {
          return [Qu]
        },
        r.prototype.getClass = function () {
          return r
        },
        t.serialVersionUID.get = function () {
          return 0x7155d2ab4afa8000
        },
        Object.defineProperties(r, t),
        r
    }(oc),
    ac = function () {
      if (this._geom = null,
        this._geomFact = null,
        this._bnRule = null,
        this._endpointMap = null,
        1 === arguments.length) {
        var t = arguments[0],
          e = Pu.MOD2_BOUNDARY_RULE;
        this._geom = t,
          this._geomFact = t.getFactory(),
          this._bnRule = e
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        this._geom = n,
          this._geomFact = n.getFactory(),
          this._bnRule = r
      }
    };
  ac.prototype.boundaryMultiLineString = function (t) {
      if (this._geom.isEmpty())
        return this.getEmptyMultiPoint();
      var e = this.computeBoundaryCoordinates(t);
      return 1 === e.length ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e)
    },
    ac.prototype.getBoundary = function () {
      return this._geom instanceof pc ? this.boundaryLineString(this._geom) : this._geom instanceof sc ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary()
    },
    ac.prototype.boundaryLineString = function (t) {
      return this._geom.isEmpty() ? this.getEmptyMultiPoint() : t.isClosed() ? this._bnRule.isInBoundary(2) ? t.getStartPoint() : this._geomFact.createMultiPoint() : this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()])
    },
    ac.prototype.getEmptyMultiPoint = function () {
      return this._geomFact.createMultiPoint()
    },
    ac.prototype.computeBoundaryCoordinates = function (t) {
      var e = new ku;
      this._endpointMap = new vi;
      for (var n = 0; n < t.getNumGeometries(); n++) {
        var r = t.getGeometryN(n);
        0 !== r.getNumPoints() && (this.addEndpoint(r.getCoordinateN(0)),
          this.addEndpoint(r.getCoordinateN(r.getNumPoints() - 1)))
      }
      for (var i = this._endpointMap.entrySet().iterator(); i.hasNext();) {
        var o = i.next(),
          s = o.getValue().count;
        this._bnRule.isInBoundary(s) && e.add(o.getKey())
      }
      return Xu.toCoordinateArray(e)
    },
    ac.prototype.addEndpoint = function (t) {
      var e = this._endpointMap.get(t);
      null === e && (e = new uc,
          this._endpointMap.put(t, e)),
        e.count++
    },
    ac.prototype.interfaces_ = function () {
      return []
    },
    ac.prototype.getClass = function () {
      return ac
    },
    ac.getBoundary = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return new ac(t).getBoundary()
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return new ac(e, n).getBoundary()
      }
    };
  var uc = function () {
    this.count = null
  };
  uc.prototype.interfaces_ = function () {
      return []
    },
    uc.prototype.getClass = function () {
      return uc
    };
  var cc = function () {},
    hc = {
      NEWLINE: {
        configurable: !0
      },
      SIMPLE_ORDINATE_FORMAT: {
        configurable: !0
      }
    };
  cc.prototype.interfaces_ = function () {
      return []
    },
    cc.prototype.getClass = function () {
      return cc
    },
    cc.chars = function (t, e) {
      for (var n = new Array(e).fill(null), r = 0; r < e; r++)
        n[r] = t;
      return String(n)
    },
    cc.getStackTrace = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = new function () {},
          n = new function () {}
          (e);
        return t.printStackTrace(n),
          e.toString()
      }
      if (2 === arguments.length) {
        for (var r = arguments[0], i = arguments[1], o = "", s = new function () {}
            (new function () {}
              (cc.getStackTrace(r))), a = 0; a < i; a++)
          try {
            o += s.readLine() + cc.NEWLINE
          } catch (t) {
            if (!(t instanceof wi))
              throw t;
            _u.shouldNeverReachHere()
          }
        return o
      }
    },
    cc.split = function (t, e) {
      for (var n = e.length, r = new ku, i = "" + t, o = i.indexOf(e); 0 <= o;) {
        var s = i.substring(0, o);
        r.add(s),
          o = (i = i.substring(o + n)).indexOf(e)
      }
      0 < i.length && r.add(i);
      for (var a = new Array(r.size()).fill(null), u = 0; u < a.length; u++)
        a[u] = r.get(u);
      return a
    },
    cc.toString = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return cc.SIMPLE_ORDINATE_FORMAT.format(t)
      }
    },
    cc.spaces = function (t) {
      return cc.chars(" ", t)
    },
    hc.NEWLINE.get = function () {
      return su.getProperty("line.separator")
    },
    hc.SIMPLE_ORDINATE_FORMAT.get = function () {
      return new function () {}
        ("0.#")
    },
    Object.defineProperties(cc, hc);
  var lc = function () {};
  lc.prototype.interfaces_ = function () {
      return []
    },
    lc.prototype.getClass = function () {
      return lc
    },
    lc.copyCoord = function (t, e, n, r) {
      for (var i = Math.min(t.getDimension(), n.getDimension()), o = 0; o < i; o++)
        n.setOrdinate(r, o, t.getOrdinate(e, o))
    },
    lc.isRing = function (t) {
      var e = t.size();
      return 0 === e || !(e <= 3) && t.getOrdinate(0, nu.X) === t.getOrdinate(e - 1, nu.X) && t.getOrdinate(0, nu.Y) === t.getOrdinate(e - 1, nu.Y)
    },
    lc.isEqual = function (t, e) {
      var n = t.size();
      if (n !== e.size())
        return !1;
      for (var r = Math.min(t.getDimension(), e.getDimension()), i = 0; i < n; i++)
        for (var o = 0; o < r; o++) {
          var s = t.getOrdinate(i, o),
            a = e.getOrdinate(i, o);
          if (!(t.getOrdinate(i, o) === e.getOrdinate(i, o) || Da.isNaN(s) && Da.isNaN(a)))
            return !1
        }
      return !0
    },
    lc.extend = function (t, e, n) {
      var r = t.create(n, e.getDimension()),
        i = e.size();
      if (lc.copy(e, 0, r, 0, i),
        0 < i)
        for (var o = i; o < n; o++)
          lc.copy(e, i - 1, r, o, 1);
      return r
    },
    lc.reverse = function (t) {
      for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++)
        lc.swap(t, r, e - r)
    },
    lc.swap = function (t, e, n) {
      if (e === n)
        return null;
      for (var r = 0; r < t.getDimension(); r++) {
        var i = t.getOrdinate(e, r);
        t.setOrdinate(e, r, t.getOrdinate(n, r)),
          t.setOrdinate(n, r, i)
      }
    },
    lc.copy = function (t, e, n, r, i) {
      for (var o = 0; o < i; o++)
        lc.copyCoord(t, e + o, n, r + o)
    },
    lc.toString = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = t.size();
        if (0 === e)
          return "()";
        var n = t.getDimension(),
          r = new Ja;
        r.append("(");
        for (var i = 0; i < e; i++) {
          0 < i && r.append(" ");
          for (var o = 0; o < n; o++)
            0 < o && r.append(","),
            r.append(cc.toString(t.getOrdinate(i, o)))
        }
        return r.append(")"),
          r.toString()
      }
    },
    lc.ensureValidRing = function (t, e) {
      var n = e.size();
      return 0 === n ? e : n <= 3 ? lc.createClosedRing(t, e, 4) : e.getOrdinate(0, nu.X) === e.getOrdinate(n - 1, nu.X) && e.getOrdinate(0, nu.Y) === e.getOrdinate(n - 1, nu.Y) ? e : lc.createClosedRing(t, e, n + 1)
    },
    lc.createClosedRing = function (t, e, n) {
      var r = t.create(n, e.getDimension()),
        i = e.size();
      lc.copy(e, 0, r, 0, i);
      for (var o = i; o < n; o++)
        lc.copy(e, 0, r, o, 1);
      return r
    };
  var pc = function (i) {
      function e(t, e) {
        i.call(this, e),
          this._points = null,
          this.init(t)
      }
      i && (e.__proto__ = i);
      var t = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((e.prototype = Object.create(i && i.prototype)).constructor = e).prototype.computeEnvelopeInternal = function () {
          return this.isEmpty() ? new uu : this._points.expandEnvelope(new uu)
        },
        e.prototype.isRing = function () {
          return this.isClosed() && this.isSimple()
        },
        e.prototype.getSortIndex = function () {
          return i.SORTINDEX_LINESTRING
        },
        e.prototype.getCoordinates = function () {
          return this._points.toCoordinateArray()
        },
        e.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return i.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          if (!this.isEquivalentClass(t))
            return !1;
          var n = t;
          if (this._points.size() !== n._points.size())
            return !1;
          for (var r = 0; r < this._points.size(); r++)
            if (!this.equal(this._points.getCoordinate(r), n._points.getCoordinate(r), e))
              return !1;
          return !0
        },
        e.prototype.normalize = function () {
          for (var t = 0; t < Math.trunc(this._points.size() / 2); t++) {
            var e = this._points.size() - 1 - t;
            if (!this._points.getCoordinate(t).equals(this._points.getCoordinate(e)))
              return 0 < this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e)) && lc.reverse(this._points),
                null
          }
        },
        e.prototype.getCoordinate = function () {
          return this.isEmpty() ? null : this._points.getCoordinate(0)
        },
        e.prototype.getBoundaryDimension = function () {
          return this.isClosed() ? ec.FALSE : 0
        },
        e.prototype.isClosed = function () {
          return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1))
        },
        e.prototype.getEndPoint = function () {
          return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1)
        },
        e.prototype.getDimension = function () {
          return 1
        },
        e.prototype.getLength = function () {
          return bu.computeLength(this._points)
        },
        e.prototype.getNumPoints = function () {
          return this._points.size()
        },
        e.prototype.reverse = function () {
          var t = this._points.copy();
          return lc.reverse(t),
            this.getFactory().createLineString(t)
        },
        e.prototype.compareToSameClass = function () {
          if (1 === arguments.length) {
            for (var t = arguments[0], e = 0, n = 0; e < this._points.size() && n < t._points.size();) {
              var r = this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));
              if (0 !== r)
                return r;
              e++,
              n++
            }
            return e < this._points.size() ? 1 : n < t._points.size() ? -1 : 0
          }
          if (2 === arguments.length) {
            var i = arguments[0];
            return arguments[1].compare(this._points, i._points)
          }
        },
        e.prototype.apply = function () {
          if (Va(arguments[0], Lu))
            for (var t = arguments[0], e = 0; e < this._points.size(); e++)
              t.filter(this._points.getCoordinate(e));
          else if (Va(arguments[0], ic)) {
            var n = arguments[0];
            if (0 === this._points.size())
              return null;
            for (var r = 0; r < this._points.size() && (n.filter(this._points, r),
                !n.isDone()); r++)
            ;
            n.isGeometryChanged() && this.geometryChanged()
          } else
            Va(arguments[0], rc) ? arguments[0].filter(this) : Va(arguments[0], Nu) && arguments[0].filter(this)
        },
        e.prototype.getBoundary = function () {
          return new ac(this).getBoundary()
        },
        e.prototype.isEquivalentClass = function (t) {
          return t instanceof e
        },
        e.prototype.clone = function () {
          var t = i.prototype.clone.call(this);
          return t._points = this._points.clone(),
            t
        },
        e.prototype.getCoordinateN = function (t) {
          return this._points.getCoordinate(t)
        },
        e.prototype.getGeometryType = function () {
          return "LineString"
        },
        e.prototype.copy = function () {
          return new e(this._points.copy(), this._factory)
        },
        e.prototype.getCoordinateSequence = function () {
          return this._points
        },
        e.prototype.isEmpty = function () {
          return 0 === this._points.size()
        },
        e.prototype.init = function (t) {
          if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])),
            1 === t.size())
            throw new Aa("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");
          this._points = t
        },
        e.prototype.isCoordinate = function (t) {
          for (var e = 0; e < this._points.size(); e++)
            if (this._points.getCoordinate(e).equals(t))
              return !0;
          return !1
        },
        e.prototype.getStartPoint = function () {
          return this.isEmpty() ? null : this.getPointN(0)
        },
        e.prototype.getPointN = function (t) {
          return this.getFactory().createPoint(this._points.getCoordinate(t))
        },
        e.prototype.interfaces_ = function () {
          return [Qu]
        },
        e.prototype.getClass = function () {
          return e
        },
        t.serialVersionUID.get = function () {
          return 0x2b2b51ba435c8e00
        },
        Object.defineProperties(e, t),
        e
    }(Cu),
    fc = function () {};
  fc.prototype.interfaces_ = function () {
      return []
    },
    fc.prototype.getClass = function () {
      return fc
    };
  var gc = function (n) {
      function t(t, e) {
        n.call(this, e),
          this._coordinates = t || null,
          this.init(this._coordinates)
      }
      n && (t.__proto__ = n);
      var e = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.computeEnvelopeInternal = function () {
          if (this.isEmpty())
            return new uu;
          var t = new uu;
          return t.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)),
            t
        },
        t.prototype.getSortIndex = function () {
          return n.SORTINDEX_POINT
        },
        t.prototype.getCoordinates = function () {
          return this.isEmpty() ? [] : [this.getCoordinate()]
        },
        t.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return n.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          return !!this.isEquivalentClass(t) && (!(!this.isEmpty() || !t.isEmpty()) || this.isEmpty() === t.isEmpty() && this.equal(t.getCoordinate(), this.getCoordinate(), e))
        },
        t.prototype.normalize = function () {},
        t.prototype.getCoordinate = function () {
          return 0 !== this._coordinates.size() ? this._coordinates.getCoordinate(0) : null
        },
        t.prototype.getBoundaryDimension = function () {
          return ec.FALSE
        },
        t.prototype.getDimension = function () {
          return 0
        },
        t.prototype.getNumPoints = function () {
          return this.isEmpty() ? 0 : 1
        },
        t.prototype.reverse = function () {
          return this.copy()
        },
        t.prototype.getX = function () {
          if (null === this.getCoordinate())
            throw new Error("getX called on empty Point");
          return this.getCoordinate().x
        },
        t.prototype.compareToSameClass = function () {
          if (1 === arguments.length) {
            var t = arguments[0];
            return this.getCoordinate().compareTo(t.getCoordinate())
          }
          if (2 === arguments.length) {
            var e = arguments[0];
            return arguments[1].compare(this._coordinates, e._coordinates)
          }
        },
        t.prototype.apply = function () {
          if (Va(arguments[0], Lu)) {
            var t = arguments[0];
            if (this.isEmpty())
              return null;
            t.filter(this.getCoordinate())
          } else if (Va(arguments[0], ic)) {
            var e = arguments[0];
            if (this.isEmpty())
              return null;
            e.filter(this._coordinates, 0),
              e.isGeometryChanged() && this.geometryChanged()
          } else
            Va(arguments[0], rc) ? arguments[0].filter(this) : Va(arguments[0], Nu) && arguments[0].filter(this)
        },
        t.prototype.getBoundary = function () {
          return this.getFactory().createGeometryCollection(null)
        },
        t.prototype.clone = function () {
          var t = n.prototype.clone.call(this);
          return t._coordinates = this._coordinates.clone(),
            t
        },
        t.prototype.getGeometryType = function () {
          return "Point"
        },
        t.prototype.copy = function () {
          return new t(this._coordinates.copy(), this._factory)
        },
        t.prototype.getCoordinateSequence = function () {
          return this._coordinates
        },
        t.prototype.getY = function () {
          if (null === this.getCoordinate())
            throw new Error("getY called on empty Point");
          return this.getCoordinate().y
        },
        t.prototype.isEmpty = function () {
          return 0 === this._coordinates.size()
        },
        t.prototype.init = function (t) {
          null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])),
            _u.isTrue(t.size() <= 1),
            this._coordinates = t
        },
        t.prototype.isSimple = function () {
          return !0
        },
        t.prototype.interfaces_ = function () {
          return [fc]
        },
        t.prototype.getClass = function () {
          return t
        },
        e.serialVersionUID.get = function () {
          return 0x44077bad161cbc00
        },
        Object.defineProperties(t, e),
        t
    }(Cu),
    dc = function () {};
  dc.prototype.interfaces_ = function () {
      return []
    },
    dc.prototype.getClass = function () {
      return dc
    };
  var yc = function (s) {
      function r(t, e, n) {
        if (s.call(this, n),
          this._shell = null,
          (this._holes = null) === t && (t = this.getFactory().createLinearRing()),
          null === e && (e = []),
          s.hasNullElements(e))
          throw new Aa("holes must not contain null elements");
        if (t.isEmpty() && s.hasNonEmptyElements(e))
          throw new Aa("shell is empty but holes are not");
        this._shell = t,
          this._holes = e
      }
      s && (r.__proto__ = s);
      var t = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((r.prototype = Object.create(s && s.prototype)).constructor = r).prototype.computeEnvelopeInternal = function () {
          return this._shell.getEnvelopeInternal()
        },
        r.prototype.getSortIndex = function () {
          return s.SORTINDEX_POLYGON
        },
        r.prototype.getCoordinates = function () {
          if (this.isEmpty())
            return [];
          for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = this._shell.getCoordinates(), r = 0; r < n.length; r++)
            t[++e] = n[r];
          for (var i = 0; i < this._holes.length; i++)
            for (var o = this._holes[i].getCoordinates(), s = 0; s < o.length; s++)
              t[++e] = o[s];
          return t
        },
        r.prototype.getArea = function () {
          var t = 0;
          t += Math.abs(bu.signedArea(this._shell.getCoordinateSequence()));
          for (var e = 0; e < this._holes.length; e++)
            t -= Math.abs(bu.signedArea(this._holes[e].getCoordinateSequence()));
          return t
        },
        r.prototype.isRectangle = function () {
          if (0 !== this.getNumInteriorRing())
            return !1;
          if (null === this._shell)
            return !1;
          if (5 !== this._shell.getNumPoints())
            return !1;
          for (var t = this._shell.getCoordinateSequence(), e = this.getEnvelopeInternal(), n = 0; n < 5; n++) {
            var r = t.getX(n);
            if (r !== e.getMinX() && r !== e.getMaxX())
              return !1;
            var i = t.getY(n);
            if (i !== e.getMinY() && i !== e.getMaxY())
              return !1
          }
          for (var o = t.getX(0), s = t.getY(0), a = 1; a <= 4; a++) {
            var u = t.getX(a),
              c = t.getY(a);
            if (u !== o == (c !== s))
              return !1;
            o = u,
              s = c
          }
          return !0
        },
        r.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return s.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          if (!this.isEquivalentClass(t))
            return !1;
          var n = t,
            r = this._shell,
            i = n._shell;
          if (!r.equalsExact(i, e))
            return !1;
          if (this._holes.length !== n._holes.length)
            return !1;
          for (var o = 0; o < this._holes.length; o++)
            if (!this._holes[o].equalsExact(n._holes[o], e))
              return !1;
          return !0
        },
        r.prototype.normalize = function () {
          if (0 === arguments.length) {
            this.normalize(this._shell, !0);
            for (var t = 0; t < this._holes.length; t++)
              this.normalize(this._holes[t], !1);
            tc.sort(this._holes)
          } else if (2 === arguments.length) {
            var e = arguments[0],
              n = arguments[1];
            if (e.isEmpty())
              return null;
            var r = new Array(e.getCoordinates().length - 1).fill(null);
            su.arraycopy(e.getCoordinates(), 0, r, 0, r.length);
            var i = Xu.minCoordinate(e.getCoordinates());
            Xu.scroll(r, i),
              su.arraycopy(r, 0, e.getCoordinates(), 0, r.length),
              e.getCoordinates()[r.length] = r[0],
              bu.isCCW(e.getCoordinates()) === n && Xu.reverse(e.getCoordinates())
          }
        },
        r.prototype.getCoordinate = function () {
          return this._shell.getCoordinate()
        },
        r.prototype.getNumInteriorRing = function () {
          return this._holes.length
        },
        r.prototype.getBoundaryDimension = function () {
          return 1
        },
        r.prototype.getDimension = function () {
          return 2
        },
        r.prototype.getLength = function () {
          var t = 0;
          t += this._shell.getLength();
          for (var e = 0; e < this._holes.length; e++)
            t += this._holes[e].getLength();
          return t
        },
        r.prototype.getNumPoints = function () {
          for (var t = this._shell.getNumPoints(), e = 0; e < this._holes.length; e++)
            t += this._holes[e].getNumPoints();
          return t
        },
        r.prototype.reverse = function () {
          var t = this.copy();
          t._shell = this._shell.copy().reverse(),
            t._holes = new Array(this._holes.length).fill(null);
          for (var e = 0; e < this._holes.length; e++)
            t._holes[e] = this._holes[e].copy().reverse();
          return t
        },
        r.prototype.convexHull = function () {
          return this.getExteriorRing().convexHull()
        },
        r.prototype.compareToSameClass = function () {
          if (1 === arguments.length) {
            var t = arguments[0],
              e = this._shell,
              n = t._shell;
            return e.compareToSameClass(n)
          }
          if (2 === arguments.length) {
            var r = arguments[0],
              i = arguments[1],
              o = r,
              s = this._shell,
              a = o._shell,
              u = s.compareToSameClass(a, i);
            if (0 !== u)
              return u;
            for (var c = this.getNumInteriorRing(), h = o.getNumInteriorRing(), l = 0; l < c && l < h;) {
              var p = this.getInteriorRingN(l),
                f = o.getInteriorRingN(l),
                g = p.compareToSameClass(f, i);
              if (0 !== g)
                return g;
              l++
            }
            return l < c ? 1 : l < h ? -1 : 0
          }
        },
        r.prototype.apply = function (t) {
          if (Va(t, Lu)) {
            this._shell.apply(t);
            for (var e = 0; e < this._holes.length; e++)
              this._holes[e].apply(t)
          } else if (Va(t, ic)) {
            if (this._shell.apply(t),
              !t.isDone())
              for (var n = 0; n < this._holes.length && (this._holes[n].apply(t),
                  !t.isDone()); n++)
            ;
            t.isGeometryChanged() && this.geometryChanged()
          } else if (Va(t, rc))
            t.filter(this);
          else if (Va(t, Nu)) {
            t.filter(this),
              this._shell.apply(t);
            for (var r = 0; r < this._holes.length; r++)
              this._holes[r].apply(t)
          }
        },
        r.prototype.getBoundary = function () {
          if (this.isEmpty())
            return this.getFactory().createMultiLineString();
          var t = new Array(this._holes.length + 1).fill(null);
          t[0] = this._shell;
          for (var e = 0; e < this._holes.length; e++)
            t[e + 1] = this._holes[e];
          return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t)
        },
        r.prototype.clone = function () {
          var t = s.prototype.clone.call(this);
          t._shell = this._shell.clone(),
            t._holes = new Array(this._holes.length).fill(null);
          for (var e = 0; e < this._holes.length; e++)
            t._holes[e] = this._holes[e].clone();
          return t
        },
        r.prototype.getGeometryType = function () {
          return "Polygon"
        },
        r.prototype.copy = function () {
          for (var t = this._shell.copy(), e = new Array(this._holes.length).fill(null), n = 0; n < e.length; n++)
            e[n] = this._holes[n].copy();
          return new r(t, e, this._factory)
        },
        r.prototype.getExteriorRing = function () {
          return this._shell
        },
        r.prototype.isEmpty = function () {
          return this._shell.isEmpty()
        },
        r.prototype.getInteriorRingN = function (t) {
          return this._holes[t]
        },
        r.prototype.interfaces_ = function () {
          return [dc]
        },
        r.prototype.getClass = function () {
          return r
        },
        t.serialVersionUID.get = function () {
          return -0x307ffefd8dc97200
        },
        Object.defineProperties(r, t),
        r
    }(Cu),
    _c = function (n) {
      function r() {
        n.apply(this, arguments)
      }
      n && (r.__proto__ = n);
      var t = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((r.prototype = Object.create(n && n.prototype)).constructor = r).prototype.getSortIndex = function () {
          return Cu.SORTINDEX_MULTIPOINT
        },
        r.prototype.isValid = function () {
          return !0
        },
        r.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return n.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          return !!this.isEquivalentClass(t) && n.prototype.equalsExact.call(this, t, e)
        },
        r.prototype.getCoordinate = function () {
          if (1 !== arguments.length)
            return n.prototype.getCoordinate.apply(this, arguments);
          var t = arguments[0];
          return this._geometries[t].getCoordinate()
        },
        r.prototype.getBoundaryDimension = function () {
          return ec.FALSE
        },
        r.prototype.getDimension = function () {
          return 0
        },
        r.prototype.getBoundary = function () {
          return this.getFactory().createGeometryCollection(null)
        },
        r.prototype.getGeometryType = function () {
          return "MultiPoint"
        },
        r.prototype.copy = function () {
          for (var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)
            t[e] = this._geometries[e].copy();
          return new r(t, this._factory)
        },
        r.prototype.interfaces_ = function () {
          return [fc]
        },
        r.prototype.getClass = function () {
          return r
        },
        t.serialVersionUID.get = function () {
          return -0x6fb1ed4162e0fc00
        },
        Object.defineProperties(r, t),
        r
    }(oc),
    mc = function (n) {
      function t(t, e) {
        t instanceof ka && e instanceof Ac && (t = e.getCoordinateSequenceFactory().create(t)),
          n.call(this, t, e),
          this.validateConstruction()
      }
      n && (t.__proto__ = n);
      var e = {
        MINIMUM_VALID_SIZE: {
          configurable: !0
        },
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.getSortIndex = function () {
          return Cu.SORTINDEX_LINEARRING
        },
        t.prototype.getBoundaryDimension = function () {
          return ec.FALSE
        },
        t.prototype.isClosed = function () {
          return !!this.isEmpty() || n.prototype.isClosed.call(this)
        },
        t.prototype.reverse = function () {
          var t = this._points.copy();
          return lc.reverse(t),
            this.getFactory().createLinearRing(t)
        },
        t.prototype.validateConstruction = function () {
          if (!this.isEmpty() && !n.prototype.isClosed.call(this))
            throw new Aa("Points of LinearRing do not form a closed linestring");
          if (1 <= this.getCoordinateSequence().size() && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
            throw new Aa("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)")
        },
        t.prototype.getGeometryType = function () {
          return "LinearRing"
        },
        t.prototype.copy = function () {
          return new t(this._points.copy(), this._factory)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        e.MINIMUM_VALID_SIZE.get = function () {
          return 4
        },
        e.serialVersionUID.get = function () {
          return -0x3b229e262367a600
        },
        Object.defineProperties(t, e),
        t
    }(pc),
    vc = function (n) {
      function r() {
        n.apply(this, arguments)
      }
      n && (r.__proto__ = n);
      var t = {
        serialVersionUID: {
          configurable: !0
        }
      };
      return ((r.prototype = Object.create(n && n.prototype)).constructor = r).prototype.getSortIndex = function () {
          return Cu.SORTINDEX_MULTIPOLYGON
        },
        r.prototype.equalsExact = function () {
          if (2 !== arguments.length)
            return n.prototype.equalsExact.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          return !!this.isEquivalentClass(t) && n.prototype.equalsExact.call(this, t, e)
        },
        r.prototype.getBoundaryDimension = function () {
          return 1
        },
        r.prototype.getDimension = function () {
          return 2
        },
        r.prototype.reverse = function () {
          for (var t = this._geometries.length, e = new Array(t).fill(null), n = 0; n < this._geometries.length; n++)
            e[n] = this._geometries[n].reverse();
          return this.getFactory().createMultiPolygon(e)
        },
        r.prototype.getBoundary = function () {
          if (this.isEmpty())
            return this.getFactory().createMultiLineString();
          for (var t = new ku, e = 0; e < this._geometries.length; e++)
            for (var n = this._geometries[e].getBoundary(), r = 0; r < n.getNumGeometries(); r++)
              t.add(n.getGeometryN(r));
          var i = new Array(t.size()).fill(null);
          return this.getFactory().createMultiLineString(t.toArray(i))
        },
        r.prototype.getGeometryType = function () {
          return "MultiPolygon"
        },
        r.prototype.copy = function () {
          for (var t = new Array(this._geometries.length).fill(null), e = 0; e < t.length; e++)
            t[e] = this._geometries[e].copy();
          return new r(t, this._factory)
        },
        r.prototype.interfaces_ = function () {
          return [dc]
        },
        r.prototype.getClass = function () {
          return r
        },
        t.serialVersionUID.get = function () {
          return -0x7a5aa1369171980
        },
        Object.defineProperties(r, t),
        r
    }(oc),
    xc = function (t) {
      this._factory = t || null,
        this._isUserDataCopied = !1
    },
    Ec = {
      NoOpGeometryOperation: {
        configurable: !0
      },
      CoordinateOperation: {
        configurable: !0
      },
      CoordinateSequenceOperation: {
        configurable: !0
      }
    };
  xc.prototype.setCopyUserData = function (t) {
      this._isUserDataCopied = t
    },
    xc.prototype.edit = function (t, e) {
      if (null === t)
        return null;
      var n = this.editInternal(t, e);
      return this._isUserDataCopied && n.setUserData(t.getUserData()),
        n
    },
    xc.prototype.editInternal = function (t, e) {
      return null === this._factory && (this._factory = t.getFactory()),
        t instanceof oc ? this.editGeometryCollection(t, e) : t instanceof yc ? this.editPolygon(t, e) : t instanceof gc ? e.edit(t, this._factory) : t instanceof pc ? e.edit(t, this._factory) : (_u.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()),
          null)
    },
    xc.prototype.editGeometryCollection = function (t, e) {
      for (var n = e.edit(t, this._factory), r = new ku, i = 0; i < n.getNumGeometries(); i++) {
        var o = this.edit(n.getGeometryN(i), e);
        null === o || o.isEmpty() || r.add(o)
      }
      return n.getClass() === _c ? this._factory.createMultiPoint(r.toArray([])) : n.getClass() === sc ? this._factory.createMultiLineString(r.toArray([])) : n.getClass() === vc ? this._factory.createMultiPolygon(r.toArray([])) : this._factory.createGeometryCollection(r.toArray([]))
    },
    xc.prototype.editPolygon = function (t, e) {
      var n = e.edit(t, this._factory);
      if (null === n && (n = this._factory.createPolygon(null)),
        n.isEmpty())
        return n;
      var r = this.edit(n.getExteriorRing(), e);
      if (null === r || r.isEmpty())
        return this._factory.createPolygon();
      for (var i = new ku, o = 0; o < n.getNumInteriorRing(); o++) {
        var s = this.edit(n.getInteriorRingN(o), e);
        null === s || s.isEmpty() || i.add(s)
      }
      return this._factory.createPolygon(r, i.toArray([]))
    },
    xc.prototype.interfaces_ = function () {
      return []
    },
    xc.prototype.getClass = function () {
      return xc
    },
    xc.GeometryEditorOperation = function () {},
    Ec.NoOpGeometryOperation.get = function () {
      return wc
    },
    Ec.CoordinateOperation.get = function () {
      return bc
    },
    Ec.CoordinateSequenceOperation.get = function () {
      return Ic
    },
    Object.defineProperties(xc, Ec);
  var wc = function () {};
  wc.prototype.edit = function (t, e) {
      return t
    },
    wc.prototype.interfaces_ = function () {
      return [xc.GeometryEditorOperation]
    },
    wc.prototype.getClass = function () {
      return wc
    };
  var bc = function () {};
  bc.prototype.edit = function (t, e) {
      var n = this.editCoordinates(t.getCoordinates(), t);
      return null === n ? t : t instanceof mc ? e.createLinearRing(n) : t instanceof pc ? e.createLineString(n) : t instanceof gc ? 0 < n.length ? e.createPoint(n[0]) : e.createPoint() : t
    },
    bc.prototype.interfaces_ = function () {
      return [xc.GeometryEditorOperation]
    },
    bc.prototype.getClass = function () {
      return bc
    };
  var Ic = function () {};
  Ic.prototype.edit = function (t, e) {
      return t instanceof mc ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof pc ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof gc ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t
    },
    Ic.prototype.interfaces_ = function () {
      return [xc.GeometryEditorOperation]
    },
    Ic.prototype.getClass = function () {
      return Ic
    };
  var Nc = function () {
      if (this._dimension = 3,
        this._coordinates = null,
        1 === arguments.length) {
        if (arguments[0] instanceof Array)
          this._coordinates = arguments[0],
          this._dimension = 3;
        else if (Number.isInteger(arguments[0])) {
          var t = arguments[0];
          this._coordinates = new Array(t).fill(null);
          for (var e = 0; e < t; e++)
            this._coordinates[e] = new ka
        } else if (Va(arguments[0], nu)) {
          var n = arguments[0];
          if (null === n)
            return this._coordinates = new Array(0).fill(null),
              null;
          this._dimension = n.getDimension(),
            this._coordinates = new Array(n.size()).fill(null);
          for (var r = 0; r < this._coordinates.length; r++)
            this._coordinates[r] = n.getCoordinateCopy(r)
        }
      } else if (2 === arguments.length)
        if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
          var i = arguments[0],
            o = arguments[1];
          this._coordinates = i,
            this._dimension = o,
            null === i && (this._coordinates = new Array(0).fill(null))
        } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        var s = arguments[0],
          a = arguments[1];
        this._coordinates = new Array(s).fill(null),
          this._dimension = a;
        for (var u = 0; u < s; u++)
          this._coordinates[u] = new ka
      }
    },
    Cc = {
      serialVersionUID: {
        configurable: !0
      }
    };
  Nc.prototype.setOrdinate = function (t, e, n) {
      switch (e) {
        case nu.X:
          this._coordinates[t].x = n;
          break;
        case nu.Y:
          this._coordinates[t].y = n;
          break;
        case nu.Z:
          this._coordinates[t].z = n;
          break;
        default:
          throw new Aa("invalid ordinateIndex")
      }
    },
    Nc.prototype.size = function () {
      return this._coordinates.length
    },
    Nc.prototype.getOrdinate = function (t, e) {
      switch (e) {
        case nu.X:
          return this._coordinates[t].x;
        case nu.Y:
          return this._coordinates[t].y;
        case nu.Z:
          return this._coordinates[t].z
      }
      return Da.NaN
    },
    Nc.prototype.getCoordinate = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this._coordinates[t]
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        n.x = this._coordinates[e].x,
          n.y = this._coordinates[e].y,
          n.z = this._coordinates[e].z
      }
    },
    Nc.prototype.getCoordinateCopy = function (t) {
      return new ka(this._coordinates[t])
    },
    Nc.prototype.getDimension = function () {
      return this._dimension
    },
    Nc.prototype.getX = function (t) {
      return this._coordinates[t].x
    },
    Nc.prototype.clone = function () {
      for (var t = new Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++)
        t[e] = this._coordinates[e].clone();
      return new Nc(t, this._dimension)
    },
    Nc.prototype.expandEnvelope = function (t) {
      for (var e = 0; e < this._coordinates.length; e++)
        t.expandToInclude(this._coordinates[e]);
      return t
    },
    Nc.prototype.copy = function () {
      for (var t = new Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++)
        t[e] = this._coordinates[e].copy();
      return new Nc(t, this._dimension)
    },
    Nc.prototype.toString = function () {
      if (0 < this._coordinates.length) {
        var t = new Ja(17 * this._coordinates.length);
        t.append("("),
          t.append(this._coordinates[0]);
        for (var e = 1; e < this._coordinates.length; e++)
          t.append(", "),
          t.append(this._coordinates[e]);
        return t.append(")"),
          t.toString()
      }
      return "()"
    },
    Nc.prototype.getY = function (t) {
      return this._coordinates[t].y
    },
    Nc.prototype.toCoordinateArray = function () {
      return this._coordinates
    },
    Nc.prototype.interfaces_ = function () {
      return [nu, hi]
    },
    Nc.prototype.getClass = function () {
      return Nc
    },
    Cc.serialVersionUID.get = function () {
      return -0xcb44a778db18e00
    },
    Object.defineProperties(Nc, Cc);
  var Sc = function () {},
    Mc = {
      serialVersionUID: {
        configurable: !0
      },
      instanceObject: {
        configurable: !0
      }
    };
  Sc.prototype.readResolve = function () {
      return Sc.instance()
    },
    Sc.prototype.create = function () {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return new Nc(t)
        }
        if (Va(arguments[0], nu)) {
          var e = arguments[0];
          return new Nc(e)
        }
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        return 3 < r && (r = 3),
          r < 2 ? new Nc(n) : new Nc(n, r)
      }
    },
    Sc.prototype.interfaces_ = function () {
      return [Xa, hi]
    },
    Sc.prototype.getClass = function () {
      return Sc
    },
    Sc.instance = function () {
      return Sc.instanceObject
    },
    Mc.serialVersionUID.get = function () {
      return -0x38e49fa6cf6f2e00
    },
    Mc.instanceObject.get = function () {
      return new Sc
    },
    Object.defineProperties(Sc, Mc);
  var Lc = function (t) {
      function e() {
        t.call(this),
          this.map_ = new Map
      }
      return t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.get = function (t) {
          return this.map_.get(t) || null
        },
        e.prototype.put = function (t, e) {
          return this.map_.set(t, e),
            e
        },
        e.prototype.values = function () {
          for (var t = new ku, e = this.map_.values(), n = e.next(); !n.done;)
            t.add(n.value),
            n = e.next();
          return t
        },
        e.prototype.entrySet = function () {
          var e = new Ju;
          return this.map_.entries().forEach(function (t) {
              return e.add(t)
            }),
            e
        },
        e.prototype.size = function () {
          return this.map_.size()
        },
        e
    }(Hu),
    Pc = function t() {
      if (this._modelType = null,
        this._scale = null,
        0 === arguments.length)
        this._modelType = t.FLOATING;
      else if (1 === arguments.length)
        if (arguments[0] instanceof Rc) {
          var e = arguments[0];
          (this._modelType = e) === t.FIXED && this.setScale(1)
        } else if ("number" == typeof arguments[0]) {
        var n = arguments[0];
        this._modelType = t.FIXED,
          this.setScale(n)
      } else if (arguments[0] instanceof t) {
        var r = arguments[0];
        this._modelType = r._modelType,
          this._scale = r._scale
      }
    },
    Oc = {
      serialVersionUID: {
        configurable: !0
      },
      maximumPreciseValue: {
        configurable: !0
      }
    };
  Pc.prototype.equals = function (t) {
      if (!(t instanceof Pc))
        return !1;
      var e = t;
      return this._modelType === e._modelType && this._scale === e._scale
    },
    Pc.prototype.compareTo = function (t) {
      var e = t,
        n = this.getMaximumSignificantDigits(),
        r = e.getMaximumSignificantDigits();
      return new Za(n).compareTo(new Za(r))
    },
    Pc.prototype.getScale = function () {
      return this._scale
    },
    Pc.prototype.isFloating = function () {
      return this._modelType === Pc.FLOATING || this._modelType === Pc.FLOATING_SINGLE
    },
    Pc.prototype.getType = function () {
      return this._modelType
    },
    Pc.prototype.toString = function () {
      var t = "UNKNOWN";
      return this._modelType === Pc.FLOATING ? t = "Floating" : this._modelType === Pc.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === Pc.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"),
        t
    },
    Pc.prototype.makePrecise = function () {
      if ("number" == typeof arguments[0]) {
        var t = arguments[0];
        return Da.isNaN(t) ? t : this._modelType === Pc.FLOATING_SINGLE ? t : this._modelType === Pc.FIXED ? Math.round(t * this._scale) / this._scale : t
      }
      if (arguments[0] instanceof ka) {
        var e = arguments[0];
        if (this._modelType === Pc.FLOATING)
          return null;
        e.x = this.makePrecise(e.x),
          e.y = this.makePrecise(e.y)
      }
    },
    Pc.prototype.getMaximumSignificantDigits = function () {
      var t = 16;
      return this._modelType === Pc.FLOATING ? t = 16 : this._modelType === Pc.FLOATING_SINGLE ? t = 6 : this._modelType === Pc.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))),
        t
    },
    Pc.prototype.setScale = function (t) {
      this._scale = Math.abs(t)
    },
    Pc.prototype.interfaces_ = function () {
      return [hi, qa]
    },
    Pc.prototype.getClass = function () {
      return Pc
    },
    Pc.mostPrecise = function (t, e) {
      return 0 <= t.compareTo(e) ? t : e
    },
    Oc.serialVersionUID.get = function () {
      return 0x6bee6404e9a25c00
    },
    Oc.maximumPreciseValue.get = function () {
      return 9007199254740992
    },
    Object.defineProperties(Pc, Oc);
  var Rc = function t(e) {
      this._name = e || null,
        t.nameToTypeMap.put(e, this)
    },
    Tc = {
      serialVersionUID: {
        configurable: !0
      },
      nameToTypeMap: {
        configurable: !0
      }
    };
  Rc.prototype.readResolve = function () {
      return Rc.nameToTypeMap.get(this._name)
    },
    Rc.prototype.toString = function () {
      return this._name
    },
    Rc.prototype.interfaces_ = function () {
      return [hi]
    },
    Rc.prototype.getClass = function () {
      return Rc
    },
    Tc.serialVersionUID.get = function () {
      return -552860263173159e4
    },
    Tc.nameToTypeMap.get = function () {
      return new Lc
    },
    Object.defineProperties(Rc, Tc),
    Pc.Type = Rc,
    Pc.FIXED = new Rc("FIXED"),
    Pc.FLOATING = new Rc("FLOATING"),
    Pc.FLOATING_SINGLE = new Rc("FLOATING SINGLE");
  var Ac = function t() {
      this._precisionModel = new Pc,
        this._SRID = 0,
        this._coordinateSequenceFactory = t.getDefaultCoordinateSequenceFactory(),
        0 === arguments.length || (1 === arguments.length ? Va(arguments[0], Xa) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof Pc && (this._precisionModel = arguments[0]) : 2 === arguments.length ? (this._precisionModel = arguments[0],
          this._SRID = arguments[1]) : 3 === arguments.length && (this._precisionModel = arguments[0],
          this._SRID = arguments[1],
          this._coordinateSequenceFactory = arguments[2]))
    },
    Dc = {
      serialVersionUID: {
        configurable: !0
      }
    };
  Ac.prototype.toGeometry = function (t) {
      return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new ka(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new ka(t.getMinX(), t.getMinY()), new ka(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new ka(t.getMinX(), t.getMinY()), new ka(t.getMinX(), t.getMaxY()), new ka(t.getMaxX(), t.getMaxY()), new ka(t.getMaxX(), t.getMinY()), new ka(t.getMinX(), t.getMinY())]), null)
    },
    Ac.prototype.createLineString = function (t) {
      return t ? t instanceof Array ? new pc(this.getCoordinateSequenceFactory().create(t), this) : Va(t, nu) ? new pc(t, this) : void 0 : new pc(this.getCoordinateSequenceFactory().create([]), this)
    },
    Ac.prototype.createMultiLineString = function () {
      if (0 === arguments.length)
        return new sc(null, this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return new sc(t, this)
      }
    },
    Ac.prototype.buildGeometry = function (t) {
      for (var e = null, n = !1, r = !1, i = t.iterator(); i.hasNext();) {
        var o = i.next(),
          s = o.getClass();
        null === e && (e = s),
          s !== e && (n = !0),
          o.isGeometryCollectionOrDerived() && (r = !0)
      }
      if (null === e)
        return this.createGeometryCollection();
      if (n || r)
        return this.createGeometryCollection(Ac.toGeometryArray(t));
      var a = t.iterator().next();
      if (1 < t.size()) {
        if (a instanceof yc)
          return this.createMultiPolygon(Ac.toPolygonArray(t));
        if (a instanceof pc)
          return this.createMultiLineString(Ac.toLineStringArray(t));
        if (a instanceof gc)
          return this.createMultiPoint(Ac.toPointArray(t));
        _u.shouldNeverReachHere("Unhandled class: " + a.getClass().getName())
      }
      return a
    },
    Ac.prototype.createMultiPointFromCoords = function (t) {
      return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null)
    },
    Ac.prototype.createPoint = function () {
      if (0 === arguments.length)
        return this.createPoint(this.getCoordinateSequenceFactory().create([]));
      if (1 === arguments.length) {
        if (arguments[0] instanceof ka) {
          var t = arguments[0];
          return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([t]) : null)
        }
        if (Va(arguments[0], nu)) {
          var e = arguments[0];
          return new gc(e, this)
        }
      }
    },
    Ac.prototype.getCoordinateSequenceFactory = function () {
      return this._coordinateSequenceFactory
    },
    Ac.prototype.createPolygon = function () {
      if (0 === arguments.length)
        return new yc(null, null, this);
      if (1 === arguments.length) {
        if (Va(arguments[0], nu)) {
          var t = arguments[0];
          return this.createPolygon(this.createLinearRing(t))
        }
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return this.createPolygon(this.createLinearRing(e))
        }
        if (arguments[0] instanceof mc) {
          var n = arguments[0];
          return this.createPolygon(n, null)
        }
      } else if (2 === arguments.length) {
        var r = arguments[0],
          i = arguments[1];
        return new yc(r, i, this)
      }
    },
    Ac.prototype.getSRID = function () {
      return this._SRID
    },
    Ac.prototype.createGeometryCollection = function () {
      if (0 === arguments.length)
        return new oc(null, this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return new oc(t, this)
      }
    },
    Ac.prototype.createGeometry = function (t) {
      return new xc(this).edit(t, {
        edit: function () {
          if (2 === arguments.length) {
            var t = arguments[0];
            return this._coordinateSequenceFactory.create(t)
          }
        }
      })
    },
    Ac.prototype.getPrecisionModel = function () {
      return this._precisionModel
    },
    Ac.prototype.createLinearRing = function () {
      if (0 === arguments.length)
        return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null)
        }
        if (Va(arguments[0], nu)) {
          var e = arguments[0];
          return new mc(e, this)
        }
      }
    },
    Ac.prototype.createMultiPolygon = function () {
      if (0 === arguments.length)
        return new vc(null, this);
      if (1 === arguments.length) {
        var t = arguments[0];
        return new vc(t, this)
      }
    },
    Ac.prototype.createMultiPoint = function () {
      if (0 === arguments.length)
        return new _c(null, this);
      if (1 === arguments.length) {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return new _c(t, this)
        }
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return this.createMultiPoint(null !== e ? this.getCoordinateSequenceFactory().create(e) : null)
        }
        if (Va(arguments[0], nu)) {
          var n = arguments[0];
          if (null === n)
            return this.createMultiPoint(new Array(0).fill(null));
          for (var r = new Array(n.size()).fill(null), i = 0; i < n.size(); i++) {
            var o = this.getCoordinateSequenceFactory().create(1, n.getDimension());
            lc.copy(n, i, o, 0, 1),
              r[i] = this.createPoint(o)
          }
          return this.createMultiPoint(r)
        }
      }
    },
    Ac.prototype.interfaces_ = function () {
      return [hi]
    },
    Ac.prototype.getClass = function () {
      return Ac
    },
    Ac.toMultiPolygonArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.toGeometryArray = function (t) {
      if (null === t)
        return null;
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.getDefaultCoordinateSequenceFactory = function () {
      return Sc.instance()
    },
    Ac.toMultiLineStringArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.toLineStringArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.toMultiPointArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.toLinearRingArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.toPointArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.toPolygonArray = function (t) {
      var e = new Array(t.size()).fill(null);
      return t.toArray(e)
    },
    Ac.createPointFromInternalCoord = function (t, e) {
      return e.getPrecisionModel().makePrecise(t),
        e.getFactory().createPoint(t)
    },
    Dc.serialVersionUID.get = function () {
      return -0x5ea75f2051eeb400
    },
    Object.defineProperties(Ac, Dc);
  var Fc = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"],
    qc = function (t) {
      this.geometryFactory = t || new Ac
    };
  qc.prototype.read = function (t) {
      var e, n = (e = "string" == typeof t ? JSON.parse(t) : t).type;
      if (!Gc[n])
        throw new Error("Unknown GeoJSON type: " + e.type);
      return -1 !== Fc.indexOf(n) ? Gc[n].apply(this, [e.coordinates]) : "GeometryCollection" === n ? Gc[n].apply(this, [e.geometries]) : Gc[n].apply(this, [e])
    },
    qc.prototype.write = function (t) {
      var e = t.getGeometryType();
      if (!Bc[e])
        throw new Error("Geometry is not supported");
      return Bc[e].apply(this, [t])
    };
  var Gc = {
      Feature: function (t) {
        var e = {};
        for (var n in t)
          e[n] = t[n];
        if (t.geometry) {
          var r = t.geometry.type;
          if (!Gc[r])
            throw new Error("Unknown GeoJSON type: " + t.type);
          e.geometry = this.read(t.geometry)
        }
        return t.bbox && (e.bbox = Gc.bbox.apply(this, [t.bbox])),
          e
      },
      FeatureCollection: function (t) {
        var e = {};
        if (t.features) {
          e.features = [];
          for (var n = 0; n < t.features.length; ++n)
            e.features.push(this.read(t.features[n]))
        }
        return t.bbox && (e.bbox = this.parse.bbox.apply(this, [t.bbox])),
          e
      },
      coordinates: function (t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          var r = t[n];
          e.push(new ka(r[0], r[1]))
        }
        return e
      },
      bbox: function (t) {
        return this.geometryFactory.createLinearRing([new ka(t[0], t[1]), new ka(t[2], t[1]), new ka(t[2], t[3]), new ka(t[0], t[3]), new ka(t[0], t[1])])
      },
      Point: function (t) {
        var e = new ka(t[0], t[1]);
        return this.geometryFactory.createPoint(e)
      },
      MultiPoint: function (t) {
        for (var e = [], n = 0; n < t.length; ++n)
          e.push(Gc.Point.apply(this, [t[n]]));
        return this.geometryFactory.createMultiPoint(e)
      },
      LineString: function (t) {
        var e = Gc.coordinates.apply(this, [t]);
        return this.geometryFactory.createLineString(e)
      },
      MultiLineString: function (t) {
        for (var e = [], n = 0; n < t.length; ++n)
          e.push(Gc.LineString.apply(this, [t[n]]));
        return this.geometryFactory.createMultiLineString(e)
      },
      Polygon: function (t) {
        for (var e = Gc.coordinates.apply(this, [t[0]]), n = this.geometryFactory.createLinearRing(e), r = [], i = 1; i < t.length; ++i) {
          var o = t[i],
            s = Gc.coordinates.apply(this, [o]),
            a = this.geometryFactory.createLinearRing(s);
          r.push(a)
        }
        return this.geometryFactory.createPolygon(n, r)
      },
      MultiPolygon: function (t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          var r = t[n];
          e.push(Gc.Polygon.apply(this, [r]))
        }
        return this.geometryFactory.createMultiPolygon(e)
      },
      GeometryCollection: function (t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          var r = t[n];
          e.push(this.read(r))
        }
        return this.geometryFactory.createGeometryCollection(e)
      }
    },
    Bc = {
      coordinate: function (t) {
        return [t.x, t.y]
      },
      Point: function (t) {
        return {
          type: "Point",
          coordinates: Bc.coordinate.apply(this, [t.getCoordinate()])
        }
      },
      MultiPoint: function (t) {
        for (var e = [], n = 0; n < t._geometries.length; ++n) {
          var r = t._geometries[n],
            i = Bc.Point.apply(this, [r]);
          e.push(i.coordinates)
        }
        return {
          type: "MultiPoint",
          coordinates: e
        }
      },
      LineString: function (t) {
        for (var e = [], n = t.getCoordinates(), r = 0; r < n.length; ++r) {
          var i = n[r];
          e.push(Bc.coordinate.apply(this, [i]))
        }
        return {
          type: "LineString",
          coordinates: e
        }
      },
      MultiLineString: function (t) {
        for (var e = [], n = 0; n < t._geometries.length; ++n) {
          var r = t._geometries[n],
            i = Bc.LineString.apply(this, [r]);
          e.push(i.coordinates)
        }
        return {
          type: "MultiLineString",
          coordinates: e
        }
      },
      Polygon: function (t) {
        var e = [],
          n = Bc.LineString.apply(this, [t._shell]);
        e.push(n.coordinates);
        for (var r = 0; r < t._holes.length; ++r) {
          var i = t._holes[r],
            o = Bc.LineString.apply(this, [i]);
          e.push(o.coordinates)
        }
        return {
          type: "Polygon",
          coordinates: e
        }
      },
      MultiPolygon: function (t) {
        for (var e = [], n = 0; n < t._geometries.length; ++n) {
          var r = t._geometries[n],
            i = Bc.Polygon.apply(this, [r]);
          e.push(i.coordinates)
        }
        return {
          type: "MultiPolygon",
          coordinates: e
        }
      },
      GeometryCollection: function (t) {
        for (var e = [], n = 0; n < t._geometries.length; ++n) {
          var r = t._geometries[n],
            i = r.getGeometryType();
          e.push(Bc[i].apply(this, [r]))
        }
        return {
          type: "GeometryCollection",
          geometries: e
        }
      }
    },
    kc = function (t) {
      this.geometryFactory = t || new Ac,
        this.precisionModel = this.geometryFactory.getPrecisionModel(),
        this.parser = new qc(this.geometryFactory)
    };
  kc.prototype.read = function (t) {
      var e = this.parser.read(t);
      return this.precisionModel.getType() === Pc.FIXED && this.reducePrecision(e),
        e
    },
    kc.prototype.reducePrecision = function (t) {
      var e, n;
      if (t.coordinate)
        this.precisionModel.makePrecise(t.coordinate);
      else if (t.points)
        for (e = 0,
          n = t.points.length; e < n; e++)
          this.precisionModel.makePrecise(t.points[e]);
      else if (t.geometries)
        for (e = 0,
          n = t.geometries.length; e < n; e++)
          this.reducePrecision(t.geometries[e])
    };
  var zc = function () {
    this.parser = new qc(this.geometryFactory)
  };
  zc.prototype.write = function (t) {
    return this.parser.write(t)
  };
  var jc = function () {},
    Xc = {
      ON: {
        configurable: !0
      },
      LEFT: {
        configurable: !0
      },
      RIGHT: {
        configurable: !0
      }
    };
  jc.prototype.interfaces_ = function () {
      return []
    },
    jc.prototype.getClass = function () {
      return jc
    },
    jc.opposite = function (t) {
      return t === jc.LEFT ? jc.RIGHT : t === jc.RIGHT ? jc.LEFT : t
    },
    Xc.ON.get = function () {
      return 0
    },
    Xc.LEFT.get = function () {
      return 1
    },
    Xc.RIGHT.get = function () {
      return 2
    },
    Object.defineProperties(jc, Xc),
    (bi.prototype = new Error).name = "EmptyStackException",
    (Ii.prototype = new Bu).add = function (t) {
      return this.array_.push(t),
        !0
    },
    Ii.prototype.get = function (t) {
      if (t < 0 || t >= this.size())
        throw new Error;
      return this.array_[t]
    },
    Ii.prototype.push = function (t) {
      return this.array_.push(t),
        t
    },
    Ii.prototype.pop = function (t) {
      if (0 === this.array_.length)
        throw new bi;
      return this.array_.pop()
    },
    Ii.prototype.peek = function () {
      if (0 === this.array_.length)
        throw new bi;
      return this.array_[this.array_.length - 1]
    },
    Ii.prototype.empty = function () {
      return 0 === this.array_.length
    },
    Ii.prototype.isEmpty = function () {
      return this.empty()
    },
    Ii.prototype.search = function (t) {
      return this.array_.indexOf(t)
    },
    Ii.prototype.size = function () {
      return this.array_.length
    },
    Ii.prototype.toArray = function () {
      for (var t = [], e = 0, n = this.array_.length; e < n; e++)
        t.push(this.array_[e]);
      return t
    };
  var Uc = function () {
    this._minIndex = -1,
      this._minCoord = null,
      this._minDe = null,
      this._orientedDe = null
  };
  Uc.prototype.getCoordinate = function () {
      return this._minCoord
    },
    Uc.prototype.getRightmostSide = function (t, e) {
      var n = this.getRightmostSideOfSegment(t, e);
      return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)),
        n < 0 && (this._minCoord = null,
          this.checkForRightmostCoordinate(t)),
        n
    },
    Uc.prototype.findRightmostEdgeAtVertex = function () {
      var t = this._minDe.getEdge().getCoordinates();
      _u.isTrue(0 < this._minIndex && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
      var e = t[this._minIndex - 1],
        n = t[this._minIndex + 1],
        r = bu.computeOrientation(this._minCoord, n, e),
        i = !1;
      e.y < this._minCoord.y && n.y < this._minCoord.y && r === bu.COUNTERCLOCKWISE ? i = !0 : e.y > this._minCoord.y && n.y > this._minCoord.y && r === bu.CLOCKWISE && (i = !0),
        i && (this._minIndex = this._minIndex - 1)
    },
    Uc.prototype.getRightmostSideOfSegment = function (t, e) {
      var n = t.getEdge().getCoordinates();
      if (e < 0 || e + 1 >= n.length)
        return -1;
      if (n[e].y === n[e + 1].y)
        return -1;
      var r = jc.LEFT;
      return n[e].y < n[e + 1].y && (r = jc.RIGHT),
        r
    },
    Uc.prototype.getEdge = function () {
      return this._orientedDe
    },
    Uc.prototype.checkForRightmostCoordinate = function (t) {
      for (var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++)
        (null === this._minCoord || e[n].x > this._minCoord.x) && (this._minDe = t,
          this._minIndex = n,
          this._minCoord = e[n])
    },
    Uc.prototype.findRightmostEdgeAtNode = function () {
      var t = this._minDe.getNode().getEdges();
      this._minDe = t.getRightmostEdge(),
        this._minDe.isForward() || (this._minDe = this._minDe.getSym(),
          this._minIndex = this._minDe.getEdge().getCoordinates().length - 1)
    },
    Uc.prototype.findEdge = function (t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();
        n.isForward() && this.checkForRightmostCoordinate(n)
      }
      _u.isTrue(0 !== this._minIndex || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"),
        0 === this._minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(),
        this._orientedDe = this._minDe,
        this.getRightmostSide(this._minDe, this._minIndex) === jc.LEFT && (this._orientedDe = this._minDe.getSym())
    },
    Uc.prototype.interfaces_ = function () {
      return []
    },
    Uc.prototype.getClass = function () {
      return Uc
    };
  var Yc = function (n) {
      function r(t, e) {
        n.call(this, r.msgWithCoord(t, e)),
          this.pt = e ? new ka(e) : null,
          this.name = "TopologyException"
      }
      return n && (r.__proto__ = n),
        ((r.prototype = Object.create(n && n.prototype)).constructor = r).prototype.getCoordinate = function () {
          return this.pt
        },
        r.prototype.interfaces_ = function () {
          return []
        },
        r.prototype.getClass = function () {
          return r
        },
        r.msgWithCoord = function (t, e) {
          return e ? t : t + " [ " + e + " ]"
        },
        r
    }(du),
    Vc = function () {
      this.array_ = []
    };
  Vc.prototype.addLast = function (t) {
      this.array_.push(t)
    },
    Vc.prototype.removeFirst = function () {
      return this.array_.shift()
    },
    Vc.prototype.isEmpty = function () {
      return 0 === this.array_.length
    };
  var Hc = function () {
    this._finder = null,
      this._dirEdgeList = new ku,
      this._nodes = new ku,
      this._rightMostCoord = null,
      this._env = null,
      this._finder = new Uc
  };
  Hc.prototype.clearVisitedEdges = function () {
      for (var t = this._dirEdgeList.iterator(); t.hasNext();)
        t.next().setVisited(!1)
    },
    Hc.prototype.getRightmostCoordinate = function () {
      return this._rightMostCoord
    },
    Hc.prototype.computeNodeDepth = function (t) {
      for (var e = null, n = t.getEdges().iterator(); n.hasNext();) {
        var r = n.next();
        if (r.isVisited() || r.getSym().isVisited()) {
          e = r;
          break
        }
      }
      if (null === e)
        throw new Yc("unable to find edge to compute depths at " + t.getCoordinate());
      t.getEdges().computeDepths(e);
      for (var i = t.getEdges().iterator(); i.hasNext();) {
        var o = i.next();
        o.setVisited(!0),
          this.copySymDepths(o)
      }
    },
    Hc.prototype.computeDepth = function (t) {
      this.clearVisitedEdges();
      var e = this._finder.getEdge();
      e.setEdgeDepths(jc.RIGHT, t),
        this.copySymDepths(e),
        this.computeDepths(e)
    },
    Hc.prototype.create = function (t) {
      this.addReachable(t),
        this._finder.findEdge(this._dirEdgeList),
        this._rightMostCoord = this._finder.getCoordinate()
    },
    Hc.prototype.findResultEdges = function () {
      for (var t = this._dirEdgeList.iterator(); t.hasNext();) {
        var e = t.next();
        1 <= e.getDepth(jc.RIGHT) && e.getDepth(jc.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0)
      }
    },
    Hc.prototype.computeDepths = function (t) {
      var e = new Ju,
        n = new Vc,
        r = t.getNode();
      for (n.addLast(r),
        e.add(r),
        t.setVisited(!0); !n.isEmpty();) {
        var i = n.removeFirst();
        e.add(i),
          this.computeNodeDepth(i);
        for (var o = i.getEdges().iterator(); o.hasNext();) {
          var s = o.next().getSym();
          if (!s.isVisited()) {
            var a = s.getNode();
            e.contains(a) || (n.addLast(a),
              e.add(a))
          }
        }
      }
    },
    Hc.prototype.compareTo = function (t) {
      var e = t;
      return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0
    },
    Hc.prototype.getEnvelope = function () {
      if (null === this._env) {
        for (var t = new uu, e = this._dirEdgeList.iterator(); e.hasNext();)
          for (var n = e.next().getEdge().getCoordinates(), r = 0; r < n.length - 1; r++)
            t.expandToInclude(n[r]);
        this._env = t
      }
      return this._env
    },
    Hc.prototype.addReachable = function (t) {
      var e = new Ii;
      for (e.add(t); !e.empty();) {
        var n = e.pop();
        this.add(n, e)
      }
    },
    Hc.prototype.copySymDepths = function (t) {
      var e = t.getSym();
      e.setDepth(jc.LEFT, t.getDepth(jc.RIGHT)),
        e.setDepth(jc.RIGHT, t.getDepth(jc.LEFT))
    },
    Hc.prototype.add = function (t, e) {
      t.setVisited(!0),
        this._nodes.add(t);
      for (var n = t.getEdges().iterator(); n.hasNext();) {
        var r = n.next();
        this._dirEdgeList.add(r);
        var i = r.getSym().getNode();
        i.isVisited() || e.push(i)
      }
    },
    Hc.prototype.getNodes = function () {
      return this._nodes
    },
    Hc.prototype.getDirectedEdges = function () {
      return this._dirEdgeList
    },
    Hc.prototype.interfaces_ = function () {
      return [qa]
    },
    Hc.prototype.getClass = function () {
      return Hc
    };
  var Wc = function t() {
    if (this.location = null,
      1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var e = arguments[0];
        this.init(e.length)
      } else if (Number.isInteger(arguments[0])) {
        var n = arguments[0];
        this.init(1),
          this.location[jc.ON] = n
      } else if (arguments[0] instanceof t) {
        var r = arguments[0];
        if (this.init(r.location.length),
          null !== r)
          for (var i = 0; i < this.location.length; i++)
            this.location[i] = r.location[i]
      }
    } else if (3 === arguments.length) {
      var o = arguments[0],
        s = arguments[1],
        a = arguments[2];
      this.init(3),
        this.location[jc.ON] = o,
        this.location[jc.LEFT] = s,
        this.location[jc.RIGHT] = a
    }
  };
  Wc.prototype.setAllLocations = function (t) {
      for (var e = 0; e < this.location.length; e++)
        this.location[e] = t
    },
    Wc.prototype.isNull = function () {
      for (var t = 0; t < this.location.length; t++)
        if (this.location[t] !== Ua.NONE)
          return !1;
      return !0
    },
    Wc.prototype.setAllLocationsIfNull = function (t) {
      for (var e = 0; e < this.location.length; e++)
        this.location[e] === Ua.NONE && (this.location[e] = t)
    },
    Wc.prototype.isLine = function () {
      return 1 === this.location.length
    },
    Wc.prototype.merge = function (t) {
      if (t.location.length > this.location.length) {
        var e = new Array(3).fill(null);
        e[jc.ON] = this.location[jc.ON],
          e[jc.LEFT] = Ua.NONE,
          e[jc.RIGHT] = Ua.NONE,
          this.location = e
      }
      for (var n = 0; n < this.location.length; n++)
        this.location[n] === Ua.NONE && n < t.location.length && (this.location[n] = t.location[n])
    },
    Wc.prototype.getLocations = function () {
      return this.location
    },
    Wc.prototype.flip = function () {
      if (this.location.length <= 1)
        return null;
      var t = this.location[jc.LEFT];
      this.location[jc.LEFT] = this.location[jc.RIGHT],
        this.location[jc.RIGHT] = t
    },
    Wc.prototype.toString = function () {
      var t = new Ja;
      return 1 < this.location.length && t.append(Ua.toLocationSymbol(this.location[jc.LEFT])),
        t.append(Ua.toLocationSymbol(this.location[jc.ON])),
        1 < this.location.length && t.append(Ua.toLocationSymbol(this.location[jc.RIGHT])),
        t.toString()
    },
    Wc.prototype.setLocations = function (t, e, n) {
      this.location[jc.ON] = t,
        this.location[jc.LEFT] = e,
        this.location[jc.RIGHT] = n
    },
    Wc.prototype.get = function (t) {
      return t < this.location.length ? this.location[t] : Ua.NONE
    },
    Wc.prototype.isArea = function () {
      return 1 < this.location.length
    },
    Wc.prototype.isAnyNull = function () {
      for (var t = 0; t < this.location.length; t++)
        if (this.location[t] === Ua.NONE)
          return !0;
      return !1
    },
    Wc.prototype.setLocation = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setLocation(jc.ON, t)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        this.location[e] = n
      }
    },
    Wc.prototype.init = function (t) {
      this.location = new Array(t).fill(null),
        this.setAllLocations(Ua.NONE)
    },
    Wc.prototype.isEqualOnSide = function (t, e) {
      return this.location[e] === t.location[e]
    },
    Wc.prototype.allPositionsEqual = function (t) {
      for (var e = 0; e < this.location.length; e++)
        if (this.location[e] !== t)
          return !1;
      return !0
    },
    Wc.prototype.interfaces_ = function () {
      return []
    },
    Wc.prototype.getClass = function () {
      return Wc
    };
  var Jc = function t() {
    if (this.elt = new Array(2).fill(null),
      1 === arguments.length) {
      if (Number.isInteger(arguments[0])) {
        var e = arguments[0];
        this.elt[0] = new Wc(e),
          this.elt[1] = new Wc(e)
      } else if (arguments[0] instanceof t) {
        var n = arguments[0];
        this.elt[0] = new Wc(n.elt[0]),
          this.elt[1] = new Wc(n.elt[1])
      }
    } else if (2 === arguments.length) {
      var r = arguments[0],
        i = arguments[1];
      this.elt[0] = new Wc(Ua.NONE),
        this.elt[1] = new Wc(Ua.NONE),
        this.elt[r].setLocation(i)
    } else if (3 === arguments.length) {
      var o = arguments[0],
        s = arguments[1],
        a = arguments[2];
      this.elt[0] = new Wc(o, s, a),
        this.elt[1] = new Wc(o, s, a)
    } else if (4 === arguments.length) {
      var u = arguments[0],
        c = arguments[1],
        h = arguments[2],
        l = arguments[3];
      this.elt[0] = new Wc(Ua.NONE, Ua.NONE, Ua.NONE),
        this.elt[1] = new Wc(Ua.NONE, Ua.NONE, Ua.NONE),
        this.elt[u].setLocations(c, h, l)
    }
  };
  Jc.prototype.getGeometryCount = function () {
      var t = 0;
      return this.elt[0].isNull() || t++,
        this.elt[1].isNull() || t++,
        t
    },
    Jc.prototype.setAllLocations = function (t, e) {
      this.elt[t].setAllLocations(e)
    },
    Jc.prototype.isNull = function (t) {
      return this.elt[t].isNull()
    },
    Jc.prototype.setAllLocationsIfNull = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setAllLocationsIfNull(0, t),
          this.setAllLocationsIfNull(1, t)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        this.elt[e].setAllLocationsIfNull(n)
      }
    },
    Jc.prototype.isLine = function (t) {
      return this.elt[t].isLine()
    },
    Jc.prototype.merge = function (t) {
      for (var e = 0; e < 2; e++)
        null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new Wc(t.elt[e]) : this.elt[e].merge(t.elt[e])
    },
    Jc.prototype.flip = function () {
      this.elt[0].flip(),
        this.elt[1].flip()
    },
    Jc.prototype.getLocation = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.elt[t].get(jc.ON)
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return this.elt[e].get(n)
      }
    },
    Jc.prototype.toString = function () {
      var t = new Ja;
      return null !== this.elt[0] && (t.append("A:"),
          t.append(this.elt[0].toString())),
        null !== this.elt[1] && (t.append(" B:"),
          t.append(this.elt[1].toString())),
        t.toString()
    },
    Jc.prototype.isArea = function () {
      if (0 === arguments.length)
        return this.elt[0].isArea() || this.elt[1].isArea();
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.elt[t].isArea()
      }
    },
    Jc.prototype.isAnyNull = function (t) {
      return this.elt[t].isAnyNull()
    },
    Jc.prototype.setLocation = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        this.elt[t].setLocation(jc.ON, e)
      } else if (3 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[2];
        this.elt[n].setLocation(r, i)
      }
    },
    Jc.prototype.isEqualOnSide = function (t, e) {
      return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e)
    },
    Jc.prototype.allPositionsEqual = function (t, e) {
      return this.elt[t].allPositionsEqual(e)
    },
    Jc.prototype.toLine = function (t) {
      this.elt[t].isArea() && (this.elt[t] = new Wc(this.elt[t].location[0]))
    },
    Jc.prototype.interfaces_ = function () {
      return []
    },
    Jc.prototype.getClass = function () {
      return Jc
    },
    Jc.toLineLabel = function (t) {
      for (var e = new Jc(Ua.NONE), n = 0; n < 2; n++)
        e.setLocation(n, t.getLocation(n));
      return e
    };
  var Zc = function () {
    this._startDe = null,
      this._maxNodeDegree = -1,
      this._edges = new ku,
      this._pts = new ku,
      this._label = new Jc(Ua.NONE),
      this._ring = null,
      this._isHole = null,
      this._shell = null,
      this._holes = new ku,
      this._geometryFactory = null;
    var t = arguments[0],
      e = arguments[1];
    this._geometryFactory = e,
      this.computePoints(t),
      this.computeRing()
  };
  Zc.prototype.computeRing = function () {
      if (null !== this._ring)
        return null;
      for (var t = new Array(this._pts.size()).fill(null), e = 0; e < this._pts.size(); e++)
        t[e] = this._pts.get(e);
      this._ring = this._geometryFactory.createLinearRing(t),
        this._isHole = bu.isCCW(this._ring.getCoordinates())
    },
    Zc.prototype.isIsolated = function () {
      return 1 === this._label.getGeometryCount()
    },
    Zc.prototype.computePoints = function (t) {
      var e = this._startDe = t,
        n = !0;
      do {
        if (null === e)
          throw new Yc("Found null DirectedEdge");
        if (e.getEdgeRing() === this)
          throw new Yc("Directed Edge visited twice during ring-building at " + e.getCoordinate());
        this._edges.add(e);
        var r = e.getLabel();
        _u.isTrue(r.isArea()),
          this.mergeLabel(r),
          this.addPoints(e.getEdge(), e.isForward(), n),
          n = !1,
          this.setEdgeRing(e, this),
          e = this.getNext(e)
      } while (e !== this._startDe)
    },
    Zc.prototype.getLinearRing = function () {
      return this._ring
    },
    Zc.prototype.getCoordinate = function (t) {
      return this._pts.get(t)
    },
    Zc.prototype.computeMaxNodeDegree = function () {
      this._maxNodeDegree = 0;
      var t = this._startDe;
      do {
        var e = t.getNode().getEdges().getOutgoingDegree(this);
        e > this._maxNodeDegree && (this._maxNodeDegree = e),
          t = this.getNext(t)
      } while (t !== this._startDe);
      this._maxNodeDegree *= 2
    },
    Zc.prototype.addPoints = function (t, e, n) {
      var r = t.getCoordinates();
      if (e) {
        var i = 1;
        n && (i = 0);
        for (var o = i; o < r.length; o++)
          this._pts.add(r[o])
      } else {
        var s = r.length - 2;
        n && (s = r.length - 1);
        for (var a = s; 0 <= a; a--)
          this._pts.add(r[a])
      }
    },
    Zc.prototype.isHole = function () {
      return this._isHole
    },
    Zc.prototype.setInResult = function () {
      for (var t = this._startDe; t.getEdge().setInResult(!0),
        (t = t.getNext()) !== this._startDe;)
      ;
    },
    Zc.prototype.containsPoint = function (t) {
      var e = this.getLinearRing();
      if (!e.getEnvelopeInternal().contains(t))
        return !1;
      if (!bu.isPointInRing(t, e.getCoordinates()))
        return !1;
      for (var n = this._holes.iterator(); n.hasNext();)
        if (n.next().containsPoint(t))
          return !1;
      return !0
    },
    Zc.prototype.addHole = function (t) {
      this._holes.add(t)
    },
    Zc.prototype.isShell = function () {
      return null === this._shell
    },
    Zc.prototype.getLabel = function () {
      return this._label
    },
    Zc.prototype.getEdges = function () {
      return this._edges
    },
    Zc.prototype.getMaxNodeDegree = function () {
      return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(),
        this._maxNodeDegree
    },
    Zc.prototype.getShell = function () {
      return this._shell
    },
    Zc.prototype.mergeLabel = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.mergeLabel(t, 0),
          this.mergeLabel(t, 1)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = e.getLocation(n, jc.RIGHT);
        if (r === Ua.NONE)
          return null;
        if (this._label.getLocation(n) === Ua.NONE)
          return this._label.setLocation(n, r),
            null
      }
    },
    Zc.prototype.setShell = function (t) {
      null !== (this._shell = t) && t.addHole(this)
    },
    Zc.prototype.toPolygon = function (t) {
      for (var e = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++)
        e[n] = this._holes.get(n).getLinearRing();
      return t.createPolygon(this.getLinearRing(), e)
    },
    Zc.prototype.interfaces_ = function () {
      return []
    },
    Zc.prototype.getClass = function () {
      return Zc
    };
  var Kc = function (n) {
      function t() {
        var t = arguments[0],
          e = arguments[1];
        n.call(this, t, e)
      }
      return n && (t.__proto__ = n),
        ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.setEdgeRing = function (t, e) {
          t.setMinEdgeRing(e)
        },
        t.prototype.getNext = function (t) {
          return t.getNextMin()
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(Zc),
    Qc = function (n) {
      function t() {
        var t = arguments[0],
          e = arguments[1];
        n.call(this, t, e)
      }
      return n && (t.__proto__ = n),
        ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.buildMinimalRings = function () {
          var t = new ku,
            e = this._startDe;
          do {
            if (null === e.getMinEdgeRing()) {
              var n = new Kc(e, this._geometryFactory);
              t.add(n)
            }
            e = e.getNext()
          } while (e !== this._startDe);
          return t
        },
        t.prototype.setEdgeRing = function (t, e) {
          t.setEdgeRing(e)
        },
        t.prototype.linkDirectedEdgesForMinimalEdgeRings = function () {
          for (var t = this._startDe; t.getNode().getEdges().linkMinimalDirectedEdges(this),
            (t = t.getNext()) !== this._startDe;)
          ;
        },
        t.prototype.getNext = function (t) {
          return t.getNext()
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(Zc),
    $c = function () {
      if (this._label = null,
        this._isInResult = !1,
        this._isCovered = !1,
        this._isCoveredSet = !1,
        this._isVisited = !1,
        0 === arguments.length)
      ;
      else if (1 === arguments.length) {
        var t = arguments[0];
        this._label = t
      }
    };
  $c.prototype.setVisited = function (t) {
      this._isVisited = t
    },
    $c.prototype.setInResult = function (t) {
      this._isInResult = t
    },
    $c.prototype.isCovered = function () {
      return this._isCovered
    },
    $c.prototype.isCoveredSet = function () {
      return this._isCoveredSet
    },
    $c.prototype.setLabel = function (t) {
      this._label = t
    },
    $c.prototype.getLabel = function () {
      return this._label
    },
    $c.prototype.setCovered = function (t) {
      this._isCovered = t,
        this._isCoveredSet = !0
    },
    $c.prototype.updateIM = function (t) {
      _u.isTrue(2 <= this._label.getGeometryCount(), "found partial label"),
        this.computeIM(t)
    },
    $c.prototype.isInResult = function () {
      return this._isInResult
    },
    $c.prototype.isVisited = function () {
      return this._isVisited
    },
    $c.prototype.interfaces_ = function () {
      return []
    },
    $c.prototype.getClass = function () {
      return $c
    };
  var th = function (n) {
      function i() {
        n.call(this),
          this._coord = null,
          this._edges = null;
        var t = arguments[0],
          e = arguments[1];
        this._coord = t,
          this._edges = e,
          this._label = new Jc(0, Ua.NONE)
      }
      return n && (i.__proto__ = n),
        ((i.prototype = Object.create(n && n.prototype)).constructor = i).prototype.isIncidentEdgeInResult = function () {
          for (var t = this.getEdges().getEdges().iterator(); t.hasNext();)
            if (t.next().getEdge().isInResult())
              return !0;
          return !1
        },
        i.prototype.isIsolated = function () {
          return 1 === this._label.getGeometryCount()
        },
        i.prototype.getCoordinate = function () {
          return this._coord
        },
        i.prototype.print = function (t) {
          t.println("node " + this._coord + " lbl: " + this._label)
        },
        i.prototype.computeIM = function (t) {},
        i.prototype.computeMergedLocation = function (t, e) {
          var n = Ua.NONE;
          if (n = this._label.getLocation(e),
            !t.isNull(e)) {
            var r = t.getLocation(e);
            n !== Ua.BOUNDARY && (n = r)
          }
          return n
        },
        i.prototype.setLabel = function () {
          if (2 !== arguments.length)
            return n.prototype.setLabel.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          null === this._label ? this._label = new Jc(t, e) : this._label.setLocation(t, e)
        },
        i.prototype.getEdges = function () {
          return this._edges
        },
        i.prototype.mergeLabel = function () {
          if (arguments[0] instanceof i) {
            var t = arguments[0];
            this.mergeLabel(t._label)
          } else if (arguments[0] instanceof Jc)
            for (var e = arguments[0], n = 0; n < 2; n++) {
              var r = this.computeMergedLocation(e, n);
              this._label.getLocation(n) === Ua.NONE && this._label.setLocation(n, r)
            }
        },
        i.prototype.add = function (t) {
          this._edges.insert(t),
            t.setNode(this)
        },
        i.prototype.setLabelBoundary = function (t) {
          if (null === this._label)
            return null;
          var e = Ua.NONE;
          null !== this._label && (e = this._label.getLocation(t));
          var n = null;
          switch (e) {
            case Ua.BOUNDARY:
              n = Ua.INTERIOR;
              break;
            case Ua.INTERIOR:
            default:
              n = Ua.BOUNDARY
          }
          this._label.setLocation(t, n)
        },
        i.prototype.interfaces_ = function () {
          return []
        },
        i.prototype.getClass = function () {
          return i
        },
        i
    }($c),
    eh = function () {
      this.nodeMap = new vi,
        this.nodeFact = null;
      var t = arguments[0];
      this.nodeFact = t
    };
  eh.prototype.find = function (t) {
      return this.nodeMap.get(t)
    },
    eh.prototype.addNode = function () {
      if (arguments[0] instanceof ka) {
        var t = arguments[0],
          e = this.nodeMap.get(t);
        return null === e && (e = this.nodeFact.createNode(t),
            this.nodeMap.put(t, e)),
          e
      }
      if (arguments[0] instanceof th) {
        var n = arguments[0],
          r = this.nodeMap.get(n.getCoordinate());
        return null === r ? (this.nodeMap.put(n.getCoordinate(), n),
          n) : (r.mergeLabel(n),
          r)
      }
    },
    eh.prototype.print = function (t) {
      for (var e = this.iterator(); e.hasNext();)
        e.next().print(t)
    },
    eh.prototype.iterator = function () {
      return this.nodeMap.values().iterator()
    },
    eh.prototype.values = function () {
      return this.nodeMap.values()
    },
    eh.prototype.getBoundaryNodes = function (t) {
      for (var e = new ku, n = this.iterator(); n.hasNext();) {
        var r = n.next();
        r.getLabel().getLocation(t) === Ua.BOUNDARY && e.add(r)
      }
      return e
    },
    eh.prototype.add = function (t) {
      var e = t.getCoordinate();
      this.addNode(e).add(t)
    },
    eh.prototype.interfaces_ = function () {
      return []
    },
    eh.prototype.getClass = function () {
      return eh
    };
  var nh = function () {},
    rh = {
      NE: {
        configurable: !0
      },
      NW: {
        configurable: !0
      },
      SW: {
        configurable: !0
      },
      SE: {
        configurable: !0
      }
    };
  nh.prototype.interfaces_ = function () {
      return []
    },
    nh.prototype.getClass = function () {
      return nh
    },
    nh.isNorthern = function (t) {
      return t === nh.NE || t === nh.NW
    },
    nh.isOpposite = function (t, e) {
      return t !== e && 2 == (t - e + 4) % 4
    },
    nh.commonHalfPlane = function (t, e) {
      if (t === e)
        return t;
      if (2 == (t - e + 4) % 4)
        return -1;
      var n = t < e ? t : e;
      return 0 === n && 3 === (e < t ? t : e) ? 3 : n
    },
    nh.isInHalfPlane = function (t, e) {
      return e === nh.SE ? t === nh.SE || t === nh.SW : t === e || t === e + 1
    },
    nh.quadrant = function () {
      if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var t = arguments[0],
          e = arguments[1];
        if (0 === t && 0 === e)
          throw new Aa("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
        return 0 <= t ? 0 <= e ? nh.NE : nh.SE : 0 <= e ? nh.NW : nh.SW
      }
      if (arguments[0] instanceof ka && arguments[1] instanceof ka) {
        var n = arguments[0],
          r = arguments[1];
        if (r.x === n.x && r.y === n.y)
          throw new Aa("Cannot compute the quadrant for two identical points " + n);
        return r.x >= n.x ? r.y >= n.y ? nh.NE : nh.SE : r.y >= n.y ? nh.NW : nh.SW
      }
    },
    rh.NE.get = function () {
      return 0
    },
    rh.NW.get = function () {
      return 1
    },
    rh.SW.get = function () {
      return 2
    },
    rh.SE.get = function () {
      return 3
    },
    Object.defineProperties(nh, rh);
  var ih = function () {
    if (this._edge = null,
      this._label = null,
      this._node = null,
      this._p0 = null,
      this._p1 = null,
      this._dx = null,
      this._dy = null,
      this._quadrant = null,
      1 === arguments.length) {
      var t = arguments[0];
      this._edge = t
    } else if (3 === arguments.length) {
      var e = arguments[0],
        n = arguments[1],
        r = arguments[2];
      this._edge = e,
        this.init(n, r),
        this._label = null
    } else if (4 === arguments.length) {
      var i = arguments[0],
        o = arguments[1],
        s = arguments[2],
        a = arguments[3];
      this._edge = i,
        this.init(o, s),
        this._label = a
    }
  };
  ih.prototype.compareDirection = function (t) {
      return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : bu.computeOrientation(t._p0, t._p1, this._p1)
    },
    ih.prototype.getDy = function () {
      return this._dy
    },
    ih.prototype.getCoordinate = function () {
      return this._p0
    },
    ih.prototype.setNode = function (t) {
      this._node = t
    },
    ih.prototype.print = function (t) {
      var e = Math.atan2(this._dy, this._dx),
        n = this.getClass().getName(),
        r = n.lastIndexOf("."),
        i = n.substring(r + 1);
      t.print("  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label)
    },
    ih.prototype.compareTo = function (t) {
      var e = t;
      return this.compareDirection(e)
    },
    ih.prototype.getDirectedCoordinate = function () {
      return this._p1
    },
    ih.prototype.getDx = function () {
      return this._dx
    },
    ih.prototype.getLabel = function () {
      return this._label
    },
    ih.prototype.getEdge = function () {
      return this._edge
    },
    ih.prototype.getQuadrant = function () {
      return this._quadrant
    },
    ih.prototype.getNode = function () {
      return this._node
    },
    ih.prototype.toString = function () {
      var t = Math.atan2(this._dy, this._dx),
        e = this.getClass().getName(),
        n = e.lastIndexOf(".");
      return "  " + e.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label
    },
    ih.prototype.computeLabel = function (t) {},
    ih.prototype.init = function (t, e) {
      this._p0 = t,
        this._p1 = e,
        this._dx = e.x - t.x,
        this._dy = e.y - t.y,
        this._quadrant = nh.quadrant(this._dx, this._dy),
        _u.isTrue(!(0 === this._dx && 0 === this._dy), "EdgeEnd with identical endpoints found")
    },
    ih.prototype.interfaces_ = function () {
      return [qa]
    },
    ih.prototype.getClass = function () {
      return ih
    };
  var oh = function (r) {
      function t() {
        var t = arguments[0],
          e = arguments[1];
        if (r.call(this, t),
          this._isForward = null,
          this._isInResult = !1,
          this._isVisited = !1,
          this._sym = null,
          this._next = null,
          this._nextMin = null,
          this._edgeRing = null,
          this._minEdgeRing = null,
          this._depth = [0, -999, -999],
          this._isForward = e)
          this.init(t.getCoordinate(0), t.getCoordinate(1));
        else {
          var n = t.getNumPoints() - 1;
          this.init(t.getCoordinate(n), t.getCoordinate(n - 1))
        }
        this.computeDirectedLabel()
      }
      return r && (t.__proto__ = r),
        ((t.prototype = Object.create(r && r.prototype)).constructor = t).prototype.getNextMin = function () {
          return this._nextMin
        },
        t.prototype.getDepth = function (t) {
          return this._depth[t]
        },
        t.prototype.setVisited = function (t) {
          this._isVisited = t
        },
        t.prototype.computeDirectedLabel = function () {
          this._label = new Jc(this._edge.getLabel()),
            this._isForward || this._label.flip()
        },
        t.prototype.getNext = function () {
          return this._next
        },
        t.prototype.setDepth = function (t, e) {
          if (-999 !== this._depth[t] && this._depth[t] !== e)
            throw new Yc("assigned depths do not match", this.getCoordinate());
          this._depth[t] = e
        },
        t.prototype.isInteriorAreaEdge = function () {
          for (var t = !0, e = 0; e < 2; e++)
            this._label.isArea(e) && this._label.getLocation(e, jc.LEFT) === Ua.INTERIOR && this._label.getLocation(e, jc.RIGHT) === Ua.INTERIOR || (t = !1);
          return t
        },
        t.prototype.setNextMin = function (t) {
          this._nextMin = t
        },
        t.prototype.print = function (t) {
          r.prototype.print.call(this, t),
            t.print(" " + this._depth[jc.LEFT] + "/" + this._depth[jc.RIGHT]),
            t.print(" (" + this.getDepthDelta() + ")"),
            this._isInResult && t.print(" inResult")
        },
        t.prototype.setMinEdgeRing = function (t) {
          this._minEdgeRing = t
        },
        t.prototype.isLineEdge = function () {
          var t = this._label.isLine(0) || this._label.isLine(1),
            e = !this._label.isArea(0) || this._label.allPositionsEqual(0, Ua.EXTERIOR),
            n = !this._label.isArea(1) || this._label.allPositionsEqual(1, Ua.EXTERIOR);
          return t && e && n
        },
        t.prototype.setEdgeRing = function (t) {
          this._edgeRing = t
        },
        t.prototype.getMinEdgeRing = function () {
          return this._minEdgeRing
        },
        t.prototype.getDepthDelta = function () {
          var t = this._edge.getDepthDelta();
          return this._isForward || (t = -t),
            t
        },
        t.prototype.setInResult = function (t) {
          this._isInResult = t
        },
        t.prototype.getSym = function () {
          return this._sym
        },
        t.prototype.isForward = function () {
          return this._isForward
        },
        t.prototype.getEdge = function () {
          return this._edge
        },
        t.prototype.printEdge = function (t) {
          this.print(t),
            t.print(" "),
            this._isForward ? this._edge.print(t) : this._edge.printReverse(t)
        },
        t.prototype.setSym = function (t) {
          this._sym = t
        },
        t.prototype.setVisitedEdge = function (t) {
          this.setVisited(t),
            this._sym.setVisited(t)
        },
        t.prototype.setEdgeDepths = function (t, e) {
          var n = this.getEdge().getDepthDelta();
          this._isForward || (n = -n);
          var r = 1;
          t === jc.LEFT && (r = -1);
          var i = jc.opposite(t),
            o = e + n * r;
          this.setDepth(t, e),
            this.setDepth(i, o)
        },
        t.prototype.getEdgeRing = function () {
          return this._edgeRing
        },
        t.prototype.isInResult = function () {
          return this._isInResult
        },
        t.prototype.setNext = function (t) {
          this._next = t
        },
        t.prototype.isVisited = function () {
          return this._isVisited
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t.depthFactor = function (t, e) {
          return t === Ua.EXTERIOR && e === Ua.INTERIOR ? 1 : t === Ua.INTERIOR && e === Ua.EXTERIOR ? -1 : 0
        },
        t
    }(ih),
    sh = function () {};
  sh.prototype.createNode = function (t) {
      return new th(t, null)
    },
    sh.prototype.interfaces_ = function () {
      return []
    },
    sh.prototype.getClass = function () {
      return sh
    };
  var ah = function () {
    if (this._edges = new ku,
      this._nodes = null,
      this._edgeEndList = new ku,
      0 === arguments.length)
      this._nodes = new eh(new sh);
    else if (1 === arguments.length) {
      var t = arguments[0];
      this._nodes = new eh(t)
    }
  };
  ah.prototype.printEdges = function (t) {
      t.println("Edges:");
      for (var e = 0; e < this._edges.size(); e++) {
        t.println("edge " + e + ":");
        var n = this._edges.get(e);
        n.print(t),
          n.eiList.print(t)
      }
    },
    ah.prototype.find = function (t) {
      return this._nodes.find(t)
    },
    ah.prototype.addNode = function () {
      if (arguments[0] instanceof th) {
        var t = arguments[0];
        return this._nodes.addNode(t)
      }
      if (arguments[0] instanceof ka) {
        var e = arguments[0];
        return this._nodes.addNode(e)
      }
    },
    ah.prototype.getNodeIterator = function () {
      return this._nodes.iterator()
    },
    ah.prototype.linkResultDirectedEdges = function () {
      for (var t = this._nodes.iterator(); t.hasNext();)
        t.next().getEdges().linkResultDirectedEdges()
    },
    ah.prototype.debugPrintln = function (t) {
      su.out.println(t)
    },
    ah.prototype.isBoundaryNode = function (t, e) {
      var n = this._nodes.find(e);
      if (null === n)
        return !1;
      var r = n.getLabel();
      return null !== r && r.getLocation(t) === Ua.BOUNDARY
    },
    ah.prototype.linkAllDirectedEdges = function () {
      for (var t = this._nodes.iterator(); t.hasNext();)
        t.next().getEdges().linkAllDirectedEdges()
    },
    ah.prototype.matchInSameDirection = function (t, e, n, r) {
      return !!t.equals(n) && bu.computeOrientation(t, e, r) === bu.COLLINEAR && nh.quadrant(t, e) === nh.quadrant(n, r)
    },
    ah.prototype.getEdgeEnds = function () {
      return this._edgeEndList
    },
    ah.prototype.debugPrint = function (t) {
      su.out.print(t)
    },
    ah.prototype.getEdgeIterator = function () {
      return this._edges.iterator()
    },
    ah.prototype.findEdgeInSameDirection = function (t, e) {
      for (var n = 0; n < this._edges.size(); n++) {
        var r = this._edges.get(n),
          i = r.getCoordinates();
        if (this.matchInSameDirection(t, e, i[0], i[1]))
          return r;
        if (this.matchInSameDirection(t, e, i[i.length - 1], i[i.length - 2]))
          return r
      }
      return null
    },
    ah.prototype.insertEdge = function (t) {
      this._edges.add(t)
    },
    ah.prototype.findEdgeEnd = function (t) {
      for (var e = this.getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next();
        if (n.getEdge() === t)
          return n
      }
      return null
    },
    ah.prototype.addEdges = function (t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next();
        this._edges.add(n);
        var r = new oh(n, !0),
          i = new oh(n, !1);
        r.setSym(i),
          i.setSym(r),
          this.add(r),
          this.add(i)
      }
    },
    ah.prototype.add = function (t) {
      this._nodes.add(t),
        this._edgeEndList.add(t)
    },
    ah.prototype.getNodes = function () {
      return this._nodes.values()
    },
    ah.prototype.findEdge = function (t, e) {
      for (var n = 0; n < this._edges.size(); n++) {
        var r = this._edges.get(n),
          i = r.getCoordinates();
        if (t.equals(i[0]) && e.equals(i[1]))
          return r
      }
      return null
    },
    ah.prototype.interfaces_ = function () {
      return []
    },
    ah.prototype.getClass = function () {
      return ah
    },
    ah.linkResultDirectedEdges = function (t) {
      for (var e = t.iterator(); e.hasNext();)
        e.next().getEdges().linkResultDirectedEdges()
    };
  var uh = function () {
    this._geometryFactory = null,
      this._shellList = new ku;
    var t = arguments[0];
    this._geometryFactory = t
  };
  uh.prototype.sortShellsAndHoles = function (t, e, n) {
      for (var r = t.iterator(); r.hasNext();) {
        var i = r.next();
        i.isHole() ? n.add(i) : e.add(i)
      }
    },
    uh.prototype.computePolygons = function (t) {
      for (var e = new ku, n = t.iterator(); n.hasNext();) {
        var r = n.next().toPolygon(this._geometryFactory);
        e.add(r)
      }
      return e
    },
    uh.prototype.placeFreeHoles = function (t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var r = n.next();
        if (null === r.getShell()) {
          var i = this.findEdgeRingContaining(r, t);
          if (null === i)
            throw new Yc("unable to assign hole to a shell", r.getCoordinate(0));
          r.setShell(i)
        }
      }
    },
    uh.prototype.buildMinimalEdgeRings = function (t, e, n) {
      for (var r = new ku, i = t.iterator(); i.hasNext();) {
        var o = i.next();
        if (2 < o.getMaxNodeDegree()) {
          o.linkDirectedEdgesForMinimalEdgeRings();
          var s = o.buildMinimalRings(),
            a = this.findShell(s);
          null !== a ? (this.placePolygonHoles(a, s),
            e.add(a)) : n.addAll(s)
        } else
          r.add(o)
      }
      return r
    },
    uh.prototype.containsPoint = function (t) {
      for (var e = this._shellList.iterator(); e.hasNext();)
        if (e.next().containsPoint(t))
          return !0;
      return !1
    },
    uh.prototype.buildMaximalEdgeRings = function (t) {
      for (var e = new ku, n = t.iterator(); n.hasNext();) {
        var r = n.next();
        if (r.isInResult() && r.getLabel().isArea() && null === r.getEdgeRing()) {
          var i = new Qc(r, this._geometryFactory);
          e.add(i),
            i.setInResult()
        }
      }
      return e
    },
    uh.prototype.placePolygonHoles = function (t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var r = n.next();
        r.isHole() && r.setShell(t)
      }
    },
    uh.prototype.getPolygons = function () {
      return this.computePolygons(this._shellList)
    },
    uh.prototype.findEdgeRingContaining = function (t, e) {
      for (var n = t.getLinearRing(), r = n.getEnvelopeInternal(), i = n.getCoordinateN(0), o = null, s = null, a = e.iterator(); a.hasNext();) {
        var u = a.next(),
          c = u.getLinearRing(),
          h = c.getEnvelopeInternal();
        null !== o && (s = o.getLinearRing().getEnvelopeInternal());
        var l = !1;
        h.contains(r) && bu.isPointInRing(i, c.getCoordinates()) && (l = !0),
          l && (null === o || s.contains(h)) && (o = u)
      }
      return o
    },
    uh.prototype.findShell = function (t) {
      for (var e = 0, n = null, r = t.iterator(); r.hasNext();) {
        var i = r.next();
        i.isHole() || (n = i,
          e++)
      }
      return _u.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"),
        n
    },
    uh.prototype.add = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.add(t.getEdgeEnds(), t.getNodes())
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        ah.linkResultDirectedEdges(n);
        var r = this.buildMaximalEdgeRings(e),
          i = new ku,
          o = this.buildMinimalEdgeRings(r, this._shellList, i);
        this.sortShellsAndHoles(o, this._shellList, i),
          this.placeFreeHoles(this._shellList, i)
      }
    },
    uh.prototype.interfaces_ = function () {
      return []
    },
    uh.prototype.getClass = function () {
      return uh
    };
  var ch = function () {};
  ch.prototype.getBounds = function () {},
    ch.prototype.interfaces_ = function () {
      return []
    },
    ch.prototype.getClass = function () {
      return ch
    };
  var hh = function () {
    this._bounds = null,
      this._item = null;
    var t = arguments[0],
      e = arguments[1];
    this._bounds = t,
      this._item = e
  };
  hh.prototype.getItem = function () {
      return this._item
    },
    hh.prototype.getBounds = function () {
      return this._bounds
    },
    hh.prototype.interfaces_ = function () {
      return [ch, hi]
    },
    hh.prototype.getClass = function () {
      return hh
    };
  var lh = function () {
    this._size = null,
      this._items = null,
      this._size = 0,
      this._items = new ku,
      this._items.add(null)
  };
  lh.prototype.poll = function () {
      if (this.isEmpty())
        return null;
      var t = this._items.get(1);
      return this._items.set(1, this._items.get(this._size)),
        this._size -= 1,
        this.reorder(1),
        t
    },
    lh.prototype.size = function () {
      return this._size
    },
    lh.prototype.reorder = function (t) {
      for (var e = null, n = this._items.get(t); 2 * t <= this._size && ((e = 2 * t) !== this._size && this._items.get(e + 1).compareTo(this._items.get(e)) < 0 && e++,
          this._items.get(e).compareTo(n) < 0); t = e)
        this._items.set(t, this._items.get(e));
      this._items.set(t, n)
    },
    lh.prototype.clear = function () {
      this._size = 0,
        this._items.clear()
    },
    lh.prototype.isEmpty = function () {
      return 0 === this._size
    },
    lh.prototype.add = function (t) {
      this._items.add(null),
        this._size += 1;
      var e = this._size;
      for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(e / 2))) < 0; e /= 2)
        this._items.set(e, this._items.get(Math.trunc(e / 2)));
      this._items.set(e, t)
    },
    lh.prototype.interfaces_ = function () {
      return []
    },
    lh.prototype.getClass = function () {
      return lh
    };
  var ph = function () {};
  ph.prototype.visitItem = function (t) {},
    ph.prototype.interfaces_ = function () {
      return []
    },
    ph.prototype.getClass = function () {
      return ph
    };
  var fh = function () {};
  fh.prototype.insert = function (t, e) {},
    fh.prototype.remove = function (t, e) {},
    fh.prototype.query = function () {},
    fh.prototype.interfaces_ = function () {
      return []
    },
    fh.prototype.getClass = function () {
      return fh
    };
  var gh = function () {
      if (this._childBoundables = new ku,
        this._bounds = null,
        this._level = null,
        0 === arguments.length)
      ;
      else if (1 === arguments.length) {
        var t = arguments[0];
        this._level = t
      }
    },
    dh = {
      serialVersionUID: {
        configurable: !0
      }
    };
  gh.prototype.getLevel = function () {
      return this._level
    },
    gh.prototype.size = function () {
      return this._childBoundables.size()
    },
    gh.prototype.getChildBoundables = function () {
      return this._childBoundables
    },
    gh.prototype.addChildBoundable = function (t) {
      _u.isTrue(null === this._bounds),
        this._childBoundables.add(t)
    },
    gh.prototype.isEmpty = function () {
      return this._childBoundables.isEmpty()
    },
    gh.prototype.getBounds = function () {
      return null === this._bounds && (this._bounds = this.computeBounds()),
        this._bounds
    },
    gh.prototype.interfaces_ = function () {
      return [ch, hi]
    },
    gh.prototype.getClass = function () {
      return gh
    },
    dh.serialVersionUID.get = function () {
      return 0x5a1e55ec41369800
    },
    Object.defineProperties(gh, dh);
  var yh = function () {};
  yh.reverseOrder = function () {
      return {
        compare: function (t, e) {
          return e.compareTo(t)
        }
      }
    },
    yh.min = function (t) {
      return yh.sort(t),
        t.get(0)
    },
    yh.sort = function (t, e) {
      var n = t.toArray();
      e ? tc.sort(n, e) : tc.sort(n);
      for (var r = t.iterator(), i = 0, o = n.length; i < o; i++)
        r.next(),
        r.set(n[i])
    },
    yh.singletonList = function (t) {
      var e = new ku;
      return e.add(t),
        e
    };
  var _h = function () {
    this._boundable1 = null,
      this._boundable2 = null,
      this._distance = null,
      this._itemDistance = null;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2];
    this._boundable1 = t,
      this._boundable2 = e,
      this._itemDistance = n,
      this._distance = this.distance()
  };
  _h.prototype.expandToQueue = function (t, e) {
      var n = _h.isComposite(this._boundable1),
        r = _h.isComposite(this._boundable2);
      if (n && r)
        return _h.area(this._boundable1) > _h.area(this._boundable2) ? this.expand(this._boundable1, this._boundable2, t, e) : this.expand(this._boundable2, this._boundable1, t, e),
          null;
      if (n)
        return this.expand(this._boundable1, this._boundable2, t, e),
          null;
      if (r)
        return this.expand(this._boundable2, this._boundable1, t, e),
          null;
      throw new Aa("neither boundable is composite")
    },
    _h.prototype.isLeaves = function () {
      return !(_h.isComposite(this._boundable1) || _h.isComposite(this._boundable2))
    },
    _h.prototype.compareTo = function (t) {
      var e = t;
      return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0
    },
    _h.prototype.expand = function (t, e, n, r) {
      for (var i = t.getChildBoundables().iterator(); i.hasNext();) {
        var o = i.next(),
          s = new _h(o, e, this._itemDistance);
        s.getDistance() < r && n.add(s)
      }
    },
    _h.prototype.getBoundable = function (t) {
      return 0 === t ? this._boundable1 : this._boundable2
    },
    _h.prototype.getDistance = function () {
      return this._distance
    },
    _h.prototype.distance = function () {
      return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds())
    },
    _h.prototype.interfaces_ = function () {
      return [qa]
    },
    _h.prototype.getClass = function () {
      return _h
    },
    _h.area = function (t) {
      return t.getBounds().getArea()
    },
    _h.isComposite = function (t) {
      return t instanceof gh
    };
  var mh = function t() {
      if (this._root = null,
        this._built = !1,
        this._itemBoundables = new ku,
        this._nodeCapacity = null,
        0 === arguments.length) {
        var e = t.DEFAULT_NODE_CAPACITY;
        this._nodeCapacity = e
      } else if (1 === arguments.length) {
        var n = arguments[0];
        _u.isTrue(1 < n, "Node capacity must be greater than 1"),
          this._nodeCapacity = n
      }
    },
    vh = {
      IntersectsOp: {
        configurable: !0
      },
      serialVersionUID: {
        configurable: !0
      },
      DEFAULT_NODE_CAPACITY: {
        configurable: !0
      }
    };
  mh.prototype.getNodeCapacity = function () {
      return this._nodeCapacity
    },
    mh.prototype.lastNode = function (t) {
      return t.get(t.size() - 1)
    },
    mh.prototype.size = function () {
      if (0 === arguments.length)
        return this.isEmpty() ? 0 : (this.build(),
          this.size(this._root));
      if (1 === arguments.length) {
        for (var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();) {
          var n = e.next();
          n instanceof gh ? t += this.size(n) : n instanceof hh && (t += 1)
        }
        return t
      }
    },
    mh.prototype.removeItem = function (t, e) {
      for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext();) {
        var i = r.next();
        i instanceof hh && i.getItem() === e && (n = i)
      }
      return null !== n && (t.getChildBoundables().remove(n),
        !0)
    },
    mh.prototype.itemsTree = function () {
      if (0 === arguments.length) {
        this.build();
        var t = this.itemsTree(this._root);
        return null === t ? new ku : t
      }
      if (1 === arguments.length) {
        for (var e = arguments[0], n = new ku, r = e.getChildBoundables().iterator(); r.hasNext();) {
          var i = r.next();
          if (i instanceof gh) {
            var o = this.itemsTree(i);
            null !== o && n.add(o)
          } else
            i instanceof hh ? n.add(i.getItem()) : _u.shouldNeverReachHere()
        }
        return n.size() <= 0 ? null : n
      }
    },
    mh.prototype.insert = function (t, e) {
      _u.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."),
        this._itemBoundables.add(new hh(t, e))
    },
    mh.prototype.boundablesAtLevel = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = new ku;
        return this.boundablesAtLevel(t, this._root, e),
          e
      }
      if (3 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[2];
        if (_u.isTrue(-2 < n),
          r.getLevel() === n)
          return i.add(r),
            null;
        for (var o = r.getChildBoundables().iterator(); o.hasNext();) {
          var s = o.next();
          s instanceof gh ? this.boundablesAtLevel(n, s, i) : (_u.isTrue(s instanceof hh),
            -1 === n && i.add(s))
        }
        return null
      }
    },
    mh.prototype.query = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.build();
        var e = new ku;
        return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.query(t, this._root, e),
          e
      }
      if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        if (this.build(),
          this.isEmpty())
          return null;
        this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.query(n, this._root, r)
      } else if (3 === arguments.length)
        if (Va(arguments[2], ph) && arguments[0] instanceof Object && arguments[1] instanceof gh)
          for (var i = arguments[0], o = arguments[1], s = arguments[2], a = o.getChildBoundables(), u = 0; u < a.size(); u++) {
            var c = a.get(u);
            this.getIntersectsOp().intersects(c.getBounds(), i) && (c instanceof gh ? this.query(i, c, s) : c instanceof hh ? s.visitItem(c.getItem()) : _u.shouldNeverReachHere())
          }
      else if (Va(arguments[2], Bu) && arguments[0] instanceof Object && arguments[1] instanceof gh)
        for (var h = arguments[0], l = arguments[1], p = arguments[2], f = l.getChildBoundables(), g = 0; g < f.size(); g++) {
          var d = f.get(g);
          this.getIntersectsOp().intersects(d.getBounds(), h) && (d instanceof gh ? this.query(h, d, p) : d instanceof hh ? p.add(d.getItem()) : _u.shouldNeverReachHere())
        }
    },
    mh.prototype.build = function () {
      if (this._built)
        return null;
      this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1),
        this._itemBoundables = null,
        this._built = !0
    },
    mh.prototype.getRoot = function () {
      return this.build(),
        this._root
    },
    mh.prototype.remove = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        return this.build(),
          !!this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.remove(t, this._root, e)
      }
      if (3 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[2],
          o = this.removeItem(r, i);
        if (o)
          return !0;
        for (var s = null, a = r.getChildBoundables().iterator(); a.hasNext();) {
          var u = a.next();
          if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof gh && (o = this.remove(n, u, i))) {
            s = u;
            break
          }
        }
        return null !== s && s.getChildBoundables().isEmpty() && r.getChildBoundables().remove(s),
          o
      }
    },
    mh.prototype.createHigherLevels = function (t, e) {
      _u.isTrue(!t.isEmpty());
      var n = this.createParentBoundables(t, e + 1);
      return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1)
    },
    mh.prototype.depth = function () {
      if (0 === arguments.length)
        return this.isEmpty() ? 0 : (this.build(),
          this.depth(this._root));
      if (1 === arguments.length) {
        for (var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();) {
          var n = e.next();
          if (n instanceof gh) {
            var r = this.depth(n);
            t < r && (t = r)
          }
        }
        return t + 1
      }
    },
    mh.prototype.createParentBoundables = function (t, e) {
      _u.isTrue(!t.isEmpty());
      var n = new ku;
      n.add(this.createNode(e));
      var r = new ku(t);
      yh.sort(r, this.getComparator());
      for (var i = r.iterator(); i.hasNext();) {
        var o = i.next();
        this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)),
          this.lastNode(n).addChildBoundable(o)
      }
      return n
    },
    mh.prototype.isEmpty = function () {
      return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty()
    },
    mh.prototype.interfaces_ = function () {
      return [hi]
    },
    mh.prototype.getClass = function () {
      return mh
    },
    mh.compareDoubles = function (t, e) {
      return e < t ? 1 : t < e ? -1 : 0
    },
    vh.IntersectsOp.get = function () {
      return xh
    },
    vh.serialVersionUID.get = function () {
      return -0x35ef64c82d4c5400
    },
    vh.DEFAULT_NODE_CAPACITY.get = function () {
      return 10
    },
    Object.defineProperties(mh, vh);
  var xh = function () {},
    Eh = function () {};
  Eh.prototype.distance = function (t, e) {},
    Eh.prototype.interfaces_ = function () {
      return []
    },
    Eh.prototype.getClass = function () {
      return Eh
    };
  var wh = function (c) {
      function _(t) {
        t = t || _.DEFAULT_NODE_CAPACITY,
          c.call(this, t)
      }
      c && (_.__proto__ = c);
      var t = {
        STRtreeNode: {
          configurable: !0
        },
        serialVersionUID: {
          configurable: !0
        },
        xComparator: {
          configurable: !0
        },
        yComparator: {
          configurable: !0
        },
        intersectsOp: {
          configurable: !0
        },
        DEFAULT_NODE_CAPACITY: {
          configurable: !0
        }
      };
      return ((_.prototype = Object.create(c && c.prototype)).constructor = _).prototype.createParentBoundablesFromVerticalSlices = function (t, e) {
          _u.isTrue(0 < t.length);
          for (var n = new ku, r = 0; r < t.length; r++)
            n.addAll(this.createParentBoundablesFromVerticalSlice(t[r], e));
          return n
        },
        _.prototype.createNode = function (t) {
          return new bh(t)
        },
        _.prototype.size = function () {
          return 0 === arguments.length ? c.prototype.size.call(this) : c.prototype.size.apply(this, arguments)
        },
        _.prototype.insert = function () {
          if (2 !== arguments.length)
            return c.prototype.insert.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          if (t.isNull())
            return null;
          c.prototype.insert.call(this, t, e)
        },
        _.prototype.getIntersectsOp = function () {
          return _.intersectsOp
        },
        _.prototype.verticalSlices = function (t, e) {
          for (var n = Math.trunc(Math.ceil(t.size() / e)), r = new Array(e).fill(null), i = t.iterator(), o = 0; o < e; o++) {
            r[o] = new ku;
            for (var s = 0; i.hasNext() && s < n;) {
              var a = i.next();
              r[o].add(a),
                s++
            }
          }
          return r
        },
        _.prototype.query = function () {
          if (1 === arguments.length) {
            var t = arguments[0];
            return c.prototype.query.call(this, t)
          }
          if (2 === arguments.length) {
            var e = arguments[0],
              n = arguments[1];
            c.prototype.query.call(this, e, n)
          } else if (3 === arguments.length)
            if (Va(arguments[2], ph) && arguments[0] instanceof Object && arguments[1] instanceof gh) {
              var r = arguments[0],
                i = arguments[1],
                o = arguments[2];
              c.prototype.query.call(this, r, i, o)
            } else if (Va(arguments[2], Bu) && arguments[0] instanceof Object && arguments[1] instanceof gh) {
            var s = arguments[0],
              a = arguments[1],
              u = arguments[2];
            c.prototype.query.call(this, s, a, u)
          }
        },
        _.prototype.getComparator = function () {
          return _.yComparator
        },
        _.prototype.createParentBoundablesFromVerticalSlice = function (t, e) {
          return c.prototype.createParentBoundables.call(this, t, e)
        },
        _.prototype.remove = function () {
          if (2 !== arguments.length)
            return c.prototype.remove.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          return c.prototype.remove.call(this, t, e)
        },
        _.prototype.depth = function () {
          return 0 === arguments.length ? c.prototype.depth.call(this) : c.prototype.depth.apply(this, arguments)
        },
        _.prototype.createParentBoundables = function (t, e) {
          _u.isTrue(!t.isEmpty());
          var n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
            r = new ku(t);
          yh.sort(r, _.xComparator);
          var i = this.verticalSlices(r, Math.trunc(Math.ceil(Math.sqrt(n))));
          return this.createParentBoundablesFromVerticalSlices(i, e)
        },
        _.prototype.nearestNeighbour = function () {
          if (1 === arguments.length) {
            if (Va(arguments[0], Eh)) {
              var t = arguments[0],
                e = new _h(this.getRoot(), this.getRoot(), t);
              return this.nearestNeighbour(e)
            }
            if (arguments[0] instanceof _h) {
              var n = arguments[0];
              return this.nearestNeighbour(n, Da.POSITIVE_INFINITY)
            }
          } else if (2 === arguments.length) {
            if (arguments[0] instanceof _ && Va(arguments[1], Eh)) {
              var r = arguments[0],
                i = arguments[1],
                o = new _h(this.getRoot(), r.getRoot(), i);
              return this.nearestNeighbour(o)
            }
            if (arguments[0] instanceof _h && "number" == typeof arguments[1]) {
              var s = arguments[0],
                a = arguments[1],
                u = null,
                c = new lh;
              for (c.add(s); !c.isEmpty() && 0 < a;) {
                var h = c.poll(),
                  l = h.getDistance();
                if (a <= l)
                  break;
                h.isLeaves() ? (a = l,
                  u = h) : h.expandToQueue(c, a)
              }
              return [u.getBoundable(0).getItem(), u.getBoundable(1).getItem()]
            }
          } else if (3 === arguments.length) {
            var p = arguments[0],
              f = arguments[1],
              g = arguments[2],
              d = new hh(p, f),
              y = new _h(this.getRoot(), d, g);
            return this.nearestNeighbour(y)[0]
          }
        },
        _.prototype.interfaces_ = function () {
          return [fh, hi]
        },
        _.prototype.getClass = function () {
          return _
        },
        _.centreX = function (t) {
          return _.avg(t.getMinX(), t.getMaxX())
        },
        _.avg = function (t, e) {
          return (t + e) / 2
        },
        _.centreY = function (t) {
          return _.avg(t.getMinY(), t.getMaxY())
        },
        t.STRtreeNode.get = function () {
          return bh
        },
        t.serialVersionUID.get = function () {
          return 0x39920f7d5f261e0
        },
        t.xComparator.get = function () {
          return {
            interfaces_: function () {
              return [Ba]
            },
            compare: function (t, e) {
              return c.compareDoubles(_.centreX(t.getBounds()), _.centreX(e.getBounds()))
            }
          }
        },
        t.yComparator.get = function () {
          return {
            interfaces_: function () {
              return [Ba]
            },
            compare: function (t, e) {
              return c.compareDoubles(_.centreY(t.getBounds()), _.centreY(e.getBounds()))
            }
          }
        },
        t.intersectsOp.get = function () {
          return {
            interfaces_: function () {
              return [c.IntersectsOp]
            },
            intersects: function (t, e) {
              return t.intersects(e)
            }
          }
        },
        t.DEFAULT_NODE_CAPACITY.get = function () {
          return 10
        },
        Object.defineProperties(_, t),
        _
    }(mh),
    bh = function (e) {
      function t() {
        var t = arguments[0];
        e.call(this, t)
      }
      return e && (t.__proto__ = e),
        ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.computeBounds = function () {
          for (var t = null, e = this.getChildBoundables().iterator(); e.hasNext();) {
            var n = e.next();
            null === t ? t = new uu(n.getBounds()) : t.expandToInclude(n.getBounds())
          }
          return t
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(gh),
    Ih = function () {};
  Ih.prototype.interfaces_ = function () {
      return []
    },
    Ih.prototype.getClass = function () {
      return Ih
    },
    Ih.relativeSign = function (t, e) {
      return t < e ? -1 : e < t ? 1 : 0
    },
    Ih.compare = function (t, e, n) {
      if (e.equals2D(n))
        return 0;
      var r = Ih.relativeSign(e.x, n.x),
        i = Ih.relativeSign(e.y, n.y);
      switch (t) {
        case 0:
          return Ih.compareValue(r, i);
        case 1:
          return Ih.compareValue(i, r);
        case 2:
          return Ih.compareValue(i, -r);
        case 3:
          return Ih.compareValue(-r, i);
        case 4:
          return Ih.compareValue(-r, -i);
        case 5:
          return Ih.compareValue(-i, -r);
        case 6:
          return Ih.compareValue(-i, r);
        case 7:
          return Ih.compareValue(r, -i)
      }
      return _u.shouldNeverReachHere("invalid octant value"),
        0
    },
    Ih.compareValue = function (t, e) {
      return t < 0 ? -1 : 0 < t ? 1 : e < 0 ? -1 : 0 < e ? 1 : 0
    };
  var Nh = function () {
    this._segString = null,
      this.coord = null,
      this.segmentIndex = null,
      this._segmentOctant = null,
      this._isInterior = null;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2],
      r = arguments[3];
    this._segString = t,
      this.coord = new ka(e),
      this.segmentIndex = n,
      this._segmentOctant = r,
      this._isInterior = !e.equals2D(t.getCoordinate(n))
  };
  Nh.prototype.getCoordinate = function () {
      return this.coord
    },
    Nh.prototype.print = function (t) {
      t.print(this.coord),
        t.print(" seg # = " + this.segmentIndex)
    },
    Nh.prototype.compareTo = function (t) {
      var e = t;
      return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : Ih.compare(this._segmentOctant, this.coord, e.coord)
    },
    Nh.prototype.isEndPoint = function (t) {
      return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t
    },
    Nh.prototype.isInterior = function () {
      return this._isInterior
    },
    Nh.prototype.interfaces_ = function () {
      return [qa]
    },
    Nh.prototype.getClass = function () {
      return Nh
    };
  var Ch = function () {
    this._nodeMap = new vi,
      this._edge = null;
    var t = arguments[0];
    this._edge = t
  };
  Ch.prototype.getSplitCoordinates = function () {
      var t = new ju;
      this.addEndpoints();
      for (var e = this.iterator(), n = e.next(); e.hasNext();) {
        var r = e.next();
        this.addEdgeCoordinates(n, r, t),
          n = r
      }
      return t.toCoordinateArray()
    },
    Ch.prototype.addCollapsedNodes = function () {
      var t = new ku;
      this.findCollapsesFromInsertedNodes(t),
        this.findCollapsesFromExistingVertices(t);
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next().intValue();
        this.add(this._edge.getCoordinate(n), n)
      }
    },
    Ch.prototype.print = function (t) {
      t.println("Intersections:");
      for (var e = this.iterator(); e.hasNext();)
        e.next().print(t)
    },
    Ch.prototype.findCollapsesFromExistingVertices = function (t) {
      for (var e = 0; e < this._edge.size() - 2; e++) {
        var n = this._edge.getCoordinate(e),
          r = this._edge.getCoordinate(e + 2);
        n.equals2D(r) && t.add(new Za(e + 1))
      }
    },
    Ch.prototype.addEdgeCoordinates = function (t, e, n) {
      var r = this._edge.getCoordinate(e.segmentIndex),
        i = e.isInterior() || !e.coord.equals2D(r);
      n.add(new ka(t.coord), !1);
      for (var o = t.segmentIndex + 1; o <= e.segmentIndex; o++)
        n.add(this._edge.getCoordinate(o));
      i && n.add(new ka(e.coord))
    },
    Ch.prototype.iterator = function () {
      return this._nodeMap.values().iterator()
    },
    Ch.prototype.addSplitEdges = function (t) {
      this.addEndpoints(),
        this.addCollapsedNodes();
      for (var e = this.iterator(), n = e.next(); e.hasNext();) {
        var r = e.next(),
          i = this.createSplitEdge(n, r);
        t.add(i),
          n = r
      }
    },
    Ch.prototype.findCollapseIndex = function (t, e, n) {
      if (!t.coord.equals2D(e.coord))
        return !1;
      var r = e.segmentIndex - t.segmentIndex;
      return e.isInterior() || r--,
        1 === r && (n[0] = t.segmentIndex + 1,
          !0)
    },
    Ch.prototype.findCollapsesFromInsertedNodes = function (t) {
      for (var e = new Array(1).fill(null), n = this.iterator(), r = n.next(); n.hasNext();) {
        var i = n.next();
        this.findCollapseIndex(r, i, e) && t.add(new Za(e[0])),
          r = i
      }
    },
    Ch.prototype.getEdge = function () {
      return this._edge
    },
    Ch.prototype.addEndpoints = function () {
      var t = this._edge.size() - 1;
      this.add(this._edge.getCoordinate(0), 0),
        this.add(this._edge.getCoordinate(t), t)
    },
    Ch.prototype.createSplitEdge = function (t, e) {
      var n = e.segmentIndex - t.segmentIndex + 2,
        r = this._edge.getCoordinate(e.segmentIndex),
        i = e.isInterior() || !e.coord.equals2D(r);
      i || n--;
      var o = new Array(n).fill(null),
        s = 0;
      o[s++] = new ka(t.coord);
      for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
        o[s++] = this._edge.getCoordinate(a);
      return i && (o[s] = new ka(e.coord)),
        new Ph(o, this._edge.getData())
    },
    Ch.prototype.add = function (t, e) {
      var n = new Nh(this._edge, t, e, this._edge.getSegmentOctant(e)),
        r = this._nodeMap.get(n);
      return null !== r ? (_u.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"),
        r) : (this._nodeMap.put(n, n),
        n)
    },
    Ch.prototype.checkSplitEdgesCorrectness = function (t) {
      var e = this._edge.getCoordinates(),
        n = t.get(0).getCoordinate(0);
      if (!n.equals2D(e[0]))
        throw new du("bad split edge start point at " + n);
      var r = t.get(t.size() - 1).getCoordinates(),
        i = r[r.length - 1];
      if (!i.equals2D(e[e.length - 1]))
        throw new du("bad split edge end point at " + i)
    },
    Ch.prototype.interfaces_ = function () {
      return []
    },
    Ch.prototype.getClass = function () {
      return Ch
    };
  var Sh = function () {};
  Sh.prototype.interfaces_ = function () {
      return []
    },
    Sh.prototype.getClass = function () {
      return Sh
    },
    Sh.octant = function () {
      if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var t = arguments[0],
          e = arguments[1];
        if (0 === t && 0 === e)
          throw new Aa("Cannot compute the octant for point ( " + t + ", " + e + " )");
        var n = Math.abs(t),
          r = Math.abs(e);
        return 0 <= t ? 0 <= e ? r <= n ? 0 : 1 : r <= n ? 7 : 6 : 0 <= e ? r <= n ? 3 : 2 : r <= n ? 4 : 5
      }
      if (arguments[0] instanceof ka && arguments[1] instanceof ka) {
        var i = arguments[0],
          o = arguments[1],
          s = o.x - i.x,
          a = o.y - i.y;
        if (0 === s && 0 === a)
          throw new Aa("Cannot compute the octant for two identical points " + i);
        return Sh.octant(s, a)
      }
    };
  var Mh = function () {};
  Mh.prototype.getCoordinates = function () {},
    Mh.prototype.size = function () {},
    Mh.prototype.getCoordinate = function (t) {},
    Mh.prototype.isClosed = function () {},
    Mh.prototype.setData = function (t) {},
    Mh.prototype.getData = function () {},
    Mh.prototype.interfaces_ = function () {
      return []
    },
    Mh.prototype.getClass = function () {
      return Mh
    };
  var Lh = function () {};
  Lh.prototype.addIntersection = function (t, e) {},
    Lh.prototype.interfaces_ = function () {
      return [Mh]
    },
    Lh.prototype.getClass = function () {
      return Lh
    };
  var Ph = function () {
    this._nodeList = new Ch(this),
      this._pts = null,
      this._data = null;
    var t = arguments[0],
      e = arguments[1];
    this._pts = t,
      this._data = e
  };
  Ph.prototype.getCoordinates = function () {
      return this._pts
    },
    Ph.prototype.size = function () {
      return this._pts.length
    },
    Ph.prototype.getCoordinate = function (t) {
      return this._pts[t]
    },
    Ph.prototype.isClosed = function () {
      return this._pts[0].equals(this._pts[this._pts.length - 1])
    },
    Ph.prototype.getSegmentOctant = function (t) {
      return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1))
    },
    Ph.prototype.setData = function (t) {
      this._data = t
    },
    Ph.prototype.safeOctant = function (t, e) {
      return t.equals2D(e) ? 0 : Sh.octant(t, e)
    },
    Ph.prototype.getData = function () {
      return this._data
    },
    Ph.prototype.addIntersection = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        this.addIntersectionNode(t, e)
      } else if (4 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[3],
          o = new ka(n.getIntersection(i));
        this.addIntersection(o, r)
      }
    },
    Ph.prototype.toString = function () {
      return gu.toLineString(new Nc(this._pts))
    },
    Ph.prototype.getNodeList = function () {
      return this._nodeList
    },
    Ph.prototype.addIntersectionNode = function (t, e) {
      var n = e,
        r = n + 1;
      if (r < this._pts.length) {
        var i = this._pts[r];
        t.equals2D(i) && (n = r)
      }
      return this._nodeList.add(t, n)
    },
    Ph.prototype.addIntersections = function (t, e, n) {
      for (var r = 0; r < t.getIntersectionNum(); r++)
        this.addIntersection(t, e, n, r)
    },
    Ph.prototype.interfaces_ = function () {
      return [Lh]
    },
    Ph.prototype.getClass = function () {
      return Ph
    },
    Ph.getNodedSubstrings = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = new ku;
        return Ph.getNodedSubstrings(t, e),
          e
      }
      if (2 === arguments.length)
        for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();)
          i.next().getNodeList().addSplitEdges(r)
    };
  var Oh = function () {
      if (this.p0 = null,
        this.p1 = null,
        0 === arguments.length)
        this.p0 = new ka,
        this.p1 = new ka;
      else if (1 === arguments.length) {
        var t = arguments[0];
        this.p0 = new ka(t.p0),
          this.p1 = new ka(t.p1)
      } else if (2 === arguments.length)
        this.p0 = arguments[0],
        this.p1 = arguments[1];
      else if (4 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = arguments[2],
          i = arguments[3];
        this.p0 = new ka(e, n),
          this.p1 = new ka(r, i)
      }
    },
    Rh = {
      serialVersionUID: {
        configurable: !0
      }
    };
  Oh.prototype.minX = function () {
      return Math.min(this.p0.x, this.p1.x)
    },
    Oh.prototype.orientationIndex = function () {
      if (arguments[0] instanceof Oh) {
        var t = arguments[0],
          e = bu.orientationIndex(this.p0, this.p1, t.p0),
          n = bu.orientationIndex(this.p0, this.p1, t.p1);
        return 0 <= e && 0 <= n ? Math.max(e, n) : e <= 0 && n <= 0 ? Math.max(e, n) : 0
      }
      if (arguments[0] instanceof ka) {
        var r = arguments[0];
        return bu.orientationIndex(this.p0, this.p1, r)
      }
    },
    Oh.prototype.toGeometry = function (t) {
      return t.createLineString([this.p0, this.p1])
    },
    Oh.prototype.isVertical = function () {
      return this.p0.x === this.p1.x
    },
    Oh.prototype.equals = function (t) {
      if (!(t instanceof Oh))
        return !1;
      var e = t;
      return this.p0.equals(e.p0) && this.p1.equals(e.p1)
    },
    Oh.prototype.intersection = function (t) {
      var e = new xu;
      return e.computeIntersection(this.p0, this.p1, t.p0, t.p1),
        e.hasIntersection() ? e.getIntersection(0) : null
    },
    Oh.prototype.project = function () {
      if (arguments[0] instanceof ka) {
        var t = arguments[0];
        if (t.equals(this.p0) || t.equals(this.p1))
          return new ka(t);
        var e = this.projectionFactor(t),
          n = new ka;
        return n.x = this.p0.x + e * (this.p1.x - this.p0.x),
          n.y = this.p0.y + e * (this.p1.y - this.p0.y),
          n
      }
      if (arguments[0] instanceof Oh) {
        var r = arguments[0],
          i = this.projectionFactor(r.p0),
          o = this.projectionFactor(r.p1);
        if (1 <= i && 1 <= o)
          return null;
        if (i <= 0 && o <= 0)
          return null;
        var s = this.project(r.p0);
        i < 0 && (s = this.p0),
          1 < i && (s = this.p1);
        var a = this.project(r.p1);
        return o < 0 && (a = this.p0),
          1 < o && (a = this.p1),
          new Oh(s, a)
      }
    },
    Oh.prototype.normalize = function () {
      this.p1.compareTo(this.p0) < 0 && this.reverse()
    },
    Oh.prototype.angle = function () {
      return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x)
    },
    Oh.prototype.getCoordinate = function (t) {
      return 0 === t ? this.p0 : this.p1
    },
    Oh.prototype.distancePerpendicular = function (t) {
      return bu.distancePointLinePerpendicular(t, this.p0, this.p1)
    },
    Oh.prototype.minY = function () {
      return Math.min(this.p0.y, this.p1.y)
    },
    Oh.prototype.midPoint = function () {
      return Oh.midPoint(this.p0, this.p1)
    },
    Oh.prototype.projectionFactor = function (t) {
      if (t.equals(this.p0))
        return 0;
      if (t.equals(this.p1))
        return 1;
      var e = this.p1.x - this.p0.x,
        n = this.p1.y - this.p0.y,
        r = e * e + n * n;
      return r <= 0 ? Da.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r
    },
    Oh.prototype.closestPoints = function (t) {
      var e = this.intersection(t);
      if (null !== e)
        return [e, e];
      var n = new Array(2).fill(null),
        r = Da.MAX_VALUE,
        i = null,
        o = this.closestPoint(t.p0);
      r = o.distance(t.p0),
        n[0] = o,
        n[1] = t.p0;
      var s = this.closestPoint(t.p1);
      (i = s.distance(t.p1)) < r && (r = i,
        n[0] = s,
        n[1] = t.p1);
      var a = t.closestPoint(this.p0);
      (i = a.distance(this.p0)) < r && (r = i,
        n[0] = this.p0,
        n[1] = a);
      var u = t.closestPoint(this.p1);
      return (i = u.distance(this.p1)) < r && (r = i,
          n[0] = this.p1,
          n[1] = u),
        n
    },
    Oh.prototype.closestPoint = function (t) {
      var e = this.projectionFactor(t);
      return 0 < e && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1
    },
    Oh.prototype.maxX = function () {
      return Math.max(this.p0.x, this.p1.x)
    },
    Oh.prototype.getLength = function () {
      return this.p0.distance(this.p1)
    },
    Oh.prototype.compareTo = function (t) {
      var e = t,
        n = this.p0.compareTo(e.p0);
      return 0 !== n ? n : this.p1.compareTo(e.p1)
    },
    Oh.prototype.reverse = function () {
      var t = this.p0;
      this.p0 = this.p1,
        this.p1 = t
    },
    Oh.prototype.equalsTopo = function (t) {
      return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0)
    },
    Oh.prototype.lineIntersection = function (t) {
      try {
        return au.intersection(this.p0, this.p1, t.p0, t.p1)
      } catch (t) {
        if (!(t instanceof ou))
          throw t
      }
      return null
    },
    Oh.prototype.maxY = function () {
      return Math.max(this.p0.y, this.p1.y)
    },
    Oh.prototype.pointAlongOffset = function (t, e) {
      var n = this.p0.x + t * (this.p1.x - this.p0.x),
        r = this.p0.y + t * (this.p1.y - this.p0.y),
        i = this.p1.x - this.p0.x,
        o = this.p1.y - this.p0.y,
        s = Math.sqrt(i * i + o * o),
        a = 0,
        u = 0;
      if (0 !== e) {
        if (s <= 0)
          throw new Error("Cannot compute offset from zero-length line segment");
        a = e * i / s,
          u = e * o / s
      }
      return new ka(n - u, r + a)
    },
    Oh.prototype.setCoordinates = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setCoordinates(t.p0, t.p1)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        this.p0.x = e.x,
          this.p0.y = e.y,
          this.p1.x = n.x,
          this.p1.y = n.y
      }
    },
    Oh.prototype.segmentFraction = function (t) {
      var e = this.projectionFactor(t);
      return e < 0 ? e = 0 : (1 < e || Da.isNaN(e)) && (e = 1),
        e
    },
    Oh.prototype.toString = function () {
      return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")"
    },
    Oh.prototype.isHorizontal = function () {
      return this.p0.y === this.p1.y
    },
    Oh.prototype.distance = function () {
      if (arguments[0] instanceof Oh) {
        var t = arguments[0];
        return bu.distanceLineLine(this.p0, this.p1, t.p0, t.p1)
      }
      if (arguments[0] instanceof ka) {
        var e = arguments[0];
        return bu.distancePointLine(e, this.p0, this.p1)
      }
    },
    Oh.prototype.pointAlong = function (t) {
      var e = new ka;
      return e.x = this.p0.x + t * (this.p1.x - this.p0.x),
        e.y = this.p0.y + t * (this.p1.y - this.p0.y),
        e
    },
    Oh.prototype.hashCode = function () {
      var t = Da.doubleToLongBits(this.p0.x);
      t ^= 31 * Da.doubleToLongBits(this.p0.y);
      var e = Math.trunc(t) ^ Math.trunc(t >> 32),
        n = Da.doubleToLongBits(this.p1.x);
      return n ^= 31 * Da.doubleToLongBits(this.p1.y),
        e ^ Math.trunc(n) ^ Math.trunc(n >> 32)
    },
    Oh.prototype.interfaces_ = function () {
      return [qa, hi]
    },
    Oh.prototype.getClass = function () {
      return Oh
    },
    Oh.midPoint = function (t, e) {
      return new ka((t.x + e.x) / 2, (t.y + e.y) / 2)
    },
    Rh.serialVersionUID.get = function () {
      return 0x2d2172135f411c00
    },
    Object.defineProperties(Oh, Rh);
  var Th = function () {
    this.tempEnv1 = new uu,
      this.tempEnv2 = new uu,
      this._overlapSeg1 = new Oh,
      this._overlapSeg2 = new Oh
  };
  Th.prototype.overlap = function () {
      if (2 === arguments.length)
      ;
      else if (4 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          r = arguments[3];
        t.getLineSegment(e, this._overlapSeg1),
          n.getLineSegment(r, this._overlapSeg2),
          this.overlap(this._overlapSeg1, this._overlapSeg2)
      }
    },
    Th.prototype.interfaces_ = function () {
      return []
    },
    Th.prototype.getClass = function () {
      return Th
    };
  var Ah = function () {
    this._pts = null,
      this._start = null,
      this._end = null,
      this._env = null,
      this._context = null,
      this._id = null;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2],
      r = arguments[3];
    this._pts = t,
      this._start = e,
      this._end = n,
      this._context = r
  };
  Ah.prototype.getLineSegment = function (t, e) {
      e.p0 = this._pts[t],
        e.p1 = this._pts[t + 1]
    },
    Ah.prototype.computeSelect = function (t, e, n, r) {
      var i = this._pts[e],
        o = this._pts[n];
      if (r.tempEnv1.init(i, o),
        n - e == 1)
        return r.select(this, e),
          null;
      if (!t.intersects(r.tempEnv1))
        return null;
      var s = Math.trunc((e + n) / 2);
      e < s && this.computeSelect(t, e, s, r),
        s < n && this.computeSelect(t, s, n, r)
    },
    Ah.prototype.getCoordinates = function () {
      for (var t = new Array(this._end - this._start + 1).fill(null), e = 0, n = this._start; n <= this._end; n++)
        t[e++] = this._pts[n];
      return t
    },
    Ah.prototype.computeOverlaps = function (t, e) {
      this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e)
    },
    Ah.prototype.setId = function (t) {
      this._id = t
    },
    Ah.prototype.select = function (t, e) {
      this.computeSelect(t, this._start, this._end, e)
    },
    Ah.prototype.getEnvelope = function () {
      if (null === this._env) {
        var t = this._pts[this._start],
          e = this._pts[this._end];
        this._env = new uu(t, e)
      }
      return this._env
    },
    Ah.prototype.getEndIndex = function () {
      return this._end
    },
    Ah.prototype.getStartIndex = function () {
      return this._start
    },
    Ah.prototype.getContext = function () {
      return this._context
    },
    Ah.prototype.getId = function () {
      return this._id
    },
    Ah.prototype.computeOverlapsInternal = function (t, e, n, r, i, o) {
      var s = this._pts[t],
        a = this._pts[e],
        u = n._pts[r],
        c = n._pts[i];
      if (e - t == 1 && i - r == 1)
        return o.overlap(this, t, n, r),
          null;
      if (o.tempEnv1.init(s, a),
        o.tempEnv2.init(u, c),
        !o.tempEnv1.intersects(o.tempEnv2))
        return null;
      var h = Math.trunc((t + e) / 2),
        l = Math.trunc((r + i) / 2);
      t < h && (r < l && this.computeOverlapsInternal(t, h, n, r, l, o),
          l < i && this.computeOverlapsInternal(t, h, n, l, i, o)),
        h < e && (r < l && this.computeOverlapsInternal(h, e, n, r, l, o),
          l < i && this.computeOverlapsInternal(h, e, n, l, i, o))
    },
    Ah.prototype.interfaces_ = function () {
      return []
    },
    Ah.prototype.getClass = function () {
      return Ah
    };
  var Dh = function () {};
  Dh.prototype.interfaces_ = function () {
      return []
    },
    Dh.prototype.getClass = function () {
      return Dh
    },
    Dh.getChainStartIndices = function (t) {
      var e = 0,
        n = new ku;
      n.add(new Za(e));
      do {
        var r = Dh.findChainEnd(t, e);
        n.add(new Za(r)),
          e = r
      } while (e < t.length - 1);
      return Dh.toIntArray(n)
    },
    Dh.findChainEnd = function (t, e) {
      for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]);)
        n++;
      if (n >= t.length - 1)
        return t.length - 1;
      for (var r = nh.quadrant(t[n], t[n + 1]), i = e + 1; i < t.length && (t[i - 1].equals2D(t[i]) || nh.quadrant(t[i - 1], t[i]) === r);)
        i++;
      return i - 1
    },
    Dh.getChains = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return Dh.getChains(t, null)
      }
      if (2 === arguments.length) {
        for (var e = arguments[0], n = arguments[1], r = new ku, i = Dh.getChainStartIndices(e), o = 0; o < i.length - 1; o++) {
          var s = new Ah(e, i[o], i[o + 1], n);
          r.add(s)
        }
        return r
      }
    },
    Dh.toIntArray = function (t) {
      for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
        e[n] = t.get(n).intValue();
      return e
    };
  var Fh = function () {};
  Fh.prototype.computeNodes = function (t) {},
    Fh.prototype.getNodedSubstrings = function () {},
    Fh.prototype.interfaces_ = function () {
      return []
    },
    Fh.prototype.getClass = function () {
      return Fh
    };
  var qh = function () {
    if (this._segInt = null,
      0 === arguments.length)
    ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      this.setSegmentIntersector(t)
    }
  };
  qh.prototype.setSegmentIntersector = function (t) {
      this._segInt = t
    },
    qh.prototype.interfaces_ = function () {
      return [Fh]
    },
    qh.prototype.getClass = function () {
      return qh
    };
  var Gh = function (e) {
      function t(t) {
        t ? e.call(this, t) : e.call(this),
          this._monoChains = new ku,
          this._index = new wh,
          this._idCounter = 0,
          this._nodedSegStrings = null,
          this._nOverlaps = 0
      }
      e && (t.__proto__ = e);
      var n = {
        SegmentOverlapAction: {
          configurable: !0
        }
      };
      return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.getMonotoneChains = function () {
          return this._monoChains
        },
        t.prototype.getNodedSubstrings = function () {
          return Ph.getNodedSubstrings(this._nodedSegStrings)
        },
        t.prototype.getIndex = function () {
          return this._index
        },
        t.prototype.add = function (t) {
          for (var e = Dh.getChains(t.getCoordinates(), t).iterator(); e.hasNext();) {
            var n = e.next();
            n.setId(this._idCounter++),
              this._index.insert(n.getEnvelope(), n),
              this._monoChains.add(n)
          }
        },
        t.prototype.computeNodes = function (t) {
          for (var e = (this._nodedSegStrings = t).iterator(); e.hasNext();)
            this.add(e.next());
          this.intersectChains()
        },
        t.prototype.intersectChains = function () {
          for (var t = new Bh(this._segInt), e = this._monoChains.iterator(); e.hasNext();)
            for (var n = e.next(), r = this._index.query(n.getEnvelope()).iterator(); r.hasNext();) {
              var i = r.next();
              if (i.getId() > n.getId() && (n.computeOverlaps(i, t),
                  this._nOverlaps++),
                this._segInt.isDone())
                return null
            }
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        n.SegmentOverlapAction.get = function () {
          return Bh
        },
        Object.defineProperties(t, n),
        t
    }(qh),
    Bh = function (s) {
      function t() {
        s.call(this),
          this._si = null;
        var t = arguments[0];
        this._si = t
      }
      return s && (t.__proto__ = s),
        ((t.prototype = Object.create(s && s.prototype)).constructor = t).prototype.overlap = function () {
          if (4 !== arguments.length)
            return s.prototype.overlap.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2],
            r = arguments[3],
            i = t.getContext(),
            o = n.getContext();
          this._si.processIntersections(i, e, o, r)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(Th),
    kh = function t() {
      if (this._quadrantSegments = t.DEFAULT_QUADRANT_SEGMENTS,
        this._endCapStyle = t.CAP_ROUND,
        this._joinStyle = t.JOIN_ROUND,
        this._mitreLimit = t.DEFAULT_MITRE_LIMIT,
        this._isSingleSided = !1,
        this._simplifyFactor = t.DEFAULT_SIMPLIFY_FACTOR,
        0 === arguments.length)
      ;
      else if (1 === arguments.length) {
        var e = arguments[0];
        this.setQuadrantSegments(e)
      } else if (2 === arguments.length) {
        var n = arguments[0],
          r = arguments[1];
        this.setQuadrantSegments(n),
          this.setEndCapStyle(r)
      } else if (4 === arguments.length) {
        var i = arguments[0],
          o = arguments[1],
          s = arguments[2],
          a = arguments[3];
        this.setQuadrantSegments(i),
          this.setEndCapStyle(o),
          this.setJoinStyle(s),
          this.setMitreLimit(a)
      }
    },
    zh = {
      CAP_ROUND: {
        configurable: !0
      },
      CAP_FLAT: {
        configurable: !0
      },
      CAP_SQUARE: {
        configurable: !0
      },
      JOIN_ROUND: {
        configurable: !0
      },
      JOIN_MITRE: {
        configurable: !0
      },
      JOIN_BEVEL: {
        configurable: !0
      },
      DEFAULT_QUADRANT_SEGMENTS: {
        configurable: !0
      },
      DEFAULT_MITRE_LIMIT: {
        configurable: !0
      },
      DEFAULT_SIMPLIFY_FACTOR: {
        configurable: !0
      }
    };
  kh.prototype.getEndCapStyle = function () {
      return this._endCapStyle
    },
    kh.prototype.isSingleSided = function () {
      return this._isSingleSided
    },
    kh.prototype.setQuadrantSegments = function (t) {
      this._quadrantSegments = t,
        0 === this._quadrantSegments && (this._joinStyle = kh.JOIN_BEVEL),
        this._quadrantSegments < 0 && (this._joinStyle = kh.JOIN_MITRE,
          this._mitreLimit = Math.abs(this._quadrantSegments)),
        t <= 0 && (this._quadrantSegments = 1),
        this._joinStyle !== kh.JOIN_ROUND && (this._quadrantSegments = kh.DEFAULT_QUADRANT_SEGMENTS)
    },
    kh.prototype.getJoinStyle = function () {
      return this._joinStyle
    },
    kh.prototype.setJoinStyle = function (t) {
      this._joinStyle = t
    },
    kh.prototype.setSimplifyFactor = function (t) {
      this._simplifyFactor = t < 0 ? 0 : t
    },
    kh.prototype.getSimplifyFactor = function () {
      return this._simplifyFactor
    },
    kh.prototype.getQuadrantSegments = function () {
      return this._quadrantSegments
    },
    kh.prototype.setEndCapStyle = function (t) {
      this._endCapStyle = t
    },
    kh.prototype.getMitreLimit = function () {
      return this._mitreLimit
    },
    kh.prototype.setMitreLimit = function (t) {
      this._mitreLimit = t
    },
    kh.prototype.setSingleSided = function (t) {
      this._isSingleSided = t
    },
    kh.prototype.interfaces_ = function () {
      return []
    },
    kh.prototype.getClass = function () {
      return kh
    },
    kh.bufferDistanceError = function (t) {
      var e = Math.PI / 2 / t;
      return 1 - Math.cos(e / 2)
    },
    zh.CAP_ROUND.get = function () {
      return 1
    },
    zh.CAP_FLAT.get = function () {
      return 2
    },
    zh.CAP_SQUARE.get = function () {
      return 3
    },
    zh.JOIN_ROUND.get = function () {
      return 1
    },
    zh.JOIN_MITRE.get = function () {
      return 2
    },
    zh.JOIN_BEVEL.get = function () {
      return 3
    },
    zh.DEFAULT_QUADRANT_SEGMENTS.get = function () {
      return 8
    },
    zh.DEFAULT_MITRE_LIMIT.get = function () {
      return 5
    },
    zh.DEFAULT_SIMPLIFY_FACTOR.get = function () {
      return .01
    },
    Object.defineProperties(kh, zh);
  var jh = function (t) {
      this._distanceTol = null,
        this._isDeleted = null,
        this._angleOrientation = bu.COUNTERCLOCKWISE,
        this._inputLine = t || null
    },
    Xh = {
      INIT: {
        configurable: !0
      },
      DELETE: {
        configurable: !0
      },
      KEEP: {
        configurable: !0
      },
      NUM_PTS_TO_CHECK: {
        configurable: !0
      }
    };
  jh.prototype.isDeletable = function (t, e, n, r) {
      var i = this._inputLine[t],
        o = this._inputLine[e],
        s = this._inputLine[n];
      return !!this.isConcave(i, o, s) && !!this.isShallow(i, o, s, r) && this.isShallowSampled(i, o, t, n, r)
    },
    jh.prototype.deleteShallowConcavities = function () {
      for (var t = 1, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e), r = !1; n < this._inputLine.length;) {
        var i = !1;
        this.isDeletable(t, e, n, this._distanceTol) && (this._isDeleted[e] = jh.DELETE,
            r = i = !0),
          t = i ? n : e,
          e = this.findNextNonDeletedIndex(t),
          n = this.findNextNonDeletedIndex(e)
      }
      return r
    },
    jh.prototype.isShallowConcavity = function (t, e, n, r) {
      return bu.computeOrientation(t, e, n) === this._angleOrientation && bu.distancePointLine(e, t, n) < r
    },
    jh.prototype.isShallowSampled = function (t, e, n, r, i) {
      var o = Math.trunc((r - n) / jh.NUM_PTS_TO_CHECK);
      o <= 0 && (o = 1);
      for (var s = n; s < r; s += o)
        if (!this.isShallow(t, e, this._inputLine[s], i))
          return !1;
      return !0
    },
    jh.prototype.isConcave = function (t, e, n) {
      return bu.computeOrientation(t, e, n) === this._angleOrientation
    },
    jh.prototype.simplify = function (t) {
      this._distanceTol = Math.abs(t),
        t < 0 && (this._angleOrientation = bu.CLOCKWISE),
        this._isDeleted = new Array(this._inputLine.length).fill(null);
      for (; this.deleteShallowConcavities();)
      ;
      return this.collapseLine()
    },
    jh.prototype.findNextNonDeletedIndex = function (t) {
      for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === jh.DELETE;)
        e++;
      return e
    },
    jh.prototype.isShallow = function (t, e, n, r) {
      return bu.distancePointLine(e, t, n) < r
    },
    jh.prototype.collapseLine = function () {
      for (var t = new ju, e = 0; e < this._inputLine.length; e++)
        this._isDeleted[e] !== jh.DELETE && t.add(this._inputLine[e]);
      return t.toCoordinateArray()
    },
    jh.prototype.interfaces_ = function () {
      return []
    },
    jh.prototype.getClass = function () {
      return jh
    },
    jh.simplify = function (t, e) {
      return new jh(t).simplify(e)
    },
    Xh.INIT.get = function () {
      return 0
    },
    Xh.DELETE.get = function () {
      return 1
    },
    Xh.KEEP.get = function () {
      return 1
    },
    Xh.NUM_PTS_TO_CHECK.get = function () {
      return 10
    },
    Object.defineProperties(jh, Xh);
  var Uh = function () {
      this._ptList = null,
        this._precisionModel = null,
        this._minimimVertexDistance = 0,
        this._ptList = new ku
    },
    Yh = {
      COORDINATE_ARRAY_TYPE: {
        configurable: !0
      }
    };
  Uh.prototype.getCoordinates = function () {
      return this._ptList.toArray(Uh.COORDINATE_ARRAY_TYPE)
    },
    Uh.prototype.setPrecisionModel = function (t) {
      this._precisionModel = t
    },
    Uh.prototype.addPt = function (t) {
      var e = new ka(t);
      if (this._precisionModel.makePrecise(e),
        this.isRedundant(e))
        return null;
      this._ptList.add(e)
    },
    Uh.prototype.revere = function () {},
    Uh.prototype.addPts = function (t, e) {
      if (e)
        for (var n = 0; n < t.length; n++)
          this.addPt(t[n]);
      else
        for (var r = t.length - 1; 0 <= r; r--)
          this.addPt(t[r])
    },
    Uh.prototype.isRedundant = function (t) {
      if (this._ptList.size() < 1)
        return !1;
      var e = this._ptList.get(this._ptList.size() - 1);
      return t.distance(e) < this._minimimVertexDistance
    },
    Uh.prototype.toString = function () {
      return (new Ac).createLineString(this.getCoordinates()).toString()
    },
    Uh.prototype.closeRing = function () {
      if (this._ptList.size() < 1)
        return null;
      var t = new ka(this._ptList.get(0)),
        e = this._ptList.get(this._ptList.size() - 1);
      if (t.equals(e))
        return null;
      this._ptList.add(t)
    },
    Uh.prototype.setMinimumVertexDistance = function (t) {
      this._minimimVertexDistance = t
    },
    Uh.prototype.interfaces_ = function () {
      return []
    },
    Uh.prototype.getClass = function () {
      return Uh
    },
    Yh.COORDINATE_ARRAY_TYPE.get = function () {
      return new Array(0).fill(null)
    },
    Object.defineProperties(Uh, Yh);
  var Vh = function () {},
    Hh = {
      PI_TIMES_2: {
        configurable: !0
      },
      PI_OVER_2: {
        configurable: !0
      },
      PI_OVER_4: {
        configurable: !0
      },
      COUNTERCLOCKWISE: {
        configurable: !0
      },
      CLOCKWISE: {
        configurable: !0
      },
      NONE: {
        configurable: !0
      }
    };
  Vh.prototype.interfaces_ = function () {
      return []
    },
    Vh.prototype.getClass = function () {
      return Vh
    },
    Vh.toDegrees = function (t) {
      return 180 * t / Math.PI
    },
    Vh.normalize = function (t) {
      for (; t > Math.PI;)
        t -= Vh.PI_TIMES_2;
      for (; t <= -Math.PI;)
        t += Vh.PI_TIMES_2;
      return t
    },
    Vh.angle = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return Math.atan2(t.y, t.x)
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = n.x - e.x,
          i = n.y - e.y;
        return Math.atan2(i, r)
      }
    },
    Vh.isAcute = function (t, e, n) {
      var r = t.x - e.x,
        i = t.y - e.y;
      return 0 < r * (n.x - e.x) + i * (n.y - e.y)
    },
    Vh.isObtuse = function (t, e, n) {
      var r = t.x - e.x,
        i = t.y - e.y;
      return r * (n.x - e.x) + i * (n.y - e.y) < 0
    },
    Vh.interiorAngle = function (t, e, n) {
      var r = Vh.angle(e, t),
        i = Vh.angle(e, n);
      return Math.abs(i - r)
    },
    Vh.normalizePositive = function (t) {
      if (t < 0) {
        for (; t < 0;)
          t += Vh.PI_TIMES_2;
        Vh.PI_TIMES_2 <= t && (t = 0)
      } else {
        for (; Vh.PI_TIMES_2 <= t;)
          t -= Vh.PI_TIMES_2;
        t < 0 && (t = 0)
      }
      return t
    },
    Vh.angleBetween = function (t, e, n) {
      var r = Vh.angle(e, t),
        i = Vh.angle(e, n);
      return Vh.diff(r, i)
    },
    Vh.diff = function (t, e) {
      var n = null;
      return (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n),
        n
    },
    Vh.toRadians = function (t) {
      return t * Math.PI / 180
    },
    Vh.getTurn = function (t, e) {
      var n = Math.sin(e - t);
      return 0 < n ? Vh.COUNTERCLOCKWISE : n < 0 ? Vh.CLOCKWISE : Vh.NONE
    },
    Vh.angleBetweenOriented = function (t, e, n) {
      var r = Vh.angle(e, t),
        i = Vh.angle(e, n) - r;
      return i <= -Math.PI ? i + Vh.PI_TIMES_2 : i > Math.PI ? i - Vh.PI_TIMES_2 : i
    },
    Hh.PI_TIMES_2.get = function () {
      return 2 * Math.PI
    },
    Hh.PI_OVER_2.get = function () {
      return Math.PI / 2
    },
    Hh.PI_OVER_4.get = function () {
      return Math.PI / 4
    },
    Hh.COUNTERCLOCKWISE.get = function () {
      return bu.COUNTERCLOCKWISE
    },
    Hh.CLOCKWISE.get = function () {
      return bu.CLOCKWISE
    },
    Hh.NONE.get = function () {
      return bu.COLLINEAR
    },
    Object.defineProperties(Vh, Hh);
  var Wh = function t() {
      this._maxCurveSegmentError = 0,
        this._filletAngleQuantum = null,
        this._closingSegLengthFactor = 1,
        this._segList = null,
        this._distance = 0,
        this._precisionModel = null,
        this._bufParams = null,
        this._li = null,
        this._s0 = null,
        this._s1 = null,
        this._s2 = null,
        this._seg0 = new Oh,
        this._seg1 = new Oh,
        this._offset0 = new Oh,
        this._offset1 = new Oh,
        this._side = 0,
        this._hasNarrowConcaveAngle = !1;
      var e = arguments[0],
        n = arguments[1],
        r = arguments[2];
      this._precisionModel = e,
        this._bufParams = n,
        this._li = new xu,
        this._filletAngleQuantum = Math.PI / 2 / n.getQuadrantSegments(),
        8 <= n.getQuadrantSegments() && n.getJoinStyle() === kh.JOIN_ROUND && (this._closingSegLengthFactor = t.MAX_CLOSING_SEG_LEN_FACTOR),
        this.init(r)
    },
    Jh = {
      OFFSET_SEGMENT_SEPARATION_FACTOR: {
        configurable: !0
      },
      INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: {
        configurable: !0
      },
      CURVE_VERTEX_SNAP_DISTANCE_FACTOR: {
        configurable: !0
      },
      MAX_CLOSING_SEG_LEN_FACTOR: {
        configurable: !0
      }
    };
  Wh.prototype.addNextSegment = function (t, e) {
      if (this._s0 = this._s1,
        this._s1 = this._s2,
        this._s2 = t,
        this._seg0.setCoordinates(this._s0, this._s1),
        this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0),
        this._seg1.setCoordinates(this._s1, this._s2),
        this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1),
        this._s1.equals(this._s2))
        return null;
      var n = bu.computeOrientation(this._s0, this._s1, this._s2),
        r = n === bu.CLOCKWISE && this._side === jc.LEFT || n === bu.COUNTERCLOCKWISE && this._side === jc.RIGHT;
      0 === n ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e)
    },
    Wh.prototype.addLineEndCap = function (t, e) {
      var n = new Oh(t, e),
        r = new Oh;
      this.computeOffsetSegment(n, jc.LEFT, this._distance, r);
      var i = new Oh;
      this.computeOffsetSegment(n, jc.RIGHT, this._distance, i);
      var o = e.x - t.x,
        s = e.y - t.y,
        a = Math.atan2(s, o);
      switch (this._bufParams.getEndCapStyle()) {
        case kh.CAP_ROUND:
          this._segList.addPt(r.p1),
            this.addFilletArc(e, a + Math.PI / 2, a - Math.PI / 2, bu.CLOCKWISE, this._distance),
            this._segList.addPt(i.p1);
          break;
        case kh.CAP_FLAT:
          this._segList.addPt(r.p1),
            this._segList.addPt(i.p1);
          break;
        case kh.CAP_SQUARE:
          var u = new ka;
          u.x = Math.abs(this._distance) * Math.cos(a),
            u.y = Math.abs(this._distance) * Math.sin(a);
          var c = new ka(r.p1.x + u.x, r.p1.y + u.y),
            h = new ka(i.p1.x + u.x, i.p1.y + u.y);
          this._segList.addPt(c),
            this._segList.addPt(h)
      }
    },
    Wh.prototype.getCoordinates = function () {
      return this._segList.getCoordinates()
    },
    Wh.prototype.addMitreJoin = function (t, e, n, r) {
      var i = !0,
        o = null;
      try {
        o = au.intersection(e.p0, e.p1, n.p0, n.p1),
          (r <= 0 ? 1 : o.distance(t) / Math.abs(r)) > this._bufParams.getMitreLimit() && (i = !1)
      } catch (t) {
        if (!(t instanceof ou))
          throw t;
        o = new ka(0, 0),
          i = !1
      }
      i ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, r, this._bufParams.getMitreLimit())
    },
    Wh.prototype.addFilletCorner = function (t, e, n, r, i) {
      var o = e.x - t.x,
        s = e.y - t.y,
        a = Math.atan2(s, o),
        u = n.x - t.x,
        c = n.y - t.y,
        h = Math.atan2(c, u);
      r === bu.CLOCKWISE ? a <= h && (a += 2 * Math.PI) : h <= a && (a -= 2 * Math.PI),
        this._segList.addPt(e),
        this.addFilletArc(t, a, h, r, i),
        this._segList.addPt(n)
    },
    Wh.prototype.addOutsideTurn = function (t, e) {
      if (this._offset0.p1.distance(this._offset1.p0) < this._distance * Wh.OFFSET_SEGMENT_SEPARATION_FACTOR)
        return this._segList.addPt(this._offset0.p1),
          null;
      this._bufParams.getJoinStyle() === kh.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === kh.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1),
        this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance),
        this._segList.addPt(this._offset1.p0))
    },
    Wh.prototype.createSquare = function (t) {
      this._segList.addPt(new ka(t.x + this._distance, t.y + this._distance)),
        this._segList.addPt(new ka(t.x + this._distance, t.y - this._distance)),
        this._segList.addPt(new ka(t.x - this._distance, t.y - this._distance)),
        this._segList.addPt(new ka(t.x - this._distance, t.y + this._distance)),
        this._segList.closeRing()
    },
    Wh.prototype.addSegments = function (t, e) {
      this._segList.addPts(t, e)
    },
    Wh.prototype.addFirstSegment = function () {
      this._segList.addPt(this._offset1.p0)
    },
    Wh.prototype.addLastSegment = function () {
      this._segList.addPt(this._offset1.p1)
    },
    Wh.prototype.initSideSegments = function (t, e, n) {
      this._s1 = t,
        this._s2 = e,
        this._side = n,
        this._seg1.setCoordinates(t, e),
        this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1)
    },
    Wh.prototype.addLimitedMitreJoin = function (t, e, n, r) {
      var i = this._seg0.p1,
        o = Vh.angle(i, this._seg0.p0),
        s = Vh.angleBetweenOriented(this._seg0.p0, i, this._seg1.p1) / 2,
        a = Vh.normalize(o + s),
        u = Vh.normalize(a + Math.PI),
        c = r * n,
        h = n - c * Math.abs(Math.sin(s)),
        l = i.x + c * Math.cos(u),
        p = i.y + c * Math.sin(u),
        f = new ka(l, p),
        g = new Oh(i, f),
        d = g.pointAlongOffset(1, h),
        y = g.pointAlongOffset(1, -h);
      this._side === jc.LEFT ? (this._segList.addPt(d),
        this._segList.addPt(y)) : (this._segList.addPt(y),
        this._segList.addPt(d))
    },
    Wh.prototype.computeOffsetSegment = function (t, e, n, r) {
      var i = e === jc.LEFT ? 1 : -1,
        o = t.p1.x - t.p0.x,
        s = t.p1.y - t.p0.y,
        a = Math.sqrt(o * o + s * s),
        u = i * n * o / a,
        c = i * n * s / a;
      r.p0.x = t.p0.x - c,
        r.p0.y = t.p0.y + u,
        r.p1.x = t.p1.x - c,
        r.p1.y = t.p1.y + u
    },
    Wh.prototype.addFilletArc = function (t, e, n, r, i) {
      var o = r === bu.CLOCKWISE ? -1 : 1,
        s = Math.abs(e - n),
        a = Math.trunc(s / this._filletAngleQuantum + .5);
      if (a < 1)
        return null;
      for (var u = s / a, c = 0, h = new ka; c < s;) {
        var l = e + o * c;
        h.x = t.x + i * Math.cos(l),
          h.y = t.y + i * Math.sin(l),
          this._segList.addPt(h),
          c += u
      }
    },
    Wh.prototype.addInsideTurn = function (t, e) {
      if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1),
        this._li.hasIntersection())
        this._segList.addPt(this._li.getIntersection(0));
      else if (this._hasNarrowConcaveAngle = !0,
        this._offset0.p1.distance(this._offset1.p0) < this._distance * Wh.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
        this._segList.addPt(this._offset0.p1);
      else {
        if (this._segList.addPt(this._offset0.p1),
          0 < this._closingSegLengthFactor) {
          var n = new ka((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
          this._segList.addPt(n);
          var r = new ka((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
          this._segList.addPt(r)
        } else
          this._segList.addPt(this._s1);
        this._segList.addPt(this._offset1.p0)
      }
    },
    Wh.prototype.createCircle = function (t) {
      var e = new ka(t.x + this._distance, t.y);
      this._segList.addPt(e),
        this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance),
        this._segList.closeRing()
    },
    Wh.prototype.addBevelJoin = function (t, e) {
      this._segList.addPt(t.p1),
        this._segList.addPt(e.p0)
    },
    Wh.prototype.init = function (t) {
      this._distance = t,
        this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)),
        this._segList = new Uh,
        this._segList.setPrecisionModel(this._precisionModel),
        this._segList.setMinimumVertexDistance(t * Wh.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)
    },
    Wh.prototype.addCollinear = function (t) {
      this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2),
        2 <= this._li.getIntersectionNum() && (this._bufParams.getJoinStyle() === kh.JOIN_BEVEL || this._bufParams.getJoinStyle() === kh.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1),
          this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, bu.CLOCKWISE, this._distance))
    },
    Wh.prototype.closeRing = function () {
      this._segList.closeRing()
    },
    Wh.prototype.hasNarrowConcaveAngle = function () {
      return this._hasNarrowConcaveAngle
    },
    Wh.prototype.interfaces_ = function () {
      return []
    },
    Wh.prototype.getClass = function () {
      return Wh
    },
    Jh.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function () {
      return .001
    },
    Jh.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function () {
      return .001
    },
    Jh.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function () {
      return 1e-6
    },
    Jh.MAX_CLOSING_SEG_LEN_FACTOR.get = function () {
      return 80
    },
    Object.defineProperties(Wh, Jh);
  var Zh = function () {
    this._distance = 0,
      this._precisionModel = null,
      this._bufParams = null;
    var t = arguments[0],
      e = arguments[1];
    this._precisionModel = t,
      this._bufParams = e
  };
  Zh.prototype.getOffsetCurve = function (t, e) {
      if (0 === (this._distance = e))
        return null;
      var n = e < 0,
        r = Math.abs(e),
        i = this.getSegGen(r);
      t.length <= 1 ? this.computePointCurve(t[0], i) : this.computeOffsetCurve(t, n, i);
      var o = i.getCoordinates();
      return n && Xu.reverse(o),
        o
    },
    Zh.prototype.computeSingleSidedBufferCurve = function (t, e, n) {
      var r = this.simplifyTolerance(this._distance);
      if (e) {
        n.addSegments(t, !0);
        var i = jh.simplify(t, -r),
          o = i.length - 1;
        n.initSideSegments(i[o], i[o - 1], jc.LEFT),
          n.addFirstSegment();
        for (var s = o - 2; 0 <= s; s--)
          n.addNextSegment(i[s], !0)
      } else {
        n.addSegments(t, !1);
        var a = jh.simplify(t, r),
          u = a.length - 1;
        n.initSideSegments(a[0], a[1], jc.LEFT),
          n.addFirstSegment();
        for (var c = 2; c <= u; c++)
          n.addNextSegment(a[c], !0)
      }
      n.addLastSegment(),
        n.closeRing()
    },
    Zh.prototype.computeRingBufferCurve = function (t, e, n) {
      var r = this.simplifyTolerance(this._distance);
      e === jc.RIGHT && (r = -r);
      var i = jh.simplify(t, r),
        o = i.length - 1;
      n.initSideSegments(i[o - 1], i[0], e);
      for (var s = 1; s <= o; s++) {
        var a = 1 !== s;
        n.addNextSegment(i[s], a)
      }
      n.closeRing()
    },
    Zh.prototype.computeLineBufferCurve = function (t, e) {
      var n = this.simplifyTolerance(this._distance),
        r = jh.simplify(t, n),
        i = r.length - 1;
      e.initSideSegments(r[0], r[1], jc.LEFT);
      for (var o = 2; o <= i; o++)
        e.addNextSegment(r[o], !0);
      e.addLastSegment(),
        e.addLineEndCap(r[i - 1], r[i]);
      var s = jh.simplify(t, -n),
        a = s.length - 1;
      e.initSideSegments(s[a], s[a - 1], jc.LEFT);
      for (var u = a - 2; 0 <= u; u--)
        e.addNextSegment(s[u], !0);
      e.addLastSegment(),
        e.addLineEndCap(s[1], s[0]),
        e.closeRing()
    },
    Zh.prototype.computePointCurve = function (t, e) {
      switch (this._bufParams.getEndCapStyle()) {
        case kh.CAP_ROUND:
          e.createCircle(t);
          break;
        case kh.CAP_SQUARE:
          e.createSquare(t)
      }
    },
    Zh.prototype.getLineCurve = function (t, e) {
      if ((this._distance = e) < 0 && !this._bufParams.isSingleSided())
        return null;
      if (0 === e)
        return null;
      var n = Math.abs(e),
        r = this.getSegGen(n);
      if (t.length <= 1)
        this.computePointCurve(t[0], r);
      else if (this._bufParams.isSingleSided()) {
        var i = e < 0;
        this.computeSingleSidedBufferCurve(t, i, r)
      } else
        this.computeLineBufferCurve(t, r);
      return r.getCoordinates()
    },
    Zh.prototype.getBufferParameters = function () {
      return this._bufParams
    },
    Zh.prototype.simplifyTolerance = function (t) {
      return t * this._bufParams.getSimplifyFactor()
    },
    Zh.prototype.getRingCurve = function (t, e, n) {
      if (this._distance = n,
        t.length <= 2)
        return this.getLineCurve(t, n);
      if (0 === n)
        return Zh.copyCoordinates(t);
      var r = this.getSegGen(n);
      return this.computeRingBufferCurve(t, e, r),
        r.getCoordinates()
    },
    Zh.prototype.computeOffsetCurve = function (t, e, n) {
      var r = this.simplifyTolerance(this._distance);
      if (e) {
        var i = jh.simplify(t, -r),
          o = i.length - 1;
        n.initSideSegments(i[o], i[o - 1], jc.LEFT),
          n.addFirstSegment();
        for (var s = o - 2; 0 <= s; s--)
          n.addNextSegment(i[s], !0)
      } else {
        var a = jh.simplify(t, r),
          u = a.length - 1;
        n.initSideSegments(a[0], a[1], jc.LEFT),
          n.addFirstSegment();
        for (var c = 2; c <= u; c++)
          n.addNextSegment(a[c], !0)
      }
      n.addLastSegment()
    },
    Zh.prototype.getSegGen = function (t) {
      return new Wh(this._precisionModel, this._bufParams, t)
    },
    Zh.prototype.interfaces_ = function () {
      return []
    },
    Zh.prototype.getClass = function () {
      return Zh
    },
    Zh.copyCoordinates = function (t) {
      for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
        e[n] = new ka(t[n]);
      return e
    };
  var Kh = function () {
      this._subgraphs = null,
        this._seg = new Oh,
        this._cga = new bu;
      var t = arguments[0];
      this._subgraphs = t
    },
    Qh = {
      DepthSegment: {
        configurable: !0
      }
    };
  Kh.prototype.findStabbedSegments = function () {
      if (1 === arguments.length) {
        for (var t = arguments[0], e = new ku, n = this._subgraphs.iterator(); n.hasNext();) {
          var r = n.next(),
            i = r.getEnvelope();
          t.y < i.getMinY() || t.y > i.getMaxY() || this.findStabbedSegments(t, r.getDirectedEdges(), e)
        }
        return e
      }
      if (3 === arguments.length)
        if (Va(arguments[2], Bu) && arguments[0] instanceof ka && arguments[1] instanceof oh) {
          for (var o = arguments[0], s = arguments[1], a = arguments[2], u = s.getEdge().getCoordinates(), c = 0; c < u.length - 1; c++)
            if (this._seg.p0 = u[c],
              this._seg.p1 = u[c + 1],
              this._seg.p0.y > this._seg.p1.y && this._seg.reverse(),
              !(Math.max(this._seg.p0.x, this._seg.p1.x) < o.x || this._seg.isHorizontal() || o.y < this._seg.p0.y || o.y > this._seg.p1.y || bu.computeOrientation(this._seg.p0, this._seg.p1, o) === bu.RIGHT)) {
              var h = s.getDepth(jc.LEFT);
              this._seg.p0.equals(u[c]) || (h = s.getDepth(jc.RIGHT));
              var l = new $h(this._seg, h);
              a.add(l)
            }
        } else if (Va(arguments[2], Bu) && arguments[0] instanceof ka && Va(arguments[1], Bu))
        for (var p = arguments[0], f = arguments[1], g = arguments[2], d = f.iterator(); d.hasNext();) {
          var y = d.next();
          y.isForward() && this.findStabbedSegments(p, y, g)
        }
    },
    Kh.prototype.getDepth = function (t) {
      var e = this.findStabbedSegments(t);
      return 0 === e.size() ? 0 : yh.min(e)._leftDepth
    },
    Kh.prototype.interfaces_ = function () {
      return []
    },
    Kh.prototype.getClass = function () {
      return Kh
    },
    Qh.DepthSegment.get = function () {
      return $h
    },
    Object.defineProperties(Kh, Qh);
  var $h = function () {
    this._upwardSeg = null,
      this._leftDepth = null;
    var t = arguments[0],
      e = arguments[1];
    this._upwardSeg = new Oh(t),
      this._leftDepth = e
  };
  $h.prototype.compareTo = function (t) {
      var e = t;
      if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
        return 1;
      if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
        return -1;
      var n = this._upwardSeg.orientationIndex(e._upwardSeg);
      return 0 !== n ? n : 0 != (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg)) ? n : this._upwardSeg.compareTo(e._upwardSeg)
    },
    $h.prototype.compareX = function (t, e) {
      var n = t.p0.compareTo(e.p0);
      return 0 !== n ? n : t.p1.compareTo(e.p1)
    },
    $h.prototype.toString = function () {
      return this._upwardSeg.toString()
    },
    $h.prototype.interfaces_ = function () {
      return [qa]
    },
    $h.prototype.getClass = function () {
      return $h
    };
  var tl = function (t, e, n) {
    this.p0 = t || null,
      this.p1 = e || null,
      this.p2 = n || null
  };
  tl.prototype.area = function () {
      return tl.area(this.p0, this.p1, this.p2)
    },
    tl.prototype.signedArea = function () {
      return tl.signedArea(this.p0, this.p1, this.p2)
    },
    tl.prototype.interpolateZ = function (t) {
      if (null === t)
        throw new Aa("Supplied point is null.");
      return tl.interpolateZ(t, this.p0, this.p1, this.p2)
    },
    tl.prototype.longestSideLength = function () {
      return tl.longestSideLength(this.p0, this.p1, this.p2)
    },
    tl.prototype.isAcute = function () {
      return tl.isAcute(this.p0, this.p1, this.p2)
    },
    tl.prototype.circumcentre = function () {
      return tl.circumcentre(this.p0, this.p1, this.p2)
    },
    tl.prototype.area3D = function () {
      return tl.area3D(this.p0, this.p1, this.p2)
    },
    tl.prototype.centroid = function () {
      return tl.centroid(this.p0, this.p1, this.p2)
    },
    tl.prototype.inCentre = function () {
      return tl.inCentre(this.p0, this.p1, this.p2)
    },
    tl.prototype.interfaces_ = function () {
      return []
    },
    tl.prototype.getClass = function () {
      return tl
    },
    tl.area = function (t, e, n) {
      return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2)
    },
    tl.signedArea = function (t, e, n) {
      return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2
    },
    tl.det = function (t, e, n, r) {
      return t * r - e * n
    },
    tl.interpolateZ = function (t, e, n, r) {
      var i = e.x,
        o = e.y,
        s = n.x - i,
        a = r.x - i,
        u = n.y - o,
        c = r.y - o,
        h = s * c - a * u,
        l = t.x - i,
        p = t.y - o,
        f = (c * l - a * p) / h,
        g = (-u * l + s * p) / h;
      return e.z + f * (n.z - e.z) + g * (r.z - e.z)
    },
    tl.longestSideLength = function (t, e, n) {
      var r = t.distance(e),
        i = e.distance(n),
        o = n.distance(t),
        s = r;
      return s < i && (s = i),
        s < o && (s = o),
        s
    },
    tl.isAcute = function (t, e, n) {
      return !!Vh.isAcute(t, e, n) && !!Vh.isAcute(e, n, t) && !!Vh.isAcute(n, t, e)
    },
    tl.circumcentre = function (t, e, n) {
      var r = n.x,
        i = n.y,
        o = t.x - r,
        s = t.y - i,
        a = e.x - r,
        u = e.y - i,
        c = 2 * tl.det(o, s, a, u),
        h = tl.det(s, o * o + s * s, u, a * a + u * u),
        l = tl.det(o, o * o + s * s, a, a * a + u * u);
      return new ka(r - h / c, i + l / c)
    },
    tl.perpendicularBisector = function (t, e) {
      var n = e.x - t.x,
        r = e.y - t.y,
        i = new au(t.x + n / 2, t.y + r / 2, 1),
        o = new au(t.x - r + n / 2, t.y + n + r / 2, 1);
      return new au(i, o)
    },
    tl.angleBisector = function (t, e, n) {
      var r = e.distance(t),
        i = r / (r + e.distance(n)),
        o = n.x - t.x,
        s = n.y - t.y;
      return new ka(t.x + i * o, t.y + i * s)
    },
    tl.area3D = function (t, e, n) {
      var r = e.x - t.x,
        i = e.y - t.y,
        o = e.z - t.z,
        s = n.x - t.x,
        a = n.y - t.y,
        u = n.z - t.z,
        c = i * u - o * a,
        h = o * s - r * u,
        l = r * a - i * s,
        p = c * c + h * h + l * l;
      return Math.sqrt(p) / 2
    },
    tl.centroid = function (t, e, n) {
      var r = (t.x + e.x + n.x) / 3,
        i = (t.y + e.y + n.y) / 3;
      return new ka(r, i)
    },
    tl.inCentre = function (t, e, n) {
      var r = e.distance(n),
        i = t.distance(n),
        o = t.distance(e),
        s = r + i + o,
        a = (r * t.x + i * e.x + o * n.x) / s,
        u = (r * t.y + i * e.y + o * n.y) / s;
      return new ka(a, u)
    };
  var el = function () {
    this._inputGeom = null,
      this._distance = null,
      this._curveBuilder = null,
      this._curveList = new ku;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2];
    this._inputGeom = t,
      this._distance = e,
      this._curveBuilder = n
  };
  el.prototype.addPoint = function (t) {
      if (this._distance <= 0)
        return null;
      var e = t.getCoordinates(),
        n = this._curveBuilder.getLineCurve(e, this._distance);
      this.addCurve(n, Ua.EXTERIOR, Ua.INTERIOR)
    },
    el.prototype.addPolygon = function (t) {
      var e = this._distance,
        n = jc.LEFT;
      this._distance < 0 && (e = -this._distance,
        n = jc.RIGHT);
      var r = t.getExteriorRing(),
        i = Xu.removeRepeatedPoints(r.getCoordinates());
      if (this._distance < 0 && this.isErodedCompletely(r, this._distance))
        return null;
      if (this._distance <= 0 && i.length < 3)
        return null;
      this.addPolygonRing(i, e, n, Ua.EXTERIOR, Ua.INTERIOR);
      for (var o = 0; o < t.getNumInteriorRing(); o++) {
        var s = t.getInteriorRingN(o),
          a = Xu.removeRepeatedPoints(s.getCoordinates());
        0 < this._distance && this.isErodedCompletely(s, -this._distance) || this.addPolygonRing(a, e, jc.opposite(n), Ua.INTERIOR, Ua.EXTERIOR)
      }
    },
    el.prototype.isTriangleErodedCompletely = function (t, e) {
      var n = new tl(t[0], t[1], t[2]),
        r = n.inCentre();
      return bu.distancePointLine(r, n.p0, n.p1) < Math.abs(e)
    },
    el.prototype.addLineString = function (t) {
      if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
        return null;
      var e = Xu.removeRepeatedPoints(t.getCoordinates()),
        n = this._curveBuilder.getLineCurve(e, this._distance);
      this.addCurve(n, Ua.EXTERIOR, Ua.INTERIOR)
    },
    el.prototype.addCurve = function (t, e, n) {
      if (null === t || t.length < 2)
        return null;
      var r = new Ph(t, new Jc(0, Ua.BOUNDARY, e, n));
      this._curveList.add(r)
    },
    el.prototype.getCurves = function () {
      return this.add(this._inputGeom),
        this._curveList
    },
    el.prototype.addPolygonRing = function (t, e, n, r, i) {
      if (0 === e && t.length < mc.MINIMUM_VALID_SIZE)
        return null;
      var o = r,
        s = i;
      t.length >= mc.MINIMUM_VALID_SIZE && bu.isCCW(t) && (o = i,
        s = r,
        n = jc.opposite(n));
      var a = this._curveBuilder.getRingCurve(t, n, e);
      this.addCurve(a, o, s)
    },
    el.prototype.add = function (t) {
      if (t.isEmpty())
        return null;
      t instanceof yc ? this.addPolygon(t) : t instanceof pc ? this.addLineString(t) : t instanceof gc ? this.addPoint(t) : t instanceof _c ? this.addCollection(t) : t instanceof sc ? this.addCollection(t) : t instanceof vc ? this.addCollection(t) : t instanceof oc && this.addCollection(t)
    },
    el.prototype.isErodedCompletely = function (t, e) {
      var n = t.getCoordinates();
      if (n.length < 4)
        return e < 0;
      if (4 === n.length)
        return this.isTriangleErodedCompletely(n, e);
      var r = t.getEnvelopeInternal(),
        i = Math.min(r.getHeight(), r.getWidth());
      return e < 0 && 2 * Math.abs(e) > i
    },
    el.prototype.addCollection = function (t) {
      for (var e = 0; e < t.getNumGeometries(); e++) {
        var n = t.getGeometryN(e);
        this.add(n)
      }
    },
    el.prototype.interfaces_ = function () {
      return []
    },
    el.prototype.getClass = function () {
      return el
    };
  var nl = function () {};
  nl.prototype.locate = function (t) {},
    nl.prototype.interfaces_ = function () {
      return []
    },
    nl.prototype.getClass = function () {
      return nl
    };
  var rl = function () {
    this._parent = null,
      this._atStart = null,
      this._max = null,
      this._index = null,
      this._subcollectionIterator = null;
    var t = arguments[0];
    this._parent = t,
      this._atStart = !0,
      this._index = 0,
      this._max = t.getNumGeometries()
  };
  rl.prototype.next = function () {
      if (this._atStart)
        return this._atStart = !1,
          rl.isAtomic(this._parent) && this._index++,
          this._parent;
      if (null !== this._subcollectionIterator) {
        if (this._subcollectionIterator.hasNext())
          return this._subcollectionIterator.next();
        this._subcollectionIterator = null
      }
      if (this._index >= this._max)
        throw new li;
      var t = this._parent.getGeometryN(this._index++);
      return t instanceof oc ? (this._subcollectionIterator = new rl(t),
        this._subcollectionIterator.next()) : t
    },
    rl.prototype.remove = function () {
      throw new Error(this.getClass().getName())
    },
    rl.prototype.hasNext = function () {
      if (this._atStart)
        return !0;
      if (null !== this._subcollectionIterator) {
        if (this._subcollectionIterator.hasNext())
          return !0;
        this._subcollectionIterator = null
      }
      return !(this._index >= this._max)
    },
    rl.prototype.interfaces_ = function () {
      return [Gu]
    },
    rl.prototype.getClass = function () {
      return rl
    },
    rl.isAtomic = function (t) {
      return !(t instanceof oc)
    };
  var il = function () {
    this._geom = null;
    var t = arguments[0];
    this._geom = t
  };
  il.prototype.locate = function (t) {
      return il.locate(t, this._geom)
    },
    il.prototype.interfaces_ = function () {
      return [nl]
    },
    il.prototype.getClass = function () {
      return il
    },
    il.isPointInRing = function (t, e) {
      return !!e.getEnvelopeInternal().intersects(t) && bu.isPointInRing(t, e.getCoordinates())
    },
    il.containsPointInPolygon = function (t, e) {
      if (e.isEmpty())
        return !1;
      var n = e.getExteriorRing();
      if (!il.isPointInRing(t, n))
        return !1;
      for (var r = 0; r < e.getNumInteriorRing(); r++) {
        var i = e.getInteriorRingN(r);
        if (il.isPointInRing(t, i))
          return !1
      }
      return !0
    },
    il.containsPoint = function (t, e) {
      if (e instanceof yc)
        return il.containsPointInPolygon(t, e);
      if (e instanceof oc)
        for (var n = new rl(e); n.hasNext();) {
          var r = n.next();
          if (r !== e && il.containsPoint(t, r))
            return !0
        }
      return !1
    },
    il.locate = function (t, e) {
      return e.isEmpty() ? Ua.EXTERIOR : il.containsPoint(t, e) ? Ua.INTERIOR : Ua.EXTERIOR
    };
  var ol = function () {
    this._edgeMap = new vi,
      this._edgeList = null,
      this._ptInAreaLocation = [Ua.NONE, Ua.NONE]
  };
  ol.prototype.getNextCW = function (t) {
      this.getEdges();
      var e = this._edgeList.indexOf(t),
        n = e - 1;
      return 0 === e && (n = this._edgeList.size() - 1),
        this._edgeList.get(n)
    },
    ol.prototype.propagateSideLabels = function (t) {
      for (var e = Ua.NONE, n = this.iterator(); n.hasNext();) {
        var r = n.next().getLabel();
        r.isArea(t) && r.getLocation(t, jc.LEFT) !== Ua.NONE && (e = r.getLocation(t, jc.LEFT))
      }
      if (e === Ua.NONE)
        return null;
      for (var i = e, o = this.iterator(); o.hasNext();) {
        var s = o.next(),
          a = s.getLabel();
        if (a.getLocation(t, jc.ON) === Ua.NONE && a.setLocation(t, jc.ON, i),
          a.isArea(t)) {
          var u = a.getLocation(t, jc.LEFT),
            c = a.getLocation(t, jc.RIGHT);
          if (c !== Ua.NONE) {
            if (c !== i)
              throw new Yc("side location conflict", s.getCoordinate());
            u === Ua.NONE && _u.shouldNeverReachHere("found single null side (at " + s.getCoordinate() + ")"),
              i = u
          } else
            _u.isTrue(a.getLocation(t, jc.LEFT) === Ua.NONE, "found single null side"),
            a.setLocation(t, jc.RIGHT, i),
            a.setLocation(t, jc.LEFT, i)
        }
      }
    },
    ol.prototype.getCoordinate = function () {
      var t = this.iterator();
      return t.hasNext() ? t.next().getCoordinate() : null
    },
    ol.prototype.print = function (t) {
      su.out.println("EdgeEndStar:   " + this.getCoordinate());
      for (var e = this.iterator(); e.hasNext();)
        e.next().print(t)
    },
    ol.prototype.isAreaLabelsConsistent = function (t) {
      return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),
        this.checkAreaLabelsConsistent(0)
    },
    ol.prototype.checkAreaLabelsConsistent = function (t) {
      var e = this.getEdges();
      if (e.size() <= 0)
        return !0;
      var n = e.size() - 1,
        r = e.get(n).getLabel().getLocation(t, jc.LEFT);
      _u.isTrue(r !== Ua.NONE, "Found unlabelled area edge");
      for (var i = r, o = this.iterator(); o.hasNext();) {
        var s = o.next().getLabel();
        _u.isTrue(s.isArea(t), "Found non-area edge");
        var a = s.getLocation(t, jc.LEFT),
          u = s.getLocation(t, jc.RIGHT);
        if (a === u)
          return !1;
        if (u !== i)
          return !1;
        i = a
      }
      return !0
    },
    ol.prototype.findIndex = function (t) {
      this.iterator();
      for (var e = 0; e < this._edgeList.size(); e++)
        if (this._edgeList.get(e) === t)
          return e;
      return -1
    },
    ol.prototype.iterator = function () {
      return this.getEdges().iterator()
    },
    ol.prototype.getEdges = function () {
      return null === this._edgeList && (this._edgeList = new ku(this._edgeMap.values())),
        this._edgeList
    },
    ol.prototype.getLocation = function (t, e, n) {
      return this._ptInAreaLocation[t] === Ua.NONE && (this._ptInAreaLocation[t] = il.locate(e, n[t].getGeometry())),
        this._ptInAreaLocation[t]
    },
    ol.prototype.toString = function () {
      var t = new Ja;
      t.append("EdgeEndStar:   " + this.getCoordinate()),
        t.append("\n");
      for (var e = this.iterator(); e.hasNext();) {
        var n = e.next();
        t.append(n),
          t.append("\n")
      }
      return t.toString()
    },
    ol.prototype.computeEdgeEndLabels = function (t) {
      for (var e = this.iterator(); e.hasNext();)
        e.next().computeLabel(t)
    },
    ol.prototype.computeLabelling = function (t) {
      this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),
        this.propagateSideLabels(0),
        this.propagateSideLabels(1);
      for (var e = [!1, !1], n = this.iterator(); n.hasNext();)
        for (var r = n.next().getLabel(), i = 0; i < 2; i++)
          r.isLine(i) && r.getLocation(i) === Ua.BOUNDARY && (e[i] = !0);
      for (var o = this.iterator(); o.hasNext();)
        for (var s = o.next(), a = s.getLabel(), u = 0; u < 2; u++)
          if (a.isAnyNull(u)) {
            var c = Ua.NONE;
            if (e[u])
              c = Ua.EXTERIOR;
            else {
              var h = s.getCoordinate();
              c = this.getLocation(u, h, t)
            }
            a.setAllLocationsIfNull(u, c)
          }
    },
    ol.prototype.getDegree = function () {
      return this._edgeMap.size()
    },
    ol.prototype.insertEdgeEnd = function (t, e) {
      this._edgeMap.put(t, e),
        this._edgeList = null
    },
    ol.prototype.interfaces_ = function () {
      return []
    },
    ol.prototype.getClass = function () {
      return ol
    };
  var sl = function (o) {
      function t() {
        o.call(this),
          this._resultAreaEdgeList = null,
          this._label = null,
          this._SCANNING_FOR_INCOMING = 1,
          this._LINKING_TO_OUTGOING = 2
      }
      return o && (t.__proto__ = o),
        ((t.prototype = Object.create(o && o.prototype)).constructor = t).prototype.linkResultDirectedEdges = function () {
          this.getResultAreaEdges();
          for (var t = null, e = null, n = this._SCANNING_FOR_INCOMING, r = 0; r < this._resultAreaEdgeList.size(); r++) {
            var i = this._resultAreaEdgeList.get(r),
              o = i.getSym();
            if (i.getLabel().isArea())
              switch (null === t && i.isInResult() && (t = i),
                n) {
                case this._SCANNING_FOR_INCOMING:
                  if (!o.isInResult())
                    continue;
                  e = o,
                    n = this._LINKING_TO_OUTGOING;
                  break;
                case this._LINKING_TO_OUTGOING:
                  if (!i.isInResult())
                    continue;
                  e.setNext(i),
                    n = this._SCANNING_FOR_INCOMING
              }
          }
          if (n === this._LINKING_TO_OUTGOING) {
            if (null === t)
              throw new Yc("no outgoing dirEdge found", this.getCoordinate());
            _u.isTrue(t.isInResult(), "unable to link last incoming dirEdge"),
              e.setNext(t)
          }
        },
        t.prototype.insert = function (t) {
          var e = t;
          this.insertEdgeEnd(e, e)
        },
        t.prototype.getRightmostEdge = function () {
          var t = this.getEdges(),
            e = t.size();
          if (e < 1)
            return null;
          var n = t.get(0);
          if (1 === e)
            return n;
          var r = t.get(e - 1),
            i = n.getQuadrant(),
            o = r.getQuadrant();
          return nh.isNorthern(i) && nh.isNorthern(o) ? n : nh.isNorthern(i) || nh.isNorthern(o) ? 0 !== n.getDy() ? n : 0 !== r.getDy() ? r : (_u.shouldNeverReachHere("found two horizontal edges incident on node"),
            null) : r
        },
        t.prototype.print = function (t) {
          su.out.println("DirectedEdgeStar: " + this.getCoordinate());
          for (var e = this.iterator(); e.hasNext();) {
            var n = e.next();
            t.print("out "),
              n.print(t),
              t.println(),
              t.print("in "),
              n.getSym().print(t),
              t.println()
          }
        },
        t.prototype.getResultAreaEdges = function () {
          if (null !== this._resultAreaEdgeList)
            return this._resultAreaEdgeList;
          this._resultAreaEdgeList = new ku;
          for (var t = this.iterator(); t.hasNext();) {
            var e = t.next();
            (e.isInResult() || e.getSym().isInResult()) && this._resultAreaEdgeList.add(e)
          }
          return this._resultAreaEdgeList
        },
        t.prototype.updateLabelling = function (t) {
          for (var e = this.iterator(); e.hasNext();) {
            var n = e.next().getLabel();
            n.setAllLocationsIfNull(0, t.getLocation(0)),
              n.setAllLocationsIfNull(1, t.getLocation(1))
          }
        },
        t.prototype.linkAllDirectedEdges = function () {
          this.getEdges();
          for (var t = null, e = null, n = this._edgeList.size() - 1; 0 <= n; n--) {
            var r = this._edgeList.get(n),
              i = r.getSym();
            null === e && (e = i),
              null !== t && i.setNext(t),
              t = r
          }
          e.setNext(t)
        },
        t.prototype.computeDepths = function () {
          if (1 === arguments.length) {
            var t = arguments[0],
              e = this.findIndex(t),
              n = t.getDepth(jc.LEFT),
              r = t.getDepth(jc.RIGHT),
              i = this.computeDepths(e + 1, this._edgeList.size(), n);
            if (this.computeDepths(0, e, i) !== r)
              throw new Yc("depth mismatch at " + t.getCoordinate())
          } else if (3 === arguments.length) {
            for (var o = arguments[0], s = arguments[1], a = arguments[2], u = o; u < s; u++) {
              var c = this._edgeList.get(u);
              c.setEdgeDepths(jc.RIGHT, a),
                a = c.getDepth(jc.LEFT)
            }
            return a
          }
        },
        t.prototype.mergeSymLabels = function () {
          for (var t = this.iterator(); t.hasNext();) {
            var e = t.next();
            e.getLabel().merge(e.getSym().getLabel())
          }
        },
        t.prototype.linkMinimalDirectedEdges = function (t) {
          for (var e = null, n = null, r = this._SCANNING_FOR_INCOMING, i = this._resultAreaEdgeList.size() - 1; 0 <= i; i--) {
            var o = this._resultAreaEdgeList.get(i),
              s = o.getSym();
            switch (null === e && o.getEdgeRing() === t && (e = o),
              r) {
              case this._SCANNING_FOR_INCOMING:
                if (s.getEdgeRing() !== t)
                  continue;
                n = s,
                  r = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (o.getEdgeRing() !== t)
                  continue;
                n.setNextMin(o),
                  r = this._SCANNING_FOR_INCOMING
            }
          }
          r === this._LINKING_TO_OUTGOING && (_u.isTrue(null !== e, "found null for first outgoing dirEdge"),
            _u.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"),
            n.setNextMin(e))
        },
        t.prototype.getOutgoingDegree = function () {
          if (0 === arguments.length) {
            for (var t = 0, e = this.iterator(); e.hasNext();)
              e.next().isInResult() && t++;
            return t
          }
          if (1 === arguments.length) {
            for (var n = arguments[0], r = 0, i = this.iterator(); i.hasNext();)
              i.next().getEdgeRing() === n && r++;
            return r
          }
        },
        t.prototype.getLabel = function () {
          return this._label
        },
        t.prototype.findCoveredLineEdges = function () {
          for (var t = Ua.NONE, e = this.iterator(); e.hasNext();) {
            var n = e.next(),
              r = n.getSym();
            if (!n.isLineEdge()) {
              if (n.isInResult()) {
                t = Ua.INTERIOR;
                break
              }
              if (r.isInResult()) {
                t = Ua.EXTERIOR;
                break
              }
            }
          }
          if (t === Ua.NONE)
            return null;
          for (var i = t, o = this.iterator(); o.hasNext();) {
            var s = o.next(),
              a = s.getSym();
            s.isLineEdge() ? s.getEdge().setCovered(i === Ua.INTERIOR) : (s.isInResult() && (i = Ua.EXTERIOR),
              a.isInResult() && (i = Ua.INTERIOR))
          }
        },
        t.prototype.computeLabelling = function (t) {
          o.prototype.computeLabelling.call(this, t),
            this._label = new Jc(Ua.NONE);
          for (var e = this.iterator(); e.hasNext();)
            for (var n = e.next().getEdge().getLabel(), r = 0; r < 2; r++) {
              var i = n.getLocation(r);
              i !== Ua.INTERIOR && i !== Ua.BOUNDARY || this._label.setLocation(r, Ua.INTERIOR)
            }
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(ol),
    al = function (t) {
      function e() {
        t.apply(this, arguments)
      }
      return t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.createNode = function (t) {
          return new th(t, new sl)
        },
        e.prototype.interfaces_ = function () {
          return []
        },
        e.prototype.getClass = function () {
          return e
        },
        e
    }(sh),
    ul = function t() {
      this._pts = null,
        this._orientation = null;
      var e = arguments[0];
      this._pts = e,
        this._orientation = t.orientation(e)
    };
  ul.prototype.compareTo = function (t) {
      var e = t;
      return ul.compareOriented(this._pts, this._orientation, e._pts, e._orientation)
    },
    ul.prototype.interfaces_ = function () {
      return [qa]
    },
    ul.prototype.getClass = function () {
      return ul
    },
    ul.orientation = function (t) {
      return 1 === Xu.increasingDirection(t)
    },
    ul.compareOriented = function (t, e, n, r) {
      for (var i = e ? 1 : -1, o = r ? 1 : -1, s = e ? t.length : -1, a = r ? n.length : -1, u = e ? 0 : t.length - 1, c = r ? 0 : n.length - 1;;) {
        var h = t[u].compareTo(n[c]);
        if (0 !== h)
          return h;
        var l = (u += i) === s,
          p = (c += o) === a;
        if (l && !p)
          return -1;
        if (!l && p)
          return 1;
        if (l && p)
          return 0
      }
    };
  var cl = function () {
    this._edges = new ku,
      this._ocaMap = new vi
  };
  cl.prototype.print = function (t) {
      t.print("MULTILINESTRING ( ");
      for (var e = 0; e < this._edges.size(); e++) {
        var n = this._edges.get(e);
        0 < e && t.print(","),
          t.print("(");
        for (var r = n.getCoordinates(), i = 0; i < r.length; i++)
          0 < i && t.print(","),
          t.print(r[i].x + " " + r[i].y);
        t.println(")")
      }
      t.print(")  ")
    },
    cl.prototype.addAll = function (t) {
      for (var e = t.iterator(); e.hasNext();)
        this.add(e.next())
    },
    cl.prototype.findEdgeIndex = function (t) {
      for (var e = 0; e < this._edges.size(); e++)
        if (this._edges.get(e).equals(t))
          return e;
      return -1
    },
    cl.prototype.iterator = function () {
      return this._edges.iterator()
    },
    cl.prototype.getEdges = function () {
      return this._edges
    },
    cl.prototype.get = function (t) {
      return this._edges.get(t)
    },
    cl.prototype.findEqualEdge = function (t) {
      var e = new ul(t.getCoordinates());
      return this._ocaMap.get(e)
    },
    cl.prototype.add = function (t) {
      this._edges.add(t);
      var e = new ul(t.getCoordinates());
      this._ocaMap.put(e, t)
    },
    cl.prototype.interfaces_ = function () {
      return []
    },
    cl.prototype.getClass = function () {
      return cl
    };
  var hl = function () {};
  hl.prototype.processIntersections = function (t, e, n, r) {},
    hl.prototype.isDone = function () {},
    hl.prototype.interfaces_ = function () {
      return []
    },
    hl.prototype.getClass = function () {
      return hl
    };
  var ll = function () {
    this._hasIntersection = !1,
      this._hasProper = !1,
      this._hasProperInterior = !1,
      this._hasInterior = !1,
      this._properIntersectionPoint = null,
      this._li = null,
      this._isSelfIntersection = null,
      this.numIntersections = 0,
      this.numInteriorIntersections = 0,
      this.numProperIntersections = 0;
    var t = arguments[this.numTests = 0];
    this._li = t
  };
  ll.prototype.isTrivialIntersection = function (t, e, n, r) {
      if (t === n && 1 === this._li.getIntersectionNum()) {
        if (ll.isAdjacentSegments(e, r))
          return !0;
        if (t.isClosed()) {
          var i = t.size() - 1;
          if (0 === e && r === i || 0 === r && e === i)
            return !0
        }
      }
      return !1
    },
    ll.prototype.getProperIntersectionPoint = function () {
      return this._properIntersectionPoint
    },
    ll.prototype.hasProperInteriorIntersection = function () {
      return this._hasProperInterior
    },
    ll.prototype.getLineIntersector = function () {
      return this._li
    },
    ll.prototype.hasProperIntersection = function () {
      return this._hasProper
    },
    ll.prototype.processIntersections = function (t, e, n, r) {
      if (t === n && e === r)
        return null;
      this.numTests++;
      var i = t.getCoordinates()[e],
        o = t.getCoordinates()[e + 1],
        s = n.getCoordinates()[r],
        a = n.getCoordinates()[r + 1];
      this._li.computeIntersection(i, o, s, a),
        this._li.hasIntersection() && (this.numIntersections++,
          this._li.isInteriorIntersection() && (this.numInteriorIntersections++,
            this._hasInterior = !0),
          this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0,
            t.addIntersections(this._li, e, 0),
            n.addIntersections(this._li, r, 1),
            this._li.isProper() && (this.numProperIntersections++,
              this._hasProper = !0,
              this._hasProperInterior = !0)))
    },
    ll.prototype.hasIntersection = function () {
      return this._hasIntersection
    },
    ll.prototype.isDone = function () {
      return !1
    },
    ll.prototype.hasInteriorIntersection = function () {
      return this._hasInterior
    },
    ll.prototype.interfaces_ = function () {
      return [hl]
    },
    ll.prototype.getClass = function () {
      return ll
    },
    ll.isAdjacentSegments = function (t, e) {
      return 1 === Math.abs(t - e)
    };
  var pl = function () {
    this.coord = null,
      this.segmentIndex = null,
      this.dist = null;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2];
    this.coord = new ka(t),
      this.segmentIndex = e,
      this.dist = n
  };
  pl.prototype.getSegmentIndex = function () {
      return this.segmentIndex
    },
    pl.prototype.getCoordinate = function () {
      return this.coord
    },
    pl.prototype.print = function (t) {
      t.print(this.coord),
        t.print(" seg # = " + this.segmentIndex),
        t.println(" dist = " + this.dist)
    },
    pl.prototype.compareTo = function (t) {
      var e = t;
      return this.compare(e.segmentIndex, e.dist)
    },
    pl.prototype.isEndPoint = function (t) {
      return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t
    },
    pl.prototype.toString = function () {
      return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist
    },
    pl.prototype.getDistance = function () {
      return this.dist
    },
    pl.prototype.compare = function (t, e) {
      return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0
    },
    pl.prototype.interfaces_ = function () {
      return [qa]
    },
    pl.prototype.getClass = function () {
      return pl
    };
  var fl = function () {
    this._nodeMap = new vi,
      this.edge = null;
    var t = arguments[0];
    this.edge = t
  };
  fl.prototype.print = function (t) {
      t.println("Intersections:");
      for (var e = this.iterator(); e.hasNext();)
        e.next().print(t)
    },
    fl.prototype.iterator = function () {
      return this._nodeMap.values().iterator()
    },
    fl.prototype.addSplitEdges = function (t) {
      this.addEndpoints();
      for (var e = this.iterator(), n = e.next(); e.hasNext();) {
        var r = e.next(),
          i = this.createSplitEdge(n, r);
        t.add(i),
          n = r
      }
    },
    fl.prototype.addEndpoints = function () {
      var t = this.edge.pts.length - 1;
      this.add(this.edge.pts[0], 0, 0),
        this.add(this.edge.pts[t], t, 0)
    },
    fl.prototype.createSplitEdge = function (t, e) {
      var n = e.segmentIndex - t.segmentIndex + 2,
        r = this.edge.pts[e.segmentIndex],
        i = 0 < e.dist || !e.coord.equals2D(r);
      i || n--;
      var o = new Array(n).fill(null),
        s = 0;
      o[s++] = new ka(t.coord);
      for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
        o[s++] = this.edge.pts[a];
      return i && (o[s] = e.coord),
        new ml(o, new Jc(this.edge._label))
    },
    fl.prototype.add = function (t, e, n) {
      var r = new pl(t, e, n),
        i = this._nodeMap.get(r);
      return null !== i ? i : (this._nodeMap.put(r, r),
        r)
    },
    fl.prototype.isIntersection = function (t) {
      for (var e = this.iterator(); e.hasNext();)
        if (e.next().coord.equals(t))
          return !0;
      return !1
    },
    fl.prototype.interfaces_ = function () {
      return []
    },
    fl.prototype.getClass = function () {
      return fl
    };
  var gl = function () {};
  gl.prototype.getChainStartIndices = function (t) {
      var e = 0,
        n = new ku;
      n.add(new Za(e));
      do {
        var r = this.findChainEnd(t, e);
        n.add(new Za(r)),
          e = r
      } while (e < t.length - 1);
      return gl.toIntArray(n)
    },
    gl.prototype.findChainEnd = function (t, e) {
      for (var n = nh.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length && nh.quadrant(t[r - 1], t[r]) === n;)
        r++;
      return r - 1
    },
    gl.prototype.interfaces_ = function () {
      return []
    },
    gl.prototype.getClass = function () {
      return gl
    },
    gl.toIntArray = function (t) {
      for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
        e[n] = t.get(n).intValue();
      return e
    };
  var dl = function () {
    this.e = null,
      this.pts = null,
      this.startIndex = null,
      this.env1 = new uu,
      this.env2 = new uu;
    var t = arguments[0];
    this.e = t,
      this.pts = t.getCoordinates();
    var e = new gl;
    this.startIndex = e.getChainStartIndices(this.pts)
  };
  dl.prototype.getCoordinates = function () {
      return this.pts
    },
    dl.prototype.getMaxX = function (t) {
      var e = this.pts[this.startIndex[t]].x,
        n = this.pts[this.startIndex[t + 1]].x;
      return n < e ? e : n
    },
    dl.prototype.getMinX = function (t) {
      var e = this.pts[this.startIndex[t]].x,
        n = this.pts[this.startIndex[t + 1]].x;
      return e < n ? e : n
    },
    dl.prototype.computeIntersectsForChain = function () {
      if (4 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2],
          r = arguments[3];
        this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r)
      } else if (6 === arguments.length) {
        var i = arguments[0],
          o = arguments[1],
          s = arguments[2],
          a = arguments[3],
          u = arguments[4],
          c = arguments[5],
          h = this.pts[i],
          l = this.pts[o],
          p = s.pts[a],
          f = s.pts[u];
        if (o - i == 1 && u - a == 1)
          return c.addIntersections(this.e, i, s.e, a),
            null;
        if (this.env1.init(h, l),
          this.env2.init(p, f),
          !this.env1.intersects(this.env2))
          return null;
        var g = Math.trunc((i + o) / 2),
          d = Math.trunc((a + u) / 2);
        i < g && (a < d && this.computeIntersectsForChain(i, g, s, a, d, c),
            d < u && this.computeIntersectsForChain(i, g, s, d, u, c)),
          g < o && (a < d && this.computeIntersectsForChain(g, o, s, a, d, c),
            d < u && this.computeIntersectsForChain(g, o, s, d, u, c))
      }
    },
    dl.prototype.getStartIndexes = function () {
      return this.startIndex
    },
    dl.prototype.computeIntersects = function (t, e) {
      for (var n = 0; n < this.startIndex.length - 1; n++)
        for (var r = 0; r < t.startIndex.length - 1; r++)
          this.computeIntersectsForChain(n, t, r, e)
    },
    dl.prototype.interfaces_ = function () {
      return []
    },
    dl.prototype.getClass = function () {
      return dl
    };
  var yl = function t() {
      this._depth = Array(2).fill().map(function () {
        return Array(3)
      });
      for (var e = 0; e < 2; e++)
        for (var n = 0; n < 3; n++)
          this._depth[e][n] = t.NULL_VALUE
    },
    _l = {
      NULL_VALUE: {
        configurable: !0
      }
    };
  yl.prototype.getDepth = function (t, e) {
      return this._depth[t][e]
    },
    yl.prototype.setDepth = function (t, e, n) {
      this._depth[t][e] = n
    },
    yl.prototype.isNull = function () {
      if (0 === arguments.length) {
        for (var t = 0; t < 2; t++)
          for (var e = 0; e < 3; e++)
            if (this._depth[t][e] !== yl.NULL_VALUE)
              return !1;
        return !0
      }
      if (1 === arguments.length) {
        var n = arguments[0];
        return this._depth[n][1] === yl.NULL_VALUE
      }
      if (2 === arguments.length) {
        var r = arguments[0],
          i = arguments[1];
        return this._depth[r][i] === yl.NULL_VALUE
      }
    },
    yl.prototype.normalize = function () {
      for (var t = 0; t < 2; t++)
        if (!this.isNull(t)) {
          var e = this._depth[t][1];
          this._depth[t][2] < e && (e = this._depth[t][2]),
            e < 0 && (e = 0);
          for (var n = 1; n < 3; n++) {
            var r = 0;
            this._depth[t][n] > e && (r = 1),
              this._depth[t][n] = r
          }
        }
    },
    yl.prototype.getDelta = function (t) {
      return this._depth[t][jc.RIGHT] - this._depth[t][jc.LEFT]
    },
    yl.prototype.getLocation = function (t, e) {
      return this._depth[t][e] <= 0 ? Ua.EXTERIOR : Ua.INTERIOR
    },
    yl.prototype.toString = function () {
      return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2]
    },
    yl.prototype.add = function () {
      if (1 === arguments.length)
        for (var t = arguments[0], e = 0; e < 2; e++)
          for (var n = 1; n < 3; n++) {
            var r = t.getLocation(e, n);
            r !== Ua.EXTERIOR && r !== Ua.INTERIOR || (this.isNull(e, n) ? this._depth[e][n] = yl.depthAtLocation(r) : this._depth[e][n] += yl.depthAtLocation(r))
          }
      else if (3 === arguments.length) {
        var i = arguments[0],
          o = arguments[1];
        arguments[2] === Ua.INTERIOR && this._depth[i][o]++
      }
    },
    yl.prototype.interfaces_ = function () {
      return []
    },
    yl.prototype.getClass = function () {
      return yl
    },
    yl.depthAtLocation = function (t) {
      return t === Ua.EXTERIOR ? 0 : t === Ua.INTERIOR ? 1 : yl.NULL_VALUE
    },
    _l.NULL_VALUE.get = function () {
      return -1
    },
    Object.defineProperties(yl, _l);
  var ml = function (r) {
      function s() {
        if (r.call(this),
          this.pts = null,
          this._env = null,
          this.eiList = new fl(this),
          this._name = null,
          this._mce = null,
          this._isIsolated = !0,
          this._depth = new yl,
          this._depthDelta = 0,
          1 === arguments.length) {
          var t = arguments[0];
          s.call(this, t, null)
        } else if (2 === arguments.length) {
          var e = arguments[0],
            n = arguments[1];
          this.pts = e,
            this._label = n
        }
      }
      return r && (s.__proto__ = r),
        ((s.prototype = Object.create(r && r.prototype)).constructor = s).prototype.getDepth = function () {
          return this._depth
        },
        s.prototype.getCollapsedEdge = function () {
          var t = new Array(2).fill(null);
          return t[0] = this.pts[0],
            t[1] = this.pts[1],
            new s(t, Jc.toLineLabel(this._label))
        },
        s.prototype.isIsolated = function () {
          return this._isIsolated
        },
        s.prototype.getCoordinates = function () {
          return this.pts
        },
        s.prototype.setIsolated = function (t) {
          this._isIsolated = t
        },
        s.prototype.setName = function (t) {
          this._name = t
        },
        s.prototype.equals = function (t) {
          if (!(t instanceof s))
            return !1;
          var e = t;
          if (this.pts.length !== e.pts.length)
            return !1;
          for (var n = !0, r = !0, i = this.pts.length, o = 0; o < this.pts.length; o++)
            if (this.pts[o].equals2D(e.pts[o]) || (n = !1),
              this.pts[o].equals2D(e.pts[--i]) || (r = !1),
              !n && !r)
              return !1;
          return !0
        },
        s.prototype.getCoordinate = function () {
          if (0 === arguments.length)
            return 0 < this.pts.length ? this.pts[0] : null;
          if (1 === arguments.length) {
            var t = arguments[0];
            return this.pts[t]
          }
        },
        s.prototype.print = function (t) {
          t.print("edge " + this._name + ": "),
            t.print("LINESTRING (");
          for (var e = 0; e < this.pts.length; e++)
            0 < e && t.print(","),
            t.print(this.pts[e].x + " " + this.pts[e].y);
          t.print(")  " + this._label + " " + this._depthDelta)
        },
        s.prototype.computeIM = function (t) {
          s.updateIM(this._label, t)
        },
        s.prototype.isCollapsed = function () {
          return !!this._label.isArea() && 3 === this.pts.length && !!this.pts[0].equals(this.pts[2])
        },
        s.prototype.isClosed = function () {
          return this.pts[0].equals(this.pts[this.pts.length - 1])
        },
        s.prototype.getMaximumSegmentIndex = function () {
          return this.pts.length - 1
        },
        s.prototype.getDepthDelta = function () {
          return this._depthDelta
        },
        s.prototype.getNumPoints = function () {
          return this.pts.length
        },
        s.prototype.printReverse = function (t) {
          t.print("edge " + this._name + ": ");
          for (var e = this.pts.length - 1; 0 <= e; e--)
            t.print(this.pts[e] + " ");
          t.println("")
        },
        s.prototype.getMonotoneChainEdge = function () {
          return null === this._mce && (this._mce = new dl(this)),
            this._mce
        },
        s.prototype.getEnvelope = function () {
          if (null === this._env) {
            this._env = new uu;
            for (var t = 0; t < this.pts.length; t++)
              this._env.expandToInclude(this.pts[t])
          }
          return this._env
        },
        s.prototype.addIntersection = function (t, e, n, r) {
          var i = new ka(t.getIntersection(r)),
            o = e,
            s = t.getEdgeDistance(n, r),
            a = o + 1;
          if (a < this.pts.length) {
            var u = this.pts[a];
            i.equals2D(u) && (o = a,
              s = 0)
          }
          this.eiList.add(i, o, s)
        },
        s.prototype.toString = function () {
          var t = new Ja;
          t.append("edge " + this._name + ": "),
            t.append("LINESTRING (");
          for (var e = 0; e < this.pts.length; e++)
            0 < e && t.append(","),
            t.append(this.pts[e].x + " " + this.pts[e].y);
          return t.append(")  " + this._label + " " + this._depthDelta),
            t.toString()
        },
        s.prototype.isPointwiseEqual = function (t) {
          if (this.pts.length !== t.pts.length)
            return !1;
          for (var e = 0; e < this.pts.length; e++)
            if (!this.pts[e].equals2D(t.pts[e]))
              return !1;
          return !0
        },
        s.prototype.setDepthDelta = function (t) {
          this._depthDelta = t
        },
        s.prototype.getEdgeIntersectionList = function () {
          return this.eiList
        },
        s.prototype.addIntersections = function (t, e, n) {
          for (var r = 0; r < t.getIntersectionNum(); r++)
            this.addIntersection(t, e, n, r)
        },
        s.prototype.interfaces_ = function () {
          return []
        },
        s.prototype.getClass = function () {
          return s
        },
        s.updateIM = function () {
          if (2 !== arguments.length)
            return r.prototype.updateIM.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1];
          e.setAtLeastIfValid(t.getLocation(0, jc.ON), t.getLocation(1, jc.ON), 1),
            t.isArea() && (e.setAtLeastIfValid(t.getLocation(0, jc.LEFT), t.getLocation(1, jc.LEFT), 2),
              e.setAtLeastIfValid(t.getLocation(0, jc.RIGHT), t.getLocation(1, jc.RIGHT), 2))
        },
        s
    }($c),
    vl = function (t) {
      this._workingPrecisionModel = null,
        this._workingNoder = null,
        this._geomFact = null,
        this._graph = null,
        this._edgeList = new cl,
        this._bufParams = t || null
    };
  vl.prototype.setWorkingPrecisionModel = function (t) {
      this._workingPrecisionModel = t
    },
    vl.prototype.insertUniqueEdge = function (t) {
      var e = this._edgeList.findEqualEdge(t);
      if (null !== e) {
        var n = e.getLabel(),
          r = t.getLabel();
        e.isPointwiseEqual(t) || (r = new Jc(t.getLabel())).flip(),
          n.merge(r);
        var i = vl.depthDelta(r),
          o = e.getDepthDelta() + i;
        e.setDepthDelta(o)
      } else
        this._edgeList.add(t),
        t.setDepthDelta(vl.depthDelta(t.getLabel()))
    },
    vl.prototype.buildSubgraphs = function (t, e) {
      for (var n = new ku, r = t.iterator(); r.hasNext();) {
        var i = r.next(),
          o = i.getRightmostCoordinate(),
          s = new Kh(n).getDepth(o);
        i.computeDepth(s),
          i.findResultEdges(),
          n.add(i),
          e.add(i.getDirectedEdges(), i.getNodes())
      }
    },
    vl.prototype.createSubgraphs = function (t) {
      for (var e = new ku, n = t.getNodes().iterator(); n.hasNext();) {
        var r = n.next();
        if (!r.isVisited()) {
          var i = new Hc;
          i.create(r),
            e.add(i)
        }
      }
      return yh.sort(e, yh.reverseOrder()),
        e
    },
    vl.prototype.createEmptyResultGeometry = function () {
      return this._geomFact.createPolygon()
    },
    vl.prototype.getNoder = function (t) {
      if (null !== this._workingNoder)
        return this._workingNoder;
      var e = new Gh,
        n = new xu;
      return n.setPrecisionModel(t),
        e.setSegmentIntersector(new ll(n)),
        e
    },
    vl.prototype.buffer = function (t, e) {
      var n = this._workingPrecisionModel;
      null === n && (n = t.getPrecisionModel()),
        this._geomFact = t.getFactory();
      var r = new Zh(n, this._bufParams),
        i = new el(t, e, r).getCurves();
      if (i.size() <= 0)
        return this.createEmptyResultGeometry();
      this.computeNodedEdges(i, n),
        this._graph = new ah(new al),
        this._graph.addEdges(this._edgeList.getEdges());
      var o = this.createSubgraphs(this._graph),
        s = new uh(this._geomFact);
      this.buildSubgraphs(o, s);
      var a = s.getPolygons();
      return a.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(a)
    },
    vl.prototype.computeNodedEdges = function (t, e) {
      var n = this.getNoder(e);
      n.computeNodes(t);
      for (var r = n.getNodedSubstrings().iterator(); r.hasNext();) {
        var i = r.next(),
          o = i.getCoordinates();
        if (2 !== o.length || !o[0].equals2D(o[1])) {
          var s = i.getData(),
            a = new ml(i.getCoordinates(), new Jc(s));
          this.insertUniqueEdge(a)
        }
      }
    },
    vl.prototype.setNoder = function (t) {
      this._workingNoder = t
    },
    vl.prototype.interfaces_ = function () {
      return []
    },
    vl.prototype.getClass = function () {
      return vl
    },
    vl.depthDelta = function (t) {
      var e = t.getLocation(0, jc.LEFT),
        n = t.getLocation(0, jc.RIGHT);
      return e === Ua.INTERIOR && n === Ua.EXTERIOR ? 1 : e === Ua.EXTERIOR && n === Ua.INTERIOR ? -1 : 0
    },
    vl.convertSegStrings = function (t) {
      for (var e = new Ac, n = new ku; t.hasNext();) {
        var r = t.next(),
          i = e.createLineString(r.getCoordinates());
        n.add(i)
      }
      return e.buildGeometry(n)
    };
  var xl = function () {
    if (this._noder = null,
      this._scaleFactor = null,
      this._offsetX = null,
      this._offsetY = null,
      this._isScaled = !1,
      2 === arguments.length) {
      var t = arguments[0],
        e = arguments[1];
      this._noder = t,
        this._scaleFactor = e,
        this._offsetX = 0,
        this._offsetY = 0,
        this._isScaled = !this.isIntegerPrecision()
    } else if (4 === arguments.length) {
      var n = arguments[0],
        r = arguments[1],
        i = arguments[2],
        o = arguments[3];
      this._noder = n,
        this._scaleFactor = r,
        this._offsetX = i,
        this._offsetY = o,
        this._isScaled = !this.isIntegerPrecision()
    }
  };
  xl.prototype.rescale = function () {
      if (Va(arguments[0], Fu))
        for (var t = arguments[0].iterator(); t.hasNext();) {
          var e = t.next();
          this.rescale(e.getCoordinates())
        }
      else if (arguments[0] instanceof Array) {
        for (var n = arguments[0], r = 0; r < n.length; r++)
          n[r].x = n[r].x / this._scaleFactor + this._offsetX,
          n[r].y = n[r].y / this._scaleFactor + this._offsetY;
        2 === n.length && n[0].equals2D(n[1]) && su.out.println(n)
      }
    },
    xl.prototype.scale = function () {
      if (Va(arguments[0], Fu)) {
        for (var t = arguments[0], e = new ku, n = t.iterator(); n.hasNext();) {
          var r = n.next();
          e.add(new Ph(this.scale(r.getCoordinates()), r.getData()))
        }
        return e
      }
      if (arguments[0] instanceof Array) {
        for (var i = arguments[0], o = new Array(i.length).fill(null), s = 0; s < i.length; s++)
          o[s] = new ka(Math.round((i[s].x - this._offsetX) * this._scaleFactor), Math.round((i[s].y - this._offsetY) * this._scaleFactor), i[s].z);
        return Xu.removeRepeatedPoints(o)
      }
    },
    xl.prototype.isIntegerPrecision = function () {
      return 1 === this._scaleFactor
    },
    xl.prototype.getNodedSubstrings = function () {
      var t = this._noder.getNodedSubstrings();
      return this._isScaled && this.rescale(t),
        t
    },
    xl.prototype.computeNodes = function (t) {
      var e = t;
      this._isScaled && (e = this.scale(t)),
        this._noder.computeNodes(e)
    },
    xl.prototype.interfaces_ = function () {
      return [Fh]
    },
    xl.prototype.getClass = function () {
      return xl
    };
  var El = function () {
      this._li = new xu,
        this._segStrings = null;
      var t = arguments[0];
      this._segStrings = t
    },
    wl = {
      fact: {
        configurable: !0
      }
    };
  El.prototype.checkEndPtVertexIntersections = function () {
      if (0 === arguments.length)
        for (var t = this._segStrings.iterator(); t.hasNext();) {
          var e = t.next().getCoordinates();
          this.checkEndPtVertexIntersections(e[0], this._segStrings),
            this.checkEndPtVertexIntersections(e[e.length - 1], this._segStrings)
        }
      else if (2 === arguments.length)
        for (var n = arguments[0], r = arguments[1].iterator(); r.hasNext();)
          for (var i = r.next().getCoordinates(), o = 1; o < i.length - 1; o++)
            if (i[o].equals(n))
              throw new du("found endpt/interior pt intersection at index " + o + " :pt " + n)
    },
    El.prototype.checkInteriorIntersections = function () {
      if (0 === arguments.length)
        for (var t = this._segStrings.iterator(); t.hasNext();)
          for (var e = t.next(), n = this._segStrings.iterator(); n.hasNext();) {
            var r = n.next();
            this.checkInteriorIntersections(e, r)
          }
      else if (2 === arguments.length)
        for (var i = arguments[0], o = arguments[1], s = i.getCoordinates(), a = o.getCoordinates(), u = 0; u < s.length - 1; u++)
          for (var c = 0; c < a.length - 1; c++)
            this.checkInteriorIntersections(i, u, o, c);
      else if (4 === arguments.length) {
        var h = arguments[0],
          l = arguments[1],
          p = arguments[2],
          f = arguments[3];
        if (h === p && l === f)
          return null;
        var g = h.getCoordinates()[l],
          d = h.getCoordinates()[l + 1],
          y = p.getCoordinates()[f],
          _ = p.getCoordinates()[f + 1];
        if (this._li.computeIntersection(g, d, y, _),
          this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, g, d) || this.hasInteriorIntersection(this._li, y, _)))
          throw new du("found non-noded intersection at " + g + "-" + d + " and " + y + "-" + _)
      }
    },
    El.prototype.checkValid = function () {
      this.checkEndPtVertexIntersections(),
        this.checkInteriorIntersections(),
        this.checkCollapses()
    },
    El.prototype.checkCollapses = function () {
      if (0 === arguments.length)
        for (var t = this._segStrings.iterator(); t.hasNext();) {
          var e = t.next();
          this.checkCollapses(e)
        }
      else if (1 === arguments.length)
        for (var n = arguments[0].getCoordinates(), r = 0; r < n.length - 2; r++)
          this.checkCollapse(n[r], n[r + 1], n[r + 2])
    },
    El.prototype.hasInteriorIntersection = function (t, e, n) {
      for (var r = 0; r < t.getIntersectionNum(); r++) {
        var i = t.getIntersection(r);
        if (!i.equals(e) && !i.equals(n))
          return !0
      }
      return !1
    },
    El.prototype.checkCollapse = function (t, e, n) {
      if (t.equals(n))
        throw new du("found non-noded collapse at " + El.fact.createLineString([t, e, n]))
    },
    El.prototype.interfaces_ = function () {
      return []
    },
    El.prototype.getClass = function () {
      return El
    },
    wl.fact.get = function () {
      return new Ac
    },
    Object.defineProperties(El, wl);
  var bl = function () {
      this._li = null,
        this._pt = null,
        this._originalPt = null,
        this._ptScaled = null,
        this._p0Scaled = null,
        this._p1Scaled = null,
        this._scaleFactor = null,
        this._minx = null,
        this._maxx = null,
        this._miny = null,
        this._maxy = null,
        this._corner = new Array(4).fill(null),
        this._safeEnv = null;
      var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
      if (this._originalPt = t,
        this._pt = t,
        this._scaleFactor = e,
        this._li = n,
        e <= 0)
        throw new Aa("Scale factor must be non-zero");
      1 !== e && (this._pt = new ka(this.scale(t.x), this.scale(t.y)),
          this._p0Scaled = new ka,
          this._p1Scaled = new ka),
        this.initCorners(this._pt)
    },
    Il = {
      SAFE_ENV_EXPANSION_FACTOR: {
        configurable: !0
      }
    };
  bl.prototype.intersectsScaled = function (t, e) {
      var n = Math.min(t.x, e.x),
        r = Math.max(t.x, e.x),
        i = Math.min(t.y, e.y),
        o = Math.max(t.y, e.y),
        s = this._maxx < n || this._minx > r || this._maxy < i || this._miny > o;
      if (s)
        return !1;
      var a = this.intersectsToleranceSquare(t, e);
      return _u.isTrue(!(s && a), "Found bad envelope test"),
        a
    },
    bl.prototype.initCorners = function (t) {
      this._minx = t.x - .5,
        this._maxx = t.x + .5,
        this._miny = t.y - .5,
        this._maxy = t.y + .5,
        this._corner[0] = new ka(this._maxx, this._maxy),
        this._corner[1] = new ka(this._minx, this._maxy),
        this._corner[2] = new ka(this._minx, this._miny),
        this._corner[3] = new ka(this._maxx, this._miny)
    },
    bl.prototype.intersects = function (t, e) {
      return 1 === this._scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled),
        this.copyScaled(e, this._p1Scaled),
        this.intersectsScaled(this._p0Scaled, this._p1Scaled))
    },
    bl.prototype.scale = function (t) {
      return Math.round(t * this._scaleFactor)
    },
    bl.prototype.getCoordinate = function () {
      return this._originalPt
    },
    bl.prototype.copyScaled = function (t, e) {
      e.x = this.scale(t.x),
        e.y = this.scale(t.y)
    },
    bl.prototype.getSafeEnvelope = function () {
      if (null === this._safeEnv) {
        var t = bl.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
        this._safeEnv = new uu(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t)
      }
      return this._safeEnv
    },
    bl.prototype.intersectsPixelClosure = function (t, e) {
      return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]),
        !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]),
          this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]),
            this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]),
              this._li.hasIntersection()))))
    },
    bl.prototype.intersectsToleranceSquare = function (t, e) {
      var n = !1,
        r = !1;
      return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]),
        !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]),
          this._li.isProper() || (this._li.hasIntersection() && (n = !0),
            this._li.computeIntersection(t, e, this._corner[2], this._corner[3]),
            this._li.isProper() || (this._li.hasIntersection() && (r = !0),
              this._li.computeIntersection(t, e, this._corner[3], this._corner[0]),
              this._li.isProper() || n && r || t.equals(this._pt) || e.equals(this._pt)))))
    },
    bl.prototype.addSnappedNode = function (t, e) {
      var n = t.getCoordinate(e),
        r = t.getCoordinate(e + 1);
      return !!this.intersects(n, r) && (t.addIntersection(this.getCoordinate(), e),
        !0)
    },
    bl.prototype.interfaces_ = function () {
      return []
    },
    bl.prototype.getClass = function () {
      return bl
    },
    Il.SAFE_ENV_EXPANSION_FACTOR.get = function () {
      return .75
    },
    Object.defineProperties(bl, Il);
  var Nl = function () {
    this.tempEnv1 = new uu,
      this.selectedSegment = new Oh
  };
  Nl.prototype.select = function () {
      if (1 === arguments.length)
      ;
      else if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        t.getLineSegment(e, this.selectedSegment),
          this.select(this.selectedSegment)
      }
    },
    Nl.prototype.interfaces_ = function () {
      return []
    },
    Nl.prototype.getClass = function () {
      return Nl
    };
  var Cl = function () {
      this._index = null;
      var t = arguments[0];
      this._index = t
    },
    Sl = {
      HotPixelSnapAction: {
        configurable: !0
      }
    };
  Cl.prototype.snap = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.snap(t, null, -1)
      }
      if (3 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = arguments[2],
          i = e.getSafeEnvelope(),
          o = new Ml(e, n, r);
        return this._index.query(i, {
            interfaces_: function () {
              return [ph]
            },
            visitItem: function (t) {
              t.select(i, o)
            }
          }),
          o.isNodeAdded()
      }
    },
    Cl.prototype.interfaces_ = function () {
      return []
    },
    Cl.prototype.getClass = function () {
      return Cl
    },
    Sl.HotPixelSnapAction.get = function () {
      return Ml
    },
    Object.defineProperties(Cl, Sl);
  var Ml = function (r) {
      function t() {
        r.call(this),
          this._hotPixel = null,
          this._parentEdge = null,
          this._hotPixelVertexIndex = null,
          this._isNodeAdded = !1;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this._hotPixel = t,
          this._parentEdge = e,
          this._hotPixelVertexIndex = n
      }
      return r && (t.__proto__ = r),
        ((t.prototype = Object.create(r && r.prototype)).constructor = t).prototype.isNodeAdded = function () {
          return this._isNodeAdded
        },
        t.prototype.select = function () {
          if (2 !== arguments.length)
            return r.prototype.select.apply(this, arguments);
          var t = arguments[0],
            e = arguments[1],
            n = t.getContext();
          if (null !== this._parentEdge && n === this._parentEdge && e === this._hotPixelVertexIndex)
            return null;
          this._isNodeAdded = this._hotPixel.addSnappedNode(n, e)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(Nl),
    Ll = function () {
      this._li = null,
        this._interiorIntersections = null;
      var t = arguments[0];
      this._li = t,
        this._interiorIntersections = new ku
    };
  Ll.prototype.processIntersections = function (t, e, n, r) {
      if (t === n && e === r)
        return null;
      var i = t.getCoordinates()[e],
        o = t.getCoordinates()[e + 1],
        s = n.getCoordinates()[r],
        a = n.getCoordinates()[r + 1];
      if (this._li.computeIntersection(i, o, s, a),
        this._li.hasIntersection() && this._li.isInteriorIntersection()) {
        for (var u = 0; u < this._li.getIntersectionNum(); u++)
          this._interiorIntersections.add(this._li.getIntersection(u));
        t.addIntersections(this._li, e, 0),
          n.addIntersections(this._li, r, 1)
      }
    },
    Ll.prototype.isDone = function () {
      return !1
    },
    Ll.prototype.getInteriorIntersections = function () {
      return this._interiorIntersections
    },
    Ll.prototype.interfaces_ = function () {
      return [hl]
    },
    Ll.prototype.getClass = function () {
      return Ll
    };
  var Pl = function () {
    this._pm = null,
      this._li = null,
      this._scaleFactor = null,
      this._noder = null,
      this._pointSnapper = null,
      this._nodedSegStrings = null;
    var t = arguments[0];
    this._pm = t,
      this._li = new xu,
      this._li.setPrecisionModel(t),
      this._scaleFactor = t.getScale()
  };
  Pl.prototype.checkCorrectness = function (t) {
      var e = Ph.getNodedSubstrings(t),
        n = new El(e);
      try {
        n.checkValid()
      } catch (t) {
        if (!(t instanceof iu))
          throw t;
        t.printStackTrace()
      }
    },
    Pl.prototype.getNodedSubstrings = function () {
      return Ph.getNodedSubstrings(this._nodedSegStrings)
    },
    Pl.prototype.snapRound = function (t, e) {
      var n = this.findInteriorIntersections(t, e);
      this.computeIntersectionSnaps(n),
        this.computeVertexSnaps(t)
    },
    Pl.prototype.findInteriorIntersections = function (t, e) {
      var n = new Ll(e);
      return this._noder.setSegmentIntersector(n),
        this._noder.computeNodes(t),
        n.getInteriorIntersections()
    },
    Pl.prototype.computeVertexSnaps = function () {
      if (Va(arguments[0], Fu))
        for (var t = arguments[0].iterator(); t.hasNext();) {
          var e = t.next();
          this.computeVertexSnaps(e)
        }
      else if (arguments[0] instanceof Ph)
        for (var n = arguments[0], r = n.getCoordinates(), i = 0; i < r.length; i++) {
          var o = new bl(r[i], this._scaleFactor, this._li);
          this._pointSnapper.snap(o, n, i) && n.addIntersection(r[i], i)
        }
    },
    Pl.prototype.computeNodes = function (t) {
      this._nodedSegStrings = t,
        this._noder = new Gh,
        this._pointSnapper = new Cl(this._noder.getIndex()),
        this.snapRound(t, this._li)
    },
    Pl.prototype.computeIntersectionSnaps = function (t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next(),
          r = new bl(n, this._scaleFactor, this._li);
        this._pointSnapper.snap(r)
      }
    },
    Pl.prototype.interfaces_ = function () {
      return [Fh]
    },
    Pl.prototype.getClass = function () {
      return Pl
    };
  var Ol = function () {
      if (this._argGeom = null,
        this._distance = null,
        this._bufParams = new kh,
        this._resultGeometry = null,
        this._saveException = null,
        1 === arguments.length) {
        var t = arguments[0];
        this._argGeom = t
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        this._argGeom = e,
          this._bufParams = n
      }
    },
    Rl = {
      CAP_ROUND: {
        configurable: !0
      },
      CAP_BUTT: {
        configurable: !0
      },
      CAP_FLAT: {
        configurable: !0
      },
      CAP_SQUARE: {
        configurable: !0
      },
      MAX_PRECISION_DIGITS: {
        configurable: !0
      }
    };
  Ol.prototype.bufferFixedPrecision = function (t) {
      var e = new xl(new Pl(new Pc(1)), t.getScale()),
        n = new vl(this._bufParams);
      n.setWorkingPrecisionModel(t),
        n.setNoder(e),
        this._resultGeometry = n.buffer(this._argGeom, this._distance)
    },
    Ol.prototype.bufferReducedPrecision = function () {
      var t = this;
      if (0 === arguments.length) {
        for (var e = Ol.MAX_PRECISION_DIGITS; 0 <= e; e--) {
          try {
            t.bufferReducedPrecision(e)
          } catch (e) {
            if (!(e instanceof Yc))
              throw e;
            t._saveException = e
          }
          if (null !== t._resultGeometry)
            return null
        }
        throw this._saveException
      }
      if (1 === arguments.length) {
        var n = arguments[0],
          r = Ol.precisionScaleFactor(this._argGeom, this._distance, n),
          i = new Pc(r);
        this.bufferFixedPrecision(i)
      }
    },
    Ol.prototype.computeGeometry = function () {
      if (this.bufferOriginalPrecision(),
        null !== this._resultGeometry)
        return null;
      var t = this._argGeom.getFactory().getPrecisionModel();
      t.getType() === Pc.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision()
    },
    Ol.prototype.setQuadrantSegments = function (t) {
      this._bufParams.setQuadrantSegments(t)
    },
    Ol.prototype.bufferOriginalPrecision = function () {
      try {
        var t = new vl(this._bufParams);
        this._resultGeometry = t.buffer(this._argGeom, this._distance)
      } catch (t) {
        if (!(t instanceof du))
          throw t;
        this._saveException = t
      }
    },
    Ol.prototype.getResultGeometry = function (t) {
      return this._distance = t,
        this.computeGeometry(),
        this._resultGeometry
    },
    Ol.prototype.setEndCapStyle = function (t) {
      this._bufParams.setEndCapStyle(t)
    },
    Ol.prototype.interfaces_ = function () {
      return []
    },
    Ol.prototype.getClass = function () {
      return Ol
    },
    Ol.bufferOp = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        return new Ol(t).getResultGeometry(e)
      }
      if (3 === arguments.length) {
        if (Number.isInteger(arguments[2]) && arguments[0] instanceof Cu && "number" == typeof arguments[1]) {
          var n = arguments[0],
            r = arguments[1],
            i = arguments[2],
            o = new Ol(n);
          return o.setQuadrantSegments(i),
            o.getResultGeometry(r)
        }
        if (arguments[2] instanceof kh && arguments[0] instanceof Cu && "number" == typeof arguments[1]) {
          var s = arguments[0],
            a = arguments[1],
            u = arguments[2];
          return new Ol(s, u).getResultGeometry(a)
        }
      } else if (4 === arguments.length) {
        var c = arguments[0],
          h = arguments[1],
          l = arguments[2],
          p = arguments[3],
          f = new Ol(c);
        return f.setQuadrantSegments(l),
          f.setEndCapStyle(p),
          f.getResultGeometry(h)
      }
    },
    Ol.precisionScaleFactor = function (t, e, n) {
      var r = t.getEnvelopeInternal(),
        i = Ha.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())) + 2 * (0 < e ? e : 0),
        o = n - Math.trunc(Math.log(i) / Math.log(10) + 1);
      return Math.pow(10, o)
    },
    Rl.CAP_ROUND.get = function () {
      return kh.CAP_ROUND
    },
    Rl.CAP_BUTT.get = function () {
      return kh.CAP_FLAT
    },
    Rl.CAP_FLAT.get = function () {
      return kh.CAP_FLAT
    },
    Rl.CAP_SQUARE.get = function () {
      return kh.CAP_SQUARE
    },
    Rl.MAX_PRECISION_DIGITS.get = function () {
      return 12
    },
    Object.defineProperties(Ol, Rl);
  var Tl = function () {
    this._pt = [new ka, new ka],
      this._distance = Da.NaN,
      this._isNull = !0
  };
  Tl.prototype.getCoordinates = function () {
      return this._pt
    },
    Tl.prototype.getCoordinate = function (t) {
      return this._pt[t]
    },
    Tl.prototype.setMinimum = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setMinimum(t._pt[0], t._pt[1])
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        if (this._isNull)
          return this.initialize(e, n),
            null;
        var r = e.distance(n);
        r < this._distance && this.initialize(e, n, r)
      }
    },
    Tl.prototype.initialize = function () {
      if (0 === arguments.length)
        this._isNull = !0;
      else if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        this._pt[0].setCoordinate(t),
          this._pt[1].setCoordinate(e),
          this._distance = t.distance(e),
          this._isNull = !1
      } else if (3 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[2];
        this._pt[0].setCoordinate(n),
          this._pt[1].setCoordinate(r),
          this._distance = i,
          this._isNull = !1
      }
    },
    Tl.prototype.getDistance = function () {
      return this._distance
    },
    Tl.prototype.setMaximum = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setMaximum(t._pt[0], t._pt[1])
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        if (this._isNull)
          return this.initialize(e, n),
            null;
        var r = e.distance(n);
        r > this._distance && this.initialize(e, n, r)
      }
    },
    Tl.prototype.interfaces_ = function () {
      return []
    },
    Tl.prototype.getClass = function () {
      return Tl
    };
  var Al = function () {};
  Al.prototype.interfaces_ = function () {
      return []
    },
    Al.prototype.getClass = function () {
      return Al
    },
    Al.computeDistance = function () {
      if (arguments[2] instanceof Tl && arguments[0] instanceof pc && arguments[1] instanceof ka)
        for (var t = arguments[0], e = arguments[1], n = arguments[2], r = t.getCoordinates(), i = new Oh, o = 0; o < r.length - 1; o++) {
          i.setCoordinates(r[o], r[o + 1]);
          var s = i.closestPoint(e);
          n.setMinimum(s, e)
        }
      else if (arguments[2] instanceof Tl && arguments[0] instanceof yc && arguments[1] instanceof ka) {
        var a = arguments[0],
          u = arguments[1],
          c = arguments[2];
        Al.computeDistance(a.getExteriorRing(), u, c);
        for (var h = 0; h < a.getNumInteriorRing(); h++)
          Al.computeDistance(a.getInteriorRingN(h), u, c)
      } else if (arguments[2] instanceof Tl && arguments[0] instanceof Cu && arguments[1] instanceof ka) {
        var l = arguments[0],
          p = arguments[1],
          f = arguments[2];
        if (l instanceof pc)
          Al.computeDistance(l, p, f);
        else if (l instanceof yc)
          Al.computeDistance(l, p, f);
        else if (l instanceof oc)
          for (var g = l, d = 0; d < g.getNumGeometries(); d++) {
            var y = g.getGeometryN(d);
            Al.computeDistance(y, p, f)
          }
        else
          f.setMinimum(l.getCoordinate(), p)
      } else if (arguments[2] instanceof Tl && arguments[0] instanceof Oh && arguments[1] instanceof ka) {
        var _ = arguments[0],
          m = arguments[1],
          v = arguments[2],
          x = _.closestPoint(m);
        v.setMinimum(x, m)
      }
    };
  var Dl = function (t) {
      this._maxPtDist = new Tl,
        this._inputGeom = t || null
    },
    Fl = {
      MaxPointDistanceFilter: {
        configurable: !0
      },
      MaxMidpointDistanceFilter: {
        configurable: !0
      }
    };
  Dl.prototype.computeMaxMidpointDistance = function (t) {
      var e = new Gl(this._inputGeom);
      t.apply(e),
        this._maxPtDist.setMaximum(e.getMaxPointDistance())
    },
    Dl.prototype.computeMaxVertexDistance = function (t) {
      var e = new ql(this._inputGeom);
      t.apply(e),
        this._maxPtDist.setMaximum(e.getMaxPointDistance())
    },
    Dl.prototype.findDistance = function (t) {
      return this.computeMaxVertexDistance(t),
        this.computeMaxMidpointDistance(t),
        this._maxPtDist.getDistance()
    },
    Dl.prototype.getDistancePoints = function () {
      return this._maxPtDist
    },
    Dl.prototype.interfaces_ = function () {
      return []
    },
    Dl.prototype.getClass = function () {
      return Dl
    },
    Fl.MaxPointDistanceFilter.get = function () {
      return ql
    },
    Fl.MaxMidpointDistanceFilter.get = function () {
      return Gl
    },
    Object.defineProperties(Dl, Fl);
  var ql = function (t) {
    this._maxPtDist = new Tl,
      this._minPtDist = new Tl,
      this._geom = t || null
  };
  ql.prototype.filter = function (t) {
      this._minPtDist.initialize(),
        Al.computeDistance(this._geom, t, this._minPtDist),
        this._maxPtDist.setMaximum(this._minPtDist)
    },
    ql.prototype.getMaxPointDistance = function () {
      return this._maxPtDist
    },
    ql.prototype.interfaces_ = function () {
      return [Lu]
    },
    ql.prototype.getClass = function () {
      return ql
    };
  var Gl = function (t) {
    this._maxPtDist = new Tl,
      this._minPtDist = new Tl,
      this._geom = t || null
  };
  Gl.prototype.filter = function (t, e) {
      if (0 === e)
        return null;
      var n = t.getCoordinate(e - 1),
        r = t.getCoordinate(e),
        i = new ka((n.x + r.x) / 2, (n.y + r.y) / 2);
      this._minPtDist.initialize(),
        Al.computeDistance(this._geom, i, this._minPtDist),
        this._maxPtDist.setMaximum(this._minPtDist)
    },
    Gl.prototype.isDone = function () {
      return !1
    },
    Gl.prototype.isGeometryChanged = function () {
      return !1
    },
    Gl.prototype.getMaxPointDistance = function () {
      return this._maxPtDist
    },
    Gl.prototype.interfaces_ = function () {
      return [ic]
    },
    Gl.prototype.getClass = function () {
      return Gl
    };
  var Bl = function (t) {
    this._comps = t || null
  };
  Bl.prototype.filter = function (t) {
      t instanceof yc && this._comps.add(t)
    },
    Bl.prototype.interfaces_ = function () {
      return [rc]
    },
    Bl.prototype.getClass = function () {
      return Bl
    },
    Bl.getPolygons = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return Bl.getPolygons(t, new ku)
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return e instanceof yc ? n.add(e) : e instanceof oc && e.apply(new Bl(n)),
          n
      }
    };
  var kl = function () {
    if (this._lines = null,
      this._isForcedToLineString = !1,
      1 === arguments.length) {
      var t = arguments[0];
      this._lines = t
    } else if (2 === arguments.length) {
      var e = arguments[0],
        n = arguments[1];
      this._lines = e,
        this._isForcedToLineString = n
    }
  };
  kl.prototype.filter = function (t) {
      if (this._isForcedToLineString && t instanceof mc) {
        var e = t.getFactory().createLineString(t.getCoordinateSequence());
        return this._lines.add(e),
          null
      }
      t instanceof pc && this._lines.add(t)
    },
    kl.prototype.setForceToLineString = function (t) {
      this._isForcedToLineString = t
    },
    kl.prototype.interfaces_ = function () {
      return [Nu]
    },
    kl.prototype.getClass = function () {
      return kl
    },
    kl.getGeometry = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return t.getFactory().buildGeometry(kl.getLines(t))
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return e.getFactory().buildGeometry(kl.getLines(e, n))
      }
    },
    kl.getLines = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return kl.getLines(t, !1)
      }
      if (2 === arguments.length) {
        if (Va(arguments[0], Fu) && Va(arguments[1], Fu)) {
          for (var e = arguments[0], n = arguments[1], r = e.iterator(); r.hasNext();) {
            var i = r.next();
            kl.getLines(i, n)
          }
          return n
        }
        if (arguments[0] instanceof Cu && "boolean" == typeof arguments[1]) {
          var o = arguments[0],
            s = arguments[1],
            a = new ku;
          return o.apply(new kl(a, s)),
            a
        }
        if (arguments[0] instanceof Cu && Va(arguments[1], Fu)) {
          var u = arguments[0],
            c = arguments[1];
          return u instanceof pc ? c.add(u) : u.apply(new kl(c)),
            c
        }
      } else if (3 === arguments.length) {
        if ("boolean" == typeof arguments[2] && Va(arguments[0], Fu) && Va(arguments[1], Fu)) {
          for (var h = arguments[0], l = arguments[1], p = arguments[2], f = h.iterator(); f.hasNext();) {
            var g = f.next();
            kl.getLines(g, l, p)
          }
          return l
        }
        if ("boolean" == typeof arguments[2] && arguments[0] instanceof Cu && Va(arguments[1], Fu)) {
          var d = arguments[0],
            y = arguments[1],
            _ = arguments[2];
          return d.apply(new kl(y, _)),
            y
        }
      }
    };
  var zl = function () {
    if (this._boundaryRule = Pu.OGC_SFS_BOUNDARY_RULE,
      this._isIn = null,
      this._numBoundaries = null,
      0 === arguments.length)
    ;
    else if (1 === arguments.length) {
      var t = arguments[0];
      if (null === t)
        throw new Aa("Rule must be non-null");
      this._boundaryRule = t
    }
  };
  zl.prototype.locateInternal = function () {
      if (arguments[0] instanceof ka && arguments[1] instanceof yc) {
        var t = arguments[0],
          e = arguments[1];
        if (e.isEmpty())
          return Ua.EXTERIOR;
        var n = e.getExteriorRing(),
          r = this.locateInPolygonRing(t, n);
        if (r === Ua.EXTERIOR)
          return Ua.EXTERIOR;
        if (r === Ua.BOUNDARY)
          return Ua.BOUNDARY;
        for (var i = 0; i < e.getNumInteriorRing(); i++) {
          var o = e.getInteriorRingN(i),
            s = this.locateInPolygonRing(t, o);
          if (s === Ua.INTERIOR)
            return Ua.EXTERIOR;
          if (s === Ua.BOUNDARY)
            return Ua.BOUNDARY
        }
        return Ua.INTERIOR
      }
      if (arguments[0] instanceof ka && arguments[1] instanceof pc) {
        var a = arguments[0],
          u = arguments[1];
        if (!u.getEnvelopeInternal().intersects(a))
          return Ua.EXTERIOR;
        var c = u.getCoordinates();
        return u.isClosed() || !a.equals(c[0]) && !a.equals(c[c.length - 1]) ? bu.isOnLine(a, c) ? Ua.INTERIOR : Ua.EXTERIOR : Ua.BOUNDARY
      }
      if (arguments[0] instanceof ka && arguments[1] instanceof gc) {
        var h = arguments[0];
        return arguments[1].getCoordinate().equals2D(h) ? Ua.INTERIOR : Ua.EXTERIOR
      }
    },
    zl.prototype.locateInPolygonRing = function (t, e) {
      return e.getEnvelopeInternal().intersects(t) ? bu.locatePointInRing(t, e.getCoordinates()) : Ua.EXTERIOR
    },
    zl.prototype.intersects = function (t, e) {
      return this.locate(t, e) !== Ua.EXTERIOR
    },
    zl.prototype.updateLocationInfo = function (t) {
      t === Ua.INTERIOR && (this._isIn = !0),
        t === Ua.BOUNDARY && this._numBoundaries++
    },
    zl.prototype.computeLocation = function (t, e) {
      if (e instanceof gc && this.updateLocationInfo(this.locateInternal(t, e)),
        e instanceof pc)
        this.updateLocationInfo(this.locateInternal(t, e));
      else if (e instanceof yc)
        this.updateLocationInfo(this.locateInternal(t, e));
      else if (e instanceof sc)
        for (var n = e, r = 0; r < n.getNumGeometries(); r++) {
          var i = n.getGeometryN(r);
          this.updateLocationInfo(this.locateInternal(t, i))
        }
      else if (e instanceof vc)
        for (var o = e, s = 0; s < o.getNumGeometries(); s++) {
          var a = o.getGeometryN(s);
          this.updateLocationInfo(this.locateInternal(t, a))
        }
      else if (e instanceof oc)
        for (var u = new rl(e); u.hasNext();) {
          var c = u.next();
          c !== e && this.computeLocation(t, c)
        }
    },
    zl.prototype.locate = function (t, e) {
      return e.isEmpty() ? Ua.EXTERIOR : e instanceof pc ? this.locateInternal(t, e) : e instanceof yc ? this.locateInternal(t, e) : (this._isIn = !1,
        this._numBoundaries = 0,
        this.computeLocation(t, e),
        this._boundaryRule.isInBoundary(this._numBoundaries) ? Ua.BOUNDARY : 0 < this._numBoundaries || this._isIn ? Ua.INTERIOR : Ua.EXTERIOR)
    },
    zl.prototype.interfaces_ = function () {
      return []
    },
    zl.prototype.getClass = function () {
      return zl
    };
  var jl = function t() {
      if (this._component = null,
        this._segIndex = null,
        this._pt = null,
        2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        t.call(this, e, t.INSIDE_AREA, n)
      } else if (3 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2];
        this._component = r,
          this._segIndex = i,
          this._pt = o
      }
    },
    Xl = {
      INSIDE_AREA: {
        configurable: !0
      }
    };
  jl.prototype.isInsideArea = function () {
      return this._segIndex === jl.INSIDE_AREA
    },
    jl.prototype.getCoordinate = function () {
      return this._pt
    },
    jl.prototype.getGeometryComponent = function () {
      return this._component
    },
    jl.prototype.getSegmentIndex = function () {
      return this._segIndex
    },
    jl.prototype.interfaces_ = function () {
      return []
    },
    jl.prototype.getClass = function () {
      return jl
    },
    Xl.INSIDE_AREA.get = function () {
      return -1
    },
    Object.defineProperties(jl, Xl);
  var Ul = function (t) {
    this._pts = t || null
  };
  Ul.prototype.filter = function (t) {
      t instanceof gc && this._pts.add(t)
    },
    Ul.prototype.interfaces_ = function () {
      return [rc]
    },
    Ul.prototype.getClass = function () {
      return Ul
    },
    Ul.getPoints = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return t instanceof gc ? yh.singletonList(t) : Ul.getPoints(t, new ku)
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return e instanceof gc ? n.add(e) : e instanceof oc && e.apply(new Ul(n)),
          n
      }
    };
  var Yl = function () {
    this._locations = null;
    var t = arguments[0];
    this._locations = t
  };
  Yl.prototype.filter = function (t) {
      (t instanceof gc || t instanceof pc || t instanceof yc) && this._locations.add(new jl(t, 0, t.getCoordinate()))
    },
    Yl.prototype.interfaces_ = function () {
      return [rc]
    },
    Yl.prototype.getClass = function () {
      return Yl
    },
    Yl.getLocations = function (t) {
      var e = new ku;
      return t.apply(new Yl(e)),
        e
    };
  var Vl = function () {
    if (this._geom = null,
      this._terminateDistance = 0,
      this._ptLocator = new zl,
      this._minDistanceLocation = null,
      this._minDistance = Da.MAX_VALUE,
      2 === arguments.length) {
      var t = arguments[0],
        e = arguments[1];
      this._geom = [t, e],
        this._terminateDistance = 0
    } else if (3 === arguments.length) {
      var n = arguments[0],
        r = arguments[1],
        i = arguments[2];
      this._geom = new Array(2).fill(null),
        this._geom[0] = n,
        this._geom[1] = r,
        this._terminateDistance = i
    }
  };
  Vl.prototype.computeContainmentDistance = function () {
      if (0 === arguments.length) {
        var t = new Array(2).fill(null);
        if (this.computeContainmentDistance(0, t),
          this._minDistance <= this._terminateDistance)
          return null;
        this.computeContainmentDistance(1, t)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = 1 - e,
          i = Bl.getPolygons(this._geom[e]);
        if (0 < i.size()) {
          var o = Yl.getLocations(this._geom[r]);
          if (this.computeContainmentDistance(o, i, n),
            this._minDistance <= this._terminateDistance)
            return this._minDistanceLocation[r] = n[0],
              this._minDistanceLocation[e] = n[1],
              null
        }
      } else if (3 === arguments.length)
        if (arguments[2] instanceof Array && Va(arguments[0], Bu) && Va(arguments[1], Bu)) {
          for (var s = arguments[0], a = arguments[1], u = arguments[2], c = 0; c < s.size(); c++)
            for (var h = s.get(c), l = 0; l < a.size(); l++)
              if (this.computeContainmentDistance(h, a.get(l), u),
                this._minDistance <= this._terminateDistance)
                return null
        } else if (arguments[2] instanceof Array && arguments[0] instanceof jl && arguments[1] instanceof yc) {
        var p = arguments[0],
          f = arguments[1],
          g = arguments[2],
          d = p.getCoordinate();
        if (Ua.EXTERIOR !== this._ptLocator.locate(d, f))
          return g[this._minDistance = 0] = p,
            g[1] = new jl(f, d),
            null
      }
    },
    Vl.prototype.computeMinDistanceLinesPoints = function (t, e, n) {
      for (var r = 0; r < t.size(); r++)
        for (var i = t.get(r), o = 0; o < e.size(); o++) {
          var s = e.get(o);
          if (this.computeMinDistance(i, s, n),
            this._minDistance <= this._terminateDistance)
            return null
        }
    },
    Vl.prototype.computeFacetDistance = function () {
      var t = new Array(2).fill(null),
        e = kl.getLines(this._geom[0]),
        n = kl.getLines(this._geom[1]),
        r = Ul.getPoints(this._geom[0]),
        i = Ul.getPoints(this._geom[1]);
      return this.computeMinDistanceLines(e, n, t),
        this.updateMinDistance(t, !1),
        this._minDistance <= this._terminateDistance ? null : (t[0] = null,
          t[1] = null,
          this.computeMinDistanceLinesPoints(e, i, t),
          this.updateMinDistance(t, !1),
          this._minDistance <= this._terminateDistance ? null : (t[0] = null,
            t[1] = null,
            this.computeMinDistanceLinesPoints(n, r, t),
            this.updateMinDistance(t, !0),
            this._minDistance <= this._terminateDistance ? null : (t[0] = null,
              t[1] = null,
              this.computeMinDistancePoints(r, i, t),
              void this.updateMinDistance(t, !1))))
    },
    Vl.prototype.nearestLocations = function () {
      return this.computeMinDistance(),
        this._minDistanceLocation
    },
    Vl.prototype.updateMinDistance = function (t, e) {
      if (null === t[0])
        return null;
      this._minDistanceLocation[1] = e ? (this._minDistanceLocation[0] = t[1],
        t[0]) : (this._minDistanceLocation[0] = t[0],
        t[1])
    },
    Vl.prototype.nearestPoints = function () {
      return this.computeMinDistance(),
        [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()]
    },
    Vl.prototype.computeMinDistance = function () {
      if (0 === arguments.length) {
        if (null !== this._minDistanceLocation)
          return null;
        if (this._minDistanceLocation = new Array(2).fill(null),
          this.computeContainmentDistance(),
          this._minDistance <= this._terminateDistance)
          return null;
        this.computeFacetDistance()
      } else if (3 === arguments.length)
        if (arguments[2] instanceof Array && arguments[0] instanceof pc && arguments[1] instanceof gc) {
          var t = arguments[0],
            e = arguments[1],
            n = arguments[2];
          if (t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > this._minDistance)
            return null;
          for (var r = t.getCoordinates(), i = e.getCoordinate(), o = 0; o < r.length - 1; o++) {
            var s = bu.distancePointLine(i, r[o], r[o + 1]);
            if (s < this._minDistance) {
              this._minDistance = s;
              var a = new Oh(r[o], r[o + 1]).closestPoint(i);
              n[0] = new jl(t, o, a),
                n[1] = new jl(e, 0, i)
            }
            if (this._minDistance <= this._terminateDistance)
              return null
          }
        } else if (arguments[2] instanceof Array && arguments[0] instanceof pc && arguments[1] instanceof pc) {
        var u = arguments[0],
          c = arguments[1],
          h = arguments[2];
        if (u.getEnvelopeInternal().distance(c.getEnvelopeInternal()) > this._minDistance)
          return null;
        for (var l = u.getCoordinates(), p = c.getCoordinates(), f = 0; f < l.length - 1; f++)
          for (var g = 0; g < p.length - 1; g++) {
            var d = bu.distanceLineLine(l[f], l[f + 1], p[g], p[g + 1]);
            if (d < this._minDistance) {
              this._minDistance = d;
              var y = new Oh(l[f], l[f + 1]),
                _ = new Oh(p[g], p[g + 1]),
                m = y.closestPoints(_);
              h[0] = new jl(u, f, m[0]),
                h[1] = new jl(c, g, m[1])
            }
            if (this._minDistance <= this._terminateDistance)
              return null
          }
      }
    },
    Vl.prototype.computeMinDistancePoints = function (t, e, n) {
      for (var r = 0; r < t.size(); r++)
        for (var i = t.get(r), o = 0; o < e.size(); o++) {
          var s = e.get(o),
            a = i.getCoordinate().distance(s.getCoordinate());
          if (a < this._minDistance && (this._minDistance = a,
              n[0] = new jl(i, 0, i.getCoordinate()),
              n[1] = new jl(s, 0, s.getCoordinate())),
            this._minDistance <= this._terminateDistance)
            return null
        }
    },
    Vl.prototype.distance = function () {
      if (null === this._geom[0] || null === this._geom[1])
        throw new Aa("null geometries are not supported");
      return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(),
        this._minDistance)
    },
    Vl.prototype.computeMinDistanceLines = function (t, e, n) {
      for (var r = 0; r < t.size(); r++)
        for (var i = t.get(r), o = 0; o < e.size(); o++) {
          var s = e.get(o);
          if (this.computeMinDistance(i, s, n),
            this._minDistance <= this._terminateDistance)
            return null
        }
    },
    Vl.prototype.interfaces_ = function () {
      return []
    },
    Vl.prototype.getClass = function () {
      return Vl
    },
    Vl.distance = function (t, e) {
      return new Vl(t, e).distance()
    },
    Vl.isWithinDistance = function (t, e, n) {
      return new Vl(t, e, n).distance() <= n
    },
    Vl.nearestPoints = function (t, e) {
      return new Vl(t, e).nearestPoints()
    };
  var Hl = function () {
    this._pt = [new ka, new ka],
      this._distance = Da.NaN,
      this._isNull = !0
  };
  Hl.prototype.getCoordinates = function () {
      return this._pt
    },
    Hl.prototype.getCoordinate = function (t) {
      return this._pt[t]
    },
    Hl.prototype.setMinimum = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setMinimum(t._pt[0], t._pt[1])
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        if (this._isNull)
          return this.initialize(e, n),
            null;
        var r = e.distance(n);
        r < this._distance && this.initialize(e, n, r)
      }
    },
    Hl.prototype.initialize = function () {
      if (0 === arguments.length)
        this._isNull = !0;
      else if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        this._pt[0].setCoordinate(t),
          this._pt[1].setCoordinate(e),
          this._distance = t.distance(e),
          this._isNull = !1
      } else if (3 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[2];
        this._pt[0].setCoordinate(n),
          this._pt[1].setCoordinate(r),
          this._distance = i,
          this._isNull = !1
      }
    },
    Hl.prototype.toString = function () {
      return gu.toLineString(this._pt[0], this._pt[1])
    },
    Hl.prototype.getDistance = function () {
      return this._distance
    },
    Hl.prototype.setMaximum = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        this.setMaximum(t._pt[0], t._pt[1])
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        if (this._isNull)
          return this.initialize(e, n),
            null;
        var r = e.distance(n);
        r > this._distance && this.initialize(e, n, r)
      }
    },
    Hl.prototype.interfaces_ = function () {
      return []
    },
    Hl.prototype.getClass = function () {
      return Hl
    };
  var Wl = function () {};
  Wl.prototype.interfaces_ = function () {
      return []
    },
    Wl.prototype.getClass = function () {
      return Wl
    },
    Wl.computeDistance = function () {
      if (arguments[2] instanceof Hl && arguments[0] instanceof pc && arguments[1] instanceof ka)
        for (var t = arguments[0], e = arguments[1], n = arguments[2], r = new Oh, i = t.getCoordinates(), o = 0; o < i.length - 1; o++) {
          r.setCoordinates(i[o], i[o + 1]);
          var s = r.closestPoint(e);
          n.setMinimum(s, e)
        }
      else if (arguments[2] instanceof Hl && arguments[0] instanceof yc && arguments[1] instanceof ka) {
        var a = arguments[0],
          u = arguments[1],
          c = arguments[2];
        Wl.computeDistance(a.getExteriorRing(), u, c);
        for (var h = 0; h < a.getNumInteriorRing(); h++)
          Wl.computeDistance(a.getInteriorRingN(h), u, c)
      } else if (arguments[2] instanceof Hl && arguments[0] instanceof Cu && arguments[1] instanceof ka) {
        var l = arguments[0],
          p = arguments[1],
          f = arguments[2];
        if (l instanceof pc)
          Wl.computeDistance(l, p, f);
        else if (l instanceof yc)
          Wl.computeDistance(l, p, f);
        else if (l instanceof oc)
          for (var g = l, d = 0; d < g.getNumGeometries(); d++) {
            var y = g.getGeometryN(d);
            Wl.computeDistance(y, p, f)
          }
        else
          f.setMinimum(l.getCoordinate(), p)
      } else if (arguments[2] instanceof Hl && arguments[0] instanceof Oh && arguments[1] instanceof ka) {
        var _ = arguments[0],
          m = arguments[1],
          v = arguments[2],
          x = _.closestPoint(m);
        v.setMinimum(x, m)
      }
    };
  var Jl = function () {
      this._g0 = null,
        this._g1 = null,
        this._ptDist = new Hl;
      var t = arguments[this._densifyFrac = 0],
        e = arguments[1];
      this._g0 = t,
        this._g1 = e
    },
    Zl = {
      MaxPointDistanceFilter: {
        configurable: !0
      },
      MaxDensifiedByFractionDistanceFilter: {
        configurable: !0
      }
    };
  Jl.prototype.getCoordinates = function () {
      return this._ptDist.getCoordinates()
    },
    Jl.prototype.setDensifyFraction = function (t) {
      if (1 < t || t <= 0)
        throw new Aa("Fraction is not in range (0.0 - 1.0]");
      this._densifyFrac = t
    },
    Jl.prototype.compute = function (t, e) {
      this.computeOrientedDistance(t, e, this._ptDist),
        this.computeOrientedDistance(e, t, this._ptDist)
    },
    Jl.prototype.distance = function () {
      return this.compute(this._g0, this._g1),
        this._ptDist.getDistance()
    },
    Jl.prototype.computeOrientedDistance = function (t, e, n) {
      var r = new Kl(e);
      if (t.apply(r),
        n.setMaximum(r.getMaxPointDistance()),
        0 < this._densifyFrac) {
        var i = new Ql(e, this._densifyFrac);
        t.apply(i),
          n.setMaximum(i.getMaxPointDistance())
      }
    },
    Jl.prototype.orientedDistance = function () {
      return this.computeOrientedDistance(this._g0, this._g1, this._ptDist),
        this._ptDist.getDistance()
    },
    Jl.prototype.interfaces_ = function () {
      return []
    },
    Jl.prototype.getClass = function () {
      return Jl
    },
    Jl.distance = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1];
        return new Jl(t, e).distance()
      }
      if (3 === arguments.length) {
        var n = arguments[0],
          r = arguments[1],
          i = arguments[2],
          o = new Jl(n, r);
        return o.setDensifyFraction(i),
          o.distance()
      }
    },
    Zl.MaxPointDistanceFilter.get = function () {
      return Kl
    },
    Zl.MaxDensifiedByFractionDistanceFilter.get = function () {
      return Ql
    },
    Object.defineProperties(Jl, Zl);
  var Kl = function () {
    this._maxPtDist = new Hl,
      this._minPtDist = new Hl,
      this._euclideanDist = new Wl,
      this._geom = null;
    var t = arguments[0];
    this._geom = t
  };
  Kl.prototype.filter = function (t) {
      this._minPtDist.initialize(),
        Wl.computeDistance(this._geom, t, this._minPtDist),
        this._maxPtDist.setMaximum(this._minPtDist)
    },
    Kl.prototype.getMaxPointDistance = function () {
      return this._maxPtDist
    },
    Kl.prototype.interfaces_ = function () {
      return [Lu]
    },
    Kl.prototype.getClass = function () {
      return Kl
    };
  var Ql = function () {
    this._maxPtDist = new Hl,
      this._minPtDist = new Hl,
      this._geom = null;
    var t = arguments[this._numSubSegs = 0],
      e = arguments[1];
    this._geom = t,
      this._numSubSegs = Math.trunc(Math.round(1 / e))
  };
  Ql.prototype.filter = function (t, e) {
      if (0 === e)
        return null;
      for (var n = t.getCoordinate(e - 1), r = t.getCoordinate(e), i = (r.x - n.x) / this._numSubSegs, o = (r.y - n.y) / this._numSubSegs, s = 0; s < this._numSubSegs; s++) {
        var a = n.x + s * i,
          u = n.y + s * o,
          c = new ka(a, u);
        this._minPtDist.initialize(),
          Wl.computeDistance(this._geom, c, this._minPtDist),
          this._maxPtDist.setMaximum(this._minPtDist)
      }
    },
    Ql.prototype.isDone = function () {
      return !1
    },
    Ql.prototype.isGeometryChanged = function () {
      return !1
    },
    Ql.prototype.getMaxPointDistance = function () {
      return this._maxPtDist
    },
    Ql.prototype.interfaces_ = function () {
      return [ic]
    },
    Ql.prototype.getClass = function () {
      return Ql
    };
  var $l = function (t, e, n) {
      this._minValidDistance = null,
        this._maxValidDistance = null,
        this._minDistanceFound = null,
        this._maxDistanceFound = null,
        this._isValid = !0,
        this._errMsg = null,
        this._errorLocation = null,
        this._errorIndicator = null,
        this._input = t || null,
        this._bufDistance = e || null,
        this._result = n || null
    },
    tp = {
      VERBOSE: {
        configurable: !0
      },
      MAX_DISTANCE_DIFF_FRAC: {
        configurable: !0
      }
    };
  $l.prototype.checkMaximumDistance = function (t, e, n) {
      var r = new Jl(e, t);
      if (r.setDensifyFraction(.25),
        this._maxDistanceFound = r.orientedDistance(),
        this._maxDistanceFound > n) {
        this._isValid = !1;
        var i = r.getCoordinates();
        this._errorLocation = i[1],
          this._errorIndicator = t.getFactory().createLineString(i),
          this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + gu.toLineString(i[0], i[1]) + ")"
      }
    },
    $l.prototype.isValid = function () {
      var t = Math.abs(this._bufDistance),
        e = $l.MAX_DISTANCE_DIFF_FRAC * t;
      return this._minValidDistance = t - e,
        this._maxValidDistance = t + e,
        !(!this._input.isEmpty() && !this._result.isEmpty()) || (0 < this._bufDistance ? this.checkPositiveValid() : this.checkNegativeValid(),
          $l.VERBOSE && su.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)),
          this._isValid)
    },
    $l.prototype.checkNegativeValid = function () {
      if (!(this._input instanceof yc || this._input instanceof vc || this._input instanceof oc))
        return null;
      var t = this.getPolygonLines(this._input);
      if (this.checkMinimumDistance(t, this._result, this._minValidDistance),
        !this._isValid)
        return null;
      this.checkMaximumDistance(t, this._result, this._maxValidDistance)
    },
    $l.prototype.getErrorIndicator = function () {
      return this._errorIndicator
    },
    $l.prototype.checkMinimumDistance = function (t, e, n) {
      var r = new Vl(t, e, n);
      if (this._minDistanceFound = r.distance(),
        this._minDistanceFound < n) {
        this._isValid = !1;
        var i = r.nearestPoints();
        this._errorLocation = r.nearestPoints()[1],
          this._errorIndicator = t.getFactory().createLineString(i),
          this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + gu.toLineString(i[0], i[1]) + " )"
      }
    },
    $l.prototype.checkPositiveValid = function () {
      var t = this._result.getBoundary();
      if (this.checkMinimumDistance(this._input, t, this._minValidDistance),
        !this._isValid)
        return null;
      this.checkMaximumDistance(this._input, t, this._maxValidDistance)
    },
    $l.prototype.getErrorLocation = function () {
      return this._errorLocation
    },
    $l.prototype.getPolygonLines = function (t) {
      for (var e = new ku, n = new kl(e), r = Bl.getPolygons(t).iterator(); r.hasNext();)
        r.next().apply(n);
      return t.getFactory().buildGeometry(e)
    },
    $l.prototype.getErrorMessage = function () {
      return this._errMsg
    },
    $l.prototype.interfaces_ = function () {
      return []
    },
    $l.prototype.getClass = function () {
      return $l
    },
    tp.VERBOSE.get = function () {
      return !1
    },
    tp.MAX_DISTANCE_DIFF_FRAC.get = function () {
      return .012
    },
    Object.defineProperties($l, tp);
  var ep = function (t, e, n) {
      this._isValid = !0,
        this._errorMsg = null,
        this._errorLocation = null,
        this._errorIndicator = null,
        this._input = t || null,
        this._distance = e || null,
        this._result = n || null
    },
    np = {
      VERBOSE: {
        configurable: !0
      },
      MAX_ENV_DIFF_FRAC: {
        configurable: !0
      }
    };
  ep.prototype.isValid = function () {
      return this.checkPolygonal(),
        this._isValid && (this.checkExpectedEmpty(),
          this._isValid && (this.checkEnvelope(),
            this._isValid && (this.checkArea(),
              this._isValid && this.checkDistance()))),
        this._isValid
    },
    ep.prototype.checkEnvelope = function () {
      if (this._distance < 0)
        return null;
      var t = this._distance * ep.MAX_ENV_DIFF_FRAC;
      0 === t && (t = .001);
      var e = new uu(this._input.getEnvelopeInternal());
      e.expandBy(this._distance);
      var n = new uu(this._result.getEnvelopeInternal());
      n.expandBy(t),
        n.contains(e) || (this._isValid = !1,
          this._errorMsg = "Buffer envelope is incorrect",
          this._errorIndicator = this._input.getFactory().toGeometry(n)),
        this.report("Envelope")
    },
    ep.prototype.checkDistance = function () {
      var t = new $l(this._input, this._distance, this._result);
      t.isValid() || (this._isValid = !1,
          this._errorMsg = t.getErrorMessage(),
          this._errorLocation = t.getErrorLocation(),
          this._errorIndicator = t.getErrorIndicator()),
        this.report("Distance")
    },
    ep.prototype.checkArea = function () {
      var t = this._input.getArea(),
        e = this._result.getArea();
      0 < this._distance && e < t && (this._isValid = !1,
          this._errorMsg = "Area of positive buffer is smaller than input",
          this._errorIndicator = this._result),
        this._distance < 0 && t < e && (this._isValid = !1,
          this._errorMsg = "Area of negative buffer is larger than input",
          this._errorIndicator = this._result),
        this.report("Area")
    },
    ep.prototype.checkPolygonal = function () {
      this._result instanceof yc || this._result instanceof vc || (this._isValid = !1),
        this._errorMsg = "Result is not polygonal",
        this._errorIndicator = this._result,
        this.report("Polygonal")
    },
    ep.prototype.getErrorIndicator = function () {
      return this._errorIndicator
    },
    ep.prototype.getErrorLocation = function () {
      return this._errorLocation
    },
    ep.prototype.checkExpectedEmpty = function () {
      return 2 <= this._input.getDimension() ? null : 0 < this._distance ? null : (this._result.isEmpty() || (this._isValid = !1,
          this._errorMsg = "Result is non-empty",
          this._errorIndicator = this._result),
        void this.report("ExpectedEmpty"))
    },
    ep.prototype.report = function (t) {
      if (!ep.VERBOSE)
        return null;
      su.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"))
    },
    ep.prototype.getErrorMessage = function () {
      return this._errorMsg
    },
    ep.prototype.interfaces_ = function () {
      return []
    },
    ep.prototype.getClass = function () {
      return ep
    },
    ep.isValidMsg = function (t, e, n) {
      var r = new ep(t, e, n);
      return r.isValid() ? null : r.getErrorMessage()
    },
    ep.isValid = function (t, e, n) {
      return !!new ep(t, e, n).isValid()
    },
    np.VERBOSE.get = function () {
      return !1
    },
    np.MAX_ENV_DIFF_FRAC.get = function () {
      return .012
    },
    Object.defineProperties(ep, np);
  var rp = function () {
    this._pts = null,
      this._data = null;
    var t = arguments[0],
      e = arguments[1];
    this._pts = t,
      this._data = e
  };
  rp.prototype.getCoordinates = function () {
      return this._pts
    },
    rp.prototype.size = function () {
      return this._pts.length
    },
    rp.prototype.getCoordinate = function (t) {
      return this._pts[t]
    },
    rp.prototype.isClosed = function () {
      return this._pts[0].equals(this._pts[this._pts.length - 1])
    },
    rp.prototype.getSegmentOctant = function (t) {
      return t === this._pts.length - 1 ? -1 : Sh.octant(this.getCoordinate(t), this.getCoordinate(t + 1))
    },
    rp.prototype.setData = function (t) {
      this._data = t
    },
    rp.prototype.getData = function () {
      return this._data
    },
    rp.prototype.toString = function () {
      return gu.toLineString(new Nc(this._pts))
    },
    rp.prototype.interfaces_ = function () {
      return [Mh]
    },
    rp.prototype.getClass = function () {
      return rp
    };
  var ip = function () {
    this._findAllIntersections = !1,
      this._isCheckEndSegmentsOnly = !1,
      this._li = null,
      this._interiorIntersection = null,
      this._intSegments = null,
      this._intersections = new ku,
      this._intersectionCount = 0,
      this._keepIntersections = !0;
    var t = arguments[0];
    this._li = t,
      this._interiorIntersection = null
  };
  ip.prototype.getInteriorIntersection = function () {
      return this._interiorIntersection
    },
    ip.prototype.setCheckEndSegmentsOnly = function (t) {
      this._isCheckEndSegmentsOnly = t
    },
    ip.prototype.getIntersectionSegments = function () {
      return this._intSegments
    },
    ip.prototype.count = function () {
      return this._intersectionCount
    },
    ip.prototype.getIntersections = function () {
      return this._intersections
    },
    ip.prototype.setFindAllIntersections = function (t) {
      this._findAllIntersections = t
    },
    ip.prototype.setKeepIntersections = function (t) {
      this._keepIntersections = t
    },
    ip.prototype.processIntersections = function (t, e, n, r) {
      if (!this._findAllIntersections && this.hasIntersection())
        return null;
      if (t === n && e === r)
        return null;
      if (this._isCheckEndSegmentsOnly && !this.isEndSegment(t, e) && !this.isEndSegment(n, r))
        return null;
      var i = t.getCoordinates()[e],
        o = t.getCoordinates()[e + 1],
        s = n.getCoordinates()[r],
        a = n.getCoordinates()[r + 1];
      this._li.computeIntersection(i, o, s, a),
        this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null),
          this._intSegments[0] = i,
          this._intSegments[1] = o,
          this._intSegments[2] = s,
          this._intSegments[3] = a,
          this._interiorIntersection = this._li.getIntersection(0),
          this._keepIntersections && this._intersections.add(this._interiorIntersection),
          this._intersectionCount++)
    },
    ip.prototype.isEndSegment = function (t, e) {
      return 0 === e || e >= t.size() - 2
    },
    ip.prototype.hasIntersection = function () {
      return null !== this._interiorIntersection
    },
    ip.prototype.isDone = function () {
      return !this._findAllIntersections && null !== this._interiorIntersection
    },
    ip.prototype.interfaces_ = function () {
      return [hl]
    },
    ip.prototype.getClass = function () {
      return ip
    },
    ip.createAllIntersectionsFinder = function (t) {
      var e = new ip(t);
      return e.setFindAllIntersections(!0),
        e
    },
    ip.createAnyIntersectionFinder = function (t) {
      return new ip(t)
    },
    ip.createIntersectionCounter = function (t) {
      var e = new ip(t);
      return e.setFindAllIntersections(!0),
        e.setKeepIntersections(!1),
        e
    };
  var op = function () {
    this._li = new xu,
      this._segStrings = null,
      this._findAllIntersections = !1,
      this._segInt = null,
      this._isValid = !0;
    var t = arguments[0];
    this._segStrings = t
  };
  op.prototype.execute = function () {
      if (null !== this._segInt)
        return null;
      this.checkInteriorIntersections()
    },
    op.prototype.getIntersections = function () {
      return this._segInt.getIntersections()
    },
    op.prototype.isValid = function () {
      return this.execute(),
        this._isValid
    },
    op.prototype.setFindAllIntersections = function (t) {
      this._findAllIntersections = t
    },
    op.prototype.checkInteriorIntersections = function () {
      this._isValid = !0,
        this._segInt = new ip(this._li),
        this._segInt.setFindAllIntersections(this._findAllIntersections);
      var t = new Gh;
      if (t.setSegmentIntersector(this._segInt),
        t.computeNodes(this._segStrings),
        this._segInt.hasIntersection())
        return this._isValid = !1,
          null
    },
    op.prototype.checkValid = function () {
      if (this.execute(),
        !this._isValid)
        throw new Yc(this.getErrorMessage(), this._segInt.getInteriorIntersection())
    },
    op.prototype.getErrorMessage = function () {
      if (this._isValid)
        return "no intersections found";
      var t = this._segInt.getIntersectionSegments();
      return "found non-noded intersection between " + gu.toLineString(t[0], t[1]) + " and " + gu.toLineString(t[2], t[3])
    },
    op.prototype.interfaces_ = function () {
      return []
    },
    op.prototype.getClass = function () {
      return op
    },
    op.computeIntersections = function (t) {
      var e = new op(t);
      return e.setFindAllIntersections(!0),
        e.isValid(),
        e.getIntersections()
    };
  var sp = function t() {
    this._nv = null;
    var e = arguments[0];
    this._nv = new op(t.toSegmentStrings(e))
  };
  sp.prototype.checkValid = function () {
      this._nv.checkValid()
    },
    sp.prototype.interfaces_ = function () {
      return []
    },
    sp.prototype.getClass = function () {
      return sp
    },
    sp.toSegmentStrings = function (t) {
      for (var e = new ku, n = t.iterator(); n.hasNext();) {
        var r = n.next();
        e.add(new rp(r.getCoordinates(), r))
      }
      return e
    },
    sp.checkValid = function (t) {
      new sp(t).checkValid()
    };
  var ap = function (t) {
    this._mapOp = t
  };
  ap.prototype.map = function (t) {
      for (var e = new ku, n = 0; n < t.getNumGeometries(); n++) {
        var r = this._mapOp.map(t.getGeometryN(n));
        r.isEmpty() || e.add(r)
      }
      return t.getFactory().createGeometryCollection(Ac.toGeometryArray(e))
    },
    ap.prototype.interfaces_ = function () {
      return []
    },
    ap.prototype.getClass = function () {
      return ap
    },
    ap.map = function (t, e) {
      return new ap(e).map(t)
    };
  var up = function () {
    this._op = null,
      this._geometryFactory = null,
      this._ptLocator = null,
      this._lineEdgesList = new ku,
      this._resultLineList = new ku;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2];
    this._op = t,
      this._geometryFactory = e,
      this._ptLocator = n
  };
  up.prototype.collectLines = function (t) {
      for (var e = this._op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next();
        this.collectLineEdge(n, t, this._lineEdgesList),
          this.collectBoundaryTouchEdge(n, t, this._lineEdgesList)
      }
    },
    up.prototype.labelIsolatedLine = function (t, e) {
      var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
      t.getLabel().setLocation(e, n)
    },
    up.prototype.build = function (t) {
      return this.findCoveredLineEdges(),
        this.collectLines(t),
        this.buildLines(t),
        this._resultLineList
    },
    up.prototype.collectLineEdge = function (t, e, n) {
      var r = t.getLabel(),
        i = t.getEdge();
      t.isLineEdge() && (t.isVisited() || !jp.isResultOfOp(r, e) || i.isCovered() || (n.add(i),
        t.setVisitedEdge(!0)))
    },
    up.prototype.findCoveredLineEdges = function () {
      for (var t = this._op.getGraph().getNodes().iterator(); t.hasNext();)
        t.next().getEdges().findCoveredLineEdges();
      for (var e = this._op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
        var n = e.next(),
          r = n.getEdge();
        if (n.isLineEdge() && !r.isCoveredSet()) {
          var i = this._op.isCoveredByA(n.getCoordinate());
          r.setCovered(i)
        }
      }
    },
    up.prototype.labelIsolatedLines = function (t) {
      for (var e = t.iterator(); e.hasNext();) {
        var n = e.next(),
          r = n.getLabel();
        n.isIsolated() && (r.isNull(0) ? this.labelIsolatedLine(n, 0) : this.labelIsolatedLine(n, 1))
      }
    },
    up.prototype.buildLines = function (t) {
      for (var e = this._lineEdgesList.iterator(); e.hasNext();) {
        var n = e.next(),
          r = this._geometryFactory.createLineString(n.getCoordinates());
        this._resultLineList.add(r),
          n.setInResult(!0)
      }
    },
    up.prototype.collectBoundaryTouchEdge = function (t, e, n) {
      var r = t.getLabel();
      return t.isLineEdge() ? null : t.isVisited() ? null : t.isInteriorAreaEdge() ? null : t.getEdge().isInResult() ? null : (_u.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()),
        void(jp.isResultOfOp(r, e) && e === jp.INTERSECTION && (n.add(t.getEdge()),
          t.setVisitedEdge(!0))))
    },
    up.prototype.interfaces_ = function () {
      return []
    },
    up.prototype.getClass = function () {
      return up
    };
  var cp = function () {
    this._op = null,
      this._geometryFactory = null,
      this._resultPointList = new ku;
    var t = arguments[0],
      e = arguments[1];
    this._op = t,
      this._geometryFactory = e
  };
  cp.prototype.filterCoveredNodeToPoint = function (t) {
      var e = t.getCoordinate();
      if (!this._op.isCoveredByLA(e)) {
        var n = this._geometryFactory.createPoint(e);
        this._resultPointList.add(n)
      }
    },
    cp.prototype.extractNonCoveredResultNodes = function (t) {
      for (var e = this._op.getGraph().getNodes().iterator(); e.hasNext();) {
        var n = e.next();
        if (!(n.isInResult() || n.isIncidentEdgeInResult() || 0 !== n.getEdges().getDegree() && t !== jp.INTERSECTION)) {
          var r = n.getLabel();
          jp.isResultOfOp(r, t) && this.filterCoveredNodeToPoint(n)
        }
      }
    },
    cp.prototype.build = function (t) {
      return this.extractNonCoveredResultNodes(t),
        this._resultPointList
    },
    cp.prototype.interfaces_ = function () {
      return []
    },
    cp.prototype.getClass = function () {
      return cp
    };
  var hp = function () {
    this._inputGeom = null,
      this._factory = null,
      this._pruneEmptyGeometry = !0,
      this._preserveGeometryCollectionType = !0,
      this._preserveCollections = !1,
      this._preserveType = !1
  };
  hp.prototype.transformPoint = function (t, e) {
      return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t))
    },
    hp.prototype.transformPolygon = function (t, e) {
      var n = !0,
        r = this.transformLinearRing(t.getExteriorRing(), t);
      null !== r && r instanceof mc && !r.isEmpty() || (n = !1);
      for (var i = new ku, o = 0; o < t.getNumInteriorRing(); o++) {
        var s = this.transformLinearRing(t.getInteriorRingN(o), t);
        null === s || s.isEmpty() || (s instanceof mc || (n = !1),
          i.add(s))
      }
      if (n)
        return this._factory.createPolygon(r, i.toArray([]));
      var a = new ku;
      return null !== r && a.add(r),
        a.addAll(i),
        this._factory.buildGeometry(a)
    },
    hp.prototype.createCoordinateSequence = function (t) {
      return this._factory.getCoordinateSequenceFactory().create(t)
    },
    hp.prototype.getInputGeometry = function () {
      return this._inputGeom
    },
    hp.prototype.transformMultiLineString = function (t, e) {
      for (var n = new ku, r = 0; r < t.getNumGeometries(); r++) {
        var i = this.transformLineString(t.getGeometryN(r), t);
        null !== i && (i.isEmpty() || n.add(i))
      }
      return this._factory.buildGeometry(n)
    },
    hp.prototype.transformCoordinates = function (t, e) {
      return this.copy(t)
    },
    hp.prototype.transformLineString = function (t, e) {
      return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t))
    },
    hp.prototype.transformMultiPoint = function (t, e) {
      for (var n = new ku, r = 0; r < t.getNumGeometries(); r++) {
        var i = this.transformPoint(t.getGeometryN(r), t);
        null !== i && (i.isEmpty() || n.add(i))
      }
      return this._factory.buildGeometry(n)
    },
    hp.prototype.transformMultiPolygon = function (t, e) {
      for (var n = new ku, r = 0; r < t.getNumGeometries(); r++) {
        var i = this.transformPolygon(t.getGeometryN(r), t);
        null !== i && (i.isEmpty() || n.add(i))
      }
      return this._factory.buildGeometry(n)
    },
    hp.prototype.copy = function (t) {
      return t.copy()
    },
    hp.prototype.transformGeometryCollection = function (t, e) {
      for (var n = new ku, r = 0; r < t.getNumGeometries(); r++) {
        var i = this.transform(t.getGeometryN(r));
        null !== i && (this._pruneEmptyGeometry && i.isEmpty() || n.add(i))
      }
      return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(Ac.toGeometryArray(n)) : this._factory.buildGeometry(n)
    },
    hp.prototype.transform = function (t) {
      if (this._inputGeom = t,
        this._factory = t.getFactory(),
        t instanceof gc)
        return this.transformPoint(t, null);
      if (t instanceof _c)
        return this.transformMultiPoint(t, null);
      if (t instanceof mc)
        return this.transformLinearRing(t, null);
      if (t instanceof pc)
        return this.transformLineString(t, null);
      if (t instanceof sc)
        return this.transformMultiLineString(t, null);
      if (t instanceof yc)
        return this.transformPolygon(t, null);
      if (t instanceof vc)
        return this.transformMultiPolygon(t, null);
      if (t instanceof oc)
        return this.transformGeometryCollection(t, null);
      throw new Aa("Unknown Geometry subtype: " + t.getClass().getName())
    },
    hp.prototype.transformLinearRing = function (t, e) {
      var n = this.transformCoordinates(t.getCoordinateSequence(), t);
      if (null === n)
        return this._factory.createLinearRing(null);
      var r = n.size();
      return 0 < r && r < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n)
    },
    hp.prototype.interfaces_ = function () {
      return []
    },
    hp.prototype.getClass = function () {
      return hp
    };
  var lp = function t() {
    if (this._snapTolerance = 0,
      this._srcPts = null,
      this._seg = new Oh,
      this._allowSnappingToSourceVertices = !1,
      this._isClosed = !1,
      arguments[0] instanceof pc && "number" == typeof arguments[1]) {
      var e = arguments[0],
        n = arguments[1];
      t.call(this, e.getCoordinates(), n)
    } else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
      var r = arguments[0],
        i = arguments[1];
      this._srcPts = r,
        this._isClosed = t.isClosed(r),
        this._snapTolerance = i
    }
  };
  lp.prototype.snapVertices = function (t, e) {
      for (var n = this._isClosed ? t.size() - 1 : t.size(), r = 0; r < n; r++) {
        var i = t.get(r),
          o = this.findSnapForVertex(i, e);
        null !== o && (t.set(r, new ka(o)),
          0 === r && this._isClosed && t.set(t.size() - 1, new ka(o)))
      }
    },
    lp.prototype.findSnapForVertex = function (t, e) {
      for (var n = 0; n < e.length; n++) {
        if (t.equals2D(e[n]))
          return null;
        if (t.distance(e[n]) < this._snapTolerance)
          return e[n]
      }
      return null
    },
    lp.prototype.snapTo = function (t) {
      var e = new ju(this._srcPts);
      return this.snapVertices(e, t),
        this.snapSegments(e, t),
        e.toCoordinateArray()
    },
    lp.prototype.snapSegments = function (t, e) {
      if (0 === e.length)
        return null;
      var n = e.length;
      e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);
      for (var r = 0; r < n; r++) {
        var i = e[r],
          o = this.findSegmentIndexToSnap(i, t);
        0 <= o && t.add(o + 1, new ka(i), !1)
      }
    },
    lp.prototype.findSegmentIndexToSnap = function (t, e) {
      for (var n = Da.MAX_VALUE, r = -1, i = 0; i < e.size() - 1; i++) {
        if (this._seg.p0 = e.get(i),
          this._seg.p1 = e.get(i + 1),
          this._seg.p0.equals2D(t) || this._seg.p1.equals2D(t)) {
          if (this._allowSnappingToSourceVertices)
            continue;
          return -1
        }
        var o = this._seg.distance(t);
        o < this._snapTolerance && o < n && (n = o,
          r = i)
      }
      return r
    },
    lp.prototype.setAllowSnappingToSourceVertices = function (t) {
      this._allowSnappingToSourceVertices = t
    },
    lp.prototype.interfaces_ = function () {
      return []
    },
    lp.prototype.getClass = function () {
      return lp
    },
    lp.isClosed = function (t) {
      return !(t.length <= 1) && t[0].equals2D(t[t.length - 1])
    };
  var pp = function (t) {
      this._srcGeom = t || null
    },
    fp = {
      SNAP_PRECISION_FACTOR: {
        configurable: !0
      }
    };
  pp.prototype.snapTo = function (t, e) {
      var n = this.extractTargetCoordinates(t);
      return new gp(e, n).transform(this._srcGeom)
    },
    pp.prototype.snapToSelf = function (t, e) {
      var n = this.extractTargetCoordinates(this._srcGeom),
        r = new gp(t, n, !0).transform(this._srcGeom),
        i = r;
      return e && Va(i, dc) && (i = r.buffer(0)),
        i
    },
    pp.prototype.computeSnapTolerance = function (t) {
      return this.computeMinimumSegmentLength(t) / 10
    },
    pp.prototype.extractTargetCoordinates = function (t) {
      for (var e = new Ei, n = t.getCoordinates(), r = 0; r < n.length; r++)
        e.add(n[r]);
      return e.toArray(new Array(0).fill(null))
    },
    pp.prototype.computeMinimumSegmentLength = function (t) {
      for (var e = Da.MAX_VALUE, n = 0; n < t.length - 1; n++) {
        var r = t[n].distance(t[n + 1]);
        r < e && (e = r)
      }
      return e
    },
    pp.prototype.interfaces_ = function () {
      return []
    },
    pp.prototype.getClass = function () {
      return pp
    },
    pp.snap = function (t, e, n) {
      var r = new Array(2).fill(null),
        i = new pp(t);
      r[0] = i.snapTo(e, n);
      var o = new pp(e);
      return r[1] = o.snapTo(r[0], n),
        r
    },
    pp.computeOverlaySnapTolerance = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = pp.computeSizeBasedSnapTolerance(t),
          n = t.getPrecisionModel();
        if (n.getType() === Pc.FIXED) {
          var r = 1 / n.getScale() * 2 / 1.415;
          e < r && (e = r)
        }
        return e
      }
      if (2 === arguments.length) {
        var i = arguments[0],
          o = arguments[1];
        return Math.min(pp.computeOverlaySnapTolerance(i), pp.computeOverlaySnapTolerance(o))
      }
    },
    pp.computeSizeBasedSnapTolerance = function (t) {
      var e = t.getEnvelopeInternal();
      return Math.min(e.getHeight(), e.getWidth()) * pp.SNAP_PRECISION_FACTOR
    },
    pp.snapToSelf = function (t, e, n) {
      return new pp(t).snapToSelf(e, n)
    },
    fp.SNAP_PRECISION_FACTOR.get = function () {
      return 1e-9
    },
    Object.defineProperties(pp, fp);
  var gp = function (r) {
      function t(t, e, n) {
        r.call(this),
          this._snapTolerance = t || null,
          this._snapPts = e || null,
          this._isSelfSnap = void 0 !== n && n
      }
      return r && (t.__proto__ = r),
        ((t.prototype = Object.create(r && r.prototype)).constructor = t).prototype.snapLine = function (t, e) {
          var n = new lp(t, this._snapTolerance);
          return n.setAllowSnappingToSourceVertices(this._isSelfSnap),
            n.snapTo(e)
        },
        t.prototype.transformCoordinates = function (t, e) {
          var n = t.toCoordinateArray(),
            r = this.snapLine(n, this._snapPts);
          return this._factory.getCoordinateSequenceFactory().create(r)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(hp),
    dp = function () {
      this._isFirst = !0,
        this._commonMantissaBitsCount = 53,
        this._commonBits = 0,
        this._commonSignExp = null
    };
  dp.prototype.getCommon = function () {
      return Da.longBitsToDouble(this._commonBits)
    },
    dp.prototype.add = function (t) {
      var e = Da.doubleToLongBits(t);
      return this._isFirst ? (this._commonBits = e,
        this._commonSignExp = dp.signExpBits(this._commonBits),
        this._isFirst = !1,
        null) : dp.signExpBits(e) !== this._commonSignExp ? (this._commonBits = 0,
        null) : (this._commonMantissaBitsCount = dp.numCommonMostSigMantissaBits(this._commonBits, e),
        void(this._commonBits = dp.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount))))
    },
    dp.prototype.toString = function () {
      if (1 === arguments.length) {
        var t = arguments[0],
          e = Da.longBitsToDouble(t),
          n = "0000000000000000000000000000000000000000000000000000000000000000" + Da.toBinaryString(t),
          r = n.substring(n.length - 64);
        return r.substring(0, 1) + "  " + r.substring(1, 12) + "(exp) " + r.substring(12) + " [ " + e + " ]"
      }
    },
    dp.prototype.interfaces_ = function () {
      return []
    },
    dp.prototype.getClass = function () {
      return dp
    },
    dp.getBit = function (t, e) {
      return 0 != (t & 1 << e) ? 1 : 0
    },
    dp.signExpBits = function (t) {
      return t >> 52
    },
    dp.zeroLowerBits = function (t, e) {
      return t & ~((1 << e) - 1)
    },
    dp.numCommonMostSigMantissaBits = function (t, e) {
      for (var n = 0, r = 52; 0 <= r; r--) {
        if (dp.getBit(t, r) !== dp.getBit(e, r))
          return n;
        n++
      }
      return 52
    };
  var yp = function () {
      this._commonCoord = null,
        this._ccFilter = new mp
    },
    _p = {
      CommonCoordinateFilter: {
        configurable: !0
      },
      Translater: {
        configurable: !0
      }
    };
  yp.prototype.addCommonBits = function (t) {
      var e = new vp(this._commonCoord);
      t.apply(e),
        t.geometryChanged()
    },
    yp.prototype.removeCommonBits = function (t) {
      if (0 === this._commonCoord.x && 0 === this._commonCoord.y)
        return t;
      var e = new ka(this._commonCoord);
      e.x = -e.x,
        e.y = -e.y;
      var n = new vp(e);
      return t.apply(n),
        t.geometryChanged(),
        t
    },
    yp.prototype.getCommonCoordinate = function () {
      return this._commonCoord
    },
    yp.prototype.add = function (t) {
      t.apply(this._ccFilter),
        this._commonCoord = this._ccFilter.getCommonCoordinate()
    },
    yp.prototype.interfaces_ = function () {
      return []
    },
    yp.prototype.getClass = function () {
      return yp
    },
    _p.CommonCoordinateFilter.get = function () {
      return mp
    },
    _p.Translater.get = function () {
      return vp
    },
    Object.defineProperties(yp, _p);
  var mp = function () {
    this._commonBitsX = new dp,
      this._commonBitsY = new dp
  };
  mp.prototype.filter = function (t) {
      this._commonBitsX.add(t.x),
        this._commonBitsY.add(t.y)
    },
    mp.prototype.getCommonCoordinate = function () {
      return new ka(this._commonBitsX.getCommon(), this._commonBitsY.getCommon())
    },
    mp.prototype.interfaces_ = function () {
      return [Lu]
    },
    mp.prototype.getClass = function () {
      return mp
    };
  var vp = function () {
    this.trans = null;
    var t = arguments[0];
    this.trans = t
  };
  vp.prototype.filter = function (t, e) {
      var n = t.getOrdinate(e, 0) + this.trans.x,
        r = t.getOrdinate(e, 1) + this.trans.y;
      t.setOrdinate(e, 0, n),
        t.setOrdinate(e, 1, r)
    },
    vp.prototype.isDone = function () {
      return !1
    },
    vp.prototype.isGeometryChanged = function () {
      return !0
    },
    vp.prototype.interfaces_ = function () {
      return [ic]
    },
    vp.prototype.getClass = function () {
      return vp
    };
  var xp = function (t, e) {
    this._geom = new Array(2).fill(null),
      this._snapTolerance = null,
      this._cbr = null,
      this._geom[0] = t,
      this._geom[1] = e,
      this.computeSnapTolerance()
  };
  xp.prototype.selfSnap = function (t) {
      return new pp(t).snapTo(t, this._snapTolerance)
    },
    xp.prototype.removeCommonBits = function (t) {
      this._cbr = new yp,
        this._cbr.add(t[0]),
        this._cbr.add(t[1]);
      var e = new Array(2).fill(null);
      return e[0] = this._cbr.removeCommonBits(t[0].copy()),
        e[1] = this._cbr.removeCommonBits(t[1].copy()),
        e
    },
    xp.prototype.prepareResult = function (t) {
      return this._cbr.addCommonBits(t),
        t
    },
    xp.prototype.getResultGeometry = function (t) {
      var e = this.snap(this._geom),
        n = jp.overlayOp(e[0], e[1], t);
      return this.prepareResult(n)
    },
    xp.prototype.checkValid = function (t) {
      t.isValid() || su.out.println("Snapped geometry is invalid")
    },
    xp.prototype.computeSnapTolerance = function () {
      this._snapTolerance = pp.computeOverlaySnapTolerance(this._geom[0], this._geom[1])
    },
    xp.prototype.snap = function (t) {
      var e = this.removeCommonBits(t);
      return pp.snap(e[0], e[1], this._snapTolerance)
    },
    xp.prototype.interfaces_ = function () {
      return []
    },
    xp.prototype.getClass = function () {
      return xp
    },
    xp.overlayOp = function (t, e, n) {
      return new xp(t, e).getResultGeometry(n)
    },
    xp.union = function (t, e) {
      return xp.overlayOp(t, e, jp.UNION)
    },
    xp.intersection = function (t, e) {
      return xp.overlayOp(t, e, jp.INTERSECTION)
    },
    xp.symDifference = function (t, e) {
      return xp.overlayOp(t, e, jp.SYMDIFFERENCE)
    },
    xp.difference = function (t, e) {
      return xp.overlayOp(t, e, jp.DIFFERENCE)
    };
  var Ep = function (t, e) {
    this._geom = new Array(2).fill(null),
      this._geom[0] = t,
      this._geom[1] = e
  };
  Ep.prototype.getResultGeometry = function (t) {
      var e = null,
        n = !1,
        r = null;
      try {
        e = jp.overlayOp(this._geom[0], this._geom[1], t),
          n = !0
      } catch (t) {
        if (!(t instanceof du))
          throw t;
        r = t
      }
      if (!n)
        try {
          e = xp.overlayOp(this._geom[0], this._geom[1], t)
        } catch (t) {
          throw t instanceof du ? r : t
        }
      return e
    },
    Ep.prototype.interfaces_ = function () {
      return []
    },
    Ep.prototype.getClass = function () {
      return Ep
    },
    Ep.overlayOp = function (t, e, n) {
      return new Ep(t, e).getResultGeometry(n)
    },
    Ep.union = function (t, e) {
      return Ep.overlayOp(t, e, jp.UNION)
    },
    Ep.intersection = function (t, e) {
      return Ep.overlayOp(t, e, jp.INTERSECTION)
    },
    Ep.symDifference = function (t, e) {
      return Ep.overlayOp(t, e, jp.SYMDIFFERENCE)
    },
    Ep.difference = function (t, e) {
      return Ep.overlayOp(t, e, jp.DIFFERENCE)
    };
  var wp = function () {
    this.mce = null,
      this.chainIndex = null;
    var t = arguments[0],
      e = arguments[1];
    this.mce = t,
      this.chainIndex = e
  };
  wp.prototype.computeIntersections = function (t, e) {
      this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e)
    },
    wp.prototype.interfaces_ = function () {
      return []
    },
    wp.prototype.getClass = function () {
      return wp
    };
  var bp = function t() {
      if (this._label = null,
        this._xValue = null,
        this._eventType = null,
        this._insertEvent = null,
        this._deleteEventIndex = null,
        this._obj = null,
        2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        this._eventType = t.DELETE,
          this._xValue = e,
          this._insertEvent = n
      } else if (3 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2];
        this._eventType = t.INSERT,
          this._label = r,
          this._xValue = i,
          this._obj = o
      }
    },
    Ip = {
      INSERT: {
        configurable: !0
      },
      DELETE: {
        configurable: !0
      }
    };
  bp.prototype.isDelete = function () {
      return this._eventType === bp.DELETE
    },
    bp.prototype.setDeleteEventIndex = function (t) {
      this._deleteEventIndex = t
    },
    bp.prototype.getObject = function () {
      return this._obj
    },
    bp.prototype.compareTo = function (t) {
      var e = t;
      return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0
    },
    bp.prototype.getInsertEvent = function () {
      return this._insertEvent
    },
    bp.prototype.isInsert = function () {
      return this._eventType === bp.INSERT
    },
    bp.prototype.isSameLabel = function (t) {
      return null !== this._label && this._label === t._label
    },
    bp.prototype.getDeleteEventIndex = function () {
      return this._deleteEventIndex
    },
    bp.prototype.interfaces_ = function () {
      return [qa]
    },
    bp.prototype.getClass = function () {
      return bp
    },
    Ip.INSERT.get = function () {
      return 1
    },
    Ip.DELETE.get = function () {
      return 2
    },
    Object.defineProperties(bp, Ip);
  var Np = function () {};
  Np.prototype.interfaces_ = function () {
      return []
    },
    Np.prototype.getClass = function () {
      return Np
    };
  var Cp = function () {
    this._hasIntersection = !1,
      this._hasProper = !1,
      this._hasProperInterior = !1,
      this._properIntersectionPoint = null,
      this._li = null,
      this._includeProper = null,
      this._recordIsolated = null,
      this._isSelfIntersection = null,
      this._numIntersections = 0,
      this.numTests = 0,
      this._bdyNodes = null,
      this._isDone = !1,
      this._isDoneWhenProperInt = !1;
    var t = arguments[0],
      e = arguments[1],
      n = arguments[2];
    this._li = t,
      this._includeProper = e,
      this._recordIsolated = n
  };
  Cp.prototype.isTrivialIntersection = function (t, e, n, r) {
      if (t === n && 1 === this._li.getIntersectionNum()) {
        if (Cp.isAdjacentSegments(e, r))
          return !0;
        if (t.isClosed()) {
          var i = t.getNumPoints() - 1;
          if (0 === e && r === i || 0 === r && e === i)
            return !0
        }
      }
      return !1
    },
    Cp.prototype.getProperIntersectionPoint = function () {
      return this._properIntersectionPoint
    },
    Cp.prototype.setIsDoneIfProperInt = function (t) {
      this._isDoneWhenProperInt = t
    },
    Cp.prototype.hasProperInteriorIntersection = function () {
      return this._hasProperInterior
    },
    Cp.prototype.isBoundaryPointInternal = function (t, e) {
      for (var n = e.iterator(); n.hasNext();) {
        var r = n.next().getCoordinate();
        if (t.isIntersection(r))
          return !0
      }
      return !1
    },
    Cp.prototype.hasProperIntersection = function () {
      return this._hasProper
    },
    Cp.prototype.hasIntersection = function () {
      return this._hasIntersection
    },
    Cp.prototype.isDone = function () {
      return this._isDone
    },
    Cp.prototype.isBoundaryPoint = function (t, e) {
      return !(null === e || !this.isBoundaryPointInternal(t, e[0]) && !this.isBoundaryPointInternal(t, e[1]))
    },
    Cp.prototype.setBoundaryNodes = function (t, e) {
      this._bdyNodes = new Array(2).fill(null),
        this._bdyNodes[0] = t,
        this._bdyNodes[1] = e
    },
    Cp.prototype.addIntersections = function (t, e, n, r) {
      if (t === n && e === r)
        return null;
      this.numTests++;
      var i = t.getCoordinates()[e],
        o = t.getCoordinates()[e + 1],
        s = n.getCoordinates()[r],
        a = n.getCoordinates()[r + 1];
      this._li.computeIntersection(i, o, s, a),
        this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1),
            n.setIsolated(!1)),
          this._numIntersections++,
          this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0,
            !this._includeProper && this._li.isProper() || (t.addIntersections(this._li, e, 0),
              n.addIntersections(this._li, r, 1)),
            this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(),
              this._hasProper = !0,
              this._isDoneWhenProperInt && (this._isDone = !0),
              this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))))
    },
    Cp.prototype.interfaces_ = function () {
      return []
    },
    Cp.prototype.getClass = function () {
      return Cp
    },
    Cp.isAdjacentSegments = function (t, e) {
      return 1 === Math.abs(t - e)
    };
  var Sp = function (t) {
      function e() {
        t.call(this),
          this.events = new ku,
          this.nOverlaps = null
      }
      return t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.prepareEvents = function () {
          yh.sort(this.events);
          for (var t = 0; t < this.events.size(); t++) {
            var e = this.events.get(t);
            e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t)
          }
        },
        e.prototype.computeIntersections = function () {
          if (1 === arguments.length) {
            var t = arguments[0];
            this.nOverlaps = 0,
              this.prepareEvents();
            for (var e = 0; e < this.events.size(); e++) {
              var n = this.events.get(e);
              if (n.isInsert() && this.processOverlaps(e, n.getDeleteEventIndex(), n, t),
                t.isDone())
                break
            }
          } else if (3 === arguments.length)
            if (arguments[2] instanceof Cp && Va(arguments[0], Bu) && Va(arguments[1], Bu)) {
              var r = arguments[0],
                i = arguments[1],
                o = arguments[2];
              this.addEdges(r, r),
                this.addEdges(i, i),
                this.computeIntersections(o)
            } else if ("boolean" == typeof arguments[2] && Va(arguments[0], Bu) && arguments[1] instanceof Cp) {
            var s = arguments[0],
              a = arguments[1];
            arguments[2] ? this.addEdges(s, null) : this.addEdges(s),
              this.computeIntersections(a)
          }
        },
        e.prototype.addEdge = function (t, e) {
          for (var n = t.getMonotoneChainEdge(), r = n.getStartIndexes(), i = 0; i < r.length - 1; i++) {
            var o = new wp(n, i),
              s = new bp(e, n.getMinX(i), o);
            this.events.add(s),
              this.events.add(new bp(n.getMaxX(i), s))
          }
        },
        e.prototype.processOverlaps = function (t, e, n, r) {
          for (var i = n.getObject(), o = t; o < e; o++) {
            var s = this.events.get(o);
            if (s.isInsert()) {
              var a = s.getObject();
              n.isSameLabel(s) || (i.computeIntersections(a, r),
                this.nOverlaps++)
            }
          }
        },
        e.prototype.addEdges = function () {
          if (1 === arguments.length)
            for (var t = arguments[0].iterator(); t.hasNext();) {
              var e = t.next();
              this.addEdge(e, e)
            }
          else if (2 === arguments.length)
            for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();) {
              var o = i.next();
              this.addEdge(o, r)
            }
        },
        e.prototype.interfaces_ = function () {
          return []
        },
        e.prototype.getClass = function () {
          return e
        },
        e
    }(Np),
    Mp = function () {
      this._min = Da.POSITIVE_INFINITY,
        this._max = Da.NEGATIVE_INFINITY
    },
    Lp = {
      NodeComparator: {
        configurable: !0
      }
    };
  Mp.prototype.getMin = function () {
      return this._min
    },
    Mp.prototype.intersects = function (t, e) {
      return !(this._min > e || this._max < t)
    },
    Mp.prototype.getMax = function () {
      return this._max
    },
    Mp.prototype.toString = function () {
      return gu.toLineString(new ka(this._min, 0), new ka(this._max, 0))
    },
    Mp.prototype.interfaces_ = function () {
      return []
    },
    Mp.prototype.getClass = function () {
      return Mp
    },
    Lp.NodeComparator.get = function () {
      return Pp
    },
    Object.defineProperties(Mp, Lp);
  var Pp = function () {};
  Pp.prototype.compare = function (t, e) {
      var n = t,
        r = e,
        i = (n._min + n._max) / 2,
        o = (r._min + r._max) / 2;
      return i < o ? -1 : o < i ? 1 : 0
    },
    Pp.prototype.interfaces_ = function () {
      return [Ba]
    },
    Pp.prototype.getClass = function () {
      return Pp
    };
  var Op = function (r) {
      function t() {
        r.call(this),
          this._item = null;
        var t = arguments[0],
          e = arguments[1],
          n = arguments[2];
        this._min = t,
          this._max = e,
          this._item = n
      }
      return r && (t.__proto__ = r),
        ((t.prototype = Object.create(r && r.prototype)).constructor = t).prototype.query = function (t, e, n) {
          if (!this.intersects(t, e))
            return null;
          n.visitItem(this._item)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(Mp),
    Rp = function (n) {
      function t() {
        n.call(this),
          this._node1 = null,
          this._node2 = null;
        var t = arguments[0],
          e = arguments[1];
        this._node1 = t,
          this._node2 = e,
          this.buildExtent(this._node1, this._node2)
      }
      return n && (t.__proto__ = n),
        ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.buildExtent = function (t, e) {
          this._min = Math.min(t._min, e._min),
            this._max = Math.max(t._max, e._max)
        },
        t.prototype.query = function (t, e, n) {
          if (!this.intersects(t, e))
            return null;
          null !== this._node1 && this._node1.query(t, e, n),
            null !== this._node2 && this._node2.query(t, e, n)
        },
        t.prototype.interfaces_ = function () {
          return []
        },
        t.prototype.getClass = function () {
          return t
        },
        t
    }(Mp),
    Tp = function () {
      this._leaves = new ku,
        this._root = null,
        this._level = 0
    };
  Tp.prototype.buildTree = function () {
      yh.sort(this._leaves, new Mp.NodeComparator);
      for (var t = this._leaves, e = null, n = new ku;;) {
        if (this.buildLevel(t, n),
          1 === n.size())
          return n.get(0);
        e = t,
          t = n,
          n = e
      }
    },
    Tp.prototype.insert = function (t, e, n) {
      if (null !== this._root)
        throw new Error("Index cannot be added to once it has been queried");
      this._leaves.add(new Op(t, e, n))
    },
    Tp.prototype.query = function (t, e, n) {
      this.init(),
        this._root.query(t, e, n)
    },
    Tp.prototype.buildRoot = function () {
      if (null !== this._root)
        return null;
      this._root = this.buildTree()
    },
    Tp.prototype.printNode = function (t) {
      su.out.println(gu.toLineString(new ka(t._min, this._level), new ka(t._max, this._level)))
    },
    Tp.prototype.init = function () {
      if (null !== this._root)
        return null;
      this.buildRoot()
    },
    Tp.prototype.buildLevel = function (t, e) {
      this._level++,
        e.clear();
      for (var n = 0; n < t.size(); n += 2) {
        var r = t.get(n);
        if (null === (n + 1 < t.size() ? t.get(n) : null))
          e.add(r);
        else {
          var i = new Rp(t.get(n), t.get(n + 1));
          e.add(i)
        }
      }
    },
    Tp.prototype.interfaces_ = function () {
      return []
    },
    Tp.prototype.getClass = function () {
      return Tp
    };
  var Ap = function () {
    this._items = new ku
  };
  Ap.prototype.visitItem = function (t) {
      this._items.add(t)
    },
    Ap.prototype.getItems = function () {
      return this._items
    },
    Ap.prototype.interfaces_ = function () {
      return [ph]
    },
    Ap.prototype.getClass = function () {
      return Ap
    };
  var Dp = function () {
      this._index = null;
      var t = arguments[0];
      if (!Va(t, dc))
        throw new Aa("Argument must be Polygonal");
      this._index = new Gp(t)
    },
    Fp = {
      SegmentVisitor: {
        configurable: !0
      },
      IntervalIndexedGeometry: {
        configurable: !0
      }
    };
  Dp.prototype.locate = function (t) {
      var e = new wu(t),
        n = new qp(e);
      return this._index.query(t.y, t.y, n),
        e.getLocation()
    },
    Dp.prototype.interfaces_ = function () {
      return [nl]
    },
    Dp.prototype.getClass = function () {
      return Dp
    },
    Fp.SegmentVisitor.get = function () {
      return qp
    },
    Fp.IntervalIndexedGeometry.get = function () {
      return Gp
    },
    Object.defineProperties(Dp, Fp);
  var qp = function () {
    this._counter = null;
    var t = arguments[0];
    this._counter = t
  };
  qp.prototype.visitItem = function (t) {
      var e = t;
      this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1))
    },
    qp.prototype.interfaces_ = function () {
      return [ph]
    },
    qp.prototype.getClass = function () {
      return qp
    };
  var Gp = function () {
    this._index = new Tp;
    var t = arguments[0];
    this.init(t)
  };
  Gp.prototype.init = function (t) {
      for (var e = kl.getLines(t).iterator(); e.hasNext();) {
        var n = e.next().getCoordinates();
        this.addLine(n)
      }
    },
    Gp.prototype.addLine = function (t) {
      for (var e = 1; e < t.length; e++) {
        var n = new Oh(t[e - 1], t[e]),
          r = Math.min(n.p0.y, n.p1.y),
          i = Math.max(n.p0.y, n.p1.y);
        this._index.insert(r, i, n)
      }
    },
    Gp.prototype.query = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = new Ap;
        return this._index.query(t, e, n),
          n.getItems()
      }
      if (3 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2];
        this._index.query(r, i, o)
      }
    },
    Gp.prototype.interfaces_ = function () {
      return []
    },
    Gp.prototype.getClass = function () {
      return Gp
    };
  var Bp = function (s) {
      function o() {
        if (s.call(this),
          this._parentGeom = null,
          this._lineEdgeMap = new Lc,
          this._boundaryNodeRule = null,
          this._useBoundaryDeterminationRule = !0,
          this._argIndex = null,
          this._boundaryNodes = null,
          this._hasTooFewPoints = !1,
          this._invalidPoint = null,
          this._areaPtLocator = null,
          this._ptLocator = new zl,
          2 === arguments.length) {
          var t = arguments[0],
            e = arguments[1],
            n = Pu.OGC_SFS_BOUNDARY_RULE;
          this._argIndex = t,
            this._parentGeom = e,
            this._boundaryNodeRule = n,
            null !== e && this.add(e)
        } else if (3 === arguments.length) {
          var r = arguments[0],
            i = arguments[1],
            o = arguments[2];
          this._argIndex = r,
            this._parentGeom = i,
            this._boundaryNodeRule = o,
            null !== i && this.add(i)
        }
      }
      return s && (o.__proto__ = s),
        ((o.prototype = Object.create(s && s.prototype)).constructor = o).prototype.insertBoundaryPoint = function (t, e) {
          var n = this._nodes.addNode(e).getLabel(),
            r = 1;
          n.getLocation(t, jc.ON) === Ua.BOUNDARY && r++;
          var i = o.determineBoundary(this._boundaryNodeRule, r);
          n.setLocation(t, i)
        },
        o.prototype.computeSelfNodes = function () {
          if (2 === arguments.length) {
            var t = arguments[0],
              e = arguments[1];
            return this.computeSelfNodes(t, e, !1)
          }
          if (3 === arguments.length) {
            var n = arguments[0],
              r = arguments[1],
              i = arguments[2],
              o = new Cp(n, !0, !1);
            o.setIsDoneIfProperInt(i);
            var s = this.createEdgeSetIntersector(),
              a = this._parentGeom instanceof mc || this._parentGeom instanceof yc || this._parentGeom instanceof vc,
              u = r || !a;
            return s.computeIntersections(this._edges, o, u),
              this.addSelfIntersectionNodes(this._argIndex),
              o
          }
        },
        o.prototype.computeSplitEdges = function (t) {
          for (var e = this._edges.iterator(); e.hasNext();)
            e.next().eiList.addSplitEdges(t)
        },
        o.prototype.computeEdgeIntersections = function (t, e, n) {
          var r = new Cp(e, n, !0);
          return r.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes()),
            this.createEdgeSetIntersector().computeIntersections(this._edges, t._edges, r),
            r
        },
        o.prototype.getGeometry = function () {
          return this._parentGeom
        },
        o.prototype.getBoundaryNodeRule = function () {
          return this._boundaryNodeRule
        },
        o.prototype.hasTooFewPoints = function () {
          return this._hasTooFewPoints
        },
        o.prototype.addPoint = function () {
          if (arguments[0] instanceof gc) {
            var t = arguments[0].getCoordinate();
            this.insertPoint(this._argIndex, t, Ua.INTERIOR)
          } else if (arguments[0] instanceof ka) {
            var e = arguments[0];
            this.insertPoint(this._argIndex, e, Ua.INTERIOR)
          }
        },
        o.prototype.addPolygon = function (t) {
          this.addPolygonRing(t.getExteriorRing(), Ua.EXTERIOR, Ua.INTERIOR);
          for (var e = 0; e < t.getNumInteriorRing(); e++) {
            var n = t.getInteriorRingN(e);
            this.addPolygonRing(n, Ua.INTERIOR, Ua.EXTERIOR)
          }
        },
        o.prototype.addEdge = function (t) {
          this.insertEdge(t);
          var e = t.getCoordinates();
          this.insertPoint(this._argIndex, e[0], Ua.BOUNDARY),
            this.insertPoint(this._argIndex, e[e.length - 1], Ua.BOUNDARY)
        },
        o.prototype.addLineString = function (t) {
          var e = Xu.removeRepeatedPoints(t.getCoordinates());
          if (e.length < 2)
            return this._hasTooFewPoints = !0,
              this._invalidPoint = e[0],
              null;
          var n = new ml(e, new Jc(this._argIndex, Ua.INTERIOR));
          this._lineEdgeMap.put(t, n),
            this.insertEdge(n),
            _u.isTrue(2 <= e.length, "found LineString with single point"),
            this.insertBoundaryPoint(this._argIndex, e[0]),
            this.insertBoundaryPoint(this._argIndex, e[e.length - 1])
        },
        o.prototype.getInvalidPoint = function () {
          return this._invalidPoint
        },
        o.prototype.getBoundaryPoints = function () {
          for (var t = this.getBoundaryNodes(), e = new Array(t.size()).fill(null), n = 0, r = t.iterator(); r.hasNext();) {
            var i = r.next();
            e[n++] = i.getCoordinate().copy()
          }
          return e
        },
        o.prototype.getBoundaryNodes = function () {
          return null === this._boundaryNodes && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)),
            this._boundaryNodes
        },
        o.prototype.addSelfIntersectionNode = function (t, e, n) {
          if (this.isBoundaryNode(t, e))
            return null;
          n === Ua.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n)
        },
        o.prototype.addPolygonRing = function (t, e, n) {
          if (t.isEmpty())
            return null;
          var r = Xu.removeRepeatedPoints(t.getCoordinates());
          if (r.length < 4)
            return this._hasTooFewPoints = !0,
              this._invalidPoint = r[0],
              null;
          var i = e,
            o = n;
          bu.isCCW(r) && (i = n,
            o = e);
          var s = new ml(r, new Jc(this._argIndex, Ua.BOUNDARY, i, o));
          this._lineEdgeMap.put(t, s),
            this.insertEdge(s),
            this.insertPoint(this._argIndex, r[0], Ua.BOUNDARY)
        },
        o.prototype.insertPoint = function (t, e, n) {
          var r = this._nodes.addNode(e),
            i = r.getLabel();
          null === i ? r._label = new Jc(t, n) : i.setLocation(t, n)
        },
        o.prototype.createEdgeSetIntersector = function () {
          return new Sp
        },
        o.prototype.addSelfIntersectionNodes = function (t) {
          for (var e = this._edges.iterator(); e.hasNext();)
            for (var n = e.next(), r = n.getLabel().getLocation(t), i = n.eiList.iterator(); i.hasNext();) {
              var o = i.next();
              this.addSelfIntersectionNode(t, o.coord, r)
            }
        },
        o.prototype.add = function () {
          if (1 !== arguments.length)
            return s.prototype.add.apply(this, arguments);
          var t = arguments[0];
          if (t.isEmpty())
            return null;
          if (t instanceof vc && (this._useBoundaryDeterminationRule = !1),
            t instanceof yc)
            this.addPolygon(t);
          else if (t instanceof pc)
            this.addLineString(t);
          else if (t instanceof gc)
            this.addPoint(t);
          else if (t instanceof _c)
            this.addCollection(t);
          else if (t instanceof sc)
            this.addCollection(t);
          else if (t instanceof vc)
            this.addCollection(t);
          else {
            if (!(t instanceof oc))
              throw new Error(t.getClass().getName());
            this.addCollection(t)
          }
        },
        o.prototype.addCollection = function (t) {
          for (var e = 0; e < t.getNumGeometries(); e++) {
            var n = t.getGeometryN(e);
            this.add(n)
          }
        },
        o.prototype.locate = function (t) {
          return Va(this._parentGeom, dc) && 50 < this._parentGeom.getNumGeometries() ? (null === this._areaPtLocator && (this._areaPtLocator = new Dp(this._parentGeom)),
            this._areaPtLocator.locate(t)) : this._ptLocator.locate(t, this._parentGeom)
        },
        o.prototype.findEdge = function () {
          if (1 !== arguments.length)
            return s.prototype.findEdge.apply(this, arguments);
          var t = arguments[0];
          return this._lineEdgeMap.get(t)
        },
        o.prototype.interfaces_ = function () {
          return []
        },
        o.prototype.getClass = function () {
          return o
        },
        o.determineBoundary = function (t, e) {
          return t.isInBoundary(e) ? Ua.BOUNDARY : Ua.INTERIOR
        },
        o
    }(ah),
    kp = function () {
      if (this._li = new xu,
        this._resultPrecisionModel = null,
        this._arg = null,
        1 === arguments.length) {
        var t = arguments[0];
        this.setComputationPrecision(t.getPrecisionModel()),
          this._arg = new Array(1).fill(null),
          this._arg[0] = new Bp(0, t)
      } else if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = Pu.OGC_SFS_BOUNDARY_RULE;
        0 <= e.getPrecisionModel().compareTo(n.getPrecisionModel()) ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()),
          this._arg = new Array(2).fill(null),
          this._arg[0] = new Bp(0, e, r),
          this._arg[1] = new Bp(1, n, r)
      } else if (3 === arguments.length) {
        var i = arguments[0],
          o = arguments[1],
          s = arguments[2];
        0 <= i.getPrecisionModel().compareTo(o.getPrecisionModel()) ? this.setComputationPrecision(i.getPrecisionModel()) : this.setComputationPrecision(o.getPrecisionModel()),
          this._arg = new Array(2).fill(null),
          this._arg[0] = new Bp(0, i, s),
          this._arg[1] = new Bp(1, o, s)
      }
    };
  kp.prototype.getArgGeometry = function (t) {
      return this._arg[t].getGeometry()
    },
    kp.prototype.setComputationPrecision = function (t) {
      this._resultPrecisionModel = t,
        this._li.setPrecisionModel(this._resultPrecisionModel)
    },
    kp.prototype.interfaces_ = function () {
      return []
    },
    kp.prototype.getClass = function () {
      return kp
    };
  var zp = function () {};
  zp.prototype.interfaces_ = function () {
      return []
    },
    zp.prototype.getClass = function () {
      return zp
    },
    zp.map = function () {
      if (arguments[0] instanceof Cu && Va(arguments[1], zp.MapOp)) {
        for (var t = arguments[0], e = arguments[1], n = new ku, r = 0; r < t.getNumGeometries(); r++) {
          var i = e.map(t.getGeometryN(r));
          null !== i && n.add(i)
        }
        return t.getFactory().buildGeometry(n)
      }
      if (Va(arguments[0], Fu) && Va(arguments[1], zp.MapOp)) {
        for (var o = arguments[0], s = arguments[1], a = new ku, u = o.iterator(); u.hasNext();) {
          var c = u.next(),
            h = s.map(c);
          null !== h && a.add(h)
        }
        return a
      }
    },
    zp.MapOp = function () {};
  var jp = function (n) {
    function o() {
      var t = arguments[0],
        e = arguments[1];
      n.call(this, t, e),
        this._ptLocator = new zl,
        this._geomFact = null,
        this._resultGeom = null,
        this._graph = null,
        this._edgeList = new cl,
        this._resultPolyList = new ku,
        this._resultLineList = new ku,
        this._resultPointList = new ku,
        this._graph = new ah(new al),
        this._geomFact = t.getFactory()
    }
    return n && (o.__proto__ = n),
      ((o.prototype = Object.create(n && n.prototype)).constructor = o).prototype.insertUniqueEdge = function (t) {
        var e = this._edgeList.findEqualEdge(t);
        if (null !== e) {
          var n = e.getLabel(),
            r = t.getLabel();
          e.isPointwiseEqual(t) || (r = new Jc(t.getLabel())).flip();
          var i = e.getDepth();
          i.isNull() && i.add(n),
            i.add(r),
            n.merge(r)
        } else
          this._edgeList.add(t)
      },
      o.prototype.getGraph = function () {
        return this._graph
      },
      o.prototype.cancelDuplicateResultEdges = function () {
        for (var t = this._graph.getEdgeEnds().iterator(); t.hasNext();) {
          var e = t.next(),
            n = e.getSym();
          e.isInResult() && n.isInResult() && (e.setInResult(!1),
            n.setInResult(!1))
        }
      },
      o.prototype.isCoveredByLA = function (t) {
        return !!this.isCovered(t, this._resultLineList) || !!this.isCovered(t, this._resultPolyList)
      },
      o.prototype.computeGeometry = function (t, e, n, r) {
        var i = new ku;
        return i.addAll(t),
          i.addAll(e),
          i.addAll(n),
          i.isEmpty() ? o.createEmptyResult(r, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(i)
      },
      o.prototype.mergeSymLabels = function () {
        for (var t = this._graph.getNodes().iterator(); t.hasNext();)
          t.next().getEdges().mergeSymLabels()
      },
      o.prototype.isCovered = function (t, e) {
        for (var n = e.iterator(); n.hasNext();) {
          var r = n.next();
          if (this._ptLocator.locate(t, r) !== Ua.EXTERIOR)
            return !0
        }
        return !1
      },
      o.prototype.replaceCollapsedEdges = function () {
        for (var t = new ku, e = this._edgeList.iterator(); e.hasNext();) {
          var n = e.next();
          n.isCollapsed() && (e.remove(),
            t.add(n.getCollapsedEdge()))
        }
        this._edgeList.addAll(t)
      },
      o.prototype.updateNodeLabelling = function () {
        for (var t = this._graph.getNodes().iterator(); t.hasNext();) {
          var e = t.next(),
            n = e.getEdges().getLabel();
          e.getLabel().merge(n)
        }
      },
      o.prototype.getResultGeometry = function (t) {
        return this.computeOverlay(t),
          this._resultGeom
      },
      o.prototype.insertUniqueEdges = function (t) {
        for (var e = t.iterator(); e.hasNext();) {
          var n = e.next();
          this.insertUniqueEdge(n)
        }
      },
      o.prototype.computeOverlay = function (t) {
        this.copyPoints(0),
          this.copyPoints(1),
          this._arg[0].computeSelfNodes(this._li, !1),
          this._arg[1].computeSelfNodes(this._li, !1),
          this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
        var e = new ku;
        this._arg[0].computeSplitEdges(e),
          this._arg[1].computeSplitEdges(e),
          this.insertUniqueEdges(e),
          this.computeLabelsFromDepths(),
          this.replaceCollapsedEdges(),
          sp.checkValid(this._edgeList.getEdges()),
          this._graph.addEdges(this._edgeList.getEdges()),
          this.computeLabelling(),
          this.labelIncompleteNodes(),
          this.findResultAreaEdges(t),
          this.cancelDuplicateResultEdges();
        var n = new uh(this._geomFact);
        n.add(this._graph),
          this._resultPolyList = n.getPolygons();
        var r = new up(this, this._geomFact, this._ptLocator);
        this._resultLineList = r.build(t);
        var i = new cp(this, this._geomFact, this._ptLocator);
        this._resultPointList = i.build(t),
          this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, t)
      },
      o.prototype.labelIncompleteNode = function (t, e) {
        var n = this._ptLocator.locate(t.getCoordinate(), this._arg[e].getGeometry());
        t.getLabel().setLocation(e, n)
      },
      o.prototype.copyPoints = function (t) {
        for (var e = this._arg[t].getNodeIterator(); e.hasNext();) {
          var n = e.next();
          this._graph.addNode(n.getCoordinate()).setLabel(t, n.getLabel().getLocation(t))
        }
      },
      o.prototype.findResultAreaEdges = function (t) {
        for (var e = this._graph.getEdgeEnds().iterator(); e.hasNext();) {
          var n = e.next(),
            r = n.getLabel();
          r.isArea() && !n.isInteriorAreaEdge() && o.isResultOfOp(r.getLocation(0, jc.RIGHT), r.getLocation(1, jc.RIGHT), t) && n.setInResult(!0)
        }
      },
      o.prototype.computeLabelsFromDepths = function () {
        for (var t = this._edgeList.iterator(); t.hasNext();) {
          var e = t.next(),
            n = e.getLabel(),
            r = e.getDepth();
          if (!r.isNull()) {
            r.normalize();
            for (var i = 0; i < 2; i++)
              n.isNull(i) || !n.isArea() || r.isNull(i) || (0 === r.getDelta(i) ? n.toLine(i) : (_u.isTrue(!r.isNull(i, jc.LEFT), "depth of LEFT side has not been initialized"),
                n.setLocation(i, jc.LEFT, r.getLocation(i, jc.LEFT)),
                _u.isTrue(!r.isNull(i, jc.RIGHT), "depth of RIGHT side has not been initialized"),
                n.setLocation(i, jc.RIGHT, r.getLocation(i, jc.RIGHT))))
          }
        }
      },
      o.prototype.computeLabelling = function () {
        for (var t = this._graph.getNodes().iterator(); t.hasNext();)
          t.next().getEdges().computeLabelling(this._arg);
        this.mergeSymLabels(),
          this.updateNodeLabelling()
      },
      o.prototype.labelIncompleteNodes = function () {
        for (var t = this._graph.getNodes().iterator(); t.hasNext();) {
          var e = t.next(),
            n = e.getLabel();
          e.isIsolated() && (n.isNull(0) ? this.labelIncompleteNode(e, 0) : this.labelIncompleteNode(e, 1)),
            e.getEdges().updateLabelling(n)
        }
      },
      o.prototype.isCoveredByA = function (t) {
        return !!this.isCovered(t, this._resultPolyList)
      },
      o.prototype.interfaces_ = function () {
        return []
      },
      o.prototype.getClass = function () {
        return o
      },
      o
  }(kp);
  jp.overlayOp = function (t, e, n) {
      return new jp(t, e).getResultGeometry(n)
    },
    jp.intersection = function (t, e) {
      if (t.isEmpty() || e.isEmpty())
        return jp.createEmptyResult(jp.INTERSECTION, t, e, t.getFactory());
      if (t.isGeometryCollection()) {
        var n = e;
        return ap.map(t, {
          interfaces_: function () {
            return [zp.MapOp]
          },
          map: function (t) {
            return t.intersection(n)
          }
        })
      }
      return t.checkNotGeometryCollection(t),
        t.checkNotGeometryCollection(e),
        Ep.overlayOp(t, e, jp.INTERSECTION)
    },
    jp.symDifference = function (t, e) {
      if (t.isEmpty() || e.isEmpty()) {
        if (t.isEmpty() && e.isEmpty())
          return jp.createEmptyResult(jp.SYMDIFFERENCE, t, e, t.getFactory());
        if (t.isEmpty())
          return e.copy();
        if (e.isEmpty())
          return t.copy()
      }
      return t.checkNotGeometryCollection(t),
        t.checkNotGeometryCollection(e),
        Ep.overlayOp(t, e, jp.SYMDIFFERENCE)
    },
    jp.resultDimension = function (t, e, n) {
      var r = e.getDimension(),
        i = n.getDimension(),
        o = -1;
      switch (t) {
        case jp.INTERSECTION:
          o = Math.min(r, i);
          break;
        case jp.UNION:
          o = Math.max(r, i);
          break;
        case jp.DIFFERENCE:
          o = r;
          break;
        case jp.SYMDIFFERENCE:
          o = Math.max(r, i)
      }
      return o
    },
    jp.createEmptyResult = function (t, e, n, r) {
      var i = null;
      switch (jp.resultDimension(t, e, n)) {
        case -1:
          i = r.createGeometryCollection(new Array(0).fill(null));
          break;
        case 0:
          i = r.createPoint();
          break;
        case 1:
          i = r.createLineString();
          break;
        case 2:
          i = r.createPolygon()
      }
      return i
    },
    jp.difference = function (t, e) {
      return t.isEmpty() ? jp.createEmptyResult(jp.DIFFERENCE, t, e, t.getFactory()) : e.isEmpty() ? t.copy() : (t.checkNotGeometryCollection(t),
        t.checkNotGeometryCollection(e),
        Ep.overlayOp(t, e, jp.DIFFERENCE))
    },
    jp.isResultOfOp = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = t.getLocation(0),
          r = t.getLocation(1);
        return jp.isResultOfOp(n, r, e)
      }
      if (3 === arguments.length) {
        var i = arguments[0],
          o = arguments[1],
          s = arguments[2];
        switch (i === Ua.BOUNDARY && (i = Ua.INTERIOR),
          o === Ua.BOUNDARY && (o = Ua.INTERIOR),
          s) {
          case jp.INTERSECTION:
            return i === Ua.INTERIOR && o === Ua.INTERIOR;
          case jp.UNION:
            return i === Ua.INTERIOR || o === Ua.INTERIOR;
          case jp.DIFFERENCE:
            return i === Ua.INTERIOR && o !== Ua.INTERIOR;
          case jp.SYMDIFFERENCE:
            return i === Ua.INTERIOR && o !== Ua.INTERIOR || i !== Ua.INTERIOR && o === Ua.INTERIOR
        }
        return !1
      }
    },
    jp.INTERSECTION = 1,
    jp.UNION = 2,
    jp.DIFFERENCE = 3,
    jp.SYMDIFFERENCE = 4;
  var Xp = function () {
    this._g = null,
      this._boundaryDistanceTolerance = null,
      this._linework = null,
      this._ptLocator = new zl,
      this._seg = new Oh;
    var t = arguments[0],
      e = arguments[1];
    this._g = t,
      this._boundaryDistanceTolerance = e,
      this._linework = this.extractLinework(t)
  };
  Xp.prototype.isWithinToleranceOfBoundary = function (t) {
      for (var e = 0; e < this._linework.getNumGeometries(); e++)
        for (var n = this._linework.getGeometryN(e).getCoordinateSequence(), r = 0; r < n.size() - 1; r++)
          if (n.getCoordinate(r, this._seg.p0),
            n.getCoordinate(r + 1, this._seg.p1),
            this._seg.distance(t) <= this._boundaryDistanceTolerance)
            return !0;
      return !1
    },
    Xp.prototype.getLocation = function (t) {
      return this.isWithinToleranceOfBoundary(t) ? Ua.BOUNDARY : this._ptLocator.locate(t, this._g)
    },
    Xp.prototype.extractLinework = function (t) {
      var e = new Up;
      t.apply(e);
      var n = e.getLinework(),
        r = Ac.toLineStringArray(n);
      return t.getFactory().createMultiLineString(r)
    },
    Xp.prototype.interfaces_ = function () {
      return []
    },
    Xp.prototype.getClass = function () {
      return Xp
    };
  var Up = function () {
    this._linework = null,
      this._linework = new ku
  };
  Up.prototype.getLinework = function () {
      return this._linework
    },
    Up.prototype.filter = function (t) {
      if (t instanceof yc) {
        var e = t;
        this._linework.add(e.getExteriorRing());
        for (var n = 0; n < e.getNumInteriorRing(); n++)
          this._linework.add(e.getInteriorRingN(n))
      }
    },
    Up.prototype.interfaces_ = function () {
      return [rc]
    },
    Up.prototype.getClass = function () {
      return Up
    };
  var Yp = function () {
    this._g = null,
      this._doLeft = !0,
      this._doRight = !0;
    var t = arguments[0];
    this._g = t
  };
  Yp.prototype.extractPoints = function (t, e, n) {
      for (var r = t.getCoordinates(), i = 0; i < r.length - 1; i++)
        this.computeOffsetPoints(r[i], r[i + 1], e, n)
    },
    Yp.prototype.setSidesToGenerate = function (t, e) {
      this._doLeft = t,
        this._doRight = e
    },
    Yp.prototype.getPoints = function (t) {
      for (var e = new ku, n = kl.getLines(this._g).iterator(); n.hasNext();) {
        var r = n.next();
        this.extractPoints(r, t, e)
      }
      return e
    },
    Yp.prototype.computeOffsetPoints = function (t, e, n, r) {
      var i = e.x - t.x,
        o = e.y - t.y,
        s = Math.sqrt(i * i + o * o),
        a = n * i / s,
        u = n * o / s,
        c = (e.x + t.x) / 2,
        h = (e.y + t.y) / 2;
      if (this._doLeft) {
        var l = new ka(c - u, h + a);
        r.add(l)
      }
      if (this._doRight) {
        var p = new ka(c + u, h - a);
        r.add(p)
      }
    },
    Yp.prototype.interfaces_ = function () {
      return []
    },
    Yp.prototype.getClass = function () {
      return Yp
    };
  var Vp = function t() {
      this._geom = null,
        this._locFinder = null,
        this._location = new Array(3).fill(null),
        this._invalidLocation = null,
        this._boundaryDistanceTolerance = t.TOLERANCE,
        this._testCoords = new ku;
      var e = arguments[0],
        n = arguments[1],
        r = arguments[2];
      this._boundaryDistanceTolerance = t.computeBoundaryDistanceTolerance(e, n),
        this._geom = [e, n, r],
        this._locFinder = [new Xp(this._geom[0], this._boundaryDistanceTolerance), new Xp(this._geom[1], this._boundaryDistanceTolerance), new Xp(this._geom[2], this._boundaryDistanceTolerance)]
    },
    Hp = {
      TOLERANCE: {
        configurable: !0
      }
    };
  Vp.prototype.reportResult = function (t, e, n) {
      su.out.println("Overlay result invalid - A:" + Ua.toLocationSymbol(e[0]) + " B:" + Ua.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + Ua.toLocationSymbol(e[2]))
    },
    Vp.prototype.isValid = function (t) {
      return this.addTestPts(this._geom[0]),
        this.addTestPts(this._geom[1]),
        this.checkValid(t)
    },
    Vp.prototype.checkValid = function () {
      if (1 === arguments.length) {
        for (var t = arguments[0], e = 0; e < this._testCoords.size(); e++) {
          var n = this._testCoords.get(e);
          if (!this.checkValid(t, n))
            return this._invalidLocation = n,
              !1
        }
        return !0
      }
      if (2 === arguments.length) {
        var r = arguments[0],
          i = arguments[1];
        return this._location[0] = this._locFinder[0].getLocation(i),
          this._location[1] = this._locFinder[1].getLocation(i),
          this._location[2] = this._locFinder[2].getLocation(i),
          !!Vp.hasLocation(this._location, Ua.BOUNDARY) || this.isValidResult(r, this._location)
      }
    },
    Vp.prototype.addTestPts = function (t) {
      var e = new Yp(t);
      this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance))
    },
    Vp.prototype.isValidResult = function (t, e) {
      var n = jp.isResultOfOp(e[0], e[1], t),
        r = !(n ^ e[2] === Ua.INTERIOR);
      return r || this.reportResult(t, e, n),
        r
    },
    Vp.prototype.getInvalidLocation = function () {
      return this._invalidLocation
    },
    Vp.prototype.interfaces_ = function () {
      return []
    },
    Vp.prototype.getClass = function () {
      return Vp
    },
    Vp.hasLocation = function (t, e) {
      for (var n = 0; n < 3; n++)
        if (t[n] === e)
          return !0;
      return !1
    },
    Vp.computeBoundaryDistanceTolerance = function (t, e) {
      return Math.min(pp.computeSizeBasedSnapTolerance(t), pp.computeSizeBasedSnapTolerance(e))
    },
    Vp.isValid = function (t, e, n, r) {
      return new Vp(t, e, r).isValid(n)
    },
    Hp.TOLERANCE.get = function () {
      return 1e-6
    },
    Object.defineProperties(Vp, Hp);
  var Wp = function t(e) {
    this._geomFactory = null,
      this._skipEmpty = !1,
      this._inputGeoms = null,
      this._geomFactory = t.extractFactory(e),
      this._inputGeoms = e
  };
  Wp.prototype.extractElements = function (t, e) {
      if (null === t)
        return null;
      for (var n = 0; n < t.getNumGeometries(); n++) {
        var r = t.getGeometryN(n);
        this._skipEmpty && r.isEmpty() || e.add(r)
      }
    },
    Wp.prototype.combine = function () {
      for (var t = new ku, e = this._inputGeoms.iterator(); e.hasNext();) {
        var n = e.next();
        this.extractElements(n, t)
      }
      return 0 === t.size() ? null !== this._geomFactory ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(t)
    },
    Wp.prototype.interfaces_ = function () {
      return []
    },
    Wp.prototype.getClass = function () {
      return Wp
    },
    Wp.combine = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return new Wp(t).combine()
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return new Wp(Wp.createList(e, n)).combine()
      }
      if (3 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2];
        return new Wp(Wp.createList(r, i, o)).combine()
      }
    },
    Wp.extractFactory = function (t) {
      return t.isEmpty() ? null : t.iterator().next().getFactory()
    },
    Wp.createList = function () {
      if (2 === arguments.length) {
        var t = arguments[0],
          e = arguments[1],
          n = new ku;
        return n.add(t),
          n.add(e),
          n
      }
      if (3 === arguments.length) {
        var r = arguments[0],
          i = arguments[1],
          o = arguments[2],
          s = new ku;
        return s.add(r),
          s.add(i),
          s.add(o),
          s
      }
    };
  var Jp = function () {
      this._inputPolys = null,
        this._geomFactory = null;
      var t = arguments[0];
      this._inputPolys = t,
        null === this._inputPolys && (this._inputPolys = new ku)
    },
    Zp = {
      STRTREE_NODE_CAPACITY: {
        configurable: !0
      }
    };
  Jp.prototype.reduceToGeometries = function (t) {
      for (var e = new ku, n = t.iterator(); n.hasNext();) {
        var r = n.next(),
          i = null;
        Va(r, Bu) ? i = this.unionTree(r) : r instanceof Cu && (i = r),
          e.add(i)
      }
      return e
    },
    Jp.prototype.extractByEnvelope = function (t, e, n) {
      for (var r = new ku, i = 0; i < e.getNumGeometries(); i++) {
        var o = e.getGeometryN(i);
        o.getEnvelopeInternal().intersects(t) ? r.add(o) : n.add(o)
      }
      return this._geomFactory.buildGeometry(r)
    },
    Jp.prototype.unionOptimized = function (t, e) {
      var n = t.getEnvelopeInternal(),
        r = e.getEnvelopeInternal();
      if (!n.intersects(r))
        return Wp.combine(t, e);
      if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
        return this.unionActual(t, e);
      var i = n.intersection(r);
      return this.unionUsingEnvelopeIntersection(t, e, i)
    },
    Jp.prototype.union = function () {
      if (null === this._inputPolys)
        throw new Error("union() method cannot be called twice");
      if (this._inputPolys.isEmpty())
        return null;
      this._geomFactory = this._inputPolys.iterator().next().getFactory();
      for (var t = new wh(Jp.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext();) {
        var n = e.next();
        t.insert(n.getEnvelopeInternal(), n)
      }
      this._inputPolys = null;
      var r = t.itemsTree();
      return this.unionTree(r)
    },
    Jp.prototype.binaryUnion = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return this.binaryUnion(t, 0, t.size())
      }
      if (3 === arguments.length) {
        var e = arguments[0],
          n = arguments[1],
          r = arguments[2];
        if (r - n <= 1) {
          var i = Jp.getGeometry(e, n);
          return this.unionSafe(i, null)
        }
        if (r - n == 2)
          return this.unionSafe(Jp.getGeometry(e, n), Jp.getGeometry(e, n + 1));
        var o = Math.trunc((r + n) / 2),
          s = this.binaryUnion(e, n, o),
          a = this.binaryUnion(e, o, r);
        return this.unionSafe(s, a)
      }
    },
    Jp.prototype.repeatedUnion = function (t) {
      for (var e = null, n = t.iterator(); n.hasNext();) {
        var r = n.next();
        e = null === e ? r.copy() : e.union(r)
      }
      return e
    },
    Jp.prototype.unionSafe = function (t, e) {
      return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e)
    },
    Jp.prototype.unionActual = function (t, e) {
      return Jp.restrictToPolygons(t.union(e))
    },
    Jp.prototype.unionTree = function (t) {
      var e = this.reduceToGeometries(t);
      return this.binaryUnion(e)
    },
    Jp.prototype.unionUsingEnvelopeIntersection = function (t, e, n) {
      var r = new ku,
        i = this.extractByEnvelope(n, t, r),
        o = this.extractByEnvelope(n, e, r),
        s = this.unionActual(i, o);
      return r.add(s),
        Wp.combine(r)
    },
    Jp.prototype.bufferUnion = function () {
      if (1 === arguments.length) {
        var t = arguments[0];
        return t.get(0).getFactory().buildGeometry(t).buffer(0)
      }
      if (2 === arguments.length) {
        var e = arguments[0],
          n = arguments[1];
        return e.getFactory().createGeometryCollection([e, n]).buffer(0)
      }
    },
    Jp.prototype.interfaces_ = function () {
      return []
    },
    Jp.prototype.getClass = function () {
      return Jp
    },
    Jp.restrictToPolygons = function (t) {
      if (Va(t, dc))
        return t;
      var e = Bl.getPolygons(t);
      return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon(Ac.toPolygonArray(e))
    },
    Jp.getGeometry = function (t, e) {
      return e >= t.size() ? null : t.get(e)
    },
    Jp.union = function (t) {
      return new Jp(t).union()
    },
    Zp.STRTREE_NODE_CAPACITY.get = function () {
      return 4
    },
    Object.defineProperties(Jp, Zp);
  var Kp = function () {};
  Kp.prototype.interfaces_ = function () {
      return []
    },
    Kp.prototype.getClass = function () {
      return Kp
    },
    Kp.union = function (t, e) {
      if (t.isEmpty() || e.isEmpty()) {
        if (t.isEmpty() && e.isEmpty())
          return jp.createEmptyResult(jp.UNION, t, e, t.getFactory());
        if (t.isEmpty())
          return e.copy();
        if (e.isEmpty())
          return t.copy()
      }
      return t.checkNotGeometryCollection(t),
        t.checkNotGeometryCollection(e),
        Ep.overlayOp(t, e, jp.UNION)
    };
  var Qp = function () {
    return new Ci
  };
  Ci.prototype = {
    constructor: Ci,
    reset: function () {
      this.s = this.t = 0
    },
    add: function (t) {
      Si($p, t, this.t),
        Si(this, $p.s, this.s),
        this.s ? this.t += $p.t : this.s = $p.t
    },
    valueOf: function () {
      return this.s
    }
  };
  var $p = new Ci,
    tf = 1e-6,
    ef = Math.PI,
    nf = ef / 2,
    rf = ef / 4,
    of = 2 * ef,
    sf = 180 / ef,
    af = ef / 180,
    uf = Math.abs,
    cf = Math.atan,
    hf = Math.atan2,
    lf = Math.cos,
    pf = Math.exp,
    ff = Math.log,
    gf = Math.sin,
    df = Math.sqrt,
    yf = Math.tan,
    _f = {
      Feature: function (t, e) {
        Pi(t.geometry, e)
      },
      FeatureCollection: function (t, e) {
        for (var n = t.features, r = -1, i = n.length; ++r < i;)
          Pi(n[r].geometry, e)
      }
    },
    mf = {
      Sphere: function (t, e) {
        e.sphere()
      },
      Point: function (t, e) {
        t = t.coordinates,
          e.point(t[0], t[1], t[2])
      },
      MultiPoint: function (t, e) {
        for (var n = t.coordinates, r = -1, i = n.length; ++r < i;)
          t = n[r],
          e.point(t[0], t[1], t[2])
      },
      LineString: function (t, e) {
        Oi(t.coordinates, e, 0)
      },
      MultiLineString: function (t, e) {
        for (var n = t.coordinates, r = -1, i = n.length; ++r < i;)
          Oi(n[r], e, 0)
      },
      Polygon: function (t, e) {
        Ri(t.coordinates, e)
      },
      MultiPolygon: function (t, e) {
        for (var n = t.coordinates, r = -1, i = n.length; ++r < i;)
          Ri(n[r], e)
      },
      GeometryCollection: function (t, e) {
        for (var n = t.geometries, r = -1, i = n.length; ++r < i;)
          Pi(n[r], e)
      }
    },
    vf = function (t, e) {
      t && _f.hasOwnProperty(t.type) ? _f[t.type](t, e) : Pi(t, e)
    },
    xf = (Qp(),
      Qp(),
      Qp(),
      function (n, r) {
        function t(t, e) {
          return t = n(t, e),
            r(t[0], t[1])
        }
        return n.invert && r.invert && (t.invert = function (t, e) {
            return (t = r.invert(t, e)) && n.invert(t[0], t[1])
          }),
          t
      }
    );
  ki.invert = ki;
  var Ef, wf, bf = function () {
      var n, e = [];
      return {
        point: function (t, e) {
          n.push([t, e])
        },
        lineStart: function () {
          e.push(n = [])
        },
        lineEnd: Li,
        rejoin: function () {
          1 < e.length && e.push(e.pop().concat(e.shift()))
        },
        result: function () {
          var t = e;
          return e = [],
            n = null,
            t
        }
      }
    },
    If = function (t, e, n, r, i, o) {
      var s, a = t[0],
        u = t[1],
        c = 0,
        h = 1,
        l = e[0] - a,
        p = e[1] - u;
      if (s = n - a,
        l || !(0 < s)) {
        if (s /= l,
          l < 0) {
          if (s < c)
            return;
          s < h && (h = s)
        } else if (0 < l) {
          if (h < s)
            return;
          c < s && (c = s)
        }
        if (s = i - a,
          l || !(s < 0)) {
          if (s /= l,
            l < 0) {
            if (h < s)
              return;
            c < s && (c = s)
          } else if (0 < l) {
            if (s < c)
              return;
            s < h && (h = s)
          }
          if (s = r - u,
            p || !(0 < s)) {
            if (s /= p,
              p < 0) {
              if (s < c)
                return;
              s < h && (h = s)
            } else if (0 < p) {
              if (h < s)
                return;
              c < s && (c = s)
            }
            if (s = o - u,
              p || !(s < 0)) {
              if (s /= p,
                p < 0) {
                if (h < s)
                  return;
                c < s && (c = s)
              } else if (0 < p) {
                if (s < c)
                  return;
                s < h && (h = s)
              }
              return 0 < c && (t[0] = a + c * l,
                  t[1] = u + c * p),
                h < 1 && (e[0] = a + h * l,
                  e[1] = u + h * p),
                !0
            }
          }
        }
      }
    },
    Nf = function (t, e) {
      return uf(t[0] - e[0]) < tf && uf(t[1] - e[1]) < tf
    },
    Cf = function (t, e, n, r, o) {
      var s, i, a = [],
        u = [];
      if (t.forEach(function (t) {
          if (!((e = t.length - 1) <= 0)) {
            var e, n, r = t[0],
              i = t[e];
            if (Nf(r, i)) {
              for (o.lineStart(),
                s = 0; s < e; ++s)
                o.point((r = t[s])[0], r[1]);
              o.lineEnd()
            } else
              a.push(n = new Vi(r, t, null, !0)),
              u.push(n.o = new Vi(r, null, n, !1)),
              a.push(n = new Vi(i, t, null, !1)),
              u.push(n.o = new Vi(i, null, n, !0))
          }
        }),
        a.length) {
        for (u.sort(e),
          Hi(a),
          Hi(u),
          s = 0,
          i = u.length; s < i; ++s)
          u[s].e = n = !n;
        for (var c, h, l = a[0];;) {
          for (var p = l, f = !0; p.v;)
            if ((p = p.n) === l)
              return;
          c = p.z,
            o.lineStart();
          do {
            if (p.v = p.o.v = !0,
              p.e) {
              if (f)
                for (s = 0,
                  i = c.length; s < i; ++s)
                  o.point((h = c[s])[0], h[1]);
              else
                r(p.x, p.n.x, 1, o);
              p = p.n
            } else {
              if (f)
                for (c = p.p.z,
                  s = c.length - 1; 0 <= s; --s)
                  o.point((h = c[s])[0], h[1]);
              else
                r(p.x, p.p.x, -1, o);
              p = p.p
            }
            c = (p = p.o).z,
              f = !f
          } while (!p.v);
          o.lineEnd()
        }
      }
    },
    Sf = function (t, e) {
      return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
    },
    Mf = (1 === (Ef = Sf).length && (wf = Ef,
        Ef = function (t, e) {
          return Sf(wf(t), e)
        }
      ),
      function (t) {
        for (var e, n, r, i = t.length, o = -1, s = 0; ++o < i;)
          s += t[o].length;
        for (n = new Array(s); 0 <= --i;)
          for (e = (r = t[i]).length; 0 <= --e;)
            n[--s] = r[e];
        return n
      }
    ),
    Lf = 1e9,
    Pf = -Lf,
    Of = Qp(),
    Rf = (Qp(),
      function (t) {
        return t
      }
    ),
    Tf = (Qp(),
      Qp(),
      1 / 0),
    Af = Tf,
    Df = -Tf,
    Ff = Df,
    qf = {
      point: function (t, e) {
        t < Tf && (Tf = t),
          Df < t && (Df = t),
          e < Af && (Af = e),
          Ff < e && (Ff = e)
      },
      lineStart: Li,
      lineEnd: Li,
      polygonStart: Li,
      polygonEnd: Li,
      result: function () {
        var t = [
          [Tf, Af],
          [Df, Ff]
        ];
        return Df = Ff = -(Af = Tf = 1 / 0),
          t
      }
    },
    Gf = (Qp(),
      function (m, v, x, E) {
        return function (r, a) {
          function e(t, e) {
            var n = r(t, e);
            m(t = n[0], e = n[1]) && a.point(t, e)
          }

          function t(t, e) {
            var n = r(t, e);
            p.point(n[0], n[1])
          }

          function n() {
            _.point = t,
              p.lineStart()
          }

          function i() {
            _.point = e,
              p.lineEnd()
          }

          function u(t, e) {
            l.push([t, e]);
            var n = r(t, e);
            d.point(n[0], n[1])
          }

          function o() {
            d.lineStart(),
              l = []
          }

          function s() {
            u(l[0][0], l[0][1]),
              d.lineEnd();
            var t, e, n, r, i = d.clean(),
              o = g.result(),
              s = o.length;
            if (l.pop(),
              c.push(l),
              l = null,
              s)
              if (1 & i) {
                if (0 < (e = (n = o[0]).length - 1)) {
                  for (y || (a.polygonStart(),
                      y = !0),
                    a.lineStart(),
                    t = 0; t < e; ++t)
                    a.point((r = n[t])[0], r[1]);
                  a.lineEnd()
                }
              } else
                1 < s && 2 & i && o.push(o.pop().concat(o.shift())),
                h.push(o.filter(Wi))
          }
          var c, h, l, p = v(a),
            f = r.invert(E[0], E[1]),
            g = bf(),
            d = v(g),
            y = !1,
            _ = {
              point: e,
              lineStart: n,
              lineEnd: i,
              polygonStart: function () {
                _.point = u,
                  _.lineStart = o,
                  _.lineEnd = s,
                  h = [],
                  c = []
              },
              polygonEnd: function () {
                _.point = e,
                  _.lineStart = n,
                  _.lineEnd = i,
                  h = Mf(h);
                var t = function (t, e) {
                  var n = e[0],
                    r = e[1],
                    i = [gf(n), -lf(n), 0],
                    o = 0,
                    s = 0;
                  Of.reset();
                  for (var a = 0, u = t.length; a < u; ++a)
                    if (h = (c = t[a]).length)
                      for (var c, h, l = c[h - 1], p = l[0], f = l[1] / 2 + rf, g = gf(f), d = lf(f), y = 0; y < h; ++y,
                        p = m,
                        g = x,
                        d = E,
                        l = _) {
                        var _ = c[y],
                          m = _[0],
                          v = _[1] / 2 + rf,
                          x = gf(v),
                          E = lf(v),
                          w = m - p,
                          b = 0 <= w ? 1 : -1,
                          I = b * w,
                          N = ef < I,
                          C = g * x;
                        if (Of.add(hf(C * b * gf(I), d * E + C * lf(I))),
                          o += N ? w + b * of : w,
                          N ^ n <= p ^ n <= m) {
                          var S = Fi(Ai(l), Ai(_));
                          Bi(S);
                          var M = Fi(i, S);
                          Bi(M);
                          var L = (N ^ 0 <= w ? -1 : 1) * Mi(M[2]);
                          (L < r || r === L && (S[0] || S[1])) && (s += N ^ 0 <= w ? 1 : -1)
                        }
                      }
                  return (o < -tf || o < tf && Of < -tf) ^ 1 & s
                }(c, f);
                h.length ? (y || (a.polygonStart(),
                      y = !0),
                    Cf(h, Ji, t, x, a)) : t && (y || (a.polygonStart(),
                      y = !0),
                    a.lineStart(),
                    x(null, null, 1, a),
                    a.lineEnd()),
                  y && (a.polygonEnd(),
                    y = !1),
                  h = c = null
              },
              sphere: function () {
                a.polygonStart(),
                  a.lineStart(),
                  x(null, null, 1, a),
                  a.lineEnd(),
                  a.polygonEnd()
              }
            };
          return _
        }
      }
    ),
    Bf = Gf(function () {
      return !0
    }, function (l) {
      var p, f = NaN,
        g = NaN,
        d = NaN;
      return {
        lineStart: function () {
          l.lineStart(),
            p = 1
        },
        point: function (t, e) {
          var n, r, i, o, s, a, u, c = 0 < t ? ef : -ef,
            h = uf(t - f);
          uf(h - ef) < tf ? (l.point(f, g = 0 < (g + e) / 2 ? nf : -nf),
              l.point(d, g),
              l.lineEnd(),
              l.lineStart(),
              l.point(c, g),
              l.point(t, g),
              p = 0) : d !== c && ef <= h && (uf(f - d) < tf && (f -= d * tf),
              uf(t - c) < tf && (t -= c * tf),
              r = g,
              o = e,
              u = gf((n = f) - (i = t)),
              g = uf(u) > tf ? cf((gf(r) * (a = lf(o)) * gf(i) - gf(o) * (s = lf(r)) * gf(n)) / (s * a * u)) : (r + o) / 2,
              l.point(d, g),
              l.lineEnd(),
              l.lineStart(),
              l.point(c, g),
              p = 0),
            l.point(f = t, g = e),
            d = c
        },
        lineEnd: function () {
          l.lineEnd(),
            f = g = NaN
        },
        clean: function () {
          return 2 - p
        }
      }
    }, function (t, e, n, r) {
      var i;
      if (null == t)
        i = n * nf,
        r.point(-ef, i),
        r.point(0, i),
        r.point(ef, i),
        r.point(ef, 0),
        r.point(ef, -i),
        r.point(0, -i),
        r.point(-ef, -i),
        r.point(-ef, 0),
        r.point(-ef, i);
      else if (uf(t[0] - e[0]) > tf) {
        var o = t[0] < e[0] ? ef : -ef;
        i = n * o / 2,
          r.point(-o, i),
          r.point(0, i),
          r.point(o, i)
      } else
        r.point(e[0], e[1])
    }, [-ef, -nf]);
  Ki.prototype = {
    constructor: Ki,
    point: function (t, e) {
      this.stream.point(t, e)
    },
    sphere: function () {
      this.stream.sphere()
    },
    lineStart: function () {
      this.stream.lineStart()
    },
    lineEnd: function () {
      this.stream.lineEnd()
    },
    polygonStart: function () {
      this.stream.polygonStart()
    },
    polygonEnd: function () {
      this.stream.polygonEnd()
    }
  };
  var kf = lf(30 * af),
    zf = function (t, e) {
      return +e ? function (L, P) {
        function O(t, e, n, r, i, o, s, a, u, c, h, l, p, f) {
          var g = s - t,
            d = a - e,
            y = g * g + d * d;
          if (4 * P < y && p--) {
            var _ = r + c,
              m = i + h,
              v = o + l,
              x = df(_ * _ + m * m + v * v),
              E = Mi(v /= x),
              w = uf(uf(v) - 1) < tf || uf(n - u) < tf ? (n + u) / 2 : hf(m, _),
              b = L(w, E),
              I = b[0],
              N = b[1],
              C = I - t,
              S = N - e,
              M = d * C - g * S;
            (P < M * M / y || .3 < uf((g * C + d * S) / y - .5) || r * c + i * h + o * l < kf) && (O(t, e, n, r, i, o, I, N, w, _ /= x, m /= x, v, p, f),
              f.point(I, N),
              O(I, N, w, _, m, v, s, a, u, c, h, l, p, f))
          }
        }
        return function (i) {
          function t(t, e) {
            t = L(t, e),
              i.point(t[0], t[1])
          }

          function e() {
            d = NaN,
              x.point = n,
              i.lineStart()
          }

          function n(t, e) {
            var n = Ai([t, e]),
              r = L(t, e);
            O(d, y, g, _, m, v, d = r[0], y = r[1], g = t, _ = n[0], m = n[1], v = n[2], 16, i),
              i.point(d, y)
          }

          function r() {
            x.point = t,
              i.lineEnd()
          }

          function o() {
            e(),
              x.point = s,
              x.lineEnd = a
          }

          function s(t, e) {
            n(u = t, e),
              c = d,
              h = y,
              l = _,
              p = m,
              f = v,
              x.point = n
          }

          function a() {
            O(d, y, g, _, m, v, c, h, u, l, p, f, 16, i),
              (x.lineEnd = r)()
          }
          var u, c, h, l, p, f, g, d, y, _, m, v, x = {
            point: t,
            lineStart: e,
            lineEnd: r,
            polygonStart: function () {
              i.polygonStart(),
                x.lineStart = o
            },
            polygonEnd: function () {
              i.polygonEnd(),
                x.lineStart = e
            }
          };
          return x
        }
      }(t, e) : (n = t,
        Zi({
          point: function (t, e) {
            t = n(t, e),
              this.stream.point(t[0], t[1])
          }
        }));
      var n
    },
    jf = Zi({
      point: function (t, e) {
        this.stream.point(t * af, e * af)
      }
    });
  to.invert = function (t, e) {
      return [t, 2 * cf(pf(e)) - nf]
    },
    eo.invert = function (t, e) {
      return [-e, 2 * cf(pf(t)) - nf]
    };
  var Xf = function () {
    var t = function (n) {
        function e() {
          var t = ef * u(),
            e = s(function (e) {
              function t(t) {
                return (t = e(t[0] * af, t[1] * af))[0] *= sf,
                  t[1] *= sf,
                  t
              }
              return e = zi(e[0] * af, e[1] * af, 2 < e.length ? e[2] * af : 0),
                t.invert = function (t) {
                  return (t = e.invert(t[0] * af, t[1] * af))[0] *= sf,
                    t[1] *= sf,
                    t
                },
                t
            }(s.rotate()).invert([0, 0]));
          return h(null == l ? [
            [e[0] - t, e[1] - t],
            [e[0] + t, e[1] + t]
          ] : n === to ? [
            [Math.max(e[0] - t, l), r],
            [Math.min(e[0] + t, i), o]
          ] : [
            [l, Math.max(e[1] - t, r)],
            [i, Math.min(e[1] + t, o)]
          ])
        }
        var r, i, o, s = $i(n),
          a = s.center,
          u = s.scale,
          c = s.translate,
          h = s.clipExtent,
          l = null;
        return s.scale = function (t) {
            return arguments.length ? (u(t),
              e()) : u()
          },
          s.translate = function (t) {
            return arguments.length ? (c(t),
              e()) : c()
          },
          s.center = function (t) {
            return arguments.length ? (a(t),
              e()) : a()
          },
          s.clipExtent = function (t) {
            return arguments.length ? (null == t ? l = r = i = o = null : (l = +t[0][0],
                r = +t[0][1],
                i = +t[1][0],
                o = +t[1][1]),
              e()) : null == l ? null : [
              [l, r],
              [i, o]
            ]
          },
          e()
      }(eo),
      e = t.center,
      n = t.rotate;
    return t.center = function (t) {
        return arguments.length ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
      },
      t.rotate = function (t) {
        return arguments.length ? n([t[0], t[1], 2 < t.length ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
      },
      n([0, 0, 90]).scale(159.155)
  };
  t.projection = Wo,
    t.random = Oa,
    t.clusters = Ra,
    t.helpers = yo,
    t.invariant = mo,
    t.meta = _o,
    t.isolines = function (t, e, n) {
      if (!Y(n = n || {}))
        throw new Error("options is invalid");
      var r = n.zProperty || "elevation",
        i = n.commonProperties || {},
        o = n.breaksProperties || [];
      if (W(t, "Point", "Input must contain Points"),
        !e)
        throw new Error("breaks is required");
      if (!Array.isArray(e))
        throw new Error("breaks must be an Array");
      if (!Y(i))
        throw new Error("commonProperties must be an Object");
      if (!Array.isArray(o))
        throw new Error("breaksProperties must be an Array");
      var s, a, u, c, h, l, p, f, g, d, y, _, m = function (e, t) {
        if (!Y(t = t || {}))
          throw new Error("options is invalid");
        var n = t.zProperty || "elevation",
          r = t.flip,
          i = t.flags;
        W(e, "Point", "input must contain Points");
        for (var o = function (t, n) {
            var r = {};
            return I(e, function (t) {
                var e = D(t)[1];
                r[e] || (r[e] = []),
                  r[e].push(t)
              }),
              Object.keys(r).map(function (t) {
                return r[t].sort(function (t, e) {
                  return D(t)[0] - D(e)[0]
                })
              }).sort(function (t, e) {
                return n ? D(t[0])[1] - D(e[0])[1] : D(e[0])[1] - D(t[0])[1]
              })
          }(0, r), s = [], a = 0; a < o.length; a++) {
          for (var u = o[a], c = [], h = 0; h < u.length; h++) {
            var l = u[h];
            l.properties[n] ? c.push(l.properties[n]) : c.push(0),
              !0 === i && (l.properties.matrixPosition = [a, h])
          }
          s.push(c)
        }
        return s
      }(t, {
        zProperty: r,
        flip: !0
      });
      return X((s = function (t, e, n, r, i) {
          for (var o = [], s = 1; s < e.length; s++) {
            var a = +e[s],
              u = Object.assign({}, r, i[s]),
              c = v(Q(t, u[n] = a), u);
            o.push(c)
          }
          return o
        }(m, e, r, i, o),
        a = m,
        u = V(t),
        c = u[2] - u[0],
        h = u[3] - u[1],
        l = u[0],
        p = u[1],
        f = a[0].length - 1,
        g = a.length - 1,
        d = c / f,
        y = h / g,
        _ = function (t) {
          t[0] = t[0] * d + l,
            t[1] = t[1] * y + p
        },
        s.forEach(function (t) {
          w(t, _)
        }),
        s))
    },
    t.convex = St,
    t.pointsWithinPolygon = Pt,
    t.concave = function (t, a) {
      if (!Y(a = a || {}))
        throw new Error("options is invalid");
      if (!t)
        throw new Error("points is required");
      var u = a.maxEdge || 1 / 0;
      if (!U(u))
        throw new Error("maxEdge is invalid");
      var n, r, e = Ot((n = [],
        r = {},
        I(t, function (t) {
          if (t.geometry) {
            var e = t.geometry.coordinates.join("-");
            r.hasOwnProperty(e) || (n.push(t),
              r[e] = !0)
          }
        }),
        X(n)));
      if (e.features = e.features.filter(function (t) {
          var e = t.geometry.coordinates[0][0],
            n = t.geometry.coordinates[0][1],
            r = t.geometry.coordinates[0][2],
            i = Dt(e, n, a),
            o = Dt(n, r, a),
            s = Dt(e, r, a);
          return i <= u && o <= u && s <= u
        }),
        e.features.length < 1)
        return null;
      var i = Vt(e, a);
      return 1 === i.coordinates.length && (i.coordinates = i.coordinates[0],
          i.type = "Polygon"),
        B(i)
    },
    t.collect = function (t, e, n, r) {
      var i = wo(6),
        o = e.features.map(function (t) {
          return {
            minX: t.geometry.coordinates[0],
            minY: t.geometry.coordinates[1],
            maxX: t.geometry.coordinates[0],
            maxY: t.geometry.coordinates[1],
            property: t.properties[n]
          }
        });
      return i.load(o),
        t.features.forEach(function (e) {
          e.properties || (e.properties = {});
          var t = V(e),
            n = [];
          i.search({
              minX: t[0],
              minY: t[1],
              maxX: t[2],
              maxY: t[3]
            }).forEach(function (t) {
              Mt([t.minX, t.minY], e) && n.push(t.property)
            }),
            e.properties[r] = n
        }),
        t
    },
    t.flip = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var n = e.mutate;
      if (!t)
        throw new Error("geojson is required");
      return !1 !== n && void 0 !== n || (t = Ft(t)),
        w(t, function (t) {
          var e = t[0],
            n = t[1];
          t[0] = n,
            t[1] = e
        }),
        t
    },
    t.simplify = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var n = void 0 !== e.tolerance ? e.tolerance : 1,
        r = e.highQuality || !1,
        i = e.mutate || !1;
      if (!t)
        throw new Error("geojson is required");
      if (n && n < 0)
        throw new Error("invalid tolerance");
      return !0 !== i && (t = Ft(t)),
        S(t, function (t) {
          ! function (t, e, n) {
            var r = t.type;
            if ("Point" === r || "MultiPoint" === r)
              return;
            Ht(t, !0);
            var i = t.coordinates;
            switch (r) {
              case "LineString":
                t.coordinates = Kt(i, e, n);
                break;
              case "MultiLineString":
                t.coordinates = i.map(function (t) {
                  return Kt(t, e, n)
                });
                break;
              case "Polygon":
                t.coordinates = Qt(i, e, n);
                break;
              case "MultiPolygon":
                t.coordinates = i.map(function (t) {
                  return Qt(t, e, n)
                })
            }
          }(t, n, r)
        }),
        t
    },
    t.bezierSpline = $t,
    t.tag = function (t, n, r, i) {
      return t = Ft(t),
        n = Ft(n),
        I(t, function (e) {
          e.properties || (e.properties = {}),
            I(n, function (t) {
              void 0 === e.properties[i] && Mt(e, t) && (e.properties[i] = t.properties[r])
            })
        }),
        t
    },
    t.sample = function (t, e) {
      if (!t)
        throw new Error("featurecollection is required");
      if (null == e)
        throw new Error("num is required");
      if ("number" != typeof e)
        throw new Error("num must be a number");
      return X(function (t, e) {
        for (var n, r, i = t.slice(0), o = t.length, s = o - e; o-- > s;)
          n = i[r = Math.floor((o + 1) * Math.random())],
          i[r] = i[o],
          i[o] = n;
        return i.slice(s)
      }(t.features, e))
    },
    t.envelope = ee,
    t.square = ne,
    t.circle = ie,
    t.midpoint = function (t, e) {
      return re(t, Dt(t, e) / 2, oe(t, e))
    },
    t.center = se,
    t.centerOfMass = function t(e, n) {
      switch (K(e)) {
        case "Point":
          return e;
        case "Polygon":
          var r = [];
          w(e, function (t) {
            r.push(t)
          });
          var i, o, s, a, u, c, h, l, p = ae(e, n),
            f = p.geometry.coordinates,
            g = 0,
            d = 0,
            y = 0,
            _ = r.map(function (t) {
              return [t[0] - f[0], t[1] - f[1]]
            });
          for (i = 0; i < r.length - 1; i++)
            a = (o = _[i])[0],
            c = o[1],
            u = (s = _[i + 1])[0],
            y += l = a * (h = s[1]) - u * c,
            g += (a + u) * l,
            d += (c + h) * l;
          if (0 === y)
            return p;
          var m = 1 / (.5 * y * 6);
          return k([f[0] + m * g, f[1] + m * d], n);
        default:
          var v = St(e);
          return v ? t(v, n) : ae(e, n)
      }
    },
    t.centroid = ae,
    t.combine = function (t) {
      function e(t, e, n) {
        n ? r[e].coordinates = r[e].coordinates.concat(t.geometry.coordinates) : r[e].coordinates.push(t.geometry.coordinates),
          r[e].properties.push(t.properties)
      }
      var r = {
          MultiPoint: {
            coordinates: [],
            properties: []
          },
          MultiLineString: {
            coordinates: [],
            properties: []
          },
          MultiPolygon: {
            coordinates: [],
            properties: []
          }
        },
        n = Object.keys(r).reduce(function (t, e) {
          return t[e.replace("Multi", "")] = e,
            t
        }, {});
      return I(t, function (t) {
          t.geometry && (r[t.geometry.type] ? e(t, t.geometry.type, !0) : n[t.geometry.type] && e(t, n[t.geometry.type], !1))
        }),
        X(Object.keys(r).filter(function (t) {
          return r[t].coordinates.length
        }).sort().map(function (t) {
          return B({
            type: t,
            coordinates: r[t].coordinates
          }, {
            collectedProperties: r[t].properties
          })
        }))
    },
    t.distance = Dt,
    t.explode = ue,
    t.bbox = V,
    t.tesselate = function (t) {
      if (!t.geometry || "Polygon" !== t.geometry.type && "MultiPolygon" !== t.geometry.type)
        throw new Error("input must be a Polygon or MultiPolygon");
      var e = {
        type: "FeatureCollection",
        features: []
      };
      return "Polygon" === t.geometry.type ? e.features = Ie(t.geometry.coordinates) : t.geometry.coordinates.forEach(function (t) {
          e.features = e.features.concat(Ie(t))
        }),
        e
    },
    t.bboxPolygon = te,
    t.booleanPointInPolygon = Mt,
    t.nearestPoint = Ne,
    t.nearestPointOnLine = Ve,
    t.nearestPointToLine = function (t, n, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var r = e.units,
        i = e.properties || {};
      if (!t)
        throw new Error("points is required");
      if (!(t = function (t) {
          var e = [];
          switch (t.geometry ? t.geometry.type : t.type) {
            case "GeometryCollection":
              return S(t, function (t) {
                "Point" === t.type && e.push({
                  type: "Feature",
                  properties: {},
                  geometry: t
                })
              }), {
                type: "FeatureCollection",
                features: e
              };
            case "FeatureCollection":
              return t.features = t.features.filter(function (t) {
                  return "Point" === t.geometry.type
                }),
                t;
            default:
              throw new Error("points must be a Point Collection")
          }
        }(t)).features.length)
        throw new Error("points must contain features");
      if (!n)
        throw new Error("line is required");
      if ("LineString" !== K(n))
        throw new Error("line must be a LineString");
      var o = 1 / 0,
        s = null;
      return I(t, function (t) {
          var e = en(t, n, {
            units: r
          });
          e < o && (o = e,
            s = t)
        }),
        s && (s.properties = Object.assign({
          dist: o
        }, s.properties, i)),
        s
    },
    t.planepoint = function (t, e) {
      var n = H(t),
        r = J(e).coordinates[0];
      if (r.length < 4)
        throw new Error("OuterRing of a Polygon must have 4 or more Positions.");
      var i = e.properties || {},
        o = i.a,
        s = i.b,
        a = i.c,
        u = n[0],
        c = n[1],
        h = r[0][0],
        l = r[0][1],
        p = void 0 !== o ? o : r[0][2],
        f = r[1][0],
        g = r[1][1],
        d = void 0 !== s ? s : r[1][2],
        y = r[2][0],
        _ = r[2][1],
        m = void 0 !== a ? a : r[2][2];
      return (m * (u - h) * (c - g) + p * (u - f) * (c - _) + d * (u - y) * (c - l) - d * (u - h) * (c - _) - m * (u - f) * (c - l) - p * (u - y) * (c - g)) / ((u - h) * (c - g) + (u - f) * (c - _) + (u - y) * (c - l) - (u - h) * (c - _) - (u - f) * (c - l) - (u - y) * (c - g))
    },
    t.tin = Ot,
    t.bearing = oe,
    t.destination = re,
    t.kinks = function (t) {
      var e, n, m = {
        type: "FeatureCollection",
        features: []
      };
      if ("LineString" === (n = "Feature" === t.type ? t.geometry : t).type)
        e = [n.coordinates];
      else if ("MultiLineString" === n.type)
        e = n.coordinates;
      else if ("MultiPolygon" === n.type)
        e = [].concat.apply([], n.coordinates);
      else {
        if ("Polygon" !== n.type)
          throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
        e = n.coordinates
      }
      return e.forEach(function (_) {
          e.forEach(function (t) {
            for (var e = 0; e < _.length - 1; e++)
              for (var n = e; n < t.length - 1; n++) {
                if (_ === t) {
                  if (1 === Math.abs(e - n))
                    continue;
                  if (0 === e && n === _.length - 2 && _[e][0] === _[_.length - 1][0] && _[e][1] === _[_.length - 1][1])
                    continue
                }
                var r = (i = _[e][0],
                  o = _[e][1],
                  s = _[e + 1][0],
                  a = _[e + 1][1],
                  u = t[n][0],
                  c = t[n][1],
                  h = t[n + 1][0],
                  l = t[n + 1][1],
                  y = d = g = f = p = void 0,
                  y = {
                    x: null,
                    y: null,
                    onLine1: !1,
                    onLine2: !1
                  },
                  0 == (p = (l - c) * (s - i) - (h - u) * (a - o)) ? null !== y.x && null !== y.y && y : (d = (s - i) * (f = o - c) - (a - o) * (g = i - u),
                    f = ((h - u) * f - (l - c) * g) / p,
                    g = d / p,
                    y.x = i + f * (s - i),
                    y.y = o + f * (a - o),
                    0 <= f && f <= 1 && (y.onLine1 = !0),
                    0 <= g && g <= 1 && (y.onLine2 = !0),
                    !(!y.onLine1 || !y.onLine2) && [y.x, y.y]));
                r && m.features.push(k([r[0], r[1]]))
              }
            var i, o, s, a, u, c, h, l, p, f, g, d, y
          })
        }),
        m
    },
    t.pointOnFeature = rn,
    t.area = sn,
    t.along = function (t, e, n) {
      if (!Y(n = n || {}))
        throw new Error("options is invalid");
      var r;
      if ("Feature" === t.type)
        r = t.geometry.coordinates;
      else {
        if ("LineString" !== t.type)
          throw new Error("input must be a LineString Feature or Geometry");
        r = t.coordinates
      }
      if (!U(e))
        throw new Error("distance must be a number");
      for (var i = 0, o = 0; o < r.length && !(i <= e && o === r.length - 1); o++) {
        if (e <= i) {
          var s = e - i;
          if (s) {
            var a = oe(r[o], r[o - 1]) - 180;
            return re(r[o], s, a, n)
          }
          return k(r[o])
        }
        i += Dt(r[o], r[o + 1], n)
      }
      return k(r[r.length - 1])
    },
    t.length = hn,
    t.lineSlice = function (t, e, n) {
      var r = D(n);
      if ("LineString" !== K(n))
        throw new Error("line must be a LineString");
      for (var i, o = Ve(n, t), s = Ve(n, e), a = [(i = o.properties.index <= s.properties.index ? [o, s] : [s, o])[0].geometry.coordinates], u = i[0].properties.index + 1; u < i[1].properties.index + 1; u++)
        a.push(r[u]);
      return a.push(i[1].geometry.coordinates),
        j(a, n.properties)
    },
    t.lineSliceAlong = ln,
    t.pointGrid = yn,
    t.truncate = _n,
    t.flatten = function (t) {
      if (!t)
        throw new Error("geojson is required");
      var e = [];
      return L(t, function (t) {
          e.push(t)
        }),
        X(e)
    },
    t.lineIntersect = Ue,
    t.lineChunk = function (t, e, n) {
      if (!Y(n = n || {}))
        throw new Error("options is invalid");
      var r = n.units,
        i = n.reverse;
      if (!t)
        throw new Error("geojson is required");
      if (e <= 0)
        throw new Error("segmentLength must be greater than 0");
      var o = [];
      return L(t, function (t) {
          i && (t.geometry.coordinates = t.geometry.coordinates.reverse()),
            function (t, e, n, r) {
              var i = hn(t, {
                units: n
              });
              if (i <= e)
                return r(t);
              var o = i / e;
              Number.isInteger(o) || (o = Math.floor(o) + 1);
              for (var s = 0; s < o; s++) {
                r(ln(t, e * s, e * (s + 1), {
                  units: n
                }))
              }
            }(t, e, r, function (t) {
              o.push(t)
            })
        }),
        X(o)
    },
    t.unkinkPolygon = function (t) {
      var n = [];
      return L(t, function (e) {
          "Polygon" === e.geometry.type && I(Zo(e), function (t) {
            n.push(z(t.geometry.coordinates, e.properties))
          })
        }),
        X(n)
    },
    t.greatCircle = function (t, e, n) {
      if ("object" != typeof (n = n || {}))
        throw new Error("options is invalid");
      var r = n.properties,
        i = n.npoints,
        o = n.offset;
      return t = H(t),
        e = H(e),
        r = r || {},
        i = i || 100,
        o = o || 10,
        new is({
          x: t[0],
          y: t[1]
        }, {
          x: e[0],
          y: e[1]
        }, r).Arc(i, {
          offset: o
        }).json()
    },
    t.lineSegment = Xe,
    t.lineSplit = function (t, e) {
      if (!t)
        throw new Error("line is required");
      if (!e)
        throw new Error("splitter is required");
      var n = K(t),
        r = K(e);
      if ("LineString" !== n)
        throw new Error("line must be LineString");
      if ("FeatureCollection" === r)
        throw new Error("splitter cannot be a FeatureCollection");
      if ("GeometryCollection" === r)
        throw new Error("splitter cannot be a GeometryCollection");
      var i = _n(e, {
        precision: 7
      });
      switch (r) {
        case "Point":
          return wn(t, i);
        case "MultiPoint":
          return En(t, i);
        case "LineString":
        case "MultiLineString":
        case "Polygon":
        case "MultiPolygon":
          return En(t, Ue(t, i))
      }
    },
    t.lineArc = Nn,
    t.polygonToLine = Sn,
    t.lineToPolygon = Ln,
    t.bboxClip = function (t, e) {
      var n, r = (n = t).geometry ? n.geometry.type : n.type,
        i = D(t),
        o = t.properties;
      switch (r) {
        case "LineString":
        case "MultiLineString":
          var s = [];
          return "LineString" === r && (i = [i]),
            i.forEach(function (t) {
              os(t, e, s)
            }),
            1 === s.length ? j(s[0], o) : v(s, o);
        case "Polygon":
          return z(Dn(i, e), o);
        case "MultiPolygon":
          return x(i.map(function (t) {
            return Dn(t, e)
          }), o);
        default:
          throw new Error("geometry " + r + " not supported")
      }
    },
    t.lineOverlap = kn,
    t.sector = function (t, e, n, r, i) {
      if (!Y(i = i || {}))
        throw new Error("options is invalid");
      if (!t)
        throw new Error("center is required");
      if (null == n)
        throw new Error("bearing1 is required");
      if (null == r)
        throw new Error("bearing2 is required");
      if (!e)
        throw new Error("radius is required");
      if ("object" != typeof i)
        throw new Error("options must be an object");
      if (jn(n) === jn(r))
        return ie(t, e, i);
      var o = D(t),
        s = [
          [o]
        ];
      return w(Nn(t, e, n, r, i), function (t) {
          s[0].push(t)
        }),
        s[0].push(o),
        z(s)
    },
    t.rhumbBearing = He,
    t.rhumbDistance = Je,
    t.rhumbDestination = Xn,
    t.polygonTangents = function (t, e) {
      var n, r, i, o = D(t),
        s = D(e);
      switch (K(e)) {
        case "Polygon":
          n = s[0][0],
            r = s[0][0],
            i = Yn(s[0][0], s[0][s[0].length - 1], o);
          var a = Un(s[0], o, i, void 0, n, r);
          n = a[0],
            r = a[1];
          break;
        case "MultiPolygon":
          n = s[0][0][0],
            r = s[0][0][0],
            i = Yn(s[0][0][0], s[0][0][s[0][0].length - 1], o),
            s.forEach(function (t) {
              var e = Un(t[0], o, i, void 0, n, r);
              n = e[0],
                r = e[1]
            })
      }
      return X([k(n), k(r)])
    },
    t.rewind = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var n = e.reverse || !1,
        r = e.mutate || !1;
      if (!t)
        throw new Error("<geojson> is required");
      if ("boolean" != typeof n)
        throw new Error("<reverse> must be a boolean");
      if ("boolean" != typeof r)
        throw new Error("<mutate> must be a boolean");
      !1 === r && (t = Ft(t));
      var i = [];
      switch (t.type) {
        case "GeometryCollection":
          return S(t, function (t) {
              Hn(t, n)
            }),
            t;
        case "FeatureCollection":
          return I(t, function (t) {
              I(Hn(t, n), function (t) {
                i.push(t)
              })
            }),
            X(i)
      }
      return Hn(t, n)
    },
    t.isobands = function (t, e, n) {
      if (!Y(n = n || {}))
        throw new Error("options is invalid");
      var r = n.zProperty || "elevation",
        i = n.commonProperties || {},
        o = n.breaksProperties || [];
      if (W(t, "Point", "Input must contain Points"),
        !e)
        throw new Error("breaks is required");
      if (!Array.isArray(e))
        throw new Error("breaks is not an Array");
      if (!Y(i))
        throw new Error("commonProperties is not an Object");
      if (!Array.isArray(o))
        throw new Error("breaksProperties is not an Array");
      var s, a, u, c, h, l, p, f, g, d, y, _, m = function (e, t) {
          if (!Y(t = t || {}))
            throw new Error("options is invalid");
          var n = t.zProperty || "elevation",
            r = t.flip,
            i = t.flags;
          W(e, "Point", "input must contain Points");
          for (var o = function (t, n) {
              var r = {};
              return I(e, function (t) {
                  var e = D(t)[1];
                  r[e] || (r[e] = []),
                    r[e].push(t)
                }),
                Object.keys(r).map(function (t) {
                  return r[t].sort(function (t, e) {
                    return D(t)[0] - D(e)[0]
                  })
                }).sort(function (t, e) {
                  return n ? D(t[0])[1] - D(e[0])[1] : D(e[0])[1] - D(t[0])[1]
                })
            }(0, r), s = [], a = 0; a < o.length; a++) {
            for (var u = o[a], c = [], h = 0; h < u.length; h++) {
              var l = u[h];
              l.properties[n] ? c.push(l.properties[n]) : c.push(0),
                !0 === i && (l.properties.matrixPosition = [a, h])
            }
            s.push(c)
          }
          return s
        }(t, {
          zProperty: r,
          flip: !0
        }),
        v = function (t, e, n) {
          for (var r = [], i = 1; i < e.length; i++) {
            var o = +e[i - 1],
              s = +e[i],
              a = Zn(t, o, s - o),
              u = function (t) {
                var n = [],
                  r = [];
                a.forEach(function (t) {
                    var e = sn(z([t]));
                    r.push(e),
                      n.push({
                        ring: t,
                        area: e
                      })
                  }),
                  r.sort(function (t, e) {
                    return e - t
                  });
                var i = [];
                return r.forEach(function (t) {
                    for (var e = 0; e < n.length; e++)
                      if (n[e].area === t) {
                        i.push(n[e].ring),
                          n.splice(e, 1);
                        break
                      }
                  }),
                  i
              }(),
              c = function (t) {
                for (var e = u.map(function (t) {
                    return {
                      lrCoordinates: t,
                      grouped: !1
                    }
                  }), n = []; ! function (t) {
                    for (var e = 0; e < t.length; e++)
                      if (!1 === t[e].grouped)
                        return !1;
                    return !0
                  }(e);)
                  for (var r = 0; r < e.length; r++)
                    if (!e[r].grouped) {
                      var i = [];
                      i.push(e[r].lrCoordinates),
                        e[r].grouped = !0;
                      for (var o = z([e[r].lrCoordinates]), s = r + 1; s < e.length; s++)
                        if (!e[s].grouped) {
                          var a = z([e[s].lrCoordinates]);
                          (function (t, e) {
                            for (var n = ue(a), r = 0; r < n.features.length; r++)
                              if (!Mt(n.features[r], e))
                                return !1;
                            return !0
                          })(0, o) && (i.push(e[s].lrCoordinates),
                            e[s].grouped = !0)
                        }
                      n.push(i)
                    }
                return n
              }(),
              h = {};
            h.groupedRings = c,
              h[n] = o + "-" + s,
              r.push(h)
          }
          return r
        }(m, e, r);
      return X((s = v,
        a = m,
        u = V(t),
        c = u[2] - u[0],
        h = u[3] - u[1],
        l = u[0],
        p = u[1],
        f = a[0].length - 1,
        g = a.length - 1,
        d = c / f,
        y = h / g,
        _ = function (t) {
          t[0] = t[0] * d + l,
            t[1] = t[1] * y + p
        },
        s.forEach(function (t) {
          t.groupedRings.forEach(function (t) {
            t.forEach(function (t) {
              t.forEach(_)
            })
          })
        }),
        v = s).map(function (t, e) {
        if (o[e] && !Y(o[e]))
          throw new Error("Each mappedProperty is required to be an Object");
        var n = Object.assign({}, i, o[e]);
        return n[r] = t[r],
          x(t.groupedRings, n)
      }))
    },
    t.transformRotate = $n,
    t.transformScale = tr,
    t.transformTranslate = function (t, n, r, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var i = e.units,
        o = e.zTranslation,
        s = e.mutate;
      if (!t)
        throw new Error("geojson is required");
      if (null == n || isNaN(n))
        throw new Error("distance is required");
      if (o && "number" != typeof o && isNaN(o))
        throw new Error("zTranslation is not a number");
      if (o = void 0 !== o ? o : 0,
        0 === n && 0 === o)
        return t;
      if (null == r || isNaN(r))
        throw new Error("direction is required");
      return n < 0 && (n = -n,
          r = -r),
        !1 !== s && void 0 !== s || (t = Ft(t)),
        w(t, function (t) {
          var e = D(Xn(t, n, r, {
            units: i
          }));
          t[0] = e[0],
            t[1] = e[1],
            o && 3 === t.length && (t[2] += o)
        }),
        t
    },
    t.lineOffset = function (t, e, n) {
      if (!Y(n = n || {}))
        throw new Error("options is invalid");
      var r = n.units;
      if (!t)
        throw new Error("geojson is required");
      if (null == e || isNaN(e))
        throw new Error("distance is required");
      var i = K(t),
        o = t.properties;
      switch (i) {
        case "LineString":
          return ir(t, e, r);
        case "MultiLineString":
          var s = [];
          return L(t, function (t) {
              s.push(ir(t, e, r).geometry.coordinates)
            }),
            v(s, o);
        default:
          throw new Error("geometry " + i + " is not supported")
      }
    },
    t.polygonize = function (t) {
      var e = ia.fromGeoJson(t);
      e.deleteDangles(),
        e.deleteCutEdges();
      var n = [],
        r = [];
      return e.getEdgeRings().filter(function (t) {
          return t.isValid()
        }).forEach(function (t) {
          t.isHole() ? n.push(t) : r.push(t)
        }),
        n.forEach(function (t) {
          na.findEdgeRingContaining(t, r) && r.push(t)
        }),
        X(r.map(function (t) {
          return t.toPolygon()
        }))
    },
    t.booleanDisjoint = function (t, n) {
      var r;
      return L(t, function (e) {
          L(n, function (t) {
            if (!1 === r)
              return !1;
            r = function (t, e) {
              switch (t.type) {
                case "Point":
                  switch (e.type) {
                    case "Point":
                      return n = t.coordinates,
                        r = e.coordinates,
                        !(n[0] === r[0] && n[1] === r[1]);
                    case "LineString":
                      return !ar(e, t);
                    case "Polygon":
                      return !Mt(t, e)
                  }
                  break;
                case "LineString":
                  switch (e.type) {
                    case "Point":
                      return !ar(t, e);
                    case "LineString":
                      return !(0 < Ue(t, e).features.length);
                    case "Polygon":
                      return !ur(e, t)
                  }
                  break;
                case "Polygon":
                  switch (e.type) {
                    case "Point":
                      return !Mt(e, t);
                    case "LineString":
                      return !ur(t, e);
                    case "Polygon":
                      return ! function (t, e) {
                        for (var n = 0; n < t.coordinates[0].length; n++)
                          if (Mt(t.coordinates[0][n], e))
                            return !0;
                        for (var r = 0; r < e.coordinates[0].length; r++)
                          if (Mt(e.coordinates[0][r], t))
                            return !0;
                        return !1
                      }(e, t)
                  }
              }
              var n, r
            }(e.geometry, t.geometry)
          })
        }),
        r
    },
    t.booleanContains = function (t, e) {
      var n = K(t),
        r = K(e),
        i = J(t),
        o = J(e),
        s = D(t),
        a = D(e);
      switch (n) {
        case "Point":
          switch (r) {
            case "Point":
              return hr(s, a);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        case "MultiPoint":
          switch (r) {
            case "Point":
              return function (t, e) {
                var n, r = !1;
                for (n = 0; n < t.coordinates.length; n++)
                  if (hr(t.coordinates[n], e.coordinates)) {
                    r = !0;
                    break
                  }
                return r
              }(i, o);
            case "MultiPoint":
              return function (t, e) {
                for (var n = 0; n < e.coordinates.length; n++) {
                  for (var r = !1, i = 0; i < t.coordinates.length; i++)
                    if (hr(e.coordinates[n], t.coordinates[i])) {
                      r = !0;
                      break
                    }
                  if (!r)
                    return !1
                }
                return !0
              }(i, o);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        case "LineString":
          switch (r) {
            case "Point":
              return pn(o, i, {
                ignoreEndVertices: !0
              });
            case "LineString":
              return function (t, e) {
                for (var n = !1, r = 0; r < e.coordinates.length; r++)
                  if (pn({
                      type: "Point",
                      coordinates: e.coordinates[r]
                    }, t, {
                      ignoreEndVertices: !0
                    }) && (n = !0),
                    !pn({
                      type: "Point",
                      coordinates: e.coordinates[r]
                    }, t, {
                      ignoreEndVertices: !1
                    }))
                    return !1;
                return n
              }(i, o);
            case "MultiPoint":
              return function (t, e) {
                for (var n = !1, r = 0; r < e.coordinates.length; r++)
                  if (pn(e.coordinates[r], t, {
                      ignoreEndVertices: !0
                    }) && (n = !0),
                    !pn(e.coordinates[r], t))
                    return !1;
                return !!n
              }(i, o);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        case "Polygon":
          switch (r) {
            case "Point":
              return Mt(o, i, {
                ignoreBoundary: !0
              });
            case "LineString":
              return function (t, e) {
                var n, r, i = !1,
                  o = 0;
                if (!cr(V(t), V(e)))
                  return !1;
                for (; o < e.coordinates.length - 1; o++) {
                  if (Mt({
                      type: "Point",
                      coordinates: (n = e.coordinates[o],
                        r = e.coordinates[o + 1],
                        [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2])
                    }, t, {
                      ignoreBoundary: !0
                    })) {
                    i = !0;
                    break
                  }
                }
                return i
              }(i, o);
            case "Polygon":
              return function (t, e) {
                if (!cr(V(t), V(e)))
                  return !1;
                for (var n = 0; n < e.coordinates[0].length; n++)
                  if (!Mt(e.coordinates[0][n], t))
                    return !1;
                return !0
              }(i, o);
            case "MultiPoint":
              return function (t, e) {
                for (var n = 0; n < e.coordinates.length; n++)
                  if (!Mt(e.coordinates[n], t, {
                      ignoreBoundary: !0
                    }))
                    return !1;
                return !0
              }(i, o);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        default:
          throw new Error("feature1 " + n + " geometry not supported")
      }
    },
    t.booleanCrosses = function (t, e) {
      var n = K(t),
        r = K(e),
        i = J(t),
        o = J(e);
      switch (n) {
        case "MultiPoint":
          switch (r) {
            case "LineString":
              return lr(i, o);
            case "Polygon":
              return fr(i, o);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        case "LineString":
          switch (r) {
            case "MultiPoint":
              return lr(o, i);
            case "LineString":
              return function (t, e) {
                if (0 < Ue(t, e).features.length)
                  for (var n = 0; n < t.coordinates.length - 1; n++)
                    for (var r = 0; r < e.coordinates.length - 1; r++) {
                      var i = !0;
                      if (0 !== r && r !== e.coordinates.length - 2 || (i = !1),
                        gr(t.coordinates[n], t.coordinates[n + 1], e.coordinates[r], i))
                        return !0
                    }
                return !1
              }(i, o);
            case "Polygon":
              return pr(i, o);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        case "Polygon":
          switch (r) {
            case "MultiPoint":
              return fr(o, i);
            case "LineString":
              return pr(o, i);
            default:
              throw new Error("feature2 " + r + " geometry not supported")
          }
        default:
          throw new Error("feature1 " + n + " geometry not supported")
      }
    },
    t.booleanClockwise = Vn,
    t.booleanOverlap = mr,
    t.booleanPointOnLine = pn,
    t.booleanEqual = function (t, e) {
      if (!t)
        throw new Error("feature1 is required");
      if (!e)
        throw new Error("feature2 is required");
      return K(t) === K(e) && new ca({
        precision: 6
      }).compare(Ht(t), Ht(e))
    },
    t.booleanWithin = fn,
    t.clone = Ft,
    t.cleanCoords = Ht,
    t.clustersDbscan = function (n, t, e) {
      if ("object" != typeof (e = e || {}))
        throw new Error("options is invalid");
      var r = e.minPoints,
        i = e.units;
      if (W(n, "Point", "Input must contain Points"),
        null == t)
        throw new Error("maxDistance is required");
      if (!(0 < Math.sign(t)))
        throw new Error("Invalid maxDistance");
      if (!(null == r || 0 < Math.sign(r)))
        throw new Error("Invalid minPoints");
      n = Ft(n),
        r = r || 3;
      var o = new ga.DBSCAN,
        s = -1;
      return o.run(C(n), c(t, i), r, Dt).forEach(function (t) {
          s++,
          t.forEach(function (t) {
            var e = n.features[t];
            e.properties || (e.properties = {}),
              e.properties.cluster = s,
              e.properties.dbscan = "core"
          })
        }),
        o.noise.forEach(function (t) {
          var e = n.features[t];
          e.properties || (e.properties = {}),
            e.properties.cluster ? e.properties.dbscan = "edge" : e.properties.dbscan = "noise"
        }),
        n
    },
    t.clustersKmeans = function (t, e) {
      if ("object" != typeof (e = e || {}))
        throw new Error("options is invalid");
      var n = e.numberOfClusters,
        r = e.mutate;
      W(t, "Point", "Input must contain Points");
      var i = t.features.length;
      (n = n || Math.round(Math.sqrt(i / 2))) > i && (n = i),
        !1 !== r && void 0 !== r || (t = Ft(t));
      var o = C(t),
        s = o.slice(0, n),
        a = va(o, n, s),
        u = {};
      return a.centroids.forEach(function (t, e) {
          u[e] = t
        }),
        I(t, function (t, e) {
          var n = a.idxs[e];
          t.properties.cluster = n,
            t.properties.centroid = u[n]
        }),
        t
    },
    t.pointToLineDistance = en,
    t.booleanParallel = function (t, e) {
      if (!t)
        throw new Error("line1 is required");
      if (!e)
        throw new Error("line2 is required");
      if ("LineString" !== xr(t, "line1"))
        throw new Error("line1 must be a LineString");
      if ("LineString" !== xr(e, "line2"))
        throw new Error("line2 must be a LineString");
      for (var n = Xe(Ht(t)).features, r = Xe(Ht(e)).features, i = 0; i < n.length; i++) {
        var o = n[i].geometry.coordinates;
        if (!r[i])
          break;
        if (s = o,
          a = r[i].geometry.coordinates,
          p(He(s[0], s[1])) !== p(He(a[0], a[1])))
          return !1
      }
      var s, a;
      return !0
    },
    t.shortestPath = function (t, e, n) {
      if (!Y(n = n || {}))
        throw new Error("options is invalid");
      var r = n.resolution,
        i = n.minDistance,
        o = n.obstacles || X([]);
      if (!t)
        throw new Error("start is required");
      if (!e)
        throw new Error("end is required");
      if (r && !U(r) || r <= 0)
        throw new Error("options.resolution must be a number, greater than 0");
      if (i)
        throw new Error("options.minDistance is not yet implemented");
      var s = H(t),
        a = H(e);
      switch (t = k(s),
        e = k(a),
        K(o)) {
        case "FeatureCollection":
          if (0 === o.features.length)
            return j([s, a]);
          break;
        case "Polygon":
          o = X([B(J(o))]);
          break;
        default:
          throw new Error("invalid obstacles")
      }
      var u = o;
      u.features.push(t),
        u.features.push(e);
      var c = V(tr(te(V(u)), 1.15));
      r || (r = Dt([c[0], c[1]], [c[2], c[1]], n) / 100),
        u.features.pop(),
        u.features.pop();
      for (var h = c[0], l = c[1], p = c[2], f = c[3], g = r / Dt([h, l], [p, l], n) * (p - h), d = r / Dt([h, l], [h, f], n) * (f - l), y = p - h, _ = f - l, m = (y - Math.floor(y / g) * g) / 2, v = [], x = [], E = [], w = [], b = 1 / 0, I = 1 / 0, N = f - (_ - Math.floor(_ / d) * d) / 2, C = 0; l <= N;) {
        for (var S = [], M = [], L = h + m, P = 0; L <= p;) {
          var O = k([L, N]),
            R = function (t, e) {
              for (var n = 0; n < e.features.length; n++)
                if (Mt(t, e.features[n]))
                  return !0;
              return !1
            }(O, o);
          S.push(R ? 0 : 1),
            M.push(L + "|" + N);
          var T = Dt(O, t);
          !R && T < b && (b = T,
            E = {
              x: P,
              y: C
            });
          var A = Dt(O, e);
          !R && A < I && (I = A,
              w = {
                x: P,
                y: C
              }),
            L += g,
            P++
        }
        x.push(S),
          v.push(M),
          N -= d,
          C++
      }
      var D = new wr(x, {
          diagonal: !0
        }),
        F = D.grid[E.y][E.x],
        q = D.grid[w.y][w.x],
        G = [s];
      return xa.search(D, F, q).forEach(function (t) {
          var e = v[t.x][t.y].split("|");
          G.push([+e[0], +e[1]])
        }),
        G.push(a),
        Ht(j(G))
    },
    t.voronoi = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var n = e.bbox || [-180, -85, 180, 85];
      if (!t)
        throw new Error("points is required");
      if (!Array.isArray(n))
        throw new Error("bbox is invalid");
      return W(t, "Point", "points"),
        X(function () {
          function e(r) {
            return new Vr(r.map(function (t, e) {
              var n = [Math.round(i(t, e, r) / La) * La, Math.round(o(t, e, r) / La) * La];
              return n.index = e,
                n.data = t,
                n
            }), n)
          }
          var i = Nr,
            o = Cr,
            n = null;
          return e.polygons = function (t) {
              return e(t).polygons()
            },
            e.links = function (t) {
              return e(t).links()
            },
            e.triangles = function (t) {
              return e(t).triangles()
            },
            e.x = function (t) {
              return arguments.length ? (i = "function" == typeof t ? t : Ea(+t),
                e) : i
            },
            e.y = function (t) {
              return arguments.length ? (o = "function" == typeof t ? t : Ea(+t),
                e) : o
            },
            e.extent = function (t) {
              return arguments.length ? (n = null == t ? null : [
                  [+t[0][0], +t[0][1]],
                  [+t[1][0], +t[1][1]]
                ],
                e) : n && [
                [n[0][0], n[0][1]],
                [n[1][0], n[1][1]]
              ]
            },
            e.size = function (t) {
              return arguments.length ? (n = null == t ? null : [
                  [0, 0],
                  [+t[0], +t[1]]
                ],
                e) : n && [n[1][0] - n[0][0], n[1][1] - n[0][1]]
            },
            e
        }().x(function (t) {
          return t.geometry.coordinates[0]
        }).y(function (t) {
          return t.geometry.coordinates[1]
        }).extent([
          [n[0], n[1]],
          [n[2], n[3]]
        ]).polygons(t.features).map(Hr))
    },
    t.ellipse = Wr,
    t.centerMean = Zr,
    t.centerMedian = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var n = e.counter || 10;
      if (!U(n))
        throw new Error("counter must be a number");
      var r = e.weight,
        i = Zr(t, {
          weight: e.weight
        }),
        o = X([]);
      return I(t, function (t) {
          o.features.push(ae(t, {
            weight: t.properties[r]
          }))
        }),
        o.properties = {
          tolerance: e.tolerance,
          medianCandidates: []
        },
        function t(o, e, n, r) {
          var i = n.properties.tolerance || .001,
            s = 0,
            a = 0,
            u = 0,
            c = 0;
          if (I(n, function (t) {
              var e = t.properties.weight,
                n = null == e ? 1 : e;
              if (!U(n = Number(n)))
                throw new Error("weight value must be a number");
              if (0 < n) {
                c += 1;
                var r = n * Dt(t, o);
                0 === r && (r = 1);
                var i = n / r;
                s += t.geometry.coordinates[0] * i,
                  a += t.geometry.coordinates[1] * i,
                  u += i
              }
            }),
            c < 1)
            throw new Error("no features to measure");
          var h = s / u,
            l = a / u;
          return 1 === c || 0 === r || Math.abs(h - e[0]) < i && Math.abs(l - e[1]) < i ? k([h, l], {
            medianCandidates: n.properties.medianCandidates
          }) : (n.properties.medianCandidates.push([h, l]),
            t([h, l], o, n, r - 1))
        }(i.geometry.coordinates, [0, 0], o, n)
    },
    t.standardDeviationalEllipse = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var n = e.steps || 64,
        r = e.weight,
        i = e.properties || {};
      if (!U(n))
        throw new Error("steps must be a number");
      if (!Y(i))
        throw new Error("properties must be a number");
      var o = C(t).length,
        s = Zr(t, {
          weight: r
        }),
        a = 0,
        u = 0,
        c = 0;
      I(t, function (t) {
        var e = t.properties[r] || 1,
          n = Kr(D(t), D(s));
        a += Math.pow(n.x, 2) * e,
          u += Math.pow(n.y, 2) * e,
          c += n.x * n.y * e
      });
      var h = a - u,
        l = Math.sqrt(Math.pow(h, 2) + 4 * Math.pow(c, 2)),
        p = 2 * c,
        f = Math.atan((h + l) / p),
        g = 180 * f / Math.PI,
        d = 0,
        y = 0,
        _ = 0;
      I(t, function (t) {
        var e = t.properties[r] || 1,
          n = Kr(D(t), D(s));
        d += Math.pow(n.x * Math.cos(f) - n.y * Math.sin(f), 2) * e,
          y += Math.pow(n.x * Math.sin(f) + n.y * Math.cos(f), 2) * e,
          _ += e
      });
      var m = Math.sqrt(2 * d / _),
        v = Math.sqrt(2 * y / _),
        x = Wr(s, m, v, {
          units: "degrees",
          angle: g,
          steps: n,
          properties: i
        }),
        E = Pt(t, X([x])),
        w = {
          meanCenterCoordinates: D(s),
          semiMajorAxis: m,
          semiMinorAxis: v,
          numberOfFeatures: o,
          angle: g,
          percentageWithinEllipse: 100 * C(E).length / o
        };
      return x.properties.standardDeviationalEllipse = w,
        x
    },
    t.difference = function (t, e) {
      var n = J(t),
        r = J(e),
        i = t.properties || {};
      if (n = Ni(n),
        r = Ni(r),
        !n)
        return null;
      if (!r)
        return B(n, i);
      var o = new kc,
        s = o.read(n),
        a = o.read(r),
        u = jp.difference(s, a);
      return u.isEmpty() ? null : B((new zc).write(u), i)
    },
    t.buffer = function (t, n, e) {
      var r = (e = e || {}).units,
        i = e.steps || 64;
      if (!t)
        throw new Error("geojson is required");
      if ("object" != typeof e)
        throw new Error("options must be an object");
      if ("number" != typeof i)
        throw new Error("steps must be an number");
      if (void 0 === n)
        throw new Error("radius is required");
      if (i <= 0)
        throw new Error("steps must be greater than 0");
      i = i || 64,
        r = r || "kilometers";
      var o = [];
      switch (t.type) {
        case "GeometryCollection":
          return S(t, function (t) {
              var e = no(t, n, r, i);
              e && o.push(e)
            }),
            X(o);
        case "FeatureCollection":
          return I(t, function (t) {
              var e = no(t, n, r, i);
              e && I(e, function (t) {
                t && o.push(t)
              })
            }),
            X(o)
      }
      return no(t, n, r, i)
    },
    t.union = io,
    t.intersect = oo,
    t.dissolve = function (t, e) {
      if (!Y(e = e || {}))
        throw new Error("options is invalid");
      var o = e.propertyName;
      W(t, "Polygon", "dissolve");
      var n = Ft(t),
        s = n.features,
        a = [];
      s.forEach(function (t, e) {
        t.properties.origIndexPosition = e
      });
      var u = ke();
      for (var c in u.load(n),
          s) {
        var h = s[c],
          l = !1;
        if (u.search(h).features.forEach(function (t) {
            h = s[c];
            var e, n = t.properties.origIndexPosition;
            if (0 < a.length && 0 !== n)
              if (n > a[a.length - 1])
                n -= a.length;
              else {
                var r = function (r, t, e) {
                  var i, o;
                  if (!Array.isArray(t))
                    throw new Error("Get closest expects an array as second argument");
                  return t.forEach(function (t, e) {
                      var n = t - r;
                      0 <= n && (void 0 === o || n < o) && (o = n,
                        i = e)
                    }),
                    i
                }(n, a);
                0 !== r && (n -= r)
              }
            if (n !== +c) {
              var i = s[n];
              i && h && (void 0 !== o && i.properties[o] !== h.properties[o] || mr(h, i) && (e = i,
                0 < Ue(j(C(h)), j(C(e))).features.length) && (s[c] = io(h, i),
                a.push(t.properties.origIndexPosition),
                a.sort(function (t, e) {
                  return t - e
                }),
                u.remove(t),
                s.splice(n, 1),
                h.properties.origIndexPosition = c,
                u.remove(h, function (t, e) {
                  return t.properties.origIndexPosition === e.properties.origIndexPosition
                }),
                l = !0))
            }
          }),
          l) {
          if (!h)
            continue;
          h.properties.origIndexPosition = c,
            u.insert(h),
            c--
        }
      }
      return s.forEach(function (t) {
          delete t.properties.origIndexPosition,
            delete t.bbox
        }),
        n
    },
    t.hexGrid = so,
    t.mask = function (t, e) {
      var i, o, n, r, s, a, u = z(e && e.geometry.coordinates || [
          [
            [180, 90],
            [-180, 90],
            [-180, -90],
            [180, -90],
            [180, 90]
          ]
        ]),
        c = (i = [],
          o = [],
          L(t, function (t) {
            var e = t.geometry.coordinates,
              n = e[0],
              r = e.slice(1);
            i.push(z([n])),
              r.forEach(function (t) {
                o.push(z([t]))
              })
          }),
          [X(i), X(o)]),
        h = c[0],
        l = c[1];
      return n = u,
        r = h = ao(h),
        s = l = ao(l),
        (a = []).push(n.geometry.coordinates[0]),
        L(r, function (t) {
          a.push(t.geometry.coordinates[0])
        }),
        L(s, function (t) {
          a.push(t.geometry.coordinates[0])
        }),
        z(a)
    },
    t.squareGrid = co,
    t.triangleGrid = ho,
    t.interpolate = function (e, t, a) {
      if ("object" != typeof (a = a || {}))
        throw new Error("options is invalid");
      var u = a.gridType,
        c = a.property,
        h = a.weight;
      if (!e)
        throw new Error("points is required");
      if (W(e, "Point", "input must contain Points"),
        !t)
        throw new Error("cellSize is required");
      if (void 0 !== h && "number" != typeof h)
        throw new Error("weight must be a number");
      c = c || "elevation",
        u = u || "square",
        h = h || 1;
      var n, r = V(e);
      switch (u) {
        case "point":
        case "points":
          n = yn(r, t, a);
          break;
        case "square":
        case "squares":
          n = co(r, t, a);
          break;
        case "hex":
        case "hexes":
          n = so(r, t, a);
          break;
        case "triangle":
        case "triangles":
          n = ho(r, t, a);
          break;
        default:
          throw new Error("invalid gridType")
      }
      var l = [];
      return I(n, function (i) {
          var o = 0,
            s = 0;
          I(e, function (t) {
            var e, n = Dt("point" === u ? i : ae(i), t, a);
            if (void 0 !== c && (e = t.properties[c]),
              void 0 === e && (e = t.geometry.coordinates[2]),
              void 0 === e)
              throw new Error("zValue is missing");
            0 === n && (o = e);
            var r = 1 / Math.pow(n, h);
            s += r,
              o += r * e
          });
          var t = Ft(i);
          t.properties[c] = o / s,
            l.push(t)
        }),
        X(l)
    },
    t.pointOnSurface = rn,
    t.polygonToLineString = Sn,
    t.lineStringToPolygon = Ln,
    t.inside = Mt,
    t.within = Pt,
    t.bezier = $t,
    t.nearest = Ne,
    t.pointOnLine = Ve,
    t.lineDistance = hn,
    t.radians2degrees = f,
    t.degrees2radians = m,
    t.distanceToDegrees = u,
    t.distanceToRadians = d,
    t.radiansToDistance = g,
    t.bearingToAngle = p,
    t.convertDistance = c,
    t.toMercator = Ze,
    t.toWgs84 = Ke,
    t.randomPosition = Qr,
    t.randomPoint = $r,
    t.randomPolygon = ti,
    t.randomLineString = ei,
    t.getCluster = ri,
    t.clusterEach = ii,
    t.clusterReduce = oi,
    t.createBins = si,
    t.applyFilter = ai,
    t.propertiesContainsFilter = ui,
    t.filterProperties = ci,
    t.earthRadius = lo,
    t.factors = po,
    t.unitsFactors = fo,
    t.areaFactors = go,
    t.feature = B,
    t.geometry = e,
    t.point = k,
    t.points = n,
    t.polygon = z,
    t.polygons = r,
    t.lineString = j,
    t.lineStrings = i,
    t.featureCollection = X,
    t.multiLineString = v,
    t.multiPoint = o,
    t.multiPolygon = x,
    t.geometryCollection = s,
    t.round = a,
    t.radiansToLength = g,
    t.lengthToRadians = d,
    t.lengthToDegrees = u,
    t.bearingToAzimuth = p,
    t.radiansToDegrees = f,
    t.degreesToRadians = m,
    t.convertLength = c,
    t.convertArea = h,
    t.isNumber = U,
    t.isObject = Y,
    t.validateBBox = l,
    t.validateId = y,
    t.getCoord = H,
    t.getCoords = D,
    t.containsNumber = F,
    t.geojsonType = q,
    t.featureOf = G,
    t.collectionOf = W,
    t.getGeom = J,
    t.getGeomType = Z,
    t.getType = K,
    t.coordEach = w,
    t.coordReduce = _,
    t.propEach = E,
    t.propReduce = b,
    t.featureEach = I,
    t.featureReduce = N,
    t.coordAll = C,
    t.geomEach = S,
    t.geomReduce = M,
    t.flattenEach = L,
    t.flattenReduce = P,
    t.segmentEach = O,
    t.segmentReduce = R,
    t.lineEach = T,
    t.lineReduce = A,
    Object.defineProperty(t, "__esModule", {
      value: !0
    })
});
