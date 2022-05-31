//CREATING CONSTRUCTOR ONE FOR THE USER 
const User = function(name){
this.name=name;
this.chatroom=null;
}
//ADDING THE TWO FUNCTIONS OF SEND AND RECEIVE THE MESSAGES FOR THE USER CONSTRUCTOR PROTYPE
User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);//HERE THIS STANDS FOR THE USER
        //console.log(this);
        
    },
    receive: function(message, from){
      console.log(`${from.name} to ${this.name} : ${message}`);
      //console.log(this);
    }
}

//CREATING CONSTRUCTOR TWO FOR CHATROOM
const Chatroom=function(){
    let users={};  //LIST OF USERS

    return {
        register: function(user){
            users[user.name]=user;
            user.chatroom=this;
        },
        send: function(message, from, to){
            if(to){
                //SINGLE USER MESSAGE BECAUSE TO IS SPECIFIED
                    to.receive(message, from)
            }else{
                //MASS MESSAGE AS TO IS NOT SPECIFIED
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }

}

//INSTANTIATING THE USER CONSTRUCTOR BY GIVING THE VALUES
const rahul = new User('Rahul');
const yuvaraj = new User('Yuvaraj');
const raja = new User('Raja');
const naveen=new User('Naveen');

//INSTANTIATING THE CHATROOM CONSTRUCTOR
const chatroom = new Chatroom();

//users[user.name]=user;
//users[Rahul]=rahul;
//user.chatroom=this;
//rahul.chatroom=this;
//this.chatroom=null;
//rahul.chatroom=HERE THE THIS WILL GO AND ADDED AS Rahul i.e the value of the constructor i guess
chatroom.register(rahul);
chatroom.register(yuvaraj);
chatroom.register(raja);
chatroom.register(naveen);


//NOW WE HAVE TO SEND THE MESSAGES 
rahul.send('Hello there raja', raja);
yuvaraj.send("Hello there folks");