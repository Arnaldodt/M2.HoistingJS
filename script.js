console.log ("Ejercicio 1:: imprime undefined_________________________________");

    var hello
    console.log(hello);                                   
    hello = 'world';

console.log ("Ejercicio 2:: imprime magnet____________________________________");

    var needle
    function test(){
        var needle
        needle = 'magnet';
        console.log(needle);
    }
    needle = 'haystack';
    test();

console.log ("Ejercicio 3:: imprime super cool________________________________");

    var brendan
    brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);

console.log ("Ejercicio 4:: imprime chicken y luego half-chicken______________");

    var food
    function eat(){
        var food
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
    food = 'chicken';
    console.log(food);
    eat();

console.log ("Ejercicio 5:: imprime chicken, fish, nothing y nothing__________");//NOK

    var mean
    mean = function() {
        var food
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
    mean();
    console.log(food);
    console.log(food);

console.log ("Ejercicio 6:: imprime undefined, rock, r&b y disco______________");

    var genre
    function rewind() {
        var genre
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
    genre = "disco";
    rewind();
    console.log(genre);

console.log ("Ejercicio 7:: imprime san jose, seattle, burbank y san jose_____");

    function learn() {
        var dojo
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    dojo = "san jose";
    console.log(dojo);
    learn();
    console.log(dojo);

console.log ("Ejercicio 8:: imprime {name:Chicago,students:65,hiring:true} y genera error");

    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }

    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    
