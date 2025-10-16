
// 1. ÊÚÑíİ ÇáãÊÛíÑÇÊ æÇáÚäÇÕÑ
// ÇáãİÊÇÍ ÇáĞí ÓäÓÊÎÏãå áÍİÙ ÇáŞíãÉ İí ÇáÊÎÒíä ÇáãÍáí
const STORAGE_KEY = 'tasbeehCount'; 
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

// 2. ÏÇáÉ áÊÍãíá ÇáŞíãÉ ÇáãÍİæÙÉ
function loadCount() {
    // ãÍÇæáÉ ÌáÈ ÇáŞíãÉ ãä ÇáÊÎÒíä ÇáãÍáí ÈÇÓÊÎÏÇã ÇáãİÊÇÍ.
    // localStorage.getItem(key) ÊõÚíÏ ÇáŞíãÉ ßÓáÓáÉ äÕíÉ (string) Ãæ null ÅĞÇ áã ÊÌÏ ÔíÆÇğ.
    const storedCount = localStorage.getItem(STORAGE_KEY);
    
    // ÇáÊÍŞŞ ãä æÌæÏ ŞíãÉ. ÅĞÇ æõÌÏÊ¡ äÍæáåÇ Åáì ÑŞã (parseInt) æäÓÊÎÏãåÇ.
    // ÅĞÇ áã ÊæÌÏ (Ãæ ßÇäÊ null)¡ äÈÏÃ ãä 0.
    if (storedCount !== null) {
        return parseInt(storedCount, 10);
    }
    return 0; // ÇáŞíãÉ ÇáÇİÊÑÇÖíÉ ÅĞÇ áã íßä åäÇß ÔíÁ ãÍİæÙ
}

// 3. ÊÚÑíİ ÇáãÊÛíÑ count æÌÚáå íÍãøá ÇáŞíãÉ ãä ÇáĞÇßÑÉ
let count = loadCount(); 
// ÊÍÏíË ÇáÚÑÖ İæÑÇğ ÈÇáŞíãÉ ÇáãÍãáÉ
counterDisplay.textContent = count; 

// 4. ÏÇáÉ áÊÎÒíä ÇáŞíãÉ ÇáÍÇáíÉ
function saveCount(value) {
    // localStorage.setItem(key, value) áÍİÙ ÇáŞíãÉ. 
    // íÌÈ Ãä Êßæä ÇáŞíãÉ ÇáãÍİæÙÉ (value) ÓáÓáÉ äÕíÉ (string).
    localStorage.setItem(STORAGE_KEY, value.toString());
}

// 5. ÏÇáÉ ÒíÇÏÉ ÇáÚÏÇÏ (ÇáãõÚÏøáÉ)
function incrementCounter() {
    count++;
    counterDisplay.textContent = count;
    // ÇáÎØæÉ ÇáÌÏíÏÉ: ÍİÙ ÇáŞíãÉ ÇáÌÏíÏÉ İí ÇáĞÇßÑÉ ÇáãÍáíÉ
    saveCount(count); 
}

// 6. ÏÇáÉ ÊÕİíÑ ÇáÚÏÇÏ (ÇáãõÚÏøáÉ)
function resetCounter() {
    count = 0;
    counterDisplay.textContent = count;
    // ÇáÎØæÉ ÇáÌÏíÏÉ: ÍİÙ ÇáÕİÑ İí ÇáĞÇßÑÉ ÇáãÍáíÉ
    saveCount(count); 
    alert('Êã ÊÕİíÑ ÇáãÓÈÍÉ.');
}

// 7. ÑÈØ ÇáÏæÇá ÈÇáÃÒÑÇÑ ÚäÏ ÇáÖÛØ ÚáíåÇ
incrementBtn.addEventListener('click', incrementCounter);
resetBtn.addEventListener('click', resetCounter);
