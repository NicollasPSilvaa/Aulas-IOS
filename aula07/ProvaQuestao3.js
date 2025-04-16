let nota = 20

if (nota >= 90) {
    console.log("parabens sua nota é", nota, 'e você ficou com A');
}

else if (nota >= 80) {
    console.log('prabens sua nota é', nota, 'e você ficou com B');
}

else if (nota >= 70) {
    console.log('Poderia ser melhor, mas sua nota é', nota, 'você ficou com C');
}

else if (nota >=60) {
    console.log('Você foi mal nessa prova, sua nota é', nota, 'você ficou com D');
} else {
    console.log('Você não poderia ter ido pior, sua nota foi', nota, 'você ficou com F');
}