(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    YmWs: function(e, r, n) {
      'use strict';
      n.r(r);
      var t = n('d6i3'),
        u = n.n(t),
        a = n('1l/V'),
        c = n.n(a),
        o = n('t3Un');
      function s(e) {
        return i.apply(this, arguments);
      }
      function i() {
        return (
          (i = c()(
            u.a.mark(function e(r) {
              return u.a.wrap(function(e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', Object(o['a'])('/api/'.concat(r)));
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )),
          i.apply(this, arguments)
        );
      }
      r['default'] = {
        namespace: 'error',
        state: { error: '', isloading: !1 },
        effects: {
          query: u.a.mark(function e(r, n) {
            var t, a, c;
            return u.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (t = r.payload), (a = n.call), (c = n.put), (e.next = 4), a(s, t.code);
                  case 4:
                    return (e.next = 6), c({ type: 'trigger', payload: t.code });
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        },
        reducers: {
          trigger: function(e, r) {
            return { error: r.payload };
          },
        },
      };
    },
  },
]);
