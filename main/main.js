module.exports = function main(email, suffixes) {
  // Write your code here
  var var1=new Array();
  var1=email.split("@");
  if(var1[1]==suffixes)
    console.log(`true`);
  else
    console.log(`false`);
};
