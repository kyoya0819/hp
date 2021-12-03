const top = (className: string) => {

    const elements = document.getElementsByClassName(className);

    const odd: {bottom: number, center: number}[] = [];
    const even: {bottom: number, center: number}[]= [];
    Array.from(elements).forEach((element, index) => {

        const target = element as HTMLElement;

        if ((index + 1) % 2 === 1) {

            const bottom = odd.length > 0  ? odd[odd.length - 1].bottom + 30 : 20;
            const center = even.length > 0 ? even[even.length - 1].center : 0;

            const top = Math.max(bottom, center);

            target.style.top = top + "px";

            const height = target.clientHeight;

            odd.push({
                bottom: top + height,
                center: top + (height / 2)
            });

        } else {

            const bottom = even.length > 0  ? even[even.length - 1].bottom + 30 : 50;
            const center = odd.length > 0 ? odd[odd.length - 1].center : 0;

            const top = Math.max(bottom, center);

            target.style.top = top + "px";

            const height = target.clientHeight;

            even.push({
                bottom: top + height,
                center: top + (height / 2)
            });
        }
    });

    const bottom = Math.max(odd[odd.length - 1].bottom, even[even.length - 1].bottom) + 20;

    (elements[0].parentElement as HTMLElement).style.height = bottom + "px";
};
export default top;