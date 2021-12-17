// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

let config = require(__dirname + "/../config/config.json");

function getAuthHeader(accessToken) {

    //accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWNkNTY4MDYtYjU1NS00NjYwLWE2NGUtZDE4YzM1MTk5MDA4LyIsImlhdCI6MTYzODM0ODQxNiwibmJmIjoxNjM4MzQ4NDE2LCJleHAiOjE2MzgzNTMxNDYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWU5qQ2tXSzdLdFZDM0xCeFQyUG96R1RHZEVHZEYrdzhESTVUVkx3TzMyNDRHd1lBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjdmNTlhNzczLTJlYWYtNDI5Yy1hMDU5LTUwZmM1YmIyOGI0NCIsImFwcGlkYWNyIjoiMiIsImlwYWRkciI6IjEwMy4yMTMuMjE0LjE1IiwibmFtZSI6IkFkbWluIiwib2lkIjoiZDM1YzMwYzAtZDU4MC00ZmZkLWE3NWYtNGM2ZWFlZjY2YjY3IiwicHVpZCI6IjEwMDMyMDAxQTdDRkI3N0YiLCJyaCI6IjAuQVZBQUJtalZYRlcxWUVhbVR0R01OUm1RQ0hPbldYLXZMcHhDb0ZsUV9GdXlpMFJfQUtrLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6ImpFdTllX0dBZ1dKN2MxbGNvYzlEaElXYkNlS3JDZm5Mc2hlaWtrSzlqSlEiLCJ0aWQiOiI1Y2Q1NjgwNi1iNTU1LTQ2NjAtYTY0ZS1kMThjMzUxOTkwMDgiLCJ1bmlxdWVfbmFtZSI6ImFkbWluQGJpc2FmZWdhdXJkLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbWluQGJpc2FmZWdhdXJkLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Ilh3VDNET3l3SzBHaEU3bU5Ld2lVQWciLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.ZMz5WV7ZHUXfssacTwFtWHGWCt3tdPj_eiOYGebrJPhM7AvAXQ34MsyS9VwoSEGzjO6700W_k7U00N8cL5mvZ5262jZwr99nlZl2t5ZkUgbkaUQ-iYe4wUIlMWOM7PVaKhgQreNpGB4Jt-sgwZTREZcVifjPkxG9j2mbzPGu2P_Nur0hI1dxTb-U14xeUPy_0ERieChpswTMLIl-6jsmjOCtrhZOzgDXKVUOKaMC8NWWIdEHPaHYca8lXtWqC22f8eIvhuzpjNy3J-yP7HLEN36D9rKGCcPJByHLvuhEHFB0GTD8FlR1-x5qvZLibD1GHiUrU9J-tOLs3qhoNM-8bA";
    // Function to append Bearer against the Access Token
    //return "Bearer ".concat(accessToken);
    return accessToken;
}

function validateConfig() {

    // Validation function to check whether the Configurations are available in the config.json file or not

    let guid = require("guid");

    if (!config.authenticationMode) {
        return "AuthenticationMode is empty. Please choose MasterUser or ServicePrincipal in config.json.";
    }

    if (config.authenticationMode.toLowerCase() !== "masteruser" && config.authenticationMode.toLowerCase() !== "serviceprincipal") {
        return "AuthenticationMode is wrong. Please choose MasterUser or ServicePrincipal in config.json";
    }

    if (!config.clientId) {
        return "ClientId is empty. Please register your application as Native app in https://dev.powerbi.com/apps and fill Client Id in config.json.";
    }

    if (!guid.isGuid(config.clientId)) {
        return "ClientId must be a Guid object. Please register your application as Native app in https://dev.powerbi.com/apps and fill Client Id in config.json.";
    }

    if (!config.reportId) {
        return "ReportId is empty. Please select a report you own and fill its Id in config.json.";
    }

    if (!guid.isGuid(config.reportId)) {
        return "ReportId must be a Guid object. Please select a report you own and fill its Id in config.json.";
    }

    if (!config.workspaceId) {
        return "WorkspaceId is empty. Please select a group you own and fill its Id in config.json.";
    }

    if (!guid.isGuid(config.workspaceId)) {
        return "WorkspaceId must be a Guid object. Please select a workspace you own and fill its Id in config.json.";
    }

    if (!config.authorityUri) {
        return "AuthorityUri is empty. Please fill valid AuthorityUri in config.json.";
    }

    if (config.authenticationMode.toLowerCase() === "masteruser") {
        if (!config.pbiUsername || !config.pbiUsername.trim()) {
            return "PbiUsername is empty. Please fill Power BI username in config.json.";
        }

        if (!config.pbiPassword || !config.pbiPassword.trim()) {
            return "PbiPassword is empty. Please fill password of Power BI username in config.json.";
        }
    } else if (config.authenticationMode.toLowerCase() === "serviceprincipal") {
        if (!config.clientSecret || !config.clientSecret.trim()) {
            return "ClientSecret is empty. Please fill Power BI ServicePrincipal ClientSecret in config.json.";
        }

        if (!config.tenantId) {
            return "TenantId is empty. Please fill the TenantId in config.json.";
        }

        if (!guid.isGuid(config.tenantId)) {
            return "TenantId must be a Guid object. Please select a workspace you own and fill its Id in config.json.";
        }
    }
}

module.exports = {
    getAuthHeader: getAuthHeader,
    validateConfig: validateConfig,
}