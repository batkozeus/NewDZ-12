// Task 1

const l1 = 'qwertyuiop[]';
const l2 = 'asdfghjkl;\'';
const l3 = 'zxcvbnm,./';

function strings () {
	var str1 = document.getElementById('str1');
	var str2 = document.getElementById('str2');
	var str3 = document.getElementById('str3');
	str1.innerHTML = 'Верхний ряд клавиатуры - ' + l1;
	str2.innerHTML = 'Средний ряд клавиатуры - ' + l2;
	str3.innerHTML = 'Нижний ряд клавиатуры - ' + l3;
}

strings ();

// Task 2

const lenghtL1 = l1.length;
const lenghtL2 = l2.length;
const lenghtL3 = l3.length;

function stringLength () {
	var numLength1 = document.getElementById('numLength1');
	var numLength2 = document.getElementById('numLength2');
	var numLength3 = document.getElementById('numLength3');
	numLength1.innerHTML = 'Длина верхнего ряда клавиатуры - ' + lenghtL1 + ' символов';
	numLength2.innerHTML = 'Длина среднего ряда клавиатуры - ' + lenghtL2 + ' символов';
	numLength3.innerHTML = 'Длина нижнего ряда клавиатуры - ' + lenghtL3 + ' символов';
}

stringLength ();

// Task 3

let beg1 = l1.charAt(0);
let end1 = l1.charAt(11);
let beg2 = l2.charAt(0);
let end2 = l2.charAt(10);
let beg3 = l3.charAt(0);
let end3 = l3.charAt(9);

function charsFirstLast () {
	var str1Beg = document.getElementById('str1Beg');
	var str1End = document.getElementById('str1End');
	var str2Beg = document.getElementById('str2Beg');
	var str2End = document.getElementById('str2End');
	var str3Beg = document.getElementById('str3Beg');	
	var str3End = document.getElementById('str3End');
	str1Beg.innerHTML = 'Первый символ верхнего ряда клавиатуры - ' + beg1;
	str1End.innerHTML = 'Последний символ верхнего ряда клавиатуры - ' + end1;
	str2Beg.innerHTML = 'Первый символ среднего ряда клавиатуры - ' + beg2;
	str2End.innerHTML = 'Последний символ среднего ряда клавиатуры - ' + end2;
	str3Beg.innerHTML = 'Первый символ нижнего ряда клавиатуры - ' + beg3;
	str3End.innerHTML = 'Последний символ нижнего ряда клавиатуры - ' + end3;
	
}

charsFirstLast ();

// Task 4

let indexLeft = l1.indexOf('[');
let indexRight = l1.indexOf(']');

function indexes () {
	var indOf1 = document.getElementById('indOf1');
	var indOf2 = document.getElementById('indOf2');
	indOf1.innerHTML = 'Позиция левой скобки - ' + indexLeft;
	indOf2.innerHTML = 'Позиция правой скобки - ' + indexRight;
}

indexes ();

// Task 5

const shablon = `l1 - ${l1}; l2 - ${l2}; l3 - ${l3};<br> lenghtL1 - ${lenghtL1}; lenghtL2 - ${lenghtL2}; lenghtL3 - ${lenghtL3};<br> beg1 - ${beg1}; end1 - ${end1}; beg2 - ${beg2}; end2 - ${end2}; beg3 - ${beg3}; end3 - ${end3};<br> indexLeft - ${indexLeft}; indexRight - ${indexRight};`;

function final () {
	var finalStr = document.getElementById('finalStr');
	finalStr.innerHTML = shablon;
}

final ();