export  interface Brand {
    id: number,
    name?: string;
    logo?: string;
    website?: string;
    alias?: string[];
    identifier?: {
      system: string;
      value: string;
    }[];
    portal?: {
      name?: string;
      description?: string;
      website?: string;
    };
  }
 