"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const store_1 = require("./store");
const someStore = new store_1.Store();
const incident1 = someStore.addIncident('El piso en la zona de congelados está sucio');
const incident2 = someStore.addIncident('La máquina de pago no funciona');
const incident3 = someStore.addIncident('Un cliente está atrapado en el ascensor');
// Set reportedDate for the incidents
incident1.reportedDate = new Date(2023, 6, 31, 12, 0); // Reported on July 31, 2023, 12:00 PM
incident2.reportedDate = new Date(2023, 6, 31, 12, 0); // Reported on July 31, 2023, 12:00 PM
incident3.reportedDate = new Date(2023, 6, 31, 12, 0); // Reported on July 31, 2023, 12:00 PM
// Assume incident1 has been solved after 10 minutes
incident1.solve();
incident1.solvedDate = new Date(2023, 6, 31, 12, 10);
// Assume incident2 has been solved after 20 minutes
incident2.solve();
incident2.solvedDate = new Date(2023, 6, 31, 12, 20);
// Display incident_status for a specific date range
const startDate = new Date(2023, 6, 31, 12, 0); // July 31, 2023, 12:00 PM
const endDate = new Date(2023, 6, 31, 12, 30); // July 31, 2023, 12:30 PM
console.log(someStore.incident_status(startDate, endDate));
