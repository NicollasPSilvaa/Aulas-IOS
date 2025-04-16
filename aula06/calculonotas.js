const notasAluno = [5.0+7.0+8.0+2.0+3.0+5.0+4.5+9.0,]

let media = notasAluno / 9

let mediaformatada = media.toFixed(1);

if (mediaformatada >= 7.0) {
    console.log("sua média é", mediaformatada , 'você passou de ano');
} else {
    console.log('sua média é', mediaformatada , 'e você reprou de ano');
}