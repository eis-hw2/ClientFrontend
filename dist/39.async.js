(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [39],
  {
    EVdn: function(an, sn, e) {
      var un, ln;
      (function(e, t) {
        'use strict';
        'object' === typeof an.exports
          ? (an.exports = e.document
              ? t(e, !0)
              : function(e) {
                  if (!e.document) throw new Error('jQuery requires a window with a document');
                  return t(e);
                })
          : t(e);
      })('undefined' !== typeof window ? window : this, function(C, e) {
        'use strict';
        var t = [],
          E = C.document,
          r = Object.getPrototypeOf,
          s = t.slice,
          g = t.concat,
          u = t.push,
          i = t.indexOf,
          n = {},
          o = n.toString,
          m = n.hasOwnProperty,
          a = m.toString,
          l = a.call(Object),
          v = {},
          y = function(e) {
            return 'function' === typeof e && 'number' !== typeof e.nodeType;
          },
          x = function(e) {
            return null != e && e === e.window;
          },
          c = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function b(e, t, n) {
          n = n || E;
          var r,
            i,
            o = n.createElement('script');
          if (((o.text = e), t))
            for (r in c)
              (i = t[r] || (t.getAttribute && t.getAttribute(r))), i && o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function w(e) {
          return null == e
            ? e + ''
            : 'object' === typeof e || 'function' === typeof e
            ? n[o.call(e)] || 'object'
            : typeof e;
        }
        var f = '3.4.1',
          k = function(e, t) {
            return new k.fn.init(e, t);
          },
          p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function d(e) {
          var t = !!e && 'length' in e && e.length,
            n = w(e);
          return (
            !y(e) &&
            !x(e) &&
            ('array' === n || 0 === t || ('number' === typeof t && t > 0 && t - 1 in e))
          );
        }
        (k.fn = k.prototype = {
          jquery: f,
          constructor: k,
          length: 0,
          toArray: function() {
            return s.call(this);
          },
          get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function(e) {
            return k.each(this, e);
          },
          map: function(n) {
            return this.pushStack(
              k.map(this, function(e, t) {
                return n.call(e, t, e);
              })
            );
          },
          slice: function() {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          eq: function(e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push: u,
          sort: t.sort,
          splice: t.splice,
        }),
          (k.extend = k.fn.extend = function() {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
            for (
              'boolean' === typeof a && ((l = a), (a = arguments[s] || {}), s++),
                'object' === typeof a || y(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    '__proto__' !== t &&
                      a !== r &&
                      (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}),
                          (i = !1),
                          (a[t] = k.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
          k.extend({
            expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(e) {
              throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
              var t, n;
              return (
                !(!e || '[object Object]' !== o.call(e)) &&
                ((t = r(e)),
                !t ||
                  ((n = m.call(t, 'constructor') && t.constructor),
                  'function' === typeof n && a.call(n) === l))
              );
            },
            isEmptyObject: function(e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function(e, t) {
              b(e, { nonce: t && t.nonce });
            },
            each: function(e, t) {
              var n,
                r = 0;
              if (d(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
              } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            trim: function(e) {
              return null == e ? '' : (e + '').replace(p, '');
            },
            makeArray: function(e, t) {
              var n = t || [];
              return (
                null != e &&
                  (d(Object(e)) ? k.merge(n, 'string' === typeof e ? [e] : e) : u.call(n, e)),
                n
              );
            },
            inArray: function(e, t, n) {
              return null == t ? -1 : i.call(t, e, n);
            },
            merge: function(e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function(e, t, n) {
              for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)), r !== s && i.push(e[o]);
              return i;
            },
            map: function(e, t, n) {
              var r,
                i,
                o = 0,
                a = [];
              if (d(e)) for (r = e.length; o < r; o++) (i = t(e[o], o, n)), null != i && a.push(i);
              else for (o in e) (i = t(e[o], o, n)), null != i && a.push(i);
              return g.apply([], a);
            },
            guid: 1,
            support: v,
          }),
          'function' === typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
          k.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
            function(e, t) {
              n['[object ' + t + ']'] = t.toLowerCase();
            }
          );
        var h = (function(n) {
          var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            m,
            s,
            c,
            v,
            k = 'sizzle' + 1 * new Date(),
            y = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
              return e === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            q = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            R =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            M = '[\\x20\\t\\r\\n\\f]',
            I = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            W =
              '\\[' +
              M +
              '*(' +
              I +
              ')(?:' +
              M +
              '*([*^$|!~]?=)' +
              M +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              I +
              '))|)' +
              M +
              '*\\]',
            F =
              ':(' +
              I +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              W +
              ')*)|.*)\\)|)',
            $ = new RegExp(M + '+', 'g'),
            B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
            _ = new RegExp('^' + M + '*,' + M + '*'),
            z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
            U = new RegExp(M + '|>'),
            V = new RegExp(F),
            X = new RegExp('^' + I + '$'),
            G = {
              ID: new RegExp('^#(' + I + ')'),
              CLASS: new RegExp('^\\.(' + I + ')'),
              TAG: new RegExp('^(' + I + '|[*])'),
              ATTR: new RegExp('^' + W),
              PSEUDO: new RegExp('^' + F),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  M +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  M +
                  '*(?:([+-]|)' +
                  M +
                  '*(\\d+)|))' +
                  M +
                  '*\\)|)',
                'i'
              ),
              bool: new RegExp('^(?:' + R + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  M +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  M +
                  '*((?:-\\d)?\\d*)' +
                  M +
                  '*\\)|)(?=[^-]|$)',
                'i'
              ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
            ne = function(e, t, n) {
              var r = '0x' + t - 65536;
              return r !== r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
              return t
                ? '\0' === e
                  ? '\ufffd'
                  : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
                : '\\' + e;
            },
            oe = function() {
              T();
            },
            ae = be(
              function(e) {
                return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
              },
              { dir: 'parentNode', next: 'legend' }
            );
          try {
            H.apply((t = O.call(y.childNodes)), y.childNodes), t[y.childNodes.length].nodeType;
          } catch (e) {
            H = {
              apply: t.length
                ? function(e, t) {
                    q.apply(e, O.call(t));
                  }
                : function(e, t) {
                    var n = e.length,
                      r = 0;
                    while ((e[n++] = t[r++]));
                    e.length = n - 1;
                  },
            };
          }
          function se(t, e, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = e && e.ownerDocument,
              p = e ? e.nodeType : 9;
            if (((n = n || []), 'string' !== typeof t || !t || (1 !== p && 9 !== p && 11 !== p)))
              return n;
            if (!r && ((e ? e.ownerDocument || e : y) !== C && T(e), (e = e || C), E)) {
              if (11 !== p && (u = Z.exec(t)))
                if ((i = u[1])) {
                  if (9 === p) {
                    if (!(a = e.getElementById(i))) return n;
                    if (a.id === i) return n.push(a), n;
                  } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
                    return n.push(a), n;
                } else {
                  if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                  if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                    return H.apply(n, e.getElementsByClassName(i)), n;
                }
              if (
                d.qsa &&
                !N[t + ' '] &&
                (!m || !m.test(t)) &&
                (1 !== p || 'object' !== e.nodeName.toLowerCase())
              ) {
                if (((c = t), (f = e), 1 === p && U.test(t))) {
                  (s = e.getAttribute('id'))
                    ? (s = s.replace(re, ie))
                    : e.setAttribute('id', (s = k)),
                    (l = h(t)),
                    (o = l.length);
                  while (o--) l[o] = '#' + s + ' ' + xe(l[o]);
                  (c = l.join(',')), (f = (ee.test(t) && ve(e.parentNode)) || e);
                }
                try {
                  return H.apply(n, f.querySelectorAll(c)), n;
                } catch (e) {
                  N(t, !0);
                } finally {
                  s === k && e.removeAttribute('id');
                }
              }
            }
            return g(t.replace(B, '$1'), e, n, r);
          }
          function ue() {
            var n = [];
            function r(e, t) {
              return n.push(e + ' ') > b.cacheLength && delete r[n.shift()], (r[e + ' '] = t);
            }
            return r;
          }
          function le(e) {
            return (e[k] = !0), e;
          }
          function ce(e) {
            var t = C.createElement('fieldset');
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            var n = e.split('|'),
              r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(n) {
            return function(e) {
              var t = e.nodeName.toLowerCase();
              return 'input' === t && e.type === n;
            };
          }
          function he(n) {
            return function(e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t || 'button' === t) && e.type === n;
            };
          }
          function ge(t) {
            return function(e) {
              return 'form' in e
                ? e.parentNode && !1 === e.disabled
                  ? 'label' in e
                    ? 'label' in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                  : e.disabled === t
                : 'label' in e && e.disabled === t;
            };
          }
          function me(a) {
            return le(function(o) {
              return (
                (o = +o),
                le(function(e, t) {
                  var n,
                    r = a([], e.length, o),
                    i = r.length;
                  while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                })
              );
            });
          }
          function ve(e) {
            return e && 'undefined' !== typeof e.getElementsByTagName && e;
          }
          for (e in ((d = se.support = {}),
          (i = se.isXML = function(e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || 'HTML');
          }),
          (T = se.setDocument = function(e) {
            var t,
              n,
              r = e ? e.ownerDocument || e : y;
            return (
              r !== C &&
                9 === r.nodeType &&
                r.documentElement &&
                ((C = r),
                (a = C.documentElement),
                (E = !i(C)),
                y !== C &&
                  (n = C.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener('unload', oe, !1)
                    : n.attachEvent && n.attachEvent('onunload', oe)),
                (d.attributes = ce(function(e) {
                  return (e.className = 'i'), !e.getAttribute('className');
                })),
                (d.getElementsByTagName = ce(function(e) {
                  return e.appendChild(C.createComment('')), !e.getElementsByTagName('*').length;
                })),
                (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                (d.getById = ce(function(e) {
                  return (
                    (a.appendChild(e).id = k),
                    !C.getElementsByName || !C.getElementsByName(k).length
                  );
                })),
                d.getById
                  ? ((b.filter['ID'] = function(e) {
                      var t = e.replace(te, ne);
                      return function(e) {
                        return e.getAttribute('id') === t;
                      };
                    }),
                    (b.find['ID'] = function(e, t) {
                      if ('undefined' !== typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((b.filter['ID'] = function(e) {
                      var n = e.replace(te, ne);
                      return function(e) {
                        var t =
                          'undefined' !== typeof e.getAttributeNode && e.getAttributeNode('id');
                        return t && t.value === n;
                      };
                    }),
                    (b.find['ID'] = function(e, t) {
                      if ('undefined' !== typeof t.getElementById && E) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if (((n = o.getAttributeNode('id')), n && n.value === e)) return [o];
                          (i = t.getElementsByName(e)), (r = 0);
                          while ((o = i[r++]))
                            if (((n = o.getAttributeNode('id')), n && n.value === e)) return [o];
                        }
                        return [];
                      }
                    })),
                (b.find['TAG'] = d.getElementsByTagName
                  ? function(e, t) {
                      return 'undefined' !== typeof t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : d.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function(e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ('*' !== e) return o;
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }),
                (b.find['CLASS'] =
                  d.getElementsByClassName &&
                  function(e, t) {
                    if ('undefined' !== typeof t.getElementsByClassName && E)
                      return t.getElementsByClassName(e);
                  }),
                (s = []),
                (m = []),
                (d.qsa = K.test(C.querySelectorAll)) &&
                  (ce(function(e) {
                    (a.appendChild(e).innerHTML =
                      "<a id='" +
                      k +
                      "'></a><select id='" +
                      k +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push('[*^$]=' + M + '*(?:\'\'|"")'),
                      e.querySelectorAll('[selected]').length ||
                        m.push('\\[' + M + '*(?:value|' + R + ')'),
                      e.querySelectorAll('[id~=' + k + '-]').length || m.push('~='),
                      e.querySelectorAll(':checked').length || m.push(':checked'),
                      e.querySelectorAll('a#' + k + '+*').length || m.push('.#.+[+~]');
                  }),
                  ce(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement('input');
                    t.setAttribute('type', 'hidden'),
                      e.appendChild(t).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length && m.push('name' + M + '*[*^$|!~]?='),
                      2 !== e.querySelectorAll(':enabled').length &&
                        m.push(':enabled', ':disabled'),
                      (a.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(':disabled').length &&
                        m.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      m.push(',.*:');
                  })),
                (d.matchesSelector = K.test(
                  (c =
                    a.matches ||
                    a.webkitMatchesSelector ||
                    a.mozMatchesSelector ||
                    a.oMatchesSelector ||
                    a.msMatchesSelector)
                )) &&
                  ce(function(e) {
                    (d.disconnectedMatch = c.call(e, '*')), c.call(e, "[s!='']:x"), s.push('!=', F);
                  }),
                (m = m.length && new RegExp(m.join('|'))),
                (s = s.length && new RegExp(s.join('|'))),
                (t = K.test(a.compareDocumentPosition)),
                (v =
                  t || K.test(a.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t) while ((t = t.parentNode)) if (t === e) return !0;
                        return !1;
                      }),
                (D = t
                  ? function(e, t) {
                      if (e === t) return (l = !0), 0;
                      var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        n ||
                        ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n || (!d.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === C || (e.ownerDocument === y && v(y, e))
                            ? -1
                            : t === C || (t.ownerDocument === y && v(y, t))
                            ? 1
                            : u
                            ? P(u, e) - P(u, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (l = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!i || !o)
                        return e === C
                          ? -1
                          : t === C
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0;
                      if (i === o) return pe(e, t);
                      n = e;
                      while ((n = n.parentNode)) a.unshift(n);
                      n = t;
                      while ((n = n.parentNode)) s.unshift(n);
                      while (a[r] === s[r]) r++;
                      return r ? pe(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0;
                    })),
              C
            );
          }),
          (se.matches = function(e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== C && T(e),
              d.matchesSelector && E && !N[t + ' '] && (!s || !s.test(t)) && (!m || !m.test(t)))
            )
              try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType))
                  return n;
              } catch (e) {
                N(t, !0);
              }
            return se(t, C, null, [e]).length > 0;
          }),
          (se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e), v(e, t);
          }),
          (se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
              r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r
              ? r
              : d.attributes || !E
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (se.escape = function(e) {
            return (e + '').replace(re, ie);
          }),
          (se.error = function(e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
          }),
          (se.uniqueSort = function(e) {
            var t,
              n = [],
              r = 0,
              i = 0;
            if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(D), l)) {
              while ((t = e[i++])) t === e[i] && (r = n.push(i));
              while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
          }),
          (o = se.getText = function(e) {
            var t,
              n = '',
              r = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ('string' === typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else while ((t = e[r++])) n += o(t);
            return n;
          }),
          (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                  '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  'nth' === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ('even' === e[3] || 'odd' === e[3]))),
                      (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return G['CHILD'].test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : n &&
                        V.test(n) &&
                        (t = h(n, !0)) &&
                        (t = n.indexOf(')', n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(te, ne).toLowerCase();
                return '*' === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = p[e + ' '];
                return (
                  t ||
                  ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                    p(e, function(e) {
                      return t.test(
                        ('string' === typeof e.className && e.className) ||
                          ('undefined' !== typeof e.getAttribute && e.getAttribute('class')) ||
                          ''
                      );
                    }))
                );
              },
              ATTR: function(n, r, i) {
                return function(e) {
                  var t = se.attr(e, n);
                  return null == t
                    ? '!=' === r
                    : !r ||
                        ((t += ''),
                        '=' === r
                          ? t === i
                          : '!=' === r
                          ? t !== i
                          : '^=' === r
                          ? i && 0 === t.indexOf(i)
                          : '*=' === r
                          ? i && t.indexOf(i) > -1
                          : '$=' === r
                          ? i && t.slice(-i.length) === i
                          : '~=' === r
                          ? (' ' + t.replace($, ' ') + ' ').indexOf(i) > -1
                          : '|=' === r && (t === i || t.slice(0, i.length + 1) === i + '-'));
                };
              },
              CHILD: function(h, e, t, g, m) {
                var v = 'nth' !== h.slice(0, 3),
                  y = 'last' !== h.slice(-4),
                  x = 'of-type' === e;
                return 1 === g && 0 === m
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(e, t, n) {
                      var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = v !== y ? 'nextSibling' : 'previousSibling',
                        c = e.parentNode,
                        f = x && e.nodeName.toLowerCase(),
                        p = !n && !x,
                        d = !1;
                      if (c) {
                        if (v) {
                          while (l) {
                            a = e;
                            while ((a = a[l]))
                              if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                            u = l = 'only' === h && !u && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((u = [y ? c.firstChild : c.lastChild]), y && p)) {
                          (a = c),
                            (o = a[k] || (a[k] = {})),
                            (i = o[a.uniqueID] || (o[a.uniqueID] = {})),
                            (r = i[h] || []),
                            (s = r[0] === S && r[1]),
                            (d = s && r[2]),
                            (a = s && c.childNodes[s]);
                          while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                            if (1 === a.nodeType && ++d && a === e) {
                              i[h] = [S, s, d];
                              break;
                            }
                        } else if (
                          (p &&
                            ((a = e),
                            (o = a[k] || (a[k] = {})),
                            (i = o[a.uniqueID] || (o[a.uniqueID] = {})),
                            (r = i[h] || []),
                            (s = r[0] === S && r[1]),
                            (d = s)),
                          !1 === d)
                        )
                          while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                            if (
                              (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) &&
                              ++d &&
                              (p &&
                                ((o = a[k] || (a[k] = {})),
                                (i = o[a.uniqueID] || (o[a.uniqueID] = {})),
                                (i[h] = [S, d])),
                              a === e)
                            )
                              break;
                        return (d -= m), d === g || (d % g === 0 && d / g >= 0);
                      }
                    };
              },
              PSEUDO: function(e, o) {
                var t,
                  a =
                    b.pseudos[e] ||
                    b.setFilters[e.toLowerCase()] ||
                    se.error('unsupported pseudo: ' + e);
                return a[k]
                  ? a(o)
                  : a.length > 1
                  ? ((t = [e, e, '', o]),
                    b.setFilters.hasOwnProperty(e.toLowerCase())
                      ? le(function(e, t) {
                          var n,
                            r = a(e, o),
                            i = r.length;
                          while (i--) (n = P(e, r[i])), (e[n] = !(t[n] = r[i]));
                        })
                      : function(e) {
                          return a(e, 0, t);
                        })
                  : a;
              },
            },
            pseudos: {
              not: le(function(e) {
                var r = [],
                  i = [],
                  s = f(e.replace(B, '$1'));
                return s[k]
                  ? le(function(e, t, n, r) {
                      var i,
                        o = s(e, null, r, []),
                        a = e.length;
                      while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                    })
                  : function(e, t, n) {
                      return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                    };
              }),
              has: le(function(t) {
                return function(e) {
                  return se(t, e).length > 0;
                };
              }),
              contains: le(function(t) {
                return (
                  (t = t.replace(te, ne)),
                  function(e) {
                    return (e.textContent || o(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: le(function(n) {
                return (
                  X.test(n || '') || se.error('unsupported lang: ' + n),
                  (n = n.replace(te, ne).toLowerCase()),
                  function(e) {
                    var t;
                    do {
                      if ((t = E ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')))
                        return (t = t.toLowerCase()), t === n || 0 === t.indexOf(n + '-');
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function(e) {
                return e === a;
              },
              focus: function(e) {
                return (
                  e === C.activeElement &&
                  (!C.hasFocus || C.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
              },
              selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !b.pseudos['empty'](e);
              },
              header: function(e) {
                return J.test(e.nodeName);
              },
              input: function(e) {
                return Q.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t && 'button' === e.type) || 'button' === t;
              },
              text: function(e) {
                var t;
                return (
                  'input' === e.nodeName.toLowerCase() &&
                  'text' === e.type &&
                  (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                );
              },
              first: me(function() {
                return [0];
              }),
              last: me(function(e, t) {
                return [t - 1];
              }),
              eq: me(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: me(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: me(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: me(function(e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: me(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }),
          (b.pseudos['nth'] = b.pseudos['eq']),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
          for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
          function ye() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
          }
          function be(s, e, t) {
            var u = e.dir,
              l = e.next,
              c = l || u,
              f = t && 'parentNode' === c,
              p = r++;
            return e.first
              ? function(e, t, n) {
                  while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
                  return !1;
                }
              : function(e, t, n) {
                  var r,
                    i,
                    o,
                    a = [S, p];
                  if (n) {
                    while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                  } else
                    while ((e = e[u]))
                      if (1 === e.nodeType || f)
                        if (
                          ((o = e[k] || (e[k] = {})),
                          (i = o[e.uniqueID] || (o[e.uniqueID] = {})),
                          l && l === e.nodeName.toLowerCase())
                        )
                          e = e[u] || e;
                        else {
                          if ((r = i[c]) && r[0] === S && r[1] === p) return (a[2] = r[2]);
                          if (((i[c] = a), (a[2] = s(e, t, n)))) return !0;
                        }
                  return !1;
                };
          }
          function we(i) {
            return i.length > 1
              ? function(e, t, n) {
                  var r = i.length;
                  while (r--) if (!i[r](e, t, n)) return !1;
                  return !0;
                }
              : i[0];
          }
          function Te(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n;
          }
          function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function Ee(d, h, g, m, v, e) {
            return (
              m && !m[k] && (m = Ee(m)),
              v && !v[k] && (v = Ee(v, e)),
              le(function(e, t, n, r) {
                var i,
                  o,
                  a,
                  s = [],
                  u = [],
                  l = t.length,
                  c = e || Te(h || '*', n.nodeType ? [n] : n, []),
                  f = !d || (!e && h) ? c : Ce(c, s, d, n, r),
                  p = g ? (v || (e ? d : l || m) ? [] : t) : f;
                if ((g && g(f, p, n, r), m)) {
                  (i = Ce(p, u)), m(i, [], n, r), (o = i.length);
                  while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                }
                if (e) {
                  if (v || d) {
                    if (v) {
                      (i = []), (o = p.length);
                      while (o--) (a = p[o]) && i.push((f[o] = a));
                      v(null, (p = []), i, r);
                    }
                    o = p.length;
                    while (o--) (a = p[o]) && (i = v ? P(e, a) : s[o]) > -1 && (e[i] = !(t[i] = a));
                  }
                } else (p = Ce(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
              })
            );
          }
          function ke(e) {
            for (
              var i,
                t,
                n,
                r = e.length,
                o = b.relative[e[0].type],
                a = o || b.relative[' '],
                s = o ? 1 : 0,
                u = be(
                  function(e) {
                    return e === i;
                  },
                  a,
                  !0
                ),
                l = be(
                  function(e) {
                    return P(i, e) > -1;
                  },
                  a,
                  !0
                ),
                c = [
                  function(e, t, n) {
                    var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return (i = null), r;
                  },
                ];
              s < r;
              s++
            )
              if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
              else {
                if (((t = b.filter[e[s].type].apply(null, e[s].matches)), t[k])) {
                  for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                  return Ee(
                    s > 1 && we(c),
                    s > 1 &&
                      xe(
                        e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                      ).replace(B, '$1'),
                    t,
                    s < n && ke(e.slice(s, n)),
                    n < r && ke((e = e.slice(n))),
                    n < r && xe(e)
                  );
                }
                c.push(t);
              }
            return we(c);
          }
          function Se(m, v) {
            var y = v.length > 0,
              x = m.length > 0,
              e = function(e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find['TAG']('*', i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = m[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  y && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), y && l !== u)) {
                  a = 0;
                  while ((s = v[a++])) s(c, f, t, n);
                  if (e) {
                    if (u > 0) while (l--) c[l] || f[l] || (f[l] = L.call(r));
                    f = Ce(f);
                  }
                  H.apply(r, f), i && !e && f.length > 0 && u + v.length > 1 && se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              };
            return y ? le(e) : e;
          }
          return (
            (ye.prototype = b.filters = b.pseudos),
            (b.setFilters = new ye()),
            (h = se.tokenize = function(e, t) {
              var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l = x[e + ' '];
              if (l) return t ? 0 : l.slice(0);
              (a = e), (s = []), (u = b.preFilter);
              while (a) {
                for (o in ((n && !(r = _.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                (n = !1),
                (r = z.exec(a)) &&
                  ((n = r.shift()),
                  i.push({ value: n, type: r[0].replace(B, ' ') }),
                  (a = a.slice(n.length))),
                b.filter))
                  !(r = G[o].exec(a)) ||
                    (u[o] && !(r = u[o](r))) ||
                    ((n = r.shift()),
                    i.push({ value: n, type: o, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
            }),
            (f = se.compile = function(e, t) {
              var n,
                r = [],
                i = [],
                o = A[e + ' '];
              if (!o) {
                (t = t || h(e)), (n = t.length);
                while (n--) (o = ke(t[n])), o[k] ? r.push(o) : i.push(o);
                (o = A(e, Se(i, r))), (o.selector = e);
              }
              return o;
            }),
            (g = se.select = function(e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = 'function' === typeof e && e,
                c = !r && h((e = l.selector || e));
              if (((n = n || []), 1 === c.length)) {
                if (
                  ((o = c[0] = c[0].slice(0)),
                  o.length > 2 &&
                    'ID' === (a = o[0]).type &&
                    9 === t.nodeType &&
                    E &&
                    b.relative[o[1].type])
                ) {
                  if (((t = (b.find['ID'](a.matches[0].replace(te, ne), t) || [])[0]), !t))
                    return n;
                  l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                }
                i = G['needsContext'].test(e) ? 0 : o.length;
                while (i--) {
                  if (((a = o[i]), b.relative[(s = a.type)])) break;
                  if (
                    (u = b.find[s]) &&
                    (r = u(
                      a.matches[0].replace(te, ne),
                      (ee.test(o[0].type) && ve(t.parentNode)) || t
                    ))
                  ) {
                    if ((o.splice(i, 1), (e = r.length && xe(o)), !e)) return H.apply(n, r), n;
                    break;
                  }
                }
              }
              return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (d.sortStable =
              k
                .split('')
                .sort(D)
                .join('') === k),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function(e) {
              return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
            })),
            ce(function(e) {
              return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
            }) ||
              fe('type|href|height|width', function(e, t, n) {
                if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
              }),
            (d.attributes &&
              ce(function(e) {
                return (
                  (e.innerHTML = '<input/>'),
                  e.firstChild.setAttribute('value', ''),
                  '' === e.firstChild.getAttribute('value')
                );
              })) ||
              fe('value', function(e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
            ce(function(e) {
              return null == e.getAttribute('disabled');
            }) ||
              fe(R, function(e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(C);
        (k.find = h),
          (k.expr = h.selectors),
          (k.expr[':'] = k.expr.pseudos),
          (k.uniqueSort = k.unique = h.uniqueSort),
          (k.text = h.getText),
          (k.isXMLDoc = h.isXML),
          (k.contains = h.contains),
          (k.escapeSelector = h.escape);
        var T = function(e, t, n) {
            var r = [],
              i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
              if (1 === e.nodeType) {
                if (i && k(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          A = k.expr.match.needsContext;
        function N(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e, n, r) {
          return y(n)
            ? k.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? k.grep(e, function(e) {
                return (e === n) !== r;
              })
            : 'string' !== typeof n
            ? k.grep(e, function(e) {
                return i.call(n, e) > -1 !== r;
              })
            : k.filter(n, e, r);
        }
        (k.filter = function(e, t, n) {
          var r = t[0];
          return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
              ? k.find.matchesSelector(r, e)
                ? [r]
                : []
              : k.find.matches(
                  e,
                  k.grep(t, function(e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          k.fn.extend({
            find: function(e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ('string' !== typeof e)
                return this.pushStack(
                  k(e).filter(function() {
                    for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
              return r > 1 ? k.uniqueSort(n) : n;
            },
            filter: function(e) {
              return this.pushStack(j(this, e || [], !1));
            },
            not: function(e) {
              return this.pushStack(j(this, e || [], !0));
            },
            is: function(e) {
              return !!j(this, 'string' === typeof e && A.test(e) ? k(e) : e || [], !1).length;
            },
          });
        var L,
          q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          H = (k.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || L), 'string' !== typeof e))
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : y(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(k)
                : k.makeArray(e, this);
            if (
              ((r =
                '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : q.exec(e)),
              !r || (!r[1] && t))
            )
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof k ? t[0] : t),
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                D.test(r[1]) && k.isPlainObject(t))
              )
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (i = E.getElementById(r[2])), i && ((this[0] = i), (this.length = 1)), this;
          });
        (H.prototype = k.fn), (L = k(E));
        var O = /^(?:parents|prev(?:Until|All))/,
          P = { children: !0, contents: !0, next: !0, prev: !0 };
        function R(e, t) {
          while ((e = e[t]) && 1 !== e.nodeType);
          return e;
        }
        k.fn.extend({
          has: function(e) {
            var t = k(e, this),
              n = t.length;
            return this.filter(function() {
              for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
          },
          closest: function(e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = 'string' !== typeof e && k(e);
            if (!A.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
          },
          index: function(e) {
            return e
              ? 'string' === typeof e
                ? i.call(k(e), this[0])
                : i.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
          },
          addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          },
        }),
          k.each(
            {
              parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function(e) {
                return T(e, 'parentNode');
              },
              parentsUntil: function(e, t, n) {
                return T(e, 'parentNode', n);
              },
              next: function(e) {
                return R(e, 'nextSibling');
              },
              prev: function(e) {
                return R(e, 'previousSibling');
              },
              nextAll: function(e) {
                return T(e, 'nextSibling');
              },
              prevAll: function(e) {
                return T(e, 'previousSibling');
              },
              nextUntil: function(e, t, n) {
                return T(e, 'nextSibling', n);
              },
              prevUntil: function(e, t, n) {
                return T(e, 'previousSibling', n);
              },
              siblings: function(e) {
                return S((e.parentNode || {}).firstChild, e);
              },
              children: function(e) {
                return S(e.firstChild);
              },
              contents: function(e) {
                return 'undefined' !== typeof e.contentDocument
                  ? e.contentDocument
                  : (N(e, 'template') && (e = e.content || e), k.merge([], e.childNodes));
              },
            },
            function(r, i) {
              k.fn[r] = function(e, t) {
                var n = k.map(this, i, e);
                return (
                  'Until' !== r.slice(-5) && (t = e),
                  t && 'string' === typeof t && (n = k.filter(t, n)),
                  this.length > 1 && (P[r] || k.uniqueSort(n), O.test(r) && n.reverse()),
                  this.pushStack(n)
                );
              };
            }
          );
        var M = /[^\x20\t\r\n\f]+/g;
        function I(e) {
          var n = {};
          return (
            k.each(e.match(M) || [], function(e, t) {
              n[t] = !0;
            }),
            n
          );
        }
        function W(e) {
          return e;
        }
        function F(e) {
          throw e;
        }
        function $(e, t, n, r) {
          var i;
          try {
            e && y((i = e.promise))
              ? i
                  .call(e)
                  .done(t)
                  .fail(n)
              : e && y((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (k.Callbacks = function(r) {
          r = 'string' === typeof r ? I(r) : k.extend({}, r);
          var n,
            e,
            t,
            i,
            o = [],
            a = [],
            s = -1,
            u = function() {
              for (i = i || r.once, t = n = !0; a.length; s = -1) {
                e = a.shift();
                while (++s < o.length)
                  !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && ((s = o.length), (e = !1));
              }
              r.memory || (e = !1), (n = !1), i && (o = e ? [] : '');
            },
            l = {
              add: function() {
                return (
                  o &&
                    (e && !n && ((s = o.length - 1), a.push(e)),
                    (function n(e) {
                      k.each(e, function(e, t) {
                        y(t)
                          ? (r.unique && l.has(t)) || o.push(t)
                          : t && t.length && 'string' !== w(t) && n(t);
                      });
                    })(arguments),
                    e && !n && u()),
                  this
                );
              },
              remove: function() {
                return (
                  k.each(arguments, function(e, t) {
                    var n;
                    while ((n = k.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                  }),
                  this
                );
              },
              has: function(e) {
                return e ? k.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function() {
                return (o = o && []), this;
              },
              disable: function() {
                return (i = a = []), (o = e = ''), this;
              },
              disabled: function() {
                return !o;
              },
              lock: function() {
                return (i = a = []), e || n || (o = e = ''), this;
              },
              locked: function() {
                return !!i;
              },
              fireWith: function(e, t) {
                return (
                  i || ((t = t || []), (t = [e, t.slice ? t.slice() : t]), a.push(t), n || u()),
                  this
                );
              },
              fire: function() {
                return l.fireWith(this, arguments), this;
              },
              fired: function() {
                return !!t;
              },
            };
          return l;
        }),
          k.extend({
            Deferred: function(e) {
              var o = [
                  ['notify', 'progress', k.Callbacks('memory'), k.Callbacks('memory'), 2],
                  [
                    'resolve',
                    'done',
                    k.Callbacks('once memory'),
                    k.Callbacks('once memory'),
                    0,
                    'resolved',
                  ],
                  [
                    'reject',
                    'fail',
                    k.Callbacks('once memory'),
                    k.Callbacks('once memory'),
                    1,
                    'rejected',
                  ],
                ],
                i = 'pending',
                a = {
                  state: function() {
                    return i;
                  },
                  always: function() {
                    return s.done(arguments).fail(arguments), this;
                  },
                  catch: function(e) {
                    return a.then(null, e);
                  },
                  pipe: function() {
                    var i = arguments;
                    return k
                      .Deferred(function(r) {
                        k.each(o, function(e, t) {
                          var n = y(i[t[4]]) && i[t[4]];
                          s[t[1]](function() {
                            var e = n && n.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(r.notify)
                                  .done(r.resolve)
                                  .fail(r.reject)
                              : r[t[0] + 'With'](this, n ? [e] : arguments);
                          });
                        }),
                          (i = null);
                      })
                      .promise();
                  },
                  then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                      return function() {
                        var n = this,
                          r = arguments,
                          e = function() {
                            var e, t;
                            if (!(i < u)) {
                              if (((e = a.apply(n, r)), e === o.promise()))
                                throw new TypeError('Thenable self-resolution');
                              (t =
                                e && ('object' === typeof e || 'function' === typeof e) && e.then),
                                y(t)
                                  ? s
                                    ? t.call(e, l(u, o, W, s), l(u, o, F, s))
                                    : (u++,
                                      t.call(
                                        e,
                                        l(u, o, W, s),
                                        l(u, o, F, s),
                                        l(u, o, W, o.notifyWith)
                                      ))
                                  : (a !== W && ((n = void 0), (r = [e])),
                                    (s || o.resolveWith)(n, r));
                            }
                          },
                          t = s
                            ? e
                            : function() {
                                try {
                                  e();
                                } catch (e) {
                                  k.Deferred.exceptionHook &&
                                    k.Deferred.exceptionHook(e, t.stackTrace),
                                    i + 1 >= u &&
                                      (a !== F && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                }
                              };
                        i
                          ? t()
                          : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(t));
                      };
                    }
                    return k
                      .Deferred(function(e) {
                        o[0][3].add(l(0, e, y(r) ? r : W, e.notifyWith)),
                          o[1][3].add(l(0, e, y(t) ? t : W)),
                          o[2][3].add(l(0, e, y(n) ? n : F));
                      })
                      .promise();
                  },
                  promise: function(e) {
                    return null != e ? k.extend(e, a) : a;
                  },
                },
                s = {};
              return (
                k.each(o, function(e, t) {
                  var n = t[2],
                    r = t[5];
                  (a[t[1]] = n.add),
                    r &&
                      n.add(
                        function() {
                          i = r;
                        },
                        o[3 - e][2].disable,
                        o[3 - e][3].disable,
                        o[0][2].lock,
                        o[0][3].lock
                      ),
                    n.add(t[3].fire),
                    (s[t[0]] = function() {
                      return s[t[0] + 'With'](this === s ? void 0 : this, arguments), this;
                    }),
                    (s[t[0] + 'With'] = n.fireWith);
                }),
                a.promise(s),
                e && e.call(s, s),
                s
              );
            },
            when: function(e) {
              var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                  return function(e) {
                    (r[t] = this),
                      (i[t] = arguments.length > 1 ? s.call(arguments) : e),
                      --n || o.resolveWith(r, i);
                  };
                };
              if (
                n <= 1 &&
                ($(e, o.done(a(t)).resolve, o.reject, !n),
                'pending' === o.state() || y(i[t] && i[t].then))
              )
                return o.then();
              while (t--) $(i[t], a(t), o.reject);
              return o.promise();
            },
          });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (k.Deferred.exceptionHook = function(e, t) {
          C.console &&
            C.console.warn &&
            e &&
            B.test(e.name) &&
            C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
        }),
          (k.readyException = function(e) {
            C.setTimeout(function() {
              throw e;
            });
          });
        var _ = k.Deferred();
        function z() {
          E.removeEventListener('DOMContentLoaded', z), C.removeEventListener('load', z), k.ready();
        }
        (k.fn.ready = function(e) {
          return (
            _.then(e).catch(function(e) {
              k.readyException(e);
            }),
            this
          );
        }),
          k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
              (!0 === e ? --k.readyWait : k.isReady) ||
                ((k.isReady = !0), (!0 !== e && --k.readyWait > 0) || _.resolveWith(E, [k]));
            },
          }),
          (k.ready.then = _.then),
          'complete' === E.readyState || ('loading' !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(k.ready)
            : (E.addEventListener('DOMContentLoaded', z), C.addEventListener('load', z));
        var U = function(e, t, n, r, i, o, a) {
            var s = 0,
              u = e.length,
              l = null == n;
            if ('object' === w(n)) for (s in ((i = !0), n)) U(e, t, s, n[s], !0, o, a);
            else if (
              void 0 !== r &&
              ((i = !0),
              y(r) || (a = !0),
              l &&
                (t = a
                  ? (t.call(e, r), null)
                  : ((l = t),
                    function(e, t, n) {
                      return l.call(k(e), n);
                    })),
              t)
            )
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
          },
          V = /^-ms-/,
          X = /-([a-z])/g;
        function G(e, t) {
          return t.toUpperCase();
        }
        function Y(e) {
          return e.replace(V, 'ms-').replace(X, G);
        }
        var Q = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function J() {
          this.expando = k.expando + J.uid++;
        }
        (J.uid = 1),
          (J.prototype = {
            cache: function(e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  Q(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                t
              );
            },
            set: function(e, t, n) {
              var r,
                i = this.cache(e);
              if ('string' === typeof t) i[Y(t)] = n;
              else for (r in t) i[Y(r)] = t[r];
              return i;
            },
            get: function(e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
            },
            access: function(e, t, n) {
              return void 0 === t || (t && 'string' === typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function(e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  (t = Array.isArray(t) ? t.map(Y) : ((t = Y(t)), t in r ? [t] : t.match(M) || [])),
                    (n = t.length);
                  while (n--) delete r[t[n]];
                }
                (void 0 !== t && !k.isEmptyObject(r)) ||
                  (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
              }
            },
            hasData: function(e) {
              var t = e[this.expando];
              return void 0 !== t && !k.isEmptyObject(t);
            },
          });
        var K = new J(),
          Z = new J(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e) {
          return (
            'true' === e ||
            ('false' !== e &&
              ('null' === e ? null : e === +e + '' ? +e : ee.test(e) ? JSON.parse(e) : e))
          );
        }
        function re(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
              (n = e.getAttribute(r)),
              'string' === typeof n)
            ) {
              try {
                n = ne(n);
              } catch (e) {}
              Z.set(e, t, n);
            } else n = void 0;
          return n;
        }
        k.extend({
          hasData: function(e) {
            return Z.hasData(e) || K.hasData(e);
          },
          data: function(e, t, n) {
            return Z.access(e, t, n);
          },
          removeData: function(e, t) {
            Z.remove(e, t);
          },
          _data: function(e, t, n) {
            return K.access(e, t, n);
          },
          _removeData: function(e, t) {
            K.remove(e, t);
          },
        }),
          k.fn.extend({
            data: function(n, e) {
              var t,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 !== n)
                return 'object' === typeof n
                  ? this.each(function() {
                      Z.set(this, n);
                    })
                  : U(
                      this,
                      function(e) {
                        var t;
                        if (o && void 0 === e)
                          return (
                            (t = Z.get(o, n)),
                            void 0 !== t ? t : ((t = re(o, n)), void 0 !== t ? t : void 0)
                          );
                        this.each(function() {
                          Z.set(this, n, e);
                        });
                      },
                      null,
                      e,
                      arguments.length > 1,
                      null,
                      !0
                    );
              if (this.length && ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, 'hasDataAttrs'))) {
                t = a.length;
                while (t--)
                  a[t] &&
                    ((r = a[t].name),
                    0 === r.indexOf('data-') && ((r = Y(r.slice(5))), re(o, r, i[r])));
                K.set(o, 'hasDataAttrs', !0);
              }
              return i;
            },
            removeData: function(e) {
              return this.each(function() {
                Z.remove(this, e);
              });
            },
          }),
          k.extend({
            queue: function(e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || 'fx') + 'queue'),
                  (r = K.get(e, t)),
                  n && (!r || Array.isArray(n) ? (r = K.access(e, t, k.makeArray(n))) : r.push(n)),
                  r || []
                );
            },
            dequeue: function(e, t) {
              t = t || 'fx';
              var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t),
                a = function() {
                  k.dequeue(e, t);
                };
              'inprogress' === i && ((i = n.shift()), r--),
                i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)),
                !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
              var n = t + 'queueHooks';
              return (
                K.get(e, n) ||
                K.access(e, n, {
                  empty: k.Callbacks('once memory').add(function() {
                    K.remove(e, [t + 'queue', n]);
                  }),
                })
              );
            },
          }),
          k.fn.extend({
            queue: function(t, n) {
              var e = 2;
              return (
                'string' !== typeof t && ((n = t), (t = 'fx'), e--),
                arguments.length < e
                  ? k.queue(this[0], t)
                  : void 0 === n
                  ? this
                  : this.each(function() {
                      var e = k.queue(this, t, n);
                      k._queueHooks(this, t),
                        'fx' === t && 'inprogress' !== e[0] && k.dequeue(this, t);
                    })
              );
            },
            dequeue: function(e) {
              return this.each(function() {
                k.dequeue(this, e);
              });
            },
            clearQueue: function(e) {
              return this.queue(e || 'fx', []);
            },
            promise: function(e, t) {
              var n,
                r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                  --r || i.resolveWith(o, [o]);
                };
              'string' !== typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
              while (a--)
                (n = K.get(o[a], e + 'queueHooks')), n && n.empty && (r++, n.empty.add(s));
              return s(), i.promise(t);
            },
          });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp('^(?:([+-])=|)(' + ie + ')([a-z%]*)$', 'i'),
          ae = ['Top', 'Right', 'Bottom', 'Left'],
          se = E.documentElement,
          ue = function(e) {
            return k.contains(e.ownerDocument, e);
          },
          le = { composed: !0 };
        se.getRootNode &&
          (ue = function(e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
          });
        var ce = function(e, t) {
            return (
              (e = t || e),
              'none' === e.style.display ||
                ('' === e.style.display && ue(e) && 'none' === k.css(e, 'display'))
            );
          },
          fe = function(e, t, n, r) {
            var i,
              o,
              a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
          };
        function pe(e, t, n, r) {
          var i,
            o,
            a = 20,
            s = r
              ? function() {
                  return r.cur();
                }
              : function() {
                  return k.css(e, t, '');
                },
            u = s(),
            l = (n && n[3]) || (k.cssNumber[t] ? '' : 'px'),
            c = e.nodeType && (k.cssNumber[t] || ('px' !== l && +u)) && oe.exec(k.css(e, t));
          if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
              k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), k.style(e, t, c + l), (n = n || []);
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          );
        }
        var de = {};
        function he(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = de[r];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = k.css(t, 'display')),
            t.parentNode.removeChild(t),
            'none' === i && (i = 'block'),
            (de[r] = i),
            i)
          );
        }
        function ge(e, t) {
          for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]),
              r.style &&
                ((n = r.style.display),
                t
                  ? ('none' === n &&
                      ((i[o] = K.get(r, 'display') || null), i[o] || (r.style.display = '')),
                    '' === r.style.display && ce(r) && (i[o] = he(r)))
                  : 'none' !== n && ((i[o] = 'none'), K.set(r, 'display', n)));
          for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        k.fn.extend({
          show: function() {
            return ge(this, !0);
          },
          hide: function() {
            return ge(this);
          },
          toggle: function(e) {
            return 'boolean' === typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function() {
                  ce(this) ? k(this).show() : k(this).hide();
                });
          },
        });
        var me = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i,
          xe = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
        function be(e, t) {
          var n;
          return (
            (n =
              'undefined' !== typeof e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : 'undefined' !== typeof e.querySelectorAll
                ? e.querySelectorAll(t || '*')
                : []),
            void 0 === t || (t && N(e, t)) ? k.merge([e], n) : n
          );
        }
        function we(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
        }
        (xe.optgroup = xe.option),
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
          (xe.th = xe.td);
        var Te = /<|&#?\w+;/;
        function Ce(e, t, n, r, i) {
          for (
            var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length;
            d < h;
            d++
          )
            if (((o = e[d]), o || 0 === o))
              if ('object' === w(o)) k.merge(p, o.nodeType ? [o] : o);
              else if (Te.test(o)) {
                (a = a || f.appendChild(t.createElement('div'))),
                  (s = (ve.exec(o) || ['', ''])[1].toLowerCase()),
                  (u = xe[s] || xe._default),
                  (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
                  (c = u[0]);
                while (c--) a = a.lastChild;
                k.merge(p, a.childNodes), (a = f.firstChild), (a.textContent = '');
              } else p.push(t.createTextNode(o));
          (f.textContent = ''), (d = 0);
          while ((o = p[d++]))
            if (r && k.inArray(o, r) > -1) i && i.push(o);
            else if (((l = ue(o)), (a = be(f.appendChild(o), 'script')), l && we(a), n)) {
              c = 0;
              while ((o = a[c++])) ye.test(o.type || '') && n.push(o);
            }
          return f;
        }
        (function() {
          var e = E.createDocumentFragment(),
            t = e.appendChild(E.createElement('div')),
            n = E.createElement('input');
          n.setAttribute('type', 'radio'),
            n.setAttribute('checked', 'checked'),
            n.setAttribute('name', 't'),
            t.appendChild(n),
            (v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (t.innerHTML = '<textarea>x</textarea>'),
            (v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
        })();
        var Ee = /^key/,
          ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Se = /^([^.]*)(?:\.(.+)|)/;
        function Ae() {
          return !0;
        }
        function Ne() {
          return !1;
        }
        function De(e, t) {
          return (e === je()) === ('focus' === t);
        }
        function je() {
          try {
            return E.activeElement;
          } catch (e) {}
        }
        function Le(e, t, n, r, i, o) {
          var a, s;
          if ('object' === typeof t) {
            for (s in ('string' !== typeof n && ((r = r || n), (n = void 0)), t))
              Le(e, s, n, r, t[s], o);
            return e;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ('string' === typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = Ne;
          else if (!i) return e;
          return (
            1 === o &&
              ((a = i),
              (i = function(e) {
                return k().off(e), a.apply(this, arguments);
              }),
              (i.guid = a.guid || (a.guid = k.guid++))),
            e.each(function() {
              k.event.add(this, t, i, r, n);
            })
          );
        }
        function qe(e, i, o) {
          o
            ? (K.set(e, i, !1),
              k.event.add(e, i, {
                namespace: !1,
                handler: function(e) {
                  var t,
                    n,
                    r = K.get(this, i);
                  if (1 & e.isTrigger && this[i]) {
                    if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (
                      ((r = s.call(arguments)),
                      K.set(this, i, r),
                      (t = o(this, i)),
                      this[i](),
                      (n = K.get(this, i)),
                      r !== n || t ? K.set(this, i, !1) : (n = {}),
                      r !== n)
                    )
                      return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                  } else
                    r.length &&
                      (K.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === K.get(e, i) && k.event.add(e, i, Ae);
        }
        (k.event = {
          global: {},
          add: function(t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              m = K.get(t);
            if (m) {
              n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                i && k.find.matchesSelector(se, i),
                n.guid || (n.guid = k.guid++),
                (u = m.events) || (u = m.events = {}),
                (a = m.handle) ||
                  (a = m.handle = function(e) {
                    return 'undefined' !== typeof k && k.event.triggered !== e.type
                      ? k.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                (e = (e || '').match(M) || ['']),
                (l = e.length);
              while (l--)
                (s = Se.exec(e[l]) || []),
                  (d = g = s[1]),
                  (h = (s[2] || '').split('.').sort()),
                  d &&
                    ((f = k.event.special[d] || {}),
                    (d = (i ? f.delegateType : f.bindType) || d),
                    (f = k.event.special[d] || {}),
                    (c = k.extend(
                      {
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && k.expr.match.needsContext.test(i),
                        namespace: h.join('.'),
                      },
                      o
                    )),
                    (p = u[d]) ||
                      ((p = u[d] = []),
                      (p.delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                        (t.addEventListener && t.addEventListener(d, a))),
                    f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (k.event.global[d] = !0));
            }
          },
          remove: function(e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              m = K.hasData(e) && K.get(e);
            if (m && (u = m.events)) {
              (t = (t || '').match(M) || ['']), (l = t.length);
              while (l--)
                if (
                  ((s = Se.exec(t[l]) || []),
                  (d = g = s[1]),
                  (h = (s[2] || '').split('.').sort()),
                  d)
                ) {
                  (f = k.event.special[d] || {}),
                    (d = (r ? f.delegateType : f.bindType) || d),
                    (p = u[d] || []),
                    (s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
                    (a = o = p.length);
                  while (o--)
                    (c = p[o]),
                      (!i && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                        (p.splice(o, 1),
                        c.selector && p.delegateCount--,
                        f.remove && f.remove.call(e, c));
                  a &&
                    !p.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                      k.removeEvent(e, d, m.handle),
                    delete u[d]);
                } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
              k.isEmptyObject(u) && K.remove(e, 'handle events');
            }
          },
          dispatch: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = k.event.fix(e),
              u = new Array(arguments.length),
              l = (K.get(this, 'events') || {})[s.type] || [],
              c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
              (a = k.event.handlers.call(this, s, l)), (t = 0);
              while ((i = a[t++]) && !s.isPropagationStopped()) {
                (s.currentTarget = i.elem), (n = 0);
                while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                  (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
                    ((s.handleObj = o),
                    (s.data = o.data),
                    (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(
                      i.elem,
                      u
                    )),
                    void 0 !== r &&
                      !1 === (s.result = r) &&
                      (s.preventDefault(), s.stopPropagation()));
              }
              return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
          },
          handlers: function(e, t) {
            var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;
            if (u && l.nodeType && !('click' === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                  for (o = [], a = {}, n = 0; n < u; n++)
                    (r = t[n]),
                      (i = r.selector + ' '),
                      void 0 === a[i] &&
                        (a[i] = r.needsContext
                          ? k(i, this).index(l) > -1
                          : k.find(i, this, null, [l]).length),
                      a[i] && o.push(r);
                  o.length && s.push({ elem: l, handlers: o });
                }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
          },
          addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: y(e)
                ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                  }
                : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                  },
              set: function(e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function(e) {
            return e[k.expando] ? e : new k.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function(e) {
                var t = this || e;
                return me.test(t.type) && t.click && N(t, 'input') && qe(t, 'click', Ae), !1;
              },
              trigger: function(e) {
                var t = this || e;
                return me.test(t.type) && t.click && N(t, 'input') && qe(t, 'click'), !0;
              },
              _default: function(e) {
                var t = e.target;
                return (
                  (me.test(t.type) && t.click && N(t, 'input') && K.get(t, 'click')) || N(t, 'a')
                );
              },
            },
            beforeunload: {
              postDispatch: function(e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (k.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (k.Event = function(e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Ae
                    : Ne),
                (this.target =
                  e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && k.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[k.expando] = !0);
          }),
          (k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function() {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Ae), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function() {
              var e = this.originalEvent;
              (this.isPropagationStopped = Ae), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function() {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Ae),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          k.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function(e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && ke.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              },
            },
            k.event.addProp
          ),
          k.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            k.event.special[e] = {
              setup: function() {
                return qe(this, e, De), !1;
              },
              trigger: function() {
                return qe(this, e), !0;
              },
              delegateType: t,
            };
          }),
          k.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout',
            },
            function(e, o) {
              k.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                  var t,
                    n = this,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (r && (r === n || k.contains(n, r))) ||
                      ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = o)),
                    t
                  );
                },
              };
            }
          ),
          k.fn.extend({
            on: function(e, t, n, r) {
              return Le(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
              return Le(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  k(e.delegateTarget).off(
                    r.namespace ? r.origType + '.' + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ('object' !== typeof e)
                return (
                  (!1 !== t && 'function' !== typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = Ne),
                  this.each(function() {
                    k.event.remove(this, e, n, t);
                  })
                );
              for (i in e) this.off(i, t, e[i]);
              return this;
            },
          });
        var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Oe = /<script|<style|<link/i,
          Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Me(e, t) {
          return (
            (N(e, 'table') &&
              N(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
              k(e).children('tbody')[0]) ||
            e
          );
        }
        function Ie(e) {
          return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
        }
        function We(e) {
          return (
            'true/' === (e.type || '').slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute('type'),
            e
          );
        }
        function Fe(e, t) {
          var n, r, i, o, a, s, u, l;
          if (1 === t.nodeType) {
            if (K.hasData(e) && ((o = K.access(e)), (a = K.set(t, o)), (l = o.events), l))
              for (i in (delete a.handle, (a.events = {}), l))
                for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            Z.hasData(e) && ((s = Z.access(e)), (u = k.extend({}, s)), Z.set(t, u));
          }
        }
        function $e(e, t) {
          var n = t.nodeName.toLowerCase();
          'input' === n && me.test(e.type)
            ? (t.checked = e.checked)
            : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
        }
        function Be(n, r, i, o) {
          r = g.apply([], r);
          var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = y(d);
          if (h || (f > 1 && 'string' === typeof d && !v.checkClone && Pe.test(d)))
            return n.each(function(e) {
              var t = n.eq(e);
              h && (r[0] = d.call(this, e, t.html())), Be(t, r, i, o);
            });
          if (
            f &&
            ((e = Ce(r, n[0].ownerDocument, !1, n, o)),
            (t = e.firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
          ) {
            for (a = k.map(be(e, 'script'), Ie), s = a.length; c < f; c++)
              (u = e),
                c !== p && ((u = k.clone(u, !0, !0)), s && k.merge(a, be(u, 'script'))),
                i.call(n[c], u, c);
            if (s)
              for (l = a[a.length - 1].ownerDocument, k.map(a, We), c = 0; c < s; c++)
                (u = a[c]),
                  ye.test(u.type || '') &&
                    !K.access(u, 'globalEval') &&
                    k.contains(l, u) &&
                    (u.src && 'module' !== (u.type || '').toLowerCase()
                      ? k._evalUrl &&
                        !u.noModule &&
                        k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute('nonce') })
                      : b(u.textContent.replace(Re, ''), u, l));
          }
          return n;
        }
        function _e(e, t, n) {
          for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(be(r)),
              r.parentNode && (n && ue(r) && we(be(r, 'script')), r.parentNode.removeChild(r));
          return e;
        }
        k.extend({
          htmlPrefilter: function(e) {
            return e.replace(He, '<$1></$2>');
          },
          clone: function(e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.cloneNode(!0),
              u = ue(e);
            if (!v.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !k.isXMLDoc(e))
              for (a = be(s), o = be(e), r = 0, i = o.length; r < i; r++) $e(o[r], a[r]);
            if (t)
              if (n)
                for (o = o || be(e), a = a || be(s), r = 0, i = o.length; r < i; r++)
                  Fe(o[r], a[r]);
              else Fe(e, s);
            return (a = be(s, 'script')), a.length > 0 && we(a, !u && be(e, 'script')), s;
          },
          cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (Q(n)) {
                if ((t = n[K.expando])) {
                  if (t.events)
                    for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                  n[K.expando] = void 0;
                }
                n[Z.expando] && (n[Z.expando] = void 0);
              }
          },
        }),
          k.fn.extend({
            detach: function(e) {
              return _e(this, e, !0);
            },
            remove: function(e) {
              return _e(this, e);
            },
            text: function(e) {
              return U(
                this,
                function(e) {
                  return void 0 === e
                    ? k.text(this)
                    : this.empty().each(function() {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function() {
              return Be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Me(this, e);
                  t.appendChild(e);
                }
              });
            },
            prepend: function() {
              return Be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Me(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function() {
              return Be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function() {
              return Be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function() {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(be(e, !1)), (e.textContent = ''));
              return this;
            },
            clone: function(e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function() {
                  return k.clone(this, e, t);
                })
              );
            },
            html: function(e) {
              return U(
                this,
                function(e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    'string' === typeof e &&
                    !Oe.test(e) &&
                    !xe[(ve.exec(e) || ['', ''])[1].toLowerCase()]
                  ) {
                    e = k.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        (t = this[n] || {}),
                          1 === t.nodeType && (k.cleanData(be(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function() {
              var n = [];
              return Be(
                this,
                arguments,
                function(e) {
                  var t = this.parentNode;
                  k.inArray(this, n) < 0 && (k.cleanData(be(this)), t && t.replaceChild(e, this));
                },
                n
              );
            },
          }),
          k.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith',
            },
            function(e, a) {
              k.fn[e] = function(e) {
                for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                  (t = o === i ? this : this.clone(!0)), k(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n);
              };
            }
          );
        var ze = new RegExp('^(' + ie + ')(?!px)[a-z%]+$', 'i'),
          Ue = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
          },
          Ve = new RegExp(ae.join('|'), 'i');
        function Xe(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.style;
          return (
            (n = n || Ue(e)),
            n &&
              ((a = n.getPropertyValue(t) || n[t]),
              '' !== a || ue(e) || (a = k.style(e, t)),
              !v.pixelBoxStyles() &&
                ze.test(a) &&
                Ve.test(t) &&
                ((r = s.width),
                (i = s.minWidth),
                (o = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = i),
                (s.maxWidth = o))),
            void 0 !== a ? a + '' : a
          );
        }
        function Ge(e, t) {
          return {
            get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        (function() {
          function e() {
            if (u) {
              (s.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                (u.style.cssText =
                  'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                se.appendChild(s).appendChild(u);
              var e = C.getComputedStyle(u);
              (n = '1%' !== e.top),
                (a = 12 === t(e.marginLeft)),
                (u.style.right = '60%'),
                (o = 36 === t(e.right)),
                (r = 36 === t(e.width)),
                (u.style.position = 'absolute'),
                (i = 12 === t(u.offsetWidth / 3)),
                se.removeChild(s),
                (u = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            r,
            i,
            o,
            a,
            s = E.createElement('div'),
            u = E.createElement('div');
          u.style &&
            ((u.style.backgroundClip = 'content-box'),
            (u.cloneNode(!0).style.backgroundClip = ''),
            (v.clearCloneStyle = 'content-box' === u.style.backgroundClip),
            k.extend(v, {
              boxSizingReliable: function() {
                return e(), r;
              },
              pixelBoxStyles: function() {
                return e(), o;
              },
              pixelPosition: function() {
                return e(), n;
              },
              reliableMarginLeft: function() {
                return e(), a;
              },
              scrollboxSize: function() {
                return e(), i;
              },
            }));
        })();
        var Ye = ['Webkit', 'Moz', 'ms'],
          Qe = E.createElement('div').style,
          Je = {};
        function Ke(e) {
          var t = e[0].toUpperCase() + e.slice(1),
            n = Ye.length;
          while (n--) if (((e = Ye[n] + t), e in Qe)) return e;
        }
        function Ze(e) {
          var t = k.cssProps[e] || Je[e];
          return t || (e in Qe ? e : (Je[e] = Ke(e) || e));
        }
        var et = /^(none|table(?!-c[ea]).+)/,
          tt = /^--/,
          nt = { position: 'absolute', visibility: 'hidden', display: 'block' },
          rt = { letterSpacing: '0', fontWeight: '400' };
        function it(e, t, n) {
          var r = oe.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
        }
        function ot(e, t, n, r, i, o) {
          var a = 'width' === t ? 1 : 0,
            s = 0,
            u = 0;
          if (n === (r ? 'border' : 'content')) return 0;
          for (; a < 4; a += 2)
            'margin' === n && (u += k.css(e, n + ae[a], !0, i)),
              r
                ? ('content' === n && (u -= k.css(e, 'padding' + ae[a], !0, i)),
                  'margin' !== n && (u -= k.css(e, 'border' + ae[a] + 'Width', !0, i)))
                : ((u += k.css(e, 'padding' + ae[a], !0, i)),
                  'padding' !== n
                    ? (u += k.css(e, 'border' + ae[a] + 'Width', !0, i))
                    : (s += k.css(e, 'border' + ae[a] + 'Width', !0, i)));
          return (
            !r &&
              o >= 0 &&
              (u +=
                Math.max(
                  0,
                  Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)
                ) || 0),
            u
          );
        }
        function at(e, t, n) {
          var r = Ue(e),
            i = !v.boxSizingReliable() || n,
            o = i && 'border-box' === k.css(e, 'boxSizing', !1, r),
            a = o,
            s = Xe(e, t, r),
            u = 'offset' + t[0].toUpperCase() + t.slice(1);
          if (ze.test(s)) {
            if (!n) return s;
            s = 'auto';
          }
          return (
            ((!v.boxSizingReliable() && o) ||
              'auto' === s ||
              (!parseFloat(s) && 'inline' === k.css(e, 'display', !1, r))) &&
              e.getClientRects().length &&
              ((o = 'border-box' === k.css(e, 'boxSizing', !1, r)), (a = u in e), a && (s = e[u])),
            (s = parseFloat(s) || 0),
            s + ot(e, t, n || (o ? 'border' : 'content'), a, r, s) + 'px'
          );
        }
        function st(e, t, n, r, i) {
          return new st.prototype.init(e, t, n, r, i);
        }
        k.extend({
          cssHooks: {
            opacity: {
              get: function(e, t) {
                if (t) {
                  var n = Xe(e, 'opacity');
                  return '' === n ? '1' : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                a,
                s = Y(t),
                u = tt.test(t),
                l = e.style;
              if ((u || (t = Ze(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n))
                return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              (o = typeof n),
                'string' === o && (i = oe.exec(n)) && i[1] && ((n = pe(e, t, i)), (o = 'number')),
                null != n &&
                  n === n &&
                  ('number' !== o || u || (n += (i && i[3]) || (k.cssNumber[s] ? '' : 'px')),
                  v.clearCloneStyle ||
                    '' !== n ||
                    0 !== t.indexOf('background') ||
                    (l[t] = 'inherit'),
                  (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)));
            }
          },
          css: function(e, t, n, r) {
            var i,
              o,
              a,
              s = Y(t),
              u = tt.test(t);
            return (
              u || (t = Ze(s)),
              (a = k.cssHooks[t] || k.cssHooks[s]),
              a && 'get' in a && (i = a.get(e, !0, n)),
              void 0 === i && (i = Xe(e, t, r)),
              'normal' === i && t in rt && (i = rt[t]),
              '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
          },
        }),
          k.each(['height', 'width'], function(e, l) {
            k.cssHooks[l] = {
              get: function(e, t, n) {
                if (t)
                  return !et.test(k.css(e, 'display')) ||
                    (e.getClientRects().length && e.getBoundingClientRect().width)
                    ? at(e, l, n)
                    : fe(e, nt, function() {
                        return at(e, l, n);
                      });
              },
              set: function(e, t, n) {
                var r,
                  i = Ue(e),
                  o = !v.scrollboxSize() && 'absolute' === i.position,
                  a = o || n,
                  s = a && 'border-box' === k.css(e, 'boxSizing', !1, i),
                  u = n ? ot(e, l, n, s, i) : 0;
                return (
                  s &&
                    o &&
                    (u -= Math.ceil(
                      e['offset' + l[0].toUpperCase() + l.slice(1)] -
                        parseFloat(i[l]) -
                        ot(e, l, 'border', !1, i) -
                        0.5
                    )),
                  u &&
                    (r = oe.exec(t)) &&
                    'px' !== (r[3] || 'px') &&
                    ((e.style[l] = t), (t = k.css(e, l))),
                  it(e, t, u)
                );
              },
            };
          }),
          (k.cssHooks.marginLeft = Ge(v.reliableMarginLeft, function(e, t) {
            if (t)
              return (
                (parseFloat(Xe(e, 'marginLeft')) ||
                  e.getBoundingClientRect().left -
                    fe(e, { marginLeft: 0 }, function() {
                      return e.getBoundingClientRect().left;
                    })) + 'px'
              );
          })),
          k.each({ margin: '', padding: '', border: 'Width' }, function(i, o) {
            (k.cssHooks[i + o] = {
              expand: function(e) {
                for (var t = 0, n = {}, r = 'string' === typeof e ? e.split(' ') : [e]; t < 4; t++)
                  n[i + ae[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
              },
            }),
              'margin' !== i && (k.cssHooks[i + o].set = it);
          }),
          k.fn.extend({
            css: function(e, t) {
              return U(
                this,
                function(e, t, n) {
                  var r,
                    i,
                    o = {},
                    a = 0;
                  if (Array.isArray(t)) {
                    for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o;
                  }
                  return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (k.Tween = st),
          (st.prototype = {
            constructor: st,
            init: function(e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || k.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (k.cssNumber[n] ? '' : 'px'));
            },
            cur: function() {
              var e = st.propHooks[this.prop];
              return e && e.get ? e.get(this) : st.propHooks._default.get(this);
            },
            run: function(e) {
              var t,
                n = st.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t = k.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : st.propHooks._default.set(this),
                this
              );
            },
          }),
          (st.prototype.init.prototype = st.prototype),
          (st.propHooks = {
            _default: {
              get: function(e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : ((t = k.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0);
              },
              set: function(e) {
                k.fx.step[e.prop]
                  ? k.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!k.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : k.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (st.propHooks.scrollTop = st.propHooks.scrollLeft = {
            set: function(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
          (k.easing = {
            linear: function(e) {
              return e;
            },
            swing: function(e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: 'swing',
          }),
          (k.fx = st.prototype.init),
          (k.fx.step = {});
        var ut,
          lt,
          ct = /^(?:toggle|show|hide)$/,
          ft = /queueHooks$/;
        function pt() {
          lt &&
            (!1 === E.hidden && C.requestAnimationFrame
              ? C.requestAnimationFrame(pt)
              : C.setTimeout(pt, k.fx.interval),
            k.fx.tick());
        }
        function dt() {
          return (
            C.setTimeout(function() {
              ut = void 0;
            }),
            (ut = Date.now())
          );
        }
        function ht(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            (n = ae[r]), (i['margin' + n] = i['padding' + n] = e);
          return t && (i.opacity = i.width = e), i;
        }
        function gt(e, t, n) {
          for (
            var r, i = (yt.tweeners[t] || []).concat(yt.tweeners['*']), o = 0, a = i.length;
            o < a;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function mt(e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = 'width' in t || 'height' in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ce(e),
            m = K.get(e, 'fxshow');
          for (r in (n.queue ||
            ((a = k._queueHooks(e, 'fx')),
            null == a.unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function() {
                a.unqueued || s();
              })),
            a.unqueued++,
            p.always(function() {
              p.always(function() {
                a.unqueued--, k.queue(e, 'fx').length || a.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), ct.test(i))) {
              if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                if ('show' !== i || !m || void 0 === m[r]) continue;
                g = !0;
              }
              d[r] = (m && m[r]) || k.style(e, r);
            }
          if (((u = !k.isEmptyObject(t)), u || !k.isEmptyObject(d)))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              (l = m && m.display),
              null == l && (l = K.get(e, 'display')),
              (c = k.css(e, 'display')),
              'none' === c &&
                (l
                  ? (c = l)
                  : (ge([e], !0), (l = e.style.display || l), (c = k.css(e, 'display')), ge([e]))),
              ('inline' === c || ('inline-block' === c && null != l)) &&
                'none' === k.css(e, 'float') &&
                (u ||
                  (p.done(function() {
                    h.display = l;
                  }),
                  null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
                (h.display = 'inline-block'))),
            n.overflow &&
              ((h.overflow = 'hidden'),
              p.always(function() {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (m ? 'hidden' in m && (g = m.hidden) : (m = K.access(e, 'fxshow', { display: l })),
                o && (m.hidden = !g),
                g && ge([e], !0),
                p.done(function() {
                  for (r in (g || ge([e]), K.remove(e, 'fxshow'), d)) k.style(e, r, d[r]);
                })),
                (u = gt(g ? m[r] : 0, r, p)),
                r in m || ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
        function vt(e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((r = Y(n)),
              (i = t[r]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = k.cssHooks[r]),
              a && 'expand' in a)
            )
              for (n in ((o = a.expand(o)), delete e[r], o)) n in e || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        }
        function yt(a, e, t) {
          var n,
            s,
            r = 0,
            i = yt.prefilters.length,
            u = k.Deferred().always(function() {
              delete o.elem;
            }),
            o = function() {
              if (s) return !1;
              for (
                var e = ut || dt(),
                  t = Math.max(0, l.startTime + l.duration - e),
                  n = t / l.duration || 0,
                  r = 1 - n,
                  i = 0,
                  o = l.tweens.length;
                i < o;
                i++
              )
                l.tweens[i].run(r);
              return (
                u.notifyWith(a, [l, r, t]),
                r < 1 && o ? t : (o || u.notifyWith(a, [l, 1, 0]), u.resolveWith(a, [l]), !1)
              );
            },
            l = u.promise({
              elem: a,
              props: k.extend({}, e),
              opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
              originalProperties: e,
              originalOptions: t,
              startTime: ut || dt(),
              duration: t.duration,
              tweens: [],
              createTween: function(e, t) {
                var n = k.Tween(a, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n;
              },
              stop: function(e) {
                var t = 0,
                  n = e ? l.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < n; t++) l.tweens[t].run(1);
                return (
                  e
                    ? (u.notifyWith(a, [l, 1, 0]), u.resolveWith(a, [l, e]))
                    : u.rejectWith(a, [l, e]),
                  this
                );
              },
            }),
            c = l.props;
          for (vt(c, l.opts.specialEasing); r < i; r++)
            if (((n = yt.prefilters[r].call(l, a, c, l.opts)), n))
              return y(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
          return (
            k.map(c, gt, l),
            y(l.opts.start) && l.opts.start.call(a, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            k.fx.timer(k.extend(o, { elem: a, anim: l, queue: l.opts.queue })),
            l
          );
        }
        (k.Animation = k.extend(yt, {
          tweeners: {
            '*': [
              function(e, t) {
                var n = this.createTween(e, t);
                return pe(n.elem, e, oe.exec(t), n), n;
              },
            ],
          },
          tweener: function(e, t) {
            e = y(e) ? ((t = e), ['*']) : e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]), (yt.tweeners[n] = yt.tweeners[n] || []), yt.tweeners[n].unshift(t);
          },
          prefilters: [mt],
          prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
          },
        })),
          (k.speed = function(e, t, n) {
            var r =
              e && 'object' === typeof e
                ? k.extend({}, e)
                : {
                    complete: n || (!n && t) || (y(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !y(t) && t),
                  };
            return (
              k.fx.off
                ? (r.duration = 0)
                : 'number' !== typeof r.duration &&
                  (r.duration in k.fx.speeds
                    ? (r.duration = k.fx.speeds[r.duration])
                    : (r.duration = k.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function() {
                y(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
              }),
              r
            );
          }),
          k.fn.extend({
            fadeTo: function(e, t, n, r) {
              return this.filter(ce)
                .css('opacity', 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function(t, e, n, r) {
              var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                  var e = yt(this, k.extend({}, t), o);
                  (i || K.get(this, 'finish')) && e.stop(!0);
                };
              return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(i, e, o) {
              var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
              };
              return (
                'string' !== typeof i && ((o = e), (e = i), (i = void 0)),
                e && !1 !== i && this.queue(i || 'fx', []),
                this.each(function() {
                  var e = !0,
                    t = null != i && i + 'queueHooks',
                    n = k.timers,
                    r = K.get(this);
                  if (t) r[t] && r[t].stop && a(r[t]);
                  else for (t in r) r[t] && r[t].stop && ft.test(t) && a(r[t]);
                  for (t = n.length; t--; )
                    n[t].elem !== this ||
                      (null != i && n[t].queue !== i) ||
                      (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                  (!e && o) || k.dequeue(this, i);
                })
              );
            },
            finish: function(a) {
              return (
                !1 !== a && (a = a || 'fx'),
                this.each(function() {
                  var e,
                    t = K.get(this),
                    n = t[a + 'queue'],
                    r = t[a + 'queueHooks'],
                    i = k.timers,
                    o = n ? n.length : 0;
                  for (
                    t.finish = !0,
                      k.queue(this, a, []),
                      r && r.stop && r.stop.call(this, !0),
                      e = i.length;
                    e--;

                  )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                  for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                  delete t.finish;
                })
              );
            },
          }),
          k.each(['toggle', 'show', 'hide'], function(e, r) {
            var i = k.fn[r];
            k.fn[r] = function(e, t, n) {
              return null == e || 'boolean' === typeof e
                ? i.apply(this, arguments)
                : this.animate(ht(r, !0), e, t, n);
            };
          }),
          k.each(
            {
              slideDown: ht('show'),
              slideUp: ht('hide'),
              slideToggle: ht('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' },
            },
            function(e, r) {
              k.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n);
              };
            }
          ),
          (k.timers = []),
          (k.fx.tick = function() {
            var e,
              t = 0,
              n = k.timers;
            for (ut = Date.now(); t < n.length; t++)
              (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(), (ut = void 0);
          }),
          (k.fx.timer = function(e) {
            k.timers.push(e), k.fx.start();
          }),
          (k.fx.interval = 13),
          (k.fx.start = function() {
            lt || ((lt = !0), pt());
          }),
          (k.fx.stop = function() {
            lt = null;
          }),
          (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (k.fn.delay = function(r, e) {
            return (
              (r = (k.fx && k.fx.speeds[r]) || r),
              (e = e || 'fx'),
              this.queue(e, function(e, t) {
                var n = C.setTimeout(e, r);
                t.stop = function() {
                  C.clearTimeout(n);
                };
              })
            );
          }),
          (function() {
            var e = E.createElement('input'),
              t = E.createElement('select'),
              n = t.appendChild(E.createElement('option'));
            (e.type = 'checkbox'),
              (v.checkOn = '' !== e.value),
              (v.optSelected = n.selected),
              (e = E.createElement('input')),
              (e.value = 't'),
              (e.type = 'radio'),
              (v.radioValue = 't' === e.value);
          })();
        var xt,
          bt = k.expr.attrHandle;
        k.fn.extend({
          attr: function(e, t) {
            return U(this, k.attr, e, t, arguments.length > 1);
          },
          removeAttr: function(e) {
            return this.each(function() {
              k.removeAttr(this, e);
            });
          },
        }),
          k.extend({
            attr: function(e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return 'undefined' === typeof e.getAttribute
                  ? k.prop(e, t, n)
                  : ((1 === o && k.isXMLDoc(e)) ||
                      (i =
                        k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? xt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void k.removeAttr(e, t)
                        : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ''), n)
                      : i && 'get' in i && null !== (r = i.get(e, t))
                      ? r
                      : ((r = k.find.attr(e, t)), null == r ? void 0 : r));
            },
            attrHooks: {
              type: {
                set: function(e, t) {
                  if (!v.radioValue && 'radio' === t && N(e, 'input')) {
                    var n = e.value;
                    return e.setAttribute('type', t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function(e, t) {
              var n,
                r = 0,
                i = t && t.match(M);
              if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
          }),
          (xt = {
            set: function(e, t, n) {
              return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = bt[t] || k.find.attr;
            bt[t] = function(e, t, n) {
              var r,
                i,
                o = t.toLowerCase();
              return (
                n || ((i = bt[o]), (bt[o] = r), (r = null != a(e, t, n) ? o : null), (bt[o] = i)), r
              );
            };
          });
        var wt = /^(?:input|select|textarea|button)$/i,
          Tt = /^(?:a|area)$/i;
        function Ct(e) {
          var t = e.match(M) || [];
          return t.join(' ');
        }
        function Et(e) {
          return (e.getAttribute && e.getAttribute('class')) || '';
        }
        function kt(e) {
          return Array.isArray(e) ? e : ('string' === typeof e && e.match(M)) || [];
        }
        k.fn.extend({
          prop: function(e, t) {
            return U(this, k.prop, e, t, arguments.length > 1);
          },
          removeProp: function(e) {
            return this.each(function() {
              delete this[k.propFix[e] || e];
            });
          },
        }),
          k.extend({
            prop: function(e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && k.isXMLDoc(e)) || ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                  void 0 !== n
                    ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && 'get' in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function(e) {
                  var t = k.find.attr(e, 'tabindex');
                  return t
                    ? parseInt(t, 10)
                    : wt.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: 'htmlFor', class: 'className' },
          }),
          v.optSelected ||
            (k.propHooks.selected = {
              get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          k.each(
            [
              'tabIndex',
              'readOnly',
              'maxLength',
              'cellSpacing',
              'cellPadding',
              'rowSpan',
              'colSpan',
              'useMap',
              'frameBorder',
              'contentEditable',
            ],
            function() {
              k.propFix[this.toLowerCase()] = this;
            }
          ),
          k.fn.extend({
            addClass: function(t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
              if (y(t))
                return this.each(function(e) {
                  k(this).addClass(t.call(this, e, Et(this)));
                });
              if (((e = kt(t)), e.length))
                while ((n = this[u++]))
                  if (((i = Et(n)), (r = 1 === n.nodeType && ' ' + Ct(i) + ' '), r)) {
                    a = 0;
                    while ((o = e[a++])) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                    (s = Ct(r)), i !== s && n.setAttribute('class', s);
                  }
              return this;
            },
            removeClass: function(t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
              if (y(t))
                return this.each(function(e) {
                  k(this).removeClass(t.call(this, e, Et(this)));
                });
              if (!arguments.length) return this.attr('class', '');
              if (((e = kt(t)), e.length))
                while ((n = this[u++]))
                  if (((i = Et(n)), (r = 1 === n.nodeType && ' ' + Ct(i) + ' '), r)) {
                    a = 0;
                    while ((o = e[a++]))
                      while (r.indexOf(' ' + o + ' ') > -1) r = r.replace(' ' + o + ' ', ' ');
                    (s = Ct(r)), i !== s && n.setAttribute('class', s);
                  }
              return this;
            },
            toggleClass: function(i, t) {
              var o = typeof i,
                a = 'string' === o || Array.isArray(i);
              return 'boolean' === typeof t && a
                ? t
                  ? this.addClass(i)
                  : this.removeClass(i)
                : y(i)
                ? this.each(function(e) {
                    k(this).toggleClass(i.call(this, e, Et(this), t), t);
                  })
                : this.each(function() {
                    var e, t, n, r;
                    if (a) {
                      (t = 0), (n = k(this)), (r = kt(i));
                      while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    } else (void 0 !== i && 'boolean' !== o) || ((e = Et(this)), e && K.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : K.get(this, '__className__') || ''));
                  });
            },
            hasClass: function(e) {
              var t,
                n,
                r = 0;
              t = ' ' + e + ' ';
              while ((n = this[r++]))
                if (1 === n.nodeType && (' ' + Ct(Et(n)) + ' ').indexOf(t) > -1) return !0;
              return !1;
            },
          });
        var St = /\r/g;
        k.fn.extend({
          val: function(n) {
            var r,
              e,
              i,
              t = this[0];
            return arguments.length
              ? ((i = y(n)),
                this.each(function(e) {
                  var t;
                  1 === this.nodeType &&
                    ((t = i ? n.call(this, e, k(this).val()) : n),
                    null == t
                      ? (t = '')
                      : 'number' === typeof t
                      ? (t += '')
                      : Array.isArray(t) &&
                        (t = k.map(t, function(e) {
                          return null == e ? '' : e + '';
                        })),
                    (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]),
                    (r && 'set' in r && void 0 !== r.set(this, t, 'value')) || (this.value = t));
                }))
              : t
              ? ((r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]),
                r && 'get' in r && void 0 !== (e = r.get(t, 'value'))
                  ? e
                  : ((e = t.value), 'string' === typeof e ? e.replace(St, '') : null == e ? '' : e))
              : void 0;
          },
        }),
          k.extend({
            valHooks: {
              option: {
                get: function(e) {
                  var t = k.find.attr(e, 'value');
                  return null != t ? t : Ct(k.text(e));
                },
              },
              select: {
                get: function(e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = 'select-one' === e.type,
                    s = a ? null : [],
                    u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]),
                      (n.selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, 'optgroup')))
                    ) {
                      if (((t = k(n).val()), a)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function(e, t) {
                  var n,
                    r,
                    i = e.options,
                    o = k.makeArray(t),
                    a = i.length;
                  while (a--)
                    (r = i[a]),
                      (r.selected = k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          k.each(['radio', 'checkbox'], function() {
            (k.valHooks[this] = {
              set: function(e, t) {
                if (Array.isArray(t)) return (e.checked = k.inArray(k(e).val(), t) > -1);
              },
            }),
              v.checkOn ||
                (k.valHooks[this].get = function(e) {
                  return null === e.getAttribute('value') ? 'on' : e.value;
                });
          }),
          (v.focusin = 'onfocusin' in C);
        var At = /^(?:focusinfocus|focusoutblur)$/,
          Nt = function(e) {
            e.stopPropagation();
          };
        k.extend(k.event, {
          trigger: function(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p = [n || E],
              d = m.call(e, 'type') ? e.type : e,
              h = m.call(e, 'namespace') ? e.namespace.split('.') : [];
            if (
              ((o = f = a = n = n || E),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !At.test(d + k.event.triggered) &&
                (d.indexOf('.') > -1 && ((h = d.split('.')), (d = h.shift()), h.sort()),
                (u = d.indexOf(':') < 0 && 'on' + d),
                (e = e[k.expando] ? e : new k.Event(d, 'object' === typeof e && e)),
                (e.isTrigger = r ? 2 : 3),
                (e.namespace = h.join('.')),
                (e.rnamespace = e.namespace
                  ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : k.makeArray(t, [e])),
                (c = k.event.special[d] || {}),
                r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
              if (!r && !c.noBubble && !x(n)) {
                for (
                  s = c.delegateType || d, At.test(s + d) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  p.push(o), (a = o);
                a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
              }
              i = 0;
              while ((o = p[i++]) && !e.isPropagationStopped())
                (f = o),
                  (e.type = i > 1 ? s : c.bindType || d),
                  (l = (K.get(o, 'events') || {})[e.type] && K.get(o, 'handle')),
                  l && l.apply(o, t),
                  (l = u && o[u]),
                  l &&
                    l.apply &&
                    Q(o) &&
                    ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
              return (
                (e.type = d),
                r ||
                  e.isDefaultPrevented() ||
                  (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                  !Q(n) ||
                  (u &&
                    y(n[d]) &&
                    !x(n) &&
                    ((a = n[u]),
                    a && (n[u] = null),
                    (k.event.triggered = d),
                    e.isPropagationStopped() && f.addEventListener(d, Nt),
                    n[d](),
                    e.isPropagationStopped() && f.removeEventListener(d, Nt),
                    (k.event.triggered = void 0),
                    a && (n[u] = a))),
                e.result
              );
            }
          },
          simulate: function(e, t, n) {
            var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
            k.event.trigger(r, null, t);
          },
        }),
          k.fn.extend({
            trigger: function(e, t) {
              return this.each(function() {
                k.event.trigger(e, t, this);
              });
            },
            triggerHandler: function(e, t) {
              var n = this[0];
              if (n) return k.event.trigger(e, t, n, !0);
            },
          }),
          v.focusin ||
            k.each({ focus: 'focusin', blur: 'focusout' }, function(n, r) {
              var i = function(e) {
                k.event.simulate(r, e.target, k.event.fix(e));
              };
              k.event.special[r] = {
                setup: function() {
                  var e = this.ownerDocument || this,
                    t = K.access(e, r);
                  t || e.addEventListener(n, i, !0), K.access(e, r, (t || 0) + 1);
                },
                teardown: function() {
                  var e = this.ownerDocument || this,
                    t = K.access(e, r) - 1;
                  t ? K.access(e, r, t) : (e.removeEventListener(n, i, !0), K.remove(e, r));
                },
              };
            });
        var Dt = C.location,
          jt = Date.now(),
          Lt = /\?/;
        k.parseXML = function(e) {
          var t;
          if (!e || 'string' !== typeof e) return null;
          try {
            t = new C.DOMParser().parseFromString(e, 'text/xml');
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName('parsererror').length) || k.error('Invalid XML: ' + e), t
          );
        };
        var qt = /\[\]$/,
          Ht = /\r?\n/g,
          Ot = /^(?:submit|button|image|reset|file)$/i,
          Pt = /^(?:input|select|textarea|keygen)/i;
        function Rt(n, e, r, i) {
          var t;
          if (Array.isArray(e))
            k.each(e, function(e, t) {
              r || qt.test(n)
                ? i(n, t)
                : Rt(n + '[' + ('object' === typeof t && null != t ? e : '') + ']', t, r, i);
            });
          else if (r || 'object' !== w(e)) i(n, e);
          else for (t in e) Rt(n + '[' + t + ']', e[t], r, i);
        }
        (k.param = function(e, t) {
          var n,
            r = [],
            i = function(e, t) {
              var n = y(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
            };
          if (null == e) return '';
          if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
            k.each(e, function() {
              i(this.name, this.value);
            });
          else for (n in e) Rt(n, e[n], t, i);
          return r.join('&');
        }),
          k.fn.extend({
            serialize: function() {
              return k.param(this.serializeArray());
            },
            serializeArray: function() {
              return this.map(function() {
                var e = k.prop(this, 'elements');
                return e ? k.makeArray(e) : this;
              })
                .filter(function() {
                  var e = this.type;
                  return (
                    this.name &&
                    !k(this).is(':disabled') &&
                    Pt.test(this.nodeName) &&
                    !Ot.test(e) &&
                    (this.checked || !me.test(e))
                  );
                })
                .map(function(e, t) {
                  var n = k(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? k.map(n, function(e) {
                        return { name: t.name, value: e.replace(Ht, '\r\n') };
                      })
                    : { name: t.name, value: n.replace(Ht, '\r\n') };
                })
                .get();
            },
          });
        var Mt = /%20/g,
          It = /#.*$/,
          Wt = /([?&])_=[^&]*/,
          Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          $t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          Bt = /^(?:GET|HEAD)$/,
          _t = /^\/\//,
          zt = {},
          Ut = {},
          Vt = '*/'.concat('*'),
          Xt = E.createElement('a');
        function Gt(o) {
          return function(e, t) {
            'string' !== typeof e && ((t = e), (e = '*'));
            var n,
              r = 0,
              i = e.toLowerCase().match(M) || [];
            if (y(t))
              while ((n = i[r++]))
                '+' === n[0]
                  ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
                  : (o[n] = o[n] || []).push(t);
          };
        }
        function Yt(t, i, o, a) {
          var s = {},
            u = t === Ut;
          function l(e) {
            var r;
            return (
              (s[e] = !0),
              k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return 'string' !== typeof n || u || s[n]
                  ? u
                    ? !(r = n)
                    : void 0
                  : (i.dataTypes.unshift(n), l(n), !1);
              }),
              r
            );
          }
          return l(i.dataTypes[0]) || (!s['*'] && l('*'));
        }
        function Qt(e, t) {
          var n,
            r,
            i = k.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
          return r && k.extend(!0, e, r), e;
        }
        function Jt(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ('*' === u[0])
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
              }
          if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + ' ' + u[0]]) {
                o = i;
                break;
              }
              a = a || i;
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }
        function Kt(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o)
            if (
              (e.responseFields[o] && (n[e.responseFields[o]] = t),
              !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
              (u = o),
              (o = c.shift()),
              o)
            )
              if ('*' === o) o = u;
              else if ('*' !== u && u !== o) {
                if (((a = l[u + ' ' + o] || l['* ' + o]), !a))
                  for (i in l)
                    if (
                      ((s = i.split(' ')),
                      s[1] === o && ((a = l[u + ' ' + s[0]] || l['* ' + s[0]]), a))
                    ) {
                      !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                      break;
                    }
                if (!0 !== a)
                  if (a && e.throws) t = a(t);
                  else
                    try {
                      t = a(t);
                    } catch (e) {
                      return {
                        state: 'parsererror',
                        error: a ? e : 'No conversion from ' + u + ' to ' + o,
                      };
                    }
              }
          return { state: 'success', data: t };
        }
        (Xt.href = Dt.href),
          k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Dt.href,
              type: 'GET',
              isLocal: $t.test(Dt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': Vt,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript',
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': k.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(e, t) {
              return t ? Qt(Qt(e, k.ajaxSettings), t) : Qt(k.ajaxSettings, e);
            },
            ajaxPrefilter: Gt(zt),
            ajaxTransport: Gt(Ut),
            ajax: function(e, t) {
              'object' === typeof e && ((t = e), (e = void 0)), (t = t || {});
              var c,
                f,
                p,
                n,
                d,
                r,
                h,
                g,
                i,
                o,
                m = k.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                x = k.Deferred(),
                b = k.Callbacks('once memory'),
                w = m.statusCode || {},
                a = {},
                s = {},
                u = 'canceled',
                T = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                    var t;
                    if (h) {
                      if (!n) {
                        n = {};
                        while ((t = Ft.exec(p)))
                          n[t[1].toLowerCase() + ' '] = (n[t[1].toLowerCase() + ' '] || []).concat(
                            t[2]
                          );
                      }
                      t = n[e.toLowerCase() + ' '];
                    }
                    return null == t ? null : t.join(', ');
                  },
                  getAllResponseHeaders: function() {
                    return h ? p : null;
                  },
                  setRequestHeader: function(e, t) {
                    return (
                      null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function(e) {
                    return null == h && (m.mimeType = e), this;
                  },
                  statusCode: function(e) {
                    var t;
                    if (e)
                      if (h) T.always(e[T.status]);
                      else for (t in e) w[t] = [w[t], e[t]];
                    return this;
                  },
                  abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t), l(0, t), this;
                  },
                };
              if (
                (x.promise(T),
                (m.url = ((e || m.url || Dt.href) + '').replace(_t, Dt.protocol + '//')),
                (m.type = t.method || t.type || m.method || m.type),
                (m.dataTypes = (m.dataType || '*').toLowerCase().match(M) || ['']),
                null == m.crossDomain)
              ) {
                r = E.createElement('a');
                try {
                  (r.href = m.url),
                    (r.href = r.href),
                    (m.crossDomain = Xt.protocol + '//' + Xt.host !== r.protocol + '//' + r.host);
                } catch (e) {
                  m.crossDomain = !0;
                }
              }
              if (
                (m.data &&
                  m.processData &&
                  'string' !== typeof m.data &&
                  (m.data = k.param(m.data, m.traditional)),
                Yt(zt, m, t, T),
                h)
              )
                return T;
              for (i in ((g = k.event && m.global),
              g && 0 === k.active++ && k.event.trigger('ajaxStart'),
              (m.type = m.type.toUpperCase()),
              (m.hasContent = !Bt.test(m.type)),
              (f = m.url.replace(It, '')),
              m.hasContent
                ? m.data &&
                  m.processData &&
                  0 === (m.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  (m.data = m.data.replace(Mt, '+'))
                : ((o = m.url.slice(f.length)),
                  m.data &&
                    (m.processData || 'string' === typeof m.data) &&
                    ((f += (Lt.test(f) ? '&' : '?') + m.data), delete m.data),
                  !1 === m.cache &&
                    ((f = f.replace(Wt, '$1')), (o = (Lt.test(f) ? '&' : '?') + '_=' + jt++ + o)),
                  (m.url = f + o)),
              m.ifModified &&
                (k.lastModified[f] && T.setRequestHeader('If-Modified-Since', k.lastModified[f]),
                k.etag[f] && T.setRequestHeader('If-None-Match', k.etag[f])),
              ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
                T.setRequestHeader('Content-Type', m.contentType),
              T.setRequestHeader(
                'Accept',
                m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                  ? m.accepts[m.dataTypes[0]] +
                      ('*' !== m.dataTypes[0] ? ', ' + Vt + '; q=0.01' : '')
                  : m.accepts['*']
              ),
              m.headers))
                T.setRequestHeader(i, m.headers[i]);
              if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
              if (
                ((u = 'abort'),
                b.add(m.complete),
                T.done(m.success),
                T.fail(m.error),
                (c = Yt(Ut, m, t, T)),
                c)
              ) {
                if (((T.readyState = 1), g && y.trigger('ajaxSend', [T, m]), h)) return T;
                m.async &&
                  m.timeout > 0 &&
                  (d = C.setTimeout(function() {
                    T.abort('timeout');
                  }, m.timeout));
                try {
                  (h = !1), c.send(a, l);
                } catch (e) {
                  if (h) throw e;
                  l(-1, e);
                }
              } else l(-1, 'No Transport');
              function l(e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = t;
                h ||
                  ((h = !0),
                  d && C.clearTimeout(d),
                  (c = void 0),
                  (p = r || ''),
                  (T.readyState = e > 0 ? 4 : 0),
                  (i = (e >= 200 && e < 300) || 304 === e),
                  n && (s = Jt(m, T, n)),
                  (s = Kt(m, s, T, i)),
                  i
                    ? (m.ifModified &&
                        ((u = T.getResponseHeader('Last-Modified')),
                        u && (k.lastModified[f] = u),
                        (u = T.getResponseHeader('etag')),
                        u && (k.etag[f] = u)),
                      204 === e || 'HEAD' === m.type
                        ? (l = 'nocontent')
                        : 304 === e
                        ? (l = 'notmodified')
                        : ((l = s.state), (o = s.data), (a = s.error), (i = !a)))
                    : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
                  (T.status = e),
                  (T.statusText = (t || l) + ''),
                  i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
                  T.statusCode(w),
                  (w = void 0),
                  g && y.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, m, i ? o : a]),
                  b.fireWith(v, [T, l]),
                  g &&
                    (y.trigger('ajaxComplete', [T, m]), --k.active || k.event.trigger('ajaxStop')));
              }
              return T;
            },
            getJSON: function(e, t, n) {
              return k.get(e, t, n, 'json');
            },
            getScript: function(e, t) {
              return k.get(e, void 0, t, 'script');
            },
          }),
          k.each(['get', 'post'], function(e, i) {
            k[i] = function(e, t, n, r) {
              return (
                y(t) && ((r = r || n), (n = t), (t = void 0)),
                k.ajax(
                  k.extend(
                    { url: e, type: i, dataType: r, data: t, success: n },
                    k.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          (k._evalUrl = function(e, t) {
            return k.ajax({
              url: e,
              type: 'GET',
              dataType: 'script',
              cache: !0,
              async: !1,
              global: !1,
              converters: { 'text script': function() {} },
              dataFilter: function(e) {
                k.globalEval(e, t);
              },
            });
          }),
          k.fn.extend({
            wrapAll: function(e) {
              var t;
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = k(e, this[0].ownerDocument)
                    .eq(0)
                    .clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function() {
                      var e = this;
                      while (e.firstElementChild) e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function(n) {
              return y(n)
                ? this.each(function(e) {
                    k(this).wrapInner(n.call(this, e));
                  })
                : this.each(function() {
                    var e = k(this),
                      t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n);
                  });
            },
            wrap: function(t) {
              var n = y(t);
              return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t);
              });
            },
            unwrap: function(e) {
              return (
                this.parent(e)
                  .not('body')
                  .each(function() {
                    k(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (k.expr.pseudos.hidden = function(e) {
            return !k.expr.pseudos.visible(e);
          }),
          (k.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }),
          (k.ajaxSettings.xhr = function() {
            try {
              return new C.XMLHttpRequest();
            } catch (e) {}
          });
        var Zt = { 0: 200, 1223: 204 },
          en = k.ajaxSettings.xhr();
        (v.cors = !!en && 'withCredentials' in en),
          (v.ajax = en = !!en),
          k.ajaxTransport(function(i) {
            var o, a;
            if (v.cors || (en && !i.crossDomain))
              return {
                send: function(e, t) {
                  var n,
                    r = i.xhr();
                  if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields))
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                  for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                  i.crossDomain ||
                    e['X-Requested-With'] ||
                    (e['X-Requested-With'] = 'XMLHttpRequest'),
                  e))
                    r.setRequestHeader(n, e[n]);
                  (o = function(e) {
                    return function() {
                      o &&
                        ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                        'abort' === e
                          ? r.abort()
                          : 'error' === e
                          ? 'number' !== typeof r.status
                            ? t(0, 'error')
                            : t(r.status, r.statusText)
                          : t(
                              Zt[r.status] || r.status,
                              r.statusText,
                              'text' !== (r.responseType || 'text') ||
                                'string' !== typeof r.responseText
                                ? { binary: r.response }
                                : { text: r.responseText },
                              r.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (r.onload = o()),
                    (a = r.onerror = r.ontimeout = o('error')),
                    void 0 !== r.onabort
                      ? (r.onabort = a)
                      : (r.onreadystatechange = function() {
                          4 === r.readyState &&
                            C.setTimeout(function() {
                              o && a();
                            });
                        }),
                    (o = o('abort'));
                  try {
                    r.send((i.hasContent && i.data) || null);
                  } catch (e) {
                    if (o) throw e;
                  }
                },
                abort: function() {
                  o && o();
                },
              };
          }),
          k.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          k.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              'text script': function(e) {
                return k.globalEval(e), e;
              },
            },
          }),
          k.ajaxPrefilter('script', function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
          }),
          k.ajaxTransport('script', function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
              return {
                send: function(e, t) {
                  (r = k('<script>')
                    .attr(n.scriptAttrs || {})
                    .prop({ charset: n.scriptCharset, src: n.url })
                    .on(
                      'load error',
                      (i = function(e) {
                        r.remove(), (i = null), e && t('error' === e.type ? 404 : 200, e.type);
                      })
                    )),
                    E.head.appendChild(r[0]);
                },
                abort: function() {
                  i && i();
                },
              };
          });
        var tn = [],
          nn = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function() {
            var e = tn.pop() || k.expando + '_' + jt++;
            return (this[e] = !0), e;
          },
        }),
          k.ajaxPrefilter('json jsonp', function(e, t, n) {
            var r,
              i,
              o,
              a =
                !1 !== e.jsonp &&
                (nn.test(e.url)
                  ? 'url'
                  : 'string' === typeof e.data &&
                    0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                    nn.test(e.data) &&
                    'data');
            if (a || 'jsonp' === e.dataTypes[0])
              return (
                (r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(nn, '$1' + r))
                  : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
                (e.converters['script json'] = function() {
                  return o || k.error(r + ' was not called'), o[0];
                }),
                (e.dataTypes[0] = 'json'),
                (i = C[r]),
                (C[r] = function() {
                  o = arguments;
                }),
                n.always(function() {
                  void 0 === i ? k(C).removeProp(r) : (C[r] = i),
                    e[r] && ((e.jsonpCallback = t.jsonpCallback), tn.push(r)),
                    o && y(i) && i(o[0]),
                    (o = i = void 0);
                }),
                'script'
              );
          }),
          (v.createHTMLDocument = (function() {
            var e = E.implementation.createHTMLDocument('').body;
            return (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length;
          })()),
          (k.parseHTML = function(e, t, n) {
            return 'string' !== typeof e
              ? []
              : ('boolean' === typeof t && ((n = t), (t = !1)),
                t ||
                  (v.createHTMLDocument
                    ? ((t = E.implementation.createHTMLDocument('')),
                      (r = t.createElement('base')),
                      (r.href = E.location.href),
                      t.head.appendChild(r))
                    : (t = E)),
                (i = D.exec(e)),
                (o = !n && []),
                i
                  ? [t.createElement(i[1])]
                  : ((i = Ce([e], t, o)),
                    o && o.length && k(o).remove(),
                    k.merge([], i.childNodes)));
            var r, i, o;
          }),
          (k.fn.load = function(e, t, n) {
            var r,
              i,
              o,
              a = this,
              s = e.indexOf(' ');
            return (
              s > -1 && ((r = Ct(e.slice(s))), (e = e.slice(0, s))),
              y(t) ? ((n = t), (t = void 0)) : t && 'object' === typeof t && (i = 'POST'),
              a.length > 0 &&
                k
                  .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                  .done(function(e) {
                    (o = arguments),
                      a.html(
                        r
                          ? k('<div>')
                              .append(k.parseHTML(e))
                              .find(r)
                          : e
                      );
                  })
                  .always(
                    n &&
                      function(e, t) {
                        a.each(function() {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          k.each(
            ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
            function(e, t) {
              k.fn[t] = function(e) {
                return this.on(t, e);
              };
            }
          ),
          (k.expr.pseudos.animated = function(t) {
            return k.grep(k.timers, function(e) {
              return t === e.elem;
            }).length;
          }),
          (k.offset = {
            setOffset: function(e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = k.css(e, 'position'),
                f = k(e),
                p = {};
              'static' === c && (e.style.position = 'relative'),
                (s = f.offset()),
                (o = k.css(e, 'top')),
                (u = k.css(e, 'left')),
                (l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1),
                (i = l
                  ? ((r = f.position()), (a = r.top), r.left)
                  : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
                y(t) && (t = t.call(e, n, k.extend({}, s))),
                null != t.top && (p.top = t.top - s.top + a),
                null != t.left && (p.left = t.left - s.left + i),
                'using' in t ? t.using.call(e, p) : f.css(p);
            },
          }),
          k.fn.extend({
            offset: function(t) {
              if (arguments.length)
                return void 0 === t
                  ? this
                  : this.each(function(e) {
                      k.offset.setOffset(this, t, e);
                    });
              var e,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((e = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function() {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ('fixed' === k.css(r, 'position')) t = r.getBoundingClientRect();
                else {
                  (t = this.offset()),
                    (n = r.ownerDocument),
                    (e = r.offsetParent || n.documentElement);
                  while (
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    'static' === k.css(e, 'position')
                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    ((i = k(e).offset()),
                    (i.top += k.css(e, 'borderTopWidth', !0)),
                    (i.left += k.css(e, 'borderLeftWidth', !0)));
                }
                return {
                  top: t.top - i.top - k.css(r, 'marginTop', !0),
                  left: t.left - i.left - k.css(r, 'marginLeft', !0),
                };
              }
            },
            offsetParent: function() {
              return this.map(function() {
                var e = this.offsetParent;
                while (e && 'static' === k.css(e, 'position')) e = e.offsetParent;
                return e || se;
              });
            },
          }),
          k.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(t, i) {
            var o = 'pageYOffset' === i;
            k.fn[t] = function(e) {
              return U(
                this,
                function(e, t, n) {
                  var r;
                  if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n))
                    return r ? r[i] : e[t];
                  r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                },
                t,
                e,
                arguments.length
              );
            };
          }),
          k.each(['top', 'left'], function(e, n) {
            k.cssHooks[n] = Ge(v.pixelPosition, function(e, t) {
              if (t) return (t = Xe(e, n)), ze.test(t) ? k(e).position()[n] + 'px' : t;
            });
          }),
          k.each({ Height: 'height', Width: 'width' }, function(a, s) {
            k.each({ padding: 'inner' + a, content: s, '': 'outer' + a }, function(r, o) {
              k.fn[o] = function(e, t) {
                var n = arguments.length && (r || 'boolean' !== typeof e),
                  i = r || (!0 === e || !0 === t ? 'margin' : 'border');
                return U(
                  this,
                  function(e, t, n) {
                    var r;
                    return x(e)
                      ? 0 === o.indexOf('outer')
                        ? e['inner' + a]
                        : e.document.documentElement['client' + a]
                      : 9 === e.nodeType
                      ? ((r = e.documentElement),
                        Math.max(
                          e.body['scroll' + a],
                          r['scroll' + a],
                          e.body['offset' + a],
                          r['offset' + a],
                          r['client' + a]
                        ))
                      : void 0 === n
                      ? k.css(e, t, i)
                      : k.style(e, t, n, i);
                  },
                  s,
                  n ? e : void 0,
                  n
                );
              };
            });
          }),
          k.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
              ' '
            ),
            function(e, n) {
              k.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
              };
            }
          ),
          k.fn.extend({
            hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          k.fn.extend({
            bind: function(e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
              return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
              return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
            },
          }),
          (k.proxy = function(e, t) {
            var n, r, i;
            if (('string' === typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = s.call(arguments, 2)),
                (i = function() {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || k.guid++),
                i
              );
          }),
          (k.holdReady = function(e) {
            e ? k.readyWait++ : k.ready(!0);
          }),
          (k.isArray = Array.isArray),
          (k.parseJSON = JSON.parse),
          (k.nodeName = N),
          (k.isFunction = y),
          (k.isWindow = x),
          (k.camelCase = Y),
          (k.type = w),
          (k.now = Date.now),
          (k.isNumeric = function(e) {
            var t = k.type(e);
            return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
          }),
          (un = []),
          (ln = function() {
            return k;
          }.apply(sn, un)),
          void 0 === ln || (an.exports = ln);
        var rn = C.jQuery,
          on = C.$;
        return (
          (k.noConflict = function(e) {
            return C.$ === k && (C.$ = on), e && C.jQuery === k && (C.jQuery = rn), k;
          }),
          e || (C.jQuery = C.$ = k),
          k
        );
      });
    },
    SVHM: function(e, t, n) {
      'use strict';
      n.r(t);
      var r,
        i = n('2Taf'),
        a = n.n(i),
        o = n('vZ4D'),
        s = n.n(o),
        u = n('l4Ni'),
        l = n.n(u),
        c = n('ujKo'),
        f = n.n(c),
        p = n('MhPg'),
        d = n.n(p),
        h = n('EVdn'),
        g = n.n(h),
        m = n('q1tI'),
        v = n.n(m),
        y = n('yP6+'),
        x = n('cQSq'),
        b = n.n(x),
        w = n('1Gbu'),
        T = n.n(w);
      function C(n) {
        b.a.DataView;
        var r = {
            time: { type: 'timeCat', nice: !1, range: [0, 1] },
            trend: { values: ['\u4e0a\u6da8', '\u4e0b\u8dcc'] },
            volumn: { alias: '\u6210\u4ea4\u91cf' },
            start: { alias: '\u5f00\u76d8\u4ef7' },
            end: { alias: '\u6536\u76d8\u4ef7' },
            max: { alias: '\u6700\u9ad8\u4ef7' },
            min: { alias: '\u6700\u4f4e\u4ef7' },
            range: { alias: '\u80a1\u7968\u4ef7\u683c' },
          },
          i = new b.a({ state: { start: '2015-04-07', end: '2015-07-28' } }),
          o = i.createView();
        o.source(n)
          .transform({
            type: 'filter',
            callback: function(e) {
              var t = e.time;
              return t <= i.state.end && t >= i.state.start;
            },
          })
          .transform({
            type: 'map',
            callback: function(e) {
              return (
                (e.trend = e.start <= e.end ? '\u4e0a\u6da8' : '\u4e0b\u8dcc'),
                (e.range = [e.start, e.end, e.max, e.min]),
                e
              );
            },
          });
        var e = (function(e) {
          function t() {
            return a()(this, t), l()(this, f()(t).apply(this, arguments));
          }
          return (
            d()(t, e),
            s()(t, [
              {
                key: 'onChange',
                value: function(e) {
                  var t = e.startText,
                    n = e.endText;
                  i.setState('start', t), i.setState('end', n);
                },
              },
              {
                key: 'render',
                value: function() {
                  return (
                    console.log('DV:', o),
                    v.a.createElement(
                      'div',
                      null,
                      v.a.createElement(
                        y['Chart'],
                        {
                          height: window.innerHeight - 50,
                          animate: !1,
                          padding: [10, 40, 40, 40],
                          data: o,
                          scale: r,
                          forceFit: !0,
                        },
                        v.a.createElement(y['Legend'], { offset: 20 }),
                        v.a.createElement(y['Tooltip'], {
                          showTitle: !1,
                          itemTpl:
                            '<li data-index={index}><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}{value}</li>',
                        }),
                        v.a.createElement(
                          y['View'],
                          { end: { x: 1, y: 0.5 }, data: o },
                          v.a.createElement(y['Axis'], { name: 'time' }),
                          v.a.createElement(y['Axis'], { name: 'range' }),
                          v.a.createElement(y['Geom'], {
                            type: 'line',
                            position: 'time*range',
                            color: [
                              'trend',
                              function(e) {
                                return '\u4e0a\u6da8' === e
                                  ? '#f04864'
                                  : '\u4e0b\u8dcc' === e
                                  ? '#2fc25b'
                                  : void 0;
                              },
                            ],
                            tooltip: [
                              'time*start*end*max*min',
                              function(e, t, n, r, i) {
                                return {
                                  name: e,
                                  value:
                                    '<br><span style="padding-left: 16px">\u5f00\u76d8\u4ef7\uff1a' +
                                    t +
                                    '</span><br/><span style="padding-left: 16px">\u6536\u76d8\u4ef7\uff1a' +
                                    n +
                                    '</span><br/><span style="padding-left: 16px">\u6700\u9ad8\u4ef7\uff1a' +
                                    r +
                                    '</span><br/><span style="padding-left: 16px">\u6700\u4f4e\u4ef7\uff1a' +
                                    i +
                                    '</span>',
                                };
                              },
                            ],
                          })
                        ),
                        v.a.createElement(
                          y['View'],
                          {
                            start: { x: 0, y: 0.65 },
                            data: o,
                            scale: { volumn: { tickCount: 2 } },
                          },
                          v.a.createElement(y['Axis'], {
                            name: 'volumn',
                            label: {
                              formatter: function(e) {
                                return parseInt(e / 1e3, 10) + 'k';
                              },
                            },
                          }),
                          v.a.createElement(y['Axis'], {
                            name: 'time',
                            tickLine: null,
                            label: null,
                          }),
                          v.a.createElement(y['Geom'], {
                            type: 'interval',
                            position: 'time*volumn',
                            color: [
                              'trend',
                              function(e) {
                                return '\u4e0a\u6da8' === e
                                  ? '#f04864'
                                  : '\u4e0b\u8dcc' === e
                                  ? '#2fc25b'
                                  : void 0;
                              },
                            ],
                            tooltip: [
                              'time*volumn',
                              function(e, t) {
                                return {
                                  name: e,
                                  value:
                                    '<br/><span style="padding-left: 16px">\u6210\u4ea4\u91cf\uff1a' +
                                    t +
                                    '</span><br/>',
                                };
                              },
                            ],
                            shape: 'candle',
                          })
                        )
                      ),
                      v.a.createElement(
                        'div',
                        null,
                        v.a.createElement(T.a, {
                          padding: [20, 40, 20, 40],
                          width: 'auto',
                          height: 26,
                          start: i.state.start,
                          end: i.state.end,
                          xAxis: 'time',
                          yAxis: 'volumn',
                          scales: { time: { type: 'timeCat', nice: !1 } },
                          data: n,
                          onChange: this.onChange.bind(this),
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(v.a.Component);
        return e;
      }
      g.a.ajax({
        url:
          'https://alifd.alibabausercontent.com/materials/@bizcharts/candlestick-basic/0.3.2/mock.json',
        async: !1,
        success: function(e) {
          r = e;
        },
      });
      var E = (function(e) {
        function t() {
          return a()(this, t), l()(this, f()(t).apply(this, arguments));
        }
        return (
          d()(t, e),
          s()(t, [
            {
              key: 'render',
              value: function() {
                var e = C(r);
                return v.a.createElement('div', null, v.a.createElement(e, null));
              },
            },
          ]),
          t
        );
      })(v.a.Component);
      t['default'] = E;
    },
  },
]);
