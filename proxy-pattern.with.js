class CEO {
    solveRequest(request) {
        console.log('CEO is solving the request: ' + request);
    }
}

class PM {
    constructor() {
        this.ceo = new CEO();
    }

    solveRequest(request) {
        if (request === 'feature') {
            console.log('PM is solving the request: ' + request);
        } else {
            this.ceo.solveRequest(request);
        }
    }
}

class Developer {
    constructor(request) {
        this.request = request;
    }

    solveRequest(pm) {
        pm.solveRequest(this.request);
    }
}

const pm = new PM();
const developerAndroid = new Developer('feature');
const developerIOS = new Developer('bug');

developerAndroid.solveRequest(pm);
developerIOS.solveRequest(pm);