import { Ingredient } from "./ingredient.model";

export class Recepie {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: Ingredient[];
    /**
     *
     */
    constructor(id : number, name: string, desc: string, imagePath: string, ingrediant: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingrediants = ingrediant;
    }
}