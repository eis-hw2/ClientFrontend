(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [40],
  {
    Y65U: function(e, a, t) {
      'use strict';
      t.r(a);
      t('14J3');
      var l = t('BMrR'),
        r = (t('jCWc'), t('kPKH')),
        n = (t('5Dmo'), t('3S7+')),
        s = (t('Pwec'), t('CtXQ')),
        c = t('q1tI'),
        i = t.n(c),
        o = t('Y2fQ'),
        m = t('lVjH'),
        d = t.n(m),
        g = t('KTCi'),
        p = t('YR7N'),
        E = t('ZhIB'),
        u = t.n(E),
        y = t('Umy/'),
        f = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, style: { marginBottom: 24 } },
        M = Object(c['memo'])(function(e) {
          var a = e.loading,
            t = e.quotation;
          return i.a.createElement(
            l['a'],
            { gutter: 24 },
            i.a.createElement(
              r['a'],
              f,
              i.a.createElement(
                g['a'],
                {
                  bordered: !1,
                  title: i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.total-sales',
                    defaultMessage: 'Current Price',
                  }),
                  action: i.a.createElement(
                    n['a'],
                    {
                      title: i.a.createElement(o['FormattedMessage'], {
                        id: 'app.analysis.introduce',
                        defaultMessage: 'Current Price',
                      }),
                    },
                    i.a.createElement(s['a'], { type: 'info-circle-o' })
                  ),
                  loading: a,
                  total: function() {
                    return i.a.createElement(y['a'], null, t.currentPrice);
                  },
                  footer: i.a.createElement(g['b'], {
                    label: i.a.createElement(o['FormattedMessage'], {
                      id: 'app.analysis.day-sales',
                      defaultMessage: 'Daily Sales',
                    }),
                    value: '\uffe5'.concat(u()(t.currentPrice).format('0,0')),
                  }),
                  contentHeight: 46,
                },
                i.a.createElement(
                  p['a'],
                  { flag: 'up', style: { marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.changePrice',
                    defaultMessage: 'Weekly Changes',
                  }),
                  i.a.createElement('span', { className: d.a.trendText }, t.changePrice)
                ),
                i.a.createElement(
                  p['a'],
                  { flag: 'up', style: { marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.changePercent',
                    defaultMessage: 'Weekly Changes',
                  }),
                  i.a.createElement('span', { className: d.a.trendText }, t.changePercent + '%')
                )
              )
            ),
            i.a.createElement(
              r['a'],
              f,
              i.a.createElement(
                g['a'],
                {
                  bordered: !1,
                  title: i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.op',
                    defaultMessage: 'Open Price',
                  }),
                  action: i.a.createElement(
                    n['a'],
                    {
                      title: i.a.createElement(o['FormattedMessage'], {
                        id: 'app.analysis.op',
                        defaultMessage: 'Open Price',
                      }),
                    },
                    i.a.createElement(s['a'], { type: 'info-circle-o' })
                  ),
                  loading: a,
                  total: function() {
                    return i.a.createElement(y['a'], null, t.openPrice);
                  },
                  footer: i.a.createElement(g['b'], {
                    label: i.a.createElement(o['FormattedMessage'], {
                      id: 'app.analysis.mp',
                      defaultMessage: 'Mean Price',
                    }),
                    value: '\uffe5'.concat(u()((t.highPrice + t.lowPrice) / 1.8).format('0,0')),
                  }),
                  contentHeight: 46,
                },
                i.a.createElement(
                  p['a'],
                  { flag: 'up', style: { color: 'red', marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.hl',
                    defaultMessage: 'High Limit',
                  }),
                  i.a.createElement(
                    'span',
                    { className: d.a.trendText, style: { color: 'red' } },
                    '\uffe5' + (10 * t.openPrice * 11) / 100
                  )
                ),
                i.a.createElement(
                  p['a'],
                  { flag: 'down', style: { color: 'green', marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.ll ',
                    defaultMessage: 'Low Limit',
                  }),
                  i.a.createElement(
                    'span',
                    { className: d.a.trendText, style: { color: 'green' } },
                    '\uffe5' + (10 * t.openPrice * 9) / 100
                  )
                )
              )
            ),
            i.a.createElement(
              r['a'],
              f,
              i.a.createElement(
                g['a'],
                {
                  bordered: !1,
                  title: i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.pf',
                    defaultMessage: 'Price Fluctuation',
                  }),
                  action: i.a.createElement(
                    n['a'],
                    {
                      title: i.a.createElement(o['FormattedMessage'], {
                        id: 'app.analysis.of',
                        defaultMessage: 'Price Fluctuation',
                      }),
                    },
                    i.a.createElement(s['a'], { type: 'info-circle-o' })
                  ),
                  loading: a,
                  total: function() {
                    return i.a.createElement(y['a'], null, '\uffe5' + (t.highPrice - t.lowPrice));
                  },
                  footer: i.a.createElement(g['b'], {
                    label: i.a.createElement(o['FormattedMessage'], {
                      id: 'app.analysis.pfp',
                      defaultMessage: 'Daily Sales',
                    }),
                    value: '%'.concat(
                      u()((100 * (t.highPrice - t.lowPrice)) / t.openPrice).format('0,0')
                    ),
                  }),
                  contentHeight: 46,
                },
                i.a.createElement(
                  p['a'],
                  { style: { color: 'red', marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.hp',
                    defaultMessage: 'Weekly Changes',
                  }),
                  i.a.createElement(
                    'span',
                    { className: d.a.trendText, style: { color: 'red' } },
                    '\uffe5' + t.highPrice
                  )
                ),
                i.a.createElement(
                  p['a'],
                  { style: { color: 'green', marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.lp',
                    defaultMessage: 'Weekly Changes',
                  }),
                  i.a.createElement(
                    'span',
                    { className: d.a.trendText, style: { color: 'green' } },
                    '\uffe5' + t.lowPrice
                  )
                )
              )
            ),
            i.a.createElement(
              r['a'],
              f,
              i.a.createElement(
                g['a'],
                {
                  bordered: !1,
                  title: i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.tr',
                    defaultMessage: 'Current Price',
                  }),
                  action: i.a.createElement(
                    n['a'],
                    {
                      title: i.a.createElement(o['FormattedMessage'], {
                        id: 'app.analysis.tr',
                        defaultMessage: 'Current Price',
                      }),
                    },
                    i.a.createElement(s['a'], { type: 'info-circle-o' })
                  ),
                  loading: a,
                  total: t.turnoverRate + '%',
                  footer: i.a.createElement(g['b'], {
                    label: i.a.createElement(o['FormattedMessage'], {
                      id: 'app.analysis.ts',
                      defaultMessage: 'Daily Sales',
                    }),
                    value: ''.concat(u()(t.totalShare).format('0,0')),
                  }),
                  contentHeight: 46,
                },
                i.a.createElement(
                  p['a'],
                  { style: { marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.tv',
                    defaultMessage: 'Weekly Changes',
                  }),
                  i.a.createElement('span', { className: d.a.trendText }, t.totalVolume)
                ),
                i.a.createElement(
                  p['a'],
                  { style: { marginRight: 16 } },
                  i.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.tc',
                    defaultMessage: 'Weekly Changes',
                  }),
                  i.a.createElement('span', { className: d.a.trendText }, t.totalVolume)
                )
              )
            )
          );
        });
      a['default'] = M;
    },
  },
]);
