import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Graphic Design Projects</h1>
       

<link rel="stylesheet" href="/static/css/postsGraphicDesign.css">

<div class="responsive">
  <div class="gallery">

    <a target="_blank" href="img_5terre.jpg">
      <img src="https://i.ibb.co/rMhnDj3/1.jpg alt="Apex_Promo" width="600" height="400">
    </a>
    
    <div class="desc">I made a promo for Apex Rentals. I changed some of the details to ensure privacy</div>
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src="https://i.ibb.co/JF5NKsk/2.jpg"  alt="Apex_FunFact" width="600" height="400">
    </a>
    <div class="desc">Here is a fun fact graphic I made for Apex Rentals</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src="https://i.ibb.co/g6Hcvf5/4.jpg alt="Apex_Review" width="600" height="400">
    </a>
    <div class="desc">Here is a client review for Apex Rentals with a name change for anonymity</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="https://i.ibb.co/PWdpDrK/3.jpg" alt="Apex_Poll" width="600" height="400">
    </a>
    <div class="desc">This is an example of a poll I made for Apex Rentals</div>
  </div>
</div>



<div class="clearfix"></div>

<div style="padding:6px;">
  
</div>

        `;
    }
}