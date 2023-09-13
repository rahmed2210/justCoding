// A variable is a named storage for data

// We can use variables to store goodies, visitors, and other data

// --------------------------------------------------------------------------------------


//          let  -- keyword

//  use this keyword LET in modern javaScript to declare a variable

//   Variables are Containers for Storing Data
//   JavaScript Variables can be declared in 4 ways: Automatically. 
//       Using var. Using let. Using const.

/*
        let message = "hello"
    
        the concept of variable can be easily grasped if we imagine it as a box for data 
        with a uniquely named sticker on it

        the variable message can be imagined as a box labeled message with a value hello inside


        let message

        message = 'hello';
        message = 'world'; // value changed from hello to world
        alert(message); // world
*/


            let hello = 'hello word!';
            let message;
        //--> copy 'hello world' from hello into message

            message = hello;
        //--> now two variable hold the same data

     //   alert(hello); // hello world
    //    alert(message); // hello word

        console.log(hello)
        console.log(message)

/* 
    remember that we cannot declare 2 or more variables with the same name

            let message = 'hello world'

            let message = 'world'  --> leads to an error variable message is already declared
*/

/* 
                variable naming

        the name must contain only letters, numbers, or the symbols $ and _(underscore)

        first character can not be a number
*/

/* 
            RESERVED WORDS

            cannot be used as variable names

            let, return, function, etc...
*/

