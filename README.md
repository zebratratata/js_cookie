# function for work with cookie (reading, writing, deleting)
## Examples
set:

cookie('mytestcookie', 'value', {
    path: '/',
    expires: 10
});

### path

    path: '/'

set cookie to all pages

### expires

    expires: 10

set to 10 days, or can set date (new Date())

### domain
    domain: 'mydomain'

The domain where the cookie is valid

### secure

    secure: true

The cookie transmission requires a secure protocol (https)

###get:
    var value = cookie('mytestcookie');

return cookie value or null

###remove
    cookie('mytestcookie', null);