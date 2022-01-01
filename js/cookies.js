function setcookie(name, value, time) {
    var exp = new Date();
    exp.setTime(exp.getTime() + time);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getcookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

function delcookie(name, time) {
    var exp = new Date();
    exp.setTime(exp.getTime() - time);
    var cval = getcookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}

cookies = {
    setItem: function(name, value) {
        return setcookie(name, value, 1000 * 60 * 60 * 3);
    },
    getItem: function(name) {
        return getcookie(name);
    },
    removeItem: function(name) {
        return delcookie(name, 1000 * 60 * 60 * 3);
    }
};
