// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    money = {};
    if (currency > 10000) {
        money = {
          error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    } else {
        let h = 0;
        let q = 0;
        let d = 0;
        let n = 0;
        let p = 0;
        let curr = currency;
        for (curr; curr >= 50; curr = curr - 50) {
          h++
        };
        for (curr; curr >= 25; curr = curr - 25) {
          q++
        };
        for (curr; curr >= 10; curr = curr - 10) {
          d++
        };
        for (curr; curr >= 5; curr = curr - 5) {
          n++
        };
        for (curr; curr >= 1; curr = curr - 1) {
          p++
        };

       if (h > 0) {
         money['H'] = h
       };
       if (q > 0) {
         money['Q'] = q
       };
       if (d > 0) {
         money['D'] = d
       };
       if (n > 0) {
         money['N'] = n
       };
       if (p > 0) {
         money['P'] = p
       };
   };
   return money
}
