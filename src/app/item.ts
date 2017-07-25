
export class Item {
  
  public id: number;
  public name: string;
  public caption: string;
  public description: string;
  public narratives: string[];
  public tags: string[];
  public imageUrls?: string[];

  constructor(id: number, name: string, caption: string, description: string, narratives: string[], tags: string[], imageUrls: string[] = []) {
    this.id = id;
    this.name = name;
    this.caption = caption;
    this.description = description;
    this.narratives = narratives;
    this.tags = tags;
    this.imageUrls = imageUrls;
  }
  
}

