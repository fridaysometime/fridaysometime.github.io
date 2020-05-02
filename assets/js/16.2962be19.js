(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{308:function(t,n,s){"use strict";s.r(n);var e=s(0),a=Object(e.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Given a positive integer, return its corresponding column title as appear in an Excel sheet.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("p",[t._v("1 -> A\n2 -> B\n3 -> C\n...\n26 -> Z\n27 -> AA\n28 -> AB\n...\n1\n2\n3\n4\n5\n6\n7\n8\nExample 1:")]),t._v(" "),s("p",[t._v('Input: 1\nOutput: "A"\n1\n2\nExample 2:')]),t._v(" "),s("p",[t._v('Input: 28\nOutput: "AB"\n1\n2\nExample 3:')]),t._v(" "),s("p",[t._v('Input: 701\nOutput: "ZY"')]),t._v(" "),s("p",[t._v("类似题目："),s("a",{attrs:{href:"https://blog.csdn.net/qq_21275321/article/details/83047253",target:"_blank",rel:"noopener noreferrer"}},[t._v("171. Excel Sheet Column Number（python+cpp）"),s("OutboundLink")],1),t._v("其实就是十进制转26进制，注意在每次循环的时候n要-1，因为在转换成26进制的时候乘法之前+1了。")]),t._v(" "),t._m(1)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"leetcode-excel-sheet-column-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-excel-sheet-column-title","aria-hidden":"true"}},[this._v("#")]),this._v(" leetcode- Excel Sheet Column Title")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        :type n: int\n        :rtype: str\n        """')]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("chr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("result\n            n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])}],!1,null,null,null);n.default=a.exports}}]);