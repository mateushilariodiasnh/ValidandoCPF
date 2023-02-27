const validar = document.getElementById('validar');
const resultado = document.getElementById('resultado')

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,'');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
}

validar.addEventListener('click', () => {
  const cpf = document.querySelector('#cpf').value;
  if (validarCPF(cpf)) {
    resultado.textContent="CPF válido";
  } else {
    resultado.textContent="CPF inválido";
  }
});


/*const validar = document.getElementById('validar');

function validarCPF(cpf) {
    
    let cpfArray = cpf.split("").map(numero => Number(numero));
    let auxiliarNaMultiplicacaoNoPrimeiroPasso = 10;
    let produtoDosDigitosEAuxiliaresNoPrimeiroPasso, somaDosProdutosNoPrimeiroPasso;
    let divisor = 11;
    let digitoDez;
    let cpfArrayCoreto = []

    for (let i = 0; i <= 8; i++) {
        cpfArrayCoreto.push(i)
        produtoDosDigitosEAuxiliaresNoPrimeiroPasso = cpfArray[i]*auxiliarNaMultiplicacaoNoPrimeiroPasso;
        auxiliarNaMultiplicacaoNoPrimeiroPasso--
        somaDosProdutosNoPrimeiroPasso += produtoDosDigitosEAuxiliaresNoPrimeiroPasso;
    }

    let restoDaDivisaoNoPrimeiroPasso = somaDosProdutosNoPrimeiroPasso % divisor;

    if ( restoDaDivisaoNoPrimeiroPasso < 2 ) {
        digitoDez = 0
    }
    else {digitoDez = divisor - restoDaDivisaoNoPrimeiroPasso}

    cpfArrayCoreto.push(digitoDez);

    let auxiliarNaMultiplicacaoNoSegundoPasso = 11;
    let produtoDosDigitosEAuxiliaresNoSegundoPasso, somaDosProdutosNoSegundoPasso;
    let digitoOnze;

    for (let i = 0; i < cpfArrayCoreto.length; i++) {
        produtoDosDigitosEAuxiliaresNoSegundoPasso = cpfArrayCoreto[i]*auxiliarNaMultiplicacaoNoSegundoPasso;
        auxiliarNaMultiplicacaoNoSegundoPasso--
        somaDosProdutosNoSegundoPasso += produtoDosDigitosEAuxiliaresNoSegundoPasso;
    }

    let restoDaDivisaoNoSegundoPasso = somaDosProdutosNoSegundoPasso % divisor;

    if ( restoDaDivisaoNoSegundoPasso < 2 ) {
        digitoOnze = 0
    }
    else {digitoOnze = divisor - restoDaDivisaoNoSegundoPasso}

    cpfArrayCoreto.push(digitoOnze)

    console.log(cpfArrayCoreto)
}

validar.addEventListener('click', validarCPF)*/