(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21],
  {
    '2AEw': function(e, a, t) {
      'use strict';
      t.r(a);
      t('IzEo');
      var l,
        r,
        m,
        o,
        n = t('bx4M'),
        s = (t('+L6B'), t('2/Rp')),
        i = (t('7Kak'), t('9yH6')),
        c = (t('giR+'), t('fyUT')),
        d = (t('5Dmo'), t('3S7+')),
        p = (t('Pwec'), t('CtXQ')),
        f = t('jehZ'),
        u = t.n(f),
        g = t('2Taf'),
        E = t.n(g),
        b = t('vZ4D'),
        h = t.n(b),
        M = t('l4Ni'),
        F = t.n(M),
        v = t('ujKo'),
        y = t.n(v),
        w = t('MhPg'),
        O = t.n(w),
        j = (t('5NDa'), t('5rEg')),
        q = (t('iQDF'), t('+eQT')),
        x = (t('OaEy'), t('2fM7')),
        k = (t('y8nQ'), t('Vl3Y')),
        R = t('q1tI'),
        T = t.n(R),
        C = t('MuoO'),
        D = t('Y2fQ'),
        N = t('zHco'),
        U = t('Zpge'),
        A = t.n(U),
        Q = k['a'].Item,
        S = x['a'].Option,
        H = q['a'].RangePicker,
        P = j['a'].TextArea,
        B = ((l = Object(C['connect'])(function(e) {
          var a = e.loading;
          return { submitting: a.effects['form/submitRegularForm'] };
        })),
        (r = k['a'].create()),
        l(
          (m =
            r(
              ((o = (function(e) {
                function m() {
                  var e, r;
                  E()(this, m);
                  for (var a = arguments.length, t = new Array(a), l = 0; l < a; l++)
                    t[l] = arguments[l];
                  return (
                    (r = F()(this, (e = y()(m)).call.apply(e, [this].concat(t)))),
                    (r.handleSubmit = function(e) {
                      var a = r.props,
                        t = a.dispatch,
                        l = a.form;
                      e.preventDefault(),
                        l.validateFieldsAndScroll(function(e, a) {
                          e || t({ type: 'form/submitRegularForm', payload: a });
                        });
                    }),
                    r
                  );
                }
                return (
                  O()(m, e),
                  h()(m, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props.submitting,
                          a = this.props.form,
                          t = a.getFieldDecorator,
                          l = a.getFieldValue,
                          r = {
                            labelCol: { xs: { span: 24 }, sm: { span: 7 } },
                            wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 10 } },
                          },
                          m = {
                            wrapperCol: {
                              xs: { span: 24, offset: 0 },
                              sm: { span: 10, offset: 7 },
                            },
                          };
                        return T.a.createElement(
                          N['a'],
                          {
                            title: T.a.createElement(D['FormattedMessage'], {
                              id: 'app.forms.basic.title',
                            }),
                            content: T.a.createElement(D['FormattedMessage'], {
                              id: 'app.forms.basic.description',
                            }),
                          },
                          T.a.createElement(
                            n['a'],
                            { bordered: !1 },
                            T.a.createElement(
                              k['a'],
                              {
                                onSubmit: this.handleSubmit,
                                hideRequiredMark: !0,
                                style: { marginTop: 8 },
                              },
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(D['FormattedMessage'], {
                                    id: 'form.title.label',
                                  }),
                                }),
                                t('title', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: Object(D['formatMessage'])({
                                        id: 'validation.title.required',
                                      }),
                                    },
                                  ],
                                })(
                                  T.a.createElement(j['a'], {
                                    placeholder: Object(D['formatMessage'])({
                                      id: 'form.title.placeholder',
                                    }),
                                  })
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(D['FormattedMessage'], {
                                    id: 'form.date.label',
                                  }),
                                }),
                                t('date', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: Object(D['formatMessage'])({
                                        id: 'validation.date.required',
                                      }),
                                    },
                                  ],
                                })(
                                  T.a.createElement(H, {
                                    style: { width: '100%' },
                                    placeholder: [
                                      Object(D['formatMessage'])({
                                        id: 'form.date.placeholder.start',
                                      }),
                                      Object(D['formatMessage'])({
                                        id: 'form.date.placeholder.end',
                                      }),
                                    ],
                                  })
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(D['FormattedMessage'], {
                                    id: 'form.goal.label',
                                  }),
                                }),
                                t('goal', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: Object(D['formatMessage'])({
                                        id: 'validation.goal.required',
                                      }),
                                    },
                                  ],
                                })(
                                  T.a.createElement(P, {
                                    style: { minHeight: 32 },
                                    placeholder: Object(D['formatMessage'])({
                                      id: 'form.goal.placeholder',
                                    }),
                                    rows: 4,
                                  })
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(D['FormattedMessage'], {
                                    id: 'form.standard.label',
                                  }),
                                }),
                                t('standard', {
                                  rules: [
                                    {
                                      required: !0,
                                      message: Object(D['formatMessage'])({
                                        id: 'validation.standard.required',
                                      }),
                                    },
                                  ],
                                })(
                                  T.a.createElement(P, {
                                    style: { minHeight: 32 },
                                    placeholder: Object(D['formatMessage'])({
                                      id: 'form.standard.placeholder',
                                    }),
                                    rows: 4,
                                  })
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(
                                    'span',
                                    null,
                                    T.a.createElement(D['FormattedMessage'], {
                                      id: 'form.client.label',
                                    }),
                                    T.a.createElement(
                                      'em',
                                      { className: A.a.optional },
                                      T.a.createElement(D['FormattedMessage'], {
                                        id: 'form.optional',
                                      }),
                                      T.a.createElement(
                                        d['a'],
                                        {
                                          title: T.a.createElement(D['FormattedMessage'], {
                                            id: 'form.client.label.tooltip',
                                          }),
                                        },
                                        T.a.createElement(p['a'], {
                                          type: 'info-circle-o',
                                          style: { marginRight: 4 },
                                        })
                                      )
                                    )
                                  ),
                                }),
                                t('client')(
                                  T.a.createElement(j['a'], {
                                    placeholder: Object(D['formatMessage'])({
                                      id: 'form.client.placeholder',
                                    }),
                                  })
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(
                                    'span',
                                    null,
                                    T.a.createElement(D['FormattedMessage'], {
                                      id: 'form.invites.label',
                                    }),
                                    T.a.createElement(
                                      'em',
                                      { className: A.a.optional },
                                      T.a.createElement(D['FormattedMessage'], {
                                        id: 'form.optional',
                                      })
                                    )
                                  ),
                                }),
                                t('invites')(
                                  T.a.createElement(j['a'], {
                                    placeholder: Object(D['formatMessage'])({
                                      id: 'form.invites.placeholder',
                                    }),
                                  })
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(
                                    'span',
                                    null,
                                    T.a.createElement(D['FormattedMessage'], {
                                      id: 'form.weight.label',
                                    }),
                                    T.a.createElement(
                                      'em',
                                      { className: A.a.optional },
                                      T.a.createElement(D['FormattedMessage'], {
                                        id: 'form.optional',
                                      })
                                    )
                                  ),
                                }),
                                t('weight')(
                                  T.a.createElement(c['a'], {
                                    placeholder: Object(D['formatMessage'])({
                                      id: 'form.weight.placeholder',
                                    }),
                                    min: 0,
                                    max: 100,
                                  })
                                ),
                                T.a.createElement('span', { className: 'ant-form-text' }, '%')
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, r, {
                                  label: T.a.createElement(D['FormattedMessage'], {
                                    id: 'form.public.label',
                                  }),
                                  help: T.a.createElement(D['FormattedMessage'], {
                                    id: 'form.public.label.help',
                                  }),
                                }),
                                T.a.createElement(
                                  'div',
                                  null,
                                  t('public', { initialValue: '1' })(
                                    T.a.createElement(
                                      i['a'].Group,
                                      null,
                                      T.a.createElement(
                                        i['a'],
                                        { value: '1' },
                                        T.a.createElement(D['FormattedMessage'], {
                                          id: 'form.public.radio.public',
                                        })
                                      ),
                                      T.a.createElement(
                                        i['a'],
                                        { value: '2' },
                                        T.a.createElement(D['FormattedMessage'], {
                                          id: 'form.public.radio.partially-public',
                                        })
                                      ),
                                      T.a.createElement(
                                        i['a'],
                                        { value: '3' },
                                        T.a.createElement(D['FormattedMessage'], {
                                          id: 'form.public.radio.private',
                                        })
                                      )
                                    )
                                  ),
                                  T.a.createElement(
                                    Q,
                                    { style: { marginBottom: 0 } },
                                    t('publicUsers')(
                                      T.a.createElement(
                                        x['a'],
                                        {
                                          mode: 'multiple',
                                          placeholder: Object(D['formatMessage'])({
                                            id: 'form.publicUsers.placeholder',
                                          }),
                                          style: {
                                            margin: '8px 0',
                                            display: '2' === l('public') ? 'block' : 'none',
                                          },
                                        },
                                        T.a.createElement(
                                          S,
                                          { value: '1' },
                                          T.a.createElement(D['FormattedMessage'], {
                                            id: 'form.publicUsers.option.A',
                                          })
                                        ),
                                        T.a.createElement(
                                          S,
                                          { value: '2' },
                                          T.a.createElement(D['FormattedMessage'], {
                                            id: 'form.publicUsers.option.B',
                                          })
                                        ),
                                        T.a.createElement(
                                          S,
                                          { value: '3' },
                                          T.a.createElement(D['FormattedMessage'], {
                                            id: 'form.publicUsers.option.C',
                                          })
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                              T.a.createElement(
                                Q,
                                u()({}, m, { style: { marginTop: 32 } }),
                                T.a.createElement(
                                  s['a'],
                                  { type: 'primary', htmlType: 'submit', loading: e },
                                  T.a.createElement(D['FormattedMessage'], { id: 'form.submit' })
                                ),
                                T.a.createElement(
                                  s['a'],
                                  { style: { marginLeft: 8 } },
                                  T.a.createElement(D['FormattedMessage'], { id: 'form.save' })
                                )
                              )
                            )
                          )
                        );
                      },
                    },
                  ]),
                  m
                );
              })(R['PureComponent'])),
              (m = o))
            ) || m)
        ) || m);
      a['default'] = B;
    },
  },
]);
