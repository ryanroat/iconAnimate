function brakeChain() {
    const chain = document.querySelector('#chain');
    chain.innerHTML = '&#xf0c1';

    setTimeout(() => {
        chain.innerHTML = '&#xf127';
    }, 1000);
}

brakeChain();

setInterval(brakeChain, 2000);
