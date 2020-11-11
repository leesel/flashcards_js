function makeCard (question, answer){
    this.question = question;
    this.answer = answer; //return {question,answer} (shorthand)
}
  
let keepCards = [];
  
function addCard (){
   let newQuestion = document.getElementById("makeQuestion").value;
   let newAnswer = document.getElementById("makeAnswer").value;
   let newCards = new makeCard(newQuestion, newAnswer);
   keepCards.push(newCards);
   document.getElementById("makeQuestion").value = "";
   document.getElementById("makeAnswer").value = "";
   renderCard(newQuestion, newAnswer);
  //  document.getElementById("question").innerHTML = newCards.question;
  //  document.getElementById("answer").innerHTML = newCards.answer;
}
  
  
function renderCard(question, answer){
    let clonedCard = document.getElementsByClassName("card")[0].cloneNode(true);
    clonedCard.getElementsByClassName("question")[0].innerHTML = question;
    clonedCard.getElementsByClassName("answer")[0].innerHTML = answer;
    clonedCard.className = "card";
    document.getElementById("card_list").prepend(clonedCard);
    clonedCard.getElementsByClassName("edit")[0].addEventListener("click", editButton);
    clonedCard.getElementsByClassName("delete")[0].addEventListener("click", deleteButton);
}
  
  
  // Edit Button
  
function editButton (){
    let changedQuestion = prompt("Please Enter Your New Question:");
    let changedAnswer = prompt("Please Enter Your New Answer:");  
    this.closest(".card").getElementsByClassName("question")[0].innerHTML = changedQuestion;
    this.closest(".card").getElementsByClassName("answer")[0].innerHTML = changedAnswer;
}
  
function deleteButton (){
    this.closest(".card").remove();
}  
