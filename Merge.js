

function Merge(...args)
{
   let a=[].concat(...args)
   return a;
}

console.log(Merge([1,2],[3,4],[5,6]));