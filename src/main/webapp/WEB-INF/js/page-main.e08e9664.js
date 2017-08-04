(function(z) {
    var vI = function(a) {
        if (a.vr) {
            var b = (0, window.$)(a.vr);
            b.stop().text("草稿已经保存").fadeTo(600, .5).delay(3E3).fadeOut(600,
                function() {
                    b.text("")
                })
        }
    };
    var wI = function(a, b, c) {
        a.oD = b;
        a.hM = c
    };
    var xI = function(a) {
        a.ready(function() {
            var a = this.Ta;
            this.Yd ? z.ys(a, a.value.length) : a.La.lastChild ? z.ev(a.La.lastChild) : a.vg();
            this.em && (this.em.scrollTop = this.em.scrollHeight)
        })
    };
    var yI = function(a) {
        return a.Yd ? a.Ta: a.Ta.m()
    };
    var zI = function(a, b) {
        a.params = b
    };
    var AI = function(a) {
        a.FA = !0;
        a.bG = z.Qn(a.m()).height;
        z.QG += a.bG;
        z.A(z.rv,
            function(a) {
                a && !a.FA && a.lm && a.Oq()
            })
    };
    var BI = function() {
        this.iD = "";
        this.bO = CI
    };
    var DI = function(a, b, c) {
        function d() {
            if (!g && z.jn(this, a)) {
                var f = this;
                g = (0, window.setTimeout)(function() {
                        z.jn(f, a) && (b.call(c), f.ea.pa(f, "update", d))
                    },
                    2E3)
            } else z.jn(this, a) || ((0, window.clearTimeout)(g), g = void 0)
        }
        var f = z.Km,
            g = void 0;
        f.ea.g(f, "update", d)
    };
    var EI = function() {
        this.Wk = "";
        this.RN = FI
    };
    var GI = function(a) {
        return a instanceof BI && a.constructor === BI && a.bO === CI ? a.iD: "type_error:Const"
    };
    var HI = function() {
        this.NK = "";
        this.eO = II
    };
    var JI = function(a) {
        function b(a) {
            if (z.ma(a)) z.A(a, b);
            else {
                if (! (a instanceof z.Dd)) {
                    var g = null;
                    a.hA && (g = a.pm());
                    a = z.Gd(z.Ma(a.sk ? a.yh() : String(a)), g)
                }
                d += z.Fd(a);
                a = a.pm();
                0 == c ? c = a: 0 != a && c != a && (c = null)
            }
        }
        var c = 0,
            d = "";
        z.A(arguments, b);
        return z.Gd(d, c)
    };
    var KI = function(a, b) {
        b.all = !0;
        return z.Gr(a, b)
    };
    var LI = function(a) {
        a = void 0 === a ? {}: a;
        z.At.call(this, a.data, 0);
        this.vO = a.Cl;
        this.rQ = a.qQ;
        this.xp = ""
    };
    var MI = function(a) {
        a = void 0 === a ? {}: a;
        z.At.call(this);
        this.Tf = a.Tf || this.Tf;
        this.Yf = a.Yf || this.Yf
    };
    var NI = function() {
        z.At.call(this, null, null, "搜索话题");
        this.bf = "";
        this.data = [z.Mk[0]]
    };
    var OI = function(a, b) {
        return window.$.post("/question/askpeople", {
            qid: a,
            uid: b,
            op: "remove"
        })
    };
    var PI = function() {
        var a = z.Y;
        return 1 === a || 0 === a ? "匿名用户": ['\x3ca data-hovercard\x3d"p$t$', a[1], '" href\x3d"/people/', a[1], '" title\x3d"' + a[0] + '" class\x3d"', 'zm-item-link-avatar"\x3e', '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + a[2] + '" /\x3e', "\x3c/a\x3e"].join("")
    };
    var QI = function(a, b) {
        return z.ma(a) ? ['\x3ca data-hovercard\x3d"p$t$', a[1], '" href\x3d"/people/', a[1], '"', b ? ' class\x3d"' + b + '"': "", ' title\x3d"', a[0], '"\x3e', a[0], "\x3c/a\x3e"].join("") : "匿名用户"
    };
    var RI = function(a) {
        if (0 === a || 1 === a) return "匿名用户";
        var b = z.M("a", {
                href: "/people/" + a[1],
                title: a[0]
            },
            a[0]);
        b.setAttribute("data-hovercard", "p$t$" + a[1]);
        return b
    };
    var SI = function(a) {
        if (0 === a || 1 === a) return z.M("span");
        if (z.ma(a)) {
            var b = z.M("a", {
                    href: "/people/" + a[1],
                    title: a[0],
                    "class": "zm-item-link-avatar"
                },
                z.M("img", {
                    src: a[2],
                    "class": "zm-list-avatar"
                }));
            b.setAttribute("data-hovercard", "p$t$" + a[1]);
            return b
        }
    };
    var TI = function(a) {
        return 1 === a ? !0 : z.ma(a) ? a[3] === z.Y[3] : !1
    };
    var UI = function(a) {
        if (!VI.test("input")) throw Error("Invalid tag name \x3cinput\x3e.");
        if ("INPUT" in WI) throw Error("Tag name \x3cinput\x3e is not allowed for SafeHtml.");
        var b = null,
            c = "\x3cinput";
        if (a) for (var d in a) {
            if (!VI.test(d)) throw Error('Invalid attribute name "' + d + '".');
            var f = a[d];
            if (null != f) {
                var g;
                g = d;
                if (f instanceof BI) f = GI(f);
                else if ("style" == g.toLowerCase()) {
                    if (!z.sa(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                    if (! (f instanceof z.Bd)) {
                        var h = "",
                            k = void 0;
                        for (k in f) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(k)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                            var l = f[k];
                            if (null != l) {
                                if (l instanceof BI) l = GI(l);
                                else if (XI.test(l)) {
                                    for (var n = !0,
                                             q = !0,
                                             v = 0; v < l.length; v++) {
                                        var F = l.charAt(v);
                                        "'" == F && q ? n = !n: '"' == F && n && (q = !q)
                                    }
                                    n && q || (l = "zClosurez")
                                } else l = "zClosurez";
                                h += k + ":" + l + ";"
                            }
                        }
                        f = h ? (new z.Bd).Fp(h) : z.Rl
                    }
                    f = f instanceof z.Bd && f.constructor === z.Bd && f.QN === z.Cd ? f.fC: "type_error:SafeStyle"
                } else {
                    if (/^on/i.test(g)) throw Error('Attribute "' + g + '" requires goog.string.Const value, "' + f + '" given.');
                    if (g.toLowerCase() in YI) if (f instanceof HI) f = f instanceof HI && f.constructor === HI && f.eO === II ? f.NK: "type_error:TrustedResourceUrl";
                    else if (f instanceof EI) f = f instanceof EI && f.constructor === EI && f.RN === FI ? f.Wk: "type_error:SafeUrl";
                    else if (z.oa(f)) f instanceof EI || (f = f.sk ? f.yh() : String(f), ZI.test(f) || (f = "about:invalid#zClosurez"), h = new EI, h.Wk = f, f = h),
                        f = f.yh();
                    else throw Error('Attribute "' + g + '" on tag "input" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                }
                f.sk && (f = f.yh());
                g = g + '\x3d"' + z.Ma(String(f)) + '"';
                c += " " + g
            }
        }
        d = void 0;
        null != d ? z.ma(d) || (d = [d]) : d = []; ! 0 === $I.input ? c += "\x3e": (b = JI(d), c += "\x3e" + z.Fd(b) + "\x3c/input\x3e", b = b.pm()); (a = a && a.dir) && (b = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
        return z.Gd(c, b)
    };
    var aJ = function(a, b) {
        var c = z.qb(a, b, void 0);
        return 0 <= c ? (Array.prototype.splice.call(a, c, 1), !0) : !1
    };
    var bJ = function(a) {
        20 < a.length && (a = a.substring(0, 17) + "...");
        return a
    };
    var cJ = function() {
        z.Q.call(this);
        this.Rf = "zm-pm-item"
    };
    var dJ = function(a) {
        if (a.mb().length) {
            var b = new z.El;
            b.use("locationSource", {
                param: function(a) {
                    return {
                        start: a[a.length - 1].getAttribute("data-token")
                    }
                }
            });
            b.w(a.Gu);
            z.Al(b,
                function(a) {
                    return z.V.Va(a, {
                            module: "MessageItem"
                        },
                        function() {
                            return {
                                card: {
                                    card_type: "Content",
                                    content: {
                                        type: "Message",
                                        token: String((0, window.$)(a).data("token"))
                                    }
                                }
                            }
                        })
                })
        }
    };
    var eJ = function(a, b) {
        z.T.confirm("删除私信", "你确定要删除这封私信吗？",
            function(a) {
                a && fJ(this, b)
            },
            a)
    };
    var fJ = function(a, b) {
        var c = new z.dp(!0);
        a.o().ta(c, "success",
            function() {
                var a = z.Dn(c);
                a.r ? z.T.message(a.msg) : window.location.reload()
            });
        c.ajax("/inbox/delete", "type\x3dsingle\x26token\x3d" + b)
    };
    var gJ = function() {
        z.Q.call(this);
        this.Rf = "zm-pm-item"
    };
    var hJ = function(a) {
        var b = new z.dp(!0);
        b.on("success",
            function() {
                var a = z.Dn(b);
                a.r ? z.T.message(a.msg) : window.location.reload()
            });
        b.ajax("/inbox/delete", "type\x3dthread\x26token\x3d" + a)
    };
    var iJ = function(a, b, c, d, f) {
        z.vE.call(this, a, b, f);
        this.ez = c || "people";
        this.$Q = d || ["zg-follow", "zg-unfollow"]
    };
    var jJ = function(a, b, c, d) {
        z.H.call(this);
        this.h = a;
        this.ez = b || "people";
        this.ZQ = c || ["zg-btn-follow", "zg-btn-unfollow"];
        this.text = d || ["关注", "取消关注"]
    };
    var kJ = function(a) {
        z.H.call(this);
        this.url = a || "/topic"
    };
    var lJ = function(a, b, c) {
        var d = c[0],
            f = "";
        "topic" !== d[0] && d[3] && (f = 'data-parent\x3d"' + d[3] + '"');
        b.html('\x3ca href\x3d"' + ("topic" === d[0] ? "/topic/" + d[2] + "/organize/entire": "javascript:;") + '" data-token\x3d"' + d[2] + '" ' + f + ' name\x3d"' + d[0] + '"\x3e' + d[1] + "\x3c/a\x3e\x3cul class\x3d'zm-topic-organize-list'\x3e\x3c/ul\x3e");
        "topic" !== c[0][0] && b.addClass("zm-topic-organize-loadmore");
        b = (0, window.$)("ul", (0, window.$)(b));
        if (1 < c.length) for (c = c[1], d = 0; d < c.length; d++) {
            var f = c[d],
                g = (0, window.$)("\x3cli\x3e").addClass("zm-topic-organize-item");
            b.append(g);
            lJ(a, g, f)
        }
    };
    var mJ = function(a, b, c) {
        z.Sv.call(this, a, b, c)
    };
    var nJ = function(a) {
        var b = a.Ce;
        return "question" === a.Nk ? "/question/" + b: "//zhuanlan.zhihu.com/p/" + b
    };
    var oJ = function(a, b) {
        z.Q.call(this);
        a ? (this.ia = {
            title: a.title,
            id: a.id,
            indexItem: a.vT,
            subTopic: a.RY
        },
            this.N = {
                isEdit: !1
            }) : (this.ia = {
            title: "",
            id: void 0,
            indexItem: [],
            subTopic: []
        },
            this.N = {
                isEdit: !0
            });
        pJ(this, b)
    };
    var pJ = function(a, b) {
        function c() {
            a.Oh = !1
        }
        function d(a) {
            if ("string" === typeof a) try {
                return JSON.parse(a)
            } catch(b) {
                return {}
            } else return a
        }
        a.service = {
            qO: function(f) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "post",
                    url: "/topic_index_modules",
                    data: {
                        topicId: b,
                        title: f.title
                    }
                }).then(function(a, b, f) {
                        c();
                        b = d(a);
                        return 201 === f.status ? b.topicIndexModuleId: window.$.Deferred().reject(d(a).msg || a)
                    },
                    c)
            },
            FZ: function(f, g) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "patch",
                    url: "/topic_index_modules/" + f,
                    data: {
                        title: g,
                        topicId: b
                    }
                }).then(function(a, b, f) {
                        c();
                        if (204 !== f.status) return window.$.Deferred().reject(d(a).msg || a)
                    },
                    c)
            },
            nQ: function(f) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "delete",
                    url: "/topic_index_items/" + f,
                    data: {
                        topicId: b,
                        topicIndexModuleId: a.ia.id
                    }
                }).then(function(a, b, f) {
                        c();
                        if (204 !== f.status) return window.$.Deferred().reject(d(a).msg || a)
                    },
                    c)
            },
            HE: function(f) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "post",
                    data: {
                        objectType: f.Nk,
                        topicIndexModuleId: a.ia.id,
                        objectId: f.Ce,
                        topicId: b
                    },
                    url: "/topic_index_items"
                }).then(function(a, b, f) {
                        c();
                        b = d(a);
                        return 201 === f.status ? b: window.$.Deferred().reject(b.msg || a)
                    },
                    c)
            },
            tO: function(f) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "post",
                    data: {
                        topicIndexModuleId: f.xr,
                        subTopicId: f.qZ,
                        topicId: b
                    },
                    url: "/topic_index_subtopics"
                }).then(function(a, b, f) {
                        c();
                        b = d(a);
                        return 201 === f.status ? b.topicIndexSubtopicId: window.$.Deferred().reject(b.msg || a)
                    },
                    c)
            },
            pQ: function(f) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "delete",
                    url: "/topic_index_subtopics/" + f,
                    data: {
                        topicId: b,
                        topicIndexModuleId: a.ia.id
                    }
                }).then(function(a, b, f) {
                        c();
                        if (204 !== f.status) return window.$.Deferred().reject(d(a).msg || a)
                    },
                    c)
            },
            oQ: function(f) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "delete",
                    url: "/topic_index_modules/" + f,
                    data: {
                        topicId: b
                    }
                }).then(function(a, b, f) {
                        c();
                        if (204 !== f.status) return window.$.Deferred().reject(d(a).msg || a)
                    },
                    c)
            },
            EZ: function(f, g) {
                a.Oh = !0;
                return window.$.ajax({
                    method: "PATCH",
                    url: "/topic_index_items/" + f,
                    data: {
                        previousItemId: g.LK,
                        nextItemId: g.QJ,
                        topicIndexModuleId: g.xr,
                        topicId: b
                    }
                }).then(function(a, b, f) {
                        c();
                        if (204 !== f.status) return window.$.Deferred().reject(d(a).msg || a)
                    },
                    c)
            }
        }
    };
    var qJ = function(a, b, c) {
        for (var d = Object.keys(b), f = {
                key: void 0,
                Le: void 0
            },
                 d = z.ha(d), g = d.next(); ! g.done; f = {
            key: f.key,
            Le: f.Le
        },
                 g = d.next()) switch (f.key = g.value, f.key) {
            case "title":
                a.ia.title = a.tD.value = a.bd.textContent = b.title;
                a.dispatchEvent({
                    type: rJ,
                    data: {
                        id: a.ia.id,
                        title: a.ia.title
                    }
                });
                break;
            case "id":
                a.ia.id = b.id;
                a.QO.name = b.id;
                break;
            case "indexItem":
                f.Le = a;
                c || (a.SK.value = "");
                g = [b];
                c && g.push(c);
                g.forEach(function(a) {
                    return function(b) {
                        for (var d = b[a.key][0], f = b[a.key][1], g = 0; g < f; g++) z.N(a.Le.iC.children[d + g]),
                        c || z.N(a.Le.No.children[d + g]);
                        a.Le.ia[a.key].splice.apply(a.Le.ia[a.key], [].concat(z.ia(b[a.key])));
                        if (2 < b[a.key].length) {
                            for (d = 2; d < b[a.key].length; d++) f = (0, window.$)(a.Le.iC.children[b[a.key][0]]),
                                g = b[a.key][d],
                                g = '\x3cli class\x3d"TopicIndex-questionItem"\x3e\n      \x3ca class\x3d"question_link" target\x3d"_blank" href\x3d"' + nJ(g) + '"\x3e' + g.text + "\x3c/a\x3e\n    \x3c/li\x3e",
                                f[0] ? (0, window.$)(g).insertBefore(f) : (0, window.$)(a.Le.iC).append(g),
                            c || (0, window.$)(a.Le.No).append(sJ(b[a.key][d]));
                            c || tJ(a.Le, a.Le.No)
                        }
                    }
                } (f));
                break;
            case "subTopic":
                for (var g = b[f.key][0], h = b[f.key][1], k = 0; k < h; k++) z.N(a.$v.children[g + k]);
                if (2 < b[f.key].length) for (g = 2; g < b[f.key].length; g++)(0, window.$)(a.$v).append(uJ(b[f.key][g]));
                a.ia[f.key].splice.apply(a.ia[f.key], [].concat(z.ia(b[f.key])))
        }
    };
    var vJ = function(a, b) {
        for (var c = Object.keys(b), c = z.ha(c), d = c.next(); ! d.done; d = c.next()) switch (d.value) {
            case "isEdit":
                if (a.N.isEdit = b.isEdit, !1 === b.isEdit) {
                    if (!a.ia.id) {
                        a.dispatchEvent(wJ);
                        return
                    }
                    d = a.wa.removeClass("is-edit").children(".is-hide");
                    0 === a.ia.subTopic.length && (d = d.not(".TopicIndex-subTopicsWrap"));
                    d.removeClass("is-hide");
                    a.wa.find(".TopicIndex-editWrap").addClass("is-hide")
                } else a.DI = !0,
                    a.wa.addClass("is-edit").children().not(".zg-anchor-hidden").addClass("is-hide"),
                    (0, window.$)(a.HQ).removeClass("is-hide")
        }
    };
    var xJ = function(a, b) {
        switch (b.type) {
            case "title":
                a.lM.textContent = b.Ua;
                break;
            case "question":
                a.TK.textContent = b.Ua;
                break;
            case "topic":
                a.pM.textContent = b.Ua
        }
    };
    var yJ = function(a, b, c) {
        var d = new LI({
            data: c,
            Cl: function(b) {
                var c = a.ia.subTopic;
                return a.ia.id ? a.service.tO({
                    xr: a.ia.id,
                    qZ: b[3]
                }).then(function(d) {
                    xJ(a, {
                        type: "topic",
                        Ua: ""
                    });
                    qJ(a, {
                        subTopic: [c.length, 0, {
                            text: b[0],
                            Ce: b[3],
                            id: d,
                            token: b[1]
                        }]
                    });
                    return b
                }).fail(function(b) {
                    xJ(a, {
                        type: "topic",
                        Ua: b || "添加失败"
                    })
                }) : (d.Pb = !1, xJ(a, {
                    type: "title",
                    Ua: "请输入标题"
                }))
            },
            qQ: function(b) {
                var c = a.ia.subTopic.findIndex(function(a) {
                    return (0, window.parseInt)(a.Ce) === (0, window.parseInt)(b)
                });
                return a.service.pQ(a.ia.subTopic[c].id).then(function() {
                    xJ(a, {
                        type: "topic",
                        Ua: ""
                    });
                    qJ(a, {
                        subTopic: [c, 1]
                    });
                    return b
                }).fail(function(b) {
                    return xJ(a, {
                        type: "topic",
                        Ua: b || "删除失败"
                    })
                })
            }
        });
        d.fq = 3;
        d.w(b.find(".zm-tag-editor")[0])
    };
    var zJ = function(a, b) {
        var c = (0, z.Rr)(AJ);
        new z.Xs(b, {
            source: "/question/autocomplete",
            dj: b.offsetParent,
            select: function(b) {
                xJ(a, {
                    type: "question",
                    Ua: ""
                });
                if (!a.ia.id) return xJ(a, {
                    type: "question",
                    Ua: "请输入标题后才能添加问题"
                });
                if (30 <= a.ia.indexItem.length) return xJ(a, {
                    type: "question",
                    Ua: "问题数不能超过 30 个"
                }),
                    "";
                a.service.HE({
                    xr: a.ia.id,
                    Ce: b.url_token,
                    Nk: "question"
                }).then(function(c) {
                    qJ(a, {
                        indexItem: [a.ia.indexItem.length, 0, {
                            Nk: "question",
                            Ce: b.url_token,
                            id: c.topicIndexItemId,
                            text: b.title
                        }]
                    });
                    xJ(a, {
                        type: "question",
                        Ua: ""
                    })
                }).fail(function(b) {
                    return xJ(a, {
                        type: "question",
                        Ua: b || "添加失败"
                    })
                })
            },
            qd: function(a, b, g) {
                g.innerHTML = c(a.data)
            }
        });
        b.addEventListener("input",
            function(c) { (c = c.target.value.trim()) || xJ(a, {
                type: "question",
                Ua: ""
            });
                if (c.startsWith("http")) {
                    for (var f = {
                            article: /http[s]?:\/\/zhuanlan.zhihu.[a-z]{3}\/p\/(\d+)/,
                            question: /http[s]?:\/\/www.zhihu.com\/question\/(\d+)/
                        },
                             g = void 0, h = Object.keys(f), h = z.ha(h), k = h.next(); ! k.done; k = h.next()) {
                        var k = k.value,
                            l = f.article.exec(c);
                        if (l && l[1]) {
                            g = {
                                Nk: k,
                                Ce: l[1],
                                xr: a.ia.id
                            };
                            break
                        }
                    }
                    g && a.service.HE(g).then(function(c) {
                        xJ(a, {
                            type: "question",
                            Ua: ""
                        });
                        g.title = c.topicIndexItemTitle;
                        qJ(a, {
                            indexItem: [a.ia.indexItem.length, 0, {
                                Ce: g.Ce,
                                id: c.topicIndexItemId,
                                text: g.title,
                                Nk: g.Nk
                            }]
                        });
                        b.value = ""
                    }).fail(function(b) {
                        return xJ(a, {
                            type: "question",
                            Ua: b || "添加失败"
                        })
                    })
                }
            })
    };
    var tJ = function(a, b) {
        if (!z.Z.fb) {
            a.Fc && a.Fc.dispose();
            var c = new z.Zs;
            a.Fc = c;
            c.JC("question-cursor-move");
            z.at(c, "question-cursor-move opacity-40");
            z.$s(c, b, 0);
            c.init();
            a.Fc = c;
            a.Fc.H = (0, window.$)(b);
            a.o().g(a.Fc, "dragend",
                function(c) {
                    xJ(a, {
                        type: "topic",
                        Ua: ""
                    });
                    c = c.YF;
                    var f = c.dataset.id,
                        g = a.ia.indexItem.findIndex(function(a) {
                            return Number(a.id) === Number(f)
                        }),
                        h = {
                            xr: a.ia.id,
                            LK: c.previousElementSibling ? c.previousElementSibling.dataset.id: 0,
                            QJ: c.nextElementSibling ? c.nextElementSibling.dataset.id: 0
                        },
                        k = [].indexOf.call(b.children, c);
                    a.Pb === c || k === g || 0 === h.LK && 0 === h.QJ || (a.service.EZ(f, h).then(function() {
                        a.Pb = null;
                        qJ(a, {
                                indexItem: [g, 1]
                            },
                            {
                                indexItem: [k, 0, a.ia.indexItem[g]]
                            });
                        a.dispatchEvent("sort");
                        xJ(a, {
                            type: "question",
                            Ua: ""
                        })
                    }).fail(function(b) {
                        a.Pb = null;
                        xJ(a, {
                            type: "question",
                            Ua: b || "调整失败"
                        })
                    }), a.Pb = c)
                }); (0, window.$)(b).find("a, i").on("mousedown",
                function(a) {
                    return a.stopPropagation()
                })
        }
    };
    var BJ = function(a) {
        return "\n    \x3cdiv class\x3d\"TopicIndex-editWrap\"\x3e\n      \x3cdiv class\x3d'TopicIndex-edit'\x3e\n        \x3cdiv class\x3d'TopicIndex-editTitle'\x3e标题\x3cspan class\x3d\"TopicIndex-errTips\"\x3e\x3c/span\x3e\x3c/div\x3e\n        \x3cdiv class\x3d'TopicIndex-editContent'\x3e\n          \x3cinput type\x3d'text' class\x3d'TopicIndex-editSectionTitle zg-form-text-input js-change' placeholder\x3d'输入标题' value\x3d\"" + (a && a.title ? a.title: "") + "\" role\x3d'combobox'\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d'TopicIndex-edit'\x3e\n        \x3cdiv class\x3d'TopicIndex-editTitle'\x3e相关问题或文章\x3cspan class\x3d\"TopicIndex-errTips\"\x3e\x3c/span\x3e\x3c/div\x3e\n        \x3cdiv class\x3d'TopicIndex-display'\x3e\n          \x3cdiv class\x3d'TopicIndex-questionList'\x3e" + (a && a.indexItem ? a.indexItem && a.indexItem.map(function(a) {
                    return '\x3cdiv class\x3d"TopicIndex-questionItem item" data-id\x3d' + a.id + '\x3e\n                \x3cspan class\x3d"zg-icon-drag-wrap"\x3e\x3ci class\x3d"zg-icon-drag"\x3e\x3c/i\x3e\x3c/span\x3e\n                \x3ca class\x3d"question_link" target\x3d"_blank" href\x3d"' + nJ(a) + '"\x3e' + a.text + '\x3c/a\x3e\n                \x3ca class\x3d"TopicIndex-binButton zu-bin-button js-delete" name\x3d"delete"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e删除\x3c/a\x3e\n            \x3c/div\x3e'
                }).join("") || "" || "": "") + "\n          \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d'TopicIndex-editContent'\x3e\n          \x3cinput type\x3d'text' class\x3d'zg-form-text-input TopicIndex-editQuesInput' placeholder\x3d'搜索问题或粘贴问题、文章链接' role\x3d'combobox' autoComplete\x3d'off' /\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d'TopicIndex-edit'\x3e\n        \x3cdiv class\x3d'TopicIndex-editTitle'\x3e\n          \x3cspan class\x3d\"TopicIndex-editTitleText\"\x3e相关话题\x3cspan class\x3d\"TopicIndex-errTips\"\x3e\x3c/span\x3e\x3c/span\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d\"zm-tag-editor zg-section\"\x3e\n          \x3cdiv class\x3d\"zm-tag-editor-labels zg-clear\"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d'zm-command clearfix'\x3e\n        \x3cspan class\x3d'zg-left'\x3e\x3ca class\x3d'js-finish submit-button zg-btn-blue' name\x3d'exit'\x3e完成\x3c/a\x3e\x3c/span\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e"
    };
    var CJ = function(a) {
        return '\x3ca class\x3d"zg-anchor-hidden" name\x3d"' + a.id + '"\x3e\x3c/a\x3e\n    \x3ch3 class\x3d"TopicIndex-sectionTitle"\x3e' + a.title + '\x3c/h3\x3e\n    \x3cul class\x3d"TopicIndex-questionList"\x3e' + (a.indexItem && a.indexItem.map(function(a) {
                return '\x3cli class\x3d"TopicIndex-questionItem"\x3e\n        \x3ca class\x3d"question_link" target\x3d"_blank" href\x3d"' + nJ(a) + '"\x3e' + a.text + "\x3c/a\x3e\n      \x3c/li\x3e"
            }).join("") || "") + '\n    \x3c/ul\x3e\n    \x3cdiv class\x3d"TopicIndex-subTopicsWrap"\x3e\n      \x3cspan class\x3d"TopicIndex-subLabel"\x3e相关话题：\x3c/span\x3e\n      \x3cdiv class\x3d"TopicIndex-subTopics clearfix"\x3e' + (a.subTopic && a.subTopic.map(function(a) {
                return '\x3cspan data-id\x3d"' + a.id + '"\x3e\x3ca class\x3d"zm-item-tag" href\x3d"/topic/' + a.token + '" data-tip\x3d"t$b$' + a.token + '" data-token\x3d"' + a.token + '" data-topicid\x3d"' + a.Ce + '"\x3e' + a.text + "\x3c/a\x3e\x3c/span\x3e"
            }).join("") || "") + '\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3ca class\x3d"TopicIndex-editButton zu-edit-button js-edit" name\x3d"edit"\x3e\n      \x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e'
    };
    var sJ = function(a) {
        return '\n    \x3cdiv class\x3d"TopicIndex-questionItem item" data-id\x3d"' + a.id + '"\x3e\n      \x3cspan class\x3d"zg-icon-drag-wrap"\x3e\x3ci class\x3d"zg-icon-drag"\x3e\x3c/i\x3e\x3c/span\x3e\n      \x3ca class\x3d"question_link" target\x3d"_blank" href\x3d"' + nJ(a) + '"\x3e' + a.text + '\x3c/a\x3e\n      \x3ca class\x3d"TopicIndex-binButton zu-bin-button js-delete" name\x3d"delete"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e删除\x3c/a\x3e\n    \x3c/div\x3e'
    };
    var uJ = function(a) {
        return '\x3cspan data-id\x3d"' + a.id + '"\x3e\x3ca class\x3d"zm-item-tag" href\x3d"/topic/' + a.token + '" data-tip\x3d"t$b$' + a.token + '" data-token\x3d"' + a.token + '" data-topicid\x3d"' + a.Ce + '"\x3e' + a.text + "\x3c/a\x3e\x3c/span\x3e"
    };
    var DJ = function(a) {
        z.Q.call(this);
        this.Nm = z.mm;
        this.XT = !1;
        this.token = z.Mk[0][1];
        this.list = a
    };
    var EJ = function(a) {
        a.XT = !0;
        a.H.toggleClass("is-edit", !0);
        a.ql.text("")
    };
    var FJ = function(a, b) {
        a.ql.text("string" === typeof b ? b: "未知错误")
    };
    var GJ = function(a, b) {
        if (b instanceof Array) a.bh.append(b.map(function(a) {
            return HJ(a)
        }).join("")),
            a.list = b;
        else {
            var c = b.wN,
                d = b.vN;
            c && (a.bh.append(HJ(c)), a.list.push(c));
            "number" === typeof d && (a.bh.children().eq(d).remove(), a.list.splice(d, 1))
        } (0, window.$)(".TopicBook-item").each(function(a, b) {
            z.V.Va(b, {
                    module: "EBookItem",
                    index: ""
                },
                function() {
                    return {
                        card: {
                            content: {
                                type: "EBook",
                                id: b.getAttribute("data-book-id")
                            }
                        }
                    }
                })
        })
    };
    var HJ = function(a) {
        var b = a.title,
            c = a.$E,
            d = a.lI,
            f = a.RA,
            g = a.link;
        return "\n    \x3c" + (g ? 'a href\x3d"' + g + '" target\x3d"_blank"': "div") + ' class\x3d"TopicBook-item" data-book-id\x3d"' + a.id + '"\x3e\n      \x3cdiv class\x3d"TopicBook-itemImgWrapper"\x3e\n        \x3cimg class\x3d"TopicBook-itemImg" src\x3d"' + (d && d.replace(/.(jpg|png|jpeg)/,
                function(a, b) {
                    return "_200x0." + b
                })) + '"\x3e\n        ' + (f ? '\x3cdiv class\x3d"TopicBook-previewTips js-preview"\x3e试读\x3c/div\x3e': "") + '\n      \x3c/div\x3e\n      \x3cp class\x3d"TopicBook-itemTitle"\x3e' + b + '\x3c/p\x3e\n      \x3cp class\x3d"TopicBook-itemAuthors"\x3e' + (c && c.slice(0, 2).join("、") + (2 < c.length ? "等": "")) + '\x3c/p\x3e\n        \x3cdiv class\x3d"TopicBook-itemActions"\x3e\n        \x3c/div\x3e\n      \x3cbutton class\x3d"TopicBook-delButton js-delete"\x3e\x3c/button\x3e\n    \x3c/' + (g ? "a": "div") + "\x3e\n    "
    };
    var IJ = function(a) {
        return window.$.ajax({
            method: "get",
            url: "/topic_index/book/info?link\x3d" + (0, window.encodeURIComponent)(a)
        }).then(function(b) {
            return b.errcode ? window.$.Deferred().reject(b.msg) : {
                id: b.id,
                title: b.title,
                $E: b.authors,
                lI: b.image_url,
                RA: b.kindle_url,
                link: b.link || a
            }
        })
    };
    var JJ = function(a) {
        return window.$.ajax({
            method: "get",
            url: "/topic_index/" + a + "/books"
        }).then(function(a) {
            return a.errcode ? window.$.Deferred().reject(a.msg) : a.map(function(a) {
                return {
                    id: a.id,
                    title: a.title,
                    $E: a.authors,
                    lI: a.image_url,
                    RA: a.kindle_url,
                    link: a.link
                }
            })
        })
    };
    var KJ = function(a, b) {
        return window.$.ajax({
            method: "post",
            url: "/topic_index/" + a + "/book",
            data: {
                book_id: b
            }
        }).then(function(a) {
            if (a && a.errcode) return window.$.Deferred().reject(a.msg)
        })
    };
    var LJ = function(a) {
        return a.children("a").attr("href").substr(1)
    };
    var MJ = function(a) {
        return {
            id: a.data("id"),
            title: a.find(".TopicIndex-sectionTitle").text(),
            vT: [].concat(z.ia(a[0].querySelectorAll(".TopicIndex-questionItem"))).map(function(a) {
                a = (0, window.$)(a);
                var c = a.children(),
                    d = c.attr("href"),
                    f = d && d.match(/\/question\/(\d)+/);
                return {
                    id: a.data("id"),
                    Ce: f ? f[1] : d && d.match(/\d+/g)[0],
                    Nk: f ? "question": "article",
                    text: c.text()
                }
            }),
            RY: [].concat(z.ia(a[0].querySelectorAll(".TopicIndex-subTopics span"))).map(function(a) {
                a = (0, window.$)(a);
                var c = a.children();
                return {
                    id: a.data("id"),
                    Ce: c.data("topicid"),
                    token: c.data("token"),
                    text: c.text()
                }
            })
        }
    };
    var NJ = function(a, b) {
        z.Q.call(this);
        this.ia = {
            id: a,
            Nm: b
        };
        this.Tg = []
    };
    var OJ = function(a) {
        var b = a.ia,
            c = b.Nm;
        JJ(b.id).then(function(b) {
            if (b && b.length || c) b = new DJ(b),
                b.render(a.Ww[0]),
                a.ig.append('\n          \x3cdiv class\x3d"TopicIndex-tocItem"\x3e\x3ca class\x3d"TopicIndex-tocLink" href\x3d"#TopicBook"\x3e书籍推荐\x3c/a\x3e\x3c/div'),
                a.yl = a.ig.find("a"),
                a.As.push((0, window.$)(b.m()).offset().top),
                a.ig.toggleClass("is-hide", 2 >= a.yl.length)
        })
    };
    var PJ = function(a) {
        if (!z.Z.fb && a.ia.Nm) {
            a.Fc && a.Fc.dispose();
            var b = new z.Zs;
            a.Fc = b;
            b.JC("toc-cursor-move");
            z.at(b, "toc-cursor-move opacity-40");
            z.$s(b, a.xl[0], 0);
            b.init();
            a.Fc = b;
            a.o().g(a.Fc, "dragend",
                function(b) {
                    b = b.YF;
                    var d = LJ((0, window.$)(b)),
                        f = [].findIndex.call(a.pf,
                            function(a) {
                                return Number(a.dataset.id) === Number(d)
                            }),
                        g = {
                            target_module_id: d,
                            pre_module_id: b.previousElementSibling ? LJ((0, window.$)(b.previousElementSibling)) : 0,
                            post_module_id: b.nextElementSibling ? LJ((0, window.$)(b.nextElementSibling)) : 0
                        },
                        h = a.xl.children().index((0, window.$)(b));
                    a.Pb === b || h === f || 0 === g.pre_module_id && 0 === g.post_module_id || (window.$.ajax({
                        method: "post",
                        url: "/topic_index/" + a.ia.id + "/module_rearranged",
                        data: g
                    }).done(function() {
                        a.Pb = null;
                        h < f ? a.pf.eq(h).before(a.pf.eq(f)) : a.pf.eq(h).after(a.pf.eq(f));
                        var b = a.Tg.splice(f, 1)[0];
                        h > a.Tg.length - 1 ? a.Tg[h] = b: a.Tg.splice(h, 0, b);
                        a.pf = a.H.find(".TopicIndex-section")
                    }).fail(function() {
                        a.Pb = null;
                        z.T.alert("模块移动失败")
                    }), a.Pb = b)
                });
            a.xl.find("a").on("mousedown",
                function(a) {
                    a.target === a.currentTarget && a.stopPropagation()
                })
        }
    };
    var QJ = function(a, b) {
        a.o().g(b, wJ,
            function() {
                a.Tg.splice(a.Tg.indexOf(b), 1);
                b.dispose()
            })
    };
    var RJ = function(a, b) {
        a.o().g(b, rJ,
            function(b) {
                SJ(a, b.data)
            })
    };
    var SJ = function(a, b) {
        for (var c = !0,
                 d = a.xl.children(), f = 0; f < d.length; f++) {
            var g = d.eq(f),
                h = g.children("a"),
                k = h.attr("href").substr(1);
            Number(b.id) === Number(k) && (b.title ? h.text(b.title).prepend(TJ) : g.remove(), c = !1)
        }
        c && a.xl.append('\x3cli class\x3d"TopicIndex-tocItem"\x3e\n    \x3ca class\x3d"TopicIndex-tocLink TopicIndex-tocLink--edit" href\x3d"#' + b.id + '"\x3e\n      \x3cspan class\x3d"TopicIndex-dragIcon js-drag"\x3e\n        \x3cspan class\x3d"zg-icon-drag-wrap"\x3e\x3ci class\x3d"zg-icon-drag"\x3e\x3c/i\x3e\x3c/span\x3e\n      \x3c/span\x3e\n      ' + b.title + "\n    \x3c/a\x3e\n  \x3c/li\x3e");
        a.yl = a.ig.find("a");
        a.As = Array.from((0, window.$)(".TopicIndex-section, .TopicBook"),
            function(a) {
                return (0, window.$)(a).offset().top
            });
        a.ig.toggleClass("is-hide", 2 >= a.yl.length);
        PJ(a);
        a.pf = a.H.find(".TopicIndex-section")
    };
    var UJ = function(a, b) {
        var c = z.To(function(a) {
                b.toggleClass("TopicIndex-toc--sticky", a)
            },
            function() {
                return 150 < z.Re(window.document).y
            });
        c();
        a.o().g(window, "scroll", c)
    };
    var VJ = function(a, b) {
        function c() {
            var b = z.Re(window.document).y,
                c = 0;
            a.As.some(function(a, d) {
                b > a && (c = d + 1)
            });
            return Math.min(c, a.As.length - 1)
        }
        var d = window.location.hash,
            f = b.find("a"),
            g = 0;
        Array.from(f).some(function(a, b) {
            if ((0, window.$)(a).attr("href") === d) return g = b,
                !0
        });
        f.eq(g).addClass("TopicIndex-tocLink--active");
        a.As = Array.from(a.pf,
            function(a) {
                return (0, window.$)(a).offset().top
            });
        a.o().g(window, "scroll",
            function() {
                var b = c();
                b !== g && (a.yl.eq(g).removeClass("TopicIndex-tocLink--active"), g = b, a.yl.eq(g).addClass("TopicIndex-tocLink--active"))
            })
    };
    var WJ = function() {
        z.Q.call(this)
    };
    var XJ = function() {
        z.Q.call(this);
        var a = z.Mk;
        this.dg = a[0][3];
        this.ii = a[0];
        this.Cx = a[4];
        this.HA = a[5];
        this.Sh = "topic"
    };
    var YJ = function() { (0, window.$)(".zm-topic-list-container").on("click", ".js-questionUnhelpful",
        function(a) {
            a = (0, window.$)(a.currentTarget);
            var b = a.data("qid"),
                c = a.data("isRevert");
            if (b) return c ? (a.text("没有帮助").data("isRevert", !1), window.$.post("/question/revert-unhelpful", {
                qid: b
            })) : (a.text("撤销没有帮助").data("isRevert", !0), window.$.post("/question/unhelpful", {
                qid: b
            })),
                !1
        })
    };
    var ZJ = function() {
        var a = z.J("zh-topic-log-list");
        if (a && ((new iJ(a, null, null, "js-topic-log-more", !0)).init(), (0, window.$)(a).on("click", 'a[name\x3d"revert"]', z.To(function(a) { ! 1 !== a && z.rE(this)
                },
                z.BE({
                    wr: !0
                }))), a = (0, window.$)(".topic-info .zm-topic-log-nav"), a[0])) {
            var b = (0, window.$)(".zu-top-feed-list-wrap"),
                c = new WJ;
            z.zn(c, b[0]);
            var d = (0, window.$)(c.m()).hide();
            "#index-log" === window.location.hash && (b.hide().children(".zu-button-more").hide(), d.show().children(".zu-button-more").show());
            a.children().eq("#index-log" === window.location.hash ? 1 : 0).addClass("is-active").siblings().removeClass("is-active");
            a.on("click", "li",
                function(a) {
                    a = (0, window.$)(a.currentTarget);
                    a.hasClass("is-active") || (a.addClass("is-active").siblings().removeClass("is-active"), "#index-log" === a.find("a").attr("href") ? (b.hide().children(".zu-button-more").hide(), d.show().children(".zu-button-more").show()) : (d.hide().children(".zu-button-more").hide(), b.show().children(".zu-button-more").show()))
                })
        }
    };
    var $J = function(a) {
        if (z.J("zh-topic-admin-page-wrap")) {
            var b = z.J("zh-topic-del-btn");
            b && a.o().g(b, "click", a.xV)
        }
    };
    var aK = function(a, b) {
        var c = z.Me("li", null, a.mx);
        z.A(c,
            function(a) {
                a.getAttribute("data-token") === b[1] && z.P(a, !1)
            })
    };
    var bK = function(a) {
        var b = window.location.pathname.split("/").pop(),
            c = z.J("zh-topic-users-list-wrap");
        c && (a = new iJ(c, ["/topic", (0, window.encodeURI)(a.ii[1]), b].join("/"), null, ["zg-btn-follow", "zg-btn-unfollow"], !0), a.lj("zm-person-item"), a.init())
    };
    var cK = function(a) {
        var b = z.J("zh-topic-side-head");
        if (b) {
            var c = z.L("zu-entry-focus-button", b);
            c && a.o().g(c, "click",
                function() { (0, z.UG)(c, "topic", "", ["zg-btn-green", "zg-btn-white"])
                });
            a.Mg = z.J("zh-topic-operation-menu");
            a.Mg && a.o().g(a.Mg, "click", a.SC)
        }
        if (b = z.J("zh-current-topic-bio")) {
            var d = new z.Sv(!0, "/topic/bio/update", "bio");
            zI(d, ["tid\x3d" + a.dg]);
            d.Rb = '\x3ca href\x3d"javascript:;" name\x3d"edit"\x3e你在 ' + a.ii[0] + " 话题中的经验\x3c/a\x3e";
            d.nG = !0;
            d.w(b)
        }
        var f = (0, window.$)(".zm-topic-side-person-list .js-showAll");
        if (f.length) f.on("click",
            function() { (0, window.$)(".zm-topic-side-person-list").addClass("show-all");
                f.remove()
            })
    };
    var dK = function(a) {
        z.af(a, z.Ye('\x3ca href\x3d"/question/23261456" class\x3d"zg-link-gray-normal"\x3e\x3ci class\x3d"icon-info" style\x3d"vertical-align: -3px; margin-right: 6px"\x3e\x3c/i\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'))
    };
    var eK = function(a) {
        if (z.J("zh-topic-organize-page-wrap")) {
            var b = z.J("zh-topic-organize-parent-editor");
            if (b) if (z.Y.Ut) {
                var c = new z.It(null, a.dg, !0);
                c.Tu = !0;
                c.w(b);
                c.addEventListener("remove_tag",
                    function(a) { (a = a.data && a.data.id) && (0, window.$)("#wedge-" + a).remove()
                    })
            } else dK(b);
            if (b = z.J("zh-topic-organize-child-editor")) z.Y.Ut ? (c = new z.It(null, a.dg, !1), c.Tu = !0, c.w(b), (0, window.$)("a.entire-link").insertAfter(c.Mo).show()) : dK(b); (0, window.$)("#zm-topic-manage-relation").on("change", '[type\x3d"checkbox"]',
                function() {
                    var a = (0, window.$)(this).closest("li").attr("id").split("-")[1];
                    window.$.post("/topic/update", {
                        action: "set_topic_edge",
                        parent_topic_id: a,
                        topic_id: z.Mk[0][3],
                        edge: this.checked ^ 0
                    }).done(function(a) {
                        if (!a) return z.T.message("网络异常");
                        if (a.r) return z.T.message(a.msg)
                    })
                });
            a.lx = z.J("zh-topic-alias-input");
            new z.Wj(a.lx, "输入话题别名");
            a.mx = z.J("zh-topic-alias-list");
            a.o().g(z.J("zh-topic-alias-container"), "click", a.iW);
            if (b = z.J("zh-topic-merge")) a.Ma = new NI,
                a.Ma.w(b); (b = z.J("zh-topic-merge-btn")) && a.o().g(b, "click", a.KV)
        }
    };
    var fK = function() {
        var a = z.J("zh-topic-organize-page-children");
        a && (new kJ("/topic/" + (0, window.encodeURIComponent)(z.Mk[0][1]) + "/organize/entire")).w(a)
    };
    var gK = function(a) {
        var b = z.J("zh-topic-side-related-topics");
        b && (a.wX = b, a.pC = new z.dp(!1), a.o().g(a.pC, "complete", a.VV), a.pC.ajax("/topic/related?tid\x3d" + a.dg))
    };
    var hK = function(a) {
        if (z.Y.a0)(0, window.$)("div.topic-avatar").addClass("disabled");
        else {
            var b = z.L("zm-entry-head-avatar-edit-button");
            if (b) {
                var c = new z.Cz(2, z.Mk[0][3]);
                c.w(b);
                var d = z.L("zm-avatar-editor-preview");
                z.G(c, "beforepost",
                    function() { (0, window.$)("\x3cdiv class\x3d'avatar-edit-preview-loading topic'\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e").appendTo(d.parentNode)
                    });
                z.G(c, "success",
                    function() {
                        window.$.post("/topic/" + z.Mk[0][1] + "/avatar", {
                            avatar_path: c.getData().url
                        }).then(function(a) {
                            if (!a) return z.T.message("网络异常");
                            if (a.r) return z.T.message(a.msg);
                            d && (d.src = c.getData().url)
                        }).always(function() { (0, window.$)(".avatar-edit-preview-loading").remove()
                        })
                    });
                a.o().g(c, "beforeopen", z.To(z.BE({
                    wr: !0
                }), z.Tr(z.r, !0)))
            }
        }
    };
    var iK = function(a) {
        jK(a);
        kK(a);
        a.KJ && a.o().g(a.KJ, "afterload",
            function(b) {
                z.U.Ab({
                    type: "ga_click_topic_more",
                    data: b.data,
                    target: a.KJ.ce
                })
            })
    };
    var jK = function(a) {
        var b = z.J("zh-topic-feed-list");
        if (b) {
            var c = new z.El;
            a.K(c);
            c.use("locationSource", {
                Du: 0,
                offset: function(a) {
                    return z.ib(a).getAttribute("data-score")
                }
            });
            c.use("childConstructor", {
                factory: z.iE
            }).use("expandLimit");
            c.w(b);
            a.o().g(c, "click!",
                function(a) {
                    "comment" === a.namespace && a.Nc.fill("category", this.Sh).fill("label", "topic_activity")
                })
        }
    };
    var kK = function(a) {
        var b = z.J("zh-topic-top-page-list");
        if (b) {
            var c = new z.El({
                ag: !1
            });
            a.K(c);
            c.use("childConstructor", {
                factory: z.iE
            }).use("expandLimit");
            c.w(b);
            a.o().g(c, "click!",
                function(a) {
                    "comment" === a.namespace && a.Nc.fill("category", this.Sh).fill("label", "topic_activity")
                })
        }
    };
    var lK = function() {
        function a(a) {
            if (!a) return z.T.message("网络异常");
            if (a.r) return z.T.message(a.msg)
        } (0, window.$)("#zh-topic-manage-relation-form").on("change", 'input[type\x3d"radio"]',
            function() {
                window.$.post("/topic/update", {
                    action: "set_topic_weaknode",
                    topic_id: z.Mk[0][3],
                    weak: (0, window.$)(this).val()
                }).done(a)
            }); (0, window.$)("#zh-topic-manage-lock-form").on("change", '[type\x3d"checkbox"]',
            function() {
                window.$.post("/topic/lock", {
                    url_token: z.Mk[0][1],
                    lock_type: this.name,
                    lock_value: (0, window.$)(this).is(":checked") ? 1 : 0
                }).done(a)
            })
    };
    var mK = function(a) {
        var b = (0, window.$)(".topic-info a[name\x3dshare]"),
            c = b.get(0),
            d = window.location.href,
            f = {
                index: [/\/topic\/\d+$/],
                hot: [/\/topic\/\d+\/newest/],
                top_answers: [/\/topic\/\d+\/top-answers/],
                unanswered: [/\/topic\/\d+\/unanswered/, /\/topic\/\d+\/questions/]
            },
            g = Object.keys(f).find(function(a) {
                    return f[a].some(function(a) {
                        return a.test(window.location.pathname)
                    })
                }) || "";
        c && (z.wD(c, "topic", a.ii[1], d).xb(a), b.click(function() {
            z.W("share", "click_share_topic_page", g)
        }))
    };
    var nK = function() {
        var a = (0, window.$)(".TopicIndex")[0];
        a && (new NJ(z.Mk[0][1], z.mm)).w(a)
    };
    var oK = function(a) {
        z.Q.call(this, a)
    };
    var pK = function(a, b, c) {
        var d, f, g = [];
        for (d in c) f = c[d],
            z.na(f) ? z.A(f, (0, z.t)(function(a) {
                    g.push(UI({
                        type: "hidden",
                        name: d,
                        value: String(a)
                    }))
                },
                a)) : g.push(UI({
                type: "hidden",
                name: d,
                value: String(f)
            }));
        z.Fe(b, JI(g))
    };
    var qK = function(a) {
        return window.$.get("/node/ExploreAnswerListV2", {
            params: JSON.stringify({
                offset: a,
                type: "day"
            })
        })
    };
    var rK = function(a) {
        return window.$.get("/node/ExploreHotFavlistsInnerV2", {
            params: JSON.stringify({
                offset: a
            })
        })
    };
    var sK = function(a) {
        return window.$.get("/node/ExploreAnswerListV2", {
            params: JSON.stringify({
                offset: a,
                type: "month"
            })
        })
    };
    var tK = function() {
        z.H.call(this)
    };
    var uK = function() {
        z.Q.call(this);
        var a = z.Jk || [0, 0];
        this.Bu = a[0];
        this.visible = !!a[1];
        this.Sh = "collection"
    };
    var vK = function() {
        var a = z.J("zh-favlist-following-wrap");
        a && ((new iJ(a, null, "favlist", null, !0)).init(), (0, window.$)(a).on("click", "a.zg-unfollow",
            function(a) {
                "/collections" === window.location.pathname && (a = (0, window.$)(a.target).attr("href"), /\/collection\/\d+\/followers/.test(a) ? z.ti({
                    category: "collection",
                    action: "visit_collection_followers",
                    label: "collections_my_followed_collections_collection_followers_count"
                }) : z.ti({
                    category: "collection",
                    action: "click_unfollow_collection",
                    label: "collections_my_followed_collections_unfollow_collection"
                }))
            }).on("click", ".zm-item-title \x3e a",
            function() {
                var a = window.location.pathname;
                "/collections" === a ? z.ti({
                    category: "collection",
                    action: "visit_collection",
                    label: "collections_my_followed_collections_collection"
                }) : "/collections/mine" === a && z.ti({
                        category: "collection",
                        action: "visit_collection",
                        label: "collections_my_collection"
                    })
            }))
    };
    var wK = function(a) {
        var b = z.J("zh-list-side-head");
        if (b) {
            var c = z.L("zu-entry-focus-button", b);
            c && a.o().g(c, "click",
                function() { (0, z.UG)(c, "favlist", "", ["zg-btn-green", "zg-btn-white"])
                });
            a.Mg = z.J("zh-list-operation-menu");
            a.Mg && a.o().g(a.Mg, "click", a.SC)
        } (b = z.J("zh-single-answer-author-info")) && (new jJ(b)).init(); (b = z.J("zh-list-create-new-list")) && a.o().g(b, "click", a.BY); (b = z.J("zh-fav-list-side-bar-creator")) && (new jJ(b)).init();
        z.V.Va((0, window.$)(".zu-main-sidebar")[0], {
            module: "RightSideBar"
        });
        b = (0, window.$)("#zh-fav-list-side-bar-report");
        b.length && (b.on("click",
            function(b) { (new z.Lz({
                type: "favlist",
                id: a.Bu
            })).render();
                z.V.trackEvent(b.currentTarget, {
                    action: "ReportIntent",
                    element: "Button"
                })
            }), z.V.Va(b[0], {
                module: "CollectionItem"
            },
            function() {
                return {
                    card: {
                        card_type: "Content",
                        content: {
                            type: "Collection",
                            token: String(z.Jk[2])
                        }
                    }
                }
            }))
    };
    var xK = function(a) {
        z.T.confirm("删除收藏夹", "你确定要删除这个收藏夹吗？",
            function(a) {
                a && (a = new z.yr, a.add("favlist_id", this.Bu), a.add("_xsrf", (new z.rg(window.document)).get("_xsrf")), (new oK).post(z.zr(a), "/collection/delete"))
            },
            a)
    };
    var yK = function(a) {
        a.Ka || (a.Ka = new z.vC(a.Bu, "favlist"), a.K(a.Ka), a.o().g(a.Ka, "click!",
            function(a) {
                "comment" === a.namespace && (a.Nc.fill("category", this.Sh).fill("label", "collection"), a.Nc.action = a.Nc.action.replace("favlist", "collection"))
            }), z.zC(a.Ka, a.Nu, (0, window.$)(".toggle-comment", a.Nu)[0]))
    };
    var zK = function(a) {
        a.IM = new z.dp(!0);
        a.o().g(a.IM, "complete",
            function() {
                window.location.reload()
            });
        a.IM.ajax("/collection/update", "favlist_id\x3d" + a.Bu + "\x26is_public\x3d1")
    };
    var AK = function(a, b) {
        z.H.call(this);
        this.qa = a;
        this.Ib = b;
        this.data = z.X
    };
    var BK = function(a) {
        a.fv && a.fv.X(a.data.wb ? "撤消匿名身份": "使用匿名身份")
    };
    var CK = function(a, b) {
        return a ? b ? new z.RA(a) : new z.Uz(a) : new z.Yz
    };
    var DK = function(a) {
        a.Yk.innerHTML = "";
        z.P(a.Yk, !1);
        a.Vp = !1;
        a.Zm.Xq("问题重定向");
        z.ep("/question/unredirect", null, "POST", "qid\x3d" + a.qa + "\x26rqid\x3d" + a.Gv)
    };
    var EK = function(a, b) {
        z.Q.call(this);
        this.Hy = this.nr = null;
        this.vK = b;
        this.content = a;
        this.type = b.type;
        this.token = b.token;
        this.title = this.type === FK ? "一句话介绍": "在 " + b.ii + " 话题下的话题经验"
    };
    var GK = function(a) {
        a.zj.focus();
        z.ys(a.zj.get()[0], a.zj.val().length)
    };
    var HK = function(a, b) {
        a.nr = b; (0, window.$)(a.h).attr("class", "zm-bio-item " + a.nr)
    };
    var IK = function(a, b) {
        z.H.call(this);
        this.GT = b;
        this.iG = a;
        this.items = [];
        this.gJ = !1;
        this.kY = z.jm.selected_bio
    };
    var JK = function() {
        KK || (KK = new IK(z.lm, !1));
        return KK
    };
    var LK = function(a) {
        var b = z.X.Ia;
        a.gJ = !0;
        a.aL = b
    };
    var MK = function(a) {
        window.$.get("/question/" + a.aL + "/bios").then(function(b) {
            a.SU = !0;
            a.iG = b.msg;
            NK(a)
        })
    };
    var NK = function(a) {
        if (!a.SU && a.gJ) MK(a);
        else {
            if (!a.ua) {
                a.ua = new z.R;
                a.ua.Ca("编辑话题经验");
                z.Rh(a.ua, null);
                a.ua.cr(!0);
                var b = a.ua.S();
                z.S.add(a.ua.m(), "bio-editor-modal");
                b.innerHTML = '\x3cdiv class\x3d"bio-editor-modal-title"\x3e可以填写你从事的职业、取得的资格或过往的经历，让你在这个问题下的回答更具说服力。\x3c/div\x3e';
                a.render(b)
            }
            a.ua.F(!0)
        }
    };
    var OK = function(a, b, c) {
        b = new EK(b, c);
        b.render(a.JT);
        c.token === a.kY && b.xc(!0);
        b.xb(a);
        a.items.push(b)
    };
    var PK = function(a) {
        var b = a.getSelection();
        b && window.$.post("/question/" + a.aL + "/bio", {
            bio: b.getToken()
        }).then(function() {
            a.sa({
                action: "edit_topic_experience_success",
                attributes: {
                    topic_experience_topic_id: b.getToken(),
                    topic_experience_topic_content: b.cb()
                }
            })
        })
    };
    var QK = function(a, b) {
        z.Q.call(this);
        this.bb = a;
        this.qt = yI(this.bb);
        this.isContentEditable = this.bb.isContentEditable();
        this.fZ = 30;
        this.ge = new z.td(1E3 * this.fZ);
        this.qa = z.X ? z.X.qa: 0;
        this.EI = b || !1
    };
    var RK = function(a) {
        SK(a, "保存中…");
        a.Ky();
        a.KT()
    };
    var TK = function(a) {
        a.ge.stop()
    };
    var UK = function(a) {
        a.qD && ((0, window.clearInterval)(a.qD), a.qD = null)
    };
    var VK = function(a, b) {
        var c = z.fj(b || (0, z.I)());
        /^\d/.test(c) && (c = " " + c);
        SK(a, "已存于" + c)
    };
    var SK = function(a, b, c) {
        var d = (0, window.$)(a.qI);
        c ? d.addClass("warning") : d.removeClass("warning");
        z.P(a.cu, !0);
        z.of(a.qI, b)
    };
    var WK = function(a) {
        XK(a);
        var b = {
            qid: a.qa,
            timestamp: (0, z.I)()
        }; (0, window.setTimeout)(function() {
                window.$.post("/draft/delete", b)
            },
            500)
    };
    var XK = function(a) {
        a.eJ && (a.eJ.abort(), a.Ys());
        UK(a);
        z.P(a.cu, !1);
        a.dispatchEvent("clearContent")
    };
    var YK = function(a, b) {
        z.Q.call(this);
        this.hY = (0, window.$)(a).children();
        this.contents = [];
        this.nh = 0;
        this.ct = [];
        this.className = b || "";
        this.cF = !1;
        this.delay = 0;
        this.ps = null;
        z.A(this.hY,
            function(a) {
                a = (0, window.$)(a).addClass("carousel-inner-content");
                this.contents.push(a);
                this.ct.push((0, window.$)("\x3cdiv\x3e\x3c/div\x3e").addClass("carousel-dot"))
            },
            this)
    };
    var ZK = function(a, b) {
        if (0 > b || b >= a.contents.length) return ! 1;
        a.ps && ((0, window.clearTimeout)(a.ps), a.ps = null);
        a.ct[a.nh].removeClass("carousel-dot-selected");
        a.contents[a.nh].hide();
        a.ct[b].addClass("carousel-dot-selected");
        a.contents[b].show();
        a.nh = b;
        $K(a);
        return ! 0
    };
    var $K = function(a) {
        var b = a.nh;
        a.cF && (a.ps = (0, window.setTimeout)(function() {
                b === a.nh && (b === a.contents.length - 1 ? ZK(a, 0) : a.next())
            },
            a.delay))
    };
    var aL = function() {
        function a() {
            function a() {
                return new window.Promise(function(a) {
                    v.onAnimationEnd(function() {
                            a()
                        },
                        400)
                })
            }
            function b(a) {
                return z.nb(a,
                    function(a, b) {
                        return a.then(b)
                    },
                    window.Promise.resolve())
            }
            if (!d) {
                d = !0;
                var c = (0, window.$)("#copyright-demo-region1"),
                    f = (0, window.$)("#copyright-demo-region2"),
                    n = (0, window.$)("#copyright-demo-region3"),
                    q = (0, window.$)("#copyright-demo-region4"),
                    v = (0, window.$)("#copyright-demo-indicator"); (0, window.$)(".frame2-region").removeClass("copyright-demo-region-selected");
                b([function() {
                    v.show().addClass("indicator-move1");
                    c.addClass("copyright-demo-region1-select-animation");
                    return a()
                },
                    function() {
                        c.removeClass("copyright-demo-region1-select-animation").addClass("copyright-demo-region-selected");
                        v.removeClass("indicator-move1").addClass("indicator-move2");
                        return a()
                    },
                    function() {
                        f.addClass("copyright-demo-region-selected");
                        v.removeClass("indicator-move2").addClass("indicator-move3");
                        return a()
                    },
                    function() {
                        n.addClass("copyright-demo-region-selected");
                        v.removeClass("indicator-move3").addClass("indicator-move4");
                        return a()
                    }]).then(function() {
                    q.addClass("copyright-demo-region-selected");
                    v.removeClass("indicator-move4");
                    d = !1
                })
            }
        }
        function b() {
            var a = (0, window.$)(".copyright-demo-pointer"),
                b = (0, window.$)(".copyright-demo-noty");
            a.css("opacity", "0");
            b.css("opacity", "0");
            a.addClass("copyright-demo-pointer-show-animation");
            b.addClass("copyright-demo-noty-show-animation"); (0, window.setTimeout)(function() {
                    a.removeClass("copyright-demo-pointer-show-animation");
                    b.removeClass("copyright-demo-noty-show-animation");
                    a.css("opacity", "1");
                    b.css("opacity", "1")
                },
                1100)
        }
        var c = z.XD.tJ(z.Y[2]).addClass("copyright-demo-noty"),
            d = !1,
            f = (0, window.$)((0, window.$)("#copyright-demo-template").html()); (0, window.$)("#copyright-demo-frame3", f).append(c);
        c = new YK(f, "copyright-demo");
        c.g("rightShow",
            function(c) {
                1 === c.offset ? a() : 2 === c.offset && b()
            });
        f = new z.R;
        c.render(f.S());
        f.Ca("功能演示");
        z.Zh(f, 462);
        return {
            dialog: f,
            uF: c
        }
    };
    var bL = function() {
        var a = (0, window.$)('\x3cdiv id\x3d"copyright-demo-helper" style\x3d"display: none; position: absolute;"\x3e\x3cp class\x3d"copyright-demo-helper-intro"\x3e 勾选后，我们将限制其他用户的复制操作，并给予提醒 \x3c/p\x3e\x3cp class\x3d"copyright-demo-helper-btn"\x3e 查看演示 \x3c/p\x3e\x3c/div\x3e'),
            b = new z.Vx({
                I: "data-copyright-demo"
            });
        b.gr = 250;
        b.sp = 750;
        b.$h(a[0]);
        b.g("trigger",
            function(a) {
                b.setPosition(new z.Dx(a.anchor, 4))
            });
        var c = null; (0, window.$)(".copyright-demo-helper-btn").click(function() {
            c || (c = aL(), cL());
            b.F(!1);
            ZK(c.uF, 0);
            var a = c.uF;
            a.cF = !0;
            a.delay = 3E3;
            $K(a);
            c.dialog.F(!0)
        })
    };
    var cL = function(a) {
        a = void 0 === a ? dL: a;
        if ("number" === typeof a) {
            dL = a;
            var b = void 0,
                c, d;
            switch (a) {
                case 0:
                    c = "勾选后，我们将限制其他用户的复制操作，并给予提醒";
                    d = "复制将受限，同时会弹出提醒";
                    b = "保留所有权利，禁止转载";
                    break;
                case 2:
                    c = "选择后，我们将在其他用户复制时给予提醒",
                        d = "系统会弹出提醒",
                        b = "如需转载，请点击文末的申请转载按钮"
            } (0, window.$)(".copyright-demo-helper-intro").text(c); (0, window.$)(".copyright-demo-effect").text(d); (0, window.$)(".copyright-demo-noty .tooltip-inner").text(b)
        }
    };
    var eL = function(a, b) {
        z.Wv.call(this, !1);
        this.wb = !!a;
        this.QM = b;
        this.Rb = "\x26nbsp";
        this.Cx = z.jm || z.Y[4];
        this.rw = this.Jy = this.aH = this.enabled = !0;
        if (z.Y.activated || !z.Y.authed()) this.eB = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e写回答…\x3c/span\x3e'
    };
    var fL = function(a, b) {
        b ? gL(a, b, "添加话题经验，提升回答可信度") : gL(a, "", "填写话题经验，提升回答可信度")
    };
    var hL = function(a, b) {
        b ? gL(a, b, "修改话题经验") : gL(a, "", "填写话题经验，提升回答可信度")
    };
    var gL = function(a, b, c) {
        b = void 0 === b ? "": b;
        c = void 0 === c ? "修改": c;
        a.ju && (b && (b = z.Ma("，" + bJ(b.trim()))), a.lF.innerHTML = b + '\x3ca name\x3d"edit_bio" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e' + c + "\x3c/a\x3e")
    };
    var iL = function(a) {
        if (z.X.tc && !window.localStorage.getItem("no_more_org_question_rule"))(0, window.$)(a.m()).one("focus", ".zm-editable-editor-field-element",
            function() {
                z.T({
                        title: "机构提问规则",
                        content: '\n          \x3cdiv class\x3d"zh-question-answer-form-orgRule"\x3e\n            \x3cp\x3e这是一个「机构提问」，请在回答前了解以下规则：\x3c/p\x3e\n            \x3col\x3e\n              \x3cli\x3e提问机构如需使用你的回答，由提问机构联系你，共同商定确认使用条件。\x3c/li\x3e\n              \x3cli\x3e「机构提问」下的回答，站内传播与社区公共提问下的回答有所区别。\x3c/li\x3e\n              \x3cli\x3e提问机构可能「隐藏」回答，被「隐藏」回答不在社区内流通。\x3c/li\x3e\n            \x3c/ol\x3e\n            \x3ca class\x3d"knowMore" href\x3d"/org-intro#org-question" target\x3d"_blank"\x3e了解更多\x3c/a\x3e\n          \x3c/div\x3e',
                        modal: !0,
                        ga: !0,
                        buttons: {
                            yes: "知道了",
                            cancel: "不再显示"
                        }
                    },
                    function(a) {
                        a || window.localStorage.setItem("no_more_org_question_rule", !0)
                    })
            })
    };
    var jL = function(a, b, c) {
        b = (0, window.$)(b); (0, window.$)(a.oc).hide();
        c = (0, window.$)(c); (0, window.$)(a.Xj).append(b).after(c); (z.$h || a.Yd) && b.addClass("activate-mask-tip-answer-simple");
        a = z.Tr(z.r, !0, "#draft");
        b.on("click", a);
        c.on("click", a)
    };
    var kL = function(a) {
        a.ol ? a.ol.show() : (a.ol = (0, window.$)('\x3cdiv class\x3d"question-tip-box-bottom"\x3e确定想要回答你自己提出的问题吗？\x3cbr\x3e如果需要对问题做出更多的解释和说明，请编辑问题描述。 如果需要对其他回答做出回应，请在相应回答下通过评论发布。\x3cbr\x3e\x3cdiv class\x3d"zg-clear"\x3e\x3ca href\x3d"javascript:" class\x3d"zg-right zg-btn zg-btn-blue" name\x3d"confirm"\x3e确定\x3c/a\x3e\x3ca href\x3d"javascript:" class\x3d"zg-right zg-link-gray " name\x3d"cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), a.ol.on("click", '[name\x3d"cancel"]',
            function() {
                a.ol.hide()
            }).on("click", '[name\x3d"confirm"]',
            function() {
                a.ol.hide(); (0, window.$)(a.mc).hide();
                a.gb(!0);
                a.Wg()
            }), (0, window.$)(a.mc).after(a.ol))
    };
    var lL = function(a) {
        var b = (0, window.$)("input[name\x3danno-checkbox]", a.oc)[0],
            c = (0, window.$)("label", a.oc)[0];
        a.fo = b;
        z.X.wb && (a.fo.checked = !0);
        z.fo(c, !0)
    };
    var mL = function(a) {
        var b = (0, window.$)(".demo-trigger", a.oc);
        if (b.length) {
            var c = Number(a.Ms.value);
            switch (c) {
                case 1:
                    b.attr("hidden", "");
                    break;
                default:
                    cL(c)
            } (0, window.$)(a.Ms).on("change",
                function(d) {
                    d = Number(d.target.value);
                    2 !== d || z.Y.DA ? (1 === d ? b.attr("hidden", "") : (b.removeAttr("hidden"), cL(d)), c = d) : (a.Ms.value = c, window.open("/copyright/invite", "copyright_invite"))
                })
        }
    };
    var nL = function(a) {
        var b = JK();
        a.Dx || (LK(b), a.o().g(b, "change", a.zB).g(b, "trackRequested",
            function(a) {
                a.label = "add_answer_box_edit_topic_experience";
                z.ti(a)
            }));
        a.Dx = !0;
        NK(b)
    };
    var oL = function(a, b) {
        z.Q.call(this);
        this.mX = a;
        this.VE = b
    };
    var pL = function(a, b, c, d, f) {
        z.Wv.call(this, d, b, c);
        this.qa = a;
        this.NI = this.Qq = !1;
        this.zW = f
    };
    var qL = function(a, b) {
        a.NI = b
    };
    var rL = function() {
        var a = z.M("select", {
                style: "1px solid #999 "
            }),
            b = z.M("option", {
                    value: "none"
                },
                "请选择一个修改理由...");
        a.appendChild(b);
        z.A(sL,
            function(b, d) {
                var f = z.M("option", {
                        value: b.value
                    },
                    d + 1 + ". " + b.label);
                a.appendChild(f)
            });
        return a
    };
    var tL = function(a, b, c) {
        a.DJ.innerHTML = b;
        z.S.set(a.DJ, c || "zg-error-text")
    };
    var uL = function() {
        z.Q.call(this)
    };
    var vL = function() {
        z.R.call(this);
        this.sd(!0);
        this.F(!0)
    };
    var wL = function(a, b) {
        a.Ca("提问无人问津？");
        a.X(b);
        a.ga(); (0, window.$)(".js-gonext", a.h).on("click",
            function() {
                var b = (0, window.$)(this).parents('[class^\x3d"view"]').attr("class");
                "view-starting" === b ? (a.Ca("第一条"), xL(a, "firsttip")) : "view-firsttip" === b ? (a.Ca("第二条"), xL(a, "secondtip")) : "view-secondtip" === b ? (a.Ca("第三条"), xL(a, "thirdtip")) : "view-thirdtip" === b && a.F(!1)
            })
    };
    var yL = function(a, b) {
        a.Ca("邀请回答小窍门");
        a.X(b);
        a.ga(); (0, window.$)(".js-close", a.h).on("click",
            function() {
                a.F(!1)
            })
    };
    var xL = function(a, b) { (0, window.$)('[class^\x3d"view"]', a.h).hide(); (0, window.$)(".view-" + b, a.h).show()
    };
    var zL = function(a) {
        z.V.Va(a, {
                module: "UserItem"
            },
            function() {
                return {
                    card: {
                        content: {
                            type: "User",
                            member_hash_id: (0, window.$)(a).find(".invite-button").data("uid")
                        }
                    }
                }
            })
    };
    var AL = function(a, b) {
        z.V.trackCardShow(a, {},
            {
                search: {
                    raw_query: (0, window.$)(b).find(".search-input").val()
                }
            })
    };
    var BL = function(a, b) {
        z.Q.call(this);
        this.lX = a;
        this.Gq = b;
        this.Z = null;
        this.ub = !1;
        this.Jm = null;
        this.yk = [];
        this.Jc = !1;
        this.DU = "loading";
        this.AI = "zg-btn-white"
    };
    var CL = function(a) {
        var b = a.DU;
        a.H.addClass(b).html(DL);
        window.$.get("/node/QuestionInvitePanelV2", {
            params: {
                question_id: a.lX
            }
        }).done(function(c) {
            a.Jc = !0;
            a.H.removeClass(b);
            c = (0, window.$)(c);
            a.H.replaceWith(c);
            a.h = c[0];
            c.toggle(a.od());
            a.H = c;
            EL(a)
        })
    };
    var EL = function(a) {
        var b = a.m();
        a.o().g(z.rp, "anon_change", a.lV); (0, window.$)(".cancel-anon", b).click(window.$.proxy(a.FR, a));
        if (! (0, window.$)(".error-message", b).length) {
            var c = z.L("search-input", b),
                d = z.L("invite-title", b);
            a.kA(c, d);
            a.Tn = (0, window.$)(".suggest-persons", b);
            a.Tn.on("click", "button", window.$.proxy(a.FH, a));
            z.V.Va(a.Tn[0], {
                module: "UserList"
            }); (0, window.$)(".person", a.Tn).each(function(a, c) {
                zL(c);
                "none" !== c.style.display && AL(c, b)
            }); (0, window.$)(".js-more", b).one("click",
                function(a) {
                    z.V.trackEvent(a.target, {
                        action: "LoadMore",
                        element: "Button"
                    });
                    a = (0, window.$)('.person[style\x3d"display:none"]', this.Tn);
                    a.each(function(a, c) {
                        "none" === c.style.display && AL(c, b)
                    });
                    a.show(); (0, window.$)(this).remove()
                });
            a.Or = (0, window.$)(".invite-status", b);
            a.Or.on("click", "button", window.$.proxy(a.GR, a)).on("mouseenter mouseleave", ".invited-shortlist",
                function(a) { (0, window.$)(".invited-hovercard", this).toggleClass("in", "mouseenter" === a.type)
                });
            FL(a)
        }
    };
    var GL = function(a, b) {
        var c = z.X;
        a.dispatchEvent(new z.YB("click!invitation", {
            category: "invitation",
            action: "ask_to_answer",
            label: b,
            value: c.JI ? null: c.Re
        }))
    };
    var HL = function(a, b) {
        return !! z.pb(a.yk,
            function(a) {
                return a.id === b
            })
    };
    var IL = function(a, b, c) {
        var d = (0, window.$)(".invite-button", a.Tn).filter(function() {
            return this.getAttribute("data-uid") === b
        }).get(0);
        d && JL(a, d, c)
    };
    var JL = function(a, b, c) {
        a = a.AI;
        c ? (z.S.add(b, a), z.of(b, "收回邀请")) : (z.S.remove(b, a), z.of(b, "邀请回答"))
    };
    var FL = function(a) {
        a.yk = window.$.map((0, window.$)(".invited-fulllist", a.Or).children(), a.FK)
    };
    var KL = function(a, b) {
        a.yk && aJ(a.yk,
            function(a) {
                return a.id === b
            }) && LL(a)
    };
    var LL = function(a) {
        var b = a.yk,
            c = {
                each: z.A,
                fullList: function() {
                    return (0, z.Rr)(ML, {
                        persons: b,
                        helper: c
                    })
                }
            };
        b.length ? a.Or.html((0, z.Rr)(NL, {
            persons: b,
            helper: c,
            maxInvites: 15
        })) : a.Or.html("你可以通过邀请其他用户来更快获得回答")
    };
    var OL = function(a) {
        z.Q.call(this);
        this.data = a;
        this.Ka = null
    };
    var PL = function(a) {
        var b = z.L("panel-container", a.h);
        b && (a.Rm = new uL, a.K(a.Rm), a.Rm.w(b), a.Ka = new z.vC(a.data.qa, "question"), a.Rm.K(a.Ka), z.zC(a.Ka, a.Rm.m(), (0, window.$)(".toggle-comment", a.h)[0]), a.Ep(), a.Eh(), QL(a))
    };
    var RL = function(a) {
        if (!a.Ff) {
            var b = z.L("zm-meta-panel", a.h);
            b && (a.Ff = new z.xv(null, a.h)).w(b)
        }
    };
    var QL = function(a) {
        if ("normal" === z.X.status) {
            var b = new BL(a.data.qa, a.data.Ia);
            b.render(a.Rm.m());
            var c = (0, window.$)('a[name\x3d"invite"]', a.m());
            a.o().g(b, ["expand", "collapse"],
                function(a) {
                    c.text("expand" === a.type ? "收起邀请": "邀请回答")
                });
            a.Rm.K(b);
            z.X.EY && (b.Kc(!0), a.dispatchEvent(new z.YB("show!invitation", {
                category: "invitation",
                action: "ask_to_answer_card",
                label: ""
            })));
            a.AA = b
        }
    };
    var SL = function(a, b) {
        var c = a.xO;
        c || (c = new z.GA, c.w(z.J("zh-question-admin-menu")), z.Ch(c,
            function(a) {
                a.Fa(a.m().getAttribute("data-action"))
            }), a.o().g(c, "action",
            function(a) {
                a = this.CE = a.target; (new z.aC).open(a.m(), {
                        id: this.data.qa,
                        type: "question"
                    },
                    (0, z.t)(this.VP, this))
            }), a.xO = c);
        c.W() ? c.F(!1) : z.HA(c, new z.qA(b, 1, !0), 0, new z.Gg(5, 0, 5, 0))
    };
    var TL = function(a) {
        z.T.confirm("删除问题", "你确定要删除这个问题吗？相关的评论也将被删除。",
            function(a) {
                if (a) {
                    var c = new z.dp(!0);
                    z.G(c, "complete",
                        function() {
                            var a = z.Dn(c);
                            a && !a.r ? window.location.href = "/": z.T.message(a.msg)
                        });
                    c.ajax("/question/delete/" + this.data.qa)
                }
            },
            a)
    };
    var UL = function(a) {
        z.T.confirm("锁定问题", "锁定后该问题将无法添加新的回答，你确认要锁定吗？",
            function(b) {
                b && window.$.post("/question/" + a.data.Ia + "/org_lock").then(function(a) {
                    a.r ? z.T.message(a.msg) : (z.T.message("操作成功！"), window.location.reload())
                })
            })
    };
    var VL = function(a) {
        z.T.confirm("解除锁定问题", "你确认要解除锁定吗？",
            function(b) {
                b && window.$.post("/question/" + a.data.Ia + "/org_unlock").then(function(a) {
                    a.r ? z.T.message(a.msg) : (z.T.message("操作成功！"), window.location.reload())
                })
            })
    };
    var WL = function(a, b, c) {
        z.Wv.call(this, a, b, c)
    };
    var XL = function(a) {
        z.QD.call(this);
        z.Mb(this.options = {},
            YL, a || {});
        this.qa = this.options.qa;
        this.ib = this.options.ib;
        this.ry = this.options.ry;
        this.ub = !0
    };
    var ZL = function(a) {
        var b = z.L("zm-item-answer", a.h) || a.h;
        a.ib = b.getAttribute("data-aid");
        a.Rh = "1" === b.getAttribute("data-isowner");
        a.Ia = b.getAttribute("data-atoken");
        a.Op = "1" === b.getAttribute("data-deleted");
        a.jy = Number(b.getAttribute("data-created"));
        b.getAttribute("data-helpful");
        a.aU = "1" === b.getAttribute("data-good");
        b.getAttribute("data-copyable");
        a.Vi = "1" === b.getAttribute("data-collapsed");
        a.wb = null
    };
    var $L = function(a) {
        if (!a.Qe && a.Rh && z.X && a.ib) {
            a.Qe = new WL(!1, "/answer/content", "content");
            z.Ac(a, a.Qe);
            a.Qe.rw = !0;
            a.Qe.Jy = !0;
            a.Qe.oH = eL.prototype.oH;
            var b = z.L("zm-item-rich-text", a.h);
            zI(a.Qe, ["id\x3d" + a.qa]);
            a.Qe.w(b);
            a.o().g(a.Qe, "shouldUpdateContent",
                function(a) {
                    if (z.ma(a.data)) return ! 1
                });
            a.o().g(a.h, "click",
                function(a) {
                    "suggest_edit" === a.target.name && (this.Qe.Wg(), (0, window.$)(".zh-question-censor-tip", this.h).hide());
                    return ! 0
                })
        }
    };
    var aM = function(a) {
        window.$.post("/answer/unremove", {
            aid: a.ib
        }).then(function() {
            a.Op = !1;
            z.P(a.h, !0);
            a.Zw = "cancel_delete";
            a.dispatchEvent("change");
            $L(a)
        })
    };
    var bM = function() {
        z.Q.call(this);
        this.data = z.X || {};
        this.qa = this.data.qa;
        this.Vp = !1;
        this.ti = {};
        this.tx = [];
        this.hs = [];
        this.Zi = 0;
        this.Lk = z.km && z.km.url_token ? z.km: null;
        this.Hy = (0, window.$)("#zh-question-title").data("editable")
    };
    var cM = function() {
        var a = z.be(window.location.href, "oauthsuccess");
        if (a && "wechat" === a && z.lj && z.Y.authed()) {
            z.Hk = Object.assign({},
                z.Hk, {
                    link: "" + window.location.origin + window.location.pathname
                });
            window.history.pushState({},
                "", "" + window.location.origin + window.location.pathname);
            var b = (0, window.$)(".oauth-success-template--" + a);
            if (b.length) {
                var c = (0, window.$)(b.html()),
                    d = "oauth-success--" + a + "--open"; (0, window.$)("body").append(c);
                window.setTimeout(function() {
                        c.addClass(d)
                    },
                    0);
                c.one("click",
                    function() {
                        c.removeClass(d)
                    });
                window.setTimeout(function() {
                        c.removeClass(d)
                    },
                    5E3)
            }
        }
    };
    var dM = function(a) {
        z.Y.Th && window.$.post("/question/popup", {
                action: "no_answer",
                question_token: a.data.Ia
            },
            function(a) {
                a && wL(new vL, a)
            })
    };
    var eM = function(a) { (0, window.$)(".js-ignore-invite").click(function() { (0, window.$)(".question-invited-by").hide();
        window.$.post("/question/askpeople", {
            qid: a.data.Ia,
            uid: z.Y.ae,
            op: "pass"
        })
    }); (0, window.$)(".js-invite-others").click(window.$.proxy(function() {
            var a = (0, window.$)('#zh-question-meta-wrap a[name\x3d"invite"]')[0];
            a && (z.Hr(a, {
                RD: function() {
                    return ! 1
                },
                rx: !0
            }), this.uv.AA.Kc(!0))
        },
        a))
    };
    var fM = function(a) {
        "close" === z.X.status || z.X.Pp || (a.Ma = new z.At(a.data.In, a.data.qa), a.Ma.fq = 5, a.Ma.Ou = 1, a.Ma.GE = !0, a.Ma.Tu = !0, a.Ma.w(z.L("zm-tag-editor", a.h)), a.o().g(a.Ma, ["remove_tag", "add_tag"],
            function() {
                z.U.Ab("ga_edit_question_topic_changed")
            }), a.o().g(a.Ma, "start_editing",
            function() {
                z.U.Ab("ga_question_topic_edit_finish_changed")
            }), a.Ma.addEventListener("beforeedit", z.BE({
            Iq: !0
        })))
    };
    var gM = function(a) {
        var b = z.J("zh-question-title");
        z.X.Pp ? b.children[0].appendChild(z.Ye('\x3ca class\x3d"Button Button--text QuestionPage-titleButton" href\x3d"/question/24501563" target\x3d"_blank" data-tooltip\x3d"s$t$该问题已被锁定公共编辑"\x3e\x3cspan class\x3d"sprite-global-icon-lock"\x3e\x3c/span\x3e\x3c/a\x3e')) : (a.ud = new pL(a.data.qa, "/question/title", "content", !1, !0), a.ud.nG = !0, a.ud.Yd = !0, a.ud.Qq = !0, qL(a.ud, TI(a.data.Th)), a.ud.w(b), a.o().g(a.ud, "change",
            function() {
                z.rp.dispatchEvent("question_title_change");
                window.document.title = this.ud.cb() + " - 知乎"
            }), a.o().g(a.ud, "click_edit",
            function() {
                z.U.Ab("ga_question_title_edit_start")
            }), a.o().g(a.ud, "cancel_edit",
            function() {
                z.U.Ab("ga_question_title_edit_cancel")
            }), a.o().g(a.ud, "save_changed",
            function() {
                z.U.Ab("ga_question_title_edit_save_changed")
            }), a.o().g(a.ud, "save_unchanged",
            function() {
                z.U.Ab("ga_question_title_edit_save_unchanged")
            }), a.ud.addEventListener("beforeedit", z.BE({
            Iq: !0
        })))
    };
    var hM = function(a, b) {
        var c = z.J("zh-question-detail");
        if (c) {
            var d = new z.AD({
                NF: "zm-editable-content"
            });
            a.o().g(d, "expand", b).g(d, "invalid", b);
            d.w(c)
        }
    };
    var iM = function(a) {
        a.JF && (a.data.Es = +a.JF.innerHTML, z.Y.authed() || (a.data.Es = 0), z.P(a.Ci, 0 < a.data.Es), a.js && z.of(a.js, a.data.Re ? a.data.Re + " 个回答": "还没有回答"), a.Bn && z.P(a.Bn, 1 < a.data.Re), z.P(a.Ci, 0 < a.data.Es))
    };
    var jM = function(a) {
        var b = z.J("zh-question-answer-wrap");
        if (b) {
            var c = !Boolean((0, window.$)(".question-page-pager").length),
                d = void 0;
            if (c) {
                var f = {},
                    d = new z.El({
                        use: [],
                        ag: a.data.Re > a.data.LW
                    });
                d.use("nodeSource", {
                    filter: function(a) {
                        var b = /data-atoken=\"(.*?)\"/;
                        return a.filter(function(a) {
                            a = b.exec(a)[1];
                            return f[a] ? !1 : f[a] = !0
                        })
                    }
                }); (0, window.$)(".zm-item-answer").each(function(a, b) {
                    f[(0, window.$)(b).attr("data-atoken")] = !0
                })
            } else d = new z.El({
                use: [],
                ag: !1
            });
            a.hf = d;
            a.K(d);
            a.o().g(d, "itemcreated",
                function(b) {
                    d.K(kM(a, b.item))
                });
            d.w(b);
            c && (b = d.Gg(), d.use("expandLimit"), "#draft" === window.location.hash && b.done(function() {
                lM(a, a.bb.m());
                a.bb.Hg.focus();
                var b = window.getSelection(),
                    c = window.document.createRange();
                c.selectNodeContents(a.bb.Hg);
                c.collapse(!1);
                b.removeAllRanges();
                b.addRange(c)
            }))
        }
    };
    var kM = function(a, b, c) {
        var d = new XL({
            qa: a.qa
        });
        d.xb(a);
        d.w(b);
        a.ti[d.ib] = d;
        a.hs.push(d.ib);
        a.o().g(d, "change", a.yB);
        d.Rh && (a.Zi = d.ib, d.cP = z.Y, a.o().g(d.Qe, "change", a.AS), a.si = d);
        d.Vi ? d.Rh && a.wo.appendChild(d.m()) : a.tx.push({
            added_time: d.jy,
            vote: c,
            aid: d.ib
        });
        d.Op && z.P(d.m(), !1);
        return d
    };
    var mM = function(a) {
        var b = null,
            c = null,
            d, f = {
                suggest: "建议修改",
                evaluate: "建议修改",
                close: "关闭"
            };
        z.gm.me || "normal" === z.X.status || (c = "被" + f[z.X.status] + '的问题不允许添加新的回答。\x3ca data-tooltip\x3d"s$b$为什么部分问题会被「关闭」「建议修改」？" href\x3d"//www.zhihu.com/question/21290061"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e');
        a.Zi ? (d = a.ti[a.Zi], b = "#answer-" + d.ib, d = d.Op) : a.Lk && (b = "/question/" + z.X.Ia + "/answer/" + a.Lk.url_token, d = a.Lk.is_delete);
        b && (c = d ? '你已经删除了对该问题的回答，如果需要修改，请先 \x3ca href\x3d"javascript:;" name\x3d"cancel_delete"\x3e撤消删除\x3c/a\x3e': '一个问题你只能回答一次，但你可以对 \x3ca href\x3d"' + b + '"\x3e现有的回答\x3c/a\x3e 进行修改'); ! z.Y.Th || a.Zi || a.Lk || (c = '添加回答：\x3ca href\x3d"javascript:;" name\x3d"answer_my_question"\x3e回答自己的提问\x3c/a\x3e');
        a.data.HA && (c = '该问题目前已经被锁定，无法添加新答案。\x3ca href\x3d"/question/19604313" target\x3d"_blank"\x3e问题为什么会被锁定？\x3c/a\x3e');
        c && a.bb.gb(!1, c)
    };
    var nM = function(a) {
        a.js = z.J("zh-question-answer-num");
        a.ks = z.J("zh-question-answer-wrap");
        a.Ci = z.J("zh-question-collapsed-link");
        a.wo = z.J("zh-question-collapsed-wrap");
        a.JF = z.J("zh-question-collapsed-num");
        a.TE = z.J("zh-question-answer-form-wrap");
        a.hl = z.J("zh-question-notification-summary");
        a.Bn = z.J("zh-answers-filter");
        a.vv = z.J("zh-add-question-sug");
        a.js && (a.data.Re = +a.js.getAttribute("data-num"));
        a.ks && (a.data.LW = +a.ks.getAttribute("data-pagesize"));
        a.Ci && a.o().g(a.Ci, "click", a.UY);
        a.vv && a.o().g(a.vv, "click", a.CH);
        a.Bn && z.Hm && a.o().g(a.Bn, "click",
            function(a) {
                a.stopPropagation();
                z.S.add(this.Bn, "activated");
                this.o().ta(window.document, "click",
                    function() {
                        z.S.remove(this.Bn, "activated")
                    })
            })
    };
    var oM = function(a, b) {
        var c = z.J("zh-question-collapsed-switcher");
        b ? (c.name = "collap", a.IF = !0, z.P(a.wo, !0), z.S.add(a.Ci, "zu-question-collap-title-active")) : (a.IF = !1, c.name = "expand", z.P(a.wo, !1), z.S.remove(a.Ci, "zu-question-collap-title-active"))
    };
    var pM = function(a) {
        a.QP = !0;
        var b = a.wo,
            c = window.$.get("/node/QuestionCollapsedAnswerListV2", {
                params: {
                    question_id: a.data.qa
                }
            });
        c.done(function(c) {
            c = z.Ye(c);
            oM(a, !0);
            z.S.remove(b, "zm-question-collapsed-list-loading");
            b.appendChild(c);
            z.A(z.gf(b),
                function(b) {
                    b !== d && kM(a, b, 99999)
                })
        });
        var d = z.gf(b)[0];
        d && (z.P(d, !1), c.done(function() {
            z.P(d, !0)
        }));
        z.P(b, !0);
        z.S.add(b, "zm-question-collapsed-list-loading")
    };
    var qM = function(a) {
        if (a.TE) {
            a.bb = new eL(a.data.wb, z.Y);
            a.K(a.bb);
            a.bb.w(a.TE);
            z.gm.me && z.gm.me.length ? a.bb.X(z.gm.me[0]) : !z.Z.fb && z.B && a.bb.X("\x3cp\x3e\x3c/p\x3e");
            if (! (a.data.HA || a.Zi || a.Lk && a.Lk.url_token)) if (a.data.io && a.data.io.length && a.data.io[3] !== z.Y.ae) a.bb.gb(!1, "只有 " + QI(a.data.io) + " 能回答此问题");
            else if ("normal" === z.X.status || z.gm.me) z.Y.Th || a.bb.Wg();
            a.o().g(a.bb, "change", a.jV);
            a.o().g(a.bb, rM, a.sV);
            a.bb.ready(function() {
                var a = this.qz();
                a && "writing" === window.location.hash.slice(1) && a.execCommand("toggleFullScreen")
            });
            z.Y && z.V.Va(a.bb, {
                    module: "AnswerEditView"
                },
                function() {
                    return {
                        card: {
                            card_type: "Content",
                            content: {
                                type: "Answer",
                                author_id: z.Y.ae,
                                parent_token: String(a.data.Ia)
                            }
                        }
                    }
                })
        }
    };
    var sM = function(a, b) {
        if (b = b || window.location.hash.slice(1)) {
            var c = b.split("-"),
                d = c[1];
            "answer" === c[0] && ((c = a.gH(d)) && (c.Vi && !a.IF ? lM(a, a.Ci) : lM(a, c.m())), a.XK = d)
        }
    };
    var lM = function(a, b) {
        if (b) {
            var c = z.fh(window.document.body).top,
                d = a.gT ? z.Yg(a.hl).height: 0,
                c = {
                    paddingTop: c + d
                };
            "number" === window.$.type(c) && (c = {
                offsetTop: c
            });
            c.RD = KI;
            z.Hr(b, c);
            z.qr(b);
            a.dk && a.dk.Kn()
        }
    };
    var tM = function() {
        bM.call(this);
        this.data = z.X;
        this.qa = this.data.qa
    };
    var uM = function(a) {
        var b = (0, window.$)(".awesome-answer-list").get(0);
        if (b) {
            var c = new z.El({
                use: ["expandLimit"],
                ag: !1
            });
            a.K(c);
            a.o().g(c, "itemcreated",
                function(a) {
                    var b = new z.QD;
                    b.w(a.item);
                    c.K(b)
                });
            c.w(b)
        }
    };
    var vM = function() {
        var a = (0, window.$)("#react-answer-warrants");
        a.length && z.fx("AnswerWarrant").then(function(b) {
            return b.renderList(a)
        })
    };
    var wM = function(a) {
        var b = z.L("zm-item-answer", z.J("zh-question-answer-wrap"));
        if (b) {
            a.Ib = new XL({
                qa: a.qa,
                qG: !0
            });
            a.K(a.Ib);
            a.Ib.w(b);
            b = a.o();
            b.g(a.Ib, "change", a.yB);
            if (a.Ib.Rh) {
                b.g(z.rp, "anon_change",
                    function(a) {
                        xM(this, a.wb)
                    });
                var c = a.Ib.Qe;
                c && b.g(c, "change",
                    function() {
                        var a = (0, z.$a)(c.cb()[0]),
                            a = z.Ye(a);
                        z.Bo(a, this.Ib.h);
                        this.Ib.dispose();
                        wM(this)
                    })
            }
            yM(a);
            a.Ib.iw();
            a.Ib.Ka.yx = !1;
            a.Ib.Ji = !1;
            a.Ib.cq()
        }
    };
    var xM = function(a, b) {
        var c = (0, window.$)("#js-sidebar-author-info");
        if (! (0, window.$)("a[name\x3dfocus]", c).length) {
            var d = {
                    0 : "fullname",
                    1 : "url_token",
                    2 : "avatar_path",
                    3 : "hash",
                    4 : "headline"
                },
                f = z.nb(z.Y,
                    function(a, b, c) {
                        a[d[c]] = b;
                        return a
                    },
                    {}),
                f = (0, z.Rr)(a.dP, {
                    author: !b && f
                });
            c.html(f)
        }
    };
    var zM = function() {
        var a = (0, window.$)("#zh-question-answer-collestions");
        a.length && (0, window.$)("a[name\x3dfocus]", a).click(function() { (0, z.UG)(this, "favlist")
        })
    };
    var yM = function(a) {
        a.Ib ? a.Ib.Op ? (a.Zs.innerHTML = a.Ib.Rh ? '你已经删除了对该问题的回答，如果需要修改，请先 \x3ca href\x3d"javascript:;" name\x3d"cancel_delete"\x3e撤消删除\x3c/a\x3e': "此答案已经被作者删除", z.P(a.Ib.m(), !1)) : z.P(a.Ib.m(), !0) : a.Zs.innerHTML = "此答案已经被作者删除"
    };
    var AM = function(a, b) {
        this.gq = this.zf = 1;
        this.an = b || 4;
        this.items = a || [];
        this.zF = [];
        this.gq = Math.ceil(this.items.length / this.an)
    };
    var BM = function(a, b, c) {
        b = (b - 1) * a.an;
        return a.items.slice(b, b + c)
    };
    var CM = function(a) {
        return BM(a, a.zf, a.an)
    };
    var DM = function(a, b) {
        var c = BM(a, a.zf + 1, 1)[0];
        if (a.mp() && c) {
            var d = a.remove(b);
            a.remove(c);
            a.items.splice(d, 0, c);
            return c
        }
    };
    var EM = function(a) {
        z.Q.apply(this, arguments)
    };
    var FM = function(a) {
        var b = window.$.makeArray((0, window.$)("\x3cdiv\x3e").html(a.qN.html()).children().add(a.Za.children()));
        a.SB = new AM(b, GM);
        a.Pr.on("click",
            function() {
                HM(a, a.Za.find("." + a.gz).length)
            })
    };
    var IM = function(a) {
        a.Za.on("click", "[data-follow]",
            function(b) {
                var c = (0, window.$)(b.target),
                    d = {
                        id: c.data("id"),
                        name: c.closest(".topic-item").find("h3 a").text(),
                        U0: c.data("token")
                    };
                c.hasClass(a.gz) ? (b = (0, window.$)(b.target).closest(".topic-item"), a.SB.remove(b[0]), 1 === a.Za.find("." + a.gz).length && (a.Pr.hasClass("disabled") ? a.tb.fadeOut() : (0, window.setTimeout)(function() {
                    HM(a, 0)
                })), a.dispatchEvent({
                    type: JM,
                    data: d
                })) : c.hasClass(a.yZ) && a.dispatchEvent({
                        type: KM,
                        data: d
                    })
            })
    };
    var HM = function(a, b) {
        a.Pr.hasClass("disabled") || (a.SB.random(b) || (a.Pr.addClass("disabled"), a.tb.find(".hidden-topics-plaza").show()), a.Za.html(CM(a.SB)))
    };
    var LM = function(a) {
        z.Q.apply(this, arguments)
    };
    var MM = function(a) {
        a.o().g(window, "hashchange", a.RH);
        a.RH({
            data: !0
        });
        a.tb.on("click", ".zm-topic-cat-more a",
            function() {
                var b = a.mi.find(NM).length;
                window.$.get("/followed_topics", {
                        offset: b,
                        limit: OM - b
                    },
                    function(b) {
                        b.payload.length && (b = b.payload.map(function(b) {
                            return PM(a, b)
                        }).join(""), a.mi.append(b));
                        a.mi.find(".zm-topic-cat-more").remove(); + (0, window.$)(".topic-feed-title .follow-topics-count").text() > OM && a.mi.append('\x3cli class\x3d"zm-topic-cat-more js-topic-all"\x3e\x3ca target\x3d"_blank" class\x3d"zg-link-gray" href\x3d"' + (0, window.$)(".topic-feed-title a").attr("href") + '"\x3e查看全部\x3c/a\x3e\x3c/li\x3e')
                    })
            })
    };
    var QM = function(a) {
        a.Mr.on("click", "a",
            function(b) { (0, window.$)(b.currentTarget).hasClass("current") || (a.Mr.find("a").removeClass(RM), (0, window.$)(b.currentTarget).addClass(RM), SM(a))
            })
    };
    var TM = function(a, b) {
        var c = a.tb.find(".no-topics"),
            d = a.tb.find(".topic-feed-title a"),
            f = d.find("span"),
            g = +f.text(); (g += b) ? (d.show(), c.hide()) : (d.hide(), c.show());
        f.html(g);
        a.YT && UM(a, g)
    };
    var UM = function(a, b) {
        a.Nw || (a.Nw = (0, window.$)('\x3ca href\x3d"#" class\x3d"new-follow-topics"\x3e新关注 \x3cspan\x3e' + b + "\x3c/span\x3e 个话题，点击查看\x3c/a\x3e"), a.Nw.insertBefore(".topic-recommend").click(function(a) {
            a.preventDefault();
            window.location.reload()
        }));
        a.Nw[b ? "show": "hide"]().find("span").html(b)
    };
    var VM = function(a, b) {
        return a.filter(function(a, d) {
            return (0, window.$)(d).text() === b
        })
    };
    var WM = function(a) {
        a.hf && (a.removeChild(a.hf), a.hf.dispose(), a.hf = null);
        var b = a.Za,
            c = new z.El({
                use: ["autoload"]
            });
        a.K(c);
        c.use("nodeSource", {
            offset: function() {
                return Number(b.find(".feed-item").last().data("score")) || 0
            }
        });
        c.use("childConstructor", {
            factory: z.iE
        }).use("expandLimit");
        c.w(b.get(0));
        a.o().g(c, "next", a.LE);
        a.hf = c
    };
    var SM = function(a, b) {
        var c = a.Mr.find(".current").data("feedType"),
            c = {
                params: {
                    topic_id: b,
                    feed_type: c
                }
            },
            d = a.Za.data("init");
        window.$.extend(!0, d, c);
        a.Za.attr("data-init", JSON.stringify(d));
        a.Za.empty();
        a.hf.Sp() && WM(a);
        a.hf.mh();
        a.bB = a.hf.Gg()
    };
    var XM = function(a, b, c) {
        a.cB && "pending" === a.cB.state() && a.cB.abort();
        a.cB = window.$.get("/node/TopicAvatarV2", {
                params: {
                    topic_id: b,
                    avatar_type: "topic"
                }
            },
            function(b) {
                if (b && b.r) z.T.message("错误");
                else {
                    var f = c.data("href");
                    a.Un.find(".js-topic-title-avatar").html(b).attr("href", f);
                    a.Un.find(".js-topic-title-name").text(c.text()).attr("href", f);
                    a.Un.show()
                }
            })
    };
    var PM = function(a, b) {
        a.rM || (a.rM = (0, z.Rr)(YM));
        return a.rM(b)
    };
    var ZM = function() {
        z.Q.call(this)
    };
    var $M = function() {
        z.Q.call(this);
        this.fY = z.sm.searchKeyword
    };
    var aN = function() {
        var a = (0, window.$)("#js-search-question-form");
        a.length && a.submit(function(b) {
            b.preventDefault();
            b = z.$v.ba();
            b.show();
            z.aw(b, (0, window.$)(".title-input", a).val())
        })
    };
    var bN = function(a) {
        var b = (0, window.encodeURIComponent)(a.fY); (0, window.$)("ul.list[data-paging]").on("click", ".item a[href!\x3d#]",
            function(a) {
                a = a.currentTarget;
                a.host && (a = (0, window.$)(a).closest(".item").index() + 1, z.Ai.set("s-q", b), z.Ai.set("s-i", a), z.Ai.set("sid", (0, z.nG)()))
            })
    };
    var cN = function(a) {
        function b(a, b) {
            var h = (0, window.$)(a);
            window.$.each(b(),
                function(a, b) {
                    h.on("click", a,
                        function(a) {
                            d.apply(null, c(b, a))
                        })
                })
        }
        function c(a, b) {
            return z.mb(a,
                function(a) {
                    return z.qa(a) ? a(b) : a
                })
        }
        var d = z.Aa(z.W, "search");
        b(".related-topics",
            function() {
                return {
                    "a.avatar-link": ["visit_topic", "search_result_card_topic_avatar"],
                    "a.name-link": ["visit_topic", "search_result_card_topic"],
                    "a[href$\x3dquestions]": ["visit_topic_questions", "search_result_card_topic"],
                    "a[href$\x3dtop-answers]": ["visit_topic_topanswers", "search_result_card_topic"],
                    "a[href$\x3dfollowers]": ["visit_topic_followers", "search_result_card_topic"],
                    "button.zg-btn-follow": ["click_follow_topic", "search_result_card_topic"],
                    "button.zg-btn-unfollow": ["click_unfollow_topic", "search_result_card_topic"],
                    'a[href^\x3d"/search?"]': ["click_search_result_more", "search_result_card_topic"]
                }
            });
        b(".related-users",
            function() {
                return {
                    "a.avatar-link": ["visit_people_profile", "search_result_card_people_avatar"],
                    "a.name-link": ["visit_people_profile", "search_result_card_people"],
                    "a[href$\x3danswers]": ["visit_people_answers", "search_result_card_people"],
                    "a[href$\x3dfollowers]": ["visit_people_followers", "search_result_card_people"],
                    "a[href$\x3dposts]": ["visit_people_posts", "search_result_card_people"],
                    "button.zg-btn-follow": ["click_follow_people", "search_result_card_people"],
                    "button.zg-btn-unfollow": ["click_unfollow_people", "search_result_card_people"],
                    'a[href^\x3d"/search?"]': ["click_search_result_more", "search_result_card_people"]
                }
            });
        b(window.document.body,
            function() {
                var a = z.Aa(z.Ja, "search_result_%s_more_button");
                return {
                    "ul.list.contents + .zu-button-more": ["click_search_result_more", a("all")],
                    "ul.list.users + .zu-button-more": ["click_search_result_more", a("user")],
                    "ul.list.topics + .zu-button-more": ["click_search_result_more", a("topic")]
                }
            });
        b(".search-tabs",
            function() {
                var a = z.Aa(z.Ja, "search_result_tab_%s");
                return {
                    'a[href^\x3d"/search?type\x3dquestion"]': ["click_search_result_tab", a("all")],
                    'a[href^\x3d"/search?type\x3dpeople"]': ["click_search_result_tab", a("user")],
                    'a[href^\x3d"/search?type\x3dtopic"]': ["click_search_result_tab", a("topic")]
                }
            });
        b(".secondary-tabs",
            function() {
                return {
                    'a:not([href*\x3d"sort\x3dupvote"])': ["click_search_result_relatrank"],
                    'a[href*\x3d"sort\x3dupvote"]': ["click_search_result_agreerank"]
                }
            });
        b(".range-selector",
            function() {
                var a = z.Aa(z.Ja, "search_result_range_%s");
                return {
                    'a[href*\x3d"range\x3d1d"]': ["click_search_result_range", a("1d")],
                    'a[href*\x3d"range\x3d1w"]': ["click_search_result_range", a("1w")],
                    'a[href*\x3d"range\x3d3m"]': ["click_search_result_range", a("3m")]
                }
            });
        b("ul.list.contents",
            function() {
                function a() {
                    return function(a) {
                        return "search_result_all_list_" + ((0, window.$)(a.target).closest(".item").index() + 1) + ""
                    }
                }
                return {
                    ".js-title-link": ["visit_question", a()],
                    ".js-expand, .summary": ["click_expand", a()],
                    ".js-collapse": ["click_collapse_answer", a()],
                    "a.zg-follow": ["click_follow_question", a()],
                    "a.zg-unfollow": ["click_unfollow_question", a()]
                }
            });
        b("ul.list.users",
            function() {
                function a(b) {
                    return function(a) {
                        return "search_result_user_list_" + ((0, window.$)(a.target).closest(".item").index() + 1) + (b || "")
                    }
                }
                return {
                    "a.avatar-link": ["visit_people_profile", a("_avatar")],
                    "a.name-link": ["visit_people_profile", a()],
                    "a[href$\x3danswers]": ["visit_people_answers", a()],
                    "a[href$\x3dfollowers]": ["visit_people_followers", a()],
                    "a[href$\x3dposts]": ["visit_people_posts", a()],
                    "button.zg-btn-follow": ["click_follow_people", a()],
                    "button.zg-btn-unfollow": ["click_unfollow_people", a()]
                }
            });
        b("ul.list.topics",
            function() {
                function a(b) {
                    return function(a) {
                        return "search_result_topic_list_" + ((0, window.$)(a.target).closest(".item").index() + 1) + (b || "")
                    }
                }
                return {
                    "a.avatar-link": ["visit_topic", a("_avatar")],
                    "a.name-link": ["visit_topic", a()],
                    "a[href$\x3dquestions]": ["visit_topic_questions", a()],
                    "a[href$\x3dfollowers]": ["visit_topic_followers", a()],
                    "button.zg-btn-follow": ["click_follow_topic", a()],
                    "button.zg-btn-unfollow": ["click_unfollow_topic", a()]
                }
            });
        a.o().g(a, "click!",
            function(a) {
                "comment" === a.namespace && a.Nc.fill("category", "search").fill("label", "search_result_answer")
            })
    };
    var dN = function() {
        var a = z.xj(window.location.href).Ed().get("q");
        return {
            raw_query: a,
            restrict_type: {
                people: "User",
                topic: "Topic"
            } [a]
        }
    };
    var eN = function() {
        z.H.call(this);
        this.aA = [];
        this.ia = []
    };
    var fN = function(a) {
        for (var b = [], c = 0; 3 > c; c++) {
            var d = a.ia.shift();
            d && b.push(d)
        }
        3 === b.length ? (a.Hu.innerHTML = b.join(""), gN(a)) : hN(a)
    };
    var gN = function(a) {
        var b = z.Co("suggest-item", a.Hu);
        z.A(b,
            function(a) {
                this.aA.push(a.id.split("-")[1])
            },
            a)
    };
    var hN = function(a) {
        a.Hu.innerHTML = '\x3cimg class\x3d"bubble-loading" src\x3d"' + z.Z.dD + '/img/noti-loading.gif"\x3e';
        window.$.post("/lookup/suggest_member", {
            ids: a.aA.join(",")
        }).done((0, z.t)(a.vV, a))
    };
    var iN = function(a) {
        z.Q.apply(this, arguments)
    };
    var jN = function(a) {
        var b = {}; (0, window.$)("meta", a).each(function() {
            var a = (0, window.$)(this);
            b[a.attr("name")] = a.attr("content")
        });
        return b
    };
    var kN = function(a) {
        iN.apply(this, arguments)
    };
    var lN = function(a) {
        var b = (0, window.$)(a.m()),
            c = (0, window.$)(".js-list", b),
            d = (0, window.$)(".js-hidden-list", b),
            f = (0, window.$)(".pager", b),
            g = window.$.makeArray((0, window.$)("\x3cdiv\x3e").html(d.html()).children().add(c.children())),
            h = new AM(g, 4);
        h.Uc(function(a) {
            f.find(".next").toggleClass("disabled", !a.mp);
            f.find(".prev").toggleClass("disabled", !a.Tt)
        }); (0, window.$)(".pager", b).on("click", ".next:not(.disabled)",
            function() {
                h.next();
                c.html(CM(h))
            }).on("click", ".prev:not(.disabled)",
            function() {
                h.prev();
                c.html(CM(h))
            });
        var g = (0, window.$)(g),
            k = window.innerWidth / 100,
            l = c.children().length,
            n = b.find(".items"),
            q = 45.5 * k - 16.3 + 8;
        z.Z.fb && n.outerWidth(q * l - 7);
        b.on("click", ".js-ignore",
            function(b) {
                var c = (0, window.$)(b.target).closest(".item");
                window.$.post("/actioncard/uninterest", {
                    type: a.Fj,
                    token: c.data("token"),
                    reason: c.data("reason")
                });
                var d = DM(h, c[0]),
                    f = c.siblings().length;
                if (0 === f && !d) return a.dispatchEvent("Ignore");
                c.fadeOut(function() {
                    return d ? c.replaceWith(d) : c.remove()
                });
                z.Z.fb && n.outerWidth(q * f - 7);
                z.V.trackEvent(b.target, {
                    action: "Ignore",
                    element: "Button"
                })
            });
        var v = (b = "suggested_members" === a.Fj) ? "UserItem": "TopicItem",
            F = b ? "User": "Topic",
            K = "suggested_members" === a.Fj ? "suggestedUsers": z.cb(a.Fj, "_").replace("_", "");
        g.each(function(a, b) {
            return z.V.Va(b, {
                    module: v,
                    index: ""
                },
                function() {
                    return {
                        card: {
                            card_type: K,
                            content: {
                                type: F,
                                token: String((0, window.$)(b).data("token"))
                            }
                        }
                    }
                })
        });
        a.vH = function() {
            return {
                list: {
                    list_size: c.find(".item").length,
                    new_item_size: d.find(".item").length
                }
            }
        }
    };
    var mN = function(a) {
        a = a.content_type;
        z.kD.call(this, {
                commercial_question: "question",
                question: "question",
                article: "post",
                promotion: "promotion"
            } [a] || a);
        this.Ji = !1
    };
    var nN = function(a) {
        for (var b = a.m(), c = [{
            value: "close",
            label: "不感兴趣",
            Nf: a.Kb.bind(a)
        },
            {
                value: "agreement",
                label: "知乎广告介绍",
                Nf: a.sW
            }], d = new z.Zz, c = z.ha(c), f = c.next(); ! f.done; f = c.next()) f = f.value,
            f = new z.Uz(f.label, f),
            d.Ja(f);
        b = (0, window.$)(".AdFeed-menuBtn", b)[0];
        c = new z.xA("ad", d);
        c.Hk.xf = 7;
        c.Tb = z.Hl;
        c.w(b);
        z.Ac(c, a);
        z.V.Va(d, {
                module: "AdMenu"
            },
            function() {
                return {
                    card: {
                        card_type: "Content",
                        content: a.Wo()
                    }
                }
            });
        a.o().g(d, "action",
            function(a) {
                a = a.target;
                a.Y().Nf(a)
            })
    };
    var oN = function() {
        z.kD.call(this, "roundtable")
    };
    var pN = function(a, b) {
        z.Q.call(this);
        this.qE = a;
        this.SQ = b
    };
    var qN = function(a, b) {
        var c = (0, window.$)('meta[itemprop\x3d"ZReactor"]', b);
        c.length || (c = (0, window.$)(a.h).closest(".feed-item").find('meta[itemprop\x3d"ZReactor"]'));
        var d = (0, window.$)(".feed-source [data-timestamp]", b).data("timestamp"),
            c = c.data("meta");
        if (!c) return null;
        var f = c.source_type.split("_"),
            g = function(a) {
                a = a[0];
                return "promotion" === a ? null: {
                    member: "User",
                    topic: "Topic",
                    column: "Column",
                    roundtable: "Roundtable",
                    favorites: "Collection"
                } [a]
            } (f),
            d = {
                actor_type: g,
                action_type: function(a) {
                    var b = a[a.length - 2];
                    return "topic" === a[0] && "popular" === b ? "Follow": {
                        answer: "Publish",
                        ask: "Publish",
                        create: "Publish",
                        follow: "Follow",
                        voteup: "Upvote",
                        publish: "Publish",
                        join: "Join",
                        acknowledged: "Upvote",
                        popular: "Upvote",
                        warmingup: "Recommend",
                        "new": "Publish",
                        add: "Publish",
                        promotion: "Recommend",
                        collect: "Collect"
                    } [b]
                } (f),
                action_timestamp: d
            };
        "User" === g ? d.actor_member_hash_id = c.source.filter(function(a) {
            return "member" === a[0]
        }).map(function(a) {
            return a[1]
        }) : d.actor_id = c.source.filter(function(a) {
            return a[0] === f[0]
        }).map(function(a) {
            return String(a[1])
        });
        return d
    };
    var rN = function(a, b) {
        if (a.qE) {
            var c = a.Dc = new a.qE(a.SQ),
                d = z.L("feed-content", b) || z.L("feed-main", b);
            a.K(c);
            a.Ji && (c.Ji = !0);
            d && c.w(d);
            c.mf && c.Kb && z.pl(c.mf.register("i g",
                function() {
                    return c.Kb()
                }), {
                group: "操作",
                name: "不感兴趣"
            });
            a.o().g(c, "Ignore",
                function() { (0, window.$)(b).slideUp(function() {
                    a.dispose(); (0, window.$)(b).remove()
                })
                })
        }
    };
    var sN = function(a) {
        var b = (0, window.$)(a);
        a = b.data("type");
        b = b.data("extra-options");
        return new pN({
                ac: kN,
                ad: mN,
                p: z.YD,
                a: z.QD,
                q: z.$D,
                r: oN,
                c: z.cE,
                l: z.aE,
                f: z.bE,
                e: z.dE,
                pin: z.fE,
                eventcard: z.hE
            } [a] || z.Q, b)
    };
    var tN = function(a) {
        uN || (this.Po = a, this.li = (0, window.$)(this.Po.m()), (0, window.setTimeout)((0, z.t)(this.Db, this)))
    };
    var vN = function(a) { (0, window.setTimeout)(function() {
            window.$.ajax({
                type: "POST",
                url: "/zreactor/deliver",
                data: JSON.stringify(a),
                contentType: "application/json",
                processData: !1
            })
        },
        50)
    };
    var wN = function(a) {
        var b = xN[a.li.data("type")];
        DI(a.li[0],
            function() {
                yN(a, "display")
            },
            a.Po);
        a.Po.o().g(a.Po, "expand",
            function(c) {
                c.target instanceof z.kD && yN(a, "expand_" + b)
            }).g(a.Po, "collapse",
            function(c) {
                c.target instanceof z.kD && yN(a, "collapse_" + b)
            });
        a.li.on("click", ".js-noHelp",
            function() {
                var b = !!(0, window.$)(this).data("revert");
                yN(a, b ? "unhelpful": "revert_unhelpful"); (0, window.$)(this).data("revert", !b)
            });
        window.$.each({
                ".actioncard-body .more": "view_all",
                ".actioncard-body .next:not(.disabled)": "next_page",
                ".actioncard-body .prev:not(.disabled)": "prev_page",
                ".actioncard-body .items a": "open_topic",
                ".js-validate, .js-headline-input, .js-choose-image": "open_form",
                '.zg-follow[data-follow^\x3d"t:"], .zg-btn-follow[data-follow^\x3d"t:"]': "follow_topic",
                '.zg-unfollow[data-follow^\x3d"t:"], .zg-btn-unfollow[data-follow^\x3d"t:"]': "unfollow_topic",
                'a.zg-follow:not([data-follow^\x3d"t:"]):not([data-follow^\x3d"m:"])': "follow_" + zN[b],
                'a.zg-unfollow:not([data-follow^\x3d"t:"]):not([data-follow^\x3d"m:"])': "unfollow_" + zN[b],
                "a.js-toggleCommentBox": "expand_comments",
                'a[name\x3d"addnew"]': "comment",
                ".feed-content h2 a": "open_" + AN[b],
                "a.ignore:not(.close)": "uninterest",
                "a.revert": "revert_uninterest",
                "a.ignore.close": "confirm_uninterest",
                "button.up.pressed": "vote_up_" + b,
                "button.down.pressed": "vote_down_" + b,
                "button.up:not(.pressed)": "revert_vote_up_" + b,
                "button.down:not(.pressed)": "revert_vote_down_" + b,
                ".js-collect": "collect_answer",
                ".js-thank": "thanks",
                ".js-share": "share",
                ".js-report": "report",
                ".js-write-answer": "open_write_answer",
                "a.answer-date-link": "open_answer"
            },
            function(b, d) {
                a.li.on("click", b,
                    function() {
                        yN(a, d)
                    })
            })
    };
    var yN = function(a, b) {
        var c = window.$.extend({},
            BN(a), {
                action_type: b,
                time: (0, z.I)()
            });
        c.object_id && ("display" === b ? a.XW(c) : vN(c))
    };
    var BN = function(a) {
        var b = a.eE,
            c = window.$.extend({},
                b.data("meta"), {
                    create: a.li.find(".source .time").data("timestamp"),
                    offset: (0, window.$)(".feed-item").index(a.li) + 1
                });
        return {
            mid: z.sm.ga_vars.user_hash,
            object_type: xN[a.li.data("type")],
            object_id: b.data("id"),
            object_meta: c,
            context: CN,
            others: ""
        }
    };
    var DN = function(a, b, c) {
        z.vE.call(this, a, b, c);
        this.oJ = !0
    };
    var EN = function() {
        z.Q.call(this);
        this.ff = [];
        this.Ig = 0;
        this.UI = !!(0, window.$)("#is-topstory").length;
        this.RG = "feed-item-hook"
    };
    var FN = function(a) {
        var b = a.m(),
            c = a.iQ = "/node/" + a.wa.data("init").nodename,
            d = a.mq = new DN(b, c, !0);
        z.V.Va(b, {
                module: a.UI ? "TopStoryFeedList": "HomeFeedList"
            },
            function() {
                return {
                    list: {
                        list_size: d.mb().length,
                        new_item_size: a.Ig || 0
                    }
                }
            });
        a.o().g(d, "itemcreated",
            function(a) {
                this.ff.push(a.data.kU)
            }).g(d, "ignore",
            function(a) {
                GN(this, a.key, a.value)
            });
        d.lj(a.RG);
        d.xb(a);
        d.init();
        if (a.wa.data("delayed")) z.rp.on("guider2:topicselected", a.jW.bind(a))
    };
    var HN = function(a) {
        a.wa.on("click", ".js-more-similar",
            function() { (0, window.$)(this).parent().slideUp("fast").nextUntil(":not(.hidden)").slideDown("fast")
            })
    };
    var GN = function(a, b, c) {
        a.ff.forEach(function(a) {
            a.hd[b] === c && (0, window.$)(a.h).fadeOut(150)
        })
    };
    var IN = function(a) {
        a.wa.on("click contextmenu", "a",
            function(a) {
                var c = a.currentTarget.href,
                    d = c.includes("topic/"),
                    c = c.includes("people/");
                if (d || c) if ("click" !== a.type || a.ctrlKey || a.metaKey) c = "",
                    c = "contextmenu" === a.type ? "contextmenu": a.ctrlKey ? "ctrl_click": "meta_click",
                    z.ti({
                        category: "open_link_in_new_tab",
                        action: c,
                        label: d ? "topic": "people"
                    })
            })
    };
    var JN = function() {
        this.interval = 3E4
    };
    var KN = function(a) {
        a.ge || (a.ge = (0, window.setInterval)((0, z.t)(function() {
                LN()
            },
            a), a.interval))
    };
    var LN = function() { (0, window.$)(".feed-item-hook .time").each(function() { (0, window.$)(this).text(z.fj((0, window.$)(this).data("timestamp")))
    })
    };
    var MN = function() {};
    var NN = function(a) {
        z.Q.call(this);
        this.config = window.$.extend(!0, {},
            {
                Cq: {},
                style: {},
                jc: {},
                Sy: {},
                Oe: void 0,
                ee: void 0,
                Jj: MN,
                bo: MN
            },
            a)
    };
    var ON = function() {};
    var PN = function(a) {
        z.Q.call(this);
        this.config = window.$.extend(!0, {},
            {
                state: "default",
                bp: "defaultGuide",
                className: "zh-guides",
                Ul: {},
                jF: ON,
                jx: ON,
                rv: []
            },
            a);
        this.ap = [];
        this.init();
        this.render()
    };
    var QN = function(a) {
        RN(a, "restart", {
            GI: !0,
            bM: function() {
                a.init();
                a.Wv()
            }
        })
    };
    var SN = function(a) {
        TN(a);
        a.config.jx(a);
        RN(a, "done");
        a.H.trigger(UN.DONE)
    };
    var VN = function(a, b) {
        TN(a);
        var c;
        a: {
            var d = a.ap[b].config;
            c = d.interval;
            if (d.MA) c = !1;
            else {
                if (c && (d = WN(a)) && (new Date).getTime() - d.date < c) {
                    c = !1;
                    break a
                }
                c = !0
            }
        }
        c ? (a.$r = b, a.show(), a.ap[a.$r].show(), RN(a, a.Jq && "restart" === a.Jq.state ? "restart-open": "open", {
            SI: !0
        })) : a.PJ()
    };
    var TN = function(a) {
        a.ap.forEach(function(a) {
            a.hide()
        })
    };
    var RN = function(a, b, c) {
        c = void 0 === c ? {
            GI: !1,
            SI: !1,
            bM: ON
        }: c;
        var d = WN(a);
        if (!c.GI) {
            var f = "open done close restart restart-open forever nevershow".split(" ");
            d && (b = f[Math.max(f.indexOf(a.config.state), f.indexOf(d.state), f.indexOf(b))])
        }
        b = {
            index: a.$r,
            state: b,
            date: d ? c.SI ? (new Date).getTime() : d.date: (new Date).getTime()
        };
        JSON.stringify(b) !== JSON.stringify(d) && (XN[a.config.bp] = b, window.$.ajax({
            url: "/settings/account/org",
            data: {
                guide: JSON.stringify(XN)
            },
            type: "PUT",
            success: c.bM
        }))
    };
    var WN = function(a) {
        var b = XN;
        return b && b[a.config.bp]
    };
    var YN = function(a, b) {
        var c = (0, window.$)(a),
            d = c.clone(!0).appendTo(b),
            f = c.offset(),
            c = {
                width: c.width(),
                height: c.height()
            },
            f = Object.assign({
                    position: "absolute",
                    "z-index": 6
                },
                f, c);
        d.css(f);
        return d
    };
    var ZN = function(a) {
        return (0, window.$)('\n        \x3cdiv class\x3d"TryOpt"\x3e\n          \x3cdiv class\x3d"TryOpt-btnThumb"\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"TryOpt-thumbArrow sprite-home-thumb-arrow"\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"TryOpt-btnFollow sprite-home-btn-follow"\x3e\x3c/div\x3e\n        \x3c/div\x3e').appendTo(a)
    };
    var $N = function(a) {
        var b = (0, window.$)(".TryOpt", a);
        0 === b.length && (b = ZN(a), (0, window.$)(".TryOpt-btnThumb", b).on("click",
            function() { (0, window.$)(a).trigger(UN.NEXT_GUIDE)
            }));
        b.css((0, window.$)("#zh-question-list").offset());
        return b
    };
    var aO = function() {
        z.Q.call(this);
        this.iR = new PN(bO);
        this.iX = new PN(cO);
        this.eY = new PN(dO)
    };
    var eO = function() {
        z.Q.call(this)
    };
    var fO = function() {
        var a = (0, window.$)("#js-global-notify");
        if (a.length) {
            var b = new z.qv;
            b.w(a[0]);
            AI(b); (0, window.$)(".zu-global-notify-close", a).click(function() {
                var c = (0, window.$)(this).data("id");
                window.$.post("/notice/read", {
                    nid: c
                });
                b.dispose();
                a.remove()
            })
        }
    };
    var gO = function() { (0, window.$)(".js-HomeEntry-ask").click(function(a) {
        z.W("question_answer", "click_add_question", "Feed_above");
        z.V.trackEvent(a.target, {
            action: "Question",
            is_intent: !0
        });
        z.Tr(function() {
                z.$v.ba().show()
            },
            !0, "#ask")()
    }); (0, window.$)(".js-HomeEntry-answer").click(function(a) {
        z.V.trackEvent(a.target, {
            action: "Answer",
            is_intent: !0
        })
    }); (0, window.$)(".js-HomeEntry-post").click(function(a) {
        z.W("feed", "click_write_post", "Feed_above");
        z.V.trackEvent(a.target, {
            action: "Post",
            is_intent: !0
        })
    })
    };
    var hO = function() {
        z.Q.call(this)
    };
    var iO = function() {
        z.Q.call(this);
        this.Sh = "explore";
        this.UQ = "explore_feed"
    };
    var jO = function(a) {
        var b = (0, window.$)("#js-explore-tab");
        if (b.length) {
            var c = (0, window.$)(".tab-panel", b),
                d = (0, window.$)(".tab-nav", b),
                b = function() {
                    var b = {
                            "daily-hot": 0,
                            "monthly-hot": 1
                        } [window.location.hash.slice(1)] || 0;
                    d.removeClass("active").eq(b).addClass("active");
                    b = c.hide().eq(b).show().children("[data-type]");
                    if (!b.data("inited")) {
                        b.data("inited", !0);
                        var g = {
                                daily: qK,
                                monthly: sK
                            } [b.data("type")],
                            g = new kO(g);
                        g.use("expandLimit");
                        a.K(g);
                        g.w(b[0])
                    }
                };
            a.o().g(window, "hashchange", b);
            b()
        }
    };
    var lO = function(a) {
        var b = (0, window.$)("#zh-recommend-list-full\x3e.zh-general-list")[0];
        if (b) {
            var c = new z.El;
            c.use("nodeSource");
            c.use("childConstructor", {
                factory: z.iE
            });
            a.K(c);
            c.w(b)
        }
    };
    var mO = function() {
        function a(a, b, c, d, l) {
            c = (0, window.$)(c.target).closest(d, c.delegateTarget).index();
            z.xi(a, b, l, c + 1)
        }
        var b = z.Aa(a, "view_answer", "visit_answer"),
            c = z.Aa(a, "view_topic", "visit_topic"),
            d = z.Aa(a, "view_roundtable", "visit_roundtable"); (0, window.$)("#zh-recommend").on("click", "a.question_link",
            function(a) {
                b(a, ".feed-item", "editor_recommendations_question_title")
            }); (0, window.$)('div[data-type\x3d"daily"]').on("click", "a.question_link",
            function(a) {
                b(a, ".feed-item", "daily_trending_question_title")
            }); (0, window.$)('div[data-type\x3d"monthly"]').on("click", "a.question_link",
            function(a) {
                b(a, ".feed-item", "monthly_trending_question_title")
            }); (0, window.$)("ul.hot-topics").on("click", 'a[href*\x3d"topic"]',
            function(a) {
                c(a, "li", "explore_sidebar_trending_topics_name")
            }); (0, window.$)("ul.hot-roundtables").on("click", 'a[href*\x3d"roundtable"]',
            function(a) {
                d(a, "li", "explore_sidebar_trending_roundtable")
            }); (0, window.$)("ul.hot-topics").on("click", "img.avatar",
            function(a) {
                c(a, "li", "explore_sidebar_trending_topics_avatar")
            })
    };
    var kO = function(a) {
        z.zl.call(this, {
            source: nO(a),
            use: ["autoload"]
        })
    };
    var nO = function(a) {
        return function() {
            return a((0, window.$)(this.mb()).last().data("offset")).then(function(a) {
                return {
                    results: a
                }
            })
        }
    };
    var oO = function(a) {
        z.Q.apply(this, arguments)
    };
    var pO = function(a) {
        var b = a.Wr;
        return function() {
            return (0, z.t)(function(a) {
                    var d = Array.from(b.children(".zm-tag-editor-edit-item").map(function(a, b) {
                        return (0, window.$)(b).find('a[name\x3d"remove"]').data("url-token")
                    }));
                    return a.filter(function(a) {
                        return d.every(function(b) {
                            return Number(b) !== Number(a[2]) && 3 < a.length
                        })
                    })
                },
                this)
        }
    };
    var qO = function(a, b, c) {
        window.$.post("/node/QuestionExpertTopicsV2", {
            method: b,
            params: {
                url_token: c
            }
        }).then(function() {
            a.dispatchEvent(rO)
        })
    };
    var sO = function(a) {
        a.Wr.on("click", 'a[name\x3d"remove"]',
            function(b) { (0, window.$)(b.currentTarget).parent().remove();
                tO(a);
                qO(a, "delete_expert_topic", (0, window.$)(b.currentTarget).data("url-token"))
            })
    };
    var tO = function(a) {
        var b = a.Wr.children(".zm-tag-editor-edit-item").length;
        b >= uO ? (a.nE.hide(), a.Tw.show()) : (a.nE.show(), a.Tw.hide());
        0 === b ? a.oE.show() : a.oE.hide()
    };
    var vO = function(a) {
        z.Q.apply(this, arguments)
    };
    var wO = function(a) {
        var b = (0, window.$)(".QuestionSuggestList .zh-general-list");
        b.length && (a.kE = (0, window.$)(".QuestionSuggestListTitle"), a.lE = (0, window.$)(".QuestionSuggestList"), a.Ur = b, xO(a), yO(a), b.on("click", ".question_link",
            function() {
                z.W("question_answer", "click_visit_question_page", "Questions_For_You")
            }))
    };
    var xO = function(a) {
        var b = (0, window.$)(".QuestionSuggestListTitle .js-feed-switcher");
        if (b.length) b.on("click", "a",
            function(c) {
                c = (0, window.$)(c.currentTarget);
                c.hasClass("current") || (b.find("a").removeClass("current"), c.addClass("current"), zO(a, c.data("feed-node")))
            })
    };
    var zO = function(a, b) {
        var c = {
            params: {
                offset: 0
            }
        };
        b && (c.nodename = b);
        var d = a.Ur.data("init");
        window.$.extend(!0, d, c);
        a.Ur.attr("data-init", JSON.stringify(d));
        a.Ur.empty();
        a.En && (a.removeChild(a.En), a.En.dispose(), a.En = null);
        c = a.Ur;
        d = new z.El({
            use: ["autoload"]
        });
        a.K(d);
        d.use("nodeSource", {});
        d.w(c.get(0));
        a.En = d;
        a.En.mh();
        a.En.Gg()
    };
    var yO = function(a) {
        var b = new oO;
        a.o().g(b, rO,
            function() {
                b.Wr.children(".zm-tag-editor-edit-item").length ? (a.lE.show(), a.kE.show(), zO(a)) : (a.lE.hide(), a.kE.hide())
            });
        b.w((0, window.$)(".MyTopicWrapper")[0])
    };
    var AO = function(a) { (0, window.$)(a.m()).on("click", 'a[name\x3d"dislike"]',
        function(a) {
            var c = (0, window.$)(a.currentTarget).closest(".feed-item");
            a = c.find('meta[itemprop\x3d"question-url-token"]').attr("content");
            window.$.post("/api/personalized_questions/ignore", {
                question_token: a
            });
            c.slideUp(function() {
                c.remove()
            });
            z.W("question_answer", "click_ignore_question", "Questions_For_You")
        })
    };
    var BO = function(a) {
        z.Q.apply(this, arguments)
    };
    var CO = function(a) {
        var b = (0, window.$)(".js-desktop-share"),
            c = b.data("promotion");
        if ("SixInnovations" === c) {
            var d = b.find('button[name\x3d"weibo"]'),
                f = b.find('button[name\x3d"wechat"]'),
                g = b.find("img");
            f.on("click",
                function() {
                    g.toggleClass("campaign-share-popout--open")
                }); (0, window.$)(window.document).on("click",
                function(a) { (0, window.$)(a.target).hasClass("campaign-share-popout") || (0, window.$)(a.target).hasClass("campaign-shareButton--wechat") || g.removeClass("campaign-share-popout--open")
                });
            d.on("click",
                function() {
                    a.un(c)
                })
        } else if ("001" === c) {
            var b = (0, window.$)(".promotion-shareButton--weibo"),
                d = (0, window.$)(".promotion-shareButton--wechat"),
                h = (0, window.$)(".promotion-wechatShareCard"),
                f = z.Kw(window.location.href); (0, window.$)("img", h).attr("src", f);
            d.on("click",
                function() {
                    return h.toggleClass("promotion-wechatShareCard--show")
                });
            b.on("click", a.un)
        }
    };
    var DO = function() {
        function a() {
            f.css("transform", "translateX(" + (h * b + -10 * b) + "px)");
            0 === b ? c.css("display", "none") : b === -1 * (k - 4) ? d.css("display", "none") : (c.css("display", "block"), d.css("display", "block"))
        }
        var b = 0,
            c = (0, window.$)(".campaign-chapter-list-prev"),
            d = (0, window.$)(".campaign-chapter-list-next"),
            f = (0, window.$)(".campaign-chapter-list"),
            g = f.find("li"),
            h = (0, window.$)(g[0]).outerWidth(!0),
            k = g.length;
        a();
        c.click(function() {
            b += 1;
            a()
        });
        d.click(function() {--b;
            a()
        })
    };
    var EO = function() { (0, window.$)(".campaign-summary-expand");
        var a = (0, window.$)(".campaign-summary-shorten"),
            b = (0, window.$)(".campaign-summary-complete");
        a.click(function() {
            a.remove();
            b.css("display", "block")
        })
    };
    var CI = {};
    z.YD.prototype.Nz = z.qn(50,
        function(a) {
            a = (0, window.$)(a.currentTarget);
            var b = a.data();
            z.T.confirm(a.attr("title"), z.Cl("确定%s吗？", a.text()),
                function(a) {
                    a && (window.$.post(z.Cl("/%s/uninterest", b.type), {
                        id: b.id
                    }), this.dispatchEvent("Ignore"))
                },
                this)
        });
    z.YD.prototype.Xz = z.qn(49,
        function() {
            window.$.post("/post/undo_uninterest", {
                id: this.Bb
            })
        });
    z.QD.prototype.Kb = z.qn(48,
        function() {
            window.$.post("/question/uninterest", {
                qid: this.hd["question-id"]
            });
            this.dispatchEvent("Ignore")
        });
    z.YD.prototype.Kb = z.qn(47,
        function(a) {
            window.$.post("/post/uninterest", {
                id: this.Bb
            });
            a || this.dispatchEvent("Ignore")
        });
    z.$D.prototype.Kb = z.qn(46,
        function() {
            window.$.post("/question/uninterest", {
                qid: this.hd["question-id"]
            });
            this.dispatchEvent("Ignore")
        });
    z.aE.prototype.Kb = z.qn(45,
        function() {
            window.$.post("/live/uninterest", {
                lid: this.hd["live-id"]
            });
            this.dispatchEvent("Ignore")
        });
    z.cE.prototype.Kb = z.qn(44,
        function() {
            window.$.post("/column/uninterest", {
                id: this.Bb
            });
            this.dispatchEvent("Ignore")
        });
    z.dE.prototype.Kb = z.qn(43,
        function() {
            window.$.post("/ebook/uninterest", {
                lid: this.hd["ebook-id"]
            });
            this.dispatchEvent("Ignore")
        });
    z.fE.prototype.Kb = z.qn(42,
        function() {
            window.$.post("/pin/uninterest", {
                pid: this.hd["pin-id"]
            });
            this.dispatchEvent("Ignore")
        });
    z.pA.prototype.HC = z.qn(41,
        function(a) {
            this.vo = a
        });
    z.Sv.prototype.qz = z.qn(39,
        function() {
            return this.Ta
        });
    z.At.prototype.Cl = z.qn(32,
        function(a, b, c, d) {
            z.ma(a) ? this.mj(a) : this.mj([a, b, c, d])
        });
    z.$v.prototype.Cl = z.qn(31,
        function(a, b, c, d) {
            this.Ma.Cl(a, b, c, d)
        });
    z.Zs.prototype.JC = z.qn(30,
        function(a) {
            this.Fy = z.yb(arguments, 0)
        });
    z.Dd.prototype.pm = z.qn(3,
        function() {
            return this.pG
        });
    BI.prototype.sk = !0;
    BI.prototype.yh = function() {
        return this.iD
    };
    BI.prototype.toString = function() {
        return "Const{" + this.iD + "}"
    };
    var FI = {},
        II = {};
    EI.prototype.sk = !0;
    EI.prototype.yh = function() {
        return this.Wk
    };
    EI.prototype.hA = !0;
    EI.prototype.pm = function() {
        return 1
    };
    var XI = /^[-,."'%_!# a-zA-Z0-9]+$/;
    HI.prototype.sk = !0;
    HI.prototype.yh = function() {
        return this.NK
    };
    HI.prototype.hA = !0;
    HI.prototype.pm = function() {
        return 1
    };
    var ZI = /^(?:(?:https?|mailto|ftp):|[^&:/ ? #] * ( ? :[/?#]|$))/i, YI = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        $I = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        VI = /^[a-zA-Z0-9-]+$/, WI = {
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            TEMPLATE: !0
        }; z.y(LI, z.It); LI.prototype.Ne = function(a, b, c) {
        var d = this;
        this.Pb || (this.Pb = !0, this.vO(c).then(function(a) {
            d.Pb = !1;
            a && c && c.length && (d.DC = c, d.data.push(c), z.Ht(d), z.Dt(d), d.Nd(), d.ab.value = "", d.dispatchEvent("select"), z.Gt(d))
        }))
    }; LI.prototype.Ym = function(a) {
        var b = this;
        this.Pb || this.rQ(a).then(function(a) {
            b.Pb = !1;
            a && (z.Dt(b), b.Nd(), z.Gt(b))
        })
    }; LI.prototype.ao = function() {
        if (0 === this.O.Oa.length && this.ab.value && window.document.activeElement === this.ab) {
            var a = z.M("div", {
                    className: "zu-autocomplete-empty"
                },
                "没有名字为 " + (0, window.$)(this.ab).val() + " 的话题"); (0, window.$)(this.O.M.h).html(a).show()
        } else 1 < this.O.Oa.length && !this.O.Oa[0][4] && z.rs(this.O)
    }; z.y(MI, z.At); z.e = MI.prototype; z.e.Of = function(a) {
        this.O = new z.zt("/topic/autocomplete", this.ab, null, null, a, !0);
        this.O.Ug(!0);
        this.O.Gk = this.Be;
        this.O.sn(this.Yf());
        this.o().g(this.O, "select", this.Tf);
        this.o().g(this.O, "suggestionsupdate", this.ao)
    }; z.e.w = function(a) {
        this.h = a;
        this.Ae(!0);
        this.ic()
    }; z.e.gm = function() {
        this.Gc || (this.Gc = z.L("zm-tag-editor-editor", this.h), this.pe = z.L("zm-tag-editor-command-buttons-wrap", this.h), this.ab = z.Me("input", "", this.h)[0], this.Of(this.pe))
    }; z.e.Nd = function() {}; z.e.ne = function() {}; z.e.Tf = function() {}; z.e.FB = function() {}; z.e.zg = function() {
        return this.O.zg()
    }; z.y(NI, z.At); z.e = NI.prototype; z.e.w = function(a) {
        this.h = a;
        this.Yg = z.L("zm-tag-editor-labels", this.h);
        this.Ae(!0);
        this.ne();
        this.ic()
    }; z.e.gm = function() {
        this.Gc || (this.Gc = z.M("div", "zm-tag-editor-editor", [this.Mo = z.M("div", "zg-section zg-clear"), this.pe = z.M("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.ab = z.J("zh-topic-merge-input"), z.M("a", {
                "class": "zg-mr15 zg-btn-blue",
                href: "#",
                name: "add",
                style: "display:none;"
            },
            "添加"), this.VG = z.J("zh-topic-merge-btn")])]), z.df(this.Gc, this.Yg), this.Of(this.pe))
    }; z.e.Of = function(a) {
        this.O = new z.zt("/topic/autocomplete", this.ab, null, null, a, !0);
        this.O.Ug(!0);
        this.O.Gk = this.Be;
        this.O.sn(this.Yf());
        this.O.Ty = [this.bf];
        this.o().g(this.O, "select", this.Tf);
        this.o().g(this.O, "suggestionsupdate", this.ao)
    }; z.e.Yf = function() {
        return (0, z.t)(function(a) {
                return z.lb(a,
                    function(a) {
                        return z.Mn(this.data,
                            function(c) {
                                return c[1] !== a[1] && 3 < a.length
                            })
                    },
                    this)
            },
            this)
    }; z.e.Tf = function() {
        var a = this.O.zg().slice(1);
        a && 3 < a.length && (this.eG = a, this.Ne(a[3], a[0]))
    }; z.e.Ne = function(a, b) {
        var c = this; (0, window.setTimeout)(function() {
            c.ab.value = b
        })
    }; z.e.Nd = function() {}; z.p(cJ, z.Q); cJ.prototype.init = function() {
        this.Gu = z.J("zh-pm-detail-item-wrap");
        this.o().g(this.Gu, "click", this.Ya);
        var a = z.J("zh-pm-editor-form");
        if (a) {
            var b = this.mb()[0],
                c = void 0,
                c = b ? (0, window.$)(b).data() : z.Kk ? {
                    member: z.Kk.id,
                    name: z.Kk.eH
                }: {},
                b = this.Lv = new z.yx({
                    zv: !0,
                    Gl: [!0, {
                        activated: !1,
                        notBlocked: "to_admin" !== c.type && "feedback" !== c.type
                    }]
                });
            b.Dr = !1;
            b.$h(a);
            b.show();
            z.Ax(b, c.member, c.name);
            b.fr((0, window.$)("#js-admin-feedback-token-input").val());
            c.token && wI(b, c.token, c.type);
            b.focus()
        }
        dJ(this);
        this.Ep()
    }; cJ.prototype.Ep = function() { (0, window.$)("#zh-pm-detail-item-wrap").on("click", "a[name\x3dreport]",
        function(a) {
            z.V.trackEvent(a.currentTarget, {
                action: "ReportIntent",
                element: "Button"
            });
            a = (0, window.$)(a.currentTarget).closest(".zm-pm-item"); (new z.Lz({
                type: "message",
                id: a.data("token"),
                cM: a.data("talkerToken")
            })).render()
        })
    }; cJ.prototype.mb = function() {
        return z.gf(this.Gu)
    }; cJ.prototype.Ya = function(a) {
        if (a = z.xr(this.Gu, a.target)) {
            var b = z.to(a, this.Rf);
            if (b) {
                var b = (0, window.$)(b).data(),
                    c = b.token;
                switch (a.name) {
                    case "reply":
                        this.Lv.show();
                        wI(this.Lv, c, b.type);
                        z.Ax(this.Lv, b.member, b.name, !1);
                        this.Lv.focus();
                        break;
                    case "delete":
                        eJ(this, c)
                }
            }
        }
    }; z.p(gJ, z.Q); gJ.prototype.init = function() {
        var a = z.J("zh-create-pm");
        a && this.o().g(a, "click", this.uV);
        var a = z.J("zh-pm-item-wrap"),
            b = new z.El;
        b.use("locationSource", {
            param: function(a) {
                return {
                    start: a[a.length - 1].getAttribute("data-token")
                }
            }
        });
        b.w(a);
        this.o().g(a, "click", this.Ya);
        z.Al(b,
            function(a) {
                return z.V.Va(a, {
                        module: "MessageItem"
                    },
                    function() {
                        return {
                            card: {
                                card_type: "Content",
                                content: {
                                    type: "Message",
                                    token: String((0, window.$)(a).data("token"))
                                }
                            }
                        }
                    })
            }); (0, window.$)("#js-admin-feedback-token-select").change(function() {
            var a = this.value;
            window.location.href = "self" === a ? "/admin_feedback": "/admin_feedback/" + a
        }); (0, window.$)("#zh-pm-item-wrap").on("click", 'a[name\x3d"report"]',
            function(a) {
                var b = (0, window.$)(a.currentTarget).closest(".zm-pm-item"); (new z.Lz({
                    type: "message",
                    id: b.data("token"),
                    cM: b.data("talkerToken")
                })).render();
                z.V.trackEvent(a.currentTarget, {
                    action: "ReportIntent",
                    element: "Button"
                })
            });
        z.im.aV && z.Oy().then(function() {
            window.location.reload()
        })
    }; gJ.prototype.uV = function() {
        var a = new z.yx({
            zv: !0
        });
        a.show();
        z.Ax(a, -1);
        z.Va(window.location.pathname, "admin_inbox") ? a.fr("admin") : a.fr((0, window.$)("#js-admin-feedback-token-select").val())
    }; gJ.prototype.Ya = function(a) {
        var b = z.xr(this.H0, a.target);
        if (b) {
            a = b.name;
            var c = z.to(b, this.Rf);
            if (!c || !a) return ! 0;
            var b = (0, window.$)(c).data(),
                d = b.member,
                f = b.name;
            switch (a) {
                case "reply":
                    a = new z.yx({
                        zv: !0,
                        Gl: !1
                    });
                    a.show();
                    wI(a, b.token, b.type);
                    z.Ax(a, d, f, !1);
                    a.Id.focus();
                    break;
                case "delete":
                    var g = c.getAttribute("data-token");
                    z.T.confirm("删除私信会话", "你确定要删除与 " + f + "的所有会话吗？",
                        function(a) {
                            a && hJ(g)
                        },
                        this);
                    break;
                case "edit":
                    z.or(this.rd, this.ki),
                        this.Gn = -1
            }
        }
    }; z.y(iJ, z.vE); iJ.prototype.init = function(a) {
        iJ.v.init.call(this, a);
        this.ic(this.h)
    }; iJ.prototype.ND = function(a) {
        this.ND = a
    }; iJ.prototype.ic = function(a) {
        if (this.ND) {
            var b = new z.pA,
                c = this.$Q;
            b.iz = this.ez;
            b.hz = c || b.hz;
            this.vo && b.HC(this.vo);
            b.w(a)
        }
    }; iJ.prototype.HC = function(a) {
        this.vo = a
    }; z.y(jJ, z.hj); jJ.prototype.init = function() {
        this.o().g(this.h, "click", this.sq)
    }; jJ.prototype.sq = function(a) {
        a = z.xr(this.h, a.target);
        "focus" === (a && a.name) && (0, z.UG)(a, this.ez, null, this.ZQ, {
            follow_text: this.text[0],
            unfollow_text: this.text[1]
        })
    }; z.y(kJ, z.hj); z.e = kJ.prototype; z.e.w = function(a) {
        this.element = a;
        var b = (0, window.$)("\x3cul\x3e");
        this.wM = (0, window.$)("\x3cli\x3e");
        b.append(this.wM); (0, window.$)(a).append(b);
        this.xM || (this.xM = !0, this.zD = new z.dp(!0), this.o().ta(this.zD, "success", this.BV), this.zD.ajax(this.url, null, "POST"))
    }; z.e.BV = function() {
        var a = z.Dn(this.zD);
        a && (a && a.r ? z.T.message(a.msg) : (lJ(this, this.wM, a.msg), this.xM = !1, this.C()))
    }; z.e.C = function() {
        this.o().g(this.element, "click", this.sq)
    }; z.e.sq = function(a) {
        var b = (a = a.target) ? a.name: "";
        if (b) switch (b) {
            case "load":
            case "loadmore":
                this.aB(a);
                break;
            case "topic":
                window.location.href = a.href
        }
    }; z.e.aB = function(a) {
        if (!this.bq) {
            var b = a.getAttribute("data-token"),
                c = a.getAttribute("data-parent");
            this.bq = !0;
            this.Fk = new z.dp(!0);
            this.o().ta(this.Fk, "success", this.es);
            this.CC = a.parentNode;
            this.CC.innerHTML = '\x3cspan class\x3d"zg-gray"\x3e加载中...\x3c/a\x3e';
            this.Fk.ajax(this.url + "?child\x3d" + b + "\x26parent\x3d" + c, null, "POST")
        }
    }; z.e.es = function() {
        var a = z.Dn(this.Fk);
        if (a) if (a && a.r) z.T.message(a.msg);
        else if (a = a.msg, a[1]) { (0, window.$)(this.CC).hide();
            for (var b = (0, window.$)(this.CC.parentNode), c = 0; c < a[1].length; c++) {
                var d = a[1][c],
                    f = (0, window.$)("\x3cli\x3e").addClass("zm-topic-organize-item");
                "topic" !== d[0][0] && f.addClass("zm-topic-organize-loadmore");
                b.append(f);
                lJ(this, f, d)
            }
            this.bq = !1
        }
    }; z.y(mJ, z.Sv); mJ.prototype.Qh = function(a) {
        z.Mk[0][0] === a ? this.oj() : mJ.v.Qh.apply(this, arguments)
    }; mJ.prototype.ME = function(a) {
        if (a = z.Dn(a.target)) a.r ? z.T.message(a.msg) : a.msg && (window.location.href = a.msg)
    }; z.p(oJ, z.Q); z.e = oJ.prototype; z.e.T = function(a) {
        z.Q.prototype.T.call(this, a);
        this.h = a;
        this.wa = (0, window.$)(a);
        this.wa.append(BJ(this.ia));
        this.$v = this.wa.find(".TopicIndex-subTopics")[0];
        this.$v || (this.wa.append(FO), this.$v = this.wa.find(".TopicIndex-subTopics")[0]);
        a = this.wa.find(".TopicIndex-errTips");
        this.QO = this.wa.find(".zg-anchor-hidden")[0];
        this.SK = this.wa.find(".TopicIndex-editQuesInput")[0];
        this.bd = this.wa.find(".TopicIndex-sectionTitle")[0];
        this.tD = this.wa.find(".TopicIndex-editSectionTitle")[0];
        this.iC = this.wa.find(".TopicIndex-questionList")[0];
        this.No = this.wa.find(".TopicIndex-editWrap .TopicIndex-questionList")[0];
        this.HQ = this.wa.find(".TopicIndex-editWrap")[0];
        this.lM = a[0];
        this.TK = a[1];
        this.pM = a[2];
        vJ(this, {
            isEdit: !0
        })
    }; z.e.B = function() {
        z.Q.prototype.B.call(this);
        this.h = z.M("div", {
            innerHTML: CJ(this.ia),
            "class": "TopicIndex-section is-edit"
        });
        this.T(this.h)
    }; z.e.C = function() {
        z.Q.prototype.C.call(this);
        zJ(this, this.SK);
        yJ(this, this.wa, this.ia.subTopic.map(function(a) {
            return [a.text, a.token, void 0, a.Ce]
        }));
        tJ(this, this.No);
        this.Kj()
    }; z.e.Cb = function() {
        z.Q.prototype.Cb.call(this);
        this.wa.find(".js-change").off("change", this.kM);
        this.wa.off("click", ".TopicIndex-questionList .js-delete", this.RK);
        this.wa.off("click", ".js-finish", this.UG);
        z.N(this.h)
    }; z.e.Kj = function() {
        var a = this;
        this.kM = function(b) {
            var c = b.target.value.trim();
            if (12 < c.length) return b.target.value = c.substr(0, 12),
                xJ(a, {
                    type: "title",
                    Ua: "标题字数不能超过12"
                });
            a.ia.id ? "" === c ? 0 >= a.ia.indexItem.length && 0 >= a.ia.subTopic.length ? a.service.oQ(a.ia.id).then(function() {
                xJ(a, {
                    type: "title",
                    Ua: a.ia.title + "已删除"
                });
                a.dispatchEvent({
                    type: rJ,
                    data: {
                        id: a.ia.id,
                        title: ""
                    }
                });
                a.dispatchEvent(wJ)
            }).fail(function(b) {
                return xJ(a, {
                    type: "title",
                    Ua: b || "删除失败"
                })
            }) : xJ(a, {
                type: "title",
                Ua: "请输入标题"
            }) : a.service.FZ(a.ia.id, c).then(function() {
                xJ(a, {
                    type: "title",
                    Ua: ""
                });
                qJ(a, {
                    title: c
                })
            }).fail(function(b) {
                return xJ(a, {
                    type: "title",
                    Ua: b || "保存失败"
                })
            }) : 0 < c.length && a.service.qO({
                    title: c
                }).then(function(b) {
                    qJ(a, {
                        id: b,
                        title: c
                    });
                    xJ(a, {
                        type: "question",
                        Ua: ""
                    });
                    xJ(a, {
                        type: "title",
                        Ua: ""
                    });
                    a.DI || vJ(a, {
                        isEdit: !1
                    })
                }).fail(function(b) {
                    return xJ(a, {
                        type: "title",
                        Ua: b || "添加失败"
                    })
                })
        };
        this.hZ = function(b) {
            b = b.currentTarget.value.trim();
            for (var c = 0,
                     d = 0; d < b.length; d++) var f = b.charCodeAt(d),
                     c = c + (0 < f && 128 >= f ? 1 : 2);
            xJ(a, {
                type: "title",
                Ua: 24 < c ? "标题不能超过 12 字": ""
            })
        };
        this.RK = function(b) {
            var c = [].indexOf.call(a.No.children, (0, window.$)(b.target).closest(".TopicIndex-questionItem")[0]);
            a.service.nQ(a.ia.indexItem[c].id).then(function() {
                xJ(a, {
                    type: "question",
                    Ua: ""
                });
                qJ(a, {
                    indexItem: [c, 1]
                })
            }).fail(function(b) {
                return xJ(a, {
                    type: "question",
                    Ua: b || "删除失败"
                })
            })
        };
        this.UG = function() {
            a.lM.textContent || a.TK.textContent || a.pM.textContent || (a.Oh ? a.DI = !1 : (a.tD.value !== a.ia.title && a.tD.dispatchEvent(new window.Event("change")), vJ(a, {
                isEdit: !1
            })))
        };
        this.wa.find(".js-change").on("change", this.kM).on("input", this.hZ);
        this.wa.on("click", ".TopicIndex-questionList .js-delete", this.RK);
        this.wa.on("click", ".js-finish", this.UG)
    };
    var rJ = "update_module",
        wJ = "del_module",
        AJ = '\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"\x3c%\x3dlabel%\x3e" style\x3d"-webkit-user-select: none;" data-topicid\x3d"\x3c%\x3durl_token%\x3e"\x3e\x3c%\x3dlabel%\x3e\x3cspan class\x3d"zg-link-gray-normal"\x3e\x3c%\x3d answer_count \x3e 0 ? answer_count + \'个回答\' : \'\' %\x3e\x3c/span\x3e\x3c/span\x3e',
        FO = '\x3cdiv class\x3d"TopicIndex-subTopicsWrap clearfix is-hide"\x3e\n      \x3cspan class\x3d"TopicIndex-subLabel"\x3e相关话题：\x3c/span\x3e\n      \x3cdiv class\x3d"TopicIndex-subTopics"\x3e\x3c/div\x3e\n    \x3c/div\x3e'; z.p(DJ, z.Q); z.e = DJ.prototype; z.e.B = function() {
        z.Q.prototype.B.call(this);
        var a = this.Nm;
        this.h = z.M("div", {
            innerHTML: '\n    \x3cdiv class\x3d"TopicBook-header"\x3e\n      \x3ca class\x3d"zg-anchor-hidden" name\x3d"TopicBook"\x3e\x3c/a\x3e\n      \x3ch3\x3e书籍推荐\x3c/h3\x3e\n      ' + (a ? '\n        \x3ca class\x3d"TopicBook-editButton zu-edit-button js-modify" name\x3d"edit"\x3e\n          \x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e\n          修改\n        \x3c/a\x3e': "") + '\n    \x3c/div\x3e\n    \x3cdiv class\x3d"TopicBook-content"\x3e\n      \x3cdiv class\x3d"TopicBook-items"\x3e\n      \x3c/div\x3e\n      ' + (a ? '\n        \x3cdiv class\x3d"TopicBook-inputWrapper"\x3e\n          \x3cinput type\x3d"text" class\x3d"zg-form-text-input js-input" placeholder\x3d"复制知乎或亚马逊上的书籍链接"/\x3e\n          \x3cbutton class\x3d"zg-btn-blue js-submit TopicBook-finishButton"\x3e\n            确定\n          \x3c/button\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"TopicBook-errTips js-error"\x3e\x3c/div\x3e\n        ': "") + "\n    \x3c/div\x3e\n    ",
            "class": "TopicBook",
            "data-id": "TopicBook"
        })
    }; z.e.C = function() {
        z.Q.prototype.C.call(this);
        this.H = (0, window.$)(this.h);
        this.bh = this.H.find(".TopicBook-items");
        this.ql = this.H.find(".TopicBook-errTips");
        this.Kw = this.H.find(".js-input");
        this.H.find(".js-modify");
        this.CN = this.H.find(".js-submit");
        GJ(this, this.list);
        0 >= this.list.length && EJ(this);
        this.H.on("click", ".js-preview", this.LS.bind(this));
        this.Nm && (this.H.on("click", ".js-modify", this.Iz.bind(this)), this.H.on("click", ".js-delete", this.ip.bind(this)), this.H.on("click", ".js-submit", this.kk.bind(this)), this.Kw.on("keyup", this.cS.bind(this)))
    }; z.e.Iz = function() {
        EJ(this)
    }; z.e.cS = function(a) {
        this.ql.text("");
        a.preventDefault();
        13 === a.keyCode && this.CN.click()
    }; z.e.kk = function() {
        var a = this,
            b = this.Kw.val();
        if (!b) return FJ(this, "");
        this.bh.addClass("loading");
        IJ(b).then(function(b) {
                return KJ(a.token, b.id).then(function() {
                        GJ(a, {
                            wN: b
                        });
                        FJ(a, "");
                        a.bh.removeClass("loading");
                        a.Kw.val("")
                    },
                    function(b) {
                        FJ(a, b);
                        a.bh.removeClass("loading")
                    })
            },
            function(b) {
                FJ(a, b);
                a.bh.removeClass("loading")
            })
    }; z.e.LS = function(a) {
        a.preventDefault();
        a.stopPropagation();
        var b = this.bh.children().index((0, window.$)(a.currentTarget).parents(".TopicBook-item"));
        if (b = this.list[b].RA) {
            var b = (0, window.decodeURIComponent)(b),
                c = new z.R;
            c.sd(!0);
            c.Ca("预览");
            c.render();
            var d = (0, window.$)(c.S());
            d.append((0, window.$)("\x3ciframe\x3e", {
                b0: "allowFullScreen",
                className: "book-preview",
                frameBorder: "0",
                height: "100%",
                width: "100%",
                src: b.replace("linkCode\x3dkpp", "preview\x3dinline")
            }));
            c.F(!0); (0, window.$)(c.m()).addClass("TopicBook-dialog");
            d.outerWidth(848).outerHeight(536);
            z.V.trackEvent(a.target, {
                    action: "Click",
                    element: "Button"
                },
                {
                    button: {
                        text: "试读"
                    }
                })
        }
    }; z.e.ip = function(a) {
        var b = this;
        a.preventDefault();
        a.stopPropagation();
        var c = this.bh.children().index((0, window.$)(a.currentTarget).parent(".TopicBook-item"));
        window.$.ajax({
            method: "delete",
            url: "/topic_index/" + this.token + "/book",
            data: {
                book_id: this.list[c].id
            }
        }).then(function() {
            return GJ(b, {
                vN: c
            })
        })
    }; z.p(NJ, z.Q); NJ.prototype.T = function(a) {
        z.Q.prototype.T.call(this, a);
        this.h = a;
        this.H = (0, window.$)(a);
        this.ig = this.H.find(".TopicIndex-toc");
        this.xl = this.ig.find(".TopicIndex-tocItems");
        this.Ww = this.H.find(".TopicIndex-sectionWrap");
        this.pf = this.H.find(".TopicIndex-section");
        this.yl = this.ig.find("a")
    }; NJ.prototype.Kj = function() {
        var a = this;
        this.uO = function(b) {
            if (20 > a.pf.length) {
                var c = new oJ(void 0, a.ia.id);
                z.zn(c, b.currentTarget.parentElement);
                a.Tg[a.H.find(".TopicIndex-section").length - 1] = c;
                QJ(a, c);
                RJ(a, c)
            } else z.T.alert("暂不支持添加超过20个模块")
        };
        this.GQ = function(b) {
            var c = (0, window.$)(b.currentTarget).parent(".TopicIndex-section");
            b = c[0];
            var d = a.Ww.children().index(c);
            a.Tg[d] ? vJ(a.Tg[d], {
                isEdit: !0
            }) : (c = new oJ(MJ(c), a.ia.id), c.w(b), a.Tg[d] = c, QJ(a, c), RJ(a, c))
        };
        this.H.on("click", ".js-add", this.uO);
        this.H.on("click", ".js-edit", this.GQ);
        this.H.on("click", ".js-drag",
            function(a) {
                return a.preventDefault()
            })
    }; NJ.prototype.C = function() {
        z.Q.prototype.C.call(this);
        UJ(this, this.ig);
        VJ(this, this.ig);
        OJ(this);
        this.ia.Nm && (this.Ww.append(GO), this.pf.append(HO), this.ig.addClass("TopicIndex-toc--edit"), this.xl.find(".TopicIndex-tocLink").addClass("TopicIndex-tocLink--edit").prepend(TJ), this.Kj(), 0 === this.pf.length && this.H.find(".js-add")[0].click());
        PJ(this)
    };
    var HO = '\x3ca class\x3d"TopicIndex-editButton zu-edit-button js-edit" name\x3d"edit"\x3e\n    \x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e',
        GO = "\x3cdiv class\x3d\"TopicIndex-addBtnWrap\"\x3e\n    \x3cdiv class\x3d'TopicIndex-addSectionButton js-add'\x3e\n      \x3ci class\x3d'z-icon-follow'\x3e\x3c/i\x3e\n      \x3cspan\x3e添加下一个标题\x3c/span\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e",
        TJ = '\n    \x3cspan class\x3d"TopicIndex-dragIcon js-drag"\x3e\n      \x3cspan class\x3d"zg-icon-drag-wrap"\x3e\x3ci class\x3d"zg-icon-drag"\x3e\x3c/i\x3e\x3c/span\x3e\n    \x3c/span\x3e\n    '; z.p(WJ, z.Q); WJ.prototype.B = function() {
        z.Q.prototype.B.call(this);
        this.h = z.M("div", {
            "class": "zu-top-feed-list-wrap "
        });
        this.T(this.h)
    }; WJ.prototype.T = function(a) {
        z.Q.prototype.T.call(this, a);
        this.H = (0, window.$)(a);
        this.H.append('\x3cdiv class\x3d"listview zu-top-feed-list zh-topic-index-log-list"\x3e\x3c/div\x3e');
        this.Za = this.H.find(".listview")
    }; WJ.prototype.C = function() {
        z.Q.prototype.C.call(this);
        this.Bp()
    }; WJ.prototype.Bp = function() {
        var a = this,
            b = z.Mk[0][1],
            c = {
                offset: 0,
                limit: 20
            },
            d = new z.El({
                use: ["autoload"],
                source: function() {
                    return window.$.get("/topic/" + b + "/commits", c).then(function(a) {
                        a.length >= c.limit && (c.offset = a[a.length - 1].created);
                        return {
                            results: a.map(function(a) {
                                var c = {
                                        module: "模块",
                                        item: "相关条目",
                                        subtopic: "相关话题"
                                    },
                                    d = void 0;
                                "update" === a.operation ? d = "module" === a.objectType ? "更新了标题": "调整了条目顺序": "insert" === a.operation ? d = "新增了" + c[a.objectType] : "remove" === a.operation && (d = "删除了" + c[a.objectType]);
                                var c = a.operator.id,
                                    f = a.operator.name,
                                    n = a.operation,
                                    q = a.objectType,
                                    v = a.moduleId,
                                    F = a.moduleTitle,
                                    K = z.gj(a.created),
                                    O = "question" === a.detail.itemType ? "/question": "//zhuanlan.zhihu.com/p",
                                    ca = a.detail.title,
                                    kb = a.detail.origianlTitle,
                                    Ta = a.detail.itemTitle,
                                    Ba = a.detail.itemId,
                                    ua = a.detail.topicId;
                                a = a.detail.topicTitle;
                                return '\n\x3cdiv class\x3d"zm-item"\x3e\n  \x3ch2 class\x3d"zm-item-title"\x3e\n    \x3ca target\x3d"_blank" href\x3d"/topic/' + b + "#" + v + '"\x3e' + F + '\x3c/a\x3e\n  \x3c/h2\x3e\n  \x3cdiv\x3e\n    \x3ca target\x3d"_blank" href\x3d"/people/' + c + '"\x3e' + f + '\x3c/a\x3e\n    \x3cspan class\x3d"zg-gray-normal"\x3e' + d + '\x3c/span\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"zg-item-log-detail"\x3e' + ("subtopic" === q && ("insert" === n ? '\x3cins\x3e\x3ca data-hovercard\x3d"t$t$' + ua + '" href\x3d"/topic/' + ua + '"\x3e' + a + "\x3c/a\x3e\x3c/ins\x3e": '\x3cdel\x3e\x3ca data-hovercard\x3d"t$t$' + ua + '" href\x3d"/topic/' + ua + '"\x3e' + a + "\x3c/a\x3e\x3c/del\x3e") || "module" === q && ("update" === n && '\x3ca target\x3d"_blank" href\x3d"/topic/' + b + "#" + v + '"\x3e\x3cins\x3e' + ca + "\x3c/ins\x3e\x3cdel\x3e" + kb + "\x3c/del\x3e\x3c/a\x3e" || "insert" === n && '\x3cins\x3e\x3ca target\x3d"_blank" href\x3d"/topic/' + b + "#" + v + '"\x3e' + ca + "\x3c/a\x3e\x3c/ins\x3e" || "\x3cdel\x3e\x3cspan\x3e" + ca + "\x3c/span\x3e\x3c/del\x3e") || "item" === q && ("insert" === n && '\x3cins\x3e\x3ca class\x3d"question_link" href\x3d"' + O + "/" + Ba + '"\x3e' + Ta + "\x3c/a\x3e\x3c/ins\x3e" || "remove" === n && '\x3cdel\x3e\x3ca class\x3d"question_link" href\x3d"' + O + "/" + Ba + '"\x3e' + Ta + "\x3c/a\x3e\x3c/del\x3e" || '\x3ca class\x3d"question_link" href\x3d"' + O + "/" + Ba + '"\x3e' + Ta + "\x3c/a\x3e")) + ('\x3c/div\x3e\n  \x3ctime datetime\x3d"' + K + '"\x3e' + K + "\x3c/time\x3e\n\x3c/div\x3e")
                            }),
                            next: a.length >= c.limit
                        }
                    })
                },
                Nl: "zg-btn-white zu-button-more js-index-log-more"
            });
        d.w(this.Za[0]);
        d.o().ta(d, "next",
            function() {
                d.mb().length || (d.dispose(), a.Za.html('\x3cdiv class\x3d"empty-results"\x3e还没有记录\x3c/div\x3e'))
            });
        d.Gg();
        this.hf = d
    }; z.y(XJ, z.Q); z.e = XJ.prototype; z.e.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; z.e.C = function() {
        XJ.v.C.call(this);
        cK(this);
        var a = z.J("zh-topic-top-answerer");
        a && (new jJ(a, "people", ["zg-follow", "zg-unfollow"])).init();
        if (a = z.J("zh-topic-direct-question-list")) a = new iJ(a, null, "question", null, !0),
            a.lj("question-item"),
            a.init();
        if (!z.Y.tc) {
            if (a = z.J("zh-topic-title")) this.ud = new mJ(!1, "/topic/update", "title"),
                zI(this.ud, ["tid\x3d" + this.dg]),
                this.ud.addEventListener("beforeedit", z.BE({
                    wr: !0
                })),
                this.ud.w(a),
                (0, window.$)(a).on("click", ".js-pin",
                    function() {
                        var a = (0, window.$)(this),
                            c = a.attr("data-action");
                        window.$.post(c, {
                            tid: z.Mk[0][3]
                        }).done(function(c) {
                            if (!c) return z.T.message("网络异常");
                            if (c.r) return z.T.message(c.msg);
                            c = a.hasClass("pin") ? '\x3ca href\x3d"javascript:;" data-action\x3d"/pin-topic/remove" class\x3d"js-pin zg-gray unpin topic-hover-content"\x3e\x3ci class\x3d"z-icon-unpin"\x3e\x3c/i\x3e取消常去话题\x3c/a\x3e': '\x3ca href\x3d"javascript:;" data-action\x3d"/pin-topic/add" class\x3d"js-pin zg-gray pin topic-hover-content"\x3e\x3ci class\x3d"z-icon-pin"\x3e\x3c/i\x3e设为常去话题\x3c/a\x3e';
                            a.replaceWith(c)
                        })
                    });
            if (a = z.J("zh-topic-desc"))(0, window.$)(a).find(".zm-editable-content").data("editable-maxlength"),
                this.am = new z.Wv(!0, "/topic/update", "description"),
                this.am.Rb = '\x3ca href\x3d"javascript:;" name\x3d"edit"\x3e添加话题描述\x3c/a\x3e\x3c/div\x3e',
                zI(this.am, ["tid\x3d" + this.dg]),
                this.am.Px = !1,
                this.am.MM = !1,
                this.am.addEventListener("beforeedit", z.BE({
                    wr: !0
                })),
                this.am.w(a);
            if (a = z.J("zh-topic-faq")) this.$y = new z.Wv(!0, "/topic/" + (0, window.encodeURIComponent)(z.Mk[0][1]) + "/faq", "content"),
                this.$y.Rb = '\x3cdiv class\x3d"zm-topic-faq-container"\x3e\x3cdiv class\x3d"zg-gray-normal"\x3e常见问题是该话题下经常会提到的问题的整理，以便后来者查阅（\x3ca href\x3d"/question/20388061" class\x3d"zg-link-litblue"\x3e如何创建？\x3c/a\x3e）\x3c/div\x3e\x3ca href\x3d"javascript:;" name\x3d"edit" class\x3d"zg-link-litblue"\x3e\x3cspan class\x3d"zg-blue-edit"\x3e\x3c/span\x3e为「' + z.Mk[0][0] + "」添加常见问题\x3c/a\x3e\x3c/div\x3e",
                this.$y.Px = !1,
                this.$y.w(a);
            hK(this)
        }
        iK(this);
        bK(this);
        eK(this);
        fK();
        gK(this);
        $J(this);
        ZJ(); (a = z.L("zm-topic-feed-container")) && (new jJ(a, "question", ["zg-follow", "zg-unfollow"])).init(); (a = z.J("zh-topic-side-children-list")) && (new jJ(a, "topic", ["zg-follow", "zg-unfollow"])).init();
        lK(); (0, window.$)(".js-may-disable").click(z.Tr(z.r, !0));
        YJ();
        mK(this);
        nK()
    }; z.e.KV = function() {
        this.Qs = this.Ma.eG;
        if (!this.CJ && this.Qs) {
            this.CJ = !0;
            this.lB = new z.dp(!0);
            this.o().ta(this.lB, "success", this.DO);
            this.lB.ajax("/topic/" + (0, window.encodeURIComponent)(z.Mk[0][1]) + "/demand", "action\x3dmerge\x26target_topic_id\x3d" + this.Qs[3]);
            var a = z.J("zh-topic-merged-msg");
            z.P(z.J("zh-topic-merge"), !1);
            z.P(a, !0);
            a = z.Me("a", null, a)[0];
            a.href = "/topic/" + this.Qs[1];
            a.innerHTML = this.Qs[0];
            this.Ma && (this.Ma.ab.value = "")
        }
    }; z.e.DO = function() {
        var a = z.Dn(this.lB);
        if (!a) return z.T.message("网络异常");
        if (a.r) {
            var b = z.J("zh-topic-merged-msg");
            z.P(z.J("zh-topic-merge"), !0);
            z.P(b, !1);
            this.CJ = !1;
            return z.T.message(a.msg)
        }
    }; z.e.xV = function() {
        this.kG || (this.kG = !0, this.yy = new z.dp(!0), this.o().ta(this.yy, "success", this.BO), this.yy.ajax("/topic/" + (0, window.encodeURIComponent)(z.Mk[0][1]) + "/demand", "action\x3dremove"))
    }; z.e.BO = function() {
        var a = z.Dn(this.yy);
        if (!a) return z.T.message("网络异常");
        if (a.r) return z.T.message(a.msg);
        a = z.J("zh-topic-del-msg");
        z.P(z.J("zh-topic-del-btn"), !1);
        z.P(a, !0);
        this.Ma && (this.Ma.ab.value = "");
        this.kG = !1
    }; z.e.iW = function(a) {
        if ((a = a.target) && a.name) if ("add" === a.name) {
            if (a = this.lx.value) this.nx = new z.dp(!0),
                this.o().ta(this.nx, "complete", this.AO),
                this.nx.ajax(window.location.href, "action\x3dadd_alias\x26alias\x3d" + (0, window.encodeURIComponent)(a))
        } else "remove" === a.name ? (this.qC = new z.dp(!0), a = a.parentNode.getAttribute("data-token"), this.o().ta(this.qC, "complete", this.FO), this.qC.ajax(window.location.href, "action\x3dremove_alias\x26alias_token\x3d" + a)) : "remove-merged" === a.name && (this.rC = new z.dp(!0), a = a.parentNode.getAttribute("data-token"), this.o().ta(this.rC, "complete", this.GO), this.rC.ajax("/topic/" + (0, window.encodeURIComponent)(z.Mk[0][1] + "/demand"), "action\x3dremove\x26target_topic_id\x3d" + a))
    }; z.e.GO = function() {
        var a = z.Dn(this.rC);
        if (!a) return z.T.message("网络异常");
        if (a.r) return z.T.message(a.msg);
        aK(this, a.msg)
    }; z.e.FO = function() {
        var a = z.Dn(this.qC);
        if (!a) return z.T.message("网络异常");
        if (a.r) return z.T.message(a.msg);
        aK(this, a.msg)
    }; z.e.AO = function() {
        var a = z.Dn(this.nx);
        if (!a) return z.T.message("网络异常");
        if (a.r) return z.T.message(a.msg);
        var a = a.msg,
            b = z.M("li");
        b.setAttribute("data-token", a[1]);
        b.innerHTML = a[0] + ' \x3ca name\x3d"remove" href\x3d"javascript:;" class\x3d"zg-link-gray"\x3e移除\x3c/a\x3e';
        this.mx.appendChild(b);
        this.lx.value = "";
        z.P(this.mx.parentNode, !0)
    }; z.e.SC = function(a) {
        this.MB ? this.rb.W() ? this.rb.F(!1) : (this.rb.F(!0), a.stopPropagation(), a.preventDefault(), this.Kl()) : (a.stopPropagation(), a.preventDefault(), this.wk(), this.Kl());
        this.MB = !0
    }; z.e.Kl = function() {
        this.o().ta(window.document, "click",
            function() {
                this.rb.F(!1)
            })
    }; z.e.wk = function() {
        var a = z.J("zh-topic-side-head"),
            b = this.Mg.getAttribute("data-auth");
        this.rb = new z.Zz;
        this.Yz = !0;
        "f-topic-manage" === b && this.rb.Ja(this.oW = new z.Uz("管理话题"));
        this.rb.Ja(this.pW = new z.Uz("组织话题"));
        this.rb.Ja(this.nW = new z.Uz("话题日志"));
        this.Yz && (this.rb.render(a), this.o().g(this.rb, "action", this.mk))
    }; z.e.mk = function(a) {
        var b = "";
        a.target === this.oW ? b = "admin": a.target === this.pW ? b = "organize": a.target === this.nW && (b = "log");
        window.location.href = ["/topic", this.ii[1], b].join("/")
    }; z.e.VV = function() {
        var a = z.Dn(this.pC);
        if (a && !a.r) {
            var b = [];
            z.A(a,
                function(a) {
                    b.push(z.kr(a, null, !0))
                });
            this.wX.innerHTML = b.join("") + '\x3cdiv class\x3d"zg-clear"\x3e\x3c/div\x3e';
            a.length && z.P(z.J("zh-topic-side-related-topics-wrap"), !0)
        }
    }; z.y(oK, z.Q); oK.prototype.B = function() {
        this.h = this.L().B("FORM", {
            method: "POST",
            style: "display:none"
        })
    }; oK.prototype.post = function(a, b, c) {
        var d = this.m();
        d || (this.render(), d = this.m());
        d.action = b || "";
        d.target = c || "";
        pK(this, d, a);
        d.submit()
    }; z.y(tK, z.hj); tK.prototype.init = function() {
        var a = z.sn(new z.oj(window.location.href), "group_id");
        a && (this.Mk = new z.dp(!1), this.o().ta(this.Mk, "success", this.UB), a && this.Mk.ajax("/noti7/read", "group_id\x3d" + a, "POST"))
    }; tK.prototype.UB = function() {
        var a = z.Dn(this.Mk);
        if (a && !a.r && a.msg) {
            var b = a.msg;
            if (!0 === b || "true" === b || "True" === b) return;
            this.cV = a.msg;
            this.dispatchEvent("change")
        } (a = z.WG) && z.ux(a)
    }; z.y(uK, z.Q); z.e = uK.prototype; z.e.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; z.e.C = function() {
        uK.v.C.call(this);
        wK(this);
        if (this.Nu = z.J("zh-list-meta-wrap")) this.o().g(this.Nu, "click", this.EB),
        z.sn(new z.oj(window.location.href), "fc") && yK(this);
        var a = z.J("zh-favlists-wrap");
        a && (new iJ(a, null, "favlist", null, !0)).init();
        this.Cp(); (a = z.J("zh-favlist-log-list-wrap")) && (new iJ(a, null, "favlist", null, !0)).init();
        vK();
        if (a = z.J("zh-favlist-followers-wrap")) a = new iJ(a, null, "people", ["zg-btn-follow", "zg-btn-unfollow"], !0),
            a.lj("zm-profile-section-item"),
            a.ND(!0),
            a.init();
        this.o().g(window, "hashchange", this.I0);
        this.nA();
        this.oq = new tK;
        this.oq.init()
    }; z.e.Cp = function() {
        var a = z.J("zh-list-collection-wrap");
        if (a) { (0, window.$)(a).on("click", "a[name\x3dunfavo]", window.$.proxy(this.XS, this));
            var b = new z.El({
                ag: !1
            });
            this.K(b);
            b.use("childConstructor", {
                factory: z.iE
            }).use("expandLimit");
            b.w(a);
            this.o().g(b, "click!",
                function(a) {
                    "comment" === a.namespace && a.Nc.fill("category", this.Sh).fill("label", "collection_answer")
                })
        }
    }; z.e.XS = function(a) {
        a = a.target;
        var b = a.id.split("-"),
            c = b[1],
            b = b[2]; (new z.dp(!0)).ajax("/collection/remove", "answer_id\x3d" + c + "\x26favlist_id\x3d" + b);
        if (b = z.vf(a, "div", "zm-item")) a = z.Co("zm-item-answer", b),
            1 === a.length ? z.N(b) : (a = z.pb(a,
                    function(a) {
                        return a.getAttribute("data-aid") === c
                    })) && z.N(a.parentNode)
    }; z.e.BY = z.Tr(function() {
            z.aA.ba().show(!0);
            z.vi("collect", "click_add_collection_start", "collections_sidebar_create_collection")
        },
        !0); z.e.SC = function(a) {
        this.MB ? this.rb.W() ? this.rb.F(!1) : (this.rb.F(!0), a.stopPropagation(), a.preventDefault(), this.Kl()) : (a.stopPropagation(), a.preventDefault(), this.wk(), this.Kl());
        this.MB = !0
    }; z.e.Kl = function() {
        this.o().ta(window.document, "click",
            function() {
                this.rb.F(!1)
            })
    }; z.e.wk = function() {
        var a = z.J("zh-list-side-head");
        this.rb = new z.Zz;
        this.Yz = !0;
        this.visible || this.rb.Ja(this.rW = new z.Uz("设置为公开"));
        this.rb.Ja(this.mW = new z.Uz("删除此收藏夹"));
        this.Yz && (this.rb.render(a), this.o().g(this.rb, "action", this.mk))
    }; z.e.EB = function(a) {
        a = a.target;
        switch (a && a.name) {
            case "edit":
                z.fA(z.aA.ba());
                break;
            case "addcomment":
                z.ti({
                    category:
                        "collect",
                    action: "click_add_collection_comment_start",
                    label: "collection_collection_name_add_collection_comment_start"
                });
                yK(this);
                this.Ka.hi();
                this.Ka.od() && this.Ka.pj("view_comments", (0, window.parseInt)(z.qf(a), 10) || 0);
                break;
            case "remove":
                xK(this)
        }
    }; z.e.mk = function(a) {
        a.target === this.rW ? z.T.confirm("确定设置收藏夹为公开？", "收藏夹设置为公开后，将不能再设置为私密。",
            function(a) {
                a && zK(this)
            },
            this) : a.target === this.mW && xK(this)
    }; z.e.nA = function() {
        var a = 1,
            b = (0, window.$)("ul.hot-favlists"),
            c = null; (0, window.$)("#js-hot-fav-switch").click(function() {
            c && "pending" === c.state() || (a = 5 <= a ? 1 : a + 1, c = rK(a).done(function(a) {
                b.html(a)
            }))
        })
    }; z.y(AK, z.hj); AK.prototype.init = function() {
        if (this.Yk = z.J("zh-question-redirect-info")) this.Yk.innerHTML && (this.Vp = !0),
            this.o().g(this.Yk, "click",
                function(a) {
                    "cancel" === a.target.name && DK(this)
                });
        var a = z.J("zh-question-side-header-wrap");
        if (z.Z.fb && !z.Z.XI && a) {
            var b = z.J("zh-question-filter-wrap");
            b ? z.cf(a, b) : a.style[z.C ? "styleFloat": "cssFloat"] = "none"
        } (this.Mg = z.J("zh-question-operation-menu")) && this.wk();
        this.o().g(z.rp, "anon_change",
            function(a) {
                var b = z.J("zh-question-side-invitation-anon");
                b && z.P(b, a.wb); (b = z.J("zh-question-side-invitation-notanon")) && z.P(b, !a.wb);
                this.Zm && this.Zm.gb(TI(this.data.Th) || !a.wb)
            })
    }; AK.prototype.wk = function() {
        this.rb = new z.Zz;
        var a = this.data.io,
            b = this.Mg.getAttribute("data-auth"),
            b = b ? b.split(",") : [];
        if (null == a || 0 === a) this.rb.Ja(this.fv = CK("使用匿名身份", !1)),
            BK(this),
        z.X.tc || z.rm("question_op_redirect") || "close" === z.X.status || z.X.Pp || (this.rb.Ja(this.Zm = CK(this.Vp ? "撤消重定向": "问题重定向")), this.Zm.gb(TI(this.data.Th) || !this.data.wb)),
        z.rb(b, "auth-f-manage") && this.rb.Ja(this.qW = CK("更新话题页显示", !1)),
            this.o().g(this.rb, "action", this.mk),
        this.fv && this.o().g(z.rp, "anon_change",
            function() {
                BK(this)
            }),
        this.Ib && z.rb(b, "auth-pu-mark") && (this.rb.Ja(this.LB = CK("优质回答", !0)), this.LB.xc(this.Ib.aU)),
            a = new z.xA("Settings", this.rb),
            a.cj = !0,
            z.zA(a),
            a.w(this.Mg)
    }; AK.prototype.mk = function(a) {
        if (a.target === this.fv) z.pp(this.data.wb ? 0 : 1);
        else if (a.target === this.Zm) {
            if (!1 === z.BE({
                    Iq: !0
                })()) return ! 1;
            this.Kq || (this.Kq = new z.oE(this.qa), this.o().g(this.Kq, "change", this.IU));
            this.rb.F(!1);
            this.Vp ? DK(this) : this.Kq.show()
        } else a.target === this.lW ? (a = this.lW.Cg() ? "/unlock_summary": "/lock_summary", z.ep("/question/" + this.data.Ia + a,
            function() {
                window.top !== window ? window.top.location.href = "/question/" + z.X.Ia: window.location.reload()
            },
            "POST")) : a.target === this.qW ? window.$.post("/refresh_topic_feeds", {
            q: z.X.Ia
        }).done(function(a) {
            a.r || z.T.message("操作成功！")
        }) : a.target === this.LB && (a = this.LB.Cg() ? "/good_mark": "/good_unmark", window.$.post("/answer/" + this.Ib.Ia + a).done(function(a) {
                a.r || z.T.message("操作成功！")
            }))
    }; AK.prototype.IU = function() {
        this.Yk.innerHTML = '\x3cdiv class\x3d"zg-wrap"\x3e\x3cdiv class\x3d"zu-global-nitify-inner"\x3e\x3cspan class\x3d"zu-global-notify-icon"\x3e\x3c/span\x3e此问题将跳转至 \x3ca href\x3d"/question/' + this.Kq.Gv + '"\x3e' + this.Kq.QK + '\x3c/a\x3e（\x3ca href\x3d"javascript:;" name\x3d"cancel"\x3e撤消重定向\x3c/a\x3e）\x3c/div\x3e\x3c/div\x3e';
        z.P(this.Yk, !0);
        this.Vp = !0;
        this.Zm.Xq("撤消重定向")
    }; z.y(EK, z.Q);
    var FK = "headline",
        IO = {
            experience: "/topic/bio/update",
            headline: "/people/edit"
        },
        JO = "例：游戏开发者，科幻游戏爱好者;例：交互设计师，专注 iOS 平台产品设计;例：从医五年，口腔医学领域;例：金融硕士，三年从业经验;例：SNS 深度用户，社交产品设计师;例：十年互联网人，做过产品，写过代码;例：摄影爱好者，专注人像摄影;例：旅行爱好者，脚步遍及 32 个国家;例：读中外历史，研究各国文化;例：三次创业，两次失败，一次成功;例：坚持健身四年，专注有氧抗阻训练;例：做过动画，画过漫画".split(";"); z.e = EK.prototype; z.e.B = function() {
        this.L();
        var a, b;
        "experience" === this.type ? (b = "添加我在 " + this.vK.ii + " 话题下的话题经验", a = "在 " + this.vK.ii + " 话题下的话题经验") : (b = "添加一句话介绍", a = "一句话介绍");
        a = '\n    \x3cdiv class\x3d"zm-bio-item ' + (this.content.length ? "normal": "empty") + '"\x3e\n      \x3cp class\x3d"zm-bio-item-title"\x3e' + z.Ma(a) + '\x3c/p\x3e\n      \x3cinput class\x3d"zm-bio-item-checkbox" type\x3d"checkbox"/\x3e\n      \x3cimg class\x3d"avatar" src\x3d"' + z.Ma(z.Y.Hf()) + '"\x3e\n      \x3cdiv class\x3d"zm-bio-item-empty-tip"\x3e\n        \x3cspan class\x3d"sprite-topic-exprience-icon-add"\x3e\x3c/span\x3e\n        \x3ca href\x3d"javascript:;" name\x3d"edit"\x3e' + z.Ma(b) + '\x3c/a\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zm-bio-item-content"\x3e\n        \x3cspan class\x3d"username"\x3e' + z.Ma(z.Y[0]) + '\x3c/span\x3e\n        \x3cspan class\x3d"content"\x3e\n          ' + ("，" + z.Ma(this.content)) + '\n        \x3c/span\x3e\n        \x3ca href\x3d"javascript:;" name\x3d"edit" class\x3d"zu-edit-button"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  ';
        a = (0, window.$)(a);
        this.h = a.get(0);
        this.yf();
        this.WD = a.find(".zm-bio-item-checkbox");
        this.Ir = a.find(".content");
        this.T(this.h)
    }; z.e.yf = function() {
        var a = this.L(),
            b = (0, window.$)('\n    \x3cdiv class\x3d"zm-command"\x3e\n      \x3cspan class\x3d"limitTip"\x3e' + (40 - this.content.length) + ' / 40\x3c/span\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"save" class\x3d"zg-r3px zg-btn-blue"\x3e保存\x3c/a\x3e\n    \x3c/div\x3e\n  ').get(0),
            c = a.B("textarea", {
                className: "zm-bio-item-editor-input",
                value: this.content
            });
        this.JQ = a.B("div", "zm-bio-item-editor", [a.B("div", "zg-form-text-input", c), b]);
        new z.Ur(c);
        a.appendChild(this.h, this.JQ);
        this.zj = (0, window.$)(c);
        this.iJ = a.xg("limitTip", b);
        this.type !== FK && this.zj.prop("placeholder", JO[Math.floor(Math.random() * JO.length)])
    }; z.e.T = function(a) {
        EK.v.T.call(this, a);
        this.nr = this.content.length ? "normal": "empty"
    }; z.e.C = function() {
        var a = this;
        EK.v.C.call(this);
        this.o().g(this.h, "click",
            function() {
                "normal" === this.nr ? this.xc(!0) : "empty" === this.nr && (HK(this, "editing"), GK(this))
            }); (0, window.$)(this.h).find("a").click(function(b) {
            switch ((0, window.$)(b.target).prop("name")) {
                case "edit":
                    HK(a, "editing");
                    GK(a);
                    break;
                case "cancel":
                    a.gp();
                    break;
                case "save":
                    a.Qt()
            }
            b.stopPropagation()
        });
        this.zj.on("keyup",
            function(b) {
                b = 40 - (0, window.$)(b.target).val().length;
                z.po(a.iJ, "exceed", 0 > b);
                z.of(a.iJ, b + " / 40")
            })
    }; z.e.Qt = function() {
        var a = this.zj.val();
        if (40 > a.length) {
            var b = this,
                c = IO[this.type]; ("experience" === this.type ? window.$.post(c, {
                bio: a,
                tid: this.token
            }) : window.$.post(c, {
                data: JSON.stringify({
                    headline: a
                })
            })).then(function() {
                a.length ? (b.Ir.text("，" + a), b.xc(!0), HK(b, "normal")) : (b.Ir.text(""), b.xc(!1), HK(b, "empty"));
                b.X(a)
            })
        }
    }; z.e.gp = function() {
        this.content.length ? HK(this, "normal") : HK(this, "empty")
    }; z.e.X = function(a) {
        this.content = a;
        this.content.length ? this.Ir.text("，" + a) : this.Ir.text("")
    }; z.e.xc = function(a) {
        this.WD.prop("checked", a);
        a && this.dispatchEvent("bio_item_checked")
    }; z.e.cb = function() {
        return this.content
    }; z.e.getToken = function() {
        return this.token
    }; z.e.Cg = function() {
        return this.WD.prop("checked")
    }; z.y(IK, z.hj);
    var KK = null; z.e = IK.prototype; z.e.render = function(a) {
        var b = this;
        this.h = z.M("div", "zu-bio-editor-wrap", [this.JT = z.M("div", "zu-bio-editor-inner-wrap"), this.oc = z.M("div", "zm-command", [this.Ao = z.M("a", {
                name: "save",
                href: "#",
                className: "zg-r3px zg-btn-blue"
            },
            "完成")])]);
        var c = z.Y[4];
        c.length && OK(this, c, {
            type: FK,
            token: "headline"
        });
        z.A(this.iG,
            function(a) {
                OK(this, a[1], {
                    type: "experience",
                    ii: a[0][0],
                    token: a[0][3]
                })
            },
            this);
        this.GT && z.P(this.oc, !1);
        a.appendChild(this.h);
        this.o().g(this.oc, "click", this.Ya);
        this.g("bio_item_checked",
            function(a) {
                z.A(this.items,
                    function(b) {
                        b !== a.target && b.xc(!1)
                    })
            }); (0, window.$)(this.ua.Ft()).click(function() {
            b.sa({
                action: "click_edit_topic_experience_close"
            })
        })
    }; z.e.getSelection = function() {
        return this.items.find(function(a) {
            return a.Cg()
        })
    }; z.e.lz = function() {
        var a = this.getSelection();
        return a && a.cb()
    }; z.e.Ya = function(a) { (a = this.vh(a.target)) && "save" === a.name && (this.ua && (PK(this), this.ua.F(!1)), this.dispatchEvent("change"), this.sa({
        action: "click_edit_topic_experience_submit"
    }))
    }; z.e.sa = function(a) {
        this.dispatchEvent(Object.assign({
                type: "trackRequested",
                category: "edit_profile"
            },
            a))
    }; z.y(QK, z.Q); z.e = QK.prototype; z.e.D = function() {
        UK(this);
        this.ge.dispose();
        QK.v.D.call(this)
    }; z.e.w = function(a) {
        this.h = a;
        this.cu = z.L("draft-saved-info", a);
        z.P(this.cu, !1);
        this.qI = z.L("draft-saved-time", a);
        this.LP = z.L("draft-clear-button", a);
        a = this.o().g(this.ge, "tick", this.Hv).g(this.LP, "click", this.MP).g(this.qt, "keydown", this.mU);
        "oninput" in this.qt && !z.C ? a.g(this.qt, "input", this.LT) : a.g(this.qt, "keydown", this.MT);
        var b = z.gm.me && 1E3 * z.gm.me[1];
        b && (VK(this, b), this.qD = (0, window.setInterval)((0, z.t)(function() {
                VK(this, b)
            },
            this), 22E3))
    }; z.e.mU = function(a) { (a.metaKey || a.ctrlKey) && "s" === z.jl[a.keyCode] && (this.GU(), this.isContentEditable || a.preventDefault())
    }; z.e.Ky = function() { (0, window.$)(window).on("beforeunload.DraftSaver", (0, z.t)(function() {
            return "你的修改还未成功保存，确认离开该页面吗？"
        },
        this))
    }; z.e.Ys = function() { (0, window.$)(window).off("beforeunload.DraftSaver")
    }; z.e.LT = function() {
        TK(this);
        RK(this)
    }; z.e.MT = function(a) {
        z.Sn(a.keyCode) && (TK(this), RK(this))
    }; z.e.X = function(a) {
        this.bb.X(a);
        this.bb.$q()
    }; z.e.cb = function() {
        return this.bb.yg()
    }; z.e.rL = function() {
        if (!this.Wd) {
            var a = this.cb();
            if (a) {
                SK(this, "保存中…");
                var a = (new z.uj).add("qid", this.qa).add("content", a).add("timestamp", (0, z.I)()),
                    b = new z.dp;
                b.ajax("/answer/draft/save", a.toString(), "POST");
                this.o().g(b, "success", (0, z.t)(this.Qh, this));
                this.eJ = b;
                z.V.trackEvent(this.bb, {
                    action: "AutoSave"
                })
            }
        }
    }; z.e.TZ = 150; z.e.Hv = z.Kr(QK.prototype.TZ, QK.prototype.rL, !0); z.e.HU = 350; z.e.GU = z.Kr(QK.prototype.HU, QK.prototype.rL, !0); z.e.OT = 3E3; z.e.KT = z.Kr(QK.prototype.OT,
        function() {
            this.Wd || (this.cb() ? this.Hv() : WK(this))
        },
        !0); z.e.Qh = function(a) {
        a = z.Dn(a.target);
        var b = "",
            c = !1;
        0 === a.r ? (b = "已保存", z.V.trackEvent(this.bb, {
            action: "AutoSave"
        })) : (b = a.msg || "保存失败！请稍后再试。", c = !0);
        UK(this);
        z.P(this.cu, !0);
        SK(this, b, c);
        this.Ys();
        "保存成功" === a.msg && this.dispatchEvent("saveContent");
        this.ge.start()
    }; z.e.MP = function(a) {
        a.preventDefault();
        z.T.confirm("清除草稿", this.EI ? "你确定要清除保存的草稿并取消编辑吗？": "你确定要清除保存的草稿吗？",
            function(a) {
                a && (this.EI ? (WK(this), this.bb.dispatchEvent("cancel_edit"), this.bb.oj()) : (this.X(""), WK(this), xI(this.bb)))
            },
            this)
    }; z.y(YK, z.Q); YK.prototype.B = function() {
        YK.v.B.call(this);
        var a = (0, window.$)('\x3cdiv class\x3d"carousel"\x3e\x3cdiv class\x3d"carousel-navigation-btn"\x3e\x3cdiv class\x3d"carousel-left-btn copyright-ico-prev"\x3e \x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"carousel-content"\x3e\x3c/div\x3e\x3cdiv class\x3d"carousel-navigation-btn"\x3e\x3cdiv class\x3d"carousel-right-btn copyright-ico-next"\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        this.tU = (0, window.$)(".carousel-left-btn", a);
        this.SX = (0, window.$)(".carousel-right-btn", a);
        this.vF = (0, window.$)(".carousel-content", a);
        this.wF = (0, window.$)("\x3cdiv\x3e\x3c/div\x3e").addClass("carousel-navigation-dot-group");
        z.A(this.contents,
            function(a, c) {
                this.vF.append(a);
                this.wF.append(this.ct[c])
            },
            this);
        this.vF.append(this.wF);
        ZK(this, 0);
        this.T(a[0]);
        this.H = (0, window.$)(this.h).addClass(this.className)
    }; YK.prototype.C = function() {
        YK.v.C.call(this);
        this.tU.click(window.$.proxy(this.prev, this));
        this.SX.click(window.$.proxy(this.next, this))
    }; YK.prototype.next = function() {
        ZK(this, this.nh + 1) && this.dispatchEvent({
            type: "rightShow",
            offset: this.nh
        })
    }; YK.prototype.prev = function() {
        ZK(this, this.nh - 1) && this.dispatchEvent({
            type: "leftShow",
            offset: this.nh
        })
    };
    var dL = void 0; z.p(eL, z.Wv); z.e = eL.prototype; z.e.oH = function() {
        var a = (0, window.$)("#zh-question-title h2.zm-editable-content")[0];
        return {
            title: a && (/answer\/\d+$/.test(window.location.pathname) ? z.qf(a) : a.firstChild.nodeValue) || "",
            jl: this.Xj
        }
    }; z.e.lz = function() {
        return this.Cx
    }; z.e.Nv = function(a) {
        this.wb = a
    }; z.e.gb = function(a, b) {
        this.enabled = a;
        this.ju ? (this.oj(), this.Rb = b, this.mc.innerHTML = this.Rb) : b && (this.Rb = b)
    }; z.e.T = function(a) {
        z.Wv.prototype.T.call(this, a);
        this.ju = !0;
        z.S.add(this.mc, "zu-answer-form-disabled-wrap")
    }; z.e.D = function() {
        this.du && (z.N(this.du), this.RM = this.du = null);
        z.Wv.prototype.D.call(this)
    }; z.e.jk = function(a) {
        this.Nv(a.wb);
        this.fo && (this.fo.checked = a.wb)
    }; z.e.C = function() {
        z.Wv.prototype.C.call(this);
        this.o().g(z.rp, "anon_change", this.jk);
        iL(this)
    }; z.e.yf = function() {
        z.Wv.prototype.yf.call(this);
        var a = this.L(),
            b = z.Y.authed();
        this.du = a.B("div", "zh-answer-form clearfix", [b ? SI(this.QM) : "", this.RM = a.B("div", null, [a.B("div", "zu-answer-form-title", [b ? RI(this.QM) : "我来回答这个问题", this.lF = a.B("span")])])]);
        b && !z.Y.tc && (b = z.jm.value, "TOPIC" === z.jm.type ? hL(this, b) : fL(this, b), (0, window.$)(this.lF).on("click", "a.zu-edit-button",
            function(a) {
                z.ti({
                    category: "edit_profile",
                    action: "click_edit_topic_experience_start",
                    label: "add_answer_box_edit_topic_experience",
                    attributes: {
                        text: (0, window.$)(a.target).text()
                    }
                })
            }));
        a.ku(this.du, this.Xj);
        this.o().g(this.RM, "click", this.Ya);
        z.Y.authed() ? z.Y.activated || z.Y.lu || jL(this, '\x3cdiv class\x3d"activate-mask-tip-answer"\x3e为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机。\x3c/div\x3e', '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : jL(this, '\x3cdiv class\x3d"signin-mask-tip-answer"\x3e\x3c/div\x3e', '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:"\x3e我要回答\x3c/a\x3e\x3c/div\x3e')
    }; z.e.It = function(a) {
        switch (a) {
            case "edit_bio":
                nL(this);
                break;
            case "cancel_delete":
                this.dispatchEvent(rM);
                break;
            case "answer_my_question":
                kL(this)
        }
        return ! 0
    }; z.e.ne = function() {
        "editing" === this.status ? this.Vb && z.P(this.Vb, !0) : this.Vb && z.P(this.Vb, !1);
        z.P(this.Ad, !1);
        this.mc && z.P(this.mc, !this.enabled)
    }; z.e.Vl = function() {
        var a = (0, z.Rr)(KO);
        this.oc = z.Ye(a({
            questionStatus: z.X.status,
            statusText: {
                suggest: "建议修改",
                evaluate: "建议修改",
                close: "关闭"
            } [z.X.status]
        }));
        this.Ao = (0, window.$)(".submit-button", this.oc)[0];
        lL(this); (this.Ms = (0, window.$)("[name\x3dcopyright]", this.oc)[0]).value = z.Y.DA ? "2": "1";
        mL(this);
        this.Vb.appendChild(this.oc);
        this.ready(function() {
            if (this.Ta && this.Ta.on) this.Ta.on("load", this.mA, !1, this)
        });
        z.Z.fb || bL()
    }; z.e.mA = function() {
        var a = new QK(this);
        z.Ac(this, a);
        this.o().g(a, "saveContent",
            function() {
                var a = !this.Yd && this.Ta.dc.FullScreenPlugin;
                a && vI(a)
            },
            !1, this);
        var b = yI(this);
        this.o().g(b, "focus",
            function() {
                a.ge.start()
            }).g(b, "blur",
            function() {
                TK(a);
                a.Hv()
            }).g(this, "saveSuccess",
            function() {
                TK(a);
                WK(a)
            });
        a.w(this.oc);
        this.zG = a
    }; z.e.zB = function() {
        var a = JK(),
            b = a.lz(),
            a = (a = a.getSelection()) && a.type;
        a === FK ? fL(this, b) : "experience" === a ? hL(this, b) : gL(this, "", "填写话题经验，提升回答可信度")
    };
    var rM = "cancel_delete_answer",
        KO = '\x3cdiv class\x3d"zm-command clearfix"\x3e' + (z.Y.tc ? "": '\x3clabel class\x3d"zg-left anno-box"\x3e\x3cinput name\x3d"anno-checkbox" type\x3d"checkbox"\x3e 匿名 \x3cspan\x3e\x26nbsp\x3c/span\x3e\x3c/label\x3e ') + '\x3clabel class\x3d"zg-left copyright-box"\x3e\x3cselect name\x3d"copyright"\x3e\x3coption value\x3d1\x3e允许规范转载\x3c/option\x3e\x3coption value\x3d2\x3e允许付费转载\x3c/option\x3e\x3coption value\x3d0\x3e禁止转载\x3c/option\x3e\x3c/select\x3e' + (z.Z.fb ? "": '\x3ca href\x3d"/terms#sec-licence-6" class\x3d"demo-trigger" target\x3d"_blank"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark" style\x3d"margin-left: 5px;" id\x3d"copyright_question_mark" data-copyright-demo\x3d"true"\x3e\x3c/i\x3e\x3c/a\x3e') + '\x3c/label\x3e \x3c% if (questionStatus !\x3d\x3d "normal") { %\x3e\x3cspan class\x3d"zg-gray-normal" style\x3d"margin-right:5px;"\x3e被\x3c%\x3d statusText %\x3e的问题不允许添加新的回答\x3c/span\x3e\x3ca class\x3d"zg-right" data-tooltip\x3d"s$b$为什么部分问题会被「关闭」「建议修改」？" href\x3d"/question/21290061 "\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e\x3c% } %\x3e\x3cspan class\x3d"\x3c%\x3d (questionStatus !\x3d\x3d "normal" ? "hidden" : "") %\x3e zg-right"\x3e\x3ca class\x3d"submit-button zg-btn-blue" name\x3d"save" href\x3d"javascript:"\x3e发布回答\x3c/a\x3e\x3c/span\x3e\x3cdiv class\x3d"draft-controls zg-right ' + (z.Z.fb ? "draft-controls-mobile": "") + '"\x3e\x3cspan class\x3d"draft-saved-info"\x3e\x3ca class\x3d"draft-clear-button goog-inline-block" href\x3d"#" data-tooltip\x3d"s$b$删除草稿"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e\x3cspan class\x3d"hide-text"\x3e清除草稿\x3c/span\x3e\x3c/a\x3e\x3cspan class\x3d"draft-saved-time"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e'; z.y(oL, z.Q); oL.prototype.B = function() {
        oL.v.B.call(this);
        this.h = z.Ye(LO)
    }; oL.prototype.C = function() {
        oL.v.C.call(this);
        this.wa = (0, window.$)(this.m());
        this.tn = z.ut("answer", this.VE);
        var a = z.Kw(window.location.protocol + "//" + window.location.hostname + "/question/" + this.mX + "/answer/" + this.VE); (0, window.$)(".js-qrcode-image", this.wa).attr("src", a);
        this.Db()
    }; oL.prototype.Db = function() {
        var a = this; (0, window.$)("button.weibo", this.wa).click(function() {
            a.tn.done(function(a) {
                a.r || (z.vD(a.msg.sina), z.vi("share", "click_share_answer_to_weibo_start", "answer_box_after_submit_answer"))
            })
        })
    };
    var LO = '\x3cdiv class\x3d"answer-share-tip"\x3e分享我的回答到\x3cbutton class\x3d"wechat hidden-phone"\x3e\x3cdiv class\x3d"qr-code"\x3e扫描二维码\x3cimg class\x3d"js-qrcode-image" alt\x3d"微信分享二维码"\x3e\x3c/div\x3e\x3cspan class\x3d"ico z-ico-wechat"\x3e\x3c/span\x3e微信\x3c/button\x3e\x3cbutton class\x3d"weibo"\x3e\x3cspan class\x3d"ico z-ico-weibo"\x3e\x3c/span\x3e微博\x3c/button\x3e\x3c/div\x3e'; z.y(pL, z.Wv);
    var sL = [{
        value: "精简文字描述",
        label: "精简文字描述"
    },
        {
            value: "补充必要的信息",
            label: "补充必要的信息"
        },
        {
            value: "改进标点或格式",
            label: "改进标点或格式"
        },
        {
            value: "other",
            label: "其他"
        }]; z.e = pL.prototype; z.e.w = function(a) {
        pL.v.w.call(this, a);
        this.o().g(z.rp, "anon_change", this.jk)
    }; z.e.jk = function(a) {
        this.NI || z.S.enable(this.h, "zm-editable-disabled", a.wb)
    }; z.e.Vl = function() {
        pL.v.Vl.call(this);
        this.mC = z.M("div", {
                "class": "zm-editable-require-reason-wrap",
                style: "padding:10px 0 0 0"
            },
            [z.M("a", {
                    "class": "zg-right zg-link-litblue",
                    href: "/question/19550238/answer/12202028",
                    target: "_blank"
                },
                z.X.tc ? "": "为什么问题可以被公共编辑？"), rL(), this.DJ = z.M("span"), this.oX = z.M("div", {
                    "class": "zg-form-text-input",
                    style: "height:22px;margin:10px 0 0 0;display:none"
                },
                this.nX = z.M("textarea", {
                    style: "width:100%;height:22px !important;min-height:22px !important;"
                }))]);
        z.cf(this.mC, this.oc);
        this.Qq && tL(this, " * 必选", "zg-gray-normal");
        var a = z.Me("select", null, this.mC)[0];
        this.o().g(a, "change",
            function() {
                z.P(this.oX, "other" === a.value);
                tL(this, " * 必选", "zg-gray-normal")
            })
    }; z.e.Qh = function(a) {
        var b = z.Me("select", null, this.mC)[0],
            c = b.value;
        if (this.Qq) {
            if ("none" === c) {
                tL(this, "请选择一个修改理由");
                return
            }
            if ("other" === b.value && (c = z.lr(this.nX.value), !c)) {
                tL(this, "请填写修改理由");
                return
            }
        }
        "title" === this.Ts && -1 === a.indexOf("?") && -1 === a.indexOf("？") ? tL(this, "还没有输入问号") : ("none" === c && (c = ""), this.params = ["id\x3d" + this.qa + "\x26reason\x3d" + (0, window.encodeURIComponent)(c) + "\x26question_id\x3d" + this.qa], this.dispatchEvent("change"), pL.v.Qh.call(this, a), tL(this, "* 必选", "zg-gray-normal"), this.Qq = !0)
    }; z.e.yg = function() {
        return this.Yd && this.zW ? (0, z.Fr)(z.Zo(this.Ta.value)) : pL.v.yg.call(this)
    }; z.e.th = function() { (0, window.$)(window).on("beforeunload.EditorWithReason", (0, z.t)(function() {
            return "你对问题的修改还未保存，确认离开该页面吗？"
        },
        this))
    }; z.e.Gi = function() { (0, window.$)(window).off("beforeunload.EditorWithReason")
    }; z.e.oj = function() {
        pL.v.oj.call(this);
        this.Gi()
    }; z.e.Wg = function() {
        pL.v.Wg.call(this);
        this.th()
    }; z.y(uL, z.Q); uL.prototype.K = function(a, b) {
        uL.v.K.call(this, a, b);
        this.o().g(a, "beforeexpand", this.US)
    }; uL.prototype.US = function(a) {
        var b = a.target;
        z.Ch(this,
            function(a) {
                b !== a && a.od() && a.Kc(!1)
            })
    }; uL.prototype.dispose = function() {
        this.o().dispose();
        uL.v.dispose.call(this)
    }; z.y(vL, z.R); vL.prototype.C = function() {
        vL.v.C.call(this);
        z.Zh(this, 490); (0, window.$)(this.m()).addClass("user-guiding-dialog")
    }; z.y(BL, z.Q); z.e = BL.prototype; z.e.B = function() {
        BL.v.B.call(this);
        this.h = z.M("div", {
            className: "question-invite-panel"
        })
    }; z.e.C = function() {
        BL.v.C.call(this);
        this.H = (0, window.$)(this.m());
        z.V.Va(this, {
            module: "InvitationCard"
        })
    }; z.e.D = function() {
        BL.v.D.call(this);
        this.Z && this.Z.dispose();
        delete this.Z;
        delete this.Jm;
        delete this.yk
    }; z.e.od = function() {
        return this.ub
    }; z.e.hi = function() {
        this.Kc(!this.ub)
    }; z.e.Kc = function(a) {
        a !== this.od() && (this.dispatchEvent(a ? "beforeexpand": "beforecollapse"), a && !this.Jc && CL(this), this.ub = a, this.H.toggle(a), this.dispatchEvent(a ? "expand": "collapse"))
    }; z.e.kA = function(a) {
        var b = this,
            c = (0, z.Rr)(MO),
            d = new z.Xs(a, {
                Be: 20,
                source: "/question/ac/invite-people?question_token\x3d" + this.Gq,
                dj: this.m(),
                placeholder: "搜索你想邀请的人",
                qd: function(a, b, d) {
                    d.innerHTML = c(a.data)
                },
                filter: function(a) {
                    return z.lb(a,
                        function(a) {
                            return ! HL(b, a.member_hash)
                        })
                },
                select: function() {
                    return ""
                },
                format: function(a) {
                    return a
                }
            });
        d.ij = function() {
            return ! 1
        };
        var f = d.M;
        f.className = "suggest-persons search";
        f.Xh = "person";
        f.Ug(!1);
        var g = (0, window.$)(".suggest-persons-wrapper", this.h),
            h = z.Wh(function() { (0, window.$)(f.m()).on("click", "button", window.$.proxy(b.FH, b))
            }),
            k = (0, window.$)(".invite-title .spinner-gray"); (0, window.$)(".search-input", this.h).on("input",
            function() {
                k.css("display", "inline-block")
            });
        d.addEventListener("show",
            function(a) {
                var c = this;
                k.hide();
                var d = f.m();
                g.hide(); (0, window.$)(".no-result-tips", b.h).remove();
                var v = (0, window.$)(".person", d);
                5 < v.length && (v.hide().slice(0, 5).show(), (0, window.$)('\x3ca class\x3d"js-more" href\x3d"#"\x3e更多搜索结果\x3c/a\x3e').appendTo(d).one("click",
                    function() {
                        var b = this;
                        z.V.trackEvent(a.target, {
                            action: "LoadMore",
                            element: "Button"
                        });
                        v.each(function(a, c) {
                            "none" === c.style.display && AL(c, b.h)
                        });
                        v.show(); (0, window.$)(this).remove();
                        return ! 1
                    }));
                h();
                v.each(function(a, b) {
                    zL(b);
                    "none" !== b.style.display && AL(b, c.h)
                })
            });
        d.addEventListener("hide",
            function() {
                k.hide();
                a.value.length ? (0, window.$)(".no-result-tips", b.h).length || (g.hide(), (0, window.$)('\x3cspan class\x3d"no-result-tips"\x3e没有找到你想邀请的人\x3c/span\x3e').appendTo(b.h)) : (g.show(), (0, window.$)(".no-result-tips", b.h).remove())
            });
        d.addEventListener("dismiss",
            function() { (0, window.$)(".no-result-tips", b.h).remove();
                g.show()
            });
        this.Z = d
    }; z.e.lV = function() {
        this.od() ? (this.Z && this.Z.dispose(), CL(this)) : this.Jc = !1
    }; z.e.FR = function() {
        z.pp(0)
    }; z.e.FH = z.Tr(function(a) {
            var b = a.target,
                c = this.FK((0, window.$)(b).parents(".person"));
            this.Jm && "pending" === this.Jm.state() && this.Jm.abort();
            var d = b.getAttribute("data-type"),
                f = z.S.has(b, this.AI),
                g = (0, z.t)(function(d) {
                        d ? (z.V.trackEvent(a.target, {
                            action: "Invite",
                            element: "Button"
                        }), JL(this, b, !0), this.yk.unshift(c), LL(this), IL(this, c.id, !0), this.EP()) : (z.V.trackEvent(a.target, {
                            action: "UnInvite",
                            element: "Button"
                        }), JL(this, b, !1), KL(this, c.id), IL(this, c.id, !1))
                    },
                    this);
            f ? (this.Jm = OI(this.Gq, c.id), g(!1)) : (this.Jm = window.$.post("/question/askpeople", {
                qid: this.Gq,
                uid: c.id,
                _source_type: d,
                op: "add"
            }).done(function(a) {
                a.r && (z.T.message(a.msg), g(!1))
            }), g(!0), GL(this, d))
        },
        !0); z.e.GR = function(a) {
        a = a.target.getAttribute("data-uid");
        OI(this.Gq, a);
        IL(this, a, !1);
        KL(this, a)
    }; z.e.EP = z.Wh(function() {
        z.Y.Th && window.$.post("/question/popup", {
                action: "invite",
                question_token: this.Gq
            },
            function(a) {
                a && yL(new vL, a)
            })
    }); z.e.FK = function(a) {
        var b = (0, window.$)(".zm-item-link-avatar", a),
            c = (0, window.$)(".zg-link", a);
        return {
            id: String((0, window.$)("button", a).data("uid")),
            avatar: (0, window.$)("img", b).attr("src"),
            fullname: c.text(),
            url_token: b.attr("href").split("/").slice( - 1)[0]
        }
    };
    var DL = '\x3ci class\x3d"icon icon-spike"\x3e\x3c/i\x3e\x3cdiv class\x3d"spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e',
        NL = '你已邀请 \x3cspan class\x3d"invited-shortlist"\x3e\x3c% helper.each(persons.slice(0, 2), function(person, i, sliced) { %\x3e\x3ca href\x3d"/people/\x3c%\x3dperson.url_token%\x3e" class\x3d"zg-link-gray" target\x3d"_blank"\x3e\x3c%\x3dperson.fullname%\x3e\x3c/a\x3e\x3c%\x3d i !\x3d\x3d sliced.length - 1 ? "、" : ""%\x3e\x3c% }); %\x3e\x3c%\x3dhelper.fullList()%\x3e\x3c/span\x3e\x3c% if (persons.length \x3e 2) { %\x3e 等 \x3c%\x3dpersons.length%\x3e 人 \x3c% } %\x3e\x3c% if (persons.length \x3c maxInvites) { %\x3e ，还可以邀请 \x3c%\x3dmaxInvites - persons.length%\x3e 人\x3c% } %\x3e',
        ML = '\x3cdiv class\x3d"invited-hovercard"\x3e\x3ci class\x3d"icon icon-spike"\x3e\x3c/i\x3e\x3cul class\x3d"invited-fulllist"\x3e\x3c% helper.each(persons, function(person, i) { %\x3e\x3cli\x3e\x3ca title\x3d"\x3c%-person.fullname%\x3e" class\x3d"zm-item-link-avatar" href\x3d"/people/\x3c%\x3dperson.url_token%\x3e" target\x3d"_blank"\x3e\x3cimg src\x3d"\x3c%\x3dperson.avatar%\x3e" class\x3d"zm-item-img-avatar"\x3e\x3c/a\x3e\x3ca href\x3d"/people/\x3c%\x3dperson.url_token%\x3e" class\x3d"zg-link-gray" title\x3d"\x3c%-person.fullname%\x3e" target\x3d"_blank"\x3e\x3c%\x3dperson.fullname%\x3e\x3c/a\x3e\x3cbutton class\x3d"cancel-button zg-link-btn zg-link-gray" data-uid\x3d"\x3c%\x3dperson.id%\x3e"\x3e收回邀请\x3c/button\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3c/div\x3e',
        MO = '\x3ca data-hovercard\x3d"p$t$\x3c%\x3durl_token%\x3e" class\x3d"zm-item-link-avatar" href\x3d"\x3c%\x3dprofile_url%\x3e" title\x3d"\x3c%\x3dfullname%\x3e" target\x3d"_blank"\x3e\x3cimg src\x3d"\x3c%\x3davatar_path%\x3e" class\x3d"zm-item-img-avatar"\x3e\x3c/a\x3e\x3cdiv class\x3d"content"\x3e\x3cbutton class\x3d"invite-button zg-btn zg-btn-green" data-uid\x3d"\x3c%\x3dmember_hash%\x3e" data-type\x3d"search"\x3e邀请回答\x3c/button\x3e\x3cdiv class\x3d"describe"\x3e\x3cspan data-hovercard\x3d"p$t$\x3c%\x3durl_token%\x3e" href\x3d"\x3c%\x3dprofile_url%\x3e" class\x3d"author-link-line" target\x3d"_blank"\x3e\x3ca class\x3d"zg-link author-link"\x3e\x3c%\x3dhighlighted_fullname%\x3e\x3c/a\x3e\x3c% if (badge) { %\x3e\x3c% if ((is_org || badge.identity) \x26\x26 badge.best_answerer) { %\x3e\x3ci class\x3d"icon icon-badge-id-an icon-badge" data-tooltip\x3d"s$b$优秀回答者 · 已认证的\x3c% if (is_org) { %\x3e机构\x3c% } else { %\x3e个人\x3c% } %\x3e"\x3e\x3c/i\x3e\x3c% } else if (is_org) { %\x3e\x3cspan class\x3d"OrgIcon sprite-global-icon-org-14" data-tooltip\x3d"s$b$已认证的机构"\x3e\x3c/span\x3e\x3c% } else if (badge.identity) { %\x3e\x3ci class\x3d"icon icon-badge-identity icon-badge" data-tooltip\x3d"s$b$已认证的个人"\x3e\x3c/i\x3e\x3c% } else if (badge.best_answerer) { %\x3e\x3ci class\x3d"icon icon-badge-best_answerer icon-badge" data-tooltip\x3d"s$b$优秀回答者"\x3e\x3c/i\x3e\x3c% } %\x3e\x3c/span\x3e\x3c% } %\x3e\x3c% if (badge) { %\x3e\x3c% if (badge.best_answerer) { %\x3e\x3cspan class\x3d"badge-summary"\x3e\x3c% if (badge.best_answerer.topics.length \x3d\x3d\x3d 1) { %\x3e\x3ca href\x3d"\x3c%\x3dprofile_url%\x3e#hilightbadge" target\x3d"_blank"\x3e\x3c%\x3dbadge.best_answerer.topics[0].name%\x3e话题优秀回答者\x3c/a\x3e\x3c/span\x3e\x3c% } else if (badge.best_answerer.topics.length \x3e 1) { %\x3e\x3ca href\x3d"\x3c%\x3dprofile_url%\x3e#hilightbadge" target\x3d"_blank"\x3e\x3c%\x3dbadge.best_answerer.topics[0].name%\x3e等 \x3c%\x3dbadge.best_answerer.topics.length%\x3e 个话题优秀回答者\x3c/a\x3e\x3c/span\x3e\x3c% } %\x3e\x3c% } else if (badge.identity) { %\x3e，\x3cspan class\x3d"badge-summary"\x3e\x3c%-badge.identity.description%\x3e\x3c/span\x3e\x3c% } %\x3e\x3c% } %\x3e\x3c% if (headline) { %\x3e \x3cspan class\x3d"bio" title\x3d"\x3c%-headline%\x3e"\x3e\x3c%\x3dhighlighted_headline%\x3e\x3c/span\x3e\x3c% } %\x3e\x3c/div\x3e\x3cdiv class\x3d"reason"\x3e\x3c% if (detailed_info) {%\x3e \x3c%\x3ddetailed_info%\x3e\x3c% } %\x3e\x3c% if (topic["answer_num"]) {%\x3e在 \x3ca href\x3d"\x3c%\x3dprofile_url%\x3e/topic/\x3c%\x3dtopic["url_token"]%\x3e/answers" data-hovercard\x3d"t$b$\x3c%\x3dtopic["url_token"]%\x3e" data-token\x3d"\x3c%\x3dtopic["url_token"]%\x3e" data-topicid\x3d"\x3c%\x3dtopic["id"]%\x3e" target\x3d"_blank"\x3e \x3c%\x3dtopic["name"]%\x3e \x3c/a\x3e 话题下有 \x3c%\x3dtopic["answer_num"]%\x3e 个回答 \x3c% } %\x3e\x3c/div\x3e\x3c/div\x3e'; z.y(OL, z.Q); z.e = OL.prototype; z.e.C = function() {
        var a = this;
        OL.v.C.call(this);
        var b = z.L("zm-meta-panel", this.h);
        this.o().g(b || this.h, "click", this.EB);
        PL(this);
        z.Z.fb || RL(this);
        this.o().g(this, "click!",
            function(a) {
                "comment" === a.namespace && a.Nc.fill("label", "question")
            });
        this.g("trackRequested",
            function(a) {
                a.label = "question_box";
                z.ti(a)
            });
        z.V.Va(this, {
                module: "QuestionItem"
            },
            function() {
                return {
                    card: {
                        card_type: "Content",
                        content: {
                            type: "Question",
                            token: a.data.Ia.toString()
                        }
                    }
                }
            });
        "#showWechatShareTip" === window.location.hash && window.location.pathname.match(/\/question\/([\d]+)$/) && (z.V.trackEvent(this, {
                action: "Share",
                element: "QRCode"
            },
            {
                share: {
                    type: "Wechat"
                }
            }), z.ti({
            category: "share",
            action: "scan_share_question_to_wechat_start"
        }), window.location.hash = "")
    }; z.e.Ep = function() {
        var a = this.h.querySelector("a[name\x3dreport-question]");
        if (a) {
            var b = this;
            a.addEventListener("click",
                function() { (new z.Lz({
                    type: "question",
                    id: b.data.qa,
                    Ia: b.data.Ia
                })).render();
                    z.V.trackEvent(b, {
                        action: "ReportIntent",
                        element: "Button"
                    })
                })
        }
    }; z.e.Eh = function() {
        var a = (0, window.$)('a[name\x3d"share"]', this.m()).get(0);
        a && z.wD(a, "question", this.data.Ia, window.location.protocol + "//" + window.location.host + "/question/" + this.data.Ia).xb(this)
    }; z.e.EB = function(a) {
        var b = (a = z.xr(this.h, a.target)) && a.name;
        if (b) {
            switch (b) {
                case "addcomment":
                    "添加评论" === window.$.trim((0, window.$)(a).text()) ? z.Tr(this.wH).call(this, a) : this.wH(a);
                    break;
                case "remove":
                    TL(this);
                    break;
                case "orgLock":
                    UL(this);
                    break;
                case "orgUnlock":
                    VL(this);
                    break;
                case "admin":
                    SL(this, a);
                    break;
                case "invite":
                    this.AA.hi(),
                        this.dispatchEvent(new z.YB("click!invitation", {
                            category: "invitation",
                            action: (this.AA.od() ? "show": "hide") + "_ask_to_answer_card",
                            label: "?",
                            value: this.data.Re
                        }))
            }
            this.Ff && (this.Ff.update(), z.Hr(this.Ff.h))
        }
    }; z.e.wH = function(a) {
        this.Ka.hi();
        this.Ka.od() && this.Ka.pj("view_comments", (0, window.parseInt)(z.qf(a), 10) || 0)
    }; z.e.VP = function(a) {
        this.CE.Y(a.msg.action);
        this.CE.Xq(a.msg.caption)
    }; z.y(WL, z.Wv); z.e = WL.prototype; z.e.C = function() {
        WL.v.C.call(this);
        this.ready(function() {
            if (this.Ta && this.Ta.on) this.Ta.on("load", this.mA, !1, this)
        })
    }; z.e.mA = function() {
        var a = new QK(this, !0);
        z.Ac(this, a);
        this.o().g(a, "saveContent",
            function() {
                var a = !this.Yd && this.Ta.dc.FullScreenPlugin;
                a && vI(a); (0, window.$)(this.zs).text("保存草稿并离开"); (0, window.$)(this.h).find(".zu-edit-button span").text("修改（有未发布的编辑草稿）")
            }).g(a, "clearContent",
            function() { (0, window.$)(this.zs).text("取消"); (0, window.$)(this.h).find(".zu-edit-button span").text("修改")
            });
        var b = yI(this);
        this.o().g(b, "focus",
            function() {
                a.ge.start()
            }).g(b, "blur",
            function() {
                TK(a);
                this.YP !== this.yg() && a.Hv()
            }).g(this, "saveSuccess",
            function() {
                delete z.gm.me;
                TK(a);
                WK(a)
            }).g(this, "save_unchanged",
            function() {
                delete z.gm.me;
                TK(a);
                WK(a)
            });
        a.w(this.oc);
        z.gm.me && z.gm.me[0] && (0, window.$)(this.zs).text("保存草稿并离开")
    }; z.e.Vl = function() {
        this.oc = z.M("div", "zm-command", [(0, window.$)('\x3cdiv class\x3d"draft-controls zg-left"\x3e\x3cspan class\x3d"draft-saved-info"\x3e\x3ca class\x3d"draft-clear-button goog-inline-block" href\x3d"#" data-tooltip\x3d"s$b$取消编辑并删除草稿"\x3e\x3ci class\x3d"zg-icon zg-icon-bin"\x3e\x3c/i\x3e\x3cspan class\x3d"hide-text"\x3e清除草稿\x3c/span\x3e\x3c/a\x3e\x3cspan class\x3d"draft-saved-time"\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e')[0], this.zs = z.M("a", {
                "class": "zm-command-cancel",
                name: "cancel",
                href: "#"
            },
            "取消"), this.Ao = z.M("a", {
                "class": "zg-r3px zg-btn-blue",
                name: "save",
                href: "#"
            },
            "发布")]);
        this.Vb.appendChild(this.oc)
    }; z.e.az = function() {
        var a = this;
        window.$.get("/draft/get", {
                qid: this.Tq
            },
            function(b) {
                b.r || (a.Pv(b.msg), a.YP = b.msg)
            })
    }; z.e.mH = function() {
        var a = [];
        if (!this.disabled) {
            var b = "修改";
            z.gm.me && z.gm.me[0] && (b = "修改（有未发布的编辑草稿）");
            a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e\x3cspan\x3e' + b + "\x3c/span\x3e\x3c/a\x3e")
        }
        return a.join("")
    }; z.y(XL, z.QD);
    var YL = {
        qa: null,
        ib: null,
        qG: !1,
        ry: z.X
    }; z.e = XL.prototype; z.e.Ui = function() {
        XL.v.Ui.call(this, {
            PF: ".zm-editable-content"
        })
    }; z.e.JL = function() {
        if (z.Nm || this.options.qG) return ! 1;
        var a = (0, window.$)(".js-collapse-body", this.h)[0];
        return !! a && 1 < a.offsetHeight / z.Km.size.height
    }; z.e.nw = function() {
        z.vi("view_answer", "click_expand_answer", "answer_box_expand_answer")
    }; z.e.mw = function() {
        z.vi("view_answer", "click_collapse_answer", "answer_box_collapse_answer")
    }; z.e.vJ = function() {
        this.cq()
    }; z.e.C = function() {
        var a = this;
        XL.v.C.call(this);
        ZL(this);
        this.tf = z.L("zm-item-answer-author-info", this.h);
        this.Rh && this.tf && (this.xK = (this.wb = z.Va(this.tf.innerHTML, "匿名用户")) ? null: this.tf.innerHTML.replace(/src=".+?"/g, 'src\x3d"' + z.Y[2] + '"'), this.Nv(this.ry.wb), this.o().g(this.tf, "click",
            function(a) {
                "cancel-anon" === a.target.name && z.pp(!1)
            }));
        this.ic();
        this.g("trackRequested",
            function(b) {
                b.label = "answer_box";
                b.value = (0, window.$)(a.h).index(".zm-item-answer") + 1;
                z.ti(b)
            });
        "#showWechatShareTip" === window.location.hash && window.location.pathname.match(/\/question\/([\d]+)\/answer\/([\d]+)$/) && (z.V.trackEvent(this, {
                action: "Share",
                element: "QRCode"
            },
            {
                share: {
                    type: "Wechat"
                }
            }), z.ti({
            category: "share",
            action: "scan_share_answer_to_wechat_start"
        }), window.location.hash = "")
    }; z.e.ic = function() {
        this.tf && this.o().g(this.tf, "click", this.Ya);
        this.Rh && (this.cP = z.Y);
        this.o().g(z.rp, "anon_change",
            function(a) {
                this.Rh ? this.Nv(a.wb) : this.ah && this.YM && this.ah.getState() === z.HD.fh && z.ND(this.YM)
            });
        $L(this); (0, window.$)(this.h).on("focusin focusout",
            function(a) { (0, window.$)(this).toggleClass("focusin", "focusin" === a.type)
            })
    }; z.e.vh = function(a) {
        return z.xr(this.h, a)
    }; z.e.Ya = function(a) {
        var b = this.vh(a.target);
        if (b = b && b.name)"edit" === b ? (b = JK(), this.Dx || (LK(b), this.o().g(b, "change", this.zB).g(b, "trackRequested",
            function(a) {
                a.label = "answer_box_edit_topic_experience";
                z.ti(a)
            })), this.Dx = !0, NK(b), z.ti({
            category: "edit_profile",
            action: "click_edit_topic_experience_start",
            label: "answer_box_edit_topic_experience",
            attributes: {
                text: (0, window.$)(a.target).text()
            }
        })) : "complex" === b && (a = z.L("zm-item-answer-summary", this.h), b = z.L("zm-item-rich-text", this.h), z.P(a, !1), z.P(b, !0))
    }; z.e.zB = function() {
        var a = JK().lz() || "",
            b = z.L("bio", this.tf);
        if (!b) {
            var c = z.L("author-link", this.tf),
                b = z.M("span", "bio");
            z.df(b, c)
        }
        a && (a = "，" + bJ(a), a = z.Ma(a));
        b.title = a;
        b.innerHTML = a
    }; z.e.Nv = function(a) {
        a ? this.tf.innerHTML = '匿名用户\x3ca class\x3d"zg-link-gray cancel-anon" href\x3d"#" name\x3d"cancel-anon"\x3e取消匿名\x3c/a\x3e': (a = z.Y.tc ? "": '\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改话题经验\x3c/a\x3e', this.xK ? this.tf.innerHTML = this.xK + a: (a = [], a.push(PI()), a.push(QI(z.Y, "zm-item-answer-creator")), this.tf.innerHTML = a.join("")))
    }; z.e.nk = function() {
        var a = this,
            b = (0, window.$)(this.m());
        b.slideUp(function() {
            a.Rh ? (a.Op = !0, a.Zw = "set_delete", a.dispatchEvent("change")) : (a.dispose(), b.remove())
        })
    }; z.e.sa = function(a) {
        this.dispatchEvent(Object.assign({
                type: "trackRequested"
            },
            a))
    }; z.y(bM, z.Q); z.e = bM.prototype; z.e.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; z.e.C = function() {
        bM.v.C.call(this);
        eM(this);
        this.oq = new tK;
        this.o().g(this.oq, "change", this.UB);
        this.oq.init();
        this.HL();
        var a = z.J("zh-question-meta-wrap");
        a && (this.uv = new OL(this.data), this.K(this.uv), this.uv.w(a), this.uv.xb(this));
        dM(this); (a = z.sm.topic_errors_info) && z.tn(a);
        this.sA();
        cM()
    }; z.e.HL = function() {
        this.data.Ia = z.X.Ia;
        this.Ui();
        this.Hy && (fM(this), gM(this));
        nM(this); (this.Zx = z.J("zg-question-suggested-topics")) && this.o().g(this.Zx, "click", this.iV);
        this.Hp();
        this.o().g(window, "hashchange",
            function(a) {
                a = a.sc;
                a.oldURL && "writing" === a.oldURL.split("#")[1] || sM(this)
            });
        jM(this);
        qM(this);
        mM(this);
        sM(this, null);
        iM(this);
        z.hm && (0, window.setTimeout)(function() {
                window.location.href = z.hm
            },
            5E3)
    }; z.e.sA = function() {
        this.XK ? (0, z.YG)("answer", this.ti[this.XK].Ia, "read") : (0, z.YG)("question", this.data.Ia, "read");
        this.o().g(this, ["click!", "show!"],
            function(a) {
                "comment" === a.namespace && a.Nc.fill("category", "question_answer").fill("label", "question_answer");
                "invitation" === a.namespace && a.Nc.fill("label", "question_page")
            })
    }; z.e.UB = function() {
        this.gT = !0;
        this.hl = (0, window.$)(this.oq.cV)[0];
        z.df(this.hl, z.L("zu-top"));
        z.P(this.hl, !0);
        z.Z.fb || (this.dk = new z.qv, this.dk.w(this.hl), AI(this.dk));
        this.o().g(this.hl, "click", this.CH);
        sM(this)
    }; z.e.Ui = function() {
        this.Hy ? hM(this, this.yT) : hM(this, z.r)
    }; z.e.yT = function(a) {
        "close" === z.X.status || z.X.Pp || (a = a.target.m(), this.$b = new pL(this.data.qa, "/question/detail", "content", !0, null), qL(this.$b, TI(this.data.Th)), z.L("zm-editable-content", a).innerHTML && (this.$b.Qq = !0), this.$b.w(a), this.o().g(this.$b, "click_edit",
            function() {
                z.U.Ab("ga_question_supplement_edit_start")
            }), this.o().g(this.$b, "cancel_edit",
            function() {
                z.U.Ab("ga_question_supplement_edit_cancel")
            }), this.o().g(this.$b, "save_changed",
            function() {
                z.U.Ab("ga_question_supplement_edit_save_changed")
            }), this.o().g(this.$b, "save_unchanged",
            function() {
                z.U.Ab("ga_question_supplement_edit_save_unchanged")
            }), this.$b.addEventListener("beforeedit", z.BE({
            Iq: !0
        })))
    }; z.e.CH = function(a) {
        if ("close" === a.target.name) {
            if (this.dk && (z.tv(this.dk), z.sv(this.dk, !1), window.history.replaceState)) {
                a = new z.oj(window.location.href);
                var b = a.Ed();
                b.remove("q");
                b.remove("psq");
                window.history.replaceState({},
                    "", a.jf + "?" + b.toString())
            }
            z.P(this.hl, !1);
            z.P(this.vv, !1)
        } else if ("A" === a.target.tagName && "zh-question-suggest-reask" === a.target.id && (z.P(this.vv, !1), z.$v.ba().show()), b = "a" === (0, window.$)(a.target).prop("tagName").toLowerCase() ? a.target: this.vh(a.target, "A")) a.preventDefault(),
            a.stopPropagation(),
            a = b.getAttribute("data-source") || b.href,
            b = a.indexOf("#"),
            a = 0 > b ? null: a.substr(b + 1),
            sM(this, a ? (0, window.decodeURIComponent)(a) : a)
    }; z.e.AS = function() {
        var a = this.si,
            b = a.m(),
            c = a.Qe.cb()[0];
        z.P(b, !1);
        c = z.Ye((0, z.$a)(c));
        z.cf(c, b);
        this.ti[a.ib] = null;
        this.hs = z.lb(this.hs,
            function(b) {
                return b !== a.ib
            },
            this);
        var d = 999;
        this.tx = z.lb(this.tx,
            function(b) {
                b.aid === a.ib && (d = b.vote);
                return b.aid !== a.ib
            },
            this);
        z.N(b);
        a.dispose();
        kM(this, c, d)
    }; z.e.yB = function(a) {
        a = a.target;
        if (a instanceof XL) {
            var b = a.m();
            switch (a.Zw) {
                case "collap":
                    this.wo.appendChild(b);
                    z.S.add(b, "zm-item-collapsed");
                    this.data.Re--;
                    iM(this);
                    break;
                case "cancel_collap":
                    this.ks.appendChild(b);
                    z.S.remove(b, "zm-item-collapsed");
                    lM(this, b);
                    this.data.Re++;
                    iM(this);
                    break;
                case "set_delete":
                    mM(this);
                    this.data.Re--;
                    iM(this);
                    break;
                case "cancel_delete":
                    lM(this, this.ti[this.Zi].m()),
                        mM(this),
                        this.data.Re++,
                        iM(this)
            }
        }
    }; z.e.gH = function(a) {
        return this.ti[a]
    }; z.e.UY = function(a) { (a = z.xr(this.Ci, a.target)) && a.name && ("expand" === a.name ? (this.QP || pM(this), oM(this, !0)) : oM(this, !1))
    }; z.e.sV = function() {
        var a = this.ti[this.Zi],
            b;
        a ? (aM(a), lM(this, a.m())) : (b = this.Lk, a = new z.dp(!0), this.o().ta(a, "success",
            function() {
                window.location.href = "/question/" + z.X.Ia + "/answer/" + b.url_token
            }), a.ajax("/answer/unremove", "aid\x3d" + b.id))
    }; z.e.jV = function() {
        var a = this.bb,
            b = a.fo && a.fo.checked,
            c = Number(a.Ms.value),
            a = {
                modal: !0,
                title: "确认放弃匿名身份？",
                content: "你在该问题下的赞同和关注行为将以实名显示。"
            },
            d = (0, z.t)(function() {
                    if (!this.xhr || !this.xhr.Ic()) {
                        var a = this.bb.yg();
                        if (a) {
                            var d = new z.dp(!0),
                                h = new z.uj,
                                k = b ? 1 : 0;
                            h.add("id", this.qa).add("content", a).add("anon", k).add("copyright_status", c);
                            d.on("success",
                                function() {
                                    z.X.wb !== k && (z.X.wb = k, z.rp.dispatchEvent(new z.qp(k)));
                                    z.V.trackEvent(this.bb, {
                                        action: "Ok"
                                    });
                                    var a = z.Dn(this.xhr);
                                    a ? a.r ? z.T.alert(a.msg) : (a = z.Ye((0, z.$a)(a.msg[0])), this.ks.appendChild(a), kM(this, a, this.hs.length), z.qr(a), mM(this), TK(this.bb.zG), WK(this.bb.zG), this.bb.dispose(), z.X.wb || (new oL(this.data.Ia, this.ti[this.Zi].Ia)).render((0, window.$)(".zu-main-content-inner").get(0)), this.data.Re++, iM(this)) : z.T.message("网络异常")
                                },
                                !1, this);
                            d.ajax("/answer/add", h.toString());
                            this.xhr = d
                        }
                    }
                },
                this);
        z.X.wb && !b ? z.T.confirm(a,
            function(a) {
                a && d()
            }) : d()
    }; z.e.vh = function() {}; z.e.iV = function(a) {
        if ((a = this.vh(a.target)) && a.name) {
            var b = a.name;
            "close" === b ? z.P(this.Zx, !1) : "addtag" === b && (this.Ma.Ne(a.id.split("-")[1], a.innerHTML), z.P(a, !1))
        }
    }; z.e.Hp = function() {
        this.VC = new AK(this.qa);
        this.VC.init()
    }; z.y(tM, bM); z.e = tM.prototype; z.e.HL = function() { (this.Zs = z.J("zh-single-answer-disable-wrap")) && this.o().g(this.Zs, "click", this.QX);
        wM(this);
        this.Hp();
        zM();
        this.Ui();
        var a = (0, window.$)("#zh-question-answer-collections \x3e .zh-general-list").get(0);
        if (a) {
            var b = new z.El({
                use: ["autoload", "nodeSource"]
            });
            this.K(b);
            b.w(a)
        }
        vM();
        uM(this)
    }; z.e.sA = function() {
        this.o().g(this, ["click!", "show!"],
            function(a) {
                "invitation" === a.namespace && a.Nc.fill("label", "answer_page")
            });
        tM.v.sA.call(this)
    }; z.e.QX = function(a) {
        a.target && a.target.name && aM(this.Ib)
    }; z.e.gH = function(a) {
        if (this.Ib.ib === a) return this.Ib
    }; z.e.dP = '\x3ch3\x3e关于作者\x3c/h3\x3e\x3c% if (author) { %\x3e\x3ca class\x3d"zm-list-avatar-link" href\x3d"/people/\x3c%\x3d author.url_token %\x3e" tabindex\x3d"-1"\x3e\x3cimg class\x3d"zm-list-avatar-medium" src\x3d"\x3c%\x3d author.avatar_path.replace("_s.","_m.") %\x3e"/\x3e\x3c/a\x3e\x3cdiv class\x3d"zm-list-content-medium"\x3e\x3ch2 class\x3d"zm-list-content-title"\x3e\x3ca href\x3d"/people/\x3c%\x3d author.url_token %\x3e"\x3e\x3c%\x3d author.fullname %\x3e\x3c/a\x3e\x3c/h2\x3e\x3cdiv class\x3d"zg-gray-normal"\x3e\x3c%\x3d author.headline || "" %\x3e\x3c/div\x3e\x3c/div\x3e\x3c% } else { %\x3e\x3ca class\x3d"zm-list-avatar-link" href\x3d"javascript:;"\x3e\x3cimg class\x3d"zm-list-avatar-medium" src\x3d"http://img.zhihu.dev:4080/66/6b/666b0abfc_m.jpg"/\x3e\x3c/a\x3e\x3cdiv class\x3d"zm-list-content-medium"\x3e\x3ch2 class\x3d"zm-list-content-title"\x3e匿名用户\x3c/h2\x3e\x3c/div\x3e\x3c% } %\x3e'; z.e.Hp = function() {
        this.VC = new AK(this.qa, this.Ib);
        this.VC.init();
        var a = z.J("js-sidebar-author-info");
        a && (new jJ(a)).init();
        var b = (0, window.$)("#react-warrant-sidelist");
        b.length && z.fx("AnswerWarrant").then(function(a) {
            return a.renderSide(b)
        })
    }; z.e.yB = function(a) {
        a = a.target;
        if (a instanceof XL) switch (a.Zw) {
            case "collap":
                z.S.add(a.m(), "zm-item-collapsed");
                break;
            case "cancel_collap":
                z.S.remove(a.m(), "zm-item-collapsed");
                break;
            case "set_delete":
            case "cancel_delete":
                yM(this),
                    window.location.reload()
        }
    }; AM.prototype = {
        Uc: function(a) {
            if (a) this.zF.push(a);
            else {
                var b = {
                    current: this.zf,
                    mp: this.mp(),
                    Tt: this.Tt()
                };
                z.A(this.zF,
                    function(a) { (0, window.setTimeout)(function() {
                        a.call(null, b)
                    })
                    })
            }
        },
        remove: function(a) {
            a = this.items.indexOf(a); - 1 !== a && (this.items.splice(a, 1), this.gq = Math.ceil(this.items.length / this.an), this.Uc());
            return a
        },
        mp: function() {
            return this.zf < this.gq
        },
        Tt: function() {
            return 1 !== this.zf
        },
        next: function() {
            this.mp() && (this.zf += 1, this.Uc())
        },
        prev: function() {
            this.Tt() && (--this.zf, this.Uc())
        },
        random: function(a) {
            if (2 <= this.gq) {
                for (var b = [], c = 1; c < this.gq + 1; c++) b.push(c);
                0 !== a && z.tb(b, this.zf);
                this.zf = b[Math.floor(Math.random() * b.length)]
            } else a === this.an && this.items.reverse(),
                this.zf = 1;
            this.Uc();
            return this.items.length > this.an
        }
    }; z.p(EM, z.Q); EM.prototype.C = function() {
        z.Q.prototype.C.call(this);
        this.tb = (0, window.$)(this.m());
        this.Pr = this.tb.find(".js-pager");
        this.Za = this.tb.find(".js-list");
        this.qN = this.tb.find(".js-hidden-list");
        this.gz = (this.ML = !!this.tb.closest(".zu-main-sidebar").length) ? "zg-follow": "zg-btn-follow";
        this.yZ = this.ML ? "zg-unfollow": "zg-btn-unfollow";
        FM(this);
        IM(this)
    };
    var JM = "follow_topic",
        KM = "unfollow_topic",
        GM = 6; z.p(LM, z.Q); z.e = LM.prototype; z.e.init = function() {
        this.w((0, window.$)(".js-topic-feed-page")[0])
    }; z.e.C = function() {
        z.Q.prototype.C.call(this);
        this.tb = (0, window.$)(this.m());
        this.YT = !this.tb.find(NM).length;
        this.mi = this.tb.find(".js-topic-cat-main");
        this.Un = this.tb.find(".js-topic-title");
        this.Mr = this.tb.find(".js-feed-switcher");
        var a = (0, window.$)(".topic-recommend");
        if (a.length) {
            var b = new EM;
            b.w(a[0]);
            this.o().g(b, JM, this.iS).g(b, KM, this.YS)
        }
        this.Za = this.tb.find(".zh-general-list");
        this.Za.length && WM(this);
        MM(this);
        QM(this);
        this.tA()
    }; z.e.RH = function(a) {
        var b = (0, window.decodeURIComponent)(window.location.hash.slice(1)),
            c = this.mi.find(NM),
            b = VM(c, b); ! b.length && a.data ? (b = c.eq(0), this.tb.find(NM + "." + NO).removeClass(NO), b.addClass(NO), this.Un.show(), this.LE(), window.location.hash = "") : b.length && (a = b.data("id"), this.Za.hide(), this.Un.hide(), c = b, this.tb.find(NM + "." + NO).removeClass(NO), c.addClass(NO), c = this.Mr.find("a"), c.removeClass(RM), c.eq(0).addClass(RM), SM(this, a), XM(this, a, b))
    }; z.e.iS = function(a) {
        TM(this, 1);
        a = a.data;
        this.mi.find(".zm-topic-cat-more").length || this.mi.append(PM(this, a))
    }; z.e.YS = function(a) {
        TM(this, -1);
        this.mi.find('li[data-id\x3d"' + a.data.id + '"]').remove()
    }; z.e.LE = function() {
        if (!this.Za.show().children().length) return this.Za.html('\x3cp class\x3d"zg-gray-normal" style\x3d"text-align:center;line-height:4;"\x3e该话题暂无动态\x3c/p\x3e')
    }; z.e.tA = function() {
        function a(a, c) {
            var d = {
                action: a,
                category: "topic"
            };
            c && (d.attributes = c);
            z.ti(d)
        }
        this.tb.on("click", ".js-topic-cat-main .zm-topic-cat-item",
            function(b) {
                a("click_topic", {
                    topic_id: (0, window.$)(b.currentTarget).data("id")
                })
            }).on("click", ".topic-recommend .zg-follow",
            function() {
                a("click_follow_topic")
            }).on("click", ".topic-recommend .js-pager",
            function() {
                a("click_change_topics")
            }).on("click", ".js-topic-more a",
            function() {
                a("click_expand")
            }).on("click", ".js-topic-all a",
            function() {
                a("click_read_more")
            })
    };
    var NO = "current",
        RM = "current",
        NM = ".zm-topic-cat-item",
        OM = 100,
        YM = '\x3cli class\x3d"zm-topic-cat-item" data-id\x3d"\x3c%\x3d id %\x3e" data-href\x3d"/topic/\x3c%\x3d url_token %\x3e"\x3e\x3ca href\x3d"#\x3c%\x3d name %\x3e"\x3e\x3c%\x3d name %\x3e\x3c/a\x3e\x3c/li\x3e'; z.y(ZM, z.Q); ZM.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; ZM.prototype.C = function() {
        ZM.v.C.call(this);
        this.Cp("zh-question-followers-list-wrap")
    }; ZM.prototype.Cp = function(a) {
        if (a = z.J(a)) {
            var b = new z.El;
            this.K(b);
            b.use("locationSource");
            b.w(a)
        }
    }; z.y($M, z.Q); $M.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body);
        this.hu();
        bN(this);
        cN(this);
        aN();
        this.uA()
    }; $M.prototype.hu = function() {
        var a = this; (0, window.$)("[data-paging]").each(function() {
            var b = new z.El({
                use: ["dataPagingSource"]
            });
            b.use("childConstructor", {
                factory: z.iE
            });
            z.Al(b,
                function(a) {
                    z.V.Va(a, {
                        index: ""
                    });
                    var b = a.getAttribute("data-type");
                    "User" !== b && "Topic" !== b || z.V.Va(a, {
                            module: b + "Item"
                        },
                        function() {
                            return {
                                card: {
                                    card_type: "Content",
                                    content: {
                                        type: b,
                                        token: a.getAttribute("data-token")
                                    }
                                }
                            }
                        })
                });
            var c = (0, window.$)(this).data("navigable");
            c && b.use("shortcut", c);
            a.K(b);
            b.w(this)
        }); (0, window.$)(".column[data-entry-url]").click(function(a) {
            var c = (0, window.$)(a.currentTarget).data("entry-url");
            c && !a.target.href && window.open(c)
        })
    }; $M.prototype.uA = function() {
        var a = dN(); (0, window.$)(".page-search a.zu-button-more").click(function(b) {
            z.V.trackEvent(b.target, {
                    action: "LoadMore",
                    element: "Button"
                },
                {
                    search: a
                })
        })
    }; z.y(eN, z.hj); eN.prototype.init = function() {
        var a = z.J("home-suggest-block");
        a && (this.h = a, a = z.J("home-suggest-close-button"), this.o().ta(a, "click",
            function() { (new z.dp(!0)).ajax("/option", "key\x3dno_show_lookup\x26value\x3d1");
                z.P(this.h, !1)
            }), a = z.J("home-suggest-refresh-button"), this.o().g(a, "click", this.UV), this.Hu = z.J("home-suggest-list"), hN(this))
    }; eN.prototype.UV = function() {
        fN(this);
        return ! 0
    }; eN.prototype.vV = function(a) {
        a.r || ((a = a.msg) && z.ma(a) && a.length ? (this.aA = [], this.ia = a, fN(this)) : this.Hu.innerHTML = "")
    }; z.p(iN, z.Q); iN.prototype.T = function(a) {
        z.Q.prototype.T.call(this, a);
        this.FJ = jN(a);
        this.mf = z.en.eN(this.h)
    }; iN.prototype.Kb = function() {
        this.wq()
    }; iN.prototype.wq = function() {
        this.dispatchEvent("Ignore")
    }; z.p(kN, iN); kN.prototype.C = function() {
        iN.prototype.C.call(this);
        this.Fj = this.FJ.actionCardType;
        if (this.Fj.startsWith("suggested_")) lN(this);
        else switch (this.Fj) {
            case "suggested_questions":
                this.entryType = "question",
                    this.Bb = this.FJ.questionId,
                    (0, window.$)(".js-toggleCommentBox", this.m()).on("click", this.PH.bind(this))
        }
    }; kN.prototype.wq = function() {
        iN.prototype.wq.call(this);
        window.$.post("/actioncard/uninterest", {
            type: this.Fj
        })
    }; kN.prototype.Vf = function() {
        var a = (0, window.$)(".profile-reminder-template", this.h).html(),
            a = (0, window.$)(a),
            b = z.Y.iT;
        b && a.find(".js-headline").text(b);
        a.find(".js-avatar-wrapper .avatar").attr({
            src: z.Y.Hf("xs"),
            srcset: z.Y.Hf("l") + " 2x"
        }); (0, window.$)(this.h).closest(".js-inner").replaceWith(a)
    }; kN.prototype.nz = function() {
        return (0, window.$)(".js-contentActions", this.m())[0]
    }; z.Ca(kN.prototype, z.kH); z.p(mN, z.kD); z.e = mN.prototype; z.e.T = function(a) {
        z.kD.prototype.T.call(this, a);
        nN(this)
    }; z.e.C = function() {
        var a = this;
        z.kD.prototype.C.call(this);
        this.Ip();
        this.pA();
        this.rU = this.hd["landing-url"];
        this.info = this.hd.info;
        this.EE = {
            link: {
                url: this.rU
            },
            module: [{
                card: {
                    content: [z.Fw(this.info)]
                }
            }]
        };
        var b = this.m();
        z.V.Va(this, {
                module: "AdItem"
            },
            function() {
                return {
                    card: {
                        card_type: "Content",
                        content: a.Wo()
                    }
                }
            }); (0, window.$)(".js-adView", b).each(function(a, b) {
            var f = (0, window.$)(b);
            z.vn(f[0],
                function() {
                    z.Ew(f.data("view-track"))
                })
        }); (0, window.$)(".AdFeed-impression", b).one("load",
            function() {
                z.V.trackEvent(a, {
                    action: "Load",
                    element: "Card"
                })
            })
    }; z.e.Wo = function() {
        return z.Fw(this.info)
    }; z.e.pA = function() {
        var a = (0, window.$)(".js-share", this.m()).get(0),
            b = this.hd[this.entryType + "-url"];
        a && b && z.wD(a, this.entryType, this.Ue, b).xb(this)
    }; z.e.Kb = function(a) {
        z.Ew(this.hd["close-track"]);
        z.V.trackEvent(a, {
                element: "Button",
                action: "Ignore"
            },
            this.EE);
        this.dispatchEvent("Ignore")
    }; z.e.expand = function() {
        this.ub || (this.ub = !0, z.S.add(this.h, this.lt), this.dispatchEvent("expand"), this.nw())
    }; z.e.collapse = function() {
        this.ub && (this.ub = !1, z.S.remove(this.h, this.lt), this.dispatchEvent("collapse"), this.mw())
    }; z.e.nw = function() {
        var a = (0, window.$)(this.m()).index() + 1;
        z.vi("view_ad", "click_expand_answer", "feed_ad_vote_up_expand_ad", a)
    }; z.e.mw = function() {
        var a = (0, window.$)(this.m()).index() + 1;
        z.vi("view_ad", "click_collapse_answer", "feed_ad_collapse_ad", a)
    }; z.e.sW = function(a) {
        window.open(OO, "_blank");
        var b = Object.assign({
                link: {
                    url: OO,
                    anchor: "知乎广告介绍"
                }
            },
            this.EE);
        z.V.trackEvent(a, {
                element: "Link",
                action: "OpenUrl"
            },
            b)
    };
    var OO = "/promotion-intro"; z.Ca(mN.prototype, z.lH); z.p(oN, z.kD); oN.prototype.Kb = function() {
        window.$.post("/roundtable/" + this.Ue, {
            action: "mute"
        });
        this.dispatchEvent("Ignore")
    }; z.y(pN, z.Q); z.e = pN.prototype; z.e.C = function() {
        pN.v.C.call(this);
        this.Lj()
    }; z.e.T = function(a) {
        var b = this;
        pN.v.T.call(this, a);
        rN(this, a);
        z.V.Va(this, {
                module: "FeedItem",
                index: ""
            },
            function() {
                if (b.Dc && b.Dc.vH) return b.Dc.vH();
                var c = {
                    card_type: "Feed",
                    feed_source: qN(b, a)
                };
                b.Dc && b.Dc.Az && (c.content = b.Dc.Az());
                return {
                    card: c
                }
            })
    }; z.e.Ji = function() {
        this.Ji = !0
    }; z.e.Lj = function(a) {
        var b = {
            ".js-ignoreContentItem": this.lS,
            ".js-unIgnoreContentItem": this.ZS,
            ".js-ignoreRelatedContentItem": this.mS,
            ".js-close": this.nk,
            'a[name\x3d"dislike"]': this.OR,
            ".column[data-entry-url]": this.xH
        };
        z.Mb(b, a || {});
        z.Db(b,
            function(a, b) {
                if (z.qa(a))(0, window.$)(this.h).on("click", b, window.$.proxy(a, this))
            },
            this)
    }; z.e.nk = function() {
        var a = this,
            b = (0, window.$)(this.m());
        b.slideUp(function() {
            a.dispose();
            b.remove()
        })
    }; z.e.lS = function() {
        if (this.Dc && this.Dc.Kb) {
            var a = (0, window.$)(".feed-hide-options", this.h),
                b = !!a.length;
            this.Dc.Kb(b);
            b && a.show().siblings().hide();
            z.V.trackEvent((0, window.$)(".ignore", this.h), {
                action: "Ignore",
                element: "Button"
            })
        }
    }; z.e.ZS = function() {
        if (this.Dc && this.Dc.Xz) {
            var a = (0, window.$)(".feed-hide-options", this.h),
                b = !!a.length;
            this.Dc.Xz();
            b && a.hide().siblings().show()
        }
    }; z.e.mS = function(a) {
        this.Dc && this.Dc.Nz && this.Dc.Nz(a)
    }; z.e.OR = function() {
        var a = this,
            b = (0, window.$)(this.h),
            c = (0, window.$)(".undo-dislike-options", b);
        if (!c.length && this.Dc && this.Dc.Kb) this.Dc.Kb();
        else {
            var d = (0, window.$)(".feed-item-inner", b),
                f = c.data();
            c.off().one("click", ".revert",
                function() {
                    d.slideDown();
                    c.slideUp();
                    window.$.post("/topstory/item/uninterest/revert", f);
                    z.V.trackEvent((0, window.$)(".ignore", a.h), {
                        action: "UnIgnore",
                        element: "Button"
                    })
                }).one("click", ".close",
                function() {
                    a.nk()
                });
            window.$.post("/topstory/item/uninterest", f).done(function() {
                d.slideUp();
                c.slideDown()
            });
            z.V.trackEvent((0, window.$)(".ignore", this.h), {
                action: "Ignore",
                element: "Button"
            })
        }
    };
    var CN = (0, window.$)("#is-topstory").length ? "topstory2": "homefeed", uN = z.C && !z.E(9), xN = {
            ac: "actioncard",
            q: "question",
            a: "answer",
            p: "article",
            c: "column",
            r: "roundtable",
            f: "favorites",
            l: "live",
            e: "ebook",
            pin: "pin",
            eventcard: "eventcard"
        },
        zN = {
            question: "question",
            answer: "question",
            article: "column",
            column: "column",
            roundtable: "roundtable",
            favorites: "favorites"
        },
        AN = {
            question: "question",
            answer: "question",
            article: "article",
            column: "column",
            roundtable: "roundtable",
            favorites: "favorites",
            live: "live",
            ebook: "ebook",
            pin: "pin",
            eventcard: "eventcard"
        }; tN.prototype.Db = function() {
        this.eE = (0, window.$)('meta[itemprop\x3d"ZReactor"]', this.li);
        this.eE.length && (wN(this), this.BT())
    }; tN.prototype.XW = function() {
        var a = [],
            b = z.Kr(550,
                function() {
                    a.length && (vN(a), a = [])
                },
                !0);
        return function(c) {
            a.push(c);
            b()
        }
    } (); tN.prototype.BT = z.Wh(function() {
        z.G(z.U, "click_feed_fresh",
            function(a) {
                vN({
                    mid: z.sm.ga_vars.user_hash,
                    object_type: "btn",
                    object_id: 2,
                    object_meta: {
                        load_items: a.data.count
                    },
                    action_type: "click",
                    context: CN,
                    others: "",
                    time: (0, z.I)()
                })
            });
        z.G(z.U, "topstory_feed_more",
            function() {
                vN({
                    mid: z.sm.ga_vars.user_hash,
                    object_type: "btn",
                    object_id: 1,
                    object_meta: {
                        next: (0, window.$)("#js-home-feed-list .feed-item").length + 1
                    },
                    action_type: "click",
                    context: CN,
                    others: "",
                    time: (0, z.I)()
                })
            })
    }); z.y(DN, z.vE); DN.prototype.Pk = function(a) {
        a && !a.r && (a = a.msg, a.length ? (z.P(this.ce, 0 < a.length), this.offset += a.length, this.ms(a), z.wE(this, !1), z.yE(this)) : this.tl.hide())
    };
    var PO = {
        ROUNDTABLE_ADD_RELATED: "roundtable",
        ARTICLE_VOTE_UP: "post_vote",
        ARTICLE_CREATE: "post_create",
        RECOMMENDED: "feed_recommended",
        QUESTION_FOLLOW: "feed_question_follow",
        QUESTION_CREATE: "feed_question",
        ANSWER_VOTE_UP: "feed_answer_vote",
        ANSWER_CREATE: "feed_answer_answer"
    }; DN.prototype.WS = function(a) {
        var b = a.currentTarget.h.getAttribute("data-feedtype"),
            b = PO[b];
        "comment" === a.namespace && b && a.Nc.fill("category", "feed").fill("label", b)
    }; DN.prototype.Zu = function(a) {
        var b = sN(a);
        b.Ji();
        this.K(b);
        this.o().g(b, "click!", this.WS);
        b.w(a);
        new tN(b);
        z.vn(a,
            function() {
                z.V.trackCardShow(a, {
                    element: "ListItem"
                })
            });
        return b
    }; DN.prototype.eC = function(a) {
        return {
            params: a,
            method: "next"
        }
    }; z.p(EN, z.Q); EN.prototype.C = function() {
        z.Q.prototype.C.call(this);
        this.wa = (0, window.$)(this.m());
        FN(this);
        this.yj = (0, window.$)("#zh-main-feed-fresh-button");
        this.yj.length && (this.yj.click(window.$.proxy(this.tX, this)), this.UI ? this.o().g(z.U, "topstory2", this.OJ) : this.o().g(z.U, "homefeed", this.OJ));
        HN(this);
        IN(this)
    }; EN.prototype.jW = function() {
        this.mq.Gg();
        window.$.get("/node/HomeTopics",
            function(a) {
                a && (0, window.$)(a).insertBefore("#zh-home-list-title")
            })
    }; EN.prototype.OJ = function(a) { ! this.yj.hasClass("disabled") && (a = (0, window.parseInt)(a.Wf, 10)) && (this.Ig += a, 0 < this.Ig && this.yj.text((99 < this.Ig ? "99+": this.Ig) + " 条新动态").show())
    }; EN.prototype.tX = function() {
        var a = this;
        this.yj.text("加载中…").addClass("disabled");
        var b = this.Ig;
        z.U.Ab({
            type: "click_feed_fresh",
            data: {
                count: b
            }
        });
        window.$.post(this.iQ, this.mq.eC({
            action: "live",
            limit: b,
            start: this.mq.WB(this.mq.mb()[0])
        })).done(function(c) {
            a.yj.removeClass("disabled");
            a.Ig -= b;
            0 >= a.Ig && a.yj.hide();
            if (c && c.msg.length) {
                a.Gw || (a.Gw = (0, window.$)('\x3cdiv class\x3d"feed-item-hook feed-divider"\x3e\x3cspan\x3e上次你看到这里\x3c/span\x3e\x3c/div\x3e'));
                var d = (0, window.$)("." + a.RG, a.wa).eq(0);
                d.length && 3 <= b ? a.Gw.insertBefore(d) : a.Gw.remove();
                a.mq.ms(c.msg, "prepend")
            }
        });
        z.V.trackEvent(this, {
            action: "LoadNewFeed",
            element: "Button"
        })
    }; z.ka(JN); z.p(NN, z.Q); z.e = NN.prototype; z.e.B = function() {
        function a(b, d) {
            for (var f = z.ha(Object.keys(d)), g = f.next(); ! g.done; g = f.next()) {
                var h = g.value,
                    g = d[h];
                "string" === typeof g ? (g = (0, window.$)("\x3cdiv/\x3e", {
                    "class": "OrgGuide-" + h,
                    text: g
                }).get(0), (0, window.$)(b).append(g)) : g && "object" === typeof g && (h = (0, window.$)("\x3cdiv/\x3e", {
                        "class": "OrgGuide-" + h
                    }).get(0), (0, window.$)(b).append(h), a(h, g))
            }
        }
        z.Q.prototype.B.call(this);
        var b = this.config.ZL,
            b = (0, window.$)("\x3cdiv/\x3e", {
                "class": "OrgGuide OrgGuide-" + b.PK + " OrgGuide-" + b.PK + "-" + b.index
            }).get(0);
        a(b, this.config.jc);
        this.h = b;
        this.H = (0, window.$)(b)
    }; z.e.render = function(a) {
        z.Q.prototype.render.call(this, a);
        this.Wa = a;
        a = (0, window.$)(this.getParent());
        var b = (0, window.$)(".OrgGuide-step", this.H);
        if (0 < b.length) for (var b = (0, window.$)("\x3cul/\x3e", {
            "class": "OrgGuide-stepInfoDotsList"
        }).appendTo(b), c = this.config.ZL, d = 0; d < c.total; d++) {
            var f = (0, window.$)("\x3cli/\x3e", {
                "class": "OrgGuide-stepInfoDot"
            }).appendTo(b);
            d <= c.index && f.addClass("done");
            d < c.total - 1 && (0, window.$)("\x3chr/\x3e", {
                "class": "OrgGuide-stepInfoSplit"
            }).appendTo(b)
        }
        a.css(this.config.Cq);
        this.H.css(this.config.style).appendTo(a);
        this.Kj()
    }; z.e.hide = function() {
        this.H.hide();
        this.config.bo(this)
    }; z.e.show = function() {
        var a = this.config;
        a.Jj(this);
        this.H.show(); (0, window.$)(".OrgGuide-stepInfo", this.H).width((0, window.$)(".OrgGuide-footer", this.H).width() - (0, window.$)(".OrgGuide-btnNext", this.H).width()); (0, window.$)(window).scrollTop(0);
        var b = this.H.width(),
            c = this.H.height(),
            d = {},
            f = this.config.Oe,
            g = this.config.LY;
        if (f) {
            f.Qg = f.Qg || "bttom center";
            var h = (0, window.$)(this.config.Oe.Ha),
                k = h.offset(),
                l = h.width(),
                h = h.height(),
                f = f.Qg.split(" ");
            switch (f[0]) {
                case "left":
                    d.left = k.left - b - g;
                    break;
                case "right":
                    d.left = k.left + l + g;
                    break;
                case "top":
                    d.top = k.top - c - g;
                    break;
                case "bottom":
                    d.top = k.top + h + g
            }
            switch (f[1]) {
                case "left":
                    d.left = k.left;
                    break;
                case "right":
                    d.left = k.left + l - b;
                    break;
                case "top":
                    d.top = k.top;
                    break;
                case "bottom":
                    d.top = k.top + h - c;
                    break;
                case "center":
                    d.left = k.left + (l - b) / 2;
                    break;
                case "middle":
                    d.top = k.top + (h - c) / 2
            }
        } else k = (0, window.$)(this.getParent()),
            g = k.width(),
            k = k.height(),
            d.left = (g - b) / 2,
            d.top = (k - c) / 2;
        this.H.css(d); (b = this.config.ee) && this.H.addClass("OrgGuide-" + b);
        "once-per-visit" === a.FY && (a.MA = !0)
    }; z.e.Kj = function() {
        function a(a) {
            var c = MN;
            switch (typeof a) {
                case "string":
                    c = function() { (0, window.$)(b.getParent()).trigger(a)
                    };
                    break;
                case "object":
                    c = function() { (0, window.$)(b.getParent()).trigger(a.type, a.data)
                    };
                    break;
                case "function":
                    c = a
            }
            return c
        }
        for (var b = this,
                 c = this.config.Sy,
                 d = z.ha(Object.keys(c)), f = d.next(); ! f.done; f = d.next()) f = f.value,
            this.H.on("click", ".OrgGuide-" + f, a(c[f]))
    };
    var XN; z.p(PN, z.Q); z.e = PN.prototype; z.e.B = function() {
        this.H = (0, window.$)("\x3cdiv/\x3e", {
            "class": "ZhGuides " + this.config.className
        });
        this.h = this.H.get(0)
    }; z.e.init = function() {
        this.Jq = WN(this);
        this.$r = 0
    }; z.e.render = function() {
        z.Q.prototype.render.call(this);
        for (var a = this.config,
                 b = a.rv,
                 a = a.Ul,
                 c = z.ha(Object.keys(b)), d = c.next(); ! d.done; d = c.next()) for (var d = d.value,
                                                                                          f = b[d], g = f.Ul, h = f.Xg.length, k = z.ha(Object.keys(f.Xg)), l = k.next(); ! l.done; l = k.next()) {
            var l = l.value,
                n = f.Xg[l];
            n.ZL = {
                PK: d,
                index: l,
                total: h
            };
            l = window.$.extend(!0, {},
                a, g, n);
            l = new NN(l);
            l.render(this.m());
            this.ap.push(l)
        }
        this.H.appendTo((0, window.$)("body"));
        this.Kj()
    }; z.e.Kj = function() {
        function a(a) {
            return function(c) {
                a.call(b, c)
            }
        }
        for (var b = this,
                 c = z.ha(Object.keys(UN)), d = c.next(); ! d.done; d = c.next()) {
            var d = UN[d.value],
                f = ON;
            switch (d) {
                case "closeGuide":
                    f = this.OP;
                    break;
                case "nextGuide":
                    f = this.PJ
            }
            this.H.on(d, a(f))
        }
    }; z.e.Wv = function() {
        this.config.jF(this);
        var a = WN(this);
        if (a) switch (a.state) {
            case "open":
                VN(this, a.index);
                return;
            case "close":
            case "done":
            case "nevershow":
            case "restart-open":
                SN(this);
                return
        }
        VN(this, 0)
    }; z.e.OP = function() {
        SN(this);
        RN(this, "close")
    }; z.e.PJ = function() {
        var a = this.$r + 1;
        a >= this.ap.length ? SN(this) : VN(this, a)
    }; z.e.show = function(a) {
        this.H.fadeIn(500, a)
    }; z.e.hide = function(a) {
        this.H.fadeOut(500, a)
    };
    var UN = {
        NEXT_GUIDE: "nextGuide",
        CLOSE_GUIDE: "closeGuide",
        DONE: "done"
    }; z.p(aO, z.Q); aO.prototype.init = function() {
        var a = this.iR,
            b = this.iX,
            c = this.eY;
        a.H.on(UN.DONE,
            function() {
                a.hide(function() {
                    b.Wv()
                })
            });
        b.H.on(UN.DONE,
            function() {
                b.hide(function() {
                    c.Wv()
                })
            });
        a.Wv()
    };
    var QO = {
            jx: function(a) {
                a.H.fadeOut(500)
            },
            Ul: {
                LY: 20,
                Cq: {
                    background: "rgba(255, 255, 255, .8)"
                },
                style: {
                    width: 380,
                    height: 180
                },
                jc: {
                    header: "",
                    content: "",
                    footer: "",
                    btnClose: ""
                },
                Sy: {
                    btnNext: UN.NEXT_GUIDE,
                    btnClose: UN.CLOSE_GUIDE
                }
            }
        },
        dO = window.$.extend(!0, {},
            QO, {
                bp: "guideForOrgSearch",
                className: "SearchGuides",
                state: "forever",
                rv: {
                    searchGuide: {
                        Xg: [{
                            jc: {
                                header: "搜索",
                                content: "还没关注任何话题和用户哦~ 试试搜索一下 :)",
                                footer: null
                            },
                            Cq: {
                                background: "rgba(255, 255, 255, .4)"
                            },
                            style: {
                                width: (0, window.$)("#zh-top-search").width(),
                                height: 130
                            },
                            Oe: {
                                Ha: "#zh-top-search",
                                Qg: "bottom center"
                            },
                            ee: "arrow--top search",
                            FY: "once-per-visit",
                            MA: !z.Y.GW
                        }]
                    }
                }
            }), cO = window.$.extend({},
        QO, {
            bp: "guideForOrgProfile",
            className: "OrgProfileGuides",
            state: "forever",
            rv: {
                profileGuide: {
                    Xg: [{
                        jc: {
                            header: "机构信息尚待完善",
                            content: "立即去完善主页资料，让主页展示内容更丰富！",
                            footer: {
                                btnJump: "完善主页资料",
                                btnNext: null
                            }
                        },
                        Sy: {
                            btnJump: function() {
                                window.location.href = "/org/edit"
                            }
                        },
                        Cq: {
                            background: "rgba(255, 255, 255, .4)"
                        },
                        Oe: {
                            Ha: ".top-nav-profile",
                            Qg: "bottom center"
                        },
                        ee: "arrow--top",
                        interval: 6048E5,
                        MA: !z.Y.FW
                    }]
                }
            }
        }), bO = window.$.extend({},
        QO, {
            bp: "guideForOrg",
            className: "OrgTeachGuides",
            jF: function(a) {
                var b = (0, window.$)(".zm-side-nav-li-guide"),
                    c = (0, window.$)(".zm-side-nav-link-guide", b),
                    d = (0, window.$)(".btn-nevershow", c);
                b.off().one("mouseenter",
                    function() {
                        c.removeClass("active")
                    }).on("click",
                    function() {
                        QN(a);
                        z.V.trackEvent(c, {
                            action: "Click",
                            element: "Button",
                            name: "机构帐号新手引导",
                            url: window.location.href
                        })
                    });
                d.off().on("click",
                    function() {
                        a.H.remove();
                        RN(a, "nevershow");
                        b.remove()
                    }); (d = WN(a)) && !["open", "nevershow"].includes(d.state) && b.show();
                a.H.css({
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                })
            },
            jx: function(a) {
                var b = WN(a);
                if (!b || "open" === b.state) { (0, window.$)(window).scrollTop(0);
                    var b = (0, window.$)(".zm-side-nav-li-guide").show(),
                        c = (0, window.$)(".zm-side-nav-link-guide", b);
                    a.H.animate(Object.assign(c.offset(), {
                            width: c.width(),
                            height: c.height()
                        }), 500,
                        function() {
                            c.addClass("active").fadeOut(200).fadeIn(150).fadeOut(100).fadeIn(50)
                        })
                }
            },
            rv: {
                startGuide: {
                    Xg: [{
                        Cq: {
                            background: "rgba(255, 255, 255, .4)"
                        },
                        style: {
                            width: 522
                        },
                        jc: {
                            header: "欢迎来到知乎",
                            content: "参加机构帐号新手教学，更快上手帐号运营，只需1分钟哦！",
                            footer: {
                                btnNext: "开始教学吧"
                            }
                        }
                    }]
                },
                zutopGuide: {
                    Ul: {
                        jc: {
                            footer: {
                                stepInfo: {
                                    info: "如何探索社区?",
                                    step: ""
                                },
                                btnNext: "下一步"
                            }
                        },
                        ee: "arrow--top",
                        Oe: {
                            Qg: "bottom center"
                        }
                    },
                    Xg: [{
                        jc: {
                            header: "搜索",
                            content: "找到需要关注的内容、用户、话题。"
                        },
                        style: {
                            width: (0, window.$)("#zh-top-search").width()
                        },
                        Oe: {
                            Ha: "#zh-top-search"
                        },
                        ee: "arrow--top search"
                    },
                        {
                            jc: {
                                header: "话题",
                                content: "在这里浏览你已关注的话题下的热门内容和最新内容，也许有适合你回答的问题。"
                            },
                            Oe: {
                                Ha: "#top-nav-dd-topic"
                            }
                        },
                        {
                            jc: {
                                header: "发现",
                                content: "在这里发现全站热门内容和编辑推荐的优质内容。",
                                footer: {
                                    btnNext: "我知道了"
                                }
                            },
                            Oe: {
                                Ha: "#zh-top-nav-explore"
                            }
                        }]
                },
                homeentryGuide: {
                    Ul: {
                        style: {
                            width: (0, window.$)(".HomeEntry-box").width()
                        },
                        jc: {
                            footer: {
                                stepInfo: {
                                    info: "如何创建新内容？",
                                    step: ""
                                },
                                btnNext: "下一步"
                            }
                        },
                        Oe: {
                            Ha: ".HomeEntry-box",
                            Qg: "bottom center"
                        },
                        Jj: function(a) {
                            YN(".HomeEntry", a.getParent())
                        },
                        bo: function(a) {
                            a = a.getParent(); (0, window.$)(".HomeEntry", a).remove()
                        }
                    },
                    Xg: [{
                        jc: {
                            header: "提问",
                            content: "在这里提问，召集用户来回答。"
                        },
                        ee: "arrow--top ask"
                    },
                        {
                            jc: {
                                header: "回答",
                                content: "发现适合你回答和用户邀请你回答的问题。"
                            },
                            ee: "arrow--top answer"
                        },
                        {
                            jc: {
                                header: "写文章",
                                content: "如果没有适合回答的问题，也可以写文章主动发布信息哦。"
                            },
                            ee: "arrow--top post"
                        },
                        {
                            jc: {
                                header: "草稿",
                                content: "回答和文章的草稿都保存在这里。",
                                footer: {
                                    btnNext: "我知道了"
                                }
                            },
                            ee: "arrow--top draft"
                        }]
                },
                analyticsGuide: {
                    Xg: [{
                        jc: {
                            header: "数据统计",
                            content: "在这里可以查看已发布内容的各项数据指标。",
                            footer: {
                                stepInfo: {
                                    info: "如何运营？"
                                },
                                btnNext: "我知道了"
                            }
                        },
                        Oe: {
                            Ha: ".zm-side-nav-li-analytics",
                            Qg: "left middle"
                        },
                        ee: "arrow--right",
                        Jj: function(a) {
                            a = YN(".zm-side-nav-li-analytics", a.getParent()); (0, window.$)(".zm-side-nav-link", a).addClass("active")
                        },
                        bo: function(a) {
                            a = a.getParent(); (0, window.$)(".zm-side-nav-li-analytics", a).remove()
                        }
                    }]
                },
                ophelpGuide: {
                    Xg: [{
                        jc: {
                            header: "运营帮助中心",
                            content: "这里有产品使用技巧和运营指南。",
                            footer: {
                                stepInfo: {
                                    info: "如何运营？"
                                },
                                btnNext: "我知道了"
                            }
                        },
                        Oe: {
                            Ha: ".zm-side-nav-li-ophelp",
                            Qg: "left middle"
                        },
                        ee: "arrow--right",
                        Jj: function(a) {
                            a = YN(".zm-side-nav-li-ophelp", a.getParent()); (0, window.$)(".zm-side-nav-link", a).addClass("active")
                        },
                        bo: function(a) {
                            a = a.getParent(); (0, window.$)(".zm-side-nav-li-ophelp", a).remove()
                        }
                    }]
                },
                optGuide: {
                    Ul: {
                        style: {
                            width: 380,
                            height: 180
                        },
                        jc: {
                            footer: {
                                stepInfo: {
                                    info: "如何互动？",
                                    step: ""
                                },
                                btnNext: "下一步"
                            }
                        },
                        Oe: {
                            Ha: ".TryOpt",
                            Qg: "bottom left"
                        }
                    },
                    Xg: [{
                        jc: {
                            header: "赞同/反对",
                            content: "点“赞同”或“反对”为答案投票，传达你的立场和态度。"
                        },
                        ee: "arrow--top user-opt",
                        Jj: function(a) {
                            a = $N(a.getParent()); (0, window.$)(".TryOpt-thumbArrow", a).show(); (0, window.$)(".TryOpt-btnThumb", a).show().addClass("sprite-home-btn-thumb-undo")
                        }
                    },
                        {
                            jc: {
                                header: "赞同/反对",
                                content: "点“赞同”或“反对”为答案投票，传达你的立场和态度。"
                            },
                            ee: "arrow--top user-opt",
                            Jj: function(a) {
                                a = $N(a.getParent()); (0, window.$)(".TryOpt-thumbArrow", a).hide(); (0, window.$)(".TryOpt-btnThumb", a).show().removeClass("sprite-home-btn-thumb-undo").addClass("sprite-home-btn-thumb-done").off("click")
                            }
                        },
                        {
                            jc: {
                                header: "关注问题",
                                content: "关注问题后，当这个问题下有优质的答案会通知你，你也可以在「我关注的问题」里找到它。",
                                footer: {
                                    btnNext: "我知道了"
                                }
                            },
                            ee: "arrow--top user-opt",
                            Jj: function(a) {
                                a = $N(a.getParent()); (0, window.$)(".TryOpt-thumbArrow", a).hide(); (0, window.$)(".TryOpt-btnThumb", a).show().removeClass("sprite-home-btn-thumb-undo").addClass("sprite-home-btn-thumb-done").off("click"); (0, window.$)(".TryOpt-btnFollow", a).show()
                            },
                            bo: function(a) {
                                a = a.getParent(); (0, window.$)(".TryOpt", a).remove()
                            }
                        }]
                }
            }
        }); z.y(eO, z.Q); eO.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; eO.prototype.C = function() {
        eO.v.C.call(this);
        z.Tr(z.r, {
            notBlocked: !0
        })();
        var a = z.J("js-home-feed-list");
        if (a) {
            var b = new EN;
            this.K(b);
            b.w(a)
        }
        z.J("home-settings-page-wrap") && (a = z.J("zh-topic-block-editor")) && (new z.Lt(z.nm)).w(a); (new eN).init();
        fO();
        gO();
        a = (0, window.$)(".zg-tip-salt-update");
        if (b = z.si.get("Salt::lastViewTime")) {
            var b = new Date(Number(b)),
                c = b.getDay(),
                d = (new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() + 252E5,
                d = 1 < c || 7 <= b.getHours() ? d + 864E5 * (1 - c + 7) : d + 864E5 * (1 - c); (new Date).getTime() >= (new Date(d)).getTime() && a.show()
        } else a.show();
        a = JN.ba();
        KN(a);
        a = z.Y;
        if (a.tc) {
            XN = {};
            try {
                XN = JSON.parse(a.EW || "{}")
            } catch(f) {} (new aO).init()
        }
    }; z.y(hO, z.Q); hO.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; hO.prototype.C = function() {
        hO.v.C.call(this);
        var a = (0, window.$)("#zh-following-question-item-list").children(".zh-general-list");
        if (a.length) {
            var b = new z.El;
            this.K(b);
            b.use("nodeSource");
            b.w(a.get(0))
        }
    }; z.y(iO, z.Q); iO.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body)
    }; iO.prototype.C = function() {
        iO.v.C.call(this);
        jO(this);
        this.nA();
        lO(this);
        mO();
        this.o().g(this, "click!",
            function(a) {
                "comment" === a.namespace && a.Nc.fill("category", this.Sh).fill("label", this.UQ)
            })
    }; iO.prototype.nA = function() {
        var a = 1,
            b = (0, window.$)("ul.hot-favlists"),
            c = null; (0, window.$)("#js-hot-fav-switch").click(function() {
            c && "pending" === c.state() || (a = 5 <= a ? 1 : a + 1, c = rK(a).done(function(a) {
                b.html(a)
            }))
        });
        b.on("click", ".content \x3e a",
            function() {
                var a = (0, window.$)(this).closest("li").index() + 1;
                z.ti({
                    category: "collection",
                    action: "visit_collection",
                    label: "explore_sidebar_trending_collections_collection_name",
                    value: a
                })
            })
    }; z.y(kO, z.El); kO.prototype.C = function() {
        kO.v.C.call(this);
        this.use("childConstructor", {
            Qj: z.QD
        })
    }; z.p(oO, z.Q); oO.prototype.C = function() {
        this.Wr = (0, window.$)(".MyTopicList", this.m());
        this.nE = (0, window.$)(".MyTopicAdd", this.m());
        this.Tw = (0, window.$)(".js-MyTopicMax-title", this.m());
        this.oE = (0, window.$)(".js-MyTopicEmpty-title", this.m());
        var a = new MI({
            Tf: this.kV.bind(this),
            Yf: pO(this)
        });
        a.w(this.m());
        this.Ma = a;
        sO(this);
        tO(this);
        this.dispatchEvent(rO)
    }; oO.prototype.kV = function() {
        var a = this.Ma.zg().slice(1);
        if (a && 3 < a.length) {
            var b = a[1];
            this.Tw.before('\x3cspan class\x3d"zm-tag-editor-edit-item"\x3e\n      \x3ca class\x3d"nor" href\x3d"/topic/' + b + '"\x3e' + a[0] + '\x3c/a\x3e\n      \x3ca data-url-token\x3d"' + b + '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e\n    \x3c/span\x3e');
            tO(this);
            qO(this, "add_expert_topic", b)
        }
    };
    var uO = 20,
        rO = "topic:change"; z.p(vO, z.Q); vO.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body);
        wO(this);
        var a = (0, window.$)(".QuestionHotList .zh-general-list");
        if (a.length) {
            var b = new z.El({
                use: ["autoload"]
            });
            this.K(b);
            b.use("nodeSource", {});
            b.w(a.get(0))
        }
        AO(this)
    }; z.p(BO, z.Q); BO.prototype.init = function() {
        z.XG.K(this);
        this.w(window.document.body);
        this.qA();
        DO();
        EO()
    }; BO.prototype.qA = function() {
        if (z.Nm) {
            var a = (0, window.$)(".promotion-mobileshareButton");
            if (z.lj) z.Lw(),
                a.on("touchstart click", z.Ow);
            else a.on("touchstart click", this.un)
        } else CO(this)
    }; BO.prototype.un = function(a) {
        var b = void 0,
            b = "SixInnovations" === a ? {
                appkey: "3063806388",
                title: "氯消毒技术如何促进时尚的发展？制冷技术与人口增长有怎样的关系？录音技术为何影响到了民权运动？科普名作《我们如何走到今天》将为你一一梳理历史上这些意想不到的联系。「知乎书店」独家首发电子版，欢迎阅读： http://t.cn/RVoP92h"
            }: {
                appkey: "3063806388",
                title: "一万小时工作经验写成的书，价值几何？知乎电子书功能已上架：https://www.zhihu.com/books/promotion/001?utm_campaign\x3dzhihubook\x26utm_source\x3dzhihu_campaign\x26utm_medium\x3dweibo_share"
            };
        window.open("http://service.weibo.com/share/share.php?" + window.$.param(b), "_blank", "width\x3d615,height\x3d505") || (window.location.href = "http://service.weibo.com/share/share.php?" + window.$.param(b))
    }; z.x("ZH.entryQuestionFollowersPage",
        function() { (new ZM).init()
        }); z.x("ZH.entrySQ",
        function() { (new bM).init()
        }); z.x("ZH.entrySA",
        function() { (new tM).init()
        }); z.x("ZH.entryL",
        function() { (new uK).init()
        }); z.x("ZH.entryT",
        function() { (new XJ).init()
        }); z.x("ZH.entrySearch",
        function() { (new $M).init()
        }); z.x("ZH.entryPM",
        function() { (new gJ).init()
        }); z.x("ZH.entryPMDetail",
        function() { (new cJ).init()
        }); z.x("ZH.entryTopicFeed",
        function() { (new LM).init()
        }); z.x("ZH.entryHome",
        function() { (new eO).init()
        }); z.x("ZH.entryQuestionFollowing",
        function() { (new hO).init()
        }); z.x("ZH.entryExplore",
        function() { (new iO).init()
        }); z.x("ZH.entryQuestion",
        function() { (new vO).init()
        }); z.x("ZH.entryPubPromo",
        function() { (new BO).init()
        }); z.lg("page-main");
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/page-main.e08e9664.js
