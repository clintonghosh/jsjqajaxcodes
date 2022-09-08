var Name = "Michael Clinton"

function message() {
    alert("How are You ?");
}

// Alert by taking input from the user.
function newMessageName() {
    var nm = document.getElementById("nm").value;
    alert("Your Name is: " + nm)
}

// Reload Page after 5 Secs.
function reLoadPage() {
    // A const variable cannot be reassigned
    const myTimeout = setTimeout(reloader, 5000);
    function reloader() {
        location.reload();
    }
}

// Document.write method and reload after 1 sec
function documentWriteSample() {
    document.write("<h2>Hello World!</h2><p>Have a nice day!</p>");
    const myTimeout = setTimeout(reloader, 1000);
    function reloader() {
        location.reload();
    }
}

// Reload page after 2 Secs
function practiceReload() {
    const timeOut = setTimeout(reloader, 2000);

    function reloader() {
        location.reload(); // Reload is a Function use parenthesis
    }

}

// Local Variable
function localVariable() {
    var name = "Michael";
    alert("Local Variable: " + name);
}

// Global Variable
function globalVariable() {
    alert("Global Variable: " + Name);
    localVariable();        // Calling localVariable Function
}

// Window.value Global Variable
function globalVariableTyp() {
    window.value = 90;
    window.temporary = 199;
    WindowValue();        // Calling localVariable Function
}

// Alert Window Value
function WindowValue() {
    alert("Window Object Value: " + window.value);
    alert("Window Object Temporary: " + window.temporary);
}

// Primitive DataTypes
function primitiveDataTypes() {
    var str = "Hello"
    var num1 = 12
    var num2 = 11.5
    var nullValue = null
    alert("String Datatype: " + str + "\n Number: " + num1 + " \n Float: " + num2 + " \n Null Value: " + nullValue)
}

// JS Arithmetic Operators
function arithmeticOperators() {
    var a = 50;
    var b = 100;
    alert("Addition: " + (a + b) + " \nSubtraction: " + (a - b) + "\nMultiplication: " + (a * b) + "\nModulus: " + (a % b) +
        "\nDivision: " + (a / b) + "\nIncrement: " + (a++) + "\nDecrement: " + (b--))
    alert("After Increment: " + (a) + "\nAfter Decrement: " + (b))
}

// Switch Case
function switchCase() {
    var cs = "Thursday"
    var result = "null"
    switch (cs) {
        case 'Thursday':
            result = cs
            alert("Its " + result)
    }
}

// for loop
function forLoop() {
    for (i = 0; i < 4; i++) {
        document.write(i + "<br>")
    }
    const load = setTimeout(function loader() {
        location.reload()
    }, 2000)
}

// While Loop
function whileLoop() {
    var i = 1;
    while (i <= 15) {
        document.write(i + "<br>");
        i++;
    }
    const load = setTimeout(function loader() {
        location.reload()
    }, 2000)
}

// Do Loop
function doLoop() {
    var i = 1;
    do {
        document.write(i + "<br>");
        i++;
    } while (i >= 15)
    const load = setTimeout(function loader() {
        location.reload()
    }, 2000)
}

// JS Return Keyword
function returner() {
    return "Hello World"
    const load = setTimeout(function loader() {
        location.reload()
    }, 1000)
}

// Single Line Function
var add = new Function("num1", "num2", "return num1*num2");
function adder() {
    document.write(add(2, 8))
}

// Objects in Javascript {
// Create Object By Literal
function objectByLiteral() {
    emp = { Id: 1, Name: "Shashank", Salary: 40000 }
    document.write("Emp Id: " + emp.Id + "\n Emp Name: " + emp.Name + "\n Emp Salary: " + emp.Salary)
    reloadPage()
}

// Create Instance of Object
function instanceOfObject() {
    var emp = new Object()
    emp.id = 1
    emp.name = "Michael Clinton"
    emp.salary = 40000
    document.write("Emp Id: " + emp.id + "\n Emp Name: " + emp.name + "\n Emp Salary: " + emp.salary)
    reloadPage()
}


function ObjectConstructor(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
    this.changeSalary = changeSalary
    function changeSalary(otherSalary) {
        this.salary = otherSalary
    }
}
//}

// Array By ArrayLiteral
function arrayLiteral() {
    var names = ["Zhong", "Zhang", "Wang"]
    for (i = 0; i < names.length; i++) {
        document.write(names[i] + "<br>")
    }
}

// Using new Keyword
function byNewKeyword() {
    var names = new Array()
    names[0] = "Fresh"
    names[1] = "To"
    names[2] = "Home"
    for (i = 0; i < names.length; i++) {
        document.write(names[i] + "<br>")
    }
    reloadPage()
}

// Using JS Array Constructor
function arrayConstructor() {
    var names = new Array("Fresh", "To", "Home")
    for (i = 0; i < names.length; i++) {
        document.write(names[i] + "<br>")
    }
    reloadPage()
}

// JS Strings
function stringExample() {
    var str1 = "Hello"
    var str2 = new String("World");
    document.write("String1: " + str1 + " String 2: " + str2)
    reloadPage()
}

// Function to Reload Page
function reloadPage() {
    const load = setTimeout(function loader() {
        location.reload()
    }, 3000)
}

// JS Date
function datesDatatype() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    alert(hour + ":" + minutes + ":" + seconds)
}

// Arrow Functions
var arrowFunction = () => {
    alert('Im Arrow Function')
}

// Math  Functions
var mathFunctions = () => {
    alert("Absolute Value: " + Math.abs(15.65));
    alert("SQRT Value: " + Math.sqrt(15));
    alert("Floor Value: " + Math.floor(4.6));
    alert("Ceil Value: " + Math.ceil(4.6));
    alert("Round Value: " + Math.round(4.3));
}

// Browser Object Model
var browserObjectModel = () => {
    window.alert("Window Objects Upcoming");
    confirmBox();
    closeJS();
    window.alert("History Objects Upcoming");
    historyObjects();
}

var confirmBox = () => {
    var v = confirm("Are u sure?");
    if (v == true) {
        alert("ok");
    }
    else {
        alert("cancel");
    }
}

var setTimeoutJS = () => {
    setTimeout(
        function () {
            alert("Welcome to Javatpoint after 2 seconds")
        }, 2000);
}

var closeJS = () => {
    var openedUrl = window.open("https://www.w3schools.com", "_blank", "width=1000, height=1000"); // Open Function in javascript
    setTimeout(function () {
        openedUrl.close();
    }, 1000);
    // openedUrl.close();
}

var historyObjects = () => {
    // Can be Upgradable
    history.back();
    history.forward();
    history.go(-2);
    history.go(2);
}

// Form Validation

var validateForm = () =>{
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if(name==null || name==""){
        alert("Name can't be blank");
        return false;
    }else if(password.length<6){
        alert("Password characters can't be below 6");
        return false;
    }
}

// Validate Email
var ValidateEmail = () =>{
     var emailId = document.myform.email.value;
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
      {
        return (true)
      }else{
        alert("You have entered an invalid email address!")
        return (false)
      }
}

class Employee{
    // Class cannot be Redeclared.
    // Classes should be declared before invoking them.
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    details(){
        return this.name;
    }

    goBack(){
        setTimeout(function(){
            reloadPage();
         },1000);
    }
}

// Constructors in JS
var ConstructorJS = () =>{
    var e1 = new Employee(1,"Caught DJango Scam");
    document.write("Details: "+e1.details());
    e1.goBack();
}

// The class can be expressed without assigning any name to it.
var Emp = class{
    Emp(id, name){
        this.id=id;
        this.name=name;
        document.write("Name: "+this.name);
    }
}

// Calling nameLess Class
var noNameClass = () =>{
    new Emp(1,"Hostel");
    document.write(Emp.name);
}

// JS Objects - JavaScript Object by object literal
var jsObjects1 = () =>{
    var employee = {id:99,name:"Kong",Salary:40000};
    document.writeln("Emp ID: "+employee.id);
    document.writeln("Emp Name: "+employee.name);
    document.writeln("Emp Salary: "+employee.Salary);
    reloadPage();
}

//  By creating instance of Objects
var jsObjects2 = () =>{
    var emp = new Object();
    emp.id = 1;
    emp.name = "Hello"
    emp.salary = 90000
    document.writeln("Emp ID: "+emp.id);
    document.writeln("Emp Name: "+emp.name);
    document.writeln("Emp Salary: "+emp.salary);
    reloadPage();
}

// By using an Object constructor
function Employees(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

var callJSObjects3 = () =>{
    e = new Employees(101,"Rockers",90000);
    document.writeln("Emp ID: "+e.id+"<br>");
    document.writeln("Emp Name: "+e.name+"<br>");
    document.writeln("Emp Salary: "+e.salary+"<br>");
    reloadPage();
}

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
      
    this.changeSalary=changeSalary;  
    function changeSalary(otherId,otherName,otherSalary){  
        this.id=otherId;
        this.name=otherName;
        this.salary=otherSalary;  
    }  
}  

var EmpListFunction = () =>{
    emp = new emp(2,"Delhi",8410);
    document.writeln("Emp ID: "+emp.id+"<br>");
    document.writeln("Emp Name: "+emp.name+"<br>");
    document.writeln("Emp Salary: "+emp.salary+"<br>");
    emp.changeSalary(28,"GReP",95000);
    document.write("<br>");
    document.writeln("Emp ID: "+emp.id+"<br>");
    document.writeln("Emp Name: "+emp.name+"<br>");
    document.writeln("Emp Salary: "+emp.salary+"<br>");
    reloadPage();
}

// Prototype Function
function display(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
}

// Create Variable using prototype object
display.prototype.company = "MNC";

display.prototype.fullname = function(){
    return this.firstName+" "+this.lastName+" "+this.company;
}

var prototypeFunction = () =>{
    // Checked Function Names
    var employee1=new display("Martin","Roy");  
    var employee2=new display("Praksh","Paraman");
    document.write(employee1.fullname()+"<br>");
    document.write(employee2.fullname()+"<br>");
    reloadPage();
}

// Constructors in JS
class student{
    constructor(){
        this.rno = 101;
        this.name = "Mind";
    }
}

var constructorExample = () =>{
    var stud = new student();
    document.write("Student Roll No.: "+stud.rno+"<br>");
    document.write("Student Name: "+stud.name);
    reloadPage();
}

// Super keyword in JS
class companyName{
    constructor(){
        this.company = "MNC Company";
    }   
}

class Employe extends companyName{
    
    constructor(id, name){
        super();
        this.id = id;
        this.name = name;
    }

}

// Static Method in JS
class StaticTest{

    constructor(){
        document.writeln("Invoking from Constructor: ");
        document.writeln(StaticTest.display()+", ");
        // Invoking Using This.
        document.writeln(this.constructor.display()+"<br>");
    }

    show(){
        document.writeln("Invoking from another method: ");
        document.writeln(StaticTest.display()+"<br>");
    }

    static display(){
        return "Static Method is Invoked1";
    }

    static display(){
        return "Static Method is Invoked2";
    }

    static display_(){
        return "Static Method is Invoked_";
    }
}

class StudentTest{

    constructor(){
        var name;
        var marks;
    }

    setName(name){ 
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setMarks(marks){
        if(marks<0 || marks>100){
            alert("Invalid Marks");
            return false;
        }else{
            this.marks = marks;
            return true;
        }
    }

    getMarks(){
        return this.marks;
    }

}

function StudentObjectDefineProperty(name, marks){
     var s_name = name;
     var s_marks = marks;

     Object.defineProperty(this,"name",{
        get:function(){
            return s_name;
        },
        set:function(s_name){
            this.s_name=s_name;
        }
     });

     Object.defineProperty(this,"marks",{
        get:function(){
            return s_marks;
        },
        set:function(s_marks){
            alert("Marks: "+s_marks);
            if(s_marks<0 || s_marks>100){
                alert("Enter Valid Input....!");
            }else{
                this.s_marks = s_marks;
            }
        }
     });
}

class ExtendedDate extends Date{
    constructor(){
        super();
    }
}

class Bike{
    constructor(){
        this.company = "Hero";
    }
}

class Vehicle extends Bike{
    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }
}

var callInheritance = () =>{
    var v = new Vehicle("Honda",10000);
    document.write("Vehile Name: "+v.name+"<br> Vehicle Price: "+v.price+"<br> Vehicle Company: "+v.company);
}

// A Prototype-based approach for Inheritance
function bke(company){
    this.company = company;
}

bke.prototype.getCompany = function(){
    return this.company;
}

function Vhcle(name, price){
    this.name = name;
    this.price = price;
}

// Polymorphism 1
class A{

    display(){
        document.write("Hello World");
    }

}

class B extends A{

}

var callPolymorphism1 = () =>{
    var b = new B();
    b.display();
}

// Polymorphism 2

class C{
    display(){
        document.write("Inside C");
    }
}

class D extends C{
    display(){
        document.write("<br>Inside D");
    }
}

var callPolymorphism2 = () =>{
    var a= [new C(),new D()];
    a.forEach(function(msg){
        msg.display();
    });
}

// Polymorphism 3
class E{

}

E.prototype.display = function(){
    document.write("E is Invoked <br>");
}

class F{

}

F.prototype.display = function(){
    document.write("F is Invoked");
}

var callPolymorphism3 = () =>{
    var ds = [new E(), new F()];

    ds.forEach(function(msg){
        msg.display();
    });
}

var extendsPrototype = () =>{
    var bk = new bke("Honda");
    Vhcle.prototype = bk;
    var vc = new Vhcle("Prakash",60000);
    document.write("Company Name: "+vc.getCompany()+"<br>Username: "+vc.name+"<br>Price: "+vc.price);
}

var callExtendedDateClass = () =>{
    var ed = new ExtendedDate();
    document.write(ed.getDate()+"-"+(ed.getMonth()+1)+"-"+ed.getFullYear());
    reLoadPage();
}

var callStudentTest = () =>{
    var st = new StudentTest();
    st.setName("TimePass");
    var status = st.setMarks(-1);
    document.write("Name: "+st.getName()+"<br>");
    if(status==true){
        document.write("Marks: "+st.getMarks());
    }
}

var callStaticMethod = () =>{
    var sTest = new StaticTest();
    sTest.show();
    document.writeln(StaticTest.display_()+"<br>");
    document.writeln(StaticTest.display());
    //reloadPage();
}

var superKeyword = () =>{
    
    var eMp = new Employe(189, "WER");
    document.write("Employee ID: "+eMp.id+"<br>");
    document.write("Employee Name: "+eMp.name+"<br>");
    document.write("Employee Company: "+eMp.company+"<br>");
    reLoadPage();

}

var callStudentObjectDefineProperty = () =>{
    var data = new StudentObjectDefineProperty("Hello",-20);
    document.write("Student Name: "+data.name+"<br>Student Name: "+data.marks);
}

// Absract Class
function Vehic(VehicleName){
    this.VehicleName = VehicleName;
    throw new Error("You cannot create an instance of Abstract class");  
}

Vehic.prototype.display = function(){
    return this.VehicleName;
}

// Call Abstract Class
var callAbstractClass = () =>{
    var vh = new Vehic();
}

// DOM 
var documentObjectModel = () => {
    getbyID()
    getbyname()
    getbytagname()
    innerhtmlfunc()
}

var getbyID = () => {
    var byid = document.getElementById("byid").value
    alert("getElement By id" + byid)
}

var getbyname = () => {
    var byanimalname = document.getElementsByName("animal")
    var byfishname = document.getElementsByName("fish")
    alert("There are " + byanimalname.length + "  elements having name animal")
    alert("There are " + byfishname.length + "  elements having name fish")
}

var getbytagname = () => {
    var totalpara = document.getElementsByTagName("p")
    alert("There are total " + totalpara.length + " paragraphs")
}

var innerhtmlfunc = () => {
    var para = document.getElementById("myp").innerHTML
    var mylist = document.getElementById("myList").innerHTML
    document.getElementById("showdetails").innerHTML = "i am the value of id p5: " + para +" the value of list is: " + mylist 
    setTimeout(() => {
        location.reload()
    }, 5000);
}

// InnerText 
var checkstrength = () =>{
    var strengthmsg;
    var innertextvalue = document.getElementById("innertext").value
    if(innertextvalue.length<5 || innertextvalue.length==0 ){
        strengthmsg = "Poor";
        document.getElementById("strength").innerText=strengthmsg;
    }
    else{
        strengthmsg = "Good";
        document.getElementById("strength").innerText=strengthmsg;
    }
    setTimeout(() => {
        location.reload()
    }, 6000);
}

//cookies
// create, read, update and delete a cookie by using document.cookie property.
function setcookie(){
    var name = document.getElementById("nm").value
    var date = new Date()
    console.log(date.getHours());
    document.cookie = `name=${name};expires=Sun, ${date.getDate()} Aug 2022 ${date.getHours()}:${date.getMinutes()+1}:00 UTC` 
    //length is less then equal 5 because length of `name=` is 5. 
    if (document.cookie.length<=5) {
        alert("no cookies available Enter name")
    } else {
        alert("Cookie set as: "+document.cookie)
    }
}

function delcookie() {
    document.cookie=document.cookie+";max-age=0";  
}

// This Keyword
var website = "JavaTpoint";

var web = () =>{
    document.write(this.website);
}

// Creating an Object Named Address with variables initialized and getFullAddress Function to display details.
var Address = {
    company : "JavaTpoint",
    city: "Noida",
    state: "UP",

    getFullAddress : function(){
        return this.company+" "+this.city+" "+this.state;
    }
}

// Fetch the details by creating a variable and calling the object method.
var fetch = Address.getFullAddress();

var this_1 = () =>{
    document.write("Details Fetched: <br>"+fetch);
}

//  Create an Object with function getAddress -->
var Address_1 = {
    
    getAddress: function(){
          return this.company+" "+this.city+" "+this.state;
    }

}
//  Create an Object with variables Initialized -->
var addr = {
    company : "MCS",
    city : "Mumbai",
    state : "Maharashtra"
}

//  The call() and apply() method allows us to write a method that can be used on different objects.
var this_2 = () =>{
    document.write("Call: "+Address_1.getAddress.call(addr));
    document.write("<br>Bind: "+Address_1.getAddress.bind(addr));
}

var lang = "JAVA"

// create function lang_name with call method
function lang_name(call){
    call();    // Called call Method
}

// Create an Object with variable lang and language function.
var langs = {
    lang: "Spanish",
    language: function(){
        document.write(this.lang+" is popular programming language");
    }
}

var this_3 = () =>{
    lang_name(langs.language);
    lang_name(obj.language.bind(langs));
}

var consoleLog = () =>{
    x = 10;
    y = 15;
    z = x+y;
    console.log(z);
    console.log(a); // a is not initialized.
}

var sampleDebugger = () =>{
    x = 10;
    y = 15;
    z = x+y;
    debugger;
    console.log(z);
    console.log(a); // a is not initialized.
}

var hoistingJS = () =>{
    x=10;
    document.write("X: "+x);
    var x;
    document.write("<br>");
    document.write("Sum: "+sum(7,7));
    function sum(a,b){
        return a+b;
    } 
}

var strictJS = () =>{
    "use strict";
    x=99;
    document.write("X: "+x);
}

function addition(a,a){
   //"use strict"
   document.write("Addition: "+(a+a));
}

var dateComparison = () =>{
   var d1 = new Date("2022-09-06");
   var d2 = new Date("2022-09-07");
   if(d1>d2){
     alert("Greater");
   }else{
     alert("Smaller");
   }
}

var getCurrentdate = () => { 
    var d = new Date();
    alert(d);
}

var getCurrentTime = () => { 
    var d = new Date();
    var d1=new Date("2019-10-10, 10:10:10"); 
    alert(d.getTime());
    alert(d1.getTime());
}

var formattedDate = () =>{
    var currentDate = new Date();
    var formattedDate = currentDate.getFullYear()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getDay();
    alert("Formatted Date: "+formattedDate);
}




