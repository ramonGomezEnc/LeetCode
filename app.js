const findMatrix = nums => {
    const counter = {};
    const res = [];

    for (const n of nums) {
        if (!counter[n])  counter[n] = 0;

        let row = counter[n];
        if (res.length === row)  res.push([]);

        res[row].push(n);
        counter[n]++;
    }

    return res;
};

// Example #1 from the LeetCode problem
console.log(findMatrix([1,3,4,1,2,3,1]));

// Example #2 from the LeetCode problem
console.log(findMatrix([1,2,3,4]));