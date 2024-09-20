import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("WorkExperience");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="/static/css/educationETWorkExperienceCSS.css">
            <h1>Here are my WorkExperience</h1>
            <p>Manage your privacy and configuration.</p>
            <!--Section 5: Education-->
            
            <div class="column-2a">
            <h2>Education</h2>
              <table class="table-style">
                <tr>
                  <td>IDEX - Abu Dhabi, UAE</td>
                  <td>Accreditation Officer</td>
                  <td>The International Defence Exhibition &amp; Conference, or IDEX, is a biennial arms and defense
                  technology sales exhibition. Screening of confidential documents for precise issuing of accreditation</td>
                  <td>02/2021 - 03/2021</td>
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