(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [33],
  {
    JAxp: function(e, t, a) {
      e.exports = {
        login: 'antd-pro-components-login-index-login',
        getCaptcha: 'antd-pro-components-login-index-getCaptcha',
        icon: 'antd-pro-components-login-index-icon',
        other: 'antd-pro-components-login-index-other',
        register: 'antd-pro-components-login-index-register',
        prefixIcon: 'antd-pro-components-login-index-prefixIcon',
        submit: 'antd-pro-components-login-index-submit',
      };
    },
    Y5yc: function(e, t, a) {
      'use strict';
      a.r(t);
      a('Pwec');
      var s = a('CtXQ'),
        c = (a('sRBo'), a('kaz8')),
        i = (a('fOrg'), a('+KLJ')),
        n = a('p0pE'),
        l = a.n(n),
        p = (a('2qtc'), a('kLXV')),
        r = a('2Taf'),
        u = a.n(r),
        o = a('vZ4D'),
        m = a.n(o),
        d = a('l4Ni'),
        g = a.n(d),
        h = a('ujKo'),
        f = a.n(h),
        b = a('MhPg'),
        v = a.n(b),
        y = a('q1tI'),
        C = a.n(y),
        E = a('MuoO'),
        w = a('Y2fQ'),
        x = a('mOP9'),
        M = a.n(x),
        N = (a('y8nQ'), a('Vl3Y')),
        O = (a('Znn+'), a('ZTPi')),
        S = a('gWZ8'),
        T = a.n(S),
        j = (a('17x9'), a('TSYQ')),
        k = a.n(j),
        q = (a('14J3'), a('BMrR')),
        P = (a('+L6B'), a('2/Rp')),
        I = (a('jCWc'), a('kPKH')),
        F = (a('5NDa'), a('5rEg')),
        A = a('jehZ'),
        D = a.n(A),
        G = a('Y/ft'),
        L = a.n(G),
        B = a('BGR+'),
        z = a('JAxp'),
        K = a.n(z),
        U = {
          UserName: {
            props: {
              size: 'large',
              id: 'userName',
              prefix: C.a.createElement(s['a'], { type: 'user', className: K.a.prefixIcon }),
              placeholder: 'admin',
            },
            rules: [{ required: !0, message: 'Please enter username!' }],
          },
          Password: {
            props: {
              size: 'large',
              prefix: C.a.createElement(s['a'], { type: 'lock', className: K.a.prefixIcon }),
              type: 'password',
              id: 'password',
              placeholder: '888888',
            },
            rules: [{ required: !0, message: 'Please enter password!' }],
          },
          Mobile: {
            props: {
              size: 'large',
              prefix: C.a.createElement(s['a'], { type: 'mobile', className: K.a.prefixIcon }),
              placeholder: 'mobile number',
            },
            rules: [
              { required: !0, message: 'Please enter mobile number!' },
              { pattern: /^1\d{10}$/, message: 'Wrong mobile number format!' },
            ],
          },
          Captcha: {
            props: {
              size: 'large',
              prefix: C.a.createElement(s['a'], { type: 'mail', className: K.a.prefixIcon }),
              placeholder: 'captcha',
            },
            rules: [{ required: !0, message: 'Please enter Captcha!' }],
          },
        },
        J = Object(y['createContext'])(),
        V = J,
        Y = N['a'].Item,
        Z = (function(e) {
          function t(e) {
            var a;
            return (
              u()(this, t),
              (a = g()(this, f()(t).call(this, e))),
              (a.onGetCaptcha = function() {
                var e = a.props.onGetCaptcha,
                  t = e ? e() : null;
                !1 !== t &&
                  (t instanceof Promise
                    ? t.then(a.runGetCaptchaCountDown)
                    : a.runGetCaptchaCountDown());
              }),
              (a.getFormItemOptions = function(e) {
                var t = e.onChange,
                  a = e.defaultValue,
                  n = e.customprops,
                  r = e.rules,
                  o = { rules: r || n.rules };
                return t && (o.onChange = t), a && (o.initialValue = a), o;
              }),
              (a.runGetCaptchaCountDown = function() {
                var e = a.props.countDown,
                  t = e || 59;
                a.setState({ count: t }),
                  (a.interval = setInterval(function() {
                    (t -= 1), a.setState({ count: t }), 0 === t && clearInterval(a.interval);
                  }, 1e3));
              }),
              (a.state = { count: 0 }),
              a
            );
          }
          return (
            v()(t, e),
            m()(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.updateActive,
                    a = e.name;
                  t && t(a);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearInterval(this.interval);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.count,
                    t = this.props.form.getFieldDecorator,
                    a = this.props,
                    n = (a.onChange, a.customprops),
                    r = (a.defaultValue, a.rules, a.name),
                    o = a.getCaptchaButtonText,
                    i = a.getCaptchaSecondText,
                    s = (a.updateActive, a.type),
                    c = L()(a, [
                      'onChange',
                      'customprops',
                      'defaultValue',
                      'rules',
                      'name',
                      'getCaptchaButtonText',
                      'getCaptchaSecondText',
                      'updateActive',
                      'type',
                    ]),
                    l = this.getFormItemOptions(this.props),
                    p = c || {};
                  if ('Captcha' !== s)
                    return C.a.createElement(
                      Y,
                      null,
                      t(r, l)(C.a.createElement(F['a'], D()({}, n, p)))
                    );
                  var u = Object(B['a'])(p, ['onGetCaptcha', 'countDown']);
                  return C.a.createElement(
                    Y,
                    null,
                    C.a.createElement(
                      q['a'],
                      { gutter: 8 },
                      C.a.createElement(
                        I['a'],
                        { span: 16 },
                        t(r, l)(C.a.createElement(F['a'], D()({}, n, u)))
                      ),
                      C.a.createElement(
                        I['a'],
                        { span: 8 },
                        C.a.createElement(
                          P['a'],
                          {
                            disabled: e,
                            className: K.a.getCaptcha,
                            size: 'large',
                            onClick: this.onGetCaptcha,
                          },
                          e ? ''.concat(e, ' ').concat(i) : o
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']);
      Z.defaultProps = { getCaptchaButtonText: 'captcha', getCaptchaSecondText: 'second' };
      var Q = {};
      Object.keys(U).forEach(function(a) {
        var n = U[a];
        Q[a] = function(t) {
          return C.a.createElement(V.Consumer, null, function(e) {
            return C.a.createElement(
              Z,
              D()({ customprops: n.props, rules: n.rules }, t, {
                type: a,
                updateActive: e.updateActive,
                form: e.form,
              })
            );
          });
        };
      });
      var R = Q,
        W = O['a'].TabPane,
        X = (function() {
          var t = 0;
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
            return (t += 1), ''.concat(e).concat(t);
          };
        })(),
        $ = (function(e) {
          function a(e) {
            var t;
            return (
              u()(this, a), (t = g()(this, f()(a).call(this, e))), (t.uniqueId = X('login-tab-')), t
            );
          }
          return (
            v()(a, e),
            m()(a, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.tabUtil;
                  e.addTab(this.uniqueId);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return C.a.createElement(W, this.props, e);
                },
              },
            ]),
            a
          );
        })(y['Component']),
        H = function(t) {
          return C.a.createElement(V.Consumer, null, function(e) {
            return C.a.createElement($, D()({ tabUtil: e.tabUtil }, t));
          });
        };
      H.typeName = 'LoginTab';
      var _ = H,
        ee = N['a'].Item,
        te = function(e) {
          var t = e.className,
            a = L()(e, ['className']),
            n = k()(K.a.submit, t);
          return C.a.createElement(
            ee,
            null,
            C.a.createElement(
              P['a'],
              D()({ size: 'large', className: n, type: 'primary', htmlType: 'submit' }, a)
            )
          );
        },
        ae = te,
        ne = (function(e) {
          function t(e) {
            var c;
            return (
              u()(this, t),
              (c = g()(this, f()(t).call(this, e))),
              (c.onSwitch = function(e) {
                c.setState({ type: e });
                var t = c.props.onTabChange;
                t(e);
              }),
              (c.getContext = function() {
                var a = c.state.tabs,
                  e = c.props.form;
                return {
                  tabUtil: {
                    addTab: function(e) {
                      c.setState({ tabs: [].concat(T()(a), [e]) });
                    },
                    removeTab: function(t) {
                      c.setState({
                        tabs: a.filter(function(e) {
                          return e !== t;
                        }),
                      });
                    },
                  },
                  form: l()({}, e),
                  updateActive: function(e) {
                    var t = c.state,
                      a = t.type,
                      n = t.active;
                    n[a] ? n[a].push(e) : (n[a] = [e]), c.setState({ active: n });
                  },
                };
              }),
              (c.handleSubmit = function(e) {
                e.preventDefault();
                var t = c.state,
                  a = t.active,
                  n = t.type,
                  r = c.props,
                  o = r.form,
                  i = r.onSubmit,
                  s = a[n];
                o.validateFields(s, { force: !0 }, function(e, t) {
                  i(e, t);
                });
              }),
              (c.state = { type: e.defaultActiveKey, tabs: [], active: {} }),
              c
            );
          }
          return (
            v()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.className,
                    a = e.children,
                    n = this.state,
                    r = n.type,
                    o = n.tabs,
                    i = [],
                    s = [];
                  return (
                    C.a.Children.forEach(a, function(e) {
                      e && ('LoginTab' === e.type.typeName ? i.push(e) : s.push(e));
                    }),
                    C.a.createElement(
                      V.Provider,
                      { value: this.getContext() },
                      C.a.createElement(
                        'div',
                        { className: k()(t, K.a.login) },
                        C.a.createElement(
                          N['a'],
                          { onSubmit: this.handleSubmit },
                          o.length
                            ? C.a.createElement(
                                C.a.Fragment,
                                null,
                                C.a.createElement(
                                  O['a'],
                                  {
                                    animated: !1,
                                    className: K.a.tabs,
                                    activeKey: r,
                                    onChange: this.onSwitch,
                                  },
                                  i
                                ),
                                s
                              )
                            : a
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']);
      (ne.defaultProps = {
        className: '',
        defaultActiveKey: '',
        onTabChange: function() {},
        onSubmit: function() {},
      }),
        (ne.Tab = _),
        (ne.Submit = ae),
        Object.keys(R).forEach(function(e) {
          ne[e] = R[e];
        });
      var re,
        oe,
        ie,
        se = N['a'].create()(ne),
        ce = a('w2qy'),
        le = a.n(ce),
        pe = se.Tab,
        ue = se.UserName,
        me = se.Password,
        de = se.Mobile,
        ge = se.Captcha,
        he = se.Submit,
        fe = ((re = Object(E['connect'])(function(e) {
          var t = e.login,
            a = e.loading;
          return { login: t, submitting: a.effects['login/login'] };
        })),
        re(
          ((ie = (function(e) {
            function r() {
              var e, o;
              u()(this, r);
              for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
                a[n] = arguments[n];
              return (
                (o = g()(this, (e = f()(r)).call.apply(e, [this].concat(a)))),
                (o.state = { type: 'account', autoLogin: !0 }),
                (o.onTabChange = function(e) {
                  o.setState({ type: e });
                }),
                (o.onGetCaptcha = function() {
                  return new Promise(function(n, r) {
                    o.loginForm.validateFields(['mobile'], {}, function(e, t) {
                      if (e) r(e);
                      else {
                        var a = o.props.dispatch;
                        a({ type: 'login/getCaptcha', payload: t.mobile })
                          .then(n)
                          .catch(r),
                          p['a'].info({
                            title: Object(w['formatMessage'])({
                              id: 'app.login.verification-code-warning',
                            }),
                          });
                      }
                    });
                  });
                }),
                (o.handleSubmit = function(e, t) {
                  if (!e) {
                    var a = o.props.dispatch;
                    a({ type: 'login/login', payload: l()({}, t) });
                  }
                }),
                (o.changeAutoLogin = function(e) {
                  o.setState({ autoLogin: e.target.checked });
                }),
                (o.renderMessage = function(e) {
                  return C.a.createElement(i['a'], {
                    style: { marginBottom: 24 },
                    message: e,
                    type: 'error',
                    showIcon: !0,
                  });
                }),
                o
              );
            }
            return (
              v()(r, e),
              m()(r, [
                {
                  key: 'render',
                  value: function() {
                    var t = this,
                      e = this.props,
                      a = e.login,
                      n = e.submitting,
                      r = this.state,
                      o = r.type,
                      i = r.autoLogin;
                    return C.a.createElement(
                      'div',
                      { className: le.a.main },
                      C.a.createElement(
                        se,
                        {
                          defaultActiveKey: o,
                          onTabChange: this.onTabChange,
                          onSubmit: this.handleSubmit,
                          ref: function(e) {
                            t.loginForm = e;
                          },
                        },
                        C.a.createElement(
                          pe,
                          {
                            key: 'account',
                            tab: Object(w['formatMessage'])({
                              id: 'app.login.tab-login-credentials',
                            }),
                          },
                          'error' === a.status &&
                            'account' === a.type &&
                            !n &&
                            this.renderMessage(
                              Object(w['formatMessage'])({
                                id: 'app.login.message-invalid-credentials',
                              })
                            ),
                          C.a.createElement(ue, {
                            name: 'username',
                            placeholder: ''.concat(
                              Object(w['formatMessage'])({ id: 'app.login.userName' }),
                              ': admin or user'
                            ),
                            rules: [
                              {
                                required: !0,
                                message: Object(w['formatMessage'])({
                                  id: 'validation.userName.required',
                                }),
                              },
                            ],
                          }),
                          C.a.createElement(me, {
                            name: 'password',
                            placeholder: ''.concat(
                              Object(w['formatMessage'])({ id: 'app.login.password' }),
                              ': ant.design'
                            ),
                            rules: [
                              {
                                required: !0,
                                message: Object(w['formatMessage'])({
                                  id: 'validation.password.required',
                                }),
                              },
                            ],
                            onPressEnter: function(e) {
                              e.preventDefault(), t.loginForm.validateFields(t.handleSubmit);
                            },
                          })
                        ),
                        C.a.createElement(
                          pe,
                          {
                            key: 'mobile',
                            tab: Object(w['formatMessage'])({ id: 'app.login.tab-login-mobile' }),
                          },
                          'error' === a.status &&
                            'mobile' === a.type &&
                            !n &&
                            this.renderMessage(
                              Object(w['formatMessage'])({
                                id: 'app.login.message-invalid-verification-code',
                              })
                            ),
                          C.a.createElement(de, {
                            name: 'mobile',
                            placeholder: Object(w['formatMessage'])({
                              id: 'form.phone-number.placeholder',
                            }),
                            rules: [
                              {
                                required: !0,
                                message: Object(w['formatMessage'])({
                                  id: 'validation.phone-number.required',
                                }),
                              },
                              {
                                pattern: /^1\d{10}$/,
                                message: Object(w['formatMessage'])({
                                  id: 'validation.phone-number.wrong-format',
                                }),
                              },
                            ],
                          }),
                          C.a.createElement(ge, {
                            name: 'captcha',
                            placeholder: Object(w['formatMessage'])({
                              id: 'form.verification-code.placeholder',
                            }),
                            countDown: 120,
                            onGetCaptcha: this.onGetCaptcha,
                            getCaptchaButtonText: Object(w['formatMessage'])({
                              id: 'form.get-captcha',
                            }),
                            getCaptchaSecondText: Object(w['formatMessage'])({
                              id: 'form.captcha.second',
                            }),
                            rules: [
                              {
                                required: !0,
                                message: Object(w['formatMessage'])({
                                  id: 'validation.verification-code.required',
                                }),
                              },
                            ],
                          })
                        ),
                        C.a.createElement(
                          'div',
                          null,
                          C.a.createElement(
                            c['a'],
                            { checked: i, onChange: this.changeAutoLogin },
                            C.a.createElement(w['FormattedMessage'], {
                              id: 'app.login.remember-me',
                            })
                          ),
                          C.a.createElement(
                            'a',
                            { style: { float: 'right' }, href: '' },
                            C.a.createElement(w['FormattedMessage'], {
                              id: 'app.login.forgot-password',
                            })
                          )
                        ),
                        C.a.createElement(
                          he,
                          { loading: n },
                          C.a.createElement(w['FormattedMessage'], { id: 'app.login.login' })
                        ),
                        C.a.createElement(
                          'div',
                          { className: le.a.other },
                          C.a.createElement(w['FormattedMessage'], {
                            id: 'app.login.sign-in-with',
                          }),
                          C.a.createElement(s['a'], {
                            type: 'alipay-circle',
                            className: le.a.icon,
                            theme: 'outlined',
                          }),
                          C.a.createElement(s['a'], {
                            type: 'taobao-circle',
                            className: le.a.icon,
                            theme: 'outlined',
                          }),
                          C.a.createElement(s['a'], {
                            type: 'weibo-circle',
                            className: le.a.icon,
                            theme: 'outlined',
                          }),
                          C.a.createElement(
                            M.a,
                            { className: le.a.register, to: '/user/register' },
                            C.a.createElement(w['FormattedMessage'], { id: 'app.login.signup' })
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              r
            );
          })(y['Component'])),
          (oe = ie))
        ) || oe);
      t['default'] = fe;
    },
    w2qy: function(e, t, a) {
      e.exports = {
        main: 'antd-pro-pages-user-login-main',
        icon: 'antd-pro-pages-user-login-icon',
        other: 'antd-pro-pages-user-login-other',
        register: 'antd-pro-pages-user-login-register',
      };
    },
  },
]);
