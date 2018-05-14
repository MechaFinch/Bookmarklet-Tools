var helping = false;
var par = document.getElementById("help");

function showHelp() {
  helping = !helping;
  if(helping){
    par.innerHTML = "To create a bookmark, click and drag the link into the bookmarks bar.<br>If you want to create a folder for bookmarks, in chrome at least, right click the bar and click &quot;Create folder...&quot;.<br>To put a bookmark in a folder, either drag the link onto/into the folder, drag the bookmark onto/into the folder, or click &quot;Bookmark manager&quot; on the right click dropdown menu.<br>You can close this text by clicking the help button again.";
  } else {
    par.innerHTML = "";
  }
}
