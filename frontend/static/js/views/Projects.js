import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async getHtml() {
        return `

        <link rel="stylesheet" href="/static/css/postsGraphicDesign.css">

        <div class="responsive">
          <div class="gallery">
        
            <a target="_blank" href="https://colab.research.google.com/drive/1ZIUfBupWXSrNNu9T0migbKPGkVkcrcIM#scrollTo=Gq67yV6DDI1y">
              <img src="https://i.ibb.co/rmhptBZ/istockphoto-1390274690-612x612.jpg alt="Calculator App" width="600" height="400">
            </a>

          
            <div class="desc">I made a short quiz in python</div>
          </div>
        </div>
        
        
        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="https://github.com/AndrewManteza/nailedItFlask">
              <img src="https://i.ibb.co/ctP9fGh/images-1.jpg"  alt="NailedIT" width="600" height="400">
            </a>
            <div class="desc">This is a Flask Website portfolio involving a small time nail studio</div>
          </div>
        </div>
        
        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="https://github.com/AndrewManteza/pythonGUIExpense">
              <img src="https://i.ibb.co/JCQfR1Q/9882183.jpg" alt="pythonExpense" border="0">          
            </a>
            <div class="desc">This is a financial tracking app that I am trying to use tnkinter on for a desktop GUI</div>
          </div>
        </div>
        
  
        
        
        
        <div class="clearfix"></div>
        
        <div style="padding:6px;">
          
        </div>
        `;
    }
}