import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("WorkExperience");
    }

    async getHtml() {
        return `
            <h1>Here are my WorkExperience</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}