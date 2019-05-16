function read(data) {
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
      dataContentArr = newStr.split(/\,\s?/)
      break;
    case 1:
      dataContent = newStr.slice(1, newStr.length - 1)
      dataContentArr = dataContent.split(/\)\s?\,\s?\(/)
      break;
    case 2:
      dataContent = newStr.slice(2, newStr.length - 2)
      dataContentArr = dataContent.split(/\)\)\s?\,\s?\(\(/)
      break;
    default:
      // statements_def
      break;
  }
  // console.log(dataContentArr)
  var points = []
  dataContentArr.forEach(function(el, idx) {
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
  console.log(data, points, count)
  return points;
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