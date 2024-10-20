function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}

// Правильный вызов функции
makeTea(3, "Eael Grey")

// недостающие аргументы
makeTea (3)

// лишние аргументы функции 
makeTea(3, "Eael Grey", "hey ma!", 42);

// аргументы переделаны в неверном порядке 
makeTea("Eael Grey", 3)

// функция без параметров
function barkAtTheMoon() {
    console.log("Woooooooooo!");
}

barkAtTheMoon()