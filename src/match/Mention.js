/*global Autolinker */
/**
 * @class Autolinker.match.Mention
 * @extends Autolinker.match.Match
 *
 * Represents a Mention match found in an input string which should be Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
Autolinker.match.Mention = Autolinker.Util.extend( Autolinker.match.Match, {

	/**
	 * @cfg {String} serviceName
	 *
	 * The service to point mention matches to. See {@link Autolinker#mention}
	 * for available values.
	 */

	/**
	 * @cfg {String} mention (required)
	 *
	 * The Mention that was matched, without the '@' character.
	 */


	/**
	 * @constructor
	 * @param {Object} cfg The configuration properties for the Match
	 *   instance, specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.match.Match.prototype.constructor.call( this, cfg );

		// @if DEBUG
		if( !cfg.serviceName ) throw new Error( '`serviceName` cfg required' );
		if( !cfg.mention ) throw new Error( '`mention` cfg required' );
		// @endif

		this.mention = cfg.mention;
		this.serviceName = cfg.serviceName;
	},


	/**
	 * Returns the type of match that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'mention';
	},


	/**
	 * Returns the mention, without the '@' character.
	 *
	 * @return {String}
	 */
	getMention : function() {
		if (this.serviceName === 'tradably' || this.serviceName === 'alphaco') {
    		var comps = this.mention.split(',');
    		return {
    			mention: comps[0].slice(1),
    			id: comps[1].slice(0, 20)
    		};
        }
        return {
            mention: this.mention
        };
	},


	/**
	 * Returns the configured {@link #serviceName} to point the mention to.
	 * Ex: 'instagram', 'twitter'.
	 *
	 * @return {String}
	 */
	getServiceName : function() {
		return this.serviceName;
	},


	/**
	 * Returns the anchor href that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorHref : function() {
		switch( this.serviceName ) {
			case 'twitter' :
				return 'https://twitter.com/' + this.mention;
			case 'instagram' :
				return 'https://instagram.com/' + this.mention;
			case 'tradably': {
				const userId = this.mention.substring(this.mention.indexOf(',')+1, this.mention.length-1);
				return 'https://app.tradably.com/user/' + userId;
			}
			case 'alphaco': {
				const userId = this.mention.substring(this.mention.indexOf(',')+1, this.mention.length-1);
				return 'https://app.alphacollective.co/user/' + userId;
			}
			default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
				throw new Error( 'Unknown service name to point mention to: ', this.serviceName );
		}
	},


	/**
	 * Returns the anchor text that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorText : function() {
		if (this.serviceName === 'tradably' || this.serviceName === 'alphaco'){
    		var name = this.mention.split(',')[0];
    		return '@' + name.slice(1);
        }
        return this.mention;
	},


	/**
	 * Returns the CSS class suffixes that should be used on a tag built with
	 * the match. See {@link Autolinker.match.Match#getCssClassSuffixes} for
	 * details.
	 *
	 * @return {String[]}
	 */
	getCssClassSuffixes : function() {
		var cssClassSuffixes = Autolinker.match.Match.prototype.getCssClassSuffixes.call( this ),
		    serviceName = this.getServiceName();

		if( serviceName ) {
			cssClassSuffixes.push( serviceName );
		}
		return cssClassSuffixes;
	}

} );
