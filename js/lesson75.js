// Обработка ошибок

'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('Result');
} catch (error) { 
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    // код необходимый для завершения начатого процесса
    // выполнится всегда
}

console.log('Still normal');