(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [44],
  {
    '20K/': function(e, a, t) {
      'use strict';
      t.r(a);
      t('IzEo');
      for (
        var l = t('bx4M'),
          n = (t('14J3'), t('BMrR')),
          r = (t('jCWc'), t('kPKH')),
          s = (t('Znn+'), t('ZTPi')),
          c = (t('iQDF'), t('+eQT')),
          i = t('q1tI'),
          m = t.n(i),
          o = t('Y2fQ'),
          u = (t('ZhIB'), t('lVjH')),
          E = t.n(u),
          p = (t('KTCi'), c['a'].RangePicker, s['a'].TabPane),
          d = [],
          b = 0;
        b < 5;
        b += 1
      )
        d.push({
          title: Object(o['formatMessage'])({ id: 'app.analysis.test' }, { no: b }),
          total: 323234,
        });
      for (var g = [], k = 0; k < 5; k += 1)
        g.push({
          title: Object(o['formatMessage'])({ id: 'app.analysis.test' }, { no: k }),
          total: 323234,
        });
      var y = Object(i['memo'])(function(e) {
        var a = e.marketDepth,
          t = (e.salesData, e.isActive, e.handleRangePickerChange, e.loading);
        e.selectDate;
        return m.a.createElement(
          l['a'],
          { loading: t, bordered: !1, bodyStyle: { padding: 0 } },
          m.a.createElement(
            'div',
            { className: E.a.salesCard },
            m.a.createElement(
              s['a'],
              { size: 'large', tabBarStyle: { marginBottom: 24 } },
              m.a.createElement(
                p,
                {
                  tab: m.a.createElement(o['FormattedMessage'], {
                    id: 'app.analysis.ob',
                    defaultMessage: 'Sales',
                  }),
                  key: 'sales',
                },
                m.a.createElement(
                  n['a'],
                  null,
                  a.sellers.map(function(e, a) {
                    return m.a.createElement(
                      r['a'],
                      { xl: 4 },
                      m.a.createElement(
                        'div',
                        { className: E.a.salesRank },
                        m.a.createElement('h4', { className: E.a.rankingTitle }, 'SELL' + (a + 1)),
                        m.a.createElement(
                          'ul',
                          { className: E.a.rankingList },
                          m.a.createElement(
                            'li',
                            { key: e.title },
                            m.a.createElement(
                              'span',
                              { style: { color: 'green' } },
                              'Price \xa5' + e.price + ' | '
                            ),
                            m.a.createElement('br', null),
                            m.a.createElement('br', null),
                            m.a.createElement(
                              'span',
                              { style: { color: 'blue' } },
                              'Volume ' + e.count
                            )
                          )
                        )
                      )
                    );
                  })
                ),
                m.a.createElement(
                  n['a'],
                  null,
                  a.buyers.map(function(e, a) {
                    return m.a.createElement(
                      r['a'],
                      { xl: 4 },
                      m.a.createElement(
                        'div',
                        { className: E.a.salesRank },
                        m.a.createElement('h4', { className: E.a.rankingTitle }, 'BUY' + (a + 1)),
                        m.a.createElement(
                          'ul',
                          { className: E.a.rankingList },
                          m.a.createElement(
                            'li',
                            { key: e.title },
                            m.a.createElement(
                              'span',
                              { style: { color: 'red' } },
                              'Price: \xa5' + e.price + '|'
                            ),
                            m.a.createElement(
                              'span',
                              { style: { color: 'blue' } },
                              'Volume: ' + e.count
                            )
                          )
                        )
                      )
                    );
                  })
                )
              )
            )
          )
        );
      });
      a['default'] = y;
    },
  },
]);
