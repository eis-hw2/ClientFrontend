(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '/wGt': function(e, t, n) {
      'use strict';
      var p = n('q1tI'),
        x = n.n(p),
        o = n('17x9'),
        r = n.n(o),
        a = n('YEIV'),
        O = n.n(a),
        i = n('iCc5'),
        s = n.n(i),
        l = n('V7oC'),
        c = n.n(l),
        u = n('FYw3'),
        d = n.n(u),
        h = n('mRg0'),
        f = n.n(h),
        m = n('i8i4'),
        g = n.n(m),
        v = n('TSYQ'),
        M = n.n(v),
        y = n('PIAm'),
        b = n('qx4F');
      function w(e) {
        return Array.isArray(e) ? e : [e];
      }
      var E = {
          transition: 'transitionend',
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
        },
        k = Object.keys(E).filter(function(e) {
          if ('undefined' === typeof document) return !1;
          var t = document.getElementsByTagName('html')[0];
          return e in (t ? t.style : {});
        })[0],
        S = E[k];
      function N(e, t, n, o) {
        e.addEventListener
          ? e.addEventListener(t, n, o)
          : e.attachEvent && e.attachEvent('on' + t, n);
      }
      function T(e, t, n, o) {
        e.removeEventListener
          ? e.removeEventListener(t, n, o)
          : e.attachEvent && e.detachEvent('on' + t, n);
      }
      function D(e, t) {
        var n = void 0;
        return (
          (n = 'function' === typeof e ? e(t) : e),
          Array.isArray(n) ? (2 === n.length ? n : [n[0], n[1]]) : [n]
        );
      }
      var j = function(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        C = 'createPortal' in g.a,
        P = {},
        I = !('undefined' !== typeof window && window.document && window.document.createElement),
        H = (function(e) {
          function o(e) {
            s()(this, o);
            var t = d()(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
            A.call(t),
              (t.levelDom = []),
              (t.contentDom = null),
              (t.maskDom = null),
              (t.handlerDom = null),
              (t.firstEnter = e.firstEnter),
              (t.timeout = null),
              (t.drawerId = Number(
                (Date.now() + Math.random()).toString().replace('.', Math.round(9 * Math.random()))
              ).toString(16));
            var n = void 0 !== e.open ? e.open : !!e.defaultOpen;
            return (P[t.drawerId] = n), (t.state = { open: n }), t;
          }
          return (
            f()(o, e),
            c()(o, [
              {
                key: 'componentDidMount',
                value: function() {
                  if (!I) {
                    var e = !1;
                    window.addEventListener(
                      'test',
                      null,
                      Object.defineProperty({}, 'passive', {
                        get: function() {
                          return (e = !0), null;
                        },
                      })
                    ),
                      (this.passive = !!e && { passive: !1 });
                  }
                  var t = this.getOpen();
                  (this.props.handler || t || this.firstEnter) &&
                    (this.getDefault(this.props),
                    t && (this.isOpenChange = !0),
                    this.forceUpdate());
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = e.open,
                    n = e.placement,
                    o = e.getContainer;
                  void 0 !== t &&
                    t !== this.props.open &&
                    ((this.isOpenChange = !0),
                    (this.container && this.props.getContainer === o) || this.getDefault(e),
                    this.setState({ open: t })),
                    n !== this.props.placement && (this.contentDom = null),
                    this.props.level !== e.level && this.getParentAndLevelDom(e);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  !this.firstEnter &&
                    this.container &&
                    (this.forceUpdate(), (this.firstEnter = !0));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  delete P[this.drawerId],
                    delete this.isOpenChange,
                    this.container &&
                      (this.state.open && this.setLevelDomTransform(!1, !0),
                      (document.body.style.overflow = ''),
                      this.props.getContainer &&
                        this.container.parentNode.removeChild(this.container)),
                    (this.firstEnter = !1),
                    clearTimeout(this.timeout),
                    this.renderComponent &&
                      !C &&
                      this.renderComponent({
                        afterClose: this.removeContainer,
                        onClose: function() {},
                        visible: !1,
                      });
                },
              },
              {
                key: 'render',
                value: function() {
                  var o = this,
                    e = this.props,
                    t = e.getContainer,
                    n = e.wrapperClassName,
                    r = this.getOpen();
                  P[this.drawerId] = r ? this.container : r;
                  var a = this.getChildToRender(!!this.firstEnter && r);
                  return t
                    ? this.container && (r || this.firstEnter)
                      ? C
                        ? g.a.createPortal(a, this.container)
                        : x.a.createElement(
                            y['a'],
                            {
                              parent: this,
                              visible: !0,
                              autoMount: !0,
                              autoDestroy: !1,
                              getComponent: function() {
                                return a;
                              },
                              getContainer: this.getContainer,
                            },
                            function(e) {
                              var t = e.renderComponent,
                                n = e.removeContainer;
                              return (o.renderComponent = t), (o.removeContainer = n), null;
                            }
                          )
                      : null
                    : x.a.createElement(
                        'div',
                        {
                          className: n,
                          ref: function(e) {
                            o.props.getContainer || (o.container = e);
                          },
                        },
                        a
                      );
                },
              },
            ]),
            o
          );
        })(x.a.PureComponent);
      (H.propTypes = {
        wrapperClassName: r.a.string,
        className: r.a.string,
        children: r.a.node,
        style: r.a.object,
        width: r.a.any,
        height: r.a.any,
        defaultOpen: r.a.bool,
        firstEnter: r.a.bool,
        open: r.a.bool,
        prefixCls: r.a.string,
        placement: r.a.string,
        level: r.a.oneOfType([r.a.string, r.a.array]),
        levelMove: r.a.oneOfType([r.a.number, r.a.func, r.a.array]),
        ease: r.a.string,
        duration: r.a.string,
        getContainer: r.a.oneOfType([r.a.string, r.a.func, r.a.object, r.a.bool]),
        handler: r.a.any,
        onChange: r.a.func,
        afterVisibleChange: r.a.func,
        onMaskClick: r.a.func,
        onHandleClick: r.a.func,
        showMask: r.a.bool,
        maskStyle: r.a.object,
      }),
        (H.defaultProps = {
          prefixCls: 'drawer',
          placement: 'left',
          getContainer: 'body',
          level: 'all',
          duration: '.3s',
          ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
          onChange: function() {},
          afterVisibleChange: function() {},
          onMaskClick: function() {},
          onHandleClick: function() {},
          handler: x.a.createElement(
            'div',
            { className: 'drawer-handle' },
            x.a.createElement('i', { className: 'drawer-handle-icon' })
          ),
          firstEnter: !1,
          showMask: !0,
          maskStyle: {},
          wrapperClassName: '',
          className: '',
        });
      var A = function() {
          var C = this;
          (this.onMaskTouchEnd = function(e) {
            C.props.onMaskClick(e), C.onTouchEnd(e, !0);
          }),
            (this.onIconTouchEnd = function(e) {
              C.props.onHandleClick(e), C.onTouchEnd(e);
            }),
            (this.onTouchEnd = function(e, t) {
              if (void 0 === C.props.open) {
                var n = t || C.state.open;
                (C.isOpenChange = !0), C.setState({ open: !n });
              }
            }),
            (this.onWrapperTransitionEnd = function(e) {
              if (e.target === C.contentWrapper) {
                (C.dom.style.transition = ''),
                  !C.state.open &&
                    C.getCurrentDrawerSome() &&
                    ((document.body.style.overflowX = ''),
                    C.maskDom && ((C.maskDom.style.left = ''), (C.maskDom.style.width = '')));
                var t = C.props.afterVisibleChange,
                  n = C.state.open;
                t(n);
              }
            }),
            (this.getDefault = function(e) {
              C.getParentAndLevelDom(e),
                (e.getContainer || e.parent) && (C.container = C.defaultGetContainer());
            }),
            (this.getCurrentDrawerSome = function() {
              return !Object.keys(P).some(function(e) {
                return P[e];
              });
            }),
            (this.getContainer = function() {
              return C.container;
            }),
            (this.getParentAndLevelDom = function(e) {
              if (!I) {
                var t = e.level,
                  n = e.getContainer;
                if (((C.levelDom = []), n)) {
                  if ('string' === typeof n) {
                    var o = document.querySelectorAll(n)[0];
                    C.parent = o;
                  }
                  'function' === typeof n && (C.parent = n()),
                    'object' === typeof n && n instanceof window.HTMLElement && (C.parent = n);
                }
                if ((!n && C.container && (C.parent = C.container.parentNode), 'all' === t)) {
                  var r = Array.prototype.slice.call(C.parent.children);
                  r.forEach(function(e) {
                    'SCRIPT' !== e.nodeName &&
                      'STYLE' !== e.nodeName &&
                      'LINK' !== e.nodeName &&
                      e !== C.container &&
                      C.levelDom.push(e);
                  });
                } else
                  t &&
                    w(t).forEach(function(e) {
                      document.querySelectorAll(e).forEach(function(e) {
                        C.levelDom.push(e);
                      });
                    });
              }
            }),
            (this.setLevelDomTransform = function(a, i, s, l) {
              var e = C.props,
                c = e.placement,
                u = e.levelMove,
                d = e.duration,
                p = e.ease,
                t = e.onChange,
                n = e.getContainer,
                o = e.showMask;
              if (
                !I &&
                (C.levelDom.forEach(function(e) {
                  if (C.isOpenChange || i) {
                    (e.style.transition = 'transform ' + d + ' ' + p), N(e, S, C.transitionEnd);
                    var t = a ? l : 0;
                    if (u) {
                      var n = D(u, { target: e, open: a });
                      t = a ? n[0] : n[1] || 0;
                    }
                    var o = 'number' === typeof t ? t + 'px' : t,
                      r = 'left' === c || 'top' === c ? o : '-' + o;
                    (e.style.transform = t ? s + '(' + r + ')' : ''),
                      (e.style.msTransform = t ? s + '(' + r + ')' : '');
                  }
                }),
                'body' === n && o)
              ) {
                var r = ['touchstart'],
                  h = [document.body, C.maskDom, C.handlerDom, C.contentDom],
                  f =
                    document.body.scrollHeight >
                      (window.innerHeight || document.documentElement.clientHeight) &&
                    window.innerWidth > document.body.offsetWidth
                      ? Object(b['a'])(1)
                      : 0,
                  m = 'width ' + d + ' ' + p,
                  g = 'transform ' + d + ' ' + p;
                if (a && 'hidden' !== document.body.style.overflow) {
                  if (
                    ((document.body.style.overflow = 'hidden'),
                    (document.body.style.touchAction = 'none'),
                    f)
                  ) {
                    switch (
                      ((document.body.style.position = 'relative'),
                      (document.body.style.width = 'calc(100% - ' + f + 'px)'),
                      (C.dom.style.transition = 'none'),
                      c)
                    ) {
                      case 'right':
                        (C.dom.style.transform = 'translateX(-' + f + 'px)'),
                          (C.dom.style.msTransform = 'translateX(-' + f + 'px)');
                        break;
                      case 'top':
                      case 'bottom':
                        (C.dom.style.width = 'calc(100% - ' + f + 'px)'),
                          (C.dom.style.transform = 'translateZ(0)');
                        break;
                      default:
                        break;
                    }
                    clearTimeout(C.timeout),
                      (C.timeout = setTimeout(function() {
                        (C.dom.style.transition = g + ',' + m),
                          (C.dom.style.width = ''),
                          (C.dom.style.transform = ''),
                          (C.dom.style.msTransform = '');
                      }));
                  }
                  h.forEach(function(e, t) {
                    e &&
                      N(
                        e,
                        r[t] || 'touchmove',
                        t ? C.removeMoveHandler : C.removeStartHandler,
                        C.passive
                      );
                  });
                } else if (C.getCurrentDrawerSome()) {
                  if (
                    ((document.body.style.overflow = ''),
                    (document.body.style.touchAction = ''),
                    (C.isOpenChange || i) && f)
                  ) {
                    (document.body.style.position = ''),
                      (document.body.style.width = ''),
                      k && (document.body.style.overflowX = 'hidden'),
                      (C.dom.style.transition = 'none');
                    var v = void 0;
                    switch (c) {
                      case 'right':
                        (C.dom.style.transform = 'translateX(' + f + 'px)'),
                          (C.dom.style.msTransform = 'translateX(' + f + 'px)'),
                          (C.dom.style.width = '100%'),
                          (m = 'width 0s ' + p + ' ' + d),
                          C.maskDom &&
                            ((C.maskDom.style.left = '-' + f + 'px'),
                            (C.maskDom.style.width = 'calc(100% + ' + f + 'px)'));
                        break;
                      case 'top':
                      case 'bottom':
                        (C.dom.style.width = 'calc(100% + ' + f + 'px)'),
                          (C.dom.style.height = '100%'),
                          (C.dom.style.transform = 'translateZ(0)'),
                          (v = 'height 0s ' + p + ' ' + d);
                        break;
                      default:
                        break;
                    }
                    clearTimeout(C.timeout),
                      (C.timeout = setTimeout(function() {
                        (C.dom.style.transition = g + ',' + (v ? v + ',' : '') + m),
                          (C.dom.style.transform = ''),
                          (C.dom.style.msTransform = ''),
                          (C.dom.style.width = ''),
                          (C.dom.style.height = '');
                      }));
                  }
                  h.forEach(function(e, t) {
                    e &&
                      T(
                        e,
                        r[t] || 'touchmove',
                        t ? C.removeMoveHandler : C.removeStartHandler,
                        C.passive
                      );
                  });
                }
              }
              C.isOpenChange && C.firstEnter && (t(a), (C.isOpenChange = !1));
            }),
            (this.getChildToRender = function(e) {
              var t,
                n = C.props,
                o = n.className,
                r = n.prefixCls,
                a = n.style,
                i = n.placement,
                s = n.children,
                l = n.handler,
                c = n.showMask,
                u = n.maskStyle,
                d = n.width,
                p = n.height,
                h = M()(
                  r,
                  ((t = {}), O()(t, r + '-' + i, !0), O()(t, r + '-open', e), O()(t, o, !!o), t)
                ),
                f = C.isOpenChange,
                m = 'left' === i || 'right' === i,
                g = 'translate' + (m ? 'X' : 'Y'),
                v = 'left' === i || 'top' === i ? '-100%' : '100%',
                y = e ? '' : g + '(' + v + ')';
              if (void 0 === f || f) {
                var b = C.contentDom
                    ? C.contentDom.getBoundingClientRect()[m ? 'width' : 'height']
                    : 0,
                  w = (m ? d : p) || b;
                C.setLevelDomTransform(e, !1, g, w);
              }
              var E =
                l &&
                x.a.cloneElement(l, {
                  onClick: function(e) {
                    l.props.onClick && l.props.onClick(), C.onIconTouchEnd(e);
                  },
                  ref: function(e) {
                    C.handlerDom = e;
                  },
                });
              return x.a.createElement(
                'div',
                {
                  className: h,
                  style: a,
                  ref: function(e) {
                    C.dom = e;
                  },
                  onTransitionEnd: C.onWrapperTransitionEnd,
                },
                c &&
                  x.a.createElement('div', {
                    className: r + '-mask',
                    onClick: C.onMaskTouchEnd,
                    style: u,
                    ref: function(e) {
                      C.maskDom = e;
                    },
                  }),
                x.a.createElement(
                  'div',
                  {
                    className: r + '-content-wrapper',
                    style: {
                      transform: y,
                      msTransform: y,
                      width: j(d) ? d + 'px' : d,
                      height: j(p) ? p + 'px' : p,
                    },
                    ref: function(e) {
                      C.contentWrapper = e;
                    },
                  },
                  x.a.createElement(
                    'div',
                    {
                      className: r + '-content',
                      ref: function(e) {
                        C.contentDom = e;
                      },
                      onTouchStart: e && c ? C.removeStartHandler : null,
                      onTouchMove: e && c ? C.removeMoveHandler : null,
                    },
                    s
                  ),
                  E
                )
              );
            }),
            (this.getOpen = function() {
              return void 0 !== C.props.open ? C.props.open : C.state.open;
            }),
            (this.getTouchParentScroll = function(e, t, n, o) {
              if (!t || t === document) return !1;
              if (t === e.parentNode) return !0;
              var r = Math.max(Math.abs(n), Math.abs(o)) === Math.abs(o),
                a = Math.max(Math.abs(n), Math.abs(o)) === Math.abs(n),
                i = t.scrollHeight - t.clientHeight,
                s = t.scrollWidth - t.clientWidth,
                l = t.scrollTop,
                c = t.scrollLeft;
              (t.scrollTop += 1), (t.scrollLeft += 1);
              var u = t.scrollTop,
                d = t.scrollLeft;
              return (
                (t.scrollTop -= 1),
                (t.scrollLeft -= 1),
                !(
                  (!r ||
                    (i &&
                      u - l &&
                      (!i || !((t.scrollTop >= i && o < 0) || (t.scrollTop <= 0 && o > 0))))) &&
                  (!a ||
                    (s &&
                      d - c &&
                      (!s || !((t.scrollLeft >= s && n < 0) || (t.scrollLeft <= 0 && n > 0)))))
                ) && C.getTouchParentScroll(e, t.parentNode, n, o)
              );
            }),
            (this.removeStartHandler = function(e) {
              e.touches.length > 1 ||
                (C.startPos = { x: e.touches[0].clientX, y: e.touches[0].clientY });
            }),
            (this.removeMoveHandler = function(e) {
              if (!(e.changedTouches.length > 1)) {
                var t = e.currentTarget,
                  n = e.changedTouches[0].clientX - C.startPos.x,
                  o = e.changedTouches[0].clientY - C.startPos.y;
                (t === C.maskDom ||
                  t === C.handlerDom ||
                  (t === C.contentDom && C.getTouchParentScroll(t, e.target, n, o))) &&
                  e.preventDefault();
              }
            }),
            (this.transitionEnd = function(e) {
              T(e.target, S, C.transitionEnd), (e.target.style.transition = '');
            }),
            (this.defaultGetContainer = function() {
              if (I) return null;
              var e = document.createElement('div');
              return (
                C.parent.appendChild(e),
                C.props.wrapperClassName && (e.className = C.props.wrapperClassName),
                e
              );
            });
        },
        _ = H,
        z = _,
        L = n('foW8'),
        W = n.n(L),
        R = n('6CfX'),
        q = n('CtXQ'),
        V = n('wEI+'),
        K = n('CWQg');
      function U(e) {
        return (
          (U =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          U(e)
        );
      }
      function B() {
        return (
          (B =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          B.apply(this, arguments)
        );
      }
      function F(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function X(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function Q(e, t, n) {
        return t && X(e.prototype, t), n && X(e, n), e;
      }
      function G(e, t) {
        return !t || ('object' !== U(t) && 'function' !== typeof t) ? Y(e) : t;
      }
      function Z(e) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Z(e)
        );
      }
      function Y(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function J(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && $(e, t);
      }
      function $(e, t) {
        return (
          ($ =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          $(e, t)
        );
      }
      var ee = function(e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 && (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        te = W()(null),
        ne = Object(K['a'])('top', 'right', 'bottom', 'left'),
        oe = (function(e) {
          function t() {
            var d;
            return (
              F(this, t),
              (d = G(this, Z(t).apply(this, arguments))),
              (d.state = { push: !1 }),
              (d.close = function(e) {
                void 0 === d.props.visible || (d.props.onClose && d.props.onClose(e));
              }),
              (d.onMaskClick = function(e) {
                d.props.maskClosable && d.close(e);
              }),
              (d.push = function() {
                d.setState({ push: !0 });
              }),
              (d.pull = function() {
                d.setState({ push: !1 });
              }),
              (d.onDestroyTransitionEnd = function() {
                var e = d.getDestroyOnClose();
                e && (d.props.visible || ((d.destroyClose = !0), d.forceUpdate()));
              }),
              (d.getDestroyOnClose = function() {
                return d.props.destroyOnClose && !d.props.visible;
              }),
              (d.getPushTransform = function(e) {
                return 'left' === e || 'right' === e
                  ? 'translateX('.concat('left' === e ? 180 : -180, 'px)')
                  : 'top' === e || 'bottom' === e
                  ? 'translateY('.concat('top' === e ? 180 : -180, 'px)')
                  : void 0;
              }),
              (d.getRcDrawerStyle = function() {
                var e = d.props,
                  t = e.zIndex,
                  n = e.placement,
                  o = e.style,
                  r = d.state.push;
                return B({ zIndex: t, transform: r ? d.getPushTransform(n) : void 0 }, o);
              }),
              (d.renderBody = function() {
                var e = d.props,
                  t = e.bodyStyle,
                  n = e.placement,
                  o = e.prefixCls,
                  r = e.visible;
                if (d.destroyClose && !r) return null;
                d.destroyClose = !1;
                var a = 'left' === n || 'right' === n ? { overflow: 'auto', height: '100%' } : {},
                  i = d.getDestroyOnClose();
                return (
                  i && ((a.opacity = 0), (a.transition = 'opacity .3s')),
                  p['createElement'](
                    'div',
                    {
                      className: ''.concat(o, '-wrapper-body'),
                      style: a,
                      onTransitionEnd: d.onDestroyTransitionEnd,
                    },
                    d.renderHeader(),
                    p['createElement'](
                      'div',
                      { className: ''.concat(o, '-body'), style: t },
                      d.props.children
                    )
                  )
                );
              }),
              (d.renderProvider = function(e) {
                var t = d.props,
                  n = t.prefixCls,
                  o = (t.zIndex, t.style, t.placement),
                  r = t.className,
                  a = t.wrapClassName,
                  i = t.width,
                  s = t.height,
                  l = ee(t, [
                    'prefixCls',
                    'zIndex',
                    'style',
                    'placement',
                    'className',
                    'wrapClassName',
                    'width',
                    'height',
                  ]);
                Object(R['a'])(
                  void 0 === a,
                  'Drawer',
                  'wrapClassName is deprecated, please use className instead.'
                );
                var c = l.mask ? '' : 'no-mask';
                d.parentDrawer = e;
                var u = {};
                return (
                  'left' === o || 'right' === o ? (u.width = i) : (u.height = s),
                  p['createElement'](
                    te.Provider,
                    { value: Y(d) },
                    p['createElement'](
                      z,
                      B({ handler: !1 }, l, u, {
                        prefixCls: n,
                        open: d.props.visible,
                        onMaskClick: d.onMaskClick,
                        showMask: d.props.mask,
                        placement: o,
                        style: d.getRcDrawerStyle(),
                        className: M()(a, r, c),
                      }),
                      d.renderBody()
                    )
                  )
                );
              }),
              d
            );
          }
          return (
            J(t, e),
            Q(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.visible !== this.props.visible &&
                    this.parentDrawer &&
                    (this.props.visible ? this.parentDrawer.push() : this.parentDrawer.pull());
                },
              },
              {
                key: 'renderHeader',
                value: function() {
                  var e = this.props,
                    t = e.title,
                    n = e.prefixCls,
                    o = e.closable;
                  if (!t && !o) return null;
                  var r = ''.concat(n, t ? '-header' : '-header-no-title');
                  return p['createElement'](
                    'div',
                    { className: r },
                    t && p['createElement']('div', { className: ''.concat(n, '-title') }, t),
                    o && this.renderCloseIcon()
                  );
                },
              },
              {
                key: 'renderCloseIcon',
                value: function() {
                  var e = this.props,
                    t = e.closable,
                    n = e.prefixCls;
                  return (
                    t &&
                    p['createElement'](
                      'button',
                      {
                        onClick: this.close,
                        'aria-label': 'Close',
                        className: ''.concat(n, '-close'),
                      },
                      p['createElement'](q['a'], { type: 'close' })
                    )
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  return p['createElement'](te.Consumer, null, this.renderProvider);
                },
              },
            ]),
            t
          );
        })(p['Component']);
      (oe.propTypes = {
        closable: o['bool'],
        destroyOnClose: o['bool'],
        getContainer: o['oneOfType']([o['string'], o['object'], o['func'], o['bool']]),
        maskClosable: o['bool'],
        mask: o['bool'],
        maskStyle: o['object'],
        style: o['object'],
        title: o['node'],
        visible: o['bool'],
        width: o['oneOfType']([o['string'], o['number']]),
        zIndex: o['number'],
        prefixCls: o['string'],
        placement: o['oneOf'](ne),
        onClose: o['func'],
        afterVisibleChange: o['func'],
        className: o['string'],
      }),
        (oe.defaultProps = {
          width: 256,
          height: 256,
          closable: !0,
          placement: 'right',
          maskClosable: !0,
          mask: !0,
          level: null,
        });
      t['a'] = Object(V['c'])({ prefixCls: 'drawer' })(oe);
    },
    '0XgM': function(e, t, n) {
      e.exports = {
        'ant-layout': 'ant-layout',
        'ant-layout-has-sider': 'ant-layout-has-sider',
        'ant-layout-content': 'ant-layout-content',
        'ant-layout-footer': 'ant-layout-footer',
        'ant-layout-header': 'ant-layout-header',
        'ant-layout-sider': 'ant-layout-sider',
        'ant-layout-sider-children': 'ant-layout-sider-children',
        'ant-layout-sider-has-trigger': 'ant-layout-sider-has-trigger',
        'ant-layout-sider-right': 'ant-layout-sider-right',
        'ant-layout-sider-trigger': 'ant-layout-sider-trigger',
        'ant-layout-sider-zero-width': 'ant-layout-sider-zero-width',
        'ant-layout-sider-zero-width-trigger': 'ant-layout-sider-zero-width-trigger',
        'ant-layout-sider-zero-width-trigger-right': 'ant-layout-sider-zero-width-trigger-right',
        'ant-layout-sider-light': 'ant-layout-sider-light',
      };
    },
    '1uty': function(e, t, n) {
      'use strict';
      var o = '_erd';
      function r(e) {
        return (e[o] = {}), a(e);
      }
      function a(e) {
        return e[o];
      }
      function i(e) {
        delete e[o];
      }
      e.exports = { initState: r, getState: a, cleanState: i };
    },
    '7sSR': function(e, t, n) {
      'use strict';
      var b = n('t3DW').forEach,
        u = n('W+U1'),
        d = n('Sa1T'),
        p = n('LO96'),
        w = n('UFhH'),
        E = n('q7TX'),
        C = n('GOnX'),
        x = n('wnTG'),
        O = n('1uty'),
        M = n('GNKm'),
        k = n('yUZ2');
      function S(e) {
        return Array.isArray(e) || void 0 !== e.length;
      }
      function N(e) {
        if (Array.isArray(e)) return e;
        var t = [];
        return (
          b(e, function(e) {
            t.push(e);
          }),
          t
        );
      }
      function T(e) {
        return e && 1 === e.nodeType;
      }
      function D(e, t, n) {
        var o = e[t];
        return (void 0 !== o && null !== o) || void 0 === n ? o : n;
      }
      e.exports = function(t) {
        var n;
        if (((t = t || {}), t.idHandler))
          n = {
            get: function(e) {
              return t.idHandler.get(e, !0);
            },
            set: t.idHandler.set,
          };
        else {
          var e = p(),
            o = w({ idGenerator: e, stateHandler: O });
          n = o;
        }
        var h = t.reporter;
        if (!h) {
          var r = !1 === h;
          h = E(r);
        }
        var a = D(t, 'batchProcessor', x({ reporter: h })),
          f = {};
        (f.callOnAdd = !!D(t, 'callOnAdd', !0)), (f.debug = !!D(t, 'debug', !1));
        var m,
          g = d(n),
          v = u({ stateHandler: O }),
          i = D(t, 'strategy', 'object'),
          s = { reporter: h, batchProcessor: a, stateHandler: O, idHandler: n };
        if (
          ('scroll' === i &&
            (C.isLegacyOpera()
              ? (h.warn(
                  'Scroll strategy is not supported on legacy Opera. Changing to object strategy.'
                ),
                (i = 'object'))
              : C.isIE(9) &&
                (h.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'),
                (i = 'object'))),
          'scroll' === i)
        )
          m = k(s);
        else {
          if ('object' !== i) throw new Error('Invalid strategy name: ' + i);
          m = M(s);
        }
        var y = {};
        function l(e, a, i) {
          function s(t) {
            var e = g.get(t);
            b(e, function(e) {
              e(t);
            });
          }
          function l(e, t, n) {
            g.add(t, n), e && n(t);
          }
          if ((i || ((i = a), (a = e), (e = {})), !a))
            throw new Error('At least one element required.');
          if (!i) throw new Error('Listener required.');
          if (T(a)) a = [a];
          else {
            if (!S(a))
              return h.error(
                'Invalid arguments. Must be a DOM element or a collection of DOM elements.'
              );
            a = N(a);
          }
          var c = 0,
            u = D(e, 'callOnAdd', f.callOnAdd),
            d = D(e, 'onReady', function() {}),
            p = D(e, 'debug', f.debug);
          b(a, function(e) {
            O.getState(e) || (O.initState(e), n.set(e));
            var r = n.get(e);
            if ((p && h.log('Attaching listener to element', r, e), !v.isDetectable(e)))
              return (
                p && h.log(r, 'Not detectable.'),
                v.isBusy(e)
                  ? (p && h.log(r, 'System busy making it detectable'),
                    l(u, e, i),
                    (y[r] = y[r] || []),
                    void y[r].push(function() {
                      c++, c === a.length && d();
                    }))
                  : (p && h.log(r, 'Making detectable...'),
                    v.markBusy(e, !0),
                    m.makeDetectable({ debug: p }, e, function(e) {
                      if ((p && h.log(r, 'onElementDetectable'), O.getState(e))) {
                        v.markAsDetectable(e), v.markBusy(e, !1), m.addListener(e, s), l(u, e, i);
                        var t = O.getState(e);
                        if (t && t.startSize) {
                          var n = e.offsetWidth,
                            o = e.offsetHeight;
                          (t.startSize.width === n && t.startSize.height === o) || s(e);
                        }
                        y[r] &&
                          b(y[r], function(e) {
                            e();
                          });
                      } else p && h.log(r, 'Element uninstalled before being detectable.');
                      delete y[r], c++, c === a.length && d();
                    }))
              );
            p && h.log(r, 'Already detecable, adding listener.'), l(u, e, i), c++;
          }),
            c === a.length && d();
        }
        function c(e) {
          if (!e) return h.error('At least one element is required.');
          if (T(e)) e = [e];
          else {
            if (!S(e))
              return h.error(
                'Invalid arguments. Must be a DOM element or a collection of DOM elements.'
              );
            e = N(e);
          }
          b(e, function(e) {
            g.removeAllListeners(e), m.uninstall(e), O.cleanState(e);
          });
        }
        return {
          listenTo: l,
          removeListener: g.removeListener,
          removeAllListeners: g.removeAllListeners,
          uninstall: c,
        };
      };
    },
    BJfS: function(e, t) {
      var n = function(e) {
        return e
          .replace(/[A-Z]/g, function(e) {
            return '-' + e.toLowerCase();
          })
          .toLowerCase();
      };
      e.exports = n;
    },
    BsfW: function(e, t, n) {
      e.exports = {
        list: 'antd-pro-components-notice-icon-notice-list-list',
        item: 'antd-pro-components-notice-icon-notice-list-item',
        meta: 'antd-pro-components-notice-icon-notice-list-meta',
        avatar: 'antd-pro-components-notice-icon-notice-list-avatar',
        iconElement: 'antd-pro-components-notice-icon-notice-list-iconElement',
        read: 'antd-pro-components-notice-icon-notice-list-read',
        title: 'antd-pro-components-notice-icon-notice-list-title',
        description: 'antd-pro-components-notice-icon-notice-list-description',
        datetime: 'antd-pro-components-notice-icon-notice-list-datetime',
        extra: 'antd-pro-components-notice-icon-notice-list-extra',
        loadMore: 'antd-pro-components-notice-icon-notice-list-loadMore',
        loadedAll: 'antd-pro-components-notice-icon-notice-list-loadedAll',
        notFound: 'antd-pro-components-notice-icon-notice-list-notFound',
        bottomBar: 'antd-pro-components-notice-icon-notice-list-bottomBar',
      };
    },
    'CWI+': function(e, t, n) {
      e.exports = {
        'ant-drawer': 'ant-drawer',
        'ant-drawer-content-wrapper': 'ant-drawer-content-wrapper',
        'ant-drawer-content': 'ant-drawer-content',
        'ant-drawer-left': 'ant-drawer-left',
        'ant-drawer-right': 'ant-drawer-right',
        'ant-drawer-open': 'ant-drawer-open',
        'no-mask': 'no-mask',
        'ant-drawer-bottom': 'ant-drawer-bottom',
        'ant-drawer-top': 'ant-drawer-top',
        'ant-drawer-mask': 'ant-drawer-mask',
        antdDrawerFadeIn: 'antdDrawerFadeIn',
        'ant-drawer-title': 'ant-drawer-title',
        'ant-drawer-close': 'ant-drawer-close',
        'ant-drawer-header': 'ant-drawer-header',
        'ant-drawer-header-no-title': 'ant-drawer-header-no-title',
        'ant-drawer-body': 'ant-drawer-body',
        'ant-drawer-open-content': 'ant-drawer-open-content',
      };
    },
    E6Dt: function(e, t, n) {
      'use strict';
      var a =
          (this && this.__extends) ||
          (function() {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(e, t) {
              function n() {
                this.constructor = e;
              }
              o(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            };
          })(),
        i =
          (this && this.__assign) ||
          Object.assign ||
          function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in ((t = arguments[n]), t))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = n('q1tI'),
        l = n('i8i4'),
        c = n('G0cP'),
        u = n('c1Md'),
        d = n('rjxA'),
        o = (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.cqCore = null),
              (t.state = { params: e.initialSize ? c.default(e.query)(e.initialSize) : {} }),
              t
            );
          }
          return (
            a(e, n),
            (e.prototype.componentDidMount = function() {
              this._startObserving(this.props.query);
            }),
            (e.prototype.componentWillReceiveProps = function(e) {
              this.cqCore &&
                !h(this.props.query, e.query) &&
                (this.cqCore.disconnect(), (this.cqCore = null), this._startObserving(e.query));
            }),
            (e.prototype.componentDidUpdate = function() {
              this.cqCore.observe(l.findDOMNode(this));
            }),
            (e.prototype.componentWillUnmount = function() {
              this.cqCore.disconnect(), (this.cqCore = null);
            }),
            (e.prototype.render = function() {
              return this.props.children(this.state.params);
            }),
            (e.prototype._startObserving = function(e) {
              var t = this;
              (this.cqCore = new u.default(e, function(e) {
                t.setState({ params: e });
              })),
                this.cqCore.observe(l.findDOMNode(this));
            }),
            e
          );
        })(s.Component);
      function r(t, o, r) {
        return (
          (e = (function(n) {
            function e(e) {
              var t = n.call(this, e) || this;
              return (t.cqCore = null), (t.state = { params: r ? c.default(o)(r) : {} }), t;
            }
            return (
              a(e, n),
              (e.prototype.componentDidMount = function() {
                var t = this;
                (this.cqCore = new u.default(o, function(e) {
                  t.setState({ params: e });
                })),
                  this.cqCore.observe(l.findDOMNode(this));
              }),
              (e.prototype.componentDidUpdate = function() {
                this.cqCore.observe(l.findDOMNode(this));
              }),
              (e.prototype.componentWillUnmount = function() {
                this.cqCore.disconnect(), (this.cqCore = null);
              }),
              (e.prototype.render = function() {
                return s.createElement(t, i({}, this.props, { containerQuery: this.state.params }));
              }),
              e
            );
          })(s.Component)),
          (e.displayName = t.displayName
            ? 'ContainerQuery(' + t.displayName + ')'
            : 'ContainerQuery'),
          e
        );
        var e;
      }
      (t.ContainerQuery = o), (t.applyContainerQuery = r);
      var p = Object.prototype.hasOwnProperty;
      function h(e, t) {
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var r = 0; r < n.length; r++)
          if (!p.call(t, n[r]) || !d.default(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
    },
    G0cP: function(e, t, n) {
      'use strict';
      function o(e) {
        for (var p = [], t = 0, n = Object.keys(e); t < n.length; t++) {
          var o = n[t],
            r = e[o];
          p.push({
            minWidth: null != r.minWidth ? r.minWidth : 0,
            maxWidth: null != r.maxWidth ? r.maxWidth : 1 / 0,
            minHeight: null != r.minHeight ? r.minHeight : 0,
            maxHeight: null != r.maxHeight ? r.maxHeight : 1 / 0,
            className: o,
          });
        }
        return function(e) {
          for (var t = e.height, n = e.width, o = {}, r = 0, a = p; r < a.length; r++) {
            var i = a[r],
              s = i.className,
              l = i.minWidth,
              c = i.maxWidth,
              u = i.minHeight,
              d = i.maxHeight;
            o[s] =
              null != t && null != n
                ? l <= n && n <= c && u <= t && t <= d
                : null == t && null != n
                ? l <= n && n <= c
                : null == t || null != n || (u <= t && t <= d);
          }
          return o;
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = o);
    },
    G3lK: function(e, t, n) {
      e.exports = {
        headerSearch: 'antd-pro-components-header-search-index-headerSearch',
        input: 'antd-pro-components-header-search-index-input',
        show: 'antd-pro-components-header-search-index-show',
      };
    },
    GNKm: function(e, t, n) {
      'use strict';
      var d = n('GOnX');
      e.exports = function(e) {
        e = e || {};
        var l = e.reporter,
          c = e.batchProcessor,
          u = e.stateHandler.getState;
        if (!l) throw new Error('Missing required dependency: reporter.');
        function t(e, t) {
          if (!r(e)) throw new Error('Element is not detectable by this strategy.');
          function n() {
            t(e);
          }
          if (d.isIE(8)) (u(e).object = { proxy: n }), e.attachEvent('onresize', n);
          else {
            var o = r(e);
            o.contentDocument.defaultView.addEventListener('resize', n);
          }
        }
        function n(e, t, n) {
          n || ((n = t), (t = e), (e = null)), (e = e || {});
          e.debug;
          function o(o, r) {
            var a =
                'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;',
              i = !1,
              s = window.getComputedStyle(o),
              e = o.offsetWidth,
              t = o.offsetHeight;
            function n() {
              function t() {
                if ('static' === s.position) {
                  o.style.position = 'relative';
                  var e = function(e, t, n, o) {
                    function r(e) {
                      return e.replace(/[^-\d\.]/g, '');
                    }
                    var a = n[o];
                    'auto' !== a &&
                      '0' !== r(a) &&
                      (e.warn(
                        'An element that is positioned static has style.' +
                          o +
                          '=' +
                          a +
                          ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
                          o +
                          ' will be set to 0. Element: ',
                        t
                      ),
                      (t.style[o] = 0));
                  };
                  e(l, o, s, 'top'), e(l, o, s, 'right'), e(l, o, s, 'bottom'), e(l, o, s, 'left');
                }
              }
              function e() {
                function n(e, t) {
                  e.contentDocument
                    ? t(e.contentDocument)
                    : setTimeout(function() {
                        n(e, t);
                      }, 100);
                }
                i || t();
                var e = this;
                n(e, function(e) {
                  r(o);
                });
              }
              '' !== s.position && (t(s), (i = !0));
              var n = document.createElement('object');
              (n.style.cssText = a),
                (n.tabIndex = -1),
                (n.type = 'text/html'),
                (n.onload = e),
                d.isIE() || (n.data = 'about:blank'),
                o.appendChild(n),
                (u(o).object = n),
                d.isIE() && (n.data = 'about:blank');
            }
            (u(o).startSize = { width: e, height: t }), c ? c.add(n) : n();
          }
          d.isIE(8) ? n(t) : o(t, n);
        }
        function r(e) {
          return u(e).object;
        }
        function o(e) {
          d.isIE(8) ? e.detachEvent('onresize', u(e).object.proxy) : e.removeChild(r(e)),
            delete u(e).object;
        }
        return { makeDetectable: n, addListener: t, uninstall: o };
      };
    },
    GOnX: function(e, t, n) {
      'use strict';
      var o = (e.exports = {});
      (o.isIE = function(e) {
        function t() {
          var e = navigator.userAgent.toLowerCase();
          return (
            -1 !== e.indexOf('msie') || -1 !== e.indexOf('trident') || -1 !== e.indexOf(' edge/')
          );
        }
        if (!t()) return !1;
        if (!e) return !0;
        var n = (function() {
          var e,
            t = 3,
            n = document.createElement('div'),
            o = n.getElementsByTagName('i');
          do {
            n.innerHTML = '\x3c!--[if gt IE ' + ++t + ']><i></i><![endif]--\x3e';
          } while (o[0]);
          return t > 4 ? t : e;
        })();
        return e === n;
      }),
        (o.isLegacyOpera = function() {
          return !!window.opera;
        });
    },
    IGtV: function(e, t, n) {
      e.exports = { fixedHeader: 'antd-pro-layouts-header-fixedHeader' };
    },
    JD84: function(e, t, n) {
      var i = n('SKAX');
      function o(e, o, r, a) {
        return (
          i(e, function(e, t, n) {
            o(a, e, r(e), n);
          }),
          a
        );
      }
      e.exports = o;
    },
    JwhZ: function(e, t, n) {
      e.exports = {
        head: 'antd-pro-components-top-nav-header-index-head',
        light: 'antd-pro-components-top-nav-header-index-light',
        main: 'antd-pro-components-top-nav-header-index-main',
        wide: 'antd-pro-components-top-nav-header-index-wide',
        left: 'antd-pro-components-top-nav-header-index-left',
        right: 'antd-pro-components-top-nav-header-index-right',
        logo: 'antd-pro-components-top-nav-header-index-logo',
        menu: 'antd-pro-components-top-nav-header-index-menu',
      };
    },
    LO96: function(e, t, n) {
      'use strict';
      e.exports = function() {
        var e = 1;
        function t() {
          return e++;
        }
        return { generate: t };
      };
    },
    'O/iA': function(e, t, n) {
      e.exports = {
        'ant-select-auto-complete': 'ant-select-auto-complete',
        'ant-select': 'ant-select',
        'ant-select-selection': 'ant-select-selection',
        'ant-select-selection__rendered': 'ant-select-selection__rendered',
        'ant-select-selection__placeholder': 'ant-select-selection__placeholder',
        'ant-select-selection--single': 'ant-select-selection--single',
        'ant-select-search--inline': 'ant-select-search--inline',
        'ant-select-allow-clear': 'ant-select-allow-clear',
        'ant-input': 'ant-input',
        'ant-select-lg': 'ant-select-lg',
        'ant-select-sm': 'ant-select-sm',
        'ant-input-group': 'ant-input-group',
        'ant-select-search__field': 'ant-select-search__field',
        'ant-input-affix-wrapper': 'ant-input-affix-wrapper',
      };
    },
    SKAX: function(e, t, n) {
      var o = n('JC6p'),
        r = n('lQqw'),
        a = r(o);
      e.exports = a;
    },
    Sa1T: function(e, t, n) {
      'use strict';
      e.exports = function(o) {
        var r = {};
        function a(e) {
          var t = o.get(e);
          return void 0 === t ? [] : r[t] || [];
        }
        function e(e, t) {
          var n = o.get(e);
          r[n] || (r[n] = []), r[n].push(t);
        }
        function t(e, t) {
          for (var n = a(e), o = 0, r = n.length; o < r; ++o)
            if (n[o] === t) {
              n.splice(o, 1);
              break;
            }
        }
        function n(e) {
          var t = a(e);
          t && (t.length = 0);
        }
        return { get: a, add: e, removeListener: t, removeAllListeners: n };
      };
    },
    UFhH: function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var o = e.idGenerator,
          r = e.stateHandler.getState;
        function t(e) {
          var t = r(e);
          return t && void 0 !== t.id ? t.id : null;
        }
        function n(e) {
          var t = r(e);
          if (!t) throw new Error('setId required the element to have a resize detection state.');
          var n = o.generate();
          return (t.id = n), n;
        }
        return { get: t, set: n };
      };
    },
    UL9e: function(e, t, n) {
      'use strict';
      var o = (e.exports = {});
      function r(e, t, n) {
        var o = e[t];
        return (void 0 !== o && null !== o) || void 0 === n ? o : n;
      }
      o.getOption = r;
    },
    UMY1: function(e, t, n) {
      var i = n('oMRN'),
        s = n('JD84'),
        l = n('ut/Y'),
        c = n('Z0cm');
      function o(r, a) {
        return function(e, t) {
          var n = c(e) ? i : s,
            o = a ? a() : {};
          return n(e, r, l(t, 2), o);
        };
      }
      e.exports = o;
    },
    'W+U1': function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var n = e.stateHandler.getState;
        function t(e) {
          var t = n(e);
          return t && !!t.isDetectable;
        }
        function o(e) {
          n(e).isDetectable = !0;
        }
        function r(e) {
          return !!n(e).busy;
        }
        function a(e, t) {
          n(e).busy = !!t;
        }
        return { isDetectable: t, markAsDetectable: o, isBusy: r, markBusy: a };
      };
    },
    W660: function(e, t, n) {
      e.exports = { content: 'antd-pro-layouts-basic-layout-content' };
    },
    bbsP: function(e, t, n) {
      'use strict';
      n('cIOH'), n('CWI+');
    },
    'bt/X': function(e, t, n) {
      var o = n('hypo'),
        r = n('UMY1'),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = r(function(e, t, n) {
          i.call(e, n) ? e[n].push(t) : o(e, n, [t]);
        });
      e.exports = s;
    },
    btmg: function(e, t, n) {
      e.exports = {
        popover: 'antd-pro-components-notice-icon-index-popover',
        noticeButton: 'antd-pro-components-notice-icon-index-noticeButton',
        icon: 'antd-pro-components-notice-icon-index-icon',
        badge: 'antd-pro-components-notice-icon-index-badge',
        tabs: 'antd-pro-components-notice-icon-index-tabs',
      };
    },
    c1Md: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n('owcV'),
        i = n('G0cP'),
        s = n('rjxA'),
        o = (function() {
          function e(n, o) {
            var r = this;
            (this.result = {}),
              (this.rol = new a.default(function(e) {
                var t = i.default(n)(e);
                s.default(r.result, t) || (o(t), (r.result = t));
              }));
          }
          return (
            (e.prototype.observe = function(e) {
              this.rol.observe(e);
            }),
            (e.prototype.disconnect = function() {
              this.rol.disconnect();
            }),
            e
          );
        })();
      t.default = o;
    },
    h3zL: function(e, t, n) {
      e.exports = {
        header: 'antd-pro-components-global-header-index-header',
        logo: 'antd-pro-components-global-header-index-logo',
        menu: 'antd-pro-components-global-header-index-menu',
        trigger: 'antd-pro-components-global-header-index-trigger',
        right: 'antd-pro-components-global-header-index-right',
        action: 'antd-pro-components-global-header-index-action',
        search: 'antd-pro-components-global-header-index-search',
        account: 'antd-pro-components-global-header-index-account',
        avatar: 'antd-pro-components-global-header-index-avatar',
        dark: 'antd-pro-components-global-header-index-dark',
        name: 'antd-pro-components-global-header-index-name',
      };
    },
    lQqw: function(e, t, n) {
      var s = n('MMmD');
      function o(a, i) {
        return function(e, t) {
          if (null == e) return e;
          if (!s(e)) return a(e, t);
          var n = e.length,
            o = i ? n : -1,
            r = Object(e);
          while (i ? o-- : ++o < n) if (!1 === t(r[o], o, r)) break;
          return e;
        };
      }
      e.exports = o;
    },
    m8Tn: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('p0pE'),
        h = n.n(o),
        r = n('jehZ'),
        f = n.n(r),
        a = n('2Taf'),
        s = n.n(a),
        i = n('vZ4D'),
        l = n.n(i),
        c = n('l4Ni'),
        u = n.n(c),
        d = n('ujKo'),
        p = n.n(d),
        m = n('MhPg'),
        g = n.n(m),
        v = (n('cIOH'), n('0XgM'), n('PKem')),
        y = n('ZX9x');
      v['b'].Sider = y['b'];
      var b = v['b'],
        w = n('q1tI'),
        E = n.n(w),
        C = n('ZFw/'),
        x = n.n(C),
        O = n('MuoO'),
        M = n('E6Dt'),
        k = n('TSYQ'),
        S = n.n(k);
      function N(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function T(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function D(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n('17x9');
      var j = n('QLaP'),
        P = n.n(j),
        I = n('pIsd'),
        H = n.n(I),
        A = (function() {
          function e(e, t, n) {
            var o = this;
            (this.nativeMediaQueryList = e.matchMedia(t)),
              (this.active = !0),
              (this.cancellableListener = function() {
                (o.matches = o.nativeMediaQueryList.matches),
                  o.active && n.apply(void 0, arguments);
              }),
              this.nativeMediaQueryList.addListener(this.cancellableListener),
              (this.matches = this.nativeMediaQueryList.matches);
          }
          var t = e.prototype;
          return (
            (t.cancel = function() {
              (this.active = !1),
                this.nativeMediaQueryList.removeListener(this.cancellableListener);
            }),
            e
          );
        })(),
        _ = (function(r) {
          function e() {
            for (var n, e = arguments.length, t = new Array(e), o = 0; o < e; o++)
              t[o] = arguments[o];
            return (
              (n = r.call.apply(r, [this].concat(t)) || this),
              D(T(T(n)), 'state', { matches: n.props.defaultMatches }),
              D(T(T(n)), 'updateMatches', function() {
                var e = n.mediaQueryList.matches;
                n.setState({ matches: e });
                var t = n.props.onChange;
                t && t(e);
              }),
              n
            );
          }
          N(e, r);
          var t = e.prototype;
          return (
            (t.componentWillMount = function() {
              if ('object' === typeof window) {
                var e = this.props.targetWindow || window;
                'function' !== typeof e.matchMedia && P()(!1);
                var t = this.props.query;
                'string' !== typeof t && (t = H()(t)),
                  (this.mediaQueryList = new A(e, t, this.updateMatches)),
                  this.updateMatches();
              }
            }),
            (t.componentWillUnmount = function() {
              this.mediaQueryList.cancel();
            }),
            (t.render = function() {
              var e = this.props,
                t = e.children,
                n = e.render,
                o = this.state.matches;
              return n
                ? o
                  ? n()
                  : null
                : t
                ? 'function' === typeof t
                  ? t(o)
                  : (!Array.isArray(t) || t.length) && o
                  ? E.a.Children.only(t)
                  : null
                : null;
            }),
            e
          );
        })(E.a.Component);
      D(_, 'defaultProps', { defaultMatches: !0 });
      var z = _,
        L = n('mxmt'),
        W = n.n(L),
        R = (n('Pwec'), n('CtXQ')),
        q = n('ggcP'),
        V = b.Footer,
        K = function() {
          return E.a.createElement(
            V,
            { style: { padding: 0 } },
            E.a.createElement(q['a'], {
              links: [
                {
                  key: 'Pro \u9996\u9875',
                  title: 'Pro \u9996\u9875',
                  href: 'https://pro.ant.design',
                  blankTarget: !0,
                },
                {
                  key: 'github',
                  title: E.a.createElement(R['a'], { type: 'github' }),
                  href: 'https://github.com/ant-design/ant-design-pro',
                  blankTarget: !0,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'https://ant.design',
                  blankTarget: !0,
                },
              ],
              copyright: E.a.createElement(
                w['Fragment'],
                null,
                'Copyright ',
                E.a.createElement(R['a'], { type: 'copyright' }),
                ' 2019 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1'
              ),
            })
          );
        },
        U = K,
        B = (n('miYZ'), n('tsqr')),
        F = n('Y2fQ'),
        X = n('MFj2'),
        Q = n('usdK'),
        G = n.n(Q),
        Z = n('SQvw'),
        Y = n.n(Z),
        J = n('mOP9'),
        $ = n.n(J),
        ee = n('fqkP'),
        te = n.n(ee),
        ne = n('h3zL'),
        oe = n.n(ne),
        re = (n('T2oS'), n('W9HT')),
        ae = (n('Telt'), n('Tckk')),
        ie = (n('5Dmo'), n('3S7+')),
        se = (n('lUTK'), n('BvKs')),
        le = (n('+BJd'), n('mr32')),
        ce = n('qIgq'),
        ue = n.n(ce),
        de = n('wd/R'),
        pe = n.n(de),
        he = n('bt/X'),
        fe = n.n(he),
        me = (n('Awhp'), n('KrTs')),
        ge = (n('Znn+'), n('ZTPi')),
        ve = n('i8i4'),
        ye = n.n(ve),
        be = n('+jAw'),
        we = (n('Mwp2'), n('VXEj')),
        Ee = n('eHn4'),
        Ce = n.n(Ee),
        xe = n('BsfW'),
        Oe = n.n(xe);
      function Me(e) {
        var t = e.data,
          n = void 0 === t ? [] : t,
          r = e.onClick,
          o = e.onClear,
          a = e.title,
          i = e.locale,
          s = e.emptyText,
          l = e.emptyImage,
          c = e.onViewMore,
          u = void 0 === c ? null : c,
          d = e.showClear,
          p = void 0 === d || d,
          h = e.showViewMore,
          f = void 0 !== h && h;
        return 0 === n.length
          ? E.a.createElement(
              'div',
              { className: Oe.a.notFound },
              l ? E.a.createElement('img', { src: l, alt: 'not found' }) : null,
              E.a.createElement('div', null, s || i.emptyText)
            )
          : E.a.createElement(
              'div',
              null,
              E.a.createElement(
                we['a'],
                { className: Oe.a.list },
                n.map(function(e, t) {
                  var n = S()(Oe.a.item, Ce()({}, Oe.a.read, e.read)),
                    o = e.avatar
                      ? 'string' === typeof e.avatar
                        ? E.a.createElement(ae['a'], { className: Oe.a.avatar, src: e.avatar })
                        : E.a.createElement('span', { className: Oe.a.iconElement }, e.avatar)
                      : null;
                  return E.a.createElement(
                    we['a'].Item,
                    {
                      className: n,
                      key: e.key || t,
                      onClick: function() {
                        return r(e);
                      },
                    },
                    E.a.createElement(we['a'].Item.Meta, {
                      className: Oe.a.meta,
                      avatar: o,
                      title: E.a.createElement(
                        'div',
                        { className: Oe.a.title },
                        e.title,
                        E.a.createElement('div', { className: Oe.a.extra }, e.extra)
                      ),
                      description: E.a.createElement(
                        'div',
                        null,
                        E.a.createElement(
                          'div',
                          { className: Oe.a.description, title: e.description },
                          e.description
                        ),
                        E.a.createElement('div', { className: Oe.a.datetime }, e.datetime)
                      ),
                    })
                  );
                })
              ),
              E.a.createElement(
                'div',
                { className: Oe.a.bottomBar },
                p ? E.a.createElement('div', { onClick: o }, i.clear, ' ', i[a] || a) : null,
                f ? E.a.createElement('div', { onClick: u }, i.viewMore) : null
              )
            );
      }
      var ke = n('btmg'),
        Se = n.n(ke),
        Ne = ge['a'].TabPane,
        Te = (function(e) {
          function a() {
            var e, r;
            s()(this, a);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return (
              (r = u()(this, (e = p()(a)).call.apply(e, [this].concat(n)))),
              (r.state = { visible: !1 }),
              (r.onItemClick = function(e, t) {
                var n = r.props.onItemClick,
                  o = e.clickClose;
                n(e, t), o && r.popover.click();
              }),
              (r.onClear = function(e) {
                var t = r.props,
                  n = t.onClear,
                  o = t.clearClose;
                n(e), o && r.popover.click();
              }),
              (r.onTabChange = function(e) {
                var t = r.props.onTabChange;
                t(e);
              }),
              (r.onViewMore = function(e, t) {
                var n = r.props.onViewMore;
                n(e, t);
              }),
              (r.handleVisibleChange = function(e) {
                var t = r.props.onPopupVisibleChange;
                r.setState({ visible: e }), t(e);
              }),
              r
            );
          }
          return (
            g()(a, e),
            l()(a, [
              {
                key: 'getNotificationBox',
                value: function() {
                  var h = this,
                    e = this.props,
                    t = e.children,
                    n = e.loading,
                    f = e.locale;
                  if (!t) return null;
                  var o = E.a.Children.map(t, function(t) {
                    var e = t.props,
                      n = e.list,
                      o = e.title,
                      r = e.count,
                      a = e.emptyText,
                      i = e.emptyImage,
                      s = e.showClear,
                      l = e.showViewMore,
                      c = n && n.length ? n.length : 0,
                      u = r || 0 === r ? r : c,
                      d = f[o] || o,
                      p = u > 0 ? ''.concat(d, ' (').concat(u, ')') : d;
                    return E.a.createElement(
                      Ne,
                      { tab: p, key: o },
                      E.a.createElement(Me, {
                        data: n,
                        emptyImage: i,
                        emptyText: a,
                        locale: f,
                        onClear: function() {
                          return h.onClear(o);
                        },
                        onClick: function(e) {
                          return h.onItemClick(e, t.props);
                        },
                        onViewMore: function(e) {
                          return h.onViewMore(t.props, e);
                        },
                        showClear: s,
                        showViewMore: l,
                        title: o,
                      })
                    );
                  });
                  return E.a.createElement(
                    w['Fragment'],
                    null,
                    E.a.createElement(
                      re['a'],
                      { spinning: n, delay: 0 },
                      E.a.createElement(
                        ge['a'],
                        { className: Se.a.tabs, onChange: this.onTabChange },
                        o
                      )
                    )
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this,
                    e = this.props,
                    n = e.className,
                    o = e.count,
                    r = e.popupVisible,
                    a = e.bell,
                    i = this.state.visible,
                    s = S()(n, Se.a.noticeButton),
                    l = this.getNotificationBox(),
                    c = a || E.a.createElement(R['a'], { type: 'bell', className: Se.a.icon }),
                    u = E.a.createElement(
                      'span',
                      { className: S()(s, { opened: i }) },
                      E.a.createElement(
                        me['a'],
                        { count: o, style: { boxShadow: 'none' }, className: Se.a.badge },
                        c
                      )
                    );
                  if (!l) return u;
                  var d = {};
                  return (
                    'popupVisible' in this.props && (d.visible = r),
                    E.a.createElement(
                      be['a'],
                      f()(
                        {
                          placement: 'bottomRight',
                          overlay: l,
                          overlayClassName: Se.a.popover,
                          trigger: ['click'],
                          visible: i,
                          onVisibleChange: this.handleVisibleChange,
                        },
                        d,
                        {
                          ref: function(e) {
                            return (t.popover = ye.a.findDOMNode(e));
                          },
                        }
                      ),
                      u
                    )
                  );
                },
              },
            ]),
            a
          );
        })(w['PureComponent']);
      (Te.Tab = Ne),
        (Te.defaultProps = {
          onItemClick: function() {},
          onPopupVisibleChange: function() {},
          onTabChange: function() {},
          onClear: function() {},
          onViewMore: function() {},
          loading: !1,
          clearClose: !1,
          locale: { emptyText: 'No notifications', clear: 'Clear', viewMore: 'More' },
          emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
        });
      n('O/iA'), n('OaEy'), n('5NDa');
      var De = n('LdHM');
      function je(e) {
        return (
          (je =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          je(e)
        );
      }
      function Pe() {
        return (
          (Pe =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          Pe.apply(this, arguments)
        );
      }
      function Ie(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function He(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function Ae(e, t, n) {
        return t && He(e.prototype, t), n && He(e, n), e;
      }
      function _e(e, t) {
        return !t || ('object' !== je(t) && 'function' !== typeof t) ? ze(e) : t;
      }
      function ze(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function Le(e) {
        return (
          (Le = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Le(e)
        );
      }
      function We(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Re(e, t);
      }
      function Re(e, t) {
        return (
          (Re =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          Re(e, t)
        );
      }
      var qe = (function(e) {
          function t() {
            var n;
            return (
              Ie(this, t),
              (n = _e(this, Le(t).apply(this, arguments))),
              (n.focus = function() {
                n.ele.focus ? n.ele.focus() : ve['findDOMNode'](n.ele).focus();
              }),
              (n.blur = function() {
                n.ele.blur ? n.ele.blur() : ve['findDOMNode'](n.ele).blur();
              }),
              (n.saveRef = function(e) {
                n.ele = e;
                var t = n.props.children.ref;
                'function' === typeof t && t(e);
              }),
              n
            );
          }
          return (
            We(t, e),
            Ae(t, [
              {
                key: 'render',
                value: function() {
                  return w['cloneElement'](
                    this.props.children,
                    Pe({}, this.props, { ref: this.saveRef }),
                    null
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']),
        Ve = n('5rEg'),
        Ke = n('2fM7'),
        Ue = n('wEI+');
      function Be(e) {
        return (
          (Be =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Be(e)
        );
      }
      function Fe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Xe() {
        return (
          (Xe =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          Xe.apply(this, arguments)
        );
      }
      function Qe(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function Ge(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function Ze(e, t, n) {
        return t && Ge(e.prototype, t), n && Ge(e, n), e;
      }
      function Ye(e, t) {
        return !t || ('object' !== Be(t) && 'function' !== typeof t) ? Je(e) : t;
      }
      function Je(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function $e(e) {
        return (
          ($e = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          $e(e)
        );
      }
      function et(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && tt(e, t);
      }
      function tt(e, t) {
        return (
          (tt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          tt(e, t)
        );
      }
      function nt(e) {
        return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup);
      }
      var ot = (function(e) {
        function t() {
          var g;
          return (
            Qe(this, t),
            (g = Ye(this, $e(t).apply(this, arguments))),
            (g.getInputElement = function() {
              var e = g.props.children,
                t =
                  e && w['isValidElement'](e) && e.type !== De['b']
                    ? w['Children'].only(g.props.children)
                    : w['createElement'](Ve['a'], null),
                n = Xe({}, t.props);
              return delete n.children, w['createElement'](qe, n, t);
            }),
            (g.saveSelect = function(e) {
              g.select = e;
            }),
            (g.renderAutoComplete = function(e) {
              var t,
                n,
                o = e.getPrefixCls,
                r = g.props,
                a = r.prefixCls,
                i = r.size,
                s = r.className,
                l = void 0 === s ? '' : s,
                c = r.notFoundContent,
                u = r.optionLabelProp,
                d = r.dataSource,
                p = r.children,
                h = o('select', a),
                f = S()(
                  ((t = {}),
                  Fe(t, ''.concat(h, '-lg'), 'large' === i),
                  Fe(t, ''.concat(h, '-sm'), 'small' === i),
                  Fe(t, l, !!l),
                  Fe(t, ''.concat(h, '-show-search'), !0),
                  Fe(t, ''.concat(h, '-auto-complete'), !0),
                  t)
                ),
                m = w['Children'].toArray(p);
              return (
                (n =
                  m.length && nt(m[0])
                    ? p
                    : d
                    ? d.map(function(e) {
                        if (w['isValidElement'](e)) return e;
                        switch (Be(e)) {
                          case 'string':
                            return w['createElement'](De['b'], { key: e }, e);
                          case 'object':
                            return w['createElement'](De['b'], { key: e.value }, e.text);
                          default:
                            throw new Error(
                              'AutoComplete[dataSource] only supports type `string[] | Object[]`.'
                            );
                        }
                      })
                    : []),
                w['createElement'](
                  Ke['a'],
                  Xe({}, g.props, {
                    className: f,
                    mode: Ke['a'].SECRET_COMBOBOX_MODE_DO_NOT_USE,
                    optionLabelProp: u,
                    getInputElement: g.getInputElement,
                    notFoundContent: c,
                    ref: g.saveSelect,
                  }),
                  n
                )
              );
            }),
            g
          );
        }
        return (
          et(t, e),
          Ze(t, [
            {
              key: 'focus',
              value: function() {
                this.select.focus();
              },
            },
            {
              key: 'blur',
              value: function() {
                this.select.blur();
              },
            },
            {
              key: 'render',
              value: function() {
                return w['createElement'](Ue['a'], null, this.renderAutoComplete);
              },
            },
          ]),
          t
        );
      })(w['Component']);
      (ot.Option = De['b']),
        (ot.OptGroup = De['a']),
        (ot.defaultProps = {
          transitionName: 'slide-up',
          optionLabelProp: 'children',
          choiceTransitionName: 'zoom',
          showSearch: !1,
          filterOption: !1,
        });
      var rt,
        at,
        it,
        st,
        lt,
        ct,
        ut,
        dt,
        pt = n('Y/ft'),
        ht = n.n(pt),
        ft = n('UjoV'),
        mt = n.n(ft),
        gt = n('G3lK'),
        vt = n.n(gt),
        yt = ((rt = mt()()),
        (at = te()(500, { leading: !0, trailing: !1 })),
        (lt = st = (function(e) {
          function t(e) {
            var r;
            return (
              s()(this, t),
              (r = u()(this, p()(t).call(this, e))),
              (r.onKeyDown = function(e) {
                if ('Enter' === e.key) {
                  var t = r.props.onPressEnter,
                    n = r.state.value;
                  r.timeout = setTimeout(function() {
                    t(n);
                  }, 0);
                }
              }),
              (r.onChange = function(e) {
                var t = r.props,
                  n = t.onSearch,
                  o = t.onChange;
                r.setState({ value: e }), n && n(e), o && o(e);
              }),
              (r.enterSearchMode = function() {
                var e = r.props.onVisibleChange;
                e(!0),
                  r.setState({ searchMode: !0 }, function() {
                    var e = r.state.searchMode;
                    e && r.input.focus();
                  });
              }),
              (r.leaveSearchMode = function() {
                r.setState({ searchMode: !1, value: '' });
              }),
              (r.state = { searchMode: e.defaultOpen, value: '' }),
              r
            );
          }
          return (
            g()(t, e),
            l()(t, null, [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  return 'open' in e ? { searchMode: e.open } : null;
                },
              },
            ]),
            l()(t, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearTimeout(this.timeout);
                },
              },
              {
                key: 'debouncePressEnter',
                value: function() {
                  var e = this.props.onPressEnter,
                    t = this.state.value;
                  e(t);
                },
              },
              {
                key: 'render',
                value: function() {
                  var o = this,
                    e = this.props,
                    t = e.className,
                    n = e.placeholder,
                    r = (e.open, ht()(e, ['className', 'placeholder', 'open'])),
                    a = this.state,
                    i = a.searchMode,
                    s = a.value;
                  delete r.defaultOpen;
                  var l = S()(vt.a.input, Ce()({}, vt.a.show, i));
                  return E.a.createElement(
                    'span',
                    {
                      className: S()(t, vt.a.headerSearch),
                      onClick: this.enterSearchMode,
                      onTransitionEnd: function(e) {
                        var t = e.propertyName;
                        if ('width' === t && !i) {
                          var n = o.props.onVisibleChange;
                          n(i);
                        }
                      },
                    },
                    E.a.createElement(R['a'], { type: 'search', key: 'Icon' }),
                    E.a.createElement(
                      ot,
                      f()({ key: 'AutoComplete' }, r, {
                        className: l,
                        value: s,
                        onChange: this.onChange,
                      }),
                      E.a.createElement(Ve['a'], {
                        ref: function(e) {
                          o.input = e;
                        },
                        'aria-label': n,
                        placeholder: n,
                        onKeyDown: this.onKeyDown,
                        onBlur: this.leaveSearchMode,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(w['PureComponent'])),
        (st.defaultProps = {
          defaultActiveFirstOption: !1,
          onPressEnter: function() {},
          onSearch: function() {},
          onChange: function() {},
          className: '',
          placeholder: '',
          dataSource: [],
          defaultOpen: !1,
          onVisibleChange: function() {},
        }),
        (it = lt),
        Y()(
          it.prototype,
          'debouncePressEnter',
          [rt, at],
          Object.getOwnPropertyDescriptor(it.prototype, 'debouncePressEnter'),
          it.prototype
        ),
        it),
        bt = n('bfXr'),
        wt = (function(e) {
          function a() {
            var e, o;
            s()(this, a);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (
              (o = u()(this, (e = p()(a)).call.apply(e, [this].concat(n)))),
              (o.getUnreadData = function(e) {
                var r = {};
                return (
                  Object.entries(e).forEach(function(e) {
                    var t = ue()(e, 2),
                      n = t[0],
                      o = t[1];
                    r[n] || (r[n] = 0),
                      Array.isArray(o) &&
                        (r[n] = o.filter(function(e) {
                          return !e.read;
                        }).length);
                  }),
                  r
                );
              }),
              (o.changeReadState = function(e) {
                var t = e.id,
                  n = o.props.dispatch;
                n({ type: 'global/changeNoticeReadState', payload: t });
              }),
              o
            );
          }
          return (
            g()(a, e),
            l()(a, [
              {
                key: 'getNoticeData',
                value: function() {
                  var e = this.props.notices,
                    t = void 0 === e ? [] : e;
                  if (0 === t.length) return {};
                  var n = t.map(function(e) {
                    var t = h()({}, e);
                    if (
                      (t.datetime && (t.datetime = pe()(e.datetime).fromNow()),
                      t.id && (t.key = t.id),
                      t.extra && t.status)
                    ) {
                      var n = { todo: '', processing: 'blue', urgent: 'red', doing: 'gold' }[
                        t.status
                      ];
                      t.extra = E.a.createElement(
                        le['a'],
                        { color: n, style: { marginRight: 0 } },
                        t.extra
                      );
                    }
                    return t;
                  });
                  return fe()(n, 'type');
                },
              },
              {
                key: 'render',
                value: function() {
                  var n = this,
                    e = this.props,
                    t = e.currentUser,
                    o = e.fetchingNotices,
                    r = e.onNoticeVisibleChange,
                    a = e.onMenuClick,
                    i = e.onNoticeClear,
                    s = e.theme,
                    l = E.a.createElement(
                      se['b'],
                      { className: oe.a.menu, selectedKeys: [], onClick: a },
                      E.a.createElement(
                        se['b'].Item,
                        { key: 'userCenter' },
                        E.a.createElement(R['a'], { type: 'user' }),
                        E.a.createElement(F['FormattedMessage'], {
                          id: 'menu.account.center',
                          defaultMessage: 'account center',
                        })
                      ),
                      E.a.createElement(
                        se['b'].Item,
                        { key: 'userinfo' },
                        E.a.createElement(R['a'], { type: 'setting' }),
                        E.a.createElement(F['FormattedMessage'], {
                          id: 'menu.account.settings',
                          defaultMessage: 'account settings',
                        })
                      ),
                      E.a.createElement(
                        se['b'].Item,
                        { key: 'triggerError' },
                        E.a.createElement(R['a'], { type: 'close-circle' }),
                        E.a.createElement(F['FormattedMessage'], {
                          id: 'menu.account.trigger',
                          defaultMessage: 'Trigger Error',
                        })
                      ),
                      E.a.createElement(se['b'].Divider, null),
                      E.a.createElement(
                        se['b'].Item,
                        { key: 'logout' },
                        E.a.createElement(R['a'], { type: 'logout' }),
                        E.a.createElement(F['FormattedMessage'], {
                          id: 'menu.account.logout',
                          defaultMessage: 'logout',
                        })
                      )
                    ),
                    c = this.getNoticeData(),
                    u = this.getUnreadData(c),
                    d = oe.a.right;
                  return (
                    'dark' === s && (d = ''.concat(oe.a.right, '  ').concat(oe.a.dark)),
                    E.a.createElement(
                      'div',
                      { className: d },
                      E.a.createElement(yt, {
                        className: ''.concat(oe.a.action, ' ').concat(oe.a.search),
                        placeholder: Object(F['formatMessage'])({
                          id: 'component.globalHeader.search',
                        }),
                        dataSource: [
                          Object(F['formatMessage'])({
                            id: 'component.globalHeader.search.example1',
                          }),
                          Object(F['formatMessage'])({
                            id: 'component.globalHeader.search.example2',
                          }),
                          Object(F['formatMessage'])({
                            id: 'component.globalHeader.search.example3',
                          }),
                        ],
                        onSearch: function(e) {
                          console.log('input', e);
                        },
                        onPressEnter: function(e) {
                          console.log('enter', e);
                        },
                      }),
                      E.a.createElement(
                        ie['a'],
                        {
                          title: Object(F['formatMessage'])({ id: 'component.globalHeader.help' }),
                        },
                        E.a.createElement(
                          'a',
                          {
                            target: '_blank',
                            href: 'https://pro.ant.design/docs/getting-started',
                            rel: 'noopener noreferrer',
                            className: oe.a.action,
                          },
                          E.a.createElement(R['a'], { type: 'question-circle-o' })
                        )
                      ),
                      E.a.createElement(
                        Te,
                        {
                          className: oe.a.action,
                          count: t.unreadCount,
                          onItemClick: function(e, t) {
                            console.log(e, t), n.changeReadState(e, t);
                          },
                          loading: o,
                          locale: {
                            emptyText: Object(F['formatMessage'])({
                              id: 'component.noticeIcon.empty',
                            }),
                            clear: Object(F['formatMessage'])({ id: 'component.noticeIcon.clear' }),
                            viewMore: Object(F['formatMessage'])({
                              id: 'component.noticeIcon.view-more',
                            }),
                            notification: Object(F['formatMessage'])({
                              id: 'component.globalHeader.notification',
                            }),
                            message: Object(F['formatMessage'])({
                              id: 'component.globalHeader.message',
                            }),
                            event: Object(F['formatMessage'])({
                              id: 'component.globalHeader.event',
                            }),
                          },
                          onClear: i,
                          onPopupVisibleChange: r,
                          onViewMore: function() {
                            return B['a'].info('Click on view more');
                          },
                          clearClose: !0,
                        },
                        E.a.createElement(Te.Tab, {
                          count: u.notification,
                          list: c.notification,
                          title: 'notification',
                          emptyText: Object(F['formatMessage'])({
                            id: 'component.globalHeader.notification.empty',
                          }),
                          emptyImage:
                            'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                          showViewMore: !0,
                        }),
                        E.a.createElement(Te.Tab, {
                          count: u.message,
                          list: c.message,
                          title: 'message',
                          emptyText: Object(F['formatMessage'])({
                            id: 'component.globalHeader.message.empty',
                          }),
                          emptyImage:
                            'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                          showViewMore: !0,
                        }),
                        E.a.createElement(Te.Tab, {
                          count: u.event,
                          list: c.event,
                          title: 'event',
                          emptyText: Object(F['formatMessage'])({
                            id: 'component.globalHeader.event.empty',
                          }),
                          emptyImage:
                            'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                          showViewMore: !0,
                        })
                      ),
                      t.name
                        ? E.a.createElement(
                            be['a'],
                            { overlay: l },
                            E.a.createElement(
                              'span',
                              { className: ''.concat(oe.a.action, ' ').concat(oe.a.account) },
                              E.a.createElement(ae['a'], {
                                size: 'small',
                                className: oe.a.avatar,
                                src: t.avatar,
                                alt: 'avatar',
                              }),
                              E.a.createElement('span', { className: oe.a.name }, t.name)
                            )
                          )
                        : E.a.createElement(re['a'], {
                            size: 'small',
                            style: { marginLeft: 8, marginRight: 8 },
                          }),
                      E.a.createElement(bt['a'], { className: oe.a.action })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(w['PureComponent']),
        Et = ((ct = te()(600)),
        (dt = (function(e) {
          function a() {
            var e, o;
            s()(this, a);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (
              (o = u()(this, (e = p()(a)).call.apply(e, [this].concat(n)))),
              (o.toggle = function() {
                var e = o.props,
                  t = e.collapsed,
                  n = e.onCollapse;
                n(!t), o.triggerResizeEvent();
              }),
              o
            );
          }
          return (
            g()(a, e),
            l()(a, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.triggerResizeEvent.cancel();
                },
              },
              {
                key: 'triggerResizeEvent',
                value: function() {
                  var e = document.createEvent('HTMLEvents');
                  e.initEvent('resize', !0, !1), window.dispatchEvent(e);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.collapsed,
                    n = e.isMobile,
                    o = e.logo;
                  return E.a.createElement(
                    'div',
                    { className: oe.a.header },
                    n &&
                      E.a.createElement(
                        $.a,
                        { to: '/', className: oe.a.logo, key: 'logo' },
                        E.a.createElement('img', { src: o, alt: 'logo', width: '32' })
                      ),
                    E.a.createElement(
                      'span',
                      { className: oe.a.trigger, onClick: this.toggle },
                      E.a.createElement(R['a'], { type: t ? 'menu-unfold' : 'menu-fold' })
                    ),
                    E.a.createElement(wt, this.props)
                  );
                },
              },
            ]),
            a
          );
        })(w['PureComponent'])),
        (ut = dt),
        Y()(
          ut.prototype,
          'triggerResizeEvent',
          [ct],
          Object.getOwnPropertyDescriptor(ut.prototype, 'triggerResizeEvent'),
          ut.prototype
        ),
        ut),
        Ct = n('oFg3'),
        xt = n('pMM0'),
        Ot = n('JwhZ'),
        Mt = n.n(Ot),
        kt = n('T+dw'),
        St = (function(e) {
          function a() {
            var e, t;
            s()(this, a);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (
              (t = u()(this, (e = p()(a)).call.apply(e, [this].concat(o)))),
              (t.state = { maxWidth: void 0 }),
              t
            );
          }
          return (
            g()(a, e),
            l()(
              a,
              [
                {
                  key: 'render',
                  value: function() {
                    var t = this,
                      e = this.props,
                      n = e.theme,
                      o = e.contentWidth,
                      r = e.menuData,
                      a = e.logo,
                      i = this.state.maxWidth,
                      s = Object(xt['b'])(r);
                    return E.a.createElement(
                      'div',
                      {
                        className: ''
                          .concat(Mt.a.head, ' ')
                          .concat('light' === n ? Mt.a.light : ''),
                      },
                      E.a.createElement(
                        'div',
                        {
                          ref: function(e) {
                            t.maim = e;
                          },
                          className: ''
                            .concat(Mt.a.main, ' ')
                            .concat('Fixed' === o ? Mt.a.wide : ''),
                        },
                        E.a.createElement(
                          'div',
                          { className: Mt.a.left },
                          E.a.createElement(
                            'div',
                            { className: Mt.a.logo, key: 'logo', id: 'logo' },
                            E.a.createElement(
                              $.a,
                              { to: '/' },
                              E.a.createElement('img', { src: a, alt: 'logo' }),
                              E.a.createElement('h1', null, kt['title'])
                            )
                          ),
                          E.a.createElement(
                            'div',
                            { style: { maxWidth: i } },
                            E.a.createElement(
                              Ct['default'],
                              f()({}, this.props, { flatMenuKeys: s, className: Mt.a.menu })
                            )
                          )
                        ),
                        E.a.createElement(wt, this.props)
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e) {
                    return {
                      maxWidth:
                        ('Fixed' === e.contentWidth && window.innerWidth > 1200
                          ? 1200
                          : window.innerWidth) -
                        280 -
                        120 -
                        40,
                    };
                  },
                },
              ]
            ),
            a
          );
        })(w['PureComponent']),
        Nt = n('IGtV'),
        Tt = n.n(Nt),
        Dt = b.Header,
        jt = (function(e) {
          function r() {
            var e, i;
            s()(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return (
              (i = u()(this, (e = p()(r)).call.apply(e, [this].concat(n)))),
              (i.state = { visible: !0 }),
              (i.getHeadWidth = function() {
                var e = i.props,
                  t = e.isMobile,
                  n = e.collapsed,
                  o = e.setting,
                  r = o.fixedHeader,
                  a = o.layout;
                return t || !r || 'topmenu' === a
                  ? '100%'
                  : n
                  ? 'calc(100% - 80px)'
                  : 'calc(100% - 256px)';
              }),
              (i.handleNoticeClear = function(e) {
                B['a'].success(
                  ''
                    .concat(Object(F['formatMessage'])({ id: 'component.noticeIcon.cleared' }), ' ')
                    .concat(Object(F['formatMessage'])({ id: 'component.globalHeader.'.concat(e) }))
                );
                var t = i.props.dispatch;
                t({ type: 'global/clearNotices', payload: e });
              }),
              (i.handleMenuClick = function(e) {
                var t = e.key,
                  n = i.props.dispatch;
                'userCenter' !== t
                  ? 'triggerError' !== t
                    ? 'userinfo' !== t
                      ? 'logout' === t && n({ type: 'login/logout' })
                      : G.a.push('/account/settings/base')
                    : G.a.push('/exception/trigger')
                  : G.a.push('/account/center');
              }),
              (i.handleNoticeVisibleChange = function(e) {
                if (e) {
                  var t = i.props.dispatch;
                  t({ type: 'global/fetchNotices' });
                }
              }),
              (i.handScroll = function() {
                var e = i.props.autoHideHeader,
                  t = i.state.visible;
                if (e) {
                  var n = document.body.scrollTop + document.documentElement.scrollTop;
                  i.ticking ||
                    ((i.ticking = !0),
                    requestAnimationFrame(function() {
                      i.oldScrollTop > n
                        ? i.setState({ visible: !0 })
                        : n > 300 && t
                        ? i.setState({ visible: !1 })
                        : n < 300 && !t && i.setState({ visible: !0 }),
                        (i.oldScrollTop = n),
                        (i.ticking = !1);
                    }));
                }
              }),
              i
            );
          }
          return (
            g()(r, e),
            l()(
              r,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    document.addEventListener('scroll', this.handScroll, { passive: !0 });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    document.removeEventListener('scroll', this.handScroll);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.isMobile,
                      n = e.handleMenuCollapse,
                      o = e.setting,
                      r = o.navTheme,
                      a = o.layout,
                      i = o.fixedHeader,
                      s = this.state.visible,
                      l = 'topmenu' === a,
                      c = this.getHeadWidth(),
                      u = s
                        ? E.a.createElement(
                            Dt,
                            {
                              style: { padding: 0, width: c, zIndex: 2 },
                              className: i ? Tt.a.fixedHeader : '',
                            },
                            l && !t
                              ? E.a.createElement(
                                  St,
                                  f()(
                                    {
                                      theme: r,
                                      mode: 'horizontal',
                                      onCollapse: n,
                                      onNoticeClear: this.handleNoticeClear,
                                      onMenuClick: this.handleMenuClick,
                                      onNoticeVisibleChange: this.handleNoticeVisibleChange,
                                    },
                                    this.props
                                  )
                                )
                              : E.a.createElement(
                                  Et,
                                  f()(
                                    {
                                      onCollapse: n,
                                      onNoticeClear: this.handleNoticeClear,
                                      onMenuClick: this.handleMenuClick,
                                      onNoticeVisibleChange: this.handleNoticeVisibleChange,
                                    },
                                    this.props
                                  )
                                )
                          )
                        : null;
                    return E.a.createElement(X['a'], { component: '', transitionName: 'fade' }, u);
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    return e.autoHideHeader || t.visible ? null : { visible: !0 };
                  },
                },
              ]
            ),
            r
          );
        })(w['Component']),
        Pt = Object(O['connect'])(function(e) {
          var t = e.user,
            n = e.global,
            o = e.setting,
            r = e.loading;
          return {
            currentUser: t.currentUser,
            collapsed: n.collapsed,
            fetchingMoreNotices: r.effects['global/fetchMoreNotices'],
            fetchingNotices: r.effects['global/fetchNotices'],
            notices: n.notices,
            setting: o,
          };
        })(jt),
        It = n('R1Dz'),
        Ht = (n('bbsP'), n('/wGt')),
        At = n('gWZ8'),
        _t = n.n(At),
        zt = n('mR0u'),
        Lt = n.n(zt),
        Wt = n('xqX8'),
        Rt = E.a.lazy(function() {
          return Promise.resolve().then(n.bind(null, 'oFg3'));
        }),
        qt = b.Sider,
        Vt = !0,
        Kt = (function(e) {
          function t(e) {
            var n;
            return (
              s()(this, t),
              (n = u()(this, p()(t).call(this, e))),
              (n.isMainMenu = function(t) {
                var e = n.props.menuData;
                return e.some(function(e) {
                  return !!t && (e.key === t || e.path === t);
                });
              }),
              (n.handleOpenChange = function(e) {
                var t =
                  e.filter(function(e) {
                    return n.isMainMenu(e);
                  }).length > 1;
                n.setState({ openKeys: t ? [e.pop()] : _t()(e) });
              }),
              (n.state = { openKeys: Object(xt['a'])(e) }),
              n
            );
          }
          return (
            g()(t, e),
            l()(
              t,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    Vt = !1;
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e,
                      t = this.props,
                      n = t.logo,
                      o = t.collapsed,
                      r = t.onCollapse,
                      a = t.fixSiderbar,
                      i = t.theme,
                      s = t.isMobile,
                      l = this.state.openKeys,
                      c = o ? {} : { openKeys: l },
                      u = S()(
                        Lt.a.sider,
                        ((e = {}),
                        Ce()(e, Lt.a.fixSiderBar, a),
                        Ce()(e, Lt.a.light, 'light' === i),
                        e)
                      );
                    return E.a.createElement(
                      qt,
                      {
                        trigger: null,
                        collapsible: !0,
                        collapsed: o,
                        breakpoint: 'lg',
                        onCollapse: function(e) {
                          (!Vt && s) || r(e);
                        },
                        width: 256,
                        theme: i,
                        className: u,
                      },
                      E.a.createElement(
                        'div',
                        { className: Lt.a.logo, id: 'logo' },
                        E.a.createElement(
                          $.a,
                          { to: '/' },
                          E.a.createElement('img', { src: n, alt: 'logo' }),
                          E.a.createElement('h1', null, kt['title'])
                        )
                      ),
                      E.a.createElement(
                        w['Suspense'],
                        { fallback: E.a.createElement(Wt['default'], null) },
                        E.a.createElement(
                          Rt,
                          f()(
                            {},
                            this.props,
                            {
                              mode: 'inline',
                              handleOpenChange: this.handleOpenChange,
                              onOpenChange: this.handleOpenChange,
                              style: { padding: '16px 0', width: '100%' },
                            },
                            c
                          )
                        )
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    var n = t.pathname,
                      o = t.flatMenuKeysLen;
                    return e.location.pathname !== n || e.flatMenuKeys.length !== o
                      ? {
                          pathname: e.location.pathname,
                          flatMenuKeysLen: e.flatMenuKeys.length,
                          openKeys: Object(xt['a'])(e),
                        }
                      : null;
                  },
                },
              ]
            ),
            t
          );
        })(w['PureComponent']),
        Ut = E.a.memo(function(e) {
          var t = e.isMobile,
            n = e.menuData,
            o = e.collapsed,
            r = e.onCollapse,
            a = Object(xt['b'])(n);
          return t
            ? E.a.createElement(
                Ht['a'],
                {
                  visible: !o,
                  placement: 'left',
                  onClose: function() {
                    return r(!0);
                  },
                  style: { padding: 0, height: '100vh' },
                },
                E.a.createElement(Kt, f()({}, e, { flatMenuKeys: a, collapsed: !t && o }))
              )
            : E.a.createElement(Kt, f()({}, e, { flatMenuKeys: a }));
        }),
        Bt = Ut,
        Ft = n('tGQQ'),
        Xt = n('W660'),
        Qt = n.n(Xt),
        Gt = (E.a.lazy(function() {
          return Promise.all([n.e(0), n.e(38)]).then(n.bind(null, 'PceP'));
        }),
        b.Content),
        Zt = {
          'screen-xs': { maxWidth: 575 },
          'screen-sm': { minWidth: 576, maxWidth: 767 },
          'screen-md': { minWidth: 768, maxWidth: 991 },
          'screen-lg': { minWidth: 992, maxWidth: 1199 },
          'screen-xl': { minWidth: 1200, maxWidth: 1599 },
          'screen-xxl': { minWidth: 1600 },
        },
        Yt = (function(e) {
          function r() {
            var e, a;
            s()(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return (
              (a = u()(this, (e = p()(r)).call.apply(e, [this].concat(n)))),
              (a.getLayoutStyle = function() {
                var e = a.props,
                  t = e.fixSiderbar,
                  n = e.isMobile,
                  o = e.collapsed,
                  r = e.layout;
                return t && 'topmenu' !== r && !n ? { paddingLeft: o ? '80px' : '256px' } : null;
              }),
              (a.handleMenuCollapse = function(e) {
                var t = a.props.dispatch;
                t({ type: 'global/changeLayoutCollapsed', payload: e });
              }),
              (a.renderSettingDrawer = function() {
                return null;
              }),
              a
            );
          }
          return (
            g()(r, e),
            l()(r, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.dispatch,
                    n = e.route,
                    o = n.routes,
                    r = n.path,
                    a = n.authority;
                  t({ type: 'user/fetchCurrent' }),
                    t({ type: 'setting/getSetting' }),
                    t({ type: 'menu/getMenuData', payload: { routes: o, path: r, authority: a } });
                },
              },
              {
                key: 'getContext',
                value: function() {
                  var e = this.props,
                    t = e.location,
                    n = e.breadcrumbNameMap;
                  return { location: t, breadcrumbNameMap: n };
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this,
                    e = this.props,
                    n = e.navTheme,
                    o = e.layout,
                    r = e.children,
                    a = e.location.pathname,
                    i = e.isMobile,
                    s = e.menuData,
                    l = e.breadcrumbNameMap,
                    c = e.fixedHeader,
                    u = 'topmenu' === o,
                    d = c ? {} : { paddingTop: 0 },
                    p = E.a.createElement(
                      b,
                      null,
                      u && !i
                        ? null
                        : E.a.createElement(
                            Bt,
                            f()(
                              {
                                logo: W.a,
                                theme: n,
                                onCollapse: this.handleMenuCollapse,
                                menuData: s,
                                isMobile: i,
                              },
                              this.props
                            )
                          ),
                      E.a.createElement(
                        b,
                        { style: h()({}, this.getLayoutStyle(), { minHeight: '100vh' }) },
                        E.a.createElement(
                          Pt,
                          f()(
                            {
                              menuData: s,
                              handleMenuCollapse: this.handleMenuCollapse,
                              logo: W.a,
                              isMobile: i,
                            },
                            this.props
                          )
                        ),
                        E.a.createElement(Gt, { className: Qt.a.content, style: d }, r),
                        E.a.createElement(U, null)
                      )
                    );
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(
                      x.a,
                      { title: Object(Ft['a'])(a, l) },
                      E.a.createElement(M['ContainerQuery'], { query: Zt }, function(e) {
                        return E.a.createElement(
                          It['a'].Provider,
                          { value: t.getContext() },
                          E.a.createElement('div', { className: S()(e) }, p)
                        );
                      })
                    ),
                    E.a.createElement(w['Suspense'], { fallback: null }, this.renderSettingDrawer())
                  );
                },
              },
            ]),
            r
          );
        })(E.a.Component);
      t['default'] = Object(O['connect'])(function(e) {
        var t = e.global,
          n = e.setting,
          o = e.menu;
        return h()(
          {
            collapsed: t.collapsed,
            layout: n.layout,
            menuData: o.menuData,
            breadcrumbNameMap: o.breadcrumbNameMap,
          },
          n
        );
      })(function(t) {
        return E.a.createElement(z, { query: '(max-width: 599px)' }, function(e) {
          return E.a.createElement(Yt, f()({}, t, { isMobile: e }));
        });
      });
    },
    mR0u: function(e, t, n) {
      e.exports = {
        logo: 'antd-pro-components-sider-menu-index-logo',
        sider: 'antd-pro-components-sider-menu-index-sider',
        fixSiderBar: 'antd-pro-components-sider-menu-index-fixSiderBar',
        light: 'antd-pro-components-sider-menu-index-light',
        icon: 'antd-pro-components-sider-menu-index-icon',
      };
    },
    oFg3: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('jehZ'),
        v = n.n(o),
        r = n('gWZ8'),
        y = n.n(r),
        a = n('2Taf'),
        i = n.n(a),
        s = n('vZ4D'),
        l = n.n(s),
        c = n('l4Ni'),
        u = n.n(c),
        d = n('ujKo'),
        p = n.n(d),
        h = n('MhPg'),
        f = n.n(h),
        m = (n('Pwec'), n('CtXQ')),
        b = (n('lUTK'), n('BvKs')),
        g = n('q1tI'),
        w = n.n(g),
        E = n('TSYQ'),
        C = n.n(E),
        x = n('mOP9'),
        O = n.n(x),
        M = n('S/9j'),
        k = n('pMM0'),
        S = n('+n12'),
        N = n('mR0u'),
        T = n.n(N),
        D = n('T+dw'),
        j = m['a'].createFromIconfontCN({ scriptUrl: D['iconfontUrl'] });
      n.d(t, 'default', function() {
        return H;
      });
      var P = b['b'].SubMenu,
        I = function(e) {
          return 'string' === typeof e
            ? Object(S['e'])(e)
              ? w.a.createElement(m['a'], {
                  component: function() {
                    return w.a.createElement('img', { src: e, alt: 'icon', className: T.a.icon });
                  },
                })
              : e.startsWith('icon-')
              ? w.a.createElement(j, { type: e })
              : w.a.createElement(m['a'], { type: e })
            : e;
        },
        H = (function(e) {
          function r() {
            var e, c;
            i()(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return (
              (c = u()(this, (e = p()(r)).call.apply(e, [this].concat(n)))),
              (c.getNavMenuItems = function(e) {
                return e
                  ? e
                      .filter(function(e) {
                        return e.name && !e.hideInMenu;
                      })
                      .map(function(e) {
                        return c.getSubMenuOrItem(e);
                      })
                      .filter(function(e) {
                        return e;
                      })
                  : [];
              }),
              (c.getSelectedMenuKeys = function(e) {
                var t = c.props.flatMenuKeys;
                return Object(M['a'])(e).map(function(e) {
                  return Object(k['c'])(t, e).pop();
                });
              }),
              (c.getSubMenuOrItem = function(e) {
                if (
                  e.children &&
                  !e.hideChildrenInMenu &&
                  e.children.some(function(e) {
                    return e.name;
                  })
                ) {
                  var t = e.name;
                  return w.a.createElement(
                    P,
                    {
                      title: e.icon
                        ? w.a.createElement(
                            'span',
                            null,
                            I(e.icon),
                            w.a.createElement('span', null, t)
                          )
                        : t,
                      key: e.path,
                    },
                    c.getNavMenuItems(e.children)
                  );
                }
                return w.a.createElement(b['b'].Item, { key: e.path }, c.getMenuItemPath(e));
              }),
              (c.getMenuItemPath = function(e) {
                var t = e.name,
                  n = c.conversionPath(e.path),
                  o = I(e.icon),
                  r = e.target;
                if (/^https?:\/\//.test(n))
                  return w.a.createElement(
                    'a',
                    { href: n, target: r },
                    o,
                    w.a.createElement('span', null, t)
                  );
                var a = c.props,
                  i = a.location,
                  s = a.isMobile,
                  l = a.onCollapse;
                return w.a.createElement(
                  O.a,
                  {
                    to: n,
                    target: r,
                    replace: n === i.pathname,
                    onClick: s
                      ? function() {
                          l(!0);
                        }
                      : void 0,
                  },
                  o,
                  w.a.createElement('span', null, t)
                );
              }),
              (c.conversionPath = function(e) {
                return e && 0 === e.indexOf('http') ? e : '/'.concat(e || '').replace(/\/+/g, '/');
              }),
              (c.getPopupContainer = function(e, t) {
                return e && 'topmenu' === t ? c.wrap : document.body;
              }),
              (c.getRef = function(e) {
                c.wrap = e;
              }),
              c
            );
          }
          return (
            f()(r, e),
            l()(r, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.openKeys,
                    o = t.theme,
                    r = t.mode,
                    a = t.location.pathname,
                    i = t.className,
                    s = t.collapsed,
                    l = t.fixedHeader,
                    c = t.layout,
                    u = this.getSelectedMenuKeys(a);
                  !u.length && n && (u = [n[n.length - 1]]);
                  var d = {};
                  n && !s && (d = { openKeys: 0 === n.length ? y()(u) : n });
                  var p = this.props,
                    h = p.handleOpenChange,
                    f = p.style,
                    m = p.menuData,
                    g = C()(i, { 'top-nav-menu': 'horizontal' === r });
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      b['b'],
                      v()(
                        {
                          key: 'Menu',
                          mode: r,
                          theme: o,
                          onOpenChange: h,
                          selectedKeys: u,
                          style: f,
                          className: g,
                        },
                        d,
                        {
                          getPopupContainer: function() {
                            return e.getPopupContainer(l, c);
                          },
                        }
                      ),
                      this.getNavMenuItems(m)
                    ),
                    w.a.createElement('div', { ref: this.getRef })
                  );
                },
              },
            ]),
            r
          );
        })(g['PureComponent']);
    },
    oMRN: function(e, t) {
      function n(e, t, n, o) {
        var r = -1,
          a = null == e ? 0 : e.length;
        while (++r < a) {
          var i = e[r];
          t(o, i, n(i), e);
        }
        return o;
      }
      e.exports = n;
    },
    owcV: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('7sSR'),
        r = (function() {
          function e(e) {
            var t = this;
            (this.handler = e),
              (this.listenedElement = null),
              (this.hasResizeObserver = 'undefined' !== typeof window.ResizeObserver),
              this.hasResizeObserver
                ? (this.rz = new ResizeObserver(function(e) {
                    t.handler(a(e[0].target));
                  }))
                : (this.erd = o({ strategy: 'scroll' }));
          }
          return (
            (e.prototype.observe = function(e) {
              var t = this;
              this.listenedElement !== e &&
                (this.listenedElement && this.disconnect(),
                e &&
                  (this.hasResizeObserver
                    ? this.rz.observe(e)
                    : this.erd.listenTo(e, function(e) {
                        t.handler(a(e));
                      })),
                (this.listenedElement = e));
            }),
            (e.prototype.disconnect = function() {
              this.listenedElement &&
                (this.hasResizeObserver
                  ? this.rz.disconnect()
                  : this.erd.uninstall(this.listenedElement),
                (this.listenedElement = null));
            }),
            e
          );
        })();
      function a(e) {
        return {
          width: i(window.getComputedStyle(e)['width']),
          height: i(window.getComputedStyle(e)['height']),
        };
      }
      function i(e) {
        var t = /^([0-9\.]+)px$/.exec(e);
        return t ? parseFloat(t[1]) : 0;
      }
      t.default = r;
    },
    pIsd: function(e, t, n) {
      var i = n('BJfS'),
        s = function(e) {
          var t = /[height|width]$/;
          return t.test(e);
        },
        r = function(o) {
          var r = '',
            a = Object.keys(o);
          return (
            a.forEach(function(e, t) {
              var n = o[e];
              (e = i(e)),
                s(e) && 'number' === typeof n && (n += 'px'),
                (r += !0 === n ? e : !1 === n ? 'not ' + e : '(' + e + ': ' + n + ')'),
                t < a.length - 1 && (r += ' and ');
            }),
            r
          );
        },
        o = function(n) {
          var o = '';
          return 'string' === typeof n
            ? n
            : n instanceof Array
            ? (n.forEach(function(e, t) {
                (o += r(e)), t < n.length - 1 && (o += ', ');
              }),
              o)
            : r(n);
        };
      e.exports = o;
    },
    pMM0: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return l;
      }),
        n.d(t, 'c', function() {
          return c;
        }),
        n.d(t, 'a', function() {
          return u;
        });
      var o = n('gWZ8'),
        r = n.n(o),
        a = n('bALw'),
        i = n.n(a),
        s = n('S/9j'),
        l = function t(e) {
          var n = [];
          return (
            e.forEach(function(e) {
              n.push(e.path), e.children && (n = n.concat(t(e.children)));
            }),
            n
          );
        },
        c = function(e, t) {
          return e.filter(function(e) {
            return !!e && i()(e).test(t);
          });
        },
        u = function(e) {
          var t = e.location.pathname,
            n = e.flatMenuKeys;
          return Object(s['a'])(t)
            .map(function(e) {
              return c(n, e)[0];
            })
            .filter(function(e) {
              return e;
            })
            .reduce(
              function(e, t) {
                return [].concat(r()(e), [t]);
              },
              ['/']
            );
        };
    },
    q7TX: function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        function t() {}
        var n = { log: t, warn: t, error: t };
        if (!e && window.console) {
          var o = function(e, n) {
            e[n] = function() {
              var e = console[n];
              if (e.apply) e.apply(console, arguments);
              else for (var t = 0; t < arguments.length; t++) e(arguments[t]);
            };
          };
          o(n, 'log'), o(n, 'warn'), o(n, 'error');
        }
        return n;
      };
    },
    rjxA: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = Object.prototype.hasOwnProperty;
      function o(e, t) {
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var r = 0; r < n.length; r++) if (!a.call(t, n[r]) || e[n[r]] !== t[n[r]]) return !1;
        return !0;
      }
      t.default = o;
    },
    t3DW: function(e, t, n) {
      'use strict';
      var o = (e.exports = {});
      o.forEach = function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var o = t(e[n]);
          if (o) return o;
        }
      };
    },
    wnTG: function(e, t, n) {
      'use strict';
      var h = n('UL9e');
      function f() {
        var r = {},
          n = 0,
          a = 0,
          i = 0;
        function e(e, t) {
          t || ((t = e), (e = 0)),
            e > a ? (a = e) : e < i && (i = e),
            r[e] || (r[e] = []),
            r[e].push(t),
            n++;
        }
        function t() {
          for (var e = i; e <= a; e++)
            for (var t = r[e], n = 0; n < t.length; n++) {
              var o = t[n];
              o();
            }
        }
        function o() {
          return n;
        }
        return { add: e, process: t, size: o };
      }
      e.exports = function(e) {
        e = e || {};
        var t = e.reporter,
          n = h.getOption(e, 'async', !0),
          o = h.getOption(e, 'auto', !0);
        o &&
          !n &&
          (t &&
            t.warn(
              'Invalid options combination. auto=true and async=false is invalid. Setting async=true.'
            ),
          (n = !0));
        var r,
          a = f(),
          i = !1;
        function s(e, t) {
          !i && o && n && 0 === a.size() && u(), a.add(e, t);
        }
        function l() {
          i = !0;
          while (a.size()) {
            var e = a;
            (a = f()), e.process();
          }
          i = !1;
        }
        function c(e) {
          i || (void 0 === e && (e = n), r && (d(r), (r = null)), e ? u() : l());
        }
        function u() {
          r = p(l);
        }
        function d(e) {
          var t = clearTimeout;
          return t(e);
        }
        function p(e) {
          var t = function(e) {
            return setTimeout(e, 0);
          };
          return t(e);
        }
        return { add: s, force: c };
      };
    },
    yUZ2: function(e, t, n) {
      'use strict';
      var A = n('t3DW').forEach;
      e.exports = function(e) {
        e = e || {};
        var M = e.reporter,
          k = e.batchProcessor,
          S = e.stateHandler.getState,
          N = (e.stateHandler.hasState, e.idHandler);
        if (!k) throw new Error('Missing required dependency: batchProcessor');
        if (!M) throw new Error('Missing required dependency: reporter.');
        var T = n(),
          t = 'erd_scroll_detection_scrollbar_style',
          D = 'erd_scroll_detection_container';
        function n() {
          var e = 500,
            t = 500,
            n = document.createElement('div');
          n.style.cssText =
            'position: absolute; width: ' +
            2 * e +
            'px; height: ' +
            2 * t +
            'px; visibility: hidden; margin: 0; padding: 0;';
          var o = document.createElement('div');
          (o.style.cssText =
            'position: absolute; width: ' +
            e +
            'px; height: ' +
            t +
            'px; overflow: scroll; visibility: none; top: ' +
            3 * -e +
            'px; left: ' +
            3 * -t +
            'px; visibility: hidden; margin: 0; padding: 0;'),
            o.appendChild(n),
            document.body.insertBefore(o, document.body.firstChild);
          var r = e - o.clientWidth,
            a = t - o.clientHeight;
          return document.body.removeChild(o), { width: r, height: a };
        }
        function o(o, e) {
          function t(e, t) {
            t =
              t ||
              function(e) {
                document.head.appendChild(e);
              };
            var n = document.createElement('style');
            return (n.innerHTML = e), (n.id = o), t(n), n;
          }
          if (!document.getElementById(o)) {
            var n = e + '_animation',
              r = e + '_animation_active',
              a = '/* Created by the element-resize-detector library. */\n';
            (a += '.' + e + ' > div::-webkit-scrollbar { display: none; }\n\n'),
              (a +=
                '.' +
                r +
                ' { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: ' +
                n +
                '; animation-name: ' +
                n +
                '; }\n'),
              (a +=
                '@-webkit-keyframes ' +
                n +
                ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n'),
              (a +=
                '@keyframes ' +
                n +
                ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }'),
              t(a);
          }
        }
        function j(e) {
          e.className += ' ' + D + '_animation_active';
        }
        function P(e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n);
          else {
            if (!e.attachEvent) return M.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + t, n);
          }
        }
        function r(e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n);
          else {
            if (!e.detachEvent)
              return M.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + t, n);
          }
        }
        function I(e) {
          return S(e).container.childNodes[0].childNodes[0].childNodes[0];
        }
        function H(e) {
          return S(e).container.childNodes[0].childNodes[0].childNodes[1];
        }
        function a(e, t) {
          var n = S(e).listeners;
          if (!n.push) throw new Error('Cannot add listener to an element that is not detectable.');
          S(e).listeners.push(t);
        }
        function i(s, b, e) {
          function w() {
            if (s.debug) {
              var e = Array.prototype.slice.call(arguments);
              if ((e.unshift(N.get(b), 'Scroll: '), M.log.apply)) M.log.apply(null, e);
              else for (var t = 0; t < e.length; t++) M.log(e[t]);
            }
          }
          function t(e) {
            function t(e) {
              return e === e.ownerDocument.body || e.ownerDocument.body.contains(e);
            }
            return !t(e) || null === getComputedStyle(e);
          }
          function l(e) {
            var t = S(e).container.childNodes[0],
              n = getComputedStyle(t);
            return !n.width || -1 === n.width.indexOf('px');
          }
          function n() {
            var e = getComputedStyle(b),
              t = {};
            return (
              (t.position = e.position),
              (t.width = b.offsetWidth),
              (t.height = b.offsetHeight),
              (t.top = e.top),
              (t.right = e.right),
              (t.bottom = e.bottom),
              (t.left = e.left),
              (t.widthCSS = e.width),
              (t.heightCSS = e.height),
              t
            );
          }
          function o() {
            var e = n();
            (S(b).startSize = { width: e.width, height: e.height }),
              w('Element start size', S(b).startSize);
          }
          function r() {
            S(b).listeners = [];
          }
          function a() {
            if ((w('storeStyle invoked.'), S(b))) {
              var e = n();
              S(b).style = e;
            } else w('Aborting because element has been uninstalled');
          }
          function c(e, t, n) {
            (S(e).lastWidth = t), (S(e).lastHeight = n);
          }
          function u(e) {
            return I(e).childNodes[0];
          }
          function i() {
            return 2 * T.width + 1;
          }
          function d() {
            return 2 * T.height + 1;
          }
          function p(e) {
            return e + 10 + i();
          }
          function h(e) {
            return e + 10 + d();
          }
          function f(e) {
            return 2 * e + i();
          }
          function m(e) {
            return 2 * e + d();
          }
          function g(e, t, n) {
            var o = I(e),
              r = H(e),
              a = p(t),
              i = h(n),
              s = f(t),
              l = m(n);
            (o.scrollLeft = a), (o.scrollTop = i), (r.scrollLeft = s), (r.scrollTop = l);
          }
          function E() {
            var e = S(b).container;
            if (!e) {
              (e = document.createElement('div')),
                (e.className = D),
                (e.style.cssText =
                  'visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;'),
                (S(b).container = e),
                j(e),
                b.appendChild(e);
              var t = function() {
                S(b).onRendered && S(b).onRendered();
              };
              P(e, 'animationstart', t), (S(b).onAnimationStart = t);
            }
            return e;
          }
          function v() {
            function e() {
              var e = S(b).style;
              if ('static' === e.position) {
                b.style.position = 'relative';
                var t = function(e, t, n, o) {
                  function r(e) {
                    return e.replace(/[^-\d\.]/g, '');
                  }
                  var a = n[o];
                  'auto' !== a &&
                    '0' !== r(a) &&
                    (e.warn(
                      'An element that is positioned static has style.' +
                        o +
                        '=' +
                        a +
                        ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
                        o +
                        ' will be set to 0. Element: ',
                      t
                    ),
                    (t.style[o] = 0));
                };
                t(M, b, e, 'top'), t(M, b, e, 'right'), t(M, b, e, 'bottom'), t(M, b, e, 'left');
              }
            }
            function t(e, t, n, o) {
              return (
                (e = e ? e + 'px' : '0'),
                (t = t ? t + 'px' : '0'),
                (n = n ? n + 'px' : '0'),
                (o = o ? o + 'px' : '0'),
                'left: ' + e + '; top: ' + t + '; right: ' + o + '; bottom: ' + n + ';'
              );
            }
            if ((w('Injecting elements'), S(b))) {
              e();
              var n = S(b).container;
              n = n || E();
              var o = T.width,
                r = T.height,
                a =
                  'position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;',
                i =
                  'position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; ' +
                  t(-(1 + o), -(1 + r), -r, -o),
                s =
                  'position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;',
                l =
                  'position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;',
                c = 'position: absolute; left: 0; top: 0;',
                u = 'position: absolute; width: 200%; height: 200%;',
                d = document.createElement('div'),
                p = document.createElement('div'),
                h = document.createElement('div'),
                f = document.createElement('div'),
                m = document.createElement('div'),
                g = document.createElement('div');
              (d.dir = 'ltr'),
                (d.style.cssText = a),
                (d.className = D),
                (p.className = D),
                (p.style.cssText = i),
                (h.style.cssText = s),
                (f.style.cssText = c),
                (m.style.cssText = l),
                (g.style.cssText = u),
                h.appendChild(f),
                m.appendChild(g),
                p.appendChild(h),
                p.appendChild(m),
                d.appendChild(p),
                n.appendChild(d),
                P(h, 'scroll', v),
                P(m, 'scroll', y),
                (S(b).onExpandScroll = v),
                (S(b).onShrinkScroll = y);
            } else w('Aborting because element has been uninstalled');
            function v() {
              S(b).onExpand && S(b).onExpand();
            }
            function y() {
              S(b).onShrink && S(b).onShrink();
            }
          }
          function y() {
            function r(e, t, n) {
              var o = u(e),
                r = p(t),
                a = h(n);
              (o.style.width = r + 'px'), (o.style.height = a + 'px');
            }
            function n(e) {
              var n = b.offsetWidth,
                o = b.offsetHeight;
              w('Storing current size', n, o),
                c(b, n, o),
                k.add(0, function() {
                  if (S(b))
                    if (a()) {
                      if (s.debug) {
                        var e = b.offsetWidth,
                          t = b.offsetHeight;
                        (e === n && t === o) ||
                          M.warn(
                            N.get(b),
                            'Scroll: Size changed before updating detector elements.'
                          );
                      }
                      r(b, n, o);
                    } else w('Aborting because element container has not been initialized');
                  else w('Aborting because element has been uninstalled');
                }),
                k.add(1, function() {
                  S(b)
                    ? a()
                      ? g(b, n, o)
                      : w('Aborting because element container has not been initialized')
                    : w('Aborting because element has been uninstalled');
                }),
                e &&
                  k.add(2, function() {
                    S(b)
                      ? a()
                        ? e()
                        : w('Aborting because element container has not been initialized')
                      : w('Aborting because element has been uninstalled');
                  });
            }
            function a() {
              return !!S(b).container;
            }
            function o() {
              function e() {
                return void 0 === S(b).lastNotifiedWidth;
              }
              w('notifyListenersIfNeeded invoked');
              var t = S(b);
              return e() && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height
                ? w(
                    'Not notifying: Size is the same as the start size, and there has been no notification yet.'
                  )
                : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight
                ? w('Not notifying: Size already notified')
                : (w('Current size not notified, notifying...'),
                  (t.lastNotifiedWidth = t.lastWidth),
                  (t.lastNotifiedHeight = t.lastHeight),
                  void A(S(b).listeners, function(e) {
                    e(b);
                  }));
            }
            function e() {
              if ((w('startanimation triggered.'), l(b)))
                w('Ignoring since element is still unrendered...');
              else {
                w('Element rendered.');
                var e = I(b),
                  t = H(b);
                (0 !== e.scrollLeft &&
                  0 !== e.scrollTop &&
                  0 !== t.scrollLeft &&
                  0 !== t.scrollTop) ||
                  (w('Scrollbars out of sync. Updating detector elements...'), n(o));
              }
            }
            function t() {
              if ((w('Scroll detected.'), l(b)))
                w('Scroll event fired while unrendered. Ignoring...');
              else {
                var e = b.offsetWidth,
                  t = b.offsetHeight;
                e !== S(b).lastWidth || t !== S(b).lastHeight
                  ? (w('Element size changed.'), n(o))
                  : w('Element size has not changed (' + e + 'x' + t + ').');
              }
            }
            if ((w('registerListenersAndPositionElements invoked.'), S(b))) {
              (S(b).onRendered = e), (S(b).onExpand = t), (S(b).onShrink = t);
              var i = S(b).style;
              r(b, i.width, i.height);
            } else w('Aborting because element has been uninstalled');
          }
          function C() {
            if ((w('finalizeDomMutation invoked.'), S(b))) {
              var e = S(b).style;
              c(b, e.width, e.height), g(b, e.width, e.height);
            } else w('Aborting because element has been uninstalled');
          }
          function x() {
            e(b);
          }
          function O() {
            w('Installing...'),
              r(),
              o(),
              k.add(0, a),
              k.add(1, v),
              k.add(2, y),
              k.add(3, C),
              k.add(4, x);
          }
          e || ((e = b), (b = s), (s = null)),
            (s = s || {}),
            w('Making detectable...'),
            t(b)
              ? (w('Element is detached'),
                E(),
                w('Waiting until element is attached...'),
                (S(b).onRendered = function() {
                  w('Element is now attached'), O();
                }))
              : O();
        }
        function s(e) {
          var t = S(e);
          t &&
            (t.onExpandScroll && r(I(e), 'scroll', t.onExpandScroll),
            t.onShrinkScroll && r(H(e), 'scroll', t.onShrinkScroll),
            t.onAnimationStart && r(t.container, 'animationstart', t.onAnimationStart),
            t.container && e.removeChild(t.container));
        }
        return o(t, D), { makeDetectable: i, addListener: a, uninstall: s };
      };
    },
  },
]);
