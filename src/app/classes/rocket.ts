export class Rocket {

    constructor(private _num: number, private _nom: string, private _fabrication: string,
                private _organisation: string, private _destination: string, 
                private _createdAt: string, private _updatedAt: string) { }

    get num() {
        return this._num;
    }

    set num(_num: number) {
        this._num = _num;
    }

    get nom() {
        return this._nom;
    }

    set nom(_nom: string) {
        this._nom = _nom;
    }

    get fabrication() {
        return this._fabrication;
    }

    set fabrication(_fabrication: string) {
        this._fabrication = _fabrication;
    }

    get organisation() {
        return this._organisation;
    }

    set organisation(_organisation: string) {
        this._organisation = _organisation;
    }

    get destination() {
        return this._destination;
    }

    set destination(_destination: string) {
        this._destination = _destination;
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(_createdAt: string) {
        this._createdAt = _createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    set updatedAt(_updatedAt: string) {
        this._updatedAt = _updatedAt;
    }

}