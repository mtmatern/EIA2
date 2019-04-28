/*
Aufgabe: 5 Name: Manuel Matern
Matrikel: 261185
Datum: 25.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */

namespace task5 {
	export interface HeteroPredefined {
		type: string;
		name: string;
		price: number;
		value: number;
		id: string;
		class: string;
	}

	export interface HomogenousArray {
		[array: string]: HeteroPredefined[];
	}

	export let product: HomogenousArray = {
		"anrichtung": [
			{ type: "radio", name: "waffelbecher", price: 0.50, value: 0, id: "radio1", class: "Waffel" },
			{ type: "radio", name: "waffelbecher", price: 0.00, value: 0, id: "radio2", class: "Becher" },
		],


		"icecreams": [
			{ type: "number", name: "Schokolade", price: 1, value: 0, id: "Schokolade", class: "Schokolade" },
			{ type: "number", name: "Nuss", price: 1, value: 0, id: "Nuss", class: "Nuss" },
			{ type: "number", name: "Cookies", price: 1, value: 0, id: "Cookies", class: "Cookies" },
			{ type: "number", name: "Stracciatella", price: 1, value: 0, id: "Stracciatella", class: "Stracciatella" },
		]


	}

	/* = {
	"sorten": [
		{type:"number", name:"Stepper", value: 1, id:"check1", class:"1 Kugel Schoko"},
		{type:"number", name:"Stepper", value:1, id:"check2", class:"1 Kugel Vanille"},
		{type:"number", name:"Stepper", value:1.2, id:"check3", class:"1 Kugel Zitrone"},
		{type:"number", name:"Stepper", value:1.2, id:"check4", class:"1 Kugel Himbeer"},
		{type:"number", name:"Stepper", value:1.5, id:"check5", class:"1 Kugel Nuss"}
	],
	}; */

}