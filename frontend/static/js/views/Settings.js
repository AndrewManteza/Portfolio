import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Contact Me</h1>
            <p>Email: AManteza123@outlook.com</p>

            <h2> LINKS </h2>

            <p><a href="https://github.com/AndrewManteza">Github</a></p>
            <p><a href="https://www.linkedin.com/in/andrew-manteza-b004481b5/">Linkedin</a></p>
            

       
            `;
    }
}