
var table = document.getElementById("myTable");


var text =
'{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

jsonObject = JSON.parse(text);
for (var i = 0; jsonObject.employees.length; i++) {
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var firstName = row.insertCell(0);
var lastName = row.insertCell(1);

// Add some text to the new cells:
firstName.innerHTML = jsonObject.employees[i].firstName ;
lastName.innerHTML = jsonObject.employees[i].lastName;

}
