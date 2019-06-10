(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [30],
  {
    LY9D: function(e, a, n) {
      'use strict';
      n.r(a);
      var t = n('p0pE'),
        r = n.n(t),
        c = n('d6i3'),
        p = n.n(c),
        o = n('dCQc');
      a['default'] = {
        namespace: 'profile',
        state: {
          basicGoods: [],
          advancedOperation1: [],
          advancedOperation2: [],
          advancedOperation3: [],
        },
        effects: {
          fetchBasic: p.a.mark(function e(a, n) {
            var t, r, c, s;
            return p.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (t = a.payload), (r = n.call), (c = n.put), (e.next = 4), r(o['l'], t);
                  case 4:
                    return (s = e.sent), (e.next = 7), c({ type: 'show', payload: s });
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
          fetchAdvanced: p.a.mark(function e(a, n) {
            var t, r, c;
            return p.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (t = n.call), (r = n.put), (e.next = 3), t(o['k']);
                  case 3:
                    return (c = e.sent), (e.next = 6), r({ type: 'show', payload: c });
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        },
        reducers: {
          show: function(e, a) {
            var n = a.payload;
            return r()({}, e, n);
          },
        },
      };
    },
  },
]);
