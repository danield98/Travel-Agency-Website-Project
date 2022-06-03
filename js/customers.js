let customers = document.querySelectorAll(`.customers-counter`);

customers.forEach(counter => {
    counter.innerText = `0`;

    const updateCounter = () => {
        const target = Number(counter.getAttribute(`data-target`));
        const c = Number(counter.innerText);   
        
        if(c < target) {
            counter.innerText = c + 1;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
})