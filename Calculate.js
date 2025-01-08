function calculateTotal(...args)
{
   let res=0;
   for (let i = 0; i < args.length; i++) {
       res+=args[i];
   }
   return res;
}
let a=calculateTotal(10,20,30,40);
console.log(a);