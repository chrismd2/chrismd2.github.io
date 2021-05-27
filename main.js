import * as firebase from "firebase/app";

function testFirebase(str) {
  var strObj = {
    string: str
  };
  firebase.database().ref('messages').entries().set(strObj)
    .then(function(snapshot) {
      success();
    }, function(error) {
      console.log('error' + error);
      error();
    }
  );
  alert("main.js ran testFirebase");
}

export function test2(){
  testFirebase("junk")
}
