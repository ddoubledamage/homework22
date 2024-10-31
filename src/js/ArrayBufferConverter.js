export default class ArrayBufferConverter {
    constructor() {
        this.bufferView = null;
    }

    load(buffer) {
        this.bufferView = new Uint16Array(buffer);
    }

    toString() {
        let string = [];
        for(let i = 0; i < this.bufferView.length; i++) {
            string.push(String.fromCharCode(this.bufferView[i]));
        }
        return string.join('');
    }
}