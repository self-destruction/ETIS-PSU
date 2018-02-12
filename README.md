# Скрипт для [ЕТИС ПГНИУ](https://student.psu.ru/)  

В проекте находится файл script.js, содержащий скрипт для браузера, выводящий **объекты**. В каждом объекте содержится название дисциплин и соответствующие итоговые оценки за триместр.  
Скрипт можно вызвать из консоли браузера:
Ctrl + Shift + J  
В появившееся окно вставить текст скрипта.
_Особенности:
* Для того, чтобы [спарсить](http://rustepan.ru/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%BF%D0%B0%D1%80%D1%81%D0%B8%D0%BD%D0%B3/) баллы за другие триместры, скрипт без перезагрузки страницы обновит данные на текущей странице, при этом слетят стили.  
* Обязательно нужно быть на странице [ЕТИС](https://student.psu.ru/).  
* Объекты возвращаются не в том порядке, в котором они вызываются.  
* Там, где нет баллов, возвращается NaN (Not a number).  
_