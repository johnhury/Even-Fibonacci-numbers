var arr=[1,2];
var i=1;
var sum=0;
while(arr[i]<4024578)
{
 i++;
 arr.push(arr[i-2]+arr[i-1]);
}
arr.pop();
for(var j=0;j<=arr.length-1;j++){
if(j%2){
  sum+=arr[j];
 }
}
console.log(sum);
