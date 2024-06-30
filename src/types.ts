export interface Position {
  description: string[];
  position: string;
  from: Date;
  to?: Date;
}

export interface Company {
  name: string;
  logoUrl: string;
  work: Position[];
}
