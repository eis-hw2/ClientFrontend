(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [19],
  {
    GsTM: function(r, e, n) {
      'use strict';
      n.r(e);
      n('IzEo');
      var t,
        a,
        i,
        o = n('bx4M'),
        c = (n('T2oS'), n('W9HT')),
        u = (n('+L6B'), n('2/Rp')),
        g = n('2Taf'),
        l = n.n(g),
        s = n('vZ4D'),
        p = n.n(s),
        d = n('l4Ni'),
        f = n.n(d),
        E = n('ujKo'),
        y = n.n(E),
        h = n('MhPg'),
        m = n.n(h),
        w = n('q1tI'),
        k = n.n(w),
        v = n('MuoO'),
        C = n('uUKN'),
        b = n.n(C),
        M = ((t = Object(v['connect'])(function(r) {
          return { isloading: r.error.isloading };
        })),
        t(
          ((i = (function(r) {
            function i() {
              var r, n;
              l()(this, i);
              for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
              return (
                (n = f()(this, (r = y()(i)).call.apply(r, [this].concat(t)))),
                (n.state = { isloading: !1 }),
                (n.triggerError = function(r) {
                  n.setState({ isloading: !0 });
                  var e = n.props.dispatch;
                  e({ type: 'error/query', payload: { code: r } });
                }),
                n
              );
            }
            return (
              m()(i, r),
              p()(i, [
                {
                  key: 'render',
                  value: function() {
                    var r = this,
                      e = this.state.isloading;
                    return k.a.createElement(
                      o['a'],
                      null,
                      k.a.createElement(
                        c['a'],
                        { spinning: e, wrapperClassName: b.a.trigger },
                        k.a.createElement(
                          u['a'],
                          {
                            type: 'danger',
                            onClick: function() {
                              return r.triggerError(401);
                            },
                          },
                          '\u89e6\u53d1401'
                        ),
                        k.a.createElement(
                          u['a'],
                          {
                            type: 'danger',
                            onClick: function() {
                              return r.triggerError(403);
                            },
                          },
                          '\u89e6\u53d1403'
                        ),
                        k.a.createElement(
                          u['a'],
                          {
                            type: 'danger',
                            onClick: function() {
                              return r.triggerError(500);
                            },
                          },
                          '\u89e6\u53d1500'
                        ),
                        k.a.createElement(
                          u['a'],
                          {
                            type: 'danger',
                            onClick: function() {
                              return r.triggerError(404);
                            },
                          },
                          '\u89e6\u53d1404'
                        )
                      )
                    );
                  },
                },
              ]),
              i
            );
          })(w['PureComponent'])),
          (a = i))
        ) || a);
      e['default'] = M;
    },
    uUKN: function(r, e, n) {
      r.exports = { trigger: 'antd-pro-pages-exception-style-trigger' };
    },
  },
]);
