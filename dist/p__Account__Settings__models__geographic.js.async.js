(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '6bXN': function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('p0pE'),
        r = t.n(a),
        c = t('d6i3'),
        p = t.n(c),
        i = t('1l/V'),
        o = t.n(i),
        u = t('t3Un');
      function s() {
        return d.apply(this, arguments);
      }
      function d() {
        return (
          (d = o()(
            p.a.mark(function e() {
              return p.a.wrap(function(e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', Object(u['a'])('/api/geographic/province'));
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )),
          d.apply(this, arguments)
        );
      }
      function y(e) {
        return l.apply(this, arguments);
      }
      function l() {
        return (
          (l = o()(
            p.a.mark(function e(n) {
              return p.a.wrap(function(e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', Object(u['a'])('/api/geographic/city/'.concat(n)));
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )),
          l.apply(this, arguments)
        );
      }
      n['default'] = {
        namespace: 'geographic',
        state: { province: [], city: [], isLoading: !1 },
        effects: {
          fetchProvince: p.a.mark(function e(n, t) {
            var a, r, c;
            return p.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = t.call),
                      (r = t.put),
                      (e.next = 3),
                      r({ type: 'changeLoading', payload: !0 })
                    );
                  case 3:
                    return (e.next = 5), a(s);
                  case 5:
                    return (c = e.sent), (e.next = 8), r({ type: 'setProvince', payload: c });
                  case 8:
                    return (e.next = 10), r({ type: 'changeLoading', payload: !1 });
                  case 10:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
          fetchCity: p.a.mark(function e(n, t) {
            var a, r, c, i;
            return p.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = n.payload),
                      (r = t.call),
                      (c = t.put),
                      (e.next = 4),
                      c({ type: 'changeLoading', payload: !0 })
                    );
                  case 4:
                    return (e.next = 6), r(y, a);
                  case 6:
                    return (i = e.sent), (e.next = 9), c({ type: 'setCity', payload: i });
                  case 9:
                    return (e.next = 11), c({ type: 'changeLoading', payload: !1 });
                  case 11:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        },
        reducers: {
          setProvince: function(e, n) {
            return r()({}, e, { province: n.payload });
          },
          setCity: function(e, n) {
            return r()({}, e, { city: n.payload });
          },
          changeLoading: function(e, n) {
            return r()({}, e, { isLoading: n.payload });
          },
        },
      };
    },
  },
]);
