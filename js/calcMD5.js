self.addEventListener("message", function(e) {
    var data = e.data;
    importScripts("https://cdn.jsdelivr.net/gh/satazor/js-spark-md5/spark-md5.min.js");
    var md5_obj = new SparkMD5();
    var reader = new FileReader();
    reader.readAsText(data);
    reader.onload = function() {
        md5_obj.appendBinary(reader.result);
        var md5 = md5_obj.end();
        postMessage(md5);
        self.close();
    }

});
