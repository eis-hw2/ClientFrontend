(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    BOD2: function(e, a, t) {
      e.exports = {
        container: 'antd-pro-layouts-user-layout-container',
        lang: 'antd-pro-layouts-user-layout-lang',
        content: 'antd-pro-layouts-user-layout-content',
        top: 'antd-pro-layouts-user-layout-top',
        header: 'antd-pro-layouts-user-layout-header',
        logo: 'antd-pro-layouts-user-layout-logo',
        title: 'antd-pro-layouts-user-layout-title',
        desc: 'antd-pro-layouts-user-layout-desc',
      };
    },
    jH8a: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('2Taf'),
        r = t.n(n),
        o = t('vZ4D'),
        l = t.n(o),
        s = t('l4Ni'),
        u = t.n(s),
        c = t('ujKo'),
        i = t.n(c),
        m = t('MhPg'),
        p = t.n(m),
        y = (t('Pwec'), t('CtXQ')),
        d = t('q1tI'),
        h = t.n(d),
        g = t('Y2fQ'),
        f = t('MuoO'),
        v = t('mOP9'),
        E = t.n(v),
        b = t('ggcP'),
        N = t('ZFw/'),
        k = t.n(N),
        M = t('bfXr'),
        w = t('BOD2'),
        O = t.n(w),
        j = t('mxmt'),
        D = t.n(j),
        P = t('tGQQ'),
        Q = [
          {
            key: 'help',
            title: Object(g['formatMessage'])({ id: 'layout.user.link.help' }),
            href: '',
          },
          {
            key: 'privacy',
            title: Object(g['formatMessage'])({ id: 'layout.user.link.privacy' }),
            href: '',
          },
          {
            key: 'terms',
            title: Object(g['formatMessage'])({ id: 'layout.user.link.terms' }),
            href: '',
          },
        ],
        x = h.a.createElement(
          d['Fragment'],
          null,
          'Copyright ',
          h.a.createElement(y['a'], { type: 'copyright' }),
          ' 2019 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1'
        ),
        C = (function(e) {
          function a() {
            return r()(this, a), u()(this, i()(a).apply(this, arguments));
          }
          return (
            p()(a, e),
            l()(a, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    a = e.dispatch,
                    t = e.route,
                    n = t.routes,
                    r = t.authority;
                  a({ type: 'menu/getMenuData', payload: { routes: n, authority: r } });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    a = e.children,
                    t = e.location.pathname,
                    n = e.breadcrumbNameMap;
                  return h.a.createElement(
                    k.a,
                    { title: Object(P['a'])(t, n) },
                    h.a.createElement(
                      'div',
                      { className: O.a.container },
                      h.a.createElement(
                        'div',
                        { className: O.a.lang },
                        h.a.createElement(M['a'], null)
                      ),
                      h.a.createElement(
                        'div',
                        { className: O.a.content },
                        h.a.createElement(
                          'div',
                          { className: O.a.top },
                          h.a.createElement(
                            'div',
                            { className: O.a.header },
                            h.a.createElement(
                              E.a,
                              { to: '/' },
                              h.a.createElement('img', {
                                alt: 'logo',
                                className: O.a.logo,
                                src: D.a,
                              }),
                              h.a.createElement(
                                'span',
                                { className: O.a.title },
                                'Exchange Simulator'
                              )
                            )
                          ),
                          h.a.createElement('div', { className: O.a.desc }, 'Trader Gateway')
                        ),
                        a
                      ),
                      h.a.createElement(b['a'], { links: Q, copyright: x })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(d['Component']);
      a['default'] = Object(f['connect'])(function(e) {
        var a = e.menu;
        return { menuData: a.menuData, breadcrumbNameMap: a.breadcrumbNameMap };
      })(C);
    },
  },
]);
