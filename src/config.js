const apiUrl = "https://96hff5silb.execute-api.eu-central-1.amazonaws.com";

const routes = {
    reports: "/reports",
    users: "/users"
}

const config = {
    api: {
        getReports: apiUrl + routes.reports,
        getUsers: apiUrl + routes.users
    }
}

export default config;