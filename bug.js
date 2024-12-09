```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $match: { /* filter criteria */ }
  },
  {
    $group: {
      _id: "$fieldName",
      total: { $sum: "$anotherField" }, //Error: should be $anotherField
    }
  }
]);
```