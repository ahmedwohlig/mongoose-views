function main() {
  let obp = [
    {
      _id: "ajshduag7",
      CompletedCount: 123,
      CompletedTotal: 1234,
    },
    {
      _id: "ppop",
      CompletedCount: 123,
      CompletedTotal: 1234,
    },
  ];

  let obp2 = [
    {
      _id: "ajshduag7",
      pendingCount: 432,
      pendingTotal: 555,
    },
    {
      _id: "12ionai",
      pendingCount: 432,
      pendingTotal: 555,
    },
  ];

  let idArray = [...obp, ...obp2];
  console.log(idArray);
  let idarrays = [];
  let finalArray = [];
  idArray.forEach((item) => {
    console.log(item);
  });
}

main();
