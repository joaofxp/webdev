interface cachorro {
    cor: string;
    peso: number;
    readonly viraLata: boolean;
}

let readOnlyArray: number[] = [1, 2, 3];

const doguinho: cachorro = {
    cor: "caramelo",
    peso: 50,
    viraLata: false,
};

console.log(doguinho);

doguinho.peso = 55;
console.log(doguinho.peso);

export class C {
    private x = 10;
    getX = () => this.x;
    setX = (newVal: number) => {
        this.x = newVal;
    };
}

export let x = new C();
export let y = { ...{ some: "value" } };

const helloDude = () => {
    return "Hello dudi dudu";
};

let byeDude = () => {
    return "Bye dudi dudu";
};

const greetDudi = () => {
    console.log(helloDude());
};

const saionaraDudi = () => {
    console.log(byeDude());
};

greetDudi();
saionaraDudi();
