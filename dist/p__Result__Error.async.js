(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [31],
  {
    s8Kb: function(e, t, a) {
      'use strict';
      a.r(t);
      a('IzEo');
      var r = a('bx4M'),
        l = (a('+L6B'), a('2/Rp')),
        n = (a('Pwec'), a('CtXQ')),
        o = a('q1tI'),
        s = a.n(o),
        i = a('Y2fQ'),
        m = a('ALo4'),
        c = a('zHco'),
        d = s.a.createElement(
          o['Fragment'],
          null,
          s.a.createElement(
            'div',
            {
              style: {
                fontSize: 16,
                color: 'rgba(0, 0, 0, 0.85)',
                fontWeight: '500',
                marginBottom: 16,
              },
            },
            s.a.createElement(i['FormattedMessage'], {
              id: 'app.result.error.hint-title',
              defaultMessage: 'The content you submitted has the following error:',
            })
          ),
          s.a.createElement(
            'div',
            { style: { marginBottom: 16 } },
            s.a.createElement(n['a'], {
              style: { color: '#f5222d', marginRight: 8 },
              type: 'close-circle-o',
            }),
            s.a.createElement(i['FormattedMessage'], {
              id: 'app.result.error.hint-text1',
              defaultMessage: 'Your account has been frozen',
            }),
            s.a.createElement(
              'a',
              { style: { marginLeft: 16 } },
              s.a.createElement(i['FormattedMessage'], {
                id: 'app.result.error.hint-btn1',
                defaultMessage: 'Thaw immediately',
              }),
              s.a.createElement(n['a'], { type: 'right' })
            )
          ),
          s.a.createElement(
            'div',
            null,
            s.a.createElement(n['a'], {
              style: { color: '#f5222d', marginRight: 8 },
              type: 'close-circle-o',
            }),
            s.a.createElement(i['FormattedMessage'], {
              id: 'app.result.error.hint-text2',
              defaultMessage: 'Your account is not yet eligible to apply',
            }),
            s.a.createElement(
              'a',
              { style: { marginLeft: 16 } },
              s.a.createElement(i['FormattedMessage'], {
                id: 'app.result.error.hint-btn2',
                defaultMessage: 'Upgrade immediately',
              }),
              s.a.createElement(n['a'], { type: 'right' })
            )
          )
        ),
        p = s.a.createElement(
          l['a'],
          { type: 'primary' },
          s.a.createElement(i['FormattedMessage'], {
            id: 'app.result.error.btn-text',
            defaultMessage: 'Return to modify',
          })
        );
      t['default'] = function() {
        return s.a.createElement(
          c['a'],
          null,
          s.a.createElement(
            r['a'],
            { bordered: !1 },
            s.a.createElement(m['a'], {
              type: 'error',
              title: Object(i['formatMessage'])({ id: 'app.result.error.title' }),
              description: Object(i['formatMessage'])({ id: 'app.result.error.description' }),
              extra: d,
              actions: p,
              style: { marginTop: 48, marginBottom: 16 },
            })
          )
        );
      };
    },
  },
]);
