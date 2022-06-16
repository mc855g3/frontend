const flow = {
  0: {
    question:
      "Olá! Bem vindo ao Ambulatório de Pediatria. Para nos ajudar a tornar seu atendimento mais ágil, escolha as opções corretas pra você.",
    options: [
      { text: "Sou paciente HC Unicamp", nextstate: 1 },
      { text: "Esta é a minha primeira Vez no HC Unicamp", nextstate: 0},
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
  },
  2: 
  {
    question:
      "Por favor se dirija à sala 23 a sua direita ; Em breve o atenderemos.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
  },
  3: 
  {
    question:
      "Digite seu HC; Em breve o atenderemos.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
  },
  4: 
  {
    question:
      "Sobre sua consulta:",
    options: [
      { text: "Está consulta está agendada.", nextstate: 5},
      { text: "Esta consulta é um encaixe e você recebeu um email para estar aqui hoje.", nextstate: 6},
      { text: "Você não está agendado e nem recebeu um email , mas gostaria de se consultar hoje.", nextstate: 7},
    ],
  },
  5: 
  {
    question:
      "- Por favor diga em qual especialidade será sua consulta hoje: Aparece a lista de especialidade do período",
    options: [
      { text: "Especialidade 1.", nextstate: 3},
      { text: "Especialidade 2.", nextstate: 3},
      { text: "Especialidade 3.", nextstate: 3},
    ],
  },
  6: 
  {
    question:
      "- Por favor se dirija à faixa amarela à sua esquerda para que seu nome conste no sistema e possamos pedir exames e anotar sua consulta.",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
  },
  7: 
  {
    question:
      "Por favor se dirija à sala 23 a sua direita. Em breve o atendermos e veremos se isto será possível",
    options: [
      { text: "Retornar ao início.", nextstate: 0},
    ],
  },
};

export default flow;
