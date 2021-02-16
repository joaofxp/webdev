// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

var express = require("express");

var app = express();

const port = 3000;

app.get("*.js", (req, res, next) => {
    if (req.header("Accept-Encoding").includes("br")) {
        req.url = req.url + ".br";
        res.set("Content-Encoding", "br");
        res.set("Content-Type", "application/javascript; charset=UTF-8");
        next();
    }
});

app.use(express.static("public"));

var listener = app.listen(port, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
