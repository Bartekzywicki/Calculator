function adding(){
    const num1 = parseInt(prompt('Wpisz pierwszy numer: '));
    const num2 = parseInt(prompt('Wpisz drugi numer: '));
    const num3 = parseInt(prompt('Wpisz trzeci numer: '));
    const sum = num1 + num2 + num3;
document.getElementById("answer").innerHTML ="Suma tych trzech liczb to: "+sum;
}
function avarage(){
    const num1 = parseInt(prompt('Wpisz pierwszy numer: '));
    const num2 = parseInt(prompt('Wpisz drugi numer: '));
    const num3 = parseInt(prompt('Wpisz trzeci numer: '));
    const avg = (num1 + num2 + num3)/3;
    document.getElementById("answer").innerHTML ="Średnia tych trzech liczb to: "+avg;
}
function everything(){
    const num1 = parseInt(prompt('Wpisz pierwszy numer: '));
    const num2 = parseInt(prompt('Wpisz drugi numer: '));
    const sum = num1 + num2;
    const sub = num1 - num2;
    const multi = num1 * num2;
    document.getElementById("answer").innerHTML ="Suma liczb: "+sum+"<br>"+"Różnica liczb: "+sub+"<br>"+"Iloczyn liczb: "+multi;
}
function mathRoot(){
    const num = parseInt(prompt('Wpisz numer: '));
    const root = Math.sqrt(num);
    document.getElementById("answer").innerHTML = 'Pierwiastek z liczby to: '+root;
}
function square(){
    const num = parseInt(prompt('Wpisz numer w cm: '));
    const square = num * num;
    document.getElementById("answer").innerHTML = 'Pole kwadratu z liczby to: '+square+"cm2";

}
function PoleProstopadloscianu(){
    const num = parseInt(prompt('Wpisz numer w cm: '));
    const num1 = parseInt(prompt('Wpisz numer w cm: '));
    const num2= parseInt(prompt('Wpisz numer w cm: '));
    document.getElementById('answer').innerHTML = "Pole prostopadłoscianu :" + (((num * 2) * num1) + ((num1 * 2) * num2) + ((num1 * 2) * num2))+"cm";
}
function PoleKola(){
    const num = parseInt(prompt('Wpisz promień: '))
    const pole = Math.PI*(num*num);
    const obwod = (Math.PI*2)*num;

    document.getElementById("answer").innerHTML = "Pole koła wynosi: "+pole+"<br>"+"Obwód koła wynosi: "+obwod;

}
function gdanskszczecin(){
    const cenapaliwa = parseInt(prompt('Wpisz cene paliwa: '));
    const dane1 = 100/8;
    const dane2 = 360/dane1;
    const Wynik = dane2*cenapaliwa;
    document.getElementById("answer").innerHTML = "Podróż z Gdańska do Szczecina wyniesie nas: "+Wynik+"zł";
}
function KosztPrzejazdu(){
    const cenapaliwa = parseInt(prompt('Wpisz cene paliwa: '));
    const Dlugosctrasy = parseInt(prompt('Wpisz Długość trasy: '));
    const Spalanie = parseInt(prompt('Wpisz spalanie auta: '));
    const dane1 = 100/Spalanie;
    const dane2 = Dlugosctrasy/dane1;
    const Wynik = dane2*cenapaliwa;
    document.getElementById("answer").innerHTML = "Podróż z Gdańska do Szczecina wyniesie nas: "+Wynik+"zł";
}
function lokata(){
    const dane1 = parseInt(prompt('Wpisz kwote do obliczenia lokaty: '));
    const rok = (((dane1 * 1.08) - dane1) * 0.81);
    document.getElementById("answer").innerHTML = "Twój zysk z lokaty to: "+rok+" zł";
}
