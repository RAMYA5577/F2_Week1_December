let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(item => item.profession=="developer" ? console.log(item) : null );
  }
  
  // 2. Add Data
  function addData() {
    let f_name=prompt("Enter Your Name");
    let f_age=parseInt(prompt("Enter Your Age"));
    let f_professiion=prompt("Enter Your Profession");

    data.push({f_name,f_age,f_professiion});
    console.log("Your updated data: " , data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data=data.filter(item=> item.profession!="admin");
    console.log("Here is the updated data: " ,data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data2=[
        {name:"Rams",age:21,profession:"developer"},
        {name:"mams",age:21,profession:"admin"}
    ]
    let combinedArray=data.concat(data2);
    console.log("Here is your concatenated array: " , combinedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum=0;
    data.forEach(item=> sum+=parseInt(item.age));
    console.log(sum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for( let i=0;i<data.length;i++){
        if(data[i].age>25){
            console.log("Person Greater than 25 exists");
            break;
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfessions=[];
    data.forEach(item=> {
        if(!uniqueProfessions.includes(item.profession)){
            uniqueProfessions.push(item.profession);
        }
    })
    console.log("Unique professions: " ,uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=> a.age -b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(item=>{ 
        if(item.name=="john"){
            item.profession="Manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devCount=data.filter(item=> item.profession=="developer").length;
    let adminCount=data.filter(item=> item.profession=="developer").length;
    console.log(`Developers: ${devCount} ; Admins: ${adminCount}`);

  }