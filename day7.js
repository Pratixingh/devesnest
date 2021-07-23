//Q1.
let student ={
    name: "Pratik",
    sclass: "B11",
    rollno: 2005594,
}
for( key in student)
console.log(key)
//Q2

  console.log(student);
  delete student.rollno;
  console.log(student);


//Q3

function size(Myobj) {
    var osize = 0;  
    for (key in Myobj) {
      osize++;
    }
    return osize;
};

var obj= size(student)
console.log(obj)

//4



