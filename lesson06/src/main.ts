class Coder {
    // name: string
    // music: string
    // age: number
    // lang: string

    // by adding visibility modifiers (ie public), we can remove the redundacy above

    constructor(
        public name: string,
        readonly music: string,
        private age: number,
        protected lang: string
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang

    } 
}