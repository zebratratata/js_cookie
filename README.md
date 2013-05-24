# function for work with cookie (reading, writing, deleting)
## Examples
set:
cookie('mytestcookie', 'value', {
    path: '/',          // set cookie to all pages
    domain: '/mydomain', //set domain
    secure: true,
    expires: 10         // set to 10 days, or can set date (new Date())
});

get:
    var value = cookie('mytestcookie');  // return cookie value or null

remove
    cookie('mytestcookie', null);