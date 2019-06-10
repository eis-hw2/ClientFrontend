(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    zX0F: function(a, e, t) {
      'use strict';
      t.r(e);
      var r = t('p0pE'),
        n = t.n(r),
        s = t('d6i3'),
        u = t.n(s),
        l = t('dCQc');
      e['default'] = {
        namespace: 'chart',
        state: {
          visitData: [],
          visitData2: [],
          salesData: [],
          searchData: [],
          offlineData: [],
          offlineChartData: [],
          salesTypeData: [],
          salesTypeDataOnline: [],
          salesTypeDataOffline: [],
          radarData: [],
          loading: !1,
          brokersData: [],
          futuresData: [],
          currentBroker: null,
        },
        effects: {
          fetch: u.a.mark(function a(e, t) {
            var r, n, s;
            return u.a.wrap(function(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (r = t.call), (n = t.put), (a.next = 3), r(l['c']);
                  case 3:
                    return (s = a.sent), (a.next = 6), n({ type: 'save', payload: s });
                  case 6:
                  case 'end':
                    return a.stop();
                }
            }, a);
          }),
          fetchSalesData: u.a.mark(function a(e, t) {
            var r, n, s;
            return u.a.wrap(function(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (r = t.call), (n = t.put), (a.next = 3), r(l['c']);
                  case 3:
                    return (
                      (s = a.sent),
                      (a.next = 6),
                      n({ type: 'save', payload: { salesData: s.salesData } })
                    );
                  case 6:
                  case 'end':
                    return a.stop();
                }
            }, a);
          }),
          fetchBrokers: u.a.mark(function a(e, t) {
            var r, n, s;
            return u.a.wrap(function(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (r = t.call), (n = t.put), (a.next = 3), r(l['f']);
                  case 3:
                    return (
                      (s = a.sent),
                      (a.next = 6),
                      n({ type: 'save', payload: { brokersData: s.body } })
                    );
                  case 6:
                  case 'end':
                    return a.stop();
                }
            }, a);
          }),
          fetchFutures: u.a.mark(function a(e, t) {
            var r, n, s, c;
            return u.a.wrap(function(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (r = e.payload), (n = t.call), (s = t.put), (a.next = 4), n(l['h'], r);
                  case 4:
                    return (
                      (c = a.sent),
                      (a.next = 7),
                      s({ type: 'save', payload: { futuresData: c.body } })
                    );
                  case 7:
                  case 'end':
                    return a.stop();
                }
            }, a);
          }),
          setBroker: u.a.mark(function a(e, t) {
            var r, n, s, c;
            return u.a.wrap(function(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (r = e.payload), (n = t.call), (s = t.put), (a.next = 4), n(l['i'], r);
                  case 4:
                    return (
                      (c = a.sent), (a.next = 7), s({ type: 'save', payload: { currentBroker: c } })
                    );
                  case 7:
                  case 'end':
                    return a.stop();
                }
            }, a);
          }),
        },
        reducers: {
          save: function(a, e) {
            var t = e.payload;
            return n()({}, a, t);
          },
          clear: function() {
            return {
              visitData: [],
              visitData2: [],
              salesData: [],
              searchData: [],
              offlineData: [],
              offlineChartData: [],
              salesTypeData: [],
              salesTypeDataOnline: [],
              salesTypeDataOffline: [],
              radarData: [],
              brokersData: [],
            };
          },
        },
      };
    },
  },
]);
