export interface Ticket {
    name: string;
    labels: string[];
    status: string;
};

export class Ticket implements Ticket {
    constructor(name: string, labels: string[], status: string) {
        this.name = name;
        this.labels = labels;
        this.status = status
    }
}

export let ticket1 = new Ticket('Ticket1', ['label1', 'label2'], 'pending');
export let ticket2 = new Ticket('Ticket2', ['label2'], 'pending');
export let ticket3 = new Ticket('Ticket3', ['label3'], 'pending');
export let ticket4 = new Ticket('Ticket4', ['label4'], 'pending');
export let ticket5 = new Ticket('Ticket4', ['no label'], 'pending');
export let ticket6 = new Ticket('Ticket4', ['other label'], 'pending');
export let ticket7 = new Ticket('Ticket4', ['red label'], 'pending');


export let tickets = [
    ticket1,
    ticket2,
    ticket3,
    ticket4,
    ticket5,
    ticket6,
    ticket7
]
