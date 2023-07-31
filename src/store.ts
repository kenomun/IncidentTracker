import { Incident } from "./incident";

export class Store {
  incidents: Incident[];

  constructor() {
    // Inicializar la lista de incidentes vacía al crear una nueva instancia de la clase
    this.incidents = [];
  }

  addIncident(description: string) {
    // Agregar un nuevo incidente a la lista
    const incident = new Incident(description);
    this.incidents.push(incident);
    return incident;
  }

  private calculateAverageSolutionTime(solvedCases: Incident[]) {
    if (solvedCases.length === 0) {
      // Si no hay casos resueltos, el tiempo promedio es 0
      return 0;
    }

    // Calcular el tiempo total de solución sumando los tiempos de cada caso resuelto
    const totalSolvedMinutes = solvedCases.reduce((total, incident) => {
      if (incident.solvedDate && incident.reportedDate) {
        const solutionTime = Math.floor(
          (incident.solvedDate.getTime() - incident.reportedDate.getTime()) / (1000 * 60)
        );
        return total + solutionTime;
      }
      return total;
    }, 0);

    // Calcular el promedio dividiendo el tiempo total entre la cantidad de casos resueltos
    return totalSolvedMinutes / solvedCases.length;
  }

  private calculateCurrentMaxSolutionTime(openCases: Incident[]) {
    if (openCases.length === 0) {
      // Si no hay casos abiertos, el tiempo máximo de solución es 0
      return 0;
    }

    // Obtener el tiempo actual en milisegundos
    const currentDateTime = new Date().getTime();

    // Calcular el tiempo máximo de solución entre los casos abiertos
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

    // Convertir el tiempo máximo de solución de milisegundos a minutos
    return Math.floor(maxSolutionTime / (1000 * 60));
  }

  incident_status(startDate: Date, endDate: Date) {
    // Filtrar los casos abiertos dentro del rango de fechas especificado
    const openCases = this.incidents.filter(
      (incident) =>
        incident.status === "open" &&
        incident.reportedDate >= startDate &&
        incident.reportedDate <= endDate
    );

    // Filtrar los casos resueltos dentro del rango de fechas especificado
    const solvedCases = this.incidents.filter(
      (incident) =>
        incident.status === "solved" &&
        incident.solvedDate &&
        incident.solvedDate >= startDate &&
        incident.solvedDate <= endDate
    );

    // Calcular las estadísticas y devolver el resultado como un objeto
    return {
      "Casos abiertos": openCases.length,
      "Casos resueltos": solvedCases.length,
      "Tiempo promedio (minutos)": this.calculateAverageSolutionTime(solvedCases),
      "Tiempo maximo solución (minutos)": this.calculateCurrentMaxSolutionTime(openCases),
    };
  }
}




