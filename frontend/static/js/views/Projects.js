import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
            <h1>Here are my Projects</h1>
            <p>Manage your privacy and configuration.</p>
            <!-- The grid: four columns -->
            <div class="row">
            <div class="column">
                <img src="img_nature.jpg" alt="Nature" onclick="myFunction(this);">
            </div>
            
            <div class="column">
                <img src="img_snow.jpg" alt="Snow" onclick="myFunction(this);">
            </div>
      
            <div class="column">
                 <img src="img_mountains.jpg" alt="Mountains" onclick="myFunction(this);">
            </div>
      
            <div class="column">
                <img src="img_lights.jpg" alt="Lights" onclick="myFunction(this);">
            </div>
            </div>
    
            <!-- The expanding image container -->
            <div class="container">
      
            <!-- Close the image -->
            <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
    
            <!-- Expanded image -->
            <img id="expandedImg" style="width:100%">
    
            <!-- Image text -->
            <div id="imgtext"></div>
            </div>
    
        `;
    }
}