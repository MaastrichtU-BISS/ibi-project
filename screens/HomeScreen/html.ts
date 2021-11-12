export const html = () => `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <style type="text/css">
    #page-container {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      border: 0
    }

    @media screen {
      #page-container {
        bottom: 0;
        right: 0;
        overflow: auto
      }

      @media print {
        @page {
          margin: 0
        }

        html {
          margin: 0
        }

        body {
          margin: 0;
          -webkit-print-color-adjust: exact
        }

        #page-container {
          width: auto;
          height: auto;
          overflow: visible;
          background-color: transparent
        }
      }

      .pc {
        position: absolute;
        border: 0;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
        background-color: white;
      }

      .pc.opened {
        display: block
      }

      @media print {
        @-moz-document url-prefix() {
          .pc {
            overflow: visible
          }
        }
      }

      /* ::selection {
        background: rgba(127, 255, 255, 0.4)
      } */

      /* ::-moz-selection {
        background: rgba(127, 255, 255, 0.4)
      } */
      @media screen {
      #page-container {
        background-color: #9e9e9e;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
        -webkit-transition: left 500ms;
        transition: left 500ms
      }

      .pc.opened {
        -webkit-animation: fadein 100ms;
        animation: fadein 100ms
      }
    }

    .ff2 {
      font-family: ff2;
      line-height: 1.364258;
      font-style: normal;
      font-weight: normal;
      visibility: visible;
    }
    .h0 {
      height: 612.000000px;
    }

    .w0 {
      width: 792.000000px;
    }

    @media print {
      .h0 {
        height: 816.000000pt;
      }

      .w0 {
        width: 1056.000000pt;
      }
    }
  </style>


  <title></title>
</head>

<body>
  <div id="page-container">
    <div id="pf1" class="pf w0 h0" data-page-no="1">
      <div class="pc pc1 w0 h0"> </div>
    </div>
    <div id="pf2" class="pf w0 h0" data-page-no="2">
      <div class="pc pc2 w0 h0"> </div>
    </div>
    <div id="pf3" class="pf w0 h0" data-page-no="3">
      <div class="pc pc3 w0 h0"> </div>
    </div>
    <div id="pf4" class="pf w0 h0" data-page-no="4">
      <div class="pc pc4 w0 h0"> </div>
    </div>
  </div>
</body>

</html>
`
