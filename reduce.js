const teamMembers = [
	{
		name: 'Andrew',
		profession: 'dev',
		yrsExp: 5
	},
	{
		name: 'Ariel',
		profession: 'dev',
		yrsExp: 7
	},
	{
		name: 'Andrew',
		profession: 'des',
		yrsExp: 1
	},
	{
		name: 'Andrew',
		profession: 'des',
		yrsExp: 3
	}
];

// Totaling a specific object property
let totExp = teamMembers.map(member => member.yrsExp).reduce((tot, curr) => tot + curr);
// OR, AS AN ALTERNATIVE:
// let totExp = teamMembers.reduce((tot, curr) => tot + curr.yrsExperience, 0);
// console.log(totExp);

// Grouping by a property and totaling it too
// {Developer: 12, Designer: 4} <-- risultato desiderato

let expByProfession = teamMembers.reduce((acc, curr) => {
	// In questa funzione, acc e curr assumono il valore degli oggetti
	// nel vettore teamMembers. 
	let key = curr.profession;
	// key è strumentale alla creazione e alla suddivisione per categoria.
	// Come funziona: man mano che si scorre nell'array, oggetto per oggetto,
	// key assume le stringhe dei mestieri: 'dev', 'des', ecc.
	// Se quella chiave non esiste nell'oggetto accumulatore (vuoto inizialmente), 
	// allora, viene creata la chiave e ne assume il valore:
	// Se 'dev' non esiste:
	// - crea la chiave nell'oggetto accumulatore e assegnale il valore di curr.yrsExp. 
	// Se invece esiste già:
	// - somma curr.yrsExp al valore della chiave dell'acc.
	if (!acc[key]){
		acc[key] = curr.yrsExp;
	} else {
		acc[key] += curr.yrsExp;
	}
	return acc;
}, {});
// E' MOLTO IMPORTANTE CAPIRE LA FUNZIONE DELLE PARENTESI GRAFFE POSTE COME PARAMETRO ALLA FINE
// Queste definiscono il valore iniziale dell'accumulatore, in questo caso
// inizializzato come un oggetto vuoto, ovvero, {}. In questo modo, sarà possibile creare delle
// chiavi arbitrarie all'interno ogni qualcvolta se ne abbia bisogno e secondo la propria logica.
console.log(expByProfession);