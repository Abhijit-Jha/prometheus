import client from "prom-client"
export const activeRequests = new client.Gauge({
    name : "TOTAL_ACTIVE_USERS",
    help : "To get the total no of active users",
    labelNames : ["method","route"]
});