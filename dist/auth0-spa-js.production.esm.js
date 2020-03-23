/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e = function(t, n) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(e, t) {
        e.__proto__ = t;
      }) ||
    function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(t, n);
};
var t = function() {
  return (t =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function n(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function r(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function a(e) {
      try {
        u(r.next(e));
      } catch (e) {
        i(e);
      }
    }
    function c(e) {
      try {
        u(r.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function u(e) {
      e.done
        ? o(e.value)
        : new n(function(t) {
            t(e.value);
          }).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function o(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
  return (
    (i = { next: c(0), throw: c(1), return: c(2) }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function() {
        return this;
      }),
    i
  );
  function c(i) {
    return function(c) {
      return (function(i) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                  (6 === i[0] || 2 === i[0])
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, c]);
    };
  }
}
var i =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function c(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var u = function(e) {
    return e && e.Math == Math && e;
  },
  s =
    u('object' == typeof globalThis && globalThis) ||
    u('object' == typeof window && window) ||
    u('object' == typeof self && self) ||
    u('object' == typeof i && i) ||
    Function('return this')(),
  f = function(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  l = !f(function() {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1]
    );
  }),
  d = {}.propertyIsEnumerable,
  p = Object.getOwnPropertyDescriptor,
  h = {
    f:
      p && !d.call({ 1: 2 }, 1)
        ? function(e) {
            var t = p(this, e);
            return !!t && t.enumerable;
          }
        : d
  },
  v = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
  y = {}.toString,
  m = function(e) {
    return y.call(e).slice(8, -1);
  },
  w = ''.split,
  g = f(function() {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function(e) {
        return 'String' == m(e) ? w.call(e, '') : Object(e);
      }
    : Object,
  b = function(e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  _ = function(e) {
    return g(b(e));
  },
  S = function(e) {
    return 'object' == typeof e ? null !== e : 'function' == typeof e;
  },
  k = function(e, t) {
    if (!S(e)) return e;
    var n, r;
    if (t && 'function' == typeof (n = e.toString) && !S((r = n.call(e))))
      return r;
    if ('function' == typeof (n = e.valueOf) && !S((r = n.call(e)))) return r;
    if (!t && 'function' == typeof (n = e.toString) && !S((r = n.call(e))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  O = {}.hasOwnProperty,
  T = function(e, t) {
    return O.call(e, t);
  },
  j = s.document,
  A = S(j) && S(j.createElement),
  I = function(e) {
    return A ? j.createElement(e) : {};
  },
  E =
    !l &&
    !f(function() {
      return (
        7 !=
        Object.defineProperty(I('div'), 'a', {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
  x = Object.getOwnPropertyDescriptor,
  P = {
    f: l
      ? x
      : function(e, t) {
          if (((e = _(e)), (t = k(t, !0)), E))
            try {
              return x(e, t);
            } catch (e) {}
          if (T(e, t)) return v(!h.f.call(e, t), e[t]);
        }
  },
  C = function(e) {
    if (!S(e)) throw TypeError(String(e) + ' is not an object');
    return e;
  },
  U = Object.defineProperty,
  D = {
    f: l
      ? U
      : function(e, t, n) {
          if ((C(e), (t = k(t, !0)), C(n), E))
            try {
              return U(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        }
  },
  R = l
    ? function(e, t, n) {
        return D.f(e, t, v(1, n));
      }
    : function(e, t, n) {
        return (e[t] = n), e;
      },
  L = function(e, t) {
    try {
      R(s, e, t);
    } catch (n) {
      s[e] = t;
    }
    return t;
  },
  F = s['__core-js_shared__'] || L('__core-js_shared__', {}),
  M = Function.toString;
'function' != typeof F.inspectSource &&
  (F.inspectSource = function(e) {
    return M.call(e);
  });
var W,
  z,
  q,
  N = F.inspectSource,
  B = s.WeakMap,
  J = 'function' == typeof B && /native code/.test(N(B)),
  G = c(function(e) {
    (e.exports = function(e, t) {
      return F[e] || (F[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.6.4',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
  }),
  H = 0,
  Y = Math.random(),
  V = function(e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++H + Y).toString(36)
    );
  },
  X = G('keys'),
  K = function(e) {
    return X[e] || (X[e] = V(e));
  },
  Q = {},
  Z = s.WeakMap;
if (J) {
  var $ = new Z(),
    ee = $.get,
    te = $.has,
    ne = $.set;
  (W = function(e, t) {
    return ne.call($, e, t), t;
  }),
    (z = function(e) {
      return ee.call($, e) || {};
    }),
    (q = function(e) {
      return te.call($, e);
    });
} else {
  var re = K('state');
  (Q[re] = !0),
    (W = function(e, t) {
      return R(e, re, t), t;
    }),
    (z = function(e) {
      return T(e, re) ? e[re] : {};
    }),
    (q = function(e) {
      return T(e, re);
    });
}
var oe,
  ie = {
    set: W,
    get: z,
    has: q,
    enforce: function(e) {
      return q(e) ? z(e) : W(e, {});
    },
    getterFor: function(e) {
      return function(t) {
        var n;
        if (!S(t) || (n = z(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required');
        return n;
      };
    }
  },
  ae = c(function(e) {
    var t = ie.get,
      n = ie.enforce,
      r = String(String).split('String');
    (e.exports = function(e, t, o, i) {
      var a = !!i && !!i.unsafe,
        c = !!i && !!i.enumerable,
        u = !!i && !!i.noTargetGet;
      'function' == typeof o &&
        ('string' != typeof t || T(o, 'name') || R(o, 'name', t),
        (n(o).source = r.join('string' == typeof t ? t : ''))),
        e !== s
          ? (a ? !u && e[t] && (c = !0) : delete e[t],
            c ? (e[t] = o) : R(e, t, o))
          : c
          ? (e[t] = o)
          : L(t, o);
    })(Function.prototype, 'toString', function() {
      return ('function' == typeof this && t(this).source) || N(this);
    });
  }),
  ce = s,
  ue = function(e) {
    return 'function' == typeof e ? e : void 0;
  },
  se = function(e, t) {
    return arguments.length < 2
      ? ue(ce[e]) || ue(s[e])
      : (ce[e] && ce[e][t]) || (s[e] && s[e][t]);
  },
  fe = Math.ceil,
  le = Math.floor,
  de = function(e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? le : fe)(e);
  },
  pe = Math.min,
  he = function(e) {
    return e > 0 ? pe(de(e), 9007199254740991) : 0;
  },
  ve = Math.max,
  ye = Math.min,
  me = function(e) {
    return function(t, n, r) {
      var o,
        i = _(t),
        a = he(i.length),
        c = (function(e, t) {
          var n = de(e);
          return n < 0 ? ve(n + t, 0) : ye(n, t);
        })(r, a);
      if (e && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((e || c in i) && i[c] === n) return e || c || 0;
      return !e && -1;
    };
  },
  we = { includes: me(!0), indexOf: me(!1) },
  ge = we.indexOf,
  be = function(e, t) {
    var n,
      r = _(e),
      o = 0,
      i = [];
    for (n in r) !T(Q, n) && T(r, n) && i.push(n);
    for (; t.length > o; ) T(r, (n = t[o++])) && (~ge(i, n) || i.push(n));
    return i;
  },
  _e = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ],
  Se = _e.concat('length', 'prototype'),
  ke = {
    f:
      Object.getOwnPropertyNames ||
      function(e) {
        return be(e, Se);
      }
  },
  Oe = { f: Object.getOwnPropertySymbols },
  Te =
    se('Reflect', 'ownKeys') ||
    function(e) {
      var t = ke.f(C(e)),
        n = Oe.f;
      return n ? t.concat(n(e)) : t;
    },
  je = function(e, t) {
    for (var n = Te(t), r = D.f, o = P.f, i = 0; i < n.length; i++) {
      var a = n[i];
      T(e, a) || r(e, a, o(t, a));
    }
  },
  Ae = /#|\.prototype\./,
  Ie = function(e, t) {
    var n = xe[Ee(e)];
    return n == Ce || (n != Pe && ('function' == typeof t ? f(t) : !!t));
  },
  Ee = (Ie.normalize = function(e) {
    return String(e)
      .replace(Ae, '.')
      .toLowerCase();
  }),
  xe = (Ie.data = {}),
  Pe = (Ie.NATIVE = 'N'),
  Ce = (Ie.POLYFILL = 'P'),
  Ue = Ie,
  De = P.f,
  Re = function(e, t) {
    var n,
      r,
      o,
      i,
      a,
      c = e.target,
      u = e.global,
      f = e.stat;
    if ((n = u ? s : f ? s[c] || L(c, {}) : (s[c] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (a = De(n, r)) && a.value : n[r]),
          !Ue(u ? r : c + (f ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          je(i, o);
        }
        (e.sham || (o && o.sham)) && R(i, 'sham', !0), ae(n, r, i, e);
      }
  },
  Le =
    !!Object.getOwnPropertySymbols &&
    !f(function() {
      return !String(Symbol());
    }),
  Fe = Le && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  Me = G('wks'),
  We = s.Symbol,
  ze = Fe ? We : (We && We.withoutSetter) || V,
  qe = function(e) {
    return (
      T(Me, e) ||
        (Le && T(We, e) ? (Me[e] = We[e]) : (Me[e] = ze('Symbol.' + e))),
      Me[e]
    );
  },
  Ne = qe('match'),
  Be = function(e) {
    if (
      (function(e) {
        var t;
        return S(e) && (void 0 !== (t = e[Ne]) ? !!t : 'RegExp' == m(e));
      })(e)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
  Je = qe('match'),
  Ge = function(e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[Je] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  He = P.f,
  Ye = ''.startsWith,
  Ve = Math.min,
  Xe = Ge('startsWith'),
  Ke = !(Xe || ((oe = He(String.prototype, 'startsWith')), !oe || oe.writable));
Re(
  { target: 'String', proto: !0, forced: !Ke && !Xe },
  {
    startsWith: function(e) {
      var t = String(b(this));
      Be(e);
      var n = he(Ve(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = String(e);
      return Ye ? Ye.call(t, r, n) : t.slice(n, n + r.length) === r;
    }
  }
);
var Qe,
  Ze,
  $e,
  et = function(e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function');
    return e;
  },
  tt = function(e, t, n) {
    if ((et(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function() {
          return e.call(t);
        };
      case 1:
        return function(n) {
          return e.call(t, n);
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r);
        };
      case 3:
        return function(n, r, o) {
          return e.call(t, n, r, o);
        };
    }
    return function() {
      return e.apply(t, arguments);
    };
  },
  nt = Function.call,
  rt = function(e, t, n) {
    return tt(nt, s[e].prototype[t], n);
  },
  ot =
    (rt('String', 'startsWith'),
    function(e) {
      return function(t, n) {
        var r,
          o,
          i = String(b(t)),
          a = de(n),
          c = i.length;
        return a < 0 || a >= c
          ? e
            ? ''
            : void 0
          : (r = i.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === c ||
            (o = i.charCodeAt(a + 1)) < 56320 ||
            o > 57343
          ? e
            ? i.charAt(a)
            : r
          : e
          ? i.slice(a, a + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    }),
  it = { codeAt: ot(!1), charAt: ot(!0) },
  at = function(e) {
    return Object(b(e));
  },
  ct = !f(function() {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  ut = K('IE_PROTO'),
  st = Object.prototype,
  ft = ct
    ? Object.getPrototypeOf
    : function(e) {
        return (
          (e = at(e)),
          T(e, ut)
            ? e[ut]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? st
            : null
        );
      },
  lt = qe('iterator'),
  dt = !1;
[].keys &&
  ('next' in ($e = [].keys())
    ? (Ze = ft(ft($e))) !== Object.prototype && (Qe = Ze)
    : (dt = !0)),
  null == Qe && (Qe = {}),
  T(Qe, lt) ||
    R(Qe, lt, function() {
      return this;
    });
var pt,
  ht = { IteratorPrototype: Qe, BUGGY_SAFARI_ITERATORS: dt },
  vt =
    Object.keys ||
    function(e) {
      return be(e, _e);
    },
  yt = l
    ? Object.defineProperties
    : function(e, t) {
        C(e);
        for (var n, r = vt(t), o = r.length, i = 0; o > i; )
          D.f(e, (n = r[i++]), t[n]);
        return e;
      },
  mt = se('document', 'documentElement'),
  wt = K('IE_PROTO'),
  gt = function() {},
  bt = function(e) {
    return '<script>' + e + '</script>';
  },
  _t = function() {
    try {
      pt = document.domain && new ActiveXObject('htmlfile');
    } catch (e) {}
    var e, t;
    _t = pt
      ? (function(e) {
          e.write(bt('')), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        })(pt)
      : (((t = I('iframe')).style.display = 'none'),
        mt.appendChild(t),
        (t.src = String('javascript:')),
        (e = t.contentWindow.document).open(),
        e.write(bt('document.F=Object')),
        e.close(),
        e.F);
    for (var n = _e.length; n--; ) delete _t.prototype[_e[n]];
    return _t();
  };
Q[wt] = !0;
var St =
    Object.create ||
    function(e, t) {
      var n;
      return (
        null !== e
          ? ((gt.prototype = C(e)),
            (n = new gt()),
            (gt.prototype = null),
            (n[wt] = e))
          : (n = _t()),
        void 0 === t ? n : yt(n, t)
      );
    },
  kt = D.f,
  Ot = qe('toStringTag'),
  Tt = function(e, t, n) {
    e &&
      !T((e = n ? e : e.prototype), Ot) &&
      kt(e, Ot, { configurable: !0, value: t });
  },
  jt = {},
  At = ht.IteratorPrototype,
  It = function() {
    return this;
  },
  Et =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function() {
          var e,
            t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function(n, r) {
            return (
              C(n),
              (function(e) {
                if (!S(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + ' as a prototype');
              })(r),
              t ? e.call(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  xt = ht.IteratorPrototype,
  Pt = ht.BUGGY_SAFARI_ITERATORS,
  Ct = qe('iterator'),
  Ut = function() {
    return this;
  },
  Dt = it.charAt,
  Rt = ie.set,
  Lt = ie.getterFor('String Iterator');
!(function(e, t, n, r, o, i, a) {
  !(function(e, t, n) {
    var r = t + ' Iterator';
    (e.prototype = St(At, { next: v(1, n) })), Tt(e, r, !1), (jt[r] = It);
  })(n, t, r);
  var c,
    u,
    s,
    f = function(e) {
      if (e === o && y) return y;
      if (!Pt && e in p) return p[e];
      switch (e) {
        case 'keys':
        case 'values':
        case 'entries':
          return function() {
            return new n(this, e);
          };
      }
      return function() {
        return new n(this);
      };
    },
    l = t + ' Iterator',
    d = !1,
    p = e.prototype,
    h = p[Ct] || p['@@iterator'] || (o && p[o]),
    y = (!Pt && h) || f(o),
    m = ('Array' == t && p.entries) || h;
  if (
    (m &&
      ((c = ft(m.call(new e()))),
      xt !== Object.prototype &&
        c.next &&
        (ft(c) !== xt &&
          (Et ? Et(c, xt) : 'function' != typeof c[Ct] && R(c, Ct, Ut)),
        Tt(c, l, !0))),
    'values' == o &&
      h &&
      'values' !== h.name &&
      ((d = !0),
      (y = function() {
        return h.call(this);
      })),
    p[Ct] !== y && R(p, Ct, y),
    (jt[t] = y),
    o)
  )
    if (
      ((u = {
        values: f('values'),
        keys: i ? y : f('keys'),
        entries: f('entries')
      }),
      a)
    )
      for (s in u) (!Pt && !d && s in p) || ae(p, s, u[s]);
    else Re({ target: t, proto: !0, forced: Pt || d }, u);
})(
  String,
  'String',
  function(e) {
    Rt(this, { type: 'String Iterator', string: String(e), index: 0 });
  },
  function() {
    var e,
      t = Lt(this),
      n = t.string,
      r = t.index;
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Dt(n, r)), (t.index += e.length), { value: e, done: !1 });
  }
);
var Ft = function(e, t, n, r) {
    try {
      return r ? t(C(n)[0], n[1]) : t(n);
    } catch (t) {
      var o = e.return;
      throw (void 0 !== o && C(o.call(e)), t);
    }
  },
  Mt = qe('iterator'),
  Wt = Array.prototype,
  zt = function(e) {
    return void 0 !== e && (jt.Array === e || Wt[Mt] === e);
  },
  qt = function(e, t, n) {
    var r = k(t);
    r in e ? D.f(e, r, v(0, n)) : (e[r] = n);
  },
  Nt = {};
Nt[qe('toStringTag')] = 'z';
var Bt = '[object z]' === String(Nt),
  Jt = qe('toStringTag'),
  Gt =
    'Arguments' ==
    m(
      (function() {
        return arguments;
      })()
    ),
  Ht = Bt
    ? m
    : function(e) {
        var t, n, r;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function(e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), Jt))
          ? n
          : Gt
          ? m(t)
          : 'Object' == (r = m(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : r;
      },
  Yt = qe('iterator'),
  Vt = function(e) {
    if (null != e) return e[Yt] || e['@@iterator'] || jt[Ht(e)];
  },
  Xt = qe('iterator'),
  Kt = !1;
try {
  var Qt = 0,
    Zt = {
      next: function() {
        return { done: !!Qt++ };
      },
      return: function() {
        Kt = !0;
      }
    };
  (Zt[Xt] = function() {
    return this;
  }),
    Array.from(Zt, function() {
      throw 2;
    });
} catch (e) {}
var $t = !(function(e, t) {
  if (!t && !Kt) return !1;
  var n = !1;
  try {
    var r = {};
    (r[Xt] = function() {
      return {
        next: function() {
          return { done: (n = !0) };
        }
      };
    }),
      e(r);
  } catch (e) {}
  return n;
})(function(e) {
  Array.from(e);
});
Re(
  { target: 'Array', stat: !0, forced: $t },
  {
    from: function(e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        c = at(e),
        u = 'function' == typeof this ? this : Array,
        s = arguments.length,
        f = s > 1 ? arguments[1] : void 0,
        l = void 0 !== f,
        d = Vt(c),
        p = 0;
      if (
        (l && (f = tt(f, s > 2 ? arguments[2] : void 0, 2)),
        null == d || (u == Array && zt(d)))
      )
        for (n = new u((t = he(c.length))); t > p; p++)
          (a = l ? f(c[p], p) : c[p]), qt(n, p, a);
      else
        for (i = (o = d.call(c)).next, n = new u(); !(r = i.call(o)).done; p++)
          (a = l ? Ft(o, f, [r.value, p], !0) : r.value), qt(n, p, a);
      return (n.length = p), n;
    }
  }
);
ce.Array.from;
var en,
  tn = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  nn = D.f,
  rn = s.Int8Array,
  on = rn && rn.prototype,
  an = s.Uint8ClampedArray,
  cn = an && an.prototype,
  un = rn && ft(rn),
  sn = on && ft(on),
  fn = Object.prototype,
  ln = fn.isPrototypeOf,
  dn = qe('toStringTag'),
  pn = V('TYPED_ARRAY_TAG'),
  hn = tn && !!Et && 'Opera' !== Ht(s.opera),
  vn = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
  yn = function(e) {
    return S(e) && T(vn, Ht(e));
  };
for (en in vn) s[en] || (hn = !1);
if (
  (!hn || 'function' != typeof un || un === Function.prototype) &&
  ((un = function() {
    throw TypeError('Incorrect invocation');
  }),
  hn)
)
  for (en in vn) s[en] && Et(s[en], un);
if ((!hn || !sn || sn === fn) && ((sn = un.prototype), hn))
  for (en in vn) s[en] && Et(s[en].prototype, sn);
if ((hn && ft(cn) !== sn && Et(cn, sn), l && !T(sn, dn)))
  for (en in (!0,
  nn(sn, dn, {
    get: function() {
      return S(this) ? this[pn] : void 0;
    }
  }),
  vn))
    s[en] && R(s[en], pn, en);
var mn = function(e) {
    if (yn(e)) return e;
    throw TypeError('Target is not a typed array');
  },
  wn = function(e) {
    if (Et) {
      if (ln.call(un, e)) return e;
    } else
      for (var t in vn)
        if (T(vn, en)) {
          var n = s[t];
          if (n && (e === n || ln.call(n, e))) return e;
        }
    throw TypeError('Target is not a typed array constructor');
  },
  gn = function(e, t, n) {
    if (l) {
      if (n)
        for (var r in vn) {
          var o = s[r];
          o && T(o.prototype, e) && delete o.prototype[e];
        }
      (sn[e] && !n) || ae(sn, e, n ? t : (hn && on[e]) || t);
    }
  },
  bn = qe('species'),
  _n = mn,
  Sn = wn,
  kn = [].slice;
gn(
  'slice',
  function(e, t) {
    for (
      var n = kn.call(_n(this), e, t),
        r = (function(e, t) {
          var n,
            r = C(e).constructor;
          return void 0 === r || null == (n = C(r)[bn]) ? t : et(n);
        })(this, this.constructor),
        o = 0,
        i = n.length,
        a = new (Sn(r))(i);
      i > o;

    )
      a[o] = n[o++];
    return a;
  },
  f(function() {
    new Int8Array(1).slice();
  })
);
var On = qe('unscopables'),
  Tn = Array.prototype;
null == Tn[On] && D.f(Tn, On, { configurable: !0, value: St(null) });
var jn,
  An = Object.defineProperty,
  In = {},
  En = function(e) {
    throw e;
  },
  xn = we.includes,
  Pn = (function(e, t) {
    if (T(In, e)) return In[e];
    t || (t = {});
    var n = [][e],
      r = !!T(t, 'ACCESSORS') && t.ACCESSORS,
      o = T(t, 0) ? t[0] : En,
      i = T(t, 1) ? t[1] : void 0;
    return (In[e] =
      !!n &&
      !f(function() {
        if (r && !l) return !0;
        var e = { length: -1 };
        r ? An(e, 1, { enumerable: !0, get: En }) : (e[1] = 1), n.call(e, o, i);
      }));
  })('indexOf', { ACCESSORS: !0, 1: 0 });
Re(
  { target: 'Array', proto: !0, forced: !Pn },
  {
    includes: function(e) {
      return xn(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }
),
  (jn = 'includes'),
  (Tn[On][jn] = !0);
rt('Array', 'includes');
Re(
  { target: 'String', proto: !0, forced: !Ge('includes') },
  {
    includes: function(e) {
      return !!~String(b(this)).indexOf(
        Be(e),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }
);
rt('String', 'includes');
function Cn(e) {
  var t = this.constructor;
  return this.then(
    function(n) {
      return t.resolve(e()).then(function() {
        return n;
      });
    },
    function(n) {
      return t.resolve(e()).then(function() {
        return t.reject(n);
      });
    }
  );
}
var Un = setTimeout;
function Dn(e) {
  return Boolean(e && void 0 !== e.length);
}
function Rn() {}
function Ln(e) {
  if (!(this instanceof Ln))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    Nn(e, this);
}
function Fn(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      Ln._immediateFn(function() {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var r;
          try {
            r = n(e._value);
          } catch (e) {
            return void Wn(t.promise, e);
          }
          Mn(t.promise, r);
        } else (1 === e._state ? Mn : Wn)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function Mn(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof Ln) return (e._state = 3), (e._value = t), void zn(e);
      if ('function' == typeof n)
        return void Nn(
          ((r = n),
          (o = t),
          function() {
            r.apply(o, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), zn(e);
  } catch (t) {
    Wn(e, t);
  }
  var r, o;
}
function Wn(e, t) {
  (e._state = 2), (e._value = t), zn(e);
}
function zn(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    Ln._immediateFn(function() {
      e._handled || Ln._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) Fn(e, e._deferreds[t]);
  e._deferreds = null;
}
function qn(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function Nn(e, t) {
  var n = !1;
  try {
    e(
      function(e) {
        n || ((n = !0), Mn(t, e));
      },
      function(e) {
        n || ((n = !0), Wn(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), Wn(t, e);
  }
}
(Ln.prototype.catch = function(e) {
  return this.then(null, e);
}),
  (Ln.prototype.then = function(e, t) {
    var n = new this.constructor(Rn);
    return Fn(this, new qn(e, t, n)), n;
  }),
  (Ln.prototype.finally = Cn),
  (Ln.all = function(e) {
    return new Ln(function(t, n) {
      if (!Dn(e)) return n(new TypeError('Promise.all accepts an array'));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function i(e, a) {
        try {
          if (a && ('object' == typeof a || 'function' == typeof a)) {
            var c = a.then;
            if ('function' == typeof c)
              return void c.call(
                a,
                function(t) {
                  i(e, t);
                },
                n
              );
          }
          (r[e] = a), 0 == --o && t(r);
        } catch (e) {
          n(e);
        }
      }
      for (var a = 0; a < r.length; a++) i(a, r[a]);
    });
  }),
  (Ln.resolve = function(e) {
    return e && 'object' == typeof e && e.constructor === Ln
      ? e
      : new Ln(function(t) {
          t(e);
        });
  }),
  (Ln.reject = function(e) {
    return new Ln(function(t, n) {
      n(e);
    });
  }),
  (Ln.race = function(e) {
    return new Ln(function(t, n) {
      if (!Dn(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var r = 0, o = e.length; r < o; r++) Ln.resolve(e[r]).then(t, n);
    });
  }),
  (Ln._immediateFn =
    ('function' == typeof setImmediate &&
      function(e) {
        setImmediate(e);
      }) ||
    function(e) {
      Un(e, 0);
    }),
  (Ln._unhandledRejectionFn = function(e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var Bn = (function() {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'Promise' in Bn
  ? Bn.Promise.prototype.finally || (Bn.Promise.prototype.finally = Cn)
  : (Bn.Promise = Ln),
  (function(e) {
    function t() {}
    function n(e, t) {
      if (
        ((e = void 0 === e ? 'utf-8' : e),
        (t = void 0 === t ? { fatal: !1 } : t),
        -1 == r.indexOf(e.toLowerCase()))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function(e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            r = 0,
            o = Math.max(32, n + (n >> 1) + 7),
            i = new Uint8Array((o >> 3) << 3);
          t < n;

        ) {
          var a = e.charCodeAt(t++);
          if (55296 <= a && 56319 >= a) {
            if (t < n) {
              var c = e.charCodeAt(t);
              56320 == (64512 & c) &&
                (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= a && 56319 >= a) continue;
          }
          if (
            (r + 4 > i.length &&
              ((o += 8),
              (o = ((o *= 1 + (t / e.length) * 2) >> 3) << 3),
              (c = new Uint8Array(o)).set(i),
              (i = c)),
            0 == (4294967168 & a))
          )
            i[r++] = a;
          else {
            if (0 == (4294965248 & a)) i[r++] = ((a >> 6) & 31) | 192;
            else if (0 == (4294901760 & a))
              (i[r++] = ((a >> 12) & 15) | 224),
                (i[r++] = ((a >> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & a)) continue;
              (i[r++] = ((a >> 18) & 7) | 240),
                (i[r++] = ((a >> 12) & 63) | 128),
                (i[r++] = ((a >> 6) & 63) | 128);
            }
            i[r++] = (63 & a) | 128;
          }
        }
        return i.slice ? i.slice(0, r) : i.subarray(0, r);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 }),
      (n.prototype.decode = function(e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        e.buffer instanceof ArrayBuffer && (e = e.buffer),
          (e = new Uint8Array(e)),
          (t = 0);
        for (var n = [], r = []; ; ) {
          var o = t < e.length;
          if (!o || 65536 & t) {
            if ((r.push(String.fromCharCode.apply(null, n)), !o))
              return r.join('');
            (n = []), (e = e.subarray(t)), (t = 0);
          }
          if (0 === (o = e[t++])) n.push(0);
          else if (0 == (128 & o)) n.push(o);
          else if (192 == (224 & o)) {
            var i = 63 & e[t++];
            n.push(((31 & o) << 6) | i);
          } else if (224 == (240 & o)) {
            i = 63 & e[t++];
            var a = 63 & e[t++];
            n.push(((31 & o) << 12) | (i << 6) | a);
          } else if (240 == (248 & o)) {
            65535 <
              (o =
                ((7 & o) << 18) |
                ((i = 63 & e[t++]) << 12) |
                ((a = 63 & e[t++]) << 6) |
                (63 & e[t++])) &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
              n.push(o);
          }
        }
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : i);
var Jn = c(function(e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function() {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function(t, n) {
          var r = e.locked.get(t);
          void 0 === r
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
        }),
        (this.isLocked = function(t) {
          return e.locked.has(t);
        }),
        (this.lock = function(t) {
          return new Promise(function(n, r) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function(t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var r = n.pop();
            e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function() {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function() {
    return n.getInstance();
  };
});
a(Jn);
var Gn = a(
  c(function(e, t) {
    var n =
        (i && i.__awaiter) ||
        function(e, t, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                u(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              e.done
                ? o(e.value)
                : new n(function(t) {
                    t(e.value);
                  }).then(a, c);
            }
            u((r = r.apply(e, t || [])).next());
          });
        },
      r =
        (i && i.__generator) ||
        function(e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: []
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function() {
                return this;
              }),
            i
          );
          function c(i) {
            return function(c) {
              return (function(i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    function o(e) {
      return new Promise(function(t) {
        return setTimeout(t, e);
      });
    }
    function a(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          r = 0;
        r < e;
        r++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var c = (function() {
      function e() {
        (this.acquiredIatSet = new Set()),
          (this.id = Date.now().toString() + a(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ = this.releaseLock__private__.bind(
            this
          )),
          (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
            this
          )),
          (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
            this
          )),
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function(t, i) {
          return (
            void 0 === i && (i = 5e3),
            n(this, void 0, void 0, function() {
              var n, c, u, s, f, l;
              return r(this, function(r) {
                switch (r.label) {
                  case 0:
                    (n = Date.now() + a(4)),
                      (c = Date.now() + i),
                      (u = 'browser-tabs-lock-key-' + t),
                      (s = window.localStorage),
                      (r.label = 1);
                  case 1:
                    return Date.now() < c ? [4, o(30)] : [3, 8];
                  case 2:
                    return (
                      r.sent(),
                      null !== s.getItem(u)
                        ? [3, 5]
                        : ((f = this.id + '-' + t + '-' + n),
                          [4, o(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      r.sent(),
                      s.setItem(
                        u,
                        JSON.stringify({
                          id: this.id,
                          iat: n,
                          timeoutKey: f,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now()
                        })
                      ),
                      [4, o(30)]
                    );
                  case 4:
                    return (
                      r.sent(),
                      null !== (l = s.getItem(u)) &&
                      (l = JSON.parse(l)).id === this.id &&
                      l.iat === n
                        ? (this.acquiredIatSet.add(n),
                          this.refreshLockWhileAcquired(u, n),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      e.lockCorrector(), [4, this.waitForSomethingToChange(c)]
                    );
                  case 6:
                    r.sent(), (r.label = 7);
                  case 7:
                    return (n = Date.now() + a(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (e.prototype.refreshLockWhileAcquired = function(e, t) {
          return n(this, void 0, void 0, function() {
            var o = this;
            return r(this, function(i) {
              return (
                setTimeout(function() {
                  return n(o, void 0, void 0, function() {
                    var n, o;
                    return r(this, function(r) {
                      switch (r.label) {
                        case 0:
                          return [4, Jn.default().lock(t)];
                        case 1:
                          return (
                            r.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (o = n.getItem(e))
                                  ? (Jn.default().unlock(t), [2])
                                  : (((o = JSON.parse(
                                      o
                                    )).timeRefreshed = Date.now()),
                                    n.setItem(e, JSON.stringify(o)),
                                    Jn.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (Jn.default().unlock(t), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e.prototype.waitForSomethingToChange = function(t) {
          return n(this, void 0, void 0, function() {
            return r(this, function(n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    new Promise(function(n) {
                      var r = !1,
                        o = Date.now(),
                        i = !1;
                      function a() {
                        if (
                          (i ||
                            (window.removeEventListener('storage', a),
                            e.removeFromWaiting(a),
                            clearTimeout(c),
                            (i = !0)),
                          !r)
                        ) {
                          r = !0;
                          var t = 50 - (Date.now() - o);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', a), e.addToWaiting(a);
                      var c = setTimeout(a, Math.max(0, t - Date.now()));
                    })
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function(t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function(t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function(e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function() {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function(e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function(e) {
          return n(this, void 0, void 0, function() {
            return r(this, function(t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function(t) {
          return n(this, void 0, void 0, function() {
            var n, o, i;
            return r(this, function(r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (o = 'browser-tabs-lock-key-' + t),
                    null === (i = n.getItem(o))
                      ? [2]
                      : (i = JSON.parse(i)).id !== this.id
                      ? [3, 2]
                      : [4, Jn.default().lock(i.iat)]
                  );
                case 1:
                  r.sent(),
                    this.acquiredIatSet.delete(i.iat),
                    n.removeItem(o),
                    Jn.default().unlock(i.iat),
                    e.notifyWaiters(),
                    (r.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.lockCorrector = function() {
          for (
            var t = Date.now() - 5e3,
              n = window.localStorage,
              r = Object.keys(n),
              o = !1,
              i = 0;
            i < r.length;
            i++
          ) {
            var a = r[i];
            if (a.includes('browser-tabs-lock-key')) {
              var c = n.getItem(a);
              null !== c &&
                ((void 0 === (c = JSON.parse(c)).timeRefreshed &&
                  c.timeAcquired < t) ||
                  (void 0 !== c.timeRefreshed && c.timeRefreshed < t)) &&
                (n.removeItem(a), (o = !0));
            }
          }
          o && e.notifyWaiters();
        }),
        (e.waiters = void 0),
        e
      );
    })();
    t.default = c;
  })
);
function Hn(e, t) {
  return (
    (t = t || {}),
    new Promise(function(n, r) {
      var o = new XMLHttpRequest(),
        i = [],
        a = [],
        c = {},
        u = function() {
          return {
            ok: 2 == ((o.status / 100) | 0),
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function() {
              return Promise.resolve(o.responseText);
            },
            json: function() {
              return Promise.resolve(JSON.parse(o.responseText));
            },
            blob: function() {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: u,
            headers: {
              keys: function() {
                return i;
              },
              entries: function() {
                return a;
              },
              get: function(e) {
                return c[e.toLowerCase()];
              },
              has: function(e) {
                return e.toLowerCase() in c;
              }
            }
          };
        };
      for (var s in (o.open(t.method || 'get', e, !0),
      (o.onload = function() {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
            i.push((t = t.toLowerCase())),
              a.push([t, n]),
              (c[t] = c[t] ? c[t] + ',' + n : n);
          }),
          n(u());
      }),
      (o.onerror = r),
      (o.withCredentials = 'include' == t.credentials),
      t.headers))
        o.setRequestHeader(s, t.headers[s]);
      o.send(t.body || null);
    })
  );
}
var Yn = {},
  Vn = function(e) {
    return e.filter(function(t, n) {
      return e.indexOf(t) === n;
    });
  },
  Xn = { error: 'timeout', error_description: 'Timeout' },
  Kn = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = e.filter(Boolean).join();
    return Vn(n.replace(/\s/g, ',').split(','))
      .join(' ')
      .trim();
  },
  Qn = function(e, t, n) {
    return (
      void 0 === n && (n = 60),
      new Promise(function(r, o) {
        var i = window.document.createElement('iframe');
        i.setAttribute('width', '0'),
          i.setAttribute('height', '0'),
          (i.style.display = 'none');
        var a = setTimeout(function() {
            o(Xn), window.document.body.removeChild(i);
          }, 1e3 * n),
          c = function(e) {
            e.origin == t &&
              e.data &&
              'authorization_response' === e.data.type &&
              (e.source.close(),
              e.data.response.error ? o(e.data.response) : r(e.data.response),
              clearTimeout(a),
              window.removeEventListener('message', c, !1),
              setTimeout(function() {
                return window.document.body.removeChild(i);
              }, 2e3));
          };
        window.addEventListener('message', c, !1),
          window.document.body.appendChild(i),
          i.setAttribute('src', e);
      })
    );
  },
  Zn = function(e, n) {
    var r,
      o,
      i,
      a = n.popup;
    if (
      (a
        ? (a.location.href = e)
        : ((r = e),
          (o = window.screenX + (window.innerWidth - 400) / 2),
          (i = window.screenY + (window.innerHeight - 600) / 2),
          (a = window.open(
            r,
            'auth0:authorize:popup',
            'left=' +
              o +
              ',top=' +
              i +
              ',width=400,height=600,resizable,scrollbars=yes,status=1'
          ))),
      !a)
    )
      throw new Error('Could not open popup');
    return new Promise(function(e, r) {
      var o = setTimeout(function() {
        r(t(t({}, Xn), { popup: a }));
      }, 1e3 * (n.timeoutInSeconds || 60));
      window.addEventListener('message', function(t) {
        if (t.data && 'authorization_response' === t.data.type) {
          if ((clearTimeout(o), a.close(), t.data.response.error))
            return r(t.data.response);
          e(t.data.response);
        }
      });
    });
  },
  $n = function() {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(cr().getRandomValues(new Uint8Array(43))).forEach(function(n) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  er = function(e) {
    return btoa(e);
  },
  tr = function(e) {
    return Object.keys(e)
      .filter(function(t) {
        return void 0 !== e[t];
      })
      .map(function(t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  nr = function(e) {
    return r(void 0, void 0, void 0, function() {
      var t;
      return o(this, function(n) {
        switch (n.label) {
          case 0:
            return (
              (t = ur().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function(e, n) {
                      (t.oncomplete = function(t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function(e) {
                          n(e.error);
                        }),
                        (t.onabort = function() {
                          n('The digest operation was aborted');
                        });
                    })
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  rr = function(e) {
    return (function(e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function(e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  or = function(e) {
    var t = new Uint8Array(e);
    return (function(e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[\+\/=]/g, function(e) {
        return t[e];
      });
    })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
  },
  ir = function(e, t) {
    return r(void 0, void 0, void 0, function() {
      var r, i, a, c, u, s, f;
      return o(this, function(o) {
        switch (o.label) {
          case 0:
            return [4, Hn(e, t)];
          case 1:
            return [4, (r = o.sent()).json()];
          case 2:
            if (
              ((i = o.sent()),
              (a = i.error),
              (c = i.error_description),
              (u = n(i, ['error', 'error_description'])),
              !r.ok)
            )
              throw ((s = c || 'HTTP error. Unable to fetch ' + e),
              ((f = new Error(s)).error = a || 'request_error'),
              (f.error_description = s),
              f);
            return [2, u];
        }
      });
    });
  },
  ar = function(e) {
    return r(void 0, void 0, void 0, function() {
      var r = e.baseUrl,
        i = n(e, ['baseUrl']);
      return o(this, function(e) {
        switch (e.label) {
          case 0:
            return [
              4,
              ir(r + '/oauth/token', {
                method: 'POST',
                body: JSON.stringify(
                  t(
                    {
                      grant_type: 'authorization_code',
                      redirect_uri: window.location.origin
                    },
                    i
                  )
                ),
                headers: { 'Content-type': 'application/json' }
              })
            ];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  },
  cr = function() {
    return window.crypto || window.msCrypto;
  },
  ur = function() {
    var e = cr();
    return e.subtle || e.webkitSubtle;
  },
  sr = function(e) {
    return e.audience + '::' + e.scope;
  },
  fr = (function() {
    function e() {
      this.cache = {};
    }
    return (
      (e.prototype.save = function(e) {
        var t = this,
          n = sr(e);
        this.cache[n] = e;
        var r,
          o,
          i,
          a =
            ((r = e.expires_in),
            (o = e.decodedToken.claims.exp),
            (i = (new Date(1e3 * o).getTime() - new Date().getTime()) / 1e3),
            1e3 * Math.min(r, i) * 0.8);
        setTimeout(function() {
          delete t.cache[n];
        }, a);
      }),
      (e.prototype.get = function(e) {
        return this.cache[sr(e)];
      }),
      e
    );
  })(),
  lr = c(function(e, t) {
    var n =
      (i && i.__assign) ||
      function() {
        return (n =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function r(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function o(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function(e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            r('Expires', e.expires ? e.expires.toUTCString() : '') +
            r('Domain', e.domain) +
            r('Path', e.path) +
            r('Secure', e.secure) +
            r('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function a(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], r = /(%[\dA-F]{2})+/gi, o = 0;
        o < n.length;
        o++
      ) {
        var i = n[o].split('='),
          a = i.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[i[0].replace(r, decodeURIComponent)] = a.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function c() {
      return a(document.cookie);
    }
    function u(e, t, r) {
      document.cookie = o(e, t, n({ path: '/' }, r));
    }
    (t.__esModule = !0),
      (t.encode = o),
      (t.parse = a),
      (t.getAll = c),
      (t.get = function(e) {
        return c()[e];
      }),
      (t.set = u),
      (t.remove = function(e, t) {
        u(e, '', n(n({}, t), { expires: -1 }));
      });
  });
a(lr);
lr.encode, lr.parse;
var dr = lr.getAll,
  pr = lr.get,
  hr = lr.set,
  vr = lr.remove,
  yr = function(e) {
    var t = pr(e);
    if (void 0 !== t) return JSON.parse(t);
  },
  mr = function(e, t, n) {
    hr(e, JSON.stringify(t), { expires: n.daysUntilExpire });
  },
  wr = function(e) {
    vr(e);
  },
  gr = function(e) {
    return 'a0.spajs.txs.' + e;
  },
  br = (function() {
    function e() {
      var e = this;
      (this.transactions = {}),
        Object.keys(dr() || {})
          .filter(function(e) {
            return e.startsWith('a0.spajs.txs.');
          })
          .forEach(function(t) {
            var n = t.replace('a0.spajs.txs.', '');
            e.transactions[n] = yr(t);
          });
    }
    return (
      (e.prototype.create = function(e, t) {
        (this.transactions[e] = t), mr(gr(e), t, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function(e) {
        return this.transactions[e];
      }),
      (e.prototype.remove = function(e) {
        delete this.transactions[e], wr(gr(e));
      }),
      e
    );
  })(),
  _r = function(e) {
    return 'number' == typeof e;
  },
  Sr = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm'
  ],
  kr = function(e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function(e) {
      var t = e.split('.'),
        n = t[0],
        r = t[1],
        o = t[2];
      if (3 !== t.length || !n || !r || !o)
        throw new Error('ID token could not be decoded');
      var i = JSON.parse(rr(r)),
        a = { __raw: e },
        c = {};
      return (
        Object.keys(i).forEach(function(e) {
          (a[e] = i[e]), Sr.includes(e) || (c[e] = i[e]);
        }),
        {
          encoded: { header: n, payload: r, signature: o },
          header: JSON.parse(rr(n)),
          claims: a,
          user: c
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "' +
          e.iss +
          '", found "' +
          t.claims.iss +
          '"'
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "' +
          t.header.alg +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but was not one of "' +
            t.claims.aud.join(', ') +
            '"'
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              e.aud +
              '", found "' +
              t.claims.azp +
              '"'
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          e.aud +
          '" but found "' +
          t.claims.aud +
          '"'
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "' +
            e.nonce +
            '", found "' +
            t.claims.nonce +
            '"'
        );
    }
    if (e.max_age && !_r(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!_r(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!_r(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      r = new Date(),
      o = new Date(0),
      i = new Date(0),
      a = new Date(0);
    if (
      (a.setUTCSeconds((parseInt(t.claims.auth_time) + e.max_age) / 1e3 + n),
      o.setUTCSeconds(t.claims.exp + n),
      i.setUTCSeconds(t.claims.nbf - n),
      r > o)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time (' +
          r +
          ') is after expiration time (' +
          o +
          ')'
      );
    if (_r(t.claims.nbf) && r < i)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          r +
          ') is before ' +
          i
      );
    if (_r(t.claims.auth_time) && r > a)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          r +
          ') is after last auth at ' +
          a
      );
    return t;
  },
  Or = (function(t) {
    function n(e, r, o, i) {
      void 0 === i && (i = null);
      var a = t.call(this, r) || this;
      return (
        (a.error = e),
        (a.error_description = r),
        (a.state = o),
        (a.appState = i),
        Object.setPrototypeOf(a, n.prototype),
        a
      );
    }
    return (
      (function(t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      })(n, t),
      n
    );
  })(Error),
  Tr = new Gn(),
  jr = (function() {
    function e(e) {
      (this.options = e),
        (function() {
          if (!cr())
            throw new Error(
              'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
            );
          if (void 0 === ur())
            throw new Error(
              '\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    '
            );
        })(),
        (this.defaultScope =
          this.options.advancedOptions &&
          this.options.advancedOptions.defaultScope
            ? this.options.advancedOptions.defaultScope
            : 'openid profile email'),
        (this.cache = new fr()),
        (this.transactionManager = new br()),
        (this.domainUrl = 'https://' + this.options.domain),
        (this.tokenIssuer = this.options.issuer
          ? 'https://' + this.options.issuer + '/'
          : this.domainUrl + '/');
    }
    return (
      Object.defineProperty(e.prototype, '_defaultScope', {
        get: function() {
          return this.defaultScope;
        },
        enumerable: !0,
        configurable: !0
      }),
      (e.prototype._url = function(e) {
        var t = encodeURIComponent(
          btoa(JSON.stringify({ name: 'auth0-spa-js', version: '1.6.4' }))
        );
        return '' + this.domainUrl + e + '&auth0Client=' + t;
      }),
      (e.prototype._getParams = function(e, r, o, i, a) {
        var c = this.options,
          u = (c.domain, c.leeway, n(c, ['domain', 'leeway']));
        return t(t(t({}, u), e), {
          scope: Kn(this.defaultScope, this.options.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: r,
          nonce: o,
          redirect_uri: a || this.options.redirect_uri,
          code_challenge: i,
          code_challenge_method: 'S256'
        });
      }),
      (e.prototype._authorizeUrl = function(e) {
        return this._url('/authorize?' + tr(e));
      }),
      (e.prototype._verifyIdToken = function(e, t) {
        return kr({
          iss: this.tokenIssuer,
          aud: this.options.client_id,
          id_token: e,
          nonce: t,
          leeway: this.options.leeway,
          max_age: this._parseNumber(this.options.max_age)
        });
      }),
      (e.prototype._parseNumber = function(e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype.buildAuthorizeUrl = function(e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function() {
            var t, r, i, a, c, u, s, f, l, d, p;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (r = e.appState),
                    (i = n(e, ['redirect_uri', 'appState'])),
                    (a = er($n())),
                    (c = $n()),
                    (u = $n()),
                    [4, nr(u)]
                  );
                case 1:
                  return (
                    (s = o.sent()),
                    (f = or(s)),
                    (l = e.fragment ? '#' + e.fragment : ''),
                    (d = this._getParams(i, a, c, f, t)),
                    (p = this._authorizeUrl(d)),
                    this.transactionManager.create(a, {
                      nonce: c,
                      code_verifier: u,
                      appState: r,
                      scope: d.scope,
                      audience: d.audience || 'default',
                      redirect_uri: d.redirect_uri
                    }),
                    console.log('url+fragment @ location', p + l),
                    [2, p + l]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function(e, i) {
        return (
          void 0 === e && (e = {}),
          void 0 === i && (i = Yn),
          r(this, void 0, void 0, function() {
            var r, a, c, u, s, f, l, d, p, h, v, y;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  return (
                    (r = n(e, [])),
                    (a = er($n())),
                    (c = $n()),
                    (u = $n()),
                    [4, nr(u)]
                  );
                case 1:
                  return (
                    (s = o.sent()),
                    (f = or(s)),
                    (l = this._getParams(
                      r,
                      a,
                      c,
                      f,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (d = this._authorizeUrl(
                      t(t({}, l), { response_mode: 'web_message' })
                    )),
                    console.log(d),
                    [
                      4,
                      Zn(
                        d,
                        t(t({}, i), {
                          timeoutInSeconds:
                            i.timeoutInSeconds ||
                            this.options.authorizeTimeoutInSeconds
                        })
                      )
                    ]
                  );
                case 2:
                  if (((p = o.sent()), a !== p.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    ar({
                      baseUrl: this.domainUrl,
                      audience: e.audience || this.options.audience,
                      client_id: this.options.client_id,
                      code_verifier: u,
                      code: p.code,
                      redirect_uri: l.redirect_uri
                    })
                  ];
                case 3:
                  return (
                    (h = o.sent()),
                    (v = this._verifyIdToken(h.id_token, c)),
                    (y = t(t({}, h), {
                      decodedToken: v,
                      scope: l.scope,
                      audience: l.audience || 'default'
                    })),
                    this.cache.save(y),
                    mr('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getUser = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience || 'default',
              scope: this.options.scope || this.defaultScope
            }),
          r(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
              return (
                (e.scope = Kn(this.defaultScope, e.scope)),
                [2, (t = this.cache.get(e)) && t.decodedToken.user]
              );
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience || 'default',
              scope: this.options.scope || this.defaultScope
            }),
          r(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
              return (
                (e.scope = Kn(this.defaultScope, e.scope)),
                [2, (t = this.cache.get(e)) && t.decodedToken.claims]
              );
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function(e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function() {
            var t;
            return o(this, function(n) {
              switch (n.label) {
                case 0:
                  return [4, this.buildAuthorizeUrl(e)];
                case 1:
                  return (t = n.sent()), window.location.assign(t), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function(e) {
        return (
          void 0 === e && (e = window.location.href),
          r(this, void 0, void 0, function() {
            var n, r, i, a, c, u, s, f, l, d;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  if (0 === (n = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((r = (function(e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var n = e.split('&'),
                        r = {};
                      return (
                        n.forEach(function(e) {
                          var t = e.split('='),
                            n = t[0],
                            o = t[1];
                          r[n] = decodeURIComponent(o);
                        }),
                        t(t({}, r), { expires_in: parseInt(r.expires_in) })
                      );
                    })(n.join(''))),
                    (i = r.state),
                    (a = r.code),
                    (c = r.error),
                    (u = r.error_description),
                    !(s = this.transactionManager.get(i)))
                  )
                    throw new Error('Invalid state');
                  if (c)
                    throw (this.transactionManager.remove(i),
                    new Or(c, u, i, s.appState));
                  return (
                    this.transactionManager.remove(i),
                    [
                      4,
                      ar({
                        baseUrl: this.domainUrl,
                        audience: this.options.audience,
                        client_id: this.options.client_id,
                        code_verifier: s.code_verifier,
                        code: a,
                        redirect_uri: s.redirect_uri
                      })
                    ]
                  );
                case 1:
                  return (
                    (f = o.sent()),
                    (l = this._verifyIdToken(f.id_token, s.nonce)),
                    (d = t(t({}, f), {
                      decodedToken: l,
                      audience: s.audience,
                      scope: s.scope
                    })),
                    this.cache.save(d),
                    mr('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2, { appState: s.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.getTokenSilently = function(e) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.defaultScope,
              ignoreCache: !1
            }),
          r(this, void 0, void 0, function() {
            var r, i, a, c, u, s, f, l, d, p, h, v, y, m, w, g, b, _;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  (e.scope = Kn(this.defaultScope, e.scope)), (o.label = 1);
                case 1:
                  return (
                    o.trys.push([1, 6, 7, 9]),
                    (r = e.audience),
                    (i = e.scope),
                    (a = e.ignoreCache),
                    (c = e.timeoutInSeconds),
                    (u = n(e, [
                      'audience',
                      'scope',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    !a &&
                    (s = this.cache.get({ scope: i, audience: r || 'default' }))
                      ? [2, s.access_token]
                      : [4, Tr.acquireLock('auth0.lock.getTokenSilently', 5e3)]
                  );
                case 2:
                  return (
                    o.sent(), (f = er($n())), (l = $n()), (d = $n()), [4, nr(d)]
                  );
                case 3:
                  return (
                    (p = o.sent()),
                    (h = or(p)),
                    (v = t({ audience: r, scope: i }, u)),
                    (y = this._getParams(
                      v,
                      f,
                      l,
                      h,
                      this.options.redirect_uri || window.location.origin
                    )),
                    (m = this._authorizeUrl(
                      t(t({}, y), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    [
                      4,
                      Qn(
                        m,
                        this.domainUrl,
                        c || this.options.authorizeTimeoutInSeconds
                      )
                    ]
                  );
                case 4:
                  if (((w = o.sent()), f !== w.state))
                    throw new Error('Invalid state');
                  return [
                    4,
                    ar({
                      baseUrl: this.domainUrl,
                      audience: e.audience || this.options.audience,
                      client_id: this.options.client_id,
                      code_verifier: d,
                      code: w.code,
                      redirect_uri: y.redirect_uri
                    })
                  ];
                case 5:
                  return (
                    (g = o.sent()),
                    (b = this._verifyIdToken(g.id_token, l)),
                    (_ = t(t({}, g), {
                      decodedToken: b,
                      scope: y.scope,
                      audience: y.audience || 'default'
                    })),
                    this.cache.save(_),
                    mr('auth0.is.authenticated', !0, { daysUntilExpire: 1 }),
                    [2, g.access_token]
                  );
                case 6:
                  throw o.sent();
                case 7:
                  return [4, Tr.releaseLock('auth0.lock.getTokenSilently')];
                case 8:
                  return o.sent(), [7];
                case 9:
                  return [2];
              }
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function(e, t) {
        return (
          void 0 === e &&
            (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.defaultScope
            }),
          void 0 === t && (t = Yn),
          r(this, void 0, void 0, function() {
            return o(this, function(n) {
              switch (n.label) {
                case 0:
                  return (
                    (e.scope = Kn(
                      this.defaultScope,
                      this.options.scope,
                      e.scope
                    )),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    n.sent(),
                    [
                      2,
                      this.cache.get({
                        scope: e.scope,
                        audience: e.audience || 'default'
                      }).access_token
                    ]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function() {
        return r(this, void 0, void 0, function() {
          return o(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.logout = function(e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id;
        var t = e.federated,
          r = e.localOnly,
          o = n(e, ['federated', 'localOnly']);
        if (r && t)
          throw new Error(
            'It is invalid to set both the `federated` and `localOnly` options to `true`'
          );
        if ((wr('auth0.is.authenticated'), !r)) {
          var i = t ? '&federated' : '',
            a = this._url('/v2/logout?' + tr(o));
          window.location.assign('' + a + i);
        }
      }),
      e
    );
  })();
export default function(e) {
  return r(this, void 0, void 0, function() {
    var t, n;
    return o(this, function(r) {
      switch (r.label) {
        case 0:
          if (((t = new jr(e)), !yr('auth0.is.authenticated'))) return [2, t];
          r.label = 1;
        case 1:
          return (
            r.trys.push([1, 3, , 4]),
            [
              4,
              t.getTokenSilently({
                audience: e.audience,
                scope: e.scope,
                ignoreCache: !0
              })
            ]
          );
        case 2:
          return r.sent(), [3, 4];
        case 3:
          if ('login_required' !== (n = r.sent()).error) throw n;
          return [3, 4];
        case 4:
          return [2, t];
      }
    });
  });
}
export { jr as Auth0Client };
//# sourceMappingURL=auth0-spa-js.production.esm.js.map
