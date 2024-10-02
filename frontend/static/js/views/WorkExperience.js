import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("WorkExperience");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="/static/css/educationETWorkExperienceCSS.css">
            <h1>Here is my Work Experience</h1>
            
            <!--Section 5: Education-->
            
            <div class="column-2a">
            <h2>Work Experience</h2>
              <table class="table-style">

                <tr>
                <td>Remote</td>
                <td>Social Media Manger and Lead Generation</td>
                
                <td>Tasks include editing photos and videos for contentcreation, conducting manual outreach to potential clientsvia LinkedIn filters, and performing copywriting, graphicdesign, and video editing. Developed a highly successfulmarketing approach resulting in 5-15 sales calls per weekfor clients.</td>
                <td>01/2019 - 08/2022 | 01/2024 | Present</td>

                </tr>
                <tr>
                  <td>IDEX - Abu Dhabi, UAE</td>
                  <td>Accreditation Officer</td>
                  <td>The International Defence Exhibition &amp; Conference, or IDEX, is a biennial arms and defense
                  technology sales exhibition. Screening of confidential documents for precise issuing of accreditation</td>
                  <td>02/2021 - 03/2021</td>
                </tr>
                <tr>
                  <td>Hijo Resources Corporation - Tagum City</td>
                  <td>Techno functional ERP Consultant</td>
                  <td>SAP Functional Consultant which specializes in the implementation for ERP solutions. This included the gathering of requirements via the facilitation of meetings, project management, functional and technical support </td>
                  
                  <td>09/2022 - 10/2023</td>
                </tr>
            
              </table>
            </div>

        `;
    }
}
