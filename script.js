const details = document.querySelector("div#details");
const regex = /({)(.*?,)(.*?)(lol[lo]*)(.*?)(},)/gis;

const new_content = details.innerHTML.replace(
  regex,
  "<br> $2 <br> $3<span class='highlight'>$4</span>$5 <br>"
);

details.innerHTML = new_content;

console.log(new_content);
