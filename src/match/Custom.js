/*global Autolinker */
/**
 * @class Autolinker.match.Custom
 * @extends Autolinker.match.Match
 *
 * Represents a StockSymbol match found in an input string which should be
 * Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more
 * details.
 */
Autolinker.match.Custom = Autolinker.Util.extend( Autolinker.match.Match, {

	/**
	 * @cfg {String} serviceName
	 *
	 * The service to point stock symbol matches to. See {@link Autolinker#stockSymbol}
	 * for available values.
	 */

	/**
	 * @cfg {String} stockSymbol (required)
	 *
	 * The Stock symbol that was matched, without the '$'.
	 */


	/**
	 * @constructor
	 * @param {Object} cfg The configuration properties for the Match
	 *   instance, specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.match.Match.prototype.constructor.call( this, cfg );

		// @if DEBUG
		// TODO: if( !serviceName ) throw new Error( '`serviceName` cfg required' );
		if( !cfg.rawValue ) throw new Error( '`rawValue` cfg required' );
		// @endif

		this.rawValue = cfg.rawValue
	},


	/**
	 * Returns the type of match that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'custom';
	},

	/**
	 * Returns the anchor href that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorHref : function() {
		return null
	},


	/**
	 * Returns the anchor text that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorText : function() {
		return null
		// return '$' + this.stockSymbol.split(',')[0];
	}

} );
