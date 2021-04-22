Quero saber qual a quantidade de pessoas que não tenham olhos verdes, que tenham entre 20 a 30 anos e que gostem de maca ou banana

getPersonWithoutGreenEye - 
eyeColor: { $ne: 'green' },

getPersonWithAgeBetween20Until30
age: { $gt: 20, $lt: 30 },

getPersonsLikesBananaOrApple

favoriteFruit: {

​        $in: ['apple', 'banana'],

},



puttingAllTogether

eyeColor: { $ne: 'green' },

​      age: { $gt: 20, $lt: 30 },

​      favoriteFruit: {

​        $in: ['apple', 'banana'],

​      },





Complexa query

Quero saber qual seria a media de idade e o sexo, dos meus funcionarios das minhas empresas  na Alemanha. 

{
      $match: {
          $and: [
            {"company.location.country": "Germany"},
            {isActive: true}
          ]
      }
    },
    {
      $project: {
        gender: 1,
        age: 1,
        company: 1
      }  
    },
      {
         $group: {
           _id: {gender: "$gender", company: "$company.title"},
           count: {$avg: "$age" }
         }  
      },
     {$sort: {"_id.age": 1}}