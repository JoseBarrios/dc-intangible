const ThingViewController = require('dc-thing');
const TYPE = 'IntangibleViewController';

class IntangibleViewController extends ThingViewController{

	static get type(){ return TYPE; }

	constructor(model){
		model = model || {};
		super(model)
	}

}

module.exports = IntangibleViewController;
