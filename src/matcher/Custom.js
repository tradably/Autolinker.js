/*global Autolinker */
/**
 * @class Autolinker.matcher.StockSymbol
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find StockSymbol matches in an input string.
 */
Autolinker.matcher.StockSymbol = Autolinker.Util.extend( Autolinker.matcher.Matcher, {

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

		this.matcherRegex = cfg.matcherRegex
	},


	/**
	 * @inheritdoc
	 */
	parseMatches : function( text ) {
		var matcherRegex = this.matcherRegex,
			nonWordCharRegex = this.nonWordCharRegex,
			tagBuilder = this.tagBuilder,
			matches = [],
			match;

		while( ( match = matcherRegex.exec( text ) ) !== null ) {
			var offset = match.index,
				prevChar = text.charAt( offset - 1 );

			// If we found the match at the beginning of the string, or we found the match
			// and there is a whitespace char in front of it (meaning it is not a '#' char
			// in the middle of a word), then it is a stockSymbol match.
			if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {
				var matchedText = match[ 0 ]

				matches.push( new Autolinker.match.Custom( {
					tagBuilder  : tagBuilder,
					matchedText : matchedText,
					offset      : offset,
					rawValue: matchedText
				} ) );
			}
		}
		return matches;
	}
} );
