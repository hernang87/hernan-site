export interface Position {
  description: string[];
  position: string;
  from: Date;
  to?: Date;
}

export interface Company {
  name: string;
  logo: {
    url: string;
    withBorder?: boolean;
  };
  positions: Position[];
}
