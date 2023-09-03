/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "apples", cost: 6.00, quantity: 7 },
    { name: "cinnamon", cost: 5.50, quantity: 1 },
    { name: "eggs", cost: 2.00, quantity: 1 },
  ];
  
  const pumpkinPieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "pumpkin", cost: 3.75, quantity: 2 },
    { name: "cinnamon", cost: 5.50, quantity: 1 },
    { name: "eggs", cost: 2.00, quantity: 1 },
  ];
  
  const cherryPieRecipe = [
    { name: "pie crust", cost: 10.00, quantity: 1 },
    { name: "sugar", cost: 3.00, quantity: 0.5 },
    { name: "butter", cost: 1.00, quantity: 1 },
    { name: "cherries", cost: 12.00, quantity: 10 },
    { name: "eggs", cost: 2.00, quantity: 1 },
  ];
  
  const recipes = {
    applePie: applePieRecipe,
    pumpkinPie: pumpkinPieRecipe,
    cherryPie: cherryPieRecipe
  };

/////////////////////////////////////////////////////////////////////////

function bakeAndSellPies(pieType, pieQuantity, profitMargin){
    countPie(pieType, pieQuantity);
    costMsg(pieType);
    revenue(pieType, pieQuantity, profitMargin);
};

const countPie = function(pieType, pieQuantity){
    for (let i = 0; i < pieQuantity; i++){
        combiningMsg(pieType);
        console.log(`Baked pie ${i + 1}!`);
    }
};

const combiningMsg = function (pieType){
    const recipe = recipes[pieType];
        let msg = `Combining ingredients for ${pieType}: `
        msg += recipe.map(ingredient => ingredient.name).join(', ');
        console.log(msg); 
};

const totalCostOfPie = function(pieType){
    const recipe = recipes[pieType];
    totalcost = recipe.reduce((prev, current) => {
        return prev + current.cost;
      }, recipe[0].cost);
      return totalcost;
};

const costMsg = function(pieType){
    cost = totalCostOfPie(pieType);
    console.log(`Cost per pie: ${cost}`);
};

const revenue = function(pieType, pieQuantity, profitMargin){
    let revenueofPie =  totalCostOfPie(pieType) * pieQuantity * (profitMargin || 1.2);
    console.log(`Sold ${pieQuantity} pies for $${revenueofPie.toFixed(2)}!`);
};

bakeAndSellPies("applePie", 5, 2.5);
// console.log(costMsg("applePie"))
