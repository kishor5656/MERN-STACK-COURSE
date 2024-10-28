function subarraySum(nums, k) {
    let count = 0;
    let curr_sum = 0;
    let sum_map = {0: 1}; 

    for (let num of nums) {
        curr_sum += num;
        
        if ((curr_sum - k) in sum_map) {
            count += sum_map[curr_sum - k];
        }
        
        if (curr_sum in sum_map) {
            sum_map[curr_sum]++;
        } else {
            sum_map[curr_sum] = 1;
        }
    }

    return count;
}

let nums = [1,2,3,3,0];
let k = 3;
console.log(subarraySum(nums, k)); 