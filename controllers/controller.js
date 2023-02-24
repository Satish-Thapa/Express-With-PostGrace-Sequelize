const TestDao = require('../model/model');
var TestController = {
    addTest,
    findTests,
    findTestById,
    updateTest,
    deleteById
}

function addTest(req, res) {
    console.log(req.body);
    console.log("in");
    let Test = req.body;
    TestDao.create(Test).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTestById(req, res) {
    console.log(req.params.id);
    TestDao.findByPk(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    TestDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Test deleted successfully",
                Test: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTest(req, res) {
    TestDao.updateTest(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Test updated successfully",
                Test: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTests(req, res) {
    TestDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = TestController;