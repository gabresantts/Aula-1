// 1. Criando um algoritmo de antendimento para a área da saúde

  // 1.1 Perguntando sobre a idade (menor de idade / maior de idade)
alert("Boas vindas a MedTech - Atendimento Online");
let idade = parseInt(prompt("Qual a sua idade? "));

if (idade < 18) {
    alert("Você é menor de idade. Recomendamos que procure um responsável ou médico especializado em pediatria ou hebiatria.");
} else {
    alert("Você é maior de idade.");
    
    // 1.2 Perguntando sobre os sintomas do paciente
    let febre = prompt("Você está com febre? (sim/não)").toLowerCase(); // Adicionando toLowerCase() para uniformidade
    let temperatura = null;

    if (febre === "sim") {
        temperatura = parseInt(prompt("Qual é a sua temperatura corporal em °C? "));
    }

    let dores = prompt("Você está com dores no corpo? (sim/não)").toLowerCase(); 
    let fraqueza = prompt("Você está sentindo fraqueza ou fadiga? (sim/não)").toLowerCase(); // Adicionando toLowerCase() para uniformidade

    // 1.3 Analisando os sintomas e oferecendo recomendações básicas de saúde
    if (febre === "sim" && temperatura >= 38) {
        alert("Você está com febre alta. Recomendamos o uso de medicamentos antitérmicos como Paracetamol ou Dipirona, e procure um médico se a febre persistir.");
    } else if (febre === "sim" && temperatura < 38) {
        alert("Você está com febre leve. Recomendamos o uso de antitérmicos como Paracetamol. Se a febre persistir, consulte um médico.");
    } else {
        alert("Sem febre detectada.");
    }

    if (dores === "sim" && fraqueza === "sim") {
        alert("Você pode estar com uma infecção viral. Recomendamos repouso e, se os sintomas piorarem, procure um clínico geral.");
    } else if (dores === "sim" && fraqueza === "não") {
        alert("Dores no corpo sem fraqueza podem indicar esforço físico. Se as dores persistirem, consulte um ortopedista ou clínico geral.");
    } else if (dores === "não" && fraqueza === "sim") {
        alert("Fraqueza sem dores pode estar relacionada a outros fatores, como alimentação inadequada. Recomendamos consultar um clínico geral.");
    } else {
        alert("Sem dores ou fraqueza relatadas.");
    }

    // 1.4 Recomendação final baseada nos sintomas citados anteriormente
    if ((febre === "sim" && temperatura >= 38) || dores === "sim" || fraqueza === "sim") {
        alert("Considerando seus sintomas, é recomendável procurar orientação médica se os sintomas persistirem.");
    } else {
        alert("Parece que seus sintomas são leves. Mantenha-se hidratado e descanse.");
    }