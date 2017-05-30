
export class Story {
  
  public id: number;
  public name: string;
  public caption: string;
  public description: string;
  public item_ids: number[];

  constructor(id: number, name: string, caption: string, description: string, item_ids: number[] = []) {
    this.id = id;
    this.name = name;
    this.caption = caption;
    this.description = description;
    this.item_ids = item_ids;
  }
  
}

