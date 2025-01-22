function reverseIterator(arr){
    let count=arr.length-1;
    return{
        [Symbol.iterator](){
            return{
                next(){
                    if(count>=0){
                        return{value:arr[count--],done:false}
                    }
                    else{
                        return{done:true}
                    }
                }
            };
        }
    };
}
const res=[1,2,3,4]
const result=reverseIterator(res);
for(const value of result){
    console.log(value)
}