var Name = "Michael Clinton"

function message(){
    alert("How are You ?");
}

// Alert by taking input from the user.
function newMessageName(){
     var nm = document.getElementById("nm").value;
      alert("Your Name is: "+nm)
}

// Reload Page after 5 Secs.
function reLoadPage(){
    // A const variable cannot be reassigned
    const myTimeout = setTimeout(reloader, 5000);
    function reloader() {
        location.reload();
    }
}

// Document.write method and reload after 1 sec
function documentWriteSample(){
    document.write("<h2>Hello World!</h2><p>Have a nice day!</p>");
    const myTimeout = setTimeout(reloader, 1000);
    function reloader() {
        location.reload();
    }
}

// Reload page after 2 Secs
function practiceReload(){
    const timeOut = setTimeout(reloader,2000);

    function reloader(){
        location.reload(); // Reload is a Function use parenthesis
    }

}

// Local Variable
function localVariable(){
    var name = "Michael";
    alert("Local Variable: "+name);
}

// Global Variable
function globalVariable(){
    alert("Global Variable: "+Name);
    localVariable();        // Calling localVariable Function
}

// Window.value Global Variable
function globalVariableTyp(){
    window.value = 90;
    window.temporary = 199;  
    WindowValue();        // Calling localVariable Function
}

// Alert Window Value
function WindowValue(){
    alert("Window Object Value: "+window.value);
    alert("Window Object Temporary: "+window.temporary);
}

// Primitive DataTypes
function primitiveDataTypes(){
    var str = "Hello"
    var num1 = 12
    var num2 = 11.5
    var nullValue = null
    alert("String Datatype: "+str+"\n Number: "+num1+" \n Float: "+num2+" \n Null Value: "+nullValue)
}

// JS Arithmetic Operators
function arithmeticOperators(){
    var a = 50;
    var b = 100;
    alert("Addition: "+(a+b)+" \nSubtraction: "+(a-b)+"\nMultiplication: "+(a*b)+"\nModulus: "+(a%b)+
    "\nDivision: "+(a/b)+"\nIncrement: "+(a++)+"\nDecrement: "+(b--))
    alert("After Increment: "+(a)+"\nAfter Decrement: "+(b))
}

// Switch Case
function switchCase(){
    var cs = "Thursday"
    var result = "null"
    switch(cs){
        case 'Thursday':
            result = cs
            alert("Its "+result)
    }
}

// for loop
function forLoop(){
    for(i=0;i<4;i++){
        document.write(i+"<br>")
    }
    const load = setTimeout(function loader(){
        location.reload()
    }, 2000)
}

// While Loop
function whileLoop(){
    var i = 1;
    while(i<=15){
        document.write(i+"<br>");
        i++;
    }
    const load = setTimeout(function loader(){
        location.reload()
    }, 2000)
}

// Do Loop
function doLoop(){
    var i = 1;
    do{
        document.write(i+"<br>");
        i++;
    }while(i>=15)
    const load = setTimeout(function loader(){
        location.reload()
    }, 2000)
}

// JS Return Keyword
function returner(){
    return "Hello World"
    const load = setTimeout(function loader(){
        location.reload()
    }, 1000)
}

// Single Line Function
var add = new Function("num1","num2","return num1*num2");
function adder(){
    document.write(add(2,8))
}

// Objects in Javascript {
// Create Object By Literal
function objectByLiteral(){
   emp = {Id:1,Name:"Shashank",Salary:40000}
   document.write("Emp Id: "+emp.Id+"\n Emp Name: "+emp.Name+"\n Emp Salary: "+emp.Salary)
   reloadPage()
}

// Create Instance of Object
 function instanceOfObject(){
    var emp = new Object()
    emp.id = 1
    emp.name = "Michael Clinton"
    emp.salary = 40000
    document.write("Emp Id: "+emp.id+"\n Emp Name: "+emp.name+"\n Emp Salary: "+emp.salary)
    reloadPage()
 }


 function ObjectConstructor(id, name, salary){
    this.id=id
    this.name=name
    this.salary=salary
    this.changeSalary = changeSalary
    function changeSalary(otherSalary){
        this.salary = otherSalary
    }
 }
 //}

 // Array By ArrayLiteral
 function arrayLiteral(){
    var names = ["Zhong","Zhang","Wang"]
    for(i=0;i<names.length;i++){
        document.write(names[i]+"<br>")
    }
 }

 // Using new Keyword
 function byNewKeyword(){
    var names = new Array()
    names[0] = "Fresh"
    names[1] = "To"
    names[2] = "Home"
    for(i=0;i<names.length;i++){
        document.write(names[i]+"<br>")
    }
    reloadPage()
 }

 // Using JS Array Constructor
 function arrayConstructor(){
    var names = new Array("Fresh","To","Home")
    for(i=0;i<names.length;i++){
        document.write(names[i]+"<br>")
    }
    reloadPage()
 }

 // JS Strings
 function stringExample(){
    var str1 = "Hello"
    var str2 = new String("World");
    document.write("String1: "+str1+" String 2: "+str2)
    reloadPage()
 }

// Function to Reload Page
function reloadPage(){
    const load = setTimeout(function loader(){
        location.reload()
    }, 1000)
}

// JS Date
function datesDatatype(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    alert(hour+":"+minutes+":"+seconds)
}

// Arrow Functions
var arrowFunction = () =>{
     alert('Im Arrow Function')
}

// Math  Functions
var mathFunctions = () =>{
    alert("Absolute Value: "+Math.abs(15.65));
    alert("SQRT Value: "+Math.sqrt(15));
    alert("Floor Value: "+Math.floor(4.6));
    alert("Ceil Value: "+Math.ceil(4.6));
    alert("Round Value: "+Math.round(4.3));
}

// Browser Object Model
var browserObjectModel = () =>{
    window.alert("Window Objects Upcoming");
    confirmBox();
    closeJS();
    window.alert("History Objects Upcoming");
    historyObjects();
}

var confirmBox = () =>{
    var v= confirm("Are u sure?");  
    if(v==true){  
        alert("ok");  
        }  
        else{  
        alert("cancel");  
    }  
}

var setTimeoutJS = () =>{  
    setTimeout(  
        function(){  
            alert("Welcome to Javatpoint after 2 seconds")  
        },2000);  
}

var closeJS = () =>{  
    var openedUrl = window.open("https://www.w3schools.com", "_blank", "width=1000, height=1000"); // Open Function in javascript
    setTimeout(function(){
       openedUrl.close();
    },1000);
    // openedUrl.close();
}

var historyObjects = () =>{
    // Can be Upgradable
    history.back();  
    history.forward();
    history.go(-2);
    history.go(2);
}






