(function (window, fn) {
    window[fn] = function (name, value, params) {
        if (arguments.length == 1) {
            return getCookie(name);
        }
        else {
            setCookie(name, value, params);
        }
    };

    function getCookie(name) {
        var cookies = document.cookie.split(';'), len = cookies.length, i = 0, c;
        for (; i < len; i += 1) {
            c = cookies[i].split('=');
            if (trim(c[0]) == name) {
                return decodeURIComponent(c[1]);
            }
        }
        return null;
    }

    function setCookie(name, value, params) {
        var expires = '', domain = '', secure = '', path = '', date;
        params = params || {};

        if (value == null || typeof value == 'undefined') {
            value = '';
            params.expires = -1;
        }
        if (params.expires) {
            if (typeof params.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (params.expires * 24 * 60 * 60 * 1000));
            }
            else {
                date = params.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        if (params.path) {
            path = '; path=' + params.path;
        }
        if (params.domain) {
            domain = '; domain=' + params.domain;
        }
        if (params.secure) {
            secure = '; secure';
        }
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure ].join('');

    }

    function trim(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
    }

})(window, 'cookie');