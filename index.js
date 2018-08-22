let express = require("express");
let users = require("./state").users;

let bodyParser = require("body-parser");
const app = express();

let theParser = bodyParser.json();
app.use(theParser);
//app.use(bodyParser.json());


// app.get("/users/:userId",function (request,response,next){
//     response.json(users[0])
//    });

   

// any time you recieve a request message
// use this funtion to decide what to respond with
// app.use(function(request,response,next){
        
//     if(request.path == "/users" && request.method == "GET"){
//     return response.send(users);
//     }
       
app.get("/users", function(req, res, next){
    return res.send(users);
});
       
        // if(request.path == "/users" && request.method == "GET"){
        //     return response.send(users[0]);
        //     }
app.get("/users/:userId",function (request,response,next){
    return response.json(users[request.params.userId]);
});

            //  if(request.path == "/users" && request.method == "POST"){
            //     users.push({
            //         "_id": 6,
            //         "name": "Michael Sam",
            //         "occupation": "Professional Pirate",
            //         "avatar": "http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337"
            //     });
            //     return response.send(users);
            
app.post("/users", function(request,res,next){
     /*request body*/
   if(request.body.name ==''){
    res.send('give me a name')
 }
    let newUser = request.body;        
        users.push(newUser);
        res.send(newUser);
        })
    
    // request body
    // let newUser = {
    //     "_id": 6,
    //     "name": "Michael Sam",
    //     "occupation": "Professional Pirate",
    //     "avatar": "http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337"
    // };
    

    //  if(request.path == "/users" && request.method == "PUT"){
    //  users[0].name= 'alfredo stromboli'
    //  return response.send(users);
    //    }
    // });
            
    app.put("/users", function(req, res, next){
        users[0].name= 'alfredo stromboli'
        res.send(users[0]);
    })

    // if(request.path == "/users" && request.method == "Delete"){
    //     users.pop()
    //     return response.send('its gone!');
    //     }    

    //return response.send(users);

            app.delete("/users", function(req, res, next){
                users.pop()
                return res.send("deleted");
       })

    
    /*app.use(function hello1(request,response,next){
        request.message = "Hello from hello1";
        console.log("Hello 1");
        next();
       });
       app.use(function(request,response,next){
        console.log(request.message);
        next();
       });
       app.use(function(request,response,next){
        console.log("Hello 3");
        response.send("Hello 3");
       });*/
       

app.listen(3002, (err) => {
if (err) {
  return console.log("Error", err);
}
});
console.log("Web server is now living in apartment 3002")
