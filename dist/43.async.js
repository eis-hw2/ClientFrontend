(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [43],
  {
    tLGd: function(e, a, t) {
      'use strict';
      t.r(a);
      t('IzEo');
      var r = t('bx4M'),
        o = (t('7Kak'), t('9yH6')),
        s = t('q1tI'),
        d = t.n(s),
        i = t('Y2fQ'),
        l = t('lVjH'),
        m = t.n(l),
        c = t('KTCi'),
        u = t('Umy/'),
        n = Object(s['memo'])(function(e) {
          var a = e.dropdownGroup,
            t = e.salesType,
            s = e.loading,
            l = e.salesPieData,
            n = e.handleChangeSalesType;
          return d.a.createElement(
            r['a'],
            {
              loading: s,
              className: m.a.salesCard,
              bordered: !1,
              title: d.a.createElement(i['FormattedMessage'], {
                id: 'app.analysis.the-proportion-of-sales',
                defaultMessage: 'The Proportion of Sales',
              }),
              bodyStyle: { padding: 24 },
              extra: d.a.createElement(
                'div',
                { className: m.a.salesCardExtra },
                a,
                d.a.createElement(
                  'div',
                  { className: m.a.salesTypeRadio },
                  d.a.createElement(
                    o['a'].Group,
                    { value: t, onChange: n },
                    d.a.createElement(
                      o['a'].Button,
                      { value: 'all' },
                      d.a.createElement(i['FormattedMessage'], {
                        id: 'app.analysis.channel.all',
                        defaultMessage: 'ALL',
                      })
                    ),
                    d.a.createElement(
                      o['a'].Button,
                      { value: 'online' },
                      d.a.createElement(i['FormattedMessage'], {
                        id: 'app.analysis.channel.online',
                        defaultMessage: 'Online',
                      })
                    ),
                    d.a.createElement(
                      o['a'].Button,
                      { value: 'stores' },
                      d.a.createElement(i['FormattedMessage'], {
                        id: 'app.analysis.channel.stores',
                        defaultMessage: 'Stores',
                      })
                    )
                  )
                )
              ),
              style: { marginTop: 24 },
            },
            d.a.createElement(
              'h4',
              { style: { marginTop: 10, marginBottom: 32 } },
              d.a.createElement(i['FormattedMessage'], {
                id: 'app.analysis.sales',
                defaultMessage: 'Sales',
              })
            ),
            d.a.createElement(c['e'], {
              hasLegend: !0,
              subTitle: d.a.createElement(i['FormattedMessage'], {
                id: 'app.analysis.sales',
                defaultMessage: 'Sales',
              }),
              total: function() {
                return d.a.createElement(
                  u['a'],
                  null,
                  l.reduce(function(e, a) {
                    return a.y + e;
                  }, 0)
                );
              },
              data: l,
              valueFormat: function(e) {
                return d.a.createElement(u['a'], null, e);
              },
              height: 270,
              lineWidth: 4,
              style: { padding: '8px 0' },
            })
          );
        });
      a['default'] = n;
    },
  },
]);
