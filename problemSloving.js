function check_arithmetic_Expression(x, y, z) {
    if((x+y) == z){
    return '+'
    }
    if((x-y) == z){
    return '-'
    }
    if((x*y) == z){
    return '*'
    }
    if((x/y) == z){
    return '/'
    }
    return false
  }
  
  console.log(check_arithmetic_Expression(10, 25, 35))
  console.log(check_arithmetic_Expression(10, 25, 250))
  console.log(check_arithmetic_Expression(30, 25, 5))
  console.log(check_arithmetic_Expression(100, 25, 4.0))
  console.log(check_arithmetic_Expression(100, 25, 25))