import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'Beautiful';
        changeHandler(event) {
                console.log('This loggg' + event.target.value);
        this.greeting = event.target.value;
        }
}