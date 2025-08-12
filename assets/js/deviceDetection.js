// Nhận diện thiết bị và điều chỉnh giao diện
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const width = window.innerWidth;
    const body = document.body;
    
    body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    
    if (width < 768 || /android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        body.classList.add('device-mobile');
        console.log('Device: Mobile, Width:', width);
    } else if (width >= 768 && width < 1024) {
        body.classList.add('device-tablet');
        console.log('Device: Tablet, Width:', width);
    } else {
        body.classList.add('device-desktop');
        console.log('Device: Desktop, Width:', width);
    }
}

// Chạy khi tải trang
detectDevice();

// Cập nhật khi thay đổi kích thước màn hình
window.addEventListener('resize', detectDevice);
