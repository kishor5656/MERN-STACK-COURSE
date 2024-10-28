function twosum(nums,target) {
    let left=0;
    let right=nums.length-1;
    let result=[];
    nums.sort((a,b)=>a-b)
    while (left<right) {
        const sum = nums[left]+nums[right];
        if (sum === 9) {
            result.push(nums[left],nums[right]);
            left++;
            right--;
        } else if(sum < target) {
            left++;
        } else{
            right--;
        }
    }
    return result;
}

console.log(twosum([2,7,11,15],9)); 