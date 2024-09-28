export interface personProps {
  name: string;
  email: string;
  github?: string;
  website?: string;
  responsibilities?: string[];
}

export interface categoryProps {
  label: string;
  people: personProps[];
}

export interface siteDataProps {
  creators: {
    label: string;
    manager: categoryProps;
    developers: categoryProps;
    designers: categoryProps;
  };
}
