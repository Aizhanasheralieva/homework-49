let blocksArray: string[] = [];

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {

        if (i % 2 === j % 2) {
            blocksArray.push(' ');
        } else {
            blocksArray.push('■');
        }
    }
    console.log(blocksArray.join(' '));
    blocksArray = [];
}

