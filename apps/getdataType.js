module.exports ={


  dataTypes: function(value){
    
    if (typeof value == 'object' && value == null){

      return 'no value';
    }

    else if (typeof value == 'undefined' && value == undefined){

      return 'no value';
    }
//boolean
    else if (typeof value=='boolean' && value===false){
    
      return value;
  
    }
  
    else if (typeof value=='boolean' && value===true){
    
      return value;
  
    }
  
    // number
    else if(value<100 && typeof value ==='number'){
    
      return 'less than 100';
    
    }
  
    else if(value > 100  && typeof value ==='number'){
    
      return 'more than 100';
    
    }
  
    else if(value==100 && typeof value ==='number'){
    
      return 'equal to 100';
    
    }

    else if(typeof value=='string'){
    
      return value.length;
    
    }

    // test Array value
    else if(typeof value[2] == 'number'){
    
      return value.length-1;
    
    }

    else if(typeof value[2] =='undefined'){
      
      return undefined;
    
    }
  }

}




