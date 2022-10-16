const Book = require('../models/book.model')
const Client = require('../models/client.model')


module.exports.bookController = {
createBook:(req,res) => {
    Book.create(req.body,(err,data)=>{
        if(err){
            res.json(err.message)
        } else{
            res.json(data)
        }
    })
},

findBook:(req,res) => {
    Book.find({},(err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
},

findBookByGenre:(req,res) => {
   Book.find({genre:req.params.id},(err,data)=>{
        if(err){
            res.json(err.message)
        } else{
            res.json(data)
        }
    }).populate('genre')
},

findBook:(req,res) => {
    Book.findById(req.params.id,(err,data)=>{
        if(err){
            res.json(err)
        } else{
            res.json(data)
        }
    })
},

updateBook: async (req,res) => {
    try{
     const data = await Book.findByIdAndUpdate(req.body) .populate('client')
     res.json(data)
    } catch{
     res.json('изменен')
    }
   
 },


 giveBook: async (req,res) => {
try{
    const book = Book.findByIdAndUpdate(req.body.bookId)
    const client = Client.findByIdAndUpdate(req.body.clientId)
    if(Client.rentBooks.length === 3){
        res.json('Нельзя брать больше трех книг')
    };

    if(Client.isBlocked){
        res.json('Вы заблокированы')
    };

    if(Book.rent){
        res.json('книга уже аредована')
    }else{
  const takenBook = await Client.findByIdAndUpdate(req.body.clientId,{$addToSet:{rentBooks:req.body.bookId}})
  const givenBook = await Book.findByIdAndUpdate(req.body.bookId,{rent:req.body.clientId})
  res.json('книга выдана')
    }


} 
catch{
    res.json('ошибка')
}

 }
    
}




