import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Skills");
    }

    async getHtml() {
        return `
            <h1>Here are my Skills</h1>

            
            <div class="column-2a">
            <h2>Skills</h2>
              <table class="table-style">
              <tr>
              <td>Python</td>
              <td>Javascript</td>
              <td>Social Media Marketing</td>
             
            </tr>
            <tr>
              <td>Javascript</td>
              <td>Adminsitration Graphic</td>
            
            </tr>
            <tr>
            <td>HTML</td>
            <td>Designing Graphic</td>
        
             </tr>
             <tr>
             <td>CSS</td>
             <td>Lead Generation</td>
         
            </tr>
             <tr>
             <td>SQL</td>
             <td>Sales Navigator on LinkedIn</td>

            <tr>
            <td>Data Processing</td>
           

          
              </table>
            </div>

           
        `;
    }
}