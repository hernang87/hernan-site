export interface Position {
  description: string[];
  position: string;
  summary?: string;
  stack?: string[];
  from: Date;
  to?: Date;
}

export interface Company {
  name: string;
  logo?: {
    url: string;
    withBorder?: boolean;
  };
  positions: Position[];
}
