let lat_abc = `<a href="music_a_list.html" class="collection-item"><span class="badge">1</span>A</a>
<a href="#!" class="collection-item"><span class="badge">1</span>B</a>
<a href="#!" class="collection-item"><span class="badge">1</span>C</a>
<a href="#!" class="collection-item"><span class="badge">1</span>D</a>
<a href="#!" class="collection-item"><span class="badge">1</span>E</a>
<a href="#!" class="collection-item"><span class="badge">1</span>G</a>
<a href="#!" class="collection-item"><span class="badge">1</span>H</a>
<a href="#!" class="collection-item"><span class="badge">1</span>I</a>
<a href="#!" class="collection-item"><span class="badge">1</span>J</a>
<a href="#!" class="collection-item"><span class="badge">1</span>K</a>
<a href="#!" class="collection-item"><span class="badge">1</span>L</a>
<a href="#!" class="collection-item"><span class="badge">1</span>M</a>
<a href="#!" class="collection-item"><span class="badge">1</span>N</a>
<a href="#!" class="collection-item"><span class="badge">1</span>O</a>
<a href="#!" class="collection-item"><span class="badge">1</span>P</a>
<a href="#!" class="collection-item"><span class="badge">1</span>R</a>
<a href="#!" class="collection-item"><span class="badge">1</span>S</a>
<a href="#!" class="collection-item"><span class="badge">1</span>T</a>
<a href="#!" class="collection-item"><span class="badge">1</span>U</a>
<a href="#!" class="collection-item"><span class="badge">1</span>V</a>
<a href="#!" class="collection-item"><span class="badge">1</span>W</a>
<a href="#!" class="collection-item"><span class="badge">1</span>X</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Y</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Z</a>`;
let cyr_abc = `<a href="#!" class="collection-item"><span class="badge">1</span>А</a> 
<a href="#!" class="collection-item"><span class="badge">1</span>Б</a>
<a href="#!" class="collection-item"><span class="badge">1</span>В</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Г</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Д</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Е</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ё</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ж</a>
<a href="#!" class="collection-item"><span class="badge">1</span>З</a>
<a href="#!" class="collection-item"><span class="badge">1</span>И</a>
<a href="#!" class="collection-item"><span class="badge">1</span>К</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Л</a>
<a href="#!" class="collection-item"><span class="badge">1</span>М</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Н</a>
<a href="#!" class="collection-item"><span class="badge">1</span>О</a>
<a href="#!" class="collection-item"><span class="badge">1</span>П</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Р</a>
<a href="#!" class="collection-item"><span class="badge">1</span>С</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Т</a>
<a href="#!" class="collection-item"><span class="badge">1</span>У</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ф</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Х</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ц</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ч</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ш</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Щ</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Э</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Ю</a>
<a href="#!" class="collection-item"><span class="badge">1</span>Я</a>`;

function check()
{
    var inp = document.getElementsByName('group1');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            list_abc.innerHTML = cyr_abc;
        }
        else {
            list_abc.innerHTML = lat_abc;
        }
    }
}


