// Завдання 1: Порахувати кількість літер "a" у рядках
function getLetterCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const firstRowCount = getLetterCount(firstRow, letter);
    const secondRowCount = getLetterCount(secondRow, letter);

    if (firstRowCount > secondRowCount) {
        return firstRow;
    } else if (secondRowCount > firstRowCount) {
        return secondRow;
    } else {
        return 'Кількість літер однакова в обох рядках';
    }
}

document.getElementById('task1Button').addEventListener('click', function() {
    const firstRow = prompt('Введіть перший рядок', 'Slow and steady wins the race');
    const secondRow = prompt('Введіть другий рядок', 'You can say that again');
    const letter = prompt('Яку літеру порахувати?', 'a');
    const result = getRow(firstRow, secondRow, letter);
    alert(`Більше літер "${letter}" у рядку: ${result}`);
});

// Завдання 2: Форматування телефону
function formattedPhone(phone) {
    let formatted;
    
    if (phone.startsWith('+38') && phone.length === 13) {
        formatted = phone.slice(0, 3) + ' (' + phone.slice(3, 6) + ') ' + phone.slice(6, 9) + '-' + phone.slice(9, 11) + '-' + phone.slice(11);
    } else if (phone.startsWith('8') && phone.length === 11) {
        formatted = '+38 (' + phone.slice(1, 4) + ') ' + phone.slice(4, 7) + '-' + phone.slice(7, 9) + '-' + phone.slice(9);  
    }else if (phone.startsWith('+8') && phone.length === 12) {
        formatted = '+38 (' + phone.slice(2, 5) + ') ' + phone.slice(5, 8) + '-' + phone.slice(8, 10) + '-' + phone.slice(10);
    } else if (phone.startsWith('+0') && phone.length === 12) {
        formatted = '+38 (' + phone.slice(2, 5) + ') ' + phone.slice(5, 8) + '-' + phone.slice(8, 10) + '-' + phone.slice(10);
    } else if (phone.startsWith('0') && phone.length === 10) {
        formatted = '+38 (' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6, 8) + '-' + phone.slice(8);
    } else {
        formatted = 'Неправильний формат номера телефону';
    }

    return formatted;
}

document.getElementById('task2Button').addEventListener('click', function() {
    const phone = prompt('Введіть номер телефону у форматі +380 або 0 або 8', '+380664567890');
    const result = formattedPhone(phone);
    alert(result);
});
