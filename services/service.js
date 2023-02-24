const Test = require('../models/Test');
var TestDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTest: updateTest
}

function findAll() {
    return Test.findAll();
}

function findById(id) {
    return Test.findByPk(id);
}

function deleteById(id) {
    return Test.destroy({ where: { id: id } });
}

function create(Test) {
    var newTest = new Test(Test);
    return newTest.save();
}

function updateTest(Test, id) {
    var updateTest = {
        title: Test.title,
        technologies: Test.technologies,
        description: Test.description,
        budget: Test.budget,
        contact_email: Test.contact_email
    };
    return Test.update(updateTest, { where: { id: id } });
}
module.exports = TestDao;