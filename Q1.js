let arr1=[1,2]
let arr2=[3,4]
let arr3=[5,6]
function Merge(...args)
{
   let res=0;
   console.log(args);
   for(let i=0;i<args.length;i++)
   {
    res+=args[i];
   }
   return res;
}
console.log(arr1,arr2,arr3);