/* 2017-10-19 11:14:19 | 版权所有 火星科技 http://marsgis.cn  【联系我们QQ：516584683，微信：marsgis】 */ ! function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
      if (!e.document)
        throw new Error("jQuery requires a window with a document");
      return t(e)
    } :
    t(e)
}("undefined" != typeof window ? window : this, function (h, e) {
  var t = [],
    c = t.slice,
    g = t.concat,
    a = t.push,
    i = t.indexOf,
    n = {},
    r = n.toString,
    v = n.hasOwnProperty,
    m = {},
    y = h.document,
    o = "2.1.4",
    C = function (e, t) {
      return new C.fn.init(e, t)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^-ms-/,
    l = /-([\da-z])/gi,
    f = function (e, t) {
      return t.toUpperCase()
    };

  function p(e) {
    var t = "length" in e && e.length,
      n = C.type(e);
    return "function" !== n && !C.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
  }
  C.fn = C.prototype = {
      jquery: o,
      constructor: C,
      selector: "",
      length: 0,
      toArray: function () {
        return c.call(this)
      },
      get: function (e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
      },
      pushStack: function (e) {
        var t = C.merge(this.constructor(), e);
        return t.prevObject = this,
          t.context = this.context,
          t
      },
      each: function (e, t) {
        return C.each(this, e, t)
      },
      map: function (n) {
        return this.pushStack(C.map(this, function (e, t) {
          return n.call(e, t, e)
        }))
      },
      slice: function () {
        return this.pushStack(c.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor(null)
      },
      push: a,
      sort: t.sort,
      splice: t.splice
    },
    C.extend = C.fn.extend = function () {
      var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof s && (l = s,
          s = arguments[a] || {},
          a++),
        "object" == typeof s || C.isFunction(s) || (s = {}),
        a === u && (s = this,
          a--); a < u; a++)
        if (null != (e = arguments[a]))
          for (t in e)
            n = s[t],
            s !== (r = e[t]) && (l && r && (C.isPlainObject(r) || (i = C.isArray(r))) ? (o = i ? (i = !1,
                n && C.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {},
              s[t] = C.extend(l, o, r)) : void 0 !== r && (s[t] = r));
      return s
    },
    C.extend({
      expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === C.type(e)
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window
      },
      isNumeric: function (e) {
        return !C.isArray(e) && 0 <= e - parseFloat(e) + 1
      },
      isPlainObject: function (e) {
        return "object" === C.type(e) && !e.nodeType && !C.isWindow(e) && !(e.constructor && !v.call(e.constructor.prototype, "isPrototypeOf"))
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e)
          return !1;
        return !0
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
      },
      globalEval: function (e) {
        var t, n = eval;
        (e = C.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e,
          y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function (e) {
        return e.replace(u, "ms-").replace(l, f)
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function (e, t, n) {
        var r = 0,
          i = e.length,
          o = p(e);
        if (n) {
          if (o)
            for (; r < i && !1 !== t.apply(e[r], n); r++)
          ;
          else
            for (r in e)
              if (!1 === t.apply(e[r], n))
                break
        } else if (o)
          for (; r < i && !1 !== t.call(e[r], r, e[r]); r++)
        ;
        else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r]))
              break;
        return e
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(s, "")
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (p(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
          n
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++)
          e[i++] = t[r];
        return e.length = i,
          e
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) !== s && r.push(e[i]);
        return r
      },
      map: function (e, t, n) {
        var r, i = 0,
          o = e.length,
          s = [];
        if (p(e))
          for (; i < o; i++)
            null != (r = t(e[i], i, n)) && s.push(r);
        else
          for (i in e)
            null != (r = t(e[i], i, n)) && s.push(r);
        return g.apply([], s)
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
          C.isFunction(e) ? (r = c.call(arguments, 2),
            (i = function () {
              return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++,
            i) : void 0
      },
      now: Date.now,
      support: m
    }),
    C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
      n["[object " + t + "]"] = t.toLowerCase()
    });
  var d = function (n) {
    var e, h, b, o, r, g, f, v, w, l, c, m, T, i, y, x, s, a, C, N = "sizzle" + 1 * new Date,
      k = n.document,
      E = 0,
      p = 0,
      u = oe(),
      d = oe(),
      S = oe(),
      D = function (e, t) {
        return e === t && (c = !0),
          0
      },
      j = {}.hasOwnProperty,
      t = [],
      A = t.pop,
      L = t.push,
      q = t.push,
      H = t.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t)
            return n;
        return -1
      },
      F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      P = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      M = R.replace("w", "w#"),
      W = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
      $ = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      I = new RegExp(P + "+", "g"),
      B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
      _ = new RegExp("^" + P + "*," + P + "*"),
      z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
      X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
      U = new RegExp($),
      V = new RegExp("^" + M + "$"),
      Y = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + F + ")$", "i"),
        needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
      },
      G = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      ee = /'|\\/g,
      te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      },
      re = function () {
        m()
      };
    try {
      q.apply(t = H.call(k.childNodes), k.childNodes),
        t[k.childNodes.length].nodeType
    } catch (e) {
      q = {
        apply: t.length ? function (e, t) {
          L.apply(e, H.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];)
          ;
          e.length = n - 1
        }
      }
    }

    function ie(e, t, n, r) {
      var i, o, s, a, u, l, c, f, p, d;
      if ((t ? t.ownerDocument || t : k) !== T && m(t),
        n = n || [],
        a = (t = t || T).nodeType,
        "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
        return n;
      if (!r && y) {
        if (11 !== a && (i = K.exec(e)))
          if (s = i[1]) {
            if (9 === a) {
              if (!(o = t.getElementById(s)) || !o.parentNode)
                return n;
              if (o.id === s)
                return n.push(o),
                  n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && C(t, o) && o.id === s)
              return n.push(o),
                n
          } else {
            if (i[2])
              return q.apply(n, t.getElementsByTagName(e)),
                n;
            if ((s = i[3]) && h.getElementsByClassName)
              return q.apply(n, t.getElementsByClassName(s)),
                n
          }
        if (h.qsa && (!x || !x.test(e))) {
          if (f = c = N,
            p = t,
            d = 1 !== a && e,
            1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = g(e),
              (c = t.getAttribute("id")) ? f = c.replace(ee, "\\$&") : t.setAttribute("id", f),
              f = "[id='" + f + "'] ",
              u = l.length; u--;)
              l[u] = f + ge(l[u]);
            p = Z.test(e) && de(t.parentNode) || t,
              d = l.join(",")
          }
          if (d)
            try {
              return q.apply(n, p.querySelectorAll(d)),
                n
            } catch (e) {} finally {
              c || t.removeAttribute("id")
            }
        }
      }
      return v(e.replace(B, "$1"), t, n, r)
    }

    function oe() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          e[t + " "] = n
      }
    }

    function se(e) {
      return e[N] = !0,
        e
    }

    function ae(e) {
      var t = T.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
          t = null
      }
    }

    function ue(e, t) {
      for (var n = e.split("|"), r = e.length; r--;)
        b.attrHandle[n[r]] = t
    }

    function le(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (r)
        return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t)
            return -1;
      return e ? 1 : -1
    }

    function ce(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function fe(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function pe(s) {
      return se(function (o) {
        return o = +o,
          se(function (e, t) {
            for (var n, r = s([], e.length, o), i = r.length; i--;)
              e[n = r[i]] && (e[n] = !(t[n] = e[n]))
          })
      })
    }

    function de(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (e in h = ie.support = {},
      r = ie.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      },
      m = ie.setDocument = function (e) {
        var t, n, u = e ? e.ownerDocument || e : k;
        return u !== T && 9 === u.nodeType && u.documentElement ? (i = (T = u).documentElement,
          (n = u.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)),
          y = !r(u),
          h.attributes = ae(function (e) {
            return e.className = "i",
              !e.getAttribute("className")
          }),
          h.getElementsByTagName = ae(function (e) {
            return e.appendChild(u.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          h.getElementsByClassName = J.test(u.getElementsByClassName),
          h.getById = ae(function (e) {
            return i.appendChild(e).id = N,
              !u.getElementsByName || !u.getElementsByName(N).length
          }),
          h.getById ? (b.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && y) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
              }
            },
            b.filter.ID = function (e) {
              var t = e.replace(te, ne);
              return function (e) {
                return e.getAttribute("id") === t
              }
            }
          ) : (delete b.find.ID,
            b.filter.ID = function (e) {
              var n = e.replace(te, ne);
              return function (e) {
                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return t && t.value === n
              }
            }
          ),
          b.find.TAG = h.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
          } :
          function (e, t) {
            var n, r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" !== e)
              return o;
            for (; n = o[i++];)
              1 === n.nodeType && r.push(n);
            return r
          },
          b.find.CLASS = h.getElementsByClassName && function (e, t) {
            return y ? t.getElementsByClassName(e) : void 0
          },
          s = [],
          x = [],
          (h.qsa = J.test(u.querySelectorAll)) && (ae(function (e) {
              i.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && x.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || x.push("\\[" + P + "*(?:value|" + F + ")"),
                e.querySelectorAll("[id~=" + N + "-]").length || x.push("~="),
                e.querySelectorAll(":checked").length || x.push(":checked"),
                e.querySelectorAll("a#" + N + "+*").length || x.push(".#.+[+~]")
            }),
            ae(function (e) {
              var t = u.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && x.push("name" + P + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || x.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                x.push(",.*:")
            })),
          (h.matchesSelector = J.test(a = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && ae(function (e) {
            h.disconnectedMatch = a.call(e, "div"),
              a.call(e, "[s!='']:x"),
              s.push("!=", $)
          }),
          x = x.length && new RegExp(x.join("|")),
          s = s.length && new RegExp(s.join("|")),
          t = J.test(i.compareDocumentPosition),
          C = t || J.test(i.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } :
          function (e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e)
                  return !0;
            return !1
          },
          D = t ? function (e, t) {
            if (e === t)
              return c = !0,
                0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument === k && C(k, e) ? -1 : t === u || t.ownerDocument === k && C(k, t) ? 1 : l ? O(l, e) - O(l, t) : 0 : 4 & n ? -1 : 1)
          } :
          function (e, t) {
            if (e === t)
              return c = !0,
                0;
            var n, r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];
            if (!i || !o)
              return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : l ? O(l, e) - O(l, t) : 0;
            if (i === o)
              return le(e, t);
            for (n = e; n = n.parentNode;)
              s.unshift(n);
            for (n = t; n = n.parentNode;)
              a.unshift(n);
            for (; s[r] === a[r];)
              r++;
            return r ? le(s[r], a[r]) : s[r] === k ? -1 : a[r] === k ? 1 : 0
          },
          u) : T
      },
      ie.matches = function (e, t) {
        return ie(e, null, null, t)
      },
      ie.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== T && m(e),
          t = t.replace(X, "='$1']"),
          !(!h.matchesSelector || !y || s && s.test(t) || x && x.test(t)))
          try {
            var n = a.call(e, t);
            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType)
              return n
          } catch (e) {}
        return 0 < ie(t, T, null, [e]).length
      },
      ie.contains = function (e, t) {
        return (e.ownerDocument || e) !== T && m(e),
          C(e, t)
      },
      ie.attr = function (e, t) {
        (e.ownerDocument || e) !== T && m(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
        return void 0 !== r ? r : h.attributes || !y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      },
      ie.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      },
      ie.uniqueSort = function (e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (c = !h.detectDuplicates,
          l = !h.sortStable && e.slice(0),
          e.sort(D),
          c) {
          for (; t = e[i++];)
            t === e[i] && (r = n.push(i));
          for (; r--;)
            e.splice(n[r], 1)
        }
        return l = null,
          e
      },
      o = ie.getText = function (e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent)
              return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling)
              n += o(e)
          } else if (3 === i || 4 === i)
            return e.nodeValue
        } else
          for (; t = e[r++];)
            n += o(t);
        return n
      },
      (b = ie.selectors = {
        cacheLength: 50,
        createPseudo: se,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(te, ne),
              e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(),
              "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]),
                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]),
              e
          },
          PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                e[2] = n.slice(0, t)),
              e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
                return !0
              } :
              function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
          },
          CLASS: function (e) {
            var t = u[e + " "];
            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && u(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = ie.attr(e, n);
              return null == t ? "!=" === r : !r || (t += "",
                "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(I, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              m = "last" !== d.slice(-4),
              y = "of-type" === e;
            return 1 === h && 0 === g ? function (e) {
                return !!e.parentNode
              } :
              function (e, t, n) {
                var r, i, o, s, a, u, l = v !== m ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = y && e.nodeName.toLowerCase(),
                  p = !n && !y;
                if (c) {
                  if (v) {
                    for (; l;) {
                      for (o = e; o = o[l];)
                        if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType)
                          return !1;
                      u = l = "only" === d && !u && "nextSibling"
                    }
                    return !0
                  }
                  if (u = [m ? c.firstChild : c.lastChild],
                    m && p) {
                    for (a = (r = (i = c[N] || (c[N] = {}))[d] || [])[0] === E && r[1],
                      s = r[0] === E && r[2],
                      o = a && c.childNodes[a]; o = ++a && o && o[l] || (s = a = 0) || u.pop();)
                      if (1 === o.nodeType && ++s && o === e) {
                        i[d] = [E, a, s];
                        break
                      }
                  } else if (p && (r = (e[N] || (e[N] = {}))[d]) && r[0] === E)
                    s = r[1];
                  else
                    for (;
                      (o = ++a && o && o[l] || (s = a = 0) || u.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++s || (p && ((o[N] || (o[N] = {}))[d] = [E, s]),
                        o !== e));)
                  ;
                  return (s -= g) === h || s % h == 0 && 0 <= s / h
                }
              }
          },
          PSEUDO: function (e, o) {
            var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
            return s[N] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
              b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                for (var n, r = s(e, o), i = r.length; i--;)
                  e[n = O(e, r[i])] = !(t[n] = r[i])
              }) : function (e) {
                return s(e, 0, t)
              }
            ) : s
          }
        },
        pseudos: {
          not: se(function (e) {
            var r = [],
              i = [],
              a = f(e.replace(B, "$1"));
            return a[N] ? se(function (e, t, n, r) {
              for (var i, o = a(e, null, r, []), s = e.length; s--;)
                (i = o[s]) && (e[s] = !(t[s] = i))
            }) : function (e, t, n) {
              return r[0] = e,
                a(r, null, n, i),
                r[0] = null,
                !i.pop()
            }
          }),
          has: se(function (t) {
            return function (e) {
              return 0 < ie(t, e).length
            }
          }),
          contains: se(function (t) {
            return t = t.replace(te, ne),
              function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
              }
          }),
          lang: se(function (n) {
            return V.test(n || "") || ie.error("unsupported lang: " + n),
              n = n.replace(te, ne).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === i
          },
          focus: function (e) {
            return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function (e) {
            return !1 === e.disabled
          },
          disabled: function (e) {
            return !0 === e.disabled
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex,
              !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6)
                return !1;
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return Q.test(e.nodeName)
          },
          input: function (e) {
            return G.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: pe(function () {
            return [0]
          }),
          last: pe(function (e, t) {
            return [t - 1]
          }),
          eq: pe(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: pe(function (e, t) {
            for (var n = 0; n < t; n += 2)
              e.push(n);
            return e
          }),
          odd: pe(function (e, t) {
            for (var n = 1; n < t; n += 2)
              e.push(n);
            return e
          }),
          lt: pe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r;)
              e.push(r);
            return e
          }),
          gt: pe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;)
              e.push(r);
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      b.pseudos[e] = ce(e);
    for (e in {
        submit: !0,
        reset: !0
      })
      b.pseudos[e] = fe(e);

    function he() {}

    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++)
        r += e[t].value;
      return r
    }

    function ve(s, e, t) {
      var a = e.dir,
        u = t && "parentNode" === a,
        l = p++;
      return e.first ? function (e, t, n) {
          for (; e = e[a];)
            if (1 === e.nodeType || u)
              return s(e, t, n)
        } :
        function (e, t, n) {
          var r, i, o = [E, l];
          if (n) {
            for (; e = e[a];)
              if ((1 === e.nodeType || u) && s(e, t, n))
                return !0
          } else
            for (; e = e[a];)
              if (1 === e.nodeType || u) {
                if ((r = (i = e[N] || (e[N] = {}))[a]) && r[0] === E && r[1] === l)
                  return o[2] = r[2];
                if ((i[a] = o)[2] = s(e, t, n))
                  return !0
              }
        }
    }

    function me(i) {
      return 1 < i.length ? function (e, t, n) {
          for (var r = i.length; r--;)
            if (!i[r](e, t, n))
              return !1;
          return !0
        } :
        i[0]
    }

    function ye(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
          l && t.push(a));
      return s
    }

    function xe(d, h, g, v, m, e) {
      return v && !v[N] && (v = xe(v)),
        m && !m[N] && (m = xe(m, e)),
        se(function (e, t, n, r) {
          var i, o, s, a = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++)
                ie(e, t[r], n);
              return n
            }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : ye(c, a, d, n, r),
            p = g ? m || (e ? d : l || v) ? [] : t : f;
          if (g && g(f, p, n, r),
            v)
            for (i = ye(p, u),
              v(i, [], n, r),
              o = i.length; o--;)
              (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
          if (e) {
            if (m || d) {
              if (m) {
                for (i = [],
                  o = p.length; o--;)
                  (s = p[o]) && i.push(f[o] = s);
                m(null, p = [], i, r)
              }
              for (o = p.length; o--;)
                (s = p[o]) && -1 < (i = m ? O(e, s) : a[o]) && (e[i] = !(t[i] = s))
            }
          } else
            p = ye(p === t ? p.splice(l, p.length) : p),
            m ? m(null, t, p, r) : q.apply(t, p)
        })
    }

    function be(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ve(function (e) {
          return e === i
        }, s, !0), l = ve(function (e) {
          return -1 < O(i, e)
        }, s, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null,
            r
        }]; a < r; a++)
        if (t = b.relative[e[a].type])
          c = [ve(me(c), t)];
        else {
          if ((t = b.filter[e[a].type].apply(null, e[a].matches))[N]) {
            for (n = ++a; n < r && !b.relative[e[n].type]; n++)
            ;
            return xe(1 < a && me(c), 1 < a && ge(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(B, "$1"), t, a < n && be(e.slice(a, n)), n < r && be(e = e.slice(n)), n < r && ge(e))
          }
          c.push(t)
        }
      return me(c)
    }
    return he.prototype = b.filters = b.pseudos,
      b.setFilters = new he,
      g = ie.tokenize = function (e, t) {
        var n, r, i, o, s, a, u, l = d[e + " "];
        if (l)
          return t ? 0 : l.slice(0);
        for (s = e,
          a = [],
          u = b.preFilter; s;) {
          for (o in (!n || (r = _.exec(s))) && (r && (s = s.slice(r[0].length) || s),
              a.push(i = [])),
            n = !1,
            (r = z.exec(s)) && (n = r.shift(),
              i.push({
                value: n,
                type: r[0].replace(B, " ")
              }),
              s = s.slice(n.length)),
            b.filter)
            !(r = Y[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
              i.push({
                value: n,
                type: o,
                matches: r
              }),
              s = s.slice(n.length));
          if (!n)
            break
        }
        return t ? s.length : s ? ie.error(e) : d(e, a).slice(0)
      },
      f = ie.compile = function (e, t) {
        var n, v, m, y, x, r, i = [],
          o = [],
          s = S[e + " "];
        if (!s) {
          for (t || (t = g(e)),
            n = t.length; n--;)
            (s = be(t[n]))[N] ? i.push(s) : o.push(s);
          (s = S(e, (v = o,
            y = 0 < (m = i).length,
            x = 0 < v.length,
            r = function (e, t, n, r, i) {
              var o, s, a, u = 0,
                l = "0",
                c = e && [],
                f = [],
                p = w,
                d = e || x && b.find.TAG("*", i),
                h = E += null == p ? 1 : Math.random() || .1,
                g = d.length;
              for (i && (w = t !== T && t); l !== g && null != (o = d[l]); l++) {
                if (x && o) {
                  for (s = 0; a = v[s++];)
                    if (a(o, t, n)) {
                      r.push(o);
                      break
                    }
                  i && (E = h)
                }
                y && ((o = !a && o) && u--,
                  e && c.push(o))
              }
              if (u += l,
                y && l !== u) {
                for (s = 0; a = m[s++];)
                  a(c, f, t, n);
                if (e) {
                  if (0 < u)
                    for (; l--;)
                      c[l] || f[l] || (f[l] = A.call(r));
                  f = ye(f)
                }
                q.apply(r, f),
                  i && !e && 0 < f.length && 1 < u + m.length && ie.uniqueSort(r)
              }
              return i && (E = h,
                  w = p),
                c
            },
            y ? se(r) : r))).selector = e
        }
        return s
      },
      v = ie.select = function (e, t, n, r) {
        var i, o, s, a, u, l = "function" == typeof e && e,
          c = !r && g(e = l.selector || e);
        if (n = n || [],
          1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && y && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(s.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            l && (t = t.parentNode),
              e = e.slice(o.shift().value.length)
          }
          for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
              !b.relative[a = s.type]);)
            if ((u = b.find[a]) && (r = u(s.matches[0].replace(te, ne), Z.test(o[0].type) && de(t.parentNode) || t))) {
              if (o.splice(i, 1),
                !(e = r.length && ge(o)))
                return q.apply(n, r),
                  n;
              break
            }
        }
        return (l || f(e, c))(r, t, !y, n, Z.test(e) && de(t.parentNode) || t),
          n
      },
      h.sortStable = N.split("").sort(D).join("") === N,
      h.detectDuplicates = !!c,
      m(),
      h.sortDetached = ae(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("div"))
      }),
      ae(function (e) {
        return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || ue("type|href|height|width", function (e, t, n) {
        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      h.attributes && ae(function (e) {
        return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || ue("value", function (e, t, n) {
        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }),
      ae(function (e) {
        return null == e.getAttribute("disabled")
      }) || ue(F, function (e, t, n) {
        var r;
        return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }),
      ie
  }(h);
  C.find = d,
    C.expr = d.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.unique = d.uniqueSort,
    C.text = d.getText,
    C.isXMLDoc = d.isXML,
    C.contains = d.contains;
  var x = C.expr.match.needsContext,
    b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;

  function T(e, n, r) {
    if (C.isFunction(n))
      return C.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r
      });
    if (n.nodeType)
      return C.grep(e, function (e) {
        return e === n !== r
      });
    if ("string" == typeof n) {
      if (w.test(n))
        return C.filter(n, e, r);
      n = C.filter(n, e)
    }
    return C.grep(e, function (e) {
      return 0 <= i.call(n, e) !== r
    })
  }
  C.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
          return 1 === e.nodeType
        }))
    },
    C.fn.extend({
      find: function (e) {
        var t, n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(C(e).filter(function () {
            for (t = 0; t < n; t++)
              if (C.contains(i[t], this))
                return !0
          }));
        for (t = 0; t < n; t++)
          C.find(e, i[t], r);
        return (r = this.pushStack(1 < n ? C.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e,
          r
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0))
      },
      is: function (e) {
        return !!T(this, "string" == typeof e && x.test(e) ? C(e) : e || [], !1).length
      }
    });
  var N, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (C.fn.init = function (e, t) {
    var n, r;
    if (!e)
      return this;
    if ("string" != typeof e)
      return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : C.isFunction(e) ? void 0 !== N.ready ? N.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector,
          this.context = e.context),
        C.makeArray(e, this));
    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !n[1] && t)
      return !t || t.jquery ? (t || N).find(e) : this.constructor(t).find(e);
    if (n[1]) {
      if (t = t instanceof C ? t[0] : t,
        C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)),
        b.test(n[1]) && C.isPlainObject(t))
        for (n in t)
          C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
      return this
    }
    return (r = y.getElementById(n[2])) && r.parentNode && (this.length = 1,
        this[0] = r),
      this.context = y,
      this.selector = e,
      this
  }).prototype = C.fn,
    N = C(y);
  var E = /^(?:parents|prev(?:Until|All))/,
    S = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function D(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;)
    ;
    return e
  }
  C.extend({
      dir: function (e, t, n) {
        for (var r = [], i = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && C(e).is(n))
              break;
            r.push(e)
          }
        return r
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n
      }
    }),
    C.fn.extend({
      has: function (e) {
        var t = C(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++)
            if (C.contains(this, t[e]))
              return !0
        })
      },
      closest: function (e, t) {
        for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
              o.push(n);
              break
            }
        return this.pushStack(1 < o.length ? C.unique(o) : o)
      },
      index: function (e) {
        return e ? "string" == typeof e ? i.call(C(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (e, t) {
        return this.pushStack(C.unique(C.merge(this.get(), C(e, t))))
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }),
    C.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function (e) {
        return C.dir(e, "parentNode")
      },
      parentsUntil: function (e, t, n) {
        return C.dir(e, "parentNode", n)
      },
      next: function (e) {
        return D(e, "nextSibling")
      },
      prev: function (e) {
        return D(e, "previousSibling")
      },
      nextAll: function (e) {
        return C.dir(e, "nextSibling")
      },
      prevAll: function (e) {
        return C.dir(e, "previousSibling")
      },
      nextUntil: function (e, t, n) {
        return C.dir(e, "nextSibling", n)
      },
      prevUntil: function (e, t, n) {
        return C.dir(e, "previousSibling", n)
      },
      siblings: function (e) {
        return C.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function (e) {
        return C.sibling(e.firstChild)
      },
      contents: function (e) {
        return e.contentDocument || C.merge([], e.childNodes)
      }
    }, function (r, i) {
      C.fn[r] = function (e, t) {
        var n = C.map(this, i, e);
        return "Until" !== r.slice(-5) && (t = e),
          t && "string" == typeof t && (n = C.filter(t, n)),
          1 < this.length && (S[r] || C.unique(n),
            E.test(r) && n.reverse()),
          this.pushStack(n)
      }
    });
  var j, A = /\S+/g,
    L = {};

  function q() {
    y.removeEventListener("DOMContentLoaded", q, !1),
      h.removeEventListener("load", q, !1),
      C.ready()
  }
  C.Callbacks = function (i) {
      var e, n;
      i = "string" == typeof i ? L[i] || (n = L[e = i] = {},
        C.each(e.match(A) || [], function (e, t) {
          n[t] = !0
        }),
        n) : C.extend({}, i);
      var t, r, o, s, a, u, l = [],
        c = !i.once && [],
        f = function (e) {
          for (t = i.memory && e,
            r = !0,
            u = s || 0,
            s = 0,
            a = l.length,
            o = !0; l && u < a; u++)
            if (!1 === l[u].apply(e[0], e[1]) && i.stopOnFalse) {
              t = !1;
              break
            }
          o = !1,
            l && (c ? c.length && f(c.shift()) : t ? l = [] : p.disable())
        },
        p = {
          add: function () {
            if (l) {
              var e = l.length;
              ! function r(e) {
                C.each(e, function (e, t) {
                  var n = C.type(t);
                  "function" === n ? i.unique && p.has(t) || l.push(t) : t && t.length && "string" !== n && r(t)
                })
              }(arguments),
              o ? a = l.length : t && (s = e,
                f(t))
            }
            return this
          },
          remove: function () {
            return l && C.each(arguments, function (e, t) {
                for (var n; - 1 < (n = C.inArray(t, l, n));)
                  l.splice(n, 1),
                  o && (n <= a && a--,
                    n <= u && u--)
              }),
              this
          },
          has: function (e) {
            return e ? -1 < C.inArray(e, l) : !(!l || !l.length)
          },
          empty: function () {
            return l = [],
              a = 0,
              this
          },
          disable: function () {
            return l = c = t = void 0,
              this
          },
          disabled: function () {
            return !l
          },
          lock: function () {
            return c = void 0,
              t || p.disable(),
              this
          },
          locked: function () {
            return !c
          },
          fireWith: function (e, t) {
            return !l || r && !c || (t = [e, (t = t || []).slice ? t.slice() : t],
                o ? c.push(t) : f(t)),
              this
          },
          fire: function () {
            return p.fireWith(this, arguments),
              this
          },
          fired: function () {
            return !!r
          }
        };
      return p
    },
    C.extend({
      Deferred: function (e) {
        var o = [
            ["resolve", "done", C.Callbacks("once memory"), "resolved"],
            ["reject", "fail", C.Callbacks("once memory"), "rejected"],
            ["notify", "progress", C.Callbacks("memory")]
          ],
          i = "pending",
          s = {
            state: function () {
              return i
            },
            always: function () {
              return a.done(arguments).fail(arguments),
                this
            },
            then: function () {
              var i = arguments;
              return C.Deferred(function (r) {
                C.each(o, function (e, t) {
                    var n = C.isFunction(i[e]) && i[e];
                    a[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && C.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                    })
                  }),
                  i = null
              }).promise()
            },
            promise: function (e) {
              return null != e ? C.extend(e, s) : s
            }
          },
          a = {};
        return s.pipe = s.then,
          C.each(o, function (e, t) {
            var n = t[2],
              r = t[3];
            s[t[1]] = n.add,
              r && n.add(function () {
                i = r
              }, o[1 ^ e][2].disable, o[2][2].lock),
              a[t[0]] = function () {
                return a[t[0] + "With"](this === a ? s : this, arguments),
                  this
              },
              a[t[0] + "With"] = n.fireWith
          }),
          s.promise(a),
          e && e.call(a, a),
          a
      },
      when: function (e) {
        var i, t, n, r = 0,
          o = c.call(arguments),
          s = o.length,
          a = 1 !== s || e && C.isFunction(e.promise) ? s : 0,
          u = 1 === a ? e : C.Deferred(),
          l = function (t, n, r) {
            return function (e) {
              n[t] = this,
                r[t] = 1 < arguments.length ? c.call(arguments) : e,
                r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
            }
          };
        if (1 < s)
          for (i = new Array(s),
            t = new Array(s),
            n = new Array(s); r < s; r++)
            o[r] && C.isFunction(o[r].promise) ? o[r].promise().done(l(r, n, o)).fail(u.reject).progress(l(r, t, i)) : --a;
        return a || u.resolveWith(n, o),
          u.promise()
      }
    }),
    C.fn.ready = function (e) {
      return C.ready.promise().done(e),
        this
    },
    C.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? C.readyWait++ : C.ready(!0)
      },
      ready: function (e) {
        (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || (j.resolveWith(y, [C]),
          C.fn.triggerHandler && (C(y).triggerHandler("ready"),
            C(y).off("ready"))))
      }
    }),
    C.ready.promise = function (e) {
      return j || (j = C.Deferred(),
          "complete" === y.readyState ? setTimeout(C.ready) : (y.addEventListener("DOMContentLoaded", q, !1),
            h.addEventListener("load", q, !1))),
        j.promise(e)
    },
    C.ready.promise();
  var H = C.access = function (e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ("object" === C.type(n))
      for (a in i = !0,
        n)
        C.access(e, t, a, n[a], !0, o, s);
    else if (void 0 !== r && (i = !0,
        C.isFunction(r) || (s = !0),
        l && (t = s ? (t.call(e, r),
          null) : (l = t,
          function (e, t, n) {
            return l.call(C(e), n)
          }
        )),
        t))
      for (; a < u; a++)
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };

  function O() {
    Object.defineProperty(this.cache = {}, 0, {
        get: function () {
          return {}
        }
      }),
      this.expando = C.expando + O.uid++
  }
  C.acceptData = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    },
    O.uid = 1,
    O.accepts = C.acceptData,
    O.prototype = {
      key: function (t) {
        if (!O.accepts(t))
          return 0;
        var n = {},
          r = t[this.expando];
        if (!r) {
          r = O.uid++;
          try {
            n[this.expando] = {
                value: r
              },
              Object.defineProperties(t, n)
          } catch (e) {
            n[this.expando] = r,
              C.extend(t, n)
          }
        }
        return this.cache[r] || (this.cache[r] = {}),
          r
      },
      set: function (e, t, n) {
        var r, i = this.key(e),
          o = this.cache[i];
        if ("string" == typeof t)
          o[t] = n;
        else if (C.isEmptyObject(o))
          C.extend(this.cache[i], t);
        else
          for (r in t)
            o[r] = t[r];
        return o
      },
      get: function (e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t]
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, C.camelCase(t)) : (this.set(e, t, n),
          void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n, r, i, o = this.key(e),
          s = this.cache[o];
        if (void 0 === t)
          this.cache[o] = {};
        else {
          n = (r = C.isArray(t) ? t.concat(t.map(C.camelCase)) : (i = C.camelCase(t),
            t in s ? [t, i] : (r = i) in s ? [r] : r.match(A) || [])).length;
          for (; n--;)
            delete s[r[n]]
        }
      },
      hasData: function (e) {
        return !C.isEmptyObject(this.cache[e[this.expando]] || {})
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]]
      }
    };
  var F = new O,
    P = new O,
    R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    M = /([A-Z])/g;

  function W(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(M, "-$1").toLowerCase(),
        "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? C.parseJSON(n) : n)
        } catch (e) {}
        P.set(e, t, n)
      } else
        n = void 0;
    return n
  }
  C.extend({
      hasData: function (e) {
        return P.hasData(e) || F.hasData(e)
      },
      data: function (e, t, n) {
        return P.access(e, t, n)
      },
      removeData: function (e, t) {
        P.remove(e, t)
      },
      _data: function (e, t, n) {
        return F.access(e, t, n)
      },
      _removeData: function (e, t) {
        F.remove(e, t)
      }
    }),
    C.fn.extend({
      data: function (r, e) {
        var t, n, i, o = this[0],
          s = o && o.attributes;
        if (void 0 !== r)
          return "object" == typeof r ? this.each(function () {
            P.set(this, r)
          }) : H(this, function (t) {
            var e, n = C.camelCase(r);
            if (o && void 0 === t) {
              if (void 0 !== (e = P.get(o, r)))
                return e;
              if (void 0 !== (e = P.get(o, n)))
                return e;
              if (void 0 !== (e = W(o, n, void 0)))
                return e
            } else
              this.each(function () {
                var e = P.get(this, n);
                P.set(this, n, t),
                  -1 !== r.indexOf("-") && void 0 !== e && P.set(this, r, t)
              })
          }, null, e, 1 < arguments.length, null, !0);
        if (this.length && (i = P.get(o),
            1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
          for (t = s.length; t--;)
            s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = C.camelCase(n.slice(5)),
              W(o, n, i[n])));
          F.set(o, "hasDataAttrs", !0)
        }
        return i
      },
      removeData: function (e) {
        return this.each(function () {
          P.remove(this, e)
        })
      }
    }),
    C.extend({
      queue: function (e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue",
          r = F.get(e, t),
          n && (!r || C.isArray(n) ? r = F.access(e, t, C.makeArray(n)) : r.push(n)),
          r || []) : void 0
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = C.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = C._queueHooks(e, t);
        "inprogress" === i && (i = n.shift(),
            r--),
          i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function () {
              C.dequeue(e, t)
            }, o)),
          !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return F.get(e, n) || F.access(e, n, {
          empty: C.Callbacks("once memory").add(function () {
            F.remove(e, [t + "queue", n])
          })
        })
      }
    }),
    C.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return "string" != typeof t && (n = t,
            t = "fx",
            e--),
          arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
            var e = C.queue(this, t, n);
            C._queueHooks(this, t),
              "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
          })
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n, r = 1,
          i = C.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e,
            e = void 0),
          e = e || "fx"; s--;)
          (n = F.get(o[s], e + "queueHooks")) && n.empty && (r++,
            n.empty.add(a));
        return a(),
          i.promise(t)
      }
    });
  var $, I, B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _ = ["Top", "Right", "Bottom", "Left"],
    z = function (e, t) {
      return e = t || e,
        "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
    },
    X = /^(?:checkbox|radio)$/i;
  $ = y.createDocumentFragment().appendChild(y.createElement("div")),
    (I = y.createElement("input")).setAttribute("type", "radio"),
    I.setAttribute("checked", "checked"),
    I.setAttribute("name", "t"),
    $.appendChild(I),
    m.checkClone = $.cloneNode(!0).cloneNode(!0).lastChild.checked,
    $.innerHTML = "<textarea>x</textarea>",
    m.noCloneChecked = !!$.cloneNode(!0).lastChild.defaultValue;
  var U = "undefined";
  m.focusinBubbles = "onfocusin" in h;
  var V = /^key/,
    Y = /^(?:mouse|pointer|contextmenu)|click/,
    G = /^(?:focusinfocus|focusoutblur)$/,
    Q = /^([^.]*)(?:\.(.+)|)$/;

  function J() {
    return !0
  }

  function K() {
    return !1
  }

  function Z() {
    try {
      return y.activeElement
    } catch (e) {}
  }
  C.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o, s, a, u, l, c, f, p, d, h, g, v = F.get(t);
        if (v)
          for (n.handler && (n = (o = n).handler,
              i = o.selector),
            n.guid || (n.guid = C.guid++),
            (u = v.events) || (u = v.events = {}),
            (s = v.handle) || (s = v.handle = function (e) {
              return typeof C !== U && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
            }),
            l = (e = (e || "").match(A) || [""]).length; l--;)
            d = g = (a = Q.exec(e[l]) || [])[1],
            h = (a[2] || "").split(".").sort(),
            d && (f = C.event.special[d] || {},
              d = (i ? f.delegateType : f.bindType) || d,
              f = C.event.special[d] || {},
              c = C.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && C.expr.match.needsContext.test(i),
                namespace: h.join(".")
              }, o),
              (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s, !1)),
              f.add && (f.add.call(t, c),
                c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              C.event.global[d] = !0)
      },
      remove: function (e, t, n, r, i) {
        var o, s, a, u, l, c, f, p, d, h, g, v = F.hasData(e) && F.get(e);
        if (v && (u = v.events)) {
          for (l = (t = (t || "").match(A) || [""]).length; l--;)
            if (d = g = (a = Q.exec(t[l]) || [])[1],
              h = (a[2] || "").split(".").sort(),
              d) {
              for (f = C.event.special[d] || {},
                p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length; o--;)
                c = p[o],
                !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
              s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, d, v.handle),
                delete u[d])
            } else
              for (d in u)
                C.event.remove(e, d + t[l], n, r, !0);
          C.isEmptyObject(u) && (delete v.handle,
            F.remove(e, "events"))
        }
      },
      trigger: function (e, t, n, r) {
        var i, o, s, a, u, l, c, f = [n || y],
          p = v.call(e, "type") ? e.type : e,
          d = v.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = s = n = n || y,
          3 !== n.nodeType && 8 !== n.nodeType && !G.test(p + C.event.triggered) && (0 <= p.indexOf(".") && (p = (d = p.split(".")).shift(),
              d.sort()),
            u = p.indexOf(":") < 0 && "on" + p,
            (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = d.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : C.makeArray(t, [e]),
            c = C.event.special[p] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!r && !c.noBubble && !C.isWindow(n)) {
            for (a = c.delegateType || p,
              G.test(a + p) || (o = o.parentNode); o; o = o.parentNode)
              f.push(o),
              s = o;
            s === (n.ownerDocument || y) && f.push(s.defaultView || s.parentWindow || h)
          }
          for (i = 0;
            (o = f[i++]) && !e.isPropagationStopped();)
            e.type = 1 < i ? a : c.bindType || p,
            (l = (F.get(o, "events") || {})[e.type] && F.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) && l.apply && C.acceptData(o) && (e.result = l.apply(o, t),
              !1 === e.result && e.preventDefault());
          return e.type = p,
            r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !C.acceptData(n) || u && C.isFunction(n[p]) && !C.isWindow(n) && ((s = n[u]) && (n[u] = null),
              n[C.event.triggered = p](),
              C.event.triggered = void 0,
              s && (n[u] = s)),
            e.result
        }
      },
      dispatch: function (e) {
        e = C.event.fix(e);
        var t, n, r, i, o, s = [],
          a = c.call(arguments),
          u = (F.get(this, "events") || {})[e.type] || [],
          l = C.event.special[e.type] || {};
        if ((a[0] = e).delegateTarget = this,
          !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
          for (s = C.event.handlers.call(this, e, u),
            t = 0;
            (i = s[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = i.elem,
              n = 0;
              (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
              (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o,
                e.data = o.data,
                void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(),
                  e.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, e),
            e.result
        }
      },
      handlers: function (e, t) {
        var n, r, i, o, s = [],
          a = t.delegateCount,
          u = e.target;
        if (a && u.nodeType && (!e.button || "click" !== e.type))
          for (; u !== this; u = u.parentNode || this)
            if (!0 !== u.disabled || "click" !== e.type) {
              for (r = [],
                n = 0; n < a; n++)
                void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? 0 <= C(i, this).index(u) : C.find(i, this, null, [u]).length),
                r[i] && r.push(o);
              r.length && s.push({
                elem: u,
                handlers: r
              })
            }
        return a < t.length && s.push({
            elem: this,
            handlers: t.slice(a)
          }),
          s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, t) {
          var n, r, i, o = t.button;
          return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || y).documentElement,
              i = n.body,
              e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
              e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
            e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            e
        }
      },
      fix: function (e) {
        if (e[C.expando])
          return e;
        var t, n, r, i = e.type,
          o = e,
          s = this.fixHooks[i];
        for (s || (this.fixHooks[i] = s = Y.test(i) ? this.mouseHooks : V.test(i) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new C.Event(o),
          t = r.length; t--;)
          e[n = r[t]] = o[n];
        return e.target || (e.target = y),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          s.filter ? s.filter(e, o) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function () {
            return this !== Z() && this.focus ? (this.focus(),
              !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            return this === Z() && this.blur ? (this.blur(),
              !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type && this.click && C.nodeName(this, "input") ? (this.click(),
              !1) : void 0
          },
          _default: function (e) {
            return C.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function (e, t, n, r) {
        var i = C.extend(new C.Event, n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
        r ? C.event.trigger(i, null, t) : C.event.dispatch.call(t, i),
          i.isDefaultPrevented() && n.preventDefault()
      }
    },
    C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
    },
    C.Event = function (e, t) {
      return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e,
          this.type = e.type,
          this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? J : K) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || C.now(),
        void(this[C.expando] = !0)) : new C.Event(e, t)
    },
    C.Event.prototype = {
      isDefaultPrevented: K,
      isPropagationStopped: K,
      isImmediatePropagationStopped: K,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = J,
          e && e.preventDefault && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = J,
          e && e.stopPropagation && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = J,
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
    },
    C.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, i) {
      C.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t, n = e.relatedTarget,
            r = e.handleObj;
          return (!n || n !== this && !C.contains(this, n)) && (e.type = r.origType,
              t = r.handler.apply(this, arguments),
              e.type = i),
            t
        }
      }
    }),
    m.focusinBubbles || C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (n, r) {
      var i = function (e) {
        C.event.simulate(r, e.target, C.event.fix(e), !0)
      };
      C.event.special[r] = {
        setup: function () {
          var e = this.ownerDocument || this,
            t = F.access(e, r);
          t || e.addEventListener(n, i, !0),
            F.access(e, r, (t || 0) + 1)
        },
        teardown: function () {
          var e = this.ownerDocument || this,
            t = F.access(e, r) - 1;
          t ? F.access(e, r, t) : (e.removeEventListener(n, i, !0),
            F.remove(e, r))
        }
      }
    }),
    C.fn.extend({
      on: function (e, t, n, r, i) {
        var o, s;
        if ("object" == typeof e) {
          for (s in "string" != typeof t && (n = n || t,
              t = void 0),
            e)
            this.on(s, t, n, e[s], i);
          return this
        }
        if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
          !1 === r)
          r = K;
        else if (!r)
          return this;
        return 1 === i && (o = r,
            (r = function (e) {
              return C().off(e),
                o.apply(this, arguments)
            }).guid = o.guid || (o.guid = C.guid++)),
          this.each(function () {
            C.event.add(this, e, r, n, t)
          })
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return r = e.handleObj,
            C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
            this;
        if ("object" != typeof e)
          return (!1 === t || "function" == typeof t) && (n = t,
              t = void 0),
            !1 === n && (n = K),
            this.each(function () {
              C.event.remove(this, e, n, t)
            });
        for (i in e)
          this.off(i, t, e[i]);
        return this
      },
      trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? C.event.trigger(e, t, n, !0) : void 0
      }
    });
  var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    te = /<([\w:]+)/,
    ne = /<|&#?\w+;/,
    re = /<(?:script|style|link)/i,
    ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
    oe = /^$|\/(?:java|ecma)script/i,
    se = /^true\/(.*)/,
    ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ue = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function le(e, t) {
    return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function ce(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
      e
  }

  function fe(e) {
    var t = se.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"),
      e
  }

  function pe(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"))
  }

  function de(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (F.hasData(e) && (o = F.access(e),
          s = F.set(t, o),
          l = o.events))
        for (i in delete s.handle,
          s.events = {},
          l)
          for (n = 0,
            r = l[i].length; n < r; n++)
            C.event.add(t, i, l[i][n]);
      P.hasData(e) && (a = P.access(e),
        u = C.extend({}, a),
        P.set(t, u))
    }
  }

  function he(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], n) : n
  }
  ue.optgroup = ue.option,
    ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead,
    ue.th = ue.td,
    C.extend({
      clone: function (e, t, n) {
        var r, i, o, s, a, u, l, c = e.cloneNode(!0),
          f = C.contains(e.ownerDocument, e);
        if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
          for (s = he(c),
            r = 0,
            i = (o = he(e)).length; r < i; r++)
            a = o[r],
            u = s[r],
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && X.test(a.type) ? u.checked = a.checked : ("input" === l || "textarea" === l) && (u.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (o = o || he(e),
              s = s || he(c),
              r = 0,
              i = o.length; r < i; r++)
              de(o[r], s[r]);
          else
            de(e, c);
        return 0 < (s = he(c, "script")).length && pe(s, !f && he(e, "script")),
          c
      },
      buildFragment: function (e, t, n, r) {
        for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
          if ((i = e[p]) || 0 === i)
            if ("object" === C.type(i))
              C.merge(f, i.nodeType ? [i] : i);
            else if (ne.test(i)) {
          for (o = o || c.appendChild(t.createElement("div")),
            s = (te.exec(i) || ["", ""])[1].toLowerCase(),
            a = ue[s] || ue._default,
            o.innerHTML = a[1] + i.replace(ee, "<$1></$2>") + a[2],
            l = a[0]; l--;)
            o = o.lastChild;
          C.merge(f, o.childNodes),
            (o = c.firstChild).textContent = ""
        } else
          f.push(t.createTextNode(i));
        for (c.textContent = "",
          p = 0; i = f[p++];)
          if ((!r || -1 === C.inArray(i, r)) && (u = C.contains(i.ownerDocument, i),
              o = he(c.appendChild(i), "script"),
              u && pe(o),
              n))
            for (l = 0; i = o[l++];)
              oe.test(i.type || "") && n.push(i);
        return c
      },
      cleanData: function (e) {
        for (var t, n, r, i, o = C.event.special, s = 0; void 0 !== (n = e[s]); s++) {
          if (C.acceptData(n) && ((i = n[F.expando]) && (t = F.cache[i]))) {
            if (t.events)
              for (r in t.events)
                o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
            F.cache[i] && delete F.cache[i]
          }
          delete P.cache[n[P.expando]]
        }
      }
    }),
    C.fn.extend({
      text: function (e) {
        return H(this, function (e) {
          return void 0 === e ? C.text(this) : this.empty().each(function () {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || le(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = le(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      remove: function (e, t) {
        for (var n, r = e ? C.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
          t || 1 !== n.nodeType || C.cleanData(he(n)),
          n.parentNode && (t && C.contains(n.ownerDocument, n) && pe(he(n, "script")),
            n.parentNode.removeChild(n));
        return this
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (C.cleanData(he(e, !1)),
            e.textContent = "");
        return this
      },
      clone: function (e, t) {
        return e = null != e && e,
          t = null == t ? e : t,
          this.map(function () {
            return C.clone(this, e, t)
          })
      },
      html: function (e) {
        return H(this, function (e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType)
            return t.innerHTML;
          if ("string" == typeof e && !re.test(e) && !ue[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = e.replace(ee, "<$1></$2>");
            try {
              for (; n < r; n++)
                1 === (t = this[n] || {}).nodeType && (C.cleanData(he(t, !1)),
                  t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function () {
        var t = arguments[0];
        return this.domManip(arguments, function (e) {
            t = this.parentNode,
              C.cleanData(he(this)),
              t && t.replaceChild(e, this)
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
      },
      detach: function (e) {
        return this.remove(e, !0)
      },
      domManip: function (n, r) {
        n = g.apply([], n);
        var e, t, i, o, s, a, u = 0,
          l = this.length,
          c = this,
          f = l - 1,
          p = n[0],
          d = C.isFunction(p);
        if (d || 1 < l && "string" == typeof p && !m.checkClone && ie.test(p))
          return this.each(function (e) {
            var t = c.eq(e);
            d && (n[0] = p.call(this, e, t.html())),
              t.domManip(n, r)
          });
        if (l && (t = (e = C.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild,
            1 === e.childNodes.length && (e = t),
            t)) {
          for (o = (i = C.map(he(e, "script"), ce)).length; u < l; u++)
            s = e,
            u !== f && (s = C.clone(s, !0, !0),
              o && C.merge(i, he(s, "script"))),
            r.call(this[u], s, u);
          if (o)
            for (a = i[i.length - 1].ownerDocument,
              C.map(i, fe),
              u = 0; u < o; u++)
              s = i[u],
              oe.test(s.type || "") && !F.access(s, "globalEval") && C.contains(a, s) && (s.src ? C._evalUrl && C._evalUrl(s.src) : C.globalEval(s.textContent.replace(ae, "")))
        }
        return this
      }
    }),
    C.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, s) {
      C.fn[e] = function (e) {
        for (var t, n = [], r = C(e), i = r.length - 1, o = 0; o <= i; o++)
          t = o === i ? this : this.clone(!0),
          C(r[o])[s](t),
          a.apply(n, t.get());
        return this.pushStack(n)
      }
    });
  var ge, ve = {};

  function me(e, t) {
    var n, r = C(t.createElement(e)).appendTo(t.body),
      i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display : C.css(r[0], "display");
    return r.detach(),
      i
  }

  function ye(e) {
    var t = y,
      n = ve[e];
    return n || ("none" !== (n = me(e, t)) && n || ((t = (ge = (ge || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          n = me(e, t),
          ge.detach()),
        ve[e] = n),
      n
  }
  var xe = /^margin/,
    be = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
    we = function (e) {
      return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null)
    };

  function Te(e, t, n) {
    var r, i, o, s, a = e.style;
    return (n = n || we(e)) && (s = n.getPropertyValue(t) || n[t]),
      n && ("" !== s || C.contains(e.ownerDocument, e) || (s = C.style(e, t)),
        be.test(s) && xe.test(t) && (r = a.width,
          i = a.minWidth,
          o = a.maxWidth,
          a.minWidth = a.maxWidth = a.width = s,
          s = n.width,
          a.width = r,
          a.minWidth = i,
          a.maxWidth = o)),
      void 0 !== s ? s + "" : s
  }

  function Ce(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }! function () {
    var t, n, r = y.documentElement,
      i = y.createElement("div"),
      o = y.createElement("div");
    if (o.style) {
      function e() {
        o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
          o.innerHTML = "",
          r.appendChild(i);
        var e = h.getComputedStyle(o, null);
        t = "1%" !== e.top,
          n = "4px" === e.width,
          r.removeChild(i)
      }
      o.style.backgroundClip = "content-box",
        o.cloneNode(!0).style.backgroundClip = "",
        m.clearCloneStyle = "content-box" === o.style.backgroundClip,
        i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        i.appendChild(o),
        h.getComputedStyle && C.extend(m, {
          pixelPosition: function () {
            return e(),
              t
          },
          boxSizingReliable: function () {
            return null == n && e(),
              n
          },
          reliableMarginRight: function () {
            var e, t = o.appendChild(y.createElement("div"));
            return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
              t.style.marginRight = t.style.width = "0",
              o.style.width = "1px",
              r.appendChild(i),
              e = !parseFloat(h.getComputedStyle(t, null).marginRight),
              r.removeChild(i),
              o.removeChild(t),
              e
          }
        })
    }
  }(),
  C.swap = function (e, t, n, r) {
    var i, o, s = {};
    for (o in t)
      s[o] = e.style[o],
      e.style[o] = t[o];
    for (o in i = n.apply(e, r || []),
      t)
      e.style[o] = s[o];
    return i
  };
  var Ne = /^(none|table(?!-c[ea]).+)/,
    ke = new RegExp("^(" + B + ")(.*)$", "i"),
    Ee = new RegExp("^([+-])=(" + B + ")", "i"),
    Se = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    De = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    je = ["Webkit", "O", "Moz", "ms"];

  function Ae(e, t) {
    if (t in e)
      return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = je.length; i--;)
      if ((t = je[i] + n) in e)
        return t;
    return r
  }

  function Le(e, t, n) {
    var r = ke.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function qe(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
      "margin" === n && (s += C.css(e, n + _[o], !0, i)),
      r ? ("content" === n && (s -= C.css(e, "padding" + _[o], !0, i)),
        "margin" !== n && (s -= C.css(e, "border" + _[o] + "Width", !0, i))) : (s += C.css(e, "padding" + _[o], !0, i),
        "padding" !== n && (s += C.css(e, "border" + _[o] + "Width", !0, i)));
    return s
  }

  function He(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = we(e),
      s = "border-box" === C.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (((i = Te(e, t, o)) < 0 || null == i) && (i = e.style[t]),
        be.test(i))
        return i;
      r = s && (m.boxSizingReliable() || i === e.style[t]),
        i = parseFloat(i) || 0
    }
    return i + qe(e, t, n || (s ? "border" : "content"), r, o) + "px"
  }

  function Oe(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
      (r = e[s]).style && (o[s] = F.get(r, "olddisplay"),
        n = r.style.display,
        t ? (o[s] || "none" !== n || (r.style.display = ""),
          "" === r.style.display && z(r) && (o[s] = F.access(r, "olddisplay", ye(r.nodeName)))) : (i = z(r),
          "none" === n && i || F.set(r, "olddisplay", i ? n : C.css(r, "display"))));
    for (s = 0; s < a; s++)
      (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    return e
  }

  function Fe(e, t, n, r, i) {
    return new Fe.prototype.init(e, t, n, r, i)
  }
  C.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Te(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: "cssFloat"
      },
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, s, a = C.camelCase(t),
            u = e.style;
          return t = C.cssProps[a] || (C.cssProps[a] = Ae(u, a)),
            s = C.cssHooks[t] || C.cssHooks[a],
            void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = Ee.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(C.css(e, t)),
                o = "number"),
              void(null != n && n == n && ("number" !== o || C.cssNumber[a] || (n += "px"),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
        }
      },
      css: function (e, t, n, r) {
        var i, o, s, a = C.camelCase(t);
        return t = C.cssProps[a] || (C.cssProps[a] = Ae(e.style, a)),
          (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
          void 0 === i && (i = Te(e, t, r)),
          "normal" === i && t in De && (i = De[t]),
          "" === n || n ? (o = parseFloat(i),
            !0 === n || C.isNumeric(o) ? o || 0 : i) : i
      }
    }),
    C.each(["height", "width"], function (e, i) {
      C.cssHooks[i] = {
        get: function (e, t, n) {
          return t ? Ne.test(C.css(e, "display")) && 0 === e.offsetWidth ? C.swap(e, Se, function () {
            return He(e, i, n)
          }) : He(e, i, n) : void 0
        },
        set: function (e, t, n) {
          var r = n && we(e);
          return Le(0, t, n ? qe(e, i, n, "border-box" === C.css(e, "boxSizing", !1, r), r) : 0)
        }
      }
    }),
    C.cssHooks.marginRight = Ce(m.reliableMarginRight, function (e, t) {
      return t ? C.swap(e, {
        display: "inline-block"
      }, Te, [e, "marginRight"]) : void 0
    }),
    C.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (i, o) {
      C.cssHooks[i + o] = {
          expand: function (e) {
            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
              n[i + _[t] + o] = r[t] || r[t - 2] || r[0];
            return n
          }
        },
        xe.test(i) || (C.cssHooks[i + o].set = Le)
    }),
    C.fn.extend({
      css: function (e, t) {
        return H(this, function (e, t, n) {
          var r, i, o = {},
            s = 0;
          if (C.isArray(t)) {
            for (r = we(e),
              i = t.length; s < i; s++)
              o[t[s]] = C.css(e, t[s], !1, r);
            return o
          }
          return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
        }, e, t, 1 < arguments.length)
      },
      show: function () {
        return Oe(this, !0)
      },
      hide: function () {
        return Oe(this)
      },
      toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          z(this) ? C(this).show() : C(this).hide()
        })
      }
    }),
    ((C.Tween = Fe).prototype = {
      constructor: Fe,
      init: function (e, t, n, r, i, o) {
        this.elem = e,
          this.prop = n,
          this.easing = i || "swing",
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = r,
          this.unit = o || (C.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var e = Fe.propHooks[this.prop];
        return e && e.get ? e.get(this) : Fe.propHooks._default.get(this)
      },
      run: function (e) {
        var t, n = Fe.propHooks[this.prop];
        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Fe.propHooks._default.set(this),
          this
      }
    }).init.prototype = Fe.prototype,
    (Fe.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
        },
        set: function (e) {
          C.fx.step[e.prop] ? C.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }).scrollTop = Fe.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    },
    C.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    },
    C.fx = Fe.prototype.init,
    C.fx.step = {};
  var Pe, Re, Me, We, $e, Ie = /^(?:toggle|show|hide)$/,
    Be = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
    _e = /queueHooks$/,
    ze = [function (t, e, n) {
      var r, i, o, s, a, u, l, c = this,
        f = {},
        p = t.style,
        d = t.nodeType && z(t),
        h = F.get(t, "fxshow");
      for (r in n.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
            u = a.empty.fire,
            a.empty.fire = function () {
              a.unqueued || u()
            }
          ),
          a.unqueued++,
          c.always(function () {
            c.always(function () {
              a.unqueued--,
                C.queue(t, "fx").length || a.empty.fire()
            })
          })),
        1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
          l = C.css(t, "display"),
          "inline" === ("none" === l ? F.get(t, "olddisplay") || ye(t.nodeName) : l) && "none" === C.css(t, "float") && (p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
          c.always(function () {
            p.overflow = n.overflow[0],
              p.overflowX = n.overflow[1],
              p.overflowY = n.overflow[2]
          })),
        e)
        if (i = e[r],
          Ie.exec(i)) {
          if (delete e[r],
            o = o || "toggle" === i,
            i === (d ? "hide" : "show")) {
            if ("show" !== i || !h || void 0 === h[r])
              continue;
            d = !0
          }
          f[r] = h && h[r] || C.style(t, r)
        } else
          l = void 0;
      if (C.isEmptyObject(f))
        "inline" === ("none" === l ? ye(t.nodeName) : l) && (p.display = l);
      else
        for (r in h ? "hidden" in h && (d = h.hidden) : h = F.access(t, "fxshow", {}),
          o && (h.hidden = !d),
          d ? C(t).show() : c.done(function () {
            C(t).hide()
          }),
          c.done(function () {
            var e;
            for (e in F.remove(t, "fxshow"),
              f)
              C.style(t, e, f[e])
          }),
          f)
          s = Ye(d ? h[r] : 0, r, c),
          r in h || (h[r] = s.start,
            d && (s.end = s.start,
              s.start = "width" === r || "height" === r ? 1 : 0))
    }],
    Xe = {
      "*": [function (e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = Be.exec(t),
          o = i && i[3] || (C.cssNumber[e] ? "" : "px"),
          s = (C.cssNumber[e] || "px" !== o && +r) && Be.exec(C.css(n.elem, e)),
          a = 1,
          u = 20;
        if (s && s[3] !== o)
          for (o = o || s[3],
            i = i || [],
            s = +r || 1; s /= a = a || ".5",
            C.style(n.elem, e, s + o),
            a !== (a = n.cur() / r) && 1 !== a && --u;)
        ;
        return i && (s = n.start = +s || +r || 0,
            n.unit = o,
            n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
          n
      }]
    };

  function Ue() {
    return setTimeout(function () {
        Pe = void 0
      }),
      Pe = C.now()
  }

  function Ve(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = _[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e),
      i
  }

  function Ye(e, t, n) {
    for (var r, i = (Xe[t] || []).concat(Xe["*"]), o = 0, s = i.length; o < s; o++)
      if (r = i[o].call(n, t, e))
        return r
  }

  function Ge(o, e, t) {
    var n, s, r = 0,
      i = ze.length,
      a = C.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (s)
          return !1;
        for (var e = Pe || Ue(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
          l.tweens[r].run(n);
        return a.notifyWith(o, [l, n, t]),
          n < 1 && i ? t : (a.resolveWith(o, [l]),
            !1)
      },
      l = a.promise({
        elem: o,
        props: C.extend({}, e),
        opts: C.extend(!0, {
          specialEasing: {}
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Pe || Ue(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = C.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n),
            n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (s)
            return this;
          for (s = !0; t < n; t++)
            l.tweens[t].run(1);
          return e ? a.resolveWith(o, [l, e]) : a.rejectWith(o, [l, e]),
            this
        }
      }),
      c = l.props;
    for (function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (i = t[r = C.camelCase(n)],
            o = e[n],
            C.isArray(o) && (i = o[1],
              o = e[n] = o[0]),
            n !== r && (e[r] = o,
              delete e[n]),
            (s = C.cssHooks[r]) && "expand" in s)
            for (n in o = s.expand(o),
              delete e[r],
              o)
              n in e || (e[n] = o[n],
                t[n] = i);
          else
            t[r] = i
      }(c, l.opts.specialEasing); r < i; r++)
      if (n = ze[r].call(l, o, c, l.opts))
        return n;
    return C.map(c, Ye, l),
      C.isFunction(l.opts.start) && l.opts.start.call(o, l),
      C.fx.timer(C.extend(u, {
        elem: o,
        anim: l,
        queue: l.opts.queue
      })),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }
  C.Animation = C.extend(Ge, {
      tweener: function (e, t) {
        for (var n, r = 0, i = (e = C.isFunction(e) ? (t = e,
            ["*"]) : e.split(" ")).length; r < i; r++)
          n = e[r],
          Xe[n] = Xe[n] || [],
          Xe[n].unshift(t)
      },
      prefilter: function (e, t) {
        t ? ze.unshift(e) : ze.push(e)
      }
    }),
    C.speed = function (e, t, n) {
      var r = e && "object" == typeof e ? C.extend({}, e) : {
        complete: n || !n && t || C.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !C.isFunction(t) && t
      };
      return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default,
        (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function () {
          C.isFunction(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue)
        },
        r
    },
    C.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(z).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function (t, e, n, r) {
        var i = C.isEmptyObject(t),
          o = C.speed(e, n, r),
          s = function () {
            var e = Ge(this, C.extend({}, t), o);
            (i || F.get(this, "finish")) && e.stop(!0)
          };
        return s.finish = s,
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function (i, e, o) {
        var s = function (e) {
          var t = e.stop;
          delete e.stop,
            t(o)
        };
        return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = C.timers,
              r = F.get(this);
            if (t)
              r[t] && r[t].stop && s(r[t]);
            else
              for (t in r)
                r[t] && r[t].stop && _e.test(t) && s(r[t]);
            for (t = n.length; t--;)
              n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                e = !1,
                n.splice(t, 1));
            (e || !o) && C.dequeue(this, i)
          })
      },
      finish: function (s) {
        return !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e, t = F.get(this),
              n = t[s + "queue"],
              r = t[s + "queueHooks"],
              i = C.timers,
              o = n ? n.length : 0;
            for (t.finish = !0,
              C.queue(this, s, []),
              r && r.stop && r.stop.call(this, !0),
              e = i.length; e--;)
              i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish
          })
      }
    }),
    C.each(["toggle", "show", "hide"], function (e, r) {
      var i = C.fn[r];
      C.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Ve(r, !0), e, t, n)
      }
    }),
    C.each({
      slideDown: Ve("show"),
      slideUp: Ve("hide"),
      slideToggle: Ve("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, r) {
      C.fn[e] = function (e, t, n) {
        return this.animate(r, e, t, n)
      }
    }),
    C.timers = [],
    C.fx.tick = function () {
      var e, t = 0,
        n = C.timers;
      for (Pe = C.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || C.fx.stop(),
        Pe = void 0
    },
    C.fx.timer = function (e) {
      C.timers.push(e),
        e() ? C.fx.start() : C.timers.pop()
    },
    C.fx.interval = 13,
    C.fx.start = function () {
      Re || (Re = setInterval(C.fx.tick, C.fx.interval))
    },
    C.fx.stop = function () {
      clearInterval(Re),
        Re = null
    },
    C.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    },
    C.fn.delay = function (r, e) {
      return r = C.fx && C.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function (e, t) {
          var n = setTimeout(e, r);
          t.stop = function () {
            clearTimeout(n)
          }
        })
    },
    Me = y.createElement("input"),
    We = y.createElement("select"),
    $e = We.appendChild(y.createElement("option")),
    Me.type = "checkbox",
    m.checkOn = "" !== Me.value,
    m.optSelected = $e.selected,
    We.disabled = !0,
    m.optDisabled = !$e.disabled,
    (Me = y.createElement("input")).value = "t",
    Me.type = "radio",
    m.radioValue = "t" === Me.value;
  var Qe, Je = C.expr.attrHandle;
  C.fn.extend({
      attr: function (e, t) {
        return H(this, C.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function (e) {
        return this.each(function () {
          C.removeAttr(this, e)
        })
      }
    }),
    C.extend({
      attr: function (e, t, n) {
        var r, i, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute === U ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(),
              r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? Qe : void 0)),
            void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
              n) : void C.removeAttr(e, t))
      },
      removeAttr: function (e, t) {
        var n, r, i = 0,
          o = t && t.match(A);
        if (o && 1 === e.nodeType)
          for (; n = o[i++];)
            r = C.propFix[n] || n,
            C.expr.match.bool.test(n) && (e[r] = !1),
            e.removeAttribute(n)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && C.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t),
                n && (e.value = n),
                t
            }
          }
        }
      }
    }),
    Qe = {
      set: function (e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
          n
      }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = Je[t] || C.find.attr;
      Je[t] = function (e, t, n) {
        var r, i;
        return n || (i = Je[t],
            Je[t] = r,
            r = null != o(e, t, n) ? t.toLowerCase() : null,
            Je[t] = i),
          r
      }
    });
  var Ke = /^(?:input|select|textarea|button)$/i;
  C.fn.extend({
      prop: function (e, t) {
        return H(this, C.prop, e, t, 1 < arguments.length)
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[C.propFix[e] || e]
        })
      }
    }),
    C.extend({
      propFix: {
        for: "htmlFor",
        class: "className"
      },
      prop: function (e, t, n) {
        var r, i, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (1 !== o || !C.isXMLDoc(e)) && (t = C.propFix[t] || t,
              i = C.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href ? e.tabIndex : -1
          }
        }
      }
    }),
    m.optSelected || (C.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex,
          null
      }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this
    });
  var Ze = /[\t\r\n\f]/g;
  C.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, s, a = "string" == typeof t && t,
        u = 0,
        l = this.length;
      if (C.isFunction(t))
        return this.each(function (e) {
          C(this).addClass(t.call(this, e, this.className))
        });
      if (a)
        for (e = (t || "").match(A) || []; u < l; u++)
          if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ze, " ") : " ")) {
            for (o = 0; i = e[o++];)
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            s = C.trim(r),
              n.className !== s && (n.className = s)
          }
      return this
    },
    removeClass: function (t) {
      var e, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof t && t,
        u = 0,
        l = this.length;
      if (C.isFunction(t))
        return this.each(function (e) {
          C(this).removeClass(t.call(this, e, this.className))
        });
      if (a)
        for (e = (t || "").match(A) || []; u < l; u++)
          if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ze, " ") : "")) {
            for (o = 0; i = e[o++];)
              for (; 0 <= r.indexOf(" " + i + " ");)
                r = r.replace(" " + i + " ", " ");
            s = t ? C.trim(r) : "",
              n.className !== s && (n.className = s)
          }
      return this
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : this.each(C.isFunction(i) ? function (e) {
          C(this).toggleClass(i.call(this, e, this.className, t), t)
        } :
        function () {
          if ("string" === o)
            for (var e, t = 0, n = C(this), r = i.match(A) || []; e = r[t++];)
              n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          else
            (o === U || "boolean" === o) && (this.className && F.set(this, "__className__", this.className),
              this.className = this.className || !1 === i ? "" : F.get(this, "__className__") || "")
        }
      )
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Ze, " ").indexOf(t))
          return !0;
      return !1
    }
  });
  var et = /\r/g;
  C.fn.extend({
      val: function (n) {
        var r, e, i, t = this[0];
        return arguments.length ? (i = C.isFunction(n),
          this.each(function (e) {
            var t;
            1 === this.nodeType && (null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function (e) {
                return null == e ? "" : e + ""
              })),
              (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
          })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(et, "") : null == e ? "" : e : void 0
      }
    }),
    C.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = C.find.attr(e, "value");
            return null != t ? t : C.trim(C.text(e))
          }
        },
        select: {
          get: function (e) {
            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
              if (!(!(n = r[u]).selected && u !== i || (m.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && C.nodeName(n.parentNode, "optgroup"))) {
                if (t = C(n).val(),
                  o)
                  return t;
                s.push(t)
              }
            return s
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;)
              ((r = i[s]).selected = 0 <= C.inArray(r.value, o)) && (n = !0);
            return n || (e.selectedIndex = -1),
              o
          }
        }
      }
    }),
    C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = {
          set: function (e, t) {
            return C.isArray(t) ? e.checked = 0 <= C.inArray(C(e).val(), t) : void 0
          }
        },
        m.checkOn || (C.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
    }),
    C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
      C.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
      }
    }),
    C.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    });
  var tt = C.now(),
    nt = /\?/;
  C.parseJSON = function (e) {
      return JSON.parse(e + "")
    },
    C.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e)
        return null;
      try {
        t = (new DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return (!t || t.getElementsByTagName("parsererror").length) && C.error("Invalid XML: " + e),
        t
    };
  var rt = /#.*$/,
    it = /([?&])_=[^&]*/,
    ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    st = /^(?:GET|HEAD)$/,
    at = /^\/\//,
    ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lt = {},
    ct = {},
    ft = "*/".concat("*"),
    pt = h.location.href,
    dt = ut.exec(pt.toLowerCase()) || [];

  function ht(o) {
    return function (e, t) {
      "string" != typeof e && (t = e,
        e = "*");
      var n, r = 0,
        i = e.toLowerCase().match(A) || [];
      if (C.isFunction(t))
        for (; n = i[r++];)
          "+" === n[0] ? (n = n.slice(1) || "*",
            (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function gt(t, i, o, s) {
    var a = {},
      u = t === ct;

    function l(e) {
      var r;
      return a[e] = !0,
        C.each(t[e] || [], function (e, t) {
          var n = t(i, o, s);
          return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
            l(n),
            !1)
        }),
        r
    }
    return l(i.dataTypes[0]) || !a["*"] && l("*")
  }

  function vt(e, t) {
    var n, r, i = C.ajaxSettings.flatOptions || {};
    for (n in t)
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && C.extend(!0, e, r),
      e
  }
  C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pt,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": C.parseJSON,
          "text xml": C.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (e, t) {
        return t ? vt(vt(e, C.ajaxSettings), t) : vt(C.ajaxSettings, e)
      },
      ajaxPrefilter: ht(lt),
      ajaxTransport: ht(ct),
      ajax: function (e, t) {
        "object" == typeof e && (t = e,
            e = void 0),
          t = t || {};
        var c, f, p, n, d, r, h, i, g = C.ajaxSetup({}, t),
          v = g.context || g,
          m = g.context && (v.nodeType || v.jquery) ? C(v) : C.event,
          y = C.Deferred(),
          x = C.Callbacks("once memory"),
          b = g.statusCode || {},
          o = {},
          s = {},
          w = 0,
          a = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === w) {
                if (!n)
                  for (n = {}; t = ot.exec(p);)
                    n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function () {
              return 2 === w ? p : null
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return w || (e = s[n] = s[n] || e,
                  o[e] = t),
                this
            },
            overrideMimeType: function (e) {
              return w || (g.mimeType = e),
                this
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (w < 2)
                  for (t in e)
                    b[t] = [b[t], e[t]];
                else
                  T.always(e[T.status]);
              return this
            },
            abort: function (e) {
              var t = e || a;
              return c && c.abort(t),
                u(0, t),
                this
            }
          };
        if (y.promise(T).complete = x.add,
          T.success = T.done,
          T.error = T.fail,
          g.url = ((e || g.url || pt) + "").replace(rt, "").replace(at, dt[1] + "//"),
          g.type = t.method || t.type || g.method || g.type,
          g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(A) || [""],
          null == g.crossDomain && (r = ut.exec(g.url.toLowerCase()),
            g.crossDomain = !(!r || r[1] === dt[1] && r[2] === dt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))),
          g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)),
          gt(lt, g, t, T),
          2 === w)
          return T;
        for (i in (h = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
          g.type = g.type.toUpperCase(),
          g.hasContent = !st.test(g.type),
          f = g.url,
          g.hasContent || (g.data && (f = g.url += (nt.test(f) ? "&" : "?") + g.data,
              delete g.data),
            !1 === g.cache && (g.url = it.test(f) ? f.replace(it, "$1_=" + tt++) : f + (nt.test(f) ? "&" : "?") + "_=" + tt++)),
          g.ifModified && (C.lastModified[f] && T.setRequestHeader("If-Modified-Since", C.lastModified[f]),
            C.etag[f] && T.setRequestHeader("If-None-Match", C.etag[f])),
          (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType),
          T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + ft + "; q=0.01" : "") : g.accepts["*"]),
          g.headers)
          T.setRequestHeader(i, g.headers[i]);
        if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || 2 === w))
          return T.abort();
        for (i in a = "abort", {
            success: 1,
            error: 1,
            complete: 1
          })
          T[i](g[i]);
        if (c = gt(ct, g, t, T)) {
          T.readyState = 1,
            h && m.trigger("ajaxSend", [T, g]),
            g.async && 0 < g.timeout && (d = setTimeout(function () {
              T.abort("timeout")
            }, g.timeout));
          try {
            w = 1,
              c.send(o, u)
          } catch (e) {
            if (!(w < 2))
              throw e;
            u(-1, e)
          }
        } else
          u(-1, "No Transport");

        function u(e, t, n, r) {
          var i, o, s, a, u, l = t;
          2 !== w && (w = 2,
            d && clearTimeout(d),
            c = void 0,
            p = r || "",
            T.readyState = 0 < e ? 4 : 0,
            i = 200 <= e && e < 300 || 304 === e,
            n && (a = function (e, t, n) {
              for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                "*" === u[0];)
                u.shift(),
                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r)
                for (i in a)
                  if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                  }
              if (u[0] in n)
                o = u[0];
              else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                  }
                  s || (s = i)
                }
                o = o || s
              }
              return o ? (o !== u[0] && u.unshift(o),
                n[o]) : void 0
            }(g, T, n)),
            a = function (e, t, n, r) {
              var i, o, s, a, u, l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters)
                  l[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  u = o,
                  o = c.shift())
                  if ("*" === o)
                    o = u;
                  else if ("*" !== u && u !== o) {
                if (!(s = l[u + " " + o] || l["* " + o]))
                  for (i in l)
                    if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                      !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                        c.unshift(a[1]));
                      break
                    }
                if (!0 !== s)
                  if (s && e.throws)
                    t = s(t);
                  else
                    try {
                      t = s(t)
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                      }
                    }
              }
              return {
                state: "success",
                data: t
              }
            }(g, a, T, i),
            i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (C.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (C.etag[f] = u)),
              204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state,
                o = a.data,
                i = !(s = a.error))) : (s = l,
              (e || !l) && (l = "error",
                e < 0 && (e = 0))),
            T.status = e,
            T.statusText = (t || l) + "",
            i ? y.resolveWith(v, [o, l, T]) : y.rejectWith(v, [T, l, s]),
            T.statusCode(b),
            b = void 0,
            h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]),
            x.fireWith(v, [T, l]),
            h && (m.trigger("ajaxComplete", [T, g]),
              --C.active || C.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function (e, t, n) {
        return C.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return C.get(e, void 0, t, "script")
      }
    }),
    C.each(["get", "post"], function (e, i) {
      C[i] = function (e, t, n, r) {
        return C.isFunction(t) && (r = r || n,
            n = t,
            t = void 0),
          C.ajax({
            url: e,
            type: i,
            dataType: r,
            data: t,
            success: n
          })
      }
    }),
    C._evalUrl = function (e) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    },
    C.fn.extend({
      wrapAll: function (t) {
        var e;
        return C.isFunction(t) ? this.each(function (e) {
          C(this).wrapAll(t.call(this, e))
        }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function () {
              for (var e = this; e.firstElementChild;)
                e = e.firstElementChild;
              return e
            }).append(this)),
          this)
      },
      wrapInner: function (n) {
        return this.each(C.isFunction(n) ? function (e) {
            C(this).wrapInner(n.call(this, e))
          } :
          function () {
            var e = C(this),
              t = e.contents();
            t.length ? t.wrapAll(n) : e.append(n)
          }
        )
      },
      wrap: function (t) {
        var n = C.isFunction(t);
        return this.each(function (e) {
          C(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function () {
        return this.parent().each(function () {
          C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
        }).end()
      }
    }),
    C.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0
    },
    C.expr.filters.visible = function (e) {
      return !C.expr.filters.hidden(e)
    };
  var mt = /%20/g,
    yt = /\[\]$/,
    xt = /\r?\n/g,
    bt = /^(?:submit|button|image|reset|file)$/i,
    wt = /^(?:input|select|textarea|keygen)/i;

  function Tt(n, e, r, i) {
    var t;
    if (C.isArray(e))
      C.each(e, function (e, t) {
        r || yt.test(n) ? i(n, t) : Tt(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i)
      });
    else if (r || "object" !== C.type(e))
      i(n, e);
    else
      for (t in e)
        Tt(n + "[" + t + "]", e[t], r, i)
  }
  C.param = function (e, t) {
      var n, r = [],
        i = function (e, t) {
          t = C.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional),
        C.isArray(e) || e.jquery && !C.isPlainObject(e))
        C.each(e, function () {
          i(this.name, this.value)
        });
      else
        for (n in e)
          Tt(n, e[n], t, i);
      return r.join("&").replace(mt, "+")
    },
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !C(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !X.test(e))
        }).map(function (e, t) {
          var n = C(this).val();
          return null == n ? null : C.isArray(n) ? C.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(xt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(xt, "\r\n")
          }
        }).get()
      }
    }),
    C.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest
      } catch (e) {}
    };
  var Ct = 0,
    Nt = {},
    kt = {
      0: 200,
      1223: 204
    },
    Et = C.ajaxSettings.xhr();
  h.attachEvent && h.attachEvent("onunload", function () {
      for (var e in Nt)
        Nt[e]()
    }),
    m.cors = !!Et && "withCredentials" in Et,
    m.ajax = Et = !!Et,
    C.ajaxTransport(function (o) {
      var s;
      return m.cors || Et && !o.crossDomain ? {
        send: function (e, t) {
          var n, r = o.xhr(),
            i = ++Ct;
          if (r.open(o.type, o.url, o.async, o.username, o.password),
            o.xhrFields)
            for (n in o.xhrFields)
              r[n] = o.xhrFields[n];
          for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType),
            o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
            e)
            r.setRequestHeader(n, e[n]);
          s = function (e) {
              return function () {
                s && (delete Nt[i],
                  s = r.onload = r.onerror = null,
                  "abort" === e ? r.abort() : "error" === e ? t(r.status, r.statusText) : t(kt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                    text: r.responseText
                  } : void 0, r.getAllResponseHeaders()))
              }
            },
            r.onload = s(),
            r.onerror = s("error"),
            s = Nt[i] = s("abort");
          try {
            r.send(o.hasContent && o.data || null)
          } catch (e) {
            if (s)
              throw e
          }
        },
        abort: function () {
          s && s()
        }
      } : void 0
    }),
    C.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function (e) {
          return C.globalEval(e),
            e
        }
      }
    }),
    C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    C.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            r = C("<script>").prop({
                async: !0,
                charset: n.scriptCharset,
                src: n.url
              }).on("load error", i = function (e) {
                r.remove(),
                  i = null,
                  e && t("error" === e.type ? 404 : 200, e.type)
              }),
              y.head.appendChild(r[0])
          },
          abort: function () {
            i && i()
          }
        }
    });
  var St = [],
    Dt = /(=)\?(?=&|$)|\?\?/;
  C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = St.pop() || C.expando + "_" + tt++;
        return this[e] = !0,
          e
      }
    }),
    C.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r, i, o, s = !1 !== e.jsonp && (Dt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(e.data) && "data");
      return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        s ? e[s] = e[s].replace(Dt, "$1" + r) : !1 !== e.jsonp && (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
        e.converters["script json"] = function () {
          return o || C.error(r + " was not called"),
            o[0]
        },
        e.dataTypes[0] = "json",
        i = h[r],
        h[r] = function () {
          o = arguments
        },
        n.always(function () {
          h[r] = i,
            e[r] && (e.jsonpCallback = t.jsonpCallback,
              St.push(r)),
            o && C.isFunction(i) && i(o[0]),
            o = i = void 0
        }),
        "script") : void 0
    }),
    C.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e)
        return null;
      "boolean" == typeof t && (n = t,
          t = !1),
        t = t || y;
      var r = b.exec(e),
        i = !n && [];
      return r ? [t.createElement(r[1])] : (r = C.buildFragment([e], t, i),
        i && i.length && C(i).remove(),
        C.merge([], r.childNodes))
    };
  var jt = C.fn.load;
  C.fn.load = function (e, t, n) {
      if ("string" != typeof e && jt)
        return jt.apply(this, arguments);
      var r, i, o, s = this,
        a = e.indexOf(" ");
      return 0 <= a && (r = C.trim(e.slice(a)),
          e = e.slice(0, a)),
        C.isFunction(t) ? (n = t,
          t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && C.ajax({
          url: e,
          type: i,
          dataType: "html",
          data: t
        }).done(function (e) {
          o = arguments,
            s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
          s.each(n, o || [e.responseText, t, e])
        }),
        this
    },
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e)
      }
    }),
    C.expr.filters.animated = function (t) {
      return C.grep(C.timers, function (e) {
        return t === e.elem
      }).length
    };
  var At = h.document.documentElement;

  function Lt(e) {
    return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  C.offset = {
      setOffset: function (e, t, n) {
        var r, i, o, s, a, u, l = C.css(e, "position"),
          c = C(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          a = c.offset(),
          o = C.css(e, "top"),
          u = C.css(e, "left"),
          i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top,
            r.left) : (s = parseFloat(o) || 0,
            parseFloat(u) || 0),
          C.isFunction(t) && (t = t.call(e, n, a)),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f)
      }
    },
    C.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t ? this : this.each(function (e) {
            C.offset.setOffset(this, t, e)
          });
        var e, n, r = this[0],
          i = {
            top: 0,
            left: 0
          },
          o = r && r.ownerDocument;
        return o ? (e = o.documentElement,
          C.contains(e, r) ? (typeof r.getBoundingClientRect !== U && (i = r.getBoundingClientRect()),
            n = Lt(o), {
              top: i.top + n.pageYOffset - e.clientTop,
              left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
      },
      position: function () {
        if (this[0]) {
          var e, t, n = this[0],
            r = {
              top: 0,
              left: 0
            };
          return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
            t = this.offset(),
            C.nodeName(e[0], "html") || (r = e.offset()),
            r.top += C.css(e[0], "borderTopWidth", !0),
            r.left += C.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - r.top - C.css(n, "marginTop", !0),
            left: t.left - r.left - C.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent || At; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");)
            e = e.offsetParent;
          return e || At
        })
      }
    }),
    C.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, i) {
      var o = "pageYOffset" === i;
      C.fn[t] = function (e) {
        return H(this, function (e, t, n) {
          var r = Lt(e);
          return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? h.pageXOffset : n, o ? n : h.pageYOffset) : e[t] = n)
        }, t, e, arguments.length, null)
      }
    }),
    C.each(["top", "left"], function (e, n) {
      C.cssHooks[n] = Ce(m.pixelPosition, function (e, t) {
        return t ? (t = Te(e, n),
          be.test(t) ? C(e).position()[n] + "px" : t) : void 0
      })
    }),
    C.each({
      Height: "height",
      Width: "width"
    }, function (o, s) {
      C.each({
        padding: "inner" + o,
        content: s,
        "": "outer" + o
      }, function (r, e) {
        C.fn[e] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return H(this, function (e, t, n) {
            var r;
            return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement,
              Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
          }, s, n ? e : void 0, n, null)
        }
      })
    }),
    C.fn.size = function () {
      return this.length
    },
    C.fn.andSelf = C.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function () {
      return C
    });
  var qt = h.jQuery,
    Ht = h.$;
  return C.noConflict = function (e) {
      return h.$ === C && (h.$ = Ht),
        e && h.jQuery === C && (h.jQuery = qt),
        C
    },
    typeof e === U && (h.jQuery = h.$ = C),
    C
});