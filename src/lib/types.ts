export  interface Brand {
    id: number,
    parentId?: number,
    name?: string;
    logo?: string;
    website?: string;
    alias?: string[];
    categories?: string[];
    locations?: {
        line?: string[],
        city?: string,
        state?: string,
        zip?: string
    }[];
    identifier?: {
      system: string;
      value: string;
    }[];
    portal?: {
      name?: string;
      description?: string;
      website?: string;
      dev?: string;
    };
  }
 