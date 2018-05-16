Ext.data.JsonP.Autolinker_match_Match({"tagname":"class","name":"Autolinker.match.Match","autodetected":{},"files":[{"filename":"Match.js","href":"Match.html#Autolinker-match-Match"}],"abstract":true,"members":[{"name":"matchedText","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-matchedText","meta":{"required":true}},{"name":"offset","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-offset","meta":{"required":true}},{"name":"tagBuilder","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-tagBuilder","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Match","id":"method-constructor","meta":{}},{"name":"buildTag","tagname":"method","owner":"Autolinker.match.Match","id":"method-buildTag","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Match","id":"method-getAnchorHref","meta":{"abstract":true}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getAnchorText","meta":{"abstract":true}},{"name":"getCssClassSuffixes","tagname":"method","owner":"Autolinker.match.Match","id":"method-getCssClassSuffixes","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-getOffset","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Match","id":"method-getType","meta":{"abstract":true}},{"name":"setOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-setOffset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Match","short_doc":"Represents a match found in an input string which should be Autolinked. ...","component":false,"superclasses":[],"subclasses":["Autolinker.match.Email","Autolinker.match.Hashtag","Autolinker.match.Mention","Autolinker.match.Phone","Autolinker.match.StockSymbol","Autolinker.match.Url"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Autolinker.match.Email' rel='Autolinker.match.Email' class='docClass'>Autolinker.match.Email</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Hashtag' rel='Autolinker.match.Hashtag' class='docClass'>Autolinker.match.Hashtag</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Mention' rel='Autolinker.match.Mention' class='docClass'>Autolinker.match.Mention</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Phone' rel='Autolinker.match.Phone' class='docClass'>Autolinker.match.Phone</a></div><div class='dependency'><a href='#!/api/Autolinker.match.StockSymbol' rel='Autolinker.match.StockSymbol' class='docClass'>Autolinker.match.StockSymbol</a></div><div class='dependency'><a href='#!/api/Autolinker.match.Url' rel='Autolinker.match.Url' class='docClass'>Autolinker.match.Url</a></div><h4>Files</h4><div class='dependency'><a href='source/Match.html#Autolinker-match-Match' target='_blank'>Match.js</a></div></pre><div class='doc-contents'><p>Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a\n<a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a>, and may be used to query for details about the match.</p>\n\n<p>For example:</p>\n\n<pre><code>var input = \"...\";  // string with URLs, Email Addresses, and Mentions (Twitter, Instagram)\n\nvar linkedText = <a href=\"#!/api/Autolinker-method-link\" rel=\"Autolinker-method-link\" class=\"docClass\">Autolinker.link</a>( input, {\n    replaceFn : function( match ) {\n        console.log( \"href = \", match.getAnchorHref() );\n        console.log( \"text = \", match.getAnchorText() );\n\n        switch( match.getType() ) {\n            case 'url' :\n                console.log( \"url: \", match.getUrl() );\n\n            case 'email' :\n                console.log( \"email: \", match.getEmail() );\n\n            case 'mention' :\n                console.log( \"mention: \", match.getMention() );\n        }\n    }\n} );\n</code></pre>\n\n<p>See the <a href=\"#!/api/Autolinker\" rel=\"Autolinker\" class=\"docClass\">Autolinker</a> class for more details on using the <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a>.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-matchedText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-cfg-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The original text that was matched by the <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a>.</p>\n</div><div class='long'><p>The original text that was matched by the <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a>.</p>\n</div></div></div><div id='cfg-offset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-offset' class='name expandable'>offset</a> : Number<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The offset of where the match was made in the input string.</p>\n</div><div class='long'><p>The offset of where the match was made in the input string.</p>\n</div></div></div><div id='cfg-tagBuilder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-cfg-tagBuilder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-tagBuilder' class='name expandable'>tagBuilder</a> : <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a><span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>Reference to the AnchorTagBuilder instance to use to generate an anchor\ntag for the Match.</p>\n</div><div class='long'><p>Reference to the AnchorTagBuilder instance to use to generate an anchor\ntag for the Match.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Match-method-constructor' class='name expandable'>Autolinker.match.Match</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match\n  instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-buildTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-buildTag' class='name expandable'>buildTag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds and returns an Autolinker.HtmlTag instance based on the\nMatch. ...</div><div class='long'><p>Builds and returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance based on the\nMatch.</p>\n\n<p>This can be used to easily generate anchor tags from matches, and either\nreturn their HTML string, or modify them before doing so.</p>\n\n<p>Example Usage:</p>\n\n<pre><code>var tag = match.buildTag();\ntag.addClass( 'cordova-link' );\ntag.setAttr( 'target', '_system' );\n\ntag.toAnchorString();  // &lt;a href=\"http://google.com\" class=\"cordova-link\" target=\"_system\"&gt;Google&lt;/a&gt;\n</code></pre>\n</div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCssClassSuffixes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getCssClassSuffixes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getCssClassSuffixes' class='name expandable'>getCssClassSuffixes</a>( <span class='pre'></span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the CSS class suffix(es) for this match. ...</div><div class='long'><p>Returns the CSS class suffix(es) for this match.</p>\n\n<p>A CSS class suffix is appended to the <a href=\"#!/api/Autolinker-cfg-className\" rel=\"Autolinker-cfg-className\" class=\"docClass\">Autolinker.className</a> in\nthe <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a> when a match is translated into\nan anchor tag.</p>\n\n<p>For example, if <a href=\"#!/api/Autolinker-cfg-className\" rel=\"Autolinker-cfg-className\" class=\"docClass\">Autolinker.className</a> was configured as 'myLink',\nand this method returns <code>[ 'url' ]</code>, the final class name of the element\nwill become: 'myLink myLink-url'.</p>\n\n<p>The match may provide multiple CSS class suffixes to be appended to the\n<a href=\"#!/api/Autolinker-cfg-className\" rel=\"Autolinker-cfg-className\" class=\"docClass\">Autolinker.className</a> in order to facilitate better styling\noptions for different match criteria. See <a href=\"#!/api/Autolinker.match.Mention\" rel=\"Autolinker.match.Mention\" class=\"docClass\">Autolinker.match.Mention</a>\nfor an example.</p>\n\n<p>By default, this method returns a single array with the match's\n<a href=\"#!/api/Autolinker.match.Match-method-getType\" rel=\"Autolinker.match.Match-method-getType\" class=\"docClass\">type</a> name, but may be overridden by subclasses.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMatchedText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the offset of where the match was made in the input string. ...</div><div class='long'><p>Returns the offset of where the match was made in the input string. This\nis the 0-based index of the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Match'>Autolinker.match.Match</span><br/><a href='source/Match.html#Autolinker-match-Match-method-setOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'>offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the offset of where the match was made in the input string. ...</div><div class='long'><p>Sets the <a href=\"#!/api/Autolinker.match.Match-cfg-offset\" rel=\"Autolinker.match.Match-cfg-offset\" class=\"docClass\">offset</a> of where the match was made in the input string.</p>\n\n<p>A <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> will be fed only HTML text nodes,\nand will therefore set an original offset that is relative to the HTML\ntext node itself. However, we want this offset to be relative to the full\nHTML input string, and thus if using <a href=\"#!/api/Autolinker-method-parse\" rel=\"Autolinker-method-parse\" class=\"docClass\">Autolinker.parse</a> (rather\nthan calling a <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> directly), then this\noffset is corrected after the Matcher itself has done its job.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});