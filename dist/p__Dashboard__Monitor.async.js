(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    '6p3G': function(e, t, a) {
      'use strict';
      a.r(t);
      a('IzEo');
      var r = a('bx4M'),
        i = (a('5Dmo'), a('3S7+')),
        o = (a('14J3'), a('BMrR')),
        l = (a('jCWc'), a('kPKH')),
        n = a('2Taf'),
        s = a.n(n),
        m = a('vZ4D'),
        c = a.n(m),
        d = a('l4Ni'),
        u = a.n(d),
        p = a('ujKo'),
        g = a.n(p),
        f = a('MhPg'),
        h = a.n(f),
        E = a('q1tI'),
        v = a.n(E),
        y = a('MuoO'),
        M = a('Y2fQ'),
        T = a('KTCi'),
        b = a('LOQS'),
        x = a('Y/ft'),
        F = a.n(x);
      function C(e) {
        return 1 * e < 10 ? '0'.concat(e) : e;
      }
      var D = function(e) {
          var t = 0,
            a = 0;
          try {
            a =
              '[object Date]' === Object.prototype.toString.call(e.target)
                ? e.target.getTime()
                : new Date(e.target).getTime();
          } catch (e) {
            throw new Error('invalid target prop', e);
          }
          return (t = a - new Date().getTime()), { lastTime: t < 0 ? 0 : t };
        },
        k = (function(e) {
          function r(e) {
            var a;
            s()(this, r),
              (a = u()(this, g()(r).call(this, e))),
              (a.timer = 0),
              (a.interval = 1e3),
              (a.defaultFormat = function(e) {
                var t = 36e5,
                  a = 6e4,
                  n = Math.floor(e / t),
                  r = Math.floor((e - n * t) / a),
                  i = Math.floor((e - n * t - r * a) / 1e3);
                return v.a.createElement('span', null, C(n), ':', C(r), ':', C(i));
              }),
              (a.tick = function() {
                var e = a.props.onEnd,
                  t = a.state.lastTime;
                a.timer = setTimeout(function() {
                  t < a.interval
                    ? (clearTimeout(a.timer),
                      a.setState({ lastTime: 0 }, function() {
                        e && e();
                      }))
                    : ((t -= a.interval),
                      a.setState({ lastTime: t }, function() {
                        a.tick();
                      }));
                }, a.interval);
              });
            var t = D(e),
              n = t.lastTime;
            return (a.state = { lastTime: n }), a;
          }
          return (
            h()(r, e),
            c()(
              r,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.tick();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function(e) {
                    var t = this.props.target;
                    t !== e.target && (clearTimeout(this.timer), this.tick());
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    clearTimeout(this.timer);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.format,
                      a = void 0 === t ? this.defaultFormat : t,
                      n = (e.onEnd, F()(e, ['format', 'onEnd'])),
                      r = this.state.lastTime,
                      i = a(r);
                    return v.a.createElement('span', n, i);
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    var a = D(e),
                      n = a.lastTime;
                    return t.lastTime !== n ? { lastTime: n } : null;
                  },
                },
              ]
            ),
            r
          );
        })(E['Component']),
        w = k,
        S = a('gWZ8'),
        N = a.n(S),
        W = a('cHiq'),
        B = a.n(W);
      function L(e) {
        return 1 * e < 10 ? '0'.concat(e) : e;
      }
      function j() {
        for (var e = [], t = 0; t < 24; t += 1)
          e.push({ x: ''.concat(L(t), ':00'), y: Math.floor(200 * Math.random()) + 50 * t });
        return e;
      }
      var A,
        P,
        R,
        z = (function(e) {
          function i() {
            var e, t;
            s()(this, i);
            for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
            return (
              (t = u()(this, (e = g()(i)).call.apply(e, [this].concat(n)))),
              (t.state = { activeData: j() }),
              (t.loopData = function() {
                t.timer = setTimeout(function() {
                  t.setState({ activeData: j() }, function() {
                    t.loopData();
                  });
                }, 500);
              }),
              t
            );
          }
          return (
            h()(i, e),
            c()(i, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.loopData();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearTimeout(this.timer), cancelAnimationFrame(this.requestRef);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.activeData,
                    t = void 0 === e ? [] : e;
                  return v.a.createElement(
                    'div',
                    { className: B.a.activeChart },
                    v.a.createElement(b['a'], {
                      subTitle: '\u76ee\u6807\u8bc4\u4f30',
                      total: '\u6709\u671b\u8fbe\u5230\u9884\u671f',
                    }),
                    v.a.createElement(
                      'div',
                      { style: { marginTop: 32 } },
                      v.a.createElement(T['d'], {
                        animate: !1,
                        line: !0,
                        borderWidth: 2,
                        height: 84,
                        scale: { y: { tickCount: 3 } },
                        yAxis: { tickLine: !1, label: !1, title: !1, line: !1 },
                        data: t,
                      })
                    ),
                    t &&
                      v.a.createElement(
                        'div',
                        null,
                        v.a.createElement(
                          'div',
                          { className: B.a.activeChartGrid },
                          v.a.createElement(
                            'p',
                            null,
                            N()(t).sort()[t.length - 1].y + 200,
                            ' \u4ebf\u5143'
                          ),
                          v.a.createElement(
                            'p',
                            null,
                            N()(t).sort()[Math.floor(t.length / 2)].y,
                            ' \u4ebf\u5143'
                          )
                        ),
                        v.a.createElement(
                          'div',
                          { className: B.a.dashedLine },
                          v.a.createElement('div', { className: B.a.line })
                        ),
                        v.a.createElement(
                          'div',
                          { className: B.a.dashedLine },
                          v.a.createElement('div', { className: B.a.line })
                        )
                      ),
                    t &&
                      v.a.createElement(
                        'div',
                        { className: B.a.activeChartLegend },
                        v.a.createElement('span', null, '00:00'),
                        v.a.createElement('span', null, t[Math.floor(t.length / 2)].x),
                        v.a.createElement('span', null, t[t.length - 1].x)
                      )
                  );
                },
              },
            ]),
            i
          );
        })(E['Component']),
        G = a('ZhIB'),
        H = a.n(G),
        O = a('v99g'),
        q = a('HZnN'),
        K = a('XFmb'),
        U = a.n(K),
        Z = q['a'].Secured,
        I = new Date().getTime() + 39e5,
        J = new Promise(function(e) {
          setTimeout(function() {
            return e();
          }, 300);
        }),
        X = ((A = Z(J)),
        (P = Object(y['connect'])(function(e) {
          var t = e.monitor,
            a = e.loading;
          return { monitor: t, loading: a.models.monitor };
        })),
        A(
          (R =
            P(
              (R = (function(e) {
                function t() {
                  return s()(this, t), u()(this, g()(t).apply(this, arguments));
                }
                return (
                  h()(t, e),
                  c()(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        var e = this.props.dispatch;
                        e({ type: 'monitor/fetchTags' });
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props,
                          t = e.monitor,
                          a = e.loading,
                          n = t.tags;
                        return v.a.createElement(
                          O['a'],
                          null,
                          v.a.createElement(
                            o['a'],
                            { gutter: 24 },
                            v.a.createElement(
                              l['a'],
                              {
                                xl: 18,
                                lg: 24,
                                md: 24,
                                sm: 24,
                                xs: 24,
                                style: { marginBottom: 24 },
                              },
                              v.a.createElement(
                                r['a'],
                                {
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.trading-activity',
                                    defaultMessage: 'Real-Time Trading Activity',
                                  }),
                                  bordered: !1,
                                },
                                v.a.createElement(
                                  o['a'],
                                  null,
                                  v.a.createElement(
                                    l['a'],
                                    { md: 6, sm: 12, xs: 24 },
                                    v.a.createElement(b['a'], {
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.total-transactions',
                                        defaultMessage: 'Total transactions today',
                                      }),
                                      suffix: '\u5143',
                                      total: H()(124543233).format('0,0'),
                                    })
                                  ),
                                  v.a.createElement(
                                    l['a'],
                                    { md: 6, sm: 12, xs: 24 },
                                    v.a.createElement(b['a'], {
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.sales-target',
                                        defaultMessage: 'Sales target completion rate',
                                      }),
                                      total: '92%',
                                    })
                                  ),
                                  v.a.createElement(
                                    l['a'],
                                    { md: 6, sm: 12, xs: 24 },
                                    v.a.createElement(b['a'], {
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.remaining-time',
                                        defaultMessage: 'Remaining time of activity',
                                      }),
                                      total: v.a.createElement(w, { target: I }),
                                    })
                                  ),
                                  v.a.createElement(
                                    l['a'],
                                    { md: 6, sm: 12, xs: 24 },
                                    v.a.createElement(b['a'], {
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.total-transactions-per-second',
                                        defaultMessage: 'Total transactions per second',
                                      }),
                                      suffix: '\u5143',
                                      total: H()(234).format('0,0'),
                                    })
                                  )
                                ),
                                v.a.createElement(
                                  'div',
                                  { className: U.a.mapChart },
                                  v.a.createElement(
                                    i['a'],
                                    {
                                      title: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.waiting-for-implementation',
                                        defaultMessage: 'Waiting for implementation',
                                      }),
                                    },
                                    v.a.createElement('img', {
                                      src:
                                        'https://gw.alipayobjects.com/zos/antfincdn/h%24wFbzuuzz/HBWnDEUXCnGnGrRfrpKa.png',
                                      alt: 'map',
                                    })
                                  )
                                )
                              )
                            ),
                            v.a.createElement(
                              l['a'],
                              { xl: 6, lg: 24, md: 24, sm: 24, xs: 24 },
                              v.a.createElement(
                                r['a'],
                                {
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.activity-forecast',
                                    defaultMessage: 'Activity forecast',
                                  }),
                                  style: { marginBottom: 24 },
                                  bordered: !1,
                                },
                                v.a.createElement(z, null)
                              ),
                              v.a.createElement(
                                r['a'],
                                {
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.efficiency',
                                    defaultMessage: 'Efficiency',
                                  }),
                                  style: { marginBottom: 24 },
                                  bodyStyle: { textAlign: 'center' },
                                  bordered: !1,
                                },
                                v.a.createElement(T['c'], {
                                  title: Object(M['formatMessage'])({
                                    id: 'app.monitor.ratio',
                                    defaultMessage: 'Ratio',
                                  }),
                                  height: 180,
                                  percent: 87,
                                })
                              )
                            )
                          ),
                          v.a.createElement(
                            o['a'],
                            { gutter: 24 },
                            v.a.createElement(
                              l['a'],
                              { xl: 12, lg: 24, sm: 24, xs: 24, style: { marginBottom: 24 } },
                              v.a.createElement(
                                r['a'],
                                {
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.proportion-per-category',
                                    defaultMessage: 'Proportion Per Category',
                                  }),
                                  bordered: !1,
                                  className: U.a.pieCard,
                                },
                                v.a.createElement(
                                  o['a'],
                                  { style: { padding: '16px 0' } },
                                  v.a.createElement(
                                    l['a'],
                                    { span: 8 },
                                    v.a.createElement(T['e'], {
                                      animate: !1,
                                      percent: 28,
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.fast-food',
                                        defaultMessage: 'Fast food',
                                      }),
                                      total: '28%',
                                      height: 128,
                                      lineWidth: 2,
                                    })
                                  ),
                                  v.a.createElement(
                                    l['a'],
                                    { span: 8 },
                                    v.a.createElement(T['e'], {
                                      animate: !1,
                                      color: '#5DDECF',
                                      percent: 22,
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.western-food',
                                        defaultMessage: 'Western food',
                                      }),
                                      total: '22%',
                                      height: 128,
                                      lineWidth: 2,
                                    })
                                  ),
                                  v.a.createElement(
                                    l['a'],
                                    { span: 8 },
                                    v.a.createElement(T['e'], {
                                      animate: !1,
                                      color: '#2FC25B',
                                      percent: 32,
                                      subTitle: v.a.createElement(M['FormattedMessage'], {
                                        id: 'app.monitor.hot-pot',
                                        defaultMessage: 'Hot pot',
                                      }),
                                      total: '32%',
                                      height: 128,
                                      lineWidth: 2,
                                    })
                                  )
                                )
                              )
                            ),
                            v.a.createElement(
                              l['a'],
                              { xl: 6, lg: 12, sm: 24, xs: 24, style: { marginBottom: 24 } },
                              v.a.createElement(
                                r['a'],
                                {
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.popular-searches',
                                    defaultMessage: 'Popular Searches',
                                  }),
                                  loading: a,
                                  bordered: !1,
                                  bodyStyle: { overflow: 'hidden' },
                                },
                                v.a.createElement(T['g'], { data: n, height: 161 })
                              )
                            ),
                            v.a.createElement(
                              l['a'],
                              { xl: 6, lg: 12, sm: 24, xs: 24, style: { marginBottom: 24 } },
                              v.a.createElement(
                                r['a'],
                                {
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.resource-surplus',
                                    defaultMessage: 'Resource Surplus',
                                  }),
                                  bodyStyle: { textAlign: 'center', fontSize: 0 },
                                  bordered: !1,
                                },
                                v.a.createElement(T['j'], {
                                  height: 161,
                                  title: v.a.createElement(M['FormattedMessage'], {
                                    id: 'app.monitor.fund-surplus',
                                    defaultMessage: 'Fund Surplus',
                                  }),
                                  percent: 34,
                                })
                              )
                            )
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(E['Component']))
            ) || R)
        ) || R);
      t['default'] = X;
    },
    XFmb: function(e, t, a) {
      e.exports = {
        mapChart: 'antd-pro-pages-dashboard-monitor-mapChart',
        pieCard: 'antd-pro-pages-dashboard-monitor-pieCard',
      };
    },
    cHiq: function(e, t, a) {
      e.exports = {
        activeChart: 'antd-pro-components-active-chart-index-activeChart',
        activeChartGrid: 'antd-pro-components-active-chart-index-activeChartGrid',
        activeChartLegend: 'antd-pro-components-active-chart-index-activeChartLegend',
        dashedLine: 'antd-pro-components-active-chart-index-dashedLine',
        line: 'antd-pro-components-active-chart-index-line',
      };
    },
  },
]);
