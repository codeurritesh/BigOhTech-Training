
const numbers = [-1, 9, 8, -3, 4];
const targetSum = 5;
const combinations = findNumberCombinations(numbers, targetSum);
console.log(combinations); 
console.log("Number of combinations:", combinations.length);

function findNumberCombinations(nums, tSum) {
    const finalresult = [];
    
    function countWays(initialIndex, tSum, combinations, visited) {
        if (tSum === 0) {
            finalresult.push([...combinations]);
            return;
        }
        
        for (let i = initialIndex; i < nums.length; i++) {
            if (visited[i])
             continue;

            //For positive side
            combinations.push(nums[i]);
            visited[i] = true;
            // Recursive call with updated tSum and combinations
            countWays(i + 1, tSum - nums[i], combinations, visited); 
            // Backtrack
            combinations.pop(); 
            visited[i] = false;
            
            // For negative side
            combinations.push(-nums[i]);
            visited[i] = true;
            // Recursive call with updated tSum and combinations
            countWays(i + 1, tSum + nums[i], combinations, visited); 
            combinations.pop(); // Backtrack
            visited[i] = false;
        }
    }
    
    countWays(0, tSum, [], Array(nums.length).fill(false));
    return finalresult;
}
