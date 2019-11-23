var a = "adsd";
function vowel_Count(a)
{ 

  return a.replace(/[^aeiou]/g, "").length; 
}
window.alert(vowel_Count(a));
alert(vowel_Count(a));