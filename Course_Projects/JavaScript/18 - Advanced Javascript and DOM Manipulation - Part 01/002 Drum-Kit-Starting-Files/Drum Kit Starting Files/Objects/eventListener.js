function anotherAddEventListner(typeOfEvent , callback){

    //Detects the event ....

    var eventThatHappened = {
        eventType : "keypress",
        key : "p",
        Duration : 100,
    }
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

/*

calling the function anotherAddEventListner 
    anotherAddEventListner("keypress",function (event){
        console.log(event);
    });

*/



