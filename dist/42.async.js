(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [42],
  {
    Jqna: function(e, a, t) {
      'use strict';
      t.r(a);
      t('IzEo');
      var s = t('bx4M'),
        o = (t('Znn+'), t('ZTPi')),
        n = t('q1tI'),
        r = t.n(n),
        c = t('Y2fQ'),
        i = t('lVjH'),
        m = t.n(i),
        d = t('KTCi'),
        p = (t('LOQS'), o['a'].TabPane),
        l = Object(n['memo'])(function(e) {
          var a = e.activeKey,
            t = e.loading,
            n = e.offlineData,
            i = e.offlineChartData,
            l = e.handleTabChange;
          return r.a.createElement(
            s['a'],
            { loading: t, className: m.a.offlineCard, bordered: !1, style: { marginTop: 32 } },
            r.a.createElement(
              o['a'],
              { activeKey: a, onChange: l },
              n.map(function(e) {
                return r.a.createElement(
                  p,
                  {
                    tab: r.a.createElement(c['FormattedMessage'], {
                      id: 'app.analysis.sp',
                      defaultMessage: 'Sales',
                    }),
                    key: e.name,
                  },
                  r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(d['i'], {
                      height: 800,
                      data: i,
                      titleMap: {
                        y1: Object(c['formatMessage'])({ id: 'app.analysis.sp' }),
                        volume: Object(c['formatMessage'])({ id: 'app.analysis.volume' }),
                      },
                    })
                  )
                );
              })
            )
          );
        });
      a['default'] = l;
    },
  },
]);
