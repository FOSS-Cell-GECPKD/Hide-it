const zeroWidthToBinary = string => (
    string.split('﻿').map((char) => { // invisible &#65279;
        if (char === '​') { // invisible &#8203;
            return '1';
        } else if (char === '‌') { // invisible &#8204;
            return '0';
        }
        return ' '; // split up binary with spaces;
    }).join('')
);

const binaryToText = string => (
    string.split(' ').map(num => String.fromCharCode(parseInt(num, 2))).join('')
);

const zeroWidthToText = username => {
    const zeroWidthUsername = username.replace(/[^​‌‍﻿]/g, '');
    const binaryUsername = zeroWidthToBinary(zeroWidthUsername);
    return binaryToText(binaryUsername);
};

export default zeroWidthToText

