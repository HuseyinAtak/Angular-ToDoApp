import { TodoItem } from "./todoItem";

export class Model {
    name: string;
    items: TodoItem[];
    constructor() {
        this.name = "Hüs";
        this.items = [
            { description: "kahvaltı", action: true },
            { description: "spor", action: true },
            { description: "su", action: false },
            { description: "kıkı", action: true }
        ];
    }
}
const model = new Model();