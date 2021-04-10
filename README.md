# Description
  ## Slider JS v2.0
  The slider is almost completely redesigned from the previous version: <br/>
    ``` https://github.com/Vadim-1507/Slider---js-1.0```.
  
  ## What's new
  - added adaptability for different devices;
  - added swipew support;
  - added different content support (previous version support only image).
  
# Install project
  HTTPS:<br/>
    `https://github.com/Vadim-1507/Slider---js-2.0.git`.<br/>
  GitHub Cli:<br/>
    `gh repo clone Vadim-1507/Slider---js-2.0`.

  ## More information
  To work with the project, you need to install node-modules:
    - webpack;
    - webpack-cli;
    - node-sass.
    
  For ease of installation, file `package.json` was add in repository.<br/>
  All dependencies are written in the file. You need write `npm install` in the theremin for start the instalation.
  
# Run carousel
  HTML Content added in block **'.slider__item'**:<br/>
    ```
       <div class="slider__item"> different content (img, text, video) </div>
    ```<br/>
    
  To start to slider, you need to import function *Slider()*
  ```javascript
  import Slider from "path/slider/slider";
  ``` 
  And call the function.<br/> 
  **Important** Uses destructorization when call a function.
  
  ## Call function
  ```javascript
  Slider({
    slider_item: '.slider__item' (string, content field selector ),
    slider_line: '.slider__line' (string, content field wrapper selector),
    slider_body: '.slider__body' (string, visible part selector),
    arrow_next: '.slider__arrow-next' (string, arrow next slide selector),
    arrow_prev: '.slider__arrow-prev' (string, arrow previous slide selector)
  });
   ```
   
   # Warning!!!
   Some files don't have functionality after compiling the code. But pushed to the ropository so you can see the development stages 
   and facilitation of customization.
