(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [45],
  {
    b2ve: function(e, a, t) {
      'use strict';
      t.r(a);
      t('IzEo');
      var s = t('bx4M'),
        l = (t('g9YV'), t('wCAj')),
        i = (t('14J3'), t('BMrR')),
        o = (t('jCWc'), t('kPKH')),
        c = (t('5Dmo'), t('3S7+')),
        d = (t('Pwec'), t('CtXQ')),
        n = t('q1tI'),
        m = t.n(n),
        u = t('Y2fQ'),
        r = t('YR7N'),
        g = t('ZhIB'),
        p = t.n(g),
        y = t('lVjH'),
        E = t.n(y),
        f = t('LOQS'),
        M = t('KTCi'),
        h = [
          {
            title: m.a.createElement(u['FormattedMessage'], {
              id: 'app.analysis.table.rank',
              defaultMessage: 'Rank',
            }),
            dataIndex: 'index',
            key: 'index',
          },
          {
            title: m.a.createElement(u['FormattedMessage'], {
              id: 'app.analysis.table.search-keyword',
              defaultMessage: 'Search keyword',
            }),
            dataIndex: 'keyword',
            key: 'keyword',
            render: function(e) {
              return m.a.createElement('a', { href: '/' }, e);
            },
          },
          {
            title: m.a.createElement(u['FormattedMessage'], {
              id: 'app.analysis.table.users',
              defaultMessage: 'Users',
            }),
            dataIndex: 'count',
            key: 'count',
            sorter: function(e, a) {
              return e.count - a.count;
            },
            className: E.a.alignRight,
          },
          {
            title: m.a.createElement(u['FormattedMessage'], {
              id: 'app.analysis.table.weekly-range',
              defaultMessage: 'Weekly Range',
            }),
            dataIndex: 'range',
            key: 'range',
            sorter: function(e, a) {
              return e.range - a.range;
            },
            render: function(e, a) {
              return m.a.createElement(
                r['a'],
                { flag: 1 === a.status ? 'down' : 'up' },
                m.a.createElement('span', { style: { marginRight: 4 } }, e, '%')
              );
            },
            align: 'right',
          },
        ],
        w = Object(n['memo'])(function(e) {
          var a = e.loading,
            t = e.visitData2,
            n = e.searchData,
            r = e.dropdownGroup;
          return m.a.createElement(
            s['a'],
            {
              loading: a,
              bordered: !1,
              title: m.a.createElement(u['FormattedMessage'], {
                id: 'app.analysis.online-top-search',
                defaultMessage: 'Online Top Search',
              }),
              extra: r,
              style: { marginTop: 24 },
            },
            m.a.createElement(
              i['a'],
              { gutter: 68 },
              m.a.createElement(
                o['a'],
                { sm: 12, xs: 24, style: { marginBottom: 24 } },
                m.a.createElement(f['a'], {
                  subTitle: m.a.createElement(
                    'span',
                    null,
                    m.a.createElement(u['FormattedMessage'], {
                      id: 'app.analysis.search-users',
                      defaultMessage: 'search users',
                    }),
                    m.a.createElement(
                      c['a'],
                      {
                        title: m.a.createElement(u['FormattedMessage'], {
                          id: 'app.analysis.introduce',
                          defaultMessage: 'introduce',
                        }),
                      },
                      m.a.createElement(d['a'], { style: { marginLeft: 8 }, type: 'info-circle-o' })
                    )
                  ),
                  gap: 8,
                  total: p()(12321).format('0,0'),
                  status: 'up',
                  subTotal: 17.1,
                }),
                m.a.createElement(M['d'], { line: !0, height: 45, data: t })
              ),
              m.a.createElement(
                o['a'],
                { sm: 12, xs: 24, style: { marginBottom: 24 } },
                m.a.createElement(f['a'], {
                  subTitle: m.a.createElement(
                    'span',
                    null,
                    m.a.createElement(u['FormattedMessage'], {
                      id: 'app.analysis.per-capita-search',
                      defaultMessage: 'Per Capita Search',
                    }),
                    m.a.createElement(
                      c['a'],
                      {
                        title: m.a.createElement(u['FormattedMessage'], {
                          id: 'app.analysis.introduce',
                          defaultMessage: 'introduce',
                        }),
                      },
                      m.a.createElement(d['a'], { style: { marginLeft: 8 }, type: 'info-circle-o' })
                    )
                  ),
                  total: 2.7,
                  status: 'down',
                  subTotal: 26.2,
                  gap: 8,
                }),
                m.a.createElement(M['d'], { line: !0, height: 45, data: t })
              )
            ),
            m.a.createElement(l['a'], {
              rowKey: function(e) {
                return e.index;
              },
              size: 'small',
              columns: h,
              dataSource: n,
              pagination: { style: { marginBottom: 0 }, pageSize: 5 },
            })
          );
        });
      a['default'] = w;
    },
  },
]);
