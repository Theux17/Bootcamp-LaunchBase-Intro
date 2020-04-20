const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

// Adicionar transações

function createTransactions (transaction ) {
    user.transactions.push(transaction)
    

    if(transaction.type === 'credit'){
       user.balance = user.balance + transaction.value
    } else {
       user.balance = user.balance - transaction.value
    }

    return transaction
}

// Busca a maior transação

function getHigherTransactionByType(type){
    let higherTransacation 
    let higherValue = 0

    for(let transaction of user.transactions){ 
        if(transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransacation = transaction
        }

    }
    return higherTransacation
}

// Mostra a média das transações

function getAverageTranscationValue(){
    let sum = 0   
    
    for(let transaction of user.transactions ){
        sum += transaction.value

    }
    return sum / user.transactions.length

}

// Mostra o número de transações de cada tipo

function getTransactionsCount (count){
    count = {
        credit: 0,
        debit: 0
 
    }
       
    for(let transaction of user.transactions){
        if (transaction.type === 'credit'){
            count.credit++
        } else {
            count.debit++
        }
    }
    return count
}


createTransactions({type: 'credit', value: 50})
createTransactions({type: 'credit', value: 120})
createTransactions({type: 'debit', value: 80})
createTransactions({type: 'debit', value: 30})

console.log(getHigherTransactionByType('credit'))

console.log(getAverageTranscationValue())

console.log(getTransactionsCount())