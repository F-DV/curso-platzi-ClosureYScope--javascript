const Person = () => {
    var saveName = 'Name';

    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

var newPerson = Person();
console.log(newPerson.getName());
newPerson.setName('felipe');
console.log(newPerson.getName());