//============================================================
//=====================   UTILITAIRES   ======================
//============================================================
function getRandom(data) {
  if (typeof data === 'number') {
    return Math.floor(Math.random() * Math.floor(data));
  }
  if (Array.isArray(data) || typeof data === 'string') {
    return data[Math.floor(Math.random() * Math.floor(data.length))];
  }
  return `getRandom function only accept :  
    - Array
    - Number
    - Float (result will be an int)
    - string`;
}
//============================================================
//!!!Destructive function!!!
// passed array will get shuffled 
function shuffleArray(array){
  if (Array.isArray(array)){
    let extract;
      for(let i=0 ; i < array.length; i++){
        extract = array.pop();
        array.splice(getRandom(array.length), 0, extract);
      }
    console.log("array shuffled");
    return;
  }
  console.log(`This function must take an array as parameter`);
  return; 
}
//============================================================
//============================================================
//============================================================
function gift(array){
   if (Array.isArray(array)){
     shuffleArray(array);
      for(let i = 0 ; i < array.length-1 ; i++){
        console.log(`${array[i]} va offrir un cadeau à ${array[i+1]}`)
   }
     console.log(`${array[array.length-1]} va offrir un cadeau à ${array[0]}`);
  return;
  }
    console.log(`This function must take an array as parameter`);
  return;
}
//============================================================
//========================= TESTS ============================
//============================================================

//assert tests 
// for functions getRandom() and shuffle()
// - without an array as parameter 
// - with some kind of data
// - add false values 


let names = ['Florian', 'Mylene', 'Adrian', 'Jean-Pierre'];
gift(names);