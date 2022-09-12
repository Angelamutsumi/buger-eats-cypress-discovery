import SignupPage from "../../pages/SignupPage";
//Esta importação não instancia a classe signup
import signup from "../../pages/SignupPage";
import signupFactory from "../../factories/SignupFactory";

describe("Signup", () => {
  // Ganchos (não devem estar neste ponto do código).
  // before(function() {
  //   cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
  // })

  // beforeEach(function() {
  //   cy.log('Tudo aqui é executado sempre ANTES de cada caso de teste')
  // })

  // after(function() {
  //   cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
  // })

  // afterEach(function() {
  //   cy.log('Tudo aqui é executado sempre DEPOIS de cada caso de teste')
  // })

  // beforeEach(function() {
  // // d refere-se a massa de teste q retorna da fixture deliver.json. Poderia ser qualquer nome aqui.
  //   cy.fixture('deliver').then((d)=> {
  //     this.deliver = d
  //   })
  // })

  it("User should be deliver", function () {
    var deliver = signupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("Incorrect document", function () {
    var deliver = signupFactory.deliver();

    deliver.cpf = "000000141aa";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShoulBe("Oops! CPF inválido");
  });

  it("Incorrect email", function () {
    var deliver = signupFactory.deliver();

    deliver.email = "user.com.br";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShoulBe("Oops! Email com formato inválido.");
  });

  context("Required fields", function () {
    const messages = [
      {
        field: "name",
        output: "É necessário informar o nome",
      },
      {
        field: "cpf",
        output: "É necessário informar o CPF",
      },
      {
        field: "email",
        output: "É necessário informar o email",
      },
      {
        field: "postalcode",
        output: "É necessário informar o CEP",
      },
      {
        field: "number",
        output: "É necessário informar o número do endereço",
      },
      {
        field: "deliver_method",
        output: "Selecione o método de entrega",
      },
      {
        field: "cnh",
        output: "Adicione uma foto da sua CNH",
      },
    ];

    before(function() {
      signup.go();
      signup.submit();
    })

    messages.forEach(function(msg) {
      it(`${msg.field} is required`, function(){
        signup.alertMessageShoulBe(msg.output)
      })
    })
  });

  // it.only("Required fields", function () {
  //   var deliver = signupFactory.deliver();

  //   signup.go();
  //   signup.submit();
  //   signup.alertMessageShoulBe("É necessário informar o nome");
  //   signup.alertMessageShoulBe("É necessário informar o CPF");
  //   signup.alertMessageShoulBe("É necessário informar o email");
  //   signup.alertMessageShoulBe("É necessário informar o CEP");
  //   signup.alertMessageShoulBe("É necessário informar o número do endereço");
  //   signup.alertMessageShoulBe("Selecione o método de entrega");
  //   signup.alertMessageShoulBe("Adicione uma foto da sua CNH");
  // });
});
