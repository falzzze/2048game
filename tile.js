export class Tile {
    constructor(gridElement) {
        this.tileElement = document.createElement("div");
        this.tileElement.classList.add("tile");
        this.value = Math.random() > 0.5 ? 2 : 4;
        this.tileElement.textContent = this.value;
        gridElement.append(this.tileElement);
    }

    setValue(value) {
        this.value = value;
        this.tileElement.textContent = value;
        const bgLightness = 100 - Math.log2(value) * 9;
        this.tileElement.style.setProperty("--bg-lightness", `${bgLightness}%`);
        this.tileElement.style.setProperty("--text-lightness", `${bgLightness < 50 ? 90 : 10}%`);
    } 

    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tileElement.style.setProperty("--x", x);
        this.tileElement.style.setProperty("--y", y);
    }


    removeFromDOM() {
        this.tileElement.remove()
    }


    waitForTransitionEnd() {
        return new Promise(resolve => {
            this.tileElement.addEventListener("transitionend", resolve, {once: true});
        })
    }

    waitForAnimationEnd() {
        return new Promises(resolve => {
            this.tileElement.addEventListener("tanimationend", resolve, {once: true});
        })
    }


}