function validate(obj) {


    function isValidMethod() {
        if (obj.method !== undefined) {

            if (obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'DELETE' && obj.method !== 'CONNECT') {
                throw new Error('Invalid request header: Invalid Method');
            }
            return true;
        } else {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function isValidUri() {
        const uri = obj.uri;
        if (uri !== undefined) {
            const pattern = /(^[\w.]+$)/;
            //        for (let i = 0; i < uri.length; i++) {
            //             if (uri[i].length !== 1 || pattern.test(uri[i])) {
            //                 throw new Error('Invalid request header: Invalid URI');
            //             }
            // }
            if (uri.length < 1 || !pattern.test(uri)) {
                throw new Error('Invalid request header: Invalid URI');
            }
            return true;
        } else {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function isValidVersion() {
        if (obj.version !== undefined) {
            if (obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0') {
                throw new Error('Invalid request header: Invalid Version');
            }
            return true;
        } else {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function isValidMessage() {
        const message = obj.message;
        const pattern = (/[<>\\&'"]/gm);
        if (message !== undefined) {
            for (let i = 0; i < message.length; i++) {
                if (pattern.test(message[i])) {
                    throw new Error('Invalid request header: Invalid Message');
                }
                // if (message[i] === "<" && message[i] === ">" && message[i] === "\\" && message[i] === '\'' && message[i] === '\"') {
                //     throw new Error('Invalid request header: Invalid Message');
                // }
            }
            return true;
        } else {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    if (isValidMethod() && isValidUri() && isValidVersion() && isValidMessage()) {
        return obj;
    }
}

//console.log(validate({
//        method: 'GET',
//        uri: 'svn.public.catalog',
//        version: 'HTTP/1.1',
//        message: ''
//    }
//));
//
//console.log('----------------');

validate({
    method: 'GET',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
});