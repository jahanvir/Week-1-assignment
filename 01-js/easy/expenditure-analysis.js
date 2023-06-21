/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var ans = {}
  // console.log(transactions)
  for(let t of transactions){
    // console.log(t)
    price=t['price'];
    category=t['category'];
    if(category in ans){
      ans[category]+=price;
    }
    else{
      ans[category]=price;
    }
  }
  // const result = Object.entries(ans).map(([category,total])=>{[category]:total});
  const result = Object.entries(ans).map(([category, total]) => ({
    'category':category, 'totalSpent':total,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
