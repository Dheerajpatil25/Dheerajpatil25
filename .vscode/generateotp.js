function generateOTP(lenght){
    let otp ="";
    for(let i=0;i<lenght;i++){
        otp +=Math.floor(MATH.random() * 10).toString();
      } 
      return otp;
}
console.log(generateOTP(6));