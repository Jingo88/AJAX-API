var url = "http://api.randomuser.me/"
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(e) {
    var d = xhr.responseText
    var parsed = JSON.parse(d)
    var person = parsed['results'][0]['user']['email']
    console.log(person);
    // response["results"][num]["user"]["email"]
})
xhr.open("GET", url);
xhr.send();

// randomuser API endpoint: 
// http://api.randomuser.me/ ruby: response["results"][num]["user"]["email"] docs: https://randomuser.me/
