class DatabaseConnection {
  private id: string;
  private static instance: DatabaseConnection | null = null;
  private static lock = false;
  public static getInstance(): DatabaseConnection {
    if (this.instance === null) {
        if (!this.lock) {
            this.lock = true; 
            this.instance = new DatabaseConnection();
        }
    }
    return this.instance!;
}
  private constructor() {
    this.id = Date.now().toString();
  }
  public connect(): void {
    console.log(`Connected to database with ID: ${this.id}`);
  }
}

const db1 = DatabaseConnection.getInstance();
db1.connect(); 

const db2 = DatabaseConnection.getInstance();
db2.connect(); 

console.log(db1 === db2); 