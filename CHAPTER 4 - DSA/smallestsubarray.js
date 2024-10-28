nums = [2,3,1,2,4,3]
let target = 7

function smallestsubarr(nums,target) {
    let minlength = Infinity
    let left = 0
    let sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum+=nums[right]
        while (sum>=target) {
            minlength = Math.min(minlength,right-left+1)
            sum-=nums[left]
            left++
        }
    }
    return minlength !== Infinity ? minlength : 0

}

console.log(smallestsubarr(nums,target));
