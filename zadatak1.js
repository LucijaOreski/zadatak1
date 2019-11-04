let unfiltered = [
    ["aaa",12],
    ["aaa",32],
    ["aaa",132],
    ["vsa",322],
    ["vsa",3332],
    ["vsa",342],
    ["ggg",122],
    ["gg",332132],
    ["ggg",2144],
    ["bbb",2323]
  ];

let filtered = {};

unfiltered.forEach(function(item){
    filtered[item[0]] = filtered[item[0]] || [];
    filtered[item[0]].push(item[1]);
});

console.log(filtered);
