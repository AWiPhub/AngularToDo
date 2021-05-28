export class Task {
  constructor(
    public nameTask: string,
    public aboutTask: string,
    public emergencyTask: boolean,
    public statusTask: string,
    public id?: string,
  ) {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
  }
}