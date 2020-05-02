(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{231:function(a,e,s){"use strict";s.r(e);var _=s(0),v=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"es基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es基础","aria-hidden":"true"}},[a._v("#")]),a._v(" ES基础")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("什么是ES？")]),a._v(" "),s("p",[s("strong",[a._v("es是一个高扩展、开源的全文检索和分析引擎，它可以准实时地快速存储、搜索、分析海量的数据。")])]),a._v(" "),s("p",[a._v("Elasticsearch是一个基于Lucene的搜索引擎。它提供了具有HTTP Web界面和无架构JSON文档的分布式，多租户能力的全文搜索引擎。Elasticsearch是用Java开发的，根据Apache许可条款作为开源发布。")])]),a._v(" "),s("li",[s("p",[a._v("为什么要使用ES？")]),a._v(" "),s("p",[a._v("因为在我们商城中的数据，将来会非常多，所以采用以往的模糊查询，模糊查询前置配置，会放弃索引，导致商品查询是全表扫面，在百万级别的数据库中，效率非常低下，而我们使用ES做一个全文索引，我们将经常查询的商品的某些字段，比如说商品名，描述、价格还有id这些字段我们放入我们索引库里，可以提高查询速度。")])]),a._v(" "),s("li",[s("p",[a._v("您可以在文档上执行哪些基本操作？")]),a._v(" "),s("p",[a._v("可以在文档中进行以下操作：")]),a._v(" "),s("p",[a._v("a.使用ELASTICSEARCH索引文档内容。")]),a._v(" "),s("p",[a._v("b.使用ELASTICSEARCH抓取文档内容。")]),a._v(" "),s("p",[a._v("C.使用ELASTICSEARCH更新文档内容。")]),a._v(" "),s("p",[a._v("d.使用ELASTICSEARCH删除文档内容。")])]),a._v(" "),s("li",[s("p",[a._v("ElasticSearch中的集群、节点、索引、文档、类型是什么？")]),a._v(" "),s("ul",[s("li",[a._v("群集是一个或多个节点（服务器）的集合，它们共同保存您的整个数据，并提供跨所有节点的联合索引和搜索功能。群集由唯一名称标识，默认情况下为“elasticsearch”。此名称很重要，因为如果节点设置为按名称加入群集，则该节点只能是群集的一部分。")]),a._v(" "),s("li",[a._v("节点是属于集群一部分的单个服务器。它存储数据并参与群集索引和搜索功能。")]),a._v(" "),s("li",[a._v("索引就像关系数据库中的“数据库”。它有一个定义多种类型的映射。索引是逻辑名称空间，映射到一个或多个主分片，并且可以有零个或多个副本分片。 MySQL =>数据库 ElasticSearch =>索引")]),a._v(" "),s("li",[a._v("文档类似于关系数据库中的一行。不同之处在于索引中的每个文档可以具有不同的结构（字段），但是对于通用字段应该具有相同的数据类型。 MySQL => Databases => Tables => Columns / Rows ElasticSearch => Indices => Types =>具有属性的文档")]),a._v(" "),s("li",[a._v("类型是索引的逻辑类别/分区，其语义完全取决于用户。")])])]),a._v(" "),s("li",[s("p",[a._v("ElasticSearch是否有架构？")]),a._v(" "),s("p",[a._v("ElasticSearch可以有一个架构。架构是描述文档类型以及如何处理文档的不同字段的一个或多个字段的描述。Elasticsearch中的架构是一种映射，它描述了JSON文档中的字段及其数据类型，以及它们应该如何在Lucene索引中进行索引。因此，在Elasticsearch术语中，我们通常将此模式称为“映射”。")]),a._v(" "),s("p",[a._v("Elasticsearch具有架构灵活的能力，这意味着可以在不明确提供架构的情况下索引文档。如果未指定映射，则默认情况下，Elasticsearch会在索引期间检测文档中的新字段时动态生成一个映射。")])]),a._v(" "),s("li",[s("p",[a._v("适用场景\nEs+hbase：利用这两个框架的优点实现快速复杂查询和海量数据存储。\nEs通过建立索引实现快速查询，它也可以存储但是不适合海量数据的存储，只存储需要那些需要从索引库中直接返回给客户的内容\nHbase适合海量数据存储，按rowkey查询可以实现快速查询，但是按列查询效率不高，所以结合es实现按字段快速查询\n例如：针对海量的文章数据进行存储和快速复杂查询服务就可以通过es+hbase\n比如文章数据有：（如果是面试题，需要问清楚需求，需要根据哪些字段进行查询，哪些内容直接从索引库中直接返回给客户，再进行下面的设置）")])]),a._v(" "),s("li",[s("p",[a._v("优点：")]),a._v(" "),s("p",[a._v("1.Elasticsearch是分布式的。不需要其他组件，分发是实时的，被叫做”Push replication”。")]),a._v(" "),s("p",[a._v("2.Elasticsearch 完全支持 Apache Lucene 的接近实时的搜索。")]),a._v(" "),s("p",[a._v("3.处理多租户（multitenancy）不需要特殊配置，而Solr则需要更多的高级设置。")]),a._v(" "),s("p",[a._v("4.Elasticsearch 采用 Gateway 的概念，使得完备份更加简单。")]),a._v(" "),s("p",[a._v("5.各节点组成对等的网络结构，某些节点出现故障时会自动分配其他节点代替其进行工作。")])])])])}],!1,null,null,null);e.default=v.exports}}]);