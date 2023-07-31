# Incident Tracker

Este proyecto es una aplicación de seguimiento de incidentes que permite registrar y gestionar los casos reportados en una tienda. La aplicación está escrita en TypeScript y se utiliza para calcular estadísticas sobre los casos reportados y resueltos en un período de tiempo específico.

## Instalación

1. Clona el repositorio de GitHub:

git clone https://github.com/kenomun/IncidentTracker

2. Instala las dependencias del proyecto:

npm install

3. se ejecuta el compilador de typecript

npx tsc

4. se ejecuta la aplicación

node dist/main.js


## Documentación

### Clase Store

La clase Store representa una tienda con un conjunto de incidentes reportados.
Métodos

    addIncident(description: string): Incident: Agrega un nuevo incidente a la tienda con la descripción proporcionada y devuelve el incidente creado.

    incident_status(startDate: Date, endDate: Date): StatusReport: Calcula las estadísticas de los incidentes entre las fechas especificadas y devuelve un objeto StatusReport con los resultados.

### Clase Incident

La clase Incident representa un caso reportado en la tienda.
Propiedades

    description: string: La descripción del incidente.

    status: "open" | "solved": El estado del incidente, que puede ser "open" (abierto) o "solved" (resuelto).

    reportedDate: Date: La fecha de reporte del incidente.

    solvedDate?: Date: La fecha de resolución del incidente (solo si está resuelto).

Métodos

    solve(): void: Marca el incidente como resuelto y establece la fecha de resolución como la hora actual.


