import "./chunk-J4B6MK7R.js";

// node_modules/auth0-js/dist/auth0.min.esm.js
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function createCommonjsModule(fn, module) {
  return fn(module = { exports: {} }, module.exports), module.exports;
}
var urlJoin = createCommonjsModule(function(module) {
  var context, definition;
  context = commonjsGlobal, definition = function() {
    function normalize(strArray) {
      var resultArray = [];
      if (0 === strArray.length)
        return "";
      if ("string" != typeof strArray[0])
        throw new TypeError("Url must be a string. Received " + strArray[0]);
      if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
        var first = strArray.shift();
        strArray[0] = first + strArray[0];
      }
      strArray[0].match(/^file:\/\/\//) ? strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1:///") : strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1://");
      for (var i = 0; i < strArray.length; i++) {
        var component = strArray[i];
        if ("string" != typeof component)
          throw new TypeError("Url must be a string. Received " + component);
        "" !== component && (i > 0 && (component = component.replace(/^[\/]+/, "")), component = i < strArray.length - 1 ? component.replace(/[\/]+$/, "") : component.replace(/[\/]+$/, "/"), resultArray.push(component));
      }
      var str = resultArray.join("/"), parts = (str = str.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&");
    }
    return function() {
      return normalize("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments));
    };
  }, module.exports ? module.exports = definition() : context.urljoin = definition();
});
var origSymbol = "undefined" != typeof Symbol && Symbol;
var test = { foo: {} };
var $Object = Object;
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var concatty = function(a2, b2) {
  for (var arr2 = [], i = 0; i < a2.length; i += 1)
    arr2[i] = a2[i];
  for (var j = 0; j < b2.length; j += 1)
    arr2[j + a2.length] = b2[j];
  return arr2;
};
var slicy = function(arrLike, offset) {
  for (var arr2 = [], i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)
    arr2[j] = arrLike[i];
  return arr2;
};
var joiny = function(arr2, joiner) {
  for (var str = "", i = 0; i < arr2.length; i += 1)
    str += arr2[i], i + 1 < arr2.length && (str += joiner);
  return str;
};
var functionBind = Function.prototype.bind || function(that) {
  var target = this;
  if ("function" != typeof target || "[object Function]" !== toStr.apply(target))
    throw new TypeError(ERROR_MESSAGE + target);
  for (var bound, args = slicy(arguments, 1), binder = function() {
    if (this instanceof bound) {
      var result = target.apply(this, concatty(args, arguments));
      return Object(result) === result ? result : this;
    }
    return target.apply(that, concatty(args, arguments));
  }, boundLength = max(0, target.length - args.length), boundArgs = [], i = 0; i < boundLength; i++)
    boundArgs[i] = "$" + i;
  if (bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder), target.prototype) {
    var Empty = function() {
    };
    Empty.prototype = target.prototype, bound.prototype = new Empty(), Empty.prototype = null;
  }
  return bound;
};
var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e2) {
  }
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD)
  try {
    $gOPD({}, "");
  } catch (e2) {
    $gOPD = null;
  }
var throwTypeError = function() {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
  try {
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols$1 = "function" == typeof origSymbol && "function" == typeof Symbol && "symbol" == typeof origSymbol("foo") && "symbol" == typeof Symbol("bar") && function() {
  if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
    return false;
  if ("symbol" == typeof Symbol.iterator)
    return true;
  var obj = {}, sym = Symbol("test"), symObj = Object(sym);
  if ("string" == typeof sym)
    return false;
  if ("[object Symbol]" !== Object.prototype.toString.call(sym))
    return false;
  if ("[object Symbol]" !== Object.prototype.toString.call(symObj))
    return false;
  for (sym in obj[sym] = 42, obj)
    return false;
  if ("function" == typeof Object.keys && 0 !== Object.keys(obj).length)
    return false;
  if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(obj).length)
    return false;
  var syms = Object.getOwnPropertySymbols(obj);
  if (1 !== syms.length || syms[0] !== sym)
    return false;
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym))
    return false;
  if ("function" == typeof Object.getOwnPropertyDescriptor) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (42 !== descriptor.value || true !== descriptor.enumerable)
      return false;
  }
  return true;
}();
var hasProto$1 = { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
var getProto = Object.getPrototypeOf || (hasProto$1 ? function(x2) {
  return x2.__proto__;
} : null);
var needsEval = {};
var TypedArray = "undefined" != typeof Uint8Array && getProto ? getProto(Uint8Array) : void 0;
var INTRINSICS = { "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": hasSymbols$1 && getProto ? getProto([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": needsEval, "%AsyncGenerator%": needsEval, "%AsyncGeneratorFunction%": needsEval, "%AsyncIteratorPrototype%": needsEval, "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics, "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt, "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array, "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry, "%Function%": $Function, "%GeneratorFunction%": needsEval, "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": hasSymbols$1 && getProto ? getProto(getProto([][Symbol.iterator]())) : void 0, "%JSON%": "object" == typeof JSON ? JSON : void 0, "%Map%": "undefined" == typeof Map ? void 0 : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && hasSymbols$1 && getProto ? getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? void 0 : Promise, "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? void 0 : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && hasSymbols$1 && getProto ? getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": hasSymbols$1 && getProto ? getProto(""[Symbol.iterator]()) : void 0, "%Symbol%": hasSymbols$1 ? Symbol : void 0, "%SyntaxError%": $SyntaxError, "%ThrowTypeError%": ThrowTypeError, "%TypedArray%": TypedArray, "%TypeError%": $TypeError, "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet };
if (getProto)
  try {
    null.error;
  } catch (e2) {
    errorProto = getProto(getProto(e2));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
var errorProto;
var LEGACY_ALIASES = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] };
var $concat = functionBind.call(Function.call, Array.prototype.concat);
var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
var $replace = functionBind.call(Function.call, String.prototype.replace);
var $strSlice = functionBind.call(Function.call, String.prototype.slice);
var $exec = functionBind.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function(string) {
  var first = $strSlice(string, 0, 1), last = $strSlice(string, -1);
  if ("%" === first && "%" !== last)
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  if ("%" === last && "%" !== first)
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  var result = [];
  return $replace(string, rePropName, function(match, number, quote2, subString) {
    result[result.length] = quote2 ? $replace(subString, reEscapeChar, "$1") : number || match;
  }), result;
};
var getBaseIntrinsic = function(name, allowMissing) {
  var alias, intrinsicName = name;
  if (src(LEGACY_ALIASES, intrinsicName) && (intrinsicName = "%" + (alias = LEGACY_ALIASES[intrinsicName])[0] + "%"), src(INTRINSICS, intrinsicName)) {
    var value2 = INTRINSICS[intrinsicName];
    if (value2 === needsEval && (value2 = function doEval(name2) {
      var value3;
      if ("%AsyncFunction%" === name2)
        value3 = getEvalledConstructor("async function () {}");
      else if ("%GeneratorFunction%" === name2)
        value3 = getEvalledConstructor("function* () {}");
      else if ("%AsyncGeneratorFunction%" === name2)
        value3 = getEvalledConstructor("async function* () {}");
      else if ("%AsyncGenerator%" === name2) {
        var fn = doEval("%AsyncGeneratorFunction%");
        fn && (value3 = fn.prototype);
      } else if ("%AsyncIteratorPrototype%" === name2) {
        var gen = doEval("%AsyncGenerator%");
        gen && getProto && (value3 = getProto(gen.prototype));
      }
      return INTRINSICS[name2] = value3, value3;
    }(intrinsicName)), void 0 === value2 && !allowMissing)
      throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
    return { alias, name: intrinsicName, value: value2 };
  }
  throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function(name, allowMissing) {
  if ("string" != typeof name || 0 === name.length)
    throw new $TypeError("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof allowMissing)
    throw new $TypeError('"allowMissing" argument must be a boolean');
  if (null === $exec(/^%?[^%]*%?$/, name))
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var parts = stringToPath(name), intrinsicBaseName = parts.length > 0 ? parts[0] : "", intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing), intrinsicRealName = intrinsic.name, value2 = intrinsic.value, skipFurtherCaching = false, alias = intrinsic.alias;
  alias && (intrinsicBaseName = alias[0], $spliceApply(parts, $concat([0, 1], alias)));
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i], first = $strSlice(part, 0, 1), last = $strSlice(part, -1);
    if (('"' === first || "'" === first || "`" === first || '"' === last || "'" === last || "`" === last) && first !== last)
      throw new $SyntaxError("property names with quotes must have matching quotes");
    if ("constructor" !== part && isOwn || (skipFurtherCaching = true), src(INTRINSICS, intrinsicRealName = "%" + (intrinsicBaseName += "." + part) + "%"))
      value2 = INTRINSICS[intrinsicRealName];
    else if (null != value2) {
      if (!(part in value2)) {
        if (!allowMissing)
          throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
        return;
      }
      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value2, part);
        value2 = (isOwn = !!desc) && "get" in desc && !("originalValue" in desc.get) ? desc.get : value2[part];
      } else
        isOwn = src(value2, part), value2 = value2[part];
      isOwn && !skipFurtherCaching && (INTRINSICS[intrinsicRealName] = value2);
    }
  }
  return value2;
};
var callBind = createCommonjsModule(function(module) {
  var $apply = getIntrinsic("%Function.prototype.apply%"), $call = getIntrinsic("%Function.prototype.call%"), $reflectApply = getIntrinsic("%Reflect.apply%", true) || functionBind.call($call, $apply), $gOPD2 = getIntrinsic("%Object.getOwnPropertyDescriptor%", true), $defineProperty = getIntrinsic("%Object.defineProperty%", true), $max = getIntrinsic("%Math.max%");
  if ($defineProperty)
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e2) {
      $defineProperty = null;
    }
  module.exports = function(originalFunction) {
    var func = $reflectApply(functionBind, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      desc.configurable && $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
    }
    return func;
  };
  var applyBind = function() {
    return $reflectApply(functionBind, $apply, arguments);
  };
  $defineProperty ? $defineProperty(module.exports, "apply", { value: applyBind }) : module.exports.apply = applyBind;
});
var $indexOf = (callBind.apply, callBind(getIntrinsic("String.prototype.indexOf")));
var callBound = function(name, allowMissing) {
  var intrinsic = getIntrinsic(name, !!allowMissing);
  return "function" == typeof intrinsic && $indexOf(name, ".prototype.") > -1 ? callBind(intrinsic) : intrinsic;
};
var semver = function(n2) {
  return n2 && n2.default || n2;
}(Object.freeze({ __proto__: null, default: {} }));
var hasMap = "function" == typeof Map && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && "function" == typeof mapSizeDescriptor.get ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = "function" == typeof Set && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && "function" == typeof setSizeDescriptor.get ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var weakMapHas = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null;
var weakSetHas = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null;
var weakRefDeref = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace$1 = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat$1 = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = "function" == typeof BigInt ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null;
var hasShammedSymbols = "function" == typeof Symbol && "object" == typeof Symbol.iterator;
var toStringTag = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols || "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
  return O.__proto__;
} : null);
function addNumericSeparator(num, str) {
  if (num === 1 / 0 || num === -1 / 0 || num != num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str))
    return str;
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if ("number" == typeof num) {
    var int = num < 0 ? -$floor(-num) : $floor(num);
    if (int !== num) {
      var intStr = String(int), dec = $slice.call(str, intStr.length + 1);
      return $replace$1.call(intStr, sepRegex, "$&_") + "." + $replace$1.call($replace$1.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace$1.call(str, sepRegex, "$&_");
}
var inspectCustom = semver.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has(opts, "quoteStyle") && "single" !== opts.quoteStyle && "double" !== opts.quoteStyle)
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (has(opts, "maxStringLength") && ("number" == typeof opts.maxStringLength ? opts.maxStringLength < 0 && opts.maxStringLength !== 1 / 0 : null !== opts.maxStringLength))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var customInspect = !has(opts, "customInspect") || opts.customInspect;
  if ("boolean" != typeof customInspect && "symbol" !== customInspect)
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (has(opts, "indent") && null !== opts.indent && "	" !== opts.indent && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (has(opts, "numericSeparator") && "boolean" != typeof opts.numericSeparator)
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var numericSeparator = opts.numericSeparator;
  if (void 0 === obj)
    return "undefined";
  if (null === obj)
    return "null";
  if ("boolean" == typeof obj)
    return obj ? "true" : "false";
  if ("string" == typeof obj)
    return function inspectString(str2, opts2) {
      if (str2.length > opts2.maxStringLength) {
        var remaining = str2.length - opts2.maxStringLength, trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str2, 0, opts2.maxStringLength), opts2) + trailer;
      }
      return wrapQuotes($replace$1.call($replace$1.call(str2, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts2);
    }(obj, opts);
  if ("number" == typeof obj) {
    if (0 === obj)
      return 1 / 0 / obj > 0 ? "0" : "-0";
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if ("bigint" == typeof obj) {
    var bigIntStr = String(obj) + "n";
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = void 0 === opts.depth ? 5 : opts.depth;
  if (void 0 === depth && (depth = 0), depth >= maxDepth && maxDepth > 0 && "object" == typeof obj)
    return isArray(obj) ? "[Array]" : "[Object]";
  var indent = function(opts2, depth2) {
    var baseIndent;
    if ("	" === opts2.indent)
      baseIndent = "	";
    else {
      if (!("number" == typeof opts2.indent && opts2.indent > 0))
        return null;
      baseIndent = $join.call(Array(opts2.indent + 1), " ");
    }
    return { base: baseIndent, prev: $join.call(Array(depth2 + 1), baseIndent) };
  }(opts, depth);
  if (void 0 === seen)
    seen = [];
  else if (indexOf(seen, obj) >= 0)
    return "[Circular]";
  function inspect(value2, from, noIndent) {
    if (from && (seen = $arrSlice.call(seen)).push(from), noIndent) {
      var newOpts = { depth: opts.depth };
      return has(opts, "quoteStyle") && (newOpts.quoteStyle = opts.quoteStyle), inspect_(value2, newOpts, depth + 1, seen);
    }
    return inspect_(value2, opts, depth + 1, seen);
  }
  if ("function" == typeof obj && !isRegExp(obj)) {
    var name = function(f2) {
      if (f2.name)
        return f2.name;
      var m = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
      if (m)
        return m[1];
      return null;
    }(obj), keys = arrObjKeys(obj, inspect);
    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace$1.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return "object" != typeof obj || hasShammedSymbols ? symString : markBoxed(symString);
  }
  if (function(x2) {
    if (!x2 || "object" != typeof x2)
      return false;
    if ("undefined" != typeof HTMLElement && x2 instanceof HTMLElement)
      return true;
    return "string" == typeof x2.nodeName && "function" == typeof x2.getAttribute;
  }(obj)) {
    for (var s2 = "<" + $toLowerCase.call(String(obj.nodeName)), attrs = obj.attributes || [], i = 0; i < attrs.length; i++)
      s2 += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    return s2 += ">", obj.childNodes && obj.childNodes.length && (s2 += "..."), s2 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
  }
  if (isArray(obj)) {
    if (0 === obj.length)
      return "[]";
    var xs = arrObjKeys(obj, inspect);
    return indent && !function(xs2) {
      for (var i2 = 0; i2 < xs2.length; i2++)
        if (indexOf(xs2[i2], "\n") >= 0)
          return false;
      return true;
    }(xs) ? "[" + indentedJoin(xs, indent) + "]" : "[ " + $join.call(xs, ", ") + " ]";
  }
  if (function(obj2) {
    return !("[object Error]" !== toStr$1(obj2) || toStringTag && "object" == typeof obj2 && toStringTag in obj2);
  }(obj)) {
    var parts = arrObjKeys(obj, inspect);
    return "cause" in Error.prototype || !("cause" in obj) || isEnumerable.call(obj, "cause") ? 0 === parts.length ? "[" + String(obj) + "]" : "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }" : "{ [" + String(obj) + "] " + $join.call($concat$1.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
  }
  if ("object" == typeof obj && customInspect) {
    if (inspectSymbol && "function" == typeof obj[inspectSymbol] && semver)
      return semver(obj, { depth: maxDepth - depth });
    if ("symbol" !== customInspect && "function" == typeof obj.inspect)
      return obj.inspect();
  }
  if (function(x2) {
    if (!mapSize || !x2 || "object" != typeof x2)
      return false;
    try {
      mapSize.call(x2);
      try {
        setSize.call(x2);
      } catch (s3) {
        return true;
      }
      return x2 instanceof Map;
    } catch (e2) {
    }
    return false;
  }(obj)) {
    var mapParts = [];
    return mapForEach && mapForEach.call(obj, function(value2, key) {
      mapParts.push(inspect(key, obj, true) + " => " + inspect(value2, obj));
    }), collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (function(x2) {
    if (!setSize || !x2 || "object" != typeof x2)
      return false;
    try {
      setSize.call(x2);
      try {
        mapSize.call(x2);
      } catch (m) {
        return true;
      }
      return x2 instanceof Set;
    } catch (e2) {
    }
    return false;
  }(obj)) {
    var setParts = [];
    return setForEach && setForEach.call(obj, function(value2) {
      setParts.push(inspect(value2, obj));
    }), collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (function(x2) {
    if (!weakMapHas || !x2 || "object" != typeof x2)
      return false;
    try {
      weakMapHas.call(x2, weakMapHas);
      try {
        weakSetHas.call(x2, weakSetHas);
      } catch (s3) {
        return true;
      }
      return x2 instanceof WeakMap;
    } catch (e2) {
    }
    return false;
  }(obj))
    return weakCollectionOf("WeakMap");
  if (function(x2) {
    if (!weakSetHas || !x2 || "object" != typeof x2)
      return false;
    try {
      weakSetHas.call(x2, weakSetHas);
      try {
        weakMapHas.call(x2, weakMapHas);
      } catch (s3) {
        return true;
      }
      return x2 instanceof WeakSet;
    } catch (e2) {
    }
    return false;
  }(obj))
    return weakCollectionOf("WeakSet");
  if (function(x2) {
    if (!weakRefDeref || !x2 || "object" != typeof x2)
      return false;
    try {
      return weakRefDeref.call(x2), true;
    } catch (e2) {
    }
    return false;
  }(obj))
    return weakCollectionOf("WeakRef");
  if (function(obj2) {
    return !("[object Number]" !== toStr$1(obj2) || toStringTag && "object" == typeof obj2 && toStringTag in obj2);
  }(obj))
    return markBoxed(inspect(Number(obj)));
  if (function(obj2) {
    if (!obj2 || "object" != typeof obj2 || !bigIntValueOf)
      return false;
    try {
      return bigIntValueOf.call(obj2), true;
    } catch (e2) {
    }
    return false;
  }(obj))
    return markBoxed(inspect(bigIntValueOf.call(obj)));
  if (function(obj2) {
    return !("[object Boolean]" !== toStr$1(obj2) || toStringTag && "object" == typeof obj2 && toStringTag in obj2);
  }(obj))
    return markBoxed(booleanValueOf.call(obj));
  if (function(obj2) {
    return !("[object String]" !== toStr$1(obj2) || toStringTag && "object" == typeof obj2 && toStringTag in obj2);
  }(obj))
    return markBoxed(inspect(String(obj)));
  if (!function(obj2) {
    return !("[object Date]" !== toStr$1(obj2) || toStringTag && "object" == typeof obj2 && toStringTag in obj2);
  }(obj) && !isRegExp(obj)) {
    var ys = arrObjKeys(obj, inspect), isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object, protoTag = obj instanceof Object ? "" : "null prototype", stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr$1(obj), 8, -1) : protoTag ? "Object" : "", tag = (isPlainObject || "function" != typeof obj.constructor ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat$1.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
    return 0 === ys.length ? tag + "{}" : indent ? tag + "{" + indentedJoin(ys, indent) + "}" : tag + "{ " + $join.call(ys, ", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s2, defaultStyle, opts) {
  var quoteChar = "double" === (opts.quoteStyle || defaultStyle) ? '"' : "'";
  return quoteChar + s2 + quoteChar;
}
function quote(s2) {
  return $replace$1.call(String(s2), /"/g, "&quot;");
}
function isArray(obj) {
  return !("[object Array]" !== toStr$1(obj) || toStringTag && "object" == typeof obj && toStringTag in obj);
}
function isRegExp(obj) {
  return !("[object RegExp]" !== toStr$1(obj) || toStringTag && "object" == typeof obj && toStringTag in obj);
}
function isSymbol(obj) {
  if (hasShammedSymbols)
    return obj && "object" == typeof obj && obj instanceof Symbol;
  if ("symbol" == typeof obj)
    return true;
  if (!obj || "object" != typeof obj || !symToString)
    return false;
  try {
    return symToString.call(obj), true;
  } catch (e2) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr$1(obj) {
  return objectToString.call(obj);
}
function indexOf(xs, x2) {
  if (xs.indexOf)
    return xs.indexOf(x2);
  for (var i = 0, l = xs.length; i < l; i++)
    if (xs[i] === x2)
      return i;
  return -1;
}
function lowbyte(c2) {
  var n2 = c2.charCodeAt(0), x2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[n2];
  return x2 ? "\\" + x2 : "\\x" + (n2 < 16 ? "0" : "") + $toUpperCase.call(n2.toString(16));
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type) {
  return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
  return type + " (" + size + ") {" + (indent ? indentedJoin(entries, indent) : $join.call(entries, ", ")) + "}";
}
function indentedJoin(xs, indent) {
  if (0 === xs.length)
    return "";
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect) {
  var isArr = isArray(obj), xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++)
      xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
  }
  var symMap, syms = "function" == typeof gOPS ? gOPS(obj) : [];
  if (hasShammedSymbols) {
    symMap = {};
    for (var k2 = 0; k2 < syms.length; k2++)
      symMap["$" + syms[k2]] = syms[k2];
  }
  for (var key in obj)
    has(obj, key) && (isArr && String(Number(key)) === key && key < obj.length || hasShammedSymbols && symMap["$" + key] instanceof Symbol || ($test.call(/[^\w$]/, key) ? xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj)) : xs.push(key + ": " + inspect(obj[key], obj))));
  if ("function" == typeof gOPS)
    for (var j = 0; j < syms.length; j++)
      isEnumerable.call(obj, syms[j]) && xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
  return xs;
}
var $TypeError$1 = getIntrinsic("%TypeError%");
var $WeakMap = getIntrinsic("%WeakMap%", true);
var $Map = getIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
var listGetNode = function(list, key) {
  for (var curr, prev = list; null !== (curr = prev.next); prev = curr)
    if (curr.key === key)
      return prev.next = curr.next, curr.next = list.next, list.next = curr, curr;
};
var sideChannel = function() {
  var $wm, $m, $o, channel = { assert: function(key) {
    if (!channel.has(key))
      throw new $TypeError$1("Side channel does not contain " + objectInspect(key));
  }, get: function(key) {
    if ($WeakMap && key && ("object" == typeof key || "function" == typeof key)) {
      if ($wm)
        return $weakMapGet($wm, key);
    } else if ($Map) {
      if ($m)
        return $mapGet($m, key);
    } else if ($o)
      return function(objects, key2) {
        var node = listGetNode(objects, key2);
        return node && node.value;
      }($o, key);
  }, has: function(key) {
    if ($WeakMap && key && ("object" == typeof key || "function" == typeof key)) {
      if ($wm)
        return $weakMapHas($wm, key);
    } else if ($Map) {
      if ($m)
        return $mapHas($m, key);
    } else if ($o)
      return function(objects, key2) {
        return !!listGetNode(objects, key2);
      }($o, key);
    return false;
  }, set: function(key, value2) {
    $WeakMap && key && ("object" == typeof key || "function" == typeof key) ? ($wm || ($wm = new $WeakMap()), $weakMapSet($wm, key, value2)) : $Map ? ($m || ($m = new $Map()), $mapSet($m, key, value2)) : ($o || ($o = { key: {}, next: null }), function(objects, key2, value3) {
      var node = listGetNode(objects, key2);
      node ? node.value = value3 : objects.next = { key: key2, next: objects.next, value: value3 };
    }($o, key, value2));
  } };
  return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format_RFC3986 = "RFC3986";
var formats = { default: Format_RFC3986, formatters: { RFC1738: function(value2) {
  return replace.call(value2, percentTwenties, "+");
}, RFC3986: function(value2) {
  return String(value2);
} }, RFC1738: "RFC1738", RFC3986: Format_RFC3986 };
var has$1 = Object.prototype.hasOwnProperty;
var isArray$1 = Array.isArray;
var hexTable = function() {
  for (var array = [], i = 0; i < 256; ++i)
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  return array;
}();
var arrayToObject = function(source, options) {
  for (var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < source.length; ++i)
    void 0 !== source[i] && (obj[i] = source[i]);
  return obj;
};
var utils = { arrayToObject, assign: function(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    return acc[key] = source[key], acc;
  }, target);
}, combine: function(a2, b2) {
  return [].concat(a2, b2);
}, compact: function(value2) {
  for (var queue = [{ obj: { o: value2 }, prop: "o" }], refs = [], i = 0; i < queue.length; ++i)
    for (var item = queue[i], obj = item.obj[item.prop], keys = Object.keys(obj), j = 0; j < keys.length; ++j) {
      var key = keys[j], val = obj[key];
      "object" == typeof val && null !== val && -1 === refs.indexOf(val) && (queue.push({ obj, prop: key }), refs.push(val));
    }
  return function(queue2) {
    for (; queue2.length > 1; ) {
      var item2 = queue2.pop(), obj2 = item2.obj[item2.prop];
      if (isArray$1(obj2)) {
        for (var compacted = [], j2 = 0; j2 < obj2.length; ++j2)
          void 0 !== obj2[j2] && compacted.push(obj2[j2]);
        item2.obj[item2.prop] = compacted;
      }
    }
  }(queue), value2;
}, decode: function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if ("iso-8859-1" === charset)
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e2) {
    return strWithoutPlus;
  }
}, encode: function(str, defaultEncoder, charset, kind, format) {
  if (0 === str.length)
    return str;
  var string = str;
  if ("symbol" == typeof str ? string = Symbol.prototype.toString.call(str) : "string" != typeof str && (string = String(str)), "iso-8859-1" === charset)
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  for (var out = "", i = 0; i < string.length; ++i) {
    var c2 = string.charCodeAt(i);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats.RFC1738 && (40 === c2 || 41 === c2) ? out += string.charAt(i) : c2 < 128 ? out += hexTable[c2] : c2 < 2048 ? out += hexTable[192 | c2 >> 6] + hexTable[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? out += hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | 63 & c2] : (i += 1, c2 = 65536 + ((1023 & c2) << 10 | 1023 & string.charCodeAt(i)), out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | 63 & c2]);
  }
  return out;
}, isBuffer: function(obj) {
  return !(!obj || "object" != typeof obj) && !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
}, isRegExp: function(obj) {
  return "[object RegExp]" === Object.prototype.toString.call(obj);
}, maybeMap: function(val, fn) {
  if (isArray$1(val)) {
    for (var mapped = [], i = 0; i < val.length; i += 1)
      mapped.push(fn(val[i]));
    return mapped;
  }
  return fn(val);
}, merge: function merge(target, source, options) {
  if (!source)
    return target;
  if ("object" != typeof source) {
    if (isArray$1(target))
      target.push(source);
    else {
      if (!target || "object" != typeof target)
        return [target, source];
      (options && (options.plainObjects || options.allowPrototypes) || !has$1.call(Object.prototype, source)) && (target[source] = true);
    }
    return target;
  }
  if (!target || "object" != typeof target)
    return [target].concat(source);
  var mergeTarget = target;
  return isArray$1(target) && !isArray$1(source) && (mergeTarget = arrayToObject(target, options)), isArray$1(target) && isArray$1(source) ? (source.forEach(function(item, i) {
    if (has$1.call(target, i)) {
      var targetItem = target[i];
      targetItem && "object" == typeof targetItem && item && "object" == typeof item ? target[i] = merge(targetItem, item, options) : target.push(item);
    } else
      target[i] = item;
  }), target) : Object.keys(source).reduce(function(acc, key) {
    var value2 = source[key];
    return has$1.call(acc, key) ? acc[key] = merge(acc[key], value2, options) : acc[key] = value2, acc;
  }, mergeTarget);
} };
var has$2 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = { brackets: function(prefix) {
  return prefix + "[]";
}, comma: "comma", indices: function(prefix, key) {
  return prefix + "[" + key + "]";
}, repeat: function(prefix) {
  return prefix;
} };
var isArray$2 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr2, valueOrArray) {
  push.apply(arr2, isArray$2(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats.default;
var defaults = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: utils.encode, encodeValuesOnly: false, format: defaultFormat, formatter: formats.formatters[defaultFormat], indices: false, serializeDate: function(date) {
  return toISO.call(date);
}, skipNulls: false, strictNullHandling: false };
var sentinel = {};
var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel$1) {
  for (var obj = object, tmpSc = sideChannel$1, step = 0, findFlag = false; void 0 !== (tmpSc = tmpSc.get(sentinel)) && !findFlag; ) {
    var pos = tmpSc.get(object);
    if (step += 1, void 0 !== pos) {
      if (pos === step)
        throw new RangeError("Cyclic object value");
      findFlag = true;
    }
    void 0 === tmpSc.get(sentinel) && (step = 0);
  }
  if ("function" == typeof filter ? obj = filter(prefix, obj) : obj instanceof Date ? obj = serializeDate(obj) : "comma" === generateArrayPrefix && isArray$2(obj) && (obj = utils.maybeMap(obj, function(value3) {
    return value3 instanceof Date ? serializeDate(value3) : value3;
  })), null === obj) {
    if (strictNullHandling)
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
    obj = "";
  }
  if (/* @__PURE__ */ function(v) {
    return "string" == typeof v || "number" == typeof v || "boolean" == typeof v || "symbol" == typeof v || "bigint" == typeof v;
  }(obj) || utils.isBuffer(obj))
    return encoder ? [formatter(encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format)) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))] : [formatter(prefix) + "=" + formatter(String(obj))];
  var objKeys, values = [];
  if (void 0 === obj)
    return values;
  if ("comma" === generateArrayPrefix && isArray$2(obj))
    encodeValuesOnly && encoder && (obj = utils.maybeMap(obj, encoder)), objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  else if (isArray$2(filter))
    objKeys = filter;
  else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }
  for (var adjustedPrefix = commaRoundTrip && isArray$2(obj) && 1 === obj.length ? prefix + "[]" : prefix, j = 0; j < objKeys.length; ++j) {
    var key = objKeys[j], value2 = "object" == typeof key && void 0 !== key.value ? key.value : obj[key];
    if (!skipNulls || null !== value2) {
      var keyPrefix = isArray$2(obj) ? "function" == typeof generateArrayPrefix ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
      sideChannel$1.set(object, step);
      var valueSideChannel = sideChannel();
      valueSideChannel.set(sentinel, sideChannel$1), pushToArray(values, stringify2(value2, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, "comma" === generateArrayPrefix && encodeValuesOnly && isArray$2(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
  }
  return values;
};
var has$3 = Object.prototype.hasOwnProperty;
var isArray$3 = Array.isArray;
var defaults$1 = { allowDots: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: utils.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false };
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options) {
  return val && "string" == typeof val && options.comma && val.indexOf(",") > -1 ? val.split(",") : val;
};
var parseKeys = function(givenKey, val, options, valuesParsed) {
  if (givenKey) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey, child = /(\[[^[\]]*])/g, segment = options.depth > 0 && /(\[[^[\]]*])/.exec(key), parent = segment ? key.slice(0, segment.index) : key, keys = [];
    if (parent) {
      if (!options.plainObjects && has$3.call(Object.prototype, parent) && !options.allowPrototypes)
        return;
      keys.push(parent);
    }
    for (var i = 0; options.depth > 0 && null !== (segment = child.exec(key)) && i < options.depth; ) {
      if (i += 1, !options.plainObjects && has$3.call(Object.prototype, segment[1].slice(1, -1)) && !options.allowPrototypes)
        return;
      keys.push(segment[1]);
    }
    return segment && keys.push("[" + key.slice(segment.index) + "]"), function(chain, val2, options2, valuesParsed2) {
      for (var leaf = valuesParsed2 ? val2 : parseArrayValue(val2, options2), i2 = chain.length - 1; i2 >= 0; --i2) {
        var obj, root = chain[i2];
        if ("[]" === root && options2.parseArrays)
          obj = [].concat(leaf);
        else {
          obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = "[" === root.charAt(0) && "]" === root.charAt(root.length - 1) ? root.slice(1, -1) : root, index2 = parseInt(cleanRoot, 10);
          options2.parseArrays || "" !== cleanRoot ? !isNaN(index2) && root !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && options2.parseArrays && index2 <= options2.arrayLimit ? (obj = [])[index2] = leaf : "__proto__" !== cleanRoot && (obj[cleanRoot] = leaf) : obj = { 0: leaf };
        }
        leaf = obj;
      }
      return leaf;
    }(keys, val, options, valuesParsed);
  }
};
var lib = { formats, parse: function(str, opts) {
  var options = function(opts2) {
    if (!opts2)
      return defaults$1;
    if (null !== opts2.decoder && void 0 !== opts2.decoder && "function" != typeof opts2.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== opts2.charset && "utf-8" !== opts2.charset && "iso-8859-1" !== opts2.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = void 0 === opts2.charset ? defaults$1.charset : opts2.charset;
    return { allowDots: void 0 === opts2.allowDots ? defaults$1.allowDots : !!opts2.allowDots, allowPrototypes: "boolean" == typeof opts2.allowPrototypes ? opts2.allowPrototypes : defaults$1.allowPrototypes, allowSparse: "boolean" == typeof opts2.allowSparse ? opts2.allowSparse : defaults$1.allowSparse, arrayLimit: "number" == typeof opts2.arrayLimit ? opts2.arrayLimit : defaults$1.arrayLimit, charset, charsetSentinel: "boolean" == typeof opts2.charsetSentinel ? opts2.charsetSentinel : defaults$1.charsetSentinel, comma: "boolean" == typeof opts2.comma ? opts2.comma : defaults$1.comma, decoder: "function" == typeof opts2.decoder ? opts2.decoder : defaults$1.decoder, delimiter: "string" == typeof opts2.delimiter || utils.isRegExp(opts2.delimiter) ? opts2.delimiter : defaults$1.delimiter, depth: "number" == typeof opts2.depth || false === opts2.depth ? +opts2.depth : defaults$1.depth, ignoreQueryPrefix: true === opts2.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof opts2.interpretNumericEntities ? opts2.interpretNumericEntities : defaults$1.interpretNumericEntities, parameterLimit: "number" == typeof opts2.parameterLimit ? opts2.parameterLimit : defaults$1.parameterLimit, parseArrays: false !== opts2.parseArrays, plainObjects: "boolean" == typeof opts2.plainObjects ? opts2.plainObjects : defaults$1.plainObjects, strictNullHandling: "boolean" == typeof opts2.strictNullHandling ? opts2.strictNullHandling : defaults$1.strictNullHandling };
  }(opts);
  if ("" === str || null == str)
    return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var tempObj = "string" == typeof str ? function(str2, options2) {
    var i2, obj2 = { __proto__: null }, cleanStr = options2.ignoreQueryPrefix ? str2.replace(/^\?/, "") : str2, limit = options2.parameterLimit === 1 / 0 ? void 0 : options2.parameterLimit, parts = cleanStr.split(options2.delimiter, limit), skipIndex = -1, charset = options2.charset;
    if (options2.charsetSentinel)
      for (i2 = 0; i2 < parts.length; ++i2)
        0 === parts[i2].indexOf("utf8=") && ("utf8=%E2%9C%93" === parts[i2] ? charset = "utf-8" : "utf8=%26%2310003%3B" === parts[i2] && (charset = "iso-8859-1"), skipIndex = i2, i2 = parts.length);
    for (i2 = 0; i2 < parts.length; ++i2)
      if (i2 !== skipIndex) {
        var key2, val, part = parts[i2], bracketEqualsPos = part.indexOf("]="), pos = -1 === bracketEqualsPos ? part.indexOf("=") : bracketEqualsPos + 1;
        -1 === pos ? (key2 = options2.decoder(part, defaults$1.decoder, charset, "key"), val = options2.strictNullHandling ? null : "") : (key2 = options2.decoder(part.slice(0, pos), defaults$1.decoder, charset, "key"), val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options2), function(encodedVal) {
          return options2.decoder(encodedVal, defaults$1.decoder, charset, "value");
        })), val && options2.interpretNumericEntities && "iso-8859-1" === charset && (val = interpretNumericEntities(val)), part.indexOf("[]=") > -1 && (val = isArray$3(val) ? [val] : val), has$3.call(obj2, key2) ? obj2[key2] = utils.combine(obj2[key2], val) : obj2[key2] = val;
      }
    return obj2;
  }(str, options) : str, obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, keys = Object.keys(tempObj), i = 0; i < keys.length; ++i) {
    var key = keys[i], newObj = parseKeys(key, tempObj[key], options, "string" == typeof str);
    obj = utils.merge(obj, newObj, options);
  }
  return true === options.allowSparse ? obj : utils.compact(obj);
}, stringify: function(object, opts) {
  var objKeys, obj = object, options = function(opts2) {
    if (!opts2)
      return defaults;
    if (null !== opts2.encoder && void 0 !== opts2.encoder && "function" != typeof opts2.encoder)
      throw new TypeError("Encoder has to be a function.");
    var charset = opts2.charset || defaults.charset;
    if (void 0 !== opts2.charset && "utf-8" !== opts2.charset && "iso-8859-1" !== opts2.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats.default;
    if (void 0 !== opts2.format) {
      if (!has$2.call(formats.formatters, opts2.format))
        throw new TypeError("Unknown format option provided.");
      format = opts2.format;
    }
    var formatter = formats.formatters[format], filter = defaults.filter;
    return ("function" == typeof opts2.filter || isArray$2(opts2.filter)) && (filter = opts2.filter), { addQueryPrefix: "boolean" == typeof opts2.addQueryPrefix ? opts2.addQueryPrefix : defaults.addQueryPrefix, allowDots: void 0 === opts2.allowDots ? defaults.allowDots : !!opts2.allowDots, charset, charsetSentinel: "boolean" == typeof opts2.charsetSentinel ? opts2.charsetSentinel : defaults.charsetSentinel, delimiter: void 0 === opts2.delimiter ? defaults.delimiter : opts2.delimiter, encode: "boolean" == typeof opts2.encode ? opts2.encode : defaults.encode, encoder: "function" == typeof opts2.encoder ? opts2.encoder : defaults.encoder, encodeValuesOnly: "boolean" == typeof opts2.encodeValuesOnly ? opts2.encodeValuesOnly : defaults.encodeValuesOnly, filter, format, formatter, serializeDate: "function" == typeof opts2.serializeDate ? opts2.serializeDate : defaults.serializeDate, skipNulls: "boolean" == typeof opts2.skipNulls ? opts2.skipNulls : defaults.skipNulls, sort: "function" == typeof opts2.sort ? opts2.sort : null, strictNullHandling: "boolean" == typeof opts2.strictNullHandling ? opts2.strictNullHandling : defaults.strictNullHandling };
  }(opts);
  "function" == typeof options.filter ? obj = (0, options.filter)("", obj) : isArray$2(options.filter) && (objKeys = options.filter);
  var arrayFormat, keys = [];
  if ("object" != typeof obj || null === obj)
    return "";
  arrayFormat = opts && opts.arrayFormat in arrayPrefixGenerators ? opts.arrayFormat : opts && "indices" in opts ? opts.indices ? "indices" : "repeat" : "indices";
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (opts && "commaRoundTrip" in opts && "boolean" != typeof opts.commaRoundTrip)
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var commaRoundTrip = "comma" === generateArrayPrefix && opts && opts.commaRoundTrip;
  objKeys || (objKeys = Object.keys(obj)), options.sort && objKeys.sort(options.sort);
  for (var sideChannel$1 = sideChannel(), i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    options.skipNulls && null === obj[key] || pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel$1));
  }
  var joined = keys.join(options.delimiter), prefix = true === options.addQueryPrefix ? "?" : "";
  return options.charsetSentinel && ("iso-8859-1" === options.charset ? prefix += "utf8=%26%2310003%3B&" : prefix += "utf8=%E2%9C%93&"), joined.length > 0 ? prefix + joined : "";
} };
var componentEmitter = createCommonjsModule(function(module) {
  function Emitter(obj) {
    if (obj)
      return function(obj2) {
        for (var key in Emitter.prototype)
          obj2[key] = Emitter.prototype[key];
        return obj2;
      }(obj);
  }
  module.exports = Emitter, Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn), this;
  }, Emitter.prototype.once = function(event, fn) {
    function on() {
      this.off(event, on), fn.apply(this, arguments);
    }
    return on.fn = fn, this.on(event, on), this;
  }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
      return this._callbacks = {}, this;
    var cb, callbacks = this._callbacks["$" + event];
    if (!callbacks)
      return this;
    if (1 == arguments.length)
      return delete this._callbacks["$" + event], this;
    for (var i = 0; i < callbacks.length; i++)
      if ((cb = callbacks[i]) === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    return 0 === callbacks.length && delete this._callbacks["$" + event], this;
  }, Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    for (var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event], i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    if (callbacks) {
      i = 0;
      for (var len = (callbacks = callbacks.slice(0)).length; i < len; ++i)
        callbacks[i].apply(this, args);
    }
    return this;
  }, Emitter.prototype.listeners = function(event) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + event] || [];
  }, Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };
});
var fastSafeStringify = stringify$1;
stringify$1.default = stringify$1, stringify$1.stable = deterministicStringify, stringify$1.stableStringify = deterministicStringify;
var arr = [];
var replacerStack = [];
function defaultOptions() {
  return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function stringify$1(obj, replacer, spacer, options) {
  var res;
  void 0 === options && (options = defaultOptions()), function decirc(val, k2, edgeIndex, stack, parent, depth, options2) {
    var i;
    if (depth += 1, "object" == typeof val && null !== val) {
      for (i = 0; i < stack.length; i++)
        if (stack[i] === val)
          return void setReplace("[Circular]", val, k2, parent);
      if (void 0 !== options2.depthLimit && depth > options2.depthLimit)
        return void setReplace("[...]", val, k2, parent);
      if (void 0 !== options2.edgesLimit && edgeIndex + 1 > options2.edgesLimit)
        return void setReplace("[...]", val, k2, parent);
      if (stack.push(val), Array.isArray(val))
        for (i = 0; i < val.length; i++)
          decirc(val[i], i, i, stack, val, depth, options2);
      else {
        var keys = Object.keys(val);
        for (i = 0; i < keys.length; i++) {
          var key = keys[i];
          decirc(val[key], key, i, stack, val, depth, options2);
        }
      }
      stack.pop();
    }
  }(obj, "", 0, [], void 0, 0, options);
  try {
    res = 0 === replacerStack.length ? JSON.stringify(obj, replacer, spacer) : JSON.stringify(obj, replaceGetterValues(replacer), spacer);
  } catch (_2) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; 0 !== arr.length; ) {
      var part = arr.pop();
      4 === part.length ? Object.defineProperty(part[0], part[1], part[3]) : part[0][part[1]] = part[2];
    }
  }
  return res;
}
function setReplace(replace2, val, k2, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k2);
  void 0 !== propertyDescriptor.get ? propertyDescriptor.configurable ? (Object.defineProperty(parent, k2, { value: replace2 }), arr.push([parent, k2, val, propertyDescriptor])) : replacerStack.push([val, k2, replace2]) : (parent[k2] = replace2, arr.push([parent, k2, val]));
}
function compareFunction(a2, b2) {
  return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
  void 0 === options && (options = defaultOptions());
  var res, tmp = function deterministicDecirc(val, k2, edgeIndex, stack, parent, depth, options2) {
    var i;
    if (depth += 1, "object" == typeof val && null !== val) {
      for (i = 0; i < stack.length; i++)
        if (stack[i] === val)
          return void setReplace("[Circular]", val, k2, parent);
      try {
        if ("function" == typeof val.toJSON)
          return;
      } catch (_2) {
        return;
      }
      if (void 0 !== options2.depthLimit && depth > options2.depthLimit)
        return void setReplace("[...]", val, k2, parent);
      if (void 0 !== options2.edgesLimit && edgeIndex + 1 > options2.edgesLimit)
        return void setReplace("[...]", val, k2, parent);
      if (stack.push(val), Array.isArray(val))
        for (i = 0; i < val.length; i++)
          deterministicDecirc(val[i], i, i, stack, val, depth, options2);
      else {
        var tmp2 = {}, keys = Object.keys(val).sort(compareFunction);
        for (i = 0; i < keys.length; i++) {
          var key = keys[i];
          deterministicDecirc(val[key], key, i, stack, val, depth, options2), tmp2[key] = val[key];
        }
        if (void 0 === parent)
          return tmp2;
        arr.push([parent, k2, val]), parent[k2] = tmp2;
      }
      stack.pop();
    }
  }(obj, "", 0, [], void 0, 0, options) || obj;
  try {
    res = 0 === replacerStack.length ? JSON.stringify(tmp, replacer, spacer) : JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
  } catch (_2) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; 0 !== arr.length; ) {
      var part = arr.pop();
      4 === part.length ? Object.defineProperty(part[0], part[1], part[3]) : part[0][part[1]] = part[2];
    }
  }
  return res;
}
function replaceGetterValues(replacer) {
  return replacer = void 0 !== replacer ? replacer : function(k2, v) {
    return v;
  }, function(key, val) {
    if (replacerStack.length > 0)
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];
        if (part[1] === key && part[0] === val) {
          val = part[2], replacerStack.splice(i, 1);
          break;
        }
      }
    return replacer.call(this, key, val);
  };
}
var utils$1 = createCommonjsModule(function(module, exports) {
  function _typeof2(obj) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    })(obj);
  }
  function _createForOfIteratorHelper(o2, allowArrayLike) {
    var it = "undefined" != typeof Symbol && o2[Symbol.iterator] || o2["@@iterator"];
    if (!it) {
      if (Array.isArray(o2) || (it = function(o3, minLen) {
        if (!o3)
          return;
        if ("string" == typeof o3)
          return _arrayLikeToArray2(o3, minLen);
        var n2 = Object.prototype.toString.call(o3).slice(8, -1);
        "Object" === n2 && o3.constructor && (n2 = o3.constructor.name);
        if ("Map" === n2 || "Set" === n2)
          return Array.from(o3);
        if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray2(o3, minLen);
      }(o2)) || allowArrayLike && o2 && "number" == typeof o2.length) {
        it && (o2 = it);
        var i = 0, F = function() {
        };
        return { s: F, n: function() {
          return i >= o2.length ? { done: true } : { done: false, value: o2[i++] };
        }, e: function(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var err, normalCompletion = true, didErr = false;
    return { s: function() {
      it = it.call(o2);
    }, n: function() {
      var step = it.next();
      return normalCompletion = step.done, step;
    }, e: function(_e2) {
      didErr = true, err = _e2;
    }, f: function() {
      try {
        normalCompletion || null == it.return || it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _arrayLikeToArray2(arr2, len) {
    (null == len || len > arr2.length) && (len = arr2.length);
    for (var i = 0, arr22 = new Array(len); i < len; i++)
      arr22[i] = arr2[i];
    return arr22;
  }
  exports.type = function(string_) {
    return string_.split(/ *; */).shift();
  }, exports.params = function(value2) {
    var _step, object = {}, _iterator = _createForOfIteratorHelper(value2.split(/ *; */));
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var parts = _step.value.split(/ *= */), key = parts.shift(), _value = parts.shift();
        key && _value && (object[key] = _value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return object;
  }, exports.parseLinks = function(value2) {
    var _step2, object = {}, _iterator2 = _createForOfIteratorHelper(value2.split(/ *, */));
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var parts = _step2.value.split(/ *; */), url = parts[0].slice(1, -1);
        object[parts[1].split(/ *= */)[1].slice(1, -1)] = url;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return object;
  }, exports.cleanHeader = function(header, changesOrigin) {
    return delete header["content-type"], delete header["content-length"], delete header["transfer-encoding"], delete header.host, changesOrigin && (delete header.authorization, delete header.cookie), header;
  }, exports.isObject = function(object) {
    return null !== object && "object" === _typeof2(object);
  }, exports.hasOwn = Object.hasOwn || function(object, property) {
    if (null == object)
      throw new TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(new Object(object), property);
  }, exports.mixin = function(target, source) {
    for (var key in source)
      exports.hasOwn(source, key) && (target[key] = source[key]);
  };
});
utils$1.type, utils$1.params, utils$1.parseLinks, utils$1.cleanHeader, utils$1.isObject, utils$1.hasOwn, utils$1.mixin;
function _typeof(obj) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  })(obj);
}
var isObject = utils$1.isObject;
var hasOwn$1 = utils$1.hasOwn;
var requestBase = RequestBase;
function RequestBase() {
}
RequestBase.prototype.clearTimeout = function() {
  return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this;
}, RequestBase.prototype.parse = function(fn) {
  return this._parser = fn, this;
}, RequestBase.prototype.responseType = function(value2) {
  return this._responseType = value2, this;
}, RequestBase.prototype.serialize = function(fn) {
  return this._serializer = fn, this;
}, RequestBase.prototype.timeout = function(options) {
  if (!options || "object" !== _typeof(options))
    return this._timeout = options, this._responseTimeout = 0, this._uploadTimeout = 0, this;
  for (var option in options)
    if (hasOwn$1(options, option))
      switch (option) {
        case "deadline":
          this._timeout = options.deadline;
          break;
        case "response":
          this._responseTimeout = options.response;
          break;
        case "upload":
          this._uploadTimeout = options.upload;
          break;
        default:
          console.warn("Unknown timeout option", option);
      }
  return this;
}, RequestBase.prototype.retry = function(count, fn) {
  return 0 !== arguments.length && true !== count || (count = 1), count <= 0 && (count = 0), this._maxRetries = count, this._retries = 0, this._retryCallback = fn, this;
};
var ERROR_CODES = /* @__PURE__ */ new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]);
var STATUS_CODES = /* @__PURE__ */ new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
RequestBase.prototype._shouldRetry = function(error2, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries)
    return false;
  if (this._retryCallback)
    try {
      var override = this._retryCallback(error2, res);
      if (true === override)
        return true;
      if (false === override)
        return false;
    } catch (err) {
      console.error(err);
    }
  if (res && res.status && STATUS_CODES.has(res.status))
    return true;
  if (error2) {
    if (error2.code && ERROR_CODES.has(error2.code))
      return true;
    if (error2.timeout && "ECONNABORTED" === error2.code)
      return true;
    if (error2.crossDomain)
      return true;
  }
  return false;
}, RequestBase.prototype._retry = function() {
  return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = false, this.timedout = false, this.timedoutError = null, this._end();
}, RequestBase.prototype.then = function(resolve, reject) {
  var _this = this;
  if (!this._fullfilledPromise) {
    var self2 = this;
    this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(resolve2, reject2) {
      self2.on("abort", function() {
        if (!(_this._maxRetries && _this._maxRetries > _this._retries))
          if (_this.timedout && _this.timedoutError)
            reject2(_this.timedoutError);
          else {
            var error2 = new Error("Aborted");
            error2.code = "ABORTED", error2.status = _this.status, error2.method = _this.method, error2.url = _this.url, reject2(error2);
          }
      }), self2.end(function(error2, res) {
        error2 ? reject2(error2) : resolve2(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
}, RequestBase.prototype.catch = function(callback) {
  return this.then(void 0, callback);
}, RequestBase.prototype.use = function(fn) {
  return fn(this), this;
}, RequestBase.prototype.ok = function(callback) {
  if ("function" != typeof callback)
    throw new Error("Callback required");
  return this._okCallback = callback, this;
}, RequestBase.prototype._isResponseOK = function(res) {
  return !!res && (this._okCallback ? this._okCallback(res) : res.status >= 200 && res.status < 300);
}, RequestBase.prototype.get = function(field) {
  return this._header[field.toLowerCase()];
}, RequestBase.prototype.getHeader = RequestBase.prototype.get, RequestBase.prototype.set = function(field, value2) {
  if (isObject(field)) {
    for (var key in field)
      hasOwn$1(field, key) && this.set(key, field[key]);
    return this;
  }
  return this._header[field.toLowerCase()] = value2, this.header[field] = value2, this;
}, RequestBase.prototype.unset = function(field) {
  return delete this._header[field.toLowerCase()], delete this.header[field], this;
}, RequestBase.prototype.field = function(name, value2, options) {
  if (null == name)
    throw new Error(".field(name, val) name can not be empty");
  if (this._data)
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  if (isObject(name)) {
    for (var key in name)
      hasOwn$1(name, key) && this.field(key, name[key]);
    return this;
  }
  if (Array.isArray(value2)) {
    for (var i in value2)
      hasOwn$1(value2, i) && this.field(name, value2[i]);
    return this;
  }
  if (null == value2)
    throw new Error(".field(name, val) val can not be empty");
  return "boolean" == typeof value2 && (value2 = String(value2)), options ? this._getFormData().append(name, value2, options) : this._getFormData().append(name, value2), this;
}, RequestBase.prototype.abort = function() {
  if (this._aborted)
    return this;
  if (this._aborted = true, this.xhr && this.xhr.abort(), this.req) {
    if (semver.gte(process.version, "v13.0.0") && semver.lt(process.version, "v14.0.0"))
      throw new Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
    semver.gte(process.version, "v14.0.0") && (this.req.destroyed = true), this.req.abort();
  }
  return this.clearTimeout(), this.emit("abort"), this;
}, RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case "basic":
      this.set("Authorization", "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;
    case "auto":
      this.username = user, this.password = pass;
      break;
    case "bearer":
      this.set("Authorization", "Bearer ".concat(user));
  }
  return this;
}, RequestBase.prototype.withCredentials = function(on) {
  return void 0 === on && (on = true), this._withCredentials = on, this;
}, RequestBase.prototype.redirects = function(n2) {
  return this._maxRedirects = n2, this;
}, RequestBase.prototype.maxResponseSize = function(n2) {
  if ("number" != typeof n2)
    throw new TypeError("Invalid argument");
  return this._maxResponseSize = n2, this;
}, RequestBase.prototype.toJSON = function() {
  return { method: this.method, url: this.url, data: this._data, headers: this._header };
}, RequestBase.prototype.send = function(data) {
  var isObject_ = isObject(data), type = this._header["content-type"];
  if (this._formData)
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  if (isObject_ && !this._data)
    Array.isArray(data) ? this._data = [] : this._isHost(data) || (this._data = {});
  else if (data && this._data && this._isHost(this._data))
    throw new Error("Can't merge these send calls");
  if (isObject_ && isObject(this._data))
    for (var key in data)
      hasOwn$1(data, key) && (this._data[key] = data[key]);
  else
    "string" == typeof data ? (type || this.type("form"), (type = this._header["content-type"]) && (type = type.toLowerCase().trim()), this._data = "application/x-www-form-urlencoded" === type ? this._data ? "".concat(this._data, "&").concat(data) : data : (this._data || "") + data) : this._data = data;
  return !isObject_ || this._isHost(data) || type || this.type("json"), this;
}, RequestBase.prototype.sortQuery = function(sort) {
  return this._sort = void 0 === sort || sort, this;
}, RequestBase.prototype._finalizeQueryString = function() {
  var query = this._query.join("&");
  if (query && (this.url += (this.url.includes("?") ? "&" : "?") + query), this._query.length = 0, this._sort) {
    var index2 = this.url.indexOf("?");
    if (index2 >= 0) {
      var queryArray = this.url.slice(index2 + 1).split("&");
      "function" == typeof this._sort ? queryArray.sort(this._sort) : queryArray.sort(), this.url = this.url.slice(0, index2) + "?" + queryArray.join("&");
    }
  }
}, RequestBase.prototype._appendQueryString = function() {
  console.warn("Unsupported");
}, RequestBase.prototype._timeoutError = function(reason, timeout, errno) {
  if (!this._aborted) {
    var error2 = new Error("".concat(reason + timeout, "ms exceeded"));
    error2.timeout = timeout, error2.code = "ECONNABORTED", error2.errno = errno, this.timedout = true, this.timedoutError = error2, this.abort(), this.callback(error2);
  }
}, RequestBase.prototype._setTimeouts = function() {
  var self2 = this;
  this._timeout && !this._timer && (this._timer = setTimeout(function() {
    self2._timeoutError("Timeout of ", self2._timeout, "ETIME");
  }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
    self2._timeoutError("Response timeout of ", self2._responseTimeout, "ETIMEDOUT");
  }, this._responseTimeout));
};
var responseBase = ResponseBase;
function ResponseBase() {
}
function _toConsumableArray(arr2) {
  return function(arr3) {
    if (Array.isArray(arr3))
      return _arrayLikeToArray(arr3);
  }(arr2) || function(iter) {
    if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"])
      return Array.from(iter);
  }(arr2) || _unsupportedIterableToArray(arr2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function _unsupportedIterableToArray(o2, minLen) {
  if (o2) {
    if ("string" == typeof o2)
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    return "Object" === n2 && o2.constructor && (n2 = o2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(o2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? _arrayLikeToArray(o2, minLen) : void 0;
  }
}
function _arrayLikeToArray(arr2, len) {
  (null == len || len > arr2.length) && (len = arr2.length);
  for (var i = 0, arr22 = new Array(len); i < len; i++)
    arr22[i] = arr2[i];
  return arr22;
}
function Agent() {
  this._defaults = [];
}
ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
}, ResponseBase.prototype._setHeaderProperties = function(header) {
  var ct = header["content-type"] || "";
  this.type = utils$1.type(ct);
  var parameters = utils$1.params(ct);
  for (var key in parameters)
    Object.prototype.hasOwnProperty.call(parameters, key) && (this[key] = parameters[key]);
  this.links = {};
  try {
    header.link && (this.links = utils$1.parseLinks(header.link));
  } catch (_unused) {
  }
}, ResponseBase.prototype._setStatusProperties = function(status) {
  var type = Math.trunc(status / 100);
  this.statusCode = status, this.status = this.statusCode, this.statusType = type, this.info = 1 === type, this.ok = 2 === type, this.redirect = 3 === type, this.clientError = 4 === type, this.serverError = 5 === type, this.error = (4 === type || 5 === type) && this.toError(), this.created = 201 === status, this.accepted = 202 === status, this.noContent = 204 === status, this.badRequest = 400 === status, this.unauthorized = 401 === status, this.notAcceptable = 406 === status, this.forbidden = 403 === status, this.notFound = 404 === status, this.unprocessableEntity = 422 === status;
};
for (_loop = function() {
  var fn = _arr[_i];
  Agent.prototype[fn] = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    return this._defaults.push({ fn, args }), this;
  };
}, _i = 0, _arr = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"]; _i < _arr.length; _i++)
  _loop();
var _loop;
var _i;
var _arr;
Agent.prototype._setDefaults = function(request) {
  var _step, _iterator = function(o2, allowArrayLike) {
    var it = "undefined" != typeof Symbol && o2[Symbol.iterator] || o2["@@iterator"];
    if (!it) {
      if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && "number" == typeof o2.length) {
        it && (o2 = it);
        var i = 0, F = function() {
        };
        return { s: F, n: function() {
          return i >= o2.length ? { done: true } : { done: false, value: o2[i++] };
        }, e: function(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var err, normalCompletion = true, didErr = false;
    return { s: function() {
      it = it.call(o2);
    }, n: function() {
      var step = it.next();
      return normalCompletion = step.done, step;
    }, e: function(_e2) {
      didErr = true, err = _e2;
    }, f: function() {
      try {
        normalCompletion || null == it.return || it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }(this._defaults);
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var def = _step.value;
      request[def.fn].apply(request, _toConsumableArray(def.args));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
for (agentBase = Agent, client = createCommonjsModule(function(module, exports) {
  function _typeof2(obj) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    })(obj);
  }
  function _createForOfIteratorHelper(o2, allowArrayLike) {
    var it = "undefined" != typeof Symbol && o2[Symbol.iterator] || o2["@@iterator"];
    if (!it) {
      if (Array.isArray(o2) || (it = function(o3, minLen) {
        if (!o3)
          return;
        if ("string" == typeof o3)
          return _arrayLikeToArray2(o3, minLen);
        var n2 = Object.prototype.toString.call(o3).slice(8, -1);
        "Object" === n2 && o3.constructor && (n2 = o3.constructor.name);
        if ("Map" === n2 || "Set" === n2)
          return Array.from(o3);
        if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray2(o3, minLen);
      }(o2)) || allowArrayLike && o2 && "number" == typeof o2.length) {
        it && (o2 = it);
        var i2 = 0, F = function() {
        };
        return { s: F, n: function() {
          return i2 >= o2.length ? { done: true } : { done: false, value: o2[i2++] };
        }, e: function(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var err, normalCompletion = true, didErr = false;
    return { s: function() {
      it = it.call(o2);
    }, n: function() {
      var step = it.next();
      return normalCompletion = step.done, step;
    }, e: function(_e2) {
      didErr = true, err = _e2;
    }, f: function() {
      try {
        normalCompletion || null == it.return || it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _arrayLikeToArray2(arr2, len2) {
    (null == len2 || len2 > arr2.length) && (len2 = arr2.length);
    for (var i2 = 0, arr22 = new Array(len2); i2 < len2; i2++)
      arr22[i2] = arr2[i2];
    return arr22;
  }
  var root;
  "undefined" != typeof window ? root = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), root = void 0) : root = self;
  var isObject2 = utils$1.isObject, mixin = utils$1.mixin, hasOwn2 = utils$1.hasOwn;
  function noop2() {
  }
  module.exports = function(method, url) {
    return "function" == typeof url ? new exports.Request("GET", method).end(url) : 1 === arguments.length ? new exports.Request("GET", method) : new exports.Request(method, url);
  };
  var request = exports = module.exports;
  exports.Request = Request, request.getXHR = function() {
    if (root.XMLHttpRequest && (!root.location || "file:" !== root.location.protocol || !root.ActiveXObject))
      return new XMLHttpRequest();
    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (_unused) {
    }
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (_unused2) {
    }
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (_unused3) {
    }
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (_unused4) {
    }
    throw new Error("Browser-only version of superagent could not find XHR");
  };
  var trim2 = "".trim ? function(s2) {
    return s2.trim();
  } : function(s2) {
    return s2.replace(/(^\s*|\s*$)/g, "");
  };
  function serialize(object) {
    if (!isObject2(object))
      return object;
    var pairs = [];
    for (var key in object)
      hasOwn2(object, key) && pushEncodedKeyValuePair(pairs, key, object[key]);
    return pairs.join("&");
  }
  function pushEncodedKeyValuePair(pairs, key, value2) {
    if (void 0 !== value2)
      if (null !== value2)
        if (Array.isArray(value2)) {
          var _step, _iterator = _createForOfIteratorHelper(value2);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              pushEncodedKeyValuePair(pairs, key, _step.value);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (isObject2(value2))
          for (var subkey in value2)
            hasOwn2(value2, subkey) && pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), value2[subkey]);
        else
          pairs.push(encodeURI(key) + "=" + encodeURIComponent(value2));
      else
        pairs.push(encodeURI(key));
  }
  function parseString(string_) {
    for (var pair, pos, object = {}, pairs = string_.split("&"), i2 = 0, length_ = pairs.length; i2 < length_; ++i2)
      -1 === (pos = (pair = pairs[i2]).indexOf("=")) ? object[decodeURIComponent(pair)] = "" : object[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    return object;
  }
  function isJSON(mime) {
    return /[/+]json($|[^-\w])/i.test(mime);
  }
  function Response(request_) {
    this.req = request_, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
    var status = this.xhr.status;
    1223 === status && (status = 204), this._setStatusProperties(status), this.headers = function(string_) {
      for (var index2, line, field, value2, lines = string_.split(/\r?\n/), fields = {}, i2 = 0, length_ = lines.length; i2 < length_; ++i2)
        -1 !== (index2 = (line = lines[i2]).indexOf(":")) && (field = line.slice(0, index2).toLowerCase(), value2 = trim2(line.slice(index2 + 1)), fields[field] = value2);
      return fields;
    }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && request_._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
  function Request(method, url) {
    var self2 = this;
    this._query = this._query || [], this.method = method, this.url = url, this.header = {}, this._header = {}, this.on("end", function() {
      var new_error, error2 = null, res = null;
      try {
        res = new Response(self2);
      } catch (err) {
        return (error2 = new Error("Parser is unable to parse the response")).parse = true, error2.original = err, self2.xhr ? (error2.rawResponse = void 0 === self2.xhr.responseType ? self2.xhr.responseText : self2.xhr.response, error2.status = self2.xhr.status ? self2.xhr.status : null, error2.statusCode = error2.status) : (error2.rawResponse = null, error2.status = null), self2.callback(error2);
      }
      self2.emit("response", res);
      try {
        self2._isResponseOK(res) || (new_error = new Error(res.statusText || res.text || "Unsuccessful HTTP response"));
      } catch (err) {
        new_error = err;
      }
      new_error ? (new_error.original = error2, new_error.response = res, new_error.status = res.status, self2.callback(new_error, res)) : self2.callback(null, res);
    });
  }
  request.serializeObject = serialize, request.parseString = parseString, request.types = { html: "text/html", json: "application/json", xml: "text/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, request.serialize = { "application/x-www-form-urlencoded": lib.stringify, "application/json": fastSafeStringify }, request.parse = { "application/x-www-form-urlencoded": parseString, "application/json": JSON.parse }, mixin(Response.prototype, responseBase.prototype), Response.prototype._parseBody = function(string_) {
    var parse = request.parse[this.type];
    return this.req._parser ? this.req._parser(this, string_) : (!parse && isJSON(this.type) && (parse = request.parse["application/json"]), parse && string_ && (string_.length > 0 || string_ instanceof Object) ? parse(string_) : null);
  }, Response.prototype.toError = function() {
    var req = this.req, method = req.method, url = req.url, message = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")"), error2 = new Error(message);
    return error2.status = this.status, error2.method = method, error2.url = url, error2;
  }, request.Response = Response, componentEmitter(Request.prototype), mixin(Request.prototype, requestBase.prototype), Request.prototype.type = function(type) {
    return this.set("Content-Type", request.types[type] || type), this;
  }, Request.prototype.accept = function(type) {
    return this.set("Accept", request.types[type] || type), this;
  }, Request.prototype.auth = function(user, pass, options) {
    1 === arguments.length && (pass = ""), "object" === _typeof2(pass) && null !== pass && (options = pass, pass = ""), options || (options = { type: "function" == typeof btoa ? "basic" : "auto" });
    var encoder = options.encoder ? options.encoder : function(string) {
      if ("function" == typeof btoa)
        return btoa(string);
      throw new Error("Cannot use basic auth, btoa is not a function");
    };
    return this._auth(user, pass, options, encoder);
  }, Request.prototype.query = function(value2) {
    return "string" != typeof value2 && (value2 = serialize(value2)), value2 && this._query.push(value2), this;
  }, Request.prototype.attach = function(field, file, options) {
    if (file) {
      if (this._data)
        throw new Error("superagent can't mix .send() and .attach()");
      this._getFormData().append(field, file, options || file.name);
    }
    return this;
  }, Request.prototype._getFormData = function() {
    return this._formData || (this._formData = new root.FormData()), this._formData;
  }, Request.prototype.callback = function(error2, res) {
    if (this._shouldRetry(error2, res))
      return this._retry();
    var fn = this._callback;
    this.clearTimeout(), error2 && (this._maxRetries && (error2.retries = this._retries - 1), this.emit("error", error2)), fn(error2, res);
  }, Request.prototype.crossDomainError = function() {
    var error2 = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    error2.crossDomain = true, error2.status = this.status, error2.method = this.method, error2.url = this.url, this.callback(error2);
  }, Request.prototype.agent = function() {
    return console.warn("This is not supported in browser version of superagent"), this;
  }, Request.prototype.ca = Request.prototype.agent, Request.prototype.buffer = Request.prototype.ca, Request.prototype.write = function() {
    throw new Error("Streaming is not supported in browser version of superagent");
  }, Request.prototype.pipe = Request.prototype.write, Request.prototype._isHost = function(object) {
    return object && "object" === _typeof2(object) && !Array.isArray(object) && "[object Object]" !== Object.prototype.toString.call(object);
  }, Request.prototype.end = function(fn) {
    this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = true, this._callback = fn || noop2, this._finalizeQueryString(), this._end();
  }, Request.prototype._setUploadTimeout = function() {
    var self2 = this;
    this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function() {
      self2._timeoutError("Upload timeout of ", self2._uploadTimeout, "ETIMEDOUT");
    }, this._uploadTimeout));
  }, Request.prototype._end = function() {
    if (this._aborted)
      return this.callback(new Error("The request has been aborted even before .end() was called"));
    var self2 = this;
    this.xhr = request.getXHR();
    var xhr = this.xhr, data = this._formData || this._data;
    this._setTimeouts(), xhr.addEventListener("readystatechange", function() {
      var readyState = xhr.readyState;
      if (readyState >= 2 && self2._responseTimeoutTimer && clearTimeout(self2._responseTimeoutTimer), 4 === readyState) {
        var status;
        try {
          status = xhr.status;
        } catch (_unused5) {
          status = 0;
        }
        if (!status) {
          if (self2.timedout || self2._aborted)
            return;
          return self2.crossDomainError();
        }
        self2.emit("end");
      }
    });
    var handleProgress = function(direction, e2) {
      e2.total > 0 && (e2.percent = e2.loaded / e2.total * 100, 100 === e2.percent && clearTimeout(self2._uploadTimeoutTimer)), e2.direction = direction, self2.emit("progress", e2);
    };
    if (this.hasListeners("progress"))
      try {
        xhr.addEventListener("progress", handleProgress.bind(null, "download")), xhr.upload && xhr.upload.addEventListener("progress", handleProgress.bind(null, "upload"));
      } catch (_unused6) {
      }
    xhr.upload && this._setUploadTimeout();
    try {
      this.username && this.password ? xhr.open(this.method, this.url, true, this.username, this.password) : xhr.open(this.method, this.url, true);
    } catch (err) {
      return this.callback(err);
    }
    if (this._withCredentials && (xhr.withCredentials = true), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof data && !this._isHost(data)) {
      var contentType = this._header["content-type"], _serialize = this._serializer || request.serialize[contentType ? contentType.split(";")[0] : ""];
      !_serialize && isJSON(contentType) && (_serialize = request.serialize["application/json"]), _serialize && (data = _serialize(data));
    }
    for (var field in this.header)
      null !== this.header[field] && hasOwn2(this.header, field) && xhr.setRequestHeader(field, this.header[field]);
    this._responseType && (xhr.responseType = this._responseType), this.emit("request", this), xhr.send(void 0 === data ? null : data);
  }, request.agent = function() {
    return new agentBase();
  };
  for (var _loop = function() {
    var method = _arr[_i];
    agentBase.prototype[method.toLowerCase()] = function(url, fn) {
      var request_ = new request.Request(method, url);
      return this._setDefaults(request_), fn && request_.end(fn), request_;
    };
  }, _i = 0, _arr = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]; _i < _arr.length; _i++)
    _loop();
  function del(url, data, fn) {
    var request_ = request("DELETE", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.send(data), fn && request_.end(fn), request_;
  }
  agentBase.prototype.del = agentBase.prototype.delete, request.get = function(url, data, fn) {
    var request_ = request("GET", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.query(data), fn && request_.end(fn), request_;
  }, request.head = function(url, data, fn) {
    var request_ = request("HEAD", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.query(data), fn && request_.end(fn), request_;
  }, request.options = function(url, data, fn) {
    var request_ = request("OPTIONS", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.send(data), fn && request_.end(fn), request_;
  }, request.del = del, request.delete = del, request.patch = function(url, data, fn) {
    var request_ = request("PATCH", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.send(data), fn && request_.end(fn), request_;
  }, request.post = function(url, data, fn) {
    var request_ = request("POST", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.send(data), fn && request_.end(fn), request_;
  }, request.put = function(url, data, fn) {
    var request_ = request("PUT", url);
    return "function" == typeof data && (fn = data, data = null), data && request_.send(data), fn && request_.end(fn), request_;
  };
}), byteLength_1 = (client.Request, function(b64) {
  var lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1];
  return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
}), toByteArray_1 = function(b64) {
  var tmp, i2, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr2 = new Arr(function(b642, validLen2, placeHoldersLen2) {
    return 3 * (validLen2 + placeHoldersLen2) / 4 - placeHoldersLen2;
  }(0, validLen, placeHoldersLen)), curByte = 0, len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
  for (i2 = 0; i2 < len2; i2 += 4)
    tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)], arr2[curByte++] = tmp >> 16 & 255, arr2[curByte++] = tmp >> 8 & 255, arr2[curByte++] = 255 & tmp;
  2 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4, arr2[curByte++] = 255 & tmp);
  1 === placeHoldersLen && (tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2, arr2[curByte++] = tmp >> 8 & 255, arr2[curByte++] = 255 & tmp);
  return arr2;
}, fromByteArray_1 = function(uint8) {
  for (var tmp, len2 = uint8.length, extraBytes = len2 % 3, parts = [], i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += 16383)
    parts.push(encodeChunk(uint8, i2, i2 + 16383 > len22 ? len22 : i2 + 16383));
  1 === extraBytes ? (tmp = uint8[len2 - 1], parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")) : 2 === extraBytes && (tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1], parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="));
  return parts.join("");
}, lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i)
  lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
var agentBase;
var client;
var byteLength_1;
var toByteArray_1;
var fromByteArray_1;
var lookup;
var revLookup;
var Arr;
var code;
var i;
var len;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var validLen = b64.indexOf("=");
  return -1 === validLen && (validLen = len), [validLen, validLen === len ? 0 : 4 - validLen % 4];
}
function encodeChunk(uint8, start, end) {
  for (var tmp, num, output = [], i = start; i < end; i += 3)
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]), output.push(lookup[(num = tmp) >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num]);
  return output.join("");
}
revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
var base64Js = { byteLength: byteLength_1, toByteArray: toByteArray_1, fromByteArray: fromByteArray_1 };
var base64Url = { encode: function(str) {
  return base64Js.fromByteArray(function(str2) {
    for (var arr2 = new Array(str2.length), a2 = 0; a2 < str2.length; a2++)
      arr2[a2] = str2.charCodeAt(a2);
    return arr2;
  }(str)).replace(/\+/g, "-").replace(/\//g, "_");
}, decode: function(str) {
  return str = function(str2) {
    var mod = str2.length % 4;
    return 0 === mod ? str2 : str2 + new Array(1 + (4 - mod)).join("=");
  }(str).replace(/-/g, "+").replace(/_/g, "/"), function(array) {
    for (var result = "", i = 0; i < array.length; i++)
      result += String.fromCharCode(array[i]);
    return result;
  }(base64Js.toByteArray(str));
} };
var version = { raw: "9.25.0" };
var toString = Object.prototype.toString;
function attribute(o2, attr, type, text) {
  if (type = "array" === type ? "object" : type, o2 && typeof o2[attr] !== type)
    throw new Error(text);
}
function variable(o2, type, text) {
  if (typeof o2 !== type)
    throw new Error(text);
}
function value(o2, values, text) {
  if (-1 === values.indexOf(o2))
    throw new Error(text);
}
var assert = { check: function(o2, config, attributes) {
  if (config.optional && !o2 || variable(o2, config.type, config.message), "object" === config.type && attributes)
    for (var keys = Object.keys(attributes), index2 = 0; index2 < keys.length; index2++) {
      var a2 = keys[index2];
      attributes[a2].optional && !o2[a2] || attributes[a2].condition && !attributes[a2].condition(o2) || (attribute(o2, a2, attributes[a2].type, attributes[a2].message), attributes[a2].values && value(o2[a2], attributes[a2].values, attributes[a2].value_message));
    }
}, attribute, variable, value, isArray: function(array) {
  return this.supportsIsArray() ? Array.isArray(array) : "[object Array]" === toString.call(array);
}, supportsIsArray: function() {
  return null != Array.isArray;
} };
function objectAssignPolyfill(target) {
  if (null == target)
    throw new TypeError("Cannot convert first argument to object");
  for (var to = Object(target), i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (null != nextSource)
      for (var keysArray = Object.keys(Object(nextSource)), nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        var nextKey = keysArray[nextIndex], desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        void 0 !== desc && desc.enumerable && (to[nextKey] = nextSource[nextKey]);
      }
  }
  return to;
}
var objectAssign = { get: function() {
  return Object.assign ? Object.assign : objectAssignPolyfill;
}, objectAssignPolyfill };
function pick(object, keys) {
  return keys.reduce(function(prev, key) {
    return object[key] && (prev[key] = object[key]), prev;
  }, {});
}
function objectValues(obj) {
  var values = [];
  for (var key in obj)
    values.push(obj[key]);
  return values;
}
function extend() {
  var params = objectValues(arguments);
  return params.unshift({}), objectAssign.get().apply(void 0, params);
}
function getLocationFromUrl(href) {
  var match = href.match(/^(https?:|file:|chrome-extension:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match && { href, protocol: match[1], host: match[2], hostname: match[3], port: match[4], pathname: match[5], search: match[6], hash: match[7] };
}
function trim(options, key) {
  var trimmed = extend(options);
  return options[key] && (trimmed[key] = options[key].trim()), trimmed;
}
var objectHelper = { toSnakeCase: function toSnakeCase(object, exceptions) {
  return "object" != typeof object || assert.isArray(object) || null === object ? object : (exceptions = exceptions || [], Object.keys(object).reduce(function(p, key) {
    return p[-1 === exceptions.indexOf(key) ? function(str) {
      for (var code, newKey = "", index2 = 0, wasPrevNumber = true, wasPrevUppercase = true; index2 < str.length; )
        code = str.charCodeAt(index2), !wasPrevUppercase && code >= 65 && code <= 90 || !wasPrevNumber && code >= 48 && code <= 57 ? (newKey += "_", newKey += str[index2].toLowerCase()) : newKey += str[index2].toLowerCase(), wasPrevNumber = code >= 48 && code <= 57, wasPrevUppercase = code >= 65 && code <= 90, index2++;
      return newKey;
    }(key) : key] = toSnakeCase(object[key]), p;
  }, {}));
}, toCamelCase: function toCamelCase(object, exceptions, options) {
  return "object" != typeof object || assert.isArray(object) || null === object ? object : (exceptions = exceptions || [], options = options || {}, Object.keys(object).reduce(function(p, key) {
    var parts, newKey = -1 === exceptions.indexOf(key) ? (parts = key.split("_")).reduce(function(p2, c2) {
      return p2 + c2.charAt(0).toUpperCase() + c2.slice(1);
    }, parts.shift()) : key;
    return p[newKey] = toCamelCase(object[newKey] || object[key], [], options), options.keepOriginal && (p[key] = toCamelCase(object[key], [], options)), p;
  }, {}));
}, blacklist: function(object, blacklistedKeys) {
  return Object.keys(object).reduce(function(p, key) {
    return -1 === blacklistedKeys.indexOf(key) && (p[key] = object[key]), p;
  }, {});
}, merge: function(object, keys) {
  return { base: keys ? pick(object, keys) : object, with: function(object2, keys2) {
    return object2 = keys2 ? pick(object2, keys2) : object2, extend(this.base, object2);
  } };
}, pick, getKeysNotIn: function(obj, allowedKeys) {
  var notAllowed = [];
  for (var key in obj)
    -1 === allowedKeys.indexOf(key) && notAllowed.push(key);
  return notAllowed;
}, extend, getOriginFromUrl: function(url) {
  if (url) {
    var parsed = getLocationFromUrl(url);
    if (!parsed)
      return null;
    var origin = parsed.protocol + "//" + parsed.hostname;
    return parsed.port && (origin += ":" + parsed.port), origin;
  }
}, getLocationFromUrl, trimUserDetails: function(options) {
  return function(options2, keys) {
    return keys.reduce(trim, options2);
  }(options, ["username", "email", "phoneNumber"]);
}, updatePropertyOn: function updatePropertyOn(obj, path, value2) {
  "string" == typeof path && (path = path.split("."));
  var next = path[0];
  obj.hasOwnProperty(next) && (1 === path.length ? obj[next] = value2 : updatePropertyOn(obj[next], path.slice(1), value2));
} };
function RequestWrapper(req) {
  this.request = req, this.method = req.method, this.url = req.url, this.body = req._data, this.headers = req._header;
}
function RequestObj(req) {
  this.request = req;
}
function RequestBuilder(options) {
  this._sendTelemetry = false !== options._sendTelemetry || options._sendTelemetry, this._telemetryInfo = options._telemetryInfo || null, this._timesToRetryFailedRequests = options._timesToRetryFailedRequests, this.headers = options.headers || {}, this._universalLoginPage = options.universalLoginPage;
}
function getWindow() {
  return window;
}
RequestWrapper.prototype.abort = function() {
  this.request.abort();
}, RequestWrapper.prototype.getMethod = function() {
  return this.method;
}, RequestWrapper.prototype.getBody = function() {
  return this.body;
}, RequestWrapper.prototype.getUrl = function() {
  return this.url;
}, RequestWrapper.prototype.getHeaders = function() {
  return this.headers;
}, RequestObj.prototype.set = function(key, value2) {
  return this.request = this.request.set(key, value2), this;
}, RequestObj.prototype.send = function(body) {
  return this.request = this.request.send(objectHelper.trimUserDetails(body)), this;
}, RequestObj.prototype.withCredentials = function() {
  return this.request = this.request.withCredentials(), this;
}, RequestObj.prototype.end = function(cb) {
  return this.request.end(cb), new RequestWrapper(this.request);
}, RequestBuilder.prototype.setCommonConfiguration = function(ongoingRequest, options) {
  if (options = options || {}, this._timesToRetryFailedRequests > 0 && (ongoingRequest = ongoingRequest.retry(this._timesToRetryFailedRequests)), options.noHeaders)
    return ongoingRequest;
  var headers = this.headers;
  ongoingRequest = ongoingRequest.set("Content-Type", "application/json"), options.xRequestLanguage && (ongoingRequest = ongoingRequest.set("X-Request-Language", options.xRequestLanguage));
  for (var keys = Object.keys(this.headers), a2 = 0; a2 < keys.length; a2++)
    ongoingRequest = ongoingRequest.set(keys[a2], headers[keys[a2]]);
  return this._sendTelemetry && (ongoingRequest = ongoingRequest.set("Auth0-Client", this.getTelemetryData())), ongoingRequest;
}, RequestBuilder.prototype.getTelemetryData = function() {
  var telemetryName = this._universalLoginPage ? "auth0.js-ulp" : "auth0.js", clientInfo = { name: telemetryName, version: version.raw };
  this._telemetryInfo && ((clientInfo = objectHelper.extend({}, this._telemetryInfo)).env = objectHelper.extend({}, this._telemetryInfo.env), clientInfo.env[telemetryName] = version.raw);
  var jsonClientInfo = JSON.stringify(clientInfo);
  return base64Url.encode(jsonClientInfo);
}, RequestBuilder.prototype.get = function(url, options) {
  return new RequestObj(this.setCommonConfiguration(client.get(url), options));
}, RequestBuilder.prototype.post = function(url, options) {
  return new RequestObj(this.setCommonConfiguration(client.post(url), options));
}, RequestBuilder.prototype.patch = function(url, options) {
  return new RequestObj(this.setCommonConfiguration(client.patch(url), options));
};
var windowHelper = { redirect: function(url) {
  getWindow().location = url;
}, getDocument: function() {
  return getWindow().document;
}, getWindow, getOrigin: function() {
  var location = getWindow().location, origin = location.origin;
  return origin || (origin = objectHelper.getOriginFromUrl(location.href)), origin;
} };
function DummyStorage() {
}
DummyStorage.prototype.getItem = function() {
  return null;
}, DummyStorage.prototype.removeItem = function() {
}, DummyStorage.prototype.setItem = function() {
};
var js_cookie = createCommonjsModule(function(module, exports) {
  var factory;
  factory = function() {
    function extend2() {
      for (var i = 0, result = {}; i < arguments.length; i++) {
        var attributes = arguments[i];
        for (var key in attributes)
          result[key] = attributes[key];
      }
      return result;
    }
    function decode(s2) {
      return s2.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return function init(converter) {
      function api() {
      }
      function set(key, value2, attributes) {
        if ("undefined" != typeof document) {
          "number" == typeof (attributes = extend2({ path: "/" }, api.defaults, attributes)).expires && (attributes.expires = new Date(1 * /* @__PURE__ */ new Date() + 864e5 * attributes.expires)), attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
          try {
            var result = JSON.stringify(value2);
            /^[\{\[]/.test(result) && (value2 = result);
          } catch (e2) {
          }
          value2 = converter.write ? converter.write(value2, key) : encodeURIComponent(String(value2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var stringifiedAttributes = "";
          for (var attributeName in attributes)
            attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, true !== attributes[attributeName] && (stringifiedAttributes += "=" + attributes[attributeName].split(";")[0]));
          return document.cookie = key + "=" + value2 + stringifiedAttributes;
        }
      }
      function get(key, json) {
        if ("undefined" != typeof document) {
          for (var jar = {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split("="), cookie = parts.slice(1).join("=");
            json || '"' !== cookie.charAt(0) || (cookie = cookie.slice(1, -1));
            try {
              var name = decode(parts[0]);
              if (cookie = (converter.read || converter)(cookie, name) || decode(cookie), json)
                try {
                  cookie = JSON.parse(cookie);
                } catch (e2) {
                }
              if (jar[name] = cookie, key === name)
                break;
            } catch (e2) {
            }
          }
          return key ? jar[key] : jar;
        }
      }
      return api.set = set, api.get = function(key) {
        return get(key, false);
      }, api.getJSON = function(key) {
        return get(key, true);
      }, api.remove = function(key, attributes) {
        set(key, "", extend2(attributes, { expires: -1 }));
      }, api.defaults = {}, api.withConverter = init, api;
    }(function() {
    });
  }, module.exports = factory();
});
function buildCompatCookieKey(key) {
  return "_" + key + "_compat";
}
function CookieStorage(options) {
  this._options = options || {};
}
function Warn(options) {
  this.disableWarnings = options.disableWarnings;
}
function StorageHandler(options) {
  if (this.warn = new Warn({}), this.storage = new CookieStorage(options), true === options.__tryLocalStorageFirst)
    try {
      var localStorage = windowHelper.getWindow().localStorage;
      localStorage && (this.storage = localStorage);
    } catch (e2) {
      this.warn.warning(e2), this.warn.warning("Can't use localStorage. Using CookieStorage instead.");
    }
}
function Storage(options) {
  this.handler = new StorageHandler(options);
}
function SSODataStorage(options) {
  this.storage = new Storage(options);
}
function buildResponse(error2, description) {
  return { error: error2, errorDescription: description };
}
CookieStorage.prototype.getItem = function(key) {
  return js_cookie.get(key) || js_cookie.get(buildCompatCookieKey(key));
}, CookieStorage.prototype.removeItem = function(key) {
  var params = {};
  this._options.cookieDomain && (params.domain = this._options.cookieDomain), js_cookie.remove(key, params), js_cookie.remove(buildCompatCookieKey(key), params);
}, CookieStorage.prototype.setItem = function(key, value2, options) {
  var params = objectHelper.extend({ expires: 1 }, options);
  if ("https:" === windowHelper.getWindow().location.protocol && (params.secure = true, params.sameSite = "none", this._options.legacySameSiteCookie)) {
    var legacyOptions = objectHelper.blacklist(params, ["sameSite"]);
    js_cookie.set(buildCompatCookieKey(key), value2, legacyOptions);
  }
  this._options.cookieDomain && (params.domain = this._options.cookieDomain), js_cookie.set(key, value2, params);
}, Warn.prototype.warning = function(message) {
  this.disableWarnings || console.warn(message);
}, StorageHandler.prototype.failover = function() {
  this.storage instanceof DummyStorage ? this.warn.warning("DummyStorage: ignore failover") : this.storage instanceof CookieStorage ? (this.warn.warning("CookieStorage: failing over DummyStorage"), this.storage = new DummyStorage()) : (this.warn.warning("LocalStorage: failing over CookieStorage"), this.storage = new CookieStorage());
}, StorageHandler.prototype.getItem = function(key) {
  try {
    return this.storage.getItem(key);
  } catch (e2) {
    return this.warn.warning(e2), this.failover(), this.getItem(key);
  }
}, StorageHandler.prototype.removeItem = function(key) {
  try {
    return this.storage.removeItem(key);
  } catch (e2) {
    return this.warn.warning(e2), this.failover(), this.removeItem(key);
  }
}, StorageHandler.prototype.setItem = function(key, value2, options) {
  try {
    return this.storage.setItem(key, value2, options);
  } catch (e2) {
    return this.warn.warning(e2), this.failover(), this.setItem(key, value2, options);
  }
}, Storage.prototype.getItem = function(key) {
  var value2 = this.handler.getItem(key);
  try {
    return JSON.parse(value2);
  } catch (_2) {
    return value2;
  }
}, Storage.prototype.removeItem = function(key) {
  return this.handler.removeItem(key);
}, Storage.prototype.setItem = function(key, value2, options) {
  var json = JSON.stringify(value2);
  return this.handler.setItem(key, json, options);
}, SSODataStorage.prototype.set = function(connection, sub) {
  var ssodata = { lastUsedConnection: connection, lastUsedSub: sub };
  this.storage.setItem("auth0.ssodata", JSON.stringify(ssodata));
}, SSODataStorage.prototype.get = function() {
  var ssodata = this.storage.getItem("auth0.ssodata");
  if (ssodata)
    return JSON.parse(ssodata);
};
var error = { buildResponse, invalidToken: function(description) {
  return buildResponse("invalid_token", description);
} };
function wrapCallback(cb, options) {
  return (options = options || {}).ignoreCasing = !!options.ignoreCasing && options.ignoreCasing, function(err, data) {
    var errObj;
    return err || data ? (!err && data.err && (err = data.err, data = null), !err && data.error && (err = data, data = null), err ? (errObj = { original: err }, objectHelper.updatePropertyOn(errObj, "original.response.req._data.password", "*****"), err.response && err.response.statusCode && (errObj.statusCode = err.response.statusCode), err.response && err.response.statusText && (errObj.statusText = err.response.statusText), err.response && err.response.body && (err = err.response.body), err.err && (err = err.err), errObj.code = err.code || err.error || err.error_code || err.status || null, errObj.description = err.errorDescription || err.error_description || err.description || err.error || err.details || err.err || null, options.forceLegacyError && (errObj.error = errObj.code, errObj.error_description = errObj.description), err.error_codes && err.error_details && (errObj.errorDetails = { codes: err.error_codes, details: err.error_details }), err.name && (errObj.name = err.name), err.policy && (errObj.policy = err.policy), cb(errObj)) : !data.type || "text/html" !== data.type && "text/plain" !== data.type ? options.ignoreCasing ? cb(null, data.body || data) : cb(null, objectHelper.toCamelCase(data.body || data, [], { keepOriginal: options.keepOriginalCasing })) : cb(null, data.text)) : cb(error.buildResponse("generic_error", "Something went wrong"));
  };
}
var tokenParams = ["realm", "audience", "otp", "client_id", "client_secret", "redirect_uri", "scope", "code", "grant_type", "username", "password", "refresh_token", "assertion", "client_assertion", "client_assertion_type", "code_verifier"];
var authorizeParams = ["connection", "connection_scope", "auth0Client", "owp", "device", "realm", "organization", "invitation", "protocol", "_csrf", "_intstate", "login_ticket", "client_id", "response_type", "response_mode", "redirect_uri", "audience", "scope", "state", "nonce", "display", "prompt", "screen_hint", "max_age", "ui_locales", "claims_locales", "id_token_hint", "login_hint", "acr_values", "claims", "registration", "request", "request_uri", "code_challenge", "code_challenge_method", "access_type", "display"];
var parametersWhitelist = { oauthTokenParams: function(warn, params) {
  return objectHelper.pick(params, tokenParams);
}, oauthAuthorizeParams: function(warn, params) {
  var notAllowed = objectHelper.getKeysNotIn(params, authorizeParams);
  return notAllowed.length > 0 && warn.warning("Following parameters are not allowed on the `/authorize` endpoint: [" + notAllowed.join(",") + "]"), params;
} };
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function e(t2) {
  var e2 = { exports: {} };
  return t2(e2, e2.exports), e2.exports;
}
var r = e(function(e2, r2) {
  e2.exports = function() {
    function e3(t2) {
      return "function" == typeof t2;
    }
    var r3 = Array.isArray ? Array.isArray : function(t2) {
      return "[object Array]" === Object.prototype.toString.call(t2);
    }, i = 0, n2 = void 0, o2 = void 0, s2 = function(t2, e4) {
      l[i] = t2, l[i + 1] = e4, 2 === (i += 2) && (o2 ? o2(d) : w2());
    }, h2 = "undefined" != typeof window ? window : void 0, u2 = h2 || {}, a2 = u2.MutationObserver || u2.WebKitMutationObserver, f2 = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), c2 = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
    function p() {
      var t2 = setTimeout;
      return function() {
        return t2(d, 1);
      };
    }
    var l = new Array(1e3);
    function d() {
      for (var t2 = 0; t2 < i; t2 += 2)
        (0, l[t2])(l[t2 + 1]), l[t2] = void 0, l[t2 + 1] = void 0;
      i = 0;
    }
    var m, v, y2, g2, w2 = void 0;
    function T2(t2, e4) {
      var r4 = this, i2 = new this.constructor(S2);
      void 0 === i2[_2] && N(i2);
      var n3 = r4._state;
      if (n3) {
        var o3 = arguments[n3 - 1];
        s2(function() {
          return O(n3, i2, o3, r4._result);
        });
      } else
        C(r4, i2, t2, e4);
      return i2;
    }
    function b2(t2) {
      if (t2 && "object" == typeof t2 && t2.constructor === this)
        return t2;
      var e4 = new this(S2);
      return E2(e4, t2), e4;
    }
    w2 = f2 ? function() {
      return process.nextTick(d);
    } : a2 ? (v = 0, y2 = new a2(d), g2 = document.createTextNode(""), y2.observe(g2, { characterData: true }), function() {
      g2.data = v = ++v % 2;
    }) : c2 ? ((m = new MessageChannel()).port1.onmessage = d, function() {
      return m.port2.postMessage(0);
    }) : void 0 === h2 ? function() {
      try {
        var t2 = Function("return this")().require("vertx");
        return void 0 !== (n2 = t2.runOnLoop || t2.runOnContext) ? function() {
          n2(d);
        } : p();
      } catch (t3) {
        return p();
      }
    }() : p();
    var _2 = Math.random().toString(36).substring(2);
    function S2() {
    }
    var A2 = void 0;
    function x2(t2, r4, i2) {
      r4.constructor === t2.constructor && i2 === T2 && r4.constructor.resolve === b2 ? function(t3, e4) {
        1 === e4._state ? I2(t3, e4._result) : 2 === e4._state ? M(t3, e4._result) : C(e4, void 0, function(e5) {
          return E2(t3, e5);
        }, function(e5) {
          return M(t3, e5);
        });
      }(t2, r4) : void 0 === i2 ? I2(t2, r4) : e3(i2) ? function(t3, e4, r5) {
        s2(function(t4) {
          var i3 = false, n3 = function(r6, n4, o3, s3) {
            try {
              r6.call(n4, function(r7) {
                i3 || (i3 = true, e4 !== r7 ? E2(t4, r7) : I2(t4, r7));
              }, function(e5) {
                i3 || (i3 = true, M(t4, e5));
              });
            } catch (t5) {
              return t5;
            }
          }(r5, e4);
          !i3 && n3 && (i3 = true, M(t4, n3));
        }, t3);
      }(t2, r4, i2) : I2(t2, r4);
    }
    function E2(t2, e4) {
      if (t2 === e4)
        M(t2, new TypeError("You cannot resolve a promise with itself"));
      else if (n3 = typeof (i2 = e4), null === i2 || "object" !== n3 && "function" !== n3)
        I2(t2, e4);
      else {
        var r4 = void 0;
        try {
          r4 = e4.then;
        } catch (e5) {
          return void M(t2, e5);
        }
        x2(t2, e4, r4);
      }
      var i2, n3;
    }
    function k2(t2) {
      t2._onerror && t2._onerror(t2._result), R(t2);
    }
    function I2(t2, e4) {
      t2._state === A2 && (t2._result = e4, t2._state = 1, 0 !== t2._subscribers.length && s2(R, t2));
    }
    function M(t2, e4) {
      t2._state === A2 && (t2._state = 2, t2._result = e4, s2(k2, t2));
    }
    function C(t2, e4, r4, i2) {
      var n3 = t2._subscribers, o3 = n3.length;
      t2._onerror = null, n3[o3] = e4, n3[o3 + 1] = r4, n3[o3 + 2] = i2, 0 === o3 && t2._state && s2(R, t2);
    }
    function R(t2) {
      var e4 = t2._subscribers, r4 = t2._state;
      if (0 !== e4.length) {
        for (var i2 = void 0, n3 = void 0, o3 = t2._result, s3 = 0; s3 < e4.length; s3 += 3)
          n3 = e4[s3 + r4], (i2 = e4[s3]) ? O(r4, i2, n3, o3) : n3(o3);
        t2._subscribers.length = 0;
      }
    }
    function O(t2, r4, i2, n3) {
      var o3 = e3(i2), s3 = void 0, h3 = void 0, u3 = true;
      if (o3) {
        try {
          s3 = i2(n3);
        } catch (t3) {
          u3 = false, h3 = t3;
        }
        if (r4 === s3)
          return void M(r4, new TypeError("A promises callback cannot return that same promise."));
      } else
        s3 = n3;
      r4._state !== A2 || (o3 && u3 ? E2(r4, s3) : false === u3 ? M(r4, h3) : 1 === t2 ? I2(r4, s3) : 2 === t2 && M(r4, s3));
    }
    var j = 0;
    function N(t2) {
      t2[_2] = j++, t2._state = void 0, t2._result = void 0, t2._subscribers = [];
    }
    var P = function() {
      function t2(t3, e4) {
        this._instanceConstructor = t3, this.promise = new t3(S2), this.promise[_2] || N(this.promise), r3(e4) ? (this.length = e4.length, this._remaining = e4.length, this._result = new Array(this.length), 0 === this.length ? I2(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e4), 0 === this._remaining && I2(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array"));
      }
      return t2.prototype._enumerate = function(t3) {
        for (var e4 = 0; this._state === A2 && e4 < t3.length; e4++)
          this._eachEntry(t3[e4], e4);
      }, t2.prototype._eachEntry = function(t3, e4) {
        var r4 = this._instanceConstructor, i2 = r4.resolve;
        if (i2 === b2) {
          var n3 = void 0, o3 = void 0, s3 = false;
          try {
            n3 = t3.then;
          } catch (t4) {
            s3 = true, o3 = t4;
          }
          if (n3 === T2 && t3._state !== A2)
            this._settledAt(t3._state, e4, t3._result);
          else if ("function" != typeof n3)
            this._remaining--, this._result[e4] = t3;
          else if (r4 === V) {
            var h3 = new r4(S2);
            s3 ? M(h3, o3) : x2(h3, t3, n3), this._willSettleAt(h3, e4);
          } else
            this._willSettleAt(new r4(function(e5) {
              return e5(t3);
            }), e4);
        } else
          this._willSettleAt(i2(t3), e4);
      }, t2.prototype._settledAt = function(t3, e4, r4) {
        var i2 = this.promise;
        i2._state === A2 && (this._remaining--, 2 === t3 ? M(i2, r4) : this._result[e4] = r4), 0 === this._remaining && I2(i2, this._result);
      }, t2.prototype._willSettleAt = function(t3, e4) {
        var r4 = this;
        C(t3, void 0, function(t4) {
          return r4._settledAt(1, e4, t4);
        }, function(t4) {
          return r4._settledAt(2, e4, t4);
        });
      }, t2;
    }(), V = function() {
      function t2(e4) {
        this[_2] = j++, this._result = this._state = void 0, this._subscribers = [], S2 !== e4 && ("function" != typeof e4 && function() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }(), this instanceof t2 ? function(t3, e5) {
          try {
            e5(function(e6) {
              E2(t3, e6);
            }, function(e6) {
              M(t3, e6);
            });
          } catch (e6) {
            M(t3, e6);
          }
        }(this, e4) : function() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }());
      }
      return t2.prototype.catch = function(t3) {
        return this.then(null, t3);
      }, t2.prototype.finally = function(t3) {
        var r4 = this, i2 = r4.constructor;
        return e3(t3) ? r4.then(function(e4) {
          return i2.resolve(t3()).then(function() {
            return e4;
          });
        }, function(e4) {
          return i2.resolve(t3()).then(function() {
            throw e4;
          });
        }) : r4.then(t3, t3);
      }, t2;
    }();
    return V.prototype.then = T2, V.all = function(t2) {
      return new P(this, t2).promise;
    }, V.race = function(t2) {
      var e4 = this;
      return r3(t2) ? new e4(function(r4, i2) {
        for (var n3 = t2.length, o3 = 0; o3 < n3; o3++)
          e4.resolve(t2[o3]).then(r4, i2);
      }) : new e4(function(t3, e5) {
        return e5(new TypeError("You must pass an array to race."));
      });
    }, V.resolve = b2, V.reject = function(t2) {
      var e4 = new this(S2);
      return M(e4, t2), e4;
    }, V._setScheduler = function(t2) {
      o2 = t2;
    }, V._setAsap = function(t2) {
      s2 = t2;
    }, V._asap = s2, V.polyfill = function() {
      var e4 = void 0;
      if (void 0 !== t)
        e4 = t;
      else if ("undefined" != typeof self)
        e4 = self;
      else
        try {
          e4 = Function("return this")();
        } catch (t2) {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
      var r4 = e4.Promise;
      if (r4) {
        var i2 = null;
        try {
          i2 = Object.prototype.toString.call(r4.resolve());
        } catch (t2) {
        }
        if ("[object Promise]" === i2 && !r4.cast)
          return;
      }
      e4.Promise = V;
    }, V.Promise = V, V;
  }();
});
var i$1 = { __proto__: null, default: {} };
var n = e(function(e2, r2) {
  var n2;
  e2.exports = n2 = n2 || function(e3, r3) {
    var n3;
    if ("undefined" != typeof window && window.crypto && (n3 = window.crypto), "undefined" != typeof self && self.crypto && (n3 = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (n3 = globalThis.crypto), !n3 && "undefined" != typeof window && window.msCrypto && (n3 = window.msCrypto), !n3 && void 0 !== t && t.crypto && (n3 = t.crypto), !n3)
      try {
        n3 = i$1;
      } catch (t2) {
      }
    var o2 = function() {
      if (n3) {
        if ("function" == typeof n3.getRandomValues)
          try {
            return n3.getRandomValues(new Uint32Array(1))[0];
          } catch (t2) {
          }
        if ("function" == typeof n3.randomBytes)
          try {
            return n3.randomBytes(4).readInt32LE();
          } catch (t2) {
          }
      }
      throw new Error("Native crypto module could not be used to get secure random number.");
    }, s2 = Object.create || /* @__PURE__ */ function() {
      function t2() {
      }
      return function(e4) {
        var r4;
        return t2.prototype = e4, r4 = new t2(), t2.prototype = null, r4;
      };
    }(), h2 = {}, u2 = h2.lib = {}, a2 = u2.Base = { extend: function(t2) {
      var e4 = s2(this);
      return t2 && e4.mixIn(t2), e4.hasOwnProperty("init") && this.init !== e4.init || (e4.init = function() {
        e4.$super.init.apply(this, arguments);
      }), e4.init.prototype = e4, e4.$super = this, e4;
    }, create: function() {
      var t2 = this.extend();
      return t2.init.apply(t2, arguments), t2;
    }, init: function() {
    }, mixIn: function(t2) {
      for (var e4 in t2)
        t2.hasOwnProperty(e4) && (this[e4] = t2[e4]);
      t2.hasOwnProperty("toString") && (this.toString = t2.toString);
    }, clone: function() {
      return this.init.prototype.extend(this);
    } }, f2 = u2.WordArray = a2.extend({ init: function(t2, e4) {
      t2 = this.words = t2 || [], this.sigBytes = null != e4 ? e4 : 4 * t2.length;
    }, toString: function(t2) {
      return (t2 || p).stringify(this);
    }, concat: function(t2) {
      var e4 = this.words, r4 = t2.words, i = this.sigBytes, n4 = t2.sigBytes;
      if (this.clamp(), i % 4)
        for (var o3 = 0; o3 < n4; o3++)
          e4[i + o3 >>> 2] |= (r4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255) << 24 - (i + o3) % 4 * 8;
      else
        for (var s3 = 0; s3 < n4; s3 += 4)
          e4[i + s3 >>> 2] = r4[s3 >>> 2];
      return this.sigBytes += n4, this;
    }, clamp: function() {
      var t2 = this.words, r4 = this.sigBytes;
      t2[r4 >>> 2] &= 4294967295 << 32 - r4 % 4 * 8, t2.length = e3.ceil(r4 / 4);
    }, clone: function() {
      var t2 = a2.clone.call(this);
      return t2.words = this.words.slice(0), t2;
    }, random: function(t2) {
      for (var e4 = [], r4 = 0; r4 < t2; r4 += 4)
        e4.push(o2());
      return new f2.init(e4, t2);
    } }), c2 = h2.enc = {}, p = c2.Hex = { stringify: function(t2) {
      for (var e4 = t2.words, r4 = t2.sigBytes, i = [], n4 = 0; n4 < r4; n4++) {
        var o3 = e4[n4 >>> 2] >>> 24 - n4 % 4 * 8 & 255;
        i.push((o3 >>> 4).toString(16)), i.push((15 & o3).toString(16));
      }
      return i.join("");
    }, parse: function(t2) {
      for (var e4 = t2.length, r4 = [], i = 0; i < e4; i += 2)
        r4[i >>> 3] |= parseInt(t2.substr(i, 2), 16) << 24 - i % 8 * 4;
      return new f2.init(r4, e4 / 2);
    } }, l = c2.Latin1 = { stringify: function(t2) {
      for (var e4 = t2.words, r4 = t2.sigBytes, i = [], n4 = 0; n4 < r4; n4++)
        i.push(String.fromCharCode(e4[n4 >>> 2] >>> 24 - n4 % 4 * 8 & 255));
      return i.join("");
    }, parse: function(t2) {
      for (var e4 = t2.length, r4 = [], i = 0; i < e4; i++)
        r4[i >>> 2] |= (255 & t2.charCodeAt(i)) << 24 - i % 4 * 8;
      return new f2.init(r4, e4);
    } }, d = c2.Utf8 = { stringify: function(t2) {
      try {
        return decodeURIComponent(escape(l.stringify(t2)));
      } catch (t3) {
        throw new Error("Malformed UTF-8 data");
      }
    }, parse: function(t2) {
      return l.parse(unescape(encodeURIComponent(t2)));
    } }, m = u2.BufferedBlockAlgorithm = a2.extend({ reset: function() {
      this._data = new f2.init(), this._nDataBytes = 0;
    }, _append: function(t2) {
      "string" == typeof t2 && (t2 = d.parse(t2)), this._data.concat(t2), this._nDataBytes += t2.sigBytes;
    }, _process: function(t2) {
      var r4, i = this._data, n4 = i.words, o3 = i.sigBytes, s3 = this.blockSize, h3 = o3 / (4 * s3), u3 = (h3 = t2 ? e3.ceil(h3) : e3.max((0 | h3) - this._minBufferSize, 0)) * s3, a3 = e3.min(4 * u3, o3);
      if (u3) {
        for (var c3 = 0; c3 < u3; c3 += s3)
          this._doProcessBlock(n4, c3);
        r4 = n4.splice(0, u3), i.sigBytes -= a3;
      }
      return new f2.init(r4, a3);
    }, clone: function() {
      var t2 = a2.clone.call(this);
      return t2._data = this._data.clone(), t2;
    }, _minBufferSize: 0 });
    u2.Hasher = m.extend({ cfg: a2.extend(), init: function(t2) {
      this.cfg = this.cfg.extend(t2), this.reset();
    }, reset: function() {
      m.reset.call(this), this._doReset();
    }, update: function(t2) {
      return this._append(t2), this._process(), this;
    }, finalize: function(t2) {
      return t2 && this._append(t2), this._doFinalize();
    }, blockSize: 16, _createHelper: function(t2) {
      return function(e4, r4) {
        return new t2.init(r4).finalize(e4);
      };
    }, _createHmacHelper: function(t2) {
      return function(e4, r4) {
        return new v.HMAC.init(t2, r4).finalize(e4);
      };
    } });
    var v = h2.algo = {};
    return h2;
  }(Math);
});
var o = e(function(t2, e2) {
  var r2;
  t2.exports = (r2 = n, function(t3) {
    var e3 = r2, i = e3.lib, n2 = i.WordArray, o2 = i.Hasher, s2 = e3.algo, h2 = [], u2 = [];
    !function() {
      function e4(e5) {
        for (var r4 = t3.sqrt(e5), i3 = 2; i3 <= r4; i3++)
          if (!(e5 % i3))
            return false;
        return true;
      }
      function r3(t4) {
        return 4294967296 * (t4 - (0 | t4)) | 0;
      }
      for (var i2 = 2, n3 = 0; n3 < 64; )
        e4(i2) && (n3 < 8 && (h2[n3] = r3(t3.pow(i2, 0.5))), u2[n3] = r3(t3.pow(i2, 1 / 3)), n3++), i2++;
    }();
    var a2 = [], f2 = s2.SHA256 = o2.extend({ _doReset: function() {
      this._hash = new n2.init(h2.slice(0));
    }, _doProcessBlock: function(t4, e4) {
      for (var r3 = this._hash.words, i2 = r3[0], n3 = r3[1], o3 = r3[2], s3 = r3[3], h3 = r3[4], f3 = r3[5], c2 = r3[6], p = r3[7], l = 0; l < 64; l++) {
        if (l < 16)
          a2[l] = 0 | t4[e4 + l];
        else {
          var d = a2[l - 15], m = a2[l - 2];
          a2[l] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + a2[l - 7] + ((m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10) + a2[l - 16];
        }
        var v = i2 & n3 ^ i2 & o3 ^ n3 & o3, y2 = p + ((h3 << 26 | h3 >>> 6) ^ (h3 << 21 | h3 >>> 11) ^ (h3 << 7 | h3 >>> 25)) + (h3 & f3 ^ ~h3 & c2) + u2[l] + a2[l];
        p = c2, c2 = f3, f3 = h3, h3 = s3 + y2 | 0, s3 = o3, o3 = n3, n3 = i2, i2 = y2 + (((i2 << 30 | i2 >>> 2) ^ (i2 << 19 | i2 >>> 13) ^ (i2 << 10 | i2 >>> 22)) + v) | 0;
      }
      r3[0] = r3[0] + i2 | 0, r3[1] = r3[1] + n3 | 0, r3[2] = r3[2] + o3 | 0, r3[3] = r3[3] + s3 | 0, r3[4] = r3[4] + h3 | 0, r3[5] = r3[5] + f3 | 0, r3[6] = r3[6] + c2 | 0, r3[7] = r3[7] + p | 0;
    }, _doFinalize: function() {
      var e4 = this._data, r3 = e4.words, i2 = 8 * this._nDataBytes, n3 = 8 * e4.sigBytes;
      return r3[n3 >>> 5] |= 128 << 24 - n3 % 32, r3[14 + (n3 + 64 >>> 9 << 4)] = t3.floor(i2 / 4294967296), r3[15 + (n3 + 64 >>> 9 << 4)] = i2, e4.sigBytes = 4 * r3.length, this._process(), this._hash;
    }, clone: function() {
      var t4 = o2.clone.call(this);
      return t4._hash = this._hash.clone(), t4;
    } });
    e3.SHA256 = o2._createHelper(f2), e3.HmacSHA256 = o2._createHmacHelper(f2);
  }(Math), r2.SHA256);
});
var s = e(function(t2, e2) {
  var r2, i;
  t2.exports = (i = (r2 = n).lib.WordArray, r2.enc.Base64 = { stringify: function(t3) {
    var e3 = t3.words, r3 = t3.sigBytes, i2 = this._map;
    t3.clamp();
    for (var n2 = [], o2 = 0; o2 < r3; o2 += 3)
      for (var s2 = (e3[o2 >>> 2] >>> 24 - o2 % 4 * 8 & 255) << 16 | (e3[o2 + 1 >>> 2] >>> 24 - (o2 + 1) % 4 * 8 & 255) << 8 | e3[o2 + 2 >>> 2] >>> 24 - (o2 + 2) % 4 * 8 & 255, h2 = 0; h2 < 4 && o2 + 0.75 * h2 < r3; h2++)
        n2.push(i2.charAt(s2 >>> 6 * (3 - h2) & 63));
    var u2 = i2.charAt(64);
    if (u2)
      for (; n2.length % 4; )
        n2.push(u2);
    return n2.join("");
  }, parse: function(t3) {
    var e3 = t3.length, r3 = this._map, n2 = this._reverseMap;
    if (!n2) {
      n2 = this._reverseMap = [];
      for (var o2 = 0; o2 < r3.length; o2++)
        n2[r3.charCodeAt(o2)] = o2;
    }
    var s2 = r3.charAt(64);
    if (s2) {
      var h2 = t3.indexOf(s2);
      -1 !== h2 && (e3 = h2);
    }
    return function(t4, e4, r4) {
      for (var n3 = [], o3 = 0, s3 = 0; s3 < e4; s3++)
        if (s3 % 4) {
          var h3 = r4[t4.charCodeAt(s3 - 1)] << s3 % 4 * 2, u2 = r4[t4.charCodeAt(s3)] >>> 6 - s3 % 4 * 2;
          n3[o3 >>> 2] |= (h3 | u2) << 24 - o3 % 4 * 8, o3++;
        }
      return i.create(n3, o3);
    }(t3, e3, n2);
  }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, r2.enc.Base64);
});
var h = e(function(t2, e2) {
  t2.exports = n.enc.Hex;
});
var u = e(function(e2, r2) {
  (function() {
    var t2;
    function r3(t3, e3, r4) {
      null != t3 && ("number" == typeof t3 ? this.fromNumber(t3, e3, r4) : this.fromString(t3, null == e3 && "string" != typeof t3 ? 256 : e3));
    }
    function i() {
      return new r3(null);
    }
    var n2 = "undefined" != typeof navigator;
    n2 && "Microsoft Internet Explorer" == navigator.appName ? (r3.prototype.am = function(t3, e3, r4, i2, n3, o3) {
      for (var s3 = 32767 & e3, h3 = e3 >> 15; --o3 >= 0; ) {
        var u3 = 32767 & this[t3], a3 = this[t3++] >> 15, f3 = h3 * u3 + a3 * s3;
        n3 = ((u3 = s3 * u3 + ((32767 & f3) << 15) + r4[i2] + (1073741823 & n3)) >>> 30) + (f3 >>> 15) + h3 * a3 + (n3 >>> 30), r4[i2++] = 1073741823 & u3;
      }
      return n3;
    }, t2 = 30) : n2 && "Netscape" != navigator.appName ? (r3.prototype.am = function(t3, e3, r4, i2, n3, o3) {
      for (; --o3 >= 0; ) {
        var s3 = e3 * this[t3++] + r4[i2] + n3;
        n3 = Math.floor(s3 / 67108864), r4[i2++] = 67108863 & s3;
      }
      return n3;
    }, t2 = 26) : (r3.prototype.am = function(t3, e3, r4, i2, n3, o3) {
      for (var s3 = 16383 & e3, h3 = e3 >> 14; --o3 >= 0; ) {
        var u3 = 16383 & this[t3], a3 = this[t3++] >> 14, f3 = h3 * u3 + a3 * s3;
        n3 = ((u3 = s3 * u3 + ((16383 & f3) << 14) + r4[i2] + n3) >> 28) + (f3 >> 14) + h3 * a3, r4[i2++] = 268435455 & u3;
      }
      return n3;
    }, t2 = 28), r3.prototype.DB = t2, r3.prototype.DM = (1 << t2) - 1, r3.prototype.DV = 1 << t2, r3.prototype.FV = Math.pow(2, 52), r3.prototype.F1 = 52 - t2, r3.prototype.F2 = 2 * t2 - 52;
    var o2, s2, h2 = new Array();
    for (o2 = "0".charCodeAt(0), s2 = 0; s2 <= 9; ++s2)
      h2[o2++] = s2;
    for (o2 = "a".charCodeAt(0), s2 = 10; s2 < 36; ++s2)
      h2[o2++] = s2;
    for (o2 = "A".charCodeAt(0), s2 = 10; s2 < 36; ++s2)
      h2[o2++] = s2;
    function u2(t3) {
      return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t3);
    }
    function a2(t3, e3) {
      var r4 = h2[t3.charCodeAt(e3)];
      return null == r4 ? -1 : r4;
    }
    function f2(t3) {
      var e3 = i();
      return e3.fromInt(t3), e3;
    }
    function c2(t3) {
      var e3, r4 = 1;
      return 0 != (e3 = t3 >>> 16) && (t3 = e3, r4 += 16), 0 != (e3 = t3 >> 8) && (t3 = e3, r4 += 8), 0 != (e3 = t3 >> 4) && (t3 = e3, r4 += 4), 0 != (e3 = t3 >> 2) && (t3 = e3, r4 += 2), 0 != (e3 = t3 >> 1) && (t3 = e3, r4 += 1), r4;
    }
    function p(t3) {
      this.m = t3;
    }
    function l(t3) {
      this.m = t3, this.mp = t3.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t3.DB - 15) - 1, this.mt2 = 2 * t3.t;
    }
    function d(t3, e3) {
      return t3 & e3;
    }
    function m(t3, e3) {
      return t3 | e3;
    }
    function v(t3, e3) {
      return t3 ^ e3;
    }
    function y2(t3, e3) {
      return t3 & ~e3;
    }
    function g2(t3) {
      if (0 == t3)
        return -1;
      var e3 = 0;
      return 0 == (65535 & t3) && (t3 >>= 16, e3 += 16), 0 == (255 & t3) && (t3 >>= 8, e3 += 8), 0 == (15 & t3) && (t3 >>= 4, e3 += 4), 0 == (3 & t3) && (t3 >>= 2, e3 += 2), 0 == (1 & t3) && ++e3, e3;
    }
    function w2(t3) {
      for (var e3 = 0; 0 != t3; )
        t3 &= t3 - 1, ++e3;
      return e3;
    }
    function T2() {
    }
    function b2(t3) {
      return t3;
    }
    function _2(t3) {
      this.r2 = i(), this.q3 = i(), r3.ONE.dlShiftTo(2 * t3.t, this.r2), this.mu = this.r2.divide(t3), this.m = t3;
    }
    p.prototype.convert = function(t3) {
      return t3.s < 0 || t3.compareTo(this.m) >= 0 ? t3.mod(this.m) : t3;
    }, p.prototype.revert = function(t3) {
      return t3;
    }, p.prototype.reduce = function(t3) {
      t3.divRemTo(this.m, null, t3);
    }, p.prototype.mulTo = function(t3, e3, r4) {
      t3.multiplyTo(e3, r4), this.reduce(r4);
    }, p.prototype.sqrTo = function(t3, e3) {
      t3.squareTo(e3), this.reduce(e3);
    }, l.prototype.convert = function(t3) {
      var e3 = i();
      return t3.abs().dlShiftTo(this.m.t, e3), e3.divRemTo(this.m, null, e3), t3.s < 0 && e3.compareTo(r3.ZERO) > 0 && this.m.subTo(e3, e3), e3;
    }, l.prototype.revert = function(t3) {
      var e3 = i();
      return t3.copyTo(e3), this.reduce(e3), e3;
    }, l.prototype.reduce = function(t3) {
      for (; t3.t <= this.mt2; )
        t3[t3.t++] = 0;
      for (var e3 = 0; e3 < this.m.t; ++e3) {
        var r4 = 32767 & t3[e3], i2 = r4 * this.mpl + ((r4 * this.mph + (t3[e3] >> 15) * this.mpl & this.um) << 15) & t3.DM;
        for (t3[r4 = e3 + this.m.t] += this.m.am(0, i2, t3, e3, 0, this.m.t); t3[r4] >= t3.DV; )
          t3[r4] -= t3.DV, t3[++r4]++;
      }
      t3.clamp(), t3.drShiftTo(this.m.t, t3), t3.compareTo(this.m) >= 0 && t3.subTo(this.m, t3);
    }, l.prototype.mulTo = function(t3, e3, r4) {
      t3.multiplyTo(e3, r4), this.reduce(r4);
    }, l.prototype.sqrTo = function(t3, e3) {
      t3.squareTo(e3), this.reduce(e3);
    }, r3.prototype.copyTo = function(t3) {
      for (var e3 = this.t - 1; e3 >= 0; --e3)
        t3[e3] = this[e3];
      t3.t = this.t, t3.s = this.s;
    }, r3.prototype.fromInt = function(t3) {
      this.t = 1, this.s = t3 < 0 ? -1 : 0, t3 > 0 ? this[0] = t3 : t3 < -1 ? this[0] = t3 + this.DV : this.t = 0;
    }, r3.prototype.fromString = function(t3, e3) {
      var i2;
      if (16 == e3)
        i2 = 4;
      else if (8 == e3)
        i2 = 3;
      else if (256 == e3)
        i2 = 8;
      else if (2 == e3)
        i2 = 1;
      else if (32 == e3)
        i2 = 5;
      else {
        if (4 != e3)
          return void this.fromRadix(t3, e3);
        i2 = 2;
      }
      this.t = 0, this.s = 0;
      for (var n3 = t3.length, o3 = false, s3 = 0; --n3 >= 0; ) {
        var h3 = 8 == i2 ? 255 & t3[n3] : a2(t3, n3);
        h3 < 0 ? "-" == t3.charAt(n3) && (o3 = true) : (o3 = false, 0 == s3 ? this[this.t++] = h3 : s3 + i2 > this.DB ? (this[this.t - 1] |= (h3 & (1 << this.DB - s3) - 1) << s3, this[this.t++] = h3 >> this.DB - s3) : this[this.t - 1] |= h3 << s3, (s3 += i2) >= this.DB && (s3 -= this.DB));
      }
      8 == i2 && 0 != (128 & t3[0]) && (this.s = -1, s3 > 0 && (this[this.t - 1] |= (1 << this.DB - s3) - 1 << s3)), this.clamp(), o3 && r3.ZERO.subTo(this, this);
    }, r3.prototype.clamp = function() {
      for (var t3 = this.s & this.DM; this.t > 0 && this[this.t - 1] == t3; )
        --this.t;
    }, r3.prototype.dlShiftTo = function(t3, e3) {
      var r4;
      for (r4 = this.t - 1; r4 >= 0; --r4)
        e3[r4 + t3] = this[r4];
      for (r4 = t3 - 1; r4 >= 0; --r4)
        e3[r4] = 0;
      e3.t = this.t + t3, e3.s = this.s;
    }, r3.prototype.drShiftTo = function(t3, e3) {
      for (var r4 = t3; r4 < this.t; ++r4)
        e3[r4 - t3] = this[r4];
      e3.t = Math.max(this.t - t3, 0), e3.s = this.s;
    }, r3.prototype.lShiftTo = function(t3, e3) {
      var r4, i2 = t3 % this.DB, n3 = this.DB - i2, o3 = (1 << n3) - 1, s3 = Math.floor(t3 / this.DB), h3 = this.s << i2 & this.DM;
      for (r4 = this.t - 1; r4 >= 0; --r4)
        e3[r4 + s3 + 1] = this[r4] >> n3 | h3, h3 = (this[r4] & o3) << i2;
      for (r4 = s3 - 1; r4 >= 0; --r4)
        e3[r4] = 0;
      e3[s3] = h3, e3.t = this.t + s3 + 1, e3.s = this.s, e3.clamp();
    }, r3.prototype.rShiftTo = function(t3, e3) {
      e3.s = this.s;
      var r4 = Math.floor(t3 / this.DB);
      if (r4 >= this.t)
        e3.t = 0;
      else {
        var i2 = t3 % this.DB, n3 = this.DB - i2, o3 = (1 << i2) - 1;
        e3[0] = this[r4] >> i2;
        for (var s3 = r4 + 1; s3 < this.t; ++s3)
          e3[s3 - r4 - 1] |= (this[s3] & o3) << n3, e3[s3 - r4] = this[s3] >> i2;
        i2 > 0 && (e3[this.t - r4 - 1] |= (this.s & o3) << n3), e3.t = this.t - r4, e3.clamp();
      }
    }, r3.prototype.subTo = function(t3, e3) {
      for (var r4 = 0, i2 = 0, n3 = Math.min(t3.t, this.t); r4 < n3; )
        i2 += this[r4] - t3[r4], e3[r4++] = i2 & this.DM, i2 >>= this.DB;
      if (t3.t < this.t) {
        for (i2 -= t3.s; r4 < this.t; )
          i2 += this[r4], e3[r4++] = i2 & this.DM, i2 >>= this.DB;
        i2 += this.s;
      } else {
        for (i2 += this.s; r4 < t3.t; )
          i2 -= t3[r4], e3[r4++] = i2 & this.DM, i2 >>= this.DB;
        i2 -= t3.s;
      }
      e3.s = i2 < 0 ? -1 : 0, i2 < -1 ? e3[r4++] = this.DV + i2 : i2 > 0 && (e3[r4++] = i2), e3.t = r4, e3.clamp();
    }, r3.prototype.multiplyTo = function(t3, e3) {
      var i2 = this.abs(), n3 = t3.abs(), o3 = i2.t;
      for (e3.t = o3 + n3.t; --o3 >= 0; )
        e3[o3] = 0;
      for (o3 = 0; o3 < n3.t; ++o3)
        e3[o3 + i2.t] = i2.am(0, n3[o3], e3, o3, 0, i2.t);
      e3.s = 0, e3.clamp(), this.s != t3.s && r3.ZERO.subTo(e3, e3);
    }, r3.prototype.squareTo = function(t3) {
      for (var e3 = this.abs(), r4 = t3.t = 2 * e3.t; --r4 >= 0; )
        t3[r4] = 0;
      for (r4 = 0; r4 < e3.t - 1; ++r4) {
        var i2 = e3.am(r4, e3[r4], t3, 2 * r4, 0, 1);
        (t3[r4 + e3.t] += e3.am(r4 + 1, 2 * e3[r4], t3, 2 * r4 + 1, i2, e3.t - r4 - 1)) >= e3.DV && (t3[r4 + e3.t] -= e3.DV, t3[r4 + e3.t + 1] = 1);
      }
      t3.t > 0 && (t3[t3.t - 1] += e3.am(r4, e3[r4], t3, 2 * r4, 0, 1)), t3.s = 0, t3.clamp();
    }, r3.prototype.divRemTo = function(t3, e3, n3) {
      var o3 = t3.abs();
      if (!(o3.t <= 0)) {
        var s3 = this.abs();
        if (s3.t < o3.t)
          return null != e3 && e3.fromInt(0), void (null != n3 && this.copyTo(n3));
        null == n3 && (n3 = i());
        var h3 = i(), u3 = this.s, a3 = t3.s, f3 = this.DB - c2(o3[o3.t - 1]);
        f3 > 0 ? (o3.lShiftTo(f3, h3), s3.lShiftTo(f3, n3)) : (o3.copyTo(h3), s3.copyTo(n3));
        var p2 = h3.t, l2 = h3[p2 - 1];
        if (0 != l2) {
          var d2 = l2 * (1 << this.F1) + (p2 > 1 ? h3[p2 - 2] >> this.F2 : 0), m2 = this.FV / d2, v2 = (1 << this.F1) / d2, y3 = 1 << this.F2, g3 = n3.t, w3 = g3 - p2, T3 = null == e3 ? i() : e3;
          for (h3.dlShiftTo(w3, T3), n3.compareTo(T3) >= 0 && (n3[n3.t++] = 1, n3.subTo(T3, n3)), r3.ONE.dlShiftTo(p2, T3), T3.subTo(h3, h3); h3.t < p2; )
            h3[h3.t++] = 0;
          for (; --w3 >= 0; ) {
            var b3 = n3[--g3] == l2 ? this.DM : Math.floor(n3[g3] * m2 + (n3[g3 - 1] + y3) * v2);
            if ((n3[g3] += h3.am(0, b3, n3, w3, 0, p2)) < b3)
              for (h3.dlShiftTo(w3, T3), n3.subTo(T3, n3); n3[g3] < --b3; )
                n3.subTo(T3, n3);
          }
          null != e3 && (n3.drShiftTo(p2, e3), u3 != a3 && r3.ZERO.subTo(e3, e3)), n3.t = p2, n3.clamp(), f3 > 0 && n3.rShiftTo(f3, n3), u3 < 0 && r3.ZERO.subTo(n3, n3);
        }
      }
    }, r3.prototype.invDigit = function() {
      if (this.t < 1)
        return 0;
      var t3 = this[0];
      if (0 == (1 & t3))
        return 0;
      var e3 = 3 & t3;
      return (e3 = (e3 = (e3 = (e3 = e3 * (2 - (15 & t3) * e3) & 15) * (2 - (255 & t3) * e3) & 255) * (2 - ((65535 & t3) * e3 & 65535)) & 65535) * (2 - t3 * e3 % this.DV) % this.DV) > 0 ? this.DV - e3 : -e3;
    }, r3.prototype.isEven = function() {
      return 0 == (this.t > 0 ? 1 & this[0] : this.s);
    }, r3.prototype.exp = function(t3, e3) {
      if (t3 > 4294967295 || t3 < 1)
        return r3.ONE;
      var n3 = i(), o3 = i(), s3 = e3.convert(this), h3 = c2(t3) - 1;
      for (s3.copyTo(n3); --h3 >= 0; )
        if (e3.sqrTo(n3, o3), (t3 & 1 << h3) > 0)
          e3.mulTo(o3, s3, n3);
        else {
          var u3 = n3;
          n3 = o3, o3 = u3;
        }
      return e3.revert(n3);
    }, r3.prototype.toString = function(t3) {
      if (this.s < 0)
        return "-" + this.negate().toString(t3);
      var e3;
      if (16 == t3)
        e3 = 4;
      else if (8 == t3)
        e3 = 3;
      else if (2 == t3)
        e3 = 1;
      else if (32 == t3)
        e3 = 5;
      else {
        if (4 != t3)
          return this.toRadix(t3);
        e3 = 2;
      }
      var r4, i2 = (1 << e3) - 1, n3 = false, o3 = "", s3 = this.t, h3 = this.DB - s3 * this.DB % e3;
      if (s3-- > 0)
        for (h3 < this.DB && (r4 = this[s3] >> h3) > 0 && (n3 = true, o3 = u2(r4)); s3 >= 0; )
          h3 < e3 ? (r4 = (this[s3] & (1 << h3) - 1) << e3 - h3, r4 |= this[--s3] >> (h3 += this.DB - e3)) : (r4 = this[s3] >> (h3 -= e3) & i2, h3 <= 0 && (h3 += this.DB, --s3)), r4 > 0 && (n3 = true), n3 && (o3 += u2(r4));
      return n3 ? o3 : "0";
    }, r3.prototype.negate = function() {
      var t3 = i();
      return r3.ZERO.subTo(this, t3), t3;
    }, r3.prototype.abs = function() {
      return this.s < 0 ? this.negate() : this;
    }, r3.prototype.compareTo = function(t3) {
      var e3 = this.s - t3.s;
      if (0 != e3)
        return e3;
      var r4 = this.t;
      if (0 != (e3 = r4 - t3.t))
        return this.s < 0 ? -e3 : e3;
      for (; --r4 >= 0; )
        if (0 != (e3 = this[r4] - t3[r4]))
          return e3;
      return 0;
    }, r3.prototype.bitLength = function() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + c2(this[this.t - 1] ^ this.s & this.DM);
    }, r3.prototype.mod = function(t3) {
      var e3 = i();
      return this.abs().divRemTo(t3, null, e3), this.s < 0 && e3.compareTo(r3.ZERO) > 0 && t3.subTo(e3, e3), e3;
    }, r3.prototype.modPowInt = function(t3, e3) {
      var r4;
      return r4 = t3 < 256 || e3.isEven() ? new p(e3) : new l(e3), this.exp(t3, r4);
    }, r3.ZERO = f2(0), r3.ONE = f2(1), T2.prototype.convert = b2, T2.prototype.revert = b2, T2.prototype.mulTo = function(t3, e3, r4) {
      t3.multiplyTo(e3, r4);
    }, T2.prototype.sqrTo = function(t3, e3) {
      t3.squareTo(e3);
    }, _2.prototype.convert = function(t3) {
      if (t3.s < 0 || t3.t > 2 * this.m.t)
        return t3.mod(this.m);
      if (t3.compareTo(this.m) < 0)
        return t3;
      var e3 = i();
      return t3.copyTo(e3), this.reduce(e3), e3;
    }, _2.prototype.revert = function(t3) {
      return t3;
    }, _2.prototype.reduce = function(t3) {
      for (t3.drShiftTo(this.m.t - 1, this.r2), t3.t > this.m.t + 1 && (t3.t = this.m.t + 1, t3.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t3.compareTo(this.r2) < 0; )
        t3.dAddOffset(1, this.m.t + 1);
      for (t3.subTo(this.r2, t3); t3.compareTo(this.m) >= 0; )
        t3.subTo(this.m, t3);
    }, _2.prototype.mulTo = function(t3, e3, r4) {
      t3.multiplyTo(e3, r4), this.reduce(r4);
    }, _2.prototype.sqrTo = function(t3, e3) {
      t3.squareTo(e3), this.reduce(e3);
    };
    var S2, A2, D2, B2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], x2 = (1 << 26) / B2[B2.length - 1];
    function E2() {
      var t3;
      t3 = (/* @__PURE__ */ new Date()).getTime(), A2[D2++] ^= 255 & t3, A2[D2++] ^= t3 >> 8 & 255, A2[D2++] ^= t3 >> 16 & 255, A2[D2++] ^= t3 >> 24 & 255, D2 >= j && (D2 -= j);
    }
    if (r3.prototype.chunkSize = function(t3) {
      return Math.floor(Math.LN2 * this.DB / Math.log(t3));
    }, r3.prototype.toRadix = function(t3) {
      if (null == t3 && (t3 = 10), 0 == this.signum() || t3 < 2 || t3 > 36)
        return "0";
      var e3 = this.chunkSize(t3), r4 = Math.pow(t3, e3), n3 = f2(r4), o3 = i(), s3 = i(), h3 = "";
      for (this.divRemTo(n3, o3, s3); o3.signum() > 0; )
        h3 = (r4 + s3.intValue()).toString(t3).substr(1) + h3, o3.divRemTo(n3, o3, s3);
      return s3.intValue().toString(t3) + h3;
    }, r3.prototype.fromRadix = function(t3, e3) {
      this.fromInt(0), null == e3 && (e3 = 10);
      for (var i2 = this.chunkSize(e3), n3 = Math.pow(e3, i2), o3 = false, s3 = 0, h3 = 0, u3 = 0; u3 < t3.length; ++u3) {
        var f3 = a2(t3, u3);
        f3 < 0 ? "-" == t3.charAt(u3) && 0 == this.signum() && (o3 = true) : (h3 = e3 * h3 + f3, ++s3 >= i2 && (this.dMultiply(n3), this.dAddOffset(h3, 0), s3 = 0, h3 = 0));
      }
      s3 > 0 && (this.dMultiply(Math.pow(e3, s3)), this.dAddOffset(h3, 0)), o3 && r3.ZERO.subTo(this, this);
    }, r3.prototype.fromNumber = function(t3, e3, i2) {
      if ("number" == typeof e3)
        if (t3 < 2)
          this.fromInt(1);
        else
          for (this.fromNumber(t3, i2), this.testBit(t3 - 1) || this.bitwiseTo(r3.ONE.shiftLeft(t3 - 1), m, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e3); )
            this.dAddOffset(2, 0), this.bitLength() > t3 && this.subTo(r3.ONE.shiftLeft(t3 - 1), this);
      else {
        var n3 = new Array(), o3 = 7 & t3;
        n3.length = 1 + (t3 >> 3), e3.nextBytes(n3), o3 > 0 ? n3[0] &= (1 << o3) - 1 : n3[0] = 0, this.fromString(n3, 256);
      }
    }, r3.prototype.bitwiseTo = function(t3, e3, r4) {
      var i2, n3, o3 = Math.min(t3.t, this.t);
      for (i2 = 0; i2 < o3; ++i2)
        r4[i2] = e3(this[i2], t3[i2]);
      if (t3.t < this.t) {
        for (n3 = t3.s & this.DM, i2 = o3; i2 < this.t; ++i2)
          r4[i2] = e3(this[i2], n3);
        r4.t = this.t;
      } else {
        for (n3 = this.s & this.DM, i2 = o3; i2 < t3.t; ++i2)
          r4[i2] = e3(n3, t3[i2]);
        r4.t = t3.t;
      }
      r4.s = e3(this.s, t3.s), r4.clamp();
    }, r3.prototype.changeBit = function(t3, e3) {
      var i2 = r3.ONE.shiftLeft(t3);
      return this.bitwiseTo(i2, e3, i2), i2;
    }, r3.prototype.addTo = function(t3, e3) {
      for (var r4 = 0, i2 = 0, n3 = Math.min(t3.t, this.t); r4 < n3; )
        i2 += this[r4] + t3[r4], e3[r4++] = i2 & this.DM, i2 >>= this.DB;
      if (t3.t < this.t) {
        for (i2 += t3.s; r4 < this.t; )
          i2 += this[r4], e3[r4++] = i2 & this.DM, i2 >>= this.DB;
        i2 += this.s;
      } else {
        for (i2 += this.s; r4 < t3.t; )
          i2 += t3[r4], e3[r4++] = i2 & this.DM, i2 >>= this.DB;
        i2 += t3.s;
      }
      e3.s = i2 < 0 ? -1 : 0, i2 > 0 ? e3[r4++] = i2 : i2 < -1 && (e3[r4++] = this.DV + i2), e3.t = r4, e3.clamp();
    }, r3.prototype.dMultiply = function(t3) {
      this[this.t] = this.am(0, t3 - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }, r3.prototype.dAddOffset = function(t3, e3) {
      if (0 != t3) {
        for (; this.t <= e3; )
          this[this.t++] = 0;
        for (this[e3] += t3; this[e3] >= this.DV; )
          this[e3] -= this.DV, ++e3 >= this.t && (this[this.t++] = 0), ++this[e3];
      }
    }, r3.prototype.multiplyLowerTo = function(t3, e3, r4) {
      var i2, n3 = Math.min(this.t + t3.t, e3);
      for (r4.s = 0, r4.t = n3; n3 > 0; )
        r4[--n3] = 0;
      for (i2 = r4.t - this.t; n3 < i2; ++n3)
        r4[n3 + this.t] = this.am(0, t3[n3], r4, n3, 0, this.t);
      for (i2 = Math.min(t3.t, e3); n3 < i2; ++n3)
        this.am(0, t3[n3], r4, n3, 0, e3 - n3);
      r4.clamp();
    }, r3.prototype.multiplyUpperTo = function(t3, e3, r4) {
      --e3;
      var i2 = r4.t = this.t + t3.t - e3;
      for (r4.s = 0; --i2 >= 0; )
        r4[i2] = 0;
      for (i2 = Math.max(e3 - this.t, 0); i2 < t3.t; ++i2)
        r4[this.t + i2 - e3] = this.am(e3 - i2, t3[i2], r4, 0, 0, this.t + i2 - e3);
      r4.clamp(), r4.drShiftTo(1, r4);
    }, r3.prototype.modInt = function(t3) {
      if (t3 <= 0)
        return 0;
      var e3 = this.DV % t3, r4 = this.s < 0 ? t3 - 1 : 0;
      if (this.t > 0)
        if (0 == e3)
          r4 = this[0] % t3;
        else
          for (var i2 = this.t - 1; i2 >= 0; --i2)
            r4 = (e3 * r4 + this[i2]) % t3;
      return r4;
    }, r3.prototype.millerRabin = function(t3) {
      var e3 = this.subtract(r3.ONE), n3 = e3.getLowestSetBit();
      if (n3 <= 0)
        return false;
      var o3 = e3.shiftRight(n3);
      (t3 = t3 + 1 >> 1) > B2.length && (t3 = B2.length);
      for (var s3 = i(), h3 = 0; h3 < t3; ++h3) {
        s3.fromInt(B2[Math.floor(Math.random() * B2.length)]);
        var u3 = s3.modPow(o3, this);
        if (0 != u3.compareTo(r3.ONE) && 0 != u3.compareTo(e3)) {
          for (var a3 = 1; a3++ < n3 && 0 != u3.compareTo(e3); )
            if (0 == (u3 = u3.modPowInt(2, this)).compareTo(r3.ONE))
              return false;
          if (0 != u3.compareTo(e3))
            return false;
        }
      }
      return true;
    }, r3.prototype.clone = function() {
      var t3 = i();
      return this.copyTo(t3), t3;
    }, r3.prototype.intValue = function() {
      if (this.s < 0) {
        if (1 == this.t)
          return this[0] - this.DV;
        if (0 == this.t)
          return -1;
      } else {
        if (1 == this.t)
          return this[0];
        if (0 == this.t)
          return 0;
      }
      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }, r3.prototype.byteValue = function() {
      return 0 == this.t ? this.s : this[0] << 24 >> 24;
    }, r3.prototype.shortValue = function() {
      return 0 == this.t ? this.s : this[0] << 16 >> 16;
    }, r3.prototype.signum = function() {
      return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
    }, r3.prototype.toByteArray = function() {
      var t3 = this.t, e3 = new Array();
      e3[0] = this.s;
      var r4, i2 = this.DB - t3 * this.DB % 8, n3 = 0;
      if (t3-- > 0)
        for (i2 < this.DB && (r4 = this[t3] >> i2) != (this.s & this.DM) >> i2 && (e3[n3++] = r4 | this.s << this.DB - i2); t3 >= 0; )
          i2 < 8 ? (r4 = (this[t3] & (1 << i2) - 1) << 8 - i2, r4 |= this[--t3] >> (i2 += this.DB - 8)) : (r4 = this[t3] >> (i2 -= 8) & 255, i2 <= 0 && (i2 += this.DB, --t3)), 0 != (128 & r4) && (r4 |= -256), 0 == n3 && (128 & this.s) != (128 & r4) && ++n3, (n3 > 0 || r4 != this.s) && (e3[n3++] = r4);
      return e3;
    }, r3.prototype.equals = function(t3) {
      return 0 == this.compareTo(t3);
    }, r3.prototype.min = function(t3) {
      return this.compareTo(t3) < 0 ? this : t3;
    }, r3.prototype.max = function(t3) {
      return this.compareTo(t3) > 0 ? this : t3;
    }, r3.prototype.and = function(t3) {
      var e3 = i();
      return this.bitwiseTo(t3, d, e3), e3;
    }, r3.prototype.or = function(t3) {
      var e3 = i();
      return this.bitwiseTo(t3, m, e3), e3;
    }, r3.prototype.xor = function(t3) {
      var e3 = i();
      return this.bitwiseTo(t3, v, e3), e3;
    }, r3.prototype.andNot = function(t3) {
      var e3 = i();
      return this.bitwiseTo(t3, y2, e3), e3;
    }, r3.prototype.not = function() {
      for (var t3 = i(), e3 = 0; e3 < this.t; ++e3)
        t3[e3] = this.DM & ~this[e3];
      return t3.t = this.t, t3.s = ~this.s, t3;
    }, r3.prototype.shiftLeft = function(t3) {
      var e3 = i();
      return t3 < 0 ? this.rShiftTo(-t3, e3) : this.lShiftTo(t3, e3), e3;
    }, r3.prototype.shiftRight = function(t3) {
      var e3 = i();
      return t3 < 0 ? this.lShiftTo(-t3, e3) : this.rShiftTo(t3, e3), e3;
    }, r3.prototype.getLowestSetBit = function() {
      for (var t3 = 0; t3 < this.t; ++t3)
        if (0 != this[t3])
          return t3 * this.DB + g2(this[t3]);
      return this.s < 0 ? this.t * this.DB : -1;
    }, r3.prototype.bitCount = function() {
      for (var t3 = 0, e3 = this.s & this.DM, r4 = 0; r4 < this.t; ++r4)
        t3 += w2(this[r4] ^ e3);
      return t3;
    }, r3.prototype.testBit = function(t3) {
      var e3 = Math.floor(t3 / this.DB);
      return e3 >= this.t ? 0 != this.s : 0 != (this[e3] & 1 << t3 % this.DB);
    }, r3.prototype.setBit = function(t3) {
      return this.changeBit(t3, m);
    }, r3.prototype.clearBit = function(t3) {
      return this.changeBit(t3, y2);
    }, r3.prototype.flipBit = function(t3) {
      return this.changeBit(t3, v);
    }, r3.prototype.add = function(t3) {
      var e3 = i();
      return this.addTo(t3, e3), e3;
    }, r3.prototype.subtract = function(t3) {
      var e3 = i();
      return this.subTo(t3, e3), e3;
    }, r3.prototype.multiply = function(t3) {
      var e3 = i();
      return this.multiplyTo(t3, e3), e3;
    }, r3.prototype.divide = function(t3) {
      var e3 = i();
      return this.divRemTo(t3, e3, null), e3;
    }, r3.prototype.remainder = function(t3) {
      var e3 = i();
      return this.divRemTo(t3, null, e3), e3;
    }, r3.prototype.divideAndRemainder = function(t3) {
      var e3 = i(), r4 = i();
      return this.divRemTo(t3, e3, r4), new Array(e3, r4);
    }, r3.prototype.modPow = function(t3, e3) {
      var r4, n3, o3 = t3.bitLength(), s3 = f2(1);
      if (o3 <= 0)
        return s3;
      r4 = o3 < 18 ? 1 : o3 < 48 ? 3 : o3 < 144 ? 4 : o3 < 768 ? 5 : 6, n3 = o3 < 8 ? new p(e3) : e3.isEven() ? new _2(e3) : new l(e3);
      var h3 = new Array(), u3 = 3, a3 = r4 - 1, d2 = (1 << r4) - 1;
      if (h3[1] = n3.convert(this), r4 > 1) {
        var m2 = i();
        for (n3.sqrTo(h3[1], m2); u3 <= d2; )
          h3[u3] = i(), n3.mulTo(m2, h3[u3 - 2], h3[u3]), u3 += 2;
      }
      var v2, y3, g3 = t3.t - 1, w3 = true, T3 = i();
      for (o3 = c2(t3[g3]) - 1; g3 >= 0; ) {
        for (o3 >= a3 ? v2 = t3[g3] >> o3 - a3 & d2 : (v2 = (t3[g3] & (1 << o3 + 1) - 1) << a3 - o3, g3 > 0 && (v2 |= t3[g3 - 1] >> this.DB + o3 - a3)), u3 = r4; 0 == (1 & v2); )
          v2 >>= 1, --u3;
        if ((o3 -= u3) < 0 && (o3 += this.DB, --g3), w3)
          h3[v2].copyTo(s3), w3 = false;
        else {
          for (; u3 > 1; )
            n3.sqrTo(s3, T3), n3.sqrTo(T3, s3), u3 -= 2;
          u3 > 0 ? n3.sqrTo(s3, T3) : (y3 = s3, s3 = T3, T3 = y3), n3.mulTo(T3, h3[v2], s3);
        }
        for (; g3 >= 0 && 0 == (t3[g3] & 1 << o3); )
          n3.sqrTo(s3, T3), y3 = s3, s3 = T3, T3 = y3, --o3 < 0 && (o3 = this.DB - 1, --g3);
      }
      return n3.revert(s3);
    }, r3.prototype.modInverse = function(t3) {
      var e3 = t3.isEven();
      if (this.isEven() && e3 || 0 == t3.signum())
        return r3.ZERO;
      for (var i2 = t3.clone(), n3 = this.clone(), o3 = f2(1), s3 = f2(0), h3 = f2(0), u3 = f2(1); 0 != i2.signum(); ) {
        for (; i2.isEven(); )
          i2.rShiftTo(1, i2), e3 ? (o3.isEven() && s3.isEven() || (o3.addTo(this, o3), s3.subTo(t3, s3)), o3.rShiftTo(1, o3)) : s3.isEven() || s3.subTo(t3, s3), s3.rShiftTo(1, s3);
        for (; n3.isEven(); )
          n3.rShiftTo(1, n3), e3 ? (h3.isEven() && u3.isEven() || (h3.addTo(this, h3), u3.subTo(t3, u3)), h3.rShiftTo(1, h3)) : u3.isEven() || u3.subTo(t3, u3), u3.rShiftTo(1, u3);
        i2.compareTo(n3) >= 0 ? (i2.subTo(n3, i2), e3 && o3.subTo(h3, o3), s3.subTo(u3, s3)) : (n3.subTo(i2, n3), e3 && h3.subTo(o3, h3), u3.subTo(s3, u3));
      }
      return 0 != n3.compareTo(r3.ONE) ? r3.ZERO : u3.compareTo(t3) >= 0 ? u3.subtract(t3) : u3.signum() < 0 ? (u3.addTo(t3, u3), u3.signum() < 0 ? u3.add(t3) : u3) : u3;
    }, r3.prototype.pow = function(t3) {
      return this.exp(t3, new T2());
    }, r3.prototype.gcd = function(t3) {
      var e3 = this.s < 0 ? this.negate() : this.clone(), r4 = t3.s < 0 ? t3.negate() : t3.clone();
      if (e3.compareTo(r4) < 0) {
        var i2 = e3;
        e3 = r4, r4 = i2;
      }
      var n3 = e3.getLowestSetBit(), o3 = r4.getLowestSetBit();
      if (o3 < 0)
        return e3;
      for (n3 < o3 && (o3 = n3), o3 > 0 && (e3.rShiftTo(o3, e3), r4.rShiftTo(o3, r4)); e3.signum() > 0; )
        (n3 = e3.getLowestSetBit()) > 0 && e3.rShiftTo(n3, e3), (n3 = r4.getLowestSetBit()) > 0 && r4.rShiftTo(n3, r4), e3.compareTo(r4) >= 0 ? (e3.subTo(r4, e3), e3.rShiftTo(1, e3)) : (r4.subTo(e3, r4), r4.rShiftTo(1, r4));
      return o3 > 0 && r4.lShiftTo(o3, r4), r4;
    }, r3.prototype.isProbablePrime = function(t3) {
      var e3, r4 = this.abs();
      if (1 == r4.t && r4[0] <= B2[B2.length - 1]) {
        for (e3 = 0; e3 < B2.length; ++e3)
          if (r4[0] == B2[e3])
            return true;
        return false;
      }
      if (r4.isEven())
        return false;
      for (e3 = 1; e3 < B2.length; ) {
        for (var i2 = B2[e3], n3 = e3 + 1; n3 < B2.length && i2 < x2; )
          i2 *= B2[n3++];
        for (i2 = r4.modInt(i2); e3 < n3; )
          if (i2 % B2[e3++] == 0)
            return false;
      }
      return r4.millerRabin(t3);
    }, r3.prototype.square = function() {
      var t3 = i();
      return this.squareTo(t3), t3;
    }, r3.prototype.Barrett = _2, null == A2) {
      var k2;
      if (A2 = new Array(), D2 = 0, "undefined" != typeof window && window.crypto) {
        if (window.crypto.getRandomValues) {
          var I2 = new Uint8Array(32);
          for (window.crypto.getRandomValues(I2), k2 = 0; k2 < 32; ++k2)
            A2[D2++] = I2[k2];
        } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
          var M = window.crypto.random(32);
          for (k2 = 0; k2 < M.length; ++k2)
            A2[D2++] = 255 & M.charCodeAt(k2);
        }
      }
      for (; D2 < j; )
        k2 = Math.floor(65536 * Math.random()), A2[D2++] = k2 >>> 8, A2[D2++] = 255 & k2;
      D2 = 0, E2();
    }
    function C() {
      if (null == S2) {
        for (E2(), (S2 = new O()).init(A2), D2 = 0; D2 < A2.length; ++D2)
          A2[D2] = 0;
        D2 = 0;
      }
      return S2.next();
    }
    function R() {
    }
    function O() {
      this.i = 0, this.j = 0, this.S = new Array();
    }
    R.prototype.nextBytes = function(t3) {
      var e3;
      for (e3 = 0; e3 < t3.length; ++e3)
        t3[e3] = C();
    }, O.prototype.init = function(t3) {
      var e3, r4, i2;
      for (e3 = 0; e3 < 256; ++e3)
        this.S[e3] = e3;
      for (r4 = 0, e3 = 0; e3 < 256; ++e3)
        i2 = this.S[e3], this.S[e3] = this.S[r4 = r4 + this.S[e3] + t3[e3 % t3.length] & 255], this.S[r4] = i2;
      this.i = 0, this.j = 0;
    }, O.prototype.next = function() {
      var t3;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t3 = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t3, this.S[t3 + this.S[this.i] & 255];
    };
    var j = 256;
    e2.exports = { default: r3, BigInteger: r3, SecureRandom: R };
  }).call(t);
});
var a = { sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", ripemd160: "3021300906052b2403020105000414" };
var f = { sha256: o };
function c(t2, e2) {
  if (this.n = null, this.e = 0, !(null != t2 && null != e2 && t2.length > 0 && e2.length > 0))
    throw new Error("Invalid key data");
  this.n = new u.BigInteger(t2, 16), this.e = parseInt(e2, 16);
}
c.prototype.verify = function(t2, e2) {
  e2 = e2.replace(/[^0-9a-f]|[\s\n]]/gi, "");
  var r2 = new u.BigInteger(e2, 16);
  if (r2.bitLength() > this.n.bitLength())
    throw new Error("Signature does not match with the key modulus.");
  var i = function(t3) {
    for (var e3 in a) {
      var r3 = a[e3], i2 = r3.length;
      if (t3.substring(0, i2) === r3)
        return { alg: e3, hash: t3.substring(i2) };
    }
    return [];
  }(r2.modPowInt(this.e, this.n).toString(16).replace(/^1f+00/, ""));
  if (0 === i.length)
    return false;
  if (!f.hasOwnProperty(i.alg))
    throw new Error("Hashing algorithm is not supported.");
  var n2 = f[i.alg](t2).toString();
  return i.hash === n2;
};
for (p = [], l = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", v = 0; v < 64; ++v)
  p[v] = m[v], l[m.charCodeAt(v)] = v;
var p;
var l;
var d;
var m;
var v;
l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63;
var y = function(t2) {
  var e2, r2, i = function(t3) {
    var e3 = t3.length;
    if (e3 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r3 = t3.indexOf("=");
    return -1 === r3 && (r3 = e3), [r3, r3 === e3 ? 0 : 4 - r3 % 4];
  }(t2), n2 = i[0], o2 = i[1], s2 = new d(function(t3, e3, r3) {
    return 3 * (e3 + r3) / 4 - r3;
  }(0, n2, o2)), h2 = 0, u2 = o2 > 0 ? n2 - 4 : n2;
  for (r2 = 0; r2 < u2; r2 += 4)
    e2 = l[t2.charCodeAt(r2)] << 18 | l[t2.charCodeAt(r2 + 1)] << 12 | l[t2.charCodeAt(r2 + 2)] << 6 | l[t2.charCodeAt(r2 + 3)], s2[h2++] = e2 >> 16 & 255, s2[h2++] = e2 >> 8 & 255, s2[h2++] = 255 & e2;
  return 2 === o2 && (e2 = l[t2.charCodeAt(r2)] << 2 | l[t2.charCodeAt(r2 + 1)] >> 4, s2[h2++] = 255 & e2), 1 === o2 && (e2 = l[t2.charCodeAt(r2)] << 10 | l[t2.charCodeAt(r2 + 1)] << 4 | l[t2.charCodeAt(r2 + 2)] >> 2, s2[h2++] = e2 >> 8 & 255, s2[h2++] = 255 & e2), s2;
};
function g(t2) {
  var e2 = t2.length % 4;
  return 0 === e2 ? t2 : t2 + new Array(4 - e2 + 1).join("=");
}
function w(t2) {
  return t2 = g(t2).replace(/\-/g, "+").replace(/_/g, "/"), decodeURIComponent(function(t3) {
    for (var e2 = "", r2 = 0; r2 < t3.length; r2++)
      e2 += String.fromCharCode(t3[r2]);
    return e2;
  }(y(t2)).split("").map(function(t3) {
    return "%" + ("00" + t3.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function T(t2) {
  return function(t3) {
    for (var e2 = "", r2 = 0; r2 < t3.length; r2++) {
      var i = t3[r2].toString(16);
      e2 += 2 === i.length ? i : "0" + i;
    }
    return e2;
  }(y(g(t2)));
}
var b = e(function(e2) {
  var r2, i;
  r2 = t, i = function() {
    return function() {
      return function(t2) {
        var e3 = [];
        if (0 === t2.length)
          return "";
        if ("string" != typeof t2[0])
          throw new TypeError("Url must be a string. Received " + t2[0]);
        if (t2[0].match(/^[^/:]+:\/*$/) && t2.length > 1) {
          var r3 = t2.shift();
          t2[0] = r3 + t2[0];
        }
        t2[0] = t2[0].match(/^file:\/\/\//) ? t2[0].replace(/^([^/:]+):\/*/, "$1:///") : t2[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var i2 = 0; i2 < t2.length; i2++) {
          var n2 = t2[i2];
          if ("string" != typeof n2)
            throw new TypeError("Url must be a string. Received " + n2);
          "" !== n2 && (i2 > 0 && (n2 = n2.replace(/^[\/]+/, "")), n2 = n2.replace(/[\/]+$/, i2 < t2.length - 1 ? "" : "/"), e3.push(n2));
        }
        var o2 = e3.join("/"), s2 = (o2 = o2.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
        return s2.shift() + (s2.length > 0 ? "?" : "") + s2.join("&");
      }("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments));
    };
  }, e2.exports ? e2.exports = i() : r2.urljoin = i();
});
function _(t2, e2) {
  return e2 = e2 || {}, new Promise(function(r2, i) {
    var n2 = new XMLHttpRequest(), o2 = [], s2 = [], h2 = {}, u2 = function() {
      return { ok: 2 == (n2.status / 100 | 0), statusText: n2.statusText, status: n2.status, url: n2.responseURL, text: function() {
        return Promise.resolve(n2.responseText);
      }, json: function() {
        return Promise.resolve(n2.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([n2.response]));
      }, clone: u2, headers: { keys: function() {
        return o2;
      }, entries: function() {
        return s2;
      }, get: function(t3) {
        return h2[t3.toLowerCase()];
      }, has: function(t3) {
        return t3.toLowerCase() in h2;
      } } };
    };
    for (var a2 in n2.open(e2.method || "get", t2, true), n2.onload = function() {
      n2.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(t3, e3, r3) {
        o2.push(e3 = e3.toLowerCase()), s2.push([e3, r3]), h2[e3] = h2[e3] ? h2[e3] + "," + r3 : r3;
      }), r2(u2());
    }, n2.onerror = i, n2.withCredentials = "include" == e2.credentials, e2.headers)
      n2.setRequestHeader(a2, e2.headers[a2]);
    n2.send(e2.body || null);
  });
}
function S(t2) {
  if (t2.ok)
    return t2.json();
  var e2 = new Error(t2.statusText);
  return e2.response = t2, Promise.reject(e2);
}
function A(t2) {
  this.name = "ConfigurationError", this.message = t2 || "";
}
function D(t2) {
  this.name = "TokenValidationError", this.message = t2 || "";
}
A.prototype = Error.prototype, D.prototype = Error.prototype;
var B = function() {
  function t2() {
  }
  var e2 = t2.prototype;
  return e2.get = function() {
    return null;
  }, e2.has = function() {
    return null;
  }, e2.set = function() {
    return null;
  }, t2;
}();
r.polyfill();
var x = "RS256";
var E = function(t2) {
  return "number" == typeof t2;
};
var k = function() {
  return /* @__PURE__ */ new Date();
};
function I(t2) {
  var e2 = t2 || {};
  if (this.jwksCache = e2.jwksCache || new B(), this.expectedAlg = e2.expectedAlg || "RS256", this.issuer = e2.issuer, this.audience = e2.audience, this.leeway = 0 === e2.leeway ? 0 : e2.leeway || 60, this.jwksURI = e2.jwksURI, this.maxAge = e2.maxAge, this.__clock = "function" == typeof e2.__clock ? e2.__clock : k, this.leeway < 0 || this.leeway > 300)
    throw new A("The leeway should be positive and lower than five minutes.");
  if (x !== this.expectedAlg)
    throw new A('Signature algorithm of "' + this.expectedAlg + '" is not supported. Expected the ID token to be signed with "' + x + '".');
}
function PluginHandler(webAuth, plugins) {
  this.plugins = plugins;
  for (var a2 = 0; a2 < this.plugins.length; a2++) {
    if (this.plugins[a2].version !== version.raw) {
      var pluginName = "";
      throw this.plugins[a2].constructor && this.plugins[a2].constructor.name && (pluginName = this.plugins[a2].constructor.name), new Error("Plugin " + pluginName + " version (" + this.plugins[a2].version + ") is not compatible with the SDK version (" + version.raw + ")");
    }
    this.plugins[a2].setWebAuth(webAuth);
  }
}
I.prototype.verify = function(t2, e2, r2) {
  if (!r2 && e2 && "function" == typeof e2 && (r2 = e2, e2 = void 0), !t2)
    return r2(new D("ID token is required but missing"), null);
  var i = this.decode(t2);
  if (i instanceof Error)
    return r2(new D("ID token could not be decoded"), null);
  var n2 = i.encoded.header + "." + i.encoded.payload, o2 = T(i.encoded.signature), s2 = i.header.alg, h2 = i.header.kid, u2 = i.payload.aud, a2 = i.payload.sub, f2 = i.payload.iss, c2 = i.payload.exp, p = i.payload.nbf, l = i.payload.iat, d = i.payload.azp, m = i.payload.auth_time, v = i.payload.nonce, y2 = this.__clock(), g2 = this;
  if (g2.expectedAlg !== s2)
    return r2(new D('Signature algorithm of "' + s2 + '" is not supported. Expected the ID token to be signed with "' + x + '".'), null);
  this.getRsaVerifier(f2, h2, function(t3, s3) {
    if (t3)
      return r2(t3, null);
    if (!s3.verify(n2, o2))
      return r2(new D("Invalid ID token signature."), null);
    if (!f2 || "string" != typeof f2)
      return r2(new D("Issuer (iss) claim must be a string present in the ID token"), null);
    if (g2.issuer !== f2)
      return r2(new D('Issuer (iss) claim mismatch in the ID token, expected "' + g2.issuer + '", found "' + f2 + '"'), null);
    if (!a2 || "string" != typeof a2)
      return r2(new D("Subject (sub) claim must be a string present in the ID token"), null);
    if (!u2 || "string" != typeof u2 && !Array.isArray(u2))
      return r2(new D("Audience (aud) claim must be a string or array of strings present in the ID token"), null);
    if (Array.isArray(u2) && !u2.includes(g2.audience))
      return r2(new D('Audience (aud) claim mismatch in the ID token; expected "' + g2.audience + '" but was not one of "' + u2.join(", ") + '"'), null);
    if ("string" == typeof u2 && g2.audience !== u2)
      return r2(new D('Audience (aud) claim mismatch in the ID token; expected "' + g2.audience + '" but found "' + u2 + '"'), null);
    if (e2) {
      if (!v || "string" != typeof v)
        return r2(new D("Nonce (nonce) claim must be a string present in the ID token"), null);
      if (v !== e2)
        return r2(new D('Nonce (nonce) claim value mismatch in the ID token; expected "' + e2 + '", found "' + v + '"'), null);
    }
    if (Array.isArray(u2) && u2.length > 1) {
      if (!d || "string" != typeof d)
        return r2(new D("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"), null);
      if (d !== g2.audience)
        return r2(new D('Authorized Party (azp) claim mismatch in the ID token; expected "' + g2.audience + '", found "' + d + '"'), null);
    }
    if (!c2 || !E(c2))
      return r2(new D("Expiration Time (exp) claim must be a number present in the ID token"), null);
    if (!l || !E(l))
      return r2(new D("Issued At (iat) claim must be a number present in the ID token"), null);
    var h3 = c2 + g2.leeway, w2 = /* @__PURE__ */ new Date(0);
    if (w2.setUTCSeconds(h3), y2 > w2)
      return r2(new D('Expiration Time (exp) claim error in the ID token; current time "' + y2 + '" is after expiration time "' + w2 + '"'), null);
    if (p && E(p)) {
      var T2 = p - g2.leeway, b2 = /* @__PURE__ */ new Date(0);
      if (b2.setUTCSeconds(T2), y2 < b2)
        return r2(new D('Not Before Time (nbf) claim error in the ID token; current time "' + y2 + '" is before the not before time "' + b2 + '"'), null);
    }
    if (g2.maxAge) {
      if (!m || !E(m))
        return r2(new D("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"), null);
      var _2 = m + g2.maxAge + g2.leeway, S2 = /* @__PURE__ */ new Date(0);
      if (S2.setUTCSeconds(_2), y2 > S2)
        return r2(new D('Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time "' + y2 + '" is after last auth time at "' + S2 + '"'), null);
    }
    return r2(null, i.payload);
  });
}, I.prototype.getRsaVerifier = function(t2, e2, r2) {
  var i = this, n2 = t2 + e2;
  Promise.resolve(this.jwksCache.has(n2)).then(function(r3) {
    return r3 ? i.jwksCache.get(n2) : (s2 = (o2 = { jwksURI: i.jwksURI, iss: t2, kid: e2 }).jwksURI || b(o2.iss, ".well-known", "jwks.json"), ("undefined" == fetch ? _ : fetch)(s2).then(S).then(function(t3) {
      var e3, r4, i2, n3 = null;
      for (e3 = 0; e3 < t3.keys.length && null === n3; e3++)
        (r4 = t3.keys[e3]).kid === o2.kid && (n3 = r4);
      if (!n3)
        throw new Error('Could not find a public key for Key ID (kid) "' + o2.kid + '"');
      return { modulus: T((i2 = n3).n), exp: T(i2.e) };
    }).catch(function(t3) {
      throw t3;
    }));
    var o2, s2;
  }).then(function(t3) {
    if (!t3 || !t3.modulus || !t3.exp)
      throw new Error("Empty keyInfo in response");
    return Promise.resolve(i.jwksCache.set(n2, t3)).then(function() {
      r2 && r2(null, new c(t3.modulus, t3.exp));
    });
  }).catch(function(t3) {
    r2 && r2(t3);
  });
}, I.prototype.decode = function(t2) {
  var e2, r2, i = t2.split(".");
  if (3 !== i.length)
    return new D("Cannot decode a malformed JWT");
  try {
    e2 = JSON.parse(w(i[0])), r2 = JSON.parse(w(i[1]));
  } catch (t3) {
    return new D("Token header or payload is not valid JSON");
  }
  return { header: e2, payload: r2, encoded: { header: i[0], payload: i[1], signature: i[2] } };
}, I.prototype.validateAccessToken = function(t2, e2, r2, i) {
  if (this.expectedAlg !== e2)
    return i(new D('Signature algorithm of "' + e2 + '" is not supported. Expected "' + this.expectedAlg + '"'));
  var n2, u2 = o(t2), a2 = h.stringify(u2), f2 = a2.substring(0, a2.length / 2), c2 = h.parse(f2), p = s.stringify(c2);
  return i((n2 = { "+": "-", "/": "_", "=": "" }, p.replace(/[+/=]/g, function(t3) {
    return n2[t3];
  }) !== r2 ? new D("Invalid access_token") : null));
}, PluginHandler.prototype.get = function(extensibilityPoint) {
  for (var a2 = 0; a2 < this.plugins.length; a2++)
    if (this.plugins[a2].supports(extensibilityPoint))
      return this.plugins[a2].init();
  return null;
};
var random = { randomString: function(length) {
  var bytes = new Uint8Array(length), result = [], charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~", cryptoObj = windowHelper.getWindow().crypto || windowHelper.getWindow().msCrypto;
  if (!cryptoObj)
    return null;
  for (var random2 = cryptoObj.getRandomValues(bytes), a2 = 0; a2 < random2.length; a2++)
    result.push(charset[random2[a2] % charset.length]);
  return result.join("");
} };
function TransactionManager(options) {
  var transaction = options.transaction || {};
  this.namespace = transaction.namespace || "com.auth0.auth.", this.keyLength = transaction.keyLength || 32, this.stateExpiration = options.stateExpiration ? options.stateExpiration / 60 / 24 : 1 / 48, this.storage = new Storage(options), this.options = options;
}
function IframeHandler(options) {
  if (this.url = options.url, this.callback = options.callback, this.timeout = options.timeout || 6e4, this.timeoutCallback = options.timeoutCallback || null, this.eventListenerType = options.eventListenerType || "message", this.iframe = null, this.timeoutHandle = null, this._destroyTimeout = null, this.transientMessageEventListener = null, this.proxyEventListener = null, this.eventValidator = options.eventValidator || { isValid: function() {
    return true;
  } }, "function" != typeof this.callback)
    throw new Error("options.callback must be a function");
}
function WebMessageHandler(webAuth) {
  this.webAuth = webAuth, this.warn = new Warn(webAuth.baseOptions);
}
function CrossOriginAuthentication(webAuth, options) {
  this.webAuth = webAuth, this.baseOptions = options, this.request = new RequestBuilder(options), this.webMessageHandler = new WebMessageHandler(webAuth), this.storage = new Storage(options);
}
function createKey(origin, coId) {
  return ["co/verifier", encodeURIComponent(origin), encodeURIComponent(coId)].join("/");
}
function Redirect(auth0, options) {
  this.webAuth = auth0, this.baseOptions = options, this.crossOriginAuthentication = new CrossOriginAuthentication(auth0, this.baseOptions), this.warn = new Warn({ disableWarnings: !!options._disableDeprecationWarnings });
}
TransactionManager.prototype.process = function(options) {
  if (!options.responseType)
    throw new Error("responseType is required");
  var lastUsedConnection = options.realm || options.connection, responseTypeIncludesIdToken = -1 !== options.responseType.indexOf("id_token"), transaction = this.generateTransaction(options.appState, options.state, options.nonce, lastUsedConnection, responseTypeIncludesIdToken, options.organization);
  return options.state || (options.state = transaction.state), responseTypeIncludesIdToken && !options.nonce && (options.nonce = transaction.nonce), options;
}, TransactionManager.prototype.generateTransaction = function(appState, state, nonce, lastUsedConnection, generateNonce, organization) {
  if (state = state || random.randomString(this.keyLength), nonce = nonce || (generateNonce ? random.randomString(this.keyLength) : null), !(windowHelper.getWindow().location.host === this.options.domain)) {
    var transactionPayload = { nonce, appState, state, lastUsedConnection };
    organization && (transactionPayload.organization = organization), this.storage.setItem(this.namespace + state, transactionPayload, { expires: this.stateExpiration });
  }
  return { state, nonce };
}, TransactionManager.prototype.getStoredTransaction = function(state) {
  var transactionData;
  return transactionData = this.storage.getItem(this.namespace + state), this.clearTransaction(state), transactionData;
}, TransactionManager.prototype.clearTransaction = function(state) {
  this.storage.removeItem(this.namespace + state);
}, IframeHandler.prototype.init = function() {
  var _this = this, _window = windowHelper.getWindow();
  switch (this.iframe = _window.document.createElement("iframe"), this.iframe.style.display = "none", this.proxyEventListener = function(e2) {
    _this.eventListener(e2);
  }, this.eventListenerType) {
    case "message":
      this.eventSourceObject = _window;
      break;
    case "load":
      this.eventSourceObject = this.iframe;
      break;
    default:
      throw new Error("Unsupported event listener type: " + this.eventListenerType);
  }
  this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, false), _window.document.body.appendChild(this.iframe), this.iframe.src = this.url, this.timeoutHandle = setTimeout(function() {
    _this.timeoutHandler();
  }, this.timeout);
}, IframeHandler.prototype.eventListener = function(event) {
  var eventData = { event, sourceObject: this.eventSourceObject };
  this.eventValidator.isValid(eventData) && (this.destroy(), this.callback(eventData));
}, IframeHandler.prototype.timeoutHandler = function() {
  this.destroy(), this.timeoutCallback && this.timeoutCallback();
}, IframeHandler.prototype.destroy = function() {
  var _this = this;
  clearTimeout(this.timeoutHandle), this._destroyTimeout = setTimeout(function() {
    _this.eventSourceObject.removeEventListener(_this.eventListenerType, _this.proxyEventListener, false), _this.iframe.parentNode && _this.iframe.parentNode.removeChild(_this.iframe);
  }, 0);
}, WebMessageHandler.prototype.run = function(options, cb) {
  var _this = this;
  options.responseMode = "web_message", options.prompt = "none";
  var currentOrigin = windowHelper.getOrigin(), redirectUriOrigin = objectHelper.getOriginFromUrl(options.redirectUri);
  if (redirectUriOrigin && currentOrigin !== redirectUriOrigin)
    return cb({ error: "origin_mismatch", error_description: "The redirectUri's origin (" + redirectUriOrigin + ") should match the window's origin (" + currentOrigin + ")." });
  !function(authorizeUrl, options2, callback) {
    new IframeHandler({ url: authorizeUrl, eventListenerType: "message", callback: function(eventData) {
      callback(null, eventData);
    }, timeout: options2.timeout, eventValidator: { isValid: function(eventData) {
      return !(!eventData.event.data || "authorization_response" !== eventData.event.data.type || options2.state !== eventData.event.data.response.state);
    } }, timeoutCallback: function() {
      callback({ error: "timeout", error_description: "Timeout during executing web_message communication", state: options2.state });
    } }).init();
  }(this.webAuth.client.buildAuthorizeUrl(options), options, function(err, eventData) {
    var error2 = err;
    if (!err && eventData.event.data.response.error && (error2 = eventData.event.data.response), !error2) {
      var parsedHash = eventData.event.data.response;
      return _this.webAuth.validateAuthenticationResponse(options, parsedHash, cb);
    }
    return "consent_required" === error2.error && "localhost" === windowHelper.getWindow().location.hostname && _this.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"), _this.webAuth.transactionManager.clearTransaction(error2.state), cb(objectHelper.pick(error2, ["error", "error_description"]));
  });
}, CrossOriginAuthentication.prototype.login = function(options, cb) {
  var _this = this, url = urlJoin(this.baseOptions.rootUrl, "/co/authenticate");
  options.username = options.username || options.email, delete options.email;
  var authenticateBody = { client_id: options.clientID || this.baseOptions.clientID, username: options.username };
  options.password && (authenticateBody.password = options.password), options.otp && (authenticateBody.otp = options.otp);
  var realm = options.realm || this.baseOptions.realm;
  if (realm) {
    var credentialType = options.credentialType || this.baseOptions.credentialType || "http://auth0.com/oauth/grant-type/password-realm";
    authenticateBody.realm = realm, authenticateBody.credential_type = credentialType;
  } else
    authenticateBody.credential_type = "password";
  this.request.post(url).withCredentials().send(authenticateBody).end(function(err, data) {
    if (err) {
      var errorObject = err.response && err.response.body || { error: "request_error", error_description: JSON.stringify(err) };
      return wrapCallback(cb, { forceLegacyError: true })(errorObject);
    }
    function doAuth() {
      var popupMode = true === options.popup;
      options = objectHelper.blacklist(options, ["password", "credentialType", "otp", "popup", "onRedirecting"]);
      var authorizeOptions = objectHelper.merge(options).with({ loginTicket: data.body.login_ticket }), key = createKey(_this.baseOptions.rootUrl, data.body.co_id);
      _this.storage.setItem(key, data.body.co_verifier, { expires: 1 / 96 }), popupMode ? _this.webMessageHandler.run(authorizeOptions, wrapCallback(cb, { forceLegacyError: true })) : _this.webAuth.authorize(authorizeOptions);
    }
    "function" == typeof options.onRedirecting ? options.onRedirecting(doAuth) : doAuth();
  });
}, CrossOriginAuthentication.prototype.callback = function() {
  var targetOrigin = decodeURIComponent(function(name) {
    var parts = ("&" + windowHelper.getWindow().location.hash.substring(1)).split("&" + name + "=");
    if (2 === parts.length)
      return parts.pop().split("&").shift();
  }("origin")), theWindow = windowHelper.getWindow(), _this = this;
  theWindow.addEventListener("message", function(evt) {
    if ("co_verifier_request" === evt.data.type) {
      var key = createKey(evt.origin, evt.data.request.id), verifier = function(storage, key2) {
        try {
          var verifier2 = storage.getItem(key2);
          return storage.removeItem(key2), verifier2 || "";
        } catch (e2) {
          return "";
        }
      }(_this.storage, key);
      evt.source.postMessage({ type: "co_verifier_response", response: { verifier } }, evt.origin);
    }
  }), theWindow.parent.postMessage({ type: "ready" }, targetOrigin);
}, Redirect.prototype.loginWithCredentials = function(options, cb) {
  options.realm = options.realm || options.connection, delete options.connection, this.crossOriginAuthentication.login(options, cb);
}, Redirect.prototype.signupAndLogin = function(options, cb) {
  var _this = this;
  return this.webAuth.client.dbConnection.signup(options, function(err) {
    return err ? cb(err) : (options.realm = options.realm || options.connection, delete options.connection, _this.webAuth.login(options, cb));
  });
};
var winchan = createCommonjsModule(function(module) {
  var WinChan = function() {
    function addListener(w2, event, cb) {
      w2.attachEvent ? w2.attachEvent("on" + event, cb) : w2.addEventListener && w2.addEventListener(event, cb, false);
    }
    function removeListener(w2, event, cb) {
      w2.detachEvent ? w2.detachEvent("on" + event, cb) : w2.removeEventListener && w2.removeEventListener(event, cb, false);
    }
    function extractOrigin(url) {
      /^https?:\/\//.test(url) || (url = window.location.href);
      var m = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(url);
      return m ? m[1] : url;
    }
    var isIE = function() {
      if ("undefined" == typeof navigator)
        return false;
      var rv = -1, ua = navigator.userAgent;
      if ("Microsoft Internet Explorer" === navigator.appName)
        null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(ua) && (rv = parseFloat(RegExp.$1));
      else if (ua.indexOf("Trident") > -1) {
        null !== new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(ua) && (rv = parseFloat(RegExp.$1));
      }
      return rv >= 8;
    }();
    return "undefined" != typeof window && window.JSON && window.JSON.stringify && window.JSON.parse && window.postMessage ? { open: function(opts, cb) {
      if (!cb)
        throw "missing required callback argument";
      var err, iframe;
      opts.url || (err = "missing required 'url' parameter"), opts.relay_url || (err = "missing required 'relay_url' parameter"), err && setTimeout(function() {
        cb(err);
      }, 0), opts.window_name || (opts.window_name = null), opts.window_features && !function() {
        try {
          var userAgent = navigator.userAgent;
          return -1 != userAgent.indexOf("Fennec/") || -1 != userAgent.indexOf("Firefox/") && -1 != userAgent.indexOf("Android");
        } catch (e2) {
        }
        return false;
      }() || (opts.window_features = void 0);
      var messageTarget, origin = opts.origin || extractOrigin(opts.url);
      if (origin !== extractOrigin(opts.relay_url))
        return setTimeout(function() {
          cb("invalid arguments: origin of url and relay_url must match");
        }, 0);
      isIE && ((iframe = document.createElement("iframe")).setAttribute("src", opts.relay_url), iframe.style.display = "none", iframe.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(iframe), messageTarget = iframe.contentWindow);
      var w2 = opts.popup || window.open(opts.url, opts.window_name, opts.window_features);
      opts.popup && (w2.location.href = opts.url), messageTarget || (messageTarget = w2);
      var closeInterval = setInterval(function() {
        w2 && w2.closed && (cleanup(), cb && (cb("User closed the popup window"), cb = null));
      }, 500), req = JSON.stringify({ a: "request", d: opts.params });
      function cleanup() {
        if (iframe && document.body.removeChild(iframe), iframe = void 0, closeInterval && (closeInterval = clearInterval(closeInterval)), removeListener(window, "message", onMessage), removeListener(window, "unload", cleanup), w2)
          try {
            w2.close();
          } catch (securityViolation) {
            messageTarget.postMessage("die", origin);
          }
        w2 = messageTarget = void 0;
      }
      function onMessage(e2) {
        if (e2.origin === origin) {
          try {
            var d = JSON.parse(e2.data);
          } catch (err2) {
            if (cb)
              return cb(err2);
            throw err2;
          }
          "ready" === d.a ? messageTarget.postMessage(req, origin) : "error" === d.a ? (cleanup(), cb && (cb(d.d), cb = null)) : "response" === d.a && (cleanup(), cb && (cb(null, d.d), cb = null));
        }
      }
      return addListener(window, "unload", cleanup), addListener(window, "message", onMessage), { originalPopup: w2, close: cleanup, focus: function() {
        if (w2)
          try {
            w2.focus();
          } catch (e2) {
          }
      } };
    }, onOpen: function(cb) {
      var o2 = "*", msgTarget = isIE ? function() {
        for (var frames = window.opener.frames, i = frames.length - 1; i >= 0; i--)
          try {
            if (frames[i].location.protocol === window.location.protocol && frames[i].location.host === window.location.host && "__winchan_relay_frame" === frames[i].name)
              return frames[i];
          } catch (e2) {
          }
      }() : window.opener;
      if (!msgTarget)
        throw "can't find relay frame";
      function doPost(msg) {
        msg = JSON.stringify(msg), isIE ? msgTarget.doPost(msg, o2) : msgTarget.postMessage(msg, o2);
      }
      function onDie(e2) {
        if ("die" === e2.data)
          try {
            window.close();
          } catch (o_O) {
          }
      }
      addListener(isIE ? msgTarget : window, "message", function onMessage(e2) {
        var d;
        try {
          d = JSON.parse(e2.data);
        } catch (err) {
        }
        d && "request" === d.a && (removeListener(window, "message", onMessage), o2 = e2.origin, cb && setTimeout(function() {
          cb(o2, d.d, function(r2) {
            cb = void 0, doPost({ a: "response", d: r2 });
          });
        }, 0));
      }), addListener(isIE ? msgTarget : window, "message", onDie);
      try {
        doPost({ a: "ready" });
      } catch (e2) {
        addListener(msgTarget, "load", function(e3) {
          doPost({ a: "ready" });
        });
      }
      var onUnload = function() {
        try {
          removeListener(isIE ? msgTarget : window, "message", onDie);
        } catch (ohWell) {
        }
        cb && doPost({ a: "error", d: "client closed window" }), cb = void 0;
        try {
          window.close();
        } catch (e2) {
        }
      };
      return addListener(window, "unload", onUnload), { detach: function() {
        removeListener(window, "unload", onUnload);
      } };
    } } : { open: function(url, winopts, arg, cb) {
      setTimeout(function() {
        cb("unsupported browser");
      }, 0);
    }, onOpen: function(cb) {
      setTimeout(function() {
        cb("unsupported browser");
      }, 0);
    } };
  }();
  module.exports && (module.exports = WinChan);
});
var urlHelper = { extractOrigin: function(url) {
  /^https?:\/\//.test(url) || (url = window.location.href);
  var m = /^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(url);
  return m ? m[1] : url;
} };
function PopupHandler() {
  this._current_popup = null;
}
function Popup(webAuth, options) {
  this.baseOptions = options, this.baseOptions.popupOrigin = options.popupOrigin, this.client = webAuth.client, this.webAuth = webAuth, this.transactionManager = new TransactionManager(this.baseOptions), this.crossOriginAuthentication = new CrossOriginAuthentication(webAuth, this.baseOptions), this.warn = new Warn({ disableWarnings: !!options._disableDeprecationWarnings });
}
function SilentAuthenticationHandler(options) {
  this.authenticationUrl = options.authenticationUrl, this.timeout = options.timeout || 6e4, this.handler = null, this.postMessageDataType = options.postMessageDataType || false, this.postMessageOrigin = options.postMessageOrigin || windowHelper.getWindow().location.origin || windowHelper.getWindow().location.protocol + "//" + windowHelper.getWindow().location.hostname + (windowHelper.getWindow().location.port ? ":" + windowHelper.getWindow().location.port : "");
}
function UsernamePassword(options) {
  this.baseOptions = options, this.request = new RequestBuilder(options), this.transactionManager = new TransactionManager(this.baseOptions);
}
function HostedPages(client, options) {
  this.baseOptions = options, this.client = client, this.baseOptions.universalLoginPage = true, this.request = new RequestBuilder(this.baseOptions), this.warn = new Warn({ disableWarnings: !!options._disableDeprecationWarnings });
}
PopupHandler.prototype.calculatePosition = function(options) {
  var width = options.width || 500, height = options.height || 600, _window = windowHelper.getWindow(), screenX = void 0 !== _window.screenX ? _window.screenX : _window.screenLeft, screenY = void 0 !== _window.screenY ? _window.screenY : _window.screenTop, outerWidth = void 0 !== _window.outerWidth ? _window.outerWidth : _window.document.body.clientWidth, outerHeight = void 0 !== _window.outerHeight ? _window.outerHeight : _window.document.body.clientHeight;
  return { width, height, left: options.left || screenX + (outerWidth - width) / 2, top: options.top || screenY + (outerHeight - height) / 2 };
}, PopupHandler.prototype.preload = function(options) {
  var _this = this, _window = windowHelper.getWindow(), popupPosition = this.calculatePosition(options.popupOptions || {}), popupOptions = objectHelper.merge(popupPosition).with(options.popupOptions), url = options.url || "about:blank", windowFeatures = lib.stringify(popupOptions, { encode: false, delimiter: "," });
  return this._current_popup && !this._current_popup.closed || (this._current_popup = _window.open(url, "auth0_signup_popup", windowFeatures), this._current_popup.kill = function() {
    this.close(), _this._current_popup = null;
  }), this._current_popup;
}, PopupHandler.prototype.load = function(url, relayUrl, options, cb) {
  var _this = this, popupPosition = this.calculatePosition(options.popupOptions || {}), popupOptions = objectHelper.merge(popupPosition).with(options.popupOptions), winchanOptions = objectHelper.merge({ url, relay_url: relayUrl, window_features: lib.stringify(popupOptions, { delimiter: ",", encode: false }), popup: this._current_popup }).with(options), popup = winchan.open(winchanOptions, function(err, data) {
    if (!err || "SyntaxError" !== err.name)
      return _this._current_popup = null, cb(err, data);
  });
  return popup.focus(), popup;
}, Popup.prototype.buildPopupHandler = function() {
  var pluginHandler = this.baseOptions.plugins.get("popup.getPopupHandler");
  return pluginHandler ? pluginHandler.getPopupHandler() : new PopupHandler();
}, Popup.prototype.preload = function(options) {
  options = options || {};
  var popup = this.buildPopupHandler();
  return popup.preload(options), popup;
}, Popup.prototype.getPopupHandler = function(options, preload) {
  return options.popupHandler ? options.popupHandler : preload ? this.preload(options) : this.buildPopupHandler();
}, Popup.prototype.callback = function(options) {
  var _this = this, theWindow = windowHelper.getWindow(), originUrl = (options = options || {}).popupOrigin || this.baseOptions.popupOrigin || windowHelper.getOrigin();
  theWindow.opener ? winchan.onOpen(function(popupOrigin, r2, cb) {
    if (popupOrigin !== originUrl)
      return cb({ error: "origin_mismatch", error_description: "The popup's origin (" + popupOrigin + ") should match the `popupOrigin` parameter (" + originUrl + ")." });
    _this.webAuth.parseHash(options || {}, function(err, data) {
      return cb(err || data);
    });
  }) : theWindow.doPost = function(msg) {
    theWindow.parent && theWindow.parent.postMessage(msg, originUrl);
  };
}, Popup.prototype.authorize = function(options, cb) {
  var url, relayUrl, popOpts = {}, pluginHandler = this.baseOptions.plugins.get("popup.authorize"), params = objectHelper.merge(this.baseOptions, ["clientID", "scope", "domain", "audience", "tenant", "responseType", "redirectUri", "_csrf", "state", "_intstate", "nonce", "organization", "invitation"]).with(objectHelper.blacklist(options, ["popupHandler"]));
  return assert.check(params, { type: "object", message: "options parameter is not valid" }, { responseType: { type: "string", message: "responseType option is required" } }), relayUrl = urlJoin(this.baseOptions.rootUrl, "relay.html"), options.owp ? params.owp = true : (popOpts.origin = urlHelper.extractOrigin(params.redirectUri), relayUrl = params.redirectUri), options.popupOptions && (popOpts.popupOptions = objectHelper.pick(options.popupOptions, ["width", "height", "top", "left"])), pluginHandler && (params = pluginHandler.processParams(params)), (params = this.transactionManager.process(params)).scope = params.scope || "openid profile email", delete params.domain, url = this.client.buildAuthorizeUrl(params), this.getPopupHandler(options).load(url, relayUrl, popOpts, wrapCallback(cb, { keepOriginalCasing: true }));
}, Popup.prototype.loginWithCredentials = function(options, cb) {
  options.realm = options.realm || options.connection, options.popup = true, options = objectHelper.merge(this.baseOptions, ["redirectUri", "responseType", "state", "nonce", "timeout"]).with(objectHelper.blacklist(options, ["popupHandler", "connection"])), options = this.transactionManager.process(options), this.crossOriginAuthentication.login(options, cb);
}, Popup.prototype.passwordlessVerify = function(options, cb) {
  var _this = this;
  return this.client.passwordless.verify(objectHelper.blacklist(options, ["popupHandler"]), function(err) {
    if (err)
      return cb(err);
    options.username = options.phoneNumber || options.email, options.password = options.verificationCode, delete options.email, delete options.phoneNumber, delete options.verificationCode, delete options.type, _this.client.loginWithResourceOwner(options, cb);
  });
}, Popup.prototype.signupAndLogin = function(options, cb) {
  var _this = this;
  return this.client.dbConnection.signup(options, function(err) {
    if (err)
      return cb(err);
    _this.loginWithCredentials(options, cb);
  });
}, SilentAuthenticationHandler.create = function(options) {
  return new SilentAuthenticationHandler(options);
}, SilentAuthenticationHandler.prototype.login = function(usePostMessage, callback) {
  this.handler = new IframeHandler({ auth0: this.auth0, url: this.authenticationUrl, eventListenerType: usePostMessage ? "message" : "load", callback: this.getCallbackHandler(callback, usePostMessage), timeout: this.timeout, eventValidator: this.getEventValidator(), timeoutCallback: function() {
    callback(null, "#error=timeout&error_description=Timeout+during+authentication+renew.");
  }, usePostMessage: usePostMessage || false }), this.handler.init();
}, SilentAuthenticationHandler.prototype.getEventValidator = function() {
  var _this = this;
  return { isValid: function(eventData) {
    switch (eventData.event.type) {
      case "message":
        return eventData.event.origin === _this.postMessageOrigin && eventData.event.source === _this.handler.iframe.contentWindow && (false === _this.postMessageDataType || eventData.event.data.type && eventData.event.data.type === _this.postMessageDataType);
      case "load":
        if ("about:" === eventData.sourceObject.contentWindow.location.protocol)
          return false;
      default:
        return true;
    }
  } };
}, SilentAuthenticationHandler.prototype.getCallbackHandler = function(callback, usePostMessage) {
  return function(eventData) {
    var callbackValue;
    callbackValue = usePostMessage ? "object" == typeof eventData.event.data && eventData.event.data.hash ? eventData.event.data.hash : eventData.event.data : eventData.sourceObject.contentWindow.location.hash, callback(null, callbackValue);
  };
}, UsernamePassword.prototype.login = function(options, cb) {
  var url, body;
  return url = urlJoin(this.baseOptions.rootUrl, "usernamepassword", "login"), options.username = options.username || options.email, options = objectHelper.blacklist(options, ["email", "onRedirecting"]), body = objectHelper.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience"]).with(options), body = this.transactionManager.process(body), body = objectHelper.toSnakeCase(body, ["auth0Client"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, UsernamePassword.prototype.callback = function(formHtml) {
  var div, _document = windowHelper.getDocument();
  (div = _document.createElement("div")).innerHTML = formHtml, _document.body.appendChild(div).children[0].submit();
}, HostedPages.prototype.login = function(options, cb) {
  if (windowHelper.getWindow().location.host !== this.baseOptions.domain)
    throw new Error("This method is meant to be used only inside the Universal Login Page.");
  var usernamePassword, params = objectHelper.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(options);
  return assert.check(params, { type: "object", message: "options parameter is not valid" }, { responseType: { type: "string", message: "responseType option is required" } }), (usernamePassword = new UsernamePassword(this.baseOptions)).login(params, function(err, data) {
    if (err)
      return cb(err);
    function doAuth() {
      usernamePassword.callback(data);
    }
    if ("function" == typeof options.onRedirecting)
      return options.onRedirecting(function() {
        doAuth();
      });
    doAuth();
  });
}, HostedPages.prototype.signupAndLogin = function(options, cb) {
  var _this = this;
  return _this.client.client.dbConnection.signup(options, function(err) {
    return err ? cb(err) : _this.login(options, cb);
  });
}, HostedPages.prototype.getSSOData = function(withActiveDirectories, cb) {
  var url, params = "";
  return "function" == typeof withActiveDirectories && (cb = withActiveDirectories, withActiveDirectories = false), assert.check(withActiveDirectories, { type: "boolean", message: "withActiveDirectories parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), withActiveDirectories && (params = "?" + lib.stringify({ ldaps: 1, client_id: this.baseOptions.clientID })), url = urlJoin(this.baseOptions.rootUrl, "user", "ssodata", params), this.request.get(url, { noHeaders: true }).withCredentials().end(wrapCallback(cb));
};
var noop = function() {
};
var captchaSolved = noop;
var defaults$2 = { lang: "en", templates: { auth0: function(challenge) {
  var message = "code" === challenge.type ? "Enter the code shown above" : "Solve the formula shown above";
  return '<div class="captcha-challenge">\n  <img src="' + challenge.image + '" />\n  <button type="button" class="captcha-reload">↺</button>\n</div>\n<input type="text" name="captcha"\n  class="form-control captcha-control"\n  placeholder="' + message + '" />';
}, recaptcha_v2: function() {
  return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />';
}, recaptcha_enterprise: function() {
  return '<div class="recaptcha" ></div><input type="hidden" name="captcha" />';
}, hcaptcha: function() {
  return '<div class="hcaptcha" ></div><input type="hidden" name="captcha" />';
}, friendly_captcha: function() {
  return '<div class="friendly-captcha" ></div><input type="hidden" name="captcha" />';
}, arkose: function() {
  return '<div class="arkose" ></div><input type="hidden" name="captcha" />';
}, auth0_v2: function() {
  return '<div class="auth0_v2" ></div><input type="hidden" name="captcha" />';
}, error: function() {
  return '<div class="error" style="color: red;">Error getting the bot detection challenge. Please contact the system administrator.</div>';
} } };
function handleAuth0Provider(element, options, challenge, load) {
  element.innerHTML = options.templates[challenge.provider](challenge), element.querySelector(".captcha-reload").addEventListener("click", function(e2) {
    e2.preventDefault(), load();
  });
}
function globalForCaptchaProvider(provider) {
  switch (provider) {
    case "recaptcha_v2":
      return window.grecaptcha;
    case "recaptcha_enterprise":
      return window.grecaptcha.enterprise;
    case "hcaptcha":
      return window.hcaptcha;
    case "friendly_captcha":
      return window.friendlyChallenge;
    case "arkose":
      return window.arkose;
    case "auth0_v2":
      return window.turnstile;
    default:
      throw new Error("Unknown captcha provider");
  }
}
function loadScript(url, attributes) {
  var script = window.document.createElement("script");
  for (var attr in attributes)
    attr.startsWith("data-") ? script.dataset[attr.replace("data-", "")] = attributes[attr] : script[attr] = attributes[attr];
  script.src = url, window.document.body.appendChild(script);
}
function removeScript(url) {
  window.document.querySelectorAll('script[src="' + url + '"]').forEach(function(script) {
    script.remove();
  });
}
function injectCaptchaScript(element, opts, callback, setValue) {
  var callbackName = opts.provider + "Callback_" + Math.floor(1000001 * Math.random()), attributes = { async: true, defer: true }, scriptSrc = function(provider, lang, callback2, clientSubdomain, siteKey) {
    switch (provider) {
      case "recaptcha_v2":
        return "https://www.recaptcha.net/recaptcha/api.js?hl=" + lang + "&onload=" + callback2;
      case "recaptcha_enterprise":
        return "https://www.recaptcha.net/recaptcha/enterprise.js?render=explicit&hl=" + lang + "&onload=" + callback2;
      case "hcaptcha":
        return "https://js.hcaptcha.com/1/api.js?hl=" + lang + "&onload=" + callback2;
      case "friendly_captcha":
        return "https://cdn.jsdelivr.net/npm/friendly-challenge@0.9.12/widget.min.js";
      case "arkose":
        return "https://" + clientSubdomain + ".arkoselabs.com/v2/" + siteKey + "/api.js";
      case "auth0_v2":
        return "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=" + callback2;
      default:
        throw new Error("Unknown captcha provider");
    }
  }(opts.provider, opts.lang, callbackName, opts.clientSubdomain, opts.siteKey);
  if ("arkose" === opts.provider || "auth0_v2" === opts.provider) {
    var retryCount = 0;
    attributes["data-callback"] = callbackName, attributes.onerror = function() {
      if (retryCount < 3)
        return removeScript(scriptSrc), loadScript(scriptSrc, attributes), void retryCount++;
      removeScript(scriptSrc), setValue("BYPASS_CAPTCHA");
    }, window[callbackName] = function(arkose) {
      window.arkose = arkose, callback(arkose);
    };
  } else
    window[callbackName] = function() {
      delete window[callbackName], callback();
    }, "friendly_captcha" === opts.provider && (attributes.onload = window[callbackName]);
  loadScript(scriptSrc, attributes);
}
function handleCaptchaProvider(element, options, challenge) {
  var captchaClass, widgetId = element.hasAttribute("data-wid") && element.getAttribute("data-wid");
  function setValue(value2) {
    element.querySelector('input[name="captcha"]').value = value2 || "";
  }
  if ("friendly_captcha" === challenge.provider && window.auth0FCInstance)
    return setValue(), void window.auth0FCInstance.reset();
  if ("arkose" === challenge.provider && globalForCaptchaProvider(challenge.provider))
    return setValue(), void globalForCaptchaProvider(challenge.provider).reset();
  if (widgetId)
    return setValue(), void globalForCaptchaProvider(challenge.provider).reset(widgetId);
  switch (element.innerHTML = options.templates[challenge.provider](challenge), challenge.provider) {
    case "recaptcha_enterprise":
    case "recaptcha_v2":
      captchaClass = ".recaptcha";
      break;
    case "hcaptcha":
      captchaClass = ".hcaptcha";
      break;
    case "friendly_captcha":
      captchaClass = ".friendly-captcha";
      break;
    case "arkose":
      captchaClass = ".arkose";
      break;
    case "auth0_v2":
      captchaClass = ".auth0_v2";
  }
  var captchaDiv = element.querySelector(captchaClass);
  injectCaptchaScript(0, { lang: options.lang, provider: challenge.provider, clientSubdomain: challenge.clientSubdomain, siteKey: challenge.siteKey }, function(arkose) {
    var global2 = globalForCaptchaProvider(challenge.provider);
    if ("arkose" === challenge.provider) {
      var retryCount = 0;
      arkose.setConfig({ onCompleted: function(response) {
        setValue(response.token), captchaSolved();
      }, onError: function() {
        retryCount < 3 ? (setValue(), arkose.reset(), setTimeout(function() {
          arkose.run();
        }, 500), retryCount++) : setValue("BYPASS_CAPTCHA");
      } });
    } else if ("friendly_captcha" === challenge.provider)
      window.auth0FCInstance = new global2.WidgetInstance(captchaDiv, { sitekey: challenge.siteKey, language: options.lang, doneCallback: function(solution) {
        setValue(solution);
      }, errorCallback: function() {
        setValue();
      } });
    else {
      var renderParams = { callback: setValue, "expired-callback": function() {
        setValue();
      }, "error-callback": function() {
        setValue();
      }, sitekey: challenge.siteKey };
      "auth0_v2" === challenge.provider && (retryCount = 0, renderParams.language = options.lang, renderParams.theme = "light", renderParams.retry = "never", renderParams["response-field"] = false, renderParams["error-callback"] = function() {
        return retryCount < 3 ? (setValue(), globalForCaptchaProvider(challenge.provider).reset(widgetId), retryCount++) : setValue("BYPASS_CAPTCHA"), true;
      }), widgetId = global2.render(captchaDiv, renderParams), element.setAttribute("data-wid", widgetId);
    }
  }, setValue);
}
var captcha = { render: function(auth0Client, element, options, callback) {
  function load(done) {
    done = done || noop, auth0Client.getChallenge(function(err, challenge) {
      return err ? (element.innerHTML = options.templates.error(err), done(err)) : challenge.required ? (element.style.display = "", "auth0" === challenge.provider ? handleAuth0Provider(element, options, challenge, load) : "recaptcha_v2" !== challenge.provider && "recaptcha_enterprise" !== challenge.provider && "hcaptcha" !== challenge.provider && "friendly_captcha" !== challenge.provider && "arkose" !== challenge.provider && "auth0_v2" !== challenge.provider || handleCaptchaProvider(element, options, challenge), void ("arkose" === challenge.provider ? done(null, { triggerCaptcha: function(solvedCallback) {
        globalForCaptchaProvider(challenge.provider).run(), captchaSolved = solvedCallback;
      } }) : done())) : (element.style.display = "none", void (element.innerHTML = ""));
    });
  }
  return options = objectHelper.merge(defaults$2).with(options || {}), load(callback), { reload: load, getValue: function() {
    var captchaInput = element.querySelector('input[name="captcha"]');
    if (captchaInput)
      return captchaInput.value;
  } };
}, renderPasswordless: function(auth0Client, element, options, callback) {
  function load(done) {
    done = done || noop, auth0Client.passwordless.getChallenge(function(err, challenge) {
      return err ? (element.innerHTML = options.templates.error(err), done(err)) : challenge.required ? (element.style.display = "", "auth0" === challenge.provider ? handleAuth0Provider(element, options, challenge, load) : "recaptcha_v2" !== challenge.provider && "recaptcha_enterprise" !== challenge.provider && "hcaptcha" !== challenge.provider && "friendly_captcha" !== challenge.provider && "arkose" !== challenge.provider && "auth0_v2" !== challenge.provider || handleCaptchaProvider(element, options, challenge), void ("arkose" === challenge.provider ? done(null, { triggerCaptcha: function(solvedCallback) {
        globalForCaptchaProvider(challenge.provider).run(), captchaSolved = solvedCallback;
      } }) : done())) : (element.style.display = "none", void (element.innerHTML = ""));
    });
  }
  return options = objectHelper.merge(defaults$2).with(options || {}), load(callback), { reload: load, getValue: function() {
    var captchaInput = element.querySelector('input[name="captcha"]');
    if (captchaInput)
      return captchaInput.value;
  } };
} };
function defaultClock() {
  return /* @__PURE__ */ new Date();
}
function WebAuth(options) {
  assert.check(options, { type: "object", message: "options parameter is not valid" }, { domain: { type: "string", message: "domain option is required" }, clientID: { type: "string", message: "clientID option is required" }, responseType: { optional: true, type: "string", message: "responseType is not valid" }, responseMode: { optional: true, type: "string", message: "responseMode is not valid" }, redirectUri: { optional: true, type: "string", message: "redirectUri is not valid" }, scope: { optional: true, type: "string", message: "scope is not valid" }, audience: { optional: true, type: "string", message: "audience is not valid" }, popupOrigin: { optional: true, type: "string", message: "popupOrigin is not valid" }, leeway: { optional: true, type: "number", message: "leeway is not valid" }, plugins: { optional: true, type: "array", message: "plugins is not valid" }, maxAge: { optional: true, type: "number", message: "maxAge is not valid" }, stateExpiration: { optional: true, type: "number", message: "stateExpiration is not valid" }, legacySameSiteCookie: { optional: true, type: "boolean", message: "legacySameSiteCookie option is not valid" }, _disableDeprecationWarnings: { optional: true, type: "boolean", message: "_disableDeprecationWarnings option is not valid" }, _sendTelemetry: { optional: true, type: "boolean", message: "_sendTelemetry option is not valid" }, _telemetryInfo: { optional: true, type: "object", message: "_telemetryInfo option is not valid" }, _timesToRetryFailedRequests: { optional: true, type: "number", message: "_timesToRetryFailedRequests option is not valid" } }), options.overrides && assert.check(options.overrides, { type: "object", message: "overrides option is not valid" }, { __tenant: { optional: true, type: "string", message: "__tenant option is required" }, __token_issuer: { optional: true, type: "string", message: "__token_issuer option is required" }, __jwks_uri: { optional: true, type: "string", message: "__jwks_uri is required" } }), this.baseOptions = options, this.baseOptions.plugins = new PluginHandler(this, this.baseOptions.plugins || []), this.baseOptions._sendTelemetry = false !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions._timesToRetryFailedRequests = options._timesToRetryFailedRequests ? parseInt(options._timesToRetryFailedRequests) : 0, this.baseOptions.tenant = this.baseOptions.overrides && this.baseOptions.overrides.__tenant || this.baseOptions.domain.split(".")[0], this.baseOptions.token_issuer = this.baseOptions.overrides && this.baseOptions.overrides.__token_issuer || "https://" + this.baseOptions.domain + "/", this.baseOptions.jwksURI = this.baseOptions.overrides && this.baseOptions.overrides.__jwks_uri, false !== options.legacySameSiteCookie && (this.baseOptions.legacySameSiteCookie = true), this.transactionManager = new TransactionManager(this.baseOptions), this.client = new Authentication(this.baseOptions), this.redirect = new Redirect(this, this.baseOptions), this.popup = new Popup(this, this.baseOptions), this.crossOriginAuthentication = new CrossOriginAuthentication(this, this.baseOptions), this.webMessageHandler = new WebMessageHandler(this), this._universalLogin = new HostedPages(this, this.baseOptions), this.ssodataStorage = new SSODataStorage(this.baseOptions);
}
function PasswordlessAuthentication(request, options) {
  this.baseOptions = options, this.request = request;
}
function DBConnection(request, options) {
  this.baseOptions = options, this.request = request;
}
function Authentication(auth0, options) {
  2 === arguments.length ? this.auth0 = auth0 : options = auth0, assert.check(options, { type: "object", message: "options parameter is not valid" }, { domain: { type: "string", message: "domain option is required" }, clientID: { type: "string", message: "clientID option is required" }, responseType: { optional: true, type: "string", message: "responseType is not valid" }, responseMode: { optional: true, type: "string", message: "responseMode is not valid" }, redirectUri: { optional: true, type: "string", message: "redirectUri is not valid" }, scope: { optional: true, type: "string", message: "scope is not valid" }, audience: { optional: true, type: "string", message: "audience is not valid" }, _disableDeprecationWarnings: { optional: true, type: "boolean", message: "_disableDeprecationWarnings option is not valid" }, _sendTelemetry: { optional: true, type: "boolean", message: "_sendTelemetry option is not valid" }, _telemetryInfo: { optional: true, type: "object", message: "_telemetryInfo option is not valid" } }), this.baseOptions = options, this.baseOptions._sendTelemetry = false !== this.baseOptions._sendTelemetry || this.baseOptions._sendTelemetry, this.baseOptions.rootUrl = this.baseOptions.domain && 0 === this.baseOptions.domain.toLowerCase().indexOf("http") ? this.baseOptions.domain : "https://" + this.baseOptions.domain, this.request = new RequestBuilder(this.baseOptions), this.passwordless = new PasswordlessAuthentication(this.request, this.baseOptions), this.dbConnection = new DBConnection(this.request, this.baseOptions), this.warn = new Warn({ disableWarnings: !!options._disableDeprecationWarnings }), this.ssodataStorage = new SSODataStorage(this.baseOptions);
}
function Management(options) {
  assert.check(options, { type: "object", message: "options parameter is not valid" }, { domain: { type: "string", message: "domain option is required" }, token: { type: "string", message: "token option is required" }, _sendTelemetry: { optional: true, type: "boolean", message: "_sendTelemetry option is not valid" }, _telemetryInfo: { optional: true, type: "object", message: "_telemetryInfo option is not valid" } }), this.baseOptions = options, this.baseOptions.headers = { Authorization: "Bearer " + this.baseOptions.token }, this.request = new RequestBuilder(this.baseOptions), this.baseOptions.rootUrl = urlJoin("https://" + this.baseOptions.domain, "api", "v2");
}
WebAuth.prototype.parseHash = function(options, cb) {
  var parsedQs, err;
  cb || "function" != typeof options ? options = options || {} : (cb = options, options = {});
  var hashStr = void 0 === options.hash ? windowHelper.getWindow().location.hash : options.hash;
  if (hashStr = hashStr.replace(/^#?\/?/, ""), (parsedQs = lib.parse(hashStr)).hasOwnProperty("error"))
    return err = error.buildResponse(parsedQs.error, parsedQs.error_description), parsedQs.state && (err.state = parsedQs.state), cb(err);
  if (!parsedQs.hasOwnProperty("access_token") && !parsedQs.hasOwnProperty("id_token") && !parsedQs.hasOwnProperty("refresh_token"))
    return cb(null, null);
  var responseTypes = (this.baseOptions.responseType || options.responseType || "").split(" ");
  return responseTypes.length > 0 && -1 !== responseTypes.indexOf("token") && !parsedQs.hasOwnProperty("access_token") ? cb(error.buildResponse("invalid_hash", "response_type contains `token`, but the parsed hash does not contain an `access_token` property")) : responseTypes.length > 0 && -1 !== responseTypes.indexOf("id_token") && !parsedQs.hasOwnProperty("id_token") ? cb(error.buildResponse("invalid_hash", "response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")) : this.validateAuthenticationResponse(options, parsedQs, cb);
}, WebAuth.prototype.validateAuthenticationResponse = function(options, parsedHash, cb) {
  var _this = this;
  options.__enableIdPInitiatedLogin = options.__enableIdPInitiatedLogin || options.__enableImpersonation;
  var state = parsedHash.state, transaction = this.transactionManager.getStoredTransaction(state), transactionState = options.state || transaction && transaction.state || null, transactionStateMatchesState = transactionState === state;
  if (!(!state && !transactionState && options.__enableIdPInitiatedLogin) && !transactionStateMatchesState)
    return cb({ error: "invalid_token", errorDescription: "`state` does not match." });
  var transactionNonce = options.nonce || transaction && transaction.nonce || null, transactionOrganization = transaction && transaction.organization, appState = options.state || transaction && transaction.appState || null, callback = function(err, payload) {
    if (err)
      return cb(err);
    var sub;
    transaction && transaction.lastUsedConnection && (payload && (sub = payload.sub), _this.ssodataStorage.set(transaction.lastUsedConnection, sub));
    return cb(null, function(qsParams, appState2, token) {
      return { accessToken: qsParams.access_token || null, idToken: qsParams.id_token || null, idTokenPayload: token || null, appState: appState2 || null, refreshToken: qsParams.refresh_token || null, state: qsParams.state || null, expiresIn: qsParams.expires_in ? parseInt(qsParams.expires_in, 10) : null, tokenType: qsParams.token_type || null, scope: qsParams.scope || null };
    }(parsedHash, appState, payload));
  };
  return parsedHash.id_token ? this.validateToken(parsedHash.id_token, transactionNonce, function(validationError, payload) {
    if (!validationError) {
      if (transactionOrganization)
        if (0 === transactionOrganization.indexOf("org_")) {
          if (!payload.org_id)
            return callback(error.invalidToken("Organization Id (org_id) claim must be a string present in the ID token"));
          if (payload.org_id !== transactionOrganization)
            return callback(error.invalidToken('Organization Id (org_id) claim value mismatch in the ID token; expected "' + transactionOrganization + '", found "' + payload.org_id + '"'));
        } else {
          if (!payload.org_name)
            return callback(error.invalidToken("Organization Name (org_name) claim must be a string present in the ID token"));
          if (payload.org_name !== transactionOrganization.toLowerCase())
            return callback(error.invalidToken('Organization Name (org_name) claim value mismatch in the ID token; expected "' + transactionOrganization + '", found "' + payload.org_name + '"'));
        }
      return parsedHash.access_token && payload.at_hash ? new I().validateAccessToken(parsedHash.access_token, "RS256", payload.at_hash, function(err) {
        return err ? callback(error.invalidToken(err.message)) : callback(null, payload);
      }) : callback(null, payload);
    }
    if ("invalid_token" !== validationError.error || validationError.errorDescription && validationError.errorDescription.indexOf("Nonce (nonce) claim value mismatch in the ID token") > -1)
      return callback(validationError);
    var decodedToken = new I().decode(parsedHash.id_token);
    if ("HS256" !== decodedToken.header.alg)
      return callback(validationError);
    if ((decodedToken.payload.nonce || null) !== transactionNonce)
      return callback({ error: "invalid_token", errorDescription: 'Nonce (nonce) claim value mismatch in the ID token; expected "' + transactionNonce + '", found "' + decodedToken.payload.nonce + '"' });
    if (!parsedHash.access_token) {
      return callback({ error: "invalid_token", description: "The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can’t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token" });
    }
    return _this.client.userInfo(parsedHash.access_token, function(errUserInfo, profile) {
      return errUserInfo ? callback(errUserInfo) : callback(null, profile);
    });
  }) : callback(null, null);
}, WebAuth.prototype.validateToken = function(token, nonce, cb) {
  new I({ issuer: this.baseOptions.token_issuer, jwksURI: this.baseOptions.jwksURI, audience: this.baseOptions.clientID, leeway: this.baseOptions.leeway || 60, maxAge: this.baseOptions.maxAge, __clock: this.baseOptions.__clock || defaultClock }).verify(token, nonce, function(err, payload) {
    if (err)
      return cb(error.invalidToken(err.message));
    cb(null, payload);
  });
}, WebAuth.prototype.renewAuth = function(options, cb) {
  var usePostMessage = !!options.usePostMessage, postMessageDataType = options.postMessageDataType || false, postMessageOrigin = options.postMessageOrigin || windowHelper.getWindow().origin, timeout = options.timeout, _this = this, params = objectHelper.merge(this.baseOptions, ["clientID", "redirectUri", "responseType", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(options);
  params.responseType = params.responseType || "token", params.responseMode = params.responseMode || "fragment", params = this.transactionManager.process(params), assert.check(params, { type: "object", message: "options parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), params.prompt = "none", params = objectHelper.blacklist(params, ["usePostMessage", "tenant", "postMessageDataType", "postMessageOrigin"]), SilentAuthenticationHandler.create({ authenticationUrl: this.client.buildAuthorizeUrl(params), postMessageDataType, postMessageOrigin, timeout }).login(usePostMessage, function(err, hash) {
    if ("object" == typeof hash)
      return cb(err, hash);
    _this.parseHash({ hash }, cb);
  });
}, WebAuth.prototype.checkSession = function(options, cb) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(options);
  return "code" === params.responseType ? cb({ error: "error", error_description: "responseType can't be `code`" }) : (options.nonce || (params = this.transactionManager.process(params)), params.redirectUri ? (assert.check(params, { type: "object", message: "options parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), params = objectHelper.blacklist(params, ["usePostMessage", "tenant", "postMessageDataType"]), void this.webMessageHandler.run(params, wrapCallback(cb, { forceLegacyError: true, ignoreCasing: true }))) : cb({ error: "error", error_description: "redirectUri can't be empty" }));
}, WebAuth.prototype.changePassword = function(options, cb) {
  return this.client.dbConnection.changePassword(options, cb);
}, WebAuth.prototype.passwordlessStart = function(options, cb) {
  var authParams = objectHelper.merge(this.baseOptions, ["responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"]).with(options.authParams);
  return options.authParams = this.transactionManager.process(authParams), this.client.passwordless.start(options, cb);
}, WebAuth.prototype.signup = function(options, cb) {
  return this.client.dbConnection.signup(options, cb);
}, WebAuth.prototype.authorize = function(options) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "organization", "invitation"]).with(options);
  assert.check(params, { type: "object", message: "options parameter is not valid" }, { responseType: { type: "string", message: "responseType option is required" } }), (params = this.transactionManager.process(params)).scope = params.scope || "openid profile email", windowHelper.redirect(this.client.buildAuthorizeUrl(params));
}, WebAuth.prototype.signupAndAuthorize = function(options, cb) {
  var _this = this;
  return this.client.dbConnection.signup(objectHelper.blacklist(options, ["popupHandler"]), function(err) {
    if (err)
      return cb(err);
    options.realm = options.connection, options.username || (options.username = options.email), _this.client.login(options, cb);
  });
}, WebAuth.prototype.login = function(options, cb) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting", "organization", "invitation"]).with(options);
  params = this.transactionManager.process(params), windowHelper.getWindow().location.host === this.baseOptions.domain ? (params.connection = params.realm, delete params.realm, this._universalLogin.login(params, cb)) : this.crossOriginAuthentication.login(params, cb);
}, WebAuth.prototype.passwordlessLogin = function(options, cb) {
  var params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting"]).with(options);
  if (params = this.transactionManager.process(params), windowHelper.getWindow().location.host === this.baseOptions.domain)
    this.passwordlessVerify(params, cb);
  else {
    var crossOriginOptions = objectHelper.extend({ credentialType: "http://auth0.com/oauth/grant-type/passwordless/otp", realm: params.connection, username: params.email || params.phoneNumber, otp: params.verificationCode }, objectHelper.blacklist(params, ["connection", "email", "phoneNumber", "verificationCode"]));
    this.crossOriginAuthentication.login(crossOriginOptions, cb);
  }
}, WebAuth.prototype.crossOriginAuthenticationCallback = function() {
  this.crossOriginVerification();
}, WebAuth.prototype.crossOriginVerification = function() {
  this.crossOriginAuthentication.callback();
}, WebAuth.prototype.logout = function(options) {
  windowHelper.redirect(this.client.buildLogoutUrl(options));
}, WebAuth.prototype.passwordlessVerify = function(options, cb) {
  var _this = this, params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce", "onRedirecting"]).with(options);
  return assert.check(params, { type: "object", message: "options parameter is not valid" }, { responseType: { type: "string", message: "responseType option is required" } }), params = this.transactionManager.process(params), this.client.passwordless.verify(params, function(err) {
    if (err)
      return cb(err);
    function doAuth() {
      windowHelper.redirect(_this.client.passwordless.buildVerifyUrl(params));
    }
    if ("function" == typeof options.onRedirecting)
      return options.onRedirecting(function() {
        doAuth();
      });
    doAuth();
  });
}, WebAuth.prototype.renderCaptcha = function(element, options, callback) {
  return captcha.render(this.client, element, options, callback);
}, WebAuth.prototype.renderPasswordlessCaptcha = function(element, options, callback) {
  return captcha.renderPasswordless(this.client, element, options, callback);
}, PasswordlessAuthentication.prototype.buildVerifyUrl = function(options) {
  var params, qString;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { connection: { type: "string", message: "connection option is required" }, verificationCode: { type: "string", message: "verificationCode option is required" }, phoneNumber: { optional: false, type: "string", message: "phoneNumber option is required", condition: function(o2) {
    return !o2.email;
  } }, email: { optional: false, type: "string", message: "email option is required", condition: function(o2) {
    return !o2.phoneNumber;
  } } }), params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "protocol", "nonce"]).with(options), this.baseOptions._sendTelemetry && (params.auth0Client = this.request.getTelemetryData()), params = objectHelper.toSnakeCase(params, ["auth0Client"]), qString = lib.stringify(params), urlJoin(this.baseOptions.rootUrl, "passwordless", "verify_redirect", "?" + qString);
}, PasswordlessAuthentication.prototype.start = function(options, cb) {
  var url, body;
  assert.check(options, { type: "object", message: "options parameter is not valid" }, { connection: { type: "string", message: "connection option is required" }, send: { type: "string", message: "send option is required", values: ["link", "code"], value_message: "send is not valid ([link, code])" }, phoneNumber: { optional: true, type: "string", message: "phoneNumber option is required", condition: function(o2) {
    return "code" === o2.send || !o2.email;
  } }, email: { optional: true, type: "string", message: "email option is required", condition: function(o2) {
    return "link" === o2.send || !o2.phoneNumber;
  } }, authParams: { optional: true, type: "object", message: "authParams option is required" } }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "passwordless", "start");
  var xRequestLanguage = options.xRequestLanguage;
  delete options.xRequestLanguage, (body = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope"]).with(options)).scope && (body.authParams = body.authParams || {}, body.authParams.scope = body.authParams.scope || body.scope), body.redirectUri && (body.authParams = body.authParams || {}, body.authParams.redirect_uri = body.authParams.redirectUri || body.redirectUri), body.responseType && (body.authParams = body.authParams || {}, body.authParams.response_type = body.authParams.responseType || body.responseType), delete body.redirectUri, delete body.responseType, delete body.scope, body = objectHelper.toSnakeCase(body, ["auth0Client", "authParams"]);
  var postOptions = xRequestLanguage ? { xRequestLanguage } : void 0;
  return this.request.post(url, postOptions).send(body).end(wrapCallback(cb));
}, PasswordlessAuthentication.prototype.verify = function(options, cb) {
  var url, cleanOption;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { connection: { type: "string", message: "connection option is required" }, verificationCode: { type: "string", message: "verificationCode option is required" }, phoneNumber: { optional: false, type: "string", message: "phoneNumber option is required", condition: function(o2) {
    return !o2.email;
  } }, email: { optional: false, type: "string", message: "email option is required", condition: function(o2) {
    return !o2.phoneNumber;
  } } }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), cleanOption = objectHelper.pick(options, ["connection", "verificationCode", "phoneNumber", "email", "auth0Client", "clientID"]), cleanOption = objectHelper.toSnakeCase(cleanOption, ["auth0Client"]), url = urlJoin(this.baseOptions.rootUrl, "passwordless", "verify"), this.request.post(url).send(cleanOption).end(wrapCallback(cb));
}, PasswordlessAuthentication.prototype.getChallenge = function(cb) {
  if (assert.check(cb, { type: "function", message: "cb parameter is not valid" }), !this.baseOptions.state)
    return cb();
  var url = urlJoin(this.baseOptions.rootUrl, "passwordless", "challenge");
  return this.request.post(url).send({ state: this.baseOptions.state }).end(wrapCallback(cb, { ignoreCasing: true }));
}, DBConnection.prototype.signup = function(options, cb) {
  var url, body, metadata;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { connection: { type: "string", message: "connection option is required" }, email: { type: "string", message: "email option is required" }, password: { type: "string", message: "password option is required" } }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "dbconnections", "signup"), metadata = (body = objectHelper.merge(this.baseOptions, ["clientID", "state"]).with(options)).user_metadata || body.userMetadata, body = objectHelper.blacklist(body, ["scope", "userMetadata", "user_metadata"]), body = objectHelper.toSnakeCase(body, ["auth0Client"]), metadata && (body.user_metadata = metadata), this.request.post(url).send(body).end(wrapCallback(cb));
}, DBConnection.prototype.changePassword = function(options, cb) {
  var url, body;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { connection: { type: "string", message: "connection option is required" }, email: { type: "string", message: "email option is required" } }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "dbconnections", "change_password"), body = objectHelper.merge(this.baseOptions, ["clientID", "state"]).with(options, ["email", "connection", "captcha"]), body = objectHelper.toSnakeCase(body, ["auth0Client"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, DBConnection.prototype.getChallenge = function(cb) {
  if (assert.check(cb, { type: "function", message: "cb parameter is not valid" }), !this.baseOptions.state)
    return cb();
  var url = urlJoin(this.baseOptions.rootUrl, "dbconnections", "challenge");
  return this.request.post(url).send({ state: this.baseOptions.state }).end(wrapCallback(cb, { ignoreCasing: true }));
}, Authentication.prototype.buildAuthorizeUrl = function(options) {
  var params, qString;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }), params = objectHelper.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience"]).with(options), assert.check(params, { type: "object", message: "options parameter is not valid" }, { clientID: { type: "string", message: "clientID option is required" }, redirectUri: { optional: true, type: "string", message: "redirectUri option is required" }, responseType: { type: "string", message: "responseType option is required" }, nonce: { type: "string", message: "nonce option is required", condition: function(o2) {
    return -1 === o2.responseType.indexOf("code") && -1 !== o2.responseType.indexOf("id_token");
  } }, scope: { optional: true, type: "string", message: "scope option is required" }, audience: { optional: true, type: "string", message: "audience option is required" } }), this.baseOptions._sendTelemetry && (params.auth0Client = this.request.getTelemetryData()), params.connection_scope && assert.isArray(params.connection_scope) && (params.connection_scope = params.connection_scope.join(",")), params = objectHelper.blacklist(params, ["username", "popupOptions", "domain", "tenant", "timeout", "appState"]), params = objectHelper.toSnakeCase(params, ["auth0Client"]), params = parametersWhitelist.oauthAuthorizeParams(this.warn, params), qString = lib.stringify(params), urlJoin(this.baseOptions.rootUrl, "authorize", "?" + qString);
}, Authentication.prototype.buildLogoutUrl = function(options) {
  var params, qString;
  return assert.check(options, { optional: true, type: "object", message: "options parameter is not valid" }), params = objectHelper.merge(this.baseOptions, ["clientID"]).with(options || {}), this.baseOptions._sendTelemetry && (params.auth0Client = this.request.getTelemetryData()), params = objectHelper.toSnakeCase(params, ["auth0Client", "returnTo"]), qString = lib.stringify(objectHelper.blacklist(params, ["federated"])), options && void 0 !== options.federated && false !== options.federated && "false" !== options.federated && (qString += "&federated"), urlJoin(this.baseOptions.rootUrl, "v2", "logout", "?" + qString);
}, Authentication.prototype.loginWithDefaultDirectory = function(options, cb) {
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { username: { type: "string", message: "username option is required" }, password: { type: "string", message: "password option is required" }, scope: { optional: true, type: "string", message: "scope option is required" }, audience: { optional: true, type: "string", message: "audience option is required" } }), options.grantType = "password", this.oauthToken(options, cb);
}, Authentication.prototype.login = function(options, cb) {
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { username: { type: "string", message: "username option is required" }, password: { type: "string", message: "password option is required" }, realm: { type: "string", message: "realm option is required" }, scope: { optional: true, type: "string", message: "scope option is required" }, audience: { optional: true, type: "string", message: "audience option is required" } }), options.grantType = "http://auth0.com/oauth/grant-type/password-realm", this.oauthToken(options, cb);
}, Authentication.prototype.oauthToken = function(options, cb) {
  var url, body;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "oauth", "token"), body = objectHelper.merge(this.baseOptions, ["clientID", "scope", "audience"]).with(options), assert.check(body, { type: "object", message: "options parameter is not valid" }, { clientID: { type: "string", message: "clientID option is required" }, grantType: { type: "string", message: "grantType option is required" }, scope: { optional: true, type: "string", message: "scope option is required" }, audience: { optional: true, type: "string", message: "audience option is required" } }), body = objectHelper.toSnakeCase(body, ["auth0Client"]), body = parametersWhitelist.oauthTokenParams(this.warn, body), this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.loginWithResourceOwner = function(options, cb) {
  var url, body;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { username: { type: "string", message: "username option is required" }, password: { type: "string", message: "password option is required" }, connection: { type: "string", message: "connection option is required" }, scope: { optional: true, type: "string", message: "scope option is required" } }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "oauth", "ro"), body = objectHelper.merge(this.baseOptions, ["clientID", "scope"]).with(options, ["username", "password", "scope", "connection", "device"]), (body = objectHelper.toSnakeCase(body, ["auth0Client"])).grant_type = body.grant_type || "password", this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.getSSOData = function(withActiveDirectories, cb) {
  if (this.auth0 || (this.auth0 = new WebAuth(this.baseOptions)), windowHelper.getWindow().location.host === this.baseOptions.domain)
    return this.auth0._universalLogin.getSSOData(withActiveDirectories, cb);
  "function" == typeof withActiveDirectories && (cb = withActiveDirectories), assert.check(cb, { type: "function", message: "cb parameter is not valid" });
  var clientId = this.baseOptions.clientID, ssodataInformation = this.ssodataStorage.get() || {};
  this.auth0.checkSession({ responseType: "token id_token", scope: "openid profile email", connection: ssodataInformation.lastUsedConnection, timeout: 5e3 }, function(err, result) {
    return err ? "login_required" === err.error ? cb(null, { sso: false }) : ("consent_required" === err.error && (err.error_description = "Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."), cb(err, { sso: false })) : ssodataInformation.lastUsedSub && ssodataInformation.lastUsedSub !== result.idTokenPayload.sub ? cb(err, { sso: false }) : cb(null, { lastUsedConnection: { name: ssodataInformation.lastUsedConnection }, lastUsedUserID: result.idTokenPayload.sub, lastUsedUsername: result.idTokenPayload.email || result.idTokenPayload.name, lastUsedClientID: clientId, sessionClients: [clientId], sso: true });
  });
}, Authentication.prototype.userInfo = function(accessToken, cb) {
  var url;
  return assert.check(accessToken, { type: "string", message: "accessToken parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "userinfo"), this.request.get(url).set("Authorization", "Bearer " + accessToken).end(wrapCallback(cb, { ignoreCasing: true }));
}, Authentication.prototype.getChallenge = function(cb) {
  if (assert.check(cb, { type: "function", message: "cb parameter is not valid" }), !this.baseOptions.state)
    return cb();
  var url = urlJoin(this.baseOptions.rootUrl, "usernamepassword", "challenge");
  return this.request.post(url).send({ state: this.baseOptions.state }).end(wrapCallback(cb, { ignoreCasing: true }));
}, Authentication.prototype.delegation = function(options, cb) {
  var url, body;
  return assert.check(options, { type: "object", message: "options parameter is not valid" }, { grant_type: { type: "string", message: "grant_type option is required" } }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "delegation"), body = objectHelper.merge(this.baseOptions, ["clientID"]).with(options), body = objectHelper.toSnakeCase(body, ["auth0Client"]), this.request.post(url).send(body).end(wrapCallback(cb));
}, Authentication.prototype.getUserCountry = function(cb) {
  var url;
  return assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "user", "geoloc", "country"), this.request.get(url).end(wrapCallback(cb));
}, Management.prototype.getUser = function(userId, cb) {
  var url;
  return assert.check(userId, { type: "string", message: "userId parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "users", userId), this.request.get(url).end(wrapCallback(cb, { ignoreCasing: true }));
}, Management.prototype.patchUserMetadata = function(userId, userMetadata, cb) {
  var url;
  return assert.check(userId, { type: "string", message: "userId parameter is not valid" }), assert.check(userMetadata, { type: "object", message: "userMetadata parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "users", userId), this.request.patch(url).send({ user_metadata: userMetadata }).end(wrapCallback(cb, { ignoreCasing: true }));
}, Management.prototype.patchUserAttributes = function(userId, user, cb) {
  var url;
  return assert.check(userId, { type: "string", message: "userId parameter is not valid" }), assert.check(user, { type: "object", message: "user parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "users", userId), this.request.patch(url).send(user).end(wrapCallback(cb, { ignoreCasing: true }));
}, Management.prototype.linkUser = function(userId, secondaryUserToken, cb) {
  var url;
  return assert.check(userId, { type: "string", message: "userId parameter is not valid" }), assert.check(secondaryUserToken, { type: "string", message: "secondaryUserToken parameter is not valid" }), assert.check(cb, { type: "function", message: "cb parameter is not valid" }), url = urlJoin(this.baseOptions.rootUrl, "users", userId, "identities"), this.request.post(url).send({ link_with: secondaryUserToken }).end(wrapCallback(cb, { ignoreCasing: true }));
};
var index = { Authentication, Management, WebAuth, version };
var auth0_min_esm_default = index;
export {
  Authentication,
  Management,
  WebAuth,
  auth0_min_esm_default as default,
  version
};
//# sourceMappingURL=auth0-js.js.map
