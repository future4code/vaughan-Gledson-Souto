
export class Post{
    constructor(
        private _id: string,
        private _photo: string,
        private _description: string,
        private _date: string,
        private _typePost: string,
    ){}
    
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }

    public get photo(): string {
        return this._photo
    }
    public set photo(value: string) {
        this._photo = value
    }

    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }

    public get date(): string {
        return this._date
    }
    public set date(value: string) {
        this._date = value
    }

    public get type_post(): string {
        return this._typePost
    }
    public set type_post(value: string) {
        this._typePost = value
    }
}