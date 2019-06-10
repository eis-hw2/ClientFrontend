(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [22],
  {
    '7GcH': function(e, a, t) {
      e.exports = {
        stepForm: 'antd-pro-pages-forms-step-form-style-stepForm',
        stepFormText: 'antd-pro-pages-forms-step-form-style-stepFormText',
        result: 'antd-pro-pages-forms-step-form-style-result',
        desc: 'antd-pro-pages-forms-step-form-style-desc',
        information: 'antd-pro-pages-forms-step-form-style-information',
        label: 'antd-pro-pages-forms-step-form-style-label',
        money: 'antd-pro-pages-forms-step-form-style-money',
        uppercase: 'antd-pro-pages-forms-step-form-style-uppercase',
      };
    },
    OTy5: function(e, a, t) {
      'use strict';
      t.r(a);
      t('/zsF');
      var n,
        r,
        l,
        c = t('PArb'),
        m = (t('+L6B'), t('2/Rp')),
        o = (t('5NDa'), t('5rEg')),
        s = t('jehZ'),
        p = t.n(s),
        i = t('2Taf'),
        u = t.n(i),
        f = t('vZ4D'),
        d = t.n(f),
        E = t('l4Ni'),
        y = t.n(E),
        h = t('ujKo'),
        g = t.n(h),
        v = t('MhPg'),
        b = t.n(v),
        N = (t('y8nQ'), t('Vl3Y')),
        x = (t('OaEy'), t('2fM7')),
        F = t('q1tI'),
        C = t.n(F),
        w = t('MuoO'),
        I = t('usdK'),
        k = t.n(I),
        A = t('7GcH'),
        T = t.n(A),
        j = x['a'].Option,
        q = { labelCol: { span: 5 }, wrapperCol: { span: 19 } },
        K = ((n = Object(w['connect'])(function(e) {
          var a = e.form;
          return { data: a.step };
        })),
        (r = N['a'].create()),
        n(
          (l =
            r(
              (l = (function(e) {
                function a() {
                  return u()(this, a), y()(this, g()(a).apply(this, arguments));
                }
                return (
                  b()(a, e),
                  d()(a, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props,
                          a = e.form,
                          t = e.dispatch,
                          n = e.data,
                          r = a.getFieldDecorator,
                          l = a.validateFields,
                          s = function() {
                            l(function(e, a) {
                              e ||
                                (t({ type: 'form/saveStepFormData', payload: a }),
                                k.a.push('/form/step-form/confirm'));
                            });
                          };
                        return C.a.createElement(
                          F['Fragment'],
                          null,
                          C.a.createElement(
                            N['a'],
                            { layout: 'horizontal', className: T.a.stepForm, hideRequiredMark: !0 },
                            C.a.createElement(
                              N['a'].Item,
                              p()({}, q, { label: '\u4ed8\u6b3e\u8d26\u6237' }),
                              r('payAccount', {
                                initialValue: n.payAccount,
                                rules: [
                                  {
                                    required: !0,
                                    message: '\u8bf7\u9009\u62e9\u4ed8\u6b3e\u8d26\u6237',
                                  },
                                ],
                              })(
                                C.a.createElement(
                                  x['a'],
                                  { placeholder: 'test@example.com' },
                                  C.a.createElement(
                                    j,
                                    { value: 'ant-design@alipay.com' },
                                    'ant-design@alipay.com'
                                  )
                                )
                              )
                            ),
                            C.a.createElement(
                              N['a'].Item,
                              p()({}, q, { label: '\u6536\u6b3e\u8d26\u6237' }),
                              C.a.createElement(
                                o['a'].Group,
                                { compact: !0 },
                                C.a.createElement(
                                  x['a'],
                                  { defaultValue: 'alipay', style: { width: 100 } },
                                  C.a.createElement(j, { value: 'alipay' }, '\u652f\u4ed8\u5b9d'),
                                  C.a.createElement(
                                    j,
                                    { value: 'bank' },
                                    '\u94f6\u884c\u8d26\u6237'
                                  )
                                ),
                                r('receiverAccount', {
                                  initialValue: n.receiverAccount,
                                  rules: [
                                    {
                                      required: !0,
                                      message: '\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u8d26\u6237',
                                    },
                                    {
                                      type: 'email',
                                      message:
                                        '\u8d26\u6237\u540d\u5e94\u4e3a\u90ae\u7bb1\u683c\u5f0f',
                                    },
                                  ],
                                })(
                                  C.a.createElement(o['a'], {
                                    style: { width: 'calc(100% - 100px)' },
                                    placeholder: 'test@example.com',
                                  })
                                )
                              )
                            ),
                            C.a.createElement(
                              N['a'].Item,
                              p()({}, q, { label: '\u6536\u6b3e\u4eba\u59d3\u540d' }),
                              r('receiverName', {
                                initialValue: n.receiverName,
                                rules: [
                                  {
                                    required: !0,
                                    message: '\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d',
                                  },
                                ],
                              })(
                                C.a.createElement(o['a'], {
                                  placeholder: '\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d',
                                })
                              )
                            ),
                            C.a.createElement(
                              N['a'].Item,
                              p()({}, q, { label: '\u8f6c\u8d26\u91d1\u989d' }),
                              r('amount', {
                                initialValue: n.amount,
                                rules: [
                                  {
                                    required: !0,
                                    message: '\u8bf7\u8f93\u5165\u8f6c\u8d26\u91d1\u989d',
                                  },
                                  {
                                    pattern: /^(\d+)((?:\.\d+)?)$/,
                                    message:
                                      '\u8bf7\u8f93\u5165\u5408\u6cd5\u91d1\u989d\u6570\u5b57',
                                  },
                                ],
                              })(
                                C.a.createElement(o['a'], {
                                  prefix: '\uffe5',
                                  placeholder: '\u8bf7\u8f93\u5165\u91d1\u989d',
                                })
                              )
                            ),
                            C.a.createElement(
                              N['a'].Item,
                              {
                                wrapperCol: {
                                  xs: { span: 24, offset: 0 },
                                  sm: { span: q.wrapperCol.span, offset: q.labelCol.span },
                                },
                                label: '',
                              },
                              C.a.createElement(
                                m['a'],
                                { type: 'primary', onClick: s },
                                '\u4e0b\u4e00\u6b65'
                              )
                            )
                          ),
                          C.a.createElement(c['a'], { style: { margin: '40px 0 24px' } }),
                          C.a.createElement(
                            'div',
                            { className: T.a.desc },
                            C.a.createElement('h3', null, '\u8bf4\u660e'),
                            C.a.createElement(
                              'h4',
                              null,
                              '\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237'
                            ),
                            C.a.createElement(
                              'p',
                              null,
                              '\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002'
                            ),
                            C.a.createElement('h4', null, '\u8f6c\u8d26\u5230\u94f6\u884c\u5361'),
                            C.a.createElement(
                              'p',
                              null,
                              '\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002'
                            )
                          )
                        );
                      },
                    },
                  ]),
                  a
                );
              })(C.a.PureComponent))
            ) || l)
        ) || l);
      a['default'] = K;
    },
    Tc1X: function(e, a, t) {
      'use strict';
      t.r(a);
      t('+L6B');
      var n,
        r,
        l = t('2/Rp'),
        s = (t('14J3'), t('BMrR')),
        c = (t('jCWc'), t('kPKH')),
        m = t('2Taf'),
        o = t.n(m),
        p = t('vZ4D'),
        i = t.n(p),
        u = t('l4Ni'),
        f = t.n(u),
        d = t('ujKo'),
        E = t.n(d),
        y = t('MhPg'),
        h = t.n(y),
        g = t('q1tI'),
        v = t.n(g),
        b = t('MuoO'),
        N = t('usdK'),
        x = t.n(N),
        F = t('ALo4'),
        C = t('7GcH'),
        w = t.n(C),
        I = ((n = Object(b['connect'])(function(e) {
          var a = e.form;
          return { data: a.step };
        })),
        n(
          (r = (function(e) {
            function a() {
              return o()(this, a), f()(this, E()(a).apply(this, arguments));
            }
            return (
              h()(a, e),
              i()(a, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.data,
                      a = function() {
                        x.a.push('/form/step-form/info');
                      },
                      t = v.a.createElement(
                        'div',
                        { className: w.a.information },
                        v.a.createElement(
                          s['a'],
                          null,
                          v.a.createElement(
                            c['a'],
                            { xs: 24, sm: 8, className: w.a.label },
                            '\u4ed8\u6b3e\u8d26\u6237\uff1a'
                          ),
                          v.a.createElement(c['a'], { xs: 24, sm: 16 }, e.payAccount)
                        ),
                        v.a.createElement(
                          s['a'],
                          null,
                          v.a.createElement(
                            c['a'],
                            { xs: 24, sm: 8, className: w.a.label },
                            '\u6536\u6b3e\u8d26\u6237\uff1a'
                          ),
                          v.a.createElement(c['a'], { xs: 24, sm: 16 }, e.receiverAccount)
                        ),
                        v.a.createElement(
                          s['a'],
                          null,
                          v.a.createElement(
                            c['a'],
                            { xs: 24, sm: 8, className: w.a.label },
                            '\u6536\u6b3e\u4eba\u59d3\u540d\uff1a'
                          ),
                          v.a.createElement(c['a'], { xs: 24, sm: 16 }, e.receiverName)
                        ),
                        v.a.createElement(
                          s['a'],
                          null,
                          v.a.createElement(
                            c['a'],
                            { xs: 24, sm: 8, className: w.a.label },
                            '\u8f6c\u8d26\u91d1\u989d\uff1a'
                          ),
                          v.a.createElement(
                            c['a'],
                            { xs: 24, sm: 16 },
                            v.a.createElement('span', { className: w.a.money }, e.amount),
                            ' \u5143'
                          )
                        )
                      ),
                      n = v.a.createElement(
                        g['Fragment'],
                        null,
                        v.a.createElement(
                          l['a'],
                          { type: 'primary', onClick: a },
                          '\u518d\u8f6c\u4e00\u7b14'
                        ),
                        v.a.createElement(l['a'], null, '\u67e5\u770b\u8d26\u5355')
                      );
                    return v.a.createElement(F['a'], {
                      type: 'success',
                      title: '\u64cd\u4f5c\u6210\u529f',
                      description: '\u9884\u8ba1\u4e24\u5c0f\u65f6\u5185\u5230\u8d26',
                      extra: t,
                      actions: n,
                      className: w.a.result,
                    });
                  },
                },
              ]),
              a
            );
          })(v.a.PureComponent))
        ) || r);
      a['default'] = I;
    },
    szkQ: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'default', function() {
          return N;
        });
      t('IzEo');
      var n = t('bx4M'),
        r = t('2Taf'),
        l = t.n(r),
        s = t('vZ4D'),
        c = t.n(s),
        m = t('l4Ni'),
        o = t.n(m),
        p = t('ujKo'),
        i = t.n(p),
        u = t('MhPg'),
        f = t.n(u),
        d = (t('FJo9'), t('L41K')),
        E = t('q1tI'),
        y = t.n(E),
        h = t('zHco'),
        g = t('Zpge'),
        v = t.n(g),
        b = d['a'].Step,
        N = (function(e) {
          function a() {
            return l()(this, a), o()(this, i()(a).apply(this, arguments));
          }
          return (
            f()(a, e),
            c()(a, [
              {
                key: 'getCurrentStep',
                value: function() {
                  var e = this.props.location,
                    a = e.pathname,
                    t = a.split('/');
                  switch (t[t.length - 1]) {
                    case 'info':
                      return 0;
                    case 'confirm':
                      return 1;
                    case 'result':
                      return 2;
                    default:
                      return 0;
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    a = e.location,
                    t = e.children;
                  return y.a.createElement(
                    h['a'],
                    {
                      title: '\u5206\u6b65\u8868\u5355',
                      tabActiveKey: a.pathname,
                      content:
                        '\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002',
                    },
                    y.a.createElement(
                      n['a'],
                      { bordered: !1 },
                      y.a.createElement(
                        E['Fragment'],
                        null,
                        y.a.createElement(
                          d['a'],
                          { current: this.getCurrentStep(), className: v.a.steps },
                          y.a.createElement(b, { title: '\u586b\u5199\u8f6c\u8d26\u4fe1\u606f' }),
                          y.a.createElement(b, { title: '\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f' }),
                          y.a.createElement(b, { title: '\u5b8c\u6210' })
                        ),
                        t
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(E['PureComponent']);
    },
    zfh6: function(e, a, t) {
      'use strict';
      t.r(a);
      t('+L6B');
      var n,
        r,
        l,
        o = t('2/Rp'),
        p = (t('5NDa'), t('5rEg')),
        i = (t('/zsF'), t('PArb')),
        s = t('jehZ'),
        u = t.n(s),
        f = (t('fOrg'), t('+KLJ')),
        c = t('p0pE'),
        d = t.n(c),
        m = t('2Taf'),
        E = t.n(m),
        y = t('vZ4D'),
        h = t.n(y),
        g = t('l4Ni'),
        v = t.n(g),
        b = t('ujKo'),
        N = t.n(b),
        x = t('MhPg'),
        F = t.n(x),
        C = (t('y8nQ'), t('Vl3Y')),
        w = t('q1tI'),
        I = t.n(w),
        k = t('MuoO'),
        A = t('usdK'),
        T = t.n(A),
        j = t('+n12'),
        q = t('7GcH'),
        K = t.n(q),
        M = { labelCol: { span: 5 }, wrapperCol: { span: 19 } },
        O = ((n = Object(k['connect'])(function(e) {
          var a = e.form,
            t = e.loading;
          return { submitting: t.effects['form/submitStepForm'], data: a.step };
        })),
        (r = C['a'].create()),
        n(
          (l =
            r(
              (l = (function(e) {
                function a() {
                  return E()(this, a), v()(this, N()(a).apply(this, arguments));
                }
                return (
                  F()(a, e),
                  h()(a, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props,
                          a = e.form,
                          t = e.data,
                          n = e.dispatch,
                          r = e.submitting,
                          l = a.getFieldDecorator,
                          s = a.validateFields,
                          c = function() {
                            T.a.push('/form/step-form/info');
                          },
                          m = function(e) {
                            e.preventDefault(),
                              s(function(e, a) {
                                e || n({ type: 'form/submitStepForm', payload: d()({}, t, a) });
                              });
                          };
                        return I.a.createElement(
                          C['a'],
                          { layout: 'horizontal', className: K.a.stepForm },
                          I.a.createElement(f['a'], {
                            closable: !0,
                            showIcon: !0,
                            message:
                              '\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002',
                            style: { marginBottom: 24 },
                          }),
                          I.a.createElement(
                            C['a'].Item,
                            u()({}, M, {
                              className: K.a.stepFormText,
                              label: '\u4ed8\u6b3e\u8d26\u6237',
                            }),
                            t.payAccount
                          ),
                          I.a.createElement(
                            C['a'].Item,
                            u()({}, M, {
                              className: K.a.stepFormText,
                              label: '\u6536\u6b3e\u8d26\u6237',
                            }),
                            t.receiverAccount
                          ),
                          I.a.createElement(
                            C['a'].Item,
                            u()({}, M, {
                              className: K.a.stepFormText,
                              label: '\u6536\u6b3e\u4eba\u59d3\u540d',
                            }),
                            t.receiverName
                          ),
                          I.a.createElement(
                            C['a'].Item,
                            u()({}, M, {
                              className: K.a.stepFormText,
                              label: '\u8f6c\u8d26\u91d1\u989d',
                            }),
                            I.a.createElement('span', { className: K.a.money }, t.amount),
                            I.a.createElement(
                              'span',
                              { className: K.a.uppercase },
                              '\uff08',
                              Object(j['a'])(t.amount),
                              '\uff09'
                            )
                          ),
                          I.a.createElement(i['a'], { style: { margin: '24px 0' } }),
                          I.a.createElement(
                            C['a'].Item,
                            u()({}, M, { label: '\u652f\u4ed8\u5bc6\u7801', required: !1 }),
                            l('password', {
                              initialValue: '123456',
                              rules: [
                                {
                                  required: !0,
                                  message:
                                    '\u9700\u8981\u652f\u4ed8\u5bc6\u7801\u624d\u80fd\u8fdb\u884c\u652f\u4ed8',
                                },
                              ],
                            })(
                              I.a.createElement(p['a'], {
                                type: 'password',
                                autoComplete: 'off',
                                style: { width: '80%' },
                              })
                            )
                          ),
                          I.a.createElement(
                            C['a'].Item,
                            {
                              style: { marginBottom: 8 },
                              wrapperCol: {
                                xs: { span: 24, offset: 0 },
                                sm: { span: M.wrapperCol.span, offset: M.labelCol.span },
                              },
                              label: '',
                            },
                            I.a.createElement(
                              o['a'],
                              { type: 'primary', onClick: m, loading: r },
                              '\u63d0\u4ea4'
                            ),
                            I.a.createElement(
                              o['a'],
                              { onClick: c, style: { marginLeft: 8 } },
                              '\u4e0a\u4e00\u6b65'
                            )
                          )
                        );
                      },
                    },
                  ]),
                  a
                );
              })(I.a.PureComponent))
            ) || l)
        ) || l);
      a['default'] = O;
    },
  },
]);
