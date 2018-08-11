const express = require('express');
const indexRouter = express.Router();
const path = require('path');

module.exports = function () {
    indexRouter.route('/')
        .get(function (req, res) {
            req.session.macAddr = req.query.id;
            req.session.accessPoint = req.query.ap;
            req.session.time = req.query.t;
            req.session.url = req.query.url;
            req.session.ssid = req.query.ssid;

            res.sendFile(path.join(__dirname, '../../public', 'index.html'));
        });
    return indexRouter;
};
