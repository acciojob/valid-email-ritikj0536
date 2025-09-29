function validEmail(str) {
  if (!str) return false; // empty string check
  
  // regex for valid email
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
