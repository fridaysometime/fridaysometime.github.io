(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{208:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("实例")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("指一组测定值中与平均值的偏差超过两倍标准差的测定值。与平均值的偏差超过三倍标准差的测定值，称为高度异常的异常值")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("[标记1][https://pic3.zhimg.com/80/v2-f8b7c166c351fd3a036b69a888ec1132_hd.jpg]")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("提供了重要的信息，但可能表达方式是纯文字或者与文字相关的整数，那么建模时往往需要将分类变量量化，仅用简单的id和原始形式不行；")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("sklearn- preprocessing.OneHotEncoder()")]),t._v(" "),a("p",[t._v("原理：将离散型特征的每一种取值"),a("a",{attrs:{href:"https://www.baidu.com/s?wd=%E9%83%BD%E7%9C%8B&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd",target:"_blank",rel:"noopener noreferrer"}},[t._v("都看"),a("OutboundLink")],1),t._v("成一种状态，若你的这一特征中有N个不相同的取值，那么我们就可以将该特征抽象成N种不同的状态，one-hot编码保证了每一个取值只会使得一种状态处于“激活态”，也就是说这N种状态中只有一个状态位值为1，其他状态位都是0。")]),t._v(" "),a("p",[t._v("编码器为每个分类变量创建了额外的特征，转变成一个稀疏矩阵。矩阵是这样定义的：每一行由0和1构成，对应的分类特征是1，其他都是0。用稀疏矩阵存储数据很合理。")])]),t._v(" "),t._m(20),t._v(" "),t._m(21)]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("常用的数据清洗的方法和实现；数据是建模最重要的数据；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"data-cleaning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-cleaning","aria-hidden":"true"}},[this._v("#")]),this._v(" data_cleaning")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"缺失值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺失值","aria-hidden":"true"}},[this._v("#")]),this._v(" 缺失值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("直接使用：模型支持缺失值，决策树")]),this._v(" "),s("li",[this._v("删除特征： 某特征大多数是缺失值，可删除特征")]),this._v(" "),s("li",[this._v("补全：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("均值填充： 值都一样")]),t._v(" "),a("li",[t._v("众数")]),t._v(" "),a("li",[t._v("插值法")]),t._v(" "),a("li",[t._v("聚类，同类均值补充")]),t._v(" "),a("li",[t._v("建模预测：如果缺失属性与其他属性无关，那么预测结果无意义。如果高度相关，那么可以删除特征")]),t._v(" "),a("li",[t._v("高维映射：最准确的做法，因为完全保留了信息，也不增加任何信息；样本量大才可以")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\npd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'display.max_columns'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nraw"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'winequality-red.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"异常值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常值","aria-hidden":"true"}},[this._v("#")]),this._v(" 异常值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("确认方法：画box图检查；用3倍std检查")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boxplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chlorides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("解决方法：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("空值：视为空值待后期对空值进行处理，填补；但填补方式的不同会不同程度的改变原有的数据分布；")]),this._v(" "),s("li",[this._v("盖帽法：重新设定数据边界，也会改变数据的分布，但异常值往往很少的话可以采用；整行替换数据框里99%以上和1%以下的点，将99%以上的点值=99%的点值；小于1%的点值=1%的点值。即\n把3sigma之外的数据定为sigma")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("mu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chlorides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsigma"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chlorides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sigma\nhb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sigma\ntmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("lb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lb\ntmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hb\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boxplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chlorides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("取对数：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chlorides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("figsize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nraw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chlorides_expd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nraw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chlorides_expd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("figsize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("分类建模：把干扰变量变成分类变量（异常为1，不异常为0）")]),this._v(" "),s("li",[this._v("离散化：例如做成 高、中、低，三种字段。")]),this._v(" "),s("li",[this._v("剔除 ：整行剔除，整列剔除")]),this._v(" "),s("li",[this._v("变量转换：通过一定的变换改变原有数据的分布，使得异常值不在异常；（对比上面的取对数）\n对严重右偏的数据非常有用，变换后的数据能够更接近正态分布；\n![https://pic3.zhimg.com/80/v2-f8b7c166c351fd3a036b69a888ec1132_hd.jpg][标记1]")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"冗余值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冗余值","aria-hidden":"true"}},[this._v("#")]),this._v(" 冗余值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("删除冗余值：drop_duplicates()")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模型反馈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型反馈","aria-hidden":"true"}},[this._v("#")]),this._v(" 模型反馈")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("数据清洗有没有问题")]),t._v(" "),a("li",[t._v("数据抽样有没有问题")]),t._v(" "),a("li",[t._v("数据理解有没有问题：主成分分析，聚类看一下")]),t._v(" "),a("li",[t._v("模型选择有没有问题")]),t._v(" "),a("li",[t._v("参数调整有没有问题")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分类变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 分类变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("sklearn-DictVectorizer")]),this._v(" "),s("p",[this._v("可以将字符串转换成分类特征")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("p",[t._v("dummy variable")]),t._v(" "),a("p",[t._v("哑变量编码直观的解释就是任意的将一个状态位去除；哑变量编码觉得one-hot编码太罗嗦了（一些很明显的事实还说的这么清楚），所以它就很那么很明显的东西省去了。")]),t._v(" "),a("p",[t._v("比如一个分类变量有3个值，用OneHotEncoder()表示：")]),t._v(" "),a("p",[t._v("100")]),t._v(" "),a("p",[t._v("010")]),t._v(" "),a("p",[t._v("001")]),t._v(" "),a("p",[t._v("而用哑变量表示的话，2个状态就可以表示2个值：")]),t._v(" "),a("p",[t._v("10")]),t._v(" "),a("p",[t._v("01")]),t._v(" "),a("p",[t._v("00")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"连续变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连续变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 连续变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("bining-数据分箱")]),this._v(" "),s("p",[this._v("数据分箱：按照某种规则将数据进行分类；相当于数值连续变量数量太多且真实的数据的大小对模型的影响没有实际价值，不如将变量分类，跟学生成绩排ABC一样，100-91的成绩为A，70-89的为B；然后按照处理分类变量一样处理；")])]),this._v(" "),s("li",[s("p",[this._v("regularization-正则化")]),this._v(" "),s("p",[this._v("特征太多可能会产生过拟合，为防止过拟合，采用正则化方法减小不重要的特征变量，自动提取重要的变量，减小特征变量的数量级；")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据类别不均"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类别不均","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据类别不均")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("重新采样")]),t._v(" "),a("ul",[a("li",[t._v("欠采样：\n"),a("ul",[a("li",[t._v("随机地消除占多数的类的样本来平衡类分布；直到多数类和少数类的实例实现平衡，目标才算达成。")]),t._v(" "),a("li",[t._v("缺点：丢弃有价值的重要的信息；欠采样选取的样本可能有偏差，不能代表大多数；")])])]),t._v(" "),a("li",[t._v("过采样\n"),a("ul",[a("li",[t._v("随机复制少数类来增加其中的实例数量，从而可增加样本中少数类的代表性。")]),t._v(" "),a("li",[t._v("缺点：由于复制少数类事件，它加大了过拟合的可能性。")])])])])]),t._v(" "),a("li",[a("p",[t._v("算法集成技术")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("bagging:")]),t._v(" "),a("ul",[a("li",[t._v("集成方法的主要目的是提高单个分类器的性能。该方法从原始数据中构建几个两级分类器，然后整合它们的预测。")]),t._v(" "),a("li",[t._v("缺点：bagging 只会在基本分类器效果很好时才有效。错误的分类可能会进一步降低表现。")])])]),t._v(" "),a("li",[a("p",[t._v("boosting:")]),t._v(" "),a("ul",[a("li",[t._v("它可以将弱学习器结合起来创造出一个能够进行准确预测的强大学习器。Boosting 开始于在训练数据上准备的基本分类器/弱分类器")])])]),t._v(" "),a("li",[a("p",[t._v("例如：imblearn.ensemble中的EasyEnsemble做集成处理")])])])]),t._v(" "),a("li",[a("p",[t._v("扩充数据集：首先想到能否获得更多数据，尤其是小类（该类样本数据极少）的数据，更多的数据往往能得到更多的分布信息；")])]),t._v(" "),a("li",[a("p",[t._v("人造数据：")]),t._v(" "),a("ul",[a("li",[t._v("一种简单的产生人造数据的方法是：在该类下所有样本的每个属性特征的取值空间中随机选取一个组成新的样本，即属性值随机采样。此方法多用于小类中的样本，不过它可能破坏原属性的线性关系。如在图像中，对一幅图像进行扭曲得到另一幅图像，即改变了原图像的某些特征值，但是该方法可能会产生现实中不存在的样本。")])])]),t._v(" "),a("li",[a("p",[t._v("通过正负样本的惩罚权重解决样本的不均匀")]),t._v(" "),a("ul",[a("li",[t._v("对于分类中不同样本数量的类别分别赋予不同的权重，一般是小样本量类别权重高，大样本量类别权重低。sklearn中针对一些模型会有相应的操作，例如svm, class_weight='balanced'")])])])])}],!1,null,null,null);s.default=e.exports}}]);