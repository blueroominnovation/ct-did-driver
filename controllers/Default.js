'use strict';

var utils = require('../utils/writer.js');

module.exports.resolve = function resolve (req, res) {
    const identifier = req.params['identifier'];
    const url = "https://identityhub.blueroominnovation.com/api/v1/did/identity/resolveDid"
    
    const params = new URLSearchParams({ did: identifier });
    fetch(`${url}?${params.toString()}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if(data.error) {
            utils.writeJson(res, {did: identifier, message: data.error.message}, 400);
        } else {
            utils.writeJson(res, {didDocument: data.response});
        }
    })
    .catch(error => {
        utils.writeJson(res, {did: identifier, message: error}, 400);
    });
};
