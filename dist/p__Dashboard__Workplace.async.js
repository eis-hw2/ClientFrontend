(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '9nVL': function(e, t, a) {
      e.exports = { linkGroup: 'antd-pro-components-editable-link-group-index-linkGroup' };
    },
    't/hC': function(e, t, a) {
      'use strict';
      a.r(t);
      a('14J3');
      var s = a('BMrR'),
        d = (a('jCWc'), a('kPKH')),
        m = (a('IzEo'), a('bx4M')),
        p = (a('Mwp2'), a('VXEj')),
        u = (a('Telt'), a('Tckk')),
        r = a('2Taf'),
        n = a.n(r),
        c = a('vZ4D'),
        l = a.n(c),
        i = a('l4Ni'),
        o = a.n(i),
        E = a('ujKo'),
        h = a.n(E),
        g = a('MhPg'),
        v = a.n(g),
        f = a('q1tI'),
        k = a.n(f),
        b = a('wd/R'),
        y = a.n(b),
        w = a('MuoO'),
        N = a('mOP9'),
        j = a.n(N),
        C = a('KTCi'),
        L = (a('+L6B'), a('2/Rp')),
        x = (a('17x9'), a('9nVL')),
        I = a.n(x),
        T = (function(e) {
          function t() {
            return n()(this, t), o()(this, h()(t).apply(this, arguments));
          }
          return (
            v()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.links,
                    a = e.linkElement,
                    r = e.onAdd;
                  return k.a.createElement(
                    'div',
                    { className: I.a.linkGroup },
                    t.map(function(e) {
                      return Object(
                        f['createElement']
                      )(a, { key: 'linkGroup-item-'.concat(e.id || e.title), to: e.href, href: e.href }, e.title);
                    }),
                    k.a.createElement(
                      L['a'],
                      { size: 'small', type: 'primary', ghost: !0, onClick: r, icon: 'plus' },
                      '\u6dfb\u52a0'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f['PureComponent']);
      T.defaultProps = { links: [], onAdd: function() {}, linkElement: 'a' };
      var A,
        z,
        G = T,
        M = a('zHco'),
        B = a('wnz0'),
        P = a.n(B),
        H = [
          { title: '\u64cd\u4f5c\u4e00', href: '' },
          { title: '\u64cd\u4f5c\u4e8c', href: '' },
          { title: '\u64cd\u4f5c\u4e09', href: '' },
          { title: '\u64cd\u4f5c\u56db', href: '' },
          { title: '\u64cd\u4f5c\u4e94', href: '' },
          { title: '\u64cd\u4f5c\u516d', href: '' },
        ],
        O = ((A = Object(w['connect'])(function(e) {
          var t = e.user,
            a = e.project,
            r = e.activities,
            n = e.chart,
            c = e.loading;
          return {
            currentUser: t.currentUser,
            project: a,
            activities: r,
            chart: n,
            currentUserLoading: c.effects['user/fetchCurrent'],
            projectLoading: c.effects['project/fetchNotice'],
            activitiesLoading: c.effects['activities/fetchList'],
          };
        })),
        A(
          (z = (function(e) {
            function t() {
              return n()(this, t), o()(this, h()(t).apply(this, arguments));
            }
            return (
              v()(t, e),
              l()(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'user/fetchCurrent' }),
                      e({ type: 'project/fetchNotice' }),
                      e({ type: 'activities/fetchList' }),
                      e({ type: 'chart/fetch' });
                  },
                },
                {
                  key: 'renderActivities',
                  value: function() {
                    var e = this.props.activities.list;
                    return e.map(function(t) {
                      var e = t.template.split(/@\{([^{}]*)\}/gi).map(function(e) {
                        return t[e]
                          ? k.a.createElement('a', { href: t[e].link, key: t[e].name }, t[e].name)
                          : e;
                      });
                      return k.a.createElement(
                        p['a'].Item,
                        { key: t.id },
                        k.a.createElement(p['a'].Item.Meta, {
                          avatar: k.a.createElement(u['a'], { src: t.user.avatar }),
                          title: k.a.createElement(
                            'span',
                            null,
                            k.a.createElement('a', { className: P.a.username }, t.user.name),
                            '\xa0',
                            k.a.createElement('span', { className: P.a.event }, e)
                          ),
                          description: k.a.createElement(
                            'span',
                            { className: P.a.datetime, title: t.updatedAt },
                            y()(t.updatedAt).fromNow()
                          ),
                        })
                      );
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.currentUser,
                      a = e.currentUserLoading,
                      r = e.project.notice,
                      n = e.projectLoading,
                      c = e.activitiesLoading,
                      l = e.chart.radarData,
                      i =
                        t && Object.keys(t).length
                          ? k.a.createElement(
                              'div',
                              { className: P.a.pageHeaderContent },
                              k.a.createElement(
                                'div',
                                { className: P.a.avatar },
                                k.a.createElement(u['a'], { size: 'large', src: t.avatar })
                              ),
                              k.a.createElement(
                                'div',
                                { className: P.a.content },
                                k.a.createElement(
                                  'div',
                                  { className: P.a.contentTitle },
                                  '\u65e9\u5b89\uff0c',
                                  t.name,
                                  '\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01'
                                ),
                                k.a.createElement('div', null, t.title, ' |', t.group)
                              )
                            )
                          : null,
                      o = k.a.createElement(
                        'div',
                        { className: P.a.extraContent },
                        k.a.createElement(
                          'div',
                          { className: P.a.statItem },
                          k.a.createElement('p', null, '\u9879\u76ee\u6570'),
                          k.a.createElement('p', null, '56')
                        ),
                        k.a.createElement(
                          'div',
                          { className: P.a.statItem },
                          k.a.createElement('p', null, '\u56e2\u961f\u5185\u6392\u540d'),
                          k.a.createElement(
                            'p',
                            null,
                            '8',
                            k.a.createElement('span', null, ' / 24')
                          )
                        ),
                        k.a.createElement(
                          'div',
                          { className: P.a.statItem },
                          k.a.createElement('p', null, '\u9879\u76ee\u8bbf\u95ee'),
                          k.a.createElement('p', null, '2,223')
                        )
                      );
                    return k.a.createElement(
                      M['a'],
                      { loading: a, content: i, extraContent: o },
                      k.a.createElement(
                        s['a'],
                        { gutter: 24 },
                        k.a.createElement(
                          d['a'],
                          { xl: 16, lg: 24, md: 24, sm: 24, xs: 24 },
                          k.a.createElement(
                            m['a'],
                            {
                              className: P.a.projectList,
                              style: { marginBottom: 24 },
                              title: '\u8fdb\u884c\u4e2d\u7684\u9879\u76ee',
                              bordered: !1,
                              extra: k.a.createElement(
                                j.a,
                                { to: '/' },
                                '\u5168\u90e8\u9879\u76ee'
                              ),
                              loading: n,
                              bodyStyle: { padding: 0 },
                            },
                            r.map(function(e) {
                              return k.a.createElement(
                                m['a'].Grid,
                                { className: P.a.projectGrid, key: e.id },
                                k.a.createElement(
                                  m['a'],
                                  { bodyStyle: { padding: 0 }, bordered: !1 },
                                  k.a.createElement(m['a'].Meta, {
                                    title: k.a.createElement(
                                      'div',
                                      { className: P.a.cardTitle },
                                      k.a.createElement(u['a'], { size: 'small', src: e.logo }),
                                      k.a.createElement(j.a, { to: e.href }, e.title)
                                    ),
                                    description: e.description,
                                  }),
                                  k.a.createElement(
                                    'div',
                                    { className: P.a.projectItemContent },
                                    k.a.createElement(j.a, { to: e.memberLink }, e.member || ''),
                                    e.updatedAt &&
                                      k.a.createElement(
                                        'span',
                                        { className: P.a.datetime, title: e.updatedAt },
                                        y()(e.updatedAt).fromNow()
                                      )
                                  )
                                )
                              );
                            })
                          ),
                          k.a.createElement(
                            m['a'],
                            {
                              bodyStyle: { padding: 0 },
                              bordered: !1,
                              className: P.a.activeCard,
                              title: '\u52a8\u6001',
                              loading: c,
                            },
                            k.a.createElement(
                              p['a'],
                              { loading: c, size: 'large' },
                              k.a.createElement(
                                'div',
                                { className: P.a.activitiesList },
                                this.renderActivities()
                              )
                            )
                          )
                        ),
                        k.a.createElement(
                          d['a'],
                          { xl: 8, lg: 24, md: 24, sm: 24, xs: 24 },
                          k.a.createElement(
                            m['a'],
                            {
                              style: { marginBottom: 24 },
                              title: '\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a',
                              bordered: !1,
                              bodyStyle: { padding: 0 },
                            },
                            k.a.createElement(G, {
                              onAdd: function() {},
                              links: H,
                              linkElement: j.a,
                            })
                          ),
                          k.a.createElement(
                            m['a'],
                            {
                              style: { marginBottom: 24 },
                              bordered: !1,
                              title: 'XX \u6307\u6570',
                              loading: 0 === l.length,
                            },
                            k.a.createElement(
                              'div',
                              { className: P.a.chart },
                              k.a.createElement(C['f'], { hasLegend: !0, height: 343, data: l })
                            )
                          ),
                          k.a.createElement(
                            m['a'],
                            {
                              bodyStyle: { paddingTop: 12, paddingBottom: 12 },
                              bordered: !1,
                              title: '\u56e2\u961f',
                              loading: n,
                            },
                            k.a.createElement(
                              'div',
                              { className: P.a.members },
                              k.a.createElement(
                                s['a'],
                                { gutter: 48 },
                                r.map(function(e) {
                                  return k.a.createElement(
                                    d['a'],
                                    { span: 12, key: 'members-item-'.concat(e.id) },
                                    k.a.createElement(
                                      j.a,
                                      { to: e.href },
                                      k.a.createElement(u['a'], { src: e.logo, size: 'small' }),
                                      k.a.createElement('span', { className: P.a.member }, e.member)
                                    )
                                  );
                                })
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(f['PureComponent']))
        ) || z);
      t['default'] = O;
    },
    wnz0: function(e, t, a) {
      e.exports = {
        activitiesList: 'antd-pro-pages-dashboard-workplace-activitiesList',
        username: 'antd-pro-pages-dashboard-workplace-username',
        event: 'antd-pro-pages-dashboard-workplace-event',
        pageHeaderContent: 'antd-pro-pages-dashboard-workplace-pageHeaderContent',
        avatar: 'antd-pro-pages-dashboard-workplace-avatar',
        content: 'antd-pro-pages-dashboard-workplace-content',
        contentTitle: 'antd-pro-pages-dashboard-workplace-contentTitle',
        extraContent: 'antd-pro-pages-dashboard-workplace-extraContent',
        statItem: 'antd-pro-pages-dashboard-workplace-statItem',
        members: 'antd-pro-pages-dashboard-workplace-members',
        member: 'antd-pro-pages-dashboard-workplace-member',
        projectList: 'antd-pro-pages-dashboard-workplace-projectList',
        cardTitle: 'antd-pro-pages-dashboard-workplace-cardTitle',
        projectGrid: 'antd-pro-pages-dashboard-workplace-projectGrid',
        projectItemContent: 'antd-pro-pages-dashboard-workplace-projectItemContent',
        datetime: 'antd-pro-pages-dashboard-workplace-datetime',
        activeCard: 'antd-pro-pages-dashboard-workplace-activeCard',
      };
    },
  },
]);
