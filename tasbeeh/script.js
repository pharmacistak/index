
// 1. ����� ��������� ��������
// ������� ���� �������� ���� ������ �� ������� ������
const STORAGE_KEY = 'tasbeehCount'; 
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

// 2. ���� ������ ������ ��������
function loadCount() {
    // ������ ��� ������ �� ������� ������ �������� �������.
    // localStorage.getItem(key) ����� ������ ������ ���� (string) �� null ��� �� ��� �����.
    const storedCount = localStorage.getItem(STORAGE_KEY);
    
    // ������ �� ���� ����. ��� ����ʡ ������ ��� ��� (parseInt) ���������.
    // ��� �� ���� (�� ���� null)� ���� �� 0.
    if (storedCount !== null) {
        return parseInt(storedCount, 10);
    }
    return 0; // ������ ���������� ��� �� ��� ���� ��� �����
}

// 3. ����� ������� count ����� ����� ������ �� �������
let count = loadCount(); 
// ����� ����� ����� ������� �������
counterDisplay.textContent = count; 

// 4. ���� ������ ������ �������
function saveCount(value) {
    // localStorage.setItem(key, value) ���� ������. 
    // ��� �� ���� ������ �������� (value) ����� ���� (string).
    localStorage.setItem(STORAGE_KEY, value.toString());
}

// 5. ���� ����� ������ (���������)
function incrementCounter() {
    count++;
    counterDisplay.textContent = count;
    // ������ �������: ��� ������ ������� �� ������� �������
    saveCount(count); 
}

// 6. ���� ����� ������ (���������)
function resetCounter() {
    count = 0;
    counterDisplay.textContent = count;
    // ������ �������: ��� ����� �� ������� �������
    saveCount(count); 
    alert('�� ����� �������.');
}

// 7. ��� ������ �������� ��� ����� �����
incrementBtn.addEventListener('click', incrementCounter);
resetBtn.addEventListener('click', resetCounter);
