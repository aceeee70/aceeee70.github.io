
const fib=function(num){
if(num<0){
 num=-1*num; 
  }
if(num==1){
      return 1;
  }
  if(num==0){
    return 0;
}
return fib(num-1) + fib(num-2);
};

module.exports={
    fib:fib
};
