// incident.ts
export class Incident {
	description: string;
	status: "open" | "solved";
	reportedDate: Date;
	solvedDate?: Date; // Propiedad para la fecha de resolución
  
	constructor(description: string) {
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
  
  
  