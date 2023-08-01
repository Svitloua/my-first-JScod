const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('чи подобається вам працювати в JavaScript? (y/n) ', (answer1) => {   
    rl.question('чи знаєте ви щось про змінні? (y/n) ', (answer2) => {
        rl.question('чи хотіли ви більше дізнатися про Java? (y/n) ', (answer3) => {  
            rl.question('маєте складнощі роботі? (y/n) ', (answer4) => { 
                rl.question('чи є побажання щодо курсу?  (y/n) ', (answer5) => { 
               
            // rl.guestion('чи є складності в роботі з JS? (y/n) ', (answer4)  => { 
                // rl.guestion('чи є побажання щодо навчального курсу? (y/n) ', (answer5) => {

            console.log(`Ваші відповіді:\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}\n4. ${answer4}\n5. ${answer5}`);

                 rl.close();

                });
            });
        });
    });
});