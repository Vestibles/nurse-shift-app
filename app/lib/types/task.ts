// /lib/types/task.ts

export type TaskPriority = "Critical" | "High" | "Medium" | "Low";

export type TaskStatus = "Pending" | "Completed" | "Overdue";

export interface ClinicalTask {
  id: string;
  patientName: string;
  bed: string;
  description: string;
  priority: TaskPriority;
  owner: "Incoming Shift" | "Named Nurse";
  assignedTo?: string;
  due: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  shiftCreated: string;
  shiftCarriedOver: number;
}
