
export class Item {
  
  public id: number;
  public name: string;
  public caption: string;
  public description: string;
  public tags: string[];
  public imageUrl?: string;

  constructor(id: number, name: string, caption: string, description: string, tags: string[], imageUrl: string = "") {
    this.id = id;
    this.name = name;
    this.caption = caption;
    this.description = description;
    this.tags = tags;
    this.imageUrl = imageUrl;
  }
  
}

