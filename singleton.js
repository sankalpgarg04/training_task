var singletonone= (function empDetail(name,age,designation){
    var username=name;
    var uage=age;
    var udesignation=designation;
    return{
        empname : username,
        empage : uage,
        empdesignation : udesignation
    }
}("sankalp",23,"intern"))
console.log(singletonone);