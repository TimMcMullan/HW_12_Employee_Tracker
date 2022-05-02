const Employee = require("./Employee");

class Manager extendes Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;