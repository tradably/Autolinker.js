/*global Autolinker */
/**
 * @class Autolinker.matcher.StockSymbol
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find StockSymbol matches in an input string.
 */
Autolinker.matcher.StockSymbol = Autolinker.Util.extend( Autolinker.matcher.Matcher, {

	/**
	 * @cfg {String} serviceName
	 *
	 * The service to point stockSymbol matches to. See {@link Autolinker#stockSymbol}
	 * for available values.
	 */


	/**
	 * The regular expression to match stockSymbols. Example match:
	 *
	 *     #asdf
	 *
	 * @private
	 * @property {RegExp} matcherRegex
	 */
	// matcherRegex : new RegExp( '[\$]{1}[.' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,12}', 'g' ),
	matcherRegex : /[\$][\(][a-zA-Z0-9_\-=@]{2,12}([\.][a-zA-Z]{1,3})?,[CBEFI]{1}[\)]:/g,

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
		var matcherRegex = this.matcherRegex,
		    nonWordCharRegex = this.nonWordCharRegex,
		    serviceName = this.serviceName,
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
				var matchedText = match[ 0 ],
				    stockSymbol = match[ 0 ].slice( 2 );  // strip off the '$$' character at the beginning

				matches.push( new Autolinker.match.StockSymbol( {
					tagBuilder  : tagBuilder,
					matchedText : matchedText,
					offset      : offset,
					serviceName : serviceName,
					stockSymbol : stockSymbol
				} ) );
			}
		}

		return matches;
	}

} );
