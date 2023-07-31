"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
// incident.ts
class Incident {
    constructor(description) {
        this.description = description;
        this.status = "open";
        this.reportedDate = new Date();
    }
    solve() {
        this.status = "solved";
        this.solvedDate = new Date(); // Establecer la fecha de resolución al resolver el caso
    }
    get solutionTime() {
        if (this.status === "solved" && this.solvedDate && this.reportedDate) {
            return Math.floor((this.solvedDate.getTime() - this.reportedDate.getTime()) / (1000 * 60));
        }
        return undefined;
    }
}
exports.Incident = Incident;
