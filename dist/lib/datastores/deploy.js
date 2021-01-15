"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = void 0;
var operators_1 = require("rxjs/operators");
var statusCodeRequest_1 = require("../http/statusCodeRequest");
function deploy(site) {
    var body = { event_type: site.eventType, client_payload: '' };
    if (site.eventPayload) {
        body.client_payload = site.eventPayload;
    }
    else {
        delete body.client_payload;
    }
    var headers = new Headers();
    headers.set('Authorization', 'Bearer ' + site.githubToken);
    return statusCodeRequest_1.statusCodeRequest("https://api.github.com/repos/" + site.githubRepoOwner + "/" + site.githubRepo + "/dispatches", {
        body: JSON.stringify(body),
        headers: headers,
        method: 'POST'
    }).pipe(operators_1.map(function (result) { return ({ result: result, site: site }); }));
}
exports.deploy = deploy;
//# sourceMappingURL=deploy.js.map