(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{245:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"leetcode-happy-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-happy-number","aria-hidden":"true"}},[s._v("#")]),s._v(" leetcode-happy number")]),s._v(" "),n("p",[s._v('Write an algorithm to determine if a number is "happy".')]),s._v(" "),n("p",[s._v("A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.")]),s._v(" "),n("p",[n("strong",[s._v("Example:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Input: 19\nOutput: true\nExplanation: \n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("思路")])]),s._v(" "),n("p",[s._v("题目分析：首先，本题需要判定输入的整数其各位数平方求和最终值是否为1 ？输入整数位整型，返回值为布尔型。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("需要利用到循环实现每一次求和后判定是否为1 。")])]),s._v(" "),n("li",[n("p",[s._v("需要排除有可能出现死循环的状况，经过几次平方求和后，结果为某一个出现过的值")])])]),s._v(" "),n("p",[n("strong",[s._v("solution:")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isHappy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        :type n: int\n        :rtype: bool\n        """')]),s._v("\n        result"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n            \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])}],!1,null,null,null);t.default=e.exports}}]);