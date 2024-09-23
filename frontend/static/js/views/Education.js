import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Education");
    }

    async getHtml() {
        return `

        <link rel="stylesheet" href="/static/css/educationETWorkExperienceCSS.css">
            <h1>Here is my Education</h1>
            

            <!--Section 5: Education and Skills-->
            
            <div class="column-2a">
            <h2>Education</h2>
              <table class="table-style">
              <tr>
              <td>Abu Dhabi International Private School</td>
              <td>International Baccalaureate</td>
              <td>2015 - 2017</td>
            </tr>
            <tr>
              <td>University of the Immaculate Conception</td>
              <td>Bachelor of Science Computer Science</td>
              <td>2018-2022</td>
            </tr>
              </table>
            </div>

         
        `;
    }
}