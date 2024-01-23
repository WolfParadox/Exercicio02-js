let students = [];


for (let i = 0; i < 4; i++) {
    let name = prompt("Digite o nome do aluno " + (i + 1) + ":");
    let n1 = prompt("Digite a nota da primeira prova para o aluno " + name + ":");
    let n2 = prompt("Digite a nota da segunda prova para o aluno " + name + ":");

    
    let average = (Number(n1) + Number(n2)) / 2;
    average = average.toFixed(2);

    
    students.push({
        name: name,
        average: average
    });
}


for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.average > 7) {
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${student.average}.
            Parabéns, ${student.name}! Você foi aprovado(a) no curso!`
        );
    } else {
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${student.average}.
            Não foi dessa vez, ${student.name}! Tente Novamente!`
        );
    }
}



