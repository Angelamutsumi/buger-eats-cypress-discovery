var faker = require('faker')

export default {

  deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
        cpf: '00000014141',
        email: faker.internet.email(firstName),
        whatsapp: '11999999999',
        address: {
          postalcode: '04534011',
          street: 'Rua Joaquim Floriano',
          number: '1000',
          details: 'Ap. 141',
          district: 'Itaim Bibi',
          city_state: 'São Paulo/SP'
        },
        deliver_method: 'Moto',
        cnh: 'cnh-digital.jpg'
    }

    return data
  }
}