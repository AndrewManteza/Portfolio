import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Hello There, I am Andrew</h1>
            <p>
               This Website here is serves as my portfolio website made with native Javascript
            </p>
            <p>
                
            </p>
        `;
    }
}