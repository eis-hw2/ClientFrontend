(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [34],
  {
    '5WY0': function(e, a, t) {
      e.exports = {
        main: 'antd-pro-pages-user-register-main',
        getCaptcha: 'antd-pro-pages-user-register-getCaptcha',
        submit: 'antd-pro-pages-user-register-submit',
        login: 'antd-pro-pages-user-register-login',
        error: 'antd-pro-pages-user-register-error',
        success: 'antd-pro-pages-user-register-success',
        warning: 'antd-pro-pages-user-register-warning',
        'progress-pass': 'antd-pro-pages-user-register-progress-pass',
        progress: 'antd-pro-pages-user-register-progress',
      };
    },
    cq3J: function(e, a, t) {
      'use strict';
      t.r(a);
      t('14J3');
      var r,
        s,
        i,
        n,
        c = t('BMrR'),
        m = (t('+L6B'), t('2/Rp')),
        p = (t('jCWc'), t('kPKH')),
        d = (t('Q9mQ'), t('diRs')),
        l = (t('MXD1'), t('CFYs')),
        o = t('p0pE'),
        g = t.n(o),
        u = (t('2qtc'), t('kLXV')),
        f = t('2Taf'),
        h = t.n(f),
        v = t('vZ4D'),
        E = t.n(v),
        b = t('l4Ni'),
        w = t.n(b),
        M = t('ujKo'),
        y = t.n(M),
        O = t('MhPg'),
        j = t.n(O),
        k = (t('5NDa'), t('5rEg')),
        F = (t('OaEy'), t('2fM7')),
        P = (t('y8nQ'), t('Vl3Y')),
        C = t('q1tI'),
        S = t.n(C),
        q = t('MuoO'),
        N = t('Y2fQ'),
        x = t('mOP9'),
        D = t.n(x),
        z = t('usdK'),
        I = t.n(z),
        V = t('5WY0'),
        W = t.n(V),
        Y = P['a'].Item,
        J = F['a'].Option,
        Q = k['a'].Group,
        B = {
          ok: S.a.createElement(
            'div',
            { className: W.a.success },
            S.a.createElement(N['FormattedMessage'], { id: 'validation.password.strength.strong' })
          ),
          pass: S.a.createElement(
            'div',
            { className: W.a.warning },
            S.a.createElement(N['FormattedMessage'], { id: 'validation.password.strength.medium' })
          ),
          poor: S.a.createElement(
            'div',
            { className: W.a.error },
            S.a.createElement(N['FormattedMessage'], { id: 'validation.password.strength.short' })
          ),
        },
        G = { ok: 'success', pass: 'normal', poor: 'exception' },
        K = ((r = Object(q['connect'])(function(e) {
          var a = e.register,
            t = e.loading;
          return { register: a, submitting: t.effects['register/submit'] };
        })),
        (s = P['a'].create()),
        r(
          (i =
            s(
              ((n = (function(e) {
                function s() {
                  var e, o;
                  h()(this, s);
                  for (var a = arguments.length, t = new Array(a), r = 0; r < a; r++)
                    t[r] = arguments[r];
                  return (
                    (o = w()(this, (e = y()(s)).call.apply(e, [this].concat(t)))),
                    (o.state = { count: 0, confirmDirty: !1, visible: !1, help: '', prefix: '86' }),
                    (o.onGetCaptcha = function() {
                      var e = 59;
                      o.setState({ count: e }),
                        (o.interval = setInterval(function() {
                          (e -= 1), o.setState({ count: e }), 0 === e && clearInterval(o.interval);
                        }, 1e3)),
                        u['a'].info({
                          title: Object(N['formatMessage'])({
                            id: 'app.login.verification-code-warning',
                          }),
                        });
                    }),
                    (o.getPasswordStatus = function() {
                      var e = o.props.form,
                        a = e.getFieldValue('password');
                      return a && a.length > 9 ? 'ok' : a && a.length > 5 ? 'pass' : 'poor';
                    }),
                    (o.handleSubmit = function(e) {
                      e.preventDefault();
                      var a = o.props,
                        t = a.form,
                        r = a.dispatch;
                      t.validateFields({ force: !0 }, function(e, a) {
                        if (!e) {
                          var t = o.state.prefix;
                          r({ type: 'register/submit', payload: g()({}, a, { prefix: t }) });
                        }
                      });
                    }),
                    (o.handleConfirmBlur = function(e) {
                      var a = e.target.value,
                        t = o.state.confirmDirty;
                      o.setState({ confirmDirty: t || !!a });
                    }),
                    (o.checkConfirm = function(e, a, t) {
                      var r = o.props.form;
                      a && a !== r.getFieldValue('password')
                        ? t(Object(N['formatMessage'])({ id: 'validation.password.twice' }))
                        : t();
                    }),
                    (o.checkPassword = function(e, a, t) {
                      var r = o.state,
                        s = r.visible,
                        i = r.confirmDirty;
                      if (a)
                        if (
                          (o.setState({ help: '' }),
                          s || o.setState({ visible: !!a }),
                          a.length < 6)
                        )
                          t('error');
                        else {
                          var n = o.props.form;
                          a && i && n.validateFields(['confirm'], { force: !0 }), t();
                        }
                      else
                        o.setState({
                          help: Object(N['formatMessage'])({ id: 'validation.password.required' }),
                          visible: !!a,
                        }),
                          t('error');
                    }),
                    (o.changePrefix = function(e) {
                      o.setState({ prefix: e });
                    }),
                    (o.renderPasswordProgress = function() {
                      var e = o.props.form,
                        a = e.getFieldValue('password'),
                        t = o.getPasswordStatus();
                      return a && a.length
                        ? S.a.createElement(
                            'div',
                            { className: W.a['progress-'.concat(t)] },
                            S.a.createElement(l['a'], {
                              status: G[t],
                              className: W.a.progress,
                              strokeWidth: 6,
                              percent: 10 * a.length > 100 ? 100 : 10 * a.length,
                              showInfo: !1,
                            })
                          )
                        : null;
                    }),
                    o
                  );
                }
                return (
                  j()(s, e),
                  E()(s, [
                    {
                      key: 'componentDidUpdate',
                      value: function() {
                        var e = this.props,
                          a = e.form,
                          t = e.register,
                          r = a.getFieldValue('mail');
                        'ok' === t.status &&
                          I.a.push({ pathname: '/user/register-result', state: { account: r } });
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
                        var e = this.props,
                          a = e.form,
                          t = e.submitting,
                          r = a.getFieldDecorator,
                          s = this.state,
                          i = s.count,
                          n = s.prefix,
                          o = s.help,
                          l = s.visible;
                        return S.a.createElement(
                          'div',
                          { className: W.a.main },
                          S.a.createElement(
                            'h3',
                            null,
                            S.a.createElement(N['FormattedMessage'], {
                              id: 'app.register.register',
                            })
                          ),
                          S.a.createElement(
                            P['a'],
                            { onSubmit: this.handleSubmit },
                            S.a.createElement(
                              Y,
                              null,
                              r('mail', {
                                rules: [
                                  {
                                    required: !0,
                                    message: Object(N['formatMessage'])({
                                      id: 'validation.email.required',
                                    }),
                                  },
                                  {
                                    type: 'email',
                                    message: Object(N['formatMessage'])({
                                      id: 'validation.email.wrong-format',
                                    }),
                                  },
                                ],
                              })(
                                S.a.createElement(k['a'], {
                                  size: 'large',
                                  placeholder: Object(N['formatMessage'])({
                                    id: 'form.email.placeholder',
                                  }),
                                })
                              )
                            ),
                            S.a.createElement(
                              Y,
                              { help: o },
                              S.a.createElement(
                                d['a'],
                                {
                                  getPopupContainer: function(e) {
                                    return e.parentNode;
                                  },
                                  content: S.a.createElement(
                                    'div',
                                    { style: { padding: '4px 0' } },
                                    B[this.getPasswordStatus()],
                                    this.renderPasswordProgress(),
                                    S.a.createElement(
                                      'div',
                                      { style: { marginTop: 10 } },
                                      S.a.createElement(N['FormattedMessage'], {
                                        id: 'validation.password.strength.msg',
                                      })
                                    )
                                  ),
                                  overlayStyle: { width: 240 },
                                  placement: 'right',
                                  visible: l,
                                },
                                r('password', { rules: [{ validator: this.checkPassword }] })(
                                  S.a.createElement(k['a'], {
                                    size: 'large',
                                    type: 'password',
                                    placeholder: Object(N['formatMessage'])({
                                      id: 'form.password.placeholder',
                                    }),
                                  })
                                )
                              )
                            ),
                            S.a.createElement(
                              Y,
                              null,
                              r('confirm', {
                                rules: [
                                  {
                                    required: !0,
                                    message: Object(N['formatMessage'])({
                                      id: 'validation.confirm-password.required',
                                    }),
                                  },
                                  { validator: this.checkConfirm },
                                ],
                              })(
                                S.a.createElement(k['a'], {
                                  size: 'large',
                                  type: 'password',
                                  placeholder: Object(N['formatMessage'])({
                                    id: 'form.confirm-password.placeholder',
                                  }),
                                })
                              )
                            ),
                            S.a.createElement(
                              Y,
                              null,
                              S.a.createElement(
                                Q,
                                { compact: !0 },
                                S.a.createElement(
                                  F['a'],
                                  {
                                    size: 'large',
                                    value: n,
                                    onChange: this.changePrefix,
                                    style: { width: '20%' },
                                  },
                                  S.a.createElement(J, { value: '86' }, '+86'),
                                  S.a.createElement(J, { value: '87' }, '+87')
                                ),
                                r('mobile', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: Object(N['formatMessage'])({
                                        id: 'validation.phone-number.required',
                                      }),
                                    },
                                    {
                                      pattern: /^\d{11}$/,
                                      message: Object(N['formatMessage'])({
                                        id: 'validation.phone-number.wrong-format',
                                      }),
                                    },
                                  ],
                                })(
                                  S.a.createElement(k['a'], {
                                    size: 'large',
                                    style: { width: '80%' },
                                    placeholder: Object(N['formatMessage'])({
                                      id: 'form.phone-number.placeholder',
                                    }),
                                  })
                                )
                              )
                            ),
                            S.a.createElement(
                              Y,
                              null,
                              S.a.createElement(
                                c['a'],
                                { gutter: 8 },
                                S.a.createElement(
                                  p['a'],
                                  { span: 16 },
                                  r('captcha', {
                                    rules: [
                                      {
                                        required: !0,
                                        message: Object(N['formatMessage'])({
                                          id: 'validation.verification-code.required',
                                        }),
                                      },
                                    ],
                                  })(
                                    S.a.createElement(k['a'], {
                                      size: 'large',
                                      placeholder: Object(N['formatMessage'])({
                                        id: 'form.verification-code.placeholder',
                                      }),
                                    })
                                  )
                                ),
                                S.a.createElement(
                                  p['a'],
                                  { span: 8 },
                                  S.a.createElement(
                                    m['a'],
                                    {
                                      size: 'large',
                                      disabled: i,
                                      className: W.a.getCaptcha,
                                      onClick: this.onGetCaptcha,
                                    },
                                    i
                                      ? ''.concat(i, ' s')
                                      : Object(N['formatMessage'])({
                                          id: 'app.register.get-verification-code',
                                        })
                                  )
                                )
                              )
                            ),
                            S.a.createElement(
                              Y,
                              null,
                              S.a.createElement(
                                m['a'],
                                {
                                  size: 'large',
                                  loading: t,
                                  className: W.a.submit,
                                  type: 'primary',
                                  htmlType: 'submit',
                                },
                                S.a.createElement(N['FormattedMessage'], {
                                  id: 'app.register.register',
                                })
                              ),
                              S.a.createElement(
                                D.a,
                                { className: W.a.login, to: '/User/Login' },
                                S.a.createElement(N['FormattedMessage'], {
                                  id: 'app.register.sign-in',
                                })
                              )
                            )
                          )
                        );
                      },
                    },
                  ]),
                  s
                );
              })(C['Component'])),
              (i = n))
            ) || i)
        ) || i);
      a['default'] = K;
    },
  },
]);
