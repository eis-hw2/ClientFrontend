(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    '+LeE': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('p0pE'),
        s = t.n(n),
        r = t('d6i3'),
        c = t.n(r),
        p = t('dCQc');
      a['default'] = {
        namespace: 'monitor',
        state: { tags: [] },
        effects: {
          fetchTags: c.a.mark(function e(a, t) {
            var n, s, r;
            return c.a.wrap(function(e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (n = t.call), (s = t.put), (e.next = 3), n(p['q']);
                  case 3:
                    return (r = e.sent), (e.next = 6), s({ type: 'saveTags', payload: r.list });
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        },
        reducers: {
          saveTags: function(e, a) {
            return s()({}, e, { tags: a.payload });
          },
        },
      };
    },
  },
]);
