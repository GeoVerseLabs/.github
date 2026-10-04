/* WGS-84 ↔ GCJ-02 ↔ BD-09 — the widely published approximation, for illustration only. */
(function (global) {
  var PI = Math.PI, A = 6378245.0, EE = 0.00669342162296594323, XPI = PI * 3000.0 / 180.0;
  function outOfChina(lng, lat) { return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271; }
  function tLat(x, y) {
    var r = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    r += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    r += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
    r += (160.0 * Math.sin(y / 12.0 * PI) + 320.0 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
    return r;
  }
  function tLng(x, y) {
    var r = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    r += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    r += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
    r += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
    return r;
  }
  function wgs2gcj(lng, lat) {
    if (outOfChina(lng, lat)) return [lng, lat];
    var dLat = tLat(lng - 105.0, lat - 35.0), dLng = tLng(lng - 105.0, lat - 35.0);
    var radLat = lat / 180.0 * PI, magic = Math.sin(radLat);
    magic = 1 - EE * magic * magic;
    var sq = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((A * (1 - EE)) / (magic * sq) * PI);
    dLng = (dLng * 180.0) / (A / sq * Math.cos(radLat) * PI);
    return [lng + dLng, lat + dLat];
  }
  function gcj2bd(lng, lat) {
    if (outOfChina(lng, lat)) return [lng, lat];
    var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * XPI);
    var th = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * XPI);
    return [z * Math.cos(th) + 0.0065, z * Math.sin(th) + 0.006];
  }
  function distance(lng1, lat1, lng2, lat2) {
    var R = 6371008.8, r = PI / 180, dLat = (lat2 - lat1) * r, dLng = (lng2 - lng1) * r;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
  }
  global.GVCoords = { wgs2gcj: wgs2gcj, gcj2bd: gcj2bd, distance: distance, outOfChina: outOfChina };
})(window);
