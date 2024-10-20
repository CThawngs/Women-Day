document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const cloud = document.querySelector('.cloud');
    const cloudRect = cloud.getBoundingClientRect();
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'drop';
        heart.innerText = '❤️';
        
        // Vị trí bắt đầu từ dưới dòng chữ
        const startX = cloudRect.left + (Math.random() * cloudRect.width);
        const startY = cloudRect.bottom + 60; // 60px là khoảng cách từ cloud đến chữ
        
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        
        // Kích thước ngẫu nhiên
        const size = 0.5 + Math.random() * 1.5;
        heart.style.fontSize = size + 'em';
        
        // Thời gian rơi ngẫu nhiên
        heart.style.animationDuration = 3 + Math.random() * 2 + 's';
        
        container.appendChild(heart);
        
        // Xóa trái tim sau khi animation kết thúc
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
    
    // Tạo trái tim mới mỗi 50ms
    setInterval(createHeart, 50);
});