export type LinkType = 'github' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';

export type Link= {
  id: string;
  type: LinkType;
  url: string;
}


export type LinkTypeInfo = {
  value: LinkType;
  label: string;
  icon: LucideIcon;
};

export type Link={
    id: string;
    type: LinkType;
    url: string;
  }
  
export type LinkCardProps= {
    id: string;
    index: number;
    link: Link;
    onUpdate: (id: string, updatedLink: Partial<Link>) => void;
    onRemove: (id: string) => void;
  }

