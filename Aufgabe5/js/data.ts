/*
Aufgabe: 5 Name: Manuel Matern
Matrikel: 261185
Datum: 25.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und
auch nicht diktiert. */

namespace task5 {
	export interface icecreams {
		name: string;
		preis: number;
	}
	
	export let waffelbecher: icecreams[] = [{ name: "Waffel", preis: 0.50 }, { name: "Becher", preis: 0.00 }];

	export let schokolade: icecreams[] = [{ name: "Schokolade", preis: 1.00 }];
	export let nuss: icecreams[] = [{ name: "Nuss", preis: 1.00 }];
	export let cookies: icecreams[] = [{ name: "Cookies", preis: 1.00 }]
	export let stracciatella: icecreams[] = [{ name: "Stracciatella", preis: 1.00 }]

	export let streusel: icecreams[] = [{ name: "Streusel", preis: 0.50 }];
	export let schokosoße: icecreams[] = [{ name: "Schokosoße", preis: 0.50 }];
	export let karamelsoße: icecreams[] = [{ name: "Karamelsoße", preis: 0.50 }];
	export let sahne: icecreams[] = [{ name: "Sahne", preis: 0.50 }];

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