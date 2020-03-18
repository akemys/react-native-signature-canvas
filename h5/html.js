const content = script =>
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Pad demo</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <style>
    body {
      font-family: Helvetica, Sans-Serif;
      background: white;
    
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  
    
    .m-signature-pad--body {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: none;
      border: 1px dashed gray;
      margin: 10% 15%;
    }
    
    .m-signature-pad--body
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
      }
 
  
      .button {
        position: absolute;
        padding: 0 20px;
        text-align: center;
        color: black;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
        font-size: 18px;
      }
      
     .button.clear {
         right: 15px;
        top: 15px;
      }
    
      .button.save {
        right: 15px;
        bottom: 15px;
      }
      
    @media screen and (max-width: 1024px) {
      .m-signature-pad {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: auto;
        min-width: 250px;
        min-height: 140px;
        margin: 0;
      }
      #github {
        display: none;
      }
    }
    
    @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      .m-signature-pad {
        margin: 10%;
      }
    }
    
    @media screen and (max-height: 320px) {
      .m-signature-pad--body {
        left: 0;
        right: 0;
        top: 0;
        bottom: 32px;
      }
      .m-signature-pad--footer {
        left: 20px;
        right: 20px;
        bottom: 4px;
        height: 28px;
      }
      .m-signature-pad--footer
        .description {
          font-size: 1em;
          margin-top: 1em;
        }
    }
    <%style%>
    </style>
</head>
<body onselectstart="return false">
  <div id="signature-pad" class="m-signature-pad">
    <div class="m-signature-pad--body">
      <canvas></canvas>
    </div>
     <button type="button" class="button clear" data-action="clear"><%clear%></button>
      <button type="button" class="button save" data-action="save"><%confirm%></button>
  </div>

  <script>
    ${script}
  </script>
</body>
</html>`;

export default content;
