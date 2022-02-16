function employeeDetails(){
    var empName = "sankalp";
    var age = 23;
    var designation = "Developer";
    var salary = 20000;
    return{
        getName : function(){
            console.log("Name of employee : "+empName);
        },
        getAge : function(){
            console.log("Age of employee : "+age);
        },
        getDesignation : function(){
            console.log("Designation of employee : "+designation);
        },
        getSalary : function(){
            console.log("Salary  : "+salary);
        },
    }
}
var empDetail = employeeDetails();
empDetail.getName();
empDetail.getAge();
empDetail.getDesignation();
empDetail.getSalary();