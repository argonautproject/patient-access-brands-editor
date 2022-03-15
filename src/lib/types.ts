export  interface Brand {
    id: string,
    parentId?: string,
    name?: string;
    logo?: string;
    website?: string;
    alias?: string[];
    categories?: string[];
    locations?: {
        text: string,
        line?: string[],
        city?: string,
        state?: string,
        postalCode?: string
    }[];
    identifier?: {
      system: string;
      value: string;
    }[];
    portalInherit?: {
        name: boolean,
        description: boolean,
        website: boolean,
    },
    portal?: {
      name?: string;
      description?: string;
      website?: string;
    };
  }
 