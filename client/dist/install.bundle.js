(()=>{var t=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),installBtn.style.visibility="visible",textHeader.textContent="Click the button to install!",t.addEventListener("click",(function(){e.prompt(),t.setAttribute("disabled",!0),t.textContent="Installed!"}))})),window.addEventListener("appinstalled",(function(t){console.log("👍","appinstalled",t)}))})();