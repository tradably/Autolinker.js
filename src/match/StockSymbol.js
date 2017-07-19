/*global Autolinker */
/**
 * @class Autolinker.match.StockSymbol
 * @extends Autolinker.match.Match
 *
 * Represents a StockSymbol match found in an input string which should be
 * Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more
 * details.
 */
Autolinker.match.StockSymbol = Autolinker.Util.extend( Autolinker.match.Match, {

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
		if( !cfg.stockSymbol ) throw new Error( '`stockSymbol` cfg required' );
		// @endif

		this.serviceName = cfg.serviceName;
		this.stockSymbol = cfg.stockSymbol;
	},


	/**
	 * Returns the type of match that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'stockSymbol';
	},


	/**
	 * Returns the configured {@link #serviceName} to point the StockSymbol to.
	 * Ex: 'yahoo', 'investing', 'tradingview'.
	 *
	 * @return {String}
	 */
	getServiceName : function() {
		return this.serviceName;
	},


	/**
	 * Returns the matched stockSymbol, without the '$' character.
	 *
	 * @return {String}
	 */
	getStockSymbol : function() {
		return this.stockSymbol;
	},


	/**
	 * Returns the anchor href that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorHref : function() {
		var serviceName = this.serviceName,
		    stockSymbol = this.stockSymbol;

		switch( serviceName ) {
			case 'yahoo' :
				return 'https://finance.yahoo.com/quote/' + stockSymbol;
			default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
				throw new Error( 'Unknown service name to point stockSymbol to: ', serviceName );
		}
	},


	/**
	 * Returns the anchor text that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorText : function() {
		return '$' + this.stockSymbol;
	}

} );
