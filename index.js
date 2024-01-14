const receivesAFunction = (callback) => {
  
    if (typeof callback === 'function') {
      callback();
    }
  };
  
  const returnsANamedFunction = () => {
   
    return function namedFunction() {
   
    };
  };
  
  
  const returnsAnAnonymousFunction = () => {
  
    return () => {
    
    };
  };