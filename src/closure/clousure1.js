function greeting(){
    let userName = 'Felipe';

    function displayUserName(){
        return `Hola ${userName}`
    }

    return displayUserName()
}

const g = greeting()
console.log(g);
