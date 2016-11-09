/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _nav = __webpack_require__(17);

	var _nav2 = _interopRequireDefault(_nav);

	var _map = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/map\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _map2 = _interopRequireDefault(_map);

	var _religions_chart = __webpack_require__(13);

	var _religions_chart2 = _interopRequireDefault(_religions_chart);

	var _search_country = __webpack_require__(22);

	var _search_country2 = _interopRequireDefault(_search_country);

	var _search_list = __webpack_require__(23);

	var _search_list2 = _interopRequireDefault(_search_list);

	var _download_report = __webpack_require__(24);

	var _download_report2 = _interopRequireDefault(_download_report);

	var _subscribe_form = __webpack_require__(114);

	var _subscribe_form2 = _interopRequireDefault(_subscribe_form);

	var _home_header = __webpack_require__(115);

	var _home_header2 = _interopRequireDefault(_home_header);

	var _footer_nav = __webpack_require__(117);

	var _footer_nav2 = _interopRequireDefault(_footer_nav);

	var _country_lang = __webpack_require__(118);

	var _country_lang2 = _interopRequireDefault(_country_lang);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(function () {
	  (0, _nav2.default)();
	  (0, _map2.default)();
	  (0, _religions_chart2.default)();
	  (0, _download_report2.default)();
	  (0, _search_country2.default)();
	  (0, _search_list2.default)();
	  (0, _subscribe_form2.default)();
	  (0, _footer_nav2.default)();
	  (0, _home_header2.default)();
	  // countries();

	  new _vue2.default({
	    el: '#acn_reports'
	  });

	  var windowHeight = window.innerHeight;

	  if (windowHeight > 700) {
	    document.querySelector('.home_header').style.height = windowHeight + 'px';
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    _vue2.default.component('religions-chart', {
	        template: '<div id="religions-chart" style="width: 100%; height: 400px; margin: 0 auto"></div>',
	        props: ['religions', 'colors'],

	        ready: function ready() {
	            var religions = this.religions;
	            var colors = this.colors;
	            var seriesData = [];
	            var subSeriesData = [];

	            function createData(color, name, y, brighten) {
	                var newOb = {};
	                var nColor = brighten ? Highcharts.Color(color).brighten(0.2).get() : Highcharts.Color(color).get();

	                newOb['color'] = nColor;
	                newOb['name'] = name;
	                newOb['y'] = parseFloat(y);
	                return newOb;
	            }

	            function getData(obj, key) {
	                var religion = obj[key];
	                var color = religion.color;
	                var newOb = createData(religion.color, religion.name, religion.percent);

	                if (religion.sub && Object.keys(religion.sub).length > 0) {
	                    subSeriesData = subSeriesData.concat(Object.keys(religion.sub).map(function (key) {
	                        return createData(color, religion.sub[key].name, religion.sub[key].percent, true);
	                    }));
	                } else {
	                    var newSubOb = createData(color, religion.name, religion.percent, true);
	                    subSeriesData = subSeriesData.concat([newSubOb]);
	                }

	                return newOb;
	            }

	            seriesData = Object.keys(religions).map(function (key) {
	                return getData(religions, key);
	            });

	            $('#religions-chart').highcharts({
	                chart: {
	                    type: 'pie',
	                    backgroundColor: 'rgba(255, 255, 255, 0)',
	                    style: {
	                        fontFamily: 'Roboto Condensed'
	                    }
	                },
	                title: {
	                    text: ''
	                },
	                yAxis: {
	                    title: {
	                        text: ''
	                    }
	                },
	                plotOptions: {
	                    pie: {
	                        shadow: false,
	                        center: ['50%', '50%']
	                    }
	                },
	                tooltip: {
	                    valueSuffix: '%'
	                },
	                series: [{
	                    name: '',
	                    data: seriesData,
	                    size: '60%',
	                    dataLabels: {
	                        formatter: function formatter() {
	                            return this.y > 5 ? this.point.name : null;
	                        },
	                        color: '#ffffff',
	                        distance: -30
	                    }
	                }, {
	                    name: '',
	                    data: subSeriesData,
	                    size: '80%',
	                    innerSize: '60%',
	                    dataLabels: {
	                        formatter: function formatter() {
	                            // display only if larger than 1
	                            return '<b>' + this.point.name + ':</b> ' + this.y + '%';
	                        }
	                    }
	                }]
	            });
	        }
	    });
	};

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _hexRgba = __webpack_require__(16);

	var _hexRgba2 = _interopRequireDefault(_hexRgba);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function hexToRgba(hex, opacity){
	  var opacity = opacity || 100;
	  var hex = hex.replace('#', '');
	  var r = parseInt(hex.substring(0, 2), 16);
	  var g = parseInt(hex.substring(2, 4), 16);
	  var b = parseInt(hex.substring(4, 6), 16);

	  return 'rgba(' + r + ', ' + g + ' ,' + b + ', ' + opacity / 100 + ')';
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = nav;

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function nav() {
	  var nav = (0, _jquery2.default)('.nav');
	  var bod = (0, _jquery2.default)('body');
	  var open = true;
	  var style = { 'left': '0', 'z-index': '0' };

	  document.getElementById('open-nav').addEventListener('click', openNav);

	  function openNav(evt) {
	    evt.preventDefault();
	    var $nav = (0, _jquery2.default)(this);

	    if (!open) {
	      $nav.removeClass('active');
	      style = _extends({}, style, { 'left': '-80%', 'z-index': '0' });
	    } else {
	      $nav.addClass('active');
	      style = _extends({}, style, { 'left': '0', 'z-index': '10010' });
	    }

	    nav.css(style);

	    open = !open;
	  }
	}

/***/ },
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _vue2.default.component('search-country', {
	    template: '#search-country-template',
	    props: ['reports', 'dir'],

	    data: function data() {
	      return {
	        country: '',
	        items: [],
	        current: 0
	      };
	    },
	    ready: function ready() {
	      this.items = JSON.parse(this.reports);
	      (0, _jquery2.default)('.map__search_input').focus();
	      (0, _jquery2.default)('.open-select-countries').on('click', this.open);
	    },


	    methods: {
	      close: function close(e) {
	        if (e) e.preventDefault();
	        (0, _jquery2.default)('body').removeClass('model-open');
	        (0, _jquery2.default)('.map__search').removeClass('map__search--show');
	      },
	      open: function open(e) {
	        if (e) e.preventDefault();
	        (0, _jquery2.default)('body').addClass('model-open');
	        (0, _jquery2.default)('.map__search').addClass('map__search--show');
	      },
	      getIcon: function getIcon(name) {
	        return this.dir + '/public/img/icons/' + name + '.svg';
	      },
	      isSelected: function isSelected(index) {
	        return index === this.current;
	      },
	      isDiscrimination: function isDiscrimination(n) {
	        return n == 'Discrimination';
	      },
	      isPersecution: function isPersecution(n) {
	        return n == 'Persecution';
	      },
	      enter: function enter() {
	        window.location = this.items[this.current].guid;
	      },
	      up: function up(e) {
	        if (this.current > 0) {
	          this.current--;
	        }
	        return false;
	      },
	      down: function down(e) {
	        e.preventDefault();
	        if (this.current < this.items.length - 1) {
	          this.current++;
	        }
	        return false;
	      },
	      search: function search(evt) {
	        var reports = JSON.parse(this.reports);
	        var query = this.country;
	        var results = [];
	        var key = evt.keyCode;
	        var arrowKeys = [37, 38, 39, 40];

	        if (arrowKeys.indexOf(key) == -1) this.current = 0;

	        if (query.length > 0) {

	          results = reports.filter(function (pst) {
	            return pst.meta_country.toLowerCase().indexOf(query.toLowerCase()) != -1;
	          });
	        } else {
	          results = JSON.parse(this.reports);
	        }

	        this.$set('items', results);
	      }
	    }
	  });
	};

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function () {
	  _vue2.default.component('search-list', {
	    template: '#search-list-template',
	    props: ['reports', 'continents', 'dir'],

	    ready: function ready() {
	      var reports = JSON.parse(this.reports);
	      var continents = JSON.parse(this.continents);
	      var newContinents = {};

	      var filterByCountry = function filterByCountry(coun) {
	        if (reports.filter(function (r) {
	          return r.meta_country == coun;
	        })[0]) {
	          return reports.filter(function (r) {
	            return r.meta_country == coun;
	          })[0];
	        } else {
	          return '';
	        }
	      };

	      var cleanEmpty = function cleanEmpty(report) {
	        return (typeof report === 'undefined' ? 'undefined' : _typeof(report)) == 'object';
	      };

	      newContinents['afrika'] = continents['Afrika'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['asia'] = continents['Asia'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['easterEurope'] = continents['Easter Europe'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['latinAmerica'] = continents['Latin America'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['middleEast'] = continents['Middle East'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['northAmerica'] = continents['North America'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['ocenia'] = continents['Ocenia'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['russiaCentralAsia'] = continents['Russia & Central Asia'].map(filterByCountry).filter(cleanEmpty);
	      newContinents['westernEurope'] = continents['Western Europe'].map(filterByCountry).filter(cleanEmpty);
	      this.continents = newContinents;
	    },


	    methods: {
	      close: function close(e) {
	        if (e) e.preventDefault();
	        (0, _jquery2.default)('body').removeClass('model-open');
	        (0, _jquery2.default)('.map__search_list').removeClass('map__search_list--show');
	      },
	      getIcon: function getIcon(name) {
	        return this.dir + '/public/img/icons/' + name + '.svg';
	      },
	      isSelected: function isSelected(index) {
	        return index === this.current;
	      },
	      isDiscrimination: function isDiscrimination(n) {
	        if (n) {
	          return n == 'Discrimination';
	        }
	      },
	      isPersecution: function isPersecution(n) {
	        if (n) {
	          return n == 'Persecution';
	        }
	      },
	      showContinent: function showContinent(continent) {
	        var each = function each(fn) {
	          return function (arr) {
	            return Array.prototype.forEach.call(arr, fn);
	          };
	        };
	        var parent = this.$el;
	        var $all = parent.querySelectorAll('ul[data-country]');
	        var $ul = parent.querySelector('ul[data-country="' + continent + '"]');
	        var display = $ul.style.display == 'block' ? 'none' : 'block';
	        each(function ($el) {
	          $el.style.display = 'none';
	        })($all);
	        $ul.style.display = display;
	      }
	    }

	  });
	};

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function () {
	  _vue2.default.component('form-download-report', {
	    template: '#form-download-template',
	    props: ['country'],
	    data: function data() {
	      return initialState;
	    },


	    methods: {
	      validate: function validate() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { field: '' };
	        var field = opts.field;

	        var data = this.$data[field];
	        var validation = this.$data.validation;

	        switch (field) {
	          case 'name':
	            validation = _extends({}, validation, { name: _validator2.default.isEmpty(data) });
	            break;
	          case 'email':
	            validation = _extends({}, validation, { email: !_validator2.default.isEmail(data) });
	            break;
	        };

	        this.$set('validation', validation);
	        this.$set('isValid', Object.keys(validation).filter(function (key) {
	          return validation[key] == true;
	        }).length == 0);
	      },
	      validateAll: function validateAll() {
	        var _this = this;

	        Object.keys(this.validation).forEach(function (field) {
	          return _this.validate({ field: field });
	        });
	      },
	      onSubmit: function onSubmit() {
	        var name = this.name;
	        var email = this.email;
	        var country = this.country;
	        var language = this.language;

	        this.validateAll();

	        if (this.isValid) {
	          _axios2.default.post('http://us13.api.mailchimp.com/3.0/lists/' + listId, {
	            data: { email_address: email },
	            auth: { user: apiKey }
	          }).then(function (res) {
	            return console.log(res.data);
	          }).catch(function (err) {
	            return console.log(err);
	          });
	        }
	      }
	    }
	  });
	};

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _validator = __webpack_require__(25);

	var _validator2 = _interopRequireDefault(_validator);

	var _axios = __webpack_require__(89);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var apiKey = '709cb76ed68f751a3ae287f2c067a046-us13';
	var listId = 'e4bd5ff7e0';

	var initialState = {
	  name: '',
	  email: '',
	  language: '',
	  isValid: false,
	  country: '',
	  validation: {
	    name: false,
	    email: false
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toDate = __webpack_require__(26);

	var _toDate2 = _interopRequireDefault(_toDate);

	var _toFloat = __webpack_require__(28);

	var _toFloat2 = _interopRequireDefault(_toFloat);

	var _toInt = __webpack_require__(29);

	var _toInt2 = _interopRequireDefault(_toInt);

	var _toBoolean = __webpack_require__(30);

	var _toBoolean2 = _interopRequireDefault(_toBoolean);

	var _equals = __webpack_require__(31);

	var _equals2 = _interopRequireDefault(_equals);

	var _contains = __webpack_require__(32);

	var _contains2 = _interopRequireDefault(_contains);

	var _matches = __webpack_require__(34);

	var _matches2 = _interopRequireDefault(_matches);

	var _isEmail = __webpack_require__(35);

	var _isEmail2 = _interopRequireDefault(_isEmail);

	var _isURL = __webpack_require__(39);

	var _isURL2 = _interopRequireDefault(_isURL);

	var _isMACAddress = __webpack_require__(41);

	var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

	var _isIP = __webpack_require__(40);

	var _isIP2 = _interopRequireDefault(_isIP);

	var _isFQDN = __webpack_require__(38);

	var _isFQDN2 = _interopRequireDefault(_isFQDN);

	var _isBoolean = __webpack_require__(42);

	var _isBoolean2 = _interopRequireDefault(_isBoolean);

	var _isAlpha = __webpack_require__(43);

	var _isAlpha2 = _interopRequireDefault(_isAlpha);

	var _isAlphanumeric = __webpack_require__(45);

	var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

	var _isNumeric = __webpack_require__(46);

	var _isNumeric2 = _interopRequireDefault(_isNumeric);

	var _isLowercase = __webpack_require__(47);

	var _isLowercase2 = _interopRequireDefault(_isLowercase);

	var _isUppercase = __webpack_require__(48);

	var _isUppercase2 = _interopRequireDefault(_isUppercase);

	var _isAscii = __webpack_require__(49);

	var _isAscii2 = _interopRequireDefault(_isAscii);

	var _isFullWidth = __webpack_require__(50);

	var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

	var _isHalfWidth = __webpack_require__(51);

	var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

	var _isVariableWidth = __webpack_require__(52);

	var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

	var _isMultibyte = __webpack_require__(53);

	var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

	var _isSurrogatePair = __webpack_require__(54);

	var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

	var _isInt = __webpack_require__(55);

	var _isInt2 = _interopRequireDefault(_isInt);

	var _isFloat = __webpack_require__(56);

	var _isFloat2 = _interopRequireDefault(_isFloat);

	var _isDecimal = __webpack_require__(57);

	var _isDecimal2 = _interopRequireDefault(_isDecimal);

	var _isHexadecimal = __webpack_require__(58);

	var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

	var _isDivisibleBy = __webpack_require__(59);

	var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

	var _isHexColor = __webpack_require__(60);

	var _isHexColor2 = _interopRequireDefault(_isHexColor);

	var _isMD = __webpack_require__(61);

	var _isMD2 = _interopRequireDefault(_isMD);

	var _isJSON = __webpack_require__(62);

	var _isJSON2 = _interopRequireDefault(_isJSON);

	var _isEmpty = __webpack_require__(63);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _isLength = __webpack_require__(64);

	var _isLength2 = _interopRequireDefault(_isLength);

	var _isByteLength = __webpack_require__(37);

	var _isByteLength2 = _interopRequireDefault(_isByteLength);

	var _isUUID = __webpack_require__(65);

	var _isUUID2 = _interopRequireDefault(_isUUID);

	var _isMongoId = __webpack_require__(66);

	var _isMongoId2 = _interopRequireDefault(_isMongoId);

	var _isDate = __webpack_require__(67);

	var _isDate2 = _interopRequireDefault(_isDate);

	var _isAfter = __webpack_require__(69);

	var _isAfter2 = _interopRequireDefault(_isAfter);

	var _isBefore = __webpack_require__(70);

	var _isBefore2 = _interopRequireDefault(_isBefore);

	var _isIn = __webpack_require__(71);

	var _isIn2 = _interopRequireDefault(_isIn);

	var _isCreditCard = __webpack_require__(72);

	var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

	var _isISIN = __webpack_require__(73);

	var _isISIN2 = _interopRequireDefault(_isISIN);

	var _isISBN = __webpack_require__(74);

	var _isISBN2 = _interopRequireDefault(_isISBN);

	var _isMobilePhone = __webpack_require__(75);

	var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

	var _isCurrency = __webpack_require__(76);

	var _isCurrency2 = _interopRequireDefault(_isCurrency);

	var _isISO = __webpack_require__(68);

	var _isISO2 = _interopRequireDefault(_isISO);

	var _isBase = __webpack_require__(77);

	var _isBase2 = _interopRequireDefault(_isBase);

	var _isDataURI = __webpack_require__(78);

	var _isDataURI2 = _interopRequireDefault(_isDataURI);

	var _ltrim = __webpack_require__(79);

	var _ltrim2 = _interopRequireDefault(_ltrim);

	var _rtrim = __webpack_require__(80);

	var _rtrim2 = _interopRequireDefault(_rtrim);

	var _trim = __webpack_require__(81);

	var _trim2 = _interopRequireDefault(_trim);

	var _escape = __webpack_require__(82);

	var _escape2 = _interopRequireDefault(_escape);

	var _unescape = __webpack_require__(83);

	var _unescape2 = _interopRequireDefault(_unescape);

	var _stripLow = __webpack_require__(84);

	var _stripLow2 = _interopRequireDefault(_stripLow);

	var _whitelist = __webpack_require__(86);

	var _whitelist2 = _interopRequireDefault(_whitelist);

	var _blacklist = __webpack_require__(85);

	var _blacklist2 = _interopRequireDefault(_blacklist);

	var _isWhitelisted = __webpack_require__(87);

	var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

	var _normalizeEmail = __webpack_require__(88);

	var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

	var _toString = __webpack_require__(33);

	var _toString2 = _interopRequireDefault(_toString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = '6.0.0';

	var validator = {
	  version: version,
	  toDate: _toDate2.default,
	  toFloat: _toFloat2.default, toInt: _toInt2.default,
	  toBoolean: _toBoolean2.default,
	  equals: _equals2.default, contains: _contains2.default, matches: _matches2.default,
	  isEmail: _isEmail2.default, isURL: _isURL2.default, isMACAddress: _isMACAddress2.default, isIP: _isIP2.default, isFQDN: _isFQDN2.default,
	  isBoolean: _isBoolean2.default,
	  isAlpha: _isAlpha2.default, isAlphanumeric: _isAlphanumeric2.default, isNumeric: _isNumeric2.default, isLowercase: _isLowercase2.default, isUppercase: _isUppercase2.default,
	  isAscii: _isAscii2.default, isFullWidth: _isFullWidth2.default, isHalfWidth: _isHalfWidth2.default, isVariableWidth: _isVariableWidth2.default,
	  isMultibyte: _isMultibyte2.default, isSurrogatePair: _isSurrogatePair2.default,
	  isInt: _isInt2.default, isFloat: _isFloat2.default, isDecimal: _isDecimal2.default, isHexadecimal: _isHexadecimal2.default, isDivisibleBy: _isDivisibleBy2.default,
	  isHexColor: _isHexColor2.default,
	  isMD5: _isMD2.default,
	  isJSON: _isJSON2.default,
	  isEmpty: _isEmpty2.default,
	  isLength: _isLength2.default, isByteLength: _isByteLength2.default,
	  isUUID: _isUUID2.default, isMongoId: _isMongoId2.default,
	  isDate: _isDate2.default, isAfter: _isAfter2.default, isBefore: _isBefore2.default,
	  isIn: _isIn2.default,
	  isCreditCard: _isCreditCard2.default,
	  isISIN: _isISIN2.default, isISBN: _isISBN2.default,
	  isMobilePhone: _isMobilePhone2.default,
	  isCurrency: _isCurrency2.default,
	  isISO8601: _isISO2.default,
	  isBase64: _isBase2.default, isDataURI: _isDataURI2.default,
	  ltrim: _ltrim2.default, rtrim: _rtrim2.default, trim: _trim2.default,
	  escape: _escape2.default, unescape: _unescape2.default, stripLow: _stripLow2.default,
	  whitelist: _whitelist2.default, blacklist: _blacklist2.default,
	  isWhitelisted: _isWhitelisted2.default,
	  normalizeEmail: _normalizeEmail2.default,
	  toString: _toString2.default
	};

	exports.default = validator;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toDate;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toDate(date) {
	  (0, _assertString2.default)(date);
	  date = Date.parse(date);
	  return !isNaN(date) ? new Date(date) : null;
	}
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assertString;
	function assertString(input) {
	  if (typeof input !== 'string') {
	    throw new TypeError('This library (validator.js) validates strings only');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toFloat;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toFloat(str) {
	  (0, _assertString2.default)(str);
	  return parseFloat(str);
	}
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toInt;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toInt(str, radix) {
	  (0, _assertString2.default)(str);
	  return parseInt(str, radix || 10);
	}
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toBoolean;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toBoolean(str, strict) {
	  (0, _assertString2.default)(str);
	  if (strict) {
	    return str === '1' || str === 'true';
	  }
	  return str !== '0' && str !== 'false' && str !== '';
	}
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = equals;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function equals(str, comparison) {
	  (0, _assertString2.default)(str);
	  return str === comparison;
	}
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = contains;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _toString = __webpack_require__(33);

	var _toString2 = _interopRequireDefault(_toString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function contains(str, elem) {
	  (0, _assertString2.default)(str);
	  return str.indexOf((0, _toString2.default)(elem)) >= 0;
	}
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = toString;
	function toString(input) {
	  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
	    if (typeof input.toString === 'function') {
	      input = input.toString();
	    } else {
	      input = '[object Object]';
	    }
	  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
	    input = '';
	  }
	  return String(input);
	}
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = matches;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function matches(str, pattern, modifiers) {
	  (0, _assertString2.default)(str);
	  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
	    pattern = new RegExp(pattern, modifiers);
	  }
	  return pattern.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEmail;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _merge = __webpack_require__(36);

	var _merge2 = _interopRequireDefault(_merge);

	var _isByteLength = __webpack_require__(37);

	var _isByteLength2 = _interopRequireDefault(_isByteLength);

	var _isFQDN = __webpack_require__(38);

	var _isFQDN2 = _interopRequireDefault(_isFQDN);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_email_options = {
	  allow_display_name: false,
	  allow_utf8_local_part: true,
	  require_tld: true
	};

	/* eslint-disable max-len */
	/* eslint-disable no-control-regex */
	var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
	var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
	var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
	var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
	var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
	/* eslint-enable max-len */
	/* eslint-enable no-control-regex */

	function isEmail(str, options) {
	  (0, _assertString2.default)(str);
	  options = (0, _merge2.default)(options, default_email_options);

	  if (options.allow_display_name) {
	    var display_email = str.match(displayName);
	    if (display_email) {
	      str = display_email[1];
	    }
	  }

	  var parts = str.split('@');
	  var domain = parts.pop();
	  var user = parts.join('@');

	  var lower_domain = domain.toLowerCase();
	  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
	    user = user.replace(/\./g, '').toLowerCase();
	  }

	  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 256 })) {
	    return false;
	  }

	  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
	    return false;
	  }

	  if (user[0] === '"') {
	    user = user.slice(1, user.length - 1);
	    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
	  }

	  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

	  var user_parts = user.split('.');
	  for (var i = 0; i < user_parts.length; i++) {
	    if (!pattern.test(user_parts[i])) {
	      return false;
	    }
	  }

	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = merge;
	function merge() {
	  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var defaults = arguments[1];

	  for (var key in defaults) {
	    if (typeof obj[key] === 'undefined') {
	      obj[key] = defaults[key];
	    }
	  }
	  return obj;
	}
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isByteLength;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable prefer-rest-params */
	function isByteLength(str, options) {
	  (0, _assertString2.default)(str);
	  var min = void 0;
	  var max = void 0;
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    min = options.min || 0;
	    max = options.max;
	  } else {
	    // backwards compatibility: isByteLength(str, min [, max])
	    min = arguments[1];
	    max = arguments[2];
	  }
	  var len = encodeURI(str).split(/%..|./).length - 1;
	  return len >= min && (typeof max === 'undefined' || len <= max);
	}
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFDQN;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _merge = __webpack_require__(36);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_fqdn_options = {
	  require_tld: true,
	  allow_underscores: false,
	  allow_trailing_dot: false
	};

	function isFDQN(str, options) {
	  (0, _assertString2.default)(str);
	  options = (0, _merge2.default)(options, default_fqdn_options);

	  /* Remove the optional trailing dot before checking validity */
	  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
	    str = str.substring(0, str.length - 1);
	  }
	  var parts = str.split('.');
	  if (options.require_tld) {
	    var tld = parts.pop();
	    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
	      return false;
	    }
	  }
	  for (var part, i = 0; i < parts.length; i++) {
	    part = parts[i];
	    if (options.allow_underscores) {
	      part = part.replace(/_/g, '');
	    }
	    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
	      return false;
	    }
	    if (/[\uff01-\uff5e]/.test(part)) {
	      // disallow full-width chars
	      return false;
	    }
	    if (part[0] === '-' || part[part.length - 1] === '-') {
	      return false;
	    }
	  }
	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isURL;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _isFQDN = __webpack_require__(38);

	var _isFQDN2 = _interopRequireDefault(_isFQDN);

	var _isIP = __webpack_require__(40);

	var _isIP2 = _interopRequireDefault(_isIP);

	var _merge = __webpack_require__(36);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_url_options = {
	  protocols: ['http', 'https', 'ftp'],
	  require_tld: true,
	  require_protocol: false,
	  require_host: true,
	  require_valid_protocol: true,
	  allow_underscores: false,
	  allow_trailing_dot: false,
	  allow_protocol_relative_urls: false
	};

	var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

	function isRegExp(obj) {
	  return Object.prototype.toString.call(obj) === '[object RegExp]';
	}

	function checkHost(host, matches) {
	  for (var i = 0; i < matches.length; i++) {
	    var match = matches[i];
	    if (host === match || isRegExp(match) && match.test(host)) {
	      return true;
	    }
	  }
	  return false;
	}

	function isURL(url, options) {
	  (0, _assertString2.default)(url);
	  if (!url || url.length >= 2083 || /\s/.test(url)) {
	    return false;
	  }
	  if (url.indexOf('mailto:') === 0) {
	    return false;
	  }
	  options = (0, _merge2.default)(options, default_url_options);
	  var protocol = void 0,
	      auth = void 0,
	      host = void 0,
	      hostname = void 0,
	      port = void 0,
	      port_str = void 0,
	      split = void 0,
	      ipv6 = void 0;

	  split = url.split('#');
	  url = split.shift();

	  split = url.split('?');
	  url = split.shift();

	  split = url.split('://');
	  if (split.length > 1) {
	    protocol = split.shift();
	    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
	      return false;
	    }
	  } else if (options.require_protocol) {
	    return false;
	  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
	    split[0] = url.substr(2);
	  }
	  url = split.join('://');

	  split = url.split('/');
	  url = split.shift();

	  if (url === '' && !options.require_host) {
	    return true;
	  }

	  split = url.split('@');
	  if (split.length > 1) {
	    auth = split.shift();
	    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
	      return false;
	    }
	  }
	  hostname = split.join('@');

	  port_str = ipv6 = null;
	  var ipv6_match = hostname.match(wrapped_ipv6);
	  if (ipv6_match) {
	    host = '';
	    ipv6 = ipv6_match[1];
	    port_str = ipv6_match[2] || null;
	  } else {
	    split = hostname.split(':');
	    host = split.shift();
	    if (split.length) {
	      port_str = split.join(':');
	    }
	  }

	  if (port_str !== null) {
	    port = parseInt(port_str, 10);
	    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
	      return false;
	    }
	  }

	  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
	    return false;
	  }

	  host = host || ipv6;

	  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
	    return false;
	  }
	  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
	    return false;
	  }

	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isIP;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
	var ipv6Block = /^[0-9A-F]{1,4}$/i;

	function isIP(str) {
	  var version = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	  (0, _assertString2.default)(str);
	  version = String(version);
	  if (!version) {
	    return isIP(str, 4) || isIP(str, 6);
	  } else if (version === '4') {
	    if (!ipv4Maybe.test(str)) {
	      return false;
	    }
	    var parts = str.split('.').sort(function (a, b) {
	      return a - b;
	    });
	    return parts[3] <= 255;
	  } else if (version === '6') {
	    var blocks = str.split(':');
	    var foundOmissionBlock = false; // marker to indicate ::

	    // At least some OS accept the last 32 bits of an IPv6 address
	    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
	    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
	    // and '::a.b.c.d' is deprecated, but also valid.
	    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
	    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

	    if (blocks.length > expectedNumberOfBlocks) {
	      return false;
	    }
	    // initial or final ::
	    if (str === '::') {
	      return true;
	    } else if (str.substr(0, 2) === '::') {
	      blocks.shift();
	      blocks.shift();
	      foundOmissionBlock = true;
	    } else if (str.substr(str.length - 2) === '::') {
	      blocks.pop();
	      blocks.pop();
	      foundOmissionBlock = true;
	    }

	    for (var i = 0; i < blocks.length; ++i) {
	      // test for a :: which can not be at the string start/end
	      // since those cases have been handled above
	      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
	        if (foundOmissionBlock) {
	          return false; // multiple :: in address
	        }
	        foundOmissionBlock = true;
	      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
	        // it has been checked before that the last
	        // block is a valid IPv4 address
	      } else if (!ipv6Block.test(blocks[i])) {
	        return false;
	      }
	    }
	    if (foundOmissionBlock) {
	      return blocks.length >= 1;
	    }
	    return blocks.length === expectedNumberOfBlocks;
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMACAddress;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

	function isMACAddress(str) {
	  (0, _assertString2.default)(str);
	  return macAddress.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBoolean;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBoolean(str) {
	  (0, _assertString2.default)(str);
	  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
	}
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAlpha;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _alpha = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAlpha(str) {
	  var locale = arguments.length <= 1 || arguments[1] === undefined ? 'en-US' : arguments[1];

	  (0, _assertString2.default)(str);
	  if (locale in _alpha.alpha) {
	    return _alpha.alpha[locale].test(str);
	  }
	  throw new Error('Invalid locale \'' + locale + '\'');
	}
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var alpha = exports.alpha = {
	  'en-US': /^[A-Z]+$/i,
	  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	  'de-DE': /^[A-ZÄÖÜß]+$/i,
	  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
	  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
	  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
	  'ru-RU': /^[А-ЯЁ]+$/i,
	  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
	  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
	  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
	  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
	};

	var alphanumeric = exports.alphanumeric = {
	  'en-US': /^[0-9A-Z]+$/i,
	  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
	  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
	  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	  'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
	  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
	  'ru-RU': /^[0-9А-ЯЁ]+$/i,
	  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
	  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
	  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
	  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
	};

	var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

	for (var locale, i = 0; i < englishLocales.length; i++) {
	  locale = 'en-' + englishLocales[i];
	  alpha[locale] = alpha['en-US'];
	  alphanumeric[locale] = alphanumeric['en-US'];
	}

	alpha['pt-BR'] = alpha['pt-PT'];
	alphanumeric['pt-BR'] = alphanumeric['pt-PT'];

	// Source: http://www.localeplanet.com/java/
	var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

	for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
	  _locale = 'ar-' + arabicLocales[_i];
	  alpha[_locale] = alpha.ar;
	  alphanumeric[_locale] = alphanumeric.ar;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAlphanumeric;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _alpha = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAlphanumeric(str) {
	  var locale = arguments.length <= 1 || arguments[1] === undefined ? 'en-US' : arguments[1];

	  (0, _assertString2.default)(str);
	  if (locale in _alpha.alphanumeric) {
	    return _alpha.alphanumeric[locale].test(str);
	  }
	  throw new Error('Invalid locale \'' + locale + '\'');
	}
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNumeric;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var numeric = /^[-+]?[0-9]+$/;

	function isNumeric(str) {
	  (0, _assertString2.default)(str);
	  return numeric.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLowercase;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isLowercase(str) {
	  (0, _assertString2.default)(str);
	  return str === str.toLowerCase();
	}
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isUppercase;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isUppercase(str) {
	  (0, _assertString2.default)(str);
	  return str === str.toUpperCase();
	}
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAscii;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-control-regex */
	var ascii = /^[\x00-\x7F]+$/;
	/* eslint-enable no-control-regex */

	function isAscii(str) {
	  (0, _assertString2.default)(str);
	  return ascii.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fullWidth = undefined;
	exports.default = isFullWidth;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

	function isFullWidth(str) {
	  (0, _assertString2.default)(str);
	  return fullWidth.test(str);
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.halfWidth = undefined;
	exports.default = isHalfWidth;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

	function isHalfWidth(str) {
	  (0, _assertString2.default)(str);
	  return halfWidth.test(str);
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isVariableWidth;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _isFullWidth = __webpack_require__(50);

	var _isHalfWidth = __webpack_require__(51);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isVariableWidth(str) {
	  (0, _assertString2.default)(str);
	  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMultibyte;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-control-regex */
	var multibyte = /[^\x00-\x7F]/;
	/* eslint-enable no-control-regex */

	function isMultibyte(str) {
	  (0, _assertString2.default)(str);
	  return multibyte.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isSurrogatePair;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

	function isSurrogatePair(str) {
	  (0, _assertString2.default)(str);
	  return surrogatePair.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isInt;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
	var intLeadingZeroes = /^[-+]?[0-9]+$/;

	function isInt(str, options) {
	  (0, _assertString2.default)(str);
	  options = options || {};

	  // Get the regex to use for testing, based on whether
	  // leading zeroes are allowed or not.
	  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

	  // Check min/max
	  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
	  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;

	  return regex.test(str) && minCheckPassed && maxCheckPassed;
	}
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFloat;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var float = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

	function isFloat(str, options) {
	  (0, _assertString2.default)(str);
	  options = options || {};
	  if (str === '' || str === '.') {
	    return false;
	  }
	  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
	}
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDecimal;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

	function isDecimal(str) {
	  (0, _assertString2.default)(str);
	  return str !== '' && decimal.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHexadecimal;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hexadecimal = /^[0-9A-F]+$/i;

	function isHexadecimal(str) {
	  (0, _assertString2.default)(str);
	  return hexadecimal.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDivisibleBy;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _toFloat = __webpack_require__(28);

	var _toFloat2 = _interopRequireDefault(_toFloat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isDivisibleBy(str, num) {
	  (0, _assertString2.default)(str);
	  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
	}
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isHexColor;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

	function isHexColor(str) {
	  (0, _assertString2.default)(str);
	  return hexcolor.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMD5;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var md5 = /^[a-f0-9]{32}$/;

	function isMD5(str) {
	  (0, _assertString2.default)(str);
	  return md5.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isJSON;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isJSON(str) {
	  (0, _assertString2.default)(str);
	  try {
	    var obj = JSON.parse(str);
	    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  } catch (e) {/* ignore */}
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEmpty;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isEmpty(str) {
	  (0, _assertString2.default)(str);
	  return str.length === 0;
	}
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isLength;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable prefer-rest-params */
	function isLength(str, options) {
	  (0, _assertString2.default)(str);
	  var min = void 0;
	  var max = void 0;
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    min = options.min || 0;
	    max = options.max;
	  } else {
	    // backwards compatibility: isLength(str, min [, max])
	    min = arguments[1];
	    max = arguments[2];
	  }
	  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
	  var len = str.length - surrogatePairs.length;
	  return len >= min && (typeof max === 'undefined' || len <= max);
	}
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isUUID;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uuid = {
	  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
	};

	function isUUID(str) {
	  var version = arguments.length <= 1 || arguments[1] === undefined ? 'all' : arguments[1];

	  (0, _assertString2.default)(str);
	  var pattern = uuid[version];
	  return pattern && pattern.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMongoId;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _isHexadecimal = __webpack_require__(58);

	var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isMongoId(str) {
	  (0, _assertString2.default)(str);
	  return (0, _isHexadecimal2.default)(str) && str.length === 24;
	}
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDate;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _isISO = __webpack_require__(68);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getTimezoneOffset(str) {
	  var iso8601Parts = str.match(_isISO.iso8601);
	  var timezone = void 0,
	      sign = void 0,
	      hours = void 0,
	      minutes = void 0;
	  if (!iso8601Parts) {
	    str = str.toLowerCase();
	    timezone = str.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/);
	    if (!timezone) {
	      return str.indexOf('gmt') !== -1 ? 0 : null;
	    }
	    sign = timezone[1];
	    var offset = timezone[2];
	    if (offset.length === 3) {
	      offset = '0' + offset;
	    }
	    if (offset.length <= 2) {
	      hours = 0;
	      minutes = parseInt(offset, 10);
	    } else {
	      hours = parseInt(offset.slice(0, 2), 10);
	      minutes = parseInt(offset.slice(2, 4), 10);
	    }
	  } else {
	    timezone = iso8601Parts[21];
	    if (!timezone) {
	      // if no hour/minute was provided, the date is GMT
	      return !iso8601Parts[12] ? 0 : null;
	    }
	    if (timezone === 'z' || timezone === 'Z') {
	      return 0;
	    }
	    sign = iso8601Parts[22];
	    if (timezone.indexOf(':') !== -1) {
	      hours = parseInt(iso8601Parts[23], 10);
	      minutes = parseInt(iso8601Parts[24], 10);
	    } else {
	      hours = 0;
	      minutes = parseInt(iso8601Parts[23], 10);
	    }
	  }
	  return (hours * 60 + minutes) * (sign === '-' ? 1 : -1);
	}

	function isDate(str) {
	  (0, _assertString2.default)(str);
	  var normalizedDate = new Date(Date.parse(str));
	  if (isNaN(normalizedDate)) {
	    return false;
	  }

	  // normalizedDate is in the user's timezone. Apply the input
	  // timezone offset to the date so that the year and day match
	  // the input
	  var timezoneOffset = getTimezoneOffset(str);
	  if (timezoneOffset !== null) {
	    var timezoneDifference = normalizedDate.getTimezoneOffset() - timezoneOffset;
	    normalizedDate = new Date(normalizedDate.getTime() + 60000 * timezoneDifference);
	  }

	  var day = String(normalizedDate.getDate());
	  var dayOrYear = void 0,
	      dayOrYearMatches = void 0,
	      year = void 0;
	  // check for valid double digits that could be late days
	  // check for all matches since a string like '12/23' is a valid date
	  // ignore everything with nearby colons
	  dayOrYearMatches = str.match(/(^|[^:\d])[23]\d([^T:\d]|$)/g);
	  if (!dayOrYearMatches) {
	    return true;
	  }
	  dayOrYear = dayOrYearMatches.map(function (digitString) {
	    return digitString.match(/\d+/g)[0];
	  }).join('/');

	  year = String(normalizedDate.getFullYear()).slice(-2);
	  if (dayOrYear === day || dayOrYear === year) {
	    return true;
	  } else if (dayOrYear === '' + day / year || dayOrYear === '' + year / day) {
	    return true;
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.iso8601 = undefined;

	exports.default = function (str) {
	  (0, _assertString2.default)(str);
	  return iso8601.test(str);
	};

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	// from http://goo.gl/0ejHHW
	var iso8601 = exports.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
	/* eslint-enable max-len */

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAfter;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _toDate = __webpack_require__(26);

	var _toDate2 = _interopRequireDefault(_toDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAfter(str) {
	  var date = arguments.length <= 1 || arguments[1] === undefined ? String(new Date()) : arguments[1];

	  (0, _assertString2.default)(str);
	  var comparison = (0, _toDate2.default)(date);
	  var original = (0, _toDate2.default)(str);
	  return !!(original && comparison && original > comparison);
	}
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBefore;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _toDate = __webpack_require__(26);

	var _toDate2 = _interopRequireDefault(_toDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isBefore(str) {
	  var date = arguments.length <= 1 || arguments[1] === undefined ? String(new Date()) : arguments[1];

	  (0, _assertString2.default)(str);
	  var comparison = (0, _toDate2.default)(date);
	  var original = (0, _toDate2.default)(str);
	  return !!(original && comparison && original < comparison);
	}
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isIn;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _toString = __webpack_require__(33);

	var _toString2 = _interopRequireDefault(_toString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isIn(str, options) {
	  (0, _assertString2.default)(str);
	  var i = void 0;
	  if (Object.prototype.toString.call(options) === '[object Array]') {
	    var array = [];
	    for (i in options) {
	      if ({}.hasOwnProperty.call(options, i)) {
	        array[i] = (0, _toString2.default)(options[i]);
	      }
	    }
	    return array.indexOf(str) >= 0;
	  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    return options.hasOwnProperty(str);
	  } else if (options && typeof options.indexOf === 'function') {
	    return options.indexOf(str) >= 0;
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isCreditCard;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
	/* eslint-enable max-len */

	function isCreditCard(str) {
	  (0, _assertString2.default)(str);
	  var sanitized = str.replace(/[^0-9]+/g, '');
	  if (!creditCard.test(sanitized)) {
	    return false;
	  }
	  var sum = 0;
	  var digit = void 0;
	  var tmpNum = void 0;
	  var shouldDouble = void 0;
	  for (var i = sanitized.length - 1; i >= 0; i--) {
	    digit = sanitized.substring(i, i + 1);
	    tmpNum = parseInt(digit, 10);
	    if (shouldDouble) {
	      tmpNum *= 2;
	      if (tmpNum >= 10) {
	        sum += tmpNum % 10 + 1;
	      } else {
	        sum += tmpNum;
	      }
	    } else {
	      sum += tmpNum;
	    }
	    shouldDouble = !shouldDouble;
	  }
	  return !!(sum % 10 === 0 ? sanitized : false);
	}
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISIN;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

	function isISIN(str) {
	  (0, _assertString2.default)(str);
	  if (!isin.test(str)) {
	    return false;
	  }

	  var checksumStr = str.replace(/[A-Z]/g, function (character) {
	    return parseInt(character, 36);
	  });

	  var sum = 0;
	  var digit = void 0;
	  var tmpNum = void 0;
	  var shouldDouble = true;
	  for (var i = checksumStr.length - 2; i >= 0; i--) {
	    digit = checksumStr.substring(i, i + 1);
	    tmpNum = parseInt(digit, 10);
	    if (shouldDouble) {
	      tmpNum *= 2;
	      if (tmpNum >= 10) {
	        sum += tmpNum + 1;
	      } else {
	        sum += tmpNum;
	      }
	    } else {
	      sum += tmpNum;
	    }
	    shouldDouble = !shouldDouble;
	  }

	  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
	}
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isISBN;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
	var isbn13Maybe = /^(?:[0-9]{13})$/;
	var factor = [1, 3];

	function isISBN(str) {
	  var version = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	  (0, _assertString2.default)(str);
	  version = String(version);
	  if (!version) {
	    return isISBN(str, 10) || isISBN(str, 13);
	  }
	  var sanitized = str.replace(/[\s-]+/g, '');
	  var checksum = 0;
	  var i = void 0;
	  if (version === '10') {
	    if (!isbn10Maybe.test(sanitized)) {
	      return false;
	    }
	    for (i = 0; i < 9; i++) {
	      checksum += (i + 1) * sanitized.charAt(i);
	    }
	    if (sanitized.charAt(9) === 'X') {
	      checksum += 10 * 10;
	    } else {
	      checksum += 10 * sanitized.charAt(9);
	    }
	    if (checksum % 11 === 0) {
	      return !!sanitized;
	    }
	  } else if (version === '13') {
	    if (!isbn13Maybe.test(sanitized)) {
	      return false;
	    }
	    for (i = 0; i < 12; i++) {
	      checksum += factor[i % 2] * sanitized.charAt(i);
	    }
	    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
	      return !!sanitized;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isMobilePhone;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable max-len */
	var phones = {
	  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
	  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
	  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
	  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
	  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
	  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
	  'da-DK': /^(\+?45)?(\d{8})$/,
	  'el-GR': /^(\+?30)?(69\d{8})$/,
	  'en-AU': /^(\+?61|0)4\d{8}$/,
	  'en-GB': /^(\+?44|0)7\d{9}$/,
	  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
	  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
	  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
	  'en-ZA': /^(\+?27|0)\d{9}$/,
	  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
	  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
	  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
	  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
	  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
	  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
	  'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
	  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
	  'nb-NO': /^(\+?47)?[49]\d{7}$/,
	  'nl-BE': /^(\+?32|0)4?\d{8}$/,
	  'nn-NO': /^(\+?47)?[49]\d{7}$/,
	  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
	  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
	  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
	  'ru-RU': /^(\+?7|8)?9\d{9}$/,
	  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
	  'tr-TR': /^(\+?90|0)?5\d{9}$/,
	  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
	  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
	  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
	};
	/* eslint-enable max-len */

	// aliases
	phones['en-CA'] = phones['en-US'];
	phones['fr-BE'] = phones['nl-BE'];

	function isMobilePhone(str, locale) {
	  (0, _assertString2.default)(str);
	  if (locale in phones) {
	    return phones[locale].test(str);
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isCurrency;

	var _merge = __webpack_require__(36);

	var _merge2 = _interopRequireDefault(_merge);

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function currencyRegex(options) {
	  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
	      negative = '-?',
	      whole_dollar_amount_without_sep = '[1-9]\\d*',
	      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
	      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
	      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
	      decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
	  var pattern = whole_dollar_amount + decimal_amount;

	  // default is negative sign before symbol, but there are two other options (besides parens)
	  if (options.allow_negatives && !options.parens_for_negatives) {
	    if (options.negative_sign_after_digits) {
	      pattern += negative;
	    } else if (options.negative_sign_before_digits) {
	      pattern = negative + pattern;
	    }
	  }

	  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
	  if (options.allow_negative_sign_placeholder) {
	    pattern = '( (?!\\-))?' + pattern;
	  } else if (options.allow_space_after_symbol) {
	    pattern = ' ?' + pattern;
	  } else if (options.allow_space_after_digits) {
	    pattern += '( (?!$))?';
	  }

	  if (options.symbol_after_digits) {
	    pattern += symbol;
	  } else {
	    pattern = symbol + pattern;
	  }

	  if (options.allow_negatives) {
	    if (options.parens_for_negatives) {
	      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
	    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
	      pattern = negative + pattern;
	    }
	  }

	  /* eslint-disable prefer-template */
	  return new RegExp('^' +
	  // ensure there's a dollar and/or decimal amount, and that
	  // it doesn't start with a space or a negative sign followed by a space
	  '(?!-? )(?=.*\\d)' + pattern + '$');
	  /* eslint-enable prefer-template */
	}

	var default_currency_options = {
	  symbol: '$',
	  require_symbol: false,
	  allow_space_after_symbol: false,
	  symbol_after_digits: false,
	  allow_negatives: true,
	  parens_for_negatives: false,
	  negative_sign_before_digits: false,
	  negative_sign_after_digits: false,
	  allow_negative_sign_placeholder: false,
	  thousands_separator: ',',
	  decimal_separator: '.',
	  allow_space_after_digits: false
	};

	function isCurrency(str, options) {
	  (0, _assertString2.default)(str);
	  options = (0, _merge2.default)(options, default_currency_options);
	  return currencyRegex(options).test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isBase64;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var notBase64 = /[^A-Z0-9+\/=]/i;

	function isBase64(str) {
	  (0, _assertString2.default)(str);
	  var len = str.length;
	  if (!len || len % 4 !== 0 || notBase64.test(str)) {
	    return false;
	  }
	  var firstPaddingChar = str.indexOf('=');
	  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
	}
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDataURI;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

	function isDataURI(str) {
	  (0, _assertString2.default)(str);
	  return dataURI.test(str);
	}
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ltrim;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ltrim(str, chars) {
	  (0, _assertString2.default)(str);
	  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
	  return str.replace(pattern, '');
	}
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = rtrim;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function rtrim(str, chars) {
	  (0, _assertString2.default)(str);
	  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

	  var idx = str.length - 1;
	  while (idx >= 0 && pattern.test(str[idx])) {
	    idx--;
	  }

	  return idx < str.length ? str.substr(0, idx + 1) : str;
	}
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = trim;

	var _rtrim = __webpack_require__(80);

	var _rtrim2 = _interopRequireDefault(_rtrim);

	var _ltrim = __webpack_require__(79);

	var _ltrim2 = _interopRequireDefault(_ltrim);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function trim(str, chars) {
	  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
	}
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	exports.default = escape;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escape(str) {
	      (0, _assertString2.default)(str);
	      return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
	}
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});
	exports.default = unescape;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function unescape(str) {
	      (0, _assertString2.default)(str);
	      return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#96;/g, '`');
	}
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stripLow;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	var _blacklist = __webpack_require__(85);

	var _blacklist2 = _interopRequireDefault(_blacklist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function stripLow(str, keep_new_lines) {
	  (0, _assertString2.default)(str);
	  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
	  return (0, _blacklist2.default)(str, chars);
	}
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = blacklist;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function blacklist(str, chars) {
	  (0, _assertString2.default)(str);
	  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
	}
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = whitelist;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function whitelist(str, chars) {
	  (0, _assertString2.default)(str);
	  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
	}
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isWhitelisted;

	var _assertString = __webpack_require__(27);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isWhitelisted(str, chars) {
	  (0, _assertString2.default)(str);
	  for (var i = str.length - 1; i >= 0; i--) {
	    if (chars.indexOf(str[i]) === -1) {
	      return false;
	    }
	  }
	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = normalizeEmail;

	var _isEmail = __webpack_require__(35);

	var _isEmail2 = _interopRequireDefault(_isEmail);

	var _merge = __webpack_require__(36);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var default_normalize_email_options = {
	  // The following options apply to all email addresses
	  // Lowercases the local part of the email address.
	  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
	  // The domain is always lowercased, as per RFC 1035
	  all_lowercase: true,

	  // The following conversions are specific to GMail
	  // Lowercases the local part of the GMail address (known to be case-insensitive)
	  gmail_lowercase: true,
	  // Removes dots from the local part of the email address, as that's ignored by GMail
	  gmail_remove_dots: true,
	  // Removes the subaddress (e.g. "+foo") from the email address
	  gmail_remove_subaddress: true,
	  // Conversts the googlemail.com domain to gmail.com
	  gmail_convert_googlemaildotcom: true,

	  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
	  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
	  outlookdotcom_lowercase: true,
	  // Removes the subaddress (e.g. "+foo") from the email address
	  outlookdotcom_remove_subaddress: true,

	  // The following conversions are specific to Yahoo
	  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
	  yahoo_lowercase: true,
	  // Removes the subaddress (e.g. "-foo") from the email address
	  yahoo_remove_subaddress: true,

	  // The following conversions are specific to iCloud
	  // Lowercases the local part of the iCloud address (known to be case-insensitive)
	  icloud_lowercase: true,
	  // Removes the subaddress (e.g. "+foo") from the email address
	  icloud_remove_subaddress: true
	};

	// List of domains used by iCloud
	var icloud_domains = ['icloud.com', 'me.com'];

	// List of domains used by Outlook.com and its predecessors
	// This list is likely incomplete.
	// Partial reference:
	// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
	var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

	// List of domains used by Yahoo Mail
	// This list is likely incomplete
	var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

	function normalizeEmail(email, options) {
	  options = (0, _merge2.default)(options, default_normalize_email_options);

	  if (!(0, _isEmail2.default)(email)) {
	    return false;
	  }
	  var parts = email.split('@', 2);

	  // The domain is always lowercased, as it's case-insensitive per RFC 1035
	  parts[1] = parts[1].toLowerCase();

	  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
	    // Address is GMail
	    if (options.gmail_remove_subaddress) {
	      parts[0] = parts[0].split('+')[0];
	    }
	    if (options.gmail_remove_dots) {
	      parts[0] = parts[0].replace(/\./g, '');
	    }
	    if (!parts[0].length) {
	      return false;
	    }
	    if (options.all_lowercase || options.gmail_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
	  } else if (~icloud_domains.indexOf(parts[1])) {
	    // Address is iCloud
	    if (options.icloud_remove_subaddress) {
	      parts[0] = parts[0].split('+')[0];
	    }
	    if (!parts[0].length) {
	      return false;
	    }
	    if (options.all_lowercase || options.icloud_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
	    // Address is Outlook.com
	    if (options.outlookdotcom_remove_subaddress) {
	      parts[0] = parts[0].split('+')[0];
	    }
	    if (!parts[0].length) {
	      return false;
	    }
	    if (options.all_lowercase || options.outlookdotcom_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  } else if (~yahoo_domains.indexOf(parts[1])) {
	    // Address is Yahoo
	    if (options.yahoo_remove_subaddress) {
	      var components = parts[0].split('-');
	      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
	    }
	    if (!parts[0].length) {
	      return false;
	    }
	    if (options.all_lowercase || options.yahoo_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  } else {
	    // Any other address
	    if (options.all_lowercase) {
	      parts[0] = parts[0].toLowerCase();
	    }
	  }
	  return parts.join('@');
	}
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);
	var bind = __webpack_require__(92);
	var Axios = __webpack_require__(93);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance();

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return createInstance(defaultConfig);
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(111);
	axios.CancelToken = __webpack_require__(112);
	axios.isCancel = __webpack_require__(108);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(113);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(92);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(94);
	var utils = __webpack_require__(91);
	var InterceptorManager = __webpack_require__(105);
	var dispatchRequest = __webpack_require__(106);
	var isAbsoluteURL = __webpack_require__(109);
	var combineURLs = __webpack_require__(110);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 */
	function Axios(defaultConfig) {
	  this.defaults = utils.merge(defaults, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(91);
	var normalizeHeaderName = __webpack_require__(95);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(96);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(96);
	  }
	  return adapter;
	}

	module.exports = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(91);
	var settle = __webpack_require__(97);
	var buildURL = __webpack_require__(100);
	var parseHeaders = __webpack_require__(101);
	var isURLSameOrigin = __webpack_require__(102);
	var createError = __webpack_require__(98);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(103);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(104);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(98);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(99);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);
	var transformData = __webpack_require__(107);
	var isCancel = __webpack_require__(108);
	var defaults = __webpack_require__(94);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(91);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(111);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function () {
	  _vue2.default.component('subscribe-form', {
	    template: "#subscribe-form-template",
	    props: ['country'],
	    data: function data() {
	      return initialState;
	    },


	    methods: {
	      validate: function validate() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { field: '' };
	        var field = opts.field;

	        var data = this.$data[field];
	        var validation = this.$data.validation;

	        switch (field) {
	          case 'name':
	            validation = _extends({}, validation, { name: _validator2.default.isEmpty(data) });
	            break;
	          case 'email':
	            validation = _extends({}, validation, { email: !_validator2.default.isEmail(data) });
	            break;
	        };

	        this.$set('validation', validation);
	        return !Object.keys(validation).filter(function (key) {
	          return validation[key] == true;
	        }).length > 0;
	      },
	      onSubmit: function onSubmit(e) {
	        if (e) e.preventDefault();
	      }
	    }
	  });
	};

	var _vue = __webpack_require__(14);

	var _vue2 = _interopRequireDefault(_vue);

	var _validator = __webpack_require__(25);

	var _validator2 = _interopRequireDefault(_validator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  name: '',
	  email: '',
	  language: '',
	  country: '',
	  validation: {
	    name: false,
	    email: false
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = homeHeader;

	var _change_slide = __webpack_require__(116);

	var _change_slide2 = _interopRequireDefault(_change_slide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function homeHeader() {
	  var count = 1;
	  var $homeHeader = $('.home_header');
	  var interval = $homeHeader.data('interval') ? $('.home_header').data('interval') : 4000;
	  var startAutoplay = $homeHeader.data('autoplay') ? true : false;
	  var slide = (0, _change_slide2.default)();
	  var autoplay = void 0;
	  if (startAutoplay) {

	    autoplay = setInterval(function () {
	      slide.changeIndex();
	      slide.changeBg();
	      slide.transform();
	    }, interval);
	  }

	  $('.home_header__paginate a').on('click', function (e) {
	    e.preventDefault();
	    if (autoplay) {
	      clearInterval(autoplay);
	    }

	    var ind = $(this).data('index');
	    var slide = (0, _change_slide2.default)(ind);
	    slide.changeBg();
	    slide.transform();
	  });
	}

/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = changeSlide;
	function changeSlide() {
	  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	  var counter = count;
	  var slides = document.querySelectorAll('.home_header__contents li');

	  function changeIndex() {
	    if (counter == slides.length - 1) {
	      counter = 0;
	    } else {
	      counter++;
	    }
	  }

	  function changeBg() {
	    var bg = document.querySelector('.home_header__background:nth-child(' + (counter + 1) + ')');
	    if (bg) {
	      $('.home_header__background').removeClass('home_header__background--active');
	      bg.classList.add('home_header__background--active');
	    };
	  }

	  function transform() {
	    var leftAuto = counter * 100;

	    $('a[data-index]').removeClass('active');
	    document.querySelector('a[data-index=\'' + counter + '\']').classList.add('active');
	    document.querySelector('.home_header__contents ul').style.left = '-' + leftAuto + '%';
	  }

	  return {
	    transform: transform,
	    changeIndex: changeIndex,
	    changeBg: changeBg
	  };
	}

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = footerNav;
	function footerNav() {
	  // let each = fn => arr => Array.prototype.forEach.call(arr, fn);
	  // let langs = document.querySelectorAll('#footer .lang-item');
	  // let li = document.createElement('li');
	  // let a = document.createElement('a');
	  // let ul = document.createElement('ul');

	  // ul.setAttribute('class', 'sub-menu');
	  // a.appendChild(document.createTextNode('Languages'));
	  // li.appendChild(a);
	  // li.appendChild(ul);
	  // li.setAttribute('class', 'menu-item');

	  // let appendTo = each((el) => {
	  //   ul.appendChild(el);
	  // });

	  // appendTo(langs);
	  // document.querySelector('#footer .menu').appendChild(li);

	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = countryLang;
	var countries = __webpack_require__(119);

	function countryLang() {

	  var cons = countries.map(function (con) {
	    var ob = {};
	    ob['name'] = con['name'];
	    ob['iso_code'] = con['alpha2Code'];
	    ob['languages'] = con['languages'].map(function (lang) {
	      return lang['iso639_1'];
	    });
	    return ob;
	  });

	  console.log(JSON.stringify(cons));
	}

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "Afghanistan",
			"nativeName": "افغانستان",
			"topLevelDomain": [
				".af"
			],
			"capital": "Kabul",
			"altSpellings": [
				"AF",
				"Afġānistān"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Afghanistan",
				"es": "Afganistán",
				"fr": "Afghanistan",
				"it": "Afghanistan",
				"ja": "アフガニスタン",
				"nl": "Afghanistan",
				"hr": "Afganistan"
			},
			"population": 27657145,
			"latlng": [
				33,
				65
			],
			"demonym": "Afghan",
			"borders": [
				"IRN",
				"PAK",
				"TKM",
				"UZB",
				"TJK",
				"CHN"
			],
			"area": 652230,
			"gini": 27.8,
			"timezones": [
				"UTC+04:30"
			],
			"currencies": [
				{
					"symbol": "؋",
					"code": "AFN",
					"name": "Afghan afghani"
				}
			],
			"languages": [
				{
					"iso639_1": "ps",
					"iso639_2": "pus",
					"name": "Pashto",
					"nativeName": "پښتو"
				},
				{
					"iso639_1": "uz",
					"iso639_2": "uzb",
					"name": "Uzbek",
					"nativeName": "Oʻzbek"
				},
				{
					"iso639_1": "tk",
					"iso639_2": "tuk",
					"name": "Turkmen",
					"nativeName": "Türkmen"
				}
			],
			"alpha2Code": "AF",
			"alpha3Code": "AFG",
			"callingCodes": [
				"93"
			],
			"numericCode": "004"
		},
		{
			"name": "Åland Islands",
			"nativeName": "Åland",
			"topLevelDomain": [
				".ax"
			],
			"capital": "Mariehamn",
			"altSpellings": [
				"AX",
				"Aaland",
				"Aland",
				"Ahvenanmaa"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Åland",
				"es": "Alandia",
				"fr": "Åland",
				"it": "Isole Aland",
				"ja": "オーランド諸島",
				"nl": "Ålandeilanden",
				"hr": "Ålandski otoci"
			},
			"population": 28875,
			"latlng": [
				60.116667,
				19.9
			],
			"demonym": "Ålandish",
			"borders": [],
			"area": 1580,
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "sv",
					"iso639_2": "swe",
					"name": "Swedish",
					"nativeName": "svenska"
				}
			],
			"alpha2Code": "AX",
			"alpha3Code": "ALA",
			"callingCodes": [
				"358"
			],
			"numericCode": "248"
		},
		{
			"name": "Albania",
			"nativeName": "Shqipëria",
			"topLevelDomain": [
				".al"
			],
			"capital": "Tirana",
			"altSpellings": [
				"AL",
				"Shqipëri",
				"Shqipëria",
				"Shqipnia"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Albanien",
				"es": "Albania",
				"fr": "Albanie",
				"it": "Albania",
				"ja": "アルバニア",
				"nl": "Albanië",
				"hr": "Albanija"
			},
			"population": 2886026,
			"latlng": [
				41,
				20
			],
			"demonym": "Albanian",
			"borders": [
				"MNE",
				"GRC",
				"MKD",
				"KOS"
			],
			"area": 28748,
			"gini": 34.5,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "L",
					"code": "ALL",
					"name": "Albanian lek"
				}
			],
			"languages": [
				{
					"iso639_1": "sq",
					"iso639_2": "sqi",
					"name": "Albanian",
					"nativeName": "Shqip"
				}
			],
			"alpha2Code": "AL",
			"alpha3Code": "ALB",
			"callingCodes": [
				"355"
			],
			"numericCode": "008"
		},
		{
			"name": "Algeria",
			"nativeName": "الجزائر",
			"topLevelDomain": [
				".dz"
			],
			"capital": "Algiers",
			"altSpellings": [
				"DZ",
				"Dzayer",
				"Algérie"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Algerien",
				"es": "Argelia",
				"fr": "Algérie",
				"it": "Algeria",
				"ja": "アルジェリア",
				"nl": "Algerije",
				"hr": "Alžir"
			},
			"population": 40400000,
			"latlng": [
				28,
				3
			],
			"demonym": "Algerian",
			"borders": [
				"TUN",
				"LBY",
				"NER",
				"ESH",
				"MRT",
				"MLI",
				"MAR"
			],
			"area": 2381741,
			"gini": 35.3,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "د.ج",
					"code": "DZD",
					"name": "Algerian dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "DZ",
			"alpha3Code": "DZA",
			"callingCodes": [
				"213"
			],
			"numericCode": "012"
		},
		{
			"name": "American Samoa",
			"nativeName": "American Samoa",
			"topLevelDomain": [
				".as"
			],
			"capital": "Pago Pago",
			"altSpellings": [
				"AS",
				"Amerika Sāmoa",
				"Amelika Sāmoa",
				"Sāmoa Amelika"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Amerikanisch-Samoa",
				"es": "Samoa Americana",
				"fr": "Samoa américaines",
				"it": "Samoa Americane",
				"ja": "アメリカ領サモア",
				"nl": "Amerikaans Samoa",
				"hr": "Američka Samoa"
			},
			"population": 57100,
			"latlng": [
				-14.33333333,
				-170
			],
			"demonym": "American Samoan",
			"borders": [],
			"area": 199,
			"currencies": [
				{
					"code": "USD",
					"name": "United State Dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "sm",
					"iso639_2": "smo",
					"name": "Samoan",
					"nativeName": "gagana fa'a Samoa"
				}
			],
			"alpha2Code": "AS",
			"alpha3Code": "ASM",
			"callingCodes": [
				"1684"
			],
			"numericCode": "016"
		},
		{
			"name": "Andorra",
			"nativeName": "Andorra",
			"topLevelDomain": [
				".ad"
			],
			"capital": "Andorra la Vella",
			"altSpellings": [
				"AD",
				"Principality of Andorra",
				"Principat d'Andorra"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Andorra",
				"es": "Andorra",
				"fr": "Andorre",
				"it": "Andorra",
				"ja": "アンドラ",
				"nl": "Andorra",
				"hr": "Andora"
			},
			"population": 78014,
			"latlng": [
				42.5,
				1.5
			],
			"demonym": "Andorran",
			"borders": [
				"FRA",
				"ESP"
			],
			"area": 468,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "ca",
					"iso639_2": "cat",
					"name": "Catalan",
					"nativeName": "català"
				}
			],
			"alpha2Code": "AD",
			"alpha3Code": "AND",
			"callingCodes": [
				"376"
			],
			"numericCode": "020"
		},
		{
			"name": "Angola",
			"nativeName": "Angola",
			"topLevelDomain": [
				".ao"
			],
			"capital": "Luanda",
			"altSpellings": [
				"AO",
				"República de Angola",
				"ʁɛpublika de an'ɡɔla"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Angola",
				"es": "Angola",
				"fr": "Angola",
				"it": "Angola",
				"ja": "アンゴラ",
				"nl": "Angola",
				"hr": "Angola"
			},
			"population": 25868000,
			"latlng": [
				-12.5,
				18.5
			],
			"demonym": "Angolan",
			"borders": [
				"COG",
				"COD",
				"ZMB",
				"NAM"
			],
			"area": 1246700,
			"gini": 58.6,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Kz",
					"code": "AOA",
					"name": "Angolan kwanza"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "AO",
			"alpha3Code": "AGO",
			"callingCodes": [
				"244"
			],
			"numericCode": "024"
		},
		{
			"name": "Anguilla",
			"nativeName": "Anguilla",
			"topLevelDomain": [
				".ai"
			],
			"capital": "The Valley",
			"altSpellings": [
				"AI"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Anguilla",
				"es": "Anguilla",
				"fr": "Anguilla",
				"it": "Anguilla",
				"ja": "アンギラ",
				"nl": "Anguilla",
				"hr": "Angvila"
			},
			"population": 13452,
			"latlng": [
				18.25,
				-63.16666666
			],
			"demonym": "Anguillian",
			"borders": [],
			"area": 91,
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "AI",
			"alpha3Code": "AIA",
			"callingCodes": [
				"1264"
			],
			"numericCode": "660"
		},
		{
			"name": "Antarctica",
			"nativeName": "Antarctica",
			"topLevelDomain": [
				".aq"
			],
			"alpha2Code": "AQ",
			"alpha3Code": "ATA",
			"numericCode": "010",
			"currencies": [
				{
					"symbol": "$",
					"code": "AUD",
					"name": "Australian dollar"
				},
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				}
			],
			"callingCodes": [],
			"capital": "",
			"altSpellings": [],
			"relevance": "0",
			"region": "Polar",
			"subregion": "",
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"translations": {
				"de": "Antarktika",
				"es": "Antártida",
				"fr": "Antarctique",
				"it": "Antartide",
				"ja": "南極大陸",
				"nl": "Antarctica",
				"hr": "Antarktika"
			},
			"population": 1000,
			"latlng": [
				-74.65,
				4.48
			],
			"demonym": "",
			"borders": [],
			"area": 14000000,
			"timezones": [
				"UTC-03:00",
				"UTC+03:00",
				"UTC+05:00",
				"UTC+06:00",
				"UTC+07:00",
				"UTC+08:00",
				"UTC+10:00",
				"UTC+12:00"
			]
		},
		{
			"name": "Antigua and Barbuda",
			"nativeName": "Antigua and Barbuda",
			"topLevelDomain": [
				".ag"
			],
			"capital": "Saint John's",
			"altSpellings": [
				"AG"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Antigua und Barbuda",
				"es": "Antigua y Barbuda",
				"fr": "Antigua-et-Barbuda",
				"it": "Antigua e Barbuda",
				"ja": "アンティグア・バーブーダ",
				"nl": "Antigua en Barbuda",
				"hr": "Antigva i Barbuda"
			},
			"population": 86295,
			"latlng": [
				17.05,
				-61.8
			],
			"demonym": "Antiguan, Barbudan",
			"borders": [],
			"area": 442,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "AG",
			"alpha3Code": "ATG",
			"callingCodes": [
				"1268"
			],
			"numericCode": "028"
		},
		{
			"name": "Argentina",
			"nativeName": "Argentina",
			"topLevelDomain": [
				".ar"
			],
			"capital": "Buenos Aires",
			"altSpellings": [
				"AR",
				"Argentine Republic",
				"República Argentina"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Argentinien",
				"es": "Argentina",
				"fr": "Argentine",
				"it": "Argentina",
				"ja": "アルゼンチン",
				"nl": "Argentinië",
				"hr": "Argentina"
			},
			"population": 43590400,
			"latlng": [
				-34,
				-64
			],
			"demonym": "Argentinean",
			"borders": [
				"BOL",
				"BRA",
				"CHL",
				"PRY",
				"URY"
			],
			"area": 2780400,
			"gini": 44.5,
			"timezones": [
				"UTC-03:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "ARS",
					"name": "Argentine peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				},
				{
					"iso639_1": "gn",
					"iso639_2": "grn",
					"name": "Guaraní",
					"nativeName": "Avañe'ẽ"
				}
			],
			"alpha2Code": "AR",
			"alpha3Code": "ARG",
			"callingCodes": [
				"54"
			],
			"numericCode": "032"
		},
		{
			"name": "Armenia",
			"nativeName": "Հայաստան",
			"topLevelDomain": [
				".am"
			],
			"capital": "Yerevan",
			"altSpellings": [
				"AM",
				"Hayastan",
				"Republic of Armenia",
				"Հայաստանի Հանրապետություն"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Armenien",
				"es": "Armenia",
				"fr": "Arménie",
				"it": "Armenia",
				"ja": "アルメニア",
				"nl": "Armenië",
				"hr": "Armenija"
			},
			"population": 2994400,
			"latlng": [
				40,
				45
			],
			"demonym": "Armenian",
			"borders": [
				"AZE",
				"GEO",
				"IRN",
				"TUR"
			],
			"area": 29743,
			"gini": 30.9,
			"timezones": [
				"UTC+04:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "AMD",
					"name": "Armenian dram"
				}
			],
			"languages": [
				{
					"iso639_1": "hy",
					"iso639_2": "hye",
					"name": "Armenian",
					"nativeName": "Հայերեն"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "AM",
			"alpha3Code": "ARM",
			"callingCodes": [
				"374"
			],
			"numericCode": "051"
		},
		{
			"name": "Aruba",
			"nativeName": "Aruba",
			"topLevelDomain": [
				".aw"
			],
			"capital": "Oranjestad",
			"altSpellings": [
				"AW"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Aruba",
				"es": "Aruba",
				"fr": "Aruba",
				"it": "Aruba",
				"ja": "アルバ",
				"nl": "Aruba",
				"hr": "Aruba"
			},
			"population": 107394,
			"latlng": [
				12.5,
				-69.96666666
			],
			"demonym": "Aruban",
			"borders": [],
			"area": 180,
			"currencies": [
				{
					"symbol": "ƒ",
					"code": "AWG",
					"name": "Aruban florin"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				},
				{
					"iso639_1": "pa",
					"iso639_2": "pan",
					"name": "Eastern Punjabi",
					"nativeName": "ਪੰਜਾਬੀ"
				}
			],
			"alpha2Code": "AW",
			"alpha3Code": "ABW",
			"callingCodes": [
				"297"
			],
			"numericCode": "533"
		},
		{
			"name": "Australia",
			"nativeName": "Australia",
			"topLevelDomain": [
				".au"
			],
			"capital": "Canberra",
			"altSpellings": [
				"AU"
			],
			"region": "Oceania",
			"subregion": "Australia and New Zealand",
			"translations": {
				"de": "Australien",
				"es": "Australia",
				"fr": "Australie",
				"it": "Australia",
				"ja": "オーストラリア",
				"nl": "Australië",
				"hr": "Australija"
			},
			"population": 24117360,
			"latlng": [
				-27,
				133
			],
			"demonym": "Australian",
			"borders": [],
			"area": 7692024,
			"gini": 30.5,
			"timezones": [
				"UTC+05:00",
				"UTC+06:30",
				"UTC+07:00",
				"UTC+08:00",
				"UTC+09:30",
				"UTC+10:00",
				"UTC+10:30",
				"UTC+11:30"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "AUD",
					"name": "Australian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "AU",
			"alpha3Code": "AUS",
			"callingCodes": [
				"61"
			],
			"numericCode": "036"
		},
		{
			"name": "Austria",
			"nativeName": "Österreich",
			"topLevelDomain": [
				".at"
			],
			"capital": "Vienna",
			"altSpellings": [
				"AT",
				"Österreich",
				"Osterreich",
				"Oesterreich"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Österreich",
				"es": "Austria",
				"fr": "Autriche",
				"it": "Austria",
				"ja": "オーストリア",
				"nl": "Oostenrijk",
				"hr": "Austrija"
			},
			"population": 8725931,
			"latlng": [
				47.33333333,
				13.33333333
			],
			"demonym": "Austrian",
			"borders": [
				"CZE",
				"DEU",
				"HUN",
				"ITA",
				"LIE",
				"SVK",
				"SVN",
				"CHE"
			],
			"area": 83871,
			"gini": 26,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				}
			],
			"alpha2Code": "AT",
			"alpha3Code": "AUT",
			"callingCodes": [
				"43"
			],
			"numericCode": "040"
		},
		{
			"name": "Azerbaijan",
			"nativeName": "Azərbaycan",
			"topLevelDomain": [
				".az"
			],
			"capital": "Baku",
			"altSpellings": [
				"AZ",
				"Republic of Azerbaijan",
				"Azərbaycan Respublikası"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Aserbaidschan",
				"es": "Azerbaiyán",
				"fr": "Azerbaïdjan",
				"it": "Azerbaijan",
				"ja": "アゼルバイジャン",
				"nl": "Azerbeidzjan",
				"hr": "Azerbajdžan"
			},
			"population": 9730500,
			"latlng": [
				40.5,
				47.5
			],
			"demonym": "Azerbaijani",
			"borders": [
				"ARM",
				"GEO",
				"IRN",
				"RUS",
				"TUR"
			],
			"area": 86600,
			"gini": 33.7,
			"timezones": [
				"UTC+04:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "AZN",
					"name": "Azerbaijani manat"
				}
			],
			"languages": [
				{
					"iso639_1": "az",
					"iso639_2": "aze",
					"name": "Azerbaijani",
					"nativeName": "azərbaycan dili"
				},
				{
					"iso639_1": "hy",
					"iso639_2": "hye",
					"name": "Armenian",
					"nativeName": "Հայերեն"
				}
			],
			"alpha2Code": "AZ",
			"alpha3Code": "AZE",
			"callingCodes": [
				"994"
			],
			"numericCode": "031"
		},
		{
			"name": "Bahamas",
			"nativeName": "Bahamas",
			"topLevelDomain": [
				".bs"
			],
			"capital": "Nassau",
			"altSpellings": [
				"BS",
				"Commonwealth of the Bahamas"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Bahamas",
				"es": "Bahamas",
				"fr": "Bahamas",
				"it": "Bahamas",
				"ja": "バハマ",
				"nl": "Bahama’s",
				"hr": "Bahami"
			},
			"population": 378040,
			"latlng": [
				24.25,
				-76
			],
			"demonym": "Bahamian",
			"borders": [],
			"area": 13943,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "BSD",
					"name": "Bahamian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "BS",
			"alpha3Code": "BHS",
			"callingCodes": [
				"1242"
			],
			"numericCode": "044"
		},
		{
			"name": "Bahrain",
			"nativeName": "‏البحرين",
			"topLevelDomain": [
				".bh"
			],
			"capital": "Manama",
			"altSpellings": [
				"BH",
				"Kingdom of Bahrain",
				"Mamlakat al-Baḥrayn"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Bahrain",
				"es": "Bahrein",
				"fr": "Bahreïn",
				"it": "Bahrein",
				"ja": "バーレーン",
				"nl": "Bahrein",
				"hr": "Bahrein"
			},
			"population": 1404900,
			"latlng": [
				26,
				50.55
			],
			"demonym": "Bahraini",
			"borders": [],
			"area": 765,
			"gini": null,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": ".د.ب",
					"code": "BHD",
					"name": "Bahraini dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "BH",
			"alpha3Code": "BHR",
			"callingCodes": [
				"973"
			],
			"numericCode": "048"
		},
		{
			"name": "Bangladesh",
			"nativeName": "Bangladesh",
			"topLevelDomain": [
				".bd"
			],
			"capital": "Dhaka",
			"altSpellings": [
				"BD",
				"People's Republic of Bangladesh",
				"Gônôprôjatôntri Bangladesh"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Bangladesch",
				"es": "Bangladesh",
				"fr": "Bangladesh",
				"it": "Bangladesh",
				"ja": "バングラデシュ",
				"nl": "Bangladesh",
				"hr": "Bangladeš"
			},
			"population": 161006790,
			"latlng": [
				24,
				90
			],
			"demonym": "Bangladeshi",
			"borders": [
				"MMR",
				"IND"
			],
			"area": 147570,
			"gini": 32.1,
			"timezones": [
				"UTC+06:00"
			],
			"currencies": [
				{
					"symbol": "৳",
					"code": "BDT",
					"name": "Bangladeshi taka"
				}
			],
			"languages": [
				{
					"iso639_1": "bn",
					"iso639_2": "ben",
					"name": "Bengali",
					"nativeName": "বাংলা"
				}
			],
			"alpha2Code": "BD",
			"alpha3Code": "BGD",
			"callingCodes": [
				"880"
			],
			"numericCode": "050"
		},
		{
			"name": "Barbados",
			"nativeName": "Barbados",
			"topLevelDomain": [
				".bb"
			],
			"capital": "Bridgetown",
			"altSpellings": [
				"BB"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Barbados",
				"es": "Barbados",
				"fr": "Barbade",
				"it": "Barbados",
				"ja": "バルバドス",
				"nl": "Barbados",
				"hr": "Barbados"
			},
			"population": 285000,
			"latlng": [
				13.16666666,
				-59.53333333
			],
			"demonym": "Barbadian",
			"borders": [],
			"area": 430,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "BBD",
					"name": "Barbadian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "BB",
			"alpha3Code": "BRB",
			"callingCodes": [
				"1246"
			],
			"numericCode": "052"
		},
		{
			"name": "Belarus",
			"nativeName": "Белару́сь",
			"topLevelDomain": [
				".by"
			],
			"capital": "Minsk",
			"altSpellings": [
				"BY",
				"Bielaruś",
				"Republic of Belarus",
				"Белоруссия",
				"Республика Беларусь",
				"Belorussiya",
				"Respublika Belarus’"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Weißrussland",
				"es": "Bielorrusia",
				"fr": "Biélorussie",
				"it": "Bielorussia",
				"ja": "ベラルーシ",
				"nl": "Wit-Rusland",
				"hr": "Bjelorusija"
			},
			"population": 9498700,
			"latlng": [
				53,
				28
			],
			"demonym": "Belarusian",
			"borders": [
				"LVA",
				"LTU",
				"POL",
				"RUS",
				"UKR"
			],
			"area": 207600,
			"gini": 26.5,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Br",
					"code": "BYR",
					"name": "New Belarusian ruble"
				},
				{
					"symbol": "Br",
					"code": "BYN",
					"name": "Old Belarusian ruble"
				}
			],
			"languages": [
				{
					"iso639_1": "be",
					"iso639_2": "bel",
					"name": "Belarusian",
					"nativeName": "беларуская мова"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "BY",
			"alpha3Code": "BLR",
			"callingCodes": [
				"375"
			],
			"numericCode": "112"
		},
		{
			"name": "Belgium",
			"nativeName": "België",
			"topLevelDomain": [
				".be"
			],
			"capital": "Brussels",
			"altSpellings": [
				"BE",
				"België",
				"Belgie",
				"Belgien",
				"Belgique",
				"Kingdom of Belgium",
				"Koninkrijk België",
				"Royaume de Belgique",
				"Königreich Belgien"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Belgien",
				"es": "Bélgica",
				"fr": "Belgique",
				"it": "Belgio",
				"ja": "ベルギー",
				"nl": "België",
				"hr": "Belgija"
			},
			"population": 11319511,
			"latlng": [
				50.83333333,
				4
			],
			"demonym": "Belgian",
			"borders": [
				"FRA",
				"DEU",
				"LUX",
				"NLD"
			],
			"area": 30528,
			"gini": 33,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				}
			],
			"alpha2Code": "BE",
			"alpha3Code": "BEL",
			"callingCodes": [
				"32"
			],
			"numericCode": "056"
		},
		{
			"name": "Belize",
			"nativeName": "Belize",
			"topLevelDomain": [
				".bz"
			],
			"capital": "Belmopan",
			"altSpellings": [
				"BZ"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Belize",
				"es": "Belice",
				"fr": "Belize",
				"it": "Belize",
				"ja": "ベリーズ",
				"nl": "Belize",
				"hr": "Belize"
			},
			"population": 370300,
			"latlng": [
				17.25,
				-88.75
			],
			"demonym": "Belizean",
			"borders": [
				"GTM",
				"MEX"
			],
			"area": 22966,
			"gini": 53.1,
			"timezones": [
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "BZD",
					"name": "Belize dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "BZ",
			"alpha3Code": "BLZ",
			"callingCodes": [
				"501"
			],
			"numericCode": "084"
		},
		{
			"name": "Benin",
			"nativeName": "Bénin",
			"topLevelDomain": [
				".bj"
			],
			"capital": "Porto-Novo",
			"altSpellings": [
				"BJ",
				"Republic of Benin",
				"République du Bénin"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Benin",
				"es": "Benín",
				"fr": "Bénin",
				"it": "Benin",
				"ja": "ベナン",
				"nl": "Benin",
				"hr": "Benin"
			},
			"population": 10653654,
			"latlng": [
				9.5,
				2.25
			],
			"demonym": "Beninese",
			"borders": [
				"BFA",
				"NER",
				"NGA",
				"TGO"
			],
			"area": 112622,
			"gini": 38.6,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "BJ",
			"alpha3Code": "BEN",
			"callingCodes": [
				"229"
			],
			"numericCode": "204"
		},
		{
			"name": "Bermuda",
			"nativeName": "Bermuda",
			"topLevelDomain": [
				".bm"
			],
			"capital": "Hamilton",
			"altSpellings": [
				"BM",
				"The Islands of Bermuda",
				"The Bermudas",
				"Somers Isles"
			],
			"region": "Americas",
			"subregion": "Northern America",
			"translations": {
				"de": "Bermuda",
				"es": "Bermudas",
				"fr": "Bermudes",
				"it": "Bermuda",
				"ja": "バミューダ",
				"nl": "Bermuda",
				"hr": "Bermudi"
			},
			"population": 61954,
			"latlng": [
				32.33333333,
				-64.75
			],
			"demonym": "Bermudian",
			"borders": [],
			"area": 54,
			"currencies": [
				{
					"symbol": "$",
					"code": "BMD",
					"name": "Bermudian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "BM",
			"alpha3Code": "BMU",
			"callingCodes": [
				"1441"
			],
			"numericCode": "060"
		},
		{
			"name": "Bhutan",
			"nativeName": "ʼbrug-yul",
			"topLevelDomain": [
				".bt"
			],
			"capital": "Thimphu",
			"altSpellings": [
				"BT",
				"Kingdom of Bhutan"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Bhutan",
				"es": "Bután",
				"fr": "Bhoutan",
				"it": "Bhutan",
				"ja": "ブータン",
				"nl": "Bhutan",
				"hr": "Butan"
			},
			"population": 775620,
			"latlng": [
				27.5,
				90.5
			],
			"demonym": "Bhutanese",
			"borders": [
				"CHN",
				"IND"
			],
			"area": 38394,
			"gini": 38.1,
			"timezones": [
				"UTC+06:00"
			],
			"currencies": [
				{
					"symbol": "Nu.",
					"code": "BTN",
					"name": "Bhutanese ngultrum"
				},
				{
					"symbol": "₹",
					"code": "INR",
					"name": "Indian rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "dz",
					"iso639_2": "dzo",
					"name": "Dzongkha",
					"nativeName": "རྫོང་ཁ"
				}
			],
			"alpha2Code": "BT",
			"alpha3Code": "BTN",
			"callingCodes": [
				"975"
			],
			"numericCode": "064"
		},
		{
			"name": "Bolivia (Plurinational State of)",
			"nativeName": "Bolivia",
			"topLevelDomain": [
				".bo"
			],
			"capital": "Sucre",
			"altSpellings": [
				"BO",
				"Buliwya",
				"Wuliwya",
				"Plurinational State of Bolivia",
				"Estado Plurinacional de Bolivia",
				"Buliwya Mamallaqta",
				"Wuliwya Suyu",
				"Tetã Volívia"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Bolivien",
				"es": "Bolivia",
				"fr": "Bolivie",
				"it": "Bolivia",
				"ja": "ボリビア多民族国",
				"nl": "Bolivia",
				"hr": "Bolivija"
			},
			"population": 10985059,
			"latlng": [
				-17,
				-65
			],
			"demonym": "Bolivian",
			"borders": [
				"ARG",
				"BRA",
				"CHL",
				"PRY",
				"PER"
			],
			"area": 1098581,
			"gini": 56.3,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "Bs.",
					"code": "BOB",
					"name": "Bolivian boliviano"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				},
				{
					"iso639_1": "ay",
					"iso639_2": "aym",
					"name": "Aymara",
					"nativeName": "aymar aru"
				},
				{
					"iso639_1": "qu",
					"iso639_2": "que",
					"name": "Quechua",
					"nativeName": "Runa Simi"
				}
			],
			"alpha2Code": "BO",
			"alpha3Code": "BOL",
			"callingCodes": [
				"591"
			],
			"numericCode": "068"
		},
		{
			"name": "Bonaire, Sint Eustatius and Saba",
			"nativeName": "Bonaire",
			"topLevelDomain": [
				".an",
				".nl"
			],
			"capital": "Kralendijk",
			"altSpellings": [
				"BQ",
				"Boneiru"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {},
			"population": 17408,
			"latlng": [
				12.15,
				-68.266667
			],
			"demonym": "Dutch",
			"borders": [],
			"area": 294,
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				}
			],
			"alpha2Code": "BQ",
			"alpha3Code": "BES",
			"callingCodes": [
				"5997"
			],
			"numericCode": "535"
		},
		{
			"name": "Bosnia and Herzegovina",
			"nativeName": "Bosna i Hercegovina",
			"topLevelDomain": [
				".ba"
			],
			"capital": "Sarajevo",
			"altSpellings": [
				"BA",
				"Bosnia-Herzegovina",
				"Босна и Херцеговина"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Bosnien und Herzegowina",
				"es": "Bosnia y Herzegovina",
				"fr": "Bosnie-Herzégovine",
				"it": "Bosnia ed Erzegovina",
				"ja": "ボスニア・ヘルツェゴビナ",
				"nl": "Bosnië en Herzegovina",
				"hr": "Bosna i Hercegovina"
			},
			"population": 3531159,
			"latlng": [
				44,
				18
			],
			"demonym": "Bosnian, Herzegovinian",
			"borders": [
				"HRV",
				"MNE",
				"SRB"
			],
			"area": 51209,
			"gini": 36.2,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "BAM",
					"name": "Bosnia and Herzegovina convertible mark"
				}
			],
			"languages": [
				{
					"iso639_1": "bs",
					"iso639_2": "bos",
					"name": "Bosnian",
					"nativeName": "bosanski jezik"
				},
				{
					"iso639_1": "hr",
					"iso639_2": "hrv",
					"name": "Croatian",
					"nativeName": "hrvatski jezik"
				},
				{
					"iso639_1": "sr",
					"iso639_2": "srp",
					"name": "Serbian",
					"nativeName": "српски језик"
				}
			],
			"alpha2Code": "BA",
			"alpha3Code": "BIH",
			"callingCodes": [
				"387"
			],
			"numericCode": "070"
		},
		{
			"name": "Botswana",
			"nativeName": "Botswana",
			"topLevelDomain": [
				".bw"
			],
			"capital": "Gaborone",
			"altSpellings": [
				"BW",
				"Republic of Botswana",
				"Lefatshe la Botswana"
			],
			"region": "Africa",
			"subregion": "Southern Africa",
			"translations": {
				"de": "Botswana",
				"es": "Botswana",
				"fr": "Botswana",
				"it": "Botswana",
				"ja": "ボツワナ",
				"nl": "Botswana",
				"hr": "Bocvana"
			},
			"population": 2141206,
			"latlng": [
				-22,
				24
			],
			"demonym": "Motswana",
			"borders": [
				"NAM",
				"ZAF",
				"ZMB",
				"ZWE"
			],
			"area": 582000,
			"gini": 61,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "P",
					"code": "BWP",
					"name": "Botswana pula"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "tn",
					"iso639_2": "tsn",
					"name": "Tswana",
					"nativeName": "Setswana"
				}
			],
			"alpha2Code": "BW",
			"alpha3Code": "BWA",
			"callingCodes": [
				"267"
			],
			"numericCode": "072"
		},
		{
			"name": "Bouvet Island",
			"nativeName": "Bouvetøya",
			"topLevelDomain": [
				".bv"
			],
			"capital": "",
			"altSpellings": [
				"BV",
				"Bouvetøya",
				"Bouvet-øya"
			],
			"region": "",
			"subregion": "",
			"translations": {
				"de": "Bouvetinsel",
				"es": "Isla Bouvet",
				"fr": "Île Bouvet",
				"it": "Isola Bouvet",
				"ja": "ブーベ島",
				"nl": "Bouveteiland",
				"hr": "Otok Bouvet"
			},
			"population": 0,
			"latlng": [
				-54.43333333,
				3.4
			],
			"demonym": "",
			"borders": [],
			"area": 49,
			"currencies": [
				{
					"code": "NOK",
					"name": "Norwegian krone",
					"symbol": "kr"
				}
			],
			"languages": [
				{
					"iso639_1": "no",
					"iso639_2": "nor",
					"name": "Norwegian",
					"nativeName": "Norsk"
				},
				{
					"iso639_1": "nb",
					"iso639_2": "nob",
					"name": "Norwegian Bokmål",
					"nativeName": "Norsk bokmål"
				},
				{
					"iso639_1": "nn",
					"iso639_2": "nno",
					"name": "Norwegian Nynorsk",
					"nativeName": "Norsk nynorsk"
				}
			],
			"alpha2Code": "BV",
			"alpha3Code": "BVT",
			"callingCodes": [
				""
			],
			"numericCode": "074",
			"timezones": [
				"UTC+01:00"
			]
		},
		{
			"name": "Brazil",
			"nativeName": "Brasil",
			"topLevelDomain": [
				".br"
			],
			"capital": "Brasília",
			"altSpellings": [
				"BR",
				"Brasil",
				"Federative Republic of Brazil",
				"República Federativa do Brasil"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Brasilien",
				"es": "Brasil",
				"fr": "Brésil",
				"it": "Brasile",
				"ja": "ブラジル",
				"nl": "Brazilië",
				"hr": "Brazil"
			},
			"population": 206135893,
			"latlng": [
				-10,
				-55
			],
			"demonym": "Brazilian",
			"borders": [
				"ARG",
				"BOL",
				"COL",
				"GUF",
				"GUY",
				"PRY",
				"PER",
				"SUR",
				"URY",
				"VEN"
			],
			"area": 8515767,
			"gini": 54.7,
			"timezones": [
				"UTC-05:00",
				"UTC-04:00",
				"UTC-03:00",
				"UTC-02:00"
			],
			"currencies": [
				{
					"symbol": "R$",
					"code": "BRL",
					"name": "Brazilian real"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "BR",
			"alpha3Code": "BRA",
			"callingCodes": [
				"55"
			],
			"numericCode": "076"
		},
		{
			"name": "British Indian Ocean Territory",
			"nativeName": "British Indian Ocean Territory",
			"topLevelDomain": [
				".io"
			],
			"capital": "Diego Garcia",
			"altSpellings": [
				"IO"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Britisches Territorium im Indischen Ozean",
				"es": "Territorio Británico del Océano Índico",
				"fr": "Territoire britannique de l'océan Indien",
				"it": "Territorio britannico dell'oceano indiano",
				"ja": "イギリス領インド洋地域",
				"nl": "Britse Gebieden in de Indische Oceaan",
				"hr": "Britanski Indijskooceanski teritorij"
			},
			"population": 3000,
			"latlng": [
				-6,
				71.5
			],
			"demonym": "Indian",
			"borders": [],
			"area": 60,
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "IO",
			"alpha3Code": "IOT",
			"callingCodes": [
				"246"
			],
			"numericCode": "086"
		},
		{
			"name": "United States Minor Outlying Islands",
			"nativeName": "United States Minor Outlying Islands",
			"topLevelDomain": [
				".us"
			],
			"capital": "",
			"altSpellings": [
				"UM"
			],
			"region": "Americas",
			"subregion": "Northern America",
			"translations": {
				"de": "Kleinere Inselbesitzungen der Vereinigten Staaten",
				"es": "Islas Ultramarinas Menores de Estados Unidos",
				"fr": "Îles mineures éloignées des États-Unis",
				"it": "Isole minori esterne degli Stati Uniti d'America",
				"ja": "合衆国領有小離島",
				"nl": "Kleine afgelegen eilanden van de Verenigde Staten",
				"hr": "Mali udaljeni otoci SAD-a"
			},
			"population": 300,
			"latlng": [],
			"demonym": "American",
			"borders": [],
			"currencies": [
				{
					"code": "USD",
					"name": "United States Dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "UM",
			"alpha3Code": "UMI",
			"callingCodes": [
				""
			],
			"numericCode": "581"
		},
		{
			"name": "Virgin Islands (British)",
			"nativeName": "British Virgin Islands",
			"topLevelDomain": [
				".vg"
			],
			"capital": "Road Town",
			"altSpellings": [
				"VG"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Britische Jungferninseln",
				"es": "Islas Vírgenes del Reino Unido",
				"fr": "Îles Vierges britanniques",
				"it": "Isole Vergini Britanniche",
				"ja": "イギリス領ヴァージン諸島",
				"nl": "Britse Maagdeneilanden",
				"hr": "Britanski Djevičanski Otoci"
			},
			"population": 28514,
			"latlng": [
				18.431383,
				-64.62305
			],
			"demonym": "Virgin Islander",
			"borders": [],
			"area": 151,
			"currencies": [
				{
					"symbol": "$",
					"code": null,
					"name": "[D]"
				},
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "VG",
			"alpha3Code": "VGB",
			"callingCodes": [
				"1284"
			],
			"timezones": [
				"UTC-04:00"
			],
			"numericCode": "092"
		},
		{
			"name": "Virgin Islands (U.S.)",
			"nativeName": "Virgin Islands of the United States",
			"topLevelDomain": [
				".vi"
			],
			"alpha2Code": "VI",
			"numericCode": "850",
			"alpha3Code": "VIR",
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"callingCodes": [
				"1 340"
			],
			"capital": "Charlotte Amalie",
			"altSpellings": [
				"VI",
				"USVI",
				"American Virgin Islands",
				"U.S. Virgin Islands"
			],
			"relevance": "0.5",
			"region": "Americas",
			"subregion": "Caribbean",
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"translations": {
				"de": "Amerikanische Jungferninseln",
				"es": "Islas Vírgenes de los Estados Unidos",
				"fr": "Îles Vierges des États-Unis",
				"it": "Isole Vergini americane",
				"ja": "アメリカ領ヴァージン諸島",
				"nl": "Verenigde Staten Maagdeneilanden"
			},
			"population": 114743,
			"latlng": [
				18.34,
				-64.93
			],
			"demonym": "Virgin Islander",
			"borders": [],
			"area": 346.36,
			"timezones": [
				"UTC-04:00"
			]
		},
		{
			"name": "Brunei Darussalam",
			"nativeName": "Negara Brunei Darussalam",
			"topLevelDomain": [
				".bn"
			],
			"capital": "Bandar Seri Begawan",
			"altSpellings": [
				"BN",
				"Nation of Brunei",
				" the Abode of Peace"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Brunei",
				"nl": "Brunei",
				"de": "Brunei",
				"it": "Brunei",
				"ja": "ブルネイ・ダルサラーム",
				"es": "Brunei",
				"hr": "Brunej"
			},
			"population": 411900,
			"latlng": [
				4.5,
				114.66666666
			],
			"demonym": "Bruneian",
			"borders": [
				"MYS"
			],
			"area": 5765,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "BND",
					"name": "Brunei dollar"
				},
				{
					"symbol": "$",
					"code": "SGD",
					"name": "Singapore dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "ms",
					"iso639_2": "msa",
					"name": "Malay",
					"nativeName": "bahasa Melayu"
				}
			],
			"alpha2Code": "BN",
			"alpha3Code": "BRN",
			"callingCodes": [
				"673"
			],
			"numericCode": "096"
		},
		{
			"name": "Bulgaria",
			"nativeName": "България",
			"topLevelDomain": [
				".bg"
			],
			"capital": "Sofia",
			"altSpellings": [
				"BG",
				"Republic of Bulgaria",
				"Република България"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Bulgarien",
				"es": "Bulgaria",
				"fr": "Bulgarie",
				"it": "Bulgaria",
				"ja": "ブルガリア",
				"nl": "Bulgarije",
				"hr": "Bugarska"
			},
			"population": 7153784,
			"latlng": [
				43,
				25
			],
			"demonym": "Bulgarian",
			"borders": [
				"GRC",
				"MKD",
				"ROU",
				"SRB",
				"TUR"
			],
			"area": 110879,
			"gini": 28.2,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "лв",
					"code": "BGN",
					"name": "Bulgarian lev"
				}
			],
			"languages": [
				{
					"iso639_1": "bg",
					"iso639_2": "bul",
					"name": "Bulgarian",
					"nativeName": "български език"
				}
			],
			"alpha2Code": "BG",
			"alpha3Code": "BGR",
			"callingCodes": [
				"359"
			],
			"numericCode": "100"
		},
		{
			"name": "Burkina Faso",
			"nativeName": "Burkina Faso",
			"topLevelDomain": [
				".bf"
			],
			"capital": "Ouagadougou",
			"altSpellings": [
				"BF"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Burkina Faso",
				"es": "Burkina Faso",
				"fr": "Burkina Faso",
				"it": "Burkina Faso",
				"ja": "ブルキナファソ",
				"nl": "Burkina Faso",
				"hr": "Burkina Faso"
			},
			"population": 19034397,
			"latlng": [
				13,
				-2
			],
			"demonym": "Burkinabe",
			"borders": [
				"BEN",
				"CIV",
				"GHA",
				"MLI",
				"NER",
				"TGO"
			],
			"area": 272967,
			"gini": 39.8,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ff",
					"iso639_2": "ful",
					"name": "Fula",
					"nativeName": "Fulfulde"
				}
			],
			"alpha2Code": "BF",
			"alpha3Code": "BFA",
			"callingCodes": [
				"226"
			],
			"numericCode": "854"
		},
		{
			"name": "Burundi",
			"nativeName": "Burundi",
			"topLevelDomain": [
				".bi"
			],
			"capital": "Bujumbura",
			"altSpellings": [
				"BI",
				"Republic of Burundi",
				"Republika y'Uburundi",
				"République du Burundi"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Burundi",
				"es": "Burundi",
				"fr": "Burundi",
				"it": "Burundi",
				"ja": "ブルンジ",
				"nl": "Burundi",
				"hr": "Burundi"
			},
			"population": 10114505,
			"latlng": [
				-3.5,
				30
			],
			"demonym": "Burundian",
			"borders": [
				"COD",
				"RWA",
				"TZA"
			],
			"area": 27834,
			"gini": 33.3,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "BIF",
					"name": "Burundian franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "rn",
					"iso639_2": "run",
					"name": "Kirundi",
					"nativeName": "Ikirundi"
				}
			],
			"alpha2Code": "BI",
			"alpha3Code": "BDI",
			"callingCodes": [
				"257"
			],
			"numericCode": "108"
		},
		{
			"name": "Cambodia",
			"nativeName": "Kâmpŭchéa",
			"topLevelDomain": [
				".kh"
			],
			"capital": "Phnom Penh",
			"altSpellings": [
				"KH",
				"Kingdom of Cambodia"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Cambodge",
				"nl": "Cambodja",
				"de": "Kambodscha",
				"it": "Cambogia",
				"ja": "カンボジア",
				"es": "Camboya",
				"hr": "Kambodža"
			},
			"population": 15626444,
			"latlng": [
				13,
				105
			],
			"demonym": "Cambodian",
			"borders": [
				"LAO",
				"THA",
				"VNM"
			],
			"area": 181035,
			"gini": 37.9,
			"timezones": [
				"UTC+07:00"
			],
			"currencies": [
				{
					"symbol": "៛",
					"code": "KHR",
					"name": "Cambodian riel"
				},
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "km",
					"iso639_2": "khm",
					"name": "Khmer",
					"nativeName": "ខ្មែរ"
				}
			],
			"alpha2Code": "KH",
			"alpha3Code": "KHM",
			"callingCodes": [
				"855"
			],
			"numericCode": "116"
		},
		{
			"name": "Cameroon",
			"nativeName": "Cameroon",
			"topLevelDomain": [
				".cm"
			],
			"capital": "Yaoundé",
			"altSpellings": [
				"CM",
				"Republic of Cameroon",
				"République du Cameroun"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Kamerun",
				"es": "Camerún",
				"fr": "Cameroun",
				"it": "Camerun",
				"ja": "カメルーン",
				"nl": "Kameroen",
				"hr": "Kamerun"
			},
			"population": 22709892,
			"latlng": [
				6,
				12
			],
			"demonym": "Cameroonian",
			"borders": [
				"CAF",
				"TCD",
				"COG",
				"GNQ",
				"GAB",
				"NGA"
			],
			"area": 475442,
			"gini": 38.9,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XAF",
					"name": "Central African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "CM",
			"alpha3Code": "CMR",
			"callingCodes": [
				"237"
			],
			"numericCode": "120"
		},
		{
			"name": "Canada",
			"nativeName": "Canada",
			"topLevelDomain": [
				".ca"
			],
			"capital": "Ottawa",
			"altSpellings": [
				"CA"
			],
			"region": "Americas",
			"subregion": "Northern America",
			"translations": {
				"de": "Kanada",
				"es": "Canadá",
				"fr": "Canada",
				"it": "Canada",
				"ja": "カナダ",
				"nl": "Canada",
				"hr": "Kanada"
			},
			"population": 36155487,
			"latlng": [
				60,
				-95
			],
			"demonym": "Canadian",
			"borders": [
				"USA"
			],
			"area": 9984670,
			"gini": 32.6,
			"timezones": [
				"UTC-08:00",
				"UTC-07:00",
				"UTC-06:00",
				"UTC-05:00",
				"UTC-04:00",
				"UTC-03:30"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "CAD",
					"name": "Canadian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "CA",
			"alpha3Code": "CAN",
			"callingCodes": [
				"1"
			],
			"numericCode": "124"
		},
		{
			"name": "Cabo Verde",
			"nativeName": "Cabo Verde",
			"topLevelDomain": [
				".cv"
			],
			"capital": "Praia",
			"altSpellings": [
				"CV",
				"Republic of Cabo Verde",
				"República de Cabo Verde"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Kap Verde",
				"es": "Cabo Verde",
				"fr": "Cap Vert",
				"it": "Capo Verde",
				"ja": "カーボベルデ",
				"nl": "Kaapverdië",
				"hr": "Zelenortska Republika"
			},
			"population": 531239,
			"latlng": [
				16,
				-24
			],
			"demonym": "Cape Verdian",
			"borders": [],
			"area": 4033,
			"gini": 50.5,
			"timezones": [
				"UTC-01:00"
			],
			"currencies": [
				{
					"symbol": "Esc",
					"code": "CVE",
					"name": "Cape Verdean escudo"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "CV",
			"alpha3Code": "CPV",
			"callingCodes": [
				"238"
			],
			"numericCode": "132"
		},
		{
			"name": "Cayman Islands",
			"nativeName": "Cayman Islands",
			"topLevelDomain": [
				".ky"
			],
			"capital": "George Town",
			"altSpellings": [
				"KY"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Kaimaninseln",
				"es": "Islas Caimán",
				"fr": "Îles Caïmans",
				"it": "Isole Cayman",
				"ja": "ケイマン諸島",
				"nl": "Caymaneilanden",
				"hr": "Kajmanski otoci"
			},
			"population": 58238,
			"latlng": [
				19.5,
				-80.5
			],
			"demonym": "Caymanian",
			"borders": [],
			"area": 264,
			"currencies": [
				{
					"symbol": "$",
					"code": "KYD",
					"name": "Cayman Islands dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "KY",
			"alpha3Code": "CYM",
			"callingCodes": [
				"1345"
			],
			"numericCode": "136"
		},
		{
			"name": "Central African Republic",
			"nativeName": "Ködörösêse tî Bêafrîka",
			"topLevelDomain": [
				".cf"
			],
			"capital": "Bangui",
			"altSpellings": [
				"CF",
				"Central African Republic",
				"République centrafricaine"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Zentralafrikanische Republik",
				"es": "República Centroafricana",
				"fr": "République centrafricaine",
				"it": "Repubblica Centrafricana",
				"ja": "中央アフリカ共和国",
				"nl": "Centraal-Afrikaanse Republiek",
				"hr": "Srednjoafrička Republika"
			},
			"population": 4998000,
			"latlng": [
				7,
				21
			],
			"demonym": "Central African",
			"borders": [
				"CMR",
				"TCD",
				"COD",
				"COG",
				"SSD",
				"SDN"
			],
			"area": 622984,
			"gini": 56.3,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XAF",
					"name": "Central African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "sg",
					"iso639_2": "sag",
					"name": "Sango",
					"nativeName": "yângâ tî sängö"
				}
			],
			"alpha2Code": "CF",
			"alpha3Code": "CAF",
			"callingCodes": [
				"236"
			],
			"numericCode": "140"
		},
		{
			"name": "Chad",
			"nativeName": "Tchad",
			"topLevelDomain": [
				".td"
			],
			"capital": "N'Djamena",
			"altSpellings": [
				"TD",
				"Tchad",
				"Republic of Chad",
				"République du Tchad"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Tschad",
				"es": "Chad",
				"fr": "Tchad",
				"it": "Ciad",
				"ja": "チャド",
				"nl": "Tsjaad",
				"hr": "Čad"
			},
			"population": 14497000,
			"latlng": [
				15,
				19
			],
			"demonym": "Chadian",
			"borders": [
				"CMR",
				"CAF",
				"LBY",
				"NER",
				"NGA",
				"SSD"
			],
			"area": 1284000,
			"gini": 39.8,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XAF",
					"name": "Central African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "TD",
			"alpha3Code": "TCD",
			"callingCodes": [
				"235"
			],
			"numericCode": "148"
		},
		{
			"name": "Chile",
			"nativeName": "Chile",
			"topLevelDomain": [
				".cl"
			],
			"capital": "Santiago",
			"altSpellings": [
				"CL",
				"Republic of Chile",
				"República de Chile"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Chile",
				"es": "Chile",
				"fr": "Chili",
				"it": "Cile",
				"ja": "チリ",
				"nl": "Chili",
				"hr": "Čile"
			},
			"population": 18191900,
			"latlng": [
				-30,
				-71
			],
			"demonym": "Chilean",
			"borders": [
				"ARG",
				"BOL",
				"PER"
			],
			"area": 756102,
			"gini": 52.1,
			"timezones": [
				"UTC-06:00",
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "CLP",
					"name": "Chilean peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "CL",
			"alpha3Code": "CHL",
			"callingCodes": [
				"56"
			],
			"numericCode": "152"
		},
		{
			"name": "China",
			"nativeName": "中国",
			"topLevelDomain": [
				".cn"
			],
			"capital": "Beijing",
			"altSpellings": [
				"CN",
				"Zhōngguó",
				"Zhongguo",
				"Zhonghua",
				"People's Republic of China",
				"中华人民共和国",
				"Zhōnghuá Rénmín Gònghéguó"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "China",
				"es": "China",
				"fr": "Chine",
				"it": "Cina",
				"ja": "中国",
				"nl": "China",
				"hr": "Kina"
			},
			"population": 1377422166,
			"latlng": [
				35,
				105
			],
			"demonym": "Chinese",
			"borders": [
				"AFG",
				"BTN",
				"MMR",
				"HKG",
				"IND",
				"KAZ",
				"PRK",
				"KGZ",
				"LAO",
				"MAC",
				"MNG",
				"PAK",
				"RUS",
				"TJK",
				"VNM"
			],
			"area": 9640011,
			"gini": 47,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "¥",
					"code": "CNY",
					"name": "Chinese yuan"
				}
			],
			"languages": [
				{
					"iso639_1": "zh",
					"iso639_2": "zho",
					"name": "Chinese",
					"nativeName": "中文 (Zhōngwén)"
				}
			],
			"alpha2Code": "CN",
			"alpha3Code": "CHN",
			"callingCodes": [
				"86"
			],
			"numericCode": "156"
		},
		{
			"name": "Christmas Island",
			"nativeName": "Christmas Island",
			"topLevelDomain": [
				".cx"
			],
			"capital": "Flying Fish Cove",
			"altSpellings": [
				"CX",
				"Territory of Christmas Island"
			],
			"region": "Oceania",
			"subregion": "Australia and New Zealand",
			"translations": {
				"fr": "Île Christmas",
				"nl": "Christmaseiland",
				"de": "Weihnachtsinsel",
				"it": "Isola di Natale",
				"ja": "クリスマス島",
				"es": "Isla de Navidad",
				"hr": "Božićni otok"
			},
			"population": 2072,
			"latlng": [
				-10.5,
				105.66666666
			],
			"demonym": "Christmas Island",
			"borders": [],
			"area": 135,
			"currencies": [
				{
					"code": "AUD",
					"name": "Australian dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "CX",
			"alpha3Code": "CXR",
			"callingCodes": [
				"61"
			],
			"numericCode": "162"
		},
		{
			"name": "Cocos (Keeling) Islands",
			"nativeName": "Cocos (Keeling) Islands",
			"topLevelDomain": [
				".cc"
			],
			"capital": "West Island",
			"altSpellings": [
				"CC",
				"Territory of the Cocos (Keeling) Islands",
				"Keeling Islands"
			],
			"region": "Oceania",
			"subregion": "Australia and New Zealand",
			"translations": {
				"fr": "Îles Cocos",
				"nl": "Cocoseilanden",
				"de": "Kokosinseln",
				"it": "Isole Cocos e Keeling",
				"ja": "ココス（キーリング）諸島",
				"es": "Islas Cocos o Islas Keeling",
				"hr": "Kokosovi Otoci"
			},
			"population": 550,
			"latlng": [
				-12.5,
				96.83333333
			],
			"demonym": "Cocos Islander",
			"borders": [],
			"area": 14,
			"currencies": [
				{
					"symbol": "$",
					"code": "AUD",
					"name": "Australian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "CC",
			"alpha3Code": "CCK",
			"callingCodes": [
				"61"
			],
			"numericCode": "166"
		},
		{
			"name": "Colombia",
			"nativeName": "Colombia",
			"topLevelDomain": [
				".co"
			],
			"capital": "Bogotá",
			"altSpellings": [
				"CO",
				"Republic of Colombia",
				"República de Colombia"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Kolumbien",
				"es": "Colombia",
				"fr": "Colombie",
				"it": "Colombia",
				"ja": "コロンビア",
				"nl": "Colombia",
				"hr": "Kolumbija"
			},
			"population": 48759958,
			"latlng": [
				4,
				-72
			],
			"demonym": "Colombian",
			"borders": [
				"BRA",
				"ECU",
				"PAN",
				"PER",
				"VEN"
			],
			"area": 1141748,
			"gini": 55.9,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "COP",
					"name": "Colombian peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "CO",
			"alpha3Code": "COL",
			"callingCodes": [
				"57"
			],
			"numericCode": "170"
		},
		{
			"name": "Comoros",
			"nativeName": "Komori",
			"topLevelDomain": [
				".km"
			],
			"capital": "Moroni",
			"altSpellings": [
				"KM",
				"Union of the Comoros",
				"Union des Comores",
				"Udzima wa Komori",
				"al-Ittiḥād al-Qumurī"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Union der Komoren",
				"es": "Comoras",
				"fr": "Comores",
				"it": "Comore",
				"ja": "コモロ",
				"nl": "Comoren",
				"hr": "Komori"
			},
			"population": 806153,
			"latlng": [
				-12.16666666,
				44.25
			],
			"demonym": "Comoran",
			"borders": [],
			"area": 1862,
			"gini": 64.3,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "KMF",
					"name": "Comorian franc"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "KM",
			"alpha3Code": "COM",
			"callingCodes": [
				"269"
			],
			"numericCode": "174"
		},
		{
			"name": "Congo",
			"nativeName": "République du Congo",
			"topLevelDomain": [
				".cg"
			],
			"capital": "Brazzaville",
			"altSpellings": [
				"CG",
				"Congo-Brazzaville"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Kongo",
				"es": "Congo",
				"fr": "Congo",
				"it": "Congo",
				"ja": "コンゴ共和国",
				"nl": "Congo [Republiek]",
				"hr": "Kongo"
			},
			"population": 4741000,
			"latlng": [
				-1,
				15
			],
			"demonym": "Congolese",
			"borders": [
				"AGO",
				"CMR",
				"CAF",
				"COD",
				"GAB"
			],
			"area": 342000,
			"gini": 47.3,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XAF",
					"name": "Central African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ln",
					"iso639_2": "lin",
					"name": "Lingala",
					"nativeName": "Lingála"
				}
			],
			"alpha2Code": "CG",
			"alpha3Code": "COG",
			"callingCodes": [
				"242"
			],
			"numericCode": "178"
		},
		{
			"name": "Congo (Democratic Republic of the)",
			"nativeName": "République démocratique du Congo",
			"topLevelDomain": [
				".cd"
			],
			"capital": "Kinshasa",
			"altSpellings": [
				"CD",
				"DR Congo",
				"Congo-Kinshasa",
				"DRC"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Kongo (Dem. Rep.)",
				"es": "Congo (Rep. Dem.)",
				"fr": "Congo (Rép. dém.)",
				"it": "Congo (Rep. Dem.)",
				"ja": "コンゴ民主共和国",
				"nl": "Congo [DRC]",
				"hr": "Kongo, Demokratska Republika"
			},
			"population": 85026000,
			"latlng": [
				0,
				25
			],
			"demonym": "Congolese",
			"borders": [
				"AGO",
				"BDI",
				"CAF",
				"COG",
				"RWA",
				"SSD",
				"TZA",
				"UGA",
				"ZMB"
			],
			"area": 2344858,
			"timezones": [
				"UTC+01:00",
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "CDF",
					"name": "Congolese franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ln",
					"iso639_2": "lin",
					"name": "Lingala",
					"nativeName": "Lingála"
				},
				{
					"iso639_1": "kg",
					"iso639_2": "kon",
					"name": "Kongo",
					"nativeName": "Kikongo"
				},
				{
					"iso639_1": "sw",
					"iso639_2": "swa",
					"name": "Swahili",
					"nativeName": "Kiswahili"
				},
				{
					"iso639_1": "lu",
					"iso639_2": "lub",
					"name": "Luba-Katanga",
					"nativeName": "Tshiluba"
				}
			],
			"alpha2Code": "CD",
			"alpha3Code": "COD",
			"callingCodes": [
				"243"
			],
			"numericCode": "180"
		},
		{
			"name": "Cook Islands",
			"nativeName": "Cook Islands",
			"topLevelDomain": [
				".ck"
			],
			"capital": "Avarua",
			"altSpellings": [
				"CK",
				"Kūki 'Āirani"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Cookinseln",
				"es": "Islas Cook",
				"fr": "Îles Cook",
				"it": "Isole Cook",
				"ja": "クック諸島",
				"nl": "Cookeilanden",
				"hr": "Cookovo Otočje"
			},
			"population": 18100,
			"latlng": [
				-21.23333333,
				-159.76666666
			],
			"demonym": "Cook Islander",
			"borders": [],
			"area": 236,
			"currencies": [
				{
					"symbol": "$",
					"code": "NZD",
					"name": "New Zealand dollar"
				},
				{
					"symbol": "$",
					"code": "(none)",
					"name": "Cook Islands dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "CK",
			"alpha3Code": "COK",
			"callingCodes": [
				"682"
			],
			"numericCode": "184"
		},
		{
			"name": "Costa Rica",
			"nativeName": "Costa Rica",
			"topLevelDomain": [
				".cr"
			],
			"capital": "San José",
			"altSpellings": [
				"CR",
				"Republic of Costa Rica",
				"República de Costa Rica"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Costa Rica",
				"es": "Costa Rica",
				"fr": "Costa Rica",
				"it": "Costa Rica",
				"ja": "コスタリカ",
				"nl": "Costa Rica",
				"hr": "Kostarika"
			},
			"population": 4890379,
			"latlng": [
				10,
				-84
			],
			"demonym": "Costa Rican",
			"borders": [
				"NIC",
				"PAN"
			],
			"area": 51100,
			"gini": 50.7,
			"timezones": [
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "₡",
					"code": "CRC",
					"name": "Costa Rican colón"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "CR",
			"alpha3Code": "CRI",
			"callingCodes": [
				"506"
			],
			"numericCode": "188"
		},
		{
			"name": "Croatia",
			"nativeName": "Hrvatska",
			"topLevelDomain": [
				".hr"
			],
			"capital": "Zagreb",
			"altSpellings": [
				"HR",
				"Hrvatska",
				"Republic of Croatia",
				"Republika Hrvatska"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Kroatien",
				"es": "Croacia",
				"fr": "Croatie",
				"it": "Croazia",
				"ja": "クロアチア",
				"nl": "Kroatië",
				"hr": "Hrvatska"
			},
			"population": 4190669,
			"latlng": [
				45.16666666,
				15.5
			],
			"demonym": "Croatian",
			"borders": [
				"BIH",
				"HUN",
				"MNE",
				"SRB",
				"SVN"
			],
			"area": 56594,
			"gini": 33.7,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "kn",
					"code": "HRK",
					"name": "Croatian kuna"
				}
			],
			"languages": [
				{
					"iso639_1": "hr",
					"iso639_2": "hrv",
					"name": "Croatian",
					"nativeName": "hrvatski jezik"
				}
			],
			"alpha2Code": "HR",
			"alpha3Code": "HRV",
			"callingCodes": [
				"385"
			],
			"numericCode": "191"
		},
		{
			"name": "Cuba",
			"nativeName": "Cuba",
			"topLevelDomain": [
				".cu"
			],
			"capital": "Havana",
			"altSpellings": [
				"CU",
				"Republic of Cuba",
				"República de Cuba"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Kuba",
				"es": "Cuba",
				"fr": "Cuba",
				"it": "Cuba",
				"ja": "キューバ",
				"nl": "Cuba",
				"hr": "Kuba"
			},
			"population": 11239004,
			"latlng": [
				21.5,
				-80
			],
			"demonym": "Cuban",
			"borders": [],
			"area": 109884,
			"gini": null,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "CUC",
					"name": "Cuban convertible peso"
				},
				{
					"symbol": "$",
					"code": "CUP",
					"name": "Cuban peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "CU",
			"alpha3Code": "CUB",
			"callingCodes": [
				"53"
			],
			"numericCode": "192"
		},
		{
			"name": "Curaçao",
			"nativeName": "Curaçao",
			"topLevelDomain": [
				".cw"
			],
			"capital": "Willemstad",
			"altSpellings": [
				"CW",
				"Curacao",
				"Kòrsou",
				"Country of Curaçao",
				"Land Curaçao",
				"Pais Kòrsou"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"nl": "Curaçao"
			},
			"population": 154843,
			"latlng": [
				12.116667,
				-68.933333
			],
			"demonym": "Dutch",
			"borders": [],
			"area": 444,
			"currencies": [
				{
					"symbol": "ƒ",
					"code": "ANG",
					"name": "Netherlands Antillean guilder"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				},
				{
					"iso639_1": "pa",
					"iso639_2": "pan",
					"name": "Eastern Punjabi",
					"nativeName": "ਪੰਜਾਬੀ"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "CW",
			"alpha3Code": "CUW",
			"callingCodes": [
				"599"
			],
			"numericCode": "531",
			"timezones": [
				"UTC-04:00"
			]
		},
		{
			"name": "Cyprus",
			"nativeName": "Κύπρος",
			"topLevelDomain": [
				".cy"
			],
			"capital": "Nicosia",
			"altSpellings": [
				"CY",
				"Kýpros",
				"Kıbrıs",
				"Republic of Cyprus",
				"Κυπριακή Δημοκρατία",
				"Kıbrıs Cumhuriyeti"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Zypern",
				"es": "Chipre",
				"fr": "Chypre",
				"it": "Cipro",
				"ja": "キプロス",
				"nl": "Cyprus",
				"hr": "Cipar"
			},
			"population": 847000,
			"latlng": [
				35,
				33
			],
			"demonym": "Cypriot",
			"borders": [
				"GBR"
			],
			"area": 9251,
			"gini": null,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "el",
					"iso639_2": "ell",
					"name": "Greek (modern)",
					"nativeName": "ελληνικά"
				},
				{
					"iso639_1": "tr",
					"iso639_2": "tur",
					"name": "Turkish",
					"nativeName": "Türkçe"
				},
				{
					"iso639_1": "hy",
					"iso639_2": "hye",
					"name": "Armenian",
					"nativeName": "Հայերեն"
				}
			],
			"alpha2Code": "CY",
			"alpha3Code": "CYP",
			"callingCodes": [
				"357"
			],
			"numericCode": "196"
		},
		{
			"name": "Czech Republic",
			"nativeName": "Česká republika",
			"topLevelDomain": [
				".cz"
			],
			"capital": "Prague",
			"altSpellings": [
				"CZ",
				"Česká republika",
				"Česko"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Tschechische Republik",
				"es": "República Checa",
				"fr": "République tchèque",
				"it": "Repubblica Ceca",
				"ja": "チェコ",
				"nl": "Tsjechië",
				"hr": "Češka"
			},
			"population": 10558524,
			"latlng": [
				49.75,
				15.5
			],
			"demonym": "Czech",
			"borders": [
				"AUT",
				"DEU",
				"POL",
				"SVK"
			],
			"area": 78865,
			"gini": 26,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Kč",
					"code": "CZK",
					"name": "Czech koruna"
				}
			],
			"languages": [
				{
					"iso639_1": "cs",
					"iso639_2": "ces",
					"name": "Czech",
					"nativeName": "čeština"
				},
				{
					"iso639_1": "sk",
					"iso639_2": "slk",
					"name": "Slovak",
					"nativeName": "slovenčina"
				}
			],
			"alpha2Code": "CZ",
			"alpha3Code": "CZE",
			"callingCodes": [
				"420"
			],
			"numericCode": "203"
		},
		{
			"name": "Denmark",
			"nativeName": "Danmark",
			"topLevelDomain": [
				".dk"
			],
			"capital": "Copenhagen",
			"altSpellings": [
				"DK",
				"Danmark",
				"Kingdom of Denmark",
				"Kongeriget Danmark"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Dänemark",
				"es": "Dinamarca",
				"fr": "Danemark",
				"it": "Danimarca",
				"ja": "デンマーク",
				"nl": "Denemarken",
				"hr": "Danska"
			},
			"population": 5717014,
			"latlng": [
				56,
				10
			],
			"demonym": "Danish",
			"borders": [
				"DEU"
			],
			"area": 43094,
			"gini": 24,
			"timezones": [
				"UTC-04:00",
				"UTC-03:00",
				"UTC-01:00",
				"UTC",
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "kr",
					"code": "DKK",
					"name": "Danish krone"
				}
			],
			"languages": [
				{
					"iso639_1": "da",
					"iso639_2": "dan",
					"name": "Danish",
					"nativeName": "dansk"
				}
			],
			"alpha2Code": "DK",
			"alpha3Code": "DNK",
			"callingCodes": [
				"45"
			],
			"numericCode": "208"
		},
		{
			"name": "Djibouti",
			"nativeName": "Djibouti",
			"topLevelDomain": [
				".dj"
			],
			"capital": "Djibouti",
			"altSpellings": [
				"DJ",
				"Jabuuti",
				"Gabuuti",
				"Republic of Djibouti",
				"République de Djibouti",
				"Gabuutih Ummuuno",
				"Jamhuuriyadda Jabuuti"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Dschibuti",
				"es": "Yibuti",
				"fr": "Djibouti",
				"it": "Gibuti",
				"ja": "ジブチ",
				"nl": "Djibouti",
				"hr": "Džibuti"
			},
			"population": 900000,
			"latlng": [
				11.5,
				43
			],
			"demonym": "Djibouti",
			"borders": [
				"ERI",
				"ETH",
				"SOM"
			],
			"area": 23200,
			"gini": 40,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "DJF",
					"name": "Djiboutian franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "DJ",
			"alpha3Code": "DJI",
			"callingCodes": [
				"253"
			],
			"numericCode": "262"
		},
		{
			"name": "Dominica",
			"nativeName": "Dominica",
			"topLevelDomain": [
				".dm"
			],
			"capital": "Roseau",
			"altSpellings": [
				"DM",
				"Dominique",
				"Wai‘tu kubuli",
				"Commonwealth of Dominica"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Dominica",
				"es": "Dominica",
				"fr": "Dominique",
				"it": "Dominica",
				"ja": "ドミニカ国",
				"nl": "Dominica",
				"hr": "Dominika"
			},
			"population": 71293,
			"latlng": [
				15.41666666,
				-61.33333333
			],
			"demonym": "Dominican",
			"borders": [],
			"area": 751,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "DM",
			"alpha3Code": "DMA",
			"callingCodes": [
				"1767"
			],
			"numericCode": "212"
		},
		{
			"name": "Dominican Republic",
			"nativeName": "República Dominicana",
			"topLevelDomain": [
				".do"
			],
			"capital": "Santo Domingo",
			"altSpellings": [
				"DO"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Dominikanische Republik",
				"es": "República Dominicana",
				"fr": "République dominicaine",
				"it": "Repubblica Dominicana",
				"ja": "ドミニカ共和国",
				"nl": "Dominicaanse Republiek",
				"hr": "Dominikanska Republika"
			},
			"population": 10075045,
			"latlng": [
				19,
				-70.66666666
			],
			"demonym": "Dominican",
			"borders": [
				"HTI"
			],
			"area": 48671,
			"gini": 47.2,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "DOP",
					"name": "Dominican peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "DO",
			"alpha3Code": "DOM",
			"callingCodes": [
				"1809",
				"1829",
				"1849"
			],
			"numericCode": "214"
		},
		{
			"name": "Ecuador",
			"nativeName": "Ecuador",
			"topLevelDomain": [
				".ec"
			],
			"capital": "Quito",
			"altSpellings": [
				"EC",
				"Republic of Ecuador",
				"República del Ecuador"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Ecuador",
				"es": "Ecuador",
				"fr": "Équateur",
				"it": "Ecuador",
				"ja": "エクアドル",
				"nl": "Ecuador",
				"hr": "Ekvador"
			},
			"population": 16545799,
			"latlng": [
				-2,
				-77.5
			],
			"demonym": "Ecuadorean",
			"borders": [
				"COL",
				"PER"
			],
			"area": 276841,
			"gini": 49.3,
			"timezones": [
				"UTC-06:00",
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				},
				{
					"symbol": null,
					"code": "(none)",
					"name": null
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "EC",
			"alpha3Code": "ECU",
			"callingCodes": [
				"593"
			],
			"numericCode": "218"
		},
		{
			"name": "Egypt",
			"nativeName": "مصر‎",
			"topLevelDomain": [
				".eg"
			],
			"capital": "Cairo",
			"altSpellings": [
				"EG",
				"Arab Republic of Egypt"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Ägypten",
				"es": "Egipto",
				"fr": "Égypte",
				"it": "Egitto",
				"ja": "エジプト",
				"nl": "Egypte",
				"hr": "Egipat"
			},
			"population": 91290000,
			"latlng": [
				27,
				30
			],
			"demonym": "Egyptian",
			"borders": [
				"ISR",
				"LBY",
				"SDN"
			],
			"area": 1002450,
			"gini": 30.8,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "£",
					"code": "EGP",
					"name": "Egyptian pound"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "EG",
			"alpha3Code": "EGY",
			"callingCodes": [
				"20"
			],
			"numericCode": "818"
		},
		{
			"name": "El Salvador",
			"nativeName": "El Salvador",
			"topLevelDomain": [
				".sv"
			],
			"capital": "San Salvador",
			"altSpellings": [
				"SV",
				"Republic of El Salvador",
				"República de El Salvador"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "El Salvador",
				"es": "El Salvador",
				"fr": "Salvador",
				"it": "El Salvador",
				"ja": "エルサルバドル",
				"nl": "El Salvador",
				"hr": "Salvador"
			},
			"population": 6520675,
			"latlng": [
				13.83333333,
				-88.91666666
			],
			"demonym": "Salvadoran",
			"borders": [
				"GTM",
				"HND"
			],
			"area": 21041,
			"gini": 48.3,
			"timezones": [
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "SV",
			"alpha3Code": "SLV",
			"callingCodes": [
				"503"
			],
			"numericCode": "222"
		},
		{
			"name": "Equatorial Guinea",
			"nativeName": "Guinea Ecuatorial",
			"topLevelDomain": [
				".gq"
			],
			"capital": "Malabo",
			"altSpellings": [
				"GQ",
				"Republic of Equatorial Guinea",
				"República de Guinea Ecuatorial",
				"République de Guinée équatoriale",
				"República da Guiné Equatorial"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Äquatorial-Guinea",
				"es": "Guinea Ecuatorial",
				"fr": "Guinée-Équatoriale",
				"it": "Guinea Equatoriale",
				"ja": "赤道ギニア",
				"nl": "Equatoriaal-Guinea",
				"hr": "Ekvatorijalna Gvineja"
			},
			"population": 1222442,
			"latlng": [
				2,
				10
			],
			"demonym": "Equatorial Guinean",
			"borders": [
				"CMR",
				"GAB"
			],
			"area": 28051,
			"gini": null,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XAF",
					"name": "Central African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "GQ",
			"alpha3Code": "GNQ",
			"callingCodes": [
				"240"
			],
			"numericCode": "226"
		},
		{
			"name": "Eritrea",
			"nativeName": "ኤርትራ",
			"topLevelDomain": [
				".er"
			],
			"capital": "Asmara",
			"altSpellings": [
				"ER",
				"State of Eritrea",
				"ሃገረ ኤርትራ",
				"Dawlat Iritriyá",
				"ʾErtrā",
				"Iritriyā",
				""
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Eritrea",
				"es": "Eritrea",
				"fr": "Érythrée",
				"it": "Eritrea",
				"ja": "エリトリア",
				"nl": "Eritrea",
				"hr": "Eritreja"
			},
			"population": 5352000,
			"latlng": [
				15,
				39
			],
			"demonym": "Eritrean",
			"borders": [
				"DJI",
				"ETH",
				"SDN"
			],
			"area": 117600,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Nfk",
					"code": "ERN",
					"name": "Eritrean nakfa"
				}
			],
			"languages": [
				{
					"iso639_1": "ti",
					"iso639_2": "tir",
					"name": "Tigrinya",
					"nativeName": "ትግርኛ"
				},
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "ER",
			"alpha3Code": "ERI",
			"callingCodes": [
				"291"
			],
			"numericCode": "232"
		},
		{
			"name": "Estonia",
			"nativeName": "Eesti",
			"topLevelDomain": [
				".ee"
			],
			"capital": "Tallinn",
			"altSpellings": [
				"EE",
				"Eesti",
				"Republic of Estonia",
				"Eesti Vabariik"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Estland",
				"es": "Estonia",
				"fr": "Estonie",
				"it": "Estonia",
				"ja": "エストニア",
				"nl": "Estland",
				"hr": "Estonija"
			},
			"population": 1315944,
			"latlng": [
				59,
				26
			],
			"demonym": "Estonian",
			"borders": [
				"LVA",
				"RUS"
			],
			"area": 45227,
			"gini": 36,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "et",
					"iso639_2": "est",
					"name": "Estonian",
					"nativeName": "eesti"
				}
			],
			"alpha2Code": "EE",
			"alpha3Code": "EST",
			"callingCodes": [
				"372"
			],
			"numericCode": "233"
		},
		{
			"name": "Ethiopia",
			"nativeName": "ኢትዮጵያ",
			"topLevelDomain": [
				".et"
			],
			"capital": "Addis Ababa",
			"altSpellings": [
				"ET",
				"ʾĪtyōṗṗyā",
				"Federal Democratic Republic of Ethiopia",
				"የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Äthiopien",
				"es": "Etiopía",
				"fr": "Éthiopie",
				"it": "Etiopia",
				"ja": "エチオピア",
				"nl": "Ethiopië",
				"hr": "Etiopija"
			},
			"population": 92206005,
			"latlng": [
				8,
				38
			],
			"demonym": "Ethiopian",
			"borders": [
				"DJI",
				"ERI",
				"KEN",
				"SOM",
				"SSD",
				"SDN"
			],
			"area": 1104300,
			"gini": 29.8,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Br",
					"code": "ETB",
					"name": "Ethiopian birr"
				}
			],
			"languages": [
				{
					"iso639_1": "am",
					"iso639_2": "amh",
					"name": "Amharic",
					"nativeName": "አማርኛ"
				}
			],
			"alpha2Code": "ET",
			"alpha3Code": "ETH",
			"callingCodes": [
				"251"
			],
			"numericCode": "231"
		},
		{
			"name": "Falkland Islands (Malvinas)",
			"nativeName": "Falkland Islands",
			"topLevelDomain": [
				".fk"
			],
			"capital": "Stanley",
			"altSpellings": [
				"FK",
				"Islas Malvinas"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Falklandinseln",
				"es": "Islas Malvinas",
				"fr": "Îles Malouines",
				"it": "Isole Falkland o Isole Malvine",
				"ja": "フォークランド（マルビナス）諸島",
				"nl": "Falklandeilanden [Islas Malvinas]",
				"hr": "Falklandski Otoci"
			},
			"population": 2563,
			"latlng": [
				-51.75,
				-59
			],
			"demonym": "Falkland Islander",
			"borders": [],
			"area": 12173,
			"currencies": [
				{
					"symbol": "£",
					"code": "FKP",
					"name": "Falkland Islands pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "FK",
			"alpha3Code": "FLK",
			"callingCodes": [
				"500"
			],
			"numericCode": "238"
		},
		{
			"name": "Faroe Islands",
			"nativeName": "Føroyar",
			"topLevelDomain": [
				".fo"
			],
			"capital": "Tórshavn",
			"altSpellings": [
				"FO",
				"Føroyar",
				"Færøerne"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Färöer-Inseln",
				"es": "Islas Faroe",
				"fr": "Îles Féroé",
				"it": "Isole Far Oer",
				"ja": "フェロー諸島",
				"nl": "Faeröer",
				"hr": "Farski Otoci"
			},
			"population": 49376,
			"latlng": [
				62,
				-7
			],
			"demonym": "Faroese",
			"borders": [],
			"area": 1393,
			"currencies": [
				{
					"symbol": "kr",
					"code": "DKK",
					"name": "Danish krone"
				},
				{
					"symbol": "kr",
					"code": "(none)",
					"name": "Faroese króna"
				}
			],
			"languages": [
				{
					"iso639_1": "fo",
					"iso639_2": "fao",
					"name": "Faroese",
					"nativeName": "føroyskt"
				}
			],
			"alpha2Code": "FO",
			"alpha3Code": "FRO",
			"callingCodes": [
				"298"
			],
			"numericCode": "234"
		},
		{
			"name": "Fiji",
			"nativeName": "Fiji",
			"topLevelDomain": [
				".fj"
			],
			"capital": "Suva",
			"altSpellings": [
				"FJ",
				"Viti",
				"Republic of Fiji",
				"Matanitu ko Viti",
				"Fijī Gaṇarājya"
			],
			"region": "Oceania",
			"subregion": "Melanesia",
			"translations": {
				"de": "Fidschi",
				"es": "Fiyi",
				"fr": "Fidji",
				"it": "Figi",
				"ja": "フィジー",
				"nl": "Fiji",
				"hr": "Fiđi"
			},
			"population": 867000,
			"latlng": [
				-18,
				175
			],
			"demonym": "Fijian",
			"borders": [],
			"area": 18272,
			"gini": 42.8,
			"timezones": [
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "FJD",
					"name": "Fijian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fj",
					"iso639_2": "fij",
					"name": "Fijian",
					"nativeName": "vosa Vakaviti"
				},
				{
					"iso639_1": "hi",
					"iso639_2": "hin",
					"name": "Hindi",
					"nativeName": "हिन्दी"
				},
				{
					"iso639_1": "ur",
					"iso639_2": "urd",
					"name": "Urdu",
					"nativeName": "اردو"
				}
			],
			"alpha2Code": "FJ",
			"alpha3Code": "FJI",
			"callingCodes": [
				"679"
			],
			"numericCode": "242"
		},
		{
			"name": "Finland",
			"nativeName": "Suomi",
			"topLevelDomain": [
				".fi"
			],
			"capital": "Helsinki",
			"altSpellings": [
				"FI",
				"Suomi",
				"Republic of Finland",
				"Suomen tasavalta",
				"Republiken Finland"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Finnland",
				"es": "Finlandia",
				"fr": "Finlande",
				"it": "Finlandia",
				"ja": "フィンランド",
				"nl": "Finland",
				"hr": "Finska"
			},
			"population": 5491817,
			"latlng": [
				64,
				26
			],
			"demonym": "Finnish",
			"borders": [
				"NOR",
				"SWE",
				"RUS"
			],
			"area": 338424,
			"gini": 26.9,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "fi",
					"iso639_2": "fin",
					"name": "Finnish",
					"nativeName": "suomi"
				},
				{
					"iso639_1": "sv",
					"iso639_2": "swe",
					"name": "Swedish",
					"nativeName": "svenska"
				}
			],
			"alpha2Code": "FI",
			"alpha3Code": "FIN",
			"callingCodes": [
				"358"
			],
			"numericCode": "246"
		},
		{
			"name": "France",
			"nativeName": "France",
			"topLevelDomain": [
				".fr"
			],
			"capital": "Paris",
			"altSpellings": [
				"FR",
				"French Republic",
				"République française"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Frankreich",
				"es": "Francia",
				"fr": "France",
				"it": "Francia",
				"ja": "フランス",
				"nl": "Frankrijk",
				"hr": "Francuska"
			},
			"population": 66710000,
			"latlng": [
				46,
				2
			],
			"demonym": "French",
			"borders": [
				"AND",
				"BEL",
				"DEU",
				"ITA",
				"LUX",
				"MCO",
				"ESP",
				"CHE"
			],
			"area": 640679,
			"gini": 32.7,
			"timezones": [
				"UTC-10:00",
				"UTC-09:30",
				"UTC-09:00",
				"UTC-08:00",
				"UTC-04:00",
				"UTC-03:00",
				"UTC+01:00",
				"UTC+03:00",
				"UTC+04:00",
				"UTC+05:00",
				"UTC+11:00",
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "FR",
			"alpha3Code": "FRA",
			"callingCodes": [
				"33"
			],
			"numericCode": "250"
		},
		{
			"name": "French Guiana",
			"nativeName": "Guyane française",
			"topLevelDomain": [
				".gf"
			],
			"capital": "Cayenne",
			"altSpellings": [
				"GF",
				"Guiana",
				"Guyane"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Französisch Guyana",
				"es": "Guayana Francesa",
				"fr": "Guayane",
				"it": "Guyana francese",
				"ja": "フランス領ギアナ",
				"nl": "Frans-Guyana",
				"hr": "Francuska Gvajana"
			},
			"population": 254541,
			"latlng": [
				4,
				-53
			],
			"demonym": "",
			"borders": [
				"BRA",
				"SUR"
			],
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "GF",
			"alpha3Code": "GUF",
			"callingCodes": [
				"594"
			],
			"numericCode": "254"
		},
		{
			"name": "French Polynesia",
			"nativeName": "Polynésie française",
			"topLevelDomain": [
				".pf"
			],
			"capital": "Papeetē",
			"altSpellings": [
				"PF",
				"Polynésie française",
				"French Polynesia",
				"Pōrīnetia Farāni"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Französisch-Polynesien",
				"es": "Polinesia Francesa",
				"fr": "Polynésie française",
				"it": "Polinesia Francese",
				"ja": "フランス領ポリネシア",
				"nl": "Frans-Polynesië",
				"hr": "Francuska Polinezija"
			},
			"population": 271800,
			"latlng": [
				-15,
				-140
			],
			"demonym": "French Polynesian",
			"borders": [],
			"area": 4167,
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XPF",
					"name": "CFP franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "PF",
			"alpha3Code": "PYF",
			"callingCodes": [
				"689"
			],
			"numericCode": "258"
		},
		{
			"name": "French Southern Territories",
			"nativeName": "Territoire des Terres australes et antarctiques françaises",
			"topLevelDomain": [
				".tf"
			],
			"capital": "Port-aux-Français",
			"altSpellings": [
				"TF"
			],
			"region": "Africa",
			"subregion": "Southern Africa",
			"translations": {
				"de": "Französische Süd- und Antarktisgebiete",
				"es": "Tierras Australes y Antárticas Francesas",
				"fr": "Terres australes et antarctiques françaises",
				"it": "Territori Francesi del Sud",
				"ja": "フランス領南方・南極地域",
				"nl": "Franse Gebieden in de zuidelijke Indische Oceaan",
				"hr": "Francuski južni i antarktički teritoriji"
			},
			"population": 140,
			"latlng": [
				-49.25,
				69.167
			],
			"demonym": "French",
			"borders": [],
			"area": 7747,
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "TF",
			"alpha3Code": "ATF",
			"callingCodes": [
				""
			],
			"numericCode": "260",
			"timezones": [
				"UTC+05:00"
			]
		},
		{
			"name": "Gabon",
			"nativeName": "Gabon",
			"topLevelDomain": [
				".ga"
			],
			"capital": "Libreville",
			"altSpellings": [
				"GA",
				"Gabonese Republic",
				"République Gabonaise"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "Gabun",
				"es": "Gabón",
				"fr": "Gabon",
				"it": "Gabon",
				"ja": "ガボン",
				"nl": "Gabon",
				"hr": "Gabon"
			},
			"population": 1802278,
			"latlng": [
				-1,
				11.75
			],
			"demonym": "Gabonese",
			"borders": [
				"CMR",
				"COG",
				"GNQ"
			],
			"area": 267668,
			"gini": 41.5,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XAF",
					"name": "Central African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "GA",
			"alpha3Code": "GAB",
			"callingCodes": [
				"241"
			],
			"numericCode": "266"
		},
		{
			"name": "Gambia",
			"nativeName": "Gambia",
			"topLevelDomain": [
				".gm"
			],
			"capital": "Banjul",
			"altSpellings": [
				"GM",
				"Republic of the Gambia"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Gambia",
				"es": "Gambia",
				"fr": "Gambie",
				"it": "Gambia",
				"ja": "ガンビア",
				"nl": "Gambia",
				"hr": "Gambija"
			},
			"population": 1882450,
			"latlng": [
				13.46666666,
				-16.56666666
			],
			"demonym": "Gambian",
			"borders": [
				"SEN"
			],
			"area": 11295,
			"currencies": [
				{
					"symbol": "D",
					"code": "GMD",
					"name": "Gambian dalasi"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GM",
			"alpha3Code": "GMB",
			"callingCodes": [
				"220"
			],
			"numericCode": "270"
		},
		{
			"name": "Georgia",
			"nativeName": "საქართველო",
			"topLevelDomain": [
				".ge"
			],
			"capital": "Tbilisi",
			"altSpellings": [
				"GE",
				"Sakartvelo"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Georgien",
				"es": "Georgia",
				"fr": "Géorgie",
				"it": "Georgia",
				"ja": "グルジア",
				"nl": "Georgië",
				"hr": "Gruzija"
			},
			"population": 3720400,
			"latlng": [
				42,
				43.5
			],
			"demonym": "Georgian",
			"borders": [
				"ARM",
				"AZE",
				"RUS",
				"TUR"
			],
			"gini": 41.3,
			"area": 69700,
			"currencies": [
				{
					"code": "GEL",
					"name": "Georgian Lari",
					"symbol": "ლ"
				}
			],
			"languages": [
				{
					"iso639_1": "ka",
					"iso639_2": "kat",
					"name": "Georgian",
					"nativeName": "ქართული"
				}
			],
			"alpha2Code": "GE",
			"alpha3Code": "GEO",
			"callingCodes": [
				"995"
			],
			"numericCode": "268"
		},
		{
			"name": "Germany",
			"nativeName": "Deutschland",
			"topLevelDomain": [
				".de"
			],
			"capital": "Berlin",
			"altSpellings": [
				"DE",
				"Federal Republic of Germany",
				"Bundesrepublik Deutschland"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Deutschland",
				"es": "Alemania",
				"fr": "Allemagne",
				"it": "Germania",
				"ja": "ドイツ",
				"nl": "Duitsland",
				"hr": "Njemačka"
			},
			"population": 81770900,
			"latlng": [
				51,
				9
			],
			"demonym": "German",
			"borders": [
				"AUT",
				"BEL",
				"CZE",
				"DNK",
				"FRA",
				"LUX",
				"NLD",
				"POL",
				"CHE"
			],
			"area": 357114,
			"gini": 28.3,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				}
			],
			"alpha2Code": "DE",
			"alpha3Code": "DEU",
			"callingCodes": [
				"49"
			],
			"numericCode": "276"
		},
		{
			"name": "Ghana",
			"nativeName": "Ghana",
			"topLevelDomain": [
				".gh"
			],
			"capital": "Accra",
			"altSpellings": [
				"GH"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Ghana",
				"es": "Ghana",
				"fr": "Ghana",
				"it": "Ghana",
				"ja": "ガーナ",
				"nl": "Ghana",
				"hr": "Gana"
			},
			"population": 27670174,
			"latlng": [
				8,
				-2
			],
			"demonym": "Ghanaian",
			"borders": [
				"BFA",
				"CIV",
				"TGO"
			],
			"area": 238533,
			"gini": 42.8,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "₵",
					"code": "GHS",
					"name": "Ghanaian cedi"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GH",
			"alpha3Code": "GHA",
			"callingCodes": [
				"233"
			],
			"numericCode": "288"
		},
		{
			"name": "Gibraltar",
			"nativeName": "Gibraltar",
			"topLevelDomain": [
				".gi"
			],
			"capital": "Gibraltar",
			"altSpellings": [
				"GI"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Gibraltar",
				"es": "Gibraltar",
				"fr": "Gibraltar",
				"it": "Gibilterra",
				"ja": "ジブラルタル",
				"nl": "Gibraltar",
				"hr": "Gibraltar"
			},
			"population": 33140,
			"latlng": [
				36.13333333,
				-5.35
			],
			"demonym": "Gibraltar",
			"borders": [
				"ESP"
			],
			"area": 6,
			"currencies": [
				{
					"symbol": "£",
					"code": "GIP",
					"name": "Gibraltar pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GI",
			"alpha3Code": "GIB",
			"callingCodes": [
				"350"
			],
			"numericCode": "292"
		},
		{
			"name": "Greece",
			"nativeName": "Ελλάδα",
			"topLevelDomain": [
				".gr"
			],
			"capital": "Athens",
			"altSpellings": [
				"GR",
				"Elláda",
				"Hellenic Republic",
				"Ελληνική Δημοκρατία"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Griechenland",
				"es": "Grecia",
				"fr": "Grèce",
				"it": "Grecia",
				"ja": "ギリシャ",
				"nl": "Griekenland",
				"hr": "Grčka"
			},
			"population": 10858018,
			"latlng": [
				39,
				22
			],
			"demonym": "Greek",
			"borders": [
				"ALB",
				"BGR",
				"TUR",
				"MKD"
			],
			"area": 131990,
			"gini": 34.3,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "el",
					"iso639_2": "ell",
					"name": "Greek (modern)",
					"nativeName": "ελληνικά"
				}
			],
			"alpha2Code": "GR",
			"alpha3Code": "GRC",
			"callingCodes": [
				"30"
			],
			"numericCode": "300"
		},
		{
			"name": "Greenland",
			"nativeName": "Kalaallit Nunaat",
			"topLevelDomain": [
				".gl"
			],
			"capital": "Nuuk",
			"altSpellings": [
				"GL",
				"Grønland"
			],
			"region": "Americas",
			"subregion": "Northern America",
			"translations": {
				"de": "Grönland",
				"es": "Groenlandia",
				"fr": "Groenland",
				"it": "Groenlandia",
				"ja": "グリーンランド",
				"nl": "Groenland",
				"hr": "Grenland"
			},
			"population": 55847,
			"latlng": [
				72,
				-40
			],
			"demonym": "Greenlandic",
			"borders": [],
			"area": 2166086,
			"currencies": [
				{
					"code": "DKK",
					"name": "Danish krone",
					"symbol": "kr"
				}
			],
			"languages": [
				{
					"iso639_1": "kl",
					"iso639_2": "kal",
					"name": "Kalaallisut",
					"nativeName": "kalaallisut"
				}
			],
			"alpha2Code": "GL",
			"alpha3Code": "GRL",
			"callingCodes": [
				"299"
			],
			"numericCode": "304"
		},
		{
			"name": "Grenada",
			"nativeName": "Grenada",
			"topLevelDomain": [
				".gd"
			],
			"capital": "St. George's",
			"altSpellings": [
				"GD"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Grenada",
				"es": "Grenada",
				"fr": "Grenade",
				"it": "Grenada",
				"ja": "グレナダ",
				"nl": "Grenada",
				"hr": "Grenada"
			},
			"population": 103328,
			"latlng": [
				12.11666666,
				-61.66666666
			],
			"demonym": "Grenadian",
			"borders": [],
			"area": 344,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GD",
			"alpha3Code": "GRD",
			"callingCodes": [
				"1473"
			],
			"numericCode": "308"
		},
		{
			"name": "Guadeloupe",
			"nativeName": "Guadeloupe",
			"topLevelDomain": [
				".gp"
			],
			"capital": "Basse-Terre",
			"altSpellings": [
				"GP",
				"Gwadloup"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Guadeloupe",
				"es": "Guadalupe",
				"fr": "Guadeloupe",
				"it": "Guadeloupa",
				"ja": "グアドループ",
				"nl": "Guadeloupe",
				"hr": "Gvadalupa"
			},
			"population": 400132,
			"latlng": [
				16.25,
				-61.583333
			],
			"demonym": "Guadeloupian",
			"borders": [],
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "GP",
			"alpha3Code": "GLP",
			"callingCodes": [
				"590"
			],
			"numericCode": "312"
		},
		{
			"name": "Guam",
			"nativeName": "Guam",
			"topLevelDomain": [
				".gu"
			],
			"capital": "Hagåtña",
			"altSpellings": [
				"GU",
				"Guåhån"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Guam",
				"es": "Guam",
				"fr": "Guam",
				"it": "Guam",
				"ja": "グアム",
				"nl": "Guam",
				"hr": "Guam"
			},
			"population": 184200,
			"latlng": [
				13.46666666,
				144.78333333
			],
			"demonym": "Guamanian",
			"borders": [],
			"area": 549,
			"currencies": [
				{
					"code": "USD",
					"name": "United States dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ch",
					"iso639_2": "cha",
					"name": "Chamorro",
					"nativeName": "Chamoru"
				},
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "GU",
			"alpha3Code": "GUM",
			"callingCodes": [
				"1671"
			],
			"numericCode": "316"
		},
		{
			"name": "Guatemala",
			"nativeName": "Guatemala",
			"topLevelDomain": [
				".gt"
			],
			"capital": "Guatemala City",
			"altSpellings": [
				"GT"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Guatemala",
				"es": "Guatemala",
				"fr": "Guatemala",
				"it": "Guatemala",
				"ja": "グアテマラ",
				"nl": "Guatemala",
				"hr": "Gvatemala"
			},
			"population": 16176133,
			"latlng": [
				15.5,
				-90.25
			],
			"demonym": "Guatemalan",
			"borders": [
				"BLZ",
				"SLV",
				"HND",
				"MEX"
			],
			"area": 108889,
			"gini": 55.9,
			"timezones": [
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "Q",
					"code": "GTQ",
					"name": "Guatemalan quetzal"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "GT",
			"alpha3Code": "GTM",
			"callingCodes": [
				"502"
			],
			"numericCode": "320"
		},
		{
			"name": "Guernsey",
			"nativeName": "Guernsey",
			"topLevelDomain": [
				".gg"
			],
			"capital": "St. Peter Port",
			"altSpellings": [
				"GG",
				"Bailiwick of Guernsey",
				"Bailliage de Guernesey"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Guernsey",
				"es": "Guernsey",
				"fr": "Guernesey",
				"it": "Guernsey",
				"ja": "ガーンジー",
				"nl": "Guernsey",
				"hr": "Guernsey"
			},
			"population": 62999,
			"latlng": [
				49.46666666,
				-2.58333333
			],
			"demonym": "Channel Islander",
			"borders": [],
			"area": 78,
			"currencies": [
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				},
				{
					"symbol": "£",
					"code": "(none)",
					"name": "Guernsey pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "GG",
			"alpha3Code": "GGY",
			"callingCodes": [
				"44"
			],
			"numericCode": "831"
		},
		{
			"name": "Guinea",
			"nativeName": "Guinée",
			"topLevelDomain": [
				".gn"
			],
			"capital": "Conakry",
			"altSpellings": [
				"GN",
				"Republic of Guinea",
				"République de Guinée"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Guinea",
				"es": "Guinea",
				"fr": "Guinée",
				"it": "Guinea",
				"ja": "ギニア",
				"nl": "Guinee",
				"hr": "Gvineja"
			},
			"population": 12947000,
			"latlng": [
				11,
				-10
			],
			"demonym": "Guinean",
			"borders": [
				"CIV",
				"GNB",
				"LBR",
				"MLI",
				"SEN",
				"SLE"
			],
			"area": 245857,
			"gini": 39.4,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "GNF",
					"name": "Guinean franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ff",
					"iso639_2": "ful",
					"name": "Fula",
					"nativeName": "Fulfulde"
				}
			],
			"alpha2Code": "GN",
			"alpha3Code": "GIN",
			"callingCodes": [
				"224"
			],
			"numericCode": "324"
		},
		{
			"name": "Guinea-Bissau",
			"nativeName": "Guiné-Bissau",
			"topLevelDomain": [
				".gw"
			],
			"capital": "Bissau",
			"altSpellings": [
				"GW",
				"Republic of Guinea-Bissau",
				"República da Guiné-Bissau"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Guinea-Bissau",
				"es": "Guinea-Bisáu",
				"fr": "Guinée-Bissau",
				"it": "Guinea-Bissau",
				"ja": "ギニアビサウ",
				"nl": "Guinee-Bissau",
				"hr": "Gvineja Bisau"
			},
			"population": 1547777,
			"latlng": [
				12,
				-15
			],
			"demonym": "Guinea-Bissauan",
			"borders": [
				"GIN",
				"SEN"
			],
			"area": 36125,
			"gini": 35.5,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "GW",
			"alpha3Code": "GNB",
			"callingCodes": [
				"245"
			],
			"numericCode": "624"
		},
		{
			"name": "Guyana",
			"nativeName": "Guyana",
			"topLevelDomain": [
				".gy"
			],
			"capital": "Georgetown",
			"altSpellings": [
				"GY",
				"Co-operative Republic of Guyana"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Guyana",
				"es": "Guyana",
				"fr": "Guyane",
				"it": "Guyana",
				"ja": "ガイアナ",
				"nl": "Guyana",
				"hr": "Gvajana"
			},
			"population": 746900,
			"latlng": [
				5,
				-59
			],
			"demonym": "Guyanese",
			"borders": [
				"BRA",
				"SUR",
				"VEN"
			],
			"area": 214969,
			"gini": 44.5,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "GYD",
					"name": "Guyanese dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GY",
			"alpha3Code": "GUY",
			"callingCodes": [
				"592"
			],
			"numericCode": "328"
		},
		{
			"name": "Haiti",
			"nativeName": "Haïti",
			"topLevelDomain": [
				".ht"
			],
			"capital": "Port-au-Prince",
			"altSpellings": [
				"HT",
				"Republic of Haiti",
				"République d'Haïti",
				"Repiblik Ayiti"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Haiti",
				"es": "Haiti",
				"fr": "Haïti",
				"it": "Haiti",
				"ja": "ハイチ",
				"nl": "Haïti",
				"hr": "Haiti"
			},
			"population": 11078033,
			"latlng": [
				19,
				-72.41666666
			],
			"demonym": "Haitian",
			"borders": [
				"DOM"
			],
			"area": 27750,
			"gini": 59.2,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "G",
					"code": "HTG",
					"name": "Haitian gourde"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "ht",
					"iso639_2": "hat",
					"name": "Haitian",
					"nativeName": "Kreyòl ayisyen"
				}
			],
			"alpha2Code": "HT",
			"alpha3Code": "HTI",
			"callingCodes": [
				"509"
			],
			"numericCode": "332"
		},
		{
			"name": "Heard Island and McDonald Islands",
			"nativeName": "Heard Island and McDonald Islands",
			"topLevelDomain": [
				".hm",
				".aq"
			],
			"capital": "",
			"altSpellings": [
				"HM"
			],
			"region": "",
			"subregion": "",
			"translations": {
				"de": "Heard und die McDonaldinseln",
				"es": "Islas Heard y McDonald",
				"fr": "Îles Heard-et-MacDonald",
				"it": "Isole Heard e McDonald",
				"ja": "ハード島とマクドナルド諸島",
				"nl": "Heard- en McDonaldeilanden",
				"hr": "Otok Heard i otočje McDonald"
			},
			"population": 0,
			"latlng": [
				-53.1,
				72.51666666
			],
			"demonym": "Heard and McDonald Islander",
			"borders": [],
			"area": 412,
			"currencies": [
				{
					"code": "AUD",
					"name": "Australian dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "HM",
			"alpha3Code": "HMD",
			"callingCodes": [
				""
			],
			"numericCode": "334",
			"timezones": [
				"UTC+05:00"
			]
		},
		{
			"name": "Holy See",
			"nativeName": "Sancta Sedes",
			"topLevelDomain": [
				".va"
			],
			"alpha2Code": "VA",
			"alpha3Code": "VAT",
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"callingCodes": [
				"379"
			],
			"capital": "Rome",
			"altSpellings": [
				"Sancta Sedes",
				"Vatican",
				"The Vatican"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"languages": [
				{
					"iso639_1": "la",
					"iso639_2": "lat",
					"name": "Latin",
					"nativeName": "latine"
				},
				{
					"iso639_1": "it",
					"iso639_2": "ita",
					"name": "Italian",
					"nativeName": "italiano"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				}
			],
			"translations": {
				"de": "Heiliger Stuhl",
				"es": "Santa Sede",
				"fr": "voir Saint",
				"it": "Santa Sede",
				"ja": "聖座",
				"nl": "Heilige Stoel",
				"hr": "Sveta Stolica"
			},
			"population": 451,
			"latlng": [
				41.9,
				12.45
			],
			"demonym": "",
			"borders": [
				"ITA"
			],
			"area": 0.44,
			"gini": null,
			"timezones": [
				"UTC+01:00"
			],
			"numericCode": "336"
		},
		{
			"name": "Honduras",
			"nativeName": "Honduras",
			"topLevelDomain": [
				".hn"
			],
			"capital": "Tegucigalpa",
			"altSpellings": [
				"HN",
				"Republic of Honduras",
				"República de Honduras"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Honduras",
				"es": "Honduras",
				"fr": "Honduras",
				"it": "Honduras",
				"ja": "ホンジュラス",
				"nl": "Honduras",
				"hr": "Honduras"
			},
			"population": 8576532,
			"latlng": [
				15,
				-86.5
			],
			"demonym": "Honduran",
			"borders": [
				"GTM",
				"SLV",
				"NIC"
			],
			"area": 112492,
			"gini": 57,
			"timezones": [
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "L",
					"code": "HNL",
					"name": "Honduran lempira"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "HN",
			"alpha3Code": "HND",
			"callingCodes": [
				"504"
			],
			"numericCode": "340"
		},
		{
			"name": "Hong Kong",
			"nativeName": "香港",
			"topLevelDomain": [
				".hk"
			],
			"capital": "City of Victoria",
			"altSpellings": [
				"HK",
				"香港"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Hong Kong",
				"es": "Hong Kong",
				"fr": "Hong Kong",
				"it": "Hong Kong",
				"ja": "香港",
				"nl": "Hongkong",
				"hr": "Hong Kong"
			},
			"population": 7324300,
			"latlng": [
				22.25,
				114.16666666
			],
			"demonym": "Chinese",
			"borders": [
				"CHN"
			],
			"area": 1104,
			"gini": 53.3,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "HKD",
					"name": "Hong Kong dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "zh",
					"iso639_2": "zho",
					"name": "Chinese",
					"nativeName": "中文 (Zhōngwén)"
				}
			],
			"alpha2Code": "HK",
			"alpha3Code": "HKG",
			"callingCodes": [
				"852"
			],
			"numericCode": "344"
		},
		{
			"name": "Hungary",
			"nativeName": "Magyarország",
			"topLevelDomain": [
				".hu"
			],
			"capital": "Budapest",
			"altSpellings": [
				"HU"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Ungarn",
				"es": "Hungría",
				"fr": "Hongrie",
				"it": "Ungheria",
				"ja": "ハンガリー",
				"nl": "Hongarije",
				"hr": "Mađarska"
			},
			"population": 9823000,
			"latlng": [
				47,
				20
			],
			"demonym": "Hungarian",
			"borders": [
				"AUT",
				"HRV",
				"ROU",
				"SRB",
				"SVK",
				"SVN",
				"UKR"
			],
			"area": 93028,
			"gini": 31.2,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Ft",
					"code": "HUF",
					"name": "Hungarian forint"
				}
			],
			"languages": [
				{
					"iso639_1": "hu",
					"iso639_2": "hun",
					"name": "Hungarian",
					"nativeName": "magyar"
				}
			],
			"alpha2Code": "HU",
			"alpha3Code": "HUN",
			"callingCodes": [
				"36"
			],
			"numericCode": "348"
		},
		{
			"name": "Iceland",
			"nativeName": "Ísland",
			"topLevelDomain": [
				".is"
			],
			"capital": "Reykjavík",
			"altSpellings": [
				"IS",
				"Island",
				"Republic of Iceland",
				"Lýðveldið Ísland"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Island",
				"es": "Islandia",
				"fr": "Islande",
				"it": "Islanda",
				"ja": "アイスランド",
				"nl": "IJsland",
				"hr": "Island"
			},
			"population": 334300,
			"latlng": [
				65,
				-18
			],
			"demonym": "Icelander",
			"borders": [],
			"area": 103000,
			"gini": null,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "kr",
					"code": "ISK",
					"name": "Icelandic króna"
				}
			],
			"languages": [
				{
					"iso639_1": "is",
					"iso639_2": "isl",
					"name": "Icelandic",
					"nativeName": "Íslenska"
				}
			],
			"alpha2Code": "IS",
			"alpha3Code": "ISL",
			"callingCodes": [
				"354"
			],
			"numericCode": "352"
		},
		{
			"name": "India",
			"nativeName": "भारत",
			"topLevelDomain": [
				".in"
			],
			"capital": "New Delhi",
			"altSpellings": [
				"IN",
				"Bhārat",
				"Republic of India",
				"Bharat Ganrajya"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Indien",
				"es": "India",
				"fr": "Inde",
				"it": "India",
				"ja": "インド",
				"nl": "India",
				"hr": "Indija"
			},
			"population": 1295210000,
			"latlng": [
				20,
				77
			],
			"demonym": "Indian",
			"borders": [
				"AFG",
				"BGD",
				"BTN",
				"MMR",
				"CHN",
				"NPL",
				"PAK",
				"LKA"
			],
			"area": 3287590,
			"gini": 33.4,
			"timezones": [
				"UTC+05:30"
			],
			"currencies": [
				{
					"symbol": "₹",
					"code": "INR",
					"name": "Indian rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "hi",
					"iso639_2": "hin",
					"name": "Hindi",
					"nativeName": "हिन्दी"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "IN",
			"alpha3Code": "IND",
			"callingCodes": [
				"91"
			],
			"numericCode": "356"
		},
		{
			"name": "Indonesia",
			"nativeName": "Indonesia",
			"topLevelDomain": [
				".id"
			],
			"capital": "Jakarta",
			"altSpellings": [
				"ID",
				"Republic of Indonesia",
				"Republik Indonesia"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Indonésie",
				"nl": "Indonesië",
				"de": "Indonesien",
				"it": "Indonesia",
				"ja": "インドネシア",
				"es": "Indonesia",
				"hr": "Indonezija"
			},
			"population": 258705000,
			"latlng": [
				-5,
				120
			],
			"demonym": "Indonesian",
			"borders": [
				"TLS",
				"MYS",
				"PNG"
			],
			"area": 1904569,
			"gini": 34,
			"timezones": [
				"UTC+07:00",
				"UTC+08:00",
				"UTC+09:00"
			],
			"currencies": [
				{
					"symbol": "Rp",
					"code": "IDR",
					"name": "Indonesian rupiah"
				}
			],
			"languages": [
				{
					"iso639_1": "id",
					"iso639_2": "ind",
					"name": "Indonesian",
					"nativeName": "Bahasa Indonesia"
				}
			],
			"alpha2Code": "ID",
			"alpha3Code": "IDN",
			"callingCodes": [
				"62"
			],
			"numericCode": "360"
		},
		{
			"name": "Côte d'Ivoire",
			"nativeName": "Côte d'Ivoire",
			"topLevelDomain": [
				".ci"
			],
			"capital": "Yamoussoukro",
			"altSpellings": [
				"CI",
				"Ivory Coast",
				"Republic of Côte d'Ivoire",
				"République de Côte d'Ivoire"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Elfenbeinküste",
				"es": "Costa de Marfil",
				"fr": "Côte d'Ivoire",
				"it": "Costa D'Avorio",
				"ja": "コートジボワール",
				"nl": "Ivoorkust",
				"hr": "Obala Bjelokosti"
			},
			"population": 22671331,
			"latlng": [
				8,
				-5
			],
			"demonym": "Ivorian",
			"borders": [
				"BFA",
				"GHA",
				"GIN",
				"LBR",
				"MLI"
			],
			"area": 322463,
			"gini": 41.5,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "CI",
			"alpha3Code": "CIV",
			"callingCodes": [
				"225"
			],
			"numericCode": "384"
		},
		{
			"name": "Iran (Islamic Republic of)",
			"nativeName": "ایران",
			"topLevelDomain": [
				".ir"
			],
			"capital": "Tehran",
			"altSpellings": [
				"IR",
				"Islamic Republic of Iran",
				"Jomhuri-ye Eslāmi-ye Irān"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Iran",
				"es": "Iran",
				"fr": "Iran",
				"ja": "イラン・イスラム共和国",
				"nl": "Iran",
				"hr": "Iran"
			},
			"population": 79369900,
			"latlng": [
				32,
				53
			],
			"demonym": "Iranian",
			"borders": [
				"AFG",
				"ARM",
				"AZE",
				"IRQ",
				"PAK",
				"TUR",
				"TKM"
			],
			"area": 1648195,
			"gini": 38.3,
			"timezones": [
				"UTC+03:30"
			],
			"currencies": [
				{
					"symbol": "﷼",
					"code": "IRR",
					"name": "Iranian rial"
				}
			],
			"languages": [
				{
					"iso639_1": "fa",
					"iso639_2": "fas",
					"name": "Persian (Farsi)",
					"nativeName": "فارسی"
				}
			],
			"alpha2Code": "IR",
			"alpha3Code": "IRN",
			"callingCodes": [
				"98"
			],
			"numericCode": "364"
		},
		{
			"name": "Iraq",
			"nativeName": "العراق",
			"topLevelDomain": [
				".iq"
			],
			"capital": "Baghdad",
			"altSpellings": [
				"IQ",
				"Republic of Iraq",
				"Jumhūriyyat al-‘Irāq"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Irak",
				"es": "Irak",
				"fr": "Irak",
				"it": "Iraq",
				"ja": "イラク",
				"nl": "Irak",
				"hr": "Irak"
			},
			"population": 37883543,
			"latlng": [
				33,
				44
			],
			"demonym": "Iraqi",
			"borders": [
				"IRN",
				"JOR",
				"KWT",
				"SAU",
				"SYR",
				"TUR"
			],
			"area": 438317,
			"gini": 30.9,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "ع.د",
					"code": "IQD",
					"name": "Iraqi dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				},
				{
					"iso639_1": "ku",
					"iso639_2": "kur",
					"name": "Kurdish",
					"nativeName": "Kurdî"
				}
			],
			"alpha2Code": "IQ",
			"alpha3Code": "IRQ",
			"callingCodes": [
				"964"
			],
			"numericCode": "368"
		},
		{
			"name": "Ireland",
			"nativeName": "Éire",
			"topLevelDomain": [
				".ie"
			],
			"capital": "Dublin",
			"altSpellings": [
				"IE",
				"Éire",
				"Republic of Ireland",
				"Poblacht na hÉireann"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Irland",
				"es": "Irlanda",
				"fr": "Irlande",
				"it": "Irlanda",
				"ja": "アイルランド",
				"nl": "Ierland",
				"hr": "Irska"
			},
			"population": 6378000,
			"latlng": [
				53,
				-8
			],
			"demonym": "Irish",
			"borders": [
				"GBR"
			],
			"area": 70273,
			"gini": 34.3,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "ga",
					"iso639_2": "gle",
					"name": "Irish",
					"nativeName": "Gaeilge"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "IE",
			"alpha3Code": "IRL",
			"callingCodes": [
				"353"
			],
			"numericCode": "372"
		},
		{
			"name": "Isle of Man",
			"nativeName": "Isle of Man",
			"topLevelDomain": [
				".im"
			],
			"capital": "Douglas",
			"altSpellings": [
				"IM",
				"Ellan Vannin",
				"Mann",
				"Mannin"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Insel Man",
				"es": "Isla de Man",
				"fr": "Île de Man",
				"it": "Isola di Man",
				"ja": "マン島",
				"nl": "Isle of Man",
				"hr": "Otok Man"
			},
			"population": 84497,
			"latlng": [
				54.25,
				-4.5
			],
			"demonym": "Manx",
			"borders": [],
			"area": 572,
			"currencies": [
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				},
				{
					"symbol": "£",
					"code": "IMP[G]",
					"name": "Manx pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "gv",
					"iso639_2": "glv",
					"name": "Manx",
					"nativeName": "Gaelg"
				}
			],
			"alpha2Code": "IM",
			"alpha3Code": "IMN",
			"callingCodes": [
				"44"
			],
			"numericCode": "833"
		},
		{
			"name": "Israel",
			"nativeName": "יִשְׂרָאֵל",
			"topLevelDomain": [
				".il"
			],
			"capital": "Jerusalem",
			"altSpellings": [
				"IL",
				"State of Israel",
				"Medīnat Yisrā'el"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Israel",
				"es": "Israel",
				"fr": "Israël",
				"it": "Israele",
				"ja": "イスラエル",
				"nl": "Israël",
				"hr": "Izrael"
			},
			"population": 8527400,
			"latlng": [
				31.5,
				34.75
			],
			"demonym": "Israeli",
			"borders": [
				"EGY",
				"JOR",
				"LBN",
				"SYR"
			],
			"area": 20770,
			"gini": 39.2,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "₪",
					"code": "ILS",
					"name": "Israeli new shekel"
				}
			],
			"languages": [
				{
					"iso639_1": "he",
					"iso639_2": "heb",
					"name": "Hebrew (modern)",
					"nativeName": "עברית"
				},
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "IL",
			"alpha3Code": "ISR",
			"callingCodes": [
				"972"
			],
			"numericCode": "376"
		},
		{
			"name": "Italy",
			"nativeName": "Italia",
			"topLevelDomain": [
				".it"
			],
			"capital": "Rome",
			"altSpellings": [
				"IT",
				"Italian Republic",
				"Repubblica italiana"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Italien",
				"es": "Italia",
				"fr": "Italie",
				"it": "Italia",
				"ja": "イタリア",
				"nl": "Italië",
				"hr": "Italija"
			},
			"population": 60665551,
			"latlng": [
				42.83333333,
				12.83333333
			],
			"demonym": "Italian",
			"borders": [
				"AUT",
				"FRA",
				"SMR",
				"SVN",
				"CHE",
				"VAT"
			],
			"area": 301336,
			"gini": 36,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "it",
					"iso639_2": "ita",
					"name": "Italian",
					"nativeName": "italiano"
				}
			],
			"alpha2Code": "IT",
			"alpha3Code": "ITA",
			"callingCodes": [
				"39"
			],
			"numericCode": "380"
		},
		{
			"name": "Jamaica",
			"nativeName": "Jamaica",
			"topLevelDomain": [
				".jm"
			],
			"capital": "Kingston",
			"altSpellings": [
				"JM"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Jamaika",
				"es": "Jamaica",
				"fr": "Jamaïque",
				"it": "Giamaica",
				"ja": "ジャマイカ",
				"nl": "Jamaica",
				"hr": "Jamajka"
			},
			"population": 2723246,
			"latlng": [
				18.25,
				-77.5
			],
			"demonym": "Jamaican",
			"borders": [],
			"area": 10991,
			"gini": 45.5,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "JMD",
					"name": "Jamaican dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "JM",
			"alpha3Code": "JAM",
			"callingCodes": [
				"1876"
			],
			"numericCode": "388"
		},
		{
			"name": "Japan",
			"nativeName": "日本",
			"topLevelDomain": [
				".jp"
			],
			"capital": "Tokyo",
			"altSpellings": [
				"JP",
				"Nippon",
				"Nihon"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Japan",
				"es": "Japón",
				"fr": "Japon",
				"it": "Giappone",
				"ja": "日本",
				"nl": "Japan",
				"hr": "Japan"
			},
			"population": 126960000,
			"latlng": [
				36,
				138
			],
			"demonym": "Japanese",
			"borders": [],
			"area": 377930,
			"gini": 38.1,
			"timezones": [
				"UTC+09:00"
			],
			"currencies": [
				{
					"symbol": "¥",
					"code": "JPY",
					"name": "Japanese yen"
				}
			],
			"languages": [
				{
					"iso639_1": "ja",
					"iso639_2": "jpn",
					"name": "Japanese",
					"nativeName": "日本語 (にほんご)"
				}
			],
			"alpha2Code": "JP",
			"alpha3Code": "JPN",
			"callingCodes": [
				"81"
			],
			"numericCode": "392"
		},
		{
			"name": "Jersey",
			"nativeName": "Jersey",
			"topLevelDomain": [
				".je"
			],
			"capital": "Saint Helier",
			"altSpellings": [
				"JE",
				"Bailiwick of Jersey",
				"Bailliage de Jersey",
				"Bailliage dé Jèrri"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Jersey",
				"es": "Jersey",
				"fr": "Jersey",
				"it": "Isola di Jersey",
				"ja": "ジャージー",
				"nl": "Jersey",
				"hr": "Jersey"
			},
			"population": 100800,
			"latlng": [
				49.25,
				-2.16666666
			],
			"demonym": "Channel Islander",
			"borders": [],
			"area": 116,
			"currencies": [
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				},
				{
					"symbol": "£",
					"code": "JEP[G]",
					"name": "Jersey pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "JE",
			"alpha3Code": "JEY",
			"callingCodes": [
				"44"
			],
			"numericCode": "832"
		},
		{
			"name": "Jordan",
			"nativeName": "الأردن",
			"topLevelDomain": [
				".jo"
			],
			"capital": "Amman",
			"altSpellings": [
				"JO",
				"Hashemite Kingdom of Jordan",
				"al-Mamlakah al-Urdunīyah al-Hāshimīyah"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Jordanien",
				"es": "Jordania",
				"fr": "Jordanie",
				"it": "Giordania",
				"ja": "ヨルダン",
				"nl": "Jordanië",
				"hr": "Jordan"
			},
			"population": 9531712,
			"latlng": [
				31,
				36
			],
			"demonym": "Jordanian",
			"borders": [
				"IRQ",
				"ISR",
				"SAU",
				"SYR"
			],
			"area": 89342,
			"gini": 35.4,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "د.ا",
					"code": "JOD",
					"name": "Jordanian dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "JO",
			"alpha3Code": "JOR",
			"callingCodes": [
				"962"
			],
			"numericCode": "400"
		},
		{
			"name": "Kazakhstan",
			"nativeName": "Қазақстан",
			"topLevelDomain": [
				".kz",
				".қаз"
			],
			"capital": "Astana",
			"altSpellings": [
				"KZ",
				"Qazaqstan",
				"Казахстан",
				"Republic of Kazakhstan",
				"Қазақстан Республикасы",
				"Qazaqstan Respublïkası",
				"Республика Казахстан",
				"Respublika Kazakhstan"
			],
			"region": "Asia",
			"subregion": "Central Asia",
			"translations": {
				"de": "Kasachstan",
				"es": "Kazajistán",
				"fr": "Kazakhstan",
				"it": "Kazakistan",
				"ja": "カザフスタン",
				"nl": "Kazachstan",
				"hr": "Kazahstan"
			},
			"population": 17753200,
			"latlng": [
				48,
				68
			],
			"demonym": "Kazakhstani",
			"borders": [
				"CHN",
				"KGZ",
				"RUS",
				"TKM",
				"UZB"
			],
			"area": 2724900,
			"gini": 29,
			"timezones": [
				"UTC+05:00",
				"UTC+06:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "KZT",
					"name": "Kazakhstani tenge"
				}
			],
			"languages": [
				{
					"iso639_1": "kk",
					"iso639_2": "kaz",
					"name": "Kazakh",
					"nativeName": "қазақ тілі"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "KZ",
			"alpha3Code": "KAZ",
			"callingCodes": [
				"76",
				"77"
			],
			"numericCode": "398"
		},
		{
			"name": "Kenya",
			"nativeName": "Kenya",
			"topLevelDomain": [
				".ke"
			],
			"capital": "Nairobi",
			"altSpellings": [
				"KE",
				"Republic of Kenya",
				"Jamhuri ya Kenya"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Kenia",
				"es": "Kenia",
				"fr": "Kenya",
				"it": "Kenya",
				"ja": "ケニア",
				"nl": "Kenia",
				"hr": "Kenija"
			},
			"population": 47251000,
			"latlng": [
				1,
				38
			],
			"demonym": "Kenyan",
			"borders": [
				"ETH",
				"SOM",
				"SSD",
				"TZA",
				"UGA"
			],
			"area": 580367,
			"gini": 47.7,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Sh",
					"code": "KES",
					"name": "Kenyan shilling"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "sw",
					"iso639_2": "swa",
					"name": "Swahili",
					"nativeName": "Kiswahili"
				}
			],
			"alpha2Code": "KE",
			"alpha3Code": "KEN",
			"callingCodes": [
				"254"
			],
			"numericCode": "404"
		},
		{
			"name": "Kiribati",
			"nativeName": "Kiribati",
			"topLevelDomain": [
				".ki"
			],
			"capital": "South Tarawa",
			"altSpellings": [
				"KI",
				"Republic of Kiribati",
				"Ribaberiki Kiribati"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Kiribati",
				"es": "Kiribati",
				"fr": "Kiribati",
				"it": "Kiribati",
				"ja": "キリバス",
				"nl": "Kiribati",
				"hr": "Kiribati"
			},
			"population": 113400,
			"latlng": [
				1.41666666,
				173
			],
			"demonym": "I-Kiribati",
			"borders": [],
			"area": 811,
			"timezones": [
				"UTC+12:00",
				"UTC+13:00",
				"UTC+14:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "AUD",
					"name": "Australian dollar"
				},
				{
					"symbol": "$",
					"code": "(none)",
					"name": "Kiribati dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "KI",
			"alpha3Code": "KIR",
			"callingCodes": [
				"686"
			],
			"numericCode": "296"
		},
		{
			"name": "Kuwait",
			"nativeName": "الكويت",
			"topLevelDomain": [
				".kw"
			],
			"capital": "Kuwait City",
			"altSpellings": [
				"KW",
				"State of Kuwait",
				"Dawlat al-Kuwait"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Kuwait",
				"es": "Kuwait",
				"fr": "Koweït",
				"it": "Kuwait",
				"ja": "クウェート",
				"nl": "Koeweit",
				"hr": "Kuvajt"
			},
			"population": 4183658,
			"latlng": [
				29.5,
				45.75
			],
			"demonym": "Kuwaiti",
			"borders": [
				"IRN",
				"SAU"
			],
			"area": 17818,
			"gini": null,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "د.ك",
					"code": "KWD",
					"name": "Kuwaiti dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "KW",
			"alpha3Code": "KWT",
			"callingCodes": [
				"965"
			],
			"numericCode": "414"
		},
		{
			"name": "Kyrgyzstan",
			"nativeName": "Кыргызстан",
			"topLevelDomain": [
				".kg"
			],
			"capital": "Bishkek",
			"altSpellings": [
				"KG",
				"Киргизия",
				"Kyrgyz Republic",
				"Кыргыз Республикасы",
				"Kyrgyz Respublikasy"
			],
			"region": "Asia",
			"subregion": "Central Asia",
			"translations": {
				"de": "Kirgisistan",
				"es": "Kirguizistán",
				"fr": "Kirghizistan",
				"it": "Kirghizistan",
				"ja": "キルギス",
				"nl": "Kirgizië",
				"hr": "Kirgistan"
			},
			"population": 6047800,
			"latlng": [
				41,
				75
			],
			"demonym": "Kirghiz",
			"borders": [
				"CHN",
				"KAZ",
				"TJK",
				"UZB"
			],
			"area": 199951,
			"gini": 36.2,
			"timezones": [
				"UTC+06:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "KGS",
					"name": "Kyrgyzstani som"
				}
			],
			"languages": [
				{
					"iso639_1": "ky",
					"iso639_2": "kir",
					"name": "Kyrgyz",
					"nativeName": "Кыргызча"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "KG",
			"alpha3Code": "KGZ",
			"callingCodes": [
				"996"
			],
			"numericCode": "417"
		},
		{
			"name": "Lao People's Democratic Republic",
			"nativeName": "ສປປລາວ",
			"topLevelDomain": [
				".la"
			],
			"capital": "Vientiane",
			"altSpellings": [
				"LA",
				"Lao",
				"Lao People's Democratic Republic",
				"Sathalanalat Paxathipatai Paxaxon Lao"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Laos",
				"nl": "Laos",
				"de": "Laos",
				"it": "Laos",
				"ja": "ラオス人民民主共和国",
				"es": "Laos",
				"hr": "Laos"
			},
			"population": 6492400,
			"latlng": [
				18,
				105
			],
			"demonym": "Laotian",
			"borders": [
				"MMR",
				"KHM",
				"CHN",
				"THA",
				"VNM"
			],
			"area": 236800,
			"gini": 36.7,
			"timezones": [
				"UTC+07:00"
			],
			"currencies": [
				{
					"symbol": "₭",
					"code": "LAK",
					"name": "Lao kip"
				}
			],
			"languages": [
				{
					"iso639_1": "lo",
					"iso639_2": "lao",
					"name": "Lao",
					"nativeName": "ພາສາລາວ"
				}
			],
			"alpha2Code": "LA",
			"alpha3Code": "LAO",
			"callingCodes": [
				"856"
			],
			"numericCode": "418"
		},
		{
			"name": "Latvia",
			"nativeName": "Latvija",
			"topLevelDomain": [
				".lv"
			],
			"capital": "Riga",
			"altSpellings": [
				"LV",
				"Republic of Latvia",
				"Latvijas Republika"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Lettland",
				"es": "Letonia",
				"fr": "Lettonie",
				"it": "Lettonia",
				"ja": "ラトビア",
				"nl": "Letland",
				"hr": "Latvija"
			},
			"population": 1961600,
			"latlng": [
				57,
				25
			],
			"demonym": "Latvian",
			"borders": [
				"BLR",
				"EST",
				"LTU",
				"RUS"
			],
			"area": 64559,
			"gini": 36.6,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "lv",
					"iso639_2": "lav",
					"name": "Latvian",
					"nativeName": "latviešu valoda"
				}
			],
			"alpha2Code": "LV",
			"alpha3Code": "LVA",
			"callingCodes": [
				"371"
			],
			"numericCode": "428"
		},
		{
			"name": "Lebanon",
			"nativeName": "لبنان",
			"topLevelDomain": [
				".lb"
			],
			"capital": "Beirut",
			"altSpellings": [
				"LB",
				"Lebanese Republic",
				"Al-Jumhūrīyah Al-Libnānīyah"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Libanon",
				"es": "Líbano",
				"fr": "Liban",
				"it": "Libano",
				"ja": "レバノン",
				"nl": "Libanon",
				"hr": "Libanon"
			},
			"population": 5988000,
			"latlng": [
				33.83333333,
				35.83333333
			],
			"demonym": "Lebanese",
			"borders": [
				"ISR",
				"SYR"
			],
			"area": 10452,
			"gini": null,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "ل.ل",
					"code": "LBP",
					"name": "Lebanese pound"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "LB",
			"alpha3Code": "LBN",
			"callingCodes": [
				"961"
			],
			"numericCode": "422"
		},
		{
			"name": "Lesotho",
			"nativeName": "Lesotho",
			"topLevelDomain": [
				".ls"
			],
			"capital": "Maseru",
			"altSpellings": [
				"LS",
				"Kingdom of Lesotho",
				"Muso oa Lesotho"
			],
			"region": "Africa",
			"subregion": "Southern Africa",
			"translations": {
				"de": "Lesotho",
				"es": "Lesotho",
				"fr": "Lesotho",
				"it": "Lesotho",
				"ja": "レソト",
				"nl": "Lesotho",
				"hr": "Lesoto"
			},
			"population": 1894194,
			"latlng": [
				-29.5,
				28.5
			],
			"demonym": "Mosotho",
			"borders": [
				"ZAF"
			],
			"area": 30355,
			"gini": 52.5,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "L",
					"code": "LSL",
					"name": "Lesotho loti"
				},
				{
					"symbol": "R",
					"code": "ZAR",
					"name": "South African rand"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "st",
					"iso639_2": "sot",
					"name": "Southern Sotho",
					"nativeName": "Sesotho"
				}
			],
			"alpha2Code": "LS",
			"alpha3Code": "LSO",
			"callingCodes": [
				"266"
			],
			"numericCode": "426"
		},
		{
			"name": "Liberia",
			"nativeName": "Liberia",
			"topLevelDomain": [
				".lr"
			],
			"capital": "Monrovia",
			"altSpellings": [
				"LR",
				"Republic of Liberia"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Liberia",
				"es": "Liberia",
				"fr": "Liberia",
				"it": "Liberia",
				"ja": "リベリア",
				"nl": "Liberia",
				"hr": "Liberija"
			},
			"population": 4615000,
			"latlng": [
				6.5,
				-9.5
			],
			"demonym": "Liberian",
			"borders": [
				"GIN",
				"CIV",
				"SLE"
			],
			"area": 111369,
			"gini": 38.2,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "LRD",
					"name": "Liberian dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "LR",
			"alpha3Code": "LBR",
			"callingCodes": [
				"231"
			],
			"numericCode": "430"
		},
		{
			"name": "Libya",
			"nativeName": "‏ليبيا",
			"topLevelDomain": [
				".ly"
			],
			"capital": "Tripoli",
			"altSpellings": [
				"LY",
				"State of Libya",
				"Dawlat Libya"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Libyen",
				"es": "Libia",
				"fr": "Libye",
				"it": "Libia",
				"ja": "リビア",
				"nl": "Libië",
				"hr": "Libija"
			},
			"population": 6385000,
			"latlng": [
				25,
				17
			],
			"demonym": "Libyan",
			"borders": [
				"DZA",
				"TCD",
				"EGY",
				"NER",
				"SDN",
				"TUN"
			],
			"area": 1759540,
			"gini": null,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "ل.د",
					"code": "LYD",
					"name": "Libyan dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "LY",
			"alpha3Code": "LBY",
			"callingCodes": [
				"218"
			],
			"numericCode": "434"
		},
		{
			"name": "Liechtenstein",
			"nativeName": "Liechtenstein",
			"topLevelDomain": [
				".li"
			],
			"capital": "Vaduz",
			"altSpellings": [
				"LI",
				"Principality of Liechtenstein",
				"Fürstentum Liechtenstein"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Liechtenstein",
				"es": "Liechtenstein",
				"fr": "Liechtenstein",
				"it": "Liechtenstein",
				"ja": "リヒテンシュタイン",
				"nl": "Liechtenstein",
				"hr": "Lihtenštajn"
			},
			"population": 37623,
			"latlng": [
				47.26666666,
				9.53333333
			],
			"demonym": "Liechtensteiner",
			"borders": [
				"AUT",
				"CHE"
			],
			"area": 160,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "CHF",
					"name": "Swiss franc"
				}
			],
			"languages": [
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				}
			],
			"alpha2Code": "LI",
			"alpha3Code": "LIE",
			"callingCodes": [
				"423"
			],
			"numericCode": "438"
		},
		{
			"name": "Lithuania",
			"nativeName": "Lietuva",
			"topLevelDomain": [
				".lt"
			],
			"capital": "Vilnius",
			"altSpellings": [
				"LT",
				"Republic of Lithuania",
				"Lietuvos Respublika"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Litauen",
				"es": "Lituania",
				"fr": "Lituanie",
				"it": "Lituania",
				"ja": "リトアニア",
				"nl": "Litouwen",
				"hr": "Litva"
			},
			"population": 2872294,
			"latlng": [
				56,
				24
			],
			"demonym": "Lithuanian",
			"borders": [
				"BLR",
				"LVA",
				"POL",
				"RUS"
			],
			"area": 65300,
			"gini": 37.6,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "lt",
					"iso639_2": "lit",
					"name": "Lithuanian",
					"nativeName": "lietuvių kalba"
				}
			],
			"alpha2Code": "LT",
			"alpha3Code": "LTU",
			"callingCodes": [
				"370"
			],
			"numericCode": "440"
		},
		{
			"name": "Luxembourg",
			"nativeName": "Luxembourg",
			"topLevelDomain": [
				".lu"
			],
			"capital": "Luxembourg",
			"altSpellings": [
				"LU",
				"Grand Duchy of Luxembourg",
				"Grand-Duché de Luxembourg",
				"Großherzogtum Luxemburg",
				"Groussherzogtum Lëtzebuerg"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Luxemburg",
				"es": "Luxemburgo",
				"fr": "Luxembourg",
				"it": "Lussemburgo",
				"ja": "ルクセンブルク",
				"nl": "Luxemburg",
				"hr": "Luksemburg"
			},
			"population": 576200,
			"latlng": [
				49.75,
				6.16666666
			],
			"demonym": "Luxembourger",
			"borders": [
				"BEL",
				"FRA",
				"DEU"
			],
			"area": 2586,
			"gini": 30.8,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				},
				{
					"iso639_1": "lb",
					"iso639_2": "ltz",
					"name": "Luxembourgish",
					"nativeName": "Lëtzebuergesch"
				}
			],
			"alpha2Code": "LU",
			"alpha3Code": "LUX",
			"callingCodes": [
				"352"
			],
			"numericCode": "442"
		},
		{
			"name": "Macao",
			"nativeName": "澳門",
			"topLevelDomain": [
				".mo"
			],
			"capital": "",
			"altSpellings": [
				"MO",
				"澳门",
				"Macao Special Administrative Region of the People's Republic of China",
				"中華人民共和國澳門特別行政區",
				"Região Administrativa Especial de Macau da República Popular da China"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Macao",
				"es": "Macao",
				"fr": "Macao",
				"it": "Macao",
				"ja": "マカオ",
				"nl": "Macao",
				"hr": "Makao"
			},
			"population": 649100,
			"latlng": [
				22.16666666,
				113.55
			],
			"demonym": "Chinese",
			"borders": [
				"CHN"
			],
			"area": 30,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "P",
					"code": "MOP",
					"name": "Macanese pataca"
				}
			],
			"languages": [
				{
					"iso639_1": "zh",
					"iso639_2": "zho",
					"name": "Chinese",
					"nativeName": "中文 (Zhōngwén)"
				},
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "MO",
			"alpha3Code": "MAC",
			"callingCodes": [
				"853"
			],
			"numericCode": "446"
		},
		{
			"name": "Macedonia (the former Yugoslav Republic of)",
			"nativeName": "Македонија",
			"topLevelDomain": [
				".mk"
			],
			"capital": "Skopje",
			"altSpellings": [
				"MK",
				"Republic of Macedonia",
				"Република Македонија"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Mazedonien",
				"es": "Macedonia",
				"fr": "Macédoine",
				"it": "Macedonia",
				"ja": "マケドニア旧ユーゴスラビア共和国",
				"nl": "Macedonië",
				"hr": "Makedonija"
			},
			"population": 2058539,
			"latlng": [
				41.83333333,
				22
			],
			"demonym": "Macedonian",
			"borders": [
				"ALB",
				"BGR",
				"GRC",
				"KOS",
				"SRB"
			],
			"area": 25713,
			"gini": 43.2,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "ден",
					"code": "MKD",
					"name": "Macedonian denar"
				}
			],
			"languages": [
				{
					"iso639_1": "mk",
					"iso639_2": "mkd",
					"name": "Macedonian",
					"nativeName": "македонски јазик"
				}
			],
			"alpha2Code": "MK",
			"alpha3Code": "MKD",
			"callingCodes": [
				"389"
			],
			"numericCode": "807"
		},
		{
			"name": "Madagascar",
			"nativeName": "Madagasikara",
			"topLevelDomain": [
				".mg"
			],
			"capital": "Antananarivo",
			"altSpellings": [
				"MG",
				"Republic of Madagascar",
				"Repoblikan'i Madagasikara",
				"République de Madagascar"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Madagaskar",
				"es": "Madagascar",
				"fr": "Madagascar",
				"it": "Madagascar",
				"ja": "マダガスカル",
				"nl": "Madagaskar",
				"hr": "Madagaskar"
			},
			"population": 22434363,
			"latlng": [
				-20,
				47
			],
			"demonym": "Malagasy",
			"borders": [],
			"area": 587041,
			"gini": 44.1,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Ar",
					"code": "MGA",
					"name": "Malagasy ariary"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "mg",
					"iso639_2": "mlg",
					"name": "Malagasy",
					"nativeName": "fiteny malagasy"
				}
			],
			"alpha2Code": "MG",
			"alpha3Code": "MDG",
			"callingCodes": [
				"261"
			],
			"numericCode": "450"
		},
		{
			"name": "Malawi",
			"nativeName": "Malawi",
			"topLevelDomain": [
				".mw"
			],
			"capital": "Lilongwe",
			"altSpellings": [
				"MW",
				"Republic of Malawi"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Malawi",
				"es": "Malawi",
				"fr": "Malawi",
				"it": "Malawi",
				"ja": "マラウイ",
				"nl": "Malawi",
				"hr": "Malavi"
			},
			"population": 16832910,
			"latlng": [
				-13.5,
				34
			],
			"demonym": "Malawian",
			"borders": [
				"MOZ",
				"TZA",
				"ZMB"
			],
			"area": 118484,
			"gini": 39,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "MK",
					"code": "MWK",
					"name": "Malawian kwacha"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ny",
					"iso639_2": "nya",
					"name": "Chichewa",
					"nativeName": "chiCheŵa"
				}
			],
			"alpha2Code": "MW",
			"alpha3Code": "MWI",
			"callingCodes": [
				"265"
			],
			"numericCode": "454"
		},
		{
			"name": "Malaysia",
			"nativeName": "Malaysia",
			"topLevelDomain": [
				".my"
			],
			"capital": "Kuala Lumpur",
			"altSpellings": [
				"MY"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Malaisie",
				"nl": "Maleisië",
				"de": "Malaysia",
				"it": "Malesia",
				"ja": "マレーシア",
				"es": "Malasia",
				"hr": "Malezija"
			},
			"population": 31405416,
			"latlng": [
				2.5,
				112.5
			],
			"demonym": "Malaysian",
			"borders": [
				"BRN",
				"IDN",
				"THA"
			],
			"area": 330803,
			"gini": 46.2,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "RM",
					"code": "MYR",
					"name": "Malaysian ringgit"
				}
			],
			"languages": [
				{
					"iso639_1": null,
					"iso639_2": "zsm",
					"name": "Malaysian",
					"nativeName": "بهاس مليسيا"
				}
			],
			"alpha2Code": "MY",
			"alpha3Code": "MYS",
			"callingCodes": [
				"60"
			],
			"numericCode": "458"
		},
		{
			"name": "Maldives",
			"nativeName": "Maldives",
			"topLevelDomain": [
				".mv"
			],
			"capital": "Malé",
			"altSpellings": [
				"MV",
				"Maldive Islands",
				"Republic of the Maldives",
				"Dhivehi Raajjeyge Jumhooriyya"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Malediven",
				"es": "Maldivas",
				"fr": "Maldives",
				"it": "Maldive",
				"ja": "モルディブ",
				"nl": "Maldiven",
				"hr": "Maldivi"
			},
			"population": 344023,
			"latlng": [
				3.25,
				73
			],
			"demonym": "Maldivan",
			"borders": [],
			"area": 300,
			"gini": 37.4,
			"timezones": [
				"UTC+05:00"
			],
			"currencies": [
				{
					"symbol": ".ރ",
					"code": "MVR",
					"name": "Maldivian rufiyaa"
				}
			],
			"languages": [
				{
					"iso639_1": "dv",
					"iso639_2": "div",
					"name": "Divehi",
					"nativeName": "ދިވެހި"
				}
			],
			"alpha2Code": "MV",
			"alpha3Code": "MDV",
			"callingCodes": [
				"960"
			],
			"numericCode": "462"
		},
		{
			"name": "Mali",
			"nativeName": "Mali",
			"topLevelDomain": [
				".ml"
			],
			"capital": "Bamako",
			"altSpellings": [
				"ML",
				"Republic of Mali",
				"République du Mali"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Mali",
				"es": "Mali",
				"fr": "Mali",
				"it": "Mali",
				"ja": "マリ",
				"nl": "Mali",
				"hr": "Mali"
			},
			"population": 18135000,
			"latlng": [
				17,
				-4
			],
			"demonym": "Malian",
			"borders": [
				"DZA",
				"BFA",
				"GIN",
				"CIV",
				"MRT",
				"NER",
				"SEN"
			],
			"area": 1240192,
			"gini": 33,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "ML",
			"alpha3Code": "MLI",
			"callingCodes": [
				"223"
			],
			"numericCode": "466"
		},
		{
			"name": "Malta",
			"nativeName": "Malta",
			"topLevelDomain": [
				".mt"
			],
			"capital": "Valletta",
			"altSpellings": [
				"MT",
				"Republic of Malta",
				"Repubblika ta' Malta"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Malta",
				"es": "Malta",
				"fr": "Malte",
				"it": "Malta",
				"ja": "マルタ",
				"nl": "Malta",
				"hr": "Malta"
			},
			"population": 425384,
			"latlng": [
				35.83333333,
				14.58333333
			],
			"demonym": "Maltese",
			"borders": [],
			"area": 316,
			"gini": null,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "mt",
					"iso639_2": "mlt",
					"name": "Maltese",
					"nativeName": "Malti"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "MT",
			"alpha3Code": "MLT",
			"callingCodes": [
				"356"
			],
			"numericCode": "470"
		},
		{
			"name": "Marshall Islands",
			"nativeName": "M̧ajeļ",
			"topLevelDomain": [
				".mh"
			],
			"capital": "Majuro",
			"altSpellings": [
				"MH",
				"Republic of the Marshall Islands",
				"Aolepān Aorōkin M̧ajeļ"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Marshallinseln",
				"es": "Islas Marshall",
				"fr": "Îles Marshall",
				"it": "Isole Marshall",
				"ja": "マーシャル諸島",
				"nl": "Marshalleilanden",
				"hr": "Maršalovi Otoci"
			},
			"population": 54880,
			"latlng": [
				9,
				168
			],
			"demonym": "Marshallese",
			"borders": [],
			"area": 181,
			"timezones": [
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "mh",
					"iso639_2": "mah",
					"name": "Marshallese",
					"nativeName": "Kajin M̧ajeļ"
				}
			],
			"alpha2Code": "MH",
			"alpha3Code": "MHL",
			"callingCodes": [
				"692"
			],
			"numericCode": "584"
		},
		{
			"name": "Martinique",
			"nativeName": "Martinique",
			"topLevelDomain": [
				".mq"
			],
			"capital": "Fort-de-France",
			"altSpellings": [
				"MQ"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Martinique",
				"es": "Martinica",
				"fr": "Martinique",
				"it": "Martinica",
				"ja": "マルティニーク",
				"nl": "Martinique",
				"hr": "Martinique"
			},
			"population": 378243,
			"latlng": [
				14.666667,
				-61
			],
			"demonym": "French",
			"borders": [],
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "MQ",
			"alpha3Code": "MTQ",
			"callingCodes": [
				"596"
			],
			"numericCode": "474"
		},
		{
			"name": "Mauritania",
			"nativeName": "موريتانيا",
			"topLevelDomain": [
				".mr"
			],
			"capital": "Nouakchott",
			"altSpellings": [
				"MR",
				"Islamic Republic of Mauritania",
				"al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Mauretanien",
				"es": "Mauritania",
				"fr": "Mauritanie",
				"it": "Mauritania",
				"ja": "モーリタニア",
				"nl": "Mauritanië",
				"hr": "Mauritanija"
			},
			"population": 3718678,
			"latlng": [
				20,
				-12
			],
			"demonym": "Mauritanian",
			"borders": [
				"DZA",
				"MLI",
				"SEN",
				"ESH"
			],
			"area": 1030700,
			"gini": 40.5,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "UM",
					"code": "MRO",
					"name": "Mauritanian ouguiya"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "MR",
			"alpha3Code": "MRT",
			"callingCodes": [
				"222"
			],
			"numericCode": "478"
		},
		{
			"name": "Mauritius",
			"nativeName": "Maurice",
			"topLevelDomain": [
				".mu"
			],
			"capital": "Port Louis",
			"altSpellings": [
				"MU",
				"Republic of Mauritius",
				"République de Maurice"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Mauritius",
				"es": "Mauricio",
				"fr": "Île Maurice",
				"it": "Mauritius",
				"ja": "モーリシャス",
				"nl": "Mauritius",
				"hr": "Mauricijus"
			},
			"population": 1262879,
			"latlng": [
				-20.28333333,
				57.55
			],
			"demonym": "Mauritian",
			"borders": [],
			"area": 2040,
			"gini": null,
			"timezones": [
				"UTC+04:00"
			],
			"currencies": [
				{
					"symbol": "₨",
					"code": "MUR",
					"name": "Mauritian rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "MU",
			"alpha3Code": "MUS",
			"callingCodes": [
				"230"
			],
			"numericCode": "480"
		},
		{
			"name": "Mayotte",
			"nativeName": "Mayotte",
			"topLevelDomain": [
				".yt"
			],
			"capital": "Mamoudzou",
			"altSpellings": [
				"YT",
				"Department of Mayotte",
				"Département de Mayotte"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Mayotte",
				"es": "Mayotte",
				"fr": "Mayotte",
				"it": "Mayotte",
				"ja": "マヨット",
				"nl": "Mayotte",
				"hr": "Mayotte"
			},
			"population": 226915,
			"latlng": [
				-12.83333333,
				45.16666666
			],
			"demonym": "French",
			"borders": [],
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "YT",
			"alpha3Code": "MYT",
			"callingCodes": [
				"262"
			],
			"numericCode": "175"
		},
		{
			"name": "Mexico",
			"nativeName": "México",
			"topLevelDomain": [
				".mx"
			],
			"capital": "Mexico City",
			"altSpellings": [
				"MX",
				"Mexicanos",
				"United Mexican States",
				"Estados Unidos Mexicanos"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Mexiko",
				"es": "México",
				"fr": "Mexique",
				"it": "Messico",
				"ja": "メキシコ",
				"nl": "Mexico",
				"hr": "Meksiko"
			},
			"population": 122273473,
			"latlng": [
				23,
				-102
			],
			"demonym": "Mexican",
			"borders": [
				"BLZ",
				"GTM",
				"USA"
			],
			"area": 1964375,
			"gini": 47,
			"timezones": [
				"UTC-08:00",
				"UTC-07:00",
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "MXN",
					"name": "Mexican peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "MX",
			"alpha3Code": "MEX",
			"callingCodes": [
				"52"
			],
			"numericCode": "484"
		},
		{
			"name": "Micronesia (Federated States of)",
			"nativeName": "Micronesia",
			"topLevelDomain": [
				".fm"
			],
			"capital": "Palikir",
			"altSpellings": [
				"FM",
				"Federated States of Micronesia"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Mikronesien",
				"es": "Micronesia",
				"fr": "Micronésie",
				"it": "Micronesia",
				"ja": "ミクロネシア連邦",
				"nl": "Micronesië",
				"hr": "Mikronezija"
			},
			"population": 102800,
			"latlng": [
				6.91666666,
				158.25
			],
			"demonym": "Micronesian",
			"borders": [],
			"area": 702,
			"timezones": [
				"UTC+10:00",
				"UTC+11"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": null,
					"name": "[D]"
				},
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "FM",
			"alpha3Code": "FSM",
			"callingCodes": [
				"691"
			],
			"numericCode": "583"
		},
		{
			"name": "Moldova (Republic of)",
			"nativeName": "Moldova",
			"topLevelDomain": [
				".md"
			],
			"capital": "Chișinău",
			"altSpellings": [
				"MD",
				"Republic of Moldova",
				"Republica Moldova"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Moldawie",
				"es": "Moldavia",
				"fr": "Moldavie",
				"it": "Moldavia",
				"ja": "モルドバ共和国",
				"nl": "Moldavië",
				"hr": "Moldova"
			},
			"population": 3553100,
			"latlng": [
				47,
				29
			],
			"demonym": "Moldovan",
			"borders": [
				"ROU",
				"UKR"
			],
			"area": 33846,
			"gini": 33,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "L",
					"code": "MDL",
					"name": "Moldovan leu"
				}
			],
			"languages": [
				{
					"iso639_1": "ro",
					"iso639_2": "ron",
					"name": "Romanian",
					"nativeName": "Română"
				}
			],
			"alpha2Code": "MD",
			"alpha3Code": "MDA",
			"callingCodes": [
				"373"
			],
			"numericCode": "498"
		},
		{
			"name": "Monaco",
			"nativeName": "Monaco",
			"topLevelDomain": [
				".mc"
			],
			"capital": "Monaco",
			"altSpellings": [
				"MC",
				"Principality of Monaco",
				"Principauté de Monaco"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Monaco",
				"es": "Mónaco",
				"fr": "Monaco",
				"it": "Principato di Monaco",
				"ja": "モナコ",
				"nl": "Monaco",
				"hr": "Monako"
			},
			"population": 38400,
			"latlng": [
				43.73333333,
				7.4
			],
			"demonym": "Monegasque",
			"borders": [
				"FRA"
			],
			"area": 2.02,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "MC",
			"alpha3Code": "MCO",
			"callingCodes": [
				"377"
			],
			"numericCode": "492"
		},
		{
			"name": "Mongolia",
			"nativeName": "Монгол улс",
			"topLevelDomain": [
				".mn"
			],
			"capital": "Ulan Bator",
			"altSpellings": [
				"MN"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Mongolei",
				"es": "Mongolia",
				"fr": "Mongolie",
				"it": "Mongolia",
				"ja": "モンゴル",
				"nl": "Mongolië",
				"hr": "Mongolija"
			},
			"population": 3093100,
			"latlng": [
				46,
				105
			],
			"demonym": "Mongolian",
			"borders": [
				"CHN",
				"RUS"
			],
			"area": 1564110,
			"gini": 36.5,
			"timezones": [
				"UTC+07:00",
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "₮",
					"code": "MNT",
					"name": "Mongolian tögrög"
				}
			],
			"languages": [
				{
					"iso639_1": "mn",
					"iso639_2": "mon",
					"name": "Mongolian",
					"nativeName": "Монгол хэл"
				}
			],
			"alpha2Code": "MN",
			"alpha3Code": "MNG",
			"callingCodes": [
				"976"
			],
			"numericCode": "496"
		},
		{
			"name": "Montenegro",
			"nativeName": "Црна Гора",
			"topLevelDomain": [
				".me"
			],
			"capital": "Podgorica",
			"altSpellings": [
				"ME",
				"Crna Gora"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Montenegro",
				"es": "Montenegro",
				"fr": "Monténégro",
				"it": "Montenegro",
				"ja": "モンテネグロ",
				"nl": "Montenegro",
				"hr": "Crna Gora"
			},
			"population": 621810,
			"latlng": [
				42.5,
				19.3
			],
			"demonym": "Montenegrin",
			"borders": [
				"ALB",
				"BIH",
				"HRV",
				"KOS",
				"SRB"
			],
			"area": 13812,
			"gini": 30,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "sr",
					"iso639_2": "srp",
					"name": "Serbian",
					"nativeName": "српски језик"
				},
				{
					"iso639_1": "bs",
					"iso639_2": "bos",
					"name": "Bosnian",
					"nativeName": "bosanski jezik"
				},
				{
					"iso639_1": "sq",
					"iso639_2": "sqi",
					"name": "Albanian",
					"nativeName": "Shqip"
				},
				{
					"iso639_1": "hr",
					"iso639_2": "hrv",
					"name": "Croatian",
					"nativeName": "hrvatski jezik"
				}
			],
			"alpha2Code": "ME",
			"alpha3Code": "MNE",
			"callingCodes": [
				"382"
			],
			"numericCode": "499"
		},
		{
			"name": "Montserrat",
			"nativeName": "Montserrat",
			"topLevelDomain": [
				".ms"
			],
			"capital": "Plymouth",
			"altSpellings": [
				"MS"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Montserrat",
				"es": "Montserrat",
				"fr": "Montserrat",
				"it": "Montserrat",
				"ja": "モントセラト",
				"nl": "Montserrat",
				"hr": "Montserrat"
			},
			"population": 4922,
			"latlng": [
				16.75,
				-62.2
			],
			"demonym": "Montserratian",
			"borders": [],
			"area": 102,
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "MS",
			"alpha3Code": "MSR",
			"callingCodes": [
				"1664"
			],
			"numericCode": "500"
		},
		{
			"name": "Morocco",
			"nativeName": "المغرب",
			"topLevelDomain": [
				".ma"
			],
			"capital": "Rabat",
			"altSpellings": [
				"MA",
				"Kingdom of Morocco",
				"Al-Mamlakah al-Maġribiyah"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Marokko",
				"es": "Marruecos",
				"fr": "Maroc",
				"it": "Marocco",
				"ja": "モロッコ",
				"nl": "Marokko",
				"hr": "Maroko"
			},
			"population": 33337529,
			"latlng": [
				32,
				-5
			],
			"demonym": "Moroccan",
			"borders": [
				"DZA",
				"ESH",
				"ESP"
			],
			"area": 446550,
			"gini": 40.9,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "د.م.",
					"code": "MAD",
					"name": "Moroccan dirham"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "MA",
			"alpha3Code": "MAR",
			"callingCodes": [
				"212"
			],
			"numericCode": "504"
		},
		{
			"name": "Mozambique",
			"nativeName": "Moçambique",
			"topLevelDomain": [
				".mz"
			],
			"capital": "Maputo",
			"altSpellings": [
				"MZ",
				"Republic of Mozambique",
				"República de Moçambique"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Mosambik",
				"es": "Mozambique",
				"fr": "Mozambique",
				"it": "Mozambico",
				"ja": "モザンビーク",
				"nl": "Mozambique",
				"hr": "Mozambik"
			},
			"population": 26423700,
			"latlng": [
				-18.25,
				35
			],
			"demonym": "Mozambican",
			"borders": [
				"MWI",
				"ZAF",
				"SWZ",
				"TZA",
				"ZMB",
				"ZWE"
			],
			"area": 801590,
			"gini": 45.7,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "MT",
					"code": "MZN",
					"name": "Mozambican metical"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "MZ",
			"alpha3Code": "MOZ",
			"callingCodes": [
				"258"
			],
			"numericCode": "508"
		},
		{
			"name": "Myanmar",
			"nativeName": "Myanma",
			"topLevelDomain": [
				".mm"
			],
			"capital": "Naypyidaw",
			"altSpellings": [
				"MM",
				"Burma",
				"Republic of the Union of Myanmar",
				"Pyidaunzu Thanmăda Myăma Nainngandaw"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Myanmar",
				"nl": "Myanmar",
				"de": "Myanmar",
				"it": "Birmania",
				"ja": "ミャンマー",
				"es": "Myanmar",
				"hr": "Mijanmar"
			},
			"population": 51419420,
			"latlng": [
				22,
				98
			],
			"demonym": "Burmese",
			"borders": [
				"BGD",
				"CHN",
				"IND",
				"LAO",
				"THA"
			],
			"gini": null,
			"timezones": [
				"UTC+06:30"
			],
			"area": 676578,
			"currencies": [
				{
					"symbol": "Ks",
					"code": "MMK",
					"name": "Burmese kyat"
				}
			],
			"languages": [
				{
					"iso639_1": "my",
					"iso639_2": "mya",
					"name": "Burmese",
					"nativeName": "ဗမာစာ"
				}
			],
			"alpha2Code": "MM",
			"alpha3Code": "MMR",
			"callingCodes": [
				"95"
			],
			"numericCode": "104"
		},
		{
			"name": "Namibia",
			"nativeName": "Namibia",
			"topLevelDomain": [
				".na"
			],
			"capital": "Windhoek",
			"altSpellings": [
				"NA",
				"Namibië",
				"Republic of Namibia"
			],
			"region": "Africa",
			"subregion": "Southern Africa",
			"translations": {
				"de": "Namibia",
				"es": "Namibia",
				"fr": "Namibie",
				"it": "Namibia",
				"ja": "ナミビア",
				"nl": "Namibië",
				"hr": "Namibija"
			},
			"population": 2324388,
			"latlng": [
				-22,
				17
			],
			"demonym": "Namibian",
			"borders": [
				"AGO",
				"BWA",
				"ZAF",
				"ZMB"
			],
			"area": 825615,
			"gini": 63.9,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "NAD",
					"name": "Namibian dollar"
				},
				{
					"symbol": "R",
					"code": "ZAR",
					"name": "South African rand"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "af",
					"iso639_2": "afr",
					"name": "Afrikaans",
					"nativeName": "Afrikaans"
				}
			],
			"alpha2Code": "NA",
			"alpha3Code": "NAM",
			"callingCodes": [
				"264"
			],
			"numericCode": "516"
		},
		{
			"name": "Nauru",
			"nativeName": "Nauru",
			"topLevelDomain": [
				".nr"
			],
			"capital": "Yaren",
			"altSpellings": [
				"NR",
				"Naoero",
				"Pleasant Island",
				"Republic of Nauru",
				"Ripublik Naoero"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Nauru",
				"es": "Nauru",
				"fr": "Nauru",
				"it": "Nauru",
				"ja": "ナウル",
				"nl": "Nauru",
				"hr": "Nauru"
			},
			"population": 10084,
			"latlng": [
				-0.53333333,
				166.91666666
			],
			"demonym": "Nauruan",
			"borders": [],
			"area": 21,
			"timezones": [
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "AUD",
					"name": "Australian dollar"
				},
				{
					"symbol": "$",
					"code": "(none)",
					"name": null
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "na",
					"iso639_2": "nau",
					"name": "Nauruan",
					"nativeName": "Dorerin Naoero"
				}
			],
			"alpha2Code": "NR",
			"alpha3Code": "NRU",
			"callingCodes": [
				"674"
			],
			"numericCode": "520"
		},
		{
			"name": "Nepal",
			"nativeName": "नेपाल",
			"topLevelDomain": [
				".np"
			],
			"capital": "Kathmandu",
			"altSpellings": [
				"NP",
				"Federal Democratic Republic of Nepal",
				"Loktāntrik Ganatantra Nepāl"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Népal",
				"es": "Nepal",
				"fr": "Népal",
				"it": "Nepal",
				"ja": "ネパール",
				"nl": "Nepal",
				"hr": "Nepal"
			},
			"population": 28431500,
			"latlng": [
				28,
				84
			],
			"demonym": "Nepalese",
			"borders": [
				"CHN",
				"IND"
			],
			"area": 147181,
			"gini": 32.8,
			"timezones": [
				"UTC+05:45"
			],
			"currencies": [
				{
					"symbol": "₨",
					"code": "NPR",
					"name": "Nepalese rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "ne",
					"iso639_2": "nep",
					"name": "Nepali",
					"nativeName": "नेपाली"
				}
			],
			"alpha2Code": "NP",
			"alpha3Code": "NPL",
			"callingCodes": [
				"977"
			],
			"numericCode": "524"
		},
		{
			"name": "Netherlands",
			"nativeName": "Nederland",
			"topLevelDomain": [
				".nl"
			],
			"capital": "Amsterdam",
			"altSpellings": [
				"NL",
				"Holland",
				"Nederland"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Niederlande",
				"es": "Países Bajos",
				"fr": "Pays-Bas",
				"it": "Paesi Bassi",
				"ja": "オランダ",
				"nl": "Nederland",
				"hr": "Nizozemska"
			},
			"population": 17019800,
			"latlng": [
				52.5,
				5.75
			],
			"demonym": "Dutch",
			"borders": [
				"BEL",
				"DEU"
			],
			"area": 41850,
			"gini": 30.9,
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				}
			],
			"alpha2Code": "NL",
			"alpha3Code": "NLD",
			"callingCodes": [
				"31"
			],
			"numericCode": "528"
		},
		{
			"name": "New Caledonia",
			"nativeName": "Nouvelle-Calédonie",
			"topLevelDomain": [
				".nc"
			],
			"capital": "Nouméa",
			"altSpellings": [
				"NC"
			],
			"region": "Oceania",
			"subregion": "Melanesia",
			"translations": {
				"de": "Neukaledonien",
				"es": "Nueva Caledonia",
				"fr": "Nouvelle-Calédonie",
				"it": "Nuova Caledonia",
				"ja": "ニューカレドニア",
				"nl": "Nieuw-Caledonië",
				"hr": "Nova Kaledonija"
			},
			"population": 268767,
			"latlng": [
				-21.5,
				165.5
			],
			"demonym": "New Caledonian",
			"borders": [],
			"area": 18575,
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XPF",
					"name": "CFP franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "NC",
			"alpha3Code": "NCL",
			"callingCodes": [
				"687"
			],
			"numericCode": "540"
		},
		{
			"name": "New Zealand",
			"nativeName": "New Zealand",
			"topLevelDomain": [
				".nz"
			],
			"capital": "Wellington",
			"altSpellings": [
				"NZ",
				"Aotearoa"
			],
			"region": "Oceania",
			"subregion": "Australia and New Zealand",
			"translations": {
				"fr": "Nouvelle-Zélande",
				"nl": "Nieuw-Zeeland",
				"de": "Neuseeland",
				"it": "Nuova Zelanda",
				"ja": "ニュージーランド",
				"es": "Nueva Zelanda",
				"hr": "Novi Zeland"
			},
			"population": 4697854,
			"latlng": [
				-41,
				174
			],
			"demonym": "New Zealander",
			"borders": [],
			"area": 270467,
			"gini": 36.2,
			"timezones": [
				"UTC-11:00",
				"UTC-10:00",
				"UTC+12:00",
				"UTC+12:45",
				"UTC+13:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "NZD",
					"name": "New Zealand dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "mi",
					"iso639_2": "mri",
					"name": "Māori",
					"nativeName": "te reo Māori"
				}
			],
			"alpha2Code": "NZ",
			"alpha3Code": "NZL",
			"callingCodes": [
				"64"
			],
			"numericCode": "554"
		},
		{
			"name": "Nicaragua",
			"nativeName": "Nicaragua",
			"topLevelDomain": [
				".ni"
			],
			"capital": "Managua",
			"altSpellings": [
				"NI",
				"Republic of Nicaragua",
				"República de Nicaragua"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Nicaragua",
				"es": "Nicaragua",
				"fr": "Nicaragua",
				"it": "Nicaragua",
				"ja": "ニカラグア",
				"nl": "Nicaragua",
				"hr": "Nikaragva"
			},
			"population": 6262703,
			"latlng": [
				13,
				-85
			],
			"demonym": "Nicaraguan",
			"borders": [
				"CRI",
				"HND"
			],
			"area": 130373,
			"gini": 40.5,
			"timezones": [
				"UTC-06:00"
			],
			"currencies": [
				{
					"symbol": "C$",
					"code": "NIO",
					"name": "Nicaraguan córdoba"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "NI",
			"alpha3Code": "NIC",
			"callingCodes": [
				"505"
			],
			"numericCode": "558"
		},
		{
			"name": "Niger",
			"nativeName": "Niger",
			"topLevelDomain": [
				".ne"
			],
			"capital": "Niamey",
			"altSpellings": [
				"NE",
				"Nijar",
				"Republic of Niger",
				"République du Niger"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Niger",
				"es": "Níger",
				"fr": "Niger",
				"it": "Niger",
				"ja": "ニジェール",
				"nl": "Niger",
				"hr": "Niger"
			},
			"population": 20715000,
			"latlng": [
				16,
				8
			],
			"demonym": "Nigerien",
			"borders": [
				"DZA",
				"BEN",
				"BFA",
				"TCD",
				"LBY",
				"MLI",
				"NGA"
			],
			"area": 1267000,
			"gini": 34.6,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "NE",
			"alpha3Code": "NER",
			"callingCodes": [
				"227"
			],
			"numericCode": "562"
		},
		{
			"name": "Nigeria",
			"nativeName": "Nigeria",
			"topLevelDomain": [
				".ng"
			],
			"capital": "Abuja",
			"altSpellings": [
				"NG",
				"Nijeriya",
				"Naíjíríà",
				"Federal Republic of Nigeria"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Nigeria",
				"es": "Nigeria",
				"fr": "Nigéria",
				"it": "Nigeria",
				"ja": "ナイジェリア",
				"nl": "Nigeria",
				"hr": "Nigerija"
			},
			"population": 186988000,
			"latlng": [
				10,
				8
			],
			"demonym": "Nigerian",
			"borders": [
				"BEN",
				"CMR",
				"TCD",
				"NER"
			],
			"area": 923768,
			"gini": 48.8,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "₦",
					"code": "NGN",
					"name": "Nigerian naira"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "NG",
			"alpha3Code": "NGA",
			"callingCodes": [
				"234"
			],
			"numericCode": "566"
		},
		{
			"name": "Niue",
			"nativeName": "Niuē",
			"topLevelDomain": [
				".nu"
			],
			"capital": "Alofi",
			"altSpellings": [
				"NU"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Niue",
				"es": "Niue",
				"fr": "Niue",
				"it": "Niue",
				"ja": "ニウエ",
				"nl": "Niue",
				"hr": "Niue"
			},
			"population": 1470,
			"latlng": [
				-19.03333333,
				-169.86666666
			],
			"demonym": "Niuean",
			"borders": [],
			"area": 260,
			"currencies": [
				{
					"symbol": "$",
					"code": "NZD",
					"name": "New Zealand dollar"
				},
				{
					"symbol": "$",
					"code": "(none)",
					"name": "Niue dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "NU",
			"alpha3Code": "NIU",
			"callingCodes": [
				"683"
			],
			"numericCode": "570"
		},
		{
			"name": "Norfolk Island",
			"nativeName": "Norfolk Island",
			"topLevelDomain": [
				".nf"
			],
			"capital": "Kingston",
			"altSpellings": [
				"NF",
				"Territory of Norfolk Island",
				"Teratri of Norf'k Ailen"
			],
			"region": "Oceania",
			"subregion": "Australia and New Zealand",
			"translations": {
				"fr": "Île de Norfolk",
				"nl": "Norfolkeiland",
				"de": "Norfolkinsel",
				"it": "Isola Norfolk",
				"ja": "ノーフォーク島",
				"es": "Isla de Norfolk",
				"hr": "Otok Norfolk"
			},
			"population": 2302,
			"latlng": [
				-29.03333333,
				167.95
			],
			"demonym": "Norfolk Islander",
			"borders": [],
			"area": 36,
			"currencies": [
				{
					"code": "AUD",
					"name": "Australian dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "NF",
			"alpha3Code": "NFK",
			"callingCodes": [
				"672"
			],
			"numericCode": "574"
		},
		{
			"name": "Korea (Democratic People's Republic of)",
			"nativeName": "북한",
			"topLevelDomain": [
				".kp"
			],
			"capital": "Pyongyang",
			"altSpellings": [
				"KP",
				"Democratic People's Republic of Korea",
				"조선민주주의인민공화국",
				"Chosŏn Minjujuŭi Inmin Konghwaguk"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Nordkorea",
				"es": "Corea del Norte",
				"fr": "Corée du Nord",
				"it": "Corea del Nord",
				"ja": "朝鮮民主主義人民共和国",
				"nl": "Noord-Korea",
				"hr": "Sjeverna Koreja"
			},
			"population": 25281000,
			"latlng": [
				40,
				127
			],
			"demonym": "North Korean",
			"borders": [
				"CHN",
				"KOR",
				"RUS"
			],
			"area": 120538,
			"gini": null,
			"timezones": [
				"UTC+09:00"
			],
			"currencies": [
				{
					"symbol": "₩",
					"code": "KPW",
					"name": "North Korean won"
				}
			],
			"languages": [
				{
					"iso639_1": "ko",
					"iso639_2": "kor",
					"name": "Korean",
					"nativeName": "한국어"
				}
			],
			"alpha2Code": "KP",
			"alpha3Code": "PRK",
			"callingCodes": [
				"850"
			],
			"numericCode": "408"
		},
		{
			"name": "Northern Mariana Islands",
			"nativeName": "Northern Mariana Islands",
			"topLevelDomain": [
				".mp"
			],
			"capital": "Saipan",
			"altSpellings": [
				"MP",
				"Commonwealth of the Northern Mariana Islands",
				"Sankattan Siha Na Islas Mariånas"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Nördliche Marianen",
				"es": "Islas Marianas del Norte",
				"fr": "Îles Mariannes du Nord",
				"it": "Isole Marianne Settentrionali",
				"ja": "北マリアナ諸島",
				"nl": "Noordelijke Marianeneilanden",
				"hr": "Sjevernomarijanski otoci"
			},
			"population": 56940,
			"latlng": [
				15.2,
				145.75
			],
			"demonym": "American",
			"borders": [],
			"area": 464,
			"currencies": [
				{
					"code": "USD",
					"name": "United States dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ch",
					"iso639_2": "cha",
					"name": "Chamorro",
					"nativeName": "Chamoru"
				}
			],
			"alpha2Code": "MP",
			"alpha3Code": "MNP",
			"callingCodes": [
				"1670"
			],
			"numericCode": "580"
		},
		{
			"name": "Norway",
			"nativeName": "Norge",
			"topLevelDomain": [
				".no"
			],
			"capital": "Oslo",
			"altSpellings": [
				"NO",
				"Norge",
				"Noreg",
				"Kingdom of Norway",
				"Kongeriket Norge",
				"Kongeriket Noreg"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Norwegen",
				"es": "Noruega",
				"fr": "Norvège",
				"it": "Norvegia",
				"ja": "ノルウェー",
				"nl": "Noorwegen",
				"hr": "Norveška"
			},
			"population": 5223256,
			"latlng": [
				62,
				10
			],
			"demonym": "Norwegian",
			"borders": [
				"FIN",
				"SWE",
				"RUS"
			],
			"area": 323802,
			"gini": 25.8,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "kr",
					"code": "NOK",
					"name": "Norwegian krone"
				}
			],
			"languages": [
				{
					"iso639_1": "no",
					"iso639_2": "nor",
					"name": "Norwegian",
					"nativeName": "Norsk"
				},
				{
					"iso639_1": "nb",
					"iso639_2": "nob",
					"name": "Norwegian Bokmål",
					"nativeName": "Norsk bokmål"
				},
				{
					"iso639_1": "nn",
					"iso639_2": "nno",
					"name": "Norwegian Nynorsk",
					"nativeName": "Norsk nynorsk"
				}
			],
			"alpha2Code": "NO",
			"alpha3Code": "NOR",
			"callingCodes": [
				"47"
			],
			"numericCode": "578"
		},
		{
			"name": "Oman",
			"nativeName": "عمان",
			"topLevelDomain": [
				".om"
			],
			"capital": "Muscat",
			"altSpellings": [
				"OM",
				"Sultanate of Oman",
				"Salṭanat ʻUmān"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Oman",
				"es": "Omán",
				"fr": "Oman",
				"it": "oman",
				"ja": "オマーン",
				"nl": "Oman",
				"hr": "Oman"
			},
			"population": 4420133,
			"latlng": [
				21,
				57
			],
			"demonym": "Omani",
			"borders": [
				"SAU",
				"ARE",
				"YEM"
			],
			"area": 309500,
			"gini": null,
			"timezones": [
				"UTC+04:00"
			],
			"currencies": [
				{
					"symbol": "ر.ع.",
					"code": "OMR",
					"name": "Omani rial"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "OM",
			"alpha3Code": "OMN",
			"callingCodes": [
				"968"
			],
			"numericCode": "512"
		},
		{
			"name": "Pakistan",
			"nativeName": "Pakistan",
			"topLevelDomain": [
				".pk"
			],
			"capital": "Islamabad",
			"altSpellings": [
				"PK",
				"Pākistān",
				"Islamic Republic of Pakistan",
				"Islāmī Jumhūriya'eh Pākistān"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Pakistan",
				"es": "Pakistán",
				"fr": "Pakistan",
				"it": "Pakistan",
				"ja": "パキスタン",
				"nl": "Pakistan",
				"hr": "Pakistan"
			},
			"population": 194125062,
			"latlng": [
				30,
				70
			],
			"demonym": "Pakistani",
			"borders": [
				"AFG",
				"CHN",
				"IND",
				"IRN"
			],
			"area": 881912,
			"gini": 30,
			"timezones": [
				"UTC+05:00"
			],
			"currencies": [
				{
					"symbol": "₨",
					"code": "PKR",
					"name": "Pakistani rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ur",
					"iso639_2": "urd",
					"name": "Urdu",
					"nativeName": "اردو"
				}
			],
			"alpha2Code": "PK",
			"alpha3Code": "PAK",
			"callingCodes": [
				"92"
			],
			"numericCode": "586"
		},
		{
			"name": "Palau",
			"nativeName": "Palau",
			"topLevelDomain": [
				".pw"
			],
			"capital": "Ngerulmud",
			"altSpellings": [
				"PW",
				"Republic of Palau",
				"Beluu er a Belau"
			],
			"region": "Oceania",
			"subregion": "Micronesia",
			"translations": {
				"de": "Palau",
				"es": "Palau",
				"fr": "Palaos",
				"it": "Palau",
				"ja": "パラオ",
				"nl": "Palau",
				"hr": "Palau"
			},
			"population": 17950,
			"latlng": [
				7.5,
				134.5
			],
			"demonym": "Palauan",
			"borders": [],
			"area": 459,
			"timezones": [
				"UTC+09:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "(none)",
					"name": "[E]"
				},
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "PW",
			"alpha3Code": "PLW",
			"callingCodes": [
				"680"
			],
			"numericCode": "585"
		},
		{
			"name": "Palestine, State of",
			"nativeName": "فلسطين",
			"topLevelDomain": [
				".ps"
			],
			"capital": "Ramallah",
			"altSpellings": [
				"PS",
				"State of Palestine",
				"Dawlat Filasṭin"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Palästina",
				"es": "Palestina",
				"fr": "Palestine",
				"it": "Palestina",
				"ja": "パレスチナ",
				"nl": "Palestijnse gebieden",
				"hr": "Palestina"
			},
			"population": 4682467,
			"latlng": [
				31.9,
				35.2
			],
			"demonym": "Palestinian",
			"borders": [
				"ISR",
				"EGY",
				"JOR"
			],
			"gini": 35.5,
			"currencies": [
				{
					"code": "ILS",
					"name": "Israeli new sheqel",
					"symbol": "₪"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "PS",
			"alpha3Code": "PSE",
			"callingCodes": [
				"970"
			],
			"numericCode": "275"
		},
		{
			"name": "Panama",
			"nativeName": "Panamá",
			"topLevelDomain": [
				".pa"
			],
			"capital": "Panama City",
			"altSpellings": [
				"PA",
				"Republic of Panama",
				"República de Panamá"
			],
			"region": "Americas",
			"subregion": "Central America",
			"translations": {
				"de": "Panama",
				"es": "Panamá",
				"fr": "Panama",
				"it": "Panama",
				"ja": "パナマ",
				"nl": "Panama",
				"hr": "Panama"
			},
			"population": 3814672,
			"latlng": [
				9,
				-80
			],
			"demonym": "Panamanian",
			"borders": [
				"COL",
				"CRI"
			],
			"area": 75417,
			"gini": 51.9,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "B/.",
					"code": "PAB",
					"name": "Panamanian balboa"
				},
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "PA",
			"alpha3Code": "PAN",
			"callingCodes": [
				"507"
			],
			"numericCode": "591"
		},
		{
			"name": "Papua New Guinea",
			"nativeName": "Papua Niugini",
			"topLevelDomain": [
				".pg"
			],
			"capital": "Port Moresby",
			"altSpellings": [
				"PG",
				"Independent State of Papua New Guinea",
				"Independen Stet bilong Papua Niugini"
			],
			"region": "Oceania",
			"subregion": "Melanesia",
			"translations": {
				"de": "Papua-Neuguinea",
				"es": "Papúa Nueva Guinea",
				"fr": "Papouasie-Nouvelle-Guinée",
				"it": "Papua Nuova Guinea",
				"ja": "パプアニューギニア",
				"nl": "Papoea-Nieuw-Guinea",
				"hr": "Papua Nova Gvineja"
			},
			"population": 8083700,
			"latlng": [
				-6,
				147
			],
			"demonym": "Papua New Guinean",
			"borders": [
				"IDN"
			],
			"area": 462840,
			"gini": 50.9,
			"timezones": [
				"UTC+10:00"
			],
			"currencies": [
				{
					"symbol": "K",
					"code": "PGK",
					"name": "Papua New Guinean kina"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "PG",
			"alpha3Code": "PNG",
			"callingCodes": [
				"675"
			],
			"numericCode": "598"
		},
		{
			"name": "Paraguay",
			"nativeName": "Paraguay",
			"topLevelDomain": [
				".py"
			],
			"capital": "Asunción",
			"altSpellings": [
				"PY",
				"Republic of Paraguay",
				"República del Paraguay",
				"Tetã Paraguái"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Paraguay",
				"es": "Paraguay",
				"fr": "Paraguay",
				"it": "Paraguay",
				"ja": "パラグアイ",
				"nl": "Paraguay",
				"hr": "Paragvaj"
			},
			"population": 6854536,
			"latlng": [
				-23,
				-58
			],
			"demonym": "Paraguayan",
			"borders": [
				"ARG",
				"BOL",
				"BRA"
			],
			"area": 406752,
			"gini": 52.4,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "₲",
					"code": "PYG",
					"name": "Paraguayan guaraní"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				},
				{
					"iso639_1": "gn",
					"iso639_2": "grn",
					"name": "Guaraní",
					"nativeName": "Avañe'ẽ"
				}
			],
			"alpha2Code": "PY",
			"alpha3Code": "PRY",
			"callingCodes": [
				"595"
			],
			"numericCode": "600"
		},
		{
			"name": "Peru",
			"nativeName": "Perú",
			"topLevelDomain": [
				".pe"
			],
			"capital": "Lima",
			"altSpellings": [
				"PE",
				"Republic of Peru",
				" República del Perú"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Peru",
				"es": "Perú",
				"fr": "Pérou",
				"it": "Perù",
				"ja": "ペルー",
				"nl": "Peru",
				"hr": "Peru"
			},
			"population": 31488700,
			"latlng": [
				-10,
				-76
			],
			"demonym": "Peruvian",
			"borders": [
				"BOL",
				"BRA",
				"CHL",
				"COL",
				"ECU"
			],
			"area": 1285216,
			"gini": 48.1,
			"timezones": [
				"UTC-05:00"
			],
			"currencies": [
				{
					"symbol": "S/.",
					"code": "PEN",
					"name": "Peruvian nuevo sol"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "PE",
			"alpha3Code": "PER",
			"callingCodes": [
				"51"
			],
			"numericCode": "604"
		},
		{
			"name": "Philippines",
			"nativeName": "Pilipinas",
			"topLevelDomain": [
				".ph"
			],
			"capital": "Manila",
			"altSpellings": [
				"PH",
				"Republic of the Philippines",
				"Repúblika ng Pilipinas"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Philippines",
				"nl": "Filipijnen",
				"de": "Philippinen",
				"it": "Filippine",
				"ja": "フィリピン",
				"es": "Filipinas",
				"hr": "Filipini"
			},
			"population": 103279800,
			"latlng": [
				13,
				122
			],
			"demonym": "Filipino",
			"borders": [],
			"area": 342353,
			"gini": 43,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "₱",
					"code": "PHP",
					"name": "Philippine peso"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "PH",
			"alpha3Code": "PHL",
			"callingCodes": [
				"63"
			],
			"numericCode": "608"
		},
		{
			"name": "Pitcairn",
			"nativeName": "Pitcairn Islands",
			"topLevelDomain": [
				".pn"
			],
			"capital": "Adamstown",
			"altSpellings": [
				"PN",
				"Pitcairn Henderson Ducie and Oeno Islands"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Pitcairn",
				"es": "Islas Pitcairn",
				"fr": "Îles Pitcairn",
				"it": "Isole Pitcairn",
				"ja": "ピトケアン",
				"nl": "Pitcairneilanden",
				"hr": "Pitcairnovo otočje"
			},
			"population": 56,
			"latlng": [
				-25.06666666,
				-130.1
			],
			"demonym": "Pitcairn Islander",
			"borders": [],
			"area": 47,
			"currencies": [
				{
					"symbol": "$",
					"code": "NZD",
					"name": "New Zealand dollar"
				},
				{
					"symbol": "$",
					"code": null,
					"name": "Pitcairn Islands dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "PN",
			"alpha3Code": "PCN",
			"callingCodes": [
				"64"
			],
			"numericCode": "612"
		},
		{
			"name": "Poland",
			"nativeName": "Polska",
			"topLevelDomain": [
				".pl"
			],
			"capital": "Warsaw",
			"altSpellings": [
				"PL",
				"Republic of Poland",
				"Rzeczpospolita Polska"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Polen",
				"es": "Polonia",
				"fr": "Pologne",
				"it": "Polonia",
				"ja": "ポーランド",
				"nl": "Polen",
				"hr": "Poljska"
			},
			"population": 38437239,
			"latlng": [
				52,
				20
			],
			"demonym": "Polish",
			"borders": [
				"BLR",
				"CZE",
				"DEU",
				"LTU",
				"RUS",
				"SVK",
				"UKR"
			],
			"area": 312679,
			"gini": 34.1,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "zł",
					"code": "PLN",
					"name": "Polish złoty"
				}
			],
			"languages": [
				{
					"iso639_1": "pl",
					"iso639_2": "pol",
					"name": "Polish",
					"nativeName": "język polski"
				}
			],
			"alpha2Code": "PL",
			"alpha3Code": "POL",
			"callingCodes": [
				"48"
			],
			"numericCode": "616"
		},
		{
			"name": "Portugal",
			"nativeName": "Portugal",
			"topLevelDomain": [
				".pt"
			],
			"capital": "Lisbon",
			"altSpellings": [
				"PT",
				"Portuguesa",
				"Portuguese Republic",
				"República Portuguesa"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Portugal",
				"es": "Portugal",
				"fr": "Portugal",
				"it": "Portogallo",
				"ja": "ポルトガル",
				"nl": "Portugal",
				"hr": "Portugal"
			},
			"population": 10374822,
			"latlng": [
				39.5,
				-8
			],
			"demonym": "Portuguese",
			"borders": [
				"ESP"
			],
			"area": 92090,
			"gini": 38.5,
			"timezones": [
				"UTC-01:00",
				"UTC"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "PT",
			"alpha3Code": "PRT",
			"callingCodes": [
				"351"
			],
			"numericCode": "620"
		},
		{
			"name": "Puerto Rico",
			"nativeName": "Puerto Rico",
			"topLevelDomain": [
				".pr"
			],
			"capital": "San Juan",
			"altSpellings": [
				"PR",
				"Commonwealth of Puerto Rico",
				"Estado Libre Asociado de Puerto Rico"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Puerto Rico",
				"es": "Puerto Rico",
				"fr": "Porto Rico",
				"it": "Porto Rico",
				"ja": "プエルトリコ",
				"nl": "Puerto Rico",
				"hr": "Portoriko"
			},
			"population": 3474182,
			"latlng": [
				18.25,
				-66.5
			],
			"demonym": "Puerto Rican",
			"borders": [],
			"area": 8870,
			"currencies": [
				{
					"code": "USD",
					"name": "United States dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "PR",
			"alpha3Code": "PRI",
			"callingCodes": [
				"1787",
				"1939"
			],
			"numericCode": "630"
		},
		{
			"name": "Qatar",
			"nativeName": "قطر",
			"topLevelDomain": [
				".qa"
			],
			"capital": "Doha",
			"altSpellings": [
				"QA",
				"State of Qatar",
				"Dawlat Qaṭar"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Katar",
				"es": "Catar",
				"fr": "Qatar",
				"it": "Qatar",
				"ja": "カタール",
				"nl": "Qatar",
				"hr": "Katar"
			},
			"population": 2587564,
			"latlng": [
				25.5,
				51.25
			],
			"demonym": "Qatari",
			"borders": [
				"SAU"
			],
			"area": 11586,
			"gini": 41.1,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "ر.ق",
					"code": "QAR",
					"name": "Qatari riyal"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "QA",
			"alpha3Code": "QAT",
			"callingCodes": [
				"974"
			],
			"numericCode": "634"
		},
		{
			"name": "Republic of Kosovo",
			"nativeName": "Republika e Kosovës",
			"topLevelDomain": [
				""
			],
			"capital": "Pristina",
			"altSpellings": [
				"XK",
				"Република Косово"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"es": "Kosovo",
				"hr": "Kosovo"
			},
			"population": 1733842,
			"latlng": [
				42.666667,
				21.166667
			],
			"demonym": "Kosovar",
			"borders": [
				"ALB",
				"MKD",
				"MNE",
				"SRB"
			],
			"area": 10908,
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "sq",
					"iso639_2": "sqi",
					"name": "Albanian",
					"nativeName": "Shqip"
				},
				{
					"iso639_1": "sr",
					"iso639_2": "srp",
					"name": "Serbian",
					"nativeName": "српски језик"
				}
			],
			"alpha2Code": "XK",
			"alpha3Code": "KOS",
			"callingCodes": [
				"383"
			]
		},
		{
			"name": "Réunion",
			"nativeName": "La Réunion",
			"topLevelDomain": [
				".re"
			],
			"capital": "Saint-Denis",
			"altSpellings": [
				"RE",
				"Reunion"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Réunion",
				"es": "Reunión",
				"fr": "Réunion",
				"it": "Riunione",
				"ja": "レユニオン",
				"nl": "Réunion",
				"hr": "Réunion"
			},
			"population": 840974,
			"latlng": [
				-21.15,
				55.5
			],
			"demonym": "French",
			"borders": [],
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "RE",
			"alpha3Code": "REU",
			"callingCodes": [
				"262"
			],
			"numericCode": "638"
		},
		{
			"name": "Romania",
			"nativeName": "România",
			"topLevelDomain": [
				".ro"
			],
			"capital": "Bucharest",
			"altSpellings": [
				"RO",
				"Rumania",
				"Roumania",
				"România"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Rumänien",
				"es": "Rumania",
				"fr": "Roumanie",
				"it": "Romania",
				"ja": "ルーマニア",
				"nl": "Roemenië",
				"hr": "Rumunjska"
			},
			"population": 19861408,
			"latlng": [
				46,
				25
			],
			"demonym": "Romanian",
			"borders": [
				"BGR",
				"HUN",
				"MDA",
				"SRB",
				"UKR"
			],
			"area": 238391,
			"gini": 30,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "lei",
					"code": "RON",
					"name": "Romanian leu"
				}
			],
			"languages": [
				{
					"iso639_1": "ro",
					"iso639_2": "ron",
					"name": "Romanian",
					"nativeName": "Română"
				}
			],
			"alpha2Code": "RO",
			"alpha3Code": "ROU",
			"callingCodes": [
				"40"
			],
			"numericCode": "642"
		},
		{
			"name": "Russian Federation",
			"nativeName": "Россия",
			"topLevelDomain": [
				".ru"
			],
			"capital": "Moscow",
			"altSpellings": [
				"RU",
				"Rossiya",
				"Russian Federation",
				"Российская Федерация",
				"Rossiyskaya Federatsiya"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Russland",
				"es": "Rusia",
				"fr": "Russie",
				"it": "Russia",
				"ja": "ロシア連邦",
				"nl": "Rusland",
				"hr": "Rusija"
			},
			"population": 146599183,
			"latlng": [
				60,
				100
			],
			"demonym": "Russian",
			"borders": [
				"AZE",
				"BLR",
				"CHN",
				"EST",
				"FIN",
				"GEO",
				"KAZ",
				"PRK",
				"LVA",
				"LTU",
				"MNG",
				"NOR",
				"POL",
				"UKR"
			],
			"area": 17124442,
			"gini": 40.1,
			"timezones": [
				"UTC+03:00",
				"UTC+04:00",
				"UTC+06:00",
				"UTC+07:00",
				"UTC+08:00",
				"UTC+09:00",
				"UTC+10:00",
				"UTC+11:00",
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "RUB",
					"name": "Russian ruble"
				}
			],
			"languages": [
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "RU",
			"alpha3Code": "RUS",
			"callingCodes": [
				"7"
			],
			"numericCode": "643"
		},
		{
			"name": "Rwanda",
			"nativeName": "Rwanda",
			"topLevelDomain": [
				".rw"
			],
			"capital": "Kigali",
			"altSpellings": [
				"RW",
				"Republic of Rwanda",
				"Repubulika y'u Rwanda",
				"République du Rwanda"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Ruanda",
				"es": "Ruanda",
				"fr": "Rwanda",
				"it": "Ruanda",
				"ja": "ルワンダ",
				"nl": "Rwanda",
				"hr": "Ruanda"
			},
			"population": 11553188,
			"latlng": [
				-2,
				30
			],
			"demonym": "Rwandan",
			"borders": [
				"BDI",
				"COD",
				"TZA",
				"UGA"
			],
			"area": 26338,
			"gini": 50.8,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "RWF",
					"name": "Rwandan franc"
				}
			],
			"languages": [
				{
					"iso639_1": "rw",
					"iso639_2": "kin",
					"name": "Kinyarwanda",
					"nativeName": "Ikinyarwanda"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "RW",
			"alpha3Code": "RWA",
			"callingCodes": [
				"250"
			],
			"numericCode": "646"
		},
		{
			"name": "Saint Barthélemy",
			"nativeName": "Saint-Barthélemy",
			"topLevelDomain": [
				".bl"
			],
			"capital": "Gustavia",
			"altSpellings": [
				"BL",
				"St. Barthelemy",
				"Collectivity of Saint Barthélemy",
				"Collectivité de Saint-Barthélemy"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Saint-Barthélemy",
				"es": "San Bartolomé",
				"fr": "Saint-Barthélemy",
				"it": "Antille Francesi",
				"ja": "サン・バルテルミー",
				"nl": "Saint Barthélemy",
				"hr": "Saint Barthélemy"
			},
			"population": 9417,
			"latlng": [
				18.5,
				-63.41666666
			],
			"demonym": "Saint Barthélemy Islander",
			"borders": [],
			"area": 21,
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "BL",
			"alpha3Code": "BLM",
			"callingCodes": [
				"590"
			],
			"numericCode": "652"
		},
		{
			"name": "Saint Helena, Ascension and Tristan da Cunha",
			"nativeName": "Saint Helena",
			"topLevelDomain": [
				".sh"
			],
			"capital": "Jamestown",
			"altSpellings": [
				"SH"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Sankt Helena",
				"es": "Santa Helena",
				"fr": "Sainte-Hélène",
				"it": "Sant'Elena",
				"ja": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
				"nl": "Sint-Helena",
				"hr": "Sveta Helena"
			},
			"population": 4255,
			"latlng": [
				-15.95,
				-5.7
			],
			"demonym": "Saint Helenian",
			"borders": [],
			"currencies": [
				{
					"symbol": "£",
					"code": "SHP",
					"name": "Saint Helena pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SH",
			"alpha3Code": "SHN",
			"callingCodes": [
				"290"
			],
			"numericCode": "654"
		},
		{
			"name": "Saint Kitts and Nevis",
			"nativeName": "Saint Kitts and Nevis",
			"topLevelDomain": [
				".kn"
			],
			"capital": "Basseterre",
			"altSpellings": [
				"KN",
				"Federation of Saint Christopher and Nevis"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "St. Kitts und Nevis",
				"es": "San Cristóbal y Nieves",
				"fr": "Saint-Christophe-et-Niévès",
				"it": "Saint Kitts e Nevis",
				"ja": "セントクリストファー・ネイビス",
				"nl": "Saint Kitts en Nevis",
				"hr": "Sveti Kristof i Nevis"
			},
			"population": 46204,
			"latlng": [
				17.33333333,
				-62.75
			],
			"demonym": "Kittian and Nevisian",
			"borders": [],
			"area": 261,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "KN",
			"alpha3Code": "KNA",
			"callingCodes": [
				"1869"
			],
			"numericCode": "659"
		},
		{
			"name": "Saint Lucia",
			"nativeName": "Saint Lucia",
			"topLevelDomain": [
				".lc"
			],
			"capital": "Castries",
			"altSpellings": [
				"LC"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Saint Lucia",
				"es": "Santa Lucía",
				"fr": "Saint-Lucie",
				"it": "Santa Lucia",
				"ja": "セントルシア",
				"nl": "Saint Lucia",
				"hr": "Sveta Lucija"
			},
			"population": 186000,
			"latlng": [
				13.88333333,
				-60.96666666
			],
			"demonym": "Saint Lucian",
			"borders": [],
			"area": 616,
			"gini": 42.6,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "LC",
			"alpha3Code": "LCA",
			"callingCodes": [
				"1758"
			],
			"numericCode": "662"
		},
		{
			"name": "Saint Martin (French part)",
			"nativeName": "Saint-Martin",
			"topLevelDomain": [
				".mf",
				".fr",
				".gp"
			],
			"capital": "Marigot",
			"altSpellings": [
				"MF",
				"Collectivity of Saint Martin",
				"Collectivité de Saint-Martin"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Saint Martin",
				"es": "Saint Martin",
				"fr": "Saint-Martin",
				"it": "Saint Martin",
				"ja": "サン・マルタン（フランス領）",
				"nl": "Saint-Martin",
				"hr": "Sveti Martin"
			},
			"population": 36979,
			"latlng": [
				18.08333333,
				-63.95
			],
			"demonym": "Saint Martin Islander",
			"borders": [
				"SXM",
				"NLD"
			],
			"area": 53,
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				}
			],
			"alpha2Code": "MF",
			"alpha3Code": "MAF",
			"callingCodes": [
				"590"
			],
			"numericCode": "663"
		},
		{
			"name": "Saint Pierre and Miquelon",
			"nativeName": "Saint-Pierre-et-Miquelon",
			"topLevelDomain": [
				".pm"
			],
			"capital": "Saint-Pierre",
			"altSpellings": [
				"PM",
				"Collectivité territoriale de Saint-Pierre-et-Miquelon"
			],
			"region": "Americas",
			"subregion": "Northern America",
			"translations": {
				"de": "Saint-Pierre und Miquelon",
				"es": "San Pedro y Miquelón",
				"fr": "Saint-Pierre-et-Miquelon",
				"it": "Saint-Pierre e Miquelon",
				"ja": "サンピエール島・ミクロン島",
				"nl": "Saint Pierre en Miquelon",
				"hr": "Sveti Petar i Mikelon"
			},
			"population": 6069,
			"latlng": [
				46.83333333,
				-56.33333333
			],
			"demonym": "French",
			"borders": [],
			"area": 242,
			"currencies": [
				{
					"code": "EUR",
					"name": "Euro",
					"symbol": "€"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "PM",
			"alpha3Code": "SPM",
			"callingCodes": [
				"508"
			],
			"numericCode": "666"
		},
		{
			"name": "Saint Vincent and the Grenadines",
			"nativeName": "Saint Vincent and the Grenadines",
			"topLevelDomain": [
				".vc"
			],
			"capital": "Kingstown",
			"altSpellings": [
				"VC"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Saint Vincent und die Grenadinen",
				"es": "San Vicente y Granadinas",
				"fr": "Saint-Vincent-et-les-Grenadines",
				"it": "Saint Vincent e Grenadine",
				"ja": "セントビンセントおよびグレナディーン諸島",
				"nl": "Saint Vincent en de Grenadines",
				"hr": "Sveti Vincent i Grenadini"
			},
			"population": 109991,
			"latlng": [
				13.25,
				-61.2
			],
			"demonym": "Saint Vincentian",
			"borders": [],
			"area": 389,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "XCD",
					"name": "East Caribbean dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "VC",
			"alpha3Code": "VCT",
			"callingCodes": [
				"1784"
			],
			"numericCode": "670"
		},
		{
			"name": "Samoa",
			"nativeName": "Samoa",
			"topLevelDomain": [
				".ws"
			],
			"capital": "Apia",
			"altSpellings": [
				"WS",
				"Independent State of Samoa",
				"Malo Saʻoloto Tutoʻatasi o Sāmoa"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Samoa",
				"es": "Samoa",
				"fr": "Samoa",
				"it": "Samoa",
				"ja": "サモア",
				"nl": "Samoa",
				"hr": "Samoa"
			},
			"population": 194899,
			"latlng": [
				-13.58333333,
				-172.33333333
			],
			"demonym": "Samoan",
			"borders": [],
			"area": 2842,
			"timezones": [
				"UTC+13:00"
			],
			"currencies": [
				{
					"symbol": "T",
					"code": "WST",
					"name": "Samoan tālā"
				}
			],
			"languages": [
				{
					"iso639_1": "sm",
					"iso639_2": "smo",
					"name": "Samoan",
					"nativeName": "gagana fa'a Samoa"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "WS",
			"alpha3Code": "WSM",
			"callingCodes": [
				"685"
			],
			"numericCode": "882"
		},
		{
			"name": "San Marino",
			"nativeName": "San Marino",
			"topLevelDomain": [
				".sm"
			],
			"capital": "City of San Marino",
			"altSpellings": [
				"SM",
				"Republic of San Marino",
				"Repubblica di San Marino"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "San Marino",
				"es": "San Marino",
				"fr": "Saint-Marin",
				"it": "San Marino",
				"ja": "サンマリノ",
				"nl": "San Marino",
				"hr": "San Marino"
			},
			"population": 33005,
			"latlng": [
				43.76666666,
				12.41666666
			],
			"demonym": "Sammarinese",
			"borders": [
				"ITA"
			],
			"area": 61,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "it",
					"iso639_2": "ita",
					"name": "Italian",
					"nativeName": "italiano"
				}
			],
			"alpha2Code": "SM",
			"alpha3Code": "SMR",
			"callingCodes": [
				"378"
			],
			"numericCode": "674"
		},
		{
			"name": "Sao Tome and Principe",
			"nativeName": "São Tomé e Príncipe",
			"topLevelDomain": [
				".st"
			],
			"capital": "São Tomé",
			"altSpellings": [
				"ST",
				"Democratic Republic of São Tomé and Príncipe",
				"República Democrática de São Tomé e Príncipe"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"de": "São Tomé und Príncipe",
				"es": "Santo Tomé y Príncipe",
				"fr": "Sao Tomé-et-Principe",
				"it": "São Tomé e Príncipe",
				"ja": "サントメ・プリンシペ",
				"nl": "Sao Tomé en Principe",
				"hr": "Sveti Toma i Princip"
			},
			"population": 187356,
			"latlng": [
				1,
				7
			],
			"demonym": "Sao Tomean",
			"borders": [],
			"area": 964,
			"gini": 50.8,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Db",
					"code": "STD",
					"name": "São Tomé and Príncipe dobra"
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "ST",
			"alpha3Code": "STP",
			"callingCodes": [
				"239"
			],
			"numericCode": "678"
		},
		{
			"name": "Saudi Arabia",
			"nativeName": "العربية السعودية",
			"topLevelDomain": [
				".sa"
			],
			"capital": "Riyadh",
			"altSpellings": [
				"SA",
				"Kingdom of Saudi Arabia",
				"Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Saudi-Arabien",
				"es": "Arabia Saudí",
				"fr": "Arabie Saoudite",
				"it": "Arabia Saudita",
				"ja": "サウジアラビア",
				"nl": "Saoedi-Arabië",
				"hr": "Saudijska Arabija"
			},
			"population": 32248200,
			"latlng": [
				25,
				45
			],
			"demonym": "Saudi Arabian",
			"borders": [
				"IRQ",
				"JOR",
				"KWT",
				"OMN",
				"QAT",
				"ARE",
				"YEM"
			],
			"area": 2149690,
			"gini": null,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "ر.س",
					"code": "SAR",
					"name": "Saudi riyal"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "SA",
			"alpha3Code": "SAU",
			"callingCodes": [
				"966"
			],
			"numericCode": "682"
		},
		{
			"name": "Senegal",
			"nativeName": "Sénégal",
			"topLevelDomain": [
				".sn"
			],
			"capital": "Dakar",
			"altSpellings": [
				"SN",
				"Republic of Senegal",
				"République du Sénégal"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Senegal",
				"es": "Senegal",
				"fr": "Sénégal",
				"it": "Senegal",
				"ja": "セネガル",
				"nl": "Senegal",
				"hr": "Senegal"
			},
			"population": 14799859,
			"latlng": [
				14,
				-14
			],
			"demonym": "Senegalese",
			"borders": [
				"GMB",
				"GIN",
				"GNB",
				"MLI",
				"MRT"
			],
			"area": 196722,
			"gini": 39.2,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "SN",
			"alpha3Code": "SEN",
			"callingCodes": [
				"221"
			],
			"numericCode": "686"
		},
		{
			"name": "Serbia",
			"nativeName": "Србија",
			"topLevelDomain": [
				".rs"
			],
			"capital": "Belgrade",
			"altSpellings": [
				"RS",
				"Srbija",
				"Republic of Serbia",
				"Република Србија",
				"Republika Srbija"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Serbien",
				"es": "Serbia",
				"fr": "Serbie",
				"it": "Serbia",
				"ja": "セルビア",
				"nl": "Servië",
				"hr": "Srbija"
			},
			"population": 7076372,
			"latlng": [
				44,
				21
			],
			"demonym": "Serbian",
			"borders": [
				"BIH",
				"BGR",
				"HRV",
				"HUN",
				"KOS",
				"MKD",
				"MNE",
				"ROU"
			],
			"area": 88361,
			"gini": 27.8,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "дин.",
					"code": "RSD",
					"name": "Serbian dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "sr",
					"iso639_2": "srp",
					"name": "Serbian",
					"nativeName": "српски језик"
				}
			],
			"alpha2Code": "RS",
			"alpha3Code": "SRB",
			"callingCodes": [
				"381"
			],
			"numericCode": "688"
		},
		{
			"name": "Seychelles",
			"nativeName": "Seychelles",
			"topLevelDomain": [
				".sc"
			],
			"capital": "Victoria",
			"altSpellings": [
				"SC",
				"Republic of Seychelles",
				"Repiblik Sesel",
				"République des Seychelles"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Seychellen",
				"es": "Seychelles",
				"fr": "Seychelles",
				"it": "Seychelles",
				"ja": "セーシェル",
				"nl": "Seychellen",
				"hr": "Sejšeli"
			},
			"population": 91400,
			"latlng": [
				-4.58333333,
				55.66666666
			],
			"demonym": "Seychellois",
			"borders": [],
			"area": 452,
			"gini": 65.8,
			"timezones": [
				"UTC+04:00"
			],
			"currencies": [
				{
					"symbol": "₨",
					"code": "SCR",
					"name": "Seychellois rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SC",
			"alpha3Code": "SYC",
			"callingCodes": [
				"248"
			],
			"numericCode": "690"
		},
		{
			"name": "Sierra Leone",
			"nativeName": "Sierra Leone",
			"topLevelDomain": [
				".sl"
			],
			"capital": "Freetown",
			"altSpellings": [
				"SL",
				"Republic of Sierra Leone"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Sierra Leone",
				"es": "Sierra Leone",
				"fr": "Sierra Leone",
				"it": "Sierra Leone",
				"ja": "シエラレオネ",
				"nl": "Sierra Leone",
				"hr": "Sijera Leone"
			},
			"population": 7075641,
			"latlng": [
				8.5,
				-11.5
			],
			"demonym": "Sierra Leonean",
			"borders": [
				"GIN",
				"LBR"
			],
			"area": 71740,
			"gini": 42.5,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Le",
					"code": "SLL",
					"name": "Sierra Leonean leone"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SL",
			"alpha3Code": "SLE",
			"callingCodes": [
				"232"
			],
			"numericCode": "694"
		},
		{
			"name": "Singapore",
			"nativeName": "Singapore",
			"topLevelDomain": [
				".sg"
			],
			"capital": "Singapore",
			"altSpellings": [
				"SG",
				"Singapura",
				"Republik Singapura",
				"新加坡共和国"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Singapour",
				"nl": "Singapore",
				"de": "Singapur",
				"it": "Singapore",
				"ja": "シンガポール",
				"es": "Singapur",
				"hr": "Singapur"
			},
			"population": 5535000,
			"latlng": [
				1.36666666,
				103.8
			],
			"demonym": "Singaporean",
			"borders": [],
			"area": 710,
			"gini": 48.1,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "BND",
					"name": "Brunei dollar"
				},
				{
					"symbol": "$",
					"code": "SGD",
					"name": "Singapore dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ms",
					"iso639_2": "msa",
					"name": "Malay",
					"nativeName": "bahasa Melayu"
				},
				{
					"iso639_1": "ta",
					"iso639_2": "tam",
					"name": "Tamil",
					"nativeName": "தமிழ்"
				},
				{
					"iso639_1": "zh",
					"iso639_2": "zho",
					"name": "Chinese",
					"nativeName": "中文 (Zhōngwén)"
				}
			],
			"alpha2Code": "SG",
			"alpha3Code": "SGP",
			"callingCodes": [
				"65"
			],
			"numericCode": "702"
		},
		{
			"name": "Sint Maarten (Dutch part)",
			"nativeName": "Sint Maarten",
			"topLevelDomain": [
				".sx"
			],
			"capital": "Philipsburg",
			"altSpellings": [
				"SX"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"nl": "Sint Maarten"
			},
			"population": 38247,
			"latlng": [
				18.033333,
				-63.05
			],
			"demonym": "Dutch",
			"borders": [
				"MAF"
			],
			"area": 34,
			"currencies": [
				{
					"symbol": "ƒ",
					"code": "ANG",
					"name": "Netherlands Antillean guilder"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SX",
			"alpha3Code": "SXM",
			"callingCodes": [
				"1721"
			],
			"numericCode": "534"
		},
		{
			"name": "Slovakia",
			"nativeName": "Slovensko",
			"topLevelDomain": [
				".sk"
			],
			"capital": "Bratislava",
			"altSpellings": [
				"SK",
				"Slovak Republic",
				"Slovenská republika"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Slowakei",
				"es": "República Eslovaca",
				"fr": "Slovaquie",
				"it": "Slovacchia",
				"ja": "スロバキア",
				"nl": "Slowakije",
				"hr": "Slovačka"
			},
			"population": 5426252,
			"latlng": [
				48.66666666,
				19.5
			],
			"demonym": "Slovak",
			"borders": [
				"AUT",
				"CZE",
				"HUN",
				"POL",
				"UKR"
			],
			"area": 49037,
			"gini": 26,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "sk",
					"iso639_2": "slk",
					"name": "Slovak",
					"nativeName": "slovenčina"
				}
			],
			"alpha2Code": "SK",
			"alpha3Code": "SVK",
			"callingCodes": [
				"421"
			],
			"numericCode": "703"
		},
		{
			"name": "Slovenia",
			"nativeName": "Slovenija",
			"topLevelDomain": [
				".si"
			],
			"capital": "Ljubljana",
			"altSpellings": [
				"SI",
				"Republic of Slovenia",
				"Republika Slovenija"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Slowenien",
				"es": "Eslovenia",
				"fr": "Slovénie",
				"it": "Slovenia",
				"ja": "スロベニア",
				"nl": "Slovenië",
				"hr": "Slovenija"
			},
			"population": 2064188,
			"latlng": [
				46.11666666,
				14.81666666
			],
			"demonym": "Slovene",
			"borders": [
				"AUT",
				"HRV",
				"ITA",
				"HUN"
			],
			"area": 20273,
			"gini": 31.2,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "sl",
					"iso639_2": "slv",
					"name": "Slovene",
					"nativeName": "slovenski jezik"
				}
			],
			"alpha2Code": "SI",
			"alpha3Code": "SVN",
			"callingCodes": [
				"386"
			],
			"numericCode": "705"
		},
		{
			"name": "Solomon Islands",
			"nativeName": "Solomon Islands",
			"topLevelDomain": [
				".sb"
			],
			"capital": "Honiara",
			"altSpellings": [
				"SB"
			],
			"region": "Oceania",
			"subregion": "Melanesia",
			"translations": {
				"de": "Salomonen",
				"es": "Islas Salomón",
				"fr": "Îles Salomon",
				"it": "Isole Salomone",
				"ja": "ソロモン諸島",
				"nl": "Salomonseilanden",
				"hr": "Solomonski Otoci"
			},
			"population": 642000,
			"latlng": [
				-8,
				159
			],
			"demonym": "Solomon Islander",
			"borders": [],
			"area": 28896,
			"timezones": [
				"UTC+11:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "SBD",
					"name": "Solomon Islands dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SB",
			"alpha3Code": "SLB",
			"callingCodes": [
				"677"
			],
			"numericCode": "090"
		},
		{
			"name": "Somalia",
			"nativeName": "Soomaaliya",
			"topLevelDomain": [
				".so"
			],
			"capital": "Mogadishu",
			"altSpellings": [
				"SO",
				"aṣ-Ṣūmāl",
				"Federal Republic of Somalia",
				"Jamhuuriyadda Federaalka Soomaaliya",
				"Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Somalia",
				"es": "Somalia",
				"fr": "Somalie",
				"it": "Somalia",
				"ja": "ソマリア",
				"nl": "Somalië",
				"hr": "Somalija"
			},
			"population": 11079000,
			"latlng": [
				10,
				49
			],
			"demonym": "Somali",
			"borders": [
				"DJI",
				"ETH",
				"KEN"
			],
			"area": 637657,
			"gini": null,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Sh",
					"code": "SOS",
					"name": "Somali shilling"
				}
			],
			"languages": [
				{
					"iso639_1": "so",
					"iso639_2": "som",
					"name": "Somali",
					"nativeName": "Soomaaliga"
				},
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "SO",
			"alpha3Code": "SOM",
			"callingCodes": [
				"252"
			],
			"numericCode": "706"
		},
		{
			"name": "South Africa",
			"nativeName": "South Africa",
			"topLevelDomain": [
				".za"
			],
			"capital": "Pretoria",
			"altSpellings": [
				"ZA",
				"RSA",
				"Suid-Afrika",
				"Republic of South Africa"
			],
			"region": "Africa",
			"subregion": "Southern Africa",
			"translations": {
				"de": "Republik Südafrika",
				"es": "República de Sudáfrica",
				"fr": "Afrique du Sud",
				"it": "Sud Africa",
				"ja": "南アフリカ",
				"nl": "Zuid-Afrika",
				"hr": "Južnoafrička Republika"
			},
			"population": 55653654,
			"latlng": [
				-29,
				24
			],
			"demonym": "South African",
			"borders": [
				"BWA",
				"LSO",
				"MOZ",
				"NAM",
				"SWZ",
				"ZWE"
			],
			"area": 1221037,
			"gini": 63.1,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "R",
					"code": "ZAR",
					"name": "South African rand"
				}
			],
			"languages": [
				{
					"iso639_1": "af",
					"iso639_2": "afr",
					"name": "Afrikaans",
					"nativeName": "Afrikaans"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "nr",
					"iso639_2": "nbl",
					"name": "Southern Ndebele",
					"nativeName": "isiNdebele"
				},
				{
					"iso639_1": "st",
					"iso639_2": "sot",
					"name": "Southern Sotho",
					"nativeName": "Sesotho"
				},
				{
					"iso639_1": "ss",
					"iso639_2": "ssw",
					"name": "Swati",
					"nativeName": "SiSwati"
				},
				{
					"iso639_1": "tn",
					"iso639_2": "tsn",
					"name": "Tswana",
					"nativeName": "Setswana"
				},
				{
					"iso639_1": "ts",
					"iso639_2": "tso",
					"name": "Tsonga",
					"nativeName": "Xitsonga"
				},
				{
					"iso639_1": "ve",
					"iso639_2": "ven",
					"name": "Venda",
					"nativeName": "Tshivenḓa"
				},
				{
					"iso639_1": "xh",
					"iso639_2": "xho",
					"name": "Xhosa",
					"nativeName": "isiXhosa"
				},
				{
					"iso639_1": "zu",
					"iso639_2": "zul",
					"name": "Zulu",
					"nativeName": "isiZulu"
				}
			],
			"alpha2Code": "ZA",
			"alpha3Code": "ZAF",
			"callingCodes": [
				"27"
			],
			"numericCode": "710"
		},
		{
			"name": "South Georgia and the South Sandwich Islands",
			"nativeName": "South Georgia",
			"topLevelDomain": [
				".gs"
			],
			"capital": "King Edward Point",
			"altSpellings": [
				"GS",
				"South Georgia and the South Sandwich Islands"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Südgeorgien und die Südlichen Sandwichinseln",
				"es": "Islas Georgias del Sur y Sandwich del Sur",
				"fr": "Géorgie du Sud-et-les Îles Sandwich du Sud",
				"it": "Georgia del Sud e Isole Sandwich Meridionali",
				"ja": "サウスジョージア・サウスサンドウィッチ諸島",
				"nl": "Zuid-Georgia en Zuidelijke Sandwicheilanden",
				"hr": "Južna Georgija i otočje Južni Sandwich"
			},
			"population": 30,
			"latlng": [
				-54.5,
				-37
			],
			"demonym": "South Georgia and the South Sandwich Islander",
			"borders": [],
			"currencies": [
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				},
				{
					"symbol": "£",
					"code": "(none)",
					"name": null
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GS",
			"alpha3Code": "SGS",
			"callingCodes": [
				"500"
			],
			"numericCode": "239"
		},
		{
			"name": "Korea (Republic of)",
			"nativeName": "대한민국",
			"topLevelDomain": [
				".kr"
			],
			"capital": "Seoul",
			"altSpellings": [
				"KR",
				"Republic of Korea"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Südkorea",
				"es": "Corea del Sur",
				"fr": "Corée du Sud",
				"it": "Corea del Sud",
				"ja": "大韓民国",
				"nl": "Zuid-Korea",
				"hr": "Južna Koreja"
			},
			"population": 50801405,
			"latlng": [
				37,
				127.5
			],
			"demonym": "South Korean",
			"borders": [
				"PRK"
			],
			"area": 100210,
			"gini": 31.3,
			"timezones": [
				"UTC+09:00"
			],
			"currencies": [
				{
					"symbol": "₩",
					"code": "KRW",
					"name": "South Korean won"
				}
			],
			"languages": [
				{
					"iso639_1": "ko",
					"iso639_2": "kor",
					"name": "Korean",
					"nativeName": "한국어"
				}
			],
			"alpha2Code": "KR",
			"alpha3Code": "KOR",
			"callingCodes": [
				"82"
			],
			"numericCode": "410"
		},
		{
			"name": "South Sudan",
			"nativeName": "South Sudan",
			"topLevelDomain": [
				".ss"
			],
			"capital": "Juba",
			"altSpellings": [
				"SS"
			],
			"region": "Africa",
			"subregion": "Middle Africa",
			"translations": {
				"fr": "Soudan du Sud",
				"nl": "Zuid-Soedan",
				"de": "Südsudan",
				"it": "Sudan del sud",
				"ja": "南スーダン",
				"es": "Sudán del Sur",
				"hr": "Južni Sudan"
			},
			"population": 12131000,
			"latlng": [
				7,
				30
			],
			"demonym": "South Sudanese",
			"borders": [
				"CAF",
				"COD",
				"ETH",
				"KEN",
				"SDN",
				"UGA"
			],
			"area": 619745,
			"gini": 45.5,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "£",
					"code": "SSP",
					"name": "South Sudanese pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SS",
			"alpha3Code": "SSD",
			"callingCodes": [
				"211"
			],
			"numericCode": "728"
		},
		{
			"name": "Spain",
			"nativeName": "España",
			"topLevelDomain": [
				".es"
			],
			"capital": "Madrid",
			"altSpellings": [
				"ES",
				"Kingdom of Spain",
				"Reino de España"
			],
			"region": "Europe",
			"subregion": "Southern Europe",
			"translations": {
				"de": "Spanien",
				"es": "España",
				"fr": "Espagne",
				"it": "Spagna",
				"ja": "スペイン",
				"nl": "Spanje",
				"hr": "Španjolska"
			},
			"population": 46438422,
			"latlng": [
				40,
				-4
			],
			"demonym": "Spanish",
			"borders": [
				"AND",
				"FRA",
				"GIB",
				"PRT",
				"MAR"
			],
			"area": 505992,
			"gini": 34.7,
			"timezones": [
				"UTC",
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "ES",
			"alpha3Code": "ESP",
			"callingCodes": [
				"34"
			],
			"numericCode": "724"
		},
		{
			"name": "Sri Lanka",
			"nativeName": "śrī laṃkāva",
			"topLevelDomain": [
				".lk"
			],
			"capital": "Colombo",
			"altSpellings": [
				"LK",
				"ilaṅkai",
				"Democratic Socialist Republic of Sri Lanka"
			],
			"region": "Asia",
			"subregion": "Southern Asia",
			"translations": {
				"de": "Sri Lanka",
				"es": "Sri Lanka",
				"fr": "Sri Lanka",
				"it": "Sri Lanka",
				"ja": "スリランカ",
				"nl": "Sri Lanka",
				"hr": "Šri Lanka"
			},
			"population": 20966000,
			"latlng": [
				7,
				81
			],
			"demonym": "Sri Lankan",
			"borders": [
				"IND"
			],
			"area": 65610,
			"gini": 40.3,
			"timezones": [
				"UTC+05:30"
			],
			"currencies": [
				{
					"symbol": "Rs",
					"code": "LKR",
					"name": "Sri Lankan rupee"
				}
			],
			"languages": [
				{
					"iso639_1": "si",
					"iso639_2": "sin",
					"name": "Sinhalese",
					"nativeName": "සිංහල"
				},
				{
					"iso639_1": "ta",
					"iso639_2": "tam",
					"name": "Tamil",
					"nativeName": "தமிழ்"
				}
			],
			"alpha2Code": "LK",
			"alpha3Code": "LKA",
			"callingCodes": [
				"94"
			],
			"numericCode": "144"
		},
		{
			"name": "Sudan",
			"nativeName": "السودان",
			"topLevelDomain": [
				".sd"
			],
			"capital": "Khartoum",
			"altSpellings": [
				"SD",
				"Republic of the Sudan",
				"Jumhūrīyat as-Sūdān"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Sudan",
				"es": "Sudán",
				"fr": "Soudan",
				"it": "Sudan",
				"ja": "スーダン",
				"nl": "Soedan",
				"hr": "Sudan"
			},
			"population": 39598700,
			"latlng": [
				15,
				30
			],
			"demonym": "Sudanese",
			"borders": [
				"CAF",
				"TCD",
				"EGY",
				"ERI",
				"ETH",
				"LBY",
				"SSD"
			],
			"area": 1886068,
			"gini": 35.3,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "ج.س.",
					"code": "SDG",
					"name": "Sudanese pound"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "SD",
			"alpha3Code": "SDN",
			"callingCodes": [
				"249"
			],
			"numericCode": "729"
		},
		{
			"name": "Suriname",
			"nativeName": "Suriname",
			"topLevelDomain": [
				".sr"
			],
			"capital": "Paramaribo",
			"altSpellings": [
				"SR",
				"Sarnam",
				"Sranangron",
				"Republic of Suriname",
				"Republiek Suriname"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Suriname",
				"es": "Surinam",
				"fr": "Surinam",
				"it": "Suriname",
				"ja": "スリナム",
				"nl": "Suriname",
				"hr": "Surinam"
			},
			"population": 541638,
			"latlng": [
				4,
				-56
			],
			"demonym": "Surinamer",
			"borders": [
				"BRA",
				"GUF",
				"FRA",
				"GUY"
			],
			"area": 163820,
			"gini": 52.9,
			"timezones": [
				"UTC-03:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "SRD",
					"name": "Surinamese dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "nl",
					"iso639_2": "nld",
					"name": "Dutch",
					"nativeName": "Nederlands"
				}
			],
			"alpha2Code": "SR",
			"alpha3Code": "SUR",
			"callingCodes": [
				"597"
			],
			"numericCode": "740"
		},
		{
			"name": "Svalbard and Jan Mayen",
			"nativeName": "Svalbard og Jan Mayen",
			"topLevelDomain": [
				".sj"
			],
			"capital": "Longyearbyen",
			"altSpellings": [
				"SJ",
				"Svalbard and Jan Mayen Islands"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Svalbard und Jan Mayen",
				"es": "Islas Svalbard y Jan Mayen",
				"fr": "Svalbard et Jan Mayen",
				"it": "Svalbard e Jan Mayen",
				"ja": "スヴァールバル諸島およびヤンマイエン島",
				"nl": "Svalbard en Jan Mayen",
				"hr": "Svalbard i Jan Mayen"
			},
			"population": 2562,
			"latlng": [
				78,
				20
			],
			"demonym": "Norwegian",
			"borders": [],
			"currencies": [
				{
					"code": "NOK",
					"name": "Norwegian krone",
					"symbol": "kr"
				}
			],
			"languages": [
				{
					"iso639_1": "no",
					"iso639_2": "nor",
					"name": "Norwegian",
					"nativeName": "Norsk"
				}
			],
			"alpha2Code": "SJ",
			"alpha3Code": "SJM",
			"callingCodes": [
				"4779"
			],
			"numericCode": "744"
		},
		{
			"name": "Swaziland",
			"nativeName": "Swaziland",
			"topLevelDomain": [
				".sz"
			],
			"capital": "Lobamba",
			"altSpellings": [
				"SZ",
				"weSwatini",
				"Swatini",
				"Ngwane",
				"Kingdom of Swaziland",
				"Umbuso waseSwatini"
			],
			"region": "Africa",
			"subregion": "Southern Africa",
			"translations": {
				"de": "Swasiland",
				"es": "Suazilandia",
				"fr": "Swaziland",
				"it": "Swaziland",
				"ja": "スワジランド",
				"nl": "Swaziland",
				"hr": "Svazi"
			},
			"population": 1132657,
			"latlng": [
				-26.5,
				31.5
			],
			"demonym": "Swazi",
			"borders": [
				"MOZ",
				"ZAF"
			],
			"area": 17364,
			"gini": 51.5,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "L",
					"code": "SZL",
					"name": "Swazi lilangeni"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "ss",
					"iso639_2": "ssw",
					"name": "Swati",
					"nativeName": "SiSwati"
				}
			],
			"alpha2Code": "SZ",
			"alpha3Code": "SWZ",
			"callingCodes": [
				"268"
			],
			"numericCode": "748"
		},
		{
			"name": "Sweden",
			"nativeName": "Sverige",
			"topLevelDomain": [
				".se"
			],
			"capital": "Stockholm",
			"altSpellings": [
				"SE",
				"Kingdom of Sweden",
				"Konungariket Sverige"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Schweden",
				"es": "Suecia",
				"fr": "Suède",
				"it": "Svezia",
				"ja": "スウェーデン",
				"nl": "Zweden",
				"hr": "Švedska"
			},
			"population": 9894888,
			"latlng": [
				62,
				15
			],
			"demonym": "Swedish",
			"borders": [
				"FIN",
				"NOR"
			],
			"area": 450295,
			"gini": 25,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "kr",
					"code": "SEK",
					"name": "Swedish krona"
				}
			],
			"languages": [
				{
					"iso639_1": "sv",
					"iso639_2": "swe",
					"name": "Swedish",
					"nativeName": "svenska"
				}
			],
			"alpha2Code": "SE",
			"alpha3Code": "SWE",
			"callingCodes": [
				"46"
			],
			"numericCode": "752"
		},
		{
			"name": "Switzerland",
			"nativeName": "Schweiz",
			"topLevelDomain": [
				".ch"
			],
			"capital": "Bern",
			"altSpellings": [
				"CH",
				"Swiss Confederation",
				"Schweiz",
				"Suisse",
				"Svizzera",
				"Svizra"
			],
			"region": "Europe",
			"subregion": "Western Europe",
			"translations": {
				"de": "Schweiz",
				"es": "Suiza",
				"fr": "Suisse",
				"it": "Svizzera",
				"ja": "スイス",
				"nl": "Zwitserland",
				"hr": "Švicarska"
			},
			"population": 8341600,
			"latlng": [
				47,
				8
			],
			"demonym": "Swiss",
			"borders": [
				"AUT",
				"FRA",
				"ITA",
				"LIE",
				"DEU"
			],
			"area": 41284,
			"gini": 33.7,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "CHF",
					"name": "Swiss franc"
				}
			],
			"languages": [
				{
					"iso639_1": "de",
					"iso639_2": "deu",
					"name": "German",
					"nativeName": "Deutsch"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				},
				{
					"iso639_1": "it",
					"iso639_2": "ita",
					"name": "Italian",
					"nativeName": "italiano"
				}
			],
			"alpha2Code": "CH",
			"alpha3Code": "CHE",
			"callingCodes": [
				"41"
			],
			"numericCode": "756"
		},
		{
			"name": "Syrian Arab Republic",
			"nativeName": "سوريا",
			"topLevelDomain": [
				".sy"
			],
			"capital": "Damascus",
			"altSpellings": [
				"SY",
				"Syrian Arab Republic",
				"Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Syrien",
				"es": "Siria",
				"fr": "Syrie",
				"it": "Siria",
				"ja": "シリア・アラブ共和国",
				"nl": "Syrië",
				"hr": "Sirija"
			},
			"population": 18564000,
			"latlng": [
				35,
				38
			],
			"demonym": "Syrian",
			"borders": [
				"IRQ",
				"ISR",
				"JOR",
				"LBN",
				"TUR"
			],
			"area": 185180,
			"gini": 35.8,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "£",
					"code": "SYP",
					"name": "Syrian pound"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "SY",
			"alpha3Code": "SYR",
			"callingCodes": [
				"963"
			],
			"numericCode": "760"
		},
		{
			"name": "Taiwan, Province of China",
			"nativeName": "臺灣",
			"topLevelDomain": [
				".tw"
			],
			"capital": "Taipei",
			"altSpellings": [
				"TW",
				"Táiwān",
				"Republic of China",
				"中華民國",
				"Zhōnghuá Mínguó"
			],
			"region": "Asia",
			"subregion": "Eastern Asia",
			"translations": {
				"de": "Taiwan",
				"es": "Taiwán",
				"fr": "Taïwan",
				"it": "Taiwan",
				"ja": "台湾（台湾省/中華民国）",
				"nl": "Taiwan",
				"hr": "Tajvan"
			},
			"population": 23503349,
			"latlng": [
				23.5,
				121
			],
			"demonym": "Taiwanese",
			"borders": [],
			"area": 36193,
			"gini": null,
			"timezones": [
				"UTC+08:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "TWD",
					"name": "New Taiwan dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "zh",
					"iso639_2": "zho",
					"name": "Chinese",
					"nativeName": "中文 (Zhōngwén)"
				}
			],
			"alpha2Code": "TW",
			"alpha3Code": "TWN",
			"callingCodes": [
				"886"
			],
			"numericCode": "158"
		},
		{
			"name": "Tajikistan",
			"nativeName": "Тоҷикистон",
			"topLevelDomain": [
				".tj"
			],
			"capital": "Dushanbe",
			"altSpellings": [
				"TJ",
				"Toçikiston",
				"Republic of Tajikistan",
				"Ҷумҳурии Тоҷикистон",
				"Çumhuriyi Toçikiston"
			],
			"region": "Asia",
			"subregion": "Central Asia",
			"translations": {
				"de": "Tadschikistan",
				"es": "Tayikistán",
				"fr": "Tadjikistan",
				"it": "Tagikistan",
				"ja": "タジキスタン",
				"nl": "Tadzjikistan",
				"hr": "Tađikistan"
			},
			"population": 8593600,
			"latlng": [
				39,
				71
			],
			"demonym": "Tadzhik",
			"borders": [
				"AFG",
				"CHN",
				"KGZ",
				"UZB"
			],
			"area": 143100,
			"gini": 30.8,
			"timezones": [
				"UTC+05:00"
			],
			"currencies": [
				{
					"symbol": "ЅМ",
					"code": "TJS",
					"name": "Tajikistani somoni"
				}
			],
			"languages": [
				{
					"iso639_1": "tg",
					"iso639_2": "tgk",
					"name": "Tajik",
					"nativeName": "тоҷикӣ"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "TJ",
			"alpha3Code": "TJK",
			"callingCodes": [
				"992"
			],
			"numericCode": "762"
		},
		{
			"name": "Tanzania, United Republic of",
			"nativeName": "Tanzania",
			"topLevelDomain": [
				".tz"
			],
			"capital": "Dodoma",
			"altSpellings": [
				"TZ",
				"United Republic of Tanzania",
				"Jamhuri ya Muungano wa Tanzania"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Tansania",
				"es": "Tanzania",
				"fr": "Tanzanie",
				"it": "Tanzania",
				"ja": "タンザニア",
				"nl": "Tanzania",
				"hr": "Tanzanija"
			},
			"population": 55155000,
			"latlng": [
				-6,
				35
			],
			"demonym": "Tanzanian",
			"borders": [
				"BDI",
				"COD",
				"KEN",
				"MWI",
				"MOZ",
				"RWA",
				"UGA",
				"ZMB"
			],
			"area": 945087,
			"gini": 37.6,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Sh",
					"code": "TZS",
					"name": "Tanzanian shilling"
				}
			],
			"languages": [
				{
					"iso639_1": "sw",
					"iso639_2": "swa",
					"name": "Swahili",
					"nativeName": "Kiswahili"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "TZ",
			"alpha3Code": "TZA",
			"callingCodes": [
				"255"
			],
			"numericCode": "834"
		},
		{
			"name": "Thailand",
			"nativeName": "ประเทศไทย",
			"topLevelDomain": [
				".th"
			],
			"capital": "Bangkok",
			"altSpellings": [
				"TH",
				"Prathet",
				"Thai",
				"Kingdom of Thailand",
				"ราชอาณาจักรไทย",
				"Ratcha Anachak Thai"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Thaïlande",
				"nl": "Thailand",
				"de": "Thailand",
				"it": "Tailandia",
				"ja": "タイ",
				"es": "Tailandia",
				"hr": "Tajland"
			},
			"population": 65327652,
			"latlng": [
				15,
				100
			],
			"demonym": "Thai",
			"borders": [
				"MMR",
				"KHM",
				"LAO",
				"MYS"
			],
			"area": 513120,
			"gini": 40,
			"timezones": [
				"UTC+07:00"
			],
			"currencies": [
				{
					"symbol": "฿",
					"code": "THB",
					"name": "Thai baht"
				}
			],
			"languages": [
				{
					"iso639_1": "th",
					"iso639_2": "tha",
					"name": "Thai",
					"nativeName": "ไทย"
				}
			],
			"alpha2Code": "TH",
			"alpha3Code": "THA",
			"callingCodes": [
				"66"
			],
			"numericCode": "764"
		},
		{
			"name": "Timor-Leste",
			"nativeName": "Timor-Leste",
			"topLevelDomain": [
				".tl"
			],
			"capital": "Dili",
			"altSpellings": [
				"TL",
				"East Timor",
				"Democratic Republic of Timor-Leste",
				"República Democrática de Timor-Leste",
				"Repúblika Demokrátika Timór-Leste"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Timor oriental",
				"nl": "Oost-Timor",
				"de": "Timor-Leste",
				"it": "Timor Est",
				"ja": "東ティモール",
				"es": "Timor Oriental",
				"hr": "Istočni Timor"
			},
			"population": 1167242,
			"latlng": [
				-8.83333333,
				125.91666666
			],
			"demonym": "East Timorese",
			"borders": [
				"IDN"
			],
			"area": 14874,
			"gini": 31.9,
			"timezones": [
				"UTC+09:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				},
				{
					"symbol": null,
					"code": null,
					"name": null
				}
			],
			"languages": [
				{
					"iso639_1": "pt",
					"iso639_2": "por",
					"name": "Portuguese",
					"nativeName": "português"
				}
			],
			"alpha2Code": "TL",
			"alpha3Code": "TLS",
			"callingCodes": [
				"670"
			],
			"numericCode": "626"
		},
		{
			"name": "Togo",
			"nativeName": "Togo",
			"topLevelDomain": [
				".tg"
			],
			"capital": "Lomé",
			"altSpellings": [
				"TG",
				"Togolese",
				"Togolese Republic",
				"République Togolaise"
			],
			"region": "Africa",
			"subregion": "Western Africa",
			"translations": {
				"de": "Togo",
				"es": "Togo",
				"fr": "Togo",
				"it": "Togo",
				"ja": "トーゴ",
				"nl": "Togo",
				"hr": "Togo"
			},
			"population": 7143000,
			"latlng": [
				8,
				1.16666666
			],
			"demonym": "Togolese",
			"borders": [
				"BEN",
				"BFA",
				"GHA"
			],
			"area": 56785,
			"gini": 34.4,
			"timezones": [
				"UTC"
			],
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XOF",
					"name": "West African CFA franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "TG",
			"alpha3Code": "TGO",
			"callingCodes": [
				"228"
			],
			"numericCode": "768"
		},
		{
			"name": "Tokelau",
			"nativeName": "Tokelau",
			"topLevelDomain": [
				".tk"
			],
			"capital": "Fakaofo",
			"altSpellings": [
				"TK"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Tokelau",
				"es": "Islas Tokelau",
				"fr": "Tokelau",
				"it": "Isole Tokelau",
				"ja": "トケラウ",
				"nl": "Tokelau",
				"hr": "Tokelau"
			},
			"population": 1411,
			"latlng": [
				-9,
				-172
			],
			"demonym": "Tokelauan",
			"borders": [],
			"area": 12,
			"currencies": [
				{
					"code": "NZD",
					"name": "New Zealand dollar",
					"symbol": "$"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "TK",
			"alpha3Code": "TKL",
			"callingCodes": [
				"690"
			],
			"numericCode": "772"
		},
		{
			"name": "Tonga",
			"nativeName": "Tonga",
			"topLevelDomain": [
				".to"
			],
			"capital": "Nuku'alofa",
			"altSpellings": [
				"TO"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Tonga",
				"es": "Tonga",
				"fr": "Tonga",
				"it": "Tonga",
				"ja": "トンガ",
				"nl": "Tonga",
				"hr": "Tonga"
			},
			"population": 103252,
			"latlng": [
				-20,
				-175
			],
			"demonym": "Tongan",
			"borders": [],
			"area": 747,
			"timezones": [
				"UTC+13:00"
			],
			"currencies": [
				{
					"symbol": "T$",
					"code": "TOP",
					"name": "Tongan paʻanga"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "to",
					"iso639_2": "ton",
					"name": "Tonga (Tonga Islands)",
					"nativeName": "faka Tonga"
				}
			],
			"alpha2Code": "TO",
			"alpha3Code": "TON",
			"callingCodes": [
				"676"
			],
			"numericCode": "776"
		},
		{
			"name": "Trinidad and Tobago",
			"nativeName": "Trinidad and Tobago",
			"topLevelDomain": [
				".tt"
			],
			"capital": "Port of Spain",
			"altSpellings": [
				"TT",
				"Republic of Trinidad and Tobago"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Trinidad und Tobago",
				"es": "Trinidad y Tobago",
				"fr": "Trinité et Tobago",
				"it": "Trinidad e Tobago",
				"ja": "トリニダード・トバゴ",
				"nl": "Trinidad en Tobago",
				"hr": "Trinidad i Tobago"
			},
			"population": 1349667,
			"latlng": [
				11,
				-61
			],
			"demonym": "Trinidadian",
			"borders": [],
			"area": 5130,
			"gini": 40.3,
			"timezones": [
				"UTC-04:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "TTD",
					"name": "Trinidad and Tobago dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "TT",
			"alpha3Code": "TTO",
			"callingCodes": [
				"1868"
			],
			"numericCode": "780"
		},
		{
			"name": "Tunisia",
			"nativeName": "تونس",
			"topLevelDomain": [
				".tn"
			],
			"capital": "Tunis",
			"altSpellings": [
				"TN",
				"Republic of Tunisia",
				"al-Jumhūriyyah at-Tūnisiyyah"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Tunesien",
				"es": "Túnez",
				"fr": "Tunisie",
				"it": "Tunisia",
				"ja": "チュニジア",
				"nl": "Tunesië",
				"hr": "Tunis"
			},
			"population": 11154400,
			"latlng": [
				34,
				9
			],
			"demonym": "Tunisian",
			"borders": [
				"DZA",
				"LBY"
			],
			"area": 163610,
			"gini": 41.4,
			"timezones": [
				"UTC+01:00"
			],
			"currencies": [
				{
					"symbol": "د.ت",
					"code": "TND",
					"name": "Tunisian dinar"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "TN",
			"alpha3Code": "TUN",
			"callingCodes": [
				"216"
			],
			"numericCode": "788"
		},
		{
			"name": "Turkey",
			"nativeName": "Türkiye",
			"topLevelDomain": [
				".tr"
			],
			"capital": "Ankara",
			"altSpellings": [
				"TR",
				"Turkiye",
				"Republic of Turkey",
				"Türkiye Cumhuriyeti"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Türkei",
				"es": "Turquía",
				"fr": "Turquie",
				"it": "Turchia",
				"ja": "トルコ",
				"nl": "Turkije",
				"hr": "Turska"
			},
			"population": 78741053,
			"latlng": [
				39,
				35
			],
			"demonym": "Turkish",
			"borders": [
				"ARM",
				"AZE",
				"BGR",
				"GEO",
				"GRC",
				"IRN",
				"IRQ",
				"SYR"
			],
			"area": 783562,
			"gini": 39,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "TRY",
					"name": "Turkish lira"
				}
			],
			"languages": [
				{
					"iso639_1": "tr",
					"iso639_2": "tur",
					"name": "Turkish",
					"nativeName": "Türkçe"
				}
			],
			"alpha2Code": "TR",
			"alpha3Code": "TUR",
			"callingCodes": [
				"90"
			],
			"numericCode": "792"
		},
		{
			"name": "Turkmenistan",
			"nativeName": "Türkmenistan",
			"topLevelDomain": [
				".tm"
			],
			"capital": "Ashgabat",
			"altSpellings": [
				"TM"
			],
			"region": "Asia",
			"subregion": "Central Asia",
			"translations": {
				"de": "Turkmenistan",
				"es": "Turkmenistán",
				"fr": "Turkménistan",
				"it": "Turkmenistan",
				"ja": "トルクメニスタン",
				"nl": "Turkmenistan",
				"hr": "Turkmenistan"
			},
			"population": 4751120,
			"latlng": [
				40,
				60
			],
			"demonym": "Turkmen",
			"borders": [
				"AFG",
				"IRN",
				"KAZ",
				"UZB"
			],
			"area": 488100,
			"gini": 40.8,
			"timezones": [
				"UTC+05:00"
			],
			"currencies": [
				{
					"symbol": "m",
					"code": "TMT",
					"name": "Turkmenistan manat"
				}
			],
			"languages": [
				{
					"iso639_1": "tk",
					"iso639_2": "tuk",
					"name": "Turkmen",
					"nativeName": "Türkmen"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "TM",
			"alpha3Code": "TKM",
			"callingCodes": [
				"993"
			],
			"numericCode": "795"
		},
		{
			"name": "Turks and Caicos Islands",
			"nativeName": "Turks and Caicos Islands",
			"topLevelDomain": [
				".tc"
			],
			"capital": "Cockburn Town",
			"altSpellings": [
				"TC"
			],
			"region": "Americas",
			"subregion": "Caribbean",
			"translations": {
				"de": "Turks- und Caicosinseln",
				"es": "Islas Turks y Caicos",
				"fr": "Îles Turques-et-Caïques",
				"it": "Isole Turks e Caicos",
				"ja": "タークス・カイコス諸島",
				"nl": "Turks- en Caicoseilanden",
				"hr": "Otoci Turks i Caicos"
			},
			"population": 31458,
			"latlng": [
				21.75,
				-71.58333333
			],
			"demonym": "Turks and Caicos Islander",
			"borders": [],
			"area": 948,
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "TC",
			"alpha3Code": "TCA",
			"callingCodes": [
				"1649"
			],
			"numericCode": "796"
		},
		{
			"name": "Tuvalu",
			"nativeName": "Tuvalu",
			"topLevelDomain": [
				".tv"
			],
			"capital": "Funafuti",
			"altSpellings": [
				"TV"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Tuvalu",
				"es": "Tuvalu",
				"fr": "Tuvalu",
				"it": "Tuvalu",
				"ja": "ツバル",
				"nl": "Tuvalu",
				"hr": "Tuvalu"
			},
			"population": 10640,
			"latlng": [
				-8,
				178
			],
			"demonym": "Tuvaluan",
			"borders": [],
			"area": 26,
			"timezones": [
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "AUD",
					"name": "Australian dollar"
				},
				{
					"symbol": "$",
					"code": "TVD[G]",
					"name": "Tuvaluan dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "TV",
			"alpha3Code": "TUV",
			"callingCodes": [
				"688"
			],
			"numericCode": "798"
		},
		{
			"name": "Uganda",
			"nativeName": "Uganda",
			"topLevelDomain": [
				".ug"
			],
			"capital": "Kampala",
			"altSpellings": [
				"UG",
				"Republic of Uganda",
				"Jamhuri ya Uganda"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Uganda",
				"es": "Uganda",
				"fr": "Uganda",
				"it": "Uganda",
				"ja": "ウガンダ",
				"nl": "Oeganda",
				"hr": "Uganda"
			},
			"population": 33860700,
			"latlng": [
				1,
				32
			],
			"demonym": "Ugandan",
			"borders": [
				"COD",
				"KEN",
				"RWA",
				"SSD",
				"TZA"
			],
			"area": 241550,
			"gini": 44.3,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "Sh",
					"code": "UGX",
					"name": "Ugandan shilling"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "sw",
					"iso639_2": "swa",
					"name": "Swahili",
					"nativeName": "Kiswahili"
				}
			],
			"alpha2Code": "UG",
			"alpha3Code": "UGA",
			"callingCodes": [
				"256"
			],
			"numericCode": "800"
		},
		{
			"name": "Ukraine",
			"nativeName": "Україна",
			"topLevelDomain": [
				".ua"
			],
			"capital": "Kiev",
			"altSpellings": [
				"UA",
				"Ukrayina"
			],
			"region": "Europe",
			"subregion": "Eastern Europe",
			"translations": {
				"de": "Ukraine",
				"es": "Ucrania",
				"fr": "Ukraine",
				"it": "Ucraina",
				"ja": "ウクライナ",
				"nl": "Oekraïne",
				"hr": "Ukrajina"
			},
			"population": 42692393,
			"latlng": [
				49,
				32
			],
			"demonym": "Ukrainian",
			"borders": [
				"BLR",
				"HUN",
				"MDA",
				"POL",
				"ROU",
				"RUS",
				"SVK"
			],
			"area": 603700,
			"gini": 26.4,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "₴",
					"code": "UAH",
					"name": "Ukrainian hryvnia"
				},
				{
					"symbol": null,
					"code": "RUB",
					"name": "Russian ruble"
				}
			],
			"languages": [
				{
					"iso639_1": "uk",
					"iso639_2": "ukr",
					"name": "Ukrainian",
					"nativeName": "Українська"
				}
			],
			"alpha2Code": "UA",
			"alpha3Code": "UKR",
			"callingCodes": [
				"380"
			],
			"numericCode": "804"
		},
		{
			"name": "United Arab Emirates",
			"nativeName": "دولة الإمارات العربية المتحدة",
			"topLevelDomain": [
				".ae"
			],
			"capital": "Abu Dhabi",
			"altSpellings": [
				"AE",
				"UAE"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Vereinigte Arabische Emirate",
				"es": "Emiratos Árabes Unidos",
				"fr": "Émirats arabes unis",
				"it": "Emirati Arabi Uniti",
				"ja": "アラブ首長国連邦",
				"nl": "Verenigde Arabische Emiraten",
				"hr": "Ujedinjeni Arapski Emirati"
			},
			"population": 9856000,
			"latlng": [
				24,
				54
			],
			"demonym": "Emirati",
			"borders": [
				"OMN",
				"SAU"
			],
			"area": 83600,
			"gini": null,
			"timezones": [
				"UTC+04"
			],
			"currencies": [
				{
					"symbol": "د.إ",
					"code": "AED",
					"name": "United Arab Emirates dirham"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "AE",
			"alpha3Code": "ARE",
			"callingCodes": [
				"971"
			],
			"numericCode": "784"
		},
		{
			"name": "United Kingdom of Great Britain and Northern Ireland",
			"nativeName": "United Kingdom",
			"topLevelDomain": [
				".uk"
			],
			"capital": "London",
			"altSpellings": [
				"GB",
				"UK",
				"Great Britain"
			],
			"region": "Europe",
			"subregion": "Northern Europe",
			"translations": {
				"de": "Vereinigtes Königreich",
				"es": "Reino Unido",
				"fr": "Royaume-Uni",
				"it": "Regno Unito",
				"ja": "イギリス",
				"nl": "Verenigd Koninkrijk",
				"hr": "Ujedinjeno Kraljevstvo"
			},
			"population": 65110000,
			"latlng": [
				54,
				-2
			],
			"demonym": "British",
			"borders": [
				"IRL"
			],
			"area": 242900,
			"gini": 34,
			"timezones": [
				"UTC-08:00",
				"UTC-05:00",
				"UTC-04:00",
				"UTC-03:00",
				"UTC-02:00",
				"UTC",
				"UTC+01:00",
				"UTC+02:00",
				"UTC+06:00"
			],
			"currencies": [
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "GB",
			"alpha3Code": "GBR",
			"callingCodes": [
				"44"
			],
			"numericCode": "826"
		},
		{
			"name": "United States of America",
			"nativeName": "United States",
			"topLevelDomain": [
				".us"
			],
			"capital": "Washington, D.C.",
			"altSpellings": [
				"US",
				"USA",
				"United States of America"
			],
			"region": "Americas",
			"subregion": "Northern America",
			"translations": {
				"de": "Vereinigte Staaten von Amerika",
				"es": "Estados Unidos",
				"fr": "États-Unis",
				"it": "Stati Uniti D'America",
				"ja": "アメリカ合衆国",
				"nl": "Verenigde Staten",
				"hr": "Sjedinjene Američke Države"
			},
			"population": 323947000,
			"latlng": [
				38,
				-97
			],
			"demonym": "American",
			"borders": [
				"CAN",
				"MEX"
			],
			"area": 9629091,
			"gini": 48,
			"timezones": [
				"UTC-12:00",
				"UTC-11:00",
				"UTC-10:00",
				"UTC-09:00",
				"UTC-08:00",
				"UTC-07:00",
				"UTC-06:00",
				"UTC-05:00",
				"UTC-04:00",
				"UTC+10:00",
				"UTC+12:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "US",
			"alpha3Code": "USA",
			"callingCodes": [
				"1"
			],
			"numericCode": "840"
		},
		{
			"name": "Uruguay",
			"nativeName": "Uruguay",
			"topLevelDomain": [
				".uy"
			],
			"capital": "Montevideo",
			"altSpellings": [
				"UY",
				"Oriental Republic of Uruguay",
				"República Oriental del Uruguay"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Uruguay",
				"es": "Uruguay",
				"fr": "Uruguay",
				"it": "Uruguay",
				"ja": "ウルグアイ",
				"nl": "Uruguay",
				"hr": "Urugvaj"
			},
			"population": 3480222,
			"latlng": [
				-33,
				-56
			],
			"demonym": "Uruguayan",
			"borders": [
				"ARG",
				"BRA"
			],
			"area": 181034,
			"gini": 39.7,
			"timezones": [
				"UTC-03:00"
			],
			"currencies": [
				{
					"symbol": "$",
					"code": "UYU",
					"name": "Uruguayan peso"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "UY",
			"alpha3Code": "URY",
			"callingCodes": [
				"598"
			],
			"numericCode": "858"
		},
		{
			"name": "Uzbekistan",
			"nativeName": "O‘zbekiston",
			"topLevelDomain": [
				".uz"
			],
			"capital": "Tashkent",
			"altSpellings": [
				"UZ",
				"Republic of Uzbekistan",
				"O‘zbekiston Respublikasi",
				"Ўзбекистон Республикаси"
			],
			"region": "Asia",
			"subregion": "Central Asia",
			"translations": {
				"de": "Usbekistan",
				"es": "Uzbekistán",
				"fr": "Ouzbékistan",
				"it": "Uzbekistan",
				"ja": "ウズベキスタン",
				"nl": "Oezbekistan",
				"hr": "Uzbekistan"
			},
			"population": 31576400,
			"latlng": [
				41,
				64
			],
			"demonym": "Uzbekistani",
			"borders": [
				"AFG",
				"KAZ",
				"KGZ",
				"TJK",
				"TKM"
			],
			"area": 447400,
			"gini": 36.7,
			"timezones": [
				"UTC+05:00"
			],
			"currencies": [
				{
					"symbol": null,
					"code": "UZS",
					"name": "Uzbekistani som"
				}
			],
			"languages": [
				{
					"iso639_1": "uz",
					"iso639_2": "uzb",
					"name": "Uzbek",
					"nativeName": "Oʻzbek"
				},
				{
					"iso639_1": "ru",
					"iso639_2": "rus",
					"name": "Russian",
					"nativeName": "Русский"
				}
			],
			"alpha2Code": "UZ",
			"alpha3Code": "UZB",
			"callingCodes": [
				"998"
			],
			"numericCode": "860"
		},
		{
			"name": "Vanuatu",
			"nativeName": "Vanuatu",
			"topLevelDomain": [
				".vu"
			],
			"capital": "Port Vila",
			"altSpellings": [
				"VU",
				"Republic of Vanuatu",
				"Ripablik blong Vanuatu",
				"République de Vanuatu"
			],
			"region": "Oceania",
			"subregion": "Melanesia",
			"translations": {
				"de": "Vanuatu",
				"es": "Vanuatu",
				"fr": "Vanuatu",
				"it": "Vanuatu",
				"ja": "バヌアツ",
				"nl": "Vanuatu",
				"hr": "Vanuatu"
			},
			"population": 277500,
			"latlng": [
				-16,
				167
			],
			"demonym": "Ni-Vanuatu",
			"borders": [],
			"area": 12189,
			"timezones": [
				"UTC+11:00"
			],
			"currencies": [
				{
					"symbol": "Vt",
					"code": "VUV",
					"name": "Vanuatu vatu"
				}
			],
			"languages": [
				{
					"iso639_1": "bi",
					"iso639_2": "bis",
					"name": "Bislama",
					"nativeName": "Bislama"
				},
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "VU",
			"alpha3Code": "VUT",
			"callingCodes": [
				"678"
			],
			"numericCode": "548"
		},
		{
			"name": "Venezuela (Bolivarian Republic of)",
			"nativeName": "Venezuela",
			"topLevelDomain": [
				".ve"
			],
			"capital": "Caracas",
			"altSpellings": [
				"VE",
				"Bolivarian Republic of Venezuela",
				"República Bolivariana de Venezuela"
			],
			"region": "Americas",
			"subregion": "South America",
			"translations": {
				"de": "Venezuela",
				"es": "Venezuela",
				"fr": "Venezuela",
				"it": "Venezuela",
				"ja": "ベネズエラ・ボリバル共和国",
				"nl": "Venezuela",
				"hr": "Venezuela"
			},
			"population": 31028700,
			"latlng": [
				8,
				-66
			],
			"demonym": "Venezuelan",
			"borders": [
				"BRA",
				"COL",
				"GUY"
			],
			"area": 916445,
			"gini": 44.8,
			"timezones": [
				"UTC-04:30"
			],
			"currencies": [
				{
					"symbol": "Bs F",
					"code": "VEF",
					"name": "Venezuelan bolívar"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "VE",
			"alpha3Code": "VEN",
			"callingCodes": [
				"58"
			],
			"numericCode": "862"
		},
		{
			"name": "Viet Nam",
			"nativeName": "Việt Nam",
			"topLevelDomain": [
				".vn"
			],
			"capital": "Hanoi",
			"altSpellings": [
				"VN",
				"Socialist Republic of Vietnam",
				"Cộng hòa Xã hội chủ nghĩa Việt Nam"
			],
			"region": "Asia",
			"subregion": "South-Eastern Asia",
			"translations": {
				"fr": "Viêt Nam",
				"nl": "Vietnam",
				"de": "Vietnam",
				"it": "Vietnam",
				"ja": "ベトナム",
				"es": "Vietnam",
				"hr": "Vijetnam"
			},
			"population": 92700000,
			"latlng": [
				16.16666666,
				107.83333333
			],
			"demonym": "Vietnamese",
			"borders": [
				"KHM",
				"CHN",
				"LAO"
			],
			"area": 331212,
			"gini": 35.6,
			"timezones": [
				"UTC+07:00"
			],
			"currencies": [
				{
					"symbol": "₫",
					"code": "VND",
					"name": "Vietnamese đồng"
				}
			],
			"languages": [
				{
					"iso639_1": "vi",
					"iso639_2": "vie",
					"name": "Vietnamese",
					"nativeName": "Tiếng Việt"
				}
			],
			"alpha2Code": "VN",
			"alpha3Code": "VNM",
			"callingCodes": [
				"84"
			],
			"numericCode": "704"
		},
		{
			"name": "Wallis and Futuna",
			"nativeName": "Wallis et Futuna",
			"topLevelDomain": [
				".wf"
			],
			"capital": "Mata-Utu",
			"altSpellings": [
				"WF",
				"Territory of the Wallis and Futuna Islands",
				"Territoire des îles Wallis et Futuna"
			],
			"region": "Oceania",
			"subregion": "Polynesia",
			"translations": {
				"de": "Wallis und Futuna",
				"es": "Wallis y Futuna",
				"fr": "Wallis-et-Futuna",
				"it": "Wallis e Futuna",
				"ja": "ウォリス・フツナ",
				"nl": "Wallis en Futuna",
				"hr": "Wallis i Fortuna"
			},
			"population": 11750,
			"latlng": [
				-13.3,
				-176.2
			],
			"demonym": "Wallis and Futuna Islander",
			"borders": [],
			"area": 142,
			"currencies": [
				{
					"symbol": "Fr",
					"code": "XPF",
					"name": "CFP franc"
				}
			],
			"languages": [
				{
					"iso639_1": "fr",
					"iso639_2": "fra",
					"name": "French",
					"nativeName": "français"
				}
			],
			"alpha2Code": "WF",
			"alpha3Code": "WLF",
			"callingCodes": [
				"681"
			],
			"numericCode": "876"
		},
		{
			"name": "Western Sahara",
			"nativeName": "الصحراء الغربية",
			"topLevelDomain": [
				".eh"
			],
			"capital": "El Aaiún",
			"altSpellings": [
				"EH",
				"Taneẓroft Tutrimt"
			],
			"region": "Africa",
			"subregion": "Northern Africa",
			"translations": {
				"de": "Westsahara",
				"es": "Sahara Occidental",
				"fr": "Sahara Occidental",
				"it": "Sahara Occidentale",
				"ja": "西サハラ",
				"nl": "Westelijke Sahara",
				"hr": "Zapadna Sahara"
			},
			"population": 510713,
			"latlng": [
				24.5,
				-13
			],
			"demonym": "Sahrawi",
			"borders": [
				"DZA",
				"MRT",
				"MAR"
			],
			"area": 266000,
			"currencies": [
				{
					"code": "MAD",
					"name": "Moroccan dirham",
					"symbol": "د.م."
				},
				{
					"code": "DZD",
					"name": "Algerian dinar",
					"symbol": "د.ج"
				}
			],
			"languages": [
				{
					"iso639_1": "es",
					"iso639_2": "spa",
					"name": "Spanish",
					"nativeName": "español"
				}
			],
			"alpha2Code": "EH",
			"alpha3Code": "ESH",
			"callingCodes": [
				"212"
			],
			"numericCode": "732"
		},
		{
			"name": "Yemen",
			"nativeName": "اليَمَن",
			"topLevelDomain": [
				".ye"
			],
			"capital": "Sana'a",
			"altSpellings": [
				"YE",
				"Yemeni Republic",
				"al-Jumhūriyyah al-Yamaniyyah"
			],
			"region": "Asia",
			"subregion": "Western Asia",
			"translations": {
				"de": "Jemen",
				"es": "Yemen",
				"fr": "Yémen",
				"it": "Yemen",
				"ja": "イエメン",
				"nl": "Jemen",
				"hr": "Jemen"
			},
			"population": 27478000,
			"latlng": [
				15,
				48
			],
			"demonym": "Yemeni",
			"borders": [
				"OMN",
				"SAU"
			],
			"area": 527968,
			"gini": 37.7,
			"timezones": [
				"UTC+03:00"
			],
			"currencies": [
				{
					"symbol": "﷼",
					"code": "YER",
					"name": "Yemeni rial"
				}
			],
			"languages": [
				{
					"iso639_1": "ar",
					"iso639_2": "ara",
					"name": "Arabic",
					"nativeName": "العربية"
				}
			],
			"alpha2Code": "YE",
			"alpha3Code": "YEM",
			"callingCodes": [
				"967"
			],
			"numericCode": "887"
		},
		{
			"name": "Zambia",
			"nativeName": "Zambia",
			"topLevelDomain": [
				".zm"
			],
			"capital": "Lusaka",
			"altSpellings": [
				"ZM",
				"Republic of Zambia"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Sambia",
				"es": "Zambia",
				"fr": "Zambie",
				"it": "Zambia",
				"ja": "ザンビア",
				"nl": "Zambia",
				"hr": "Zambija"
			},
			"population": 15933883,
			"latlng": [
				-15,
				30
			],
			"demonym": "Zambian",
			"borders": [
				"AGO",
				"BWA",
				"COD",
				"MWI",
				"MOZ",
				"NAM",
				"TZA",
				"ZWE"
			],
			"area": 752612,
			"gini": 54.6,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "ZK",
					"code": "ZMW",
					"name": "Zambian kwacha"
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				}
			],
			"alpha2Code": "ZM",
			"alpha3Code": "ZMB",
			"callingCodes": [
				"260"
			],
			"numericCode": "894"
		},
		{
			"name": "Zimbabwe",
			"nativeName": "Zimbabwe",
			"topLevelDomain": [
				".zw"
			],
			"capital": "Harare",
			"altSpellings": [
				"ZW",
				"Republic of Zimbabwe"
			],
			"region": "Africa",
			"subregion": "Eastern Africa",
			"translations": {
				"de": "Simbabwe",
				"es": "Zimbabue",
				"fr": "Zimbabwe",
				"it": "Zimbabwe",
				"ja": "ジンバブエ",
				"nl": "Zimbabwe",
				"hr": "Zimbabve"
			},
			"population": 14240168,
			"latlng": [
				-20,
				30
			],
			"demonym": "Zimbabwean",
			"borders": [
				"BWA",
				"MOZ",
				"ZAF",
				"ZMB"
			],
			"area": 390757,
			"gini": null,
			"timezones": [
				"UTC+02:00"
			],
			"currencies": [
				{
					"symbol": "P",
					"code": "BWP",
					"name": "Botswana pula"
				},
				{
					"symbol": "£",
					"code": "GBP",
					"name": "British pound"
				},
				{
					"symbol": "¥",
					"code": "CNY",
					"name": "Chinese yuan"
				},
				{
					"symbol": "€",
					"code": "EUR",
					"name": "Euro"
				},
				{
					"symbol": "₹",
					"code": "INR",
					"name": "Indian rupee"
				},
				{
					"symbol": "¥",
					"code": "JPY",
					"name": "Japanese yen"
				},
				{
					"symbol": "Rs",
					"code": "ZAR",
					"name": "South African rand"
				},
				{
					"symbol": "$",
					"code": "USD",
					"name": "United States dollar"
				},
				{
					"symbol": null,
					"code": "(none)",
					"name": null
				}
			],
			"languages": [
				{
					"iso639_1": "en",
					"iso639_2": "eng",
					"name": "English",
					"nativeName": "English"
				},
				{
					"iso639_1": "sn",
					"iso639_2": "sna",
					"name": "Shona",
					"nativeName": "chiShona"
				},
				{
					"iso639_1": "nd",
					"iso639_2": "nde",
					"name": "Northern Ndebele",
					"nativeName": "isiNdebele"
				}
			],
			"alpha2Code": "ZW",
			"alpha3Code": "ZWE",
			"callingCodes": [
				"263"
			],
			"numericCode": "716"
		}
	];

/***/ }
/******/ ]);