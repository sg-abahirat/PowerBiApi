// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

// Configurations of the embedded reports
class PowerBiReportDetails {
    constructor(reportId, reportName, embedUrl) {
        this.reportId = reportId;
        this.reportName = reportName;
        this.embedUrl = embedUrl;
    }
}

class PowerBiDashboardDetails {
    constructor(dashboardId, Name, embedUrl) {
        this.dashboardId = dashboardId;
        this.Name = Name;
        this.embedUrl = embedUrl;
    }
}

module.exports = PowerBiReportDetails;
module.exports=PowerBiDashboardDetails;