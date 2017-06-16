const Thing = require('@josebarrios/thing');

class Intangible extends Thing{

  constructor(model){
    model = model || {};
    super(model)
  }
}

module.exports = Intangible;
