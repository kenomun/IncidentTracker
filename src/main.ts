// main.ts
import { Store } from "./store";

// descripción de las incidencias
const someStore = new Store();
const incident1 = someStore.addIncident('El piso en la zona de congelados está sucio');
const incident2 = someStore.addIncident('La máquina de pago no funciona');
const incident3 = someStore.addIncident('Un cliente está atrapado en el ascensor');

// Establecer la fecha de reporte para los incidentes
incident1.reportedDate = new Date(2023, 6, 31, 12, 0);
incident2.reportedDate = new Date(2023, 6, 31, 12, 0); 
incident3.reportedDate = new Date(2023, 6, 31, 12, 0); 

// Suponer que el incidente1 ha sido resuelto después de 10 minutos
incident1.solve();
incident1.solvedDate = new Date(2023, 6, 31, 12, 10);

// Suponer que el incidente2 ha sido resuelto después de 20 minutos
incident2.solve();
incident2.solvedDate = new Date(2023, 6, 31, 12, 20);

// Mostrar el estado de los incidentes para un rango de fechas específico
const startDate = new Date(2023, 6, 31, 12, 0);
const endDate = new Date(2023, 6, 31, 12, 30);
console.log(someStore.incident_status(startDate, endDate));


