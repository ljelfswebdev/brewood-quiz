
const createPagination = (totalBullets) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            if (index === 0) {
                return '<span class="' + className + '">-</span>';
            } else if (index === totalBullets - 2) {
                return '<span class="' + className + '">-</span>';
            } else {
                return '<span class="' + className + '">' + '<span class="index">' + (index ) + '</span>' + '</span>';
            }
        },
    };

    return pagination;
};

export default createPagination;
