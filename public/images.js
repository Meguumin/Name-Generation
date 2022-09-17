
 var randomNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function turn(){
  
    var randomNumber = randomNumbers[Math.floor(Math.random()*items.length)];
  randomNumbers.splice(randomNumber, 1);
 
  
   var image = document.getElementById('img');
  

    switch(randomNumber){
    case 1:
      image.src = "https://thumbs.dreamstime.com/z/business-person-807754.jpg";
      break;
      
    case 2:
      image.src = "https://thumbs.dreamstime.com/z/old-asain-man-holds-mobile- phone-smiles-old-asain-man-holding-mobile-phone-smiling-white-background-clipping-path-178796465.jpg";
      break;
      
    case 3:
      image.src = "https://thumbs.dreamstime.com/z/beautiful-asian-girl-celebrate-laptop-success-pose-education-technology-startup-business-concept-copy-space-84924488.jpg";
      break;
  
     case 4:
       image.src= "https://thumbs.dreamstime.com/z/smiling-asian-girl-student-study-library-laptop-books-undergraduate-teen-doing-online-research-coursework-making-notes-140712106.jpg";
      
    case 5:
    image.src = "https://thumbs.dreamstime.com/z/chinese-guy-794328.jpg";
        randomNumber = Math.floor((Math.random() * 8) + 1);
    break;
      
    case 6:
      image.src = "https://image.shutterstock.com/image-photo/handsome-young-asian-man-smiling-260nw-625939112.jpg";
      break;
      
    case 7:
      image.src = "https://image.shutterstock.com/image-photo/portrait-beautiful-smiling-young-woman-260nw-1612785259.jpg";
      break;
  
     case 8:
       image.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QeMGJ_5HrZ5IziWtUXbMuMqOiQ5oCqi_cDGx4at9zMq0CrlXLtyFezYxNP0AtrnM0Yk&usqp=CAU";
        
        case 9:
       image.src= "https://image.shutterstock.com/image-photo/portrait-smiling-athletic-young-asian-260nw-627946913.jpg";
       break;
  
  
        
    
  }

}