   
   $(document).ready(function()
   {
      $('#Layer1').addClass('visibility-hidden');
      function Layer1Scroll()
      {
         var $obj = $("#Layer1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('Layer1', 'slide-down-in', 2000, 2000);
         }
      }
      Layer1Scroll();
      $(window).scroll(function(event)
      {
         Layer1Scroll();
      });
   });
      
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   
      ym(56430505, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true,
           webvisor:true
      });
   