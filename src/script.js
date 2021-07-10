// Creating Options for State starts here
var options = document.getElementById('State');
var optionsList = [ "Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal",
"Andaman and Nicobar Islands",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry"];

optionsList.forEach(function(element,key){
    options[key] = new Option(element,element);
})
options[optionsList.length] = new Option("Select State",0,false,true);
// Creating Options for State Ends here 

// Condition to check if the table is empty starts here

headerLabels = ['ID','FirstName','LastName','Gender','Food','Address','Address2','City','State','Zip'];

function createTable(){
var empty = emptyCheck();
if(empty===0){
var tableCheck = document.getElementById('table');
var table = createTableData();   
if(tableCheck === null){
 
    document.body.append(table);
}
else{
    
    document.body.replaceChild(table,tableCheck);
}
document.getElementById("clear").click()
}
else{
alert("Enter all fields");
}  
}
// Condition to check if the table is empty Ends here 

// Creating Table with its Content starts here
function createTableData(){
    var table = createTag('table','','table','table');
    var headerRow = createTag('tr','','headerRow');

headerLabels.forEach((value)=>{
var headerCol = createTag('td',value,'headerCol');
headerRow.appendChild(headerCol);
});
table.append(headerRow);

var createdData = tableObjects();
createdData.forEach((data)=>{
    var tableBody = createTag('tr');
    for(var values in data){
        var bodyCol = createTag('td',data[values],'bodyCol');
        tableBody.appendChild(bodyCol);
    }
    table.append(tableBody);
});
return table;

}
// Creating Table with its contents ends here

// Appending a table on page on button click
document.getElementById('submit').addEventListener("click",createTable);

// Adding form values to the table starts here
var tableValue = [];
id=1;
function tableObjects(){
    var tableData = {};
headerLabels.forEach((value)=>{
    console.log(value)
    if(value==='ID'){
        tableData[value] = id++;
    }
    else{
    if(value==='Food'){
        console.log(value)
        tableData[value]='';
        console.log(document.getElementById(value+'1'))
        if(document.getElementById(value+'1').checked){
            tableData[value]+=  document.getElementById(value+'1').value+' ';
        }
        if(document.getElementById(value+'2').checked){
            tableData[value]+=  document.getElementById(value+'2').value+' ';
        }
        if(document.getElementById(value+'3').checked){
            tableData[value]+=  document.getElementById(value+'3').value+' ';
        }
        if(document.getElementById(value+'4').checked){
            tableData[value]+=  document.getElementById(value+'4').value+' ';
        }
        if(document.getElementById(value+'5').checked){
            tableData[value]+=  document.getElementById(value+'5').value+' ';
        }
    } 
    else if(value==='Gender'){
        if(document.getElementById('Male').checked){
            tableData[value]= document.getElementById('Male').value;
        }
        else if(document.getElementById('Female').checked){
            tableData[value]= document.getElementById('Female').value;
        }
       
    }   
    else  { 
        tableData[value] = document.getElementById(value).value;
    }
    console.log(tableData)
    }
})
tableValue.push(tableData);
return tableValue;
}
// Adding form values to the table ends here


// Function to create HTML Tags starts here
function createTag(elemname,elemvalue='',elemid='',elemclass=''){
    var element = document.createElement(elemname);
    element.innerHTML = elemvalue;
    element.setAttribute('id',elemid);
    element.setAttribute('class',elemclass);
    return element;
}
// Function to create HTML Tags ends here

function emptyCheck(){
    count = 0;
   
    if(!document.getElementById('Food1').checked && !document.getElementById('Food2').checked && !document.getElementById('Food3').checked && !document.getElementById('Food4').checked && !document.getElementById('Food5').checked){
       count++; 
    }
    if(!document.getElementById('Male').checked && !document.getElementById('Female').checked){
        count++;
    }
    headerLabels.forEach((value)=>{
        if(value !== "ID" && value !=='Gender' && value !== 'Food'){
            var val = document.getElementById(value).value;
            if(val === ''){ 
                count++;
            }
        }
    })
    return count;
}