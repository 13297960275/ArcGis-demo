var WKTUtil = function (options) {
  this.initialize(options);
}

WKTUtil.prototype = {
  /**
   * Constructor: OpenLayers.Format.WKT
   * Create a new parser for WKT
   *
   * Parameters:
   * options - {Object} An optional object whose properties will be set on
   *           this instance
   *
   * Returns:
   * {<OpenLayers.Format.WKT>} A new WKT parser.
   */
  initialize: function (options) {
    this.regExes = {
      'typeStr': /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
      'spaces': /\s+/,
      'parenComma': /\)\s*,\s*\(/,
      'doubleParenComma': /\)\s*\)\s*,\s*\(\s*\(/, // can't use {2} here
      'trimParens': /^\s*\(?(.*?)\)?\s*$/
    };
    for (var i in options) {
      this[i] = options[i];
    }
  },

  /**
   * APIMethod: read
   * Deserialize a WKT string and return a vector feature or an
   * array of vector features.  Supports WKT for POINT, MULTIPOINT,
   * LINESTRING, MULTILINESTRING, POLYGON, MULTIPOLYGON, and
   * GEOMETRYCOLLECTION.
   *
   * Parameters:
   * wkt - {String} A WKT string
   *
   * Returns:
   * {<OpenLayers.Feature.Vector>|Array} A feature or array of features for
   * GEOMETRYCOLLECTION WKT.
   */
  read: function (wkt) {
    var features, type, str;
    wkt = wkt.replace(/[\n\r]/g, " ");
    var matches = this.regExes.typeStr.exec(wkt);
    if (matches) {
      type = matches[1].toLowerCase();
      str = matches[2];
      if (this.parse[type]) {
        if (type.indexOf('multi') > -1) {
          features = this.parse[type].apply(this, [wkt]);
        } else {
          features = this.parse[type].apply(this, [str]);
        }
        //console.log(features);
      }


    }
    return features;
  },

  /**
   * Method: extractGeometry
   * Entry point to construct the WKT for a single Geometry object.
   *
   * Parameters:
   * geometry - {<OpenLayers.Geometry.Geometry>}
   *
   * Returns:
   * {String} A WKT string of representing the geometry
   */
  extractGeometry: function (geometry) {
    var type = geometry.CLASS_NAME.split('.')[2].toLowerCase();
    if (!this.extract[type]) {
      return null;
    }
    if (this.internalProjection && this.externalProjection) {
      geometry = geometry.clone();
      geometry.transform(this.internalProjection, this.externalProjection);
    }
    var wktType = type == 'collection' ? 'GEOMETRYCOLLECTION' : type.toUpperCase();
    var data = wktType + '(' + this.extract[type].apply(this, [geometry]) + ')';
    return data;
  },

  trim: function (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  },
  /**
   * Object with properties corresponding to the geometry types.
   * Property values are functions that do the actual parsing.
   */
  parse: {
    /**
     * Return point feature given a point WKT fragment.
     * @param {String} str A WKT fragment representing the point
     * @returns {OpenLayers.Feature.Vector} A point feature
     * @private
     */
    'point': function (str) {
      var coords = this.trim(str).split(this.regExes.spaces);
      var points = []
      coords.forEach(function (item, idx) {
        points.push(parseFloat(item))
      })
      return [points]; //new esri.geometry.Point(coords[0], coords[1]);
    },

    /**
     * Return a multipoint feature given a multipoint WKT fragment.
     * @param {String} str A WKT fragment representing the multipoint
     * @returns {OpenLayers.Feature.Vector} A multipoint feature
     * @private
     */
    'multipoint': function (data) {
      var regexs = "\\(.*\\)" // 获取括号中间的内容
      var arrs = data.match(regexs);
      var regex = "\\((.+?)\\)"; // 获取第一组（（ 的内容
      var arr = arrs[0].match(regex);
      var c = "\\("; // 要计算的字符
      var reg = new RegExp(c, 'g'); // 使用g表示整个字符串都要匹配
      var result = arr[1].match(reg); // 获取内容区（（ 的个数以确定wkt格式
      var count = !result ? 0 : result.length;
      var newStr = arrs[0].slice(1, arrs[0].length - 1)
      if (strCharPosition(newStr, ' ') == 1) {
        count = 0
      }
      var dataContent = ''
      var type = ''
      var dataContentArr = []
      switch (count) {
        case 0:
          type = 'marker'
          dataContentArr = newStr.split(/\,\s?/)
          break;
        case 1:
          type = 'polyline'
          dataContent = newStr.slice(1, newStr.length - 1)
          dataContentArr = dataContent.split(/\)\s?\,\s?\(/)
          break;
        case 2:
          type = 'polygon'
          dataContent = newStr.slice(2, newStr.length - 2)
          dataContentArr = dataContent.split(/\)\)\s?\,\s?\(\(/)
          break;
        default:
          // statements_def
          break;
      }
      // console.log(dataContentArr)
      var points = []
      dataContentArr.forEach(function (el, idx) {
        var dataSet = el.myReplace('\\(', '').myReplace(',', '| ').myReplace(/\|\s*/, ',')
        var strArr = dataSet.split(',').reverse()
        var pointArr = []
        for (var j = 0, length2 = strArr.length; j < length2; j++) {
          var tempArr = strArr[j].split(' ').reverse()
          var latitudeWkt = null
          var longitudeWkt = null
          longitudeWkt = tempArr[1]
          latitudeWkt = tempArr[0]
          var point = []
          point.push(parseFloat(latitudeWkt))
          point.push(parseFloat(longitudeWkt))
          pointArr.push(point)
        }
        points.push(pointArr)
      })
      // console.log(data, points, type)
      return [points];
    },

    /**
     * Return a linestring feature given a linestring WKT fragment.
     * @param {String} str A WKT fragment representing the linestring
     * @returns {OpenLayers.Feature.Vector} A linestring feature
     * @private
     */
    'linestring': function (str) {
      var points = this.trim(str).split(',');

      var components = [];
      for (var i = 0, len = points.length; i < len; ++i) {
        components.push(this.parse.point.apply(this, [points[i]]));
      }
      return components //new esri.geometry.Polyline(components);
    },

    /**
     * Return a multilinestring feature given a multilinestring WKT fragment.
     * @param {String} str A WKT fragment representing the multilinestring
     * @returns {OpenLayers.Feature.Vector} A multilinestring feature
     * @private
     */
    'multilinestring': function (data) {
      var regexs = "\\(.*\\)" // 获取括号中间的内容
      var arrs = data.match(regexs);
      var regex = "\\((.+?)\\)"; // 获取第一组（（ 的内容
      var arr = arrs[0].match(regex);
      var c = "\\("; // 要计算的字符
      var reg = new RegExp(c, 'g'); // 使用g表示整个字符串都要匹配
      var result = arr[1].match(reg); // 获取内容区（（ 的个数以确定wkt格式
      var count = !result ? 0 : result.length;
      var newStr = arrs[0].slice(1, arrs[0].length - 1)
      if (strCharPosition(newStr, ' ') == 1) {
        count = 0
      }
      var dataContent = ''
      var type = ''
      var dataContentArr = []
      switch (count) {
        case 0:
          type = 'marker'
          dataContentArr = newStr.split(/\,\s?/)
          break;
        case 1:
          type = 'polyline'
          dataContent = newStr.slice(1, newStr.length - 1)
          dataContentArr = dataContent.split(/\)\s?\,\s?\(/)
          break;
        case 2:
          type = 'polygon'
          dataContent = newStr.slice(2, newStr.length - 2)
          dataContentArr = dataContent.split(/\)\)\s?\,\s?\(\(/)
          break;
        default:
          // statements_def
          break;
      }
      // console.log(dataContentArr)
      var points = []
      dataContentArr.forEach(function (el, idx) {
        var dataSet = el.myReplace('\\(', '').myReplace(',', '| ').myReplace(/\|\s*/, ',')
        var strArr = dataSet.split(',').reverse()
        var pointArr = []
        for (var j = 0, length2 = strArr.length; j < length2; j++) {
          var tempArr = strArr[j].split(' ').reverse()
          var latitudeWkt = null
          var longitudeWkt = null
          longitudeWkt = tempArr[1]
          latitudeWkt = tempArr[0]
          var point = []
          point.push(parseFloat(latitudeWkt))
          point.push(parseFloat(longitudeWkt))
          pointArr.push(point)
        }
        points.push(pointArr)
      })
      // console.log(data, points, type)
      return [points];
    },

    /**
     * Return a polygon feature given a polygon WKT fragment.
     * @param {String} str A WKT fragment representing the polygon
     * @returns {OpenLayers.Feature.Vector} A polygon feature
     * @private
     */
    'polygon': function (str) {
      var ring, linestring, linearring;
      var rings = this.trim(str).split(this.regExes.parenComma);

      var components = [];
      for (var i = 0, len = rings.length; i < len; ++i) {
        ring = rings[i].replace(this.regExes.trimParens, '$1');
        linestring = this.parse.linestring.apply(this, [ring]);
        components.push(linestring);
      }
      return components;
    },

    /**
     * Return a multipolygon feature given a multipolygon WKT fragment.
     * @param {String} str A WKT fragment representing the polygon
     * @returns {OpenLayers.Feature.Vector} A polygon feature
     * @private
     */
    'multipolygon': function (data) {
      var regexs = "\\(.*\\)" // 获取括号中间的内容
      var arrs = data.match(regexs);
      var regex = "\\((.+?)\\)"; // 获取第一组（（ 的内容
      var arr = arrs[0].match(regex);
      var c = "\\("; // 要计算的字符
      var reg = new RegExp(c, 'g'); // 使用g表示整个字符串都要匹配
      var result = arr[1].match(reg); // 获取内容区（（ 的个数以确定wkt格式
      var count = !result ? 0 : result.length;
      var newStr = arrs[0].slice(1, arrs[0].length - 1)
      if (strCharPosition(newStr, ' ') == 1) {
        count = 0
      }
      var dataContent = ''
      var type = ''
      var dataContentArr = []
      switch (count) {
        case 0:
          type = 'marker'
          dataContentArr = newStr.split(/\,\s?/)
          break;
        case 1:
          type = 'polyline'
          dataContent = newStr.slice(1, newStr.length - 1)
          dataContentArr = dataContent.split(/\)\s?\,\s?\(/)
          break;
        case 2:
          type = 'polygon'
          dataContent = newStr.slice(2, newStr.length - 2)
          dataContentArr = dataContent.split(/\)\)\s?\,\s?\(\(/)
          break;
        default:
          // statements_def
          break;
      }
      // console.log(dataContentArr)
      var points = []
      dataContentArr.forEach(function (el, idx) {
        var dataSet = el.myReplace('\\(', '').myReplace(',', '| ').myReplace(/\|\s*/, ',')
        var strArr = dataSet.split(',').reverse()
        var pointArr = []
        for (var j = 0, length2 = strArr.length; j < length2; j++) {
          var tempArr = strArr[j].split(' ').reverse()
          var latitudeWkt = null
          var longitudeWkt = null
          longitudeWkt = tempArr[1]
          latitudeWkt = tempArr[0]
          var point = []
          point.push(parseFloat(latitudeWkt))
          point.push(parseFloat(longitudeWkt))
          pointArr.push(point)
        }
        points.push(pointArr)
      })
      // console.log(data, points, type)
      return points;
    }
  },

}


/**
 * 根据单点线面wkt生成经纬度信息
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function wkt2Latlngs(data) {
  var regexs = "\\(.*\\)" // 获取括号中间的内容
  var arrs = data.match(regexs);
  var regex = "\\((.+?)\\)"; // 获取第一组（（ 的内容
  var arr = arrs[0].match(regex);
  var c = "\\("; // 要计算的字符
  var reg = new RegExp(c, 'g'); // 使用g表示整个字符串都要匹配
  var result = arr[1].match(reg); // 获取内容区（（ 的个数以确定wkt格式
  var count = !result ? 0 : result.length;
  var newStr = arrs[0].slice(1, arrs[0].length - 1)
  if (strCharPosition(newStr, ' ') == 1) {
    count = 0
  }
  var dataContent = ''
  var dataContentArr = []
  switch (count) {
    case 0:
      dataContentArr = newStr.split(/,\s?/)
      break;
    case 1:
      dataContent = newStr.slice(1, newStr.length - 1)
      dataContentArr = dataContent.split(/\)\,\s?\(/)
      break;
    case 2:
      dataContent = newStr.slice(2, newStr.length - 2)
      dataContentArr = dataContent.split(/\)\)\,\/s?\(\(/)
      break;
    default:
      // statements_def
      break;
  }
  // console.log(dataContentArr)
  var points = []
  dataContentArr.forEach(function (el, idx) {
    var dataSet = el.myReplace('\\(', '').myReplace(',', '| ').myReplace(/\|\s*/, ',')
    var strArr = dataSet.split(',').reverse()
    var pointArr = []
    for (var j = 0, length2 = strArr.length; j < length2; j++) {
      var tempArr = strArr[j].split(' ').reverse()
      var longitudeWkt = tempArr[1]
      var latitudeWkt = tempArr[0]
      var point = []
      point.push(parseFloat(latitudeWkt))
      point.push(parseFloat(longitudeWkt))
      pointArr.push(point)
    }
    points.push(pointArr)
  })
  // console.log({points: points, count: count})
  return {
    points: points,
    count: count
  }
}

/**
 * 根据经纬度生成多点线面
 * @param  {[type]} type  [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function latlngs2MultiWkt(type, value) {
  var wkt = {}
  var latitudeWkt
  var longitudeWkt
  var latlngStr = ''
  switch (type) {
    case 'marker':
      value.forEach(function (el, idx) {
        longitudeWkt = el.lng
        latitudeWkt = el.lat
        latlngStr += '' + longitudeWkt + ' ' + latitudeWkt + (idx == (value.length - 1) ? '' : ', ')
      })
      wkt.geotext = 'MULTIPOINT (' + latlngStr + ')'
      wkt.geoType = 1
      wkt.longitude = longitudeWkt
      wkt.latitude = latitudeWkt
      break;
    case 'polyline':
      value.forEach(function (el, idx) {
        longitudeWkt = el[0].lng
        latitudeWkt = el[0].lat
        latlngStr += '(' + getWktStr(el) + (idx == (value.length - 1) ? ')' : '), ')
      })
      wkt.geotext = 'MULTILINESTRING (' + latlngStr + ')'
      wkt.geoType = 2
      wkt.longitude = longitudeWkt
      wkt.latitude = latitudeWkt
      break;
    case 'polygon':
      value.forEach(function (el, idx) {
        longitudeWkt = el[0].lng
        latitudeWkt = el[0].lat
        latlngStr += '((' + getWktStr(el) + ', ' + longitudeWkt + ' ' + latitudeWkt + (idx == (value.length - 1) ? '))' : ')), ')
      })
      wkt.geotext = 'MULTIPOLYGON (' + latlngStr + ')'
      wkt.geoType = 3
      wkt.longitude = longitudeWkt
      wkt.latitude = latitudeWkt
      break;
    default:
      // statements_def
      break;
  }
  return wkt
}

function getWktStr(latlngs) {
  // debugger
  var str = ''
  for (var j = 0, length2 = latlngs.length; j < length2; j++) {
    var latitudeWkt = latlngs[j].lng
    var longitudeWkt = latlngs[j].lat
    str += longitudeWkt + ' ' + latitudeWkt + (j == length2 - 1 ? '' : ', ')
  }
  return str
}

function strCharPosition(str, char) {
  var pos;
  var arr = [];
  pos = str.indexOf(char);
  while (pos > -1) {
    arr.push(pos);
    pos = str.indexOf(char, pos + 1);
  }
  return arr.length;
};

String.prototype.myReplace = function (f, e) { //把所有的f替换成e
  var reg = new RegExp(f, "g"); //创建正则RegExp对象
  return this.replace(reg, e);
}