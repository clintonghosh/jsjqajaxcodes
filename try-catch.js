
var trySample = () =>{
    try{
        var a = 5;
        document.write("a: "+a+"<br>");
        document.write("b: "+b+"<br>");
      }catch(e){
        document.write("<br>Exception Message: "+e.message);
    }
}

var throwSample = () =>{
    try{
       throw new Error("Error Example");
      }catch(e){
        document.write("<br>Exception Message: "+e.message);
    }
}

var finallySample = () =>{
    try{
       throw new Error("Error Example");
      }catch(e){
        document.write("<br>Exception Message: "+e.message+"<br>");
      }finally{
        document.write("Finally Block Executed");
      }

}
