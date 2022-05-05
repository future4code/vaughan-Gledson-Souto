export class Recipes {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private date: string,
        private user_id: string
        ) {
    }
    getId(): string { 
      return this.id;
    }
    getTitle(): string { 
        return this.title;
    }
    getDescription(): string { 
        return this.description;
    }
    getDate(): string { 
        return this.date;
    }
    getUserId(): string {  
        return this.user_id;
    }

    static toRecipesModel(data: any): Recipes {
        return new Recipes(data.id, data.title, data.description, data.date, data.user_id);
    }
}