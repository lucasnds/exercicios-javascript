/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

function triangulo(a = 10, b = 10, c = 10) {
    if (a === b && a === c) {
        console.log('Equilátero')
    } else if ((a === b) || (a === c)) {
        console.log('Isósceles')
    } else if (a !== b || a !== c) {
        console.log('Escaleno')
    } else {
        console.log('Números Inválidos')
    }
}

triangulo(1, 2, 3)
triangulo(2, 2, 2)
triangulo(2, 2, 3)
triangulo()