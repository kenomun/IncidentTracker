// store.ts

import { Incident } from "./incident";

export class Store {
  incidents: Incident[];

  constructor() {
    this.incidents = [];
  }

  addIncident(description: string) {
    const incident = new Incident(description);
    this.incidents.push(incident);
    return incident;
  }

  private calculateAverageSolutionTime(solvedCases: Incident[]) {
    if (solvedCases.length === 0) {
      return 0;
    }

    const totalSolvedMinutes = solvedCases.reduce((total, incident) => {
      if (incident.solvedDate && incident.reportedDate) {
        const solutionTime = Math.floor(
          (incident.solvedDate.getTime() - incident.reportedDate.getTime()) / (1000 * 60)
        );
        return total + solutionTime;
      }
      return total;
    }, 0);

    return totalSolvedMinutes / solvedCases.length;
  }

  private calculateCurrentMaxSolutionTime(openCases: Incident[]) {
    if (openCases.length === 0) {
      return 0;
    }

    const currentDateTime = new Date().getTime();
    const maxSolutionTime = openCases.reduce(
      (maxTime, incident) =>
        incident.reportedDate
          ? Math.max(
              maxTime,
              currentDateTime - incident.reportedDate.getTime()
            )
          : maxTime,
      0
    );

    return Math.floor(maxSolutionTime / (1000 * 60)); // Convertir a minutos
  }

  incident_status(startDate: Date, endDate: Date) {
    const openCases = this.incidents.filter(
      (incident) =>
        incident.status === "open" &&
        incident.reportedDate >= startDate &&
        incident.reportedDate <= endDate
    );

    const solvedCases = this.incidents.filter(
      (incident) =>
        incident.status === "solved" &&
        incident.solvedDate &&
        incident.solvedDate >= startDate &&
        incident.solvedDate <= endDate
    );

    console.log(this.incidents);

    return {
      "Casos abiertos": openCases.length,
      "Casos resueltos": solvedCases.length,
      "Tiempo promedio (minutos)": this.calculateAverageSolutionTime(solvedCases),
      "Tiempo maximo solución (minutos)": this.calculateCurrentMaxSolutionTime(openCases),
    };
  }
}



