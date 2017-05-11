module.exports ={


  findMinMax: function(list_container){
    //initialize largest number to 0
    let largest_number = list_container[0];
    
    //find the first smallest element in an array using the first element and second element
    let smallest_number = list_container[0]
    

    //initialize array of minimum and maximum to an empty array

    let array_of_minimum_and_maximum = [];

    // 
    //let range = [for (i of Array(list_container.length).keys()) i];
    //find largest
    
      
    
    function* range (0, list_container.length-1, interval = 1) {
      for (let counter = 0; counter < list_container.length-1; counter += interval) {
        if(list_container[counter]>=largest_number) {
          largest_number = list_container[counter];
        
        } 
      }
    }

    function* range (0, list_container.length-1, interval = 1) {
      for (let counter = 0; counter < list_container.length-1; counter += interval) {
        if(list_container[counter]<=smallest_number) {
          smallest_number = list_container[counter];
        
        } 
      }
    }
      

    array_of_minimum_and_maximum.push(smallest_number);
    
    array_of_minimum_and_maximum.push(largest_number);
    if (smallest_number=largest_number){

      return array_of_minimum_and_maximum.push(largest_number);
    }
    else{

      return array_of_minimum_and_maximum.push(smallest_number, largest_number);

    }
      
      
    

  }

}




