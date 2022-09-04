/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/lodash/_DataView.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_DataView.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../node_modules/lodash/_Hash.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_Hash.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "../node_modules/lodash/_ListCache.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_ListCache.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "../node_modules/lodash/_Map.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/_Map.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../node_modules/lodash/_MapCache.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_MapCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "../node_modules/lodash/_Promise.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_Promise.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../node_modules/lodash/_Set.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/_Set.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../node_modules/lodash/_Stack.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_Stack.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "../node_modules/lodash/_Symbol.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../node_modules/lodash/_Uint8Array.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_Uint8Array.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "../node_modules/lodash/_WeakMap.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_WeakMap.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../node_modules/lodash/_apply.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "../node_modules/lodash/_arrayEach.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayEach.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "../node_modules/lodash/_arrayFilter.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_arrayFilter.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "../node_modules/lodash/_arrayLikeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../node_modules/lodash/_arrayPush.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayPush.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "../node_modules/lodash/_assignMergeValue.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_assignMergeValue.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "../node_modules/lodash/_assignValue.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_assignValue.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../node_modules/lodash/_assocIndexOf.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_assocIndexOf.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "../node_modules/lodash/_baseAssign.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseAssign.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "../node_modules/lodash/_baseAssignIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseAssignIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "../node_modules/lodash/_baseAssignValue.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseAssignValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "../node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "../node_modules/lodash/_baseClone.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseClone.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "../node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "../node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "../node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "../node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "../node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "../node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "../node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "../node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "../node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "../node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "../node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "../node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "../node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "../node_modules/lodash/_baseCreate.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseCreate.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "../node_modules/lodash/_baseFindIndex.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseFindIndex.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "../node_modules/lodash/_baseFor.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseFor.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "../node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "../node_modules/lodash/_baseGetAllKeys.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_baseGetAllKeys.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "../node_modules/lodash/_baseGetTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../node_modules/lodash/_baseIndexOf.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "../node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "../node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "../node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "../node_modules/lodash/_baseIsArguments.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../node_modules/lodash/_baseIsMap.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsMap.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "../node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "../node_modules/lodash/_baseIsNaN.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsNaN.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "../node_modules/lodash/_baseIsNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../node_modules/lodash/_baseIsSet.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsSet.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "../node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "../node_modules/lodash/_baseIsTypedArray.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../node_modules/lodash/_baseKeys.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseKeys.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../node_modules/lodash/_baseKeysIn.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseKeysIn.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_baseMerge.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseMerge.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "../node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "../node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "../node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "../node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "../node_modules/lodash/_baseMergeDeep.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseMergeDeep.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "../node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "../node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "../node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "../node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "../node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "../node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "../node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "../node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "../node_modules/lodash/_baseRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "../node_modules/lodash/_baseSetToString.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "../node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "../node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "../node_modules/lodash/_baseTimes.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../node_modules/lodash/_baseTrim.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseTrim.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "../node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "../node_modules/lodash/_baseUnary.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../node_modules/lodash/_cloneArrayBuffer.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_cloneArrayBuffer.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "../node_modules/lodash/_cloneBuffer.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneBuffer.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "../node_modules/lodash/_cloneDataView.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_cloneDataView.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "../node_modules/lodash/_cloneRegExp.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneRegExp.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "../node_modules/lodash/_cloneSymbol.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneSymbol.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "../node_modules/lodash/_cloneTypedArray.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_cloneTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "../node_modules/lodash/_copyArray.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_copyArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../node_modules/lodash/_copyObject.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_copyObject.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../node_modules/lodash/_copySymbols.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_copySymbols.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "../node_modules/lodash/_copySymbolsIn.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_copySymbolsIn.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "../node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "../node_modules/lodash/_coreJsData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../node_modules/lodash/_createAssigner.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createAssigner.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "../node_modules/lodash/_createBaseFor.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_createBaseFor.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "../node_modules/lodash/_defineProperty.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../node_modules/lodash/_freeGlobal.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../node_modules/lodash/_getAllKeys.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getAllKeys.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "../node_modules/lodash/_getAllKeysIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getAllKeysIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "../node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_getMapData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getMapData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "../node_modules/lodash/_getNative.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../node_modules/lodash/_getPrototype.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getPrototype.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "../node_modules/lodash/_getRawTag.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../node_modules/lodash/_getSymbols.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getSymbols.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "../node_modules/lodash/_getSymbolsIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getSymbolsIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "../node_modules/lodash/_getTag.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_getTag.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "../node_modules/lodash/_getValue.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../node_modules/lodash/_hashClear.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_hashClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "../node_modules/lodash/_hashDelete.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_hashDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "../node_modules/lodash/_hashGet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashGet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "../node_modules/lodash/_hashHas.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashHas.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "../node_modules/lodash/_hashSet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "../node_modules/lodash/_initCloneArray.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_initCloneArray.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "../node_modules/lodash/_initCloneByTag.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_initCloneByTag.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "../node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "../node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "../node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "../node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "../node_modules/lodash/_initCloneObject.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_initCloneObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "../node_modules/lodash/_isIndex.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../node_modules/lodash/_isIterateeCall.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "../node_modules/lodash/_isKeyable.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_isKeyable.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "../node_modules/lodash/_isMasked.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../node_modules/lodash/_isPrototype.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../node_modules/lodash/_listCacheClear.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_listCacheClear.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "../node_modules/lodash/_listCacheDelete.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_listCacheDelete.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "../node_modules/lodash/_listCacheGet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheGet.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "../node_modules/lodash/_listCacheHas.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheHas.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "../node_modules/lodash/_listCacheSet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheSet.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "../node_modules/lodash/_mapCacheClear.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_mapCacheClear.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "../node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "../node_modules/lodash/_mapCacheDelete.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_mapCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "../node_modules/lodash/_mapCacheGet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "../node_modules/lodash/_mapCacheHas.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "../node_modules/lodash/_mapCacheSet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "../node_modules/lodash/_nativeCreate.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeCreate.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "../node_modules/lodash/_nativeKeys.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_nativeKeys.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../node_modules/lodash/_nativeKeysIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeKeysIn.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_nodeUtil.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "../node_modules/lodash/_objectToString.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../node_modules/lodash/_overArg.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../node_modules/lodash/_overRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "../node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "../node_modules/lodash/_root.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../node_modules/lodash/_safeGet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_safeGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "../node_modules/lodash/_setToString.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "../node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "../node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "../node_modules/lodash/_shortOut.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "../node_modules/lodash/_stackClear.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_stackClear.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "../node_modules/lodash/_stackDelete.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_stackDelete.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "../node_modules/lodash/_stackGet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackGet.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "../node_modules/lodash/_stackHas.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackHas.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "../node_modules/lodash/_stackSet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "../node_modules/lodash/_strictIndexOf.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_strictIndexOf.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "../node_modules/lodash/_toSource.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../node_modules/lodash/_trimmedEndIndex.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_trimmedEndIndex.js ***!
  \**************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "../node_modules/lodash/cloneDeep.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/cloneDeep.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "../node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "../node_modules/lodash/constant.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "../node_modules/lodash/eq.js":
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../node_modules/lodash/identity.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../node_modules/lodash/indexOf.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/indexOf.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "../node_modules/lodash/_baseIndexOf.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "../node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

module.exports = indexOf;


/***/ }),

/***/ "../node_modules/lodash/isArguments.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../node_modules/lodash/isArray.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../node_modules/lodash/isArrayLike.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../node_modules/lodash/isArrayLikeObject.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/isArrayLikeObject.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "../node_modules/lodash/isBuffer.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "../node_modules/lodash/isFunction.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../node_modules/lodash/isLength.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../node_modules/lodash/isMap.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/isMap.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "../node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "../node_modules/lodash/isObject.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../node_modules/lodash/isObjectLike.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../node_modules/lodash/isPlainObject.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/isPlainObject.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "../node_modules/lodash/isSet.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/isSet.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "../node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "../node_modules/lodash/isSymbol.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isSymbol.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "../node_modules/lodash/isTypedArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../node_modules/lodash/keys.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/keys.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "../node_modules/lodash/keysIn.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/keysIn.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "../node_modules/lodash/merge.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/merge.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "../node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "../node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "../node_modules/lodash/stubArray.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "../node_modules/lodash/stubFalse.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../node_modules/lodash/toFinite.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/toFinite.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "../node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "../node_modules/lodash/toInteger.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/toInteger.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "../node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "../node_modules/lodash/toNumber.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/toNumber.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "../node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../node_modules/lodash/toPlainObject.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/toPlainObject.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./CookieConsentLayer/CookieConsentLayer.ts":
/*!**************************************************!*\
  !*** ./CookieConsentLayer/CookieConsentLayer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ "../node_modules/lodash/cloneDeep.js"));
const merge_1 = __importDefault(__webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js"));
const indexOf_1 = __importDefault(__webpack_require__(/*! lodash/indexOf */ "../node_modules/lodash/indexOf.js"));
const helpers_1 = __webpack_require__(/*! ../helpers */ "./helpers.ts");
const const_1 = __webpack_require__(/*! ./const */ "./CookieConsentLayer/const.ts");
const enums_1 = __webpack_require__(/*! ./enums */ "./CookieConsentLayer/enums.ts");
class CookieConsentLayer {
    constructor(options, scope, uuid) {
        this.tokens = {
            BTN_ACCEPT_ALL_CCL: 'button_acceptAll',
            BTN_ACCEPT_NECESSARY_CCL: 'button_acceptNecessary',
            BTN_SAVE_CCL: 'button_save',
            REVISION_ALERT_CCL: 'revision_alert',
            BTN_SHOW_DIALOG_CCL: 'show_dialog',
            BTN_HIDE_DIALOG_CCL: 'hide_dialog',
            BTN_SHOW_BANNER_CCL: 'show_banner',
            BTN_HIDE_BANNER_CCL: 'hide_banner',
            CATEGORIES_TABLE_CCL: 'categories_table',
            CATEGORY_TOGGLE_PFX_CCL: 'category_',
            DATA_CCL: 'data-ccl',
            DATA_CCL_TARGET: 'data-ccl-target',
            DATA_CCL_TOGGLE: 'data-ccl-toggle',
        };
        this.banner = {
            init: () => {
                if (!this.state.dialog.destroyed) {
                    this.renderBannerElement();
                    this.state.banner.render = true;
                }
                else {
                    this.err('banner', 'Banner has been removed from DOM, try reload page');
                }
            },
            show: (delay = 0) => {
                const elem = document.getElementById(this.options.banner.id);
                const runner = () => {
                    if (elem) {
                        elem.style.display = 'block';
                        elem.ariaHidden = 'false';
                        this.state.banner.show = true;
                    }
                };
                if (delay > 0) {
                    setTimeout(runner, delay);
                }
                else {
                    runner();
                }
            },
            hide: () => {
                const elem = document.getElementById(this.options.banner.id);
                if (elem) {
                    elem.style.display = 'none';
                    elem.ariaHidden = 'true';
                    this.state.banner.show = false;
                }
            },
            destroy: () => {
                const elem = document.getElementById(this.options.banner.id);
                if (elem) {
                    elem.remove();
                    this.state.banner.render = false;
                    this.state.banner.show = false;
                    this.state.banner.destroyed = true;
                }
            },
        };
        this.dialog = {
            init: () => {
                if (!this.state.dialog.destroyed) {
                    this.renderDialogElement();
                    this.state.dialog.render = true;
                }
                else {
                    this.err('dialog', 'Dialog has been removed from DOM, try reload page');
                }
            },
            show: (delay = 0) => {
                const elem = document.getElementById(this.options.dialog.id);
                const runner = () => {
                    if (elem) {
                        elem.style.display = 'block';
                        elem.ariaHidden = 'false';
                        this.state.dialog.show = true;
                    }
                };
                if (delay > 0) {
                    setTimeout(runner, delay);
                }
                else {
                    runner();
                }
            },
            hide: () => {
                const elem = document.getElementById(this.options.dialog.id);
                if (elem) {
                    elem.style.display = 'none';
                    elem.ariaHidden = 'true';
                    this.state.categories.dirty = false;
                    this.state.dialog.show = false;
                }
            },
            destroy: () => {
                const elem = document.getElementById(this.options.dialog.id);
                if (elem) {
                    elem.remove();
                    this.state.categories.dirty = false;
                    this.state.categories.show = false;
                    this.state.categories.table = false;
                    this.state.dialog.render = false;
                    this.state.dialog.show = false;
                    this.state.dialog.destroyed = true;
                }
            },
        };
        this.layout = {
            bannerBody: (title, content, revision) => {
                const _title = `<div class="${this.selectors.banner.bodyTitleClassName}">${title}</div>`;
                const _content = `<div class="${this.selectors.banner.bodyContentClassName}">${content}</div>`;
                const _revision = revision && `<div id="${this.tokens.REVISION_ALERT_CCL}" class="${this.selectors.banner.bodyRevisionClassName}">${revision}</div>`;
                return `${_title}${_revision}${_content}`;
            },
            dialogBody: (title, primary, secondary, close) => {
                const _close = `<button type="button" ${this.tokens.DATA_CCL}="${this.tokens.BTN_HIDE_DIALOG_CCL}" class="${this.selectors.dialog.bodyCloseClassName}">${close}</button>`;
                const _title = `<div class="${this.selectors.dialog.bodyTitleClassName}">${title}</div>`;
                const _primary = `<div class="${this.selectors.dialog.bodyPrimaryClassName}">${primary}</div>`;
                const _secondary = secondary && `<div class="${this.selectors.dialog.bodySecondaryClassName}">${secondary}</div>`;
                const _table = `<div ${this.tokens.DATA_CCL_TARGET}="${this.tokens.CATEGORIES_TABLE_CCL}" class="${this.selectors.dialog.bodyTableClassName}">Loading table, please wait</div>`;
                return `${_close}${_title}${_primary}${_table}${_secondary}`;
            },
            categoryBody: () => {
                // TODO
            },
            tableBody: () => {
                // TODO
            },
        };
        this.cookies = {
            get: (name = this.options.cookie.name) => {
                const value = (0, helpers_1.getCookie)(name);
                return value && (this.options.cookie.rfc ? JSON.parse(decodeURIComponent(value)) : JSON.parse(value));
            },
            getData: () => {
                const cookie = this.cookies.get();
                const today = new Date();
                const updated = cookie && cookie.dateUpdated;
                console.log('compare two dates, if date is expired ... (updated + expiration) >= today ... ', today.toISOString(), updated);
                return {
                    current: cookie,
                    createdDate: updated || today.toISOString(),
                    updatedDate: today.toISOString(),
                    isExpiredDate: false,
                    isExpiredRevision: cookie ? (cookie.revision !== this.options.meta.revision) : false,
                };
            },
            set: (value, name = this.options.cookie.name, expiration = this.options.cookie.expiration) => {
                const parsedValue = this.options.cookie.rfc ? encodeURIComponent(JSON.stringify(value)) : JSON.stringify(value);
                (0, helpers_1.setCookie)(name, parsedValue, expiration);
            },
            destroy: (name = this.options.cookie.name) => (0, helpers_1.setCookie)('', name, -1),
        };
        this.state = (0, cloneDeep_1.default)(const_1.DEFAULT_STATE);
        this.options = (0, merge_1.default)(const_1.DEFAULT_OPTIONS, options);
        this.scope = scope || 'default';
        this.uuid = uuid || (0, helpers_1.getToken)(6);
        this.selectors = {
            btn: {
                acceptAllClassName: `${this.options.meta.classPrefix}button ${this.options.meta.classPrefix}button-primary`,
                acceptNecessaryClassName: `${this.options.meta.classPrefix}button ${this.options.meta.classPrefix}button-secondary`,
                saveChangesClassName: `${this.options.meta.classPrefix}button ${this.options.meta.classPrefix}button-secondary`,
            },
            banner: {
                wrapperId: this.options.banner.id,
                wrapperClassName: `${this.options.meta.classPrefix}banner-wrapper`,
                bodyId: `${this.options.banner.id}_body`,
                bodyClassName: `${this.options.meta.classPrefix}banner-body`,
                bodyTitleClassName: `${this.options.meta.classPrefix}banner-body-title`,
                bodyRevisionClassName: `${this.options.meta.classPrefix}banner-body-revision`,
                bodyContentClassName: `${this.options.meta.classPrefix}banner-body-content`,
                actionsId: `${this.options.banner.id}_actions`,
                actionsClassName: `${this.options.meta.classPrefix}banner-actions`,
            },
            dialog: {
                wrapperId: this.options.dialog.id,
                wrapperClassName: `${this.options.meta.classPrefix}dialog-wrapper`,
                bodyId: `${this.options.dialog.id}_body`,
                bodyClassName: `${this.options.meta.classPrefix}dialog-body`,
                bodyCloseClassName: `${this.options.meta.classPrefix}dialog-body-close`,
                bodyTitleClassName: `${this.options.meta.classPrefix}dialog-body-title`,
                bodyTableClassName: `${this.options.meta.classPrefix}dialog-body-table`,
                bodyPrimaryClassName: `${this.options.meta.classPrefix}dialog-body-primary`,
                bodySecondaryClassName: `${this.options.meta.classPrefix}dialog-body-secondary`,
                actionsId: `${this.options.dialog.id}_actions`,
                actionsClassName: `${this.options.meta.classPrefix}dialog-actions`,
            },
            categoryRows: {
                categoryRowClassName: `${this.options.meta.classPrefix}category-row`,
                categoryOuterClassName: `${this.options.meta.classPrefix}category-outer`,
                categoryRowInnerClassName: `${this.options.meta.classPrefix}category-row-inner`,
                categoryTableClassName: `${this.options.meta.classPrefix}category-table`,
                toggleIdPrefix: `${this.uuid}_toggle_`,
                toggleClassName: `${this.options.meta.classPrefix}category-toggle`,
                toggleLabelClassName: `${this.options.meta.classPrefix}category-toggle-label`,
                toggleInputClassName: `${this.options.meta.classPrefix}category-toggle-input`,
                block: `${this.options.meta.classPrefix}category-block`,
                blockHeading: `${this.options.meta.classPrefix}category-block-heading`,
                blockHeadingToggle: `${this.options.meta.classPrefix}category-block-heading-toggle`,
                blockTable: `${this.options.meta.classPrefix}category-block-table`,
                blockCollapsible: `${this.options.meta.classPrefix}category-block-collapsible`,
                blockHeadingTitle: `${this.options.meta.classPrefix}category-block-heading-title`,
                blockDescription: `${this.options.meta.classPrefix}category-block-description`,
            },
            state: {
                isChecked: 'is-checked',
            },
        };
        this.nodes = {
            showDialog: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_SHOW_DIALOG_CCL}"]`),
            hideDialog: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_HIDE_DIALOG_CCL}"]`),
            showBanner: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_SHOW_BANNER_CCL}"]`),
            hideBanner: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_HIDE_BANNER_CCL}"]`),
            acceptAll: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_ACCEPT_ALL_CCL}"]`),
            acceptNecessary: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_ACCEPT_NECESSARY_CCL}"]`),
            saveChanges: () => document.querySelectorAll(`[${this.tokens.DATA_CCL}="${this.tokens.BTN_SAVE_CCL}"]`),
        };
        this.events = {
            showBanner: (e) => {
                e.preventDefault();
                this.banner.show();
            },
            hideBanner: (e) => {
                e.preventDefault();
                this.banner.hide();
            },
            showDialog: (e) => {
                e.preventDefault();
                this.dialog.show();
            },
            hideDialog: (e) => {
                e.preventDefault();
                this.dialog.hide();
            },
            acceptNecessary: (e) => {
                e.preventDefault();
                this.onAcceptNecessaryHandler();
            },
            acceptAll: (e) => {
                e.preventDefault();
                this.onAcceptAllHandler();
            },
            saveChanges: (e) => {
                e.preventDefault();
                this.onChangeHandler();
            },
            toggleCategory: (e, category) => {
                e.preventDefault();
                this.categoryToggleHandler(category, e);
            },
        };
        this.init();
    }
    /**
     * References
     **/
    _getState() {
        return this.state;
    }
    _getPreferences() {
        return this.state.preferences;
    }
    _getOptions() {
        return this.options;
    }
    _getNodes() {
        return this.nodes;
    }
    _getSelectors() {
        return this.selectors;
    }
    /**
     * Common
     **/
    log(...args) {
        if (this.options.meta.debug)
            console.log(...args);
    }
    err(reason, message) {
        console.warn(`${reason}:${message}`, this.state);
        if (this.options.onError && typeof this.options.onError === 'function')
            this.options.onError(reason, message, this.state);
    }
    historyPush(arg) {
        this.state.history.push(arg);
    }
    /**
     * Scripts
     **/
    scriptsAutoloadController(event, data) {
        if (this.options.scripts.autoload) {
            // TODO: handle selected cookie category with loaded cookies ...
            // toggle remove or call selected ...
            console.log('Trigger: scriptsAutoloadController -> autoload features', event, data);
        }
    }
    /**
     * Cookies
     **/
    cookieLoaderController(event, data) {
        if (this.options.consent.autoClearCookies) {
            // TODO: Handle browser cookies when user save new settings
            // get a list of current cookies and compare to categories which is accepted and delete rest
            console.log('Trigger: cookieAutoloader() -> autoClearCookies features', event, data);
        }
    }
    /**
     * Language
     **/
    changeLanguage(lang = this.options.language, changeLocales = true) {
        this.state.language = lang;
        changeLocales && this.setLocalesContent(lang);
    }
    /**
     * Locales
     **/
    getLocales(lang = this.state.language) {
        return this.options.locales[lang];
    }
    setLocalesContent(lang = this.state.language) {
        const cookieData = this.cookies.getData();
        const locales = this.getLocales(lang);
        const elBannerBodyHtml = document.getElementById(this.selectors.banner.bodyId);
        const elDialogBodyHtml = document.getElementById(this.selectors.dialog.bodyId);
        this.nodes.acceptAll().forEach((node) => {
            node.innerText = `${locales.common.buttonAcceptAll}`;
        });
        this.nodes.acceptNecessary().forEach((node) => {
            node.innerText = `${locales.common.buttonAcceptNecessary}`;
        });
        this.nodes.saveChanges().forEach((node) => {
            node.innerText = `${locales.common.buttonSave}`;
        });
        if (elBannerBodyHtml)
            elBannerBodyHtml.innerHTML = this.layout.bannerBody(locales.banner.title, locales.banner.content, cookieData.isExpiredRevision ? locales.revisionAlert : undefined);
        if (elDialogBodyHtml)
            elDialogBodyHtml.innerHTML = this.layout.dialogBody(locales.dialog.title, locales.dialog.primary, locales.dialog.secondary, locales.common.buttonClose);
        this.renderCategoryTable();
        this.log(`Locales has been set with "${lang}"`);
    }
    /**
     * Main callback handlers
     **/
    getCallbackData(event) {
        const cookieData = this.cookies.getData();
        let categoriesAccepted, categoriesDeclined, categoriesChanged;
        switch (event) {
            case enums_1.preferenceStateEventKeys['custom']:
                categoriesAccepted = [...this.state.preferences.accepted];
                categoriesDeclined = [...this.state.preferences.declined];
                categoriesChanged = [...this.state.preferences.changed];
                break;
            case enums_1.preferenceStateEventKeys['all']:
                categoriesAccepted = [...this.options.consent.categories];
                categoriesDeclined = [];
                categoriesChanged = this.state.preferences.accepted.filter(x => this.options.consent.categories.includes(x));
                break;
            case enums_1.preferenceStateEventKeys['necessary']:
            default:
                categoriesAccepted = [...this.options.consent.necessaryCategories];
                categoriesDeclined = [...this.options.consent.categories.filter(x => !this.options.consent.necessaryCategories.includes(x))];
                categoriesChanged = this.state.preferences.accepted.filter(x => this.options.consent.necessaryCategories.includes(x));
                break;
        }
        return {
            preferences: {
                event,
                timestamp: (0, helpers_1.getTimestamp)(),
                accepted: categoriesAccepted,
                declined: categoriesDeclined,
                changed: categoriesChanged,
            },
            cookie: {
                categories: categoriesAccepted,
                uuid: this.uuid,
                revision: this.options.meta.revision,
                rfc: this.options.cookie.rfc,
                dateCreated: cookieData.createdDate,
                dateUpdated: cookieData.updatedDate,
                data: null,
            },
        };
    }
    eventCallbackHandler(event, callback) {
        const data = this.getCallbackData(event);
        const preferences = data.preferences;
        const cookie = data.cookie;
        this.banner.hide();
        this.dialog.hide();
        this.state.preferences = preferences;
        this.state.cookie = cookie;
        this.cookies.set(cookie);
        this.adjustCategoryToggle();
        this.historyPush(event);
        this.cookieLoaderController(event, data);
        this.scriptsAutoloadController(event, data);
        if (callback && typeof callback === 'function') {
            callback(cookie, preferences);
        }
        this.log(`Event callback "${event}" triggered`);
    }
    onAcceptAllHandler() {
        this.eventCallbackHandler(enums_1.preferenceStateEventKeys['all'], this.options.onAcceptAll);
    }
    onAcceptNecessaryHandler() {
        this.eventCallbackHandler(enums_1.preferenceStateEventKeys['necessary'], this.options.onAcceptNecessary);
    }
    onChangeHandler() {
        this.eventCallbackHandler(enums_1.preferenceStateEventKeys['custom'], this.options.onChange);
    }
    /**
     * Category toggle callback
     **/
    categoryToggleHandler(category, event) {
        const categories = this.options.consent.categories || [];
        const accepted = this.state.preferences.accepted ? (0, cloneDeep_1.default)(this.state.preferences.accepted) : [];
        let declined, changed;
        const index = (0, indexOf_1.default)(accepted, category);
        if (index > -1) {
            accepted.splice(index, 1);
        }
        else {
            accepted.push(category);
        }
        declined = categories.filter(x => !accepted.includes(x));
        changed = categories.filter(x => accepted.includes(x));
        this.state.preferences.accepted = accepted;
        this.state.preferences.declined = declined;
        this.state.preferences.changed = changed;
        this.historyPush(`toggle:${category}`);
        if (this.options.onToggle && typeof this.options.onToggle === 'function') {
            this.options.onToggle(this.state.preferences);
        }
        if (event && event.target) {
            const checked = (0, indexOf_1.default)(accepted, category) > -1;
            event.target.checked = checked && 'checked';
            event.target.classList.toggle(this.selectors.state.isChecked, checked);
        }
        this.state.categories.dirty = true;
        this.log('categoryToggleHandler', accepted, declined, changed);
    }
    adjustCategoryToggle() {
        const categories = this.options.consent.categories || [];
        const list = this.state.preferences.accepted || [];
        categories.map((ctg) => {
            const key = `${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${ctg}`;
            const nodes = document.querySelectorAll(`[${this.tokens.DATA_CCL_TOGGLE}="${key}"]`);
            nodes.forEach((node) => {
                const checked = (0, indexOf_1.default)(list, ctg) > -1;
                node.checked = checked && 'checked';
                node.classList.toggle(this.selectors.state.isChecked, checked);
            });
        });
    }
    /**
     * DOM events
     **/
    initButtonDomEvents() {
        this.nodes.showDialog().forEach((node) => { node.addEventListener('click', this.events.showDialog); });
        this.nodes.hideDialog().forEach((node) => { node.addEventListener('click', this.events.hideDialog); });
        this.nodes.showBanner().forEach((node) => { node.addEventListener('click', this.events.showBanner); });
        this.nodes.hideBanner().forEach((node) => { node.addEventListener('click', this.events.hideBanner); });
        this.nodes.acceptAll().forEach((node) => { node.addEventListener('click', this.events.acceptAll); });
        this.nodes.acceptNecessary().forEach((node) => { node.addEventListener('click', this.events.acceptNecessary); });
        this.nodes.saveChanges().forEach((node) => { node.addEventListener('click', this.events.saveChanges); });
        this.log(`Button events initiated`);
    }
    removeButtonDomEvents() {
        this.nodes.showDialog().forEach((node) => { node.removeEventListener('click', this.events.showDialog); });
        this.nodes.hideDialog().forEach((node) => { node.removeEventListener('click', this.events.hideDialog); });
        this.nodes.showBanner().forEach((node) => { node.removeEventListener('click', this.events.showBanner); });
        this.nodes.hideBanner().forEach((node) => { node.removeEventListener('click', this.events.hideBanner); });
        this.nodes.acceptAll().forEach((node) => { node.removeEventListener('click', this.events.acceptAll); });
        this.nodes.acceptNecessary().forEach((node) => { node.removeEventListener('click', this.events.acceptNecessary); });
        this.nodes.saveChanges().forEach((node) => { node.removeEventListener('click', this.events.saveChanges); });
        this.log(`Button events destroyed`);
    }
    initToggleDomEvents() {
        const categories = this.options.consent.categories || [];
        categories.map((category) => {
            const key = `${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${category}`;
            const nodes = document.querySelectorAll(`[${this.tokens.DATA_CCL_TOGGLE}="${key}"]`);
            nodes.forEach((node) => {
                node.addEventListener('change', (e) => this.events.toggleCategory(e, category));
            });
        });
        this.log(`Categories toggle events initiated`);
    }
    removeToggleDomEvents() {
        const categories = this.options.consent.categories || [];
        categories.map((ctg) => {
            const key = `${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${ctg}`;
            const nodes = document.querySelectorAll(`[${this.tokens.DATA_CCL_TOGGLE}="${key}"]`);
            nodes.forEach((node) => {
                node.removeEventListener('change', (e) => this.events.toggleCategory(e, ctg));
            });
        });
        this.log(`Categories toggle events destroyed`);
    }
    /**
     * Renderers
     **/
    renderCategoryTable(showTable = true) {
        const locales = this.getLocales();
        const targets = document.querySelectorAll(`[${this.tokens.DATA_CCL_TARGET}="${this.tokens.CATEGORIES_TABLE_CCL}"]`);
        const categories = this.options.consent.categories || [];
        const getCategoryToggle = (category) => {
            const id = `${this.selectors.categoryRows.toggleIdPrefix}${category}`;
            const disabled = (0, indexOf_1.default)(this.options.consent.necessaryCategories, category) > -1 || (0, indexOf_1.default)(this.options.consent.staticCategories, category) > -1;
            const _input = `<input type="checkbox" id="${id}" class="${this.selectors.categoryRows.toggleInputClassName}" value="${category}" ${this.tokens.DATA_CCL_TOGGLE}="${this.tokens.CATEGORY_TOGGLE_PFX_CCL}${category}" ${disabled ? 'disabled' : ''} />`;
            const _label = `<label for="${id}" aria-labelledby="${id}" class="${this.selectors.categoryRows.toggleLabelClassName}">${_input}</label>`;
            return `<span class="${this.selectors.categoryRows.toggleClassName}" tabindex="1">${_label}</span>`;
        };
        const getCategoryTableContent = (category) => {
            const list = this.options.consent.cookies[category] || [];
            let _heading = `<thead><tr>`;
            _heading += `<th>${locales.table.colName}</th>`;
            _heading += `<th>${locales.table.colDomain}</th>`;
            _heading += `<th>${locales.table.colExpiration}</th>`;
            _heading += `<th>${locales.table.colDescription}</th>`;
            _heading += `</tr></thead>`;
            let _body = `<tbody>`;
            list.map((row) => {
                _body += `<tr>`;
                _body += `<th>${row.name}</th>`;
                _body += `<td>${row.domain}</td>`;
                _body += `<td>${row.expiration}</td>`;
                _body += `<td>${row.description}</td>`;
                _body += `</tr>`;
            });
            _body += `</tbody>`;
            const _colgroup = `<colgroup><col style="width:auto;" /><col style="width:auto;" /><col style="width:150px;" /><col style="width:auto;" /></colgroup>`;
            return `${_colgroup}${_heading}${_body}`;
        };
        const getCategoryContent = (category) => {
            const loc = locales.categories[category];
            const _title = `<div class="${this.selectors.categoryRows.blockHeadingTitle}">${loc.title ? loc.title : `undefined`}</div>`;
            const _description = `<div class="${this.selectors.categoryRows.blockDescription}">${loc.description ? loc.description : `undefined`}</div>`;
            const _checkbox = `<div class="${this.selectors.categoryRows.blockHeadingToggle}">${getCategoryToggle(category)}</div>`;
            const _heading = `<div class="${this.selectors.categoryRows.blockHeading}">${_title}${_checkbox}</div>`;
            const _table = showTable && `<div class="${this.selectors.categoryRows.blockTable}"><table class="${this.selectors.categoryRows.categoryTableClassName}">${getCategoryTableContent(category)}</table></div>`;
            const _collapsible = `<div class="${this.selectors.categoryRows.blockCollapsible}">${_description}${_table}</div>`;
            return `<div class="${this.selectors.categoryRows.block}">${_heading}${_collapsible}</div>`;
        };
        const _category = (0, helpers_1.createElement)({
            className: this.selectors.categoryRows.categoryOuterClassName,
        });
        categories.map((ctg) => {
            const _content = (0, helpers_1.createElement)({
                tag: 'article',
                className: this.selectors.categoryRows.categoryRowClassName,
            });
            _content.appendChild((0, helpers_1.createElement)({
                className: this.selectors.categoryRows.categoryRowInnerClassName,
                html: getCategoryContent(ctg),
            }));
            _category.appendChild(_content);
        });
        if (targets) {
            this.state.categories.show = true;
            this.state.categories.table = showTable;
            targets.forEach((node) => {
                node.innerHTML = ``; // Clear before append to prevent content duplicities
                node.appendChild(_category);
            });
        }
        this.initToggleDomEvents();
        this.adjustCategoryToggle();
    }
    renderBannerElement() {
        const cookieData = this.cookies.getData();
        const locales = this.getLocales();
        const _wrapper = (0, helpers_1.createElement)({
            id: this.selectors.banner.wrapperId,
            className: this.selectors.banner.wrapperClassName,
            arias: {
                hidden: true,
            },
        });
        const _body = (0, helpers_1.createElement)({
            id: this.selectors.banner.bodyId,
            className: this.selectors.banner.bodyClassName,
            html: this.layout.bannerBody(locales.banner.title, locales.banner.content, cookieData.isExpiredRevision ? locales.revisionAlert : undefined),
        });
        const _actions = (0, helpers_1.createElement)({
            id: this.selectors.banner.actionsId,
            className: this.selectors.banner.actionsClassName,
        });
        const _btnAcceptAll = (0, helpers_1.createButtonElement)(this.options.banner.btnAcceptAllId, this.selectors.btn.acceptAllClassName, locales.common.buttonAcceptAll, this.tokens.BTN_ACCEPT_ALL_CCL);
        const _btnAcceptNecessary = (0, helpers_1.createButtonElement)(this.options.banner.btnAcceptNecessaryId, this.selectors.btn.acceptNecessaryClassName, locales.common.buttonAcceptNecessary, this.tokens.BTN_ACCEPT_NECESSARY_CCL);
        _actions.appendChild(_btnAcceptAll);
        _actions.appendChild(_btnAcceptNecessary);
        _wrapper.appendChild(_body);
        _wrapper.appendChild(_actions);
        document.body.appendChild(_wrapper);
    }
    renderDialogElement() {
        const locales = this.getLocales();
        const _wrapper = (0, helpers_1.createElement)({
            id: this.selectors.dialog.wrapperId,
            className: this.selectors.dialog.wrapperClassName,
            arias: {
                hidden: true,
            },
        });
        const _body = (0, helpers_1.createElement)({
            id: this.selectors.dialog.bodyId,
            className: this.selectors.dialog.bodyClassName,
            html: this.layout.dialogBody(locales.dialog.title, locales.dialog.primary, locales.dialog.secondary, locales.common.buttonClose),
        });
        const _actions = (0, helpers_1.createElement)({
            id: this.selectors.dialog.actionsId,
            className: this.selectors.dialog.actionsClassName,
        });
        const _btnAcceptAll = (0, helpers_1.createButtonElement)(this.options.dialog.btnAcceptAllId, this.selectors.btn.acceptAllClassName, locales.common.buttonAcceptAll, this.tokens.BTN_ACCEPT_ALL_CCL);
        const _btnAcceptNecessary = (0, helpers_1.createButtonElement)(this.options.dialog.btnAcceptNecessaryId, this.selectors.btn.acceptNecessaryClassName, locales.common.buttonAcceptNecessary, this.tokens.BTN_ACCEPT_NECESSARY_CCL);
        const _btnSave = (0, helpers_1.createButtonElement)(this.options.dialog.btnSaveId, this.selectors.btn.saveChangesClassName, locales.common.buttonSave, this.tokens.BTN_SAVE_CCL);
        _actions.appendChild(_btnAcceptAll);
        _actions.appendChild(_btnAcceptNecessary);
        _actions.appendChild(_btnSave);
        _wrapper.appendChild(_body);
        _wrapper.appendChild(_actions);
        document.body.appendChild(_wrapper);
        this.options.consent.showCategory && this.renderCategoryTable(this.options.consent.showCategoryTable);
    }
    /**
     * Presenters
     **/
    presenterController(cookieData) {
        if (cookieData.current) {
            this.log('Cookie was found:', cookieData);
            // Set found cookie to state
            this.state.cookie = cookieData.current;
            // Set preference state from cookie data and update state for category toggle
            if (cookieData.current.categories) {
                const categories = [...cookieData.current.categories];
                this.state.preferences.accepted = categories;
                this.state.preferences.declined = this.options.consent.categories.filter(ctg => !categories.includes(ctg));
                this.adjustCategoryToggle();
            }
            // Check when revision has changed
            if (cookieData.isExpiredRevision) {
                this.state.revisionExpired = true;
                this.banner.show(this.options.meta.delay);
                if (this.options.onExpired && typeof this.options.onExpired === 'function')
                    this.options.onExpired('revision', this.state);
            }
            // Check if date is expired
            if (cookieData.isExpiredDate) {
                this.banner.show(this.options.meta.delay);
                if (this.options.onExpired && typeof this.options.onExpired === 'function')
                    this.options.onExpired('date', this.state);
            }
        }
        else {
            this.log('Cookie not found');
            // Show banner when cookie is not found
            this.banner.show(this.options.meta.delay);
            // Set all preferences when no cookie is found
            this.state.preferences.accepted = this.options.consent.categories;
            // Adjust selected category toggles
            this.adjustCategoryToggle();
        }
        // On init callback
        if (this.options.onInit && typeof this.options.onInit === 'function') {
            this.options.onInit(this.state);
        }
        // Prepare available languages and set to state
        if (this.options.locales) {
            this.state.languages = [];
            for (const lang in this.options.locales) {
                this.state.languages.push(lang);
            }
        }
        // Change locales when calling re-init()
        if (this.state.init && (this.state.language !== this.options.language)) {
            this.state = (0, cloneDeep_1.default)(const_1.DEFAULT_STATE);
            this.changeLanguage(this.options.language);
        }
    }
    presenter() {
        const cookieData = this.cookies.getData();
        this.state.environment = "development";
        this.state.preferences.timestamp = (0, helpers_1.getTimestamp)();
        this.state.preferences.event = enums_1.preferenceEventKeys['init'];
        this.state.init = true;
        this.banner.init();
        this.dialog.init();
        this.presenterController(cookieData);
        this.initButtonDomEvents();
    }
    /**
     * Initialize
     **/
    init() {
        const bot = (0, helpers_1.isClientBot)();
        const shouldServiceInit = (!(this.options.meta.hideFromBots && bot));
        const runner = () => {
            const windowProps = {
                getState: this._getState.bind(this),
                getPreferences: this._getPreferences.bind(this),
                getOptions: this._getOptions.bind(this),
                getNodes: this._getNodes.bind(this),
                getSelectors: this._getSelectors.bind(this),
                init: this.init.bind(this),
                initButtonDomEvents: this.initButtonDomEvents.bind(this),
                removeButtonDomEvents: this.removeButtonDomEvents.bind(this),
                initToggleDomEvents: this.initToggleDomEvents.bind(this),
                removeToggleDomEvents: this.removeToggleDomEvents.bind(this),
                changeLanguage: this.changeLanguage.bind(this),
                changeLocales: this.setLocalesContent.bind(this),
                showBanner: this.banner.show.bind(this),
                hideBanner: this.banner.hide.bind(this),
                destroyBanner: this.banner.destroy.bind(this),
                showDialog: this.dialog.show.bind(this),
                hideDialog: this.dialog.hide.bind(this),
                destroyDialog: this.dialog.destroy.bind(this),
                getCookie: this.cookies.get.bind(this),
                destroyCookie: this.cookies.destroy.bind(this),
            };
            this.presenter();
            this.historyPush('init');
            this.log(`## '${const_1.DEFAULT_META_NAME}' loaded in 'window.CookieConsentLayer'`, windowProps);
            window.CookieConsentLayer = windowProps;
            return windowProps;
        };
        return shouldServiceInit && runner();
    }
}
exports["default"] = CookieConsentLayer;


/***/ }),

/***/ "./CookieConsentLayer/const.ts":
/*!*************************************!*\
  !*** ./CookieConsentLayer/const.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_OPTIONS = exports.DEFAULT_STATE = exports.DEFAULT_COOKIE_NAME = exports.DEFAULT_META_NAME = void 0;
exports.DEFAULT_META_NAME = 'CookieConsentLayer';
exports.DEFAULT_COOKIE_NAME = 'CC_LAYER';
exports.DEFAULT_STATE = {
    init: false,
    environment: undefined,
    revisionExpired: false,
    history: ['pending'],
    banner: {
        render: false,
        show: false,
        destroyed: false, // When banner is removed from DOM
    },
    dialog: {
        render: false,
        show: false,
        destroyed: false, // When dialog is removed from DOM
    },
    categories: {
        show: false,
        table: false,
        dirty: false,
    },
    language: 'en-US',
    languages: ['en-US'],
    cookie: null,
    preferences: {
        timestamp: null,
        event: null,
        accepted: [],
        declined: [],
        changed: [], // Categories what was changed, if any
    },
};
exports.DEFAULT_OPTIONS = {
    meta: {
        name: exports.DEFAULT_COOKIE_NAME,
        revision: 0,
        debug: false,
        delay: 0,
        classPrefix: 'ccl-',
        hideFromBots: false,
        ltr: true, // TODO: If you want to keep text right-to-left, set to false
    },
    cookie: {
        name: exports.DEFAULT_COOKIE_NAME,
        domain: '.your-domain.some',
        expiration: 365,
        path: '/',
        sameSite: 'Lax',
        rfc: false, // RFC format of cookie, otherwise is json as string
    },
    scripts: {
        autoload: false,
        mode: 'opt-in', // TODO: ['opt-in', 'opt-out']
    },
    consent: {
        force: false,
        categories: ['necessary', 'analytics', 'marketing', 'functional', 'personalization'],
        necessaryCategories: ['necessary'],
        staticCategories: [],
        showCategory: true,
        showCategoryTable: true,
        autoClearCookies: false,
        cookies: {
            necessary: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            analytics: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            marketing: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            functional: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
            personalization: [
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
                {
                    name: 'CookieConsentScope',
                    domain: '.your-domain.some',
                    expiration: 365,
                    description: 'Cookie description',
                    regex: false,
                },
            ],
        },
    },
    banner: {
        id: 'CookieConsentLayerBanner',
        btnAcceptAllId: 'CookieConsentLayerBannerBtnAcceptAll',
        btnAcceptNecessaryId: 'CookieConsentLayerBannerBtnAcceptNecessary',
        layout: 'cloud',
        position: 'bottom center',
        transition: 'default', // TODO: default/slide/zoom
    },
    dialog: {
        id: 'CookieConsentLayerDialog',
        btnAcceptAllId: 'CookieConsentLayerDialogBtnAcceptAll',
        btnAcceptNecessaryId: 'CookieConsentLayerDialogBtnAcceptNecessary',
        btnSaveId: 'CookieConsentLayerDialogBtnSave',
        layout: 'box',
        position: 'middle',
        transition: 'default', // TODO: default/slide/zoom
    },
    language: 'en-US',
    locales: {
        'en-US': {
            common: {
                buttonAcceptAll: 'Accept all',
                buttonAcceptNecessary: 'Accept necessary',
                buttonSave: 'Save settings',
                buttonClose: 'Close',
            },
            banner: {
                title: 'We use cookies!',
                content: `Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-ccl="show_dialog">Let me choose</button>`,
            },
            dialog: {
                title: 'Cookie preferences',
                primary: `I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#">privacy policy</a>.`,
                secondary: `This is secondary content block ... for some reasons ... with <a href="#" target="_blank">outer link</a> or <button type="button" data-ccl="hide_dialog">close dialog</button>`
            },
            revisionAlert: 'Sorry, but we changed our policy or whatever, so you must accept cookies again.',
            table: {
                colName: 'Name',
                colDomain: 'Domain',
                colExpiration: 'Expiration',
                colDescription: 'Description',
            },
            categories: {
                necessary: {
                    title: 'Strictly necessary cookies',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                },
                analytics: {
                    title: 'Analytics and performance cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past',
                },
                marketing: {
                    title: 'Marketing and advertisement cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                },
                functional: {
                    title: 'Functional cookies',
                    description: 'Functional and not specified cookies',
                },
                personalization: {
                    title: 'Personalization cookies',
                    description: 'Personalization and not specified cookies',
                },
            },
        },
        'cs-CZ': {
            common: {
                buttonAcceptAll: 'Přimout vše',
                buttonAcceptNecessary: 'Přimout nezbytné',
                buttonSave: 'Uložit změny',
                buttonClose: 'Zavřít',
            },
            banner: {
                title: 'My používáme cookies!',
                content: `Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-ccl="show_dialog">Let me choose</button>`,
            },
            dialog: {
                title: 'Preference koláčků',
                primary: `I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#">privacy policy</a>.`,
                secondary: `This is secondary content block ... for some reasons ... with <a href="#" target="_blank">outer link</a> or <button type="button" data-ccl="hide_dialog">close dialog</button>`
            },
            revisionAlert: 'Omlouváme se, ale došlo ke změně v našich pravidlech cookies a proto to musíte potvrdit znovu.',
            table: {
                colName: 'Název',
                colDomain: 'Doména',
                colExpiration: 'Expirace',
                colDescription: 'Poznámka',
            },
            categories: {
                necessary: {
                    title: 'Nezbytné cookies pro provoz',
                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                },
                analytics: {
                    title: 'Analytické cookies',
                    description: 'These cookies allow the website to remember the choices you have made in the past',
                },
                marketing: {
                    title: 'Marketingové cookies',
                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                },
                functional: {
                    title: 'Functional cookies',
                    description: 'Functional and not specified cookies',
                },
                personalization: {
                    title: 'Personalization cookies',
                    description: 'Personalization and not specified cookies',
                },
            },
        },
    },
    onAcceptAll: function (cookie, preferences) { },
    onAcceptNecessary: function (cookie, preferences) { },
    onChange: function (cookie, preferences) { },
    onInit: function (state) { },
    onToggle: function (preferences) { },
    onExpired: function (reason, state) { },
    onError: function (reason, message, state) { },
};


/***/ }),

/***/ "./CookieConsentLayer/enums.ts":
/*!*************************************!*\
  !*** ./CookieConsentLayer/enums.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scriptsModeKeys = exports.preferenceStateEventKeys = exports.environmentTypeKeys = exports.preferenceEventKeys = void 0;
var preferenceEventKeys;
(function (preferenceEventKeys) {
    preferenceEventKeys["init"] = "init";
})(preferenceEventKeys = exports.preferenceEventKeys || (exports.preferenceEventKeys = {}));
var environmentTypeKeys;
(function (environmentTypeKeys) {
    environmentTypeKeys["development"] = "development";
    environmentTypeKeys["production"] = "production";
})(environmentTypeKeys = exports.environmentTypeKeys || (exports.environmentTypeKeys = {}));
var preferenceStateEventKeys;
(function (preferenceStateEventKeys) {
    preferenceStateEventKeys["all"] = "all";
    preferenceStateEventKeys["necessary"] = "necessary";
    preferenceStateEventKeys["custom"] = "custom";
})(preferenceStateEventKeys = exports.preferenceStateEventKeys || (exports.preferenceStateEventKeys = {}));
var scriptsModeKeys;
(function (scriptsModeKeys) {
    scriptsModeKeys["opt-in"] = "opt-in";
    scriptsModeKeys["opt-out"] = "opt-out";
})(scriptsModeKeys = exports.scriptsModeKeys || (exports.scriptsModeKeys = {}));


/***/ }),

/***/ "./CookieConsentLayer/index.ts":
/*!*************************************!*\
  !*** ./CookieConsentLayer/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CookieConsentLayer = void 0;
var CookieConsentLayer_1 = __webpack_require__(/*! ./CookieConsentLayer */ "./CookieConsentLayer/CookieConsentLayer.ts");
Object.defineProperty(exports, "CookieConsentLayer", ({ enumerable: true, get: function () { return __importDefault(CookieConsentLayer_1).default; } }));
__exportStar(__webpack_require__(/*! ./enums */ "./CookieConsentLayer/enums.ts"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./CookieConsentLayer/types.ts"), exports);


/***/ }),

/***/ "./CookieConsentLayer/types.ts":
/*!*************************************!*\
  !*** ./CookieConsentLayer/types.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./helpers.ts":
/*!********************!*\
  !*** ./helpers.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createButtonElement = exports.createElement = exports.setCookie = exports.getCookie = exports.isClientBot = exports.getToken = exports.getTimestamp = void 0;
const getTimestamp = () => Math.round(new Date().getTime() / 1000);
exports.getTimestamp = getTimestamp;
const getToken = (length = 12) => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
exports.getToken = getToken;
const isClientBot = () => {
    // https://github.com/monperrus/crawler-user-agents
    let isBot = false;
    const botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    const re = new RegExp(botPattern, 'i');
    const userAgent = navigator.userAgent;
    if (re.test(userAgent))
        isBot = true;
    return isBot;
};
exports.isClientBot = isClientBot;
const getCookie = (name) => {
    let cookie = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookie) === 0) {
            return c.substring(cookie.length, c.length);
        }
    }
    return '';
};
exports.getCookie = getCookie;
const setCookie = (name, value, expiration = 1) => {
    const d = new Date();
    d.setTime(d.getTime() + expiration * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
};
exports.setCookie = setCookie;
const createElement = ({ tag = 'div', type, id, className, css, text, html, cclData, cclTarget, cclToggle, arias, on }) => {
    const element = document.createElement(tag);
    if (type)
        element.type = type;
    if (id)
        element.id = id;
    if (className)
        element.className = className;
    if (css)
        element.style.cssText = css;
    if (text)
        element.innerText = text;
    if (html)
        element.innerHTML = html;
    if (cclData)
        element.dataset['ccl'] = cclData;
    if (cclTarget)
        element.dataset['ccl-target'] = cclTarget;
    if (cclToggle)
        element.dataset['ccl-toggle'] = cclToggle;
    if (arias) {
        if (arias.label)
            element.ariaLabel = arias.label;
        if (arias.labeledBy)
            element.ariaLabelledBy = arias.labeledBy;
        if (arias.modal)
            element.ariaModal = arias.modal;
        if (arias.hidden)
            element.ariaHidden = String(arias.hidden);
        if (arias.describedBy)
            element.ariaDescribedBy = arias.describedBy;
    }
    if (on) {
        if (on.click)
            element.onclick = on.click;
        if (on.hover)
            element.onmouseover = on.hover;
        if (on.focus)
            element.onfocus = on.focus;
        if (on.change)
            element.onchange = on.change;
        if (on.blur)
            element.onblur = on.blur;
        if (on.dblclick)
            element.ondblclick = on.dblclick;
    }
    return element;
};
exports.createElement = createElement;
const createButtonElement = (id, className, text, cclData) => {
    return (0, exports.createElement)({
        id,
        className,
        text,
        cclData,
        tag: 'button',
        type: 'button',
        arias: {
            label: `button`,
        },
    });
};
exports.createButtonElement = createButtonElement;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./CookieConsentLayer */ "./CookieConsentLayer/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./init */ "./init.ts"), exports);


/***/ }),

/***/ "./init.ts":
/*!*****************!*\
  !*** ./init.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const CookieConsentLayer_1 = __webpack_require__(/*! ./CookieConsentLayer */ "./CookieConsentLayer/index.ts");
const initCookieConsentLayer = (options, scope, uuid) => new CookieConsentLayer_1.CookieConsentLayer(options, scope, uuid);
window.initCookieConsentLayer = initCookieConsentLayer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./index.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLGdEQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ05BLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLGNBQWMsbUJBQU8sQ0FBQyxzREFBWTtBQUNsQyxjQUFjLG1CQUFPLENBQUMsc0RBQVk7QUFDbEMsY0FBYyxtQkFBTyxDQUFDLHNEQUFZOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0JBLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFtQjtBQUNoRCxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDbEQsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWlCO0FBQzVDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjtBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLGdEQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ05BLG9CQUFvQixtQkFBTyxDQUFDLGtFQUFrQjtBQUM5QyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBbUI7QUFDaEQsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFnQjtBQUMxQyxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLGdEQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ05BLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLFdBQVcsbUJBQU8sQ0FBQyxnREFBUzs7QUFFNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNOQSxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYztBQUN0QyxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLHdEQUFhO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyx3REFBYTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsd0RBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDMUJBLFdBQVcsbUJBQU8sQ0FBQyxnREFBUzs7QUFFNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNMQSxXQUFXLG1CQUFPLENBQUMsZ0RBQVM7O0FBRTVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDTEEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLGdEQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDeEJBLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGtCQUFrQixtQkFBTyxDQUFDLDREQUFlO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxvREFBVztBQUNqQyxlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMsY0FBYyxtQkFBTyxDQUFDLHNEQUFZO0FBQ2xDLG1CQUFtQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBLHNCQUFzQixtQkFBTyxDQUFDLHNFQUFvQjtBQUNsRCxTQUFTLG1CQUFPLENBQUMsMENBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ25CQSxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDbEQsU0FBUyxtQkFBTyxDQUFDLDBDQUFNOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzNCQSxTQUFTLG1CQUFPLENBQUMsMENBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQkEsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7QUFDeEMsV0FBVyxtQkFBTyxDQUFDLDhDQUFROztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaEJBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQyxrREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hCQSxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN4QkEsWUFBWSxtQkFBTyxDQUFDLGtEQUFVO0FBQzlCLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFnQjtBQUMxQyxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTtBQUN4QyxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBaUI7QUFDNUMsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFnQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDOUMsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7QUFDeEMsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWlCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyxvREFBVztBQUNoQyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMsb0VBQW1CO0FBQ2hELHNCQUFzQixtQkFBTyxDQUFDLHNFQUFvQjtBQUNsRCxjQUFjLG1CQUFPLENBQUMsb0RBQVc7QUFDakMsZUFBZSxtQkFBTyxDQUFDLHNEQUFZO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyxnREFBUztBQUM3QixlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLGdEQUFTO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyw4Q0FBUTtBQUMzQixhQUFhLG1CQUFPLENBQUMsa0RBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyS0EsZUFBZSxtQkFBTyxDQUFDLHNEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3ZCQSxvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBa0I7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGNBQWMsbUJBQU8sQ0FBQyxvREFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBLGFBQWEsbUJBQU8sQ0FBQyxvREFBVztBQUNoQyxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYztBQUN0QyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMzQkEsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWtCO0FBQzlDLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLG9CQUFvQixtQkFBTyxDQUFDLGtFQUFrQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLG1CQUFtQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqQkEsYUFBYSxtQkFBTyxDQUFDLG9EQUFXO0FBQ2hDLG1CQUFtQixtQkFBTyxDQUFDLDhEQUFnQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWEEsaUJBQWlCLG1CQUFPLENBQUMsMERBQWM7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLHdEQUFhO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyxzREFBWTtBQUNuQyxlQUFlLG1CQUFPLENBQUMsd0RBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDOUNBLGFBQWEsbUJBQU8sQ0FBQyxvREFBVztBQUNoQyxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakJBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyxzREFBWTtBQUNuQyxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMzREEsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzdCQSxlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoQ0EsWUFBWSxtQkFBTyxDQUFDLGtEQUFVO0FBQzlCLHVCQUF1QixtQkFBTyxDQUFDLHdFQUFxQjtBQUNwRCxjQUFjLG1CQUFPLENBQUMsc0RBQVk7QUFDbEMsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWtCO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyxzREFBWTtBQUNuQyxhQUFhLG1CQUFPLENBQUMsa0RBQVU7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLHNEQUFZOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7O0FDekNBLHVCQUF1QixtQkFBTyxDQUFDLHdFQUFxQjtBQUNwRCxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDMUMsc0JBQXNCLG1CQUFPLENBQUMsc0VBQW9CO0FBQ2xELGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLHNCQUFzQixtQkFBTyxDQUFDLHNFQUFvQjtBQUNsRCxrQkFBa0IsbUJBQU8sQ0FBQyw0REFBZTtBQUN6QyxjQUFjLG1CQUFPLENBQUMsb0RBQVc7QUFDakMsd0JBQXdCLG1CQUFPLENBQUMsd0VBQXFCO0FBQ3JELGVBQWUsbUJBQU8sQ0FBQyxzREFBWTtBQUNuQyxpQkFBaUIsbUJBQU8sQ0FBQywwREFBYztBQUN2QyxlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMsb0JBQW9CLG1CQUFPLENBQUMsZ0VBQWlCO0FBQzdDLG1CQUFtQixtQkFBTyxDQUFDLDhEQUFnQjtBQUMzQyxjQUFjLG1CQUFPLENBQUMsc0RBQVk7QUFDbEMsb0JBQW9CLG1CQUFPLENBQUMsZ0VBQWlCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDN0ZBLGVBQWUsbUJBQU8sQ0FBQyxzREFBWTtBQUNuQyxlQUFlLG1CQUFPLENBQUMsd0RBQWE7QUFDcEMsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hCQSxlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMscUJBQXFCLG1CQUFPLENBQUMsb0VBQW1CO0FBQ2hELGVBQWUsbUJBQU8sQ0FBQyxzREFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBLHNCQUFzQixtQkFBTyxDQUFDLHNFQUFvQjs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2JBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNmQSxXQUFXLG1CQUFPLENBQUMsZ0RBQVM7O0FBRTVCO0FBQ0Esa0JBQWtCLEtBQTBCOztBQUU1QztBQUNBLGdDQUFnQyxRQUFhOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNsQ0EsdUJBQXVCLG1CQUFPLENBQUMsd0VBQXFCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hCQSxhQUFhLG1CQUFPLENBQUMsb0RBQVc7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakJBLHVCQUF1QixtQkFBTyxDQUFDLHdFQUFxQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ25CQSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDMUMsc0JBQXNCLG1CQUFPLENBQUMsc0VBQW9COztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRLFVBQVU7QUFDN0IsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3ZDQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLFVBQVU7QUFDN0IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLFVBQVU7QUFDN0IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBLFdBQVcsbUJBQU8sQ0FBQyxnREFBUzs7QUFFNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNMQSxlQUFlLG1CQUFPLENBQUMsd0RBQWE7QUFDcEMscUJBQXFCLG1CQUFPLENBQUMsb0VBQW1COztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN4QkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLElBQUk7QUFDSixDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0Esd0JBQXdCLHFCQUFNLGdCQUFnQixxQkFBTSxJQUFJLHFCQUFNLHNCQUFzQixxQkFBTTs7QUFFMUY7Ozs7Ozs7Ozs7O0FDSEEscUJBQXFCLG1CQUFPLENBQUMsb0VBQW1CO0FBQ2hELGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLFdBQVcsbUJBQU8sQ0FBQyw4Q0FBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFtQjtBQUNoRCxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBaUI7QUFDNUMsYUFBYSxtQkFBTyxDQUFDLGtEQUFVOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoQkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakJBLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsd0RBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoQkEsY0FBYyxtQkFBTyxDQUFDLHNEQUFZOztBQUVsQztBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ0xBLGFBQWEsbUJBQU8sQ0FBQyxvREFBVzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM3Q0Esa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFhOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7QUM3QkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7QUFDdEMsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWlCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFhOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDeEJBLGVBQWUsbUJBQU8sQ0FBQyx3REFBYTtBQUNwQyxVQUFVLG1CQUFPLENBQUMsOENBQVE7QUFDMUIsY0FBYyxtQkFBTyxDQUFDLHNEQUFZO0FBQ2xDLFVBQVUsbUJBQU8sQ0FBQyw4Q0FBUTtBQUMxQixjQUFjLG1CQUFPLENBQUMsc0RBQVk7QUFDbEMsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLHdEQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1pBLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaEJBLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDN0JBLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0QkEsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWlCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDekJBLHVCQUF1QixtQkFBTyxDQUFDLHdFQUFxQjtBQUNwRCxvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDOUMsa0JBQWtCLG1CQUFPLENBQUMsOERBQWdCO0FBQzFDLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFnQjtBQUMxQyxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBb0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDNUVBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjtBQUM1QyxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN4QkEsU0FBUyxtQkFBTyxDQUFDLDBDQUFNO0FBQ3ZCLGtCQUFrQixtQkFBTyxDQUFDLDREQUFlO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxzREFBWTtBQUNsQyxlQUFlLG1CQUFPLENBQUMsc0RBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDZEEsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNaQSxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2xDQSxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNsQkEsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWlCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2ZBLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDekJBLFdBQVcsbUJBQU8sQ0FBQyxnREFBUztBQUM1QixnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYztBQUN0QyxVQUFVLG1CQUFPLENBQUMsOENBQVE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQkEsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2pCQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNmQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNmQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyQkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7O0FBRXRDO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDTEEsY0FBYyxtQkFBTyxDQUFDLHNEQUFZOztBQUVsQztBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ25CQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFeEM7QUFDQSxrQkFBa0IsS0FBMEI7O0FBRTVDO0FBQ0EsZ0NBQWdDLFFBQWE7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNkQSxZQUFZLG1CQUFPLENBQUMsa0RBQVU7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkNBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3BCQSxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDbEQsZUFBZSxtQkFBTyxDQUFDLHdEQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3BDQSxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2JBLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLFVBQVUsbUJBQU8sQ0FBQyw4Q0FBUTtBQUMxQixlQUFlLG1CQUFPLENBQUMsd0RBQWE7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEdBQUc7QUFDZCxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNsQkEsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxJQUFJLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQSxZQUFZLFFBQVEsSUFBSSxRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3BCQSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsd0RBQWE7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxHQUFHO0FBQ2QsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3pDQSxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDbEQsbUJBQW1CLG1CQUFPLENBQUMsOERBQWdCOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbUJBQW1CO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3pCQSxpQkFBaUIsbUJBQU8sQ0FBQywwREFBYztBQUN2QyxlQUFlLG1CQUFPLENBQUMsc0RBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0REFBZTtBQUN6QyxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNoQ0EsV0FBVyxtQkFBTyxDQUFDLGdEQUFTO0FBQzVCLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFhOztBQUVyQztBQUNBLGtCQUFrQixLQUEwQjs7QUFFNUM7QUFDQSxnQ0FBZ0MsUUFBYTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JDQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTtBQUN4QyxlQUFlLG1CQUFPLENBQUMsc0RBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbENBLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyx3REFBYTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDNUJBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFpQjtBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzdEQSxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYztBQUN0QyxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYztBQUN0QyxlQUFlLG1CQUFPLENBQUMsd0RBQWE7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzFCQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBZTtBQUN4QyxtQkFBbUIsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzVCQSx1QkFBdUIsbUJBQU8sQ0FBQyx3RUFBcUI7QUFDcEQsZ0JBQWdCLG1CQUFPLENBQUMsMERBQWM7QUFDdEMsZUFBZSxtQkFBTyxDQUFDLHdEQUFhOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMxQkEsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWtCO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyx3REFBYTtBQUNwQyxrQkFBa0IsbUJBQU8sQ0FBQyw0REFBZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3BDQSxvQkFBb0IsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDOUMsaUJBQWlCLG1CQUFPLENBQUMsNERBQWU7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsNERBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9CQSxnQkFBZ0IsbUJBQU8sQ0FBQywwREFBYztBQUN0QyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUSxJQUFJLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRLElBQUksUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVEsZ0JBQWdCLElBQUksZ0JBQWdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2pCQSxlQUFlLG1CQUFPLENBQUMsc0RBQVk7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN6Q0EsZUFBZSxtQkFBTyxDQUFDLHNEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkNBLGVBQWUsbUJBQU8sQ0FBQyx3REFBYTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLHNEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0RBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFlO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQyxrREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLFdBQVc7QUFDWDtBQUNBLGNBQWMsUUFBUTtBQUN0QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMvQkE7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0NBQW9DLG1CQUFPLENBQUMsNkRBQWtCO0FBQzlELGdDQUFnQyxtQkFBTyxDQUFDLHFEQUFjO0FBQ3RELGtDQUFrQyxtQkFBTyxDQUFDLHlEQUFnQjtBQUMxRCxrQkFBa0IsbUJBQU8sQ0FBQyxnQ0FBWTtBQUN0QyxnQkFBZ0IsbUJBQU8sQ0FBQyw4Q0FBUztBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQyw4Q0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHlDQUF5QyxJQUFJLE1BQU07QUFDakcsZ0RBQWdELDJDQUEyQyxJQUFJLFFBQVE7QUFDdkcsMERBQTBELCtCQUErQixXQUFXLDRDQUE0QyxJQUFJLFNBQVM7QUFDN0osMEJBQTBCLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUztBQUN4RCxhQUFhO0FBQ2I7QUFDQSx3REFBd0QscUJBQXFCLElBQUksZ0NBQWdDLFdBQVcseUNBQXlDLElBQUksTUFBTTtBQUMvSyw4Q0FBOEMseUNBQXlDLElBQUksTUFBTTtBQUNqRyxnREFBZ0QsMkNBQTJDLElBQUksUUFBUTtBQUN2RywrREFBK0QsNkNBQTZDLElBQUksVUFBVTtBQUMxSCx1Q0FBdUMsNEJBQTRCLElBQUksaUNBQWlDLFdBQVcseUNBQXlDO0FBQzVKLDBCQUEwQixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVztBQUMzRSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDhCQUE4QixTQUFTLDhCQUE4QjtBQUM1Ryw2Q0FBNkMsOEJBQThCLFNBQVMsOEJBQThCO0FBQ2xILHlDQUF5Qyw4QkFBOEIsU0FBUyw4QkFBOEI7QUFDOUcsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FLDJCQUEyQix1QkFBdUI7QUFDbEQsa0NBQWtDLDhCQUE4QjtBQUNoRSx1Q0FBdUMsOEJBQThCO0FBQ3JFLDBDQUEwQyw4QkFBOEI7QUFDeEUseUNBQXlDLDhCQUE4QjtBQUN2RSw4QkFBOEIsdUJBQXVCO0FBQ3JELHFDQUFxQyw4QkFBOEI7QUFDbkUsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FLDJCQUEyQix1QkFBdUI7QUFDbEQsa0NBQWtDLDhCQUE4QjtBQUNoRSx1Q0FBdUMsOEJBQThCO0FBQ3JFLHVDQUF1Qyw4QkFBOEI7QUFDckUsdUNBQXVDLDhCQUE4QjtBQUNyRSx5Q0FBeUMsOEJBQThCO0FBQ3ZFLDJDQUEyQyw4QkFBOEI7QUFDekUsOEJBQThCLHVCQUF1QjtBQUNyRCxxQ0FBcUMsOEJBQThCO0FBQ25FLGFBQWE7QUFDYjtBQUNBLHlDQUF5Qyw4QkFBOEI7QUFDdkUsMkNBQTJDLDhCQUE4QjtBQUN6RSw4Q0FBOEMsOEJBQThCO0FBQzVFLDJDQUEyQyw4QkFBOEI7QUFDekUsbUNBQW1DLFVBQVU7QUFDN0Msb0NBQW9DLDhCQUE4QjtBQUNsRSx5Q0FBeUMsOEJBQThCO0FBQ3ZFLHlDQUF5Qyw4QkFBOEI7QUFDdkUsMEJBQTBCLDhCQUE4QjtBQUN4RCxpQ0FBaUMsOEJBQThCO0FBQy9ELHVDQUF1Qyw4QkFBOEI7QUFDckUsK0JBQStCLDhCQUE4QjtBQUM3RCxxQ0FBcUMsOEJBQThCO0FBQ25FLHNDQUFzQyw4QkFBOEI7QUFDcEUscUNBQXFDLDhCQUE4QjtBQUNuRSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNERBQTRELHFCQUFxQixJQUFJLGdDQUFnQztBQUNySCw0REFBNEQscUJBQXFCLElBQUksZ0NBQWdDO0FBQ3JILDREQUE0RCxxQkFBcUIsSUFBSSxnQ0FBZ0M7QUFDckgsNERBQTRELHFCQUFxQixJQUFJLGdDQUFnQztBQUNySCwyREFBMkQscUJBQXFCLElBQUksK0JBQStCO0FBQ25ILGlFQUFpRSxxQkFBcUIsSUFBSSxxQ0FBcUM7QUFDL0gsNkRBQTZELHFCQUFxQixJQUFJLHlCQUF5QjtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sR0FBRyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQkFBK0I7QUFDL0QsU0FBUztBQUNUO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRSxTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0MsMEJBQTBCO0FBQzFELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEtBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DLEVBQUUsSUFBSTtBQUNyRSx3REFBd0QsNEJBQTRCLElBQUksSUFBSTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5REFBeUQ7QUFDN0csb0RBQW9ELHlEQUF5RDtBQUM3RyxvREFBb0QseURBQXlEO0FBQzdHLG9EQUFvRCx5REFBeUQ7QUFDN0csbURBQW1ELHdEQUF3RDtBQUMzRyx5REFBeUQsOERBQThEO0FBQ3ZILHFEQUFxRCwwREFBMEQ7QUFDL0c7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDREQUE0RDtBQUNoSCxvREFBb0QsNERBQTREO0FBQ2hILG9EQUFvRCw0REFBNEQ7QUFDaEgsb0RBQW9ELDREQUE0RDtBQUNoSCxtREFBbUQsMkRBQTJEO0FBQzlHLHlEQUF5RCxpRUFBaUU7QUFDMUgscURBQXFELDZEQUE2RDtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9DQUFvQyxFQUFFLFNBQVM7QUFDMUUsd0RBQXdELDRCQUE0QixJQUFJLElBQUk7QUFDNUY7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQ0FBb0MsRUFBRSxJQUFJO0FBQ3JFLHdEQUF3RCw0QkFBNEIsSUFBSSxJQUFJO0FBQzVGO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDRCQUE0QixJQUFJLGlDQUFpQztBQUN2SDtBQUNBO0FBQ0EsMEJBQTBCLDJDQUEyQyxFQUFFLFNBQVM7QUFDaEY7QUFDQSx5REFBeUQsR0FBRyxXQUFXLGlEQUFpRCxXQUFXLFNBQVMsSUFBSSw0QkFBNEIsSUFBSSxvQ0FBb0MsRUFBRSxTQUFTLElBQUksNEJBQTRCO0FBQy9QLDBDQUEwQyxHQUFHLHFCQUFxQixHQUFHLFdBQVcsaURBQWlELElBQUksT0FBTztBQUM1SSxtQ0FBbUMsNENBQTRDLGlCQUFpQixPQUFPO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRCwrQkFBK0Isd0JBQXdCO0FBQ3ZELCtCQUErQiw0QkFBNEI7QUFDM0QsK0JBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDLGdDQUFnQyxXQUFXO0FBQzNDLGdDQUFnQyxlQUFlO0FBQy9DLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQSxnRUFBZ0UsMkJBQTJCLDRCQUE0QiwyQkFBMkI7QUFDbEosc0JBQXNCLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOENBQThDLElBQUksb0NBQW9DO0FBQ2hJLGdEQUFnRCw2Q0FBNkMsSUFBSSxnREFBZ0Q7QUFDakosNkNBQTZDLCtDQUErQyxJQUFJLDRCQUE0QjtBQUM1SCw0Q0FBNEMseUNBQXlDLElBQUksT0FBTyxFQUFFLFVBQVU7QUFDNUcsdURBQXVELHVDQUF1QyxrQkFBa0IsbURBQW1ELElBQUksa0NBQWtDO0FBQ3pNLGdEQUFnRCw2Q0FBNkMsSUFBSSxhQUFhLEVBQUUsT0FBTztBQUN2SCxrQ0FBa0Msa0NBQWtDLElBQUksU0FBUyxFQUFFLGFBQWE7QUFDaEc7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQThCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7OztBQ3R1QkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCLEdBQUcscUJBQXFCLEdBQUcsMkJBQTJCLEdBQUcseUJBQXlCO0FBQ3pHLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FB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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUpBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25NZXJnZVZhbHVlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZU1lcmdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWVyZ2VEZWVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQXNzaWduZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJdGVyYXRlZUNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NhZmVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvRmluaXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL2luZGV4LnNjc3M/ZTllYyIsIndlYnBhY2s6Ly8vLi9Db29raWVDb25zZW50TGF5ZXIvQ29va2llQ29uc2VudExheWVyLnRzIiwid2VicGFjazovLy8uL0Nvb2tpZUNvbnNlbnRMYXllci9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9Db29raWVDb25zZW50TGF5ZXIvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ29va2llQ29uc2VudExheWVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL0Nvb2tpZUNvbnNlbnRMYXllci90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2luaXQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduTWVyZ2VWYWx1ZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc01hcCA9IHJlcXVpcmUoJy4vaXNNYXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1NldCA9IHJlcXVpcmUoJy4vaXNTZXQnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmIChpc1NldCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlKSB7XG4gICAgICByZXN1bHQuYWRkKGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3ViVmFsdWUsIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXNzaWduTWVyZ2VWYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnbk1lcmdlVmFsdWUnKSxcbiAgICBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGJhc2VNZXJnZURlZXAgPSByZXF1aXJlKCcuL19iYXNlTWVyZ2VEZWVwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKSxcbiAgICBzYWZlR2V0ID0gcmVxdWlyZSgnLi9fc2FmZUdldCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYmFzZUZvcihzb3VyY2UsIGZ1bmN0aW9uKHNyY1ZhbHVlLCBrZXkpIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIGJhc2VNZXJnZSwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgICAgPyBjdXN0b21pemVyKHNhZmVHZXQob2JqZWN0LCBrZXkpLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIGtleXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1lcmdlO1xuIiwidmFyIGFzc2lnbk1lcmdlVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25NZXJnZVZhbHVlJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vaXNQbGFpbk9iamVjdCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5JyksXG4gICAgc2FmZUdldCA9IHJlcXVpcmUoJy4vX3NhZmVHZXQnKSxcbiAgICB0b1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi90b1BsYWluT2JqZWN0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgbWVyZ2VzIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIG1lcmdlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgbWVyZ2VGdW5jLCBjdXN0b21pemVyLCBzdGFjaykge1xuICB2YXIgb2JqVmFsdWUgPSBzYWZlR2V0KG9iamVjdCwga2V5KSxcbiAgICAgIHNyY1ZhbHVlID0gc2FmZUdldChzb3VyY2UsIGtleSksXG4gICAgICBzdGFja2VkID0gc3RhY2suZ2V0KHNyY1ZhbHVlKTtcblxuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShzcmNWYWx1ZSksXG4gICAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiBpc0J1ZmZlcihzcmNWYWx1ZSksXG4gICAgICAgIGlzVHlwZWQgPSAhaXNBcnIgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpO1xuXG4gICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICBpZiAoaXNBcnIgfHwgaXNCdWZmIHx8IGlzVHlwZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQnVmZikge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lQnVmZmVyKHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzVHlwZWQpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZVR5cGVkQXJyYXkoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIGlmIChpc0FyZ3VtZW50cyhvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0b1BsYWluT2JqZWN0KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgaXNGdW5jdGlvbihvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbml0Q2xvbmVPYmplY3Qoc3JjVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1lcmdlRGVlcDtcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcbiIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIgb3IgXCJjb25zdHJ1Y3RvclwiLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2FmZUdldChvYmplY3QsIGtleSkge1xuICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmplY3Rba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2FmZUdldDtcbiIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG4iLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYHZhbHVlYCBpcyBmb3VuZCBpbiBgYXJyYXlgXG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLiBJZiBgZnJvbUluZGV4YCBpcyBuZWdhdGl2ZSwgaXQncyB1c2VkIGFzIHRoZVxuICogb2Zmc2V0IGZyb20gdGhlIGVuZCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbmRleE9mKFsxLCAyLCAxLCAyXSwgMik7XG4gKiAvLyA9PiAxXG4gKlxuICogLy8gU2VhcmNoIGZyb20gdGhlIGBmcm9tSW5kZXhgLlxuICogXy5pbmRleE9mKFsxLCAyLCAxLCAyXSwgMiwgMik7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIoZnJvbUluZGV4KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbmF0aXZlTWF4KGxlbmd0aCArIGluZGV4LCAwKTtcbiAgfVxuICByZXR1cm4gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBpbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXhPZjtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgYmFzZU1lcmdlID0gcmVxdWlyZSgnLi9fYmFzZU1lcmdlJyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBtZXJnZXMgb3duIGFuZFxuICogaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgaW50byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICogc2tpcHBlZCBpZiBhIGRlc3RpbmF0aW9uIHZhbHVlIGV4aXN0cy4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBhcmUgbWVyZ2VkIHJlY3Vyc2l2ZWx5LiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieVxuICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gKiBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC41LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHtcbiAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAqIH07XG4gKlxuICogdmFyIG90aGVyID0ge1xuICogICAnYSc6IFt7ICdjJzogMyB9LCB7ICdlJzogNSB9XVxuICogfTtcbiAqXG4gKiBfLm1lcmdlKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4geyAnYSc6IFt7ICdiJzogMiwgJ2MnOiAzIH0sIHsgJ2QnOiA0LCAnZSc6IDUgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG4iLCJ2YXIgdG9GaW5pdGUgPSByZXF1aXJlKCcuL3RvRmluaXRlJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9JbnRlZ2VyO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QbGFpbk9iamVjdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY2xvbmVEZWVwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIikpO1xuY29uc3QgbWVyZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL21lcmdlXCIpKTtcbmNvbnN0IGluZGV4T2ZfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2luZGV4T2ZcIikpO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4uL2hlbHBlcnNcIik7XG5jb25zdCBjb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3RcIik7XG5jb25zdCBlbnVtc18xID0gcmVxdWlyZShcIi4vZW51bXNcIik7XG5jbGFzcyBDb29raWVDb25zZW50TGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHNjb3BlLCB1dWlkKSB7XG4gICAgICAgIHRoaXMudG9rZW5zID0ge1xuICAgICAgICAgICAgQlROX0FDQ0VQVF9BTExfQ0NMOiAnYnV0dG9uX2FjY2VwdEFsbCcsXG4gICAgICAgICAgICBCVE5fQUNDRVBUX05FQ0VTU0FSWV9DQ0w6ICdidXR0b25fYWNjZXB0TmVjZXNzYXJ5JyxcbiAgICAgICAgICAgIEJUTl9TQVZFX0NDTDogJ2J1dHRvbl9zYXZlJyxcbiAgICAgICAgICAgIFJFVklTSU9OX0FMRVJUX0NDTDogJ3JldmlzaW9uX2FsZXJ0JyxcbiAgICAgICAgICAgIEJUTl9TSE9XX0RJQUxPR19DQ0w6ICdzaG93X2RpYWxvZycsXG4gICAgICAgICAgICBCVE5fSElERV9ESUFMT0dfQ0NMOiAnaGlkZV9kaWFsb2cnLFxuICAgICAgICAgICAgQlROX1NIT1dfQkFOTkVSX0NDTDogJ3Nob3dfYmFubmVyJyxcbiAgICAgICAgICAgIEJUTl9ISURFX0JBTk5FUl9DQ0w6ICdoaWRlX2Jhbm5lcicsXG4gICAgICAgICAgICBDQVRFR09SSUVTX1RBQkxFX0NDTDogJ2NhdGVnb3JpZXNfdGFibGUnLFxuICAgICAgICAgICAgQ0FURUdPUllfVE9HR0xFX1BGWF9DQ0w6ICdjYXRlZ29yeV8nLFxuICAgICAgICAgICAgREFUQV9DQ0w6ICdkYXRhLWNjbCcsXG4gICAgICAgICAgICBEQVRBX0NDTF9UQVJHRVQ6ICdkYXRhLWNjbC10YXJnZXQnLFxuICAgICAgICAgICAgREFUQV9DQ0xfVE9HR0xFOiAnZGF0YS1jY2wtdG9nZ2xlJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYW5uZXIgPSB7XG4gICAgICAgICAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpYWxvZy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCYW5uZXJFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFubmVyLnJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycignYmFubmVyJywgJ0Jhbm5lciBoYXMgYmVlbiByZW1vdmVkIGZyb20gRE9NLCB0cnkgcmVsb2FkIHBhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvdzogKGRlbGF5ID0gMCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuYmFubmVyLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBydW5uZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcmlhSGlkZGVuID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFubmVyLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocnVubmVyLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuYmFubmVyLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5iYW5uZXIuc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5iYW5uZXIuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFubmVyLnJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJhbm5lci5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFubmVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB7XG4gICAgICAgICAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpYWxvZy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEaWFsb2dFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlhbG9nLnJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycignZGlhbG9nJywgJ0RpYWxvZyBoYXMgYmVlbiByZW1vdmVkIGZyb20gRE9NLCB0cnkgcmVsb2FkIHBhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvdzogKGRlbGF5ID0gMCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuZGlhbG9nLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBydW5uZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcmlhSGlkZGVuID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlhbG9nLnNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocnVubmVyLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuZGlhbG9nLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYXJpYUhpZGRlbiA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlhbG9nLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuZGlhbG9nLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLnRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlhbG9nLnJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRpYWxvZy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlhbG9nLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSB7XG4gICAgICAgICAgICBiYW5uZXJCb2R5OiAodGl0bGUsIGNvbnRlbnQsIHJldmlzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgX3RpdGxlID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmJhbm5lci5ib2R5VGl0bGVDbGFzc05hbWV9XCI+JHt0aXRsZX08L2Rpdj5gO1xuICAgICAgICAgICAgICAgIGNvbnN0IF9jb250ZW50ID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmJhbm5lci5ib2R5Q29udGVudENsYXNzTmFtZX1cIj4ke2NvbnRlbnR9PC9kaXY+YDtcbiAgICAgICAgICAgICAgICBjb25zdCBfcmV2aXNpb24gPSByZXZpc2lvbiAmJiBgPGRpdiBpZD1cIiR7dGhpcy50b2tlbnMuUkVWSVNJT05fQUxFUlRfQ0NMfVwiIGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5iYW5uZXIuYm9keVJldmlzaW9uQ2xhc3NOYW1lfVwiPiR7cmV2aXNpb259PC9kaXY+YDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7X3RpdGxlfSR7X3JldmlzaW9ufSR7X2NvbnRlbnR9YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2dCb2R5OiAodGl0bGUsIHByaW1hcnksIHNlY29uZGFyeSwgY2xvc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBfY2xvc2UgPSBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgJHt0aGlzLnRva2Vucy5EQVRBX0NDTH09XCIke3RoaXMudG9rZW5zLkJUTl9ISURFX0RJQUxPR19DQ0x9XCIgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmRpYWxvZy5ib2R5Q2xvc2VDbGFzc05hbWV9XCI+JHtjbG9zZX08L2J1dHRvbj5gO1xuICAgICAgICAgICAgICAgIGNvbnN0IF90aXRsZSA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5kaWFsb2cuYm9keVRpdGxlQ2xhc3NOYW1lfVwiPiR7dGl0bGV9PC9kaXY+YDtcbiAgICAgICAgICAgICAgICBjb25zdCBfcHJpbWFyeSA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5kaWFsb2cuYm9keVByaW1hcnlDbGFzc05hbWV9XCI+JHtwcmltYXJ5fTwvZGl2PmA7XG4gICAgICAgICAgICAgICAgY29uc3QgX3NlY29uZGFyeSA9IHNlY29uZGFyeSAmJiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RvcnMuZGlhbG9nLmJvZHlTZWNvbmRhcnlDbGFzc05hbWV9XCI+JHtzZWNvbmRhcnl9PC9kaXY+YDtcbiAgICAgICAgICAgICAgICBjb25zdCBfdGFibGUgPSBgPGRpdiAke3RoaXMudG9rZW5zLkRBVEFfQ0NMX1RBUkdFVH09XCIke3RoaXMudG9rZW5zLkNBVEVHT1JJRVNfVEFCTEVfQ0NMfVwiIGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5kaWFsb2cuYm9keVRhYmxlQ2xhc3NOYW1lfVwiPkxvYWRpbmcgdGFibGUsIHBsZWFzZSB3YWl0PC9kaXY+YDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7X2Nsb3NlfSR7X3RpdGxlfSR7X3ByaW1hcnl9JHtfdGFibGV9JHtfc2Vjb25kYXJ5fWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcnlCb2R5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlQm9keTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29va2llcyA9IHtcbiAgICAgICAgICAgIGdldDogKG5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llLm5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgwLCBoZWxwZXJzXzEuZ2V0Q29va2llKShuYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgKHRoaXMub3B0aW9ucy5jb29raWUucmZjID8gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKSA6IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXREYXRhOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llID0gdGhpcy5jb29raWVzLmdldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gY29va2llICYmIGNvb2tpZS5kYXRlVXBkYXRlZDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGFyZSB0d28gZGF0ZXMsIGlmIGRhdGUgaXMgZXhwaXJlZCAuLi4gKHVwZGF0ZWQgKyBleHBpcmF0aW9uKSA+PSB0b2RheSAuLi4gJywgdG9kYXkudG9JU09TdHJpbmcoKSwgdXBkYXRlZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogY29va2llLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZTogdXBkYXRlZCB8fCB0b2RheS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRGF0ZTogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgaXNFeHBpcmVkRGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlzRXhwaXJlZFJldmlzaW9uOiBjb29raWUgPyAoY29va2llLnJldmlzaW9uICE9PSB0aGlzLm9wdGlvbnMubWV0YS5yZXZpc2lvbikgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogKHZhbHVlLCBuYW1lID0gdGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lLCBleHBpcmF0aW9uID0gdGhpcy5vcHRpb25zLmNvb2tpZS5leHBpcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0aGlzLm9wdGlvbnMuY29va2llLnJmYyA/IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgICgwLCBoZWxwZXJzXzEuc2V0Q29va2llKShuYW1lLCBwYXJzZWRWYWx1ZSwgZXhwaXJhdGlvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveTogKG5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llLm5hbWUpID0+ICgwLCBoZWxwZXJzXzEuc2V0Q29va2llKSgnJywgbmFtZSwgLTEpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXRlID0gKDAsIGNsb25lRGVlcF8xLmRlZmF1bHQpKGNvbnN0XzEuREVGQVVMVF9TVEFURSk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICgwLCBtZXJnZV8xLmRlZmF1bHQpKGNvbnN0XzEuREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlIHx8ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZCB8fCAoMCwgaGVscGVyc18xLmdldFRva2VuKSg2KTtcbiAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBidG46IHtcbiAgICAgICAgICAgICAgICBhY2NlcHRBbGxDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWJ1dHRvbiAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWJ1dHRvbi1wcmltYXJ5YCxcbiAgICAgICAgICAgICAgICBhY2NlcHROZWNlc3NhcnlDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWJ1dHRvbiAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWJ1dHRvbi1zZWNvbmRhcnlgLFxuICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzQ2xhc3NOYW1lOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1idXR0b24gJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1idXR0b24tc2Vjb25kYXJ5YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYW5uZXI6IHtcbiAgICAgICAgICAgICAgICB3cmFwcGVySWQ6IHRoaXMub3B0aW9ucy5iYW5uZXIuaWQsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9YmFubmVyLXdyYXBwZXJgLFxuICAgICAgICAgICAgICAgIGJvZHlJZDogYCR7dGhpcy5vcHRpb25zLmJhbm5lci5pZH1fYm9keWAsXG4gICAgICAgICAgICAgICAgYm9keUNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9YmFubmVyLWJvZHlgLFxuICAgICAgICAgICAgICAgIGJvZHlUaXRsZUNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9YmFubmVyLWJvZHktdGl0bGVgLFxuICAgICAgICAgICAgICAgIGJvZHlSZXZpc2lvbkNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9YmFubmVyLWJvZHktcmV2aXNpb25gLFxuICAgICAgICAgICAgICAgIGJvZHlDb250ZW50Q2xhc3NOYW1lOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1iYW5uZXItYm9keS1jb250ZW50YCxcbiAgICAgICAgICAgICAgICBhY3Rpb25zSWQ6IGAke3RoaXMub3B0aW9ucy5iYW5uZXIuaWR9X2FjdGlvbnNgLFxuICAgICAgICAgICAgICAgIGFjdGlvbnNDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWJhbm5lci1hY3Rpb25zYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgICAgICB3cmFwcGVySWQ6IHRoaXMub3B0aW9ucy5kaWFsb2cuaWQsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9ZGlhbG9nLXdyYXBwZXJgLFxuICAgICAgICAgICAgICAgIGJvZHlJZDogYCR7dGhpcy5vcHRpb25zLmRpYWxvZy5pZH1fYm9keWAsXG4gICAgICAgICAgICAgICAgYm9keUNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9ZGlhbG9nLWJvZHlgLFxuICAgICAgICAgICAgICAgIGJvZHlDbG9zZUNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9ZGlhbG9nLWJvZHktY2xvc2VgLFxuICAgICAgICAgICAgICAgIGJvZHlUaXRsZUNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9ZGlhbG9nLWJvZHktdGl0bGVgLFxuICAgICAgICAgICAgICAgIGJvZHlUYWJsZUNsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9ZGlhbG9nLWJvZHktdGFibGVgLFxuICAgICAgICAgICAgICAgIGJvZHlQcmltYXJ5Q2xhc3NOYW1lOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1kaWFsb2ctYm9keS1wcmltYXJ5YCxcbiAgICAgICAgICAgICAgICBib2R5U2Vjb25kYXJ5Q2xhc3NOYW1lOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1kaWFsb2ctYm9keS1zZWNvbmRhcnlgLFxuICAgICAgICAgICAgICAgIGFjdGlvbnNJZDogYCR7dGhpcy5vcHRpb25zLmRpYWxvZy5pZH1fYWN0aW9uc2AsXG4gICAgICAgICAgICAgICAgYWN0aW9uc0NsYXNzTmFtZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9ZGlhbG9nLWFjdGlvbnNgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3J5Um93czoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5Um93Q2xhc3NOYW1lOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1jYXRlZ29yeS1yb3dgLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5T3V0ZXJDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LW91dGVyYCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVJvd0lubmVyQ2xhc3NOYW1lOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1jYXRlZ29yeS1yb3ctaW5uZXJgLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5VGFibGVDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LXRhYmxlYCxcbiAgICAgICAgICAgICAgICB0b2dnbGVJZFByZWZpeDogYCR7dGhpcy51dWlkfV90b2dnbGVfYCxcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LXRvZ2dsZWAsXG4gICAgICAgICAgICAgICAgdG9nZ2xlTGFiZWxDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LXRvZ2dsZS1sYWJlbGAsXG4gICAgICAgICAgICAgICAgdG9nZ2xlSW5wdXRDbGFzc05hbWU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LXRvZ2dsZS1pbnB1dGAsXG4gICAgICAgICAgICAgICAgYmxvY2s6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LWJsb2NrYCxcbiAgICAgICAgICAgICAgICBibG9ja0hlYWRpbmc6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LWJsb2NrLWhlYWRpbmdgLFxuICAgICAgICAgICAgICAgIGJsb2NrSGVhZGluZ1RvZ2dsZTogYCR7dGhpcy5vcHRpb25zLm1ldGEuY2xhc3NQcmVmaXh9Y2F0ZWdvcnktYmxvY2staGVhZGluZy10b2dnbGVgLFxuICAgICAgICAgICAgICAgIGJsb2NrVGFibGU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LWJsb2NrLXRhYmxlYCxcbiAgICAgICAgICAgICAgICBibG9ja0NvbGxhcHNpYmxlOiBgJHt0aGlzLm9wdGlvbnMubWV0YS5jbGFzc1ByZWZpeH1jYXRlZ29yeS1ibG9jay1jb2xsYXBzaWJsZWAsXG4gICAgICAgICAgICAgICAgYmxvY2tIZWFkaW5nVGl0bGU6IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LWJsb2NrLWhlYWRpbmctdGl0bGVgLFxuICAgICAgICAgICAgICAgIGJsb2NrRGVzY3JpcHRpb246IGAke3RoaXMub3B0aW9ucy5tZXRhLmNsYXNzUHJlZml4fWNhdGVnb3J5LWJsb2NrLWRlc2NyaXB0aW9uYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogJ2lzLWNoZWNrZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgICAgICAgIHNob3dEaWFsb2c6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMfT1cIiR7dGhpcy50b2tlbnMuQlROX1NIT1dfRElBTE9HX0NDTH1cIl1gKSxcbiAgICAgICAgICAgIGhpZGVEaWFsb2c6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMfT1cIiR7dGhpcy50b2tlbnMuQlROX0hJREVfRElBTE9HX0NDTH1cIl1gKSxcbiAgICAgICAgICAgIHNob3dCYW5uZXI6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMfT1cIiR7dGhpcy50b2tlbnMuQlROX1NIT1dfQkFOTkVSX0NDTH1cIl1gKSxcbiAgICAgICAgICAgIGhpZGVCYW5uZXI6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMfT1cIiR7dGhpcy50b2tlbnMuQlROX0hJREVfQkFOTkVSX0NDTH1cIl1gKSxcbiAgICAgICAgICAgIGFjY2VwdEFsbDogKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy50b2tlbnMuREFUQV9DQ0x9PVwiJHt0aGlzLnRva2Vucy5CVE5fQUNDRVBUX0FMTF9DQ0x9XCJdYCksXG4gICAgICAgICAgICBhY2NlcHROZWNlc3Nhcnk6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMfT1cIiR7dGhpcy50b2tlbnMuQlROX0FDQ0VQVF9ORUNFU1NBUllfQ0NMfVwiXWApLFxuICAgICAgICAgICAgc2F2ZUNoYW5nZXM6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMfT1cIiR7dGhpcy50b2tlbnMuQlROX1NBVkVfQ0NMfVwiXWApLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHNob3dCYW5uZXI6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyLnNob3coKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWRlQmFubmVyOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lci5oaWRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0RpYWxvZzogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2hvdygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGVEaWFsb2c6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY2NlcHROZWNlc3Nhcnk6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25BY2NlcHROZWNlc3NhcnlIYW5kbGVyKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXB0QWxsOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWNjZXB0QWxsSGFuZGxlcigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVDaGFuZ2VzOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlcigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUNhdGVnb3J5OiAoZSwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeVRvZ2dsZUhhbmRsZXIoY2F0ZWdvcnksIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZXNcbiAgICAgKiovXG4gICAgX2dldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgX2dldFByZWZlcmVuY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcmVmZXJlbmNlcztcbiAgICB9XG4gICAgX2dldE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XG4gICAgfVxuICAgIF9nZXROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gICAgfVxuICAgIF9nZXRTZWxlY3RvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tbW9uXG4gICAgICoqL1xuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWV0YS5kZWJ1ZylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBlcnIocmVhc29uLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtyZWFzb259OiR7bWVzc2FnZX1gLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbkVycm9yICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMub25FcnJvciA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkVycm9yKHJlYXNvbiwgbWVzc2FnZSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIGhpc3RvcnlQdXNoKGFyZykge1xuICAgICAgICB0aGlzLnN0YXRlLmhpc3RvcnkucHVzaChhcmcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY3JpcHRzXG4gICAgICoqL1xuICAgIHNjcmlwdHNBdXRvbG9hZENvbnRyb2xsZXIoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zY3JpcHRzLmF1dG9sb2FkKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgc2VsZWN0ZWQgY29va2llIGNhdGVnb3J5IHdpdGggbG9hZGVkIGNvb2tpZXMgLi4uXG4gICAgICAgICAgICAvLyB0b2dnbGUgcmVtb3ZlIG9yIGNhbGwgc2VsZWN0ZWQgLi4uXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVHJpZ2dlcjogc2NyaXB0c0F1dG9sb2FkQ29udHJvbGxlciAtPiBhdXRvbG9hZCBmZWF0dXJlcycsIGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb29raWVzXG4gICAgICoqL1xuICAgIGNvb2tpZUxvYWRlckNvbnRyb2xsZXIoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb25zZW50LmF1dG9DbGVhckNvb2tpZXMpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IEhhbmRsZSBicm93c2VyIGNvb2tpZXMgd2hlbiB1c2VyIHNhdmUgbmV3IHNldHRpbmdzXG4gICAgICAgICAgICAvLyBnZXQgYSBsaXN0IG9mIGN1cnJlbnQgY29va2llcyBhbmQgY29tcGFyZSB0byBjYXRlZ29yaWVzIHdoaWNoIGlzIGFjY2VwdGVkIGFuZCBkZWxldGUgcmVzdFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RyaWdnZXI6IGNvb2tpZUF1dG9sb2FkZXIoKSAtPiBhdXRvQ2xlYXJDb29raWVzIGZlYXR1cmVzJywgZXZlbnQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExhbmd1YWdlXG4gICAgICoqL1xuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmcgPSB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UsIGNoYW5nZUxvY2FsZXMgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUubGFuZ3VhZ2UgPSBsYW5nO1xuICAgICAgICBjaGFuZ2VMb2NhbGVzICYmIHRoaXMuc2V0TG9jYWxlc0NvbnRlbnQobGFuZyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvY2FsZXNcbiAgICAgKiovXG4gICAgZ2V0TG9jYWxlcyhsYW5nID0gdGhpcy5zdGF0ZS5sYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvY2FsZXNbbGFuZ107XG4gICAgfVxuICAgIHNldExvY2FsZXNDb250ZW50KGxhbmcgPSB0aGlzLnN0YXRlLmxhbmd1YWdlKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZURhdGEgPSB0aGlzLmNvb2tpZXMuZ2V0RGF0YSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVzID0gdGhpcy5nZXRMb2NhbGVzKGxhbmcpO1xuICAgICAgICBjb25zdCBlbEJhbm5lckJvZHlIdG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZWxlY3RvcnMuYmFubmVyLmJvZHlJZCk7XG4gICAgICAgIGNvbnN0IGVsRGlhbG9nQm9keUh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNlbGVjdG9ycy5kaWFsb2cuYm9keUlkKTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hY2NlcHRBbGwoKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGAke2xvY2FsZXMuY29tbW9uLmJ1dHRvbkFjY2VwdEFsbH1gO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hY2NlcHROZWNlc3NhcnkoKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGAke2xvY2FsZXMuY29tbW9uLmJ1dHRvbkFjY2VwdE5lY2Vzc2FyeX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5zYXZlQ2hhbmdlcygpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gYCR7bG9jYWxlcy5jb21tb24uYnV0dG9uU2F2ZX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGVsQmFubmVyQm9keUh0bWwpXG4gICAgICAgICAgICBlbEJhbm5lckJvZHlIdG1sLmlubmVySFRNTCA9IHRoaXMubGF5b3V0LmJhbm5lckJvZHkobG9jYWxlcy5iYW5uZXIudGl0bGUsIGxvY2FsZXMuYmFubmVyLmNvbnRlbnQsIGNvb2tpZURhdGEuaXNFeHBpcmVkUmV2aXNpb24gPyBsb2NhbGVzLnJldmlzaW9uQWxlcnQgOiB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoZWxEaWFsb2dCb2R5SHRtbClcbiAgICAgICAgICAgIGVsRGlhbG9nQm9keUh0bWwuaW5uZXJIVE1MID0gdGhpcy5sYXlvdXQuZGlhbG9nQm9keShsb2NhbGVzLmRpYWxvZy50aXRsZSwgbG9jYWxlcy5kaWFsb2cucHJpbWFyeSwgbG9jYWxlcy5kaWFsb2cuc2Vjb25kYXJ5LCBsb2NhbGVzLmNvbW1vbi5idXR0b25DbG9zZSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2F0ZWdvcnlUYWJsZSgpO1xuICAgICAgICB0aGlzLmxvZyhgTG9jYWxlcyBoYXMgYmVlbiBzZXQgd2l0aCBcIiR7bGFuZ31cImApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWluIGNhbGxiYWNrIGhhbmRsZXJzXG4gICAgICoqL1xuICAgIGdldENhbGxiYWNrRGF0YShldmVudCkge1xuICAgICAgICBjb25zdCBjb29raWVEYXRhID0gdGhpcy5jb29raWVzLmdldERhdGEoKTtcbiAgICAgICAgbGV0IGNhdGVnb3JpZXNBY2NlcHRlZCwgY2F0ZWdvcmllc0RlY2xpbmVkLCBjYXRlZ29yaWVzQ2hhbmdlZDtcbiAgICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICAgICAgY2FzZSBlbnVtc18xLnByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5c1snY3VzdG9tJ106XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc0FjY2VwdGVkID0gWy4uLnRoaXMuc3RhdGUucHJlZmVyZW5jZXMuYWNjZXB0ZWRdO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNEZWNsaW5lZCA9IFsuLi50aGlzLnN0YXRlLnByZWZlcmVuY2VzLmRlY2xpbmVkXTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzQ2hhbmdlZCA9IFsuLi50aGlzLnN0YXRlLnByZWZlcmVuY2VzLmNoYW5nZWRdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBlbnVtc18xLnByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5c1snYWxsJ106XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc0FjY2VwdGVkID0gWy4uLnRoaXMub3B0aW9ucy5jb25zZW50LmNhdGVnb3JpZXNdO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNEZWNsaW5lZCA9IFtdO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNDaGFuZ2VkID0gdGhpcy5zdGF0ZS5wcmVmZXJlbmNlcy5hY2NlcHRlZC5maWx0ZXIoeCA9PiB0aGlzLm9wdGlvbnMuY29uc2VudC5jYXRlZ29yaWVzLmluY2x1ZGVzKHgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZW51bXNfMS5wcmVmZXJlbmNlU3RhdGVFdmVudEtleXNbJ25lY2Vzc2FyeSddOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzQWNjZXB0ZWQgPSBbLi4udGhpcy5vcHRpb25zLmNvbnNlbnQubmVjZXNzYXJ5Q2F0ZWdvcmllc107XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc0RlY2xpbmVkID0gWy4uLnRoaXMub3B0aW9ucy5jb25zZW50LmNhdGVnb3JpZXMuZmlsdGVyKHggPT4gIXRoaXMub3B0aW9ucy5jb25zZW50Lm5lY2Vzc2FyeUNhdGVnb3JpZXMuaW5jbHVkZXMoeCkpXTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzQ2hhbmdlZCA9IHRoaXMuc3RhdGUucHJlZmVyZW5jZXMuYWNjZXB0ZWQuZmlsdGVyKHggPT4gdGhpcy5vcHRpb25zLmNvbnNlbnQubmVjZXNzYXJ5Q2F0ZWdvcmllcy5pbmNsdWRlcyh4KSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiAoMCwgaGVscGVyc18xLmdldFRpbWVzdGFtcCkoKSxcbiAgICAgICAgICAgICAgICBhY2NlcHRlZDogY2F0ZWdvcmllc0FjY2VwdGVkLFxuICAgICAgICAgICAgICAgIGRlY2xpbmVkOiBjYXRlZ29yaWVzRGVjbGluZWQsXG4gICAgICAgICAgICAgICAgY2hhbmdlZDogY2F0ZWdvcmllc0NoYW5nZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29va2llOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc0FjY2VwdGVkLFxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZCxcbiAgICAgICAgICAgICAgICByZXZpc2lvbjogdGhpcy5vcHRpb25zLm1ldGEucmV2aXNpb24sXG4gICAgICAgICAgICAgICAgcmZjOiB0aGlzLm9wdGlvbnMuY29va2llLnJmYyxcbiAgICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogY29va2llRGF0YS5jcmVhdGVkRGF0ZSxcbiAgICAgICAgICAgICAgICBkYXRlVXBkYXRlZDogY29va2llRGF0YS51cGRhdGVkRGF0ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZXZlbnRDYWxsYmFja0hhbmRsZXIoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldENhbGxiYWNrRGF0YShldmVudCk7XG4gICAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gZGF0YS5wcmVmZXJlbmNlcztcbiAgICAgICAgY29uc3QgY29va2llID0gZGF0YS5jb29raWU7XG4gICAgICAgIHRoaXMuYmFubmVyLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xuICAgICAgICB0aGlzLnN0YXRlLnByZWZlcmVuY2VzID0gcHJlZmVyZW5jZXM7XG4gICAgICAgIHRoaXMuc3RhdGUuY29va2llID0gY29va2llO1xuICAgICAgICB0aGlzLmNvb2tpZXMuc2V0KGNvb2tpZSk7XG4gICAgICAgIHRoaXMuYWRqdXN0Q2F0ZWdvcnlUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5UHVzaChldmVudCk7XG4gICAgICAgIHRoaXMuY29va2llTG9hZGVyQ29udHJvbGxlcihldmVudCwgZGF0YSk7XG4gICAgICAgIHRoaXMuc2NyaXB0c0F1dG9sb2FkQ29udHJvbGxlcihldmVudCwgZGF0YSk7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGNvb2tpZSwgcHJlZmVyZW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nKGBFdmVudCBjYWxsYmFjayBcIiR7ZXZlbnR9XCIgdHJpZ2dlcmVkYCk7XG4gICAgfVxuICAgIG9uQWNjZXB0QWxsSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrSGFuZGxlcihlbnVtc18xLnByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5c1snYWxsJ10sIHRoaXMub3B0aW9ucy5vbkFjY2VwdEFsbCk7XG4gICAgfVxuICAgIG9uQWNjZXB0TmVjZXNzYXJ5SGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrSGFuZGxlcihlbnVtc18xLnByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5c1snbmVjZXNzYXJ5J10sIHRoaXMub3B0aW9ucy5vbkFjY2VwdE5lY2Vzc2FyeSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrSGFuZGxlcihlbnVtc18xLnByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5c1snY3VzdG9tJ10sIHRoaXMub3B0aW9ucy5vbkNoYW5nZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhdGVnb3J5IHRvZ2dsZSBjYWxsYmFja1xuICAgICAqKi9cbiAgICBjYXRlZ29yeVRvZ2dsZUhhbmRsZXIoY2F0ZWdvcnksIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLm9wdGlvbnMuY29uc2VudC5jYXRlZ29yaWVzIHx8IFtdO1xuICAgICAgICBjb25zdCBhY2NlcHRlZCA9IHRoaXMuc3RhdGUucHJlZmVyZW5jZXMuYWNjZXB0ZWQgPyAoMCwgY2xvbmVEZWVwXzEuZGVmYXVsdCkodGhpcy5zdGF0ZS5wcmVmZXJlbmNlcy5hY2NlcHRlZCkgOiBbXTtcbiAgICAgICAgbGV0IGRlY2xpbmVkLCBjaGFuZ2VkO1xuICAgICAgICBjb25zdCBpbmRleCA9ICgwLCBpbmRleE9mXzEuZGVmYXVsdCkoYWNjZXB0ZWQsIGNhdGVnb3J5KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGFjY2VwdGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhY2NlcHRlZC5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgICBkZWNsaW5lZCA9IGNhdGVnb3JpZXMuZmlsdGVyKHggPT4gIWFjY2VwdGVkLmluY2x1ZGVzKHgpKTtcbiAgICAgICAgY2hhbmdlZCA9IGNhdGVnb3JpZXMuZmlsdGVyKHggPT4gYWNjZXB0ZWQuaW5jbHVkZXMoeCkpO1xuICAgICAgICB0aGlzLnN0YXRlLnByZWZlcmVuY2VzLmFjY2VwdGVkID0gYWNjZXB0ZWQ7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlZmVyZW5jZXMuZGVjbGluZWQgPSBkZWNsaW5lZDtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVmZXJlbmNlcy5jaGFuZ2VkID0gY2hhbmdlZDtcbiAgICAgICAgdGhpcy5oaXN0b3J5UHVzaChgdG9nZ2xlOiR7Y2F0ZWdvcnl9YCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25Ub2dnbGUgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5vblRvZ2dsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uVG9nZ2xlKHRoaXMuc3RhdGUucHJlZmVyZW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSAoMCwgaW5kZXhPZl8xLmRlZmF1bHQpKGFjY2VwdGVkLCBjYXRlZ29yeSkgPiAtMTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jaGVja2VkID0gY2hlY2tlZCAmJiAnY2hlY2tlZCc7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNlbGVjdG9ycy5zdGF0ZS5pc0NoZWNrZWQsIGNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMubG9nKCdjYXRlZ29yeVRvZ2dsZUhhbmRsZXInLCBhY2NlcHRlZCwgZGVjbGluZWQsIGNoYW5nZWQpO1xuICAgIH1cbiAgICBhZGp1c3RDYXRlZ29yeVRvZ2dsZSgpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMub3B0aW9ucy5jb25zZW50LmNhdGVnb3JpZXMgfHwgW107XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLnByZWZlcmVuY2VzLmFjY2VwdGVkIHx8IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY3RnKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHt0aGlzLnRva2Vucy5DQVRFR09SWV9UT0dHTEVfUEZYX0NDTH0ke2N0Z31gO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLnRva2Vucy5EQVRBX0NDTF9UT0dHTEV9PVwiJHtrZXl9XCJdYCk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9ICgwLCBpbmRleE9mXzEuZGVmYXVsdCkobGlzdCwgY3RnKSA+IC0xO1xuICAgICAgICAgICAgICAgIG5vZGUuY2hlY2tlZCA9IGNoZWNrZWQgJiYgJ2NoZWNrZWQnO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLnNlbGVjdG9ycy5zdGF0ZS5pc0NoZWNrZWQsIGNoZWNrZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBET00gZXZlbnRzXG4gICAgICoqL1xuICAgIGluaXRCdXR0b25Eb21FdmVudHMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMuc2hvd0RpYWxvZygpLmZvckVhY2goKG5vZGUpID0+IHsgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLnNob3dEaWFsb2cpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5oaWRlRGlhbG9nKCkuZm9yRWFjaCgobm9kZSkgPT4geyBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudHMuaGlkZURpYWxvZyk7IH0pO1xuICAgICAgICB0aGlzLm5vZGVzLnNob3dCYW5uZXIoKS5mb3JFYWNoKChub2RlKSA9PiB7IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5zaG93QmFubmVyKTsgfSk7XG4gICAgICAgIHRoaXMubm9kZXMuaGlkZUJhbm5lcigpLmZvckVhY2goKG5vZGUpID0+IHsgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLmhpZGVCYW5uZXIpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hY2NlcHRBbGwoKS5mb3JFYWNoKChub2RlKSA9PiB7IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5hY2NlcHRBbGwpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hY2NlcHROZWNlc3NhcnkoKS5mb3JFYWNoKChub2RlKSA9PiB7IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5hY2NlcHROZWNlc3NhcnkpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5zYXZlQ2hhbmdlcygpLmZvckVhY2goKG5vZGUpID0+IHsgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLnNhdmVDaGFuZ2VzKTsgfSk7XG4gICAgICAgIHRoaXMubG9nKGBCdXR0b24gZXZlbnRzIGluaXRpYXRlZGApO1xuICAgIH1cbiAgICByZW1vdmVCdXR0b25Eb21FdmVudHMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMuc2hvd0RpYWxvZygpLmZvckVhY2goKG5vZGUpID0+IHsgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLnNob3dEaWFsb2cpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5oaWRlRGlhbG9nKCkuZm9yRWFjaCgobm9kZSkgPT4geyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudHMuaGlkZURpYWxvZyk7IH0pO1xuICAgICAgICB0aGlzLm5vZGVzLnNob3dCYW5uZXIoKS5mb3JFYWNoKChub2RlKSA9PiB7IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5zaG93QmFubmVyKTsgfSk7XG4gICAgICAgIHRoaXMubm9kZXMuaGlkZUJhbm5lcigpLmZvckVhY2goKG5vZGUpID0+IHsgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLmhpZGVCYW5uZXIpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hY2NlcHRBbGwoKS5mb3JFYWNoKChub2RlKSA9PiB7IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5hY2NlcHRBbGwpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hY2NlcHROZWNlc3NhcnkoKS5mb3JFYWNoKChub2RlKSA9PiB7IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5hY2NlcHROZWNlc3NhcnkpOyB9KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5zYXZlQ2hhbmdlcygpLmZvckVhY2goKG5vZGUpID0+IHsgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLnNhdmVDaGFuZ2VzKTsgfSk7XG4gICAgICAgIHRoaXMubG9nKGBCdXR0b24gZXZlbnRzIGRlc3Ryb3llZGApO1xuICAgIH1cbiAgICBpbml0VG9nZ2xlRG9tRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5vcHRpb25zLmNvbnNlbnQuY2F0ZWdvcmllcyB8fCBbXTtcbiAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHt0aGlzLnRva2Vucy5DQVRFR09SWV9UT0dHTEVfUEZYX0NDTH0ke2NhdGVnb3J5fWA7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMudG9rZW5zLkRBVEFfQ0NMX1RPR0dMRX09XCIke2tleX1cIl1gKTtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB0aGlzLmV2ZW50cy50b2dnbGVDYXRlZ29yeShlLCBjYXRlZ29yeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvZyhgQ2F0ZWdvcmllcyB0b2dnbGUgZXZlbnRzIGluaXRpYXRlZGApO1xuICAgIH1cbiAgICByZW1vdmVUb2dnbGVEb21FdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLm9wdGlvbnMuY29uc2VudC5jYXRlZ29yaWVzIHx8IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY3RnKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHt0aGlzLnRva2Vucy5DQVRFR09SWV9UT0dHTEVfUEZYX0NDTH0ke2N0Z31gO1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHt0aGlzLnRva2Vucy5EQVRBX0NDTF9UT0dHTEV9PVwiJHtrZXl9XCJdYCk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gdGhpcy5ldmVudHMudG9nZ2xlQ2F0ZWdvcnkoZSwgY3RnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9nKGBDYXRlZ29yaWVzIHRvZ2dsZSBldmVudHMgZGVzdHJveWVkYCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcmVyc1xuICAgICAqKi9cbiAgICByZW5kZXJDYXRlZ29yeVRhYmxlKHNob3dUYWJsZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgbG9jYWxlcyA9IHRoaXMuZ2V0TG9jYWxlcygpO1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy50b2tlbnMuREFUQV9DQ0xfVEFSR0VUfT1cIiR7dGhpcy50b2tlbnMuQ0FURUdPUklFU19UQUJMRV9DQ0x9XCJdYCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLm9wdGlvbnMuY29uc2VudC5jYXRlZ29yaWVzIHx8IFtdO1xuICAgICAgICBjb25zdCBnZXRDYXRlZ29yeVRvZ2dsZSA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MudG9nZ2xlSWRQcmVmaXh9JHtjYXRlZ29yeX1gO1xuICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAoMCwgaW5kZXhPZl8xLmRlZmF1bHQpKHRoaXMub3B0aW9ucy5jb25zZW50Lm5lY2Vzc2FyeUNhdGVnb3JpZXMsIGNhdGVnb3J5KSA+IC0xIHx8ICgwLCBpbmRleE9mXzEuZGVmYXVsdCkodGhpcy5vcHRpb25zLmNvbnNlbnQuc3RhdGljQ2F0ZWdvcmllcywgY2F0ZWdvcnkpID4gLTE7XG4gICAgICAgICAgICBjb25zdCBfaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7dGhpcy5zZWxlY3RvcnMuY2F0ZWdvcnlSb3dzLnRvZ2dsZUlucHV0Q2xhc3NOYW1lfVwiIHZhbHVlPVwiJHtjYXRlZ29yeX1cIiAke3RoaXMudG9rZW5zLkRBVEFfQ0NMX1RPR0dMRX09XCIke3RoaXMudG9rZW5zLkNBVEVHT1JZX1RPR0dMRV9QRlhfQ0NMfSR7Y2F0ZWdvcnl9XCIgJHtkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ30gLz5gO1xuICAgICAgICAgICAgY29uc3QgX2xhYmVsID0gYDxsYWJlbCBmb3I9XCIke2lkfVwiIGFyaWEtbGFiZWxsZWRieT1cIiR7aWR9XCIgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmNhdGVnb3J5Um93cy50b2dnbGVMYWJlbENsYXNzTmFtZX1cIj4ke19pbnB1dH08L2xhYmVsPmA7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MudG9nZ2xlQ2xhc3NOYW1lfVwiIHRhYmluZGV4PVwiMVwiPiR7X2xhYmVsfTwvc3Bhbj5gO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBnZXRDYXRlZ29yeVRhYmxlQ29udGVudCA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMub3B0aW9ucy5jb25zZW50LmNvb2tpZXNbY2F0ZWdvcnldIHx8IFtdO1xuICAgICAgICAgICAgbGV0IF9oZWFkaW5nID0gYDx0aGVhZD48dHI+YDtcbiAgICAgICAgICAgIF9oZWFkaW5nICs9IGA8dGg+JHtsb2NhbGVzLnRhYmxlLmNvbE5hbWV9PC90aD5gO1xuICAgICAgICAgICAgX2hlYWRpbmcgKz0gYDx0aD4ke2xvY2FsZXMudGFibGUuY29sRG9tYWlufTwvdGg+YDtcbiAgICAgICAgICAgIF9oZWFkaW5nICs9IGA8dGg+JHtsb2NhbGVzLnRhYmxlLmNvbEV4cGlyYXRpb259PC90aD5gO1xuICAgICAgICAgICAgX2hlYWRpbmcgKz0gYDx0aD4ke2xvY2FsZXMudGFibGUuY29sRGVzY3JpcHRpb259PC90aD5gO1xuICAgICAgICAgICAgX2hlYWRpbmcgKz0gYDwvdHI+PC90aGVhZD5gO1xuICAgICAgICAgICAgbGV0IF9ib2R5ID0gYDx0Ym9keT5gO1xuICAgICAgICAgICAgbGlzdC5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIF9ib2R5ICs9IGA8dHI+YDtcbiAgICAgICAgICAgICAgICBfYm9keSArPSBgPHRoPiR7cm93Lm5hbWV9PC90aD5gO1xuICAgICAgICAgICAgICAgIF9ib2R5ICs9IGA8dGQ+JHtyb3cuZG9tYWlufTwvdGQ+YDtcbiAgICAgICAgICAgICAgICBfYm9keSArPSBgPHRkPiR7cm93LmV4cGlyYXRpb259PC90ZD5gO1xuICAgICAgICAgICAgICAgIF9ib2R5ICs9IGA8dGQ+JHtyb3cuZGVzY3JpcHRpb259PC90ZD5gO1xuICAgICAgICAgICAgICAgIF9ib2R5ICs9IGA8L3RyPmA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF9ib2R5ICs9IGA8L3Rib2R5PmA7XG4gICAgICAgICAgICBjb25zdCBfY29sZ3JvdXAgPSBgPGNvbGdyb3VwPjxjb2wgc3R5bGU9XCJ3aWR0aDphdXRvO1wiIC8+PGNvbCBzdHlsZT1cIndpZHRoOmF1dG87XCIgLz48Y29sIHN0eWxlPVwid2lkdGg6MTUwcHg7XCIgLz48Y29sIHN0eWxlPVwid2lkdGg6YXV0bztcIiAvPjwvY29sZ3JvdXA+YDtcbiAgICAgICAgICAgIHJldHVybiBgJHtfY29sZ3JvdXB9JHtfaGVhZGluZ30ke19ib2R5fWA7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGdldENhdGVnb3J5Q29udGVudCA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jID0gbG9jYWxlcy5jYXRlZ29yaWVzW2NhdGVnb3J5XTtcbiAgICAgICAgICAgIGNvbnN0IF90aXRsZSA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MuYmxvY2tIZWFkaW5nVGl0bGV9XCI+JHtsb2MudGl0bGUgPyBsb2MudGl0bGUgOiBgdW5kZWZpbmVkYH08L2Rpdj5gO1xuICAgICAgICAgICAgY29uc3QgX2Rlc2NyaXB0aW9uID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmNhdGVnb3J5Um93cy5ibG9ja0Rlc2NyaXB0aW9ufVwiPiR7bG9jLmRlc2NyaXB0aW9uID8gbG9jLmRlc2NyaXB0aW9uIDogYHVuZGVmaW5lZGB9PC9kaXY+YDtcbiAgICAgICAgICAgIGNvbnN0IF9jaGVja2JveCA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MuYmxvY2tIZWFkaW5nVG9nZ2xlfVwiPiR7Z2V0Q2F0ZWdvcnlUb2dnbGUoY2F0ZWdvcnkpfTwvZGl2PmA7XG4gICAgICAgICAgICBjb25zdCBfaGVhZGluZyA9IGA8ZGl2IGNsYXNzPVwiJHt0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MuYmxvY2tIZWFkaW5nfVwiPiR7X3RpdGxlfSR7X2NoZWNrYm94fTwvZGl2PmA7XG4gICAgICAgICAgICBjb25zdCBfdGFibGUgPSBzaG93VGFibGUgJiYgYDxkaXYgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmNhdGVnb3J5Um93cy5ibG9ja1RhYmxlfVwiPjx0YWJsZSBjbGFzcz1cIiR7dGhpcy5zZWxlY3RvcnMuY2F0ZWdvcnlSb3dzLmNhdGVnb3J5VGFibGVDbGFzc05hbWV9XCI+JHtnZXRDYXRlZ29yeVRhYmxlQ29udGVudChjYXRlZ29yeSl9PC90YWJsZT48L2Rpdj5gO1xuICAgICAgICAgICAgY29uc3QgX2NvbGxhcHNpYmxlID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmNhdGVnb3J5Um93cy5ibG9ja0NvbGxhcHNpYmxlfVwiPiR7X2Rlc2NyaXB0aW9ufSR7X3RhYmxlfTwvZGl2PmA7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuc2VsZWN0b3JzLmNhdGVnb3J5Um93cy5ibG9ja31cIj4ke19oZWFkaW5nfSR7X2NvbGxhcHNpYmxlfTwvZGl2PmA7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IF9jYXRlZ29yeSA9ICgwLCBoZWxwZXJzXzEuY3JlYXRlRWxlbWVudCkoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MuY2F0ZWdvcnlPdXRlckNsYXNzTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNhdGVnb3JpZXMubWFwKChjdGcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9jb250ZW50ID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVFbGVtZW50KSh7XG4gICAgICAgICAgICAgICAgdGFnOiAnYXJ0aWNsZScsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnNlbGVjdG9ycy5jYXRlZ29yeVJvd3MuY2F0ZWdvcnlSb3dDbGFzc05hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF9jb250ZW50LmFwcGVuZENoaWxkKCgwLCBoZWxwZXJzXzEuY3JlYXRlRWxlbWVudCkoe1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5zZWxlY3RvcnMuY2F0ZWdvcnlSb3dzLmNhdGVnb3J5Um93SW5uZXJDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgaHRtbDogZ2V0Q2F0ZWdvcnlDb250ZW50KGN0ZyksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBfY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoX2NvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5zaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2F0ZWdvcmllcy50YWJsZSA9IHNob3dUYWJsZTtcbiAgICAgICAgICAgIHRhcmdldHMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYGA7IC8vIENsZWFyIGJlZm9yZSBhcHBlbmQgdG8gcHJldmVudCBjb250ZW50IGR1cGxpY2l0aWVzXG4gICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChfY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0VG9nZ2xlRG9tRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYWRqdXN0Q2F0ZWdvcnlUb2dnbGUoKTtcbiAgICB9XG4gICAgcmVuZGVyQmFubmVyRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgY29va2llRGF0YSA9IHRoaXMuY29va2llcy5nZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZXMgPSB0aGlzLmdldExvY2FsZXMoKTtcbiAgICAgICAgY29uc3QgX3dyYXBwZXIgPSAoMCwgaGVscGVyc18xLmNyZWF0ZUVsZW1lbnQpKHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdG9ycy5iYW5uZXIud3JhcHBlcklkLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnNlbGVjdG9ycy5iYW5uZXIud3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICAgIGFyaWFzOiB7XG4gICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IF9ib2R5ID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVFbGVtZW50KSh7XG4gICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RvcnMuYmFubmVyLmJvZHlJZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5zZWxlY3RvcnMuYmFubmVyLmJvZHlDbGFzc05hbWUsXG4gICAgICAgICAgICBodG1sOiB0aGlzLmxheW91dC5iYW5uZXJCb2R5KGxvY2FsZXMuYmFubmVyLnRpdGxlLCBsb2NhbGVzLmJhbm5lci5jb250ZW50LCBjb29raWVEYXRhLmlzRXhwaXJlZFJldmlzaW9uID8gbG9jYWxlcy5yZXZpc2lvbkFsZXJ0IDogdW5kZWZpbmVkKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IF9hY3Rpb25zID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVFbGVtZW50KSh7XG4gICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RvcnMuYmFubmVyLmFjdGlvbnNJZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5zZWxlY3RvcnMuYmFubmVyLmFjdGlvbnNDbGFzc05hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBfYnRuQWNjZXB0QWxsID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVCdXR0b25FbGVtZW50KSh0aGlzLm9wdGlvbnMuYmFubmVyLmJ0bkFjY2VwdEFsbElkLCB0aGlzLnNlbGVjdG9ycy5idG4uYWNjZXB0QWxsQ2xhc3NOYW1lLCBsb2NhbGVzLmNvbW1vbi5idXR0b25BY2NlcHRBbGwsIHRoaXMudG9rZW5zLkJUTl9BQ0NFUFRfQUxMX0NDTCk7XG4gICAgICAgIGNvbnN0IF9idG5BY2NlcHROZWNlc3NhcnkgPSAoMCwgaGVscGVyc18xLmNyZWF0ZUJ1dHRvbkVsZW1lbnQpKHRoaXMub3B0aW9ucy5iYW5uZXIuYnRuQWNjZXB0TmVjZXNzYXJ5SWQsIHRoaXMuc2VsZWN0b3JzLmJ0bi5hY2NlcHROZWNlc3NhcnlDbGFzc05hbWUsIGxvY2FsZXMuY29tbW9uLmJ1dHRvbkFjY2VwdE5lY2Vzc2FyeSwgdGhpcy50b2tlbnMuQlROX0FDQ0VQVF9ORUNFU1NBUllfQ0NMKTtcbiAgICAgICAgX2FjdGlvbnMuYXBwZW5kQ2hpbGQoX2J0bkFjY2VwdEFsbCk7XG4gICAgICAgIF9hY3Rpb25zLmFwcGVuZENoaWxkKF9idG5BY2NlcHROZWNlc3NhcnkpO1xuICAgICAgICBfd3JhcHBlci5hcHBlbmRDaGlsZChfYm9keSk7XG4gICAgICAgIF93cmFwcGVyLmFwcGVuZENoaWxkKF9hY3Rpb25zKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfd3JhcHBlcik7XG4gICAgfVxuICAgIHJlbmRlckRpYWxvZ0VsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsZXMgPSB0aGlzLmdldExvY2FsZXMoKTtcbiAgICAgICAgY29uc3QgX3dyYXBwZXIgPSAoMCwgaGVscGVyc18xLmNyZWF0ZUVsZW1lbnQpKHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdG9ycy5kaWFsb2cud3JhcHBlcklkLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnNlbGVjdG9ycy5kaWFsb2cud3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICAgIGFyaWFzOiB7XG4gICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IF9ib2R5ID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVFbGVtZW50KSh7XG4gICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RvcnMuZGlhbG9nLmJvZHlJZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5zZWxlY3RvcnMuZGlhbG9nLmJvZHlDbGFzc05hbWUsXG4gICAgICAgICAgICBodG1sOiB0aGlzLmxheW91dC5kaWFsb2dCb2R5KGxvY2FsZXMuZGlhbG9nLnRpdGxlLCBsb2NhbGVzLmRpYWxvZy5wcmltYXJ5LCBsb2NhbGVzLmRpYWxvZy5zZWNvbmRhcnksIGxvY2FsZXMuY29tbW9uLmJ1dHRvbkNsb3NlKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IF9hY3Rpb25zID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVFbGVtZW50KSh7XG4gICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RvcnMuZGlhbG9nLmFjdGlvbnNJZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5zZWxlY3RvcnMuZGlhbG9nLmFjdGlvbnNDbGFzc05hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBfYnRuQWNjZXB0QWxsID0gKDAsIGhlbHBlcnNfMS5jcmVhdGVCdXR0b25FbGVtZW50KSh0aGlzLm9wdGlvbnMuZGlhbG9nLmJ0bkFjY2VwdEFsbElkLCB0aGlzLnNlbGVjdG9ycy5idG4uYWNjZXB0QWxsQ2xhc3NOYW1lLCBsb2NhbGVzLmNvbW1vbi5idXR0b25BY2NlcHRBbGwsIHRoaXMudG9rZW5zLkJUTl9BQ0NFUFRfQUxMX0NDTCk7XG4gICAgICAgIGNvbnN0IF9idG5BY2NlcHROZWNlc3NhcnkgPSAoMCwgaGVscGVyc18xLmNyZWF0ZUJ1dHRvbkVsZW1lbnQpKHRoaXMub3B0aW9ucy5kaWFsb2cuYnRuQWNjZXB0TmVjZXNzYXJ5SWQsIHRoaXMuc2VsZWN0b3JzLmJ0bi5hY2NlcHROZWNlc3NhcnlDbGFzc05hbWUsIGxvY2FsZXMuY29tbW9uLmJ1dHRvbkFjY2VwdE5lY2Vzc2FyeSwgdGhpcy50b2tlbnMuQlROX0FDQ0VQVF9ORUNFU1NBUllfQ0NMKTtcbiAgICAgICAgY29uc3QgX2J0blNhdmUgPSAoMCwgaGVscGVyc18xLmNyZWF0ZUJ1dHRvbkVsZW1lbnQpKHRoaXMub3B0aW9ucy5kaWFsb2cuYnRuU2F2ZUlkLCB0aGlzLnNlbGVjdG9ycy5idG4uc2F2ZUNoYW5nZXNDbGFzc05hbWUsIGxvY2FsZXMuY29tbW9uLmJ1dHRvblNhdmUsIHRoaXMudG9rZW5zLkJUTl9TQVZFX0NDTCk7XG4gICAgICAgIF9hY3Rpb25zLmFwcGVuZENoaWxkKF9idG5BY2NlcHRBbGwpO1xuICAgICAgICBfYWN0aW9ucy5hcHBlbmRDaGlsZChfYnRuQWNjZXB0TmVjZXNzYXJ5KTtcbiAgICAgICAgX2FjdGlvbnMuYXBwZW5kQ2hpbGQoX2J0blNhdmUpO1xuICAgICAgICBfd3JhcHBlci5hcHBlbmRDaGlsZChfYm9keSk7XG4gICAgICAgIF93cmFwcGVyLmFwcGVuZENoaWxkKF9hY3Rpb25zKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfd3JhcHBlcik7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb25zZW50LnNob3dDYXRlZ29yeSAmJiB0aGlzLnJlbmRlckNhdGVnb3J5VGFibGUodGhpcy5vcHRpb25zLmNvbnNlbnQuc2hvd0NhdGVnb3J5VGFibGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVzZW50ZXJzXG4gICAgICoqL1xuICAgIHByZXNlbnRlckNvbnRyb2xsZXIoY29va2llRGF0YSkge1xuICAgICAgICBpZiAoY29va2llRGF0YS5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmxvZygnQ29va2llIHdhcyBmb3VuZDonLCBjb29raWVEYXRhKTtcbiAgICAgICAgICAgIC8vIFNldCBmb3VuZCBjb29raWUgdG8gc3RhdGVcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY29va2llID0gY29va2llRGF0YS5jdXJyZW50O1xuICAgICAgICAgICAgLy8gU2V0IHByZWZlcmVuY2Ugc3RhdGUgZnJvbSBjb29raWUgZGF0YSBhbmQgdXBkYXRlIHN0YXRlIGZvciBjYXRlZ29yeSB0b2dnbGVcbiAgICAgICAgICAgIGlmIChjb29raWVEYXRhLmN1cnJlbnQuY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4uY29va2llRGF0YS5jdXJyZW50LmNhdGVnb3JpZXNdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlZmVyZW5jZXMuYWNjZXB0ZWQgPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlZmVyZW5jZXMuZGVjbGluZWQgPSB0aGlzLm9wdGlvbnMuY29uc2VudC5jYXRlZ29yaWVzLmZpbHRlcihjdGcgPT4gIWNhdGVnb3JpZXMuaW5jbHVkZXMoY3RnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RDYXRlZ29yeVRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgd2hlbiByZXZpc2lvbiBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKGNvb2tpZURhdGEuaXNFeHBpcmVkUmV2aXNpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJldmlzaW9uRXhwaXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXIuc2hvdyh0aGlzLm9wdGlvbnMubWV0YS5kZWxheSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbkV4cGlyZWQgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5vbkV4cGlyZWQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkV4cGlyZWQoJ3JldmlzaW9uJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBkYXRlIGlzIGV4cGlyZWRcbiAgICAgICAgICAgIGlmIChjb29raWVEYXRhLmlzRXhwaXJlZERhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lci5zaG93KHRoaXMub3B0aW9ucy5tZXRhLmRlbGF5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uRXhwaXJlZCAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLm9uRXhwaXJlZCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uRXhwaXJlZCgnZGF0ZScsIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2coJ0Nvb2tpZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIC8vIFNob3cgYmFubmVyIHdoZW4gY29va2llIGlzIG5vdCBmb3VuZFxuICAgICAgICAgICAgdGhpcy5iYW5uZXIuc2hvdyh0aGlzLm9wdGlvbnMubWV0YS5kZWxheSk7XG4gICAgICAgICAgICAvLyBTZXQgYWxsIHByZWZlcmVuY2VzIHdoZW4gbm8gY29va2llIGlzIGZvdW5kXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZWZlcmVuY2VzLmFjY2VwdGVkID0gdGhpcy5vcHRpb25zLmNvbnNlbnQuY2F0ZWdvcmllcztcbiAgICAgICAgICAgIC8vIEFkanVzdCBzZWxlY3RlZCBjYXRlZ29yeSB0b2dnbGVzXG4gICAgICAgICAgICB0aGlzLmFkanVzdENhdGVnb3J5VG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT24gaW5pdCBjYWxsYmFja1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uSW5pdCAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLm9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uSW5pdCh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmVwYXJlIGF2YWlsYWJsZSBsYW5ndWFnZXMgYW5kIHNldCB0byBzdGF0ZVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvY2FsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGFuZ3VhZ2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxhbmcgaW4gdGhpcy5vcHRpb25zLmxvY2FsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxhbmd1YWdlcy5wdXNoKGxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENoYW5nZSBsb2NhbGVzIHdoZW4gY2FsbGluZyByZS1pbml0KClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdCAmJiAodGhpcy5zdGF0ZS5sYW5ndWFnZSAhPT0gdGhpcy5vcHRpb25zLmxhbmd1YWdlKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9ICgwLCBjbG9uZURlZXBfMS5kZWZhdWx0KShjb25zdF8xLkRFRkFVTFRfU1RBVEUpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZSh0aGlzLm9wdGlvbnMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByZXNlbnRlcigpIHtcbiAgICAgICAgY29uc3QgY29va2llRGF0YSA9IHRoaXMuY29va2llcy5nZXREYXRhKCk7XG4gICAgICAgIHRoaXMuc3RhdGUuZW52aXJvbm1lbnQgPSBwcm9jZXNzLmVudi5CVU5ETEVfRU5WSVJPTk1FTlQ7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlZmVyZW5jZXMudGltZXN0YW1wID0gKDAsIGhlbHBlcnNfMS5nZXRUaW1lc3RhbXApKCk7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlZmVyZW5jZXMuZXZlbnQgPSBlbnVtc18xLnByZWZlcmVuY2VFdmVudEtleXNbJ2luaXQnXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5pbml0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYW5uZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmRpYWxvZy5pbml0KCk7XG4gICAgICAgIHRoaXMucHJlc2VudGVyQ29udHJvbGxlcihjb29raWVEYXRhKTtcbiAgICAgICAgdGhpcy5pbml0QnV0dG9uRG9tRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVcbiAgICAgKiovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgYm90ID0gKDAsIGhlbHBlcnNfMS5pc0NsaWVudEJvdCkoKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkU2VydmljZUluaXQgPSAoISh0aGlzLm9wdGlvbnMubWV0YS5oaWRlRnJvbUJvdHMgJiYgYm90KSk7XG4gICAgICAgIGNvbnN0IHJ1bm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd1Byb3BzID0ge1xuICAgICAgICAgICAgICAgIGdldFN0YXRlOiB0aGlzLl9nZXRTdGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGdldFByZWZlcmVuY2VzOiB0aGlzLl9nZXRQcmVmZXJlbmNlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGdldE9wdGlvbnM6IHRoaXMuX2dldE9wdGlvbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBnZXROb2RlczogdGhpcy5fZ2V0Tm9kZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RvcnM6IHRoaXMuX2dldFNlbGVjdG9ycy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGluaXQ6IHRoaXMuaW5pdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGluaXRCdXR0b25Eb21FdmVudHM6IHRoaXMuaW5pdEJ1dHRvbkRvbUV2ZW50cy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbkRvbUV2ZW50czogdGhpcy5yZW1vdmVCdXR0b25Eb21FdmVudHMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBpbml0VG9nZ2xlRG9tRXZlbnRzOiB0aGlzLmluaXRUb2dnbGVEb21FdmVudHMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICByZW1vdmVUb2dnbGVEb21FdmVudHM6IHRoaXMucmVtb3ZlVG9nZ2xlRG9tRXZlbnRzLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgY2hhbmdlTGFuZ3VhZ2U6IHRoaXMuY2hhbmdlTGFuZ3VhZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VMb2NhbGVzOiB0aGlzLnNldExvY2FsZXNDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgc2hvd0Jhbm5lcjogdGhpcy5iYW5uZXIuc2hvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGhpZGVCYW5uZXI6IHRoaXMuYmFubmVyLmhpZGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBkZXN0cm95QmFubmVyOiB0aGlzLmJhbm5lci5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgc2hvd0RpYWxvZzogdGhpcy5kaWFsb2cuc2hvdy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGhpZGVEaWFsb2c6IHRoaXMuZGlhbG9nLmhpZGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBkZXN0cm95RGlhbG9nOiB0aGlzLmRpYWxvZy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgZ2V0Q29va2llOiB0aGlzLmNvb2tpZXMuZ2V0LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgZGVzdHJveUNvb2tpZTogdGhpcy5jb29raWVzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRlcigpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5UHVzaCgnaW5pdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2coYCMjICcke2NvbnN0XzEuREVGQVVMVF9NRVRBX05BTUV9JyBsb2FkZWQgaW4gJ3dpbmRvdy5Db29raWVDb25zZW50TGF5ZXInYCwgd2luZG93UHJvcHMpO1xuICAgICAgICAgICAgd2luZG93LkNvb2tpZUNvbnNlbnRMYXllciA9IHdpbmRvd1Byb3BzO1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1Byb3BzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2hvdWxkU2VydmljZUluaXQgJiYgcnVubmVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29va2llQ29uc2VudExheWVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfT1BUSU9OUyA9IGV4cG9ydHMuREVGQVVMVF9TVEFURSA9IGV4cG9ydHMuREVGQVVMVF9DT09LSUVfTkFNRSA9IGV4cG9ydHMuREVGQVVMVF9NRVRBX05BTUUgPSB2b2lkIDA7XG5leHBvcnRzLkRFRkFVTFRfTUVUQV9OQU1FID0gJ0Nvb2tpZUNvbnNlbnRMYXllcic7XG5leHBvcnRzLkRFRkFVTFRfQ09PS0lFX05BTUUgPSAnQ0NfTEFZRVInO1xuZXhwb3J0cy5ERUZBVUxUX1NUQVRFID0ge1xuICAgIGluaXQ6IGZhbHNlLFxuICAgIGVudmlyb25tZW50OiB1bmRlZmluZWQsXG4gICAgcmV2aXNpb25FeHBpcmVkOiBmYWxzZSxcbiAgICBoaXN0b3J5OiBbJ3BlbmRpbmcnXSxcbiAgICBiYW5uZXI6IHtcbiAgICAgICAgcmVuZGVyOiBmYWxzZSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIGRlc3Ryb3llZDogZmFsc2UsIC8vIFdoZW4gYmFubmVyIGlzIHJlbW92ZWQgZnJvbSBET01cbiAgICB9LFxuICAgIGRpYWxvZzoge1xuICAgICAgICByZW5kZXI6IGZhbHNlLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgZGVzdHJveWVkOiBmYWxzZSwgLy8gV2hlbiBkaWFsb2cgaXMgcmVtb3ZlZCBmcm9tIERPTVxuICAgIH0sXG4gICAgY2F0ZWdvcmllczoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgdGFibGU6IGZhbHNlLFxuICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgfSxcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICBsYW5ndWFnZXM6IFsnZW4tVVMnXSxcbiAgICBjb29raWU6IG51bGwsXG4gICAgcHJlZmVyZW5jZXM6IHtcbiAgICAgICAgdGltZXN0YW1wOiBudWxsLFxuICAgICAgICBldmVudDogbnVsbCxcbiAgICAgICAgYWNjZXB0ZWQ6IFtdLFxuICAgICAgICBkZWNsaW5lZDogW10sXG4gICAgICAgIGNoYW5nZWQ6IFtdLCAvLyBDYXRlZ29yaWVzIHdoYXQgd2FzIGNoYW5nZWQsIGlmIGFueVxuICAgIH0sXG59O1xuZXhwb3J0cy5ERUZBVUxUX09QVElPTlMgPSB7XG4gICAgbWV0YToge1xuICAgICAgICBuYW1lOiBleHBvcnRzLkRFRkFVTFRfQ09PS0lFX05BTUUsXG4gICAgICAgIHJldmlzaW9uOiAwLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBjbGFzc1ByZWZpeDogJ2NjbC0nLFxuICAgICAgICBoaWRlRnJvbUJvdHM6IGZhbHNlLFxuICAgICAgICBsdHI6IHRydWUsIC8vIFRPRE86IElmIHlvdSB3YW50IHRvIGtlZXAgdGV4dCByaWdodC10by1sZWZ0LCBzZXQgdG8gZmFsc2VcbiAgICB9LFxuICAgIGNvb2tpZToge1xuICAgICAgICBuYW1lOiBleHBvcnRzLkRFRkFVTFRfQ09PS0lFX05BTUUsXG4gICAgICAgIGRvbWFpbjogJy55b3VyLWRvbWFpbi5zb21lJyxcbiAgICAgICAgZXhwaXJhdGlvbjogMzY1LFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIHNhbWVTaXRlOiAnTGF4JyxcbiAgICAgICAgcmZjOiBmYWxzZSwgLy8gUkZDIGZvcm1hdCBvZiBjb29raWUsIG90aGVyd2lzZSBpcyBqc29uIGFzIHN0cmluZ1xuICAgIH0sXG4gICAgc2NyaXB0czoge1xuICAgICAgICBhdXRvbG9hZDogZmFsc2UsXG4gICAgICAgIG1vZGU6ICdvcHQtaW4nLCAvLyBUT0RPOiBbJ29wdC1pbicsICdvcHQtb3V0J11cbiAgICB9LFxuICAgIGNvbnNlbnQ6IHtcbiAgICAgICAgZm9yY2U6IGZhbHNlLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ25lY2Vzc2FyeScsICdhbmFseXRpY3MnLCAnbWFya2V0aW5nJywgJ2Z1bmN0aW9uYWwnLCAncGVyc29uYWxpemF0aW9uJ10sXG4gICAgICAgIG5lY2Vzc2FyeUNhdGVnb3JpZXM6IFsnbmVjZXNzYXJ5J10sXG4gICAgICAgIHN0YXRpY0NhdGVnb3JpZXM6IFtdLFxuICAgICAgICBzaG93Q2F0ZWdvcnk6IHRydWUsXG4gICAgICAgIHNob3dDYXRlZ29yeVRhYmxlOiB0cnVlLFxuICAgICAgICBhdXRvQ2xlYXJDb29raWVzOiBmYWxzZSxcbiAgICAgICAgY29va2llczoge1xuICAgICAgICAgICAgbmVjZXNzYXJ5OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29va2llQ29uc2VudFNjb3BlJyxcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiAnLnlvdXItZG9tYWluLnNvbWUnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiAzNjUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29va2llIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29va2llQ29uc2VudFNjb3BlJyxcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiAnLnlvdXItZG9tYWluLnNvbWUnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiAzNjUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29va2llIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYW5hbHl0aWNzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29va2llQ29uc2VudFNjb3BlJyxcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiAnLnlvdXItZG9tYWluLnNvbWUnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiAzNjUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29va2llIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29va2llQ29uc2VudFNjb3BlJyxcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiAnLnlvdXItZG9tYWluLnNvbWUnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiAzNjUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29va2llIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWFya2V0aW5nOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29va2llQ29uc2VudFNjb3BlJyxcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiAnLnlvdXItZG9tYWluLnNvbWUnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiAzNjUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29va2llIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ29va2llQ29uc2VudFNjb3BlJyxcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiAnLnlvdXItZG9tYWluLnNvbWUnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiAzNjUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29va2llIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZnVuY3Rpb25hbDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Nvb2tpZUNvbnNlbnRTY29wZScsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogJy55b3VyLWRvbWFpbi5zb21lJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbjogMzY1LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Nvb2tpZSBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Nvb2tpZUNvbnNlbnRTY29wZScsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogJy55b3VyLWRvbWFpbi5zb21lJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbjogMzY1LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Nvb2tpZSBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBlcnNvbmFsaXphdGlvbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Nvb2tpZUNvbnNlbnRTY29wZScsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogJy55b3VyLWRvbWFpbi5zb21lJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbjogMzY1LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Nvb2tpZSBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Nvb2tpZUNvbnNlbnRTY29wZScsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogJy55b3VyLWRvbWFpbi5zb21lJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbjogMzY1LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Nvb2tpZSBkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGJhbm5lcjoge1xuICAgICAgICBpZDogJ0Nvb2tpZUNvbnNlbnRMYXllckJhbm5lcicsXG4gICAgICAgIGJ0bkFjY2VwdEFsbElkOiAnQ29va2llQ29uc2VudExheWVyQmFubmVyQnRuQWNjZXB0QWxsJyxcbiAgICAgICAgYnRuQWNjZXB0TmVjZXNzYXJ5SWQ6ICdDb29raWVDb25zZW50TGF5ZXJCYW5uZXJCdG5BY2NlcHROZWNlc3NhcnknLFxuICAgICAgICBsYXlvdXQ6ICdjbG91ZCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tIGNlbnRlcicsXG4gICAgICAgIHRyYW5zaXRpb246ICdkZWZhdWx0JywgLy8gVE9ETzogZGVmYXVsdC9zbGlkZS96b29tXG4gICAgfSxcbiAgICBkaWFsb2c6IHtcbiAgICAgICAgaWQ6ICdDb29raWVDb25zZW50TGF5ZXJEaWFsb2cnLFxuICAgICAgICBidG5BY2NlcHRBbGxJZDogJ0Nvb2tpZUNvbnNlbnRMYXllckRpYWxvZ0J0bkFjY2VwdEFsbCcsXG4gICAgICAgIGJ0bkFjY2VwdE5lY2Vzc2FyeUlkOiAnQ29va2llQ29uc2VudExheWVyRGlhbG9nQnRuQWNjZXB0TmVjZXNzYXJ5JyxcbiAgICAgICAgYnRuU2F2ZUlkOiAnQ29va2llQ29uc2VudExheWVyRGlhbG9nQnRuU2F2ZScsXG4gICAgICAgIGxheW91dDogJ2JveCcsXG4gICAgICAgIHBvc2l0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2RlZmF1bHQnLCAvLyBUT0RPOiBkZWZhdWx0L3NsaWRlL3pvb21cbiAgICB9LFxuICAgIGxhbmd1YWdlOiAnZW4tVVMnLFxuICAgIGxvY2FsZXM6IHtcbiAgICAgICAgJ2VuLVVTJzoge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQWNjZXB0QWxsOiAnQWNjZXB0IGFsbCcsXG4gICAgICAgICAgICAgICAgYnV0dG9uQWNjZXB0TmVjZXNzYXJ5OiAnQWNjZXB0IG5lY2Vzc2FyeScsXG4gICAgICAgICAgICAgICAgYnV0dG9uU2F2ZTogJ1NhdmUgc2V0dGluZ3MnLFxuICAgICAgICAgICAgICAgIGJ1dHRvbkNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhbm5lcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnV2UgdXNlIGNvb2tpZXMhJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgSGksIHRoaXMgd2Vic2l0ZSB1c2VzIGVzc2VudGlhbCBjb29raWVzIHRvIGVuc3VyZSBpdHMgcHJvcGVyIG9wZXJhdGlvbiBhbmQgdHJhY2tpbmcgY29va2llcyB0byB1bmRlcnN0YW5kIGhvdyB5b3UgaW50ZXJhY3Qgd2l0aCBpdC4gVGhlIGxhdHRlciB3aWxsIGJlIHNldCBvbmx5IGFmdGVyIGNvbnNlbnQuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtY2NsPVwic2hvd19kaWFsb2dcIj5MZXQgbWUgY2hvb3NlPC9idXR0b24+YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Nvb2tpZSBwcmVmZXJlbmNlcycsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogYEkgdXNlIGNvb2tpZXMgdG8gZW5zdXJlIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXMgb2YgdGhlIHdlYnNpdGUgYW5kIHRvIGVuaGFuY2UgeW91ciBvbmxpbmUgZXhwZXJpZW5jZS4gWW91IGNhbiBjaG9vc2UgZm9yIGVhY2ggY2F0ZWdvcnkgdG8gb3B0LWluL291dCB3aGVuZXZlciB5b3Ugd2FudC4gRm9yIG1vcmUgZGV0YWlscyByZWxhdGl2ZSB0byBjb29raWVzIGFuZCBvdGhlciBzZW5zaXRpdmUgZGF0YSwgcGxlYXNlIHJlYWQgdGhlIGZ1bGwgPGEgaHJlZj1cIiNcIj5wcml2YWN5IHBvbGljeTwvYT4uYCxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGBUaGlzIGlzIHNlY29uZGFyeSBjb250ZW50IGJsb2NrIC4uLiBmb3Igc29tZSByZWFzb25zIC4uLiB3aXRoIDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+b3V0ZXIgbGluazwvYT4gb3IgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jY2w9XCJoaWRlX2RpYWxvZ1wiPmNsb3NlIGRpYWxvZzwvYnV0dG9uPmBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXZpc2lvbkFsZXJ0OiAnU29ycnksIGJ1dCB3ZSBjaGFuZ2VkIG91ciBwb2xpY3kgb3Igd2hhdGV2ZXIsIHNvIHlvdSBtdXN0IGFjY2VwdCBjb29raWVzIGFnYWluLicsXG4gICAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgICAgIGNvbE5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICBjb2xEb21haW46ICdEb21haW4nLFxuICAgICAgICAgICAgICAgIGNvbEV4cGlyYXRpb246ICdFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBjb2xEZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgbmVjZXNzYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RyaWN0bHkgbmVjZXNzYXJ5IGNvb2tpZXMnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZXNlIGNvb2tpZXMgYXJlIGVzc2VudGlhbCBmb3IgdGhlIHByb3BlciBmdW5jdGlvbmluZyBvZiBteSB3ZWJzaXRlLiBXaXRob3V0IHRoZXNlIGNvb2tpZXMsIHRoZSB3ZWJzaXRlIHdvdWxkIG5vdCB3b3JrIHByb3Blcmx5JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFuYWx5dGljczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FuYWx5dGljcyBhbmQgcGVyZm9ybWFuY2UgY29va2llcycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlc2UgY29va2llcyBhbGxvdyB0aGUgd2Vic2l0ZSB0byByZW1lbWJlciB0aGUgY2hvaWNlcyB5b3UgaGF2ZSBtYWRlIGluIHRoZSBwYXN0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmtldGluZzoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01hcmtldGluZyBhbmQgYWR2ZXJ0aXNlbWVudCBjb29raWVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGVzZSBjb29raWVzIGNvbGxlY3QgaW5mb3JtYXRpb24gYWJvdXQgaG93IHlvdSB1c2UgdGhlIHdlYnNpdGUsIHdoaWNoIHBhZ2VzIHlvdSB2aXNpdGVkIGFuZCB3aGljaCBsaW5rcyB5b3UgY2xpY2tlZCBvbi4gQWxsIG9mIHRoZSBkYXRhIGlzIGFub255bWl6ZWQgYW5kIGNhbm5vdCBiZSB1c2VkIHRvIGlkZW50aWZ5IHlvdScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRnVuY3Rpb25hbCBjb29raWVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGdW5jdGlvbmFsIGFuZCBub3Qgc3BlY2lmaWVkIGNvb2tpZXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyc29uYWxpemF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGVyc29uYWxpemF0aW9uIGNvb2tpZXMnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcnNvbmFsaXphdGlvbiBhbmQgbm90IHNwZWNpZmllZCBjb29raWVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2NzLUNaJzoge1xuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQWNjZXB0QWxsOiAnUMWZaW1vdXQgdsWhZScsXG4gICAgICAgICAgICAgICAgYnV0dG9uQWNjZXB0TmVjZXNzYXJ5OiAnUMWZaW1vdXQgbmV6Ynl0bsOpJyxcbiAgICAgICAgICAgICAgICBidXR0b25TYXZlOiAnVWxvxb5pdCB6bcSbbnknLFxuICAgICAgICAgICAgICAgIGJ1dHRvbkNsb3NlOiAnWmF2xZnDrXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhbm5lcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTXkgcG91xb7DrXbDoW1lIGNvb2tpZXMhJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgSGksIHRoaXMgd2Vic2l0ZSB1c2VzIGVzc2VudGlhbCBjb29raWVzIHRvIGVuc3VyZSBpdHMgcHJvcGVyIG9wZXJhdGlvbiBhbmQgdHJhY2tpbmcgY29va2llcyB0byB1bmRlcnN0YW5kIGhvdyB5b3UgaW50ZXJhY3Qgd2l0aCBpdC4gVGhlIGxhdHRlciB3aWxsIGJlIHNldCBvbmx5IGFmdGVyIGNvbnNlbnQuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtY2NsPVwic2hvd19kaWFsb2dcIj5MZXQgbWUgY2hvb3NlPC9idXR0b24+YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ByZWZlcmVuY2Uga29sw6HEjWvFrycsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogYEkgdXNlIGNvb2tpZXMgdG8gZW5zdXJlIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXMgb2YgdGhlIHdlYnNpdGUgYW5kIHRvIGVuaGFuY2UgeW91ciBvbmxpbmUgZXhwZXJpZW5jZS4gWW91IGNhbiBjaG9vc2UgZm9yIGVhY2ggY2F0ZWdvcnkgdG8gb3B0LWluL291dCB3aGVuZXZlciB5b3Ugd2FudC4gRm9yIG1vcmUgZGV0YWlscyByZWxhdGl2ZSB0byBjb29raWVzIGFuZCBvdGhlciBzZW5zaXRpdmUgZGF0YSwgcGxlYXNlIHJlYWQgdGhlIGZ1bGwgPGEgaHJlZj1cIiNcIj5wcml2YWN5IHBvbGljeTwvYT4uYCxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGBUaGlzIGlzIHNlY29uZGFyeSBjb250ZW50IGJsb2NrIC4uLiBmb3Igc29tZSByZWFzb25zIC4uLiB3aXRoIDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+b3V0ZXIgbGluazwvYT4gb3IgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jY2w9XCJoaWRlX2RpYWxvZ1wiPmNsb3NlIGRpYWxvZzwvYnV0dG9uPmBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXZpc2lvbkFsZXJ0OiAnT21sb3V2w6FtZSBzZSwgYWxlIGRvxaFsbyBrZSB6bcSbbsSbIHYgbmHFoWljaCBwcmF2aWRsZWNoIGNvb2tpZXMgYSBwcm90byB0byBtdXPDrXRlIHBvdHZyZGl0IHpub3Z1LicsXG4gICAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgICAgIGNvbE5hbWU6ICdOw6F6ZXYnLFxuICAgICAgICAgICAgICAgIGNvbERvbWFpbjogJ0RvbcOpbmEnLFxuICAgICAgICAgICAgICAgIGNvbEV4cGlyYXRpb246ICdFeHBpcmFjZScsXG4gICAgICAgICAgICAgICAgY29sRGVzY3JpcHRpb246ICdQb3puw6Fta2EnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICBuZWNlc3Nhcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdOZXpieXRuw6kgY29va2llcyBwcm8gcHJvdm96JyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGVzZSBjb29raWVzIGFyZSBlc3NlbnRpYWwgZm9yIHRoZSBwcm9wZXIgZnVuY3Rpb25pbmcgb2YgbXkgd2Vic2l0ZS4gV2l0aG91dCB0aGVzZSBjb29raWVzLCB0aGUgd2Vic2l0ZSB3b3VsZCBub3Qgd29yayBwcm9wZXJseScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbmFseXRpY3M6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBbmFseXRpY2vDqSBjb29raWVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGVzZSBjb29raWVzIGFsbG93IHRoZSB3ZWJzaXRlIHRvIHJlbWVtYmVyIHRoZSBjaG9pY2VzIHlvdSBoYXZlIG1hZGUgaW4gdGhlIHBhc3QnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFya2V0aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWFya2V0aW5nb3bDqSBjb29raWVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGVzZSBjb29raWVzIGNvbGxlY3QgaW5mb3JtYXRpb24gYWJvdXQgaG93IHlvdSB1c2UgdGhlIHdlYnNpdGUsIHdoaWNoIHBhZ2VzIHlvdSB2aXNpdGVkIGFuZCB3aGljaCBsaW5rcyB5b3UgY2xpY2tlZCBvbi4gQWxsIG9mIHRoZSBkYXRhIGlzIGFub255bWl6ZWQgYW5kIGNhbm5vdCBiZSB1c2VkIHRvIGlkZW50aWZ5IHlvdScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRnVuY3Rpb25hbCBjb29raWVzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGdW5jdGlvbmFsIGFuZCBub3Qgc3BlY2lmaWVkIGNvb2tpZXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyc29uYWxpemF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGVyc29uYWxpemF0aW9uIGNvb2tpZXMnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcnNvbmFsaXphdGlvbiBhbmQgbm90IHNwZWNpZmllZCBjb29raWVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9uQWNjZXB0QWxsOiBmdW5jdGlvbiAoY29va2llLCBwcmVmZXJlbmNlcykgeyB9LFxuICAgIG9uQWNjZXB0TmVjZXNzYXJ5OiBmdW5jdGlvbiAoY29va2llLCBwcmVmZXJlbmNlcykgeyB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoY29va2llLCBwcmVmZXJlbmNlcykgeyB9LFxuICAgIG9uSW5pdDogZnVuY3Rpb24gKHN0YXRlKSB7IH0sXG4gICAgb25Ub2dnbGU6IGZ1bmN0aW9uIChwcmVmZXJlbmNlcykgeyB9LFxuICAgIG9uRXhwaXJlZDogZnVuY3Rpb24gKHJlYXNvbiwgc3RhdGUpIHsgfSxcbiAgICBvbkVycm9yOiBmdW5jdGlvbiAocmVhc29uLCBtZXNzYWdlLCBzdGF0ZSkgeyB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zY3JpcHRzTW9kZUtleXMgPSBleHBvcnRzLnByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5cyA9IGV4cG9ydHMuZW52aXJvbm1lbnRUeXBlS2V5cyA9IGV4cG9ydHMucHJlZmVyZW5jZUV2ZW50S2V5cyA9IHZvaWQgMDtcbnZhciBwcmVmZXJlbmNlRXZlbnRLZXlzO1xuKGZ1bmN0aW9uIChwcmVmZXJlbmNlRXZlbnRLZXlzKSB7XG4gICAgcHJlZmVyZW5jZUV2ZW50S2V5c1tcImluaXRcIl0gPSBcImluaXRcIjtcbn0pKHByZWZlcmVuY2VFdmVudEtleXMgPSBleHBvcnRzLnByZWZlcmVuY2VFdmVudEtleXMgfHwgKGV4cG9ydHMucHJlZmVyZW5jZUV2ZW50S2V5cyA9IHt9KSk7XG52YXIgZW52aXJvbm1lbnRUeXBlS2V5cztcbihmdW5jdGlvbiAoZW52aXJvbm1lbnRUeXBlS2V5cykge1xuICAgIGVudmlyb25tZW50VHlwZUtleXNbXCJkZXZlbG9wbWVudFwiXSA9IFwiZGV2ZWxvcG1lbnRcIjtcbiAgICBlbnZpcm9ubWVudFR5cGVLZXlzW1wicHJvZHVjdGlvblwiXSA9IFwicHJvZHVjdGlvblwiO1xufSkoZW52aXJvbm1lbnRUeXBlS2V5cyA9IGV4cG9ydHMuZW52aXJvbm1lbnRUeXBlS2V5cyB8fCAoZXhwb3J0cy5lbnZpcm9ubWVudFR5cGVLZXlzID0ge30pKTtcbnZhciBwcmVmZXJlbmNlU3RhdGVFdmVudEtleXM7XG4oZnVuY3Rpb24gKHByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5cykge1xuICAgIHByZWZlcmVuY2VTdGF0ZUV2ZW50S2V5c1tcImFsbFwiXSA9IFwiYWxsXCI7XG4gICAgcHJlZmVyZW5jZVN0YXRlRXZlbnRLZXlzW1wibmVjZXNzYXJ5XCJdID0gXCJuZWNlc3NhcnlcIjtcbiAgICBwcmVmZXJlbmNlU3RhdGVFdmVudEtleXNbXCJjdXN0b21cIl0gPSBcImN1c3RvbVwiO1xufSkocHJlZmVyZW5jZVN0YXRlRXZlbnRLZXlzID0gZXhwb3J0cy5wcmVmZXJlbmNlU3RhdGVFdmVudEtleXMgfHwgKGV4cG9ydHMucHJlZmVyZW5jZVN0YXRlRXZlbnRLZXlzID0ge30pKTtcbnZhciBzY3JpcHRzTW9kZUtleXM7XG4oZnVuY3Rpb24gKHNjcmlwdHNNb2RlS2V5cykge1xuICAgIHNjcmlwdHNNb2RlS2V5c1tcIm9wdC1pblwiXSA9IFwib3B0LWluXCI7XG4gICAgc2NyaXB0c01vZGVLZXlzW1wib3B0LW91dFwiXSA9IFwib3B0LW91dFwiO1xufSkoc2NyaXB0c01vZGVLZXlzID0gZXhwb3J0cy5zY3JpcHRzTW9kZUtleXMgfHwgKGV4cG9ydHMuc2NyaXB0c01vZGVLZXlzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvb2tpZUNvbnNlbnRMYXllciA9IHZvaWQgMDtcbnZhciBDb29raWVDb25zZW50TGF5ZXJfMSA9IHJlcXVpcmUoXCIuL0Nvb2tpZUNvbnNlbnRMYXllclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvb2tpZUNvbnNlbnRMYXllclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KENvb2tpZUNvbnNlbnRMYXllcl8xKS5kZWZhdWx0OyB9IH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VudW1zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVCdXR0b25FbGVtZW50ID0gZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gZXhwb3J0cy5zZXRDb29raWUgPSBleHBvcnRzLmdldENvb2tpZSA9IGV4cG9ydHMuaXNDbGllbnRCb3QgPSBleHBvcnRzLmdldFRva2VuID0gZXhwb3J0cy5nZXRUaW1lc3RhbXAgPSB2b2lkIDA7XG5jb25zdCBnZXRUaW1lc3RhbXAgPSAoKSA9PiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG5leHBvcnRzLmdldFRpbWVzdGFtcCA9IGdldFRpbWVzdGFtcDtcbmNvbnN0IGdldFRva2VuID0gKGxlbmd0aCA9IDEyKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgbGVuZ3RoKTtcbmV4cG9ydHMuZ2V0VG9rZW4gPSBnZXRUb2tlbjtcbmNvbnN0IGlzQ2xpZW50Qm90ID0gKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb25wZXJydXMvY3Jhd2xlci11c2VyLWFnZW50c1xuICAgIGxldCBpc0JvdCA9IGZhbHNlO1xuICAgIGNvbnN0IGJvdFBhdHRlcm4gPSBcIihnb29nbGVib3RcXC98Ym90fEdvb2dsZWJvdC1Nb2JpbGV8R29vZ2xlYm90LUltYWdlfEdvb2dsZSBmYXZpY29ufE1lZGlhcGFydG5lcnMtR29vZ2xlfGJpbmdib3R8c2x1cnB8amF2YXx3Z2V0fGN1cmx8Q29tbW9ucy1IdHRwQ2xpZW50fFB5dGhvbi11cmxsaWJ8bGlid3d3fGh0dHB1bml0fG51dGNofHBocGNyYXdsfG1zbmJvdHxqeXhvYm90fEZBU1QtV2ViQ3Jhd2xlcnxGQVNUIEVudGVycHJpc2UgQ3Jhd2xlcnxiaWdsb3Ryb258dGVvbWF8Y29udmVyYXxzZWVrYm90fGdpZ2FibGFzdHxleGFib3R8bmdib3R8aWFfYXJjaGl2ZXJ8R2luZ2VyQ3Jhd2xlcnx3ZWJtb24gfGh0dHJhY2t8d2ViY3Jhd2xlcnxncnViLm9yZ3xVc2luZU5vdXZlbGxlQ3Jhd2xlcnxhbnRpYm90fG5ldHJlc2VhcmNoc2VydmVyfHNwZWVkeXxmbHVmZnl8YmlibnVtLmJuZnxmaW5kbGlua3xtc3Jib3R8cGFuc2NpZW50fHlhY3lib3R8QUlTZWFyY2hCb3R8SU9JfGlwcy1hZ2VudHx0YWdvb2JvdHxNSjEyYm90fGRvdGJvdHx3b3Jpb2JvdHx5YW5nYXxidXp6Ym90fG1sYm90fHlhbmRleGJvdHxwdXJlYm90fExpbmd1ZWUgQm90fFZveWFnZXJ8Q3liZXJQYXRyb2x8dm9pbGFib3R8YmFpZHVzcGlkZXJ8Y2l0ZXNlZXJ4Ym90fHNwYm90fHR3ZW5nYWJvdHxwb3N0cmFua3x0dXJuaXRpbmJvdHxzY3JpYmRib3R8cGFnZTJyc3N8c2l0ZWJvdHxsaW5rZGV4fEFkaWR4Ym90fGJsZWtrb2JvdHxlem9vbXN8ZG90Ym90fE1haWwuUlVfQm90fGRpc2NvYm90fGhlcml0cml4fGZpbmR0aGF0ZmlsZXxldXJvcGFyY2hpdmUub3JnfE5lcmRCeU5hdHVyZS5Cb3R8c2lzdHJpeCBjcmF3bGVyfGFocmVmc2JvdHxBYm91bmRleHxkb21haW5jcmF3bGVyfHdic2VhcmNoYm90fHN1bW1pZnl8Y2Nib3R8ZWRpc3RlcmJvdHxzZXpuYW1ib3R8ZWMybGlua2ZpbmRlcnxnc2xmYm90fGFpaGl0Ym90fGludGVsaXVtX2JvdHxmYWNlYm9va2V4dGVybmFsaGl0fHlldGl8UmV0cmV2b1BhZ2VBbmFseXplcnxsYi1zcGlkZXJ8c29nb3V8bHNzYm90fGNhcmVlcmJvdHx3b3Rib3h8d29jYm90fGljaGlyb3xEdWNrRHVja0JvdHxsc3Nyb2NrZXRjcmF3bGVyfGRydXBhY3R8d2ViY29tcGFueWNyYXdsZXJ8YWNvb25ib3R8b3BlbmluZGV4c3BpZGVyfGduYW0gZ25hbSBzcGlkZXJ8d2ViLWFyY2hpdmUtbmV0LmNvbS5ib3R8YmFja2xpbmtjcmF3bGVyfGNvY2NvY3xpbnRlZ3JvbWVkYnxjb250ZW50IGNyYXdsZXIgc3BpZGVyfHRvcGxpc3Rib3R8c2Vva2lja3Mtcm9ib3R8aXQybWVkaWEtZG9tYWluLWNyYXdsZXJ8aXAtd2ViLWNyYXdsZXIuY29tfHNpdGVleHBsb3Jlci5pbmZvfGVsaXNhYm90fHByb3hpbWljfGNoYW5nZWRldGVjdGlvbnxibGV4Ym90fGFyYWJvdHxXZVNFRTpTZWFyY2h8bmlraS1ib3R8Q3J5c3RhbFNlbWFudGljc0JvdHxyb2dlcmJvdHwzNjBTcGlkZXJ8cHNib3R8SW50ZXJmYXhTY2FuQm90fExpcHBlcmhleSBTRU8gU2VydmljZXxDQyBNZXRhZGF0YSBTY2FwZXJ8ZzAwZzFlLm5ldHxHcmFwZXNob3RDcmF3bGVyfHVybGFwcGVuZGJvdHxicmFpbm9ib3R8ZnItY3Jhd2xlcnxiaW5sYXJ8U2ltcGxlQ3Jhd2xlcnxMaXZlbGFwYm90fFR3aXR0ZXJib3R8Y1hlbnNlYm90fHNtdGJvdHxibmYuZnJfYm90fEE2LUluZGV4ZXJ8QURtYW50WHxGYWNlYm90fFR3aXR0ZXJib3R8T3JhbmdlQm90fG1lbW9yeWJvdHxBZHZCb3R8TWVnYUluZGV4fFNlbWFudGljU2Nob2xhckJvdHxsdHg3MXxuZXJkeWJvdHx4b3ZpYm90fEJVYmlOR3xRd2FudGlmeXxhcmNoaXZlLm9yZ19ib3R8QXBwbGVib3R8VHdlZXRtZW1lQm90fGNyYXdsZXI0anxmaW5keGJvdHxTZW1ydXNoQm90fHlvb3pCb3R8bGlwcGVyaGV5fHkhai1hc3J8RG9tYWluIFJlLUFuaW1hdG9yIEJvdHxBZGRUaGlzKVwiO1xuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChib3RQYXR0ZXJuLCAnaScpO1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKHJlLnRlc3QodXNlckFnZW50KSlcbiAgICAgICAgaXNCb3QgPSB0cnVlO1xuICAgIHJldHVybiBpc0JvdDtcbn07XG5leHBvcnRzLmlzQ2xpZW50Qm90ID0gaXNDbGllbnRCb3Q7XG5jb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjb29raWUgPSBuYW1lICsgJz0nO1xuICAgIGxldCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5pbmRleE9mKGNvb2tpZSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcbmV4cG9ydHMuZ2V0Q29va2llID0gZ2V0Q29va2llO1xuY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBleHBpcmF0aW9uID0gMSkgPT4ge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4cGlyYXRpb24gKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBsZXQgZXhwaXJlcyA9ICdleHBpcmVzPScgKyBkLnRvVVRDU3RyaW5nKCk7XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJzsnICsgZXhwaXJlcyArICc7cGF0aD0vJztcbn07XG5leHBvcnRzLnNldENvb2tpZSA9IHNldENvb2tpZTtcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoeyB0YWcgPSAnZGl2JywgdHlwZSwgaWQsIGNsYXNzTmFtZSwgY3NzLCB0ZXh0LCBodG1sLCBjY2xEYXRhLCBjY2xUYXJnZXQsIGNjbFRvZ2dsZSwgYXJpYXMsIG9uIH0pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmICh0eXBlKVxuICAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgIGlmIChpZClcbiAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlmIChjc3MpXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzcztcbiAgICBpZiAodGV4dClcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGlmIChodG1sKVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKGNjbERhdGEpXG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFsnY2NsJ10gPSBjY2xEYXRhO1xuICAgIGlmIChjY2xUYXJnZXQpXG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFsnY2NsLXRhcmdldCddID0gY2NsVGFyZ2V0O1xuICAgIGlmIChjY2xUb2dnbGUpXG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFsnY2NsLXRvZ2dsZSddID0gY2NsVG9nZ2xlO1xuICAgIGlmIChhcmlhcykge1xuICAgICAgICBpZiAoYXJpYXMubGFiZWwpXG4gICAgICAgICAgICBlbGVtZW50LmFyaWFMYWJlbCA9IGFyaWFzLmxhYmVsO1xuICAgICAgICBpZiAoYXJpYXMubGFiZWxlZEJ5KVxuICAgICAgICAgICAgZWxlbWVudC5hcmlhTGFiZWxsZWRCeSA9IGFyaWFzLmxhYmVsZWRCeTtcbiAgICAgICAgaWYgKGFyaWFzLm1vZGFsKVxuICAgICAgICAgICAgZWxlbWVudC5hcmlhTW9kYWwgPSBhcmlhcy5tb2RhbDtcbiAgICAgICAgaWYgKGFyaWFzLmhpZGRlbilcbiAgICAgICAgICAgIGVsZW1lbnQuYXJpYUhpZGRlbiA9IFN0cmluZyhhcmlhcy5oaWRkZW4pO1xuICAgICAgICBpZiAoYXJpYXMuZGVzY3JpYmVkQnkpXG4gICAgICAgICAgICBlbGVtZW50LmFyaWFEZXNjcmliZWRCeSA9IGFyaWFzLmRlc2NyaWJlZEJ5O1xuICAgIH1cbiAgICBpZiAob24pIHtcbiAgICAgICAgaWYgKG9uLmNsaWNrKVxuICAgICAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gb24uY2xpY2s7XG4gICAgICAgIGlmIChvbi5ob3ZlcilcbiAgICAgICAgICAgIGVsZW1lbnQub25tb3VzZW92ZXIgPSBvbi5ob3ZlcjtcbiAgICAgICAgaWYgKG9uLmZvY3VzKVxuICAgICAgICAgICAgZWxlbWVudC5vbmZvY3VzID0gb24uZm9jdXM7XG4gICAgICAgIGlmIChvbi5jaGFuZ2UpXG4gICAgICAgICAgICBlbGVtZW50Lm9uY2hhbmdlID0gb24uY2hhbmdlO1xuICAgICAgICBpZiAob24uYmx1cilcbiAgICAgICAgICAgIGVsZW1lbnQub25ibHVyID0gb24uYmx1cjtcbiAgICAgICAgaWYgKG9uLmRibGNsaWNrKVxuICAgICAgICAgICAgZWxlbWVudC5vbmRibGNsaWNrID0gb24uZGJsY2xpY2s7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5jb25zdCBjcmVhdGVCdXR0b25FbGVtZW50ID0gKGlkLCBjbGFzc05hbWUsIHRleHQsIGNjbERhdGEpID0+IHtcbiAgICByZXR1cm4gKDAsIGV4cG9ydHMuY3JlYXRlRWxlbWVudCkoe1xuICAgICAgICBpZCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjY2xEYXRhLFxuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgYXJpYXM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBgYnV0dG9uYCxcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5leHBvcnRzLmNyZWF0ZUJ1dHRvbkVsZW1lbnQgPSBjcmVhdGVCdXR0b25FbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Db29raWVDb25zZW50TGF5ZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2luaXRcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb29raWVDb25zZW50TGF5ZXJfMSA9IHJlcXVpcmUoXCIuL0Nvb2tpZUNvbnNlbnRMYXllclwiKTtcbmNvbnN0IGluaXRDb29raWVDb25zZW50TGF5ZXIgPSAob3B0aW9ucywgc2NvcGUsIHV1aWQpID0+IG5ldyBDb29raWVDb25zZW50TGF5ZXJfMS5Db29raWVDb25zZW50TGF5ZXIob3B0aW9ucywgc2NvcGUsIHV1aWQpO1xud2luZG93LmluaXRDb29raWVDb25zZW50TGF5ZXIgPSBpbml0Q29va2llQ29uc2VudExheWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnNjc3NcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=