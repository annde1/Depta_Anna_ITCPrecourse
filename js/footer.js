// const codingLanguages = ["HTML"]
const codingLanguages = ["HTML", "CSS", "JavaScript"]
// const codingLanguages = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"]

function languages(codingLanguages){
  let result = "";
  for (let i=0; i<codingLanguages.length; i++){
    
    let lang = codingLanguages[i];

    let myItem = "";
    if (i == codingLanguages.length - 1) {
      myItem = "";
    } else if (i == codingLanguages.length -2) {
      myItem = " and ";
    } else {
      myItem = ", ";
    }

    result = result + lang + myItem; 
  } 

  return result; 
};

const languagesText = languages(codingLanguages);
console.log(languagesText);

const myText = document.getElementById("languages");
myText.innerText = languagesText;