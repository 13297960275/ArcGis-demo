! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e(require("jQuery"), require("mapv")) : "function" == typeof define && define.amd ? define(["jQuery", "mapv"], e) : "object" == typeof exports ? exports.L = e(require("jQuery"), require("mapv")) : t.L = e(t.jQuery, t.mapv)
}("undefined" != typeof self ? self : this, function (__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_128__) {
  return function (i) {
    function a(t) {
      if (n[t])
        return n[t].exports;
      var e = n[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return i[t].call(e.exports, e, e.exports, a),
        e.l = !0,
        e.exports
    }
    var n = {};
    return a.m = i,
      a.c = n,
      a.d = function (t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: i
        })
      },
      a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
          } :
          function () {
            return t
          };
        return a.d(e, "a", e),
          e
      },
      a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      },
      a.p = "",
      a(a.s = 45)
  }([function (t, e, i) {
    "use strict";
    i.d(e, "e", function () {
        return a
      }),
      i.d(e, "f", function () {
        return n
      }),
      i.d(e, "h", function () {
        return o
      }),
      i.d(e, "g", function () {
        return s
      }),
      i.d(e, "l", function () {
        return r
      }),
      i.d(e, "d", function () {
        return l
      }),
      i.d(e, "m", function () {
        return h
      }),
      i.d(e, "j", function () {
        return u
      }),
      i.d(e, "k", function () {
        return c
      }),
      i.d(e, "b", function () {
        return d
      }),
      i.d(e, "a", function () {
        return f
      }),
      i.d(e, "i", function () {
        return _
      }),
      i.d(e, "c", function () {
        return p
      }),
      i.d(e, "o", function () {
        return m
      }),
      i.d(e, "n", function () {
        return g
      });
    var a = 1,
      n = 2,
      o = 4,
      s = 5,
      r = 484813681109536e-20,
      l = Math.PI / 2,
      h = .16666666666666666,
      u = .04722222222222222,
      c = .022156084656084655,
      d = 1e-10,
      f = .017453292519943295,
      _ = 57.29577951308232,
      p = Math.PI / 4,
      m = 2 * Math.PI,
      g = 3.14159265359
  }, function (t, e, i) {
    ! function (t) {
      "use strict";

      function l(t) {
        var e, i, a, n;
        for (i = 1,
          a = arguments.length; i < a; i++)
          for (e in n = arguments[i])
            t[e] = n[e];
        return t
      }

      function _(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
          return t.bind.apply(t, i.call(arguments, 1));
        var a = i.call(arguments, 2);
        return function () {
          return t.apply(e, a.length ? a.concat(i.call(arguments)) : arguments)
        }
      }

      function h(t) {
        return t._leaflet_id = t._leaflet_id || ++qt,
          t._leaflet_id
      }

      function e(t, e, i) {
        var a, n, o, s;
        return s = function () {
            a = !1,
              n && (o.apply(i, n),
                n = !1)
          },
          o = function () {
            a ? n = arguments : (t.apply(i, arguments),
              setTimeout(s, e),
              a = !0)
          }
      }

      function i(t, e, i) {
        var a = e[1],
          n = e[0],
          o = a - n;
        return t === a && i ? t : ((t - n) % o + o) % o + n
      }

      function r() {
        return !1
      }

      function a(t, e) {
        var i = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * i) / i
      }

      function n(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
      }

      function u(t) {
        return n(t).split(/\s+/)
      }

      function s(t, e) {
        for (var i in t.hasOwnProperty("options") || (t.options = t.options ? Ht(t.options) : {}),
            e)
          t.options[i] = e[i];
        return t.options
      }

      function c(t, e, i) {
        var a = [];
        for (var n in t)
          a.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + a.join("&")
      }

      function o(t, a) {
        return t.replace(Wt, function (t, e) {
          var i = a[e];
          if (void 0 === i)
            throw new Error("No value provided for variable " + t);
          return "function" == typeof i && (i = i(a)),
            i
        })
      }

      function d(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1
      }

      function f(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
      }

      function p(t) {
        var e = +new Date,
          i = Math.max(0, 16 - (e - Kt));
        return Kt = e + i,
          window.setTimeout(t, i)
      }

      function w(t, e, i) {
        if (!i || Xt !== p)
          return Xt.call(window, _(t, e));
        t.call(e)
      }

      function m(t) {
        t && Jt.call(window, t)
      }

      function g() {}

      function v(t, e, i) {
        this.x = i ? Math.round(t) : t,
          this.y = i ? Math.round(e) : e
      }

      function y(t, e, i) {
        return t instanceof v ? t : Vt(t) ? new v(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new v(t.x, t.y) : new v(t, e, i)
      }

      function b(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, a = 0, n = i.length; a < n; a++)
            this.extend(i[a])
      }

      function M(t, e) {
        return !t || t instanceof b ? t : new b(t, e)
      }

      function x(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, a = 0, n = i.length; a < n; a++)
            this.extend(i[a])
      }

      function k(t, e) {
        return t instanceof x ? t : new x(t, e)
      }

      function E(t, e, i) {
        if (isNaN(t) || isNaN(e))
          throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t,
          this.lng = +e,
          void 0 !== i && (this.alt = +i)
      }

      function C(t, e, i) {
        return t instanceof E ? t : Vt(t) && "object" != typeof t[0] ? 3 === t.length ? new E(t[0], t[1], t[2]) : 2 === t.length ? new E(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new E(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new E(t, e, i)
      }

      function P(t, e, i, a) {
        if (Vt(t))
          return this._a = t[0],
            this._b = t[1],
            this._c = t[2],
            void(this._d = t[3]);
        this._a = t,
          this._b = e,
          this._c = i,
          this._d = a
      }

      function T(t, e, i, a) {
        return new P(t, e, i, a)
      }

      function S(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
      }

      function D(t, e) {
        var i, a, n, o, s, r, l = "";
        for (i = 0,
          n = t.length; i < n; i++) {
          for (s = t[i],
            a = 0,
            o = s.length; a < o; a++)
            r = s[a],
            l += (a ? "L" : "M") + r.x + " " + r.y;
          l += e ? Ze ? "z" : "x" : ""
        }
        return l || "M0 0"
      }

      function O(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
      }

      function z(t, e, i, a) {
        return "touchstart" === e ? (u = t,
            c = i,
            d = a,
            f = _(function (t) {
              if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(Ke.indexOf(t.target.tagName) < 0))
                  return;
                mt(t)
              }
              R(t, c)
            }),
            u["_leaflet_touchstart" + d] = f,
            u.addEventListener(qe, f, !1),
            Je || (document.documentElement.addEventListener(qe, I, !0),
              document.documentElement.addEventListener(We, A, !0),
              document.documentElement.addEventListener(Ve, j, !0),
              document.documentElement.addEventListener(Ye, j, !0),
              Je = !0)) : "touchmove" === e ? (l = i,
            h = function (t) {
              (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && R(t, l)
            },
            (r = t)["_leaflet_touchmove" + a] = h,
            r.addEventListener(We, h, !1)) : "touchend" === e && (o = i,
            s = function (t) {
              R(t, o)
            },
            (n = t)["_leaflet_touchend" + a] = s,
            n.addEventListener(Ve, s, !1),
            n.addEventListener(Ye, s, !1)),
          this;
        var n, o, s, r, l, h, u, c, d, f
      }

      function I(t) {
        Xe[t.pointerId] = t,
          Qe++
      }

      function A(t) {
        Xe[t.pointerId] && (Xe[t.pointerId] = t)
      }

      function j(t) {
        delete Xe[t.pointerId],
          Qe--
      }

      function R(t, e) {
        for (var i in t.touches = [],
            Xe)
          t.touches.push(Xe[i]);
        t.changedTouches = [t],
          e(t)
      }

      function B(t, n, e) {
        function i(t) {
          var e;
          if (je) {
            if (!pe || "mouse" === t.pointerType)
              return;
            e = Qe
          } else
            e = t.touches.length;
          if (!(1 < e)) {
            var i = Date.now(),
              a = i - (o || i);
            s = t.touches ? t.touches[0] : t,
              r = 0 < a && a <= 250,
              o = i
          }
        }

        function a(t) {
          if (r && !s.cancelBubble) {
            if (je) {
              if (!pe || "mouse" === t.pointerType)
                return;
              var e, i, a = {};
              for (i in s)
                e = s[i],
                a[i] = e && e.bind ? e.bind(s) : e;
              s = a
            }
            s.type = "dblclick",
              n(s),
              o = null
          }
        }
        var o, s, r = !1;
        return t[ei + $e + e] = i,
          t[ei + ti + e] = a,
          t[ei + "dblclick" + e] = n,
          t.addEventListener($e, i, !1),
          t.addEventListener(ti, a, !1),
          t.addEventListener("dblclick", n, !1),
          this
      }

      function N(t, e) {
        var i = t[ei + $e + e],
          a = t[ei + ti + e],
          n = t[ei + "dblclick" + e];
        return t.removeEventListener($e, i, !1),
          t.removeEventListener(ti, a, !1),
          pe || t.removeEventListener("dblclick", n, !1),
          this
      }

      function G(t) {
        return "string" == typeof t ? document.getElementById(t) : t
      }

      function U(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || "auto" === i) && document.defaultView) {
          var a = document.defaultView.getComputedStyle(t, null);
          i = a ? a[e] : null
        }
        return "auto" === i ? null : i
      }

      function Z(t, e, i) {
        var a = document.createElement(t);
        return a.className = e || "",
          i && i.appendChild(a),
          a
      }

      function F(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
      }

      function H(t) {
        for (; t.firstChild;)
          t.removeChild(t.firstChild)
      }

      function q(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t)
      }

      function W(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
      }

      function V(t, e) {
        if (void 0 !== t.classList)
          return t.classList.contains(e);
        var i = J(t);
        return 0 < i.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
      }

      function Y(t, e) {
        if (void 0 !== t.classList)
          for (var i = u(e), a = 0, n = i.length; a < n; a++)
            t.classList.add(i[a]);
        else if (!V(t, e)) {
          var o = J(t);
          X(t, (o ? o + " " : "") + e)
        }
      }

      function K(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : X(t, n((" " + J(t) + " ").replace(" " + e + " ", " ")))
      }

      function X(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
      }

      function J(t) {
        return t.correspondingElement && (t = t.correspondingElement),
          void 0 === t.className.baseVal ? t.className : t.className.baseVal
      }

      function Q(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
          var i = !1,
            a = "DXImageTransform.Microsoft.Alpha";
          try {
            i = t.filters.item(a)
          } catch (t) {
            if (1 === e)
              return
          }
          e = Math.round(100 * e),
            i ? (i.Enabled = 100 !== e,
              i.Opacity = e) : t.style.filter += " progid:" + a + "(opacity=" + e + ")"
        }(t, e)
      }

      function $(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1
      }

      function tt(t, e, i) {
        var a = e || new v(0, 0);
        t.style[ii] = (Pe ? "translate(" + a.x + "px," + a.y + "px)" : "translate3d(" + a.x + "px," + a.y + "px,0)") + (i ? " scale(" + i + ")" : "")
      }

      function et(t, e) {
        t._leaflet_pos = e,
          De ? tt(t, e) : (t.style.left = e.x + "px",
            t.style.top = e.y + "px")
      }

      function it(t) {
        return t._leaflet_pos || new v(0, 0)
      }

      function at() {
        ht(window, "dragstart", mt)
      }

      function nt() {
        ut(window, "dragstart", mt)
      }

      function ot(t) {
        for (; - 1 === t.tabIndex;)
          t = t.parentNode;
        t.style && (st(),
          ri = (si = t).style.outline,
          t.style.outline = "none",
          ht(window, "keydown", st))
      }

      function st() {
        si && (si.style.outline = ri,
          ri = si = void 0,
          ut(window, "keydown", st))
      }

      function rt(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body);)
        ;
        return t
      }

      function lt(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        }
      }

      function ht(t, e, i, a) {
        if ("object" == typeof e)
          for (var n in e)
            ct(t, n, e[n], i);
        else {
          e = u(e);
          for (var o = 0, s = e.length; o < s; o++)
            ct(t, e[o], i, a)
        }
        return this
      }

      function ut(t, e, i, a) {
        if ("object" == typeof e)
          for (var n in e)
            dt(t, n, e[n], i);
        else if (e) {
          e = u(e);
          for (var o = 0, s = e.length; o < s; o++)
            dt(t, e[o], i, a)
        } else {
          for (var r in t[ui])
            dt(t, r, t[ui][r]);
          delete t[ui]
        }
        return this
      }

      function ct(e, t, i, a) {
        var n = t + h(i) + (a ? "_" + h(a) : "");
        if (e[ui] && e[ui][n])
          return this;
        var o = function (t) {
            return i.call(a || e, t || window.event)
          },
          s = o;
        je && 0 === t.indexOf("touch") ? z(e, t, o, n) : !Re || "dblclick" !== t || je && Me ? "addEventListener" in e ? "mousewheel" === t ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", o, !1) : "mouseenter" === t || "mouseleave" === t ? (o = function (t) {
              t = t || window.event,
                Mt(e, t) && s(t)
            },
            e.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", o, !1)) : ("click" === t && ge && (o = function (t) {
              ! function (t, e) {
                var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                  a = li && i - li;
                if (a && 100 < a && a < 500 || t.target._simulatedClick && !t._simulated)
                  return gt(t);
                li = i,
                  e(t)
              }(t, s)
            }),
            e.addEventListener(t, o, !1)) : "attachEvent" in e && e.attachEvent("on" + t, o) : B(e, o, n),
          e[ui] = e[ui] || {},
          e[ui][n] = o
      }

      function dt(t, e, i, a) {
        var n, o, s, r = e + h(i) + (a ? "_" + h(a) : ""),
          l = t[ui] && t[ui][r];
        if (!l)
          return this;
        je && 0 === e.indexOf("touch") ? (s = (n = t)["_leaflet_" + (o = e) + r],
            "touchstart" === o ? n.removeEventListener(qe, s, !1) : "touchmove" === o ? n.removeEventListener(We, s, !1) : "touchend" === o && (n.removeEventListener(Ve, s, !1),
              n.removeEventListener(Ye, s, !1))) : !Re || "dblclick" !== e || je && Me ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", l, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, l, !1) : "detachEvent" in t && t.detachEvent("on" + e, l) : N(t, r),
          t[ui][r] = null
      }

      function ft(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
          wt(t),
          this
      }

      function _t(t) {
        return ct(t, "mousewheel", ft),
          this
      }

      function pt(t) {
        return ht(t, "mousedown touchstart dblclick", ft),
          ct(t, "click", bt),
          this
      }

      function mt(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
          this
      }

      function gt(t) {
        return mt(t),
          ft(t),
          this
      }

      function vt(t, e) {
        if (!e)
          return new v(t.clientX, t.clientY);
        var i = lt(e),
          a = i.boundingClientRect;
        return new v((t.clientX - a.left) / i.x - e.clientLeft, (t.clientY - a.top) / i.y - e.clientTop)
      }

      function yt(t) {
        return pe ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ci : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
      }

      function bt(t) {
        di[t.type] = !0
      }

      function wt(t) {
        var e = di[t.type];
        return di[t.type] = !1,
          e
      }

      function Mt(t, e) {
        var i = e.relatedTarget;
        if (!i)
          return !0;
        try {
          for (; i && i !== t;)
            i = i.parentNode
        } catch (t) {
          return !1
        }
        return i !== t
      }

      function Lt(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = function (t, e) {
          var i = t.length,
            a = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
          a[0] = a[i - 1] = 1,
            function t(e, i, a, n, o) {
              var s, r, l, h = 0;
              for (r = n + 1; r <= o - 1; r++)
                (l = Pt(e[r], e[n], e[o], !0)) > h && (s = r,
                  h = l);
              a < h && (i[s] = 1,
                t(e, i, a, n, s),
                t(e, i, a, s, o))
            }(t, a, e, 0, i - 1);
          var n, o = [];
          for (n = 0; n < i; n++)
            a[n] && o.push(t[n]);
          return o
        }(t = function (t, e) {
          for (var i = [t[0]], a = 1, n = 0, o = t.length; a < o; a++)
            s = t[a],
            r = t[n],
            l = r.x - s.x,
            h = r.y - s.y,
            e < l * l + h * h && (i.push(t[a]),
              n = a);
          var s, r, l, h;
          return n < o - 1 && i.push(t[o - 1]),
            i
        }(t, i), i)
      }

      function xt(t, e, i) {
        return Math.sqrt(Pt(t, e, i, !0))
      }

      function kt(t, e, i, a, n) {
        var o, s, r, l = a ? Li : Ct(t, i),
          h = Ct(e, i);
        for (Li = h;;) {
          if (!(l | h))
            return [t, e];
          if (l & h)
            return !1;
          s = Et(t, e, o = l || h, i, n),
            r = Ct(s, i),
            o === l ? (t = s,
              l = r) : (e = s,
              h = r)
        }
      }

      function Et(t, e, i, a, n) {
        var o, s, r = e.x - t.x,
          l = e.y - t.y,
          h = a.min,
          u = a.max;
        return 8 & i ? (o = t.x + r * (u.y - t.y) / l,
            s = u.y) : 4 & i ? (o = t.x + r * (h.y - t.y) / l,
            s = h.y) : 2 & i ? (o = u.x,
            s = t.y + l * (u.x - t.x) / r) : 1 & i && (o = h.x,
            s = t.y + l * (h.x - t.x) / r),
          new v(o, s, n)
      }

      function Ct(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
          t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
          i
      }

      function Pt(t, e, i, a) {
        var n, o = e.x,
          s = e.y,
          r = i.x - o,
          l = i.y - s,
          h = r * r + l * l;
        return 0 < h && (1 < (n = ((t.x - o) * r + (t.y - s) * l) / h) ? (o = i.x,
            s = i.y) : 0 < n && (o += r * n,
            s += l * n)),
          r = t.x - o,
          l = t.y - s,
          a ? r * r + l * l : new v(o, s)
      }

      function Tt(t) {
        return !Vt(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
      }

      function St(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
          Tt(t)
      }

      function Dt(t, e, i) {
        var a, n, o, s, r, l, h, u, c, d = [1, 4, 2, 8];
        for (n = 0,
          h = t.length; n < h; n++)
          t[n]._code = Ct(t[n], e);
        for (s = 0; s < 4; s++) {
          for (u = d[s],
            a = [],
            n = 0,
            h = t.length,
            o = h - 1; n < h; o = n++)
            r = t[n],
            l = t[o],
            r._code & u ? l._code & u || ((c = Et(l, r, u, e, i))._code = Ct(c, e),
              a.push(c)) : (l._code & u && ((c = Et(l, r, u, e, i))._code = Ct(c, e),
                a.push(c)),
              a.push(r));
          t = a
        }
        return t
      }

      function Ot(t, e) {
        var i, a, n, o, s = "Feature" === t.type ? t.geometry : t,
          r = s ? s.coordinates : null,
          l = [],
          h = e && e.pointToLayer,
          u = e && e.coordsToLatLng || zt;
        if (!r && !s)
          return null;
        switch (s.type) {
          case "Point":
            return i = u(r),
              h ? h(t, i) : new Hi(i);
          case "MultiPoint":
            for (n = 0,
              o = r.length; n < o; n++)
              i = u(r[n]),
              l.push(h ? h(t, i) : new Hi(i));
            return new Gi(l);
          case "LineString":
          case "MultiLineString":
            return a = It(r, "LineString" === s.type ? 0 : 1, u),
              new Yi(a, e);
          case "Polygon":
          case "MultiPolygon":
            return a = It(r, "Polygon" === s.type ? 1 : 2, u),
              new Ki(a, e);
          case "GeometryCollection":
            for (n = 0,
              o = s.geometries.length; n < o; n++) {
              var c = Ot({
                geometry: s.geometries[n],
                type: "Feature",
                properties: t.properties
              }, e);
              c && l.push(c)
            }
            return new Gi(l);
          default:
            throw new Error("Invalid GeoJSON object.")
        }
      }

      function zt(t) {
        return new E(t[1], t[0], t[2])
      }

      function It(t, e, i) {
        for (var a, n = [], o = 0, s = t.length; o < s; o++)
          a = e ? It(t[o], e - 1, i) : (i || zt)(t[o]),
          n.push(a);
        return n
      }

      function At(t, e) {
        return e = "number" == typeof e ? e : 6,
          void 0 !== t.alt ? [a(t.lng, e), a(t.lat, e), a(t.alt, e)] : [a(t.lng, e), a(t.lat, e)]
      }

      function jt(t, e, i, a) {
        for (var n = [], o = 0, s = t.length; o < s; o++)
          n.push(e ? jt(t[o], e - 1, i, a) : At(t[o], a));
        return !e && i && n.push(n[0]),
          n
      }

      function Rt(t, e) {
        return t.feature ? l({}, t.feature, {
          geometry: e
        }) : Bt(e)
      }

      function Bt(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        }
      }

      function Nt(t, e) {
        return new Xi(t, e)
      }

      function Gt(t, e) {
        return new sa(t, e)
      }

      function Ut(t) {
        return Ue ? new ha(t) : null
      }

      function Zt(t) {
        return Ze || Fe ? new fa(t) : null
      }
      var Ft = Object.freeze;
      Object.freeze = function (t) {
        return t
      };
      var Ht = Object.create || function () {
          function e() {}
          return function (t) {
            return e.prototype = t,
              new e
          }
        }(),
        qt = 0,
        Wt = /\{ *([\w_-]+) *\}/g,
        Vt = Array.isArray || function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        },
        Yt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        Kt = 0,
        Xt = window.requestAnimationFrame || f("RequestAnimationFrame") || p,
        Jt = window.cancelAnimationFrame || f("CancelAnimationFrame") || f("CancelRequestAnimationFrame") || function (t) {
          window.clearTimeout(t)
        },
        Qt = (Object.freeze || Object)({
          freeze: Ft,
          extend: l,
          create: Ht,
          bind: _,
          lastId: qt,
          stamp: h,
          throttle: e,
          wrapNum: i,
          falseFn: r,
          formatNum: a,
          trim: n,
          splitWords: u,
          setOptions: s,
          getParamString: c,
          template: o,
          isArray: Vt,
          indexOf: d,
          emptyImageUrl: Yt,
          requestFn: Xt,
          cancelFn: Jt,
          requestAnimFrame: w,
          cancelAnimFrame: m
        });
      g.extend = function (t) {
          var e = function () {
              this.initialize && this.initialize.apply(this, arguments),
                this.callInitHooks()
            },
            i = e.__super__ = this.prototype,
            a = Ht(i);
          for (var n in (a.constructor = e).prototype = a,
              this)
            this.hasOwnProperty(n) && "prototype" !== n && "__super__" !== n && (e[n] = this[n]);
          return t.statics && (l(e, t.statics),
              delete t.statics),
            t.includes && (function (t) {
                if ("undefined" != typeof L && L && L.Mixin) {
                  t = Vt(t) ? t : [t];
                  for (var e = 0; e < t.length; e++)
                    t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
                }
              }(t.includes),
              l.apply(null, [a].concat(t.includes)),
              delete t.includes),
            a.options && (t.options = l(Ht(a.options), t.options)),
            l(a, t),
            a._initHooks = [],
            a.callInitHooks = function () {
              if (!this._initHooksCalled) {
                i.callInitHooks && i.callInitHooks.call(this),
                  this._initHooksCalled = !0;
                for (var t = 0, e = a._initHooks.length; t < e; t++)
                  a._initHooks[t].call(this)
              }
            },
            e
        },
        g.include = function (t) {
          return l(this.prototype, t),
            this
        },
        g.mergeOptions = function (t) {
          return l(this.prototype.options, t),
            this
        },
        g.addInitHook = function (t) {
          var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function () {
              this[t].apply(this, e)
            };
          return this.prototype._initHooks = this.prototype._initHooks || [],
            this.prototype._initHooks.push(i),
            this
        };
      var $t = {
        on: function (t, e, i) {
          if ("object" == typeof t)
            for (var a in t)
              this._on(a, t[a], e);
          else {
            t = u(t);
            for (var n = 0, o = t.length; n < o; n++)
              this._on(t[n], e, i)
          }
          return this
        },
        off: function (t, e, i) {
          if (t)
            if ("object" == typeof t)
              for (var a in t)
                this._off(a, t[a], e);
            else {
              t = u(t);
              for (var n = 0, o = t.length; n < o; n++)
                this._off(t[n], e, i)
            }
          else
            delete this._events;
          return this
        },
        _on: function (t, e, i) {
          this._events = this._events || {};
          var a = this._events[t];
          a || (a = [],
              this._events[t] = a),
            i === this && (i = void 0);
          for (var n = {
              fn: e,
              ctx: i
            }, o = a, s = 0, r = o.length; s < r; s++)
            if (o[s].fn === e && o[s].ctx === i)
              return;
          o.push(n)
        },
        _off: function (t, e, i) {
          var a, n, o;
          if (this._events && (a = this._events[t])) {
            if (!e) {
              for (n = 0,
                o = a.length; n < o; n++)
                a[n].fn = r;
              return void delete this._events[t]
            }
            if (i === this && (i = void 0),
              a)
              for (n = 0,
                o = a.length; n < o; n++) {
                var s = a[n];
                if (s.ctx === i && s.fn === e)
                  return s.fn = r,
                    this._firingCount && (this._events[t] = a = a.slice()),
                    void a.splice(n, 1)
              }
          }
        },
        fire: function (t, e, i) {
          if (!this.listens(t, i))
            return this;
          var a = l({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var n = this._events[t];
            if (n) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var o = 0, s = n.length; o < s; o++) {
                var r = n[o];
                r.fn.call(r.ctx || this, a)
              }
              this._firingCount--
            }
          }
          return i && this._propagateEvent(a),
            this
        },
        listens: function (t, e) {
          var i = this._events && this._events[t];
          if (i && i.length)
            return !0;
          if (e)
            for (var a in this._eventParents)
              if (this._eventParents[a].listens(t, e))
                return !0;
          return !1
        },
        once: function (t, e, i) {
          if ("object" == typeof t) {
            for (var a in t)
              this.once(a, t[a], e);
            return this
          }
          var n = _(function () {
            this.off(t, e, i).off(t, n, i)
          }, this);
          return this.on(t, e, i).on(t, n, i)
        },
        addEventParent: function (t) {
          return this._eventParents = this._eventParents || {},
            this._eventParents[h(t)] = t,
            this
        },
        removeEventParent: function (t) {
          return this._eventParents && delete this._eventParents[h(t)],
            this
        },
        _propagateEvent: function (t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, l({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0)
        }
      };
      $t.addEventListener = $t.on,
        $t.removeEventListener = $t.clearAllEventListeners = $t.off,
        $t.addOneTimeEventListener = $t.once,
        $t.fireEvent = $t.fire,
        $t.hasEventListeners = $t.listens;
      var te = g.extend($t),
        ee = Math.trunc || function (t) {
          return 0 < t ? Math.floor(t) : Math.ceil(t)
        };
      v.prototype = {
          clone: function () {
            return new v(this.x, this.y)
          },
          add: function (t) {
            return this.clone()._add(y(t))
          },
          _add: function (t) {
            return this.x += t.x,
              this.y += t.y,
              this
          },
          subtract: function (t) {
            return this.clone()._subtract(y(t))
          },
          _subtract: function (t) {
            return this.x -= t.x,
              this.y -= t.y,
              this
          },
          divideBy: function (t) {
            return this.clone()._divideBy(t)
          },
          _divideBy: function (t) {
            return this.x /= t,
              this.y /= t,
              this
          },
          multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
          },
          _multiplyBy: function (t) {
            return this.x *= t,
              this.y *= t,
              this
          },
          scaleBy: function (t) {
            return new v(this.x * t.x, this.y * t.y)
          },
          unscaleBy: function (t) {
            return new v(this.x / t.x, this.y / t.y)
          },
          round: function () {
            return this.clone()._round()
          },
          _round: function () {
            return this.x = Math.round(this.x),
              this.y = Math.round(this.y),
              this
          },
          floor: function () {
            return this.clone()._floor()
          },
          _floor: function () {
            return this.x = Math.floor(this.x),
              this.y = Math.floor(this.y),
              this
          },
          ceil: function () {
            return this.clone()._ceil()
          },
          _ceil: function () {
            return this.x = Math.ceil(this.x),
              this.y = Math.ceil(this.y),
              this
          },
          trunc: function () {
            return this.clone()._trunc()
          },
          _trunc: function () {
            return this.x = ee(this.x),
              this.y = ee(this.y),
              this
          },
          distanceTo: function (t) {
            var e = (t = y(t)).x - this.x,
              i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
          },
          equals: function (t) {
            return (t = y(t)).x === this.x && t.y === this.y
          },
          contains: function (t) {
            return t = y(t),
              Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
          },
          toString: function () {
            return "Point(" + a(this.x) + ", " + a(this.y) + ")"
          }
        },
        b.prototype = {
          extend: function (t) {
            return t = y(t),
              this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
                this.max.x = Math.max(t.x, this.max.x),
                this.min.y = Math.min(t.y, this.min.y),
                this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
                this.max = t.clone()),
              this
          },
          getCenter: function (t) {
            return new v((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
          },
          getBottomLeft: function () {
            return new v(this.min.x, this.max.y)
          },
          getTopRight: function () {
            return new v(this.max.x, this.min.y)
          },
          getTopLeft: function () {
            return this.min
          },
          getBottomRight: function () {
            return this.max
          },
          getSize: function () {
            return this.max.subtract(this.min)
          },
          contains: function (t) {
            var e, i;
            return (t = "number" == typeof t[0] || t instanceof v ? y(t) : M(t)) instanceof b ? (e = t.min,
                i = t.max) : e = i = t,
              e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
          },
          intersects: function (t) {
            t = M(t);
            var e = this.min,
              i = this.max,
              a = t.min,
              n = t.max,
              o = n.x >= e.x && a.x <= i.x,
              s = n.y >= e.y && a.y <= i.y;
            return o && s
          },
          overlaps: function (t) {
            t = M(t);
            var e = this.min,
              i = this.max,
              a = t.min,
              n = t.max,
              o = n.x > e.x && a.x < i.x,
              s = n.y > e.y && a.y < i.y;
            return o && s
          },
          isValid: function () {
            return !(!this.min || !this.max)
          }
        },
        x.prototype = {
          extend: function (t) {
            var e, i, a = this._southWest,
              n = this._northEast;
            if (t instanceof E)
              i = e = t;
            else {
              if (!(t instanceof x))
                return t ? this.extend(C(t) || k(t)) : this;
              if (e = t._southWest,
                i = t._northEast,
                !e || !i)
                return this
            }
            return a || n ? (a.lat = Math.min(e.lat, a.lat),
                a.lng = Math.min(e.lng, a.lng),
                n.lat = Math.max(i.lat, n.lat),
                n.lng = Math.max(i.lng, n.lng)) : (this._southWest = new E(e.lat, e.lng),
                this._northEast = new E(i.lat, i.lng)),
              this
          },
          pad: function (t) {
            var e = this._southWest,
              i = this._northEast,
              a = Math.abs(e.lat - i.lat) * t,
              n = Math.abs(e.lng - i.lng) * t;
            return new x(new E(e.lat - a, e.lng - n), new E(i.lat + a, i.lng + n))
          },
          getCenter: function () {
            return new E((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
          },
          getSouthWest: function () {
            return this._southWest
          },
          getNorthEast: function () {
            return this._northEast
          },
          getNorthWest: function () {
            return new E(this.getNorth(), this.getWest())
          },
          getSouthEast: function () {
            return new E(this.getSouth(), this.getEast())
          },
          getWest: function () {
            return this._southWest.lng
          },
          getSouth: function () {
            return this._southWest.lat
          },
          getEast: function () {
            return this._northEast.lng
          },
          getNorth: function () {
            return this._northEast.lat
          },
          contains: function (t) {
            t = "number" == typeof t[0] || t instanceof E || "lat" in t ? C(t) : k(t);
            var e, i, a = this._southWest,
              n = this._northEast;
            return t instanceof x ? (e = t.getSouthWest(),
                i = t.getNorthEast()) : e = i = t,
              e.lat >= a.lat && i.lat <= n.lat && e.lng >= a.lng && i.lng <= n.lng
          },
          intersects: function (t) {
            t = k(t);
            var e = this._southWest,
              i = this._northEast,
              a = t.getSouthWest(),
              n = t.getNorthEast(),
              o = n.lat >= e.lat && a.lat <= i.lat,
              s = n.lng >= e.lng && a.lng <= i.lng;
            return o && s
          },
          overlaps: function (t) {
            t = k(t);
            var e = this._southWest,
              i = this._northEast,
              a = t.getSouthWest(),
              n = t.getNorthEast(),
              o = n.lat > e.lat && a.lat < i.lat,
              s = n.lng > e.lng && a.lng < i.lng;
            return o && s
          },
          toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
          },
          equals: function (t, e) {
            return !!t && (t = k(t),
              this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
          },
          isValid: function () {
            return !(!this._southWest || !this._northEast)
          }
        };
      var ie, ae = {
          latLngToPoint: function (t, e) {
            var i = this.projection.project(t),
              a = this.scale(e);
            return this.transformation._transform(i, a)
          },
          pointToLatLng: function (t, e) {
            var i = this.scale(e),
              a = this.transformation.untransform(t, i);
            return this.projection.unproject(a)
          },
          project: function (t) {
            return this.projection.project(t)
          },
          unproject: function (t) {
            return this.projection.unproject(t)
          },
          scale: function (t) {
            return 256 * Math.pow(2, t)
          },
          zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
          },
          getProjectedBounds: function (t) {
            if (this.infinite)
              return null;
            var e = this.projection.bounds,
              i = this.scale(t);
            return new b(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
          },
          infinite: (E.prototype = {
              equals: function (t, e) {
                return !!t && (t = C(t),
                  Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
              },
              toString: function (t) {
                return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
              },
              distanceTo: function (t) {
                return ne.distance(this, C(t))
              },
              wrap: function () {
                return ne.wrapLatLng(this)
              },
              toBounds: function (t) {
                var e = 180 * t / 40075017,
                  i = e / Math.cos(Math.PI / 180 * this.lat);
                return k([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
              },
              clone: function () {
                return new E(this.lat, this.lng, this.alt)
              }
            },
            !1),
          wrapLatLng: function (t) {
            var e = this.wrapLng ? i(t.lng, this.wrapLng, !0) : t.lng;
            return new E(this.wrapLat ? i(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
          },
          wrapLatLngBounds: function (t) {
            var e = t.getCenter(),
              i = this.wrapLatLng(e),
              a = e.lat - i.lat,
              n = e.lng - i.lng;
            if (0 === a && 0 === n)
              return t;
            var o = t.getSouthWest(),
              s = t.getNorthEast();
            return new x(new E(o.lat - a, o.lng - n), new E(s.lat - a, s.lng - n))
          }
        },
        ne = l({}, ae, {
          wrapLng: [-180, 180],
          R: 6371e3,
          distance: function (t, e) {
            var i = Math.PI / 180,
              a = t.lat * i,
              n = e.lat * i,
              o = Math.sin((e.lat - t.lat) * i / 2),
              s = Math.sin((e.lng - t.lng) * i / 2),
              r = o * o + Math.cos(a) * Math.cos(n) * s * s,
              l = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
            return this.R * l
          }
        }),
        oe = {
          R: 6378137,
          MAX_LATITUDE: 85.0511287798,
          project: function (t) {
            var e = Math.PI / 180,
              i = this.MAX_LATITUDE,
              a = Math.max(Math.min(i, t.lat), -i),
              n = Math.sin(a * e);
            return new v(this.R * t.lng * e, this.R * Math.log((1 + n) / (1 - n)) / 2)
          },
          unproject: function (t) {
            var e = 180 / Math.PI;
            return new E((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
          },
          bounds: (ie = 6378137 * Math.PI,
            new b([-ie, -ie], [ie, ie]))
        };
      P.prototype = {
        transform: function (t, e) {
          return this._transform(t.clone(), e)
        },
        _transform: function (t, e) {
          return e = e || 1,
            t.x = e * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function (t, e) {
          return e = e || 1,
            new v((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
      };
      var se, re, le, he, ue = l({}, ne, {
          code: "EPSG:3857",
          projection: oe,
          transformation: (he = .5 / (Math.PI * oe.R),
            T(he, .5, -he, .5))
        }),
        ce = l({}, ue, {
          code: "EPSG:900913"
        }),
        de = document.documentElement.style,
        fe = "ActiveXObject" in window,
        _e = fe && !document.addEventListener,
        pe = "msLaunchUri" in navigator && !("documentMode" in document),
        me = O("webkit"),
        ge = O("android"),
        ve = O("android 2") || O("android 3"),
        ye = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        be = ge && O("Google") && ye < 537 && !("AudioNode" in window),
        we = !!window.opera,
        Me = O("chrome"),
        Le = O("gecko") && !me && !we && !fe,
        xe = !Me && O("safari"),
        ke = O("phantom"),
        Ee = "OTransition" in de,
        Ce = 0 === navigator.platform.indexOf("Win"),
        Pe = fe && "transition" in de,
        Te = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !ve,
        Se = "MozPerspective" in de,
        De = !window.L_DISABLE_3D && (Pe || Te || Se) && !Ee && !ke,
        Oe = "undefined" != typeof orientation || O("mobile"),
        ze = Oe && me,
        Ie = Oe && Te,
        Ae = !window.PointerEvent && window.MSPointerEvent,
        je = !(!window.PointerEvent && !Ae),
        Re = !window.L_NO_TOUCH && (je || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        Be = Oe && we,
        Ne = Oe && Le,
        Ge = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
        Ue = !!document.createElement("canvas").getContext,
        Ze = !(!document.createElementNS || !S("svg").createSVGRect),
        Fe = !Ze && function () {
          try {
            var t = document.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return e.style.behavior = "url(#default#VML)",
              e && "object" == typeof e.adj
          } catch (t) {
            return !1
          }
        }(),
        He = (Object.freeze || Object)({
          ie: fe,
          ielt9: _e,
          edge: pe,
          webkit: me,
          android: ge,
          android23: ve,
          androidStock: be,
          opera: we,
          chrome: Me,
          gecko: Le,
          safari: xe,
          phantom: ke,
          opera12: Ee,
          win: Ce,
          ie3d: Pe,
          webkit3d: Te,
          gecko3d: Se,
          any3d: De,
          mobile: Oe,
          mobileWebkit: ze,
          mobileWebkit3d: Ie,
          msPointer: Ae,
          pointer: je,
          touch: Re,
          mobileOpera: Be,
          mobileGecko: Ne,
          retina: Ge,
          canvas: Ue,
          svg: Ze,
          vml: Fe
        }),
        qe = Ae ? "MSPointerDown" : "pointerdown",
        We = Ae ? "MSPointerMove" : "pointermove",
        Ve = Ae ? "MSPointerUp" : "pointerup",
        Ye = Ae ? "MSPointerCancel" : "pointercancel",
        Ke = ["INPUT", "SELECT", "OPTION"],
        Xe = {},
        Je = !1,
        Qe = 0,
        $e = Ae ? "MSPointerDown" : je ? "pointerdown" : "touchstart",
        ti = Ae ? "MSPointerUp" : je ? "pointerup" : "touchend",
        ei = "_leaflet_",
        ii = $(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ai = $(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        ni = "webkitTransition" === ai || "OTransition" === ai ? ai + "End" : "transitionend";
      if ("onselectstart" in document)
        se = function () {
          ht(window, "selectstart", mt)
        },
        re = function () {
          ut(window, "selectstart", mt)
        };
      else {
        var oi = $(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        se = function () {
            if (oi) {
              var t = document.documentElement.style;
              le = t[oi],
                t[oi] = "none"
            }
          },
          re = function () {
            oi && (document.documentElement.style[oi] = le,
              le = void 0)
          }
      }
      var si, ri, li, hi = (Object.freeze || Object)({
          TRANSFORM: ii,
          TRANSITION: ai,
          TRANSITION_END: ni,
          get: G,
          getStyle: U,
          create: Z,
          remove: F,
          empty: H,
          toFront: q,
          toBack: W,
          hasClass: V,
          addClass: Y,
          removeClass: K,
          setClass: X,
          getClass: J,
          setOpacity: Q,
          testProp: $,
          setTransform: tt,
          setPosition: et,
          getPosition: it,
          disableTextSelection: se,
          enableTextSelection: re,
          disableImageDrag: at,
          enableImageDrag: nt,
          preventOutline: ot,
          restoreOutline: st,
          getSizedParentNode: rt,
          getScale: lt
        }),
        ui = "_leaflet_events",
        ci = Ce && Me ? 2 * window.devicePixelRatio : Le ? window.devicePixelRatio : 1,
        di = {},
        fi = (Object.freeze || Object)({
          on: ht,
          off: ut,
          stopPropagation: ft,
          disableScrollPropagation: _t,
          disableClickPropagation: pt,
          preventDefault: mt,
          stop: gt,
          getMousePosition: vt,
          getWheelDelta: yt,
          fakeStop: bt,
          skipped: wt,
          isExternalTarget: Mt,
          addListener: ht,
          removeListener: ut
        }),
        _i = te.extend({
          run: function (t, e, i, a) {
            this.stop(),
              this._el = t,
              this._inProgress = !0,
              this._duration = i || .25,
              this._easeOutPower = 1 / Math.max(a || .5, .2),
              this._startPos = it(t),
              this._offset = e.subtract(this._startPos),
              this._startTime = +new Date,
              this.fire("start"),
              this._animate()
          },
          stop: function () {
            this._inProgress && (this._step(!0),
              this._complete())
          },
          _animate: function () {
            this._animId = w(this._animate, this),
              this._step()
          },
          _step: function (t) {
            var e = +new Date - this._startTime,
              i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
              this._complete())
          },
          _runFrame: function (t, e) {
            var i = this._startPos.add(this._offset.multiplyBy(t));
            e && i._round(),
              et(this._el, i),
              this.fire("step")
          },
          _complete: function () {
            m(this._animId),
              this._inProgress = !1,
              this.fire("end")
          },
          _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
          }
        }),
        pi = te.extend({
          options: {
            crs: ue,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
          },
          initialize: function (t, e) {
            e = s(this, e),
              this._handlers = [],
              this._layers = {},
              this._zoomBoundLayers = {},
              this._sizeChanged = !0,
              this._initContainer(t),
              this._initLayout(),
              this._onResize = _(this._onResize, this),
              this._initEvents(),
              e.maxBounds && this.setMaxBounds(e.maxBounds),
              void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
              e.center && void 0 !== e.zoom && this.setView(C(e.center), e.zoom, {
                reset: !0
              }),
              this.callInitHooks(),
              this._zoomAnimated = ai && De && !Be && this.options.zoomAnimation,
              this._zoomAnimated && (this._createAnimProxy(),
                ht(this._proxy, ni, this._catchTransitionEnd, this)),
              this._addLayers(this.options.layers)
          },
          setView: function (t, e, i) {
            return e = void 0 === e ? this._zoom : this._limitZoom(e),
              t = this._limitCenter(C(t), e, this.options.maxBounds),
              i = i || {},
              this._stop(),
              this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = l({
                    animate: i.animate
                  }, i.zoom),
                  i.pan = l({
                    animate: i.animate,
                    duration: i.duration
                  }, i.pan)),
                this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? clearTimeout(this._sizeTimer) : this._resetView(t, e),
              this
          },
          setZoom: function (t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
              zoom: e
            }) : (this._zoom = t,
              this)
          },
          zoomIn: function (t, e) {
            return t = t || (De ? this.options.zoomDelta : 1),
              this.setZoom(this._zoom + t, e)
          },
          zoomOut: function (t, e) {
            return t = t || (De ? this.options.zoomDelta : 1),
              this.setZoom(this._zoom - t, e)
          },
          setZoomAround: function (t, e, i) {
            var a = this.getZoomScale(e),
              n = this.getSize().divideBy(2),
              o = t instanceof v ? t : this.latLngToContainerPoint(t),
              s = o.subtract(n).multiplyBy(1 - 1 / a),
              r = this.containerPointToLatLng(n.add(s));
            return this.setView(r, e, {
              zoom: i
            })
          },
          _getBoundsCenterZoom: function (t, e) {
            e = e || {},
              t = t.getBounds ? t.getBounds() : k(t);
            var i = y(e.paddingTopLeft || e.padding || [0, 0]),
              a = y(e.paddingBottomRight || e.padding || [0, 0]),
              n = this.getBoundsZoom(t, !1, i.add(a));
            if ((n = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, n) : n) === 1 / 0)
              return {
                center: t.getCenter(),
                zoom: n
              };
            var o = a.subtract(i).divideBy(2),
              s = this.project(t.getSouthWest(), n),
              r = this.project(t.getNorthEast(), n);
            return {
              center: this.unproject(s.add(r).divideBy(2).add(o), n),
              zoom: n
            }
          },
          fitBounds: function (t, e) {
            if (!(t = k(t)).isValid())
              throw new Error("Bounds are not valid.");
            var i = this._getBoundsCenterZoom(t, e);
            return this.setView(i.center, i.zoom, e)
          },
          fitWorld: function (t) {
            return this.fitBounds([
              [-90, -180],
              [90, 180]
            ], t)
          },
          panTo: function (t, e) {
            return this.setView(t, this._zoom, {
              pan: e
            })
          },
          panBy: function (t, e) {
            if (t = y(t).round(),
              e = e || {},
              !t.x && !t.y)
              return this.fire("moveend");
            if (!0 !== e.animate && !this.getSize().contains(t))
              return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
                this;
            if (this._panAnim || (this._panAnim = new _i,
                this._panAnim.on({
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd
                }, this)),
              e.noMoveStart || this.fire("movestart"),
              !1 !== e.animate) {
              Y(this._mapPane, "leaflet-pan-anim");
              var i = this._getMapPanePos().subtract(t).round();
              this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else
              this._rawPanBy(t),
              this.fire("move").fire("moveend");
            return this
          },
          flyTo: function (o, s, t) {
            function e(t) {
              var e = t ? -1 : 1,
                i = t ? f : d,
                a = f * f - d * d + e * m * m * _ * _,
                n = 2 * i * m * _,
                o = a / n,
                s = Math.sqrt(o * o + 1) - o;
              return s < 1e-9 ? -18 : Math.log(s)
            }

            function i(t) {
              return (Math.exp(t) - Math.exp(-t)) / 2
            }

            function r(t) {
              return (Math.exp(t) + Math.exp(-t)) / 2
            }

            function l(t) {
              return d * (r(g) * (i(e = g + p * t) / r(e)) - i(g)) / m;
              var e
            }
            if (!1 === (t = t || {}).animate || !De)
              return this.setView(o, s, t);
            this._stop();
            var h = this.project(this.getCenter()),
              u = this.project(o),
              a = this.getSize(),
              c = this._zoom;
            o = C(o),
              s = void 0 === s ? c : s;
            var d = Math.max(a.x, a.y),
              f = d * this.getZoomScale(c, s),
              _ = u.distanceTo(h) || 1,
              p = 1.42,
              m = p * p,
              g = e(0),
              v = Date.now(),
              y = (e(1) - g) / p,
              b = t.duration ? 1e3 * t.duration : 1e3 * y * .8;
            return this._moveStart(!0, t.noMoveStart),
              function t() {
                var e, i, a = (Date.now() - v) / b,
                  n = (e = a,
                    (1 - Math.pow(1 - e, 1.5)) * y);
                a <= 1 ? (this._flyToFrame = w(t, this),
                  this._move(this.unproject(h.add(u.subtract(h).multiplyBy(l(n) / _)), c), this.getScaleZoom(d / (i = n,
                    d * (r(g) / r(g + p * i))), c), {
                    flyTo: !0
                  })) : this._move(o, s)._moveEnd(!0)
              }
              .call(this),
              this
          },
          flyToBounds: function (t, e) {
            var i = this._getBoundsCenterZoom(t, e);
            return this.flyTo(i.center, i.zoom, e)
          },
          setMaxBounds: function (t) {
            return (t = k(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
              this.options.maxBounds = t,
              this._loaded && this._panInsideMaxBounds(),
              this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
              this.off("moveend", this._panInsideMaxBounds))
          },
          setMinZoom: function (t) {
            var e = this.options.minZoom;
            return this.options.minZoom = t,
              this._loaded && e !== t && (this.fire("zoomlevelschange"),
                this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
          },
          setMaxZoom: function (t) {
            var e = this.options.maxZoom;
            return this.options.maxZoom = t,
              this._loaded && e !== t && (this.fire("zoomlevelschange"),
                this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
          },
          panInsideBounds: function (t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter(),
              a = this._limitCenter(i, this._zoom, k(t));
            return i.equals(a) || this.panTo(a, e),
              this._enforcingBounds = !1,
              this
          },
          panInside: function (t, e) {
            var i = y((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
              a = y(e.paddingBottomRight || e.padding || [0, 0]),
              n = this.getCenter(),
              o = this.project(n),
              s = this.project(t),
              r = this.getPixelBounds(),
              l = r.getSize().divideBy(2),
              h = M([r.min.add(i), r.max.subtract(a)]);
            if (!h.contains(s)) {
              this._enforcingBounds = !0;
              var u = o.subtract(s),
                c = y(s.x + u.x, s.y + u.y);
              (s.x < h.min.x || s.x > h.max.x) && (c.x = o.x - u.x,
                0 < u.x ? c.x += l.x - i.x : c.x -= l.x - a.x),
              (s.y < h.min.y || s.y > h.max.y) && (c.y = o.y - u.y,
                0 < u.y ? c.y += l.y - i.y : c.y -= l.y - a.y),
              this.panTo(this.unproject(c), e),
                this._enforcingBounds = !1
            }
            return this
          },
          invalidateSize: function (t) {
            if (!this._loaded)
              return this;
            t = l({
              animate: !1,
              pan: !0
            }, !0 === t ? {
              animate: !0
            } : t);
            var e = this.getSize();
            this._sizeChanged = !0,
              this._lastCenter = null;
            var i = this.getSize(),
              a = e.divideBy(2).round(),
              n = i.divideBy(2).round(),
              o = a.subtract(n);
            return o.x || o.y ? (t.animate && t.pan ? this.panBy(o) : (t.pan && this._rawPanBy(o),
                this.fire("move"),
                t.debounceMoveend ? (clearTimeout(this._sizeTimer),
                  this._sizeTimer = setTimeout(_(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
              this.fire("resize", {
                oldSize: e,
                newSize: i
              })) : this
          },
          stop: function () {
            return this.setZoom(this._limitZoom(this._zoom)),
              this.options.zoomSnap || this.fire("viewreset"),
              this._stop()
          },
          locate: function (t) {
            if (t = this._locateOptions = l({
                timeout: 1e4,
                watch: !1
              }, t),
              !("geolocation" in navigator))
              return this._handleGeolocationError({
                  code: 0,
                  message: "Geolocation not supported."
                }),
                this;
            var e = _(this._handleGeolocationResponse, this),
              i = _(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t),
              this
          },
          stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
              this._locateOptions && (this._locateOptions.setView = !1),
              this
          },
          _handleGeolocationError: function (t) {
            var e = t.code,
              i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
              })
          },
          _handleGeolocationResponse: function (t) {
            var e = t.coords.latitude,
              i = t.coords.longitude,
              a = new E(e, i),
              n = a.toBounds(2 * t.coords.accuracy),
              o = this._locateOptions;
            if (o.setView) {
              var s = this.getBoundsZoom(n);
              this.setView(a, o.maxZoom ? Math.min(s, o.maxZoom) : s)
            }
            var r = {
              latlng: a,
              bounds: n,
              timestamp: t.timestamp
            };
            for (var l in t.coords)
              "number" == typeof t.coords[l] && (r[l] = t.coords[l]);
            this.fire("locationfound", r)
          },
          addHandler: function (t, e) {
            if (!e)
              return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i),
              this.options[t] && i.enable(),
              this
          },
          remove: function () {
            if (this._initEvents(!0),
              this._containerId !== this._container._leaflet_id)
              throw new Error("Map container is being reused by another instance");
            try {
              delete this._container._leaflet_id,
                delete this._containerId
            } catch (t) {
              this._container._leaflet_id = void 0,
                this._containerId = void 0
            }
            var t;
            for (t in void 0 !== this._locationWatchId && this.stopLocate(),
              this._stop(),
              F(this._mapPane),
              this._clearControlPos && this._clearControlPos(),
              this._resizeRequest && (m(this._resizeRequest),
                this._resizeRequest = null),
              this._clearHandlers(),
              this._loaded && this.fire("unload"),
              this._layers)
              this._layers[t].remove();
            for (t in this._panes)
              F(this._panes[t]);
            return this._layers = [],
              this._panes = [],
              delete this._mapPane,
              delete this._renderer,
              this
          },
          createPane: function (t, e) {
            var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
              a = Z("div", i, e || this._mapPane);
            return t && (this._panes[t] = a),
              a
          },
          getCenter: function () {
            return this._checkIfLoaded(),
              this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
          },
          getZoom: function () {
            return this._zoom
          },
          getBounds: function () {
            var t = this.getPixelBounds();
            return new x(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
          },
          getMinZoom: function () {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
          },
          getMaxZoom: function () {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
          },
          getBoundsZoom: function (t, e, i) {
            t = k(t),
              i = y(i || [0, 0]);
            var a = this.getZoom() || 0,
              n = this.getMinZoom(),
              o = this.getMaxZoom(),
              s = t.getNorthWest(),
              r = t.getSouthEast(),
              l = this.getSize().subtract(i),
              h = M(this.project(r, a), this.project(s, a)).getSize(),
              u = De ? this.options.zoomSnap : 1,
              c = l.x / h.x,
              d = l.y / h.y,
              f = e ? Math.max(c, d) : Math.min(c, d);
            return a = this.getScaleZoom(f, a),
              u && (a = Math.round(a / (u / 100)) * (u / 100),
                a = e ? Math.ceil(a / u) * u : Math.floor(a / u) * u),
              Math.max(n, Math.min(o, a))
          },
          getSize: function () {
            return this._size && !this._sizeChanged || (this._size = new v(this._container.clientWidth || 0, this._container.clientHeight || 0),
                this._sizeChanged = !1),
              this._size.clone()
          },
          getPixelBounds: function (t, e) {
            var i = this._getTopLeftPoint(t, e);
            return new b(i, i.add(this.getSize()))
          },
          getPixelOrigin: function () {
            return this._checkIfLoaded(),
              this._pixelOrigin
          },
          getPixelWorldBounds: function (t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
          },
          getPane: function (t) {
            return "string" == typeof t ? this._panes[t] : t
          },
          getPanes: function () {
            return this._panes
          },
          getContainer: function () {
            return this._container
          },
          getZoomScale: function (t, e) {
            var i = this.options.crs;
            return e = void 0 === e ? this._zoom : e,
              i.scale(t) / i.scale(e)
          },
          getScaleZoom: function (t, e) {
            var i = this.options.crs;
            e = void 0 === e ? this._zoom : e;
            var a = i.zoom(t * i.scale(e));
            return isNaN(a) ? 1 / 0 : a
          },
          project: function (t, e) {
            return e = void 0 === e ? this._zoom : e,
              this.options.crs.latLngToPoint(C(t), e)
          },
          unproject: function (t, e) {
            return e = void 0 === e ? this._zoom : e,
              this.options.crs.pointToLatLng(y(t), e)
          },
          layerPointToLatLng: function (t) {
            var e = y(t).add(this.getPixelOrigin());
            return this.unproject(e)
          },
          latLngToLayerPoint: function (t) {
            return this.project(C(t))._round()._subtract(this.getPixelOrigin())
          },
          wrapLatLng: function (t) {
            return this.options.crs.wrapLatLng(C(t))
          },
          wrapLatLngBounds: function (t) {
            return this.options.crs.wrapLatLngBounds(k(t))
          },
          distance: function (t, e) {
            return this.options.crs.distance(C(t), C(e))
          },
          containerPointToLayerPoint: function (t) {
            return y(t).subtract(this._getMapPanePos())
          },
          layerPointToContainerPoint: function (t) {
            return y(t).add(this._getMapPanePos())
          },
          containerPointToLatLng: function (t) {
            var e = this.containerPointToLayerPoint(y(t));
            return this.layerPointToLatLng(e)
          },
          latLngToContainerPoint: function (t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
          },
          mouseEventToContainerPoint: function (t) {
            return vt(t, this._container)
          },
          mouseEventToLayerPoint: function (t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
          },
          mouseEventToLatLng: function (t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
          },
          _initContainer: function (t) {
            var e = this._container = G(t);
            if (!e)
              throw new Error("Map container not found.");
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
            ht(e, "scroll", this._onScroll, this),
              this._containerId = h(e)
          },
          _initLayout: function () {
            var t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && De,
              Y(t, "leaflet-container" + (Re ? " leaflet-touch" : "") + (Ge ? " leaflet-retina" : "") + (_e ? " leaflet-oldie" : "") + (xe ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var e = U(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
              this._initPanes(),
              this._initControlPos && this._initControlPos()
          },
          _initPanes: function () {
            var t = this._panes = {};
            this._paneRenderers = {},
              this._mapPane = this.createPane("mapPane", this._container),
              et(this._mapPane, new v(0, 0)),
              this.createPane("tilePane"),
              this.createPane("shadowPane"),
              this.createPane("overlayPane"),
              this.createPane("markerPane"),
              this.createPane("tooltipPane"),
              this.createPane("popupPane"),
              this.options.markerZoomAnimation || (Y(t.markerPane, "leaflet-zoom-hide"),
                Y(t.shadowPane, "leaflet-zoom-hide"))
          },
          _resetView: function (t, e) {
            et(this._mapPane, new v(0, 0));
            var i = !this._loaded;
            this._loaded = !0,
              e = this._limitZoom(e),
              this.fire("viewprereset");
            var a = this._zoom !== e;
            this._moveStart(a, !1)._move(t, e)._moveEnd(a),
              this.fire("viewreset"),
              i && this.fire("load")
          },
          _moveStart: function (t, e) {
            return t && this.fire("zoomstart"),
              e || this.fire("movestart"),
              this
          },
          _move: function (t, e, i) {
            void 0 === e && (e = this._zoom);
            var a = this._zoom !== e;
            return this._zoom = e,
              this._lastCenter = t,
              this._pixelOrigin = this._getNewPixelOrigin(t),
              (a || i && i.pinch) && this.fire("zoom", i),
              this.fire("move", i)
          },
          _moveEnd: function (t) {
            return t && this.fire("zoomend"),
              this.fire("moveend")
          },
          _stop: function () {
            return m(this._flyToFrame),
              this._panAnim && this._panAnim.stop(),
              this
          },
          _rawPanBy: function (t) {
            et(this._mapPane, this._getMapPanePos().subtract(t))
          },
          _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom()
          },
          _panInsideMaxBounds: function () {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
          },
          _checkIfLoaded: function () {
            if (!this._loaded)
              throw new Error("Set map center and zoom first.")
          },
          _initEvents: function (t) {
            this._targets = {},
              this._targets[h(this._container)] = this;
            var e = t ? ut : ht;
            e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this),
              this.options.trackResize && e(window, "resize", this._onResize, this),
              De && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
          },
          _onResize: function () {
            m(this._resizeRequest),
              this._resizeRequest = w(function () {
                this.invalidateSize({
                  debounceMoveend: !0
                })
              }, this)
          },
          _onScroll: function () {
            this._container.scrollTop = 0,
              this._container.scrollLeft = 0
          },
          _onMoveEnd: function () {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
          },
          _findEventTargets: function (t, e) {
            for (var i, a = [], n = "mouseout" === e || "mouseover" === e, o = t.target || t.srcElement, s = !1; o;) {
              if ((i = this._targets[h(o)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                s = !0;
                break
              }
              if (i && i.listens(e, !0)) {
                if (n && !Mt(o, t))
                  break;
                if (a.push(i),
                  n)
                  break
              }
              if (o === this._container)
                break;
              o = o.parentNode
            }
            return a.length || s || n || !Mt(o, t) || (a = [this]),
              a
          },
          _handleDOMEvent: function (t) {
            if (this._loaded && !wt(t)) {
              var e = t.type;
              "mousedown" !== e && "keypress" !== e || ot(t.target || t.srcElement),
                this._fireDOMEvent(t, e)
            }
          },
          _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
          _fireDOMEvent: function (t, e, i) {
            if ("click" === t.type) {
              var a = l({}, t);
              a.type = "preclick",
                this._fireDOMEvent(a, a.type, i)
            }
            if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
              var n = i[0];
              "contextmenu" === e && n.listens(e, !0) && mt(t);
              var o = {
                originalEvent: t
              };
              if ("keypress" !== t.type) {
                var s = n.getLatLng && (!n._radius || n._radius <= 10);
                o.containerPoint = s ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(t),
                  o.layerPoint = this.containerPointToLayerPoint(o.containerPoint),
                  o.latlng = s ? n.getLatLng() : this.layerPointToLatLng(o.layerPoint)
              }
              for (var r = 0; r < i.length; r++)
                if (i[r].fire(e, o, !0),
                  o.originalEvent._stopped || !1 === i[r].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e))
                  return
            }
          },
          _draggableMoved: function (t) {
            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
          },
          _clearHandlers: function () {
            for (var t = 0, e = this._handlers.length; t < e; t++)
              this._handlers[t].disable()
          },
          whenReady: function (t, e) {
            return this._loaded ? t.call(e || this, {
                target: this
              }) : this.on("load", t, e),
              this
          },
          _getMapPanePos: function () {
            return it(this._mapPane) || new v(0, 0)
          },
          _moved: function () {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
          },
          _getTopLeftPoint: function (t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
          },
          _getNewPixelOrigin: function (t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
          },
          _latLngToNewLayerPoint: function (t, e, i) {
            var a = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(a)
          },
          _latLngBoundsToNewLayerBounds: function (t, e, i) {
            var a = this._getNewPixelOrigin(i, e);
            return M([this.project(t.getSouthWest(), e)._subtract(a), this.project(t.getNorthWest(), e)._subtract(a), this.project(t.getSouthEast(), e)._subtract(a), this.project(t.getNorthEast(), e)._subtract(a)])
          },
          _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
          },
          _getCenterOffset: function (t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
          },
          _limitCenter: function (t, e, i) {
            if (!i)
              return t;
            var a = this.project(t, e),
              n = this.getSize().divideBy(2),
              o = new b(a.subtract(n), a.add(n)),
              s = this._getBoundsOffset(o, i, e);
            return s.round().equals([0, 0]) ? t : this.unproject(a.add(s), e)
          },
          _limitOffset: function (t, e) {
            if (!e)
              return t;
            var i = this.getPixelBounds(),
              a = new b(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(a, e))
          },
          _getBoundsOffset: function (t, e, i) {
            var a = M(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
              n = a.min.subtract(t.min),
              o = a.max.subtract(t.max);
            return new v(this._rebound(n.x, -o.x), this._rebound(n.y, -o.y))
          },
          _rebound: function (t, e) {
            return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
          },
          _limitZoom: function (t) {
            var e = this.getMinZoom(),
              i = this.getMaxZoom(),
              a = De ? this.options.zoomSnap : 1;
            return a && (t = Math.round(t / a) * a),
              Math.max(e, Math.min(i, t))
          },
          _onPanTransitionStep: function () {
            this.fire("move")
          },
          _onPanTransitionEnd: function () {
            K(this._mapPane, "leaflet-pan-anim"),
              this.fire("moveend")
          },
          _tryAnimatedPan: function (t, e) {
            var i = this._getCenterOffset(t)._trunc();
            return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e),
              0))
          },
          _createAnimProxy: function () {
            var t = this._proxy = Z("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t),
              this.on("zoomanim", function (t) {
                var e = ii,
                  i = this._proxy.style[e];
                tt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                  i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
              }, this),
              this.on("load moveend", function () {
                var t = this.getCenter(),
                  e = this.getZoom();
                tt(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
              }, this),
              this._on("unload", this._destroyAnimProxy, this)
          },
          _destroyAnimProxy: function () {
            F(this._proxy),
              delete this._proxy
          },
          _catchTransitionEnd: function (t) {
            this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
          },
          _nothingToAnimate: function () {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
          },
          _tryAnimatedZoom: function (t, e, i) {
            if (this._animatingZoom)
              return !0;
            if (i = i || {},
              !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
              return !1;
            var a = this.getZoomScale(e),
              n = this._getCenterOffset(t)._divideBy(1 - 1 / a);
            return !(!0 !== i.animate && !this.getSize().contains(n) || (w(function () {
                this._moveStart(!0, !1)._animateZoom(t, e, !0)
              }, this),
              0))
          },
          _animateZoom: function (t, e, i, a) {
            this._mapPane && (i && (this._animatingZoom = !0,
                this._animateToCenter = t,
                this._animateToZoom = e,
                Y(this._mapPane, "leaflet-zoom-anim")),
              this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: a
              }),
              setTimeout(_(this._onZoomTransitionEnd, this), 250))
          },
          _onZoomTransitionEnd: function () {
            this._animatingZoom && (this._mapPane && K(this._mapPane, "leaflet-zoom-anim"),
              this._animatingZoom = !1,
              this._move(this._animateToCenter, this._animateToZoom),
              w(function () {
                this._moveEnd(!0)
              }, this))
          }
        }),
        mi = g.extend({
          options: {
            position: "topright"
          },
          initialize: function (t) {
            s(this, t)
          },
          getPosition: function () {
            return this.options.position
          },
          setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this),
              this.options.position = t,
              e && e.addControl(this),
              this
          },
          getContainer: function () {
            return this._container
          },
          addTo: function (t) {
            this.remove(),
              this._map = t;
            var e = this._container = this.onAdd(t),
              i = this.getPosition(),
              a = t._controlCorners[i];
            return Y(e, "leaflet-control"),
              -1 !== i.indexOf("bottom") ? a.insertBefore(e, a.firstChild) : a.appendChild(e),
              this
          },
          remove: function () {
            return this._map && (F(this._container),
                this.onRemove && this.onRemove(this._map),
                this._map = null),
              this
          },
          _refocusOnMap: function (t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
          }
        }),
        gi = function (t) {
          return new mi(t)
        };
      pi.include({
        addControl: function (t) {
          return t.addTo(this),
            this
        },
        removeControl: function (t) {
          return t.remove(),
            this
        },
        _initControlPos: function () {
          function t(t, e) {
            var i = n + t + " " + n + e;
            a[t + e] = Z("div", i, o)
          }
          var a = this._controlCorners = {},
            n = "leaflet-",
            o = this._controlContainer = Z("div", n + "control-container", this._container);
          t("top", "left"),
            t("top", "right"),
            t("bottom", "left"),
            t("bottom", "right")
        },
        _clearControlPos: function () {
          for (var t in this._controlCorners)
            F(this._controlCorners[t]);
          F(this._controlContainer),
            delete this._controlCorners,
            delete this._controlContainer
        }
      });
      var vi = mi.extend({
          options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function (t, e, i, a) {
              return i < a ? -1 : a < i ? 1 : 0
            }
          },
          initialize: function (t, e, i) {
            for (var a in s(this, i),
                this._layerControlInputs = [],
                this._layers = [],
                this._lastZIndex = 0,
                this._handlingClick = !1,
                t)
              this._addLayer(t[a], a);
            for (a in e)
              this._addLayer(e[a], a, !0)
          },
          onAdd: function (t) {
            this._initLayout(),
              this._update(),
              (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++)
              this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
          },
          addTo: function (t) {
            return mi.prototype.addTo.call(this, t),
              this._expandIfNotCollapsed()
          },
          onRemove: function () {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++)
              this._layers[t].layer.off("add remove", this._onLayerChange, this)
          },
          addBaseLayer: function (t, e) {
            return this._addLayer(t, e),
              this._map ? this._update() : this
          },
          addOverlay: function (t, e) {
            return this._addLayer(t, e, !0),
              this._map ? this._update() : this
          },
          removeLayer: function (t) {
            t.off("add remove", this._onLayerChange, this);
            var e = this._getLayer(h(t));
            return e && this._layers.splice(this._layers.indexOf(e), 1),
              this._map ? this._update() : this
          },
          expand: function () {
            Y(this._container, "leaflet-control-layers-expanded"),
              this._section.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._section.clientHeight ? (Y(this._section, "leaflet-control-layers-scrollbar"),
                this._section.style.height = t + "px") : K(this._section, "leaflet-control-layers-scrollbar"),
              this._checkDisabledLayers(),
              this
          },
          collapse: function () {
            return K(this._container, "leaflet-control-layers-expanded"),
              this
          },
          _initLayout: function () {
            var t = "leaflet-control-layers",
              e = this._container = Z("div", t),
              i = this.options.collapsed;
            e.setAttribute("aria-haspopup", !0),
              pt(e),
              _t(e);
            var a = this._section = Z("section", t + "-list");
            i && (this._map.on("click", this.collapse, this),
              ge || ht(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
              }, this));
            var n = this._layersLink = Z("a", t + "-toggle", e);
            n.href = "#",
              n.title = "Layers",
              Re ? (ht(n, "click", gt),
                ht(n, "click", this.expand, this)) : ht(n, "focus", this.expand, this),
              i || this.expand(),
              this._baseLayersList = Z("div", t + "-base", a),
              this._separator = Z("div", t + "-separator", a),
              this._overlaysList = Z("div", t + "-overlays", a),
              e.appendChild(a)
          },
          _getLayer: function (t) {
            for (var e = 0; e < this._layers.length; e++)
              if (this._layers[e] && h(this._layers[e].layer) === t)
                return this._layers[e]
          },
          _addLayer: function (t, e, i) {
            this._map && t.on("add remove", this._onLayerChange, this),
              this._layers.push({
                layer: t,
                name: e,
                overlay: i
              }),
              this.options.sortLayers && this._layers.sort(_(function (t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
              }, this)),
              this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
                t.setZIndex(this._lastZIndex)),
              this._expandIfNotCollapsed()
          },
          _update: function () {
            if (!this._container)
              return this;
            H(this._baseLayersList),
              H(this._overlaysList),
              this._layerControlInputs = [];
            var t, e, i, a, n = 0;
            for (i = 0; i < this._layers.length; i++)
              a = this._layers[i],
              this._addItem(a),
              e = e || a.overlay,
              t = t || !a.overlay,
              n += a.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && 1 < n,
                this._baseLayersList.style.display = t ? "" : "none"),
              this._separator.style.display = e && t ? "" : "none",
              this
          },
          _onLayerChange: function (t) {
            this._handlingClick || this._update();
            var e = this._getLayer(h(t.target)),
              i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            i && this._map.fire(i, e)
          },
          _createRadioElement: function (t, e) {
            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
              a = document.createElement("div");
            return a.innerHTML = i,
              a.firstChild
          },
          _addItem: function (t) {
            var e, i = document.createElement("label"),
              a = this._map.hasLayer(t.layer);
            t.overlay ? ((e = document.createElement("input")).type = "checkbox",
                e.className = "leaflet-control-layers-selector",
                e.defaultChecked = a) : e = this._createRadioElement("leaflet-base-layers", a),
              this._layerControlInputs.push(e),
              e.layerId = h(t.layer),
              ht(e, "click", this._onInputClick, this);
            var n = document.createElement("span");
            n.innerHTML = " " + t.name;
            var o = document.createElement("div");
            return i.appendChild(o),
              o.appendChild(e),
              o.appendChild(n),
              (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
              this._checkDisabledLayers(),
              i
          },
          _onInputClick: function () {
            var t, e, i = this._layerControlInputs,
              a = [],
              n = [];
            this._handlingClick = !0;
            for (var o = i.length - 1; 0 <= o; o--)
              t = i[o],
              e = this._getLayer(t.layerId).layer,
              t.checked ? a.push(e) : t.checked || n.push(e);
            for (o = 0; o < n.length; o++)
              this._map.hasLayer(n[o]) && this._map.removeLayer(n[o]);
            for (o = 0; o < a.length; o++)
              this._map.hasLayer(a[o]) || this._map.addLayer(a[o]);
            this._handlingClick = !1,
              this._refocusOnMap()
          },
          _checkDisabledLayers: function () {
            for (var t, e, i = this._layerControlInputs, a = this._map.getZoom(), n = i.length - 1; 0 <= n; n--)
              t = i[n],
              e = this._getLayer(t.layerId).layer,
              t.disabled = void 0 !== e.options.minZoom && a < e.options.minZoom || void 0 !== e.options.maxZoom && a > e.options.maxZoom
          },
          _expandIfNotCollapsed: function () {
            return this._map && !this.options.collapsed && this.expand(),
              this
          },
          _expand: function () {
            return this.expand()
          },
          _collapse: function () {
            return this.collapse()
          }
        }),
        yi = mi.extend({
          options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
          },
          onAdd: function (t) {
            var e = "leaflet-control-zoom",
              i = Z("div", e + " leaflet-bar"),
              a = this.options;
            return this._zoomInButton = this._createButton(a.zoomInText, a.zoomInTitle, e + "-in", i, this._zoomIn),
              this._zoomOutButton = this._createButton(a.zoomOutText, a.zoomOutTitle, e + "-out", i, this._zoomOut),
              this._updateDisabled(),
              t.on("zoomend zoomlevelschange", this._updateDisabled, this),
              i
          },
          onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
          },
          disable: function () {
            return this._disabled = !0,
              this._updateDisabled(),
              this
          },
          enable: function () {
            return this._disabled = !1,
              this._updateDisabled(),
              this
          },
          _zoomIn: function (t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
          },
          _zoomOut: function (t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
          },
          _createButton: function (t, e, i, a, n) {
            var o = Z("a", i, a);
            return o.innerHTML = t,
              o.href = "#",
              o.title = e,
              o.setAttribute("role", "button"),
              o.setAttribute("aria-label", e),
              pt(o),
              ht(o, "click", gt),
              ht(o, "click", n, this),
              ht(o, "click", this._refocusOnMap, this),
              o
          },
          _updateDisabled: function () {
            var t = this._map,
              e = "leaflet-disabled";
            K(this._zoomInButton, e),
              K(this._zoomOutButton, e),
              (this._disabled || t._zoom === t.getMinZoom()) && Y(this._zoomOutButton, e),
              (this._disabled || t._zoom === t.getMaxZoom()) && Y(this._zoomInButton, e)
          }
        });
      pi.mergeOptions({
          zoomControl: !0
        }),
        pi.addInitHook(function () {
          this.options.zoomControl && (this.zoomControl = new yi,
            this.addControl(this.zoomControl))
        });
      var bi = mi.extend({
          options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
          },
          onAdd: function (t) {
            var e = Z("div", "leaflet-control-scale"),
              i = this.options;
            return this._addScales(i, "leaflet-control-scale-line", e),
              t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this),
              t.whenReady(this._update, this),
              e
          },
          onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
          },
          _addScales: function (t, e, i) {
            t.metric && (this._mScale = Z("div", e, i)),
              t.imperial && (this._iScale = Z("div", e, i))
          },
          _update: function () {
            var t = this._map,
              e = t.getSize().y / 2,
              i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(i)
          },
          _updateScales: function (t) {
            this.options.metric && t && this._updateMetric(t),
              this.options.imperial && t && this._updateImperial(t)
          },
          _updateMetric: function (t) {
            var e = this._getRoundNum(t),
              i = e < 1e3 ? e + " m" : e / 1e3 + " km";
            this._updateScale(this._mScale, i, e / t)
          },
          _updateImperial: function (t) {
            var e, i, a, n = 3.2808399 * t;
            5280 < n ? (e = n / 5280,
              i = this._getRoundNum(e),
              this._updateScale(this._iScale, i + " mi", i / e)) : (a = this._getRoundNum(n),
              this._updateScale(this._iScale, a + " ft", a / n))
          },
          _updateScale: function (t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px",
              t.innerHTML = e
          },
          _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
              i = t / e;
            return e * (i = 10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1)
          }
        }),
        wi = mi.extend({
          options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
          },
          initialize: function (t) {
            s(this, t),
              this._attributions = {}
          },
          onAdd: function (t) {
            for (var e in (t.attributionControl = this)._container = Z("div", "leaflet-control-attribution"),
                pt(this._container),
                t._layers)
              t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(),
              this._container
          },
          setPrefix: function (t) {
            return this.options.prefix = t,
              this._update(),
              this
          },
          addAttribution: function (t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0),
                this._attributions[t]++,
                this._update()),
              this
          },
          removeAttribution: function (t) {
            return t && this._attributions[t] && (this._attributions[t]--,
                this._update()),
              this
          },
          _update: function () {
            if (this._map) {
              var t = [];
              for (var e in this._attributions)
                this._attributions[e] && t.push(e);
              var i = [];
              this.options.prefix && i.push(this.options.prefix),
                t.length && i.push(t.join(", ")),
                this._container.innerHTML = i.join(" | ")
            }
          }
        });
      pi.mergeOptions({
          attributionControl: !0
        }),
        pi.addInitHook(function () {
          this.options.attributionControl && (new wi).addTo(this)
        }),
        mi.Layers = vi,
        mi.Zoom = yi,
        mi.Scale = bi,
        mi.Attribution = wi,
        gi.layers = function (t, e, i) {
          return new vi(t, e, i)
        },
        gi.zoom = function (t) {
          return new yi(t)
        },
        gi.scale = function (t) {
          return new bi(t)
        },
        gi.attribution = function (t) {
          return new wi(t)
        };
      var Mi = g.extend({
        initialize: function (t) {
          this._map = t
        },
        enable: function () {
          return this._enabled || (this._enabled = !0,
              this.addHooks()),
            this
        },
        disable: function () {
          return this._enabled && (this._enabled = !1,
              this.removeHooks()),
            this
        },
        enabled: function () {
          return !!this._enabled
        }
      });
      Mi.addTo = function (t, e) {
        return t.addHandler(e, this),
          this
      };
      var Li, xi, ki = {
          Events: $t
        },
        Ei = Re ? "touchstart mousedown" : "mousedown",
        Ci = {
          mousedown: "mouseup",
          touchstart: "touchend",
          pointerdown: "touchend",
          MSPointerDown: "touchend"
        },
        Pi = {
          mousedown: "mousemove",
          touchstart: "touchmove",
          pointerdown: "touchmove",
          MSPointerDown: "touchmove"
        },
        Ti = te.extend({
          options: {
            clickTolerance: 3
          },
          initialize: function (t, e, i, a) {
            s(this, a),
              this._element = t,
              this._dragStartTarget = e || t,
              this._preventOutline = i
          },
          enable: function () {
            this._enabled || (ht(this._dragStartTarget, Ei, this._onDown, this),
              this._enabled = !0)
          },
          disable: function () {
            this._enabled && (Ti._dragging === this && this.finishDrag(),
              ut(this._dragStartTarget, Ei, this._onDown, this),
              this._enabled = !1,
              this._moved = !1)
          },
          _onDown: function (t) {
            if (!t._simulated && this._enabled && (this._moved = !1,
                !V(this._element, "leaflet-zoom-anim") && !(Ti._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Ti._dragging = this)._preventOutline && ot(this._element),
                  at(),
                  se(),
                  this._moving)))) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t,
                i = rt(this._element);
              this._startPoint = new v(e.clientX, e.clientY),
                this._parentScale = lt(i),
                ht(document, Pi[t.type], this._onMove, this),
                ht(document, Ci[t.type], this._onUp, this)
            }
          },
          _onMove: function (t) {
            if (!t._simulated && this._enabled) {
              if (t.touches && 1 < t.touches.length)
                return void(this._moved = !0);
              var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                i = new v(e.clientX, e.clientY)._subtract(this._startPoint);
              (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x,
                i.y /= this._parentScale.y,
                mt(t),
                this._moved || (this.fire("dragstart"),
                  this._moved = !0,
                  this._startPos = it(this._element).subtract(i),
                  Y(document.body, "leaflet-dragging"),
                  this._lastTarget = t.target || t.srcElement,
                  window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
                  Y(this._lastTarget, "leaflet-drag-target")),
                this._newPos = this._startPos.add(i),
                this._moving = !0,
                m(this._animRequest),
                this._lastEvent = t,
                this._animRequest = w(this._updatePosition, this, !0)))
            }
          },
          _updatePosition: function () {
            var t = {
              originalEvent: this._lastEvent
            };
            this.fire("predrag", t),
              et(this._element, this._newPos),
              this.fire("drag", t)
          },
          _onUp: function (t) {
            !t._simulated && this._enabled && this.finishDrag()
          },
          finishDrag: function () {
            for (var t in K(document.body, "leaflet-dragging"),
                this._lastTarget && (K(this._lastTarget, "leaflet-drag-target"),
                  this._lastTarget = null),
                Pi)
              ut(document, Pi[t], this._onMove, this),
              ut(document, Ci[t], this._onUp, this);
            nt(),
              re(),
              this._moved && this._moving && (m(this._animRequest),
                this.fire("dragend", {
                  distance: this._newPos.distanceTo(this._startPos)
                })),
              this._moving = !1,
              Ti._dragging = !1
          }
        }),
        Si = (Object.freeze || Object)({
          simplify: Lt,
          pointToSegmentDistance: xt,
          closestPointOnSegment: function (t, e, i) {
            return Pt(t, e, i)
          },
          clipSegment: kt,
          _getEdgeIntersection: Et,
          _getBitCode: Ct,
          _sqClosestPointOnSegment: Pt,
          isFlat: Tt,
          _flat: St
        }),
        Di = (Object.freeze || Object)({
          clipPolygon: Dt
        }),
        Oi = {
          project: function (t) {
            return new v(t.lng, t.lat)
          },
          unproject: function (t) {
            return new E(t.y, t.x)
          },
          bounds: new b([-180, -90], [180, 90])
        },
        zi = {
          R: 6378137,
          R_MINOR: 6356752.314245179,
          bounds: new b([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
          project: function (t) {
            var e = Math.PI / 180,
              i = this.R,
              a = t.lat * e,
              n = this.R_MINOR / i,
              o = Math.sqrt(1 - n * n),
              s = o * Math.sin(a),
              r = Math.tan(Math.PI / 4 - a / 2) / Math.pow((1 - s) / (1 + s), o / 2);
            return a = -i * Math.log(Math.max(r, 1e-10)),
              new v(t.lng * e * i, a)
          },
          unproject: function (t) {
            for (var e, i = 180 / Math.PI, a = this.R, n = this.R_MINOR / a, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / a), r = Math.PI / 2 - 2 * Math.atan(s), l = 0, h = .1; l < 15 && 1e-7 < Math.abs(h); l++)
              e = o * Math.sin(r),
              e = Math.pow((1 - e) / (1 + e), o / 2),
              h = Math.PI / 2 - 2 * Math.atan(s * e) - r,
              r += h;
            return new E(r * i, t.x * i / a)
          }
        },
        Ii = (Object.freeze || Object)({
          LonLat: Oi,
          Mercator: zi,
          SphericalMercator: oe
        }),
        Ai = l({}, ne, {
          code: "EPSG:3395",
          projection: zi,
          transformation: (xi = .5 / (Math.PI * zi.R),
            T(xi, .5, -xi, .5))
        }),
        ji = l({}, ne, {
          code: "EPSG:4326",
          projection: Oi,
          transformation: T(1 / 180, 1, -1 / 180, .5)
        }),
        Ri = l({}, ae, {
          projection: Oi,
          transformation: T(1, 0, -1, 0),
          scale: function (t) {
            return Math.pow(2, t)
          },
          zoom: function (t) {
            return Math.log(t) / Math.LN2
          },
          distance: function (t, e) {
            var i = e.lng - t.lng,
              a = e.lat - t.lat;
            return Math.sqrt(i * i + a * a)
          },
          infinite: !0
        });
      ae.Earth = ne,
        ae.EPSG3395 = Ai,
        ae.EPSG3857 = ue,
        ae.EPSG900913 = ce,
        ae.EPSG4326 = ji,
        ae.Simple = Ri;
      var Bi = te.extend({
        options: {
          pane: "overlayPane",
          attribution: null,
          bubblingMouseEvents: !0
        },
        addTo: function (t) {
          return t.addLayer(this),
            this
        },
        remove: function () {
          return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function (t) {
          return t && t.removeLayer(this),
            this
        },
        getPane: function (t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function (t) {
          return this._map._targets[h(t)] = this
        },
        removeInteractiveTarget: function (t) {
          return delete this._map._targets[h(t)],
            this
        },
        getAttribution: function () {
          return this.options.attribution
        },
        _layerAdd: function (t) {
          var e = t.target;
          if (e.hasLayer(this)) {
            if (this._map = e,
              this._zoomAnimated = e._zoomAnimated,
              this.getEvents) {
              var i = this.getEvents();
              e.on(i, this),
                this.once("remove", function () {
                  e.off(i, this)
                }, this)
            }
            this.onAdd(e),
              this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
              this.fire("add"),
              e.fire("layeradd", {
                layer: this
              })
          }
        }
      });
      pi.include({
        addLayer: function (t) {
          if (!t._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var e = h(t);
          return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this,
              t.beforeAdd && t.beforeAdd(this),
              this.whenReady(t._layerAdd, t)),
            this
        },
        removeLayer: function (t) {
          var e = h(t);
          return this._layers[e] && (this._loaded && t.onRemove(this),
              t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
              delete this._layers[e],
              this._loaded && (this.fire("layerremove", {
                  layer: t
                }),
                t.fire("remove")),
              t._map = t._mapToAdd = null),
            this
        },
        hasLayer: function (t) {
          return !!t && h(t) in this._layers
        },
        eachLayer: function (t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this
        },
        _addLayers: function (t) {
          t = t ? Vt(t) ? t : [t] : [];
          for (var e = 0, i = t.length; e < i; e++)
            this.addLayer(t[e])
        },
        _addZoomLimit: function (t) {
          !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[h(t)] = t,
            this._updateZoomLevels())
        },
        _removeZoomLimit: function (t) {
          var e = h(t);
          this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
            this._updateZoomLevels())
        },
        _updateZoomLevels: function () {
          var t = 1 / 0,
            e = -1 / 0,
            i = this._getZoomSpan();
          for (var a in this._zoomBoundLayers) {
            var n = this._zoomBoundLayers[a].options;
            t = void 0 === n.minZoom ? t : Math.min(t, n.minZoom),
              e = void 0 === n.maxZoom ? e : Math.max(e, n.maxZoom)
          }
          this._layersMaxZoom = e === -1 / 0 ? void 0 : e,
            this._layersMinZoom = t === 1 / 0 ? void 0 : t,
            i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
      });
      var Ni = Bi.extend({
          initialize: function (t, e) {
            var i, a;
            if (s(this, e),
              this._layers = {},
              t)
              for (i = 0,
                a = t.length; i < a; i++)
                this.addLayer(t[i])
          },
          addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
              this._map && this._map.addLayer(t),
              this
          },
          removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
              delete this._layers[e],
              this
          },
          hasLayer: function (t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
          },
          clearLayers: function () {
            return this.eachLayer(this.removeLayer, this)
          },
          invoke: function (t) {
            var e, i, a = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)
              (i = this._layers[e])[t] && i[t].apply(i, a);
            return this
          },
          onAdd: function (t) {
            this.eachLayer(t.addLayer, t)
          },
          onRemove: function (t) {
            this.eachLayer(t.removeLayer, t)
          },
          eachLayer: function (t, e) {
            for (var i in this._layers)
              t.call(e, this._layers[i]);
            return this
          },
          getLayer: function (t) {
            return this._layers[t]
          },
          getLayers: function () {
            var t = [];
            return this.eachLayer(t.push, t),
              t
          },
          setZIndex: function (t) {
            return this.invoke("setZIndex", t)
          },
          getLayerId: function (t) {
            return h(t)
          }
        }),
        Gi = Ni.extend({
          addLayer: function (t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this),
              Ni.prototype.addLayer.call(this, t),
              this.fire("layeradd", {
                layer: t
              }))
          },
          removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
              t.removeEventParent(this),
              Ni.prototype.removeLayer.call(this, t),
              this.fire("layerremove", {
                layer: t
              })) : this
          },
          setStyle: function (t) {
            return this.invoke("setStyle", t)
          },
          bringToFront: function () {
            return this.invoke("bringToFront")
          },
          bringToBack: function () {
            return this.invoke("bringToBack")
          },
          getBounds: function () {
            var t = new x;
            for (var e in this._layers) {
              var i = this._layers[e];
              t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return t
          }
        }),
        Ui = g.extend({
          options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0]
          },
          initialize: function (t) {
            s(this, t)
          },
          createIcon: function (t) {
            return this._createIcon("icon", t)
          },
          createShadow: function (t) {
            return this._createIcon("shadow", t)
          },
          _createIcon: function (t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
              if ("icon" === t)
                throw new Error("iconUrl not set in Icon options (see the docs).");
              return null
            }
            var a = this._createImg(i, e && "IMG" === e.tagName ? e : null);
            return this._setIconStyles(a, t),
              a
          },
          _setIconStyles: function (t, e) {
            var i = this.options,
              a = i[e + "Size"];
            "number" == typeof a && (a = [a, a]);
            var n = y(a),
              o = y("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""),
              o && (t.style.marginLeft = -o.x + "px",
                t.style.marginTop = -o.y + "px"),
              n && (t.style.width = n.x + "px",
                t.style.height = n.y + "px")
          },
          _createImg: function (t, e) {
            return (e = e || document.createElement("img")).src = t,
              e
          },
          _getIconUrl: function (t) {
            return Ge && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
          }
        }),
        Zi = Ui.extend({
          options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          },
          _getIconUrl: function (t) {
            return Zi.imagePath || (Zi.imagePath = this._detectIconPath()),
              (this.options.imagePath || Zi.imagePath) + Ui.prototype._getIconUrl.call(this, t)
          },
          _detectIconPath: function () {
            var t = Z("div", "leaflet-default-icon-path", document.body),
              e = U(t, "background-image") || U(t, "backgroundImage");
            return document.body.removeChild(t),
              e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
          }
        }),
        Fi = Mi.extend({
          initialize: function (t) {
            this._marker = t
          },
          addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new Ti(t, t, !0)),
              this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this).enable(),
              Y(t, "leaflet-marker-draggable")
          },
          removeHooks: function () {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this).disable(),
              this._marker._icon && K(this._marker._icon, "leaflet-marker-draggable")
          },
          moved: function () {
            return this._draggable && this._draggable._moved
          },
          _adjustPan: function (t) {
            var e = this._marker,
              i = e._map,
              a = this._marker.options.autoPanSpeed,
              n = this._marker.options.autoPanPadding,
              o = it(e._icon),
              s = i.getPixelBounds(),
              r = i.getPixelOrigin(),
              l = M(s.min._subtract(r).add(n), s.max._subtract(r).subtract(n));
            if (!l.contains(o)) {
              var h = y((Math.max(l.max.x, o.x) - l.max.x) / (s.max.x - l.max.x) - (Math.min(l.min.x, o.x) - l.min.x) / (s.min.x - l.min.x), (Math.max(l.max.y, o.y) - l.max.y) / (s.max.y - l.max.y) - (Math.min(l.min.y, o.y) - l.min.y) / (s.min.y - l.min.y)).multiplyBy(a);
              i.panBy(h, {
                  animate: !1
                }),
                this._draggable._newPos._add(h),
                this._draggable._startPos._add(h),
                et(e._icon, this._draggable._newPos),
                this._onDrag(t),
                this._panRequest = w(this._adjustPan.bind(this, t))
            }
          },
          _onDragStart: function () {
            this._oldLatLng = this._marker.getLatLng(),
              this._marker.closePopup().fire("movestart").fire("dragstart")
          },
          _onPreDrag: function (t) {
            this._marker.options.autoPan && (m(this._panRequest),
              this._panRequest = w(this._adjustPan.bind(this, t)))
          },
          _onDrag: function (t) {
            var e = this._marker,
              i = e._shadow,
              a = it(e._icon),
              n = e._map.layerPointToLatLng(a);
            i && et(i, a),
              e._latlng = n,
              t.latlng = n,
              t.oldLatLng = this._oldLatLng,
              e.fire("move", t).fire("drag", t)
          },
          _onDragEnd: function (t) {
            m(this._panRequest),
              delete this._oldLatLng,
              this._marker.fire("moveend").fire("dragend", t)
          }
        }),
        Hi = Bi.extend({
          options: {
            icon: new Zi,
            interactive: !0,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            bubblingMouseEvents: !1,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10
          },
          initialize: function (t, e) {
            s(this, e),
              this._latlng = C(t)
          },
          onAdd: function (t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
              this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
              this._initIcon(),
              this.update()
          },
          onRemove: function (t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
                this.dragging.removeHooks()),
              delete this.dragging,
              this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
              this._removeIcon(),
              this._removeShadow()
          },
          getEvents: function () {
            return {
              zoom: this.update,
              viewreset: this.update
            }
          },
          getLatLng: function () {
            return this._latlng
          },
          setLatLng: function (t) {
            var e = this._latlng;
            return this._latlng = C(t),
              this.update(),
              this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
              })
          },
          setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t,
              this.update()
          },
          setIcon: function (t) {
            return this.options.icon = t,
              this._map && (this._initIcon(),
                this.update()),
              this._popup && this.bindPopup(this._popup, this._popup.options),
              this
          },
          getElement: function () {
            return this._icon
          },
          update: function () {
            if (this._icon && this._map) {
              var t = this._map.latLngToLayerPoint(this._latlng).round();
              this._setPos(t)
            }
            return this
          },
          _initIcon: function () {
            var t = this.options,
              e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
              i = t.icon.createIcon(this._icon),
              a = !1;
            i !== this._icon && (this._icon && this._removeIcon(),
                a = !0,
                t.title && (i.title = t.title),
                "IMG" === i.tagName && (i.alt = t.alt || "")),
              Y(i, e),
              t.keyboard && (i.tabIndex = "0"),
              this._icon = i,
              t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            var n = t.icon.createShadow(this._shadow),
              o = !1;
            n !== this._shadow && (this._removeShadow(),
                o = !0),
              n && (Y(n, e),
                n.alt = ""),
              this._shadow = n,
              t.opacity < 1 && this._updateOpacity(),
              a && this.getPane().appendChild(this._icon),
              this._initInteraction(),
              n && o && this.getPane("shadowPane").appendChild(this._shadow)
          },
          _removeIcon: function () {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              }),
              F(this._icon),
              this.removeInteractiveTarget(this._icon),
              this._icon = null
          },
          _removeShadow: function () {
            this._shadow && F(this._shadow),
              this._shadow = null
          },
          _setPos: function (t) {
            et(this._icon, t),
              this._shadow && et(this._shadow, t),
              this._zIndex = t.y + this.options.zIndexOffset,
              this._resetZIndex()
          },
          _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
          },
          _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
          },
          _initInteraction: function () {
            if (this.options.interactive && (Y(this._icon, "leaflet-interactive"),
                this.addInteractiveTarget(this._icon),
                Fi)) {
              var t = this.options.draggable;
              this.dragging && (t = this.dragging.enabled(),
                  this.dragging.disable()),
                this.dragging = new Fi(this),
                t && this.dragging.enable()
            }
          },
          setOpacity: function (t) {
            return this.options.opacity = t,
              this._map && this._updateOpacity(),
              this
          },
          _updateOpacity: function () {
            var t = this.options.opacity;
            Q(this._icon, t),
              this._shadow && Q(this._shadow, t)
          },
          _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
          },
          _resetZIndex: function () {
            this._updateZIndex(0)
          },
          _getPopupAnchor: function () {
            return this.options.icon.options.popupAnchor
          },
          _getTooltipAnchor: function () {
            return this.options.icon.options.tooltipAnchor
          }
        }),
        qi = Bi.extend({
          options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
          },
          beforeAdd: function (t) {
            this._renderer = t.getRenderer(this)
          },
          onAdd: function () {
            this._renderer._initPath(this),
              this._reset(),
              this._renderer._addPath(this)
          },
          onRemove: function () {
            this._renderer._removePath(this)
          },
          redraw: function () {
            return this._map && this._renderer._updatePath(this),
              this
          },
          setStyle: function (t) {
            return s(this, t),
              this._renderer && this._renderer._updateStyle(this),
              this
          },
          bringToFront: function () {
            return this._renderer && this._renderer._bringToFront(this),
              this
          },
          bringToBack: function () {
            return this._renderer && this._renderer._bringToBack(this),
              this
          },
          getElement: function () {
            return this._path
          },
          _reset: function () {
            this._project(),
              this._update()
          },
          _clickTolerance: function () {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
          }
        }),
        Wi = qi.extend({
          options: {
            fill: !0,
            radius: 10
          },
          initialize: function (t, e) {
            s(this, e),
              this._latlng = C(t),
              this._radius = this.options.radius
          },
          setLatLng: function (t) {
            return this._latlng = C(t),
              this.redraw(),
              this.fire("move", {
                latlng: this._latlng
              })
          },
          getLatLng: function () {
            return this._latlng
          },
          setRadius: function (t) {
            return this.options.radius = this._radius = t,
              this.redraw()
          },
          getRadius: function () {
            return this._radius
          },
          setStyle: function (t) {
            var e = t && t.radius || this._radius;
            return qi.prototype.setStyle.call(this, t),
              this.setRadius(e),
              this
          },
          _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng),
              this._updateBounds()
          },
          _updateBounds: function () {
            var t = this._radius,
              e = this._radiusY || t,
              i = this._clickTolerance(),
              a = [t + i, e + i];
            this._pxBounds = new b(this._point.subtract(a), this._point.add(a))
          },
          _update: function () {
            this._map && this._updatePath()
          },
          _updatePath: function () {
            this._renderer._updateCircle(this)
          },
          _empty: function () {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          },
          _containsPoint: function (t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
          }
        }),
        Vi = Wi.extend({
          initialize: function (t, e, i) {
            if ("number" == typeof e && (e = l({}, i, {
                radius: e
              })),
              s(this, e),
              this._latlng = C(t),
              isNaN(this.options.radius))
              throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
          },
          setRadius: function (t) {
            return this._mRadius = t,
              this.redraw()
          },
          getRadius: function () {
            return this._mRadius
          },
          getBounds: function () {
            var t = [this._radius, this._radiusY || this._radius];
            return new x(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
          },
          setStyle: qi.prototype.setStyle,
          _project: function () {
            var t = this._latlng.lng,
              e = this._latlng.lat,
              i = this._map,
              a = i.options.crs;
            if (a.distance === ne.distance) {
              var n = Math.PI / 180,
                o = this._mRadius / ne.R / n,
                s = i.project([e + o, t]),
                r = i.project([e - o, t]),
                l = s.add(r).divideBy(2),
                h = i.unproject(l).lat,
                u = Math.acos((Math.cos(o * n) - Math.sin(e * n) * Math.sin(h * n)) / (Math.cos(e * n) * Math.cos(h * n))) / n;
              (isNaN(u) || 0 === u) && (u = o / Math.cos(Math.PI / 180 * e)),
              this._point = l.subtract(i.getPixelOrigin()),
                this._radius = isNaN(u) ? 0 : l.x - i.project([h, t - u]).x,
                this._radiusY = l.y - s.y
            } else {
              var c = a.unproject(a.project(this._latlng).subtract([this._mRadius, 0]));
              this._point = i.latLngToLayerPoint(this._latlng),
                this._radius = this._point.x - i.latLngToLayerPoint(c).x
            }
            this._updateBounds()
          }
        }),
        Yi = qi.extend({
          options: {
            smoothFactor: 1,
            noClip: !1
          },
          initialize: function (t, e) {
            s(this, e),
              this._setLatLngs(t)
          },
          getLatLngs: function () {
            return this._latlngs
          },
          setLatLngs: function (t) {
            return this._setLatLngs(t),
              this.redraw()
          },
          isEmpty: function () {
            return !this._latlngs.length
          },
          closestLayerPoint: function (t) {
            for (var e, i, a = 1 / 0, n = null, o = Pt, s = 0, r = this._parts.length; s < r; s++)
              for (var l = this._parts[s], h = 1, u = l.length; h < u; h++) {
                e = l[h - 1],
                  i = l[h];
                var c = o(t, e, i, !0);
                c < a && (a = c,
                  n = o(t, e, i))
              }
            return n && (n.distance = Math.sqrt(a)),
              n
          },
          getCenter: function () {
            if (!this._map)
              throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, a, n, o, s, r = this._rings[0],
              l = r.length;
            if (!l)
              return null;
            for (e = t = 0; t < l - 1; t++)
              e += r[t].distanceTo(r[t + 1]) / 2;
            if (0 === e)
              return this._map.layerPointToLatLng(r[0]);
            for (a = t = 0; t < l - 1; t++)
              if (n = r[t],
                o = r[t + 1],
                i = n.distanceTo(o),
                (a += i) > e)
                return s = (a - e) / i,
                  this._map.layerPointToLatLng([o.x - s * (o.x - n.x), o.y - s * (o.y - n.y)])
          },
          getBounds: function () {
            return this._bounds
          },
          addLatLng: function (t, e) {
            return e = e || this._defaultShape(),
              t = C(t),
              e.push(t),
              this._bounds.extend(t),
              this.redraw()
          },
          _setLatLngs: function (t) {
            this._bounds = new x,
              this._latlngs = this._convertLatLngs(t)
          },
          _defaultShape: function () {
            return Tt(this._latlngs) ? this._latlngs : this._latlngs[0]
          },
          _convertLatLngs: function (t) {
            for (var e = [], i = Tt(t), a = 0, n = t.length; a < n; a++)
              i ? (e[a] = C(t[a]),
                this._bounds.extend(e[a])) : e[a] = this._convertLatLngs(t[a]);
            return e
          },
          _project: function () {
            var t = new b;
            this._rings = [],
              this._projectLatlngs(this._latlngs, this._rings, t);
            var e = this._clickTolerance(),
              i = new v(e, e);
            this._bounds.isValid() && t.isValid() && (t.min._subtract(i),
              t.max._add(i),
              this._pxBounds = t)
          },
          _projectLatlngs: function (t, e, i) {
            var a, n, o = t[0] instanceof E,
              s = t.length;
            if (o) {
              for (n = [],
                a = 0; a < s; a++)
                n[a] = this._map.latLngToLayerPoint(t[a]),
                i.extend(n[a]);
              e.push(n)
            } else
              for (a = 0; a < s; a++)
                this._projectLatlngs(t[a], e, i)
          },
          _clipPoints: function () {
            var t = this._renderer._bounds;
            if (this._parts = [],
              this._pxBounds && this._pxBounds.intersects(t)) {
              if (this.options.noClip)
                return void(this._parts = this._rings);
              var e, i, a, n, o, s, r, l = this._parts;
              for (a = e = 0,
                n = this._rings.length; e < n; e++)
                for (r = this._rings[e],
                  i = 0,
                  o = r.length; i < o - 1; i++)
                  (s = kt(r[i], r[i + 1], t, i, !0)) && (l[a] = l[a] || [],
                    l[a].push(s[0]),
                    s[1] === r[i + 1] && i !== o - 2 || (l[a].push(s[1]),
                      a++))
            }
          },
          _simplifyPoints: function () {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, a = t.length; i < a; i++)
              t[i] = Lt(t[i], e)
          },
          _update: function () {
            this._map && (this._clipPoints(),
              this._simplifyPoints(),
              this._updatePath())
          },
          _updatePath: function () {
            this._renderer._updatePoly(this)
          },
          _containsPoint: function (t, e) {
            var i, a, n, o, s, r, l = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t))
              return !1;
            for (i = 0,
              o = this._parts.length; i < o; i++)
              for (r = this._parts[i],
                a = 0,
                s = r.length,
                n = s - 1; a < s; n = a++)
                if ((e || 0 !== a) && xt(t, r[n], r[a]) <= l)
                  return !0;
            return !1
          }
        });
      Yi._flat = St;
      var Ki = Yi.extend({
          options: {
            fill: !0
          },
          isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length
          },
          getCenter: function () {
            if (!this._map)
              throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, a, n, o, s, r, l, h = this._rings[0],
              u = h.length;
            if (!u)
              return null;
            for (o = s = r = 0,
              t = 0,
              e = u - 1; t < u; e = t++)
              i = h[t],
              a = h[e],
              n = i.y * a.x - a.y * i.x,
              s += (i.x + a.x) * n,
              r += (i.y + a.y) * n,
              o += 3 * n;
            return l = 0 === o ? h[0] : [s / o, r / o],
              this._map.layerPointToLatLng(l)
          },
          _convertLatLngs: function (t) {
            var e = Yi.prototype._convertLatLngs.call(this, t),
              i = e.length;
            return 2 <= i && e[0] instanceof E && e[0].equals(e[i - 1]) && e.pop(),
              e
          },
          _setLatLngs: function (t) {
            Yi.prototype._setLatLngs.call(this, t),
              Tt(this._latlngs) && (this._latlngs = [this._latlngs])
          },
          _defaultShape: function () {
            return Tt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
          },
          _clipPoints: function () {
            var t = this._renderer._bounds,
              e = this.options.weight,
              i = new v(e, e);
            if (t = new b(t.min.subtract(i), t.max.add(i)),
              this._parts = [],
              this._pxBounds && this._pxBounds.intersects(t)) {
              if (this.options.noClip)
                return void(this._parts = this._rings);
              for (var a, n = 0, o = this._rings.length; n < o; n++)
                (a = Dt(this._rings[n], t, !0)).length && this._parts.push(a)
            }
          },
          _updatePath: function () {
            this._renderer._updatePoly(this, !0)
          },
          _containsPoint: function (t) {
            var e, i, a, n, o, s, r, l, h = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t))
              return !1;
            for (n = 0,
              r = this._parts.length; n < r; n++)
              for (e = this._parts[n],
                o = 0,
                l = e.length,
                s = l - 1; o < l; s = o++)
                i = e[o],
                a = e[s],
                i.y > t.y != a.y > t.y && t.x < (a.x - i.x) * (t.y - i.y) / (a.y - i.y) + i.x && (h = !h);
            return h || Yi.prototype._containsPoint.call(this, t, !0)
          }
        }),
        Xi = Gi.extend({
          initialize: function (t, e) {
            s(this, e),
              this._layers = {},
              t && this.addData(t)
          },
          addData: function (t) {
            var e, i, a, n = Vt(t) ? t : t.features;
            if (n) {
              for (e = 0,
                i = n.length; e < i; e++)
                ((a = n[e]).geometries || a.geometry || a.features || a.coordinates) && this.addData(a);
              return this
            }
            var o = this.options;
            if (o.filter && !o.filter(t))
              return this;
            var s = Ot(t, o);
            return s ? (s.feature = Bt(t),
              s.defaultOptions = s.options,
              this.resetStyle(s),
              o.onEachFeature && o.onEachFeature(t, s),
              this.addLayer(s)) : this
          },
          resetStyle: function (t) {
            return t.options = l({}, t.defaultOptions),
              this._setLayerStyle(t, this.options.style),
              this
          },
          setStyle: function (e) {
            return this.eachLayer(function (t) {
              this._setLayerStyle(t, e)
            }, this)
          },
          _setLayerStyle: function (t, e) {
            "function" == typeof e && (e = e(t.feature)),
              t.setStyle && t.setStyle(e)
          }
        }),
        Ji = {
          toGeoJSON: function (t) {
            return Rt(this, {
              type: "Point",
              coordinates: At(this.getLatLng(), t)
            })
          }
        };
      Hi.include(Ji),
        Vi.include(Ji),
        Wi.include(Ji),
        Yi.include({
          toGeoJSON: function (t) {
            var e = !Tt(this._latlngs),
              i = jt(this._latlngs, e ? 1 : 0, !1, t);
            return Rt(this, {
              type: (e ? "Multi" : "") + "LineString",
              coordinates: i
            })
          }
        }),
        Ki.include({
          toGeoJSON: function (t) {
            var e = !Tt(this._latlngs),
              i = e && !Tt(this._latlngs[0]),
              a = jt(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (a = [a]),
              Rt(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: a
              })
          }
        }),
        Ni.include({
          toMultiPoint: function (e) {
            var i = [];
            return this.eachLayer(function (t) {
                i.push(t.toGeoJSON(e).geometry.coordinates)
              }),
              Rt(this, {
                type: "MultiPoint",
                coordinates: i
              })
          },
          toGeoJSON: function (a) {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t)
              return this.toMultiPoint(a);
            var n = "GeometryCollection" === t,
              o = [];
            return this.eachLayer(function (t) {
                if (t.toGeoJSON) {
                  var e = t.toGeoJSON(a);
                  if (n)
                    o.push(e.geometry);
                  else {
                    var i = Bt(e);
                    "FeatureCollection" === i.type ? o.push.apply(o, i.features) : o.push(i)
                  }
                }
              }),
              n ? Rt(this, {
                geometries: o,
                type: "GeometryCollection"
              }) : {
                type: "FeatureCollection",
                features: o
              }
          }
        });
      var Qi = Nt,
        $i = Bi.extend({
          options: {
            opacity: 1,
            alt: "",
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: "",
            zIndex: 1,
            className: ""
          },
          initialize: function (t, e, i) {
            this._url = t,
              this._bounds = k(e),
              s(this, i)
          },
          onAdd: function () {
            this._image || (this._initImage(),
                this.options.opacity < 1 && this._updateOpacity()),
              this.options.interactive && (Y(this._image, "leaflet-interactive"),
                this.addInteractiveTarget(this._image)),
              this.getPane().appendChild(this._image),
              this._reset()
          },
          onRemove: function () {
            F(this._image),
              this.options.interactive && this.removeInteractiveTarget(this._image)
          },
          setOpacity: function (t) {
            return this.options.opacity = t,
              this._image && this._updateOpacity(),
              this
          },
          setStyle: function (t) {
            return t.opacity && this.setOpacity(t.opacity),
              this
          },
          bringToFront: function () {
            return this._map && q(this._image),
              this
          },
          bringToBack: function () {
            return this._map && W(this._image),
              this
          },
          setUrl: function (t) {
            return this._url = t,
              this._image && (this._image.src = t),
              this
          },
          setBounds: function (t) {
            return this._bounds = k(t),
              this._map && this._reset(),
              this
          },
          getEvents: function () {
            var t = {
              zoom: this._reset,
              viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
              t
          },
          setZIndex: function (t) {
            return this.options.zIndex = t,
              this._updateZIndex(),
              this
          },
          getBounds: function () {
            return this._bounds
          },
          getElement: function () {
            return this._image
          },
          _initImage: function () {
            var t = "IMG" === this._url.tagName,
              e = this._image = t ? this._url : Z("img");
            Y(e, "leaflet-image-layer"),
              this._zoomAnimated && Y(e, "leaflet-zoom-animated"),
              this.options.className && Y(e, this.options.className),
              e.onselectstart = r,
              e.onmousemove = r,
              e.onload = _(this.fire, this, "load"),
              e.onerror = _(this._overlayOnError, this, "error"),
              (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
              this.options.zIndex && this._updateZIndex(),
              t ? this._url = e.src : (e.src = this._url,
                e.alt = this.options.alt)
          },
          _animateZoom: function (t) {
            var e = this._map.getZoomScale(t.zoom),
              i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            tt(this._image, i, e)
          },
          _reset: function () {
            var t = this._image,
              e = new b(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
              i = e.getSize();
            et(t, e.min),
              t.style.width = i.x + "px",
              t.style.height = i.y + "px"
          },
          _updateOpacity: function () {
            Q(this._image, this.options.opacity)
          },
          _updateZIndex: function () {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
          },
          _overlayOnError: function () {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t,
              this._image.src = t)
          }
        }),
        ta = $i.extend({
          options: {
            autoplay: !0,
            loop: !0
          },
          _initImage: function () {
            var t = "VIDEO" === this._url.tagName,
              e = this._image = t ? this._url : Z("video");
            if (Y(e, "leaflet-image-layer"),
              this._zoomAnimated && Y(e, "leaflet-zoom-animated"),
              e.onselectstart = r,
              e.onmousemove = r,
              e.onloadeddata = _(this.fire, this, "load"),
              t) {
              for (var i = e.getElementsByTagName("source"), a = [], n = 0; n < i.length; n++)
                a.push(i[n].src);
              this._url = 0 < i.length ? a : [e.src]
            } else {
              Vt(this._url) || (this._url = [this._url]),
                e.autoplay = !!this.options.autoplay,
                e.loop = !!this.options.loop;
              for (var o = 0; o < this._url.length; o++) {
                var s = Z("source");
                s.src = this._url[o],
                  e.appendChild(s)
              }
            }
          }
        }),
        ea = Bi.extend({
          options: {
            offset: [0, 7],
            className: "",
            pane: "popupPane"
          },
          initialize: function (t, e) {
            s(this, t),
              this._source = e
          },
          onAdd: function (t) {
            this._zoomAnimated = t._zoomAnimated,
              this._container || this._initLayout(),
              t._fadeAnimated && Q(this._container, 0),
              clearTimeout(this._removeTimeout),
              this.getPane().appendChild(this._container),
              this.update(),
              t._fadeAnimated && Q(this._container, 1),
              this.bringToFront()
          },
          onRemove: function (t) {
            t._fadeAnimated ? (Q(this._container, 0),
              this._removeTimeout = setTimeout(_(F, void 0, this._container), 200)) : F(this._container)
          },
          getLatLng: function () {
            return this._latlng
          },
          setLatLng: function (t) {
            return this._latlng = C(t),
              this._map && (this._updatePosition(),
                this._adjustPan()),
              this
          },
          getContent: function () {
            return this._content
          },
          setContent: function (t) {
            return this._content = t,
              this.update(),
              this
          },
          getElement: function () {
            return this._container
          },
          update: function () {
            this._map && (this._container.style.visibility = "hidden",
              this._updateContent(),
              this._updateLayout(),
              this._updatePosition(),
              this._container.style.visibility = "",
              this._adjustPan())
          },
          getEvents: function () {
            var t = {
              zoom: this._updatePosition,
              viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
              t
          },
          isOpen: function () {
            return !!this._map && this._map.hasLayer(this)
          },
          bringToFront: function () {
            return this._map && q(this._container),
              this
          },
          bringToBack: function () {
            return this._map && W(this._container),
              this
          },
          _updateContent: function () {
            if (this._content) {
              var t = this._contentNode,
                e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
              if ("string" == typeof e)
                t.innerHTML = e;
              else {
                for (; t.hasChildNodes();)
                  t.removeChild(t.firstChild);
                t.appendChild(e)
              }
              this.fire("contentupdate")
            }
          },
          _updatePosition: function () {
            if (this._map) {
              var t = this._map.latLngToLayerPoint(this._latlng),
                e = y(this.options.offset),
                i = this._getAnchor();
              this._zoomAnimated ? et(this._container, t.add(i)) : e = e.add(t).add(i);
              var a = this._containerBottom = -e.y,
                n = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
              this._container.style.bottom = a + "px",
                this._container.style.left = n + "px"
            }
          },
          _getAnchor: function () {
            return [0, 0]
          }
        }),
        ia = ea.extend({
          options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ""
          },
          openOn: function (t) {
            return t.openPopup(this),
              this
          },
          onAdd: function (t) {
            ea.prototype.onAdd.call(this, t),
              t.fire("popupopen", {
                popup: this
              }),
              this._source && (this._source.fire("popupopen", {
                  popup: this
                }, !0),
                this._source instanceof qi || this._source.on("preclick", ft))
          },
          onRemove: function (t) {
            ea.prototype.onRemove.call(this, t),
              t.fire("popupclose", {
                popup: this
              }),
              this._source && (this._source.fire("popupclose", {
                  popup: this
                }, !0),
                this._source instanceof qi || this._source.off("preclick", ft))
          },
          getEvents: function () {
            var t = ea.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
              this.options.keepInView && (t.moveend = this._adjustPan),
              t
          },
          _close: function () {
            this._map && this._map.closePopup(this)
          },
          _initLayout: function () {
            var t = "leaflet-popup",
              e = this._container = Z("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
              i = this._wrapper = Z("div", t + "-content-wrapper", e);
            if (this._contentNode = Z("div", t + "-content", i),
              pt(i),
              _t(this._contentNode),
              ht(i, "contextmenu", ft),
              this._tipContainer = Z("div", t + "-tip-container", e),
              this._tip = Z("div", t + "-tip", this._tipContainer),
              this.options.closeButton) {
              var a = this._closeButton = Z("a", t + "-close-button", e);
              a.href = "#close",
                a.innerHTML = "&#215;",
                ht(a, "click", this._onCloseButtonClick, this)
            }
          },
          _updateLayout: function () {
            var t = this._contentNode,
              e = t.style;
            e.width = "",
              e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth),
              i = Math.max(i, this.options.minWidth),
              e.width = i + 1 + "px",
              e.whiteSpace = "",
              e.height = "";
            var a = t.offsetHeight,
              n = this.options.maxHeight;
            n && n < a ? (e.height = n + "px",
                Y(t, "leaflet-popup-scrolled")) : K(t, "leaflet-popup-scrolled"),
              this._containerWidth = this._container.offsetWidth
          },
          _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
              i = this._getAnchor();
            et(this._container, e.add(i))
          },
          _adjustPan: function () {
            if (this.options.autoPan) {
              this._map._panAnim && this._map._panAnim.stop();
              var t = this._map,
                e = parseInt(U(this._container, "marginBottom"), 10) || 0,
                i = this._container.offsetHeight + e,
                a = this._containerWidth,
                n = new v(this._containerLeft, -i - this._containerBottom);
              n._add(it(this._container));
              var o = t.layerPointToContainerPoint(n),
                s = y(this.options.autoPanPadding),
                r = y(this.options.autoPanPaddingTopLeft || s),
                l = y(this.options.autoPanPaddingBottomRight || s),
                h = t.getSize(),
                u = 0,
                c = 0;
              o.x + a + l.x > h.x && (u = o.x + a - h.x + l.x),
                o.x - u - r.x < 0 && (u = o.x - r.x),
                o.y + i + l.y > h.y && (c = o.y + i - h.y + l.y),
                o.y - c - r.y < 0 && (c = o.y - r.y),
                (u || c) && t.fire("autopanstart").panBy([u, c])
            }
          },
          _onCloseButtonClick: function (t) {
            this._close(),
              gt(t)
          },
          _getAnchor: function () {
            return y(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
          }
        });
      pi.mergeOptions({
          closePopupOnClick: !0
        }),
        pi.include({
          openPopup: function (t, e, i) {
            return t instanceof ia || (t = new ia(i).setContent(t)),
              e && t.setLatLng(e),
              this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
                this._popup = t,
                this.addLayer(t))
          },
          closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup,
                this._popup = null),
              t && this.removeLayer(t),
              this
          }
        }),
        Bi.include({
          bindPopup: function (t, e) {
            return t instanceof ia ? (s(t, e),
                (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new ia(e, this)),
                this._popup.setContent(t)),
              this._popupHandlersAdded || (this.on({
                  click: this._openPopup,
                  keypress: this._onKeyPress,
                  remove: this.closePopup,
                  move: this._movePopup
                }),
                this._popupHandlersAdded = !0),
              this
          },
          unbindPopup: function () {
            return this._popup && (this.off({
                  click: this._openPopup,
                  keypress: this._onKeyPress,
                  remove: this.closePopup,
                  move: this._movePopup
                }),
                this._popupHandlersAdded = !1,
                this._popup = null),
              this
          },
          openPopup: function (t, e) {
            if (t instanceof Bi || (e = t,
                t = this),
              t instanceof Gi)
              for (var i in this._layers) {
                t = this._layers[i];
                break
              }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
              this._popup && this._map && (this._popup._source = t,
                this._popup.update(),
                this._map.openPopup(this._popup, e)),
              this
          },
          closePopup: function () {
            return this._popup && this._popup._close(),
              this
          },
          togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
              this
          },
          isPopupOpen: function () {
            return !!this._popup && this._popup.isOpen()
          },
          setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t),
              this
          },
          getPopup: function () {
            return this._popup
          },
          _openPopup: function (t) {
            var e = t.layer || t.target;
            if (this._popup && this._map) {
              if (gt(t),
                e instanceof qi)
                return void this.openPopup(t.layer || t.target, t.latlng);
              this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng)
            }
          },
          _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
          },
          _onKeyPress: function (t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
          }
        });
      var aa = ea.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          interactive: !1,
          opacity: .9
        },
        onAdd: function (t) {
          ea.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", {
              tooltip: this
            }),
            this._source && this._source.fire("tooltipopen", {
              tooltip: this
            }, !0)
        },
        onRemove: function (t) {
          ea.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", {
              tooltip: this
            }),
            this._source && this._source.fire("tooltipclose", {
              tooltip: this
            }, !0)
        },
        getEvents: function () {
          var t = ea.prototype.getEvents.call(this);
          return Re && !this.options.permanent && (t.preclick = this._close),
            t
        },
        _close: function () {
          this._map && this._map.closeTooltip(this)
        },
        _initLayout: function () {
          var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = Z("div", t)
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
          var e = this._map,
            i = this._container,
            a = e.latLngToContainerPoint(e.getCenter()),
            n = e.layerPointToContainerPoint(t),
            o = this.options.direction,
            s = i.offsetWidth,
            r = i.offsetHeight,
            l = y(this.options.offset),
            h = this._getAnchor();
          t = "top" === o ? t.add(y(-s / 2 + l.x, -r + l.y + h.y, !0)) : "bottom" === o ? t.subtract(y(s / 2 - l.x, -l.y, !0)) : "center" === o ? t.subtract(y(s / 2 + l.x, r / 2 - h.y + l.y, !0)) : "right" === o || "auto" === o && n.x < a.x ? (o = "right",
              t.add(y(l.x + h.x, h.y - r / 2 + l.y, !0))) : (o = "left",
              t.subtract(y(s + h.x - l.x, r / 2 - h.y - l.y, !0))),
            K(i, "leaflet-tooltip-right"),
            K(i, "leaflet-tooltip-left"),
            K(i, "leaflet-tooltip-top"),
            K(i, "leaflet-tooltip-bottom"),
            Y(i, "leaflet-tooltip-" + o),
            et(i, t)
        },
        _updatePosition: function () {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t)
        },
        setOpacity: function (t) {
          this.options.opacity = t,
            this._container && Q(this._container, t)
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e)
        },
        _getAnchor: function () {
          return y(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
      });
      pi.include({
          openTooltip: function (t, e, i) {
            return t instanceof aa || (t = new aa(i).setContent(t)),
              e && t.setLatLng(e),
              this.hasLayer(t) ? this : this.addLayer(t)
          },
          closeTooltip: function (t) {
            return t && this.removeLayer(t),
              this
          }
        }),
        Bi.include({
          bindTooltip: function (t, e) {
            return t instanceof aa ? (s(t, e),
                (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new aa(e, this)),
                this._tooltip.setContent(t)),
              this._initTooltipInteractions(),
              this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
              this
          },
          unbindTooltip: function () {
            return this._tooltip && (this._initTooltipInteractions(!0),
                this.closeTooltip(),
                this._tooltip = null),
              this
          },
          _initTooltipInteractions: function (t) {
            if (t || !this._tooltipHandlersAdded) {
              var e = t ? "off" : "on",
                i = {
                  remove: this.closeTooltip,
                  move: this._moveTooltip
                };
              this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
                  i.mouseout = this.closeTooltip,
                  this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                  Re && (i.click = this._openTooltip)),
                this[e](i),
                this._tooltipHandlersAdded = !t
            }
          },
          openTooltip: function (t, e) {
            if (t instanceof Bi || (e = t,
                t = this),
              t instanceof Gi)
              for (var i in this._layers) {
                t = this._layers[i];
                break
              }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
              this._tooltip && this._map && (this._tooltip._source = t,
                this._tooltip.update(),
                this._map.openTooltip(this._tooltip, e),
                this._tooltip.options.interactive && this._tooltip._container && (Y(this._tooltip._container, "leaflet-clickable"),
                  this.addInteractiveTarget(this._tooltip._container))),
              this
          },
          closeTooltip: function () {
            return this._tooltip && (this._tooltip._close(),
                this._tooltip.options.interactive && this._tooltip._container && (K(this._tooltip._container, "leaflet-clickable"),
                  this.removeInteractiveTarget(this._tooltip._container))),
              this
          },
          toggleTooltip: function (t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
              this
          },
          isTooltipOpen: function () {
            return this._tooltip.isOpen()
          },
          setTooltipContent: function (t) {
            return this._tooltip && this._tooltip.setContent(t),
              this
          },
          getTooltip: function () {
            return this._tooltip
          },
          _openTooltip: function (t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
          },
          _moveTooltip: function (t) {
            var e, i, a = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent),
                i = this._map.containerPointToLayerPoint(e),
                a = this._map.layerPointToLatLng(i)),
              this._tooltip.setLatLng(a)
          }
        });
      var na = Ui.extend({
        options: {
          iconSize: [12, 12],
          html: !1,
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function (t) {
          var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
            i = this.options;
          if (e.innerHTML = !1 !== i.html ? i.html : "",
            i.bgPos) {
            var a = y(i.bgPos);
            e.style.backgroundPosition = -a.x + "px " + -a.y + "px"
          }
          return this._setIconStyles(e, "icon"),
            e
        },
        createShadow: function () {
          return null
        }
      });
      Ui.Default = Zi;
      var oa = Bi.extend({
          options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: Oe,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
          },
          initialize: function (t) {
            s(this, t)
          },
          onAdd: function () {
            this._initContainer(),
              this._levels = {},
              this._tiles = {},
              this._resetView(),
              this._update()
          },
          beforeAdd: function (t) {
            t._addZoomLimit(this)
          },
          onRemove: function (t) {
            this._removeAllTiles(),
              F(this._container),
              t._removeZoomLimit(this),
              this._container = null,
              this._tileZoom = void 0
          },
          bringToFront: function () {
            return this._map && (q(this._container),
                this._setAutoZIndex(Math.max)),
              this
          },
          bringToBack: function () {
            return this._map && (W(this._container),
                this._setAutoZIndex(Math.min)),
              this
          },
          getContainer: function () {
            return this._container
          },
          setOpacity: function (t) {
            return this.options.opacity = t,
              this._updateOpacity(),
              this
          },
          setZIndex: function (t) {
            return this.options.zIndex = t,
              this._updateZIndex(),
              this
          },
          isLoading: function () {
            return this._loading
          },
          redraw: function () {
            return this._map && (this._removeAllTiles(),
                this._update()),
              this
          },
          getEvents: function () {
            var t = {
              viewprereset: this._invalidateAll,
              viewreset: this._resetView,
              zoom: this._resetView,
              moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = e(this._onMoveEnd, this.options.updateInterval, this)),
                t.move = this._onMove),
              this._zoomAnimated && (t.zoomanim = this._animateZoom),
              t
          },
          createTile: function () {
            return document.createElement("div")
          },
          getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof v ? t : new v(t, t)
          },
          _updateZIndex: function () {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
          },
          _setAutoZIndex: function (t) {
            for (var e, i = this.getPane().children, a = -t(-1 / 0, 1 / 0), n = 0, o = i.length; n < o; n++)
              e = i[n].style.zIndex,
              i[n] !== this._container && e && (a = t(a, +e));
            isFinite(a) && (this.options.zIndex = a + t(-1, 1),
              this._updateZIndex())
          },
          _updateOpacity: function () {
            if (this._map && !_e) {
              Q(this._container, this.options.opacity);
              var t = +new Date,
                e = !1,
                i = !1;
              for (var a in this._tiles) {
                var n = this._tiles[a];
                if (n.current && n.loaded) {
                  var o = Math.min(1, (t - n.loaded) / 200);
                  Q(n.el, o),
                    o < 1 ? e = !0 : (n.active ? i = !0 : this._onOpaqueTile(n),
                      n.active = !0)
                }
              }
              i && !this._noPrune && this._pruneTiles(),
                e && (m(this._fadeFrame),
                  this._fadeFrame = w(this._updateOpacity, this))
            }
          },
          _onOpaqueTile: r,
          _initContainer: function () {
            this._container || (this._container = Z("div", "leaflet-layer " + (this.options.className || "")),
              this._updateZIndex(),
              this.options.opacity < 1 && this._updateOpacity(),
              this.getPane().appendChild(this._container))
          },
          _updateLevels: function () {
            var t = this._tileZoom,
              e = this.options.maxZoom;
            if (void 0 !== t) {
              for (var i in this._levels)
                this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
                  this._onUpdateLevel(i)) : (F(this._levels[i].el),
                  this._removeTilesAtZoom(i),
                  this._onRemoveLevel(i),
                  delete this._levels[i]);
              var a = this._levels[t],
                n = this._map;
              return a || ((a = this._levels[t] = {}).el = Z("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                  a.el.style.zIndex = e,
                  a.origin = n.project(n.unproject(n.getPixelOrigin()), t).round(),
                  a.zoom = t,
                  this._setZoomTransform(a, n.getCenter(), n.getZoom()),
                  a.el.offsetWidth,
                  this._onCreateLevel(a)),
                this._level = a
            }
          },
          _onUpdateLevel: r,
          _onRemoveLevel: r,
          _onCreateLevel: r,
          _pruneTiles: function () {
            if (this._map) {
              var t, e, i = this._map.getZoom();
              if (i > this.options.maxZoom || i < this.options.minZoom)
                return void this._removeAllTiles();
              for (t in this._tiles)
                (e = this._tiles[t]).retain = e.current;
              for (t in this._tiles)
                if ((e = this._tiles[t]).current && !e.active) {
                  var a = e.coords;
                  this._retainParent(a.x, a.y, a.z, a.z - 5) || this._retainChildren(a.x, a.y, a.z, a.z + 2)
                }
              for (t in this._tiles)
                this._tiles[t].retain || this._removeTile(t)
            }
          },
          _removeTilesAtZoom: function (t) {
            for (var e in this._tiles)
              this._tiles[e].coords.z === t && this._removeTile(e)
          },
          _removeAllTiles: function () {
            for (var t in this._tiles)
              this._removeTile(t)
          },
          _invalidateAll: function () {
            for (var t in this._levels)
              F(this._levels[t].el),
              this._onRemoveLevel(t),
              delete this._levels[t];
            this._removeAllTiles(),
              this._tileZoom = void 0
          },
          _retainParent: function (t, e, i, a) {
            var n = Math.floor(t / 2),
              o = Math.floor(e / 2),
              s = i - 1,
              r = new v(+n, +o);
            r.z = +s;
            var l = this._tileCoordsToKey(r),
              h = this._tiles[l];
            return h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0),
              a < s && this._retainParent(n, o, s, a))
          },
          _retainChildren: function (t, e, i, a) {
            for (var n = 2 * t; n < 2 * t + 2; n++)
              for (var o = 2 * e; o < 2 * e + 2; o++) {
                var s = new v(n, o);
                s.z = i + 1;
                var r = this._tileCoordsToKey(s),
                  l = this._tiles[r];
                l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0),
                  i + 1 < a && this._retainChildren(n, o, i + 1, a))
              }
          },
          _resetView: function (t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
          },
          _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
          },
          _clampZoom: function (t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
          },
          _setView: function (t, e, i, a) {
            var n = this._clampZoom(Math.round(e));
            (void 0 !== this.options.maxZoom && n > this.options.maxZoom || void 0 !== this.options.minZoom && n < this.options.minZoom) && (n = void 0);
            var o = this.options.updateWhenZooming && n !== this._tileZoom;
            a && !o || (this._tileZoom = n,
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== n && this._update(t),
                i || this._pruneTiles(),
                this._noPrune = !!i),
              this._setZoomTransforms(t, e)
          },
          _setZoomTransforms: function (t, e) {
            for (var i in this._levels)
              this._setZoomTransform(this._levels[i], t, e)
          },
          _setZoomTransform: function (t, e, i) {
            var a = this._map.getZoomScale(i, t.zoom),
              n = t.origin.multiplyBy(a).subtract(this._map._getNewPixelOrigin(e, i)).round();
            De ? tt(t.el, n, a) : et(t.el, n)
          },
          _resetGrid: function () {
            var t = this._map,
              e = t.options.crs,
              i = this._tileSize = this.getTileSize(),
              a = this._tileZoom,
              n = this._map.getPixelWorldBounds(this._tileZoom);
            n && (this._globalTileRange = this._pxBoundsToTileRange(n)),
              this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], a).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], a).x / i.y)],
              this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], a).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], a).y / i.y)]
          },
          _onMoveEnd: function () {
            this._map && !this._map._animatingZoom && this._update()
          },
          _getTiledPixelBounds: function (t) {
            var e = this._map,
              i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
              a = e.getZoomScale(i, this._tileZoom),
              n = e.project(t, this._tileZoom).floor(),
              o = e.getSize().divideBy(2 * a);
            return new b(n.subtract(o), n.add(o))
          },
          _update: function (t) {
            var e = this._map;
            if (e) {
              var i = this._clampZoom(e.getZoom());
              if (void 0 === t && (t = e.getCenter()),
                void 0 !== this._tileZoom) {
                var a = this._getTiledPixelBounds(t),
                  n = this._pxBoundsToTileRange(a),
                  o = n.getCenter(),
                  s = [],
                  r = this.options.keepBuffer,
                  l = new b(n.getBottomLeft().subtract([r, -r]), n.getTopRight().add([r, -r]));
                if (!(isFinite(n.min.x) && isFinite(n.min.y) && isFinite(n.max.x) && isFinite(n.max.y)))
                  throw new Error("Attempted to load an infinite number of tiles");
                for (var h in this._tiles) {
                  var u = this._tiles[h].coords;
                  u.z === this._tileZoom && l.contains(new v(u.x, u.y)) || (this._tiles[h].current = !1)
                }
                if (1 < Math.abs(i - this._tileZoom))
                  return void this._setView(t, i);
                for (var c = n.min.y; c <= n.max.y; c++)
                  for (var d = n.min.x; d <= n.max.x; d++) {
                    var f = new v(d, c);
                    if (f.z = this._tileZoom,
                      this._isValidTile(f)) {
                      var _ = this._tiles[this._tileCoordsToKey(f)];
                      _ ? _.current = !0 : s.push(f)
                    }
                  }
                if (s.sort(function (t, e) {
                    return t.distanceTo(o) - e.distanceTo(o)
                  }),
                  0 !== s.length) {
                  this._loading || (this._loading = !0,
                    this.fire("loading"));
                  var p = document.createDocumentFragment();
                  for (d = 0; d < s.length; d++)
                    this._addTile(s[d], p);
                  this._level.el.appendChild(p)
                }
              }
            }
          },
          _isValidTile: function (t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
              var i = this._globalTileRange;
              if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                return !1
            }
            if (!this.options.bounds)
              return !0;
            var a = this._tileCoordsToBounds(t);
            return k(this.options.bounds).overlaps(a)
          },
          _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
          },
          _tileCoordsToNwSe: function (t) {
            var e = this._map,
              i = this.getTileSize(),
              a = t.scaleBy(i),
              n = a.add(i);
            return [e.unproject(a, t.z), e.unproject(n, t.z)]
          },
          _tileCoordsToBounds: function (t) {
            var e = this._tileCoordsToNwSe(t),
              i = new x(e[0], e[1]);
            return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)),
              i
          },
          _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z
          },
          _keyToTileCoords: function (t) {
            var e = t.split(":"),
              i = new v(+e[0], +e[1]);
            return i.z = +e[2],
              i
          },
          _removeTile: function (t) {
            var e = this._tiles[t];
            e && (F(e.el),
              delete this._tiles[t],
              this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
              }))
          },
          _initTile: function (t) {
            Y(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px",
              t.style.height = e.y + "px",
              t.onselectstart = r,
              t.onmousemove = r,
              _e && this.options.opacity < 1 && Q(t, this.options.opacity),
              ge && !ve && (t.style.WebkitBackfaceVisibility = "hidden")
          },
          _addTile: function (t, e) {
            var i = this._getTilePos(t),
              a = this._tileCoordsToKey(t),
              n = this.createTile(this._wrapCoords(t), _(this._tileReady, this, t));
            this._initTile(n),
              this.createTile.length < 2 && w(_(this._tileReady, this, t, null, n)),
              et(n, i),
              this._tiles[a] = {
                el: n,
                coords: t,
                current: !0
              },
              e.appendChild(n),
              this.fire("tileloadstart", {
                tile: n,
                coords: t
              })
          },
          _tileReady: function (t, e, i) {
            e && this.fire("tileerror", {
              error: e,
              tile: i,
              coords: t
            });
            var a = this._tileCoordsToKey(t);
            (i = this._tiles[a]) && (i.loaded = +new Date,
              this._map._fadeAnimated ? (Q(i.el, 0),
                m(this._fadeFrame),
                this._fadeFrame = w(this._updateOpacity, this)) : (i.active = !0,
                this._pruneTiles()),
              e || (Y(i.el, "leaflet-tile-loaded"),
                this.fire("tileload", {
                  tile: i.el,
                  coords: t
                })),
              this._noTilesToLoad() && (this._loading = !1,
                this.fire("load"),
                _e || !this._map._fadeAnimated ? w(this._pruneTiles, this) : setTimeout(_(this._pruneTiles, this), 250)))
          },
          _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
          },
          _wrapCoords: function (t) {
            var e = new v(this._wrapX ? i(t.x, this._wrapX) : t.x, this._wrapY ? i(t.y, this._wrapY) : t.y);
            return e.z = t.z,
              e
          },
          _pxBoundsToTileRange: function (t) {
            var e = this.getTileSize();
            return new b(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
          },
          _noTilesToLoad: function () {
            for (var t in this._tiles)
              if (!this._tiles[t].loaded)
                return !1;
            return !0
          }
        }),
        sa = oa.extend({
          options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
          },
          initialize: function (t, e) {
            this._url = t,
              (e = s(this, e)).detectRetina && Ge && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2),
                e.zoomReverse ? (e.zoomOffset--,
                  e.minZoom++) : (e.zoomOffset++,
                  e.maxZoom--),
                e.minZoom = Math.max(0, e.minZoom)),
              "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
              ge || this.on("tileunload", this._onTileRemove)
          },
          setUrl: function (t, e) {
            return this._url === t && void 0 === e && (e = !0),
              this._url = t,
              e || this.redraw(),
              this
          },
          createTile: function (t, e) {
            var i = document.createElement("img");
            return ht(i, "load", _(this._tileOnLoad, this, e, i)),
              ht(i, "error", _(this._tileOnError, this, e, i)),
              (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
              i.alt = "",
              i.setAttribute("role", "presentation"),
              i.src = this.getTileUrl(t),
              i
          },
          getTileUrl: function (t) {
            var e = {
              r: Ge ? "@2x" : "",
              s: this._getSubdomain(t),
              x: t.x,
              y: t.y,
              z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
              var i = this._globalTileRange.max.y - t.y;
              this.options.tms && (e.y = i),
                e["-y"] = i
            }
            return o(this._url, l(e, this.options))
          },
          _tileOnLoad: function (t, e) {
            _e ? setTimeout(_(t, this, null, e), 0) : t(null, e)
          },
          _tileOnError: function (t, e, i) {
            var a = this.options.errorTileUrl;
            a && e.getAttribute("src") !== a && (e.src = a),
              t(i, e)
          },
          _onTileRemove: function (t) {
            t.tile.onload = null
          },
          _getZoomForUrl: function () {
            var t = this._tileZoom,
              e = this.options.maxZoom,
              i = this.options.zoomReverse,
              a = this.options.zoomOffset;
            return i && (t = e - t),
              t + a
          },
          _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
          },
          _abortLoading: function () {
            var t, e;
            for (t in this._tiles)
              this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = r,
                e.onerror = r,
                e.complete || (e.src = Yt,
                  F(e),
                  delete this._tiles[t]))
          },
          _removeTile: function (t) {
            var e = this._tiles[t];
            if (e)
              return be || e.el.setAttribute("src", Yt),
                oa.prototype._removeTile.call(this, t)
          },
          _tileReady: function (t, e, i) {
            if (this._map && (!i || i.getAttribute("src") !== Yt))
              return oa.prototype._tileReady.call(this, t, e, i)
          }
        }),
        ra = sa.extend({
          defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
          },
          options: {
            crs: null,
            uppercase: !1
          },
          initialize: function (t, e) {
            this._url = t;
            var i = l({}, this.defaultWmsParams);
            for (var a in e)
              a in this.options || (i[a] = e[a]);
            var n = (e = s(this, e)).detectRetina && Ge ? 2 : 1,
              o = this.getTileSize();
            i.width = o.x * n,
              i.height = o.y * n,
              this.wmsParams = i
          },
          onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs,
              this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code,
              sa.prototype.onAdd.call(this, t)
          },
          getTileUrl: function (t) {
            var e = this._tileCoordsToNwSe(t),
              i = this._crs,
              a = M(i.project(e[0]), i.project(e[1])),
              n = a.min,
              o = a.max,
              s = (1.3 <= this._wmsVersion && this._crs === ji ? [n.y, n.x, o.y, o.x] : [n.x, n.y, o.x, o.y]).join(","),
              r = sa.prototype.getTileUrl.call(this, t);
            return r + c(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s
          },
          setParams: function (t, e) {
            return l(this.wmsParams, t),
              e || this.redraw(),
              this
          }
        });
      sa.WMS = ra,
        Gt.wms = function (t, e) {
          return new ra(t, e)
        };
      var la = Bi.extend({
          options: {
            padding: .1,
            tolerance: 0
          },
          initialize: function (t) {
            s(this, t),
              h(this),
              this._layers = this._layers || {}
          },
          onAdd: function () {
            this._container || (this._initContainer(),
                this._zoomAnimated && Y(this._container, "leaflet-zoom-animated")),
              this.getPane().appendChild(this._container),
              this._update(),
              this.on("update", this._updatePaths, this)
          },
          onRemove: function () {
            this.off("update", this._updatePaths, this),
              this._destroyContainer()
          },
          getEvents: function () {
            var t = {
              viewreset: this._reset,
              zoom: this._onZoom,
              moveend: this._update,
              zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
              t
          },
          _onAnimZoom: function (t) {
            this._updateTransform(t.center, t.zoom)
          },
          _onZoom: function () {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
          },
          _updateTransform: function (t, e) {
            var i = this._map.getZoomScale(e, this._zoom),
              a = it(this._container),
              n = this._map.getSize().multiplyBy(.5 + this.options.padding),
              o = this._map.project(this._center, e),
              s = this._map.project(t, e),
              r = s.subtract(o),
              l = n.multiplyBy(-i).add(a).add(n).subtract(r);
            De ? tt(this._container, l, i) : et(this._container, l)
          },
          _reset: function () {
            for (var t in this._update(),
                this._updateTransform(this._center, this._zoom),
                this._layers)
              this._layers[t]._reset()
          },
          _onZoomEnd: function () {
            for (var t in this._layers)
              this._layers[t]._project()
          },
          _updatePaths: function () {
            for (var t in this._layers)
              this._layers[t]._update()
          },
          _update: function () {
            var t = this.options.padding,
              e = this._map.getSize(),
              i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new b(i, i.add(e.multiplyBy(1 + 2 * t)).round()),
              this._center = this._map.getCenter(),
              this._zoom = this._map.getZoom()
          }
        }),
        ha = la.extend({
          getEvents: function () {
            var t = la.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset,
              t
          },
          _onViewPreReset: function () {
            this._postponeUpdatePaths = !0
          },
          onAdd: function () {
            la.prototype.onAdd.call(this),
              this._draw()
          },
          _initContainer: function () {
            var t = this._container = document.createElement("canvas");
            ht(t, "mousemove", e(this._onMouseMove, 32, this), this),
              ht(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
              ht(t, "mouseout", this._handleMouseOut, this),
              this._ctx = t.getContext("2d")
          },
          _destroyContainer: function () {
            m(this._redrawRequest),
              delete this._ctx,
              F(this._container),
              ut(this._container),
              delete this._container
          },
          _updatePaths: function () {
            if (!this._postponeUpdatePaths) {
              for (var t in this._redrawBounds = null,
                  this._layers)
                this._layers[t]._update();
              this._redraw()
            }
          },
          _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
              la.prototype._update.call(this);
              var t = this._bounds,
                e = this._container,
                i = t.getSize(),
                a = Ge ? 2 : 1;
              et(e, t.min),
                e.width = a * i.x,
                e.height = a * i.y,
                e.style.width = i.x + "px",
                e.style.height = i.y + "px",
                Ge && this._ctx.scale(2, 2),
                this._ctx.translate(-t.min.x, -t.min.y),
                this.fire("update")
            }
          },
          _reset: function () {
            la.prototype._reset.call(this),
              this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
                this._updatePaths())
          },
          _initPath: function (t) {
            this._updateDashArray(t);
            var e = (this._layers[h(t)] = t)._order = {
              layer: t,
              prev: this._drawLast,
              next: null
            };
            this._drawLast && (this._drawLast.next = e),
              this._drawLast = e,
              this._drawFirst = this._drawFirst || this._drawLast
          },
          _addPath: function (t) {
            this._requestRedraw(t)
          },
          _removePath: function (t) {
            var e = t._order,
              i = e.next,
              a = e.prev;
            i ? i.prev = a : this._drawLast = a,
              a ? a.next = i : this._drawFirst = i,
              delete t._order,
              delete this._layers[h(t)],
              this._requestRedraw(t)
          },
          _updatePath: function (t) {
            this._extendRedrawBounds(t),
              t._project(),
              t._update(),
              this._requestRedraw(t)
          },
          _updateStyle: function (t) {
            this._updateDashArray(t),
              this._requestRedraw(t)
          },
          _updateDashArray: function (t) {
            if ("string" == typeof t.options.dashArray) {
              var e, i, a = t.options.dashArray.split(/[, ]+/),
                n = [];
              for (i = 0; i < a.length; i++) {
                if (e = Number(a[i]),
                  isNaN(e))
                  return;
                n.push(e)
              }
              t.options._dashArray = n
            } else
              t.options._dashArray = t.options.dashArray
          },
          _requestRedraw: function (t) {
            this._map && (this._extendRedrawBounds(t),
              this._redrawRequest = this._redrawRequest || w(this._redraw, this))
          },
          _extendRedrawBounds: function (t) {
            if (t._pxBounds) {
              var e = (t.options.weight || 0) + 1;
              this._redrawBounds = this._redrawBounds || new b,
                this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
            }
          },
          _redraw: function () {
            this._redrawRequest = null,
              this._redrawBounds && (this._redrawBounds.min._floor(),
                this._redrawBounds.max._ceil()),
              this._clear(),
              this._draw(),
              this._redrawBounds = null
          },
          _clear: function () {
            var t = this._redrawBounds;
            if (t) {
              var e = t.getSize();
              this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
            } else
              this._ctx.clearRect(0, 0, this._container.width, this._container.height)
          },
          _draw: function () {
            var t, e = this._redrawBounds;
            if (this._ctx.save(),
              e) {
              var i = e.getSize();
              this._ctx.beginPath(),
                this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
                this._ctx.clip()
            }
            this._drawing = !0;
            for (var a = this._drawFirst; a; a = a.next)
              t = a.layer,
              (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
            this._drawing = !1,
              this._ctx.restore()
          },
          _updatePoly: function (t, e) {
            if (this._drawing) {
              var i, a, n, o, s = t._parts,
                r = s.length,
                l = this._ctx;
              if (r) {
                for (l.beginPath(),
                  i = 0; i < r; i++) {
                  for (a = 0,
                    n = s[i].length; a < n; a++)
                    o = s[i][a],
                    l[a ? "lineTo" : "moveTo"](o.x, o.y);
                  e && l.closePath()
                }
                this._fillStroke(l, t)
              }
            }
          },
          _updateCircle: function (t) {
            if (this._drawing && !t._empty()) {
              var e = t._point,
                i = this._ctx,
                a = Math.max(Math.round(t._radius), 1),
                n = (Math.max(Math.round(t._radiusY), 1) || a) / a;
              1 !== n && (i.save(),
                  i.scale(1, n)),
                i.beginPath(),
                i.arc(e.x, e.y / n, a, 0, 2 * Math.PI, !1),
                1 !== n && i.restore(),
                this._fillStroke(i, t)
            }
          },
          _fillStroke: function (t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity,
                t.fillStyle = i.fillColor || i.color,
                t.fill(i.fillRule || "evenodd")),
              i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
                t.globalAlpha = i.opacity,
                t.lineWidth = i.weight,
                t.strokeStyle = i.color,
                t.lineCap = i.lineCap,
                t.lineJoin = i.lineJoin,
                t.stroke())
          },
          _onClick: function (t) {
            for (var e, i, a = this._map.mouseEventToLayerPoint(t), n = this._drawFirst; n; n = n.next)
              (e = n.layer).options.interactive && e._containsPoint(a) && !this._map._draggableMoved(e) && (i = e);
            i && (bt(t),
              this._fireEvent([i], t))
          },
          _onMouseMove: function (t) {
            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
              var e = this._map.mouseEventToLayerPoint(t);
              this._handleMouseHover(t, e)
            }
          },
          _handleMouseOut: function (t) {
            var e = this._hoveredLayer;
            e && (K(this._container, "leaflet-interactive"),
              this._fireEvent([e], t, "mouseout"),
              this._hoveredLayer = null)
          },
          _handleMouseHover: function (t, e) {
            for (var i, a, n = this._drawFirst; n; n = n.next)
              (i = n.layer).options.interactive && i._containsPoint(e) && (a = i);
            a !== this._hoveredLayer && (this._handleMouseOut(t),
                a && (Y(this._container, "leaflet-interactive"),
                  this._fireEvent([a], t, "mouseover"),
                  this._hoveredLayer = a)),
              this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
          },
          _fireEvent: function (t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
          },
          _bringToFront: function (t) {
            var e = t._order;
            if (e) {
              var i = e.next,
                a = e.prev;
              i && ((i.prev = a) ? a.next = i : i && (this._drawFirst = i),
                e.prev = this._drawLast,
                (this._drawLast.next = e).next = null,
                this._drawLast = e,
                this._requestRedraw(t))
            }
          },
          _bringToBack: function (t) {
            var e = t._order;
            if (e) {
              var i = e.next,
                a = e.prev;
              a && ((a.next = i) ? i.prev = a : a && (this._drawLast = a),
                e.prev = null,
                e.next = this._drawFirst,
                this._drawFirst.prev = e,
                this._drawFirst = e,
                this._requestRedraw(t))
            }
          }
        }),
        ua = function () {
          try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
              function (t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
              }
          } catch (t) {
            return function (t) {
              return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
          }
        }(),
        ca = {
          _initContainer: function () {
            this._container = Z("div", "leaflet-vml-container")
          },
          _update: function () {
            this._map._animatingZoom || (la.prototype._update.call(this),
              this.fire("update"))
          },
          _initPath: function (t) {
            var e = t._container = ua("shape");
            Y(e, "leaflet-vml-shape " + (this.options.className || "")),
              e.coordsize = "1 1",
              t._path = ua("path"),
              e.appendChild(t._path),
              this._updateStyle(t),
              this._layers[h(t)] = t
          },
          _addPath: function (t) {
            var e = t._container;
            this._container.appendChild(e),
              t.options.interactive && t.addInteractiveTarget(e)
          },
          _removePath: function (t) {
            var e = t._container;
            F(e),
              t.removeInteractiveTarget(e),
              delete this._layers[h(t)]
          },
          _updateStyle: function (t) {
            var e = t._stroke,
              i = t._fill,
              a = t.options,
              n = t._container;
            n.stroked = !!a.stroke,
              n.filled = !!a.fill,
              a.stroke ? (e || (e = t._stroke = ua("stroke")),
                n.appendChild(e),
                e.weight = a.weight + "px",
                e.color = a.color,
                e.opacity = a.opacity,
                a.dashArray ? e.dashStyle = Vt(a.dashArray) ? a.dashArray.join(" ") : a.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
                e.endcap = a.lineCap.replace("butt", "flat"),
                e.joinstyle = a.lineJoin) : e && (n.removeChild(e),
                t._stroke = null),
              a.fill ? (i || (i = t._fill = ua("fill")),
                n.appendChild(i),
                i.color = a.fillColor || a.color,
                i.opacity = a.fillOpacity) : i && (n.removeChild(i),
                t._fill = null)
          },
          _updateCircle: function (t) {
            var e = t._point.round(),
              i = Math.round(t._radius),
              a = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + a + " 0,23592600")
          },
          _setPath: function (t, e) {
            t._path.v = e
          },
          _bringToFront: function (t) {
            q(t._container)
          },
          _bringToBack: function (t) {
            W(t._container)
          }
        },
        da = Fe ? ua : S,
        fa = la.extend({
          getEvents: function () {
            var t = la.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart,
              t
          },
          _initContainer: function () {
            this._container = da("svg"),
              this._container.setAttribute("pointer-events", "none"),
              this._rootGroup = da("g"),
              this._container.appendChild(this._rootGroup)
          },
          _destroyContainer: function () {
            F(this._container),
              ut(this._container),
              delete this._container,
              delete this._rootGroup,
              delete this._svgSize
          },
          _onZoomStart: function () {
            this._update()
          },
          _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
              la.prototype._update.call(this);
              var t = this._bounds,
                e = t.getSize(),
                i = this._container;
              this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
                  i.setAttribute("width", e.x),
                  i.setAttribute("height", e.y)),
                et(i, t.min),
                i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                this.fire("update")
            }
          },
          _initPath: function (t) {
            var e = t._path = da("path");
            t.options.className && Y(e, t.options.className),
              t.options.interactive && Y(e, "leaflet-interactive"),
              this._updateStyle(t),
              this._layers[h(t)] = t
          },
          _addPath: function (t) {
            this._rootGroup || this._initContainer(),
              this._rootGroup.appendChild(t._path),
              t.addInteractiveTarget(t._path)
          },
          _removePath: function (t) {
            F(t._path),
              t.removeInteractiveTarget(t._path),
              delete this._layers[h(t)]
          },
          _updatePath: function (t) {
            t._project(),
              t._update()
          },
          _updateStyle: function (t) {
            var e = t._path,
              i = t.options;
            e && (i.stroke ? (e.setAttribute("stroke", i.color),
                e.setAttribute("stroke-opacity", i.opacity),
                e.setAttribute("stroke-width", i.weight),
                e.setAttribute("stroke-linecap", i.lineCap),
                e.setAttribute("stroke-linejoin", i.lineJoin),
                i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"),
                i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
              i.fill ? (e.setAttribute("fill", i.fillColor || i.color),
                e.setAttribute("fill-opacity", i.fillOpacity),
                e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
          },
          _updatePoly: function (t, e) {
            this._setPath(t, D(t._parts, e))
          },
          _updateCircle: function (t) {
            var e = t._point,
              i = Math.max(Math.round(t._radius), 1),
              a = Math.max(Math.round(t._radiusY), 1) || i,
              n = "a" + i + "," + a + " 0 1,0 ",
              o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
            this._setPath(t, o)
          },
          _setPath: function (t, e) {
            t._path.setAttribute("d", e)
          },
          _bringToFront: function (t) {
            q(t._path)
          },
          _bringToBack: function (t) {
            W(t._path)
          }
        });
      Fe && fa.include(ca),
        pi.include({
          getRenderer: function (t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this._createRenderer()),
              this.hasLayer(e) || this.addLayer(e),
              e
          },
          _getPaneRenderer: function (t) {
            if ("overlayPane" === t || void 0 === t)
              return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = this._createRenderer({
                  pane: t
                }),
                this._paneRenderers[t] = e),
              e
          },
          _createRenderer: function (t) {
            return this.options.preferCanvas && Ut(t) || Zt(t)
          }
        });
      var _a = Ki.extend({
        initialize: function (t, e) {
          Ki.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function (t) {
          return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function (t) {
          return [(t = k(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
      });
      fa.create = da,
        fa.pointsToPath = D,
        Xi.geometryToLayer = Ot,
        Xi.coordsToLatLng = zt,
        Xi.coordsToLatLngs = It,
        Xi.latLngToCoords = At,
        Xi.latLngsToCoords = jt,
        Xi.getFeature = Rt,
        Xi.asFeature = Bt,
        pi.mergeOptions({
          boxZoom: !0
        });
      var pa = Mi.extend({
        initialize: function (t) {
          this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._resetStateTimeout = 0,
            t.on("unload", this._destroy, this)
        },
        addHooks: function () {
          ht(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function () {
          ut(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function () {
          return this._moved
        },
        _destroy: function () {
          F(this._pane),
            delete this._pane
        },
        _resetState: function () {
          this._resetStateTimeout = 0,
            this._moved = !1
        },
        _clearDeferredResetState: function () {
          0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
            this._resetStateTimeout = 0)
        },
        _onMouseDown: function (t) {
          if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
            return !1;
          this._clearDeferredResetState(),
            this._resetState(),
            se(),
            at(),
            this._startPoint = this._map.mouseEventToContainerPoint(t),
            ht(document, {
              contextmenu: gt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function (t) {
          this._moved || (this._moved = !0,
              this._box = Z("div", "leaflet-zoom-box", this._container),
              Y(this._container, "leaflet-crosshair"),
              this._map.fire("boxzoomstart")),
            this._point = this._map.mouseEventToContainerPoint(t);
          var e = new b(this._point, this._startPoint),
            i = e.getSize();
          et(this._box, e.min),
            this._box.style.width = i.x + "px",
            this._box.style.height = i.y + "px"
        },
        _finish: function () {
          this._moved && (F(this._box),
              K(this._container, "leaflet-crosshair")),
            re(),
            nt(),
            ut(document, {
              contextmenu: gt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function (t) {
          if ((1 === t.which || 1 === t.button) && (this._finish(),
              this._moved)) {
            this._clearDeferredResetState(),
              this._resetStateTimeout = setTimeout(_(this._resetState, this), 0);
            var e = new x(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
            this._map.fitBounds(e).fire("boxzoomend", {
              boxZoomBounds: e
            })
          }
        },
        _onKeyDown: function (t) {
          27 === t.keyCode && this._finish()
        }
      });
      pi.addInitHook("addHandler", "boxZoom", pa),
        pi.mergeOptions({
          doubleClickZoom: !0
        });
      var ma = Mi.extend({
        addHooks: function () {
          this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function () {
          this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function (t) {
          var e = this._map,
            i = e.getZoom(),
            a = e.options.zoomDelta,
            n = t.originalEvent.shiftKey ? i - a : i + a;
          "center" === e.options.doubleClickZoom ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n)
        }
      });
      pi.addInitHook("addHandler", "doubleClickZoom", ma),
        pi.mergeOptions({
          dragging: !0,
          inertia: !ve,
          inertiaDeceleration: 3400,
          inertiaMaxSpeed: 1 / 0,
          easeLinearity: .2,
          worldCopyJump: !1,
          maxBoundsViscosity: 0
        });
      var ga = Mi.extend({
        addHooks: function () {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new Ti(t._mapPane, t._container),
              this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this),
              this._draggable.on("predrag", this._onPreDragLimit, this),
              t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
                t.on("zoomend", this._onZoomEnd, this),
                t.whenReady(this._onZoomEnd, this))
          }
          Y(this._map._container, "leaflet-grab leaflet-touch-drag"),
            this._draggable.enable(),
            this._positions = [],
            this._times = []
        },
        removeHooks: function () {
          K(this._map._container, "leaflet-grab"),
            K(this._map._container, "leaflet-touch-drag"),
            this._draggable.disable()
        },
        moved: function () {
          return this._draggable && this._draggable._moved
        },
        moving: function () {
          return this._draggable && this._draggable._moving
        },
        _onDragStart: function () {
          var t = this._map;
          if (t._stop(),
            this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var e = k(this._map.options.maxBounds);
            this._offsetLimit = M(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
              this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
          } else
            this._offsetLimit = null;
          t.fire("movestart").fire("dragstart"),
            t.options.inertia && (this._positions = [],
              this._times = [])
        },
        _onDrag: function (t) {
          if (this._map.options.inertia) {
            var e = this._lastTime = +new Date,
              i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(i),
              this._times.push(e),
              this._prunePositions(e)
          }
          this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function (t) {
          for (; 1 < this._positions.length && 50 < t - this._times[0];)
            this._positions.shift(),
            this._times.shift()
        },
        _onZoomEnd: function () {
          var t = this._map.getSize().divideBy(2),
            e = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = e.subtract(t).x,
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function (t, e) {
          return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function () {
          if (this._viscosity && this._offsetLimit) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos),
              e = this._offsetLimit;
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
              t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
              t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
              t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
              this._draggable._newPos = this._draggable._startPos.add(t)
          }
        },
        _onPreDragWrap: function () {
          var t = this._worldWidth,
            e = Math.round(t / 2),
            i = this._initialWorldOffset,
            a = this._draggable._newPos.x,
            n = (a - e + i) % t + e - i,
            o = (a + e + i) % t - e - i,
            s = Math.abs(n + i) < Math.abs(o + i) ? n : o;
          this._draggable._absPos = this._draggable._newPos.clone(),
            this._draggable._newPos.x = s
        },
        _onDragEnd: function (t) {
          var e = this._map,
            i = e.options,
            a = !i.inertia || this._times.length < 2;
          if (e.fire("dragend", t),
            a)
            e.fire("moveend");
          else {
            this._prunePositions(+new Date);
            var n = this._lastPos.subtract(this._positions[0]),
              o = (this._lastTime - this._times[0]) / 1e3,
              s = i.easeLinearity,
              r = n.multiplyBy(s / o),
              l = r.distanceTo([0, 0]),
              h = Math.min(i.inertiaMaxSpeed, l),
              u = r.multiplyBy(h / l),
              c = h / (i.inertiaDeceleration * s),
              d = u.multiplyBy(-c / 2).round();
            d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds),
              w(function () {
                e.panBy(d, {
                  duration: c,
                  easeLinearity: s,
                  noMoveStart: !0,
                  animate: !0
                })
              })) : e.fire("moveend")
          }
        }
      });
      pi.addInitHook("addHandler", "dragging", ga),
        pi.mergeOptions({
          keyboard: !0,
          keyboardPanDelta: 80
        });
      var va = Mi.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function (t) {
          this._map = t,
            this._setPanDelta(t.options.keyboardPanDelta),
            this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function () {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = "0"),
            ht(t, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this),
            this._map.on({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this)
        },
        removeHooks: function () {
          this._removeHooks(),
            ut(this._map._container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this),
            this._map.off({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function () {
          if (!this._focused) {
            var t = document.body,
              e = document.documentElement,
              i = t.scrollTop || e.scrollTop,
              a = t.scrollLeft || e.scrollLeft;
            this._map._container.focus(),
              window.scrollTo(a, i)
          }
        },
        _onFocus: function () {
          this._focused = !0,
            this._map.fire("focus")
        },
        _onBlur: function () {
          this._focused = !1,
            this._map.fire("blur")
        },
        _setPanDelta: function (t) {
          var e, i, a = this._panKeys = {},
            n = this.keyCodes;
          for (e = 0,
            i = n.left.length; e < i; e++)
            a[n.left[e]] = [-1 * t, 0];
          for (e = 0,
            i = n.right.length; e < i; e++)
            a[n.right[e]] = [t, 0];
          for (e = 0,
            i = n.down.length; e < i; e++)
            a[n.down[e]] = [0, t];
          for (e = 0,
            i = n.up.length; e < i; e++)
            a[n.up[e]] = [0, -1 * t]
        },
        _setZoomDelta: function (t) {
          var e, i, a = this._zoomKeys = {},
            n = this.keyCodes;
          for (e = 0,
            i = n.zoomIn.length; e < i; e++)
            a[n.zoomIn[e]] = t;
          for (e = 0,
            i = n.zoomOut.length; e < i; e++)
            a[n.zoomOut[e]] = -t
        },
        _addHooks: function () {
          ht(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function () {
          ut(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function (t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e, i = t.keyCode,
              a = this._map;
            if (i in this._panKeys)
              a._panAnim && a._panAnim._inProgress || (e = this._panKeys[i],
                t.shiftKey && (e = y(e).multiplyBy(3)),
                a.panBy(e),
                a.options.maxBounds && a.panInsideBounds(a.options.maxBounds));
            else if (i in this._zoomKeys)
              a.setZoom(a.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
            else {
              if (27 !== i || !a._popup || !a._popup.options.closeOnEscapeKey)
                return;
              a.closePopup()
            }
            gt(t)
          }
        }
      });
      pi.addInitHook("addHandler", "keyboard", va),
        pi.mergeOptions({
          scrollWheelZoom: !0,
          wheelDebounceTime: 40,
          wheelPxPerZoomLevel: 60
        });
      var ya = Mi.extend({
        addHooks: function () {
          ht(this._map._container, "mousewheel", this._onWheelScroll, this),
            this._delta = 0
        },
        removeHooks: function () {
          ut(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function (t) {
          var e = yt(t),
            i = this._map.options.wheelDebounceTime;
          this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date);
          var a = Math.max(i - (+new Date - this._startTime), 0);
          clearTimeout(this._timer),
            this._timer = setTimeout(_(this._performZoom, this), a),
            gt(t)
        },
        _performZoom: function () {
          var t = this._map,
            e = t.getZoom(),
            i = this._map.options.zoomSnap || 0;
          t._stop();
          var a = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
            n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(a)))) / Math.LN2,
            o = i ? Math.ceil(n / i) * i : n,
            s = t._limitZoom(e + (0 < this._delta ? o : -o)) - e;
          this._delta = 0,
            this._startTime = null,
            s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
        }
      });
      pi.addInitHook("addHandler", "scrollWheelZoom", ya),
        pi.mergeOptions({
          tap: !0,
          tapTolerance: 15
        });
      var ba = Mi.extend({
        addHooks: function () {
          ht(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function () {
          ut(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function (t) {
          if (t.touches) {
            if (mt(t),
              this._fireClick = !0,
              1 < t.touches.length)
              return this._fireClick = !1,
                void clearTimeout(this._holdTimeout);
            var e = t.touches[0],
              i = e.target;
            this._startPos = this._newPos = new v(e.clientX, e.clientY),
              i.tagName && "a" === i.tagName.toLowerCase() && Y(i, "leaflet-active"),
              this._holdTimeout = setTimeout(_(function () {
                this._isTapValid() && (this._fireClick = !1,
                  this._onUp(),
                  this._simulateEvent("contextmenu", e))
              }, this), 1e3),
              this._simulateEvent("mousedown", e),
              ht(document, {
                touchmove: this._onMove,
                touchend: this._onUp
              }, this)
          }
        },
        _onUp: function (t) {
          if (clearTimeout(this._holdTimeout),
            ut(document, {
              touchmove: this._onMove,
              touchend: this._onUp
            }, this),
            this._fireClick && t && t.changedTouches) {
            var e = t.changedTouches[0],
              i = e.target;
            i && i.tagName && "a" === i.tagName.toLowerCase() && K(i, "leaflet-active"),
              this._simulateEvent("mouseup", e),
              this._isTapValid() && this._simulateEvent("click", e)
          }
        },
        _isTapValid: function () {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function (t) {
          var e = t.touches[0];
          this._newPos = new v(e.clientX, e.clientY),
            this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function (t, e) {
          var i = document.createEvent("MouseEvents");
          i._simulated = !0,
            e.target._simulatedClick = !0,
            i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(i)
        }
      });
      Re && !je && pi.addInitHook("addHandler", "tap", ba),
        pi.mergeOptions({
          touchZoom: Re && !ve,
          bounceAtZoomLimits: !0
        });
      var wa = Mi.extend({
        addHooks: function () {
          Y(this._map._container, "leaflet-touch-zoom"),
            ht(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function () {
          K(this._map._container, "leaflet-touch-zoom"),
            ut(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function (t) {
          var e = this._map;
          if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
            var i = e.mouseEventToContainerPoint(t.touches[0]),
              a = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2),
              this._startLatLng = e.containerPointToLatLng(this._centerPoint),
              "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(a)._divideBy(2))),
              this._startDist = i.distanceTo(a),
              this._startZoom = e.getZoom(),
              this._moved = !1,
              this._zooming = !0,
              e._stop(),
              ht(document, "touchmove", this._onTouchMove, this),
              ht(document, "touchend", this._onTouchEnd, this),
              mt(t)
          }
        },
        _onTouchMove: function (t) {
          if (t.touches && 2 === t.touches.length && this._zooming) {
            var e = this._map,
              i = e.mouseEventToContainerPoint(t.touches[0]),
              a = e.mouseEventToContainerPoint(t.touches[1]),
              n = i.distanceTo(a) / this._startDist;
            if (this._zoom = e.getScaleZoom(n, this._startZoom),
              !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && n < 1 || this._zoom > e.getMaxZoom() && 1 < n) && (this._zoom = e._limitZoom(this._zoom)),
              "center" === e.options.touchZoom) {
              if (this._center = this._startLatLng,
                1 === n)
                return
            } else {
              var o = i._add(a)._divideBy(2)._subtract(this._centerPoint);
              if (1 === n && 0 === o.x && 0 === o.y)
                return;
              this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(o), this._zoom)
            }
            this._moved || (e._moveStart(!0, !1),
                this._moved = !0),
              m(this._animRequest);
            var s = _(e._move, e, this._center, this._zoom, {
              pinch: !0,
              round: !1
            });
            this._animRequest = w(s, this, !0),
              mt(t)
          }
        },
        _onTouchEnd: function () {
          this._moved && this._zooming ? (this._zooming = !1,
            m(this._animRequest),
            ut(document, "touchmove", this._onTouchMove),
            ut(document, "touchend", this._onTouchEnd),
            this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
      });
      pi.addInitHook("addHandler", "touchZoom", wa),
        pi.BoxZoom = pa,
        pi.DoubleClickZoom = ma,
        pi.Drag = ga,
        pi.Keyboard = va,
        pi.ScrollWheelZoom = ya,
        pi.Tap = ba,
        pi.TouchZoom = wa,
        Object.freeze = Ft,
        t.version = "1.4.0",
        t.Control = mi,
        t.control = gi,
        t.Browser = He,
        t.Evented = te,
        t.Mixin = ki,
        t.Util = Qt,
        t.Class = g,
        t.Handler = Mi,
        t.extend = l,
        t.bind = _,
        t.stamp = h,
        t.setOptions = s,
        t.DomEvent = fi,
        t.DomUtil = hi,
        t.PosAnimation = _i,
        t.Draggable = Ti,
        t.LineUtil = Si,
        t.PolyUtil = Di,
        t.Point = v,
        t.point = y,
        t.Bounds = b,
        t.bounds = M,
        t.Transformation = P,
        t.transformation = T,
        t.Projection = Ii,
        t.LatLng = E,
        t.latLng = C,
        t.LatLngBounds = x,
        t.latLngBounds = k,
        t.CRS = ae,
        t.GeoJSON = Xi,
        t.geoJSON = Nt,
        t.geoJson = Qi,
        t.Layer = Bi,
        t.LayerGroup = Ni,
        t.layerGroup = function (t, e) {
          return new Ni(t, e)
        },
        t.FeatureGroup = Gi,
        t.featureGroup = function (t) {
          return new Gi(t)
        },
        t.ImageOverlay = $i,
        t.imageOverlay = function (t, e, i) {
          return new $i(t, e, i)
        },
        t.VideoOverlay = ta,
        t.videoOverlay = function (t, e, i) {
          return new ta(t, e, i)
        },
        t.DivOverlay = ea,
        t.Popup = ia,
        t.popup = function (t, e) {
          return new ia(t, e)
        },
        t.Tooltip = aa,
        t.tooltip = function (t, e) {
          return new aa(t, e)
        },
        t.Icon = Ui,
        t.icon = function (t) {
          return new Ui(t)
        },
        t.DivIcon = na,
        t.divIcon = function (t) {
          return new na(t)
        },
        t.Marker = Hi,
        t.marker = function (t, e) {
          return new Hi(t, e)
        },
        t.TileLayer = sa,
        t.tileLayer = Gt,
        t.GridLayer = oa,
        t.gridLayer = function (t) {
          return new oa(t)
        },
        t.SVG = fa,
        t.svg = Zt,
        t.Renderer = la,
        t.Canvas = ha,
        t.canvas = Ut,
        t.Path = qi,
        t.CircleMarker = Wi,
        t.circleMarker = function (t, e) {
          return new Wi(t, e)
        },
        t.Circle = Vi,
        t.circle = function (t, e, i) {
          return new Vi(t, e, i)
        },
        t.Polyline = Yi,
        t.polyline = function (t, e) {
          return new Yi(t, e)
        },
        t.Polygon = Ki,
        t.polygon = function (t, e) {
          return new Ki(t, e)
        },
        t.Rectangle = _a,
        t.rectangle = function (t, e) {
          return new _a(t, e)
        },
        t.Map = pi,
        t.map = function (t, e) {
          return new pi(t, e)
        };
      var Ma = window.L;
      t.noConflict = function () {
          return window.L = Ma,
            this
        },
        window.L = t
    }(e)
  }, function (t, e, i) {
    "use strict";
    var a = i(0),
      n = i(7);
    e.a = function (t) {
      return Math.abs(t) <= a.n ? t : t - Object(n.a)(t) * a.o
    }
  }, function (t, e, i) {
    "use strict";

    function a(t, e) {
      window.haoutil && window.haoutil.alert ? window.haoutil.alert(t) : window.layer ? layer.alert(t, {
        title: e || "提示",
        skin: "layui-layer-lan layer-mars-dialog",
        closeBtn: 0,
        anim: 0
      }) : a(t)
    }

    function l(t, e) {
      return Math.floor(Math.random() * (e - t + 1) + t)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      h = L.geoJSON({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [114.02709960937501, 22.59372606392931],
              [113.59313964843751, 23.03929774776974],
              [113.48327636718751, 22.253512814974744],
              [110.24230957031251, 21.401933838235188],
              [107.88574218750001, 22.522705703482472],
              [105.27099609375, 23.664650731631625],
              [104.0625, 22.998851594142923],
              [99.93164062500001, 22.471954507739227],
              [98.85498046875001, 25.025884063244828],
              [99.84375, 29.065772888415406],
              [92.57080078125001, 28.65203063036226],
              [85.53955078125001, 29.219302076779456],
              [80.61767578125001, 31.690781806136822],
              [79.69482421875, 34.903952965590065],
              [75.49804687500001, 37.26530995561875],
              [74.95971679687501, 39.45316112807394],
              [81.82617187500001, 42.74701217318067],
              [81.5185546875, 44.25306865928177],
              [84.04541015625001, 46.042735653846506],
              [87.72583007812501, 48.026672195436014],
              [90.5712890625, 45.10454630976873],
              [96.45996093750001, 42.32606244456202],
              [105.71044921875001, 41.19518982948959],
              [112.0166015625, 42.84375132629023],
              [117.02636718750001, 45.73685954736049],
              [120.60791015625, 46.55886030311719],
              [117.83935546875001, 48.922499263758255],
              [122.65136718750001, 53.10721669189343],
              [127.13378906250001, 49.53946900793534],
              [130.97900390625003, 47.368594345213374],
              [134.45068359375003, 48.019324184801185],
              [131.11083984375003, 45.521743896993634],
              [130.51757812500003, 43.197167282501276],
              [126.46362304687501, 41.89409955811395],
              [121.94824218750001, 39.26628442213066],
              [122.54150390625001, 40.55554790286314],
              [121.70654296875001, 41.19518982948959],
              [119.46533203125001, 39.985538414809746],
              [118.64135742187501, 39.206718844918505],
              [117.52075195312501, 39.342794408952386],
              [117.43286132812501, 38.41055825094609],
              [118.56445312500001, 37.59682400108367],
              [119.080810546875, 36.96744946416934],
              [120.81665039062501, 37.326488613342086],
              [122.40966796875001, 37.22158045838649],
              [120.05859375000001, 36.35052700542766],
              [118.88305664062501, 35.10193405724608],
              [120.47607421875001, 33.422272258866045],
              [120.66284179687501, 31.784216884487385],
              [121.81640625000001, 30.996445897426373],
              [120.36621093750001, 30.477082932837682],
              [121.28906250000001, 29.19053283229458],
              [120.30029296875001, 27.31321389856826],
              [119.102783203125, 26.52956523826758],
              [118.45458984375001, 24.9163314045991],
              [116.71875000000001, 23.805449612314625],
              [115.04882812500001, 22.84707068783908],
              [114.02709960937501, 22.59372606392931]
            ]
          ]
        }
      }).getLayers()[0];
    e.getRequest = function () {
        var t = location.search,
          e = new Object;
        if (-1 != t.indexOf("?"))
          for (var i = t.substr(1).split("&"), a = 0; a < i.length; a++)
            e[i[a].split("=")[0]] = decodeURI(i[a].split("=")[1]);
        return e
      },
      e.getRequestByName = function (t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
          i = window.location.search.substr(1).match(e);
        return null != i ? decodeURI(i[2]) : null
      },
      e.alert = a,
      e.msg = function (t) {
        window.haoutil && window.haoutil.msg ? window.haoutil.msg(t) : window.toastr ? toastr.info(t) : window.layer ? layer.msg(t) : a(t)
      },
      e.randomLatLng = function t(e) {
        null == e && (e = h);
        var i = e.getBounds(),
          a = i.getSouthWest(),
          n = i.getNorthEast(),
          o = l(1e6 * a.lng, 1e6 * n.lng) / 1e6,
          s = l(1e6 * a.lat, 1e6 * n.lat) / 1e6;
        try {
          var r = turf.point([o, s]);
          if (!turf.inside(r, e.toGeoJSON()))
            return t(e)
        } catch (e) {}
        return L.latLng(s, o)
      },
      e.clone = function t(e) {
        if (null == e || "object" != (void 0 === e ? "undefined" : s(e)))
          return e;
        if (e instanceof Date)
          return (i = new Date).setTime(e.getTime()),
            i;
        if (e instanceof Array) {
          for (var i = [], a = 0, n = e.length; a < n; ++a)
            i[a] = t(e[a]);
          return i
        }
        if ("object" !== (void 0 === e ? "undefined" : s(e)))
          return e;
        i = {};
        for (var o in e)
          "_layer" != o && "_layers" != o && "_parent" != o && e.hasOwnProperty(o) && (i[o] = t(e[o]));
        return i
      },
      e.template = function (t, e) {
        if (null == t)
          return t;
        for (var i in e) {
          var a = e[i];
          null != a && "Null" != a && "Unknown" != a || (a = ""),
            t = t.replace(new RegExp("{" + i + "}", "gm"), a)
        }
        return t
      },
      e.formatDegree = function (t) {
        t = Math.abs(t);
        var e = Math.floor(t);
        return e + "° " + Math.floor(60 * (t - e)) + "'  " + Math.round(3600 * (t - e) % 60) + '"'
      }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i) {
      var a = t * e;
      return i / Math.sqrt(1 - a * a)
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      return 1 < Math.abs(t) && (t = 1 < t ? 1 : -1),
        Math.asin(t)
    }
  }, function (t, e) {
    t.exports = __WEBPACK_EXTERNAL_MODULE_6__
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      return t < 0 ? -1 : 1
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(0),
      n = i(7);
    e.a = function (t) {
      return Math.abs(t) < a.d ? t : t - Object(n.a)(t) * Math.PI
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      if (t[e])
        return t[e];
      for (var i, a = Object.keys(t), n = e.toLowerCase().replace(s, ""), o = -1; ++o < a.length;)
        if ((i = a[o]).toLowerCase().replace(s, "") === n)
          return t[i]
    };
    var s = /[\s_\-\/\(\)]/g
  }, function (t, e, i) {
    "use strict";
    var o = i(0);
    e.a = function (t, e, i) {
      var a = t * i,
        n = .5 * t;
      return a = Math.pow((1 - a) / (1 + a), n),
        Math.tan(.5 * (o.d - e)) / a
    }
  }, function (t, e, i) {
    "use strict";
    var r = i(0);
    e.a = function (t, e) {
      for (var i, a, n = .5 * t, o = r.d - 2 * Math.atan(e), s = 0; s <= 15; s++)
        if (i = t * Math.sin(o),
          o += a = r.d - 2 * Math.atan(e * Math.pow((1 - i) / (1 + i), n)) - o,
          Math.abs(a) <= 1e-10)
          return o;
      return -9999
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i, a, n) {
      return t * n - e * Math.sin(2 * n) + i * Math.sin(4 * n) - a * Math.sin(6 * n)
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      return .375 * t * (1 + .25 * t * (1 + .46875 * t))
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      return .05859375 * t * t * (1 + .75 * t)
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      return t * t * t * (35 / 3072)
    }
  }, function (t, e, i) {
    "use strict";
    var a, n, o;
    "function" == typeof Symbol && Symbol.iterator,
      n = [],
      void 0 !== (o = "function" == typeof (a = function () {
        var r = 52.35987755982988,
          d = 3.141592653589793,
          f = 6378245,
          _ = .006693421622965943,
          e = function (t) {
            var e = Number(t[0]),
              i = Number(t[1]),
              a = 52.35987755982988,
              n = e - .0065,
              o = i - .006,
              s = Math.sqrt(n * n + o * o) - 2e-5 * Math.sin(o * a),
              r = Math.atan2(o, n) - 3e-6 * Math.cos(n * a),
              l = s * Math.cos(r),
              h = s * Math.sin(r);
            return l = Number(l.toFixed(6)),
              h = Number(h.toFixed(6)),
              [l, h]
          },
          i = function (t) {
            var e = Number(t[0]),
              i = Number(t[1]),
              a = Math.sqrt(e * e + i * i) + 2e-5 * Math.sin(i * r),
              n = Math.atan2(i, e) + 3e-6 * Math.cos(e * r),
              o = a * Math.cos(n) + .0065,
              s = a * Math.sin(n) + .006;
            return o = Number(o.toFixed(6)),
              s = Number(s.toFixed(6)),
              [o, s]
          },
          a = function (t) {
            var e = Number(t[0]),
              i = Number(t[1]);
            if (g(e, i))
              return [e, i];
            var a = p(e - 105, i - 35),
              n = m(e - 105, i - 35),
              o = i / 180 * d,
              s = Math.sin(o);
            s = 1 - _ * s * s;
            var r = Math.sqrt(s);
            a = 180 * a / (f * (1 - _) / (s * r) * d),
              n = 180 * n / (f / r * Math.cos(o) * d);
            var l = i + a,
              h = e + n;
            return h = Number(h.toFixed(6)),
              l = Number(l.toFixed(6)),
              [h, l]
          },
          n = function (t) {
            var e = Number(t[0]),
              i = Number(t[1]);
            if (g(e, i))
              return [e, i];
            var a = p(e - 105, i - 35),
              n = m(e - 105, i - 35),
              o = i / 180 * d,
              s = Math.sin(o);
            s = 1 - _ * s * s;
            var r = Math.sqrt(s);
            a = 180 * a / (f * (1 - _) / (s * r) * d),
              n = 180 * n / (f / r * Math.cos(o) * d);
            var l = i + a,
              h = e + n,
              u = 2 * e - h,
              c = 2 * i - l;
            return u = Number(u.toFixed(6)),
              c = Number(c.toFixed(6)),
              [u, c]
          },
          p = function (t, e) {
            var i = 2 * t - 100 + 3 * e + .2 * e * e + .1 * t * e + .2 * Math.sqrt(Math.abs(t));
            return i += 2 * (20 * Math.sin(6 * t * d) + 20 * Math.sin(2 * t * d)) / 3,
              i += 2 * (20 * Math.sin(e * d) + 40 * Math.sin(e / 3 * d)) / 3,
              i += 2 * (160 * Math.sin(e / 12 * d) + 320 * Math.sin(e * d / 30)) / 3
          },
          m = function (t, e) {
            var i = 300 + t + 2 * e + .1 * t * t + .1 * t * e + .1 * Math.sqrt(Math.abs(t));
            return i += 2 * (20 * Math.sin(6 * t * d) + 20 * Math.sin(2 * t * d)) / 3,
              i += 2 * (20 * Math.sin(t * d) + 40 * Math.sin(t / 3 * d)) / 3,
              i += 2 * (150 * Math.sin(t / 12 * d) + 300 * Math.sin(t / 30 * d)) / 3
          },
          g = function (t, e) {
            return t < 72.004 || 137.8347 < t || e < .8293 || 55.8271 < e || !1
          };
        return {
          jwd2mct: function (t) {
            var e = Number(t[0]),
              i = Number(t[1]),
              a = 20037508.34 * e / 180,
              n = Math.log(Math.tan((90 + i) * d / 360)) / (d / 180);
            return n = 20037508.34 * n / 180,
              a = Number(a.toFixed(2)),
              n = Number(n.toFixed(2)),
              [a, n]
          },
          mct2jwd: function (t) {
            var e = Number(t[0]),
              i = Number(t[1]),
              a = e / 20037508.34 * 180,
              n = i / 20037508.34 * 180;
            return n = 180 / d * (2 * Math.atan(Math.exp(n * d / 180)) - d / 2),
              a = Number(a.toFixed(6)),
              n = Number(n.toFixed(6)),
              [a, n]
          },
          bd2gcj: e,
          gcj2bd: i,
          bd2wgs: function (t) {
            return n(e(t))
          },
          wgs2bd: function (t) {
            return i(a(t))
          },
          wgs2gcj: a,
          gcj2wgs: n
        }
      }) ? a.apply(e, n) : a) && (t.exports = o)
  }, function (t, e, i) {
    "use strict";

    function l(t, e) {
      if (!(this instanceof l))
        return new l(t);
      e = e || function (t) {
        if (t)
          throw t
      };
      var i = Object(h.a)(t);
      if ("object" == typeof i) {
        var a = l.projections.get(i.projName);
        if (a) {
          if (i.datumCode && "none" !== i.datumCode) {
            var n = Object(_.a)(d.a, i.datumCode);
            n && (i.datum_params = n.towgs84 ? n.towgs84.split(",") : null,
              i.ellps = n.ellipse,
              i.datumName = n.datumName ? n.datumName : i.datumCode)
          }
          i.k0 = i.k0 || 1,
            i.axis = i.axis || "enu",
            i.ellps = i.ellps || "wgs84";
          var o = Object(c.b)(i.a, i.b, i.rf, i.ellps, i.sphere),
            s = Object(c.a)(o.a, o.b, o.rf, i.R_A),
            r = i.datum || Object(f.a)(i.datumCode, i.datum_params, o.a, o.b, s.es, s.ep2);
          Object(u.a)(this, i),
            Object(u.a)(this, a),
            this.a = o.a,
            this.b = o.b,
            this.rf = o.rf,
            this.sphere = o.sphere,
            this.es = s.es,
            this.e = s.e,
            this.ep2 = s.ep2,
            this.datum = r,
            this.init(),
            e(null, this)
        } else
          e(t)
      } else
        e(t)
    }
    var h = i(64),
      u = i(70),
      a = i(71),
      c = i(74),
      d = i(76),
      f = i(77),
      _ = i(9);
    (l.projections = a.a).start(),
      e.a = l
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i, a) {
      return i *= e,
        e *= e,
        a[0] * t - i * (a[1] + e * (a[2] + e * (a[3] + e * a[4])))
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i) {
      var a = e * i;
      return t / Math.sqrt(1 - a * a)
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i, a, n) {
      var o, s;
      o = t / e;
      for (var r = 0; r < 15; r++)
        if (o += s = (t - (e * o - i * Math.sin(2 * o) + a * Math.sin(4 * o) - n * Math.sin(6 * o))) / (e - 2 * i * Math.cos(2 * o) + 4 * a * Math.cos(4 * o) - 6 * n * Math.cos(6 * o)),
          Math.abs(s) <= 1e-10)
          return o;
      return NaN
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      var i;
      return 1e-7 < t ? (1 - t * t) * (e / (1 - (i = t * e) * i) - .5 / t * Math.log((1 - i) / (1 + i))) : 2 * e
    }
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (null != t)
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e.default = t,
        e
    }

    function _interopRequireDefault(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function createLayer(o, t, e) {
      switch (o.url && (t && (o.url = o.url.replace("$serverURL$", t)),
          o.url = o.url.replace("$hostname$", location.hostname).replace("$host$", location.host)),
        o.crs && (o._crs = o.crs,
          o.crs = null),
        o.type) {
        case "group":
          if (o.layers && 0 < o.layers.length) {
            for (var i = [], a = 0; a < o.layers.length; a++) {
              var s, n = o.layers[a];
              !n.crs && o._crs && (n.crs = o._crs),
                null != (s = createLayer(n, t, e)) && (n.hasOwnProperty("visible") && !n.visible || i.push(s))
            }
            s = _leaflet2.default.layerGroup(i)
          }
          break;
        case "image":
          s = _leaflet2.default.imageOverlay(o.url, o.bounds || [
            [0, 0],
            [1e3, 1e3]
          ]);
          break;
        case "tile":
          s = _leaflet2.default.tileLayer(o.url, o);
          break;
        case "wms":
          s = _leaflet2.default.tileLayer.wms(o.url, o);
          break;
        case "wmts":
          s = new _WMTS.WMTS(o.url, o);
          break;
        case "arcgis_cache":
          s = new _ArcGISTile.ArcGISTile(o.url, o);
          break;
        case "arcgis_tile":
          null == _leaflet2.default.esri && console.error("请引入esri-leaflet插件"),
            s = _leaflet2.default.esri.tiledMapLayer(o);
          break;
        case "arcgis_image":
          null == _leaflet2.default.esri && console.error("请引入esri-leaflet插件"),
            s = _leaflet2.default.esri.imageMapLayer(o);
          break;
        case "arcgis_dynamic":
          null == _leaflet2.default.esri && console.error("请引入esri-leaflet插件");
          var r = {};
          for (var l in o)
            "popup" != l && "columns" != l && "symbol" != l && (r[l] = o[l]);
          s = _leaflet2.default.esri.dynamicMapLayer(r),
            (o.popup || o.columns) && (o.popup && "string" == typeof o.popup && o.popup.endsWith(".html") && _jquery2.default.ajax({
                url: o.popup,
                type: "GET",
                dataType: "html",
                success: function (t) {
                  o.popup = t
                }
              }),
              s.bindPopup(function (t, e, i) {
                if (!s.hasOwnProperty("isPopup") || s.isPopup) {
                  if (null != t && 0 < t.code)
                    return _util.msg(t.message),
                      !1;
                  if (0 == e.features.length)
                    return !1;
                  if (_calbackClickFeature) {
                    var a = _leaflet2.default.geoJSON(e).getLayers();
                    _calbackClickFeature("arcgis_dynamic", a[a.length - 1])
                  }
                  var n = e.features[e.features.length - 1].properties;
                  return getPopupByConfig(o, n)
                }
              }, {
                maxWidth: 600
              }));
          break;
        case "arcgis_feature":
          null == _leaflet2.default.esri && console.error("请引入esri-leaflet插件"),
            s = _leaflet2.default.esri.featureLayer(processArcgisFeatureConfig(o)),
            (o.popup || o.columns) && (o.popup && "string" == typeof o.popup && o.popup.endsWith(".html") && _jquery2.default.ajax({
                url: o.popup,
                type: "GET",
                dataType: "html",
                success: function (t) {
                  o.popup = t
                }
              }),
              s.bindPopup(function (t) {
                if (!s.hasOwnProperty("isPopup") || s.isPopup) {
                  _calbackClickFeature && _calbackClickFeature("arcgis_feature", t);
                  var e = t.feature.properties;
                  return getPopupByConfig(o, e)
                }
              }, {
                maxWidth: 600
              })),
            o.tooltip && s.bindTooltip(function (t) {
              var e = t.feature.properties;
              return getTooltipByConfig(o, e)
            }, {
              className: "leafletlayer-tooltip",
              direction: "top"
            });
          break;
        case "geojson":
          s = _leaflet2.default.geoJSON(null, processArcgisFeatureConfig(o)),
            (o.popup || o.columns) && (o.popup && "string" == typeof o.popup && o.popup.endsWith(".html") && _jquery2.default.ajax({
                url: o.popup,
                type: "GET",
                dataType: "html",
                success: function (t) {
                  o.popup = t
                }
              }),
              s.bindPopup(function (t) {
                if (!s.hasOwnProperty("isPopup") || s.isPopup) {
                  _calbackClickFeature && _calbackClickFeature("arcgis_feature", t);
                  var e = t.feature.properties;
                  return getPopupByConfig(o, e)
                }
              }, {
                maxWidth: 600
              })),
            o.tooltip && s.bindTooltip(function (t) {
              var e = t.feature.properties;
              return getTooltipByConfig(o, e)
            }, {
              className: "leafletlayer-tooltip",
              direction: "top"
            }),
            o.data ? s.addData(o.data) : o.url && _jquery2.default.ajax({
              url: o.url,
              data: o.filter || {},
              type: o.ajaxType || "get",
              dataType: "json",
              success: function (t) {
                s.addData(t)
              },
              error: function (t, e, i) {
                console.log("Json文件" + o.url + "加载失败！")
              }
            });
          break;
        case "www_tdt":
          var h = _util.clone(o);
          switch (h.subdomains = "01234567",
            o._crs) {
            default:
              switch (o.layer) {
                case "vec_d":
                  h.layer = "vec",
                    s = new _TiandituLayer.TiandituMercatorLayer(h);
                  break;
                case "vec_z":
                  h.layer = "cva",
                    s = new _TiandituLayer.TiandituMercatorLayer(h);
                  break;
                case "img_d":
                  h.layer = "img",
                    s = new _TiandituLayer.TiandituMercatorLayer(h);
                  break;
                case "img_z":
                  h.layer = "cia",
                    s = new _TiandituLayer.TiandituMercatorLayer(h);
                  break;
                case "ter_d":
                  h.layer = "ter",
                    s = new _TiandituLayer.TiandituMercatorLayer(h);
                  break;
                case "ter_z":
                  h.layer = "cta",
                    s = new _TiandituLayer.TiandituMercatorLayer(h);
                  break;
                case "vec":
                default:
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "vec_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "vec_z",
                    crs: o._crs
                  }))]);
                  break;
                case "img":
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "img_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "img_z",
                    crs: o._crs
                  }))]);
                  break;
                case "ter":
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "ter_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "ter_z",
                    crs: o._crs
                  }))])
              }
              break;
            case "4326":
            case "EPSG4326":
              switch (h.zOffset = 1,
                o.layer) {
                case "vec_d":
                  h.layer = "vec",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "vec_z":
                  h.layer = "cva",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "img_d":
                  h.layer = "img",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "img_z":
                  h.layer = "cia",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "ter_d":
                  h.layer = "ter",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "ter_z":
                  h.layer = "cta",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "vec":
                default:
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "vec_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "vec_z",
                    crs: o._crs
                  }))]);
                  break;
                case "img":
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "img_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "img_z",
                    crs: o._crs
                  }))]);
                  break;
                case "ter":
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "ter_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "ter_z",
                    crs: o._crs
                  }))])
              }
              break;
            case "4490":
            case "EPSG4490":
              switch (o.layer) {
                case "vec_d":
                  h.layer = "vec",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "vec_z":
                  h.layer = "cva",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "img_d":
                  h.layer = "img",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "img_z":
                  h.layer = "cia",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "ter_d":
                  h.layer = "ter",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "ter_z":
                  h.layer = "cta",
                    s = new _TiandituLayer.TiandituLayer(h);
                  break;
                case "vec":
                default:
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "vec_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "vec_z",
                    crs: o._crs
                  }))]);
                  break;
                case "img":
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "img_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "img_z",
                    crs: o._crs
                  }))]);
                  break;
                case "ter":
                  s = _leaflet2.default.layerGroup([createLayer(_jquery2.default.extend(h, {
                    name: "底图",
                    layer: "ter_d",
                    crs: o._crs
                  })), createLayer(_jquery2.default.extend(h, {
                    name: "注记",
                    layer: "ter_z",
                    crs: o._crs
                  }))])
              }
          }
          break;
        case "www_gaode":
          var u = {
            subdomains: "1234"
          };
          for (var l in o)
            "layer" != l && (u[l] = o[l]);
          switch (o.layer) {
            case "vec":
            default:
              s = _leaflet2.default.tileLayer("http://" + (o.bigfont ? "wprd" : "webrd") + "0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", u);
              break;
            case "img_d":
              s = _leaflet2.default.tileLayer("http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}", u);
              break;
            case "img_z":
              s = _leaflet2.default.tileLayer("http://webst0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8", u);
              break;
            case "time":
              var c = (new Date).getTime();
              s = _leaflet2.default.tileLayer("http://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&;t=1&x={x}&y={y}&z={z}&&t=" + c, u);
              break;
            case "img":
              s = _leaflet2.default.layerGroup([createLayer({
                name: "底图",
                type: o.type,
                layer: "img_d"
              }), createLayer({
                name: "注记",
                type: o.type,
                layer: "img_z"
              })])
          }
          break;
        case "www_google":
          u = {
            subdomains: "123"
          };
          for (var l in o)
            "layer" != l && (u[l] = o[l]);
          switch (o.layer) {
            case "vec":
            default:
              s = _leaflet2.default.tileLayer("http://mt{s}.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile", u);
              break;
            case "img_d":
              s = _leaflet2.default.tileLayer("http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gali", u);
              break;
            case "img_z":
              s = _leaflet2.default.tileLayer("http://mt{s}.google.cn/vt/imgtp=png32&lyrs=h@207000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galil", u);
              break;
            case "img":
              s = _leaflet2.default.layerGroup([createLayer({
                name: "底图",
                type: o.type,
                layer: "img_d"
              }), createLayer({
                name: "注记",
                type: o.type,
                layer: "img_z"
              })]);
              break;
            case "ter":
              s = _leaflet2.default.tileLayer("http://mt{s}.google.cn/vt/lyrs=t@131,r@227000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galile", u)
          }
          break;
        case "www_osm":
          u = {
            subdomains: "abc"
          };
          for (var l in o)
            u[l] = o[l];
          s = _leaflet2.default.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", u);
          break;
        case "www_baidu":
          s = (0,
            _baiduTileLayer.baiduTileLayer)(o);
          break;
        case "custom_jww":
          s = new _SimpleGraticule.SimpleGraticule({
            interval: 10,
            zoomIntervals: [{
              start: 0,
              end: 2,
              interval: 60
            }, {
              start: 3,
              end: 4,
              interval: 30
            }, {
              start: 5,
              end: 6,
              interval: 10
            }, {
              start: 7,
              end: 8,
              interval: 5
            }, {
              start: 9,
              end: 10,
              interval: 1
            }, {
              start: 11,
              end: 11,
              interval: .5
            }, {
              start: 12,
              end: 12,
              interval: .2
            }, {
              start: 13,
              end: 20,
              interval: .1
            }],
            showOriginLabel: !0,
            redraw: "move"
          });
          break;
        case "custom_lighting":
          s = new _Terminator.Terminator
      }
      if (e) {
        var d = e(o, s);
        d && (s = d)
      }
      return null == s ? "group" != o.type && console.log("配置中的图层未处理：" + (o.name ? o.name : "")) : (s.config = o,
          s.name = o.name,
          o._layer = s),
        o._crs && (o.crs = o._crs,
          delete o._crs),
        s
    }

    function getPopupByConfig(t, e) {
      var i = t.popupNameField ? e[t.popupNameField] : t.name;
      return t.popup ? getPopup(t.popup, e, i) : !!t.columns && getPopup(t.columns, e, i)
    }

    function getTooltipByConfig(t, e) {
      var i = t.popupNameField ? e[t.popupNameField] : t.name;
      return !!t.tooltip && getPopup(t.tooltip, e, i)
    }

    function getPopup(cfg, attr, title) {
      if (title = title || "",
        _leaflet2.default.Util.isArray(cfg)) {
        for (var countsok = 0, inhtml = '<div class="mars-popup-titile">' + title + '</div><div class="mars-popup-content" >', i = 0; i < cfg.length; i++) {
          var thisfield = cfg[i];
          if ("details" != thisfield.type) {
            var showval = _jquery2.default.trim(attr[thisfield.field]);
            if (thisfield.hasOwnProperty("show") && thisfield.show || null != showval && "" != showval && "Null" != showval && "Unknown" != showval && "0" != showval && 0 != showval.length) {
              if (thisfield.format)
                try {
                  showval = eval(thisfield.format + "('" + showval + "')")
                } catch (t) {
                  console.log("getPopupByConfig error:" + thisfield.format)
                }
              thisfield.unit && (showval += thisfield.unit),
                inhtml += "<div><label>" + thisfield.name + "</label>" + (showval || "") + "</div>",
                countsok++
            }
          } else {
            var showval = _jquery2.default.trim(attr[thisfield.field || "OBJECTID"]);
            if (null == showval || "" == showval || "Null" == showval || "Unknown" == showval)
              continue;
            inhtml += '<div style="text-align: center;padding: 10px 0;"><button type="button" onclick="' + thisfield.calback + "('" + showval + '\');" " class="btn btn-info  btn-sm">' + (thisfield.name || "查看详情") + "</button></div>"
          }
        }
        return inhtml += "</div>",
          0 != countsok && inhtml
      }
      if ("object" !== (void 0 === cfg ? "undefined" : _typeof(cfg))) {
        if ("function" == typeof cfg && cfg.constructor == Function)
          return cfg(attr);
        if ("all" != cfg)
          return _util.template(cfg, attr);
        var countsok = 0,
          inhtml = '<div class="mars-popup-titile">' + title + '</div><div class="mars-popup-content" >';
        for (var col in attr)
          if ("Shape" != col && "FID" != col && "OBJECTID" != col) {
            var showval = _jquery2.default.trim(attr[col]);
            null != showval && "" != showval && "Null" != showval && "Unknown" != showval && "0" != showval && 0 != showval.length && (inhtml += "<div><label>" + col + "</label>" + showval + "</div>",
              countsok++)
          }
        return inhtml += "</div>",
          0 != countsok && inhtml
      }
      switch (cfg.type) {
        case "iframe":
          var _url = _util.template(cfg.url, attr),
            inhtml = '<iframe id="ifarm" src="' + _url + '"  style="width:' + (cfg.width || "300") + "px;height:" + (cfg.height || "300") + 'px;overflow:hidden;margin:0;" scrolling="no" frameborder="0" ></iframe>';
          return inhtml;
        case "javascript":
          return eval(cfg.calback + "(" + JSON.stringify(attr) + ")")
      }
      return !1
    }

    function processArcgisFeatureConfig(n) {
      var t = {};
      for (var e in n)
        "popup" != e && "columns" != e && "symbol" != e && (t[e] = n[e]);
      return n.symbol && n.symbol.iconOptions && (t.pointToLayer = function (t, e) {
          var i = t.properties,
            a = getMarkerOptionsByConfig(n, i);
          return _leaflet2.default.marker(e, a)
        }),
        n.symbol && n.symbol.styleOptions && (t.style = function (t) {
          var e = t.properties;
          return getPolyOptionsByConfig(n, e)
        }),
        t.coordsToLatLng = function (t) {
          if (window.map && window.map.convert2map) {
            var e = map.convert2map({
              lat: t[1],
              lng: t[0]
            });
            return new _leaflet2.default.LatLng(e[0], e[1], t[2])
          }
          return new _leaflet2.default.LatLng(t[1], t[0], t[2])
        },
        t
    }

    function getMarkerOptionsByConfig(t, e, i) {
      var a = t.symbol,
        n = _jquery2.default.extend({}, t.symbol.iconOptions);
      if (a.iconField) {
        var o = e[a.iconField],
          s = t.symbol.iconFieldOptions[o];
        null != s && (n = _jquery2.default.extend({}, n),
          n = _jquery2.default.extend(n, s))
      }
      if (i && n.iconUrlForSelect && (n.iconUrl = n.iconUrlForSelect),
        n.hasOwnProperty("iconUrl"))
        a.icon = _leaflet2.default.icon(n);
      else if (n.hasOwnProperty("iconFont")) {
        var r = 20;
        n.hasOwnProperty("iconSize") && (r = n.iconSize[0]);
        var l = n.color || "#000000";
        n.className = "",
          n.html = '<i class="' + n.iconFont + '" style="color:' + l + ";font-size:" + r + 'px;"></i> ',
          a.icon = _leaflet2.default.divIcon(n)
      } else {
        var h = '<div class="centerat_animation" style="color:' + (l = n.color || "#0f89f5") + ';"><p></p></div>';
        if (a.nameField)
          h += ' <div class="layer_divicon_name" style="top: 2px;left: 25px;" >' + e[a.nameField] + "</div>";
        a.icon = _leaflet2.default.divIcon({
          className: "",
          iconSize: [10, 10],
          iconAnchor: [5, 5],
          popupAnchor: [5, -5],
          tooltipAnchor: [5, -5],
          html: h
        })
      }
      return a
    }

    function getPolyOptionsByConfig(t, e) {
      var i = t.symbol,
        a = t.symbol.styleOptions;
      if (i.styleField) {
        var n = e[i.styleField],
          o = t.symbol.styleFieldOptions[n];
        null != o && (a = _util.clone(a),
          a = _jquery2.default.extend(a, o))
      }
      return a
    }

    function cloneLayer(t) {
      var e = cloneOptions(t.options);
      if (t instanceof _leaflet2.default.SVG)
        return _leaflet2.default.svg(e);
      if (t instanceof _leaflet2.default.Canvas)
        return _leaflet2.default.canvas(e);
      if (t.config && t.config.type) {
        var i = {};
        for (var a in t.config)
          "_layer" != a && (i[a] = t.config[a]);
        return createLayer(i)
      }
      if ("arcgis_cache" == e.type || t instanceof _leaflet2.default.TileLayer.ArcGISTile)
        return _leaflet2.default.tileLayer.arcGISTile(e.url, e);
      if ("wmts" == e.type || t instanceof _leaflet2.default.TileLayer.WMTS)
        return _leaflet2.default.tileLayer.wmts(t._url, e);
      if ("wms" == e.type || t instanceof _leaflet2.default.TileLayer.WMTS)
        return _leaflet2.default.tileLayer.wmts(t._url, e);
      if (t instanceof _leaflet2.default.TileLayer)
        return _leaflet2.default.tileLayer(t._url, e);
      if (t instanceof _leaflet2.default.ImageOverlay)
        return _leaflet2.default.imageOverlay(t._url, t._bounds, e);
      if (t instanceof _leaflet2.default.Marker)
        return _leaflet2.default.marker(t.getLatLng(), e);
      if (t instanceof _leaflet2.default.Circle)
        return _leaflet2.default.circle(t.getLatLng(), t.getRadius(), e);
      if (t instanceof _leaflet2.default.CircleMarker)
        return _leaflet2.default.circleMarker(t.getLatLng(), e);
      if (t instanceof _leaflet2.default.Rectangle)
        return _leaflet2.default.rectangle(t.getBounds(), e);
      if (t instanceof _leaflet2.default.Polygon)
        return _leaflet2.default.polygon(t.getLatLngs(), e);
      if (t instanceof _leaflet2.default.Polyline)
        return _leaflet2.default.polyline(t.getLatLngs(), e);
      if (t instanceof _leaflet2.default.GeoJSON)
        return _leaflet2.default.geoJson(t.toGeoJSON(), e);
      if (t instanceof _leaflet2.default.LayerGroup)
        return _leaflet2.default.layerGroup(cloneInnerLayers(t));
      if (t instanceof _leaflet2.default.FeatureGroup)
        return _leaflet2.default.FeatureGroup(cloneInnerLayers(t));
      throw "Unknown layer, cannot clone this layer. Leaflet-version: " + _leaflet2.default.version
    }

    function cloneOptions(t) {
      var e = {};
      for (var i in t) {
        var a = t[i];
        a && a.clone ? e[i] = a.clone() : a instanceof _leaflet2.default.Layer ? e[i] = cloneLayer(a) : e[i] = a
      }
      return e
    }

    function cloneInnerLayers(t) {
      var e = [];
      return t.eachLayer(function (t) {
          e.push(cloneLayer(t))
        }),
        e
    }

    function getLatlngs(t) {
      if (t instanceof _leaflet2.default.Marker || t instanceof _leaflet2.default.Circle || t instanceof _leaflet2.default.CircleMarker)
        return [t.getLatLng()];
      if (t instanceof _leaflet2.default.Rectangle) {
        var e = t.getBounds();
        return [e.getNorthWest(), e.getSouthEast()]
      }
      var i;
      return t instanceof _leaflet2.default.Polygon ? 0 == (i = t.getLatLngs()).length ? i : i[0] : t instanceof _leaflet2.default.Polyline ? i = t.getLatLngs() : []
    }

    function getDefaultBaseLayers() {
      return [{
        name: "高德地图",
        type: "www_gaode",
        layer: "vec",
        icon: "bingmap.png",
        visible: !0,
        crs: "gcj"
      }, {
        name: "高德卫星",
        type: "www_gaode",
        layer: "img",
        icon: "bingimage.png",
        crs: "gcj"
      }, {
        name: "谷歌地图",
        type: "www_google",
        layer: "vec",
        icon: "googlemap.png",
        crs: "gcj"
      }, {
        name: "谷歌卫星",
        type: "www_google",
        layer: "img",
        icon: "googleimage.png",
        crs: "gcj"
      }, {
        name: "天地图",
        type: "www_tdt",
        layer: "vec",
        icon: "tianditumap.png",
        crs: "EPSG3857"
      }, {
        name: "天地图卫星",
        type: "www_tdt",
        layer: "img",
        icon: "tiandituimage.png",
        crs: "EPSG3857"
      }]
    }

    function isInPoly(t, e) {
      return t instanceof _leaflet2.default.Circle ? isInCircle(t, e) : t instanceof _leaflet2.default.Rectangle ? isInRect(t, e) : t instanceof _leaflet2.default.Polygon ? isInPolygon(t, e) : void 0
    }

    function isInCircle(t, e) {
      var i = t.getRadius(),
        a = t.getLatLng();
      return Math.abs(a.distanceTo(e)) <= i
    }

    function isInRect(t, e) {
      return t.getBounds().contains(e)
    }

    function testisInPoly(t, e, i) {
      for (var a = !1, n = 0, o = i.length - 1; n < i.length; o = n++) {
        var s = i[n].lat,
          r = i[n].lng,
          l = i[o].lat,
          h = i[o].lng;
        e < r != e < h && t < (l - s) * (e - r) / (h - r) + s && (a = !a)
      }
      return a
    }

    function isInPolygon(t, e) {
      for (var i = t.getLatLngs(), a = !1, n = 0; n < i.length; n++)
        testisInPoly(e.lat, e.lng, i[n]) && (a = !0);
      return a
    }

    function bindClickFeature(t) {
      _calbackClickFeature = t
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
      }),
      exports.bindClickFeature = exports.getPolyOptionsByConfig = exports.getMarkerOptionsByConfig = exports.getPopupByConfig = exports.getPopup = exports.getLatlngs = exports.isInPoly = exports.getDefaultBaseLayers = exports.cloneLayer = exports.createLayer = void 0;
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      _leaflet = __webpack_require__(1),
      _leaflet2 = _interopRequireDefault(_leaflet),
      _jquery = __webpack_require__(6),
      _jquery2 = _interopRequireDefault(_jquery),
      _util2 = __webpack_require__(3),
      _util = _interopRequireWildcard(_util2),
      _ArcGISTile = __webpack_require__(24),
      _TiandituLayer = __webpack_require__(25),
      _baiduTileLayer = __webpack_require__(38),
      _WMTS = __webpack_require__(39),
      _SimpleGraticule = __webpack_require__(40),
      _Terminator = __webpack_require__(41),
      _calbackClickFeature;
    exports.createLayer = createLayer,
      exports.cloneLayer = cloneLayer,
      exports.getDefaultBaseLayers = getDefaultBaseLayers,
      exports.isInPoly = isInPoly,
      exports.getLatlngs = getLatlngs,
      exports.getPopup = getPopup,
      exports.getPopupByConfig = getPopupByConfig,
      exports.getMarkerOptionsByConfig = getMarkerOptionsByConfig,
      exports.getPolyOptionsByConfig = getPolyOptionsByConfig,
      exports.bindClickFeature = bindClickFeature
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.ArcGISTile = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = o.default.TileLayer.extend({
        isUpper: !0,
        imgType: "",
        _url: "",
        initialize: function (t, e) {
          null == e && (e = {}),
            e.hasOwnProperty("isUpper") && (this.isUpper = e.isUpper),
            this.imgType = e.imgType || ".jpg",
            this._url = t + "/_alllayers/",
            o.default.setOptions(this, e)
        },
        onAdd: function (t) {
          o.default.TileLayer.prototype.onAdd.call(this, t)
        },
        getTileUrl: function (t) {
          var e = t.z;
          this.options.zOffset && (e += Number(this.options.zOffset));
          var i = "L" + this.padLeft0(e.toString(), 2),
            a = "R" + this.padLeft0(t.y.toString(16), 8),
            n = "C" + this.padLeft0(t.x.toString(16), 8);
          return this.isUpper && (i = i.toUpperCase(),
              a = a.toUpperCase(),
              n = n.toUpperCase()),
            this._url + i + "/" + a + "/" + n + this.imgType
        },
        padLeft0: function (t, e) {
          for (var i = (t = String(t)).length; i < e;)
            t = "0" + t,
            i++;
          return t
        }
      });
    o.default.TileLayer.ArcGISTile = s,
      o.default.tileLayer.arcGISTile = function (t, e) {
        return new s(t, e)
      },
      e.ArcGISTile = s
  }, function (t, e, i) {
    "use strict";

    function s(t) {
      return t[Math.floor(Math.random() * t.length + 1) - 1]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.TiandituMercatorLayer = e.TiandituLayer = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      };
    i(26);
    var r = new o.default.Proj.CRS("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs", {
        resolutions: [1.40625, .703125, .3515625, .17578125, .087890625, .0439453125, .02197265625, .010986328125, .0054931640625, .00274658203125, .001373291015625, .0006866455206208891, .00034332276031044456, .00017166138015522228, 8583069007761114e-20, 4291534503880557e-20, 21457672519402785e-21, 10728836259701392e-21, 5364418129850696e-21, 2682209064925349e-21, 13411045324626745e-22, 6.705522537e-7],
        origin: [-180, 90],
        bounds: o.default.bounds([-180, -90], [180, 90])
      }),
      l = o.default.TileLayer.extend({
        layername: "vec",
        initialize: function (t) {
          t = t || {},
            this.layername = t.layer || this.layername,
            this._key = t.key || ["87949882c75775b5069a0076357b7530"],
            o.default.setOptions(this, t)
        },
        getTileUrl: function (t) {
          var e = t.y,
            i = t.x,
            a = t.z;
          this.options.zOffset && (a += Number(this.options.zOffset));
          var n = "http://t" + parseInt(7 * Math.random()) + ".tianditu.gov.cn/" + this.layername + "_c/wmts",
            o = s(this._key);
          return n + "?Service=WMTS&Request=GetTile&Version=1.0.0&Style=Default&Format=tiles&serviceMode=KVP&layer=" + this.layername + "&TileMatrixSet=c&TileMatrix=" + a + "&TileRow=" + e + "&TileCol=" + i + "&tk=" + o
        }
      }),
      h = o.default.TileLayer.extend({
        layername: "vec",
        initialize: function (t) {
          t = t || {},
            this.layername = t.layer || this.layername,
            this._key = t.key || ["87949882c75775b5069a0076357b7530"],
            o.default.setOptions(this, t)
        },
        getTileUrl: function (t) {
          var e = t.y,
            i = t.x,
            a = t.z,
            n = "http://t" + parseInt(7 * Math.random()) + ".tianditu.gov.cn/" + this.layername + "_w/wmts",
            o = s(this._key);
          return n + "?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=" + this.layername + "&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL=" + i + "&TILEROW=" + e + "&TILEMATRIX=" + a + "&tk=" + o
        }
      });
    o.default.CRS.EPSG4490 = r,
      o.default.TileLayer.TDT = l,
      o.default.tileLayer.tdt = function (t) {
        return new l(t)
      },
      o.default.TileLayer.TDTMercator = h,
      o.default.tileLayer.tdtMercator = function (t) {
        return new h(t)
      },
      e.TiandituLayer = l,
      e.TiandituMercatorLayer = h
  }, function (t, e, i) {
    "use strict";
    var a, n, o;
    "function" == typeof Symbol && Symbol.iterator,
      n = [i(1), i(62)],
      void 0 !== (o = "function" == typeof (a = function (l, a) {
        return a.__esModule && a.default && (a = a.default),
          window.proj4 = a,
          l.Proj = {},
          l.Proj._isProj4Obj = function (t) {
            return void 0 !== t.inverse && void 0 !== t.forward
          },
          l.Proj.Projection = l.Class.extend({
            initialize: function (t, e, i) {
              var a = l.Proj._isProj4Obj(t);
              this._proj = a ? t : this._projFromCodeDef(t, e),
                this.bounds = a ? e : i
            },
            project: function (t) {
              var e = this._proj.forward([t.lng, t.lat]);
              return new l.Point(e[0], e[1])
            },
            unproject: function (t, e) {
              var i = this._proj.inverse([t.x, t.y]);
              return new l.LatLng(i[1], i[0], e)
            },
            _projFromCodeDef: function (t, e) {
              if (e)
                a.defs(t, e);
              else if (void 0 === a.defs[t]) {
                var i = t.split(":");
                if (3 < i.length && (t = i[i.length - 3] + ":" + i[i.length - 1]),
                  void 0 === a.defs[t])
                  throw "No projection definition for code " + t
              }
              return a(t)
            }
          }),
          l.Proj.CRS = l.Class.extend({
            includes: l.CRS,
            options: {
              transformation: new l.Transformation(1, 0, -1, 0)
            },
            initialize: function (t, e, i) {
              var a, n, o, s;
              if (l.Proj._isProj4Obj(t) ? (a = (n = t).srsCode,
                  s = e || {},
                  this.projection = new l.Proj.Projection(n, s.bounds)) : (a = t,
                  o = e,
                  s = i || {},
                  this.projection = new l.Proj.Projection(a, o, s.bounds)),
                l.Util.setOptions(this, s),
                this.code = a,
                this.transformation = this.options.transformation,
                this.options.origin && (this.transformation = new l.Transformation(1, -this.options.origin[0], -1, this.options.origin[1])),
                this.options.scales)
                this._scales = this.options.scales;
              else if (this.options.resolutions) {
                this._scales = [];
                for (var r = this.options.resolutions.length - 1; 0 <= r; r--)
                  this.options.resolutions[r] && (this._scales[r] = 1 / this.options.resolutions[r])
              }
              this.infinite = !this.options.bounds
            },
            scale: function (t) {
              var e, i, a = Math.floor(t);
              return t === a ? this._scales[t] : (e = this._scales[a],
                i = this._scales[a + 1],
                e + (i - e) * (t - a))
            },
            zoom: function (t) {
              var e, i, a = this._closestElement(this._scales, t),
                n = this._scales.indexOf(a);
              return t === a ? n : void 0 === a ? -1 / 0 : (i = n + 1,
                void 0 === (e = this._scales[i]) ? 1 / 0 : (t - a) / (e - a) + n)
            },
            distance: l.CRS.Earth.distance,
            R: l.CRS.Earth.R,
            _closestElement: function (t, e) {
              for (var i, a = t.length; a--;)
                t[a] <= e && (void 0 === i || i < t[a]) && (i = t[a]);
              return i
            }
          }),
          l.Proj.GeoJSON = l.GeoJSON.extend({
            initialize: function (t, e) {
              this._callLevel = 0,
                l.GeoJSON.prototype.initialize.call(this, t, e)
            },
            addData: function (t) {
              var i;
              t && (t.crs && "name" === t.crs.type ? i = new l.Proj.CRS(t.crs.properties.name) : t.crs && t.crs.type && (i = new l.Proj.CRS(t.crs.type + ":" + t.crs.properties.code)),
                  void 0 !== i && (this.options.coordsToLatLng = function (t) {
                    var e = l.point(t[0], t[1]);
                    return i.projection.unproject(e)
                  })),
                this._callLevel++;
              try {
                l.GeoJSON.prototype.addData.call(this, t)
              } finally {
                this._callLevel--,
                  0 === this._callLevel && delete this.options.coordsToLatLng
              }
            }
          }),
          l.Proj.geoJson = function (t, e) {
            return new l.Proj.GeoJSON(t, e)
          },
          l.Proj.ImageOverlay = l.ImageOverlay.extend({
            initialize: function (t, e, i) {
              l.ImageOverlay.prototype.initialize.call(this, t, null, i),
                this._projectedBounds = e
            },
            _animateZoom: function (t) {
              var e = this._map.getZoomScale(t.zoom),
                i = l.point(this._projectedBounds.min.x, this._projectedBounds.max.y),
                a = this._projectedToNewLayerPoint(i, t.zoom, t.center);
              l.DomUtil.setTransform(this._image, a, e)
            },
            _reset: function () {
              var t = this._map.getZoom(),
                e = this._map.getPixelOrigin(),
                i = l.bounds(this._transform(this._projectedBounds.min, t)._subtract(e), this._transform(this._projectedBounds.max, t)._subtract(e)),
                a = i.getSize();
              l.DomUtil.setPosition(this._image, i.min),
                this._image.style.width = a.x + "px",
                this._image.style.height = a.y + "px"
            },
            _projectedToNewLayerPoint: function (t, e, i) {
              var a = this._map.getSize()._divideBy(2),
                n = this._map.project(i, e)._subtract(a)._round(),
                o = n.add(this._map._getMapPanePos());
              return this._transform(t, e)._subtract(o)
            },
            _transform: function (t, e) {
              var i = this._map.options.crs,
                a = i.transformation,
                n = i.scale(e);
              return a.transform(t, n)
            }
          }),
          l.Proj.imageOverlay = function (t, e, i) {
            return new l.Proj.ImageOverlay(t, e, i)
          },
          l.Proj
      }) ? a.apply(e, n) : a) && (t.exports = o)
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      var e = this;
      if (2 === arguments.length) {
        var i = arguments[1];
        a[t] = "string" == typeof i ? "+" === i.charAt(0) ? Object(o.a)(arguments[1]) : Object(s.a)(arguments[1]) : i
      } else if (1 === arguments.length) {
        if (Array.isArray(t))
          return t.map(function (t) {
            Array.isArray(t) ? a.apply(e, t) : a(t)
          });
        if ("string" == typeof t) {
          if (t in a)
            return a[t]
        } else
          "EPSG" in t ? a["EPSG:" + t.EPSG] = t : "ESRI" in t ? a["ESRI:" + t.ESRI] = t : "IAU2000" in t ? a["IAU2000:" + t.IAU2000] = t : console.log(t);
        return
      }
    }
    var n = i(65),
      o = i(28),
      s = i(29);
    Object(n.a)(a),
      e.a = a
  }, function (t, e, i) {
    "use strict";
    var r = i(0),
      l = i(66),
      h = i(67),
      u = i(9);
    e.a = function (t) {
      var e, i, a, n = {},
        o = t.split("+").map(function (t) {
          return t.trim()
        }).filter(function (t) {
          return t
        }).reduce(function (t, e) {
          var i = e.split("=");
          return i.push(!0),
            t[i[0].toLowerCase()] = i[1],
            t
        }, {}),
        s = {
          proj: "projName",
          datum: "datumCode",
          rf: function (t) {
            n.rf = parseFloat(t)
          },
          lat_0: function (t) {
            n.lat0 = t * r.a
          },
          lat_1: function (t) {
            n.lat1 = t * r.a
          },
          lat_2: function (t) {
            n.lat2 = t * r.a
          },
          lat_ts: function (t) {
            n.lat_ts = t * r.a
          },
          lon_0: function (t) {
            n.long0 = t * r.a
          },
          lon_1: function (t) {
            n.long1 = t * r.a
          },
          lon_2: function (t) {
            n.long2 = t * r.a
          },
          alpha: function (t) {
            n.alpha = parseFloat(t) * r.a
          },
          lonc: function (t) {
            n.longc = t * r.a
          },
          x_0: function (t) {
            n.x0 = parseFloat(t)
          },
          y_0: function (t) {
            n.y0 = parseFloat(t)
          },
          k_0: function (t) {
            n.k0 = parseFloat(t)
          },
          k: function (t) {
            n.k0 = parseFloat(t)
          },
          a: function (t) {
            n.a = parseFloat(t)
          },
          b: function (t) {
            n.b = parseFloat(t)
          },
          r_a: function () {
            n.R_A = !0
          },
          zone: function (t) {
            n.zone = parseInt(t, 10)
          },
          south: function () {
            n.utmSouth = !0
          },
          towgs84: function (t) {
            n.datum_params = t.split(",").map(function (t) {
              return parseFloat(t)
            })
          },
          to_meter: function (t) {
            n.to_meter = parseFloat(t)
          },
          units: function (t) {
            n.units = t;
            var e = Object(u.a)(h.a, t);
            e && (n.to_meter = e.to_meter)
          },
          from_greenwich: function (t) {
            n.from_greenwich = t * r.a
          },
          pm: function (t) {
            var e = Object(u.a)(l.a, t);
            n.from_greenwich = (e || parseFloat(t)) * r.a
          },
          nadgrids: function (t) {
            "@null" === t ? n.datumCode = "none" : n.nadgrids = t
          },
          axis: function (t) {
            var e = "ewnsud";
            3 === t.length && -1 !== e.indexOf(t.substr(0, 1)) && -1 !== e.indexOf(t.substr(1, 1)) && -1 !== e.indexOf(t.substr(2, 1)) && (n.axis = t)
          }
        };
      for (e in o)
        i = o[e],
        e in s ? "function" == typeof (a = s[e]) ? a(i) : n[a] = i : n[e] = i;
      return "string" == typeof n.datumCode && "WGS84" !== n.datumCode && (n.datumCode = n.datumCode.toLowerCase()),
        n
    }
  }, function (t, e, i) {
    "use strict";

    function s(t) {
      return t * a
    }
    var o = i(68),
      r = i(69),
      a = .017453292519943295;
    e.a = function (t) {
      var e = Object(o.a)(t),
        i = e.shift(),
        a = e.shift();
      e.unshift(["name", a]),
        e.unshift(["type", i]);
      var n = {};
      return Object(r.a)(e, n),
        function (o) {
          function t(t) {
            return t * (o.to_meter || 1)
          }
          "GEOGCS" === o.type ? o.projName = "longlat" : "LOCAL_CS" === o.type ? (o.projName = "identity",
              o.local = !0) : "object" == typeof o.PROJECTION ? o.projName = Object.keys(o.PROJECTION)[0] : o.projName = o.PROJECTION,
            o.UNIT && (o.units = o.UNIT.name.toLowerCase(),
              "metre" === o.units && (o.units = "meter"),
              o.UNIT.convert && ("GEOGCS" === o.type ? o.DATUM && o.DATUM.SPHEROID && (o.to_meter = o.UNIT.convert * o.DATUM.SPHEROID.a) : o.to_meter = o.UNIT.convert));
          var e = o.GEOGCS;
          "GEOGCS" === o.type && (e = o),
            e && (e.DATUM ? o.datumCode = e.DATUM.name.toLowerCase() : o.datumCode = e.name.toLowerCase(),
              "d_" === o.datumCode.slice(0, 2) && (o.datumCode = o.datumCode.slice(2)),
              "new_zealand_geodetic_datum_1949" !== o.datumCode && "new_zealand_1949" !== o.datumCode || (o.datumCode = "nzgd49"),
              "wgs_1984" === o.datumCode && ("Mercator_Auxiliary_Sphere" === o.PROJECTION && (o.sphere = !0),
                o.datumCode = "wgs84"),
              "_ferro" === o.datumCode.slice(-6) && (o.datumCode = o.datumCode.slice(0, -6)),
              "_jakarta" === o.datumCode.slice(-8) && (o.datumCode = o.datumCode.slice(0, -8)),
              ~o.datumCode.indexOf("belge") && (o.datumCode = "rnb72"),
              e.DATUM && e.DATUM.SPHEROID && (o.ellps = e.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"),
                "international" === o.ellps.toLowerCase().slice(0, 13) && (o.ellps = "intl"),
                o.a = e.DATUM.SPHEROID.a,
                o.rf = parseFloat(e.DATUM.SPHEROID.rf, 10)),
              e.DATUM && e.DATUM.TOWGS84 && (o.datum_params = e.DATUM.TOWGS84),
              ~o.datumCode.indexOf("osgb_1936") && (o.datumCode = "osgb36"),
              ~o.datumCode.indexOf("osni_1952") && (o.datumCode = "osni52"),
              (~o.datumCode.indexOf("tm65") || ~o.datumCode.indexOf("geodetic_datum_of_1965")) && (o.datumCode = "ire65"),
              "ch1903+" === o.datumCode && (o.datumCode = "ch1903"),
              ~o.datumCode.indexOf("israel") && (o.datumCode = "isr93")),
            o.b && !isFinite(o.b) && (o.b = o.a),
            [
              ["standard_parallel_1", "Standard_Parallel_1"],
              ["standard_parallel_2", "Standard_Parallel_2"],
              ["false_easting", "False_Easting"],
              ["false_northing", "False_Northing"],
              ["central_meridian", "Central_Meridian"],
              ["latitude_of_origin", "Latitude_Of_Origin"],
              ["latitude_of_origin", "Central_Parallel"],
              ["scale_factor", "Scale_Factor"],
              ["k0", "scale_factor"],
              ["latitude_of_center", "Latitude_Of_Center"],
              ["latitude_of_center", "Latitude_of_center"],
              ["lat0", "latitude_of_center", s],
              ["longitude_of_center", "Longitude_Of_Center"],
              ["longitude_of_center", "Longitude_of_center"],
              ["longc", "longitude_of_center", s],
              ["x0", "false_easting", t],
              ["y0", "false_northing", t],
              ["long0", "central_meridian", s],
              ["lat0", "latitude_of_origin", s],
              ["lat0", "standard_parallel_1", s],
              ["lat1", "standard_parallel_1", s],
              ["lat2", "standard_parallel_2", s],
              ["azimuth", "Azimuth"],
              ["alpha", "azimuth", s],
              ["srsCode", "name"]
            ].forEach(function (t) {
              return e = o,
                a = (i = t)[0],
                n = i[1],
                void(!(a in e) && n in e && (e[a] = e[n],
                  3 === i.length && (e[a] = i[2](e[a]))));
              var e, i, a, n
            }),
            o.long0 || !o.longc || "Albers_Conic_Equal_Area" !== o.projName && "Lambert_Azimuthal_Equal_Area" !== o.projName || (o.long0 = o.longc),
            o.lat_ts || !o.lat1 || "Stereographic_South_Pole" !== o.projName && "Polar Stereographic (variant B)" !== o.projName || (o.lat0 = s(0 < o.lat1 ? 90 : -90),
              o.lat_ts = o.lat1)
        }(n),
        n
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function t(e, i, a) {
      var n, o, s;
      return Array.isArray(a) && (a = Object(c.a)(a)),
        Object(d.a)(a),
        e.datum && i.datum && (s = i,
          ((o = e).datum.datum_type === r.e || o.datum.datum_type === r.f) && "WGS84" !== s.datumCode || (s.datum.datum_type === r.e || s.datum.datum_type === r.f) && "WGS84" !== o.datumCode) && (a = t(e, n = new u.a("WGS84"), a),
          e = n),
        "enu" !== e.axis && (a = Object(h.a)(e, !1, a)),
        a = "longlat" === e.projName ? {
          x: a.x * r.a,
          y: a.y * r.a
        } : (e.to_meter && (a = {
            x: a.x * e.to_meter,
            y: a.y * e.to_meter
          }),
          e.inverse(a)),
        e.from_greenwich && (a.x += e.from_greenwich),
        a = Object(l.a)(e.datum, i.datum, a),
        i.from_greenwich && (a = {
          x: a.x - i.from_greenwich,
          y: a.y
        }),
        "longlat" === i.projName ? a = {
          x: a.x * r.i,
          y: a.y * r.i
        } : (a = i.forward(a),
          i.to_meter && (a = {
            x: a.x / i.to_meter,
            y: a.y / i.to_meter
          })),
        "enu" !== i.axis ? Object(h.a)(i, !0, a) : a
    };
    var r = i(0),
      l = i(78),
      h = i(80),
      u = i(18),
      c = i(31),
      d = i(81)
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      var e = {
        x: t[0],
        y: t[1]
      };
      return 2 < t.length && (e.z = t[2]),
        3 < t.length && (e.m = t[3]),
        e
    }
  }, function (t, e, i) {
    "use strict";

    function a(t, e) {
      return e = e || 5,
        i = function (t) {
          var e, i, a, n, o, s, r, l, h = t.lat,
            u = t.lon,
            c = v(h),
            d = v(u);
          l = Math.floor((u + 180) / 6) + 1,
            180 === u && (l = 60),
            56 <= h && h < 64 && 3 <= u && u < 12 && (l = 32),
            72 <= h && h < 84 && (0 <= u && u < 9 ? l = 31 : 9 <= u && u < 21 ? l = 33 : 21 <= u && u < 33 ? l = 35 : 33 <= u && u < 42 && (l = 37)),
            r = v(6 * (l - 1) - 180 + 3),
            e = .006739496752268451,
            i = 6378137 / Math.sqrt(1 - .00669438 * Math.sin(c) * Math.sin(c)),
            a = Math.tan(c) * Math.tan(c),
            n = e * Math.cos(c) * Math.cos(c),
            o = Math.cos(c) * (d - r),
            s = 6378137 * (.9983242984503243 * c - .002514607064228144 * Math.sin(2 * c) + 2639046602129982e-21 * Math.sin(4 * c) - 3.418046101696858e-9 * Math.sin(6 * c));
          var f = .9996 * i * (o + (1 - a + n) * o * o * o / 6 + (5 - 18 * a + a * a + 72 * n - 58 * e) * o * o * o * o * o / 120) + 5e5,
            _ = .9996 * (s + i * Math.tan(c) * (o * o / 2 + (5 - a + 9 * n + 4 * n * n) * o * o * o * o / 24 + (61 - 58 * a + a * a + 600 * n - 330 * e) * o * o * o * o * o * o / 720));
          return h < 0 && (_ += 1e7), {
            northing: Math.round(_),
            easting: Math.round(f),
            zoneNumber: l,
            zoneLetter: (p = h,
              m = "Z",
              p <= 84 && 72 <= p ? m = "X" : p < 72 && 64 <= p ? m = "W" : p < 64 && 56 <= p ? m = "V" : p < 56 && 48 <= p ? m = "U" : p < 48 && 40 <= p ? m = "T" : p < 40 && 32 <= p ? m = "S" : p < 32 && 24 <= p ? m = "R" : p < 24 && 16 <= p ? m = "Q" : p < 16 && 8 <= p ? m = "P" : p < 8 && 0 <= p ? m = "N" : p < 0 && -8 <= p ? m = "M" : p < -8 && -16 <= p ? m = "L" : p < -16 && -24 <= p ? m = "K" : p < -24 && -32 <= p ? m = "J" : p < -32 && -40 <= p ? m = "H" : p < -40 && -48 <= p ? m = "G" : p < -48 && -56 <= p ? m = "F" : p < -56 && -64 <= p ? m = "E" : p < -64 && -72 <= p ? m = "D" : p < -72 && -80 <= p && (m = "C"),
              m)
          };
          var p, m
        }({
          lat: t[1],
          lon: t[0]
        }),
        a = e,
        n = "00000" + i.easting,
        o = "00000" + i.northing,
        i.zoneNumber + i.zoneLetter + (s = i.easting,
          r = i.northing,
          l = i.zoneNumber,
          h = y(l),
          u = Math.floor(s / 1e5),
          c = Math.floor(r / 1e5) % 20,
          d = h - 1,
          f = L.charCodeAt(d),
          _ = x.charCodeAt(d),
          g = !1,
          T < (p = f + u - 1) && (p = p - T + k - 1,
            g = !0),
          (p === E || f < E && E < p || (E < p || f < E) && g) && p++,
          (p === C || f < C && C < p || (C < p || f < C) && g) && ++p === E && p++,
          T < p && (p = p - T + k - 1),
          g = P < (m = _ + c) && (m = m - P + k - 1,
            !0),
          (m === E || _ < E && E < m || (E < m || _ < E) && g) && m++,
          (m === C || _ < C && C < m || (C < m || _ < C) && g) && ++m === E && m++,
          P < m && (m = m - P + k - 1),
          String.fromCharCode(p) + String.fromCharCode(m)) + n.substr(n.length - 5, a) + o.substr(o.length - 5, a);
      var i, a, n, o, s, r, l, h, u, c, d, f, _, p, m, g
    }

    function n(t) {
      var e = M(o(t.toUpperCase()));
      return e.lat && e.lon ? [e.lon, e.lat] : [(e.left + e.right) / 2, (e.top + e.bottom) / 2]
    }

    function v(t) {
      return t * (Math.PI / 180)
    }

    function w(t) {
      return t / Math.PI * 180
    }

    function M(t) {
      var e = t.northing,
        i = t.easting,
        a = t.zoneLetter,
        n = t.zoneNumber;
      if (n < 0 || 60 < n)
        return null;
      var o, s, r, l, h, u, c, d, f, _ = (1 - Math.sqrt(.99330562)) / (1 + Math.sqrt(.99330562)),
        p = i - 5e5,
        m = e;
      a < "N" && (m -= 1e7),
        c = 6 * (n - 1) - 180 + 3,
        o = .006739496752268451,
        f = (d = m / .9996 / 6367449.145945056) + (3 * _ / 2 - 27 * _ * _ * _ / 32) * Math.sin(2 * d) + (21 * _ * _ / 16 - 55 * _ * _ * _ * _ / 32) * Math.sin(4 * d) + 151 * _ * _ * _ / 96 * Math.sin(6 * d),
        s = 6378137 / Math.sqrt(1 - .00669438 * Math.sin(f) * Math.sin(f)),
        r = Math.tan(f) * Math.tan(f),
        l = o * Math.cos(f) * Math.cos(f),
        h = 6335439.32722994 / Math.pow(1 - .00669438 * Math.sin(f) * Math.sin(f), 1.5),
        u = p / (.9996 * s);
      var g = f - s * Math.tan(f) / h * (u * u / 2 - (5 + 3 * r + 10 * l - 4 * l * l - 9 * o) * u * u * u * u / 24 + (61 + 90 * r + 298 * l + 45 * r * r - 252 * o - 3 * l * l) * u * u * u * u * u * u / 720);
      g = w(g);
      var v, y = (u - (1 + 2 * r + l) * u * u * u / 6 + (5 - 2 * l + 28 * r - 3 * l * l + 8 * o + 24 * r * r) * u * u * u * u * u / 120) / Math.cos(f);
      if (y = c + w(y),
        t.accuracy) {
        var b = M({
          northing: t.northing + t.accuracy,
          easting: t.easting + t.accuracy,
          zoneLetter: t.zoneLetter,
          zoneNumber: t.zoneNumber
        });
        v = {
          top: b.lat,
          right: b.lon,
          bottom: g,
          left: y
        }
      } else
        v = {
          lat: g,
          lon: y
        };
      return v
    }

    function y(t) {
      var e = t % s;
      return 0 === e && (e = s),
        e
    }

    function o(t) {
      if (t && 0 === t.length)
        throw "MGRSPoint coverting from nothing";
      for (var e, i = t.length, a = null, n = "", o = 0; !/[A-Z]/.test(e = t.charAt(o));) {
        if (2 <= o)
          throw "MGRSPoint bad conversion from: " + t;
        n += e,
          o++
      }
      var s = parseInt(n, 10);
      if (0 === o || i < o + 3)
        throw "MGRSPoint bad conversion from: " + t;
      var r = t.charAt(o++);
      if (r <= "A" || "B" === r || "Y" === r || "Z" <= r || "I" === r || "O" === r)
        throw "MGRSPoint zone letter " + r + " not handled: " + t;
      a = t.substring(o, o += 2);
      for (var l = y(s), h = function (t, e) {
          for (var i = L.charCodeAt(e - 1), a = 1e5, n = !1; i !== t.charCodeAt(0);) {
            if (++i === E && i++,
              i === C && i++,
              T < i) {
              if (n)
                throw "Bad character: " + t;
              i = k,
                n = !0
            }
            a += 1e5
          }
          return a
        }(a.charAt(0), l), u = function (t, e) {
          if ("V" < t)
            throw "MGRSPoint given invalid Northing " + t;
          for (var i = x.charCodeAt(e - 1), a = 0, n = !1; i !== t.charCodeAt(0);) {
            if (++i === E && i++,
              i === C && i++,
              P < i) {
              if (n)
                throw "Bad character: " + t;
              i = k,
                n = !0
            }
            a += 1e5
          }
          return a
        }(a.charAt(1), l); u < b(r);)
        u += 2e6;
      var c = i - o;
      if (c % 2 != 0)
        throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t;
      var d, f, _, p = c / 2,
        m = 0,
        g = 0;
      return 0 < p && (d = 1e5 / Math.pow(10, p),
        f = t.substring(o, o + p),
        m = parseFloat(f) * d,
        _ = t.substring(o + p),
        g = parseFloat(_) * d), {
        easting: m + h,
        northing: g + u,
        zoneLetter: r,
        zoneNumber: s,
        accuracy: d
      }
    }

    function b(t) {
      var e;
      switch (t) {
        case "C":
          e = 11e5;
          break;
        case "D":
          e = 2e6;
          break;
        case "E":
          e = 28e5;
          break;
        case "F":
          e = 37e5;
          break;
        case "G":
          e = 46e5;
          break;
        case "H":
          e = 55e5;
          break;
        case "J":
          e = 64e5;
          break;
        case "K":
          e = 73e5;
          break;
        case "L":
          e = 82e5;
          break;
        case "M":
          e = 91e5;
          break;
        case "N":
          e = 0;
          break;
        case "P":
          e = 8e5;
          break;
        case "Q":
          e = 17e5;
          break;
        case "R":
          e = 26e5;
          break;
        case "S":
          e = 35e5;
          break;
        case "T":
          e = 44e5;
          break;
        case "U":
          e = 53e5;
          break;
        case "V":
          e = 62e5;
          break;
        case "W":
          e = 7e6;
          break;
        case "X":
          e = 79e5;
          break;
        default:
          e = -1
      }
      if (0 <= e)
        return e;
      throw "Invalid zone letter: " + t
    }
    e.b = a,
      e.c = n;
    var s = 6,
      L = "AJSAJS",
      x = "AFAFAF",
      k = 65,
      E = 73,
      C = 79,
      P = 86,
      T = 90;
    e.a = {
      forward: a,
      inverse: function (t) {
        var e = M(o(t.toUpperCase()));
        return e.lat && e.lon ? [e.lon, e.lat, e.lon, e.lat] : [e.left, e.bottom, e.right, e.top]
      },
      toPoint: n
    }
  }, function (t, e, i) {
    "use strict";
    var a = .01068115234375;
    e.a = function (t) {
      var e = [];
      e[0] = 1 - t * (.25 + t * (.046875 + t * (.01953125 + t * a))),
        e[1] = t * (.75 - t * (.046875 + t * (.01953125 + t * a)));
      var i = t * t;
      return e[2] = i * (.46875 - t * (.013020833333333334 + .007120768229166667 * t)),
        i *= t,
        e[3] = i * (.3645833333333333 - .005696614583333333 * t),
        e[4] = i * t * .3076171875,
        e
    }
  }, function (t, e, i) {
    "use strict";
    var l = i(19),
      h = i(0);
    e.a = function (t, e, i) {
      for (var a = 1 / (1 - e), n = t, o = 20; o; --o) {
        var s = Math.sin(n),
          r = 1 - e * s * s;
        if (n -= r = (Object(l.a)(n, s, Math.cos(n), i) - t) * (r * Math.sqrt(r)) * a,
          Math.abs(r) < h.b)
          return n
      }
      return n
    }
  }, function (t, e, i) {
    "use strict";
    var u = i(36),
      c = i(37),
      d = i(87),
      f = i(89),
      n = i(90),
      _ = i(91),
      p = i(2);
    e.a = {
      init: function () {
        if (void 0 === this.es || this.es <= 0)
          throw new Error("incorrect elliptical usage");
        this.x0 = void 0 !== this.x0 ? this.x0 : 0,
          this.y0 = void 0 !== this.y0 ? this.y0 : 0,
          this.long0 = void 0 !== this.long0 ? this.long0 : 0,
          this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0,
          this.cgb = [],
          this.cbg = [],
          this.utg = [],
          this.gtu = [];
        var t = this.es / (1 + Math.sqrt(1 - this.es)),
          e = t / (2 - t),
          i = e;
        this.cgb[0] = e * (2 + e * (-2 / 3 + e * (e * (116 / 45 + e * (26 / 45 + e * (-2854 / 675))) - 2))),
          this.cbg[0] = e * (e * (2 / 3 + e * (4 / 3 + e * (-82 / 45 + e * (32 / 45 + e * (4642 / 4725))))) - 2),
          i *= e,
          this.cgb[1] = i * (7 / 3 + e * (e * (-227 / 45 + e * (2704 / 315 + e * (2323 / 945))) - 1.6)),
          this.cbg[1] = i * (5 / 3 + e * (-16 / 15 + e * (-13 / 9 + e * (904 / 315 + e * (-1522 / 945))))),
          i *= e,
          this.cgb[2] = i * (56 / 15 + e * (-136 / 35 + e * (-1262 / 105 + e * (73814 / 2835)))),
          this.cbg[2] = i * (-26 / 15 + e * (34 / 21 + e * (1.6 + e * (-12686 / 2835)))),
          i *= e,
          this.cgb[3] = i * (4279 / 630 + e * (-332 / 35 + e * (-399572 / 14175))),
          this.cbg[3] = i * (1237 / 630 + e * (e * (-24832 / 14175) - 2.4)),
          i *= e,
          this.cgb[4] = i * (4174 / 315 + e * (-144838 / 6237)),
          this.cbg[4] = i * (-734 / 315 + e * (109598 / 31185)),
          i *= e,
          this.cgb[5] = i * (601676 / 22275),
          this.cbg[5] = i * (444337 / 155925),
          i = Math.pow(e, 2),
          this.Qn = this.k0 / (1 + e) * (1 + i * (.25 + i * (1 / 64 + i / 256))),
          this.utg[0] = e * (e * (2 / 3 + e * (-37 / 96 + e * (1 / 360 + e * (81 / 512 + e * (-96199 / 604800))))) - .5),
          this.gtu[0] = e * (.5 + e * (-2 / 3 + e * (5 / 16 + e * (41 / 180 + e * (-127 / 288 + e * (7891 / 37800)))))),
          this.utg[1] = i * (-1 / 48 + e * (-1 / 15 + e * (437 / 1440 + e * (-46 / 105 + e * (1118711 / 3870720))))),
          this.gtu[1] = i * (13 / 48 + e * (e * (557 / 1440 + e * (281 / 630 + e * (-1983433 / 1935360))) - .6)),
          i *= e,
          this.utg[2] = i * (-17 / 480 + e * (37 / 840 + e * (209 / 4480 + e * (-5569 / 90720)))),
          this.gtu[2] = i * (61 / 240 + e * (-103 / 140 + e * (15061 / 26880 + e * (167603 / 181440)))),
          i *= e,
          this.utg[3] = i * (-4397 / 161280 + e * (11 / 504 + e * (830251 / 7257600))),
          this.gtu[3] = i * (49561 / 161280 + e * (-179 / 168 + e * (6601661 / 7257600))),
          i *= e,
          this.utg[4] = i * (-4583 / 161280 + e * (108847 / 3991680)),
          this.gtu[4] = i * (34729 / 80640 + e * (-3418889 / 1995840)),
          i *= e,
          this.utg[5] = -.03233083094085698 * i,
          this.gtu[5] = .6650675310896665 * i;
        var a = Object(f.a)(this.cbg, this.lat0);
        this.Zb = -this.Qn * (a + Object(n.a)(this.gtu, 2 * a))
      },
      forward: function (t) {
        var e = Object(p.a)(t.x - this.long0),
          i = t.y;
        i = Object(f.a)(this.cbg, i);
        var a = Math.sin(i),
          n = Math.cos(i),
          o = Math.sin(e),
          s = Math.cos(e);
        i = Math.atan2(a, s * n),
          e = Math.atan2(o * n, Object(c.a)(a, n * s)),
          e = Object(d.a)(Math.tan(e));
        var r, l, h = Object(_.a)(this.gtu, 2 * i, 2 * e);
        return i += h[0],
          e += h[1],
          l = Math.abs(e) <= 2.623395162778 ? (r = this.a * (this.Qn * e) + this.x0,
            this.a * (this.Qn * i + this.Zb) + this.y0) : r = 1 / 0,
          t.x = r,
          t.y = l,
          t
      },
      inverse: function (t) {
        var e, i, a = (t.x - this.x0) * (1 / this.a),
          n = (t.y - this.y0) * (1 / this.a);
        if (n = (n - this.Zb) / this.Qn,
          a /= this.Qn,
          Math.abs(a) <= 2.623395162778) {
          var o = Object(_.a)(this.utg, 2 * n, 2 * a);
          n += o[0],
            a += o[1],
            a = Math.atan(Object(u.a)(a));
          var s = Math.sin(n),
            r = Math.cos(n),
            l = Math.sin(a),
            h = Math.cos(a);
          n = Math.atan2(s * h, Object(c.a)(l, h * r)),
            a = Math.atan2(l, h * r),
            e = Object(p.a)(a + this.long0),
            i = Object(f.a)(this.cgb, n)
        } else
          i = e = 1 / 0;
        return t.x = e,
          t.y = i,
          t
      },
      names: ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc"]
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      var e = Math.exp(t);
      return (e - 1 / e) / 2
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      t = Math.abs(t),
        e = Math.abs(e);
      var i = Math.max(t, e),
        a = Math.min(t, e) / (i || 1);
      return i * Math.sqrt(1 + Math.pow(a, 2))
    }
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.baiduTileLayer = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      };
    i(26);
    var s = new o.default.Proj.CRS("EPSG:900913", "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs", {
        resolutions: function () {
          var t = [];
          t[0] = Math.pow(2, 18);
          for (var e = 1; e < 19; e++)
            t[e] = Math.pow(2, 18 - e);
          return t
        }(),
        origin: [0, 0],
        bounds: o.default.bounds([20037508.342789244, 0], [0, 20037508.342789244])
      }),
      r = function (t) {
        var e;
        switch ((t = t || {}).layer) {
          case "vec":
          default:
            e = o.default.tileLayer("http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=" + (t.bigfont ? "ph" : "pl") + "&scaler=1&p=1", {
              name: t.name,
              subdomains: "0123456789",
              tms: !0
            });
            break;
          case "img_d":
            e = o.default.tileLayer("http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46", {
              name: t.name,
              subdomains: "0123456789",
              tms: !0
            });
            break;
          case "img_z":
            e = o.default.tileLayer("http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=" + (t.bigfont ? "sh" : "sl") + "&v=020", {
              name: t.name,
              subdomains: "0123456789",
              tms: !0
            });
            break;
          case "custom":
            t.customid = t.customid || "midnight",
              e = o.default.tileLayer("http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=" + t.customid, {
                name: t.name,
                subdomains: "012",
                tms: !0
              });
            break;
          case "time":
            var i = (new Date).getTime();
            e = o.default.tileLayer("http://its.map.baidu.com:8002/traffic/TrafficTileService?x={x}&y={y}&level={z}&time=" + i + "&label=web2D&v=017", {
              name: t.name,
              subdomains: "0123456789",
              tms: !0
            });
            break;
          case "img":
            e = o.default.layerGroup([o.default.tileLayer.baidu({
              name: "底图",
              layer: "img_d",
              bigfont: t.bigfont
            }), o.default.tileLayer.baidu({
              name: "注记",
              layer: "img_z",
              bigfont: t.bigfont
            })])
        }
        return e
      };
    o.default.CRS.Baidu = s,
      o.default.tileLayer.baidu = r,
      e.baiduTileLayer = r
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.WMTS = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = o.default.TileLayer.extend({
        options: {
          version: "1.0.0",
          style: "default",
          tilematrixSet: "",
          format: "image/png",
          tileSize: 256,
          layer: ""
        },
        initialize: function (t, e) {
          this._url = t,
            o.default.setOptions(this, e)
        },
        getParamString: function (t, e, i) {
          var a = [];
          for (var n in t)
            a.push((i ? n.toUpperCase() : n) + "=" + t[n]);
          return (e && -1 !== e.indexOf("?") ? "&" : "?") + a.join("&")
        },
        getTileUrl: function (t) {
          var e, i = this._getZoomForUrl();
          this.options.zOffset && (i += this.options.zOffset),
            e = this.options.matrixIds ? this.options.matrixIds[i] : this.options.tilematrixBefore ? this.options.tilematrixBefore + i : i;
          var a = o.default.Util.template(this._url, {
              s: this._getSubdomain(t)
            }),
            n = {
              service: "WMTS",
              request: "GetTile",
              version: this.options.version,
              style: this.options.style,
              tilematrixSet: this.options.tilematrixSet,
              format: this.options.format,
              width: this.options.tileSize,
              height: this.options.tileSize,
              layer: this.options.layer,
              tilematrix: e,
              tilerow: t.y,
              tilecol: t.x
            };
          return a + this.getParamString(n, a)
        }
      });
    o.default.TileLayer.WMTS = s,
      o.default.tileLayer.wmts = function (t, e) {
        return new s(t, e)
      },
      e.WMTS = s
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.SimpleGraticule = void 0,
      i(121);
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = o.default.LayerGroup.extend({
        options: {
          interval: 20,
          showOriginLabel: !0,
          redraw: "move",
          hidden: !1,
          zoomIntervals: []
        },
        lineStyle: {
          stroke: !0,
          color: "#111",
          opacity: .6,
          weight: 1,
          interactive: !1,
          clickable: !1
        },
        initialize: function (t) {
          o.default.LayerGroup.prototype.initialize.call(this),
            o.default.Util.setOptions(this, t)
        },
        onAdd: function (t) {
          this._map = t;
          var e = this.redraw();
          this._map.on("viewreset " + this.options.redraw, e.redraw, e),
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function (t) {
          t.off("viewreset " + this.options.redraw, this.map),
            this.eachLayer(this.removeLayer, this)
        },
        hide: function () {
          this.options.hidden = !0,
            this.redraw()
        },
        show: function () {
          this.options.hidden = !1,
            this.redraw()
        },
        redraw: function () {
          if (this._bounds = this._map.getBounds().pad(.5),
            this.clearLayers(),
            !this.options.hidden) {
            for (var t = this._map.getZoom(), e = 0; e < this.options.zoomIntervals.length; e++)
              if (t >= this.options.zoomIntervals[e].start && t <= this.options.zoomIntervals[e].end) {
                this.options.interval = this.options.zoomIntervals[e].interval;
                break
              }
            this.constructLines(this.getMins(), this.getLineCounts()),
              this.options.showOriginLabel && this.addLayer(this.addOriginLabel())
          }
          return this
        },
        getLineCounts: function () {
          return {
            x: Math.ceil((this._bounds.getEast() - this._bounds.getWest()) / this.options.interval),
            y: Math.ceil((this._bounds.getNorth() - this._bounds.getSouth()) / this.options.interval)
          }
        },
        getMins: function () {
          var t = this.options.interval;
          return {
            x: Math.floor(this._bounds.getWest() / t) * t,
            y: Math.floor(this._bounds.getSouth() / t) * t
          }
        },
        constructLines: function (t, e) {
          for (var i = new Array(e.x + e.y), a = new Array(e.x + e.y), n = 0; n <= e.x; n++) {
            var o = t.x + n * this.options.interval;
            i[n] = this.buildXLine(o),
              a[n] = this.buildLabel("gridlabel-horiz", o)
          }
          for (var s = 0; s <= e.y; s++) {
            var r = t.y + s * this.options.interval;
            i[s + n] = this.buildYLine(r),
              a[s + n] = this.buildLabel("gridlabel-vert", r)
          }
          i.forEach(this.addLayer, this),
            a.forEach(this.addLayer, this)
        },
        buildXLine: function (t) {
          var e = new o.default.LatLng(this._bounds.getSouth(), t),
            i = new o.default.LatLng(this._bounds.getNorth(), t);
          return new o.default.Polyline([e, i], this.lineStyle)
        },
        buildYLine: function (t) {
          var e = new o.default.LatLng(t, this._bounds.getWest()),
            i = new o.default.LatLng(t, this._bounds.getEast());
          return new o.default.Polyline([e, i], this.lineStyle)
        },
        buildLabel: function (t, e) {
          var i, a = this._map.getBounds().pad(-.003);
          i = "gridlabel-horiz" == t ? new o.default.LatLng(a.getNorth(), e) : new o.default.LatLng(e, a.getWest());
          var n = e.toFixed(1).replace(".0", "");
          return o.default.marker(i, {
            interactive: !1,
            clickable: !1,
            icon: o.default.divIcon({
              iconSize: [0, 0],
              className: "leaflet-grid-label",
              html: '<div class="' + t + '">' + n + "</div>"
            })
          })
        },
        addOriginLabel: function () {
          return o.default.marker([0, 0], {
            interactive: !1,
            clickable: !1,
            icon: o.default.divIcon({
              iconSize: [0, 0],
              className: "leaflet-grid-label",
              html: '<div class="gridlabel-horiz">(0,0)</div>'
            })
          })
        }
      });
    o.default.SimpleGraticule = s,
      o.default.simpleGraticule = function (t) {
        return new s(t)
      },
      e.SimpleGraticule = s
  }, function (t, e, i) {
    "use strict";

    function d(t) {
      return t / 864e5 + 2440587.5
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.Terminator = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = o.default.Polygon.extend({
        options: {
          color: "#00",
          opacity: .5,
          fillColor: "#00",
          fillOpacity: .5,
          resolution: 2
        },
        initialize: function (t) {
          this.version = "0.1.0",
            this._R2D = 180 / Math.PI,
            this._D2R = Math.PI / 180,
            o.default.Util.setOptions(this, t);
          var e = this._compute(this.options.time || null);
          this.setLatLngs(e)
        },
        setTime: function (t) {
          this.options.time = t;
          var e = this._compute(t || null);
          this.setLatLngs(e)
        },
        _sunEclipticPosition: function (t) {
          var e = t - 2451545,
            i = 280.46 + .9856474 * e,
            a = 357.528 + .9856003 * e;
          return a %= 360, {
            lambda: (i %= 360) + 1.915 * Math.sin(a * this._D2R) + .02 * Math.sin(2 * a * this._D2R),
            R: 1.00014 - .01671 * Math.cos(a * this._D2R) - .0014 * Math.cos(2 * a * this._D2R)
          }
        },
        _eclipticObliquity: function (t) {
          var e = (t - 2451545) / 36525;
          return 23.43929111 - e * (46.836769 / 3600 - e * (1831e-7 / 3600 + e * (5.565e-7 - e * (1.6e-10 - 4.34e-8 * e / 3600))))
        },
        _sunEquatorialPosition: function (t, e) {
          var i = Math.atan(Math.cos(e * this._D2R) * Math.tan(t * this._D2R)) * this._R2D,
            a = Math.asin(Math.sin(e * this._D2R) * Math.sin(t * this._D2R)) * this._R2D;
          return {
            alpha: i += 90 * Math.floor(t / 90) - 90 * Math.floor(i / 90),
            delta: a
          }
        },
        _hourAngle: function (t, e, i) {
          return 15 * (i + t / 15) - e.alpha
        },
        _latitude: function (t, e) {
          return Math.atan(-Math.cos(t * this._D2R) / Math.tan(e.delta * this._D2R)) * this._R2D
        },
        _compute: function (t) {
          for (var e, i, a, n, o = d(e = null == t ? new Date : new Date(t)), s = (18.697374558 + 24.06570982441908 * (d(e) - 2451545)) % 24, r = [], l = this._sunEclipticPosition(o), h = this._eclipticObliquity(o), u = this._sunEquatorialPosition(l.lambda, h), c = 0; c <= 720 * this.options.resolution; c++)
            a = c / this.options.resolution - 360,
            i = this._hourAngle(a, u, s),
            n = this._latitude(i, u),
            r[c + 1] = [n, a];
          return u.delta < 0 ? (r[0] = [90, -360],
              r[r.length] = [90, 360]) : (r[0] = [-90, -360],
              r[r.length] = [-90, 360]),
            r
        }
      });
    o.default.Terminator = s,
      o.default.terminator = function (t) {
        return new s(t)
      },
      e.Terminator = s
  }, function (t, e, i) {
    "use strict";
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      };
    i(130),
      o.default.drawLocal.draw.toolbar.actions = {
        title: "取消绘制",
        text: "取消"
      },
      o.default.drawLocal.draw.toolbar.finish = {
        title: "完成绘制",
        text: "完成"
      },
      o.default.drawLocal.draw.toolbar.undo = {
        title: "删除最后一个绘制的点",
        text: "删除最后的点"
      },
      o.default.drawLocal.draw.toolbar.buttons = {
        polyline: "绘制折线",
        polygon: "绘制多边形",
        rectangle: "绘制矩形",
        circle: "绘制圆",
        marker: "标点"
      },
      o.default.drawLocal.edit.toolbar.actions.save = {
        title: "保存修改.",
        text: "保存"
      },
      o.default.drawLocal.edit.toolbar.actions.cancel = {
        title: "取消编辑，丢弃所有的修改",
        text: "取消"
      },
      o.default.drawLocal.edit.toolbar.actions.clearAll = {
        title: "刪除所有要素",
        text: "刪除所有"
      },
      o.default.drawLocal.edit.toolbar.buttons = {
        edit: "编辑要素",
        editDisabled: "没有需要编辑的要素",
        remove: "删除要素",
        removeDisabled: "没有需要删除的要素"
      },
      o.default.drawLocal.draw.handlers.circle = {
        tooltip: {
          start: "单击并拖动到绘制圆"
        },
        radius: "半径"
      },
      o.default.drawLocal.draw.handlers.marker = {
        tooltip: {
          start: "单击地图标记点"
        }
      },
      o.default.drawLocal.draw.handlers.polygon = {
        tooltip: {
          start: "单击开始绘制形状",
          cont: "单击继续绘制形状",
          end: "单击继续绘制，双击完成绘制"
        }
      },
      o.default.drawLocal.draw.handlers.polyline = {
        error: "<strong>错误:</strong> 面积边缘不可交叉!",
        tooltip: {
          start: "单击开始画线",
          cont: "单击继续画线",
          end: "单击继续画线,双击完成绘制"
        }
      },
      o.default.drawLocal.draw.handlers.rectangle = {
        tooltip: {
          start: "单击并拖动绘制矩形"
        }
      },
      o.default.drawLocal.draw.handlers.simpleshape = {
        tooltip: {
          end: "释放鼠标完成绘图"
        }
      },
      o.default.drawLocal.edit.handlers.edit = {
        tooltip: {
          text: "拖动标记或白色小框进行编辑修改",
          subtext: ""
        }
      },
      o.default.drawLocal.edit.handlers.remove = {
        tooltip: {
          text: "单击目标进行删除"
        }
      },
      o.default.Edit.Marker.prototype._toggleMarkerHighlight = function () {},
      o.default.Draw.Text = o.default.Draw.Marker.extend({
        statics: {
          TYPE: "text"
        },
        options: {
          repeatMode: !1
        },
        initialize: function (t, e) {
          (e = e || {}).icon = this.getIcon(),
            this.type = o.default.Draw.Text.TYPE,
            o.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        updateIcon: function (t) {
          this.options.icon = this.getIcon(t)
        },
        defaultIconAttr: {
          text: "文字",
          color: "#0081c2",
          font_size: 25,
          font_family: "黑体",
          font_style: "normal",
          font_weight: "normal",
          background: !1,
          border: !1
        },
        getIcon: function (t) {
          (t = t || this.defaultIconAttr).text = t.text || this.defaultIconAttr.text;
          var e = this.getTextSize(t),
            i = this.getTextCSS(t);
          return o.default.divIcon({
            className: "leaflet-text-marker",
            iconSize: [e.width, e.height],
            iconAnchor: [e.width / 2, e.height / 2],
            html: '<div style="' + i + '">' + t.text + "</div>"
          })
        },
        getTextSize: function (t) {
          for (var e = t.text.split("<br />"), i = -1, a = 0; a < e.length; a++) {
            var n = e[a].replace(/[\u0391-\uFFE5]/g, "aa").length;
            i < n && (i = n)
          }
          return {
            width: i * (t.font_size || this.defaultIconAttr.font_size) / 2 + 10,
            height: e.length * (t.font_size || this.defaultIconAttr.font_size) * 1.5 + 10
          }
        },
        getTextCSS: function (t) {
          var e = "display:table; padding:5px; color:" + (t.color || this.defaultIconAttr.color) + ";    font-size:" + (t.font_size || this.defaultIconAttr.font_size) + "px;  font-family:'" + (t.font_family || this.defaultIconAttr.font_family) + "';   font-style:" + (t.font_style || this.defaultIconAttr.font_style) + ";    font-weight:" + (t.font_weight || this.defaultIconAttr.font_weight) + ";";
          return t.background && (e += "background-color: " + t.background_color + ";  "),
            t.border && (e += "border: " + t.border_width + "px  " + t.border_style + " " + t.border_color + " ;  "),
            e
        },
        _createMarker: function (t) {
          return new o.default.Marker(t, {
            draggable: !0,
            icon: this.options.icon,
            zIndexOffset: this.options.zIndexOffset
          })
        },
        _onMouseMove: function (t) {
          var e = t.latlng;
          this._mouseMarker && this._mouseMarker.setLatLng(e),
            this._marker ? (this._mouseMarker && (e = this._mouseMarker.getLatLng()),
              this._marker.setLatLng(e)) : (this._marker = this._createMarker(e),
              this._marker.on("click", this._onClick, this),
              this._map.on("click", this._onClick, this).addLayer(this._marker))
        }
      }),
      o.default.Draw.FontMarker = o.default.Draw.Marker.extend({
        statics: {
          TYPE: "font-marker"
        },
        initialize: function (t, e) {
          (e = e || {}).icon = this.getIcon(),
            this.type = o.default.Draw.FontMarker.TYPE,
            o.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        updateIcon: function (t) {
          this.options.icon = this.getIcon(t)
        },
        defaultIconAttr: {
          size: 50,
          color: "#0081c2",
          iconClass: "fa fa-crosshairs"
        },
        getIcon: function (t) {
          return (t = t || this.defaultIconAttr).size = t.size || this.defaultIconAttr.size,
            t.color = t.color || this.defaultIconAttr.color,
            t.iconClass = t.iconClass || this.defaultIconAttr.iconClass,
            o.default.divIcon({
              className: "",
              html: '<i class="' + t.iconClass + '" style="color:' + t.color + ";font-size:" + t.size + 'px;"></i> ',
              iconSize: [t.size + 2, t.size + 2]
            })
        }
      }),
      o.default.ImageOverlay = o.default.ImageOverlay.extend({
        getLatLngs: function () {
          return this._boundsToLatLngs(this.getBounds())
        },
        _boundsToLatLngs: function (t) {
          return [(t = o.default.latLngBounds(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        },
        toGeoJSON: function () {
          var t = this.getLatLngs(),
            e = !o.default.LineUtil.isFlat(t),
            i = e && !o.default.LineUtil.isFlat(t[0]),
            a = o.default.json.latLngsToCoords(t, i ? 2 : e ? 1 : 0, !0);
          return e || (a = [a]),
            o.default.json.getFeature(this, {
              type: (i ? "Multi" : "") + "Polygon",
              coordinates: a
            })
        }
      }),
      o.default.Draw.Image = o.default.Draw.Rectangle.extend({
        statics: {
          TYPE: "image"
        },
        _defstyle: {
          weight: 1,
          fill: !0,
          fillOpacity: .1,
          color: "#ffffff",
          showArea: !1,
          clickable: !0
        },
        options: {
          iconUrl: "",
          opacity: 1,
          metric: !0
        },
        initialize: function (t, e) {
          this.type = o.default.Draw.Image.TYPE,
            this._initialLabelText = o.default.drawLocal.draw.handlers.rectangle.tooltip.start,
            o.default.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _drawShape: function (t) {
          this._shape ? this._shape.setBounds(new o.default.LatLngBounds(this._startLatLng, t)) : (this._shape = new o.default.ImageOverlay(this.options.iconUrl, new o.default.LatLngBounds(this._startLatLng, t), {
              opacity: this.options.opacity
            }),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new o.default.Rectangle(this._shape.getBounds(), this._defstyle),
            e = new o.default.ImageOverlay(this.options.iconUrl, this._shape.getBounds(), {
              opacity: this.options.opacity
            });
          t._imageOverlay = e,
            o.default.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        }
      }),
      o.default.Draw.Polylinefree = o.default.Draw.SimpleShape.extend({
        statics: {
          TYPE: "polylinefree"
        },
        options: {
          allowIntersection: !0,
          shapeOptions: {
            stroke: !0,
            color: "#f06eaa",
            weight: 4,
            opacity: .5,
            fill: !1,
            clickable: !0
          },
          nautic: !1
        },
        initialize: function (t, e) {
          e && e.drawError && (e.drawError = o.default.Util.extend({}, this.options.drawError, e.drawError)),
            this.type = o.default.Draw.Polylinefree.TYPE,
            o.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        _onMouseMove: function (t) {
          this._isDrawing && this._drawShape(t.latlng)
        },
        _drawShape: function (t) {
          this._shape ? this._shape.addLatLng(t) : (this._shape = new o.default.Polyline([], this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new o.default.Polyline(this._shape.getLatLngs(), this.options.shapeOptions);
          o.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
      })
  }, function (t, e, i) {
    "use strict";

    function r(t, e, i) {
      y = t,
        k = i || "",
        E = [],
        m = (e = e || {}).defaultOptions || {
          windowOptions: {
            position: "rt",
            maxmin: !1,
            resize: !0
          },
          autoDisable: !0,
          disableOhter: !0
        },
        "time" == (g = e.version) && (g = (new Date).getTime());
      var a = e.widgetsAtStart;
      if (a && 0 < a.length)
        for (var n = 0; n < a.length; n++) {
          (l = a[n]).hasOwnProperty("uri") && "" != l.uri ? l.hasOwnProperty("visible") && !l.visible || (l.autoDisable = !1,
            l.openAtStart = !0,
            l._nodebug = !0,
            h(l),
            E.push(l)) : console.log("widget未配置uri：" + JSON.stringify(l))
        }
      if (v = e.debugger) {
        var o = '<div id="widget-testbar" class="widgetbar animation-slide-bottom no-print-view" >      <div style="height: 30px; line-height:30px;"><b style="color: #4db3ff;">widget测试栏</b>&nbsp;&nbsp;<button  id="widget-testbar-remove"  type="button" class="btn btn-link btn-xs">关闭</button> </div>     <button id="widget-testbar-disableAll" type="button" class="btn btn-info" ><i class="fa fa-globe"></i>漫游</button></div>';
        (0,
          L.default)("body").append(o),
          (0,
            L.default)("#widget-testbar-remove").click(function (t) {
            p()
          }),
          (0,
            L.default)("#widget-testbar-disableAll").click(function (t) {
            f()
          })
      }
      if ((a = e.widgets) && 0 < a.length) {
        for (n = 0; n < a.length; n++) {
          if ("group" == (l = a[n]).type) {
            o = ' <div class="btn-group dropup">  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-align-justify"></i>' + l.name + ' <span class="caret"></span></button> <ul class="dropdown-menu">';
            for (var s = 0; s < l.children.length; s++) {
              var r = l.children[s];
              r.hasOwnProperty("uri") && "" != r.uri ? (o += ' <li data-widget="' + r.uri + '" class="widget-btn" ><a href="#"><i class="fa fa-star"></i>' + r.name + "</a></li>",
                h(r),
                E.push(r)) : console.log("widget未配置uri：" + JSON.stringify(r))
            }
            o += "</ul></div>",
              v && !l._nodebug && (0,
                L.default)("#widget-testbar").append(o)
          } else {
            if (!l.hasOwnProperty("uri") || "" == l.uri) {
              console.log("widget未配置uri：" + JSON.stringify(l));
              continue
            }
            if (v && !l._nodebug) {
              o = '<button type="button" class="btn btn-primary widget-btn" data-widget="' + l.uri + '"  > <i class="fa fa-globe"></i>' + l.name + " </button>";
              (0,
                L.default)("#widget-testbar").append(o)
            }
            h(l),
              E.push(l)
          }
        }
        v && (0,
          L.default)("#widget-testbar .widget-btn").each(function () {
          (0,
            L.default)(this).click(function (t) {
            var e = (0,
              L.default)(this).attr("data-widget");
            null != e && "" != e && (c(e) ? d(e) : u(e))
          })
        })
      }
      for (n = 0; n < E.length; n++) {
        var l;
        ((l = E[n]).openAtStart || l.createAtStart) && C.push(l)
      }
      (0,
        L.default)(window).resize(function () {
          for (var t = 0; t < E.length; t++) {
            var e = E[t];
            e._class && e._class.indexResize()
          }
        }),
        _()
    }

    function h(t) {
      if (m)
        for (var e in m)
          "windowOptions" == e || t.hasOwnProperty(e) || (t[e] = m[e]);
      var i, a;
      t.path = (i = k + t.uri,
          a = i.lastIndexOf("/"),
          i.substring(0, a + 1)),
        t.name = t.name || t.label
    }

    function u(t, e) {
      null == y && t.map && r(t.map),
        "string" == typeof t ? (t = {
            uri: t
          },
          null != e && (t.disableOhter = !e)) : null == t.uri && console.error("activate激活widget时需要uri参数！");
      for (var i, a = 0; a < E.length; a++) {
        var n = E[a];
        if (t.uri == n.uri || n.id && t.uri == n.id) {
          if ((i = n).isloading)
            return i;
          for (var o in t)
            "uri" != o && (i[o] = t[o]);
          break
        }
      }
      if (null == i && (h(t),
          i = t,
          E.push(t)),
        v && console.log("开始激活widget：" + i.uri),
        i.disableOhter ? f(i.uri, i.group) : l(i.group, i.uri),
        i._class)
        if (i._class.isActivate)
          if (i._class.update)
            i._class.update();
          else {
            i._class.disableBase();
            var s = setInterval(function () {
              i._class.isActivate || (i._class.activateBase(),
                clearInterval(s))
            }, 200)
          }
      else
        i._class.activateBase();
      else {
        for (a = 0; a < C.length; a++)
          if (C[a].uri == i.uri)
            return C[a];
        C.push(i),
          1 == C.length && _()
      }
      return i
    }

    function a(t) {
      for (var e = 0; e < E.length; e++) {
        var i = E[e];
        if (t == i.uri || t == i.id)
          return i
      }
    }

    function n(t) {
      var e = a(t);
      return e ? e._class : null
    }

    function c(t) {
      var e = n(t);
      return null != e && e.isActivate
    }

    function d(t) {
      if (null != t)
        for (var e = 0; e < E.length; e++) {
          var i = E[e];
          if (i._class && (t == i.uri || t == i.id)) {
            i._class.disableBase();
            break
          }
        }
    }

    function f(t, e) {
      for (var i = 0; i < E.length; i++) {
        var a = E[i];
        if (e && a.group == e)
        ;
        else if (!a.autoDisable)
          continue;
        (!t || t != a.uri && t != a.id) && a._class && a._class.disableBase()
      }
    }

    function l(t, e) {
      if (null != t)
        for (var i = 0; i < E.length; i++) {
          var a = E[i];
          if (a.group == t) {
            if (e && (e == a.uri || e == a.id))
              continue;
            a._class && a._class.disableBase()
          }
        }
    }

    function _() {
      if (0 != C.length) {
        if (s)
          return void setTimeout(_, 500);
        s = !0,
          (o = C[0]).isloading = !0;
        var t = o.uri;
        g && (-1 == t.indexOf("?") ? t += "?time=" + g : t += "&time=" + g),
          window.NProgress && NProgress.start(),
          v && console.log("开始加载js：" + k + t),
          x.Loader.async([k + t], function () {
            s = !1,
              o.isloading = !1,
              v && console.log("完成js加载：" + k + t),
              window.NProgress && NProgress.done(!0),
              C.shift(),
              _()
          })
      }
    }

    function p() {
      (0,
        L.default)("#widget-testbar").remove()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.getBasePath = e.getCacheVersion = e.getDefWindowOptions = e.bindClass = e.removeDebugeBar = e.getClass = e.getWidget = e.eachWidget = e.disableGroup = e.disableAll = e.disable = e.activate = e.isActivate = e.init = void 0;
    var m, g, v, y, o, s, b, w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      M = i(6),
      L = (b = M) && b.__esModule ? b : {
        default: b
      },
      x = i(44),
      k = "",
      E = [],
      C = [];
    e.init = r,
      e.isActivate = c,
      e.activate = u,
      e.disable = d,
      e.disableAll = f,
      e.disableGroup = l,
      e.eachWidget = function (t) {
        for (var e = 0; e < E.length; e++)
          t(E[e])
      },
      e.getWidget = a,
      e.getClass = n,
      e.removeDebugeBar = p,
      e.bindClass = function (t) {
        if (null != o)
          return o.isloading = !1,
            o._class = new t(o, y),
            o._class.activateBase(),
            o._class;
        for (var e = function () {
            for (var t, e = document.scripts, i = e.length - 1; 0 <= i; i--)
              if (null != (t = e[i].src) && "" != t && -1 != t.indexOf("widgets"))
                return t;
            return ""
          }(), i = 0; i < E.length; i++) {
          var a = E[i];
          if (e.endsWith(a.uri))
            return a.isloading = !1,
              a._class = new t(a, y),
              a._class.activateBase(),
              a._class
        }
      },
      e.getDefWindowOptions = function () {
        return function t(e, i) {
          if (null == e || "object" != (void 0 === e ? "undefined" : w(e)))
            return e;
          if (e.constructor != Object && e.constructor != Array)
            return e;
          if (e.constructor == Date || e.constructor == RegExp || e.constructor == Function || e.constructor == String || e.constructor == Number || e.constructor == Boolean)
            return new e.constructor(e);
          for (var a in i = i || new e.constructor,
              e)
            i[a] = void 0 === i[a] ? t(e[a], null) : i[a];
          return i
        }(m.windowOptions)
      },
      e.getCacheVersion = function () {
        return g
      },
      e.getBasePath = function () {
        return k
      }
  }, function (t, e, i) {
    "use strict";

    function o(t) {
      return "complete" === t.readyState || "loaded" === t.readyState
    }

    function d(t, e, i) {
      function a() {
        t.onload = t.onreadystatechange = null,
          t = null,
          e()
      }
      var n = "onload" in t;
      "css" !== i || !r && n ? n ? (t.onload = a,
          t.onerror = function () {
            t.onerror = null,
              "css" == i ? console.error("该css文件不存在：" + t.href) : console.error("该js文件不存在：" + t.src),
              a()
          }
        ) : t.onreadystatechange = function () {
          o(t) && a()
        } :
        setTimeout(function () {
          ! function t(e, i) {
            var a;
            e.sheet && (a = !0),
              setTimeout(function () {
                a ? i() : t(e, i)
              }, 20)
          }(t, e)
        }, 1)
    }

    function s(e, i, t, a) {
      function n() {
        var t = i.indexOf(e); -
        1 < t && i.splice(t, 1),
          0 === i.length && a()
      }
      var o, s, r, l, h, u, c;
      e ? f.test(e) ? (h = e,
        u = n,
        (c = document.createElement("link")).rel = "stylesheet",
        d(c, u, "css"),
        c.async = !0,
        c.href = h,
        _.appendChild(c)) : (o = e,
        s = t,
        r = n,
        (l = document.createElement("script")).charset = "utf-8",
        d(l, r, "js"),
        l.async = !s.sync,
        l.src = o,
        _.appendChild(l)) : setTimeout(function () {
        n()
      })
    }

    function a(t, e, i) {
      var a = function () {
        i && i()
      };
      if (0 !== (t = Array.prototype.slice.call(t || [])).length)
        for (var n = 0, o = t.length; n < o; n++)
          s(t[n], t, e, a);
      else
        a()
    }

    function n(t, e) {
      if (o(t))
        e();
      else {
        var i = !1;
        window.addEventListener("load", function () {
            i || (e(),
              i = !0)
          }),
          setTimeout(function () {
            i || (e(),
              i = !0)
          }, 1500)
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var f = new RegExp("\\.css"),
      _ = document.head || document.getElementsByTagName("head")[0],
      r = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536,
      l = {
        async: function (t, e) {
          n(document, function () {
            a(t, {}, e)
          })
        },
        sync: function (t, e) {
          n(document, function () {
            a(t, {
              sync: !0
            }, e)
          })
        }
      };
    e.Loader = l
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (null != t)
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e.default = t,
        e
    }

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    i(46),
      i(47);
    var o = n(i(1));
    i(48),
      i(49),
      i(50),
      i(51),
      i(52),
      i(53),
      i(54),
      i(55),
      i(56),
      i(59),
      i(60);
    var s = n(i(17)),
      r = i(61),
      l = a(i(23)),
      h = a(i(3)),
      u = i(122),
      c = i(123),
      d = i(124),
      f = i(125),
      _ = i(126),
      p = i(24),
      m = i(25),
      g = i(39),
      v = i(38),
      y = i(40),
      b = i(41),
      w = i(129),
      M = i(132),
      L = i(133),
      x = a(i(43)),
      k = i(134),
      E = {
        name: "",
        version: "",
        author: "",
        website: ""
      };
    E.createMap = r.createMap,
      E.layer = l,
      E.pointconvert = s.default,
      E.util = h,
      E.measure = u.measure,
      E.layer.baiduTileLayer = v.baiduTileLayer,
      E.Marker = M.Marker,
      E.Draw = w.Draw,
      E.MeasureTool = L.MeasureTool,
      E.Layer = {},
      E.Layer.VirtualGrid = c.VirtualGrid,
      E.Layer.HeatLayer = f.HeatLayer,
      E.Layer.MapVLayer = _.MapVLayer,
      E.Layer.FlowEcharts = d.FlowEcharts,
      E.Layer.ArcGISTile = p.ArcGISTile,
      E.Layer.TiandituLayer = m.TiandituLayer,
      E.Layer.TiandituMercatorLayer = m.TiandituMercatorLayer,
      E.Layer.WMTS = g.WMTS,
      E.Layer.SimpleGraticule = y.SimpleGraticule,
      E.Layer.Terminator = b.Terminator;
    var C = x;
    C.BaseWidget = k.BaseWidget,
      o.default.la = E,
      o.default.widget = C,
      // console.log("当前Leaflet版本：" + o.default.version + " ， 版本：" + E.version),
      t.exports = o.default
  }, function (t, e) {}, function (t, e) {}, function (t, e, i) {
    "use strict";

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    var n = a(i(1)),
      o = a(i(17)),
      s = function (t) {
        if (t && t.__esModule)
          return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t,
          e
      }(i(3)),
      r = a(i(6));
    n.default.Map.include({
      setConvertType: function (t) {
        this.options.pointconvertType = t
      },
      getConvertType: function () {
        return this.options.pointconvertType
      },
      hasConvert: function () {
        var t = this.options.pointconvertType;
        return "gcj" == t || "bd" == t
      },
      convert2map: function (t) {
        var e, i;
        if (i = t.lng && t.lat ? (e = t.lng,
            t.lat) : (e = t[1],
            t[0]),
          "gcj" == this.options.pointconvertType)
          e = (a = o.default.wgs2gcj([e, i]))[0],
          i = a[1];
        else if ("bd" == this.options.pointconvertType) {
          var a;
          e = (a = o.default.wgs2bd([e, i]))[0],
            i = a[1]
        }
        return [i, e]
      },
      convert2wgs: function (t) {
        var e, i;
        if (i = t.lng && t.lat ? (e = t.lng,
            t.lat) : (e = t[1],
            t[0]),
          "gcj" == this.options.pointconvertType)
          e = (a = o.default.gcj2wgs([e, i]))[0],
          i = a[1];
        else if ("bd" == this.options.pointconvertType) {
          var a;
          e = (a = o.default.bd2wgs([e, i]))[0],
            i = a[1]
        }
        return [i, e]
      },
      centerAt: function (t, e) {
        var i = this.getZoom();
        if (this.gisdata && this.gisdata.config && this.gisdata.config.centerAutoLevel) {
          var a = this.gisdata.config.centerAutoLevel;
          i < a && this.getMaxZoom() >= a && (i = a)
        }
        return this.stop(),
          this.setView(t, i, e),
          this
      },
      centerAtByWgs: function (t, e) {
        return t = this.convert2map(t),
          this.centerAt(t, e),
          this
      },
      centerAtLayer: function (t) {
        return t instanceof n.default.Marker ? this.centerAt(t.getLatLng()) : t instanceof n.default.CircleMarker ? this.centerAt(t.getLatLng()) : t instanceof n.default.Circle ? this.fitBounds(t.getBounds()) : t instanceof n.default.Rectangle ? this.fitBounds(t.getBounds()) : t instanceof n.default.Polygon ? this.fitBounds(t.getBounds()) : t instanceof n.default.Polyline ? this.fitBounds(t.getBounds()) : t instanceof n.default.LayerGroup ? this.fitBounds(t.getBounds()) : t instanceof n.default.FeatureGroup ? this.fitBounds(t.getBounds()) : t.getLatLng ? this.centerAt(t.getLatLng()) : t.getBounds && this.fitBounds(t.getBounds()),
          this
      },
      goHomeExtent: function () {
        if (null != this.gisdata && null != this.gisdata.config && null != this.gisdata.config.center)
          return this.setView(this.gisdata.config.center, this.gisdata.config.zoom),
            this
      },
      changeBaseMap: function (t) {
        if (null != this.gisdata && null != this.gisdata.config && null != this.gisdata.config.basemaps) {
          for (var e, i, a = 0; a < this.gisdata.config.basemaps.length; a++) {
            var n = this.gisdata.config.basemaps[a];
            null != n.name && "" != n.name && null != n._layer && (null == i && (i = n._layer),
              t != a && n.name != t || (e = n._layer),
              this.hasLayer(n._layer) && this.removeLayer(n._layer))
          }
          return null != e ? ((0,
                r.default)(".leaflet-container").css({
                background: e.config.background || "#fff"
              }),
              this.addLayer(e)) : null != i && ((0,
                r.default)(".leaflet-container").css({
                background: i.config.background || "#fff"
              }),
              this.addLayer(i)),
            this
        }
      },
      getLayer: function (t, e) {
        var i = this.getLayers(t, e);
        return 0 == i.length ? null : i[0]
      },
      getLayers: function (t, e) {
        var i = [];
        null == e && (e = "name");
        var a = this.gisdata.config.basemaps;
        if (a && 0 < a.length)
          for (var n = 0; n < a.length; n++) {
            null != (o = a[n]) && o[e] == t && i.push(o._layer)
          }
        if ((a = this.gisdata.config.operationallayers) && 0 < a.length)
          for (n = 0; n < a.length; n++) {
            var o;
            null != (o = a[n]) && o[e] == t && i.push(o._layer)
          }
        return i
      },
      getConfig: function () {
        return s.clone(this.gisdata.config)
      }
    })
  }, function (t, e, i) {
    "use strict";
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = o.default.Marker.prototype._initIcon,
      r = o.default.Marker.prototype._setPos,
      l = "msTransform" === o.default.DomUtil.TRANSFORM;
    o.default.Marker.addInitHook(function () {
        var t = this.options.icon && this.options.icon.options && this.options.icon.options.iconAnchor;
        t && (t = t[0] + "px " + t[1] + "px"),
          this.options.rotationOrigin = this.options.rotationOrigin || t || "center bottom",
          this.options.rotationAngle = this.options.rotationAngle || 0,
          this.on("drag", function (t) {
            t.target._applyRotation()
          })
      }),
      o.default.Marker.include({
        _initIcon: function () {
          s.call(this)
        },
        _setPos: function (t) {
          r.call(this, t),
            this._applyRotation()
        },
        _applyRotation: function () {
          this.options.rotationAngle && (this._icon.style[o.default.DomUtil.TRANSFORM + "Origin"] = this.options.rotationOrigin,
            l ? this._icon.style[o.default.DomUtil.TRANSFORM] = "rotate(" + this.options.rotationAngle + "deg)" : this._icon.style[o.default.DomUtil.TRANSFORM] += " rotateZ(" + this.options.rotationAngle + "deg)")
        },
        setRotationAngle: function (t) {
          return this.options.rotationAngle = t,
            this.update(),
            this
        },
        setRotationOrigin: function (t) {
          return this.options.rotationOrigin = t,
            this.update(),
            this
        }
      })
  }, function (t, e, i) {
    "use strict";
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      };
    o.default.TileLayer.prototype.getTileUrl = function (t) {
      var e = {
        r: o.default.Browser.retina ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      if (this._map && !this._map.options.crs.infinite) {
        var i = this._globalTileRange.max.y - t.y;
        this.options.tms && (e.y = i),
          e["-y"] = i
      }
      return this.options.zOffset && (e.z = e.z + Number(this.options.zOffset)),
        o.default.Util.template(this._url || "", o.default.extend(e, this.options))
    }
  }, function (t, e) {}, function (t, e) {}, function (t, e, i) {
    ! function (t) {
      "use strict";
      var e = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
          maxClusterRadius: 80,
          iconCreateFunction: null,
          clusterPane: L.Marker.prototype.options.pane,
          spiderfyOnMaxZoom: !0,
          showCoverageOnHover: !0,
          zoomToBoundsOnClick: !0,
          singleMarkerMode: !1,
          disableClusteringAtZoom: null,
          removeOutsideVisibleBounds: !0,
          animate: !0,
          animateAddingMarkers: !1,
          spiderfyDistanceMultiplier: 1,
          spiderLegPolylineOptions: {
            weight: 1.5,
            color: "#222",
            opacity: .5
          },
          chunkedLoading: !1,
          chunkInterval: 200,
          chunkDelay: 50,
          chunkProgress: null,
          polygonOptions: {}
        },
        initialize: function (t) {
          L.Util.setOptions(this, t),
            this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction),
            this._featureGroup = L.featureGroup(),
            this._featureGroup.addEventParent(this),
            this._nonPointGroup = L.featureGroup(),
            this._nonPointGroup.addEventParent(this),
            this._inZoomAnimation = 0,
            this._needsClustering = [],
            this._needsRemoving = [],
            this._currentShownBounds = null,
            this._queue = [],
            this._childMarkerEventHandlers = {
              dragstart: this._childMarkerDragStart,
              move: this._childMarkerMoved,
              dragend: this._childMarkerDragEnd
            };
          var e = L.DomUtil.TRANSITION && this.options.animate;
          L.extend(this, e ? this._withAnimation : this._noAnimation),
            this._markerCluster = e ? L.MarkerCluster : L.MarkerClusterNonAnimated
        },
        addLayer: function (t) {
          if (t instanceof L.LayerGroup)
            return this.addLayers([t]);
          if (!t.getLatLng)
            return this._nonPointGroup.addLayer(t),
              this.fire("layeradd", {
                layer: t
              }),
              this;
          if (!this._map)
            return this._needsClustering.push(t),
              this.fire("layeradd", {
                layer: t
              }),
              this;
          if (this.hasLayer(t))
            return this;
          this._unspiderfy && this._unspiderfy(),
            this._addLayer(t, this._maxZoom),
            this.fire("layeradd", {
              layer: t
            }),
            this._topClusterLevel._recalculateBounds(),
            this._refreshClustersIcons();
          var e = t,
            i = this._zoom;
          if (t.__parent)
            for (; e.__parent._zoom >= i;)
              e = e.__parent;
          return this._currentShownBounds.contains(e.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, e) : this._animationAddLayerNonAnimated(t, e)),
            this
        },
        removeLayer: function (t) {
          return t instanceof L.LayerGroup ? this.removeLayers([t]) : (t.getLatLng ? this._map ? t.__parent && (this._unspiderfy && (this._unspiderfy(),
                this._unspiderfyLayer(t)),
              this._removeLayer(t, !0),
              this.fire("layerremove", {
                layer: t
              }),
              this._topClusterLevel._recalculateBounds(),
              this._refreshClustersIcons(),
              t.off(this._childMarkerEventHandlers, this),
              this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t),
                t.clusterShow && t.clusterShow())) : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push({
                layer: t,
                latlng: t._latlng
              }),
              this.fire("layerremove", {
                layer: t
              })) : (this._nonPointGroup.removeLayer(t),
              this.fire("layerremove", {
                layer: t
              })),
            this)
        },
        addLayers: function (a, n) {
          if (!L.Util.isArray(a))
            return this.addLayer(a);
          var o, s = this._featureGroup,
            r = this._nonPointGroup,
            l = this.options.chunkedLoading,
            h = this.options.chunkInterval,
            u = this.options.chunkProgress,
            c = a.length,
            d = 0,
            f = !0;
          if (this._map) {
            var _ = (new Date).getTime(),
              p = L.bind(function () {
                for (var t = (new Date).getTime(); d < c && !(l && d % 200 == 0 && (new Date).getTime() - t > h); d++)
                  if ((o = a[d]) instanceof L.LayerGroup)
                    f && (a = a.slice(),
                      f = !1),
                    this._extractNonGroupLayers(o, a),
                    c = a.length;
                  else if (o.getLatLng) {
                  if (!this.hasLayer(o) && (this._addLayer(o, this._maxZoom),
                      n || this.fire("layeradd", {
                        layer: o
                      }),
                      o.__parent && 2 === o.__parent.getChildCount())) {
                    var e = o.__parent.getAllChildMarkers(),
                      i = e[0] === o ? e[1] : e[0];
                    s.removeLayer(i)
                  }
                } else
                  r.addLayer(o),
                  n || this.fire("layeradd", {
                    layer: o
                  });
                u && u(d, c, (new Date).getTime() - _),
                  d === c ? (this._topClusterLevel._recalculateBounds(),
                    this._refreshClustersIcons(),
                    this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(p, this.options.chunkDelay)
              }, this);
            p()
          } else
            for (var t = this._needsClustering; d < c; d++)
              (o = a[d]) instanceof L.LayerGroup ? (f && (a = a.slice(),
                  f = !1),
                this._extractNonGroupLayers(o, a),
                c = a.length) : o.getLatLng ? this.hasLayer(o) || t.push(o) : r.addLayer(o);
          return this
        },
        removeLayers: function (t) {
          var e, i, a = t.length,
            n = this._featureGroup,
            o = this._nonPointGroup,
            s = !0;
          if (!this._map) {
            for (e = 0; e < a; e++)
              (i = t[e]) instanceof L.LayerGroup ? (s && (t = t.slice(),
                  s = !1),
                this._extractNonGroupLayers(i, t),
                a = t.length) : (this._arraySplice(this._needsClustering, i),
                o.removeLayer(i),
                this.hasLayer(i) && this._needsRemoving.push({
                  layer: i,
                  latlng: i._latlng
                }),
                this.fire("layerremove", {
                  layer: i
                }));
            return this
          }
          if (this._unspiderfy) {
            this._unspiderfy();
            var r = t.slice(),
              l = a;
            for (e = 0; e < l; e++)
              (i = r[e]) instanceof L.LayerGroup ? (this._extractNonGroupLayers(i, r),
                l = r.length) : this._unspiderfyLayer(i)
          }
          for (e = 0; e < a; e++)
            (i = t[e]) instanceof L.LayerGroup ? (s && (t = t.slice(),
                s = !1),
              this._extractNonGroupLayers(i, t),
              a = t.length) : i.__parent ? (this._removeLayer(i, !0, !0),
              this.fire("layerremove", {
                layer: i
              }),
              n.hasLayer(i) && (n.removeLayer(i),
                i.clusterShow && i.clusterShow())) : (o.removeLayer(i),
              this.fire("layerremove", {
                layer: i
              }));
          return this._topClusterLevel._recalculateBounds(),
            this._refreshClustersIcons(),
            this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds),
            this
        },
        clearLayers: function () {
          return this._map || (this._needsClustering = [],
              this._needsRemoving = [],
              delete this._gridClusters,
              delete this._gridUnclustered),
            this._noanimationUnspiderfy && this._noanimationUnspiderfy(),
            this._featureGroup.clearLayers(),
            this._nonPointGroup.clearLayers(),
            this.eachLayer(function (t) {
              t.off(this._childMarkerEventHandlers, this),
                delete t.__parent
            }, this),
            this._map && this._generateInitialClusters(),
            this
        },
        getBounds: function () {
          var t = new L.LatLngBounds;
          this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
          for (var e = this._needsClustering.length - 1; 0 <= e; e--)
            t.extend(this._needsClustering[e].getLatLng());
          return t.extend(this._nonPointGroup.getBounds()),
            t
        },
        eachLayer: function (t, e) {
          var i, a, n, o = this._needsClustering.slice(),
            s = this._needsRemoving;
          for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(o),
            a = o.length - 1; 0 <= a; a--) {
            for (i = !0,
              n = s.length - 1; 0 <= n; n--)
              if (s[n].layer === o[a]) {
                i = !1;
                break
              }
            i && t.call(e, o[a])
          }
          this._nonPointGroup.eachLayer(t, e)
        },
        getLayers: function () {
          var e = [];
          return this.eachLayer(function (t) {
              e.push(t)
            }),
            e
        },
        getLayer: function (e) {
          var i = null;
          return e = parseInt(e, 10),
            this.eachLayer(function (t) {
              L.stamp(t) === e && (i = t)
            }),
            i
        },
        hasLayer: function (t) {
          if (!t)
            return !1;
          var e, i = this._needsClustering;
          for (e = i.length - 1; 0 <= e; e--)
            if (i[e] === t)
              return !0;
          for (i = this._needsRemoving,
            e = i.length - 1; 0 <= e; e--)
            if (i[e].layer === t)
              return !1;
          return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t)
        },
        zoomToShowLayer: function (t, e) {
          "function" != typeof e && (e = function () {});
          var i = function () {
            !t._icon && !t.__parent._icon || this._inZoomAnimation || (this._map.off("moveend", i, this),
              this.off("animationend", i, this),
              t._icon ? e() : t.__parent._icon && (this.once("spiderfied", e, this),
                t.__parent.spiderfy()))
          };
          t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", i, this),
            this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this),
            this.on("animationend", i, this),
            t.__parent.zoomToBounds())
        },
        onAdd: function (t) {
          var e, i, a;
          if (this._map = t,
            !isFinite(this._map.getMaxZoom()))
            throw "Map has no maxZoom specified";
          for (this._featureGroup.addTo(t),
            this._nonPointGroup.addTo(t),
            this._gridClusters || this._generateInitialClusters(),
            this._maxLat = t.options.crs.projection.MAX_LATITUDE,
            e = 0,
            i = this._needsRemoving.length; e < i; e++)
            (a = this._needsRemoving[e]).newlatlng = a.layer._latlng,
            a.layer._latlng = a.latlng;
          for (e = 0,
            i = this._needsRemoving.length; e < i; e++)
            a = this._needsRemoving[e],
            this._removeLayer(a.layer, !0),
            a.layer._latlng = a.newlatlng;
          this._needsRemoving = [],
            this._zoom = Math.round(this._map._zoom),
            this._currentShownBounds = this._getExpandedVisibleBounds(),
            this._map.on("zoomend", this._zoomEnd, this),
            this._map.on("moveend", this._moveEnd, this),
            this._spiderfierOnAdd && this._spiderfierOnAdd(),
            this._bindEvents(),
            i = this._needsClustering,
            this._needsClustering = [],
            this.addLayers(i, !0)
        },
        onRemove: function (t) {
          t.off("zoomend", this._zoomEnd, this),
            t.off("moveend", this._moveEnd, this),
            this._unbindEvents(),
            this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""),
            this._spiderfierOnRemove && this._spiderfierOnRemove(),
            delete this._maxLat,
            this._hideCoverage(),
            this._featureGroup.remove(),
            this._nonPointGroup.remove(),
            this._featureGroup.clearLayers(),
            this._map = null
        },
        getVisibleParent: function (t) {
          for (var e = t; e && !e._icon;)
            e = e.__parent;
          return e || null
        },
        _arraySplice: function (t, e) {
          for (var i = t.length - 1; 0 <= i; i--)
            if (t[i] === e)
              return t.splice(i, 1),
                !0
        },
        _removeFromGridUnclustered: function (t, e) {
          for (var i = this._map, a = this._gridUnclustered, n = Math.floor(this._map.getMinZoom()); n <= e && a[e].removeObject(t, i.project(t.getLatLng(), e)); e--)
          ;
        },
        _childMarkerDragStart: function (t) {
          t.target.__dragStart = t.target._latlng
        },
        _childMarkerMoved: function (t) {
          if (!this._ignoreMove && !t.target.__dragStart) {
            var e = t.target._popup && t.target._popup.isOpen();
            this._moveChild(t.target, t.oldLatLng, t.latlng),
              e && t.target.openPopup()
          }
        },
        _moveChild: function (t, e, i) {
          t._latlng = e,
            this.removeLayer(t),
            t._latlng = i,
            this.addLayer(t)
        },
        _childMarkerDragEnd: function (t) {
          var e = t.target.__dragStart;
          delete t.target.__dragStart,
            e && this._moveChild(t.target, e, t.target._latlng)
        },
        _removeLayer: function (t, e, i) {
          var a = this._gridClusters,
            n = this._gridUnclustered,
            o = this._featureGroup,
            s = this._map,
            r = Math.floor(this._map.getMinZoom());
          e && this._removeFromGridUnclustered(t, this._maxZoom);
          var l, h = t.__parent,
            u = h._markers;
          for (this._arraySplice(u, t); h && (h._childCount--,
              h._boundsNeedUpdate = !0,
              !(h._zoom < r));)
            e && h._childCount <= 1 ? (l = h._markers[0] === t ? h._markers[1] : h._markers[0],
              a[h._zoom].removeObject(h, s.project(h._cLatLng, h._zoom)),
              n[h._zoom].addObject(l, s.project(l.getLatLng(), h._zoom)),
              this._arraySplice(h.__parent._childClusters, h),
              h.__parent._markers.push(l),
              l.__parent = h.__parent,
              h._icon && (o.removeLayer(h),
                i || o.addLayer(l))) : h._iconNeedsUpdate = !0,
            h = h.__parent;
          delete t.__parent
        },
        _isOrIsParent: function (t, e) {
          for (; e;) {
            if (t === e)
              return !0;
            e = e.parentNode
          }
          return !1
        },
        fire: function (t, e, i) {
          if (e && e.layer instanceof L.MarkerCluster) {
            if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget))
              return;
            t = "cluster" + t
          }
          L.FeatureGroup.prototype.fire.call(this, t, e, i)
        },
        listens: function (t, e) {
          return L.FeatureGroup.prototype.listens.call(this, t, e) || L.FeatureGroup.prototype.listens.call(this, "cluster" + t, e)
        },
        _defaultIconCreateFunction: function (t) {
          var e = t.getChildCount(),
            i = " marker-cluster-";
          return i += e < 10 ? "small" : e < 100 ? "medium" : "large",
            new L.DivIcon({
              html: "<div><span>" + e + "</span></div>",
              className: "marker-cluster" + i,
              iconSize: new L.Point(40, 40)
            })
        },
        _bindEvents: function () {
          var t = this._map,
            e = this.options.spiderfyOnMaxZoom,
            i = this.options.showCoverageOnHover,
            a = this.options.zoomToBoundsOnClick;
          (e || a) && this.on("clusterclick", this._zoomOrSpiderfy, this),
            i && (this.on("clustermouseover", this._showCoverage, this),
              this.on("clustermouseout", this._hideCoverage, this),
              t.on("zoomend", this._hideCoverage, this))
        },
        _zoomOrSpiderfy: function (t) {
          for (var e = t.layer, i = e; 1 === i._childClusters.length;)
            i = i._childClusters[0];
          i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom ? e.spiderfy() : this.options.zoomToBoundsOnClick && e.zoomToBounds(),
            t.originalEvent && 13 === t.originalEvent.keyCode && this._map._container.focus()
        },
        _showCoverage: function (t) {
          var e = this._map;
          this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon),
            2 < t.layer.getChildCount() && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions),
              e.addLayer(this._shownPolygon)))
        },
        _hideCoverage: function () {
          this._shownPolygon && (this._map.removeLayer(this._shownPolygon),
            this._shownPolygon = null)
        },
        _unbindEvents: function () {
          var t = this.options.spiderfyOnMaxZoom,
            e = this.options.showCoverageOnHover,
            i = this.options.zoomToBoundsOnClick,
            a = this._map;
          (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this),
            e && (this.off("clustermouseover", this._showCoverage, this),
              this.off("clustermouseout", this._hideCoverage, this),
              a.off("zoomend", this._hideCoverage, this))
        },
        _zoomEnd: function () {
          this._map && (this._mergeSplitClusters(),
            this._zoom = Math.round(this._map._zoom),
            this._currentShownBounds = this._getExpandedVisibleBounds())
        },
        _moveEnd: function () {
          if (!this._inZoomAnimation) {
            var t = this._getExpandedVisibleBounds();
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, t),
              this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t),
              this._currentShownBounds = t
          }
        },
        _generateInitialClusters: function () {
          var t = Math.ceil(this._map.getMaxZoom()),
            e = Math.floor(this._map.getMinZoom()),
            i = this.options.maxClusterRadius,
            a = i;
          "function" != typeof i && (a = function () {
              return i
            }),
            null !== this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1),
            this._maxZoom = t,
            this._gridClusters = {},
            this._gridUnclustered = {};
          for (var n = t; e <= n; n--)
            this._gridClusters[n] = new L.DistanceGrid(a(n)),
            this._gridUnclustered[n] = new L.DistanceGrid(a(n));
          this._topClusterLevel = new this._markerCluster(this, e - 1)
        },
        _addLayer: function (t, e) {
          var i, a, n = this._gridClusters,
            o = this._gridUnclustered,
            s = Math.floor(this._map.getMinZoom());
          for (this.options.singleMarkerMode && this._overrideMarkerIcon(t),
            t.on(this._childMarkerEventHandlers, this); s <= e; e--) {
            i = this._map.project(t.getLatLng(), e);
            var r = n[e].getNearObject(i);
            if (r)
              return r._addChild(t),
                void(t.__parent = r);
            if (r = o[e].getNearObject(i)) {
              var l = r.__parent;
              l && this._removeLayer(r, !1);
              var h = new this._markerCluster(this, e, r, t);
              n[e].addObject(h, this._map.project(h._cLatLng, e)),
                r.__parent = h;
              var u = t.__parent = h;
              for (a = e - 1; a > l._zoom; a--)
                u = new this._markerCluster(this, a, u),
                n[a].addObject(u, this._map.project(r.getLatLng(), a));
              return l._addChild(u),
                void this._removeFromGridUnclustered(r, e)
            }
            o[e].addObject(t, i)
          }
          this._topClusterLevel._addChild(t),
            t.__parent = this._topClusterLevel
        },
        _refreshClustersIcons: function () {
          this._featureGroup.eachLayer(function (t) {
            t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon()
          })
        },
        _enqueue: function (t) {
          this._queue.push(t),
            this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        },
        _processQueue: function () {
          for (var t = 0; t < this._queue.length; t++)
            this._queue[t].call(this);
          this._queue.length = 0,
            clearTimeout(this._queueTimeout),
            this._queueTimeout = null
        },
        _mergeSplitClusters: function () {
          var t = Math.round(this._map._zoom);
          this._processQueue(),
            this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(),
              this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()),
              this._animationZoomIn(this._zoom, t)) : this._zoom > t ? (this._animationStart(),
              this._animationZoomOut(this._zoom, t)) : this._moveEnd()
        },
        _getExpandedVisibleBounds: function () {
          return this.options.removeOutsideVisibleBounds ? L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1)) : this._mapBoundsInfinite
        },
        _checkBoundsMaxLat: function (t) {
          var e = this._maxLat;
          return void 0 !== e && (t.getNorth() >= e && (t._northEast.lat = 1 / 0),
              t.getSouth() <= -e && (t._southWest.lat = -1 / 0)),
            t
        },
        _animationAddLayerNonAnimated: function (t, e) {
          if (e === t)
            this._featureGroup.addLayer(t);
          else if (2 === e._childCount) {
            e._addToMap();
            var i = e.getAllChildMarkers();
            this._featureGroup.removeLayer(i[0]),
              this._featureGroup.removeLayer(i[1])
          } else
            e._updateIcon()
        },
        _extractNonGroupLayers: function (t, e) {
          var i, a = t.getLayers(),
            n = 0;
          for (e = e || []; n < a.length; n++)
            (i = a[n]) instanceof L.LayerGroup ? this._extractNonGroupLayers(i, e) : e.push(i);
          return e
        },
        _overrideMarkerIcon: function (t) {
          return t.options.icon = this.options.iconCreateFunction({
            getChildCount: function () {
              return 1
            },
            getAllChildMarkers: function () {
              return [t]
            }
          })
        }
      });
      L.MarkerClusterGroup.include({
          _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
        }),
        L.MarkerClusterGroup.include({
          _noAnimation: {
            _animationStart: function () {},
            _animationZoomIn: function (t, e) {
              this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                this.fire("animationend")
            },
            _animationZoomOut: function (t, e) {
              this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                this.fire("animationend")
            },
            _animationAddLayer: function (t, e) {
              this._animationAddLayerNonAnimated(t, e)
            }
          },
          _withAnimation: {
            _animationStart: function () {
              this._map._mapPane.className += " leaflet-cluster-anim",
                this._inZoomAnimation++
            },
            _animationZoomIn: function (n, o) {
              var s, r = this._getExpandedVisibleBounds(),
                l = this._featureGroup,
                t = Math.floor(this._map.getMinZoom());
              this._ignoreMove = !0,
                this._topClusterLevel._recursively(r, n, t, function (t) {
                  var e, i = t._latlng,
                    a = t._markers;
                  for (r.contains(i) || (i = null),
                    t._isSingleParent() && n + 1 === o ? (l.removeLayer(t),
                      t._recursivelyAddChildrenToMap(null, o, r)) : (t.clusterHide(),
                      t._recursivelyAddChildrenToMap(i, o, r)),
                    s = a.length - 1; 0 <= s; s--)
                    e = a[s],
                    r.contains(e._latlng) || l.removeLayer(e)
                }),
                this._forceLayout(),
                this._topClusterLevel._recursivelyBecomeVisible(r, o),
                l.eachLayer(function (t) {
                  t instanceof L.MarkerCluster || !t._icon || t.clusterShow()
                }),
                this._topClusterLevel._recursively(r, n, o, function (t) {
                  t._recursivelyRestoreChildPositions(o)
                }),
                this._ignoreMove = !1,
                this._enqueue(function () {
                  this._topClusterLevel._recursively(r, n, t, function (t) {
                      l.removeLayer(t),
                        t.clusterShow()
                    }),
                    this._animationEnd()
                })
            },
            _animationZoomOut: function (t, e) {
              this._animationZoomOutSingle(this._topClusterLevel, t - 1, e),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t, this._getExpandedVisibleBounds())
            },
            _animationAddLayer: function (t, e) {
              var i = this,
                a = this._featureGroup;
              a.addLayer(t),
                e !== t && (2 < e._childCount ? (e._updateIcon(),
                  this._forceLayout(),
                  this._animationStart(),
                  t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),
                  t.clusterHide(),
                  this._enqueue(function () {
                    a.removeLayer(t),
                      t.clusterShow(),
                      i._animationEnd()
                  })) : (this._forceLayout(),
                  i._animationStart(),
                  i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)))
            }
          },
          _animationZoomOutSingle: function (e, i, a) {
            var n = this._getExpandedVisibleBounds(),
              o = Math.floor(this._map.getMinZoom());
            e._recursivelyAnimateChildrenInAndAddSelfToMap(n, o, i + 1, a);
            var s = this;
            this._forceLayout(),
              e._recursivelyBecomeVisible(n, a),
              this._enqueue(function () {
                if (1 === e._childCount) {
                  var t = e._markers[0];
                  this._ignoreMove = !0,
                    t.setLatLng(t.getLatLng()),
                    this._ignoreMove = !1,
                    t.clusterShow && t.clusterShow()
                } else
                  e._recursively(n, a, o, function (t) {
                    t._recursivelyRemoveChildrenFromMap(n, o, i + 1)
                  });
                s._animationEnd()
              })
          },
          _animationEnd: function () {
            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")),
              this._inZoomAnimation--,
              this.fire("animationend")
          },
          _forceLayout: function () {
            L.Util.falseFn(document.body.offsetWidth)
          }
        }),
        L.markerClusterGroup = function (t) {
          return new L.MarkerClusterGroup(t)
        };
      var i = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function (t, e, i, a) {
          L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
              icon: this,
              pane: t.options.clusterPane
            }),
            this._group = t,
            this._zoom = e,
            this._markers = [],
            this._childClusters = [],
            this._childCount = 0,
            this._iconNeedsUpdate = !0,
            this._boundsNeedUpdate = !0,
            this._bounds = new L.LatLngBounds,
            i && this._addChild(i),
            a && this._addChild(a)
        },
        getAllChildMarkers: function (t, e) {
          t = t || [];
          for (var i = this._childClusters.length - 1; 0 <= i; i--)
            this._childClusters[i].getAllChildMarkers(t);
          for (var a = this._markers.length - 1; 0 <= a; a--)
            e && this._markers[a].__dragStart || t.push(this._markers[a]);
          return t
        },
        getChildCount: function () {
          return this._childCount
        },
        zoomToBounds: function (t) {
          for (var e, i = this._childClusters.slice(), a = this._group._map, n = a.getBoundsZoom(this._bounds), o = this._zoom + 1, s = a.getZoom(); 0 < i.length && o < n;) {
            o++;
            var r = [];
            for (e = 0; e < i.length; e++)
              r = r.concat(i[e]._childClusters);
            i = r
          }
          o < n ? this._group._map.setView(this._latlng, o) : n <= s ? this._group._map.setView(this._latlng, s + 1) : this._group._map.fitBounds(this._bounds, t)
        },
        getBounds: function () {
          var t = new L.LatLngBounds;
          return t.extend(this._bounds),
            t
        },
        _updateIcon: function () {
          this._iconNeedsUpdate = !0,
            this._icon && this.setIcon(this)
        },
        createIcon: function () {
          return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this),
              this._iconNeedsUpdate = !1),
            this._iconObj.createIcon()
        },
        createShadow: function () {
          return this._iconObj.createShadow()
        },
        _addChild: function (t, e) {
          this._iconNeedsUpdate = !0,
            this._boundsNeedUpdate = !0,
            this._setClusterCenter(t),
            t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t),
                t.__parent = this),
              this._childCount += t._childCount) : (e || this._markers.push(t),
              this._childCount++),
            this.__parent && this.__parent._addChild(t, !0)
        },
        _setClusterCenter: function (t) {
          this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng)
        },
        _resetBounds: function () {
          var t = this._bounds;
          t._southWest && (t._southWest.lat = 1 / 0,
              t._southWest.lng = 1 / 0),
            t._northEast && (t._northEast.lat = -1 / 0,
              t._northEast.lng = -1 / 0)
        },
        _recalculateBounds: function () {
          var t, e, i, a, n = this._markers,
            o = this._childClusters,
            s = 0,
            r = 0,
            l = this._childCount;
          if (0 !== l) {
            for (this._resetBounds(),
              t = 0; t < n.length; t++)
              i = n[t]._latlng,
              this._bounds.extend(i),
              s += i.lat,
              r += i.lng;
            for (t = 0; t < o.length; t++)
              (e = o[t])._boundsNeedUpdate && e._recalculateBounds(),
              this._bounds.extend(e._bounds),
              i = e._wLatLng,
              a = e._childCount,
              s += i.lat * a,
              r += i.lng * a;
            this._latlng = this._wLatLng = new L.LatLng(s / l, r / l),
              this._boundsNeedUpdate = !1
          }
        },
        _addToMap: function (t) {
          t && (this._backupLatlng = this._latlng,
              this.setLatLng(t)),
            this._group._featureGroup.addLayer(this)
        },
        _recursivelyAnimateChildrenIn: function (t, n, e) {
          this._recursively(t, this._group._map.getMinZoom(), e - 1, function (t) {
            var e, i, a = t._markers;
            for (e = a.length - 1; 0 <= e; e--)
              (i = a[e])._icon && (i._setPos(n),
                i.clusterHide())
          }, function (t) {
            var e, i, a = t._childClusters;
            for (e = a.length - 1; 0 <= e; e--)
              (i = a[e])._icon && (i._setPos(n),
                i.clusterHide())
          })
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function (e, i, a, n) {
          this._recursively(e, n, i, function (t) {
            t._recursivelyAnimateChildrenIn(e, t._group._map.latLngToLayerPoint(t.getLatLng()).round(), a),
              t._isSingleParent() && a - 1 === n ? (t.clusterShow(),
                t._recursivelyRemoveChildrenFromMap(e, i, a)) : t.clusterHide(),
              t._addToMap()
          })
        },
        _recursivelyBecomeVisible: function (t, e) {
          this._recursively(t, this._group._map.getMinZoom(), e, null, function (t) {
            t.clusterShow()
          })
        },
        _recursivelyAddChildrenToMap: function (a, n, o) {
          this._recursively(o, this._group._map.getMinZoom() - 1, n, function (t) {
            if (n !== t._zoom)
              for (var e = t._markers.length - 1; 0 <= e; e--) {
                var i = t._markers[e];
                o.contains(i._latlng) && (a && (i._backupLatlng = i.getLatLng(),
                    i.setLatLng(a),
                    i.clusterHide && i.clusterHide()),
                  t._group._featureGroup.addLayer(i))
              }
          }, function (t) {
            t._addToMap(a)
          })
        },
        _recursivelyRestoreChildPositions: function (t) {
          for (var e = this._markers.length - 1; 0 <= e; e--) {
            var i = this._markers[e];
            i._backupLatlng && (i.setLatLng(i._backupLatlng),
              delete i._backupLatlng)
          }
          if (t - 1 === this._zoom)
            for (var a = this._childClusters.length - 1; 0 <= a; a--)
              this._childClusters[a]._restorePosition();
          else
            for (var n = this._childClusters.length - 1; 0 <= n; n--)
              this._childClusters[n]._recursivelyRestoreChildPositions(t)
        },
        _restorePosition: function () {
          this._backupLatlng && (this.setLatLng(this._backupLatlng),
            delete this._backupLatlng)
        },
        _recursivelyRemoveChildrenFromMap: function (t, e, i, a) {
          var n, o;
          this._recursively(t, e - 1, i - 1, function (t) {
            for (o = t._markers.length - 1; 0 <= o; o--)
              n = t._markers[o],
              a && a.contains(n._latlng) || (t._group._featureGroup.removeLayer(n),
                n.clusterShow && n.clusterShow())
          }, function (t) {
            for (o = t._childClusters.length - 1; 0 <= o; o--)
              n = t._childClusters[o],
              a && a.contains(n._latlng) || (t._group._featureGroup.removeLayer(n),
                n.clusterShow && n.clusterShow())
          })
        },
        _recursively: function (t, e, i, a, n) {
          var o, s, r = this._childClusters,
            l = this._zoom;
          if (e <= l && (a && a(this),
              n && l === i && n(this)),
            l < e || l < i)
            for (o = r.length - 1; 0 <= o; o--)
              (s = r[o])._boundsNeedUpdate && s._recalculateBounds(),
              t.intersects(s._bounds) && s._recursively(t, e, i, a, n)
        },
        _isSingleParent: function () {
          return 0 < this._childClusters.length && this._childClusters[0]._childCount === this._childCount
        }
      });
      L.Marker.include({
          clusterHide: function () {
            var t = this.options.opacity;
            return this.setOpacity(0),
              this.options.opacity = t,
              this
          },
          clusterShow: function () {
            return this.setOpacity(this.options.opacity)
          }
        }),
        L.DistanceGrid = function (t) {
          this._cellSize = t,
            this._sqCellSize = t * t,
            this._grid = {},
            this._objectPoint = {}
        },
        L.DistanceGrid.prototype = {
          addObject: function (t, e) {
            var i = this._getCoord(e.x),
              a = this._getCoord(e.y),
              n = this._grid,
              o = n[a] = n[a] || {},
              s = o[i] = o[i] || [],
              r = L.Util.stamp(t);
            this._objectPoint[r] = e,
              s.push(t)
          },
          updateObject: function (t, e) {
            this.removeObject(t),
              this.addObject(t, e)
          },
          removeObject: function (t, e) {
            var i, a, n = this._getCoord(e.x),
              o = this._getCoord(e.y),
              s = this._grid,
              r = s[o] = s[o] || {},
              l = r[n] = r[n] || [];
            for (delete this._objectPoint[L.Util.stamp(t)],
              i = 0,
              a = l.length; i < a; i++)
              if (l[i] === t)
                return l.splice(i, 1),
                  1 === a && delete r[n],
                  !0
          },
          eachObject: function (t, e) {
            var i, a, n, o, s, r, l = this._grid;
            for (i in l)
              for (a in s = l[i])
                for (r = s[a],
                  n = 0,
                  o = r.length; n < o; n++)
                  t.call(e, r[n]) && (n--,
                    o--)
          },
          getNearObject: function (t) {
            var e, i, a, n, o, s, r, l, h = this._getCoord(t.x),
              u = this._getCoord(t.y),
              c = this._objectPoint,
              d = this._sqCellSize,
              f = null;
            for (e = u - 1; e <= u + 1; e++)
              if (n = this._grid[e])
                for (i = h - 1; i <= h + 1; i++)
                  if (o = n[i])
                    for (a = 0,
                      s = o.length; a < s; a++)
                      r = o[a],
                      ((l = this._sqDist(c[L.Util.stamp(r)], t)) < d || l <= d && null === f) && (d = l,
                        f = r);
            return f
          },
          _getCoord: function (t) {
            var e = Math.floor(t / this._cellSize);
            return isFinite(e) ? e : t
          },
          _sqDist: function (t, e) {
            var i = e.x - t.x,
              a = e.y - t.y;
            return i * i + a * a
          }
        },
        L.QuickHull = {
          getDistant: function (t, e) {
            var i = e[1].lat - e[0].lat;
            return (e[0].lng - e[1].lng) * (t.lat - e[0].lat) + i * (t.lng - e[0].lng)
          },
          findMostDistantPointFromBaseLine: function (t, e) {
            var i, a, n, o = 0,
              s = null,
              r = [];
            for (i = e.length - 1; 0 <= i; i--)
              a = e[i],
              0 < (n = this.getDistant(a, t)) && (r.push(a),
                o < n && (o = n,
                  s = a));
            return {
              maxPoint: s,
              newPoints: r
            }
          },
          buildConvexHull: function (t, e) {
            var i = [],
              a = this.findMostDistantPointFromBaseLine(t, e);
            return a.maxPoint ? i = (i = i.concat(this.buildConvexHull([t[0], a.maxPoint], a.newPoints))).concat(this.buildConvexHull([a.maxPoint, t[1]], a.newPoints)) : [t[0]]
          },
          getConvexHull: function (t) {
            var e, i = !1,
              a = !1,
              n = !1,
              o = !1,
              s = null,
              r = null,
              l = null,
              h = null,
              u = null,
              c = null;
            for (e = t.length - 1; 0 <= e; e--) {
              var d = t[e];
              (!1 === i || d.lat > i) && (i = (s = d).lat),
              (!1 === a || d.lat < a) && (a = (r = d).lat),
              (!1 === n || d.lng > n) && (n = (l = d).lng),
              (!1 === o || d.lng < o) && (o = (h = d).lng)
            }
            return u = a !== i ? (c = r,
                s) : (c = h,
                l),
              [].concat(this.buildConvexHull([c, u], t), this.buildConvexHull([u, c], t))
          }
        },
        L.MarkerCluster.include({
          getConvexHull: function () {
            var t, e, i = this.getAllChildMarkers(),
              a = [];
            for (e = i.length - 1; 0 <= e; e--)
              t = i[e].getLatLng(),
              a.push(t);
            return L.QuickHull.getConvexHull(a)
          }
        }),
        L.MarkerCluster.include({
          _2PI: 2 * Math.PI,
          _circleFootSeparation: 25,
          _circleStartAngle: 0,
          _spiralFootSeparation: 28,
          _spiralLengthStart: 11,
          _spiralLengthFactor: 5,
          _circleSpiralSwitchover: 9,
          spiderfy: function () {
            if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
              var t, e = this.getAllChildMarkers(null, !0),
                i = this._group,
                a = i._map,
                n = a.latLngToLayerPoint(this._latlng);
              this._group._unspiderfy(),
                this._group._spiderfied = this,
                t = e.length >= this._circleSpiralSwitchover ? this._generatePointsSpiral(e.length, n) : (n.y += 10,
                  this._generatePointsCircle(e.length, n)),
                this._animationSpiderfy(e, t)
            }
          },
          unspiderfy: function (t) {
            this._group._inZoomAnimation || (this._animationUnspiderfy(t),
              this._group._spiderfied = null)
          },
          _generatePointsCircle: function (t, e) {
            var i, a, n = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t),
              o = n / this._2PI,
              s = this._2PI / t,
              r = [];
            for (o = Math.max(o, 35),
              r.length = t,
              i = 0; i < t; i++)
              a = this._circleStartAngle + i * s,
              r[i] = new L.Point(e.x + o * Math.cos(a), e.y + o * Math.sin(a))._round();
            return r
          },
          _generatePointsSpiral: function (t, e) {
            var i, a = this._group.options.spiderfyDistanceMultiplier,
              n = a * this._spiralLengthStart,
              o = a * this._spiralFootSeparation,
              s = a * this._spiralLengthFactor * this._2PI,
              r = 0,
              l = [];
            for (l.length = t,
              i = t; 0 <= i; i--)
              i < t && (l[i] = new L.Point(e.x + n * Math.cos(r), e.y + n * Math.sin(r))._round()),
              n += s / (r += o / n + 5e-4 * i);
            return l
          },
          _noanimationUnspiderfy: function () {
            var t, e, i = this._group,
              a = i._map,
              n = i._featureGroup,
              o = this.getAllChildMarkers(null, !0);
            for (i._ignoreMove = !0,
              this.setOpacity(1),
              e = o.length - 1; 0 <= e; e--)
              t = o[e],
              n.removeLayer(t),
              t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng),
                delete t._preSpiderfyLatlng),
              t.setZIndexOffset && t.setZIndexOffset(0),
              t._spiderLeg && (a.removeLayer(t._spiderLeg),
                delete t._spiderLeg);
            i.fire("unspiderfied", {
                cluster: this,
                markers: o
              }),
              i._ignoreMove = !1,
              i._spiderfied = null
          }
        }),
        L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
          _animationSpiderfy: function (t, e) {
            var i, a, n, o, s = this._group,
              r = s._map,
              l = s._featureGroup,
              h = this._group.options.spiderLegPolylineOptions;
            for (s._ignoreMove = !0,
              i = 0; i < t.length; i++)
              o = r.layerPointToLatLng(e[i]),
              a = t[i],
              n = new L.Polyline([this._latlng, o], h),
              r.addLayer(n),
              a._spiderLeg = n,
              a._preSpiderfyLatlng = a._latlng,
              a.setLatLng(o),
              a.setZIndexOffset && a.setZIndexOffset(1e6),
              l.addLayer(a);
            this.setOpacity(.3),
              s._ignoreMove = !1,
              s.fire("spiderfied", {
                cluster: this,
                markers: t
              })
          },
          _animationUnspiderfy: function () {
            this._noanimationUnspiderfy()
          }
        }),
        L.MarkerCluster.include({
          _animationSpiderfy: function (t, e) {
            var i, a, n, o, s, r, l = this,
              h = this._group,
              u = h._map,
              c = h._featureGroup,
              d = this._latlng,
              f = u.latLngToLayerPoint(d),
              _ = L.Path.SVG,
              p = L.extend({}, this._group.options.spiderLegPolylineOptions),
              m = p.opacity;
            for (void 0 === m && (m = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),
              _ ? (p.opacity = 0,
                p.className = (p.className || "") + " leaflet-cluster-spider-leg") : p.opacity = m,
              h._ignoreMove = !0,
              i = 0; i < t.length; i++)
              a = t[i],
              r = u.layerPointToLatLng(e[i]),
              n = new L.Polyline([d, r], p),
              u.addLayer(n),
              a._spiderLeg = n,
              _ && (o = n._path,
                s = o.getTotalLength() + .1,
                o.style.strokeDasharray = s,
                o.style.strokeDashoffset = s),
              a.setZIndexOffset && a.setZIndexOffset(1e6),
              a.clusterHide && a.clusterHide(),
              c.addLayer(a),
              a._setPos && a._setPos(f);
            for (h._forceLayout(),
              h._animationStart(),
              i = t.length - 1; 0 <= i; i--)
              r = u.layerPointToLatLng(e[i]),
              (a = t[i])._preSpiderfyLatlng = a._latlng,
              a.setLatLng(r),
              a.clusterShow && a.clusterShow(),
              _ && (n = a._spiderLeg,
                (o = n._path).style.strokeDashoffset = 0,
                n.setStyle({
                  opacity: m
                }));
            this.setOpacity(.3),
              h._ignoreMove = !1,
              setTimeout(function () {
                h._animationEnd(),
                  h.fire("spiderfied", {
                    cluster: l,
                    markers: t
                  })
              }, 200)
          },
          _animationUnspiderfy: function (t) {
            var e, i, a, n, o, s, r = this,
              l = this._group,
              h = l._map,
              u = l._featureGroup,
              c = t ? h._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : h.latLngToLayerPoint(this._latlng),
              d = this.getAllChildMarkers(null, !0),
              f = L.Path.SVG;
            for (l._ignoreMove = !0,
              l._animationStart(),
              this.setOpacity(1),
              i = d.length - 1; 0 <= i; i--)
              (e = d[i])._preSpiderfyLatlng && (e.closePopup(),
                e.setLatLng(e._preSpiderfyLatlng),
                delete e._preSpiderfyLatlng,
                s = !0,
                e._setPos && (e._setPos(c),
                  s = !1),
                e.clusterHide && (e.clusterHide(),
                  s = !1),
                s && u.removeLayer(e),
                f && (a = e._spiderLeg,
                  n = a._path,
                  o = n.getTotalLength() + .1,
                  n.style.strokeDashoffset = o,
                  a.setStyle({
                    opacity: 0
                  })));
            l._ignoreMove = !1,
              setTimeout(function () {
                var t = 0;
                for (i = d.length - 1; 0 <= i; i--)
                  (e = d[i])._spiderLeg && t++;
                for (i = d.length - 1; 0 <= i; i--)
                  (e = d[i])._spiderLeg && (e.clusterShow && e.clusterShow(),
                    e.setZIndexOffset && e.setZIndexOffset(0),
                    1 < t && u.removeLayer(e),
                    h.removeLayer(e._spiderLeg),
                    delete e._spiderLeg);
                l._animationEnd(),
                  l.fire("unspiderfied", {
                    cluster: r,
                    markers: d
                  })
              }, 200)
          }
        }),
        L.MarkerClusterGroup.include({
          _spiderfied: null,
          unspiderfy: function () {
            this._unspiderfy.apply(this, arguments)
          },
          _spiderfierOnAdd: function () {
            this._map.on("click", this._unspiderfyWrapper, this),
              this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this),
              this._map.on("zoomend", this._noanimationUnspiderfy, this),
              L.Browser.touch || this._map.getRenderer(this)
          },
          _spiderfierOnRemove: function () {
            this._map.off("click", this._unspiderfyWrapper, this),
              this._map.off("zoomstart", this._unspiderfyZoomStart, this),
              this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
              this._map.off("zoomend", this._noanimationUnspiderfy, this),
              this._noanimationUnspiderfy()
          },
          _unspiderfyZoomStart: function () {
            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
          },
          _unspiderfyZoomAnim: function (t) {
            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
              this._unspiderfy(t))
          },
          _unspiderfyWrapper: function () {
            this._unspiderfy()
          },
          _unspiderfy: function (t) {
            this._spiderfied && this._spiderfied.unspiderfy(t)
          },
          _noanimationUnspiderfy: function () {
            this._spiderfied && this._spiderfied._noanimationUnspiderfy()
          },
          _unspiderfyLayer: function (t) {
            t._spiderLeg && (this._featureGroup.removeLayer(t),
              t.clusterShow && t.clusterShow(),
              t.setZIndexOffset && t.setZIndexOffset(0),
              this._map.removeLayer(t._spiderLeg),
              delete t._spiderLeg)
          }
        }),
        L.MarkerClusterGroup.include({
          refreshClusters: function (t) {
            return t ? t instanceof L.MarkerClusterGroup ? t = t._topClusterLevel.getAllChildMarkers() : t instanceof L.LayerGroup ? t = t._layers : t instanceof L.MarkerCluster ? t = t.getAllChildMarkers() : t instanceof L.Marker && (t = [t]) : t = this._topClusterLevel.getAllChildMarkers(),
              this._flagParentsIconsNeedUpdate(t),
              this._refreshClustersIcons(),
              this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t),
              this
          },
          _flagParentsIconsNeedUpdate: function (t) {
            var e, i;
            for (e in t)
              for (i = t[e].__parent; i;)
                i._iconNeedsUpdate = !0,
                i = i.__parent
          },
          _refreshSingleMarkerModeMarkers: function (t) {
            var e, i;
            for (e in t)
              i = t[e],
              this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i))
          }
        }),
        L.Marker.include({
          refreshIconOptions: function (t, e) {
            var i = this.options.icon;
            return L.setOptions(i, t),
              this.setIcon(i),
              e && this.__parent && this.__parent._group.refreshClusters(this),
              this
          }
        }),
        t.MarkerClusterGroup = e,
        t.MarkerCluster = i
    }(e)
  }, function (t, e) {}, function (t, e, i) {
    "use strict";
    var a, n, o;
    "function" == typeof Symbol && Symbol.iterator,
      n = [i(1)],
      void 0 !== (o = "function" == typeof (a = function (u) {
        u.Map.mergeOptions({
            contextmenuItems: []
          }),
          u.Map.ContextMenu = u.Handler.extend({
            _touchstart: u.Browser.msPointer ? "MSPointerDown" : u.Browser.pointer ? "pointerdown" : "touchstart",
            statics: {
              BASE_CLS: "leaflet-contextmenu"
            },
            initialize: function (t) {
              u.Handler.prototype.initialize.call(this, t),
                this._items = [],
                this._visible = !1;
              var e = this._container = u.DomUtil.create("div", u.Map.ContextMenu.BASE_CLS, t._container);
              e.style.zIndex = 1e4,
                e.style.position = "absolute",
                t.options.contextmenuWidth && (e.style.width = t.options.contextmenuWidth + "px"),
                this._createItems(),
                u.DomEvent.on(e, "click", u.DomEvent.stop).on(e, "mousedown", u.DomEvent.stop).on(e, "dblclick", u.DomEvent.stop).on(e, "contextmenu", u.DomEvent.stop)
            },
            addHooks: function () {
              var t = this._map.getContainer();
              u.DomEvent.on(t, "mouseleave", this._hide, this).on(document, "keydown", this._onKeyDown, this),
                u.Browser.touch && u.DomEvent.on(document, this._touchstart, this._hide, this),
                this._map.on({
                  contextmenu: this._show,
                  mousedown: this._hide,
                  movestart: this._hide,
                  zoomstart: this._hide
                }, this)
            },
            removeHooks: function () {
              var t = this._map.getContainer();
              u.DomEvent.off(t, "mouseleave", this._hide, this).off(document, "keydown", this._onKeyDown, this),
                u.Browser.touch && u.DomEvent.off(document, this._touchstart, this._hide, this),
                this._map.off({
                  contextmenu: this._show,
                  mousedown: this._hide,
                  movestart: this._hide,
                  zoomstart: this._hide
                }, this)
            },
            showAt: function (t, e) {
              t instanceof u.LatLng && (t = this._map.latLngToContainerPoint(t)),
                this._showAtPoint(t, e)
            },
            hide: function () {
              this._hide()
            },
            addItem: function (t) {
              return this.insertItem(t)
            },
            insertItem: function (t, e) {
              e = void 0 !== e ? e : this._items.length;
              var i = this._createItem(this._container, t, e);
              return this._items.push(i),
                this._sizeChanged = !0,
                this._map.fire("contextmenu.additem", {
                  contextmenu: this,
                  el: i.el,
                  index: e
                }),
                i.el
            },
            removeItem: function (t) {
              var e = this._container;
              return isNaN(t) || (t = e.children[t]),
                t ? (this._removeItem(u.Util.stamp(t)),
                  this._sizeChanged = !0,
                  this._map.fire("contextmenu.removeitem", {
                    contextmenu: this,
                    el: t
                  }),
                  t) : null
            },
            removeAllItems: function () {
              for (var t, e = this._container.children; e.length;)
                t = e[0],
                this._removeItem(u.Util.stamp(t));
              return e
            },
            hideAllItems: function () {
              var t, e;
              for (t = 0,
                e = this._items.length; t < e; t++)
                this._items[t].el.style.display = "none"
            },
            showAllItems: function () {
              var t, e;
              for (t = 0,
                e = this._items.length; t < e; t++)
                this._items[t].el.style.display = ""
            },
            setDisabled: function (t, e) {
              var i = this._container,
                a = u.Map.ContextMenu.BASE_CLS + "-item";
              isNaN(t) || (t = i.children[t]),
                t && u.DomUtil.hasClass(t, a) && (e ? (u.DomUtil.addClass(t, a + "-disabled"),
                  this._map.fire("contextmenu.disableitem", {
                    contextmenu: this,
                    el: t
                  })) : (u.DomUtil.removeClass(t, a + "-disabled"),
                  this._map.fire("contextmenu.enableitem", {
                    contextmenu: this,
                    el: t
                  })))
            },
            isVisible: function () {
              return this._visible
            },
            _createItems: function () {
              var t, e, i = this._map.options.contextmenuItems;
              for (t = 0,
                e = i.length; t < e; t++)
                this._items.push(this._createItem(this._container, i[t]))
            },
            _createItem: function (t, e, i) {
              if (e.separator || "-" === e)
                return this._createSeparator(t, i);
              var a = u.Map.ContextMenu.BASE_CLS + "-item",
                n = e.disabled ? a + " " + a + "-disabled" : a,
                o = this._insertElementAt("a", n, t, i),
                s = this._createEventHandler(o, e.callback, e.context, e.hideOnSelect),
                r = this._getIcon(e),
                l = this._getIconCls(e),
                h = "";
              return r ? h = '<img class="' + u.Map.ContextMenu.BASE_CLS + '-icon" src="' + r + '"/>' : l && (h = '<span class="' + u.Map.ContextMenu.BASE_CLS + "-icon " + l + '"></span>'),
                o.innerHTML = h + e.text,
                o.href = "#",
                u.DomEvent.on(o, "mouseover", this._onItemMouseOver, this).on(o, "mouseout", this._onItemMouseOut, this).on(o, "mousedown", u.DomEvent.stopPropagation).on(o, "click", s),
                u.Browser.touch && u.DomEvent.on(o, this._touchstart, u.DomEvent.stopPropagation),
                u.Browser.pointer || u.DomEvent.on(o, "click", this._onItemMouseOut, this), {
                  id: u.Util.stamp(o),
                  el: o,
                  callback: s
                }
            },
            _removeItem: function (t) {
              var e, i, a, n, o;
              for (a = 0,
                n = this._items.length; a < n; a++)
                if ((e = this._items[a]).id === t)
                  return i = e.el,
                    (o = e.callback) && (u.DomEvent.off(i, "mouseover", this._onItemMouseOver, this).off(i, "mouseover", this._onItemMouseOut, this).off(i, "mousedown", u.DomEvent.stopPropagation).off(i, "click", o),
                      u.Browser.touch && u.DomEvent.off(i, this._touchstart, u.DomEvent.stopPropagation),
                      u.Browser.pointer || u.DomEvent.on(i, "click", this._onItemMouseOut, this)),
                    this._container.removeChild(i),
                    this._items.splice(a, 1),
                    e;
              return null
            },
            _createSeparator: function (t, e) {
              var i = this._insertElementAt("div", u.Map.ContextMenu.BASE_CLS + "-separator", t, e);
              return {
                id: u.Util.stamp(i),
                el: i
              }
            },
            _createEventHandler: function (e, i, a, n) {
              var o = this,
                s = this._map,
                r = u.Map.ContextMenu.BASE_CLS + "-item-disabled",
                n = void 0 === n || n;
              return function (t) {
                u.DomUtil.hasClass(e, r) || (n && o._hide(),
                  i && i.call(a || s, o._showLocation),
                  o._map.fire("contextmenu.select", {
                    contextmenu: o,
                    el: e
                  }))
              }
            },
            _insertElementAt: function (t, e, i, a) {
              var n, o = document.createElement(t);
              return o.className = e,
                void 0 !== a && (n = i.children[a]),
                n ? i.insertBefore(o, n) : i.appendChild(o),
                o
            },
            _show: function (t) {
              this._showAtPoint(t.containerPoint, t)
            },
            _showAtPoint: function (t, e) {
              if (this._items.length) {
                var i = this._map,
                  a = i.containerPointToLayerPoint(t),
                  n = i.layerPointToLatLng(a),
                  o = u.extend(e || {}, {
                    contextmenu: this
                  });
                this._showLocation = {
                    latlng: n,
                    layerPoint: a,
                    containerPoint: t
                  },
                  e && e.relatedTarget && (this._showLocation.relatedTarget = e.relatedTarget),
                  this._setPosition(t),
                  this._visible || (this._container.style.display = "block",
                    this._visible = !0),
                  this._map.fire("contextmenu.show", o)
              }
            },
            _hide: function () {
              this._visible && (this._visible = !1,
                this._container.style.display = "none",
                this._map.fire("contextmenu.hide", {
                  contextmenu: this
                }))
            },
            _getIcon: function (t) {
              return u.Browser.retina && t.retinaIcon || t.icon
            },
            _getIconCls: function (t) {
              return u.Browser.retina && t.retinaIconCls || t.iconCls
            },
            _setPosition: function (t) {
              var e, i = this._map.getSize(),
                a = this._container,
                n = this._getElementSize(a);
              this._map.options.contextmenuAnchor && (e = u.point(this._map.options.contextmenuAnchor),
                  t = t.add(e)),
                (a._leaflet_pos = t).x + n.x > i.x ? (a.style.left = "auto",
                  a.style.right = Math.min(Math.max(i.x - t.x, 0), i.x - n.x - 1) + "px") : (a.style.left = Math.max(t.x, 0) + "px",
                  a.style.right = "auto"),
                t.y + n.y > i.y ? (a.style.top = "auto",
                  a.style.bottom = Math.min(Math.max(i.y - t.y, 0), i.y - n.y - 1) + "px") : (a.style.top = Math.max(t.y, 0) + "px",
                  a.style.bottom = "auto")
            },
            _getElementSize: function (t) {
              var e = this._size,
                i = t.style.display;
              return e && !this._sizeChanged || (e = {},
                  t.style.left = "-999999px",
                  t.style.right = "auto",
                  t.style.display = "block",
                  e.x = t.offsetWidth,
                  e.y = t.offsetHeight,
                  t.style.left = "auto",
                  t.style.display = i,
                  this._sizeChanged = !1),
                e
            },
            _onKeyDown: function (t) {
              27 === t.keyCode && this._hide()
            },
            _onItemMouseOver: function (t) {
              u.DomUtil.addClass(t.target || t.srcElement, "over")
            },
            _onItemMouseOut: function (t) {
              u.DomUtil.removeClass(t.target || t.srcElement, "over")
            }
          }),
          u.Map.addInitHook("addHandler", "contextmenu", u.Map.ContextMenu),
          u.Mixin.ContextMenu = {
            bindContextMenu: function (t) {
              return u.setOptions(this, t),
                this._initContextMenu(),
                this
            },
            unbindContextMenu: function () {
              return this.off("contextmenu", this._showContextMenu, this),
                this
            },
            addContextMenuItem: function (t) {
              this.options.contextmenuItems.push(t)
            },
            removeContextMenuItemWithIndex: function (t) {
              for (var e = [], i = 0; i < this.options.contextmenuItems.length; i++)
                this.options.contextmenuItems[i].index == t && e.push(i);
              for (var a = e.pop(); void 0 !== a;)
                this.options.contextmenuItems.splice(a, 1),
                a = e.pop()
            },
            replaceContextMenuItem: function (t) {
              this.removeContextMenuItemWithIndex(t.index),
                this.addContextMenuItem(t)
            },
            _initContextMenu: function () {
              this._items = [],
                this.on("contextmenu", this._showContextMenu, this)
            },
            _showContextMenu: function (t) {
              var e, i, a, n, o;
              if (this._map.contextmenu) {
                for (i = u.extend({
                    relatedTarget: this
                  }, t),
                  a = this._map.mouseEventToContainerPoint(t.originalEvent),
                  this.options.contextmenuInheritItems || this._map.contextmenu.hideAllItems(),
                  n = 0,
                  o = this.options.contextmenuItems.length; n < o; n++)
                  e = this.options.contextmenuItems[n],
                  this._items.push(this._map.contextmenu.insertItem(e, e.index));
                this._map.once("contextmenu.hide", this._hideContextMenu, this),
                  this._map.contextmenu.showAt(a, i)
              }
            },
            _hideContextMenu: function () {
              var t, e;
              for (t = 0,
                e = this._items.length; t < e; t++)
                this._map.contextmenu.removeItem(this._items[t]);
              this._items.length = 0,
                this.options.contextmenuInheritItems || this._map.contextmenu.showAllItems()
            }
          };
        var t, e, i, a = [u.Marker, u.Path],
          n = {
            contextmenu: !1,
            contextmenuItems: [],
            contextmenuInheritItems: !0
          };
        for (e = 0,
          i = a.length; e < i; e++)
          (t = a[e]).prototype.options ? t.mergeOptions(n) : t.prototype.options = n,
          t.addInitHook(function () {
            this.options.contextmenu && this._initContextMenu()
          }),
          t.include(u.Mixin.ContextMenu);
        return u.Map.ContextMenu
      }) ? a.apply(e, n) : a) && (t.exports = o)
  }, function (t, e, i) {
    "use strict";
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      };
    i(57),
      o.default.drawLocal.draw.toolbar.actions = {
        title: "取消绘制",
        text: "取消"
      },
      o.default.drawLocal.draw.toolbar.finish = {
        title: "完成绘制",
        text: "完成"
      },
      o.default.drawLocal.draw.toolbar.undo = {
        title: "删除最后一个绘制的点",
        text: "删除最后的点"
      },
      o.default.drawLocal.draw.toolbar.buttons = {
        polyline: "绘制折线",
        polygon: "绘制多边形",
        rectangle: "绘制矩形",
        circle: "绘制圆",
        marker: "标点"
      },
      o.default.drawLocal.edit.toolbar.actions.save = {
        title: "保存修改.",
        text: "保存"
      },
      o.default.drawLocal.edit.toolbar.actions.cancel = {
        title: "取消编辑，丢弃所有的修改",
        text: "取消"
      },
      o.default.drawLocal.edit.toolbar.actions.clearAll = {
        title: "刪除所有要素",
        text: "刪除所有"
      },
      o.default.drawLocal.edit.toolbar.buttons = {
        edit: "编辑要素",
        editDisabled: "没有需要编辑的要素",
        remove: "删除要素",
        removeDisabled: "没有需要删除的要素"
      },
      o.default.drawLocal.draw.handlers.circle = {
        tooltip: {
          start: "单击并拖动到绘制圆"
        },
        radius: "半径"
      },
      o.default.drawLocal.draw.handlers.marker = {
        tooltip: {
          start: "单击地图标记点"
        }
      },
      o.default.drawLocal.draw.handlers.polygon = {
        tooltip: {
          start: "单击开始绘制形状",
          cont: "单击继续绘制形状",
          end: "单击继续绘制，双击完成绘制"
        }
      },
      o.default.drawLocal.draw.handlers.polyline = {
        error: "<strong>错误:</strong> 面积边缘不可交叉!",
        tooltip: {
          start: "单击开始画线",
          cont: "单击继续画线",
          end: "单击继续画线,双击完成绘制"
        }
      },
      o.default.drawLocal.draw.handlers.rectangle = {
        tooltip: {
          start: "单击并拖动绘制矩形"
        }
      },
      o.default.drawLocal.draw.handlers.simpleshape = {
        tooltip: {
          end: "释放鼠标完成绘图"
        }
      },
      o.default.drawLocal.edit.handlers.edit = {
        tooltip: {
          text: "拖动标记或白色小框进行编辑修改",
          subtext: ""
        }
      },
      o.default.drawLocal.edit.handlers.remove = {
        tooltip: {
          text: "单击目标进行删除"
        }
      },
      o.default.Edit.Marker.prototype._toggleMarkerHighlight = function () {},
      o.default.Draw.Text = o.default.Draw.Marker.extend({
        statics: {
          TYPE: "text"
        },
        options: {
          repeatMode: !1
        },
        initialize: function (t, e) {
          (e = e || {}).icon = this.getIcon(),
            this.type = o.default.Draw.Text.TYPE,
            o.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        updateIcon: function (t) {
          this.options.icon = this.getIcon(t)
        },
        defaultIconAttr: {
          text: "文字",
          color: "#0081c2",
          font_size: 25,
          font_family: "黑体",
          font_style: "normal",
          font_weight: "normal",
          background: !1,
          border: !1
        },
        getIcon: function (t) {
          (t = t || this.defaultIconAttr).text = t.text || this.defaultIconAttr.text;
          var e = this.getTextSize(t),
            i = this.getTextCSS(t);
          return o.default.divIcon({
            className: "leaflet-text-marker",
            iconSize: [e.width, e.height],
            iconAnchor: [e.width / 2, e.height / 2],
            html: '<div style="' + i + '">' + t.text + "</div>"
          })
        },
        getTextSize: function (t) {
          for (var e = t.text.split("<br />"), i = -1, a = 0; a < e.length; a++) {
            var n = e[a].replace(/[\u0391-\uFFE5]/g, "aa").length;
            i < n && (i = n)
          }
          return {
            width: i * (t.font_size || this.defaultIconAttr.font_size) / 2 + 10,
            height: e.length * (t.font_size || this.defaultIconAttr.font_size) * 1.5 + 10
          }
        },
        getTextCSS: function (t) {
          var e = "display:table; padding:5px; color:" + (t.color || this.defaultIconAttr.color) + ";    font-size:" + (t.font_size || this.defaultIconAttr.font_size) + "px;  font-family:'" + (t.font_family || this.defaultIconAttr.font_family) + "';   font-style:" + (t.font_style || this.defaultIconAttr.font_style) + ";    font-weight:" + (t.font_weight || this.defaultIconAttr.font_weight) + ";";
          return t.background && (e += "background-color: " + t.background_color + ";  "),
            t.border && (e += "border: " + t.border_width + "px  " + t.border_style + " " + t.border_color + " ;  "),
            e
        },
        _createMarker: function (t) {
          return new o.default.Marker(t, {
            draggable: !0,
            icon: this.options.icon,
            zIndexOffset: this.options.zIndexOffset
          })
        },
        _onMouseMove: function (t) {
          var e = t.latlng;
          this._mouseMarker && this._mouseMarker.setLatLng(e),
            this._marker ? (this._mouseMarker && (e = this._mouseMarker.getLatLng()),
              this._marker.setLatLng(e)) : (this._marker = this._createMarker(e),
              this._marker.on("click", this._onClick, this),
              this._map.on("click", this._onClick, this).addLayer(this._marker))
        }
      }),
      o.default.Draw.FontMarker = o.default.Draw.Marker.extend({
        statics: {
          TYPE: "font-marker"
        },
        initialize: function (t, e) {
          (e = e || {}).icon = this.getIcon(),
            this.type = o.default.Draw.FontMarker.TYPE,
            o.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        updateIcon: function (t) {
          this.options.icon = this.getIcon(t)
        },
        defaultIconAttr: {
          size: 50,
          color: "#0081c2",
          iconClass: "fa fa-crosshairs"
        },
        getIcon: function (t) {
          return (t = t || this.defaultIconAttr).size = t.size || this.defaultIconAttr.size,
            t.color = t.color || this.defaultIconAttr.color,
            t.iconClass = t.iconClass || this.defaultIconAttr.iconClass,
            o.default.divIcon({
              className: "",
              html: '<i class="' + t.iconClass + '" style="color:' + t.color + ";font-size:" + t.size + 'px;"></i> ',
              iconSize: [t.size + 2, t.size + 2]
            })
        }
      }),
      o.default.ImageOverlay = o.default.ImageOverlay.extend({
        getLatLngs: function () {
          return this._boundsToLatLngs(this.getBounds())
        },
        _boundsToLatLngs: function (t) {
          return [(t = o.default.latLngBounds(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        },
        toGeoJSON: function () {
          var t = this.getLatLngs(),
            e = !o.default.LineUtil.isFlat(t),
            i = e && !o.default.LineUtil.isFlat(t[0]),
            a = o.default.json.latLngsToCoords(t, i ? 2 : e ? 1 : 0, !0);
          return e || (a = [a]),
            o.default.json.getFeature(this, {
              type: (i ? "Multi" : "") + "Polygon",
              coordinates: a
            })
        }
      }),
      o.default.Draw.Image = o.default.Draw.Rectangle.extend({
        statics: {
          TYPE: "image"
        },
        _defstyle: {
          weight: 1,
          fill: !0,
          fillOpacity: .1,
          color: "#ffffff",
          showArea: !1,
          clickable: !0
        },
        options: {
          iconUrl: "",
          opacity: 1,
          metric: !0
        },
        initialize: function (t, e) {
          this.type = o.default.Draw.Image.TYPE,
            this._initialLabelText = o.default.drawLocal.draw.handlers.rectangle.tooltip.start,
            o.default.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _drawShape: function (t) {
          this._shape ? this._shape.setBounds(new o.default.LatLngBounds(this._startLatLng, t)) : (this._shape = new o.default.ImageOverlay(this.options.iconUrl, new o.default.LatLngBounds(this._startLatLng, t), {
              opacity: this.options.opacity
            }),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new o.default.Rectangle(this._shape.getBounds(), this._defstyle),
            e = new o.default.ImageOverlay(this.options.iconUrl, this._shape.getBounds(), {
              opacity: this.options.opacity
            });
          t._imageOverlay = e,
            o.default.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        }
      }),
      o.default.Draw.Polylinefree = o.default.Draw.SimpleShape.extend({
        statics: {
          TYPE: "polylinefree"
        },
        options: {
          allowIntersection: !0,
          shapeOptions: {
            stroke: !0,
            color: "#f06eaa",
            weight: 4,
            opacity: .5,
            fill: !1,
            clickable: !0
          },
          nautic: !1
        },
        initialize: function (t, e) {
          e && e.drawError && (e.drawError = o.default.Util.extend({}, this.options.drawError, e.drawError)),
            this.type = o.default.Draw.Polylinefree.TYPE,
            o.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        _onMouseMove: function (t) {
          this._isDrawing && this._drawShape(t.latlng)
        },
        _drawShape: function (t) {
          this._shape ? this._shape.addLatLng(t) : (this._shape = new o.default.Polyline([], this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new o.default.Polyline(this._shape.getLatLngs(), this.options.shapeOptions);
          o.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
      })
  }, function (t, e, i) {
    "use strict";
    var a, o, n, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      l = i(1),
      h = (a = l) && a.__esModule ? a : {
        default: a
      };
    i(58),
      o = window,
      n = document,
      h.default.drawVersion = "1.0.4",
      h.default.Draw = {},
      h.default.drawLocal = {
        draw: {
          toolbar: {
            actions: {
              title: "Cancel drawing",
              text: "Cancel"
            },
            finish: {
              title: "Finish drawing",
              text: "Finish"
            },
            undo: {
              title: "Delete last point drawn",
              text: "Delete last point"
            },
            buttons: {
              polyline: "Draw a polyline",
              polygon: "Draw a polygon",
              rectangle: "Draw a rectangle",
              circle: "Draw a circle",
              marker: "Draw a marker",
              circlemarker: "Draw a circlemarker"
            }
          },
          handlers: {
            circle: {
              tooltip: {
                start: "Click and drag to draw circle."
              },
              radius: "Radius"
            },
            circlemarker: {
              tooltip: {
                start: "Click map to place circle marker."
              }
            },
            marker: {
              tooltip: {
                start: "Click map to place marker."
              }
            },
            polygon: {
              tooltip: {
                start: "Click to start drawing shape.",
                cont: "Click to continue drawing shape.",
                end: "Click first point to close this shape."
              }
            },
            polyline: {
              error: "<strong>Error:</strong> shape edges cannot cross!",
              tooltip: {
                start: "Click to start drawing line.",
                cont: "Click to continue drawing line.",
                end: "Click last point to finish line."
              }
            },
            rectangle: {
              tooltip: {
                start: "Click and drag to draw rectangle."
              }
            },
            simpleshape: {
              tooltip: {
                end: "Release mouse to finish drawing."
              }
            }
          }
        },
        edit: {
          toolbar: {
            actions: {
              save: {
                title: "Save changes",
                text: "Save"
              },
              cancel: {
                title: "Cancel editing, discards all changes",
                text: "Cancel"
              },
              clearAll: {
                title: "Clear all layers",
                text: "Clear All"
              }
            },
            buttons: {
              edit: "Edit layers",
              editDisabled: "No layers to edit",
              remove: "Delete layers",
              removeDisabled: "No layers to delete"
            }
          },
          handlers: {
            edit: {
              tooltip: {
                text: "Drag handles or markers to edit features.",
                subtext: "Click cancel to undo changes."
              }
            },
            remove: {
              tooltip: {
                text: "Click on a feature to remove."
              }
            }
          }
        }
      },
      h.default.Draw.Event = {},
      h.default.Draw.Event.CREATED = "draw:created",
      h.default.Draw.Event.EDITED = "draw:edited",
      h.default.Draw.Event.DELETED = "draw:deleted",
      h.default.Draw.Event.DRAWSTART = "draw:drawstart",
      h.default.Draw.Event.DRAWSTOP = "draw:drawstop",
      h.default.Draw.Event.DRAWVERTEX = "draw:drawvertex",
      h.default.Draw.Event.EDITSTART = "draw:editstart",
      h.default.Draw.Event.EDITMOVE = "draw:editmove",
      h.default.Draw.Event.EDITRESIZE = "draw:editresize",
      h.default.Draw.Event.EDITVERTEX = "draw:editvertex",
      h.default.Draw.Event.EDITSTOP = "draw:editstop",
      h.default.Draw.Event.DELETESTART = "draw:deletestart",
      h.default.Draw.Event.DELETESTOP = "draw:deletestop",
      h.default.Draw.Event.TOOLBAROPENED = "draw:toolbaropened",
      h.default.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed",
      h.default.Draw.Event.MARKERCONTEXT = "draw:markercontext",
      h.default.Draw = h.default.Draw || {},
      h.default.Draw.Feature = h.default.Handler.extend({
        initialize: function (t, e) {
          this._map = t,
            this._container = t._container,
            this._overlayPane = t._panes.overlayPane,
            this._popupPane = t._panes.popupPane,
            e && e.shapeOptions && (e.shapeOptions = h.default.Util.extend({}, this.options.shapeOptions, e.shapeOptions)),
            h.default.setOptions(this, e);
          var i = h.default.version.split(".");
          1 === parseInt(i[0], 10) && 2 <= parseInt(i[1], 10) ? h.default.Draw.Feature.include(h.default.Evented.prototype) : h.default.Draw.Feature.include(h.default.Mixin.Events)
        },
        enable: function () {
          this._enabled || (h.default.Handler.prototype.enable.call(this),
            this.fire("enabled", {
              handler: this.type
            }),
            this._map.fire(h.default.Draw.Event.DRAWSTART, {
              layerType: this.type
            }))
        },
        disable: function () {
          this._enabled && (h.default.Handler.prototype.disable.call(this),
            this._map.fire(h.default.Draw.Event.DRAWSTOP, {
              layerType: this.type
            }),
            this.fire("disabled", {
              handler: this.type
            }))
        },
        addHooks: function () {
          var t = this._map;
          t && (h.default.DomUtil.disableTextSelection(),
            t.getContainer().focus(),
            this._tooltip = new h.default.Draw.Tooltip(this._map),
            h.default.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
        },
        removeHooks: function () {
          this._map && (h.default.DomUtil.enableTextSelection(),
            this._tooltip.dispose(),
            this._tooltip = null,
            h.default.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
        },
        setOptions: function (t) {
          h.default.setOptions(this, t)
        },
        _fireCreatedEvent: function (t) {
          this._map.fire(h.default.Draw.Event.CREATED, {
            layer: t,
            layerType: this.type
          })
        },
        _cancelDrawing: function (t) {
          27 === t.keyCode && (this._map.fire("draw:canceled", {
              layerType: this.type
            }),
            this.disable())
        }
      }),
      h.default.Draw.Polyline = h.default.Draw.Feature.extend({
        statics: {
          TYPE: "polyline"
        },
        Poly: h.default.Polyline,
        options: {
          allowIntersection: !0,
          repeatMode: !1,
          drawError: {
            color: "#b00b00",
            timeout: 2500
          },
          icon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon"
          }),
          touchIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
          }),
          guidelineDistance: 20,
          maxGuideLineLength: 4e3,
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !1,
            clickable: !0
          },
          metric: !0,
          feet: !0,
          nautic: !1,
          showLength: !0,
          zIndexOffset: 2e3,
          factor: 1,
          maxPoints: 0
        },
        initialize: function (t, e) {
          h.default.Browser.touch && (this.options.icon = this.options.touchIcon),
            this.options.drawError.message = h.default.drawLocal.draw.handlers.polyline.error,
            e && e.drawError && (e.drawError = h.default.Util.extend({}, this.options.drawError, e.drawError)),
            this.type = h.default.Draw.Polyline.TYPE,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function () {
          h.default.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._markers = [],
              this._markerGroup = new h.default.LayerGroup,
              this._map.addLayer(this._markerGroup),
              this._poly = new h.default.Polyline([], this.options.shapeOptions),
              this._tooltip.updateContent(this._getTooltipText()),
              this._mouseMarker || (this._mouseMarker = h.default.marker(this._map.getCenter(), {
                icon: h.default.divIcon({
                  className: "leaflet-mouse-marker",
                  iconAnchor: [20, 20],
                  iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
              })),
              this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map),
              this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this).on("dblclick", this._onDblclickHndler, this))
        },
        removeHooks: function () {
          h.default.Draw.Feature.prototype.removeHooks.call(this),
            this._clearHideErrorTimeout(),
            this._cleanUpShape(),
            this._map.removeLayer(this._markerGroup),
            delete this._markerGroup,
            delete this._markers,
            this._map.removeLayer(this._poly),
            delete this._poly,
            this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this),
            this._map.removeLayer(this._mouseMarker),
            delete this._mouseMarker,
            this._clearGuides(),
            this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this).off("dblclick", this._onDblclickHndler, this)
        },
        _onDblclickHndler: function (t) {
          h.default.DomEvent.stopPropagation(t),
            this._finishShape()
        },
        deleteLastVertex: function () {
          if (!(this._markers.length <= 1)) {
            var t = this._markers.pop(),
              e = this._poly,
              i = e.getLatLngs(),
              a = i.splice(-1, 1)[0];
            this._poly.setLatLngs(i),
              this._markerGroup.removeLayer(t),
              e.getLatLngs().length < 2 && this._map.removeLayer(e),
              this._vertexChanged(a, !1)
          }
        },
        addVertex: function (t) {
          2 <= this._markers.length && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(),
            this._markers.push(this._createMarker(t)),
            this._poly.addLatLng(t),
            2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly),
            this._vertexChanged(t, !0))
        },
        completeShape: function () {
          this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable())
        },
        _finishShape: function (t) {
          var e = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
            i = this._poly.newLatLngIntersects(e[e.length - 1]);
          !this.options.allowIntersection && i || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable())
        },
        _shapeIsValid: function () {
          return !0
        },
        _onZoomEnd: function () {
          null !== this._markers && this._updateGuide()
        },
        _onMouseMove: function (t) {
          var e = this._map.mouseEventToLayerPoint(t.originalEvent),
            i = this._map.layerPointToLatLng(e);
          this._currentLatLng = i,
            this._updateTooltip(i),
            this._updateGuide(e),
            this._mouseMarker.setLatLng(i),
            h.default.DomEvent.preventDefault(t.originalEvent)
        },
        _vertexChanged: function (t, e) {
          this._map.fire(h.default.Draw.Event.DRAWVERTEX, {
              layers: this._markerGroup
            }),
            this._updateFinishHandler(),
            this._updateRunningMeasure(t, e),
            this._clearGuides(),
            this._updateTooltip()
        },
        _onMouseDown: function (t) {
          if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
            this._onMouseMove(t),
              this._clickHandled = !0,
              this._disableNewMarkers();
            var e = t.originalEvent,
              i = e.clientX,
              a = e.clientY;
            this._startPoint.call(this, i, a)
          }
        },
        _startPoint: function (t, e) {
          this._mouseDownOrigin = h.default.point(t, e)
        },
        _onMouseUp: function (t) {
          var e = t.originalEvent,
            i = e.clientX,
            a = e.clientY;
          this._endPoint.call(this, i, a, t),
            this._clickHandled = null
        },
        _endPoint: function (t, e, i) {
          if (this._mouseDownOrigin) {
            var a = h.default.point(t, e).distanceTo(this._mouseDownOrigin),
              n = this._calculateFinishDistance(i.latlng);
            1 < this.options.maxPoints && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(i.latlng),
                this._finishShape()) : n < 10 && h.default.Browser.touch ? this._finishShape() : Math.abs(a) < 9 * (o.devicePixelRatio || 1) && this.addVertex(i.latlng),
              this._enableNewMarkers()
          }
          this._mouseDownOrigin = null
        },
        _onTouch: function (t) {
          var e, i, a = t.originalEvent;
          !a.touches || !a.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = a.touches[0].clientX,
              i = a.touches[0].clientY,
              this._disableNewMarkers(),
              this._touchHandled = !0,
              this._startPoint.call(this, e, i),
              this._endPoint.call(this, e, i, t),
              this._touchHandled = null),
            this._clickHandled = null
        },
        _onMouseOut: function () {
          this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
        },
        _calculateFinishDistance: function (t) {
          var e;
          if (0 < this._markers.length) {
            var i;
            if (this.type === h.default.Draw.Polyline.TYPE)
              i = this._markers[this._markers.length - 1];
            else {
              if (this.type !== h.default.Draw.Polygon.TYPE)
                return 1 / 0;
              i = this._markers[0]
            }
            var a = this._map.latLngToContainerPoint(i.getLatLng()),
              n = new h.default.Marker(t, {
                icon: this.options.icon,
                zIndexOffset: 2 * this.options.zIndexOffset
              }),
              o = this._map.latLngToContainerPoint(n.getLatLng());
            e = a.distanceTo(o)
          } else
            e = 1 / 0;
          return e
        },
        _updateFinishHandler: function () {
          var t = this._markers.length;
          1 < t && this._markers[t - 1].on("click", this._finishShape, this),
            2 < t && this._markers[t - 2].off("click", this._finishShape, this)
        },
        _createMarker: function (t) {
          var e = new h.default.Marker(t, {
            icon: this.options.icon,
            zIndexOffset: 2 * this.options.zIndexOffset
          });
          return this._markerGroup.addLayer(e),
            e
        },
        _updateGuide: function (t) {
          var e = this._markers ? this._markers.length : 0;
          0 < e && (t = t || this._map.latLngToLayerPoint(this._currentLatLng),
            this._clearGuides(),
            this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
        },
        _updateTooltip: function (t) {
          var e = this._getTooltipText();
          t && this._tooltip.updatePosition(t),
            this._errorShown || this._tooltip.updateContent(e)
        },
        _drawGuide: function (t, e) {
          var i, a, n, o = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
            s = this.options.guidelineDistance,
            r = this.options.maxGuideLineLength,
            l = r < o ? o - r : s;
          for (this._guidesContainer || (this._guidesContainer = h.default.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < o; l += this.options.guidelineDistance)
            i = l / o,
            a = {
              x: Math.floor(t.x * (1 - i) + i * e.x),
              y: Math.floor(t.y * (1 - i) + i * e.y)
            },
            (n = h.default.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color,
            h.default.DomUtil.setPosition(n, a)
        },
        _updateGuideColor: function (t) {
          if (this._guidesContainer)
            for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++)
              this._guidesContainer.childNodes[e].style.backgroundColor = t
        },
        _clearGuides: function () {
          if (this._guidesContainer)
            for (; this._guidesContainer.firstChild;)
              this._guidesContainer.removeChild(this._guidesContainer.firstChild)
        },
        _getTooltipText: function () {
          var t, e = this.options.showLength;
          return 0 === this._markers.length ? {
            text: h.default.drawLocal.draw.handlers.polyline.tooltip.start
          } : (t = e ? this._getMeasurementString() : "",
            1 === this._markers.length ? {
              text: h.default.drawLocal.draw.handlers.polyline.tooltip.cont,
              subtext: t
            } : {
              text: h.default.drawLocal.draw.handlers.polyline.tooltip.end,
              subtext: t
            })
        },
        _updateRunningMeasure: function (t, e) {
          var i, a, n = this._markers.length;
          1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = n - (e ? 2 : 1),
            a = h.default.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1),
            this._measurementRunningTotal += a * (e ? 1 : -1))
        },
        _getMeasurementString: function () {
          var t, e = this._currentLatLng,
            i = this._markers[this._markers.length - 1].getLatLng();
          return t = h.default.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0,
            h.default.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
        },
        _showErrorTooltip: function () {
          this._errorShown = !0,
            this._tooltip.showAsError().updateContent({
              text: this.options.drawError.message
            }),
            this._updateGuideColor(this.options.drawError.color),
            this._poly.setStyle({
              color: this.options.drawError.color
            }),
            this._clearHideErrorTimeout(),
            this._hideErrorTimeout = setTimeout(h.default.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
        },
        _hideErrorTooltip: function () {
          this._errorShown = !1,
            this._clearHideErrorTimeout(),
            this._tooltip.removeError().updateContent(this._getTooltipText()),
            this._updateGuideColor(this.options.shapeOptions.color),
            this._poly.setStyle({
              color: this.options.shapeOptions.color
            })
        },
        _clearHideErrorTimeout: function () {
          this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout),
            this._hideErrorTimeout = null)
        },
        _disableNewMarkers: function () {
          this._disableMarkers = !0
        },
        _enableNewMarkers: function () {
          setTimeout(function () {
              this._disableMarkers = !1
            }
            .bind(this), 50)
        },
        _cleanUpShape: function () {
          1 < this._markers.length && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
        },
        _fireCreatedEvent: function () {
          var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
          h.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
      }),
      h.default.Draw.Polygon = h.default.Draw.Polyline.extend({
        statics: {
          TYPE: "polygon"
        },
        Poly: h.default.Polygon,
        options: {
          showArea: !1,
          showLength: !1,
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
          },
          metric: !0,
          feet: !0,
          nautic: !1,
          precision: {}
        },
        initialize: function (t, e) {
          h.default.Draw.Polyline.prototype.initialize.call(this, t, e),
            this.type = h.default.Draw.Polygon.TYPE
        },
        _updateFinishHandler: function () {
          var t = this._markers.length;
          1 === t && this._markers[0].on("click", this._finishShape, this),
            2 < t && (this._markers[t - 1].on("dblclick", this._finishShape, this),
              3 < t && this._markers[t - 2].off("dblclick", this._finishShape, this))
        },
        _getTooltipText: function () {
          var t, e;
          return 0 === this._markers.length ? t = h.default.drawLocal.draw.handlers.polygon.tooltip.start : (t = this._markers.length < 3 ? h.default.drawLocal.draw.handlers.polygon.tooltip.cont : h.default.drawLocal.draw.handlers.polygon.tooltip.end,
            e = this._getMeasurementString()), {
            text: t,
            subtext: e
          }
        },
        _getMeasurementString: function () {
          var t = this._area,
            e = "";
          return t || this.options.showLength ? (this.options.showLength && (e = h.default.Draw.Polyline.prototype._getMeasurementString.call(this)),
            t && (e += "<br>" + h.default.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)),
            e) : null
        },
        _shapeIsValid: function () {
          return 3 <= this._markers.length
        },
        _vertexChanged: function (t, e) {
          var i;
          !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(),
              this._area = h.default.GeometryUtil.geodesicArea(i)),
            h.default.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
        },
        _cleanUpShape: function () {
          var t = this._markers.length;
          0 < t && (this._markers[0].off("click", this._finishShape, this),
            2 < t && this._markers[t - 1].off("dblclick", this._finishShape, this))
        }
      }),
      h.default.SimpleShape = {},
      h.default.Draw.SimpleShape = h.default.Draw.Feature.extend({
        options: {
          repeatMode: !1
        },
        initialize: function (t, e) {
          this._endLabelText = h.default.drawLocal.draw.handlers.simpleshape.tooltip.end,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function () {
          h.default.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._mapDraggable = this._map.dragging.enabled(),
              this._mapDraggable && this._map.dragging.disable(),
              this._container.style.cursor = "crosshair",
              this._tooltip.updateContent({
                text: this._initialLabelText
              }),
              this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this),
              n.addEventListener("touchstart", h.default.DomEvent.preventDefault, {
                passive: !1
              }))
        },
        removeHooks: function () {
          h.default.Draw.Feature.prototype.removeHooks.call(this),
            this._map && (this._mapDraggable && this._map.dragging.enable(),
              this._container.style.cursor = "",
              this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this),
              h.default.DomEvent.off(n, "mouseup", this._onMouseUp, this),
              h.default.DomEvent.off(n, "touchend", this._onMouseUp, this),
              n.removeEventListener("touchstart", h.default.DomEvent.preventDefault),
              this._shape && (this._map.removeLayer(this._shape),
                delete this._shape)),
            this._isDrawing = !1
        },
        _getTooltipText: function () {
          return {
            text: this._endLabelText
          }
        },
        _onMouseDown: function (t) {
          this._isDrawing = !0,
            this._startLatLng = t.latlng,
            h.default.DomEvent.on(n, "mouseup", this._onMouseUp, this).on(n, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
        },
        _onMouseMove: function (t) {
          var e = t.latlng;
          this._tooltip.updatePosition(e),
            this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()),
              this._drawShape(e))
        },
        _onMouseUp: function () {
          this._shape && this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable()
        }
      }),
      h.default.Draw.Rectangle = h.default.Draw.SimpleShape.extend({
        statics: {
          TYPE: "rectangle"
        },
        options: {
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
          },
          showArea: !0,
          metric: !0
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.Rectangle.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.rectangle.tooltip.start,
            h.default.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        disable: function () {
          this._enabled && (this._isCurrentlyTwoClickDrawing = !1,
            h.default.Draw.SimpleShape.prototype.disable.call(this))
        },
        _onMouseUp: function (t) {
          this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && ! function (t, e) {
            for (;
              (t = t.parentElement) && !t.classList.contains(e);)
            ;
            return t
          }(t.target, "leaflet-pane") || h.default.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
        },
        _drawShape: function (t) {
          this._shape ? this._shape.setBounds(new h.default.LatLngBounds(this._startLatLng, t)) : (this._shape = new h.default.Rectangle(new h.default.LatLngBounds(this._startLatLng, t), this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new h.default.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
          h.default.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _getTooltipText: function () {
          var t, e, i, a = h.default.Draw.SimpleShape.prototype._getTooltipText.call(this),
            n = this._shape,
            o = this.options.showArea;
          return n && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(),
            e = h.default.GeometryUtil.geodesicArea(t),
            i = o ? h.default.GeometryUtil.readableArea(e, this.options.metric) : ""), {
            text: a.text,
            subtext: i
          }
        }
      }),
      h.default.Draw.Marker = h.default.Draw.Feature.extend({
        statics: {
          TYPE: "marker"
        },
        options: {
          icon: new h.default.Icon.Default,
          repeatMode: !1,
          zIndexOffset: 2e3
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.Marker.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.marker.tooltip.start,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function () {
          h.default.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._tooltip.updateContent({
                text: this._initialLabelText
              }),
              this._mouseMarker || (this._mouseMarker = h.default.marker(this._map.getCenter(), {
                icon: h.default.divIcon({
                  className: "leaflet-mouse-marker",
                  iconAnchor: [20, 20],
                  iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
              })),
              this._mouseMarker.on("click", this._onClick, this).addTo(this._map),
              this._map.on("mousemove", this._onMouseMove, this),
              this._map.on("click", this._onTouch, this))
        },
        removeHooks: function () {
          h.default.Draw.Feature.prototype.removeHooks.call(this),
            this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this),
              this._marker && (this._marker.off("click", this._onClick, this),
                this._map.removeLayer(this._marker),
                delete this._marker),
              this._mouseMarker.off("click", this._onClick, this),
              this._map.removeLayer(this._mouseMarker),
              delete this._mouseMarker,
              this._map.off("mousemove", this._onMouseMove, this))
        },
        _onMouseMove: function (t) {
          var e = t.latlng;
          this._tooltip.updatePosition(e),
            this._mouseMarker.setLatLng(e),
            this._marker ? (e = this._mouseMarker.getLatLng(),
              this._marker.setLatLng(e)) : (this._marker = this._createMarker(e),
              this._marker.on("click", this._onClick, this),
              this._map.on("click", this._onClick, this).addLayer(this._marker))
        },
        _createMarker: function (t) {
          return new h.default.Marker(t, {
            icon: this.options.icon,
            zIndexOffset: this.options.zIndexOffset
          })
        },
        _onClick: function () {
          this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable()
        },
        _onTouch: function (t) {
          this._onMouseMove(t),
            this._onClick()
        },
        _fireCreatedEvent: function () {
          var t = new h.default.Marker.Touch(this._marker.getLatLng(), {
            icon: this.options.icon
          });
          h.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
      }),
      h.default.Draw.CircleMarker = h.default.Draw.Marker.extend({
        statics: {
          TYPE: "circlemarker"
        },
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 4,
          opacity: .5,
          fill: !0,
          fillColor: null,
          fillOpacity: .2,
          clickable: !0,
          zIndexOffset: 2e3
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.CircleMarker.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.circlemarker.tooltip.start,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        _fireCreatedEvent: function () {
          var t = new h.default.CircleMarker(this._marker.getLatLng(), this.options);
          h.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        },
        _createMarker: function (t) {
          return new h.default.CircleMarker(t, this.options)
        }
      }),
      h.default.Draw.Circle = h.default.Draw.SimpleShape.extend({
        statics: {
          TYPE: "circle"
        },
        options: {
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
          },
          showRadius: !0,
          metric: !0,
          feet: !0,
          nautic: !1
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.Circle.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.circle.tooltip.start,
            h.default.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _drawShape: function (t) {
          if (h.default.GeometryUtil.isVersion07x())
            var e = this._startLatLng.distanceTo(t);
          else
            e = this._map.distance(this._startLatLng, t);
          this._shape ? this._shape.setRadius(e) : (this._shape = new h.default.Circle(this._startLatLng, e, this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new h.default.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
          h.default.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _onMouseMove: function (t) {
          var e, i = t.latlng,
            a = this.options.showRadius,
            n = this.options.metric;
          if (this._tooltip.updatePosition(i),
            this._isDrawing) {
            this._drawShape(i),
              e = this._shape.getRadius().toFixed(1);
            var o = "";
            a && (o = h.default.drawLocal.draw.handlers.circle.radius + ": " + h.default.GeometryUtil.readableDistance(e, n, this.options.feet, this.options.nautic)),
              this._tooltip.updateContent({
                text: this._endLabelText,
                subtext: o
              })
          }
        }
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Marker = h.default.Handler.extend({
        initialize: function (t, e) {
          this._marker = t,
            h.default.setOptions(this, e)
        },
        addHooks: function () {
          var t = this._marker;
          t.dragging && t.dragging.enable(),
            t.on("dragend", this._onDragEnd, t),
            this._toggleMarkerHighlight()
        },
        removeHooks: function () {
          var t = this._marker;
          t.dragging && t.dragging.disable(),
            t.off("dragend", this._onDragEnd, t),
            this._toggleMarkerHighlight()
        },
        _onDragEnd: function (t) {
          var e = t.target;
          e.edited = !0,
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: e
            })
        },
        _toggleMarkerHighlight: function () {
          var t = this._marker._icon;
          t && (t.style.display = "none",
            h.default.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (h.default.DomUtil.removeClass(t, "leaflet-edit-marker-selected"),
              this._offsetMarker(t, -4)) : (h.default.DomUtil.addClass(t, "leaflet-edit-marker-selected"),
              this._offsetMarker(t, 4)),
            t.style.display = "")
        },
        _offsetMarker: function (t, e) {
          var i = parseInt(t.style.marginTop, 10) - e,
            a = parseInt(t.style.marginLeft, 10) - e;
          t.style.marginTop = i + "px",
            t.style.marginLeft = a + "px"
        }
      }),
      h.default.Marker.addInitHook(function () {
        h.default.Edit.Marker && (this.editing = new h.default.Edit.Marker(this),
          this.options.editable && this.editing.enable())
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Poly = h.default.Handler.extend({
        initialize: function (t) {
          this.latlngs = [t._latlngs],
            t._holes && (this.latlngs = this.latlngs.concat(t._holes)),
            this._poly = t,
            this._poly.on("revert-edited", this._updateLatLngs, this)
        },
        _defaultShape: function () {
          return h.default.LineUtil.isFlat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0]
        },
        _eachVertexHandler: function (t) {
          for (var e = 0; e < this._verticesHandlers.length; e++)
            t(this._verticesHandlers[e])
        },
        addHooks: function () {
          this._initHandlers(),
            this._eachVertexHandler(function (t) {
              t.addHooks()
            })
        },
        removeHooks: function () {
          this._eachVertexHandler(function (t) {
            t.removeHooks()
          })
        },
        updateMarkers: function () {
          this._eachVertexHandler(function (t) {
            t.updateMarkers()
          })
        },
        _initHandlers: function () {
          this._verticesHandlers = [];
          for (var t = 0; t < this.latlngs.length; t++)
            this._verticesHandlers.push(new h.default.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this._poly.options.poly))
        },
        _updateLatLngs: function (t) {
          this.latlngs = [t.layer._latlngs],
            t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
        }
      }),
      h.default.Edit.PolyVerticesEdit = h.default.Handler.extend({
        options: {
          icon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon"
          }),
          touchIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
          }),
          drawError: {
            color: "#b00b00",
            timeout: 1e3
          }
        },
        initialize: function (t, e, i) {
          h.default.Browser.touch && (this.options.icon = this.options.touchIcon),
            this._poly = t,
            i && i.drawError && (i.drawError = h.default.Util.extend({}, this.options.drawError, i.drawError)),
            this._latlngs = e,
            h.default.setOptions(this, i)
        },
        _defaultShape: function () {
          return h.default.LineUtil.isFlat(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        addHooks: function () {
          var t = this._poly,
            e = t._path;
          null == t.options.editing && t.editing && (t.options.editing = t.editing),
            t instanceof h.default.Polygon || (t.options.fill = !1,
              t.options.editing && (t.options.editing.fill = !1)),
            e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
                h.default.DomUtil.removeClass(e, t)
              }),
              t.options.editing.className.split(" ").forEach(function (t) {
                h.default.DomUtil.addClass(e, t)
              })),
            t.setStyle(t.options.editing),
            this._poly._map && (this._map = this._poly._map,
              this._markerGroup || this._initMarkers(),
              this._poly._map.addLayer(this._markerGroup))
        },
        removeHooks: function () {
          var t = this._poly,
            e = t._path;
          e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach(function (t) {
                h.default.DomUtil.removeClass(e, t)
              }),
              t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
                h.default.DomUtil.addClass(e, t)
              })),
            t.setStyle(t.options.original),
            t._map && (t._map.removeLayer(this._markerGroup),
              delete this._markerGroup,
              delete this._markers)
        },
        updateMarkers: function () {
          this._markerGroup.clearLayers(),
            this._initMarkers()
        },
        _initMarkers: function () {
          this._markerGroup || (this._markerGroup = new h.default.LayerGroup),
            this._markers = [];
          var t, e, i, a, n, o, s = this._defaultShape();
          for (t = 0,
            i = s.length; t < i; t++)
            (a = this._createMarker(s[t], t)).on("click", this._onMarkerClick, this),
            a.on("contextmenu", this._onContextMenu, this),
            this._markers.push(a);
          for (t = 0,
            e = i - 1; t < i; e = t++)
            (0 !== t || h.default.Polygon && this._poly instanceof h.default.Polygon) && (n = this._markers[e],
              o = this._markers[t],
              this._createMiddleMarker(n, o),
              this._updatePrevNext(n, o))
        },
        _createMarker: function (t, e) {
          var i = new h.default.Marker.Touch(t, {
            draggable: !0,
            icon: this.options.icon
          });
          return i._origLatLng = t,
            i._index = e,
            i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this),
            this._markerGroup.addLayer(i),
            i
        },
        _onMarkerDragStart: function () {
          this._poly.fire("editstart")
        },
        _spliceLatLngs: function () {
          var t = this._defaultShape(),
            e = [].splice.apply(t, arguments);
          return this._poly._convertLatLngs(t, !0),
            this._poly.redraw(),
            e
        },
        _removeMarker: function (t) {
          var e = t._index;
          this._markerGroup.removeLayer(t),
            this._markers.splice(e, 1),
            this._spliceLatLngs(e, 1),
            this._updateIndexes(e, -1),
            t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
        },
        _fireEdit: function () {
          this._poly.edited = !0,
            this._poly.fire("edit"),
            this._poly._map.fire(h.default.Draw.Event.EDITVERTEX, {
              layers: this._markerGroup,
              poly: this._poly
            })
        },
        _onMarkerDrag: function (t) {
          var e = t.target,
            i = this._poly,
            a = h.default.LatLngUtil.cloneLatLng(e._origLatLng);
          if (h.default.extend(e._origLatLng, e._latlng),
            i.options.poly) {
            var n = i._map._editTooltip;
            if (!i.options.poly.allowIntersection && i.intersects()) {
              h.default.extend(e._origLatLng, a),
                e.setLatLng(a);
              var o = i.options.color;
              i.setStyle({
                  color: this.options.drawError.color
                }),
                n && n.updateContent({
                  text: h.default.drawLocal.draw.handlers.polyline.error
                }),
                setTimeout(function () {
                  i.setStyle({
                      color: o
                    }),
                    n && n.updateContent({
                      text: h.default.drawLocal.edit.handlers.edit.tooltip.text,
                      subtext: h.default.drawLocal.edit.handlers.edit.tooltip.subtext
                    })
                }, 1e3)
            }
          }
          e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)),
            e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)),
            this._poly._bounds._southWest = h.default.latLng(1 / 0, 1 / 0),
            this._poly._bounds._northEast = h.default.latLng(-1 / 0, -1 / 0);
          var s = this._poly.getLatLngs();
          this._poly._convertLatLngs(s, !0),
            this._poly.redraw(),
            this._poly.fire("editdrag"),
            this._map && this._map.fire("draw:editing", {
              layer: this._poly
            })
        },
        _onMarkerClick: function (t) {
          var e = h.default.Polygon && this._poly instanceof h.default.Polygon ? 4 : 3,
            i = t.target;
          this._defaultShape().length < e || (this._removeMarker(i),
            this._updatePrevNext(i._prev, i._next),
            i._middleLeft && this._markerGroup.removeLayer(i._middleLeft),
            i._middleRight && this._markerGroup.removeLayer(i._middleRight),
            i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null,
            this._fireEdit())
        },
        _onContextMenu: function (t) {
          var e = t.target;
          this._poly,
            this._poly._map.fire(h.default.Draw.Event.MARKERCONTEXT, {
              marker: e,
              layers: this._markerGroup,
              poly: this._poly
            }),
            h.default.DomEvent.stopPropagation
        },
        _onTouchMove: function (t) {
          var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
            i = this._map.layerPointToLatLng(e),
            a = t.target;
          h.default.extend(a._origLatLng, i),
            a._middleLeft && a._middleLeft.setLatLng(this._getMiddleLatLng(a._prev, a)),
            a._middleRight && a._middleRight.setLatLng(this._getMiddleLatLng(a, a._next)),
            this._poly.redraw(),
            this.updateMarkers()
        },
        _updateIndexes: function (e, i) {
          this._markerGroup.eachLayer(function (t) {
            t._index > e && (t._index += i)
          })
        },
        _createMiddleMarker: function (e, i) {
          var a, n, t, o = this._getMiddleLatLng(e, i),
            s = this._createMarker(o);
          s.setOpacity(.6),
            e._middleRight = i._middleLeft = s,
            n = function () {
              s.off("touchmove", n, this);
              var t = i._index;
              s._index = t,
                s.off("click", a, this).on("click", this._onMarkerClick, this),
                o.lat = s.getLatLng().lat,
                o.lng = s.getLatLng().lng,
                this._spliceLatLngs(t, 0, o),
                this._markers.splice(t, 0, s),
                s.setOpacity(1),
                this._updateIndexes(t, 1),
                i._index++,
                this._updatePrevNext(e, s),
                this._updatePrevNext(s, i),
                this._poly.fire("editstart")
            },
            t = function () {
              s.off("dragstart", n, this),
                s.off("dragend", t, this),
                s.off("touchmove", n, this),
                this._createMiddleMarker(e, s),
                this._createMiddleMarker(s, i)
            },
            a = function () {
              n.call(this),
                t.call(this),
                this._fireEdit()
            },
            s.on("click", a, this).on("dragstart", n, this).on("dragend", t, this).on("touchmove", n, this),
            this._markerGroup.addLayer(s)
        },
        _updatePrevNext: function (t, e) {
          t && (t._next = e),
            e && (e._prev = t)
        },
        _getMiddleLatLng: function (t, e) {
          var i = this._poly._map,
            a = i.project(t.getLatLng()),
            n = i.project(e.getLatLng());
          return i.unproject(a._add(n)._divideBy(2))
        }
      }),
      h.default.Polyline.addInitHook(function () {
        this.editing || (h.default.Edit.Poly && (this.editing = new h.default.Edit.Poly(this),
            this.options.editable && this.editing.enable()),
          this.on("add", function () {
            this.editing && this.editing.enabled() && this.editing.addHooks()
          }),
          this.on("remove", function () {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
          }))
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.SimpleShape = h.default.Handler.extend({
        options: {
          moveIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
          }),
          resizeIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
          }),
          touchMoveIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
          }),
          touchResizeIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
          })
        },
        initialize: function (t, e) {
          h.default.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon,
              this.options.resizeIcon = this.options.touchResizeIcon),
            this._shape = t,
            h.default.Util.setOptions(this, e)
        },
        addHooks: function () {
          var t = this._shape;
          this._shape._map && (this._map = this._shape._map,
            t.setStyle(t.options.editing),
            t._map && (this._map = t._map,
              this._markerGroup || this._initMarkers(),
              this._map.addLayer(this._markerGroup)))
        },
        removeHooks: function () {
          var t = this._shape;
          if (t.setStyle(t.options.original),
            t._map) {
            this._unbindMarker(this._moveMarker);
            for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
              this._unbindMarker(this._resizeMarkers[e]);
            this._resizeMarkers = null,
              this._map.removeLayer(this._markerGroup),
              delete this._markerGroup
          }
          this._map = null
        },
        updateMarkers: function () {
          this._markerGroup.clearLayers(),
            this._initMarkers()
        },
        _initMarkers: function () {
          this._markerGroup || (this._markerGroup = new h.default.LayerGroup),
            this._createMoveMarker(),
            this._createResizeMarker()
        },
        _createMoveMarker: function () {},
        _createResizeMarker: function () {},
        _createMarker: function (t, e) {
          var i = new h.default.Marker.Touch(t, {
            draggable: !0,
            icon: e,
            zIndexOffset: 10
          });
          return this._bindMarker(i),
            this._markerGroup.addLayer(i),
            i
        },
        _bindMarker: function (t) {
          t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
        },
        _unbindMarker: function (t) {
          t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
        },
        _onMarkerDragStart: function (t) {
          t.target.setOpacity(0),
            this._shape.fire("editstart")
        },
        _fireEdit: function () {
          this._shape.edited = !0,
            this._shape.fire("edit")
        },
        _onMarkerDrag: function (t) {
          var e = t.target,
            i = e.getLatLng();
          e === this._moveMarker ? this._move(i) : this._resize(i),
            this._shape.redraw(),
            this._shape.fire("editdrag")
        },
        _onMarkerDragEnd: function (t) {
          t.target.setOpacity(1),
            this._fireEdit()
        },
        _onTouchStart: function (t) {
          if (h.default.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t),
            "function" == typeof this._getCorners) {
            var e = this._getCorners(),
              i = t.target,
              a = i._cornerIndex;
            i.setOpacity(0),
              this._oppositeCorner = e[(a + 2) % 4],
              this._toggleCornerMarkers(0, a)
          }
          this._shape.fire("editstart")
        },
        _onTouchMove: function (t) {
          var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
            i = this._map.layerPointToLatLng(e);
          return t.target === this._moveMarker ? this._move(i) : this._resize(i),
            this._shape.redraw(),
            !1
        },
        _onTouchEnd: function (t) {
          t.target.setOpacity(1),
            this.updateMarkers(),
            this._fireEdit()
        },
        _move: function () {},
        _resize: function () {}
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Rectangle = h.default.Edit.SimpleShape.extend({
        _createMoveMarker: function () {
          var t = this._shape.getBounds().getCenter();
          this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function () {
          var t = this._getCorners();
          this._resizeMarkers = [];
          for (var e = 0, i = t.length; e < i; e++)
            this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
            this._resizeMarkers[e]._cornerIndex = e
        },
        _onMarkerDragStart: function (t) {
          h.default.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
          var e = this._getCorners(),
            i = t.target._cornerIndex;
          this._oppositeCorner = e[(i + 2) % 4],
            this._toggleCornerMarkers(0, i)
        },
        _onMarkerDragEnd: function (t) {
          var e, i = t.target;
          i === this._moveMarker && (e = this._shape.getBounds().getCenter(),
              i.setLatLng(e)),
            this._toggleCornerMarkers(1),
            this._repositionCornerMarkers(),
            h.default.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
        },
        _move: function (t) {
          for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), a = this._shape.getBounds().getCenter(), n = [], o = 0, s = i.length; o < s; o++)
            e = [i[o].lat - a.lat, i[o].lng - a.lng],
            n.push([t.lat + e[0], t.lng + e[1]]);
          this._shape.setLatLngs(n),
            this._repositionCornerMarkers(),
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: this._shape
            })
        },
        _resize: function (t) {
          var e;
          this._shape.setBounds(h.default.latLngBounds(t, this._oppositeCorner)),
            e = this._shape.getBounds(),
            this._moveMarker.setLatLng(e.getCenter()),
            this._map.fire(h.default.Draw.Event.EDITRESIZE, {
              layer: this._shape
            })
        },
        _getCorners: function () {
          var t = this._shape.getBounds();
          return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
        },
        _toggleCornerMarkers: function (t) {
          for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
            this._resizeMarkers[e].setOpacity(t)
        },
        _repositionCornerMarkers: function () {
          for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++)
            this._resizeMarkers[e].setLatLng(t[e])
        }
      }),
      h.default.Rectangle.addInitHook(function () {
        h.default.Edit.Rectangle && (this.editing = new h.default.Edit.Rectangle(this),
          this.options.editable && this.editing.enable())
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.CircleMarker = h.default.Edit.SimpleShape.extend({
        _createMoveMarker: function () {
          var t = this._shape.getLatLng();
          this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function () {
          this._resizeMarkers = []
        },
        _move: function (t) {
          if (this._resizeMarkers.length) {
            var e = this._getResizeMarkerPoint(t);
            this._resizeMarkers[0].setLatLng(e)
          }
          this._shape.setLatLng(t),
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: this._shape
            })
        }
      }),
      h.default.CircleMarker.addInitHook(function () {
        h.default.Edit.CircleMarker && (this.editing = new h.default.Edit.CircleMarker(this),
            this.options.editable && this.editing.enable()),
          this.on("add", function () {
            this.editing && this.editing.enabled() && this.editing.addHooks()
          }),
          this.on("remove", function () {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
          })
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Circle = h.default.Edit.CircleMarker.extend({
        _createResizeMarker: function () {
          var t = this._shape.getLatLng(),
            e = this._getResizeMarkerPoint(t);
          this._resizeMarkers = [],
            this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
        },
        _getResizeMarkerPoint: function (t) {
          var e = this._shape._radius * Math.cos(Math.PI / 4),
            i = this._map.project(t);
          return this._map.unproject([i.x + e, i.y - e])
        },
        _resize: function (t) {
          var e, i = this._moveMarker.getLatLng();
          e = h.default.GeometryUtil.isVersion07x() ? i.distanceTo(t) : this._map.distance(i, t),
            this._shape.setRadius(e),
            this._map.editTooltip && this._map._editTooltip.updateContent({
              text: h.default.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + h.default.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: h.default.drawLocal.draw.handlers.circle.radius + ": " + h.default.GeometryUtil.readableDistance(e, !0, this.options.feet, this.options.nautic)
            }),
            this._shape.setRadius(e),
            this._map.fire(h.default.Draw.Event.EDITRESIZE, {
              layer: this._shape
            })
        }
      }),
      h.default.Circle.addInitHook(function () {
        h.default.Edit.Circle && (this.editing = new h.default.Edit.Circle(this),
          this.options.editable && this.editing.enable())
      }),
      h.default.Map.mergeOptions({
        touchExtend: !0
      }),
      h.default.Map.TouchExtend = h.default.Handler.extend({
        initialize: function (t) {
          this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane
        },
        addHooks: function () {
          h.default.DomEvent.on(this._container, "touchstart", this._onTouchStart, this),
            h.default.DomEvent.on(this._container, "touchend", this._onTouchEnd, this),
            h.default.DomEvent.on(this._container, "touchmove", this._onTouchMove, this),
            this._detectIE() ? (h.default.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this),
              h.default.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this),
              h.default.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this),
              h.default.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (h.default.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this),
              h.default.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
        },
        removeHooks: function () {
          h.default.DomEvent.off(this._container, "touchstart", this._onTouchStart, this),
            h.default.DomEvent.off(this._container, "touchend", this._onTouchEnd, this),
            h.default.DomEvent.off(this._container, "touchmove", this._onTouchMove, this),
            this._detectIE() ? (h.default.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this),
              h.default.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this),
              h.default.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this),
              h.default.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (h.default.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this),
              h.default.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
        },
        _touchEvent: function (t, e) {
          var i = {};
          if (void 0 !== t.touches) {
            if (!t.touches.length)
              return;
            i = t.touches[0]
          } else {
            if ("touch" !== t.pointerType)
              return;
            if (i = t,
              !this._filterClick(t))
              return
          }
          var a = this._map.mouseEventToContainerPoint(i),
            n = this._map.mouseEventToLayerPoint(i),
            o = this._map.layerPointToLatLng(n);
          this._map.fire(e, {
            latlng: o,
            layerPoint: n,
            containerPoint: a,
            pageX: i.pageX,
            pageY: i.pageY,
            originalEvent: t
          })
        },
        _filterClick: function (t) {
          var e = t.timeStamp || t.originalEvent.timeStamp,
            i = h.default.DomEvent._lastClick && e - h.default.DomEvent._lastClick;
          return i && 100 < i && i < 500 || t.target._simulatedClick && !t._simulated ? (h.default.DomEvent.stop(t),
            !1) : (h.default.DomEvent._lastClick = e,
            !0)
        },
        _onTouchStart: function (t) {
          this._map._loaded && this._touchEvent(t, "touchstart")
        },
        _onTouchEnd: function (t) {
          this._map._loaded && this._touchEvent(t, "touchend")
        },
        _onTouchCancel: function (t) {
          if (this._map._loaded) {
            var e = "touchcancel";
            this._detectIE() && (e = "pointercancel"),
              this._touchEvent(t, e)
          }
        },
        _onTouchLeave: function (t) {
          this._map._loaded && this._touchEvent(t, "touchleave")
        },
        _onTouchMove: function (t) {
          this._map._loaded && this._touchEvent(t, "touchmove")
        },
        _detectIE: function () {
          var t = o.navigator.userAgent,
            e = t.indexOf("MSIE ");
          if (0 < e)
            return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
          if (0 < t.indexOf("Trident/")) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
          }
          var a = t.indexOf("Edge/");
          return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
        }
      }),
      h.default.Map.addInitHook("addHandler", "touchExtend", h.default.Map.TouchExtend),
      h.default.Marker.Touch = h.default.Marker.extend({
        _initInteraction: function () {
          return this.addInteractiveTarget ? h.default.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
        },
        _initInteractionLegacy: function () {
          if (this.options.clickable) {
            var t = this._icon,
              e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
            this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]),
              h.default.DomUtil.addClass(t, "leaflet-clickable"),
              h.default.DomEvent.on(t, "click", this._onMouseClick, this),
              h.default.DomEvent.on(t, "keypress", this._onKeyPress, this);
            for (var i = 0; i < e.length; i++)
              h.default.DomEvent.on(t, e[i], this._fireMouseEvent, this);
            h.default.Handler.MarkerDrag && (this.dragging = new h.default.Handler.MarkerDrag(this),
              this.options.draggable && this.dragging.enable())
          }
        },
        _detectIE: function () {
          var t = o.navigator.userAgent,
            e = t.indexOf("MSIE ");
          if (0 < e)
            return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
          if (0 < t.indexOf("Trident/")) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
          }
          var a = t.indexOf("Edge/");
          return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
        }
      }),
      h.default.LatLngUtil = {
        cloneLatLngs: function (t) {
          for (var e = [], i = 0, a = t.length; i < a; i++)
            Array.isArray(t[i]) ? e.push(h.default.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
          return e
        },
        cloneLatLng: function (t) {
          return h.default.latLng(t.lat, t.lng)
        }
      },
      s = {
        km: 2,
        ha: 2,
        m: 0,
        mi: 2,
        ac: 2,
        yd: 0,
        ft: 0,
        nm: 2
      },
      h.default.GeometryUtil = h.default.extend(h.default.GeometryUtil || {}, {
        geodesicArea: function (t) {
          var e, i, a = t.length,
            n = 0,
            o = Math.PI / 180;
          if (2 < a) {
            for (var s = 0; s < a; s++)
              e = t[s],
              n += ((i = t[(s + 1) % a]).lng - e.lng) * o * (2 + Math.sin(e.lat * o) + Math.sin(i.lat * o));
            n = 6378137 * n * 6378137 / 2
          }
          return Math.abs(n)
        },
        formattedNumber: function (t, e) {
          var i = parseFloat(t).toFixed(e),
            a = h.default.drawLocal.format && h.default.drawLocal.format.numeric,
            n = a && a.delimiters,
            o = n && n.thousands,
            s = n && n.decimal;
          if (o || s) {
            var r = i.split(".");
            i = o ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o) : r[0],
              s = s || ".",
              1 < r.length && (i = i + s + r[1])
          }
          return i
        },
        readableArea: function (t, e, i) {
          var a, n;
          return i = h.default.Util.extend({}, s, i),
            e ? (a = ["ha", "m"],
              "string" === (n = void 0 === e ? "undefined" : r(e)) ? a = [e] : "boolean" !== n && (a = e),
              1e6 <= t && -1 !== a.indexOf("km") ? h.default.GeometryUtil.formattedNumber(1e-6 * t, i.km) + " km²" : 1e4 <= t && -1 !== a.indexOf("ha") ? h.default.GeometryUtil.formattedNumber(1e-4 * t, i.ha) + " ha" : h.default.GeometryUtil.formattedNumber(t, i.m) + " m²") : 3097600 <= (t /= .836127) ? h.default.GeometryUtil.formattedNumber(t / 3097600, i.mi) + " mi²" : 4840 <= t ? h.default.GeometryUtil.formattedNumber(t / 4840, i.ac) + " acres" : h.default.GeometryUtil.formattedNumber(t, i.yd) + " yd²"
        },
        readableDistance: function (t, e, i, a, n) {
          var o;
          switch (n = h.default.Util.extend({}, s, n),
            e ? "string" == typeof e ? e : "metric" : i ? "feet" : a ? "nauticalMile" : "yards") {
            case "metric":
              o = 1e3 < t ? h.default.GeometryUtil.formattedNumber(t / 1e3, n.km) + " km" : h.default.GeometryUtil.formattedNumber(t, n.m) + " m";
              break;
            case "feet":
              t *= 3.28083,
                o = h.default.GeometryUtil.formattedNumber(t, n.ft) + " ft";
              break;
            case "nauticalMile":
              t *= .53996,
                o = h.default.GeometryUtil.formattedNumber(t / 1e3, n.nm) + " nm";
              break;
            case "yards":
            default:
              o = 1760 < (t *= 1.09361) ? h.default.GeometryUtil.formattedNumber(t / 1760, n.mi) + " miles" : h.default.GeometryUtil.formattedNumber(t, n.yd) + " yd"
          }
          return o
        },
        isVersion07x: function () {
          var t = h.default.version.split(".");
          return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
        }
      }),
      h.default.Util.extend(h.default.LineUtil, {
        segmentsIntersect: function (t, e, i, a) {
          return this._checkCounterclockwise(t, i, a) !== this._checkCounterclockwise(e, i, a) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, a)
        },
        _checkCounterclockwise: function (t, e, i) {
          return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
        }
      }),
      h.default.Polyline.include({
        intersects: function () {
          var t, e, i, a = this._getProjectedPoints(),
            n = a ? a.length : 0;
          if (this._tooFewPointsForIntersection())
            return !1;
          for (t = n - 1; 3 <= t; t--)
            if (e = a[t - 1],
              i = a[t],
              this._lineSegmentsIntersectsRange(e, i, t - 2))
              return !0;
          return !1
        },
        newLatLngIntersects: function (t, e) {
          return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
        },
        newPointIntersects: function (t, e) {
          var i = this._getProjectedPoints(),
            a = i ? i.length : 0,
            n = i ? i[a - 1] : null,
            o = a - 2;
          return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(n, t, o, e ? 1 : 0)
        },
        _tooFewPointsForIntersection: function (t) {
          var e = this._getProjectedPoints(),
            i = e ? e.length : 0;
          return !e || (i += t || 0) <= 3
        },
        _lineSegmentsIntersectsRange: function (t, e, i, a) {
          var n, o, s = this._getProjectedPoints();
          a = a || 0;
          for (var r = i; a < r; r--)
            if (n = s[r - 1],
              o = s[r],
              h.default.LineUtil.segmentsIntersect(t, e, n, o))
              return !0;
          return !1
        },
        _getProjectedPoints: function () {
          if (!this._defaultShape)
            return this._originalPoints;
          for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++)
            t.push(this._map.latLngToLayerPoint(e[i]));
          return t
        }
      }),
      h.default.Polygon.include({
        intersects: function () {
          var t, e, i, a, n = this._getProjectedPoints();
          return !this._tooFewPointsForIntersection() && (!!h.default.Polyline.prototype.intersects.call(this) || (t = n.length,
            e = n[0],
            i = n[t - 1],
            a = t - 2,
            this._lineSegmentsIntersectsRange(i, e, a, 1)))
        }
      }),
      h.default.Control.Draw = h.default.Control.extend({
        options: {
          position: "topleft",
          draw: {},
          edit: !1
        },
        initialize: function (t) {
          if (h.default.version < "0.7")
            throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
          var e;
          h.default.Control.prototype.initialize.call(this, t),
            this._toolbars = {},
            h.default.DrawToolbar && this.options.draw && (e = new h.default.DrawToolbar(this.options.draw),
              this._toolbars[h.default.DrawToolbar.TYPE] = e,
              this._toolbars[h.default.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
            h.default.EditToolbar && this.options.edit && (e = new h.default.EditToolbar(this.options.edit),
              this._toolbars[h.default.EditToolbar.TYPE] = e,
              this._toolbars[h.default.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
            h.default.toolbar = this
        },
        onAdd: function (t) {
          var e, i = h.default.DomUtil.create("div", "leaflet-draw"),
            a = !1;
          for (var n in this._toolbars)
            this._toolbars.hasOwnProperty(n) && (e = this._toolbars[n].addToolbar(t)) && (a || (h.default.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || h.default.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"),
                a = !0),
              i.appendChild(e));
          return i
        },
        onRemove: function () {
          for (var t in this._toolbars)
            this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
        },
        setDrawingOptions: function (t) {
          for (var e in this._toolbars)
            this._toolbars[e] instanceof h.default.DrawToolbar && this._toolbars[e].setOptions(t)
        },
        _toolbarEnabled: function (t) {
          var e = t.target;
          for (var i in this._toolbars)
            this._toolbars[i] !== e && this._toolbars[i].disable()
        }
      }),
      h.default.Map.mergeOptions({
        drawControlTooltips: !0,
        drawControl: !1
      }),
      h.default.Map.addInitHook(function () {
        this.options.drawControl && (this.drawControl = new h.default.Control.Draw,
          this.addControl(this.drawControl))
      }),
      h.default.Toolbar = h.default.Class.extend({
        initialize: function (t) {
          h.default.setOptions(this, t),
            this._modes = {},
            this._actionButtons = [],
            this._activeMode = null;
          var e = h.default.version.split(".");
          1 === parseInt(e[0], 10) && 2 <= parseInt(e[1], 10) ? h.default.Toolbar.include(h.default.Evented.prototype) : h.default.Toolbar.include(h.default.Mixin.Events)
        },
        enabled: function () {
          return null !== this._activeMode
        },
        disable: function () {
          this.enabled() && this._activeMode.handler.disable()
        },
        addToolbar: function (t) {
          var e, i = h.default.DomUtil.create("div", "leaflet-draw-section"),
            a = 0,
            n = this._toolbarClass || "",
            o = this.getModeHandlers(t);
          for (this._toolbarContainer = h.default.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"),
            this._map = t,
            e = 0; e < o.length; e++)
            o[e].enabled && this._initModeHandler(o[e].handler, this._toolbarContainer, a++, n, o[e].title);
          if (a)
            return this._lastButtonIndex = --a,
              this._actionsContainer = h.default.DomUtil.create("ul", "leaflet-draw-actions"),
              i.appendChild(this._toolbarContainer),
              i.appendChild(this._actionsContainer),
              i
        },
        removeToolbar: function () {
          for (var t in this._modes)
            this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler),
              this._modes[t].handler.disable(),
              this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
          this._modes = {};
          for (var e = 0, i = this._actionButtons.length; e < i; e++)
            this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
          this._actionButtons = [],
            this._actionsContainer = null
        },
        _initModeHandler: function (t, e, i, a, n) {
          var o = t.type;
          this._modes[o] = {},
            this._modes[o].handler = t,
            this._modes[o].button = this._createButton({
              type: o,
              title: n,
              className: a + "-" + o,
              container: e,
              callback: this._modes[o].handler.enable,
              context: this._modes[o].handler
            }),
            this._modes[o].buttonIndex = i,
            this._modes[o].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
        },
        _detectIOS: function () {
          return /iPad|iPhone|iPod/.test(navigator.userAgent) && !o.MSStream
        },
        _createButton: function (t) {
          var e = h.default.DomUtil.create("a", t.className || "", t.container),
            i = h.default.DomUtil.create("span", "sr-only", t.container);
          e.href = "#",
            e.appendChild(i),
            t.title && (e.title = t.title,
              i.innerHTML = t.title),
            t.text && (e.innerHTML = t.text,
              i.innerHTML = t.text);
          var a = this._detectIOS() ? "touchstart" : "click";
          return h.default.DomEvent.on(e, "click", h.default.DomEvent.stopPropagation).on(e, "mousedown", h.default.DomEvent.stopPropagation).on(e, "dblclick", h.default.DomEvent.stopPropagation).on(e, "touchstart", h.default.DomEvent.stopPropagation).on(e, "click", h.default.DomEvent.preventDefault).on(e, a, t.callback, t.context),
            e
        },
        _disposeButton: function (t, e) {
          var i = this._detectIOS() ? "touchstart" : "click";
          h.default.DomEvent.off(t, "click", h.default.DomEvent.stopPropagation).off(t, "mousedown", h.default.DomEvent.stopPropagation).off(t, "dblclick", h.default.DomEvent.stopPropagation).off(t, "touchstart", h.default.DomEvent.stopPropagation).off(t, "click", h.default.DomEvent.preventDefault).off(t, i, e)
        },
        _handlerActivated: function (t) {
          this.disable(),
            this._activeMode = this._modes[t.handler],
            h.default.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
            this._showActionsToolbar(),
            this.fire("enable")
        },
        _handlerDeactivated: function () {
          this._hideActionsToolbar(),
            h.default.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
            this._activeMode = null,
            this.fire("disable")
        },
        _createActions: function (t) {
          var e, i, a, n, o = this._actionsContainer,
            s = this.getActions(t),
            r = s.length;
          for (i = 0,
            a = this._actionButtons.length; i < a; i++)
            this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
          for (this._actionButtons = []; o.firstChild;)
            o.removeChild(o.firstChild);
          for (var l = 0; l < r; l++)
            "enabled" in s[l] && !s[l].enabled || (e = h.default.DomUtil.create("li", "", o),
              n = this._createButton({
                title: s[l].title,
                text: s[l].text,
                container: e,
                callback: s[l].callback,
                context: s[l].context
              }),
              this._actionButtons.push({
                button: n,
                callback: s[l].callback
              }))
        },
        _showActionsToolbar: function () {
          var t = this._activeMode.buttonIndex,
            e = this._lastButtonIndex,
            i = this._activeMode.button.offsetTop - 1;
          this._createActions(this._activeMode.handler),
            this._actionsContainer.style.top = i + "px",
            0 === t && (h.default.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
              h.default.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")),
            t === e && (h.default.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
              h.default.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")),
            this._actionsContainer.style.display = "block",
            this._map.fire(h.default.Draw.Event.TOOLBAROPENED)
        },
        _hideActionsToolbar: function () {
          this._actionsContainer.style.display = "none",
            h.default.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
            h.default.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
            h.default.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"),
            h.default.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"),
            this._map.fire(h.default.Draw.Event.TOOLBARCLOSED)
        }
      }),
      h.default.Draw = h.default.Draw || {},
      h.default.Draw.Tooltip = h.default.Class.extend({
        initialize: function (t) {
          this._map = t,
            this._popupPane = t._panes.popupPane,
            this._visible = !1,
            this._container = t.options.drawControlTooltips ? h.default.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null,
            this._singleLineLabel = !1,
            this._map.on("mouseout", this._onMouseOut, this)
        },
        dispose: function () {
          this._map.off("mouseout", this._onMouseOut, this),
            this._container && (this._popupPane.removeChild(this._container),
              this._container = null)
        },
        updateContent: function (t) {
          return this._container && (t.subtext = t.subtext || "",
              0 !== t.subtext.length || this._singleLineLabel ? 0 < t.subtext.length && this._singleLineLabel && (h.default.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"),
                this._singleLineLabel = !1) : (h.default.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"),
                this._singleLineLabel = !0),
              this._container.innerHTML = (0 < t.subtext.length ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>",
              t.text || t.subtext ? (this._visible = !0,
                this._container.style.visibility = "inherit") : (this._visible = !1,
                this._container.style.visibility = "hidden")),
            this
        },
        updatePosition: function (t) {
          var e = this._map.latLngToLayerPoint(t),
            i = this._container;
          return this._container && (this._visible && (i.style.visibility = "inherit"),
              h.default.DomUtil.setPosition(i, e)),
            this
        },
        showAsError: function () {
          return this._container && h.default.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"),
            this
        },
        removeError: function () {
          return this._container && h.default.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"),
            this
        },
        _onMouseOut: function () {
          this._container && (this._container.style.visibility = "hidden")
        }
      }),
      h.default.DrawToolbar = h.default.Toolbar.extend({
        statics: {
          TYPE: "draw"
        },
        options: {
          polyline: {},
          polygon: {},
          rectangle: {},
          circle: {},
          marker: {},
          circlemarker: {}
        },
        initialize: function (t) {
          for (var e in this.options)
            this.options.hasOwnProperty(e) && t[e] && (t[e] = h.default.extend({}, this.options[e], t[e]));
          this._toolbarClass = "leaflet-draw-draw",
            h.default.Toolbar.prototype.initialize.call(this, t)
        },
        getModeHandlers: function (t) {
          return [{
            enabled: this.options.polyline,
            handler: new h.default.Draw.Polyline(t, this.options.polyline),
            title: h.default.drawLocal.draw.toolbar.buttons.polyline
          }, {
            enabled: this.options.polygon,
            handler: new h.default.Draw.Polygon(t, this.options.polygon),
            title: h.default.drawLocal.draw.toolbar.buttons.polygon
          }, {
            enabled: this.options.rectangle,
            handler: new h.default.Draw.Rectangle(t, this.options.rectangle),
            title: h.default.drawLocal.draw.toolbar.buttons.rectangle
          }, {
            enabled: this.options.circle,
            handler: new h.default.Draw.Circle(t, this.options.circle),
            title: h.default.drawLocal.draw.toolbar.buttons.circle
          }, {
            enabled: this.options.marker,
            handler: new h.default.Draw.Marker(t, this.options.marker),
            title: h.default.drawLocal.draw.toolbar.buttons.marker
          }, {
            enabled: this.options.circlemarker,
            handler: new h.default.Draw.CircleMarker(t, this.options.circlemarker),
            title: h.default.drawLocal.draw.toolbar.buttons.circlemarker
          }]
        },
        getActions: function (t) {
          return [{
            enabled: t.completeShape,
            title: h.default.drawLocal.draw.toolbar.finish.title,
            text: h.default.drawLocal.draw.toolbar.finish.text,
            callback: t.completeShape,
            context: t
          }, {
            enabled: t.deleteLastVertex,
            title: h.default.drawLocal.draw.toolbar.undo.title,
            text: h.default.drawLocal.draw.toolbar.undo.text,
            callback: t.deleteLastVertex,
            context: t
          }, {
            title: h.default.drawLocal.draw.toolbar.actions.title,
            text: h.default.drawLocal.draw.toolbar.actions.text,
            callback: this.disable,
            context: this
          }]
        },
        setOptions: function (t) {
          for (var e in h.default.setOptions(this, t),
              this._modes)
            this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
        }
      }),
      h.default.EditToolbar = h.default.Toolbar.extend({
        statics: {
          TYPE: "edit"
        },
        options: {
          edit: {
            selectedPathOptions: {
              dashArray: "10, 10",
              fill: !0,
              fillColor: "#fe57a1",
              fillOpacity: .1,
              maintainColor: !1
            }
          },
          remove: {},
          poly: null,
          featureGroup: null
        },
        initialize: function (t) {
          t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions),
              t.edit.selectedPathOptions = h.default.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)),
            t.remove && (t.remove = h.default.extend({}, this.options.remove, t.remove)),
            t.poly && (t.poly = h.default.extend({}, this.options.poly, t.poly)),
            this._toolbarClass = "leaflet-draw-edit",
            h.default.Toolbar.prototype.initialize.call(this, t),
            this._selectedFeatureCount = 0
        },
        getModeHandlers: function (t) {
          var e = this.options.featureGroup;
          return [{
            enabled: this.options.edit,
            handler: new h.default.EditToolbar.Edit(t, {
              featureGroup: e,
              selectedPathOptions: this.options.edit.selectedPathOptions,
              poly: this.options.poly
            }),
            title: h.default.drawLocal.edit.toolbar.buttons.edit
          }, {
            enabled: this.options.remove,
            handler: new h.default.EditToolbar.Delete(t, {
              featureGroup: e
            }),
            title: h.default.drawLocal.edit.toolbar.buttons.remove
          }]
        },
        getActions: function (t) {
          var e = [{
            title: h.default.drawLocal.edit.toolbar.actions.save.title,
            text: h.default.drawLocal.edit.toolbar.actions.save.text,
            callback: this._save,
            context: this
          }, {
            title: h.default.drawLocal.edit.toolbar.actions.cancel.title,
            text: h.default.drawLocal.edit.toolbar.actions.cancel.text,
            callback: this.disable,
            context: this
          }];
          return t.removeAllLayers && e.push({
              title: h.default.drawLocal.edit.toolbar.actions.clearAll.title,
              text: h.default.drawLocal.edit.toolbar.actions.clearAll.text,
              callback: this._clearAllLayers,
              context: this
            }),
            e
        },
        addToolbar: function (t) {
          var e = h.default.Toolbar.prototype.addToolbar.call(this, t);
          return this._checkDisabled(),
            this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this),
            e
        },
        removeToolbar: function () {
          this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this),
            h.default.Toolbar.prototype.removeToolbar.call(this)
        },
        disable: function () {
          this.enabled() && (this._activeMode.handler.revertLayers(),
            h.default.Toolbar.prototype.disable.call(this))
        },
        _save: function () {
          this._activeMode.handler.save(),
            this._activeMode && this._activeMode.handler.disable()
        },
        _clearAllLayers: function () {
          this._activeMode.handler.removeAllLayers(),
            this._activeMode && this._activeMode.handler.disable()
        },
        _checkDisabled: function () {
          var t, e = 0 !== this.options.featureGroup.getLayers().length;
          this.options.edit && (t = this._modes[h.default.EditToolbar.Edit.TYPE].button,
              e ? h.default.DomUtil.removeClass(t, "leaflet-disabled") : h.default.DomUtil.addClass(t, "leaflet-disabled"),
              t.setAttribute("title", e ? h.default.drawLocal.edit.toolbar.buttons.edit : h.default.drawLocal.edit.toolbar.buttons.editDisabled)),
            this.options.remove && (t = this._modes[h.default.EditToolbar.Delete.TYPE].button,
              e ? h.default.DomUtil.removeClass(t, "leaflet-disabled") : h.default.DomUtil.addClass(t, "leaflet-disabled"),
              t.setAttribute("title", e ? h.default.drawLocal.edit.toolbar.buttons.remove : h.default.drawLocal.edit.toolbar.buttons.removeDisabled))
        }
      }),
      h.default.EditToolbar.Edit = h.default.Handler.extend({
        statics: {
          TYPE: "edit"
        },
        initialize: function (t, e) {
          if (h.default.Handler.prototype.initialize.call(this, t),
            h.default.setOptions(this, e),
            this._featureGroup = e.featureGroup,
            !(this._featureGroup instanceof h.default.FeatureGroup))
            throw new Error("options.featureGroup must be a L.FeatureGroup");
          this._uneditedLayerProps = {},
            this.type = h.default.EditToolbar.Edit.TYPE;
          var i = h.default.version.split(".");
          1 === parseInt(i[0], 10) && 2 <= parseInt(i[1], 10) ? h.default.EditToolbar.Edit.include(h.default.Evented.prototype) : h.default.EditToolbar.Edit.include(h.default.Mixin.Events)
        },
        enable: function () {
          !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
              handler: this.type
            }),
            this._map.fire(h.default.Draw.Event.EDITSTART, {
              handler: this.type
            }),
            h.default.Handler.prototype.enable.call(this),
            this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
        },
        disable: function () {
          this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this),
            h.default.Handler.prototype.disable.call(this),
            this._map.fire(h.default.Draw.Event.EDITSTOP, {
              handler: this.type
            }),
            this.fire("disabled", {
              handler: this.type
            }))
        },
        addHooks: function () {
          var t = this._map;
          t && (t.getContainer().focus(),
            this._featureGroup.eachLayer(this._enableLayerEdit, this),
            this._tooltip = new h.default.Draw.Tooltip(this._map),
            this._tooltip.updateContent({
              text: h.default.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: h.default.drawLocal.edit.handlers.edit.tooltip.subtext
            }),
            t._editTooltip = this._tooltip,
            this._updateTooltip(),
            this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(h.default.Draw.Event.EDITVERTEX, this._updateTooltip, this))
        },
        removeHooks: function () {
          this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this),
            this._uneditedLayerProps = {},
            this._tooltip.dispose(),
            this._tooltip = null,
            this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(h.default.Draw.Event.EDITVERTEX, this._updateTooltip, this))
        },
        revertLayers: function () {
          this._featureGroup.eachLayer(function (t) {
            this._revertLayer(t)
          }, this)
        },
        save: function () {
          var e = new h.default.LayerGroup;
          this._featureGroup.eachLayer(function (t) {
              t.edited && (e.addLayer(t),
                t.edited = !1)
            }),
            this._map.fire(h.default.Draw.Event.EDITED, {
              layers: e
            })
        },
        _backupLayer: function (t) {
          var e = h.default.Util.stamp(t);
          this._uneditedLayerProps[e] || (t instanceof h.default.Polyline || t instanceof h.default.Polygon || t instanceof h.default.Rectangle ? this._uneditedLayerProps[e] = {
            latlngs: h.default.LatLngUtil.cloneLatLngs(t.getLatLngs())
          } : t instanceof h.default.Circle ? this._uneditedLayerProps[e] = {
            latlng: h.default.LatLngUtil.cloneLatLng(t.getLatLng()),
            radius: t.getRadius()
          } : (t instanceof h.default.Marker || t instanceof h.default.CircleMarker) && (this._uneditedLayerProps[e] = {
            latlng: h.default.LatLngUtil.cloneLatLng(t.getLatLng())
          }))
        },
        _getTooltipText: function () {
          return {
            text: h.default.drawLocal.edit.handlers.edit.tooltip.text,
            subtext: h.default.drawLocal.edit.handlers.edit.tooltip.subtext
          }
        },
        _updateTooltip: function () {
          this._tooltip.updateContent(this._getTooltipText())
        },
        _revertLayer: function (t) {
          var e = h.default.Util.stamp(t);
          t.edited = !1,
            this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof h.default.Polyline || t instanceof h.default.Polygon || t instanceof h.default.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof h.default.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng),
                t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof h.default.Marker || t instanceof h.default.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng),
              t.fire("revert-edited", {
                layer: t
              }))
        },
        _enableLayerEdit: function (t) {
          var e, i, a = t.layer || t.target || t;
          this._backupLayer(a),
            this.options.poly && (i = h.default.Util.extend({}, this.options.poly),
              a.options.poly = i),
            this.options.selectedPathOptions && ((e = h.default.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = a.options.color,
                e.fillColor = a.options.fillColor),
              a.options.original = h.default.extend({}, a.options),
              a.options.editing = e),
            a instanceof h.default.Marker ? (a.editing && a.editing.enable(),
              a.dragging.enable(),
              a.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : a.editing.enable()
        },
        _disableLayerEdit: function (t) {
          var e = t.layer || t.target || t;
          e.edited = !1,
            e.editing && e.editing.disable(),
            delete e.options.editing,
            delete e.options.original,
            this._selectedPathOptions && (e instanceof h.default.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions),
              delete e.options.previousOptions)),
            e instanceof h.default.Marker ? (e.dragging.disable(),
              e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable()
        },
        _onMouseMove: function (t) {
          this._tooltip.updatePosition(t.latlng)
        },
        _onMarkerDragEnd: function (t) {
          var e = t.target;
          e.edited = !0,
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: e
            })
        },
        _onTouchMove: function (t) {
          var e = t.originalEvent.changedTouches[0],
            i = this._map.mouseEventToLayerPoint(e),
            a = this._map.layerPointToLatLng(i);
          t.target.setLatLng(a)
        },
        _hasAvailableLayers: function () {
          return 0 !== this._featureGroup.getLayers().length
        }
      }),
      h.default.EditToolbar.Delete = h.default.Handler.extend({
        statics: {
          TYPE: "remove"
        },
        initialize: function (t, e) {
          if (h.default.Handler.prototype.initialize.call(this, t),
            h.default.Util.setOptions(this, e),
            this._deletableLayers = this.options.featureGroup,
            !(this._deletableLayers instanceof h.default.FeatureGroup))
            throw new Error("options.featureGroup must be a L.FeatureGroup");
          this.type = h.default.EditToolbar.Delete.TYPE;
          var i = h.default.version.split(".");
          1 === parseInt(i[0], 10) && 2 <= parseInt(i[1], 10) ? h.default.EditToolbar.Delete.include(h.default.Evented.prototype) : h.default.EditToolbar.Delete.include(h.default.Mixin.Events)
        },
        enable: function () {
          !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
              handler: this.type
            }),
            this._map.fire(h.default.Draw.Event.DELETESTART, {
              handler: this.type
            }),
            h.default.Handler.prototype.enable.call(this),
            this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
        },
        disable: function () {
          this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this),
            h.default.Handler.prototype.disable.call(this),
            this._map.fire(h.default.Draw.Event.DELETESTOP, {
              handler: this.type
            }),
            this.fire("disabled", {
              handler: this.type
            }))
        },
        addHooks: function () {
          var t = this._map;
          t && (t.getContainer().focus(),
            this._deletableLayers.eachLayer(this._enableLayerDelete, this),
            this._deletedLayers = new h.default.LayerGroup,
            this._tooltip = new h.default.Draw.Tooltip(this._map),
            this._tooltip.updateContent({
              text: h.default.drawLocal.edit.handlers.remove.tooltip.text
            }),
            this._map.on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function () {
          this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
            this._deletedLayers = null,
            this._tooltip.dispose(),
            this._tooltip = null,
            this._map.off("mousemove", this._onMouseMove, this))
        },
        revertLayers: function () {
          this._deletedLayers.eachLayer(function (t) {
            this._deletableLayers.addLayer(t),
              t.fire("revert-deleted", {
                layer: t
              })
          }, this)
        },
        save: function () {
          this._map.fire(h.default.Draw.Event.DELETED, {
            layers: this._deletedLayers
          })
        },
        removeAllLayers: function () {
          this._deletableLayers.eachLayer(function (t) {
              this._removeLayer({
                layer: t
              })
            }, this),
            this.save()
        },
        _enableLayerDelete: function (t) {
          (t.layer || t.target || t).on("click", this._removeLayer, this)
        },
        _disableLayerDelete: function (t) {
          var e = t.layer || t.target || t;
          e.off("click", this._removeLayer, this),
            this._deletedLayers.removeLayer(e)
        },
        _removeLayer: function (t) {
          var e = t.layer || t.target || t;
          this._deletableLayers.removeLayer(e),
            this._deletedLayers.addLayer(e),
            e.fire("deleted")
        },
        _onMouseMove: function (t) {
          this._tooltip.updatePosition(t.latlng)
        },
        _hasAvailableLayers: function () {
          return 0 !== this._deletableLayers.getLayers().length
        }
      })
  }, function (t, e) {}, function (t, e) {}, function (t, e, i) {
    "use strict";
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = i(3);
    o.default.Control.ToolBar = o.default.Control.extend({
        options: {
          position: "topleft"
        },
        _createButton: function (t, e, i, a) {
          var n = o.default.DomUtil.create("a", e, i);
          return n.href = "#",
            n.title = t,
            o.default.DomEvent.on(n, "mousedown dblclick", o.default.DomEvent.stopPropagation).on(n, "click", o.default.DomEvent.stop).on(n, "click", a, this).on(n, "click", this._refocusOnMap, this),
            n
        },
        onAdd: function (t) {
          this.options.center || (this.options.center = t.getCenter()),
            this.options.zoom || (this.options.zoom = t.getZoom());
          var e = "leaflet-control-toolbar",
            i = o.default.DomUtil.create("div", e + "  leaflet-bar leaflet-control");
          this.options.item = this.options.item || ["home", "location", "fullscreen"];
          for (var a = 0; a < this.options.item.length; a++)
            switch (this.options.item[a]) {
              case "home":
                this._createButton("回到默认视图区域", e + "-home", i, this._btnclick_goHome);
                break;
              case "location":
                this.btnLocation = this._createButton("定位至当前所在位置", e + "-locate", i, this._btnclick_goLocate),
                  this._map.on("locationfound", this.onLocationFound, this),
                  this._map.on("locationerror", this.onLocationError, this);
                break;
              case "fullscreen":
                this.btnFullscreen = this._createButton("进入全屏", e + "-fullscreen", i, this._btnclick_fullscreen),
                  this._map.on("fullscreenchange", this._toggle_fullscreen_Title, this);
                break;
              case "clear":
                this._createButton("清除所有操作", e + "-clear", i, this._btnclick_clear)
            }
          return i
        },
        _btnclick_goHome: function (t) {
          if (this.options.bbox)
            try {
              this._map.fitBounds(this.options.bbox)
            } catch (t) {
              this._map.setView(this.options.center, this.options.zoom)
            }
          this._map.setView(this.options.center, this.options.zoom)
        },
        _btnclick_clear: function (t) {
          null != window.clearALL && clearALL()
        },
        btnLocation: null,
        _location_mark: null,
        _location_circle: null,
        _iconLocationLoading: "leaflet-control-toolbar-locate-loading",
        _iconLocation: "leaflet-control-toolbar-locate",
        _btnclick_goLocate: function (t) {
          o.default.DomUtil.removeClasses(this.btnLocation, this._iconLocation),
            o.default.DomUtil.addClasses(this.btnLocation, this._iconLocationLoading),
            this._map.locate({
              setView: !0
            })
        },
        onLocationFound: function (t) {
          var e = this;
          o.default.DomUtil.removeClasses(this.btnLocation, this._iconLocationLoading),
            o.default.DomUtil.addClasses(this.btnLocation, this._iconLocation);
          var i = t.accuracy / 2;
          1e3 < i && (i = 1e3);
          var a = this._map.convert2map(t.latlng);
          setTimeout(function () {
              e._map.setView(a, 16)
            }, 500),
            this.options.noLocPoint || (null != this._location_mark && this._location_mark.remove(),
              null != this._location_circle && this._location_circle.remove(),
              this._location_mark = o.default.marker(a, {
                icon: o.default.divIcon({
                  className: "",
                  iconSize: [10, 10],
                  iconAnchor: [5, 5],
                  popupAnchor: [5, -5],
                  tooltipAnchor: [5, -5],
                  html: '<div class="centerat_animation" style="color:#0f89f5;"><p></p></div>'
                })
              }).addTo(map),
              this._location_circle = o.default.circle(a, {
                radius: i,
                stroke: !1,
                fillOpacity: .2
              }).addTo(map),
              setTimeout(function () {
                e._location_mark.remove(),
                  e._location_circle.remove(),
                  e._location_mark = null,
                  e._location_circle = null
              }, 5e3))
        },
        onLocationError: function (t) {
          o.default.DomUtil.removeClasses(this.btnLocation, this._iconLocationLoading),
            o.default.DomUtil.addClasses(this.btnLocation, this._iconLocation),
            this.options.noLocPoint || (0,
              s.msg)("获取地理位置失败：" + (t.message || "").replace("Geolocation error: ") + "(code:" + t.code + ")")
        },
        btnFullscreen: null,
        _btnclick_fullscreen: function (t) {
          o.default.DomEvent.stopPropagation(t),
            o.default.DomEvent.preventDefault(t),
            this._map.toggleFullscreen(this.options)
        },
        _toggle_fullscreen_Title: function () {
          this.btnFullscreen.title = this._map.isFullscreen() ? "退出全屏" : "进入全屏"
        },
        onRemove: function (t) {
          this._map.off("fullscreenchange", this._toggle_fullscreen_Title, this),
            this._map.off("locationfound", this.onLocationFound, this),
            this._map.off("locationerror", this.onLocationError, this)
        }
      }),
      o.default.control.toolbar = function (t) {
        return new o.default.Control.ToolBar(t)
      };
    var r = function (e, i, t) {
      (t = t.split(" ")).forEach(function (t) {
        o.default.DomUtil[e].call(this, i, t)
      })
    };
    o.default.DomUtil.addClasses = function (t, e) {
        r("addClass", t, e)
      },
      o.default.DomUtil.removeClasses = function (t, e) {
        r("removeClass", t, e)
      },
      o.default.Map.include({
        isFullscreen: function () {
          return this._isFullscreen
        },
        toggleFullscreen: function () {
          var t = document.documentElement;
          this._isFullscreen ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(),
            this._isFullscreen = !1) : (t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : t.msRequestFullscreen && t.msRequestFullscreen(),
            this._isFullscreen = !0)
        }
      })
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireWildcard(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (null != t)
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e.default = t,
        e
    }

    function _interopRequireDefault(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function initMap(t, e, i) {
      var a, n, o, s = _util.getRequest(),
        r = e.basemaps;
      e.crs = e.crs || "EPSG3857";
      for (var l, h = 0; h < r.length; h++) {
        null == (g = r[h]).crs && null != e.crs && (g.crs = e.crs),
          g.hasOwnProperty("visible") && g.visible && (l = g)
      }
      if (!l && 0 < r.length && ((l = r[0]).visible = !0),
        s && s.baselayer)
        for (h = 0; h < r.length; h++) {
          if ((g = r[h]).name == s.baselayer) {
            l && (l.visible = !1),
              (l = g).visible = !0;
            break
          }
        }
      if (l && l.crs != e.crs && (e.crs = l.crs),
        "string" == typeof e.crs)
        switch ((e.crs || "").toString().toUpperCase()) {
          default:
            n = _leaflet2.default.CRS.EPSG3857;
            break;
          case "IMAGE":
          case "SIMPLE":
            n = _leaflet2.default.CRS.Simple;
            break;
          case "4326":
          case "EPSG4326":
            n = _leaflet2.default.CRS.EPSG4326;
            break;
          case "3395":
          case "EPSG3395":
            n = _leaflet2.default.CRS.EPSG3395;
            break;
          case "4490":
          case "EPSG4490":
            n = _leaflet2.default.CRS.EPSG4490;
            break;
          case "BD09":
          case "BAIDU":
            o = "bd",
              n = _leaflet2.default.CRS.Baidu;
            break;
          case "GCJ":
          case "GCJ02":
            o = "gcj",
              n = _leaflet2.default.CRS.EPSG3857
        }
      else if ("object" == _typeof(e.crs)) {
        var u = {};
        for (var h in e.crs)
          "code" != h && "proj" != h && ("bounds" != h ? u[h] = e.crs[h] : u.bounds = _leaflet2.default.bounds(e.crs.bounds));
        n = new _leaflet2.default.Proj.CRS(e.crs.code, e.crs.proj, u)
      }
      var c = {
        crs: n,
        zoomControl: !1,
        attributionControl: !1,
        pointconvertType: o,
        contextmenu: !0,
        contextmenuWidth: 140,
        contextmenuItems: [{
          text: "移动到此处",
          iconCls: "fa fa-hand-o-right",
          callback: function (t) {
            a.panTo(t.latlng)
          }
        }, {
          text: "显示此处经纬度",
          iconCls: "fa fa-map-marker",
          callback: function (t) {
            var e = "层级：" + a.getZoom();
            if (e += "<br/>经度：" + t.latlng.lng.toFixed(6) + " 纬度：" + t.latlng.lat.toFixed(6),
              a.hasConvert()) {
              var i = a.convert2wgs(t.latlng);
              e += "<br/>经度：" + i[1].toFixed(6) + " 纬度：" + i[0].toFixed(6) + " (WGS84)"
            }
            _util.alert(e)
          }
        }, "-", {
          text: "放大",
          iconCls: "fa fa-search-plus",
          callback: function (t) {
            a.zoomIn()
          }
        }, {
          text: "缩小",
          iconCls: "fa fa-search-minus",
          callback: function (t) {
            a.zoomOut()
          }
        }]
      };
      for (var d in e)
        "crs" !== d && "controls" !== d && "basemaps" !== d && "operationallayers" !== d && (c[d] = e[d]);
      for (var h in null == i && (i = {}),
          c)
        i.hasOwnProperty(h) || (i[h] = c[h]);
      if (a = _leaflet2.default.map(t, i),
        s && s.center && -1 != s.center.indexOf(",")) {
        var f = s.center.split(",");
        if (2 == f.length) {
          var _ = a.convert2map([f[0], f[1]]);
          a.panTo(_)
        } else if (3 == f.length) {
          _ = a.convert2map([f[0], f[1]]);
          a.setView(_, f[2])
        }
      }
      var p = [],
        m = {};
      if (r = e.basemaps)
        for (h = 0; h < r.length; h++) {
          var g = r[h];
          if (null != (M = _layer.createLayer(g, e.serverURL, i.layerToMap)))
            if (g.hasOwnProperty("visible") && g.visible && (M.addTo(a),
                g.maxBounds && a.setMaxBounds(g.maxBounds),
                g.background && (0,
                  _jquery2.default)(".leaflet-container").css({
                  background: g.background
                })),
              m[g.name] = M,
              p.push(g),
              "group" == g.type && g.layers)
              for (var v = 0; v < g.layers.length; v++)
                p.push(g.layers[v]);
            else if (g._layer instanceof _leaflet2.default.LayerGroup || g._layer instanceof _leaflet2.default.FeatureGroup) {
            var y = g._layer.getLayers();
            for (v = 0; v < y.length; v++) {
              var b = {
                name: (L = y[v]).options.name,
                _layer: L
              };
              p.push(b)
            }
          }
        }
      var w = {};
      if (r = e.operationallayers)
        for (h = 0; h < r.length; h++) {
          var M;
          g = r[h];
          if (null != (M = _layer.createLayer(g, e.serverURL, i.layerToMap)))
            if (g.hasOwnProperty("visible") && g.visible && M.addTo(a),
              w[g.name] = M,
              p.push(g),
              "group" == g.type && g.layers)
              for (v = 0; v < g.layers.length; v++)
                p.push(g.layers[v]);
            else if (g._layer instanceof _leaflet2.default.LayerGroup || g._layer instanceof _leaflet2.default.FeatureGroup)
            for (y = g._layer.getLayers(),
              v = 0; v < y.length; v++) {
              var L;
              b = {
                name: (L = y[v]).options.name,
                _layer: L
              };
              p.push(b)
            }
        }
      for (h = 0; h < p.length; h++) {
        g = p[h];
        var x = Number(g.order);
        isNaN(x) && (x = 10 * (h + 1)),
          g.order = x,
          null != g._layer && g._layer.setZIndex && g._layer.setZIndex(x)
      }
      var k = {},
        E = e.controls;
      if (E)
        for (h = 0; h < E.length; h++) {
          if (!(g = E[h]).hasOwnProperty("visible") || g.visible) {
            var C;
            switch (g.type) {
              case "layers":
                C = _leaflet2.default.control.layers(m, w, {
                  position: g.position || "topright"
                });
                break;
              case "zoom":
                C = _leaflet2.default.control.zoom({
                  position: g.position || "bottomright"
                });
                break;
              case "scale":
                C = _leaflet2.default.control.scale({
                  metric: !0,
                  imperial: !1
                });
                break;
              case "tool":
                g.position = g.position || "bottomright",
                  C = _leaflet2.default.control.toolbar(g).addTo(a);
                break;
              case "location":
                ! function (o, s) {
                  function e(t) {
                    var e = {
                      z: o.getZoom()
                    };
                    switch (s.crs) {
                      default:
                        var i = s.hasOwnProperty("toFixed") ? s.toFixed : 6;
                        e.x = t.lng.toFixed(i),
                          e.y = t.lat.toFixed(i);
                        break;
                      case "degree":
                        e.x = _util.formatDegree(t.lng),
                          e.y = _util.formatDegree(t.lat);
                        break;
                      case "project":
                        i = s.hasOwnProperty("toFixed") ? s.toFixed : 0;
                        var a = o.project(t, o.getZoom());
                        e.x = a.x.toFixed(i),
                          e.y = a.y.toFixed(i);
                        break;
                      case "wgs":
                        i = s.hasOwnProperty("toFixed") ? s.toFixed : 6;
                        t = o.convert2wgs(t),
                          e.x = t[1].toFixed(i),
                          e.y = t[0].toFixed(i);
                        break;
                      case "wgs-degree":
                        t = o.convert2wgs(t),
                          e.x = _util.formatDegree(t[1]),
                          e.y = _util.formatDegree(t[0])
                    }
                    var n = _util.template(s.format, e);
                    (0,
                      _jquery2.default)("#location").html(n)
                  }

                  function i() {
                    (0,
                      _jquery2.default)("#location").css({
                      left: (0,
                        _jquery2.default)(".leaflet-control-scale-line").width() + 40 + "px"
                    })
                  }
                  var a;
                  document.getElementById("location") || (0,
                      _jquery2.default)("#" + o._container.id).prepend('<div id="location" class="location-bar no-print no-print-view"></div>'),
                    s.format = s.format || "<div>经度:{x}</div><div>纬度:{y}</div>",
                    o.on("mousemove", function (t) {
                      a = t.latlng,
                        e(t.latlng)
                    }),
                    o.on("zoomend", function (t) {
                      i(),
                        e(a = a || o.getCenter())
                    }),
                    i()
                }(a, g)
            }
            null != C && (a.addControl(C),
              k[g.type] = C)
          }
        }
      if (e.center && a.setView(e.center, e.zoom),
        e.extent && a.fitBounds([
          [e.extent.ymin, e.extent.xmin],
          [e.extent.ymax, e.extent.xmax]
        ]),
        e.clickHighlight) {
        var P, T, S = function () {
          if (P) {
            if ("arcgis_dynamic" == T)
              a.removeLayer(P);
            else {
              var t = M.options;
              t.weight = t._weight_old,
                t.color = t._color_old,
                P.setStyle(t)
            }
            P = null
          }
        };
        a.on("click", S),
          _layer.bindClickFeature(function (t, e) {
            if (S(),
              e.setStyle) {
              if ("arcgis_dynamic" == t)
                e.setStyle({
                  color: "#3388ff",
                  weight: 3
                }),
                a.addLayer(e);
              else {
                var i = e.options;
                null == i._color_old && (i._color_old = i.color),
                  null == i._weight_old && (i._weight_old = i.weight),
                  i.color = "#3388ff",
                  i.weight = 3,
                  e.setStyle(i)
              }
              P = e,
                T = t
            }
          })
      }
      return {
        map: a,
        baselayers: m,
        overlayers: w,
        controls: k
      }
    }

    function createMap(a) {
      return a.url ? (_jquery2.default.ajax({
          type: "get",
          dataType: "json",
          url: a.url,
          success: function (t) {
            var e = t.map;
            t.serverURL && (e.serverURL = t.serverURL),
              a.serverURL && (e.serverURL = a.serverURL),
              createMapByData(a, e, t)
          },
          error: function (t, e, i) {
            console.log("Json文件" + a.url + "加载失败！"),
              _util.alert("Json文件" + a.url + "加载失败！")
          }
        }),
        null) : (a.serverURL && a.data && (a.data.serverURL = a.serverURL),
        createMapByData(a, a.data))
    }

    function createMapByData(opt, configdata, jsondata) {
      if (null != configdata) {
        if (!configdata.hasOwnProperty("copyright") || configdata.copyright)
          // try {
          //   eval(function (t, e, i, a, n, o) {
          //     if (n = function (t) {
          //         return t.toString(28)
          //       },
          //       !"".replace(/^/, String)) {
          //       for (; i--;)
          //         o[n(i)] = a[i] || n(i);
          //       a = [function (t) {
          //           return o[t]
          //         }],
          //         n = function () {
          //           return "\\w+"
          //         },
          //         i = 1
          //     }
          //     for (; i--;)
          //       a[i] && (t = t.replace(new RegExp("\\b" + n(i) + "\\b", "g"), a[i]));
          //     return t
          //   }('1(f(){2.3("\\4\\5\\6\\7\\8\\9 a b\\d\\e\\0\\g %c \\h\\i\\j\\k\\l://m.n.o","p:q")},r);', 0, 28, "u5b9e|setTimeout|console|log|u5f53|u524d|u5730|u56fe|u4f7f|u7528MarsGIS|for|Leaflet||u6846|u67b6|function|u73b0|u5b98|u65b9|u7f51|u7ad9|uff1ahttp|leaflet|marsgis|cn|color|red|6E4".split("|"), 0, {}))
          // } catch (t) {}
          var center;
        if (configdata.centerAutoLevel = configdata.centerAutoLevel || 15,
          configdata.extent) {
          var _x = (configdata.extent.xmin + configdata.extent.xmax) / 2,
            _y = (configdata.extent.ymin + configdata.extent.ymax) / 2;
          center = [_y, _x]
        } else
          center = configdata.center && configdata.center.x ? [configdata.center.y, configdata.center.x] : configdata.center;
        configdata.center = center;
        var cfg = initMap(opt.id, configdata, opt),
          map = cfg.map;
        configdata.zoom || (configdata.zoom = map.getZoom());
        var gisdata = {};
        return gisdata.config = configdata,
          gisdata.baselayers = cfg.baselayers,
          gisdata.overlayers = cfg.overlayers,
          gisdata.controls = cfg.controls,
          map.gisdata = gisdata,
          opt.success && opt.success(map, gisdata, jsondata),
          map
      }
      console.log("配置信息不能为空！")
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
      }),
      exports.createMap = void 0;
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      _leaflet = __webpack_require__(1),
      _leaflet2 = _interopRequireDefault(_leaflet),
      _jquery = __webpack_require__(6),
      _jquery2 = _interopRequireDefault(_jquery),
      _pointconvert = __webpack_require__(17),
      _pointconvert2 = _interopRequireDefault(_pointconvert),
      _util2 = __webpack_require__(3),
      _util = _interopRequireWildcard(_util2),
      _layer2 = __webpack_require__(23),
      _layer = _interopRequireWildcard(_layer2);
    exports.createMap = createMap
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = i(63),
      n = i(18),
      o = i(82),
      s = i(31),
      r = i(27),
      l = i(30),
      h = i(32),
      u = i(83),
      c = i(85);
    a.a.defaultDatum = "WGS84",
      a.a.Proj = n.a,
      a.a.WGS84 = new a.a.Proj("WGS84"),
      a.a.Point = o.a,
      a.a.toPoint = s.a,
      a.a.defs = r.a,
      a.a.transform = l.a,
      a.a.mgrs = h.a,
      a.a.version = u.a,
      Object(c.a)(a.a),
      e.default = a.a
  }, function (t, e, i) {
    "use strict";

    function o(t, e, i) {
      var a, n, o;
      return Array.isArray(i) ? (a = Object(r.a)(t, e, i),
        3 === i.length ? [a.x, a.y, a.z] : [a.x, a.y]) : (n = Object(r.a)(t, e, i),
        2 === (o = Object.keys(i)).length || o.forEach(function (t) {
          "x" !== t && "y" !== t && (n[t] = i[t])
        }),
        n)
    }

    function s(t) {
      return t instanceof a.a ? t : t.oProj ? t.oProj : Object(a.a)(t)
    }
    var a = i(18),
      r = i(30),
      l = Object(a.a)("WGS84");
    e.a = function (e, i, t) {
      e = s(e);
      var a, n = !1;
      return void 0 === i ? (i = e,
          e = l,
          n = !0) : (void 0 !== i.x || Array.isArray(i)) && (t = i,
          i = e,
          e = l,
          n = !0),
        i = s(i),
        t ? o(e, i, t) : (a = {
            forward: function (t) {
              return o(e, i, t)
            },
            inverse: function (t) {
              return o(i, e, t)
            }
          },
          n && (a.oProj = i),
          a)
    }
  }, function (t, e, i) {
    "use strict";
    var n = i(27),
      o = i(29),
      s = i(28),
      r = i(9),
      l = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"],
      h = ["3857", "900913", "3785", "102113"];
    e.a = function (t) {
      if ("string" != typeof t)
        return t;
      var e;
      if (t in n.a)
        return n.a[t];
      if (e = t,
        l.some(function (t) {
          return -1 < e.indexOf(t)
        })) {
        var i = Object(o.a)(t);
        if (function (t) {
            var e = Object(r.a)(t, "authority");
            if (e) {
              var i = Object(r.a)(e, "epsg");
              return i && -1 < h.indexOf(i)
            }
          }(i))
          return n.a["EPSG:3857"];
        var a = function (t) {
          var e = Object(r.a)(t, "extension");
          if (e)
            return Object(r.a)(e, "proj4")
        }(i);
        return a ? Object(s.a)(a) : i
      }
      return "+" === t[0] ? Object(s.a)(t) : void 0
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),
        t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),
        t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),
        t.WGS84 = t["EPSG:4326"],
        t["EPSG:3785"] = t["EPSG:3857"],
        t.GOOGLE = t["EPSG:3857"],
        t["EPSG:900913"] = t["EPSG:3857"],
        t["EPSG:102113"] = t["EPSG:3857"]
    }
  }, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return a
    });
    var a = {
      greenwich: 0,
      lisbon: -9.131906111111,
      paris: 2.337229166667,
      bogota: -74.080916666667,
      madrid: -3.687938888889,
      rome: 12.452333333333,
      bern: 7.439583333333,
      jakarta: 106.807719444444,
      ferro: -17.666666666667,
      brussels: 4.367975,
      stockholm: 18.058277777778,
      athens: 23.7163375,
      oslo: 10.722916666667
    }
  }, function (t, e, i) {
    "use strict";
    e.a = {
      ft: {
        to_meter: .3048
      },
      "us-ft": {
        to_meter: 1200 / 3937
      }
    }
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      if ("string" != typeof t)
        throw new Error("not a string");
      this.text = t.trim(),
        this.level = 0,
        this.place = 0,
        this.root = null,
        this.stack = [],
        this.currentObject = null,
        this.state = n
    }
    e.a = function (t) {
      return new a(t).output()
    };
    var n = 1,
      o = /\s/,
      s = /[A-Za-z]/,
      r = /[A-Za-z84]/,
      l = /[,\]]/,
      h = /[\d\.E\-\+]/;
    a.prototype.readCharicter = function () {
        var t = this.text[this.place++];
        if (4 !== this.state)
          for (; o.test(t);) {
            if (this.place >= this.text.length)
              return;
            t = this.text[this.place++]
          }
        switch (this.state) {
          case n:
            return this.neutral(t);
          case 2:
            return this.keyword(t);
          case 4:
            return this.quoted(t);
          case 5:
            return this.afterquote(t);
          case 3:
            return this.number(t);
          case -1:
            return
        }
      },
      a.prototype.afterquote = function (t) {
        if ('"' === t)
          return this.word += '"',
            void(this.state = 4);
        if (l.test(t))
          return this.word = this.word.trim(),
            void this.afterItem(t);
        throw new Error("havn't handled \"" + t + '" in afterquote yet, index ' + this.place)
      },
      a.prototype.afterItem = function (t) {
        return "," === t ? (null !== this.word && this.currentObject.push(this.word),
          this.word = null,
          void(this.state = n)) : "]" === t ? (this.level--,
          null !== this.word && (this.currentObject.push(this.word),
            this.word = null),
          this.state = n,
          this.currentObject = this.stack.pop(),
          void(this.currentObject || (this.state = -1))) : void 0
      },
      a.prototype.number = function (t) {
        if (!h.test(t)) {
          if (l.test(t))
            return this.word = parseFloat(this.word),
              void this.afterItem(t);
          throw new Error("havn't handled \"" + t + '" in number yet, index ' + this.place)
        }
        this.word += t
      },
      a.prototype.quoted = function (t) {
        '"' !== t ? this.word += t : this.state = 5
      },
      a.prototype.keyword = function (t) {
        if (r.test(t))
          this.word += t;
        else {
          if ("[" === t) {
            var e = [];
            return e.push(this.word),
              this.level++,
              null === this.root ? this.root = e : this.currentObject.push(e),
              this.stack.push(this.currentObject),
              this.currentObject = e,
              void(this.state = n)
          }
          if (!l.test(t))
            throw new Error("havn't handled \"" + t + '" in keyword yet, index ' + this.place);
          this.afterItem(t)
        }
      },
      a.prototype.neutral = function (t) {
        if (s.test(t))
          return this.word = t,
            void(this.state = 2);
        if ('"' === t)
          return this.word = "",
            void(this.state = 4);
        if (h.test(t))
          return this.word = t,
            void(this.state = 3);
        if (!l.test(t))
          throw new Error("havn't handled \"" + t + '" in neutral yet, index ' + this.place);
        this.afterItem(t)
      },
      a.prototype.output = function () {
        for (; this.place < this.text.length;)
          this.readCharicter();
        if (-1 === this.state)
          return this.root;
        throw new Error('unable to parse string "' + this.text + '". State is ' + this.state)
      }
  }, function (t, e, i) {
    "use strict";

    function n(t, e, i) {
      Array.isArray(e) && (i.unshift(e),
        e = null);
      var a = e ? {} : t,
        n = i.reduce(function (t, e) {
          return o(e, t),
            t
        }, a);
      e && (t[e] = n)
    }

    function o(t, e) {
      if (Array.isArray(t)) {
        var i, a = t.shift();
        if ("PARAMETER" === a && (a = t.shift()),
          1 === t.length)
          return Array.isArray(t[0]) ? (e[a] = {},
            void o(t[0], e[a])) : void(e[a] = t[0]);
        if (t.length)
          if ("TOWGS84" !== a)
            switch (Array.isArray(a) || (e[a] = {}),
              a) {
              case "UNIT":
              case "PRIMEM":
              case "VERT_DATUM":
                return e[a] = {
                    name: t[0].toLowerCase(),
                    convert: t[1]
                  },
                  void(3 === t.length && o(t[2], e[a]));
              case "SPHEROID":
              case "ELLIPSOID":
                return e[a] = {
                    name: t[0],
                    a: t[1],
                    rf: t[2]
                  },
                  void(4 === t.length && o(t[3], e[a]));
              case "PROJECTEDCRS":
              case "PROJCRS":
              case "GEOGCS":
              case "GEOCCS":
              case "PROJCS":
              case "LOCAL_CS":
              case "GEODCRS":
              case "GEODETICCRS":
              case "GEODETICDATUM":
              case "EDATUM":
              case "ENGINEERINGDATUM":
              case "VERT_CS":
              case "VERTCRS":
              case "VERTICALCRS":
              case "COMPD_CS":
              case "COMPOUNDCRS":
              case "ENGINEERINGCRS":
              case "ENGCRS":
              case "FITTED_CS":
              case "LOCAL_DATUM":
              case "DATUM":
                return t[0] = ["name", t[0]],
                  void n(e, a, t);
              default:
                for (i = -1; ++i < t.length;)
                  if (!Array.isArray(t[i]))
                    return o(t, e[a]);
                return n(e, a, t)
            }
        else
          e[a] = t;
        else
          e[a] = !0
      } else
        e[t] = !0
    }
    e.a = o
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      var i, a;
      if (t = t || {},
        !e)
        return t;
      for (a in e)
        void 0 !== (i = e[a]) && (t[a] = i);
      return t
    }
  }, function (t, e, i) {
    "use strict";

    function a(t, e) {
      var i = l.length;
      return t.names ? ((l[i] = t).names.forEach(function (t) {
          r[t.toLowerCase()] = i
        }),
        this) : (console.log(e),
        !0)
    }
    var n = i(72),
      o = i(73),
      s = [n.a, o.a],
      r = {},
      l = [];
    e.a = {
      start: function () {
        s.forEach(a)
      },
      add: a,
      get: function (t) {
        if (!t)
          return !1;
        var e = t.toLowerCase();
        return void 0 !== r[e] && l[r[e]] ? l[r[e]] : void 0
      }
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(4),
      r = i(2),
      l = i(10),
      s = i(11),
      h = i(0);
    e.a = {
      init: function () {
        var t = this.b / this.a;
        this.es = 1 - t * t,
          "x0" in this || (this.x0 = 0),
          "y0" in this || (this.y0 = 0),
          this.e = Math.sqrt(this.es),
          this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = Object(a.a)(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1)
      },
      forward: function (t) {
        var e, i, a = t.x,
          n = t.y;
        if (90 < n * h.i && n * h.i < -90 && 180 < a * h.i && a * h.i < -180)
          return null;
        if (Math.abs(Math.abs(n) - h.d) <= h.b)
          return null;
        if (this.sphere)
          e = this.x0 + this.a * this.k0 * Object(r.a)(a - this.long0),
          i = this.y0 + this.a * this.k0 * Math.log(Math.tan(h.c + .5 * n));
        else {
          var o = Math.sin(n),
            s = Object(l.a)(this.e, n, o);
          e = this.x0 + this.a * this.k0 * Object(r.a)(a - this.long0),
            i = this.y0 - this.a * this.k0 * Math.log(s)
        }
        return t.x = e,
          t.y = i,
          t
      },
      inverse: function (t) {
        var e, i, a = t.x - this.x0,
          n = t.y - this.y0;
        if (this.sphere)
          i = h.d - 2 * Math.atan(Math.exp(-n / (this.a * this.k0)));
        else {
          var o = Math.exp(-n / (this.a * this.k0));
          if (-9999 === (i = Object(s.a)(this.e, o)))
            return null
        }
        return e = Object(r.a)(this.long0 + a / (this.a * this.k0)),
          t.x = e,
          t.y = i,
          t
      },
      names: ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"]
    }
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      return t
    }
    e.a = {
      init: function () {},
      forward: a,
      inverse: a,
      names: ["longlat", "identity"]
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i, a) {
        var n = t * t,
          o = e * e,
          s = (n - o) / n,
          r = 0;
        return a ? (n = (t *= 1 - s * (l.m + s * (l.j + s * l.k))) * t,
          s = 0) : r = Math.sqrt(s), {
          es: s,
          e: r,
          ep2: (n - o) / o
        }
      },
      e.b = function (t, e, i, a, n) {
        if (!t) {
          var o = Object(r.a)(s.b, a);
          o || (o = s.a),
            t = o.a,
            e = o.b,
            i = o.rf
        }
        return i && !e && (e = (1 - 1 / i) * t),
          (0 === i || Math.abs(t - e) < l.b) && (n = !0,
            e = t), {
            a: t,
            b: e,
            rf: i,
            sphere: n
          }
      };
    var l = i(0),
      s = i(75),
      r = i(9)
  }, function (t, e, i) {
    "use strict";
    i.d(e, "b", function () {
        return a
      }),
      i.d(e, "a", function () {
        return n
      });
    var a = {
        MERIT: {
          a: 6378137,
          rf: 298.257,
          ellipseName: "MERIT 1983"
        },
        SGS85: {
          a: 6378136,
          rf: 298.257,
          ellipseName: "Soviet Geodetic System 85"
        },
        GRS80: {
          a: 6378137,
          rf: 298.257222101,
          ellipseName: "GRS 1980(IUGG, 1980)"
        },
        IAU76: {
          a: 6378140,
          rf: 298.257,
          ellipseName: "IAU 1976"
        },
        airy: {
          a: 6377563.396,
          b: 6356256.91,
          ellipseName: "Airy 1830"
        },
        APL4: {
          a: 6378137,
          rf: 298.25,
          ellipseName: "Appl. Physics. 1965"
        },
        NWL9D: {
          a: 6378145,
          rf: 298.25,
          ellipseName: "Naval Weapons Lab., 1965"
        },
        mod_airy: {
          a: 6377340.189,
          b: 6356034.446,
          ellipseName: "Modified Airy"
        },
        andrae: {
          a: 6377104.43,
          rf: 300,
          ellipseName: "Andrae 1876 (Den., Iclnd.)"
        },
        aust_SA: {
          a: 6378160,
          rf: 298.25,
          ellipseName: "Australian Natl & S. Amer. 1969"
        },
        GRS67: {
          a: 6378160,
          rf: 298.247167427,
          ellipseName: "GRS 67(IUGG 1967)"
        },
        bessel: {
          a: 6377397.155,
          rf: 299.1528128,
          ellipseName: "Bessel 1841"
        },
        bess_nam: {
          a: 6377483.865,
          rf: 299.1528128,
          ellipseName: "Bessel 1841 (Namibia)"
        },
        clrk66: {
          a: 6378206.4,
          b: 6356583.8,
          ellipseName: "Clarke 1866"
        },
        clrk80: {
          a: 6378249.145,
          rf: 293.4663,
          ellipseName: "Clarke 1880 mod."
        },
        clrk58: {
          a: 6378293.645208759,
          rf: 294.2606763692654,
          ellipseName: "Clarke 1858"
        },
        CPM: {
          a: 6375738.7,
          rf: 334.29,
          ellipseName: "Comm. des Poids et Mesures 1799"
        },
        delmbr: {
          a: 6376428,
          rf: 311.5,
          ellipseName: "Delambre 1810 (Belgium)"
        },
        engelis: {
          a: 6378136.05,
          rf: 298.2566,
          ellipseName: "Engelis 1985"
        },
        evrst30: {
          a: 6377276.345,
          rf: 300.8017,
          ellipseName: "Everest 1830"
        },
        evrst48: {
          a: 6377304.063,
          rf: 300.8017,
          ellipseName: "Everest 1948"
        },
        evrst56: {
          a: 6377301.243,
          rf: 300.8017,
          ellipseName: "Everest 1956"
        },
        evrst69: {
          a: 6377295.664,
          rf: 300.8017,
          ellipseName: "Everest 1969"
        },
        evrstSS: {
          a: 6377298.556,
          rf: 300.8017,
          ellipseName: "Everest (Sabah & Sarawak)"
        },
        fschr60: {
          a: 6378166,
          rf: 298.3,
          ellipseName: "Fischer (Mercury Datum) 1960"
        },
        fschr60m: {
          a: 6378155,
          rf: 298.3,
          ellipseName: "Fischer 1960"
        },
        fschr68: {
          a: 6378150,
          rf: 298.3,
          ellipseName: "Fischer 1968"
        },
        helmert: {
          a: 6378200,
          rf: 298.3,
          ellipseName: "Helmert 1906"
        },
        hough: {
          a: 6378270,
          rf: 297,
          ellipseName: "Hough"
        },
        intl: {
          a: 6378388,
          rf: 297,
          ellipseName: "International 1909 (Hayford)"
        },
        kaula: {
          a: 6378163,
          rf: 298.24,
          ellipseName: "Kaula 1961"
        },
        lerch: {
          a: 6378139,
          rf: 298.257,
          ellipseName: "Lerch 1979"
        },
        mprts: {
          a: 6397300,
          rf: 191,
          ellipseName: "Maupertius 1738"
        },
        new_intl: {
          a: 6378157.5,
          b: 6356772.2,
          ellipseName: "New International 1967"
        },
        plessis: {
          a: 6376523,
          rf: 6355863,
          ellipseName: "Plessis 1817 (France)"
        },
        krass: {
          a: 6378245,
          rf: 298.3,
          ellipseName: "Krassovsky, 1942"
        },
        SEasia: {
          a: 6378155,
          b: 6356773.3205,
          ellipseName: "Southeast Asia"
        },
        walbeck: {
          a: 6376896,
          b: 6355834.8467,
          ellipseName: "Walbeck"
        },
        WGS60: {
          a: 6378165,
          rf: 298.3,
          ellipseName: "WGS 60"
        },
        WGS66: {
          a: 6378145,
          rf: 298.25,
          ellipseName: "WGS 66"
        },
        WGS7: {
          a: 6378135,
          rf: 298.26,
          ellipseName: "WGS 72"
        }
      },
      n = a.WGS84 = {
        a: 6378137,
        rf: 298.257223563,
        ellipseName: "WGS 84"
      };
    a.sphere = {
      a: 6370997,
      b: 6370997,
      ellipseName: "Normal Sphere (r=6370997)"
    }
  }, function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return a
    });
    var a = {
      wgs84: {
        towgs84: "0,0,0",
        ellipse: "WGS84",
        datumName: "WGS84"
      },
      ch1903: {
        towgs84: "674.374,15.056,405.346",
        ellipse: "bessel",
        datumName: "swiss"
      },
      ggrs87: {
        towgs84: "-199.87,74.79,246.62",
        ellipse: "GRS80",
        datumName: "Greek_Geodetic_Reference_System_1987"
      },
      nad83: {
        towgs84: "0,0,0",
        ellipse: "GRS80",
        datumName: "North_American_Datum_1983"
      },
      nad27: {
        nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
        ellipse: "clrk66",
        datumName: "North_American_Datum_1927"
      },
      potsdam: {
        towgs84: "606.0,23.0,413.0",
        ellipse: "bessel",
        datumName: "Potsdam Rauenberg 1950 DHDN"
      },
      carthage: {
        towgs84: "-263.0,6.0,431.0",
        ellipse: "clark80",
        datumName: "Carthage 1934 Tunisia"
      },
      hermannskogel: {
        towgs84: "653.0,-212.0,449.0",
        ellipse: "bessel",
        datumName: "Hermannskogel"
      },
      osni52: {
        towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
        ellipse: "airy",
        datumName: "Irish National"
      },
      ire65: {
        towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
        ellipse: "mod_airy",
        datumName: "Ireland 1965"
      },
      rassadiran: {
        towgs84: "-133.63,-157.5,-158.62",
        ellipse: "intl",
        datumName: "Rassadiran"
      },
      nzgd49: {
        towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
        ellipse: "intl",
        datumName: "New Zealand Geodetic Datum 1949"
      },
      osgb36: {
        towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
        ellipse: "airy",
        datumName: "Airy 1830"
      },
      s_jtsk: {
        towgs84: "589,76,480",
        ellipse: "bessel",
        datumName: "S-JTSK (Ferro)"
      },
      beduaram: {
        towgs84: "-106,-87,188",
        ellipse: "clrk80",
        datumName: "Beduaram"
      },
      gunung_segara: {
        towgs84: "-403,684,41",
        ellipse: "bessel",
        datumName: "Gunung Segara Jakarta"
      },
      rnb72: {
        towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
        ellipse: "intl",
        datumName: "Reseau National Belge 1972"
      }
    }
  }, function (t, e, i) {
    "use strict";
    var r = i(0);
    e.a = function (t, e, i, a, n, o) {
      var s = {};
      return s.datum_type = void 0 === t || "none" === t ? r.g : r.h,
        e && (s.datum_params = e.map(parseFloat),
          0 === s.datum_params[0] && 0 === s.datum_params[1] && 0 === s.datum_params[2] || (s.datum_type = r.e),
          3 < s.datum_params.length && (0 === s.datum_params[3] && 0 === s.datum_params[4] && 0 === s.datum_params[5] && 0 === s.datum_params[6] || (s.datum_type = r.f,
            s.datum_params[3] *= r.l,
            s.datum_params[4] *= r.l,
            s.datum_params[5] *= r.l,
            s.datum_params[6] = s.datum_params[6] / 1e6 + 1))),
        s.a = i,
        s.b = a,
        s.es = n,
        s.ep2 = o,
        s
    }
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      return t === n.e || t === n.f
    }
    var n = i(0),
      o = i(79);
    e.a = function (t, e, i) {
      return Object(o.a)(t, e) ? i : t.datum_type === n.g || e.datum_type === n.g ? i : t.es !== e.es || t.a !== e.a || a(t.datum_type) || a(e.datum_type) ? (i = Object(o.e)(i, t.es, t.a),
        a(t.datum_type) && (i = Object(o.d)(i, t.datum_type, t.datum_params)),
        a(e.datum_type) && (i = Object(o.b)(i, e.datum_type, e.datum_params)),
        Object(o.c)(i, e.es, e.a, e.b)) : i
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
        return t.datum_type === e.datum_type && !(t.a !== e.a || 5e-11 < Math.abs(t.es - e.es)) && (t.datum_type === M.e ? t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] : t.datum_type !== M.f || t.datum_params[0] === e.datum_params[0] && t.datum_params[1] === e.datum_params[1] && t.datum_params[2] === e.datum_params[2] && t.datum_params[3] === e.datum_params[3] && t.datum_params[4] === e.datum_params[4] && t.datum_params[5] === e.datum_params[5] && t.datum_params[6] === e.datum_params[6])
      },
      e.e = function (t, e, i) {
        var a, n, o, s, r = t.x,
          l = t.y,
          h = t.z ? t.z : 0;
        if (l < -M.d && l > -1.001 * M.d)
          l = -M.d;
        else if (l > M.d && l < 1.001 * M.d)
          l = M.d;
        else {
          if (l < -M.d)
            return {
              x: -1 / 0,
              y: -1 / 0,
              z: t.z
            };
          if (l > M.d)
            return {
              x: 1 / 0,
              y: 1 / 0,
              z: t.z
            }
        }
        return r > Math.PI && (r -= 2 * Math.PI),
          n = Math.sin(l),
          s = Math.cos(l),
          o = n * n, {
            x: ((a = i / Math.sqrt(1 - e * o)) + h) * s * Math.cos(r),
            y: (a + h) * s * Math.sin(r),
            z: (a * (1 - e) + h) * n
          }
      },
      e.c = function (t, e, i, a) {
        var n, o, s, r, l, h, u, c, d, f, _, p, m, g, v, y = t.x,
          b = t.y,
          w = t.z ? t.z : 0;
        if (n = Math.sqrt(y * y + b * b),
          o = Math.sqrt(y * y + b * b + w * w),
          n / i < 1e-12) {
          if (g = 0,
            o / i < 1e-12)
            return M.d,
              v = -a, {
                x: t.x,
                y: t.y,
                z: t.z
              }
        } else
          g = Math.atan2(b, y);
        for (s = w / o,
          c = (r = n / o) * (1 - e) * (l = 1 / Math.sqrt(1 - e * (2 - e) * r * r)),
          d = s * l,
          m = 0; m++,
          h = e * (u = i / Math.sqrt(1 - e * d * d)) / (u + (v = n * c + w * d - u * (1 - e * d * d))),
          p = (_ = s * (l = 1 / Math.sqrt(1 - h * (2 - h) * r * r))) * c - (f = r * (1 - h) * l) * d,
          c = f,
          d = _,
          1e-24 < p * p && m < 30;)
        ;
        return {
          x: g,
          y: Math.atan(_ / Math.abs(f)),
          z: v
        }
      },
      e.d = function (t, e, i) {
        if (e === M.e)
          return {
            x: t.x + i[0],
            y: t.y + i[1],
            z: t.z + i[2]
          };
        if (e === M.f) {
          var a = i[0],
            n = i[1],
            o = i[2],
            s = i[3],
            r = i[4],
            l = i[5],
            h = i[6];
          return {
            x: h * (t.x - l * t.y + r * t.z) + a,
            y: h * (l * t.x + t.y - s * t.z) + n,
            z: h * (-r * t.x + s * t.y + t.z) + o
          }
        }
      },
      e.b = function (t, e, i) {
        if (e === M.e)
          return {
            x: t.x - i[0],
            y: t.y - i[1],
            z: t.z - i[2]
          };
        if (e === M.f) {
          var a = i[0],
            n = i[1],
            o = i[2],
            s = i[3],
            r = i[4],
            l = i[5],
            h = i[6],
            u = (t.x - a) / h,
            c = (t.y - n) / h,
            d = (t.z - o) / h;
          return {
            x: u + l * c - r * d,
            y: -l * u + c + s * d,
            z: r * u - s * c + d
          }
        }
      };
    var M = i(0)
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e, i) {
      var a, n, o, s = i.x,
        r = i.y,
        l = i.z || 0,
        h = {};
      for (o = 0; o < 3; o++)
        if (!e || 2 !== o || void 0 !== i.z)
          switch (n = 0 === o ? (a = s,
              "x") : 1 === o ? (a = r,
              "y") : (a = l,
              "z"),
            t.axis[o]) {
            case "e":
              h[n] = a;
              break;
            case "w":
              h[n] = -a;
              break;
            case "n":
              h[n] = a;
              break;
            case "s":
              h[n] = -a;
              break;
            case "u":
              void 0 !== i[n] && (h.z = a);
              break;
            case "d":
              void 0 !== i[n] && (h.z = -a);
              break;
            default:
              return null
          }
      return h
    }
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      if ("function" == typeof Number.isFinite) {
        if (Number.isFinite(t))
          return;
        throw new TypeError("coordinates must be finite numbers")
      }
      if ("number" != typeof t || t != t || !isFinite(t))
        throw new TypeError("coordinates must be finite numbers")
    }
    e.a = function (t) {
      a(t.x),
        a(t.y)
    }
  }, function (t, e, i) {
    "use strict";

    function n(t, e, i) {
      if (!(this instanceof n))
        return new n(t, e, i);
      if (Array.isArray(t))
        this.x = t[0],
        this.y = t[1],
        this.z = t[2] || 0;
      else if ("object" == typeof t)
        this.x = t.x,
        this.y = t.y,
        this.z = t.z || 0;
      else if ("string" == typeof t && void 0 === e) {
        var a = t.split(",");
        this.x = parseFloat(a[0], 10),
          this.y = parseFloat(a[1], 10),
          this.z = parseFloat(a[2], 10) || 0
      } else
        this.x = t,
        this.y = e,
        this.z = i || 0;
      console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")
    }
    var a = i(32);
    n.fromMGRS = function (t) {
        return new n(Object(a.c)(t))
      },
      n.prototype.toMGRS = function (t) {
        return Object(a.b)([this.x, this.y], t)
      },
      e.a = n
  }, function (t, e, i) {
    "use strict";
    var a = i(84);
    i.n(a),
      i.o(a, "version") && i.d(e, "a", function () {
        return a.version
      })
  }, function (t, e) {
    t.exports = {
      name: "proj4",
      version: "2.5.0",
      description: "Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.",
      main: "dist/proj4-src.js",
      module: "lib/index.js",
      directories: {
        test: "test",
        doc: "docs"
      },
      scripts: {
        build: "grunt",
        "build:tmerc": "grunt build:tmerc",
        test: "npm run build && istanbul test _mocha test/test.js"
      },
      repository: {
        type: "git",
        url: "git://github.com/proj4js/proj4js.git"
      },
      author: "",
      license: "MIT",
      devDependencies: {
        chai: "~4.1.2",
        "curl-amd": "github:cujojs/curl",
        grunt: "^1.0.1",
        "grunt-cli": "~1.2.0",
        "grunt-contrib-connect": "~1.0.2",
        "grunt-contrib-jshint": "~1.1.0",
        "grunt-contrib-uglify": "~3.1.0",
        "grunt-mocha-phantomjs": "~4.0.0",
        "grunt-rollup": "^6.0.0",
        istanbul: "~0.4.5",
        mocha: "~4.0.0",
        rollup: "^0.50.0",
        "rollup-plugin-json": "^2.3.0",
        "rollup-plugin-node-resolve": "^3.0.0",
        tin: "~0.5.0"
      },
      dependencies: {
        mgrs: "1.0.0",
        "wkt-parser": "^1.2.0"
      },
      __npminstall_done: "Fri Jan 11 2019 21:03:23 GMT+0800 (GMT+08:00)",
      _from: "proj4@2.5.0",
      _resolved: "http://registry.npm.taobao.org/proj4/download/proj4-2.5.0.tgz"
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(86),
      n = i(35),
      o = i(93),
      s = i(95),
      r = i(98),
      l = i(99),
      h = i(100),
      u = i(101),
      c = i(102),
      d = i(103),
      f = i(104),
      _ = i(105),
      p = i(106),
      m = i(107),
      g = i(109),
      v = i(110),
      y = i(111),
      b = i(112),
      w = i(113),
      M = i(114),
      L = i(115),
      x = i(116),
      k = i(117),
      E = i(118),
      C = i(119),
      P = i(120);
    e.a = function (t) {
      t.Proj.projections.add(a.a),
        t.Proj.projections.add(n.a),
        t.Proj.projections.add(o.a),
        t.Proj.projections.add(s.a),
        t.Proj.projections.add(r.a),
        t.Proj.projections.add(l.a),
        t.Proj.projections.add(h.a),
        t.Proj.projections.add(u.a),
        t.Proj.projections.add(c.a),
        t.Proj.projections.add(d.a),
        t.Proj.projections.add(f.a),
        t.Proj.projections.add(_.a),
        t.Proj.projections.add(p.a),
        t.Proj.projections.add(m.a),
        t.Proj.projections.add(g.a),
        t.Proj.projections.add(v.a),
        t.Proj.projections.add(y.a),
        t.Proj.projections.add(b.a),
        t.Proj.projections.add(w.a),
        t.Proj.projections.add(M.a),
        t.Proj.projections.add(L.a),
        t.Proj.projections.add(x.a),
        t.Proj.projections.add(k.a),
        t.Proj.projections.add(E.a),
        t.Proj.projections.add(C.a),
        t.Proj.projections.add(P.a)
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(33),
      v = i(19),
      b = i(34),
      w = i(2),
      M = i(0),
      L = i(7);
    e.a = {
      init: function () {
        this.x0 = void 0 !== this.x0 ? this.x0 : 0,
          this.y0 = void 0 !== this.y0 ? this.y0 : 0,
          this.long0 = void 0 !== this.long0 ? this.long0 : 0,
          this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0,
          this.es && (this.en = Object(a.a)(this.es),
            this.ml0 = Object(v.a)(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en))
      },
      forward: function (t) {
        var e, i, a, n = t.x,
          o = t.y,
          s = Object(w.a)(n - this.long0),
          r = Math.sin(o),
          l = Math.cos(o);
        if (this.es) {
          var h = l * s,
            u = Math.pow(h, 2),
            c = this.ep2 * Math.pow(l, 2),
            d = Math.pow(c, 2),
            f = Math.abs(l) > M.b ? Math.tan(o) : 0,
            _ = Math.pow(f, 2),
            p = Math.pow(_, 2);
          e = 1 - this.es * Math.pow(r, 2),
            h /= Math.sqrt(e);
          var m = Object(v.a)(o, r, l, this.en);
          i = this.a * (this.k0 * h * (1 + u / 6 * (1 - _ + c + u / 20 * (5 - 18 * _ + p + 14 * c - 58 * _ * c + u / 42 * (61 + 179 * p - p * _ - 479 * _))))) + this.x0,
            a = this.a * (this.k0 * (m - this.ml0 + r * s * h / 2 * (1 + u / 12 * (5 - _ + 9 * c + 4 * d + u / 30 * (61 + p - 58 * _ + 270 * c - 330 * _ * c + u / 56 * (1385 + 543 * p - p * _ - 3111 * _)))))) + this.y0
        } else {
          var g = l * Math.sin(s);
          if (Math.abs(Math.abs(g) - 1) < M.b)
            return 93;
          if (i = .5 * this.a * this.k0 * Math.log((1 + g) / (1 - g)) + this.x0,
            a = l * Math.cos(s) / Math.sqrt(1 - Math.pow(g, 2)),
            1 <= (g = Math.abs(a))) {
            if (g - 1 > M.b)
              return 93;
            a = 0
          } else
            a = Math.acos(a);
          o < 0 && (a = -a),
            a = this.a * this.k0 * (a - this.lat0) + this.y0
        }
        return t.x = i,
          t.y = a,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o = (t.x - this.x0) * (1 / this.a),
          s = (t.y - this.y0) * (1 / this.a);
        if (this.es)
          if (e = this.ml0 + s / this.k0,
            i = Object(b.a)(e, this.es, this.en),
            Math.abs(i) < M.d) {
            var r = Math.sin(i),
              l = Math.cos(i),
              h = Math.abs(l) > M.b ? Math.tan(i) : 0,
              u = this.ep2 * Math.pow(l, 2),
              c = Math.pow(u, 2),
              d = Math.pow(h, 2),
              f = Math.pow(d, 2);
            e = 1 - this.es * Math.pow(r, 2);
            var _ = o * Math.sqrt(e) / this.k0,
              p = Math.pow(_, 2);
            a = i - (e *= h) * p / (1 - this.es) * .5 * (1 - p / 12 * (5 + 3 * d - 9 * u * d + u - 4 * c - p / 30 * (61 + 90 * d - 252 * u * d + 45 * f + 46 * u - p / 56 * (1385 + 3633 * d + 4095 * f + 1574 * f * d)))),
              n = Object(w.a)(this.long0 + _ * (1 - p / 6 * (1 + 2 * d + u - p / 20 * (5 + 28 * d + 24 * f + 8 * u * d + 6 * u - p / 42 * (61 + 662 * d + 1320 * f + 720 * f * d)))) / l)
          } else
            a = M.d * Object(L.a)(s),
            n = 0;
        else {
          var m = Math.exp(o / this.k0),
            g = .5 * (m - 1 / m),
            v = this.lat0 + s / this.k0,
            y = Math.cos(v);
          e = Math.sqrt((1 - Math.pow(y, 2)) / (1 + Math.pow(g, 2))),
            a = Math.asin(e),
            s < 0 && (a = -a),
            n = 0 === g && 0 === y ? 0 : Object(w.a)(Math.atan2(g, y) + this.long0)
        }
        return t.x = n,
          t.y = a,
          t
      },
      names: ["Transverse_Mercator", "Transverse Mercator", "tmerc"]
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(37),
      n = i(88);
    e.a = function (t) {
      var e = Math.abs(t);
      return e = Object(n.a)(e * (1 + e / (Object(a.a)(1, e) + 1))),
        t < 0 ? -e : e
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      var e = 1 + t,
        i = e - 1;
      return 0 === i ? t : t * Math.log(e) / i
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      for (var i, a = 2 * Math.cos(2 * e), n = t.length - 1, o = t[n], s = 0; 0 <= --n;)
        i = a * o - s + t[n],
        s = o,
        o = i;
      return e + i * Math.sin(2 * e)
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      for (var i, a = 2 * Math.cos(e), n = t.length - 1, o = t[n], s = 0; 0 <= --n;)
        i = a * o - s + t[n],
        s = o,
        o = i;
      return Math.sin(e) * i
    }
  }, function (t, e, i) {
    "use strict";
    var m = i(36),
      g = i(92);
    e.a = function (t, e, i) {
      for (var a, n, o = Math.sin(e), s = Math.cos(e), r = Object(m.a)(i), l = Object(g.a)(i), h = 2 * s * l, u = -2 * o * r, c = t.length - 1, d = t[c], f = 0, _ = 0, p = 0; 0 <= --c;)
        a = _,
        n = f,
        d = h * (_ = d) - a - u * (f = p) + t[c],
        p = u * _ - n + h * f;
      return [(h = o * l) * d - (u = s * r) * p, h * p + u * d]
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t) {
      var e = Math.exp(t);
      return (e + 1 / e) / 2
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(94),
      n = i(35),
      o = i(0);
    e.a = {
      init: function () {
        var t = Object(a.a)(this.zone, this.long0);
        if (void 0 === t)
          throw new Error("unknown utm zone");
        this.lat0 = 0,
          this.long0 = (6 * Math.abs(t) - 183) * o.a,
          this.x0 = 5e5,
          this.y0 = this.utmSouth ? 1e7 : 0,
          this.k0 = .9996,
          n.a.init.apply(this),
          this.forward = n.a.forward,
          this.inverse = n.a.inverse
      },
      names: ["Universal Transverse Mercator System", "utm"],
      dependsOn: "etmerc"
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(2);
    e.a = function (t, e) {
      if (void 0 === t) {
        if ((t = Math.floor(30 * (Object(a.a)(e) + Math.PI) / Math.PI) + 1) < 0)
          return 0;
        if (60 < t)
          return 60
      }
      return t
    }
  }, function (t, e, i) {
    "use strict";
    var r = i(96),
      l = i(2);
    e.a = {
      init: function () {
        r.a.init.apply(this),
          this.rc && (this.sinc0 = Math.sin(this.phic0),
            this.cosc0 = Math.cos(this.phic0),
            this.R2 = 2 * this.rc,
            this.title || (this.title = "Oblique Stereographic Alternative"))
      },
      forward: function (t) {
        var e, i, a, n;
        return t.x = Object(l.a)(t.x - this.long0),
          r.a.forward.apply(this, [t]),
          e = Math.sin(t.y),
          i = Math.cos(t.y),
          a = Math.cos(t.x),
          n = this.k0 * this.R2 / (1 + this.sinc0 * e + this.cosc0 * i * a),
          t.x = n * i * Math.sin(t.x),
          t.y = n * (this.cosc0 * e - this.sinc0 * i * a),
          t.x = this.a * t.x + this.x0,
          t.y = this.a * t.y + this.y0,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o;
        if (t.x = (t.x - this.x0) / this.a,
          t.y = (t.y - this.y0) / this.a,
          t.x /= this.k0,
          t.y /= this.k0,
          o = Math.sqrt(t.x * t.x + t.y * t.y)) {
          var s = 2 * Math.atan2(o, this.R2);
          e = Math.sin(s),
            i = Math.cos(s),
            n = Math.asin(i * this.sinc0 + t.y * e * this.cosc0 / o),
            a = Math.atan2(t.x * e, o * this.cosc0 * i - t.y * this.sinc0 * e)
        } else
          n = this.phic0,
          a = 0;
        return t.x = a,
          t.y = n,
          r.a.inverse.apply(this, [t]),
          t.x = Object(l.a)(t.x + this.long0),
          t
      },
      names: ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"]
    }
  }, function (t, e, i) {
    "use strict";
    var o = i(97),
      s = i(0);
    e.a = {
      init: function () {
        var t = Math.sin(this.lat0),
          e = Math.cos(this.lat0);
        e *= e,
          this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t),
          this.C = Math.sqrt(1 + this.es * e * e / (1 - this.es)),
          this.phic0 = Math.asin(t / this.C),
          this.ratexp = .5 * this.C * this.e,
          this.K = Math.tan(.5 * this.phic0 + s.c) / (Math.pow(Math.tan(.5 * this.lat0 + s.c), this.C) * Object(o.a)(this.e * t, this.ratexp))
      },
      forward: function (t) {
        var e = t.x,
          i = t.y;
        return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(.5 * i + s.c), this.C) * Object(o.a)(this.e * Math.sin(i), this.ratexp)) - s.d,
          t.x = this.C * e,
          t
      },
      inverse: function (t) {
        for (var e = t.x / this.C, i = t.y, a = Math.pow(Math.tan(.5 * i + s.c) / this.K, 1 / this.C), n = 20; 0 < n && (i = 2 * Math.atan(a * Object(o.a)(this.e * Math.sin(t.y), -.5 * this.e)) - s.d,
            !(Math.abs(i - t.y) < 1e-14)); --n)
          t.y = i;
        return n ? (t.x = e,
          t.y = i,
          t) : null
      },
      names: ["gauss"]
    }
  }, function (t, e, i) {
    "use strict";
    e.a = function (t, e) {
      return Math.pow((1 - t) / (1 + t), e)
    }
  }, function (t, e, i) {
    "use strict";
    var d = i(0),
      a = i(7),
      n = i(4),
      f = i(10),
      l = i(11),
      _ = i(2);
    e.a = {
      init: function () {
        this.coslat0 = Math.cos(this.lat0),
          this.sinlat0 = Math.sin(this.lat0),
          this.sphere ? 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= d.b && (this.k0 = .5 * (1 + Object(a.a)(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= d.b && (0 < this.lat0 ? this.con = 1 : this.con = -1),
            this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)),
            1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= d.b && (this.k0 = .5 * this.cons * Object(n.a)(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Object(f.a)(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))),
            this.ms1 = Object(n.a)(this.e, this.sinlat0, this.coslat0),
            this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - d.d,
            this.cosX0 = Math.cos(this.X0),
            this.sinX0 = Math.sin(this.X0))
      },
      forward: function (t) {
        var e, i, a, n, o, s, r = t.x,
          l = t.y,
          h = Math.sin(l),
          u = Math.cos(l),
          c = Object(_.a)(r - this.long0);
        return Math.abs(Math.abs(r - this.long0) - Math.PI) <= d.b && Math.abs(l + this.lat0) <= d.b ? (t.x = NaN,
            t.y = NaN) : this.sphere ? (e = 2 * this.k0 / (1 + this.sinlat0 * h + this.coslat0 * u * Math.cos(c)),
            t.x = this.a * e * u * Math.sin(c) + this.x0,
            t.y = this.a * e * (this.coslat0 * h - this.sinlat0 * u * Math.cos(c)) + this.y0) : (i = 2 * Math.atan(this.ssfn_(l, h, this.e)) - d.d,
            n = Math.cos(i),
            a = Math.sin(i),
            Math.abs(this.coslat0) <= d.b ? (o = Object(f.a)(this.e, l * this.con, this.con * h),
              s = 2 * this.a * this.k0 * o / this.cons,
              t.x = this.x0 + s * Math.sin(r - this.long0),
              t.y = this.y0 - this.con * s * Math.cos(r - this.long0)) : (Math.abs(this.sinlat0) < d.b ? (e = 2 * this.a * this.k0 / (1 + n * Math.cos(c)),
                t.y = e * a) : (e = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * a + this.cosX0 * n * Math.cos(c))),
                t.y = e * (this.cosX0 * a - this.sinX0 * n * Math.cos(c)) + this.y0),
              t.x = e * n * Math.sin(c) + this.x0)),
          t
      },
      inverse: function (t) {
        t.x -= this.x0,
          t.y -= this.y0;
        var e, i, a, n, o, s = Math.sqrt(t.x * t.x + t.y * t.y);
        if (this.sphere) {
          var r = 2 * Math.atan(s / (2 * this.a * this.k0));
          return e = this.long0,
            i = this.lat0,
            s <= d.b || (i = Math.asin(Math.cos(r) * this.sinlat0 + t.y * Math.sin(r) * this.coslat0 / s),
              e = Math.abs(this.coslat0) < d.b ? 0 < this.lat0 ? Object(_.a)(this.long0 + Math.atan2(t.x, -1 * t.y)) : Object(_.a)(this.long0 + Math.atan2(t.x, t.y)) : Object(_.a)(this.long0 + Math.atan2(t.x * Math.sin(r), s * this.coslat0 * Math.cos(r) - t.y * this.sinlat0 * Math.sin(r)))),
            t.x = e,
            t.y = i,
            t
        }
        if (Math.abs(this.coslat0) <= d.b) {
          if (s <= d.b)
            return i = this.lat0,
              e = this.long0,
              t.x = e,
              t.y = i,
              t;
          t.x *= this.con,
            t.y *= this.con,
            a = s * this.cons / (2 * this.a * this.k0),
            i = this.con * Object(l.a)(this.e, a),
            e = this.con * Object(_.a)(this.con * this.long0 + Math.atan2(t.x, -1 * t.y))
        } else
          n = 2 * Math.atan(s * this.cosX0 / (2 * this.a * this.k0 * this.ms1)),
          e = this.long0,
          s <= d.b ? o = this.X0 : (o = Math.asin(Math.cos(n) * this.sinX0 + t.y * Math.sin(n) * this.cosX0 / s),
            e = Object(_.a)(this.long0 + Math.atan2(t.x * Math.sin(n), s * this.cosX0 * Math.cos(n) - t.y * this.sinX0 * Math.sin(n)))),
          i = -1 * Object(l.a)(this.e, Math.tan(.5 * (d.d + o)));
        return t.x = e,
          t.y = i,
          t
      },
      names: ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"],
      ssfn_: function (t, e, i) {
        return e *= i,
          Math.tan(.5 * (d.d + t)) * Math.pow((1 - e) / (1 + e), .5 * i)
      }
    }
  }, function (t, e, i) {
    "use strict";
    e.a = {
      init: function () {
        var t = this.lat0;
        this.lambda0 = this.long0;
        var e = Math.sin(t),
          i = this.a,
          a = 1 / this.rf,
          n = 2 * a - Math.pow(a, 2),
          o = this.e = Math.sqrt(n);
        this.R = this.k0 * i * Math.sqrt(1 - n) / (1 - n * Math.pow(e, 2)),
          this.alpha = Math.sqrt(1 + n / (1 - n) * Math.pow(Math.cos(t), 4)),
          this.b0 = Math.asin(e / this.alpha);
        var s = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)),
          r = Math.log(Math.tan(Math.PI / 4 + t / 2)),
          l = Math.log((1 + o * e) / (1 - o * e));
        this.K = s - this.alpha * r + this.alpha * o / 2 * l
      },
      forward: function (t) {
        var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)),
          i = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))),
          a = -this.alpha * (e + i) + this.K,
          n = 2 * (Math.atan(Math.exp(a)) - Math.PI / 4),
          o = this.alpha * (t.x - this.lambda0),
          s = Math.atan(Math.sin(o) / (Math.sin(this.b0) * Math.tan(n) + Math.cos(this.b0) * Math.cos(o))),
          r = Math.asin(Math.cos(this.b0) * Math.sin(n) - Math.sin(this.b0) * Math.cos(n) * Math.cos(o));
        return t.y = this.R / 2 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))) + this.y0,
          t.x = this.R * s + this.x0,
          t
      },
      inverse: function (t) {
        for (var e = t.x - this.x0, i = t.y - this.y0, a = e / this.R, n = 2 * (Math.atan(Math.exp(i / this.R)) - Math.PI / 4), o = Math.asin(Math.cos(this.b0) * Math.sin(n) + Math.sin(this.b0) * Math.cos(n) * Math.cos(a)), s = Math.atan(Math.sin(a) / (Math.cos(this.b0) * Math.cos(a) - Math.sin(this.b0) * Math.tan(n))), r = this.lambda0 + s / this.alpha, l = 0, h = o, u = -1e3, c = 0; 1e-7 < Math.abs(h - u);) {
          if (20 < ++c)
            return;
          l = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + o / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(h)) / 2)),
            u = h,
            h = 2 * Math.atan(Math.exp(l)) - Math.PI / 2
        }
        return t.x = r,
          t.y = h,
          t
      },
      names: ["somerc"]
    }
  }, function (t, e, i) {
    "use strict";
    var p = i(10),
      m = i(2),
      h = i(11),
      f = i(0);
    e.a = {
      init: function () {
        this.no_off = this.no_off || !1,
          this.no_rot = this.no_rot || !1,
          isNaN(this.k0) && (this.k0 = 1);
        var t = Math.sin(this.lat0),
          e = Math.cos(this.lat0),
          i = this.e * t;
        this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(e, 4)),
          this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - i * i);
        var a, n, o = Object(p.a)(this.e, this.lat0, t),
          s = this.bl / e * Math.sqrt((1 - this.es) / (1 - i * i));
        if (s * s < 1 && (s = 1),
          isNaN(this.longc)) {
          var r = Object(p.a)(this.e, this.lat1, Math.sin(this.lat1)),
            l = Object(p.a)(this.e, this.lat2, Math.sin(this.lat2));
          0 <= this.lat0 ? this.el = (s + Math.sqrt(s * s - 1)) * Math.pow(o, this.bl) : this.el = (s - Math.sqrt(s * s - 1)) * Math.pow(o, this.bl);
          var h = Math.pow(r, this.bl),
            u = Math.pow(l, this.bl);
          n = .5 * ((a = this.el / h) - 1 / a);
          var c = (this.el * this.el - u * h) / (this.el * this.el + u * h),
            d = (u - h) / (u + h),
            f = Object(m.a)(this.long1 - this.long2);
          this.long0 = .5 * (this.long1 + this.long2) - Math.atan(c * Math.tan(.5 * this.bl * f) / d) / this.bl,
            this.long0 = Object(m.a)(this.long0);
          var _ = Object(m.a)(this.long1 - this.long0);
          this.gamma0 = Math.atan(Math.sin(this.bl * _) / n),
            this.alpha = Math.asin(s * Math.sin(this.gamma0))
        } else
          a = 0 <= this.lat0 ? s + Math.sqrt(s * s - 1) : s - Math.sqrt(s * s - 1),
          this.el = a * Math.pow(o, this.bl),
          n = .5 * (a - 1 / a),
          this.gamma0 = Math.asin(Math.sin(this.alpha) / s),
          this.long0 = this.longc - Math.asin(n * Math.tan(this.gamma0)) / this.bl;
        this.no_off ? this.uc = 0 : 0 <= this.lat0 ? this.uc = this.al / this.bl * Math.atan2(Math.sqrt(s * s - 1), Math.cos(this.alpha)) : this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(s * s - 1), Math.cos(this.alpha))
      },
      forward: function (t) {
        var e, i, a, n = t.x,
          o = t.y,
          s = Object(m.a)(n - this.long0);
        if (Math.abs(Math.abs(o) - f.d) <= f.b)
          a = 0 < o ? -1 : 1,
          i = this.al / this.bl * Math.log(Math.tan(f.c + a * this.gamma0 * .5)),
          e = -1 * a * f.d * this.al / this.bl;
        else {
          var r = Object(p.a)(this.e, o, Math.sin(o)),
            l = this.el / Math.pow(r, this.bl),
            h = .5 * (l - 1 / l),
            u = .5 * (l + 1 / l),
            c = Math.sin(this.bl * s),
            d = (h * Math.sin(this.gamma0) - c * Math.cos(this.gamma0)) / u;
          i = Math.abs(Math.abs(d) - 1) <= f.b ? Number.POSITIVE_INFINITY : .5 * this.al * Math.log((1 - d) / (1 + d)) / this.bl,
            e = Math.abs(Math.cos(this.bl * s)) <= f.b ? this.al * this.bl * s : this.al * Math.atan2(h * Math.cos(this.gamma0) + c * Math.sin(this.gamma0), Math.cos(this.bl * s)) / this.bl
        }
        return this.no_rot ? (t.x = this.x0 + e,
            t.y = this.y0 + i) : (e -= this.uc,
            t.x = this.x0 + i * Math.cos(this.alpha) + e * Math.sin(this.alpha),
            t.y = this.y0 + e * Math.cos(this.alpha) - i * Math.sin(this.alpha)),
          t
      },
      inverse: function (t) {
        var e, i;
        this.no_rot ? (i = t.y - this.y0,
          e = t.x - this.x0) : (i = (t.x - this.x0) * Math.cos(this.alpha) - (t.y - this.y0) * Math.sin(this.alpha),
          e = (t.y - this.y0) * Math.cos(this.alpha) + (t.x - this.x0) * Math.sin(this.alpha),
          e += this.uc);
        var a = Math.exp(-1 * this.bl * i / this.al),
          n = .5 * (a - 1 / a),
          o = .5 * (a + 1 / a),
          s = Math.sin(this.bl * e / this.al),
          r = (s * Math.cos(this.gamma0) + n * Math.sin(this.gamma0)) / o,
          l = Math.pow(this.el / Math.sqrt((1 + r) / (1 - r)), 1 / this.bl);
        return Math.abs(r - 1) < f.b ? (t.x = this.long0,
            t.y = f.d) : Math.abs(r + 1) < f.b ? (t.x = this.long0,
            t.y = -1 * f.d) : (t.y = Object(h.a)(this.e, l),
            t.x = Object(m.a)(this.long0 - Math.atan2(n * Math.cos(this.gamma0) - s * Math.sin(this.gamma0), Math.cos(this.bl * e / this.al)) / this.bl)),
          t
      },
      names: ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"]
    }
  }, function (t, e, i) {
    "use strict";
    var u = i(4),
      c = i(10),
      r = i(7),
      h = i(2),
      d = i(11),
      f = i(0);
    e.a = {
      init: function () {
        if (this.lat2 || (this.lat2 = this.lat1),
          this.k0 || (this.k0 = 1),
          this.x0 = this.x0 || 0,
          this.y0 = this.y0 || 0,
          !(Math.abs(this.lat1 + this.lat2) < f.b)) {
          var t = this.b / this.a;
          this.e = Math.sqrt(1 - t * t);
          var e = Math.sin(this.lat1),
            i = Math.cos(this.lat1),
            a = Object(u.a)(this.e, e, i),
            n = Object(c.a)(this.e, this.lat1, e),
            o = Math.sin(this.lat2),
            s = Math.cos(this.lat2),
            r = Object(u.a)(this.e, o, s),
            l = Object(c.a)(this.e, this.lat2, o),
            h = Object(c.a)(this.e, this.lat0, Math.sin(this.lat0));
          Math.abs(this.lat1 - this.lat2) > f.b ? this.ns = Math.log(a / r) / Math.log(n / l) : this.ns = e,
            isNaN(this.ns) && (this.ns = e),
            this.f0 = a / (this.ns * Math.pow(n, this.ns)),
            this.rh = this.a * this.f0 * Math.pow(h, this.ns),
            this.title || (this.title = "Lambert Conformal Conic")
        }
      },
      forward: function (t) {
        var e = t.x,
          i = t.y;
        Math.abs(2 * Math.abs(i) - Math.PI) <= f.b && (i = Object(r.a)(i) * (f.d - 2 * f.b));
        var a, n, o = Math.abs(Math.abs(i) - f.d);
        if (o > f.b)
          a = Object(c.a)(this.e, i, Math.sin(i)),
          n = this.a * this.f0 * Math.pow(a, this.ns);
        else {
          if ((o = i * this.ns) <= 0)
            return null;
          n = 0
        }
        var s = this.ns * Object(h.a)(e - this.long0);
        return t.x = this.k0 * (n * Math.sin(s)) + this.x0,
          t.y = this.k0 * (this.rh - n * Math.cos(s)) + this.y0,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s = (t.x - this.x0) / this.k0,
          r = this.rh - (t.y - this.y0) / this.k0;
        i = 0 < this.ns ? (e = Math.sqrt(s * s + r * r),
          1) : (e = -Math.sqrt(s * s + r * r),
          -1);
        var l = 0;
        if (0 !== e && (l = Math.atan2(i * s, i * r)),
          0 !== e || 0 < this.ns) {
          if (i = 1 / this.ns,
            a = Math.pow(e / (this.a * this.f0), i),
            -9999 === (n = Object(d.a)(this.e, a)))
            return null
        } else
          n = -f.d;
        return o = Object(h.a)(l / this.ns + this.long0),
          t.x = o,
          t.y = n,
          t
      },
      names: ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"]
    }
  }, function (t, e, i) {
    "use strict";
    var c = i(2);
    e.a = {
      init: function () {
        this.a = 6377397.155,
          this.es = .006674372230614,
          this.e = Math.sqrt(this.es),
          this.lat0 || (this.lat0 = .863937979737193),
          this.long0 || (this.long0 = .4334234309119251),
          this.k0 || (this.k0 = .9999),
          this.s45 = .785398163397448,
          this.s90 = 2 * this.s45,
          this.fi0 = this.lat0,
          this.e2 = this.es,
          this.e = Math.sqrt(this.e2),
          this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)),
          this.uq = 1.04216856380474,
          this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa),
          this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2),
          this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g,
          this.k1 = this.k0,
          this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)),
          this.s0 = 1.37008346281555,
          this.n = Math.sin(this.s0),
          this.ro0 = this.k1 * this.n0 / Math.tan(this.s0),
          this.ad = this.s90 - this.uq
      },
      forward: function (t) {
        var e, i, a, n, o, s, r, l = t.x,
          h = t.y,
          u = Object(c.a)(l - this.long0);
        return e = Math.pow((1 + this.e * Math.sin(h)) / (1 - this.e * Math.sin(h)), this.alfa * this.e / 2),
          i = 2 * (Math.atan(this.k * Math.pow(Math.tan(h / 2 + this.s45), this.alfa) / e) - this.s45),
          a = -u * this.alfa,
          n = Math.asin(Math.cos(this.ad) * Math.sin(i) + Math.sin(this.ad) * Math.cos(i) * Math.cos(a)),
          o = Math.asin(Math.cos(i) * Math.sin(a) / Math.cos(n)),
          s = this.n * o,
          r = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(n / 2 + this.s45), this.n),
          t.y = r * Math.cos(s) / 1,
          t.x = r * Math.sin(s) / 1,
          this.czech || (t.y *= -1,
            t.x *= -1),
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s, r, l = t.x;
        t.x = t.y,
          t.y = l,
          this.czech || (t.y *= -1,
            t.x *= -1),
          o = Math.sqrt(t.x * t.x + t.y * t.y),
          n = Math.atan2(t.y, t.x) / Math.sin(this.s0),
          a = 2 * (Math.atan(Math.pow(this.ro0 / o, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45),
          e = Math.asin(Math.cos(this.ad) * Math.sin(a) - Math.sin(this.ad) * Math.cos(a) * Math.cos(n)),
          i = Math.asin(Math.cos(a) * Math.sin(n) / Math.cos(e)),
          t.x = this.long0 - i / this.alfa,
          s = e;
        for (var h = r = 0; t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(s)) / (1 - this.e * Math.sin(s)), this.e / 2)) - this.s45),
          Math.abs(s - t.y) < 1e-10 && (r = 1),
          s = t.y,
          h += 1,
          0 === r && h < 15;)
        ;
        return 15 <= h ? null : t
      },
      names: ["Krovak", "krovak"]
    }
  }, function (t, e, i) {
    "use strict";
    var d = i(12),
      a = i(13),
      n = i(14),
      o = i(15),
      s = i(16),
      f = i(20),
      _ = i(2),
      p = i(8),
      m = i(21),
      g = i(0);
    e.a = {
      init: function () {
        this.sphere || (this.e0 = Object(a.a)(this.es),
          this.e1 = Object(n.a)(this.es),
          this.e2 = Object(o.a)(this.es),
          this.e3 = Object(s.a)(this.es),
          this.ml0 = this.a * Object(d.a)(this.e0, this.e1, this.e2, this.e3, this.lat0))
      },
      forward: function (t) {
        var e, i, a = t.x,
          n = t.y;
        if (a = Object(_.a)(a - this.long0),
          this.sphere)
          e = this.a * Math.asin(Math.cos(n) * Math.sin(a)),
          i = this.a * (Math.atan2(Math.tan(n), Math.cos(a)) - this.lat0);
        else {
          var o = Math.sin(n),
            s = Math.cos(n),
            r = Object(f.a)(this.a, this.e, o),
            l = Math.tan(n) * Math.tan(n),
            h = a * Math.cos(n),
            u = h * h,
            c = this.es * s * s / (1 - this.es);
          e = r * h * (1 - u * l * (1 / 6 - (8 - l + 8 * c) * u / 120)),
            i = this.a * Object(d.a)(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + r * o / s * u * (.5 + (5 - l + 6 * c) * u / 24)
        }
        return t.x = e + this.x0,
          t.y = i + this.y0,
          t
      },
      inverse: function (t) {
        t.x -= this.x0,
          t.y -= this.y0;
        var e, i, a = t.x / this.a,
          n = t.y / this.a;
        if (this.sphere) {
          var o = n + this.lat0;
          e = Math.asin(Math.sin(o) * Math.cos(a)),
            i = Math.atan2(Math.tan(a), Math.cos(o))
        } else {
          var s = this.ml0 / this.a + n,
            r = Object(m.a)(s, this.e0, this.e1, this.e2, this.e3);
          if (Math.abs(Math.abs(r) - g.d) <= g.b)
            return t.x = this.long0,
              t.y = g.d,
              n < 0 && (t.y *= -1),
              t;
          var l = Object(f.a)(this.a, this.e, Math.sin(r)),
            h = l * l * l / this.a / this.a * (1 - this.es),
            u = Math.pow(Math.tan(r), 2),
            c = a * this.a / l,
            d = c * c;
          e = r - l * Math.tan(r) / h * c * c * (.5 - (1 + 3 * u) * c * c / 24),
            i = c * (1 - d * (u / 3 + (1 + 3 * u) * u * d / 15)) / Math.cos(r)
        }
        return t.x = Object(_.a)(i + this.long0),
          t.y = Object(p.a)(e),
          t
      },
      names: ["Cassini", "Cassini_Soldner", "cass"]
    }
  }, function (t, e, i) {
    "use strict";
    var m = i(0),
      f = i(22),
      g = i(2),
      o = .3333333333333333,
      s = .17222222222222222,
      r = .10257936507936508,
      l = .06388888888888888,
      h = .0664021164021164,
      u = .016415012942191543;
    e.a = {
      init: function () {
        var t, e, i, a, n = Math.abs(this.lat0);
        if (Math.abs(n - m.d) < m.b ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(n) < m.b ? this.mode = this.EQUIT : this.mode = this.OBLIQ,
          0 < this.es)
          switch (this.qp = Object(f.a)(this.e, 1),
            this.mmf = .5 / (1 - this.es),
            this.apa = (e = this.es,
              (a = [])[0] = e * o,
              i = e * e,
              a[0] += i * s,
              a[1] = i * l,
              i *= e,
              a[0] += i * r,
              a[1] += i * h,
              a[2] = i * u,
              a),
            this.mode) {
            case this.N_POLE:
            case this.S_POLE:
              this.dd = 1;
              break;
            case this.EQUIT:
              this.rq = Math.sqrt(.5 * this.qp),
                this.dd = 1 / this.rq,
                this.xmf = 1,
                this.ymf = .5 * this.qp;
              break;
            case this.OBLIQ:
              this.rq = Math.sqrt(.5 * this.qp),
                t = Math.sin(this.lat0),
                this.sinb1 = Object(f.a)(this.e, t) / this.qp,
                this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1),
                this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * t * t) * this.rq * this.cosb1),
                this.ymf = (this.xmf = this.rq) / this.dd,
                this.xmf *= this.dd
          }
        else
          this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0),
            this.cosph0 = Math.cos(this.lat0))
      },
      forward: function (t) {
        var e, i, a, n, o, s, r, l, h, u, c = t.x,
          d = t.y;
        if (c = Object(g.a)(c - this.long0),
          this.sphere) {
          if (o = Math.sin(d),
            u = Math.cos(d),
            a = Math.cos(c),
            this.mode === this.OBLIQ || this.mode === this.EQUIT) {
            if ((i = this.mode === this.EQUIT ? 1 + u * a : 1 + this.sinph0 * o + this.cosph0 * u * a) <= m.b)
              return null;
            e = (i = Math.sqrt(2 / i)) * u * Math.sin(c),
              i *= this.mode === this.EQUIT ? o : this.cosph0 * o - this.sinph0 * u * a
          } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
            if (this.mode === this.N_POLE && (a = -a),
              Math.abs(d + this.phi0) < m.b)
              return null;
            i = m.c - .5 * d,
              e = (i = 2 * (this.mode === this.S_POLE ? Math.cos(i) : Math.sin(i))) * Math.sin(c),
              i *= a
          }
        } else {
          switch (h = l = r = 0,
            a = Math.cos(c),
            n = Math.sin(c),
            o = Math.sin(d),
            s = Object(f.a)(this.e, o),
            this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (r = s / this.qp,
              l = Math.sqrt(1 - r * r)),
            this.mode) {
            case this.OBLIQ:
              h = 1 + this.sinb1 * r + this.cosb1 * l * a;
              break;
            case this.EQUIT:
              h = 1 + l * a;
              break;
            case this.N_POLE:
              h = m.d + d,
                s = this.qp - s;
              break;
            case this.S_POLE:
              h = d - m.d,
                s = this.qp + s
          }
          if (Math.abs(h) < m.b)
            return null;
          switch (this.mode) {
            case this.OBLIQ:
            case this.EQUIT:
              h = Math.sqrt(2 / h),
                i = this.mode === this.OBLIQ ? this.ymf * h * (this.cosb1 * r - this.sinb1 * l * a) : (h = Math.sqrt(2 / (1 + l * a))) * r * this.ymf,
                e = this.xmf * h * l * n;
              break;
            case this.N_POLE:
            case this.S_POLE:
              0 <= s ? (e = (h = Math.sqrt(s)) * n,
                i = a * (this.mode === this.S_POLE ? h : -h)) : e = i = 0
          }
        }
        return t.x = this.a * e + this.x0,
          t.y = this.a * i + this.y0,
          t
      },
      inverse: function (t) {
        t.x -= this.x0,
          t.y -= this.y0;
        var e, i, a, n, o, s, r, l, h, u, c = t.x / this.a,
          d = t.y / this.a;
        if (this.sphere) {
          var f, _ = 0,
            p = 0;
          if (1 < (i = .5 * (f = Math.sqrt(c * c + d * d))))
            return null;
          switch (i = 2 * Math.asin(i),
            this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (p = Math.sin(i),
              _ = Math.cos(i)),
            this.mode) {
            case this.EQUIT:
              i = Math.abs(f) <= m.b ? 0 : Math.asin(d * p / f),
                c *= p,
                d = _ * f;
              break;
            case this.OBLIQ:
              i = Math.abs(f) <= m.b ? this.phi0 : Math.asin(_ * this.sinph0 + d * p * this.cosph0 / f),
                c *= p * this.cosph0,
                d = (_ - Math.sin(i) * this.sinph0) * f;
              break;
            case this.N_POLE:
              d = -d,
                i = m.d - i;
              break;
            case this.S_POLE:
              i -= m.d
          }
          e = 0 !== d || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(c, d) : 0
        } else {
          if (r = 0,
            this.mode === this.OBLIQ || this.mode === this.EQUIT) {
            if (c /= this.dd,
              d *= this.dd,
              (s = Math.sqrt(c * c + d * d)) < m.b)
              return t.x = 0,
                t.y = this.phi0,
                t;
            n = 2 * Math.asin(.5 * s / this.rq),
              a = Math.cos(n),
              c *= n = Math.sin(n),
              d = this.mode === this.OBLIQ ? (r = a * this.sinb1 + d * n * this.cosb1 / s,
                o = this.qp * r,
                s * this.cosb1 * a - d * this.sinb1 * n) : (r = d * n / s,
                o = this.qp * r,
                s * a)
          } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
            if (this.mode === this.N_POLE && (d = -d),
              !(o = c * c + d * d))
              return t.x = 0,
                t.y = this.phi0,
                t;
            r = 1 - o / this.qp,
              this.mode === this.S_POLE && (r = -r)
          }
          e = Math.atan2(c, d),
            l = Math.asin(r),
            h = this.apa,
            u = l + l,
            i = l + h[0] * Math.sin(u) + h[1] * Math.sin(u + u) + h[2] * Math.sin(u + u + u)
        }
        return t.x = Object(g.a)(this.long0 + e),
          t.y = i,
          t
      },
      names: ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"],
      S_POLE: 1,
      N_POLE: 2,
      EQUIT: 3,
      OBLIQ: 4
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(4),
      l = i(22),
      h = i(2),
      u = i(5),
      c = i(0);
    e.a = {
      init: function () {
        Math.abs(this.lat1 + this.lat2) < c.b || (this.temp = this.b / this.a,
          this.es = 1 - Math.pow(this.temp, 2),
          this.e3 = Math.sqrt(this.es),
          this.sin_po = Math.sin(this.lat1),
          this.cos_po = Math.cos(this.lat1),
          this.t1 = this.sin_po,
          this.con = this.sin_po,
          this.ms1 = Object(a.a)(this.e3, this.sin_po, this.cos_po),
          this.qs1 = Object(l.a)(this.e3, this.sin_po, this.cos_po),
          this.sin_po = Math.sin(this.lat2),
          this.cos_po = Math.cos(this.lat2),
          this.t2 = this.sin_po,
          this.ms2 = Object(a.a)(this.e3, this.sin_po, this.cos_po),
          this.qs2 = Object(l.a)(this.e3, this.sin_po, this.cos_po),
          this.sin_po = Math.sin(this.lat0),
          this.cos_po = Math.cos(this.lat0),
          this.t3 = this.sin_po,
          this.qs0 = Object(l.a)(this.e3, this.sin_po, this.cos_po),
          Math.abs(this.lat1 - this.lat2) > c.b ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con,
          this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1,
          this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0)
      },
      forward: function (t) {
        var e = t.x,
          i = t.y;
        this.sin_phi = Math.sin(i),
          this.cos_phi = Math.cos(i);
        var a = Object(l.a)(this.e3, this.sin_phi, this.cos_phi),
          n = this.a * Math.sqrt(this.c - this.ns0 * a) / this.ns0,
          o = this.ns0 * Object(h.a)(e - this.long0),
          s = n * Math.sin(o) + this.x0,
          r = this.rh - n * Math.cos(o) + this.y0;
        return t.x = s,
          t.y = r,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s;
        return t.x -= this.x0,
          t.y = this.rh - t.y + this.y0,
          a = 0 <= this.ns0 ? (e = Math.sqrt(t.x * t.x + t.y * t.y),
            1) : (e = -Math.sqrt(t.x * t.x + t.y * t.y),
            -1),
          (n = 0) !== e && (n = Math.atan2(a * t.x, a * t.y)),
          a = e * this.ns0 / this.a,
          s = this.sphere ? Math.asin((this.c - a * a) / (2 * this.ns0)) : (i = (this.c - a * a) / this.ns0,
            this.phi1z(this.e3, i)),
          o = Object(h.a)(n / this.ns0 + this.long0),
          t.x = o,
          t.y = s,
          t
      },
      names: ["Albers_Conic_Equal_Area", "Albers", "aea"],
      phi1z: function (t, e) {
        var i, a, n, o, s = Object(u.a)(.5 * e);
        if (t < c.b)
          return s;
        for (var r = t * t, l = 1; l <= 25; l++)
          if (s += o = .5 * (n = 1 - (a = t * (i = Math.sin(s))) * a) * n / Math.cos(s) * (e / (1 - r) - i / n + .5 / t * Math.log((1 - a) / (1 + a))),
            Math.abs(o) <= 1e-7)
            return s;
        return null
      }
    }
  }, function (t, e, i) {
    "use strict";
    var u = i(2),
      r = i(5),
      c = i(0);
    e.a = {
      init: function () {
        this.sin_p14 = Math.sin(this.lat0),
          this.cos_p14 = Math.cos(this.lat0),
          this.infinity_dist = 1e3 * this.a,
          this.rc = 1
      },
      forward: function (t) {
        var e, i, a, n, o, s, r, l = t.x,
          h = t.y;
        return a = Object(u.a)(l - this.long0),
          e = Math.sin(h),
          i = Math.cos(h),
          n = Math.cos(a),
          r = 0 < (o = this.sin_p14 * e + this.cos_p14 * i * n) || Math.abs(o) <= c.b ? (s = this.x0 + 1 * this.a * i * Math.sin(a) / o,
            this.y0 + 1 * this.a * (this.cos_p14 * e - this.sin_p14 * i * n) / o) : (s = this.x0 + this.infinity_dist * i * Math.sin(a),
            this.y0 + this.infinity_dist * (this.cos_p14 * e - this.sin_p14 * i * n)),
          t.x = s,
          t.y = r,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s;
        return t.x = (t.x - this.x0) / this.a,
          t.y = (t.y - this.y0) / this.a,
          t.x /= this.k0,
          t.y /= this.k0,
          o = (e = Math.sqrt(t.x * t.x + t.y * t.y)) ? (n = Math.atan2(e, this.rc),
            i = Math.sin(n),
            a = Math.cos(n),
            s = Object(r.a)(a * this.sin_p14 + t.y * i * this.cos_p14 / e),
            o = Math.atan2(t.x * i, e * this.cos_p14 * a - t.y * this.sin_p14 * i),
            Object(u.a)(this.long0 + o)) : (s = this.phic0,
            0),
          t.x = o,
          t.y = s,
          t
      },
      names: ["gnom"]
    }
  }, function (t, e, i) {
    "use strict";
    var r = i(2),
      l = i(22),
      a = i(4),
      n = i(108);
    e.a = {
      init: function () {
        this.sphere || (this.k0 = Object(a.a)(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)))
      },
      forward: function (t) {
        var e, i, a = t.x,
          n = t.y,
          o = Object(r.a)(a - this.long0);
        if (this.sphere)
          e = this.x0 + this.a * o * Math.cos(this.lat_ts),
          i = this.y0 + this.a * Math.sin(n) / Math.cos(this.lat_ts);
        else {
          var s = Object(l.a)(this.e, Math.sin(n));
          e = this.x0 + this.a * this.k0 * o,
            i = this.y0 + this.a * s * .5 / this.k0
        }
        return t.x = e,
          t.y = i,
          t
      },
      inverse: function (t) {
        var e, i;
        return t.x -= this.x0,
          t.y -= this.y0,
          this.sphere ? (e = Object(r.a)(this.long0 + t.x / this.a / Math.cos(this.lat_ts)),
            i = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (i = Object(n.a)(this.e, 2 * t.y * this.k0 / this.a),
            e = Object(r.a)(this.long0 + t.x / (this.a * this.k0))),
          t.x = e,
          t.y = i,
          t
      },
      names: ["cea"]
    }
  }, function (t, e, i) {
    "use strict";
    var h = i(0);
    e.a = function (t, e) {
      var i = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
      if (Math.abs(Math.abs(e) - i) < 1e-6)
        return e < 0 ? -1 * h.d : h.d;
      for (var a, n, o, s, r = Math.asin(.5 * e), l = 0; l < 30; l++)
        if (n = Math.sin(r),
          o = Math.cos(r),
          s = t * n,
          r += a = Math.pow(1 - s * s, 2) / (2 * o) * (e / (1 - t * t) - n / (1 - s * s) + .5 / t * Math.log((1 - s) / (1 + s))),
          Math.abs(a) <= 1e-10)
          return r;
      return NaN
    }
  }, function (t, e, i) {
    "use strict";
    var o = i(2),
      s = i(8);
    e.a = {
      init: function () {
        this.x0 = this.x0 || 0,
          this.y0 = this.y0 || 0,
          this.lat0 = this.lat0 || 0,
          this.long0 = this.long0 || 0,
          this.lat_ts = this.lat_ts || 0,
          this.title = this.title || "Equidistant Cylindrical (Plate Carre)",
          this.rc = Math.cos(this.lat_ts)
      },
      forward: function (t) {
        var e = t.x,
          i = t.y,
          a = Object(o.a)(e - this.long0),
          n = Object(s.a)(i - this.lat0);
        return t.x = this.x0 + this.a * a * this.rc,
          t.y = this.y0 + this.a * n,
          t
      },
      inverse: function (t) {
        var e = t.x,
          i = t.y;
        return t.x = Object(o.a)(this.long0 + (e - this.x0) / (this.a * this.rc)),
          t.y = Object(s.a)(this.lat0 + (i - this.y0) / this.a),
          t
      },
      names: ["Equirectangular", "Equidistant_Cylindrical", "eqc"]
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(13),
      n = i(14),
      o = i(15),
      s = i(16),
      m = i(2),
      l = i(8),
      g = i(12),
      v = i(0),
      h = i(20);
    e.a = {
      init: function () {
        this.temp = this.b / this.a,
          this.es = 1 - Math.pow(this.temp, 2),
          this.e = Math.sqrt(this.es),
          this.e0 = Object(a.a)(this.es),
          this.e1 = Object(n.a)(this.es),
          this.e2 = Object(o.a)(this.es),
          this.e3 = Object(s.a)(this.es),
          this.ml0 = this.a * Object(g.a)(this.e0, this.e1, this.e2, this.e3, this.lat0)
      },
      forward: function (t) {
        var e, i, a, n = t.x,
          o = t.y,
          s = Object(m.a)(n - this.long0);
        if (a = s * Math.sin(o),
          this.sphere)
          i = Math.abs(o) <= v.b ? (e = this.a * s,
            -1 * this.a * this.lat0) : (e = this.a * Math.sin(a) / Math.tan(o),
            this.a * (Object(l.a)(o - this.lat0) + (1 - Math.cos(a)) / Math.tan(o)));
        else if (Math.abs(o) <= v.b)
          e = this.a * s,
          i = -1 * this.ml0;
        else {
          var r = Object(h.a)(this.a, this.e, Math.sin(o)) / Math.tan(o);
          e = r * Math.sin(a),
            i = this.a * Object(g.a)(this.e0, this.e1, this.e2, this.e3, o) - this.ml0 + r * (1 - Math.cos(a))
        }
        return t.x = e + this.x0,
          t.y = i + this.y0,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s, r, l, h;
        if (a = t.x - this.x0,
          n = t.y - this.y0,
          this.sphere)
          if (Math.abs(n + this.a * this.lat0) <= v.b)
            e = Object(m.a)(a / this.a + this.long0),
            i = 0;
          else {
            var u;
            for (s = this.lat0 + n / this.a,
              r = a * a / this.a / this.a + s * s,
              l = s,
              o = 20; o; --o)
              if (l += h = -1 * (s * (l * (u = Math.tan(l)) + 1) - l - .5 * (l * l + r) * u) / ((l - s) / u - 1),
                Math.abs(h) <= v.b) {
                i = l;
                break
              }
            e = Object(m.a)(this.long0 + Math.asin(a * Math.tan(l) / this.a) / Math.sin(i))
          }
        else if (Math.abs(n + this.ml0) <= v.b)
          i = 0,
          e = Object(m.a)(this.long0 + a / this.a);
        else {
          var c, d, f, _, p;
          for (s = (this.ml0 + n) / this.a,
            r = a * a / this.a / this.a + s * s,
            l = s,
            o = 20; o; --o)
            if (p = this.e * Math.sin(l),
              c = Math.sqrt(1 - p * p) * Math.tan(l),
              d = this.a * Object(g.a)(this.e0, this.e1, this.e2, this.e3, l),
              f = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l),
              l -= h = (s * (c * (_ = d / this.a) + 1) - _ - .5 * c * (_ * _ + r)) / (this.es * Math.sin(2 * l) * (_ * _ + r - 2 * s * _) / (4 * c) + (s - _) * (c * f - 2 / Math.sin(2 * l)) - f),
              Math.abs(h) <= v.b) {
              i = l;
              break
            }
          c = Math.sqrt(1 - this.es * Math.pow(Math.sin(i), 2)) * Math.tan(i),
            e = Object(m.a)(this.long0 + Math.asin(a * c / this.a) / Math.sin(i))
        }
        return t.x = e,
          t.y = i,
          t
      },
      names: ["Polyconic", "poly"]
    }
  }, function (t, e, i) {
    "use strict";
    var C = i(0);
    e.a = {
      init: function () {
        this.A = [],
          this.A[1] = .6399175073,
          this.A[2] = -.1358797613,
          this.A[3] = .063294409,
          this.A[4] = -.02526853,
          this.A[5] = .0117879,
          this.A[6] = -.0055161,
          this.A[7] = .0026906,
          this.A[8] = -.001333,
          this.A[9] = 67e-5,
          this.A[10] = -34e-5,
          this.B_re = [],
          this.B_im = [],
          this.B_re[1] = .7557853228,
          this.B_im[1] = 0,
          this.B_re[2] = .249204646,
          this.B_im[2] = .003371507,
          this.B_re[3] = -.001541739,
          this.B_im[3] = .04105856,
          this.B_re[4] = -.10162907,
          this.B_im[4] = .01727609,
          this.B_re[5] = -.26623489,
          this.B_im[5] = -.36249218,
          this.B_re[6] = -.6870983,
          this.B_im[6] = -1.1651967,
          this.C_re = [],
          this.C_im = [],
          this.C_re[1] = 1.3231270439,
          this.C_im[1] = 0,
          this.C_re[2] = -.577245789,
          this.C_im[2] = -.007809598,
          this.C_re[3] = .508307513,
          this.C_im[3] = -.112208952,
          this.C_re[4] = -.15094762,
          this.C_im[4] = .18200602,
          this.C_re[5] = 1.01418179,
          this.C_im[5] = 1.64497696,
          this.C_re[6] = 1.9660549,
          this.C_im[6] = 2.5127645,
          this.D = [],
          this.D[1] = 1.5627014243,
          this.D[2] = .5185406398,
          this.D[3] = -.03333098,
          this.D[4] = -.1052906,
          this.D[5] = -.0368594,
          this.D[6] = .007317,
          this.D[7] = .0122,
          this.D[8] = .00394,
          this.D[9] = -.0013
      },
      forward: function (t) {
        var e, i = t.x,
          a = t.y - this.lat0,
          n = i - this.long0,
          o = a / C.l * 1e-5,
          s = n,
          r = 1,
          l = 0;
        for (e = 1; e <= 10; e++)
          r *= o,
          l += this.A[e] * r;
        var h, u = l,
          c = s,
          d = 1,
          f = 0,
          _ = 0,
          p = 0;
        for (e = 1; e <= 6; e++)
          h = f * u + d * c,
          d = d * u - f * c,
          f = h,
          _ = _ + this.B_re[e] * d - this.B_im[e] * f,
          p = p + this.B_im[e] * d + this.B_re[e] * f;
        return t.x = p * this.a + this.x0,
          t.y = _ * this.a + this.y0,
          t
      },
      inverse: function (t) {
        var e, i, a = t.x,
          n = t.y,
          o = a - this.x0,
          s = (n - this.y0) / this.a,
          r = o / this.a,
          l = 1,
          h = 0,
          u = 0,
          c = 0;
        for (e = 1; e <= 6; e++)
          i = h * s + l * r,
          l = l * s - h * r,
          h = i,
          u = u + this.C_re[e] * l - this.C_im[e] * h,
          c = c + this.C_im[e] * l + this.C_re[e] * h;
        for (var d = 0; d < this.iterations; d++) {
          var f, _ = u,
            p = c,
            m = s,
            g = r;
          for (e = 2; e <= 6; e++)
            f = p * u + _ * c,
            _ = _ * u - p * c,
            p = f,
            m += (e - 1) * (this.B_re[e] * _ - this.B_im[e] * p),
            g += (e - 1) * (this.B_im[e] * _ + this.B_re[e] * p);
          _ = 1,
            p = 0;
          var v = this.B_re[1],
            y = this.B_im[1];
          for (e = 2; e <= 6; e++)
            f = p * u + _ * c,
            _ = _ * u - p * c,
            p = f,
            v += e * (this.B_re[e] * _ - this.B_im[e] * p),
            y += e * (this.B_im[e] * _ + this.B_re[e] * p);
          var b = v * v + y * y;
          u = (m * v + g * y) / b,
            c = (g * v - m * y) / b
        }
        var w = u,
          M = c,
          L = 1,
          x = 0;
        for (e = 1; e <= 9; e++)
          L *= w,
          x += this.D[e] * L;
        var k = this.lat0 + x * C.l * 1e5,
          E = this.long0 + M;
        return t.x = E,
          t.y = k,
          t
      },
      names: ["New_Zealand_Map_Grid", "nzmg"]
    }
  }, function (t, e, i) {
    "use strict";
    var s = i(2);
    e.a = {
      init: function () {},
      forward: function (t) {
        var e = t.x,
          i = t.y,
          a = Object(s.a)(e - this.long0),
          n = this.x0 + this.a * a,
          o = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + i / 2.5)) * 1.25;
        return t.x = n,
          t.y = o,
          t
      },
      inverse: function (t) {
        t.x -= this.x0,
          t.y -= this.y0;
        var e = Object(s.a)(this.long0 + t.x / this.a),
          i = 2.5 * (Math.atan(Math.exp(.8 * t.y / this.a)) - Math.PI / 4);
        return t.x = e,
          t.y = i,
          t
      },
      names: ["Miller_Cylindrical", "mill"]
    }
  }, function (t, e, i) {
    "use strict";
    var u = i(2),
      o = i(8),
      a = i(33),
      c = i(19),
      s = i(34),
      d = i(0),
      r = i(5);
    e.a = {
      init: function () {
        this.sphere ? (this.n = 1,
          this.m = 0,
          this.es = 0,
          this.C_y = Math.sqrt((this.m + 1) / this.n),
          this.C_x = this.C_y / (this.m + 1)) : this.en = Object(a.a)(this.es)
      },
      forward: function (t) {
        var e, i, a = t.x,
          n = t.y;
        if (a = Object(u.a)(a - this.long0),
          this.sphere) {
          if (this.m)
            for (var o = this.n * Math.sin(n), s = 20; s; --s) {
              var r = (this.m * n + Math.sin(n) - o) / (this.m + Math.cos(n));
              if (n -= r,
                Math.abs(r) < d.b)
                break
            }
          else
            n = 1 !== this.n ? Math.asin(this.n * Math.sin(n)) : n;
          e = this.a * this.C_x * a * (this.m + Math.cos(n)),
            i = this.a * this.C_y * n
        } else {
          var l = Math.sin(n),
            h = Math.cos(n);
          i = this.a * Object(c.a)(n, l, h, this.en),
            e = this.a * a * h / Math.sqrt(1 - this.es * l * l)
        }
        return t.x = e,
          t.y = i,
          t
      },
      inverse: function (t) {
        var e, i, a, n;
        return t.x -= this.x0,
          a = t.x / this.a,
          t.y -= this.y0,
          e = t.y / this.a,
          this.sphere ? (e /= this.C_y,
            a /= this.C_x * (this.m + Math.cos(e)),
            this.m ? e = Object(r.a)((this.m * e + Math.sin(e)) / this.n) : 1 !== this.n && (e = Object(r.a)(Math.sin(e) / this.n)),
            a = Object(u.a)(a + this.long0),
            e = Object(o.a)(e)) : (e = Object(s.a)(t.y / this.a, this.es, this.en),
            (n = Math.abs(e)) < d.d ? (n = Math.sin(e),
              i = this.long0 + t.x * Math.sqrt(1 - this.es * n * n) / (this.a * Math.cos(e)),
              a = Object(u.a)(i)) : n - d.b < d.d && (a = this.long0)),
          t.x = a,
          t.y = e,
          t
      },
      names: ["Sinusoidal", "sinu"]
    }
  }, function (t, e, i) {
    "use strict";
    var h = i(2),
      u = i(0);
    e.a = {
      init: function () {},
      forward: function (t) {
        for (var e = t.x, i = t.y, a = Object(h.a)(e - this.long0), n = i, o = Math.PI * Math.sin(i);;) {
          var s = -(n + Math.sin(n) - o) / (1 + Math.cos(n));
          if (n += s,
            Math.abs(s) < u.b)
            break
        }
        n /= 2,
          Math.PI / 2 - Math.abs(i) < u.b && (a = 0);
        var r = .900316316158 * this.a * a * Math.cos(n) + this.x0,
          l = 1.4142135623731 * this.a * Math.sin(n) + this.y0;
        return t.x = r,
          t.y = l,
          t
      },
      inverse: function (t) {
        var e, i;
        t.x -= this.x0,
          t.y -= this.y0,
          i = t.y / (1.4142135623731 * this.a),
          .999999999999 < Math.abs(i) && (i = .999999999999),
          e = Math.asin(i);
        var a = Object(h.a)(this.long0 + t.x / (.900316316158 * this.a * Math.cos(e)));
        a < -Math.PI && (a = -Math.PI),
          a > Math.PI && (a = Math.PI),
          i = (2 * e + Math.sin(2 * e)) / Math.PI,
          1 < Math.abs(i) && (i = 1);
        var n = Math.asin(i);
        return t.x = a,
          t.y = n,
          t
      },
      names: ["Mollweide", "moll"]
    }
  }, function (t, e, i) {
    "use strict";
    var a = i(13),
      n = i(14),
      o = i(15),
      s = i(16),
      r = i(4),
      l = i(12),
      h = i(2),
      u = i(8),
      c = i(21),
      d = i(0);
    e.a = {
      init: function () {
        Math.abs(this.lat1 + this.lat2) < d.b || (this.lat2 = this.lat2 || this.lat1,
          this.temp = this.b / this.a,
          this.es = 1 - Math.pow(this.temp, 2),
          this.e = Math.sqrt(this.es),
          this.e0 = Object(a.a)(this.es),
          this.e1 = Object(n.a)(this.es),
          this.e2 = Object(o.a)(this.es),
          this.e3 = Object(s.a)(this.es),
          this.sinphi = Math.sin(this.lat1),
          this.cosphi = Math.cos(this.lat1),
          this.ms1 = Object(r.a)(this.e, this.sinphi, this.cosphi),
          this.ml1 = Object(l.a)(this.e0, this.e1, this.e2, this.e3, this.lat1),
          Math.abs(this.lat1 - this.lat2) < d.b ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2),
            this.cosphi = Math.cos(this.lat2),
            this.ms2 = Object(r.a)(this.e, this.sinphi, this.cosphi),
            this.ml2 = Object(l.a)(this.e0, this.e1, this.e2, this.e3, this.lat2),
            this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)),
          this.g = this.ml1 + this.ms1 / this.ns,
          this.ml0 = Object(l.a)(this.e0, this.e1, this.e2, this.e3, this.lat0),
          this.rh = this.a * (this.g - this.ml0))
      },
      forward: function (t) {
        var e, i = t.x,
          a = t.y;
        if (this.sphere)
          e = this.a * (this.g - a);
        else {
          var n = Object(l.a)(this.e0, this.e1, this.e2, this.e3, a);
          e = this.a * (this.g - n)
        }
        var o = this.ns * Object(h.a)(i - this.long0),
          s = this.x0 + e * Math.sin(o),
          r = this.y0 + this.rh - e * Math.cos(o);
        return t.x = s,
          t.y = r,
          t
      },
      inverse: function (t) {
        var e, i, a, n;
        t.x -= this.x0,
          t.y = this.rh - t.y + this.y0,
          e = 0 <= this.ns ? (i = Math.sqrt(t.x * t.x + t.y * t.y),
            1) : (i = -Math.sqrt(t.x * t.x + t.y * t.y),
            -1);
        var o = 0;
        if (0 !== i && (o = Math.atan2(e * t.x, e * t.y)),
          this.sphere)
          return n = Object(h.a)(this.long0 + o / this.ns),
            a = Object(u.a)(this.g - i / this.a),
            t.x = n,
            t.y = a,
            t;
        var s = this.g - i / this.a;
        return a = Object(c.a)(s, this.e0, this.e1, this.e2, this.e3),
          n = Object(h.a)(this.long0 + o / this.ns),
          t.x = n,
          t.y = a,
          t
      },
      names: ["Equidistant_Conic", "eqdc"]
    }
  }, function (t, e, i) {
    "use strict";
    var g = i(2),
      v = i(0),
      y = i(5);
    e.a = {
      init: function () {
        this.R = this.a
      },
      forward: function (t) {
        var e, i, a = t.x,
          n = t.y,
          o = Object(g.a)(a - this.long0);
        Math.abs(n) <= v.b && (e = this.x0 + this.R * o,
          i = this.y0);
        var s = Object(y.a)(2 * Math.abs(n / Math.PI));
        (Math.abs(o) <= v.b || Math.abs(Math.abs(n) - v.d) <= v.b) && (e = this.x0,
          i = 0 <= n ? this.y0 + Math.PI * this.R * Math.tan(.5 * s) : this.y0 + Math.PI * this.R * -Math.tan(.5 * s));
        var r = .5 * Math.abs(Math.PI / o - o / Math.PI),
          l = r * r,
          h = Math.sin(s),
          u = Math.cos(s),
          c = u / (h + u - 1),
          d = c * c,
          f = c * (2 / h - 1),
          _ = f * f,
          p = Math.PI * this.R * (r * (c - _) + Math.sqrt(l * (c - _) * (c - _) - (_ + l) * (d - _))) / (_ + l);
        o < 0 && (p = -p),
          e = this.x0 + p;
        var m = l + c;
        return p = Math.PI * this.R * (f * m - r * Math.sqrt((_ + l) * (l + 1) - m * m)) / (_ + l),
          i = 0 <= n ? this.y0 + p : this.y0 - p,
          t.x = e,
          t.y = i,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s, r, l, h, u, c, d;
        return t.x -= this.x0,
          t.y -= this.y0,
          c = Math.PI * this.R,
          o = (a = t.x / c) * a + (n = t.y / c) * n,
          c = 3 * (n * n / (l = -2 * (s = -Math.abs(n) * (1 + o)) + 1 + 2 * n * n + o * o) + (2 * (r = s - 2 * n * n + a * a) * r * r / l / l / l - 9 * s * r / l / l) / 27) / (h = (s - r * r / 3 / l) / l) / (u = 2 * Math.sqrt(-h / 3)),
          1 < Math.abs(c) && (c = 0 <= c ? 1 : -1),
          d = Math.acos(c) / 3,
          i = 0 <= t.y ? (-u * Math.cos(d + Math.PI / 3) - r / 3 / l) * Math.PI : -(-u * Math.cos(d + Math.PI / 3) - r / 3 / l) * Math.PI,
          e = Math.abs(a) < v.b ? this.long0 : Object(g.a)(this.long0 + Math.PI * (o - 1 + Math.sqrt(1 + 2 * (a * a - n * n) + o * o)) / 2 / a),
          t.x = e,
          t.y = i,
          t
      },
      names: ["Van_der_Grinten_I", "VanDerGrinten", "vandg"]
    }
  }, function (t, e, i) {
    "use strict";
    var P = i(2),
      T = i(0),
      S = i(12),
      D = i(13),
      O = i(14),
      z = i(15),
      I = i(16),
      A = i(20),
      x = i(5),
      k = i(21);
    e.a = {
      init: function () {
        this.sin_p12 = Math.sin(this.lat0),
          this.cos_p12 = Math.cos(this.lat0)
      },
      forward: function (t) {
        var e, i, a, n, o, s, r, l, h, u, c, d, f, _, p, m, g, v, y, b, w, M, L = t.x,
          x = t.y,
          k = Math.sin(t.y),
          E = Math.cos(t.y),
          C = Object(P.a)(L - this.long0);
        return this.sphere ? Math.abs(this.sin_p12 - 1) <= T.b ? (t.x = this.x0 + this.a * (T.d - x) * Math.sin(C),
            t.y = this.y0 - this.a * (T.d - x) * Math.cos(C)) : Math.abs(this.sin_p12 + 1) <= T.b ? (t.x = this.x0 + this.a * (T.d + x) * Math.sin(C),
            t.y = this.y0 + this.a * (T.d + x) * Math.cos(C)) : (v = this.sin_p12 * k + this.cos_p12 * E * Math.cos(C),
            g = (m = Math.acos(v)) / Math.sin(m),
            t.x = this.x0 + this.a * g * E * Math.sin(C),
            t.y = this.y0 + this.a * g * (this.cos_p12 * k - this.sin_p12 * E * Math.cos(C))) : (e = Object(D.a)(this.es),
            i = Object(O.a)(this.es),
            a = Object(z.a)(this.es),
            n = Object(I.a)(this.es),
            Math.abs(this.sin_p12 - 1) <= T.b ? (o = this.a * Object(S.a)(e, i, a, n, T.d),
              s = this.a * Object(S.a)(e, i, a, n, x),
              t.x = this.x0 + (o - s) * Math.sin(C),
              t.y = this.y0 - (o - s) * Math.cos(C)) : Math.abs(this.sin_p12 + 1) <= T.b ? (o = this.a * Object(S.a)(e, i, a, n, T.d),
              s = this.a * Object(S.a)(e, i, a, n, x),
              t.x = this.x0 + (o + s) * Math.sin(C),
              t.y = this.y0 + (o + s) * Math.cos(C)) : (r = k / E,
              l = Object(A.a)(this.a, this.e, this.sin_p12),
              h = Object(A.a)(this.a, this.e, k),
              u = Math.atan((1 - this.es) * r + this.es * l * this.sin_p12 / (h * E)),
              y = 0 === (c = Math.atan2(Math.sin(C), this.cos_p12 * Math.tan(u) - this.sin_p12 * Math.cos(C))) ? Math.asin(this.cos_p12 * Math.sin(u) - this.sin_p12 * Math.cos(u)) : Math.abs(Math.abs(c) - Math.PI) <= T.b ? -Math.asin(this.cos_p12 * Math.sin(u) - this.sin_p12 * Math.cos(u)) : Math.asin(Math.sin(C) * Math.cos(u) / Math.sin(c)),
              d = this.e * this.sin_p12 / Math.sqrt(1 - this.es),
              m = l * y * (1 - (b = y * y) * (p = (f = this.e * this.cos_p12 * Math.cos(c) / Math.sqrt(1 - this.es)) * f) * (1 - p) / 6 + (w = b * y) / 8 * (_ = d * f) * (1 - 2 * p) + (M = w * y) / 120 * (p * (4 - 7 * p) - 3 * d * d * (1 - 7 * p)) - M * y / 48 * _),
              t.x = this.x0 + m * Math.sin(c),
              t.y = this.y0 + m * Math.cos(c))),
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s, r, l, h, u, c, d, f, _, p, m, g, v, y, b, w, M, L;
        if (t.x -= this.x0,
          t.y -= this.y0,
          this.sphere) {
          if ((e = Math.sqrt(t.x * t.x + t.y * t.y)) > 2 * T.d * this.a)
            return;
          return i = e / this.a,
            a = Math.sin(i),
            n = Math.cos(i),
            o = this.long0,
            Math.abs(e) <= T.b ? s = this.lat0 : (s = Object(x.a)(n * this.sin_p12 + t.y * a * this.cos_p12 / e),
              r = Math.abs(this.lat0) - T.d,
              o = Math.abs(r) <= T.b ? 0 <= this.lat0 ? Object(P.a)(this.long0 + Math.atan2(t.x, -t.y)) : Object(P.a)(this.long0 - Math.atan2(-t.x, t.y)) : Object(P.a)(this.long0 + Math.atan2(t.x * a, e * this.cos_p12 * n - t.y * this.sin_p12 * a))),
            t.x = o,
            t.y = s,
            t
        }
        return l = Object(D.a)(this.es),
          h = Object(O.a)(this.es),
          u = Object(z.a)(this.es),
          c = Object(I.a)(this.es),
          Math.abs(this.sin_p12 - 1) <= T.b ? (f = (d = this.a * Object(S.a)(l, h, u, c, T.d)) - (e = Math.sqrt(t.x * t.x + t.y * t.y)),
            s = Object(k.a)(f / this.a, l, h, u, c),
            o = Object(P.a)(this.long0 + Math.atan2(t.x, -1 * t.y))) : Math.abs(this.sin_p12 + 1) <= T.b ? (d = this.a * Object(S.a)(l, h, u, c, T.d),
            f = (e = Math.sqrt(t.x * t.x + t.y * t.y)) - d,
            s = Object(k.a)(f / this.a, l, h, u, c),
            o = Object(P.a)(this.long0 + Math.atan2(t.x, t.y))) : (e = Math.sqrt(t.x * t.x + t.y * t.y),
            m = Math.atan2(t.x, t.y),
            _ = Object(A.a)(this.a, this.e, this.sin_p12),
            g = Math.cos(m),
            y = -(v = this.e * this.cos_p12 * g) * v / (1 - this.es),
            b = 3 * this.es * (1 - y) * this.sin_p12 * this.cos_p12 * g / (1 - this.es),
            L = 1 - y * (M = (w = e / _) - y * (1 + y) * Math.pow(w, 3) / 6 - b * (1 + 3 * y) * Math.pow(w, 4) / 24) * M / 2 - w * M * M * M / 6,
            p = Math.asin(this.sin_p12 * Math.cos(M) + this.cos_p12 * Math.sin(M) * g),
            o = Object(P.a)(this.long0 + Math.asin(Math.sin(m) * Math.sin(M) / Math.cos(p))),
            s = Math.atan((1 - this.es * L * this.sin_p12 / Math.sin(p)) * Math.tan(p) / (1 - this.es))),
          t.x = o,
          t.y = s,
          t
      },
      names: ["Azimuthal_Equidistant", "aeqd"]
    }
  }, function (t, e, i) {
    "use strict";
    var u = i(2),
      l = i(5),
      c = i(0);
    e.a = {
      init: function () {
        this.sin_p14 = Math.sin(this.lat0),
          this.cos_p14 = Math.cos(this.lat0)
      },
      forward: function (t) {
        var e, i, a, n, o, s, r, l = t.x,
          h = t.y;
        return a = Object(u.a)(l - this.long0),
          e = Math.sin(h),
          i = Math.cos(h),
          n = Math.cos(a),
          (0 < (o = this.sin_p14 * e + this.cos_p14 * i * n) || Math.abs(o) <= c.b) && (s = 1 * this.a * i * Math.sin(a),
            r = this.y0 + 1 * this.a * (this.cos_p14 * e - this.sin_p14 * i * n)),
          t.x = s,
          t.y = r,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s, r;
        return t.x -= this.x0,
          t.y -= this.y0,
          e = Math.sqrt(t.x * t.x + t.y * t.y),
          i = Object(l.a)(e / this.a),
          a = Math.sin(i),
          n = Math.cos(i),
          s = this.long0,
          Math.abs(e) <= c.b ? r = this.lat0 : (r = Object(l.a)(n * this.sin_p14 + t.y * a * this.cos_p14 / e),
            o = Math.abs(this.lat0) - c.d,
            s = Math.abs(o) <= c.b ? 0 <= this.lat0 ? Object(u.a)(this.long0 + Math.atan2(t.x, -t.y)) : Object(u.a)(this.long0 - Math.atan2(-t.x, t.y)) : Object(u.a)(this.long0 + Math.atan2(t.x * a, e * this.cos_p14 * n - t.y * this.sin_p14 * a))),
          t.x = s,
          t.y = r,
          t
      },
      names: ["ortho"]
    }
  }, function (t, e, i) {
    "use strict";

    function p(t, e, i, a) {
      var n;
      return t < y.b ? (a.value = b.AREA_0,
          n = 0) : (n = Math.atan2(e, i),
          Math.abs(n) <= y.c ? a.value = b.AREA_0 : n > y.c && n <= y.d + y.c ? (a.value = b.AREA_1,
            n -= y.d) : n > y.d + y.c || n <= -(y.d + y.c) ? (a.value = b.AREA_2,
            n = 0 <= n ? n - y.n : n + y.n) : (a.value = b.AREA_3,
            n += y.d)),
        n
    }

    function v(t, e) {
      var i = t + e;
      return i < -y.n ? i += y.o : i > +y.n && (i -= y.o),
        i
    }
    var y = i(0),
      b = {
        AREA_0: 1,
        AREA_1: 2,
        AREA_2: 3,
        AREA_3: 4
      };
    e.a = {
      init: function () {
        this.x0 = this.x0 || 0,
          this.y0 = this.y0 || 0,
          this.lat0 = this.lat0 || 0,
          this.long0 = this.long0 || 0,
          this.lat_ts = this.lat_ts || 0,
          this.title = this.title || "Quadrilateralized Spherical Cube",
          this.lat0 >= y.d - y.c / 2 ? this.face = VRa.TOP : this.lat0 <= -(y.d - y.c / 2) ? this.face = VRa.BOTTOM : Math.abs(this.long0) <= y.c ? this.face = VRa.FRONT : Math.abs(this.long0) <= y.d + y.c ? this.face = 0 < this.long0 ? VRa.RIGHT : VRa.LEFT : this.face = VRa.BACK,
          0 !== this.es && (this.one_minus_f = 1 - (this.a - this.b) / this.a,
            this.one_minus_f_squared = this.one_minus_f * this.one_minus_f)
      },
      forward: function (t) {
        var e, i, a, n, o, s, r = {
            x: 0,
            y: 0
          },
          l = {
            value: 0
          };
        if (t.x -= this.long0,
          e = 0 !== this.es ? Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : t.y,
          i = t.x,
          this.face === VRa.TOP)
          n = y.d - e,
          a = i >= y.c && i <= y.d + y.c ? (l.value = b.AREA_0,
            i - y.d) : i > y.d + y.c || i <= -(y.d + y.c) ? (l.value = b.AREA_1,
            0 < i ? i - y.n : i + y.n) : i > -(y.d + y.c) && i <= -y.c ? (l.value = b.AREA_2,
            i + y.d) : (l.value = b.AREA_3,
            i);
        else if (this.face === VRa.BOTTOM)
          n = y.d + e,
          a = i >= y.c && i <= y.d + y.c ? (l.value = b.AREA_0,
            -i + y.d) : i < y.c && i >= -y.c ? (l.value = b.AREA_1,
            -i) : i < -y.c && i >= -(y.d + y.c) ? (l.value = b.AREA_2,
            -i - y.d) : (l.value = b.AREA_3,
            0 < i ? -i + y.n : -i - y.n);
        else {
          var h, u, c, d, f, _;
          this.face === VRa.RIGHT ? i = v(i, +y.d) : this.face === VRa.BACK ? i = v(i, +y.n) : this.face === VRa.LEFT && (i = v(i, -y.d)),
            d = Math.sin(e),
            f = Math.cos(e),
            _ = Math.sin(i),
            h = f * Math.cos(i),
            u = f * _,
            c = d,
            this.face === VRa.FRONT ? a = p(n = Math.acos(h), c, u, l) : this.face === VRa.RIGHT ? a = p(n = Math.acos(u), c, -h, l) : this.face === VRa.BACK ? a = p(n = Math.acos(-h), c, -u, l) : this.face === VRa.LEFT ? a = p(n = Math.acos(-u), c, h, l) : (n = a = 0,
              l.value = b.AREA_0)
        }
        return s = Math.atan(12 / y.n * (a + Math.acos(Math.sin(a) * Math.cos(y.c)) - y.d)),
          o = Math.sqrt((1 - Math.cos(n)) / (Math.cos(s) * Math.cos(s)) / (1 - Math.cos(Math.atan(1 / Math.cos(a))))),
          l.value === b.AREA_1 ? s += y.d : l.value === b.AREA_2 ? s += y.n : l.value === b.AREA_3 && (s += 1.5 * y.n),
          r.x = o * Math.cos(s),
          r.y = o * Math.sin(s),
          r.x = r.x * this.a + this.x0,
          r.y = r.y * this.a + this.y0,
          t.x = r.x,
          t.y = r.y,
          t
      },
      inverse: function (t) {
        var e, i, a, n, o, s, r, l, h, u, c, d, f = {
            lam: 0,
            phi: 0
          },
          _ = {
            value: 0
          };
        if (t.x = (t.x - this.x0) / this.a,
          t.y = (t.y - this.y0) / this.a,
          i = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)),
          e = Math.atan2(t.y, t.x),
          0 <= t.x && t.x >= Math.abs(t.y) ? _.value = b.AREA_0 : 0 <= t.y && t.y >= Math.abs(t.x) ? (_.value = b.AREA_1,
            e -= y.d) : t.x < 0 && -t.x >= Math.abs(t.y) ? (_.value = b.AREA_2,
            e = e < 0 ? e + y.n : e - y.n) : (_.value = b.AREA_3,
            e += y.d),
          h = y.n / 12 * Math.tan(e),
          o = Math.sin(h) / (Math.cos(h) - 1 / Math.sqrt(2)),
          s = Math.atan(o),
          (r = 1 - (a = Math.cos(e)) * a * (n = Math.tan(i)) * n * (1 - Math.cos(Math.atan(1 / Math.cos(s))))) < -1 ? r = -1 : 1 < r && (r = 1),
          this.face === VRa.TOP)
          l = Math.acos(r),
          f.phi = y.d - l,
          _.value === b.AREA_0 ? f.lam = s + y.d : _.value === b.AREA_1 ? f.lam = s < 0 ? s + y.n : s - y.n : _.value === b.AREA_2 ? f.lam = s - y.d : f.lam = s;
        else if (this.face === VRa.BOTTOM)
          l = Math.acos(r),
          f.phi = l - y.d,
          _.value === b.AREA_0 ? f.lam = -s + y.d : _.value === b.AREA_1 ? f.lam = -s : _.value === b.AREA_2 ? f.lam = -s - y.d : f.lam = s < 0 ? -s - y.n : -s + y.n;
        else {
          var p, m, g;
          h = (p = r) * p,
            m = 1 <= (h += (g = 1 <= h ? 0 : Math.sqrt(1 - h) * Math.sin(s)) * g) ? 0 : Math.sqrt(1 - h),
            _.value === b.AREA_1 ? (h = m,
              m = -g,
              g = h) : _.value === b.AREA_2 ? (m = -m,
              g = -g) : _.value === b.AREA_3 && (h = m,
              m = g,
              g = -h),
            this.face === VRa.RIGHT ? (h = p,
              p = -m,
              m = h) : this.face === VRa.BACK ? (p = -p,
              m = -m) : this.face === VRa.LEFT && (h = p,
              p = m,
              m = -h),
            f.phi = Math.acos(-g) - y.d,
            f.lam = Math.atan2(m, p),
            this.face === VRa.RIGHT ? f.lam = v(f.lam, -y.d) : this.face === VRa.BACK ? f.lam = v(f.lam, -y.n) : this.face === VRa.LEFT && (f.lam = v(f.lam, +y.d))
        }
        return 0 !== this.es && (u = f.phi < 0 ? 1 : 0,
            c = Math.tan(f.phi),
            d = this.b / Math.sqrt(c * c + this.one_minus_f_squared),
            f.phi = Math.atan(Math.sqrt(this.a * this.a - d * d) / (this.one_minus_f * d)),
            u && (f.phi = -f.phi)),
          f.lam += this.long0,
          t.x = f.lam,
          t.y = f.phi,
          t
      },
      names: ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"]
    }
  }, function (t, e, i) {
    "use strict";
    var o = i(0),
      s = i(2),
      r = [
        [1, 22199e-21, -715515e-10, 31103e-10],
        [.9986, -482243e-9, -24897e-9, -13309e-10],
        [.9954, -83103e-8, -448605e-10, -9.86701e-7],
        [.99, -.00135364, -59661e-9, 36777e-10],
        [.9822, -.00167442, -449547e-11, -572411e-11],
        [.973, -.00214868, -903571e-10, 1.8736e-8],
        [.96, -.00305085, -900761e-10, 164917e-11],
        [.9427, -.00382792, -653386e-10, -26154e-10],
        [.9216, -.00467746, -10457e-8, 481243e-11],
        [.8962, -.00536223, -323831e-10, -543432e-11],
        [.8679, -.00609363, -113898e-9, 332484e-11],
        [.835, -.00698325, -640253e-10, 9.34959e-7],
        [.7986, -.00755338, -500009e-10, 9.35324e-7],
        [.7597, -.00798324, -35971e-9, -227626e-11],
        [.7186, -.00851367, -701149e-10, -86303e-10],
        [.6732, -.00986209, -199569e-9, 191974e-10],
        [.6213, -.010418, 883923e-10, 624051e-11],
        [.5722, -.00906601, 182e-6, 624051e-11],
        [.5322, -.00677797, 275608e-9, 624051e-11]
      ],
      l = [
        [-520417e-23, .0124, 121431e-23, -845284e-16],
        [.062, .0124, -1.26793e-9, 4.22642e-10],
        [.124, .0124, 5.07171e-9, -1.60604e-9],
        [.186, .0123999, -1.90189e-8, 6.00152e-9],
        [.248, .0124002, 7.10039e-8, -2.24e-8],
        [.31, .0123992, -2.64997e-7, 8.35986e-8],
        [.372, .0124029, 9.88983e-7, -3.11994e-7],
        [.434, .0123893, -369093e-11, -4.35621e-7],
        [.4958, .0123198, -102252e-10, -3.45523e-7],
        [.5571, .0121916, -154081e-10, -5.82288e-7],
        [.6176, .0119938, -241424e-10, -5.25327e-7],
        [.6769, .011713, -320223e-10, -5.16405e-7],
        [.7346, .0113541, -397684e-10, -6.09052e-7],
        [.7903, .0109107, -489042e-10, -104739e-11],
        [.8435, .0103431, -64615e-9, -1.40374e-9],
        [.8936, .00969686, -64636e-9, -8547e-9],
        [.9394, .00840947, -192841e-9, -42106e-10],
        [.9761, .00616527, -256e-6, -42106e-10],
        [1, .00328947, -319159e-9, -42106e-10]
      ],
      h = o.i / 5,
      u = 1 / h,
      c = function (t, e) {
        return t[0] + e * (t[1] + e * (t[2] + e * t[3]))
      };
    e.a = {
      init: function () {
        this.x0 = this.x0 || 0,
          this.y0 = this.y0 || 0,
          this.long0 = this.long0 || 0,
          this.es = 0,
          this.title = this.title || "Robinson"
      },
      forward: function (t) {
        var e = Object(s.a)(t.x - this.long0),
          i = Math.abs(t.y),
          a = Math.floor(i * h);
        a < 0 ? a = 0 : 18 <= a && (a = 17),
          i = o.i * (i - u * a);
        var n = {
          x: c(r[a], i) * e,
          y: c(l[a], i)
        };
        return t.y < 0 && (n.y = -n.y),
          n.x = n.x * this.a * .8487 + this.x0,
          n.y = n.y * this.a * 1.3523 + this.y0,
          n
      },
      inverse: function (t) {
        var a = {
          x: (t.x - this.x0) / (.8487 * this.a),
          y: Math.abs(t.y - this.y0) / (1.3523 * this.a)
        };
        if (1 <= a.y)
          a.x /= r[18][0],
          a.y = t.y < 0 ? -o.d : o.d;
        else {
          var e = Math.floor(18 * a.y);
          for (e < 0 ? e = 0 : 18 <= e && (e = 17);;)
            if (l[e][0] > a.y)
              --e;
            else {
              if (!(l[e + 1][0] <= a.y))
                break;
              ++e
            }
          var n = l[e],
            i = 5 * (a.y - n[0]) / (l[e + 1][0] - n[0]);
          i = function (t, e, i, a) {
              for (var n = e; a; --a) {
                var o = t(n);
                if (n -= o,
                  Math.abs(o) < i)
                  break
              }
              return n
            }(function (t) {
              return (c(n, t) - a.y) / (i = t,
                (e = n)[1] + i * (2 * e[2] + 3 * i * e[3]));
              var e, i
            }, i, o.b, 100),
            a.x /= c(r[e], i),
            a.y = (5 * e + i) * o.a,
            t.y < 0 && (a.y = -a.y)
        }
        return a.x = Object(s.a)(a.x + this.long0),
          a
      },
      names: ["Robinson", "robin"]
    }
  }, function (t, e) {}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = {
      length: function (t) {
        if ("function" == typeof t.getLatLngs && (t = t.getLatLngs()),
          0 === t.length)
          return 0;
        for (var e = 0, i = 0, a = t.length - 1; i < a; i++)
          e += t[i].distanceTo(t[i + 1]);
        return e
      },
      lengthstr: function (t) {
        return this.lengthFormat(this.length(t))
      },
      lengthFormat: function (t) {
        return 1e3 < t ? (t / 1e3).toFixed(2) + "公里" : t.toFixed(0) + "米"
      },
      geodesicArea: function (t) {
        return this.area(t)
      },
      area: function (t) {
        "function" == typeof t.getLatLngs && (t = t.getLatLngs());
        var e = t.length;
        if (1 == e && (e = (t = t[0]).length),
          null == e || e < 3)
          return 0;
        for (var i = 0, a = t[e - 1].lng, n = t[e - 1].lat, o = 0; o < e; o++) {
          var s = t[o].lng,
            r = t[o].lat;
          i += this.toRadians(s - a) * (2 + Math.sin(this.toRadians(n)) + Math.sin(this.toRadians(r))),
            a = s,
            n = r
        }
        return i = 6378137 * i * 6378137 / 2,
          Math.abs(i)
      },
      toRadians: function (t) {
        return t * Math.PI / 180
      },
      areastr: function (t) {
        return this.areaFormat(this.area(t))
      },
      areaFormat: function (t) {
        return 1e6 <= t ? (t / 1e6).toFixed(2) + "平方公里" : t.toFixed(0) + "平方米"
      },
      getAngle: function (t, e) {
        if (!t || !e)
          return 0;
        var i = e.x - t.x,
          a = e.y - t.y;
        if (0 == i) {
          if (0 == a)
            return 0;
          if (0 < a)
            return 90;
          if (a < 0)
            return 270
        }
        var n = Math.atan(a / i) / Math.PI * 180;
        return i <= 0 && (n += 180),
          0 < i && a < 0 && (n += 360),
          Number(n.toFixed(0))
      }
    };
    e.measure = a
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.VirtualGrid = void 0;
    var a, n = i(1),
      l = (a = n) && a.__esModule ? a : {
        default: a
      },
      o = l.default.Layer.extend({
        options: {
          cellSize: 512,
          updateInterval: 150
        },
        initialize: function (t) {
          t = l.default.setOptions(this, t),
            this._zooming = !1
        },
        onAdd: function (t) {
          this._map = t,
            this._update = l.default.Util.throttle(this._update, this.options.updateInterval, this),
            this._reset(),
            this._update()
        },
        onRemove: function (t) {
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
              i = l.default.bounds(t.min.divideBy(e).floor(), t.max.divideBy(e).floor());
            this._removeOtherCells(i),
              this._addCells(i),
              this.fire("cellsupdated")
          }
        },
        _addCells: function (t) {
          var e, i, a, n = [],
            o = t.getCenter(),
            s = this._map.getZoom();
          for (e = t.min.y; e <= t.max.y; e++)
            for (i = t.min.x; i <= t.max.x; i++)
              (a = l.default.point(i, e)).z = s,
              this._isValidCell(a) && n.push(a);
          var r = n.length;
          if (0 !== r)
            for (this._cellsToLoad += r,
              this._cellsTotal += r,
              n.sort(function (t, e) {
                return t.distanceTo(o) - e.distanceTo(o)
              }),
              i = 0; i < r; i++)
              this._addCell(n[i])
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
          var a = this._cellCoordsToBounds(t);
          return l.default.latLngBounds(this.options.bounds).intersects(a)
        },
        _cellCoordsToBounds: function (t) {
          var e = this._map,
            i = this.options.cellSize,
            a = t.multiplyBy(i),
            n = a.add([i, i]),
            o = e.wrapLatLng(e.unproject(a, t.z)),
            s = e.wrapLatLng(e.unproject(n, t.z));
          return l.default.latLngBounds(o, s)
        },
        _cellCoordsToKey: function (t) {
          return t.x + ":" + t.y
        },
        _keyToCellCoords: function (t) {
          var e = t.split(":"),
            i = parseInt(e[0], 10),
            a = parseInt(e[1], 10);
          return l.default.point(i, a)
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
          t.x = this._wrapLng ? l.default.Util.wrapNum(t.x, this._wrapLng) : t.x,
            t.y = this._wrapLat ? l.default.Util.wrapNum(t.y, this._wrapLat) : t.y
        },
        _getCellNumBounds: function () {
          var t = this._map.getPixelWorldBounds(),
            e = this._getCellSize();
          return t ? l.default.bounds(t.min.divideBy(e).floor(), t.max.divideBy(e).ceil().subtract([1, 1])) : null
        }
      });
    l.default.VirtualGrid = o,
      l.default.virtualGrid = function (t) {
        return new o(t)
      },
      e.VirtualGrid = o
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.FlowEcharts = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = 999,
      f = window.echarts,
      r = o.default.Layer.extend({
        includes: [],
        _echartsContainer: null,
        _map: null,
        _ec: null,
        _option: null,
        _echartsOption: null,
        initialize: function (t, e) {
          this._option = e,
            this._echartsOption = t
        },
        onAdd: function (t) {
          this._map = t,
            this._initEchartsContainer(),
            t.on("moveend", this._redraw, this),
            this._redraw()
        },
        onRemove: function (t) {
          this._echartsContainer && t.getPanes().overlayPane.removeChild(this._echartsContainer),
            this._ec.dispose(),
            t.off("moveend", this._redraw, this)
        },
        addTo: function (t) {
          return t.addLayer(this),
            this
        },
        _initEchartsContainer: function () {
          var t = this._map.getSize(),
            e = document.createElement("div");
          e.style.position = "absolute",
            e.style.height = t.y + "px",
            e.style.width = t.x + "px",
            e.style.zIndex = s--,
            this._echartsContainer = e,
            this._map.getPanes().overlayPane.appendChild(this._echartsContainer)
        },
        _resetCanvasPosition: function () {
          var t = this._map.getBounds(),
            e = this._map.latLngToLayerPoint(t.getNorthWest());
          o.default.DomUtil.setPosition(this._echartsContainer, e)
        },
        _redraw: function () {
          return this._resetCanvasPosition(),
            this._echartsContainer.innerHTML = "",
            this.initECharts(),
            this.setOption(this._echartsOption),
            this
        },
        clear: function () {
          this._echartsContainer.innerHTML = "",
            this.echartsOption = {}
        },
        redraw: function () {
          this._redraw()
        },
        geoCoord2Pixel: function (t) {
          var e = new o.default.latLng(t[1], t[0]),
            i = this._map.latLngToContainerPoint(e);
          return [i.x, i.y]
        },
        pixel2GeoCoord: function (t) {
          var e = this._map.containerPointToLatLng(o.default.point(t[0], t[1]));
          return [e.lng, e.lat]
        },
        initECharts: function () {
          if (this._ec = f.init(this._echartsContainer),
            "3.0" <= f.version) {
            var a = this;
            a._ec.Geo.prototype.dataToPoint = function (t) {
              var e = new o.default.latLng(t[1], t[0]),
                i = a._map.latLngToContainerPoint(e);
              return [i.x, i.y]
            }
          }
          this._unbindEvent()
        },
        setOption: function (t, e) {
          if (t.series) {
            var i = t.series || {},
              a = {},
              n = !1;
            if (f.version < "3.0") {
              for (var o = 0; r = i[o++];) {
                var s = r.geoCoord;
                s && (n = !0,
                  a = s)
              }
              var r;
              for (o = 0; r = i[o++];) {
                var l = r.markPoint || {},
                  h = r.markLine || {},
                  u = l.data;
                if (u && u.length)
                  for (var c = 0, d = u.length; c < d; c++)
                    n && (u[c].geoCoord = a[u[c].name]),
                    this._AddPos(u[c]);
                if ((u = h.data) && u.length)
                  for (c = 0,
                    d = u.length; c < d; c++)
                    n && (u[c][0].geoCoord = a[u[c][0].name],
                      u[c][1].geoCoord = a[u[c][1].name]),
                    this._AddPos(u[c][0]),
                    this._AddPos(u[c][1])
              }
            }
            this._ec.setOption(t, e)
          }
        },
        _AddPos: function (t) {
          if (f.version < "3.0") {
            var e = f.version < "3.0" ? t.geoCoord : t.coord,
              i = this.geoCoord2Pixel(e);
            t.x = i[0],
              t.y = i[1]
          } else {
            e = t.coord,
              i = this.geoCoord2Pixel(e);
            t.coord = i
          }
        },
        _unbindEvent: function () {
          f.version < "3.0" ? (this._ec.getZrender().un("dragstart", function () {}),
            this._ec.getZrender().un("dragend", function () {}),
            this._ec.getZrender().un("mouseup", function () {}),
            this._ec.getZrender().un("mousedown", function () {}),
            this._ec.getZrender().un("mousewheel", function () {})) : (this._ec.getZr().off("dragstart", function () {}),
            this._ec.getZr().off("dragend", function () {}),
            this._ec.getZr().off("mouseup", function () {}),
            this._ec.getZr().off("mousedown", function () {}),
            this._ec.getZr().off("mousewheel", function () {}))
        }
      });
    o.default.FlowEcharts = r,
      o.default.flowEcharts = function (t, e) {
        return new r(t, e)
      },
      e.FlowEcharts = r
  }, function (t, e, i) {
    "use strict";

    function n(t) {
      if (!(this instanceof n))
        return new n(t);
      this._canvas = t = "string" == typeof t ? document.getElementById(t) : t,
        this._ctx = t.getContext("2d"),
        this._width = t.width,
        this._height = t.height,
        this._max = 1,
        this._data = []
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.HeatLayer = void 0;
    var a, o = i(1),
      w = (a = o) && a.__esModule ? a : {
        default: a
      };
    n.prototype = {
      defaultRadius: 25,
      defaultGradient: {
        .4: "blue",
        .6: "cyan",
        .7: "lime",
        .8: "yellow",
        1: "red"
      },
      data: function (t) {
        return this._data = t,
          this
      },
      max: function (t) {
        return this._max = t,
          this
      },
      add: function (t) {
        return this._data.push(t),
          this
      },
      clear: function () {
        return this._data = [],
          this
      },
      radius: function (t, e) {
        e = void 0 === e ? 15 : e;
        var i = this._circle = this._createCanvas(),
          a = i.getContext("2d"),
          n = this._r = t + e;
        return i.width = i.height = 2 * n,
          a.shadowOffsetX = a.shadowOffsetY = 2 * n,
          a.shadowBlur = e,
          a.shadowColor = "black",
          a.beginPath(),
          a.arc(-n, -n, t, 0, 2 * Math.PI, !0),
          a.closePath(),
          a.fill(),
          this
      },
      resize: function () {
        this._width = this._canvas.width,
          this._height = this._canvas.height
      },
      gradient: function (t) {
        var e = this._createCanvas(),
          i = e.getContext("2d"),
          a = i.createLinearGradient(0, 0, 0, 256);
        for (var n in e.width = 1,
            e.height = 256,
            t)
          a.addColorStop(+n, t[n]);
        return i.fillStyle = a,
          i.fillRect(0, 0, 1, 256),
          this._grad = i.getImageData(0, 0, 1, 256).data,
          this
      },
      draw: function (t) {
        this._circle || this.radius(this.defaultRadius),
          this._grad || this.gradient(this.defaultGradient);
        var e = this._ctx;
        e.clearRect(0, 0, this._width, this._height);
        for (var i, a = 0, n = this._data.length; a < n; a++)
          i = this._data[a],
          e.globalAlpha = Math.min(Math.max(i[2] / this._max, void 0 === t ? .05 : t), 1),
          e.drawImage(this._circle, i[0] - this._r, i[1] - this._r);
        var o = e.getImageData(0, 0, this._width, this._height);
        return this._colorize(o.data, this._grad),
          e.putImageData(o, 0, 0),
          this
      },
      _colorize: function (t, e) {
        for (var i, a = 0, n = t.length; a < n; a += 4)
          (i = 4 * t[a + 3]) && (t[a] = e[i],
            t[a + 1] = e[i + 1],
            t[a + 2] = e[i + 2])
      },
      _createCanvas: function () {
        return "undefined" != typeof document ? document.createElement("canvas") : new this._canvas.constructor
      }
    };
    var s = (w.default.Layer ? w.default.Layer : w.default.Class).extend({
      initialize: function (t, e) {
        this._latlngs = t,
          w.default.setOptions(this, e)
      },
      setLatLngs: function (t) {
        return this._latlngs = t,
          this.redraw()
      },
      addLatLng: function (t) {
        return this._latlngs.push(t),
          this.redraw()
      },
      setOptions: function (t) {
        return w.default.setOptions(this, t),
          this._heat && this._updateOptions(),
          this.redraw()
      },
      redraw: function () {
        return this._heat && !this._frame && this._map && !this._map._animating && (this._frame = w.default.Util.requestAnimFrame(this._redraw, this)),
          this
      },
      onAdd: function (t) {
        this._map = t,
          this._canvas || this._initCanvas(),
          this.options.pane ? this.getPane().appendChild(this._canvas) : t._panes.overlayPane.appendChild(this._canvas),
          t.on("moveend", this._reset, this),
          t.options.zoomAnimation && w.default.Browser.any3d && t.on("zoomanim", this._animateZoom, this),
          this._reset()
      },
      onRemove: function (t) {
        this.options.pane ? this.getPane().removeChild(this._canvas) : t.getPanes().overlayPane.removeChild(this._canvas),
          t.off("moveend", this._reset, this),
          t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
      },
      addTo: function (t) {
        return t.addLayer(this),
          this
      },
      _initCanvas: function () {
        var t = this._canvas = w.default.DomUtil.create("canvas", "leaflet-heatmap-layer leaflet-layer"),
          e = w.default.DomUtil.testProp(["transformOrigin", "WebkitTransformOrigin", "msTransformOrigin"]);
        t.style[e] = "50% 50%";
        var i = this._map.getSize();
        t.width = i.x,
          t.height = i.y;
        var a = this._map.options.zoomAnimation && w.default.Browser.any3d;
        w.default.DomUtil.addClass(t, "leaflet-zoom-" + (a ? "animated" : "hide")),
          this._heat = n(t),
          this._updateOptions()
      },
      _updateOptions: function () {
        this._heat.radius(this.options.radius || this._heat.defaultRadius, this.options.blur),
          this.options.gradient && this._heat.gradient(this.options.gradient),
          this.options.max && this._heat.max(this.options.max)
      },
      _reset: function () {
        var t = this._map.containerPointToLayerPoint([0, 0]);
        w.default.DomUtil.setPosition(this._canvas, t);
        var e = this._map.getSize();
        this._heat._width !== e.x && (this._canvas.width = this._heat._width = e.x),
          this._heat._height !== e.y && (this._canvas.height = this._heat._height = e.y),
          this._redraw()
      },
      _redraw: function () {
        if (this._map) {
          var t, e, i, a, n, o, s, r, l, h = [],
            u = this._heat._r,
            c = this._map.getSize(),
            d = new w.default.Bounds(w.default.point([-u, -u]), c.add([u, u])),
            f = void 0 === this.options.max ? 1 : this.options.max,
            _ = void 0 === this.options.maxZoom ? this._map.getMaxZoom() : this.options.maxZoom,
            p = 1 / Math.pow(2, Math.max(0, Math.min(_ - this._map.getZoom(), 12))),
            m = u / 2,
            g = [],
            v = this._map._getMapPanePos(),
            y = v.x % m,
            b = v.y % m;
          for (t = 0,
            e = this._latlngs.length; t < e; t++)
            if (i = this._map.latLngToContainerPoint(this._latlngs[t]),
              d.contains(i)) {
              n = Math.floor((i.x - y) / m) + 2,
                o = Math.floor((i.y - b) / m) + 2,
                l = (void 0 !== this._latlngs[t].alt ? this._latlngs[t].alt : void 0 !== this._latlngs[t][2] ? +this._latlngs[t][2] : 1) * p,
                g[o] = g[o] || [],
                (a = g[o][n]) ? (a[0] = (a[0] * a[2] + i.x * l) / (a[2] + l),
                  a[1] = (a[1] * a[2] + i.y * l) / (a[2] + l),
                  a[2] += l) : g[o][n] = [i.x, i.y, l]
            }
          for (t = 0,
            e = g.length; t < e; t++)
            if (g[t])
              for (s = 0,
                r = g[t].length; s < r; s++)
                (a = g[t][s]) && h.push([Math.round(a[0]), Math.round(a[1]), Math.min(a[2], f)]);
          this._heat.data(h).draw(this.options.minOpacity),
            this._frame = null
        }
      },
      _animateZoom: function (t) {
        var e = this._map.getZoomScale(t.zoom),
          i = this._map._getCenterOffset(t.center)._multiplyBy(-e).subtract(this._map._getMapPanePos());
        w.default.DomUtil.setTransform ? w.default.DomUtil.setTransform(this._canvas, i, e) : this._canvas.style[w.default.DomUtil.TRANSFORM] = w.default.DomUtil.getTranslateString(i) + " scale(" + e + ")"
      }
    });
    w.default.HeatLayer = s,
      w.default.heatLayer = function (t, e) {
        return new s(t, e)
      },
      e.HeatLayer = s
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.MapVLayer = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      },
      s = i(127),
      r = o.default.Layer.extend({
        options: {
          attributionPrefix: null,
          attribution: null
        },
        initialize: function (t, e, i) {
          i = i || {},
            this.dataSet = t || {},
            this.mapVOptions = e || {},
            this.render = this.render.bind(this),
            o.default.Util.setOptions(this, i),
            this.canvas = this._createCanvas(),
            o.default.stamp(this)
        },
        onAdd: function (t) {
          this._map = t;
          var e = this.getPane(),
            i = this.container = o.default.DomUtil.create("div", "leaflet-layer leaflet-zoom-animated", e);
          i.appendChild(this.canvas);
          var a = t.getSize();
          i.style.width = a.x + "px",
            i.style.height = a.y + "px",
            this.renderer = new s.MapVRenderer(t, this, this.dataSet, this.mapVOptions),
            this.draw(),
            this.fire("loaded")
        },
        onRemove: function (t) {
          o.default.DomUtil.remove(this.container),
            this.renderer.destroy(),
            t.off({
              moveend: this.draw,
              zoomstart: this._hide,
              zoomend: this._show
            }, this)
        },
        addData: function (t, e) {
          this.renderer.addData(t, e)
        },
        update: function (t) {
          this.renderer.update(t)
        },
        getData: function () {
          return this.renderer && (this.dataSet = this.renderer.getData()),
            this.dataSet
        },
        removeData: function (t) {
          this.renderer && this.renderer.removeData(t)
        },
        clearData: function () {
          this.renderer.clearData()
        },
        draw: function () {
          return this._reset()
        },
        setZIndex: function (t) {
          this.canvas.style.zIndex = t
        },
        render: function () {
          this.renderer._canvasUpdate()
        },
        getCanvas: function () {
          return this.canvas
        },
        getContainer: function () {
          return this.container
        },
        getTopLeft: function () {
          var t, e = this._map;
          return e && (t = e.getBounds().getNorthWest()),
            t
        },
        _createCanvas: function () {
          var t = document.createElement("canvas");
          t.style.position = "absolute",
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            t.style.zIndex = this.options.zIndex || 600;
          var e = "undefined" == typeof window ? {} : window,
            i = this.devicePixelRatio = e.devicePixelRatio;
          return "2d" == this.mapVOptions.context && t.getContext("2d").scale(i, i),
            t
        },
        _resize: function () {
          var t = this.canvas;
          if (t) {
            var e = this._map,
              i = e.getSize();
            t.width = i.x,
              t.height = i.y,
              t.style.width = i.x + "px",
              t.style.height = i.y + "px";
            var a = e.getBounds(),
              n = e.latLngToLayerPoint(a.getNorthWest());
            o.default.DomUtil.setPosition(t, n)
          }
        },
        _reset: function () {
          this._resize(),
            this._render()
        },
        redraw: function () {
          this._resize(),
            this._render()
        },
        _render: function () {
          this.render()
        }
      });
    o.default.Map.include({
        latLngToAccurateContainerPoint: function (t) {
          var e = this.project(o.default.latLng(t))._subtract(this.getPixelOrigin());
          return o.default.point(e).add(this._getMapPanePos())
        }
      }),
      o.default.MapVLayer = r,
      o.default.mapVLayer = function (t, e, i) {
        return new r(t, e, i)
      },
      e.MapVLayer = r
  }, function (t, e, i) {
    "use strict";

    function r(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.MapVRenderer = void 0;
    var a, n = function () {
        function a(t, e) {
          for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1,
              a.configurable = !0,
              "value" in a && (a.writable = !0),
              Object.defineProperty(t, a.key, a)
          }
        }
        return function (t, e, i) {
          return e && a(t.prototype, e),
            i && a(t, i),
            t
        }
      }(),
      o = function t(e, i, a) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === n) {
          var o = Object.getPrototypeOf(e);
          return null === o ? void 0 : t(o, i, a)
        }
        if ("value" in n)
          return n.value;
        var s = n.get;
        return void 0 !== s ? s.call(a) : void 0
      },
      s = i(1),
      v = (a = s) && a.__esModule ? a : {
        default: a
      },
      l = i(128),
      h = l ? l.baiduMapLayer : null,
      u = h ? h.__proto__ : Function;
    e.MapVRenderer = function (t) {
      function s(t, e, i, a) {
        ! function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
        }(this, s);
        var n = r(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, i, a));
        if (!u)
          return r(n);
        var o = n;
        return a = a || {},
          o.init(a),
          o.argCheck(a),
          n.canvasLayer = e,
          n.clickEvent = n.clickEvent.bind(n),
          n.mousemoveEvent = n.mousemoveEvent.bind(n),
          n._moveStartEvent = n.moveStartEvent.bind(n),
          n._moveEndEvent = n.moveEndEvent.bind(n),
          n._zoomStartEvent = n.zoomStartEvent.bind(n),
          n.bindEvent(),
          n
      }
      return function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(s, u),
        n(s, [{
          key: "clickEvent",
          value: function (t) {
            var e = this.map.containerPointToLayerPoint([0, 0]),
              i = this.devicePixelRatio = this.canvasLayer.devicePixelRatio = window.devicePixelRatio,
              a = t.layerPoint;
            o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "clickEvent", this).call(this, v.default.point((a.x - e.x) / i, (a.y - e.y) / i), t)
          }
        }, {
          key: "mousemoveEvent",
          value: function (t) {
            var e = t.layerPoint;
            o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "mousemoveEvent", this).call(this, e, t)
          }
        }, {
          key: "bindEvent",
          value: function () {
            var t = this.map;
            this.options.methods && (this.options.methods.click && t.on("click", this.clickEvent),
                this.options.methods.mousemove && t.on("mousemove", this.mousemoveEvent)),
              this.map.on("movestart", this._moveStartEvent),
              this.map.on("moveend", this._moveEndEvent),
              this.map.on("zoomstart", this._zoomStartEvent)
          }
        }, {
          key: "destroy",
          value: function () {
            this.unbindEvent(),
              this.clearData(),
              this.animator && this.animator.stop(),
              this.animator = null,
              this.canvasLayer = null
          }
        }, {
          key: "unbindEvent",
          value: function () {
            var t = this.map;
            this.options.methods && (this.options.methods.click && t.off("click", this.clickEvent),
                this.options.methods.mousemove && t.off("mousemove", this.mousemoveEvent)),
              this.map.off("movestart", this._moveStartEvent),
              this.map.off("moveend", this._moveEndEvent),
              this.map.off("zoomstart", this._zoomStartEvent)
          }
        }, {
          key: "getContext",
          value: function () {
            return this.canvasLayer.getCanvas().getContext(this.context)
          }
        }, {
          key: "addData",
          value: function (t, e) {
            var i = t;
            t && t.get && (i = t.get()),
              this.dataSet.add(i),
              this.update({
                options: e
              })
          }
        }, {
          key: "update",
          value: function (t) {
            var e = t || {},
              i = e.data;
            i && i.get && (i = i.get()),
              null != i && this.dataSet.set(i),
              o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "update", this).call(this, {
                options: e.options
              })
          }
        }, {
          key: "getData",
          value: function () {
            return this.dataSet
          }
        }, {
          key: "removeData",
          value: function (e) {
            if (this.dataSet) {
              var t = this.dataSet.get({
                filter: function (t) {
                  return null == e || "function" != typeof e || !e(t)
                }
              });
              this.dataSet.set(t),
                this.update({
                  options: null
                })
            }
          }
        }, {
          key: "clearData",
          value: function () {
            this.dataSet && this.dataSet.clear(),
              this.update({
                options: null
              })
          }
        }, {
          key: "_canvasUpdate",
          value: function (i) {
            if (this.canvasLayer) {
              var a = this,
                n = a.options.animation,
                t = this.getContext(),
                o = this.map;
              if (a.isEnabledTime()) {
                if (void 0 === i)
                  return void this.clear(t);
                "2d" === this.context && (t.save(),
                  t.globalCompositeOperation = "destination-out",
                  t.fillStyle = "rgba(0, 0, 0, .1)",
                  t.fillRect(0, 0, t.canvas.width, t.canvas.height),
                  t.restore())
              } else
                this.clear(t);
              if ("2d" === this.context)
                for (var e in a.options)
                  t[e] = a.options[e];
              else
                t.clear(t.COLOR_BUFFER_BIT);
              if (!(a.options.minZoom && o.getZoom() < a.options.minZoom || a.options.maxZoom && o.getZoom() > a.options.maxZoom)) {
                var s = o.getBounds(),
                  r = s.getEast() - s.getWest(),
                  l = s.getNorth() - s.getSouth(),
                  h = o.getSize(),
                  u = r / h.x,
                  c = l / h.y,
                  d = this.canvasLayer.getTopLeft(),
                  f = o.latLngToAccurateContainerPoint(d),
                  _ = {
                    transferCoordinate: function (t) {
                      var e, i = {
                        x: (e = "2d" === a.context ? o.latLngToAccurateContainerPoint(v.default.latLng(t[1], t[0])) : {
                          x: (t[0] - d.lng) / u,
                          y: (d.lat - t[1]) / c
                        }).x - f.x,
                        y: e.y - f.x
                      };
                      return [i.x, i.y]
                    }
                  };
                void 0 !== i && (_.filter = function (t) {
                  var e = n.trails || 10;
                  return i && t.time > i - e && t.time < i
                });
                var p = a.dataSet.get(_);
                this.processData(p),
                  a.options._size = a.options.size;
                var m = o.latLngToContainerPoint(v.default.latLng(0, 0)),
                  g = {
                    x: m.x - f.x,
                    y: m.y - f.y
                  };
                this.drawContext(t, p, a.options, g),
                  a.options.updateCallback && a.options.updateCallback(i)
              }
            }
          }
        }, {
          key: "init",
          value: function (t) {
            this.options = t,
              this.initDataRange(t),
              this.context = this.options.context || "2d",
              this.options.zIndex && this.canvasLayer && this.canvasLayer.setZIndex(this.options.zIndex),
              this.initAnimator()
          }
        }, {
          key: "addAnimatorEvent",
          value: function () {}
        }, {
          key: "moveStartEvent",
          value: function () {
            var t = this.options.animation;
            this.isEnabledTime() && this.animator && (this.steps.step = t.stepsRange.start,
              this._hide())
          }
        }, {
          key: "moveEndEvent",
          value: function () {
            this.canvasLayer.draw(),
              this._show()
          }
        }, {
          key: "zoomStartEvent",
          value: function () {
            this._hide()
          }
        }, {
          key: "clear",
          value: function (t) {
            t && t.clearRect && t.clearRect(0, 0, t.canvas.width, t.canvas.height)
          }
        }, {
          key: "_hide",
          value: function () {
            this.canvasLayer.canvas.style.display = "none"
          }
        }, {
          key: "_show",
          value: function () {
            this.canvasLayer.canvas.style.display = "block"
          }
        }, {
          key: "draw",
          value: function () {
            this.canvasLayer.draw()
          }
        }]),
        s
    }()
  }, function (t, e) {
    t.exports = __WEBPACK_EXTERNAL_MODULE_128__
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.Draw = void 0;
    var a, n = i(1),
      u = (a = n) && a.__esModule ? a : {
        default: a
      };
    i(42);
    var c = i(3),
      o = u.default.Class.extend({
        map: null,
        layerDraw: null,
        options: null,
        control: {},
        initialize: function (t) {
          this.options = t || {},
            this.map = this.options.map,
            this.options.layer ? this.layerDraw = this.options.layer : this.layerDraw = u.default.featureGroup().addTo(this.map, {
              editing: !0
            }),
            this.options.style = this.options.style || {
              color: "#0000ff",
              weight: 2
            };
          var e = this.options.style;
          this.control.marker = new u.default.Draw.Marker(this.map, {
              icon: new u.default.Icon.Default
            }),
            this.control.text = new u.default.Draw.Text(this.map),
            this.control["font-marker"] = new u.default.Draw.FontMarker(this.map),
            this.control.polyline = new u.default.Draw.Polyline(this.map, {
              shapeOptions: e
            }),
            this.control.polylinefree = new u.default.Draw.Polylinefree(this.map, {
              shapeOptions: e
            }),
            this.control.rectangle = new u.default.Draw.Rectangle(this.map, {
              shapeOptions: e
            }),
            this.control.circle = new u.default.Draw.Circle(this.map, {
              shapeOptions: e
            }),
            this.control.polygon = new u.default.Draw.Polygon(this.map, {
              allowIntersection: !0,
              showArea: !0,
              metric: ["km", "m"],
              shapeOptions: e
            }),
            this.control.image = new u.default.Draw.Image(this.map),
            this.options.hasOwnProperty("onEvnet") && !this.options.onEvnet || this.onEvnet()
        },
        onEvnet: function () {
          return this.layerDraw.on("click", this._layerDraw_clickHndler, this),
            this.map.on("click", this._map_clickHndler, this),
            this.map.on("dblclick", this._map_dblclickHndler, this),
            this.map.on("draw:created", this._map_draw_createdHndler, this),
            this.options.onChange && "function" == typeof this.options.onChange && (this.map.on("draw:editvertex", this._map_draw_changeHandler, this),
              this.map.on("draw:editmove", this._map_draw_changeHandler, this),
              this.map.on("draw:editresize", this._map_draw_changeHandler, this)),
            this
        },
        offEvent: function () {
          return this.layerDraw.off("click", this._layerDraw_clickHndler, this),
            this.map.off("click", this._map_clickHndler, this),
            this.map.off("dblclick", this._map_dblclickHndler, this),
            this.map.off("draw:created", this._map_draw_createdHndler, this),
            this.options.onChange && "function" == typeof this.options.onChange && (this.map.off("draw:editvertex", this._map_draw_changeHandler, this),
              this.map.off("draw:editmove", this._map_draw_changeHandler, this),
              this.map.off("draw:editresize", this._map_draw_changeHandler, this)),
            this
        },
        destroy: function (t) {
          return this.stopDraw(),
            t || this.clearDraw(),
            this.offEvent(),
            this
        },
        _drawtype: null,
        _defval: null,
        startDraw: function (t, e) {
          if (null == this.control[t])
            throw "不能进行type为【" + t + "】的绘制，无该类型！";
          if ((e = e || this.configDefval[t]).type = e.type || t,
            this._drawtype = t,
            this._defval = e,
            this.options.isOnly && this.clearDraw(),
            this.stopDraw(),
            e)
            switch (t) {
              default:
                this.control[t].setOptions({
                  shapeOptions: e.style
                });
                break;
              case "image":
                this.control[t].setOptions(e.style);
                break;
              case "marker":
                var i;
                i = e.style.hasOwnProperty("iconUrl") && null != e.style.iconUrl && "" != e.style.iconUrl ? (e.style.iconSize0 && e.style.iconSize1 && (e.style.iconSize = [e.style.iconSize0, e.style.iconSize1]),
                    e.style.iconAnchor0 && e.style.iconAnchor1 && (e.style.iconAnchor = [e.style.iconAnchor0, e.style.iconAnchor1]),
                    u.default.icon(e.style)) : new u.default.Icon.Default,
                  this.control[t].setOptions({
                    icon: i
                  });
                break;
              case "text":
              case "font-marker":
                this.control[t].updateIcon(e.style)
            }
          this.control[t].enable()
        },
        stopDraw: function () {
          for (var t in this.control)
            this.control[t].disable();
          return this.stopEditing(),
            this
        },
        clearDraw: function () {
          this.stopEditing(),
            this.layerDraw.clearLayers()
        },
        _hasEdit: !0,
        hasEdit: function (t) {
          (this._hasEdit = t) || this.stopEditing()
        },
        currEditFeature: null,
        startEditing: function (t) {
          null != t && this._hasEdit && (t.editing && t.editing.enable(),
            this.currEditFeature = t,
            this.options.hasOwnProperty("onStartEditing") && this.options.onStartEditing && this.options.onStartEditing(this.currEditFeature))
        },
        stopEditing: function () {
          this.currEditFeature && this.currEditFeature.editing && this.currEditFeature.editing.disable && (this.currEditFeature.editing.disable(),
              this.options.hasOwnProperty("onStopEditing") && this.options.onStopEditing && this.options.onStopEditing(this.currEditFeature)),
            this.currEditFeature = null
        },
        updateProperties: function (t, e) {
          if (null != (t = t || this.currEditFeature)) {
            var i = t.properties;
            switch (e ? t.properties = e : e = i,
              e.type) {
              default:
                break;
              case "marker":
                var a;
                if (e.style.hasOwnProperty("iconUrl") && null != e.style.iconUrl && "" != e.style.iconUrl) {
                  var n = {
                    iconUrl: e.style.iconUrl,
                    iconSize: [e.style.iconSize0, e.style.iconSize1],
                    iconAnchor: [e.style.iconAnchor0, e.style.iconAnchor1]
                  };
                  a = u.default.icon(n)
                } else
                  a = new u.default.Icon.Default;
                t.setIcon(a),
                  t.setOpacity(e.style.opacity);
                break;
              case "text":
              case "font-marker":
                t.setOpacity(e.style.opacity);
                var o = this.control[e.type].getIcon(e.style);
                t.setIcon(o);
                break;
              case "polyline":
              case "polylinefree":
              case "polygon":
              case "rectangle":
                t.setStyle(e.style);
                break;
              case "image":
                if (null == t._imageOverlay) {
                  var s = new u.default.ImageOverlay(e.style.iconUrl, t.getBounds(), {
                    opacity: e.style.opacity
                  });
                  t._imageOverlay = s,
                    t._imageOverlay._nosave = !0,
                    this.layerDraw.addLayer(t._imageOverlay)
                }
                t._imageOverlay.setOpacity(e.style.opacity);
                break;
              case "circle":
                e.isSemicircle || (e.startAngle = null,
                    e.stopAngle = null),
                  t.setRadius(e.style.radius),
                  t.setStyle(e.style),
                  t.redraw()
            }
            console.log(t)
            return t
          }
        },
        deleteFeature: function (t) {
          this.layerDraw.removeLayer(t)
        },
        _map_clickHndler: function (t) {
          this.stopEditing()
        },
        _map_dblclickHndler: function (t) {
          for (var e in u.default.DomEvent.stopPropagation(t),
              this.control)
            this.control[e]._enabled && this.control[e]._finishShape && this.control[e]._finishShape()
        },
        _layerDraw_clickHndler: function (t) {
          console.log(t, this)
          t.layer != this.currEditFeature && this.stopEditing(),
            this.startEditing(t.layer),
            u.default.DomEvent.stopPropagation(t)
        },
        _map_draw_createdHndler: function (t) {
          var e = t.layer;
          e.properties = this._defval,
            this._updateFeatureForEdit(e),
            this.layerDraw.addLayer(e),
            this.options.hasDel && this.bindDeleteContextmenu(e),
            this.stopEditing(),
            u.default.Browser.ie || this.startEditing(e),
            this.options.onCreate && "function" == typeof this.options.onCreate && this.options.onCreate(t)
        },
        _map_draw_changeHandler: function (t) {
          var e = this.currEditFeature;
          t.layer = e,
            this._updateFeatureForEdit(e),
            this.options.onChange(t)
        },
        _updateFeatureForEdit: function (t) {
          if (null != t.properties && null != t.properties.type)
            switch (t.properties.type) {
              case "circle":
                t.properties.style.radius = parseInt(t.getRadius());
                break;
              case "image":
                this.layerDraw.addLayer(t._imageOverlay),
                  t._imageOverlay._nosave = !0,
                  t._imageOverlay.setBounds(t.getBounds())
            }
        },
        hasDraw: function () {
          return null != this.layerDraw && 0 < this.layerDraw.getLayers().length
        },
        getLayer: function () {
          return this.layerDraw
        },
        getFeatures: function () {
          if (this.hasDraw()) {
            var t = this.layerDraw.getLayers();
            return this.options.isOnly ? t[0] : t
          }
          return null
        },
        bindDeleteContextmenu: function (t) {
          var e = this;
          t.bindContextMenu && t.bindContextMenu({
            contextmenu: !0,
            contextmenuInheritItems: !1,
            contextmenuItems: [{
              text: "删除",
              iconCls: "fa fa-trash",
              context: t,
              callback: function (t) {
                e.deleteFeature(this)
              }
            }]
          })
        },
        toJson: function (t) {
          var e = this.layerDraw.getLayers();
          if (0 == e.length)
            return t ? {} : "";
          for (var i = [], a = 0; a < e.length; a++) {
            var n = e[a];
            if (!n._nosave) {
              var o = n.toGeoJSON();
              o.properties = {
                type: n.properties.type
              };
              var s = this.configDefval[n.properties.type];
              for (var r in n.properties.style) {
                if (null != (l = n.properties.style[r]) && "" != l)
                  s.style[r] != l && (null == o.properties.style && (o.properties.style = {}),
                    o.properties.style[r] = l)
              }
              for (var r in n.properties.attr) {
                var l;
                if (null != (l = n.properties.attr[r]) && "" != l)
                  s.attr[r] != l && (null == o.properties.attr && (o.properties.attr = {}),
                    o.properties.attr[r] = l)
              }
              i.push(o)
            }
          }
          var h = {
            type: "FeatureCollection",
            features: i
          };
          console.log(t ? h : JSON.stringify(h))
          return t ? h : JSON.stringify(h)
        },
        jsonToLayer: function (t, e, i) {
          this.stopDraw(),
            this.options.isOnly && this.clearDraw();
          var a = t;
          try {
            "string" == typeof t && t.constructor == String && (a = JSON.parse(t))
          } catch (t) {
            return void(0,
              c.alert)(t.name + ": " + t.message + " \n请确认json文件格式正确!!!")
          }
          var n = u.default.geoJSON(a).getLayers();
          if (0 == n.length)
            return 0;
          e && this.layerDraw.clearLayers();
          for (var o = 0; o < n.length; o++) {
            var s = n[o];
            s.feature.properties = s.feature.properties || {};
            var r = s.feature.properties;
            if (null == r.style && (r.style = {}),
              null == r.attr && (r.attr = {}),
              null == r.type)
              switch (s.feature.geometry.type) {
                default:
                case "Point":
                case "MultiPoint":
                  r.type = "marker";
                  break;
                case "LineString":
                case "MultiLineString":
                  r.type = "polyline";
                  break;
                case "Polygon":
                case "MultiPolygon":
                  r.type = "polygon"
              }
            var l = this.configDefval[r.type];
            for (var h in l.style) {
              null == r.style[h] && (r.style[h] = l.style[h])
            }
            for (var h in l.attr) {
              null == r.attr[h] && (r.attr[h] = l.attr[h])
            }
            switch (r.type) {
              case "circle":
                s = u.default.circle(s.getLatLng(), {
                  radius: r.style.radius
                });
                break;
              case "rectangle":
                s = u.default.rectangle(s.getBounds());
                break;
              case "image":
                s = u.default.rectangle(s.getBounds(), this.control.image._defstyle)
            }
            s.properties = r,
              s.feature = null,
              this.layerDraw.addLayer(s),
              this.updateProperties(s),
              n[o] = s
          }
          return i && map.fitBounds(this.layerDraw.getBounds()),
            n
        },
        configDefval: {
          text: {
            type: "text",
            name: "文字",
            style: {
              text: "文字",
              opacity: 1,
              color: "#0081c2",
              font_size: 30,
              font_family: "黑体",
              font_style: "normal",
              font_weight: "normal",
              background: !1,
              background_color: "#ccc",
              border: !1,
              border_color: "#5928de",
              border_width: 3,
              border_style: "solid"
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          "font-marker": {
            type: "font-marker",
            name: "字体图标点",
            style: {
              opacity: 1,
              size: 50,
              color: "#000000",
              iconClass: "fa fa-crosshairs"
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          marker: {
            type: "marker",
            name: "点标记",
            style: {
              opacity: 1,
              iconUrl: "",
              iconSize0: 25,
              iconSize1: 41,
              iconAnchor0: 12,
              iconAnchor1: 41
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          polyline: {
            type: "polyline",
            name: "线",
            style: {
              color: "#3388ff",
              weight: 3,
              opacity: 1,
              dashArray: ""
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          polylinefree: {
            type: "polylinefree",
            name: "自由线",
            style: {
              color: "#3388ff",
              weight: 3,
              opacity: 1,
              dashArray: ""
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          polygon: {
            type: "polygon",
            name: "面",
            style: {
              stroke: !0,
              color: "#3388ff",
              weight: 2,
              opacity: 1,
              dashArray: "",
              fill: !0,
              fillColor: "#3388ff",
              fillOpacity: .3
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          rectangle: {
            type: "rectangle",
            name: "矩形",
            style: {
              stroke: !0,
              color: "#3388ff",
              weight: 2,
              opacity: 1,
              dashArray: "",
              fill: !0,
              fillColor: "#3388ff",
              fillOpacity: .3
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          circle: {
            type: "circle",
            name: "圆",
            style: {
              radius: 0,
              stroke: !0,
              color: "#3388ff",
              weight: 2,
              opacity: 1,
              dashArray: "",
              fill: !0,
              fillColor: "#3388ff",
              fillOpacity: .3,
              isSemicircle: !1,
              startAngle: 0,
              stopAngle: 0
            },
            attr: {
              name: "",
              remark: ""
            }
          },
          image: {
            type: "image",
            name: "图片",
            style: {
              iconUrl: "",
              opacity: 1
            },
            attr: {
              name: "",
              remark: ""
            }
          }
        }
      });
    e.Draw = o
  }, function (t, e, i) {
    "use strict";
    var a, o, n, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      l = i(1),
      h = (a = l) && a.__esModule ? a : {
        default: a
      };
    i(131),
      o = window,
      n = document,
      h.default.drawVersion = "1.0.4",
      h.default.Draw = {},
      h.default.drawLocal = {
        draw: {
          toolbar: {
            actions: {
              title: "Cancel drawing",
              text: "Cancel"
            },
            finish: {
              title: "Finish drawing",
              text: "Finish"
            },
            undo: {
              title: "Delete last point drawn",
              text: "Delete last point"
            },
            buttons: {
              polyline: "Draw a polyline",
              polygon: "Draw a polygon",
              rectangle: "Draw a rectangle",
              circle: "Draw a circle",
              marker: "Draw a marker",
              circlemarker: "Draw a circlemarker"
            }
          },
          handlers: {
            circle: {
              tooltip: {
                start: "Click and drag to draw circle."
              },
              radius: "Radius"
            },
            circlemarker: {
              tooltip: {
                start: "Click map to place circle marker."
              }
            },
            marker: {
              tooltip: {
                start: "Click map to place marker."
              }
            },
            polygon: {
              tooltip: {
                start: "Click to start drawing shape.",
                cont: "Click to continue drawing shape.",
                end: "Click first point to close this shape."
              }
            },
            polyline: {
              error: "<strong>Error:</strong> shape edges cannot cross!",
              tooltip: {
                start: "Click to start drawing line.",
                cont: "Click to continue drawing line.",
                end: "Click last point to finish line."
              }
            },
            rectangle: {
              tooltip: {
                start: "Click and drag to draw rectangle."
              }
            },
            simpleshape: {
              tooltip: {
                end: "Release mouse to finish drawing."
              }
            }
          }
        },
        edit: {
          toolbar: {
            actions: {
              save: {
                title: "Save changes",
                text: "Save"
              },
              cancel: {
                title: "Cancel editing, discards all changes",
                text: "Cancel"
              },
              clearAll: {
                title: "Clear all layers",
                text: "Clear All"
              }
            },
            buttons: {
              edit: "Edit layers",
              editDisabled: "No layers to edit",
              remove: "Delete layers",
              removeDisabled: "No layers to delete"
            }
          },
          handlers: {
            edit: {
              tooltip: {
                text: "Drag handles or markers to edit features.",
                subtext: "Click cancel to undo changes."
              }
            },
            remove: {
              tooltip: {
                text: "Click on a feature to remove."
              }
            }
          }
        }
      },
      h.default.Draw.Event = {},
      h.default.Draw.Event.CREATED = "draw:created",
      h.default.Draw.Event.EDITED = "draw:edited",
      h.default.Draw.Event.DELETED = "draw:deleted",
      h.default.Draw.Event.DRAWSTART = "draw:drawstart",
      h.default.Draw.Event.DRAWSTOP = "draw:drawstop",
      h.default.Draw.Event.DRAWVERTEX = "draw:drawvertex",
      h.default.Draw.Event.EDITSTART = "draw:editstart",
      h.default.Draw.Event.EDITMOVE = "draw:editmove",
      h.default.Draw.Event.EDITRESIZE = "draw:editresize",
      h.default.Draw.Event.EDITVERTEX = "draw:editvertex",
      h.default.Draw.Event.EDITSTOP = "draw:editstop",
      h.default.Draw.Event.DELETESTART = "draw:deletestart",
      h.default.Draw.Event.DELETESTOP = "draw:deletestop",
      h.default.Draw.Event.TOOLBAROPENED = "draw:toolbaropened",
      h.default.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed",
      h.default.Draw.Event.MARKERCONTEXT = "draw:markercontext",
      h.default.Draw = h.default.Draw || {},
      h.default.Draw.Feature = h.default.Handler.extend({
        initialize: function (t, e) {
          this._map = t,
            this._container = t._container,
            this._overlayPane = t._panes.overlayPane,
            this._popupPane = t._panes.popupPane,
            e && e.shapeOptions && (e.shapeOptions = h.default.Util.extend({}, this.options.shapeOptions, e.shapeOptions)),
            h.default.setOptions(this, e);
          var i = h.default.version.split(".");
          1 === parseInt(i[0], 10) && 2 <= parseInt(i[1], 10) ? h.default.Draw.Feature.include(h.default.Evented.prototype) : h.default.Draw.Feature.include(h.default.Mixin.Events)
        },
        enable: function () {
          this._enabled || (h.default.Handler.prototype.enable.call(this),
            this.fire("enabled", {
              handler: this.type
            }),
            this._map.fire(h.default.Draw.Event.DRAWSTART, {
              layerType: this.type
            }))
        },
        disable: function () {
          this._enabled && (h.default.Handler.prototype.disable.call(this),
            this._map.fire(h.default.Draw.Event.DRAWSTOP, {
              layerType: this.type
            }),
            this.fire("disabled", {
              handler: this.type
            }))
        },
        addHooks: function () {
          var t = this._map;
          t && (h.default.DomUtil.disableTextSelection(),
            t.getContainer().focus(),
            this._tooltip = new h.default.Draw.Tooltip(this._map),
            h.default.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
        },
        removeHooks: function () {
          this._map && (h.default.DomUtil.enableTextSelection(),
            this._tooltip.dispose(),
            this._tooltip = null,
            h.default.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
        },
        setOptions: function (t) {
          h.default.setOptions(this, t)
        },
        _fireCreatedEvent: function (t) {
          this._map.fire(h.default.Draw.Event.CREATED, {
            layer: t,
            layerType: this.type
          })
        },
        _cancelDrawing: function (t) {
          27 === t.keyCode && (this._map.fire("draw:canceled", {
              layerType: this.type
            }),
            this.disable())
        }
      }),
      h.default.Draw.Polyline = h.default.Draw.Feature.extend({
        statics: {
          TYPE: "polyline"
        },
        Poly: h.default.Polyline,
        options: {
          allowIntersection: !0,
          repeatMode: !1,
          drawError: {
            color: "#b00b00",
            timeout: 2500
          },
          icon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon"
          }),
          touchIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
          }),
          guidelineDistance: 20,
          maxGuideLineLength: 4e3,
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !1,
            clickable: !0
          },
          metric: !0,
          feet: !0,
          nautic: !1,
          showLength: !0,
          zIndexOffset: 2e3,
          factor: 1,
          maxPoints: 0
        },
        initialize: function (t, e) {
          h.default.Browser.touch && (this.options.icon = this.options.touchIcon),
            this.options.drawError.message = h.default.drawLocal.draw.handlers.polyline.error,
            e && e.drawError && (e.drawError = h.default.Util.extend({}, this.options.drawError, e.drawError)),
            this.type = h.default.Draw.Polyline.TYPE,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function () {
          h.default.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._markers = [],
              this._markerGroup = new h.default.LayerGroup,
              this._map.addLayer(this._markerGroup),
              this._poly = new h.default.Polyline([], this.options.shapeOptions),
              this._tooltip.updateContent(this._getTooltipText()),
              this._mouseMarker || (this._mouseMarker = h.default.marker(this._map.getCenter(), {
                icon: h.default.divIcon({
                  className: "leaflet-mouse-marker",
                  iconAnchor: [20, 20],
                  iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
              })),
              this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map),
              this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this).on("dblclick", this._onDblclickHndler, this))
        },
        removeHooks: function () {
          h.default.Draw.Feature.prototype.removeHooks.call(this),
            this._clearHideErrorTimeout(),
            this._cleanUpShape(),
            this._map.removeLayer(this._markerGroup),
            delete this._markerGroup,
            delete this._markers,
            this._map.removeLayer(this._poly),
            delete this._poly,
            this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this),
            this._map.removeLayer(this._mouseMarker),
            delete this._mouseMarker,
            this._clearGuides(),
            this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this).off("dblclick", this._onDblclickHndler, this)
        },
        _onDblclickHndler: function (t) {
          h.default.DomEvent.stopPropagation(t),
            this._finishShape()
        },
        deleteLastVertex: function () {
          if (!(this._markers.length <= 1)) {
            var t = this._markers.pop(),
              e = this._poly,
              i = e.getLatLngs(),
              a = i.splice(-1, 1)[0];
            this._poly.setLatLngs(i),
              this._markerGroup.removeLayer(t),
              e.getLatLngs().length < 2 && this._map.removeLayer(e),
              this._vertexChanged(a, !1)
          }
        },
        addVertex: function (t) {
          2 <= this._markers.length && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(),
            this._markers.push(this._createMarker(t)),
            this._poly.addLatLng(t),
            2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly),
            this._vertexChanged(t, !0))
        },
        completeShape: function () {
          this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable())
        },
        _finishShape: function (t) {
          var e = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
            i = this._poly.newLatLngIntersects(e[e.length - 1]);
          !this.options.allowIntersection && i || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable())
        },
        _shapeIsValid: function () {
          return !0
        },
        _onZoomEnd: function () {
          null !== this._markers && this._updateGuide()
        },
        _onMouseMove: function (t) {
          var e = this._map.mouseEventToLayerPoint(t.originalEvent),
            i = this._map.layerPointToLatLng(e);
          this._currentLatLng = i,
            this._updateTooltip(i),
            this._updateGuide(e),
            this._mouseMarker.setLatLng(i),
            h.default.DomEvent.preventDefault(t.originalEvent)
        },
        _vertexChanged: function (t, e) {
          this._map.fire(h.default.Draw.Event.DRAWVERTEX, {
              layers: this._markerGroup
            }),
            this._updateFinishHandler(),
            this._updateRunningMeasure(t, e),
            this._clearGuides(),
            this._updateTooltip()
        },
        _onMouseDown: function (t) {
          if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
            this._onMouseMove(t),
              this._clickHandled = !0,
              this._disableNewMarkers();
            var e = t.originalEvent,
              i = e.clientX,
              a = e.clientY;
            this._startPoint.call(this, i, a)
          }
        },
        _startPoint: function (t, e) {
          this._mouseDownOrigin = h.default.point(t, e)
        },
        _onMouseUp: function (t) {
          var e = t.originalEvent,
            i = e.clientX,
            a = e.clientY;
          this._endPoint.call(this, i, a, t),
            this._clickHandled = null
        },
        _endPoint: function (t, e, i) {
          if (this._mouseDownOrigin) {
            var a = h.default.point(t, e).distanceTo(this._mouseDownOrigin),
              n = this._calculateFinishDistance(i.latlng);
            1 < this.options.maxPoints && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(i.latlng),
                this._finishShape()) : n < 10 && h.default.Browser.touch ? this._finishShape() : Math.abs(a) < 9 * (o.devicePixelRatio || 1) && this.addVertex(i.latlng),
              this._enableNewMarkers()
          }
          this._mouseDownOrigin = null
        },
        _onTouch: function (t) {
          var e, i, a = t.originalEvent;
          !a.touches || !a.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = a.touches[0].clientX,
              i = a.touches[0].clientY,
              this._disableNewMarkers(),
              this._touchHandled = !0,
              this._startPoint.call(this, e, i),
              this._endPoint.call(this, e, i, t),
              this._touchHandled = null),
            this._clickHandled = null
        },
        _onMouseOut: function () {
          this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
        },
        _calculateFinishDistance: function (t) {
          var e;
          if (0 < this._markers.length) {
            var i;
            if (this.type === h.default.Draw.Polyline.TYPE)
              i = this._markers[this._markers.length - 1];
            else {
              if (this.type !== h.default.Draw.Polygon.TYPE)
                return 1 / 0;
              i = this._markers[0]
            }
            var a = this._map.latLngToContainerPoint(i.getLatLng()),
              n = new h.default.Marker(t, {
                icon: this.options.icon,
                zIndexOffset: 2 * this.options.zIndexOffset
              }),
              o = this._map.latLngToContainerPoint(n.getLatLng());
            e = a.distanceTo(o)
          } else
            e = 1 / 0;
          return e
        },
        _updateFinishHandler: function () {
          var t = this._markers.length;
          1 < t && this._markers[t - 1].on("click", this._finishShape, this),
            2 < t && this._markers[t - 2].off("click", this._finishShape, this)
        },
        _createMarker: function (t) {
          var e = new h.default.Marker(t, {
            icon: this.options.icon,
            zIndexOffset: 2 * this.options.zIndexOffset
          });
          return this._markerGroup.addLayer(e),
            e
        },
        _updateGuide: function (t) {
          var e = this._markers ? this._markers.length : 0;
          0 < e && (t = t || this._map.latLngToLayerPoint(this._currentLatLng),
            this._clearGuides(),
            this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
        },
        _updateTooltip: function (t) {
          var e = this._getTooltipText();
          t && this._tooltip.updatePosition(t),
            this._errorShown || this._tooltip.updateContent(e)
        },
        _drawGuide: function (t, e) {
          var i, a, n, o = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
            s = this.options.guidelineDistance,
            r = this.options.maxGuideLineLength,
            l = r < o ? o - r : s;
          for (this._guidesContainer || (this._guidesContainer = h.default.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < o; l += this.options.guidelineDistance)
            i = l / o,
            a = {
              x: Math.floor(t.x * (1 - i) + i * e.x),
              y: Math.floor(t.y * (1 - i) + i * e.y)
            },
            (n = h.default.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color,
            h.default.DomUtil.setPosition(n, a)
        },
        _updateGuideColor: function (t) {
          if (this._guidesContainer)
            for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++)
              this._guidesContainer.childNodes[e].style.backgroundColor = t
        },
        _clearGuides: function () {
          if (this._guidesContainer)
            for (; this._guidesContainer.firstChild;)
              this._guidesContainer.removeChild(this._guidesContainer.firstChild)
        },
        _getTooltipText: function () {
          var t, e = this.options.showLength;
          return 0 === this._markers.length ? {
            text: h.default.drawLocal.draw.handlers.polyline.tooltip.start
          } : (t = e ? this._getMeasurementString() : "",
            1 === this._markers.length ? {
              text: h.default.drawLocal.draw.handlers.polyline.tooltip.cont,
              subtext: t
            } : {
              text: h.default.drawLocal.draw.handlers.polyline.tooltip.end,
              subtext: t
            })
        },
        _updateRunningMeasure: function (t, e) {
          var i, a, n = this._markers.length;
          1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = n - (e ? 2 : 1),
            a = h.default.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1),
            this._measurementRunningTotal += a * (e ? 1 : -1))
        },
        _getMeasurementString: function () {
          var t, e = this._currentLatLng,
            i = this._markers[this._markers.length - 1].getLatLng();
          return t = h.default.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0,
            h.default.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
        },
        _showErrorTooltip: function () {
          this._errorShown = !0,
            this._tooltip.showAsError().updateContent({
              text: this.options.drawError.message
            }),
            this._updateGuideColor(this.options.drawError.color),
            this._poly.setStyle({
              color: this.options.drawError.color
            }),
            this._clearHideErrorTimeout(),
            this._hideErrorTimeout = setTimeout(h.default.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
        },
        _hideErrorTooltip: function () {
          this._errorShown = !1,
            this._clearHideErrorTimeout(),
            this._tooltip.removeError().updateContent(this._getTooltipText()),
            this._updateGuideColor(this.options.shapeOptions.color),
            this._poly.setStyle({
              color: this.options.shapeOptions.color
            })
        },
        _clearHideErrorTimeout: function () {
          this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout),
            this._hideErrorTimeout = null)
        },
        _disableNewMarkers: function () {
          this._disableMarkers = !0
        },
        _enableNewMarkers: function () {
          setTimeout(function () {
              this._disableMarkers = !1
            }
            .bind(this), 50)
        },
        _cleanUpShape: function () {
          1 < this._markers.length && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
        },
        _fireCreatedEvent: function () {
          var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
          h.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
      }),
      h.default.Draw.Polygon = h.default.Draw.Polyline.extend({
        statics: {
          TYPE: "polygon"
        },
        Poly: h.default.Polygon,
        options: {
          showArea: !1,
          showLength: !1,
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
          },
          metric: !0,
          feet: !0,
          nautic: !1,
          precision: {}
        },
        initialize: function (t, e) {
          h.default.Draw.Polyline.prototype.initialize.call(this, t, e),
            this.type = h.default.Draw.Polygon.TYPE
        },
        _updateFinishHandler: function () {
          var t = this._markers.length;
          1 === t && this._markers[0].on("click", this._finishShape, this),
            2 < t && (this._markers[t - 1].on("dblclick", this._finishShape, this),
              3 < t && this._markers[t - 2].off("dblclick", this._finishShape, this))
        },
        _getTooltipText: function () {
          var t, e;
          return 0 === this._markers.length ? t = h.default.drawLocal.draw.handlers.polygon.tooltip.start : (t = this._markers.length < 3 ? h.default.drawLocal.draw.handlers.polygon.tooltip.cont : h.default.drawLocal.draw.handlers.polygon.tooltip.end,
            e = this._getMeasurementString()), {
            text: t,
            subtext: e
          }
        },
        _getMeasurementString: function () {
          var t = this._area,
            e = "";
          return t || this.options.showLength ? (this.options.showLength && (e = h.default.Draw.Polyline.prototype._getMeasurementString.call(this)),
            t && (e += "<br>" + h.default.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)),
            e) : null
        },
        _shapeIsValid: function () {
          return 3 <= this._markers.length
        },
        _vertexChanged: function (t, e) {
          var i;
          !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(),
              this._area = h.default.GeometryUtil.geodesicArea(i)),
            h.default.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
        },
        _cleanUpShape: function () {
          var t = this._markers.length;
          0 < t && (this._markers[0].off("click", this._finishShape, this),
            2 < t && this._markers[t - 1].off("dblclick", this._finishShape, this))
        }
      }),
      h.default.SimpleShape = {},
      h.default.Draw.SimpleShape = h.default.Draw.Feature.extend({
        options: {
          repeatMode: !1
        },
        initialize: function (t, e) {
          this._endLabelText = h.default.drawLocal.draw.handlers.simpleshape.tooltip.end,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function () {
          h.default.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._mapDraggable = this._map.dragging.enabled(),
              this._mapDraggable && this._map.dragging.disable(),
              this._container.style.cursor = "crosshair",
              this._tooltip.updateContent({
                text: this._initialLabelText
              }),
              this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this),
              n.addEventListener("touchstart", h.default.DomEvent.preventDefault, {
                passive: !1
              }))
        },
        removeHooks: function () {
          h.default.Draw.Feature.prototype.removeHooks.call(this),
            this._map && (this._mapDraggable && this._map.dragging.enable(),
              this._container.style.cursor = "",
              this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this),
              h.default.DomEvent.off(n, "mouseup", this._onMouseUp, this),
              h.default.DomEvent.off(n, "touchend", this._onMouseUp, this),
              n.removeEventListener("touchstart", h.default.DomEvent.preventDefault),
              this._shape && (this._map.removeLayer(this._shape),
                delete this._shape)),
            this._isDrawing = !1
        },
        _getTooltipText: function () {
          return {
            text: this._endLabelText
          }
        },
        _onMouseDown: function (t) {
          this._isDrawing = !0,
            this._startLatLng = t.latlng,
            h.default.DomEvent.on(n, "mouseup", this._onMouseUp, this).on(n, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
        },
        _onMouseMove: function (t) {
          var e = t.latlng;
          this._tooltip.updatePosition(e),
            this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()),
              this._drawShape(e))
        },
        _onMouseUp: function () {
          this._shape && this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable()
        }
      }),
      h.default.Draw.Rectangle = h.default.Draw.SimpleShape.extend({
        statics: {
          TYPE: "rectangle"
        },
        options: {
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
          },
          showArea: !0,
          metric: !0
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.Rectangle.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.rectangle.tooltip.start,
            h.default.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        disable: function () {
          this._enabled && (this._isCurrentlyTwoClickDrawing = !1,
            h.default.Draw.SimpleShape.prototype.disable.call(this))
        },
        _onMouseUp: function (t) {
          this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && ! function (t, e) {
            for (;
              (t = t.parentElement) && !t.classList.contains(e);)
            ;
            return t
          }(t.target, "leaflet-pane") || h.default.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
        },
        _drawShape: function (t) {
          this._shape ? this._shape.setBounds(new h.default.LatLngBounds(this._startLatLng, t)) : (this._shape = new h.default.Rectangle(new h.default.LatLngBounds(this._startLatLng, t), this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new h.default.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
          h.default.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _getTooltipText: function () {
          var t, e, i, a = h.default.Draw.SimpleShape.prototype._getTooltipText.call(this),
            n = this._shape,
            o = this.options.showArea;
          return n && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(),
            e = h.default.GeometryUtil.geodesicArea(t),
            i = o ? h.default.GeometryUtil.readableArea(e, this.options.metric) : ""), {
            text: a.text,
            subtext: i
          }
        }
      }),
      h.default.Draw.Marker = h.default.Draw.Feature.extend({
        statics: {
          TYPE: "marker"
        },
        options: {
          icon: new h.default.Icon.Default,
          repeatMode: !1,
          zIndexOffset: 2e3
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.Marker.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.marker.tooltip.start,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function () {
          h.default.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._tooltip.updateContent({
                text: this._initialLabelText
              }),
              this._mouseMarker || (this._mouseMarker = h.default.marker(this._map.getCenter(), {
                icon: h.default.divIcon({
                  className: "leaflet-mouse-marker",
                  iconAnchor: [20, 20],
                  iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
              })),
              this._mouseMarker.on("click", this._onClick, this).addTo(this._map),
              this._map.on("mousemove", this._onMouseMove, this),
              this._map.on("click", this._onTouch, this))
        },
        removeHooks: function () {
          h.default.Draw.Feature.prototype.removeHooks.call(this),
            this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this),
              this._marker && (this._marker.off("click", this._onClick, this),
                this._map.removeLayer(this._marker),
                delete this._marker),
              this._mouseMarker.off("click", this._onClick, this),
              this._map.removeLayer(this._mouseMarker),
              delete this._mouseMarker,
              this._map.off("mousemove", this._onMouseMove, this))
        },
        _onMouseMove: function (t) {
          var e = t.latlng;
          this._tooltip.updatePosition(e),
            this._mouseMarker.setLatLng(e),
            this._marker ? (e = this._mouseMarker.getLatLng(),
              this._marker.setLatLng(e)) : (this._marker = this._createMarker(e),
              this._marker.on("click", this._onClick, this),
              this._map.on("click", this._onClick, this).addLayer(this._marker))
        },
        _createMarker: function (t) {
          return new h.default.Marker(t, {
            icon: this.options.icon,
            zIndexOffset: this.options.zIndexOffset
          })
        },
        _onClick: function () {
          this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable()
        },
        _onTouch: function (t) {
          this._onMouseMove(t),
            this._onClick()
        },
        _fireCreatedEvent: function () {
          var t = new h.default.Marker.Touch(this._marker.getLatLng(), {
            icon: this.options.icon
          });
          h.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
      }),
      h.default.Draw.CircleMarker = h.default.Draw.Marker.extend({
        statics: {
          TYPE: "circlemarker"
        },
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 4,
          opacity: .5,
          fill: !0,
          fillColor: null,
          fillOpacity: .2,
          clickable: !0,
          zIndexOffset: 2e3
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.CircleMarker.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.circlemarker.tooltip.start,
            h.default.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        _fireCreatedEvent: function () {
          var t = new h.default.CircleMarker(this._marker.getLatLng(), this.options);
          h.default.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        },
        _createMarker: function (t) {
          return new h.default.CircleMarker(t, this.options)
        }
      }),
      h.default.Draw.Circle = h.default.Draw.SimpleShape.extend({
        statics: {
          TYPE: "circle"
        },
        options: {
          shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
          },
          showRadius: !0,
          metric: !0,
          feet: !0,
          nautic: !1
        },
        initialize: function (t, e) {
          this.type = h.default.Draw.Circle.TYPE,
            this._initialLabelText = h.default.drawLocal.draw.handlers.circle.tooltip.start,
            h.default.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _drawShape: function (t) {
          if (h.default.GeometryUtil.isVersion07x())
            var e = this._startLatLng.distanceTo(t);
          else
            e = this._map.distance(this._startLatLng, t);
          this._shape ? this._shape.setRadius(e) : (this._shape = new h.default.Circle(this._startLatLng, e, this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function () {
          var t = new h.default.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
          h.default.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _onMouseMove: function (t) {
          var e, i = t.latlng,
            a = this.options.showRadius,
            n = this.options.metric;
          if (this._tooltip.updatePosition(i),
            this._isDrawing) {
            this._drawShape(i),
              e = this._shape.getRadius().toFixed(1);
            var o = "";
            a && (o = h.default.drawLocal.draw.handlers.circle.radius + ": " + h.default.GeometryUtil.readableDistance(e, n, this.options.feet, this.options.nautic)),
              this._tooltip.updateContent({
                text: this._endLabelText,
                subtext: o
              })
          }
        }
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Marker = h.default.Handler.extend({
        initialize: function (t, e) {
          this._marker = t,
            h.default.setOptions(this, e)
        },
        addHooks: function () {
          var t = this._marker;
          t.dragging && t.dragging.enable(),
            t.on("dragend", this._onDragEnd, t),
            this._toggleMarkerHighlight()
        },
        removeHooks: function () {
          var t = this._marker;
          t.dragging && t.dragging.disable(),
            t.off("dragend", this._onDragEnd, t),
            this._toggleMarkerHighlight()
        },
        _onDragEnd: function (t) {
          var e = t.target;
          e.edited = !0,
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: e
            })
        },
        _toggleMarkerHighlight: function () {
          var t = this._marker._icon;
          t && (t.style.display = "none",
            h.default.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (h.default.DomUtil.removeClass(t, "leaflet-edit-marker-selected"),
              this._offsetMarker(t, -4)) : (h.default.DomUtil.addClass(t, "leaflet-edit-marker-selected"),
              this._offsetMarker(t, 4)),
            t.style.display = "")
        },
        _offsetMarker: function (t, e) {
          var i = parseInt(t.style.marginTop, 10) - e,
            a = parseInt(t.style.marginLeft, 10) - e;
          t.style.marginTop = i + "px",
            t.style.marginLeft = a + "px"
        }
      }),
      h.default.Marker.addInitHook(function () {
        h.default.Edit.Marker && (this.editing = new h.default.Edit.Marker(this),
          this.options.editable && this.editing.enable())
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Poly = h.default.Handler.extend({
        initialize: function (t) {
          this.latlngs = [t._latlngs],
            t._holes && (this.latlngs = this.latlngs.concat(t._holes)),
            this._poly = t,
            this._poly.on("revert-edited", this._updateLatLngs, this)
        },
        _defaultShape: function () {
          return h.default.LineUtil.isFlat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0]
        },
        _eachVertexHandler: function (t) {
          for (var e = 0; e < this._verticesHandlers.length; e++)
            t(this._verticesHandlers[e])
        },
        addHooks: function () {
          this._initHandlers(),
            this._eachVertexHandler(function (t) {
              t.addHooks()
            })
        },
        removeHooks: function () {
          this._eachVertexHandler(function (t) {
            t.removeHooks()
          })
        },
        updateMarkers: function () {
          this._eachVertexHandler(function (t) {
            t.updateMarkers()
          })
        },
        _initHandlers: function () {
          this._verticesHandlers = [];
          for (var t = 0; t < this.latlngs.length; t++)
            this._verticesHandlers.push(new h.default.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this._poly.options.poly))
        },
        _updateLatLngs: function (t) {
          this.latlngs = [t.layer._latlngs],
            t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
        }
      }),
      h.default.Edit.PolyVerticesEdit = h.default.Handler.extend({
        options: {
          icon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon"
          }),
          touchIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
          }),
          drawError: {
            color: "#b00b00",
            timeout: 1e3
          }
        },
        initialize: function (t, e, i) {
          h.default.Browser.touch && (this.options.icon = this.options.touchIcon),
            this._poly = t,
            i && i.drawError && (i.drawError = h.default.Util.extend({}, this.options.drawError, i.drawError)),
            this._latlngs = e,
            h.default.setOptions(this, i)
        },
        _defaultShape: function () {
          return h.default.LineUtil.isFlat(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        addHooks: function () {
          var t = this._poly,
            e = t._path;
          null == t.options.editing && t.editing && (t.options.editing = t.editing),
            t instanceof h.default.Polygon || (t.options.fill = !1,
              t.options.editing && (t.options.editing.fill = !1)),
            e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
                h.default.DomUtil.removeClass(e, t)
              }),
              t.options.editing.className.split(" ").forEach(function (t) {
                h.default.DomUtil.addClass(e, t)
              })),
            t.setStyle(t.options.editing),
            this._poly._map && (this._map = this._poly._map,
              this._markerGroup || this._initMarkers(),
              this._poly._map.addLayer(this._markerGroup))
        },
        removeHooks: function () {
          var t = this._poly,
            e = t._path;
          e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach(function (t) {
                h.default.DomUtil.removeClass(e, t)
              }),
              t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
                h.default.DomUtil.addClass(e, t)
              })),
            t.setStyle(t.options.original),
            t._map && (t._map.removeLayer(this._markerGroup),
              delete this._markerGroup,
              delete this._markers)
        },
        updateMarkers: function () {
          this._markerGroup.clearLayers(),
            this._initMarkers()
        },
        _initMarkers: function () {
          this._markerGroup || (this._markerGroup = new h.default.LayerGroup),
            this._markers = [];
          var t, e, i, a, n, o, s = this._defaultShape();
          for (t = 0,
            i = s.length; t < i; t++)
            (a = this._createMarker(s[t], t)).on("click", this._onMarkerClick, this),
            a.on("contextmenu", this._onContextMenu, this),
            this._markers.push(a);
          for (t = 0,
            e = i - 1; t < i; e = t++)
            (0 !== t || h.default.Polygon && this._poly instanceof h.default.Polygon) && (n = this._markers[e],
              o = this._markers[t],
              this._createMiddleMarker(n, o),
              this._updatePrevNext(n, o))
        },
        _createMarker: function (t, e) {
          var i = new h.default.Marker.Touch(t, {
            draggable: !0,
            icon: this.options.icon
          });
          return i._origLatLng = t,
            i._index = e,
            i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this),
            this._markerGroup.addLayer(i),
            i
        },
        _onMarkerDragStart: function () {
          this._poly.fire("editstart")
        },
        _spliceLatLngs: function () {
          var t = this._defaultShape(),
            e = [].splice.apply(t, arguments);
          return this._poly._convertLatLngs(t, !0),
            this._poly.redraw(),
            e
        },
        _removeMarker: function (t) {
          var e = t._index;
          this._markerGroup.removeLayer(t),
            this._markers.splice(e, 1),
            this._spliceLatLngs(e, 1),
            this._updateIndexes(e, -1),
            t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
        },
        _fireEdit: function () {
          this._poly.edited = !0,
            this._poly.fire("edit"),
            this._poly._map.fire(h.default.Draw.Event.EDITVERTEX, {
              layers: this._markerGroup,
              poly: this._poly
            })
        },
        _onMarkerDrag: function (t) {
          var e = t.target,
            i = this._poly,
            a = h.default.LatLngUtil.cloneLatLng(e._origLatLng);
          if (h.default.extend(e._origLatLng, e._latlng),
            i.options.poly) {
            var n = i._map._editTooltip;
            if (!i.options.poly.allowIntersection && i.intersects()) {
              h.default.extend(e._origLatLng, a),
                e.setLatLng(a);
              var o = i.options.color;
              i.setStyle({
                  color: this.options.drawError.color
                }),
                n && n.updateContent({
                  text: h.default.drawLocal.draw.handlers.polyline.error
                }),
                setTimeout(function () {
                  i.setStyle({
                      color: o
                    }),
                    n && n.updateContent({
                      text: h.default.drawLocal.edit.handlers.edit.tooltip.text,
                      subtext: h.default.drawLocal.edit.handlers.edit.tooltip.subtext
                    })
                }, 1e3)
            }
          }
          e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)),
            e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)),
            this._poly._bounds._southWest = h.default.latLng(1 / 0, 1 / 0),
            this._poly._bounds._northEast = h.default.latLng(-1 / 0, -1 / 0);
          var s = this._poly.getLatLngs();
          this._poly._convertLatLngs(s, !0),
            this._poly.redraw(),
            this._poly.fire("editdrag"),
            this._map && this._map.fire("draw:editing", {
              layer: this._poly
            })
        },
        _onMarkerClick: function (t) {
          var e = h.default.Polygon && this._poly instanceof h.default.Polygon ? 4 : 3,
            i = t.target;
          this._defaultShape().length < e || (this._removeMarker(i),
            this._updatePrevNext(i._prev, i._next),
            i._middleLeft && this._markerGroup.removeLayer(i._middleLeft),
            i._middleRight && this._markerGroup.removeLayer(i._middleRight),
            i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null,
            this._fireEdit())
        },
        _onContextMenu: function (t) {
          var e = t.target;
          this._poly,
            this._poly._map.fire(h.default.Draw.Event.MARKERCONTEXT, {
              marker: e,
              layers: this._markerGroup,
              poly: this._poly
            }),
            h.default.DomEvent.stopPropagation
        },
        _onTouchMove: function (t) {
          var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
            i = this._map.layerPointToLatLng(e),
            a = t.target;
          h.default.extend(a._origLatLng, i),
            a._middleLeft && a._middleLeft.setLatLng(this._getMiddleLatLng(a._prev, a)),
            a._middleRight && a._middleRight.setLatLng(this._getMiddleLatLng(a, a._next)),
            this._poly.redraw(),
            this.updateMarkers()
        },
        _updateIndexes: function (e, i) {
          this._markerGroup.eachLayer(function (t) {
            t._index > e && (t._index += i)
          })
        },
        _createMiddleMarker: function (e, i) {
          var a, n, t, o = this._getMiddleLatLng(e, i),
            s = this._createMarker(o);
          s.setOpacity(.6),
            e._middleRight = i._middleLeft = s,
            n = function () {
              s.off("touchmove", n, this);
              var t = i._index;
              s._index = t,
                s.off("click", a, this).on("click", this._onMarkerClick, this),
                o.lat = s.getLatLng().lat,
                o.lng = s.getLatLng().lng,
                this._spliceLatLngs(t, 0, o),
                this._markers.splice(t, 0, s),
                s.setOpacity(1),
                this._updateIndexes(t, 1),
                i._index++,
                this._updatePrevNext(e, s),
                this._updatePrevNext(s, i),
                this._poly.fire("editstart")
            },
            t = function () {
              s.off("dragstart", n, this),
                s.off("dragend", t, this),
                s.off("touchmove", n, this),
                this._createMiddleMarker(e, s),
                this._createMiddleMarker(s, i)
            },
            a = function () {
              n.call(this),
                t.call(this),
                this._fireEdit()
            },
            s.on("click", a, this).on("dragstart", n, this).on("dragend", t, this).on("touchmove", n, this),
            this._markerGroup.addLayer(s)
        },
        _updatePrevNext: function (t, e) {
          t && (t._next = e),
            e && (e._prev = t)
        },
        _getMiddleLatLng: function (t, e) {
          var i = this._poly._map,
            a = i.project(t.getLatLng()),
            n = i.project(e.getLatLng());
          return i.unproject(a._add(n)._divideBy(2))
        }
      }),
      h.default.Polyline.addInitHook(function () {
        this.editing || (h.default.Edit.Poly && (this.editing = new h.default.Edit.Poly(this),
            this.options.editable && this.editing.enable()),
          this.on("add", function () {
            this.editing && this.editing.enabled() && this.editing.addHooks()
          }),
          this.on("remove", function () {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
          }))
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.SimpleShape = h.default.Handler.extend({
        options: {
          moveIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
          }),
          resizeIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
          }),
          touchMoveIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
          }),
          touchResizeIcon: new h.default.DivIcon({
            iconSize: new h.default.Point(15, 15),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
          })
        },
        initialize: function (t, e) {
          h.default.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon,
              this.options.resizeIcon = this.options.touchResizeIcon),
            this._shape = t,
            h.default.Util.setOptions(this, e)
        },
        addHooks: function () {
          var t = this._shape;
          this._shape._map && (this._map = this._shape._map,
            t.setStyle(t.options.editing),
            t._map && (this._map = t._map,
              this._markerGroup || this._initMarkers(),
              this._map.addLayer(this._markerGroup)))
        },
        removeHooks: function () {
          var t = this._shape;
          if (t.setStyle(t.options.original),
            t._map) {
            this._unbindMarker(this._moveMarker);
            for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
              this._unbindMarker(this._resizeMarkers[e]);
            this._resizeMarkers = null,
              this._map.removeLayer(this._markerGroup),
              delete this._markerGroup
          }
          this._map = null
        },
        updateMarkers: function () {
          this._markerGroup.clearLayers(),
            this._initMarkers()
        },
        _initMarkers: function () {
          this._markerGroup || (this._markerGroup = new h.default.LayerGroup),
            this._createMoveMarker(),
            this._createResizeMarker()
        },
        _createMoveMarker: function () {},
        _createResizeMarker: function () {},
        _createMarker: function (t, e) {
          var i = new h.default.Marker.Touch(t, {
            draggable: !0,
            icon: e,
            zIndexOffset: 10
          });
          return this._bindMarker(i),
            this._markerGroup.addLayer(i),
            i
        },
        _bindMarker: function (t) {
          t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
        },
        _unbindMarker: function (t) {
          t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
        },
        _onMarkerDragStart: function (t) {
          t.target.setOpacity(0),
            this._shape.fire("editstart")
        },
        _fireEdit: function () {
          this._shape.edited = !0,
            this._shape.fire("edit")
        },
        _onMarkerDrag: function (t) {
          var e = t.target,
            i = e.getLatLng();
          e === this._moveMarker ? this._move(i) : this._resize(i),
            this._shape.redraw(),
            this._shape.fire("editdrag")
        },
        _onMarkerDragEnd: function (t) {
          t.target.setOpacity(1),
            this._fireEdit()
        },
        _onTouchStart: function (t) {
          if (h.default.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t),
            "function" == typeof this._getCorners) {
            var e = this._getCorners(),
              i = t.target,
              a = i._cornerIndex;
            i.setOpacity(0),
              this._oppositeCorner = e[(a + 2) % 4],
              this._toggleCornerMarkers(0, a)
          }
          this._shape.fire("editstart")
        },
        _onTouchMove: function (t) {
          var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]),
            i = this._map.layerPointToLatLng(e);
          return t.target === this._moveMarker ? this._move(i) : this._resize(i),
            this._shape.redraw(),
            !1
        },
        _onTouchEnd: function (t) {
          t.target.setOpacity(1),
            this.updateMarkers(),
            this._fireEdit()
        },
        _move: function () {},
        _resize: function () {}
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Rectangle = h.default.Edit.SimpleShape.extend({
        _createMoveMarker: function () {
          var t = this._shape.getBounds().getCenter();
          this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function () {
          var t = this._getCorners();
          this._resizeMarkers = [];
          for (var e = 0, i = t.length; e < i; e++)
            this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
            this._resizeMarkers[e]._cornerIndex = e
        },
        _onMarkerDragStart: function (t) {
          h.default.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
          var e = this._getCorners(),
            i = t.target._cornerIndex;
          this._oppositeCorner = e[(i + 2) % 4],
            this._toggleCornerMarkers(0, i)
        },
        _onMarkerDragEnd: function (t) {
          var e, i = t.target;
          i === this._moveMarker && (e = this._shape.getBounds().getCenter(),
              i.setLatLng(e)),
            this._toggleCornerMarkers(1),
            this._repositionCornerMarkers(),
            h.default.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
        },
        _move: function (t) {
          for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), a = this._shape.getBounds().getCenter(), n = [], o = 0, s = i.length; o < s; o++)
            e = [i[o].lat - a.lat, i[o].lng - a.lng],
            n.push([t.lat + e[0], t.lng + e[1]]);
          this._shape.setLatLngs(n),
            this._repositionCornerMarkers(),
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: this._shape
            })
        },
        _resize: function (t) {
          var e;
          this._shape.setBounds(h.default.latLngBounds(t, this._oppositeCorner)),
            e = this._shape.getBounds(),
            this._moveMarker.setLatLng(e.getCenter()),
            this._map.fire(h.default.Draw.Event.EDITRESIZE, {
              layer: this._shape
            })
        },
        _getCorners: function () {
          var t = this._shape.getBounds();
          return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
        },
        _toggleCornerMarkers: function (t) {
          for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
            this._resizeMarkers[e].setOpacity(t)
        },
        _repositionCornerMarkers: function () {
          for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++)
            this._resizeMarkers[e].setLatLng(t[e])
        }
      }),
      h.default.Rectangle.addInitHook(function () {
        h.default.Edit.Rectangle && (this.editing = new h.default.Edit.Rectangle(this),
          this.options.editable && this.editing.enable())
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.CircleMarker = h.default.Edit.SimpleShape.extend({
        _createMoveMarker: function () {
          var t = this._shape.getLatLng();
          this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function () {
          this._resizeMarkers = []
        },
        _move: function (t) {
          if (this._resizeMarkers.length) {
            var e = this._getResizeMarkerPoint(t);
            this._resizeMarkers[0].setLatLng(e)
          }
          this._shape.setLatLng(t),
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: this._shape
            })
        }
      }),
      h.default.CircleMarker.addInitHook(function () {
        h.default.Edit.CircleMarker && (this.editing = new h.default.Edit.CircleMarker(this),
            this.options.editable && this.editing.enable()),
          this.on("add", function () {
            this.editing && this.editing.enabled() && this.editing.addHooks()
          }),
          this.on("remove", function () {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
          })
      }),
      h.default.Edit = h.default.Edit || {},
      h.default.Edit.Circle = h.default.Edit.CircleMarker.extend({
        _createResizeMarker: function () {
          var t = this._shape.getLatLng(),
            e = this._getResizeMarkerPoint(t);
          this._resizeMarkers = [],
            this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
        },
        _getResizeMarkerPoint: function (t) {
          var e = this._shape._radius * Math.cos(Math.PI / 4),
            i = this._map.project(t);
          return this._map.unproject([i.x + e, i.y - e])
        },
        _resize: function (t) {
          var e, i = this._moveMarker.getLatLng();
          e = h.default.GeometryUtil.isVersion07x() ? i.distanceTo(t) : this._map.distance(i, t),
            this._shape.setRadius(e),
            this._map.editTooltip && this._map._editTooltip.updateContent({
              text: h.default.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + h.default.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: h.default.drawLocal.draw.handlers.circle.radius + ": " + h.default.GeometryUtil.readableDistance(e, !0, this.options.feet, this.options.nautic)
            }),
            this._shape.setRadius(e),
            this._map.fire(h.default.Draw.Event.EDITRESIZE, {
              layer: this._shape
            })
        }
      }),
      h.default.Circle.addInitHook(function () {
        h.default.Edit.Circle && (this.editing = new h.default.Edit.Circle(this),
          this.options.editable && this.editing.enable())
      }),
      h.default.Map.mergeOptions({
        touchExtend: !0
      }),
      h.default.Map.TouchExtend = h.default.Handler.extend({
        initialize: function (t) {
          this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane
        },
        addHooks: function () {
          h.default.DomEvent.on(this._container, "touchstart", this._onTouchStart, this),
            h.default.DomEvent.on(this._container, "touchend", this._onTouchEnd, this),
            h.default.DomEvent.on(this._container, "touchmove", this._onTouchMove, this),
            this._detectIE() ? (h.default.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this),
              h.default.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this),
              h.default.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this),
              h.default.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (h.default.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this),
              h.default.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
        },
        removeHooks: function () {
          h.default.DomEvent.off(this._container, "touchstart", this._onTouchStart, this),
            h.default.DomEvent.off(this._container, "touchend", this._onTouchEnd, this),
            h.default.DomEvent.off(this._container, "touchmove", this._onTouchMove, this),
            this._detectIE() ? (h.default.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this),
              h.default.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this),
              h.default.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this),
              h.default.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (h.default.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this),
              h.default.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
        },
        _touchEvent: function (t, e) {
          var i = {};
          if (void 0 !== t.touches) {
            if (!t.touches.length)
              return;
            i = t.touches[0]
          } else {
            if ("touch" !== t.pointerType)
              return;
            if (i = t,
              !this._filterClick(t))
              return
          }
          var a = this._map.mouseEventToContainerPoint(i),
            n = this._map.mouseEventToLayerPoint(i),
            o = this._map.layerPointToLatLng(n);
          this._map.fire(e, {
            latlng: o,
            layerPoint: n,
            containerPoint: a,
            pageX: i.pageX,
            pageY: i.pageY,
            originalEvent: t
          })
        },
        _filterClick: function (t) {
          var e = t.timeStamp || t.originalEvent.timeStamp,
            i = h.default.DomEvent._lastClick && e - h.default.DomEvent._lastClick;
          return i && 100 < i && i < 500 || t.target._simulatedClick && !t._simulated ? (h.default.DomEvent.stop(t),
            !1) : (h.default.DomEvent._lastClick = e,
            !0)
        },
        _onTouchStart: function (t) {
          this._map._loaded && this._touchEvent(t, "touchstart")
        },
        _onTouchEnd: function (t) {
          this._map._loaded && this._touchEvent(t, "touchend")
        },
        _onTouchCancel: function (t) {
          if (this._map._loaded) {
            var e = "touchcancel";
            this._detectIE() && (e = "pointercancel"),
              this._touchEvent(t, e)
          }
        },
        _onTouchLeave: function (t) {
          this._map._loaded && this._touchEvent(t, "touchleave")
        },
        _onTouchMove: function (t) {
          this._map._loaded && this._touchEvent(t, "touchmove")
        },
        _detectIE: function () {
          var t = o.navigator.userAgent,
            e = t.indexOf("MSIE ");
          if (0 < e)
            return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
          if (0 < t.indexOf("Trident/")) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
          }
          var a = t.indexOf("Edge/");
          return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
        }
      }),
      h.default.Map.addInitHook("addHandler", "touchExtend", h.default.Map.TouchExtend),
      h.default.Marker.Touch = h.default.Marker.extend({
        _initInteraction: function () {
          return this.addInteractiveTarget ? h.default.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
        },
        _initInteractionLegacy: function () {
          if (this.options.clickable) {
            var t = this._icon,
              e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
            this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]),
              h.default.DomUtil.addClass(t, "leaflet-clickable"),
              h.default.DomEvent.on(t, "click", this._onMouseClick, this),
              h.default.DomEvent.on(t, "keypress", this._onKeyPress, this);
            for (var i = 0; i < e.length; i++)
              h.default.DomEvent.on(t, e[i], this._fireMouseEvent, this);
            h.default.Handler.MarkerDrag && (this.dragging = new h.default.Handler.MarkerDrag(this),
              this.options.draggable && this.dragging.enable())
          }
        },
        _detectIE: function () {
          var t = o.navigator.userAgent,
            e = t.indexOf("MSIE ");
          if (0 < e)
            return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
          if (0 < t.indexOf("Trident/")) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
          }
          var a = t.indexOf("Edge/");
          return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
        }
      }),
      h.default.LatLngUtil = {
        cloneLatLngs: function (t) {
          for (var e = [], i = 0, a = t.length; i < a; i++)
            Array.isArray(t[i]) ? e.push(h.default.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
          return e
        },
        cloneLatLng: function (t) {
          return h.default.latLng(t.lat, t.lng)
        }
      },
      s = {
        km: 2,
        ha: 2,
        m: 0,
        mi: 2,
        ac: 2,
        yd: 0,
        ft: 0,
        nm: 2
      },
      h.default.GeometryUtil = h.default.extend(h.default.GeometryUtil || {}, {
        geodesicArea: function (t) {
          var e, i, a = t.length,
            n = 0,
            o = Math.PI / 180;
          if (2 < a) {
            for (var s = 0; s < a; s++)
              e = t[s],
              n += ((i = t[(s + 1) % a]).lng - e.lng) * o * (2 + Math.sin(e.lat * o) + Math.sin(i.lat * o));
            n = 6378137 * n * 6378137 / 2
          }
          return Math.abs(n)
        },
        formattedNumber: function (t, e) {
          var i = parseFloat(t).toFixed(e),
            a = h.default.drawLocal.format && h.default.drawLocal.format.numeric,
            n = a && a.delimiters,
            o = n && n.thousands,
            s = n && n.decimal;
          if (o || s) {
            var r = i.split(".");
            i = o ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o) : r[0],
              s = s || ".",
              1 < r.length && (i = i + s + r[1])
          }
          return i
        },
        readableArea: function (t, e, i) {
          var a, n;
          return i = h.default.Util.extend({}, s, i),
            e ? (a = ["ha", "m"],
              "string" === (n = void 0 === e ? "undefined" : r(e)) ? a = [e] : "boolean" !== n && (a = e),
              1e6 <= t && -1 !== a.indexOf("km") ? h.default.GeometryUtil.formattedNumber(1e-6 * t, i.km) + " km²" : 1e4 <= t && -1 !== a.indexOf("ha") ? h.default.GeometryUtil.formattedNumber(1e-4 * t, i.ha) + " ha" : h.default.GeometryUtil.formattedNumber(t, i.m) + " m²") : 3097600 <= (t /= .836127) ? h.default.GeometryUtil.formattedNumber(t / 3097600, i.mi) + " mi²" : 4840 <= t ? h.default.GeometryUtil.formattedNumber(t / 4840, i.ac) + " acres" : h.default.GeometryUtil.formattedNumber(t, i.yd) + " yd²"
        },
        readableDistance: function (t, e, i, a, n) {
          var o;
          switch (n = h.default.Util.extend({}, s, n),
            e ? "string" == typeof e ? e : "metric" : i ? "feet" : a ? "nauticalMile" : "yards") {
            case "metric":
              o = 1e3 < t ? h.default.GeometryUtil.formattedNumber(t / 1e3, n.km) + " km" : h.default.GeometryUtil.formattedNumber(t, n.m) + " m";
              break;
            case "feet":
              t *= 3.28083,
                o = h.default.GeometryUtil.formattedNumber(t, n.ft) + " ft";
              break;
            case "nauticalMile":
              t *= .53996,
                o = h.default.GeometryUtil.formattedNumber(t / 1e3, n.nm) + " nm";
              break;
            case "yards":
            default:
              o = 1760 < (t *= 1.09361) ? h.default.GeometryUtil.formattedNumber(t / 1760, n.mi) + " miles" : h.default.GeometryUtil.formattedNumber(t, n.yd) + " yd"
          }
          return o
        },
        isVersion07x: function () {
          var t = h.default.version.split(".");
          return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
        }
      }),
      h.default.Util.extend(h.default.LineUtil, {
        segmentsIntersect: function (t, e, i, a) {
          return this._checkCounterclockwise(t, i, a) !== this._checkCounterclockwise(e, i, a) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, a)
        },
        _checkCounterclockwise: function (t, e, i) {
          return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
        }
      }),
      h.default.Polyline.include({
        intersects: function () {
          var t, e, i, a = this._getProjectedPoints(),
            n = a ? a.length : 0;
          if (this._tooFewPointsForIntersection())
            return !1;
          for (t = n - 1; 3 <= t; t--)
            if (e = a[t - 1],
              i = a[t],
              this._lineSegmentsIntersectsRange(e, i, t - 2))
              return !0;
          return !1
        },
        newLatLngIntersects: function (t, e) {
          return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
        },
        newPointIntersects: function (t, e) {
          var i = this._getProjectedPoints(),
            a = i ? i.length : 0,
            n = i ? i[a - 1] : null,
            o = a - 2;
          return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(n, t, o, e ? 1 : 0)
        },
        _tooFewPointsForIntersection: function (t) {
          var e = this._getProjectedPoints(),
            i = e ? e.length : 0;
          return !e || (i += t || 0) <= 3
        },
        _lineSegmentsIntersectsRange: function (t, e, i, a) {
          var n, o, s = this._getProjectedPoints();
          a = a || 0;
          for (var r = i; a < r; r--)
            if (n = s[r - 1],
              o = s[r],
              h.default.LineUtil.segmentsIntersect(t, e, n, o))
              return !0;
          return !1
        },
        _getProjectedPoints: function () {
          if (!this._defaultShape)
            return this._originalPoints;
          for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++)
            t.push(this._map.latLngToLayerPoint(e[i]));
          return t
        }
      }),
      h.default.Polygon.include({
        intersects: function () {
          var t, e, i, a, n = this._getProjectedPoints();
          return !this._tooFewPointsForIntersection() && (!!h.default.Polyline.prototype.intersects.call(this) || (t = n.length,
            e = n[0],
            i = n[t - 1],
            a = t - 2,
            this._lineSegmentsIntersectsRange(i, e, a, 1)))
        }
      }),
      h.default.Control.Draw = h.default.Control.extend({
        options: {
          position: "topleft",
          draw: {},
          edit: !1
        },
        initialize: function (t) {
          if (h.default.version < "0.7")
            throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
          var e;
          h.default.Control.prototype.initialize.call(this, t),
            this._toolbars = {},
            h.default.DrawToolbar && this.options.draw && (e = new h.default.DrawToolbar(this.options.draw),
              this._toolbars[h.default.DrawToolbar.TYPE] = e,
              this._toolbars[h.default.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
            h.default.EditToolbar && this.options.edit && (e = new h.default.EditToolbar(this.options.edit),
              this._toolbars[h.default.EditToolbar.TYPE] = e,
              this._toolbars[h.default.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
            h.default.toolbar = this
        },
        onAdd: function (t) {
          var e, i = h.default.DomUtil.create("div", "leaflet-draw"),
            a = !1;
          for (var n in this._toolbars)
            this._toolbars.hasOwnProperty(n) && (e = this._toolbars[n].addToolbar(t)) && (a || (h.default.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || h.default.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"),
                a = !0),
              i.appendChild(e));
          return i
        },
        onRemove: function () {
          for (var t in this._toolbars)
            this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
        },
        setDrawingOptions: function (t) {
          for (var e in this._toolbars)
            this._toolbars[e] instanceof h.default.DrawToolbar && this._toolbars[e].setOptions(t)
        },
        _toolbarEnabled: function (t) {
          var e = t.target;
          for (var i in this._toolbars)
            this._toolbars[i] !== e && this._toolbars[i].disable()
        }
      }),
      h.default.Map.mergeOptions({
        drawControlTooltips: !0,
        drawControl: !1
      }),
      h.default.Map.addInitHook(function () {
        this.options.drawControl && (this.drawControl = new h.default.Control.Draw,
          this.addControl(this.drawControl))
      }),
      h.default.Toolbar = h.default.Class.extend({
        initialize: function (t) {
          h.default.setOptions(this, t),
            this._modes = {},
            this._actionButtons = [],
            this._activeMode = null;
          var e = h.default.version.split(".");
          1 === parseInt(e[0], 10) && 2 <= parseInt(e[1], 10) ? h.default.Toolbar.include(h.default.Evented.prototype) : h.default.Toolbar.include(h.default.Mixin.Events)
        },
        enabled: function () {
          return null !== this._activeMode
        },
        disable: function () {
          this.enabled() && this._activeMode.handler.disable()
        },
        addToolbar: function (t) {
          var e, i = h.default.DomUtil.create("div", "leaflet-draw-section"),
            a = 0,
            n = this._toolbarClass || "",
            o = this.getModeHandlers(t);
          for (this._toolbarContainer = h.default.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"),
            this._map = t,
            e = 0; e < o.length; e++)
            o[e].enabled && this._initModeHandler(o[e].handler, this._toolbarContainer, a++, n, o[e].title);
          if (a)
            return this._lastButtonIndex = --a,
              this._actionsContainer = h.default.DomUtil.create("ul", "leaflet-draw-actions"),
              i.appendChild(this._toolbarContainer),
              i.appendChild(this._actionsContainer),
              i
        },
        removeToolbar: function () {
          for (var t in this._modes)
            this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler),
              this._modes[t].handler.disable(),
              this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
          this._modes = {};
          for (var e = 0, i = this._actionButtons.length; e < i; e++)
            this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
          this._actionButtons = [],
            this._actionsContainer = null
        },
        _initModeHandler: function (t, e, i, a, n) {
          var o = t.type;
          this._modes[o] = {},
            this._modes[o].handler = t,
            this._modes[o].button = this._createButton({
              type: o,
              title: n,
              className: a + "-" + o,
              container: e,
              callback: this._modes[o].handler.enable,
              context: this._modes[o].handler
            }),
            this._modes[o].buttonIndex = i,
            this._modes[o].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
        },
        _detectIOS: function () {
          return /iPad|iPhone|iPod/.test(navigator.userAgent) && !o.MSStream
        },
        _createButton: function (t) {
          var e = h.default.DomUtil.create("a", t.className || "", t.container),
            i = h.default.DomUtil.create("span", "sr-only", t.container);
          e.href = "#",
            e.appendChild(i),
            t.title && (e.title = t.title,
              i.innerHTML = t.title),
            t.text && (e.innerHTML = t.text,
              i.innerHTML = t.text);
          var a = this._detectIOS() ? "touchstart" : "click";
          return h.default.DomEvent.on(e, "click", h.default.DomEvent.stopPropagation).on(e, "mousedown", h.default.DomEvent.stopPropagation).on(e, "dblclick", h.default.DomEvent.stopPropagation).on(e, "touchstart", h.default.DomEvent.stopPropagation).on(e, "click", h.default.DomEvent.preventDefault).on(e, a, t.callback, t.context),
            e
        },
        _disposeButton: function (t, e) {
          var i = this._detectIOS() ? "touchstart" : "click";
          h.default.DomEvent.off(t, "click", h.default.DomEvent.stopPropagation).off(t, "mousedown", h.default.DomEvent.stopPropagation).off(t, "dblclick", h.default.DomEvent.stopPropagation).off(t, "touchstart", h.default.DomEvent.stopPropagation).off(t, "click", h.default.DomEvent.preventDefault).off(t, i, e)
        },
        _handlerActivated: function (t) {
          this.disable(),
            this._activeMode = this._modes[t.handler],
            h.default.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
            this._showActionsToolbar(),
            this.fire("enable")
        },
        _handlerDeactivated: function () {
          this._hideActionsToolbar(),
            h.default.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
            this._activeMode = null,
            this.fire("disable")
        },
        _createActions: function (t) {
          var e, i, a, n, o = this._actionsContainer,
            s = this.getActions(t),
            r = s.length;
          for (i = 0,
            a = this._actionButtons.length; i < a; i++)
            this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
          for (this._actionButtons = []; o.firstChild;)
            o.removeChild(o.firstChild);
          for (var l = 0; l < r; l++)
            "enabled" in s[l] && !s[l].enabled || (e = h.default.DomUtil.create("li", "", o),
              n = this._createButton({
                title: s[l].title,
                text: s[l].text,
                container: e,
                callback: s[l].callback,
                context: s[l].context
              }),
              this._actionButtons.push({
                button: n,
                callback: s[l].callback
              }))
        },
        _showActionsToolbar: function () {
          var t = this._activeMode.buttonIndex,
            e = this._lastButtonIndex,
            i = this._activeMode.button.offsetTop - 1;
          this._createActions(this._activeMode.handler),
            this._actionsContainer.style.top = i + "px",
            0 === t && (h.default.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
              h.default.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")),
            t === e && (h.default.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
              h.default.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")),
            this._actionsContainer.style.display = "block",
            this._map.fire(h.default.Draw.Event.TOOLBAROPENED)
        },
        _hideActionsToolbar: function () {
          this._actionsContainer.style.display = "none",
            h.default.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
            h.default.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
            h.default.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"),
            h.default.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"),
            this._map.fire(h.default.Draw.Event.TOOLBARCLOSED)
        }
      }),
      h.default.Draw = h.default.Draw || {},
      h.default.Draw.Tooltip = h.default.Class.extend({
        initialize: function (t) {
          this._map = t,
            this._popupPane = t._panes.popupPane,
            this._visible = !1,
            this._container = t.options.drawControlTooltips ? h.default.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null,
            this._singleLineLabel = !1,
            this._map.on("mouseout", this._onMouseOut, this)
        },
        dispose: function () {
          this._map.off("mouseout", this._onMouseOut, this),
            this._container && (this._popupPane.removeChild(this._container),
              this._container = null)
        },
        updateContent: function (t) {
          return this._container && (t.subtext = t.subtext || "",
              0 !== t.subtext.length || this._singleLineLabel ? 0 < t.subtext.length && this._singleLineLabel && (h.default.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"),
                this._singleLineLabel = !1) : (h.default.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"),
                this._singleLineLabel = !0),
              this._container.innerHTML = (0 < t.subtext.length ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>",
              t.text || t.subtext ? (this._visible = !0,
                this._container.style.visibility = "inherit") : (this._visible = !1,
                this._container.style.visibility = "hidden")),
            this
        },
        updatePosition: function (t) {
          var e = this._map.latLngToLayerPoint(t),
            i = this._container;
          return this._container && (this._visible && (i.style.visibility = "inherit"),
              h.default.DomUtil.setPosition(i, e)),
            this
        },
        showAsError: function () {
          return this._container && h.default.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"),
            this
        },
        removeError: function () {
          return this._container && h.default.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"),
            this
        },
        _onMouseOut: function () {
          this._container && (this._container.style.visibility = "hidden")
        }
      }),
      h.default.DrawToolbar = h.default.Toolbar.extend({
        statics: {
          TYPE: "draw"
        },
        options: {
          polyline: {},
          polygon: {},
          rectangle: {},
          circle: {},
          marker: {},
          circlemarker: {}
        },
        initialize: function (t) {
          for (var e in this.options)
            this.options.hasOwnProperty(e) && t[e] && (t[e] = h.default.extend({}, this.options[e], t[e]));
          this._toolbarClass = "leaflet-draw-draw",
            h.default.Toolbar.prototype.initialize.call(this, t)
        },
        getModeHandlers: function (t) {
          return [{
            enabled: this.options.polyline,
            handler: new h.default.Draw.Polyline(t, this.options.polyline),
            title: h.default.drawLocal.draw.toolbar.buttons.polyline
          }, {
            enabled: this.options.polygon,
            handler: new h.default.Draw.Polygon(t, this.options.polygon),
            title: h.default.drawLocal.draw.toolbar.buttons.polygon
          }, {
            enabled: this.options.rectangle,
            handler: new h.default.Draw.Rectangle(t, this.options.rectangle),
            title: h.default.drawLocal.draw.toolbar.buttons.rectangle
          }, {
            enabled: this.options.circle,
            handler: new h.default.Draw.Circle(t, this.options.circle),
            title: h.default.drawLocal.draw.toolbar.buttons.circle
          }, {
            enabled: this.options.marker,
            handler: new h.default.Draw.Marker(t, this.options.marker),
            title: h.default.drawLocal.draw.toolbar.buttons.marker
          }, {
            enabled: this.options.circlemarker,
            handler: new h.default.Draw.CircleMarker(t, this.options.circlemarker),
            title: h.default.drawLocal.draw.toolbar.buttons.circlemarker
          }]
        },
        getActions: function (t) {
          return [{
            enabled: t.completeShape,
            title: h.default.drawLocal.draw.toolbar.finish.title,
            text: h.default.drawLocal.draw.toolbar.finish.text,
            callback: t.completeShape,
            context: t
          }, {
            enabled: t.deleteLastVertex,
            title: h.default.drawLocal.draw.toolbar.undo.title,
            text: h.default.drawLocal.draw.toolbar.undo.text,
            callback: t.deleteLastVertex,
            context: t
          }, {
            title: h.default.drawLocal.draw.toolbar.actions.title,
            text: h.default.drawLocal.draw.toolbar.actions.text,
            callback: this.disable,
            context: this
          }]
        },
        setOptions: function (t) {
          for (var e in h.default.setOptions(this, t),
              this._modes)
            this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
        }
      }),
      h.default.EditToolbar = h.default.Toolbar.extend({
        statics: {
          TYPE: "edit"
        },
        options: {
          edit: {
            selectedPathOptions: {
              dashArray: "10, 10",
              fill: !0,
              fillColor: "#fe57a1",
              fillOpacity: .1,
              maintainColor: !1
            }
          },
          remove: {},
          poly: null,
          featureGroup: null
        },
        initialize: function (t) {
          t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions),
              t.edit.selectedPathOptions = h.default.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)),
            t.remove && (t.remove = h.default.extend({}, this.options.remove, t.remove)),
            t.poly && (t.poly = h.default.extend({}, this.options.poly, t.poly)),
            this._toolbarClass = "leaflet-draw-edit",
            h.default.Toolbar.prototype.initialize.call(this, t),
            this._selectedFeatureCount = 0
        },
        getModeHandlers: function (t) {
          var e = this.options.featureGroup;
          return [{
            enabled: this.options.edit,
            handler: new h.default.EditToolbar.Edit(t, {
              featureGroup: e,
              selectedPathOptions: this.options.edit.selectedPathOptions,
              poly: this.options.poly
            }),
            title: h.default.drawLocal.edit.toolbar.buttons.edit
          }, {
            enabled: this.options.remove,
            handler: new h.default.EditToolbar.Delete(t, {
              featureGroup: e
            }),
            title: h.default.drawLocal.edit.toolbar.buttons.remove
          }]
        },
        getActions: function (t) {
          var e = [{
            title: h.default.drawLocal.edit.toolbar.actions.save.title,
            text: h.default.drawLocal.edit.toolbar.actions.save.text,
            callback: this._save,
            context: this
          }, {
            title: h.default.drawLocal.edit.toolbar.actions.cancel.title,
            text: h.default.drawLocal.edit.toolbar.actions.cancel.text,
            callback: this.disable,
            context: this
          }];
          return t.removeAllLayers && e.push({
              title: h.default.drawLocal.edit.toolbar.actions.clearAll.title,
              text: h.default.drawLocal.edit.toolbar.actions.clearAll.text,
              callback: this._clearAllLayers,
              context: this
            }),
            e
        },
        addToolbar: function (t) {
          var e = h.default.Toolbar.prototype.addToolbar.call(this, t);
          return this._checkDisabled(),
            this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this),
            e
        },
        removeToolbar: function () {
          this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this),
            h.default.Toolbar.prototype.removeToolbar.call(this)
        },
        disable: function () {
          this.enabled() && (this._activeMode.handler.revertLayers(),
            h.default.Toolbar.prototype.disable.call(this))
        },
        _save: function () {
          this._activeMode.handler.save(),
            this._activeMode && this._activeMode.handler.disable()
        },
        _clearAllLayers: function () {
          this._activeMode.handler.removeAllLayers(),
            this._activeMode && this._activeMode.handler.disable()
        },
        _checkDisabled: function () {
          var t, e = 0 !== this.options.featureGroup.getLayers().length;
          this.options.edit && (t = this._modes[h.default.EditToolbar.Edit.TYPE].button,
              e ? h.default.DomUtil.removeClass(t, "leaflet-disabled") : h.default.DomUtil.addClass(t, "leaflet-disabled"),
              t.setAttribute("title", e ? h.default.drawLocal.edit.toolbar.buttons.edit : h.default.drawLocal.edit.toolbar.buttons.editDisabled)),
            this.options.remove && (t = this._modes[h.default.EditToolbar.Delete.TYPE].button,
              e ? h.default.DomUtil.removeClass(t, "leaflet-disabled") : h.default.DomUtil.addClass(t, "leaflet-disabled"),
              t.setAttribute("title", e ? h.default.drawLocal.edit.toolbar.buttons.remove : h.default.drawLocal.edit.toolbar.buttons.removeDisabled))
        }
      }),
      h.default.EditToolbar.Edit = h.default.Handler.extend({
        statics: {
          TYPE: "edit"
        },
        initialize: function (t, e) {
          if (h.default.Handler.prototype.initialize.call(this, t),
            h.default.setOptions(this, e),
            this._featureGroup = e.featureGroup,
            !(this._featureGroup instanceof h.default.FeatureGroup))
            throw new Error("options.featureGroup must be a L.FeatureGroup");
          this._uneditedLayerProps = {},
            this.type = h.default.EditToolbar.Edit.TYPE;
          var i = h.default.version.split(".");
          1 === parseInt(i[0], 10) && 2 <= parseInt(i[1], 10) ? h.default.EditToolbar.Edit.include(h.default.Evented.prototype) : h.default.EditToolbar.Edit.include(h.default.Mixin.Events)
        },
        enable: function () {
          !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
              handler: this.type
            }),
            this._map.fire(h.default.Draw.Event.EDITSTART, {
              handler: this.type
            }),
            h.default.Handler.prototype.enable.call(this),
            this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
        },
        disable: function () {
          this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this),
            h.default.Handler.prototype.disable.call(this),
            this._map.fire(h.default.Draw.Event.EDITSTOP, {
              handler: this.type
            }),
            this.fire("disabled", {
              handler: this.type
            }))
        },
        addHooks: function () {
          var t = this._map;
          t && (t.getContainer().focus(),
            this._featureGroup.eachLayer(this._enableLayerEdit, this),
            this._tooltip = new h.default.Draw.Tooltip(this._map),
            this._tooltip.updateContent({
              text: h.default.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: h.default.drawLocal.edit.handlers.edit.tooltip.subtext
            }),
            t._editTooltip = this._tooltip,
            this._updateTooltip(),
            this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(h.default.Draw.Event.EDITVERTEX, this._updateTooltip, this))
        },
        removeHooks: function () {
          this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this),
            this._uneditedLayerProps = {},
            this._tooltip.dispose(),
            this._tooltip = null,
            this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(h.default.Draw.Event.EDITVERTEX, this._updateTooltip, this))
        },
        revertLayers: function () {
          this._featureGroup.eachLayer(function (t) {
            this._revertLayer(t)
          }, this)
        },
        save: function () {
          var e = new h.default.LayerGroup;
          this._featureGroup.eachLayer(function (t) {
              t.edited && (e.addLayer(t),
                t.edited = !1)
            }),
            this._map.fire(h.default.Draw.Event.EDITED, {
              layers: e
            })
        },
        _backupLayer: function (t) {
          var e = h.default.Util.stamp(t);
          this._uneditedLayerProps[e] || (t instanceof h.default.Polyline || t instanceof h.default.Polygon || t instanceof h.default.Rectangle ? this._uneditedLayerProps[e] = {
            latlngs: h.default.LatLngUtil.cloneLatLngs(t.getLatLngs())
          } : t instanceof h.default.Circle ? this._uneditedLayerProps[e] = {
            latlng: h.default.LatLngUtil.cloneLatLng(t.getLatLng()),
            radius: t.getRadius()
          } : (t instanceof h.default.Marker || t instanceof h.default.CircleMarker) && (this._uneditedLayerProps[e] = {
            latlng: h.default.LatLngUtil.cloneLatLng(t.getLatLng())
          }))
        },
        _getTooltipText: function () {
          return {
            text: h.default.drawLocal.edit.handlers.edit.tooltip.text,
            subtext: h.default.drawLocal.edit.handlers.edit.tooltip.subtext
          }
        },
        _updateTooltip: function () {
          this._tooltip.updateContent(this._getTooltipText())
        },
        _revertLayer: function (t) {
          var e = h.default.Util.stamp(t);
          t.edited = !1,
            this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof h.default.Polyline || t instanceof h.default.Polygon || t instanceof h.default.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof h.default.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng),
                t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof h.default.Marker || t instanceof h.default.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng),
              t.fire("revert-edited", {
                layer: t
              }))
        },
        _enableLayerEdit: function (t) {
          var e, i, a = t.layer || t.target || t;
          this._backupLayer(a),
            this.options.poly && (i = h.default.Util.extend({}, this.options.poly),
              a.options.poly = i),
            this.options.selectedPathOptions && ((e = h.default.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = a.options.color,
                e.fillColor = a.options.fillColor),
              a.options.original = h.default.extend({}, a.options),
              a.options.editing = e),
            a instanceof h.default.Marker ? (a.editing && a.editing.enable(),
              a.dragging.enable(),
              a.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : a.editing.enable()
        },
        _disableLayerEdit: function (t) {
          var e = t.layer || t.target || t;
          e.edited = !1,
            e.editing && e.editing.disable(),
            delete e.options.editing,
            delete e.options.original,
            this._selectedPathOptions && (e instanceof h.default.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions),
              delete e.options.previousOptions)),
            e instanceof h.default.Marker ? (e.dragging.disable(),
              e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable()
        },
        _onMouseMove: function (t) {
          this._tooltip.updatePosition(t.latlng)
        },
        _onMarkerDragEnd: function (t) {
          var e = t.target;
          e.edited = !0,
            this._map.fire(h.default.Draw.Event.EDITMOVE, {
              layer: e
            })
        },
        _onTouchMove: function (t) {
          var e = t.originalEvent.changedTouches[0],
            i = this._map.mouseEventToLayerPoint(e),
            a = this._map.layerPointToLatLng(i);
          t.target.setLatLng(a)
        },
        _hasAvailableLayers: function () {
          return 0 !== this._featureGroup.getLayers().length
        }
      }),
      h.default.EditToolbar.Delete = h.default.Handler.extend({
        statics: {
          TYPE: "remove"
        },
        initialize: function (t, e) {
          if (h.default.Handler.prototype.initialize.call(this, t),
            h.default.Util.setOptions(this, e),
            this._deletableLayers = this.options.featureGroup,
            !(this._deletableLayers instanceof h.default.FeatureGroup))
            throw new Error("options.featureGroup must be a L.FeatureGroup");
          this.type = h.default.EditToolbar.Delete.TYPE;
          var i = h.default.version.split(".");
          1 === parseInt(i[0], 10) && 2 <= parseInt(i[1], 10) ? h.default.EditToolbar.Delete.include(h.default.Evented.prototype) : h.default.EditToolbar.Delete.include(h.default.Mixin.Events)
        },
        enable: function () {
          !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
              handler: this.type
            }),
            this._map.fire(h.default.Draw.Event.DELETESTART, {
              handler: this.type
            }),
            h.default.Handler.prototype.enable.call(this),
            this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
        },
        disable: function () {
          this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this),
            h.default.Handler.prototype.disable.call(this),
            this._map.fire(h.default.Draw.Event.DELETESTOP, {
              handler: this.type
            }),
            this.fire("disabled", {
              handler: this.type
            }))
        },
        addHooks: function () {
          var t = this._map;
          t && (t.getContainer().focus(),
            this._deletableLayers.eachLayer(this._enableLayerDelete, this),
            this._deletedLayers = new h.default.LayerGroup,
            this._tooltip = new h.default.Draw.Tooltip(this._map),
            this._tooltip.updateContent({
              text: h.default.drawLocal.edit.handlers.remove.tooltip.text
            }),
            this._map.on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function () {
          this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
            this._deletedLayers = null,
            this._tooltip.dispose(),
            this._tooltip = null,
            this._map.off("mousemove", this._onMouseMove, this))
        },
        revertLayers: function () {
          this._deletedLayers.eachLayer(function (t) {
            this._deletableLayers.addLayer(t),
              t.fire("revert-deleted", {
                layer: t
              })
          }, this)
        },
        save: function () {
          this._map.fire(h.default.Draw.Event.DELETED, {
            layers: this._deletedLayers
          })
        },
        removeAllLayers: function () {
          this._deletableLayers.eachLayer(function (t) {
              this._removeLayer({
                layer: t
              })
            }, this),
            this.save()
        },
        _enableLayerDelete: function (t) {
          (t.layer || t.target || t).on("click", this._removeLayer, this)
        },
        _disableLayerDelete: function (t) {
          var e = t.layer || t.target || t;
          e.off("click", this._removeLayer, this),
            this._deletedLayers.removeLayer(e)
        },
        _removeLayer: function (t) {
          var e = t.layer || t.target || t;
          this._deletableLayers.removeLayer(e),
            this._deletedLayers.addLayer(e),
            e.fire("deleted")
        },
        _onMouseMove: function (t) {
          this._tooltip.updatePosition(t.latlng)
        },
        _hasAvailableLayers: function () {
          return 0 !== this._deletableLayers.getLayers().length
        }
      })
  }, function (t, e) {}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.Marker = void 0;
    var a, n = i(1),
      m = (a = n) && a.__esModule ? a : {
        default: a
      },
      o = m.default.Class.extend({
        map: null,
        layerBase: null,
        layerPoint: null,
        layerText: null,
        textShowZoom: -1,
        minZoom: -1,
        maxZoom: 99,
        options: null,
        initialize: function (e) {
          this.options = e || {},
            this.map = e.map,
            this.minZoom = e.minZoom || -1,
            this.maxZoom = e.maxZoom || 99,
            this.textShowZoom = e.textShowZoom || 15,
            this._visible = !e.hasOwnProperty("visible") || e.visible,
            this.layerBase = m.default.layerGroup([]),
            this._visible && this.map.addLayer(this.layerBase),
            this.layerText = m.default.featureGroup([]).addTo(this.layerBase),
            this.options.isCluster ? this.layerPoint = m.default.markerClusterGroup({
              chunkedLoading: !0,
              showCoverageOnHover: !1,
              disableClusteringAtZoom: this.textShowZoom
            }).addTo(this.layerBase) : this.layerPoint = m.default.featureGroup([]).addTo(this.layerBase),
            this.map.on("zoomend", this.map_zoomendHandler, this),
            this.map_zoomendHandler(),
            this.options.click && (this.layerText.on("click", function (t) {
                e.click(t.layer.attribute, t.layer)
              }, this),
              this.layerPoint.on("click", function (t) {
                e.click(t.layer.attribute, t.layer)
              }, this)),
            this.options.dblclick && (this.layerText.on("dblclick", function (t) {
                e.dblclick(t.layer.attribute, t.layer)
              }, this),
              this.layerPoint.on("dblclick", function (t) {
                e.dblclick(t.layer.attribute, t.layer)
              }, this))
        },
        getLayer: function () {
          return this.layerBase
        },
        map_zoomendHandler: function (t) {
          if (this._visible) {
            var e = this.map.getZoom();
            this.minZoom <= e && e <= this.maxZoom ? (this.map.addLayer(this.layerBase),
              this.updatePointSize(e),
              e >= this.textShowZoom ? this.layerBase.addLayer(this.layerText) : this.layerBase.removeLayer(this.layerText)) : this.map.removeLayer(this.layerBase)
          }
        },
        updatePointSize: function (t) {
          if (this.options.isAutoZoomSize) {
            var e = map.getZoomScale(t, 16) * Math.pow(.55, t - 16);
            1 < e && (e = 1);
            for (var i = this.layerPoint.getLayers(), a = 0; a < i.length; a++) {
              var n = i[a],
                o = n.options.icon.options;
              o.iconSize && (o.iconSizeDef || (o.iconSizeDef = [o.iconSize[0], o.iconSize[1]]),
                  o.iconSize[0] = o.iconSizeDef[0] * e,
                  o.iconSize[1] = o.iconSizeDef[1] * e),
                o.iconAnchor && (o.iconAnchorDef || (o.iconAnchorDef = [o.iconAnchor[0], o.iconAnchor[1]]),
                  o.iconAnchor[0] = o.iconAnchorDef[0] * e,
                  o.iconAnchor[1] = o.iconAnchorDef[1] * e),
                n.options.icon instanceof m.default.DivIcon ? n.setIcon(m.default.divIcon(o)) : n.options.icon instanceof m.default.Icon && n.setIcon(m.default.icon(o))
            }
          }
        },
        _visible: !0,
        visible: function (t) {
          (this._visible = t) ? (this.map.addLayer(this.layerBase),
            this.map_zoomendHandler()) : this.map.removeLayer(this.layerBase)
        },
        clear: function () {
          this.layerPoint.clearLayers(),
            this.layerText.clearLayers()
        },
        _isBindPopup: !1,
        _isBindTooltip: !1,
        arrData: null,
        showData: function (t, e) {
          if (this.arrData = t,
            this.clear(),
            null != t && 0 != t.length) {
            (e = e || {}).name = e.name || {};
            for (var i = e.name.jd || "jd", a = e.name.wd || "wd", n = e.name.mc || "mc", o = 0; o < t.length; o++) {
              var s, r = t[o],
                l = r[i],
                h = r[a],
                u = r[n];
              if (isNaN(l) || isNaN(h) || 0 == l || 0 == h)
                return;
              s = "function" == typeof e.icon ? e.icon(r) : e.icon;
              var c = m.default.marker([h, l], {
                icon: s
              });
              if (e.bindPopup) {
                this._isBindPopup = !0;
                var d = e.bindPopup(r);
                c.bindPopup(d)
              }
              if (e.bindTooltip) {
                this._isBindTooltip = !0;
                d = e.bindTooltip(r);
                c.bindTooltip(d)
              }
              c.attribute = r,
                this.layerPoint.addLayer(c),
                r._marker_point = c;
              var f = e.fontsize || 13,
                _ = u.replace(/[\u0391-\uFFE5]/g, "aa").length * f / 2,
                p = 5;
              s.options.iconSize && 1 < s.options.iconSize.length && (p += s.options.iconSize[1] || 10,
                  s.options.iconAnchor && 1 < s.options.iconAnchor.length && (p -= s.options.iconAnchor[1] || 0)),
                (c = m.default.marker([h, l], {
                  icon: m.default.divIcon({
                    iconSize: [_, f],
                    iconAnchor: [_ / 2, -p],
                    className: "leaflet-text-marker",
                    html: u
                  })
                })).attribute = r,
                this.layerText.addLayer(c),
                r._marker_text = c
            }
            return e.hasOwnProperty("isCenter") || (e.isCenter = !0),
              e.isCenter && this.map.fitBounds(this.layerPoint.getBounds()),
              this.updatePointSize(this.map.getZoom()),
              this.layerPoint.getLayers()
          }
        },
        getData: function () {
          return arrData
        },
        getItemById: function (t, e) {
          e = e || "id";
          for (var i = this.arrData, a = 0; a < i.length; a++) {
            var n = i[a];
            if (n[e] == t)
              return n
          }
          return null
        },
        getMarkerById: function (t, e) {
          e = e || "id";
          for (var i = this.layerPoint.getLayers(), a = 0; a < i.length; a++) {
            var n = i[a];
            if (n.attribute[e] == t)
              return n
          }
          return null
        },
        lastCenter: null,
        lastCenterAnimation: null,
        centerAt: function (t, e, i) {
          this.clearCenter();
          var a = this.getMarkerById(t, e);
          if (null == a)
            return !1;
          var n = a.getLatLng();
          if (this.map.centerAt(n),
            this._isBindTooltip && a.openTooltip(n),
            this._isBindPopup && a.openPopup(n),
            this.lastCenter = a,
            i) {
            var o = m.default.marker(n, {
              icon: m.default.divIcon({
                className: "",
                iconSize: [10, 10],
                iconAnchor: [5, 5],
                popupAnchor: [5, -5],
                tooltipAnchor: [5, -5],
                html: '<div class="centerat_animation" style="color:#0f89f5;"><p></p></div>'
              })
            });
            this.map.addLayer(o),
              this.lastCenterAnimation = o;
            var s = this;
            setTimeout(function () {
              null != s.lastCenterAnimation && (s.lastCenterAnimation.remove(),
                s.lastCenterAnimation = null)
            }, 6e3)
          }
          return !0
        },
        clearCenter: function () {
          null != this.lastCenter && (this._isBindTooltip && this.lastCenter.closeTooltip(),
              this._isBindPopup && this.lastCenter.closePopup(),
              this.lastCenter = null),
            null != this.lastCenterAnimation && (this.lastCenterAnimation.remove(),
              this.lastCenterAnimation = null)
        }
      });
    e.Marker = o
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.MeasureTool = void 0;
    var a, n = i(1),
      o = (a = n) && a.__esModule ? a : {
        default: a
      };
    i(42);
    var s = o.default.Class.extend({
      map: null,
      initialize: function (t) {
        t = t || {},
          this.map = t.map,
          this._create(),
          t.hasOwnProperty("isactivate") && !t.options || this.activate()
      },
      layerDraw: null,
      layerResult: null,
      polylineControl: null,
      polygonControl: null,
      _create: function () {
        this.layerDraw = o.default.featureGroup().addTo(this.map),
          this.layerResult = o.default.featureGroup().addTo(this.map);
        var t = {
          color: "#0000ff",
          weight: 2
        };
        this.polylineControl = new o.default.Draw.Polyline(this.map, {
            shapeOptions: t
          }),
          this.polygonControl = new o.default.Draw.Polygon(this.map, {
            allowIntersection: !1,
            showArea: !0,
            metric: ["km", "m"],
            shapeOptions: t
          })
      },
      isActivate: !1,
      activate: function () {
        this.isActivate || (this.isActivate = !0,
          this.map.addLayer(this.layerResult),
          this.map.addLayer(this.layerDraw),
          this.layerDraw.on("click", this._layerDraw_clickHndler, this),
          this.map.on("click", this._map_clickHndler, this),
          this.map.on("dblclick", this._map_dblclickHndler, this),
          this.map.on("draw:created", this._map_draw_createdHndler, this),
          this.map.on("draw:drawvertex", this._map_draw_drawvertexHandler, this),
          this.map.on("draw:drawing", this._map_draw_drawing, this),
          this.map.on("draw:editvertex", this._map_draw_changeHandler, this),
          this.map.on("draw:editmove", this._map_draw_changeHandler, this),
          this.map.on("draw:editresize", this._map_draw_changeHandler, this))
      },
      disable: function () {
        this.isActivate = !1,
          this.clear(),
          this.map.removeLayer(this.layerDraw),
          this.map.removeLayer(this.layerResult),
          this.layerDraw.off("click", this._layerDraw_clickHndler, this),
          this.map.off("click", this._map_clickHndler, this),
          this.map.off("dblclick", this._map_dblclickHndler, this),
          this.map.off("draw:created", this._map_draw_createdHndler, this),
          this.map.off("draw:drawvertex", this._map_draw_drawvertexHandler, this),
          this.map.off("draw:drawing", this._map_draw_drawing, this),
          this.map.off("draw:editvertex", this._map_draw_changeHandler, this),
          this.map.off("draw:editmove", this._map_draw_changeHandler, this),
          this.map.off("draw:editresize", this._map_draw_changeHandler, this)
      },
      currEditFeature: null,
      startEditing: function (t) {
        null != t && (t.editing.enable(),
          this.currEditFeature = t)
      },
      stopEditing: function () {
        this.currEditFeature && this.currEditFeature.editing && this.currEditFeature.editing.disable && this.currEditFeature.editing.disable(),
          this.currEditFeature = null
      },
      _map_clickHndler: function (t) {
        this.stopEditing()
      },
      _layerDraw_clickHndler: function (t) {
        t.layer != this.currEditFeature && this.stopEditing(),
          this.startEditing(t.layer),
          o.default.DomEvent.stopPropagation(t)
      },
      _map_draw_changeHandler: function (t) {
        var e = this.currEditFeature;
        if ("polyline" == e.type) {
          if (e.tipMarker)
            for (var i = 0; i < e.tipMarker.length; i++) {
              (o = e.tipMarker[i]).remove()
            }
          e.tipMarker = [];
          for (var a = e.getLatLngs(), n = 0; n < a.length; n++) {
            var o = this._showLengthTipMarker(a.slice(0, n + 1));
            n == a.length - 1 && (o._isend = !0,
                o._icon.innerHTML = "总长：" + o._icon.innerHTML),
              e.tipMarker.push(o)
          }
          this._showResultLength(a)
        } else {
          e.tipMarker && e.tipMarker.remove();
          a = e.getLatLngs()[0];
          this._showResultArea(a),
            this._showAreaTipMarker(e)
        }
      },
      clear: function () {
        return this._stopDraw(),
          this._last_length_val = 0,
          this._last_area_val = 0,
          this._length_tipmarker = [],
          this.layerDraw.clearLayers(),
          this.layerResult.clearLayers(),
          this
      },
      _stopDraw: function () {
        this._length_tipmarker = [],
          this.polylineControl.disable(),
          this.polygonControl.disable()
      },
      _drawType: "",
      _drawParams: null,
      measureLength: function (t) {
        return this._drawType = "length",
          this._drawParams = t,
          this._stopDraw(),
          this.polylineControl.enable(),
          this
      },
      measureArea: function (t) {
        return this._drawType = "area",
          this._drawParams = t,
          this._stopDraw(),
          this.polygonControl.enable(),
          this
      },
      _map_draw_drawvertexHandler: function (t) {
        var e = t.layers.getLayers();
        if ("length" == this._drawType) {
          for (var i = [], a = 0; a < e.length; a++) {
            var n = (s = e[a]).getLatLng();
            if (i.push(n),
              !s.tipMarker) {
              var o = this._showLengthTipMarker(i);
              this._length_tipmarker.push(o),
                s.tipMarker = o
            }
          }
          this._showResultLength(i)
        } else if ("area" == this._drawType) {
          for (i = [],
            a = 0; a < e.length; a++) {
            var s;
            n = (s = e[a]).getLatLng();
            i.push(n)
          }
          this._showResultArea(i)
        }
      },
      _map_draw_createdHndler: function (t) {
        var e = t.layer;
        if (e.type = t.layerType,
          this.layerDraw.addLayer(e),
          "polyline" == t.layerType) {
          var i = e.getLatLngs();
          this._showResultLength(i);
          var a = this._length_tipmarker[this._length_tipmarker.length - 1];
          a._isend = !0,
            a._icon.innerHTML = "总长：" + a._icon.innerHTML,
            e.tipMarker = this._length_tipmarker
        } else if ("polygon" == t.layerType) {
          i = e.getLatLngs()[0];
          this._showResultArea(i),
            this._showAreaTipMarker(e)
        }
        this._drawParams && this._drawParams.drawend && this._drawParams.drawend()
      },
      _map_dblclickHndler: function (t) {
        o.default.DomEvent.stopPropagation(t),
          this.polygonControl._enabled && this.polygonControl._finishShape && this.polygonControl._finishShape()
      },
      _map_draw_drawing: function (t) {
        var e = t.layer,
          i = t.latlng;
        if (e instanceof o.default.Polyline) {
          var a = e.getLatLngs().concat([i]);
          if (a.length < 2)
            return;
          "length" == this._drawType ? this._showResultLength(a) : this._showResultArea(a)
        }
      },
      _formatLength: function (t, e) {
        var i = "";
        switch (null == e && (e = this._drawParams && this._drawParams.unit ? "function" == typeof this._drawParams.unit ? this._drawParams.unit() : this._drawParams.unit : t < 1e3 ? "m" : "km"),
          "auto" == e && (e = t < 1e3 ? "m" : "km"),
          e) {
          default:
          case "m":
            i = t.toFixed(0) + " 米";
            break;
          case "km":
            i = (.001 * t).toFixed(2) + " 公里";
            break;
          case "mile":
            i = (54e-5 * t).toFixed(2) + " 海里";
            break;
          case "zhang":
            i = (.3 * t).toFixed(2) + " 丈"
        }
        return i
      },
      _length_tipmarker: [],
      _showLengthTipMarker: function (t) {
        var e, i, a;
        1 == t.length ? e = "起点" : (i = o.default.mars.measure.length(t),
          e = this._formatLength(i),
          2 < t.length && (a = o.default.mars.measure.length([t[t.length - 1], t[t.length - 2]]),
            e += "<br>(+" + this._formatLength(a) + ")"));
        var n = o.default.marker(t[t.length - 1], {
          icon: o.default.divIcon({
            className: "leaflet-measuretool-result",
            html: e,
            iconSize: [null, null],
            iconAnchor: [-20, 12]
          })
        }).addTo(this.layerResult);
        return n._length = i,
          n._length2D = a,
          n
      },
      updateLengthUnit: function (t) {
        for (var e = this.layerDraw.getLayers(), i = 0; i < e.length; i++) {
          var a = e[i];
          if ("polyline" == a.type)
            for (var n = 0; n < a.tipMarker.length; n++) {
              var o = a.tipMarker[n];
              if (null != o._length) {
                var s = this._formatLength(o._length, t);
                o._length2D && (s += "<br>(+" + this._formatLength(o._length2D, t) + ")"),
                  o._isend ? o._icon.innerHTML = "总长：" + s : o._icon.innerHTML = s
              }
            }
        }
      },
      _last_length_val: 0,
      _showResultLength: function (t) {
        this._last_length_val = o.default.mars.measure.length(t);
        var e = this._formatLength(this._last_length_val);
        this._drawParams && this._drawParams.showResult && "function" == typeof this._drawParams.showResult && this._drawParams.showResult(e, this._last_length_val)
      },
      _formatArea: function (t, e) {
        var i = "";
        switch (null == e && (e = this._drawParams && this._drawParams.unit ? "function" == typeof this._drawParams.unit ? this._drawParams.unit() : this._drawParams.unit : t < 1e6 ? "m" : "km"),
          "auto" == e && (e = t < 1e6 ? "m" : "km"),
          e) {
          default:
          case "m":
            i = t.toFixed(0) + " 平方米";
            break;
          case "km":
            i = (t / 1e6).toFixed(2) + " 平方公里";
            break;
          case "mu":
            i = (.0015 * t).toFixed(2) + " 亩";
            break;
          case "ha":
            i = (1e-4 * t).toFixed(2) + " 公顷"
        }
        return i
      },
      _showAreaTipMarker: function (t) {
        var e = t.getCenter(),
          i = this._formatArea(this._last_area_val),
          a = o.default.marker(e, {
            icon: o.default.divIcon({
              className: "leaflet-measuretool-result",
              html: i,
              iconSize: [null, 25],
              iconAnchor: [10 * i.length / 2, 12]
            })
          }).addTo(this.layerResult);
        return a._area = this._last_area_val,
          t.tipMarker = a
      },
      updateAreaUnit: function (t) {
        for (var e = this.layerDraw.getLayers(), i = 0; i < e.length; i++) {
          var a = e[i];
          if ("polygon" == a.type) {
            var n = a.tipMarker,
              o = this._formatArea(n._area, t);
            n._icon.innerHTML = o
          }
        }
      },
      _last_area_val: 0,
      _showResultArea: function (t) {
        this._last_area_val = o.default.mars.measure.area(t);
        var e = this._formatArea(this._last_area_val);
        this._drawParams && this._drawParams.showResult && "function" == typeof this._drawParams.showResult && this._drawParams.showResult(e, this._last_area_val)
      }
    });
    e.MeasureTool = s
  }, function (t, e, i) {
    "use strict";

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.BaseWidget = void 0;
    var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } :
      function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      l = a(i(6)),
      n = a(i(1)),
      o = i(44),
      u = i(43),
      s = [],
      r = n.default.Class.extend({
        map: null,
        options: {},
        config: {},
        path: "",
        isActivate: !1,
        isCreate: !1,
        initialize: function (t, e) {
          this.map = e,
            this.config = t,
            this.path = t.path || "",
            this.init()
        },
        addCacheVersion: function (t) {
          if (null == t)
            return t;
          var e = (0,
            u.getCacheVersion)();
          return e && (-1 == t.indexOf("?") ? t += "?time=" + e : -1 == t.indexOf("time=" + e) && (t += "&time=" + e)),
            t
        },
        activateBase: function () {
          var t = this;
          if (!this.isActivate) {
            if (this.beforeActivate(),
              this.isActivate = !0,
              !this.isCreate) {
              if (this.options.resources && 0 < this.options.resources.length) {
                for (var e = [], i = 0; i < this.options.resources.length; i++) {
                  var a = this.options.resources[i];
                  a = this._getUrl(a),
                    -1 == s.indexOf(a) && e.push(a)
                }
                return s = s.concat(e),
                  void o.Loader.async(e, function () {
                    if (!t.create(function () {
                        t._createWidgetView(),
                          t.isCreate = !0
                      })) {
                      if (t.config.createAtStart)
                        return t.config.createAtStart = !1,
                          t.isActivate = !1,
                          void(t.isCreate = !0);
                      t._createWidgetView(),
                        t.isCreate = !0
                    }
                  })
              }
              if (this.create(function () {
                  t._createWidgetView(),
                    this.isCreate = !0
                }))
                return;
              if (t.config.createAtStart)
                return t.config.createAtStart = !1,
                  t.isActivate = !1,
                  void(t.isCreate = !0);
              this.isCreate = !0
            }
            return this._createWidgetView(),
              this
          }
          this.changeWidgetView(function (t) {
            t._dom && ((0,
                l.default)(".layui-layer").each(function () {
                (0,
                  l.default)(this).css("z-index", 19891e3)
              }),
              (0,
                l.default)(t._dom).css("z-index", 19891014))
          })
        },
        _createWidgetView: function () {
          var t = this.options.view;
          if (null == t)
            this._startActivate();
          else if (n.default.Util.isArray(t)) {
            this._viewcreate_allcount = t.length;
            for (var e = this._viewcreate_okcount = 0; e < t.length; e++)
              this.createItemView(t[e])
          } else
            this._viewcreate_allcount = 1,
            this._viewcreate_okcount = 0,
            this.createItemView(t)
        },
        changeWidgetView: function (t) {
          var e = this.options.view;
          if (null == e)
            return !1;
          if (n.default.Util.isArray(e)) {
            for (var i = !1, a = 0; a < e.length; a++)
              i = i || t(e[a]);
            return i
          }
          return t(e)
        },
        createItemView: function (e) {
          switch (e.type) {
            default:
            case "window":
              this._openWindow(e);
              break;
            case "divwindow":
              this._openDivWindow(e);
              break;
            case "append":
              this._appendView(e);
              break;
            case "custom":
              var t = this._getUrl(e.url),
                i = this;
              e.open(t, function (t) {
                i.winCreateOK(e, t),
                  ++i._viewcreate_okcount >= i._viewcreate_allcount && i._startActivate(t)
              }, this)
          }
        },
        _viewcreate_allcount: 0,
        _viewcreate_okcount: 0,
        _openWindow: function (i) {
          var a = this,
            n = this._getUrl(i.url),
            t = {
              type: 2,
              content: [n, "no"],
              success: function (t) {
                i._layerOpening = !1,
                  i._dom = t;
                var e = window[t.find("iframe")[0].name];
                a.config.hasOwnProperty("visible") && !a.config.visible && (0,
                    l.default)(t).hide(),
                  layer.setTop(t),
                  a.winCreateOK(i, e),
                  a._viewcreate_okcount++,
                  a._viewcreate_okcount >= a._viewcreate_allcount && a._startActivate(t),
                  e && e.initWidgetView ? e.initWidgetView(a) : console.error(n + "页面没有定义function initWidgetView(widget)方法，无法初始化widget页面!")
              }
            };
          i._layerIdx,
            i._layerOpening = !0,
            i._layerIdx = layer.open(this._getWinOpt(i, t))
        },
        _openDivWindow: function (i) {
          var t = this._getUrl(i.url),
            a = this;
          this.getHtml(t, function (t) {
            var e = {
              type: 1,
              content: t,
              success: function (t) {
                i._layerOpening = !1,
                  i._dom = t,
                  a.config.hasOwnProperty("visible") && !a.config.visible && (0,
                    l.default)(t).hide(),
                  layer.setTop(t),
                  a.winCreateOK(i, t),
                  ++a._viewcreate_okcount >= a._viewcreate_allcount && a._startActivate(t)
              }
            };
            i._layerOpening = !0,
              i._layerIdx = layer.open(a._getWinOpt(i, e))
          })
        },
        _getUrl: function (t) {
          return (t = this.addCacheVersion(t)).startsWith("/") || t.startsWith(".") || t.startsWith("http") ? t : this.path + t
        },
        _getWinOpt: function (t, e) {
          var i = (0,
              u.getDefWindowOptions)(),
            a = l.default.extend(i, t.windowOptions);
          a = l.default.extend(a, this.config.windowOptions),
            t.windowOptions = a;
          var n = this,
            o = this._getWinSize(a),
            s = {
              title: !a.noTitle && (this.config.name || " "),
              area: o.area,
              offset: o.offset,
              shade: 0,
              maxmin: !1,
              zIndex: layer.zIndex,
              end: function () {
                t._layerIdx = -1,
                  t._dom = null,
                  n.disableBase()
              },
              full: function (t) {
                n.winFull(t)
              },
              min: function (t) {
                n.winMin(t)
              },
              restore: function (t) {
                n.winRestore(t)
              }
            },
            r = l.default.extend(s, a);
          return l.default.extend(r, e || {})
        },
        _getWinSize: function (t) {
          var e = t.width,
            i = t.height,
            a = "",
            n = t.position;
          if (n)
            if ("string" == typeof n)
              a = n;
            else if ("object" == (void 0 === n ? "undefined" : h(n))) {
            var o, s;
            if (n.hasOwnProperty("top") && null != n.top && (o = this.bfb2Number(n.top, document.documentElement.clientHeight, t)),
              n.hasOwnProperty("bottom") && null != n.bottom) {
              t._hasresize = !0;
              var r = this.bfb2Number(n.bottom, document.documentElement.clientHeight, t);
              o ? i = document.documentElement.clientHeight - o - r : o = document.documentElement.clientHeight - i - r
            }
            if (n.hasOwnProperty("left") && null != n.left && (s = this.bfb2Number(n.left, document.documentElement.clientWidth, t)),
              n.hasOwnProperty("right") && null != n.right) {
              t._hasresize = !0;
              var l = this.bfb2Number(n.right, document.documentElement.clientWidth, t);
              s ? e = document.documentElement.clientWidth - s - l : s = document.documentElement.clientWidth - e - l
            }
            null == o && (o = (document.documentElement.clientHeight - i) / 2),
              null == s && (s = (document.documentElement.clientWidth - e) / 2),
              a = [o + "px", s + "px"]
          }
          return {
            area: e && i ? [e + "px", i + "px"] : e + "px",
            offset: a
          }
        },
        bfb2Number: function (t, e, i) {
          return "string" == typeof t && -1 != t.indexOf("%") ? (i._hasresize = !0,
            e * Number(t.replace("%", "")) / 100) : t
        },
        _appendView: function (e) {
          if (this.isCreate && e._dom)
            (0,
              l.default)(e._dom).show({
              duration: 500
            }),
            this._startActivate(e._dom);
          else {
            var t = this._getUrl(e.url),
              i = this;
            i.getHtml(t, function (t) {
              e._dom = (0,
                  l.default)(t).appendTo(e.parent || "body"),
                i.winCreateOK(e, t),
                ++i._viewcreate_okcount >= i._viewcreate_allcount && i._startActivate(t)
            })
          }
        },
        disableBase: function () {
          this.isActivate && (this.beforeDisable(),
            this.changeWidgetView(function (t) {
              return null != t._layerIdx && -1 != t._layerIdx ? (t._layerOpening,
                layer.close(t._layerIdx),
                !0) : ("append" == t.type && t._dom && (0,
                  l.default)(t._dom).hide({
                  duration: 1e3
                }),
                "custom" == t.type && t.close && t.close(),
                !1)
            }) || (this.disable(),
              this.isActivate = !1))
        },
        indexResize: function () {
          if (this.isActivate) {
            var a = this;
            this.changeWidgetView(function (t) {
              if (null != t._layerIdx && -1 != t._layerIdx && null != t.windowOptions && t.windowOptions._hasresize) {
                var e = a._getWinSize(t.windowOptions),
                  i = {
                    width: e.area[0],
                    height: e.area[1],
                    top: e.offset[0],
                    left: e.offset[1]
                  };
                (0,
                  l.default)(t._dom).attr("myTopLeft", !0),
                  layer.style(t._layerIdx, i),
                  "divwindow" == t.type && layer.iframeAuto(t._layerIdx)
              }
            })
          }
        },
        _startActivate: function (t) {
          this.activate(t),
            this.config.success && this.config.success(this),
            this.isActivate || this.disableBase()
        },
        init: function () {},
        create: function (t) {},
        beforeActivate: function () {},
        activate: function (t) {},
        beforeDisable: function () {},
        disable: function () {},
        winCreateOK: function (t, e) {},
        winFull: function () {},
        winMin: function () {},
        winRestore: function () {},
        getHtml: function (t, e) {
          l.default.ajax({
            url: t,
            type: "GET",
            dataType: "html",
            timeout: 0,
            success: function (t) {
              e(t)
            }
          })
        }
      });
    e.BaseWidget = r
  }])
});