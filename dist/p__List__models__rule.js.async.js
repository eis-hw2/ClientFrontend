(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [27],
  {
    '0dPK': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('p0pE'),
        r = t.n(n),
        c = t('d6i3'),
        u = t.n(c),
        l = t('dCQc');
      a['default'] = {
        namespace: 'rule',
        state: { data: { list: [], pagination: {} } },
        effects: {
          fetch: u.a.mark(function e(a, t) {
            var n, r, c, s;
            return u.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = a.payload), (r = t.call), (c = t.put), (e.next = 4), r(l['p'], n);
                  case 4:
                    return (s = e.sent), (e.next = 7), c({ type: 'save', payload: s });
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
          add: u.a.mark(function e(a, t) {
            var n, r, c, s, p;
            return u.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = a.payload),
                      (r = a.callback),
                      (c = t.call),
                      (s = t.put),
                      (e.next = 4),
                      c(l['b'], n)
                    );
                  case 4:
                    return (p = e.sent), (e.next = 7), s({ type: 'save', payload: p });
                  case 7:
                    r && r();
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
          remove: u.a.mark(function e(a, t) {
            var n, r, c, s, p;
            return u.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = a.payload),
                      (r = a.callback),
                      (c = t.call),
                      (s = t.put),
                      (e.next = 4),
                      c(l['s'], n)
                    );
                  case 4:
                    return (p = e.sent), (e.next = 7), s({ type: 'save', payload: p });
                  case 7:
                    r && r();
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
          update: u.a.mark(function e(a, t) {
            var n, r, c, s, p;
            return u.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = a.payload),
                      (r = a.callback),
                      (c = t.call),
                      (s = t.put),
                      (e.next = 4),
                      c(l['v'], n)
                    );
                  case 4:
                    return (p = e.sent), (e.next = 7), s({ type: 'save', payload: p });
                  case 7:
                    r && r();
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        },
        reducers: {
          save: function(e, a) {
            return r()({}, e, { data: a.payload });
          },
        },
      };
    },
  },
]);
