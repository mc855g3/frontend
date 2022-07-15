const flow = {
  0: {
    question:
      "Olá! Bem vindo ao Ambulatório de Pediatria. Para nos ajudar a tornar seu atendimento mais ágil, escolha as opções corretas pra você.",
    options: [
      { text: "Já sou paciente HC Unicamp e possuo cadastro", nextstate: 1 },
      { text: "Esta é a minha primeira vez no HC Unicamp", nextstate: 8},
    ],
  },
  1: {
    question:
      "O que você veio fazer aqui Hoje?",
    options: [
      { text: "Pedir remarcação de consulta, relatório, receita ou fazer uma pergunta", nextstate: 2},
      { text: "Receber medicamento, fazer um teste, curativo ou outro procedimento", nextstate: 3},
      { text: "Consulta", nextstate: 4},
    ],
    inputState: false,

  },
  2: 
  {
    question:
      "Por favor se dirija à sala 23. Em breve o atenderemos.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
    inputState: false,
  },
  3: 
  {
    question:
      "Digite seu HC; Em breve o atenderemos.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
    inputState: true,
    nextStateAfterSubmit:0,
  },
  4: 
  {
    question:
      "Sobre sua consulta:",
    options: [
      { text: "Está consulta está agendada.", nextstate: 5},
      { text: "Esta consulta é um encaixe e você recebeu um email para estar aqui hoje.", nextstate: 6},
      { text: "Você não está agendado e nem recebeu um email, mas gostaria de se consultar hoje.", nextstate: 7},
    ],
    inputState: false,

  },
  5: 
  {
    question:
      "Por favor diga em qual especialidade será sua consulta hoje",
    options: [
      { text: "Medicina do Adolescente.", nextstate: 3},
      { text: "Cardiologia Ped.", nextstate: 3},
      { text: "Endocrinologia Ped", nextstate: 3},
      { text: "Gastroenterologia Ped", nextstate: 3},
      { text: "Triagem Mucoviscidose", nextstate: 3},
    ],
    inputState: false,
  },
  6: 
  {
    question:
      "Por favor se dirija à faixa amarela à sua esquerda para que seu nome conste no sistema e possamos pedir exames e anotar sua consulta.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
    inputState: false,
  },
  7: 
  {
    question:
      "Por favor se dirija à sala 23. Em breve o atenderemos e veremos se isto será possível",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
    inputState: false,
  },
  8:{
    question:
      "Por favor se dirija à faixa amarela para que seu nome conste no sistema e possamos pedir exames e anotar sua consulta. Ao finalizar esse passo repita o processo para obter mais informações.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
    inputState: false,
  }
};

export default flow;
