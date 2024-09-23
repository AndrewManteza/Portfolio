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
               This Website here serves as my portfolio website made with native Javascript

               (I will make this prettier in the future ;))


               Features to be added:
               1. Make it better for mobile
               2. Add an admin function so the content aint hardcoded
               3. Make it prettier
            </p>
            <p>
                
            </p>


            
        `;
    }
}