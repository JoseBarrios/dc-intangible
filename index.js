const Thing = require('@josebarrios/dc-thing');

class Intangible extends Thing{

  constructor(model){
    model = model || {};
    super(model)
  }
}

module.exports = Intangible;
