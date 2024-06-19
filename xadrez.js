var str = "#";
var lines = prompt("Digite o número de linhas");

for (i = 0; i < lines; i++) {
  if (i % 2 == 0) {
    console.log("# # # #");
  } else {
    console.log(" # # # #");
  }
}
