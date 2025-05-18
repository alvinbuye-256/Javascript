//Defining variables and if else statement for userRole and accessLevel

let userRole = "admin";
let accessLevel;

//If userRole is "admin", the code with assign accessLevel as "Full access granted".
//If not, it will proceed to check if userRole is "manager".
//If userRole is "manager", it will assign accessLevel as "Limited access granted".
//If userRole is neither "admin" nor "manager", the code will assign accessLevel as "No access granted".
// The code uses if-else statements to check the value of userRole and assign the appropriate accessLevel.

if (userRole === "admin") {
  accessLevel = "Full Access granted";
} else if (userRole ==="Manager"){
    accessLevel = "Limited Access granted";
} else accessLevel = "No Access granted";
console.log("AccessLevel:", accessLevel,);



//Defining variables and nested if…else statementd for isLoggedIn and userMessage// 

//Nested if-else statements

/* 
If user is logged in isLoggedIn === true, the code checks the user's role (userRole).

If userRole is "admin", it sets userMessage to "Welcome, Admin!".
If userRole is not "admin", it sets userMessage to "Welcome, User!".
If User is not logged in isLoggedIn === false, then:

The message is set to "Please log in to access the system."
*/
let isLoggedin = true;
let userMessage;

if (isLoggedin) {
    if (userRole === "admin") {
        userMessage = "Welcome Admin!";
    } else {
        userMessage = "User!";
    }

} else {
    userMessage = "Please log in to access  the account!";
}
console.log("UserMessage:", userMessage);

//Defining variables and switch statement for userType and userCategory
//Switch statement

/*

The output for cases depend upon its value, such as:
Case "admin":

If userType is "admin", userCategory is assigned as "Administrator".
break; exits the switch statement after the assignment.
Case "manager":

If userType is "manager", userCategory is assigned as "Manager".
break; exits the switch statement after the assignment.
Case "subscriber":

If userType is "subscriber", userCategory is assigned as "Subscriber".
break; exits the switch statement after the assignment.
Default Case:

If userType doesn't match any defined cases ("admin", "manager", or "subscriber"), userCategory is assigned as "Unknown".

*/

let userType ="subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("UserCategory:", userCategory);