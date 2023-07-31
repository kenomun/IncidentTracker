"use strict";
// store.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const incident_1 = require("./incident");
class Store {
    constructor() {
        this.incidents = [];
    }
    addIncident(description) {
        const incident = new incident_1.Incident(description);
        this.incidents.push(incident);
        return incident;
    }
    calculateAverageSolutionTime(solvedCases) {
        if (solvedCases.length === 0) {
            return 0;
        }
        const totalSolvedMinutes = solvedCases.reduce((total, incident) => {
            if (incident.solvedDate && incident.reportedDate) {
                const solutionTime = Math.floor((incident.solvedDate.getTime() - incident.reportedDate.getTime()) / (1000 * 60));
                return total + solutionTime;
            }
            return total;
        }, 0);
        return totalSolvedMinutes / solvedCases.length;
    }
    calculateCurrentMaxSolutionTime(openCases) {
        if (openCases.length === 0) {
            return 0;
        }
        const currentDateTime = new Date().getTime();
        const maxSolutionTime = openCases.reduce((maxTime, incident) => incident.reportedDate
            ? Math.max(maxTime, currentDateTime - incident.reportedDate.getTime())
            : maxTime, 0);
        return Math.floor(maxSolutionTime / (1000 * 60)); // Convertir a minutos
    }
    incident_status(startDate, endDate) {
        const openCases = this.incidents.filter((incident) => incident.status === "open" &&
            incident.reportedDate >= startDate &&
            incident.reportedDate <= endDate);
        const solvedCases = this.incidents.filter((incident) => incident.status === "solved" &&
            incident.solvedDate &&
            incident.solvedDate >= startDate &&
            incident.solvedDate <= endDate);
        console.log(this.incidents);
        return {
            "Casos abiertos": openCases.length,
            "Casos resueltos": solvedCases.length,
            "Tiempo promedio (minutos)": this.calculateAverageSolutionTime(solvedCases),
            "Tiempo maximo_solucion (minutos)": this.calculateCurrentMaxSolutionTime(openCases),
        };
    }
}
exports.Store = Store;
