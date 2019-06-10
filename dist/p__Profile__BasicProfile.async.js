(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [29],
  {
    cfSo: function(e, t, a) {
      e.exports = { title: 'antd-pro-pages-profile-basic-profile-title' };
    },
    hJFj: function(e, t, a) {
      'use strict';
      a.r(t);
      a('IzEo');
      var n,
        r,
        y = a('bx4M'),
        E = (a('g9YV'), a('wCAj')),
        v = (a('/zsF'), a('PArb')),
        i = a('2Taf'),
        o = a.n(i),
        l = a('vZ4D'),
        c = a.n(l),
        s = a('l4Ni'),
        d = a.n(s),
        m = a('ujKo'),
        u = a.n(m),
        p = a('MhPg'),
        f = a.n(p),
        g = (a('Awhp'), a('KrTs')),
        h = a('q1tI'),
        k = a.n(h),
        x = a('MuoO'),
        I = a('+kNj'),
        b = a('zHco'),
        w = a('cfSo'),
        B = a.n(w),
        N = I['a'].Description,
        S = [
          { title: '\u65f6\u95f4', dataIndex: 'time', key: 'time' },
          { title: '\u5f53\u524d\u8fdb\u5ea6', dataIndex: 'rate', key: 'rate' },
          {
            title: '\u72b6\u6001',
            dataIndex: 'status',
            key: 'status',
            render: function(e) {
              return 'success' === e
                ? k.a.createElement(g['a'], { status: 'success', text: '\u6210\u529f' })
                : k.a.createElement(g['a'], { status: 'processing', text: '\u8fdb\u884c\u4e2d' });
            },
          },
          { title: '\u64cd\u4f5c\u5458ID', dataIndex: 'operator', key: 'operator' },
          { title: '\u8017\u65f6', dataIndex: 'cost', key: 'cost' },
        ],
        j = ((n = Object(x['connect'])(function(e) {
          var t = e.profile,
            a = e.loading;
          return { profile: t, loading: a.effects['profile/fetchBasic'] };
        })),
        n(
          (r = (function(e) {
            function t() {
              return o()(this, t), d()(this, u()(t).apply(this, arguments));
            }
            return (
              f()(t, e),
              c()(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props,
                      t = e.dispatch,
                      a = e.match,
                      n = a.params;
                    t({ type: 'profile/fetchBasic', payload: n.id || '1000000000' });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.profile,
                      a = void 0 === t ? {} : t,
                      n = e.loading,
                      r = a.basicGoods,
                      i = void 0 === r ? [] : r,
                      o = a.basicProgress,
                      l = void 0 === o ? [] : o,
                      c = a.userInfo,
                      s = void 0 === c ? {} : c,
                      d = a.application,
                      m = void 0 === d ? {} : d,
                      u = [];
                    if (i.length) {
                      var p = 0,
                        f = 0;
                      i.forEach(function(e) {
                        (p += Number(e.num)), (f += Number(e.amount));
                      }),
                        (u = i.concat({ id: '\u603b\u8ba1', num: p, amount: f }));
                    }
                    var g = function(e, t, a) {
                        var n = { children: e, props: {} };
                        return a === i.length && (n.props.colSpan = 0), n;
                      },
                      h = [
                        {
                          title: '\u5546\u54c1\u7f16\u53f7',
                          dataIndex: 'id',
                          key: 'id',
                          render: function(e, t, a) {
                            return a < i.length
                              ? k.a.createElement('a', { href: '' }, e)
                              : {
                                  children: k.a.createElement(
                                    'span',
                                    { style: { fontWeight: 600 } },
                                    '\u603b\u8ba1'
                                  ),
                                  props: { colSpan: 4 },
                                };
                          },
                        },
                        {
                          title: '\u5546\u54c1\u540d\u79f0',
                          dataIndex: 'name',
                          key: 'name',
                          render: g,
                        },
                        {
                          title: '\u5546\u54c1\u6761\u7801',
                          dataIndex: 'barcode',
                          key: 'barcode',
                          render: g,
                        },
                        {
                          title: '\u5355\u4ef7',
                          dataIndex: 'price',
                          key: 'price',
                          align: 'right',
                          render: g,
                        },
                        {
                          title: '\u6570\u91cf\uff08\u4ef6\uff09',
                          dataIndex: 'num',
                          key: 'num',
                          align: 'right',
                          render: function(e, t, a) {
                            return a < i.length
                              ? e
                              : k.a.createElement('span', { style: { fontWeight: 600 } }, e);
                          },
                        },
                        {
                          title: '\u91d1\u989d',
                          dataIndex: 'amount',
                          key: 'amount',
                          align: 'right',
                          render: function(e, t, a) {
                            return a < i.length
                              ? e
                              : k.a.createElement('span', { style: { fontWeight: 600 } }, e);
                          },
                        },
                      ];
                    return k.a.createElement(
                      b['a'],
                      { title: '\u57fa\u7840\u8be6\u60c5\u9875', loading: n },
                      k.a.createElement(
                        y['a'],
                        { bordered: !1 },
                        k.a.createElement(
                          I['a'],
                          {
                            size: 'large',
                            title: '\u9000\u6b3e\u7533\u8bf7',
                            style: { marginBottom: 32 },
                          },
                          k.a.createElement(N, { term: '\u53d6\u8d27\u5355\u53f7' }, m.id),
                          k.a.createElement(N, { term: '\u72b6\u6001' }, m.status),
                          k.a.createElement(N, { term: '\u9500\u552e\u5355\u53f7' }, m.orderNo),
                          k.a.createElement(N, { term: '\u5b50\u8ba2\u5355' }, m.childOrderNo)
                        ),
                        k.a.createElement(v['a'], { style: { marginBottom: 32 } }),
                        k.a.createElement(
                          I['a'],
                          {
                            size: 'large',
                            title: '\u7528\u6237\u4fe1\u606f',
                            style: { marginBottom: 32 },
                          },
                          k.a.createElement(N, { term: '\u7528\u6237\u59d3\u540d' }, s.name),
                          k.a.createElement(N, { term: '\u8054\u7cfb\u7535\u8bdd' }, s.tel),
                          k.a.createElement(N, { term: '\u5e38\u7528\u5feb\u9012' }, s.delivery),
                          k.a.createElement(N, { term: '\u53d6\u8d27\u5730\u5740' }, s.addr),
                          k.a.createElement(N, { term: '\u5907\u6ce8' }, s.remark)
                        ),
                        k.a.createElement(v['a'], { style: { marginBottom: 32 } }),
                        k.a.createElement(
                          'div',
                          { className: B.a.title },
                          '\u9000\u8d27\u5546\u54c1'
                        ),
                        k.a.createElement(E['a'], {
                          style: { marginBottom: 24 },
                          pagination: !1,
                          loading: n,
                          dataSource: u,
                          columns: h,
                          rowKey: 'id',
                        }),
                        k.a.createElement(
                          'div',
                          { className: B.a.title },
                          '\u9000\u8d27\u8fdb\u5ea6'
                        ),
                        k.a.createElement(E['a'], {
                          style: { marginBottom: 16 },
                          pagination: !1,
                          loading: n,
                          dataSource: l,
                          columns: S,
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(h['Component']))
        ) || r);
      t['default'] = j;
    },
  },
]);
