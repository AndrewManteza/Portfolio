import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Education");
    }

    async getHtml() {
        return `
            <h1>Here is my Education</h1>
            <p>Manage your privacy and configuration.</p>


         
        `;
    }
}