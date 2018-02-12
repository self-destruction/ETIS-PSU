var getEvalTrim = function(trimestr) { 
    $.get(
        'https://student.psu.ru/pls/stu_cus_et/stu.signs', 
        { 'p_mode': 'current', 'p_term': trimestr }
    )
    .done(function(data){
        var i = 0;
        var listDisciplines = [];
        var listEval = [];
        var obj = {};

        $('html').html(data);
        $('h3').each(function() {
            listDisciplines.push($(this)[0].innerText);
        });
        $('tbody').each(function() {
            var this_node = $(this)[0].childNodes;
            var totalsValue = $(this_node[this_node.length-2])[0].childNodes[1].innerText;
            listEval.push(parseInt(totalsValue));
            obj[listDisciplines[i]] = listEval[i++];
        });
        console.log(obj);
    });
}

var i=1;

while(i<=7) {
    getEvalTrim(i++);
}