export const truncate = (input, length=25)=>{
    if(!input) return "";
    if(input.length<length){
        return input;
    }else{
        return input.substring(0,length)+" ...";
    }
}
