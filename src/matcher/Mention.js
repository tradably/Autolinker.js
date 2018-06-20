/*global Autolinker */
/**
 * @class Autolinker.matcher.Mention
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find/replace username matches in an input string.
 */
 const emojiRegex = '\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}';
Autolinker.matcher.Mention = Autolinker.Util.extend( Autolinker.matcher.Matcher, {

	/**
	 * Hash of regular expression to match username handles. Example match:
	 *
	 *     @asdf
	 *
	 * @private
	 * @property {Object} matcherRegexes
	 */
	matcherRegexes : {
		"twitter": new RegExp( '@[_' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,20}', 'g' ),
		"instagram": new RegExp( '@[_.' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,50}', 'g' ),
		"tradably": new RegExp( '@[\(][_. ' + Autolinker.RegexLib.alphaNumericCharsStr + emojiRegex + ']{2,50},[=' + Autolinker.RegexLib.alphaNumericCharsStr + ']{20}[\)]', 'gu' ),
	},

	/**
	 * The regular expression to use to check the character before a username match to
	 * make sure we didn't accidentally match an email address.
	 *
	 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
	 *
	 * @private
	 * @property {RegExp} nonWordCharRegex
	 */
	nonWordCharRegex : new RegExp( '[^' + Autolinker.RegexLib.alphaNumericCharsStr + ']' ),


	/**
	 * @constructor
	 * @param {Object} cfg The configuration properties for the Match instance,
	 *   specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );

		this.serviceName = cfg.serviceName;
	},


	/**
	 * @inheritdoc
	 */
	parseMatches : function( text ) {
		var matcherRegex = this.matcherRegexes[this.serviceName],
		    nonWordCharRegex = this.nonWordCharRegex,
		    serviceName = this.serviceName,
		    tagBuilder = this.tagBuilder,
		    matches = [],
		    match;

		if (!matcherRegex) {
			return matches;
		}

		while( ( match = matcherRegex.exec( text ) ) !== null ) {
			var offset = match.index,
			    prevChar = text.charAt( offset - 1 );

			// If we found the match at the beginning of the string, or we found the match
			// and there is a whitespace char in front of it (meaning it is not an email
			// address), then it is a username match.
			if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {
				var matchedText = match[ 0 ].replace(/\.+$/g, ''), // strip off trailing .
				    mention = matchedText.slice( 1 );  // strip off the '@' character at the beginning

				matches.push( new Autolinker.match.Mention( {
					tagBuilder    : tagBuilder,
					matchedText   : matchedText,
					offset        : offset,
					serviceName   : serviceName,
					mention       : mention
				} ) );
			}
		}

		return matches;
	}

} );
