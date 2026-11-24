const byId=(id)=>document.getElementById(id);
const support=byId("support"),clipboard=byId("clipboard"),status=byId("status");
support.textContent=("share" in navigator)?"Available":"Unavailable";
clipboard.textContent=("clipboard" in navigator && "writeText" in navigator.clipboard)?"Available":"Restricted or unavailable";
byId("url").value=location.href;
function payload(){return {title:byId("title").value.trim(),text:byId("text").value.trim(),url:byId("url").value.trim()};}
byId("share").addEventListener("click",async()=>{
 if(!navigator.share){status.textContent="Native sharing is not available here. Use Copy payload instead.";return;}
 const data=payload();
 if(navigator.canShare && !navigator.canShare(data)){status.textContent="This payload cannot be shared by the current browser.";return;}
 try{await navigator.share(data);status.textContent="Share sheet completed.";}
 catch(error){status.textContent=error.name==="AbortError"?"Sharing was cancelled.":`Share failed: ${error.message}`;}
});
byId("copy").addEventListener("click",async()=>{
 const data=payload();
 const text=[data.title,data.text,data.url].filter(Boolean).join("\n");
 try{await navigator.clipboard.writeText(text);status.textContent="Payload copied to clipboard.";}
 catch{status.textContent="Clipboard access is unavailable. Select the fields and copy them manually.";}
});
