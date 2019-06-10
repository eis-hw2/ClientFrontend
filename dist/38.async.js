(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [38],
  {
    '4Ofr': function(e, t, n) {
      e.exports = {
        themeColor: 'antd-pro-components-setting-drawer-theme-color-themeColor',
        title: 'antd-pro-components-setting-drawer-theme-color-title',
        colorBlock: 'antd-pro-components-setting-drawer-theme-color-colorBlock',
      };
    },
    BFsb: function(e, t, n) {
      e.exports = {
        content: 'antd-pro-components-setting-drawer-index-content',
        blockChecbox: 'antd-pro-components-setting-drawer-index-blockChecbox',
        item: 'antd-pro-components-setting-drawer-index-item',
        selectIcon: 'antd-pro-components-setting-drawer-index-selectIcon',
        color_block: 'antd-pro-components-setting-drawer-index-color_block',
        title: 'antd-pro-components-setting-drawer-index-title',
        handle: 'antd-pro-components-setting-drawer-index-handle',
        productionHint: 'antd-pro-components-setting-drawer-index-productionHint',
      };
    },
    P5Jw: function(e, t, n) {
      'use strict';
      var a = n('rHrb'),
        o = a.CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    PceP: function(e, t, n) {
      'use strict';
      n.r(t);
      n('bbsP');
      var a,
        o,
        r,
        c = n('/wGt'),
        l = (n('fOrg'), n('+KLJ')),
        s = (n('+L6B'), n('2/Rp')),
        p = (n('miYZ'), n('tsqr')),
        d = (n('/zsF'), n('PArb')),
        u = (n('Pwec'), n('CtXQ')),
        m = (n('5Dmo'), n('3S7+')),
        g = (n('Mwp2'), n('VXEj')),
        f = (n('BoS7'), n('Sdc0')),
        i = n('2Taf'),
        h = n.n(i),
        y = n('vZ4D'),
        b = n.n(y),
        v = n('l4Ni'),
        k = n.n(v),
        C = n('ujKo'),
        E = n.n(C),
        O = n('MhPg'),
        w = n.n(O),
        j = n('p0pE'),
        x = n.n(j),
        S = (n('OaEy'), n('2fM7')),
        M = n('q1tI'),
        P = n.n(M),
        N = n('Y2fQ'),
        _ = n('P5Jw'),
        H = n('MuoO'),
        z = n('BGR+'),
        F = n('BFsb'),
        I = n.n(F),
        B = n('jehZ'),
        T = n.n(B),
        D = n('Y/ft'),
        L = n.n(D),
        R = n('4Ofr'),
        A = n.n(R),
        J = function(e) {
          var t = e.color,
            n = e.check,
            a = L()(e, ['color', 'check']);
          return P.a.createElement(
            'div',
            T()({}, a, { style: { backgroundColor: t } }),
            n ? P.a.createElement(u['a'], { type: 'check' }) : ''
          );
        },
        q = function(e) {
          var t = e.colors,
            n = e.title,
            a = e.value,
            o = e.onChange,
            r = t;
          return (
            t ||
              (r = [
                { key: 'dust', color: '#F5222D' },
                { key: 'volcano', color: '#FA541C' },
                { key: 'sunset', color: '#FAAD14' },
                { key: 'cyan', color: '#13C2C2' },
                { key: 'green', color: '#52C41A' },
                { key: 'daybreak', color: '#1890FF' },
                { key: 'geekblue', color: '#2F54EB' },
                { key: 'purple', color: '#722ED1' },
              ]),
            P.a.createElement(
              'div',
              { className: A.a.themeColor },
              P.a.createElement('h3', { className: A.a.title }, n),
              P.a.createElement(
                'div',
                { className: A.a.content },
                r.map(function(e) {
                  var t = e.key,
                    n = e.color;
                  return P.a.createElement(
                    m['a'],
                    {
                      key: n,
                      title: Object(N['formatMessage'])({
                        id: 'app.setting.themecolor.'.concat(t),
                      }),
                    },
                    P.a.createElement(J, {
                      className: A.a.colorBlock,
                      color: n,
                      check: a === n,
                      onClick: function() {
                        return o && o(n);
                      },
                    })
                  );
                })
              )
            )
          );
        },
        W = q,
        Y = function(e) {
          var t = e.value,
            n = e.onChange,
            a = e.list;
          return P.a.createElement(
            'div',
            { className: I.a.blockChecbox, key: t },
            a.map(function(e) {
              return P.a.createElement(
                m['a'],
                { title: e.title, key: e.key },
                P.a.createElement(
                  'div',
                  {
                    className: I.a.item,
                    onClick: function() {
                      return n(e.key);
                    },
                  },
                  P.a.createElement('img', { src: e.url, alt: e.key }),
                  P.a.createElement(
                    'div',
                    {
                      className: I.a.selectIcon,
                      style: { display: t === e.key ? 'block' : 'none' },
                    },
                    P.a.createElement(u['a'], { type: 'check' })
                  )
                )
              );
            })
          );
        },
        Q = Y,
        Z = S['a'].Option,
        K = function(e) {
          var t = e.children,
            n = e.title,
            a = e.style;
          return P.a.createElement(
            'div',
            { style: x()({}, a, { marginBottom: 24 }) },
            P.a.createElement('h3', { className: I.a.title }, n),
            t
          );
        },
        X = ((a = Object(H['connect'])(function(e) {
          var t = e.setting;
          return { setting: t };
        })),
        a(
          ((r = (function(e) {
            function o() {
              var e, i;
              h()(this, o);
              for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                n[a] = arguments[a];
              return (
                (i = k()(this, (e = E()(o)).call.apply(e, [this].concat(n)))),
                (i.state = { collapse: !1 }),
                (i.getLayoutSetting = function() {
                  var e = i.props.setting,
                    t = e.contentWidth,
                    n = e.fixedHeader,
                    a = e.layout,
                    o = e.autoHideHeader,
                    r = e.fixSiderbar;
                  return [
                    {
                      title: Object(N['formatMessage'])({ id: 'app.setting.content-width' }),
                      action: P.a.createElement(
                        S['a'],
                        {
                          value: t,
                          size: 'small',
                          onSelect: function(e) {
                            return i.changeSetting('contentWidth', e);
                          },
                          style: { width: 80 },
                        },
                        'sidemenu' === a
                          ? null
                          : P.a.createElement(
                              Z,
                              { value: 'Fixed' },
                              Object(N['formatMessage'])({ id: 'app.setting.content-width.fixed' })
                            ),
                        P.a.createElement(
                          Z,
                          { value: 'Fluid' },
                          Object(N['formatMessage'])({ id: 'app.setting.content-width.fluid' })
                        )
                      ),
                    },
                    {
                      title: Object(N['formatMessage'])({ id: 'app.setting.fixedheader' }),
                      action: P.a.createElement(f['a'], {
                        size: 'small',
                        checked: !!n,
                        onChange: function(e) {
                          return i.changeSetting('fixedHeader', e);
                        },
                      }),
                    },
                    {
                      title: Object(N['formatMessage'])({ id: 'app.setting.hideheader' }),
                      disabled: !n,
                      disabledReason: Object(N['formatMessage'])({
                        id: 'app.setting.hideheader.hint',
                      }),
                      action: P.a.createElement(f['a'], {
                        size: 'small',
                        checked: !!o,
                        onChange: function(e) {
                          return i.changeSetting('autoHideHeader', e);
                        },
                      }),
                    },
                    {
                      title: Object(N['formatMessage'])({ id: 'app.setting.fixedsidebar' }),
                      disabled: 'topmenu' === a,
                      disabledReason: Object(N['formatMessage'])({
                        id: 'app.setting.fixedsidebar.hint',
                      }),
                      action: P.a.createElement(f['a'], {
                        size: 'small',
                        checked: !!r,
                        onChange: function(e) {
                          return i.changeSetting('fixSiderbar', e);
                        },
                      }),
                    },
                  ];
                }),
                (i.changeSetting = function(e, t) {
                  var n = i.props.setting,
                    a = x()({}, n);
                  (a[e] = t),
                    'layout' === e
                      ? (a.contentWidth = 'topmenu' === t ? 'Fixed' : 'Fluid')
                      : 'fixedHeader' !== e || t || (a.autoHideHeader = !1),
                    i.setState(a, function() {
                      var e = i.props.dispatch;
                      e({ type: 'setting/changeSetting', payload: i.state });
                    });
                }),
                (i.togglerContent = function() {
                  var e = i.state.collapse;
                  i.setState({ collapse: !e });
                }),
                (i.renderLayoutSettingItem = function(e) {
                  var t = P.a.cloneElement(e.action, { disabled: e.disabled });
                  return P.a.createElement(
                    m['a'],
                    { title: e.disabled ? e.disabledReason : '', placement: 'left' },
                    P.a.createElement(
                      g['a'].Item,
                      { actions: [t] },
                      P.a.createElement(
                        'span',
                        { style: { opacity: e.disabled ? '0.5' : '' } },
                        e.title
                      )
                    )
                  );
                }),
                i
              );
            }
            return (
              w()(o, e),
              b()(o, [
                {
                  key: 'render',
                  value: function() {
                    var t = this,
                      e = this.props.setting,
                      n = e.navTheme,
                      a = e.primaryColor,
                      o = e.layout,
                      r = e.colorWeak,
                      i = this.state.collapse;
                    return P.a.createElement(
                      c['a'],
                      {
                        visible: i,
                        width: 300,
                        onClose: this.togglerContent,
                        placement: 'right',
                        handler: P.a.createElement(
                          'div',
                          { className: I.a.handle, onClick: this.togglerContent },
                          P.a.createElement(u['a'], {
                            type: i ? 'close' : 'setting',
                            style: { color: '#fff', fontSize: 20 },
                          })
                        ),
                        style: { zIndex: 999 },
                      },
                      P.a.createElement(
                        'div',
                        { className: I.a.content },
                        P.a.createElement(
                          K,
                          { title: Object(N['formatMessage'])({ id: 'app.setting.pagestyle' }) },
                          P.a.createElement(Q, {
                            list: [
                              {
                                key: 'dark',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                title: Object(N['formatMessage'])({
                                  id: 'app.setting.pagestyle.dark',
                                }),
                              },
                              {
                                key: 'light',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                title: Object(N['formatMessage'])({
                                  id: 'app.setting.pagestyle.light',
                                }),
                              },
                            ],
                            value: n,
                            onChange: function(e) {
                              return t.changeSetting('navTheme', e);
                            },
                          })
                        ),
                        P.a.createElement(W, {
                          title: Object(N['formatMessage'])({ id: 'app.setting.themecolor' }),
                          value: a,
                          onChange: function(e) {
                            return t.changeSetting('primaryColor', e);
                          },
                        }),
                        P.a.createElement(d['a'], null),
                        P.a.createElement(
                          K,
                          {
                            title: Object(N['formatMessage'])({ id: 'app.setting.navigationmode' }),
                          },
                          P.a.createElement(Q, {
                            list: [
                              {
                                key: 'sidemenu',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                title: Object(N['formatMessage'])({ id: 'app.setting.sidemenu' }),
                              },
                              {
                                key: 'topmenu',
                                url:
                                  'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                title: Object(N['formatMessage'])({ id: 'app.setting.topmenu' }),
                              },
                            ],
                            value: o,
                            onChange: function(e) {
                              return t.changeSetting('layout', e);
                            },
                          })
                        ),
                        P.a.createElement(g['a'], {
                          split: !1,
                          dataSource: this.getLayoutSetting(),
                          renderItem: this.renderLayoutSettingItem,
                        }),
                        P.a.createElement(d['a'], null),
                        P.a.createElement(
                          K,
                          {
                            title: Object(N['formatMessage'])({ id: 'app.setting.othersettings' }),
                          },
                          P.a.createElement(g['a'], {
                            split: !1,
                            renderItem: this.renderLayoutSettingItem,
                            dataSource: [
                              {
                                title: Object(N['formatMessage'])({ id: 'app.setting.weakmode' }),
                                action: P.a.createElement(f['a'], {
                                  size: 'small',
                                  checked: !!r,
                                  onChange: function(e) {
                                    return t.changeSetting('colorWeak', e);
                                  },
                                }),
                              },
                            ],
                          })
                        ),
                        P.a.createElement(d['a'], null),
                        P.a.createElement(
                          _['CopyToClipboard'],
                          {
                            text: JSON.stringify(Object(z['a'])(e, ['colorWeak']), null, 2),
                            onCopy: function() {
                              return p['a'].success(
                                Object(N['formatMessage'])({ id: 'app.setting.copyinfo' })
                              );
                            },
                          },
                          P.a.createElement(
                            s['a'],
                            { block: !0, icon: 'copy' },
                            Object(N['formatMessage'])({ id: 'app.setting.copy' })
                          )
                        ),
                        P.a.createElement(l['a'], {
                          type: 'warning',
                          className: I.a.productionHint,
                          message: P.a.createElement(
                            'div',
                            null,
                            Object(N['formatMessage'])({ id: 'app.setting.production.hint' }),
                            ' ',
                            P.a.createElement(
                              'a',
                              {
                                href: 'https://u.ant.design/pro-v2-default-settings',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              },
                              'src/defaultSettings.js'
                            )
                          ),
                        })
                      )
                    );
                  },
                },
              ]),
              o
            );
          })(M['Component'])),
          (o = r))
        ) || o);
      t['default'] = X;
    },
    rHrb: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.CopyToClipboard = void 0);
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        a = (function() {
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e;
          };
        })(),
        r = n('q1tI'),
        s = c(r),
        i = n('+QRC'),
        p = c(i);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        var n = {};
        for (var a in e)
          t.indexOf(a) >= 0 || (Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]));
        return n;
      }
      function d(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function m(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var g = (t.CopyToClipboard = (function(e) {
        function i() {
          var e, t, l, n;
          d(this, i);
          for (var a = arguments.length, o = Array(a), r = 0; r < a; r++) o[r] = arguments[r];
          return (
            (l = u(
              this,
              (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [this].concat(o))
            )),
            (t = l),
            (l.onClick = function(e) {
              var t = l.props,
                n = t.text,
                a = t.onCopy,
                o = t.children,
                r = t.options,
                i = s.default.Children.only(o),
                c = (0, p.default)(n, r);
              a && a(n, c),
                i && i.props && 'function' === typeof i.props.onClick && i.props.onClick(e);
            }),
            (n = t),
            u(l, n)
          );
        }
        return (
          m(i, e),
          a(i, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = l(e, ['text', 'onCopy', 'options', 'children']),
                  a = s.default.Children.only(t);
                return s.default.cloneElement(a, o({}, n, { onClick: this.onClick }));
              },
            },
          ]),
          i
        );
      })(s.default.PureComponent));
      g.defaultProps = { onCopy: void 0, options: void 0 };
    },
  },
]);
