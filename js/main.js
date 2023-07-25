$(document).ready(function() {

  $('#telefone').mask('(00) 0000-0000', {
    placeholder: '(DDD) XXXXX-XXXX'
  });

  $('#cpf').mask('000.000.000-00', {
    placeholder: 'XXX.XXX.XXX-XX'
  });

  $('#cep').mask('00000-000', {
    placeholder: 'XXXXX-XXX'
  });

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      }
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
      email: 'Por favor, insira o seu e-mail',
      telefone: 'Por favor, insira o seu telefone',
      cpf: 'Por favor, insira o seu CPF',
      endereco: 'Por favor, insira o seu endereço',
      cep: 'Por favor, insira o seu CEP',

    },
    submitHandler: function(form) {
      console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(`[ERRO] Existem ${camposIncorretos} campos incorretos!`)
        }
    }
  })
});