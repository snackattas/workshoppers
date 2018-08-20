var input = process.argv;
var nums = input.slice(2); // Cut the first 2 entries which aren't the user inputs
count = 0
for (i = 0; i < nums.length; i++) {
    count += Number(nums[i])
}
console.log(count);