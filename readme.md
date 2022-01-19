### Send mail using EmailJs
 </br>

This project is all about sending mail using emailJs (https://emailjs.com) without using any backend language.

#### Setup
```javascript

    (function () {
        emailjs.init(USERID);
    })();
    
    emailjs.send("SERVICE ID", "TEMPLATE NAME", {
        to_name: "USERNAME",
        from_name: "FROM NAME",
        message: "MESSAGE",
    });
```
