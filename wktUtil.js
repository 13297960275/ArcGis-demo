/**
 *
 * @param {*} str
 * @param {*} char
 * @returns
 */
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
   * 根据多点线面wkt生成经纬度信息
   * @param  {[type]} data   [WKT数据]
   * @return {[type]} points [经纬度数组]
   * @return {[type]} type   [实体标识（marker，polyline，polygon）]
   */
  read: function (data) {
    // console.log(data)
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
    return {
      points: points,
      type: type
    };
  },

  /**
   * 根据经纬度生成多点线面
   * @param  {[type]} type  [description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  parse: function (type, value) {
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
  },

}


var ArcGISTran = function () {

}

ArcGISTran.prototype = {
  /**
   *wkt转化成arcgis的MultiPoint对象
   * @param wkt
   * @returns {Polyline}
   * @constructor
   */
  WktToPoint: function (wkt, spatialreference) {
    var wktUtil = new WKTUtil();
    var pts = wktUtil.read(wkt).points;
    var points = []
    if (pts.length == 1) {
      points = pts[0]
    } else {
      points = pts
    }
    var mpJson = {
      "points": points,
      spatialReference: spatialreference
    };
    var multipoint = new Multipoint(mpJson);
    return multipoint;
  },

  /**
   *wkt转化成arcgis的Polyline对象
   * @param wkt
   * @returns {Polyline}
   * @constructor
   */
  WktToPolyline: function (wkt, spatialreference) {
    var wktUtil = new WKTUtil();
    var points = wktUtil.read(wkt).points;
    var json = {
      paths: points,
      spatialReference: spatialreference
    }
    var polyline = new esri.geometry.Polyline(json);
    return polyline;
  },

  /**
   * wkt转化成arcgis的Polygon对象
   * @param wkt
   * @returns {Polygon}
   * @constructor
   */
  WktToPolygon: function (wkt, spatialreference) {
    var wktUtil = new WKTUtil();
    var points = wktUtil.read(wkt);
    var json = {
      rings: points,
      spatialReference: spatialreference
    }
    var polygon = new esri.geometry.Polygon(json);
    return polygon;
  },
}


var wkt = {
  pt: 'POINT(6 10)',
  ls: 'LINESTRING(3 4,10 50,20 25)',
  pg: 'POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2,2 3,3 3,3 2,2 2))',
  mpt: 'MULTIPOINT(3.5 5.6, 4.8 10.5)',
  mls: 'MULTILINESTRING((3 4,10 50,20 25),(-5 -8,-10 -8,-15 -4))',
  mpg: 'MULTIPOLYGON(((1 1,5 1,5 5,1 5,1 1),(2 2,2 3,3 3,3 2,2 2)),((6 3,9 2,9 4,6 3)))',
}

var datas = {}
var wktUtil = new WKTUtil();
for (var key in wkt) {
  datas[key] = wktUtil.read(wkt[key])
}